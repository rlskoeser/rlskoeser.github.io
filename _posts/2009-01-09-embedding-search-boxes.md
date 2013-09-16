---
layout: post
title: Embedding Search Boxes
created: 1231526336
categories: discovere discovere discovere discovere discovere discovere discovere
  discovere discovere discovere discovere
---
<p>You can embed search boxes for discoverE by using iFrames, this will allow us to embed these search boxes and maintain the ability to make changes if nesssisary to code in a single spot.</p><p>To do this we just need to call either PHP file:</p><ul><li><a href="http://larson.library.emory.edu/primo/searchforms/search_discovere_simple.php">http://larson.library.emory.edu/primo/searchforms/search_discovere_simple.php</a></li><li><a href="http://larson.library.emory.edu/primo/searchforms/search_discovere_full.php">http://larson.library.emory.edu/primo/searchforms/search_discovere_full.php</a> </li></ul><p>These files load either a simple or full search form respectively.  The look of these forms can be changed by adding a querystring property calling the appropriate CSS file.</p><p><strong>Currently supported CSS calls</strong></p><ul><li>simpleblock - a very simple block style search form with logo.</li></ul><p><strong>Example</strong></p><p>&lt;iFrame src="http://larson.library.emory.edu/primo/searchforms/search_discovere_simple.php?css=simpleblock" title="discoverE" scrolling="no" width="175" height="100" frameborder="0" longdesc="Search Emory Library resources via discoverE"&gt;</p>
