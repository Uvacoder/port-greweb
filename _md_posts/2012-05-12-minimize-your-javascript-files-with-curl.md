---
title: Minimize your Javascript files with cURL
author: Gaetan
layout: post
permalink: /2012/05/minimize-your-javascript-files-with-curl/
dsq_thread_id:
  - 686894197
categories:
  - Bash Tips
  - Web
tags:
  - Closure
  - cURL
  - javascript
  - WOA
---
# 

I’ve always been fascinated by the power of **using existing web applications as external tools**: you don’t need to install anything on your computer but you can **rely on the web**.

We can **externalize the intelligence of applications in servers** and **easily make updates**, while having any terminal consuming them with a **minimal OS environment**.  
*Cloud* or whatever you call it, it’s awesome.

WOA is our common architecture for making applications. Clients of web servers can be anything you want, not only desktop browsers, but also mobiles, tablets, other web services, and… **command-line**!

And today, as an example, we will use [Google Closure Compiler web service][1] to **minimize a Javascript file with only cURL**.

 [1]: https://developers.google.com/closure/compiler/docs/api-ref



**cURL** is a CLI swiss army knife of transferring data and it is perfect for testing, debugging and consuming web services.

**Google Closure Compiler** check and “compile” your Javascript file. By compile, it means optimizing its size by renaming variables and removing spaces and comments. Javascript compilation has because an essential phase of major javascript libraries.

## Bash script examples

### Download and minimize the last version of Illuminated.js

URL=https://raw.github.com/gre/illuminated.js/master/src/illuminated.js  
OUTPUT=illuminated.min.js  
curl -d compilation_level=SIMPLE_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code -d code_url=$URL http://closure-compiler.appspot.com/compile > $OUTPUT

### Minimize a local JS file

LOCAL_FILE=./mysuperlib.js  
OUTPUT=mysuperlib.min.js  
curl -d compilation_level=SIMPLE_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code --data-urlencode "js_code@${LOCAL_FILE}" http://closure-compiler.appspot.com/compile > $OUTPUT