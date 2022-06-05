---
date: 2013-02-01
excerpt: Generating a map of places mentioned in Jules Verne’s Around the World in 80 Days.
featured_image: /images/posts/networking-belfast/80days_map_banner.png
image: {}
original_url: http://disc.library.emory.edu/networkingbelfast/places-in-around-the-world-in-80-days/
tags:
  - networking-belfast
  - experiments
thumbnail_image: /images/posts/networking-belfast/80days_map_thumb.png
title: Mapping places in “Around the World in 80 Days”
url: /2013/02/01/mapping-places-in-around-the-world-in-80-days/
---



[ ![Jules Verne's 'Around the World in 80 Days'](http://covers.openlibrary.org/b/id/6946042-S.jpg "Cover of Jules Verne's 'Around the World in 80 Days") ](http://openlibrary.org/books/OL24938416M/Around_the_world_in_80_days "Jules Verne's 'Around the World in 80 Days'"){: .callout}

The last time I re-read
<span property="schema:about" resource="http://openlibrary.org/works/OL16036612W/" typeof="schema:Book">
    <span property="schema:author" resource="http://openlibrary.org/authors/OL113611A" typeof="schema:Person">
       <span property="schema:name">[Jules Verne](http://openlibrary.org/works/OL16036612W/Around_the_world_in_80_days)</span>'s
    </span>
    <span property="schema:name">_[Around the World in 80 Days](http://openlibrary.org/works/OL16036612W/Around_the_world_in_80_days)_</span>
    <meta property="schema:datePublished" content="1873"/>
</span>
(sometime this spring, when I made a long trip myself), I was surprised to notice that Verne used a lot of very specific place names in the western United States that I wouldn’t have necessarily expected a 19th century Frenchman to know. Perhaps what caught my eye was the variant spellings of familiar names– amongst such places as Laramie, Salt Lake City, and Omaha, Verne references the “Wahsatch Mountains” and the “Tuilla Valley” (now usually spelled Wasatch and Tooele).

Here is a Google map I’ve created using some of the tools and technologies we’re using for this project (this is a short enough book that it wouldn’t be that difficult to build a detailed map of the trip, but where’s the fun in that?) The points on the map each have a links to the corresponding DBpedia record and snippets of context where the places are mentioned in the text. Below, I’ll explain more about how I created it.

<iframe width="575" height="275" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?ie=UTF8&amp;hl=en&amp;oe=UTF8&amp;msa=0&amp;msid=213428359614288492782.0004d4afde682a04c0c05&amp;start=0&amp;num=200&amp;t=m&amp;ll=30.145127,18.28125&amp;spn=132.078103,43.59375&amp;z=1&amp;output=embed"></iframe>

{: .info}
View [Places in “Around the World in 80 Days”](https://maps.google.com/maps/ms?ie=UTF8&hl=en&oe=UTF8&msa=0&msid=213428359614288492782.0004d4afde682a04c0c05&start=0&num=200&t=m&ll=30.145127,18.28125&spn=132.078103,43.59375&z=1&source=embed) in a larger map

After I finished reading the book, it occurred to me that currently available technologies should make it pretty easy to extract and map place names from the text, and since geographical location is so significant in the work it might be an interesting experiment. I went looking for maps of Phileas Fogg’s great trip and was surprised to find not much.


{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Around_the_World_in_Eighty_Days_map.png/320px-Around_the_World_in_Eighty_Days_map.png" caption="Wikipedia map of Phileas Fogg’s trip in Around the World in 80 Days" class="callout-left halfwidth" >}}

The [wikipedia page for _Around the World in 80 Days_](http://en.wikipedia.org/wiki/Around_the_World_in_Eighty_Days) has a map of the trip, but it’s just an image, and fairly high level. There’s a [Map Tales](http://maptal.es/tales/9) version, [TripLine](http://www.tripline.net/trip/AROUND_THE_WORLD_IN_80_DAYS-6343606462231004A325E3B847472428) version, and a couple of Google maps versions ([here](http://goo.gl/maps/H9lNu) and [here](http://goo.gl/maps/8imDx)), but they are still fairly high-level, and gloss over a lot of the details, which I think is what makes the trip so interesting.

When I started investigating extracting place names and generating a map, my first thought was to try [Edina Unlock](http://unlock.edina.ac.uk/home/), which I had heard about but never had the opportunity to work with. However, I wasn’t able to get any results, and it’s not clear to me if the service is still being maintained or supported. Once we started doing development for this project, I figured out that I could use the python scripts we’ve created as part of the [“Name Dropper” codebase](https://github.com/emory-libraries-disc/name-dropper). I grabbed the [text from Project Gutenberg](http://www.gutenberg.org/ebooks/103), cleaned it up a little bit and split it up by chapter, and then used the lookup-names script from namedropper-py to generate CSV files of the recognized place names for each chapter. The benefit of using DBpedia and semantic web technologies is that, once resources are identified and linked to a DBpedia resource we have all the other information associated with those items– in this case, latitude and longitude. Using the CSV data and DBpedia, I wrote some simple python code to generate a georss feed that I could import into a Google map. Some of the drawbacks to this approach are that I’m limited to the names that [DBpedia Spotlight](http://spotlight.dbpedia.org/) can identify (and I’m still trying to figure out a good way to filter good answers from bogus ones), and I’m relying on the geo-coordinates that are listed in DBpedia (you may notice on the map above that Oregon is pretty clearly in the wrong place).

* * *

For those who are interested, here are the nitty-gritty, step-by-step details of how I went from text to map.

{% comment %}NOTE: Using unorder-list instead of ordered because highlight blocks mess up ordering {% endcomment %}

-  Downloaded the plain-text version of the novel from Project Gutenberg.
-  Manually removed the Project Gutenberg header and footer from the text, as well as the table of contents.

    Note that _Around the World in 80 Days_ is in the Public Domain in the U.S., and according to the [Project Gutenberg License](http://www.gutenberg.org/wiki/Gutenberg:The_Project_Gutenberg_License), once you have removed the Gutenberg license and any references to Project Gutenberg, what you have left is a public domain ebook, and “you can do anything you want with that.”

-  Split the text into individual files by chapter using cplit
    (a command-line utility that splits a file on a pattern):
    {{< highlight csh  >}}
    csplit -f chapter 80days.txt "/^Chapter/" '{35}'
    {{< / highlight >}}

-  Ran the [NameDropper lookup-names python script](http://namedropper.readthedocs.org/en/latest/scripts.html#lookup-names) on each chapter file to generate a CSV file of Places for each chapter.
    (Note that this is C-shell foreach syntax; if you use something else you’ll have to find out the for loop syntax.)
    {{< highlight csh  >}}
    foreach ch ( chapter* )
        echo $ch
        lookup-names --input text $ch -c 0.1 --types Place --csv $ch.csv
        end
    {{< / highlight >}}

-  At this point, I concatenated the individual chapter CSV files into a single CSV file that I could import into Excel, where I spent some time sorting the results by support and similarity scores to try to find some reasonable cut-off values to filter out mis-recognized names without losing too many accurate names that DBpedia Spotlight identified with low certainty. It was helpful to be able to look at the data and get familiar with the results, but I think now I might skip this step.

-  I wrote some python code to iterate over the CVS files, aggregate unique DBpedia URIs, and generate a GeoRSS file that could be imported into Google Maps. It’s not a long script, but it’s too long to include in a blog post, so I’ve created a GitHub gist: [csv2georss.py](https://gist.github.com/4693891). I experimented with filtering names out based on the DBpedia Spotlight similarity/support scores, but I couldn’t find a setting that omitted bad results without losing a lot of interesting data, and it turned out to be easier to remove places from the final map.

-  Ran the script to generate the GeoRSS:

    {{< highlight csh  >}}
    python csv2georss.py > 80days-georss.xml
    {%  endhighlight %}

-  Made a new Google Map and imported the GeoRSS data. (Login to a google account at [maps.google.com](http://maps.google.com), select ‘create map’, ‘import’, and choose the GeoRSS file generated above. A couple of times Google only showed the first name; if that happens I recommend just do the import again, and check the box to replace everything on the map.)

- Went through the map and removed place names that were mis-recognized from common words based on the context snippets included in the descriptions. For example, I ran into things like Isle of Man for man, Winnipeg for win, Metropolitan Museum of Art for met. Because the script aggregates multiple references to the same place, each mis-recognized name only needed to be removed once. When I ran the lookup-names script with -c 0.1 I only had to remove 5 of these; when I ran it with -c 0.01 I had to remove significantly more (over 30).
