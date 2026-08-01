![Graded Neural Firing medical-textbook plate showing four firing levels, vesicle count, lateral inhibition radius, tonic baseline, phasic intensity, and confidence signal](/v5ma.github.io/wiki/assets/generated/san/graded-neural-firing/graded-neural-firing-vesicle-count-inhibition-radius-20260704-v1.png)

This SAN plate maps graded neural firing as a four-level biological code: firing intensity increases from silent to tonic to phasic to peak, driving larger vesicle counts, broader lateral inhibition radius, and a stronger confidence signal in the neural array.

In the [[self-aware-network]] model, neurons do not fire in a simple binary on/off mode.
Instead each neuron fires at one of four intensities — 0 (silent), 1 (tonic baseline),
2 (phasic), or 3 (peak/high-gamma) — encoding a confidence signal in the neural array.

## Core mechanism

A neuron firing at level 3 releases the maximum number of vesicles, opening potassium
channels earlier and more widely on neighboring neurons. This creates **lateral inhibition
at scale**: the higher the firing intensity, the larger the cortical neighborhood that is
transiently suppressed. The suppression radius is therefore a direct readout of
[[confidence-in-neural-pattern]] — louder firing = broader inhibition = stronger pattern
commitment.

This contrasts with classical [[sparse-distributed-representation]] (SDR) which treats
activity as binary. In a [[self-aware-network]] there is always a tonic baseline, so the
operative distinctions are *off / baseline / bright / brightest*, giving four
representational states rather than two.

## Connection to oscillatory dynamics

High-intensity firing patterns are phasic — they decay back to tonic baseline via the
same entrainment principles that synchronize fireflies or coupled pendulums. Large,
slow oscillators (delta) absorb novel phasic signals emitted by fast, local ones (gamma),
dissipating differences across the whole array. This is the mechanism behind the
[[phase-field]] hypothesis: the *structure of changes* in oscillatory phase — especially
in alpha — constitutes the rendered surface of conscious perception.

Different frequency bands serve different resolution scales: gamma for fine local detail,
alpha for mid-scale sensory rendering, delta for broad network integration. The speaker
locates the primary visual/auditory reality in the alpha band of lower cortical areas.

## Olfactory anomaly

Unlike every other modality, olfactory signals reach the neocortex (including prefrontal
cortex) *before* looping through the thalamus, making the prefrontal cortex a primary
sensory input for smell per a 2020 paper cited in the source lecture. This challenges
strict cortical modularity and supports the view that the whole brain operates as a
distributed primary sensory cortex — consistent with the [[self-aware-network]]
architecture where all regions share the tonic array.

## Related concepts

- [[napot]] — [[neural-array-projection|Neural Array Projection]] Oscillation Tomography; graded firing is a key
  substrate of NAPOT rendering
- [[phase-field]] — how oscillatory phase changes encode reality
- [[tonic-phasic-firing]] — the baseline/event distinction underlying graded firing
- [[sparse-distributed-representation]] — classical binary SDR, contrasted here
- [[confidence-in-neural-pattern]] — the emergent signal carried by inhibition radius

## History

Articulated in lecture notes transcribed in [[gh-b0065y|b0065y]].md, which cites Richard Feynman's
scale-thinking as an initial inspiration. Earlier SAN writings assumed simpler on/off
firing; this [[gh-formulation|formulation]] introduces the four-level intensity gradient as the
representational primitive.
