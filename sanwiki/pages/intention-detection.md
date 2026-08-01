# Intention Detection

**Intention Detection** is the [[brain-computer-interface|brain-computer-interface]] capability — sitting downstream of [[eeg-xr-neurofeedback-bci|EEG+XR neurofeedback]] in [[gh-a0206z|Self]]-Aware Networks' BCI vocabulary — of *separating an agent's intentional signals from their reflexive signals* using non-invasive sensor fusion (EEG + eye-tracking + IMU + camera). It is the inference layer over the closed loop "person → neural signal → computer → sensory output → person" that SAN treats as the foundational BCI pattern, and it is the gating step that converts raw biosignal streams into agentic [[brain-computer-interface-neural-readwrite|read/write]] channels.

## Origin

The Intention Detection concept is anchored in the SAN wiki by [[eeg-xr-neurofeedback-bci]], which states the construct directly: "Eye blinks and gaze patterns, when correlated with EEG, allow systems to distinguish **intentional** from reflexive signals — a key step toward emotion and [[intention-detection]] without invasive hardware. VR/AR headsets from multiple vendors already embed the sensor arrays needed; the missing layer is the inference stack" (`eeg-xr-neurofeedback-bci`, line 5, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/eeg-xr-neurofeedback-bci.md)). The same page records that "[[gh-resnote04|Micah]]'s 2012 EEG project demonstrated a working feedback loop in which [[brainwave]] activity drove lights and sounds in real time as a therapeutic meditation aid — an early personal proof-of-concept for [[oscillatory-feedback-circuits]] at the human scale" (`eeg-xr-neurofeedback-bci`, line 7, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/eeg-xr-neurofeedback-bci.md)) — placing the *closed-loop substrate* on which Intention Detection runs at 2012 in [[gh-resnote04|Micah]]'s own track record. The page itself is dated by its own "Notes written ca. 2020–2022" history line, which is therefore the canonical written-anchor window for the term in the SAN wiki record.

## Position

Intention Detection sits at a specific spot in the SAN BCI stack. Below it are the *raw sensor channels* — EEG bands, gaze direction, blink events, heart-rate proxies — that XR hardware exposes. Above it are the *agentic surfaces*: triggering [[neurofeedback|neurofeedback]] events, emitting commands into a [[webxr-bci-integration|WebXR-BCI]] application, or driving the [[clinical-bci-applications|clinical-BCI]] inference path. Intention Detection's job is to apply *correlation across modalities* — eye-blink × EEG, gaze × evoked-potential, IMU × motor-band desynchronization — so that the system can decide that a given burst is *willed* rather than *reflexive*. In SAN-internal terms, this maps onto the more general claim that "every [[neural-array|neural array]] is simultaneously a sensor and an actuator; the EEG+XR setup is the *macroscale* instantiation of this principle" (`eeg-xr-neurofeedback-bci`, line 17, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/eeg-xr-neurofeedback-bci.md)) — i.e. Intention Detection is the macroscale read-out of the same receive → compute → transmit cycle that [[napot|NAPOT]] describes inside a [[cortical-column|cortical column]]. The construct also sits adjacent to [[attention-schema|attention-schema]] readings of agency, [[consciousness-as-neurofeedback-loops|consciousness-as-neurofeedback-loops]], and [[bci-expanded-sensory-range|BCI-expanded sensory range]] in the SAN wiki neighborhood.

## Chronology

The wiki record places the *closed-loop hardware substrate* at 2012 ([[gh-resnote04|Micah]]'s EEG-driven lights-and-sounds meditation aid) and the *written articulation* of Intention Detection in the 2020–2022 SAN BCI notes per the `eeg-xr-neurofeedback-bci` history line. The packet itself is marked `evidence_count: 0` for this slug — meaning Lane B did not surface direct primary-source quotes for the bare term "Intention Detection" — so the claim made here is *cross-page* rather than packet-internal. Mainstream BCI work on intentional-vs-reflexive separation matured publicly in the same 2010s window (P300 spellers, motor-imagery BCIs, eye-tracking-augmented BCIs), so the SAN wiki record positions the construct as *contemporary with* rather than *prior to* mainstream development. Later wiki passes that pull in the [[neural-lace-podcast|Neural Lace]] transcripts, the 2017+ neural-lace meetup notes, and any Lane G podcast/livestream evidence may revise this earliest-mention if [[gh-resnote04|Micah]] voiced Intention-Detection-specific framings on-record before the 2020–2022 notes.

## Post-SAN

Intention Detection's mainstream peers are the BCI-decoder literature on motor-imagery classification (Wolpaw, Pfurtscheller), the P300-speller / SSVEP literature on evoked-potential-based intent (Donchin, Sutter), and the eye-tracking-fused BCI literature that uses gaze as a co-signal (Zander, Kothe). The SAN-side novelty is *not* the inference algorithm — SAN does not propose a specific decoder — but the *systemic framing*: Intention Detection is one specific case of "every neural array is simultaneously a sensor and an actuator" (`eeg-xr-neurofeedback-bci`, line 17), so the same architectural principle that holds inside a [[cortical-column|cortical column]] under [[napot|NAPOT]] holds at the headset-and-EEG scale. The testable consequence is structural: SAN expects intention-vs-reflex separation to *generalize across modalities* in the way receive→compute→transmit cycles do, predicting that adding new sensor streams (heart-rate, respiration, micro-saccade geometry) should improve detector accuracy *additively* rather than redundantly — a claim worth checking against published BCI-fusion ablation studies. The packet contains no `paper-external` evidence in this run, so the comparative wiring above is structural rather than citational; later passes that ingest BCI literature into the Intention-Detection packet should pin specific Wolpaw / Donchin / Zander references against these claims.

## Related concepts

- [[eeg-xr-neurofeedback-bci]] — the parent SAN page that introduces Intention Detection.
- [[neurofeedback]] — the closed-loop substrate Intention Detection runs on top of.
- [[oscillatory-feedback-circuits]] — [[gh-resnote04|Micah]]'s 2012 EEG project sits in this category.
- [[brain-computer-interface]] — the broader BCI context.
- [[brain-computer-interface-neural-readwrite]] — the read/write capability Intention Detection enables.
- [[webxr-bci-integration]] — the WebXR-BCI application surface.
- [[clinical-bci-applications]] — the clinical face of the same inference layer.
- [[bci-expanded-sensory-range]] — the broader SAN BCI vision Intention Detection contributes to.
- [[napot]] — the SAN-internal cycle Intention Detection is the macroscale instantiation of.
- [[neural-array]] — the SAN unit "simultaneously a sensor and an actuator."
- [[attention-schema]] — adjacent agency-modeling framework in the SAN neighborhood.
- [[consciousness-as-neurofeedback-loops]] — adjacent SAN-internal framing of agency.

## Source Provenance

- Generated: 2026-04-24T18:07:01
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/intention-detection.json`
- Evidence count: 0
- Source ids: 

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
