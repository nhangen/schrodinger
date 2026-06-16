// Run: node --test test.mjs
// Pins the numerical core of the solver. fft/Complex are loaded from the
// production index.html (single source of truth) and exercised directly;
// expected values come from physics identities (Parseval, Hermitian
// symmetry, round-trip), not from re-running the implementation against
// itself. The inline momentum-density loop can't be imported without
// extracting it to a module, so its normalization constant is checked via
// the Parseval invariant rather than pinned line-for-line.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

function loadSolver() {
    const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
    const body = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]
        .map(m => m[1])
        .find(s => s.includes('function fft'));
    const stub = 'var window={onload:null};var document={getElementById:()=>null,querySelectorAll:()=>[],addEventListener(){}};\n';
    return new Function(stub + body + '\nreturn { Complex, fft, ifft };')();
}

const { Complex, fft, ifft } = loadSolver();

test('fft of a real signal is Hermitian-symmetric: |X[i]| == |X[N-i]|', () => {
    const N = 16;
    const x = Array.from({ length: N }, (_, n) => new Complex(Math.cos(2 * Math.PI * 3 * n / N), 0));
    const X = fft(x);
    for (let i = 1; i < N / 2; i++) {
        assert.ok(Math.abs(X[i].magnitude() - X[(N - i) % N].magnitude()) < 1e-9,
            `bin ${i} not symmetric with ${(N - i) % N}`);
    }
});

test('ifft(fft(x)) round-trips back to x', () => {
    const N = 8;
    const x = Array.from({ length: N }, (_, n) => new Complex(n - N / 2, 0.5 * n));
    const r = ifft(fft(x));
    for (let i = 0; i < N; i++) {
        assert.ok(Math.abs(r[i].real - x[i].real) < 1e-9 && Math.abs(r[i].imag - x[i].imag) < 1e-9,
            `mismatch at ${i}`);
    }
});

test('fft rejects non-power-of-2 lengths', () => {
    assert.throws(() => fft(new Array(6).fill(new Complex(1, 0))), /power-of-2/);
});

test('momentum density integrates to 1 over dk (Parseval), matching position', () => {
    const N = 64, L = 20, dx = L / N;
    let wf = Array.from({ length: N }, (_, n) => {
        const xp = -L / 2 + n * dx;
        return new Complex(Math.exp(-xp * xp / 2), 0);
    });
    let s = 0;
    for (const p of wf) s += p.magnitude() ** 2 * dx;
    s = Math.sqrt(s);
    wf = wf.map(p => new Complex(p.real / s, p.imag / s));

    const psiK = fft(wf);
    const dk = 2 * Math.PI / (N * dx);
    const kNormFactor = dx * dx / (2 * Math.PI);

    let integral = 0;
    const momentum = [];
    for (let idx = 0; idx < N; idx++) {
        const i = (idx + N / 2) % N;
        momentum.push((i < N / 2) ? i * dk : (i - N) * dk);
        integral += psiK[i].magnitude() ** 2 * kNormFactor * dk;
    }
    assert.ok(Math.abs(integral - 1) < 1e-3, `momentum integral ${integral} != 1`);
    for (let i = 1; i < momentum.length; i++) {
        assert.ok(momentum[i] > momentum[i - 1], `momentum axis not ascending at ${i}`);
    }
});
