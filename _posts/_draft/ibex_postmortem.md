TODO: those are just notes

The cool parts

- writing a cellular automaton in GLSL. The world state is stored as a texture! GLSL paradigm match perfectly cellular automaton: for each pixel, decide the new cell state from the world state texture (and reading adjacent cells for instance).
- Splitting the logic and the render parts.
- implementing the ibex AI.
  - the stats. both used for the collision detection and the ibex decision logic.
  - the simple decision system with different possible choices: walk, run, wait, jump.
- Polishing the rendering. I've spent a lot of hours improving the graphics.
  - the ibex sprites & walk cycle in pixel art
  - the after-effects: the lighting (attenuation formula), the pixel shadows, ...

The ugly parts

What I learned in my bad practice of WebGL & GLSL

DO NOT use loops in GLSL
http://stackoverflow.com/questions/10334555/prevent-loop-unwinding-in-fragment-shader

AVOID looping over items to draw in a single monolitic shader. Prefer using more the WebGL API and draw in "POINTS" mode.


The unperfect parts
- The map generation. I've chosen to do it in JavaScript, it was a bad idea, it is very slow and creates lags each time the map get generated. I should have used my "logic" shader or another shader to generate a random map especially that I DO use cellular automaton also for generating my map, inspired from http://www.roguebasin.com/index.php?title=Cellular_Automata_Method_for_Generating_Random_Cave-Like_Levels (but I forked a bit the technique out there because it is producing too much "low resolution" caves).
- The map generation is not 100% perfectly seamless. even if it is driven by cellular automaton which are localized to cells, I couldn't make it to have a perfect seamless map genertation.
  - Not a bug, a feature!!! I have a glitch which always creates ground on edges, I intend to fix it with a rule which says that if previous cell is earth and left and right is air, the next cell must be air. However the fun part is that if it happens that there is water, fire, wind or anything instead of air, this glitch will stay, then forest will spawn and this create the best "bug-feature" I ever wished: tarzan-style!



TODO write
---------------


- The **"Pixels paradigm"**, Pixel as first class citizen: How to query and analyze the pixels world. How to do simple bitmap collision detection.
- The **game rendering performed in a GLSL shader** and all the graphics details I've spent hours on.

Then, I will explain **things I've learned from WebGL**, how to solve the bad approaches I've taken,
and how I could have made a much more efficient game.

And finally, I will summary **what could have made this game even more interesting**,
and some ideas that was not reachable in a 2 weeks deadline.


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
