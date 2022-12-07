# Content Blocker
Content blocker for GDPR (DSGVO) purposes. Block iframes before consent. Works with WordPress.\
script.js will set a Cookie for 365 days after consent.\
\
Demo: https://xretunes.github.io/content-blocker/ \
\
To use the content blocker, paste the div with the class "consent-container" from index.html. \
In the iframe replace the "src" with "data-src".\
\
script.js belongs to the footer.

### IMPORTANT:
1. Don't forget to put the "remove cookie button" to your privacy or cookie page. (script.js needs to run also on this page) \
2. Replace the "src"-attribute in the iframe with the "data-src" attribute, like so

```html
<iframe data-src="http://example.com/"></iframe>
```
