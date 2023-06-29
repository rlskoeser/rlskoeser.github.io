---
created: 1344638839
date: '2012-08-10T18:47:19'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2012/08/10/dh2012-topic-modeling-past
showTableOfContents: true
summary: Panel session on Topic Modeling with Travis Brown, David Mimno, and Robert Nelson.
tags:
  - dh2012
title: 'DH2012: Topic Modeling the Past'
url: /2012/08/10/dh2012-topic-modeling-past/
---




This panel session on topic modeling started with presentations from Travis Brown [MITH/University of Maryland](http://mith.umd.edu/)), David Mimno (NLP researcher and current maintainer of [MALLET](http://mallet.cs.umass.edu/), and Rob Nelson (University of Richmond's [Digital Scholarship Lab](http://dsl.richmond.edu/), and then continued with a lively, engaged discussion (view [panel abstract](http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/topic-modeling-the-past/) for the abstracts of all three presentations).  This is the kind of panel that gets you excited to go and work on your own projects and wanting to try out topic modeling on your own content (at least, it did for me).

* * *

## Telling New Stories about our Texts: Next Steps for Topic Modeling in the Humanities

[Travis Brown](http://mith.umd.edu/people/person/travis-brown/) ([video of the presentation](http://lecture2go.uni-hamburg.de/konferenzen/-/k/14001))

Travis Brown started with a brief introduction to topic modeling, provided some examples of how it works and a discussion of why you might want to use it, and then talked about some extensions to the LDA model.

Brown tells us that Latent Dirichlet Allocation (LDA) is relatively new, but it builds on older work, and explains that it is a generative model for finding topical structure in a set of documents.  The input is a set of documents (texts, OCR pages, etc) and a number of topics; the output is a topic distribution over the document set.

As a particular example, Brown talked about [DHQ](http://www.digitalhumanities.org/dhq/) network analysis with Amanda Visconti.  They worked with 110 articles, using paragraphs as their input documents (although they also tested using entire articles), and 40 topics using the MALLET software.  The "topics" that are generated are lists of terms, and they can generally be assigned labels pretty straightforwardly.  And once you have those topics, you can graph over time, or map the distribution to vector space.  Brown admits that you could do this with bigrams but claims that topics are nicer.  He also explained that while most topics are thematic, that is not always the case - sometimes you end up with stylistic or rhetorical groupings, or even a cluster of OCR errors.

Brown then shifted into a discussion of why topic modeling is valuable, explaining that it allows you to quickly make sense of big collections, generate visualizations, and can even be used for other tasks like disambiguation or toponym (place names) analysis.  Brown pointed out two big advantages with topic modeling; first, it is cheap: it doesn't require training data, or an annotated corpus of text (which is expensive); it's unsupervised, robust with errors, and computationally cheap; and secondly, it sidesteps preconceived categories.  This method finds word distributions that could have generated the existing documents by inference.  He briefly discussed the potential of applying topic modeling to toponym ambiguity: when there are multiple place names in a single GeoNames DB, you can extend LDA to map topics to places, and then use the topics to disambiguate or constrain place names.  Another possibility for extension is supervised LDA, where you provide additional input for documents ('observed data'), e.g., deaths in war.

Brown ended his portion of the panel with a link to the upcoming [MITH Topic Modeling for Humanities Research workshop](http://mith.umd.edu/topicmodeling/)

* * *

## The Open Encyclopedia of Classical Sites: Non-Consumptive Analysis from 20th Century Books

[David Mimno](http://www.cs.princeton.edu/~mimno/) ([video of the presentation](http://lecture2go.uni-hamburg.de/konferenzen/-/k/14002))

David Mimno presented on the difficult of doing data-mining on 20th century books because they are not in the public domain, and then goes on to detail how he used a search interface as an intermediate step to build his corpus.

The copyright issues in play for 20th century content are fair use, non-expressive use; the only options within copyright are "non-consumptive" or "non-expressive" use; that is, you can't use the particular phrases or set of words from the original copyright text.  Within the realm of acceptable use, however, are text mining, pattern recognition, and machine learning.

Mimno then presented a humorous view of reality, as if we are in an alternate history where some catastrophe destroyed the world in 1923 and explains how he will save us from this disaster.

How do you get the data if you can't access the full text?  There is JSTOR Data for research, which provides an API to get word counts, but this only provides bigrams - no word order.  Instead, Mimno's approach is to use search engines to get text snippets, with words _in order_.  His process was to submit a list of volume ids (Google Book internal volume identifier for a book) along with a list of Greco-Roman place-names, and in return he got text snippets from Google; from there he did filtering, topic modeling, and dumped the statistics into a database.  His data set consists of 23,000 volumes; 5,000 site names; and 4.4 million snippets.  He had to filter out ambiguous place names (e.g., Split, Die, Philadelphia), as well as indexes and stopwords.

Mimno noted some of the problems of working with snippets like this; they have a set size, disregarding words or even UTF-8 bytes; the snippets are based on OCR text, so there are hyphens that break up words; there are also mixed languages, and multi-word terms.  However, this approach allowed him to do targeted corpus creation.

He ended with a glimpse of [The Open Encyclopedia of Classical Sites](http://www.cs.princeton.edu/~mimno/oecs/), which combines data on books, topics, and sites, and provides a visual interface to browse the topics generated through his snippet-based approach.

* * *

## Means and Ends in Civil War Nationalism and the Digital Humanities

Robert Nelson ([video of the presentation](http://lecture2go.uni-hamburg.de/konferenzen/-/k/14003))

Nelson started by talking about means vs. ends, noting that he wants to examine nationalism as a means to something else (although the two general approaches to nationalism in historiography both treat it as an end), and noted that there is a tendency sometimes in DH to use a particular tool or technique (especially the shiny, exciting, new ones) as an end, instead of as a means to analysis and interpretation.

He then proceeded to explain how topic modeling allows him to see nationalism as a means, a tool to accomplish something by looking at topics from the Richmond Daily Dispatch and NY Times.  Both papers use the same _language_ of nationalism, but to different ends.  He discussed his topic graphs as a kind of "cardiogram" highlighting the stress points, moments of public patriotic rhetoric to manufacture nationalism when it is most in conflict with individual interest, for example alleviating anxiety about dying. In another case, it parallels anti-Northern rhetoric, which Nelson sees as a means to alleviate anxiety about killing.  In contrast, in the NY times nationalism is about voting - "not bullets but ballots."

Nelson ended by questioning the notion of "distant reading," asking whether we really need more distance and suggesting that topic modeling allows to look at texts more closely, and with some subtlety.

* * *

## Q &amp; A

The panel chair, Mitsuyuki Inaba, started the discussion portion of the session by asking, what is the key to successful topic modeling in the Humanities? How do we integrate "objective" computer-generated results and "subjective" humanities scholars perspectives?  David Mimno responded that topic modeling makes it possible to plot very complicated things; and that it scales to large collections; but he also noted the value of Rob Nelson looking at context and verifying the topics.  HE also pointed out that topic modeling scales very well, but the level of analysis is not very high.  Travis Brown commented that they had done an experiment with Byron's Don Juan and Austen; their results confirmed the progression they expected, which is not interesting on its own, but a starting point. Rob Nelson responded that his work is very subjective; what he is offering is is a reading, an interpretation, an argument.  Someone else might look at the same data and come to different conclusions.

Julia Flanders (I think) asked the panel members whether is topic modeling is stable, or if the algorithm will continue to be refined.  Mimno responded that the basic statistical model is very solid, and that there is an almost identical model in use for biological population, although the interpretation still open.  Nelson responded that the current model gives interesting results (which is enough for him), but it's still up to us to interpret.  Brown commented that the innovations going on now are extensions of the model for particular use cases.

Another respondent picked up Nelson's discussion of means vs. end, and suggested distant reading as "spectacle", with the dual meaning of the lens through which we look and the event at which we look.  Nelson (I think) responded that perhaps it is better to think of topic modeling as a microscope instead of a telescope, because it allows you to drill down.  Mimno suggested that this is a "model," rather like a ship in a bottle-- it lets you see the whole thing, but not all of it works.

Another commenter asked about distinguishing relative importance of words in a topic.  Mimno responded that they are looking at better representations of the model and better visualizations ow what's going on in a topic (e.g., the relative value of different terms).  Someone pointed out that graphing a topic over time suggests that the topic is the same.  Nelson commented that it is important to read the content or at least skim some of the most representative documents.

Wendell Piez asked a question about the objective/subjective split happening at multiple levels, and expressed an anxiety about taking reading away from the user, saying that this approach is not "objective" but "radically disinterested" and suggesting that we need to explain the method so that computers are not inexplicable oracles.  Mimno responded by saying that this method "reminds me that meaning is real."  Topic modeling is such a "dumb" approach in some ways (e.g., compared to NLP, information retrieval), and yet the result is largely intelligible.  Travis Brown commented that he finds this method most interesting when he find surprising topics that are worth further investigation, citing an example of discovering an unexpected split between public and private spirituality in texts by women writers.

