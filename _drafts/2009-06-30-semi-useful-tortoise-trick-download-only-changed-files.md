---
layout: post
title: ! 'Semi-Useful Tortoise Trick: Download Only Changed Files'
created: 1246396423
categories: svn tortoise
---
<p>I was recently poking around in Tortoise and discovered how to export the set of files that changed between two revisions. I don't think this is possible thru the SVN command line without some maual intervention. This is different than updating your working copy to a particular revision or the HEAD revision.&nbsp; It produces an unversiond copy of only the files that have changed.</p><p>For example, if you created a branch at r10 and your last change to that branch is r25, the result will be a directory structure with only the files that were changed in r10-r25.</p><p>&nbsp;</p>
