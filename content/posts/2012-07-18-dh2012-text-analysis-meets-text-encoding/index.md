---
created: 1342648732
date: '2012-07-18T17:58:52'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2012/07/18/dh2012-text-analysis-meets-text-encoding
permalink: /2012/07/18/dh2012-text-analysis-meets-text-encoding/
tags:
  - dh2012
title: 'DH2012: Text Analysis meets Text Encoding'
url: /2012/07/18/dh2012-text-analysis-meets-text-encoding/
---



This session was a panel with four speakers - two from the text encoding "team" and two from the analytics "team"; each of them spoke briefly and then there was an interesting and engaged conversation (see the [abstract](http://www.dh2012.uni-hamburg.de/conference/programme/abstracts/text-analysis-meets-text-encoding/)).

[Karina Van Dalen-Oskam](http://www.huygens.knaw.nl/vandalen/) spoke first, introducing the others and then briefly discussing her work analyzing proper names in text; she works partly with Dutch texts, and apparently early encoding efforts were very ambitious and marked up texts to great detail, including names, but they had to scale back their goals. In addition to this inconsistent markup, it is also difficult to work with TEI from other sources or institutes, due to the variation in encoding practices and the flexibility of TEI. So, it turns out to be _easier_ for her to just copy and paste text from the website and make her own private text documents to work with. She pointed out that it takes time to learn skills (in this case, TEI and XSLT), and when that is not your main focus, you need to spend that time keeping up with your own technical scholarship.

[Wendell Piez](http://www.mulberrytech.com/people/piez/index.html) spoke next, and started by pointing out a few problems with XML (some of which can be done, but not gracefully):

* overlap elements freely
* annotate anywhere
* mark up first and then systematize later
* ignore markup when it's convenient

Another issue is the complexity that has grown up around XML and related technologies (XSD, XQuery, XSLT, etc). He mentioned the 10,000 hour rule about mastering a technology deeply, and echoed Van Dalen-Oskam's point that text analysts need to master other things, like linguistics and statistics. He commented that XSLT 2.0 and XQuery are actually very good for plain text as well as XML (which surprised me), suggesting that they might be more useful or applicable to text analytics, and also suggested that we begin to develop libraries of conversions and utilities to provide more useful (versions of) marked up text.

[David Hoover](https://files.nyu.edu/dh3/public/) spoke next on the benefits and drawbacks of using TEI text for analysis. He noted that markup is set up for archival and display, but _not_ intended or designed for analysis - for example, you can't easily strip out a running header from a text without removing headers you want; in some cases, he even wanted to keep parts of headers (dropping the book or chapter heading, but preserving the actual book or chapter name), because he doesn't consider those features part of the text for the purposes of authorial analysis. Nested tags make this even more complex-- e.g., if there is a quoted poem inside prose, should that be kept or removed? He provided another example, where he wanted to analyze speakers and speeches in drama for different style and voice, but the inconsistency and variation in tagging makes this a difficult task: for instance: soft hyphens and line breaks in speeches, nested speeches, and some content marked up as paragraphs while others are tagged as lines. He echoed a similar sentiment toVan Dalen-Oskam, that it is actually easier to start with a plain text version (e.g., from Project Gutenberg) than to start with the TEI.

Lastly, [Syd Bauman](http://www.stg.brown.edu/staff/syd.html) spoke on word extraction from TEI. He noted that we always have a purpose in mind when we mark up a text, and that text analysts are in a sense trying to get a "free ride" - but that maybe we can help them. He noted the ways that extracted text from TEI is difficult (especially from someone else's TEI)-- what metadata can you discard? how do you handle choice, alt, exclude tags? how do you export a single edition from a single TEI document that encodes multiple versions? He summarized the basic logic needed as identifying which elements you want to keep or discard, and identifying which line breaks are word breaks. He also had a list of suggestions about how to make things easier for text analysts:

* mark up features that are important to text analysts
  * make word breaks automatically discernible
  * normalize who is speaking with who
  * make explicit which notes are original to the source and which have been added
* _make the TEI available_(this was apparently a big point that many people agreed with in the discussion; I wasn't aware so many TEI text collections didn't make the XML available)
* provide documentation (perhaps via ODD) about the markup, and how to get the plain text
* provide a stylesheet to get just the words (_not_ just provide the results, but provide XSLT that can be modified)

After that, the session moved into a lively discussion. A few notes from the questions and comments:

* David Hoover referenced Jerome McGann's point that "the text is always already marked up", and that it's just a question of which markup is easier to deal with
* Could we do more fruitful text analysis based on the markup? Maybe, but the text analysts are probably not familiar enough with TEI to know, and also most markup is structural/presentation and not semantic or particularly interesting for analysis.
* Could we go the other way, and generate or create mark up based on the results of text analysis? David Hoover said the texts he works with and marks up for himself are not valuable enough to keep - he generates the statistics he needs and then moves on; butKarina Van Dalen-Oskam commented that the name analysis work she does actually would lend itself to this kind of thing, and other types of analysis might as well.