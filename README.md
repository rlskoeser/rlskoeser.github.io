# rlskoeser.github.io

personal website running on [hugo](https://gohugo.io/) and GitHub pages


## adding a new post

Use `hugo new` to create a new post using a local archetype which includes
 all local customizations and options.  

```sh
hugo new posts/`date +'%Y-%m-%d'`-title-slug
```

This will create a page bundle; images associated with the post should
be added in the same folder.

Any new custom post parameters should be added to the post archetype in
`archetypes/post/index.md`.