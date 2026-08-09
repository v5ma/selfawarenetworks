---
title: "Gamma Oscillation: Coordination, Content, and the SAN Shannon-PWD Hypothesis"
tags: [san, gamma, brain-rhythms, consciousness, shannon-information, phase-wave-differential]
aliases: [Gamma Oscillation]
summary: "What gamma measurements can establish, why gamma synchrony alone did not explain differentiated conscious content, and how SAN proposes to add a receiver-relative Shannon and PWD mechanism."
status: governed
---

# Gamma Oscillation: Coordination, Content, and the SAN Shannon-PWD Hypothesis

> **Image status:** The earlier binding-slots-population-decay figure failed medical review and is
> preserved in the failed-medical-review archive. No accepted or active image is installed. A
> future medically accurate image description is maintained separately; generation remains paused.

**Gamma oscillation** refers to band-limited or rhythmic neural activity in an approximate frequency
range often placed around 30-100 Hz. The exact boundaries, center frequency, bandwidth, duration,
generator, and behavioral relation vary with species, region, layer, stimulus, task, state, and
recording method. Gamma is not one universal 40 Hz clock.

Gamma research is important to Self Aware Networks because it supplied a serious candidate
mechanism for temporally coordinating distributed neural activity. SAN asks a further question:

The broader SAN history is mapped in [[brainwaves|Brainwaves in SAN Source History]]. Measurement
and scale are governed in [[brainwave|Brainwave]] and [[brain-rhythms|Brain Rhythms]]. The separate
[[gamma-oscillations|Gamma Oscillations]] route addresses the wider plural source family.

> Once a population is coordinated, what distinguishes one informative perceptual, mnemonic, or
> actionable change from the expected coordinated background?

SAN's proposed answer is not gamma alone. It is a conditional operator joining expected tonic
coordination, uncommon receiver-relative departures, Shannon surprisal, neural tuning, recurrent
consequence, and possible rendering.

## Distinguish the measurements

| Measurement | What it describes | What it does not establish by itself |
|---|---|---|
| Narrowband gamma power | Energy in a bounded spectral peak or rhythmic burst | A generator, communication route, conscious content, or direction of influence. |
| Broadband high-frequency activity | Broad spectral elevation, often extending above conventional gamma | A sustained gamma oscillator; it can closely track local population spiking and sharp transients. |
| Spike-field locking | Spike timing relative to the phase of a declared field signal | Direct communication or conscious access. |
| Inter-site phase relation | Relative phase, lag, locking, dispersion, or a spatial phase gradient | One global oscillator or zero-lag synchrony. |
| Cross-frequency relation | Statistical relation among declared components at different frequencies | A universal hierarchy of cognitive functions. |
| Scalp EEG gamma | A high-frequency component after source mixing, filtering, referencing, and artifact control | A direct local-circuit trace; muscle activity can contaminate this range. |

Ray and Maunsell separated band-limited visual gamma from broadband high-gamma activity in macaque
V1. Broadband high gamma tracked nearby population firing more closely, whereas gamma rhythm could
change differently with stimulus size
([Ray and Maunsell, 2011](https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1000610)).
This is why `gamma`, `high gamma`, `spiking`, and `information` cannot be treated as synonyms.

## What gamma can coordinate

Gamma activity can mark transient periods of coordinated excitability, sensory processing,
attention, memory, or selective communication in bounded circuits. Bosman and colleagues found
attention-related gamma synchronization between macaque visual areas
([Bosman et al., 2012](https://doi.org/10.1016/j.neuron.2012.06.037)). Lundqvist and colleagues found
brief and variable beta and gamma bursts during working-memory encoding and reactivation rather
than one continuous slot clock
([Lundqvist et al., 2016](https://doi.org/10.1016/j.neuron.2016.02.028)).

Spatial phase organization can also change dynamically. In macaque V1, stimulus-dependent shifts
in gamma phase across sites coincided with changes in the influence of gamma activity on spiking at
other sites
([Besserve et al., 2015](https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002257)).
This supports a bounded bridge from phase relation to receiver consequence. It does not establish
SAN's full rendering or consciousness claim.

## Gamma and consciousness

Crick and Koch proposed in 1990 that coherent semi-synchronous activity around 40-70 Hz could
transiently bind neurons related to an attended visual object and contribute to visual awareness
([Crick and Koch, 1990](https://digirepo.nlm.nih.gov/ext/document/101584582X469/PDF/101584582X469.pdf)).
Later human studies associated conscious perception with transient long-distance gamma
synchronization
([Melloni et al., 2007](https://pmc.ncbi.nlm.nih.gov/articles/PMC6672558/)) and with theta-organized
gamma-synchronous assemblies during binocular rivalry
([Doesburg et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19582165/)).

Rodriguez and colleagues supplied an especially relevant two-direction result. Perceiving a face
was accompanied by long-distance gamma synchronization, while a later desynchronization separated
the perceptual moment from the motor response. They interpreted the latter as active uncoupling
needed to move between cognitive states
([Rodriguez et al., 1999](https://www.nature.com/articles/17120)). This result does not identify
consciousness with either synchrony or desynchronization alone; it shows that both coordination and
organized transition can matter.

This literature made gamma a serious candidate neural correlate and coordination mechanism for
conscious perception. The shorthand **seat of consciousness** is too strong as a description of the
whole field. Gamma power and activity were not uniquely tied to awareness:

- Induced gamma could track task relevance and post-perceptual processing rather than visual
  awareness itself
  ([Pitts et al., 2014](https://pubmed.ncbi.nlm.nih.gov/25063731/)).
- Greater gamma power occurred without awareness in one visual masking preparation
  ([Aru and Bachmann, 2009](https://pubmed.ncbi.nlm.nih.gov/19071195/)).
- Gamma varies with stimulus properties, movement, attention, expectation, recording scale, and
  analysis choices.

These limitations do not show that gamma is irrelevant. They show that the presence or strength of
gamma alone does not identify which content changed, who or what received the change, or what the
change did.

## The problem synchrony alone leaves open

Synchrony can provide a communication window, common timing reference, or mechanism for recruiting
a population. But a perfectly repeated timing relation contains no account of why one moment is
red rather than green, remembered rather than ignored, or routed to one action rather than another.

In information-theory terms, a very predictable event contributes little new self-information
under the model that predicts it. For event `x_i`, receiver `r`, tonic baseline `p_0`, and context
`C`:

```text
I_r(x_i | C) = -log2 p_0,r(x_i | C)                           [1]
```

If an expected gamma-coordinated event is common and a phase, timing, or state departure is less
probable under the same baseline:

```text
p_0,r(x_departure | C) < p_0,r(x_tonic | C)                  [2]
```

then:

```text
I_r(x_departure | C) > I_r(x_tonic | C)                      [3]
```

Equation [3] is the Shannon distinction that SAN applies to the coordination problem. It does not
mean that gamma is intrinsically low-information. A rare gamma onset can itself have high
surprisal. It also does not mean that every loss of synchrony is meaningful. Random noise can be
rare without being biologically useful.

Neuroscience did not ignore Shannon information. For example, Montemurro and colleagues used
Shannon information to show that spike timing relative to low-frequency local-field-potential phase
carried visual information beyond spike counts in macaque V1
([Montemurro et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18328702/)). The proposed SAN addition is
more specific than applying information theory to neural data: define an expected tonic state for
a named receiver, quantify an uncommon multidimensional departure from that expectation, and test
whether the tuned receiver converts that departure into a reproducible rendering, routing, memory,
plasticity, or action consequence.

## The SAN addition: PWD plus receiver consequence

SAN proposes that an expected coordinated pattern can function as **tonic context**, while an
uncommon excitation- or inhibition-driven change can function as a **phasic phase-wave
differential**. The candidate PWD is receiver-relative and multidimensional:

```text
PWD_r,i = X_r,i - E_0,r[X | C]                                [4]
```

`X` may include timing, circular phase, frequency, amplitude, duration, waveform, transmitted
quantity, spatial relation, and network state. Equation [4] is a typed comparison against an
expected state; unlike dimensions must be defined and normalized before testing.

Coefficient of variation can describe one timing dimension:

```text
CV_r = sigma(Delta_t_r) / mean(Delta_t_r)                     [5]
```

CV is not Shannon information in bits, is not a circular-phase statistic, and is not the whole PWD.
The SAN claim additionally requires:

1. a named source and receiver;
2. a receiver tuned to the relevant dimensions;
3. a reproducible change in receiver or network state;
4. recurrent redistribution, dissipation, action, learning, or another declared consequence.

The full hypothesis is:

```text
expected tonic coordination
-> uncommon excitation- or inhibition-driven PWD
-> greater conditional surprisal
-> receiver-specific detection and transformation
-> distributed content, route, memory, or action consequence
-> recurrence and gradual absorption into an updated context
```

Information theory was already widely used in neuroscience. The proposed SAN delta is this joined
application: gamma or another rhythm supplies one possible reference frame; statistically uncommon
phase and state departures carry differentiated information; tuning and causal consequence convert
rarity into biological use; and recurrent field-cell activity participates in the distributed
observer-action process.

## Gamma in the Gamma Consideration Sandwich

The [[gamma-wave-consideration-sandwich|Gamma Consideration Sandwich]] uses gamma as one candidate
fast mode for differentiated sensory or local processing while slower activity can provide broader
state, expectation, or routing context and Layer 5 output can contribute to embodied action.

The medically bounded version is not a fixed frequency-to-function chart. Gamma, beta, alpha,
theta, and slower activity can have different roles across circuits and tasks. The testable question
is whether a declared gamma event changes receiver-specific communication or control within a named
pathway, and whether its effect exceeds what stimulus, firing rate, movement, attention, and other
state variables already explain.

## Source-faithful SAN chronology

- **2012 Neo Mind Cycle ancestor:** a closed EEG-to-audiovisual feedback loop made transformed
  brain-state return and learning concrete. It is not yet PWD or NAPOT.
- **2017-2020 Neural Lace stage:** the program broadened toward distributed interfaces, embodiment,
  sensory return, and action. Later terms are not backdated into this stage.
- **July 31, 2022:** `map.napot.md` publicly joins brainwave phase variance, distributed neural
  arrays, rendering, and the absence of a centralized viewer
  ([commit `f36a268`](https://github.com/v5ma/selfawarenetworks/blob/f36a26890aaac06fef614e94e37f31b7799e08c8/map.napot.md#L98)).
- **August 22, 2022:** `a0004z.md` explicitly contrasts common low-information tonic activity with
  rare high-information phasic activity and proposes gradual oscillatory absorption
  ([commit `9911b61`](https://github.com/v5ma/selfawarenetworks/blob/9911b61b401aeb9aab74cd765a18e7b7019eff5e/a0004z.md#L24)).
- **November 28, 2022:** `a0310z.md` explicitly treats an unusual phase change and irregular timing
  as information in the information-theory sense and joins that difference to rendering,
  recurrence, and dissipation
  ([commit `4e0cf1e`](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md#L126)).
- **June 15, 2025:** `13san.md` adds coefficient-of-variation language for differentiated timing
  relative to the collective synchronization pattern
  ([commit `5a59de9`](https://github.com/v5ma/selfawarenetworks/blob/5a59de90de6554cb35a253af68a7ba9cd6927705/13san.md#L16)).

The current wording restores the intended operation without accepting every anatomical,
frequency-band, magnitude, field, or causal statement in the working notes as established science.

## Claim ladder

| Claim | Status |
|---|---|
| Band-limited gamma rhythms and broadband high-frequency activity are distinguishable measurements. | Established in bounded preparations. |
| Gamma can participate in sensory processing, attention, memory, selective communication, and phase-dependent receiver effects. | Supported in bounded circuits and tasks. |
| Gamma is a universal, continuous, and sufficient marker or seat of consciousness. | Not supported. |
| Lower-probability events have greater Shannon self-information under the same declared baseline. | Mathematically established. |
| Expected gamma coordination can be low-surprisal context while a rarer phase departure carries more information. | Valid conditional formulation; the proposed neural role is SAN-specific. |
| Tuned receivers use multidimensional PWDs to differentiate content and organize recurrent consequence. | Open, testable SAN hypothesis. |
| Distributed phase and field-cell differences constitute phenomenological content. | Stronger unresolved SAN identity hypothesis. |

## Discriminating tests

1. Separate narrowband gamma peaks from broadband high-frequency power, spikes, evoked transients,
   muscle artifact, and line noise.
2. Estimate the tonic baseline from held-out data for a named receiver, task, and state before
   calculating event surprisal.
3. Compare the multidimensional PWD against gamma power, phase alone, firing rate, burst measures,
   prediction error, ordinary CV, and aperiodic spectral parameters.
4. Match event rarity while scrambling source identity, spatial phase, or pathway timing to test
   whether tuning and organization outperform equally surprising noise.
5. Perturb excitation and inhibition separately and predict advances, delays, omissions, waveform
   changes, receiver response, and behavioral consequence.
6. Compare rare gamma coordination onsets with rare gamma dispersion events under matched baseline
   probability; either can be informative in the appropriate context.
7. Follow effective events through recurrence, dissipation, action, and later plasticity rather than
   inferring memory or consciousness from one spectral correlation.

## Read next

- [[brainwaves|Brainwaves in SAN Source History]]
- [[brainwave|Brainwave: Common Term, Measured Signal, and SAN Translation]]
- [[brain-rhythms|Brain Rhythms]]
- [[gamma-oscillations|Gamma Oscillations]]
- [[gamma-wave-consideration-sandwich|Gamma Consideration Sandwich]]
- [[phase-wave-differential|Phase-Wave Differential]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[neural-tuning|Neural Tuning]]
- [[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]]
- [[neural-oscillation|Neural Oscillation]]
- [[phase-language-firewall|Phase Language Firewall]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
