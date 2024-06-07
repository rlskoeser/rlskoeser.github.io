---
created: 1345220247
date: '2012-08-17T12:17:27'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2012/08/17/dh2012-lp28-email-archives-recognizing-thought-representation-author-analysis
showTableOfContents: true
summary: A tool to work with email archives, and two papers on text analysis.
tags:
  - dh2012
title: 'DH2012: LP 28, July 20 - Email Archives, Recognizing Thought and Speech Representation, and Author Analysis'
url: /2012/08/17/dh2012-lp28-email-archives-recognizing-thought-representation-author-analysis/
aliases:
  - /dh2012/dh2012-lp-28-july-20-email-archives-recognizing-thought-and-speech-representation-and-author-analysis/
---




A presentation on a tool to work with email archives, and two papers on text analysis: one testing out methods for automated recognition of speech and thought representation; and another testing the value of a proposed feature for authorship analysis, based on language around the use of names.

* * *

## Processing Email Archives in Special Collections {#email-archives}

Sudheendra Hangal (view [abstract](http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/processing-email-archives-in-special-collections/), [video of the presentation](http://lecture2go.uni-hamburg.de/konferenzen/-/k/14031))

Hangal presented on [MUSE](http://mobisocial.stanford.edu/muse/), a program to browse, visualize, and mine long-term email archives which has been developed at Stanford over the last 2-3 years. Hangal spent a few moments explaining why email is such an interesting and fruitful area to be working on: there is mainstream, broad spread usage - 2.1 billion users, 3.3 billion accounts; email provides a consistent record, content is long-lived and has an open, federated architecture; it is easy to capture and preserve; and it is portable and light-weight.  Email is an interesting phenomenon, and some people have had email for many years (for example, faculty at universities have been using email for 30+ years).  As archives and libraries are increasingly collecting born-digital collections, email is being captured and preserved, but less work has been done for processing and delivery.  Hangal says that the stakeholders for their project team include donors, curators, archivists, as well as researchers.

Hangal explains that they started working with the [papers of Robert Creeley](http://www-sul.stanford.edu/depts/hasrg/ablit/amerlit/creeley.html), which are included in [Sulair](http://www-sul.stanford.edu/); these materials include more than 80,000 emails, but with lots of duplication.  Some of the challenges of working with this content is that it is mostly unstructured, and that there is such a large volume; there is also a great diversity within the content (emails about meetings, one-sentence questions, mixed with longer messages), which makes it hard to explore.

Hangal then went into more detail, demonstrating MUSE ("Memories Using Email").  The tool supports open formats like mbox and can talk to servers using standard protocols (IMAP, POP); email in other formats have to be converted before they can be imported into MUSE.  He noted that folder-based organization of email tends to be inconsistent over time, so MUSE provides other ways to organize and access the content; it generates a kind of "social topology" by inferring communication groups of correspondents, and allows users to organize and display email by group.  It also provides a "monthly card" interface with named entities, color-coded and organized by date, which he hopes may be useful to researchers, so they at least have an idea where to start looking.  There are time-based metrics for when names emerge in the messages, as well as sentiment analysis based on a "personal lexicon" they developed to identify life events, family, etc., which the team hopes will be useful for identifying sensitive information and may also be interesting for researchers.  For fun, Hangal also created a crossword puzzle view that is auto-generated based on sentences in the archive.  Browsing emails in a category has a dial-like interface which Hangal compares to the experience of flipping through a book in a bookstore.  Hangal also demonstrated a browser plugin that makes it possible to connect a Wikipedia page to the email archive (e.g., names mentioned on the Wikipedia page for Robert Creeley link to emails from and to those people in the archive).

* * *

## Automatic Recognition of Speech, Thought, and Writing Representation in German Narrative Text

Annelen Brunner (view [abstract](http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/automatic-recognition-of-speech-thought-and-writing-representation-in-german-narrative-texts/), [video of the presentation](http://lecture2go.uni-hamburg.de/konferenzen/-/k/14032)

Brunner presented on her work to explore automatic methods for identifying narrative devices in texts. She went into detail on her process of manually marking up a small selection of short texts by different authors and then testing two different automated approaches.  Her findings indicate that the rule-based methods were more correct, but that the machine-learning approach had better correlations.  The automatic recognition she's getting at this point is not that great, but it might be useful for specific, targeted purposes; for instance, it might be useful to track changes in the representations of thought over time, but her findings would need to be confirmed on another corpus.  Brunner got some encouraging feedback from commenters, suggesting that her work is promising and interesting; my notes are quite brief (I'm pretty sure conference-fatigue was setting in by this point), so take a look at the abstract or the video for more details.

* * *

## Characterizing Authorship Style using Linguistic Features

Ana Lucic, Catherine Blake (view [abstract](http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/characterizing-authorship-style-using-linguistic-features/), [video of the presentation](http://lecture2go.uni-hamburg.de/konferenzen/-/k/14033)

Lucic presented on her work with Blake to test a new feature that she is proposing may be useful for authorship attribution.  In particular, she is examining grammatical structures around named entities, such as person names, and looking at both predictive performance as well as potential insight into authorial style.  For this project, they used a subset of IMDB movie reviews that were harvested in 2009; 1,000 reviews by 62 authors.  Their predictive results are actually quite promising, especially considering the amount of text they are throwing away, and stylistic analysis indicates that authors do show a preference for particular constructions when using names.  Commenters responded to this presentation well also, suggesting that Blake and Lucic may well be onto something.  One person questioned their choice of dataset, since because of the subject matter IMDB reviews will naturally have lots of personal names, and this could skew the results; Blake responded that other entities, such as place-names, could be used as well, and that they simply chose to focus on the names because of the content they were working with.  As with the last paper, my notes here are quite brief, so if you're interested in more details about the approach or findings here, I recommend you take a look at the abstract and video.