# Synaptic Weight Update

![Synaptic Weight Update structural registers](/v5ma.github.io/wiki/assets/generated/san/synaptic-weight-update/synaptic-weight-update-structural-registers-20260629-v1.png)

This diagram frames synaptic weight update in the SAN sense: an oscillatory
coherence gate determines whether plasticity should fire, and the update then
changes physical synaptic registers including vesicle-release pattern, receptor
mosaic, dendritic-spine geometry, ion-channel tone, bouton trace state, and
coupling to the dominant phase-wave differential.

**Synaptic Weight Update** is the operation by which a [[chemical-synapse|synapse]]'s contribution to its post-synaptic neuron is changed over time — in classical [[deep-learning-neural-networks|connectionist neural networks]] it is a scalar update rule (gradient descent on a loss surface), and in the [[self-aware-network|self-aware-networks]] reading it is a *physical, structural* update of [[synaptic-connections]] and [[dendritic-morphology|dendritic morphology]] driven by the [[dominant-phase-wave-differential|dominant phase-wave differential]]'s coherence with predicted patterns.

## Origin

This article is a **stub generated from an empty evidence packet**. The slug `Synaptic-Weight-Update` is referenced from [[orphans|the orphans index]] and from neighboring SAN pages on plasticity, but no primary-source paragraphs from [[micah-blumberg|Micah Blumberg]]'s own writings have been routed into the Lane A or Lane G acquisition lanes for this exact phrase. The article therefore makes no dated chronological claim, does not quote any transcript or paper, and does not paraphrase any specific passage. Its terms are read in the sense already established elsewhere in the SAN wiki by [[hebbian-plasticity]], [[long-term-depression]], [[bistable-synaptic-plasticity]], [[brain-plasticity]], [[cortical-plasticity]], [[synaptic-computation-ltp]], [[ltp-bouton-synaptic-memory-traces]], and the connectionist-vs-SAN comparison concepts [[deep-learning-neural-networks]] and [[graph-neural-network]]. When a primary-source packet is recovered, this article should be rewritten against it.

## Position

In a [[self-aware-network]] the weight of a [[chemical-synapse|synapse]] is not a single scalar; it is the joint state of (a) the *count and spatial pattern* of [[multi-vesicle-release|multi-vesicular release]] events the [[synapse]] can deposit into the [[synaptic-cleft]], (b) the *receptor mosaic* on the post-synaptic side that decodes those releases, (c) the *dendritic-tree position* of the [[synapse]] within the [[dendritic-morphology]] of its [[neural-array]] cell, and (d) the *plasticity envelope* set by [[synaptic-ion-channel-tone|ion-channel tone]], [[bistable-synaptic-plasticity|bistable LTP/LTD]], and [[ltp-bouton-synaptic-memory-traces|bouton memory traces]]. A "weight update," in SAN terms, is the operation that *jointly changes* these four registers. The connectionist abstraction — collapse all four into a scalar `w` and update by `dw = -η ∂L/∂w` — is, in the SAN reading, a coarse-grained projection that throws away the part of the structure that actually carries the [[engram|engram]]. A faithful SAN weight-update therefore corresponds to (i) growing or pruning [[dendritic-spines|spines]] on the [[apical-dendrite|apical dendrite]] / basal [[dendrite]], (ii) altering [[ltp-bouton-synaptic-memory-traces|bouton trace]] state, (iii) re-tuning [[synaptic-ion-channel-tone|ion-channel tone]], and (iv) shifting the [[synapse]]'s coupling to the [[phase-wave-differentials|phase-wave differential]] of its column, all under the gating of [[inhibitory-interneurons-plasticity-gating|inhibitory plasticity gating]].

## Position — gating by oscillatory coherence

The SAN-distinguishing claim is that the *trigger* for weight update is not raw co-firing in the Hebbian sense but *coherence with the dominant phase-wave differential*. Updates strengthen connections that contributed to predictions consistent with the [[dominant-phase-wave-differential|DPWDR]] and weaken those that did not — a position consistent with [[predictive-coding]] and the [[free-energy-principle|free-energy principle]] but cashed out at the substrate level in [[multi-vesicle-release-spatial-encoding|MVR spatial encoding]] and [[dendritic-coincidence-detection|dendritic coincidence detection]] rather than in scalar weights. This makes the SAN weight-update closer to a *structural rewriting* than to an arithmetic update, and predicts that experimentally we should see plasticity events that are conditional on local oscillatory coherence rather than purely on co-firing — a claim that maps onto observed [[gamma-oscillation|gamma]] / [[theta-oscillations-background-scripts|theta]] gating of [[ltp]] without requiring scalar weights.

## Relation to mainstream framings

In machine learning, "synaptic weight update" usually means [[deep-learning-neural-networks|gradient descent on a scalar weight]], optionally with momentum, regularization, or [[graph-neural-network|graph-aware]] structure. In [[neuroscience]], "synaptic weight update" usually means an [[stdp]] / Hebbian / [[ltp]]/LTD rule operating on a continuous synaptic efficacy parameter. SAN does not deny the *fit* of these abstractions in narrow regimes; it claims that for purposes of [[engram|engram]] formation and [[oscillatory-binding-problem|oscillatory binding]], the discarded structure (release spatial pattern, dendritic-tree position, ion-channel tone, phase-wave coherence) carries the part of the signal that matters. The bridge concept in the SAN wiki is [[synaptic-connections|synaptic connections]] — the structural register that the connectionist scalar coarse-grains over.

## Status and what to do next

This article is intentionally short and unsourced. It exists so that downstream auto-linkers and the [[orphans|orphans index]] do not generate red-links to a missing slug. The next concrete authoring step is the recovery of primary-source paragraphs — from the [[self-aware-networks-book|SAN book]] manuscript on github (likely candidates: the [[gh-02san|02san]] / [[gh-04san|04san]] chapters that already discuss [[hebbian-plasticity|STDP]], the rexnote series, and the NAPOT whitepaper drafts), from Lane G transcripts, or from a [[gh-resnote04|Micah]]-authored paper currently sitting in the support corpus that has not yet been routed to a packet under this exact slug. Until then no quotation, no paraphrase, and no chronological priority claim is made.

## Related concepts

- [[synaptic-connections]] — the structural register a weight-update actually changes.
- [[hebbian-plasticity]] — [[stdp]] / [[hebbian-learning|Hebbian learning]] rule the SAN reading refines.
- [[long-term-depression]] — the pruning side of plasticity.
- [[bistable-synaptic-plasticity]] — bistable [[ltp]]/LTD that gates updates.
- [[brain-plasticity]] — the plasticity envelope as a whole.
- [[cortical-plasticity]] — [[cortex]]-scale plasticity.
- [[synaptic-computation-ltp]] — [[synapse]]-as-computation framing of [[ltp]].
- [[synaptic-molecular-complexity-ltp]] — molecular substrate of the update.
- [[ltp-bouton-synaptic-memory-traces]] — bouton memory traces updated by the rule.
- [[synaptic-ion-channel-tone]] — slow tonic component reset by updates.
- [[multi-vesicle-release]] — release mode whose statistics encode the "weight."
- [[multi-vesicle-release-spatial-encoding]] — spatial encoding of release.
- [[multivesicular-release-synaptic-unreliability]] — structured stochasticity SAN reads as code.
- [[synapse-as-signal]] — broader claim about what the [[synapse]] outputs.
- [[synaptic-cleft]] — readout site.
- [[dendritic-morphology]] — geometric register that joint updates with weight.
- [[dendritic-spines]] — spines whose growth/pruning is part of the update.
- [[apical-dendrite]] — apical-[[dendrite]] position-dependent update.
- [[dendritic-coincidence-detection]] — coincidence-detection that gates the update.
- [[neural-array]] — unit whose synapses are being updated.
- [[napot-overview]] — NAPOT theory in which connections are addressed.
- [[oca-overview]] — oscillatory [[consciousness]] architecture this update sits in.
- [[phase-wave-differentials]] — phase-wave differential whose coherence gates updates.
- [[dominant-phase-wave-differential]] — dominant rhythm that selects which updates fire.
- [[predictive-coding]] — adjacent [[prediction]]-driven update story.
- [[free-energy-principle]] — adjacent variational story.
- [[deep-learning-neural-networks]] — connectionist abstraction of weight update.
- [[graph-neural-network]] — graph-aware connectionist family.
- [[engram]] — memory unit whose update is being described.
- [[memory-consolidation]] — wake/sleep modulation of update.
- [[inhibitory-interneurons-plasticity-gating]] — inhibitory gating of plasticity.

## Source Provenance

- Generated: 2026-04-24T17:52:58
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/Synaptic-Weight-Update.json`
- Evidence count: 0
- Source ids: 

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
