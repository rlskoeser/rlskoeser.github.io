---
layout: post
title: Graph of correspondents from 4 Irish Finding Aids
created: 1273699926
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2010/05/12/graph-correspondents-4-irish-finding-aids
permalink: /2010/05/12/graph-correspondents-4-irish-finding-aids/
excerpt: Correspondent graph of four Irish authors based on FOAF generated from Finding Aids.
image:
    feature: posts/tkh/foaf_graph_banner.png
    thumb: posts/tkh/thumb_foaf_graph_subset.png
---

![Correspondents graph thumbnail](/images/posts/tkh/thumb_foaf_graph_subset.png){: .callout-left}

A few weeks ago, I spent a little bit of time on a Friday afternoon playing with some MARBL Finding Aids and trying to generating some FOAF RDF. I chose the four Irish Literature finding aids that I identified as having an Index of Selected Correspondents (_very_ few of the MARBL finding aids have them, I imagine because it is very time-consuming to create). Other Finding Aids have names of correspondents in the container list, but this was an easier starting point (and even here, there was quite a bit of messiness in the names-- dates, noms de plume, titles, all capitalized or mixed case, etc).

I finally took the time to adapt a simple python script Ben had written, and converted the four FOAF xml files I'd generated into a GraphViz chart. The image below is the section of the chart I thought would be the most interesting to share (the entire thing is quite large), because you can see many of the common correspondents shared even just among these four people.

![Correspondents graph subset](/images/posts/tkh/foaf_graph_subset.png)
