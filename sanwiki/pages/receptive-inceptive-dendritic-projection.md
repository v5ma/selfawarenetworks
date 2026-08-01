# Receptive Fields, Inceptive Fields, and Dendritic Projection

> **Boundary note (2026-07-18):** This page is the current correction route for dendrite/axon language in NAPOT. Use it to translate historical camera, microphone, keyboard, printing-press, screen, and speaker metaphors into receive, transform, axonal output, presynaptic release, downstream integration, and recurrent update. It should be treated as the prerequisite for NAPOT Revision 2, inceptive-field, and neural-array-projection pages. See [[san-scale-ladder-and-claim-boundaries]] and [[screen-metaphor-no-inner-viewer]].

Many signals converge on a neuron. Dendrites and the cell's current state transform them. The axon
then distributes consequences to many downstream cells. Those recipients combine that output with
many other inputs, and recurrent circuits repeat the process.

## Receive, transform, project

1. Inputs arrive across dendrites and the somatodendritic compartment.
2. Dendritic branches perform nonlinear integration.
3. The axon initial segment normally initiates the output action potential.
4. Axonal branches and presynaptic terminals distribute effects to downstream targets.
5. Each target integrates overlapping inputs into its own state.
6. Feedback and recurrence alter the next cycle.

Active apical dendrites can generate local spikes, couple inputs from different cortical layers, and
change somatic or axonal output. They are not normally the presynaptic "exit terminal." The output
route is the axon and its boutons. This distinction is supported by direct work on axonal initiation
and active dendrites:

- [Stuart et al. (1997), action-potential initiation and propagation](https://doi.org/10.1111/j.1469-7793.1997.617ba.x)
- [Larkum, Zhu, and Sakmann (1999), coupling inputs across cortical layers](https://doi.org/10.1038/18686)
- [Smith et al. (2013), dendritic spikes and visual selectivity](https://doi.org/10.1038/nature12600)

## Layer-5 compartment correction

A typical layer-5 pyramidal neuron has basal dendrites around the soma, an apical trunk ascending
toward superficial layers, and an apical tuft that can extend into layer 1. Inputs can arrive on basal,
oblique, trunk, and tuft compartments. The axon usually begins near the soma at an axon initial
segment, although axon-carrying dendrite variants exist. Therefore, "basal equals Layer-1 keyboard"
and "apical equals Layer-5 output press" are not valid anatomical mappings. The useful SAN
distinction is functional: dendritic compartments receive and transform; the axonal arbor re-expresses
consequences to downstream receivers.

## Two field terms

**Receptive field** describes the conditions or inputs that alter a neuron's response. The exact
definition depends on sensory, cellular, and network scale.

**Inceptive field** is SAN's proposed complement: the downstream target set and effects initiated by
a neuron or array. A rigorous use must state the target set, time window, intervention, and measured
effect.

A neuron receives contributions from many overlapping inceptive fields. Its own axon then
contributes to many downstream receptive fields.

[[gh-a0412z|a0412z]], first Git-fixed on June 8, 2022, states the compact geometry directly:
receptive fields converge many signals toward a cell, while an inceptive field describes
divergence from a cell toward other cells. Its later gravity, telepathy, and universal-field
speculation is separate from this bounded receive-transform-project operation.

## Camera, microphone, screen, and speaker

The historical SAN metaphor treats dendrites like a camera or microphone and axonal output like a
pixel or speaker. The metaphor means that learned morphology and synaptic state constrain what the
cell registers, while divergent output changes many downstream receivers. It does not mean that
there is a literal image inside a dendrite or a hidden television watched by an inner observer.

[[perceptual-screen-neural-rendering|Neural Rendering]] is the repeated distributed transformation,
not a private display.

## Beyond a binary Perceptron

SAN's potassium -> action-potential waveform -> presynaptic calcium -> vesicle release -> receiver
effect chain points to real graded and probabilistic structure. Waveform shape can alter calcium
entry, and individual synapses can switch between single- and multivesicular release as conditions
change:

- [Presynaptic calcium across action-potential waveforms](https://pubmed.ncbi.nlm.nih.gov/32425764/)
- [Release probability and multivesicular release](https://www.nature.com/articles/s41467-022-33565-6)

This evidence does not support a universal deterministic 0/1/2/3-vesicle code. That historical SAN
formulation remains valuable as model provenance and as a synapse-specific hypothesis to test.

A special trans-synaptic case should not be generalized: [Ucar et al. (2021)](https://doi.org/10.1038/s41586-021-04125-7)
showed in rat slice culture that spine enlargement enhanced presynaptic exocytosis when the spine
physically pushed its facing bouton. This establishes a conditional local mechanical route, not
ordinary dendritic control of every presynaptic terminal.

## Principal SAN source chain

| Source | Contribution |
|---|---|
| [[gh-c0000x|c0000x]] | Early route into inceptive fields, dendritic computation, APD, and array flow |
| [[gh-a0306z|a0306z]] | Dendritic pattern detection, repeated rendering, Redness, and Broccoli |
| [[gh-whitepaperdraft1|whitepaperdraft1]] and [[gh-whitepaperdraft2|whitepaperdraft2]] | Screen metaphor and the clearest receptive/inceptive cycle |
| [[gh-a0310z|a0310z]] | Multiscale routing and Neural Tuning |
| [[gh-a0325znapot6|a0325zNAPOT6]] | Inceptive fields, motor consequences, persistence, and dominance |
| [[gh-a0412z|a0412z]] | Compact convergence/reception and divergence/inception formulation; surrounding physics speculation remains separate |
| [[gh-a0179z|a0179z]] | Copied popular account of human dendritic computation; attribution and claims remain controlled by [Gidon et al. (2020)](https://doi.org/10.1126/science.aax6239) |
| [[gh-napotconcepts|NAPOTConcepts]] | Retrospective molecular index with model-generated sections requiring source separation |

## From one receiver to an ensemble receiver

[[gh-a0136z|a0136z]] describes one population receiving projections from many cells, transforming
them through learned synaptic and dendritic state, and expressing a new output pattern. The source
uses the phrase "projecting its phase," but the measurable operation is broader: presynaptic
activity changes receiver-specific conductance, membrane, firing, and population state; phase is
one relation that can be estimated within that transformation.

[[gh-a0137z|a0137z]] extends the same receiver problem to an oscillating ensemble whose collective
phase can be reset by sufficient input. The cell-to-ensemble analogy is a SAN hypothesis, not an
identity. It becomes scientific only when the source cells, physical pathway, receiver population,
phase reference, threshold, and downstream consequence are measured.

## Read next

- [[flow-of-information-in-the-brain|The Flow of Information in the Brain]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[receptive-field|Receptive Field legacy page]]
- [[inceptive-field|Inceptive Field legacy page]]
- [[dendritic-pattern-detection|Dendritic Pattern Detection]]
- [[action-potential-duration|Action Potential Duration]]
- [[neural-tuning|Neural Tuning]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[neural-phase-trajectories-taylor-series-proposal|Neural Phase Trajectories and the Taylor-Series Proposal]]
- [[early-a0135-a0155-obscure-argument-map|Early a0135-a0155 Obscure Argument Map]]
- [[san-golden-corpus-map|SAN Golden Corpus Map]]
- [[early-a0397-a0419-obscure-argument-map|Early a0397-a0419 Obscure Argument Map]]
