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
 [gol]: http://en.wikipedia.org/wiki/Conway's_Game_of_Life
 [cavelikegen]: www.roguebasin.com/index.php?title=Cellular_Automata_Method_for_Generating_Random_Cave-Like_Levels


<a href="/2014/09/ibex">
  <img src="/images/2014/09/ibex-2.png" alt="" class="thumbnail-right" />
</a>

Last week I finished my [JS13K game "IBEX"][gamepost],
an apocalyptic game where you have to help some wild ibex to escape from the inferno.

> IBEX received the 16th place (out of 129 games) from the [js13kgames][js13kgames] jury.

This article is a technical post-mortem about the development of this game in JavaScript / WebGL
and around the Cellular automaton concept and Pixels paradigm.

First, I will introduce some **nice parts**:

- How the world is **ruled with [cellular automaton][cellular]** and performed efficiently in a GLSL shader.
- The **"Pixels paradigm"**, Pixel as first class citizen: How to query and analyze the pixels world. How to do simple bitmap collision detection.
- The **game rendering performed in a GLSL shader** and all the graphics details I've spent hours on.

Then, I will explain **things I've learned from WebGL**, how to solve the bad approaches I've taken,
and how I could have made a much more efficient game.

And finally, I will summary **what could have made this game even more interesting**,
and some ideas that was not reachable in a 2 weeks deadline.

<!-- more -->

## Nice parts

### Cellular automaton ruled world

A Cellular Automaton is an automaton (in other words, a state machine)
based on cells (like cells of an array in computer science).
It has been discovered years ago and popularized by [Stephen Wolfram][wolfram]
in his interesting book [A new Kind of Science][ankos].


<figure class="thumbnail-right">
  <img src="/images/2014/09/elementary-automaton.png" />
  <figcaption>
    <a href="http://mathworld.wolfram.com/ElementaryCellularAutomaton.html">
      Some elementary automatons.
    </a>
  </figcaption>
</figure>

The simplest possible cellular automaton is the one where, at each generation,
the cell value is determined from the previous and the 2 adjacent cells (left and right)
value and where the value can only be 0 or 1 (white or black / true or false).
The way the cell value is determined is through a set of rules.

#### 2D cellular automaton

<figure class="thumbnail-left">
  <img src="/images/2014/09/Gospers_glider_gun.gif" />
  <figcaption>
    <a href="http://en.wikipedia.org/wiki/Conway's_Game_of_Life">Conway's Game of Life</a>,
    a well known 2D cellular automaton.
  </figcaption>
</figure>

The kind of Cellular Automaton I focused on for my game are **2D cellular automaton**:
At each generation, the cell value is determined from **the previous value and the 8 adjacent cells**
using a finite set of rules.

It is important to understand that these rules are applied in parallel for __all__ cells of the world.

<br />

<figure class="thumbnail-right">
  <img src="/images/2014/09/ibex-experiment2.png" />
  <figcaption>
    Early version with 4 elements and simple rules:
    Water falls in Air, Fire grows in Air, Water extinguishes Fire, Earth drops Water + creates Fire
  </figcaption>
</figure>

**A 2D cellular automaton rule:**

![](/images/2014/09/ibex-rule-2d.png)

#### The elements

<figure>
  <img src="/images/2014/09/ibex-screenshot1.png" />
  <figcaption>
    The different elements gameplay.
  </figcaption>
</figure>

The game theme was "Four Elements: **Water, Air, Earth, Fire**", so I've used
these 4 elements as primary elements of the cellular automaton.

Each elements also have secondary elements that can be created from each other interactions:
**Source, Volcano, Grass, WindLeft, WindRight**.

- The **Volcano** is lava growing in the Earth. It creates Fire (when there is Air).
- The **Source** is water infiltrating in the Earth. It drops Water (when there is Air).
- The **Grass** (or Forest) grows on Earth with Water. It is a speed bonus for ibex but it propagates fire very fast. It also stop the water from flowing.
- The **Wind** (left or right wind) is created randomly in Air. It have effects on Water and Fire propagation and also on ibex speed.

<br />

<figure class="thumbnail-right">
  <img src="/images/2014/09/ibex-experiment1.png" />
  <figcaption>
    Fun and experimental result accidentally produced in an early development of the rules.
  </figcaption>
</figure>

To summary, there is 9 possible elements,
and rules are determined from the 9 previous cells:
This makes a LOT of possible rules.
However, the rules involved here remain simple and with just a few rules.

> That is the big thing about cellular automaton: very simple rules but incredible variety of results.

In general, we can classify the game rules into 2 kind of rules: "interaction" rules and "propagation" rules.
The first kind describes how two (or more!) elements interact each other.
The second kind describes the way an element evolve.
Some rules will also mix them both.

Here are some simple "propagation rules":

**Earth remain Earth**

TODO image

**Water falls**

TODO image

**Fire grows**

TODO image


#### Randomness in rules

However, to avoid seeing some (well known) patterns in my result I added some randomness in my rules.
**With randomness, the results are incredibly powerful.**

In the following video, notice how cool the fire propagation can result
by varying the propagation randomness factor.

<iframe width="640" height="420" src="//www.youtube.com/embed/mF-MNHk7u4s" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

#### Weights in rules

**More powerful rules can also be reached by using weights**:
you can affect a weight for each neighbor cell to give more or less importance to them.


TODO water/fire example + code

...

#### Summary of the game rules
...

Here are some examples of rules which handle interaction between elements:

TODO schema with different elements interactions


#### Limiting the grass growing

Finally I added one special extension to my 2D cellular automaton,
a cell value can also being determined from more that just the 8 adjacent cells.
That is the case of my grass: to have more complex structure I have made that the grass is determined
from the previous cell at position `(x, y-N)`
where x and y is the cell position and N is a variable value (random but constant per cell position).
In other word, a forest can grow if the cell at N step under it is not a forest.
This extra rule just adds a constraint on the max height that a forest can have.

#### Drawing into the world

...

### World generation is also a Cellular automaton!

The world is generated on the fly when the ibex progress to the right. This is done chunk by chunk.

> More precisely, the world height is 256 pixels and a new part of the world is discovered each 128 pixels –
In other words, the generation is divided into world chunks of `(128 x 256)` pixels.

Each world chunk is generated using a cellular automaton (different from the simulation one).

The "cave like style" generation was initially inspired from [this technique][cavelikegen]
but [diverged](https://github.com/gre/js13k-2014/blob/master/src/index.js#L842) a lot after a few improvements:

- The [initial random conditions](https://github.com/gre/js13k-2014/blob/master/src/index.js#L881) ensure that the bottom of the world is Earth and that the top of the world is Air. (that with gradients of randomness)
- [Randomness](https://github.com/gre/js13k-2014/blob/master/src/index.js#L896-L906) has been added to the rules to make the terrain evolving a bit more (otherwise it creates stable but small caves).
- The number of generation step is set to 26. the randomness of the rules is decreasing through steps to produce stable results.
- In an attempt to create seamless maps, the initial random state for x=0 is set to the values of x=127 of the previous world chunk. [(code here)](https://github.com/gre/js13k-2014/blob/master/src/index.js#L878)
- For more diversity in generated chunks, here are the parameters that can [randomly vary](https://github.com/gre/js13k-2014/blob/master/src/index.js#L845-L848):
  - The amount of ground (can create dense areas VS floating platform areas)
  - The chance of Water Source in the ground (will creates a lot of forest)
  - The chance of Volcano in the ground (dangerous world chunk)

### How the sleeping ibex get spawn

Sleeping ibex get spawn [using a fast dichotomic search](https://github.com/gre/js13k-2014/blob/master/src/index.js#L929):

the algorithm starts with `x=center` and subdivide itself until N spots get located:

- For a given `x`, try to find a `y` where `(x,y-1)` is Earth and where there is at least 6 air pixels on top of `(x,y)`. The search on y is downside and randomly starts at a various y value (to have various spots and not always spawn on top of the world).

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

so one thing to know is that readPixels is blocking. This is clearly the bottleneck of my game and
I had to do a few optimization here:

- throttle the readPixels use
- prefer one big readPixels rather than multiple localized `readPixels`
...

#### Analyze the ibex "sight" and physics

The pixels domain is pretty low level, I've wrote a specific abstract which
analyse a bit what is around an ibex.

First we select from the big world array a `[ 30, 20 ]` array centered on
the ibex position (technically we are still just using the big array without creating an unnecessary temporary one).

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
