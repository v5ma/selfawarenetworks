# JEPA and SAN Phase Comparison

This page compares a machine-learning architecture with a proposed SAN neural mechanism. It does
not claim that the brain literally implements JEPA, that neural phase is a latent vector, or that
similarity between two models proves biological identity.

## Recovered source operation

Yann LeCun released version 0.9.2 of *A Path Towards Autonomous Machine Intelligence* on June 27,
2022. Micah Blumberg opened `a0110z.md` on June 28 as a direct response to that release and expanded
it through July 1. The note asked whether JEPA's compressed prediction of one representation from
another could be translated into a biological operation distributed across cells, circuits, and the
whole brain:

`related views or states -> compressed comparator -> predicted representation`

The proposed SAN translation was:

`distributed neural input -> state-dependent compression -> phase, frequency, and duration pattern
-> receiver-relative comparison -> learned relevance for choice`

The historical note used the phrase "like an abstract VAE." That phrase records the route by which
Micah understood the new proposal; it is not a current technical classification. A JEPA is not a
variational autoencoder: it need not infer a probabilistic latent variable, reconstruct the input,
or use a decoder.

## What JEPA establishes

LeCun's 2022 position paper proposed a hierarchical architecture for agents that predict
representations at multiple levels of abstraction and time. In the later image implementation,
I-JEPA, a context encoder represents visible image blocks, a target encoder represents other image
blocks, and a predictor estimates the target representations from the context representation plus
location information. Training minimizes disagreement in representation space rather than
reconstructing target pixels. V-JEPA later applied feature prediction to video.

These are machine-learning designs and results. They do not establish a cortical anatomy, neural
code, oscillatory mechanism, theory of consciousness, or universal biological learning rule.
JEPA also should not be summarized as merely forcing two views to produce the same output. The
predictor estimates a target representation from a context and declared side information.

## What neurophysiology establishes

Several findings make a phase-based comparison scientifically discussable without proving the SAN
interpretation:

- Spike timing relative to an ongoing local-field-potential phase carried visual information beyond
  spike count in macaque primary visual cortex.
- The phase relation between rhythmic neuronal groups can change their effective interaction.
- Attention can be accompanied by selective synchronization between visual areas and by
  long-range coupling between frontal and visual cortex.

These results show that phase can participate in neural coding and routing. They do not show that
phase alignment means two populations represent the same object, that a synchronized assembly is a
JEPA embedding, or that coherence alone produces perception or consciousness.

## Bounded comparison by scale

**Cellular scale.** A neuron integrates spatially and temporally distributed synaptic inputs under
its current dendritic, membrane, inhibitory, and neuromodulatory state. Its output timing and
waveform can affect downstream receivers. This supports a broad receive-transform-project
comparison. It does not make one neuron a complete JEPA or a complete tomographic renderer.

**Circuit scale.** Recurrent populations can combine current input with learned state, generate
predictions, and coordinate effective communication through task-dependent timing relations. The
SAN hypothesis is that a receiver-relative phase-wave differential can be one component of the
update. It remains necessary to compare that model against firing rate, ordinary timing,
population-state, predictive-coding, and recurrent-network alternatives.

**Network and behavioral scale.** Distributed sensory, memory, association, action-selection, and
motor systems can maintain context over different timescales and update one another through
recurrent pathways. This provides a possible biological comparator for hierarchical prediction.
It does not imply that every cortical area performs one universal column algorithm or that each
anatomically higher stage always represents a longer time horizon.

## The SAN hypothesis

The source-faithful SAN proposition is narrower and more testable than the previous page stated:

> A learned neural receiver may compare a compressed, context-dependent oscillatory state with a
> later or concurrent state. Receiver-relative differences in phase, timing, frequency, duration,
> magnitude, and route may contribute to prediction, selection, and updating.

The 2022 source proposed encoding an abstract prediction as a frequency that persists for a bounded
duration and connected hierarchical abstraction to multiple timescales. It then joined coincidence
and difference detection through phase comparison to choice at cellular, assembly, and whole-brain
scales.

In January 2025, `resnote07.md` made the JEPA-phase analogy explicit: Micah proposed that
phase-aligned brain regions or agents could mark agreement about parts of a shared pattern. That
file contains both Micah-authored prompts and assistant-generated explanation; only the
speaker-labeled Micah passages are historical Micah evidence. The fuller 2025 text is a later
synthesis and must not be backdated into 2022.

## What would distinguish the hypothesis

A useful experiment would record a declared source and receiver population during prediction of a
masked, occluded, or future target. It would test whether a preregistered multidimensional
receiver-relative state predicts the target population and behavior better than:

1. firing rate or spike count alone;
2. phase or coherence alone;
3. a standard recurrent population-state model;
4. an established predictive-coding or state-space baseline.

A causal test would perturb phase relation while matching mean rate, power, arousal, movement, and
sensory input. The stronger SAN analogy would gain support only if the proposed state improves
held-out prediction and selective perturbation changes the predicted receiver or behavior. It would
be weakened if the extra PWD variables add no predictive or causal value.

An engineering test can separately compare a conventional JEPA with a declared oscillator- or
complex-valued variant on embodied prediction and planning tasks. Better performance would support
that machine architecture, not prove that the brain uses the same mechanism.

## Chronology

- **June 27, 2022:** LeCun released version 0.9.2 of the JEPA-centered position paper.
- **June 28, 2022:** Micah first publicly Git-fixed `a0110z.md` in direct response.
- **June 29 to July 1, 2022:** the note gained the sparse-comparator, frequency-duration,
  multiple-timescale, and phase-comparison passages.
- **January 2025:** `resnote07.md` explicitly compared phase alignment among regions or agents with
  agreement in a JEPA-like representation.
- **February 2025:** `vecA.md` and `vecB.md` compiled later NAPOT, PWD, multimodal, and JEPA
  extensions. These compilations contain mixed human and AI material and are later synthesis, not
  proof of the 2022 wording.

This is a same-period response and subsequent extension, not evidence that SAN predicted JEPA
before LeCun's release. Earlier SAN memory-prediction and oscillation sources may be conceptual
ancestors, but they do not contain the JEPA comparison.

## Image status

No medically accurate image is accepted for this page. A source-bounded comparison prompt is
recorded as `IMG-SAN-JEPA-PHASE-COMPARATOR-001` for a later dedicated image session.

## Read next

- [[gh-a0110z|June-July 2022 JEPA source note]]
- [[information-pipeline|Information Pipeline]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[brain-as-memory-prediction-machine|Brain as a Memory-Prediction Machine]]
- [[multi-timescale-reference-frames|Multi-Timescale Reference Frames]]
- [[computational-phase-synchronization|Computational Phase Synchronization]]
- [[tonic-phasic-canvas|Tonic and Phasic Roles]]
- [[napot-overview|NAPOT Overview]]

## Sources

### SAN genealogy

- [Initial June 28, 2022 `a0110z.md` fixation](https://github.com/v5ma/selfawarenetworks/blob/e81148ded573ba8e70cf617f516c7042f40f079f/a0110z.md)
- [July 1, 2022 expanded `a0110z.md`](https://github.com/v5ma/selfawarenetworks/blob/e32a409a11fdfbc5759cb18d49a44f11f1f4740a/a0110z.md)
- [January 2025 `resnote07.md`](https://github.com/v5ma/selfawarenetworks/blob/8ec93cb8882621973f265974736651f992e124c0/resnote07.md)

### Machine learning

- [LeCun (2022), *A Path Towards Autonomous Machine Intelligence*](https://openreview.net/pdf?id=BZ5a1r-kVsf)
- [Assran et al. (2023), I-JEPA](https://arxiv.org/abs/2301.08243)
- [Bardes et al. (2024), V-JEPA](https://arxiv.org/abs/2404.08471)

### Neuroscience boundary

- [Womelsdorf et al. (2007), phase relation and effective neuronal interaction](https://doi.org/10.1126/science.1139597)
- [Montemurro et al. (2008), phase-of-firing coding](https://pubmed.ncbi.nlm.nih.gov/18328702/)
- [Gregoriou et al. (2009), frontal-visual coupling during attention](https://pmc.ncbi.nlm.nih.gov/articles/PMC2849291/)
- [Bosman et al. (2012), selective synchronization between visual areas](https://pmc.ncbi.nlm.nih.gov/articles/PMC3457649/)
