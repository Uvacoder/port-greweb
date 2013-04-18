---
title: Découper une silhouette avec Gimp
author: Gaetan
excerpt: "<p>Ce tutoriel va vous permettre de séparer facilement une photographie en plusieurs calques afin de retoucher le premier-plan, le second plan ou encore l'arrière plan de celle ci.</p>"
layout: post
permalink: /2009/07/decouper-une-silhouette-avec-gimp/
dsq_thread_id:
  - 464049452
categories:
  - Tutoriels
tags:
  - gimp
  - infographie
---
# 

Ce tutoriel va vous permettre de séparer facilement une photographie en plusieurs calques afin de retoucher le premier-plan, le second plan ou encore l’arrière plan de celle ci.



**Tutoriels pré-requis : **

*   [Débuter sous Gimp][1]
*   [Les outils de sélections de Gimp][2]
*   [Naviguer dans l’affichage d’une image avec Gimp][3]

 [1]: http://blog.greweb.fr/?post/2009/07/Débuter-sous-Gimp
 [2]: http://blog.greweb.fr/?post/2009/08/Les-outils-de-sélection-de-Gimp
 [3]: http://blog.greweb.fr/?post/2009/07/Naviguer-dans-l-affichage-d-une-image-avec-Gimp

* * *

Partons d’une image simple d’un **silhouette**. Voici la photo d’origine *libre de droit* utilisée dans ce tutoriel : [Clic droit / Enregistrer la cible du lien sous…][4].

 [4]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/origin.jpg

L’objectif est de changer l’arrière-plan ainsi par exemple :

![][5]

 [5]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/res.jpg

Pour ce faire, nous allons récupérer le **premier plan de l’image** puis ajouter un dégradé en arrière-plan.

* * *

Il est conseillé d’utiliser les outils **Ciseaux intelligents** ou **Extraction du premier plan** pour cette tâche. Référez vous à l’**[utilisation de ces outils][2]**.

Il est aussi possible d’arranger certains endroits de sélection avec une autre sélection au moyen d’**additions** et de **soustractions**.

Vous devez arriver à une sélection proche de la mienne :

![][6]

 [6]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/step1.png

* * *

Il peut exister certaines **imprécisions** dans la sélection. Pour palier ce problème, il est conseillé d’**appliquer un [adoucissement de la sélection][2]**.

Ma sélection était moyennement précise, j’ai donc appliqué un adoucissement de 5 pixels :

![][7]

 [7]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/step2.png

* * *

Nous allons pouvoir **transférer notre sélection dans un nouveau calque**.

Pour ce faire gardez cette sélection et faites directement la combinaison habituelle **Copier-Coller**.

Un nouvel élément intitulé ***Sélection flottante (Calque Copié)*** est apparu dans les **listes des calques** de l’onglet *Calques*. Ce n’est pas un calque.

Pour le transformer en calque, faites un **Clic droit **dessus puis **Nouveau calque** comme suit :

![][8]

 [8]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/step3.png

* * *

**Décochez** la visibilité du calque ***Arrière-plan*** afin de voir votre premier plan au dessus du quadrillage représentant le **canal alpha**.

**Zoomer votre image** pour voir plus en détail les imperfections de la silhouette. (si vous ne savez pas zoomer, [lisez ce tutoriel][3]).

Corriger les imperfections de la silhouette grâce à l’outil **Gomme** avec une **petite brosse à faible dureté**.

Le principe est d’enlever des restes d’arrière-plan sur notre calque de premier plan.

Cette image illustre l’importance de cette étape :

![image][9]

 [9]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/step4.gif

* * *

**Créez une nouvel arrière-plan** et placez le derrière le premier plan.

![Ainsi, de haut en bas, les calques sont: Calque Copié, nouvel Arrière-plan, Arrière-plan][10]

 [10]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/step5.png

* * *

On peut maintenant travailler sur ce nouvel arrière-plan.

J’ai choisi de créer un **dégradé** allant de haut en bas de la couleur

#6b6f95

à la couleur

#c08048

.

Ensuite, on peut rajouter quelques nuages.

Pour se faire, créez un **nouveau calque transparent** et diminuer son **opacité**.

![][11]

 [11]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/step6.png

Utilisez l’outil **pinceau** avec une **brosse** fantaisiste comme la brosse *Galaxy* disponible par défaut pour dessiner quelques nuages.

![][12]

 [12]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/step7.png

* * *

Appliquez ensuite un flou cinétique. Pour cela allez dans **Filtres / Flou / Flou cinétique**.

Voici mes paramètres :

![][13]

 [13]: http://data.greweb.fr/blog/image/tuto/gimp/silhouette/step8.png

* * *

[Voir le résultat de mon exemple][14].

 [14]: #silhouette_res