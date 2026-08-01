A [[neural-lace|Neural Lace]] Podcast episode recorded at the GTI 2017 GPU Technology Conference, featuring Jules Urbach, CEO of [[otoy]] (OTOY Inc.), discussing volumetric video, photorealistic cloud rendering, and the information pipelines that underlie immersive experience.

## Core content

Urbach describes OTOY's pipeline: 6-degree-of-freedom camera capture → point cloud → Orbx volumetric format → streamed GPU render → mobile/VR display. The stack includes [[octane-render]] (rendering), Lightstage (capture), and Orbx (distribution). Cloud rendering pipelines convert 6DOF camera data into shareable volumetric scenes compatible with Unity and similar engines.

The vision articulated: photorealistic interactive environments indistinguishable from reality — echoing the *Ready Player One* scenario. This connects to [[neural-lace]] as a concept by framing bandwidth and latency bottlenecks in the information pipeline as the limiting factor separating current XR from genuinely neural-quality immersion.

## SAN relevance

From a [[self-aware-networks]] perspective the episode surfaces two cross-ref threads:

1. **Information-pipeline bottleneck as cognitive analog** — the same bandwidth constraint that limits volumetric streaming to a headset is structurally parallel to the bottleneck in sensory encoding between retina and cortex. [[napot]] predicts that the brain solves this via predictive compression across scales; volumetric streaming solves it via GPU-side decompression at the edge.

2. **Volumetric capture as proto-neural-lace input** — Lightstage 6DOF point-cloud capture is an early physical instantiation of what [[neural-lace]] technology would eventually do at the neural level: read a high-dimensional state and distribute it as a shareable, navigable representation.

## Outbound links

- [[neural-lace]] — the overarching concept this podcast series explores
- [[otoy]] — Jules Urbach's company; Octane Render + Lightstage + Orbx stack
- [[napot]] — Neural Array Prediction Oscillation Theory; compression-by-prediction analogy
- [[information-pipeline]] — bottleneck framing recurring in SAN writing
- [[self-aware-networks]] — parent theoretical framework

## History

Recorded at GPU Technology Conference 2017. Published on Medium by [[gh-resnote04|Micah]] Blumberg]] as part of [[neural-lace-podcast|the [[neural-lace|Neural Lace]] Podcast]] series exploring intersections between emerging hardware and neural interface theory.
