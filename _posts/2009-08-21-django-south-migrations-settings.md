---
layout: post
title: Django South Migrations Settings
created: 1250868279
categories: django
---
<p>I was having some problems with tests when I first installed South for Django migrations. What would happen as I ran 'manage.py test' is it would throw errors while trying to run the tests.py file inside the South codebase.</p><p>Initially missed the part in the South documentation that provides a setting value to handle this.&nbsp; So I'm pasting in all the known items you can add to settings.py to work with South.</p><p><span class="tt"># SOUTH MIGRATIONS SETTINGS<br /># See various setting documentations under http://south.aeracode.org/wiki/Documentation<br /># SKIP_SOUTH_TESTS = True # Disable south app tests.py, they shouldn't run during mine.<br /># SOUTH_TESTS_MIGRATE = True # If migrations are needed to run fixtures.<br /># SOUTH_AUTO_FREEZE_APP = False # Related to freezing apps during migrations.</span></p><p>&nbsp;</p>
