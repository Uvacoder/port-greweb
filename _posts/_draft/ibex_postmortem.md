TODO: those are just notes


The cool parts

- writing a cellular automaton in GLSL. The world state is stored as a texture! GLSL paradigm match perfectly cellular automaton: for each pixel, decide the new cell state from the world state texture (and reading adjacent cells for instance).
- Splitting the logic and the render parts.
- Polishing the rendering. I've spent a lot of hours improving the graphics.
  - the ibex sprites & walk cycle in pixel art
  - the after-effects: the lighting (attenuation formula), the pixel shadows, ...
- implementing the ibex AI. Having a tiny decision system with different possible choices: walk, run, wait, jump.

The ugly parts

What I learned in my bad practice of WebGL & GLSL

DO NOT use loops in GLSL
http://stackoverflow.com/questions/10334555/prevent-loop-unwinding-in-fragment-shader

AVOID looping over items to draw in a single monolitic shader. Prefer using more the WebGL API and draw in "POINTS" mode.


The unperfect parts
- The map generation. I've chosen to do it in JavaScript, it was a bad idea, it is very slow and creates lags each time the map get generated. I should have used my "logic" shader or another shader to generate a random map especially that I DO use cellular automaton also for generating my map, inspired from http://www.roguebasin.com/index.php?title=Cellular_Automata_Method_for_Generating_Random_Cave-Like_Levels (but I forked a bit the technique out there because it is producing too much "low resolution" caves).
- The map generation is not 100% perfectly seamless. even if it is driven by cellular automaton which are localized to cells, I couldn't make it to have a perfect seamless map genertation.
