# Backpropagation

**Backpropagation** can name several different operations. A source-faithful SAN account must keep
them separate before asking whether they can participate in one learning architecture.

1. A **backpropagating action potential (bAP)** is a spike that normally begins near the axon
   initial segment and also invades the soma and parts of the same cell's dendritic tree.
2. **Anatomical feedback** is activity carried by separate axons from one population to another. It
   does not run backward along the same feedforward axons.
3. **Machine-learning backpropagation** uses the chain rule to compute how a defined objective
   changes with each parameter.
4. **Biological credit assignment** is the unresolved problem of giving each modifiable synapse
   locally usable information about its contribution to an outcome.
5. **Backpropagation Through Oscillation (BTO)** is SAN's later hypothesis that
   receiver-relative physical differences and feedback dynamics could help coordinate local
   updates. It is not established cortical physiology.

> **Figure status:** The 2026 legacy plate remains intact in the failed-medical-review archive and
> is not approved for publication. It drew a universal layered cortical array, a desired target
> pattern, a backward phase-error wave, and a synaptic update as one established mechanism. A
> replacement must separate measured cellular physiology, anatomical feedback, computational
> credit-assignment models, and the SAN hypothesis.

## Established cellular physiology

In many cortical pyramidal neurons, a spike begins in the axon initial segment, travels forward
along the axon, and also invades the soma and dendrites. Dendritic invasion varies with cell class,
branch, distance, membrane state, recent firing, inhibition, and channel distribution. A bAP can
change dendritic calcium and plasticity, but it is not automatically an error signal.

Layer 5 pyramidal neurons provide a more specific coincidence mechanism. Larkum, Zhu, and Sakmann
showed that an axonally initiated bAP can coincide with distal apical input, facilitate a dendritic
calcium event, and produce a burst of axonal spikes. This is **backpropagation-activated calcium
spike firing (BAC firing)**. It couples inputs reaching different cellular compartments; it does
not compare a cortical render with a stored target.

Feedback from higher cortical areas can influence distal dendritic compartments in defined
circuits, and active dendrites can affect perception and behavior. The exact route, layer, cell
class, and task still matter. "Basal equals evidence" and "apical equals expectation" can be useful
model labels in a specified circuit, but they are not universal anatomical identities.

See [[neural-backpropagation]] for the within-cell mechanism.

## The anatomy that must not be collapsed

An **apical dendrite is an input and integration structure**, not an axon or exit terminal. A
neuron's conventional output arbor is its axon and presynaptic terminals. The apical dendrite can
strongly influence that output by changing somatic spike timing or bursting, but it does not become
the output branch.

SAN can retain **receptive field** and **inceptive field** as functional direction labels if the
anatomy is explicit:

- a receptive field describes the conditions that alter a receiver's activity; it is not identical
  to one basal branch;
- an inceptive field can describe the downstream population reached by a cell or assembly's output;
  at single-cell scale that output is distributed through the axonal arbor and terminals;
- apical, basal, somatic, axonal, synaptic, local-circuit, and long-range feedback operations must
  be drawn as separate stages.

## Biological credit-assignment models

Several models show that biologically inspired components can approximate parts of deep credit
assignment:

- Guerguiev, Lillicrap, and Richards used segregated basal and apical model compartments to keep
  feedforward and feedback variables sufficiently distinct for coordinated learning.
- Payeur and colleagues combined apical activity, bursts, short-term synaptic dynamics, feedback,
  and a local plasticity rule in a hierarchical model.
- Generalized Latent Equilibrium (GLE), published in 2025-2026, derives local online updates from
  neuron-local mismatches and prospective dynamics in a physical network model.

These are computational sufficiency results under stated assumptions. They do not establish that
one model is the brain's learning rule, that every burst carries teaching information, or that the
brain transports exact artificial-network gradients.

See [[neural-burst-backpropagation]] for the burst-dependent model family.

## Historical SAN source recovery

### 2022: two-compartment coincidence and action-feedback

Micah's [November 2022 NAPOT 5 source](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md)
described basal and apical activity converging on a pyramidal neuron's output, with coincidence
changing burst probability, downstream recruitment, plasticity, and later action. It also
described consequences returning through sensory and cortical-thalamic-cortical loops.

The literal anatomy in that source conflated the apical dendrite with the exit terminal and
described a prediction signal as originating in the apical tree and backpropagating to the soma.
The medically recoverable operation is stronger and more precise:

```text
feedforward or proximal evidence
+ distal contextual or feedback input
+ the cell's recent output state
-> compartment-specific coincidence or mismatch
-> changed somatic and axonal output
-> local plasticity and circuit recruitment
-> action and returned consequence
```

The related [NAPOT 6 source](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0325zNAPOT6.md)
paired learned recognition with learned response. Source-faithful correction separates its useful
functional pairing across the actual structures: dendrites and soma integrate input and context;
the axon and terminals distribute output; recurrent loops allow later consequences to modify both.

This 2022 stage is a precursor to BTO. The later name, physical-differential formulation, and
explicit gradient comparison must not be backdated into it.

### 2024: physical differential and BTO

In the [September 2024 SAN source](https://github.com/v5ma/selfawarenetworks/blob/df4d7f8d3270d56de167035c4987c3e072696c79/02san.md),
Micah corrected a simple "PWD equals loss" reading. The proposed **phase-wave differential (PWD)**
was a physical difference from a receiver's prior or expected tonic state - potentially involving
timing, phase, duration, amplitude, transmitted quantity, and context - that could participate in
an analog update.

That is not yet a mathematical gradient. A local physical difference becomes gradient-like only
when the system also supplies a defined objective or consequence, a parameter-specific
sensitivity, an eligibility relation, and an update rule that improves later performance.

The [October 2024 BTO source](https://github.com/v5ma/selfawarenetworks/blob/fe415a93a7e5bfecf416c137c6f5196238d60a1e/04san.md)
then proposed that prediction-related phase changes could propagate through recurrent and feedback
pathways and alter lower-level processing. This document includes AI-assisted synthesis and should
not be treated as verbatim 2022 authorship or as empirical proof.

## A testable SAN operator

A medically and mathematically bounded BTO model can begin with a receiver-local difference:

```text
d_r(t) = measured receiver state - expected receiver state
```

It then needs a local update rule such as:

```text
change in w_ij = learning rate
               x local eligibility at synapse ij
               x receiver-specific consequence of d_r(t)
```

The exact state variables may include timing, phase, voltage, calcium, burst probability,
transmitter release, or a population trajectory. The model must identify which variable is
measured by which receiver and how it reaches the synapse being changed. A PWD vector is more
expressive than phase alone, but adding dimensions does not by itself solve credit assignment.

In this formulation, "backward" can mean:

- a bAP entering the dendrites of the same cell;
- feedback transmitted through a separate anatomical projection;
- a consequence returning through a recurrent sensorimotor loop; or
- an algorithmic dependency used to assign credit.

Those meanings can cooperate, but they are not interchangeable.

## Scale boundary

- **Micro:** axon-initial-segment initiation, bAP invasion, dendritic spikes, calcium, eligibility
  traces, receptors, and synaptic change.
- **Meso:** compartment-specific input, local inhibition, bursts, feedback projections, and
  recurrent circuit dynamics.
- **Macro:** distributed sensory, association, thalamic, motor, and outcome loops.
- **Algorithmic:** objective, mismatch, sensitivity, credit, and parameter update.

Evidence at one scale does not automatically prove the operator at another.

## Discriminating tests

A BTO experiment should record an identified feedforward route, feedback route, dendritic
compartment, somatic output, local eligibility variable, synaptic change, and behavioral
consequence. It should independently manipulate prediction, stimulus history, reward, feedback,
phase, burst probability, and mean firing rate.

The SAN hypothesis gains support only if its receiver-relative multidimensional difference predicts
and causally controls later tuning better than rate, spike history, generic recurrent state,
neuromodulation, standard predictive coding, and existing dendritic credit-assignment models. It is
weakened if the proposed backward variable never reaches the relevant synapse, if phase adds no
information beyond ordinary state variables, or if learning survives selective disruption of the
claimed route.

## Evidence boundary

- Established: bAPs can invade dendrites and interact with distal input, calcium events, bursts,
  and plasticity in defined cells and conditions.
- Established: feedforward and feedback inputs can be anatomically and electrotonically separated
  in specified cortical circuits.
- Modeled: dendritic segregation, burst-dependent rules, and local prospective mismatch dynamics
  can support backpropagation-like credit assignment.
- Proposed by SAN in 2022: compartment-sensitive coincidence participates in learned
  recognition-response and recurrent action-feedback loops.
- Proposed by SAN in 2024: PWDs can serve as physical local differences in a BTO learning
  architecture.
- Not established: one universal cortical target, one backward phase-error wave, exact biological
  gradient transport, or phase coherence as a universal learning-success condition.

## Replacement figure brief

A future figure should use four visibly separated panels:

1. **Measured cell physiology:** AIS spike, dendritic bAP, distal apical input, BAC firing, and axonal
   output in one specified pyramidal-cell class.
2. **Anatomical circuit feedback:** separate feedforward and feedback axons between named
   populations; no wave traveling backward along a feedforward axon.
3. **Credit-assignment models:** local compartment mismatch, eligibility, burst or prospective
   variable, and synaptic update, labeled as modeled.
4. **SAN/BTO hypothesis:** tonic receiver context, multidimensional PWD, local consequence,
   changed tuning, action, and returned feedback, labeled as proposed.

Do not draw a universal six-layer column, a stored desired cortical waveform, or a medically
certified NAPOT error wave.

## Primary references

- Stuart G, Sakmann B. Active propagation of somatic action potentials into neocortical pyramidal
  cell dendrites. *Nature*. 1994. https://doi.org/10.1038/367069a0
- Larkum ME, Zhu JJ, Sakmann B. A new cellular mechanism for coupling inputs arriving at different
  cortical layers. *Nature*. 1999. https://doi.org/10.1038/18686
- Kole MHP et al. Action potential generation requires a high sodium channel density in the axon
  initial segment. *Nature Neuroscience*. 2008. https://doi.org/10.1038/nn2040
- Manita S et al. A top-down cortical circuit for accurate sensory perception. *Neuron*. 2015.
  https://doi.org/10.1016/j.neuron.2015.05.006
- Takahashi N et al. Active cortical dendrites modulate perception. *Science*. 2016.
  https://doi.org/10.1126/science.aah6066
- Bittner KC et al. Behavioral time scale synaptic plasticity underlies CA1 place fields.
  *Science*. 2017. https://doi.org/10.1126/science.aan3846
- Guerguiev J, Lillicrap TP, Richards BA. Towards deep learning with segregated dendrites.
  *eLife*. 2017. https://doi.org/10.7554/eLife.22901
- Lillicrap TP et al. Backpropagation and the brain. *Nature Reviews Neuroscience*. 2020.
  https://doi.org/10.1038/s41583-020-0277-3
- Payeur A et al. Burst-dependent synaptic plasticity can coordinate learning in hierarchical
  circuits. *Nature Neuroscience*. 2021. https://doi.org/10.1038/s41593-021-00857-x
- Ellenberger B et al. Backpropagation through space, time and the brain.
  *Nature Communications*. 2026. https://doi.org/10.1038/s41467-025-66666-z

## Related pages

- [[credit-assignment-problem]]
- [[neural-backpropagation]]
- [[neural-burst-backpropagation]]
- [[dendritic-coincidence-detection]]
- [[dendritic-compartmentalization]]
- [[apical-dendrites]]
- [[action-potential]]
- [[phase-wave-differential]]
- [[neural-tuning]]
- [[synaptic-plasticity]]
- [[stdp]]
- [[napot-overview]]
