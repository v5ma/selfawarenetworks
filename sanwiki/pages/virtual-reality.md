# Virtual Reality

**Virtual reality (VR)** is a programmable sensorimotor environment. A headset estimates pose, renders a view from that estimate, returns visual and auditory consequences, and measures what the participant does next. Eye, hand, body, voice, physiological, and neural signals can be added to the loop.

```text
sense -> estimate -> render -> perceive -> act -> sense again
```

> **Scientific status:** VR can manipulate and measure action-conditioned sensory evidence. It does not establish that the cortex literally runs a graphics engine, that a rendered scene exposes an AI's private thoughts, or that immersion validates SAN, SIT, NAPOT, coherence-field, gamma, or theta claims. Perception-as-rendering is an SAN model whose neural mechanism must be tested independently.

## A controllable sensorimotor loop

VR allows an experimenter to alter one declared relation while logging the transformation:

- visual delay or jitter;
- hand or body position;
- viewpoint and reference frame;
- body geometry;
- correspondence between action and outcome;
- reliability of vision, sound, or touch;
- reward and task consequence; and
- the mapping from a physiological or neural feature to an environmental change.

This makes VR useful for testing body and world models. It does not make every headset a brain-computer interface.

## VR and BCI are overlapping, not identical

An ordinary headset primarily measures body motion and returns photons and sound. Neural reading begins when EEG, intracranial activity, fNIRS, or another neural measurement contributes to control. Direct neural writing begins when stimulation or another intervention acts on neural tissue.

A neural feature can control one virtual parameter without carrying that parameter's meaning. If alpha-band power changes the height of a cube, the designer supplied the feature-to-height mapping. The recorded signal does not contain a cube.

See [[brain-computer-interface]] for the required measurement, inverse, intervention, and adaptation models.

## Latency is a measured distribution

VR delay should be measured from calibrated cause and effect events. Motion-to-photon, tracker-to-render, decoder-to-actuator, stimulation-to-neural-effect, and complete sensorimotor-loop latency are different endpoints. Real pipelines overlap work, predict pose, queue frames, and drop data, so one advertised device number is insufficient.

Report median, upper quantiles, jitter, drop rate, clock uncertainty, and prediction error. Direct measurements show that motion-to-photon delay can differ at sudden movement onset and after prediction has accumulated movement history ([Warburton et al., 2023](https://doi.org/10.3758/s13428-022-01983-5)).

There is no universal psychological latency threshold. Delayed hand feedback can affect synchrony judgment, agency, ownership, control error, and discomfort differently ([Imaizumi and Asai, 2015](https://doi.org/10.3389/fnint.2015.00035); [Aoyagi et al., 2021](https://doi.org/10.1038/s41598-021-82154-y)).

## Virtual bodies test contingencies

Correlated visual and tactile evidence can alter reported limb ownership and perceived location ([Botvinick and Cohen, 1998](https://doi.org/10.1038/35784)). Immersive virtual-body experiments can separately manipulate viewpoint, seen body, touch, movement, and threat ([Slater et al., 2010](https://doi.org/10.1371/journal.pone.0010564)).

These findings show that body-related estimates use changing evidence. They do not demonstrate direct neural writing or one anatomical body-ownership center. Keep these outcomes separate:

- task control;
- agency;
- ownership;
- self-location;
- presence;
- comfort and cybersickness; and
- adverse experience.

A participant can control a cursor without owning it, report ownership without precise control, or locate a virtual limb differently from the biological limb.

## The SAN EEG-to-WebVR genealogy

Micah's surviving Neural Lace account describes a 2018 Noisebridge route in which Fourier-derived EEG features passed through a local server and WebSocket to JavaScript, Three.js, and A-Frame geometry:

```text
EEG -> frequency analysis -> local server -> WebSocket
-> browser geometry -> visual return
```

The original code and video have not been recovered at the current evidence gate. The route therefore establishes project genealogy and a plausible state-responsive-media architecture, not a controlled present capability demonstration.

Its durable contribution is the closed loop: the person's measured state changes the environment, the person perceives that consequence, and later state can change through attention, strategy, learning, or ordinary sensory response.

## SAN interpretation

SAN uses VR as an experimental analogue, not an anatomical identity claim. A controlled environment can test whether a proposed self-world state predicts how timing, geometry, reliability, or action consequence changes perception and behavior.

The relevant observer is not a little viewer watching a virtual scene. In SAN, observer-action is the distributed network and body process that receives evidence, maintains tonic context, registers consequential phasic changes, predicts, acts, and incorporates returning consequences.

[[napot|NAPOT]] or another SAN model earns work only if its declared variables predict held-out behavior and causal perturbations better than capacity-matched recurrent, state-space, predictive, or control models using the same measurements and calibration.

## Artificial Neurology and NerveGear

VR is an intermediate engineering environment for [[artificial-neurology]]. It can expose and perturb the sensorimotor consequences available to a person or artificial system. A visualization of an artificial model's state is a designed diagnostic readout, not direct access to subjective experience.

[[nervegear|NerveGear]] names a distant integrated target. A vivid headset, virtual body, EEG-controlled object, speech decoder, or stimulated percept is only one bounded capability. Full integration additionally requires validated reading, writing, embodiment, adaptation, transfer, privacy, consent, interruption, safety, maintenance, and exit.

## Related pages

- [[brain-computer-interface]]
- [[artificial-neurology]]
- [[neo-mind-cycle]]
- [[embodied-neural-rendering]]
- [[body-ownership]]
- [[reference-frames-cortical-knowledge]]
- [[napot]]
- [[nervegear]]
