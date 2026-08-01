# Hemo Encephalography

**Hemo-Encephalography (HEG)** is the brain-imaging / [[eeg-biofeedback-self-reflective-loop|biofeedback]] technique covered by US patent (Hershel Toomim and Robert Marsh, 1999) that measures hemodynamic activity through the scalp — adjacent to but distinct from [[fnirs-brain-imaging|fNIRS]] (functional near-infrared spectroscopy). Inside [[self-aware-networks|Self-Aware Networks]] HEG appears as the technology background for [[micah-blumberg|Micah]]'s 2017–2018 [[neural-lace-podcast|Neural Lace Podcast]] season 2 episode 4 conversation with Jonathan Toomim — Hershel Toomim's grandson — making HEG one of the prior-art techniques in the [[bci-industry-landscape|BCI/neurotech industry-landscape]] backdrop SAN engages with.

## Origin

The packet's single evidence anchor at `a0371z--md`, line 8 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0371z.md)) writes: "To learn more about FNIRS in this podcast I spoke to Jonathan Toomim who was in a valid sense grandfathered into it. His grandfather, the late Hershel Toomim and Robert Marsh were awarded the US patent on HEG Hemo-Encephalography in 1999." The same note at lines 3–6 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0371z.md)) anchors the conversation as "The [[neural-lace-podcast|Neural Lace Podcast]] Season 2 Episode 4 ... recorded just over a week before Jonathan Toomim will give a talk about FNIRS at NeurotechX in San Francisco at the Red Victorian Experimental Hotel." The note also states the *practical* purpose at line 11: "What can neurotech enthusiasts and neuroscientists do today with FNIRS? Answer: Biofeedback, and pure measurement (like a poor man's FMRI.)" — which by Toomim-grandfather/grandson family link extends to the same use-cases for HEG. The packet's evidence count is 1, so chronological priority over the 1999 HEG patent is not claimed; HEG is external prior art SAN encounters via the Toomim line.

## Position

SAN's position composes two claims that integrate HEG into the broader corpus. First, HEG is part of the *historical neurotech-biofeedback prior art* lineage that [[micah-blumberg|Micah]]'s 2012–2014 [[eeg-biofeedback-self-reflective-loop|EEG-biofeedback]] service (`a0249z--md`, lines 47–58 in the broader corpus) connects to: HEG — like Len Ochs's EEG protocols — represents an earlier generation of measurement-driven biofeedback technique that anticipates the [[eeg-xr-neurofeedback-bci|EEG + XR neurofeedback BCI]] integration SAN advocates for. Second, HEG sits adjacent to [[fnirs-brain-imaging|fNIRS]] in the optical-hemodynamic-imaging family that the `a0371z` podcast episode discusses: HEG measures slow hemodynamic responses through the scalp, fNIRS measures similar signals but with near-infrared optics — both are read in SAN as low-spatial-resolution, slow-temporal-resolution windows on cortical activity that can serve as cheap biofeedback substrates and "poor man's fMRI" tools (`a0371z--md`, line 11). The position implies that [[neuro-feedback|neurofeedback]] modalities should be modality-stacked: HEG/fNIRS for slow hemodynamic signatures, EEG for fast electrical, [[inter-brain-eeg-synchronization|inter-brain]] sync where applicable, with [[neuropype|Neuropype]]-style time-synchronized fusion delivering the multimodal signal that an [[eeg-xr-neurofeedback-bci|EEG + XR neurofeedback BCI]] system can use.

## Chronology

The HEG patent (Hershel Toomim and Robert Marsh) is dated 1999 (`a0371z--md`, line 8); SAN does not claim chronological priority over it. The SAN engagement is timestamped via the [[neural-lace-podcast|Neural Lace Podcast]] Season 2 Episode 4 recording in `a0371z--md`, lines 3–6, which sits in the 2017–2018 podcast period. The same Neural-Lace-Podcast era includes the [[hack-days-sf-neural-lace-2018|2018 hack-day series]] and the broader [[bci-industry-landscape|BCI industry landscape]] survey work. Recovering Lane G transcript or dated-note evidence would be needed to date [[gh-resnote04|Micah]]'s earliest written engagement with HEG; the 1999 patent date is the upper bound on the technology itself but says nothing about [[gh-resnote04|Micah]]'s engagement timeline.

## Post-SAN

Mainstream neurotech treats HEG as a niche biofeedback modality used clinically for ADHD, migraine, and [[attention]] training, with limited research-side adoption compared to fNIRS or EEG. SAN's reading converges with the practitioner-community framing — HEG as cheap, scalp-mounted hemodynamic biofeedback — and adds the integration claim: HEG belongs in the multimodal sensor-fusion stack ([[neuropype|Neuropype]]-style), alongside [[fnirs-brain-imaging|fNIRS]] and [[eeg-vr-biofeedback|EEG-VR biofeedback]], to give the [[eeg-xr-neurofeedback-bci|EEG + XR neurofeedback BCI]] system a complete picture. There is no testable SAN-specific prediction at the HEG level distinct from mainstream — the SAN-specific claim is at the *integration* and *biofeedback-loop* level, where HEG is one input channel among several in a [[continuous-neural-rendering|continuous-rendering]] feedback architecture.

## Related concepts

- [[fnirs-brain-imaging]] — fNIRS, the close-cousin optical-hemodynamic technique discussed alongside HEG in `a0371z`.
- [[neural-lace-podcast]] — podcast series in which Jonathan Toomim was interviewed about HEG/fNIRS.
- [[eeg-biofeedback-self-reflective-loop]] — EEG biofeedback, the broader biofeedback family HEG belongs to.
- [[neuropype]] — Tim Mullen's multimodal-sensor-fusion software for time-synchronised biofeedback.
- [[neo-mind-cycle-neurofeedback]] — [[gh-resnote04|Micah]]'s neurofeedback service that a multimodal HEG/fNIRS/EEG stack would extend.
- [[neo-mind-cycle]] — broader [[neo-mind-cycle|Neo Mind Cycle]] programme.
- [[eeg-vr-biofeedback]] — EEG-VR biofeedback companion concept.
- [[eeg-xr-neurofeedback-bci]] — [[eeg-xr-neurofeedback-bci|EEG + XR neurofeedback BCI integration]] concept.
- [[bci-industry-landscape]] — [[bci-industry-landscape|BCI industry landscape]] survey.
- [[brain-machine-interface]] — broader BMI/BCI companion.
- [[continuous-neural-rendering]] — continuous-rendering frame for biofeedback loops.
- [[brain-as-rendering-engine]] — brain-as-rendering-engine companion concept.
- [[micah-blumberg]] — author whose [[neural-lace|Neural Lace]] Podcast episode is the SAN source for HEG context.

## Source Provenance

- Generated: 2026-04-24T18:07:01
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/hemo-encephalography.json`
- Evidence count: 1
- Source ids: [[gh-a0371z|a0371z]]--md
  - `a0371z--md` line 8 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0371z.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
