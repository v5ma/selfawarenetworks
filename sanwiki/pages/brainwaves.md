---
title: "Brainwaves in SAN Source History: From Synchrony to Informative Difference"
tags: [san, brainwaves, genealogy, gamma, shannon-information, phase-wave-differential]
aliases: [Brainwaves, Brainwaves in SAN Source History]
summary: "The dated SAN development from EEG feedback and oscillatory coordination to the proposal that expected tonic synchrony supplies context while uncommon receiver-relative phase-wave differentials carry differentiated information."
status: governed
---

# Brainwaves in SAN Source History: From Synchrony to Informative Difference

> **Page role:** This is the historical and conceptual genealogy of brainwaves inside Self Aware
> Networks. For the scale-aware account of EEG, MEG, local field potentials, oscillations, phase,
> and source mixing, read [[brainwave|Brainwave: Common Term, Measured Signal, and SAN Translation]]
> and [[brain-rhythms|Brain Rhythms]].

> **Image status:** No medically accepted image is installed. A future-image description is
> maintained in the SAN medical-image prompt ledger; generation remains paused.

The SAN argument did not end with the claim that gamma synchrony accompanies consciousness. It
developed toward a more specific question:

> If many cells are already coordinated, what distinguishes one experienced or actionable change
> from the expected coordinated background?

The proposed SAN answer is an information-theoretic division of labor. An expected, repeated tonic
pattern provides a shared reference state. Excitation, inhibition, or another state change produces
an uncommon receiver-relative departure. When a tuned receiver detects that departure and it changes
later neural activity, the departure can function as an informative [[phase-wave-differential|phase-
wave differential]] (PWD).

```text
expected tonic coordination
-> uncommon excitation- or inhibition-driven departure
-> greater conditional Shannon surprisal
-> receiver-specific detection and transformation
-> distributed routing, rendering, memory, or action consequence
-> recurrence, dissipation, and an updated tonic context
```

This is the central source-recovered bridge. It does not say that every synchronized gamma event is
uninformative, every desynchronization is meaningful, or one scalp waveform is consciousness.

## Why gamma mattered

Gamma-consciousness research supplied an important starting problem. Crick and Koch proposed in
1990 that coherent semi-synchronous activity around 40-70 Hz could transiently bind neurons related
to an attended visual object and contribute to visual awareness
([Crick and Koch, 1990](https://digirepo.nlm.nih.gov/ext/document/101584582X469/PDF/101584582X469.pdf)).
Later experiments connected conscious perception with transient long-distance gamma synchrony
([Melloni et al., 2007](https://pmc.ncbi.nlm.nih.gov/articles/PMC6672558/)) and with theta-organized
gamma-synchronous assemblies
([Doesburg et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19582165/)). Gamma timing was also studied in
feature binding, attention, selective communication, memory, and plasticity
([Tallon-Baudry, 2009](https://pubmed.ncbi.nlm.nih.gov/19273069/)).

It is reasonable historical shorthand to say that gamma was investigated as a possible neural
correlate or mechanism of consciousness. Calling it the universal **seat of consciousness** is
stronger than much of that literature. Dissociation studies found gamma activity associated with
task relevance or post-perceptual processing rather than awareness itself
([Pitts et al., 2014](https://pubmed.ncbi.nlm.nih.gov/25063731/)), and gamma power could increase
without reported awareness in a masking experiment
([Aru and Bachmann, 2009](https://pubmed.ncbi.nlm.nih.gov/19071195/)).

These results do not make gamma irrelevant. They show why gamma presence, power, or synchrony alone
does not identify the differentiated content of a conscious state. Synchrony can explain a timing
relationship or communication opportunity without by itself specifying what changed, which receiver
interpreted the change, or what consequence followed.

## The Shannon turn

Claude Shannon's self-information assigns greater surprisal to an event that is less probable under
a declared probability model. For event `x_i`, receiver `r`, tonic baseline `p_0`, and context `C`:

```text
I_r(x_i | C) = -log2 p_0,r(x_i | C)                           [1]
```

Suppose `x_tonic` is a commonly repeated coordinated event and `x_pwd` is a less probable departure.
If:

```text
p_0,r(x_pwd | C) < p_0,r(x_tonic | C)
```

then:

```text
I_r(x_pwd | C) > I_r(x_tonic | C)                             [2]
```

Equation [2] captures the SAN intuition that a statistically uncommon phasic departure can be more
informative than the repeated tonic event from which it differs. It does not yet establish meaning.
A rare artifact or random spike can also have high surprisal. SAN therefore adds two requirements:

1. The receiver must be tuned to the relevant dimensions of the departure.
2. The departure must produce a reproducible causal consequence in the receiver or wider network.

Information theory was used in neuroscience long before SAN. SAN's proposed addition is the joined
operator that treats expected tonic coordination as the conditional reference distribution, a PWD
as a multidimensional departure, and neural tuning plus recurrent consequence as the bridge from
statistical difference to biological use.

## What counts as the departure

The mature PWD idea is not restricted to one phase angle or one EEG band. For a declared receiver,
the candidate event can include changes in timing, circular phase, frequency, amplitude, duration,
waveform, transmitted quantity, spatial position, and network state:

```text
PWD_r,i = X_r,i - E_0,r[X | C]                                [3]
```

Equation [3] is a typed comparison against an expected state, not literal subtraction of unlike
physical units. Every dimension must be defined and normalized before testing.

For inter-event intervals, coefficient of variation can measure one form of timing departure:

```text
CV_r = sigma(Delta_t_r) / mean(Delta_t_r)                     [4]
Delta_CV_r = CV_event,r - CV_tonic,r                          [5]
```

Ordinary CV is not a measure of circular phase, not a direct count of Shannon bits, and not the
whole PWD. The coefficient-of-variation language is a later SAN extension that helps make one part
of the proposal measurable.

## Synchrony and desynchronization are conditional roles

SAN does not reduce the mechanism to "synchrony good, desynchronization bad." A coordinated state
can provide common timing, recruitment, and a stable reference. A structured phase departure can
differentiate content, separate routes, mark a boundary, or change the next receiver state.

The same physical pattern can change roles with context:

| Pattern | Possible role under one baseline | Why the role is not universal |
|---|---|---|
| Repeated phase-locked gamma | Low-surprisal tonic reference | A rare gamma onset can be highly informative under a different baseline. |
| Excitation-driven phase advance or burst | Phasic PWD | It can also be irrelevant noise if the receiver is not tuned to it. |
| Inhibition-driven delay or omission | Phasic PWD | Absence is informative only relative to an expected event and a sensitive receiver. |
| Structured phase dispersion or splay | Differentiation or route separation | Random loss of coherence need not encode usable content. |
| Return toward the expected pattern | Dissipation or reset | It may instead erase an event before it has a measurable consequence. |

This conditional framing preserves the user's clarification: perfectly regular gamma coordination
can carry little new information when it is the expected background, while excitation- or
inhibition-driven departures can be more informative. It also prevents an overcorrection in which
all gamma is declared low-information or all decoherence is declared content.

## The dated SAN development

### 2012: closed-loop feedback ancestor

The internally dated May 18, 2012 Neo Mind Cycle source distinguishes machine-decoded commands from
a loop in which measured brain activity is transformed into audiovisual feedback and returned to
the participant. This establishes a practical receive-transform-return ancestor: the living network
can encounter a transformed consequence of its own measured state and alter later state.

The source was publicly fixed later in Git. It is not backdated as PWD, NAPOT, or the Shannon
tonic/phasic operator. See [[neo-mind-cycle|Neo Mind Cycle]] and
[[neo-mind-cycle-neurofeedback-bci-genealogy|Neo Mind Cycle Source Genealogy]].

### 2017-2020: distributed interface and action loop

The Neural Lace Podcast period broadened the feedback problem from EEG display toward bidirectional
brain-computer interfaces, spatial environments, artificial systems, embodiment, and action. This
stage supplies architectural ancestors for distributed reception, transformation, return, and
observer-action. It does not yet inherit the later PWD vocabulary.

See [[neural-lace-podcast-source-genealogy|Neural Lace Podcast Source Genealogy]].

### June-July 2022: oscillating groups and phase variance

The 2022 public Git corpus develops neural arrays and oscillating groups as distributed receivers and
transmitters. On July 31, `map.napot.md` explicitly says that experienced reality is rendered in
phase variances of brainwave activity while locating the observing process across neural arrays,
circuits, and oscillating cell groups. The wording first appears in public Git commit
[`f36a268`](https://github.com/v5ma/selfawarenetworks/blob/f36a26890aaac06fef614e94e37f31b7799e08c8/map.napot.md#L98).

The mature implication is distributed: no one waveform, neuron, cortical site, or hidden viewer
contains the completed percept.

### August 22, 2022: explicit common-versus-rare information asymmetry

`a0004z.md` states that high-phasic patterns are rare and therefore high in information, whereas
common tonic waves have very low information value. It then proposes that the high-information
pattern is gradually absorbed into tonic oscillation while potentially changing synaptic readiness.
The explicit wording is publicly fixed in commit
[`9911b61`](https://github.com/v5ma/selfawarenetworks/blob/9911b61b401aeb9aab74cd765a18e7b7019eff5e/a0004z.md#L24).

The source also uses compressed language such as brainwaves being "essentially not containing
information." Source-faithful recovery does not turn that into literal zero entropy. The medically
and mathematically defensible intended claim is comparative: a highly expected repeated event adds
less self-information than an uncommon departure under the same receiver-specific baseline.

### September-November 2022: PWD, rendering, and dissipation

The later 2022 NAPOT notes join excitation, inhibition, unusual timing, cellular reception,
distributed rendering, action, recurrence, and gradual dissipation. On November 28, `a0310z.md`
explicitly describes an unusual phase change as information in the information-theory sense and
relates irregular intervals to ongoing tonic cadence. The public fixation is
[`4e0cf1e`](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0310z.md#L126).

Some frequency-band, anatomy, magnitude, and cross-scale statements in these working notes require
scientific translation. Their intended operation is preserved rather than discarded.

### 2025: later synthesis and coefficient-of-variation extension

`08san.md` and `09san.md` later restate the claim that phase differences help constitute the
perceptual render. They are later syntheses, not the origin of the 2022 mechanism. On June 15, 2025,
`13san.md` explicitly describes locally differentiated timing using coefficient-of-variation
language. The wording is fixed in commit
[`5a59de9`](https://github.com/v5ma/selfawarenetworks/blob/5a59de90de6554cb35a253af68a7ba9cd6927705/13san.md#L16).

## What the earlier generated page got wrong

The previous Lane C draft combined many valid source fragments but flattened their dates, scales,
and evidence states. It presented brainwaves as one macroscopic electromagnetic carrier, connected
that carrier directly from microtubules to qualia, assigned fixed frequency bands to anatomy, and
treated later generated synthesis as if it were one established biological mechanism.

The recovered history supports a narrower and more interesting argument:

- Measured neural rhythms are physical, multiscale, and method-dependent.
- Gamma synchrony is an important empirical candidate for coordination, not a unique proof or seat
  of consciousness.
- Expected coordination can function as a tonic reference rather than the entire message.
- Excitation and inhibition can both produce uncommon timing or state departures.
- Shannon surprisal quantifies rarity under a declared receiver-specific baseline.
- PWD names SAN's proposed multidimensional, receiver-relative biological update.
- Meaning requires tuning, organization, and consequence; rarity alone is insufficient.
- The stronger claim that distributed phase and field-cell differences constitute qualia remains an
  open SAN identity hypothesis.

## Claim ladder

| Claim | Status |
|---|---|
| Neural populations exhibit rhythmic, transient, traveling, synchronous, and asynchronous activity. | Established broadly, with scale- and method-specific constraints. |
| Gamma coordination has been associated with binding, attention, communication, memory, and some conscious-perception contrasts. | Supported in bounded paradigms. |
| Gamma power or synchrony is a universal and sufficient marker of consciousness. | Not supported. |
| Lower-probability events have greater Shannon self-information under the same declared baseline. | Mathematically established. |
| Expected coordination can be modeled as low-surprisal context and uncommon departures as higher-surprisal events. | Valid conditional information-theory formulation. |
| Tuned neural receivers use multidimensional PWDs to differentiate rendered content and organize consequence. | Open, testable SAN hypothesis. |
| Distributed field-cell phase differences constitute phenomenological experience. | Stronger unresolved SAN identity hypothesis. |

## Discriminating tests

1. Estimate receiver-, task-, and state-specific baseline probabilities before labeling tonic and
   phasic events.
2. Compare PWD predictions against gamma power, phase alone, spike rate, prediction error, ordinary
   CV, burst measures, and aperiodic spectral parameters.
3. Match event rarity while scrambling spatial phase or pathway identity to separate surprisal from
   biologically usable information.
4. Perturb excitation and inhibition separately and test predicted advances, delays, omissions,
   receiver-state changes, and behavioral consequences.
5. Test rare synchronization onsets and rare losses of synchrony under matched probability and
   signal quality; SAN does not predict that only one direction can be informative.
6. Follow effective departures through recurrence, dissipation, action, and later plasticity rather
   than inferring memory from a transient correlation.
7. Record across cellular, local-field, intracranial, and noninvasive scales where feasible; model
   the transformations rather than calling all signals one brainwave.

## Source custody

- `map.napot.md` SHA-256: `B78B8B786D15E597128E0F11422BEE85D64ECB31CB197AA23F25B508E6C30702`
- `a0004z.md` SHA-256: `D402B3B33D0B1D067FF2B18398E8E4F808E32EE333D6BF66CB4F061EB72CAB44`
- `a0296zWhisker.md` SHA-256: `A5C5DEF19182FE925CF50290885E8744BBBCEE5D9C1EAC053D75C6FDCB10C341`
- `a0310z.md` SHA-256: `D99CC6444619B7FCD69AC2A293FE6864BA7F0CB79C3EC5BC5F93092C05B0A477`
- `13san.md` SHA-256: `D5F54BB81D9F6ABDADE7078D3C1A165D85FB8A1B3742E523A271861F7FD69A6F`

Internal source dates, public Git fixation dates, and later synthesis dates remain distinct.
`genealogydata.txt` was used only to route source checks; it is not treated as independent evidence.

## Read next

- [[brainwave|Brainwave: Common Term, Measured Signal, and SAN Translation]]
- [[brain-rhythms|Brain Rhythms: Measurement, Coordination, and the SAN Hypotheses]]
- [[brain-rhythms-in-cognition|Brain Rhythms in Cognition]]
- [[gamma-oscillation|Gamma Oscillation]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[phase-wave-differential|Phase-Wave Differential]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[coherence-dispersion-sculpting-hypothesis|Coherence-Dispersion Sculpting Hypothesis]]
- [[entification-observer-problem|Entification and the Distributed Observer]]
- [[neo-mind-cycle|Neo Mind Cycle]]
- [[neural-lace-podcast-source-genealogy|Neural Lace Podcast Source Genealogy]]
