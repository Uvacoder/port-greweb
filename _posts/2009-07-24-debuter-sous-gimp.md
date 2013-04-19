---
title: Débuter sous Gimp
author: Gaetan
excerpt: |
  <p>Ce tutoriel est le premier de la série concernant le logiciel d'infographie Gimp. Il explique le fonctionnement des boites de dialogue, onglets et fenêtres de Gimp. Il apprends également les bases sur l'utilisation des calques et des outils de dessin élémentaires.</p> <p>Si vous préférez une version vidéo, n'hésitez pas à visiter <a href="http://blog.greweb.fr/?post/2009/08/Tutoriel-Vid%C3%A9o-%3A-D%C3%A9buter-sous-Gimp">ce billet</a>.</p>
layout: post
permalink: /2009/07/debuter-sous-gimp/
dsq_thread_id:
  - 463659377
categories:
  - Tutoriels
tags:
  - gimp
  - infographie
---
# 

Ce tutoriel est le premier de la série concernant le logiciel d’infographie Gimp. Il explique le fonctionnement des boites de dialogue, onglets et fenêtres de Gimp. Il apprends également les bases sur l’utilisation des calques et des outils de dessin élémentaires.

Si vous préférez une version vidéo, n’hésitez pas à visiter [ce billet][1].

 [1]: http://blog.greweb.fr/?post/2009/08/Tutoriel-Vidéo-:-Débuter-sous-Gimp



![Gimp][2]

 [2]: http://data.greweb.fr/blog/image/gimp_icon.png

## Sommaire

*   [Qu’est ce que Gimp ?][3]
*   [Pourquoi utiliser Gimp ?][4]
*   [Comment installer Gimp ?][5]
*   [L’interface de Gimp][6] 
    *   [Fonctionnement des fenêtres, des boîtes de dialogue et des onglets][7]
    *   [Personnalisation de la disposition des boîtes de dialogue et onglets][8]
    *   [La boîte à outils][9]
    *   [L’onglet Options des outils][10]
    *   [L’onglet Calques][11]
*   [Réaliser sa première image][12] 
    *   [Comment créer une image vierge ?][13]
    *   [Utilisez les outils pour dessiner sur différents calques][14]
    *   [Les principaux outils][15]
*   [Informations supplémentaires][16] 
    *   [Ajouter une image en tant que calque.][17]
    *   [Enregistrer son image / projet][18]
    *   [Principales caractéristiques des formats jpg, gif et png ][19]

 [3]: #definition
 [4]: #utilisation
 [5]: #installation
 [6]: #interface
 [7]: #fenetres
 [8]: #personnalisation
 [9]: #boiteaoutils
 [10]: #optionsoutils
 [11]: #calques
 [12]: #premiereimage
 [13]: #creerimagevierge
 [14]: #utilisercalques
 [15]: #outils
 [16]: #supplements
 [17]: #ajouterimage
 [18]: #enregistrer
 [19]: #formats

## Qu’est ce que **Gimp** ? [![↑][21]][21]

 []: #index_debutersousgimp

**GIMP** est un **logiciel libre** et **gratuit** multi-plateforme de traitement d’image (dessin, retouche de photos, etc.).

Il est souvent considéré comme une **alternative libre** au très connu *Adobe Photoshop* qui, quant à lui, est payant et seulement disponible sous *Windows* et *Mac*.

## Pourquoi utiliser **Gimp** ? [![↑][22]][22]

 []: #index_debutersousgimp

Je ne vais pas argumenter du choix de *Gimp* par rapport à *Photoshop*, le fait est qu’une communauté c’est créé autour de ce logiciel bien maintenu par son équipe de développement.

Certains l’utiliseront parce qu’il est **gratuit**, d’autres l’utiliseront parce qu’il est **libre**, d’autres encore l’utiliseront parce qu’ils **préfèrent ses caractéristiques** à *Photoshop*.

A titre personnel, je n’ai jamais utilisé *Photoshop* mais voilà 4 ans que j’utilise *Gimp* alors pourquoi changer si les possibilités sont les mêmes entre *GIMP* et *Photoshop*.

## Comment installer **Gimp** ? [![↑][23]][23]

 []: #index_debutersousgimp

Allez sur le [site officiel][23] et sélectionnez le téléchargement correspondant à votre système d’exploitation.

 [23]: http://www.gimp.org/downloads/

Pour une installation **sous* GNU/Linux*** par le biais des dépôts officiels demandez l’installation du packet

gimp

(exemple sous Linux Ubuntu :

apt-get install gimp

). GTK est normalement déjà installé, si ce n’est pas le cas, votre gestionnaire de packets devrait faire le boulot à votre place.

En revanche, **sous *Windows***, vous devez préalablement installer les **bibiothèques GTK ** pour faire fonctionner *Gimp*. Vous les trouverez [ici (lien gtk.org)][24] (Choisissez le Binaries de *GTK *) ou [ici (lien clubic.com)][25].

 [24]: http://www.gtk.org/download-windows.html
 [25]: http://www.clubic.com/telecharger-fiche36098-bibliotheques-gtk.html

## L’interface de **Gimp** [![↑][27]][27]

 []: #index_debutersousgimp

**Lancez** maintenant l’application *Gimp*.

Plusieurs fenêtres s’ouvrent au démarrage, ce qui peux paraitre déroutant aux premiers abords. Nous avons une **fenêtre principale** curieusement vide ainsi que **deux autres fenêtres**. Ces fenêtres contiennent diverses **boîtes de dialogue** disposées en *onglets* et en *attachées*.

### Fonctionnement des fenêtres, des boîtes de dialogue et des onglets [![↑][28]][28]

 []: #index_debutersousgimp

Il est important de bien comprendre le fonctionnement des **fenêtres**, des** boîtes de dialogue** et des **onglets** sous *Gimp* afin de pouvoir *personnaliser son espace de travail*.

Il faut déjà bien distinguer la différence entre une **fenêtre** et une **boîte de dialogue :**

![image distinguer fenêtre et boîte de dialogue][28]

 [28]: http://data.greweb.fr/blog/image/tuto/gimp/1/distinguer_fenetre_boite_dialogue_onglet.png

Dans cet exemple, la fenêtre intitulée : **« Calques, Canaux, Chemins, Annuler – Brosses, Motifs, Dégradés »** comporte 2 boîtes de dialogue. On dit que ces boîtes de dialogue sont **attachés** (ou ancrés) **à la fenêtre**.

Dans la première **boîte de dialogue**, il y a 4 onglets. Dans la seconde, il y en a 3.

Chacun de ces onglets dispose d’une **interface** dont les possibilités varient d’un onglet à l’autre. L’onglet sélectionné est facilement distinguable. Son interface est visible en dessous des onglets. Ainsi l’onglet sélectionné de la boîte de dialogue du haut est l’onglet ***Calque***, celui de la boîte du bas est l’onglet ***Brosses***.

### Personnalisation de la disposition des boîtes de dialogue et onglets [![↑][30]][30]

 []: #index_debutersousgimp

Les **fenêtres**, les **boîtes de dialogue** la disposition des **onglets** est entièrement personnalisable dans *Gimp* :

#### Par l’utilisation du Glisser-Déposer (drag and drop)

Pour changer la position d’un onglet par rapport aux autres onglets, il suffit de **glisser-déposer cet onglet sur un autre onglet** (comme par exemple sur Firefox).

Le glissé-déposé peut aussi être utilisé pour changer un onglet de boîte de dialogue. Pour cela, glissez-déposez un onglet :

*   **sur une autre boîte de dialogue** pour s’y attacher.
*   ** aux extrémités haut/bas d’une boîte de dialogue** pour créer une nouvelle boîte de dialogue ancré à la fenêtre.
*   **dans le vide** pour créer un nouvelle boîte de dialogue avec cet onglet unique.

#### Par l’utilisation du menu d’une boîte de dialogue

Le bouton ![menu boîte dialogue][30] sur chaque boîte de dialogue permet d’accéder à **ses options** mais aussi aux **options de l’onglet actuel**. Nous retiendrons la possibilité : d*‘ajouter un onglet*, de *détacher l’onglet*, de *fermer l’onglet*, …

 [30]: http://data.greweb.fr/blog/image/tuto/gimp/1/icon_menu_boite_dialogue.png

#### Par l’utilisation du menu intitulé **« Fenêtres »** de la fenêtre principale.

Ce menu permet notamment d’**ajouter de nouvelles fenêtres** contenant un seul onglet.

#### Compléments

*   Les onglets ne sont pas visibles lorsqu’il n’y a qu’un seul onglet attaché à une boîte de dialogue.
*   Lorsque vous quittez *Gimp*, la position des fenêtres et la disposition de toute l’interface est **sauvegardée** !
*   Il est possible de **réinitialiser la disposition de défaut** des fenêtres, boîtes de dialogue et onglet dans les préférences de *Gimp*. Pour y accéder allez dans **Edition / Préférences** de la fenêtre principale.

### La boîte à outils [![↑][32]][32]

 []: #index_debutersousgimp

La* boîte à outils* est une fenêtre **très importante**. Pour preuve, dans les précédentes versions de Gimp, elle constituait la fenêtre principale. Depuis, la fenêtre principale est ***vide* sans images ouvertes** et ***multiple* avec plusieurs images** (néanmoins *Gimp* quittera à la fermeture de la dernière fenêtre principale). C’est un système particulièrement intéressant.

La *boîte à outils* **n’est pas une boîte de dialogue** dans le sens qu’on ne peut la manipuler comme un banal onglet. Il est possible d’attacher des boîtes de dialogue **en bas de la fenêtre** de la *Boîte à outils*.

Elle présente la liste des outils permettant de **créer**, de **modifier** et de **retoucher** une image. Passez la souris sur l’icône d’un outil pour avoir son complément d’information. Les détails de ces outils sont présentés [plus bas][15].

Lorsqu’il n’y a pas de boîtes de dialogue, voici à quoi ressemble cette fenêtre :

![fenetre boîte a outils][32]

 [32]: http://data.greweb.fr/blog/image/tuto/gimp/1/fenetre_boite_a_outils.png

### L’onglet Options des outils [![↑][34]][34]

 []: #index_debutersousgimp

C’est **le plus important des onglets**, il est par défaut disponible en dessous de la *Boîte à outils*. Cet onglet permet de **configurer l’outil actuellement utilisé** par de nombreuses options.

Voici par exemple les options de l’outil *Pinceau* :

![options de l'outils pinceau][34]

 [34]: http://data.greweb.fr/blog/image/tuto/gimp/1/options_outil_pinceau.png

### L’onglet Calques [![↑][36]][36]

 []: #index_debutersousgimp

Un autre onglet important est l’onglet **« Calques »**. Cet onglet vous permet de **gérer les calques sur une image**. Plus de détail sur le fonctionnement des calques [ici][11].

## Réaliser sa première image [![↑][37]][37]

 []: #index_debutersousgimp

### Comment créer une image vierge ? [![↑][38]][38]

 []: #index_debutersousgimp

Depuis la fenêtre principale, allez dans **Fichier / Nouveau…**.

Une nouvelle fenêtre apparaît. Cette fenêtre est importante car elle vous permettra de **choisir les dimensions** que l’image vierge aura. Tout dépend donc de ce que vous voulez faire, optez pour une bonne résolution si vous vous orientez vers de la pure création artistique. Vous pouvez directement choisir des modèles courants de résolution ou entrer manuellement la **Largeur** et la **Hauteur** de l’image.

Une fois vos dimensions choisies, Cliquez sur **Valider**.

La fenêtre principale auparavant vide va maintenant s’appeler **« Sans titre »** et être remplie par défaut de couleur blanche. C’est sur cette fenêtre que tous nos travaux se feront.

### Comment importer une image existante ? [![↑][39]][39]

 []: #index_debutersousgimp

Si vous souhaitez **charger une image** (ou photo) éventuellement pour la retoucher, choisissez **Ouvrir…** . Une nouvelle fenêtre apparaît.

Celle-ci comporte globalement 3 parties :

1.  La **première** permet de sélectionner le **dossier** contenant l’image.
2.  La **seconde** permet de voir les **images** contenu dans dossier sélectionné en (1).
3.  Enfin la **troisième** nous renseigne sur l’image sélectionné en (2) par un **aperçu** et par des **informations techniques** sur le fichier image en lui-même.

Une fois votre image sélectionnée en (2), cliquez sur **Ouvrir** pour la charger.

### Utilisez les outils pour dessiner sur différents calques [![↑][40]][40]

 []: #index_debutersousgimp

Vous allez pouvoir commencer à la pratique. L’utilisation d’une tablette graphique présente de nombreux atouts notamment pour le dessin. Elle permet notamment la **gestion de la pression** sur le stylo qui n’est pas géré par une souris.

**Créez une nouvelle image** d’une résolution de 640 par 480 pixels par exemple. Nous allons par la suite avoir besoin de certaines boîtes de dialogue.

Ainsi nous avons besoin au minimum de la **Boîte à outils** et des onglets : **Options des outils, Calques, Brosses**.

Organisez ces éléments comme appris [précédemment][7]. Pour plus de facilité, il est conseillé de positionner toutes les fenêtres **les unes à coté des autres** et non les unes au dessus des autres.

Maintenant, sélectionnez l’outil ***Pinceau*** identifié par cet icône : ![][40].

 [40]: http://data.greweb.fr/blog/image/tuto/gimp/1/outil_pinceau.png

Dés lors que vous sélectionnez cet outil, vous pouvez voir que l’interface **Options des outils** présente désormais une listes de paramètres relatifs au Pinceau.

Arrivé ici, voici à quoi ressemble mon espace de travail : [lien image][41].

 [41]: http://data.greweb.fr/blog/image/tuto/gimp/1/espace_de_travail_1.png

Observez l’onglet **Calques**. La zone blanche de l’onglet **Calques** correspond à la liste des calques d’une image. Actuellement, il y a un seul calque nommé **« Arrière-plan »**.

Faites un *clic droit* dans cette zone puis sélectionnez **Nouveau Calque…**. Une fenêtre du même nom apparaît. Laissez les paramètres tels quels (vérifiez que “Transparence” est sélectionné) et **Validez**.

Un nouveau calque apparaît alors dans la liste des calques. Vous verrez que la petite image aperçu à côté de son nom est quadrillée. Ce quadrillage est spécifique à Gimp et représente le **canal alpha**, c’est à dire la **transparence**.

En veillant à ce que le Calque **« Nouveau calque »** soit sélectionné dans l’onglet des **Calques**, dessinez quelque chose sur votre fenêtre image (*clic gauche*).

Vous pouvez remarquer que vous dessinez avec une **couleur de trait** et une **taille spécifique**. Il est possible de modifier **la couleur** de votre trait et **la brosse** de votre trait c’est à dire* la taille et la dureté que votre **« Pinceau »** a lors de votre écriture* mais aussi le **motif** qu’il a.

**La couleur de votre trait se règle depuis la Boîte à outils.** Observez cela : ![][40]

*   Le **carré en haut à gauche** est noir, cela veux dire que votre Couleur de **Premier Plan** (celle qui apparaît à la pointe de votre « plume ») est noir.
*   Le** carré en bas à droite** représente quant à lui la couleur d’**Arrière-Plan** qui correspond à une seconde couleur.

La brosse se choisi à partir de l’interface de l’onglet **Brosses**. Les icônes des brosses sont suffisamment explicites, à vous de sélectionner celle que vous voulez.

Continuez à dessiner sur le calque pour **tester ces nouvelles fonctionnalités** (couleur et brosses). Vous pouvez testez d’autres outils de dessin comme ***Crayon***, ***Aérographe*** ou ***Gomme***.

Vous remarquez que l’icône-aperçu de votre Calque **« Nouveau calque »** évolue en fonction de votre dessin et qu’il représente pour le moment *un aperçu de votre image globale*.

Vous allez connaître tout l’intérêt à utilisez les **Calques** :

**Sélectionnez** cette fois le Calque **« Arrière-plan »** et **dessinez** de nouveau l’image.

Vous remarquez déjà qu’il n’est plus possible de** repasser au dessus** de l’ancien dessin. En effet votre ancien dessin contenu dans le calque **« Nouveau calque »** est devant le calque** « Arrière-plan »**.

Sur la fenêtre des Calques, un calque situé **au dessus** d’un autre signifie qu’il est **devant** celui ci sur l’image.

Continuer à tester les calques : Ajoutez un nouveau Calque, dessinez dessus et voyez-en le résultat.

Il est important de savoir **monter** ou **descendre** des calques : pour se faire, vous pouvez soit **glisser les calques par glisser-déposer** dans la fenêtre de calques, soit **cliquer sur la flèche du haut ou du bas** pour monter ou descendre le calque sélectionné.

Ainsi, juste en changeant l’ordre des calques vous pouvez arriver à plusieurs résultats : ![image changement de l'ordre des calques][42]

 [42]: http://data.greweb.fr/blog/image/tuto/gimp/1/changement_ordre_calques.png

Vous voyez, ce n’est pas si compliqué que cela ! c’est comme si on **superposait plusieurs feuilles transparentes** (la transparence est ici matérialisé par le quadrillage).

### Les principaux outils [![↑][44]][44]

 []: #index_debutersousgimp

Je vais rapidement vous présenter les **principaux outils** de Gimp.

N’oubliez pas que chaque outil a un **réglage approprié** dans l’interface de l’onglet **Options des outils**. Les outils de “coloriage” ajoutent la couleur de premier plan, mais chacun à sa spécificité, certains utilisent les brosses, d’autres non.

L’outil **Pinceau** permet de peindre des traits adoucis en suivant la brosse séléctionnée.

L’outil **Crayon** permet de peindre d’une façon “dûre” (forte dureté contrairement au pinceau) selon la brosse séléctionnée.

L’outil **Calligraphie** permet de dessiner dans un style calligraphique en simulant la calligraphie avec de l’encre de chine. (la brosse n’a alors aucune importance)

L’outil **Gomme** permet comme son nom l’indique d’effacer le contenu du calque sélectionné selon une brosse. Contrairement à certains programmes, il met de la transparence (canal alpha) et n’ajoute pas la couleur d’arrière-plan.

L’outil **Remplissage** permet de remplir une zone de même couleur par la couleur de premier-plan.

L’outil **Dégradé** permet de créer un dégradé entre la couleur du premier-plan et la couleur de l’arrière-plan. Attention, cet outil va ajouter le dégradé par dessus le contenu du calque. Pour l’utiliser, cliquez à un endroit sans relâcher, puis relâchez à un second endroit.

L’outil **Texte** permet d’insérer un Texte en tant que nouveau calque.

L’outil **Aérographe** permet contrairement aux autres outils de coloriage d’ajouter progressivement (et non directement) de la couleur de premier-plan par dessus l’image actuelle. Je vous laisse tester. Il utilise les brosses.

L’outil **Déplacement** permet tout simplement de déplacer un calque.



## 

## Informations supplémentaires [![↑][45]][45]

 []: #index_debutersousgimp

### Ajouter une image en tant que calque. [![↑][46]][46]

 []: #index_debutersousgimp

Il est facilement possible au cours d’un projet déjà commencé, d’importer une image à partir d’un fichier. Il y a par ailleurs **plusieurs moyens** :

*   **Ouvrir en tant que nouveau calque** dans le menu Fichier.
*   Créer un nouveau calque et **copier-coller une image** dedans.
*   **Glisser-déposer un fichier image** sur un projet.

### Enregistrer son image / projet [![↑][47]][47]

 []: #index_debutersousgimp

Pour **“enregistrer sous”** une nouvelle image, allez dans **Fichier / Enregistrer sous**. Pour enregistrer en écrasant l’ancienne sauvegarde, allez dans **Fichier / Enregistrer**.

le format natif **.xcf** est le format **par défaut** de Gimp. Celui ci est le plus intéressant car il permet la **sauvegarde des différents calques**. Tant qu’un projet n’est pas terminé ou que vous serez amené à revenir dessus, il est **recommandé** de commencez par sauvegarder sur celui çi.

les autres formats sont indispensables car il est inutile de faire une image pour ne l’enregistrer qu’en **.xcf** si vous voulez l’utiliser ailleurs. Par conséquence il faudra faire un choix dans le format d’exportation.

Les formats les plus courant sont le **.jpg** le **.png** et le **.gif**.

### Principales caractéristiques des formats jpg, gif et png [![↑][48]][48]

 []: #index_debutersousgimp

Format

Gestion du canal alpha (transparence)

Accepte l’animation

Limité en couleurs

Taille

JPG

Non

Non

Non

moyen/léger

PNG

Oui

Oui, un peu

Non

moyen

GIF

Oui

Oui

Oui, 256 couleurs maximum

très léger

En résumé, le **JPG** est optimale pour des images/photos qui prendrons **peu de place**. Le **GIF** est idéal pour la création d’icônes, boutons animés ou non pour les **sites web**. Le **PNG** est idéal pour des images avec gestion du **canal alpha**. (le PNG regroupe un peu les fonctions du JPG et du GIF).

Lors de l’enregistrement, une fenêtre s’ouvre. Choisissez votre **dossier de sortie**.

Pour le nom du fichier il est très important de mettre l’**extension à la fin**. par exemple on mettra : ***mon_image*.xcf** ou ***mon_image*.png**. Si cela vous semble déroutant, une autre solution est de cliquer sur **“Sélectionner le type de fichier”** et de choisir dans la liste l’extension souhaitée.

Le prochain tutoriel présentera les outils de sélections.