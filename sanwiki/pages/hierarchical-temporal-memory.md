# Hierarchical Temporal Memory

**Hierarchical Temporal Memory (HTM)** is a family of brain-inspired computational models developed at Numenta. HTM uses sparse distributed representations, active dendritic segments, sequence context, and local learning rules to model prediction and temporal memory. It is a computational research program informed by cortical anatomy and physiology. It is not a medically validated model of all neocortex and does not establish one universal cortical algorithm.

## Historical and technical boundary

Jeff Hawkins and colleagues developed the memory-prediction framework and Numenta's HTM program. Dileep George co-founded Numenta and contributed to early hierarchical temporal modeling, but his later Recursive Cortical Network and predictive-microcircuit work is a distinct research line. Treating every Numenta, Thousand Brains, and George model as one mechanism erases meaningful differences among them.

A peer-reviewed Numenta sequence-memory model used sparse representations, active dendritic segments, and contextual depolarization to explain high-order sequence learning ([Hawkins and Ahmad, 2016](https://doi.org/10.3389/fncir.2016.00023)). A later paper proposed that thousands of synapses and active dendrites support robust sequence memory and recognition ([Hawkins, Ahmad, and Cui, 2017](https://doi.org/10.3389/fncir.2017.00081)). These are explicit computational models with biological correspondences. Their task performance and internal consistency do not prove that cortical neurons implement every modeled operation as specified.

## From HTM to Thousand Brains

The Thousand Brains framework adds object- and body-centered location representations, movement-updated reference frames, and agreement among many cortical models ([Hawkins et al., 2019](https://doi.org/10.3389/fncir.2018.00121)). This is a closer comparator to SAN's distributed, sensorimotor account than a simple feedforward hierarchy.

The framework proposes grid-cell-like location mechanisms in neocortical columns. Evidence for entorhinal grid cells and cortical columnar motifs does not by itself demonstrate grid-like location codes in every cortical column. The proposal should be evaluated by its own predicted neural variables, perturbations, and behavior.

The Thousand Brains Project is now an open-source AI research effort as well as a theory program. Results from its software can test computational sufficiency and engineering value. They remain distinct from physiological confirmation in living cortex.

## Dileep George's separate comparator

George and colleagues derive a detailed thalamic and cortical circuit for predictive visual inference from a generative model ([George et al., 2025](https://doi.org/10.1126/sciadv.adr6698)). The model assigns explicit roles to feedforward, feedback, lateral, laminar, columnar, and thalamic pathways and generates falsifiable predictions. It is relevant to SAN because it connects recurrent visual inference to anatomical constraints.

This model is not HTM, and neither model is a measured universal cortical microcircuit. They should be compared as capacity-matched computational alternatives, not combined into one generic claim that the cortex predicts.

## The SAN comparison

Micah's SAN source nodes engage HTM as an important predecessor for hierarchy, context, sparse representation, active dendrites, prediction, and learned sequence structure. SAN adds different commitments:

1. receiver-relative timing, waveform, duration, magnitude, and spatial relation are candidate coding variables;
2. tonic population state is proposed to act as an ongoing receiver context;
3. phasic departures are proposed to carry differentiated updates;
4. receive-transform-project relations are proposed to recur across cellular, circuit, and network scales; and
5. distributed perception and action are proposed to arise without a localized inner observer.

These additions are not established merely because HTM contains active dendrites or Thousand Brains contains reference frames. SAN must show that its phase and projection variables improve held-out prediction or causal explanation beyond strong HTM, Thousand Brains, predictive-coding, recurrent-network, and George-style generative models.

HTM should also not be characterized as transistor-like in opposition to a biologically oscillatory SAN. HTM software abstracts many biological dynamics; an abstraction is not a claim that neurons are literal transistors. The empirical question is whether SAN's added oscillatory variables explain a result that a capacity-matched model without them cannot.

## What is established and what remains proposed

**Established component science**

- Neocortex contains recurrent, feedforward, feedback, laminar, and long-range pathways.
- Dendrites perform nonlinear and context-sensitive operations.
- Sparse population activity and sequence-dependent responses occur in many systems.
- Sensorimotor movement can update neural representations.
- Cortical areas share recurring circuit themes while retaining substantial specialization.

**Computationally demonstrated**

- HTM-family models can learn sparse temporal structure under specified algorithms.
- Thousand Brains implementations can test object-centered sensorimotor learning in software.
- George-style generative models can support recognition, segmentation, and predictive inference under their model assumptions.

**Still proposed**

- One HTM or Thousand Brains algorithm explains all cortical function.
- Grid-like reference-frame codes exist in every cortical column.
- SAN phase-wave differentials are the physical implementation of HTM-style context or voting.
- An exit-terminal sparse representation is a biological pointer with the role SAN assigns it.
- Any of these models, by itself, explains consciousness.

## Discriminating tests

- Compare models on the same inputs, perturbations, capacity, and held-out tasks.
- Record laminar and dendritic variables predicted by each model rather than comparing diagrams alone.
- Separate reference-frame, sequence-context, rate, power, phase, movement, and arousal contributions.
- Test whether the proposed variable is necessary, not merely correlated with successful inference.
- Require a result that can favor HTM, Thousand Brains, George's model, SAN, or a simpler recurrent alternative.

## Related concepts

- [[brain-as-memory-prediction-machine|Memory-prediction framework]]
- [[sparse-distributed-representation|Sparse distributed representations]]
- [[cortical-columns|Cortical columns]]
- [[reference-frames-cortical-knowledge|Reference frames and cortical knowledge]]
- [[dendrites-as-computational-units|Dendrites as computational units]]
- [[predictive-coding|Predictive coding]]
- [[phase-wave-differentials|Phase-wave differentials]]
- [[tonic-canvas-phasic-paint|Tonic canvas and phasic ink]]
- [[napot-overview|NAPOT overview]]

## SAN source lineage

The SAN archive records Micah's engagement with HTM in [[gh-a0372z|a0372z]], including a note dated February 22, 2014 with later 2022 revisions, and cites Numenta's sparse-representation work in [[gh-a0001z|a0001z]]. These nodes establish the intellectual lineage of SAN's comparison. They do not establish the biological correctness of HTM or of SAN's proposed oscillatory extension.