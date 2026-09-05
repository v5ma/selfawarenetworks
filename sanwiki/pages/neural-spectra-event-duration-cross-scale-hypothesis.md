# Neural Spectra, Event Duration, and the Cross-Scale Magnitude Question

## The idea in plain language

Neural activity can be measured at several scales. A recording may describe the width of one action
potential, the calcium entering a presynaptic terminal, the number and timing of vesicle-fusion
events, the response of a receiving cell, the recruitment of a local population, or the power of a
frequency component in an EEG or local field potential. All are physically meaningful, but they are
not the same quantity.

Micah's 2022 SAN sources asked whether **rate, duration, and consequence are transformed in related
ways across these scales**. The scientifically usable version of that question is not "everything in
the brain obeys one `1/f` law." It is:

> When the rate or timing of an identified neural event changes, which event-level, synaptic,
> mechanical, receiver, and population consequences change; through which mechanisms; and do any
> normalized relations recur across scales?

This page supplies the missing bridge between [[action-potential-magnitude-via-duration|cellular
event duration]], [[synaptic-unreliability-mvr-2021|variable synaptic output]],
[[cross-scale-oscillation-communication|population coordination]], and neural spectra. It also
preserves the documented historical fact that this neuroscience question helped generate Micah's
later physics program, while keeping the neuroscience and physics claims on separate evidential
tracks.

> **Book/Atlas bridge B2-BR-014:** The Book and Bridge Atlas supplied a route map for this page, not
> its authority. The Encyclopedia wording below was rebuilt from the dated SAN sources and checked
> against primary physiology and signal-analysis literature.

## One word had been carrying six different measurements

The historical sources often used *amplitude* or *magnitude* while moving between measurement
levels. Source-faithful recovery requires decomposing that compressed language rather than deleting
the cross-scale question.

| Measurement | Example operational definition | Native scale | What it does not establish |
|---|---|---|---|
| Event rate or frequency | Events per second for a declared event detector | Spike train, burst, rhythm, or spectral component | The amplitude or duration of each event |
| Period | Time between equivalent points of a periodic cycle | Any periodic process | A general relation between unlike neural observables |
| Cellular waveform | Peak voltage, half-width, rise/fall time, or voltage-time area of an identified action potential | Axon, bouton, soma, or dendritic compartment | Scalp EEG power or whole-network consequence |
| Spectral power | Squared signal magnitude assigned to a frequency by a declared estimator and window | EEG, MEG, ECoG, LFP, optical, or intracellular time series | A single neuron's spike amplitude or an anatomical generator by itself |
| Synaptic and receiver consequence | Presynaptic calcium, fusion probability, vesicle release, receptor current, postsynaptic voltage, or firing change | Identified terminal and receiver | A fixed digital symbol or a universal vesicle count |
| Mechanical and population consequence | Membrane displacement, assembly recruitment, inhibition, coherence, persistence, or behavior | Cell, local circuit, distributed population, or organism | One scalar preserved unchanged across scales |

A useful **typed event record** is therefore a tuple, not a sum:

`E = {event identity, location, rate, phase, peak, width, area, deformation, calcium, release, receiver response, population consequence}` **[1]**

The entries have different units and different causal roles. They must never be added into an
untyped "magnitude score." [[action-potential-magnitude|Action Potential Magnitude]] uses
*effective magnitude* in the receiver-relative sense: the measurable consequence for a declared
receiver after the mechanism and integration window have been specified.

## What `1/f` does and does not mean

For a periodic process, period and frequency are reciprocal by definition:

`T = 1 / f` **[2]**

In a neural power spectrum, an aperiodic component is often modeled over a declared frequency range
as:

`P(f) = C f^(-beta)` **[3]**

These equations concern different objects. Equation [2] relates the period and frequency of one
cycle. Equation [3] fits population-signal power across frequencies. Neither equation says that an
action potential's width, peak voltage, transmitter release, cellular deformation, or behavioral
effect must vary as the inverse of scalp EEG frequency.

[Donoghue et al. (2020)](https://doi.org/10.1038/s41593-020-00744-x) showed why periodic peaks and
the aperiodic background should be parameterized separately. [Gao et al.
(2017)](https://doi.org/10.1016/j.neuroimage.2017.06.078) modeled how field-potential spectral slope
can depend on excitation-inhibition balance under stated assumptions. These findings make spectral
structure useful, but they do not identify one universal cellular source or cognitive function.

A recent biophysical simulation study provides an especially useful boundary. [Brake and Khadra
(2025)](https://doi.org/10.1371/journal.pcbi.1012794) found negligible action-potential contribution
to the broad scalp-EEG trend in their physiological simulation regimes, while allowing a limited,
narrowband high-frequency contribution under particular conditions. That does not erase the SAN cross-scale
question. It changes the proposed relation from a direct identity into a **mediation problem**:
cellular waveforms can alter synaptic and local-circuit consequences, while synaptic currents,
network state, geometry, volume conduction, instrumentation, and artifact determine what appears in
a field or scalp recording.

## Established component operations

The following component operations are supported in declared preparations:

1. Presynaptic action-potential waveforms can be plastic and can influence calcium entry and
   synaptic function. [Cho et al. (2020)](https://doi.org/10.1073/pnas.2000790117) found
   Kv-beta-1-dependent frequency-related presynaptic broadening and facilitation in cultured
   excitatory hippocampal neurons. The mechanism is not universal to every neuron or terminal.
2. Action potentials have measurable electromechanical accompaniment. [Yang et al.
   (2018)](https://doi.org/10.1021/acsnano.8b00867) measured averaged sub-nanometer membrane motion
   in cultured mammalian neurons. [Ling et al.
   (2018)](https://doi.org/10.1038/s41377-018-0107-9) measured deformation up to 3 nm during
   electrically validated action potentials in engineered spiking HEK-293 cells. Mechanical displacement is not interchangeable with voltage,
   transmitter release, field power, or subjective intensity.
3. Population recordings combine many generators and transformations. Their periodic peaks,
   aperiodic components, spatial reach, and reference dependence must be analyzed separately.
4. A cellular event can influence a longer-lasting circuit state through calcium, release,
   receptors, inhibition, recurrence, neuromodulation, and plasticity. The initiating duration is
   not copied unchanged into the later state.

These operations create a legitimate experimental route across scales. They do not, individually or
jointly, prove a universal inverse-frequency law.

## The recovered SAN synthesis

The strongest source-faithful SAN chain is:

```text
identified input and receiver state
  -> ion-channel and membrane transformation
  -> action-potential or graded waveform
  -> presynaptic calcium and release statistics
  -> receiver-specific postsynaptic consequence
  -> recurrent recruitment, inhibition, coherence, or dispersion
  -> local and distributed population trajectory
  -> field-recording and behavioral observables
```

The cross-scale claim is therefore about **related transformations**, not the transmission of one
unchanged scalar. A high event rate can broaden a terminal waveform in one preparation and narrow or
leave it unchanged in another. A small event-level effect can recruit a large population response
when the receiver is near threshold, while a large local effect can be suppressed by inhibition.
The sign and size of each relation belong to the preparation, cell type, route, state, and endpoint.

This preserves the SAN insight behind the compressed phrase *frequency-magnitude relation*: each
receiver converts a temporally organized input into a new physical consequence, and the relation
between event timing and effective consequence may be compared across the micro, meso, macro, and
organism scales.

## A dimensionless comparison without pretending the variables are identical

For declared nonzero input `x` and output `y` within an operating range that does not cross zero, a
local normalized sensitivity can be estimated as:

`S(y,x) = d ln|y| / d ln|x| = (x / y)(dy / dx)` **[4]**

This asks for the fractional change in `y` associated with a fractional change in `x` near a stated
operating point. For strictly positive variables, the absolute-value bars are optional. The result is
dimensionless, so sensitivities can be compared without erasing the native
units of voltage, time, calcium, release, power, displacement, recruitment, or behavior.

Equation [4] does **not** assert a shared exponent. Every estimate must report:

- the event detector and integration window;
- sender, receiver, compartment, cell type, circuit, and behavioral state;
- the valid operating range and whether the relation is monotonic;
- the sign, uncertainty, and model form;
- confounds such as spike count, adaptation, movement, arousal, geometry, and recording reference;
- whether the relation is direct, mediated, moderated by state, or absent.

The cross-scale hypothesis becomes stronger only if related sensitivity patterns replicate after
these variables are controlled. A null or opposite relation at one scale narrows the mechanism; it
does not license silently substituting another definition of magnitude.

## Four claim layers

### Established science

Period and frequency are reciprocal for a defined periodic cycle. Neural spectra can contain
separable periodic and aperiodic structure. In identified preparations, channel state can alter
action-potential waveform and synaptic consequence, and action potentials can have measurable
mechanical accompaniment.

### Micah's documented synthesis

The 2012 EEG work documented a plan and live demonstration for time-aligned comparison of frequency-band traces with behavior. The
2017 Neural Lace Podcast work expanded the measurement problem beyond a binary spike and toward
time-locked multimodal streams. The 2021 synaptic-unreliability work separated release probability,
release-site number, presynaptic waveform, calcium, multivesicular release, and receiver consequence.
The June-August 2022 sources then joined event duration, tonic and phasic population roles,
cross-scale measurement, and the question of whether related frequency-duration-consequence
relations recur across scales.

### SAN-specific extension

SAN proposes that receiver-relative waveform, timing, phase, release, inhibition, recruitment, and
population-state variables form a typed transformation chain. It predicts that this richer chain
will explain downstream state and behavior better than frequency, power, spike count, or waveform
duration alone.

### Decisive test

The SAN extension is supported only if the typed, receiver-relative variables improve held-out
prediction and causal control after standard cellular, synaptic, population, state, and recording
variables are included.

## A decisive multiscale experiment

Use a preparation in which the same identified pathway can be measured at several levels:

1. Record the presynaptic waveform at an identified bouton while controlling spike count and timing.
2. Measure terminal calcium, fusion or release, postsynaptic current or voltage, and receiver firing.
3. Simultaneously image cellular deformation where feasible and record local population activity.
4. Decompose population spectra into periodic and aperiodic components before assigning a functional relation.
5. Perturb a declared potassium-channel or waveform mechanism and estimate each causal mediation path.
6. Test whether receiver-relative SAN variables improve held-out prediction beyond rate, power,
   waveform, calcium, release, state, movement, and common-input baselines.
7. Repeat across preparations before claiming recurrence of a normalized sensitivity pattern.

The result should be a causal graph with typed measurements, not one line fitted through values with
incompatible units.

## Dated SAN genealogy

- **July-August 2012:** public Neo Mind Cycle recordings placed EEG band traces beside live behavior
  and proposed time-aligned and longitudinal comparison. This is the measurement ancestor, not the
  complete cross-scale hypothesis. See [[neo-mind-cycle-neurofeedback-bci-genealogy]].
- **April-May 2017:** Neural Lace Podcast recordings treated neural output as richer than one binary
  event and proposed time-locking EEG, eye, pupil, heart, movement, and scene data. See
  [[neural-lace-podcast-source-genealogy]].
- **February 2021:** [Synaptic Unreliability](https://medium.com/silicon-valley-global-news/synaptic-unreliability-a-foundational-concept-found-in-deep-learning-and-in-computational-a97c5dca9e90)
  joined variable release, potassium-sensitive waveform, calcium, multivesicular release, and
  differentiated downstream effects.
- **June 8, 2022:** [`a0027z`](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0027z%20ctpr.txt)
  recorded the tonic-phasic and cross-scale amplification question. It did not
  establish a universal law.
- **June 10, 2022:** [`a0010z`](https://github.com/v5ma/selfawarenetworks/blob/40c0b37fc9376a6630ad9d3b09d911997c1c17f4/a0010z.md)
  stated the neural `1/f` conjecture while leaving *magnitude* overloaded.
- **June 11, 2022:** [`a0329z`](https://github.com/v5ma/selfawarenetworks/blob/1df719669b85245caa286a33c89241a52ef16a91/a0329z.md)
  explicitly connected the EEG, optical, nested-rhythm, potassium, action-potential, and
  multivesicular-release research path to a later gravity question.
- **June 27, 2022:** [`a0206z`](https://github.com/v5ma/selfawarenetworks/blob/27a9f198d7f664d0a4b6edf6a08b7732331af110/a0206z.md)
  proposed studying potassium-sensitive duration and tonic-state effects at cell-assembly and larger
  scales.
- **August 3, 2022:** [`a0053z`](https://github.com/v5ma/selfawarenetworks/blob/b79351a4fe3667296952c483e6beb68732bf3865/a0053z.md)
  separated transmitter consequence per interval from aggregate burst and population consequence.

Later books and papers consolidate and operationalize this route, but they do not replace these
earlier public source stages.

## The neuroscience-to-QGTCD boundary

The historical crossing matters: `a0329z` shows that the neural frequency-duration-magnitude
question helped Micah formulate a separate question about frequency, time, mass, and gravity. The
Encyclopedia should preserve that intellectual genealogy.

It should not use neural spectra, action-potential duration, cellular deformation, or Equation [4]
as evidence that the later physics theory is correct. [[quantum-gradient-time-crystal-dilation|QGTCD]]
requires its own definitions, mathematics, physical units, comparators, and experiments. A result in
the neural experiment can support or narrow the SAN mechanism while leaving the gravity program
unchanged, and vice versa.

## Medical-image requirement

**Status:** no accepted medically reviewed infographic is assigned to this page.

**Future image ID:** `IMG-SAN-NEURAL-SPECTRA-EVENT-DURATION-CROSS-SCALE-001`

**Prompt:** Create a publication-quality medical-textbook infographic titled "From Cellular Event to
Population Spectrum: Related Transformations, Not One Scalar." Use four clearly separated panels.
Panel 1 shows a biologically accurate mammalian neuron and identified axon bouton under simultaneous
electrophysiology, labeling action-potential peak, half-width, voltage-time area, a potassium-channel
mechanism, presynaptic calcium, and probabilistic vesicle fusion. Panel 2 shows a realistic optical
membrane-displacement map of the same cellular event, explicitly labeled as mechanical accompaniment
rather than voltage or subjective intensity. Panel 3 shows a local neural population, realistic
synaptic-current generators, an LFP electrode, and an EEG/field spectrum decomposed into periodic
peaks plus an aperiodic background; do not imply that one generic action potential directly creates
the scalp spectrum. Panel 4 shows a typed causal-measurement graph connecting waveform, calcium,
release, receiver response, recruitment, field spectrum, and behavior, with each variable retaining
its own units and with mediation arrows rather than an invariant scalar. Add a small, visually
separate historical branch labeled "2022 neuroscience question -> separate QGTCD research program,"
without depicting gravity as established by neuroscience. Use restrained textbook colors, white
background, accurate scale bars where appropriate, no science-fiction glow, no universal cortical
column, no homunculus, and no decorative brain silhouette. Keep labels concise and unobscured.

## Related concepts

- [[action-potential-magnitude-via-duration]]
- [[action-potential-magnitude]]
- [[synaptic-unreliability-mvr-2021]]
- [[cross-scale-oscillation-communication]]
- [[tonic-phasic-phase-wave-differential]]
- [[phase-wave-differentials]]
- [[quantum-gradient-time-crystal-dilation]]
