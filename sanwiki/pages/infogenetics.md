*Infogenetics* is a term coined by [[gh-resnote04|Micah]] Blumberg]] for the hypothesis that specific
information patterns — rather than chemicals or photons — are sufficient to trigger
targeted neural responses, because neurons detect criteria and reset synaptic firing
thresholds in response to matching input patterns rather than merely summing charge.

## Core claim

Neurons are information-pattern detectors: they reset their pre- and post-synaptic
firing criteria when a sufficiently specific input pattern arrives. Infogenetics proposes
that this detection can be exploited to excite or inhibit specific neurons by delivering
the precise information signature those neurons are tuned to recognise, without genetic
engineering (optogenetics) or generalised electrical stimulation (tDCS).

## Contrast with optogenetics and electrogenetics

| Method | Carrier | Targeting mechanism |
|---|---|---|
| Optogenetics | Light (photons) | Genetically inserted photosensitive proteins |
| Electrogenetics | Electron beams | Electrical sensitivity of native amino acids |
| **Infogenetics** | Information patterns | Neuron's own detection / threshold-reset logic |

Infogenetics is the most abstract of the three: it requires understanding *what pattern*
a given neuron is tuned for rather than *what physical carrier* reaches it. This is
exactly the gap that [[napot]] addresses — the neural array encodes a tomographic pattern,
and a neuron's "criteria" are its slice of that pattern.

## SAN connections

- [[napot]] — arrays encode the patterns that infogenetic targeting must match
- [[self-aware-network]] — a network that knows its own pattern catalogue could
  [[gh-a0206z|self]]-apply infogenetic stimuli ([[gh-a0206z|self]]-regulation without external hardware)
- [[inhibitory-interneurons-plasticity-gating]] — threshold resets are mediated partly
  by interneuron gating; infogenetics must account for this gate to be effective
- [[distributed-phase-representations]] — the "information pattern" is a phase pattern
  distributed across the array, not a localised signal

## Open question

The central challenge is specificity: delivering a pattern that matches neuron A's
criteria without also matching neuron B's nearby criteria. This mirrors the engineering
challenge of spatial light modulation in optogenetics but in the information domain.
