# content-blocker
Content blocker for GDPR (DSGVO) purposes. Block iframes before consent. Works with WordPress.\
script.js will set a Cookie for 365 days.\
\
Demo: https://xretunes.github.io/content-blocker/ \
\
To use the content blocker, paste the div with the class "consent-container" from index.html. \
In the iframe replace the "src" with "data-src"\
\
script.js belongs to the footer \
\
IMPORTANT: \
Replace the "src"-attribute in the iframe with the "data-src" attribute, like so
<iframe data-src="ht<span>tp://</span>example.com/"></iframe>
