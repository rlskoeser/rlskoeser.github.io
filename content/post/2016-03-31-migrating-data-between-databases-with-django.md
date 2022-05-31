---
title: Migrating data between databases with Django
date: 2016-03-31T18:17:24-04:00
layout: post
excerpt: An model-based alternative to dumpdata for migrating data between databases.
tags:
- django
---

{% include _toc.html %}

* * *

## Background

We recently made some updates to our long-standing PID Manager Django application (see [pidman GitHub repo](https://github.com/emory-libraries/pidman) for more specifics on the application).  One significant change was migrating the database backend from postgres to MySQL for consistency with the rest of our applications and to reduce maintenance costs.  This was the only application still running on Postgres; when it was originally developed, it would only run on Postgres due to a custom database sequence, but there are other ways to handle that now.

This application has been running for about 10 years now (our two oldest pids were created December 31, 2006, but it looks like we didn't start using it in earnest until September 2007), so we've collected a pretty sizable amount of data (including the Django Admin log entries, which are usd to track the history of edits to records, including edits made through the application's REST API).  Recent counts for the larger sets of records are 542,835 pids, 554,311 target urls, and 876,642 log entries. Because this is a pretty crucial part of our infrastructure we want to minimize downtime when we upgrade to the new version and switch databases, but we also want to be sure that the data is migrated safely and reliably so we don't lose anything in the transition.

## The usual recomendation - dumpdata

If you look online for solutions to migrate data with Django, [almost](http://stackoverflow.com/questions/7002194/how-to-copy-database-in-use-to-other-database-in-django) [everyone](http://stackoverflow.com/questions/9984141/django-copy-data-from-one-database-to-another) [suggests](http://matthewwittering.com/blog/how-to-migrating-the-database-engine-for-django.html) [using](http://blog.aplikacja.info/2010/04/how-to-migrate-django-to-different-database-backend/) Django's [dumpdata](https://docs.djangoproject.com/en/1.9/ref/django-admin/#dumpdata) and [loaddata](https://docs.djangoproject.com/en/1.9/ref/django-admin/#django-admin-loaddata) manage commands.  That's a fine, easy solution for small databases, or maybe for development – but for any system with a lot of data and uptime requirements, that approach is *much* too slow.

## Model-based data migration

Fortunately, I came across this blog post on [using Django to migrate from MySQL to Postgres](http://www.ofbrooklyn.com/2010/07/18/migrating-django-mysql-postgresql-easy-way/), which provides a model-based approach that adapts the serialization logic used internally by dumpdata and loaddata.  That was still slower than I wanted, especially for all those log entries, but it pointed me in the right direction.

Because Django has support for [multiple databases](https://docs.djangoproject.com/en/1.9/topics/db/multi-db/), you can configure your source and destination databases, and then when you query your models or save a record, you can [specify which database to use](https://docs.djangoproject.com/en/1.9/topics/db/multi-db/#manually-selecting-a-database).  And then, you can use the [bulk_create](https://docs.djangoproject.com/en/1.9/ref/models/querysets/#bulk-create) method to efficiently save your models.   The bulk create method doesn't handle many-to-many relationships, but you can handle those with the [implicit through model](https://docs.djangoproject.com/en/1.9/ref/models/fields/#django.db.models.ManyToManyField.through) (in our case, only user and group models were affected). The Django documentation [helpfully explains](https://docs.djangoproject.com/en/1.9/topics/db/multi-db/#moving-an-object-from-one-database-to-another) that you can use `save(using=...)` to migrate instances to a new database, but that if you do you need to be careful about primary keys  In this case, we're migrating to a brand new, empty database – so it was easiest just to clear out any records (e.g., content types and permissions created by initial Django migrations) from the target database before copying data over.  (I think it should be possible to clear out primary keys before re-saving and let Django generate new ones, but doing that with related objects was more complication than I wanted to deal with in this case.)

## Example code

Here's a simplified version of the batch migrate method I ended up creating.

{% highlight python %}
  def batch_migrate(self, model):
        # remove data from destination db before copying
        # to avoid primary key conflicts or mismatches
        if model.objects.using('dest').exists():
             model.objects.using('dest').all().delete()

        # get data form the source database
        items = model.objects.using('source').all()

        # process in chunks, to handle models with lots of data
        for i in range(start, count, 1000):
            chunk_items = items[i:i+1000]
            model.objects.using('dest').bulk_create(chunk_items)

        # many-to-many fields are NOT handled by bulk create; check for
        # them and use the existing implicit through models to copy them
        for m2mfield in model._meta.many_to_many:
            m2m_model = getattr(model, m2mfield.name).through
            batch_migrate(m2m_model)
{% endhighlight %}

You could probably use the `batch_size` parameter on the `bulk_create` method, but I haven't tested it.  My real script has extra logic to keep track of the data and report on progress, so I needed to process records in batches anyway.

Because this migration uses models, you can run whatever reports and counts you want on both databases, before and after. You can use [`call_command()`](https://docs.djangoproject.com/en/1.9/ref/django-admin/#running-management-commands-from-your-code) to run Django database migrations after data is copied - in this case, we had a custom sequence that needed to be recalculated after all the data was copied over.   You could use querysets filter to find and copy over only specific records, e.g. records created since your last data migration (although you'll have to pay attention to primary keys if you've added records to your target database).

Here's the [full manage comand](https://github.com/emory-libraries/pidman/blob/3f6d7596ce192e2e5be7c398958908962f0686ab/pidman/pid/management/commands/pg-migrate.py).  It includes summary output comparing model counts in both databases, a prompt for user confirmation before deleting records, options to copy only speficic models, and progressbars so you can see the number of records copied and get a prediction when the data migration for the current model will finish.

## Caveats

* *Use at your own risk!* Read the relevant Django documentation, pay attention to any caveats that might apply to you, and run your own checks and verifications on your data.

* *Don't change your models before you migrate!* This might seem obvious, but if your models aren't the same in your source and target databases, then you can't use your models to migrate the data.  In this case, I was updating an old application that hadn't been touched in quite some time, and I just kept seeing simple updates and improvements I could easily make to improve the application, but some of them included database changes.  I ended up having to create a data migration release without model changes for copying the data, and then a subsequent release with the updates.




