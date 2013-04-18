---
title: 'Bezier Curve based easing functions &#8211; from concept to implementation'
author: Gaetan
layout: post
permalink: /2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
topsy_short_url:
  - 
dsq_thread_id:
  - 593414437
categories:
  - Programming
  - Web
tags:
  - animation
  - bezier
  - css
  - javascript
---
# 

![][1]

 [1]: http://blog.greweb.fr/wp-content/uploads/2012/02/Capture-d’écran-2012-02-29-à-11.26.01.png "Bezier example"

Many animation libraries are today using **easing functions** – functions of time returning a progression percentage value. This is required to perform such cool effects:



  


But most of these libraries implement a huge collection of functions. We will see how we can generalize them with bezier curves.



For instance, we use to do this:

EasingFunctions = {  
  linear: function (t) { return t },  
  easeInQuad: function (t) { return t*t },  
  easeOutQuad: function (t) { return t*(2-t) },  
  easeInOutQuad: function (t) { return t