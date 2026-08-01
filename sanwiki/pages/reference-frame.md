# Reference Frame

A **reference frame** declares what a location, orientation, feature, or state variable is measured relative to. Examples include eye-relative target location, head-relative sound direction, body-relative touch, object-relative feature position, and environment-relative heading.

> **Evidence boundary:** Reference frames are established analytical descriptions and neural response properties. The proposal that every cortical column implements one grid-like object model is associated with Hawkins and Numenta. SAN's proposal that tonic and phasic activity help maintain receiver-relative relations is an additional hypothesis.

## What a valid claim must specify

A neural reference-frame claim should name:

- the represented variable;
- its origin and orientation;
- species, area, layer, and cell population;
- sensory and movement conditions;
- whether the evidence is single-unit firing, population geometry, field potential, or imaging;
- the receiver or behavior that uses the relation.

A decoder recovering a variable does not prove that every neuron stores it, that a downstream population uses it, or that an inner observer reads it.

## Mixed and partial transformations

Neural populations need not progress through a mandatory eye-to-head-to-body-to-world pipeline. Macaque intraparietal recordings include eye-centered, head-centered, and complex visual and auditory codes ([Mullette-Gillman, Cohen, and Groh, 2005](https://doi.org/10.1152/jn.00021.2005)). Such populations can support later transformations while retaining mixed coordinates.

Likewise, place, grid, direction, boundary, and object-related cells supply different spatial variables. They should not be collapsed into one universal reference-frame cell type.

## SAN extension

SAN proposes that a receiving population evaluates a phasic update against its maintained tonic context, connectivity, pose, task, and recent history. The tonic field is therefore a candidate **receiver context**, not automatically a spatial coordinate and not one fixed frequency band. The phasic signal is a candidate differentiated update, not universally a prediction error.

A SAN-specific result must demonstrate an incremental receiver-relative timing or amplitude relation beyond firing-rate geometry, connectivity, movement variables, and conventional recurrent models. Selective perturbation should produce a predicted frame-specific failure and rescue.

## Read next

- [[reference-frames]]
- [[reference-frames-cortical-knowledge]]
- [[cortical-columns-reference-frames]]
- [[tonic-powerband-reference-frames]]
- [[phase-language-firewall]]
