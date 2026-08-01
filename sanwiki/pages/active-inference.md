# Active Inference

**Active inference** is a formal approach in which an adaptive system updates beliefs under a generative model and acts so that sampled sensory and bodily states remain compatible with viable, preferred states. In the Free Energy Principle (FEP) literature, perception, learning, and action can be described through variational inference. Planning is commonly expressed through policies evaluated using expected free energy.

This page is a bridge, not a declaration that SAN and active inference are the same theory. It separates the established formal vocabulary from proposed SAN/NAPOT interpretations and from comparison or priority claims.

> **Claim boundary:** Active inference is a mathematical and computational framework with published neural process theories. It does not entail SAN's tonic canvas, phasic ink, phase-wave differentials, NAPOT reconstruction, Gamma Consideration Sandwich, or field-cell observer. Those are additional SAN hypotheses whose biological value depends on distinctive measurements and interventions.

## Why this page is needed

The SAN Wiki already discusses [[free-energy-principle|the Free Energy Principle]], [[predictive-coding|predictive coding]], [[san-vs-friston-active-inference|SAN versus Friston]], and multiple prediction pages. Without a bridge, several different claims can collapse into the slogan "the brain minimizes prediction error." That slogan is too coarse.

| Term | Bounded meaning |
|---|---|
| Free Energy Principle | A general formal claim that self-organizing systems can be described as minimizing variational free energy, a computable functional that bounds surprisal under a specified generative model and variational density |
| Generative model | A model of how hidden causes and actions generate observations |
| Variational free energy | An objective used to approximate Bayesian inference; it is not a directly measured tissue variable and is not identical to one sensory error signal, entropy, metabolic energy, or an electromagnetic field |
| Active inference | Perception and action cast as inference: internal states update, and action changes sampled or bodily states so observations become compatible with predictions and preferences |
| Expected free energy | A policy-evaluation quantity that can combine preferred outcomes with reduction of uncertainty; it is not the same quantity as present-time variational free energy |
| Predictive coding | A family of message-passing schemes using predictions and residual errors; it can implement parts of perceptual inference but is not a synonym for the entire FEP or every active-inference model |

## Source recovery: what SAN added, and when

Active inference was already a developed framework before SAN explicitly discussed it. The source-faithful SAN development is:

1. **June 8, 2022 - explicit engagement and a nested-timescale extension.** In the first public Git fixation of [`a0601z.md`](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0601z.md), Micah credits Karl Friston's account of value, surprise, motivation, world modeling, and scale-dependent behavior. Micah then adds a SAN proposal: interacting neural processes span synaptic, spike, circuit, column, population-rhythm, behavioral, and cultural [[multi-timescale-reference-frames|timescales]]. The Antikythera "gears" are an analogy for interacting rates, not a claim that cortical anatomy is a literal clockwork hierarchy or that frequency alone determines a represented time horizon.
2. **September 2024 - an explicit active-inference/NAPOT bridge.** The dialogue-form source [`03san.md`](https://github.com/v5ma/selfawarenetworks/blob/212974335bdaa2e769f889ca319ec37fb747ec9d/03san.md) again gives Friston credit and asks whether active inference can be integrated with NAPOT, tonic/phasic organization, and recurrent rendering. It is a later exploratory synthesis, not evidence that the full integration was present in June 2022.
3. **January-May 2025 - stronger wave and approximation syntheses.** Later sources such as [`raynote16.md`](https://github.com/v5ma/selfawarenetworks/blob/049381ed44008f3e32a259c4aaea6b3b389b60f9/raynote16.md), [`07san.md`](https://github.com/v5ma/selfawarenetworks/blob/72952cc14e77988d60d3b09b76fbad55261ad0d7/07san.md), and [`08san.md`](https://github.com/v5ma/selfawarenetworks/blob/cb9b287776a34ec4ee081901f313e8c1a26ed5f7/08san.md) propose connections among mismatch reduction, wave-difference dissipation, PWD, NDCA, NAPOT, and active inference. These are stronger, partly AI-assisted synthesis sources. Their identities and claims must be tested rather than backdated.

The resulting SAN source ladder is:

**Friston's prior framework -> Micah's 2022 nested oscillatory-timescale extension -> the 2024 active-inference/NAPOT bridge -> the 2025 PWD/NDCA/wave-dissipation synthesis.**

This chronology describes the development of SAN's interpretation. It is not a claim that SAN originated active inference, variational free energy, Bayesian belief updating, or predictive coding.

## Framework and evidence

Friston's 2010 review describes variational free energy as a tractable objective that bounds surprise under a generative model. It relates perceptual inference to changes in activity, learning to changes in connection efficacy, attention to gain, and action to the suppression of sensory prediction errors associated with expected trajectories. The 2017 paper *Active Inference: A Process Theory* goes further than an abstract principle by proposing neuronal message passing for perception and policy selection.

The evidence should be read in layers:

- **Formal and computational demonstrations.** A 2009 proof-of-concept produced adaptive mountain-car behavior by minimizing free energy rather than specifying a conventional reward function. A 2012 visual-search model generated sequential saccades by treating gaze shifts as experiments that reduce uncertainty. These demonstrate what specified models can do; they are not direct recordings of a brain implementing every model variable.
- **Behavioral model comparisons.** Vossel and colleagues found that a hierarchical Bayesian precision model best explained trial-by-trial saccadic response speed in a volatile spatial-attention task. Schwartenbeck and colleagues reported choices better explained by a surprise-minimization model than by expected utility alone in their tasks. These are empirical results for bounded paradigms, not universal confirmation of FEP.
- **Model-based neural evidence.** FitzGerald and colleagues used MEG and dynamic causal modeling during perceptual decisions. Estimated pyramidal-cell gain was related to response speed and posterior-parietal ramping, as predicted by a generalized predictive-coding model. The inference depends on the specified neural-mass and connectivity model; it does not directly identify a universal prediction-error cell or rhythm.
- **Anatomical process theories.** Adams, Shipp, and Friston argued that descending motor signals can be understood as proprioceptive predictions rather than conventional commands, with reflex arcs resolving prediction errors. Their paper is an anatomically detailed theoretical review with discriminating predictions, not a settled map of every motor pathway.

Active inference therefore has formal, behavioral, and model-based neurobiological support for specific components. It does not yet have one agreed anatomical realization, and it does not imply that all neural activity is predictive coding. SAN should not treat it as a substrate-free slogan waiting for SAN to supply its first mechanism; equally, active-inference evidence does not establish SAN's phase, rendering, or consciousness claims.

## Where SAN connects

SAN can be compared with active inference at several levels without identifying their variables:

1. **Maintained context.** SAN's [[tonic-oscillation-as-predictive-reference-frame|tonic reference activity]] may play a prior-like or context-setting role. A measured oscillation is not literally a probability distribution.
2. **Incoming difference.** SAN's phasic changes and [[phase-wave-differentials|phase-wave differentials]] may carry receiver-relative updates. A phase difference is not automatically a variational prediction error.
3. **Continuous update.** [[ndca-non-linear-differential-continuous-approximation|NDCA]] proposes continuous approximation through nonlinear neural dynamics. This may be compared with iterative belief updating, but no derivation currently makes NDCA and variational inference equivalent.
4. **Gather, integrate, redistribute.** [[napot-overview|NAPOT]] proposes a many-to-one-to-many reconstruction cycle at cellular, circuit, and distributed-network scales. Active inference supplies a computational interpretation of model updating; it does not establish NAPOT tomography.
5. **Perception-action closure.** [[gamma-wave-consideration-sandwich|GCS]], [[proprioceptive-feedback]], and Layer 5 output pathways give SAN an embodied control story. Active inference also connects perception to proprioceptive prediction and action, so the comparison must identify distinctive timing, routing, or perturbation predictions.
6. **Consequential selection.** [[criterial-causation]] describes thresholded cellular and network consequences. Policy selection in active inference is a formal evaluation over possible action sequences. The two may be related, but a threshold crossing is not by itself a policy posterior.

## Scale ladder

| Scale | Established target | SAN/NAPOT proposal | What must not be implied |
|---|---|---|---|
| Cellular | Dendritic integration, synaptic plasticity, spike generation, neuromodulation | A candidate receive-integrate-project motif with tonic context and phasic update | One generic neuron performs a complete Bayesian model or a full perceptual tomography |
| Local circuit | Recurrent excitation and inhibition, laminar and cell-type-specific signaling, population dynamics | Mesoscopic NAPOT gathers and redistributes population updates | One canonical cortical microcircuit is universal across cortex or species |
| Distributed network | Thalamocortical, corticocortical, hippocampal, basal-ganglia, cerebellar, brainstem, spinal, and body loops | Macro NAPOT maintains an active working model linked to perception and action | One area, rhythm, or global broadcast contains the complete model |
| Computational | Generative models, prediction, precision, policies, variational and expected free energy | SAN variables may provide candidate physical correlates | A conceptual analogy proves mathematical identity or biological validation |

## The observer boundary

Neither framework requires a miniature viewer. In SAN, the observer claim is positive: the sparse, distributed field-cell system itself receives changes, maintains context, updates, and produces body and behavioral consequences. Active inference describes organized perception and action without adding a separate internal spectator, but it is not by itself a complete theory of phenomenal consciousness. Their compatibility on this point does not prove SAN's stronger claim that tonic field-cell organization constitutes conscious experience.

## Medical and anatomical boundary

Active perception and action are not a single loop from sensory cortex to prefrontal cortex and back. They involve parallel and recurrent receptor, thalamic, cortical, hippocampal, basal-ganglia, cerebellar, hypothalamic, brainstem, spinal, autonomic, and body-feedback pathways. The roles of cortical layers and frequency bands vary by area, task, species, and measurement method.

For the same reason:

- alpha, beta, theta, and gamma labels do not uniquely identify sensation, thought, policy, or action;
- gamma coherence is not a required universal signature of active inference;
- prediction error is not always represented by one cell class, layer, direction, or frequency band;
- a SAN diagram should label cortical-column circuitry as canonical or candidate rather than universal;
- a fixed perceptual-frame duration cannot be inferred from active-inference mathematics alone.

See [[phase-language-firewall]] and [[san-scale-ladder-and-claim-boundaries]].

## Empirical discriminators for SAN

A useful SAN-to-active-inference comparison must produce tests that can fail. Candidate discriminators include:

1. Fit an active-inference model to a perception-action task, then test whether independently measured receiver-relative phase organization explains trial-by-trial updates beyond the model's existing state and precision variables.
2. Perturb phase relationships while controlling firing rate, sensory evidence, arousal, and motor output. A causal SAN carrier claim predicts a selective change in reconstruction or action updating.
3. Test whether tonic context and phasic update can be dissociated experimentally rather than assigning them from frequency labels after the result is known.
4. Test the NAPOT scale ladder separately: dendritic integration, local population redistribution, and distributed model updating require different measurements and cannot validate one another by analogy.
5. Compare SAN's GCS timing and routing predictions against alternative active-inference and predictive-processing process models.
6. State in advance what result would count against a phase-wave, NAPOT, or field-cell interpretation.

## Comparison and chronology boundary

Friston's FEP and active-inference program predate SAN's explicit engagement with them. A SAN comparison page may document where Micah Blumberg's earlier notes independently used prediction, distributed agency, oscillation, body feedback, or active-rendering concepts. That historical evidence does not make the theories mathematically identical or biologically correct. Conversely, surface divergence does not by itself settle a governed comparison: equivalence and priority require their own source-backed atom analysis.

See [[comparison-evidence-is-not-biological-validation]] and [[san-vs-friston-active-inference]].

## Reader path

1. [[free-energy-principle]] for the formal umbrella and SAN's bounded interpretation.
2. [[predictive-coding]] for prediction-and-error message passing.
3. [[brain-as-memory-prediction-machine]] for the SAN/Hawkins prediction tradition.
4. [[napot-overview]] for SAN's proposed reconstruction cycle.
5. [[gamma-wave-consideration-sandwich]] for the proposed perception-consideration-action bridge.
6. [[phase-language-firewall]] for rhythm and mechanism claim boundaries.
7. [[san-vs-friston-active-inference]] for the explicit comparison page.

## Primary sources

- Karl Friston, Jean Daunizeau, and Stefan Kiebel, ["Reinforcement Learning or Active Inference?"](https://doi.org/10.1371/journal.pone.0006421), *PLOS ONE* 4(7), e6421 (2009).
- Karl Friston, ["The free-energy principle: a unified brain theory?"](https://doi.org/10.1038/nrn2787), *Nature Reviews Neuroscience* 11, 127-138 (2010).
- Karl Friston, Rick Adams, Laurent Perrinet, and Michael Breakspear, ["Perceptions as Hypotheses: Saccades as Experiments"](https://doi.org/10.3389/fpsyg.2012.00151), *Frontiers in Psychology* 3, 151 (2012).
- Rick Adams, Stewart Shipp, and Karl Friston, ["Predictions not commands: active inference in the motor system"](https://doi.org/10.1007/s00429-012-0475-5), *Brain Structure and Function* 218, 611-643 (2013).
- Simone Vossel et al., ["Spatial Attention, Precision, and Bayesian Inference: A Study of Saccadic Response Speed"](https://doi.org/10.1093/cercor/bhs418), *Cerebral Cortex* 24(6), 1436-1450 (2014).
- Thomas FitzGerald et al., ["Precision and neuronal dynamics in the human posterior parietal cortex during evidence accumulation"](https://doi.org/10.1016/j.neuroimage.2014.12.015), *NeuroImage* 107, 219-228 (2015).
- Philipp Schwartenbeck et al., ["Evidence for surprise minimization over value maximization in choice behavior"](https://doi.org/10.1038/srep16575), *Scientific Reports* 5, 16575 (2015).
- Karl Friston, Thomas FitzGerald, Francesco Rigoli, Philipp Schwartenbeck, and Giovanni Pezzulo, ["Active Inference: A Process Theory"](https://doi.org/10.1162/NECO_a_00912), *Neural Computation* 29(1), 1-49 (2017).

## Page status

- Public explanatory bridge: yes
- Source recovery: June 2022 engagement separated from 2024-2025 synthesis
- Established science: formal framework plus bounded computational, behavioral, and model-based neural evidence
- SAN/NAPOT mechanism: proposed interpretation with discriminating tests
- Comparison or priority verdict: no
- Last reviewed: 2026-07-29
