The brain maintains a continuous multimodal rendering of reality â€” not a snapshot of the
present moment, but a rolling representation spanning roughly 10 seconds to several minutes
of accumulated experience. Incoming sensory input modifies small parts of this rendering
rather than replacing it wholesale.

> **Boundary note (2026-07-18):** Continuous Neural Rendering is a hypothesis about rolling context and recurrent state update, not an established claim that every oscillating neuron encodes exactly the past 10 seconds to several minutes. Time windows depend on circuit, task, memory system, rhythm band, and measurement method. Use the exact duration language as a SAN modeling target unless tied to a specific experiment. See [[san-scale-ladder-and-claim-boundaries]], [[phase-language-firewall]], and [[static-map-vs-active-render]].

![Continuous Neural Rendering rolling temporal window diagram](/v5ma.github.io/wiki/assets/generated/san/continuous-neural-rendering/continuous-neural-rendering-rolling-window-20260628-v1.png)

This page image maps the core mechanism: a rolling seconds-to-minutes neural rendering is locally shifted by incoming phase-wave differentials while the larger tonic context remains stable and deviant cells are renormalized toward the group rhythm.

## Core Claim

When measuring neural activity you are not seeing a representation of one instant. A group
of oscillating neurons encodes the **past 10 seconds to several minutes** simultaneously.
Any single neuron that fires faster or slower than the group average gets pulled back into
the group's oscillation pattern â€” the system **renormalizes** deviants.

This means incoming sensory signals only need to *shift* a small fraction of the ongoing
neural activity to update what the brain is rendering. The existing rendering provides the
stable context; perception is the act of modifying it, not generating it from scratch.

## SAN Connection

This matches [[napot|SAN:NAPOT]]'s [[tonic-oscillation|tonic oscillation]] framework precisely:
- The **[[tonic-oscillation|tonic oscillation]] baseline** is the continuous rendering.
- Incoming sensory data arrives as **[[phase-wave-differential|phase wave differentials]]**.
- Differentials shift small components of the rendering; the rest remains stable.

Contrast with naive neural-correlate interpretations that treat each neuron's firing as
a snapshot of a single moment â€” this framing systematically misreads the brain's
temporal encoding.

## Thousand Brains Theory Intersection

Subutai Ahmad (Numenta) elaborated in the same session: each cortical column maintains a
sensorimotor model of its world using **reference frames** (grid-cell-style coordinates).
Multiple columns *vote* to converge on a consistent interpretation.

[[gh-resnote04|Micah]]'s rendering model is compatible with voting: each column contributes to an ongoing
multicolumn rendering, and the vote is a synchronization of oscillatory phase across
columns rather than a winner-take-all snapshot.

## Dendritic Prediction Link

Active dendritic segments detect sparse coincident patterns (~8-9 co-active synapses) and
trigger NMDA spikes that depolarize the soma for 50-100ms â€” putting the neuron in an
**upstate** predisposed to fire. This is the biophysical mechanism by which the rendering
makes predictions: it pre-potentiates neurons whose context matches incoming patterns,
updating the rendering before the full signal arrives.

See [[adaptive-resonance-theory-san-comparison]], [[phase-wave-differential]],
[[napot]], [[tonic-oscillation]], [[thousand-brains-theory]].
