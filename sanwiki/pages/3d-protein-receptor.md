# 3D Receptor Structure, Cellular State, and Pattern Detection

> **Source recovery:** The 2022 SAN notes sometimes compress several biological processes into the phrase **"receptors learn."** The strongest recoverable operation is not that one receptor molecule changes its inherited fold through Hebbian learning. It is that evolved receptor structure, transient receptor conformation, receptor subtype and abundance, membrane placement, and the cell's current internal state jointly determine which input patterns alter cellular output.

> **Image status:** The earlier PNG and SVG failed medical review and are preserved outside the public build. They collapsed distinct receptor families into one generic mechanism and extended one molecular event directly into dendritic and network consequences. A source-bounded replacement prompt has been drafted, but no replacement image is installed.

## What the sources were trying to say

Three dated source families establish the intended direction:

- On June 8, 2022, [[gh-a0597z|a0597z]] described receptors as three-dimensional protein structures "engineered (by evolution) to detect" particular patterns ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0597z.md)).
- The same initial repository upload included [[gh-a0621z|a0621z]], which described a protein receptor as a three-dimensional information-bearing shape that performs a detection function ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0621z%20ctpr.txt)).
- [[gh-a0011z|a0011z]] named [[cellular-oscillating-tomography|Cellular Oscillating Tomography]] on June 21, 2022, then developed receptor configuration, cell state, and downstream response as an information-processing problem. On June 29 it used the stronger phrase that sensor shape can act as a learned memory ([June 21 source](https://github.com/v5ma/selfawarenetworks/blob/597e8082f3940306d778dcbd2115046ddcdaa560/a0011z.md); [June 29 source](https://github.com/v5ma/selfawarenetworks/blob/9533a08442865052605272ea76ebc636846b8499/a0011z.md)).

Read together, these sources distinguish information embodied by evolution and development from information retained through an individual cell's history. They also move between immune receptors, sensory receptors, neuronal synapses, and general cell signaling. Those cases share a receive-transform-output abstraction, but they do not use one identical molecular learning mechanism.

## Four biological levels that should not be collapsed

### 1. Evolved receptor structure and subtype

A receptor's amino-acid sequence constrains its three-dimensional structure, binding partners, conformational dynamics, and signaling capability. This structure contains biological information in the ordinary sense that it helps determine what the molecule can detect and how it can couple to the rest of the cell. The individual molecule does not learn that fold during each signaling event.

Different receptor families transform binding differently:

- **Ionotropic receptors** are ligand-gated ion channels; binding can directly alter ionic conductance.
- **G-protein-coupled receptors** select among dynamic conformational states and act through intracellular transducers rather than serving as ion channels themselves.
- **Enzyme-linked and other receptor systems** couple binding to phosphorylation or other signaling cascades.

At many cell-surface receptors, the ligand binds to the receptor; it is the receptor's changed state that carries the signal across the membrane. The ligand should not be drawn as though it must enter the cell or pass through every receptor.

### 2. Transient conformational state

Receptors are dynamic ensembles rather than rigid locks. Ligands, membrane voltage, allosteric modulators, interacting proteins, phosphorylation, and membrane environment can favor different conformational states. Work on a biased G-protein-coupled receptor showed that beta-arrestin recruitment was associated with selection among heterogeneous receptor conformations ([Kleist et al., 2022](https://doi.org/10.1126/science.abj4922)).

This is a physically meaningful, receiver-specific transformation. It is not automatically long-term memory.

### 3. Cooperative and coincidence-dependent gating in particular receptors

Some receptors combine more than one condition. The NMDA receptor is a bounded neuronal example: agonist-dependent channel opening is strongly conditioned by voltage-dependent magnesium block ([Nowak et al., 1984](https://pubmed.ncbi.nlm.nih.gov/6320006/)). This makes it a useful example of ligand and membrane-state coincidence, not evidence that every receptor has the same gate.

AMPA-type glutamate receptors provide a different bounded example. Their tetrameric occupancy and conformational coupling can produce several discrete conductance levels; binding all four sites does not guarantee maximum conductance ([Yelshanskaya et al., 2022](https://doi.org/10.1038/s41586-022-04637-w)). This supports multistate molecular transformation, not a universal four-level receptor code.

### 4. Persistent receptor-population and cellular state

Learning-related persistence is better located in receptor populations and their cellular organization than in an isolated receptor fold. At excitatory synapses, activity can alter receptor number, subtype, trafficking, anchoring, scaffold relations, and nanoscale position. AMPA receptors form dynamic nanodomains whose organization affects synaptic efficacy ([Nair et al., 2013](https://pubmed.ncbi.nlm.nih.gov/23926273/)); receptor anchoring is required for normal transmission and expression of long-term potentiation in a bounded hippocampal preparation ([Watson, Ho, and Greger, 2017](https://pubmed.ncbi.nlm.nih.gov/28290985/)); and experimentally changing subsynaptic AMPA-receptor position can change synaptic strength ([Ramsey et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34417170/)).

Receptor configuration can therefore retain consequences of prior activity. The medically bounded formulation is **activity-dependent receptor organization contributes to a persistent cellular or synaptic state**, not **one receptor molecule stores a complete learned memory**.

## Source-faithful COT interpretation

COT proposes that receptors form part of a stateful cellular input layer:

```text
received signals + receptor population and organization + current intracellular state
-> receiver-specific transformation
-> changed cellular output
```

The output may be ion flow, second-messenger activity, secretion, transcription, movement, growth, immune action, or, in an excitable neuron, a change in dendritic integration and later spike probability. Which variables matter depends on the cell type and receptor system.

Calling this a **chemical neural network** is a functional analogy: many inputs are transformed nonlinearly into consequential outputs. Engineered mammalian cells can be made to classify molecular inputs through synthetic protein circuits, demonstrating that protein-level classification is possible ([Chen et al., 2024](https://pubmed.ncbi.nlm.nih.gov/39666795/)). That engineering result does not establish that every natural cell implements the same architecture, performs Hebbian learning, reconstructs a tomographic scene, or is conscious.

The SAN/COT hypothesis is the joined claim that receptor configuration, cellular dynamics, temporal input structure, and intercellular signaling can be modeled as a cross-scale receive-transform-project system. Its value depends on producing predictions beyond ordinary receptor pharmacology, signaling-pathway models, and dynamical-systems descriptions.

## Scale boundary

- **Molecular:** receptor sequence, structure, occupancy, conformation, and molecular partners.
- **Membrane or synapse:** receptor subtype, abundance, trafficking, anchoring, and nanoscale placement.
- **Whole cell:** integration with membrane voltage, metabolism, calcium, second messengers, transcription, and morphology.
- **Circuit or tissue:** interactions among many cells through declared chemical, electrical, mechanical, or synaptic routes.

A molecular receptor state can influence higher scales, but one receptor should not be drawn as directly selecting a network assembly, producing a percept, or crossing a motor threshold.

## Discriminating tests

A bounded test should compare nested models of a cell's response:

1. ligand identity or concentration alone;
2. ligand plus receptor subtype and occupancy;
3. receptor conformational and partner state;
4. receptor abundance, membrane organization, and current intracellular state;
5. the complete COT temporal-history model.

The stronger COT interpretation gains support only if its declared state and temporal variables improve held-out prediction and survive causal perturbation beyond the simpler models. It is weakened if ordinary pathway and state-space models explain the same outcomes without the proposed cross-scale operator.

## What this page does not claim

- An individual receptor molecule does not Hebbian-learn a new protein fold during signaling.
- Not every receptor is an ion channel.
- Ligand binding does not generally mean that the ligand enters the cell.
- Lock-and-key geometry is not a complete account of receptor dynamics.
- NMDA coincidence and AMPA subconductance are not universal receptor mechanisms.
- The same transmitter does not have one fixed effect independent of receptor subtype, location, cellular partners, and current state.
- One receptor does not directly implement dendritic, circuit, perceptual, or motor selection.
- Cellular signal processing does not by itself establish tomography, selfhood, or consciousness.
- The June 2022 white-matter plasticity study concerns human myelin-related plasticity, not receptor learning, and is not evidence for this molecular claim ([Lazari et al., 2022](https://pubmed.ncbi.nlm.nih.gov/35705046/)).

## Related pages

- [[cellular-oscillating-tomography|Cellular Oscillating Tomography]]
- [[cellular-coincident-detection|Cellular Coincident Detection]]
- [[biological-computation|Biological Computation]]
- [[synaptic-molecular-complexity-ltp|Synaptic Molecular Complexity and LTP]]
- [[neuron-shape-information-storage|Neuron Shape Information Storage]]
- [[synaptic-ion-channel-tone|Synaptic Ion-Channel Tone]]
- [[dendritic-computation|Dendritic Computation]]
- [[umami-multi-receptor-coincidence-detection|Umami and Multi-Receptor Coincidence Detection]]
- [[action-potential|Action Potential]]
- [[coincidence-detection|Coincidence Detection]]

## Source provenance

- Earliest exact receptor-detection formulation: initial Git upload, June 8, 2022.
- COT naming and receptor-configuration formulation: June 21, 2022.
- Sensor-shape-as-memory formulation: June 29, 2022.
- Review method: source recovery before correction; historical wording is preserved in the immutable source pages.
- Scientific review date: July 29, 2026.
- Claim boundary: established receptor and synaptic biology is separated from the proposed COT cross-scale interpretation.
