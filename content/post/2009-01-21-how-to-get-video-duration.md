---
layout: post
title: how to get video duration
created: 1232557600
tags:
- video
- linux
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/01/21/how-get-video-duration
permalink: /2009/01/21/how-get-video-duration/
---

With Chris Roddy's help, I just figured out a pretty slick way to quickly get the duration of a bunch of video files. 

ffmpeg includes duration information in the preliminary output when it is processing a file (or even when it is complaining that you haven't given it an output file).    So you can run ffmpeg and grep for the "Duration" string.

In a bash shell, you can just do this:

{% highlight bash %}
for f in *.mp4; do echo $f; ffmpeg -i $f 2&gt;&amp;1 | grep Duration;  done
{% endhighlight %}

If you use csh, instead of bash, here's how to do the equivalent output redirect.  Where bash uses 2>&1 |, [t]csh uses |& to redirect stderr and stdout to the next command.   The equivalent of the bash for loop in csh is a foreach that looks something like this:

{% highlight csh %}
> foreach f (*.mp4)
foreach? echo $f
foreach? ffmpeg -i $f |& grep Duration
foreach? end
{% endhighlight %}

(As far as I know, there is no way to do single-line for statements in tcsh.)

If your videos aren't all in the current directory and you want to find them
in subdirectories, you could use the find command in instead of *.mp4, e.g.:

{% highlight bash %}
for f in `find . -name "*.mp4"`; do echo $f; ffmpeg -i $f 2>&1 | grep Duration;  done
{% endhighlight %}
 


