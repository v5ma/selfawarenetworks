# Action-Potential Waveform Encoding

The historical SAN source joined two related but distinct questions:

1. Can action-potential waveform features change synaptic transmission in a way that a receiver can
   discriminate and use?
2. Can a neuron's learned structure and connectivity compress part of a previously distributed
   activity pattern into a sparse output signature that helps a network re-express that pattern?

The first question concerns **waveform encoding**. The second concerns **structural compression and
network-assisted reconstruction**. Neither requires a neuron to transmit a literal copy of its
morphology or to contain an entire brain state by itself.

![Waveform encoding requires recoverability, incremental value, causal manipulation, and receiver use](../assets/generated/san/action-potential-waveform-encoding/action-potential-waveform-encoding-receiver-code-test-20260720-v1.png)

> **Figure status:** This medically reviewed replacement shows the waveform-code half of the proposal: source structure and state constrain output, chemical synapses transform that output, and a code claim must pass recoverability, incremental-value, causal, and receiver-use tests. It does not yet illustrate the separate network-assisted re-expression hypothesis recovered below. The medically failed predecessor is preserved in the external `DO-NOT-USE` quarantine outside the public website.

## The operation in plain language

Learning changes synaptic strengths, receptor distributions, dendritic spines, intrinsic
excitability, and network connectivity. Those changes affect which input patterns recruit a neuron,
how the neuron responds, which boutons release transmitter, and which downstream cells are affected.

A later partial cue can therefore produce a sparse, learned output signature. The downstream
network does not need to infer the source neuron's complete shape. Its own learned connectivity can
use that signature as a content-addressable key:

`learned cellular and network state -> cue-selective output -> learned receivers -> recurrent recruitment -> related population state`

This is the medically bounded operation behind the historical phrase **"neurons are transmitting
their shapes."** The proposed "shape" is the causal effect of learned structure on a finite output
signature, not a lossless anatomical photograph inside one spike.

## What waveform physiology establishes

The waveform measured at the soma is not necessarily the waveform at an axonal branch or bouton.
Local channel composition, morphology, recent activity, temperature, and neuromodulation can alter
the trace. Presynaptic waveform broadening can alter local calcium entry, exocytosis, and synaptic
facilitation in bounded preparations. See [Hoppa et al. (2014)](https://doi.org/10.1016/j.neuron.2014.09.038)
and [Cho et al. (2020)](https://doi.org/10.1073/pnas.2000790117).

At a chemical synapse, the transformation is:

`terminal waveform -> local calcium -> probabilistic fusion -> transmitter concentration -> receptors -> dendritic response`

The downstream cell does not receive an intact copy of presynaptic voltage. A broader spike does
not universally produce a larger postsynaptic response, and the next neuron's spike amplitude is
not a freely graded continuation of the first.

Modeling reconstructed neocortical neurons has also shown that dendritic geometry can change firing
patterns even when modeled channel distributions are held constant
([Mainen and Sejnowski, 1996](https://doi.org/10.1038/382363a0)). This supports the bounded premise
that cellular structure helps determine input-output transformation. It does not show that a spike
losslessly identifies that structure.

## What memory and circuit evidence establishes

Several established findings make the recovered network operation scientifically meaningful:

- Partial cues can recruit hippocampal pattern-completion mechanisms
  ([Nakazawa et al., 2002](https://doi.org/10.1126/science.1071795)).
- Reactivating a tagged hippocampal engram population can elicit memory-related behavior
  ([Liu et al., 2012](https://doi.org/10.1038/nature11028)).
- A single memory can involve functionally connected engram populations distributed across multiple
  brain regions ([Roy et al., 2022](https://doi.org/10.1038/s41467-022-29384-4)).
- Stimulating one cortical pyramidal neuron can have a weak, distributed effect on nearby population
  activity, but reliable followers are sparse and preparation-dependent
  ([Meyer, Golshani, and Smirnakis, 2018](https://doi.org/10.3389/fncir.2018.00029)).

These findings support sparse recruitment, pattern completion, ensemble reactivation, and
distributed memory organization. They do **not** establish that one neuron stores an entire
brainwave, that one spike reconstructs a complete prior state, or that waveform shape is the sole
retrieval variable.

## Two nested SAN hypotheses

### 1. Receiver-used waveform code

Let a source state include morphology, conductances, connectivity, recent history, and current
input. A finite terminal-output signature can be written as:

`U_e = F(S_source, I_e, H_e, C_terminal)` [1]

Here, `U_e` may include terminal waveform, timing, burst position, spatial bouton participation, and
release outcomes for event `e`. This is not a claim that those features are independent. Their
covariance is part of the model.

The code claim is that identified receivers use distinctions in the transformed alternatives:

`Y_r = G_r(U_e, C_receiver, H_receiver)` [2]

where the receiver response `Y_r` depends on synaptic and receiver state, not only on the source
event.

### 2. Sparse structural compression and network re-expression

The historical source, owner-estimated as 2014 and publicly Git-fixed in 2022, proposed that
learning can reduce a costly distributed pattern into a smaller set of learned cellular and
synaptic relations. A later cue may activate part of that set, which then recruits a related
population trajectory:

`R_(t+1) = H(R_t, U_e, K_learned, C_network)` [3]

`K_learned` represents the learned connectivity and response structure of the network. Equation [3]
does not require the output event to contain all information in the reconstructed state. The
information is distributed across the cue, source state, connection graph, receiver states, and
ongoing network context.

This is closer to a sparse index or content-addressable key than to sending a complete file. The
strong SAN extension is that waveform, phase, and spatial release features may help specify that key
and influence which recurrent trajectory is selected.

## Four tests before calling it a code

A waveform-code claim should pass all four:

1. **Recoverability:** downstream activity predicts the relevant source-event alternative under
   held-out conditions.
2. **Incremental value:** prediction remains after matching rate, timing, burst position, cell
   type, connectivity, calcium, bouton state, terminal identity, common input, and recent history.
3. **Causality:** selective manipulation of the candidate waveform feature changes receiver
   activity as predicted.
4. **Use:** that receiver change alters a defined computation, reconstruction, decision, or
   behavior.

External extracellular waveform classification is not sufficient. Electrode geometry, filtering,
source orientation, cell type, and spike sorting can shape those measurements.

For the reconstruction claim, an additional test is required: the candidate source signature must
improve prediction and causal control of a later population pattern beyond connectivity, rate,
timing, cell identity, and ordinary engram recruitment alone.

## Recovering the resonance and coherence analogy

A February 22, 2014 owner-dated passage preserved inside a multi-speaker source compared a route of
neurons to resonant pitchforks. Its useful operation was **receiver-selective propagation**: each
element's structure and current state affect whether an incoming pattern recruits it and whether
activity continues through the route. The same passage connected that operation to
content-addressable memory. The surrounding speakers and later commentary remain separate
attribution layers.

Neurons can have intrinsic frequency preferences or resonant responses because of their membrane
conductances ([Llinas, 1988](https://pubmed.ncbi.nlm.nih.gov/3059497/)). Coincident synaptic inputs
can also sum differently from separated inputs, and inhibition can select or suppress routes.
However, excitatory and inhibitory identity is not reducible to coherence versus decoherence, and
chemical synapses do not passively amplify a free electromagnetic wave from cell to cell.

The surviving SAN hypothesis is narrower and testable: waveform and phase relations interact with a
receiver's transfer properties and current state, altering effective recruitment, suppression, and
the population pattern that follows. The test is to vary waveform or phase while matching simpler
features, then measure the receiver transfer function and downstream route selection.

## Scientific layers

**Established physiology:** morphology, conductances, recent activity, axonal compartments,
presynaptic calcium, release probability, receptor state, and connectivity jointly shape neural
transmission.

**Supported interpretation:** learned cellular and synaptic changes can make later cues recruit
sparse ensembles and re-engage distributed memory-related activity.

**Open SAN hypothesis:** a receiver-used combination of waveform, phase, spatial release, and
learned connectivity forms a sparse signature that helps select a related recurrent population
trajectory.

**Not claimed as established:** lossless morphology transmission, infinite information in one
spike, universal one-neuron pattern reconstruction, independent semantic channels for every
waveform dimension, or a literal Tesla-coil mechanism.

## Source genealogy

- **February 22, 2014, owner-dated passage in a multi-speaker source; Git-fixed June 8, 2022:** the
  resonance, content-addressable-memory, waveform-magnitude, and receiver-route discussion appears
  in [a0091z](https://github.com/v5ma/selfawarenetworks/blob/37da575ba33f85cef4239295be161066d8d39f4c/a0091z.md).
- **Owner-estimated as 2014 or earlier; Git-fixed June 10, 2022:** the "neurons are transmitting
  their shapes" source says, "I think this is from 2014, maybe older." It explicitly distinguishes
  storing complex structure from communicating a sparse representation and proposes that learned
  cellular connections can compress selected points of a formerly distributed pattern and later
  help recruit them:
  [a0008z](https://github.com/v5ma/selfawarenetworks/blob/0e73da1a76427937a8203c2fa9e1306c3114505e/a0008z.md).
- **August 3-September 2, 2022, Git-fixed revisions:** [a0053z](https://github.com/v5ma/selfawarenetworks/blob/b79351a4fe3667296952c483e6beb68732bf3865/a0053z.md),
  [a0001z](https://github.com/v5ma/selfawarenetworks/blob/db4349ddbcc74fa19a2fa564e60dc86f9aca97a8/a0001z.md),
  and [a0008z](https://github.com/v5ma/selfawarenetworks/blob/16b087dcf8a28d55ba32b45c40c342f81744a354/a0008z.md)
  add terminal-waveform, calcium, vesicle-release, oscillator-state, sparse-output, and
  receiver-relative phase language. Those additions explain the earlier operation but are not
  backdated to the owner-estimated 2014 stage.

## Related concepts

- [[action-potential-waveform]]
- [[action-potential-duration]]
- [[information-theory-in-spiking]]
- [[multi-vesicular-release]]
- [[engram|memory engrams]]
- [[pattern-completion]]
- [[oscillation-memory-reinstatement]]
- [[tonic-phasic-phase-wave-differential]]
- [[phase-language-firewall]]
- [[napot-overview|NAPOT]]
