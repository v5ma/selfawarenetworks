# Synaptic Plasticity: Timing, Oscillation, and SAN's Coherence-Dispersion Hypothesis

**Synaptic plasticity** is the activity- and state-dependent alteration of synaptic function. It includes multiple mechanisms operating over different timescales and at different synapses. It is not one universal rewrite rule, and it does not automatically install a complete memory, engram, oscillatory route, or conscious percept.

SAN uses this established family of mechanisms to propose a more specific multiscale hypothesis: repeated timing relations among neurons may stabilize not only which cells participate, but also which assemblies tend to couple, remain phase-separated, or inhibit one another during later neural rendering.

> **Claim boundary:** Timing-sensitive LTP, LTD, BTSP, inhibitory plasticity, and oscillation-sensitive plasticity are established research areas. The joined claim that coherence and structured phase dispersion jointly sculpt rendered content and are consolidated through plasticity is a SAN hypothesis.

## Plain-language summary

When a neural pathway is repeatedly used, later activity can travel through it differently. The change may occur before or after the synapse and may alter release probability, receptor number or state, dendritic integration, excitability, inhibition, spine structure, or eligibility for later modification.

SAN adds a timing-centered interpretation:

1. Some cells or assemblies become active together and maintain a compatible phase relation.
2. Other cells or assemblies remain deliberately separated in phase or are suppressed by inhibition.
3. The combined pattern of coupling and separation helps define what is grouped, distinguished, selected, or excluded in the current distributed render.
4. Repetition may bias later synaptic and circuit responses so that useful timing relations are easier to reconstruct.

This is not the claim that maximum synchrony is always desirable. A percept needs both joined features and boundaries between features.

## Three biological scales

| Scale | Established biological process | SAN interpretation |
|---|---|---|
| Micro: synapse and dendrite | Presynaptic release, postsynaptic depolarization, calcium signaling, receptor trafficking, spine change, STDP, LTP, LTD, and BTSP | Local timing history changes what a receiver is prepared to detect and how strongly it influences later activity. |
| Meso: local circuit and assembly | Recurrent excitation, feedforward and feedback inhibition, phase locking, intermittent synchrony, and plastic inhibitory as well as excitatory synapses | Compatible timing recruits an assembly; inhibition and structured phase separation preserve alternatives and boundaries. |
| Macro: distributed networks | State-dependent coordination, traveling activity, neuromodulation, memory reinstatement, and sensorimotor recurrence | Learned patterns of coupling and separation contribute to reconstructing a distributed working render; no single synapse or region contains an inner picture or viewer. |

Plasticity at one scale does not automatically prove organization at another. A SAN account must trace a local change to a measured circuit consequence and then to behavior or perception.

## What established neuroscience permits

The direction and magnitude of a synaptic change can depend on more than whether two neurons fired. A bounded descriptive form is

\[
\Delta w_{ij}=F(\Delta t_{ij},\,V_{post},\,[Ca^{2+}],\,r,\,M,\,w_0,\,h,\,c),
\tag{1}
\]

where \(\Delta t_{ij}\) is relative spike timing, \(V_{post}\) postsynaptic voltage, \([Ca^{2+}]\) calcium state, \(r\) recent activity, \(M\) neuromodulatory state, \(w_0\) initial efficacy, \(h\) activity history, and \(c\) cell and circuit context. Equation 1 is a scope statement, not a universal biological learning rule.

Experiments provide several important anchors:

- Correlated pre- and postsynaptic firing can induce LTP or LTD depending on relative timing, initial strength, and cell type.
- During 20- or 40-Hz membrane-potential oscillations in rat visual-cortex slices, the same synchronized input produced LTP near oscillatory peaks and LTD near troughs. Oscillatory phase can therefore affect plasticity direction under a defined preparation and protocol.
- BTSP in hippocampal CA1 can potentiate inputs across seconds-long windows around dendritic plateau events. Plasticity is not restricted to one millisecond-scale Hebbian window.
- Plastic inhibitory synapses can change pyramidal-cell gain, interlaminar information transfer, and the timing of spikes relative to gamma activity.
- Communication-through-coherence provides an established proposal for selective interareal communication, but it does not establish SAN's complete rendering or plasticity mechanism.

These findings create empirical room for the SAN synthesis. They do not imply a one-to-one mapping in which every coherent pair undergoes LTP or every phase-separated pair undergoes LTD.

## Recovering the intended SAN idea

The June 2022 source `a0142z` argues that coherence supports binding, convergence, and coupling, while decoherence supports distinction, deconvergence, and decoupling. In SAN's simplified pairwise language:

- **Coherence:** two cells or assemblies fire together and continue in a compatible phase relation until a change perturbs that relation.
- **Splay or structured dispersion:** cells or assemblies fire apart and maintain a phase-separated relation until another change reorganizes them.

Here, *decoherence* is neural dynamical language, not a claim about quantum decoherence. A mathematical splay state is also more specific than random desynchronization: phases are distributed in an organized way around a cycle.

The same 2022 note places dendritic-spine LTP beside a larger-scale proposal involving LTD **or** inhibitory circuit configurations. The medically faithful reading keeps those as distinct mechanisms:

- LTP and LTD describe lasting changes in synaptic efficacy under defined induction conditions.
- Inhibition describes reduced influence or excitability produced through inhibitory cells, synapses, and conductances.
- Structured phase separation describes a population timing relation.

They can interact, but LTD is not simply "large-scale inhibition," and splay is not automatically LTD. The recovered SAN idea is that repeated coupling and separation patterns may be stabilized by several forms of excitatory and inhibitory plasticity.

## The SAN operator

For phases \(\phi_k\) in an assembly, the Kuramoto order parameter is

\[
R e^{i\psi}=\frac{1}{N}\sum_{k=1}^{N} e^{i\phi_k}.
\tag{2}
\]

High \(R\) indicates concentrated phases. Low \(R\) can indicate random dispersion **or** an organized splay state, so \(R\) alone cannot identify the neural function of dispersion.

SAN proposes the following causal sequence:

\[
\text{relative timing}
\rightarrow
\text{coherent or phase-separated assembly relation}
\rightarrow
\text{recruitment, suppression, or boundary formation}
\rightarrow
\text{repeated plasticity-inducing history}
\rightarrow
\text{changed future routing and render readiness}.
\tag{3}
\]

Phase-wave differentials (PWDs) are proposed as receiver-relative events that perturb this organization. Some perturbations recruit cells into compatible timing; others move cells apart, suppress a route, or establish a boundary. Plasticity is the slower family of changes through which repeated consequences may become easier to reinstate.

This yields the source-faithful joined claim:

> Neural rendering is sculpted by both coupling and structured separation. Repeated timing relations may be consolidated through excitatory and inhibitory plasticity so that later cues more readily reconstruct a learned pattern of recruitment, suppression, and phase organization.

## Feynman and Friston are bridges, not biological proof

The June 2022 `a0041z` note uses Feynman's constructive and destructive phase interference as an analogy for why aligned paths might reinforce while misaligned contributions cancel. Feynman's path integral is a quantum-physics formalism; it is not evidence that synapses implement a quantum path integral.

The June 2022 `a0601z` note engages Karl Friston's multiscale prediction and surprise framework. The later SAN synthesis compares mismatch reduction with the dissipation of PWDs and the updating of neural routes. Friston's free-energy framework does not itself establish SAN's coherence-dispersion-plasticity operator.

These analogies help state the computational question: can a biological network learn both the phase relations that promote joint influence and the phase or inhibitory relations that preserve distinction?

## Source genealogy

| Public fixation | Source contribution | Boundary |
|---|---|---|
| June 8, 2022 | `a0142z` states the coupling-versus-distinction role of coherence and decoherence and proposes links to dendritic-spine LTP and larger inhibitory/LTD organization. | First public fixation of the joined SAN direction, but it compresses three biological levels that must now be separated. |
| June 8, 2022 | `a0041z` compares phase alignment and cancellation with near-synchronous neural activity and shared growth signals. | Historical analogy and hypothesis, not quantum-neural evidence. |
| June 8, 2022 | `a0601z` connects Friston-like prediction across timescales with nested neural oscillations. | Multiscale bridge; it does not yet contain the full plasticity operator. |
| August 22, 2022 | The SAN Whitepaper describes changed synaptic and dendritic morphology as changed pattern sensitivity and long-term memory readiness. | Structural memory claim should not be reduced to synaptic weight alone. |
| September 2024 | `02san` explicitly describes PWD perturbation, resynchronization, altered firing, and plasticity as a loss-like update process. | The file is a human-AI dialogue; only Micah-labeled passages establish Micah's genealogy. |
| January 2025 | `raynote16` explicitly places Feynman, Friston, splay states, LTP-driven synchronization, and wave-difference dissipation in one synthesis. | Later synthesis; it must not be backdated into the 2022 wording. |

## Decisive experiment

Use a recurrent preparation in which firing rate, spike count, stimulation energy, and mean population power can be held as constant as practical while relative phase structure is varied.

1. Train matched assemblies under coherent, organized-splay, randomly dispersed, and inhibition-controlled conditions.
2. Measure excitatory and inhibitory synaptic changes separately.
3. Re-present a partial cue after learning.
4. Test whether the earlier phase topology is preferentially reinstated.
5. Compare models using rate alone, pairwise spike timing, phase structure, inhibition, and the full PWD description.

The SAN account gains support only if phase organization predicts later routing or reinstatement beyond firing rate, spike timing, voltage, calcium, neuromodulation, initial synaptic strength, and known circuit variables.

## Falsifiers and limits

The strong SAN formulation would be weakened if:

- relative phase structure adds no reproducible predictive value once established plasticity variables are controlled;
- organized splay and random dispersion have indistinguishable consequences across appropriate preparations;
- learned coupling or separation patterns are not preferentially reinstated by partial cues;
- measured local plasticity cannot be connected to the proposed circuit routing change;
- PWD variables do not improve prediction over rate, timing, voltage, and circuit state;
- the same rendering or behavioral outcome persists after selectively disrupting the claimed phase topology.

No present evidence establishes that a universal coherence/LTP and splay/LTD rule operates throughout the brain or that this mechanism by itself produces qualia.

## Primary evidence anchors

- [Bi and Poo (1998), timing-, strength-, and cell-type-dependent LTP/LTD](https://pubmed.ncbi.nlm.nih.gov/9852584/)
- [Wespatat, Tennigkeit, and Singer (2004), phase-sensitive synaptic modification during oscillations](https://pubmed.ncbi.nlm.nih.gov/15483125/)
- [Fries (2015), communication through coherence](https://pubmed.ncbi.nlm.nih.gov/26447583/)
- [Bittner et al. (2017), behavioral-timescale synaptic plasticity in CA1](https://pubmed.ncbi.nlm.nih.gov/28883072/)
- [Muller, Brette, and Gutkin (2011), STDP and stable phase locking in oscillatory input](https://pubmed.ncbi.nlm.nih.gov/22110429/)
- [Lourenco et al. (2020), inhibitory plasticity and coordinated cortical activity](https://pubmed.ncbi.nlm.nih.gov/31968242/)
- [Berner et al. (2021), generalized splay states in phase-oscillator networks](https://pubmed.ncbi.nlm.nih.gov/34340340/)

## Immutable SAN sources

- [`a0142z`, June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/37da575ba33f85cef4239295be161066d8d39f4c/a0142z%20ctpr.txt)
- [`a0041z`, June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0041z.md)
- [`a0601z`, June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0601z.md)
- [SAN Whitepaper working source, August 22, 2022](https://github.com/v5ma/selfawarenetworks/blob/2ebaefb421993860fd7c5482a1000706a75a6f83/whitepaper.md)
- [`02san`, September 2024](https://github.com/v5ma/selfawarenetworks/blob/df4d7f8d3270d56de167035c4987c3e072696c79/02san.md)
- [`raynote16`, January 2025 synthesis](https://github.com/v5ma/selfawarenetworks/blob/359855a5316fae4fe6ce532c2570424deb7291e2/raynote16.md)

## Related SAN concepts

- [[coincidence-as-a-bit]]
- [[phase-wave-differentials]]
- [[computational-phase-synchronization]]
- [[tonic-phasic-phase-wave-differential]]
- [[memory-as-regenerable-pattern]]
- [[memory-consolidation]]
- [[oscillating-group-completion]]
- [[chemical-synapse]]
- [[dendritic-spike]]
- [[neural-tuning]]

**Image status:** No accepted medically accurate figure is installed. A replacement prompt should show separate synaptic, circuit, and distributed-network scales without equating LTD, inhibition, or phase dispersion.
