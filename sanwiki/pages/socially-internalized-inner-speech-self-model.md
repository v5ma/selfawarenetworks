---
title: "From Other-Model to Self-Model: Socially Internalized Inner Speech"
tags: [san, inner-speech, social-learning, self-model, source-monitoring, artificial-neurology]
aliases: [Socially Internalized Inner Speech, Other-Model to Self-Model, Internalized Voice]
summary: "A source-governed SAN proposal for testing whether a learned model of another agent can be reactivated, source-tagged, and used to guide behavior after the other agent is absent."
status: governed
---

# From Other-Model to Self-Model

## The idea in plain language

A child, animal, or artificial agent can learn regularities in another agent's signals and actions.
Later it may replay or simulate part of that learned model when the other agent is absent. The
scientific question is whether this replay merely imitates the other agent or becomes an internal,
source-monitored signal that helps the learner predict and control its own behavior.

The system itself performs this operation. The proposal does not add a private listener who hears
an inner voice.

## SAN's recoverable mechanism

`a0036z.md` proposes that an external voice can become an inner voice and that an animal might
continue a learned model of another individual in that individual's absence. A testable version is:

```text
contingent social interaction
-> learned other-model
-> reactivation without the other agent
-> self/external source prediction
-> causal use in choice or action
-> feedback and model update
```

Reactivation is not enough. The model must influence a declared prediction or action, and source
monitoring must distinguish internally generated from externally generated signals.

## Evidence boundary

Research supports social shaping of vocal learning, development of inner-speech awareness, sensory
predictions for self-generated speech, and action-usable self-models in robots. It does not show
that a dog literally contains another person's inner voice, that inner speech is required for
self-awareness, or that an agent with this mechanism is conscious.

## Biological test

Compare contingent social training, replay-only training, noncontingent exposure, and no-mentor
controls. After the social partner is absent, test whether a partner-specific internal state:

1. reactivates before a learned decision;
2. predicts action beyond recent stimulus and reward history;
3. carries a self-generated sensory prediction;
4. changes the action when selectively perturbed; and
5. updates after the learner experiences the action's consequence.

## Artificial-agent test

Train matched embodied agents with and without contingent mentor interaction. Separate these
possibilities:

- stored imitation;
- direct policy adaptation;
- a latent model of the mentor;
- source attribution for internal versus external signals;
- a self-model that uses the latent state to estimate the agent's own capability or action.

Intervene on the latent other-model after mentor removal. A causal self-model result requires a
specific predicted change in planning or adaptation that cannot be explained by memorized policy
fragments alone.

## Source chronology

- Initial source commit: `7d1431213cd4ac9788848a5396ec2992ece11cfd`, June 8, 2022.
- Initial blob: `2071b60d60d02b0d05887fc7263455f555247863` under `a0036z ctpr.txt`.
- Current-path rename: `9e07121ed3da44c51b77ab556497d082516c82e0`, June 10, 2022.
- NAPOT expansion: `65ca4a54c5e6b7cb5d317b841b9b9fddb9223e44`, July 29, 2022.
- Current blob: `653149399f9b3f812c9f1fc8ac225141d8fbed23`.
- Current SHA-256: `B51B21408FC8B14FA6B6C2AB59A51D8AEF7CC009AEB14B39BA43E8CB0D7E0D4C`.

The June source already contains the external-to-inner-voice and absent-other-model proposal. The
July stage adds the explicit NAPOT array-to-array rendering frame. Git fixes the source wording; it
does not establish the biological claim.

## Research routes

- [Goldstein, King, and West, 2003](https://doi.org/10.1073/pnas.1332441100): contingent social
  feedback altered infant babbling more than noncontingent feedback.
- [Flavell et al., 1997](https://pubmed.ncbi.nlm.nih.gov/9084123/): developmental differences in
  children's knowledge and detection of inner speech.
- [Alderson-Day and Fernyhough, 2015](https://doi.org/10.1037/bul0000021): review of inner-speech
  development, function, phenomenology, and neurobiology.
- [Whitford et al., 2017](https://doi.org/10.7554/eLife.28197): content-specific sensory
  attenuation associated with experimentally timed inner speech.
- [Bongard, Zykov, and Lipson, 2006](https://doi.org/10.1126/science.1133687): a robot used an
  inferred body model to adapt after damage; this is an action-usable self-model donor, not social
  internalization or consciousness evidence.

## Candidate paper

**From Other-Model to Self-Model: A Causal Test of Socially Internalized Inner Speech in Biological
and Artificial Agents** is an unnumbered candidate. It needs a nonduplication audit against the SAN
machine-consciousness-measurement paper, Artificial Neurology, Field-Cell Self, Choice, NAPOT, and
the SAN synthesis before it can enter the paper register.

## Read next

- [[feedback-strange-loops-self-model|Feedback Loops, Strange Loops, and the Self-Model]]
- [[self-modeling|Self-Modeling]]
- [[artificial-neurology|Artificial Neurology]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[neural-path-selection-interneurons-choice|Neural Path Selection and Choice]]

