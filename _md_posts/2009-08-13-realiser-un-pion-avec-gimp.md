---
title: Réaliser un pion avec Gimp
author: Gaetan
excerpt: |
  <p>Ce tutoriel va vous montrer comment <strong>réaliser simplement un pion</strong> (d'un jeu de société par exemple) avec des <strong>sélections sous Gimp</strong>.</p> <p>Si vous préférez une version vidéo, veuillez <a href="http://blog.greweb.fr/?post/2009/08/Tutoriel-Vid%C3%A9o-R%C3%A9aliser-un-pion-avec-Gimp">vous rendre ici</a>.</p> <p>Voiçi à quoi il abouti&nbsp;:</p> <p><img src="http://data.grenlibre.fr/blog/image/tuto/gimp/pion/res.png" alt="" /></p>
layout: post
permalink: /2009/08/realiser-un-pion-avec-gimp/
dsq_thread_id:
  - 468250561
categories:
  - Tutoriels
tags:
  - gimp
  - infographie
---
# 

Ce tutoriel va vous montrer comment **réaliser simplement un pion** (d’un jeu de société par exemple) avec des **sélections sous Gimp**.

Si vous préférez une version vidéo, veuillez [vous rendre ici][1].

 [1]: http://blog.greweb.fr/?post/2009/08/Tutoriel-Vidéo-Réaliser-un-pion-avec-Gimp

Voiçi à quoi il abouti :

![][2]

 [2]: http://data.greweb.fr/blog/image/tuto/gimp/pion/res.png



**Tutoriels pré-requis : **

*   [Débuter sous Gimp][3]
*   [Les outils de sélections de Gimp][4]
*   [Naviguer dans l’affichage d’une image avec Gimp][5]

 [3]: http://blog.greweb.fr/?post/2009/07/Débuter-sous-Gimp
 [4]: http://blog.greweb.fr/?post/2009/08/Les-outils-de-sélection-de-Gimp
 [5]: http://blog.greweb.fr/?post/2009/07/Naviguer-dans-l-affichage-d-une-image-avec-Gimp

* * *

Pour commencer, **créez une image** carré d’une résolution de 200×200 pixels par exemple.

## Etape 1 : première sélection

**Créez une sélection elliptique** en la débutant *en haut à gauche* et la terminant *en bas à droite* afin d’obtenir une **sélection circulaire maximale**.

![][6]

 [6]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step1.png

## Etape 2 : réduction de la sélection

**Réduisez votre sélection de 10 pixels** grâce à l’action ***Réduire…*** du menu ***Sélection***.

![][7]

 [7]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step2.png

## Etape 3 : remplissage de la sélection dans un nouveau calque

**Créez un nouveau calque**.

En utilisant l’action ***Remplir avec la couleur…*** du menu ***Edition***, **remplissez la sélection en noir** sur ce nouveau calque.

![][8]

 [8]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step3.png

## Etape 4 : nouvelle réduction de sélection

**Réduisez** de nouveau **la sélection de 10 pixels**.

**Créez un nouveau calque**.

![][9]

 [9]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step4.png

## Etape 5 : Configuration du dégradé radial

Nous allons maintenant appliquer un **dégradé radial** sur le nouveau calque toujours en gardant la sélection actuelle.

Pour se faire, sélectionner l’outil **Dégradé** et configurez l’**option de l’outil** comme ceci :

![][10]

 [10]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step5.png

N’oubliez pas de **choisir vos couleurs** de **premier-plan** et d’**arrière-plan**.

## Etape 6 : Application du dégradé radial

Maintenant, **utilisez l’outil de dégradé** sur votre image de cette façon :

![][11]

 [11]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step6.png

## Etape 7 : Sélection en forme de lune pour l’ombre

Nous allons désormais créer une sélection qui servira d’ombre à notre pion.

**Sélectionnez** de nouveau l’outil **Sélection elliptique** et dans l’**option de l’outil**, **sélectionnez le mode Soustraire**.

Une fois l’option **Soustraire** bien sélectionnée, tracez une sélection ainsi :

![][12]

 [12]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step7.png

**Validez**.

## Etape 8 : Remplissage de l’ombre

Notre sélection contiendra l’ombre de notre pion.

**Remplissez la sélection d’une couleur noire** au moyen de l’action ***Remplir avec la couleur…*** du menu ***Edition***.

### Vous ne devez pas arriver à cela

![][13]

 [13]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step8-bad_select.png

Si les contours de votre sélection donne ce résultat, agrandissez votre sélection d’un pixel et recommencez le remplissage.

### Vous arrivez maintenant à ce résultat

![][14]

 [14]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step8.png

## Etape 9 : Réduire l’opacité de l’ombre

L’ombre n’est actuellement pas très belle (elle est trop noire !).

Pour la réduire, variez la jauge **Opacité** de l’onglet **Calques**.

![][15]

 [15]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step9.png

## Résultat

Jusqu’ici **nous arrivons à ce résultat** :

![][16]

 [16]: http://data.greweb.fr/blog/image/tuto/gimp/pion/step10.png

## Aller plus loin

N’hésitez pas à **pousser la complexité de votre pion**, essayez d’arriver à ce résultat :

![][2]