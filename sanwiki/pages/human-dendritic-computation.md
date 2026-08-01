# Human Dendritic Computation

![Medically bounded plate of the human layer 2/3 dendritic calcium-action-potential study](/v5ma.github.io/wiki/assets/generated/san/human-dendritic-computation/human-l2-3-dendritic-calcium-action-potentials-medically-corrected-20260713-v1.png)

Human dendrites are active electrical compartments, not passive wires. In surgically resected human neocortical tissue studied ex vivo, Gidon and colleagues described a local calcium-mediated dendritic action potential (dCaAP) in layer 2/3 pyramidal neurons. Its amplitude was largest near threshold and became smaller with stronger dendritic current injection. This source-specific result supports branch-local nonlinear computation, but it does not establish that every human dendrite uses the same event or that equivalent events are absent from every nonhuman species.

> **Figure status (2026-07-19): medically bounded for this source.** The plate separates the preparation, measured dCaAP, modeled XOR-like classification, study limitations, and proposed SAN experiment. It must not be reused as a generic diagram of all human or mammalian dendrites.

## Gidon et al. (2020): preparation and result

The study used dual somatic and dendritic patch-clamp recording and two-photon imaging in acute neocortical slices from anterior temporal-lobe resections of 27 epilepsy patients and tissue from three brain-tumor patients. The authors described the sampled tissue as presumably non-pathological because it lay outside the seizure focus or tumor. The work was ex vivo, not an awake or in-vivo human recording.

- **Local calcium-mediated event:** dCaAPs persisted in TTX (1 micromolar; n=4) but were abolished by cadmium (200 micromolar; n=5), supporting calcium-channel dependence in this preparation. This does not mean human neurons use calcium instead of sodium; the same cells also support backpropagating action potentials and other sodium-, NMDA-, and calcium-dependent events.
- **Graded, nonmonotonic activation:** dCaAP amplitude peaked near dendritic rheobase and decayed with stronger current injection. The activation-function analysis used 12 uncoupled dCaAP recordings.
- **Modeled nonseparable classification:** a model using the measured activation function produced an XOR-like response: either of two inputs alone generated a large dCaAP, while their combined overdrive dampened it. This was a computational model, not a natural XOR task observed in a person.
- **Morphology is not the causal conclusion:** human supragranular neurons can have long, elaborate dendrites, but the dCaAP result should not be restated as a universal rule that human neurons are categorically more excitable.

Primary source: [Gidon et al., *Science* 367, 83-87 (2020)](https://doi.org/10.1126/science.aax6239). The [author manuscript and source description](https://zenodo.org/records/3758325) are openly available through Zenodo.

## Bounded SAN interpretation

The measured dCaAP provides a plausible cellular example of branch-local nonlinear selection before somatic and axon-initial-segment output. That is compatible with SAN's claim that computation is distributed within neurons as well as between neurons. It does not by itself validate [[napot-overview|NAPOT]], [[phase-wave-differentials]], conscious rendering, or a cortex-wide phase code.

A direct SAN-relevant test would replace direct current injection with patterned glutamatergic synaptic stimulation on identified branches while recording dendritic and somatic voltage. The prediction is a nonmonotonic branch-local influence on somatic output for specific input combinations. The interpretation is weakened if the response is limited to direct current injection or does not improve prediction of somatic output.

## Related pages

- [[dendritic-spike]]
- [[dendritic-branches]]
- [[pyramidal-cell]]
- [[neural-backpropagation]]
