---
layout: post
title: DH2018 Notes and Takeaways
date: 2018-08-17T15:38:34-04:00
image:
    feature: posts/dh2018_mexicocity_banner.jpg
    thumb: posts/dh2018_thumb.png
    caption: "[Panoramic photo of Mexico City by Hugo Armando Vilchis (CC-BY-NC-SA)](https://www.flickr.com/photos/havilchis/6450923267/)"
---


I was privileged to attend and participate in [DH2018 in Mexico City, Mexico](https://dh2018.adho.org/) earlier this year. Here are some notes on the things I'm still thinking about more than a month later.

I took the challenge I saw on Twitter seriously to take the "bridge" and follow scholars whose primary language is not English, and as a result my Twitter stream is much more multilingual since then (although I dislike my need to rely on Microsoft's translation service).

{% include _toc.html %}

## Posters

I arrived part-way through the conference, so it started for me with diving into
the poster session, where I was also presenting with my colleague [Ben Hicks](https://cdh.princeton.edu/people/benjamin-hicks/) (view an [online version of our poster](https://cdh.princeton.edu/updates/2018/06/29/dh2018-reusable-software/), complete with Spanish translations provided by our colleague [Nora Benedict](https://cdh.princeton.edu/people/nora-benedict/)). I had some great conversations and interactions during the poster
session. It's always nice to get a chance to converse one-on-one in a low
pressure environment and hear about other people's work. (The way the two sessions ended up being semi-simultaneous was a bit unfortunate, as it may have made the space more crowded. I also missed talking to the presenter about the [off-line approach to the Shelley-Godwin Archive poster](https://dh2018.adho.org/en/off-line-sstrategies-for-on-line-publications-preparing-the-shelley-godwin-archive-for-off-line-use/), about which I had questions.)

We had some good engagement and comments on our poster. People seem to like the approach we're taking, and are impressed that we've been able to generalize as we're working on projects. As you might expect, it particularly resonated with other developers, but there were also some non-technical folks who appreciated that we'd made the effort to translate our poster. We discussed our work with a couple of deevlopers who work in the Python language, as we do, but use Flask instead of Django; it's difficult to sharing tools and software packages across DH developers when so few of us are using the same stack or technologies, or we're working towards different aims.

One gentleman who talked to me about our poster wondered if machine learning could be used to identify possible candidates for generalizing and creating reusable packages. I'm skeptical of that, because it feels like it's still a pretty specialized skill that not even all developers are good at. However, it did inspire me to wonder about applying text reuse algorithms (which we have been thinking about using on the [Princeton Prosody Archive](https://cdh.princeton.edu/projects/princeton-prosody-archive/), e.g. to identify commonly poetic examples) on GitHub to identify code reuse.  There is a fair amount of boiler-plate and standard structures that are repeated all the time in code, so I imagine the algorithms would need some modifications to come up with meaningful results for code. Perhaps as a simpler case, could you identify snippets from  [Stack Overflow](https://stackoverflow.com/) that have been adapted for use in other codebases? I usually provide credit by way of a link to the relevant Stack Overflow conversation when I do (and I frequently end up tweaking or modifying the example). It would be interesting to do large scale analysis and see what other developers do.

## Presentations (Thursday)

On Thursday, I attended a panel that included Sara Sikes presenting on the [Design Process Model](https://dh2018.adho.org/en/a-design-process-model-for-inquiry-driven-collaboration-first-scholarly-communications/) they employ at [Greenhouse Studios](https://greenhousestudios.uconn.edu/).  I've read about their process on their website, and follow them somewhat because I got to work with Tom Scheinfeldt on One Week One Tool when we built serendipomatic.org (which is sadly no longer available online), but it was helpful to have more context and explanation on how their teams work. I was  interested to hear about one of their first projects that will be public soon, [Charles V|R](https://greenhousestudios.uconn.edu/charlesvr/).
However, the most compelling and significant component of this presentation for me was when Sikes talked about peer review
of DH projects via University Presses. Peer review for DH projects has historically been difficult ([Brian Croxall](http://www.briancroxall.net/) and I experienced that first hand with [Belfast Group Poetry|Networks](https://belfastgroup.digitalscholarship.emory.edu/)), but it's an
important part of academic discourse to help validate and evaluate the work as scholarship.  Sikes said that
University Presses want to get involved in DH but don't know how, and that they have an existing infrastructure
for peer review that can be adapted for DH. She indicated that they hoped to announce something more publicly about this soon; I'm looking forward to hearing more.

I also caught a short presentation on ["rapid bricolage"](https://c21ch.newcastle.edu.au/rapidbricolage/). The presenter talked about "rapid" development (which seems to be another flavor Agile), and protopying simple projects quickly. He seemed to be part of a small group, maybe even just a one-man shop, who was succeeding in doing a lot very quickly. I'm certainly in agreement with the need for agility, flexibility and the ability to make adjustments when doing software develpoment for research. However, I don't particularly care for his characterization of software development as bricolage: "hacking, cutting and pasting." Certainly some coding is like that; but it is usually the kind of work that we call "hacky" with reason; just adapting, reusing, or combining what is out there and hacking it until it does what you want (whether that is what it was meant to do or not). This is not the kind of work I do, architecting and developing something new that is built to meet the project research needs properly, without bringing in unwanted assumptions; or combining existing software packages and tools together properly without hacking them together. I understand there may be a place for this kind of piecework, but I'm not sure it should be considered exemplary and I'm dubious of the depth and sophistication of the attendant scholarship.

## More Presentations (Friday)

On Friday, I heard an important talk from Kathi Inman Berens on [DH adjuncting](http://tinyurl.com/kathidh2018).
She rightly pointed out that DH is not immune from this problem that's so prevalent in the Academy. It's important to recognize, and something those of us with stable positions can help with. Her presentation was targeted more at institutions (e.g., requesting an ADHO bursary or prize speficically for adjuncts and not just young scholars) and tenured faculty to
help, since they have stable jobs and small amounts of their time make a huge difference - what she calls "microbenefits." However, her talk did make me wonder - and I asked her - whether alt-ac staff like myself or others who work at DH Centers can also help with this.  She responded that we could, by making sure we share resources with contingent scholars the same way
that we do for the faculty, grad students, and undegrads that we work with.


It was great to catch a "part two" presentation on the [abandonment of online digital humanities projects](https://dh2018.adho.org/en/part-deux-exploring-the-signs-of-abandonment-of-online-digital-humanities-projects/). I happened to catch the earlier presentation at DH2017 in Montreal, and I remember being concerned by the cavalier treatment of anything other than a 200 HTTP response code as 'broken'. The presenter, Luis Meneses, revisited and expanded his earlier approach with more rigorous methodology, but still with pretty discouraging results. I remember that after the talk in Montreal I was inspired to try to keep track of the projects I work on for [CDH](https://cdh.princeton.edu/). In theory, it shouldn't be that hard to track our projects once they are live, and start creating our own dataset tracking the lifespan and durability of our projects. I haven't done anything towards that yet, and until recently we didn't have any projects built my team that were live. But we do now have one live (we soft-launched [Derrida's Margins](https://derridas-margins.princeton.edu/) this past Spring), and have more that will be launching over the next year. It would be great to start a practice of crawling the sites and tracking this somehow. I'm not sure what it would look like yet, but it would at least be interesting to start looking at the number of pages on a site, response codes, content types, last modification dates.

I also caught a presentation by Karin Dalziel from the [Center for Digital Research in the Humanities at Nebraska](https://cdrh.unl.edu/) on [their approach](https://cdrhdev.unl.edu/log/2018/api/) to the same problem of [sustainable develpoment](https://dh2018.adho.org/en/legacy-no-longer-designing-sustainable-systems-for-website-development/) that we're tackling with our modular software reuse. It's a different problem for them, since they've been around for a long time and have a large number of legacy sites they need to maintain as they're moving forward with new projects. (It would be fascinating to get their data on site durability and longevity!)

I like the stated software philosophy:

* simple, stable, sustainable
* embrace modularity - software for one purpose
* avoid over-engineering
* provide comprehensive documentation

I'm not totally sold on the specifics of the approach, although I do certainly see the value in decoupling the parts of the system. It still seems rather complicated to me, and unlikely that other institutions would be likely to share or adop their components or APIs.  However, I'm not familiar with the problems of their legacy approach nor am I working on projects like theirs. It does seem to be a substantial improvement over their previous approaches, and maybe there is a possibility for reuse for others working on similar projects.

## What I Missed

There is always so much going on at a conference this size that you inevitably miss something interesting. It's so great to be able to follow on Twitter and read about what's going on when you're not in the room, or not even at the conference yet.

The opening keynote sounded fascinating based on the Twitter stream. It was amazing and wonderful to have both opening and closing keynotes given by women of color. (That should happen more often! It shouldn't be unusual!). From what I understand of the opening keynote, both of them were more story-based and personal. This was initially confusing to me when I was listening to  the closing keynote; I kept waiting for some kind of argument or claim and thinking I must be too tired to pay attention properly. But it was more a matter of sharing this wonderful vision and approach with all of us - using imagination, scholarship, and our work to envision richer life, beyond just survival.

I also know from Twitter that I missed a talk on a [feminist/hacker critique of Open Source Software](https://dh2018.adho.org/en/feminismo-y-tecnologia-software-libre-y-cultura-hacker-como-medio-para-la-apropiacion-tecnologica/) - it sounded amazing based on the tweets, although I might not have been brave enough to attend or ask for someone to whisper, since the talk was in Spanish. However, but the content sounds compelling and this is something I need to learn more about. I suspect it would help me think through my own concerns and help develop my ideas for investigating and critiquing Agile, even as I make use of it.






