---
created: 1247581406
date: '2009-07-14T10:23:26'
original_url: http://techknowhow.library.emory.edu/blogs/rsutton/2009/07/14/or09-adore-djatoka
tags:
  - open-repositories
  - fedora
  - jpeg2000
title: 'OR09: aDORe djatoka'
url: /2009/07/14/or09-adore-djatoka/
---

## aDORe djatoka: An Open-Source Jpeg 2000 Image Server and Dissemination Service Framework

Ryan Chute, Los Alamos National Laboratory

view presentation materials:  [http://hdl.handle.net/1853/28486](http://hdl.handle.net/1853/28486)

djatoka (pronounced J-2-K) is a JPEG 2000 image server &amp; dissemination tool that can be used with Fedora.

JPEG 2000 is an open standard, license free, has better compression, multi-resolution, and allows random access to sections of an emage, and the capaability to embed metadata within an image.

djatoka does dynamic scaling on the fly, layer extraction, etc.

There are two client image viewers currenly available (IIp, open layers); not yet available but in process are an iPhone viewer, and a Flex view. These clients are reference implementations meant for people to pick up as examples.

More details on the djatoka wiki: [http://sourceforge.net/apps/mediawiki/djatoka](http://sourceforge.net/apps/mediawiki/djatoka)

* * *

Relevance/applicability for us? Although we aren't currently using JPEG2000 anywhere yet that I'm aware of, it's my understanding that djatoka can handle other image formats as both inputs and outputs (I believe it converts other formats into JPEG2000 first). The djatoka developers have made Fedora service definition &amp; deployment objects available (as drafts/examples) that would make it easier to deploy and use the service. The quality is undoubtedly superior to the imagemanip service that comes with Fedora, and the performance, reliablity, scalability, and other features are far beyond the quick PHP-based image resizing service I created for the GDE/smallpox image content. It may also be much more resource intensive, and a heavier solution than maybe we need right now. I think we should investigate this, try installing it and integrating it with Fedora, and see how it compares to our current image behaviors.

