# Cascaded Array Perspective Transformation

The SAN cascade proposal says that perception is maintained through successive, recurrent transformations across neural populations as sensory evidence and body state change. A population does not need to pass an unchanged inner picture. It receives a partial state, transforms that state under its own connectivity and current context, and changes the populations that receive its output.

This is a proposal about distributed transformation and use. It does not require a literal movie inside the brain or a separate observer watching neural activity.

## The scale of the claim

- **Micro:** dendritic branches and neurons integrate many inputs under cell-specific membrane, synaptic, and neuromodulatory conditions. This does not imply that one neuron stores or observes a complete perspective.
- **Meso:** local populations can select, combine, suppress, and re-express partial sensory or motor variables. This is the clearest biological scale for an array-to-array transformation.
- **Macro:** visual, parietal, memory, association, thalamic, and motor systems interact through heterogeneous feedforward, lateral, feedback, and recurrent pathways. There is no universal sequence of identical cortical columns.

The cascade can therefore cross scales, but evidence at one scale does not automatically establish the stronger SAN interpretation at another.

## What established neuroscience supports

Several established findings supply parts of the mechanism:

1. Recurrent processing can be important when the ventral visual stream resolves challenging object-recognition conditions.
2. Parietal neurons can combine systematic and idiosyncratic spatial reference frames rather than implementing one clean coordinate conversion at each stage.
3. Population activity can follow structured trajectories during movement, even when individual-neuron responses appear complex.
4. Later ventral-stream activity can be consistent with feedback-dependent state and error computations.

These findings support recurrent, state-dependent transformation across populations. They do not by themselves prove that neural tissue performs NAPOT, that phase geometry carries the decisive variable, or that a single serial cascade constructs all perception.

## Recovered SAN source genealogy

Two June 2022 sources contain the central cascade operation:

- [a0141z, first public upload on June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/37da575ba33f85cef4239295be161066d8d39f4c/a0141z%20ctpr.txt), describes cascades of arrays in which each array forms a pattern from its own perspective while head movement changes the continuing sequence. The file was renamed to `a0141z.md` on June 11.
- [a0159z, first public upload on June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/63d76b0b1b5ea1cfbfdd06994ddd180c2e8ee5ea/a0332z%20ctpr.txt), describes temporally active distributed phase patterns being detected, transformed, and re-expressed by later arrays. The source entered Git as `a0332z ctpr.txt` and was renamed to `a0159z.md` on June 12.

The original language says that arrays "see" one another. The source-faithful biological translation is causal: one population changes another population; the receiver detects and transforms that input; and the transformed state influences later perception, memory, or action. The wording does not require a hidden viewer.

## Bounded mechanism

For receiver population `i`, a minimal representation is:

```text
z_i(t + delta) = F_i(input_i(t), state_i(t), reference_i(t), recurrent_i(t))
```

Here, `z_i` is the receiver's updated population state. `F_i` is not assumed to be the same in every area. It can depend on local cell types, connectivity, inhibition, recent history, and neuromodulation.

Movement changes the reference state and the next sensory evidence:

```text
predicted_i(t + delta) = G_i(z_i(t), eye_head_body_state(t))
residual_i(t + delta)  = observed_i(t + delta) - predicted_i(t + delta)
```

The residual is an analyst's comparison unless a biological carrier and receiver consequence are identified. SAN proposes that a consequential timing- or phase-resolved part of this change may be expressed as a [[phase-wave-differentials|Phase-Wave Differential]]. That stronger claim requires evidence beyond ordinary recurrence or firing-rate transformation.

## The distributed observer

The cascade does not end at an internal display. Its output changes later processing and action:

1. sensory and internally generated activity changes a receiving population;
2. the receiver transforms the input under its current state;
3. recurrent and downstream populations use that transformed state;
4. motor or physiological output changes the body or environment;
5. new sensory and proprioceptive evidence enters the next cycle.

The distributed network performing this receive-transform-use loop is the observer-action system in SAN. No individual array, neuron, field, or brain region contains the complete observer.

## What is specifically proposed by SAN

SAN adds three linked hypotheses to the established transformation literature:

- successive receiver populations may preserve and transform phase-sensitive relationships, not only mean firing rates;
- changing eye, head, body, and network state may continuously reshape a distributed rendered model;
- the coordinated causal use of these transformed states, rather than an inner display, constitutes the network-level observation process.

The historical term **phase field** should therefore be tested as a measurable, distributed organization of neural timing and state. It should not be illustrated as a glowing volume, a photographic scene inside the brain, or a universal electromagnetic grid.

## Decisive test

Record identified visual, parietal, and motor populations while an animal recognizes the same object or target across controlled changes in eye, head, and body pose. Compare preregistered held-out models using:

- firing rate and conventional recurrent state;
- explicit eye-, head-, body-, and task-reference variables;
- relative phase, event timing, and receiver-state variables;
- the full SAN candidate model with typed PWD terms.

Then perturb a named recurrent or inter-area pathway after the earliest sensory response. The stronger SAN claim gains support only if phase-resolved receiver terms improve held-out prediction beyond simpler models and predict the direction of the perturbation effect on a later transformation or action.

The PWD-specific extension is weakened if rate-only recurrence and reference-state variables explain the result equally well. A universal cascade claim is weakened if the transformation depends strongly on area, task, or cell type. The distributed-observer claim is weakened if the proposed cross-population transformation has no measurable consequence for later perception or action.

## Evidence anchors

- [Kar et al. (2019), recurrent circuits and core object recognition](https://doi.org/10.1038/s41593-019-0392-5)
- [Chang and Snyder (2010), idiosyncratic and systematic spatial reference frames](https://doi.org/10.1073/pnas.0913209107)
- [Churchland et al. (2012), neural population dynamics during reaching](https://doi.org/10.1038/nature11129)
- [Issa, Cadieu, and DiCarlo (2018), successive ventral-stream dynamics and hierarchical error signals](https://doi.org/10.7554/eLife.42870)

## Read next

- [[volumetric-predictive-rendering|Volumetric Predictive Rendering]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[neural-rendering|Neural Rendering]]
- [[tonic-phasic-phase-wave-differential|Tonic Baseline, Phasic Update, and PWD]]
- [[3d-semantic-segmentation|3D Semantic Segmentation]]
- [[phase-language-firewall|Phase-Language Firewall]]

## Image status

No medically accepted image is assigned to this page. A bounded replacement specification is recorded as `IMG-SAN-CASCADE-PERSPECTIVE-001` in the SAN medically accurate image-prompt ledger.
