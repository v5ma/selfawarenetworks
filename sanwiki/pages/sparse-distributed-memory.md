# Sparse Distributed Memory

**Sparse [[distributed-memory|Distributed Memory]]** (SDM) is the high-dimensional, address-by-content memory model originally formulated by Pentti Kanerva, and the form of representation [[self-aware-networks|Self-Aware Networks]] adopts at the synaptic level — including its [[napot-revision-2-exit-terminal-sdr|SDR (Sparse Distributed Representation)]] variant in NAPOT 2 — to bind perceptions, predictions, and motor outputs into a single retrieval-and-projection substrate. In the SAN treatment, SDM is not a static recall mechanism: arrays of [[cortical-column-as-display|cortical columns]] perform "[[memory-prediction-cycle|memory-prediction]]-rendering" on sparse codes, and motor outputs ([[predictive-motor-self-model|predictive motor self-model]]) are themselves stored as sparse distributed memories that project through [[oscillatory-synchronization|oscillatory synchronization]].

## Roots

The earliest passage explicitly bound to this slug is on `a0001z--md` line 137 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md)), which names the source: "Sparse [[distributed-memory|Distributed Memory]] by Pentti Kanerva: The idea of individual synaptic modification is consistent with the concept of Sparse Distribut[ed Memory]…". [[gh-resnote04|Micah]] introduces the same construct one revision earlier in `a0007z--md` line 517 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0007z.md)): "In NAPOT 2 I explored how inhibited & excited synapses might represent sparse [[distributed-memory|distributed memory]]-predictions or SDR Sparse Distributed Representations, that might be stored in a synaptic configuration in the inc…" — situating SDM/SDR at the synaptic-configuration level inside [[napot-revision-2-exit-terminal-sdr|NAPOT 2]]. The `a0287zstar--md` line 122 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0287zstar.md)) anchors the SDR usage to Numenta's terminology — "high level sparse [[distributed-memory|distributed memory]] or sparse distributed representation (SDR, Numenta)" — joining Kanerva's original SDM to [[jeff-hawkins|Hawkins]]'s [[memory-prediction-framework|memory-prediction framework]] / Numenta lineage as the two upstream sources [[gh-resnote04|Micah]] is citing.

## Position

Inside [[self-aware-networks|SAN]], SDM is the substrate on which the whole [[brain-as-memory-prediction-machine|memory–prediction machine]] runs. `09san--md` line 92 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/09san.md)) states the embedding directly: "[memory-prediction] is explicitly incorporated into the [[self-aware-networks-theory|Self Aware Networks theory]]¹, with [[neural-arrays|neural arrays]] performing sparse [[distributed-memory|distributed memory]]-[[prediction]]-rendering¹⁹. This contrasts slightly with some prior descriptions but…" — making "memory-[[prediction]]-rendering" a single fused operation, not three. `a0319z--md` line 39 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0319z.md)) extends the same machinery to motor output: "Distributed Muscle Output: Learned & high coordinated muscle movement is also stored as a Sparse [[distributed-memory|Distributed Memory]] that when activated projects, and via [[oscillatory-synchronization|oscillatory synchronization]] the projections of many…" — generalising SDM from perception/recall into action. The synaptic locus is reaffirmed by [[gh-resnote04|Micah]]'s note on the changelog (`00changelog--md` line 482) and the README, treating SDM/SDR at the synaptic configuration as one of the load-bearing claims of his [[napot-theory|NAPOT theory]].

## Chronology

Mainstream SDM dates to Kanerva's 1988 monograph; Numenta's SDR variant, attributed to [[jeff-hawkins|Hawkins]]'s lab, came online roughly 2005–2010. [[gh-resnote04|Micah]]'s incorporation of SDM/SDR into NAPOT is dated to "NAPOT Revision 2" per `a0001z--md` line 137 and `a0007z--md` line 517, with `a0325zNAPOT6` recording NAPOT-6-era references and `a0287zstar` cementing the SDR-Numenta linkage. The repository commit `d1c26a6` anchors all evidence to a single SAN GitHub snapshot. The `GPT2023X--md` and `GPT2024Jan1toJan22--md` mentions tag the construct as still active in [[gh-resnote04|Micah]]'s 2023–2024 writing, and the README inclusion suggests SDM is a top-level entry-point claim of the SAN project rather than a stray reference.

## Post-SAN

In published cognitive-science and AI work, [[jeff-hawkins|Hawkins]]'s SDR is the canonical operationalisation of Kanerva's SDM at the cortical-column level, and the [[memory-prediction-framework|memory-prediction framework]] supplies its dynamic substrate. [[gh-resnote04|Micah]]'s SAN treatment differs in two specific ways: (1) it fuses SDM with [[brain-as-rendering-engine|rendering]] (the "memory-[[prediction]]-rendering" triad in `09san` line 92), arguing that retrieval *is* a projection step inside [[continuous-neural-rendering|continuous neural rendering]] / [[neural-tomographic-lightfield-rendering|neural-tomographic lightfield rendering]] — not just a read; and (2) it routes SDM through [[cortical-column-oscillatory-synchronization|oscillatory synchronization]] across [[cortical-columns-reference-frames|cortical columns]] for both perception and motor output (`a0319z--md` line 39). The testable consequence is that motor traces, like perceptual ones, should exhibit sparse-distributed coding statistics that can be activated by oscillation-locked retrieval — a bridge between SDM and [[cortical-traveling-waves|cortical traveling waves]] not made by Kanerva or Numenta on their own.

## Related concepts

- [[napot-revision-2-exit-terminal-sdr]] — NAPOT-2 incorporation of SDR/SDM at the synaptic level, named directly in `a0007z--md` line 517
- [[napot-theory]] — the umbrella NAPOT framework that hosts SDM
- [[napot-overview]] — companion overview page
- [[memory-prediction-framework]] — Hawkins-side framework SDM is paired with
- [[brain-as-memory-prediction-machine]] — the [[prediction]]-machine model SDM runs on
- [[memory-prediction-cycle]] — cyclic memory-[[prediction]] process SDM participates in
- [[brain-as-rendering-engine]] — third member of the memory-[[prediction]]-rendering triad
- [[continuous-neural-rendering]] — rendering substrate the SDM read becomes a projection into
- [[neural-tomographic-lightfield-rendering]] — adjacent rendering page
- [[cortical-column-as-display]] — display-side framing of the [[cortical-column|cortical column]]
- [[cortical-columns-reference-frames]] — reference-frame organisation of [[cortical-columns|cortical columns]]
- [[cortical-column-oscillatory-synchronization]] — synchronization mechanism the `a0319z` motor-SDM passage invokes
- [[jeff-hawkins]] — author of the Numenta SDR lineage
- [[holographic-brain-distributed-memory]] — alternate distributed-memory framing
- [[predictive-motor-self-model]] — motor counterpart of perceptual SDM

## Source Provenance

- Generated: 2026-04-24T18:12:00
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/sparse-distributed-memory.json`
- Evidence count: 23
- Source ids: 00changelog--md, [[gh-09san|09san]]--md, [[gh-gpt2023x|GPT2023X]]--md, [[gh-gpt2024jan1tojan22|GPT2024Jan1toJan22]]--md, NotebookML_6_Collection--md, README--md, a0001z--md, a0007z--md, a0287zstar--md, a0319z--md, a0324z--md, a0325zNAPOT6--md, [[gh-a0644z|a0644z]]--md, b0123y--md, [[gh-veca|vecA]]--md
  - `00changelog--md` line 482 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/00changelog.md
  - `09san--md` line 92 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/09san.md
  - `09san--md` line 113 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/09san.md
  - `09san--md` line 171 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/09san.md
  - `a0001z--md` line 137 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md
  - `a0007z--md` line 517 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0007z.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
