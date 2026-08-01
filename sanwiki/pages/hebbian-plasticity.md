# Hebbian Plasticity

![Hebbian plasticity coincidence write diagram](/v5ma.github.io/wiki/assets/generated/san/hebbian-plasticity/hebbian-plasticity-coincidence-write-20260628-v3.png)

This image frames Hebbian plasticity as SAN's local write mechanism: correlated pre/post activity opens a synaptic gate, molecular plasticity changes the future weight of that address, and phase-pattern context helps determine which coincidence becomes a persistent trace.

**Hebbian Plasticity** is the synapse-level learning rule — popularly summarized as *"cells that fire together, wire together"* — by which simultaneous pre- and post-synaptic activity strengthens the connection between neurons. Within [[self-aware-networks|Self-Aware Networks]] it is the molecular and structural substrate that turns transient [[coincidence-detection|coincidence detection]] into the persistent wiring required for [[brain-as-memory-prediction-machine|memory-prediction]] and ongoing [[brain-plasticity|brain plasticity]].

## Origin

The packet for this entry is drawn entirely from the SAN GitHub corpus (`source_lane: "A"`); no pre-2013 transcripts appear in the evidence set, so the conceptual origin in the historical record remains Donald Hebb's 1949 *Organization of Behavior*. Where SAN takes the idea up — in the [[gh-07san|07san]] manuscript and adjacent notes — Hebbian plasticity is treated as the *implementation layer* beneath [[gh-resnote04|Micah]]'s higher-order claim that the [[coincidence-as-a-bit|coincidence is the elemental bit]] of cortical computation. The earliest SAN-side framing in the packet sits in `resnote02--md`, which catalogs Hebbian plasticity alongside other learning rules: *"…rules that describe how synaptic strengths are adjusted during learning. Common learning rules include Hebbian plasticity (cells that fire together, wire together), as well as more nuanced models like…"* (`resnote02--md`, line 35, [[gh-07san|on github]]). That positioning — Hebb as one rule among many that operationalize coactivation — is the SAN starting point and threads forward into [[bistable-synaptic-plasticity|bistable synaptic plasticity]], [[ltp-structural-memory-encoding|LTP-mediated structural memory encoding]], and [[single-cell-hebbian-assembly|single-cell Hebbian assemblies]].

## Position

Within [[gh-a0206z|Self]]-Aware Networks, Hebbian plasticity is *not* the explanation of learning but the substrate that lets [[coincidence-detection|coincidence detection]] leave a trace. The `b0003y--md` note states the SAN reframing directly: *"Hebbian plasticity and sync: The overlap between these concepts provides insights into how neural synchronization might underpin learning and memory processes"* (`b0003y--md`, line 93, [[gh-07san|on github]]). The [[gh-gpt2023x|GPT2023X]] thread expands the same point in the language of [[pattern-neurons|pattern neurons]] and [[dendritic-coincidence-detection|dendritic coincidence detection]]: *"Neurons Firing Together: The principle 'neurons that fire together wire together' relates to Hebbian plasticity, where simultaneous activation strengthens the connection between neurons. This principle is akin…"* (`GPT2023X--md`, line 13540, [[gh-07san|on github]]). The longer `Hex_7--md` note draws the bridge to the physics of [[cortical-traveling-waves|cortical traveling waves]] and [[brainwave|brainwave]] coupling: *"There is some interesting overlap in the concept of Hebbian plasticity and the physics of Sync. The phrase normally attributed to Hebbian plasticity is 'cells that fire together wire together,'"* (`Hex_7--md`, line 1767, [[gh-07san|on github]]). In the SAN reading, the coactivation that Hebb described as a local synaptic event is reframed as a *phase-locking event* across [[cortical-columns|cortical columns]], so that Hebbian strengthening is what *records* the [[cortical-column-voting|column-vote]] consensus of a [[coincidence-pattern-neural-bit|coincidence-pattern bit]]. The same `NotebookML_6_Collection--md` collation reiterates the bridge from coactivation to wiring: *"Neurons Firing Together: The principle 'neurons that fire together wire together' relates to Hebbian plasticity, where simultaneous activation strengthens the connection between neurons"* (`NotebookML_6_Collection--md`, line 784, [[gh-07san|on github]]). Hebbian plasticity in SAN therefore plays a *bookkeeping* role: the [[chemical-synapse|chemical synapse]] is where the [[action-potential|action-potential]]-level coincidence becomes a stable [[memory-as-regenerable-pattern|regenerable pattern]].

## Chronology

The packet's evidence is undated within the GitHub repo, so the SAN side of the story is anchored to the manuscript's commit history at `d1c26a6` rather than to a year. Outside that, the chronology is well-established: Hebb's original conjecture appears in *The Organization of Behavior* (1949); LTP is reported in the dentate gyrus by Bliss and Lømo (1973); STDP timing windows are characterized by Markram, Bi and Poo in 1997–1998; and Eric Kandel's molecular dissection of long-term facilitation in *Aplysia* — the line that the SAN draft credits as the *"molecular toolkit for understanding how Hebbian plasticity is implemented"* — wins the 2000 Nobel Prize. The SAN repositioning of these results as a *substrate for [[coincidence-detection|coincidence detection]] in [[cortical-columns|cortical columns]]* is the contribution the manuscript makes; that framing converges with later distributed-coding work in [[adaptive-resonance-theory|adaptive resonance theory]] and the [[brain-as-memory-prediction-machine|memory-prediction]] tradition.

## Post-SAN

Mainstream synaptic-plasticity literature treats Hebbian rules as one component of a broader plasticity stack — paired with homeostatic scaling, [[inhibitory-interneurons-plasticity-gating|inhibitory gating]], and [[bistable-synaptic-plasticity|bistable consolidation]] — and supports it with the molecular machinery of NMDA-receptor-gated calcium influx, [[camkii|CaMKII]] autophosphorylation, and PKMζ maintenance ([[kibra-pkm-zeta-memory-anchor|see KIBRA / PKMζ memory anchor]]). The SAN treatment differs from the mainstream stack in two testable ways. First, it predicts that the *event being recorded* is not a generic coactivation but a specific [[coincidence-pattern-neural-bit|coincidence-pattern bit]] resolved by [[dendritic-coincidence-detection|dendritic coincidence detection]] inside a [[dendritic-leaky-membrane-coincidence-filter|leaky-membrane filter]] — so the synaptic potentiation should track the *pattern identity*, not just the firing rate. Second, by binding Hebbian wiring to [[cortical-traveling-waves|cortical traveling waves]] and [[cortical-column-oscillatory-collaboration|cortical-column oscillatory collaboration]], SAN predicts that the strength of a Hebbian update should be modulated by the *phase relationship* between pre- and post-synaptic activity at the column-traveling-wave timescale, not only at the millisecond STDP window. Where the mainstream synaptic-plasticity literature converges with SAN is in [[ltp-tempo-spatial-rhythmic-memory|LTP as a tempo-spatial rhythmic memory trace]] and in [[multi-vesicle-release-spatial-encoding|multi-vesicle release spatial encoding]] — both reformulate Hebbian wiring as a structured, addressable storage mechanism rather than a scalar weight bump.

## Related concepts

- [[coincidence-detection]] — the SAN-elemental event that Hebbian plasticity records as a persistent wiring change.
- [[coincidence-as-a-bit]] — the higher-order claim that a single coincidence is the cortical bit; Hebbian plasticity is what writes it to disk.
- [[coincidence-pattern-neural-bit]] — the patterned coincidence that Hebbian wiring tags with an addressable identity.
- [[dendritic-coincidence-detection]] — the dendritic locus where Hebbian-eligible coincidence is computed.
- [[dendritic-leaky-membrane-coincidence-filter]] — the membrane-level filter that selects which coincidences get to drive Hebbian updates.
- [[single-cell-hebbian-assembly]] — the assembly-level structure built from repeated Hebbian wiring events.
- [[ltp-structural-memory-encoding]] — the structural-encoding flavor of long-term potentiation that SAN treats as Hebbian consolidation.
- [[ltp-bouton-synaptic-memory-traces]] — bouton-scale evidence for Hebbian-driven structural memory traces.
- [[ltp-tempo-spatial-rhythmic-memory]] — the rhythm-locked extension of Hebbian LTP central to the SAN reading.
- [[bistable-synaptic-plasticity]] — the bistable refinement of Hebbian update rules.
- [[camkii-microtubule-ltp]] — the molecular link between [[camkii]], microtubules, and Hebbian-driven LTP.
- [[kibra-pkm-zeta-memory-anchor]] — the maintenance pathway that lets Hebbian potentiation outlast hours.
- [[inhibitory-interneurons-plasticity-gating]] — the gating logic that decides which Hebbian-eligible events actually get written.
- [[brain-plasticity]] — the system-level consequence of repeated Hebbian updates.
- [[cortical-plasticity]] — the cortical-scale shape of Hebbian-driven reorganization.
- [[adaptive-resonance-theory]] — Grossberg's parallel framing of resonant learning that converges with Hebbian-coincidence accounts.
- [[brain-as-memory-prediction-machine]] — the prediction-machine framing in which Hebbian wiring stores expected coincidences.
- [[cortical-column-voting]] — the column-level consensus that Hebbian strengthening records.

## Source Provenance

- Generated: 2026-04-24T18:32:04
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/hebbian-plasticity.json`
- Evidence count: 17
- Source ids: [[gh-07san|07san]]--md, [[gh-gpt2023x|GPT2023X]]--md, Hex_7--md, NotebookML_6_Collection--md, b0003y--md, resnote02--md, rexnote02--md, rexnote12--md, vecB--md
  - `07san--md` line 574 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/07san.md
  - `b0003y--md` line 93 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/b0003y.md
  - `GPT2023X--md` line 13540 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 15284 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `Hex_7--md` line 1767 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/Hex 7.md
  - `Hex_7--md` line 1767 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/Hex 7.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
