---
layout: post
title: Drupal Module Global Variables
created: 1237819143
categories: global variables drupal
---
<p>To create a variable that is globally accessible within your Drupal module you define it outside a function as usual, with one small exception.<br />You must declare it to be global and then assign the value:</p><pre>&lt;?php<br />// $Id$<br /><br /><br /><strong>global $reasons;</strong><br />$reasons = array(<br />                  '0' =&gt; ‘Reason 1',<br />                  '1' =&gt; ‘Reason 2',<br />                  '2' =&gt; 'Reason 3',<br />                  '3' =&gt; ‘Reason 4’<br />);<br /><br /><br /></pre><p>You can then access it in a function as usual by referencing the global variable.</p><pre>function TAS_entry() {<br />   <strong> global $reasons;</strong><br /><br />  $form['reason'] = array(<br />    '#type' =&gt; 'select',<br />    '#title' =&gt; t('Reason'),<br />    '#options' =&gt; <strong>$reasons,</strong><br />    '#description' =&gt; t('Reason For Correction'),<br />    '#weight'=&gt;0,<br />    '#id' =&gt;'REASON',<br />  );<br />…..</pre><p> </p><p> </p>
