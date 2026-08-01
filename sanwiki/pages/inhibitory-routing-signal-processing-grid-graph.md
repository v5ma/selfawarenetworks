---
title: "Inhibitory Routing, Neural Signal Processing, and Grid/Graph Models"
tags: [san, inhibition, signal-processing, neural-routing, grid-cells, graph-models, traveling-waves]
aliases: [Inhibition Signal Processing and the Grid Graph, Inhibitory Magnification, Neural Grid Graph]
summary: "A governed SAN route that preserves the inhibitory-wave and grid/graph genealogy while separating circuit inhibition, traveling activity, grid-cell coding, anatomical connectivity, and mathematical graph models."
status: governed
---

# Inhibitory Routing, Neural Signal Processing, and Grid/Graph Models

## The problem in ordinary language

A brain cannot respond to every active signal in the same way. It must strengthen some effects,
delay or cancel others, separate competing patterns, coordinate timing, and direct activity through
different routes as the situation changes.

Inhibitory cells and synapses are central to that work. They do more than make neurons quiet. In
different circuits and conditions, inhibition can:

- reduce or divide response gain;
- subtract a component from a response;
- sharpen selectivity;
- control spike timing;
- suppress a competitor;
- release a target through disinhibition;
- help organize a population rhythm; and
- change which temporary group of cells can influence the next group.

SAN's early language called inhibition a **train switch**, a **bifurcation**, a **brush**, and a
way to **magnify** the consequence of a learned cellular event. These metaphors point toward a
serious computational question: how can a local learned event alter a much larger distributed
network without assuming that one neuron literally broadcasts a complete memory to the whole
brain?

## One family, four different meanings

The historical notes often place the words *grid* and *graph* near inhibition and signal
processing. A strong account must separate four meanings that the archive was exploring:

1. **Inhibitory circuit control:** cell- and synapse-specific effects on gain, timing,
   competition, disinhibition, and routing.
2. **Dynamic population structure:** temporary assemblies, propagating activity, traveling waves,
   and state-dependent effective connectivity.
3. **Grid or reference-frame codes:** the spatial firing fields of grid cells and bounded
   proposals that grid-like codes can organize nonspatial relations.
4. **Graph models:** mathematical representations whose nodes, edges, weights, direction, and
   Laplacian depend on a selected anatomical or functional scale.

A fifth historical meaning also needs its own boundary: diffusion MRI images of crossing fibers
can motivate a geometric model, but they do not establish that the brain is literally one simple
orthogonal three-dimensional wiring grid.

The terms can be connected only after each is defined.

## The source trunk: from one learned event to a larger consequence

The repository changelog gives this branch an unusually clear authorial index. In August 2022 it
described item 12 as a theory of how "memories stored in synapses are Magnified to the whole brain
via inhibitory waves" and linked three sources:

- `a0111z.md`;
- the now Git-only `b0071y.md`; and
- `a0129z.md`.

`a0111z.md` presents the "photocopier effect": a learned local event changes downstream timing,
including through nearby inhibitory circuitry, and repeated population interactions enlarge the
consequence beyond the initiating cell. `b0071y.md` uses touch of a cup to connect a
somatosensory pattern with visual and auditory convergence and explains "ripple" as a spike train
that creates large inhibited regions. `a0129z.md` describes a sequence in which one array detects
an inhibitory pattern, fires, and changes the next array.

The durable idea is not that one spike contains a whole memory. It is that a local event can
change the state and routing of a larger network through connected excitatory and inhibitory
circuits, repeated recruitment, relative timing, and propagation.

## What inhibition can compute

Primary experiments support differentiated computational roles rather than one universal
inhibitory operation. In mouse visual cortex, experimentally activating parvalbumin-expressing
interneurons principally produced divisive gain changes, while activating somatostatin-expressing
interneurons principally produced subtractive changes under the tested conditions:

- [Wilson et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22878717/)

VIP interneurons can participate in disinhibitory control by suppressing other inhibitory cells:

- [Pi et al., 2013](https://pubmed.ncbi.nlm.nih.gov/24097352/)

The retina supplies a concrete example of inhibition shaping pattern recognition. Direction-
selective circuits use asymmetric inhibition from starburst amacrine cells as part of the
mechanism that distinguishes motion direction. This is stronger and more useful than calling
inhibition a generic binary logic gate: the effect depends on cell identity, geometry, timing,
target compartment, and the rest of the circuit.

SAN's train-switch metaphor is therefore retained as a high-level intuition. It should predict a
measurable change in downstream route, response, or accessible population state, not merely a
larger abstract pattern count.

## Inhibition and oscillatory timing

`b0124y.md` develops the claim that inhibitory decay helps establish an oscillatory cadence and
that the inhibited population is part of the signal's distributed consequence. This has a real
mechanistic foothold, but it needs a bounded formulation.

Models and hippocampal experiments show that GABAergic conductance, decay kinetics, tonic drive,
and the balance of excitation and inhibition can affect gamma synchronization and frequency:

- [Wang and Buzsaki, 1996](https://pubmed.ncbi.nlm.nih.gov/8815919/)
- [Traub et al., 1996](https://pubmed.ncbi.nlm.nih.gov/8782110/)
- [Mann and Mody, 2010](https://pubmed.ncbi.nlm.nih.gov/20023655/)

That supports inhibitory kinetics as one family of timing variables. It does not establish that
one inhibition-decay constant sets every gamma rhythm, that every frequency band has the same
mechanism, or that long-term depression is the same thing as momentary synaptic inhibition.

## Traveling activity is not automatically a sharp-wave ripple

Traveling waves have been observed in cortex. For example, propagating waves accompanied motor
cortical population activity in monkeys:

- [Rubino, Robbins, and Hatsopoulos, 2006](https://pubmed.ncbi.nlm.nih.gov/17115042/)

That makes propagation a legitimate part of the routing problem. But a **sharp-wave ripple** is
not a generic name for every burst, inhibitory wave, or whole-brain propagation event.

Sharp waves and ripples were characterized as specific hippocampal population events, with a
large sharp-wave component and a fast ripple component:

- [Buzsaki, 1986](https://www.sciencedirect.com/science/article/pii/0006899386914836)
- [Oliva et al., 2018](https://pubmed.ncbi.nlm.nih.gov/30428340/)

`a0309z.md` is important because it shows the SAN attempt to connect bursts, inhibition,
episodic reconstruction, replay, and network magnification. The governed reading preserves that
proposal while changing its scientific label: hippocampal sharp-wave ripples are one special
case; broader cortical propagation and SAN's proposed inhibitory magnification are separate
variables to test.

## Grid cells are not the same as a graph

Grid cells in medial entorhinal cortex have spatially periodic firing fields:

- [Hafting et al., 2005](https://pubmed.ncbi.nlm.nih.gov/15965463/)

Grid-like coding has also been reported during visual exploration in primates and in a bounded
human conceptual-space task:

- [Killian et al., 2012](https://pubmed.ncbi.nlm.nih.gov/23103863/)
- [Constantinescu et al., 2016](https://pubmed.ncbi.nlm.nih.gov/27313047/)

These findings motivate questions about coordinate systems and relational maps. They do not show
that every cortical column contains a grid-cell module. Hawkins and colleagues explicitly present
that broader neocortical-grid account as a theory:

- [Hawkins et al., 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6336927/)

`b0154y .md` is valuable historical material because it tries to join attention, tectal maps,
place cells, grid cells, and an electromagnetic spectral graph. Its "where you are" versus "where
you are not" distinction should be treated as a SAN interpretive proposal, not as the standard
definition of place and grid cells.

## A graph is a model at a chosen scale

A graph represents selected entities as nodes and selected relations as edges. In neuroscience,
nodes might be neurons, parcels, regions, electrodes, cell assemblies, or estimated states. Edges
might represent anatomical projections, statistical dependence, effective influence, or a
time-varying functional relation.

Diffusion-spectrum imaging has been used to construct macroscale structural graphs:

- [Hagmann et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18597554/)

Graph-Laplacian eigenmodes can be used to model spatial patterns constrained by the connectome:

- [Atasoy et al., 2016](https://pubmed.ncbi.nlm.nih.gov/26792267/)
- [Abdelnour et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29454104/)

The eigenvalue ordering of a structural graph is not a direct lookup table from low values to
delta/theta and high values to gamma. Connectome harmonics are spatial modes of a selected graph;
electrophysiological frequency bands are temporal measurements. A model may relate them, but the
relation must be derived and tested.

## The anatomical grid dispute belongs in the story

Wedeen and colleagues proposed that major brain pathways form crossing sheets with a grid-like
organization:

- [Wedeen et al., 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC3773464/)

Later work highlighted tractography false positives and disputed a simple crossing-sheet model:

- [Maier-Hein et al., 2017](https://pubmed.ncbi.nlm.nih.gov/29116093/)
- [Galinsky and Frank, 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC6033685/)

The right wiki treatment is not to erase the early SAN 3D-grid intuition. It is to record the
claim, the measurement method, the later challenge, and the surviving abstraction: the brain is a
three-dimensional biological network, but its geometry is multiscale, curved, heterogeneous, and
not adequately described by one literal orthogonal lattice.

## The corrected SAN proposal

The source family supports a layered mechanism:

1. Learned synaptic and dendritic configurations change how local inputs are transformed.
2. Excitatory and inhibitory circuits jointly determine gain, timing, competition, and route.
3. A selected event changes the state of a larger population through axonal projections,
   recurrent recruitment, disinhibition, and propagating activity.
4. Temporary functional assemblies form on top of anatomy and body state.
5. Grid-like codes can provide specific coordinate systems in specific circuits or tasks.
6. Graphs can describe anatomy or functional relations at an explicitly chosen scale.
7. SAN hypothesizes that the receiver-relative pattern of positive and negative departures,
   including relative phase and duration, contributes to what the larger network represents.

The phrase **inhibitory magnification** is retained for the final step only as a hypothesis. It
requires evidence that a local learned event produces a reproducible larger-scale pattern with
content- or behavior-specific consequences beyond changes in mean firing rate, power, or generic
arousal.

## Discriminating experiments

- Perturb PV, SST, VIP, and other inhibitory populations separately while measuring downstream
  gain, route selection, timing, behavior, and population geometry.
- Hold mean firing approximately constant while changing inhibitory timing; test whether SAN
  phase-relational features predict the selected pattern or behavior.
- Compare a binary-gate model, a subtype-specific circuit model, and a continuous state-space
  model on held-out trials.
- Distinguish local inhibitory spread, synaptic projection, traveling cortical activity, and
  hippocampal sharp-wave ripples in the same terminology and analysis.
- Define graph nodes, edges, direction, scale, and measurement method before fitting a spectral
  model.
- Test whether connectome-harmonic or graph features explain temporal oscillations beyond
  anatomy, distance, firing rate, and ordinary recurrent-network baselines.
- Test cortical grid-cell/reference-frame hypotheses outside the entorhinal system with
  cell-resolved recordings and causal perturbations rather than fMRI grid-like signals alone.
- Measure whether a learned local event produces a reproducible cross-scale consequence that
  preserves information about the initiating pattern.

## Dated SAN route

- Internally dated `a0023z.md` records an October 17, 2012 attempt to connect tractography,
  matrices, directed graphs, cortical organization, and testable anatomical questions. Its early
  graph intuition is preserved; its universal anatomical-grid and electromagnetic off-grid
  communication proposals remain hypotheses rather than established anatomy.
- `a0111z.md`, Git-only `b0071y.md`, and `a0129z.md` form the source trunk for
  synapse-to-network magnification through inhibitory patterns.
- `a0364z.md` develops inhibition as train switches and choice bifurcation.
- `a0258z.md` joins 3D neural arrays, signal processing, inhibition, and a graph-Laplacian
  research route.
- `c0000x.md` records "Inhibition maps," "Grid Graph," and inhibitory pattern-complexity as
  explicit book architecture.
- `b0124y.md` develops inhibitory timing, decay, observer/transmitter/inhibited roles, and the
  brush metaphor.
- `b0154y .md` develops the grid/place/reference-frame and spectral-map branch; a later repository
  summary reports an October 9, 2021 recording date, which remains retrospective provenance.
- `a0309z.md` joins bursts, hippocampal sharp-wave ripples, replay, direction-selective retinal
  inhibition, and larger-scale propagation.
- `a0007z.md` contains the deepest research-intake revision, including starburst amacrine cells
  and a move from blanket inhibition toward cell-class, compartment, and circuit specificity.
- `a0287zstar.md`, `b0268ywhisper.md`, `b0302ywhisper.md`, `04san.md`, and `13san.md`
  preserve later extensions, debates, evidence intake, and stronger phase/graph claims.

Exact hashes, Git objects, source roles, legacy-page repairs, and evidence boundaries are recorded
in the [governed source review](/v5ma.github.io/wiki/san/knowledge-graph/reviews/inhibitory-routing-signal-processing-grid-graph-review-20260716.md).

## Book route

This concept belongs in Chapter 15, after dendrites and before recall and Neural Rendering. The
chapter should begin with concrete circuit problems: contrast, competition, timing, routing, and
temporary assembly formation. It should earn the train-switch and inhibitory-magnification terms
only after those mechanisms are understood. Grid cells, anatomical grids, and graph models should
then appear as three explicitly different ways of describing where activity can go and how a
researcher can model it.

## Read next

- [[neural-path-selection-interneurons-choice|Neural Path Selection, Interneurons, and Choice Across Scales]]
- [[inhibitory-neurons|Inhibitory Neurons legacy page]]
- [[inhibitory-interneurons-plasticity-gating|Inhibitory Interneurons and Plasticity Gating]]
- [[inhibitory-decay-oscillation-frequency|Inhibitory Decay and Oscillation Frequency]]
- [[cortical-traveling-waves|Cortical Traveling Waves]]
- [[sharp-wave-ripple|Sharp-Wave Ripple legacy page]]
- [[brain-grid-theory|Brain Grid Theory legacy page]]
- [[brain-as-spectral-graph|Brain as a Spectral Graph]]
- [[grid-cells-place-cells-oscillators|Grid Cells, Place Cells, and Oscillators]]
- [[spectral-graph-theory-brain-oscillations|Spectral Graph Theory legacy page]]
- [[connectome|Connectome]]
- [[flow-of-information-in-the-brain|The Flow of Information in the Brain]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[single-trial-residual-neural-information|The Residual Is Not Automatically Noise]]
- [[saov9-cycle-06-memory-state-drift|SAOv9 Cycle 6]]
