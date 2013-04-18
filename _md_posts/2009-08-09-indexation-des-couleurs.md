---
title: 'Optimiser la taille d&#039;une image pour le web avec l&#039;indexation des couleurs'
author: Gaetan
excerpt: "<p>Il est important d'optimiser la taille des images d'une page web afin de <strong>réduire le temps de chargement de la page</strong> (côté client) mais aussi afin de <strong>diminuer la bande passante du site</strong> (côté serveur).</p> <p>En suivant cette méthode, vous pourrez diminuer la taille d'une image de <strong>plus de 20 fois</strong> sans perte visible concernant un logo par exemple. Cette méthode s'avère efficace sur les images comportant <strong>peu de couleurs différentes</strong> ou <strong>très contrastés</strong>.</p> <p><em>Explication en image...</em></p>"
layout: post
permalink: /2009/08/indexation-des-couleurs/
dsq_thread_id:
  - 464219035
categories:
  - Tutoriels
tags:
  - gimp
  - image
  - infographie
  - Web
---
# 

Il est important d’optimiser la taille des images d’une page web afin de **réduire le temps de chargement de la page** (côté client) mais aussi afin de **diminuer la bande passante du site** (côté serveur).

En suivant cette méthode, vous pourrez diminuer la taille d’une image de **plus de 20 fois** sans perte visible concernant un logo par exemple. Cette méthode s’avère efficace sur les images comportant **peu de couleurs différentes** ou **très contrastés**.

*Explication en image…*



L’**indexation des couleurs** consiste à **fixer le nombre de couleurs différentes** de l’image permettant de diminuer la taille de l’image.

Les images ont généralement une représentation sur 16’777’216 couleurs différentes grâce au *True Color* dans un **format de codage RVB**.

**Transformer une image RVB en image à couleurs indexées** consiste à générer une palette de couleurs adaptés pour cette image.

## Exemple d’utilisation de l’indexation des couleurs

### couleurs RVB – 30,7 Ko

![][1]

 [1]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/tux_RVB.png

### 256 couleurs – 9,7 Ko

![][2]

 [2]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/tux_256.png

### 64 couleurs – 6,8 Ko

![][3]

 [3]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/tux_64.png

### 16 couleurs – 4,1 Ko

![][4]

 [4]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/tux_16.png

On a ainsi pu réduire **Tux** de **30.7 ko** à** 4.1 ko** sans perte conséquente de qualité.

L’image d’origine ne comporte pas beaucoup de couleurs différentes. C’est la raison pour laquelle on peut descendre le nombre de couleurs à 16 couleurs sans provoquer de perte de qualité conséquente.

## L’indexation des couleurs n’est pas toujours efficace

Sur cette première image, l’indexation sera efficace car elle ne comporte pas beaucoup de couleurs différentes (c’est un logo).

### couleurs RVB – 26,2 Ko

![][5]

 [5]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/blenderlogo_RVB.png

### 6 couleurs – 1,8 Ko

![][6]

 [6]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/blenderlogo_6.png

* * *

En comparaison, sur cette seconde image, l’**indexation n’est pas efficace**. En effet, c’est une photo qui comporte des **dégradés**.

### couleurs RVB – 86,7 Ko

![][7]

 [7]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/silhouette_RVB.png

### 6 couleurs – 3,1 Ko

![][8]

 [8]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/silhouette_6.png

Un **nombre de couleurs trop faible** crée des **disparités de couleurs** visuellement désagréable notamment sur les dégradés de couleurs. Il est néanmoins possible de réduire cette disparité en activant un **algorithme de tramage** dans l*‘option de tramage*.

### 6 couleurs – 6,9 Ko

avec un algorithme de tramage  
![][9]

 [9]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/silhouette_6_sans_tramage.png

* * *

## Utilisation sous Gimp

Pour convertir une image du mode **RVB** au mode **couleurs indexées**, allez dans le menu **Image** /** Mode** /** couleurs indexées**.

![][10]

 [10]: http://data.greweb.fr/blog/image/tuto/indexation-des-couleurs/fenetre_couleurs_indexees.png

### Choix de la palette

*   **Générer une palette optimale** : cette option génère la meilleure palette possible avec le nombre de couleurs indiqué. Vous pouvez réduire ce nombre maximum de couleurs.
*   **Utiliser une palette optimisée pour le Web** : utilise une palette optimisée pour Internet.
*   **Utiliser la palette Noir et Blanc (1-bit)** : cette option génère une image à deux couleurs : blanc / noir. Ainsi, chaque pixel de votre image prendra comme valeur Noir ou Blanc.
*   **Utiliser une palette personnalisée** : ce bouton vous permet de choisir une palette dans une liste. La palette Web est sélectionné par défaut. Elle comporte 216 couleurs [(plus d’infos)][11].

 [11]: http://fr.wikipedia.org/wiki/Couleurs_du_Web

### Choix du tramage

Nous avons pu voir dans notre exemple précédent l’intérêt d’un **algorithme de tramage**.

Il existe plusieurs algorithmes. A vous de les tester afin de trouver **le plus adapté** à votre image.

## Conseils

*   **Gardez toujours l’image originale** d’une image à couleurs indexées. En effet, la conversion RVB vers couleurs indexées n’est rarement pas sans perte, à moins d’avoir strictement les couleurs de la palette utilisée.
*   **Utilisez un algorithme de tramage** en présence de **dégradés**. Évitez son utilisation dans le cas contraire.
*   N’hésitez pas à **essayer plusieurs palettes** jusqu’à trouver la meilleurs palette en trouvant l’équilibre entre **qualité** et **poids** de l’image. Pour ce faire, appliquez une conversion **RVB vers couleurs indexées**, annulez si elle ne vous convient pas.