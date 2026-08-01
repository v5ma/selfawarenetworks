**Criteria causation** (Peter Tse, *Neural Basis of Free Will*) proposes that a single neuron
is not merely a threshold-fire unit but an **information pattern detector**: it can be
configured to fire only when a specific excitatory pattern arrives, and to [[gh-a0206z|self]]-inhibit when
non-matching excitation appears — by reconfiguring its NMDA receptor weights on the fly.

The key distinction: simple threshold firing cannot distinguish between two different
excitatory inputs that both exceed threshold. Criteria causation requires the neuron to
recognize *which* pattern it is receiving and actively suppress responses to look-alikes.

## Mechanism

NMDA receptors have a temporal gating property: they require repeated coincident activation
over milliseconds to unlock their calcium pathway. Criteria causation resets this temporal
window — making the neuron "look for" a specific timing signature from upstream signals.
Calcium concentration in individual [[dendritic-spines]] mediates long-term changes
(LTP/LTD), allowing the criterion to be learned and stored locally.

Paul King's framing in the conversation: a neuron is like a "jury" — weighing excitatory
(sodium/glutamate) vs. inhibitory (chloride/GABA) inputs within a ~5ms window. But
criteria causation adds a further constraint: the juror can be told *what verdict to look
for* before the trial begins.

## Dendritic Computation

Each dendritic spine is a semi-independent sub-computational compartment, rolling its
signal into the local dendritic branch, which rolls into the soma. The result is a
hierarchy of sub-detections that "vote" toward the soma-level [[action-potential|action potential]]. This
is the biological substrate for the [[napot]] claim that arrays of neurons perform
iterative pattern projection.

## Calcium and cAMP as Complex Machinery

Simple sodium/potassium channels set the resting membrane potential and [[action-potential|action potential]]
waveform. The *complex* signal processing lives in calcium and cAMP (cyclic AMP):
- **Calcium**: unlocked by NMDA receptors; drives LTP/LTD and synapse morphology changes.
- **cAMP**: modulated by neuromodulators (dopamine, serotonin, norepinephrine); tunes
  neuron behavior over a 20–50ms window.

These second-messenger systems implement [[cognitive-states-and-stages]] at the cellular
level: cAMP changes are "state," calcium/LTP changes are "stage."
