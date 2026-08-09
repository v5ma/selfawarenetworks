# Neo Mind Cycle

Neo Mind Cycle was an early-2010s San Francisco neurofeedback program developed by
[[gh-resnote04|Micah Blumberg]]. Its durable contribution to the Self Aware Networks genealogy is
not a claim that scalp EEG decoded thoughts. It is a practical closed loop: measured activity was
transformed into changing light or sound, returned through the participant's senses, and allowed
to affect the next measured state.

```text
brain, body, and environment
    -> scalp voltage plus artifacts
    -> selected feature and software transformation
    -> changing light or sound
    -> perception, strategy, movement, and expectation
    -> changed brain, body, and environment
```

The program belongs at the beginning of the SAN story because it made a recurring problem
concrete: how can a biological network receive a transformed consequence of its own activity,
learn the relation, and use that relation in later perception or action?

## What the historical record establishes

The surviving sources describe scalp EEG, brainwave graphs, adaptive audiovisual output,
brainwave-entrainment software, participant sessions, equipment limitations, and a social salon
setting. They establish a hands-on feedback practice and research direction. They do not by
themselves establish clinical efficacy, increased intelligence, treatment of a disorder, detailed
thought decoding, or intentional control of every mapped audio parameter.

Scalp EEG measures voltage differences produced by spatially mixed population currents together
with ocular, muscular, movement, electrode, reference, and electronic contributions. It does not
record one neuron, one cortical column, or a complete mental state. The software feature and its
mapping to light or sound are therefore part of the experiment, not a transparent window into
thought.

The detailed instrumentation and medical boundary are maintained in
[[neo-mind-cycle-neurofeedback|Neo Mind Cycle Neurofeedback]]. The dated source family is maintained
separately in [[neo-mind-cycle-neurofeedback-bci-genealogy|Neo Mind Cycle Source Genealogy]].

## Command decoding versus brain-self-decoding

The internally dated May 18, 2012 source [[gh-a0083z|a0083z]] distinguishes two architectures:

1. **Machine-decoded command:** software classifies an EEG feature and maps it to a fixed action.
2. **Brain-self-decoded feedback:** software transforms measured variation into sensory feedback,
   and the participant learns the returned relationship inside the repeated loop.

The second architecture does not require software to decide that an EEG pattern means a specific
thought. It preserves a changing relation and returns it to the living receiver. The 2022
retrospective source [[gh-a0085z|a0085z]] calls this a "mirror of the brain to itself." That is a
first-person account of the research motivation, not evidence that consciousness literally moved
into the computer.

## From a feedback mirror to a spatial loop

The later [[neural-lace-podcast|Neural Lace Podcast]] generalized the same problem from one EEG and
audio-light apparatus to bidirectional interfaces involving the body, environment, spatial
computing, medical imaging, artificial intelligence, and controlled write-back.

The next engineering step was documented in the NeurotechSF and Noisebridge source family:

- [[gh-a0636z|a0636z]] identifies an April 2018 workshop effort to combine BCI, AI, and XR using
  open-source hardware and software.
- [[gh-a0546z|a0546z]], internally dated May 11, 2019, reports that the group connected changing
  electrical measurements to WebVR through a local signal pipeline, WebSocket, Three.js, and
  A-Frame, and records July and October 2018 demonstrations.
- [[neural-lace-podcast-s2e1-jean-rintoul-2018|Neural Lace Podcast Season 2 Episode 1]] preserves the
  public July 2018 project account.
- [[neural-lace-podcast-s2e3-kyle-mathewson-2020|Season 2 Episode 3]] later describes the pipeline
  and explains why EEG alone is insufficient for the richer imaging program.

These records support the history of an EEG-to-WebVR feedback pipeline. They do not establish that
the system reconstructed thoughts, formed a clinical BCI, or became a biological cortex.

## The temporary external-cortex hypothesis

SAN uses **external cortex** as a functional hypothesis, not an anatomical label. A display,
decoder, or generative model is not cortex merely because it is connected to a person. A coupled
external system becomes a candidate temporary extension of cognitive processing only when the
following properties are tested together:

1. **Reciprocity:** brain and body state change the external system, and its output returns through
   sensory or stimulation channels.
2. **State-dependent transformation:** the returned signal preserves or computes a useful relation
   rather than replaying an unrelated animation.
3. **Learned use:** the participant develops task-specific competence with the coupled loop.
4. **Causal participation:** delaying, scrambling, removing, or substituting the external component
   degrades the learned operation relative to appropriate controls.
5. **Embodied consequence:** the loop changes perception, decision, or action and receives the
   resulting sensory consequences.
6. **Reversibility and boundary testing:** performance with, without, and after the interface can be
   compared without implying permanent biological incorporation.

The corresponding minimal operator is:

```text
B(t) --machine transform M--> F(t + delta) --participant update P--> B(t + 1)
```

where \(B_t\) is a measured brain-body state, \(M\) is the declared machine transformation,
\(F\) is returned feedback, and \(P\) is the participant's perception-action update. Calling the
machine a temporary extension is warranted only if the coupled transformation is necessary for a
learned operation, not merely correlated with it.

## Established science, SAN interpretation, and open claim

**Established science:** Closed-loop interfaces can join recorded neural activity, external
control, returned sensory information, and learning. Bidirectional intracortical work has shown
active control with artificial tactile feedback ([O'Doherty et al.,
2011](https://doi.org/10.1038/nature10489)). Closed-loop BCI studies also show that learning is
shaped by existing population structure and by adaptation between user and decoder
([Sadtler et al., 2014](https://doi.org/10.1038/nature13665); [Orsborn et al.,
2014](https://doi.org/10.1016/j.neuron.2014.04.048)). These results do not validate Neo Mind Cycle
or SAN.

**Supported SAN interpretation:** Neo Mind Cycle, the Neural Lace research program, and the 2018
EEG-to-WebVR work form a continuous engineering genealogy from mirrored neural feedback toward
spatial, embodied, reciprocal interfaces.

**Open SAN hypothesis:** A sufficiently informative, learned, reciprocal, and causally necessary
human-machine loop may temporarily extend a person's cognitive processing. Whether any particular
system meets that standard must be demonstrated experimentally.

Clinical or cognitive claims require preregistered outcomes, appropriate sham or active controls,
artifact handling, adverse-event reporting, and transfer tests. The [CRED-nf consensus
checklist](https://doi.org/10.1093/brain/awaa009) provides a minimum design boundary for modern
neurofeedback studies.

## Why this matters to SAN

The participant's distributed brain-body network remains the receiver, learner, and actor. No
software display is a hidden observer, and no little viewer watches a completed render. The loop
instead provides an engineering ancestor for later SAN ideas about receiver-relative
transformation, recurrent sensory return, Neural Tuning, NAPOT, and observer-action distributed
across a coupled system.

The dedicated bridge page, [[neo-mind-cycle-neurofeedback-bci|Neo Mind Cycle to External Cortex]],
turns this history into a falsifiable architecture. The
[[bci-instrument-atlas|BCI Instrument Atlas]] places it within the wider progression from EEG to
multimodal measurement and intervention.

## Dated source boundary

The date written inside a note, the date of a public recording, and the date of its later Git
fixation are distinct evidence:

- [a0083z at its first recovered Git fixation](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0083z.md)
  preserves the internally dated May 18, 2012 decoding distinction.
- [a0085z at the same fixation](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0085z.md)
  preserves the later retrospective account of the 2012 experience.
- [a0636z at its first recovered Git fixation](https://github.com/v5ma/selfawarenetworks/blob/5360f6414909a2474129b2140ee0dc3112c93b6b/a0636z.md)
  identifies the April 2018 open BCI-AI-XR workshop origin.
- [a0546z at its first recovered Git fixation](https://github.com/v5ma/selfawarenetworks/blob/b62b428a164c6a8246642f86f92662d4e5e94eb8/a0546z.md)
  records the later account of the 2018 WebVR work.
- [the Neural Lace Season 2 transcripts at their recovered Git fixation](https://github.com/v5ma/selfawarenetworks/tree/09066e4b572ba36e145b3a1e0f31706fcc9388d6)
  preserve public 2018 and 2020 descriptions of the project and its measurement limits.

## Read next

- [[neo-mind-cycle-neurofeedback|Neo Mind Cycle Neurofeedback]]
- [[neo-mind-cycle-neurofeedback-bci|Neo Mind Cycle to External Cortex]]
- [[neo-mind-cycle-neurofeedback-bci-genealogy|Neo Mind Cycle Source Genealogy]]
- [[neural-lace-podcast|Neural Lace Podcast]]
- [[bci-instrument-atlas|BCI Instrument Atlas]]
- [[extended-brain-thought-density-hypertime|Extended Brain and Thought-Density Hypertime]]
- [[world-body-brain-semantic-coregistration|World-Body-Brain Co-Registration]]
