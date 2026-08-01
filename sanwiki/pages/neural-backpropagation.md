# Neural Backpropagation

**Neural backpropagation** on this page means the backpropagation of a neuron's own action potential into its dendrites. It does not mean machine-learning gradient backpropagation and it should not be called antidromic propagation from the axon hillock.

## Direction and anatomy

In many cortical pyramidal neurons, an action potential is initiated in the **axon initial segment (AIS)**, where voltage-gated sodium channels are densely concentrated. It propagates forward along the axon and can also invade the soma and dendritic tree as a **backpropagating action potential (bAP)**. "Backpropagating" therefore describes propagation from the axonal initiation region into dendrites of the same cell; "antidromic" is normally reserved for an action potential initiated farther along an axon and traveling toward the soma.

[Stuart and Sakmann (1994)](https://doi.org/10.1038/367069a0) directly compared axonal, somatic, and dendritic timing in neocortical pyramidal cells. [Kole et al. (2008)](https://doi.org/10.1038/nn2040) combined staining, voltage clamp, sodium imaging, and modeling to show a high sodium-channel density in the AIS of cortical pyramidal neurons.

## What a bAP can do

A bAP changes dendritic voltage and can interact with synaptic input, voltage-gated calcium channels, NMDA receptors, and local dendritic spikes. These interactions can affect calcium signals and plasticity. The effect is conditional rather than uniform:

- invasion often attenuates with distance and branch geometry;
- recent firing and membrane state can strengthen or weaken propagation;
- inhibition can restrict dendritic invasion;
- different neuron classes and dendritic compartments have different channel distributions.

In some layer 5 pyramidal neurons, sufficiently rapid bAPs can help recruit distal apical calcium electrogenesis and somatic burst firing. This is a cell-type- and state-dependent interaction, not a general rule for every neuron. Primary source: [Larkum, Zhu, and Sakmann, *PNAS* 96, 14600-14604 (1999)](https://doi.org/10.1073/pnas.96.25.14600).

## What it does not establish

A bAP is not proof that a neuron sends a semantic error message back to its inputs. It is also not a backwards copy of all information carried by the axon, a global confidence score, or the network-level reverse pass used by artificial neural networks. Whether a bAP contributes to a particular learning rule must be tested at the relevant synapse and circuit.

## SAN interpretation

SAN can use the bAP as a measured **local return event**: a cell's output can alter the state of its own dendritic and synaptic compartments. The additional claim that this event supplies criterial feedback, phase correction, or NAPOT error assignment remains a hypothesis. A useful test must jointly record AIS/somatic firing, dendritic voltage or calcium, identified synaptic input, and later plasticity while perturbing the bAP.

## Related pages

- [[credit-assignment-problem]]
- [[backpropagation]]
- [[neural-burst-backpropagation]]
- [[action-potential]]
- [[dendritic-coincidence-detection]]
- [[dendritic-compartmentalization]]
- [[stdp]]
