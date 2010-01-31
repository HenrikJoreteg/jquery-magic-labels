---
layout: default
title: Home
---

# jQuery Magic Labels Plugin
by [Henrik Joreteg](http://joreteg.com)

Provides semantically clean solution for adding in-field labels.

This plugin checks the "for" property of the `<label>` field and inserts the content of the `<label>` tag as a placeholder value of the associated `<input type="text">` or `<textarea>` fields.

## Demo
Check out <a href="demo.html">the demo</a>.

## Download
You can download the latest version of this project from [GitHub](http://github.com/HenrikJoreteg/jquery-magic-labels/downloads).
You can also clone the project with [Git](http://git-scm.com) by running:
    
    $ git clone git://github.com/HenrikJoreteg/jquery-magic-labels


## Dependencies
jQuery 1.2.6 or later should work

## Install
simply add the script reference after your import jquery:


{% highlight html %}
<script src="jquery.js"></script>
<script src="jquery.magiclabels.min.js"></script>
{% endhighlight %}


Then call `magicLabels()` function with a selector identifying the form you want to use it on. Like this:

{% highlight javascript %}
$(document).ready(function(){
    $("form").magicLabels();
});
{% endhighlight %}

**NOTE:** in this example I'm using "form", but it can be any valid selector as long as it grabs forms you wish to apply the effect to.

## License
[BSD License](http://projects.joreteg.com/licenses/BSD.html)

## About the developer
<a href="http://joreteg.com">http://joreteg.com</a><br/>
<a href="http://twitter.com/HenrikJoreteg">@HenrikJoreteg</a><br/>
<a href="mailto:hjoreteg@gmail.com">hjoreteg@gmail.com</a><br/>
678.223.3445