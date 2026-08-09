---
title: "Oscillatory Binding Problem: Coordination, Difference, and the Distributed Observer"
tags: [san, binding-problem, gamma, synchrony, shannon-information, phase-wave-differential]
aliases: [Oscillatory Binding Problem, Binding by Synchrony]
summary: "How oscillatory coordination may link distributed neural populations, why synchrony alone cannot specify conscious content, and how SAN adds tonic-relative Shannon surprisal, PWD, tuning, inhibition, and recurrent consequence."
status: governed
---

# Oscillatory Binding Problem: Coordination, Difference, and the Distributed Observer

> **Image status:** The earlier phase-coincidence plate failed medical review and is preserved in
> `archive-do-not-use-medical-review/br030-oscillatory-binding-problem-20260809`. It must not appear
> in a reader or public projection. A source-faithful replacement description is maintained in the
> SAN medical-image prompt ledger; image generation remains paused.

The **binding problem** is not one question with one accepted solution. At least three questions
must remain separate:

1. **Feature binding:** how color, orientation, motion, location, and other attributes are assigned
   to the correct object rather than combined incorrectly.
2. **Assembly and routing:** how distributed neural populations cooperate selectively without every
   simultaneously active population being fused into one representation.
3. **Phenomenal unity:** why distributed activity is experienced as one organized scene or moment.

Different mechanisms can contribute at different scales. Anatomical convergence, recurrent
processing, spatial attention, population coding, dendritic integration, inhibition, oscillatory
timing, and learned connectivity are not mutually exclusive alternatives.

Self Aware Networks asks a narrower and then a stronger question:

> Can oscillatory coordination establish a temporary relation among distributed receivers while
> tonic-relative phase-wave differentials specify what changed inside that relation, and can the
> recurrent receiver-transmitter network itself constitute the observer-action process?

The coordination claim is experimentally approachable. The final identity claim remains an open
SAN hypothesis.

## What established neuroscience supports

Livingstone and Hubel documented partially segregated primate pathways and cortical subdivisions
for color, form, motion, and depth
([Livingstone and Hubel, 1988](https://pubmed.ncbi.nlm.nih.gov/3283936/)). Later neuroscience did not
simply reject specialized processing. The important question is how specialization and integration
coexist without requiring one final anatomical screen.

Treisman and Gelade proposed that attention helps combine separately processed visual features
([Treisman and Gelade, 1980](https://pubmed.ncbi.nlm.nih.gov/7351125/)). Gray and colleagues then
showed that spatially separated columns in cat visual cortex could synchronize 40-60 Hz responses
in a way influenced by global stimulus properties
([Gray et al., 1989](https://www.nature.com/articles/338334a0)). This established a serious
**binding-by-synchrony** candidate, not a complete theory of conscious content.

Human work later associated face perception with long-distance gamma synchronization and found a
period of desynchronization between the perceptual moment and the motor response
([Rodriguez et al., 1999](https://www.nature.com/articles/17120)). That two-direction result matters:
coordination can help form a temporary coalition, while active uncoupling can help the system move
to another state.

The synchrony hypothesis also received substantial criticism. Shadlen and Movshon argued that
temporal correlation had not been shown to be a necessary or sufficient binding label and required
more discriminating evidence
([Shadlen and Movshon, 1999](https://doi.org/10.1016/S0896-6273(00)80822-3)). This criticism does not
make neural timing irrelevant. It identifies what a stronger account must explain: which sources
are related, which receiver can use the relation, what content is differentiated, and what causal
effect follows.

Relevant bounded results include:

- Driving fast-spiking interneurons can induce gamma and make sensory response magnitude and
  precision depend on input timing relative to the gamma cycle
  ([Cardin et al., 2009](https://www.nature.com/articles/nature08002)).
- Stimulus-dependent gamma phase relations across macaque V1 sites can accompany changes in how one
  site's gamma activity influences spiking at another
  ([Besserve et al., 2015](https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002257)).
- Spike timing relative to low-frequency local-field-potential phase carried Shannon information
  about natural movies beyond spike counts in macaque V1
  ([Montemurro et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18328702/)).
- During human memory encoding and retrieval, widespread theta synchronization coexisted with
  high-frequency desynchronization
  ([Solomon et al., 2017](https://www.nature.com/articles/s41467-017-01763-2)).

These findings support timing-sensitive coordination, receiver effects, and informative phase
relations in bounded preparations. They do not establish one universal gamma binder, one global
phase reference, or the identity of oscillatory binding with consciousness.

## What the SAN sources were trying to add

The earlier page compressed SAN into the slogan "binding is the oscillation." The dated sources
support a more informative operator.

- **2012 ancestor:** a public dialogue states that neurons firing out of sync will not link. This is
  an early temporal-linkage proposal, not yet PWD, NAPOT, or a complete binding theory.
- **2017 public stage:** the Neural Lace material describes distributed representations coming
  together in perception, calls coincidence a neural information unit, and treats both excitation
  and inhibition as informative. Later terminology is not backdated into this stage.
- **July 31, 2022:** `map.napot.md` places observation across neural arrays, circuits, cortical
  layers, and oscillating cell groups rather than in a hidden viewer. It says partial pictures are
  bound over time in volumetric experience
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/f36a26890aaac06fef614e94e37f31b7799e08c8/map.napot.md#L98)).
- **August 22, 2022:** `a0004z.md` explicitly contrasts common tonic activity with rarer phasic
  activity in information-theory terms and proposes gradual absorption of the phasic pattern into
  an updated tonic context
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/9911b61b401aeb9aab74cd765a18e7b7019eff5e/a0004z.md#L24)).
- **September-November 2022:** the `b0010y` to `a0310z` development joins synchrony, inhibitory
  route selection, distributed patterns, tonic canvas, phasic rendered information, and uncommon
  excitatory or inhibitory change. The mature public formulation is fixed in
  [`a0310z.md`](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md#L126).

The recoverable SAN chain is:

```text
specialized distributed processing
-> bounded phase-compatible coordination
-> temporary recruitment of a receiver coalition
-> expected tonic relation supplies context
-> uncommon excitation- or inhibition-driven PWD supplies difference
-> tuned receivers transform the difference
-> coherence links selected activity while inhibition or dispersion separates alternatives
-> recurrent redistribution changes rendering, memory, routing, or action
```

This is more specific than saying that synchronous cells are conscious. Synchrony establishes a
candidate relation. The phase-wave differential specifies a candidate change inside that relation.
Receiver tuning and downstream consequence determine whether the change is biologically usable.

## The Shannon distinction

For event `x`, receiver `r`, tonic probability model `p_0,r`, and context `C`, Shannon
self-information is:

```text
I_r(x | C) = -log2 p_0,r(x | C)                              [1]
```

If a repeated phase-locked event is expected under the receiver's current tonic model, it can add
little new self-information. If an excitation-driven advance, inhibition-driven delay or omission,
burst, waveform change, or structured phase departure is less probable under that same model, it
has greater surprisal:

```text
p_0,r(x_pwd | C) < p_0,r(x_tonic | C)
=> I_r(x_pwd | C) > I_r(x_tonic | C)                         [2]
```

This is the SAN "Shannon turn" applied to the gamma-binding problem. It does **not** mean that
gamma is intrinsically low-information. A rare onset of synchrony can itself be informative. It
also does not mean that random desynchronization is meaningful. Rarity becomes a neural code claim
only when a named receiver can use the difference and a reproducible consequence follows.

The historical bottleneck was therefore not a lack of gamma-consciousness proposals, nor a total
absence of information theory from neuroscience. Those literatures supplied candidate coordination
mechanisms and information measurements, but generally did not make the following joined move the
binding mechanism itself: treat stable tonic coordination as the receiver's expected context, treat
an uncommon structured departure as greater conditional self-information, and then require that a
tuned receiver convert that difference into a causal perceptual, mnemonic, routing, plasticity, or
action consequence. That receiver-relative **coordination-to-content** step is the specific closure
SAN proposes.

A candidate multidimensional event is:

```text
PWD_r,i = X_r,i - E_0,r[X | C]                               [3]
```

`X` can include timing, circular phase, frequency, amplitude, duration, waveform, transmitted
quantity, spatial relation, and network state. Equation [3] is a typed comparison against an
expected state, not literal subtraction of incompatible units.

## Coherence and dispersion are both active operations

SAN does not equate coherence with success and decoherence with failure.

| Relation | Candidate role | Required boundary |
|---|---|---|
| Expected phase locking | Tonic coordination or communication readiness | Repetition alone does not specify content. |
| Rare phase-compatible recruitment | Addition of a source to a temporary coalition | The receiver and causal benefit must be shown. |
| Excitation-driven advance or burst | Positive phasic PWD | It can be noise if no tuned receiver uses it. |
| Inhibition-driven delay or omission | Negative or suppressive PWD | Absence is informative only relative to an expected event. |
| Structured phase dispersion or splay | Route separation, boundary formation, or state transition | Random coherence loss need not encode anything. |
| Return toward a coordinated baseline | Dissipation, reset, or incorporation into a new tonic state | The event may instead disappear without consequence. |

In this formulation, the bound coalition and the boundaries between coalitions are both
computationally meaningful. This connects the binding page to
[[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]],
[[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]], and
[[neural-tuning|Neural Tuning]].

## No inner viewer

SAN does not place a small observer behind the binding process. Cells and populations receive,
transform, transmit, inhibit, recur, and alter one another. The distributed system undergoes the
state change and produces its perceptual, mnemonic, emotional, and motor consequences.

The medically bounded claim is that recurrent distributed activity can integrate and redistribute
information without a central screen. The stronger SAN identity hypothesis is that organized tonic
and phasic field-cell differences constitute the phenomenal content itself. That hypothesis is not
established merely by finding synchrony, decoding content, or observing a gamma correlate.

See [[observer-mechanism|Observer Mechanism]], [[neural-rendering|Neural Rendering]], and
[[napot-overview|NAPOT Overview]].

## Scale discipline

- **Micro:** synaptic timing and dendritic integration change a named cell or compartment.
- **Meso:** excitation, inhibition, and phase relations recruit or separate a local assembly.
- **Macro:** recurrent interactions among distributed sensory, association, thalamic, mnemonic,
  affective, and motor systems change a report, choice, body state, or action.

A figure or explanation must not replace these scales with one generic neuron receiving color,
motion, sound, and touch directly. It must not depict identical canonical laminar circuits for all
modalities, assign fixed 0/90/180/270-degree phases, route every feature through one thalamic clock,
or show a completed picture being watched inside the brain.

## Why the earlier image failed medical review

The quarantined plate was useful as a record of the intended design problem, but not as medical art.
It:

1. drew four modalities as anatomically identical cortical arrays;
2. routed all four feature streams directly into one generic neuron;
3. treated fixed phase offsets and later zero-lag matching as a universal binding code;
4. reduced multimodal integration to receptor coincidence and one soma threshold;
5. presented one canonical laminar circuit and thalamic timing loop as universal;
6. converted synchronized arrays into a completed inner landscape, reintroducing a display-like
   interpretation that SAN explicitly rejects.

The replacement should show separate declared pathways and three nested scales. It should depict
coordination and structured separation, a tonic probability context, rare receiver-relative PWDs,
and measurable downstream effects without inventing direct anatomical connections.

## Source-gated formal analogy

An earlier AI-generated version inserted a Pissanetzky causal-set and block-system section. The
bounded source check found no exact Micah source or primary citation tying that formalism to this
mechanism. The statement is preserved in Git history but remains source-gated and is not used as
evidence for oscillatory binding. If an exact source is recovered later, it should return as a
clearly labeled mathematical analogy rather than established neural physiology.

## Claim ladder

| Claim | Status |
|---|---|
| Specialized and partially segregated neural processing coexists with integration. | Established broadly; details vary by pathway and task. |
| Attention, learned connectivity, recurrence, inhibition, and neural timing can contribute to binding. | Supported in bounded paradigms. |
| Gamma synchrony can relate distributed feature-selective activity and alter receiver responsiveness. | Supported in bounded circuits; not universal. |
| Gamma synchrony is necessary and sufficient for feature binding or consciousness. | Not established. |
| A less probable event has greater Shannon self-information under the same declared baseline. | Mathematically established. |
| Expected coordination can be tonic context while rare structured departures carry greater surprisal. | Valid conditional formulation; neural use must be tested. |
| Receiver-tuned PWDs plus coherence and dispersion organize rendered content and routing. | Open, testable SAN hypothesis. |
| Distributed field-cell phase differences constitute phenomenal unity. | Stronger unresolved SAN identity hypothesis. |

## Discriminating tests

1. Define the source, receiver, anatomical route, reference signal, event dimensions, and context.
2. Compare a synchrony-only model with firing-rate, attention, recurrent-state, phase-only, and full
   PWD models on held-out content and behavior.
3. Estimate tonic probabilities from held-out data before calculating event surprisal.
4. Match rarity while scrambling source identity, spatial organization, or pathway timing to test
   whether structured PWDs outperform equally surprising noise.
5. Perturb synchronization and structured dispersion separately and predict specific binding,
   misbinding, route-selection, transition, and behavioral effects.
6. Test whether the candidate receiver changes state and whether restoring the relation rescues the
   predicted consequence.
7. Separate visual feature binding, multimodal integration, conscious access, report, memory, and
   action instead of treating one positive result as proof of all six.

## Read next

- [[brainwaves|Brainwaves in SAN Source History]]
- [[gamma-oscillation|Gamma Oscillation]]
- [[gamma-oscillations|Gamma Phenomena]]
- [[oscillatory-synchrony|Oscillatory Synchrony]]
- [[oscillatory-phase-coding|Oscillatory Phase Coding]]
- [[oscillation-frequency-matching|Oscillation Frequency Matching]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]]
- [[coincidence-detection-neural-bit|Coincidence Detection and the SAN Neural Bit]]
- [[inhibitory-interneurons|Inhibitory Interneurons]]
- [[neural-tuning|Neural Tuning]]
- [[neural-rendering|Neural Rendering]]
- [[observer-mechanism|Observer Mechanism]]
- [[napot-overview|NAPOT Overview]]
