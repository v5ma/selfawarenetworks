# Convolutional Neural Networks

**Convolutional Neural Networks** (CNNs) are the [deep-learning](deep-learning-neural-networks.md) architecture in which trainable filters are convolved across spatially structured input, most famously images, to produce hierarchical feature maps. In the [Self-Aware Networks](self-aware-networks.md) (SAN) corpus they appear in two distinct registers: as the *non-explanation* template SAN explicitly rejects ("they spike and then CNNs and then magic"), and as a concrete engineering tool that the corpus's [3D Cross-hair CNN](3d-cross-hair-cnn.md) / [3D semantic segmentation](3d-semantic-segmentation.md) research lane actually builds with.

The corpus's first register is critical. CNNs are invoked as a placeholder that explains nothing about [consciousness](consciousness.md): SAN cites the bad-explanation pattern of "they spike, send their spikes, and then convolutional neural networks and then magic stuff we don't know about yet happens" as exactly the kind of black-box hand-wave the [NAPOT](neural-array-projection-oscillation-tomography.md) program is designed to replace with a mechanistic [oscillator](oscillator.md)-and-[phase](phase-precession.md)-based account. [a0209z](gh-a0209z.md) summarises the empirical result that motivates the temptation in the first place: "recent work has shown that deep convolutional neural networks (CNNs) trained on large-scale image recognition tasks can serve as strikingly good" models of biological visual cortex ([a0209z](gh-a0209z.md), line 27). That claim is consistent with Yamins et al. 2014, which reports that performance-optimized hierarchical models predicted neural responses in higher [visual cortex](visual-cortex.md) ([PNAS, doi:10.1073/pnas.1403112111](https://doi.org/10.1073/pnas.1403112111)). SAN takes that fit seriously without conceding that CNNs *explain* visual cortex; in the SAN reading, the fit is evidence that both systems happen to compute something similar, not that the brain *is* a CNN.

The corpus's second register is constructive. The [3D Cross-hair Convolutional Neural Networks](3d-cross-hair-cnn.md) research lane is named directly. [a0223z](gh-a0223z.md) points to the Medium write-up "https://medium.com/silicon-valley-global-news/3d-cross-hair-convolutional-neural-networks-5d39e2b565ca" ([a0223z](gh-a0223z.md), line 5). [a0264z](gh-a0264z.md) places the technique in a working stack: "Electrical Impedance Tomography, again with WebVR, another VR headset, Volumetric Video and 3D Cross-hair Convolutional Neural Networks. The goal is to create or acquire a 3D experience, to acquire 3D medical imagining" ([a0264z](gh-a0264z.md), line 9). [a0371z](gh-a0371z.md) and [a0546z](gh-a0546z.md) both surface the recruiting note: "This group is interested in PointNet http://stanford.edu/~rqi/pointnet/ and in 3D cross hair convolutional neural networks" ([a0371z](gh-a0371z.md), line 78; [a0546z](gh-a0546z.md), line 23). [PointNet](point-cloud-neural-representation.md) is a documented [point-cloud](point-cloud.md) architecture for 3D classification and segmentation ([Qi et al. 2017, arXiv:1612.00593](https://arxiv.org/abs/1612.00593)). Together these establish that SAN treats CNNs as an active engineering ingredient, particularly for [3D point clouds](point-cloud.md), [3D semantic segmentation](3d-semantic-segmentation.md), [volumetric video](sensory-stabilized-volumetric-rendering.md), [WebVR](webxr-bci-integration.md), and electrical impedance [tomography](tomography.md), even while critiquing the CNN-as-consciousness-explanation move.

The two registers reinforce a single SAN methodological commitment: tools matter, but tools that work do not by themselves explain *why* they work. Use this slug whenever a SAN page wants to discuss CNNs as engineering machinery (link to [3D Cross-hair CNN](3d-cross-hair-cnn.md) for the in-house variant) or as a foil for what mechanistic [NAPOT](neural-array-projection-oscillation-tomography.md)-grade explanations need to do better than.

## Related concepts

- [3D Cross-hair CNN](3d-cross-hair-cnn.md): the SAN-internal CNN variant for 3D point-cloud work.
- [3D semantic segmentation](3d-semantic-segmentation.md): the application area the in-house CNN serves.
- [PointNet](point-cloud-neural-representation.md): the adjacent Stanford architecture the corpus pairs with CNNs.
- [Deep learning neural networks](deep-learning-neural-networks.md): the parent technology.
- [Visual cortex](visual-cortex.md): the biological system CNNs sometimes match in image-recognition tasks.
- [NAPOT](neural-array-projection-oscillation-tomography.md): the mechanistic alternative SAN proposes for explaining what CNNs only model.
- [Volumetric video](sensory-stabilized-volumetric-rendering.md), electrical impedance [tomography](tomography.md), and [WebVR](webxr-bci-integration.md): adjacent tools in the same engineering stack.
- [Brain-computer interfaces](brain-computer-interfaces.md): downstream application of the 3D-imaging stack.
- [Self-Aware Networks](self-aware-networks.md): umbrella program.

## Source Provenance

- Evidence count: 38
- Source ids: [GPT2023X](gh-gpt2023x.md), [GPT2024Jan1toJan22](gh-gpt2024jan1tojan22.md), [Hex_7](gh-hex-7.md), [NotebookML_6_Collection](gh-notebookml-6-collection.md), [SAOv9](gh-saov9.md), [a0163z](gh-a0163z.md), [a0209z](gh-a0209z.md), [a0223z](gh-a0223z.md), [a0264z](gh-a0264z.md), [a0371z](gh-a0371z.md), [a0546z](gh-a0546z.md), [a0616z](gh-a0616z.md), [a0631z](gh-a0631z.md), [b0144y](gh-b0144y.md), [b0296y](gh-b0296y.md), [c0000x](gh-c0000x.md), [c0001x](gh-c0001x.md), [c0004x](gh-c0004x.md), [nlps2e2](gh-nlps2e2.md), [oldhome](gh-oldhome.md), [original_archived_b0195ygoogle](gh-original-archived-b0195ygoogle.md), [vecA](gh-veca.md), [vecB](gh-vecb.md)
  - `a0163z` line 4 -> https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0163z.md
  - `a0209z` line 27 -> https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0209z.md
  - `a0223z` line 5 -> https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0223z.md
  - `a0223z` line 7 -> https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0223z.md
  - `a0223z` line 46 -> https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0223z.md
  - `a0223z` line 48 -> https://github.com/v5ma/selfawarenetworks/blob/d1c26a6fbf273695185a4036411215f53209eb71/a0223z.md
- Generated: 2026-04-24T18:22:00
- Lane: C.draft (from packet)
- Packet: `wiki/automation/packets/convolutional-neural-networks.json`

---

*Auto-generated draft (Lane C, deterministic synthesis from packet). Lane D adds wiki links. Lane E (single-flight, manual) promotes to `wiki/reference/selfawarenetworks-legacy-wiki/`.*
