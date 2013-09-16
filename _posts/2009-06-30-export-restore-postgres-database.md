---
layout: post
title: Export  / Restore Postgres Database
created: 1246380639
categories: postgres export
---
<p>This is how to export a postgress database into a file that can later be imported using pg_restore.</p><p>&nbsp;</p><p>Command Line Version:</p><p><font size="3"> pg_dump -Fc dbname &gt; filename		#dumps database to file<br /></font></p><p><font size="3">pg_restore -d dbname &lt; filename # restores data to database<br /></font></p><p>&nbsp;</p><p>Using pgAdmin III (Windows):</p><p>&nbsp;</p><ol><li>Login using the super user or a user that has access to all the objects that need to be exported</li><li>RIGHT-CLICK on the database and select Backup</li><li>Select an output file</li><li>Select Plain format</li><li>Click OK</li></ol>
