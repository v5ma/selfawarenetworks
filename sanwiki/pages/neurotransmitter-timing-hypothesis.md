# Neurotransmitter Timing Hypothesis

> **Medical-accuracy correction (2026-07-19):** Timing and chemical identity are not mutually exclusive alternatives. Presynaptic machinery constrains what is released; receptor identity and state constrain the response; timing and amount alter that response in context.

The **Neurotransmitter Timing Hypothesis** is a bounded SAN research question: under
what conditions does relative release timing add discriminating information beyond
transmitter identity, receptor composition, release probability, and membrane state?
It requires a specified synapse class, competing models, a downstream receiver, and a
perturbation that preserves chemistry while changing timing or preserves timing while
changing receptor-mediated effect.

## Historical SAN question

**Neurotransmitter Timing Hypothesis** is the [[self-aware-networks]] question of whether the *timing* of neurotransmitter release — rather than the *type* of neurotransmitter or the *identity* of the receiving receptor — is the primary carrier of signal meaning at the [[chemical-synapse]]. As a foil to receptor-specificity readings of synaptic coding, it sits in the SAN canon alongside [[neural-timing-encoding]], [[multi-vesicle-release-spatial-encoding]], and the broader [[coincidence-detection]] account of how pattern-distinction reaches downstream cells.

## Origin

The hypothesis is surfaced in the SAN corpus as the explicit "timing vs. type" alternative on the live [[olfactory-neural-pathway]] page, where it appears as the related-concepts pointer "neurotransmitter-timing-hypothesis — whether timing vs. type determines signal meaning." The same olfactory page traces its own evidence base to a Clubhouse audio session preserved in the SAN repo as `b0069y.md`, which means the timing hypothesis enters the canon via real-time discussion between [[micah-blumberg]] and collaborators rather than via a formal paper. On the receptor-specificity side, the olfactory page concludes that "the current evidence favors receptor specificity" and that "individual synapses appear to be chemically dedicated ([[dopamine]] neurons fire [[dopamine]]; [[acetylcholine]] neurons fire [[acetylcholine]]) — mixing of neurotransmitters inside a single synapse is not the primary mechanism of smell discrimination," which fixes the *type* side of the dichotomy that the timing hypothesis is the alternative to. Because the packet for this draft is empty, no specific transcript-line citations are claimed; the durable evidence is the cross-reference already published on the [[olfactory-neural-pathway]] page.

## Position

The hypothesis pushes back on the standard reading of synaptic chemistry — that smell or any other modality is discriminated mainly by *which* neurotransmitter is released into *which* receptor — by asking whether the discriminating signal is instead carried in *when* release occurs relative to other release events. The SAN framing is that a chemically dedicated synapse (one neuron, one neurotransmitter, see [[chemical-synapse]]) does not undermine timing-based coding, because two such synapses converging on the same [[dendrite]] can still encode information in their *relative* phase of release rather than in any difference of identity at either site alone. Read this way, [[neurotransmitter-timing-hypothesis]] is a chemical-layer instance of the broader SAN insistence that information lives in [[coincidence-detection]] events, with [[dendritic-coincidence-detection]] and the [[dendritic-leaky-membrane-coincidence-filter]] supplying the cellular mechanism that converts release-time differences into a readable pattern. The hypothesis also lines up with the [[multi-vesicular-release]] / [[multivesicular-release-spatial-information]] / [[multivesicular-release-synaptic-unreliability]] thread, which already locates synaptic information in the *pattern* of release rather than in the *fact* of release, and with [[multi-vesicle-release-spatial-encoding]] as the spatial-encoding companion claim. Within the broader SAN coding stack, neurotransmitter-timing is the chemical-layer counterpart to [[action-potential-waveform-encoding]] at the spike layer and to [[neural-oscillation-rendering]] at the population layer — three nested timing-first accounts where each refuses the rate-coding alternative at its own scale. Adjacent receptor-side counter-evidence is not denied: [[umami-multi-receptor-coincidence-detection]] and [[receptor-inhibition-pattern]] show that receptor diversity can carry distinction information too, but the timing hypothesis treats those as compatible inputs to a downstream timing readout rather than as the primary carrier.

## Chronology

Within the SAN corpus, [[neurotransmitter-timing-hypothesis]] tracks with the broader timing-first reading of neural coding that also produces [[neural-timing-encoding]], [[action-potential-waveform-encoding]], and the [[multi-vesicle-release-spatial-encoding]] / [[multivesicular-release-spatial-information]] line of argument. The Clubhouse-session origin of the surrounding [[olfactory-neural-pathway]] page (sourced from `b0069y.md`) places this iteration of the hypothesis in the live-discussion phase of the project, alongside the other olfactory-side pages [[olfactory-pathway-uniqueness]] and [[olfactory-tripartite-circuit]]. Because the packet for this draft is empty, no specific year-stamps are claimed; what is durably recorded is the genealogy — receptor-specificity is the inherited orthodoxy, and the timing hypothesis is the SAN alternative the corpus repeatedly asks about rather than answers definitively.

## Post-SAN

Mainstream synaptic-coding literature has converged on a mixed picture that maps cleanly onto the timing-vs-type dichotomy the hypothesis articulates. On the type side, the established receptor-specificity account in olfaction and beyond — combinatorial activation across diverse receptor populations — remains the dominant explanation for fine discrimination, and the [[olfactory-neural-pathway]] page's own conclusion that current evidence favors receptor specificity is consistent with that mainstream consensus. On the timing side, work on spike-timing-dependent plasticity, on [[multi-vesicular-release]] as a stochastic-but-information-bearing event, and on millisecond-scale presynaptic timing in cortical microcircuits has accumulated evidence that release timing is not merely noise around a rate signal — which is the empirical bet the SAN hypothesis also makes. Where Neurotransmitter Timing Hypothesis stakes a non-trivial claim that mainstream neuroscience has not endorsed, it is in the stronger reading that *timing* of release is the *primary* carrier of signal meaning at chemically dedicated synapses, with receptor identity demoted to a routing constraint. That stronger reading remains an open hypothesis rather than a settled result, and the SAN-specific contribution is to thread it forward into [[dendritic-coincidence-detection]] and [[coincidence-as-a-bit]] — making timing-of-release a chemical-layer instance of the same coincidence-as-information primitive that recurs across the SAN coding stack.

## Related concepts

- [[chemical-synapse]] — the substrate at which the timing-vs-type question is posed.
- [[neural-timing-encoding]] — the SAN sibling concept on the spike side of the same timing-first commitment.
- [[multi-vesicular-release]] — the release-pattern thread that already locates information in *how* rather than *whether* a synapse fires.
- [[multivesicular-release-spatial-information]] — the spatial-information companion to the timing claim.
- [[multivesicular-release-synaptic-unreliability]] — the unreliability-as-information re-reading.
- [[multi-vesicle-release-spatial-encoding]] — the spatial-encoding sibling argument.
- [[coincidence-detection]] — the dendritic primitive that timing-of-release feeds into.
- [[dendritic-coincidence-detection]] — the cellular-mechanism page for that primitive.
- [[dendritic-leaky-membrane-coincidence-filter]] — the membrane-level filter that turns release-time differences into spike output.
- [[coincidence-as-a-bit]] — the information-theoretic re-reading of the primitive.
- [[olfactory-neural-pathway]] — the SAN page where the timing-vs-type question is explicitly raised.
- [[olfactory-pathway-uniqueness]] — the architectural anomaly that motivates the question.
- [[olfactory-tripartite-circuit]] — sibling olfactory-circuit page.
- [[umami-multi-receptor-coincidence-detection]] — the receptor-side counterpoint that combinatorial receptor activity can also carry distinction information.
- [[receptor-inhibition-pattern]] — sibling receptor-side argument.
- [[action-potential-waveform-encoding]] — the spike-layer SAN counterpart of the timing-first commitment.
- [[neural-oscillation-rendering]] — the population-layer SAN counterpart.
- [[acetylcholine]] / [[dopamine]] / [[gaba]] — the chemically dedicated substrates the hypothesis refuses to make load-bearing on their own.

## Source Provenance

- Generated: 2026-04-24T18:41:10
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/neurotransmitter-timing-hypothesis.json`
- Evidence count: 0
- Source ids:

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
