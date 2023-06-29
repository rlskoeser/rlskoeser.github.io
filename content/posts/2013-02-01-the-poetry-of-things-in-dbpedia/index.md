---
date: 2013-02-20
original_url: http://disc.library.emory.edu/networkingbelfast/poetry-of-things-in-dbpedia/
summary: An experiment with namedropper, DBpedia Spotlight, and poetry.
tags:
  - networking-belfast
  - experiments
thumbnail_image: http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Saxifraga_cochlearis1.jpg/120px-Saxifraga_cochlearis1.jpg
title: The Poetry of Things (in DBpedia)
url: /2013/02/01/the-poetry-of-things-in-dbpedia/
---


{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Saxifraga_cochlearis1.jpg/120px-Saxifraga_cochlearis1.jpg" caption="Saxifraga cochlearis" class="callout" link="http://en.wikipedia.org/wiki/Saxifraga" >}}

In his poem [A Sort of a Song](http://lion.chadwyck.com/searchFulltext.do?id=Z300228716&divLevel=3&area=Poetry&DurUrl=Yes&forward=textsFT), William Carlos Williams wrote “no ideas but in things” and “saxifrage is my flower that splits the rocks.” What I’m doing here almost certainly isn’t what he meant– in fact, I may be doing the reverse, in that I am taking a poem and words and, in a sense, converting it back to, or at least representing it as, its component “things.” Even though it isn’t quite what Williams intended, these lines kept coming to mind as I worked ont his post, and it seems related to the things in poetry I’m discussing here.

Early on, near the beginning of this project, when we were experimenting with some of the tools and technologies we thought we might use to improve the process of identifying and tagging names in XML text, I noticed some strange output when I ran some of the poetry from the Belfast group sheets against the [DBPedia Spotlight](http://spotlight.dbpedia.org/) annotation service. Because I wasn’t restricting the identified resources to persons, places, or organizations (which is what our tools usually do when we’re trying to identify names to be tagged, e.g. in the [NameDropper OxygenXML plugin](https://github.com/emory-libraries-disc/namedropper-oxygen) we’re developing), it was identifying things like “potato”, “rock”, “eye”, “mouth”, “hand”, and “root” in the text. We’re now at the point in the project that we’re starting to shift towards using the tools we’ve been developing to enhance the EAD and TEI XML associated with the Belfast Group, and as I’ve begun working on tagging some of the poetry I was reminded of this and thought it might be worth a little more investigation and thought.

For this experiment, I restricted myself to Seamus Heaney’s poem [Digging](http://pid.emory.edu/ark:/25593/17kkm#heaney1_1047), as it appears in the draft on one of the Belfast group sheets (there are some slight wording differences from the [published version](http://www.poetryfoundation.org/poem/177017 "published version of Seamus Heaney’s ‘Digging’")).

Below are the things that DBpedia Spotlight identifies in the poem. I’m using the DBpedia thumbnails (or Wikipedia thumbnails, in the few cases where the DBpedia thumbnail image link was broken) to emphasize the “thingness” of the entities that Spotlight recognizes. Each image links to the corresponding DBpedia resource, and if you hover your mouse over the image you should see a snippet of the poem where the entity was recognized. I’ve sorted them out into three groups semi-manually, since I’m still having difficulty filtering based on support and similarity scores without losing useful data, although in this case it seemed like very few of the identified resources had high certainty, I suspect due to the poetic language.

**First**, the things that DBpedia Spotlight recognized accurately, in the order that they occur in the poem.

* * *

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dedos_de_la_mano_%28no_labels%29.jpg/120px-Dedos_de_la_mano_%28no_labels%29.jpg" caption="Finger" class="dbpedia-thumb" link="http://dbpedia.org/resource/Finger" title="Between my finger and my thumb The squat pen re" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duim.jpg/200px-Duim.jpg" caption="Thumb" class="dbpedia-thumb" link="http://dbpedia.org/resource/Thumb"  title="Between my finger and my thumb The squat pen rests; snug as" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/03-BICcristal2008-03-26.jpg/200px-03-BICcristal2008-03-26.jpg" caption="Pen" class="dbpedia-thumb" link="http://dbpedia.org/resource/Pen" title="finger and my thumb The squat pen rests; snug as a gun. Beneath" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/M&Prevolver.jpg/200px-M&Prevolver.jpg" caption="Gun" class="dbpedia-thumb" link="http://dbpedia.org/resource/Gun" title="he squat pen rests; snug as a gun. Beneath my window, a rich ra" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/OldShipWindows.jpg/200px-OldShipWindows.jpg" title="ts; snug as a gun. Beneath my window, a rich rasping sound When th" link="http://dbpedia.org/resource/Window" caption="Window" class="dbpedia-thumb" >}}

{{< figure src="http://commons.wikimedia.org/wiki/Special:FilePath/Gold_Bars.jpg?width=100" title="s a gun. Beneath my window, a rich rasping sound When the spade" link="http://dbpedia.org/resource/Wealth" caption="Wealth" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Thoth08BigasDrumEvansChalmette.jpg/200px-Thoth08BigasDrumEvansChalmette.jpg" title="ath my window, a rich rasping sound When the spade sinks clean in" link="http://dbpedia.org/resource/Sound" caption="Sound" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Spade.jpg/200px-Spade.jpg" title="a rich rasping sound When the spade sinks clean into gravelly gro" link="http://dbpedia.org/resource/Spade" caption="Spade" class="dbpedia-thumb" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Sink.png/200px-Sink.png" title="rasping sound When the spade sinks clean into gravelly ground: M" link="http://dbpedia.org/resource/Sink" caption="Sink" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Phenakistoscope_3g07690b.gif/200px-Phenakistoscope_3g07690b.gif" title="twenty years away Stooping in rhythm through potato drills Where h" link="http://dbpedia.org/resource/Rhythm" caption="Rhythm" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/200px-Patates.jpg" title="ay Stooping in rhythm through potato drills Where he was digging." link="http://dbpedia.org/resource/Potato" caption="Potato" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Drill_scheme.svg/200px-Drill_scheme.svg.png" title="ping in rhythm through potato drills Where he was digging. The coa" link="http://dbpedia.org/resource/Drill" caption="Drill" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/AGM_Ancient_Greek_Pair_of_Terracotta_Boots.jpg/200px-AGM_Ancient_Greek_Pair_of_Terracotta_Boots.jpg" title="re he was digging. The coarse boot nestled on the lug, the shaft" link="http://dbpedia.org/resource/Boot" caption="Boot" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Knee.agr.jpg/200px-Knee.agr.jpg" title="the shaft Against the inside-knee was levered firmly. He rooted" link="http://dbpedia.org/resource/Knee" caption="Knee" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Primary_and_secondary_cotton_roots.jpg/200px-Primary_and_secondary_cotton_roots.jpg" title="e-knee was levered firmly. He rooted out tall tops, buried the bri" link="http://dbpedia.org/resource/Root" caption="Root" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/LightningVolt_Deep_Blue_Sea.jpg/200px-LightningVolt_Deep_Blue_Sea.jpg" title="ted out tall tops, buried the bright edge deep To scatter new pota" link="http://dbpedia.org/resource/Brightness" caption="Brightness" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Electron-scattering.png/120px-Electron-scattering.png" title="uried the bright edge deep To scatter new potatoes that we picked L" link="http://dbpedia.org/resource/Scattering" caption="Scattering" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/200px-Patates.jpg" title="e bright edge deep To scatter new potatoes that we picked Loving their c" link="http://dbpedia.org/resource/Potato" caption="Potato" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vickers-tester.png/200px-Vickers-tester.png" title="t we picked Loving their cool hardness in our hands. By God, the old" link="http://dbpedia.org/resource/Hardness" caption="Hardness" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Human-Hands-Front-Back.jpg/200px-Human-Hands-Front-Back.jpg" title="ng their cool hardness in our hands. By God, the old man could ha" link="http://dbpedia.org/resource/Hand" caption="Hand" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Creation_of_the_Sun_and_Moon_face_detail.jpg/200px-Creation_of_the_Sun_and_Moon_face_detail.jpg" title="ool hardness in our hands. By God, the old man could handle a s" link="http://dbpedia.org/resource/God" caption="God" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tool-pliers.jpg/120px-Tool-pliers.jpg" title="ds. By God, the old man could handle a spade; Just like his old ma" link="http://dbpedia.org/resource/Handle_%28grip%29" caption="Handle (grip)" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Spade.jpg/200px-Spade.jpg" title="d, the old man could handle a spade; Just like his old man. My gr" link="http://dbpedia.org/resource/Spade" caption="Spade" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/The_Favorite_by_Georgios_Iakovidis.jpg/200px-The_Favorite_by_Georgios_Iakovidis.jpg" title="de; Just like his old man. My grandfather cut more peat in a day Than a" link="http://dbpedia.org/resource/Grandparent" caption="Grandparent" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Scissors.jpg/200px-Scissors.jpg" title="e his old man. My grandfather cut more peat in a day Than any o" link="http://dbpedia.org/resource/Cutting" caption="Cutting" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Peat_gatherers.JPG/200px-Peat_gatherers.JPG" title="man. My grandfather cut more peat in a day Than any other man i" link="http://dbpedia.org/resource/Peat" caption="Peat" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MerBleueBog2.jpg/200px-MerBleueBog2.jpg" title="Than any other man in Toner's bog. Once I carried him milk in a" link="http://dbpedia.org/resource/Bog" caption="Bog" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Human_Breastmilk_-_Foremilk_and_Hindmilk.png/200px-Human_Breastmilk_-_Foremilk_and_Hindmilk.png" title="ner's bog. Once I carried him milk in a bottle Corked sloppily w" link="http://dbpedia.org/resource/Milk" caption="Milk" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bottle_Iran_16.JPG/200px-Bottle_Iran_16.JPG" title="Once I carried him milk in a bottle Corked sloppily with paper. H" link="http://dbpedia.org/resource/Bottle" caption="Bottle" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Stack_of_Copy_Paper.jpg/200px-Stack_of_Copy_Paper.jpg" title="a bottle Corked sloppily with paper. He straightened up To drink" link="http://dbpedia.org/resource/Paper" caption="Paper" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Alcoholic_beverages.jpg/200px-Alcoholic_beverages.jpg" title="paper. He straightened up To drink it, then fell to right away N" link="http://dbpedia.org/resource/Drink" caption="Drink" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Rollrasen-01.jpg/200px-Rollrasen-01.jpg" title="g and slicing neatly, heaving sods Over his shoulder, going down" link="http://dbpedia.org/resource/Sod" caption="Sod" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Shoulderjoint.PNG/200px-Shoulderjoint.PNG" title="neatly, heaving sods Over his shoulder, going down and down For the" link="http://dbpedia.org/resource/Shoulder" caption="Shoulder" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Lenz_Entwurf_zu_einem_Engel.jpg/200px-Lenz_Entwurf_zu_einem_Engel.jpg" title=", going down and down For the good turf. Digging. The cold smell" link="http://dbpedia.org/resource/Good_and_evi" caption="Good and evil" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/200px-Patates.jpg" title="f. Digging. The cold smell of potato mould, the squelch and slap O" link="http://dbpedia.org/resource/Potato" caption="Potato" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Red_Hot_Chili_Peppers_-_Rock_in_Rio_Madrid_2012_-_11.jpg/200px-Red_Hot_Chili_Peppers_-_Rock_in_Rio_Madrid_2012_-_11.jpg" title="potato mould, the squelch and slap Of soggy peat, the curt cuts" link="http://dbpedia.org/resource/Slapping" caption="Slapping" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Peat_gatherers.JPG/200px-Peat_gatherers.JPG" title="the squelch and slap Of soggy peat, the curt cuts of an edge Thr" link="http://dbpedia.org/resource/Peat" caption="Peat" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Scissors.jpg/200px-Scissors.jpg" title="slap Of soggy peat, the curt cuts of an edge Through living roo" link="http://dbpedia.org/resource/Cutting" caption="Cutting" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Spade.jpg/200px-Spade.jpg" title="waken in my head. But I've no spade to follow men like them. Betw" link="http://dbpedia.org/resource/Spade" caption="Spade" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Men_montage.jpg/200px-Men_montage.jpg" title=". But I've no spade to follow men like them. Between my finger" link="http://dbpedia.org/resource/Man" caption="Man" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dedos_de_la_mano_%28no_labels%29.jpg/120px-Dedos_de_la_mano_%28no_labels%29.jpg" title="low men like them. Between my finger and my thumb The squat pen re" link="http://dbpedia.org/resource/Finger" caption="Finger" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duim.jpg/200px-Duim.jpg" title="hem. Between my finger and my thumb The squat pen rests. I'll dig" link="http://dbpedia.org/resource/Thumb" caption="Thumb" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/03-BICcristal2008-03-26.jpg/200px-03-BICcristal2008-03-26.jpg" title="finger and my thumb The squat pen rests. I'll dig with it." link="http://dbpedia.org/resource/Pen" caption="Pen" class="dbpedia-thumb" >}}

* * *

It’s sort of an odd way to read a poem, but it’s also kind of intriguing. Among other things, I think this highlights how full of actual physical items, especially body parts, the text is.

**Second**, a few of the resources that aren’t quite correctly matched up to the text, but are still interesting and semi-relevant.

* * *

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/CircleN.svg/200px-CircleN.svg.png" title="en my finger and my thumb The squat pen rests; snug as a gun." link="http://dbpedia.org/resource/Squatting" caption="Squatting" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dean_Wolstenholme_-_An_Angler%27s_Catch_of_Coarse_Fish_-_Google_Art_Project.jpg/120px-Dean_Wolstenholme_-_An_Angler%27s_Catch_of_Coarse_Fish_-_Google_Art_Project.jpg" title="lls Where he was digging. The coarse boot nestled on the lug, the" link="http://dbpedia.org/resource/Coarse_fishing" caption="Coarse fishing" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Reaper_in_sail.jpg/200px-Reaper_in_sail.jpg" title="he coarse boot nestled on the lug, the shaft Against the inside" link="http://dbpedia.org/resource/Lugger" caption="Lugger" class="dbpedia-thumb" >}}

{{< figure src="http://commons.wikimedia.org/wiki/Special:FilePath/Auguste_Victoria_mine_shafts,_Marl.jpg?width=100" title="boot nestled on the lug, the shaft Against the inside-knee was l" link="http://dbpedia.org/resource/Shaft_mining" caption="Shaft mining" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tel_Be'er_Sheva_Overview_2007041.JPG/200px-Tel_Be'er_Sheva_Overview_2007041.JPG" title="levered firmly. He rooted out tall tops, buried the bright edge" link="http://dbpedia.org/resource/Tell" caption="Tell" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Fellgate.jpg/120px-Fellgate.jpg" title="ightened up To drink it, then fell to right away Nicking and sli" link="http://dbpedia.org/resource/Fell" caption="Fell" class="dbpedia-thumb" >}}

* * *

I actually found these mis-identifications somewhat thought-provoking. To some degree, they betray the extent to which DBpedia is thing-centric, so that verbs and adjectives are mis-identified as nouns (again, with low confidence or support scores). But I find the notion of the poet’s pen “squatting” between thumb and finger, in the sense of taking up residence in an abandoned space without permission, rather appealing and fascinating. In the case of some of the other mis-identifications, it seems that Spotlight is picking up the context of digging and working outdoors, hence the mountains and archeological entities. And in the case of the lugger ship, this mis-identification actually drove me back to the text, and when I looked at “lug” in context I discovered that I didn’t actually know what it was, and had to go looking to figure out that the lug and shaft are parts of a shovel or spade.

**Third**, some of the mis-identified things that are humorously, obviously wrong. In this case have actors and musicians or bands, conceptually unrelated items, and even a video game. I’m including these here partly because they make me laugh, but also to demonstrate that the technology still has limitations and we need to be careful how we apply it.

* * *

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Day-midnightlace.jpg/200px-Day-midnightlace.jpg" title="randfather cut more peat in a day Than any other man in Toner's" link="http://dbpedia.org/resource/Doris_Day" caption="Doris Day" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Toner-container-black-0a.jpg/200px-Toner-container-black-0a.jpg" title="n a day Than any other man in Toner's bog. Once I carried him mil" link="http://dbpedia.org/resource/Toner" caption="Toner" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3205_-_Milano,_Duomo_-_Giorgio_Bonola_-_Miracolo_di_Marco_Spagnolo_(1681)_-_Foto_Giovanni_Dall'Orto,_6-Dec-2007-cropped.jpg/200px-3205_-_Milano,_Duomo_-_Giorgio_Bonola_-_Miracolo_di_Marco_Spagnolo_(1681)_-_Foto_Giovanni_Dall'Orto,_6-Dec-2007-cropped.jpg" title="y Nicking and slicing neatly, heaving sods Over his shoulder, going" link="http://dbpedia.org/resource/Vomiting" caption="Vomiting" class="dbpedia-thumb" >}}

{{< figure src="http://commons.wikimedia.org/wiki/Special:FilePath/Turf_War_Graffiti_at_Glanmoelyn,_Llanrug_-_geograph.org.uk_-_218074.jpg?width=100" link="http://dbpedia.org/resource/Turf_war" title="ng down and down For the good turf. Digging. The cold smell of " caption="Turf war" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rhinovirus.PNG/200px-Rhinovirus.PNG" title="r the good turf. Digging. The cold smell of potato mould, the sq" link="http://dbpedia.org/resource/Common_cold" caption="Common cold" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Bronze_spearhead_mold.JPG/200px-Bronze_spearhead_mold.JPG" title="ing. The cold smell of potato mould, the squelch and slap Of sogg" link="http://dbpedia.org/resource/Molding_%28process%29" caption="Molding (process)" class="dbpedia-thumb" >}}

{{< figure src="http://commons.wikimedia.org/wiki/Special:FilePath/The_Edge_360_Tour_Foxboro_2009.jpg?width=100" title="ggy peat, the curt cuts of an edge Through living roots awaken i" link="http://dbpedia.org/resource/The_Edge" caption="The Edge" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/The_Roots_2007.jpg/200px-The_Roots_2007.jpg" title="uts of an edge Through living roots awaken in my head. But I've n" link="http://dbpedia.org/resource/The_Roots" caption="The Roots" class="dbpedia-thumb" >}}

{{< figure src="http://upload.wikimedia.org/wikipedia/en/thumb/9/95/Dig_Dug_Flyer.png/92px-Dig_Dug_Flyer.png" title="umb The squat pen rests. I'll dig with it." link="http://dbpedia.org/resource/Dig_Dug" caption="Dig Dug" class="dbpedia-thumb" >}}

* * *

For those who are interested, here are some technical notes on how I generated this post.

-   Got a copy of the TEI xml for the Heaney Belfast group sheets from the current [Beck Center Belfast Group site](http://beck.library.emory.edu/BelfastGroup/) (now [available on GitHub]( https://github.com/eulbeckcenter/belfast)!)

-  Ran the [NameDropper lookup-names python script](http://namedropper.readthedocs.org/en/latest/scripts.html#lookup-names) on the TEI file, restricting it to the poem I was interested in and setting the certainty pretty low, to generate a CSV file.

    {{< highlight csh  >}}
    lookup-names heaney1.xml -c 0.1 \
        --tei-xpath '//t:body[@xml:id="heaney1_1045"]'  \
        --scores --csv /tmp/heaney-digging.csv
    {{< / highlight >}}

- Wrote a simple python script to iterate through the CSV file and generate the HTML I wanted for each item, pulling the label and thumbnail from DBpedia, and using the context pulled from the poem.

- Manually sorted out the entities I wanted into the three groups, preserving order, and fixed missing thumbnails where I could (some of the DBpedia thumbnail references are invalid; I’m guessing this is because they have been updated on Wikipedia since the last time the current DBpedia data was regenerated).