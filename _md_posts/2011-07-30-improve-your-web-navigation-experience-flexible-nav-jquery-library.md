---
title: 'Improve your web navigation experience &#8211; Flexible Nav jQuery library'
author: Gaetan
layout: post
permalink: /2011/07/improve-your-web-navigation-experience-flexible-nav-jquery-library/
topsy_short_url:
  - 
dsq_thread_id:
  - 463659833
categories:
  - Web
tags:
  - javascript
  - jquery
  - library
  - navigation
---
# 

## [Demo][1]

 [1]: http://demo.greweb.fr/flexible-nav/

> Flexible Nav is a small jQuery library which add a smart navigation bar on the right of the page. It improves a web page navigation and helps to visualize different sections of a document, an article,.. any web page.
> 
> Nav links are distributed proportionally to the page sections. See how your scrollbar “weds” these links ![:)][2] 

 [2]: http://blog.greweb.fr/wp-includes/images/smilies/icon_smile.gif

Flexible Nav is both a **library** and a **bookmarklet** which can be used easily in any website.

The bookmarklet demonstrate the **hackability of the web** by using the semantic of web headings (*h1, h2, h3, ..*).

### Links

*   [Documentation and Demos][1]
*   [fork me on Github][3]
*   [FlexibleNav bookmarklet][4] (drag me in your bookmarks bar)

 [3]: https://github.com/gre/flexible-nav
 [4]: javascript:(function(){window.flexibleNavBase='http://lib.greweb.fr/flexible-nav/';var a=document.getElementsByTagName('head')[0],b=document.createElement('script');b.type='text/javascript';b.src=flexibleNavBase 'bookmarklet.min.js';a.appendChild(b);})(); void 0