A **brain port** is a bidirectional [[brain-computer-interface|brain-computer interface]] that reads and writes neural activity by discovering and then speaking the brain's transmission protocol — not by brute-force stimulation but by computing the *difference* between the current neural pattern and the target pattern, then injecting only that delta. Introduced publicly in [[neural-lace-podcast|the [[neural-lace|Neural Lace]] Podcast]] (April 2017).

## Core Architecture

Computer vision segments the external world. Medical imaging tools (initially EEG; later fNIRS, Open EIT, multimodal fusion) estimate internal neural state. The brain port bridges them by learning the neural communication protocol. The key design question — raised explicitly in the 2017 transcripts — is whether perception depends on a **TCP-like feedback loop** (ordered, verified, recurrent) or a **UDP-like packet spray** (fast, tolerant of loss). That distinction shapes how a writable interface would sequence its injections and verify delivery.

The proposed interception geometry targets the **thalamus / midbrain convergence zone**: the point where sensory streams converge before and after cortical processing. One transcript specifically proposes sensor access through the nasal canal toward the thalamic base to sample signals both before cortical distribution and after cortical feedback returns. See [[thalamic-convergence-zone]].

## Neural Pattern Difference Writing

The "write" side of [[neural-lace|Neural Lace]] is defined as: compute the pattern present if the target stimulus (glasses, steak, a [[neural-lace|neural lace]] apple) were *really there*, subtract the current thalamic pattern, inject the residual via the transmission protocol. This is not a full percept replay — it is a targeted delta write. The approach already implies that the represented object is inseparable from the criterion set under which it was encountered, anticipating the [[coincidence-as-a-bit]] frame: a virtual apple and a real apple share patterns but diverge in the full criterion context.

## XR + Biosensor Roadmap (2017-2020 public record)

Early [[neural-lace|Neural Lace]] episodes already integrated the neurotech engineering lane:
- EEG-in-VR biofeedback (Muse, Neurable, Microdose VR experiments)
- NerveGear-style full XR with body-modeling and [[gh-a0206z|self]]-identification implications
- Open EIT, multimodal sensor fusion toward low-cost 3D reconstruction
- AI-assisted calibration replacing expensive single-modality imaging

The 2018 Neurohackers material adds a governance dimension: the same stack becomes a surveillance instrument once AI reconstruction quality is high enough to infer images, sounds, and intentions from EEG + eye tracking + tomography. The transcripts explicitly frame this as misalignment with user mental autonomy.

## SAN Lineage

[[neural-lace|Neural Lace]] Brain Port is the public-language precursor to [[self-aware-network]] and [[NAPOT]]. The 2017 framing establishes: perception as a feedback loop (not feed-forward), thalamus as central hub, coincidence detection at the NMDA/dendritic level, and AI-assisted protocol discovery. Later SAN pages formalize the vocabulary; this source is the provenance anchor for the early-public forms of those ideas.

## History

Published on [[neural-lace-podcast|the [[neural-lace|Neural Lace]] Podcast]], April 2017 (first monologue). Material developed through 2020 across EEG-VR demos, Open EIT interviews, and fNIRS episodes. See also [[neural-lace-podcast-archive]] for the full bundle provenance record.
