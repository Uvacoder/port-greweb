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

# A [World Of Promises][0], episode 3

*This third article on [Q][1] is a little parenthesis to the Qep articles series,
featuring the `requestAnimationFrame` Javascript function and its general usage,
and [QanimationFrame][1], its Promisified version used as a "wait for DOM to be ready" API.*

## `requestAnimationFrame`

`requestAnimationFrame` is a function which delays a Javascript function execution to the next browser render frame of a given DOM element.

