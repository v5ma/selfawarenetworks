# Neuron Shape Information Storage

![Medical-textbook plate distinguishing established dendritic structural plasticity from the proposed SAN interpretation of neuronal morphology as a high-dimensional state variable](/v5ma.github.io/wiki/assets/generated/san/neuron-shape-information-storage/neuron-morphology-state-variable-medically-bounded-20260714-v1.png)

This medically bounded plate separates established cellular physiology from the SAN proposal. Activity-dependent changes in spine structure, receptor content, synaptic efficacy, and dendritic integration are established, while persistent memory traces are distributed across synapses, cells, and circuits. SAN further proposes that neuronal geometry is a high-dimensional state variable that constrains pattern detection and output generation; the image does **not** claim that one spine, one neuron, or gross arbor shape contains a complete memory.

The physical structure of a neuron — its dendritic arbor, synaptic geometry, receptor complement, and spatial organization — contributes to how the cell integrates spatiotemporal input. SAN proposes that conventional [ANN models](deep-learning-neural-networks.md) omit much of this biological state when they represent connectivity primarily with scalar weights. This is a critique of abstraction, not a claim that all artificial networks are binary or that a biological axon transmits only a single bit.

## Core argument

Many conventional ANNs abstract a neuron as a weighted sum followed by a scalar activation, whereas biological neurons integrate inputs across branched, electrically active compartments. [Micah](gh-resnote04.md)'s early (2012) argument was that this abstraction omits a large structural state space. A small synaptic change can alter local voltage, receptor composition, dendritic integration, and later spike timing or rate. The original note described this as: "A small difference changes the whole shape mathematically — if the shape were an infinity, and you changed a synapse, that infinity is now infinity plus or minus the small difference." Biologically, the altered morphology is not broadcast intact down the axon; its effect is expressed through changed integration and output dynamics.

The neuron's shape therefore carries two kinds of information that survive beyond the axon only if the downstream system is sensitive to analog variation:
1. **Structural memory** — the dendritic geometry records past activity via Hebbian and structural plasticity.
2. **Spatial-temporal program** — the current configuration encodes a "snapshot" of correlated inputs that can be re-broadcast to other regions.

## Category-theory proposal

[Micah](gh-resnote04.md) proposed representing each neuron as a differential equation in a "core set," paired with a topoi describing: (a) physical synaptic connections, (b) actual radius of electromagnetic influence (beyond direct connections), and (c) susceptibility to extracellular field effects. This is an early predecessor to the broader [NAPOT](napot-overview.md) framework.

## Layer-1 to Layer-6 urgency bypass

The same note raises the question of how [Layer 6 grandmother neurons](layer-6-grandmother-neuron.md) receive urgent signals directly from Layer 1 without traversing the full cortical hierarchy — implying that the signal must carry urgency metadata beyond a bare spike, which again requires analog or structured encoding rather than binary.

## Related concepts

- [NAPOT](napot-overview.md) — the mature theoretical framework that generalizes this analog encoding argument
- [Layer 6 grandmother neuron](layer-6-grandmother-neuron.md) — inhibitory clustering and intuition; Layer 6 SDR of inhibited sub-tree
- [Sparse distributed representation](sparse-distributed-representation.md) — SDR as complement: binary at population level, analog at single-neuron level
- [Category theory neuroscience](category-theory-neuroscience.md) — topoi / differential-equation representation of neurons

## History

First articulated Sept 2012 in an exchange with Dean ([a0414z](gh-a0414z.md), [a0414z ctpr note](gh-a0414z.md)). At that stage the argument was a critique of ANN reductionism, not yet a full theory. The category-theory framing (topoi, differential equations) was a sketch, not a worked-out formalism.
