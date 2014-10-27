FillIt
======
FillIt is a simple plugin for jQuery that proportionately fills a container element by sizing up the child element.

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
###v0.0.1###
Basic support for filling containers with child image element.  Currently, child element **must** be an image.
