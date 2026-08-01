# Metatron Computational Unit

The **Metatron** is SAN's name for a proposed artificial-neurology unit that restores selected
spatial, temporal, recurrent, inhibitory, and plastic variables omitted by a basic point-unit
model. It is a research specification, not an established biological cell type, a complete
artificial neuron, or a component proven sufficient for consciousness.

## A comparison that keeps both sides accurate

| Basic point-unit abstraction | Candidate Metatron implementation |
|---|---|
| Inputs reduced to weighted features | Inputs may retain branch, location, time, and receiver context |
| Little or no state inside the basic unit | Explicit membrane-like, recurrent, inhibitory, and plastic state |
| Usually one scalar output per step | A declared output vector may include activation, timing, duration, or phase |
| Learning primarily changes parameters | Learning may also change thresholds, routing, compartments, or structure |
| Unit boundary is mathematically fixed | Boundary may be one unit, a compartmental unit, or a bounded assembly |

Modern artificial networks already exceed the original threshold-unit picture: hidden layers,
convolution, recurrence, attention, selective state-space models, and vector-valued latent states
can supply operations absent from one point unit. The Metatron proposal therefore cannot earn its
name merely by being "richer than a Perceptron." Its additional state must provide reproducible
value against strong contemporary baselines.

## Biological donors and their limits

Established cellular physiology motivates candidate features:

- dendritic location and input order can affect integration;
- dendritic branches can exhibit nonlinear local events;
- inhibition, membrane state, adaptation, and neuromodulation alter responses;
- presynaptic action-potential waveform can affect calcium entry and transmitter release; and
- synaptic and dendritic structure changes with learning.

These findings do **not** establish a universal `0/1/2/3` vesicle code. Action-potential width,
calcium influx, vesicle release, and postsynaptic effect are related but distinct measurements.
Release is probabilistic, synapse-specific, and capable of multivesicular events; it must not be
collapsed into one fixed four-level channel.

Recent mouse work further showed that apical tuft dendrites of layer 5b pyramidal neurons in
anterolateral motor cortex contributed to flexible relearning and carried rule-dependent clustered
input. This is evidence for a specific context-sensitive dendritic computation, not proof that all
cortical regions use the same circuit or that an artificial copy would reproduce cognition.

- [Dendritic integration and sequence discrimination](https://doi.org/10.1126/science.1189664)
- [A human cortical neuron with complex dendritic computation](https://doi.org/10.1126/science.aax6239)
- [Tuft dendrites and flexible learning](https://doi.org/10.1126/science.adx4358)
- [Action-potential waveform and transmitter release](https://doi.org/10.1523/JNEUROSCI.17-10-03425.1997)

## Operational definition

A candidate unit should declare its boundary and state explicitly:

```text
M_t = {spatial input state, activation state, timing or phase,
       inhibition, recurrent context, plastic state, body or task context}

(M_(t+1), output_t) = F(M_t, input_t, modulatory_input_t)
```

Not every implementation needs every variable. Each variable must have a unit, measurement rule,
update rule, receiver, and ablation. A cell assembly counts as a higher-scale Metatron only when it
has a reproducible input-state-output boundary rather than merely correlated activity.

## Tonic canvas and phasic ink

In the SAN interpretation, maintained tonic population activity supplies receiver context or a
working canvas, while relatively differentiated phasic events supply state-changing ink. These are
proposed operational roles, not decorative metaphors. A Metatron experiment should test whether
explicit tonic context and phasic departures improve prediction, reconstruction, routing, or
adaptation beyond equal-capacity recurrent and state-space controls.

No inner viewer is added. Observation is attributed to the distributed loop that maintains state,
registers differences, predicts consequences, acts, receives reafference, and updates.

## Rejection test

Compare the proposed unit with strong point-unit, recurrent, spiking, active-dendrite, and
compartmental baselines under matched data, capacity, compute, tuning, and calibration. Remove each
extra feature separately. The engineering proposal narrows or fails when the extra variables do not
improve held-out performance, robustness, adaptation, biological fit, or explanatory precision.

## Read next

- [[perceptron-deep-learning-metatron|From the Perceptron to Deep Learning to the Metatron]]
- [[artificial-neurology|Artificial Neurology]]
- [[tonic-phasic-phase-wave-differential|Tonic, Phasic, and Phase-Wave Differential]]
- [[receptive-inceptive-dendritic-projection|Receptive, Inceptive, and Dendritic Projection]]
- [[san-scale-ladder-and-claim-boundaries|SAN Scale Ladder and Claim Boundaries]]
