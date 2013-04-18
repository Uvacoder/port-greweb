---
title: CSS-selector-based templating system for scalable JavaScript applications
author: Gaetan
layout: post
permalink: /2012/02/css-selector-based-templating-example-with-javascript/
topsy_short_url:
  - 
meta_description:
  - >
    In this article, we will focus on the power of CSS as a descriptive language,
    current template system approach and their problems with modularity and
    extensibility, and try to mix both features from the concept to a concrete
    implementation.
meta_keywords:
  - css, javascript, templating
dsq_thread_id:
  - 564142637
categories:
  - Programming
  - Web
tags:
  - css
  - javascript
  - scalable
  - templating
---
# 

![][1] In this article, we will focus on the power of **CSS as a descriptive language**, current template system approach and their problems with **modularity** and **extensibility**, and try to mix both features from the **concept** to a **concrete implementation**.

 [1]: http://blog.greweb.fr/wp-content/uploads/2012/02/218px-Mir_diagram-fr.svg_.png "Mir station modularity"

  
  


## What is CSS ?

CSS is an extremely powerful descriptive language.  
It helps to define **how to display a document** (e.g. a web page).

A style sheet contains a set of **CSS rules**.  
Each CSS rule has a **CSS selector** associated with a set of **declarations**.  
You can see a CSS selector as a selection filter applied on every HTML element. A few element can match a CSS selector if they fit the structure describes in this selector.  
Each **declaration** is composed of a couple (**property** : **value**).  
The **CSS property** is a predefined property related to a display or layout behavior.  
The **value** will apply a custom value for the property on all elements matching the CSS selector.

Let’s focus on some advantages of this descriptive language:

### A CSS rule is independant from others.

The order of CSS rules *(selector declarations)* **really** does not matter.  
The priority between CSS rules is based on the selector itself and not on their arrangement.

### You can “mix” CSS rule 
2 CSS rules can have the same CSS selector. An element can be matched with multiple CSS rules. CSS rules are merged, it’s called the cascading.  
This is the most important feature of CSS.  
It implies a very modular and extensible language.

#### Example

a {   
  color: #33CC00;  
  text-decoration: none;  
}  
a:hover { text-decoration: underline; }  
#articles {  
  font-size: 12px;  
}  
#articles a {  
  color: red; /* overriding the generic color of a */  
}

## Some limitations of today’s template system

Most of template system are based on inherence between templates.

*   You have usually an “inclusion” approach: a template will “include” multiple external template. *(Many template into Many template)*
*   And an “extension” approach: You define in a main template an area where you can append a template. Others templates “extend” your main template. *(One main template for Many template)*

These approaches aims to factorize template codes and that’s great.

But it doesn’t fit my needs:

*   It brings **dependencies between templates**. 
*   If you add a new template, you have to modify existing templates.  
    If your application tend to go modules based, this is going to be unmaintainable. 

> **web application module (n)**  
> 1 : an independent unit of functionality that is part of the total structure of a web application 

### A solution for scalable applications and libraries

I’ve recently started to rewrite my [SliderJS][2] library and I needed to split it into very modular features and having loose coupling between each component.

I followed this [Scalable JavaScript Application Architecture][3] article.

So, **how to bring loose coupling in templating?**.  
Each module have its own template and know where to append. Bringing this logic in a main template would break the independency and if I need to add new modules soon, it will not working without modifiyng it.  
How to keep the scalability of the main template without modifying it?



The best solution I found is to combine **CSS selectors** concepts with **template system** approaches.

## CSS concepts applied on templating

I’ve decided to inspire from CSS: **attaching a CSS selector with a template**.  
It benefits from some CSS advantages explained before.

### Simple twitter widget example

  
  Twitter  
    
    Hello world!  
    
  Follow me on twitter  


#### Classical approach

The way to template it with the classical approach would be:

  
  Twitter  
    
    {for twitt in twitts}  
    {twitt}  
    {/for}  
    
  Follow me on twitter  


#### CSS selector based approach

But we can also split the original “template” in small fragments and mix all of them.  
It helps to define each templates independently.

**We can identify:**

- A **root template fragment**:



- A **header fragment** appended with `.twitter` selector and with an **high priority**:

Twitter

- A **twitts list fragment** appended with `.twitter` selector:

  
  {for twitt in twitts}  
  {twitt}  
  {/for}  


with **parameters** `twitts = &#91; "Hello world!" &#93;`

- An empty **footer fragment** appended with `.twitter` selector and with a **low** priority:



- A “follow me” **link fragment** appended with `.twitter footer` selector:

Follow me on twitter

with **parameters** `me = "greweb"`

### Advanced example

This is another example with a slider. 

Let’s conceptually imagine the following template language:

@root { html:  }  
  
.slider {  
  html:   
}  
  
.slider div.slides {  
  html:   
}  
  
.slider div.slides {  
  html:  
    
      
        
        
      
    
}  
  
.slider {  
  priority: -10  
  html:   
}  
  
.slider div.pager {  
  priority: 10  
  html: prev  
}  
  
.slider div.pager {  
  priority: -10  
  html: next  
}  
  
.slider div.pager {  
  html:   
}  
  
.slider div.pager {  
  html:   
         ')  
var slides = [ ... ]; // mutable  
t.add(".slider", function () { return slidesTmpl(slides: slides) });  
  
// canvas module  
t.add(".slider div.slides", function () { return '' });  
  
// pager module  
var pagesTmpl = tmpl('  