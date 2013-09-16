---
layout: post
title: Django Unit Tests with a Transactional Database
created: 1286482761
categories: transaction testing postgres django database
---
<div class="searchable">
                <p>In a particular project, I found that some of the unit tests running against a Postgres database where sometimes failing with the error message <strong>"current transaction is aborted, queries ignored until end of
transaction block"</strong> and at other times the tests passed.  </p>
<p>
After much research, I discovered that all the tests failed after any test that causes an <span class="missing wiki">IntegrityError</span>.</p>
<p>
The solution was to make the test class extend <strong><span class="missing wiki">TransactionTestCase</span></strong> insted of <span class="missing wiki">TestCase</span>.  This allows the test to recognize commit / rollback etc.  that may happen when there is an <span class="missing wiki">IntegrityError</span>.</p>

              </div><p>&nbsp;</p><p>So in my test setup I&nbsp; had to change: </p><div style="background-color::#003366;"><strong>class MyTestCase(TestCase): </strong></div><p>to </p><div style="background-color::#003366;"><strong>class MyTestCase(TransactionTestCase):</strong></div><p>&nbsp;</p><p><a href="http://docs.djangoproject.com/en/1.2/topics/testing/#django.test.TransactionTestCase">http://docs.djangoproject.com/en/1.2/topics/testing/#django.test.TransactionTestCase</a></p>
