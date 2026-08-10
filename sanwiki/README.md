# Self-Aware Networks Wiki Public Corpus

This folder is the machine-readable public corpus for the Self-Aware Networks Wiki. Its purpose is to establish a durable public Git history for the Wiki's content, make the material accessible to researchers and indexing systems, and permit exact verification of published versions.

## Snapshot

- First corpus snapshot in this folder: **2026-08-01**
- Current corpus snapshot: **2026-08-09**
- Indexed pages in this snapshot: **2,381**
- Canonical reader: [Self-Aware Networks Wiki](https://selfawarenetworks.com/wiki/)
- Machine-readable index: [page-index.json](page-index.json)
- Exact file hashes: [manifest-sha256.csv](manifest-sha256.csv)
- Snapshot metadata: [snapshot.json](snapshot.json)
- Browser quality sample: [random 100-page visual audit](quality-audits/2026-08-01-random-100/)

The Git commit date establishes when this complete snapshot was made public. It does **not** retroactively assign that date to claims, terminology, or wording developed at other times. Historical priority must be evaluated from the dated sources and provenance identified within the pages.

## Structure

- `pages/` contains one Markdown file per indexed SAN Wiki page.
- `page-index.json` supplies titles, summaries, topics, tags, reader identifiers, relationships, and relative archive paths.
- `manifest-sha256.csv` records both the original-source and public-projection SHA-256 digests and byte lengths for every page.
- `quality-audits/` contains reproducible browser-review evidence, including one screenshot for every sampled page.
- Git history records subsequent public revisions to this corpus.

## Public Projection

The published Markdown retains the reader-facing content while normalizing line endings for Git, removing generated internal route blocks, withholding private local filesystem paths and internal review routes, and generalizing the name of a private dated source archive. The manifest preserves the original source hash as well as the published-file hash, so the relationship between the internal source and public projection remains verifiable without publishing private infrastructure details.

## Scientific Status

The corpus contains established neuroscience, SAN interpretations, open hypotheses, historical source material, and experimental proposals. Inclusion in this public corpus does not by itself mean that every statement is established medical or scientific consensus. Reader-facing pages should identify those distinctions explicitly.
