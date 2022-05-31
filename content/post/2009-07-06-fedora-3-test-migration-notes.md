---
layout: post
title: Fedora 3 test migration notes
created: 1246919458
tags:
- fedora
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/07/06/fedora-3-test-migration-notes
permalink: /2009/07/06/fedora-3-test-migration-notes/
---

I've completed a test-run of the Fedora 3 migration process on all of our current production Fedora 2 data (ETD and GDE/smallpox objects), following these [upgrade instructions](http://fedora-commons.org/confluence/display/FCR30/Upgrading+from+2.x). Here are some notes on my results, the process, and some problems and issues that came up along the way.

{% include _toc.html %}

## Setting up the test environment

* I requested &amp; got from Chris Roddy a new, separate Fedora 3.2 test instance on dev11-- the migration utility supplied with Fedora 3.x expects to run on everything in Fedora (this is why the initial plan to migrate ETD first and GDE later was scrapped, and instead they will both be done in tandem)
* I copied everything under the production Fedora 2 data/objects directory to my test fedora data/objects path (this only includes the foxml, which is all the migration utility cares about; if we had enough space on dev11, I would have preferred to mirror the datastreams content as well, but instead ended up copying over selected datastream files to test disseminators after the migration was complete).

## Running the analyzer

I used these settings in my migration properties file:

{% highlight java %}
  outputDir=/home/rsutton/migration-output
  clearOutputDir=true
  fedoraHome=/home/fedora32a
  jdbcJar=/home/fedora32a/tomcat/webapps/fedora/WEB-INF/lib/mysql-connector-java-5.1.6-bin.jar
  ignoreAspects=MIMETypes FormatURIs
{% endhighlight %}

The only setting really important to retain when we run this migration for real is the last one.  In a couple of cases (ETD file objects, some of the smallpox records), we have a range of file types that are present in the same datastream, and for now we want to keep those consolidated in just a few content models, although hopefully in the future we will be able to handle them better.  This does mean that we don't automatically get mimetype information in the auto-generated content models, but I've done my best to add that back where appropriate.

After the analyzer ran, I edited and reviewed all the text files and renamed the numeric content model names produced by the script (e.g., cmodel-1) with more meaningful names.  Here's a brief summary of the results of that (please note, all cmodel pids/names are preliminary and subject to revision).

### ETD

* cmodel-2 = ETD : XHTML/MODS/PREMIS datastreams; 328 objects - new pid emory-control:ETD-1.0
* cmodel-1 = etdFile : DC + FILE (binary - pdf, original, etc); 1201 objects; emory-control:EtdFile-1.0
    * file types: 540 pdf; 481 MS Word; 70 MS Docx; 50 unknown; various zip, LaTeX, text, and a few video &amp; image
* cmodel-3 = (etd) user : MADS; 347 pids - emory-control:AuthorInfo-1.0
* cmodel-18 = collection: 1 pid (currently only in use for Undergraduate Honors Collection); emory-control:Collection-1.0
* cmodel-17 = skos hierarchy : 1 pid (Programs); emory-control:Hierarchy-1.0 (may not actually need a content model)

### GDE/smallpox
* cmodel-6 = record : MODS, MASTER (binary, mostly pdf), no behaviors; 37 objects; emory-control:SmallpoxRecord-1.0
* cmodel-5 = image : MODS, MASTER (image), image behaviors; 91 objects; emory-control:SmallpoxImage-1.0
    * currently 123 additional image objects with duplicate disseminators; these will be converted to SmallpoxImage also
* cmodel-7 = MSWord : MODS, MASTER (MS Word), doc-to-text behaviors; 2 objects; emory-control:SmallpoxMSWord-1.0
* cmodel-9 = audio : MODS, MASTER (audio), MP3, TRANSCRIPT (MS Word), doc-to-text behaviors; 21 objects; emory-control:SmallpoxAudio-1.0
* cmodel-11 = video : MODS, MASTER (dv video), MP4, video preview behaviors; 62 objects; emory-control:SmallpoxVideo-1.0

Note that not all of the smallpox records are represented here.  One thing that the results of the analyzer point out is that we really should get our data in a good, clean state before we attempt to migrate it.  In the case of the GDE records, we have a lot of odd-ball stuff.  We have a few problem videos where we've been unable to generate MP4s; some objects have "extra" content (e.g., some video presentations are accompanied by PowerPoint files; one field document PDF has a thumbnail image datastream).  For the most part, I think these can be ignored and treated as optional datastreams.


My eventual hope is that all smallpox objects would have a content model of SmallpoxRecord (where we can attach behaviors for metadata transformation, etc), and then additional behavior or file types would be handled with additional, possibly multiple content models.  E.g., what is now a SmallpoxVideo record with a transcript should be a SmallpoxRecord that is also a SmallpoxMSWord (for doc-to-text behaviors on the transcript) and a SmallpoxVideo (for video image preview behavior on the MP4).  My experience with testing the fedora migration utility tells me that this should NOT be done now, but is something that should be handled at a later point (more on that later).

### discards / old data

Apparently old Fez ETD objects are still present in the production Fedora 2.  Because of Fez's strange object models and datastreams named according to user filenames, almost every one of these objects was detected by the migration utility as having a distinct content model (about 36 objects total). My recommendation is that these objects should be removed from the production Fedora repository before we migrate our content.

## Running the xslt generator

I ran the generator step of the migration utility, which generates xslt to convert all the objects according to the files generated by the analyzer.  On my first test run of this migration (which failed pretty miserably), I attempted some pretty heavy customizations of these xslts to accomplish some other object changes that we want and that I thought would be appropriate / reasonable to do as part of the Fedora 3 migration.  I discovered a couple of important things along the way, and that was part of the reason I concluded that this migration utility should be used for the bare minimum, to get from foxml 1.0 to foxml 1.1 and the rest should be done by external scripts through the fedora APIs.


Here are some things I discovered.

All of my RELS-EXT datastreams have rdf:**d**escription instead of rdf:**D**escription, which means that the xslt to add new content model relations does not work.  I must have mis-read some documentation or been careless at some point, because it looks like I made this error early on and have carried it all the way through the rest of my work.  All the features of Fedora that build on the rels-ext (namely, the resource index) have worked fine with this or I would have caught it, but the xslt that handles this is pretty particular.  I thought about updating the xslt to fix this as part of the migration, but decided against it because this particular piece of the xslt is pretty complicated, and also because of another discovery.

Because my first attempt to customize the xslt conversions resulted in invalid foxml, my objects were sort of half-way indexed into fedora (it was very strange).  In the process of trying to figure it out, I discovered that not only were my converted objects no longer valid (my fault), but that the datastream checksums didn't match.  Here's the big red flag that made me scale back everything I wanted to do with the migration utility: the xslt conversion is modifying an existing datastream (the rels-ext) to add a hasModel relationship to the newly generated content model object.  However, it does not (and cannot) update the datastream checksum, which is no longer valid because the contents have changed.  This means that we are bypassing all the normal safeguards and protection of using the Fedora APIs to mess with the internals of the foxml.  This _may_ be appropriate for a migration like this, but it still bothers me, and I think our use of such tools should be kept to a minimum.

## The rest of the migration...

After my first attempt to customize the xslt failed so disastrously and I made these important discoveries, I ran the generator and transformer again with the bare minimum of changes needed for our objects to be migrated (changing the rdf:Description filter to rdf:description so content model relations would be added).  I then was able to run the transformer, rebuild the fedora index with the new content, and access the converted objects in Fedora.

I ingested the content model &amp; behavior objects, and with a few tweaks of the relations between sdef/sdep and cmodel, successfully viewed the results of a couple different smallpox dissemenations.

The (draft) control objects have been put into subversion for now, where we can tailor them as needed and have them readily accessible whenever we are ready to run this Fedora 3 migration in production.  https://svn.library.emory.edu/svn/fedora/control-objects/
