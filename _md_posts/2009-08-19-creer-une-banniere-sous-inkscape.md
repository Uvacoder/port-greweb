---
title: Créer une bannière sous Inkscape
author: Gaetan
excerpt: |
  <p>Ce tutoriel vous montre une façon de <strong>créer une bannière Web avec Inkscape</strong>, logiciel de dessin vectoriel 2D. Inkscape est assez adapté pour ce genre de projets car il est efficace sur le travail de composition d'image.</p> <p>Ce tutoriel présente un exemple de bannière similaire à celle de ce blog, mais peut s'appliquer à d'autres thèmes que celui de l'informatique.</p> <p>Il aboutit à ce résultat&nbsp;:</p> <p><img src="http://data.grenlibre.fr/blog/image/tuto/inkscape/banniere/resultat.png" alt="" /></p> <p>Si vous préférez une <strong>version vidéo</strong>, <a href="http://blog.greweb.fr/?post/2009/08/Tutoriel-Vid%C3%A9o-Cr%C3%A9er-une-banni%C3%A8re-sous-Inkscape">veuillez vous rendre ici</a>.</p>
layout: post
permalink: /2009/08/creer-une-banniere-sous-inkscape/
dsq_thread_id:
  - 463659393
categories:
  - Tutoriels
tags:
  - banniere
  - infographie
  - inkscape
---
# 

Ce tutoriel vous montre une façon de **créer une bannière Web avec Inkscape**, logiciel de dessin vectoriel 2D. Inkscape est assez adapté pour ce genre de projets car il est efficace sur le travail de composition d’image.

Ce tutoriel présente un exemple de bannière similaire à celle de ce blog, mais peut s’appliquer à d’autres thèmes que celui de l’informatique.

Il aboutit à ce résultat :

![][1]

 [1]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/resultat.png

Si vous préférez une **version vidéo**, [veuillez vous rendre ici][2].

 [2]: http://blog.greweb.fr/?post/2009/08/Tutoriel-Vidéo-Créer-une-bannière-sous-Inkscape



## Introduction

### Qu’est-ce qu’Inkscape ?

**Inkscape** est un logiciel de **dessin vectoriel 2D**.

Tout comme **Gimp**, c’est un logiciel de **dessin 2D**. Par contre il est **vectoriel** alors que Gimp est dit **matricielle**.

Pour résumé, dans un logiciel vectoriel, vous pouvez **réduire** beaucoup un élément puis l’**agrandir sans perte de qualité**.

Si cet élément est une image, l’image reste la même (donc sans perte de qualité) et seules ses propriétés changent. Si cet élément est un composé de chemins, la qualité de celui ci est **infini** : vous pouvez toujours l’agrandir, **les traits des chemins seront toujours parfaits** par le rendu de votre image est calculée à chaque fois.

L’utilisation de **Gimp couplé avec Inkscape est efficace** car leur fonctionnalités se complètent.

### La recherche d’image

Pour ce genre de création, nous allons avoir besoin d’**images** comme contenu. Pour cela soit vous les trouvez sur internet, soit vous créez vos propres images.

#### trouver sur internet

L’utilisation de *Google Image* est fructueuse mais est déconseillé car **vous risquez d’utiliser des images sous licence, non libre**.

Ainsi, nous vous conseillons de rechercher sur des **moteurs d’images libre de droit** tel que [http://openclipart.org/][3], projet initié par Inkscape, qui *vise à constituer et à mettre à disposition sur le web une collection de dessins vectoriels*. Autrement recherchez

 [3]: http://openclipart.org/ "http://openclipart.org/"

image libre de droit

sur google et vous devrez trouver d’autres sites similaires.

Vous pouvez aussi regarder du côté de [http://commons.wikimedia.org/][4].

 [4]: http://commons.wikimedia.org/ "http://commons.wikimedia.org/"

#### créer ses propres images

Il est souvent **plus adapté de créer ses propres images** qui répondront aux besoins attendus.

Vous pouvez pour cela utiliser **Gimp**.

## Tutoriel

Nous vous conseillons de **créer un dossier dédié à votre bannière** dans lequel vous placerez vos images et le fichier Inkscape de votre bannière.

### Etape 1 : préparer les images

Dans un premier temps, **rassemblez différentes images dans le thème de votre bannière**.

Pour notre thème, nous avons rassemblé les images suivantes :

*   [Heckert\_GNU\_white.svg][5]
*   [Tux.svg][6]
*   [Blender.svg][7]
*   [Gnome-computer.svg][8]
*   [Crystal\_Clear\_app_firefox.png][9]
*   [Inkscape.logo.svg][10]
*   [The\_GIMP\_icon\_-\_gnome.svg][11]

 [5]: http://upload.wikimedia.org/wikipedia/commons/2/22/Heckert_GNU_white.svg
 [6]: http://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg
 [7]: http://upload.wikimedia.org/wikipedia/commons/a/a5/Blender.svg
 [8]: http://upload.wikimedia.org/wikipedia/commons/b/b2/Gnome-computer.svg
 [9]: http://upload.wikimedia.org/wikipedia/commons/9/92/Crystal_Clear_app_firefox.png
 [10]: http://upload.wikimedia.org/wikipedia/commons/4/4a/Inkscape.logo.svg
 [11]: http://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_gnome.svg

#### Pour récupérer les images de mon exemple

##### Sous linux

entrez en ligne de commande dans votre espace de travail la commande :

wget http://upload.wikimedia.org/wikipedia/commons/2/22/Heckert\_GNU\_white.svg   
http://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg   
http://upload.wikimedia.org/wikipedia/commons/a/a5/Blender.svg    
http://upload.wikimedia.org/wikipedia/commons/b/b2/Gnome-computer.svg    
http://upload.wikimedia.org/wikipedia/commons/9/92/Crystal\_Clear\_app_firefox.png    
http://upload.wikimedia.org/wikipedia/commons/4/4a/Inkscape.logo.svg    
http://upload.wikimedia.org/wikipedia/commons/4/45/The\_GIMP\_icon\_-\_gnome.svg

##### Avec votre navigateur

**Clic droit / Enregistrer la cible du lien sous…** sur chacun des liens des images plus haut.

### Etape 2 : préparer l’espace de travail sur Inkscape

**Ouvrez Inkscape**.

Par défaut, Inkscape s’ouvre avec un modèle de feuille A4. Ce modèle ne nous intéresse pas, c’est pourquoi nous allons créer une nouvelle image ayant un **modèle de bannière**. Nous avons choisi le modèle

web\_banner\_468x60

.

**Sélectionnez ce modèle** dans **Fichier / Nouveau / web\_banner\_468x60**.

* * *

Ensuite, nous allons préparer différents calques :

*   un calque d’**arrière-plan** qui contiendra les éléments de fond pour l’ambiance de la bannière.
*   un calque de **premier-plan** qui contiendra les éléments de la bannière.

**Accédez au menu *Calques*** depuis le raccourci **Ctrl Maj L** ou le menu **Calque / Calques…** .

**Supprimez le calque actuel**.

**Ajoutez 2 calques** et nommez les dans l’ordre : **arrière-plan** et **premier-plan**.

* * *

Vous êtes fin prêt au travail de composition. Sélectionnez le calque **premier-plan** car c’est dans celui ci que nous allons commencer à travailler.

### Etape 3 : importer des images

Pour importer vos images vous pouvez, depuis les menus, sélectionner **Importer (Ctrl I)** puis sélectionner une par une les images à importer.

Une façon plus pratique est de **glisser-déposer** les images à importer sur Inkscape.

### Etape 4 : déplacer les éléments

Pour **déplacer** les différentes images importées, il suffit de **cliquer dessus** et de **déplacer la souris** tout en **maintenant l’élément cliqué**.

Vous remarquez alors que les images importées ont des **proportions différentes**. N’ayez crainte, nous allons pouvoir les **redimensionner**.

Dans notre exemple, voici les proportions après importation :

![][12]

 [12]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/exemple_apres_importation.png

### Etape 5 : redimensionner les éléments

Durant le redimensionnement des images, il va falloir faire attention à un point : si vous voulez **garder le ratio de votre image**, il est nécessaire de **maintenir la touche Ctrl enfoncée**.

Autrement, le redimensionnement est aisée : **Sélectionnez votre élément à redimensionner**, cliquez sur un icône de redimensionnement (aux coins) et déplacez votre souris en maintenant cliqué.

Vous contrôlez alors la **dimension de l’image**. N’oubliez pas de **maintenir Ctrl enfoncé** durant le redimensionnement.

Pour annuler une action, utilisez **Edition/Annuler** (raccourci: Ctrl Z).

Dans notre exemple, voici le résultat des éléments redimensionnés à la même hauteur.

![][13]

 [13]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/exemple_apres_redimension.png

### Etape 6 : Disposer les éléments

Travaillez la composition de la bannière en **déplaçant/redimensionnant les éléments**.

Dans notre exemple, voici une composition possible :

![][14]

 [14]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/exemple_disposition.png

### Etape 7 : Travailler l’arrière-plan

Maintenant, nous allons ajouter une ambiance d’arrière-plan.

Pour cela, **Sélectionnez le calque *arrière-plan*** créé précédemment. Désactivez la vue du calque de premier-plan (en cliquant sur l’œil de ce calque).

#### couleur de fond

Ajoutez un rectangle de dimension *(X=0, Y=0, L=468, H=60)*. Vous pouvez entrez avec précision ces valeurs dans la barre d’outils.

Dans la fenêtre **Remplissage et contour**, onglet Remplissage, **choisissez une couleur** ayant, dans notre exemple, pour valeur

e5863eff

.

Assurez vous qu’il n’y ai ***Pas de remplissage*** dans l’onglet **Remplissage du contour**.

![][15]

 [15]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/back_step1.png

#### Ajout de chiffres binaires

Dans notre exemple, pour donner une ambiance “informatique”, **créez un objet texte (F8)** et entrez une série de chiffres de 0 et de 1.

Dans notre exemple, la **couleur** du texte est le noir et l’**opacité** est à

10,0

 :

![][16]

 [16]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/back_step2.png

* * *

Utilisez maintenant l’outil ***Créer et éditer des dégradés* (Ctrl F1)** pour créer un dégradé d’opacité :

![][17]

 [17]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/back_step3.png

#### Ajout d’un reflet et d’une ombre

Créer un objet **courbe de Bézier** ainsi :

![][18]

 [18]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/back_step5.png

* * *

**Modifiez la couleur** de remplissage à

e8a04dff

, le **flou** à

1,0

et l’**opacité** de l’objet à

50,0

. Assurez vous que le **contour soit désactivé**.

![][19]

 [19]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/back_step6.png

* * *

**Dupliquez** cet élément (Ctrl D) et appliquez un **effet miroir vertical** et **horizontal** au moyens des boutons : ![][20].

 [20]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/miroir_vertical_horizontal.png

**Modifiez la couleur** à

e06f1dff

et **déplacez cet élément** en position *(X=0, Y=0)* :

![][21]

 [21]: http://data.greweb.fr/blog/image/tuto/inkscape/banniere/back_step7.png

### Résultat

**Réactivez la vue du calque *premier-plan***. Attribuez à ce calque à l’**opacité de 80,0

.

Voici le résultat :

![][1]