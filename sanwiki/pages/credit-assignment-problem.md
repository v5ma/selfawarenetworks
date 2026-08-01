# Credit Assignment Problem

**Credit assignment** asks how a learning system determines which earlier events, neurons, dendritic compartments, or synapses contributed to an outcome and how each eligible connection should change. It is not one problem with one scale:

- **Structural or hierarchical credit:** which component of a multilayer or recurrent circuit affected the result?
- **Temporal or distal-reward credit:** which earlier event should be associated with a later reward, error, novelty signal, or consequence?
- **Cell- and synapse-specific credit:** which modifiable connection should change, in which direction, and by how much?
- **Causal credit:** did the candidate activity help cause the outcome, or did it merely correlate with it?

The brain has experimentally supported mechanisms that constrain these questions, but no single universal biological credit-assignment rule has been established.

## Established biological components

Synaptic change can depend on presynaptic activity, postsynaptic voltage or spiking, dendritic calcium, receptor state, inhibition, recent history, and neuromodulatory context. A local co-activity event can leave an **eligibility trace** that is converted into a lasting weight change only when an additional factor arrives. In action learning, this provides one way to bridge milliseconds of spike timing with a reward or consequence arriving later.

A compact three-factor form is:

**Delta w_ij = eta x e_ij x M_i**

Here, e_ij is a synapse-local eligibility variable, M_i is a later modulatory or instructive factor available to the receiver, and eta is a learning rate. The equation describes a family of rules, not one settled molecular mechanism.

Some postsynaptic cells also send **retrograde chemical signals** across a synapse. Endocannabinoids, for example, can act on presynaptic receptors and change transmitter release. This is not a spike traveling backward across the synaptic cleft. It must also be kept separate from:

- a backpropagating action potential entering the dendrites of the same neuron;
- feedback carried by separate axons from another population;
- a dendritic plateau, calcium event, or burst;
- an algorithmic gradient in a machine-learning model.

See [[backpropagation]] and [[neural-backpropagation]] for those distinctions.

## Dendritic instructive signals: what changed in 2026

Francioni and colleagues used an experimenter-defined brain-computer-interface task in mice while recording somatic and distal apical-dendritic calcium activity from layer 5 pyramidal neurons in retrosplenial cortex. The relative somatic and dendritic signals contained reward- and error-related information; the sign of the candidate teaching signal depended on each neuron's causal role in the task; the signal predicted activity changes during learning; and targeted perturbation disrupted learning.

This is strong experimental evidence that semi-independent dendritic computation can carry **neuron-specific instructive information** in a defined task and circuit. It does not show that every cortical neuron uses the same rule, that every burst is a teaching signal, or that the brain transports exact artificial-network gradients.

Primary source: [Francioni et al., Nature (2026)](https://doi.org/10.1038/s41586-026-10190-7).

## Computational model families

Several biologically motivated models demonstrate that declared mechanisms can be sufficient for parts of credit assignment:

- [Guerguiev, Lillicrap, and Richards (2017)](https://doi.org/10.7554/eLife.22901) separated feedforward and feedback variables in model basal and apical compartments and constructed local learning targets.
- [Sacramento et al. (2018)](https://proceedings.neurips.cc/paper_files/paper/2018/hash/1dc3a89d0d440ba31729b0ba74b93a33-Abstract.html) used simplified dendritic compartments and interneuron-mediated predictions to approximate backpropagation with local dendritic errors.
- [Payeur et al. (2021)](https://doi.org/10.1038/s41593-021-00857-x) combined bursts, apical regenerative activity, short-term synaptic dynamics, feedback plasticity, and a local burst-dependent rule in hierarchical simulations.
- Eligibility-trace and three-factor models join local pre/post activity with later dopamine, novelty, surprise, or other modulatory factors. See [Izhikevich (2007)](https://doi.org/10.1093/cercor/bhl152) and [Gerstner et al. (2018)](https://doi.org/10.3389/fncir.2018.00053).

These results establish computational sufficiency or experimentally supported components under bounded conditions. They do not prove that one model is the brain's complete learning algorithm.

## Source-faithful SAN genealogy

### April 2021: an external discussion, not a SAN claim

The sentence "so you're totally throwing out the credit assignment problem" came from another participant in Micah's recorded Clubhouse discussion. The participant was describing ordinary artificial backpropagation as setting aside the biological problem while producing strong engineering performance, then pointing to distal dendrites and unknown learning rules. Micah was not proposing that SAN should discard credit assignment.

The recording occurred on 27 April 2021. Its transcript was publicly Git-fixed later. See the [public transcript context](https://github.com/v5ma/selfawarenetworks/blob/a9a594c47007aba4f3b61ce4300d7867070e9175/b0302ywhisper.md#L1503-L1567).

### June 2021: pattern-sensitive cells and routed return signals

In a 12 June 2021 recording, Micah identified artificial backpropagation as a central gap between deep learning and biology: a useful return signal would have to travel to the right place. His proposed direction was not that neurons are simple nodes waiting for a global gradient. He argued that dendrites and cells are pattern-sensitive receivers whose geometry, state, and recurrent connections can help determine which local response changes.

This source establishes a **routing and cellular-computation problem**, not a complete biological learning rule. It was first publicly Git-fixed on 8 June 2022. See [b0267y at its first public fixation](https://github.com/v5ma/selfawarenetworks/blob/cd95efe985f2b21cca69eb3fd253cf473a268587/b0267y%20ctpr.txt#L414-L430).

### October 2021: parallel representations and common-result filtering

In a 14 October 2021 recording, Micah proposed that multiple transformed sensory representations could converge, reinforce common structure, and treat less-consistent components as candidate errors. He compared this with multiple networks learning the same input and retaining what their results shared.

This is a SAN proposal for **redundant reconstruction and error filtering**. By itself it does not identify which synapse deserves credit. It was first publicly Git-fixed on 8 June 2022. See [b0132y at its first public fixation](https://github.com/v5ma/selfawarenetworks/blob/09b8306fbb54536e20ba1071e91dff0cb8a4770f/b0132y%20ctpr.txt#L127-L139).

### June 2022: external burst-model intake

The source note [[gh-a0190z]] summarizes reporting on the Payeur burst-dependent model. It is valuable evidence intake, but the burst model and its credit-assignment result belong to Payeur and colleagues. The note must not be presented as Micah's original mechanism or as in-vivo proof.

### September 2022: local coincidence, return, tuning, and rendering

A 15 September 2022 recording joined several operations: postsynaptic-to-presynaptic modulation, dendritic and somatic coincidence, burst generation, ongoing tonic state, excitation and inhibition, cortical-thalamic recurrence, and changes in tuning. Its public Git fixation is 1 September 2024, so the recording date and public fixation date must remain distinct. See [b0010y](https://github.com/v5ma/selfawarenetworks/blob/84ac110574f02c2629532c49ec918a953b1a610f/b0010y.md#L145-L172).

The source compresses several biological processes into "backpropagating signals." A medically recoverable reading separates them:

1. A bAP changes dendritic voltage within the same cell.
2. Retrograde chemical messengers can cross a synapse and alter presynaptic release.
3. Separate feedback axons can deliver contextual or instructive input to dendritic compartments.
4. Coincidence among local eligibility, dendritic state, somatic output, and later outcome can bias plasticity.
5. Repeated local changes can alter burst probability, effective routing, and neural tuning.

The apical dendrite is an input and integration structure, not an exit terminal. Conventional neuronal output leaves through the axon and presynaptic terminals.

## Recovered SAN hypothesis

Across these sources, the strongest source-faithful SAN operator is:

**local recent activity and eligibility**
+ **compartment-specific feedback or instructive input**
+ **receiver tonic and phase-wave-differential state**
+ **outcome or neuromodulatory context**
-> **receiver-specific change in synaptic efficacy, burst probability, tuning, and effective routing**

The first three source stages were expressed before the mature PWD vocabulary. PWD is therefore a later extension, not a term to backdate into the 2021 recordings.

SAN adds a specific hypothesis: a receiver-relative multidimensional departure from ongoing tonic state may help identify the local event that a later consequence should modify. That departure could include timing, phase, voltage, duration, burst structure, transmitted quantity, and network context. More dimensions do not automatically solve credit assignment. The model must still identify the eligible synapse, the instructive variable, the anatomical route, and the update rule.

The distributed network itself learns and changes; credit is not sent to an inner viewer.

## Scale boundary

- **Micro:** synaptic eligibility, receptors, endocannabinoids and other retrograde messengers, dendritic voltage and calcium, bAPs, bursts, and local plasticity.
- **Meso:** compartment-specific feedback, inhibitory control, local recurrent circuits, population-specific instructive signals, and hierarchical routing.
- **Macro:** behavior, delayed consequences, neuromodulatory systems, sensorimotor loops, and task-level outcomes.
- **Algorithmic:** objective, causal contribution, temporal delay, parameter sensitivity, and update direction.

Evidence at one scale constrains but does not automatically prove the operator at another.

## Evidence boundary

- **Established:** local activity and state can create eligibility for later plasticity; neuromodulators and retrograde messengers can gate synaptic change; dendritic compartments can compute semi-independently.
- **Established in a bounded 2026 experiment:** vectorized dendritic instructive signals carried task-relevant reward and error information and were necessary for learning in a defined mouse retrosplenial-cortex BCI task.
- **Modeled:** segregated dendrites, local prediction errors, bursts, feedback, and three-factor rules can support biologically motivated credit assignment under stated assumptions.
- **Proposed by SAN:** receiver-relative tonic/PWD state joins local eligibility, feedback, outcome, and recurrent routing into one learning operator.
- **Not established:** exact gradient transport throughout cortex, one universal dendritic teaching code, every burst as error, a spike crossing backward over a synaptic cleft, or phase coherence as a universal success condition.

## Discriminating experiment

Record an identified feedforward input, feedback input, distal dendritic state, somatic output, local eligibility variable, synaptic change, and behavioral consequence in the same learning task. Independently manipulate phase, burst probability, feedback, reward, novelty, and mean firing rate.

The SAN extension gains support only if the full receiver-relative state predicts and causally controls later synaptic or routing change better than spike count, ordinary STDP, neuromodulation alone, generic recurrent state, and existing dendritic credit-assignment models. It is weakened if the proposed variable never reaches the eligible synapse, if phase or PWD dimensions add no held-out information, or if learning survives selective disruption of the claimed route.

## Figure status

No medically reviewed image is currently accepted for this page. A replacement prompt has been drafted for a later dedicated image session. It must separate synapse, single-cell, local-circuit, and behavioral scales; distinguish measured physiology from models and the SAN hypothesis; and must not draw a semantic error wave traveling backward through an axon or synaptic cleft.

## Primary references

- [Izhikevich EM. Solving the distal reward problem through linkage of STDP and dopamine signaling. Cerebral Cortex. 2007.](https://doi.org/10.1093/cercor/bhl152)
- [Guerguiev J, Lillicrap TP, Richards BA. Towards deep learning with segregated dendrites. eLife. 2017.](https://doi.org/10.7554/eLife.22901)
- [Sacramento J et al. Dendritic cortical microcircuits approximate the backpropagation algorithm. NeurIPS. 2018.](https://proceedings.neurips.cc/paper_files/paper/2018/hash/1dc3a89d0d440ba31729b0ba74b93a33-Abstract.html)
- [Gerstner W et al. Eligibility traces and plasticity on behavioral time scales. Frontiers in Neural Circuits. 2018.](https://doi.org/10.3389/fncir.2018.00053)
- [Lillicrap TP et al. Backpropagation and the brain. Nature Reviews Neuroscience. 2020.](https://doi.org/10.1038/s41583-020-0277-3)
- [Payeur A et al. Burst-dependent synaptic plasticity can coordinate learning in hierarchical circuits. Nature Neuroscience. 2021.](https://doi.org/10.1038/s41593-021-00857-x)
- [Castillo PE et al. Endocannabinoid signaling and synaptic function. Neuron. 2012.](https://doi.org/10.1016/j.neuron.2012.09.020)
- [Francioni V et al. Vectorized instructive signals in cortical dendrites. Nature. 2026.](https://doi.org/10.1038/s41586-026-10190-7)

## Related pages

- [[backpropagation]]
- [[neural-backpropagation]]
- [[neural-burst-backpropagation]]
- [[dendritic-compartmentalization]]
- [[dendritic-coincidence-detection]]
- [[synaptic-plasticity]]
- [[stdp]]
- [[neural-tuning]]
- [[phase-wave-differential]]
- [[action-potential]]
- [[gh-b0267y]]
- [[gh-b0132y]]
- [[gh-b0010y]]
- [[gh-a0190z]]
