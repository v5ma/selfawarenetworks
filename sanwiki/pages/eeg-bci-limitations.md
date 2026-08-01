# Eeg Bci Limitations

**EEG BCI Limitations** is the [[self-aware-networks|SAN]] heading for the set of practical and theoretical constraints that bound what a scalp-EEG-based [[brain-computer-interface]] can read and write — the gap between the signal that the [[brainwaves|cortical oscillations]] actually carry and the signal that surface electrodes can recover. It sits inside the broader [[bci-industry-landscape|BCI taxonomy]] as the modality whose ceiling has been most often hit and most often debated.

## Origin

The packet for this slug carries no dated evidence (`evidence count: 0`), so the doctrine here is read off from definitional consequences of the title and from neighboring sourced entries in this wiki: [[bci-industry-landscape]] situates EEG within the modality/invasiveness taxonomy, [[non-invasive-brain-stimulation]] gives the read-side counterpart on the *write* axis, and [[brain-computer-interface-neural-readwrite]] frames the encoding/decoding picture that EEG attempts. The argument also rests on [[micah-blumberg|Micah Blumberg]]'s long-running claim — articulated through the [[neural-lace-podcast]] and across the [[self-aware-networks-book]] — that EEG is informative about [[neural-oscillations]] but cannot, on its own, do the high-bandwidth read/write work that other modalities promise. Until a primary-source quote for this exact title is recovered into a future Lane B packet, the article should be read as a definitional placeholder grounded in those neighbors.

## Position

The first limitation is *spatial*. Scalp EEG averages over the activity of large neuronal populations once the signal has been smeared by skull and scalp; it cannot resolve [[cortical-columns-reference-frames|the column-level reference frames]] that [[cortical-column-oscillatory-transmission|oscillatory transmission]] and [[cortical-column-voting]] operate over. The same constraint forecloses confident decoding of [[apical-dendrite|apical-dendrite]] events that [[apical-dendrites|distributed predictive coding]] rests on. The second limitation is *signal-to-noise* — eye blinks, jaw tension, line noise, and motion artifact each occupy bands that overlap the bands of interest, and active suppression mechanisms like [[alpha-wave-sensory-suppression|alpha suppression]] complicate the interpretation of even clean recordings. The third limitation is the *forward-problem ambiguity*: the same scalp pattern can be produced by many distinct cortical sources, so EEG inversion is fundamentally underdetermined, in tension with the fine-grained [[thalamo-cortical-information-flow|thalamo-cortical information flow]] one would need to read in order to emulate perception artificially.

The fourth, and most consequential for SAN, is *contents-of-experience underdetermination*. A scalp-EEG channel reports only a sum of [[phase-wave-differentials|phase-wave differentials]]; it cannot distinguish a [[dominant-phase-wave-differential|dominant differential rhythm]] (DPWDR) from a near-dominant non-conscious one without help from other modalities, because the [[consciousness-canvas-wave-differential|wave-differential canvas]] is rendered at a finer scale than the electrode can sample. EEG-based [[eeg-biofeedback-self-reflective-loop|biofeedback]], [[eeg-vr-biofeedback|EEG–VR biofeedback]], and [[eeg-xr-neurofeedback-bci|XR neurofeedback]] therefore operate on *mental-state regimes* — arousal, [[attention]], drowsiness — rather than on the contents of perception, and the SAN reading explains why: those regimes are aggregate properties of the [[tonic-phasic-canvas-of-consciousness|tonic-phasic canvas]] that survive the spatial-averaging pass, while the dominant-pixel structure does not. Adjacent observations — [[inter-brain-eeg-synchronization|inter-brain]] and [[brain-to-brain-eeg-synchronization|two-person]] EEG synchronization — are therefore robust at the regime level even when scalp EEG cannot decode the experiences themselves.

The fifth is *write-side asymmetry*. Pure EEG is a read-only modality; non-invasive *write* relies on a different family — [[non-invasive-brain-stimulation]], [[brainwave-entrainment]], and [[brainwave-driven-photic-stimulation]] — and these have their own ceilings (broadband entrainment cannot target a single column). Closing the read+write loop at high bandwidth therefore tends to push designs toward invasive electrodes, optical methods like [[fnirs-brain-imaging|fNIRS]] / [[fnirs-functional-near-infrared-spectroscopy|fNIRS variants]] and [[near-infrared-action-potential-detection|near-infrared action-potential detection]], or hybrids such as [[neural-lace-brain-port|the brain port]] and [[artificial-cortex|the artificial cortex]] — see [[bci-expanded-sensory-range]] for the SAN-side reading of where the bandwidth ceiling actually has to land for an honest expanded-sense BCI.

## Post-SAN

In the published BCI literature these limitations are repeatedly traversed by the same names — low spatial resolution, volume-conduction smearing, ill-posed inverse problems, motion artifact, broadband write — and the [[bci-industry-landscape|industry taxonomy]] arranges devices accordingly. The SAN-specific addition is the contents-of-experience argument: even an EEG device that solved every classical engineering limitation would still be reading the *envelope* of phase-differential structure rather than the dominant-pixel structure that perceptual content occupies, so its bandwidth ceiling is bounded by *physics-of-the-canvas* and not just by skull thickness. This is also why SAN treatments of [[cognitive-privacy-xr-bci|cognitive privacy]] and [[neural-data-sovereignty|neural data sovereignty]] rate EEG BCIs as still-significant privacy surfaces — regime-level decoding of [[attention]], arousal, and emotional valence is sufficient to be invasive — while remaining clear-eyed that contents-decoding is not where EEG is.

## Related concepts

- [[brain-computer-interface]] — parent concept.
- [[brain-computer-interface-neural-readwrite]] — encoding/decoding frame for read+write.
- [[bci-industry-landscape]] — modality taxonomy in which EEG sits.
- [[bci-expanded-sensory-range]] — SAN-side reading of where BCI bandwidth has to land.
- [[non-invasive-brain-stimulation]] — non-invasive write modalities adjacent to EEG read.
- [[brainwave-entrainment]] — broadband entrainment as a partial write substitute.
- [[brainwave-driven-photic-stimulation]] — entrainment-via-light, paired with EEG read.
- [[fnirs-brain-imaging]] — optical alternative on the read side.
- [[fnirs-functional-near-infrared-spectroscopy]] — same modality, longer name.
- [[near-infrared-action-potential-detection]] — proposed non-invasive higher-resolution read.
- [[neural-lace-brain-port]] — bidirectional architecture aimed past EEG's ceiling.
- [[artificial-cortex]] — external substrate that EEG cannot fully drive.
- [[eeg-biofeedback-self-reflective-loop]] — the regime-level feedback loop that EEG *can* close.
- [[eeg-vr-biofeedback]] — EEG-VR closed loop at the same regime level.
- [[eeg-xr-neurofeedback-bci]] — XR neurofeedback closing the same loop in immersive contexts.
- [[inter-brain-eeg-synchronization]] — two-brain EEG coupling that survives the spatial limit.
- [[brain-to-brain-eeg-synchronization]] — same phenomenon under a sibling slug.
- [[brainwaves]] — the source signal EEG samples.
- [[alpha-wave-sensory-suppression]] — active suppression that complicates EEG interpretation.
- [[neural-data-sovereignty]] — privacy implication of regime-level EEG decoding.
- [[cognitive-privacy-xr-bci]] — XR/BCI cognitive-privacy frame.
- [[neuralink-ethics-panel-b0303y]] — adjacent ethics discussion.
- [[augmented-reality-bci]] — AR-side BCI integration.
- [[neural-lace-podcast]] — public venue for the surrounding discussion.
- [[self-aware-networks-book]] — book-length statement of the surrounding theory.
- [[micah-blumberg]] — author of the framing.
- [[cortical-columns-reference-frames]] — column-level structure EEG cannot resolve.
- [[cortical-column-oscillatory-transmission]] — transmission EEG only sees as an envelope.
- [[cortical-column-voting]] — distributed evidence aggregation that does not survive scalp averaging.
- [[apical-dendrite]] — element below EEG's spatial resolution.
- [[apical-dendrites]] — predictive-coding substrate below resolution.
- [[thalamo-cortical-information-flow]] — fine-grained flow that EEG cannot fully read.
- [[thalamocortical-network]] — anatomical target the modality cannot directly access.
- [[phase-wave-differentials]] — substrate from which EEG reads only a sum.
- [[dominant-phase-wave-differential]] — the dominance structure EEG cannot resolve.
- [[consciousness-canvas-wave-differential]] — the canvas EEG cannot decode pixel-by-pixel.
- [[tonic-phasic-canvas-of-consciousness]] — the regime-level structure EEG *can* decode.
- [[mental-pixels]] — pixel structure below the ceiling.

## Source Provenance

- Generated: 2026-04-24T18:26:10
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/eeg-bci-limitations.json`
- Evidence count: 0
- Source ids: 

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
