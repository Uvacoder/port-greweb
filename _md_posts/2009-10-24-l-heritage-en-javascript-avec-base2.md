---
title: 'L&#039;héritage en JavaScript avec base2'
author: Gaetan
excerpt: "<p>Le JavaScript est un langage très souple mais qui manque parfois de fonctionnalités si l'on en reste à ses bases.</p> <p>Heureusement, de nombreuses bibliothèques sont là pour nous sauver la mise.</p> <p>C'est en tout cas le cas pour le concept de l'héritage qui est rendu possible grâce à la bibliothèque <strong>base2</strong>.</p> <p>Au lieu de réinventer la roue, nous pouvons utiliser cette bibliothèque et ainsi pouvoir mieux nous<strong> concentrer sur les véritables problèmes d'implémentation d'un projet</strong>.</p>"
layout: post
permalink: /2009/10/l-heritage-en-javascript-avec-base2/
aktt_notify_twitter:
  - no
dsq_thread_id:
  - 464242615
categories:
  - Programming
tags:
  - base2
  - héritage
  - javascript
---
# 

Le JavaScript est un langage très souple mais qui manque parfois de fonctionnalités si l’on en reste à ses bases.

Heureusement, de nombreuses bibliothèques sont là pour nous sauver la mise.

C’est en tout cas le cas pour le concept de l’héritage qui est rendu possible grâce à la bibliothèque **base2**.

Au lieu de réinventer la roue, nous pouvons utiliser cette bibliothèque et ainsi pouvoir mieux nous** concentrer sur les véritables problèmes d’implémentation d’un projet**.



## La théorie

### petit résumé du JavaScript

**JavaScript** est un langage de programmation de scripts principalement utilisé dans les pages web.

C’est un langage **orienté objets à prototype**, c’est-à-dire que les bases du langage et ses principales interfaces sont fournies par des objets qui ne sont pas des instances de classes, mais qui sont chacun **équipés de constructeurs permettant de générer leurs propriétés**.

Il a été influencé par les langages **Self**, **Perl**, **C** et **Java**. Bien qu’inspiré du Java au niveau syntaxe, son utilisation est complètement différente malgré le rapprochement de nom.

*(en partie inspiré de [wikipédia][1])*

 [1]: http://fr.wikipedia.org/wiki/JavaScript

### base2

**[lien du site officiel][2]**.

 [2]: http://code.google.com/p/base2/

> base2 is a lightweight library that irons out all the annoying differences in JavaScript implementations. It provides the additional functionality from JavaScript 1.6 that only Mozilla browsers implement. It also adds some features from ES4. The library is only 6KB (gzipped).

> base2 est une bibliothèque légère permettant d’éviter les ennuis d’implémentation du JavaScript. Elle fournit les fonctionnalités supplémentaires du JavaScript 1.6 que seuls les navigateurs Mozilla implémentent. Elle ajoute également quelques fonctionnalités de ES4. La bibliothèque ne pèse que 6Ko (version gzippée).

## La pratique

### L’inclusion de base2 en html

Pour la bibliothèque, il faut ajouter, éventuellement dans son ******, la ligne html suivante :



où

base2-p.js

est le lien vers le script .js de la bibliothèque.

### Exemple d’utilisation de l’héritage

L’exemple est [hébergé ici][3].

 [3]: http://greweb.fr/demo/js-heritage/

#### Forme.js :

/\***| Forme \***|/  
Forme = base2.Base.extend({  
/* A l'instanciation de Forme, constructor est appelé. */  
constructor: function() {  
this.draw(); // On dessine la forme.  
},  
draw: function() {  
alert("Dessinons quelque chose..."); // Avertissement  
},  
toString: function() {  
return "Je suis une forme.";  
}  
})  
  
/\***| Rectangle extends Forme \***|/  
Rectangle = Forme.extend({  
/* On ne surcharge pas constructor, par conséquent,  
* le constructor de Forme sera exécuté à l'instanciation. */  
  
/* On surcharge draw mais en gardant le comportement de l'ancien  
* draw grâce à l'appel de this.base() en début de code. */  
draw: function() {  
this.base(); // appel de la methode de l'objet hérité  
alert(this 'nn'   
'####n'   
'####n'   
'####n');  
},  
  
/* Surcharge de toString */  
toString: function() {  
return "Je suis un rectangle.";  
}  
})  
  
/\***| Triangle extends Forme \***|/  
Triangle = Forme.extend({  
draw: function() {  
this.base();  
alert(this  // Ici, this.toString va être appelé  
'nn#n'   
'##n'   
'###n'   
'####n');  
},  
toString: function() {  
return "Je suis un triangle.";  
}  
})  
  
/\***| Carre extends Rectangle \***|/  
Carre = Rectangle.extend({  
/* J'ai peut-être parfois envie de surcharger mon constructor */  
constructor: function() {  
alert("Et maintenant, pourquoi pas un carré ?");  
this.draw();  
},  
draw: function() {  
// Malheureusement pas de moyen d'appeler la "base().base() fonction"  
alert(this 'nn'   
'###n'   
'###n'   
'###n');  
},  
  
toString: function() {  
return this.base() " et aussi un carré.";  
}  
})

#### index.html :

  
  
  
  
  
  
  
var r = new Rectangle();  
var t = new Triangle();  
var c = new Carre();  
  
  
