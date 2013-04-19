---
title: 'Compte rendu de l&#039;évènement &quot;(Javascript + Web) vs JEE&quot;, le 15 décembre 2010 chez Zenexity'
author: Gaetan
layout: post
permalink: /2010/12/zenexity-javascript-web-vs-jee/
dsq_thread_id:
  - 464151956
categories:
  - Web
tags:
  - zenexity
  - zengularity
---
# 

[Zenexity][1] ouvrait ses portes hier soir avec différentes présentations sur le thème **Javascript et Web contre “Java Entreprise Edition” (JEE)**.

 [1]: http://zenexity.fr/

Annoncé début décembre sur [Zengularity][2],** 4 présentations** se sont succédées.

 [2]: http://www.zengularity.com/event/985035267

Cet article a pour but de transcrire et de résumer cet évènement avec un profil de chaque intervenant.

![][3]

 [3]: http://blog.greweb.fr/wp-content/uploads/2010/12/zengularity_15dec2010.jpg



Sadek introduit l’évènement en expliquant les motivations de l’évènement : ***“On sait faire du web”** et notre volonté est de partager nos connaissances dans le but de faire évoluer les mentalités*, annonce t-il.

## Web Workers: a modern approach to multi-core   
*par [Earle Castledine][4]*

 [4]: http://mrspeaker.net/

Earle Castledine est un développeur australien pointu en **Javascript**. Après ses études universitaire, il part travailler 2 ans au Japon. De retour en Australie, il obtient un master en Informatique. Aussi connu sous le nom de Mr Speaker, il est l’auteur du livre [jQuery: Novice to Ninja][5] qui connait un grand succès depuis [cet été][6].

 [5]: http://www.sitepoint.com/books/jquery1/
 [6]: http://blogs.sitepoint.com/2010/07/12/our-jquery-book-is-free-for-12-hours/

> As multi-core computers proliferate, we look for ways to effectively and easily take advantage of this new power. The paradigm familiar in enterprise, threads – are powerful, but too low level. In this talk we’ll look at how JavaScript and HTML5 provide us with a more declarative, message-passing approach in form of Web Workers, and see how it is an approach based on simplicity, isolation & security.

Earle commence par un **historique du Javascript**, et des hacks qu’il existait pour émuler des exécutions de codes parallèles (setTimeout, …).

Aujourd’hui les **Web Workers** permettent de faire cela. Semblables aux **Thread**s, ils permettent également une **isolation du code** et une **simplicité d’utilisation**.

Earle commence par montrer un exemple simple de programmation de Web Workers : un simple code “ping”. La page dit bonjour au web worker qui répond bonjour.

Earle aborde ensuite les usages qu’on peut trouver aux Web Workers comme **des algorithmes sur les nombres et des exécutions complexes à exécuter en arrière plan**. Il montre également des exemples de raytracer 3D et une expérimentation WebGL avec un algorithme reposant sur des Web Workers.

Il parle du **map rejuice**, le concept de distribuer un algorithme complexe sur les clients web (faire travailler les clients plutôt que le serveur !).

Il conclu sa présentation par une petite démo de jeu de tank développé par [Guillaume Bort][7]. Chaque tank est un web workers. Une autre version du jeu permet de coder son tank directement sur le navigateur. Quite impressive ![:)][8] 

 [7]: http://guillaume.bort.fr/
 [8]: http://blog.greweb.fr/wp-includes/images/smilies/icon_smile.gif

## Data transformation and integration   
*par [Sadek DROBI][9]*

 [9]: http://sadekdrobi.com/

Sadek est un passionné de la **programmation fonctionnelle**. Chez Zenexity, il est le principal organisateur et développeur de [Zengularity][10], une plateforme de partage de connaissances techniques à travers des vidéos de 5 minutes. Cette plateforme écrite en scala (langage fonctionnel) est un parfait exemple d’une application web dit “cloud”, une application qui utilise des web services pour ses besoins (en l’occurence tumblr, vimeo, github, ..).

 [10]: http://zengularity.com/

> A fair part of enterprise application development is about data transformation and integration. Java and JEE, however, offer tools that are at best too static and at worst not adapted to these needs. In this 20 minute talk, you’ll see how javascript offers better foundation for data adaptation and get introduced to the use of some interesting libraries and APIs.

Sadek commence par la question “*What Entreprise Programming is about ?*“.  
“**data**, all is about **data**“, insiste t-il.

XML, HTML, JSON, CSS,… toutes nos applications sont des données et notre travail consiste à utiliser des outils de transformation. Par exemple, pour une application web on part d’une base de donnée SQL -> on transforme en Objet -> on rend une page HTML.  
**Combien de temps les données vivent ?** Beaucoup plus longtemps que les applications elles mêmes, on est en fait amené à utiliser les mêmes données sur plusieurs version/succession d’applications.

### Mais alors quels outils utiliser ?

XStream, Xml Bean… ? Des “integration and tranformation plateform (ORM, ESB)” ? **Sûrement pas**, affirme Sadek. C’est beaucoup trop lourd pour ce que cela doit faire. Il faut des adaptateurs légers.

Il fait la métaphore avec un iPhone, un sac lourd (15 kg !) avec un gros adaptateur électrique à l’intérieur et un câble adaptateur Apple. Je veux alimenter mon iPhone. Je ne vais pas utiliser la grosse machine qui est là (il prends son sac très lourd et le pose à côté de l’iPhone), c’est ridicule (rires dans la salle). Non, il suffit d’utiliser un adaptateur “léger”.

### Exemple de code avec le Javascript

Comme le montre l’exemple de Sadek, **consommer un web service XML en Javascript** est très simple à l’aide de framework comme jQuery.

Dans un ORM classique, dés que la structure de donnée change, **il faut mettre à jour toutes les applications** qui l’utilise sans quoi elles seront toutes cassés. **C’est un gros investissement.**

Avec des langages modernes c’est **beaucoup plus simple**, fini Sadek.

## Le mobile java/objective-c ou html/css/javascript   
*par [Sebastien CREME][11]*

 [11]: http://sebcreme.fr/

Sébastien est diplômé d’une maitrise en réseau télécom. Il a travaillé un an chez SFR dans la planification radio, et plus récemment 3 ans chez Mikros dans le web. Aujourd’hui architecte web chez Zenexity, il conçoit et rénove les systèmes d’information de grandes entreprises. Il est également convaincu par les technologies web sur mobile. Il a développé Strike (alias play mobile), un framework “coquille” facilitant la réalisation d’application web pour appareils mobiles.

> Le mobile est le nouveau cheval de bataille du marketing, mais comment adresser ce besoin toujours plus grand avec une architecture urbanisée, pérennes et qui réponde à la pléthore de combinaisons (hard/soft)ware, et au nombre toujours grandissant d’offres type appstore.  
> Nous verrons comment le développement multiplateforme existe avec la woa avec des exemples concrets de réalisations et pourquoi cela reste une utopie avec les développements natifs (java, objective-c).

Sébastien commence par un petit **historique du mobile** et affirme que l’arrivée de l’iPhone est **précurseur d’un changement radical** dans les appareils mobiles.  
Ensuite, l’app store lance une nouvelle mode, c’est un nouveau moyen de commercialiser des logiciels.  
**Safari** arrive en 2007 sur l’iPhone et offre déjà des possibilités incroyables : le HTML5, CSS3, avec le local storage, la géolocalisation, …  
Depuis les **navigateurs basés sur Webkit** se retrouve partout (*android, palm, blackberry,* …), et par exemple dans la toute nouvelle Freebox.

Sébastien montre brièvement des **exemples d’application mobiles** sur lesquels Zenexity a travaillé. Il s’arrête sur l’une d’entre elles et montre comment il est simple de modifier cette application en modifiant du HTML et en rechargeant la page. C’est du web !

Tout semble être prêt pour développer des applications web sur mobile, néanmoins la majorité des applications de l’app store sont des **applications natives** (en C Sharp).  
Ce n’est pas intéressant de développer des applications natives car **il faut apprendre de nouveau langage** (généralement un pour chaque OS), continue Sébastien.

### Mais alors, comment intégrer des applications web sur l’app store ?

Des **frameworks “coquille”** permettent d’intégrer du web dans une application. Ils peuvent fournir une couche pour accéder à l’API native si on veut utiliser des périphériques pas forcément encore supporté par le navigateur (exemple avec l’appareil photo).

**Comment implémenter de telle couche ?** En suivant les draft des specs HTML5 comme cela le jour où la fonctionnalité est disponible sur le navigateur, il n’y aura pas tellement de changement à faire (voir aucun). Sébastien a fait de la sorte pour la géolocalisation qui n’était pas encore supporté par le navigateur au début de l’iPhone.

Les applications web pour mobile permettent une **productivité du développement web** et de **réutiliser l’existant**.

## Sortir du carcan de la page web: extensions de navigateur ou applet Java ?   
*par [Erwan Loisant][12]*

 [12]: http://erwan.jp/

Erwan Loisant a un parcours intéressant. Fraichement diplômé d’une école d’ingénieur, il poursuit ses études au Japon pour décrocher un doctorat en base de données. Il s’installe ensuite 3 ans dans la Silicon Valley pour travailler chez *Flock*, une startup qui développe un navigateur web “social”. De retour en France, il travaille aujourd’hui chez Zenexity. Il est notamment spécialisé dans les **extensions de navigateurs** dont est l’objet sa présentation.

> Il arrive que les contraintes de sécurité du web entravent le développement d’un projet. Cela peut-être l’utilisation d’un périphérique matériel, des calculs complexes à réaliser côté client, ou encore une fonctionnalité non encore supporté nativement par les navigateurs. Dans ces cas la réponse a souvent été ActiveX ou les applets Java. Aujourd’hui, les extensions de navigateurs permettent d’aller encore plus loin dans l’intégration avec le poste utilisateur tout en se plaçant dans la continuité des technologies utilisés dans les applications web. Nous verrons les approches proposées par les différents éditeurs de navigateurs, et leurs avantages et inconvénients par rapport à l’approche classique des applet Java et d’ActiveX.

Parfois on a besoin de sortir du cadre de ce que permet le web (support d’un périphérique, etc.).  
Pour cela, il y a **ActiveX**, les **applets Java**, …  
Une alternative plus intéressante, d’après Erwan, est d’utiliser les **extensions de navigateurs** (Chrome ou Firefox).

### Des possibilités avancées

Il est possible d’étendre l’interface d’un navigateur, d’accéder aux données, à des fichiers, …  
Par exemple, **GreaseMonkey** permet de modifier localement un site.

Firefox et Chrome ont **deux approches différentes**. Une extension chrome est facile à développer mais est borné (on ne peut faire que ce que l’API prévoit). Une extension firefox est très puissante mais un peu plus avancé.

Ces extensions restent du **web**, on fait du **HTML, CSS, Javascript**, … Néanmoins sur Firefox on fait aussi du XUL, XBL et XPCOM ..

### Exemple

Erwan nous montre ensuite le développement d’une extension chrome avec l’extension “click to call” qui a fait l’objet de deux vidéos sur [zengularity][13].

 [13]: http://zengularity.com

Pour simplifier le développement d’une extension Firefox, Mozilla a lancé le projet Jetpack mais Erwan est un peu déçu de ce projet.

Mot de la fin: Il faut faire **attention à la sécurité** (on peut ouvrir des trous de sécurité si l’on ne fait pas attention) et **il ne faut pas abuser des extensions**.

## Et voilà !

La soirée s’est terminée avec des bières et des pizzas et de grandes discussions passionnées ![;)][14]  
Merci à tous.

 [14]: http://blog.greweb.fr/wp-includes/images/smilies/icon_wink.gif