---
title: "Neural Array Projection Oscillation Tomography"
tags: [san, napot, phase-wave-differential, receiver-relative, neural-rendering, reconstruction, oscillations, distributed-processing]
status: governed
---

# Neural Array Projection Oscillation Tomography

**Neural Array Projection Oscillation Tomography (NAPOT)** is SAN's proposed architecture for combining partial, time-varying neural and body-state signals into a distributed working model that guides further perception and action. Every declared receive-transform-project-update relation in that architecture is PWD-bearing: a [[phase-wave-differentials|Phase-Wave Differential]] (PWD) names the typed departure registered by a declared receiver relative to its declared tonic or reference pattern.

The proposal is broader than ordinary convergence and divergence, but narrower than the claim that one neuron, cortical column, frequency band, or brain region reconstructs the whole experienced world. NAPOT must be evaluated as a family of declared operations at specific scales.

> [!important] PWD is core to the mechanism, not a later variable
> A PWD may involve excitation, inhibition, a missing expected event, delay, or an interaction among
> these effects. NAPOT uses that receiver-relative relation throughout reception, transformation,
> projection, recurrence, integration, memory, rendering, and action. PWD is not an extra payload
> computed after an otherwise completed update, a gamma-only signal, a final output box, or
> excitation minus inhibition.

## The central mechanism

NAPOT can be written as a recurrent PWD-bearing receive-transform-project-update process:

```text
partial sensory, bodily, memory, and recurrent signals
-> receiver-specific biological transformation and typed departure from reference
-> temporary integration of PWD-bearing relations
-> distributed projection of their consequences to new receivers
-> changed sampling, memory, prediction, and action
-> next cycle
```

The arrows denote coupled analytic views across multistep functional routes, not universal direct synaptic connections or completed stages followed by PWD. Each receiver transforms an event according to its receptors, dendrites, membrane state, excitation, inhibition, neuromodulation, recent history, and current network context, thereby registering its own typed departure from reference.

At a local receiver, many inputs can converge and one output can diverge to many targets. Across the
larger system, however, NAPOT is recurrent and many-to-many. It does not require one global
convergence point, one generic neuron that directly receives every feature, or one bottleneck that
contains the completed percept. Each downstream receiver establishes a new receiver-relative PWD
relation rather than receiving a context-free PWD object.

## A bounded operational form

For a declared receiver `r`, let `u_r(t)` be its incoming events, `x_r(t)` its current biological
state, `c_r(t)` its maintained tonic or comparison context, and `h_r(t)` its recent history. The core
PWD relation can be written as a typed receiver-relative departure:

```text
d_r^s(t) = D_r[u_r(t), x_r(t), c_r(t), h_r(t)]                      [1]
```

Here `s` identifies the declared consequence type or interaction, such as excitation, inhibition,
missing-expected input, delay, or a measured combination. The receiver update is coupled to that
relation rather than completed before it:

```text
x_r(t + dt) = F_r[u_r(t), x_r(t), c_r(t), h_r(t), d_r^s(t)]          [2]
```

The receiver then affects a target `q` through an anatomically declared projection:

```text
p_r->q(t + dt) = G_r->q[x_r(t + dt), d_r^s(t)]                       [3]
```

The candidate NAPOT working state is the distributed set of these changing receiver states and
relations, not an additional object behind them:

```text
W(t) = {x_r(t), d_r^s(t), p_r->q(t)} across declared receivers/routes [4]
```

These equations are coupled analytic relations and an experimental bookkeeping scaffold. Their
numbering does not make PWD a first, second, or final processing stage. They do not claim that neurons
symbolically evaluate the functions or that the same variables and time constants apply at cellular,
circuit, and whole-network scales.

## Reception, transformation, and projection

### Reception

Dendritic branches and local circuits gather many inputs and establish the receiver and context against which a departure can matter. A receptive field is a measured relation between input conditions and a response; it is not a miniature picture stored on a dendrite or a context-free PWD packet.

### Transformation

Inputs interact nonlinearly. Branch-local dendritic events, somatic integration, excitation, inhibition, recurrent activity, and synaptic history can make the same nominal input produce different consequences at different times. In SAN's architecture, the typed departure registered by that declared receiver is its PWD relation.

### Projection

A neuron's ordinary output leaves through its axon and presynaptic terminals. At larger scales, populations influence other populations through target-specific pathways. Projection carries consequences of a PWD-bearing receiver state; it does not carry one receiver's PWD unchanged into the next receiver. SAN's **inceptive field** names the declared downstream target set and measurable effects of that output; it is a functional proposal, not a second dendritic anatomy.

See [[receptive-inceptive-dendritic-projection|Receptive and Inceptive Dendritic Projection]].

## The scale ladder

### Micro NAPOT

A neuron receives many synaptic inputs, registers a typed departure relative to its current context, integrates the resulting state, and projects an axonal consequence. Established cellular physiology supports the component motif. Calling the complete relation PWD-bearing or tomographic is SAN architecture because one neuron does not reconstruct the complete percept.

### Meso NAPOT

A local circuit or cortical population combines excitatory, inhibitory, timing, state, and interaction departures into a PWD-bearing population relation and redistributes its consequences. Recurrent population dynamics are established, but cortical areas are not interchangeable copies of one universal column algorithm or one gamma-only PWD layer.

### Macro NAPOT

Distributed cortical, thalamic, hippocampal, association, and sensorimotor systems combine partial information across recurrent PWD-bearing loops. NAPOT proposes that their coordinated updates maintain an action-ready body-world model. No single region is the final screen, completed PWD box, or observer.

## Tomography without a hidden viewer

Tomography is useful here because a reconstruction can be constrained by many partial projections. It is limited because neural tissue does not receive a ready-made set of geometric rays and does not have a known CT-style inverse solver.

A valid NAPOT model must define:

- the receiver and its tonic or reference pattern;
- what variable is sampled;
- which cells or populations provide each projection;
- the transform applied by each receiver;
- the typed excitatory, inhibitory, delayed, missing-expected, or interaction departure;
- the reconstruction target;
- the comparison or error measure;
- the spatial and temporal scale; and
- the behavioral consequence.

The distributed network performs the observer operation by changing its own state and what it does next. The theory does not place perception inside a smaller internal agent. See [[screen-metaphor-no-inner-viewer|Screen Metaphor, No Inner Viewer]].

## What NAPOT says is physically reconstructed

The SAN proposal is not merely that an outside scientist can decode a picture from brain activity.
It is that the brain maintains a sparse, distributed, body-relative state whose PWD-bearing relations carry the
currently usable scene, remembered constraints, felt significance, and possible actions. A
three-dimensional percept therefore need not be copied into a localized three-dimensional voxel
display. Its depth, object, body, and viewpoint relations can be distributed across the network that
uses them.

The stronger SAN identity hypothesis is that this evolving distributed state is the experienced
rendering itself, rather than a representation presented to another observer. Tonic population state
supplies a maintained receiver and comparison context; typed PWD relations supply changing detail;
recurrent pathways, cellular receivers and transmitters, and embodied consequences collectively
perform observer-action. This is a SAN hypothesis, not an established conclusion of systems
neuroscience.

## Oscillation and phase-wave differentials

This section supplies measurement language for a relation already used throughout NAPOT; its later
position on the page does not make PWD secondary. Oscillation supplies changing excitability and
timing relationships. SAN uses PWD for the typed receiver-relative departure from a maintained tonic
or reference context, including excitation, inhibition, missing-expected events, delay, and their
interactions.

This is stronger than saying that phase or rate carries information. A particular proposed phase,
timing, waveform, or interaction feature set earns incremental support only if it improves prediction
of a receiver's later state, routing, reconstruction, or behavior beyond rate, power, phase, cue
identity, and conventional prediction error. Failure would narrow or reject that operationalization;
it would not make PWD a late or secondary NAPOT stage.

Coherence and dispersion can both matter. Phase-compatible activity may support temporary coupling, while structured separation can preserve boundaries or suppress competing routes. Maximal synchrony is not the goal, and random desynchronization is not automatically meaningful differentiation.

## Fast updates, recurrent absorption, and slower learning

NAPOT separates three consequences that historical language can otherwise compress together:

1. **Immediate consequence:** an excitatory, inhibitory, modulatory, delayed, missing-expected, or interaction event registers a receiver-relative PWD while changing a membrane or population state.
2. **Recurrent consequence:** consequences of that PWD-bearing state propagate and are transformed; each downstream receiver registers its own relation, while the initiating event may gradually lose its identity as a separate event.
3. **Plastic consequence:** repeated or appropriately timed activity can bias short-term plasticity, LTP, LTD, structural change, or later route readiness.

The third consequence is conditional. A PWD is not automatically a memory write, and fading into a
tonic context is not literal erasure. The SAN proposal is that recurrence gives a differentiated event
time to affect other tissue and routing before the network settles into its next state. See
[[tonic-absorption-generative-reexpression|Tonic Absorption and Generative Re-expression]] and
[[synaptic-plasticity|Synaptic Plasticity]].

## Established science and SAN-specific claims

| Level | Current status |
|---|---|
| PWD as core SAN architecture across each declared receiver relation | Documented SAN core concept: a typed receiver-relative departure from a declared tonic or reference pattern, not a later empirical add-on. |
| Nonlinear dendritic integration | Established in bounded cell types and preparations. |
| Convergent, divergent, recurrent, and feedback pathways | Established, with pathway-specific anatomy and function. |
| Population dynamics and traveling cortical waves | Established as measurable phenomena related to task and state. |
| Distributed working representations | Supported across many systems; their content and causal role depend on task and measurement. |
| A repeated receive-transform-project motif across scales | A useful abstraction; not proof that one identical biological operator exists at every scale. |
| NAPOT reconstruction of a body-world model | SAN hypothesis. |
| Particular biological variables proposed to operationalize PWD | Open empirical instantiation requiring comparison with simpler coding models at the same scale. |
| The distributed field-cell system as observer-action | Stronger SAN hypothesis requiring intervention and decoding tests. |

Architectural rank and incremental empirical support are different questions. Evidence can support,
narrow, or reject a particular PWD feature set without making PWD secondary to NAPOT or to the
component mechanisms listed above it.

## Historical development

The recovered genealogy separates operations from the later names attached to them:

- **September 2012:** the [neuron-as-program source](https://x.com/i/web/status/248495906763177984) proposes that learned morphology and whole-cell state constrain recognition, transformation, and structured output. It is an architectural ancestor, not NAPOT.
- **April 2017:** [Neural Lace Podcast 1](https://github.com/v5ma/selfawarenetworks/blob/main/nlp1.md) asks whether the difference between a present neural pattern and a desired pattern can be transmitted through a discovered brain protocol. It is a difference-and-write-back ancestor, not PWD or NAPOT.
- **October 2021 through August 2022:** [`b0131y.md`](https://github.com/v5ma/selfawarenetworks/blob/main/b0131y.md) develops partial-view, receiver-specific, recurrent reconstruction. Recording date, first Git fixation, expanded transcript, and stabilized route remain separate dates.
- **August 5 and August 22, 2022:** the [first SAN Whitepaper](https://github.com/v5ma/selfawarenetworks/wiki/Whitepaper/fe458a04b5938e7a15fdbc081a2d1079c68d1f7b) publicly integrates the named receive-transform-project architecture, memory scaling, multimodal reconstruction, and distributed-observer proposal.
- **August 23, 2022:** [[gh-a0306z|a0306z]] names the **Phase Wave Differential** while developing a multidimensional receiver-relative update account. The later name is not backdated into 2012, 2017, or 2021.
- **September 18, 2022:** the public [NAPOT Theory, Fifth Revision video](https://www.youtube.com/watch?v=vixhppNAKPs) explains the Revision 5 synthesis. Revision numbering records development; it does not place PWD after the receive-transform-project architecture or make it secondary.
- **November 28, 2022:** [`a0325zNAPOT6.md`](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0325zNAPOT6.md) preserves Revision 6's action-side and inceptive-field questions.

The later quantum-biological, entification, three-dimensional rendering, and NDCA branches have
their own source and authorship boundaries. The chronology establishes development, not biological
validation, and it does not make later terminology retroactively present in earlier sources. See
[[napot-revision-genealogy|NAPOT Revision Genealogy]] for the governed ten-revision record. The same
chronology does not demote the source-defined role that PWD has in the current architecture.

## Revision-use rule

The present mechanism is a synthesis of retained operations, not simply "NAPOT 10," and PWD is core
throughout the retained receive-transform-project-update operation. The first numbered revision
records an early named receive-transform-project formulation; revisions 2-6 make resolution, inhibition, temporary routing,
multiscale recurrence, and action; revision 7 remains a separate molecular and quantum-biological
branch; and revisions 8-10 extend the theory toward nested integration, three-dimensional
rendering, neural manifolds, NDCA, and choice. The
[[napot-revision-genealogy|revision-to-current-mechanism map]] is the authority for those boundaries.
A stable NAPOT 11 is not registered without a dated authored source defining its new operation.

## Discriminating tests

1. **Reconstruction benchmark:** specify partial neural observations and test whether a NAPOT model reconstructs held-out sensory, body-state, or behavioral variables better than rate-only, phase-only, and standard recurrent baselines.
2. **Receiver-specific perturbation:** perturb a declared route while matching mean firing rate or power, then test whether the predicted receiver state and behavior change selectively.
3. **Cross-scale test:** measure whether micro-scale state improves prediction of meso- and macro-scale updates without assuming identical variables or time constants.
4. **No-inner-viewer test:** successful decoding from one region is insufficient; the model must predict distributed consequences for sampling, memory, report, or action.
5. **Falsification:** reject the tested NAPOT implementation if simpler models explain the same held-out data and perturbation effects equally well.
6. **PWD operationalization test:** compare one preregistered receiver/reference/departure feature set with same-scale rate, phase, power, cue, and recurrent baselines without treating feature order as architectural order.

These tests can support, narrow, or reject a tested NAPOT or PWD operationalization. They do not
determine PWD's architectural rank within SAN.

## Primary component anchors

- [Polsky, Mel, and Schiller (2004)](https://pubmed.ncbi.nlm.nih.gov/15156147/) used focal stimulation and imaging in identified thin dendrites of rat neocortical pyramidal neurons to show branch-local nonlinear integration in that preparation.
- [Mante et al. (2013)](https://pubmed.ncbi.nlm.nih.gov/24201281/) recorded macaque prefrontal populations during a context-dependent sensory-choice task and modeled selection and integration as recurrent population dynamics.
- [Churchland et al. (2012)](https://pubmed.ncbi.nlm.nih.gov/22722855/) found structured population dynamics, including a brief oscillatory component, in macaque motor cortex during reaching.
- [Davis et al. (2020)](https://pubmed.ncbi.nlm.nih.gov/33029013/) found that spontaneous traveling waves in extrastriate visual cortex of awake, behaving marmosets predicted target-evoked responses and perceptual detection.

These papers support bounded component mechanisms. None presents or validates NAPOT, the complete
PWD relation, SAN's rendering-identity claim, or consciousness, and none makes PWD a secondary
concept assembled after those mechanisms.

## Read next

- [[napot-overview|NAPOT Overview]]
- [[neural-array-projection|Neural Array Projection]]
- [[napot-theory|NAPOT Theory Reading Route]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[neural-rendering|Neural Rendering]]
- [[tonic-phasic-canvas|Tonic and Phasic Roles: Canvas and Ink]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[tonic-absorption-generative-reexpression|Tonic Absorption and Generative Re-expression]]
- [[napot-tomography-not-holography|NAPOT: Tomography, Not Holography]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]
