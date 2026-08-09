---
title: "Neural Oscillation: Event, Reference, and Receiver-Relative Information"
tags: [san, neural-oscillation, electrophysiology, gamma, shannon-information, phase-wave-differential]
aliases: [Neural Oscillation]
summary: "An operational account of one neural oscillatory component, the gamma-consciousness coordination problem, and SAN's bounded proposal that expected tonic activity and uncommon receiver-relative PWDs have different information roles."
status: governed
---

# Neural Oscillation: Event, Reference, and Receiver-Relative Information

> **Page role:** This singular route asks when one measured oscillatory component or event can act
> as a reference or information-bearing change for a named receiver. [[neural-oscillations|Neural
> Oscillation Families]] owns the multiscale taxonomy. [[gamma-oscillation|Gamma Oscillation]] owns
> the detailed gamma-consciousness and SAN Shannon-PWD comparison. [[gamma-oscillations|Gamma
> Phenomena]] owns the measurement taxonomy, while [[brain-rhythms|Brain Rhythms]] and
> [[brainwave|Brainwave]] govern the broader measurement and recording-language boundaries.

> **Image status:** No medically accepted image is installed. Two PNG/SVG plate pairs treated
> oscillation as one universal carrier and imposed an unsupported universal cortical-layer readout;
> they are preserved in the do-not-use medical-review archive. A source-bounded replacement prompt
> is maintained in the medical-image prompt ledger, and image generation remains paused.

A **neural oscillation** is a recurring, approximately rhythmic, or burst-like change in a declared
neural variable. Depending on the experiment, that variable may be membrane voltage, synaptic
current, spike probability, local field potential, intracranial EEG, scalp EEG, or MEG. These
measurements are related through biology and instrumentation, but they are not interchangeable
recordings of one waveform.

The key question for SAN is not merely whether a rhythm exists. It is:

> What is expected at a particular receiver, what changed relative to that expectation, how
> improbable was the change, and what reproducible consequence followed?

## Define the event before interpreting it

An observed signal can contain several components:

```text
x_m(t) = periodic_m(t) + aperiodic_m(t) + transient_m(t)
         + artifact_m(t) + epsilon_m(t)                            [1]
```

The subscript `m` identifies the measurement. An oscillatory claim should specify the signal,
reference, anatomy, scale, time window, spectral or event-detection method, waveform, and uncertainty.
A spectral peak may reflect a sustained rhythm, repeated bursts, a nonsinusoidal waveform and its
harmonics, or a mixture. Phase is interpretable only while a sufficiently resolved oscillatory
component is present.

At the cellular level, Llinas distinguished conductance-based autorhythmic cells from resonators
that respond preferentially to certain input frequencies
([Llinas, 1988](https://pubmed.ncbi.nlm.nih.gov/3059497/)). At population and recording levels,
source geometry, synaptic and return currents, synchrony, cancellation, tissue conduction, and the
instrument all transform what is measured
([Buzsaki, Anastassiou, and Koch, 2012](https://pubmed.ncbi.nlm.nih.gov/22595786/)). Neither result
supports one universal carrier oscillation.

## The gamma-consciousness program and its unresolved step

A substantial neuroscience program investigated gamma-range coordination as a candidate mechanism
for binding and conscious perception. Human activity near 40 Hz was associated with temporal
binding ([Joliot, Ribary, and Llinas, 1994](https://pubmed.ncbi.nlm.nih.gov/7972135/)), and transient
long-range gamma synchronization correlated with conscious perception in a later study
([Melloni et al., 2007](https://pmc.ncbi.nlm.nih.gov/articles/PMC6672558/)). These findings made
gamma coordination a serious candidate neural correlate; the popular shorthand that gamma was the
"seat of consciousness" overstates what the literature established.

Later dissociations showed why gamma alone could not close the explanation. Local category-specific
gamma responses could track sensory evidence without tracking conscious perception produced by
prior exposure ([Aru et al., 2012](https://pubmed.ncbi.nlm.nih.gov/23100413/)). Induced gamma in
another visual task was better explained as task-relevant or post-perceptual processing than as
visual awareness itself
([Pitts et al., 2014](https://pubmed.ncbi.nlm.nih.gov/25063731/)).

Those results do not make gamma irrelevant. They show that gamma presence, power, or synchrony does
not by itself identify differentiated content, the biological receiver, or the causal consequence.

## What Shannon adds in the SAN interpretation

Shannon information theory was not absent from neuroscience. SAN's proposed addition is a specific
application to the gamma and oscillation problem: coordinated activity may provide an expected
reference state, while less probable excitation- or inhibition-driven departures may provide
differentiated updates.

For event `x_i`, receiver `r`, reference model `p_0,r`, and context `C`, Shannon self-information is:

```text
I_r(x_i | C) = -log2 p_0,r(x_i | C)                              [2]
```

If an expected coordinated event is more probable than a departure under the same receiver and
context:

```text
p_0,r(x_departure | C) < p_0,r(x_expected | C)                   [3]
```

then:

```text
I_r(x_departure | C) > I_r(x_expected | C)                       [4]
```

This is the precise version of the SAN claim that a repeated tonic pattern can be low-information
while a rarer phasic difference is more informative. Perfect synchrony is not intrinsically
low-information. It approaches low surprisal only when that synchrony is highly expected in the
declared context. A rare synchronization onset can itself carry high surprisal.

The inverse caution is equally important: rare does not mean meaningful. Random noise, movement,
muscle artifact, and analysis error can all be improbable. Shannon surprisal becomes a candidate
biological message only when a receiver is sensitive to the event's organization and a reproducible
consequence follows.

## Excitation and inhibition can both write a difference

SAN does not restrict informative departures to extra firing. Relative to an expected event, a
change can be an advance, delay, omission, suppression, burst, waveform change, altered transmitted
quantity, spatial phase shift, or structured dispersion.

| Candidate departure | Possible measured change | What must still be shown |
|---|---|---|
| Unexpected excitation | Earlier event, burst, increased probability, altered waveform or release | Source, tuned receiver, and selective consequence. |
| Unexpected inhibition | Delay, omission, reduced probability, reshaped event, or alternative route | Active inhibitory mechanism rather than missing data or artifact. |
| Phase-compatible coordination | Coincidence, summation, stable lag, or recruitment | That the relation is expected or unexpected for this receiver and context. |
| Structured dispersion or splay | Stable separation, sequential receiver windows, boundary, or competition | Organization beyond random phase and a measurable downstream use. |

Thus coherence and dispersion are not simple on/off labels for consciousness. They are candidate
relations that can respectively coordinate or differentiate activity, depending on anatomy, timing,
state, and receiver.

## From departure to PWD

SAN's [[phase-wave-differentials|phase-wave differential]] is a multidimensional, receiver-relative
candidate rather than phase alone:

```text
PWD_r,i = X_r,i - E_0,r[X | C]                                  [5]
```

`X` can include event timing, circular phase, frequency, amplitude, duration, waveform, transmitted
quantity, spatial relation, and network state. Unlike dimensions require explicit definitions and
normalization. Coefficient of variation can describe one interval dimension, but CV is not Shannon
information, is not a circular-phase statistic, and is not the complete PWD.

A candidate PWD becomes biologically useful only through receiver-specific transformation:

```text
Delta_Y_r = f_r(PWD_r,i, receiver_state, route, body_state)       [6]
```

The stronger SAN operator is:

```text
expected tonic coordination
-> uncommon receiver-relative excitation or inhibition
-> greater conditional surprisal
-> tuned detection and local transformation
-> recurrent redistribution
-> possible perception, memory, routing, or embodied action
-> dissipation into, or later re-expression from, an updated context
```

The **tonic canvas** and **phasic ink** name these proposed operational roles. They are not fixed
frequency bands and are not merely decorative language. The participating field-cell-network-body
process is the proposed distributed observer-action; no screen, central reader, or hidden viewer is
added.

## Source-faithful SAN chronology

- **July 31, 2022:** `map.napot.md` publicly joins brainwave phase variance, distributed neural
  arrays, rendering, and the rejection of a centralized viewer
  ([commit `f36a268`](https://github.com/v5ma/selfawarenetworks/blob/f36a26890aaac06fef614e94e37f31b7799e08c8/map.napot.md#L98)).
- **August 22, 2022:** `a0004z.md` explicitly contrasts common low-information tonic activity with
  rare high-information phasic activity and proposes gradual oscillatory absorption
  ([commit `9911b61`](https://github.com/v5ma/selfawarenetworks/blob/9911b61b401aeb9aab74cd765a18e7b7019eff5e/a0004z.md#L24)).
- **November 28, 2022:** `a0310z.md` explicitly treats irregular phase timing as information in
  Shannon's sense and relates it to recurrence, dissipation, and a return toward synchronization
  ([commit `4e0cf1e`](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md#L126)).
- **June 15, 2025:** `13san.md` adds coefficient-of-variation language to the later timing account
  ([commit `5a59de9`](https://github.com/v5ma/selfawarenetworks/blob/5a59de90de6554cb35a253af68a7ba9cd6927705/13san.md#L16)).

These are public fixation dates for the cited formulations. They do not prove the biological or
phenomenal claims, and later vocabulary is not backdated into earlier sources.

## Claim ladder

| Claim | Status |
|---|---|
| Cells and circuits can oscillate, resonate, burst, phase-lock, disperse, and form traveling patterns. | Established broadly, with preparation-specific mechanisms. |
| Gamma coordination can participate in binding, attention, communication, memory, and perceptual processing. | Supported in bounded circuits and tasks. |
| Gamma presence, power, or synchrony is a universal and sufficient seat of consciousness. | Not supported. |
| A lower-probability event has greater Shannon self-information under the same declared model. | Mathematically established. |
| An expected tonic pattern can have low surprisal while a rarer excitation- or inhibition-driven departure has more. | Valid conditional formulation. |
| Tuned biological receivers use multidimensional PWDs to differentiate and route content. | Open, testable SAN hypothesis. |
| Distributed phase and field-cell differences constitute phenomenological content. | Stronger unresolved SAN identity hypothesis. |

## Discriminating test

1. Name the source, receiver, route, species, anatomy, task, body state, and recording modality.
2. Separate periodic activity, transient bursts, aperiodic structure, broadband activity, spikes,
   waveform harmonics, and artifacts.
3. Estimate the receiver-specific reference distribution on held-out data before calculating
   surprisal.
4. Compare expected coordination, rare coordination, structured dispersion, inhibition, and
   matched-rarity random events.
5. Test whether PWD adds held-out prediction beyond stimulus, rate, power, phase alone, movement,
   prior state, ordinary CV, and prediction error.
6. Perturb the named route and require the predicted receiver loss, behavioral consequence, and
   where feasible rescue.
7. Follow effective events through recurrence, dissipation, action, and conditional plasticity
   rather than inferring consciousness from a spectral correlation.

## Read next

- [[neural-oscillations|Neural Oscillation Families]]
- [[gamma-oscillation|Gamma Oscillation]]
- [[gamma-oscillations|Gamma Phenomena]]
- [[brain-rhythms|Brain Rhythms]]
- [[brainwave|Brainwave]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[neural-oscillatory-synchronization|Neural Oscillatory Synchronization]]
- [[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]]
- [[single-trial-residual-neural-information|Single-Trial Neural Information]]
- [[cross-scale-oscillation-communication|Cross-Scale Oscillation Communication]]
- [[neural-tuning|Neural Tuning]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[phase-language-firewall|Phase Language Firewall]]
