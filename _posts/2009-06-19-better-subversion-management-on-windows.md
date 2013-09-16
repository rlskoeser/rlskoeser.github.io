---
layout: post
title: Better Subversion Management on Windows
created: 1245444316
categories: svn workflow
---
<p>For all those Netbeans/Windows developers out there I found a much better way to interact with Subversion through Netbeans than the standard Netbeans SVN plugin.</p><p>TortoiseSVN is a fantastic subversion client for any Windows developer but as of now the 1.6.x branch does NOT work with Netbeans 6.5.</p><p>Instead head to the <a href="http://sourceforge.net/project/showfiles.php?group_id=138498&amp;package_id=151948" target="_blank">TortoiseSVN repo</a> and grab version 1.5.9 and install that. It should work fine with Netbeans and using it will give you a bunch of other options at the folder level not available in Netbeans itself.</p><p>For instance I'm able to ignore all my compiled Python binaries by just setting properties 'svn:ignore *.pyc' in the folder and these settings carry over into Netbeans, allowing me to do my commits normally.</p><p>Additionally Tortoise provides MUCH better Merging/Branching and other typical SVN features a developer can't do without.</p>
