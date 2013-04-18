---
title: 'Same Game Gravity: 6 platforms, 1 codebase'
author: Gaetan
layout: post
permalink: /2011/07/same-game-gravity-technical-notes/
suf_pseudo_template:
  - default
dsq_thread_id:
  - 463659826
categories:
  - Mobile
  - Web
tags:
  - game
  - html5
  - Web
---
# 

see also [Same Game Gravity presentation][1].

 [1]: http://blog.greweb.fr/2011/07/same-game-gravity-for-ipad-iphone-android-facebook-chrome-and-web/

2 years ago, I started to developed the [Same Game][2] as an HTML Canvas experiment. I’ve enjoyed developing this game, mostly because playing with HTML5 Canvas is so easy. Recently I’ve seen a nice increase in the user base (now around 250 visitors a day) – despite it being perhaps the simplest games I’ve ever developed. Simplicity is good, but my increase in users is thanks to the power of HTML5: The Same Game is available for 6 different platforms. And I can pump out new builds for them all in around 15 minutes. Here’s how…

 [2]: http://same.greweb.fr/

**It’s often the simplest games which work. Too much complexity is not good.**

[  
![][4]  
][4] 

 []: http://same.greweb.fr/



In 2010, I learned how to make mobile web applications. It was also the year of the iPad. Out of interest I tried my same game canvas experiment on the iPad, and was surprised to find that it worked pretty well out of the box! Seeing it run on multiple devices was exciting – and the touch screens offered a new dimension for creating highly intuitive interactions. I mean, today, **even my mum can play Same Game Gravity without any help!** (That’s unfortunately not the case for her desktop)

That’s why I wanted to make Same Game for mobile. I started out developing and testing it as an Android application – because I have an Android phone. I created my own micro framework with some MVC concept (views, controllers, a router, etc.). The goal was to create **a simple and light web app that look like a native application**. For views? Portions of HTML. For transitions between views? CSS transitions. Supporting the “back” button of Android devices as a native application? I played with the hash (onhashchange event). 

In short, the web is wide and worldly enough to do pretty much everything you want with…

So I implemented the Same Game on Android. But (naturally) the game already existed on Android! I had to find something new! I was itching to fully exploit the possibilities of a new technology. Mobile has great potential – so it would be bad not to make use of new APIs. I discovered **the Accelerometer**. My idea was gravity: change the balls position by rotating the device.

But, many of my friends don’t have Android phones!

The Same Game Gravity is now available for iPad, iPhone, Android, Facebook, Chrome Store and desktop browsers. That’s a lot of platforms, with a lot of APIs to learn – and potentially a LOT of work in maintenance. But thankfully I didn’t have to go off learning Objective-C and Java Android, or keep track of arm-fulls of repositories! All the platforms are supported from **a single codebase**: thanks to the power and awesomeness of JavaScript, HTML, and CSS – combined with a nifty tool I developed [WebAppBuilder][4] to easily build each instance.

 [4]: /2011/06/automating-web-app-development-for-multiple-platforms/

**I added a cool scoring system that spreads via multiple social networks simultaneously and easily – and now I have a truly cross-platform game!**

### The code

Desktop version source code is available on [Github][5].

 [5]: https://github.com/gre/same-game-gravity

#### The HTML

(see [game.html][6])

 [6]: https://github.com/gre/same-game-gravity/blob/master/game.html

The HTML code is pretty simple.  
Basically, there is a **** container which contains different ****. Each section is a view of the game.

For instance here is the game view :  


In the desktop version, **game.html** is wrapped into **index.html** in an iframe to keep the game independent of the context.

#### The CSS

(see [game.css][7])

 [7]: https://github.com/gre/same-game-gravity/blob/master/game.css

CSS 3 is very rich.

CSS Transitions and CSS Transforms has been used to do view change.  


#### The game core

(see [game.js][8])

 [8]: https://github.com/gre/same-game-gravity/blob/master/game.js

Code is organized in different javascript “classes”.

The main components are :

*   [game.Grid][9] contains all the algorithm of the game.
*   [game.GameCanvasRenderer][10] is a game renderer (graphic part of the game) based on HTML Canvas element. It contains different functions called by **game.Game**.
*   [game.Game][11] contains all the game logic, the game loop and bind DOM events (touch, click, …).

 [9]: https://github.com/gre/same-game-gravity/blob/master/game.js#L324
 [10]: https://github.com/gre/same-game-gravity/blob/master/game.js#L687
 [11]: https://github.com/gre/same-game-gravity/blob/master/game.js#L850

#### game.desktop.js: a game instance for the desktop

(see [game.desktop.js][12])

 [12]: https://github.com/gre/same-game-gravity/blob/master/game.desktop.js

This file contains all the specific code for the desktop version (it overrides existing classes). But it mainly contains the [game controller][13] handling different views and using all game classes.

 [13]: https://github.com/gre/same-game-gravity/blob/master/game.desktop.js#L137

##### Some significant code



### The gravity

The game gravity was maybe the hardest part of the game development. 

#### Using device Accelerometer for mobile/tablet version

I needed to find ways to access to the device accelerometer. For Android I used [PhoneGap Accelerometer][14]. But on iPhone I wasn’t able to get PhoneGap’s accelerometer.getCurrentAcceleration to work properly, so I used DeviceMotion event supported by iOS 4.2 . (see [DeviceOrientation spec][15]).

 [14]: http://docs.phonegap.com/phonegap_accelerometer_accelerometer.md.html
 [15]: http://dev.w3.org/geo/api/spec-source-orientation.html

(A big thanks to [@42loops][16] for that: [devicemotionevent.html][17])

 [16]: http://twitter.com/42loops
 [17]: https://github.com/peutetre/test-mobile-safari/blob/master/devicemotionevent.html

![Device orientation schema][18]

 [18]: http://blog.greweb.fr/wp-content/uploads/2011/07/c-rotation.png

#### CSS Transforms and Transitions for the desktop version

Computers don’t have an Accelerometer. *Except maybe some macbook but I’m not sure people would like to turn macbook in 360°!* but the gravity concept is crucial to the game. I ended up implementing “gravity” via the arrow keys.  
The game is entirely rotated with [CSS Transforms][19] and animated with [CSS Transitions][20].

 [19]: https://github.com/gre/same-game-gravity/blob/master/game.desktop.js#L31
 [20]: https://github.com/gre/same-game-gravity/blob/master/index.css#L35

### The score system

I’ve written a web service with [Play! framework][21] to receive scores or retrieve them from Twitter, validate them and spread them with a json API and widgets.

 [21]: http://playframework.org/

![tweet example][22]

 [22]: http://blog.greweb.fr/wp-content/uploads/2011/07/same_game_gravity_schema.jpg

**This web service will be available soon for game developers.**

The power of this web service is the usage of **social networks**. It will retrieve peoples names, avatars, and their social links without needing to prompt the user.  
For game developers, social scores sharing is a nice way of **advertising your game**: someone shares his scores to his friends: so your game can spread virally.

See that little hash “$4f005″? That’s a way to check if sent scores are valid.  
In fact the web service allows you to handle your own security, via your own “twitter to scores” transformer. You can add a small Javascript function that is executed by the server when transforming a twit to scores – to ensure there hasn’t been any cheating.

The web service also provides **generic widgets** to easily embed game scores in websites.  
If a player has played a few different games using this web scores service, we can provide a “transversal” widget contains all scores of a player.

#### The Same Game Gravity Widget

Same Game Gravity use its own widget ([source code here][23]).

 [23]: http://same.greweb.fr/public/javascripts/same.scores.js

This widget is very customizable. Here’s an example of the code used to embed the widget anywhere (like in this blog post) :



### Conclusion

And here we are! 6 months to develop a game and release it on different platforms! I learn a lot about mobile development and I’m now more capable to develop other games.  
I learned that you should avoid using Canvas if you can use DOM instead because performance are bad on some mobile device whereas CSS Transitions / Animations are hardware accelerated.

Finally, I learned that game development is not only about programming! The marketing and the graphical parts are so important too.

Want to checkout the code or contribute to the game i18n? Just fork the [game repository][5].



#### Thanks

Big thanks to all game testers. Friends and colleagues, thank you very much!  
Special thanks to @mrspeaker for English help ![:)][24] 

 [24]: http://blog.greweb.fr/wp-includes/images/smilies/icon_smile.gif