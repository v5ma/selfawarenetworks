# Burst Event

![Burst Event soma symbol emission and neural-array broadcast diagram](/v5ma.github.io/wiki/assets/generated/san/burst-event/burst-event-soma-symbol-broadcast-20260629-v1.png)

This diagram shows the page's central SAN mechanism: concurrent dendritic coincidences accumulate at the soma, cross a burst threshold into an action-potential packet, and fan out through vesicle release as a phase-shift signal readable by the downstream neural array.

**Burst Event** is the SAN term for a *somatic* burst — the moment a neuron's soma integrates enough concurrent dendritic input that it fires a packet of [[action-potential|action potentials]] and floods downstream cells with [[neurotransmitters|neurotransmitter]]-filled vesicles, treated in this wiki as the [[napot-theory|NAPOT]] symbol-emission event rather than a mere spike. Two pieces of evidence anchor the definition: at the upstream end, "many con-current coincidences might fill up the neuron to the point that the soma burst event happens, and in a way that symbolizes that some percentage of the pattern that the [[synaptic-configuration|synaptic arrangement]] on the dendritic side" represents ([[gh-a0275z|a0275z]]--md, line 7); at the downstream end, the burst is "larger than 1 because it impacts a lot of other cells via the vesicle releases following the Soma burst event" ([[gh-a0094z|a0094z]]--md, line 8). The burst is therefore both a *readout* of dendritic pattern-matching and a *broadcast* into the neighbouring [[neural-array|neural array]].

In SAN's cortical-column model, the burst event also marks a *phase boundary*: when the soma bursts, "if [it] results in a phase shift (like an [[action-potential|action potential]] from the soma) then everything below the soma's burst event becomes a [[nonlinear-differential-continuous-approximation|nonlinear differential continuous approximation]], which is allowing a pattern (a sheaf of fractal [[phase-wave-differential|phase wave differentials]])" to propagate ([[gh-rexnote11|rexnote11]]--md, line 15). This is the load-bearing claim: the burst is what lets the [[napot-theory|NAPOT]]/[[ndca|NDCA]] machinery treat sub-burst dendritic dynamics as a continuous nonlinear approximation, while the burst itself is the discrete phase-shift symbol that the rest of the [[Cortical-columns|cortical columns]] read. Without bursts, dendritic patterns never become discrete signals; with them, the network has a clean alphabet.

The burst is correlated with [[action-potential-duration|action-potential duration]] (APD) and the broader [[action-potential-waveform|action-potential wave-shape]] literature: SAN treats burst events as compound waveforms whose envelope shape (not just spike count) carries information, and whose [[synaptic-frequency|synaptic-frequency]] coupling determines which downstream [[oscillators|oscillators]] entrain. Because each burst impacts many cells ([[gh-a0094z|a0094z]]--md, line 8), the *fan-out* matters: a single soma burst is a small-cardinality broadcast event whose [[phase-pattern|phase pattern]] and [[phase-signal|phase signal]] are read by the surrounding neural array and integrated into [[napot-theory|NAPOT]]/[[bot-biological-oscillatory-tomography|BOT]] tomographic reconstructions and the [[fourier-slice-theorem|tomography-as-Fourier]] reading. Until further evidence is backfilled, the page should be read as a definition + three-corner triangulation: integration ([[gh-a0275z|a0275z]]--md), broadcast ([[gh-a0094z|a0094z]]--md), and phase-shift symbolisation ([[gh-rexnote11|rexnote11]]--md).

## Related concepts

- [[action-potential]] — the spike-shaped event a burst is composed of multiple of.
- [[action-potential-duration]] — APD measure tied to burst envelope shape.
- [[nonlinear-differential-continuous-approximation]] — the sub-burst dendritic regime the burst boundary enables.
- [[phase-wave-differential]] — the phase-front pattern bursts emit into.
- [[neural-array]] — the downstream array a burst broadcasts into.
- [[Cortical-columns]] — the spatial unit reading bursts as discrete symbols.
- [[napot-theory|NAPOT]] — the projection-tomography frame in which bursts are emission events.
- [[ndca]] — NDCA dendritic-coincidence machinery upstream of the burst.
- [[neurotransmitters]] — the chemical broadcast medium of the burst.
- [[synaptic-configuration]] — the dendritic pattern the burst symbolises.

## Source Provenance

- Generated: 2026-04-24T18:22:00
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/burst-event.json`
- Evidence count: 3
- Source ids: [[gh-a0094z|a0094z]]--md, [[gh-a0275z|a0275z]]--md, [[gh-rexnote11|rexnote11]]--md
  - `a0094z--md` line 8 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0094z.md
  - `a0275z--md` line 7 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0275z.md
  - `rexnote11--md` line 15 → https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/rexnote11.md

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D will add `wikilinks`. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
