# Action-Potential Magnitude Via Duration

## Begin with the missing operation

Knowing that a neuron fired does not tell us everything about what reached its next receiver. Recent
input and channel state can alter the waveform of a spike. At some presynaptic terminals, a change
in waveform width or repolarization changes calcium entry and therefore changes release statistics.

**recent input and channel state -> terminal action-potential waveform -> calcium-current timing
and amount -> probabilistic release -> receiver-specific postsynaptic effect**

This is the problem the early SAN notes were trying to name: a spike remains a regenerative event,
but its duration can be one biologically meaningful dimension of its downstream consequence.

## Earn the term

**Action-potential magnitude via duration** is SAN's early name for the hypothesis that a defined
waveform-duration feature can contribute to a larger or otherwise different receiver effect. It
does not mean that duration is the only variable, and "magnitude" must always name the measured
stage.

The hypothesis becomes useful when it asks whether terminal waveform features improve prediction
of calcium, fusion, postsynaptic current, and later network state after spike count and timing are
controlled.

## Established presynaptic mechanism

Action-potential waveforms vary across cell types, compartments, temperatures, modulatory states,
and recent firing histories. At a terminal, voltage controls calcium-channel activation and driving
force. Calcium then changes vesicle-fusion probability through a steep, nonlinear, active-zone
specific process. Presynaptic waveform changes can therefore alter synaptic efficacy.

That sequence does not imply that duration alone determines output. Peak voltage, repolarization,
channel state, readily releasable pool size, calcium-buffering, coupling distance, stochastic fusion,
receptor saturation, and short-term plasticity also matter. See
[Hoppa et al. (2014)](https://doi.org/10.1016/j.neuron.2014.09.038) and
[Holler et al. (2021)](https://doi.org/10.1038/s41586-020-03134-2).

The postsynaptic neuron receives transmitter-dependent receptor currents, not the presynaptic
waveform or a stored duration schedule.

> **Scientific boundary:** "Magnitude" must name the measured variable. Spike peak, spike width, terminal calcium, release probability, vesicle-fusion count, postsynaptic current, and population response are different variables connected by conditional transformations.

> **Image status:** The earlier deterministic calcium-gate plate failed medical review and remains in the failed-medical-review archive. The image below is its medically bounded replacement. It preserves the intended cross-scale question while separating three clocks and making every cross-scale step conditional.

![Presynaptic spike width, synaptic response duration, and population-state duration are distinct clocks linked by conditional mediation](../assets/generated/san/action-potential-magnitude-via-duration/action-potential-magnitude-via-duration-three-clocks-mediation-20260720-v1.png)

> **How to read the figure:** Clock 1 is a waveform feature at an identified terminal. Clock 2 is the calcium, release, receptor, and postsynaptic response generated through the synapse. Clock 3 is a newly generated circuit or population state shaped by recurrence, inhibition, neuromodulation, and plasticity. The figure is a mediation design, not a universal cortical circuit or a claim that one duration is copied unchanged across all three clocks.

## The missing positive story: waveform can carry recent input history

The all-or-none principle remains useful when it means that a regenerative spike crosses threshold
and does not scale its peak voltage in simple proportion to stimulus strength. It is incomplete when
it is taken to mean that every spike produced by one neuron has an identical waveform or identical
synaptic consequences.

In rat cortical pyramidal neurons driven by conductance patterns resembling natural synaptic input,
somatic spike height and width varied in ways that reliably signaled aspects of the preceding input
history for up to about 50 ms. The full waveform carried more information about that experimental
stimulus history than instantaneous spike rate in that preparation. See
[de Polavieja et al. (2005)](https://doi.org/10.1523/JNEUROSCI.0242-05.2005).

This supports a bounded chain:

**recent receptor, synaptic, and membrane history -> conductance and channel state at spike
initiation -> compartment-specific spike waveform, including duration -> terminal waveform and
calcium transformation -> bouton-specific probabilistic release -> receiver-specific consequence**

### A recovered 2014 correction

The internally dated
[`a0263z.md`](https://github.com/v5ma/selfawarenetworks/blob/5af8b6aa029594d221ad72c9e0a5ce2ed2ab3a98/a0263z.md)
preserves an adversarial response to an older SAN formulation. It correctly rejects "axon
potential" as a separate voltage quantity, explains membrane potential as the voltage difference
across the membrane, and rejects the idea that a surplus above an axon's maximum causes backward
propagation. Backpropagating action potentials concern propagation into dendritic compartments
with different channel properties; they are not excess axonal voltage.

This correction narrows the mechanism without erasing the research question. The surviving SAN
claim concerns measurable waveform variation, recent history, compartment, propagation, terminal
calcium, probabilistic release, and receiver consequence. The adversarial speaker's words are not
Micah authorship. Its February 14, 2014 internal date still requires original platform custody; the
verified public Git fixation is June 11, 2022.

It does **not** establish that every recognized or novel stimulus broadens a spike. Depending on cell
type, compartment, state, input history, and conductances, a special stimulus could produce a wider
or narrower waveform, a burst, changed latency, changed spike probability, adaptation, inhibition,
or no detectable waveform change.

## Whisker, umami, and surprise as experiments, not settled examples

Whisker research establishes that active whisking changes barrel-cortex membrane-potential state:
quiet wakefulness can show slower large-amplitude fluctuations, while whisking produces smaller,
faster fluctuations and robust contact-related responses. See
[Crochet and Petersen (2006)](https://doi.org/10.1038/nn1690). This supports state-dependent sensory
processing, but it does not by itself show that whisker recognition is encoded by spike duration.

Umami provides a complementary receptor-to-output test. Multiple receptor and taste-cell pathways,
intracellular signaling, membrane conductances, calcium, ATP release, afferent activity, and central
processing must be separated. The SAN source predicts that receptor-defined chemical history may
alter a later waveform or burst distribution; that prediction requires direct simultaneous
measurement rather than inference from the taste label.

Novelty or surprise is likewise a network-level and task-relative construct. A valid experiment must
define the expected stimulus, mismatch, cell class, compartment, and behavioral condition, then test
whether waveform duration adds held-out information beyond spike probability, count, timing, burst
structure, membrane potential, adaptation, and population state.

## Why `1/f` is related but not the same measurement

In EEG, MEG, ECoG, or local-field spectra, `1/f` usually describes an aperiodic relationship between
population-signal power and frequency:

**Aperiodic-spectrum relation:** `P(f) proportional to 1 / f^beta` **[1]**

That is not an inverse law between one action potential's peak amplitude and its duration. Spectral
power combines activity from many cellular and synaptic sources, and periodic peaks must be
distinguished from the aperiodic background. SAN may investigate whether multiscale waveform and
synaptic-duration distributions contribute to population spectra, but the bridge must be measured
rather than assumed.

## Scale ladder

- **Micro:** a waveform at an identified bouton changes calcium or release statistics.
- **Meso:** a local circuit changes recruitment, timing, gain, or synchrony after many transformed
  synaptic effects.
- **Macro:** distributed systems change memory-guided behavior or a working body-world model.

No scale follows automatically from the one below. A micro-scale synaptic effect does not prove a
column-wide frequency bump, and a meso-scale oscillation does not prove whole-brain reconstruction.

## Memory boundary

Long-term memory is not stored as one APD value. Synaptic and cellular memory involves changes in
release machinery, receptor composition, spine structure, intrinsic excitability, gene expression,
and network recruitment across multiple timescales. Retrieval is a new network event constrained by
those changes; it is not literal copying of the original spike-width sequence.

That correction does not require discarding the SAN idea of **re-expression or reinstatement**.
Partial cues can recruit learned recurrent activity, and experimental activation of identified
memory-related ensembles can evoke memory-linked behavior. CA3 recurrent circuitry has been tested
in associative pattern completion, sparse hippocampal ensembles have been causally reactivated to
evoke recall, and recent mapping supports memory-related ensembles distributed across multiple
regions. See [Nakazawa et al. (2002)](https://doi.org/10.1126/science.1071795),
[Liu et al. (2012)](https://doi.org/10.1038/nature11028), and
[Roy et al. (2022)](https://doi.org/10.1038/s41467-022-29384-4).

The recovered operation is therefore:

**partial cue or source event -> transformed synaptic effects -> selective recurrent recruitment
of a learned ensemble -> newly generated population trajectory -> memory-guided perception,
decision, or action**

SAN adds the hypothesis that receiver-relative waveform, timing, phase, inhibition, and PWD
variables help select and sculpt this reinstatement. That is more specific than ordinary engram
reactivation and must outperform rate, timing, connectivity, and state-only models in direct tests.

## Bounded SAN interpretation and test

SAN can predict that bouton-specific waveform history contributes to receiver-relative network
state. The test must manipulate terminal waveform while jointly measuring calcium, fusion,
postsynaptic response, population timing, and behavior. The proposed magnitude channel is supported
only if waveform features improve held-out prediction and causal control after rate, timing,
terminal identity, calcium, release pool, history, and common input are matched.

## Three durations and one conditional causal route

The original formulation compressed a proposed cross-scale temporal translation into the shared
words *duration*, *magnitude*, and *playback*. A medically useful reconstruction preserves the
causal question while separating three clocks:

1. **Presynaptic waveform duration:** half-width or another defined feature measured at an identified bouton.
2. **Synaptic and receptor-response duration:** calcium, release, transmitter clearance, receptor current, and postsynaptic voltage over their own timescales.
3. **Circuit or population-state duration:** recurrent recruitment, inhibition, neuromodulation, plasticity, and behavioral context that may outlast the initiating synaptic event.

The first can influence the second in some preparations. The second can contribute to the third,
but recurrence and state-dependent circuit mechanisms intervene. The same physical duration is not
copied across scales. A short cellular event can help initiate a longer circuit state, and a longer
synaptic effect can fail to produce persistence, depending on the receiver and network state.
Population reinstatement can re-express learned relationships without replaying an APD schedule.

The recovered SAN hypothesis is a mediation test. Manipulate terminal APD while holding spike count and timing constant; measure calcium, fusion, receptor current, receiver trajectory, and later population state. Estimate how much of the population effect is mediated by each established synaptic variable and whether any receiver-relative SAN variable adds reproducible prediction and causal control after those mediators are included.

A second, complementary test asks whether controlled expected, recognized, and novel inputs produce
different waveform distributions after rate, timing, membrane state, and cell identity are matched.
The strong SAN result would be a reproducible waveform-history variable that predicts bouton and
receiver consequences and whose selective manipulation changes discrimination or behavior. A null
or fully mediated result narrows the duration claim without restoring a binary-spike abstraction.

> **SAN boundary:** Presynaptic APD, synaptic-current duration, and population-state duration are distinct variables. Their relationship must be measured; it cannot be inferred from a shared word such as duration, persistence, or magnitude.

## Source-faithful SAN genealogy

The duration-to-reinstatement idea developed in stages. Later formulations must not be backdated:

| Public source stage | Recovered operation | Scientific boundary |
|---|---|---|
| [June 8, 2022: source-event magnitude](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0053z%20ctpr.txt) | A source event was proposed to have a variable downstream extent or slowing consequence. | Transmitter, receptor, cell, circuit, and measured effect must be named. |
| [June 27, 2022: tonic state and duration](https://github.com/v5ma/selfawarenetworks/blob/27a9f198d7f664d0a4b6edf6a08b7732331af110/a0206z.md) | The ongoing group state was proposed to change the consequence and persistence of a later phasic event. | A population state is not one potassium concentration or one universal APD controller. |
| [August 3, 2022: APME](https://github.com/v5ma/selfawarenetworks/blob/b79351a4fe3667296952c483e6beb68732bf3865/a0053z.md) | Waveform duration, terminal calcium, release, inhibition, spatial extent, phasic departure, and tonic relaxation were joined. | Fixed vesicle symbols, forced inhibition, and direct scale propagation remain rejected. |
| [August 10, 2022: sensory-history application](https://github.com/v5ma/selfawarenetworks/blob/75b194fb97d2da09fb8bdd4130be98b910a72adb/a0272z.md) | Receptor-specific history was proposed to alter channel state, duration, release, and a later phase pattern. | A taste or novelty label does not establish a universal APD recognition code. |
| [August 19, 2022: rendering interpretation](https://github.com/v5ma/selfawarenetworks/blob/faf361d9790ae26de3e90d923e74e9a8755e186b/a0053z.md) | The cellular transformation was joined to receiver arrays, tonic context, phasic variation, and distributed rendering. | Component physiology does not prove unchanged semantic transmission or conscious tomography. |
| [September 8, 2022: variable release and phase output](https://github.com/v5ma/selfawarenetworks/blob/26dddd6ff9be0e9460686611f7622cb7873d011a/a0007z.md) | Duration-to-calcium-to-variable-release was linked to memory prediction and later receiver output. | Fixed vesicle alphabets, apical-as-output anatomy, and direct phase-reset claims remain rejected. |
| [September 6, 2024: receiver-relative PWD](https://github.com/v5ma/selfawarenetworks/blob/df4d7f8d3270d56de167035c4987c3e072696c79/02san.md) | Duration became one coordinate of a differential event relative to the receiver's prior tonic state. | No universal inverse-frequency law or biological derivative follows from duration alone. |
| [June 16, 2025: variability extension](https://github.com/v5ma/selfawarenetworks/blob/172e778a01b06357e5921d772f8ff18f9818a7d3/13san.md) | Recent duration variability was proposed as one input to a later self-updating oscillator state. | CV is an incomplete summary and not a proven APD controller or memory code. |

## Related concepts

- [[action-potential-duration]]
- [[action-potential-magnitude]]
- [[action-potential-waveform]]
- [[stimulus-history-and-action-potential-waveform]]
- [[multi-vesicular-release]]
- [[synaptic-unreliability]]
- [[oscillation-memory-reinstatement]]
- [[napot-overview|NAPOT]]
- [[early-a0255-a0276-obscure-argument-map|Early a0255-a0276 Obscure Argument Map]]
