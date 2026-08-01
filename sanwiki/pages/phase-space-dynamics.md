# Phase Space Dynamics

**Phase space dynamics** describes how a system's declared state changes over time. A point in phase
space is not a place in the brain. It is a list of measured or modeled variables. A trajectory is
the ordered sequence of those states under specified inputs, parameters, and initial conditions.

For SAN, phase-space language becomes useful only after three questions are answered:

1. Which physical variables define the state?
2. Which cell, circuit, instrument, or behavior supplies the observation?
3. What receiver or action changes because the trajectory took one path rather than another?

This page connects cellular excitability, population dynamics, receiver-relative phase-wave
differences, slower learning, and distributed observer-action without treating one mathematical
portrait as memory, perception, or consciousness.

> **Scientific boundary:** Phase space is a modeling framework. Attractors, manifolds, latent dimensions, oscillatory phases, and graph spectra are different mathematical objects. None is automatically a neural code or a conscious observer.

## State, rule, trajectory, and observation

A general dynamical model can be written as:

`dx/dt = F(x(t), u(t); theta)` [1]

Here:

- `x(t)` is the declared state.
- `u(t)` is external or recurrent input.
- `theta` contains model parameters.
- `F` is the rule that determines local change.

An experiment rarely observes every coordinate of `x`. Instead:

`z_q(t) = O_q(x(t)) + epsilon_q(t)` [2]

`O_q` is the observation function for measurement scale `q`, and `epsilon_q` includes noise and
unmodeled effects. Membrane voltage, calcium fluorescence, spike counts, EEG, fMRI, a latent
population coordinate, electromyography, and behavior are different observations. Similar
trajectories in two observation spaces do not establish that they represent the same variable or
mechanism.

The [[action-potential-phase-space]] page gives the bounded cellular example. Hodgkin and Huxley's
voltage and gating variables form one state model
([Hodgkin and Huxley, 1952](https://pubmed.ncbi.nlm.nih.gov/12991237/)). Morris and Lecar used a
different reduced system to study oscillatory and bistable behavior in barnacle giant muscle fiber
([Morris and Lecar, 1981](https://pubmed.ncbi.nlm.nih.gov/7260316/)). Neither model is a universal
phase portrait for every neuron.

## Micro, meso, and macro dynamics

### Micro: cell and compartment

A cellular state may include voltage, channel gating, calcium, adaptation, compartment-specific
conductances, metabolic variables, and recent synaptic input. Different initial states can produce
different responses to the same new input.

### Meso: local circuit and population

A population state may include activity from many excitatory and inhibitory cells, measured phase
relations, or latent dimensions estimated from recordings. Churchland and colleagues reported
rotational population dynamics during reaching
([Churchland et al., 2012](https://doi.org/10.1038/nature11129)). Mante and colleagues showed that
context-dependent computation in macaque prefrontal cortex could be understood as a population
dynamical process reproduced by a trained recurrent network
([Mante et al., 2013](https://pubmed.ncbi.nlm.nih.gov/24201281/)).

Those results do not make every neural computation a low-dimensional rotation. Michaels and
colleagues showed that latency structure in a representational model can also produce rotational
population patterns, demonstrating why an analysis signature must be compared with alternatives
([Michaels et al., 2016](https://pubmed.ncbi.nlm.nih.gov/27814352/)).

### Macro: distributed brain, body, and action

A macro state may combine cortical, thalamic, basal-ganglia, cerebellar, autonomic, sensory, motor,
and behavioral measurements. It is not an enlarged cellular state. The mapping among scales
requires explicit aggregation, time alignment, anatomy, and held-out validation.

## Attractors, saddles, and paths

Within a declared model:

- An **attractor** is a state or set toward which nearby trajectories tend to evolve.
- A **limit cycle** is a repeating trajectory.
- A **basin** is a region whose initial states approach the same attractor.
- A **saddle** has locally attracting and repelling directions.
- A **bifurcation** is a qualitative change in dynamics as a parameter changes.

These concepts can describe persistence, switching, sequence generation, and sensitivity to input.
They do not prove that a memory is one attractor or that a percept is one basin. A learned behavior
may involve changing inputs, parameters, connectivity, receiver state, and bodily feedback, not
merely settling into a fixed point.

The SAN question is therefore not only **which attractor exists?** It is also:

`which receiver transformation and feedback path made this trajectory consequential?`

## Fast trajectories and slower learning

Learning can change the dynamical system that generates later trajectories. A two-timescale model
can write:

`dx/dt = F(x, u; theta)` [3]

`dtheta/dt = G(x, u, timing, modulation, outcome)` [4]

Fast state `x` can carry recent history through voltage, gating, calcium, adaptation, and synaptic
state. Slower parameters `theta` can include conductances, synaptic strengths, receptor
distribution, intrinsic excitability, morphology, and connectivity.

This distinction recovers a central SAN source question without turning it into false memory
anatomy. Opening an ion channel is not automatically a psychological short-term memory. Producing
a protein is not automatically a long-term memory. The medically meaningful operation is that
recent state changes the immediate path, while plasticity can alter the vector field and connection
graph governing later paths.

## Receiver-relative phase-wave differences

The 2022 SAN sources proposed that phasic, tonic, and inhibited events should be treated as an
ordered, spatially distributed state sequence rather than as independent scalar spikes. The later
PWD formulation makes the departure receiver-relative.

For receiver `r`, a bounded event difference can be written as:

`d_r,k = O_r(x(t_k after)) - E_r[x(t_k) | context_r]` [5]

`E_r` is the receiver's expected or tonic reference under its current context. Equation [5] is not
a claim that every neuron explicitly stores a probability distribution. It states the measurement
burden: a PWD must specify the event, reference, receiver, and consequence.

The proposed chain is:

`source-state departure -> axonal and synaptic transformation -> receiver response -> recurrent route change -> later state or action`

Coherence can support recruitment when timing and receiver properties favor summation. Structured
dispersion, inhibition, or splay can separate routes and preserve distinctions. Maximal global
synchrony is not the target.

## Taylor-like local approximation

The July 7, 2022 source compared successive neural differences with a Taylor sequence. The
established mathematical operation is:

`z(t + dt) ~= z(t) + z'(t)dt + (1/2)z''(t)dt^2 + ...` [6]

SAN does not need neurons to calculate symbolic coefficients. Its open proposal is that discrete
receiver-used events, when ordered through time, supply samples of local change. A recurrent
population may use current value, first difference, curvature, and longer history to improve its
next-state approximation.

This proposal must compete against simpler and broader alternatives:

- Spike count and timing.
- Adaptation and synaptic state.
- Recurrent-network dynamics.
- State-space models with latent variables.
- Nonlinear history-dependent and Volterra models.
- Predictive-processing and control models.

The Taylor language is useful only if the proposed higher-order state differences improve
prediction or causal control beyond those alternatives.

## NDCA: later distributed approximation proposal

In a December 2024 multi-speaker research conversation, Micah proposed **Nonlinear Continuous
Differential Approximation (NDCA)** as a higher-level account of how brain regions repeatedly
receive, transform, compare, and update partial viewpoints. The source also recognized that
feedback is heterogeneous: it can excite, inhibit, retime, tune, gate, correct, or alter learning
rather than always reinforce.

The bounded NDCA operation is:

`partial regional state -> context-dependent transformation -> comparison and feedback -> updated local model -> coordinated action`

The word *continuous* refers to the higher-level trajectory, not to an absence of discrete neural
events. Spikes, synaptic releases, and PWD events have beginnings and ends. Their repeated,
overlapping effects can be modeled as a continuous process at coarser temporal resolution.

NDCA remains a SAN hypothesis. Established recurrent dynamics and distributed feedback provide
components, but they do not prove that every brain region runs the same approximation algorithm or
that all feedback serves one global objective.

## Four different spaces

Source-faithful use of phase-space language requires four spaces to remain distinct:

1. **Physical space:** the three-dimensional locations of cells, fibers, vessels, and body.
2. **Graph space:** the directed and weighted pattern of structural or effective connections.
3. **State space:** the variables and trajectories of a declared model.
4. **Represented space:** the inferred relations among objects, body states, memories, goals, or possible actions.

SAN proposes that learned biological maps transform information among these spaces. It does not
establish a point-for-point copy among them. The mapping must name the source, transformation,
receiver, reference frame, and behavioral consequence.

## Distributed observer-action

A trajectory does not need a hidden viewer. In the positive SAN account, cells and populations
receive state-dependent inputs, transform them, project outputs, recruit or inhibit later routes,
and alter perception, memory, or action. The distributed network and body perform the observation
through their changing responses.

Tonic context is the current receiver-relative reference region. Phasic and inhibitory departures
change the path. Recurrent feedback updates both local states and, through plasticity, some of the
parameters that govern later trajectories. The observer-action process is this continuing causal
organization, not a picture watched inside one area.

## Discriminating model comparison

Record cellular, synaptic, receiver-population, distributed-network, bodily, and behavioral
variables during a task with controlled context changes. Compare:

1. Count and timing only.
2. Cellular state trajectory.
3. Synaptic and receiver-state model.
4. Population latent-state model.
5. First-order receiver-relative differences.
6. Higher-order or nonlinear history model.
7. Recurrent model with slower plasticity parameters and action feedback.

A SAN/NDCA extension is supported only if its declared variables improve held-out prediction and if
selective perturbation produces the predicted impairment and rescue. It is weakened when simpler
models explain the receiver response, later trajectory, and behavior equally well.

## Scientific layers

**Established mathematics and neuroscience:** dynamical systems, conductance models, reduced phase
portraits, population trajectories, recurrent computation, heterogeneous feedback, and
activity-dependent plasticity.

**Evidence-supported interpretation:** neural behavior depends on current state, recent history,
connectivity, receiver context, and parameters that learning can change.

**Open SAN hypothesis:** ordered receiver-relative departures, transformed across recurrent neural
arrays, supply a physical approximation process that links tonic context, phasic difference,
rendering, learning, and action.

**Later NDCA hypothesis:** differently specialized regions repeatedly update partial viewpoints
through heterogeneous feedback and coordinate a distributed working model without one executive
or inner viewer.

**Not established:** one universal low-dimensional manifold, one brain-wide attractor as a percept,
one algorithm in every cortical column, literal Taylor polynomials computed by neurons, magnetic
or electric fields as self-decoding observers, or a population trajectory as consciousness.

## Source genealogy

- **2014, author-dated; Git-fixed June 10, 2022:** differential equations, changing cellular state,
  learned structure, receiver effects, and topology are joined as an early problem statement:
  [a0008z](https://github.com/v5ma/selfawarenetworks/blob/0e73da1a76427937a8203c2fa9e1306c3114505e/a0008z.md).
- **June 27, 2022:** tonic expectation, recurrent phase patterns, action planning, and the
  no-localized-observer question are joined:
  [a0206z](https://github.com/v5ma/selfawarenetworks/blob/27a9f198d7f664d0a4b6edf6a08b7732331af110/a0206z.md).
- **July 7, 2022:** the initial ordered phasic/tonic/inhibited sequence and Taylor-like local
  approximation proposal appears:
  [a0149z](https://github.com/v5ma/selfawarenetworks/blob/738abec60a19d3c438ee04d6d6f01c1b110fd981/a0149z.md).
- **September 6, 2024:** receiver-relative PWD and discrete events forming a coarser continuous
  process are developed:
  [02san](https://github.com/v5ma/selfawarenetworks/blob/64f018d2d93b7de6718058c4724c43b40e5dd4b7/02san.md).
- **December 17, 2024:** the later NDCA generalization appears in a multi-speaker research
  conversation. Micah's proposals and the AI interlocutor's expansions must remain separately
  attributed:
  [resnote04](https://github.com/v5ma/selfawarenetworks/blob/c675a0de85f4236cb57da27dcd1206f14a94e18e/resnote04.md).

## Related concepts

- [[action-potential-phase-space]]
- [[attractor]]
- [[phase-attractor]]
- [[near-threshold-saddle-point-dynamics]]
- [[cortical-column-manifolds]]
- [[phase-wave-differential]]
- [[tonic-phasic-phase-wave-differential]]
- [[neural-tuning]]
- [[ndca|Nonlinear Continuous Differential Approximation]]
- [[observer-mechanism]]
- [[observer-as-aggregate-expectation]]
- [[napot-overview|NAPOT]]
