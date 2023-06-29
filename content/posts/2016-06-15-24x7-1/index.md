---
date: 2016-06-15 16:04:18-04:00
showTableOfContents: true
tags:
  - OR2016
  - open-repositories
title: 'OR2016: First 24x7 session'
url: /2016/06/15/24x7-1/
---


Notes on the [first 24x7 session](https://www.conftool.com/or2016/index.php?page=browseSessions&form_session=126).
Highlights include a couple of great repository rants.  I don't have notes on every presentation, so I recommend taking a look at the session abstracts.



Missed the talk on Memento because the room was too full!  Fortunately they moved upstairs.

## Growing Open Data: Making the sharing of XXL-sized research data files online a reality, using Edinburgh DataShare

**Pauline Nathalie Ward, George Hamilton**

[Edinburgh DataShare](http://datashare.is.ed.ac.uk)

HTML5 upload handles files up to 15GB.  Adding an FTP workflow for depositing larger files; streaming download handling 100GB or more.

The challenge: researchers are generating bigger files, demanding more storage space. They need to share that data online for discovery, comparison, impact, etc., or else their research doesn't have the full impact.

Previous size limit of 2.1GB; larger files and filesets had to be split into smaller files or filesets, which is a hassle for researchers to reassemble.  Files imported via time-consuming batch process; too big to be shared because users can't download them.

The solution for upload  HTML5 resumable upload.  [github.com/edina/dspace/tree/xml-html5-upload](http://github.com/edina/dspace/tree/xml-html5-upload); uses [resumable.js](http://resumablejs.com/).

## Will the 140 characters tweets and multi-gigabytes datasets produced by CERN be available in a century ?

**Jean-Yves Le Meur**

Digital age just starting, but may actually be a dark age - "throwing everything into an information black hole."

Data is at risk, going to evaporate for any number of reasons - we've lost a lot and we'll lose more.  Think of all the web pages that have disappeared.  We happily fill in cyberspace in any number of spaces, social media, public, private.

Our current services are busy with archiving the materials we have now, mostly dealing with paper and digitized content.

Wouldn't you like to propagate your personal memories into organized unlimited digital memory platforms?

## Dissemin: an open source information system for open access policies

**Antonin Delpeuch, Marie Farge**

[http://dissem.in](http://dissem.in), [https://github.com/dissemin](https://github.com/dissemin)

Identify pay-walled papers and upload author version in one click.

[DOAI](http://doai.io) Digital Open Access Identifier - resolve a DOI to the open-access version.

## ClaimStore: A system for managing persistent identifier claims among collaborative heterogeneous information services

**Jose Benito Gonzalez Lopez, Tibor Simko**

ClaimStore - intermediary for collaboarting with heterogeneous data providers.  For example, information services and identifiers.  Same document in two different systems with different identifiers.

What's a claim? subject, predicate, object: orcid id is author of doi id, with a 4th element of % certainty.

API allows asking about claims - e.g., what do you know about a particular DOI ?

[claimstore.readthedocs.io](http://claimstore.readthedocs.io)

## The CERN Institutional Repository

**Ludmila Marian**

Cern Document Services (CDS) built in [Invenio](http://invenio-software.org/) (released in 2002, now on version 3).  Very heterogeneous content, anything a research institution might produce.  130TB of data, very large numbers of documents and visits per day.  One example paper with 5,000 authors.  Over 100 customized submission workflows (including review, etc).  Anyone with a CERN login can submit, but some departments have specialized ingest workflwos.

Content from CDS is exportable/embeddable in a variety of other places and with a number of other services.  For example, the splash image on the [CERN homepage](http://home.cern/) is served from CDS.

[CERN Document Server on GitHub](https://github.com/CERNDocumentServer/cds)

## Stop mediating data deposits!

**Amy Neeser, Jim Ottaviani**

*a  "repository rant"*

Librarians as gatekeepers - for what goes in, who can access what.  We've built up expertise, but only in a certain realm .  We rely on publishers (just like tenure committees do, e.g. h-index).  We *don't* yet have the expertise for data - but no one else does either!

Technical limits (such as format, size, rights) ≠ content decisions.

Curation ≠ mediation; but don't do either right away!  Curation will be needed eventually.  Mediation slows things down.  Get the raw data in now.

No mediation means we need to make our systems better.  Usability, accessibility.  Allow submissions at any time - 10% of submissions happen after hours, people working on deadlines.

Get the content in now: learn, develop, and curate later, decide what we want to keep.

(When asked about sensitive content, responded that it's not allowed in their repository and users must agree to a terms of use that says this, although it is still a risk.)

## Happy tenth birthday Open Repositories, when are you going to give up the PDF and embrace Scholarly HTML?

**Peter Sefton**

*a  "repository rant"*

PDF hurts accessibility; HTML is smaller and easier to consume.  Back at the first OR  - trying to put scholarly content into the web's native format.  Hard to make web pages; one culprit is Microsoft Word (because of the horrible, complicated HTML it generates).  Other tools to convert Word into HTML that never worked or weren't useful.  [WordDown](http://ptsefton.com/2011/10/18/worddown-word-to-html5-conversion-tool.htm) - a tool by Sefton to convert Word into HTML5; but nobody cared.  ["Beyond the PDF" /  Force 11](https://www.force11.org/meetings/beyond-pdf-2) (but now turning into a big organization that doesn't seem to be actually doing much); [Scholarly HTML](http://scholarlyhtml.org/) (two different versions with the same name - but Sefton says, that's fine because nobody was using the first one) → but nobody cared.  Really addressing the PDF issue would require rebuilding scholarly publishing infrastructure, and publishers don't seem to be interested in that.  [Scholarly Markdown](http://scholarlymarkdown.com/) might have a real chance.

Conclusion: the tools are still bad; the geeks won't help; and publishers don't want to invest in change.
