---
layout: post
title: ! 'Linking SVN commits to TRAC tickets and vice-versa '
created: 1246196218
categories: svn trac
---
<p>I use suversion and trac in tandem and started a habit of including ticket numbers as the first part of the comments I give in commits.</p><p>For example I&nbsp; use comments like: </p><p style="padding-left: 30px;"><a href="https://larson.library.emory.edu/trac/metaarchive/changeset/990">#<span class="searchword0">642</span> use style sheet conversion in pullLockssStatus script</a>'. </p><p>When I browse source inside trac, tciket numbers in log messages are displayed as lnks to the tickets. So its easy to see why changes are made (provided trac tickets are defined in a sensible manner). </p><p>When I look at a ticket in trac and want to know which code changes relate to the ticket all I have to do is use Trac's search with the ticket number, and I get a list like this:</p><dl id="results"><dt style="padding-left: 30px;"><a href="https://larson.library.emory.edu/trac/metaarchive/changeset/991">[991]: #<span class="searchword0">642</span> rm Status table options (was same as Overview) 
</a></dt><dd style="padding-left: 30px;">#<span class="searchword0">642</span> rm Status table options (was same as Overview) 
</dd><dd style="padding-left: 30px;">
     <span class="author">By mmevenk</span> &mdash;
     <span class="date">06/25/09 10:10:55</span>
    </dd><dt style="padding-left: 30px;"><a href="https://larson.library.emory.edu/trac/metaarchive/changeset/990">[990]: #<span class="searchword0">642</span> use style sheet conversion in pullLockssStatus script 
</a></dt><dd style="padding-left: 30px;">#<span class="searchword0">642</span> use style sheet conversion in pullLockssStatus script 
</dd><dd style="padding-left: 30px;">
     <span class="author">By mmevenk</span> &mdash;
     <span class="date">06/24/09 16:11:24</span>
    </dd><dt style="padding-left: 30px;"><a href="https://larson.library.emory.edu/trac/metaarchive/changeset/989">[989]: #<span class="searchword0">642</span> pullTable applies style sheets - tested with  AU_Ids and AU_Statu</a></dt><dd style="padding-left: 30px;">#<span class="searchword0">642</span> pullTable applies style sheets - tested with  AU_Ids and AU_Status 
</dd><dd style="padding-left: 30px;">
     <span class="author">By mmevenk</span> &mdash;
     <span class="date">06/24/09 16:08:13</span></dd><dd>...</dd></dl><p><span class="date">I used to try and keep track manually which never
worked very well. Half the time I would forget then I became lazy
because it was so much overhead. This is works a lot better for me.</span></p><div id="searchable">
  <dl id="results"><dd><br /></dd><dd><span class="date"><br /></span></dd></dl>
  <hr />
 </div><p>


 <strong>&nbsp;</strong></p><p style="padding-left: 30px;">&nbsp;</p><p>When you&nbsp; include a ticket number with #&lt;NUMBER&gt; in the commit comment when checking in changes to subversion you will be able to <br /><br /><br /><br /></p>
