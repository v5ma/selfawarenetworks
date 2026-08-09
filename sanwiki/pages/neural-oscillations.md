---
title: "Neural Oscillation Families: Scale, Dynamics, and SAN Interpretation"
tags: [san, neural-oscillations, electrophysiology, multiscale, shannon-information, phase-wave-differential]
aliases: [Neural Oscillations]
summary: "A multiscale taxonomy of neural oscillation families, the transformations among measurement levels, and the bounded SAN hypothesis that tonic coordination and receiver-relative differences play complementary roles."
status: governed
---

# Neural Oscillation Families: Scale, Dynamics, and SAN Interpretation

> **Page role:** This plural route maps the families and scales of oscillatory neural phenomena.
> [[neural-oscillation|Neural Oscillation]] defines the singular concept. [[brain-rhythms|Brain
> Rhythms]] governs the broader measurement account, while [[brainwave|Brainwave]] translates the
> informal recording term and [[gamma-oscillations|Gamma Phenomena]] handles the gamma-specific
> measurement taxonomy.

> **Image status:** No medically accepted image is installed. A future multiscale image description
> is maintained in the medical-image prompt ledger; generation remains paused.

**Neural oscillations** are recurring, approximately rhythmic, burst-like, or spatially organized
changes in neural activity. They occur across cellular, local-circuit, distributed-system, and
recording scales. Those scales are causally related, but they are not interchangeable views of one
wave.

The central discipline is:

> Declare the biological process, measurement, scale, source, receiver, reference, time window, and
> consequence before assigning a frequency band or SAN interpretation.

## Multiscale families

| Scale | Candidate process | Typical observation | What must not be inferred automatically |
|---|---|---|---|
| Subcellular and membrane | Voltage-dependent conductances, channel kinetics, dendritic and somatic resonance | Intracellular voltage or current response | One intrinsic clock for the whole neuron or a direct EEG generator. |
| Single neuron | Rhythmic spiking, bursting, phase response, adaptation, autorhythmicity | Spike train, inter-event interval, phase-response relation | Represented content from frequency alone. |
| Synapse and dendrite | Recurrent input, inhibition, coincidence, local nonlinear events, plasticity | Postsynaptic potential, dendritic event, calcium or release proxy | A universal input-output rule across cell types and states. |
| Local population | Recurrent excitation and inhibition, common input, pacemaker or resonant recruitment | Multiunit activity, LFP peak, burst, spike-field locking | One mechanism for every event in the same band. |
| Laminar and areal circuit | Feedforward, feedback, horizontal, thalamocortical, and recurrent interactions | Laminar LFP/CSD, ECoG, interareal timing | A fixed band-to-layer or band-to-direction anatomy. |
| Distributed system | Phase gradients, traveling patterns, transient coupling, structured dispersion | Multisite LFP/ECoG/MEG/EEG relation | Global zero-lag synchrony or one centralized observer. |
| Whole organism and environment | Sensory sampling, respiration, movement, cardiac state, action, social interaction | Neural plus behavioral and physiological time series | That a neural rhythm is independent of body and task. |

Llinas distinguished cells with conductance-based autorhythmicity from resonators whose ionic
properties make them respond preferentially to particular input frequencies
([Llinas, 1988](https://pubmed.ncbi.nlm.nih.gov/3059497/)). This is a cellular foundation for
oscillation and resonance. It does not make every neuron a pacemaker or identify consciousness with
one frequency.

## Rhythms are not all sustained sinusoids

Neural data can contain:

- sustained or quasi-sustained periodic activity;
- brief oscillatory bursts;
- damped responses and phase resets;
- repeated nonsinusoidal waveforms and harmonics;
- traveling or rotating spatial phase patterns;
- structured phase dispersion or splay;
- aperiodic spectral structure;
- evoked transients and broadband spike-related power; and
- physiological or instrumental artifacts.

A spectral peak is evidence for a resolved rhythmic component under a declared analysis, not proof
of a permanent oscillator. Working-memory beta and gamma activity, for example, can occur as brief,
variable bursts rather than continuous clocks
([Lundqvist et al., 2016](https://pubmed.ncbi.nlm.nih.gov/26996084/)).

Periodic and aperiodic spectral components should also be separated before assigning physiology or
cognition
([Donoghue et al., 2020](https://pubmed.ncbi.nlm.nih.gov/33230329/)).

## Measurement levels require a transformation model

An intracellular voltage trace, local field potential, ECoG contact, scalp EEG channel, and MEG
sensor do not record the same object. A schematic modality-specific model is:

```text
Y_m(t) = H_m[J(x,t), geometry, reference] + A_m(t) + epsilon_m(t)   [1]
```

`J(x,t)` represents distributed biological current sources; `H_m` represents the measurement and
conduction operator for modality `m`; `A_m` represents artifacts; and `epsilon_m` represents
residual error. Equation [1] makes the cross-scale obligation explicit: a population or scalp signal
must be related to cellular activity through anatomy, geometry, synchrony, cancellation, and the
instrument, not by assuming the waveform is copied upward.

Neural currents and fields have multiple cellular contributors, and the relationship among spikes,
synaptic currents, return currents, geometry, and extracellular recordings is preparation-
dependent
([Buzsaki, Anastassiou, and Koch, 2012](https://pubmed.ncbi.nlm.nih.gov/22595786/)).

## Frequency bands are search ranges, not departments

Delta, theta, alpha, beta, gamma, and high-gamma labels are descriptive conveniences. Their
boundaries vary, and similar ranges can participate in different operations across species, regions,
states, and tasks. Conversely, one operation can recruit multiple frequencies and nonoscillatory
activity.

Pathway-specific frequency findings remain useful when bounded. Bastos and colleagues reported
different frequency profiles for directed feedforward and feedback influences in macaque visual
cortex
([Bastos et al., 2015](https://pubmed.ncbi.nlm.nih.gov/25556836/)). That does not establish a
universal gamma-feedforward and beta-feedback anatomy across the entire cortex.

## Coordination, dispersion, and traveling organization

For two declared signals with valid phase estimates:

```text
Delta_phi_ij(t) = wrap(phi_i(t) - phi_j(t))                       [2]
```

Relative phase can describe near synchrony, stable nonzero lag, changing lag, structured dispersion,
or propagation. A low global synchronization index can result from organized splay or random phase;
those states are computationally and anatomically different.

Traveling neural activity requires spatial measurement. A continuous phase gradient across sampled
tissue can organize sequential receiver windows without all locations firing together. See
[[traveling-waves-neural-oscillations|Traveling Waves in Neural Oscillations]].

SAN therefore preserves both sides of the mechanism:

- coordination can support shared timing, summation, recruitment, and route availability;
- structured dispersion, inhibition, delay, omission, or phase shift can preserve distinctions,
  boundaries, competition, and alternative routes.

Neither side is automatically conscious or informative.

## The SAN Shannon-PWD interpretation

SAN proposes that an expected ongoing state can function as a tonic receiver context and that a
less probable excitation- or inhibition-driven departure can function as a phasic update. For event
`x_i`, receiver `r`, baseline `p_0`, and context `C`:

```text
I_r(x_i | C) = -log2 p_0,r(x_i | C)                              [3]
```

An event that is less probable under the same baseline has greater Shannon self-information. This
formalizes a common-versus-rare distinction; it does not establish semantic meaning.

The candidate [[phase-wave-differentials|phase-wave differential]] is multidimensional:

```text
PWD_r,i = X_r,i - E_0,r[X | C]                                   [4]
```

`X` can include timing, circular phase, frequency, amplitude, duration, waveform, transmitted
quantity, spatial relation, and network state. The PWD becomes a biological candidate only when a
tuned receiver detects it and a reproducible consequence follows.

The joined SAN operator is:

```text
expected tonic coordination
-> uncommon receiver-relative excitation or inhibition
-> higher conditional surprisal
-> tuned local transformation
-> recurrent redistribution across arrays and systems
-> possible perception, memory, routing, or embodied action
-> dissipation into, or later re-expression from, an updated context
```

The terms **tonic canvas** and **phasic ink** name proposed operational roles, not merely decorative
metaphors and not fixed frequency bands. The participating receiver-transmitter-field-body process
is the proposed distributed observer-action; no hidden viewer reads the oscillations.

## Cross-scale communication is an empirical problem

The fact that multiple levels exhibit rhythms does not prove that they use one code. A cellular
timing change can influence population activity, but source geometry, recurrent circuitry,
inhibition, cancellation, behavior, and measurement transform it. A population rhythm can also
change cellular excitability or spike timing without carrying a discrete message.

The relevant cross-scale test is not visual resemblance between traces. It is whether a model of
one scale predicts a named consequence at another scale beyond simpler covariates:

```text
M_0: Y_target = f(stimulus, rate, power, movement, state)
M_1: Y_target = f(stimulus, rate, power, movement, state, PWD)      [5]
```

SAN gains support only when `M_1` improves preregistered held-out prediction, survives matched-
rarity noise and artifact controls, and a route-specific perturbation produces the predicted loss
and rescue.

## Claim ladder

| Claim | Status |
|---|---|
| Cells and circuits can exhibit intrinsic oscillation, resonance, recurrent rhythms, bursts, and traveling organization. | Established broadly, with preparation-specific mechanisms. |
| Cellular, local-field, intracranial, scalp, magnetic, and hemodynamic measurements are distinct transformations. | Established methodological requirement. |
| Frequency bands have fixed universal cognitive, laminar, or directional functions. | Not supported. |
| Relative phase can affect receiver excitability and communication in bounded circuits. | Supported in bounded preparations. |
| Lower-probability events have greater Shannon self-information under a declared baseline. | Mathematically established. |
| Ongoing tonic coordination and receiver-relative PWDs play complementary contextual and differentiating roles. | Open, testable SAN hypothesis. |
| Distributed field-cell phase differences participate in NAPOT rendering or constitute qualia. | Stronger unresolved SAN hypothesis. |

## Review and experiment checklist

1. Name the species, preparation, anatomy, cell types, source, receiver, and behavioral state.
2. Declare the recording modality, reference, sampling, preprocessing, and temporal window.
3. Separate periodic peaks, bursts, waveform harmonics, broadband activity, aperiodic structure, and
   artifacts.
4. Quantify phase uncertainty and distinguish synchrony, stable lag, structured dispersion, random
   phase, and traveling gradients.
5. Estimate the receiver-specific baseline on training data before calculating surprisal.
6. Compare PWD against rate, power, phase alone, CV, prediction error, movement, state, and matched-
   rarity noise.
7. Test source-receiver direction and common-input alternatives.
8. Use selective perturbation with predicted receiver loss and rescue.
9. Follow the event through recurrence, dissipation, behavior, and conditional plasticity.
10. Label each conclusion as established physiology, supported interpretation, open SAN hypothesis,
    or phenomenal identity claim.

## Read next

- [[neural-oscillation|Neural Oscillation]]
- [[brain-rhythms|Brain Rhythms]]
- [[brainwave|Brainwave]]
- [[gamma-oscillations|Gamma Phenomena]]
- [[traveling-waves-neural-oscillations|Traveling Waves in Neural Oscillations]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[neural-oscillatory-synchronization|Neural Oscillatory Synchronization]]
- [[cross-scale-oscillation-communication|Cross-Scale Oscillation Communication]]
- [[neural-oscillation-hierarchy|Neural Oscillation Hierarchy]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[phase-language-firewall|Phase Language Firewall]]
- [[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]]
- [[neural-tuning|Neural Tuning]]
