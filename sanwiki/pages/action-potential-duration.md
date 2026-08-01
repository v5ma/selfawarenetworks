# Action Potential Duration

**Action-potential duration (APD)** is a declared measure of spike width at a stated cellular
compartment. It is a real biophysical variable, but it is not one universal quantity. Half-width,
width at a selected voltage, repolarization time, afterpotential duration, and total waveform area
measure different properties.

> **Scientific boundary:** Presynaptic spike duration and shape can alter calcium entry and transmitter release. They do not establish a universal APD code, a deterministic vesicle-count alphabet, or a direct APD-to-consciousness mechanism. SAN treats receiver-decodable information in waveform variation as a circuit-specific hypothesis.

> **Image status:** The current replacement passed the bounded medical and source-operation review. It separates somatic from bouton measurement, APD from the full waveform, calcium transformation from probabilistic release, and presynaptic waveform from receiver-specific consequence. The earlier deterministic 0/1/2/3 plate is preserved outside the public build in the medical-review quarantine.

![Action-potential duration is one waveform coordinate in a conditional synaptic transformation](../assets/generated/san/action-potential-duration/action-potential-duration-waveform-to-conditional-release-20260720-v1.png)

> **How to read the figure:** The traces, calcium domains, and release distributions are illustrative, not measurements from one experiment. The figure's claim is conditional: changing a terminal waveform can change calcium and release, but known bouton and receiver variables can produce different consequences from similar APD values or overlapping consequences from different APD values.

## Keep five durations separate

1. **Spike duration:** a width measure of a voltage waveform at the soma, AIS, axon, or bouton.
2. **Burst duration:** the interval occupied by several spikes; it is not the width of one spike.
3. **Synaptic-current or postsynaptic-potential duration:** a receiver-side consequence shaped by
   transmitter, clearance, receptors, dendritic filtering, and inhibition.
4. **Population-event duration:** the persistence of a local or distributed activity pattern.
5. **Behavioral or perceptual duration:** a downstream organism-level measurement.

A longer event at one level does not automatically cause an equally long event at the next.
**Plateau potential** also should not be used as a synonym for ordinary APD: plateau potentials are
prolonged depolarizing states that can outlast a single fast action potential by orders of magnitude.

## Established waveform physiology

An action potential is shaped by voltage-gated sodium, potassium, calcium, and other conductances.
It is normally initiated near the [[receptive-inceptive-dendritic-projection|axon initial segment]]
in cortical pyramidal cells and propagates through the axon. The waveform can differ between the
soma, branches, and boutons because geometry and channel composition differ across compartments.

The supposedly binary event can retain graded influences:

- During naturalistic conductance stimulation of rat visual-cortical pyramidal neurons, somatic
  waveform variability carried information about recent input history for up to about 50 ms
  ([de Polavieja et al., 2005](https://doi.org/10.1523/JNEUROSCI.0242-05.2005)).
- Modest changes in cortical presynaptic somatic voltage altered axonal spike amplitude and duration
  and changed the average postsynaptic response through a calcium-dependent mechanism
  ([Shu et al., 2006](https://doi.org/10.1038/nature04720)).
- Somatic voltage and Kv1 channels can control repolarization in cortical axon collaterals and
  boutons ([Foust et al., 2011](https://doi.org/10.1523/JNEUROSCI.2752-11.2011)).
- Presynaptic waveform is locally plastic in some small CNS terminals, and activity-dependent
  broadening can facilitate release in bounded preparations
  ([Hoppa et al., 2014](https://doi.org/10.1016/j.neuron.2014.09.038);
  [Cho et al., 2020](https://doi.org/10.1073/pnas.2000790117)).

This variability is not universal. Distal axons can actively preserve waveform fidelity through
potassium-channel organization
([Gonzalez Sabater et al., 2021](https://doi.org/10.1523/JNEUROSCI.2765-20.2021)).
Whether APD changes, remains stable, broadens, or narrows must be measured in the relevant cell,
compartment, firing pattern, and preparation.

## Duration is only one coordinate of the terminal waveform

At a chemical synapse, the arriving waveform controls both calcium-channel activation and the
driving force for calcium entry. Equal duration does not imply equal calcium entry. AP-like stimuli
matched for amplitude, duration, and area but differing in rise and decay kinetics produced
different calcium-channel responses
([Scarnati et al., 2020](https://doi.org/10.3389/fnsyn.2020.00017)).

A useful terminal-waveform vector can include:

**recording compartment, peak voltage, half-width, rise kinetics, repolarization slope,
afterpotential, burst position, recent history, temperature, modulation, and terminal identity**

The causal sequence is conditional:

**membrane and channel state -> local terminal waveform -> calcium-channel activation and driving
force -> calcium nanodomain -> fusion probability -> transmitter event -> receiver response**

## Why APD is not a deterministic vesicle alphabet

Release depends on more than spike width:

- release-ready vesicle number and state;
- calcium-channel number, subtype, location, and open probability;
- channel-to-vesicle-sensor distance;
- extracellular and residual intracellular calcium;
- active-zone proteins and recent synaptic history;
- bouton identity and postsynaptic target; and
- stochastic vesicle fusion, transmitter clearance, and receptor response.

A single spike can produce failure, univesicular release, or multivesicular release under different
conditions. Those are distributions, not fixed symbols selected by APD alone. At Schaffer
collateral boutons, low vesicular release probability favored single-vesicle events, whereas high
calcium conditions increased multivesicular release
([Durst et al., 2022](https://doi.org/10.1038/s41467-022-33565-6)).

The postsynaptic cell does not directly read the presynaptic APD. It receives a chemical consequence
that has already been transformed by terminal calcium and release, then transforms it again through
receptor state, dendritic location, inhibition, and its current membrane state.

## Source-faithful SAN genealogy

The original APD proposal developed in stages. Later language must not be backdated:

| Public source stage | Recovered operation | Scientific boundary |
|---|---|---|
| [June 10, 2022: variable-waveform question](https://github.com/v5ma/selfawarenetworks/blob/0c72be5b8ac5ec25268a57d4c51cb17a544293a7/a0089z.md) | If peak amplitude is constrained, waveform duration remains a candidate variable rather than every spike being identical. | Firing frequency can change without APD changing; duration must be measured rather than inferred from rate. |
| [July 7, 2022: cellular-to-population translation](https://github.com/v5ma/selfawarenetworks/blob/738abec60a19d3c438ee04d6d6f01c1b110fd981/a0149z.md) | Neuron-level duration and frequency were proposed as contributors to population-level signals. | EEG/MEG power and frequency cannot be read directly as single-cell APD. |
| [July 17, 2022: cross-scale magnitude question](https://github.com/v5ma/selfawarenetworks/blob/0a364019d194e0d25795d28fe1ff5a41df28145f/a0115z.md) | The source asks whether constrained spike amplitude plus variable duration supplies a magnitude-like coordinate across scales. | EEG 1/f is a spectral power-frequency relation, not evidence for a universal APD law. |
| [August 3, 2022: Action Potential Magnitude Effect](https://github.com/v5ma/selfawarenetworks/blob/b79351a4fe3667296952c483e6beb68732bf3865/a0053z.md) | Potassium-channel state, waveform, calcium, and release are joined into one candidate transmission-magnitude mechanism. | Duration alone is not magnitude, and broader is not always stronger. |
| [August 10, 2022: umami and receptor-history application](https://github.com/v5ma/selfawarenetworks/blob/75b194fb97d2da09fb8bdd4130be98b910a72adb/a0272z.md) | Receptor-specific sensory history was proposed to alter channel state and output duration. | Umami transduction does not establish a characteristic APD symbol for recognition. |
| [September 8, 2022: APD and multivesicular output](https://github.com/v5ma/selfawarenetworks/blob/26dddd6ff9be0e9460686611f7622cb7873d011a/a0007z.md) | APD-to-calcium-to-variable-release was linked to phase-output consequences. | The fixed 0/1/2/3 alphabet, apical-as-output anatomy, and direct phase-reset claim remain rejected. |
| [November 28, 2022: whisker-state application](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0296zWhisker.md) | Sensory input, membrane state, desynchronization, coincidence, and rendered tactile difference were joined. | This source does not demonstrate whisker novelty broadening a somatic or terminal spike. |
| [January 4, 2024: mechanoreceptor-duration prediction](https://github.com/v5ma/selfawarenetworks/blob/bf6e02b538ad8c24460fbf63bbd380a4f9ef5eb3/a0011z.md) | Stronger or more distributed receptor activation was proposed to alter potassium state and APD. | This is a stimulus-specific experiment proposal, not established universal mechanoreceptor physiology. |
| [June 16, 2025: coefficient-of-variation extension](https://github.com/v5ma/selfawarenetworks/blob/172e778a01b06357e5921d772f8ff18f9818a7d3/13san.md) | Recent duration variability was proposed as an input to the next receiver-relative update. | CV is a summary statistic, not a proven cellular controller or a complete PWD measure. |

## Recognition and novelty: a restored testable hypothesis

The source was not merely saying that potassium channels affect spike width. It proposed that
**recognized, unusual, or behaviorally relevant input can leave a measurable signature in the
waveform and its synaptic consequence**.

Established studies support component steps. Recent conductance history can alter waveform; taste
cell classes differ in action-potential duration and potassium currents; umami receptors activate
specific intracellular calcium and depolarization pathways; and active whisking changes cortical
membrane and population state. None of those results proves that recognition or surprise
universally broadens a spike.

The medically accurate SAN prediction is narrower:

**matched sensory input category and expectation -> receptor and network state -> declared somatic
or terminal waveform vector -> calcium/release transformation -> receiver response**

Test expected, recognized, and novel stimuli while matching movement, arousal, cell type, spike
count, spike timing, baseline voltage, and stimulus energy. A sensory APD hypothesis gains support
only if terminal waveform adds held-out and causal predictive value after those controls. Umami,
whisker touch, and mechanoreception are candidate preparations, not already confirmed instances.

## The cross-scale 1/f question

The 2022 source asked whether neuron-level frequency/duration patterns are transformed into
population-level frequency/power patterns. That is a legitimate multiscale question, but the
measurements must remain distinct:

- APD is a time-domain waveform measure at a named cellular compartment.
- Spike rate is a count per time window.
- EEG, ECoG, LFP, and MEG spectra summarize population signals.
- A 1/f-like aperiodic component describes how spectral power tends to change with frequency.

Therefore EEG 1/f cannot confirm a single-cell amplitude-times-duration law by itself. The SAN
extension is testable by simultaneous terminal-voltage, synaptic, population-field, and behavior
recordings, followed by mediation analysis. It survives only if cellular waveform variables improve
cross-scale prediction beyond spike timing, firing rate, synaptic currents, cell composition,
geometry, arousal, and movement.

## APD within PWD and NAPOT

SAN proposes that a duration difference can be one coordinate of a receiver-relative
[[phase-wave-differential]]. It is not PWD by itself. A useful event description must name:

1. the expected waveform or tonic reference state;
2. the measured source compartment;
3. the transformed synaptic variable;
4. the receiver and observation window; and
5. the later population or behavioral consequence.

The later coefficient-of-variation proposal can summarize a sequence of durations, but ordinary CV
does not preserve phase, waveform shape, sign, receiver identity, or event order. Any claim that CV
helps set the next duration requires direct intervention and comparison with adaptation, channel
state, firing-rate history, and neuromodulation models.

APD can therefore participate in NAPOT only through many measured receive-transform-project events.
One broad spike is not a rendered percept, a tomographic reconstruction, or an observer.

## Discriminating tests

1. **Compartment test:** measure soma, proximal axon, and identified boutons simultaneously; do not
   infer terminal APD from the soma.
2. **Waveform test:** compare APD alone with a full terminal-waveform model.
3. **Mediation test:** measure calcium, active-zone state, fusion, transmitter, receptors, and
   receiver voltage; determine where the effect is transformed or fully mediated.
4. **Sensory test:** compare expected, recognized, and novel stimuli under matched state and
   movement controls.
5. **Population test:** test whether cellular waveform variables improve population timing, phase,
   or spectral prediction beyond rate and synaptic-current models.
6. **Causal-use test:** selectively alter the waveform while preserving spike count and timing, then
   test the predicted receiver and behavioral consequence.

If calcium and known terminal variables fully mediate the downstream effect, APD remains an
important mechanism but not an independently decoded code. If the full waveform, learned sensory
condition, and named receiver add reproducible incremental and causal value, the bounded SAN
hypothesis gains support.

> **SAN boundary:** Duration plus amplitude is not automatically neural information magnitude. The relevant quantity must be defined at a stated compartment, transformed through a stated synapse, detected by a stated receiver, and shown to matter for a stated circuit or behavior.

## Related concepts

- [[action-potential]]
- [[action-potential-waveform]]
- [[action-potential-waveform-encoding]]
- [[action-potential-magnitude]]
- [[action-potential-magnitude-via-duration]]
- [[multi-vesicular-release]]
- [[synapse]]
- [[receptive-inceptive-dendritic-projection|Receptive and inceptive projection]]
- [[stimulus-history-and-action-potential-waveform]]
- [[phase-wave-differential]]
- [[napot-overview|NAPOT]]
