# Action Potential Waveform

An **action-potential waveform** is the membrane-voltage trajectory of a spike at a specified
recording location. Rise time, peak voltage, width, repolarization, afterdepolarization, and
afterhyperpolarization are measurable features. They are coupled consequences of conductances,
geometry, compartment, and recent history, not a universal set of independently readable symbols.

The source-faithful SAN question is nevertheless substantive: what information about a cell's
recent input and learned state can survive in a compartment-specific waveform, how is that event
transformed at different boutons and synapses, and can the resulting **pattern of receiver
consequences** improve prediction of the next population state?

> **Scientific boundary:** Waveform variation can carry recent-history information in specific preparations and can influence propagation, calcium entry, and synaptic efficacy. A chemical synapse does not transmit the presynaptic voltage trace intact. The stronger SAN claim concerns a receiver-relative, spatially distributed output pattern after those transformations; it is not established by waveform variation alone.

> **Image status:** The earlier ion-current plate and a preliminary mixed-receptor plate failed medical review and are preserved in the external `DO-NOT-USE` quarantine outside the public website. The image below is the reviewed replacement. It preserves the multidimensional event question while separating compartment, covariance, synaptic transformation, receiver, and nested model tests.

![A spike waveform changes by compartment and reaches a receiver only through synaptic transformation](../assets/generated/san/action-potential-waveform/action-potential-waveform-compartment-covariance-receiver-20260720-v1.png)

> **How to read the figure:** Panel 1 shows that one event has different local traces. Panel 2 defines a covariance-aware waveform object rather than independent semantic channels. Panel 3 shows the conditional chemical-synapse transformation and receptor matching. Panel 4 separates observable signal, causal mechanism, and receiver-level code. The bottom row asks whether SAN phase or population variables add prediction or causal control after conventional waveform, calcium, bouton, and receiver variables are included.

## A waveform is compartment-specific

The familiar textbook spike is a useful schematic, not one waveform shared by the whole neuron.
The soma, [[receptive-inceptive-dendritic-projection|axon initial segment]], axonal branches, and
boutons can have different amplitudes and durations. Sodium- and potassium-channel distributions,
morphology, myelination, recent firing, temperature, and modulators all influence the local trace.

Somatic state can affect axonal and presynaptic waveforms, while local axonal conductances and
geometry continue to transform them. See [Shu et al. (2006)](https://doi.org/10.1038/nature04720),
[Foust et al. (2011)](https://doi.org/10.1523/JNEUROSCI.2752-11.2011), and
[Hoppa et al. (2014)](https://doi.org/10.1016/j.neuron.2014.09.038).

This does not mean that rise time, peak, area, width, slope, and afterhyperpolarization are
independent channels. They covary because the same conductances and geometry help generate them. A
valid encoding analysis must account for that covariance and must not substitute a somatic
waveform for the trace at an identified bouton.

## Recent input history can survive in waveform shape

The all-or-none description remains useful for regenerative spike initiation. It does not imply
that every spike waveform is identical or informationally equivalent.

In rat cortical pyramidal neurons driven by naturalistic conductance patterns, somatic waveform
height and width reliably signaled aspects of the preceding input history for up to about 50 ms.
In that preparation, the waveform carried more information about the stimulus history than an
instantaneous-rate description. See
[de Polavieja et al. (2005)](https://doi.org/10.1523/JNEUROSCI.0242-05.2005).

That result establishes a bounded cellular code in a particular preparation. It does not show that
every learned sensory feature has a unique waveform, that the soma specifies every terminal
consequence, or that waveform variation by itself produces a rendered percept.

## What crosses a chemical synapse

The presynaptic voltage waveform opens terminal calcium channels and changes the electrical driving
force for calcium entry. Local calcium then affects vesicle fusion. The downstream cell receives
transmitter through its receptors; it does not receive a copy of the presynaptic voltage waveform.

**terminal voltage -> local calcium dynamics -> probabilistic vesicle fusion -> receptor activation
-> dendritic and somatic response**

Every arrow depends on synapse type, active-zone geometry, receptor composition, recent activity,
and receiver state. The steep calcium dependence of release makes waveform changes consequential,
but also prevents a simple one-to-one mapping from waveform width to transmitter amount. See
[Schneggenburger and Neher (2000)](https://doi.org/10.1038/35022702),
[Scarnati et al. (2020)](https://pubmed.ncbi.nlm.nih.gov/32425764/), and
[Duerst et al. (2022)](https://doi.org/10.1038/s41467-022-33565-6).

## One source event can produce a distributed output pattern

Source-faithful recovery changes the object of interest. The early SAN proposal was not only about
one waveform being decoded by one receiver. It asked whether a neuron's learned and recent state
could be expressed through a patterned one-to-many output.

Established physiology supplies a foothold without proving the SAN composition. In young rat
neocortical pyramidal cells, one action potential reliably reached boutons across the axonal arbor,
yet action-potential-evoked calcium transients varied substantially among boutons, including
boutons on the same axon. See
[Koester and Sakmann (2000)](https://pubmed.ncbi.nlm.nih.gov/11118494/). Active-zone structure,
target identity, local modulation, release machinery, and receiver receptors can further diversify
the consequences.

The medically bounded route is:

**learned and recent somatodendritic state -> AIS event -> compartment-specific axonal waveform ->
bouton-specific calcium and release transformation -> spatial pattern of receiver effects ->
recurrent population update**

This route does not require the soma to program an arbitrary value into every bouton. The spatial
output pattern emerges from the source event interacting with the existing state and structure of
the axonal arbor, synapses, and receivers.

## Signal, mechanism, code, and rendering are different claims

Four claims must be separated:

1. **Observable:** waveform features vary across events, compartments, and contexts.
2. **Mechanism:** some variation causally alters propagation, calcium entry, or synaptic effect.
3. **Code:** a named receiver or analysis can discriminate task-relevant history from transformed
   waveform consequences beyond correlated rate and timing variables.
4. **Rendering:** the distributed consequences help shape a recurrent body-world or memory state
   used in perception and action.

The first two are established in specific preparations. Limited instances of the third are also
established, including recent-history information in cortical waveform shape. SAN's distinctive
research question concerns the joined third-to-fourth route across identified receivers and
population dynamics.

Extracellular BCI recordings add another boundary. Their waveform shapes are filtered mixtures
influenced by electrode geometry, tissue conductivity, source orientation, and spike sorting. They
do not directly measure the voltage waveform at each bouton, multivesicular release, or a semantic
magnetic imprint.

## A covariance-aware waveform object

The September 2022 SAN source proposed treating neural events as multidimensional objects rather
than binary pulses. A scientifically usable event vector for event `e` at compartment `c` could be:

**Waveform-object definition:** `W(e,c) = [V_peak, half_width, rise, repolarization,
afterpotential, burst_position, recent_history, terminal_identity]` **[1]**

A repeated dataset may be arranged as `W[event, compartment, feature]` and analyzed as a tensor.
That word describes a mathematical data organization; it does not establish independent channels,
semantic content, or a biological tensor calculus. Coordinates, units, covariance, reference
condition, and missing measurements must be declared.

For receiver `r`, the consequence is a transformation rather than a copy:

**Receiver transformation:** `Y_r = F_r(W_terminal, calcium, bouton_state, receptor_state,
receiver_history)` **[2]**

Different receivers can therefore respond differently to the same source event. A waveform becomes
information-bearing for a receiver when its transformed consequences support reproducible
discrimination and change later processing or action.

## Bounded SAN interpretation

SAN proposes that a compartment-indexed waveform object contributes to a receiver-relative
[[phase-wave-differential]] after synaptic transformation. The tonic/phasic language remains
receiver-relative: a waveform difference functions as phasic ink only if a receiving process
registers it against its ongoing state and it changes a later trajectory.

The decisive nested analysis compares:

1. spike count and timing;
2. full terminal waveform;
3. calcium, bouton, and release state;
4. postsynaptic receiver state; and
5. SAN phase, spatial-output, or population-state variables.

The SAN extension survives only if the final variables add held-out prediction and causal control
after the earlier levels are included. A null result narrows the waveform contribution without
restoring a binary-spike abstraction.

## Attribution and source-faithfulness boundary

The 2026 automated Wiki draft combined Micah-authored notes, a multi-speaker recording, later
AI-assisted synthesis, and generated prose. It then attributed claims such as independently readable
waveform dimensions, a direct magnetic semantic imprint, and a waveform-set consciousness threshold
to "the SAN sources" as one block. That attribution was too broad.

The recoverable Micah-authored operation is the multidimensional, receiver-relative route from
learned or recent state through waveform and synaptic transformation into a distributed update.
The "magnetic pin" in the August 2022 source was an Etch A Sketch analogy for a phasic change against
a tonic pattern, not evidence that one spike deposits a decoded magnetic semantic message.
Conscious rendering is a later network-level SAN interpretation, not a threshold read directly from
one waveform.

The June 2022 `b0268y` record is a multi-speaker conversation. Micah asks how dendritic pattern
detection could become a change in output waveform; other speakers challenge the potassium account
and recommend calcium, cAMP, and classical channel literature. The whole conversation is evidence
of the question and its adversarial context, not proof of the proposed mechanism.

## Source-faithful SAN genealogy

Later terminology must not be backdated:

| Public source stage | Recovered operation | Attribution and boundary |
|---|---|---|
| [June 8, 2022: neuron-pattern conversation](https://github.com/v5ma/selfawarenetworks/blob/cd95efe985f2b21cca69eb3fd253cf473a268587/b0268y%20ctpr.txt) | Micah asks how dendritic detection becomes a changed output waveform. | Multi-speaker, imperfect transcript; the question is Micah's, while objections and suggested mechanisms belong to other speakers. |
| [June 10, 2022: sparse transformed output ancestor](https://github.com/v5ma/selfawarenetworks/blob/0e73da1a76427937a8203c2fa9e1306c3114505e/a0008z.md) | Learned morphology was proposed to support a sparse transmitted representation rather than an infinite copy of cellular structure. | Does not yet contain the mature tensor, PWD, or bouton-specific mechanism. |
| [August 3, 2022: APME](https://github.com/v5ma/selfawarenetworks/blob/b79351a4fe3667296952c483e6beb68732bf3865/a0053z.md) | Potassium-channel state, waveform duration, calcium, release, phasic departure, tonic relaxation, and rendering were joined. | Fixed vesicle symbols, forced inhibition, and direct semantic transmission remain rejected. |
| [August 27, 2022: learned pattern to wave-shape proposal](https://github.com/v5ma/selfawarenetworks/blob/db4349ddbcc74fa19a2fa564e60dc86f9aca97a8/a0001z.md) | Learned synaptic patterns were proposed to shape magnitude-frequency events and distributed receiver output. | Apical-as-output anatomy and arbitrary synapse-by-synapse control remain rejected; preserve the one-to-many operation. |
| [September 2, 2022: waveform-event tensor proposal](https://github.com/v5ma/selfawarenetworks/blob/16b087dcf8a28d55ba32b45c40c342f81744a354/a0008z.md) | Action-potential events were proposed as multidimensional objects with frequency and magnitude in a higher-dimensional approximation. | A data tensor is a formal modeling proposal, not evidence that cells calculate symbolic Taylor series or decode independent coordinates. |
| [September 6, 2024: receiver-relative PWD](https://github.com/v5ma/selfawarenetworks/blob/df4d7f8d3270d56de167035c4987c3e072696c79/02san.md) | Transmission duration and magnitude were placed relative to a prior tonic state and linked to a later network update. | No universal inverse-frequency law or conscious semantic field follows from waveform variables alone. |
| [June 16, 2025: variability extension](https://github.com/v5ma/selfawarenetworks/blob/172e778a01b06357e5921d772f8ff18f9818a7d3/13san.md) | Recent duration variability was proposed as one input to the next self-updating oscillator state. | CV is an incomplete summary and not a proven cellular controller, waveform code, or PWD vector. |

> **SAN boundary:** A waveform is a measurable physical trajectory. The source-faithful SAN extension concerns how its transformed, receiver-specific consequences may participate in a spatially distributed recurrent update. No waveform, neuron, synapse, field measurement, or hidden viewer observes that update; the coordinated network produces the observer-action state.

## Related concepts

- [[receptive-inceptive-dendritic-projection]]
- [[action-potential-duration]]
- [[action-potential-waveform-encoding]]
- [[stimulus-history-and-action-potential-waveform]]
- [[action-potential-magnitude-via-duration]]
- [[multi-vesicular-release]]
- [[membrane-potential]]
- [[phase-wave-differential]]
- [[tonic-phasic-phase-wave-differential]]
- [[information-theory-in-spiking]]
- [[oscillation-memory-reinstatement]]
- [[napot-overview]]
