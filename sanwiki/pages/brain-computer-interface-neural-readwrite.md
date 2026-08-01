# Brain-Computer Interface Neural Read/Write

A **brain-computer interface (BCI)** establishes a measured pathway between neural activity and an external device. A read channel estimates a declared variable from recorded activity. A write channel delivers stimulation or sensory feedback intended to alter a declared neural, perceptual, or behavioral variable. These engineering operations do not replicate the brain's complete biological encoding and decoding processes.

> **Figure status:** The earlier read/write bridge remains stored in the Wiki assets but is not embedded here. It treated oscillatory arrays as the established encoded substrate and made external decoding look equivalent to biological decoding.

## Source recovery: the 2021 interface proposal

The source behind this page is a recording made on September 28, 2021 and first fixed in public Git on August 28, 2022 ([`b0181y`](https://github.com/v5ma/selfawarenetworks/blob/29956416cb7c074bbfb8c32e13611a6568cc290e/b0181y.md)). The newer large-v3-turbo transcript is clearer than the original Google Recorder transcription, but it remains discovery evidence until checked against the audio for any exact quotation.

The source contains three distinct proposals:

1. **Interface progression:** command line, graphical interface, virtual or augmented reality, and BCI are successive ways for a person to operate computational tools. This is a human-computer-interaction genealogy, not a biological hierarchy.
2. **Multimodal AI work surface:** language, imagined or selected pictures, sound, spatial graphs, preferences, and programs could be coordinated in one adaptive interface. The proposal is a shared person-device workspace, not automatic recovery of private thought content.
3. **Alternative physical routes:** implanted electrodes, optogenetic research, and a proposed non-invasive combination of near-infrared measurement, ultrasound, and holographic or wavefront methods were treated as different possible bridges.

The source also speculated that individual neurons might eventually be read non-invasively and that human tissue could be genetically modified into an optogenetic interface. Those are historical engineering hypotheses, not achieved capabilities or established medical safety claims.

## Read channels

A read channel is defined by its signal source, sensors, preprocessing, model, target variable, validation data, and failure conditions. Scalp EEG, electrocorticography, intracortical arrays, peripheral recordings, eye tracking, and hemodynamic measurements observe different mixtures of activity at different spatial and temporal scales.

Successful classification demonstrates performance for the named target, participants, task, and recording setup. It does not reveal every feature represented by the tissue, establish the subjective meaning of a signal, or identify one universal neural code.

Functional near-infrared spectroscopy measures changes in oxygenated and deoxygenated hemoglobin coupled indirectly to neural activity. It can support bounded task classification, but its hemodynamic delay and spatial mixing prevent it from being described as real-time single-neuron recording. High-density and multi-distance measurements can improve signal separation without turning fNIRS into a cellular camera ([Shin et al., 2017](https://doi.org/10.1038/s41598-017-16639-0)).

## Write channels

A write channel is defined by the stimulation modality, anatomical target, waveform, dose, timing, safety constraints, measured consequence, and reversibility. Electrical, magnetic, acoustic, optical, pharmacological, and sensory-feedback interventions operate through different mechanisms. Optogenetics additionally requires biological expression of light-sensitive proteins and is not a generic human BCI method.

A stimulation pattern is not automatically a perceptual symbol. Its effect depends on the targeted cells and pathways, present state, prior learning, current behavior, and adaptation.

Transcranial focused ultrasound has modulated human somatosensory cortical activity and behavior at a millimeter-scale focus in a named protocol, but that result does not establish single-neuron writing or arbitrary content injection ([Legon et al., 2014](https://doi.org/10.1038/nn.3620)). Holography is a method for shaping or reconstructing wavefronts, not a neural delivery modality by itself. Holographically patterned optogenetic stimulation has reached cellular resolution in opsin-expressing retinal or cortical preparations, which is a different claim from non-invasive transcranial human writing ([Reutsky-Gefen et al., 2013](https://doi.org/10.1038/ncomms2500)).

## Read and write are not inverse functions

An external decoder estimates a limited target from many possible biological causes. A stimulation encoder then selects a physical intervention whose downstream effects depend on anatomy and current state. Successful reading therefore does not imply that reversing the decoder will write the original neural state.

```text
declared neural measurement
-> bounded external estimate with uncertainty
-> device or AI transformation
-> separately calibrated stimulation or sensory return
-> receiver-specific neural and behavioral consequence
-> adaptation and the next measurement
```

A genuine bidirectional model must separately validate every arrow. It must also measure whether calibration drifts as the person and device learn each other.

## Bidirectional evidence

A human intracortical BCI has recorded motor-cortical activity to control a robotic arm while stimulation of somatosensory cortex evoked tactile percepts linked to robotic contact. In one participant with tetraplegia, adding tactile feedback improved task performance ([Flesher et al., 2021](https://doi.org/10.1126/science.abd0380)). This establishes a bounded bidirectional sensorimotor interface. It does not establish general thought reading, arbitrary percept writing, NAPOT, or a complete neural language.

Later animal work provides a useful cellular comparator without collapsing scales. An all-optical experiment recorded visually responsive populations in mouse V1, selected identified ensembles, and holographically photoactivated those opsin-expressing cells while measuring local and downstream consequences ([Shin et al., 2025](https://doi.org/10.1038/s41593-025-02055-5)). That is a powerful circuit-level read-analyze-write test. It is not a general human BCI and does not establish that a decoded label is the animal's complete percept.

## Recovered hybrid inverse-problem hypothesis

Micah's June 2022 public notes separately proposed laser or near-infrared measurement, ultrasound, holography, and sufficiently fast sensors as a future non-invasive route ([`a0015z`](https://github.com/v5ma/selfawarenetworks/blob/3c124948f956e048013a82f8fb5a1dbd9a66a7f5/a0015z.md); [`a0534z`](https://github.com/v5ma/selfawarenetworks/blob/af0e02b3e7f0e9951ccd863a2bd47c53d50cac7d/a0534z.md)). A Book 2 outline fixed the stronger target: fNIRS-like speed, cellular depth and resolution, plus ultrasound stimulation ([`a0644z`](https://github.com/v5ma/selfawarenetworks/blob/b8ed5bd2b5e2280748fe13fdde5eb8e8e1edae42/a0644z.md)).

The medically recoverable operation is a **multimodal inverse problem**, not the assertion that neuron swelling is already visible through the intact adult human skull:

```text
optical and hemodynamic measurements
+ acoustic propagation and anatomical constraints
+ subject-specific skull and tissue model
+ motion and systemic-physiology controls
-> uncertainty-bounded estimate of distributed neural state
-> separately targeted and safety-limited stimulation
-> measured receiver and behavioral response
```

SAN's distinctive opportunity is to test whether receiver-relative tonic context and phasic departures improve this closed-loop estimate and intervention beyond ordinary signal features. The proposal fails in its strong form if the declared SAN variables add no held-out decoding value, no selective causal control, or no reproducible benefit after matched alternatives and recalibration.

## SAN and NerveGear

SAN treats bidirectional interfaces as tests of receive-transform-re-express-use organization. A useful experiment can ask whether an intervention enters a recurrent loop, changes an identified receiver population, alters downstream action, and is recalibrated by returned sensory consequences.

**NerveGear** names the long-range target of a general adaptive read/write interface. The historical target should not be described as an achieved device. Moving from a bounded BCI to NerveGear would require validated forward models, individual calibration, uncertainty estimates, interruption controls, long-term adaptation studies, and evidence that the written variable has the intended consequence without unacceptable off-target effects.

The 2021 multimodal work-surface proposal adds an important design constraint: the interface should let the user inspect, reject, revise, and act on external language, images, sounds, and spatial relations. It should not silently equate a decoder's guess with the user's thought or identity. The person-device loop remains one cooperating system with two fallible model builders, not one AI reading an inner screen.

## Scale boundary

- **Micro:** electrodes or stimulation affect particular cells, synapses, axons, or local populations under a specified geometry.
- **Meso:** a decoder or stimulation protocol interacts with a local circuit or distributed population signal.
- **Macro:** a closed device-person loop changes task performance, behavior, or report.

Evidence at one scale does not automatically prove the proposed mechanism at another.

## Image diagnosis and replacement brief

The archived plate correctly separated a read channel, external transformation, write encoder, and returned consequence. It failed medical review because it made phase-coded oscillatory arrays the established substrate; treated language, visual state, and multisensory content as generally decodable; combined read and write technologies as interchangeable delivery modes; called hemodynamic and acoustic measurements direct neural signatures; and depicted holography as a transcranial write channel.

A future replacement should use three aligned but non-identical lanes:

1. **Demonstrated implanted sensorimotor BCI:** motor recording, declared decoder, robotic action, contact sensor, somatosensory stimulation, behavioral improvement.
2. **Experimental optical circuit read/write:** genetically identified animal cells, optical recording, online analysis, holographic optogenetic stimulation, local and downstream measurements.
3. **Proposed non-invasive SAN route:** multimodal optical/hemodynamic and acoustic measurements, subject-specific inverse model, uncertainty, safety-limited stimulation, measured receiver consequence, and adaptive recalibration.

No lane should terminate in an internal screen or imply arbitrary memory, qualia, or identity transfer.

## Related pages

- [[eeg-xr-neurofeedback-bci]]
- [[neural-interface]]
- [[neurofeedback]]
- [[napot-overview]]
- [[artificial-perception]]
- [[artificial-telepathy]]
- [[artificial-cortex]]
- [[san-scale-ladder-and-claim-boundaries]]
- [[consciousness-claim-and-evidence-ladder]]

## Primary anchors

- [O'Doherty et al. (2011), active tactile exploration with a brain-machine-brain interface](https://doi.org/10.1038/nature10489)
- [Flesher et al. (2016), intracortical stimulation of human somatosensory cortex](https://doi.org/10.1126/scitranslmed.aaf8083)
- [Flesher et al. (2021), tactile feedback improving robotic-arm control](https://doi.org/10.1126/science.abd0380)
- [Shin et al. (2017), high-density multi-distance fNIRS BCI](https://doi.org/10.1038/s41598-017-16639-0)
- [Legon et al. (2014), transcranial focused-ultrasound modulation of human S1](https://doi.org/10.1038/nn.3620)
- [Reutsky-Gefen et al. (2013), holographic optogenetic retinal stimulation](https://doi.org/10.1038/ncomms2500)
- [Shin et al. (2025), all-optical circuit read/write and recurrent pattern completion](https://doi.org/10.1038/s41593-025-02055-5)
