---
layout: post
title: ! 'Drupal Hook_Menu: Not Just For Navigation Anymore (Map Function Call To
  Any Link)'
created: 1240264655
categories: drupal hook_menu function call
---
<p>I recently discovered how to map a  function call to a link.  Here are the steps.</p><p> </p><p>1.    Write a function to be called:</p><p> </p><pre>function myfunction($param1, $param2)
{    
   bla bla bla
}

</pre><p> </p><p>2.    Create an entry like this in the module_menu function:</p><p> </p><pre>$items["function/%/%/update"] = array(
    'title' =&gt; 'Update Status of title',
    'description' =&gt; 'Update Status of description',
    'page callback' =&gt; 'myfunction',  
    'page arguments' =&gt; array(1,2),   
    'access arguments' =&gt; array('correct access strings'),  
    'type' =&gt; MENU_CALLBACK
<br />The % in the path is a placeholder for a parameter.  The path must be unique<br /><br />'page callback' - This is the name of the function to call<br /><br />'page arguments' - This references the elements in the path above, so “function”=0, the % signs are 1 and 2 “update” =3 so we want to pass 1 and 2 as the indexes of the parameters</pre><p> </p><p>3.     Create a link that references the path in the module_menu  function:</p><pre>l("Text For Link", "function/P1/P2/update", $options);<br /><br />Fill in the parameter values when you create the link and add any additional options that you need<br /><br />Now when you click on the link it will call the function.</pre>
