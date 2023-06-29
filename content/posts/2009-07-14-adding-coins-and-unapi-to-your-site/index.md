---
created: 1247607725
date: '2009-07-14T17:42:05'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/07/14/adding-coins-and-unapi-your-site
permalink: /2009/07/14/adding-coins-and-unapi-your-site/
summary: Notes and resources for implementing COinS and unAPI for Electronic Thesis and Dissertation records.
tags:
  - coins
  - unapi
  - zotero
title: adding COinS and unAPI to your site
url: /2009/07/14/adding-coins-and-unapi-to-your-site/
---


Since I'm stuck waiting on the more important ETD/Fedora 3 migration tasks I should be working on, I had some time to look into adding COinS  (ContextObjects in Spans) to the ETD site to make it easy for people to grab citations for ETD records using tools like Zotero. COinS is very simple and easy to add, but there are some frustrating things about lack of documentation or details, especially for non-standard formats like a dissertation; on the other end of things, it's not clear what fields Zotero supports and I can't find any documentation about that, either. In the process of trying to figure out what Zotero actually supports, I discovered that it can harvest MODS from unAPI-- since this is a much richer data format and also the native format of our ETD metadata, this seemed worth investigating, especially since unAPI is so simple to set up.

Some helpful links and documentation for COinS:

* [http://ocoins.info/](http://ocoins.info/) - this page includes links to the following helpful resources:
  * guides for creating citations for journal articles and books
  * coins generator
* documentation I found for the dissertation format type: [http://alcme.oclc.org/openurl/servlet/OAIHandler/extension?verb=GetMetadata&amp;metadataPrefix=mtx&amp;identifier=info:ofi/fmt:kev:mtx:dissertation](http://alcme.oclc.org/openurl/servlet/OAIHandler/extension?verb=GetMetadata&amp;metadataPrefix=mtx&amp;identifier=info:ofi/fmt:kev:mtx:dissertation)

For ETD, I created a view helper that can generate a COinS citation from an etd object. If we were moving forward with Zend Framework, I would think more about creating a generic view helper that we could use with other content. I imagine we could probably build something more generic for use with django, but I'm not yet familiar enouth with django templates to know quite how that would work.

I'm not clear on how you validate COinS or determine which fields are supported by tools like Zotero, but when I tested it manually it seemed that the citation was incomplete.

unAPI ([http://unapi.info/](http://unapi.info/)) is a very simple protocol for serving out arbitrary formats (reminds me a little of a much simpler version of OAI-PMH). At first it seemed like the information on the website was incomplete, but it's just that unAPI is (intentially) so simple. With the documentation, examples, and the validator to check what I was generating, it was actually pretty easy to get it working.

I implemented this by creating a new unAPI controller and a very simple unAPI xmlObject to cleanly generate the xml response. The unAPI documentation says that the id should be a URI, preferably a URL because that is easier for users, so I went ahead and used the resolvable ARK urls for my ids. It took a little back and forth with the examples and the validators to make sure I was generating the correct results and sending the response codes in the different cases, but I'm pretty confident in my results. The one thing I would like to handle better is embargoed PDFs, but I'm not sure what to do about that yet.

Unfortunately, my testing with Zotero here has been a little frustrating here too. It recognizes the unAPI on the list record view (although strangely not on the single record view), but fails to harvest with a strange xml error. I'm trying to get a clean install of Firefox updated to the latest version and install the new Zotero 2.0 beta to test before I bug the developers about the errors I'm seeing.