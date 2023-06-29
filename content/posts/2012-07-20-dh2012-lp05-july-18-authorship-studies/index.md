---
created: 1342765652
date: '2012-07-20T02:27:32'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2012/07/20/dh2012-lp05-july-18-authorship-studies
permalink: /2012/07/20/dh2012-lp05-july-18-authorship-studies/
showTableOfContents: true
tags:
  - dh2012
title: 'DH2012: LP05, July 18 (authorship studies)'
url: /2012/07/20/dh2012-lp05-july-18-authorship-studies/
---



This session consisted of three different papers relating in some way or other to authorship attribution or verification; the first looked at the technique of "unmasking" to see if it might be used across genres; the next looked at error-tolerance in most frequently used word authorship attribution techniques in multiple languages, and the last went over the contested history of the twelve disputed Federalist papers.



* * *

## Evaluating Unmasking for Cross-Genre Authorship Verification

Kestemont, Mike; Luyckx, Kim; Daelemans, Walter; Crombez, Thomas (view [abstract](http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/evaluating-unmasking-for-cross-genre-authorship-verification/")]

The presenter noted (unfortunately I didn't document which author presented) that computational authorship studies have the practical goal of attribution for anonymous text; an "easy" case is identifying one out of four author candidates for attribution; a more "difficult" case is verification, where a work may have been written by one or _none_ of four authors, since it may not be by any of them. It's always possible to model differences between two texts, even texts by the same author (e.g., if a novelist writes one work with a male narrator and another with a female, there will be a very different distribution of he/she use).

The technique being used here is called "unmasking"; that is, iteratively run the analysis as you drop the most discriminating words in order to see where the identification degrades. The rationale is that texts by the same author drop in accuracy very quickly; but for texts by different authors, there are many more discriminating features, so dropping a few of them doesn't hurt the model as much. For an example, the team applied this method to the work of theBronte sisters, whose writings had similar styles, which makes them difficult to distinguish. (There are a few images included in the abstract, so it's worth a look, but I don't see this one posted anywhere.)

The presenter noted that authorship analysis is not usually done across genres (e.g., where a model is trained on one genre and tested on another); however, it does have potential applicability-- an example forensic application is verifying the author of a suicide letter by comparing it to the person's other writings - which is bound to be a cross-genre comparison because, as the presenter humorously noted, most people only ever write at most one suicide letter.

The team here used unmasking with the idea that it might remove genre-specific features, and they tested this on five contemporary authors with both drama and prose; identification works much better on prose than drama (perhaps because drama is too short, or too messy), and cross-genre is much worse. Their conclusion: unmasking is promising for long prose, but cross-genre with theatre is very difficult.  This conclusion left me with some interesting questions: how would this technique work on other genres? Are there perhaps other pairs of genres that would work better, e.g. prose fiction with letters or essays, assuming you had a sufficient corpus to test; or perhaps poetry and drama.

* * *

## Mind your Corpus: systematic errors in authorship attribution

Eder, Maciej (view [abstract](http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/mind-your-corpus-systematic-errors-in-authorship-attribution/), [video of the presentation](http://lecture2go.uni-hamburg.de/konferenzen/-/k/13926">video of the presentation))

Maciej started by pointing out that stylometry is the process of finding order in randomness; but what about extra noise (such as typos, ocr errors, editorial miscorrections or misreadings)? How much noise is acceptable? The model still finds plenty of authorial information with a certain amount of error, but at what point do things break down?

There are plenty of sources of noise: preparing a digital text, or editor, transcription, quotes, variants; in this case, Maciej is focussing on two types of noise, simulating OCR error and intertextuaiity.  Another example of introduced error is badly-tokenized beta code, which split Greek words on the punctuation being used to represent accents and breath marks.

In the first case, OCR was simulated by increasingly substituting letters for other random letters, and tested using most frequently used words; the more words used for testing, the less tolerance there is for error.  The author ran these tests in several different languages, and the abstract includes several of the graphs of the degradation, so it is is well worth a look.

In the second case, intertextuality (allusion, imitation, tradition, etc) was simulated by iteratively replacing terms with words from other corpora; in most cases, there is a gentle degradation in performance (again testing in several different languages), but oddly Latin doesn't degrade until about 40% replaced - which Maciej finds very interesting but doesn't have an explanation for.

After the presentation, one person asked why random words were used to simulate intertextuality instead of actual quotes, thinking that might skew things, but Maciej's answer was that the most frequent word algorithm means it doesn't really matter where the words are; I had a somewhat similar thought about simulating OCR errors by only replacing alphabetical characters in words with other letters, since OCR will often introduce punctuation instead of letters, which would cause words to be tokenized differently-- but it seems that probably wouldn't increase the degradation all that much.

* * *

## The Twelve Disputed Federalist Papers: A Case for Collaboration

Rudman, Joseph (view [abstract](http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/the-twelve-disputed-federalist-papers-a-case-for-collaboration/), [video of presentation](http://lecture2go.uni-hamburg.de/konferenzen/-/k/13927))

Rudman took us through the somewhat tortured, contested history of one of the most famous authorship attribution case studies, discussing problems with the text versions originally used and failure to consider the depth of collaboration, and the various studies by both traditional and non-traditional authorship studies scholars.  Part of what seems to be at issue here is, how can we model the authorship of collaboration? Can we scale the analysis to the level of paragraph by paragraph, or individual sentences? I got the impression that paragraph-level analysis might work, but sentence-level analysis probably wouldn't be so fruitful-- although if you consider editing as a kind of collaboration, distinctions could be at even word or sentence level.  In the discussion after the paper, David Hoover suggested that perhaps artificially collaborative texts could be created to model collaboration detection.  I found myself wondering about known literary collaborators; for instance the Bronte sisters influencing each other (e.g., differences between _Jane Eyre_ and _Villette_); or Ezra Pound working with T. S. Eliot on _The Wasteland_ ("_il miglior fabro_") compared with _Four Quartets_.  There must be some interesting cases of literary collaboration where we have archival papers, drafts, letters, which would make an interesting complement to the more statistical author analysis approach.