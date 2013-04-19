---
title: 'Play Framework &#8211; Enumerator.outputStream'
author: Gaetan
layout: post
permalink: /2012/11/play-framework-enumerator-outputstream/
dsq_thread_id:
  - 924340312
categories:
  - Programming
  - Web
tags:
  - playframework
---
# 

A few weeks ago, [we’ve introduced][1] a new feature in [Play Framework][2]: the `Enumerator.outputStream` method, allowing you to work with Java API requiring an `OutputStream` to generate content, for instance the `java.util.zip` API.

 [1]: https://github.com/playframework/Play20/commit/0f1ec1479e490f2c8af4cd79dd0b6a14b0ea9f75
 [2]: http://www.playframework.org/

**Now, let’s see how easy it is to serve a big Zip generated on-the-fly without memory load with Play Framework.**



## The Zip generation example



This demo shows how to **generate a zip file on-the-fly** and directly **stream it** to an HTTP client **without loading it in memory or storing it in a file**.

It uses an `Enumerator` created with the `Enumerator.outputStream` method.  
The `OutputStream` provided by the method is then plugged to the Java’s `ZipOutputStream`.

For the example, we have generated a zip containing 100 text files, and each text files contains 100’000 random long numbers (yes, 100’000 !).

The zip size is approximatively 100 Mb. (and is generated in about 3Mb/s in my machine in localhost, but this can be improved)

The huge benefit of this is the download starts instantly, it means the Zip is streamed while it is generated.

## Show me the code!

Internally, it is implemented with a `Concurrent.unicast`, and a simple implementation of an `OutputStream` pushing into the unicast’s channel:



## About Iteratee and Enumerator

If you want to learn more about Iteratee concepts in Play Framework, I recommend you this article: .