# Plasticity Stability Problem

**Plasticity Stability Problem** (also "stability-plasticity dilemma") is the long-standing question in computational [[neuroscience]] and machine learning of how a learning system can remain *plastic* enough to acquire new patterns while staying *stable* enough not to overwrite the patterns it has already learned. Within [[self-aware-networks|Self-Aware Networks]] this problem is the natural setting for [[gh-resnote04|Micah]]'s [[phase-wave-differential|phase-wave-differential]] and [[long-term-potentiation|LTP]]-anchored consolidation framing: phasic perturbations write transient differentials that the [[brain-as-memory-prediction-machine|memory-prediction]] machinery selectively consolidates, leaving most of the [[tonic-oscillation|tonic oscillation]] structure intact.

## Origin

The packet for this entry is empty (`Evidence count: 0`); no primary SAN-source quote on the plasticity-stability problem has been harvested into the corpus yet. This page therefore exists as a *referent stub* — neighbouring pages on [[long-term-potentiation|LTP]], [[memory-consolidation|memory consolidation]], [[hebbian-learning|Hebbian learning]], and the [[brain-as-memory-prediction-machine|brain-as-memory-prediction machine]] all reference the plasticity-stability tension as the comparison anchor, but no canonical paragraph from [[gh-resnote04|Micah]]'s manuscripts has been pulled in for this slug. Mainstream chronological priority for the construct is uncontested: Grossberg's [[adaptive-resonance-theory|adaptive resonance theory]] (Grossberg 1976 onward) coined the "stability-plasticity dilemma" framing; the catastrophic-forgetting literature in connectionist neural networks (McCloskey & Cohen 1989, Ratcliff 1990) gave the problem its modern empirical form; recent machine-learning work on continual learning, elastic weight consolidation (Kirkpatrick et al. 2017), and progressive networks extended the construct.

## Position

Within [[gh-a0206z|Self]]-Aware Networks the plasticity-stability problem is the *operational setting* in which [[long-term-potentiation|LTP]]-style [[memory-consolidation|memory consolidation]] makes sense: most neurons in an oscillating ensemble keep their [[tonic-oscillation|tonic oscillation]] relationships stable, while a sparse subset of [[phasic-firing|phasic-firing]] events trigger [[phase-wave-differential|phase-wave-differential]] perturbations that selectively rewire the [[chemical-synapse|synaptic]] structure. The neighbouring [[phase-wave-differential|phase-wave-differential]] page documents the rewiring claim at `02san--md` line 25 (on github): "The phase wave differential causes synaptic frequencies to change, and this changes how the brain is connected." The selectivity is what addresses the problem: only *dominant* differentials become consolidated ([[dpwdr|DPWDR]]), so the bulk of the wiring is preserved. Because the packet has no evidence text, no inline citation to a specific [[gh-resnote04|Micah]] passage on the plasticity-stability problem itself is made here; the placement above is structural cross-reference. When evidence is later harvested for this slug — most plausibly from [[gh-resnote04|Micah]]'s notes on [[long-term-potentiation|LTP]], neurogenesis, [[memory-consolidation|memory consolidation]], or sleep-replay — the Position section should be rewritten to cite [[gh-resnote04|Micah]] directly.

## Chronology

The mainstream chronology runs through Grossberg (1976, ART), McCloskey & Cohen (1989, catastrophic forgetting in connectionist networks), Kirkpatrick et al. (2017, elastic weight consolidation), and the broader continual-learning literature 2017 onward. SAN's [[phase-wave-differential|phase-wave-differential]] framing predates the 2017 EWC paper (the [[phase-wave-differential|phase-wave-differential]] slug has 2010 evidence) but no harvested SAN-side passage *names* the plasticity-stability problem as the target framework. Future Lane G acquisition targeting [[gh-resnote04|Micah]]'s notes on connectionist forgetting, continual learning, [[long-term-potentiation|LTP]] / [[long-term-depression|LTD]] balance, or [[hebbian-learning|Hebbian learning]] should populate this section.

## Post-SAN

Mainstream literature has well-developed approaches: ART (Grossberg), EWC (Kirkpatrick et al. 2017), gradient [[episodic-memory|episodic memory]] (Lopez-Paz & Ranzato 2017), progressive networks (Rusu et al. 2016), generative replay (Shin et al. 2017), and many others. SAN's distinctive contribution — when documented — would be to substitute *phase-wave-differential dominance* for the parameter-importance / regularization machinery used in mainstream continual-learning work. The testable prediction would be that distinguishing "consolidated" from "transient" weight updates by the [[dpwdr|DPWDR]] threshold of the firing pattern that produced them should out-perform synapse-level importance regularization on a continual-learning benchmark; if this prediction holds, the SAN reading would offer a biologically-grounded continual-learning rule. Without harvested evidence, this is a future-work suggestion rather than a documented [[gh-resnote04|Micah]] claim.

## Related concepts

- [[long-term-potentiation]] — [[ltp]], the consolidation mechanism that sits at the stability end.
- [[long-term-depression]] — LTD, the depotentiation mechanism that sits at the plasticity end.
- [[memory-consolidation]] — the consolidation pipeline plasticity-stability tension is most about.
- [[hebbian-learning]] — [[hebbian-learning|Hebbian learning]], the classic plasticity rule.
- [[phase-wave-differential]] — the SAN construct that selectively triggers consolidation.
- [[dpwdr]] — the DPWDR threshold that selects which patterns consolidate.
- [[phasic-firing]] — the firing mode that contributes to consolidation events.
- [[tonic-oscillation]] — the baseline rhythm whose stability the problem cares about.
- [[brain-as-memory-prediction-machine]] — the predictive-machine substrate where the consolidation pipeline runs.
- [[memory-persistence]] — the persistence-side framing of the same tension.
- [[engram]] — the consolidated memory unit the consolidation process produces.
- [[synapse]] — the per-junction substrate where plasticity is measured.
- [[neural-array]] — the array-level structure that consolidation modifies.
- Neurogenesis — adult neurogenesis, an additional source of plasticity in [[hippocampus|hippocampus]].
- [[hippocampus]] — the structure where [[memory-consolidation|memory consolidation]] is most studied.
- [[chemical-synapse]] — the molecular substrate of plasticity.
- [[criterial-causation]] — the [[criterial-causation|criterial-causation]] reading of which updates count.
- [[predictive-coding]] — the predictive-coding framework adjacent to the consolidation pipeline.

## Source Provenance

- Generated: 2026-04-24T18:46:12
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/plasticity-stability-problem.json`
- Evidence count: 0
- Source ids: 

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add wiki links. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
