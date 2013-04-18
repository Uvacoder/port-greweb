---
title: Be careful with JS numbers!
author: Gaetan
layout: post
permalink: /2013/01/be-careful-with-js-numbers/
dsq_thread_id:
  - 1018847248
categories:
  - Web
tags:
  - float
  - javascript
  - number
---
# 

> @[greweb][1] : Let’s do a kickstarter to build the 1st space rocket running on embedded Javascript… I think we can discover new physics rules!
> 
> — mandubian (@mandubian) [Janvier 10, 2013][2]

 [1]: https://twitter.com/greweb
 [2]: https://twitter.com/mandubian/status/289422662101504000



It is [common][3] in Javascript to have unexpected behaviors, but this one is particulary vicious.

 [3]: http://wtfjs.com/

> 10000000000000000 === 10000000000000001

**Javascript doesn’t have integer type but lets you think it has.** `parseInt` and `parseFloat` built-in functions, the fact that “1″ is displayed as “1″ and not as “1.0″ (like many languages) contribute to the general misunderstood.

**In Javascript, all numbers are floating numbers and are prone to [floating point approximation][4].**

 [4]: https://en.wikipedia.org/wiki/Floating_point

When you write `var i = 1;`, and you console.log it, Javascript is nice, you obtain `1` and not `1.0000000000000001`. 

But you can experiment that, in Javascript, `1.0000000000000001 === 1` is true…

> I hear you, telling me that *this sounds OK, floating point approximation rules, right?*

But the same thing occurs for big numbers:

10000000000000000 === 10000000000000001

Oh **F**K** !

[edit] where in python:  
![][5]

 [5]: https://pbs.twimg.com/media/BAg2wRyCIAAGuXW.png:large

## Termination of loops

The following is worse:



is logging `10000000000000000` forever!

Because 10000000000000001 can’t exist in Javascript with approximations, 10000000000000001 is 10000000000000000, so you can’t increment this value, and you are stuck in this crazy f**king loop. 

Conclusion, *Program termination proof* sounds hard to reach in Javascript!



## How many numbers in a 1000 range?

Between 10000000000000000 and 10000000000001000, there are actually 750 Javascript integers.



## Real World Example

The issue can actually **lead to real web application disaster**. Imagine if your database use Long for id (well like almost every databases in the world, like twitter does), and **if you use the id as number in Javascript and not as string**, you can have strange behaviors like never being able to represent and access a resource from the Javascript or worse!



## TL;DR. The lesson

This is not something new, floating point approximation, but the way Javascript fix values to round the approximations mislead us.

Now, simple thing, **Avoid numbers when approximation is not permitted** like for resource id (especially when you retrieve it from a server).

This probably impacts your JSON APIs because it’s the last thing you had think of!

Otherwise, **if you need to manipulate big integers in Javascript use a library for that**.

Example: 

[EDIT]  
9007199254740993 (which is 2^53 1) is the smallest not representable integer in Javascript. In other words, you can trust Javascript numbers before this integer!

[EDIT 2]  
[Thanks to 0×0 on HackerNews][6] who told me the twitter id issue example really happened in a previous twitter API: 

 [6]: http://news.ycombinator.com/item?id=5051525