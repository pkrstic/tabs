# Tabs

_Please try it out in a project, and [make suggestions][issues] or [report bugs][issues]!_

## Options

Options can be set as object attributes trough javascript and/or trough markup, as attributes, or both.

In case when we use both, markup options precedes javascript.

<dl>
<dt>tabs / data-tabs</dt>
<dd>Tab selector, it must be <b>A</b> tag, since <b>href</b> attribute content is used for destination element, which will be shown.<br>
Type: string<br>
Default: 'a'
</dd>
<dt>selectedClass / data-selectedclass</dt>
<dd>CSS class, assigned to selected tab.<br>
Type: string<br>
Default: 'tab_selected'
</dd>
<dt>onChange / data-onchange</dt>
<dd>Callback function called before tab show. Tab content id is passed as parameter. In javascript it can be passed anonymous function, in case when we passing function name trough attribute, we can use only function name.<br>
Type: function or string<br>
Default: function(id){}
</dd>
<dt>zSwitch / data-zswitch</dt>
<dd>Used when we want to change tab content visibility by changing zIndex, this way we never hide some element, just push it to the back. Useful for content with images, since every browser optimizes image loading, and skips loading of hidden images.<br>
Type: bool<br>
Default: false
</dd>
<dt>tabContent / data-tabcontent</dt>
<dd>Used with previous param, to define selector for tab content.<br>
Type: string<br>
Default: '.tab_content'
</dd>
</dl>
## Release History

* 2012-04-03 - v1.0.0 - Initial release.

## License
Copyright (c) 2012 Predrag Krstić  
Licensed under the MIT license.  

[issues]: /pkrstic/tabs/issues
