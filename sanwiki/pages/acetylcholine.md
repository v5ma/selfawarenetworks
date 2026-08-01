# Acetylcholine: Receptor-Specific Modulation of Brain State, Routing, and Memory

> **Image status:** The earlier infographic failed medical review and is quarantined outside the public website tree. A medically bounded replacement prompt exists, but image generation remains paused.

**Acetylcholine** (ACh) is both a neurotransmitter and a neuromodulator. It can change neuronal excitability, synaptic transmission, sensory processing, attention, arousal, sleep-state dynamics, and hippocampal network state. Its effect is not one global high-versus-low switch. The result depends on the cholinergic source, receptor subtype, target cell, cortical layer, pathway, brain region, concentration, timing, and behavioral state.

For [[self-aware-networks|Self-Aware Networks]] (SAN), the source-faithful question is whether these receptor- and circuit-specific effects help set the **receiver context** in which incoming activity is selected, amplified, suppressed, or routed. That is a bounded mechanistic hypothesis. It is not a claim that ACh contains a finished percept, controls every [[brain-rhythms|brain rhythm]], or independently implements [[napot-overview|NAPOT]].

## Source recovery

The SAN record contains several chronologically distinct acetylcholine questions. They should not be merged into one early, settled mechanism.

### June 2022: transmitter specificity and cellular integration

Two imperfectly transcribed audio notes were first publicly Git-fixed on June 8, 2022:

- In [[gh-b0047y|b0047y]], Micah asked how transmitter identity, cell type, circuit location, and observed oscillatory activity might be related. The recoverable operation is that **chemical identity and anatomical placement jointly constrain circuit dynamics**. The source does not establish a fixed one-transmitter-to-one-frequency dictionary.
- In [[gh-b0069y|b0069y]], Micah contrasted chemically distinct synaptic inputs with the way their postsynaptic effects can converge on one cell's conductance state and firing threshold. The recoverable operation is **input specificity followed by receiver-level integration**. The transcript's literal phrase that acetylcholine "never" mixes with dopamine is too strong: cotransmission, extrasynaptic signaling, and convergence of multiple receptor pathways are established.

The original recordings' dates are not established by the Git upload date, so only their public fixation is asserted here.

### October 2024: predictive-balance proposal

[[gh-04san|04san]], first committed October 5, 2024, proposed that acetylcholine and norepinephrine could alter the balance between feedback predictions and feedforward sensory signals by changing oscillatory power and coherence. This is a later SAN hypothesis, not a June 2022 claim. It has bounded experimental comparators: cholinergic agonists can affect intracortical and thalamocortical transmission differently in particular preparations, but this does not establish one universal feedback/feedforward rule.

### May 2025: wake, sleep, and ripple synthesis

[[gh-06san|06san]], first committed May 9, 2025, connected ACh to wake-related desynchronization, slow-wave activity, and [[sharp-wave-ripples|sharp-wave ripples]] (SWRs). The medically accurate version is state- and circuit-specific: ACh is elevated during active waking and also during REM sleep, is generally lower during non-REM slow-wave sleep, and can fluctuate locally on shorter timescales. Reduced hippocampal ACh can be permissive for SWRs, but "ACh withdrawal" is not an automatic replay, LTP, downscaling, or consolidation command.

## Established receptor physiology

Acetylcholine acts through two broad receptor families:

1. **Nicotinic acetylcholine receptors** are [[ionotropic-signaling|ionotropic]] ligand-gated cation channels. Their subunit composition strongly affects kinetics, localization, desensitization, and ion permeability.
2. **Muscarinic acetylcholine receptors** are [[metabotropic-signaling|metabotropic]] G-protein-coupled receptors. Different subtypes engage different intracellular pathways and can increase or decrease excitability and transmitter release.

The earlier draft described nicotinic receptors as uniformly low in calcium permeability. That is inaccurate. Calcium permeability differs by subtype and preparation. Alpha7-containing nicotinic receptors are relatively calcium permeable, while non-alpha7 receptors may admit much less calcium. In rat CA1 interneurons, alpha7 responses were less calcium permeable than NMDA-receptor responses; in another preparation, native alpha7 permeability was not significantly different from NMDA receptors. The valid conclusion is **subtype- and preparation-specific calcium entry**, not a universal nAChR-versus-NMDA hierarchy.

Cellular effects are equally conditional. In rat primary somatosensory barrel-cortex layer 6A slices, low ACh hyperpolarized corticocortical pyramidal cells through M4 receptors while depolarizing corticothalamic pyramidal cells through M1 receptors. Nicotinic effects also differed between those cell classes. In prefrontal cortex, nicotinic receptor expression and net effects vary across layers and between pyramidal neurons and interneurons. ACh therefore cannot be assigned one excitatory, inhibitory, synchronizing, or desynchronizing action at every target.

## Sources and routes

The basal forebrain supplies major cholinergic input to neocortex. Medial septal and diagonal-band cholinergic populations strongly influence hippocampal state. Brainstem cholinergic populations participate in other arousal, thalamic, and motor-related circuits. These are related systems, not one uniform broadcaster.

Cholinergic signaling is also not always chemically isolated. Mouse septohippocampal cholinergic terminals can co-transmit ACh and GABA through different vesicles and calcium-channel mechanisms. In that preparation, the GABAergic component itself suppressed SWRs. This result preserves the 2022 source's useful distinction between receptor-specific inputs and postsynaptic integration while rejecting a literal one-transmitter-per-terminal rule.

## Sensory processing and route weighting

In awake mice, optogenetic activation of basal-forebrain cholinergic neurons or their axons in V1 improved visual discrimination, enhanced visual responses, and desynchronized neuronal spiking; inactivation produced the opposite pattern. Other work shows fast, cell-type-specific recruitment of cortical interneurons and marked layer specificity.

There is also bounded support for differential route weighting. In mouse auditory-cortex slices, a cholinergic agonist suppressed intracortical synaptic transmission more strongly than thalamocortical transmission. In another in-vitro thalamocortical preparation, higher cholinergic tone increased the influence of afferent input relative to local recurrent activity.

These studies support **circuit-specific changes in gain and pathway influence**. They do not prove that high ACh universally means feedforward sensation, low ACh universally means prediction, or one frequency band carries each direction of processing.

## Wake, REM, non-REM, and sharp-wave ripples

The high-ACh/low-ACh diagram previously shown on this page collapsed distinct states:

- ACh release is higher during waking than slow-wave sleep.
- ACh also rises during REM sleep, so REM cannot be placed in a generic low-ACh "sleep/replay" state.
- Hippocampal ACh can reach local minima around SWRs.
- SWRs occur during non-REM sleep and quiet or paused waking, not only during sleep.
- Optogenetic activation of medial-septal cholinergic neurons can suppress hippocampal SWRs and favor theta-related activity.
- The behavioral effect depends on timing. Suppressing SWRs during a working-memory delay or at a reward location impaired performance in mouse tasks, whereas the same intervention in another task phase did not have the same effect.

Low ACh is therefore better described as one **permissive condition** within particular hippocampal states. SWR occurrence, replay, plasticity, and memory outcome depend on network state, inhibition, excitation, behavior, and timing in addition to cholinergic tone.

## Source-faithful SAN interpretation

The strongest medically interpretable SAN operation is:

> cholinergic source and timing -> receptor- and cell-specific state change -> altered gain, inhibition, recurrence, or pathway influence -> changed receiver response to later input -> changed perception, memory, or action probability

This operation fits SAN's receive-transform-project architecture without treating acetylcholine as a semantic symbol or a universal brain-state controller.

### Established research

ACh can rapidly alter sensory processing, cell excitability, synaptic transmission, local population dynamics, sleep-state physiology, and hippocampal SWR probability. These effects vary with receptor, cell, layer, region, route, and timing.

### Supported SAN interpretation

A cholinergic state can be modeled as one part of the receiving population's current context. It can change how the same incoming phasic event affects that receiver and which recurrent or output route has greater effective influence.

### Open SAN hypothesis

The 2024 SAN proposal is that receptor-specific cholinergic changes contribute to receiver-relative adjustment of oscillatory power, phase relations, and feedforward-versus-recurrent influence during perception and action. The 2025 extension is that transitions among encoding-, REM-, and SWR-permissive states contribute to how distributed representations are updated or re-expressed.

Neither proposition establishes a single global ACh level, a universal cortical algorithm, a direct ACh-to-consciousness mechanism, or a complete NAPOT rendering mechanism.

## Discriminating experiment

In a declared sensory or hippocampal circuit, combine:

1. a calibrated ACh sensor;
2. receptor-subtype-selective blockade or activation;
3. identified source and receiver cell classes;
4. laminar or multisite spiking and field-potential recording;
5. behavioral-state, movement, pupil, respiration, and sleep-stage controls;
6. a task with separable sensory, delay, choice, and feedback epochs.

Compare held-out models using stimulus and firing rate alone; global ACh level; receptor- and cell-specific ACh state; recurrent population state; and the complete SAN receiver-relative model including timing and route-specific oscillatory variables. Then perturb ACh at matched moments.

The stronger SAN account gains support only if the receiver-relative model predicts and causally controls later routing, behavior, or SWR probability better than simpler state, rate, and recurrent-network models. It is weakened if receptor-specific timing and receiver state add no predictive or causal value.

## Claim boundaries

This page does not claim that:

- one neurotransmitter determines one EEG band;
- ACh is uniformly excitatory, inhibitory, synchronizing, or desynchronizing;
- alpha is generically a "slow wave";
- all nicotinic receptors have low calcium permeability;
- waking is high-ACh while all sleep is low-ACh;
- low ACh directly causes replay, LTP, synaptic downscaling, or consolidation;
- cholinergic terminals release only ACh;
- neurofeedback directly trains ACh without an ACh measurement;
- ACh independently selects which neural arrays render conscious content;
- the cited studies prove NAPOT, PWD, SAN, or consciousness.

## Related concepts

- [[neuromodulation]] - chemical and other state-dependent changes in circuit responsiveness.
- [[metabotropic-signaling]] - the signaling class used by muscarinic ACh receptors.
- [[ionotropic-signaling]] - the signaling class used by nicotinic ACh receptors.
- [[attention]] - a behavioral function influenced by cholinergic systems in cell- and circuit-specific ways.
- [[brain-rhythms]] - population dynamics that can change with cholinergic state without forming a one-transmitter/one-band code.
- [[hippocampal-entorhinal-circuit]] - a principal circuit in which cholinergic state, theta, and SWRs interact.
- [[septal-area-cortex]] - distinguishes septal nuclei and their hippocampal routes from neighboring cortical structures.
- [[sharp-wave-ripples]] - hippocampal events whose probability is sensitive to cholinergic timing and network state.
- [[predictive-coding]] - a comparator for the later SAN feedforward/feedback weighting hypothesis.
- [[napot-overview]] - the wider SAN rendering proposal to which cholinergic receiver-state modulation may contribute.

## Primary scientific sources

- Pinto et al. 2013, [Fast modulation of visual perception by basal forebrain cholinergic neurons](https://pubmed.ncbi.nlm.nih.gov/24162654/).
- Hsieh, Cruikshank, and Metherate 2000, [Differential modulation of auditory thalamocortical and intracortical synaptic transmission by cholinergic agonist](https://pubmed.ncbi.nlm.nih.gov/11032989/).
- Wester and Contreras 2013, [Differential modulation of spontaneous and evoked thalamocortical network activity by acetylcholine level in vitro](https://pubmed.ncbi.nlm.nih.gov/24198382/).
- Poorthuis et al. 2013, [Layer-specific modulation of the prefrontal cortex by nicotinic acetylcholine receptors](https://pubmed.ncbi.nlm.nih.gov/22291029/).
- Yang et al. 2020, [Muscarinic and Nicotinic Modulation of Neocortical Layer 6A Synaptic Microcircuits Is Cooperative and Cell-Specific](https://pubmed.ncbi.nlm.nih.gov/32026946/).
- Lyford, Lee, and Rosenberg 2002, [Calcium permeability of alpha7 nicotinic receptors](https://pubmed.ncbi.nlm.nih.gov/11825589/).
- Fayuk and Yakel 2005, [Calcium permeability of nicotinic acetylcholine receptors in rat hippocampal CA1 interneurons](https://pubmed.ncbi.nlm.nih.gov/15932886/).
- Marrosu et al. 1995, [Cortical and hippocampal acetylcholine release during the sleep-wake cycle](https://pubmed.ncbi.nlm.nih.gov/7743225/).
- Vandecasteele et al. 2014, [Septal cholinergic activation suppresses sharp-wave ripples and enhances theta oscillations](https://pmc.ncbi.nlm.nih.gov/articles/PMC4169920/).
- Takacs et al. 2018, [Co-transmission of acetylcholine and GABA regulates hippocampal states](https://pubmed.ncbi.nlm.nih.gov/30030438/).
- Zhang et al. 2021, [Cholinergic suppression of hippocampal sharp-wave ripples impairs working memory](https://pmc.ncbi.nlm.nih.gov/articles/PMC8054002/).
- Jarzebowski et al. 2021, [Impaired spatial learning and suppression of sharp-wave ripples by cholinergic activation at the goal location](https://pmc.ncbi.nlm.nih.gov/articles/PMC8064750/).

## SAN source provenance

- June 8, 2022 public fixation: [b0047y raw transcript](https://github.com/v5ma/selfawarenetworks/blob/9324fe74e40cf4134395edfc4cc3320fa99e18be/b0047y%20ctpr.txt) - transmitter, location, and rhythm question.
- June 8, 2022 public fixation: [b0069y raw transcript](https://github.com/v5ma/selfawarenetworks/blob/9324fe74e40cf4134395edfc4cc3320fa99e18be/b0069y%20ctpr.txt) - chemical specificity and receiver-integration question.
- October 5, 2024: [04san.md at its initial commit](https://github.com/v5ma/selfawarenetworks/blob/fe415a93a7e5bfecf416c137c6f5196238d60a1e/04san.md) - later feedback/feedforward and oscillatory-balance hypothesis.
- May 9, 2025: [06san.md at its initial commit](https://github.com/v5ma/selfawarenetworks/blob/72952cc14e77988d60d3b09b76fbad55261ad0d7/06san.md) - later traveling-wave, sleep-state, and SWR synthesis.

## Review status

Source-faithful scientific repair completed July 30, 2026. The prior PNG and SVG are quarantined outside the public website tree because their global high/low state switch, nicotinic-only anatomy, calcium statement, sleep-state split, and replay-gate causality do not pass medical review. No replacement image was generated while art remains paused.
