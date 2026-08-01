# Brain-Computer Interface

A **brain-computer interface (BCI)** measures a bounded physical signal related to nervous-system activity, estimates a declared task variable, and returns a designed consequence through a computer, device, body, or environment.

> **Scientific status:** A BCI does not receive an untouched thought. Its output is an inference produced from a participant, task, sensor, reference, preprocessing pipeline, model, calibration procedure, and feedback loop. Recording and stimulation are different causal problems. Successful control, speech decoding, or an evoked percept does not establish unrestricted mind reading, thought upload, shared consciousness, or NAPOT.

## Five layers commonly called the signal

1. **Biological state:** membrane and synaptic activity, spikes, metabolism, blood flow, muscle activity, movement, and network context.
2. **Sensor quantity:** electrode voltage, magnetic field, detected photons, impedance, or another physical measurement.
3. **Instrument transformation:** geometry, reference, coupling, gain, filtering, sampling, quantization, saturation, clocking, and noise.
4. **Model inference:** a class, trajectory, probability, source estimate, attempted word, or other declared variable.
5. **Consequence:** cursor motion, synthesized speech, stimulation, muscle activation, a virtual event, or another outcome returned to the participant.

These layers are causally related but not interchangeable. A classifier's weights are not automatically a map of biological sources. A useful task estimate need not uniquely reconstruct the neural state that produced the measurement.

## Four models inside an interface

### Measurement model

What physical sources and confounds can reach the instrument, and how does the device transform them into recorded values?

### Inverse or decoding model

Which hidden state or task variable is estimated from the arrived measurements? What uncertainty, calibration, leakage, and generalization limits apply?

### Intervention or writing model

What cells, pathways, body state, behavior, or reported experience should change when the system acts? What dose, timing, geometry, reversibility, and off-target effects apply?

### Adaptation model

How do participant strategy, neural activity, tissue, electrodes, decoder, task distribution, and stimulation response change during use?

High decoding accuracy cannot validate an implausible measurement model, guarantee safe stimulation, or establish longitudinal stability.

## Reading is task-bounded inference

Implanted systems have decoded trained attempted speech into text, synthesized voice, or avatar motion in individual participants ([Willett et al., 2023](https://doi.org/10.1038/s41586-023-06377-x); [Metzger et al., 2023](https://doi.org/10.1038/s41586-023-06443-4); [Littlejohn et al., 2025](https://doi.org/10.1038/s41593-025-01905-6); [Wairagkar et al., 2025](https://doi.org/10.1038/s41586-025-09127-3)). These are substantial assistive achievements.

Their precision is part of the claim: particular participants, implants, cortical locations, attempted actions, vocabularies, training data, model families, and feedback channels were used. Attempted speech under a protocol is not general access to every unspoken thought.

A complete reading claim states:

- participant and clinical condition;
- sensor, location, reference, and sampling method;
- attempted or observed task;
- target output and error measure;
- calibration time and participant burden;
- held-out split and leakage controls;
- same-session, later-session, cross-task, or cross-person generalization;
- uncertainty, failure, and abstention behavior.

## Writing is not inverse recording

A sensor combines activity over its sensitivity field. A stimulator injects energy through tissue geometry, impedance, orientation, dose, waveform, timing, and state. Replaying a recorded voltage does not recreate the distributed sources that generated it.

Bounded writing achievements include:

- artificial tactile feedback through somatosensory-cortex stimulation ([Flesher et al., 2021](https://doi.org/10.1126/science.abd0380));
- recognizable form percepts from dynamic visual-cortex stimulation ([Beauchamp et al., 2020](https://doi.org/10.1016/j.cell.2020.04.033));
- decoded cortical control of forearm-muscle stimulation ([Bouton et al., 2016](https://doi.org/10.1038/nature17435)); and
- a brain-spine interface joining cortical decoding to patterned spinal stimulation ([Lorach et al., 2023](https://doi.org/10.1038/s41586-023-06094-5)).

These results do not turn cortex into a pixel display or establish arbitrary sensory upload. A write claim requires target, dose, waveform, timing, state, endpoint, blinded assessment, off-target measures, reversibility, adaptation, and follow-up.

## Co-adaptation

Once a person sees a cursor, hears synthesized speech, or feels artificial touch, the consequence becomes new sensory input. The participant can learn a strategy while the decoder, sensor relationship, and neural population also change. A BCI is therefore a coupled learning system, not a one-way pipe attached to a timeless code.

Stabilization and intent recovery remain distinct. Manifold alignment can restore performance under recording changes without independently observing moment-to-moment intention ([Degenhart et al., 2020](https://doi.org/10.1038/s41551-020-0542-9)). Closed-loop decoder adaptation and neural plasticity can jointly create a new control strategy ([Orsborn et al., 2014](https://doi.org/10.1016/j.neuron.2014.04.048)).

## Virtual reality as an intermediate loop

Ordinary VR mainly measures body motion and returns photons, sound, and sometimes touch. It is a programmable sensorimotor interface, not automatically a BCI. Neural reading begins when EEG, intracranial activity, fNIRS, or another neural measurement contributes to control. Direct neural writing begins when stimulation or another intervention acts on neural tissue.

VR can nevertheless test action-conditioned body and world models by manipulating delay, viewpoint, hand position, geometry, reliability, reward, and sensory consequence. Agency, ownership, self-location, presence, control, comfort, and performance must be measured separately.

The recovered SAN EEG-to-WebVR route is a useful historical example:

```text
EEG -> frequency analysis -> local server -> WebSocket
-> browser geometry -> visual return to the participant
```

If alpha power changes a cube's height, the application designer supplied the mapping. The EEG feature does not contain the cube's shape or semantic meaning.

## SAN and Artificial Neurology

SAN treats an interface as a recurrent person-device-environment system. It asks whether receiver-relative timing, waveform, duration, magnitude, learned state, and route improve prediction or control beyond strong source-informed recurrent and state-space alternatives.

[[napot|NAPOT]] would add scientific work only if its repeated receive-transform-project account improves a declared inverse or intervention model under matched measurements, labels, calibration, feedback, capacity, and compute. A positive result in one loop would remain evidence for that bounded interface relation, not consciousness in general.

This is one engineering bridge into [[artificial-neurology]]. Artificial Neurology additionally asks how perception, memory, value, action, development, and governance should be joined in an artificial system. BCI success does not automatically supply that complete architecture.

## Safety, consent, and governance

The [FDA's implanted-BCI guidance](https://www.fda.gov/media/120362/download) addresses nonclinical testing and clinical considerations for devices intended for people with paralysis or amputation. Decoder accuracy is only one element of biocompatibility, electrical and mechanical safety, software control, human factors, risk, and clinical outcome.

UNESCO adopted its [Recommendation on the Ethics of Neurotechnology](https://www.unesco.org/en/legal-affairs/recommendation-ethics-neurotechnology) on 11 November 2025. It addresses autonomy, integrity, consent, withdrawal, neural and inferential data, accountability, and whole-life-cycle governance. It is a normative recommendation, not a device certification or substitute for applicable law.

Withdrawal and emergency interruption are different. A participant must be able to withdraw according to the approved protocol. An active system also needs a local, tested route to enter a hazard-appropriate degraded or safe state under loss of tracking, stale models, power failure, unsafe stimulation, or an acknowledged interruption request.

## Capability ladder

1. State-responsive media.
2. Intentional task control.
3. Embodied calibration.
4. Bounded content reconstruction.
5. Targeted intervention.
6. Adaptation and governance.

The tracks can advance independently. Their integration is an additional claim. [[nervegear|NerveGear]] names a distant conjunctive target involving coordinated sensory, motor, adaptive, safety, consent, interruption, maintenance, and exit capabilities. No present headset, decoder, avatar, or stimulated percept earns that complete label.

## Related pages

- [[artificial-neurology]]
- [[neo-mind-cycle]]
- [[virtual-reality]]
- [[nervegear]]
- [[artificial-perception]]
- [[neural-tuning]]
- [[napot]]
- [[feedback-strange-loops-self-model]]
