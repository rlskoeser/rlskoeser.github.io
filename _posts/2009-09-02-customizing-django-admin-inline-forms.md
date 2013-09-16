---
layout: post
title: Customizing Django Admin Inline Forms
created: 1251934677
categories: django admin inline forms
---
<p>To display non-field elements on an admin inline form it is necessary to replace the default template. To replace the default template define define a class and extend AdminInlineForm like this</p>

<pre>class TargetInline(admin.TabularInline):
    model = Target                        #defines the ModelForm model
    fields = ('qualify', 'uri', 'proxy')  #defines fields on the from only model fields can be added
    form = TargetInlineForm               #defines the form to use
    template = 'admin/target_inline.xhtml'#defines the new template and is relative to your templates dir
</pre>

<p>Inline Form templates are not extendable and must be overwritten.  Copy the default template to your new file and then modify it freely</p>

<p>Note <strong>inline_admin_form.original</strong> is the original instance of your model and can be used to access any public methods of the model.</p>
