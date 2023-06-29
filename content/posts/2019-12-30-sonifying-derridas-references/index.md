---
date: 2019-12-30 14:05:22-05:00
featured_image: https://derridas-margins.princeton.edu/static/img/banner/derrida-banner-reference-L@2x.png
featured_image_caption: Banner image from [Derrida's Margins References](https://derridas-margins.princeton.edu/references/). Designed by [Xinyi Li](https://cdh.princeton.edu/people/xinyi-li/).
summary: Experimenting with sonification and reference data from Derrida's Margins
thumbnail_image: https://derridas-margins.princeton.edu/static/img/derrida_VI_logo_arrow.svg
title: Sonifying Derrida's references
url: /2019/12/30/sonifying-derridas-references/
---


Experimentation and play is valuable and important. It's good for your brain, and you never know where it will lead, or what fruitful new path you might discover. It's also incredibly valuable to [share](/2013/02/20/the-poetry-of-things-in-dbpedia/)
[our](/2013/02/01/mapping-places-in-around-the-world-in-80-days/)
[experiments](/2010/05/12/graph-correspondents-4-irish-finding-aids/),
even if they are incomplete. You never know what connection someone
else will make, what unexpected results might arise. With that in mind, here's
a little experiment of mine. It's not new, and I sort of thought the time had
passed to share it, but I've been encouraged to post this.

A couple of years ago, I took some R&D time to work through a [tutorial on data sonification](https://programminghistorian.org/en/lessons/sonification) from [The Programming Historian](https://programminghistorian.org/).[^1] I've been interested in accessibility and different
modes of sharing and analyzing data for a while[^2], so I wanted first-hand
experience with sonification.  I decided to work with data from the [Derrida's Margins](https://derridas-margins.princeton.edu/) project: in particular, the [references](https://derridas-margins.princeton.edu/references/) in
Derrida's _Of Grammatology_[^3].

I took the reference data, ordered by page number, and used different pitches
to represent the different types of references on a page: high notes are epigraphs,
low notes are footnotes; the one you hear repeated the most is quotation.
The volume of a note indicates the number of references of that type
on a single page, so the louder the notes are, the more references. Silences
are pages with no references.

<figure>
    <figcaption>My first attempt at sonifying Derrida's references
        in <i>Of Grammatology</i>.</figcaption>
    <audio
        controls
        src="/images/posts/derrida/derrida-references-sonified.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

I wanted to experiment with this a little more, so I added a new sound
to indicate where the chapters begin - as a way of providing a little more
orientation to the listener, like labels on a chart for a data visualization.
I also changed the instruments with the goal of finding something that worked
with the high amount of repetition in this track and that would sound
good together.[^4]

<figure>
    <figcaption>My second version of Derrida's references sonified,
    with additional sounds to indicate where the chapters start.</figcaption>
    <audio
        controls
        src="/images/posts/derrida/derrida-references-chapters.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

---

Want to play with my experiment to extend it further? Here's the code, adapted from the
script in the Programming Historian tutorial. To generate the MIDI file yourself,
download the [References data from figshare](https://doi.org/10.6084/m9.figshare.7180448.v1)
as CSV and get the [python script](https://gist.github.com/rlskoeser/cc7a7b22012dbe5ea7572a298c78acd7).
Or if you want to try different instruments, download the [MIDI file](/images/posts/derrida/derrida-references.midi) and load it into GarageBand or similar.


[^1]: _The Sound of Data (a gentle introduction to sonification for historians)_, by Shawn Graham.
[^2]: See [Data Beyond Vision](https://cdh.princeton.edu/projects/data-beyond-vision/) for a newer set of experiments along that similar lines, in terms of alternatives to data visualization.
[^3]: Chenoweth, Katie, Alexander Baron-Raiffe, Renée Altergott, Chloé Vettier, Chad Córdova, Rebecca Sutton Koeser, Jean Bauer, and Benjamin Hicks. 2018. “References in Jacques Derrida's De La Grammatologie”. figshare. [doi:10.6084/m9.figshare.7180448.v1](https://doi.org/10.6084/m9.figshare.7180448.v1).
[^4]: [Nora Benedict](https://norabenedict.github.io/), who was a [post-doc at CDH](https://cdh.princeton.edu/people/nora-benedict/) when I worked on this, told me it sounded like the soundtrack for a cheesy ’70s detective show. She's not wrong, but I do find it strangely compelling to listen to.