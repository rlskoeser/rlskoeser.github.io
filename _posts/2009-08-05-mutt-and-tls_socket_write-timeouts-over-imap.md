---
layout: post
title: mutt and tls_socket_write timeouts over IMAP
created: 1249501884
categories: mutt imaps tls ssl email
---
<p>I&rsquo;ve been using <a href="http://www.mutt.org/">mutt</a> as my preferred email client for rather a while now, but I&rsquo;ve been so busy at Emory Libraries that I never got around to setting it up here until just the other day. And it&rsquo;s been fabulous, save for one aspect: I kept getting disconnected from the University IMAPS server. Specifically, periodically throughout the day &mdash; especially while I was composing emails &mdash; mutt would get to a point that it would need to talk to the server (say, to send the mail I&rsquo;d just composed), and it would stop, telling me:</p>
<pre>tls_socket_write (Error in the push function.)</pre>

<p>After that error message, it&rsquo;d dump me to an empty folder view and make me change back into my default mailbox to reconnect before resuming whatever I was doing before. It was only a few keystrokes, but it was pretty annoying. That kind of thing just shouldn&rsquo;t happen.</p>

<p>I figured the problem was probably a timeout of some sort. Either some host or some connection-tracking firewall saw a lack of traffic and decided that the connection was dropped, so it reset the connection after some painfully short time. Dropping connections like that is pretty rude, and it probably violates a handful of RFCs, but when you&rsquo;re trying to maintain a network device watching a ton of open connections it may sometimes look like the least of several evils. I&rsquo;ve been there.</p>

<p>The problem was trying to figure out what was timing out and how to make it stop. And timing errors are notoriously difficult to verify. I tried setting <a href="http://www.mutt.org/doc/devel/manual.html#mail-check"><code>mail_check</code></a> to see if it that would generate network traffic to keep the connection open, but that didn&rsquo;t do it. I found an <a href="http://www.mutt.org/doc/devel/manual.html#imap-keepalive"><code>imap_keepalive</code></a> setting to send periodic protocol-level messages to keep the connection alive, but that didn&rsquo;t do anything either.</p>

<p>Finally I stumbled across the <a href="http://www.mutt.org/doc/devel/manual.html#timeout"><code>timeout</code></a> setting, which is subtle to say the least. Evidently from the description, mutt blocks in a read state when waiting for user input. It breaks every <code>timeout</code> seconds to handle background processing tasks like <code>mail_check</code> and <code>imap_keepalive</code>. If the <code>timeout</code> time is 600 seconds (its default), then as far as I can tell mutt will only perform these tasks every ten minutes while it&rsquo;s actively blocking on user input. And apparently that&rsquo;s not frequent enough to prevent a timeout on whatever device is watching my network connections and ruthlessly reaping them for inactivity.</p>

<p>Right now I&rsquo;ve got my <code>timeout</code> set to 15 seconds, and all is working spectacularly. I&rsquo;ll likely tweak it upwards a bit more before I&rsquo;m done. Hopefully google will find this entry and direct someone to a solution with less hassle than I had to find it.</p>
