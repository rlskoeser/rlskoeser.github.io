---
layout: post
title: how to get video duration
created: 1232557600
categories:
- video
- linux
original_url: https://techknowhow.library.emory.edu/blogs/rsutton/2009/01/21/how-get-video-duration
---

With Chris Roddy's help, I just figured out a pretty slick way to quickly get the duration of a bunch of video files. 

ffmpeg includes duration information in the preliminary output when it is processing a file (or even when it is complaining that you haven't given it an output file).    So you can run ffmpeg and grep for the "Duration" string.

In a bash shell, you can just do this:

{% highlight bash %}
for f in *.mp4; do echo $f; ffmpeg -i $f 2&gt;&amp;1 | grep Duration;  done
{% endhighlight %}

 


