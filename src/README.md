# Source

This "Source" folder is where all of your files associated with this site will go
and is considered the root ('/') of your site.
This is also where all of your pages will be generated when using the [page subgenerator](#Subgenerator).

## Pages

Pages are the main driver for static sites and also determine your site's routes.
All page templates (except index.{jade,nunjucks}) should be placed in a folder named by your desired route.
For example, a contact page would most likely be loaded at the `/contact` route.
You would acheive this by creating the following structure:

```
└── src
    └── contact
        └── index.{jade,nunjucks}
```