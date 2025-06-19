# Schrödinger Equation Solver

An interactive quantum mechanics visualization tool that solves and animates the time-dependent Schrödinger equation for various potential configurations.

## Features

### 🌊 Quantum System Simulation
- **Time-dependent Schrödinger equation solver** using the split-operator method
- **Real-time wavefunction evolution** with customizable time steps
- **Multiple potential types** including harmonic oscillator, infinite/finite square wells, step potentials, barriers, and double wells
- **Various initial states** including Gaussian wave packets, energy eigenstates, superposition states, and coherent states

### 📊 Interactive Visualizations
- **Wavefunction plotting** showing real and imaginary components
- **Probability density visualization** with filled area plots
- **Phase space representation** for momentum-position analysis
- **Energy spectrum display** for eigenstate analysis
- **Real-time animation** of quantum evolution

### ⚛️ Quantum Measurements
- **Expectation values** for position ⟨x⟩ and momentum ⟨p⟩
- **Uncertainty calculations** (Δx, Δp) with Heisenberg uncertainty principle verification
- **Total energy** computation including kinetic and potential components
- **Normalization verification** for quantum state validity

### 🎨 Modern UI/UX
- **Futuristic aurora-themed design** with gradient animations
- **Responsive layout** optimized for desktop and tablet viewing
- **Interactive controls** with real-time parameter adjustment
- **Tabbed visualization interface** for different quantum observables
- **Loading animations** with quantum orbital effects

## Physics Implementation

### Numerical Methods
- **Split-operator technique** for time evolution
- **Fast Fourier Transform (FFT)** for momentum space calculations
- **Finite difference methods** for spatial derivatives
- **Normalized wavefunctions** ensuring quantum probability conservation

### Supported Potentials
1. **Harmonic Oscillator**: V(x) = ½mω²x²
2. **Infinite Square Well**: V(x) = ∞ for |x| > L/2
3. **Finite Square Well**: V(x) = V₀ for |x| > L/2
4. **Step Potential**: V(x) = V₀ for x > 0
5. **Potential Barrier**: V(x) = V₀ for |x| < a/2
6. **Double Well**: Custom double-well configuration

### Initial States
- **Gaussian Wave Packet**: Localized state with definite position/momentum
- **Energy Eigenstate**: Stationary states with definite energy
- **Superposition**: Linear combination of multiple eigenstates
- **Coherent State**: Quantum harmonic oscillator coherent states

## Usage

### Getting Started
1. Open `index.html` in a modern web browser
2. Select your desired potential type from the dropdown
3. Configure initial conditions (position, momentum, wave packet width)
4. Adjust potential parameters (frequency, well width, barrier height, etc.)
5. Click "Solve Equation" to generate the quantum solution
6. Use the time evolution slider to animate the wavefunction

### Controls
- **Potential Type**: Choose from 6 different quantum potentials
- **Initial State**: Select Gaussian, eigenstate, superposition, or coherent state
- **Energy Level (n)**: For eigenstate calculations (1-10)
- **Initial Position (x₀)**: Starting position of the wave packet
- **Initial Momentum (p₀)**: Initial momentum of the particle
- **Wave Packet Width (σ)**: Spatial spread of the initial state
- **Particle Mass (m)**: Effective mass of the quantum particle
- **Evolution Time**: Real-time animation control (0-20 time units)

### Visualization Tabs
- **Wavefunction**: Real and imaginary parts of ψ(x,t)
- **Probability Density**: |ψ(x,t)|² probability distribution
- **Phase Space**: Momentum-position representation
- **Energy Spectrum**: Energy eigenvalue analysis

## Technical Requirements

### Browser Compatibility
- Modern browsers with ES6+ support
- WebGL capability for smooth animations
- Plotly.js for scientific plotting

### Dependencies
- [Plotly.js](https://plotly.com/javascript/) (v2.27.0) - Loaded via CDN
- No additional installation required

### Performance
- Optimized for 512-point spatial grids
- Real-time FFT calculations
- Efficient split-operator time evolution
- Smooth 60fps animations

## Educational Applications

### Quantum Mechanics Concepts
- **Wave-particle duality** visualization
- **Heisenberg uncertainty principle** demonstration
- **Quantum tunneling** through potential barriers
- **Energy quantization** in bound systems
- **Superposition and interference** effects

### Physics Courses
- Undergraduate quantum mechanics
- Advanced physics laboratories
- Computational physics demonstrations
- Research visualization tool

## Scientific Accuracy

This simulation implements the full time-dependent Schrödinger equation:
```
iℏ ∂ψ/∂t = Ĥψ = [-ℏ²/2m ∇² + V(x)]ψ
```

The numerical methods are research-grade and suitable for:
- Educational demonstrations
- Preliminary research calculations
- Method development and testing
- Quantum algorithm prototyping

## Browser Requirements

- **Chrome/Safari/Firefox**: Latest versions recommended
- **JavaScript**: ES6+ support required
- **WebGL**: For optimal rendering performance
- **Screen Resolution**: 1024x768 minimum, 1920x1080+ recommended

## License

This project is open source and available for educational and research purposes.

---

*Experience quantum mechanics through interactive visualization and real-time simulation.*