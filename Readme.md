Fillit
======
Fillit is a simple plugin for jQuery that proportionately fills a container element by sizing up the child element.

Usage
-----
```javascript
$( "#my-container img" ).fillit();

```

Destroy
-------
You can destroy the style settings FillIt has added by calling the destroy method.
```javascript
$( "#my-container img" ).fillit( "destroy" );

```

History
-------
###v0.0.2###
Child element can now be any type of element, however if the element is not an image you must add data attributes for width and height as `data-natural-width` and `data-natural-height` respectively.

###v0.0.1###
Basic support for filling containers with child image element.  Currently, child element **must** be an image.
