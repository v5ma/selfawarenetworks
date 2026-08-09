# Dendritic Computation

**Dendritic computation** is the transformation of synaptic input within a neuron's dendritic arbor before and while that input influences the soma, axon initial segment, plasticity, and later circuit activity. Branch geometry, receptor kinetics, membrane voltage, active conductances, inhibition, neuromodulation, and recent activity can make the transformation nonlinear and compartment specific.

This is more capable than a passive point-neuron sum. It does not make every branch a separate neuron, semantic classifier, conscious observer, or fixed logic gate.

> **Image status:** The existing 2026 plate is preserved but suppressed from the public edition. It correctly emphasizes branch-local processing, but it presents target matching, inhibition of non-target patterns, a roughly 5 ms window, phase-shifted branch output, branch decisions, and spine-scale NAPOT capacity too generally. A replacement must show several possible dendritic transformations and conditional consequences rather than one mandatory pipeline.

## What is established

Dendrites both filter and actively transform synaptic input.

- Passive cable properties attenuate and temporally filter voltage according to distance, diameter, membrane resistance, capacitance, and branching.
- Excitatory and inhibitory synapses act at specific locations and times. Their effects depend on receptor type, reversal potential, membrane state, and surrounding conductances.
- Active dendritic conductances can support NMDA plateaus, sodium spikes, calcium events, and mixed regenerative events in particular cell types and compartments.
- Inputs near one another on a thin branch can combine differently from inputs distributed across branches.
- Input order and direction can change local calcium, somatic depolarization, and spike probability.
- Many local events remain local; others alter somatic firing, bursting, plasticity, or recurrent recruitment.

[Polsky, Mel, and Schiller (2004)](https://pubmed.ncbi.nlm.nih.gov/15156147/) demonstrated nonlinear integration within thin dendrites of rat neocortical pyramidal neurons. [Branco, Clark, and Hausser (2010)](https://pubmed.ncbi.nlm.nih.gov/20705816/) showed sequence-sensitive responses in dendrites of cortical pyramidal neurons. [Smith et al. (2013)](https://pubmed.ncbi.nlm.nih.gov/24162850/) found that sensory-evoked dendritic spikes enhanced orientation-selective somatic responses in mouse visual cortex.

These findings establish bounded forms of local spatial and temporal discrimination. They do not show that one branch recognizes an arbitrary object, contains a complete memory, or performs consciousness.

## One neuron, several interacting domains

A useful abstraction separates two interacting stages without turning them into independent agents:

1. dendritic branches and compartments transform local input relations;
2. somatic and axon-initial-segment dynamics integrate those effects into graded voltage, no spike, a spike, or a burst.

The soma does not read a list of branch decisions. Voltage and current propagate through the cell. A dendritic spike can remain local, influence the soma, alter a later dendritic event, or contribute to plasticity. An action potential usually begins near the axon initial segment in cortical pyramidal neurons and can then backpropagate into the dendrites.

Inhibition is part of this computation, but not a scalar vote against a pattern. Its effect depends on synapse location, timing, receptor, chloride regulation, circuit source, and whether disinhibition is involved. There is no universal 5 ms dendritic decision window.

## Plasticity changes future transformations

Learning can change synaptic efficacy, receptor composition, spine structure, intrinsic excitability, and inhibitory balance. A branch can therefore become differently prepared for a later input relation.

This is the source-faithful value of the historical SAN morphology claim. `a0206z.md` proposes that changing dendritic and synaptic morphology can preserve traces of prior learning that condition later activity. The defensible form is **learned biological readiness**, not a complete image or memory stored in one branch.

A local learned state becomes behaviorally meaningful only through its effect on the cell and the recurrent populations that later recruit and use it.

## The recovered SAN operation

The 2022 SAN material proposed a receive-transform-project architecture but sometimes used the apical dendrite as an "exit terminal." Read literally, that reverses cellular anatomy. Read across the mechanism, the intended operation can be preserved:

```text
pathway-specific synaptic input
+ learned receptor, spine, branch, inhibitory, and voltage state
+ recent cellular and circuit activity
-> local dendritic transformations
-> changed somatic or axon-initial-segment output, bursting, or plasticity
-> axonal and synaptic consequences in anatomically connected receivers
-> recurrent population return and changed later readiness
```

`a0007z.md` also explores a basal-recognition/apical-response separation and coincidence between inputs reaching different dendritic domains. That remains a SAN thought experiment, not a universal rule that basal dendrites carry sensory evidence while apical dendrites carry prediction or motor output.

The corrected SAN claim is therefore stronger than "dendrites are active" but narrower than the old plate:

> **SAN hypothesis:** Learned dendritic state creates receiver-specific readiness. Incoming spatiotemporal relations transform that state, and any resulting change in cellular output or plasticity contributes to later recurrent reconstruction, prediction, and action.

## Scale ladder

| Scale | Defensible operation | Boundary |
|---|---|---|
| Micro | A branch or dendritic domain transforms defined synaptic inputs relative to local state | Not a complete percept, memory, or observer |
| Cellular | Dendritic, somatic, axon-initial-segment, axonal, and synaptic mechanisms produce conditional output and plasticity | Not one universal pyramidal-cell algorithm |
| Meso | Recurrent excitation and inhibition recruit, stabilize, or suppress a local population | Local selectivity is not yet semantic recognition |
| Macro | Distributed sensory, association, thalamic, hippocampal, bodily, and motor systems reconstruct and use an actionable state | NAPOT and conscious rendering remain SAN hypotheses |

NAPOT is not tomography performed by one dendrite. The proposed tomographic operation begins only when many cellular and circuit projections are gathered, transformed, redistributed, compared, and used across recurrent networks.

## What the rejected plate was trying to say

The rejected plate tried to contrast a biological neuron with a single-threshold artificial unit. That contrast remains useful: dendritic location, timing, conductance, morphology, and inhibition can preserve distinctions that a point-neuron abstraction discards.

The plate failed when it turned those distinctions into one target-matching branch algorithm. Spines do not simply define addresses, inhibitory input does not universally mark a non-target pattern, branches do not emit one independent phase-shifted result, and more spines do not translate directly into a known number of NAPOT pixels or memory bits.

## Tests and falsifiers

A strong cellular experiment should ask whether branch-resolved location, order, membrane state, conductance, and inhibition predict output or plasticity better than a matched point-neuron model.

A SAN-specific experiment must go further:

1. identify the dendritic input and local state;
2. measure the somatic or axonal consequence;
3. trace the anatomically available downstream receivers;
4. measure recurrent population reconstruction and behavior;
5. compare branch-aware models with rate, connectivity, common-input, and state-history alternatives; and
6. perturb the proposed branch variable while preserving the simpler alternatives where possible.

The stronger SAN extension is weakened if branch-resolved variables provide no reproducible prediction or selective causal leverage for later recurrent state or behavior beyond ordinary somatic output, connectivity, and circuit state.

## Source boundary

- [`a0007z ctpr.txt`, first public Git upload June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0007z%20ctpr.txt), renamed `a0007z.md` on June 10, preserves the receive-transform-project, dendritic-domain, coincidence, morphology, and recurrent-return exploration. Its apical "exit terminal" language is historical theory development, not accepted anatomy.
- [`a0206z.md`, current path first public Git-fixed June 27, 2022](https://github.com/v5ma/selfawarenetworks/blob/27a9f198d7f664d0a4b6edf6a08b7732331af110/a0206z.md), preserves the dendritic-morphology and learned-memory-trace proposal. It does not support the old page's universal self-inhibiting branch-jury claim.
- The medically bounded formulation on this page is a 2026 source recovery and should not be backdated into either source.

## Read next

- [[dendrites-as-computational-units|Dendrites as Computational Units]]
- [[dendritic-pattern-detection|Dendritic Pattern Detection]]
- [[dendritic-spike|Dendritic Spike]]
- [[dendritic-computation-pyramidal-representation|Dendritic Computation and Pyramidal-Cell Representation]]
- [[apical-dendrite|Apical Dendrite]]
- [[receptive-inceptive-dendritic-projection|Receptive and Inceptive Dendritic Projection]]
- [[napot-overview|NAPOT Overview]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]
