# Temporal Spatial Coincidence Detection

![Temporal Spatial Coincidence Detection dendritic spike plate](/v5ma.github.io/wiki/assets/generated/san/temporal-spatial-coincidence-detection/temporal-spatial-coincidence-detection-dendritic-spike-20260630-v1.png)

This plate renders the page's central SAN mechanism: a neural-array cell fires only when inputs arrive in the right temporal order and at the right dendritic positions, crossing a branch-local threshold and propagating as a dendritic spike toward soma.

**Temporal Spatial [[coincidence-detection|Coincidence Detection]]** is, on the face of its name, the [[self-aware-networks|Self-Aware Networks]] event in which a [[neural-array|neural array]] cell registers a *coincidence* of inputs along *both* a temporal axis (the right time-series) and a spatial axis (the right distribution across the [[dendritic-morphology|dendritic tree]]). It is a sibling of [[dendritic-coincidence-detection|dendritic coincidence detection]] and of the phase-conditional sharpening [[tempo-spatial-phasic-coincidence|tempo-spatial phasic coincidence]] — a near-synonym, with this slug emphasizing the temporal-AND-spatial conjunction without explicitly committing to the phase-conditional refinement.

## Origin

This article is a **stub generated from an empty evidence packet**. The slug `temporal-spatial-coincidence-detection` is referenced from the [[orphans|orphans index]] and from neighboring SAN pages on [[coincidence-detection|coincidence detection]], but no primary-source paragraphs from [[micah-blumberg|Micah Blumberg]]'s writings have been routed into the Lane A or Lane G acquisition lanes for this exact phrase. The article therefore makes no dated chronological claim, does not quote any transcript or paper, and does not paraphrase any specific passage. Its terms are read in the sense already established elsewhere in the wiki by [[dendritic-coincidence-detection]], [[coincidence-detection]], [[coincident-detection]], [[dendritic-spike]], [[dendritic-pattern-detection]], [[dendritic-computation-pattern-detection]], [[tempo-spatial-patterns]], [[tempo-spatial-phasic-coincidence]], [[temporal-pattern-coding]], and [[apical-dendrite]]. When a primary-source packet is recovered, this article should be rewritten against it.

## Position

In a [[self-aware-network]], a [[neural-array]] cell does not respond to single inputs but to *patterns* of inputs that satisfy a joint temporal-and-spatial criterion. The temporal piece says that the inputs must arrive in the right *order* — the right [[temporal-pattern-coding|temporal pattern]] under the local [[gamma-oscillation|gamma]] envelope. The spatial piece says that the inputs must arrive at the right *positions* on the [[dendritic-morphology|dendritic tree]] — the right [[dendritic-spines|spines]] on the right [[dendritic-branches|branches]], where the cell has grown its [[synaptic-connections|connections]] to encode the pattern. Hitting either alone is insufficient; hitting both is what triggers the cell's [[dendritic-spike|dendritic spike]] and its propagation to soma. *Temporal-spatial [[coincidence-detection|coincidence detection]]* names that joint criterion.

## Position — relation to neighboring SAN concepts

Within the SAN wiki this slug sits between [[dendritic-coincidence-detection|the parent dendritic-coincidence-detection concept]] (which already speaks of coincidence in space and time on the dendritic tree) and the more specific [[tempo-spatial-phasic-coincidence|tempo-spatial phasic coincidence]] (which adds the *phase* condition to the conjunction). The natural reading is therefore that *temporal-spatial [[coincidence-detection|coincidence detection]]* is the two-axis conjunction that is taken as the *substrate* for the three-axis conjunction; in other words: temporal-spatial is the necessary condition, phase is the SAN-distinguishing additional gating that sharpens it. A faithful primary-source rewrite should make explicit which reading [[micah-blumberg|Micah Blumberg]]'s writings adopt — whether *temporal-spatial [[coincidence-detection|coincidence detection]]* is taken as the full SAN criterion (and "phasic" is collapsed into "temporal") or whether it is the two-axis precursor to the three-axis [[tempo-spatial-phasic-coincidence|phasic-conjunction]] reading.

## Position — substrate

The substrate that implements temporal-spatial [[coincidence-detection|coincidence detection]] is: (1) [[apical-dendrite|apical-dendrite]] integration windows that quantize summation to a fraction of a [[gamma-oscillation|gamma cycle]]; (2) [[dendritic-spike|dendritic spikes]] that fire only when summation crosses a position-and-timing-conditional threshold; (3) [[chemical-synapse|synaptic]] inputs whose precise location on the tree determines which spatial pattern the cell can recognize; (4) [[multi-vesicle-release|multi-vesicular release]] whose count and timing supply the input statistics; (5) [[multi-vesicle-release-spatial-encoding|MVR spatial encoding]] that gives a within-cleft spatial dimension; and (6) [[inhibitory-interneurons-plasticity-gating|inhibitory plasticity gating]] that prevents spurious conjunctions from being learned.

## Relation to mainstream framings

In mainstream [[neuroscience]], [[dendritic-coincidence-detection|dendritic coincidence detection]] is well-established (Larkum and colleagues, dendritic NMDA spikes, etc.), and the spatial axis (which dendritic compartment) is increasingly recognized. SAN's *temporal-spatial [[coincidence-detection|coincidence detection]]* aligns with this mainstream development; its SAN-specific contribution (relative to the rate-only or weight-only abstractions still common in machine learning) is to insist that the two-axis conjunction is the primary tuning unit of the cell, not a downstream property of an underlying scalar weight. Where this differs from rate-only coding: rate-equivalent inputs that hit the *wrong* spatial pattern or the *wrong* temporal sequence are non-events, regardless of total drive. Where it agrees with mainstream coincidence-detection literature: there is now substantial experimental support for spatially-localized dendritic events whose summation criterion is order-sensitive.

## Status and what to do next

This article is intentionally short and unsourced. It exists so that downstream auto-linkers and the [[orphans|orphans index]] do not generate red-links to a missing slug. The next concrete authoring step is the recovery of primary-source paragraphs — most likely from the rexnote series, the NAPOT whitepaper drafts, or from the GPT2024 manuscripts where [[coincidence-detection|coincidence detection]] is explicit. A rewrite should either (a) collapse this slug into [[dendritic-coincidence-detection]] / [[tempo-spatial-phasic-coincidence]] if the primary source uses those terms instead, or (b) keep it as a distinct two-axis precursor concept. Until then no quotation, no paraphrase, and no chronological priority claim is made.

## Related concepts

- [[dendritic-coincidence-detection]] — parent concept; [[coincidence-detection|coincidence detection]] on the dendritic tree.
- [[coincidence-detection]] — broader concept.
- [[coincident-detection]] — alternate spelling.
- [[tempo-spatial-phasic-coincidence]] — sharpened three-axis sibling adding phase.
- [[tempo-spatial-patterns]] — the kind of pattern being detected.
- [[temporal-pattern-coding]] — temporal-coding axis the conjunction lives along.
- [[Temporal-Oscillation-Phase]] — phase axis that sharpens to phasic-coincidence.
- [[dendritic-spike]] — output of a successful conjunction.
- [[dendritic-pattern-detection]] — adjacent pattern-detection register.
- [[dendritic-computation-pattern-detection]] — broader dendritic-computation register.
- [[apical-dendrite]] — apical site of integration.
- [[dendritic-morphology]] — geometric register that joint-encodes.
- [[dendritic-encoding]] — encoding side of the geometry.
- [[dendritic-spines]] — spines whose positions matter.
- [[dendritic-branches]] — branches whose geometry matters.
- [[chemical-synapse]] — input-driving synapse.
- [[synaptic-cleft]] — readout site.
- [[synaptic-connections]] — connection register grown to encode the pattern.
- [[multi-vesicle-release]] — release mode whose timing carries the input.
- [[multi-vesicle-release-spatial-encoding]] — within-cleft spatial axis.
- [[multivesicular-release-spatial-information]] — spatial-info reading.
- [[inhibitory-interneurons-plasticity-gating]] — gates spurious conjunctions.
- [[gamma-oscillation]] — frame-rate carrier the conjunction quantizes against.
- [[phase-wave-differentials]] — substrate the phase axis lives along.
- [[dominant-phase-wave-differential]] — dominant rhythm that gates the moment.
- [[neural-array]] — unit performing the conjunction.
- [[napot-overview]] — NAPOT framework the conjunction sits in.
- [[oca-overview]] — oscillatory [[consciousness]] architecture.

## Source Provenance

- Generated: 2026-04-24T18:51:12
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/temporal-spatial-coincidence-detection.json`
- Evidence count: 0
- Source ids: 

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
