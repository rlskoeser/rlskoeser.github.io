---
created: 1308078910
date: '2011-06-14T15:15:10'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2011/06/14/or11-notes-and-quotes
permalink: /2011/06/14/or11-notes-and-quotes/
tags:
  - or11
  - open-repositories
title: 'OR11: notes and quotes'
url: /2011/06/14/or11-notes-and-quotes/
---


There was so much good information at Open Repositories 2011 (and in particular, things came fast and furious in the new 24x7 sessions where presenters had 7 minutes to present up to 24 slides), that it is hard to figure out how to make sense of and organize my notes. Here are some of the interesting things from my notes, in roughly chronological order.

* * *

Bradley MacLean from Duraspace talked about **4 tech trends that should influence repository design**: mobile (apps, ajax, lightweight web services, smaller screen real-estate, and supporting multiple platforms); more/any [programming] languages than you want/need (which he suggested requires looser coupling between modules and languages); servers are clusters (higher parallelization); what's a filesystem? (files becoming invisible again - managed by apps, digital objects that we can't necessarily interpret).

Another 24x7 presentation on **Value and Impact Metricts for Open Repositories** talked about some of the challenges facing ORs, including adoption and ROI - the effort to be involved is not worth it to the researchers/scientists. If researchers are required to be self-marketers, then the repository should do this form them; current measurements and models of impact are lacking; if impact is a qualitative measurement of change, then perhaps impact = extent x adoption x benefit. Proposed the idea of an impact portfolio-- resarchers need to be able to _see_ the impact [e.g., of putting their work into a repository], not just be told that there is one.

**Don't bold the field name!** A humorous presentation from Simeon Warner at Cornell University, taking the OR community to task for the terrible, lazy, unfortunately common display of bolded fieldnames labeling the contents of each field - which makes the labels easier to see than the actual content. Simeon showed us examples from Cornell, Amazon, EBay, and elsewhere to encourage us all to think about what content can be displayed without a label, how we can uses cues to point out the content, and only use labels when it's really necessary.

Carol Minton Morris from Duraspace talked about **Building an Organization by Building a Brand** (in particular reference to the Duraspace team, but with lots of examples from brands in the OR community and elsewhere); style matters more than beauty (the Mouse as a particular example: not particularly beautiful, but very effective); "Facebook is the most successful brand on the planet, because every user is a stakeholder." Also, she referenced a great quote from Jeff Bezos on the two-pizza rule: "project teams should be small enough to be fed by two pizzas."

* * *

In a session on Identifiers and Authorities, I learned about [the Mint](http://sites.google.com/site/redboxmint/) - a practical (as opposed to philosophical) tool designed to be a service that can sit alongside a repository (with APIs designed to be easy to use for developres) to build usable interfaces to support name-authority type activites (e.g., cataloging)-- unfortunately, it sounds like the initial set-up and cleaning of dirty data to get things into the Mint in a usable form could be quite laborious. Also learned about ORCID - a project that is primarily for active researchers claiming their publications and bibliographic data, with possible use cases including the identification of local institutional authors for a multi-author publication in an IR. This presentation included the great line, "names are pathetic identifiers."

* * *

The many Hydra heads and the underlying body... The session billed as "Frameworks" was a little bit of Islandora and a whole lot of Hydra. It was good to learn more about the technology, the community, and some of the products, since I've been hearing about Hydra for a while.

Tom Cramer talked about three different "hydra heads"; the one I was most intrigued by is SALT (self-archiving legacy toolkit) - they've inverted the typical archives process by providing access first, then processing and indexing (to avoid having content sitting in boxes on shelves and inaccessible until someone has time to process them); archivists &amp; donors have permissions to update and anontate the content; uses EAD, which is cross-walked to the digital files; provides a cohesive management, preservation, and access in a single system. He also talked about their ETD system (of note - any permissions document, e.g., for copyrighted content, is uploaded with the ETD and stored in Fedora with the object) and EEMS (everyday electronic materials).

Julie Meloni from UVA talked about Libra, their Hydra "head"; congruence of an Open Access resolution, the grant-funding requirements for data preservation, and ETDs called for something like this; Libra is not just a library resource, as reflected in the (planned? I think it is not yet launched) url - libra.uva.edu. Also mentioned Hydrangea - was not an IR, and not a turn-key solution, but a framework for IR kind of stuff, and is now sort of a reference implementation of a "Hydra head."

There was also a presentation from Northwestern Digital Library on some very interesting image-handling -- they have "virtual crop" images - SVG with information about how to crop a JPEG2000 image, and a fedora disseminator to the cropping (backed by aware or djatoka); for example, you may have one master photo of several images on a photo album page - each photo on the page is an object; they have a tile-based image viewer with an edit mode to creat new cropped versions; using VRA image metadata to relate crop objects; also functionality for ad-hoc collections with drag &amp; drop arrangement using jQueryUI. [I believe this work is Hydra-based, although they didn't mention much that seemed Hydra-specific; one other Hydra partner commented afterwards that they are looking forward to being able to share and re-use this when it feeds back into the larger Hydra community.]

Bess Sadler from Stanford talked about the practical aspects of the distritibuted, community-based development model that has been used for Hydra - "Good development practices build trust". They use objective, automated measures (code coverage, documentation coverag, passing tests, etc), things are monitored, theiy aim for transparency; notifications for project hydra (e.g., commits and tests) are posted to an IRC channel. Shared code is public, but a lot of local code is also public (e.g., institution-specific hydra heads) - which is a cultural shift, that not everyone is comfortable with. Some challenges they are currently facing (either how to test or how to automate)-- accessibility compliance testing, html validation, and javascript testing.

Finally, Matt Zumwalt of MediaShelf did a technical overview of the Hydra architecture. He presented it as CRUD in repositories - create/submit/edit on one side, but index and access generally through something else (e.g., Solr); for Hydra, the functionality is split - they use Solr+Blacklight for search and access (Blacklight is metadata agnostic but content aware, Solr-driven, and has a strong dev. community); and the create/submit/edit functionality is done using ActiveFedora for Fedora models and OM (Opinionated Metadata - knowing how to parse or deal with particular metadata). They have developed their indexing (solrizer) iteratively along with the content models.

* * *

Also some thought-provoking stuff from Steve Bayliss on the "Data Architecture" session.

Regarding **Fedora Repositories and Persistent Identifiers** - repository-based webapps shoud have persistent, stable URIs; access is part of preservation. If you have a web UI as well as direct Fedora acess (e.g., via an OAI harvest for instance), then you have two different URIs for both - and both need to be stewarded. Steve then presented a thought/code experiment to see what you could do to flip things around and make the Fedora REST APIs your object display and endpoint, and use methods for the site - to see what Fedora can handle, where the challenges are, etc. [I don't think this approach is going to work for practical reasons, but it is very cool to see the ways he is pushing what Fedora can do]

Steve also talked about integrating licensing and access control using Fedora XACML, based on a York Digital Library project - they store the license agreements with objects, which can then be displayed to users and used to enforce access. The license policy has to be interpreted by a human to determine how to enforce the license. FeSL and XACML has a hierarchical collectino model and simplified fedora actions (create/read/update/delete); but collection policies are not great, because moving objects around messes things up; FeSL has a simple relation-based policy finder; in this project, they enhanced that to allow arbirtrary RIsearch to find the correct policy; also a relation-based attribute finder. (This is complicated stuff, and anyone who is interest should look over his slides once they are posted.) One drawback to this approach is that you have to specify the license at ingest -- but, of course, you should be doing that anyway.

* * *