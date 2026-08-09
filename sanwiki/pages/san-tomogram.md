---
title: "SAN Tomogram: A Distributed, Action-Ready Reconstruction"
tags: [san, san-tomogram, napot, metatron, neural-rendering, distributed-observer]
aliases: [SAN Tomogram, Distributed SAN Tomogram]
summary: "The present-day Encyclopedia label for SAN's proposed changing, distributed, embodied working state, jointly constrained by partial projections and used by the same observer-action system."
status: governed
---

# SAN Tomogram: A Distributed, Action-Ready Reconstruction

**SAN Tomogram** is the Encyclopedia's present-day label for the changing, distributed,
embodied state that SAN proposes is jointly constrained by many partial neural projections and
used by the same system for recognition, prediction, imagination, and action.

It is not an optical picture, a brain scan, a hologram, a three-dimensional object stored in one
dendrite, or a completed scene delivered to an inner viewer. The cited 2022 sources use the terms
*tomogram*, *Tomograms*, and *tomographic rendering*. This page uses **SAN Tomogram** to name that
source family clearly; it does not backdate the exact compound term to 2022.

## The operation

```text
partial sensory, bodily, memory, and recurrent signals
-> stateful transformations in cells and bounded populations
-> anatomically constrained projection and recurrent redistribution
-> a distributed, action-ready working state
-> recognition, sampling, report, autonomic regulation, or movement
-> changed sensory and bodily input for the next cycle
```

The **SAN Tomogram** is the distributed working state in the middle of this loop. **NAPOT** names
the proposed receive-transform-project-reconstruct operation that keeps revising it. A
[[metatron|Metatron]] is a proposed stateful [[artificial-neurology|artificial-neurology]] unit or bounded functional assembly that
could contribute to such a process. These three terms therefore name different parts of the
architecture:

| SAN term | Role | Boundary |
|---|---|---|
| Metatron | Candidate stateful computational unit | One declared artificial unit, compartmental model, or bounded assembly |
| NAPOT | Candidate recurrent reconstruction operation | Repeated receive, transform, project, combine, use, and update cycle |
| SAN Tomogram | Candidate distributed working state | The changing relation across participating neural, bodily, and environmental variables |

No Metatron, neuron, cortical column, or brain region contains the complete SAN Tomogram.

## From point unit to distributed state

A basic point-unit abstraction compresses input into a small output such as a scalar activation.
Modern artificial networks already add recurrence, attention, continuous vectors, memory, and
state-space dynamics. SAN's narrower proposal is that an Artificial Neurology may also need to
preserve selected receiver-relative variables that biological point abstractions discard:
spatial input organization, dendritic or compartmental state, inhibition, event timing, waveform
or duration, recurrent context, plastic structure, and embodied consequences.

The 2022 whitepaper gives the Metatron a multiscale interpretation. Its functional location can be
distributed across an oscillating assembly whose members learn related variants; at another scale,
the bounded assembly can act as a unit relative to another assembly. A medically and
computationally defensible implementation must declare that boundary. Calling a correlated group
a Metatron is not enough.

The causal bridge is therefore:

```text
stateful local unit or bounded assembly
-> partial receiver-specific transformation
-> output to other named receivers
-> recurrent composition across many units and routes
-> distributed SAN Tomogram
-> action and reafferent correction
```

## A formal specification, not a claim about symbolic brain math

For a declared unit or population `j`, let its state change according to:

\[
\mathbf m_{j,t+1}=F_j(\mathbf m_{j,t},\mathbf u_{j,t},\mathbf c_{j,t}),
\qquad
\mathbf o_{j,t}=H_j(\mathbf m_{j,t},\mathbf u_{j,t}).
\]

Here `u` is received input, `c` is local or recurrent context, `m` is maintained state, and `o` is
the consequence available to declared downstream receivers. A candidate SAN Tomogram can then be
represented as a distributed latent state:

\[
\mathbf T_t=G(\{\mathbf m_{j,t},\mathbf o_{j,t}\}_{j\in J},\mathbf b_t,\mathbf e_t),
\]

where `b` and `e` denote relevant bodily and environmental state. `G` is a scientific
specification to be estimated and compared with alternatives. SAN does not require neurons to
write this equation or one decoder to recover every component of `T`.

The state matters only when the system uses it:

\[
\mathbf a_t=\Pi(\mathbf T_t),
\qquad
(\mathbf b_{t+1},\mathbf e_{t+1})=P(\mathbf a_t,\mathbf b_t,\mathbf e_t).
\]

Action changes the body or environment, and those consequences constrain the next reconstruction.

## Historical source ladder

1. **July 5, 2022:** `a0258z.md` describes a volumetric, time-varying tomographic rendering,
   distributed neural arrays, and excitation-inhibition patterns that move and re-express state.
   The language is historically important but does not establish a literal Euclidean movie in the
   brain. [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/71bbb1aa7cb672d15fbc6e3abf3487fefe4dc8b8/a0258z.md#L3-L9)
2. **August 19, 2022:** `a0053z.md` connects the Perceptron critique, action-potential waveform
   variation, phase-sensitive transmission, and a distributed volumetric tomographic pattern.
   The medically bounded version separates potassium conductance, waveform, calcium entry,
   probabilistic release, and postsynaptic consequence.
   [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/a3ad84338cd6529b2448e4452fdb3d82c76163bd/a0053z.md#L93-L102)
3. **August 24, 2022:** `whitepaperdraft2.md` says that neural arrays jointly produce Tomograms and
   that receptors and dendrites participate in receiving the changing pattern. It also defines the
   Metatron as a virtual functional unit in an oscillating assembly and allows a bounded assembly
   to function as a unit relative to another assembly.
   [Tomogram source](https://github.com/v5ma/selfawarenetworks/blob/b56ae48e8abac67f3c3e89ee641c360f34b39f02/whitepaperdraft2.md#L202-L208)
   [Metatron source](https://github.com/v5ma/selfawarenetworks/blob/b56ae48e8abac67f3c3e89ee641c360f34b39f02/whitepaperdraft2.md#L270-L272)
4. **September 4, 2022:** `a0053z.md` explicitly names the proposed new neuron model the Metatron.
   [Immutable source](https://github.com/v5ma/selfawarenetworks/blob/2daa1e1cd535e8cdfbbf4e5a9baecd74099f31c5/a0053z.md#L104-L108)
5. **Current synthesis:** the SAN Book 2 accomplishment spine uses **SAN Tomogram** for the
   distributed, embodied pattern reconstructed and used by the same network. That phrase is a
   current synthesis of the earlier source family, not an earlier fixation date.

These sources establish SAN's genealogy and intended architecture. They do not independently
validate its physiology or consciousness claim.

## What established neuroscience supports

Established work supports several components without demonstrating a SAN Tomogram:

- population-level recurrent dynamics can select and integrate task-relevant evidence in a
  context-dependent macaque task ([Mante et al., 2013](https://doi.org/10.1038/nature12742));
- structured population trajectories can organize motor-cortical activity during reaching
  ([Churchland et al., 2012](https://doi.org/10.1038/nature11129));
- recurrent processing contributes to difficult object-recognition conditions in the primate
  ventral stream ([Kar et al., 2019](https://doi.org/10.1038/s41593-019-0392-5)); and
- multisensory populations can weight visual and vestibular evidence according to reliability
  ([Fetsch et al., 2012](https://doi.org/10.1038/nn.2983)).

These studies support distributed population computation, recurrence, state dependence, and
multisensory integration. They do not show that the brain performs a Radon transform, contains one
complete three-dimensional scene, uses phase as a universal content alphabet, or generates
consciousness through a tomographic operator.

## What three-dimensional can mean

SAN's historical 3D language can be separated into testable possibilities:

- a body- and world-centered spatial relation represented across populations;
- a latent state with more than two mathematical dimensions;
- activity distributed through three-dimensional anatomy;
- an externally decoded volumetric estimate; or
- the stronger SAN claim of an experienced volumetric body-world model.

Evidence for one meaning does not establish the others. A decoder that produces a recognizable 3D
image demonstrates recoverable structure under its measurement and training pipeline. It does not
show that the native neural format is an image or that a brain contains a screen.

## The distributed observer boundary

The SAN Tomogram is not watched. The participating network registers the state by being changed by
it. That changed state alters later recognition, prediction, sampling, report, and action. The
observer-action operation is therefore the recurrent biological and embodied consequence, not a
separate reader downstream of `T`.

SAN's [[phase-wave-differential-calculus|tonic-canvas/phasic-ink hypothesis]] adds a more specific proposal: relatively maintained
receiver state supplies context, while consequential departures alter the distributed working
state. This claim must identify the receiver and outperform simpler explanations based on firing
rate, power, ordinary recurrent state, movement, arousal, and recent history.

## A discriminating experiment

Choose one bounded latent target, such as hand-object relation, sound-source location, or body
posture during a defined task. Record declared sensory, recurrent, motor, and body variables. Then
compare capacity-matched models:

1. feedforward rate or feature model;
2. conventional recurrent or state-space model;
3. compartmental or active-dendrite model;
4. Metatron-inspired model with declared receiver-relative variables; and
5. full distributed reconstruction model with action and reafferent state.

Require held-out prediction of both the latent target and the next behavioral or physiological
consequence. Selectively perturb one proposed route, timing relation, or state variable and test a
predicted degradation and rescue. The SAN account gains support only if its extra variables add
reproducible causal and predictive value beyond the simpler models.

It is weakened when a simpler model performs equally well, when the proposed distributed state
does not predict action, when perturbation produces no selective loss, or when a recognizable
decoder output depends on confounds rather than the declared biological route.

## Read next

- [[perceptron-deep-learning-metatron|From the Perceptron to Deep Learning to the Metatron]]
- [[metatron-computational-unit|Metatron Computational Unit]]
- [[napot-overview|NAPOT Overview]]
- [[neural-rendering|Neural Rendering]]
- [[canvas-is-the-receiver|The Canvas Is Also the Receiver]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]
- [[artificial-cortex|Artificial Cortex]]
