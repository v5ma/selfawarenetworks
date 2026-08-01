# STDP

**STDP** — *Spike-Timing-Dependent Plasticity* — is the [[hebbian-plasticity|Hebbian]] family of synaptic learning rules in which the *order and millisecond-scale interval* between pre- and post-synaptic [[action-potential|action potentials]] determines whether the synapse is strengthened ([[long-term-potentiation|LTP]]) or weakened ([[long-term-depression|LTD]]). Within [[self-aware-networks]] STDP is treated as the synaptic-level write mechanism that lets [[dominant-phase-wave-differential|dominant phase-wave differentials]] re-tune themselves: every [[prediction]] error in [[ndca|NDCA]] is, at the cellular level, a candidate STDP event.

## Roots

STDP enters the SAN corpus through the lineage of [[hebbian-learning|Hebbian]] / Markram-style synaptic models, which [[gh-resnote04|Micah]]'s notes explicitly cite: "STDP \[Markram et al\] for additional details" (`a0366z--md`, line 11, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0366z.md)). [[gh-resnote04|Micah]]'s models even at lower simulation fidelity "still implement STDP (spike timing dependent plasticity) as the basis of synaptic function. STDP is a form of [[hebbian-learning|Hebbian learning]] that has been empirically verified for well over a decade" (`a0574z--md`, line 41, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0574z.md)). The b0232y dialogue restates the canonical mainstream [[gh-b0049y|summary]] inside the SAN context: "spike timing dependent plasticity (STDP), in which timing differences between pre- and postsynaptic spikes, on the order of tens of milliseconds, significantly impact the sign" of the synaptic change (`b0232y--md`, line 284, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/b0232y.md)).

## Position

In [[self-aware-networks]] proper, STDP is the bridge between the millisecond-scale [[action-potential|spike]] world and the population-scale [[brain-rhythms|rhythm]] world. Section 7 of the manuscript states the bridge directly: "Research highlights that synaptic plasticity — particularly STDP — directly influences phase synchronization between neurons. This synchronization shapes [[functional-connectivity|functional connectivity]] by adjusting the timing" between cells (`02san--md`, line 381, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/02san.md)). In the [[ndca|NDCA]] reading, STDP is the *write head* of the predictive-coding loop: "repeated phase misalignments ([[prediction]] errors) lead to synaptic re-tuning through spike-timing dependent plasticity (STDP)" (`04san--md`, line 195, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/04san.md)) — and these adjustments are what allow the network "to iteratively refine its internal models" (`04san--md`, line 255). The [[gh-qgtcdarreduct2|QGTCDArReduct2]] essay generalises the same principle to the wave-physics frame: "synaptic plasticity (e.g., via [[nmda-receptor|NMDA receptor]] activation, STDP, etc.) modifies the connectivity so that future wave differentials are handled more efficiently (i.e., 'predicted')" (`QGTCDArReduct2--md`, line 3015, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/QGTCDArReduct2.md)). On the analog-computation side, rexnote03 ties STDP directly to the [[phase-wave-differentials|phase-wave-differential]] formalism: "Spike-Timing-Dependent Plasticity (STDP) and neural models like Hodgkin-Huxley and Morris-Lecar… demonstrate how discrete synaptic inputs lead to phase shifts" (`rexnote03--md`, line 449, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/rexnote03.md)).

## Chronology

STDP is a mainstream-imported primitive — the SAN corpus does not claim chronological priority for STDP itself; the cited Markram lineage predates SAN. What the corpus *does* claim priority for is the *use* of STDP as the substrate of [[dominant-phase-wave-differential|phase-wave-differential]] correction: by the period of `04san` and `02san`, [[micah-blumberg|Micah]] is treating STDP as the cellular implementation of [[free-energy-principle|free-energy-principle]]-style [[prediction]]-error correction (`04san--md`, line 255), and rexnote03 frames STDP as "validation for [the] conjecture about the brain's analog computation using [[phase-wave-differentials|phase wave differentials]]" (`rexnote03--md`, line 459). The synthesis pre-dates much of the popular cross-pollination between STDP and predictive-coding accounts in the broader literature.

## Post-SAN

Mainstream STDP literature traces to Markram, Bi & Poo, and Song et al. — empirical demonstrations that pre-before-post timing on the order of tens of milliseconds yields [[long-term-potentiation|LTP]], reversed timing yields [[long-term-depression|LTD]]. The SAN extension makes two specific predictions beyond the consensus. First, it ties STDP to oscillatory phase: "STDP and Oscillatory Adjustments — changes in spike timing caused by synaptic inputs can shift the timing of [[neural-oscillations|neural oscillations]]" (`rexnote03--md`, line 471) — predicting measurable [[gamma-oscillations|gamma]] phase shifts following STDP induction. Second, it embeds STDP inside a predictive-coding loop, with [[inhibitory-interneurons|inhibitory interneurons]] modulating the timing window itself: "do certain interneurons adjust the timing windows for STDP?" (`resnote02--md`, line 37, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/resnote02.md)). The [[gh-gpt2023x|GPT2023X]] notes go further, suggesting STDP is the natural substrate for biological gradient-descent: "this mechanism in biological neurons may facilitate a natural form of gradient descent learning through STDP and back propagation reinforcement learning through the action of neuromodulators" (`GPT2023X--md`, line 34311, [on github](https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/GPT2023X.md)) — a position adjacent to but more committed than the mainstream "STDP-as-approximation-of-backprop" literature.

## Related concepts

- [[hebbian-learning]] — the parent rule family STDP refines with timing.
- [[hebbian-plasticity]] — the broader plasticity-class STDP belongs to.
- [[long-term-potentiation]] — the [[ltp]] outcome of pre-before-post STDP.
- [[long-term-depression]] — the LTD outcome of post-before-pre STDP.
- [[ltp]] / [[ltd]] — the abbreviated SAN slugs for the same outcomes.
- [[dominant-phase-wave-differential]] — the SAN read of what STDP is *correcting*.
- [[phase-wave-differentials]] — broader class of differentials shaped by STDP write events.
- [[ndca]] — the [[consciousness]] architecture in which STDP is the write head.
- [[free-energy-principle]] — the parent [[prediction]]-error frame STDP implements at the synapse.
- [[functional-connectivity]] — the macroscopic coupling structure STDP shapes.
- [[gamma-oscillations]] — the band whose phase is most directly shifted by STDP write events.
- [[coincidence-detection]] — the per-neuron operation that supplies STDP its timing variable.
- [[inhibitory-interneurons]] — the modulators that gate STDP's timing window.

## Source Provenance

- Generated: 2026-04-24T18:12:00
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/stdp.json`
- Evidence count: 45
- Source ids: [[gh-02san|02san]]--md, [[gh-04san|04san]]--md, [[gh-gpt2023x|GPT2023X]]--md, NotebookML_6_Collection--md, [[gh-qgtcdarreduct2|QGTCDArReduct2]]--md, [[gh-a0366z|a0366z]]--md, [[gh-a0574z|a0574z]]--md, b0232y--md, raynote14--md, resnote02--md, rexnote02--md, rexnote03--md, rexnote12--md, [[gh-veca|vecA]]--md, vecB--md, [[gh-vecc|vecC]]--md
  - `02san--md` line 379 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/02san.md
  - `02san--md` line 381 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/02san.md
  - `02san--md` line 395 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/02san.md
  - `02san--md` line 403 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/02san.md
  - `02san--md` line 423 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/02san.md
  - `04san--md` line 195 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/04san.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
