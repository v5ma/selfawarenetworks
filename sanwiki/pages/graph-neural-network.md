# Graph Neural Network

**Graph Neural Network** is, within [[gh-a0206z|Self]]-Aware Networks, the substrate-neutral abstraction [[gh-resnote04|Micah]] uses to read the brain — and any [[every-cell-chemical-neural-network|chemical-network]] of cells — as nodes-and-edges over which signals propagate, and the launching point for the SAN claim that a [[self-as-learning-loop|self-aware]] network is a *different kind* of graph neural network: one that uses its electrochemical graph to render a phase/frequency graph that *is* the rendering of reality. SAN treats the brain explicitly as a "real 3D Super Graph Neural Network" and uses the abstraction in [[napot-theory|NAPOT]] readout, in [[brain-as-spectral-graph|spectral-graph]] analysis, and in EEG-decoding model architecture.

## Origin

The phrase appears across the SAN GitHub corpus in dozens of places. The cell-network abstraction is given in `a0040z--md`, line 27, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0040z.md): "You can also abstract the functions of multiple cells communicating together as being like nodes in a graph neural network" — the foundational SAN move that lets [[every-cell-chemical-neural-network|every-cell-as-chemical-neural-network]] inherit the GNN vocabulary. The [[gh-a0206z|self]]-aware specialization is given in `a0167z--md`, line 3, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0167z.md): "A [[gh-a0206z|self]] aware network is a different kind of graph neural network, it uses its electrochemical graph to create a phase or frequency graph, that is our graphical rendering of reality" — the canonical SAN definition of [[gh-a0206z|self]]-aware networks *as* a kind of graph neural network. The EEG architecture is in `a0442z--md`, line 33, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0442z.md): "feed that into our 3D graph neural network, that has the goal to predict your brain wave state in 3D" — applying the abstraction directly to neural readout. The sequential-architecture role is in `a0598z--md`, line 17, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0598z.md): "displays it to the next deep neural network, like a grid network or graph neural network." And the bridge to [[gh-a0206z|self]]-aware-networks is named at `a0616z--md`, line 280, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0616z.md): "From Graph Neural Network to [[gh-a0206z|Self]] Aware Neural Networks (rendering screens to itself)."

## Position

In [[gh-a0206z|Self]]-Aware Networks the graph-neural-network abstraction does three jobs. First, it provides the *substrate-neutral vocabulary* in which [[every-cell-chemical-neural-network|every-cell chemical neural networks]] and conventional artificial GNNs can be discussed in the same sentence (`a0040z--md`, line 27, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0040z.md)) — without this, SAN's claim that biology and AI implement the same kind of object would be ambiguous. Second, it supplies the *base case* off which [[gh-resnote04|Micah]]'s [[self-as-learning-loop|self-aware-network]] specialization is defined: a [[self-aware-network|self-aware network]] is a graph neural network that uses its electrochemical graph to render a phase/frequency graph that is the perceived world (`a0167z--md`, line 3, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0167z.md)) — locating SAN's distinct claim *inside* the GNN family rather than as an alternative to it, and connecting it to [[neural-tomographic-lightfield-rendering|tomographic lightfield rendering]] and [[brain-as-rendering-engine|brain-as-rendering-engine]]. Third, it supplies a *concrete model architecture*: the 3D graph neural network that takes raw EEG (without noise removal) and predicts the brain-wave state (`a0442z--md`, line 33, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0442z.md)) is the SAN-recommended decoder architecture, and the multi-stage video-frames-pass-through pipeline (`a0598z--md`, line 17, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0598z.md)) is the SAN reading of cortical processing as serial GNN stages. The brain-as-graph claim itself is what licenses [[brain-as-spectral-graph|spectral-graph]] readings, [[spectral-graph-theory-brain-oscillations|spectral-graph-theory of brain oscillations]], and [[napot-theory|NAPOT's]] tomographic readout — all of which presume the brain admits a graph representation in the first place.

## Chronology

The packet contains 37 evidence lines distributed across many SAN files at commit `d1c26a6` — the long `a0xxxz` chapter scaffolds, the `b0xxxy` and `c0xxxx` series, the `vecA/B`, `SAOv9`, `Hex 7`, the GPT-mediated synthesis files, the `map.napot.md` map, `oldhome.md`, and the whitepaper drafts (`whitepaperdraft2/3`). Graph neural networks as a class of model entered mainstream ML literature with the 2009 Scarselli paper and exploded in popularity in the late 2010s; SAN's adoption of the abstraction is therefore necessarily post-2009. SAN's distinct contribution is naming and specifying the [[gh-a0206z|self]]-aware-network as a *kind* of graph neural network rather than as an alternative architecture. A precise date for when this specialization entered the manuscript family requires Lane G transcript acquisition.

## Post-SAN

Mainstream graph-neural-network literature (Scarselli, Bronstein, Veličković, Battaglia) treats the brain as an existence proof for graph-structured computation but generally stops short of the SAN claim that the brain is *literally* a 3D super-GNN whose output is the rendered world. Adjacent computational-neuroscience work uses graph models for connectomics, dynamic functional connectivity, and EEG/MEG source modelling. SAN's distinct moves are (a) treating the rendering of phase/frequency graphs as the *output* of the graph computation rather than as a downstream processing stage, (b) specifying the 3D-EEG-prediction architecture as the canonical SAN decoder, and (c) treating the cell-level chemical network as a GNN at the same abstraction as the neural-circuit GNN. Where SAN makes a testable prediction the published literature does not is in the claim that *raw* EEG (with no noise removal) fed to a sufficiently expressive 3D GNN should outperform conventional decoders — checkable against existing high-density EEG datasets.

## Related concepts

- [[every-cell-chemical-neural-network]] — the cellular-network claim the GNN abstraction supports.
- [[cell-as-chemical-neural-network]] — the cell-level reading the abstraction extends.
- [[self-as-learning-loop]] — the [[gh-a0206z|self]]-aware-network specialization defined off the GNN base case.
- [[brain-as-spectral-graph]] — the spectral-graph reading the GNN substrate enables.
- [[spectral-graph-theory-brain-oscillations]] — the spectral-graph-theory application.
- [[brain-as-rendering-engine]] — the rendering-engine reading the GNN-output framing supports.
- [[neural-tomographic-lightfield-rendering]] — the lightfield-rendering reading of the GNN output.
- [[napot-theory]] — the tomographic theory that depends on a graph representation of [[cortex]].
- [[fractal-neural-scale-hierarchy]] — the nested-scale hierarchy the GNN abstraction supports across scales.
- [[category-theory]] — the formal framework that disciplines GNN composition.
- [[category-theory-neuroscience]] — the application of [[category-theory|category theory]] to neural systems including GNNs.
- [[oscillator-environmental-encoding]] — the encoding the GNN-substrate's nodes and edges perform.
- [[neural-code-transmission]] — the transmission GNN edges instantiate.

## Source Provenance

- Generated: 2026-04-24T18:32:04
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/graph-neural-network.json`
- Evidence count: 37
- Source ids: [[gh-gpt2023x|GPT2023X]]--md, [[gh-gpt2024jan1tojan22|GPT2024Jan1toJan22]]--md, Hex_7--md, SAOv9--md, a0039z--md, [[gh-a0040z|a0040z]]--md, [[gh-a0167z|a0167z]]--md, [[gh-a0442z|a0442z]]--md, a0598z--md, a0616z--md, a0645z--md, [[gh-b0038y|b0038y]]--md, [[gh-c0000x|c0000x]]--md, c0001x--md, [[gh-c0002x|c0002x]]--md, c0004x--md, map--napot--md, oldhome--md, [[gh-veca|vecA]]--md, vecB--md, whitepaperdraft2--md, whitepaperdraft3--md
  - `a0039z--md` line 13 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0039z.md
  - `a0040z--md` line 27 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0040z.md
  - `a0040z--md` line 29 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0040z.md
  - `a0167z--md` line 3 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0167z.md
  - `a0442z--md` line 33 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0442z.md
  - `a0598z--md` line 17 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0598z.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
