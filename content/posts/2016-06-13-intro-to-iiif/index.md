---
date: 2016-06-13 18:11:05-04:00
showTableOfContents: true
tags:
  - OR2016
  - IIIF
  - open-repositories
thumbnail_image: /images/posts/or/iiif_logo.png
title: 'OR2016: Introduction to IIIF'
url: /2016/06/13/intro-to-iiif/
---


Notes and thoughts on Open Repositories workshop session on [IIIF](http://iiif.io).



* * *

Session [agenda](http://bit.ly/iiif-or2016) available online.  Thanks to the presenters Robert Sanderson (@azaroth42), Jon Stroop (@jpstroop), Tom Crane (@tomofhernehill), and Michael Appleby (@mikeapps) who were all very engaging and knowledgeable.

My biggest takeaway from this session is a much clearer understanding of the scope and aim of the IIIF APIs -  they aren't meant to replace any descriptive metadata standards, but are intended to allow developers (who need not know and understand library/archive specific metadata standards) to create  interfaces to the content that provides a rich, rewarding user experience.

## History & Overview

@azaroth42 provided a brief history & overview of [IIIF](http://iiif.io/):.

Started with manuscripts and then expanded to newspapers, sheet music, etc.

Also addresses a lot of common complaints and concerns:

 *  locked into image delivery software, applications built on top of them, local code
 * want a fast, inexpensive (or free) image server
 * want deep zoom
 * visual comparison
 * make it easy for images to be cited (get credit for your images)
 * annotate images online
 * embed, with citation, without losing control

@azaroth42 has a lovely statement about IIIF that boils down to **community** → **api** → **software** → **content**.  (He later revisited to add a "secret" third line that IIIF builds on open web standards.)

The IIIF Presentation API makes it possible to stitching documents back together when they are fragmented and not stored in the same place (e.g. an ilustration from an illuminated manuscript that has been cut out and separated from the rest of the text);  can also be used to associate OCR text or transcription.  Because it is backed by linked data, allows importing and using other content - e.g., georeferencing.

* * *

## Why APIs?

@jpstroop addressed the question, "Why APIs?"

The what:  for IIIF, an API is a protocol described by a specification that is technology independent (except that it assumes HTTP).  It provides a common interface - for images: image size/orientation, formats, page order, accessible - you don't have to worry about about specific format, size, etc

The 4 (or "3.9", since Auth is not quite finished yet) APIS included in IIIF are not intended to create a new descriptive metadata format; there is no discovery or metadata API.  These are intended to be used after you've found content.   IIIF means that you don't have to have completely separate systems to provide different interfaces and different levels of interaction for different kinds of content or users within the same institution.

 * * *

## Image API

@jpstroop then provided a nice overview of the Image API.  It provides two services: access to image pixels, in various configurations; and access to informationa bout the image.  The JSON protocol indicates generic/IIIF support for tools like OpenSeadragon (so it doesn't need to know about all the different versions of the Image API), and the context makes it clear which version of the API is available and implemented.

Level zero compliance can actually be implemented by flat files on disk, served out by apache.  This is part of ther eason that IIIF uses a path url, instead of query parameters.  This is also why canonical syntax is important, since there are multiple ways to express same view of an image.

The percent sizing that's available in the IIIF url is relative to a size; there is no notion of an original source image in IIIF.

The sizes in the Image API JSON information might be the only options, *or* they might be the optimal sizes (e.g., layers in a JPEG2000 that can be easily retrieved).

The JSON could also include special annotation references for image zones, or services that extend or provide additional metadata outside the spec.

* * *

## Presentation API

Presentation API: multiple images for one object (e.g., multiple stills of a physical object, like a statue, taken from different angles; or pages in a book).  Makes it possible to articulate: which images, in what order; what do they depict, what are the rights for re-use, attributes, related resources and related objects.

The API is for developer use to provide a rewarding user experience.  The scope of the API is the information needed to present an object to the user.

The underlying model for Presentation API is Shared Canvas (i.e., multiple images on the same page).  But not just images - musical notation, associated audio files or portions of audio linked to specific regions on the page.  Most of this revolves around structure.  The manifest represents the object itself (can include sequence of canvases, image resources and other resources); collections can group other collections and manifests.  The metadata is geared toward user interface, *not* semantic or machine readable uses.  Linking services could include (but don't require) an image services.  Navigation date, e.g. for newspapers, could be used to enable calendar or timeline UI, but it is intended for navigation and not semantics.

* * *

## Search API

Search API searches annotations; and every association of content on the canvas is an annotation, whethere transcirption, translation, OCR, or something else.    (Passing mention of [From the Page](http://beta.fromthepage.com/), an IIIF transcription tool, which sounds interesting).  This is not search *for* but search *within* (i.e. ,within a manifest).  You could also add search for a collection, but more typically at the work level.  Search results are returned as an annotation list, in the same format used within the Presentation API (with the addition of an attribute to indicate the number of hits).

* * *

## Authentication API

Authentication API is still being finalized, but adds support for use cases such as:

 - denying content except to authorized users
 - provide degraded access (e.g., lower resolution image or a watermarked image)
 - restrict to specific software clients (e.g., a kiosk or machine in the reading room, where logging in doesn't make sense)

The role of this API is to provide a pattern for authentication, and its focus is on the Image API.  It does not address or prescribe how authorization or login is implemented - those can be server specific.  Authentication is driven by services; uses both cookie and HTTP token to support both secure requests for images over HTTP and cross-domain javascript.

One example "login" flow isn't a proper login at all, but just accepting terms of use before viewing content.

* * *

## Web Standards

Brief overview of some of the web standards that IIIF builds on.  Linked data, JSON-LD; Linked Data Platform (not used directly in IIIF, but on the roadmap); media fragments, for identifying portions of images, video, audio (region, time);Activity Streams, to describe an activity or event (logging and description, not notification; currently used in presentation and search); Webmentions - simple spec for notifications, e.g. if a collection includes an item, or an annotation describes part of an item; the owner of the item can display mentions, or statistics about the count of mentions.

## Thoughts, questions, reactions

This session was so packed that I didn't get the chance to ask all of my questions (although I did ask a couple of things, and there were some other good questions and conversations from other attendeees).  I guess I may have to join the IIIF google group (and help in their goal -- according to @azaroth42 -- of doubling membership every year).

Some questions and thoughts:

 - Is there a best practice about whether to expose IIIF image urls directly to the user or to mediate through software?  (I'm currently mediating in [Readux](http://readux.library.emory.edu), due in part to a now-resolved miscommunication with a system administrator and firewall configuration, but I'm not certain which solution is best.)
 - Where and how should annotations be attached / associated? (I suspect this will become clearer once I get more familiar with the Presentation API, but it's on my mind because I'm trying to connect it with how I've implemented annotation in [Readux](http://readux.library.emory.edu)).
 - More than one presenter emphasized the fact that JSON-LD is so much more developer-friendly than other serializations of linked data; this makes me think that perhaps I should start serializing this as another option on the web applications where we're providing RDF, as an alternative to RDFXML. It looks like [rdflib](https://github.com/RDFLib) already has an implementation for [rdflib-jsonld](https://github.com/RDFLib/rdflib-jsonld).
 - I was unaware of the notion of a static implementation of the Image API; this looks like an excellent way to support our planned feature of bundling images with the Readux exported volume (and seems preferable to generating DZI).    Presenters mentioned [Zimeon's demo-static implementation](https://github.com/zimeon/iiif/tree/master/demo-static), which I'll likely be looking at later.
 - Glad to know there are Image API and Presentation API validators, to check for compliance (either in third-party tools, or in locally developed work).
 - The presenters provided an overview of IIIF viewers, but there wasn't as much said about software for other portions - e.g., what kind of tools are available for generating Presentation manifests?  What does the roadmap look like for implementing the Auth API?
 - [https://github.com/IIIF/awesome-iiif](https://github.com/IIIF/awesome-iiif) lots of good resources to check out later