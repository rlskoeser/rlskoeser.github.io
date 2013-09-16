---
layout: post
title: Django dependencies and Subversion externals
created: 1244671359
categories: django subversion svn:externals dependency management
---
<p>There seems an open debate on the Web related to managing cross-project dependencies in <a href="http://subversion.tigris.org/">Subversion</a>. Subversion offers <a href="http://svnbook.red-bean.com/en/1.5/svn.advanced.externals.html"><code>svn:externals</code></a> as a tool for tracking other repositories, though it&rsquo;s not in a position to offer guidance in applying that tool to manage dependencies in any particular build structures. <a href="http://svnbook.red-bean.com/en/1.5/svn.advanced.externals.html">Rob Williams</a> suggests that using it that way <a href="http://stackoverflow.com/questions/222827/how-do-you-organize-your-version-control-repository#answer-304036">is an antipattern</a>, and he gives some <a href="http://stackoverflow.com/questions/338824/are-subversion-externals-an-antipattern#answer-345404">compelling arguments</a> in defense of that idea. At the same time, a number of folks seem to be <a href="http://www.nomadjourney.com/2009/03/using-svnexternals-for-external-django-module-dependencies/">using <code>svn:externals</code> for external Django dependencies</a> without any major problems, which raises the question whether the Django model doesn&rsquo;t suffer from this problem, or whether people just haven&rsquo;t run into it yet.</p>
<p>Here in Emory University Libraries software, we&rsquo;re <a href="http://www.nomadjourney.com/2009/03/using-svnexternals-for-external-django-module-dependencies/">using <code>svn:externals</code> more or less like Nizam does</a>. Our <a href="https://svn.library.emory.edu/svn/persis/">persis</a> project (currently access-controlled; sorry) has a top-level <code>svn:externals</code>:</p>
<pre>$ svn propedit svn:externals .
</pre>
<p>and it contains something like this:</p>
<pre>http://django-denorm.googlecode.com/svn/trunk@3 external/django-modules/denorm
http://svn.aeracode.org/svn/south/tags/0.5/south@260 external/django-modules/south
</pre>
<p>Once you&rsquo;ve set that up, you can update your working copy, and subversion will know to grab the externals:</p>
<pre>$ svn up
Fetching external item into 'external/django-modules/denorm'
External at revision 3.


Fetching external item into 'external/django-modules/south'
External at revision 260.

At revision 108.

$ ls external
django-modules
$ ls external/django-modules
denorm  south
</pre>
<p>Like Nizam, we incorporate our <code>externals</code> directory into our <code>sys.path</code> so that Python will see them. Unlike Nizam, we do that in <code>settings.py</code> instead of <code>manage.py</code>. More on that in a future post. So far, using <code>svn:externals</code> hasn&rsquo;t bit us. I&rsquo;ll be keeping an eye on it, though, and considering whether we need a better way to organize things. I’ll post here as things change, of course.</p>
