---
layout: post
title: "OR2016: Mining Repositories"
date: 2016-06-13T18:10:08-04:00
tags:
- OR2016
---

Notes  on Open Repositories workshop session on text and data mining in repositories, with some reactions about thoughts about possible local application.

* * *

**Presenters:** Nancy Pontika (@nancypontika), Petr Knoth (@petrknoth), Hege van Dijke, Lucas Anastasiou<br/>
[CORE](http://core.ac.uk) - Open University, United Kingdom

At least some of these presentations will eventually be posted on the [OpenMinted blog](http://openminted.eu/blog/) or via @openminted_eu ; please refer there for accurate numbers, since my notes are almost certainly inaccurate in places.

1.5 million scientific articles published per year, and 90% are never read by anyone except the author and reviewers.  There are hundreds of articles on the same protein; how can researchers possibly keep up?  Open access includes reading and downloading papers, but *also* machine readable and minable; but this requires metadata *and* fulll-text content.  The common denominator for providing content is DC and OAI-PMH, but it was not intended for content harvesting.  If the metadata record links to the item at all, often it links to a "splash page" or "jump-off page" (i.e. object in context) - that may be useful for a human viewer, but to harvest content for data mining the page must be crawled in order to determine if it is an HTML resource or a description of one, and then to find the link to that item.  @petrknoth cited a 2013 study that somewhere around 50% of items had a link in the metadata, and of those only a third were actually usable.  He goes on to say that metadata without access to content is "rubbish" and suggests that at least one identifier should be the link to the resource content, and preferably the first identifier.

A couple of monitoring tools were mentioned in passing, which might be worth looking into: [CORE repository dashboard](https://blog.core.ac.uk/2015/09/08/core-repositories-dashboard/), Open AIRE Repository Manager dashboad.

There are also legal issues: text mining requires making a copy (even if it is a temporary one).  The U.S. has fair use laws, which includes text mining as a transformative use, but there isn't an equivalent in the EU.  It's crucial to apply licenses to be truly open access and allow mining, CC0 or CC-BY are recommended.  If an item is "open access" but has no license, then it's unusable (or, also "rubbish").  Licenses should be applied in ways that are machine readable.  (Proliferation of licenses and license compatibility are also a concern.)  There is a definition of open access, but it has to be translated into legal terms, and not all of the Creative Commons licenses are truly open.  (There are other licenses that are also compatible with open access, they are just not as well known.)

PDF as research output is problematic; less useful for mining than the original, in some cases (especially e.g. LaTeX, with semantically encoded equations that are lost in translation to PDF).

Report on UK PHD thesis mining work.  Theses are on cutting research, but not always published elsewhere, especially for unsuccessful reasearch (but failures can provide useful information, as approaches that have been tried and did not work).  One example use case - extract all the chemical compounds from Chemistry ETDS.    Started manually  as proof of concept, found a huge number of compounds (4,500 ?), half of which had never been published anywhere.

Another case: sociolinguistic research using ETD abstracts to create a corpus of academic rhetoric based on authentic records.  Building a coprus for anyone interested in UK academic language, that can also be used for training; for example, in a game-based language learning tool for non-native English speakers to learn discipline-specific language based on REAL  examples.


## Thoughts and Reactions

 - Do the rights agreements we're currently using on our ETDs and open access articles allow for text mining?  What about allowing access to the original ETD document, especially in cases where we know it is more semantically useful than the PDF?
 - Would educating scholars about text and data mining help them in the selection of licenses?  I'm not sure if having their content included in large-scale data mining work would be a motivator or not (although if they understand the context and that it might not otherwise be "read" at all, perhaps they might understand the importance?).
 - Why isn't there something better than DC + OAI-PMH by now?  What about a recommendation for how to link to the content in the various popular metadata formats that are widely used?  Or better yet, what about a simple API for bulk download of content for text and data mining?  (Surely that would decrease the load on content providers as well as making things easier for content aggregators.)
 - [DPLA](https://dp.la/) is the major content aggregator in the U.S.; is text and data mining on their radar, or are they only metadata only?
 - @petrknoth says text mining is not meaningful unless content is aggregated at a very large scale, not just institution but consortia and subject repositories combined; but admits that some kinds of mining, like information extraction, can be meaningful on a smaller scale.   Are there easy starting points with our current repository content, either to make it available for text mining or to begin doing it ourselves?  Perhaps citation extraction for ETDs and scholarly articles would be a small, but meaningful thing to try.  Or, maybe simple text analysis to provide suggested keywords for description.
 - I don't know if it was the speakers' accents or just the proper pronunciation, but I kind of love the fact that "OpenMinted" sounds like open minded.
