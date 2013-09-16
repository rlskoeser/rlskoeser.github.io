---
layout: post
title: journalTOCs API
created: 1254143706
categories: repositories ejournals
---
<h1>journalTOCs API Usage</h1><p>This service could be of use in enriching metadata for an instititutional repository</p><p>http://www.journaltocs.hw.ac.uk/index.php?action=api</p>&nbsp; 
<p>The API gives you access to our entire database of articles,
journals and publishers, which is being updated and continually
collected from the publishers' own TOC RSS feeds, as soon as they are
published on the web.</p>
<p>The search results will come in RSS format, which can then be parsed
and used in your own environment, RSS reader or the search results
could be included in your own web page.</p><p>&nbsp;</p><p>Version:1.0
StartHTML:0000000149
EndHTML:0000005589
StartFragment:0000000199
EndFragment:0000005555
StartSelection:0000000199
EndSelection:0000005555



<!--StartFragment--></p><blockquote><font face="Calibri, Verdana, Helvetica, Arial"><span style="font-size: 11pt;"> </span></font><span style="font-size: 11pt;"><font face="Verdana, Helvetica, Arial">[Forwarding from Lisa Rogers, via the JISC-Repositories list. &nbsp;--Peter Suber.]<br />
<br />
&nbsp;<br />
&nbsp;I am pleased to announce the alpha release of the API for the Journal TOCs JISC Rapid Innovation project.<br />
<br />
&nbsp;&nbsp;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/index.php?action=api">http://www.journaltocs.hw.ac.uk/index.php?action=api</a></span></font> &lt;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/index.php?action=api">http://www.journaltocs.hw.ac.uk/index.php?action=api</a></span></font>&gt; <br />
<br />
&nbsp;At the moment the API allows searching by journal title and searching by article.<br />
<br />
&nbsp;Some examples are:<br />
&nbsp;&nbsp;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/journals/library">http://www.journaltocs.hw.ac.uk/api/journals/library</a></span></font> &lt;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/journals/library">http://www.journaltocs.hw.ac.uk/api/journals/library</a></span></font>&gt; &nbsp;gives a list of journals whose title contains the word library.<br />
&nbsp;&nbsp;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/journals/1533-290X">http://www.journaltocs.hw.ac.uk/api/journals/1533-290X</a></span></font> &nbsp;&lt;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/journals/1533-290X">http://www.journaltocs.hw.ac.uk/api/journals/1533-290X</a></span></font>&gt; returns the latest TOC of the journal with ISSN 1533-290X<br />
<br />
&nbsp;<br />
&nbsp;&nbsp;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/articles/corrosion">http://www.journaltocs.hw.ac.uk/api/articles/corrosion</a></span></font> &lt;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/articles/corrosion">http://www.journaltocs.hw.ac.uk/api/articles/corrosion</a></span></font>&gt; &nbsp;gives a list of the latest articles containing the word corrosion.<br />
&nbsp;&nbsp;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/articles/%22University%20of%20Warwick%22">http://www.journaltocs.hw.ac.uk/api/articles/%22University%20of%20Warwick%22</a></span></font> &lt;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/articles/%22University%20of%20Warwick%22">http://www.journaltocs.hw.ac.uk/api/articles/%22University%20of%20Warwick%22</a></span></font>&gt; &nbsp;returns a list of latest articles by authors at "University of Warwick" (please notice the double quotes around University of Warwick for phrase searching).<br />
&nbsp;&nbsp;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/articles/dorothy+bishop">http://www.journaltocs.hw.ac.uk/api/articles/dorothy+bishop</a></span></font> &lt;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/api/articles/dorothy+bishop">http://www.journaltocs.hw.ac.uk/api/articles/dorothy+bishop</a></span></font>&gt; &nbsp;returns a list of latest articles published by authors with the name Dorothy Bishop.<br />
<br />
&nbsp;The aim of the JournalTOCsAPI project is to investigate two use cases using the API.<br />
<br />
&nbsp;The 1st is to find new content for an Institutional Repository by alerting IR managers when a new article has been published.<br />
<br />
&nbsp;The 2nd is to enhance the existing metadata in the IR by matching against articles in JournalTOCs.<br />
<br />
&nbsp;We have established a community of users who will be testing the API for the two use cases documented above. If you would like to join this community, to test the API with your repository and to report bugs, please reply to <font color="#0000ff"><span style="text-decoration: underline;"><a href="l.j.rogers@hw.ac.uk">l.j.rogers@hw.ac.uk</a><br />
</span></font><br />
&nbsp;We are still working with the development of the API, but we thought you may wish to see how it works and have the opportunity of steering its development.<br />
<br />
&nbsp;If you have any general comments about the API or wish to test for other use cases than those mentioned above, please leave a comment on the project blog ( <font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/API/blog/?p=67">http://www.journaltocs.hw.ac.uk/API/blog/?p=67</a></span></font> &lt;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.journaltocs.hw.ac.uk/API/blog/?p=67">http://www.journaltocs.hw.ac.uk/API/blog/?p=67</a></span></font>&gt; ) or email <font color="#0000ff"><span style="text-decoration: underline;"><a href="l.j.rogers@hw.ac.uk">l.j.rogers@hw.ac.uk</a><br />
</span></font><br />
&nbsp;Best Regards,<br />
<br />
&nbsp;<br />
&nbsp;Lisa Rogers<br />
&nbsp;</font></span><font size="4"><font face="Calibri, Verdana, Helvetica, Arial"><span style="font-size: 14pt;">-- <br />
&nbsp;</span></font></font><font face="Verdana, Helvetica, Arial"><span style="font-size: 11pt;">Lisa J. Rogers (<font color="#0000ff"><span style="text-decoration: underline;"><a href="L.J.Rogers@hw.ac.uk">L.J.Rogers@hw.ac.uk</a></span></font>)<br />
&nbsp;Research Associate<br />
&nbsp;Institute for Computer Based Learning<br />
&nbsp;School of Mathematical and Computer Sciences<br />
&nbsp;Earl Mountbatten Building<br />
&nbsp;Heriot Watt University<br />
&nbsp;Edinburgh EH14 4AS<br />
&nbsp;<font color="#0000ff"><span style="text-decoration: underline;"><a href="http://www.icbl.hw.ac.uk/">http://www.icbl.hw.ac.uk</a><br />
</span></font></span></font></blockquote>
<!--EndFragment-->
