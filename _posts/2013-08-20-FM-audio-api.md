---
title: 'Frequency Modulation (FM) with Web Audio API'
description: ''
author: Gaetan
layout: post
tags:
 - fm
 - audio
---

 [zoundarticle]: /2013/07/zound-live/
 [zoundrepo]: http://github.com/gre/zound-live/
 [zoundfm]: https://github.com/gre/zound-live/blob/master/app/assets/javascripts/modules/SimpleFM.js
 [fmwiki]: http://en.wikipedia.org/wiki/Frequency_modulation_synthesis

The main principle of [Frequency Modulation (FM)][fmwiki] is to **pipe an Oscillator (the Modulator)
into the frequency of another Oscillator (the Carrier)**.

This article will explain to you how FM Synthesis works with **interactive demos**.
In the meantime, all demos are implemented with the brand new **Web Audio API**, 
so feel free to hack the code for your own purpose.

For the context, I've implemented a very first FM in [ZOUND live][zoundarticle], giving much more powerful Synthesizers (see in the following video).

<iframe width="640" height="480" src="//www.youtube.com/embed/El4JvaDWQUM" frameborder="0" allowfullscreen></iframe>
[*(here is the implementation of that FM)*][zoundfm]


<!-- more -->

## Dive into Frequency Modulation Synthesis

As said previous, FM is about **piping an Oscillator (the <u>Modulator</u>) into the frequency of another Oscillator (the <u>Carrier</u>)**.

The Modulator oscillation only affects the oscillation frequency of the Carrier but is not directly an audio signal.

![](/images/2013/08/fm_principle.png)

The result of that modulation differs depending on each oscillator **frequency** and **amplitude**:

[![](/images/2013/08/Frequencymodulationdemo-td.png)](http://en.wikipedia.org/wiki/File:Frequencymodulationdemo-td.png)

***N.B.*** *Our interactive demos in this article will always play a sound and visualize it (waveform / spectrum analyzer). 
You will have different kind of controls depending on each specific aspect I want to picture.*

*The demos should work on Chrome. __However if you get an AudioContext failure, please reload the page__ (you probably won't be have to start them all in one row).*

### LFO

**Low-Frequency Oscillation (LFO)** is very used in electronic music for making rythmic audio effects.
LFO is a specific subset of a oscillator in a sense that **its oscilation frequency is under 
the human audible range (20 Hz)** and is then not really used as an audio signal but as an effect controller.

For instance the frequency / the amplitude of an oscillator, or in the following example the frequency of the cut-off filter:

<audio src="http://upload.wikimedia.org/wikipedia/commons/e/e4/Lfo-cutoff-frequency-wobble-bass.ogg" controls></audio>

Now, as a first demo,
let's see what happens if our **FM Modulator is an LFO**, 
*(i.e. if that Modulator is in low frequency range)*.

<iframe width="100%" height="310" src="http://fiddle.jshell.net/greweb/FvnJx/10/show/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
<a href="http://jsfiddle.net/greweb/FvnJx/10/" target="_blank" style="display: block; text-align: right">Open on jsfiddle</a>

Observe the Carrier graphs and how the waveform is regulary compressed and decompressed. If you increase the Modulator frequency, it will speed up this effect.

***N.B.*** *With _Web Audio API_ (more generally with any modular synthesizers) we can easily control any module parameter with an LFO:*

```javascript
lfo.connect(carrier.frequency);
```

#### Modulator in audible range

Now, if we increase the frequency to the hearing range, here is what happens:
*(in that example you can also change the Carrier frequency)*

<iframe width="100%" height="310" src="http://fiddle.jshell.net/greweb/x4CWR/5/show/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
<a href="http://jsfiddle.net/greweb/x4CWR/5/" target="_blank" style="display: block; text-align: right">Open on jsfiddle</a>


It sounds that **the Modulator once reach that audible barrier kind of becomes a second audible synthesizer**,
even if it only modulate the frequency of the actual synthesizer.
However, it's completely different than playing the two synthesizers directly into the output,
again the modulator influence the frequency of the carrier and is not directly pipe into the output audio signal.

*There is especially cool sound produced when the Modulator frequency is closed to the Carrier frequency.*


### Frequency ratios: harmonic or dissonant sounds

One thing you may also have notice in the previous example is that most of the generated sounds was quite dissonant, non harmonic.

Now, if we add more restrictions and only **snap the possible modulator frequency frequencies** 
to a **multiple of the carrier frequency**, here is what happens:

<iframe width="100%" height="310" src="http://fiddle.jshell.net/greweb/Euezv/7/show/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
<a href="http://jsfiddle.net/greweb/Euezv/7/" target="_blank" style="display: block; text-align: right">Open on jsfiddle</a>

This harmonic result is due a simple fact in music: **Mutiplying a note frequency by 2 is equivalent to Increasing that note by one octave,** meaning the note has the same tone but is one-octave higher. (and vice versa for the division). *BTW, you may have notice that fact by repetition of peaks in the previous example Spectrum Visualization.*

Now we can release a bit less restrictions by also allowing frequencies multiple of `carrier frequency / 4`, which means allowing to increase/decrease by an **octave**, a **semi-octave** or a **quarter-of-octave**. 

<iframe width="100%" height="310" src="http://fiddle.jshell.net/greweb/DFSwN/7/show/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
<a href="http://jsfiddle.net/greweb/DFSwN/7/" target="_blank" style="display: block; text-align: right">Open on jsfiddle</a>


*Eventually you could even allow more liberty using multiple of `carrier freq / 12`, because an octave is equally divided by 12 in the [Chromatic scale](http://en.wikipedia.org/wiki/Chromatic_scale).*

### Mixing the power of the Modulator effect

A very interesting part of the job is also to change the **amplitude of the modulator**. So far, we used a full amplitude modulating the carrier frequency from 0 to 2-times its original frequency.

We can easily change that range to any (technically using a GainNode). 

Try to change the modulator amplitude on the following demo:

<iframe width="100%" height="310" src="http://fiddle.jshell.net/greweb/DAT5S/4/show/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
<a href="http://jsfiddle.net/greweb/DAT5S/4/" target="_blank" style="display: block; text-align: right">Open on jsfiddle</a>

### Envelope

Now, we need to add an **Envelope** for automating that amplitude change you just experiment with.

An envelope in electronic music will generally look like this:

[![](/images/2013/08/500px-ADSR_parameter.svg.png)](http://en.wikipedia.org/wiki/File:ADSR_parameter.svg)
An Envelope corresponds to a **note lifespan**.
It is the minimum required for making our Synth.

Basically, **we automate that amplitude through time for each note triggered** (our next demo will have a melody).

This Envelope can be done both for the Modulator and the Carrier, and  
we can use two completely different envelopes to obtain different sound effects.

Here is a demo playing a melody with different envelopes,
Play and see how the Spectrum Analyzer is moving:

<iframe width="100%" height="400" src="http://fiddle.jshell.net/greweb/tyEKr/3/show/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
<a href="http://jsfiddle.net/greweb/tyEKr/3/" target="_blank" style="display: block; text-align: right">Open on jsfiddle</a>

*We won't make an interactive demo for changing these envelope parameters,
but you can try them in the ZOUND project (or see the video).*

### Finetuning

### Modulating the Modulator

There is so much more possibilites to play with, 
for instance, the previously introduced Envelope could be mixed 
with an LFO to change the Modulator effect in a rythm, 
but now let's see how we can...

**...modulate the modulator!**

Eventually we can make a stack of modulators and use different kind of waveforms 
for more powerful effects:

![](/images/2013/08/fm_multiple.png)


----

**If you are interested by ZOUND live, [fork it on Github][zoundrepo].**

More to come, stay tuned!
