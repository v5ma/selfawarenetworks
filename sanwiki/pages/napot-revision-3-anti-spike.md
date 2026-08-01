# NAPOT Revision 3: Below-Baseline and Inhibitory Information

> **Boundary note (2026-07-18):** Revision 3 makes inhibition and below-baseline activity first-class information questions, but anti-spike, negative soliton, slow cortical potential, silence, and dendritic plateau are not interchangeable physiological categories. Every use must identify the measured variable, recording modality, anatomical source, receiver, baseline, and causal consequence. See [[phase-language-firewall]], [[san-scale-ladder-and-claim-boundaries]], and [[comparison-evidence-is-not-biological-validation]].

NAPOT Revision 3 is a historical SAN proposal that asks whether a downward or below-reference event can carry consequential information rather than merely representing absence. That question is biologically reasonable. The original answer - a sub-5 Hz inhibitory soliton called an anti-spike that carries perceptual content - combines several distinct phenomena and remains unproved.

## Historical three-regime proposal

| Historical term | Bounded current reading | Not established |
|---|---|---|
| Anti-spike | A receiver-defined negative deviation, inhibitory event, omission, or below-reference state that may alter later processing | One universal biological signal class |
| Tonic canvas | The receiver's ongoing comparison state over a declared time window | A fixed alpha/beta carrier shared by every circuit |
| Phasic spike | A transient change relative to that state | A universal high-frequency content symbol |

Frequency bands can be useful measurement partitions, but their functions depend on task, region, cell type, reference, modality, and analysis. The same numerical band cannot be assigned one invariant semantic role across the brain.

The source-faithful correction is not to erase the third regime. It is to separate the **sign of a measured departure** from its **mechanism** and **information value**. A below-reference event can be consequential because a receiver expected something else, even when the event is not a negative action potential, inhibitory synaptic current, or slow cortical potential.

## What the slow-potential study showed

[Hardstone et al. (2022)](https://doi.org/10.7554/eLife.78108) used whole-brain MEG during bistable visual perception. Spatial patterns of raw activity in the slow cortical potential range below 5 Hz supported decoding of reported perceptual content, while alpha- and beta-band amplitudes were associated with perceptual stability and memory.

That result supports a bounded correspondence between different measured neural features and aspects of one perceptual task. It does **not** show that:

- the SCP signal was inhibitory;
- negative voltage alone encoded content;
- the source was specifically cortical layer 6 or thalamus;
- an SCP event was a propagating soliton;
- a stable decoder demonstrated a physically stable waveform;
- the decoded pattern was constitutive of conscious content rather than correlated with it.

## Established comparators that preserve the question

Several established mechanisms show why "below expectation" should not be reduced to "nothing happened":

- Human intracranial recordings found high-frequency responses to unexpectedly omitted sounds in posterior superior temporal gyrus and prefrontal cortex ([Golan et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37280730/)). The omission was informative relative to an expected sequence, although the measured response was positive high-frequency activity rather than a negative spike.
- In mouse cerebellar circuits, pinceau structures formed by basket-cell axons produced rapid ephaptic inhibition of Purkinje-cell firing near the axon initial segment ([Blot and Barbour, 2014](https://pubmed.ncbi.nlm.nih.gov/24413696/)). This is a real fast inhibitory mechanism in a specialized circuit, not evidence that an SCP is an inhibitory soliton.
- In mouse somatosensory corticothalamic circuits, low-frequency layer 6 corticothalamic activity was mainly suppressive, while higher-frequency activity shifted the balance toward thalamic enhancement ([Crandall, Cruikshank, and Connors, 2015](https://pubmed.ncbi.nlm.nih.gov/25913856/)). This supports a frequency- and circuit-dependent bidirectional control mechanism. It does not localize the whole-brain MEG result to layer 6 or thalamus.

Together, these results leave room for the SAN question: can an expected event's suppression, omission, or below-reference deviation act as a reproducible update that changes routing, perception, or action? They do not establish one anti-spike signal class.

## Measurements that must remain distinct

- **Synaptic inhibition:** receptor- and ion-gradient-dependent effects on a receiving cell.
- **Reduced firing:** fewer spikes in a declared population and interval.
- **Silence or omission:** absence relative to an expected event, which may still be represented elsewhere.
- **Slow cortical potential:** a low-frequency component of an extracellular field recording with distributed cellular and synaptic contributors.
- **Dendritic plateau:** a prolonged regenerative event in a particular dendritic compartment.
- **Aperiodic activity:** non-rhythmic spectral structure that should not be treated as an oscillation merely because it occupies a frequency range.
- **Soliton:** a physical wave whose shape is maintained during propagation through a balance of nonlinearity and dispersion; temporal decoding generalization is not sufficient evidence.

## Frequency and spatial reach

Lower-frequency field-potential components can have broader spatial reach than higher-frequency components, but reach depends on source geometry, synchrony, electrode reference, tissue conduction, and volume conduction. [Linden et al. (2011)](https://doi.org/10.1016/j.neuron.2011.11.020) modeled and measured this frequency dependence. A broader field-potential footprint does not confirm an anti-spike, perceptual-content soliton, or NAPOT tomography.

## Bounded SAN formulation

For a named receiver `r`, define an ongoing reference `B_r(t)` and measured state `x_r(t)` over a declared window:

```text
Delta x_r(t) = x_r(t) - B_r(t)
```

The sign of `Delta x_r` describes direction relative to that reference. It does not by itself specify inhibition or information. The source's rare-event intuition can be stated separately as receiver-relative surprisal:

```text
S_r(e) = -log2 p(e | M_r)
```

Here `M_r` is the declared receiver model or measured event distribution. A low-probability event has greater self-information under that model, but low frequency in hertz is not the same as low event probability, and high surprisal does not guarantee semantic or conscious content.

> **Recovered SAN Revision 3 operator:** **Reference:** learned receiver expectation and tonic state. **Event:** positive departure, maintained state, or below-reference/omitted event. **Consequence:** receiver-specific change in excitability, routing, population state, or behavior. **Update:** a revised expectation.

A negative `Delta x_r` becomes a candidate anti-spike only if it is reliably discriminable, changes the receiver or downstream behavior, survives artifact, arousal, movement, adaptation, and reference controls, and outperforms alternatives based on ordinary inhibition, omission response, firing-rate change, or network state. This preserves the proposed computational role of downward differences without claiming that every negative voltage, silence, or inhibitory event is the same signal.

The older layer 6 and thalamus wording can also be recovered without backdating later evidence. SAN proposed that deep corticothalamic routes might help maintain or alter the reference state. The Hardstone MEG study did not establish that source. A direct test would combine laminar cortical and thalamic recording with causal manipulation while separately tracking SCP, firing, inhibition, and behavior.

## Historical antimatter analogy

The source compares an anti-spike with Dirac's positron. Retain that comparison as an intuition about symmetry around a reference state, not as a physical derivation. No neural wave equation on this page predicts an anti-spike particle, and inhibition is not neural antimatter.

The analogy does preserve one useful structural question: whether positive and negative departures around a receiver's maintained reference have complementary effects. In SAN terms, excitation and suppression can both sculpt a distributed pattern, just as detected presence and detected omission can both revise a model. Their biological mechanisms need not be symmetric.

## Discriminating tests

1. Separate oscillatory peaks from aperiodic activity before assigning a band-specific role.
2. Identify the cellular and laminar sources of the measured slow potential.
3. Perturb inhibition while matching low-frequency field amplitude, and perturb field state while matching firing rate.
4. Test content decoding across stimuli, tasks, participants, and recording modalities.
5. Demonstrate propagation and waveform preservation before using the word soliton.
6. Predeclare outcomes that would support ordinary state dependence without supporting the anti-spike interpretation.

## Source genealogy

- The [September 3, 2022 first public Git stage](https://github.com/v5ma/selfawarenetworks/blob/a2e30bafea4c31307e62ee557102376b0a4b5da5/a0287zstar.md) connected Hardstone et al.'s preprint to Micah's earlier tonic/phasic framework and proposed inhibition as a detected departure below expected tonic synchrony.
- A [later September 3 stage](https://github.com/v5ma/selfawarenetworks/blob/c746fa0f5b46a27b6e950c443c0ec810d456b7e0/a0287zstar.md) explicitly named NAPOT Revision 3, the anti-spike, the antimatter analogy, rare-event information, and the stronger soliton inference.
- The [September 4, 2022 stage](https://github.com/v5ma/selfawarenetworks/blob/29369061baee78f8974e30a8e48f1bc95ae91fa2/a0287zstar.md) added the title "A negative soliton wave" and changed "inverse spike" to "negative spike." This is a historical strengthening of the claim, not additional physiological evidence.
- The [November 28, 2022 stage](https://github.com/v5ma/selfawarenetworks/blob/4e0cf1ee0975c01dc57182368497d3f0cd864030/a0287zstar.md) added Blot and Barbour's specialized cerebellar ephaptic-inhibition result as a comparator. That result supports fast inhibition in one circuit, not the identity of SCP, inhibition, and soliton.
- Hardstone et al.'s preprint preceded these SAN stages and became a peer-reviewed eLife article on September 20, 2022. The established finding belongs to Hardstone and colleagues; the anti-spike interpretation and three-regime NAPOT extension belong to Micah's September 2022 synthesis.

## Relations

- [[napot-overview|NAPOT overview]]
- [[napot-revision-genealogy|NAPOT revision genealogy]]
- [[phasic-tonic-relationship|Phasic-Tonic Relationship]]
- [[tonic-phasic-neural-oscillation|Tonic and Phasic Neural Oscillation]]
- [[phase-language-firewall|Phase Language Firewall]]
- [[concurrent-soliton-consciousness-channels|Concurrent Soliton Consciousness Channels]]
- [[phase-wave-differentials|Phase-Wave Differentials]]
