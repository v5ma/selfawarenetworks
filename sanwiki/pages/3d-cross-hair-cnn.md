![3D Cross-Hair CNN](../assets/generated/san/3d-cross-hair-cnn/3d-cross-hair-cnn-20260702-v1.png)

This plate compares cubic 3D convolution with cross-hair planar sampling, then shows the SAN analog: dendritic arbors sampling constrained geometric footprints rather than full volumetric neighborhoods.

A 3D cross-hair CNN replaces standard cubic 3D filters with three orthogonal 2D planar filters (one per axis), reducing parameters from K³ to 3K² and operations from 2K³ to 6K². Presented by Giles Tetteh and Marie Piraud (TU Munich / NVIDIA GTC 2018), the architecture achieves 20-23% faster execution and ~40% fewer parameters on 128³ volumes.

## Structural logic

A traditional 3D convolution applies a K×K×K kernel, which grows cubically. The cross-hair decomposition treats the three orthogonal planes as independent 2D filters and combines their outputs — a factorization that preserves spatial context while cutting cost. This is analogous to [[fractal-pattern]] compression: redundant information in adjacent planes is shared rather than re-encoded.

## Relevance to SAN

The cross-hair pattern has a direct [[fractal-pattern]] analog in cortical organization: the brain does not apply isotropic 3D integration everywhere. [[dendritic-computation-network-detection]] shows that dendrites compute within constrained geometric footprints, not full spherical neighborhoods. Cross-hair CNNs rediscover this efficiency principle in a learning system.

The efficiency gain also maps to the SAN principle in [[consciousness-as-high-bandwidth-choice-mechanism]]: conscious processing handles high-bandwidth spatial data by selective axial sampling rather than full volumetric integration at every step.

## Applications noted in source

- Medical imaging segmentation (MRI/CT)
- 3D volumetric video rendering
- Brain-machine interfaces and [[neural-tomography]]
- Autonomous vehicle perception

## Related

- [[dendritic-pattern-detection]] — biological analog of spatially-constrained feature detection
- [[fractal-neural-scale-hierarchy]] — scale-adaptive processing patterns
- [[neural-tomography]] — volumetric brain imaging where this architecture applies
