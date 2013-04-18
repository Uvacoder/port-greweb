---
title: Les liens symboliques sous Unix
author: Gaetan
excerpt: '<p>Les <strong>liens symboliques (symlink) <em>sous Unix</em></strong> sont similaires aux <strong>raccourcis <em>sous Microsoft Windows</em></strong>.</p> <p>Un <strong>lien symbolique</strong> est un fichier spécial qui contient une référence vers un autre fichier ou dossier. Il peut être <em>absolu</em> ou <em>relatif</em>.</p> <p>Un <strong>lien symbolique</strong> est similaire à un <strong>alias</strong>.</p>'
layout: post
permalink: /2009/08/les-liens-symboliques-sous-unix/
dsq_thread_id:
  - 463659311
categories:
  - Bash Tips
tags:
  - unix
---
# 

Les **liens symboliques (symlink) *sous Unix*** sont similaires aux **raccourcis *sous Microsoft Windows***.

Un **lien symbolique** est un fichier spécial qui contient une référence vers un autre fichier ou dossier. Il peut être *absolu* ou *relatif*.

Un **lien symbolique** est similaire à un **alias**.



## Utilisation

ln -s  

*   *nom\_du\_lien*: fichier du lien symbolique qui sera créé
*   *cible\_du\_lien*: fichier ou dossier que référence le lien symbolique

* * *Cette commande 

**crée un lien symbolique** nommé ****** qui se référence sur ******. 
C’est comme si vous créez une copie du dossier/fichier ** à l’adresse ** à la différence que la copie est virtuelle : c’est un alias.

## Exemples

*   ln -s /dev/null null

Création d’un lien “null” dans le dossier actuel pointant vers le périphérique “*trou noir*“.

*   sudo ln -s /usr/share/phpmyadmin/ /var/www/phpmyadmin

Cette action est parfois nécessaire après l’installation de **phpmyadmin**. Elle consiste à créer un point d’entrée à d’interface d’administration **phpmyadmin** à la page /phpmyadmin/.

Si la cible du lien est un dossier, alors vous pourrez rentrer dans ce lien comme s’il s’agissait d’un banal dossier.

Ainsi, dans notre second exemple, la liste des fichiers du dossier

/var/www/phpmyadmin/

est la même que la liste des fichiers du dossier

/usr/share/phpmyadmin/

car

/var/www/phpmyadmin/

est un lien symbolique de

/usr/share/phpmyadmin/

.

Pour résumer, le comportement d’un lien est le même que le fichier / dossier qu’il fait référence.

## Lister les liens symboliques

la commande

ls -l

permet d’afficher la liste des fichiers dont les fichiers “liens symboliques” reconnaissables par la **lettre “l” préfixée**. Un lien symbolique a automatiquement **tous les droits**. Il est permissif pour ne pas masquer les droits du fichier/dossier qu’il réfère.

Ainsi la commande

ls -l | grep "^l"

permet de ne lister que les liens symboliques du dossier actuel.