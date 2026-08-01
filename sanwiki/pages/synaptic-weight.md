# Synaptic Weight

> **Medical-accuracy correction (2026-07-19):** A biological synaptic weight is not one directly stored scalar. Earlier diagrams that turn spine size into a fixed gain switch and merge BTSP, release, backpropagating spikes, and output into one rule remain archived but are not embedded.

**Synaptic weight** is a model-dependent summary of efficacy. Depending on the
experiment, it may summarize release probability, quantal content, receptor number or
conductance, spine electrical properties, short-term state, inhibition, or a measured
postsynaptic response. A scalar model must state the measurement, timescale,
plasticity locus, and conditions it compresses.

## SAN interpretation and test boundary

SAN is correct that efficacy participates in a richer cellular criterion. The current
model replaces one universal register with presynaptic, postsynaptic, intrinsic, and
circuit variables. Spine morphology can correlate with some efficacy measures but is
not itself a semantic gate; BTSP is not every synapse's update rule.

## Historical SAN formulation

**Synaptic Weight** is the [[self-aware-networks]] reading of the per-connection scalar that mainstream [[computational-neuroscience|computational neuroscience]] treats as the learnable parameter of a neural network: in SAN it is not the only firing criterion at a [[chemical-synapse]], but one component of a richer per-cell criterion set that includes [[dendritic-spines]] morphology, calcium-dependent spine remodeling, and the bidirectional update rule of [[behavioral-timescale-synaptic-plasticity|behavioral-timescale synaptic plasticity]] (BTSP). The slug names the weight-as-scalar primitive and then resists treating it as the whole story, threading it back into [[synaptic-plasticity]], [[synaptic-computation]], and [[dendritic-coincidence-detection]].

## Roots

The earliest line-level anchor in the github clone for the SAN reading of synaptic weight is in the working note `a0001z`, which states that "Behavioral timescale synaptic plasticity (BTSP) can also reshape existing place fields via bidirectional synaptic weight changes that depend on the temporal proximity of plateau potentials to pre-existing place fields" (`a0001z--md`, line 103, [[https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md|on github]]). That sentence locates the SAN reading within the BTSP-and-[[grid-place-cells|place-fields]] literature and ties weight changes specifically to plateau-potential timing rather than to a generic Hebbian coincidence rule. The companion note `a0138zcalcium` re-states the position in spine-morphology terms with the section heading "Dendritic spine morphology regulates calcium-dependent synaptic weight change" (`a0138zcalcium--md`, line 5, [[https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0138zcalcium.md|on github]]), making [[dendritic-spines]] morphology the concrete carrier of the weight-update rule. The packet's `chronology_markers` does not give a pre-2013 anchor for this concept, so this article does not assert that the SAN reading was articulated before 2017; the safe statement is that the canonical wording is fixed at github commit `d1c26a6f`.

## Position

The SAN position has three components. First, synaptic weight is one input to the firing criterion, not the criterion itself. The `a0151z` note states the position directly: "ion firing [[criteria]] of other neurons, what fires are axons, and dendrites, the [[criteria]] is not only synaptic weight from [[neurotransmitters]], its also spines, [[dendritic-spines|dendritic spines]] which change rapidly, and they are" structurally relevant ([`a0151z--md`, line 80, [[https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0151z.md|on github]]]). The same statement appears verbatim in the `a0503z` note ([`a0503z--md`, line 12, [[https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0503z.md|on github]]]), confirming the position is load-bearing across multiple SAN working files. The reading aligns with [[dendritic-spine-temporal-memory]] and [[dendritic-pattern-recognition]]: the per-cell decision to fire is computed from the joint state of weight-from-[[neurotransmitter]]-release, [[dendritic-spines]] morphology and density, and the [[dendritic-architecture]] of incoming patterns, not from a single scalar.

Second, the weight-update rule is bidirectional and asymmetric with respect to the plateau-potential timing. The `b0232y` note quotes the BTSP literature directly: "the overlap between the local and global signals determines the degree of synaptic weight change at each input (Fig. 2F and fig. S5). The plasticity produced in this model was asymmetric with respect to the plateau" potential ([`b0232y--md`, line 233, [[https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/b0232y.md|on github]]]). The SAN reading folds that asymmetry into the broader [[synaptic-plasticity]] meta-plasticity-via-oscillatory-history claim: weight changes are gated by the oscillatory and plateau-potential context in which they occur, not by spike-timing alone. This makes [[bistable-synaptic-plasticity]], [[hebbian-plasticity]], and the [[ltp-bouton-synaptic-memory-traces]] mechanism the operational substrates that compute the actual scalar value.

Third, synaptic weight feeds the [[neural-burst-backpropagation]] and [[burst-event]] dynamics that organize whole-neuron output. The `a0001z` note's "bidirectional forward & backward synaptic weight changes before and after soma bursts" framing makes the soma-burst boundary the temporal landmark that separates pre-update from post-update weight states, and the [[backpropagation]] entry in the related-concepts cluster reflects that biological [[backpropagation]] in this sense is closer to the [[neural-burst-backpropagation]] literature than to the gradient-descent [[backpropagation]] of artificial networks. The [[multi-vesicle-release]] and [[multi-vesicle-release-spatial-encoding]] articles handle the vesicle-side encoding that translates the updated weight scalar into actual transmission, and [[multivesicular-release-synaptic-unreliability]] handles the noise-versus-signal interpretation the SAN reading reframes as deterministic per-cell variation.

## Chronology

The 19 evidence items spread across the [[gh-a0001z|a0001z]], `a0138zcalcium`, [[gh-a0151z|a0151z]], [[gh-a0503z|a0503z]], `b0232y`, [[gh-gpt2023x|GPT2023X]], [[gh-gpt2024jan1tojan22|GPT2024Jan1toJan22]], `NAPOTConcepts`, `NotebookML 6 Collection`, `vecB`, and [[gh-vecc|vecC]] working files, all in the canonical `d1c26a6f` commit. The packet does not provide a pre-2013 line-level anchor, so this article does not date the synaptic-weight position before 2017; the consistent verbatim repetition of the "[[criteria]] is not only synaptic weight from [[neurotransmitters]], its also spines" sentence across `a0151z` and `a0503z` indicates a settled position rather than a novel one within the corpus, but does not by itself establish chronological priority over external BTSP literature.

## Post-SAN

The most directly adjacent mainstream literature is the BTSP work that the `b0232y` note quotes, plus the deep-learning [[deep-learning-neural-networks]] tradition that uses synaptic weight as the principal learnable parameter of artificial networks. The SAN reading agrees with the BTSP empirical claim — bidirectional, asymmetric, plateau-potential-timed weight change — and disputes the deep-learning reading on a single specific point: weight is one input to the firing criterion, not the whole criterion ([`a0151z--md`, line 80, [[https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0151z.md|on github]]]). Where this framing makes a falsifiable [[prediction]] the standard reading does not, it is that controlled perturbation of [[dendritic-spines]] morphology — independent of weight scalar — should produce predictable shifts in firing criterion that pure-weight models cannot account for. The [[hebbian-plasticity]] and [[bistable-synaptic-plasticity]] articles handle the Hebbian-rule and bistability-rule details; this article is the umbrella claim that the weight scalar lives inside a richer per-cell criterion set.

## Related concepts

- [[synaptic-plasticity]] — the broader plasticity rule whose scalar update this article describes.
- [[synaptic-computation]] — the per-cell computational sibling concept the weight scalar feeds into.
- [[chemical-synapse]] — the physical connection whose strength the weight scalar parametrizes.
- [[dendritic-spines]] — the morphological substrate that the SAN reading insists is part of the firing criterion.
- [[dendritic-spine-temporal-memory]] — the spine-level temporal-memory mechanism inheriting the framing.
- [[dendritic-architecture]] — the structural layer that organizes incoming patterns.
- [[dendritic-pattern-recognition]] — the dendritic-side pattern-recognition consumer of weight inputs.
- [[bistable-synaptic-plasticity]] — the bistable update rule that computes the weight scalar.
- [[hebbian-plasticity]] — the Hebbian update rule the weight scalar follows.
- [[ltp-bouton-synaptic-memory-traces]] — the bouton-level memory-trace mechanism inheriting the weight update.
- [[long-term-potentiation]] — the [[ltp]] arm of the bidirectional weight-change rule.
- [[long-term-depression]] — the LTD arm of the bidirectional weight-change rule.
- [[multi-vesicle-release]] — the vesicle-release event the weight scalar gates.
- [[multivesicular-release-synaptic-unreliability]] — the empirical phenomenon SAN reinterprets as deterministic.
- [[grid-place-cells]] — the place-cell population the BTSP-driven weight changes reshape.
- [[neural-burst-backpropagation]] — the soma-burst-anchored [[backpropagation]] framing the weight changes feed into.
- [[burst-event]] — the soma-[[burst-event|burst event]] that bounds pre- and post-update weight states.
- [[backpropagation]] — the artificial-network analogue the SAN reading distinguishes from biological burst-[[backpropagation]].
- [[deep-learning-neural-networks]] — the artificial-network tradition treating weight as the sole learnable parameter.
- [[apical-pyramidal-neurons]] — the cell-type the BTSP literature most directly addresses.

## Source Provenance

- Generated: 2026-04-24T18:51:12
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/synaptic-weight.json`
- Evidence count: 19
- Source ids: [[gh-gpt2023x|GPT2023X]]--md, [[gh-gpt2024jan1tojan22|GPT2024Jan1toJan22]]--md, NAPOTConcepts--md, NotebookML_6_Collection--md, a0001z--md, a0138zcalcium--md, [[gh-a0151z|a0151z]]--md, [[gh-a0503z|a0503z]]--md, b0232y--md, vecB--md, [[gh-vecc|vecC]]--md
  - `a0001z--md` line 100 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md
  - `a0001z--md` line 103 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md
  - `a0001z--md` line 103 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md
  - `a0001z--md` line 111 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md
  - `a0138zcalcium--md` line 5 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0138zcalcium.md
  - `a0138zcalcium--md` line 6 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0138zcalcium.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
