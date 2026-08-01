Semantic cortical mapping is the empirical project of systematically charting which brain regions respond to which meaning categories using data-driven fMRI methods. The landmark result (Huth et al., 2016) showed that the semantic system is organized into **~140 tiled, domain-selective areas** whose arrangement is broadly consistent across individuals.

## Huth et al. 2016 method

Seven subjects listened to 2+ hours of natural narrative stories (The Moth Radio Hour) in an fMRI scanner. Each word was embedded in a 985-dimensional semantic space built from word co-occurrence statistics. Voxel-wise modeling (VM) estimated how each brain voxel's activity varied with word meaning across time.

Principal components analysis on the estimated models revealed **four shared semantic dimensions** across subjects:
1. Social/emotional/violent ↔ perceptual/locational (largest axis of variation)
2. Perceptual (visual, tactile) ↔ non-perceptual (mental, professional, temporal)
3–4. Weaker dimensions capturing finer distinctions

K-means clustering identified 12 semantic categories: *tactile, visual, numeric, locational, abstract, temporal, professional, violent, communal, mental, emotional, social*.

## PrAGMATiC atlas

The **PrAGMATiC** algorithm (Probabilistic And Generative Model of Areas Tiling the Cortex) modeled this semantic space as a Voronoi tessellation of area centroids joined by a spring network. Centroids are shared across subjects; exact locations vary individually. The resulting atlas identified 77 semantically selective areas in the left hemisphere and 63 in the right.

Key regional findings:
- **Lateral + medial parietal cortex (LPC, MPC)**: core areas selective for social/emotional concepts, periphery for visual/tactile/numeric. Both belong to the default mode network.
- **Superior prefrontal cortex (SPFC)**: medial areas → social/emotional; dorsolateral → visual/tactile/numeric.
- **Lateral temporal cortex (LTC)**: anterior areas → social/emotional/mental; posterior → numeric/visual.

## Relevance to SAN / NAPOT

This atlas is empirical evidence for the [[napot-overview]] claim that neural arrays are organized to sense and render distinct informational domains. Each semantically selective area can be interpreted as an oscillating array tuned to project a particular dimension of meaning. The broad bilateral consistency across individuals aligns with [[self-aware-network]] theory's prediction of a shared perceptual-rendering architecture. The [[mixed-selectivity]] of individual neurons operates within this larger map — each neuron serves multiple sub-patterns, but the regional organization creates domain coherence at the population level.

## Outbound links

- [[napot-overview]]
- [[mixed-selectivity]]
- [[neural-array]]
- [[phase-wave-differential]]
- [[self-aware-network]]
- [[fractal-consciousness]]
