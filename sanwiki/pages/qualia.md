---
title: "Qualia in SAN: Receiver-Relative Difference and Distributed Neural Rendering"
tags: [san, qualia, consciousness, neural-rendering, shannon-information, phase-wave-differential]
aliases: [Qualia, Neural Qualia, Qualia in Self-Aware Networks]
summary: "A source-faithful account of SAN's proposal that expected tonic coordination supplies context while uncommon, receiver-usable phase-wave differentials help specify distributed phenomenal content."
status: governed
---

# Qualia in SAN: Receiver-Relative Difference and Distributed Neural Rendering

> **Image status:** The former cortical-canvas plate failed medical review and is preserved in the
> `archive-do-not-use-medical-review/br031-qualia-20260809` folder. It must not appear in a reader or
> public projection. A medically bounded replacement description is maintained in the SAN image
> prompt ledger; image generation remains paused.

**Qualia** are the felt qualities of experience: the appearance of red, the taste of umami, the
feel of textured contact, or the character of an internally heard tone. Neuroscience can correlate,
decode, and perturb aspects of these experiences, but it has not established one accepted physical
identity for subjective quality.

Self Aware Networks proposes a specific identity hypothesis. It does not place an inner viewer
behind a neural display. Cells and populations receive, transform, transmit, inhibit, recur, and
alter one another. The distributed network undergoes the state change and produces its perceptual,
mnemonic, emotional, and motor consequences. SAN asks whether the organized differences within that
distributed field-cell activity are not merely correlated with qualia, but constitute their
physical form.

That final identity claim is open. The pathway leading to it can be divided into testable steps.

## Three claim levels

| Level | Claim | Status |
|---|---|---|
| Established neuroscience | Sensory content is represented by distributed, pathway-specific neural activity; timing and phase can carry information; recurrence, inhibition, plasticity, and behavioral state can alter perception. | Supported in bounded preparations. |
| SAN mechanistic interpretation | A receiver's expected tonic state supplies context, while uncommon excitation- or inhibition-driven phase-wave differentials are detected, transformed, and redistributed through tuned recurrent circuits. | Open, testable synthesis. |
| SAN identity hypothesis | The organized tonic and phasic field-cell differences across the active network constitute the qualitative experience itself. | Strong unresolved hypothesis. |

No result about gamma power, decoding accuracy, a local field potential, one cortical column, or one
stimulation site establishes all three levels at once.

## The gap left by gamma-consciousness theories

Gamma-band coordination became a serious candidate mechanism for feature binding and conscious
perception. Distributed gamma synchronization was reported during face perception, followed by a
desynchronization during transition toward motor response
([Rodriguez et al., 1999](https://www.nature.com/articles/17120)). Other studies found that induced
gamma could track task relevance or post-perceptual processing rather than awareness itself
([Pitts et al., 2014](https://pubmed.ncbi.nlm.nih.gov/25063731/)).

The historical problem was not a shortage of gamma-consciousness proposals. Coordination could
explain how selected populations become temporarily related, but synchrony by itself did not say
why the related content was red rather than green, remembered rather than ignored, or routed to one
action rather than another.

The missing SAN move is a receiver-relative application of Claude Shannon's self-information. It is
not the claim that neuroscience never used information theory. Phase-of-firing research already
showed that spike timing relative to an ongoing field phase could carry visual information beyond
spike count ([Montemurro et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18328702/)). SAN instead makes
the tonic-versus-phasic probability contrast part of the proposed content mechanism itself.

For event `x`, receiver `r`, current context `C`, and the receiver's expected tonic probability
model `p_0,r`:

```text
I_r(x | C) = -log2 p_0,r(x | C)                              [1]
```

If a repeated phase relation is expected while a structured departure is less probable:

```text
p_0,r(x_pwd | C) < p_0,r(x_tonic | C)
=> I_r(x_pwd | C) > I_r(x_tonic | C)                         [2]
```

A perfectly repeated gamma relation can therefore contribute little **new** information under the
model that already expects it. This does not make gamma intrinsically low-information. A rare gamma
onset can have high surprisal, and a tonic network state can contain substantial contextual
structure. It means only that a repeated expected event adds little conditional surprise.

Rarity is also insufficient. Random desynchronization can be surprising without being meaningful.
The event becomes a candidate neural symbol only when a named, tuned receiver uses it and a
reproducible consequence follows.

See [[gamma-oscillation|Gamma Oscillation]] and
[[oscillatory-binding-problem|Oscillatory Binding Problem]] for the wider evidence and critique.

## The source-faithful SAN operator

SAN's proposed mechanism can be stated without assuming one universal frequency band, cortical
column circuit, or global clock:

```text
specialized sensory or internally generated activity
-> pathway-specific reception and transformation
-> bounded phase-compatible coordination
-> expected tonic receiver context
-> uncommon excitation- or inhibition-driven PWD
-> receiver-specific detection and transformation
-> recurrent redistribution through selected pathways
-> perceptual, mnemonic, affective, or motor consequence
-> gradual dissipation, persistence, or context update
```

A candidate phase-wave differential is multidimensional:

```text
PWD_r,i = X_r,i - E_0,r[X | C]                               [3]
```

`X` may include timing, circular phase, frequency, amplitude, duration, waveform, transmitted
quantity, spatial relation, and local network state. Equation [3] is a typed comparison against an
expected state, not literal subtraction of incompatible units.

Coefficient of variation can describe one interval dimension:

```text
CV_r = sigma(Delta_t_r) / mean(Delta_t_r)                     [4]
```

CV is not Shannon information in bits, is not a circular-phase statistic, and is not the whole PWD.
The stronger SAN proposal is that a tuned receiver interprets the joined event in context.

One compact model is:

```text
Q_r(t + Delta_t) = F_r(T_r(t), PWD_r(t), H_r(t), A_r(t))      [5]
```

`T` is tonic context, `H` is recent history, `A` is anatomical and functional routing, and `Q` is a
candidate content-state variable. Equation [5] is a research model. It does not assume that a
neuron symbolically computes a formula or that `Q` is already a direct measurement of experience.

## Coherence and structured dispersion

SAN does not equate coherence with consciousness and decoherence with failure. At its simplest,
coherence means that two or more cells maintain a stable relative timing relation until a change
arrives. A splay state means that cells maintain a structured distribution of relative phases. It is
not the same as random timing noise.

| Relation | Proposed function | Scientific boundary |
|---|---|---|
| Stable relative timing | Temporary coupling, communication readiness, or coalition membership | Need not be zero-lag and does not specify content alone. |
| Excitation-driven advance or burst | Positive or activating PWD | Can be noise unless a receiver uses it. |
| Inhibition-driven delay or omission | Negative or suppressive PWD | Absence is informative only relative to an expected event. |
| Structured phase dispersion or splay | Separation, boundary formation, competition, or transition | Random coherence loss is not a code. |
| Return toward a coordinated baseline | Dissipation, reset, or incorporation into updated tonic context | A transient may instead disappear without learning. |

This gives SAN a Hebbian historical backbone without reducing the proposal to "cells that fire
together wire together." Phase-sensitive plasticity is experimentally real: in oscillating rat
visual-cortex slices, synapses potentiated when EPSPs arrived near oscillation peaks and depressed
near troughs ([Wespatat et al., 2004](https://pubmed.ncbi.nlm.nih.gov/15483125/)). That result does not
prove SAN's qualia mechanism. It supports the narrower bridge from relative timing to directionally
different synaptic consequences.

The SAN extension is that locally coherent recruitment and structured separation jointly sculpt
which differences can recur, bind, remain distinct, influence action, and eventually bias plasticity.
See [[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]].

## Redness is not a red waveform

Redness was Micah's principal 2022 worked question: what is the redness inside experience?
`a0306z.md` proposed that redness is a phase-pattern differential from tonic context, detected and
reprojected through successive arrays
([immutable August 23, 2022 source](https://github.com/v5ma/selfawarenetworks/blob/35f2162450f775e51448adb091f91793d120145b/a0306z.md#L3)).

The medically bounded version must preserve the distributed visual pathway. Color depends on
retinal cone-opponent processing, thalamocortical transmission, multiple visual areas, context,
attention, memory, and recurrent interaction. Human fMRI work decoded colors from spatially
distributed activity in V1, V2, V3, V4, and VO1, with later areas better reflecting perceptual color
space ([Brouwer and Heeger, 2009](https://pubmed.ncbi.nlm.nih.gov/19890009/)). Single-neuron work also
found distributed chromatic tuning in macaque V1 and strong context dependence
([Wachtler et al., 2003](https://pubmed.ncbi.nlm.nih.gov/12597864/)).

Those results support distributed, relational color representation. They do not show that redness is
one sinusoid, one wavelength in cortex, one neuron, one cortical layer, or one local electromagnetic
shape. SAN's testable question is whether a receiver-relative multidimensional PWD model predicts
reported color content and downstream consequences better than firing rate, gamma power, phase
alone, or conventional population state models.

## Broccoli as a multimodal qualia laboratory

The 2022 broccoli example is not a decorative object example. It expands a single property into a
multimodal learned bundle: color, shape, texture, feel, crunch, taste, smell, expected action, and
consequence. `a0306z.md` explicitly proposed that these partial patterns are detected and
redistributed through receptors, dendrites, neurons, arrays, thalamic nuclei, cortex, and
hippocampal-entorhinal systems
([immutable August 23, 2022 source](https://github.com/v5ma/selfawarenetworks/blob/fc922f143b68f3c058e8fdc54ceed7b9d6a54749/a0306z.md#L9)).

The scale-safe interpretation is:

- **Micro:** receptor, synapse, dendritic compartment, and cell state transform a local signal.
- **Meso:** local populations coordinate, compete, and preserve feature and pathway distinctions.
- **Macro:** recurrent sensory, association, thalamic, mnemonic, affective, and motor systems update
  a shared object-and-body model.

No generic neuron receives all broccoli features, and no single thalamic site contains the complete
experience. The thalamus contains multiple nuclei with distinct and overlapping pathways.
Corticothalamocortical information transfer is physiologically viable in declared circuits
([Theyel et al., 2010](https://pubmed.ncbi.nlm.nih.gov/19966840/)), and human connectivity work
supports integrative roles for thalamic subdivisions
([Hwang et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28450543/)). These findings do not make the
thalamus a universal multisensory screen.

The historical note then asks whether a measured tempo-spatial bundle could be translated into a
stimulation pattern that evokes a corresponding experience in another brain
([immutable June 12 and August 23, 2022 formulation](https://github.com/v5ma/selfawarenetworks/blob/24761c80f09aacecb4108d5178459e3fe8ce6765/a0306z.md#L25)). Sensory-substitution research shows that
people can learn to use camera-derived information delivered through another sensory surface
([Bach-y-Rita and Kercel, 2003](https://pubmed.ncbi.nlm.nih.gov/14643370/)). Human sensory-thalamus
microstimulation can evoke focal somatic percepts whose location and intensity depend on target and
stimulation pattern ([Swan et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29126946/)). Neither result
demonstrates arbitrary read-and-write reconstruction of a broccoli-like multimodal experience.

## Active sensing, umami, and the molecular bridge

The broader SAN source chain uses several modalities to test the same architecture rather than
assuming vision is the universal template.

- **Whisking:** active whisking in behaving mice reduced nearby membrane-potential correlation and
  desynchronized LFP and EEG while increasing the signal-to-noise ratio of sparse spikes
  ([Poulet and Petersen, 2008](https://www.nature.com/articles/nature07150)). The November 2022 SAN
  note interprets the discriminative departure and later return toward coordination as a candidate
  qualia-rendering cycle
  ([source](https://github.com/v5ma/selfawarenetworks/blob/55cb3bcb0ea8653087b424444e2f1cf66ca1d580/a0296zWhisker.md#L5)).
- **Umami:** the SAN source uses multiple taste receptors and intracellular signaling as an example
  of receptor-specific transformation before population-level rendering. The proposed path from
  metabotropic signaling through conductance, action-potential waveform, calcium entry, and
  synapse-specific release remains a mechanistic hypothesis, not a universal established chain.
- **Action-potential duration:** spike waveform and duration can affect calcium dynamics and
  plasticity, but they must not be presented as a unique code for recognition or surprise. See
  [[action-potential-duration|Action Potential Duration]] and
  [[neural-code-transmission|Neural Code Transmission]].

These cases define a common research program:

```text
external property or active sample
-> receptor-specific transduction
-> conductance and membrane-state change
-> timing, waveform, release, and population-state difference
-> receiver-relative PWD
-> recurrent distributed consequence
-> candidate qualitative distinction
```

## The distributed observer and the field-cell boundary

SAN's observer is sparse and distributed. It is not a little localized witness. The ongoing tonic
activity of many cells supplies the active receiver context against which synaptic and population
changes occur. Dendrites and receptors participate in reception; axons and terminals transmit;
recurrent pathways return transformed activity; inhibition and excitation alter which differences
persist; motor and autonomic consequences close the loop.

Neural activity also generates extracellular electric fields. Experiments show that weak fields can
modulate and entrain network activity in bounded preparations
([Frohlich and McCormick, 2010](https://pubmed.ncbi.nlm.nih.gov/20624597/)) and can affect nearby
cortical neurons through ephaptic coupling
([Anastassiou et al., 2011](https://pubmed.ncbi.nlm.nih.gov/21240273/)). This supports a real
field-to-cell feedback route. It does not establish that one macroscopic field is a complete scene,
that fields replace synaptic transmission, or that an electromagnetic pattern is conscious by
itself.

The stronger SAN hypothesis is that the observer-action process is the recurrent field-cell system
as a whole, and that its organized tonic and phasic differences are the physical form of the
experience. See [[observer-mechanism|Observer Mechanism]], [[neural-rendering|Neural Rendering]], and
[[napot-overview|NAPOT Overview]].

## Source-faithful chronology

- **2012 source-gated ancestor:** the surviving "neurons are programs transmitting their shape"
  material proposes learned cellular form and transmitted pattern. It is an ancestor of
  receive-transform-project language, not yet qualia, PWD, or NAPOT.
- **June 8, 2022:** `a0066z.md` joins internal renderings, external models, body movement, learned
  consequences, and modality-specific tempo-spatial-phasic patterns
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0066z.md#L21)).
- **June 8, 2022:** `a0142z.md` says coherence can support coupling while decoherence supplies
  distinction and connects timing organization to LTP/LTD hypotheses
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/37da575ba33f85cef4239295be161066d8d39f4c/a0142z.md#L9)).
- **June 8, 2022:** `a0143z.md` explicitly proposes human-equivalent internal representations and
  links modality-specific short-term phase patterns to longer-term plasticity
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/37da575ba33f85cef4239295be161066d8d39f4c/a0143z.md#L16)).
- **August 21-24, 2022:** `a0004z.md` distinguishes tonic context from higher-information phasic
  departures and identifies redness as a PWD from tonic baseline
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/b56ae48e8abac67f3c3e89ee641c360f34b39f02/a0004z.md#L40)).
- **August 23, 2022:** `a0306z.md` supplies the mature redness, broccoli, reception-projection,
  thalamic read/write, and distributed-observer formulation
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/e076d8aa1688f8c1168af0fedc9f3d91ee618f4c/a0306z.md#L39)).
- **November 28-29, 2022:** `a0310z.md` and `a0296zWhisker.md` join Shannon-relative irregularity,
  rendering, recurrence, dissipation, active sensing, and structured desynchronization
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md#L126)).
- **2024-2025 extensions:** later notes add detailed ion-channel, coefficient-of-variation, NDCA,
  diffusion, and canvas/ink formulations. These extensions clarify the model but are not backdated
  into the 2022 source record.

The former page incorrectly placed the origin mainly in 2023-2025 and treated later AI-era prose as
the authoritative source. The dated 2022 Git record is the governing public genealogy.

## Discriminating experiments

1. Define the source, receiver, pathway, reference signal, event dimensions, and behavioral context.
2. Estimate tonic probabilities from held-out data before calculating event surprisal.
3. Compare rate-only, gamma-power, phase-only, recurrent-state, and full PWD models on held-out
   reports, forced-choice behavior, and nonverbal physiological consequences.
4. Match event rarity while scrambling source identity, pathway timing, or spatial organization to
   test whether structured PWDs outperform equally surprising noise.
5. Perturb coordination and structured dispersion separately. Predict specific content changes,
   misbinding, route transitions, memory effects, and action errors rather than a generic loss of
   consciousness.
6. Test whether the declared receiver changes state and whether restoring the relation rescues the
   predicted perceptual or behavioral consequence.
7. For color, determine whether the full receiver-relative PWD model explains reported hue and
   context effects beyond conventional distributed population models.
8. For BCI reconstruction, separate decoding, stimulation-evoked sensation, learned sensory
   substitution, and recreation of a specific naturalistic experience.
9. Test field effects against synaptic, firing-rate, arousal, movement, and volume-conduction
   controls before attributing a causal field-cell role.

The SAN mechanism would be weakened if the full PWD model adds no reproducible prediction beyond
these controls, if receiver identity is irrelevant, if matched random departures perform equally
well, or if the proposed field variable has no independent causal effect.

## Why the earlier image failed medical review

The quarantined image was useful as a record of the intended concept, but not as medical art. It:

1. reused one stylized cortical slab as tonic canvas, integrator, and rendered qualia;
2. routed theta, alpha, beta, gamma, delta, and a red sinusoid into one universal cortical column;
3. represented redness as a literal red waveform rather than distributed pathway-specific activity;
4. assigned a single unsupported persistence threshold as the gate to conscious content;
5. implied that changing one global tonic frequency selects which qualia survive;
6. omitted retina, thalamic nuclei, recurrent visual pathways, association systems, memory, action,
   and the micro-meso-macro scale distinction;
7. made decorative field lines look like established anatomical projections.

The replacement prompt is `IMG-SAN-QUALIA-SHANNON-PWD-DISTRIBUTED-001`. It requires a declared color
pathway, distributed recurrent receivers, tonic probability context, structured excitation and
inhibition departures, measurable consequences, and no inner screen or universal cortical slab.

## Claim ladder

| Claim | Status |
|---|---|
| Distributed population activity can encode color and other sensory variables. | Established in bounded systems. |
| Relative phase can carry information beyond spike count. | Established in bounded recordings. |
| Recurrent processing, behavioral state, inhibition, and thalamocortical interaction can affect conscious perception. | Supported in bounded tasks and pathways. |
| Weak endogenous electric fields can influence neural activity. | Supported in bounded preparations; strength and role vary. |
| Gamma synchrony is necessary and sufficient for consciousness. | Not supported. |
| An expected event has lower conditional surprisal than a less probable event under the same declared model. | Mathematically established. |
| Tonic context plus receiver-usable PWDs differentiates neural content. | Open, testable SAN hypothesis. |
| Coherence and structured dispersion jointly sculpt qualitative boundaries and later plasticity. | Open SAN synthesis with partial physiological support. |
| Distributed field-cell phase differences constitute qualia. | Strong unresolved SAN identity hypothesis. |
| A naturalistic multimodal qualia state can be decoded from one person and written into another. | Unproven engineering hypothesis. |

## Read next

- [[consciousness|Consciousness]]
- [[gamma-oscillation|Gamma Oscillation]]
- [[oscillatory-binding-problem|Oscillatory Binding Problem]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]]
- [[distributed-phase-representations|Distributed Phase Representations]]
- [[neural-tuning|Neural Tuning]]
- [[neural-rendering|Neural Rendering]]
- [[neural-rendering-of-qualia|Neural Rendering and Qualia]]
- [[oscillatory-qualia-imprinting|Oscillatory Qualia Imprinting]]
- [[phase-differential-rendering|Phase-Differential Rendering]]
- [[consciousness-as-persistent-rendering|Consciousness as Persistent Rendering]]
- [[observer-mechanism|Observer Mechanism]]
- [[napot-overview|NAPOT Overview]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[object-segmentation|Object Segmentation]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli, Shared Recognition, and Artificial Perception]]
- [[umami-multi-receptor-coincidence-detection|Umami Receptor Diversity and Coincident Sensory Inputs]]
- [[gh-a0296zwhisker|Whisker Active-Sensing Source Note]]
- [[action-potential-duration|Action Potential Duration]]
- [[thalamus|Thalamus]]
