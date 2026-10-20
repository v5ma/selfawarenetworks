---
title: "Action Potential Duration"
tags: [san, action-potential-duration, waveform, potassium, sensory-transformation]
aliases: [APD]
summary: "How learned receiving state, potassium-sensitive spike duration and local output contribute to SAN's proposed sensory rendering, with actual transmission routes and decisive tests kept distinct."
status: governed
---

# Action Potential Duration

**Action-potential duration (APD)** is a declared measure of a spike's width at a stated
cellular compartment. Half-width, width at a selected voltage and repolarization time are
different measures of duration. Afterpotential duration and waveform area describe other
properties; they are not interchangeable with spike width.

In SAN, APD matters because crossing a firing threshold does not exhaust what a cell passes
on. Its receiving history and channel state can change the electrical event, its output and
what the next receiver can do. Micah proposes that these repeated transformations contribute
to the spatial and temporal rendering of sensory experience, not merely to a count of spikes.

> **Evidence and proposal:** Presynaptic waveform effects on calcium entry and transmission
> are established in specified preparations. SAN joins such operations into a receiver-relative,
> learned and recurrent account of sensory rendering. Those component experiments do not by
> themselves establish the complete constitutive account, a universal APD code or a fixed
> vesicle-count alphabet.

![Potassium-channel state shapes repolarization and action-potential duration; terminal waveform can alter calcium entry and transmitter release. The lower band identifies SAN's proposed sensory-input-to-receiver interpretation.](../assets/generated/san/action-potential-duration/potassium-apd-synaptic-transformation-20260926-v4.png)

> **Figure scope:** This is a bounded schematic of a neuronal membrane and a conventional
> chemical synapse, not anatomical scale or experimental voltage recordings. The curves compare
> width, not measured amplitudes or release amounts. Potassium efflux, calcium influx and
> vesicle fusion are distinct events. The dashed lower path identifies SAN's proposed
> interpretation. This is not the ATP-output anatomy of a type-II taste cell.

The explicit potassium-to-APD proposal appears in Micah's [[gh-a0089z|variable-waveform note]]
and [[gh-a0272z|Taste and Hearing]]. [[gh-a0053z|The Phasic Tonic Relationship]] develops the
related burst, release, inhibition and spatial-spread argument; it is not the source of every
presynaptic potassium/repolarization step. In the full account, sensory reception and cellular
history change current balance and output form, and later cells transform those events into
further spatial and temporal patterns. Reducing that account to potassium changing the time
of the next spike removes its proposed waveform-to-output transformation.

Experimental anchors include [[potassium-channel-modulation|Kv1-dependent cortical axon control]]
([Foust et al., 2011](https://doi.org/10.1523/JNEUROSCI.2752-11.2011)), local Kv3-dependent
spike-width variation in cerebellar stellate-cell boutons
([Rowan et al., 2016](https://doi.org/10.1016/j.neuron.2016.05.035)), and calcium-dependent
synaptic consequences of presynaptic voltage state
([Shu et al., 2006](https://doi.org/10.1038/nature04720)). They support named parts of the
pathway, not one experiment spanning sensory reception to conscious experience.

## Keep the durations and compartments separate

1. **Spike duration:** a width measure of one voltage waveform at a named soma, initial segment,
   axon or bouton.
2. **Burst duration:** the interval occupied by several spikes, distinct from each spike's width.
3. **Synaptic-current or postsynaptic-potential duration:** a receiver-side consequence affected
   by transmitter, clearance, receptors, dendritic filtering and inhibition.
4. **Population-event duration:** the persistence of a local or distributed activity pattern.
5. **Behavioral or perceptual duration:** a downstream organism-level measurement.

A longer event at one level does not automatically produce an equally long event at another.
A dendritic calcium spike or plateau is also not the same event as a fast axonal spike. In a
layer-5 pyramidal-cell compartmental model, changing dendritic input and conductance changed
calcium-plateau duration and somatic output, with effects depending on timing and sign
([Dudai et al., 2022](https://doi.org/10.1523/JNEUROSCI.1470-21.2021)). That is a modeling result
about a distinct dendritic event, not a measurement of bouton APD.

## Established waveform physiology

An action potential is shaped by the conductances active in the particular cell and
compartment, including sodium and potassium currents. In cortical pyramidal neurons,
the [[receptive-inceptive-dendritic-projection|axon initial segment]] is a principal initiation
site ([Kole et al., 2008](https://doi.org/10.1038/nn2040)). Dendritic reception, axonal spike
initiation, propagation and local terminal transformation are separate stages. The waveform
can differ between soma, branches and boutons; a somatic recording is not automatically a
recording of the event at a distant synapse.

The regenerative spike can retain graded influences:

- Naturalistic conductance stimulation of rat visual-cortical pyramidal neurons produced
  somatic waveform variation informative about preceding input history over roughly 50 ms
  ([de Polavieja et al., 2005](https://doi.org/10.1523/JNEUROSCI.0242-05.2005)). This was somatic
  waveform information, not an end-to-end measurement of release or perception.
- Modest presynaptic somatic-voltage changes altered axonal spike amplitude and duration and
  the average postsynaptic response through a calcium-dependent mechanism
  ([Shu et al., 2006](https://doi.org/10.1038/nature04720)). The synapse transformed the source
  state into a changed receiving event; calcium mediation did not prevent that transmission.
- Kv1 channels and somatic voltage controlled repolarization in tested cortical axon
  collaterals and boutons ([Foust et al., 2011](https://doi.org/10.1523/JNEUROSCI.2752-11.2011)).
- Small cultured CNS terminals adjusted spike peak and width with calcium-channel abundance
  and release conditions; cultured excitatory hippocampal neurons also showed Kvbeta1-dependent spike
  broadening and facilitation ([Hoppa et al., 2014](https://doi.org/10.1016/j.neuron.2014.09.038);
  [Cho et al., 2020](https://doi.org/10.1073/pnas.2000790117)).

Waveform variation is preparation-specific. In cultured rat hippocampal axons, distal
potassium-channel-dependent sharpening helped preserve waveform fidelity
([Gonzalez Sabater et al., 2021](https://doi.org/10.1523/JNEUROSCI.2765-20.2021)). Whether the
waveform changes, broadens, narrows or remains stable must be determined at the relevant
cell, compartment, firing pattern and condition. Fidelity and modulation are different
possible operating conditions, not reasons to discard the state-to-output question.

## Duration is one coordinate of terminal output

At a conventional chemical synapse, terminal voltage affects calcium-channel activation
and the driving force for calcium entry. Equal APD need not imply equal calcium entry.
AP-like stimuli matched for amplitude, duration and area but differing in rise and decay
kinetics produced different calcium-channel responses
([Scarnati et al., 2020](https://doi.org/10.3389/fnsyn.2020.00017)).

A useful waveform-and-state record can name **compartment, peak voltage, declared width,
rise kinetics, repolarization slope, afterpotential, burst position, preceding activity,
temperature, modulation and terminal identity**. It is not a universal list of independent
coordinates: width and other descriptors are derived from the recorded waveform, while
history and terminal condition describe the circumstances in which it arrives.

The conventional vesicular pathway is conditional:

**membrane and channel state -> local terminal waveform -> calcium-channel activation and
driving force -> local calcium at release machinery -> fusion probability and realized release
-> transmitter event -> receiver response**

## Conditional release, not a fixed vesicle alphabet

Release depends on more than spike width: release-ready vesicles; calcium-channel number,
kinetics and location; channel-to-sensor coupling; calcium conditions; active-zone state;
recent activity; and the receiving target. Stochastic fusion, transmitter clearance and
receptor response further shape the realized receiving event.

A spike can produce failure, univesicular or multivesicular release under different
conditions. At studied Schaffer collateral boutons, low vesicular release probability
favored single-vesicle events, while increased calcium favored multivesicular release
([Durst et al., 2022](https://doi.org/10.1038/s41467-022-33565-6)). These are conditional
distributions, not a fixed number selected by APD alone.

The postsynaptic cell encounters a transformed chemical event, not an unmodified presynaptic
voltage trace. Its receptors, dendritic location, inhibitory context and current state
transform that event again. A receiver can use information passed through a transformation
without recovering the original APD uniquely; an inverse decoder of presynaptic width is a
stronger, separate hypothesis.

## The full SAN operation

Micah's proposal connects **input pattern and prior history -> selective reception by
receptors and learned cellular structure -> intracellular and membrane-state transformation
-> waveform or other local output -> the actual transmission route -> another stateful
receiver -> distributed spatial and temporal pattern -> experienced sensory rendering,
consideration and action -> returned evidence and subsequent update**.

This is more than the statement that potassium channels affect spikes. In the
[[gh-a0272z|taste source]], receptor/protein morphology selects chemical patterns and cellular
reactions; in [[gh-a0007z|the longer transmission discussion]], learned receiving structures
select patterns and pass transformed events to other arrays. The [[gh-a0149z|phase-sequence note]]
proposes that active, tonic and inhibited events participate in the unfolding geometry
of learned visual contours and other sensory qualities. A cell's shape is not literally
sent across a synaptic cleft: learned structure constrains what the cell receives and
re-expresses as an output pattern.

In SAN's constitutive proposal, these ongoing receiver-relative transformations are proposed
to participate in the physical rendering of experience itself, rather than merely label a
percept completed elsewhere. Recurrent activity sustains and changes the rendering. APD is
one possible coordinate in that joined process, not a sufficient percept, a miniature
observer or the sole variable needed to reconstruct a world.

## Different sensory surfaces, actual output routes

**Umami.** In a type-II taste-cell route, intracellular signaling, the electrical waveform
and ATP-channel output must be distinguished. Mouse type-II cells showed temperature-sensitive
spike properties and conductances under current injection
([Ma, Paudel and Foskett, 2023](https://pubmed.ncbi.nlm.nih.gov/37273235/)); the fast CALHM1/3
channel complex supplies a voltage-dependent ATP-output route
([Ma et al., 2018](https://doi.org/10.1016/j.neuron.2018.03.043)). This is not the calcium-triggered
vesicle fusion shown in the figure. Together they motivate testing duration-to-ATP-to-afferent
consequences, not claiming that these separate studies already measured the complete chain.
See [[umami-multi-receptor-coincidence-detection]].

**Whisker touch.** Micah connects sensory perturbations, tonic receiving state, coincidence
and the rendered tactile difference. Dual recordings in mouse layer-2/3 barrel cortex showed
lower membrane-potential correlation during active whisking than quiet wakefulness
([Poulet and Petersen, 2008](https://doi.org/10.1038/nature07150)). That network-state result
helps specify a condition of reception; it did not measure a novelty-to-APD-to-percept chain.

**Mechanoreception.** The force-sensitive receiving apparatus is upstream of the waveform
question. The TMC/ankyrin study invoked in the later notes examined a mechanotransduction
complex in *C. elegans*, not a demonstrated potassium/APD cascade in human skin
([Tang et al., 2020](https://doi.org/10.1016/j.neuron.2020.03.026)). SAN's proposed continuation
is to identify how that reception changes the relevant cell's electrical state and later output,
using the actual receptor, cell type and pathway rather than assigning one mechanism to all touch.

**Hearing.** The cited cAMP/gating-spring experiment concerned rat outer-hair-cell mechanical
transduction ([Mecca et al., 2022](https://doi.org/10.1073/pnas.2107567119)), not a measured
APD cascade at every stage. Preserve the source's reception-to-state-to-output question while
identifying which auditory stage has a graded potential and which generates spikes.
See [[auditory-gating-spring-camp]].

## Source-faithful SAN genealogy

These dates identify preserved repository snapshots, not proof of first composition or of
public availability on those dates. The bodies contain questions, analogies, quotations and
later discussion as well as Micah's proposals; do not backdate later language or attribute
every quoted speaker to him.

| Dated repository snapshot | Recovered operation | Measurement and interpretation |
|---|---|---|
| [June 10, 2022: variable-waveform proposal](https://github.com/v5ma/selfawarenetworks/blob/0c72be5b8ac5ec25268a57d4c51cb17a544293a7/a0089z.md) | The source proposes an inverse duration/frequency relation to explain changing transmission magnitude under constrained spike amplitude, with excitation/inhibition and convergent/divergent arrays across scales. | It includes the stronger speculative assertion that duration must change with frequency, as well as the statement that amplitude is not always inverse to frequency. Preserve that conjectured relation and its surrounding questions; the physics analogy does not establish a universal cellular law. |
| [July 7, 2022: phase sequences and learned geometry](https://github.com/v5ma/selfawarenetworks/blob/738abec60a19d3c438ee04d6d6f01c1b110fd981/a0149z.md) | Phasic, tonic and inhibited sequences are proposed to form spatial-temporal coincidence patterns, learned visual contours and other sensory shapes received by later dendritic fields. | The Taylor-series analogy expresses unfolding geometric reconstruction; it is not a demonstrated polynomial implementation. The same source also asks about cellular duration/frequency and population amplitude/frequency. |
| [July 17, 2022: cross-scale magnitude and rendering](https://github.com/v5ma/selfawarenetworks/blob/0a364019d194e0d25795d28fe1ff5a41df28145f/a0115z.md) | The exchange asks whether duration can contribute to transmission magnitude; the surrounding proposal connects phase coincidences, neural arrays and phenomenological rendering. | EEG 1/f is a population spectral relation, not a measured universal APD law or complete reconstruction of synaptic structure. Keep the question and the broader rendering proposal distinct from established component physiology. |
| [August 3, 2022: Action Potential Magnitude Effect](https://github.com/v5ma/selfawarenetworks/blob/b79351a4fe3667296952c483e6beb68732bf3865/a0053z.md) | The source explores phasic bursts, calcium/release consequences, inhibitory effects, spatial distribution and dissipation relative to a tonic background. | Its burst language must not silently become single-spike APD. The illustrative vesicle numbers and excitation/inhibition consequences require the named transmitter, receiver and state; more release is not automatically more excitation. |
| [August 10, 2022: sensory reception and history](https://github.com/v5ma/selfawarenetworks/blob/75b194fb97d2da09fb8bdd4130be98b910a72adb/a0272z.md) | Protein/receptor selection, intracellular signaling, potassium/calcium modulation and potentially target-specific outputs feed an oscillating sensory-rendering network. | Identify the actual taste or auditory handoff. Type-II ATP-channel output is not conventional neuronal vesicle release; the joined role in sensory quality remains the SAN proposal. |
| [September 8, 2022: receive, integrate and project](https://github.com/v5ma/selfawarenetworks/blob/26dddd6ff9be0e9460686611f7622cb7873d011a/a0007z.md) | Learned receptive structure and recurrent state shape cellular output, terminal transformation, subsequent receiver timing and the ongoing rendering of sensory qualities. The source conjectures an APD-dependent 0/1/2/3-vesicle pattern and asks how such interactions could be validated. | Retain both the speculative count assertion and the later research questions, not just one. Basal/apical reception and axonal output differ; selected 20/40/60/80-Hz modeling examples and conjectured counts are not measured universal biological alphabets. |
| [November 28, 2022: whisker-state application](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0296zWhisker.md) | Sensory perturbations of tonic state, coincidence and subsequent arrays are proposed to render tactile difference and update later reception. | The cited whisking experiment measured network-state changes, not whisker novelty broadening a terminal spike. |
| [January 4, 2024: mechanoreceptor-duration prediction](https://github.com/v5ma/selfawarenetworks/blob/bf6e02b538ad8c24460fbf63bbd380a4f9ef5eb3/a0011z.md) | Force/receptor arrangement and prior state motivate a prediction about electrical duration and subsequent transmission, within a cellular-computation extension. | TMC/ankyrin mechanotransduction is not itself potassium-channel evidence. Inherited historical headings do not date every later paragraph; identify the proposed receptor-to-waveform arrow in its own preparation. |
| [June 16, 2025: variability and recursive updating](https://github.com/v5ma/selfawarenetworks/blob/172e778a01b06357e5921d772f8ff18f9818a7d3/13san.md) | Duration variability is explored within a recursive receiver-relative physical update, not a one-time spike description. | The compiled discussion contains mixed voices and compressed formulations. Ordinary statistical CV is one possible proxy, not the entire phase differential, a proven cellular controller or a demonstrated universal neuron-level computer. |

The October 11 Book's Cycles 5, 14 and 31 develop the same reception, local output and
next-receiver questions; Cycle 37 separates detecting, decoding, causal use and complete-loop
tests. They are later explanatory donors, not authority to alter the dated source's meaning
or proof that the joined theory has been experimentally established.
See [[san-book2-bridge-atlas|Book and Bridge Atlas]].

## Recognition and novelty: preserve the joined hypothesis

The source proposes that recognized, unusual or behaviorally relevant inputs can change
receptor and learned network state, leave a waveform or output signature, and alter what
later receivers render and use. It does not require every novel input to broaden a spike
or every recognized input to narrow one.

Component observations include recent-input effects on cortical somatic waveform
([de Polavieja et al., 2005](https://doi.org/10.1523/JNEUROSCI.0242-05.2005)), fast and slow
spikes with different potassium-current magnitudes in dissociated rat taste cells under
current injection ([Chen et al., 1996](https://doi.org/10.1152/jn.1996.75.2.820)), and the
roles of PLCbeta2/TRPM5 in tested sweet, bitter and amino-acid pathways
([Zhang et al., 2003](https://doi.org/10.1016/S0092-8674(03)00071-0)). Ninomiya and colleagues'
[2000 review](https://pubmed.ncbi.nlm.nih.gov/10736359/) describes umami-related cellular
calcium responses. Nakao and colleagues' study separated slower receptor-potential
oscillations from the fast spikes riding on them
([2022](https://doi.org/10.3389/fphys.2022.883372)). None measured the entire recognition,
APD, output, receiver and experience pathway.

The complete experimental target is **declared stimulus and learned expectation -> receptor
and network state -> compartment-specific waveform -> actual output transformation ->
receiving-cell and distributed response -> discrimination or action -> later returned evidence**.
The peripheral or synaptic experiment tests one arrow; it does not replace the whole argument.

Compare expected, recognized and novel stimuli using predeclared controls for movement,
arousal, cell type, input strength, preceding voltage and spike history. Which variables to
hold fixed depends on the arrow being tested: suppressing a proposed mediator is not the
same as controlling a confounder. Pair held-out prediction with a selective intervention
and, where feasible, a rescue of the receiving consequence.

## The cross-scale 1/f question

The 2022 sources ask how cellular frequency/duration sequences contribute to population
frequency/power patterns, within a larger reconstruction proposal. Keep the measurements distinct:
APD is a compartment-specific time-domain width; rate is an event count per interval;
EEG/ECoG/LFP/MEG spectra summarize population signals; and a 1/f-like aperiodic component
describes a spectral power-frequency relation. An amplitude-times-duration quantity is not
automatically charge, release amount or neural information.

Test the proposed transformation with declared cellular, synaptic, population and behavioral
measurements. Estimate the total waveform-related effect on later outcomes and separately
examine mediation by calcium, release and receiver currents. Do not require an effect
independent of those intermediate stages: they are part of the pathway being proposed.

For causal inference, declare the exposure: source voltage, channel state, an imposed waveform
or a particular width contrast are not the same intervention. Specify the event-indexed causal
graph, feasible intervention family, target outcome, confounders, mediators and alternative
direct routes. An APD-only contrast needs a realizable control of the other relevant waveform
and terminal features. Observational adjustment or a channel manipulation does not automatically
identify that contrast; any mediation estimate needs its stated identification assumptions.

Model comparisons can ask whether waveform measurements improve prediction beyond a
specified count/timing description, under matched eligible information and model capacity.
EEG 1/f alone cannot identify the cellular mechanism. Likewise, including the measured
downstream mediator in a comparator answers a different question from testing whether the
upstream waveform contributes through that mediator.

Declare the baseline and augmented observation sets, recording modality, event window,
prediction cutoff and target time. Adding measured width to a count/timing summary is different
from adding that derived width to the complete waveform already determining it. Completed
spike width may become available only after calcium entry or release has begun: use it for
later outcomes, or use an available waveform prefix for an earlier prediction. Match training,
tuning and testing resources; do not credit a later measurement to an earlier decoder.

## APD within PWD and NAPOT

SAN proposes that a duration difference can be one coordinate of a receiver-relative
[[phase-wave-differential]]. PWD concerns differentiated patterns relative to a tonic or
expected pattern, including excitatory and inhibitory effects, not excitation alone or
spike width by itself. Specify the reference, source compartment, actual transmission route,
receiver and window, and the later transformation whose significance is being proposed.

The later variability discussion explores how preceding differences can help set the next
physical update. Ordinary statistical CV loses event order, phase, waveform shape, sign and
receiver identity; using it does not implement the full proposal. A candidate CV-dependent
controller needs an explicit update rule and comparison with channel-state, adaptation,
history and neuromodulation models. Do not turn mixed-voice draft formulas into measured
physiology or silently substitute one scalar for the richer state.

Within [[napot-overview|NAPOT]], the proposed role is repeated receive-transform-project-update
activity across learned arrays, including the rendering and re-rendering of sensory qualities
and a body-world relation. Measurement would test that role; being measured is not what makes
it part of the theoretical proposal. One wide spike does not, by itself, supply the
distributed geometry, recurrence or receiver history that the account requires.

## Discriminating tests

1. **Compartment and event:** record the relevant soma, axonal region and identified terminal;
   distinguish fast-spike width from burst, plateau and later event duration.
2. **Waveform and representation:** compare width, spike count/timing and fuller waveform-state
   descriptions under the same eligible input and capacity. A width derived from a complete
   waveform cannot add new physical information to that waveform, although an explicit feature
   may improve a finite model's representation or learning.
3. **Transmission and mediation:** measure the actual output route and receiving event.
   Estimate the total causal contribution, then distinguish mediation, loss and transformation.
   Do not make an unmediated presynaptic-to-receiver effect a requirement for transmission.
4. **Sensory learning:** vary declared expectation or learned category while accounting for
   sampling, movement and state. Test how the receiving consequence changes, not just whether
   the source spike is wider.
5. **Population and rendering:** test cellular-to-receiver-to-population transformations first,
   then the predicted learned discrimination, action and recurrent update. A decoder of local
   physiology alone does not establish complete sensory reconstruction or constitutive identity.
6. **Causal use:** selectively perturb the proposed waveform coordinate or route, preserve the
   variables required for that test, and seek the predicted downstream change and rescue.
   A channel deletion or temperature shift may alter both width and output machinery; it is
   not automatically a width-only intervention.

For prospective prediction, fit references and features using only information available
before the named outcome; use held-out trials and a predeclared loss. A completed receiving
consequence may become history for the next update, but cannot predict itself.

Calcium or terminal mediation is compatible with the proposed transmission operation.
Stronger claims about what a named receiver distinguishes, what an organism uses and how
the recurrent rendering is physically constituted need their own evidence. Failure of a
particular width measure or estimator limits that declared implementation; it does not
automatically reject the fuller source argument or certify an alternative version.

> **SAN boundary:** Duration and amplitude are not automatically an information magnitude.
> Declare the event, compartment, transmission, receiver and consequence. Keep established
> local physiology, the documented SAN synthesis, its constitutive extension and the tests
> of the joined account distinguishable without removing the account's original operation.

## A joined geometry and recurrence test

This is a **constructed Wiki experiment proposal**, not a historical quote or a completed
study. For a declared NAPOT implementation, choose two learned sensory relations with matched
components but different spatial arrangement or temporal order, and identify the downstream
receiver whose state should preserve that distinction. A learned contour is one candidate
relation suggested by the phase-sequence source; the preparation must make its waveform,
receiver and content measurements feasible.

Predeclare the source-state/waveform contrast, the predicted receiver pattern and a learned
discrimination or action outcome. Compare count/timing, channel/history and richer
receiver/recurrent models with the same eligible measurements and matched capacity. Predict
which relation changes, not only that overall activity or a generic decoder score changes.
Perturb the declared output or receiver relation while checking component detection and state
controls, then seek the predicted relation-specific rescue.

To test the return, specify how the receiving consequence or action becomes evidence for a
later update. Perturb that identified return path or its timing and predict the next
relation-specific receiver state and behavior; a compensating intervention should restore
the declared update without merely raising global activity. Separate the local transmission
test from this recurrence-dependent prediction and from alternative recurrent mechanisms.

A missing selective effect, failed relation-specific rescue or absence of the predeclared
update dependence limits that implementation under its stated conditions. It does not erase
the broader source proposal or establish its constitutive identity by default. Even a
successful joined experiment would need further work to distinguish causal use of the
representation from the stronger claim about the physical form of experience.

## Related concepts

- [[action-potential]]
- [[action-potential-waveform]]
- [[action-potential-waveform-encoding]]
- [[action-potential-magnitude]]
- [[action-potential-magnitude-via-duration]]
- [[multi-vesicular-release]]
- [[synapse]]
- [[potassium-channel-modulation]]
- [[umami-multi-receptor-coincidence-detection]]
- [[auditory-gating-spring-camp]]
- [[receptive-inceptive-dendritic-projection|Receptive and inceptive projection]]
- [[stimulus-history-and-action-potential-waveform]]
- [[phase-wave-differentials|Phase Wave Differentials]]
- [[phase-wave-differential-calculus|PWD Calculus]]
- [[napot-overview|NAPOT]]
- [[san-book2-bridge-atlas|Book and Bridge Atlas]]
