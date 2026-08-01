Neural sequence representation is the mechanism by which the brain encodes perceptual experiences as ordered sequences of neuron firings — different neural groups taking turns rendering successive temporal frames of a unified percept.

## Core Idea

Consider a box moving left to right in the visual field. As each frame of that motion unfolds, a different group of neurons fires to represent that specific moment. Over milliseconds, a large sequence of neurons steps through these frames — each firing event is a discrete representational unit for one slice of the experience. The percept is distributed across time, not stored in any single location.

This sequential-rendering property explains why perceptual experience has temporal grain: the brain is literally cycling through neural groups that each "own" a moment of the pattern.

## Hierarchical Pattern Binding

At each frame, the representation is itself hierarchically nested:

- **Micro-patterns** (sub-features): individual neurons or small groups detect specific properties — the sticker on the box, its color, a line on its surface.
- **Mid-level patterns**: a group assembles a coherent object image; another assembles its associated sound; another the tactile expectation.
- **Higher-level neurons**: triggered by the concurrent firing of multiple mid-level groups, binding the multi-modal percept into a unified representation.

Crucially, neurons fire together because they previously fired together — [[hebbian-learning]] ties co-active cells, making future co-activation more likely. The higher-level representation is stored as the weight pattern linking all the lower-level co-activators.

## Memory as Learned Playback

Learned skills and memories are stored as sequences of neural firing. Execution is playback: to perform a hand movement, the brain replays the learned firing sequence that grades into the motor output. Complex tasks are accomplished by chaining many such sequences.

This makes [[working-memory]] a "spatial notepad" — a substrate for holding and manipulating sequences long enough to organize them into higher-order strategies, which [[gh-resnote04|Micah]] proposes is the distinguishing feature of advanced intelligence.

## Relationship to NAPOT

[[napot]] ([[neural-array-projection|Neural Array Projection]] Oscillation Tomography) provides the oscillatory binding mechanism that coordinates these sequences: [[phase-wave-differential]]s propagate through tonic oscillating groups, integrating sequential frame representations into coherent 3D + time renderings. The sequence-box concept describes *what* gets represented frame by frame; NAPOT describes *how* the frames are bound into a unified experience.

## Outbound Links

- [[napot]] — oscillatory binding mechanism that integrates sequential frames
- [[phase-wave-differential]] — the wave units propagating between neural groups during sequence integration
- [[hebbian-learning]] — associative weight changes that store co-firing patterns as future playback sequences
- [[working-memory]] — the spatial notepad enabling complex multi-step task sequencing
- [[phenomenological-consciousness]] — the unified experiential result of sequence rendering across neural arrays
