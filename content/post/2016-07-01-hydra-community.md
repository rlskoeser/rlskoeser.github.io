---
layout: post
title: "OR2016: Hydra Community Presentations"
date: 2016-07-01T16:40:53-04:00
tags:
    - OR2016
    - fedora
    - Fedora4
    - open-repositories
---


Reports on Fedora 3 to 4 migration, preservation, mass digitization workflows, Hydra Metadata Interest Groups, and handling and modeling complicated and rich resources in Hydra/Fedora 4.

{% include _toc.html %}

[Conference session description & abstracts](https://www.conftool.com/or2016/index.php?page=browseSessions&form_session=138)


## Migrating a Hydra-Based Preservation Repository from Fedora 3 to Fedora 4

**Jim Tuttle, Jim Coble, David Chandek-Stark**

On Fedora 3.8.1; 10TB of data, with 10TB more queued and 15TB in some stage of preparation.  230k components or files; 340k objects.  Split about evenly between published and unpublished.  Two applications: one for public access, and a staff application for administration with more technical information (fixity checks, virus scans, etc).   Taking this opportunity to look at the architecture to make it more scalable, adding remote replication to DuraCloud for disaster recovery.

To simplify data migration, postponed PCDM (waiting for it to mature) and only migrated current versions - everything was versioned previously, but none of those versions were intentional or meaningful.  Data integrity validation - checksum comparison for individual objects after migration (revalidate against Fedora 3), but that doesn't tell you if everything made it over.  Ended up doing a lot of extra validation - looking at all descriptive metadata, binaries, events, etc.  Slowed down ingest, since currently only staff deposit materials.  Approach: lock a collection in Fedora 3, migrated it over, unlock it in Fedora 4, and repeat.  Moved to RDF metadata *before* migrating to Fedora 4.

Some things that were great:

 - understanding the technology you're using, like Fedora 4 running on MySQL (vs. another database backend that isn't as familiar and easy to maintain)
 - bringing in somebody in with more expertise; community of support and vendor community to draw on

Some things that were not so great:

 - comparing XML in Fedora 3 to RDF in Fedora 4 was hard to check equivalence and migration success
 - using technology that is not well understood or documented, e.g. LevelDB
 - pyramid TIFFs in external datastreams; no external datastream analog in Fedora 4, so needed special handling
 - Java: garbage collection, heap size, concurrent operations, number of workers - 20% of objects in a migration had transient errors (although in every instance it migrated fine on the second pass, except for the fedora-migrate gem 2GB size limit; pull request in place for that)

 Conclusion:

  - buy all the RAM
  - don't trust anything (validate everything)
   - be patient (e.g. waiting for MySQL support)

## Linking Assets for Preservation with Fedora 4

*Michael Durbin*

A lot of content in a lot of systems; Digital Image Tracking system:1.4m images, 73TB; Institutional Repository (small, but unique); Legacy Fedora 3 content (400k objects); Avalon, 55TB of data; Born Digital Content, Finding Aids, Dataverse, etc.

APTrust - consortial digital preservation system.  Has a reasonable ingest protocol - but all that diverse content from different systems doesn't fit neatly in the bags.   Needs normalization - has to happen or there will be too many paths to APTrust, but can't occur within the native systems; can't postpone preservation until everything is migrated to Fedora 4 and PCDM.  Systems that are the least normal are probably the most likely to fail.  Also need to have a system that will store preservation metadata.

Created a preservation staging repository in Fedora 4 with everything that will be preserved.  Links to the canonical record; technical metadata with links to URLs that resolve to filesystem content.  Annotate everything with enough metadata to facilitate preservation workflows.  Using custom ontology, but subclassed for interoperability (see the [ontology](https://github.com/uvalib/preservation-manager/blob/master/src/main/ontology/uvapresv3.xml)).  This is *the* repository for preservation metadata.

If you normalize the data in the code, then all the logic for making sense of it lives in the code - so normalizing it in the repository means that logic is visible and stored.

Why Fedora 4 is a good solution:

 - linked data; referencing canonical systems, adding and annotating with metadata
 - triplestore and sparql query allows for flexible queries that would otherwise be very difficult
 - multitenancy through WebAcess Control; non-admin users can be granted full write privileges on a container (some changes in Fedora and Hydra, but may already be live now)

Threats addressed:

 - how do you know what you've lost if you're using file system or use a hard delete and remove from Fedora? (no trace when removed)
 - what if you lose track of an external system?
 - loss of unrecorded institutional knowledge - putting stuff in Fedora 4 that never would have made it into Fedora 3, no UI for search (rights information, provenance, supplemental materials).
 - all your eggs in one basket (external cloud-based preservation)

 Restoration: test your backup and restore functionality; see how long it takes to restore, how long to reindex everything into your triplestore.

## Fedora’s place in mass digitization workflows

*Juliet L. Hardesty*

Indiana University mass digitization effort to digital preserve 300,000 audio/video recordings by 2020.

Access repository: Fedora 3 based Avalon instance.  Provides end-user access only.

Preservation repository: working on HydaDAM2 based on Fedora 4.  Focus on search/discovery and browse on technical metadata as RDF properties.  All media files are put together in a single side object, even for a multi-side physical object.

Using Fedora 3 for descriptive metadata at object label, and provide access to streaming derivatives.  Fedora 4 groups objects, but no intellectual structure or descriptive metadata - access to masters/originals.  Will preserve the separation of repositories even when moving to Fedora 4 for access.

## How the Hydra Metadata Interest Group can inform Fedora

*Juliet L. Hardesty*

Technical metadata - baseline recommendations for technical metadata that can be used on non-RDF resources (binary files) when uploaded to Fedora.  Sufia & HydraDAM2 making use of these.

Rights metadata working group established a baseline as well - rights statement and holder; could this eventually be required & managed at the Fedora object level?

Descriptive metadata - reviewing DPLA/Europeana data models, could this be required at the Fedora object level?  Also looking at RDF, sharing pain points; MODS & RDF subgroup is mapping complex MODS XML to RDF.  Could this become a migration step to map MODS to RDF?

Applied linked data group is looking into a linked data fragments server interface; faceting & search of linked data in an application; recommendations for linked data vocabularies.

URI mangement group is looking at recommendations for creating and maintaining URIs; functional requirements for a Hydra controlled vocabulary manager (local vocabularies, or finding a useful external vocabulary).

Structural metadata: W3C recommendations and other standards for referring to segments of a file for various formats, documenting those.  PCDM is still a big question; is there a way to deal with METS, transform into PCDM or RDF?

Recommendations are shared with Hydra and Islandora community; not currently being shared with the Fedora commuity, but maybe should be.

## York’s Archbishops’ Registers Revealed

**Julie Allinson**

Complicated, rich data source with a lot of conceptual modeling challenges.  Not all pages are the same size (e.g., fold outs in different directions).

Have an existing, well-established workflow for Fedora 3, using a spreadsheet and folder-based ingest.  Using IIIF image and presentation.  Images are not enough - written in dense, ecclesiastical Latin.  Built an editing tool that will make it possible to put in more information.

Challenges:

 - lots of linked objects (big graphs) lead to performance issues
 - PCDM / Hydra F4 implemention changes
 - balance modeling purity against user needs
