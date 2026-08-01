# Behavioral-Timescale Synaptic Plasticity (BTSP)

> **Terminology correction:** In the experimental neuroscience literature, **BTSP** means **behavioral-timescale synaptic plasticity**, not "bistable synaptic plasticity." The legacy route and source terminology are retained below for provenance, but they are not the medical definition.

![Medically corrected behavioral-timescale synaptic plasticity plate showing a bounded rodent hippocampal CA1 pathway, seconds-long eligibility and plateau signals, weight-dependent bidirectional plasticity, and distributed place-field updating](/v5ma.github.io/wiki/assets/generated/san/bistable-synaptic-plasticity/behavioral-timescale-synaptic-plasticity-ca1-medically-corrected-20260715-v2.png)

This corrected plate presents the best-established bounded example: a dendritic calcium plateau in a rodent hippocampal CA1 pyramidal neuron can rapidly modify synaptic inputs that were active within a seconds-long window around the plateau. The change is not a literal binary flip. Weak eligible inputs can potentiate, strong eligible inputs can depress, and inputs with little eligibility-signal overlap may change little.

**Behavioral-timescale synaptic plasticity** differs from classical millisecond-scale Hebbian or spike-timing-dependent rules. Synaptic activity is modeled as leaving an input-specific eligibility trace, while the dendritic plateau supplies a broader instructive signal. Their overlap can reshape a CA1 place representation in one or a few induction trials, including forming a new place field or moving an existing field.

## Medical evidence boundary

- **Established name:** BTSP expands to behavioral-timescale synaptic plasticity. "Bistable synaptic plasticity" is not the accepted expansion.
- **Bounded anatomy:** The foundational work concerns rodent hippocampal CA1 pyramidal neurons. CA3 Schaffer-collateral input and entorhinal input can interact with active dendritic mechanisms that generate plateau potentials; this is not a universal diagram of every cortical neuron.
- **Functional timing rule:** Inputs can be modified when active seconds before or after a plateau. The eligibility-trace and instructive-signal terms describe a functional rule; their complete molecular identities remain under study.
- **Bidirectional updating:** In CA1 place cells with existing fields, plateau-linked BTSP can potentiate weaker inputs and depress stronger inputs. Initial synaptic weight and timing both matter.
- **Representation level:** Rapid place-field formation or translocation reflects changes distributed across many inputs. It does not establish that one synapse stores one memory or that a single induction creates a permanent conscious engram.
- **SAN interpretation:** SAN/NAPOT may treat this seconds-scale update rule as a candidate substrate for memory-prediction cycles. That interpretation still requires direct phase-resolved and array-level tests and is not proof of oscillatory tomography.

Primary evidence:

- [Bittner et al. (2015), conjunctive entorhinal and CA3 input in CA1 plateau potentials and place-field formation](https://doi.org/10.1038/nn.4062)
- [Bittner et al. (2017), behavioral-time-scale synaptic plasticity underlying CA1 place fields](https://doi.org/10.1126/science.aan3846)
- [Milstein et al. (2021), weight-dependent bidirectional BTSP and rapid place-field translocation](https://doi.org/10.7554/eLife.73046)
- [Jain et al. (2024), delayed dendritic CaMKII and IP3-dependent calcium signaling in a bounded slice BTSP protocol](https://doi.org/10.1038/s41586-024-08021-8)

## Historical SAN terminology and interpretation

The source packet repeatedly uses the heading "Bistable Synaptic Plasticity (BTSP) and Memory Formation" and describes receptors and dendrites as nonlinear pattern detectors ([[gh-gpt2023x|GPT2023X]]--md, lines 21079 and 21127; SAOv9--md, lines 248 and 305). That historical wording explains the legacy page slug, but it conflates two different ideas: the experimentally named behavioral-timescale rule and a stronger binary-switch interpretation.

The medically bounded SAN reading is narrower. Plateau-linked plasticity offers a plausible fast update mechanism for [criterial causation](criterial-causation.md), [predictive coding](predictive-coding.md), and [memory-prediction cycles](memory-prediction-cycle.md). It does not by itself prove a low/high bistable synaptic bit, universal NMDA coincidence gating, a one-shot durable engram, or a direct mechanism for [NAPOT](neural-array-projection-oscillation-tomography.md). Those remain separate hypotheses.

## Related concepts

- [Long-term potentiation](long-term-potentiation.md) and [long-term depression](long-term-depression.md) - BTSP can produce potentiation and depression, depending on timing and initial weight.
- [Hebbian learning](hebbian-learning.md) - BTSP differs from classical pairwise coincidence rules by operating over behavioral timescales.
- [Dendritic spikes](dendritic-spike.md) and [dendritic spines](dendritic-spines.md) - plateau potentials and input-specific synaptic changes are expressed in dendritic compartments.
- [Hippocampus](hippocampus.md) and [entorhinal cortex](entorhinal-cortex.md) - the principal bounded circuit used in the foundational CA1 experiments.
- [Engrams](engrams.md) and [memory consolidation](memory-consolidation.md) - downstream memory concepts that must not be reduced to one synapse or one induction event.
- [Predictive coding](predictive-coding.md) and [criterial causation](criterial-causation.md) - SAN interpretations that may use BTSP as a candidate rapid update rule.

## Source Provenance

- Generated: 2026-04-24T18:17:02
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/bistable-synaptic-plasticity.json`
- Evidence count: 8
- Source ids: [[gh-gpt2023x|GPT2023X]]--md, SAOv9--md
  - `GPT2023X--md` line 21079 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 21127 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 22644 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 22700 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `GPT2023X--md` line 24387 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md
  - `SAOv9--md` line 248 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/SAOv9.md
