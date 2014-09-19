---
title: 'IBEX, post-mortem'
description: 'IBEX is my game made for js13kgames. This article explains how the game has been implemented with GLSL, cellular automaton and using bitmap collision and pixels paradigm.'
thumbnail: /images/2014/09/ibex-2.png
author: Gaetan
layout: post
tags:
 - gamedev
 - js13k
---

 [gamepost]: /2014/09/ibex
 [js13kgames]: http://js13kgames.com/
 [submission]: http://js13kgames.com/entries/ibex
 [github]: http://github.com/gre/js13k-2014
 [cellular]: http://en.wikipedia.org/wiki/Cellular_automaton
 [wolfram]: FIXME
 [ankos]: FIXME
 [simplestautomaton]: FIXME


<a href="/2014/09/ibex">
  <img src="/images/2014/09/ibex-2.png" alt="" class="thumbnail-left" />
</a>

Last week I finished my [JS13K game][gamepost],
an apocalyptic game where you have to help some wild ibex to escape from the inferno.

This article is a technical post-mortem about the development of this game in JavaScript / WebGL
and around the Cellular automaton and Pixels paradigm concepts.

First, I will introduce some **nice parts** (and cool discoveries to me):
- How the world is **ruled with [cellular automaton][cellular]** and performed efficiently in a GLSL shader.
- The **"Pixels paradigm"**. How to query and analyze the pixels world. How to do simple bitmap collision detection.
- The **game rendering performed in a GLSL shader** and all the graphics details I've spent hours on.

Then, I will explain **things I've learned from WebGL**, how to solve the bad approaches I've taken,
and how I could have made a much more efficient game.

And finally, I will summary **what could have made this game even more interesting**,
and some ideas that was not reachable in a 2 weeks deadline.

<!-- more -->

## Nice parts

### Cellular automaton ruled world

A Cellular Automaton is an automaton (in other words, a state machine) based on cells (like cells of an array in computer science).
It has been discovered years ago and popularized by [Stephen Wolfram][wolfram].
[A new Kind of Science][ankos] is an interesting book on the subject I'm reading these days.

The simplest possible cellular automaton is the one where, at each generation, the cell value is determined from the previous and the 2 adjacent cells (left and right) value and where the value can only be 0 or 1 (white or black / true or false). The way the cell value is determined is through a set of rules. [You can learn more about them here][simplestautomaton].

TODO IMAGE

The kind of Cellular Automaton I focused on for my game is **2D cellular automaton**:
At each generation, the cell value is determined from **the previous value and the 8 adjacent cells**.

TODO IMAGE

<span class="thumbnail-right">
  FIGCAPTION?
  ![](/images/2014/09/ibex-experiment1.png)
  Fun and experimental result I accidentally produced in an early developement of my cellular automaton.
</span>

The game theme was "Four Elements: **Water, Air, Earth, Fire**", so I used these 4 elements as primary elements of the cellular automaton.
Each elements also have secondary elements that can be created from each other interactions: **Source, Volcano, Grass, WindLeft, WindRight**.

That is, there is a total of 9 possible values for a cell in my cellular automaton.

With the 9 previous cells AND the 9 possible values per cell, so there is a LOT of possible rules.
My rules remain quite simple but powerful. Also I have a few number of rules.

> That is the big thing about cellular automaton: very simple rules but incredible variety of results.

However, to avoid seeing some (well known) patterns in my result I added some randomness in my rules.
The results after this step turn out to be incredibly cool.

In the following video, notice how cool and realist the fire propagation can be by varying the propagation randomness factor.
TODO: video of fire propagation with various randomness.


In general, we can classify my rules into 2 kind of rules: "interaction" rules and "propagation" rules.
The first kind describes how two (or more!) elements interact each other. The second kind describes the way an element evolve.
Some rules will also mix them both.

Here are some simple "propagation rules":

**Earth remain Earth**
TODO image

**Water falls**
TODO image

**Fire grows**

...

Here are some examples of rules which handle interaction between elements:

TODO schema with different elements interactions

Finally I added one special extension to my 2D cellular automaton, a cell value can also being determined from more that just the 8 adjacent cells.
That is the case of my grass: to have more complex structure I have made that the grass is determined 
from the previous cell at position `(x, y-N)` where x and y is the cell position and N is a variable value (random but constant per cell position).
In other word, a forest can grow if the cell at N step under it is not a forest. This extra rule just adds a constraint on the max height that a forest can have.



...
...

### Pixels paradigm and bitmap collision

Because the game is performed as a 2D cellular automaton, the world first-class citizen is the pixel.
A pixel is a square positionned in the world at a position (x, y).
The world is technically represented as a texture (an image) in the GLSL logic and rendering.
However, since we have animals with physics and AI decisions on top of this simulated world,
running the cellular automaton in a shader is not enough, I used JavaScript to do this job.
It means that we need to able to query the world.
We will see how to use `gl.readPixels` to get a an `Uint8Array` representation of the world in JavaScript.
...

#### Querying the world

so one thing to know is that readPixels is blocking. This is clearly the bottleneck of my game and I had to do a few optimization here:
- throttle the readPixels use
- prefer one big readPixels rather than multiple localized `readPixels`
...

#### Analyze the ibex "sight" and physics

The pixels domain is pretty low level, I've wrote a specific abstract which analyze a bit what is around an ibex.

First we select from the big world array a `[ 30, 20 ]` array centered on the ibex position (technically we are still just using the big array without creating an unecessary temporary one).

TODO schemas:
  - visualize the ibex sight bound
  - example of an ibex in its environnement
  - schema to explain the left / right sight and what is analyzed from the raw array

...

### The GLSL rendering


## Lesson learned and fun parts

...

## What could have been improved with more time

...
