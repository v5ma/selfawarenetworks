# Spike-Timing-Dependent Plasticity

**Spike-timing-dependent plasticity (STDP)** is a family of synaptic-plasticity rules in which the relative timing of presynaptic and postsynaptic activity contributes to a later change in synaptic efficacy. It is one experimentally established component of neural learning, not one universal curve and not a complete theory of memory, prediction, consciousness, or neural rendering.

SAN uses STDP as one possible cellular bridge inside a broader proposal: repeated timing relations may help stabilize which neural assemblies later join an active distributed render, which remain separated, and which routes become easier or harder to recruit.

> **Claim boundary:** Timing-sensitive LTP and LTD are established. Their sign, magnitude, and persistence depend on the preparation and biological context. SAN's proposed connection from local timing, through coherence or structured dispersion, to distributed rendering and choice remains a testable hypothesis.

## What established physiology shows

In the canonical pair-based experiment, a presynaptic event and a postsynaptic spike are paired at controlled delays. Some preparations show potentiation for one ordering and depression for the reverse ordering. That result is important, but it is not a universal law for every cell, synapse, brain region, activity pattern, or timescale.

A bounded descriptive form is:

```text
Delta w_ij = F(Delta t_ij, V_post, [Ca2+], M, h, w0, c)       [1]
```

where `Delta t_ij` is relative event timing, `V_post` is postsynaptic voltage, `[Ca2+]` is calcium state, `M` is neuromodulatory state, `h` is recent activity history, `w0` is initial efficacy, and `c` represents cell, synapse, pathway, and induction context. Equation 1 defines the scope of relevant variables; it is not offered as a universal biological learning rule.

Primary experiments establish several constraints:

- In cultured rat hippocampal glutamatergic synapses, Bi and Poo found timing-dependent potentiation and depression whose outcome also depended on initial synaptic strength and postsynaptic cell type.
- In rat visual-cortex slices, Wespatat and colleagues found that synaptic input near the peak of an induced 20- or 40-Hz membrane-potential oscillation produced LTP, while input near the trough produced LTD under that protocol.
- In mouse hippocampal CA1, behavioral-timescale synaptic plasticity can associate inputs with dendritic plateau events across seconds, far outside a single millisecond pair-based window.
- In mouse barrel cortex, inhibitory plasticity can alter pyramidal-cell gain, interlaminar information transfer, and spike timing relative to gamma activity.
- In a 2022 CA3-to-CA1 study, causal and anticausal pairing produced different short-term outcomes, yet both paired conditions showed potentiation after three days while asynchronous stimulation did not.

These results support timing-sensitive and state-dependent plasticity. They rule out a simple universal equation in which pre-before-post always means LTP and post-before-pre always means LTD.

## STDP is not all plasticity

| Mechanism or measure | Established question | Boundary in the SAN account |
|---|---|---|
| LTP and LTD | Does synaptic efficacy increase or decrease after an induction history? | Neither term specifies one universal timing rule or one population state. |
| Pair-based STDP | How does relative pre/post timing affect a synapse in a declared preparation? | It is one family of induction rules, not the write mechanism for every prediction error. |
| BTSP | Can plateau-related events associate inputs across behavioral timescales? | It demonstrates that relevant learning windows can extend to seconds. |
| Inhibitory plasticity | How do inhibitory synapses and circuits change? | Inhibition can interact with phase organization, but inhibition is not identical to LTD or splay. |
| Phase locking and coherence | Do events maintain a stable phase relation? | Coherent activity need not cause LTP, and phase locking can occur at nonzero lag. |
| Splay or structured dispersion | Are phases organized at separated positions around a cycle? | Low global coherence can be structured rather than random; it does not automatically cause LTD. |
| PWD | What receiver-relative event departs from an expected tonic state? | A PWD may change the conditions for plasticity, but it is not synonymous with an STDP event. |

## Recovering the SAN proposal

The earliest public SAN sources do not reduce learning to a standard STDP curve. They develop a larger relation among timing, coupling, differentiation, inhibition, and later route readiness.

The June 2022 source `a0142z` says that coherence can support binding, convergence, and coupling, while decoherence can support distinction, deconvergence, and decoupling. It places dendritic-spine LTP beside a more speculative larger-scale discussion of LTD and inhibitory organization. The source compresses distinct biological mechanisms, but its recoverable idea is coherent: the network may learn both what should act together and what should remain functionally separated.

The June 2022 source `a0041z` uses Feynman's constructive and destructive phase interference as an analogy, then asks whether neurons active at nearly the same time reinforce a shared destination. This is a historical bridge and hypothesis, not evidence that synapses implement a quantum path integral.

The October 2022 public source `b0067ywhisper` describes a tonic oscillator disrupted by unexpected excitation or inhibition, temporary subgroup synchronization or separation, gradual resettling, and repeated together-versus-apart activity influencing later connection and route structure. Some literal causal statements in the recording are speculative. The source nevertheless fixes the operational chain clearly:

```text
timing difference
-> temporary coupling or separation
-> repetition
-> changed future recruitment                                      [2]
```

SAN's mature formulation connects that chain to PWDs. Unexpected excitation, unexpected inhibition, omission, altered duration, or changed phase can create a receiver-detectable departure from tonic activity. Recurrent consequences may then alter local synapses and circuits, changing how the next departure is routed.

## Joining and leaving the active render

SAN does not claim that coherence by itself is consciousness. The stronger formulation is a selective joining-and-leaving process:

1. A candidate pattern already exists at weaker or more local influence.
2. Phase-compatible coupling, recurrent recruitment, and rising relative drive let it influence the active distributed render.
3. Inhibition, detuning, structured dispersion, or loss of reciprocal influence can remove it from that active coalition.
4. Leaving the active render does not erase the memory or latent route that could later recruit it again.
5. Choice occurs when this changing functional topology favors one candidate route strongly enough to propagate toward action.

Plasticity supplies the slower memory of these episodes. Repeated timing histories may make a future joining, boundary, suppression, or route transition easier to reconstruct. This current joined formulation integrates older SAN sources about inhibitory route selection, dominant PWD rhythms, virtual engrams, and weaker unconscious patterns. The complete formulation should be dated to its present synthesis rather than projected backward into any one 2022 source.

## The SAN residual

The proposed multiscale operator is:

```text
receiver-relative timing event
-> local efficacy or excitability change
-> altered assembly recruitment or separation
-> changed future routing and render readiness                     [3]
```

This is more specific than saying that neurons that fire together wire together. It predicts a two-way relation:

- current phase topology constrains which local timing events can induce change; and
- accumulated local plasticity changes which phase topology can be reinstated later.

Computational models already show that STDP can learn phase relations or alter the structure of synchronized and desynchronized episodes. Those models establish feasibility for components of Equation 3, not SAN's complete rendering or qualia claim.

## Source and speaker boundaries

The September 2024 file `02san.md` is a human-AI dialogue. Micah-authored passages define tonic activity, PWDs, unexpected excitation and inhibition, synchronization preparedness, and breaks that carve a rendered difference. Later prose in that same file that describes STDP as direct validation was written by the labeled AI assistant. It is useful as a research lead, but it is not independent evidence and must not be cited as Micah's earlier claim.

The January 2025 file `raynote16.md` explicitly joins Feynman, Friston, splay states, LTP-driven synchronization, and difference dissipation. Its authorship is not resolved by the file alone, so this Wiki treats it as a later repository synthesis rather than independent confirmation or a basis for backdating the joined formulation.

## Decisive experiment

Use a recurrent sensory or sensorimotor circuit in which spike count, mean rate, stimulation energy, and mean population power are controlled as closely as practical.

1. Train matched assemblies under coherent, organized-splay, randomly dispersed, and inhibition-controlled conditions.
2. Measure excitatory and inhibitory plasticity separately at identified synapses and cell classes.
3. Re-present partial cues after learning.
4. Test whether prior phase topology, route selection, or suppression is preferentially reinstated.
5. Compare models using rate alone, pairwise timing, voltage/calcium state, population phase structure, inhibition, and the full PWD description.

SAN gains support only if phase topology and receiver-relative PWD variables predict later recruitment, separation, behavior, or reinstatement beyond established plasticity variables.

## Falsifiers and limits

The strong SAN interpretation would be weakened if:

- phase organization adds no predictive value after known timing, voltage, calcium, neuromodulatory, and circuit variables are controlled;
- organized splay and random dispersion have indistinguishable consequences;
- the induced local plasticity cannot be connected to the proposed later routing change;
- partial cues do not preferentially reinstate a learned pattern of coupling and separation;
- PWD variables do not outperform simpler rate and timing descriptions; or
- selective disruption of the proposed phase topology leaves the claimed perceptual or behavioral effect unchanged.

Even positive results would first establish a coordination and learning mechanism. They would not by themselves prove that the mechanism constitutes qualia.

## Primary evidence

- [Bi and Poo (1998), timing-, strength-, and cell-type-dependent LTP/LTD](https://pubmed.ncbi.nlm.nih.gov/9852584/)
- [Wespatat, Tennigkeit, and Singer (2004), oscillatory phase and synaptic modification](https://pubmed.ncbi.nlm.nih.gov/15483125/)
- [Muller, Brette, and Gutkin (2011), STDP and phase locking in an oscillatory model](https://pubmed.ncbi.nlm.nih.gov/22110429/)
- [Bittner et al. (2017), behavioral-timescale synaptic plasticity](https://pubmed.ncbi.nlm.nih.gov/28883072/)
- [Lourenco et al. (2020), inhibitory plasticity and coordinated cortical activity](https://pubmed.ncbi.nlm.nih.gov/31968242/)
- [Zirkle and Rubchinsky (2020), STDP and intermittent synchrony in a model](https://pubmed.ncbi.nlm.nih.gov/32595464/)
- [Anisimova et al. (2022), timing-dependent plasticity across short and three-day intervals](https://pubmed.ncbi.nlm.nih.gov/35203089/)

## Immutable SAN sources

- [`a0142z`, June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/37da575ba33f85cef4239295be161066d8d39f4c/a0142z%20ctpr.txt)
- [`a0041z`, June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0041z.md)
- [`a0601z`, June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0601z.md)
- [`b0067ywhisper`, publicly Git-fixed October 29, 2022](https://github.com/v5ma/selfawarenetworks/blob/4ef2eebdc3dc01ba1ab2c64417be649186a741fd/b0067ywhisper.md)
- [`02san`, September 2024 dialogue](https://github.com/v5ma/selfawarenetworks/blob/df4d7f8d3270d56de167035c4987c3e072696c79/02san.md)
- [`raynote16`, January 2025 repository synthesis](https://github.com/v5ma/selfawarenetworks/blob/049381ed44008f3e32a259c4aaea6b3b389b60f9/raynote16.md)

## Related SAN concepts

- [[synaptic-plasticity]]
- [[coherence-dispersion-sculpting-hypothesis]]
- [[hebbian-learning]]
- [[long-term-potentiation]]
- [[long-term-depression]]
- [[ltp-ltd]]
- [[phase-wave-differentials]]
- [[tonic-phasic-phase-wave-differential]]
- [[computational-phase-synchronization]]
- [[coincidence-as-a-bit]]
- [[neural-tuning]]
- [[memory-consolidation]]
- [[oscillating-group-completion]]
- [[choice]]
- [[neural-rendering]]

**Image status:** No medically accepted figure is installed. A source-bounded replacement prompt must separate canonical pair-based STDP, broader state-dependent plasticity, population phase organization, and the SAN hypothesis rather than drawing one universal timing curve.
