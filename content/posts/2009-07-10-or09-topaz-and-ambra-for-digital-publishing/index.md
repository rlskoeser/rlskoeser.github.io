---
created: 1247238917
date: '2009-07-10T11:15:17'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/07/10/or09-topaz-ambra-digital-publishing
summary: Brief description of PloS Ambra/Topaz publishing platform
tags:
  - fedora
  - ejournals
  - open-repositories
title: 'OR09: Topaz & Ambra for digital publishing'
url: /2009/07/10/or09-topaz-ambra-digital-publishing/
---


I realize it's been a while since the Open Repositories conference; I thought that those of us who attended were going to have a debrief and share some of the interesting things we learned about, but that hasn't happened yet, so I decided I would try to blog about some of the interesting things from my notes.

## Introduction to the Topaz Framework and the Ambra Publishing Platform

Richard Cave from the Public Library of Science (PLos)

view presentation materials: [http://hdl.handle.net/1853/28421](http://hdl.handle.net/1853/28421)

PLoS has been using Ambra/Topaz since December 2006, and all of their journals are now on that platform. The original intent was for an end-to-end peer review system with opportunities for post publication, annotations, semantic relationships, etc. The core of it is built on Fedora, used as a blob store; metadata, annotations, etc. are stored as triples in Mulgara.

**Topaz** is an object triples mapping (like Hibernate ORM) with an objects based query language; this allows for storage &amp; retrieval of files _and_ triples in a single transaction.
[www.topazproject.org](http://www.topazproject.org)

**Ambra** is a web 2.0 frontend for Topaz with the goal of turning readers into knowledge contributors. Right now, it can only handle NLM xml; it has no workflow engine or peer review - it is _not_ an out-of-the-box solution. However, features in development are article metrics (impact factor), usage data (views, downloads), semantic enhancement - e.g., highlighting specific terms (proteins, genes, locations, etc).
[www.ambraproject.org](http://www.ambraproject.org)

* * *

Potential relevance/applicability for us? The only project that these technologies might fit right now is Molecular Vision, which uses NLM xml. Hopefully, this will also be a good project to keep an eye on as they develop more features and add support for other kinds of content types.