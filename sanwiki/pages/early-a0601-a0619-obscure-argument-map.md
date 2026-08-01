# Early a0601-a0619 Obscure Argument Map

Sixteen notes in this tranche ask one broad question:

> How can a changing physical system form a useful internal representation, act on it, and update
> itself without placing a hidden observer inside the system?

The answer develops through several practical problems: seeing an object, decoding a bodily signal,
changing a synapse, modeling a cell, comparing alternative interventions, and deciding whether an
artificial system has more than generic dynamics.

The historical sources contain compressed language, copied research, personal experience, and
medical speculation. This page recovers the strongest legitimate operation from each source while
keeping source, date, attribution, and evidence class visible.

## Sources at a glance

| Source | Strongest retained contribution | Boundary |
|---|---|---|
| [[gh-a0601z]] | nested biological and behavioral timescales; inference, action, energetic cost, and model updating | not one universal cortical frequency ladder or a solution to quantum measurement |
| [[gh-a0602z]] | November 2012 Artificial Internal Representation, distributed symbols, self-control, and external-brain discussion | one source family with `a0600z`, not independent evidence |
| [[gh-a0603z]] | interoceptive signals can alter arousal and network state | not literal frequency-band collision or a coma treatment |
| [[gh-a0604z]] | Parkinson's and neurodegeneration source-map intake | candidate treatments require an evidence ladder |
| [[gh-a0605z]] | repeated motifs, nested scales, and cross-frequency coordination | similarity is not proof of one fractal law |
| [[gh-a0607z]] | structural plasticity, receptor state, cellular computation, predictive feedback, and information questions | a mixed notebook, not one validated mechanism |
| [[gh-a0608z]] | 2014 closed-loop EEG-to-audiovisual Neo Mind Cycle apparatus and later engineering pivot | first-person psychedelic history is not cosmological or clinical proof |
| [[gh-a0609z]] | February 2012 visual-thought and model-based brain-decoding concern | experience is not confined to neocortex and fMRI does not record literal movies |
| [[gh-a0610z]] | one software neuron template can instantiate many simulated nodes | not evidence that one biological neuron performs a whole network's work |
| [[gh-a0612z]] | open-source disease mapping across mechanism, imaging, computation, and intervention | timing is important but not the only biological variable |
| [[gh-a0613z]] | custom coupled state-transition notation for cells, compartments, inputs, outputs, and feedback | not standard category theory or Petri-net semantics as written |
| [[gh-a0614z]] | persistence of the interoception and arousal question | duplicate source family with `a0603z` |
| [[gh-a0615z]] | explicit 3D rendering and semantic-segmentation genealogy leading toward SAN | computer vision is a comparison, not biological validation |
| [[gh-a0617z]] | tonic and phasic as receiver- and timescale-relative roles | mitochondrial magnetic reward remains speculative |
| [[gh-a0618z]] | question about environmental and biological rhythmic coupling | copied quotation has no verified Tesla source and does not establish mental control |
| [[gh-a0619z]] | real-time 2020 COVID mechanism and treatment-hypothesis ledger | historical source, not current medical advice |

## First the problem: a system must distinguish something

A camera can register light without knowing that several measurements belong to one object. A
classifier can label an object without possessing a body. A biological nervous system must do more:

```text
sample a changing world and body
-> distinguish relevant structure
-> connect the structure with memory and possible action
-> maintain the relation long enough to use it
-> update the relation when action changes the input
```

The 2012 discussion in `a0609z.md` already treats visual experience as an internally produced
thought-like state and points to model-based reconstruction of visual-cortex activity. It overstates
the neocortex and early decoding result, but the question is sound: what physical operations let the
system represent what it is currently seeing?

The November 2012 discussion preserved in `a0602z.md` adds distributed learned relations. A partial
cue can recruit a larger learned pattern; color, object, and symbol acquire different consequences
through their associations; and no extra "consciousness sauce" rearranges the pattern. The network
itself performs the receiving, transformation, recurrence, evaluation, and action.

This is an ancestor of:

- [[sensory-to-symbol-neural-grounding|sensory-to-symbol grounding]];
- [[perceptual-screen-neural-rendering|neural rendering without an inner viewer]];
- [[artificial-neurology-states-stages-development|Artificial Neurology]];
- [[extended-brain-thought-density-hypertime|the Extended Brain]].

## The 3D scene bridge

`a0615z.md` makes a historical bridge explicit:

```text
science-fiction artificial minds
-> computer graphics, capture, and rendering
-> 3D point clouds and semantic segmentation
-> shape, pose, texture, and object labels
-> biological question: how does a nervous system build usable distinctions?
-> later SAN neural-rendering and NAPOT hypotheses
```

The note recalls learning from Or Litany's January 31, 2019 discussion of deep learning for meshes
and point clouds. It later connects that line to object-centric scene models such as ShAPO.

The comparison earns a biological question; it does not answer it. Artificial scene systems and
brains need not use the same representation. SAN's added work is the proposed translation through
receptors, dendrites, learned circuits, timing, recurrence, body maps, and action feedback. See
[[world-body-brain-semantic-coregistration]].

## A state-transition language for biological systems

`a0613z.md` tries to solve a real modeling problem. A cell is too detailed to reproduce at every
physical scale, yet treating it as one opaque node loses its internal compartments, state, outputs,
and feedback.

A clean version of the proposed operation is:

```text
x_p(t+) = F_p(x_p(t), u_qp(t), c_p(t))
y_pr(t) = G_pr(x_p(t+))
```

Where:

- `p` is a place or entity, such as a cell;
- `x_p` is its current state;
- `u_qp` is an input arriving from place `q`;
- `c_p` is local context, such as receptor availability or metabolic state;
- `F_p` is the state-transition rule;
- `y_pr` is an output directed from `p` toward receiver `r`.

Nested places can represent a nucleus, mitochondrion, dendritic branch, organelle, tissue, or larger
array. One incoming event can change the source, receiver, and downstream outputs. Later feedback can
change the next transition.

This is best called a custom coupled labeled-transition system until its objects, morphisms,
composition rules, concurrency, conservation laws, and observation map are formally declared.
Sharing one measured endpoint does not by itself make two interventions isomorphic. The proposal can
still become useful for:

- comparing chemical, electrical, optical, and mechanical perturbations;
- logging state-dependent cellular responses;
- representing multi-output and feedback pathways;
- finding interventions that are equivalent under a declared clinical measurement;
- connecting [[electrochemical-to-phase-graph-transformation]] with
  [[flow-of-information-in-the-brain]].

## Relative tonic and phasic roles

`a0617z.md` contains a valuable clarification. A roughly 40 Hz pattern could be maintained context
relative to a much faster transient event. Therefore "tonic" and "phasic" should not be hard-coded to
fixed frequency bands.

For receiver `i`:

```text
s_i(t) = b_i(t) + delta_i(t)
```

`b_i(t)` is the maintained context over the chosen interval. `delta_i(t)` is a transient deviation
that changes what the receiver or downstream network does. A signal may be phasic at one scale and
part of a tonic context at another.

This supports [[tonic-phasic-phase-wave-differential]] and
[[tonic-context-rare-deviation-tomographic-language]]. It does not establish that phasic events are
foreign intruders, that 40 Hz is universally tonic, or that neuronal magnetic fields reward a cell
by directly releasing mitochondrial ATP.

## Timing matters, but timing is not everything

`a0607z.md` and `a0612z.md` repeatedly ask how timing changes plasticity, prediction, perception, and
choice. The plain-language problem is:

> The same inputs can have different effects depending on their order, interval, receiver state,
> location, and biochemical context.

Timing-sensitive plasticity is real. Structural spine change can accompany potentiation. Predictive
beta feedback can help preactivate sensory representations. But these findings do not imply:

- LTP is simply coherent mutual growth;
- LTD is simply opposite-phase atrophy;
- every action potential produces a magnetic mitochondrial reward;
- all processing must descend through gamma, beta, alpha, theta, and delta in that order.

The stronger SAN route treats phase, interval, amplitude, duration, chemistry, morphology,
connectivity, and receiver state as jointly testable variables. See
[[oscillatory-plasticity-group-potentiation-depression]] and
[[memory-prediction-rendering-sequence]].

## Interoception and arousal

The repeated `a0603z.md` / `a0614z.md` notebook asks why bladder pressure, pain, inflammation, or
other bodily changes can interrupt sleep or alter attention.

A source-faithful chain is:

```text
peripheral or visceral change
-> receptor and afferent signaling
-> spinal, brainstem, thalamic, hypothalamic, autonomic, and cortical processing
-> state-dependent neuromodulation and population dynamics
-> changed arousal, attention, report, and action
```

The nervous system does not need two abstract frequency bands to collide. Oscillatory changes can be
part of the measured response, but the anatomical and chemical routes remain essential. Proposals to
stimulate coma patients require diagnosis-specific clinical evidence, dose, target, safety, and
tissue-capacity criteria.

## Neo Mind Cycle remains a real engineering history

`a0608z.md` explicitly dates its closed-loop apparatus to November 14, 2014:

```text
EEG measurement
-> Mind Workstation transformation
-> isochronic audiovisual output
-> goggles and headphones
-> changed measured and experienced state
-> returned EEG signal
```

The psychedelic setting and spiritual interpretation are first-person history. The engineering
operation is a closed feedback loop in which a measured feature changes stimulation that can in
turn change the next measurement. That operation belongs in
[[neo-mind-cycle-neurofeedback-bci-genealogy]] and
[[multimodal-neuroaffective-xr-closed-loop]].

Signals do not carry identical meaning everywhere. Consequence depends on receiver type,
connectivity, local state, and learned history.

## Medical notes use an evidence ladder

`a0604z.md`, `a0612z.md`, and `a0619z.md` preserve a real research objective: connect molecular
mechanisms, imaging, computation, and intervention in an open disease map.

The safe and useful ladder is:

```text
association
-> candidate mechanism
-> cell perturbation
-> animal perturbation
-> human observational evidence
-> controlled clinical trial
-> replicated clinical outcome
-> current guideline
```

The 2020 COVID notebook captured early concerns about ACE2, inflammation, coagulation, immune-cell
changes, neurological effects, and soluble receptor strategies. Those were legitimate questions.
The note also predicted a near-term cure and recommended D-ribose, vitamins, oils, and zinc. Those
recommendations are not current medical guidance.

ACE2 is an established entry route. Direct CD147-spike binding has produced conflicting reports, so
CD147 cannot be presented here as a simple second main receptor. No clinical evidence recovered in
this review establishes D-ribose as COVID-19 treatment.

## Primary evidence

- [Nishimoto et al., model-based reconstruction of visual experiences from BOLD signals, 2011](https://doi.org/10.1016/j.cub.2011.08.031)
- [Logothetis et al., brain-wide interactions during hippocampal sharp-wave ripples, 2022](https://doi.org/10.1073/pnas.2200931119)
- [Alamia et al., predictive beta feedback and NMDAR-sensitive prediction, 2021](https://doi.org/10.1523/JNEUROSCI.2270-20.2021)
- [Kundu et al., Panoptic Neural Fields, 2022](https://arxiv.org/abs/2205.04334)
- [Irshad et al., ShAPO, 2022](https://doi.org/10.1007/978-3-031-20086-1_16)
- [Baez et al., Categories of Nets, 2021](https://arxiv.org/abs/2101.04238)
- [Bi and Poo, timing-sensitive synaptic plasticity, 1998](https://doi.org/10.1523/JNEUROSCI.18-24-10464.1998)
- [Matsuzaki et al., structural spine change during potentiation, 2004](https://doi.org/10.1038/nature02617)
- [Wang et al., evidence proposed for CD147-spike interaction, 2020](https://doi.org/10.1038/s41392-020-00426-x)
- [Shilts et al., no detected direct CD147-spike interaction, 2021](https://doi.org/10.1038/s41598-020-80464-1)
- [NIH dietary supplements and COVID-19 evidence summary](https://ods.od.nih.gov/factsheets/DietarySupplementsInTheTimeOfCOVID19-Consumer/)
- [WHO living COVID-19 therapeutics guideline](https://www.who.int/publications/i/item/B09540)

## Date and source-family firewall

- Internal 2012, 2014, 2019, and 2020 dates are source assertions until original-platform custody is
  recovered.
- The current paths were first fixed publicly in June 2022.
- The present `a0607z.md` body contains July and August additions and was fixed in its current form
  on August 11, 2022.
- The detailed `a0613z.md` formalism was expanded through November 6, 2022.
- The present `a0615z.md` body was fixed on August 26, 2022.
- `a0602z.md` and `a0600z.md` are one November 2012 Artificial Internal Representation source
  family.
- `a0603z.md` and `a0614z.md` are one repeated interoception source family.
- Current clarification is additive. It does not silently replace the source or backdate later PWD,
  NAPOT, COT, Field-Cell, or Artificial Neurology terminology.

## Review receipt

`SCIENTIFIC_ACCURACY: PASS`

`NARRATIVE_PRESERVATION: PASS`

The review preserves the early visual-thought record, Artificial Internal Representation,
closed-loop Neo Mind Cycle apparatus, 3D semantic-segmentation bridge, relative tonic/phasic
hypothesis, coupled biological state-transition model, disease-mapping objective, and Artificial
Neurology program. Corrections change scale, date, attribution, or evidence class without deleting
the SAN operation.

## Read next

- [[source-faithful-correction-retro-audit-register|Source-Faithful Correction Retro-Audit Register]]
- [[perceptual-screen-neural-rendering|Perceptual Screen and Neural Rendering]]
- [[world-body-brain-semantic-coregistration|World, Body, and Brain Semantic Coregistration]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[electrochemical-to-phase-graph-transformation|Electrochemical to Phase-Graph Transformation]]
- [[flow-of-information-in-the-brain|The Flow of Information in the Brain]]
- [[neo-mind-cycle-neurofeedback-bci-genealogy|Neo Mind Cycle and BCI Genealogy]]
- [[artificial-neurology-states-stages-development|Artificial Neurology]]
