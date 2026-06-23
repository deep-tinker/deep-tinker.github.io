# Git Blog Review — `git-from-the-inside-out`

Reviewed file: `public/blog/git-from-the-inside-out/index.html`

## Overall verdict

**Not quite ready to publish yet — but very close.** The blog/course is engaging, well-structured, and pedagogically strong. The “inside out” framing works well, the progression from mental model → objects → refs → distributed Git → build-your-own VCS is excellent, and the interactive widgets make it much stronger than a normal blog post.

However, there are a few **technical correctness issues** that should be fixed before publishing, especially around Git object types, tags, branches as files, SHA-1 wording, and modern merge terminology.

---

## High-priority correctness issues

### 1. Git has four object types, not three

Several sections say Git has “three core object types”:

- blob
- tree
- commit

But Git also has a fourth object type:

- **tag** — specifically annotated tag objects.

This appears in Part V:

> `Which is NOT one of git's three core object types?`  
> options: `blob`, `tree`, `commit`, `branch`

And:

> `blobs, trees, commits — three object types`

This is risky because readers who already know Git internals may flag it immediately.

Suggested fix:

- Say **“the three object types we need for version control basics”** or **“the three object types behind ordinary commits”**.
- Add a small note:

> Git also has a fourth object type, `tag`, used for annotated tags. We are ignoring it until the end because blobs, trees, and commits are enough to understand normal history.

Also in the recap:

> `refs = tiny files: name → commit hash. Branches and tags.`

This is only partly true. Lightweight tags are refs pointing directly to objects, but annotated tags are refs pointing to **tag objects**, which then point to commits or other objects.

Suggested wording:

> `refs = names → object hashes. Branches usually point to commits; lightweight tags point directly to objects; annotated tags point to tag objects.`

---

### 2. “A branch is a 41-byte file” needs nuance

The blog says:

> A branch is a 41-byte file.

This is a great teaching simplification, but technically branches can also be stored in `packed-refs`, and the loose file contains 40 hex characters plus a newline for SHA-1 repos. In SHA-256 repos, the hash is longer.

Suggested fix:

> In the common loose-ref SHA-1 case, a branch is literally a tiny file containing a 40-character hash plus a newline. Git can also pack refs for efficiency, but the mental model is the same: a branch is just a name pointing to a commit.

This preserves the teaching value while avoiding pedantic objections.

---

### 3. “If two hashes match, contents are identical” is too absolute

The blog says things like:

> if two hashes match, the contents are identical

For teaching, this is understandable, but cryptographically it is not strictly true. SHA-1 collisions exist, and modern Git has collision-detection protections plus SHA-256 support.

Suggested fix:

> In normal Git usage, if two object hashes match, Git treats them as the same content. Cryptographically, SHA-1 collisions are theoretically and practically possible, which is why modern Git includes collision protections and supports SHA-256 repositories.

You do not need to overcomplicate the article, but one small caveat would make it more accurate.

---

### 4. `recursive` merge strategy is outdated terminology

The simulator prints:

> Merge made by the 'recursive' strategy.

Modern Git’s default merge strategy is now **`ort`**, not `recursive`.

Suggested fix:

Either change the simulator output to:

> Merge made by the 'ort' strategy.

Or avoid naming the strategy:

> Merge made by a three-way strategy.

For a conceptual course, the second option is probably cleaner.

---

### 5. “Tags are refs” is incomplete

In the final roadmap / recap, tags are grouped with refs. This is true for lightweight tags but incomplete for annotated tags.

Suggested fix:

Where the blog says:

> refs = tiny files: name → commit hash. Branches and tags.

Use:

> refs = tiny names pointing to object hashes. Branches point to commits; lightweight tags point directly to objects; annotated tags point to tag objects.

---

## Medium-priority technical improvements

### 6. “Git stores a full snapshot of every file at each commit” is pedagogically good but slightly misleading

The blog repeatedly says Git stores a full snapshot. This is the correct mental model, but physically Git stores objects and commits point to root trees. It does not store a full copy of every file in every commit.

The article already explains deduplication well, so this is mostly fine. But this sentence could be softened:

Current:

> Git stores a full snapshot of every file at each commit.

Suggested:

> Git models each commit as a full project snapshot. Physically, that snapshot is a root tree that reuses unchanged objects.

This is more precise and still beginner-friendly.

---

### 7. Remote section says everyone has the entire history

Current idea:

> everyone has the full history

Usually true for normal clones, but shallow clones, partial clones, and sparse checkout complicate this.

Suggested wording:

> In a normal clone, everyone has the full history.

This keeps the main point without overclaiming.

---

### 8. Reflog wording is slightly simplified

The blog says:

> Every time HEAD moves, Git appends a line to the reflog with the previous hash.

A reflog entry records movement from old hash to new hash, with metadata/message. It is not only “previous hash.”

Suggested fix:

> Every time HEAD moves, Git records the old hash, the new hash, and the reason in the reflog.

---

### 9. Worktrees sharing “refs” needs nuance

The blog says worktrees share the same object bag and refs, while each has its own working directory, index, and HEAD.

Mostly correct, but linked worktrees also have some per-worktree refs/state. For the audience, this is acceptable. If you want to be precise:

> Worktrees share the object database and most refs, while each worktree has its own working directory, index, and HEAD-related state.

---

## Content quality by section

### Start Here / Welcome

Strong opening. The “bag of content + sticky notes” metaphor is memorable and accurate enough.

Minor issue: There is a malformed HTML-ish closing tag in the intro callout:

```html
... falls out as a consequence. We'll earn that sentence the hard way, so it actually sticks.</p></div>
```

The opening is:

```html
<div class="callout aha"><span class="k">the one idea</span>Git looks complicated...
```

There is a closing `</p>` without a matching opening `<p>`. Browsers will recover, but this should be cleaned up.

Suggested:

```html
<div class="callout aha">
  <span class="k">the one idea</span>
  <p>Git looks complicated...</p>
</div>
```

---

### Part I — Mental Model

Very strong. The three-trees explanation is good and practical.

Potential improvement:

- In Lesson 1, distinguish **logical model** from **physical storage** earlier:

> Git models commits as snapshots; the object database makes those snapshots cheap.

That would prevent readers from thinking Git stores an entire duplicate folder per commit.

---

### Part II — How Git Stores Things

This is the strongest part of the blog. Blob/tree/commit explanations are clear and accurate.

Fixes needed:

- Add caveat around SHA-1 collision wording.
- Mention annotated tag objects somewhere, especially before saying “three object types.”
- In tree section, “verified against `git write-tree`” is good.
- Commit object section is clear.

One small wording issue:

> zero-or-more

Use:

> zero or more

unless the code-like phrasing is intentional.

---

### Part III — Pointers All The Way Down

Excellent teaching section. Branches as pointers, HEAD as symbolic ref, fast-forward vs merge are all explained well.

Fixes needed:

- “41-byte file” needs nuance.
- “Creating a branch writes a new 41-byte file” should mention packed refs / SHA-256 caveat.
- Merge strategy output should avoid `recursive` or use `ort`.

Rebase/reset/reflog section is particularly good. Just refine the reflog wording.

---

### Part IV — Distributed & Practical

Good, practical, and useful.

Suggested improvements:

- Remote section should say “normal clone” instead of implying every Git repository always has complete history.
- Worktree section is good; maybe add “most refs” nuance if you want accuracy.
- Packfile section is clear and correctly explains that deltas do not change object identity.

Potentially over-strong sentence:

> Git inflates the delta back to full content before hashing or handing it to you.

This is directionally right, but Git already knows the object ID from the pack index and validates differently depending on operation. For a teaching article, it is acceptable. If you want precision:

> Conceptually, the object’s identity is always the hash of its full logical content; the delta is only a compact storage representation.

---

### Part V — Build Your Own VCS

Excellent capstone. This is the article’s biggest differentiator.

Main issue:

- The quiz says Git has three core object types. Fix this to avoid excluding annotated tags.

Suggested quiz rewrite:

Current:

> Which is NOT one of git's three core object types?  
> blob / tree / commit / branch

Better:

> Which is NOT one of the three object types used to build ordinary commit history in this course?  
> blob / tree / commit / branch

Or:

> Which of these is a ref, not an object type used for normal commit snapshots?  
> blob / tree / commit / branch

Then the explanation can say:

> Branch is a ref, not an object. Git also has annotated tag objects, but blobs, trees, and commits are the core objects behind ordinary history.

---

## Grammar and style notes

The writing is polished overall. It has a confident, conversational tone that fits an interactive course.

### 1. “Git, From The Inside Out”

Title case usually uses lowercase “the”:

> Git, From the Inside Out

But this is stylistic. If your brand style uses uppercase “The,” it is fine.

---

### 2. “git” vs “Git”

The blog frequently uses lowercase `git` in prose. The official name is **Git**, uppercase. Commands should be lowercase `git`.

Examples:

- “git looks complicated” → “Git looks complicated”
- “git’s design” → “Git’s design”
- “real git” → “real Git”
- `git commit` stays lowercase because it is a command.

This is not fatal, but for polish and professionalism I would standardize:

- **Git** = product/system
- **`git`** = CLI command

---

### 3. “zero-or-more”

Use “zero or more” in prose.

---

### 4. “labelled” vs “labeled”

The blog uses “labelled” once:

> a labelled pointer

If the rest of the article uses US spelling, use “labeled.” If British spelling is preferred, it is fine. Just be consistent.

---

## Suggested pre-publication fixes checklist

Before publishing, fix these:

1. Add a note that Git has a fourth object type: annotated `tag`.
2. Reword “three core object types” to “three object types used for ordinary commit history.”
3. Nuance “branch is a 41-byte file.”
4. Nuance SHA-1 “matching hash means identical content” wording.
5. Change simulator merge output from `recursive` to `ort` or generic “three-way strategy.”
6. Reword reflog explanation to old hash + new hash + reason.
7. Change “everyone has the entire history” to “in a normal clone.”
8. Fix the unmatched `</p>` in the intro callout.
9. Optionally standardize prose spelling from lowercase `git` to uppercase `Git`.

---

## Final recommendation

**Publish after minor revisions.** The article is conceptually strong, engaging, and likely to be valuable to readers. The core teaching model is excellent. The main risk is not grammar or content quality — both are good — but a few technical over-simplifications that knowledgeable Git users may call out. Fixing the points above would make it much more publication-ready.
