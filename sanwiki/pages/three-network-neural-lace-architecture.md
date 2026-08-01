A three-tier neural network stack proposed in the April 2017 [[neural-lace|Neural Lace]] Podcast for decoding and eventually writing brain states via the [[neural-lace-brain-port]].

## The Three Networks

**Network A — External world model**: A computer-vision neural network continuously categorizes objects and events in the sensory environment. This is the [[gh-a0206z|self]]-driving-car-style scene parser — "this is a cup, this is a car, the car is moving fast."

**Network B — Internal brain model**: A second neural network applied to live medical imaging data from sensors targeting the mid-brain / thalamic convergence zone. Captures the tempo-spatial electromagnetic pattern of neural activity *before* it scatters across the neocortex.

**Network C — Apex correlator**: A third neural network sitting above A and B. It learns the mapping between what world-signals Network A is observing and what brain-signals Network B is recording. Once trained, it can decode brain state from neural signals alone — no camera needed — because it has learned the neural correlates of specific perceptual and task states.

## Why Target Mid-Brain / Thalamus

Cortical representations are sparse and distributed: the cat-concept and the motorcycle-concept occupy different regions. At the thalamic convergence zone, inbound sensory streams meet and outbound cortical feedback returns — creating a denser integration point. Sensors placed there (potentially through the nasal canal or via non-invasive ultrasonic stimulation) capture the signal both before it scatters outward and again as it back-propagates inward. See [[thalamic-convergence-zone]].

## Multimodal Sensor Stack

The architecture does not require implants for its commercial form. The sensor layer includes: EEG, eye tracking + pupil dilation, heart rate, motion controllers, wrist-based biometrics, all fused into a single time-locked data stream (cf. open-source Narrow Pipe / EEGLAB architectures). Deep learning then treats the multi-stream time series as a spatiotemporal pattern to decode. See [[multimodal-biosensor-fusion]].

## Neural Communication Protocol

A key open question the episode poses: once we can decode brain patterns, we need to know the brain's **communication protocol** — TCP-like (ordered, feedback-verified) or UDP-like (fast, packet-loss tolerant) — to write back correctly. See [[neural-lace-brain-port]] for the full read-write architecture and [[brain-tcp-udp-analogy]] for the protocol-question framing.

## Practical Applications Cited (2017)

Parkinson's disease restoration; spine reconnection across severed gaps; intuitive artificial-limb control; telepresence robotics (SpaceVR context: users control a humanoid robot through neural intent rather than physical input). All framed as direct consequences of decoding the brain's transmission protocol.

## History

First public exposition in [[neural-lace|Neural Lace]] Podcast Episode 2, April 13, 2017 (with Blaise Sanders, CTO of SpaceVR). Companion to Episode 1 which introduced the brain-port concept.
