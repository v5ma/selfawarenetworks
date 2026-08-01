# SAN Golden Corpus Knowledge Graph Contract

Every SAN source remains part of the golden corpus. The graph does not classify sources as worthy
or disposable. It records what each source can do, how prominently it should be routed for a given
reader, and what review remains.

## The placement model

A source may serve one or more positive roles:

1. **Entry point** - the clearest route for a reader encountering a question for the first time.
2. **Narrative spine** - a scene, example, or question that makes the intellectual development
   understandable.
3. **Mechanism donor** - biological, computational, or physical reasoning used in a theory page,
   paper, or chapter.
4. **Genealogy anchor** - dated evidence for how an idea changed.
5. **Evidence or comparison route** - references, contrary evidence, tests, or neighboring work.
6. **Engineering route** - BCI, artificial neurology, implementation, or experimental consequences.
7. **Cross-domain route** - a transition into SET, QGTCD, SIT, NerveGear, or another companion work.
8. **Specialist route** - detail best reached after the central explanation, without losing it.

`priorityTier` controls placement, not value. A front-spine source is surfaced earlier. A
specialist source remains fully indexed and reachable.

## Node classes

- `source`: an exact file in the SAN repository, with absolute path, relative path, hash, byte size,
  title, source family, and Git chronology when available.
- `page`: a path-stable SAN Wiki page. Basenames are aliases, not identities.
- `concept`: a reviewed idea, mechanism, example, genealogy, experiment, person, or comparison hub.

Future tranches can add `claim`, `event`, `person`, `publication`, `experiment`, `instrument`, and
`book-section` nodes without changing source identity.

## Edge classes

Every edge has a status:

- `accepted`: a reviewed source or navigation relation.
- `candidate`: retrieval pressure that still needs semantic review.

A candidate lexical mention is never scientific proof, priority proof, influence evidence, or
publication authority. Accepted genealogy edges establish what a source says and when it entered a
record; they do not establish that the biological claim is true.

## Date discipline

The graph keeps these separate:

- event or recording date;
- in-file claimed date;
- first relevant Git atom;
- later revision date;
- public deposit or publication date.

An early question does not backdate a mature term. A later Git import does not erase a verified
earlier recording date.

## Correction and intent recovery

When a page appears scientifically wrong, first test whether the problem is a typo, transcription
artifact, compressed analogy, older vocabulary, missing qualifier, or incomplete expression of a
legitimate SAN proposal. Preserve the original version, search the dated source family, compare
the recovered meaning with evidence at the same scale, and only then revise the reader page.

Apply this rule retroactively to earlier rewrite waves. Retroactive review compares the old page,
the complete Micah-authored genealogy, and the current page; it does not backdate later wording.
See [[source-faithful-correction-intent-recovery-protocol|Source-Faithful Correction and Intent
Recovery]].

## Completeness levels

1. **Inventory complete:** every file has an exact path, family, size, and hash.
2. **Candidate connected:** automated retrieval proposes concept routes.
3. **Semantically reviewed:** a human-readable hub identifies the source's actual role and limits.
4. **Genealogy reviewed:** claim atoms and dates are reconciled across versions.
5. **Evidence reviewed:** internal claims are separated from independent support and alternatives.
6. **Reader integrated:** the idea is reachable from the SAN Wiki entry points and downstream book.

The phrase "full mastery" is reserved for stages 3-6 across the source families relevant to a
question. A complete file census alone is not mastery.

## Build and validation

Run from `[private local source path withheld]`:

```powershell
node wiki/san/tools/build-san-knowledge-graph.mjs
node wiki/san/tools/validate-san-knowledge-graph.mjs
```

Generated outputs live under `wiki/san/knowledge-graph/generated/`. The source census is JSONL so
large reviews can be resumed or filtered without loading the whole graph.

## Memory-wipe test

A fresh session passes only if it can:

1. find the exact source families for a concept without a broad search;
2. explain the concept in plain language before using SAN terminology;
3. distinguish the development record from scientific evidence;
4. name unresolved source or chronology questions;
5. route the concept into the book and Comparison Wiki without recomputing an owned verdict; and
6. identify which source files remain semantically unreviewed.

## Read next

- [[san-knowledge-graph|SAN Knowledge Graph]]
- [[source-faithful-correction-intent-recovery-protocol|Source-Faithful Correction and Intent Recovery]]
- [[napot-revision-genealogy|NAPOT Revision Genealogy]]
- [[flow-of-information-in-the-brain|The Flow of Information in the Brain]]
- [[theory-of-redness|Theory of Redness]]
- [[broccoli-shared-recognition-artificial-perception|Broccoli, Shared Recognition, and Artificial Perception]]
- [[neural-tuning|Neural Tuning in SAN]]
- [[cellular-oscillating-tomography|Cellular Oscillating Tomography and the Route to SET]]
