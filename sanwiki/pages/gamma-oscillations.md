---
title: "Gamma Phenomena: Measurement Taxonomy and SAN Test Matrix"
tags: [san, gamma, measurement, electrophysiology, information-theory, testability]
aliases: [Gamma Oscillations, Gamma Phenomena]
summary: "A scale-aware taxonomy of the different neural phenomena called gamma and a test matrix for separating established measurements from SAN's receiver-relative PWD hypotheses."
status: governed
---

# Gamma Phenomena: Measurement Taxonomy and SAN Test Matrix

> **Page role:** This plural route separates the different phenomena commonly grouped under
> "gamma." The singular [[gamma-oscillation|Gamma Oscillation]] page explains the gamma-consciousness
> history and SAN's Shannon-PWD interpretation. General signal scale and source mixing are governed
> in [[brainwave|Brainwave]] and [[brain-rhythms|Brain Rhythms]].

> **Image status:** Two active PNG/SVG plate pairs failed source-faithful medical review and are
> hash-preserved in the do-not-use medical-review archive. An earlier v3 pair remains preserved in
> the older failed-medical-review archive. No accepted or active image remains. Generation is paused.

**Gamma phenomena** include several measurements and biological events that can overlap in
frequency while differing in origin and interpretation. A narrowband spectral peak, a transient
burst, broadband high-frequency power, spike-field locking, interareal phase coordination, and a
traveling phase pattern are not interchangeable evidence.

The purpose of this page is to prevent a common reasoning error:

```text
activity occurs in a conventional gamma range
therefore it is one gamma mechanism
therefore it carries a prediction or percept
therefore it validates SAN or consciousness
```

None of those implications follows without additional measurement, source, receiver, artifact,
task, and causal evidence.

## Measurement taxonomy

| Phenomenon | Minimum evidence | Frequent confound | Bounded interpretation |
|---|---|---|---|
| Band-limited gamma peak | A resolved spectral peak above a modeled aperiodic background | Harmonics, filtering, line noise, short transients | A rhythmic component exists during the declared window and preparation. |
| Transient gamma burst | Time-resolved event detection with duration and threshold reported | Threshold choice, evoked transient, spectral smearing | Brief gamma-range coordination or power increase occurred. |
| Broadband high-frequency activity | Broad spectral elevation without one narrow peak | Spike transients, muscle activity, reference and filtering choices | Often tracks local population activation more closely than a gamma oscillator. |
| Spike-field locking | Spike times related to a declared phase estimate | Common input, weak rhythm, phase-estimator uncertainty | Spiking probability depends on the measured local phase relation. |
| Interareal phase relation | Simultaneous recordings, lag and common-source controls | Volume conduction, common drive, reference choice | Two recorded sites exhibit a task- and method-bounded timing relation. |
| Spatial phase gradient or traveling pattern | Dense spatial sampling and reproducible phase progression | Sequential evoked responses, sparse sampling | Organized activity propagates or changes phase across the sampled tissue. |
| Cross-frequency organization | Preregistered components, waveform and surrogate controls | Nonsinusoidal harmonics, event-rate changes | Declared fast and slow signal features covary under the tested conditions. |

Ray and Maunsell showed why the taxonomy matters. In macaque V1, band-limited gamma and broadband
high-gamma power changed differently with stimulus size, while broadband high-frequency activity
tracked nearby population firing more closely
([Ray and Maunsell, 2011](https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1000610)).

Working-memory gamma can also be event-like rather than continuous. Lundqvist and colleagues found
brief and variable beta and gamma bursts during encoding and reactivation
([Lundqvist et al., 2016](https://doi.org/10.1016/j.neuron.2016.02.028)).

## A spectrum is a measurement decomposition

A useful schematic decomposition is:

```text
S(f,t) = P_aperiodic(f,t) + sum_k P_peak,k(f,t) + E_artifact(f,t)    [1]
```

`S(f,t)` is the observed time-varying spectrum; `P_aperiodic` is a modeled aperiodic component;
`P_peak,k` represents resolved rhythmic peaks; and `E_artifact` represents residual physiological
or instrumental contamination. Equation [1] is an analysis model, not a claim that these sources
are perfectly separable.

A change in conventional gamma-band power can result from a peak changing amplitude, frequency, or
bandwidth; a broadband offset; a change in aperiodic slope; a transient; a harmonic; or artifact.
Band integration alone cannot identify which occurred.

## Phase requires a declared signal and receiver

For two sufficiently resolved components:

```text
Delta_phi_sr(t) = wrap(phi_s(t) - phi_r(t))                        [2]
```

`s` is a declared source signal and `r` a declared receiver signal. A stable or changing relative
phase can help characterize locking, lag, dispersion, or propagation. It does not automatically
show direct communication. Common input, geometry, source mixing, reference choice, signal quality,
and filtering must be addressed.

Bosman and colleagues measured attention-related gamma synchronization between macaque visual areas
([Bosman et al., 2012](https://doi.org/10.1016/j.neuron.2012.06.037)). Besserve and colleagues found
stimulus-dependent shifts in gamma phase across macaque V1 sites that coincided with changes in the
effect of gamma activity on spiking at other sites
([Besserve et al., 2015](https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002257)).
These are positive receiver-effect anchors, not proof of one universal gamma code.

## Scalp gamma needs strict artifact control

Scalp EEG gamma is especially vulnerable to cranial and facial muscle activity, eye movements,
line noise, electrode problems, referencing, and filtering. High-frequency scalp power must not be
called cortical gamma merely because it falls inside a selected band. Comparisons should include
artifact-sensitive channels, movement measures, spatial topography, source models where justified,
and analyses showing that the result survives plausible contamination controls.

This matters for consciousness studies because awareness, report, attention, eye movement, and
muscle preparation can change together. Pitts and colleagues found induced gamma associated with
task relevance and post-perceptual processing rather than awareness itself
([Pitts et al., 2014](https://pubmed.ncbi.nlm.nih.gov/25063731/)). Aru and Bachmann reported greater
gamma power without awareness in a masking preparation
([Aru and Bachmann, 2009](https://pubmed.ncbi.nlm.nih.gov/19071195/)).

## Translating the rejected image claims

The quarantined plates contained a real intended question but stated the answer as established.
Their phrases can be converted into testable propositions:

| Rejected image phrase | Source-faithful scientific translation |
|---|---|
| "Gamma is the fast prediction carrier" | Test whether a declared gamma event predicts receiver state or decoded task variable beyond stimulus, rate, broadband power, movement, and prior state. |
| "Inhibitory pacing creates gamma packets" | In a named circuit, perturb a defined inhibitory population and test the predicted change in a resolved gamma component, spiking relation, and behavior. Do not universalize one generator. |
| "Gamma carries prediction bits" | Define the event alphabet and baseline, estimate held-out information, and show that the receiver uses the timing relation. Frequency label alone is not a bit. |
| "Phase match becomes readout" | Show that manipulating source-receiver phase changes a named receiver response and consequence while rate, power, and common input are controlled. |
| "NAPOT-readable state" | Replace a hidden reader with distributed receiver populations whose recurrent state changes can be measured. NAPOT remains the SAN interpretation. |
| "Bound percept frame" | Specify the perceptual variable, report and no-report controls, spatial organization, duration, and competing explanations. |

The medically accurate replacement is therefore not a linear generator-to-carrier-to-readout
diagram. It is a controlled comparison among measurements, candidate generators, receiver effects,
and alternative models.

## SAN test matrix

SAN proposes that gamma can sometimes provide either an expected tonic reference or a phasic
departure. The role is conditional. A rare onset of gamma coordination can be informative in one
context; a loss or shift of expected gamma coordination can be informative in another.

For event `x_i`, receiver `r`, baseline model `p_0`, and context `C`:

```text
I_r(x_i | C) = -log2 p_0,r(x_i | C)                                [3]
```

Shannon surprisal is necessary to formalize common versus uncommon events, but rarity is not enough.
A candidate PWD should improve prediction of a receiver consequence after established covariates
are included:

```text
M_0: Y_r,t+Delta = f(stimulus, rate, power, movement, state)
M_1: Y_r,t+Delta = f(stimulus, rate, power, movement, state, PWD_r,t) [4]
```

The SAN increment is supported only if preregistered out-of-sample performance for `M_1` exceeds
`M_0`, the PWD term survives matched-rarity noise and artifact controls, and perturbing the proposed
route changes the receiver in the predicted direction.

| SAN question | Required comparison | Failure condition |
|---|---|---|
| Does gamma supply tonic context? | Expected gamma pattern versus equally stable non-gamma state | Gamma adds no receiver-specific prediction or perturbation effect. |
| Is a departure an informative PWD? | PWD versus rate, power, phase alone, CV, prediction error, and matched-rarity noise | The full event vector adds no held-out receiver prediction. |
| Does timing route communication? | Phase manipulation with rate, power, and common drive controlled | Receiver consequence does not follow the predicted phase change. |
| Does recurrence preserve the event? | Single-pass model versus recurrent state model | No measurable redistribution, persistence, or later bias exists. |
| Does the event contribute to awareness? | Awareness crossed with task relevance, report, movement, and confidence | Gamma tracks only task, report, or movement. |
| Does the event support NAPOT? | Distributed receiver-state reconstruction versus simpler local and rate models | NAPOT-specific organization adds no explanatory or predictive value. |

## Claim ladder

| Claim | Status |
|---|---|
| Several distinct neural and artifactual phenomena can contribute power in conventional gamma ranges. | Established. |
| Band-limited gamma, broadband high-frequency activity, bursts, phase locking, and traveling patterns require separate analyses. | Established methodological requirement. |
| Gamma timing can affect receiver spiking and selective communication in bounded preparations. | Supported in bounded circuits. |
| Gamma is always the phasic prediction carrier and slower bands are always tonic context. | Not supported. |
| A less probable event has greater Shannon self-information under the same declared baseline. | Mathematically established. |
| A receiver-tuned multidimensional gamma-related departure can function as a PWD. | Open, testable SAN hypothesis. |
| Such PWDs participate in distributed NAPOT rendering or constitute qualia. | Stronger unresolved SAN hypothesis. |

## Reporting checklist

For every gamma result, report:

1. species, preparation, area, layer, source, receiver, and behavioral state;
2. recording type, reference, sampling, filtering, and preprocessing;
3. frequency definition, peak criteria, aperiodic model, event detector, and analysis window;
4. whether the result is narrowband, burst-like, evoked, traveling, phase-based, or broadband;
5. spike, muscle, eye, movement, line-noise, volume-conduction, and waveform controls;
6. stimulus, attention, expectation, task relevance, report, confidence, and action covariates;
7. baseline probability model and held-out event surprisal when information language is used;
8. alternative models based on rate, power, prior state, and matched-rarity noise;
9. predicted receiver consequence, perturbation, loss, and rescue; and
10. whether the conclusion is established physiology, supported interpretation, open SAN
    hypothesis, or phenomenal identity claim.

## Read next

- [[gamma-oscillation|Gamma Oscillation: Coordination, Content, and the SAN Shannon-PWD Hypothesis]]
- [[brainwave|Brainwave: Common Term, Measured Signal, and SAN Translation]]
- [[brain-rhythms|Brain Rhythms]]
- [[neural-oscillations|Neural Oscillations]]
- [[traveling-waves-neural-oscillations|Traveling Waves in Neural Oscillations]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[phase-wave-differential|Phase-Wave Differential]]
- [[gamma-wave-consideration-sandwich|Gamma Consideration Sandwich]]
- [[neural-tuning|Neural Tuning]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[phase-language-firewall|Phase Language Firewall]]
