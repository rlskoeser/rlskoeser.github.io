---
layout: post
title: "OR2016: Dive into Fedora4"
date: 2016-06-15T16:16:05-04:00
tags:
    - OR2016
    - fedora4
    - open-repositories
---

Presentations on Fedora 4 current state as praxis rather than just software, history of the Fedora approach, API-X extension architecture, and a whirlwind view of migration considerations to preserve structure and metadata but take advantage of Fedora 4 and linked data.

{% include _toc.html %}

[Conference session description & abstracts](https://www.conftool.com/or2016/index.php?page=browseSessions&form_session=127)

## Fedora 4: Specification vs. Implementation

**Andrew Woods, Adam Soroka**

The next big thing on the Fedora roadmap is a clear specification of Fedora as an API and set of services.  There are drafts that need to be reviewed and commented on - if it's not meeting your needs and doing what you want it to do, then submit your feedback.

Significant effort in transitioning from Fedora 3 to 4.  How do invest that energy into a resilient, flexible Fedora 4 foundation?  Hopefully one that will, over time, will require less and less work to maintain.  It's difficult to maintain a large custom codebase - so, working to make it smaller.  The use of Fedora over the last several years has provided a pretty good idea of where it sits in institutional infrastructure.

Aligning Fedora with existing standards.  Fedora as a specification vs. an implementation (or implementation*s*).  This should provide flexibility over time to take advantage of emerging technologies that can handle things better.

5 + 1 Repository Services (5 RESTful services and one that's a bit different)

6. CRUD → W3C Linked Data Plaform
5. Authorization → W3C Web Access Control  (Linked Data approach to authorization)
4. Event Messaging (this is the +1); asynchronous integration with the larger technical environment
3. Versioning → IETF Memento extended (does about half of what we want: API standard for *retrieving*, but not for creating versions).
    Fedora API deals in versions, not representations of history; gives implementations the freedom to decide what that means.
2. Fixity Checking: for transfer, RFC 3230; on-demand fixity modeled in LDP - not a simple number, but an RDF description.
1. Batch Atomic Operations (formerly transactions).  Mostly concerned in atomic and durability actions, but isolation and consistency aren't interesting to users *or* easy to implement.

Doing vs. using  - Fedora is not a product, it's a praxis; a way of working with your materials and infrastructure. Specifications are a way to share strong practices, that are proven and durable.

The community supports durability through a praxis of design (ontology, modeling, vocabulary) and also by shifting from software to a specification.

## Same as it Ever Was: Emerging Standards, Established Practice, and the Friction of Implementation

**Benjamin Armintor**

*(My notes don't at all do justice to @barmintor's dizzyingly surreal presentation with slide backgrounds and titles riffing on Talking Heads' "Once in a Lifetime"; look at his slides when he posts them; or if you can't do that, then read the tweets during the session to get some sense of it.)*

Long-term views.  We've been having the same conversation about what repositories are, how we should do them, building things, and then scrapping them and doing it again.

The ur-text of Fedora development - describing digital objects by key metadata and descriptions, bitstreams, unique identifiers.  Kahn & Wilensy 1995, A Framework for Distributed Digital Object Services  (No mention of HTTP, even a warning of confusing URNs with URLs)

Things have changed a lot since 1995, including all of the foundational technologies for XML, and no frameworks even existed yet at that point in time.

As we start to think about RDF and resources on the web, shift from "digital object" to "resource".  Around the same time, industry shift to horizontal scalability and microservices.

Fedora object as a linked data fragment; services to find objects and make assertions about them are more linked data fragments; other services fit under content negotation or microservices.

LDP - all of those familiar things from existing Fedora are now subsumed in W3C standards (except you still need to do those original things too, and might not have exact guidance on how).   How do we address those gaps in LDP?  Resist the temptation to do Fedora things; instead, nudge these specifications into the direction we need.  That original F.E.D.O.R.A. was an acronym for an architecture, not necessarily a software implementation.  An approach for responsible library practices.

## API Extension Architecture Project: Introduction and Update

**Aaron Paul Birkland**

Function of and around a repository (some movement around between these layers, e.g. whether transform or auth is core):

**Fedora API**: reference implementation aligned with the specification

**Optional repository software add-ons**: not part of the spec, but part of the implementation (Java code, java APIs, Fedora webapp; audit, authorization, transformation)

**API-X - binding services to repository resources**: e.g., middleware to make a "public face"; HTTP layer.

**Asynchronously coupled services**: independent, standalone, de-coupled tools like Fuseki, Solr

One modality for API-X: intercepting requests and producing alternate versions of either the request or the response.  Another modality: exposing services at URIs associated with an object (some similarity to Fedora 3 disseminators).

API-X is the middleware, a framework for expressing and defining these patterns.

Hypothetical example: listing service for ordered PCDM.  API-X makes it possible to expose a public URI for a service that does all the hard work of generating this list.

Information  model: what objects have this service? Where is the URI to access the service?  And where is the backend service that implements it?  Compare to Fedora 3 content model architecture with service definitions and service deployments.  API-X is *not* an implementation of the dissemenation architecture of Fedora 3, it adopts some of the good parts.

Information model: What class of resources are relevant for this extension?  Can we describe this class in an ontology?  Can we infer that a repository resource is described by our class?

What about handling POST or PUTs to the service? API-X doesn't care; what if you want to resolve with a different code for some content.

The API-X design/specification draft is in progress, due July 7th.  Several institutions are implemnting their own extensions (package ingest, binary derivatives, multipart POST ingest, validation).

GitHub Repository: [fcrepo4-labs/fcrepo-api-x](https://github.com/fcrepo4-labs/fcrepo-api-x); [use cases on the duraspace wiki](https://wiki.duraspace.org/display/FF/API-X+Use+Cases)

## Fedora migration considerations

**Juliet L. Hardesty**

Migration considerations, dealing with both structural and descriptive metadata.

Examples of objects to be migrated:

- Finding Aid content, page images that are part of a document in a folder; using RELS-EXT and isPartOf (bottom-up hierarchy), with METS for structure (top-down).
- Simple image in a collection with descriptive metadata.
- Audio with two sides - two objects that are part of a single item, with custom technical metadata and descriptive metadata at the top-most item level.

Relations in Fedora 3 are in RELS-EXT or METS structure.   For Fedora 4, shifting from METS to PCDM.

METS sequence file group by use (e.g. thumbnail); structmap provides hierarchy from top down by document, pages in each document, files for each page (full size, screen size, thumbnail).    in PCDM, each page object is a direct container; document is an indirect container with proxies to the page objects, as is the collection.  The proxying allows declaring ordering (first, last, next, and previous).  In this case, next and previous can be used to link between pages in different documents.

Transforming METS to PCDM  - migration is easier if identifiers are brought over to associate with a migrated object.  Probably not a single solution for all content types.

Considerations for structural metadata: RELS-EXT relationships in Fedora 3 can be brought over into Fedora4; there are existing tools, but nothing that maps into PCDM.  Other structure datastreams have to be modeled; METS is possible to map programmatically but maybe not in a standard way.  Structure for a time-based object may still need to be handled separately.

Considerations for descriptive metadata.  (IU has MODS across the board, but DC for some content).  Two migration tools (migration-utils and fedora-migrate gem) - both match object to object, but you don't get much for descriptive metadata.  Neither of them really takes advantage of the Fedora4 triplestore unless you're already using RDF.   Another option: map descriptive metadata into simple RDF statements - this works pretty well for DC.  Going from MODS XML to RDF makes it challenging to map to simple statements; the MODS RDF ontology that's out there creates complex, hierarchical RDF that doesn't really work in Fedora 4.  The downside of this approach is that for complicated metadata, you might not get a one-to-one match from the original metadata.  A third option: complex, hierarchical information can be stored in the external triplestore; only the simple statements are stored on the Fedora 4 object.  This is more flexible, not limited to simple RDF; changes the focus of updates to metadata (more through the triplestore than Fedora).  The downside is that the metadata is divided between the repository and triplestore, and may need to store a duplicate copy of the original metadata in Fedora for long-term storage.  "Almost" option 4: MODS "unofficial standard" mapping to RDF.  This is available now, and may offer a standard way to transform, but it's a work in progress.

At Indiana University, assessing what metadata is required where and how to manage it; transforming MODS to RDF; keeping the original descriptive metadata since it won't be fully replicated in the RDF.  Part of this transformation probably includes making better use of linked data - e.g., converting from text labels into URIs - so your metadata is going to look different.
