---
date: 2012-11-12
excerpt: A technical discussion of the process of generating a network graph of authorial influence using DBpedia, SPARQL, and Gephi.
featured_image: /images/posts/networking-belfast/author_influence_banner.png
image: {}
original_url: http://disc.library.emory.edu/networkingbelfast/dbpedia-writers-influence/
tags:
  - networking-belfast
  - experiments
thumbnail_image: /images/posts/networking-belfast/author_influence_thumb.png
title: Using DBpedia to graph writers influence
url: /2012/11/12/using-dbpedia-to-graph-writers-influence/
---


{: .info}
A technical discussion of the process of generating a network graph of authorial influence using DBpedia, SPARQL, and Gephi.

<div style="float: right;">
<script src="http://zoom.it/mYGm.js?width=350px&amp;height=350px"></script>
</div>

The image to the right is a network graph of author influence that I generated based on data from [DBpedia](http://dbpedia.org/). I’m sharing it here because I think it is an interesting and cool way to show off some of the power of linked open data, and to start looking at and thinking about the networks of connections between authors.

Most diagrams of the linked-data web that I have seen (like the image below) put DBpedia somewhere at the center, and it’s certainly come into play as we start working on this project. We’re currently working on making use of the [DBpedia Spotlight](http://spotlight.dbpedia.org/) service to identify and annotate named entities in our target content, and several of the data sources we have looked at include references or equivalence to DBpedia resource URIs (to get an idea of what Spotlight does, try out the [demo](http://dbpedia-spotlight.github.com/demo/) to annotate some text of your own).

This means that I’ve been spending time looking at individual records (like the one for [Seamus Heaney](http://dbpedia.org/resource/Seamus_Heaney) or [Michael Longley)](http://dbpedia.org/resource/Michael_Longley) to see what kind of information is actually available to us. For instance, we’re using DBpedia Spotlight for discovery, but want to store [VIAF](http://viaf.org/) (Virtual International Authority File) identifiers where we can, so we need a way to map DBpedia resource URIs to the equivalent VIAF resource. Some DBpedia records include a [viaf property](http://dbpedia.org/property/viaf), but not all of them; the viaf property is generated from the authority control link at the bottom of an author’s Wikipedia page, which isn’t always present.

{{< figure src="http://richard.cyganiak.de/2007/10/lod/lod-datasets_2011-09-19_1000px.png" caption="Linking Open Data cloud diagram, by Richard Cyganiak and Anja Jentzsch. (http://richard.cyganiak.de/2007/10/lod/)" class="callout-left halfwidth" >}}

In the process of looking at and working with some of the DBpedia records for the Belfast poets, I noticed a couple of interesting properties: [influenced](http://dbpedia.org/property/influenced) and [influenced by](http://dbpedia.org/ontology/influencedBy). Around the same time I discovered this, I happened across a blog post that discusses using this influence information to [graph the history of philosophy](http://drunks-and-lampposts.com/2012/06/13/graphing-the-history-of-philosophy/), and a related post that extends the approach to [graph the entire influence network on wikipedia](http://griffsgraphs.com/2012/07/03/graphing-every-idea-in-history/). I decided to do something similar, but I’m looking at authors instead of philosophers, and instead of casting a wider net, I decided to see how I might narrow the data to Irish authors.

What follows are some SPARQL queries I used to get authorial influence information. If you want to get a better idea what the query returns, I recommend you copy it and try it out in the [DBPedia SPARQL query interface](http://dbpedia.org/sparql); I have found it useful to look at the HTML results format while I’m tinkering with a query, and then switch to CSV when I’m ready to download the data and import into a tool like [Gephi](https://gephi.org/). Here’s a SPARQL query for information about which writers are designated as influencing others:

{{< highlight sparql  >}}
SELECT ?source ?target
WHERE {
  ?p a dbpedia-owl:Writer .
  ?p dbpedia-owl:influenced ?i .
  ?p rdfs:label ?source .
  ?i rdfs:label ?target
  FILTER langMatches( lang(?source), "EN" ) .
  FILTER langMatches( lang(?target), "EN" )
}
{{< / highlight >}}

This is very similar to the query used for the philosophers in the post I linked above, but instead of looking for philosophers I’m restricting my results to writers, and I’m actually using the English labels in DBpedia instead of decoding the URIs. This suggests one immediate value of this type of linked data resource: with a simple change I could export the results of this query with labels in any of the languages that DBpedia supports; this may not be as significant when we’re dealing with names, but could be pretty powerful useful for other types of resources. I’m using the “source” and “target” output names here as a convenience, because I’m planning to save the results as CSV and import them into Gephi as “edges” or connections between nodes, and let Gephi automatically generate the nodes based on these connections.

After looking at the author-influence network, I wanted to limit the data to just Irish authors. It took me a couple of tries to find a useful property to filter on; there is a [nationality](http://dbpedia.org/ontology/nationality) property set to [Irish people](http://dbpedia.org/resource/Irish_people) for some of the authors we’re working with, but strangely it’s not set for everyone; eventually I settled on the subject [Irish poets](http://dbpedia.org/resource/Category:Irish_poets). Because this is a much smaller dataset, I took some extra effort to write a query that would find all influence relationships where the Irish poet was either the person being influenced or being influenced by others, and I’m using both the “influenced” and “influencedBy” properties. It’s an interesting graph, but it also starts to show some of the limits of DBpedia; it’s great as a broad resource, but it’s clearly biased towards the interests of Wikipedia contributors, and if you try to drill down into specifics you may find there isn’t a lot of depth.

<script src="http://zoom.it/6SwtK.js?width=auto&height=400px"></script>


For anyone who’s interested, here’s the more complicated query I used to gather the data about Irish poets and influence:

{{< highlight sparql  >}}
SELECT ?source ?target
WHERE {
  ?p a dbpedia-owl:Writer .
  ?p dcterms:subject category:Irish_poets
  {
    ?p dbpedia-owl:influenced ?o .
    ?p rdfs:label ?source .
    ?o rdfs:label ?target }
  UNION {
    ?o dbpedia-owl:influenced ?p .
    ?o rdfs:label ?source .
    ?p rdfs:label ?target
  }
  UNION {
    ?p dbpedia-owl:influencedBy ?o .
    ?o rdfs:label ?source .
    ?p rdfs:label ?target
  }
  UNION {
    ?o dbpedia-owl:influencedBy ?p .
    ?p rdfs:label ?source .
    ?o rdfs:label ?target
  }
FILTER langMatches( lang(?source), "EN" ) .
FILTER langMatches( lang(?target), "EN" )
}
{{< / highlight >}}

* * *

{: .info}
Network graphs generated with [Gephi](https://gephi.org/); deep zoom images generated and hosted by [zoom.it](http://zoom.it/).