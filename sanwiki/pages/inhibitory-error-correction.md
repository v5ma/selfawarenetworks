Inhibitory interneurons perform real-time error correction in neural circuits — not merely suppressing activity but actively expanding the repertoire of representational states available to the network.

An excitation-only network can only sum inputs. Adding inhibition introduces state-dependent nonlinearity: the same network produces different output patterns depending on the current inhibitory context. This increases representational capacity far beyond what excitation alone affords, allowing fine-grained [[feature-detection]] without false activations.

## Inhibition as biological backpropagation

In SAN terms, inhibitory neurons are the brain's online error-correction layer. When expected sensory features are absent (e.g., no cat ears detected), inhibitory signals suppress neurons that would otherwise fire based on partial matches. This is structurally analogous to [[backpropagation]]'s error signal, but operating in real time without an explicit training phase.

This connects directly to [[napot]]: oscillatory inhibition sets the timing window for excitatory activity, and that timing window is where [[neural-code-functions]] encoding, interpretation, and transformation occur. Mismatches between prediction and input are corrected by inhibitory gating before they propagate up the hierarchy.

## Disinhibition and state transitions

Disinhibition — releasing inhibitory brakes — is the mechanism behind sharp state transitions: entering a new attentional state, crossing a [[threshold-state]], or triggering a [[phasic-burst]]. Rhythms of the Brain (Buzsáki) documents the role of interneuron networks in generating [[theta-oscillation]] and [[gamma-oscillation]] that gate these transitions.

## Implications for artificial networks

Conventional artificial neural networks lack inhibitory dynamics; their error correction is batch-offline. SAN research implies that adding state-dependent inhibitory circuits would give artificial networks context-sensitive, real-time error correction — a closer analog to biological intelligence than gradient descent alone.
