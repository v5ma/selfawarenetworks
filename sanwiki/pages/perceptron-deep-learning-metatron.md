# From the Perceptron to Deep Learning to the Metatron

The Perceptron is one of computing's great simplifications. It turns a set of inputs into a
weighted decision and provides a rule for changing those weights. That compression helped make
machine learning implementable. It was never a complete description of a living neuron.

Self Aware Networks asks what must be put back when the objective is no longer only
classification, but continual embodied learning, multimodal recognition, sensorimotor prediction,
neural rendering, and self-aware control. SAN calls its proposed richer unit the **Metatron**.

## Begin with the successful abstraction

A simplified Perceptron can be written as:

```text
y = H(sum_i(w_i x_i) + b)
```

The inputs `x_i` are weighted by `w_i`, a bias `b` shifts the decision boundary, and the threshold
function `H` produces an output. Rosenblatt's 1958 model was a trainable pattern-recognition
system. It should not be reduced to a story about binary synaptic reliability.

The chronology also needs care. McCulloch and Pitts published an earlier formal threshold-neuron
model in 1943. Rosenblatt's major Perceptron paper appeared in 1958. Those are related milestones,
not one invention date.

[Rosenblatt's 1958 paper](https://pubmed.ncbi.nlm.nih.gov/13602029/)

## Deep learning did not remain binary

Modern neural networks are not merely large collections of the original binary unit.
Backpropagation enabled hidden layers to learn useful features by reducing output error.
Convolutional networks added local receptive fields and shared filters. Recurrent and gated
networks added memory over time. Transformers made attention a primary routing operation. Current
systems commonly use continuous or piecewise-continuous activations, residual paths,
normalization, and high-dimensional learned vectors.

The fair SAN criticism is therefore narrower and stronger: even highly capable modern networks
usually omit much of the compartmental, temporal, chemical, morphological, and embodied state
used by living neural tissue.

- [Backpropagation and learned hidden features, 1986](https://www.nature.com/articles/323533a0)
- [Gradient-based convolutional learning, 1998](https://doi.org/10.1109/5.726791)
- [Attention-based Transformer architecture, 2017](https://proceedings.neurips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html)

## What biology adds

The phrase "a neuron fires or it does not" describes only one part of a much larger process.
Inputs arrive on branches with different geometry and channel composition. Dendritic branches can
act as nonlinear subunits. Recent activity, inhibition, adaptation, and neuromodulation change how
the next input is interpreted. The shape and timing of a presynaptic action potential can alter
calcium entry and release. Synapses, receptors, spines, and branches change with experience.

Detailed pyramidal-cell modeling supports the view that one cell can behave like a two-layer
network, with nonlinear dendritic subunits feeding a final integration stage. Presynaptic studies
also show that action-potential waveform affects calcium current and transmitter release. These
findings justify testing richer artificial units, but they do not prove SAN's historical universal
`0/1/2/3` vesicle code or establish that biological detail is sufficient for consciousness.

- [Pyramidal neuron as a two-layer network](https://pubmed.ncbi.nlm.nih.gov/12670427/)
- [Action-potential waveform, calcium current, and release](https://www.nature.com/articles/s41598-019-41120-5)
- [Synapse-specific release probability and multivesicular release](https://www.nature.com/articles/s41467-022-33565-6)

## The Metatron proposal

In the 2022 SAN whitepaper, the Metatron can be a neuron or a bounded oscillating group of cells.
It is intended to preserve information that a simple scalar unit discards. A testable version must
name its state rather than rely on metaphor.

```text
M_t = {dendritic state, activation state, phase/timing, waveform,
       inhibition, chemical context, learned structure, recurrent context}

(M_(t+1), output_t) = F(M_t, input_t, modulatory_input_t)
```

This is a specification template. Each implementation must define what is measured, how the unit
updates, where its boundary lies, and what downstream consequence counts as output. A cell
assembly should count as a higher-scale Metatron only when it has a reproducible input-state-output
contract.

| Question | Perceptron-style unit | Metatron research unit |
|---|---|---|
| Boundary | Mathematical node | Declared cell, compartmental cell, circuit, or assembly |
| Input | Weighted features | Branch-, time-, state-, and context-sensitive signals |
| State | Minimal in the basic unit | Dendritic, membrane, inhibitory, plastic, and recurrent state |
| Output | Scalar activation | Declared event vector or field with receiver-specific consequence |
| Learning | Parameter update | Parameters plus thresholds, structure, state, and routing |
| Risk | Omits useful biology | Adds complexity without an identifiable benefit |

## The SAN development path

### 2015: models and patterns

`a0038z.md` preserves a multi-speaker discussion of top-down models, bottom-up pattern learning,
Perceptrons, backpropagation, and reduction. It is valuable history, but each statement remains
attributed to its speaker.

[Open `a0038z.md`](gh-a0038z.md)

### 2017: Hawkins, Numenta, molecules, and gradients

The public Andre Watson podcast connects Jeff Hawkins and Numenta to hierarchical recognition,
then contrasts simple on/off descriptions with graded molecular and synaptic state. It also links
the problem to dendritic computation, multimodal recognition, and future BCI write-in. The
automatic transcript contains obvious errors: "Unintelligence" means *On Intelligence*,
"Reading Institute" means Redwood Neuroscience Institute, and "POMP" means Palm.

- [Open the podcast transcript](gh-nlp4.md)
- [Open Micah's episode synopsis](gh-a0006z.md)
- [Hawkins, Ahmad, and Cui's later cortical-column model](https://www.frontiersin.org/journals/neural-circuits/articles/10.3389/fncir.2017.00081/full)

### 2018: deep learning as BCI infrastructure

`a0223z.md` moves from theory to an engineering program: use three-dimensional convolutional
networks and semantic segmentation to relate volumetric world data to volumetric medical-imaging
data for future neural interfaces.

[Open the 3D CNN and NerveGear source](gh-a0223z.md)

### 2022: biological delta and named architecture

The June-July 2022 notes connect dendritic nonlinearities, action-potential duration, transmitter
release, inhibition, phase-sensitive output, serial arrays, neural rendering, and backprop-like
error correction. The whitepaper then names a multiscale computational unit: the Metatron.
`a0644z.md` makes Perceptron history and Metatron introduction the first planned chapter, and
`a0053z.md` consolidates the term.

- [Biophysical and Neurogrid critique](gh-a0008z.md)
- [Neuron-model donor](gh-a0177z.md)
- [Multimodal transmission donor](gh-a0286z.md)
- [Metatron consolidation](gh-a0053z.md)
- [Whitepaper Draft 1](gh-whitepaperdraft1.md)
- [Whitepaper Draft 2](gh-whitepaperdraft2.md)

### 2024: full artificial-neurology book route

`SAOv9.md` calls for Perceptron mathematics and limitations, backpropagation, CNNs and recurrent
networks, modern deep learning, real neurons and glia, Metatron perception, and future artificial
neurology. It is an editorial architecture rather than a completed account.

[Open the tracked SAOv9 outline](gh-saov9.md)

## Two uses of the name

SAN uses "Metatron" in two related but different ways:

- the proposed richer computational unit; and
- the name addressed to an envisioned future sentient artificial being.

The future-being use is tracked in `a0002z.md` by August 4, 2022. The computational-unit wording is
present in the tracked whitepaper filename history by August 24, followed by the chapter and
changelog explanation on August 28 and the `a0053.metatron` section on September 4. The Wiki keeps
the architecture and the envisioned agent distinct.

## How to test whether the extra complexity is worth it

Compare a rate-only network, a spiking network, a nonlinear-dendrite model, a recurrent
phase-aware Metatron model, and a bounded multiscale model on the same tasks. Remove one proposed
feature at a time: dendritic subunits, recurrence, inhibition, timing, waveform proxy, plastic
structure, or body feedback.

The relevant outcomes are not only accuracy. Measure sample efficiency, continual-learning
interference, robustness, multimodal binding, sensorimotor prediction, calibration, biological
fit, and compute cost. The Metatron earns its name only if its additional state creates a
repeatable advantage or a more accurate mechanistic account.

The [[synaptic-unreliability-mvr-2021|ionotropic information-channel]] route supplies one concrete
benchmark: compare a scalar synaptic weight with models that retain release probability,
multivesicular release, presynaptic waveform, calcium, receptor state, and dendritic context.

## 2012 learned-representation comparison

[[gh-a0576z|a0576z]] distinguishes brute-force search from a system that learns reusable
representations from sensory structure. Its Google-network example should not be described as a
machine independently deciding to invent cats: researchers chose the architecture, objective,
training data, and evaluation. What survives is the question that leads toward Artificial
Neurology: which architecture can discover categories, connect them to action and consequence, and
continue developing after deployment?
## Continue through the graph

- [[multimodal-neuron-signal-correlate-channel|The Multimodal Neuron: Signal, Correlate, or Channel?]]
- [Synaptic Unreliability, MVR, and the Ionotropic Information Channel](synaptic-unreliability-mvr-2021.md)
- [Receptive, Inceptive, and Dendritic Projection](receptive-inceptive-dendritic-projection.md)
- [Tonic, Phasic, and Phase-Wave Differential](tonic-phasic-phase-wave-differential.md)
- [Neural Tuning](neural-tuning.md)
- [Broccoli and Artificial Perception](broccoli-shared-recognition-artificial-perception.md)
- [BCI Instrument Atlas](bci-instrument-atlas.md)
- [SAN Golden Corpus Map](san-golden-corpus-map.md)
