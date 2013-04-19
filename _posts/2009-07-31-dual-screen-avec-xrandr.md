---
title: Utiliser xrandr pour configurer deux écrans (dual-screen)
author: Gaetan
excerpt: "<p>Ce billet va vous montrer comment <strong>activer</strong> et <strong>désactiver</strong> facilement un <strong>second écran</strong> sous Linux afin d'étendre son espace graphique. Au moyen d'un script shell, il est possible d'effectuer cette opération en <strong>un clic</strong>.</p>"
layout: post
permalink: /2009/07/dual-screen-avec-xrandr/
dsq_thread_id:
  - 463659306
categories:
  - Bash Tips
tags:
  - dual-screen
---
# 

Ce billet va vous montrer comment **activer** et **désactiver** facilement un **second écran** sous Linux afin d’étendre son espace graphique. Au moyen d’un script shell, il est possible d’effectuer cette opération en **un clic**.



Pour cela, vous avez besoin de deux écrans branchés.

Nous supposerons qu’ils supportent les mêmes résolutions mais il est bien entendu possible de faire cohabiter deux résolutions différentes.

Nous utiliserons la commande

xrandr

permettant la configuration du serveur graphique X.

#### Récupérer les informations des deux écrans

Vous ne connaissez pas les **résolutions supportées **par vos écrans ? Pas de panique

xrandr

est là pour cela !

**Tapez** simplement

xrandr

**dans une Terminal**.

Chez moi cela donne :

    Screen 0: minimum 320 x 200, current 1280 x 1024, maximum 2560 x 1024
    
    VGA-0 connected (normal left inverted right x axis y axis)
    1280x1024 60.0   75.0 60.0
    1152x864 75.0
    1024x768 75.0 70.1 60.0
    832x624 74.6
    800x600 72.2 75.0 60.3 56.2
    640x480 75.0 59.9
    720x400 70.1 70.1
    
    DVI-0 connected 1280x1024 0 0 (normal left inverted right x axis y axis) 376mm x 301mm
    1280x1024 60.0   75.0* 60.0
    1152x864 75.0
    1024x768 75.0 70.1 60.0
    832x624 74.6
    800x600 72.2 75.0 60.3 56.2
    640x480 75.0 59.9
    720x400 70.1 70.1

##### Mais qu’est-ce que ce charabias ?

Screen 0: minimum 320 x 200, current 1280 x 1024, maximum 2560 x 1024

signifie que mon **affichage** identifié par le **numéro 0** (sur le serveur X) supporte une **résolution minimale** de 320×200, une **résolution maximale** de 2560×1024 et est **actuellement** de 1280×1024.

Attention il ne faut pas confondre **affichage** et **écran** ! Un affichage peut se faire sur plusieurs écrans. Ainsi

2560 x 1024

concerne en réalité chez moi **deux écrans**.

Un petit schéma pour mieux comprendre :

![Écran Gauche 1280x1024, Écran Droite 1280x1024, Donc résolution totale: 2560x1024][1]

 [1]: http://data.greweb.fr/blog/image/bash/dualscreen/schema.png

*Petite anecdote*: Sur le schéma, l’écran de gauche est à la position (0, 0), l’écran de droite à la position (1280, 0).

Ensuite nous avons chez moi deux paragraphes : un commençant par

VGA-0

, l’autre commençant par

DVI-0

. Ce sont en fait mes **deux écrans connectés**.

Dans chacun de ces deux paragraphes, nous avons une liste des **résolutions** et **fréquences supportés par ces écrans**.

Par exemple:

1280x1024

est une résolution,

60.0

et

75.0

sont les fréquences supportées pour cette résolution.

Avez vous remarqué la petite ***** à la ligne

1280x1024 60.0 75.0* 60.0

de l’écran

DVI-0

? Cela signifie que j’utilise actuellement cette résolution et cette fréquence.

**Ce sont des informations importantes pour la suite…**

#### Activer et désactiver un deuxième écran à la console

Avant de commencer un **script bash**, vous pouvez tester certaines commandes pour vérifier le bon comportement des deux écrans.

Choisissez sur chacun des deux écrans une résolution et une fréquence d’affichage.

Chez moi, j’ai choisi **le mode 1280×1024@75.0**.

Ensuite il faut que vous calculez le décalage que l’écran de droite a par rapport à l’écran de gauche. C’est trés simple, pas de panique !

Pour un dual-screen classique, ce décalage correspond à l’abscisse de la résolution de l’écran de gauche.

En gros voici ce qu’il faut retenir :

**Écran de gauche** : Son nom **N**, sa résolution **AxB** et fréquence **F**, position de **0×0**

**Écran de droite** : Son nom **M**, sa résolution **CxD** et fréquence **G**, position de **Ax0**

Ce qui donne dans mon cas :

**Écran de gauche** : nom **DVI-0**, sa résolution **1280×1024** et fréquence **75.0**, position de **0×0**

**Écran de droite** : nom **VGA-0**, sa résolution **1280×1024** et fréquence **75.0**, position de **1280×0**

Sachant cela, pour **activer mes deux écrans** j’ai juste à taper :

    xrandr --output DVI-0 --pos 0x0 --mode 1280x1024 --rate 75.0;
    xrandr --output VGA-0 --pos 1280x0 --mode 1280x1024 --rate 75.0;

Ensuite pour **désactiver l’écran de droite** et utiliser juste l’écran de gauche, il suffit de taper :

    xrandr --output VGA-0 --off;
    xrandr --output DVI-0 --pos 0x0 --mode 1280x1024 --rate 75.0;

Vous voyez, c’est compliqué !

#### Un script pour ne plus à avoir à taper ces commandes

Je vous propose un script qui **active ou désactive le dual-screen**. Si on l’appelle simplement, on active le dual-screen, si on l’appelle en ajoutant un argument

off

on désactive le dual-screen.

**Ouvrez un Terminal** et placez-vous dans votre répertoire de script

cd mondossierdescript

Ensuite, **créez un fichier**

dualscreen

et attribuez lui les **droit d’exécution**.

touch dualscreen && chmod x dualscreen

**Ouvrez-le**.

gedit dualscreen

(gedit à remplacer par votre éditeur de texte préféré)

Voici le contenu de mon **script** :

#!/bin/bash  
  
if [ $# ==  ]; then arg="on"; else arg=$1; fi  
  
if [ $arg == "off" ]  
then {  
  xrandr --output VGA- --off;  
  xrandr --output DVI- --pos 0x0 --mode 1280x1024 --rate 75.0;  
  echo "dual-screen disabled.";  
}  
else {  
  xrandr --output DVI- --pos 0x0 --mode 1280x1024 --rate 75.0;  
  xrandr --output VGA- --pos 1280x0 --mode 1280x1024 --rate 75.0;  
  echo "dual-screen enabled.";  
}  
fi  
  
exit ;

**Adaptez-le** selon les commandes que vous aviez tapées auparavant dans un terminal.

**Enregistrez et fermez** votre script.

Vous pouvez d’ores et déjà **tester** votre script. Testez

./dualscreen

qui devrait **activer le dual-screen** et

./dualscreen off

qui devrait **désactiver le dual-screen**.

##### Créer un raccourci vers mon script dans mon tableau de bord

Il peut être intéressant de pouvoir activer ou désactiver le **dual-screen en un clic**.

Pour créer un raccourci sur **Ubuntu Linux **:

Faites un **Clic droit sur le tableau de bord **/ **Ajouter au tableau de bord.** Ensuite double-cliquez sur **Lanceur d’application personnalisé** tout en haut de la fenêtre qui s’est ouverte.

Depuis la fenêtre **Créer un lanceur **: Choisissez le Type **Application dans un terminal**, tapez le **nom** désiré, allez chercher votre script depuis **Parcourir**, puis **validez**. Vous pouvez aussi changer **l’icône** ou ajouter un **commentaire**.

Un icône apparaît dans le tableau de bord. Lorsque vous cliquez dessus, le dual-screen s’active.

Note: Pour faire un raccourci qui désactive le dual-screen, la seule différence est qu’il faudra ajouter

 off

à la fin du champ Commande de la fenêtre** Créer un lanceur**.

Pour toutes questions, posez un commentaire sur ce billet.