---
layout: post
title: Python and Vim
created: 1245780902
categories: python vim
---
<p>The topic of <a href="http://www.python.org/">Python</a> indenting came up around the office, to which I replied, essentially, &ldquo;Use 4 spaces per indentation level.&rdquo; For the curious who want more detail, read Guido&rsquo;s own words on the matter in <a href="http://www.python.org/dev/peps/pep-0008/">PEP-8</a>.</p>

<p>As part of this conversation, one of my coworkers asked me to post the relevant part of my <a href="http://www.vim.org/htmldoc/starting.html#vimrc"><code>.vimrc</code></a>. To be precise, my python indention isn&rsquo;t part of my <code>.vimrc</code>. That file looks like this on my office workstation:</p>
<pre>set <a href="http://www.vim.org/htmldoc/options.html#'background'">bg</a>=dark<br />set <a href="http://www.vim.org/htmldoc/options.html#'autoindent'">ai</a><br />set <a href="http://www.vim.org/htmldoc/options.html#'number'">nu</a><br />set <a href="http://www.vim.org/htmldoc/options.html#'textwidth'">tw</a>=76<br />set <a href="http://www.vim.org/htmldoc/options.html#'wrap'">nowrap</a><br /><a href="http://www.vim.org/htmldoc/filetype.html">filetype</a> plugin on</pre>

<p>I use vim&rsquo;s standard filetype handling for most things. I&rsquo;ve tweaked the Python handling as follows (in <code>~/.vim/ftplugin/python.vim</code>):</p>
<pre>set <a href="http://www.vim.org/htmldoc/options.html#'softtabstop'">sts</a>=4<br />set <a href="http://www.vim.org/htmldoc/options.html#'shiftwidth'">sw</a>=4<br />set <a href="http://www.vim.org/htmldoc/options.html#'expandtab'">et</a><br />set <a href="http://www.vim.org/htmldoc/options.html#'autoindent'">ai</a></pre>

<p>Disclaimer: Though I consider vim my primary editor, I am no wizard. There are probably better ways to do the above.</p>

<p>As a side note, anyone interested in both Python and vim should probably learn how to <a href="http://vimdoc.sourceforge.net/htmldoc/if_pyth.html">extend vim using python</a>. I know that helpfile is on my personal must-read list.</p>
