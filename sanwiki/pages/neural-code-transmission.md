---
title: "Neural Code Transmission: From Cellular State to Receiver Consequence"
tags: [san, neural-code, transmission, dendrites, synapses, pwd, napot]
aliases: [Neural Code Transmission, Transmission Function of Neural Coding]
summary: "A multiscale account of how neural activity reaches and changes named receivers, separating established axonal and synaptic physiology, SAN's receive-transform-project hypothesis, and speculative artificial-neurology interfaces."
status: governed
---

# Neural Code Transmission: From Cellular State to Receiver Consequence

**Neural code transmission** asks how an activity pattern reaches another neural receiver while
preserving or transforming information that the receiver can use. Transmission is not transparent
file transfer. Every axon, synapse, dendritic tree, inhibitory circuit, conduction delay, and current
network state helps determine the downstream consequence.

The 2010 Kumar-Rotter-Aertsen review used the four-function taxonomy introduced by Perkel and
Bullock in 1968: representation, interpretation, transformation, and transmission. The authors said
that transmission had received comparatively little experimental attention, not that it remained
the permanently "least studied" neural-code function.

## A medically bounded transmission chain

```text
presynaptic cellular state
    -> spike or burst initiation
    -> axonal propagation along a defined projection
    -> bouton-specific calcium entry and probabilistic release
    -> receptor and dendritic integration in a named receiver
    -> excitation, inhibition, silence, burst, plasticity, or routing change
    -> recurrent network and behavioral consequence
```

The chain is not universal in its details. Electrical synapses, graded release, neuromodulation,
dendritic spikes, local axon collaterals, long-range projections, and non-spiking cells require
their own models.

For receiver `j`, a compact modeling grammar is:

```text
y_j(t) = F_j[s_j(t), sum_i W_ij x_i(t - tau_ij), H_j(t)]       [1]
```

`x_i` denotes declared presynaptic variables; `W_ij` includes anatomical and effective coupling;
`tau_ij` includes delay; `s_j` is the receiver's current state; and `H_j` is relevant history.
Equation [1] is not a literal equation used by a neuron. It makes the central constraint explicit:
the same incoming event can have different effects on different receivers or on the same receiver
at different times.

## Established physiology

Several parts of the proposed bridge have strong empirical support:

- dendritic geometry and active conductances affect a neuron's input-output behavior;
- axons propagate regenerative action potentials along specific anatomical projections;
- presynaptic waveform shape can alter calcium-current timing and transmitter release;
- release probability and postsynaptic effect vary across boutons and synapses;
- convergent, divergent, recurrent, excitatory, and inhibitory connectivity shape population
  propagation;
- synchronous events and asynchronous rate changes can both carry information under bounded
  conditions.

Mainen and Sejnowski showed in compartmental models that changing dendritic geometry while holding
the modeled channel distribution constant could produce different firing patterns. Chao and Yang
showed at the calyx of Held that presynaptic action-potential waveform affected calcium-current and
synaptic-transmission timing. These findings support a morphology-and-state-sensitive transmission
problem. They do not prove that an output spike contains a lossless description of a neuron's
shape.

## The 2012 SAN ancestor

The September 2012 document *Neurons are Programs transmitting their shape theory* proposed that a
neuron's morphology, synaptic configuration, and current physical state act like a program whose
output represents a sparse consequence of that structure. The source explicitly corrected its own
sound metaphor: the signal was not literal sound but an analog "data packet that represents a
structure." It also described the message as a sparse distributed representation or tiny fraction
of the larger state, not a transmission of every structural detail.

The scientifically recoverable claim is therefore:

```text
learned morphology + synaptic configuration + conductance and recent state
    -> pattern-selective cellular transformation
    -> sparse output signature
    -> receiver-specific network consequence
```

The later Git note remembered this proposal as 2014. The surviving PDF metadata and a
contemporaneous Facebook email receipt place the source on September 19-20, 2012. See
[[neuron-shape-information-storage|Neuron Shape as Information-Bearing State]].

## The August 2022 receive-transform-project architecture

The August 5, 2022 SAN Whitepaper made the cellular and array-level cycle explicit. It described
neurons as pattern sensors and phase transmitters, with downstream arrays receiving many outputs at
once. The camera, eye, LED, television, microphone, and speaker language was explanatory analogy:
the source itself said that there are no literal LEDs in the brain.

At the cellular scale:

```text
dendritic and synaptic reception
    -> state-dependent cellular transformation
    -> axonal and terminal projection
```

At circuit and network scales, many cells contribute partial outputs; local populations combine
them; and recurrent pathways redistribute changed states. A single generic neuron does not receive
all sensory features or project to every cortical, striatal, thalamic, or motor target.

## SAN's later PWD and NAPOT interpretation

Later SAN writing adds receiver-relative tonic context and phase-wave differentials to the older
architecture. In that interpretation, transmission can vary in timing, phase relation, frequency,
waveform, burst structure, transmitter quantity, omission, spatial route, and receiver state. The
downstream consequence, not a free-floating phase label, determines whether an event functioned as
an informative update.

This yields a testable SAN chain:

```text
expected receiver state
    -> uncommon excitation- or inhibition-driven departure
    -> pathway-bounded physical transmission
    -> receiver-specific transformation
    -> changed routing, memory, perception, autonomic state, or action
```

NAPOT does not require one global phase pattern, perfect brain-wide synchrony, or a hidden viewer.
It proposes repeated receive-transform-project operations across micro, meso, and macro scales,
with the distributed network itself performing the observer-action process.

## Three scales that must not be collapsed

| Scale | Established operation | SAN interpretation |
|---|---|---|
| Micro | Dendritic compartments, soma, axon initial segment, axon, boutons, release machinery, and postsynaptic receptors transform local signals. | Learned cellular structure makes each receiver selectively responsive and gives its output a receiver-dependent functional signature. |
| Meso | Local circuits coordinate, inhibit, compete, recur, and route activity through cell-type-specific connectivity. | Population updates can combine partial cellular outputs and redistribute a changed local model. |
| Macro | Specialized cortical, thalamic, hippocampal, basal-ganglia, cerebellar, brainstem, sensory, and motor pathways exchange task-dependent signals. | Recurrent partial updates jointly maintain an embodied working model without one universal broadcast or inner screen. |

## What this page does not claim

- A spike does not contain a literal geometric copy of the whole neuron.
- No finite biological curve stores or transmits infinite information at physical precision.
- One generic pyramidal neuron does not implement every neural-code function for every modality.
- Perfect phase alignment is not required for all neural communication.
- Gamma frequency, gamma power, or synchrony alone does not identify semantic content or
  consciousness.
- TMS threshold estimation does not decode memories or establish a native brain query protocol.
- HTTP and FTP are not biological neural protocols.

## Falsifiable tests

The joined SAN interpretation becomes more informative than conventional coding descriptions only
if its additional variables improve prediction. A useful experiment would compare models based on:

1. firing rate alone;
2. spike timing and waveform;
3. synapse- and receiver-specific state;
4. the full receiver-relative PWD vector and recurrent route history.

The stronger model should predict downstream cellular response, route recruitment, perceptual
report, or motor consequence on held-out trials. If PWD variables add no reproducible information
after conventional variables and receiver state are controlled, the stronger SAN transmission
claim is weakened.

## Sources

- [Kumar, Rotter, and Aertsen (2010), spiking-activity propagation](https://www.nature.com/articles/nrn2886)
- [Mainen and Sejnowski (1996), dendritic structure and modeled firing pattern](https://pubmed.ncbi.nlm.nih.gov/8684467/)
- [Vetter, Roth, and Hausser (2001), dendritic morphology and action-potential propagation](https://pubmed.ncbi.nlm.nih.gov/11247988/)
- [Chao and Yang (2019), action-potential waveform and release timing](https://pubmed.ncbi.nlm.nih.gov/30872753/)
- [August 5, 2022 SAN Whitepaper fixation](https://github.com/v5ma/selfawarenetworks/blob/c0f1e474fe5c351da63ed6e77b0b13c6becc23bb/whitepaper.md)
- [2022 public morphology/transmission note a0008z](https://github.com/v5ma/selfawarenetworks/blob/c0f1e474fe5c351da63ed6e77b0b13c6becc23bb/a0008z.md)
- [2022 selective reception and projection note a0007z](https://github.com/v5ma/selfawarenetworks/blob/16b087dcf8a28d55ba32b45c40c342f81744a354/a0007z.md)

## Related pages

- [[neural-code-functions|Neural Code Functions]]
- [[neuron-shape-information-storage|Neuron Shape as Information-Bearing State]]
- [[action-potential-waveform|Action Potential Waveform]]
- [[multi-vesicular-release|Multivesicular Release]]
- [[dendritic-coincidence-detection|Dendritic Coincidence Detection]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[neural-array-projection-oscillation-tomography|Neural Array Projection Oscillation Tomography]]
- [[brain-as-queryable-network|Brain as Queryable Network]]
