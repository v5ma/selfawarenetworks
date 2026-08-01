# APD - Action Potential Duration

**APD** is the abbreviation used in SAN sources for [[action-potential-duration]]. It is a width or
repolarization measure of a voltage waveform at a declared cellular compartment. APD is one
coordinate of the waveform, not one universal duration shared by the soma, axon initial segment,
axonal branches, and presynaptic boutons.

This page is the source map for the term. The canonical physiological explanation, evidence,
figure, source genealogy, and experiments are maintained at [[action-potential-duration]].

> **Scientific boundary:** All-or-none spike initiation does not make every neural event informationally identical. Waveform duration and shape can vary with conductance state and recent history, and presynaptic waveform can affect calcium entry and release in some preparations. Those facts do not establish a universal APD code, a deterministic 0/1/2/3 vesicle alphabet, or a direct APD-to-consciousness mechanism.

## The source-faithful APD operation

The medically bounded version of the SAN operation is:

```text
receptor, conductance, and recent network state
-> compartment-specific source waveform
-> terminal calcium-channel activation and driving force
-> bouton-specific probabilistic release
-> receptor- and receiver-specific response
-> possible recurrent excitatory and inhibitory population consequence
```

Each arrow is conditional. Source waveform is transformed before a receiver responds, and the
same APD can have different consequences at different terminals and receivers.

## What the 2022 source proposed

The August 2022 SAN Whitepaper made two connected proposals.

First, it argued that the all-or-none description was incomplete when used to imply that every
firing event had the same informational consequence. Potassium-channel state was proposed to alter
waveform duration; terminal waveform was proposed to alter calcium entry and transmitter release;
and the resulting synaptic difference was proposed to contribute to a phase-wave differential.

Second, it proposed that one cellular event could recruit a larger pattern of excitation and
inhibition, allowing a partial cellular signal to contribute to a distributed population rendering.
The source's phrase that one neuron "causes many of the neurons in its exit terminal to become
inhibited" must be translated through circuit anatomy:

```text
source principal-cell event
-> direct excitation of some targets
-> recruitment of identified inhibitory interneurons where connected
-> temporally structured inhibition or disinhibition in a local circuit
-> changed timing and route of later population activity
```

An excitatory pyramidal neuron does not directly turn all neighboring cells into an inhibited wave.
Feedforward and feedback inhibition depend on the source cell, interneuron class, synapses, targets,
and network state. The SAN-specific question is whether source waveform differences help organize
the timing or strength of this circuit recruitment after known covariates are controlled.

## Established footholds and limits

- Potassium conductances contribute to action-potential repolarization, but APD depends on the
  complete local conductance and waveform state rather than a scalar potassium count.
- Presynaptic waveform can regulate calcium entry and release in bounded preparations
  ([Hoppa et al., 2014](https://doi.org/10.1016/j.neuron.2014.09.038);
  [Cho et al., 2020](https://doi.org/10.1073/pnas.2000790117)).
- Boutons differ in calcium and release properties, including along one axon. Therefore one somatic
  APD does not select one identical output everywhere
  ([Koester and Sakmann, 2000](https://doi.org/10.1111/j.1469-7793.2000.00625.x)).
- Excitatory and inhibitory cells form cell-type- and layer-dependent subnetworks rather than one
  universal neighbor-inhibition circuit
  ([Otsuka and Kawaguchi, 2009](https://doi.org/10.1523/JNEUROSCI.2219-09.2009)).
- Interneuron input can reset firing phase in specified preparations, and parvalbumin interneurons
  can causally regulate gamma rhythms
  ([Yang et al., 2007](https://doi.org/10.1113/jphysiol.2006.118448);
  [Sohal et al., 2009](https://doi.org/10.1038/nature07991)).

These results support a pathway from waveform through synaptic transformation to circuit timing.
They do not show that a source APD alone sets the gamma frequency of all inhibited neighbors or
copies one cellular pattern into an entire brainwave.

## Three scale-specific claims

### Micro: waveform-to-synapse

At the cellular scale, APD is one feature of a local waveform. Calcium-channel kinetics, active-zone
geometry, residual calcium, release-ready vesicles, and terminal identity transform that waveform
into a release distribution. The postsynaptic receiver transforms it again.

### Meso: recruitment and timing

At the circuit scale, a source event can recruit excitation, inhibition, and disinhibition through
actual synaptic paths. SAN proposes that receiver-relative waveform consequences may contribute to
which local assemblies synchronize, separate, or change route. This is a circuit hypothesis, not a
property of APD in isolation.

### Macro: population and behavior

At the distributed scale, many transformed events can alter a population trajectory, field
measurement, perception, or action. A population duration, LFP or EEG rhythm, and behavioral
duration are different measurements. None can be inferred directly from one cellular APD.

## Later extensions must not be backdated

The APD idea continued to change after 2022:

- A [December 2024 multi-speaker source](https://github.com/v5ma/selfawarenetworks/blob/8c012f77a28ab2546000584ce95e0e0eba817dfd/resnote06.md)
  proposed that fast events and recruited inhibition could reset a slower tonic expectation
  pattern. This is a later layer- and circuit-specific hypothesis, not an established 2022 result.
- A [February 2025 Micah source](https://github.com/v5ma/selfawarenetworks/blob/d6c5ed433146ad7c69bc1cd975a1b7362ed67f42/vecB.md)
  developed the "oscillation photocopier" and behavior-sequence extension. The recoverable
  operation is recurrent pattern expansion and time-scale transformation, not literal copying of
  an APD waveform.
- The [June 2025 coefficient-of-variation source](https://github.com/v5ma/selfawarenetworks/blob/172e778a01b06357e5921d772f8ff18f9818a7d3/13san.md)
  proposed that recent duration variability could inform a later receiver-relative update. CV is a
  summary statistic, not a proven cellular controller or a complete PWD measure.

## Immutable 2022 source stages

- [August 5, 2022 Whitepaper](https://github.com/v5ma/selfawarenetworks/blob/c0f1e474fe5c351da63ed6e77b0b13c6becc23bb/whitepaper.md)
  records the early APD, recruited-inhibition, and distributed-observer proposal.
- [August 22, 2022 Whitepaper](https://github.com/v5ma/selfawarenetworks/blob/0b1fd6b1def8b3db77d34a15ff9d3263a6935351/whitepaper.md)
  makes the potassium, APD, calcium, release, phase-projection, and finite neural-rendering chain
  explicit.
- [August 3, 2022 APME source](https://github.com/v5ma/selfawarenetworks/blob/b79351a4fe3667296952c483e6beb68732bf3865/a0053z.md)
  develops action-potential magnitude as more than peak amplitude.
- [September 8, 2022 NAPOT source](https://github.com/v5ma/selfawarenetworks/blob/26dddd6ff9be0e9460686611f7622cb7873d011a/a0007z.md)
  connects APD, calcium, release variation, and downstream phase consequence while preserving the
  historical fixed-vesicle conjecture as a claim to test rather than a fact.

The raw 0/1/2/3 vesicle ladder, universal APD coding, source-APD-to-neighbor-gamma identity, and
direct phenomenal consequence remain rejected as established neuroscience. The finite conditional
operator is retained as the SAN hypothesis.

## Required receiver test

To show that APD contributes information rather than merely correlating with it:

1. measure waveform at the relevant terminal rather than inferring it from the soma;
2. preserve spike count and event timing while changing waveform where possible;
3. measure calcium, release, receptors, inhibition, and the named receiver;
4. compare APD-only, full-waveform, rate, timing, terminal-state, and receiver-state models;
5. test whether the receiver and later population use the remaining difference causally; and
6. require predicted impairment and patterned rescue.

If known terminal variables fully mediate the effect, APD remains an important mechanism but not an
independently decoded code.

## Related concepts

- [[action-potential-duration]]
- [[action-potential-waveform]]
- [[action-potential-waveform-encoding]]
- [[action-potential-magnitude]]
- [[stimulus-history-and-action-potential-waveform]]
- [[multi-vesicular-release]]
- [[synaptic-unreliability]]
- [[phase-wave-differential]]
- [[oscillation-photocopier]]
- [[inhibitory-circuits]]
- [[tonic-oscillation-as-predictive-reference-frame]]
- [[napot-overview]]
