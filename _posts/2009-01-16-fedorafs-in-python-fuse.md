---
layout: post
title: FedoraFS in python FUSE
created: 1232132308
tags:
- python
- fuse
- fedora
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/01/16/fedorafs-python-fuse
permalink: /2009/01/16/fedorafs-python-fuse/
---

I got a little time to play with some new technologies (python and [FUSE](http://fuse.sourceforge.net/), or Filesystem in User Space) and interfacing them with a somewhat more familiar technology, the FEDORA repository.

Chris Roddy had the idea for this long ago- how powerful would it be to be able to access content in Fedora as a mounted filesystem?  Especially if we could access dynamic disseminations as if they were regular files.

On those quiet two days between Christmas and New Years when I was at work for some reason, I decided to look at the fuse documentation.  I found a pretty good python implementation (python-fuse) with some tutorials to get me started.  It gave me a chance to learn a little more python, try out the python-fedoracommons library posted on googlecode for connecting to Fedora, and learn about FUSE.

FedoraFS is working enough to be possibly useful, although the code could certainly be improved and there may be some performance issues (decent speed on one workstation but unbearably slow on another for no apparent reason).  Current features:

* access to object top-level properties, datastreams, and disseminations (probably only works/makes sense for disseminators with no parameters)
* access to related objects (when there is a rels-ext relation to another fedora object)
* access to all revisions of datastreams and disseminations
* write access to xml datastreams (experimental)

More details are in the readme file in the source code.  Has mostly been tested against Fedora 2 repositories; the python-fedoracommons code currently only has the RESTful implementation for Fedora 3, although updating the fedora2 SOAP/REST API classes to work with Fedora 3 probably wouldn't take too much work.

Related links:

* [fedorafs source](https://svn.library.emory.edu/cgi-bin/viewvc.cgi/fedora/fedorafs/trunk/src/)
* [python-fedoracommons](http://code.google.com/p/python-fedoracommons/)
* [FUSE](http://fuse.sourceforge.net/)
