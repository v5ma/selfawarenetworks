# Neural Burst Backpropagation

**Burst-dependent credit assignment** is a family of biological learning models in which bursts, dendritic compartments, feedback pathways, and local synaptic plasticity jointly coordinate learning. It is not the same phenomenon as a backpropagating action potential, and it has not been established as a universal cortical implementation of machine-learning backpropagation.

## The Payeur et al. model

[Payeur et al. (2021)](https://doi.org/10.1038/s41593-021-00857-x) asked whether known cellular properties could support learning in hierarchical circuits. Their simulations and mathematical analyses combined:

- high-frequency bursts of action potentials;
- regenerative activity in apical dendrites;
- short-term synaptic dynamics;
- plasticity in feedback pathways; and
- a burst-dependent local learning rule.

Under those assumptions, higher levels could coordinate plasticity at lower levels and the modeled circuits learned tasks requiring hierarchical credit assignment. The paper demonstrates computational sufficiency of a particular mechanism set. It does not show that all pyramidal neurons use the rule in vivo or that bursts carry a single universal teaching variable.

## Bursts are not a third binary symbol

Neural firing is not simply "0, 1, or burst." Spike timing, rate, burst structure, subthreshold voltage, dendritic events, synaptic release, neuromodulation, and population context can all matter. Bursts have different causes and functions in different cells and circuits. An absence of bursting therefore does not generally mean "weaken this synapse," and a high burst rate does not generally mean "strengthen it."

## Relation to backpropagation

The model addresses the **credit-assignment problem** without requiring exact non-local gradient transport. That functional similarity does not make its signals identical to gradients. It should be described as a biologically motivated learning model with experimentally accessible components, not as proof that the brain runs ordinary backpropagation.

See [[backpropagation]] for the three-way distinction and [[neural-backpropagation]] for within-neuron bAP physiology.

## Bounded SAN/NAPOT interpretation

SAN may hypothesize that burst probability or burst timing helps update a distributed rendering network. The stronger NAPOT claim requires evidence that an identified burst variable changes in relation to a defined rendering error, reaches the synapses that need credit, and predicts later synaptic change better than rate, reward, arousal, or generic feedback activity.

A direct test would record apical dendritic voltage, somatic spikes, feedback input, and plasticity in an identified hierarchy during learning, then perturb bursting while preserving mean spike count. The hypothesis is weakened if learning and synaptic assignment remain unchanged or if the effect is explained by mean firing alone.

## Related pages

- [[credit-assignment-problem]]
- [[backpropagation]]
- [[neural-backpropagation]]
- [[apical-dendrites]]
- [[dendritic-spike]]
- [[synaptic-plasticity]]
- [[napot-overview]]
