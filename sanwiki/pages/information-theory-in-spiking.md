# Information Theory In Spiking

**Information Theory In Spiking** is the corner of [[computational-neuroscience|computational neuroscience]] that asks how Shannon-style information measures (entropy, mutual information, surprisal) apply to *spike trains* — what each [[action-potential|action potential]] tells a downstream neuron, how rate, temporal, and population codes carry information, and what the upper bound on bits-per-spike actually is. Within [[self-aware-networks|Self-Aware Networks]] this body of work is read through the [[coincidence-as-a-bit|coincidence-as-a-bit]] commitment: SAN argues that the information-bearing event in spiking neurons is not the spike itself but the *coincidence* of multiple spikes detected at a phase-coupled boundary.

## Origin

The packet for this slug is empty (`Evidence count: 0`); no primary SAN-source quote has been harvested yet. The mainstream root of *information theory in spiking* runs through the 1990s — Bialek, Rieke, Warland, de Ruyter van Steveninck and the *Spikes: Exploring the Neural Code* (1997) line of work, the Strong-Koberle-de-Ruyter-Bialek 1998 entropy-rate methods, and the long Adrian-rate-coding tradition that goes back to the 1920s. SAN's engagement with this body of work is best understood as a *re-anchoring*: the SAN claim is that spike-train entropy measurements that ignore [[dendritic-coincidence-detection|dendritic coincidence detection]] and the [[phase-wave-differentials|phase-wave-differential]] context of the spike *underestimate* the information actually carried because they treat the spike as a point-event rather than as a member of a coincidence pattern.

## Position

Within [[gh-a0206z|Self]]-Aware Networks the *information-theory-in-spiking* construct is held in tension with the [[coincidence-as-a-bit|coincidence-as-a-bit]] commitment: spike-counting and spike-timing analyses are *necessary* — they recover the rate-and-timing structure of the substrate — but *insufficient*, because the SAN-internal informational primitive is the *coincidence pattern* not the spike itself. Because the packet is empty, no inline `(source_id, line N, …)` claim about [[gh-resnote04|Micah]]'s specific framing of the spike-information question is made here — the structural placement above is a *cross-reference* to neighbouring SAN pages on coding and information, not a quote from [[gh-resnote04|Micah]]. When evidence is harvested under this name the Position section should be rewritten to cite [[gh-resnote04|Micah]] directly. The currently-cite-able cousins are [[neural-timing-encoding|neural timing encoding]], [[graded-neural-firing|graded neural firing]] (the SAN page that already partially escapes the all-or-nothing spike abstraction), [[single-neuron-phase-cascade|single-neuron phase cascade]] (the SAN account of single-neuron information that goes beyond the spike-count), [[synaptic-unreliability|synaptic unreliability]] (which denies the spike a clean downstream readout), [[dendritic-spike|dendritic spike]] (a non-axonal information event the rate-coding tradition undercounts), [[neural-burst-backpropagation|neural burst backpropagation]], [[neuronal-sequences-population-bursts|neuronal sequences as population bursts]], and [[neural-sequence-representation|neural sequence representation]].

## Chronology

The mainstream chronology is Adrian's 1920s rate-coding work, Hodgkin and Huxley's 1952 axonal-action-potential mechanism, MacKay & McCulloch's 1952 channel-capacity-of-a-neuron paper, the Bialek-school *Spikes* book in 1997 and the Strong-Koberle-de-Ruyter-Bialek entropy-rate methods in 1998, and the predictive-coding/efficient-coding extensions through the 2000s and 2010s. SAN's contribution is best dated to the SAN-corpus consolidation period (2022 onward in the GitHub clone), where it is embedded inside the broader [[super-information-theory|Super Information Theory]] reformulation. Without packet evidence under this exact slug we cannot pin a [[gh-resnote04|Micah]] quote to a year here; the page exists as a *naming hook* into the spike-information literature so that other SAN pages can reference the field rather than re-introduce it.

## Post-SAN

Mainstream spike-information work — the *Spikes* line, the Strong-Koberle-de-Ruyter-Bialek estimators, the population-decoding literature — provides quantitative tools (entropy, mutual information, channel capacity) without taking a position on which *features* of the spike train should count as the carrier. SAN takes a position. Two SAN-side claims are testable against the published spike-information literature here. First, the SAN reading predicts that spike-train entropy estimates which ignore the *dendritic-context* of each spike (the coincidence-pattern in which the spike participates upstream) should systematically *underestimate* the information per spike — measurable by comparing standard estimators against estimators that condition on local dendritic-coincidence statistics. Second, by binding the information-bearing event to [[coincidence-as-a-bit|coincidence-as-a-bit]] and [[phase-wave-differentials|phase-wave differentials]], SAN predicts that *phase-conditioned* mutual-information estimates (between stimulus and spike-given-phase) should exceed *unconditioned* spike-stimulus mutual information by a measurable margin in cortical recordings. Where SAN converges with the published work is in [[neural-timing-encoding|the timing-encoding tradition]], in [[graded-neural-firing|graded firing]] accounts that escape the binary-spike abstraction, and in the broader population-decoding tradition that already accepts that information lives at the population level, not in single spikes.

## Related concepts

- [[coincidence-as-a-bit]] — the SAN-original informational primitive that re-frames the spike as a coincidence-member.
- [[coincidence-detection]] — the elementary coincidence event the spike participates in.
- [[coincidence-detection-neural-bit]] — the neural-bit framing of the coincidence event.
- [[dendritic-coincidence-detection]] — the dendritic-context the spike is read against.
- [[dendritic-spike]] — the non-axonal information event the rate-coding tradition undercounts.
- [[action-potential]] — the canonical spike construct.
- [[action-potential-waveform]] — the waveform-detail companion construct that goes beyond binary-spike timing.
- [[action-potential-waveform-encoding]] — waveform-encoding extension that carries more bits per spike.
- [[neural-timing-encoding]] — the timing-encoding sibling page.
- [[graded-neural-firing]] — the SAN page that escapes the all-or-nothing spike abstraction.
- [[single-neuron-phase-cascade]] — the SAN account of single-neuron information beyond the spike-count.
- [[synaptic-unreliability]] — the SAN page denying the spike a clean downstream readout.
- [[neural-burst-backpropagation]] — burst-[[backpropagation]] companion page.
- [[neuronal-sequences-population-bursts]] — population-burst companion page.
- [[neural-sequence-representation]] — neural-sequence-representation companion page.
- [[super-information-theory]] — the SAN-original information framework the construct sits inside.
- [[consciousness-as-information]] — the information-as-[[consciousness]] framing the construct supports.
- [[non-physical-information]] — the non-physical-information construct.
- [[neural-anti-bit]] — the dual construct for expected-coincidence suppression.
- [[phase-wave-differentials]] — the phase-wave-differential context the spike is read against.
- [[napot-neural-array-phase-tomography]] — the NAPOT readout that re-frames the spike-information question.

## Source Provenance

- Generated: 2026-04-24T18:07:01
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/information-theory-in-spiking.json`
- Evidence count: 0
- Source ids: 

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `[[wikilinks]]`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
