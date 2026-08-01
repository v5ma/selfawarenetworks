**Multivesicular release (MVR)** — the release of 0, 1, 2, or 3 synaptic vesicles at a single neocortical synapse (mean ~2.6) — undermines a foundational assumption of computational neuroscience: [[synaptic-unreliability]].

![Multivesicular Release Spatial Information same-count different-footprint diagram](/v5ma.github.io/wiki/assets/generated/san/multivesicular-release-spatial-information/mvr-spatial-information-same-count-different-footprint-20260627-v2.png)

This SAN image shows the page's spatial-information claim with a concrete contrast: two release events can both contain three vesicles while landing on different receptor positions. A scalar spike-rate or weighted-sum abstraction collapses those events into the same value; the biological MVR framing preserves a receptor-footprint map that can feed dendritic selection and later NAPOT-style neural-array projection.

## The refuted assumption

Standard computational neuroscience (and the perceptron/ANN architecture that follows from it) treats synapses as unreliable bottlenecks that reduce rich dendritic input to a single scalar spike. The neuron is modeled as an input-output element converting many presynaptic spike trains into one output spike train. The perceptron formalizes this as a weighted sum followed by a threshold.

The problem: **a tree of inputs (Shakespeare) collapses to a single word (one spike)**. Artificial neural networks then added amplitude vectors (float weights between 0–1) to recover temporal/rate information, but they still discard the **spatial dimension** of synaptic transmission.

## What MVR reveals

Each neocortical synapse releases 0–3 vesicles, encoding a spatial dimension of information — not just whether a synapse fires, but *how many* vesicles, which encodes spatial patterning across the dendritic tree. This spatial information is invisible to rate-code and amplitude-code models alike. [[dendrite|Dendrites]] are selective computers that ignore inputs they're not tuned for, responding only to specific spatiotemporal configurations.

## Implication for SAN

[[napot]] predicts that neural arrays project patterns, not scalars. MVR is the synaptic-level mechanism that allows the dendritic tree to carry spatial pattern information rather than collapsing it to a bottleneck. The perceptron's design flaw is a direct consequence of ignoring MVR: it cannot represent [[spatial-pattern-coding]] because it was built on the wrong model of what synapses actually do.

## Outbound links

- [[synaptic-unreliability]]
- [[dendrite]]
- [[napot]]
- [[spatial-pattern-coding]]
- [[cortical-columns]]
- [[synaptic-connections]]
- [[information-theory]]
