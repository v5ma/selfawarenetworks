# Source-Faithful Correction and Intent Recovery

## The problem

An unusual scientific sentence can fail in several different ways. It may contain a typo, preserve
a rough transcript, compress a longer analogy, use an older term, omit its scale, or deliberately
propose something that existing research has not yet named. Treating all of those cases as factual
error can make a page look more conventional while deleting the idea it was meant to explain.

SAN therefore uses a preservation-first correction rule. When wording appears medically,
biologically, physically, or mathematically wrong, the first task is to recover what Micah probably
meant from the surrounding source record. Only after that recovery should the Wiki compare the
claim with external research and decide how to revise the explanation.

The working presumption is that an apparent error is probably recoverable as a typo, damaged
transcript, compressed analogy, old vocabulary, missing qualifier, or scale mismatch until the
source search shows otherwise. This is a rule about how to investigate the sentence, not a verdict
that the sentence or theory is automatically correct.

## The plain-language rule

```text
preserve the original
-> recover the intended operation
-> find earlier and later Micah formulations
-> separate speakers and quoted sources
-> compare with primary research at the same scale
-> retain the SAN addition under the right evidence label
-> correct only what the recovered meaning cannot support
```

This is a charitable search presumption, not an assumption that every disputed statement is true.
A real contradiction can still be recorded. The difference is that the correction must address the
strongest source-faithful version of the SAN claim rather than a typo, shorthand phrase, or literal
reading of an analogy.

## The mandatory five-stage sequence

Every sentence or passage that appears to need scientific correction must be processed in this
order:

1. **Recover the strongest source-faithful meaning.** Read the complete source family and identify
   the problem, operation, example, or prediction that the wording was trying to express.
2. **Explain the operation in plain language.** State what changes, what receives the change, and
   what consequence follows before introducing a SAN term or a defensive comparison.
3. **Connect it to established research.** Identify the experimentally supported component
   mechanisms at the same biological, physical, or mathematical scale.
4. **State where the comparison stops.** Name what the cited research does not establish and which
   literal reading, scale jump, or identity claim is not required.
5. **Preserve the SAN extension as a hypothesis.** State the additional composition, mechanism, or
   prediction proposed by SAN and give it an evidence label or discriminating test.

A sentence that only says an old formulation is wrong, unsupported, not literal, or not established
does not complete a correction. Negation may appear at stage four, after the reader has been shown
the recoverable operation and its scientific foothold. This applies to new edits and to earlier
corrections being re-audited.

## What retroactive review means

This rule also applies to corrections already made. Each earlier rewrite wave will be compared
across three layers:

1. the preserved pre-rewrite page or Git version;
2. Micah's complete dated source genealogy; and
3. the current reader-facing page.

The review asks whether the new page gained accuracy while retaining every legitimate SAN
mechanism, example, prediction, and historical link. Later terminology can clarify an older idea,
but it cannot be assigned an earlier date than the source supports.

The audit therefore preserves four distinct timestamps: the underlying source date, the old Wiki
version, the first correction, and the later recovery audit. Applying the rule retroactively does
not rewrite those dates. It asks whether the old correction changed the narrative because it
treated a wording problem as a failed idea.

## How a corrected page should read

A strong page first explains the ordinary problem, then the established evidence, then the SAN
operation in plain language. The SAN term is introduced only after the operation is understandable.
Comparison with neighboring terminology comes later, followed by a test that could distinguish the
SAN addition.

Every disputed area should keep four layers visible:

- **Established research:** what the cited studies directly show.
- **Recovered SAN proposal:** what Micah's sources actually add.
- **Open empirical territory:** what present evidence leaves undecided.
- **Discriminating test:** what would favor, weaken, or falsify the SAN extension.

Before accepting the page, a reviewer must be able to point to all five stages in the reader-facing
prose or in its linked source-family audit. A citation or validator pass cannot substitute for this
human interpretation check.

## Validation of evolving Wiki pages

A closure receipt may record a shared page's SHA-256 at that time, but an enduring validator should
not freeze the whole page. The SAN Wiki is expected to gain later source-faithful sections. The
durable gate therefore protects the audited source row, explanatory section, source and custody
routes, rendered reader route, and the unchanged Book 2 baseline. A later additive section elsewhere
on the same page is not evidence that an earlier audit was lost.

## Protection against narrative loss

Corrections are additive by default. A missing qualifier should be supplied; a compressed analogy
should be translated into its intended operation; an outdated term should be connected to its later
formulation; and a genuine conflict should remain visible in the historical record. No SAN claim is
removed merely because it differs from consensus or lacks a mainstream name.

The governed protocol and retroactive audit record are maintained at:

`wiki/san/knowledge-graph/reviews/source-faithful-correction-intent-recovery-protocol-20260722.md`

The current wave-by-wave status is visible in the
[[source-faithful-correction-retro-audit-register|Source-Faithful Correction Retro-Audit Register]].

The first completed case study is [[source-faithful-retro-audit-grid-reference-wave|Retroactive
Correction Audit: Grid and Reference Frames]].

## Read next

- [[san-knowledge-graph|SAN Knowledge Graph]]
- [[san-golden-corpus-map|SAN Golden Corpus Map]]
- [[comparison-evidence-is-not-biological-validation|Comparison Evidence Is Not Biological Validation]]
