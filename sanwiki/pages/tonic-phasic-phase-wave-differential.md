# Tonic Baseline, Phasic Update, and Phase-Wave Differential

SAN begins from a simple fact: the brain is already active before any new event arrives. A useful
information unit must therefore describe a change relative to an ongoing reference pattern.

## Earn the vocabulary

**Tonic** is the current reference or background role for a specified cell, population, scale, and
time window. **Phasic** is a transient, consequential departure from that reference. A **phase-wave
differential** (PWD) is SAN's name for the structured spatiotemporal difference between the
reference and changed pattern.

These are relative roles. Tonic does not always mean a fixed slow band, and phasic does not always
mean gamma. A slower event can be phasic relative to a faster local baseline; a faster rhythm can be
the stable reference inside another window.

## What a measurable PWD needs

A PWD claim should identify:

- the system and reference window;
- phase or event timing;
- frequency or recurrence rate;
- amplitude, waveform, and duration;
- spatial location, extent, and propagation;
- excitation, inhibition, or sign;
- cross-cell or cross-scale coupling; and
- a receiver or downstream consequence.

A compact starting point is `Delta X(x,t) = X_observed(x,t) - X_reference(x,t)`, with `X` explicitly
defined for the experiment. This is a family of candidate measurements, not yet one universal PWD
equation.

## Strength and persistence

The historical notes use "magnitude (amplitude + duration)" to make an important point: frequency
alone does not capture the strength or persistence of a neural event. The literal addition is not a
valid modern equation because amplitude and duration have different units. A test must instead
choose an appropriate normalized metric, waveform area, energy, calcium integral, release measure,
or receiver-specific effect.

At the synaptic scale, the [[synaptic-unreliability-mvr-2021|ionotropic information-channel]] keeps
waveform, calcium, release statistics, receptor state, and the receiver's response visible. MVR is
a candidate PWD component under a declared measurement, not proof of PWD by itself.

## What `1/f` contributes

Population recordings often show an aperiodic spectrum in which power declines as frequency
increases, with oscillatory peaks superimposed. This supplies a legitimate scale-sensitive
constraint: neural activity is not distributed uniformly across frequencies, and slow, persistent,
and fast, transient processes contribute differently to measured population signals.

The useful SAN question is generative:

```text
cellular waveform and event-duration distributions
+ synaptic-current and receptor kinetics
+ recurrent recruitment and inhibition
+ anatomy, filtering, and recording geometry
-> periodic peaks plus an aperiodic population spectrum
```

Modern analysis should estimate the periodic peaks and aperiodic component separately. The
comparison stops before treating a population `1/f` slope as a universal inverse law between one
spike's peak, width, event rate, field amplitude, spatial extent, or information content.

SAN preserves the cross-scale hypothesis by asking whether measured waveform, calcium, release,
and receiver variables improve a generative model of the population spectrum after firing rate,
synaptic-current statistics, anatomy, and recording physics are controlled. See
[Donoghue et al. (2020)](https://pubmed.ncbi.nlm.nih.gov/33230329/).

## Two timescales: tonic coordination and high-phasic update

The key distinction is not simply slow versus fast frequency. A slower or more persistent tonic
pattern can spread, recur, and coordinate broad populations over repeated cycles. A high-phasic
event can package a concentrated update into a short interval and rapidly recruit targets through
the pathways that connect them. Sharp-wave ripples are one established example: their local field
signature is spatially constrained, while the compressed neural event can quickly affect distant,
anatomically linked targets.

```text
tonic oscillation -> broad timing context built across repeated cycles
high-phasic PWD -> concentrated update and rapid pathway-specific recruitment
```

## When PWDs meet: coincidence becomes action

The tonic pattern provides recurring windows in which a receiver is more or less ready to respond.
When several high-phasic PWD contributions reach the same receiver at compatible times and phases,
their postsynaptic effects can add. Recurrently coupled groups can maintain a stable phase relation,
allowing their combined pattern to keep reinforcing the same downstream route.

```text
tonic timing context
-> phase-compatible high-phasic PWDs
-> coincident arrival and summation at a receiver
-> increased effective population drive
-> premotor and motor-pool recruitment
-> motor-neuron action potentials and acetylcholine release
-> muscle-fiber action potentials and calcium release
-> ATP-powered contraction
-> muscular or vocal action
```

SAN calls the signed, receiver-specific drive relative to the tonic baseline **electrical
valence**. Same frequency helps only when arrival time, conduction delay, relative phase, waveform,
synaptic efficacy, excitation, inhibition, and receiver state also permit summation. The neural
pattern supplies the control signal; it does not donate the mechanical energy. Neuromuscular
transmission recruits calcium-dependent muscle activation, and ATP powers contraction. Vocal action
also requires coordinated respiratory, laryngeal, and articulatory motor pools.

Bat vocalization studies already measure many of these observable ingredients. Pre-vocal beta and
high-gamma power changes, theta fronto-striatal coupling, and frontal gamma spike-LFP phase locking
predicted whether echolocation or communication would occur. A companion study found predominantly
frontal-to-auditory information flow before vocalization and returned auditory-to-frontal flow
after echolocation. SAN joins those measurements as a candidate building-PWD/electrical-valence
process whose causal role can be tested by selectively changing timing or phase alignment.

## From PWD to DPWDR

NAPOT 6 calls a sufficiently persistent or causally influential pattern a **dominant phase-wave
differential rhythm** (DPWDR). Dominance is a second hypothesis. It needs a measurable threshold,
such as spatial recruitment, temporal persistence, decoding advantage, causal leverage, competition
suppression, or a reliable effect on report and action.

## Dated source chain

| Source | Contribution |
|---|---|
| [[gh-a0060z|a0060z]] | Internally dated October 18, 2012 state-update ancestor: prior cell state and structured input alter later cellular output. First current-path Git fixation is June 10, 2022. Its ion, charge-transfer, and equation claims are inaccurate as written, and its internal date needs independent confirmation |
| [[gh-a0341z|a0341z]] | Internally dated September 20, 2012 precursor joining distributed temporospatial patterns to a proposed whole-cell potential difference; not yet PWD and still awaiting independent date confirmation |
| [[gh-a0338z|a0338z]] | Internally dated November 23, 2014 coincidence-to-propagated-phasic-update ancestor; fixed integration-window, gamma-only, and soliton details remain testable variables |
| [[gh-a0037z|a0037z]] | June 10, 2022 self-correction from fixed band assignments to relative tonic/phasic roles; its four-level synaptic shorthand is not adopted as a universal alphabet |
| [[gh-a0048z|a0048z]] | June 8 noise-label precursor and June 12 explicit EEG-averaging concern; routed to [[single-trial-residual-neural-information|single-trial residual analysis]] |
| [[gh-b0153y|b0153y]] | June 19, 2022 transformed-slice, not-holographic, and phase-difference information precursor |
| [[gh-b0131y|b0131y]] | June 21, 2022 tonic repetition, rare-deviation, context, and "five hmms and one hey" information example |
| [[gh-b0003y|b0003y]] | July 21 recording and July 24 public Git fixation: contextualized spikes, ongoing relations, receiver-dependent change, morphology, and multidimensional state; an immediate PWD precursor, not the first exact use of the term |
| [[gh-c0000x|c0000x]] | June 2022 precursor index for tonic/phasic activity, APD, inceptive fields, and the active canvas |
| [[gh-a0306z|a0306z]] | Redness, Standard A, Broccoli, dendritic detection, and the first tracked exact phrase "phase wave differential" on 2022-08-23 |
| [[gh-whitepaperdraft1|whitepaperdraft1]] and [[gh-whitepaperdraft2|whitepaperdraft2]] | Tonic canvas, phasic update, amplitude/duration wording, receptive/inceptive fields, and Metatron contrast |
| [[gh-a0287zstar|a0287zstar]] and [[gh-a0288zslow|a0288zslow]] | NAPOT 3 inhibitory and slow-potential branches |
| [[gh-a0310z|a0310z]] | NAPOT 5 cross-scale routing and Neural Tuning |
| [[gh-a0325znapot6|a0325zNAPOT6]] | Persistence, conscious dominance, action, and DPWDR |
| [[gh-napotconcepts|NAPOTConcepts]] | 2024 retrospective routing index; model-generated explanations require source checks |

The June sources anticipate the context-and-difference logic. They should not be relabeled as the
mature typed PWD operator before the wording actually appears in the source history.

The same boundary applies to `b0003y`: its phrase "phase changes, not spikes" is repaired as
**not spikes alone**. See [[contextualized-spike-receiver-relative-transformation]] for the
five-model comparison and perturbation test.

[[gh-a0193z|a0193z]] describes a maintained oscillatory group as context, a cell departing from
that context, the difference being registered, and gradual reintegration. [[gh-a0197z|a0197z]]
joins ionic readiness, threshold transition, propagated timing or frequency consequences, and a
learned group context. Together they supply a compact context -> departure -> propagated
consequence -> updated context precursor. They do not contain the mature typed operator, and the
one-global-oscillation, avalanche, and circuit-breaker language remains analogy.

## Waveform-sensitive output

`a0089z.md` strengthens the biological bridge: the waveform and duration of a presynaptic action
potential can affect calcium-current timing and transmitter release. For SAN, "magnitude" must
therefore name a measured quantity, such as waveform area, delivered charge, calcium-current
integral, release distribution, postsynaptic current, or downstream state change. It cannot mean
all of these at once, and the source does not establish one universal inverse law across spikes,
EEG, and spatial scales.

- [Chao and Yang (2019)](https://www.nature.com/articles/s41598-019-41120-5)

## Evidence boundary

Measured traveling waves, dendritic spikes, phase gradients, and selective prediction-error signals
provide candidate mechanisms. They do not make every wave semantic or prove PWDs sufficient for
consciousness. Structural gradients and delays can direct cortical waves in a human connectome
model, and unexpected stimuli can selectively amplify feature-specific V1 responses in mice:

- [Human connectome topology and traveling waves](https://www.nature.com/articles/s41467-024-47860-x)
- [Thalamocortical sensory prediction errors](https://www.nature.com/articles/s41586-024-07851-w)
- [Weineck, Garcia-Rosales, and Hechavarria, 2020](https://doi.org/10.1371/journal.pbio.3000658)
- [Garcia-Rosales et al., 2022](https://doi.org/10.1038/s41467-022-31230-6)

## Ensemble reset and the trajectory connection

[[gh-a0137z|a0137z]] proposes that local phasic and inhibited events can collectively move an
oscillating ensemble into a new phase relation. [[gh-a0149z|a0149z]] then treats successive phasic,
tonic, and inhibited states as a trajectory across a distributed neural graph. The constructive
claim is that a PWD belongs to an unfolding receiver-relative sequence, not that every frequency
change is meaningful or that one event is literally one polynomial term.

The formal and empirical boundary is developed in
[[neural-phase-trajectories-taylor-series-proposal|Neural Phase Trajectories and the Taylor-Series Proposal]].

## Prepared expectation and incoming difference

[[gh-a0551z|a0551z]] preserves a compact atom inside a mixed notebook: a tonic expectation prepares
a remembered object, while incoming phasic evidence can preserve or revise its details, including
color. This is an early prepared-state/incoming-difference problem, not yet the mature receiver-
relative PWD formalism.

## Read next

- [[early-a0531-a0561-obscure-argument-map|Early a0531-a0561 Obscure Argument Map]]
- [[multimodal-neuron-signal-correlate-channel|The Multimodal Neuron: Signal, Correlate, or Channel?]]
- [[expert-data-structures|Expert Data Structures]]
- [[early-a0180-a0197-obscure-argument-map|Early a0180-a0197 Obscure Argument Map]]
- [[tonic-context-rare-deviation-tomographic-language|Tonic Context, Rare Deviations, and Tomographic Language]]
- [[synaptic-unreliability-mvr-2021|Synaptic Unreliability, MVR, and the Ionotropic Information Channel]]
- [[receptive-inceptive-dendritic-projection|Receptive Fields, Inceptive Fields, and Dendritic Projection]]
- [[continuous-dynamics-discrete-neural-information|Continuous Dynamics and Discrete Neural Information]]
- [[neural-phase-trajectories-taylor-series-proposal|Neural Phase Trajectories and the Taylor-Series Proposal]]
- [[early-a0135-a0155-obscure-argument-map|Early a0135-a0155 Obscure Argument Map]]
- [[single-trial-residual-neural-information|The Residual Is Not Automatically Noise]]
- [[phase-wave-differential|Phase Wave Differential legacy page]]
- [[dominant-phase-wave-differential|Dominant Phase Wave Differential]]
- [[tonic-phasic-canvas-of-consciousness|Tonic-Phasic Canvas of Consciousness]]
- [[theory-of-redness|Theory of Redness]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli and Artificial Perception]]
- [[field-cell-self-bioelectric-information-entity|The Field-Cell Self]]
- [[neural-tuning|Neural Tuning]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[early-a0333-a0351-obscure-argument-map|Early a0333-a0351 Obscure Argument Map]]
- [[san-golden-corpus-map|SAN Golden Corpus Map]]
- [[infogenetics-content-addressed-neural-write-access|Infogenetics: Content-Addressed Neural Write Access]]
- [[early-a0040-a0069-obscure-argument-map|Early a0040-a0069 Obscure Argument Map]]
