---
layout: post
title: Changes to Linux server backups
created: 1246028616
categories: linux sysadmin backups
---
<p>Due to the increasing value of the data stored on Dev11, I have added its <span class="tt">/home</span> filesystem to the backup configuration on Franklin, with the exception of the Fedora installations and the <span class="tt">lts*</span> filesystem copies. If this is not sufficient to ensure the survival of your work, please let me know and I will widen the scope of the backups of Dev11.</p><p>I have also changed the recursively hardlinked <span class="tt">latest</span> directory to a symbolic link with the same name in order to reduce the run time for each backup.</p>
