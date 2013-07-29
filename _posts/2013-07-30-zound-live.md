---
title: 'ZOUND live project initiated'
description: 'Last week, I initiated ZOUND live during our monthly Hackday at Zenexity, following my previous "ZOUND" experiment but being much more ambitious this time: using both the Audio API, the new MIDI API and electronic music software experience, we start our own web collaborative audio modular tracker.'
thumbnail: /images/2013/07/nanokontrol.jpg
author: Gaetan
layout: post
tags:
 - MIDI
 - audio
 - hackday
---

[zound]: /2012/08/zound-a-playframework-2-audio-streaming-experiment-using-iteratees/
[webmidiapi]: http://webaudio.github.io/web-midi-api/
[webaudioapi]: https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html
[tracker]: http://en.wikipedia.org/wiki/Tracker_(music_software)
[zenexity]: http://zenexity.com

<img src="/images/2013/07/nanokontrol.jpg" alt="" class="thumbnail-left" />

Last week, I initiated **ZOUND live**,
following my previous ["ZOUND"][zound] experiment but being much more ambitious this time:
using both the **Audio API**, the *new* **MIDI API** and electronic music software experience,
we start our own **web collaborative audio modular tracker**.

This article will summary the bootstrap of the ZOUND live project, introduce you web technologies used,
and will feature a live video of the application.

<!-- more -->

## The team

This project has been started during our monthly Hackday at [Zenexity][zenexity],
First I want to thanks my 6 awesome coworkers to be part of the project:

* [@mrspeaker](http://twitter.com/mrspeaker) for his awesome electronic music knowledge.
* [@bobylito](http://twitter.com/bobylito) for his brilliant ideas and his JavaScript skills.
* [@mandubian](http://twitter.com/mandubian) for his playframework experience and JSON superpower!
* [@etaty](http://twitter.com/etaty) for helping with the server synchronization.
* [@skaalf](http://twitter.com/skaalf) for his cool DrumBox module.
* [@Noxdzine](http://twitter.com/Noxdzine) for his talentuous design.

This was actually for me my first real project managment and it was quite cool!

I bootstraped a PoC one week before the Hackday because when working on such a team
you need a ready to go architecture and basic UI,
then I have to define goals to achieve for the Hackday 
and we fulfilled it just in time!

We end the Hackday with a **Real Time demonstration of our application** with 4 people interacting together
with MIDI controllers.

Here is a video of the Hackday version application:

<iframe width="640" height="480" src="//www.youtube.com/embed/uyHWhCnE4L0" frameborder="0" allowfullscreen></iframe>

## The web techs

### About Web MIDI API

We bought a few **cheap MIDI controllers to interact with our application**.

<img src="/images/2013/07/midicontrollers.jpg" class="thumbnail-right" style="max-width: 250px" alt="" />

MIDI means *Musical Instrument Digital Interface*,
it is the **protocol** used by a lot of electronic musical instruments for a few decades.

The [Web MIDI API](webmidiapi) is a recent specification which makes MIDI devices accessible from a web page,
via a Javascript API.

Recently, *Chrome* has started to [implement it](https://code.google.com/p/chromium/issues/detail?id=163795)
and it is available under *Chrome Canary* (the dev version) via a *flag* to enable.

This is the perfect time to start experimenting it!

However, what I fear the most happened for the Hackday: **the MIDI API was broken on the morning
after a Chrome update during the night!** A first version of a browser MIDI permission was implemented
but I never succeed to make it working. Today, the state of the API seems still broken on Mac.

<blockquote class="twitter-tweet"><p><a href="https://twitter.com/greweb">@greweb</a> If you know how to build chromium, I may be able to provide a patch to enable it. But it isn&#39;t so long until Canary supports it.</p>&mdash; とよしま (@toyoshim) <a href="https://twitter.com/toyoshim/statuses/360685543778041857">July 26, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Well, that was already too late for the Hackday,
Fortunately we used a polyfill which relies on a Java applet to access MIDI devices, it is a laggy polyfill though...

**Lesson learned:** nightly feature is nightly feature, never assume features you add via flags are stable *(I never did, it was a Hackday afterall!)*.

BTW, cheers to <a href="https://twitter.com/toyoshim">@toyoshim</a> who is implementing the MIDI API in Chrome :-)

### Using Web Audio API

The [Web Audio API][webaudioapi] is *a high-level JavaScript API for processing and synthesizing audio in web applications*.

Awesome thing with that API, it is already an audio modular API, so it isn't so hard to build a modular audio application on top of it!

### Playframework

[Playframework](http://playframework.com/) has been used for broadcasting events 
between clients via WebSocket and synchronize everything on the interface.
It is only broadcasting and does not save the song yet.

### Backbone.js

[Backbonejs](backbonejs.org) was used for the models, views and its nice event system.
It was a good library for prototyping and architecture the different parts of the application.

I found Backbone.js especially good when linking all parts together and especially for the network logic:
<script src="https://gist.github.com/gre/6107277.js"></script>

## Inspiration

A lot of features has been inspired from existing software like *SunVox* or *Renoise*.
However, our version uses 100% web technologies and add collaborative and real time aspects.

<img src="/images/2013/07/sunvox.png" style="max-width: 300px" />

### Tracker

The application has a [tracker][tracker] where you can put notes.

<img src="/images/2013/07/tracker.png" style="max-width: 300px" />

### Modular Audio

The application integrates a [modular music](http://en.wikipedia.org/wiki/Modular_software_music_studio) concepts.

<img src="/images/2013/07/nodeeditor.png" />

## More to come!

We today have a **first version of a working collaborative tracker with basic modular audio features**:

- MIDI note support + MIDI control assignation allowing to change module properties.
- a unique tracker with a 32 line loop and 23 tracks.
- Synchronisation of everything: the tracker and modules for all connected clients.
- off-mode allowing one user to prepare a track which is muted for other users.
- play/pause and record mode!
- cursor of users displayed on the tracker.

**Stay tune because there is so much features to come!**

[**The project on Github**](http://github.com/gre/zound-live)
