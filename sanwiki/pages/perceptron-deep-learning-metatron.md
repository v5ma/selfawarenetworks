---
title: "From the Perceptron to Deep Learning to the Metatron"
tags: [san, perceptron, metatron, artificial-neurology, san-tomogram]
aliases: [Perceptron to Metatron, Post-Perceptron SAN Architecture]
summary: "A source-faithful bridge from point-unit abstractions through modern neural networks to SAN's proposed Metatron unit and distributed SAN Tomogram, with matched baselines and explicit rejection tests."
status: governed
---

# From the Perceptron to Deep Learning to the Metatron

The Perceptron is one of computing's great simplifications. It turns a set of inputs into a
weighted decision and provides a rule for changing those weights. That compression helped make
machine learning implementable. It was never a complete description of a living neuron.

Self Aware Networks asks what must be put back when the objective is no longer only
classification, but continual embodied learning, multimodal recognition, sensorimotor prediction,
neural rendering, and self-aware control. SAN calls its proposed richer unit the **Metatron**.
The engineering specification is maintained at [[metatron-computational-unit|Metatron Computational
Unit]], while [[metatron|Metatron]] separates that unit from the name's future-agent use.

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

The 2022 sources use the Metatron at two related scales. `a0053z.md` calls it a proposed new model
of the neuron. The August 2022 whitepaper places its functional location across an oscillating
assembly whose cells learn related pattern variants, and says that a bounded assembly can itself
act as a Metatron relative to another assembly. A testable implementation must therefore declare
whether its unit is one artificial cell, a compartmental model, or a bounded population. It is
intended to preserve information that a simple scalar unit discards, but it cannot rely on an
undefined "floating" location.

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

## From a Metatron to a SAN Tomogram

A Metatron is not the complete render. It contributes one stateful, receiver-specific
transformation to a larger recurrent process. The **SAN Tomogram** is the present-day Encyclopedia
name for the distributed, action-ready working state jointly constrained by many such partial
transformations, sensory and bodily signals, memory, and recurrent context.

```text
stateful local unit or bounded assembly
-> partial transformed output
-> named downstream receivers
-> recurrent composition across many routes
-> distributed SAN Tomogram
-> action, reafference, and the next update
```

The 2022 sources use *tomogram*, *Tomograms*, and *tomographic rendering*. The exact compound
**SAN Tomogram** is a current disambiguating label and is not backdated. The distinction prevents a
medical and computational scale error: no one neuron, Metatron, cortical column, or frequency band
contains a complete three-dimensional percept.

See [[san-tomogram|SAN Tomogram: A Distributed, Action-Ready Reconstruction]].

## The SAN development path

### 2015: models and patterns

`a0038z.md` preserves a multi-speaker discussion of top-down models, bottom-up pattern learning,
Perceptrons, backpropagation, and reduction. It is valuable history, but each statement remains
attributed to its speaker.

[[gh-a0038z|Open a0038z]]

### 2017: Hawkins, Numenta, molecules, and gradients

The public Andre Watson podcast connects Jeff Hawkins and Numenta to hierarchical recognition,
then contrasts simple on/off descriptions with graded molecular and synaptic state. It also links
the problem to dendritic computation, multimodal recognition, and future BCI write-in. The
automatic transcript contains obvious errors: "Unintelligence" means *On Intelligence*,
"Reading Institute" means Redwood Neuroscience Institute, and "POMP" means Palm.

- [[gh-nlp4|Open the podcast transcript]]
- [[gh-a0006z|Open Micah's episode synopsis]]
- [Hawkins, Ahmad, and Cui's later cortical-column model](https://www.frontiersin.org/journals/neural-circuits/articles/10.3389/fncir.2017.00081/full)

### 2018: deep learning as BCI infrastructure

`a0223z.md` moves from theory to an engineering program: use three-dimensional convolutional
networks and semantic segmentation to relate volumetric world data to volumetric medical-imaging
data for future neural interfaces.

[[gh-a0223z|Open the 3D CNN and NerveGear source]]

### 2022: biological delta and named architecture

The June-July 2022 notes connect dendritic nonlinearities, action-potential duration, transmitter
release, inhibition, phase-sensitive output, serial arrays, neural rendering, and backprop-like
error correction. The whitepaper then names a multiscale computational unit: the Metatron.
`a0644z.md` makes Perceptron history and Metatron introduction the first planned chapter, and
`a0053z.md` consolidates the term.

- [[gh-a0008z|Biophysical and Neurogrid critique]]
- [[gh-a0177z|Neuron-model donor]]
- [[gh-a0286z|Multimodal transmission donor]]
- [[gh-a0053z|Metatron consolidation]]
- [[gh-whitepaperdraft1|Whitepaper Draft 1]]
- [[gh-whitepaperdraft2|Whitepaper Draft 2]]

### 2024: full artificial-neurology book route

`SAOv9.md` calls for Perceptron mathematics and limitations, backpropagation, CNNs and recurrent
networks, modern deep learning, real neurons and glia, Metatron perception, and future artificial
neurology. It is an editorial architecture rather than a completed account.

[[gh-saov9|Open the tracked SAOv9 outline]]

## Two uses of the name

SAN uses "Metatron" in two related but different ways:

- the proposed richer computational unit; and
- the name addressed to an envisioned future sentient artificial being.

The future-being use is tracked in `a0002z.md` by August 4, 2022. The computational-unit wording is
present in the tracked whitepaper filename history by August 24, followed by the chapter and
changelog explanation on August 28 and the `a0053.metatron` section on September 4. The Wiki keeps
the architecture and the envisioned agent distinct.

## How to test whether the extra complexity is worth it

Compare a point-unit feedforward network, a gated recurrent or selective state-space network, a
spiking network, an active-dendrite or compartmental model, a Metatron-inspired model, and a bounded
multiscale model on the same tasks. Match training data, trainable parameters, persistent-state
memory, compute, latency, hyperparameter-search budget, and calibration as closely as the model
families permit. Report unavoidable mismatches. Remove one proposed feature at a time: dendritic
subunits, recurrence, inhibition, timing, waveform proxy, plastic structure, or body feedback.

The relevant outcomes are not only accuracy. Measure sample efficiency, continual-learning
interference, robustness, multimodal binding, latent-state reconstruction, sensorimotor prediction,
calibration, biological fit, and compute cost. The Metatron earns its name only if the proposed
organization of state creates a repeatable advantage or a more accurate mechanistic account after
capacity and resource advantages are controlled.

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
- [[metatron-computational-unit|Metatron Computational Unit]]
- [[metatron|Metatron]]
- [[artificial-neurology|Artificial Neurology]]
- [[synaptic-unreliability-mvr-2021|Synaptic Unreliability, MVR, and the Ionotropic Information Channel]]
- [[receptive-inceptive-dendritic-projection|Receptive, Inceptive, and Dendritic Projection]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[neural-tuning|Neural Tuning]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli and Artificial Perception]]
- [[bci-instrument-atlas|BCI Instrument Atlas]]
- [[san-golden-corpus-map|SAN Golden Corpus Map]]
