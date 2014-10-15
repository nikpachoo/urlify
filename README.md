# URLify

JavaScript wrapper for URLify.js from the [Django project](https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js). Transliterates non-ascii characters for use in URLs.
Handles symbols from Latin languages as well as Arabic, Armenian, Azerbaijani, Czech, Greek, German, Latin, Latvian, Lithuanian,
 Polish, Romanian, Russian, Serbian, Turkish, Ukrainian. Symbols it cannot transliterate it will simply omit.

## Installation

To get going with URLify you can:

[Download the latest release](https://github.com/nikpachoo/urlify/archive/master.zip)
Install with Bower: bower install urlify


## Usage

To generate slugs for URLs:

```javascript
var prettySlug = window.URLify('Любая строка');
```
You can also limit the length of the string:
```javascript
var prettySlug = window.URLify('dowolny ciąg', 7);
```