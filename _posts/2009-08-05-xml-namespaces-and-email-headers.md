---
layout: post
title: XML Namespaces and Email Headers
created: 1249513289
categories: xml-namespaces webmastery web-architecture email-headers email digital-archiving
---
<p>Today I researched ways to serialize <a href="http://tools.ietf.org/html/rfc2822">RFC822</a> message headers in XML. It seems a little silly to need to XMLize data that&rsquo;s already well-structured, but this is about to pass into a chain of tools that make things much easier if their data happens to be XML.</p>

<p>Unfortunately I&rsquo;ve found it remarkably difficult to locate a reliable, well-documented XML namespace or XML-based metadata standard for a simple, direct translation of RFC822 headers. I&rsquo;ve got a few more avenues to explore, but at the moment I&rsquo;m seriously considering simply creating one. Basically I just want to make sure I&rsquo;m not duplicating past work.</p>

<p>In investigating the feasibility of publishing such a namespace, I&rsquo;m learning that Emory Libraries hasn&rsquo;t to date published a web namespace and doesn&rsquo;t have a policy for doing so. I just sent a message to our our systems team requesting a namespace that we can reserve indefinitely for that purpose. I&rsquo;ll be documenting it here as the project develops.</p>

<p>Update: See my later post, <a href="https://techknowhow.library.emory.edu/content/cerp-email-xml-and-preservation">CERP Email XML and Preservation</a>.</p>
