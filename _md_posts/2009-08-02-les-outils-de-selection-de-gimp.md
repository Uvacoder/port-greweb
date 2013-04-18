---
title: Les outils de sélection de Gimp
author: Gaetan
excerpt: "<p>Ce tutoriel vous présente les outils de sélection, leur mode d'emploi, les options de ces outils ainsi que diverses opérations applicables aux sélections.</p>"
layout: post
permalink: /2009/08/les-outils-de-selection-de-gimp/
dsq_thread_id:
  - 464521666
categories:
  - Tutoriels
tags:
  - gimp
  - infographie
---
# 

Ce tutoriel vous présente les outils de sélection, leur mode d’emploi, les options de ces outils ainsi que diverses opérations applicables aux sélections.



**Tutoriel pré-requis :** [Débuter sous Gimp][1]

 [1]: http://blog.greweb.fr/?post/2009/07/Débuter-sous-Gimp

![][2]

 [2]: http://data.greweb.fr/blog/image/gimp_icon.png

## Sommaire

*   [Intérêts des sélections][3]
*   [Présentation des outils de sélection][4]
*   [Utilisation des outils de sélection][5]
*   [Options communes des outils de sélections][6]
*   [Opérations sur les sélections][7]
*   [Application sur plusieurs exemples concrets][8]

 [3]: #gimptuto2_interet
 [4]: #gimptuto2_presentation
 [5]: #gimptuto2_utilisation
 [6]: #gimptuto2_options
 [7]: #gimptuto2_operations
 [8]: #gimptuto2_application

## Intérêts des sélections [![↑][10]][10]

 []: #gimptuto2_index

Les sélections ont de **nombreux intérêts**.

Voici quelques unes des **possibilités offertes par les sélections**.

### Séparer une image en plusieurs calques.

Il n’est pas rare de vouloir **séparer un élément du décor** d’une photographie pour par exemple le passer en premier plan et travailler derrière.

Pour ce faire, vous devez utiliser une sélection permettant la découpe de cet élément.

Les outils les plus appropriés sont les **Ciseaux intelligents**, l’**Extraction du premier plan**, les **Chemins**, et pourquoi pas la **Sélection à main levée**.

Allez voir le tutoriel [Découper une silhouette avec Gimp][10]

 [10]: http://blog.greweb.fr/?post/2009/07/Découper-une-silhouette-avec-Gimp

### Restreindre toutes modifications de couleurs sur une région de l’image

Il peut être intéressant de **travailler sur une partie** d’une image.

Lorsqu’une sélection est créé, toutes les modifications relatives à la couleur, la luminosité, le contraste, … sont réalisées sur cette sélection. Les éléments en dehors de cette sélection en sont donc exclus.

Allez voir le tutoriel [Réaliser un pion][11]

 [11]: http://blog.greweb.fr/?post/2009/08/Réaliser-un-pion-avec-Gimp

## Présentation des outils de sélection [![↑][13]][13]

 []: #gimptuto2_index

*   ![][13]L’outil **Sélection rectangulaire** est le plus simple des outils de sélection. Il crée une zone rectangulaire de sélection.
*   ![][14]L’outil **Sélection elliptique** crée une zone de sélection en forme d’ellipse ou de cercle.
*   ![][15]L’outil **Sélection à main levée** est un outil libre permettant de tracer un sélection à main levée.
*   ![][16]L’outil **Sélection contiguë** est efficace sur les images à fort contraste (de luminosité ou de couleur). Il permet de sélectionner une région où la couleur et la luminosité est approximativement la même (le seuil joue sur cette approximation).
*   ![][17]L’outil **Sélection par couleur** permet de sélectionner dans l’image les points où la couleur et la luminosité est approximativement identique au point cliquée (le seuil joue sur cette approximation).
*   ![][18]L’outil **Ciseaux intelligents** est le plus abouti des outils de sélection. Il permet de sélectionner précisément une zone en suivant les contours des objets.
*   ![][19]L’outil d’**extraction du premier plan** permet de sélectionner une région par affinage avec l’utilisation d’une brosse.
*   ![][20]L’outil **Chemins** permet de créer et de modifier des chemins qui peuvent par la suite être transformés en sélection.

 [13]: http://data.greweb.fr/blog/image/tuto/gimp/2/icon_selection_rectangulaire.png
 [14]: http://data.greweb.fr/blog/image/tuto/gimp/2/icon_selection_elliptique.png
 [15]: http://data.greweb.fr/blog/image/tuto/gimp/2/icon_selection_a_main_levee.png
 [16]: http://data.greweb.fr/blog/image/tuto/gimp/2/icon_selection_contigue.png
 [17]: http://data.greweb.fr/blog/image/tuto/gimp/2/icon_selection_par_couleur.png
 [18]: http://data.greweb.fr/blog/image/tuto/gimp/2/icon_selection_ciseaux_intelligents.png
 [19]: http://data.greweb.fr/blog/image/tuto/gimp/2/icon_selection_extraction.png
 [20]: http://data.greweb.fr/blog/image/tuto/gimp/2/icon_selection_par_chemin.png

## Utilisation des outils de sélection [![↑][22]][22]

 []: #gimptuto2_index

### Sélection rectangulaire

![][22]

 [22]: http://data.greweb.fr/blog/image/tuto/gimp/2/selection_rectangulaire.jpg

Son utilisation se fait en **deux étapes** :

1.  **Sélection de la zone souhaitée et ajustement.** Il est possible de modifier la zone à volonté *à la souris* par les **coins** ou les **cotés** ou *au clavier* en entrant la **position** et la **taille** de la zone souhaitée dans l’onglet **Options des outils**.
2.  **Validation de la zone souhaitée** au moyen de la touche **Entrée** ou par un **clic gauche** au milieu de la zone rectangulaire. A noter qu’il est toujours possible de repasser à la première étape par un même **clic gauche**.

### Sélection elliptique

![][23]

 [23]: http://data.greweb.fr/blog/image/tuto/gimp/2/selection_elliptique.jpg

**Son utilisation est identique à la sélection rectangulaire.** La différence est que la sélection n’est pas rectangulaire mais *elliptique*.

### Sélection à main levée

![][24]

 [24]: http://data.greweb.fr/blog/image/tuto/gimp/2/selection_a_main_levee.jpg

Une** sélection à main levée** se trace par *étapes*. C’est à dire qu’il est possible de **continuer** son tracé de sélection mais **pas de modifier** le précédent tracé.

Il y a **deux façons** de tracer sa sélection.

*   En **laissant cliqué** sur la souris pour tracer à main levée.
*   En **cliquant une fois à un endroit, une fois à un autre** pour tracer *un trait entre deux points*.

On valide sa sélection avec la touche **Entrée**. Cette validation a pour conséquence de **fermer le tracé de sélection** par un trait entre le *point de départ* et le *point d’arrivée*. La sélection sera créé à partir de la **zone interne du tracé**.

### Sélection contiguë

![][25]

 [25]: http://data.greweb.fr/blog/image/tuto/gimp/2/selection_contigue.jpg

Un **clic gauche** sur l’image permet de créer une **sélection contiguë**. Néanmoins, l’utilisation du **Seuil** dans les **Options de l’outil** est presque indispensable. [plus de détail sur le Seuil][26].

 [26]: #gimptuto2_seuil

### Sélection par couleur

![][27]

 [27]: http://data.greweb.fr/blog/image/tuto/gimp/2/selection_par_couleur.jpg

L’utilisation de cet outil est similaire à la *sélection contiguë*.

### Ciseaux intelligents

![][28]

 [28]: http://data.greweb.fr/blog/image/tuto/gimp/2/selection_ciseaux_intelligents.jpg

L’outil **Ciseaux intelligents** est peut-être l’outil le plus évolué des outils de sélection.

Il permet de faire une sélection *par étapes* en **suivant les traits du dessin** grâce au contraste (couleur, luminosité). Chaque point du ciseaux intelligents est relié par un trait qui suit ce principe. Il est possible de **déplacer ces points** une fois placés.

#### Voici un conseil d’utilisation

##### Première étape&nbs  
p;: placer des points

Pour commencer, **cliquez** un endroit sur l’image et **maintenez le clic**.** Placez votre curseur** précisément sur le début de la coupe, puis **relâchez** si la position vous satisfait.

Un premier point apparait, c’est votre **point de départ**.

Maintenant **placez un second point** de la même manière un peu plus loin du contour à découper.

Comme expliqué précédemment, le trait entre les deux premiers points n’est pas droit mais suit un contour contrasté. **Moins votre contour est contrasté, plus il faudra placer vos points proches** pour que le chemin tracé par le logiciel corresponde à ce que vous souhaitez.

Si vous remarquez que le précédent chemin est imparfait, ce n’est pas grave, nous arrangerons ce problème à la seconde étape.

**Continuez** votre chemin de découpe jusqu’à **revenir** à votre **point de départ**.

##### Seconde étape : placer des points

Une fois votre chemin de découpe fermé, il se peut que votre chemin soit imparfait. Pas de panique, nous allons arranger ce problème :

*   **En déplaçant un point de découpe** dans le cas ou vous l’auriez mal placé. Il suffit pour cela de **cliquer sur ce point**, de **maintenir le clic** et de **replacer le point** en déplaçant la souris.
*   **En ajoutant un point de découpe** dans le cas ou le contraste n’est pas assez fort pour que le programme reconnaisse le bon contraste à suivre. Il suffit pour cela de **cliquer entre deux points de découpe**.

##### Troisième étape : validation

**Attention : l’étape de validation est irréversible !** C’est à dire qu’il **ne sera plus possible** d’éditer le chemin de découpe une fois la sélection validée. Si notre sélection est imparfaite veuillez retourner à la seconde étape.

La **validation** se fait au moyen de la touche **Entrée** ou par un **clic gauche** à l’intérieur de la zone découpée.

### Extraction du premier plan

![][29]

 [29]: http://data.greweb.fr/blog/image/tuto/gimp/2/selection_extraction.jpg

L’**extraction du premier plan** est un moyen assez intéressant de **découpe d’un élément** de premier plan.

Je vous propose cette vidéo qui illustre très bien cet outil :

  
### Sélection avec l’outil Chemins

![][30]

Il est aussi possible de créer une sélection depuis un **Chemin**.

L’utilisation des chemins se rapproche de celui des ciseaux intelligents. En revanche, il n’y a pas de contiguë. On contrôle les chemins aux moyens de **poignées** permettant des tracés de sélection **courbes**.

Je vous laisse découvrir plus en détail cette fonctionnalité.

## Options communes des outils de sélections [![↑][32]][32]

### Les modes : Combiner les sélections avec l’addition, la soustraction et l’intersection

Une seule méthode de sélection n’est parfois pas satisfaisante pour **sélectionner un ensemble d’éléments**. Dans ce cas, Il peut être intéressant de **combiner deux sélections** par l’**addition**, l’**intersection** et la **soustraction**.

L’utilisation est simple :

1.  Vous avez une **sélection**
2.  Vous **choisissez le mode combinatoire** dans les options de l’outil de sélection
3.  Vous procédez à une **nouvelle sélection**.

Voici les modes combinatoires :

*   **Remplace la sélection courante** est le mode par défaut. Toute nouvelle sélection va remplacer l’ancienne.
*   **Ajouter à la sélection courante** permet d’ajouter une nouvelle sélection à l’ancienne.
*   **Soustraire de la sélection courante** permet d’enlever la nouvelle sélection à l’ancienne.
*   **Intersection avec la sélection courante** permet de ne garder que la sélection commune à l’ancienne et à la nouvelle.

### Le lissage

Le lissage d’une sélection permet d’**adoucir légèrement les bords de la sélection** afin de corriger le crénelage d’une sélection.

Le lissage est donc un moyen **anti-aliasing**.

Concrètement, voici la sélection réalisée sur l’oeil de wilber, grossi 4 fois, **avec et sans lissage**.

![][32]

### Adoucir les bords

Adoucir les bords **accentue encore plus le lissage** : en fait il permet de choisir le **rayon d’adoucissement**.

Voici un exemple avec plusieurs rayons, de  à 20 (pixels):

![][33]

### Le seuil

Le **seuil** est disponible sur les outils **Sélection contiguë**, **Sélection par couleur** et aussi l’outil de remplissage qui n’est d’ailleurs pas une sélection.

Il permet de régler l’**intensité** de notre sélection. En fait, concrètement il joue sur le **contraste : plus le seuil est fort, plus deux couleurs proches seront considérées comme identiques**.

Pour illustrer cela avec l’outil de sélection contiguë, voici les différentes sélections qu’on peut obtenir rien qu’en modifiant le **seuil** :

![][34]

![][35]

![][36]

![][37]

## Opérations sur les sélections [![↑][39]][39]

Nous allons présenter le menu **Sélection**.

![][39]

Supposons la sélection suivante :

![][40]

### Tout

Cette action permet de sélectionner tout le cadre du calque actif.

### Aucune

Cette action permet de supprimer la sélection actuelle.

### Inverser

Cette action **inverse** la sélection courante. On obtient donc la **sélection complémentaire** à la sélection courante.

Voici par exemple deux sélections complémentaires :

![][41]

![][42]

### Flottante

Une **sélection flottante est presque similaire à un calque sauf qu’aucune opération ne pourra être effectuée en dehors de la sélection ou sur un autre calque tant que la sélection flottante n’aura pas été ancrée. 
Il est possible d’ancrer les transformations effectuées sur le calque issu ou dans un nouveau calque.

### Par couleur

C’est un raccourci vers l’outil **Sélection par couleur**. *On se demande pourquoi il est présent dans ce menu.*

### Depuis le chemin

Créer une sélection depuis un chemin tracé à l’air de l’outil *chemin*.

### Éditeur de sélection

Cet outil **regroupe plusieurs actions** aussi réalisables dans le menu sélection.

### Adoucir

Crée un adoucissement depuis une sélection. Cette action est similaire à l’option **[Arrondir les bords][43]**.

### Enlever l’adoucissement

**Retire un adoucissement** créé avec l’action **Adoucir** ou l’option **Arrondir les bords** à la création de la sélection.

### Réduire

Permet de **réduire une sélection** d’un certain nombre de pixel.

Exemple de sélection réduit de 5 pixels :

![][44]

### Agrandir

Permet d’**agrandir une sélection** d’un certain nombre de pixel.

Exemple de sélection réduit de 5 pixels :

![][45]

### Bordure

**Crée une bordure** autour de la sélection actuel.

Exemple de bordure de 2 pixels :

![][46]

### Perturbation

Modifie la sélection actuelle par une **perturbation**.

Exemple de perturbation :

![][47]

### Rectangle arrondi

Cette action permet de créer des **arrondis aux coins** d’une sélection rectangulaire.

### Désactiver le masque rapide

Cette action permet d’activer le masque rapide. Le masque rapide est proche de l’outil **extraction du premier plan**. Il permet d’éditer directement une sélection avec un outil de coloration et la gomme.

### Enregistrer dans un canal

Permet de sauvegarder la sélection actuelle pour la récupérer par la suite. Cette action utilise l’onglet **Canal**.

## Application sur plusieurs exemples concrets [![↑][49]][49]

Voici des **exemples tutoriels** que vous pouvez suivre :

*   [Découper une silhouette avec Gimp][10]
*   [Réaliser un pion][11]

 [30]: http://data.greweb.fr/blog/image/tuto/gimp/2/selection_par_chemin.jpg
 []: #gimptuto2_index
 [32]: http://data.greweb.fr/blog/image/tuto/gimp/2/lissage.gif
 [33]: http://data.greweb.fr/blog/image/tuto/gimp/2/adoucir.png
 [34]: http://data.greweb.fr/blog/image/tuto/gimp/2/seuil1.png
 [35]: http://data.greweb.fr/blog/image/tuto/gimp/2/seuil2.png
 [36]: http://data.greweb.fr/blog/image/tuto/gimp/2/seuil3.png
 [37]: http://data.greweb.fr/blog/image/tuto/gimp/2/seuil4.png
 []: #gimptuto2_index
 [39]: http://data.greweb.fr/blog/image/tuto/gimp/2/menu_selection.png
 [40]: http://data.greweb.fr/blog/image/tuto/gimp/2/ex_selection_cercle.png
 [41]: http://data.greweb.fr/blog/image/tuto/gimp/2/inverse_off.png
 [42]: http://data.greweb.fr/blog/image/tuto/gimp/2/inverse_on.png
 [43]: #gimptuto2_adoucir
 [44]: http://data.greweb.fr/blog/image/tuto/gimp/2/ex_selection_reduire.png
 [45]: http://data.greweb.fr/blog/image/tuto/gimp/2/ex_selection_agrandir.png
 [46]: http://data.greweb.fr/blog/image/tuto/gimp/2/ex_selection_bordure.png
 [47]: http://data.greweb.fr/blog/image/tuto/gimp/2/ex_selection_perturbation.png
 []: #gimptuto2_index