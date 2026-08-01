# Action-Potential Topology

**Action-potential topology** is a SAN research program about how a neuron's learned receptive structure, current state, and input history constrain a finite outgoing signature, and how many receiver-specific consequences can be assembled into a larger population pattern.

The source-faithful operation is:

```text
learned dendritic and synaptic configuration + current cellular state + input
-> nonlinear dendritic integration and axon-initial-segment event
-> timing, burst, phase, and terminal-waveform pattern
-> bouton-specific calcium and probabilistic release
-> receiver-specific postsynaptic consequence
-> many-cell recurrent assembly, action, and later plasticity
```

This is not a claim that one spike losslessly transmits a neuron's complete anatomy, contains infinite information, or directly copies a whole-brain state. The SAN proposal is that one event can carry a **finite sparse signature** shaped by the cell's learned structure and present state, while the larger representation is reconstructed from many such signals by a distributed network.

> **Scientific boundary:** Anatomical topography, geometry, connectivity, state-space dynamics, and mathematical topology are related but different objects. The original SAN notes sometimes used *topography* and *topology* for the changing configuration of a cell or network. A rigorous modern formulation must declare which object is meant.

## What the source actually developed

The source genealogy reveals an important correction that the earlier Wiki page obscured:

1. A 2014 note recovered to Git in June 2022 used the rough expression `Delta X / Delta Y = Z`. It described the slash visually as an axon, assigned X and Y to opposing charge distributions, and treated Z as the resulting action-potential or output event.
2. By August 3-5, 2022, Micah had revised the proposal. X and Y were both placed in dendritic or somatic charge balance, the relationship became a **difference between rates of change**, and Z became the finite change in vesicle or transmitter release per interval relative to an oscillating group.
3. The same revision said that synaptic placement, receptor and channel distribution, morphology, connectivity, and oscillator state influence the emitted phase change and how downstream cells interpret it.
4. By August 9, 2022, the record explicitly rejected infinite communication. One neuron was described as contributing a sparse signal comparable to one pixel, while downstream arrays assembled many such contributions into a larger multimodal pattern.

The former public page accidentally froze the rough historical notation as `Delta X / Delta Y = Z`, changed the revised charge assignments, and called the axon a literal division operator. That was neither the mature 2022 formulation nor established membrane physiology.

## Recovering the charge-balance idea

An established conductance-based membrane equation has the general form:

```text
C_m * dV/dt = I_syn - sum(I_ion)
```

The sign convention may vary, and each ionic current depends on conductance, gating, membrane voltage, and reversal potential. Sodium and potassium ions are both positively charged. Potassium efflux can contribute to repolarization or hyperpolarization because it removes positive charge from the cell; potassium is not a negative ion.

The revised SAN heuristic can therefore be written without preserving the historical ion-sign error:

```text
D_i(t) = dX_i/dt - dY_i/dt
Z_i->j,k = H(D_i, threshold_i, terminal_state_i,b, calcium_i,b,
             receiver_state_j, group_phase_context)
```

Here:

- `X_i` is aggregate depolarizing drive to source cell i;
- `Y_i` is aggregate opposing, repolarizing, or hyperpolarizing drive;
- `D_i` is their changing imbalance, not a count of negative versus positive ions in different anatomical compartments;
- `Z_i->j,k` is a finite consequence at terminal b and receiver j during event k;
- `H` includes spike initiation, propagation, terminal waveform, calcium entry, release probability, and receiver state.

This is a source-faithful formalization of the intended operation, not a claim that the two-line heuristic replaces Hodgkin-Huxley-type membrane models.

## Established structure-to-output physiology

Several parts of the operation are established independently of SAN:

- Synaptic location, dendritic geometry, membrane conductances, and nonlinear dendritic events can change a neuron's stimulus selectivity and input-output transformation. See [Losonczy and Magee (2006)](https://doi.org/10.1016/j.neuron.2006.03.016), [Smith et al. (2013)](https://doi.org/10.1038/nature12600), and [Wilson et al. (2016)](https://doi.org/10.1038/nn.4323).
- In cortical pyramidal neurons, action potentials are commonly initiated near the axon initial segment and propagate through an axonal arbor. See [Kole et al. (2008)](https://doi.org/10.1038/nn2040).
- Propagation is often reliable, but failures can depend on branch and activity conditions. See [Cho et al. (2017)](https://doi.org/10.1523/JNEUROSCI.0891-17.2017) and [Raastad et al. (2024)](https://doi.org/10.1016/j.isci.2024.110884).
- Presynaptic waveform changes can alter calcium entry and release, but the effect is terminal- and preparation-dependent. See [Hoppa et al. (2014)](https://doi.org/10.1016/j.neuron.2014.09.038) and [Koester and Sakmann (2000)](https://doi.org/10.1111/j.1469-7793.2000.00625.x).
- Boutons on the same axon can show substantially different calcium transients and release properties. Therefore a somatic event does not impose one identical output at every terminal. See [Koester and Sakmann (2000)](https://doi.org/10.1111/j.1469-7793.2000.00625.x) and [Ermolyuk et al. (2012)](https://doi.org/10.1371/journal.pbio.1001396).
- Learning can reorganize spines, synaptic strengths, and ensemble reactivation. This supports a physical relationship among learned structure, cellular responsiveness, and later population activity, but it does not prove that one spike encodes the cell's full morphology. See [Gelbard-Sagiv et al. (2008)](https://doi.org/10.1126/science.1164685) and [Hwang et al. (2022)](https://doi.org/10.1016/j.neuron.2022.06.006).

The established result is therefore stronger than "shape is decorative" but narrower than "shape is copied into every spike": learned structure participates in the transformation that produces output.

## The finite sparse-signature hypothesis

Micah's phrase **Neurons Are Transmitting Their Shapes** can be interpreted medically as a structure-conditioned signature hypothesis:

> A neuron's learned synaptic and dendritic organization helps determine which input patterns recruit it and what finite timing, burst, phase, waveform, branch-arrival, and transmitter-release consequences follow. Downstream receivers do not read a literal anatomical copy. They respond to selected consequences for which their own learned structure makes them sensitive.

Let a bounded source state be:

```text
S_i(t) = [measured morphology, synaptic configuration, conductances,
          connectivity, recent history, current membrane state]
```

Let one finite output signature be:

```text
E_i,k = [event time, inter-event interval, burst structure, relative phase,
         terminal waveform, branch arrival, bouton calcium, release outcome]
```

The source claim is not `E_i,k = S_i`. It is:

```text
E_i,k = F_i(S_i(t), input_i(t), unmeasured_state, noise)
R_j(t+dt) = G_j(E_i,k, receiver_state_j, convergent_inputs_j)
```

`F_i` is the source transformation. `G_j` is the receiver transformation. A finite event can be informative about selected source properties without preserving the whole source state. Its meaning is receiver-relative because different postsynaptic cells can transform the same arriving event differently.

## From one cellular signature to a population pattern

The 2022 source used a display-pixel metaphor, but it did not posit an inner viewer. The medically bounded reading is:

1. One neuron contributes only a partial, finite event.
2. Many neurons contribute different events to overlapping receiver populations.
3. Convergent dendrites and local circuits transform those events.
4. Recurrent activity recruits a larger population trajectory.
5. The distributed network activity itself performs the perception, memory update, choice, or action.

No individual neuron is the complete screen, image, memory, or observer. The SAN hypothesis is that learned cellular signatures are components of a distributed render-and-act process.

## Five meanings that must not be collapsed

1. **Anatomical topography:** where receptors, synapses, branches, boutons, and targets are located.
2. **Anatomical geometry:** lengths, diameters, curvature, areas, and distances.
3. **Connectivity topology:** which cells or compartments can influence which others.
4. **State-space geometry:** trajectories, basins, thresholds, and bifurcations in declared physiological variables.
5. **Mathematical topology:** invariants preserved under a specified class of transformations.

A study can use more than one meaning, but it must state the mapping. A voltage change is not automatically a strict topological change, and a graph edge is not automatically a biological synapse.

## Category theory and differential dynamics

The original SAN source proposed combining category theory with differential calculus. The recoverable version is a typed compositional program:

```text
cellular structure
-> dendritic and membrane state
-> axonal event
-> terminal release
-> receiver response
-> recurrent population update
```

Category-theoretic arrows could formalize which transformations compose and which information is discarded. Differential or hybrid dynamical models could describe continuous membrane evolution interrupted by discrete spikes, releases, and state transitions. Calling a map a *morphism* does not make it information-preserving, and no automatic micro-to-macro functor has been established.

## Micro, meso, and macro scales

- **Micro:** one cell's morphology, conductances, dendritic integration, axonal propagation, boutons, and receiver-specific synapses.
- **Meso:** local ensembles or columns combine many cellular events, with excitation, inhibition, recurrent routing, and population-state transitions.
- **Macro:** distributed cortical, thalamic, subcortical, and motor systems produce larger trajectories measurable through population recording and behavior.

The scales are coupled through measured anatomical and physiological pathways. One cell does not directly encode or transmit an entire macrostate without intervening transformations.

## Discriminating experiment

For an identified source neuron and set of receivers:

1. reconstruct dendritic and axonal morphology, synaptic locations, and target identity;
2. measure somatic and terminal waveforms, branch arrivals, bouton calcium, release, and receiver responses across controlled inputs;
3. learn finite models using timing alone, timing plus recent history, measured structure and conductances, and receiver-relative variables;
4. perturb one learned structural or conductance feature while holding other variables as closely as possible;
5. predict and test changes in terminal and receiver signatures;
6. test whether the altered receiver pattern changes recurrent population reconstruction or behavior;
7. attempt rescue with a stimulation pattern predicted to restore the receiver consequence.

The SAN hypothesis gains support if source structure improves held-out prediction, causal perturbation changes the predicted finite signature, identified receivers use that difference, and a distributed reconstruction can be impaired and rescued. It is weakened if simpler timing or conductance models explain the result, receivers ignore the putative signature, or population consequences cannot be distinguished from generic changes in firing rate.

## Scientific layers

| Layer | Current status |
|---|---|
| Dendritic structure and conductances shape cellular input-output transformation | Established, cell-type and context dependent |
| Terminal waveform, calcium, and release vary across conditions and boutons | Established |
| Learned cellular structure contributes to later responsiveness and ensemble recruitment | Supported, with mechanism depending on circuit and task |
| One event carries a finite sparse signature of learned morphology and activated memory | SAN hypothesis |
| Receivers use that signature to reconstruct a larger distributed pattern | SAN/NAPOT hypothesis |
| Category theory supplies a useful typed composition across the full scale ladder | Formal research proposal |
| One spike losslessly transmits full morphology, infinite information, or a whole-brain state | Rejected |

## Source genealogy

- [Recovered 2014 formulation, Git-fixed June 8, 2022](https://github.com/v5ma/selfawarenetworks/blob/7d1431213cd4ac9788848a5396ec2992ece11cfd/a0012z1%20ctpr.txt) preserves the rough division notation and topographic charge idea as historical evidence.
- [Revised a0008z, August 5, 2022](https://github.com/v5ma/selfawarenetworks/blob/a214ccf6d9ceb117638ce5fb2cb5cbabe6f73692/a0008z.md) replaces the ratio with changing opposing drives and develops vesicle output, learned morphology, and receiver-relative phase meaning.
- [a0008z, August 9, 2022](https://github.com/v5ma/selfawarenetworks/blob/81eacc22f252374931b02096a2fafef486ce86e8/a0008z.md) explicitly limits the transmitted content to a sparse fraction and explains many-cell downstream assembly.
- [a0149z, July 7, 2022](https://github.com/v5ma/selfawarenetworks/blob/738abec60a19d3c438ee04d6d6f01c1b110fd981/a0149z.md) develops ordered spatial phase-state transformations and Taylor-like local approximation.
- [02san, September 6, 2024](https://github.com/v5ma/selfawarenetworks/blob/64f018d2d93b7de6718058c4724c43b40e5dd4b7/02san.md) later develops receiver-relative phase-wave differentials and Neural Tuning.

These links establish SAN genealogy. They are not independent biological validation, and the 2024 formalization is not backdated into the 2022 sources.

## Related concepts

- [[action-potential]]
- [[action-potential-waveform]]
- [[action-potential-waveform-encoding]]
- [[action-potential-phase-space]]
- [[phase-space-dynamics]]
- [[ion-differential-neural-topology]]
- [[category-theory]]
- [[cortical-small-world-topology]]
- [[san-scale-ladder-and-claim-boundaries]]
- [[napot-overview]]
