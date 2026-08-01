# Apical Dendrite

An **apical dendrite** is the dendritic process that extends from the soma of a pyramidal neuron
toward superficial cortical layers. It receives synaptic input and can support local active events.
It is not the neuron's axonal output tree or a presynaptic "exit terminal."

> **Scientific boundary:** The apical compartment can influence axonal output through dendritic integration, calcium or NMDA events, and interaction with backpropagating spikes. Ordinary broadcast to downstream cells occurs through the axon initial segment (AIS), axon, branches, boutons, transmitter, and postsynaptic receptors.

## The source-faithful question

Early SAN notes sometimes mapped a neuron's input and output functions onto basal and apical
dendrites. Read literally, that reverses cellular anatomy. Read across the dated source sequence,
however, the intended operation is recoverable:

**pathway-specific dendritic input + learned synaptic and intrinsic state + inhibition and recent
activity -> local dendritic interaction -> somatic and AIS output decision -> axonal arbor and
bouton-specific downstream effects -> recurrent circuit return**

The anatomical correction therefore does not require deleting SAN's proposed receive-transform-
project cycle. It requires locating reception and transformation in dendritic and somatic
compartments, outward projection in the axon and its boutons, and later return in recurrent
pathways.

## Established anatomy and computation

Pyramidal-cell dendrites receive heterogeneous excitatory, inhibitory, cortical, thalamic, and
modulatory inputs. Distal apical tufts often receive important feedback and contextual pathways,
but "apical equals top-down" and "basal equals bottom-up" are not universal anatomical rules.

Apical branches can integrate inputs nonlinearly. In some layer 5 pyramidal cells, a somatic or
AIS-generated action potential backpropagates into the apical trunk. Coincidence with distal
dendritic depolarization can recruit a calcium event and alter later somatic spike output, including
bursting. This backpropagation direction is from the spike-initiation region toward the dendrite,
not from the tuft toward the soma. See
[Larkum et al. (1999)](https://doi.org/10.1038/18686) and
[Kole et al. (2008)](https://doi.org/10.1038/nn2040).

Local dendritic spikes may also begin in dendritic compartments and influence the soma. The
mechanism, threshold, propagation, and effect differ by cell subtype, branch, inhibition, and
state. A dendritic spike is therefore not evidence that the dendrite is a presynaptic output tree.

## Evidence, expectation, and recurrent return

In some circuits, different dendritic pathways can carry different combinations of current
evidence, context, feedback, prediction, or motor-related state. Their interaction can change
whether a neuron remains silent, emits a single axonal spike, or produces a burst. This supports a
bounded version of the SAN idea that a neuron can compare present input with a learned,
context-sensitive state. For example, feedback from mouse lateromedial visual cortex was shown to
engage branch-specific nonlinear events in apical tufts of identified V1 pyramidal neurons; this
supports a pathway-specific contextual interaction, not a universal compartment code. See
[Fişek et al. (2023)](https://doi.org/10.1038/s41586-023-06007-6).

The stronger basal-evidence/apical-expectation split is not a universal cortical law. It is a
testable circuit-specific interpretation. The relevant pathways, cell class, laminar source,
inhibition, behavioral state, and output target must be named for each use.

A cell can also become sensitive to the consequences of earlier activity through recurrent circuit
return. Downstream activity can alter other neurons, thalamic loops, body state, and the environment;
later inputs can then return information about those consequences. That realizes a
response-and-return learning cycle without requiring an action potential to originate in the apical
tuft or treating the tuft as an output terminal.

## What the output pathway is

The causal cellular sequence is:

1. apical, basal, oblique, perisomatic, and other inputs alter dendritic and somatic state;
2. dendritic events can amplify, gate, or suppress the transformation;
3. the AIS normally initiates axonal spikes;
4. the axonal arbor distributes output to selected boutons;
5. chemical synapses transform that output for downstream receivers;
6. recurrent pathways can later return consequences and context to the cell or circuit.

Synaptic weights on an apical branch alter how the neuron responds to future input. They are not
presynaptic output weights that release transmitter onto downstream arrays.

## Perception and anesthesia evidence

In a mouse somatosensory task, active dendritic currents in a specific layer 5 pyramidal-cell
projection class influenced tactile detection and descending output. This is strong circuit-specific
causal evidence, not proof that every apical dendrite is a consciousness gate. See
[Takahashi et al. (2020)](https://doi.org/10.1038/s41593-020-0677-8).

Suzuki and Larkum found that several anesthetics decoupled distal apical-dendrite influence from
somatic spiking in mouse layer 5 pyramidal neurons. Their proposed relevance to feedback and
conscious perception remains bounded to that preparation and does not establish apical dendrites as
the sole substrate of consciousness. See
[Suzuki and Larkum (2020)](https://doi.org/10.1016/j.cell.2020.01.024).

## Bounded SAN translation of "inceptive field"

SAN's receptive/inceptive distinction can be preserved as a functional cycle without reversing
dendritic anatomy:

- **Reception:** dendrites and soma register and transform current inputs.
- **Selection:** dendritic-somatic-AIS dynamics determine axonal events.
- **Inception or re-expression:** the axonal arbor, boutons, transmitter release, and downstream
  synapses alter selected receivers.
- **Return:** recurrent pathways and sensorimotor consequences contribute to later cellular and
  network state.

Under this translation, the apical dendrite helps condition what the neuron will re-express; it does
not itself broadcast the response program. The observer remains the distributed field-cell network,
not one apical tree or a hidden viewer.

## Claim boundaries

- **Established neuroscience:** apical dendrites receive and integrate input; local dendritic events
  can influence somatic and AIS output; axons and boutons provide presynaptic output.
- **Supported circuit interpretation:** in identified pathways, apical activity can integrate
  contextual or feedback information with other cellular input and influence perception or action.
- **SAN-specific hypothesis:** learned compartment-sensitive interaction participates in a
  receive-transform-project-return cycle that helps distributed neural populations reconstruct and
  update an observer-action state.
- **Stronger experimental claim:** a named dendritic pathway implements a particular
  evidence-expectation comparator or stores a response program. This requires pathway-specific
  causal testing and should not be inferred from anatomy alone.

## SAN source genealogy

The correction is based on the development of the operation across SAN's dated sources:

- [NAPOT Revision 2, Git-fixed August 28, 2022](https://github.com/v5ma/selfawarenetworks/blob/29956416cb7c074bbfb8c32e13611a6568cc290e/a0001z.md)
  used a keyboard, printing-press, and pixel analogy for learned input structure and selective
  one-to-many output. Its apical-output mapping was anatomically reversed, but its intended
  receive-transform-project operation is recoverable.
- [NAPOT/Neural Tuning source, Git-fixed August 30, 2022](https://github.com/v5ma/selfawarenetworks/blob/86ca59559908f6cad3f9f3314f3d651c3e0c6ea1/a0007z.md)
  developed basal/apical interaction, current evidence versus learned context, bursting, and the
  idea that a cell can learn from the response that follows its earlier activity.
- [NAPOT 6, Git-fixed November 28, 2022](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0325zNAPOT6.md)
  explicitly named the **Inceptive Field** and paired learned reception with distributed
  re-expression. Its viable modern translation places the outward field in axonal and synaptic
  projection, not the apical dendrite.

These sources preserve the historical claim sequence. The medically bounded formulation above is a
current interpretation; it is not backdated into the 2022 wording.

## Related concepts

- [[apical-dendrites]]
- [[apical-pyramidal-neurons]]
- [[dendritic-pattern-detection]]
- [[receptive-inceptive-dendritic-projection]]
- [[dendritic-computation-pyramidal-representation]]
- [[napot-overview|NAPOT]]
- [[san-scale-ladder-and-claim-boundaries]]
