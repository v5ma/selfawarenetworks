# Eeg Limitations

**EEG Limitations** is the [[self-aware-networks|SAN]] heading for the constraints that bound electroencephalography as a *measurement* of cortical activity — distinct from, though overlapping with, [[eeg-bci-limitations|EEG BCI limitations]] which deals with the read-and-write loop. The category covers EEG's spatial-resolution ceiling, its smearing by skull and scalp, its forward/inverse-problem ambiguity, its susceptibility to artifact, and the underdetermined relationship between scalp signal and the [[brainwaves|cortical oscillations]] it samples.

## Origin

The packet for this slug carries no dated evidence (`evidence count: 0`), so the doctrine here is read off from definitional consequences of the title and from neighboring sourced entries — most directly [[eeg-bci-limitations|EEG BCI Limitations]], which addresses the same constraints in their read+write closure, and from [[bci-industry-landscape|the BCI industry landscape]] which places EEG among other modalities. The argument also rests on [[micah-blumberg|Micah Blumberg]]'s [[neural-lace-podcast|long-running discussions]] of [[brainwaves|brainwave]] measurement and on the [[self-aware-networks-book]]'s general claim that the brain's substrate is multi-scale and oscillatory. Until a primary-source quote is recovered for this exact title, the article should be read as a definitional placeholder grounded in those neighbors.

## Position

Three structural limitations dominate. *Spatial:* the scalp electrode integrates over a cortical patch on the order of square centimeters once the signal has been low-passed by skull and scalp, which puts a hard ceiling on how directly EEG can resolve [[cortical-columns-reference-frames|cortical-column-level reference frames]] or [[cortical-column-oscillatory-transmission|column-level oscillatory transmission]]. *Temporal:* EEG's millisecond-scale time resolution is excellent and is in fact what makes it preferred over [[fnirs-brain-imaging|fNIRS]] for tracking phase relationships, but its temporal advantage cannot rescue the spatial deficit — phase relationships are read at the population scale, not at the single-column scale of [[cortical-column-oscillatory-collaboration|column-to-column collaboration]]. *Inverse-problem:* the same scalp pattern can be produced by many distinct cortical sources, so source-localization from EEG alone is fundamentally underdetermined.

A second cluster of limitations is *signal-conditioning*. Eye-blink, jaw-tension, line-noise, and movement artifact each occupy bands that overlap the bands of interest. Active mechanisms like [[alpha-wave-sensory-suppression|alpha-band sensory suppression]] further complicate interpretation: a clean alpha increase can equally signal "rest" or "active inhibition," and only context disambiguates. Reference-electrode [[choice]], common-mode rejection, and montage geometry each introduce systematic biases. Finally, EEG samples extracellular potentials but does not directly resolve the [[apical-dendrite|apical-dendrite]] events that [[apical-dendrites|distributed predictive coding]] in [[cortical-columns-reference-frames|cortical columns]] rests on — those events contribute to the scalp signal only as a population sum, which is exactly what EEG measures.

A third, SAN-specific limitation is *contents-of-experience underdetermination*. Scalp EEG reports a sum of [[phase-wave-differentials|phase-wave differentials]]; it cannot, on its own, separate a [[dominant-phase-wave-differential|dominant differential rhythm]] (DPWDR) — the structure that the [[consciousness-canvas-wave-differential|wave-differential canvas]] renders into experience — from a near-dominant non-conscious one, because the dominance distinction lives at a finer spatial scale than the electrode can sample. EEG is therefore well-suited to measure *regimes* (arousal, [[attention]], drowsiness, [[brainwave-entrainment|entrainment]]) and to support [[eeg-biofeedback-self-reflective-loop|biofeedback]] / [[eeg-vr-biofeedback|VR biofeedback]] / [[eeg-xr-neurofeedback-bci|XR neurofeedback]] loops at that level, while remaining a coarse instrument for decoding the *contents* of perception.

## Post-SAN

Within published EEG literature these constraints are well-known and motivate the standard mitigations: high-density montages, beamforming and sLORETA-style source-localization, simultaneous EEG+fMRI, ICA-based artifact removal, and combined imaging stacks (EEG+[[fnirs-functional-near-infrared-spectroscopy|fNIRS]], EEG+MEG). The SAN-specific argument adds a separate ceiling on top of those: even an EEG system that solved every classical engineering limitation would still be measuring an *envelope* of phase-differential structure, and would therefore still be unable to decode the dominance-rank-by-pixel structure that perceptual content occupies. This is consistent with the framework's preference for higher-bandwidth modalities — [[near-infrared-action-potential-detection|near-infrared action-potential detection]], [[brain-computer-interface-neural-readwrite|invasive read-write architectures]], and [[neural-lace-brain-port|brain-port]] designs — when the goal is to read *what is being experienced* rather than *what regime the brain is in*. EEG remains essential for the regime-level question; it is not the right instrument for the content-level one.

## Related concepts

- [[eeg-bci-limitations]] — sibling page focused on the read+write closure.
- [[brainwaves]] — the source signal EEG samples.
- [[brainwave-entrainment]] — regime-level effect EEG can readily measure.
- [[brainwave-driven-photic-stimulation]] — EEG read paired with light-driven entrainment.
- [[alpha-wave-sensory-suppression]] — active mechanism that complicates EEG interpretation.
- [[fnirs-brain-imaging]] — optical alternative on the read side.
- [[fnirs-functional-near-infrared-spectroscopy]] — same modality, longer name.
- [[near-infrared-action-potential-detection]] — proposed non-invasive higher-resolution read.
- [[brain-computer-interface]] — application in which EEG limitations bite hardest.
- [[brain-computer-interface-neural-readwrite]] — encoding/decoding frame for read+write.
- [[bci-industry-landscape]] — modality taxonomy in which EEG sits.
- [[bci-expanded-sensory-range]] — SAN-side reading of where bandwidth has to land.
- [[non-invasive-brain-stimulation]] — non-invasive write that pairs with EEG read.
- [[neural-lace-brain-port]] — bidirectional architecture aimed past EEG's ceiling.
- [[artificial-cortex]] — external substrate that EEG cannot fully drive.
- [[eeg-biofeedback-self-reflective-loop]] — regime-level biofeedback loop EEG *can* close.
- [[eeg-vr-biofeedback]] — EEG-VR closed loop at the regime level.
- [[eeg-xr-neurofeedback-bci]] — XR neurofeedback closing the same loop.
- [[inter-brain-eeg-synchronization]] — two-brain coupling that survives EEG's spatial limit.
- [[brain-to-brain-eeg-synchronization]] — same phenomenon under a sibling slug.
- [[cortical-columns-reference-frames]] — column structure EEG cannot directly resolve.
- [[cortical-column-oscillatory-transmission]] — transmission EEG sees only as an envelope.
- [[cortical-column-oscillatory-collaboration]] — collaboration at sub-EEG spatial scale.
- [[cortical-column-voting]] — distributed evidence aggregation that does not survive scalp averaging.
- [[apical-dendrite]] — element below EEG's spatial resolution.
- [[apical-dendrites]] — predictive-coding substrate below resolution.
- [[thalamo-cortical-information-flow]] — fine-grained flow EEG cannot fully read.
- [[thalamocortical-network]] — anatomical target the modality cannot directly access.
- [[phase-wave-differentials]] — substrate from which EEG reads only a sum.
- [[dominant-phase-wave-differential]] — dominance structure EEG cannot resolve.
- [[consciousness-canvas-wave-differential]] — canvas EEG cannot decode pixel-by-pixel.
- [[tonic-phasic-canvas-of-consciousness]] — regime-level structure EEG *can* decode.
- [[mental-pixels]] — pixel structure below the ceiling.
- [[neural-data-sovereignty]] — privacy implication of regime-level EEG decoding.
- [[cognitive-privacy-xr-bci]] — XR/BCI cognitive-privacy frame.
- [[neural-lace-podcast]] — public venue for the surrounding discussion.
- [[self-aware-networks-book]] — book-length statement of the surrounding theory.
- [[micah-blumberg]] — author of the framing.

## Source Provenance

- Generated: 2026-04-24T18:26:10
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/eeg-limitations.json`
- Evidence count: 0
- Source ids: 

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
