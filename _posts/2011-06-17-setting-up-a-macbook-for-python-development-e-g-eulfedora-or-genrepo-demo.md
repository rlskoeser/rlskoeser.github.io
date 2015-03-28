---
layout: post
title: Setting up a MacBook for python development (e.g., eulfedora or genrepo-demo)
created: 1308336575
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2011/06/17/setting-macbook-python-development-eg-eulfedora-or-genrepo-demo
permalink: /2011/06/17/setting-macbook-python-development-eg-eulfedora-or-genrepo-demo/
---

Normally, I do my development on an Ubuntu workstation, which I've got pretty much set up and customized and I know how to manage it. But for my recent trip to the [Open Repositories 2011 conference](https://conferences.tdl.org/or/index.php/OR2011/OR2011main), I was given a loaner MacBook Pro as a travel machine (which, I have to admit, has been pretty nice to work on). This was particularly useful-- since I knew that at least a couple of the people who would be attending our pre-conference [tutorial](http://eulfedora.readthedocs.org/en/latest/tutorials/fedora.html) on programming with [eulfedora](https://github.com/emory-libraries/eulfedora) were planning to do their development on OSX, this gave me a chance to test installing everything ahead of time.

What follows are the my setup notes for getting a new MacBook Pro (64 bit, Snow Leopard) set up and configured so I could do python/eulfedora development work. I'm sure my notes are idiosyncratic, but I'm posting them in case I ever need to do this again, and in case they are helpful to others (since it was invaluable to me to find the odd blog post or forum discussion addressing some of the various snags and issues I ran into).

First, I installed Google Chrome (I'm just not used to Safari), and then Python 2.7 using the Mac installer from the [Python downloads](http://www.python.org/download/releases/2.7.2/). (I think now that a new enough version of Python was probably already installed and I could have just used that, but I'm not sure how to easily confirm.)

Since I wanted to work with eulfedora and genrepo-demo (among other things), which are both hosted on the [emory-libraries github](https://github.com/emory-libraries), I set up git as described here: [http://help.github.com/mac-set-up-git/](http://help.github.com/mac-set-up-git/)

Since eulfedora and the other pytho-eul* libraries are configured to be easily set up with virtualenv and pip, I grabbed those tools first with easy_install:

``sudo easy_install virtualenv pip``

One of the python libraries we use is [lxml](http://lxml.de/), which is sometimes a pain to install, since it needs to be compiled against libxml and libxslt. I installed the OSX developer/xcode tools from the application install CD so that I could pip install packages that need to be compiled.

I also discovered (after some trial and error) that you have to tell Python/setup toolsnot to try to compile things for ppc, since current versions of xcode don't actually support it - this can be done by setting ARCHFLAGS to not include ppc:

``ARCHFLAGS="-arch i386 -arch x86_64"``

I think that libxml and libxslt probably were already installed on the system, but if you are on a system that doesn't have them, you can use STATIC_DEPS as a work-around. The example I saw suggested you run this step first, without sudo:

``STATIC_DEPS=true easy_install lxml``

This will download the libraries you need available to install lxml. After that you should be able to install lxml normally, via sudo easy_install or pip.

The current version of [genrepo-demo](https://github.com/emory-libraries/genrepo-demo) does a little bit of mimetype checking on uploaded files before ingesting them into the repository. This uses python-magic, which needs information about file types. Do get that working, I installed darwinports from [http://www.macports.org/](http://www.macports.org/)and then all I had to do was:

``sudo port install file``

I think that was basically it for the libraries and configuration side of things.

I primarily use Emacs as my editor, and I took a look at Aquamacs, since I know other Mac users who like it - but it seemed foreign and not quite what I wanted, so I was quite pleased to discover that GNU Emacs was available for OSX - and I was able to copy over all my emacs configurations and customizations (including python and django modes, and autocomplete) and basically have things work.

I also spent a little bit of time playing with [fedorafs](https://github.com/emory-libraries/fedorafs) - I knew there was some implementation of FUSE for OSX, but not much more than that. The downloaded installer for [macfuse](http://code.google.com/p/macfuse/) should work, and I think it should also be installable via darwinports:

``sudo port install macfuse``

However, apparently macfuse on 64-bit Snow Leopard is still a bit experimental, so I had to find an alternate built version elsewhere. Of course, then I discovered that the Python FUSE bindings I had been using don't work for macfuse (and haven't been updated in a while either), so I am looking at updating fedorafs to use [fusepy](http://code.google.com/p/fusepy/) - but that is a subject for a different post.

