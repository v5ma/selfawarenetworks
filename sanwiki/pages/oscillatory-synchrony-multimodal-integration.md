![Oscillatory Synchrony Multimodal Integration](../assets/generated/san/oscillatory-synchrony-multimodal-integration/oscillatory-synchrony-multimodal-integration-20260702-v1.png)

This plate shows the page's central mechanism: separate sensory and physiological streams become a unified percept when their oscillatory activity is aligned inside a shared temporal window, allowing cross-modal spike correlation and phase-locked cortical assemblies.

Temporary synchronicity among oscillating brainwaves as the mechanism by which the brain binds different sensory data streams into unified experience. Tim Mullen's [[neuropype]] software makes this concrete: it assigns synchronized timestamps across heterogeneous sensor modalities (EEG, ECG, eye-tracking, pupil dilation), allowing spike-correlation across streams — a plausible computational analogy for how neural assemblies time-lock across cortical areas.

## Core Idea

Neuropype's design — independent sensor streams unified by a shared time-code — mirrors the [[phase-wave-differential]] account in SAN: binding is temporal, not spatial. Two signals (e.g., an EEG alpha burst and a saccade) become a single percept when they co-occur within the same oscillatory window, not because they share a processing module.

This is the technologist's entry point into [[neural-oscillation-synchrony]]: if you want to *build* a system that integrates EEG + ECG + gaze, you cannot merge raw samples — you must align them in time. The brain faces the same problem and appears to solve it with the same strategy.

## BCI Application

Combining EEG, ECG, eye-tracking, and pupil dilation provides a real-time readout of cognitive + affective state. Deep-learning classifiers trained on these aligned streams can predict user intent (saccade direction) and emotional valence (heart-rate + EEG correlates), producing an interface that responds to *what you mean*, not just *what you click*.

This connects to [[affective-computing]] and [[intention-decoding]] as applied SAN themes: if the brain is a [[gh-a0206z|self]]-aware network]] that predicts its own inputs, a BCI that reads those predictions externally can close the loop.

## Related Concepts

- [[neuropype]] — Tim Mullen's open-source multimodal sensor pipeline (Intheon / UCSD)
- [[phase-wave-differential]] — SAN mechanism for oscillatory binding
- [[neural-oscillation-synchrony]] — cross-area synchrony as information transfer
- [[affective-computing]] — emotion-state inference from biosensors
- [[intention-decoding]] — predicting user intent from neural/physiological signals
- [[glass-brain]] — Mullen's EEG visualization demonstrating real-time cortical dynamics

## History

Note [[gh-a0121z|a0121z]] was written circa 2016, when Mullen spoke at [[gh-resnote04|Micah]]'s SF events. The framing was exploratory (BCI for AR/VR headsets + affective UI). The SAN theoretical grounding — that oscillatory synchrony is the *why* behind multimodal binding — came later as NAPOT developed.
