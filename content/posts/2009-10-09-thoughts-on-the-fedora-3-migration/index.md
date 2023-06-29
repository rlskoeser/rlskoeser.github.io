---
created: 1255093429
date: '2009-10-09T09:03:49'
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/10/09/thoughts-fedora-3-migration
permalink: /2009/10/09/thoughts-fedora-3-migration/
showTableOfContents: true
summary: Thoughts and lessons learned after migrating from Fedora 2.x to 3.
tags:
  - fedora
  - etd
  - smallpox
title: thoughts on the Fedora 3 migration
url: /2009/10/09/thoughts-on-the-fedora-3-migration/
---


I wanted to take some time to blog about the experience of migrating ETD and the Smallpox Eradication/GDE/GHC site to Fedora 3.x, and some of the problems, things we could do better, etc. This won't be in any particular order or very organized, just my thoughts after the experience, a sort of informal "lessons learned."



## messy data

One thing that made this migration more difficult was the need to clean up "messy" data. The content models for the smallpox content were not as well planned as they could have been, and there are also some inconsistencies-- we'd had some difficulty generating MP4 for certain of the DV master video files, we don't have transcripts for all of the interviews, etc. And of course there was also the issue that Fedora doesn't handle large files well, and Fedora 2 had a bug that prevented me from storing and calculating checksums on updated datastreams. I wrote migration scripts to clean this kind of stuff up: to add the missing checksums, to make the content models of the migrated objects more consistent, to move the large DV files out of Fedora (still referenced by Fedora, but not managed)-- but testing that and making sure it works properly before you run it on production data is tricky when your development servers don't have enough space for your test data, and running scripts on these large files is also time-consuming.

## config files everywhere

Deploying ETD and GHC requires a lot of different pieces that all need to be set up properly and talking to each other. Fedora has to be installed (and patched for the xacml), set up for Ldap authentication and an ESD department filter needed for ETD, the resource index search has to be configured, xacml access control has to be enabled and our local policies put in place. Gsearch has to be installed and configured, and since we're using Solr, that also needs to be set up and running somewhere (and solr is also slightly complicated by the fact that we're using multicore to run etd &amp; smallpox solr instances in a shared solr environment). Now that we're moving to Fedora 3.x, we're adding the OAI provider which adds yet another service with its own config file and database. Also, a lot of these are not well designed to be easy to configure. Fedora has config files in a server/config directory, but to set up the login filters you have to configure things in a web.xml file under tomcat; also, non-ldap user accounts currently have to be added manually to a text file. GSearch is even worse-- config files are buried under the tomcat directories at varying depths: a gsearch properties file, a repository definition properties file, and then an index directory with another properties file and the actual xslt used to build the index. Updating the gsearch index to add a new field for a project like ETD requires copying xslt from the ETD source code into the gsearch index, copying the etd solr schema.xml into the solr etd config directory, restarting the Fedora tomcat and restarting solr, and then reindexing.

## "maintenance" mode

Steve and I struggled a little bit with setting up apache to redirect all traffic anywhere on the site to a page that would notify users the site was down for maintenance, so that if anyone. We should have a standard, easy, documented way of doing this for times when updates or migrations are going to take any significant amount of time. I also think it might be useful for Fedora-based sites to have a "maintenance" mode that could be switched on in a config file and would allow the non-Fedora-based parts of the site to run normally, but inform the user that certain content was not available because of maintenance, upgrades, etc. --I did at one point implement something for ETD that I thought should detect Fedora being down and handle it at least somewhat gracefully, but I'm not sure this is working properly anymore. Perhaps I never actually tested this against Fedora 3...

## SSL certs

Fedora 3 now actually works when you configure the management API to run in ssl (as far as I can remember, we could never actually get Fedora 2 to work properly with ssl), and I believe this is the default configuration. However, getting Fedora configured with the ssl cert and proper hostname has been problematic, and then getting that cert installed everywhere we need it has also been an issue-- curl seems to have its own cert bundle separate from the one used by the rest of the os, Java and tomcat seem to have their own keystores, and now it seems that Gsearch doesn't do ssl properly which is breaking our per-object updates that are usually triggered when an object is modified. Right now we're running ETD and GDE on the same host as the Fedora repository, so this seems like overkill, but I'm glad we've dealt with a lot of these issues now so we know that when we move Fedora to a different host, we should be able to make it work.

## migration scripts for repository data

As I've made adjustments to the content models and the metadata for my records, I've tried to organize the scripts to make these changes like database migration scripts. For the Fedora 3 migration, I broke down the steps I needed down into multiple migration scripts to try to keep the changes as atomistic as possible (following my understanding of how database migration scripts should be written). I still think that is probably the best, because it certainly simplifies writing them and figuring out what happened when something goes wrong, but because working with Fedora is not as fast as updating a database, and because we're starting to have a fair amount of data in our repository, running all of these migration scripts took a lot longer than I would have liked. I think it probably still makes sense to structure these kind of scripts this way, but I find myself wishing there was a better option.