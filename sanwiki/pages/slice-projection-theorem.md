# Slice Projection Theorem

**The Slice Projection Theorem** — also called the [[fourier-slice-theorem|Fourier Slice Theorem]], Central Slice Theorem, or Projection-Slice Theorem — is the classical result in [[neural-tomography|tomography]] that the one-dimensional Fourier transform of a parallel projection of a function equals a one-dimensional slice through the function's higher-dimensional Fourier transform. Inside [[self-aware-networks|Self-Aware Networks]] it is one of the foundational mathematical levers [[gh-resnote04|Micah]] uses to argue that brain-side processes performing [[bot-biological-oscillatory-tomography|biological oscillatory tomography]] can in principle invert oscillation-data into volumetric reconstructions, alongside [[ndca-non-linear-differential-continuous-approximation|Non-linear Differential Continuous Approximation]] and the broader [[napot-neural-array-phase-tomography|NAPOT]] framework.

## Origin

The earliest recorded mention bound to this slug is in [[gh-gpt2023x|GPT2023X.md]] (line 10132–10162, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md)), where the section explicitly lists "Application in tomography, tractography, photogrammetry, and neural radiance fields" and asserts that "The Fourier Slice Projection Theorem and neural networks have significant applications in various fields such as tomography, tractography, photogrammetr…" (`GPT2023X--md`, line 10140, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md)). The same sentence appears verbatim in [[gh-rexnote02|rexnote02.md]] line 1607 and [[gh-rexnote06|rexnote12.md]] line 2567, embedded in a longer passage that reads: "exploring how foundational principles like [[biological-oscillating-tomography|Biological Oscillating Tomography]] (BOT), the Fourier Slice Projection Theorem, and [[ndca-non-linear-differential-continuous-approximation|Non-linear Differential Continuous Approximation]] ([[ndca]]) converge to deepen our…" — the recurrence across rexnote files indicates [[gh-resnote04|Micah]] treated the theorem as a fixed component of the BOT/NDCA triad.

## Position

In the [[self-aware-networks|SAN]] [[gh-formulation|formulation]] the theorem is not just a citation; it is an enabling step. [[gh-veca|vecA.md]] line 1304 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/vecA.md)) opens a dedicated "Section 3: Fourier Slice Projection Theorem and Neural Processing", indicating [[gh-resnote04|Micah]] treats the slice-projection relation as a bridge between projection-style measurements and the volumetric structure that [[neural-tomography|neural tomography]], [[cellular-oscillating-tomography|cellular oscillating tomography]], and [[napot-tomography-not-holography|phase-tomography (not holography)]] aim to recover. The theorem joins [[ndca-non-linear-differential-continuous-approximation|NDCA]] and [[bot-biological-oscillatory-tomography|BOT]] in [[gh-rexnote02|rexnote02]] (line 1607) and [[gh-rexnote06|rexnote12]] (line 2567) as one of three "foundational principles" — the others handling nonlinearity ([[ndca]]) and the biological substrate (BOT). The application list in [[gh-gpt2023x|GPT2023X]] (line 10140) extends the theorem into [[neural-tomographic-lightfield-rendering|neural radiance fields]], tractography, and photogrammetry, casting it as the shared backbone of inverse-imaging in both engineered and biological systems.

## Chronology

The dated source evidence places these treatments in the [[gh-gpt2023x|GPT2023X]] / rexnote / [[gh-veca|vecA]] cluster on the SAN GitHub repository, dated by the repository commit hash `d1c26a6` referenced in every blob permalink. Precise calendar timestamps are not encoded in this packet's evidence excerpts, but the [[gh-gpt2023x|GPT2023X]] filename and the broader rexnote series anchor the writing to the post-2023 generative-model / neural-radiance-field era — after [[neural-tomographic-lightfield-rendering|neural-radiance-field]] methods became standard in graphics and vision. The mainstream Slice Projection Theorem itself dates to Bracewell's 1956 radio-astronomy use and the Cormack/Hounsfield CT work of the 1960s–70s; [[gh-resnote04|Micah]]'s contribution is not the theorem but its embedding inside [[self-aware-networks|SAN]]'s claim that biological oscillation fields are themselves a tomographic measurement set.

## Post-SAN

Where mainstream tomography uses the slice-projection identity to invert X-ray or MRI projection data on engineered detectors, [[gh-resnote04|Micah]]'s deployment generalises the substrate: the projections in question are oscillatory neural-field measurements ([[bot-biological-oscillatory-tomography|BOT]] / [[cot-cellular-oscillating-tomography|COT]]), and the reconstruction target is the volumetric neural state implicated in [[holographic-brain-distributed-memory|distributed memory]] and the [[brain-as-rendering-engine|rendering-engine]] view of perception. The [[fourier-slice-theorem|Fourier Slice Theorem]] page in this wiki captures the canonical mathematical statement; this page captures its specifically SAN-coupled use. A testable consequence [[gh-resnote04|Micah]]'s framing implies — that brain oscillatory signals carry slice-of-Fourier-transform structure recoverable by phase-tomography ([[napot-neural-array-phase-tomography|NAPOT]]) — diverges from standard neural-coding accounts that do not assume an inverse-imaging substrate, and from the mainstream [[fourier-transform-in-consciousness|Fourier-transform-in-consciousness]] discussions which usually stop at spectral analysis without invoking the projection-slice identity.

## Related concepts

- [[fourier-slice-theorem]] — canonical mathematical statement of the same theorem
- [[bot-biological-oscillatory-tomography]] — BOT, named alongside the theorem in rexnote02/12
- [[ndca-non-linear-differential-continuous-approximation]] — [[ndca]], the third member of the BOT/NDCA/Slice-Projection triad
- [[biological-oscillating-tomography]] — alternate slug for the BOT framing
- [[napot-neural-array-phase-tomography]] — NAPOT, the phase-tomography framework that uses projection-slice reasoning
- [[napot-tomography-not-holography]] — [[gh-resnote04|Micah]]'s argument that the brain does tomography, not holography
- [[cellular-oscillating-tomography]] — cellular-scale companion of BOT
- [[neural-tomography]] — umbrella SAN tomography concept
- [[neural-tomographic-lightfield-rendering]] — neural-radiance-field application named in [[gh-gpt2023x|GPT2023X]] line 10140
- [[neural-array-projection]] — projection-side companion concept
- [[fourier-transform-in-consciousness]] — adjacent SAN spectral construct

## Source Provenance

- Generated: 2026-04-24T18:51:12
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/slice-projection-theorem.json`
- Evidence count: 17
- Source ids: [[gh-gpt2023x|GPT2023X]]--md, rexnote02--md, rexnote12--md, [[gh-veca|vecA]]--md
  - `GPT2023X--md` line 10132 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 10140 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 10144 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 10162 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 11697 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `rexnote02--md` line 1607 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/rexnote02.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
