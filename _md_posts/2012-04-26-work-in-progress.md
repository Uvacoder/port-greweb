---
title: 'Work in &lt;progress /&gt;'
author: Gaetan
layout: post
permalink: /2012/04/work-in-progress/
dsq_thread_id:
  - 665041758
meta_description:
  - Native progress bar in the browser
categories:
  - Programming
  - Web
tags:
  - html5
  - javascript
  - progress
---
# 

**Did you know browsers now have a built-in HTML tag for making progress bar?** 

(progress is not supported) 

How cool is that!

It is perfect for making web applications loading bar in just one line of HTML and a few Javascript code.

A progress tag will be displayed on recent browsers with a OS-native progress bar representing a loading. Like many HTML tag, if it is not supported, it fallbacks nicely by displaying its inner content. This fallback content should either be your own designed progress bar or simply display a percentage.

It is today supported by Firefox 9 , Chrome, Opera and IE10.  


## Example

23 %

### On your browser:23 % 

### On Linux / Firefox (with GNOME)

![][1]

 [1]: http://blog.greweb.fr/wp-content/uploads/2012/04/progress.png "progress"

### On Mac OS / Chrome:

![][2]

 [2]: http://blog.greweb.fr/wp-content/uploads/2012/04/Capture-d’écran-2012-04-26-à-14.59.37.png "progress_23"

### On IE 6:

![][3]

 [3]: http://blog.greweb.fr/wp-content/uploads/2012/04/Capture-d’écran-2012-04-26-à-15.20.32.png "progress_23_IE"

## Let’s see some cases:

### waiting

``  
### starting

``  
### in progress:

``  
### finished:

``  
## Making a download bar

When you need to load big resource like images, videos, or 3D materials, you usually want to display the progress of the download.  
You could still do it using some divs and CSS Javascript, but this is now much simpler to use a  :

### One line of HTML:



### And the Javascript:

(for more convenience, we are using jQuery)

var totalBytes = 10000000; // CHANGE ME WITH THE SIZE OF THE RESOURCE  
var req = new XMLHttpRequest();  
var progress = $('#download');  
progress.attr("max", totalBytes);  
req.addEventListener("progress", function (e) {  
  progress.attr("value", e.loaded).text(Math.floor(100*e.loaded/totalBytes) " %");  
}, false);    
req.addEventListener("load", function (e) {  
  // THE RESOURCE IS LOADED  
  progress.replaceWith("Downloaded!");  
});  
req.open("GET","resource.dat",true);                                                                                                                                              
req.send();

**[See it in action here.][4]** 

It is quite easy to extend my code to support multiple files to download.

It is also easy to use this progress bar for anything else, but remember it represents a progress. If you want to represent some kind of stats, refer to the dedicated  tag.

 [4]: http://greweb.fr/progress/