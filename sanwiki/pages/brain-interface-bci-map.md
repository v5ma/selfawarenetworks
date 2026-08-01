# Brain.Interface - BCI Industry Map

![Brain-computer interface taxonomy separating implanted recording and stimulation, external recording modalities, external stimulation, decoding, and validated closed-loop biofeedback](/v5ma.github.io/wiki/assets/generated/san/brain-interface-bci-map/bci-read-write-close-loop-map-20260712-v2.png)

This medical-textbook plate separates where an interface touches the nervous system from what the resulting signal can support. Implanted recording and stimulation, external recording, external stimulation, decoding, and closed-loop validation are distinct operations. A device can record or perturb neural activity without automatically reading or writing a neural code.

The recovered legacy **Brain.Interface** page is the BCI industry-tracking map Micah maintained alongside the SAN neural-lace program. It organizes the landscape by access route and modality: implanted ECoG, intracortical arrays, stent electrodes, and DBS; external EEG, MEG, fNIRS/HD-DOT, fMRI, and EIT; and non-invasive stimulation through TMS, tDCS/tACS, and ECT. Its analysis layer also names Neuropype and PCA, showing that the map covers signal interpretation as well as hardware.

The key engineering distinction is **read != decode != write**. Each recording modality measures different physics and requires its own inverse model. Each stimulation modality requires a forward model, anatomical targeting, dose control, and safety validation. A closed loop is established only when a measured change follows a controlled intervention and the result survives artifact controls, calibration, and held-out testing.

Within SAN, this taxonomy is an implementation route map rather than proof of NAPOT. BCI evidence can constrain candidate neural state estimates and test interventions, but phase-wave tomography would still require receiver-relative timing, held-out reconstruction, intervention, and falsification. The page therefore connects practical neural-lace work to [[brain-computer-interface-neural-readwrite]], [[eeg-xr-neurofeedback-bci]], [[fnirs-brain-imaging]], and [[augmented-reality-bci]] without collapsing current BCI capability into the later SAN hypothesis.

## Related concepts

- [[gh-map-brain-interface]] - legacy GitHub-side BCI map.
- [[bci-industry-landscape]] - curated vendor and modality companion.
- [[brain-computer-interface]] - umbrella interface concept.
- [[brain-computer-interface-neural-readwrite]] - read/write translation boundary.
- [[neuralink-ethics-panel-b0303y]] - implant-line ethics and governance.
- [[eeg-xr-neurofeedback-bci]] - non-invasive XR feedback loop.
- [[fnirs-brain-imaging]] - optical hemodynamic measurement branch.
- [[bci-expanded-sensory-range]] - long-horizon capability axis.
- [[cognitive-privacy-xr-bci]] - privacy and inference boundary.
- [[artificial-telepathy-via-oscillatory-synchrony]] - speculative endpoint requiring separate evidence.

## Source Provenance

- Recovered source page: [Brain.Interface - BCI Industry Map](brain-interface-bci-map.md)
- Legacy archive: `wiki/reference/selfawarenetworks-legacy-wiki/Brain.Interface.md`
- Original public route: `https://github.com/v5ma/selfawarenetworks/wiki/Brain.Interface`
- First published: August 4, 2022
- Source type: public GitHub wiki taxonomy
- Historical packet: `wiki/automation/packets/brain-interface-bci-map.json`

---

*Source recovery and medical-visual update: 2026-07-12.*
