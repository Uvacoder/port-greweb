---
published: false
title: 'Qep3.: QanimationFrame'
description: 'TODO'
thumbnail: /images/2013/07/promise_then_thumbnail.jpg
author: Gaetan
layout: post
tags:
 - AWOP
 - javascript
 - promise
 - Q
 - library
---

 [0]: /pages/a-world-of-promises/
 [1]: http://github.com/gre/qanimationframe
 [2]: https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/RequestAnimationFrame/Overview.html
 [3]: http://creativejs.com/resources/requestanimationframe/
 [4]: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

# A [World Of Promises][0], episode 3

*This third article on [Q][1] is a little parenthesis to the Qep articles series,
featuring the `requestAnimationFrame` Javascript function and its general usage,
and [QanimationFrame][1], its Promisified version used as a "wait for DOM to be ready" API.*

## `requestAnimationFrame`

`requestAnimationFrame` is a function which delays a Javascript function execution to the next browser 
render frame of a given DOM element. 
It takes one argument in parameters which is the function to call on next repaint.
*(N.B. there is not anymore a second DOM parameter like a few months ago, see the [spec][2])*

### ...for animation loop

`requestAnimationFrame` helps to easily make a render loop:

```javascript
(function loop(){
  requestAnimationFrame(loop);
  render();
}());
```
In that example, the `render` function can be any Javascript animation like Canvas-based or DOM-based.

A good practice is to always compute time-relative animation and not assuming the frame rate will be constant.

```javascript
function badRenderFunction() {
 someObject.x += 0.1; // 10 pixels per 100 frame
}
```

```javascript
var lastTime = Date.now();
function goodRenderFunction() {
 var now = Date.now();
 var delta = now-lastTime; // in milliseconds
 lastTime = now;
 someObject.x += 0.01 * delta; // 10 pixels per second
}
```

More information on `requestAnimationFrame` can be found [here][3] or [here][4].

We will now talk about another interesting benefit of that function.

### ...for waiting a DOM update

## QanimationFrame


