---
date: 2016-07-01 16:58:02-04:00
showTableOfContents: true
tags:
  - OR2016
title: 'OR2016 Papers 15: Let the content sing: multimedia and repositories'
url: /2016/07/01/multimedia-and-repositories/
---


Presentations on Avalon, HydraDAM2 for large files, and integrating a large multimedia cultural collection into the larger web with linked data.



[Conference session description & abstracts](https://www.conftool.com/or2016/index.php?page=browseSessions&form_session=141)

## Let the Music Live: Techniques for Managed Integration of a Unique Multimedia Collection into Public Linked Open Data Repositories

**Peter Michael Broadwell, Martin Klein**

[Presentation Slides](http://www.slideshare.net/broadwell/letthemusiclive)

Using a 15-year-old collection of mixed multimedia cultural content as a window into this problem.  Has remained largely isolated on the web.  [frontera.library.ucla.edu](http://frontera.library.ucla.edu)  A large collection, with both music and a large number of album covers and related media.  Not in public domain; orphan works because the music producers/publishers are no longer available, so users outside UCLA only get  a 90 second snippet.

More metadata, more problems.  Difficult to find authority names for the people in the collection; need to use linked data to make this collection more connected and less of asilo.

Goal: incorporate Frontera into broader semantic web:

 - Adopting metadata structure of open online music encyclopedias (MusicBrainz).  If the data is online already, how do you connect to it?  And if it isn't, then how do yuo make it more discoverable?
 - Use unique IDs from linked open data knowledge bases for people, groups, companies, songs, alboms, etc
 - adopting IDs from external LOD sites to link to them
 - automatically disseminating the linked data to other services where it isn't present already

 Inspiration: [Linked Jazz](https://linkedjazz.org/), NYPL Labs' ECCO, [LD4L](https://www.ld4l.org/), game-based crowdsourcing

 LOD integration, phase 1 - initial metadata cleaning and preparation; need to use tools that scale to huge numbers of items; audio fingerprinting

 Phase 2: discovery & linking to existing records - audio lookup in other fingerprinting services, basic search tools like [DBpedia](http://wiki.dbpedia.org/), [MuscBrainz](https://musicbrainz.org/), [VIAF](http://viaf.org/), [Discogs](https://www.discogs.com/), etc.

Phase 3: Contributing/creating new records.  Unsolicited bulk record generation may be seen as spam and get rejected; Wikipedia filters on "notable", which may include some data and not others.  Requires direct communication and participation in the knowledge base communities.  May be possible to have bots that can upload records (but could also be problematic).

LOD integration - crosswalks between different systems (e.g., MusicBrainz trusts Discogs).

In answer to a question: storing the audio fingerprint data, and hope to eventually contribute it back to the larger community.

## Avalon at a Crossroads: From Collaboration to Community

**Jon W. Dunn, Evviva Weinraub**

Avalon developed by Indiana University & Northwesten; at least 6 other adopters, but no path to contribute back.

Why Avalon?

 - Existing repositories don't work well for time-based media: download vs. streaming server; access controls are problematic within streaming servers; time-based navigation.  Conflict between long-term preservation support & library metadata and short-term access.
 - Existing media systems don't work well with repositories

 Avalon is very much a Hydra head, and makes use of other Ruby gems.  Avalon is still Fedora 3 based, but Fedora 4 is around the corner.

 Faceted browse & search via blacklight; javascript media player chosen for accessibility and compatibility; not straight HTML5/HTTP delivery for content.  Relatively new feature: navigate by structure, e.g. chapters within a video.  The player is embeddable in other contexts; media content management solution for reuse, e.g. Omeka plugin.  Includes a backend interface for ingesting & managing content, segmenting permissions and users by collection.  Multiple paths for ingest, including a new REST API in the 5.0 release.  Metadata is MODS-based, media oriented in the choice of fields are available (can be customized).  Structural metadata and access controls can also be edited.  Version 5.0 adds: playlists, using same basic model as Blacklight bookmarks and folders. Search improvements, accessibilty for ingest and delivery of captions.

 Use cases: archival film, media in archival collections, online exhibits, online publishing (e.g. with university press), licensed video shared by a consortium; learning management system, access to content from mass audiovisual digitization.

 Avalon 6.0 ~ October 2016; feature parity with 5.0 but running on Fedora 4 (not PCDM, direct port of current models).

 Future development strategies: piloting software as a service deployment model; refactoring Avalon code into modular components that can be more easily installed or reused - 7.0 Winter 2017, but this is a major shift so it can integrate with existing Hydra implementations.

## HydraDAM2: Repository Challenges and Solutions for Large Media Files

**Karen Cariani, Jon W. Dunn**

WGBH extensive content, mostly video and audio and much of it large.   Newer content is even bigger (4K scans); similar descriptive metadata for a large number of files.  Storage dependent on frequency of access and bandwidth capability.

HydraDAM1 was based on Sufia & Fedora 3; added bulk ingest, bulk edit, characterization of files, transcoding.  Issues with the workflow and pipeline, bottlenecks; easier/faster to process first before ingest.

Indiana University is using HydraDAM2 for preservation and Avalon for access; two repositories running side by side.

HydraDAM2 - update to Fedora 4, new content models; multiple options for handling storage; testing large files and high-throughput workflows.

WGBH accessing preservation file is easier to pull a tape from the vault than to move across the network.  Not storing preservation files in Fedora; just storing the location of files on LTO tap; IU stores a URL that redirects to the files.

Why not in Fedora?

 - files are big
 - costly in terms of performance to push in & out of Fedora; more cost effective to put them on tape
 - considered federation or projection, but that's now deprecated
 - volumes (petabytes) of data that are just too big and costly to put on disk

 Storing media files in either in LTO tape or in hierarchical storage system.  Asynchronous storage proxy as an interface to the storage.  The rails application has to be aware that content is not immediately available so it can provide appropriate user actions.

[github.com/WGBH/hydradam2](https://github.com/WGBH/hydradam2)