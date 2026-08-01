# Action-Potential Phase Space

An **action-potential phase space** is an abstract mathematical coordinate system for describing
the changing state of an excitable membrane. It is not anatomical three-dimensional space,
oscillatory phase by itself, a stored picture, or a field that an inner viewer observes.

The historical SAN sources used *phase*, *topology*, *tensor*, and *Taylor sequence* while moving
among cellular, population, and represented-space questions. Their medically bounded operation is
not one universal phase space. It is a sequence of declared source states, synaptic
transformations, receiver states, and recurrent population updates.

![Action-potential phase space from declared cellular variables to a bounded SAN cross-scale hypothesis](../assets/generated/san/action-potential-phase-space/action-potential-phase-space-declared-state-cross-scale-20260720-v1.png)

> **Figure status:** This medically reviewed replacement correctly separates a cellular state model, a reduced phase portrait, population and organism-level observation spaces, and the receiver-relative SAN test. It does not yet illustrate the separately recovered 2022 proposal that ordered state differences may support a Taylor-like local approximation. The failed predecessor remains quarantined and is not embedded.

> **Scientific boundary:** A state-space trajectory can summarize dynamics under a declared model. It does not, by itself, identify a memory, semantic content, a conscious percept, or a universal neural code.

## What occupies the state space?

In the Hodgkin-Huxley model, the cellular state can be written as:

`x_cell(t) = [V(t), m(t), h(t), n(t)]` [1]

`V` is membrane voltage; `m`, `h`, and `n` are dimensionless gating variables. The equations and
applied current determine how this point moves through a four-dimensional state space. Hodgkin and
Huxley derived this conductance-based model from voltage-clamp measurements in squid giant axon. It
is foundational physiology, not a complete model of every mammalian neuron
([Hodgkin and Huxley, 1952](https://pubmed.ncbi.nlm.nih.gov/12991237/)).

A two-dimensional plot such as voltage versus a recovery variable is a **projection or reduced
model**. Morris and Lecar analyzed voltage oscillations in barnacle giant muscle fiber using a
two-conductance model. Its variables and parameters are not interchangeable with
Hodgkin-Huxley variables or with an arbitrary cortical neuron
([Morris and Lecar, 1981](https://pubmed.ncbi.nlm.nih.gov/7260316/)).

## How to read a phase portrait

Within a declared model:

- A **point** is the current modeled state.
- A **trajectory** is the sequence of states produced by the equations, input, and initial condition.
- A **fixed point** is a state that remains unchanged under the model.
- A **limit cycle** is a repeating trajectory.
- A **nullcline** marks where one selected derivative is zero.
- A **separatrix** divides modeled regions with different future behavior.

The geometry depends on the selected variables, parameters, cell type, compartment, temperature,
ionic concentrations, and inputs. The same membrane voltage can have different futures when
recovery, adaptation, calcium, channel inactivation, or synaptic state differs. Voltage alone is
not the complete dynamical state.

## Three state spaces, not one automatic scale jump

### Micro: cellular excitability

A cellular state space may include membrane voltage, gating variables, intracellular calcium,
adaptation, compartment-specific conductances, and recent input. It can explain spike initiation,
repolarization, recovery, bursting, and bistability under the chosen model.

### Meso: population dynamics

A local-circuit state space may use firing rates, membrane potentials, latent population
dimensions, excitatory-inhibitory balance, or measured oscillatory relationships. Population
trajectories have been used to study motor-cortical dynamics and context-dependent computation, but
these are observation models over many neurons, not enlarged single-cell phase portraits. See
[Churchland et al. (2012)](https://doi.org/10.1038/nature11129) and
[Mante et al. (2013)](https://pubmed.ncbi.nlm.nih.gov/24201281/).

### Macro: distributed organism state

A distributed state description may combine cortical, thalamic, subcortical, sensory, autonomic,
and motor measurements. Any mapping from cellular to population to organism-level state requires
an explicit observation function, time scale, anatomical boundary, and validation against held-out
measurements.

For scale `q`, let:

`z_q(t) = O_q(x(t))` [2]

`O_q` is the declared observation function. An EEG trace, a population latent dimension, a calcium
signal, and behavior are different projections. Similar-looking trajectories do not make their
underlying variables identical.

## Fast state and slower learning are different operations

The failed predecessor equated transient sodium or potassium channel states with short-term memory
and protein synthesis with long-term memory. That is too direct. A safer two-timescale description
is:

`dx/dt = F(x, u; theta)` [3]

`dtheta/dt = G(x, u, timing, modulation)` [4]

`x` contains fast activity variables such as voltage, gating, calcium, adaptation, and recent
synaptic state. `theta` contains slower parameters such as conductances, synaptic strengths,
receptor distributions, intrinsic excitability, morphology, and connectivity. The current state
can retain path dependence without being identical to a psychological short-term memory. Lasting
plasticity can change `theta`, and therefore change the vector field that governs later
trajectories, without making every protein-synthesis event a long-term memory.

This is the medically accurate operation behind the source's phrase **topological change**:
learning can alter the structural graph and the dynamical landscape through which later activity
moves.

## The recovered SAN state-transition proposal

The author-dated 2014 source asked how differential equations could represent ongoing changes in
charge, learned morphology, connectivity, receptor state, and neural output. Its literal ion
assignments were inaccurate, but its recoverable question was valid: how does learned cellular
structure change a neuron's state transition and the receiver pattern that follows?

The July 7, 2022 source then proposed a temporally ordered sequence:

`phasic + tonic + inhibited events -> distributed state differences -> coincidence recognition -> downstream array transformation -> updated population trajectory`

The medically bounded receiver-relative formulation is:

1. A source neuron or population occupies a measured state `x_s(t)`.
2. An input perturbs that state and changes its output trajectory.
3. Axons, boutons, synapses, and target-cell state transform the source output.
4. A receiver occupies a distinct state `x_r(t)` and produces a conditional response.
5. Recurrent population activity, inhibition, and action-related feedback alter the next state.
6. Repeated activity and plasticity may also alter the slower parameters governing future paths.

The proposed informational unit is the reproducible **difference a transition makes to a specified
receiver and later network state**. One action potential does not contain a complete scene, and one
phase portrait is not consciousness.

## What the Taylor-sequence analogy was trying to say

The July 2022 source compared successive neural state differences with terms in a Taylor sequence.
The useful mathematical idea is local approximation. For a declared observed state `z(t)`:

`z(t + dt) ~= z(t) + z'(t)dt + (1/2)z''(t)dt^2 + ...` [5]

Established mathematics supplies equation [5]. It does not show that neurons symbolically compute
Taylor coefficients. The open SAN hypothesis is that temporally ordered, receiver-used differences
provide physical samples from which a recurrent network can learn increasingly accurate local
predictions of a sensory, motor, or internal trajectory.

In this interpretation:

- A tonic state supplies the receiver-relative local reference.
- A phasic or inhibitory event supplies a signed departure.
- Synaptic and dendritic transformation determines what the receiver actually measures.
- A sequence of departures supplies first-order and potentially higher-order history.
- Recurrent learning changes both the estimated trajectory and the routes used on later cycles.

The claim is weakened if rate, spike timing, adaptation, connectivity, and ordinary recurrent
dynamics explain prediction equally well. It is strengthened only if higher-order,
receiver-relative state differences add held-out prediction and causal control.

## Four meanings of topology that must not be collapsed

The source's phrase **3D phase topology** can refer to four different objects:

1. **Physical anatomy:** where cells, axons, dendrites, and synapses are located in tissue.
2. **Connection topology:** which elements are connected and with what direction or weight.
3. **State-space geometry:** trajectories, basins, manifolds, and transitions in a declared model.
4. **Represented structure:** relations among features, objects, body state, space, or possible action.

SAN hypothesizes mappings among these objects. It does not establish point-for-point identity among
them. A biological test must specify the encoding and decoding maps rather than calling every
spatial or relational pattern the same topology.

## Relationship to tonic canvas and phasic ink

In SAN terminology, a tonic population state can be treated as a changing reference region in a
declared population state space. A phasic event is a departure that may move the system onto a
different trajectory. Coherent recruitment and structured dispersion may alter which receivers are
affected. These are proposed operational roles, not decorative metaphors, but they require
measurements at the scale where they are claimed.

No universal synchrony target is assumed. A useful internal model may depend on locally coherent
assemblies, selectively inhibited routes, phase-separated populations, and recurrent updates
rather than maximal global coherence. The coordinated network performs the observer-action
process; no separate viewer watches the trajectory.

## A discriminating test

Record source neurons, axonal or bouton variables where feasible, receiver neurons, local population
activity, and behavior during controlled perturbations. Compare:

1. Spike count and timing only.
2. Cellular trajectory variables.
3. Cellular variables plus synaptic and receiver state.
4. First-order differences plus recent history.
5. Higher-order or nonlinear history-dependent models.
6. The full receiver-relative recurrent model with slower plasticity parameters.

The SAN addition is supported only if the full model predicts held-out receiver responses, later
population trajectories, or behavior better than simpler alternatives. Selective perturbation of
the proposed state variable must produce the predicted impairment and rescue. The hypothesis is
weakened if conventional input, connectivity, adaptation, synaptic-state, and population-dynamics
models explain the result equally well.

## Scientific layers

**Established mathematics and physiology:** declared state variables, differential equations,
phase portraits, reduced projections, population trajectories, recurrent dynamics, and
activity-dependent plasticity are valid tools and phenomena.

**Evidence-supported interpretation:** recent state and slower learned parameters jointly constrain
which trajectory follows an input; receiver and recurrent context improve a source-only
description.

**Open SAN hypothesis:** ordered phasic, tonic, and inhibited state differences are transformed
across neural arrays and provide receiver-relative samples for increasingly accurate local
approximation, rendering, and action.

**Not established:** one universal neural phase space, a direct amplitude-frequency inversion across
scales, transient ion-channel gates as psychological short-term memory, every protein change as
long-term memory, a literal Taylor polynomial inside a neuron, or a phase-space trajectory as
consciousness.

## Source genealogy

- **2014, author-dated; Git-fixed June 10, 2022:** the recovered source asks how differential
  equations could represent changing charge, morphology, connectivity, receptor state, and output.
  It also proposes that learning changes the cellular program governing later responses:
  [a0008z](https://github.com/v5ma/selfawarenetworks/blob/0e73da1a76427937a8203c2fa9e1306c3114505e/a0008z.md).
- **July 7, 2022:** the initial Taylor-sequence source proposes ordered phasic, tonic, and inhibited
  events, coincidence recognition, distributed neural-array states, downstream dendritic reception,
  and local approximation of represented structure:
  [a0149z](https://github.com/v5ma/selfawarenetworks/blob/738abec60a19d3c438ee04d6d6f01c1b110fd981/a0149z.md).
- **September 6, 2024:** the first `02san.md` version develops receiver-relative PWD, tonic-reference
  differences, recurrent updating, and discrete events viewed as an apparently continuous
  higher-level process:
  [02san](https://github.com/v5ma/selfawarenetworks/blob/64f018d2d93b7de6718058c4724c43b40e5dd4b7/02san.md).

The 2024 terminology clarifies the earlier proposal but is not backdated to 2022.

## Related concepts

- [[action-potential]]
- [[action-potential-waveform]]
- [[action-potential-waveform-encoding]]
- [[phase-space-dynamics]]
- [[phase-wave-differential]]
- [[tonic-phasic-phase-wave-differential]]
- [[san-scale-ladder-and-claim-boundaries]]
- [[napot-overview|NAPOT]]
