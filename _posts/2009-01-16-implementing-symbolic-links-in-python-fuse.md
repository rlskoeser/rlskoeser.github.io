---
layout: post
title: implementing symbolic links in python-fuse
created: 1232137046
tags:
- python
- fuse
- fedora
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/01/16/implementing-symbolic-links-python-fuse
permalink: /2009/01/16/implementing-symbolic-links-python-fuse/
---

I wanted to use symbolic links in my FedoraFS because it seemed like the simplest way to accomplish what I wanted to do to handle relationships between objects.

My file structure in FedoraFS looks something like this (simplified to focus on what is relevant for symlinks):

* pid:1/
    * DC
    * RELS-EXT
    * hasMember/
        * pid:2
* pid:2/
    * DC
    * .. (etc)

The mount point contains directories corresponding to fedora objects, and each pid directory contains the "contents" of that object (properties in an info file, datastreams, disseminations, versions, etc).  When an object has a relationship to another object defined in the RELS-EXT, I thought it would be useful to represent that relationship as a kind of "container" or directory.  But, to keep the path parsing as simple as possible in the FedoraFS class, the pid in this relation directory should point back to a top-level object that can be handled normally.

The two important pieces of the code that make this work:

* In the getattr function of my FedoraFS fuse class, when I have parsed the path and determined that attributes are being requested for a related object, I set the mode on the stat object so that the file will be seen as a link: ``st.st_mode = stat.S_IFLNK | 0755``
* Then, in the readlink function of the FedoraFS class, return the **path** for what you want the symlink to link to.  In FedoraFS right now the code looks like this:

   {% highlight python %}
   def readlink(self, path):
       # for now, the only symlinks supported are /pid/relation/relpid
       pe = path.split('/')
       pid = pe[-1]
       #  last element is pid - link to top-level pid entry
       newpath = "../../" + pid
       return newpath
   {% endhighlight %}

A note on using IFLNK in getattr-- I didn't actually see this documented anywhere, but I think I saw it mentioned somewhere and figured it out in analogy to the other stat constants I was already using in the getattr function, S_IFDIR for directories and S_IFREG for regular files.  I found a list of these constants somewhere in the documentation or the source code or something.  Other mode/stat constants mentioned in the same place: IFBLK, IFCHR, IFREG, IFIFO, IFSOCK.  (Some interesting possibilities...)
