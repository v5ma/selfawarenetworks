# Sparse Distributed Representations

**Sparse Distributed Representations (SDRs)** are the high-dimensional, mostly-zero binary codes — a 1 marks an active neuron, a 0 marks inactivity — that [[self-aware-networks|Self-Aware Networks]] adopts as its canonical representational format at the synaptic and ensemble level, both for perceptual binding and for stored motor programs. In [[gh-resnote04|Micah]]'s framework SDRs are not used in isolation: [[08san|08san]] line 94 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/08san.md)) groups them with [[computational-phase-synchronization|sparse ensemble phase synchrony]] under a single bound mechanism, and [[09san|09san]] line 84 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/09san.md)) lists them alongside [[bot-biological-oscillatory-tomography|oscillatory tomography]], [[magnetic-phase-field|phase fields]], and the [[dominant-phase-wave-differential|persistence of dominant rhythms]] as the four mechanisms by which [[self-aware-networks|SAN]] explains short-window neural binding.

## Roots

The deepest pre-SAN root in this packet is `house-dlfolder--NNBrainFunc-1997` (line 9906, note, 1997), an external 1997 neural-network/brain-function reference noting "sparse distributed representations with low redundancy to be learned" — placing the underlying idea decades before [[gh-resnote04|Micah]]'s own framework absorbed it. [[gh-resnote04|Micah]]'s own contact with the construct begins on `a0001z--md` line 57 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md)): "The idea with sparse distributed representations is that is that you get a 1 when a neuron is active and a 0 when its not." The same file at line 96 names the canonical paper [[gh-resnote04|Micah]] is reading from — "*Properties of Sparse Distributed Representations and their Application to [[hierarchical-temporal-memory|Hierarchical Temporal Memory]]* via Subutai Ahmad and [[jeff-hawkins|Jeff Hawkins]], Numenta" — locating the SAN adoption inside the [[hierarchical-temporal-memory|Hierarchical Temporal Memory]] / [[jeff-hawkins|Jeff Hawkins]] / Numenta lineage rather than the older Kanerva [[sparse-distributed-memory|Sparse Distributed Memory]] tradition.

## Position

Inside [[self-aware-networks|SAN]], SDRs are positioned as a *substrate* on which other mechanisms run, not as a complete account of representation. [[08san|08san]] line 98 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/08san.md)) gives the standard properties — "the strong activation of a relatively small subset of neurons out of a larger population. Such Sparse Distributed Representations (SDRs) offer several advantages, including high memory capacity, energy efficiency, and improved pattern…" — but [[08san|08san]] line 96 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/08san.md)) immediately goes further, treating "a given 'shape' [as] not one big pattern but a superposition of sparse, temporally aligned subpatterns" — i.e., SDRs are read out under temporal alignment, not as static codes. [[09san|09san]] line 144 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/09san.md)) makes this explicit by chaining "[[bot-biological-oscillatory-tomography|oscillatory tomography]] generating 3D phase fields, sparse distributed representations, the projection and dimensional unfolding of phase patterns, and the persistence of [[dominant-phase-wave-differential|Dominant Phase Wave Differential]]" rhythms as a single shape-encoding pipeline. `a0007z--md` line 517 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0007z.md)) places the storage substrate at the synapse — "inhibited & excited synapses might represent sparse [[distributed-memory|distributed memory]]-predictions or SDR Sparse Distributed Representations, that might be stored in a synaptic configuration in the [[inceptive-field|inceptive field]] of the exit terminal or apical d…" — and `a0325zNAPOT6--md` line 64 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0325zNAPOT6.md)) generalises SDRs to motor: "the [[actions]] are SDR Sparse Distributed Representations of [[actions]], and like a piano they can be activated in any sequence". [[a0186z|a0186z]] line 53 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0186z.md)) traces the developmental sequence: "the initial memory was spatial/temporal relationships, then sparse distributed representations, then individualized [[grandmother-neuron|grandmother neurons]] complexified to" — situating SDRs between low-level relations and the [[grandmother-neuron|grandmother-neuron]] / [[layer-6-grandmother-neuron|layer-6 grandmother-neuron]] strata.

## Chronology

External literature attaches the idea to neural-network / connectionism work from at least 1997 (`NNBrainFunc-1997`, line 9906) and brings it into engineered systems through Numenta's "Path to Machine Intelligence" white paper, which states bluntly that "the language of the neocortex is sparse distributed representations" (`Numenta_-_Path_to_Machine_Intelligence_White_Paper`, line 195, paper-external). [[gh-resnote04|Micah]]'s incorporation runs through the [[hierarchical-temporal-memory|HTM]] / Numenta path explicitly cited in `a0001z--md` line 96 and on `a0616z--md` line 123 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0616z.md)): "Sparse Distributed Representations https://numenta.com/assets/pdf/biological-and-machine-intelligence/BaMI-SDR.pdf". The repository commit `d1c26a6` and the recurrence in `GPT2023X--md` (line 197) and `GPT2024Jan1toJan22--md` (line 130) tag this as still-active in [[gh-resnote04|Micah]]'s 2023–2024 writing. SAN's distinctive contribution is not the SDR construct itself — it is the *coupling* of SDRs to oscillatory phase fields and tomographic projection, attested as a single mechanism in [[08san|08san]] (line 124, the sparse-ensemble-phase-synchrony / SDRs binding-mechanism table row) and [[09san|09san]] (line 84).

## Post-SAN

The Numenta white paper (line 199) emphasises that "Sparse distributed representations have important and surprising properties that only recently have been understood well", and it gives the engineered-AI use of SDRs without coupling them to oscillation. SAN's testable departure is articulated in `a0449z--md` line 6 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0449z.md)): "Neurons are transmitting multi-dimensional waves that have frequencies and amplitudes. Far more information is transmitted than is realized in Grok's one dimensional sparse distributed representations made up of one's and zeros." That is — SDRs are necessary but not sufficient; the multi-dimensional oscillatory channel ([[bot-biological-oscillatory-tomography|BOT]], [[magnetic-phase-field|phase fields]], [[dominant-phase-wave-differential|dominant-phase-wave differential]]) carries information the binary 1/0 SDR alone cannot. The `vecB--md` line 4934 mention — "[[cortical-columns|Cortical columns]] perform spatial pooling to recognize patterns and form sparse distributed representations (SDRs)" ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/vecB.md)) — confirms SAN keeps the [[cortical-column-voting|cortical-column]] spatial-pooling story but extends it through phase. `a0402z--md` line 4 ([on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0402z.md)) frames SDRs as the substrate of "generalizing delusion[s]…formed from the [[brainwave]] output of hundreds of thousands of [[pyramidal-cell|pyramidal cells]]", a phenomenological consequence of the binding picture not present in the Numenta original.

## Related concepts

- [[sparse-distributed-memory]] — Kanerva-lineage parent construct paired with SDR throughout [[gh-resnote04|Micah]]'s writing
- [[hierarchical-temporal-memory]] — Hawkins/Numenta framework that contributed SDR to SAN
- [[jeff-hawkins]] — Numenta lead, repeatedly cited as the SDR source
- [[napot-revision-2-exit-terminal-sdr]] — NAPOT-2 page where SDRs land at the exit-terminal SDR storage site
- [[napot-theory]] — NAPOT umbrella that hosts the SDR-storage claim
- [[bot-biological-oscillatory-tomography]] — BOT, paired with SDRs in the [[gh-09san|09san]] binding mechanism list
- [[dominant-phase-wave-differential]] — fourth mechanism in the same [[gh-09san|09san]] pipeline
- [[magnetic-phase-field]] — phase-field substrate the 3D rendering passes through
- [[computational-phase-synchronization]] — sparse ensemble phase synchrony, paired with SDRs in [[gh-08san|08san]] §3.2
- [[cortical-column-voting]] — cortical-column spatial-pooling site of SDR formation per vecB
- [[cortical-column-as-display]] — display-side framing of the [[cortical-column|cortical column]]
- [[grandmother-neuron]] — endpoint of the developmental sequence in [[gh-a0186z|a0186z]] line 53
- [[layer-6-grandmother-neuron]] — layer-specific grandmother-neuron page
- [[pyramidal-cell]] — substrate cell named in [[gh-a0402z|a0402z]] line 4
- [[apical-pyramidal-neurons]] — adjacent pyramidal-neuron page
- [[memory-prediction-framework]] — framework SDRs operationalise on the [[prediction]] side
- [[memory-prediction-cycle]] — cyclic memory-[[prediction]] process the SDR participates in
- [[brain-as-memory-prediction-machine]] — base [[prediction]]-machine model
- [[engram]] — closely-related representational construct
- [[hebbian-engrams]] — Hebbian-[[engram]] companion page
- [[memories-as-attractors]] — [[attractor]]-side framing of stored representations

## Source Provenance

- Generated: 2026-04-24T17:41:38
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/sparse-distributed-representations.json`
- Evidence count: 29
- Source ids: [[gh-08san|08san]]--md, [[gh-09san|09san]]--md, [[gh-gpt2023x|GPT2023X]]--md, [[gh-gpt2024jan1tojan22|GPT2024Jan1toJan22]]--md, NotebookML_6_Collection--md, a0001z--md, a0007z--md, [[gh-a0186z|a0186z]]--md, a0325zNAPOT6--md, [[gh-a0402z|a0402z]]--md, [[gh-a0449z|a0449z]]--md, a0616z--md, b0010y--md, [[gh-b0103ywhisper|b0103ywhisper]]--md, original_archived_b0103ytimecode--md, vecB--md
  - `08san--md` line 84 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/08san.md
  - `08san--md` line 94 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/08san.md
  - `08san--md` line 96 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/08san.md
  - `08san--md` line 98 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/08san.md
  - `08san--md` line 124 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/08san.md
  - `09san--md` line 84 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/09san.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
