# Coincidence Detection and the SAN Neural Bit: The 2018 Refinement

This page documents Micah Blumberg's **2018 refinement** of coincidence as a candidate neural
information unit. The broader donor-and-extension genealogy begins on [[coincidence-as-a-bit|Coincidence
as a Bit]]. The 2018 source adds an important qualification: the proposed unit is not one action
potential, one fixed timing window, or automatically one Shannon bit. It is a receiver-usable
distinction that can begin below axonal firing threshold and whose information content depends on
the alternatives, context, decoder, and downstream consequence.

> **Figure status:** The earlier figure remains intact in the failed-medical-review archive and is
> not embedded here. It imposed one 1-3 ms window, one NMDA/calcium gate, one threshold-to-spike
> sequence, automatic gamma locking, and a generic cell-to-network bridge. Art remains paused while
> the source-faithful operation is reviewed.

## Source recovery: what the 2018 text actually added

[[gh-a0209z|The source note a0209z]] carries an owner-supplied date of **May 29, 2018**. Its body
and date were publicly Git-fixed on June 13, 2022. The owner date and public-fixation date are
different evidence and must not be collapsed.

The note initially used categorical phrases such as "the brain is digital" and described a narrow
millisecond gate. Its later clarifications in the same source are more precise and control the
source-faithful interpretation:

- coincidence detection is the **basis** of a proposed unit, not one spike equal to one bit;
- relevant events can occur below the threshold for an axonal action potential;
- one event may carry more or less than one bit under a declared code and probability model;
- the central thesis is not that the whole brain is simply digital;
- information requires a receiver or decoder rather than possessing meaning in isolation; and
- knowledge, feeling, and perception are proposed to depend on spatial-temporal patterns and
  recurrent network use, not isolated binary pulses.

The historical phrase "the bit of the mind is a coincidence" is therefore shorthand for a
**receiver-relative distinction**, not a complete physiological definition.

The same 2018 source joined that refinement to an early SAN systems sketch: signal processing,
learned neural-network transformation, a three-dimensional point-cloud-like model, and recurrent
feedback loops. Those components foreshadow later distributed-rendering work, but the 2018 source
does not by itself establish NAPOT, PWD, or a complete theory of consciousness.

## Recovering the operation without preserving the errors

| Historical wording or image cue | Intended operation worth preserving | Medically bounded translation |
|---|---|---|
| A synapse or dendrite "fires" | A local receiver detects a consequential input relation | Presynaptic terminals release transmitter; postsynaptic receptors and conductances generate local potentials; neurons generate axonal action potentials |
| Charged ions are sent as neurotransmitters | Chemical transmission changes ionic state and excitability | Neurotransmitters bind receptors and alter ionic conductance; sodium, potassium, calcium, and chloride ions are not themselves the ordinary neurotransmitter molecules |
| A 1-3 ms coincidence window | Inputs are compared within a receiver-dependent temporal criterion | Effective windows vary with receptor kinetics, membrane state, morphology, inhibition, input location, recent activity, and cell type |
| A dendritic event "backpropagates" | Local dendritic and axonal events can interact | A backpropagating action potential begins near the axon initial segment and invades dendrites; a locally generated dendritic spike is a distinct event |
| The brain is digital | Reliable neural use can depend on discriminable events or states | Neural systems combine continuous physical variables, thresholded events, stochastic release, and discrete model categories; no single digital/analog label is sufficient |

This is an `ADDITIVE_REPAIR`: the information operation is retained while the anatomical container
and categorical wording are corrected.

## Established physiology: discrete events in continuous state

Membrane voltage, conductance, calcium concentration, and transmitter concentration vary
continuously. Action potentials are regenerative events, but their timing, waveform, burst context,
and synaptic consequences are not informationally interchangeable. Local dendritic events and
subthreshold states can affect plasticity or later transmission without producing an immediate
axonal spike.

Primary results establish several bounded examples:

- [Polsky, Mel, and Schiller (2004)](https://doi.org/10.1038/nn1253) found branch-dependent
  nonlinear summation in rat neocortical pyramidal neurons.
- [Golding, Staff, and Spruston (2002)](https://doi.org/10.1038/nature00854) showed that local
  dendritic spikes could support cooperative LTP in rat CA1 without requiring axonal firing and
  backpropagation.
- [Alle and Geiger (2006)](https://doi.org/10.1126/science.1119055) directly recorded combined
  subthreshold analog and action-potential signaling in hippocampal mossy fibers.
- [Shu et al. (2006)](https://doi.org/10.1038/nature04720) showed that presynaptic somatic voltage
  could alter axonal action-potential waveform and the postsynaptic effect in local cortical
  connections.
- [Fino, Deniau, and Venance (2009)](https://doi.org/10.1371/journal.pone.0006557) found that brief
  subthreshold depolarization paired with presynaptic activity could induce long-term plasticity at
  corticostriatal synapses.
- [Nemenman et al. (2008)](https://doi.org/10.1371/journal.pcbi.1000025) measured information in
  precisely timed spike patterns in a fly visual neuron, demonstrating that information estimates
  require a declared stimulus ensemble, response representation, and time resolution.

These findings support hybrid event-and-state coding. They do not establish one universal neural
alphabet, one coincidence rule, or one conversion from a cellular event to conscious content.

## The discrete-representation claim

James Tee and Desmond Taylor's [May 4, 2018 preprint](https://arxiv.org/abs/1805.01631), later
published in 2020 ([DOI](https://doi.org/10.1109/TMBMC.2020.3025249)), argued from a communications
model that neural information should be represented discretely despite continuous-valued physical
signals. That paper is an important comparator and helped shape the 2018 SAN discussion. It is not
experimental proof that all neural representation is globally discrete.

The source-faithful SAN position is narrower and more useful: a continuous biological system can
produce receiver-discriminable events, categories, or transitions, while the physical event remains
multidimensional and context-dependent.

## Operational definition

Let `X` denote candidate input states, `R` a declared receiver response, and `C=c` the receiver and
network context. Inputs `a` and `b` form a consequential distinction for that receiver when a
declared statistical distance between the response distributions is reliably greater than zero:

`D_R(a,b | c) = d(P(R | X=a, C=c), P(R | X=b, C=c)) > 0`. [1]

When the alternatives and probabilities are defined, their statistical dependence can be measured:

`I(X; R | C=c) > 0`. [2]

Neither equation proves causation. A causal neural-bit claim additionally requires controlled
intervention on the candidate input or criterion, a measured change at the receiver and downstream
target, appropriate confound controls, and ideally mechanism-matched rescue.

A researcher's binary readout can still be useful:

`b_R(W) = 1` when a declared receiver criterion is met within window `W`; otherwise `b_R(W) = 0`.
[3]

That readout partitions outcomes for analysis. It does not make the complete cell state binary. A
binary variable carries exactly one bit of entropy only when its two alternatives are equally
probable.

## Tonic context, phasic consequence, and the decoder

In SAN terms, the receiver's maintained state is the [[tonic-phasic-canvas|tonic context]] against
which a change becomes detectable. A consequential coincidence is a phasic departure only relative
to that context. It becomes a candidate [[phase-wave-differentials|PWD event]] only when the source,
reference state, typed change, route, receiver, and downstream effect are specified.

The receiver is not an inner viewer. Receptors, dendritic compartments, cells, and circuits change
state through physical interaction. Recurrent networks, bodily feedback, and action use those
changes. The distributed system performs observer-action; no separate entity reads a stream of
neural bits.

## Scale ladder

- **Micro:** selected inputs alter a declared spine neighborhood, dendritic branch, soma, axon
  initial segment, axon, terminal, or synapse.
- **Meso:** multiple cellular distinctions alter a named local circuit, oscillating group, cortical
  motif, or nucleus.
- **Macro:** distributed recurrent and sensorimotor systems use population distinctions in
  perception, memory, body regulation, report, choice, or action.

The abstract receive-distinguish-update operation can recur at each scale, but the receiver and
measurement must be redefined. A local dendritic event is not automatically a population bit,
traveling wave, reconstructed scene, conscious percept, or motor command.

## Distinctive SAN hypothesis and test

The 2018 refinement supports this candidate operator:

`current receiver state + selected spatial-temporal inputs -> consequential distinction -> changed
local response or plasticity -> distributed reuse in prediction, reconstruction, or action`.

The distinctive test is whether a model containing receiver state, learned criterion, spatial input
arrangement, timing, subthreshold dynamics, and downstream consequence predicts held-out circuit or
behavioral results better than rate-only, spike-count, timing-only, fixed-window, or phase-only
models.

The stronger NAPOT bridge requires a second level of evidence: ensembles of independently measured
receiver-relative distinctions must improve reconstruction or action prediction; selective
disruption must remove that incremental value; and matched restoration must rescue it. Coincidence
detection alone does not prove tomography or consciousness.

## Read next

- [[coincidence-as-a-bit|Coincidence as a Bit]]
- [[coincidence-detection|Coincidence Detection]]
- [[dendritic-coincidence-detection|Dendritic Coincidence Detection]]
- [[criterial-causation|Criterial Causation]]
- [[dendritic-computation|Dendritic Computation]]
- [[dendritic-spike|Dendritic Spike]]
- [[synaptic-plasticity|Synaptic Plasticity]]
- [[discrete-neural-coding|Discrete Neural Coding]]
- [[tonic-phasic-canvas|Tonic and Phasic Roles]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
- [[napot-overview|NAPOT Overview]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]

## Source provenance

- Owner-supplied source date: May 29, 2018.
- Earliest public Git fixation of the body: June 13, 2022
  ([immutable source](https://github.com/v5ma/selfawarenetworks/blob/5f0b4dcc77a7329ff1fb3ac9c54470e14826f635/a0209z.md)).
- Public Git fixation containing the owner date: June 13, 2022
  ([immutable dated source](https://github.com/v5ma/selfawarenetworks/blob/4e8f7971f27760a9ef99a096b6b3f3b00e564359/a0209z.md)).
- Current source mirror: [[gh-a0209z|a0209z]].
