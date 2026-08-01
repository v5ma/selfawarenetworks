![Dendritic Leaky-Membrane Coincidence Filter](/v5ma.github.io/wiki/assets/generated/san/dendritic-leaky-membrane-coincidence-filter/dendritic-leaky-membrane-coincidence-filter-20260628-v2.png)

This page-specific SAN image isolates the core mechanism: membrane leak dissipates an isolated dendritic input, while coincident inputs arriving inside the same narrow temporal window sum above a branch-local threshold and propagate as a local dendritic spike.

Dendrites act as **coincidence filters** because their membranes are leaky: a single
arriving phase signal dissipates before it can propagate unless a coinciding signal
arrives within the same narrow temporal window. The leaky membrane is therefore the
physical basis of [[coincidence-detection-neural-bit|coincidence detection]], not a
design flaw to be overcome.

## Mechanism

1. A synapse fires, injecting a phase signal into a dendritic branch.
2. The membrane leaks the charge over time — without a coincident input, nothing
   propagates toward the soma.
3. When two or more phase signals arrive near-simultaneously, the combined charge
   exceeds the leak rate and propagates as a local dendritic spike.
4. Many simultaneous dendritic spikes summate at the soma. When summed input crosses
   the soma's firing threshold, a burst event occurs.

## Soma burst as a percentage readout

The burst event encodes a *percentage* of pattern match: the neuron's synaptic
configuration represents a stored template, and the burst's rate or timing signals
roughly what fraction of that template's features were simultaneously active in the
current moment. A high-rate burst ≈ "80% pattern match"; a weak burst ≈ "30%."

This is a continuous confidence signal, not a binary spike, consistent with
[[action-potential-waveform-encoding]] and [[napot]]'s oscillatory interpretation
of spiking.

## Relation to SAN

This mechanism is the cellular implementation of the prediction-matching described
in [[napot]]. The stored synaptic pattern IS the neuron's prediction; the burst
IS the prediction error (or confirmation) signal. [[Dendritic-compartmentalization]]
allows multiple independent predictions to run in parallel within a single cell.

## Outbound links

- [[coincidence-detection-neural-bit]] — the information unit enabled by this filter
- [[dendritic-compartmentalization]] — how the same cell runs multiple filters in parallel
- [[napot]] — oscillatory framework where this filtering implements perception
- [[neural-anti-bit]] — the splay state as the failure to trigger the leaky membrane
- [[action-potential-waveform-encoding]] — how the burst encodes analog confidence
