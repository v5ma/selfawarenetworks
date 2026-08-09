# Neurotransmitter

A **neurotransmitter** is a chemical signal released by a neuron and detected by receptors on other cells or on the releasing cell itself. Transmitter identity constrains which receptors can be activated, but it does not determine one fixed meaning. The consequence depends on receptor subtype, target compartment, membrane voltage, ionic gradients, intracellular state, release history, clearance, and surrounding circuit.

![Neurotransmitter release is interpreted by a receiver rather than carrying one fixed meaning](../assets/generated/san/neurotransmitter/neurotransmitter-sender-constrained-receiver-interpreted-20260720-v1.png)

> **Medical boundary:** An action potential can alter calcium entry, release probability, release timing, and sometimes the balance of already available cotransmitters. It does not choose an arbitrary transmitter identity for each event. "Ionotropic," "metabotropic," "excitatory," and "inhibitory" are not interchangeable transmitter classes.

## Established mechanism

At a conventional chemical synapse:

1. an action potential invades a presynaptic terminal;
2. its waveform opens voltage-gated calcium channels;
3. local calcium triggers stochastic vesicle fusion;
4. released molecules diffuse and bind compatible receptors;
5. receptor activation changes conductance or intracellular signaling;
6. transporters, enzymes, diffusion, and glia limit the signal; and
7. recent activity changes later release and receptor responses.

Action-potential waveform can influence calcium-current magnitude and timing, but the relationship is synapse-specific rather than a universal conversion from spike duration to vesicle count. Direct recordings at the calyx of Held show that repolarization kinetics affect presynaptic calcium-current timing and synaptic delay ([Nakamura et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30872753/)). Other experiments show that channel gating can stabilize release against some voltage changes near the end of an action potential ([Yang and Wang, 2016](https://pubmed.ncbi.nlm.nih.gov/27911759/)).

## The receiver determines the consequence

The same transmitter can produce different effects in different receivers.

- **Receptor mechanism:** ionotropic receptors directly gate channels; metabotropic receptors act through signaling pathways and can change excitability, release, plasticity, or gene expression.
- **Ionic state:** a GABA_A receptor opens a chloride-permeable channel, but whether the response is hyperpolarizing, shunting, or depolarizing depends on the chloride reversal potential. KCC2-dependent chloride regulation is therefore part of the response, not an optional detail ([DeFazio et al., 2000](https://pubmed.ncbi.nlm.nih.gov/11050128/)). NMDA-receptor activation can downregulate KCC2 and shift GABA_A responses toward depolarization in experimental neurons ([Lee et al., 2011](https://pubmed.ncbi.nlm.nih.gov/21532577/)).
- **Location and state:** an axonal, somatic, spine, shaft, presynaptic, or extrasynaptic receptor can influence different cellular operations. Membrane voltage and prior activity alter receptor and channel responses.
- **Circuit sign:** excitation of an inhibitory interneuron can suppress a downstream population. A molecular response and its later circuit consequence need not share one sign.

It is therefore inaccurate to label every molecule of glutamate as a complete "excitation message" or every molecule of GABA as a complete "inhibition message." Those are useful defaults in many mature central circuits, not context-free definitions.

## Cotransmission and release routes

Some neurons can release more than one signaling molecule. The available cotransmitters are constrained by synthesis, transport, vesicle loading, terminal identity, and release machinery. Dopamine neurons, for example, can release GABA through a noncanonical VMAT2-dependent mechanism in striatal projections ([Tritsch et al., 2012](https://pubmed.ncbi.nlm.nih.gov/23034651/)). This demonstrates cotransmission; it does not imply that each spike freely selects any molecular vocabulary.

Transmission is also not always confined to one aligned synaptic cleft. Dopamine and other neuromodulators can act over broader spatial and temporal scales. Consequently, a complete description may need the number and distribution of active release sites, diffusion, transporter activity, receptor affinity, and distance from release to receptor.

## What can carry information

Measurable chemical dimensions can include event timing, release probability, release failure, uni- or multivesicular release, supported cotransmitter composition, concentration, release-site distribution, receptor occupancy, desensitization, clearance, spillover, and the receiver's voltage, gradients, receptors, and biochemical history.

No one variable is automatically "the neural code." A coding claim requires a specified sender, receiver, measured state, task, comparison model, and causal test.

## SAN interpretation: a receiver-relative chemical differential

SAN sources propose that chemical release is richer than a binary spike output. They connect action-potential waveform, calcium entry, release timing and amount, synapse-specific state, and oscillatory context to a [[phase-wave-differentials|phase-wave differential]]. The medically defensible form is:

> **SAN hypothesis:** A release event is a sender-constrained, multidimensional perturbation whose functional value is defined by the receiving synapse or cell. Timing, release amount, available cotransmitter composition, release-site geometry, and prior state may jointly predict the receiver's next state better than spike occurrence or firing rate alone.

This is not the claim that molecules carry semantic labels, that transmitter identity changes arbitrarily from spike to spike, or that vesicle count alone specifies a percept. It is a testable proposal that chemical transmission contributes typed, receiver-relative dimensions to the broader SAN/PWD event.

A minimal experimental bookkeeping model is:

\[
\mathbf{C}_{s\rightarrow r}(t)=
\big[
\Delta t,\; p_r,\; n_v,\; \mathbf{q},\; \mathbf{x},\; \tau_c,\; \mathbf{R}_r,\; V_r,\; \mathbf{g}_r,\; \mathbf{h}_{s,r}
\big].
\]

Here release probability, vesicle count, supported cotransmitter composition, release geometry, clearance, receptor state, voltage, ionic gradients, and sender-receiver history are measured rather than assumed. This vector is an experimental model, not a claim that neurons explicitly calculate vectors.

## Bounded tests

1. **Incremental prediction:** Compare spike-only and rate-only models with models adding waveform, calcium, release amount, receptor state, and gradients. Test held-out prediction of postsynaptic current and later firing.
2. **Receiver swap:** Deliver matched transmitter transients to cells or compartments with measured receptor and ionic states. A receiver-relative model should explain divergent consequences better than transmitter identity alone.
3. **Matched-output cotransmission:** Compare events with matched mean charge or firing-rate consequence but different supported cotransmitter composition. Test whether added chemical dimensions predict later plasticity or routing.
4. **Oscillatory context:** Hold mean release approximately constant while changing release timing relative to an ongoing local rhythm. Test whether the chemical-plus-phase model explains receiver state beyond phase or release magnitude alone.
5. **Falsifier:** If chemical state variables add no reproducible predictive or causal value after spike timing, firing rate, and postsynaptic voltage are controlled, the proposed SAN chemical differential should be narrowed or rejected.

## Source genealogy

- [07san.md](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/07san.md) connects cellular coincidence, action-potential or calcium modulation, and changed neurotransmitter release.
- [00changelog.md](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/00changelog.md) proposes action-potential-duration and calcium-channel contributions to release magnitude.
- [a0001z.md](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0001z.md) develops per-synapse release quantity and cotransmission as candidate dimensions inside NAPOT.
- [02san.md](https://github.com/v5ma/selfawarenetworks/blob/main/02san.md) defines PWD events partly through unexpected release quantities and intervals relative to a prior tonic state.

The joined SAN claim is the receiver-relative integration of these chemical variables with timing, oscillatory context, and later tuning. The component physiology has prior experimental foundations; the joined PWD interpretation remains proposed.

## Related pages

- [[synapse]]
- [[chemical-synapse]]
- [[synaptic-vesicle-release]]
- [[release-probability]]
- [[action-potential-duration]]
- [[calcium-dynamics]]
- [[gaba|GABA]]
- [[glutamate]]
- [[dopamine]]
- [[neural-code]]
- [[phase-wave-differentials]]
- [[neural-tuning]]
- [[napot-neural-array-phase-tomography|NAPOT]]

## Medical references

- DeFazio RA, Keros S, Quick MW, Hablitz JJ. Potassium-coupled chloride cotransport controls intracellular chloride in rat neocortical pyramidal neurons. *Journal of Neuroscience*. 2000. [PMID 11050128](https://pubmed.ncbi.nlm.nih.gov/11050128/)
- Lee HHC, Deeb TZ, Walker JA, Davies PA, Moss SJ. NMDA receptor activity downregulates KCC2 resulting in depolarizing GABA_A receptor-mediated currents. *Nature Neuroscience*. 2011. [PMID 21532577](https://pubmed.ncbi.nlm.nih.gov/21532577/)
- Tritsch NX, Ding JB, Sabatini BL. Dopaminergic neurons inhibit striatal output through non-canonical release of GABA. *Nature*. 2012. [PMID 23034651](https://pubmed.ncbi.nlm.nih.gov/23034651/)
- Nakamura Y, et al. Timing constraints of action potential evoked calcium current and transmitter release at a central nerve terminal. *Scientific Reports*. 2019. [PMID 30872753](https://pubmed.ncbi.nlm.nih.gov/30872753/)
- Yang YM, Wang LY. Neurotransmitter release can be stabilized by a mechanism that prevents voltage changes near the end of action potentials from affecting calcium currents. *Journal of Neuroscience*. 2016. [PMID 27911759](https://pubmed.ncbi.nlm.nih.gov/27911759/)
