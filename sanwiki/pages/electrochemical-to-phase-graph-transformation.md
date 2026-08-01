# Electrochemical-to-Phase Graph Transformation

## The idea in plain language

A road map tells you which roads exist. It does not tell you which roads are open, busy, or
important during one trip. Neural anatomy has the same limitation. Synapses, inhibition, delays,
membrane state, and ongoing activity determine which anatomical connections matter now.

In June 2022, [[gh-a0167z|a0167z]] described this as a transformation from an electrochemical graph
to a phase/frequency graph. The useful modern reading is:

```text
possible connections
-> currently effective influences
-> changing relations among neural phases
-> perception, action, and feedback
```

The phase graph is a measurement model of relative timing and coupling among neural elements. It
is not a second anatomical network and it is not automatically a conscious image.

## What the source family adds

- [[gh-a0039z|a0039z]] describes arrays that repeatedly receive, transform, and transmit in a
  multiscale network.
- [[gh-a0066z|a0066z]] names a four-dimensional tempo-spatial phase graph used and changed by the
  same system.
- [[gh-a0167z|a0167z]] states the electrochemical-to-phase graph transformation directly.
- [[gh-a0171z|a0171z]] joins dendritic coincidence, phase change, spatial relation, rendering, and
  action in a compact NAPOT sequence.
- [[gh-a0442z|a0442z]] proposes a three-dimensional graph model for EEG, which must still solve an
  inverse problem rather than treating scalp voltage as a direct cellular picture.

The graph wording is SAN's engineering and scientific abstraction. Biological cortex should not
be presented as literally identical to a modern graph-neural-network implementation.

## The four layers

1. **Structural graph:** connections that could carry influence.
2. **Functional graph:** measured statistical dependence.
3. **Effective graph:** directed influence under a declared state and task.
4. **Phase graph:** time-varying relative phase, lag, coupling, and uncertainty.

SAN's testable proposal is that the fourth layer adds useful information about which route,
percept, or action becomes effective after the first three are controlled.

## The connectome is the possibility graph

The constructive meaning of "structure is not current participation" is that anatomy supplies a
repertoire rather than one permanently active computation:

```text
structural route
+ excitation and inhibition
+ receptor and membrane state
+ neuromodulation
+ timing and phase
+ task and learning
-> currently effective route
```

Structural connectivity therefore matters twice. It constrains where influence can travel, and its
geometry shapes the dynamic states a circuit can support. Functional and effective participation
can still change from moment to moment on that relatively stable structure. This is consistent with
work showing that anatomical priors can improve estimates of directed dynamic connectivity and that
structural organization shapes, but does not uniquely determine, transient functional
coordination. See [Pascucci et al. (2022)](https://pubmed.ncbi.nlm.nih.gov/35733424/) and
[Shen et al. (2015)](https://pubmed.ncbi.nlm.nih.gov/25855174/).

The SAN extension is a nested model test: after anatomy, rate, power, and ordinary connectivity are
included, ask whether receiver-relative waveform and phase relations reproducibly identify the
route that becomes effective. A positive result would support an added dynamic phase-graph layer,
not a second literal anatomy.

## What is established

Research supports changing effective connectivity on fixed anatomy and time-varying phase
networks. For example, [Battaglia et al.](https://doi.org/10.1371/journal.pcbi.1002438) modeled
switchable effective-connectivity motifs under different phase relations, while
[Menceloglu et al.](https://doi.org/10.1371/journal.pone.0296827) analyzed synchronized EEG
clusters interacting at large phase lags.

Those results do not prove SAN's rendering or consciousness claims. Phase measures can be distorted
by common input, volume conduction, source leakage, reference choice, and estimator assumptions.

## The decisive test

Compare nested held-out models of one sensory-to-action task:

```text
anatomy
< anatomy + rate and power
< anatomy + ordinary connectivity
< anatomy + effective connectivity
< all above + receiver-relative phase graph
```

Then perturb a declared phase window or route and predict the next neural state, action, and
returned consequence. The SAN extension fails if the phase graph adds no reproducible prediction
or causal leverage.

## Paper implication

This supports an unnumbered candidate: **From Electrochemical Connectivity to Dynamic Phase
Graphs: A Testable SAN Network-State Model**. It must be checked against NAPOT, PWD, Choice, and
the coherence-dispersion candidate before receiving a paper number.

## The spike is one transformation in a longer channel

[[gh-a0571z|a0571z]] and [[gh-a0573z|a0573z]] preserve an early question that later became central
to SAN: what information is lost when neural communication is represented as a scalar spike or
weight? A source cell's dendritic and somatic state affects spike initiation; propagation reaches
many terminals; terminal history and calcium affect release; transmitter, receptor, and target
state transform the postsynaptic consequence.

The source wording sometimes opposes action potentials and communication too sharply. The repaired
chain keeps the action potential as an essential intraneuronal stage while showing why it is not
the whole intercellular message.
## Read next

- [[neural-ensemble-phase-reset-communication|Neural Ensemble Phase-Reset Communication]]
- [[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and PWD]]
- [[neural-path-selection-interneurons-choice|Neural Path Selection and Choice]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]

