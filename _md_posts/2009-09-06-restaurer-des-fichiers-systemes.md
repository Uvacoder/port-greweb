---
title: 'Restaurer des fichiers systèmes sous GNU/Linux grâce au CD d&#039;installation'
author: Gaetan
excerpt: "<p>Il arrive à tous de faire des erreurs et lorsqu'il s'agit de la <strong>suppression de fichiers systèmes</strong>, on pense souvent à réinstaller tout le système. Il n'est pas nécessaire de procéder à cette <strong>solution extrême</strong> si vous avez encore accès à un terminal.</p> <p>Voici une solution qui vous permettra de <strong>restaurer un fichier système connaissant son adresse</strong> en utilisant un <strong>Terminal</strong> et le <strong>CD d'installation</strong> de la distribution actuelle.</p>"
layout: post
permalink: /2009/09/restaurer-des-fichiers-systemes/
dsq_thread_id:
  - 466377138
categories:
  - Tutoriels
tags:
  - CD
  - GNU/Linux
  - solution
---
# 

Il arrive à tous de faire des erreurs et lorsqu’il s’agit de la **suppression de fichiers systèmes**, on pense souvent à réinstaller tout le système. Il n’est pas nécessaire de procéder à cette **solution extrême** si vous avez encore accès à un terminal.

Voici une solution qui vous permettra de **restaurer un fichier système connaissant son adresse** en utilisant un **Terminal** et le **CD d’installation** de la distribution actuelle.



L’opération va consister à **récupérer les fichiers systèmes perdus ou endommagés** depuis le CD d’installation pour les **replacer dans le bon dossier**.

Si vous n’avez plus accès à votre session, vous pouvez aussi effectuer les opérations en “recovery mode”.

## Le tutoriel

*   **Insérez le disque d’installation** correspondant à la distribution en question (il est important d’avoir la bonne version et la bonne architecture)

### Avec un terminal

1.  Vérifiez que le **montage du CD-rom** est effectué. Autrement montez le avec **mount**.
2.  **Entrez dans le CD-rom d’installation** puis dans le dossier **casper**.
3.  Montez le fichier **filesystem.squashfs** contenant tout les fichiers systèmes de la distribution courante. 
    *   Il faut pour cela disposer d’un point de montage. Soit vous utilisez un point de montage existant, soit vous créez un dossier vide pour l’occasion.
    *   Ensuite **on monte le fichier filesystem.squashfs** sur notre point de montage avec mount : 
            mount -t squashfs -o loop filesystem.squashfs /point/de/montage/
        
        .   
        *   Nous n’avons alors plus qu’à effectuer tous les déplacements nécessaires pour restaurer nos fichiers au moyen de la commande ****cp****. **Attention aux fausses manipulations**.
        *   Une fois toutes les restaurations effectuées, démontez le fichier **filesystem.squashfs** et supprimez le **si et seulement si** vous l’aviez précédemment créé.
        *   **Redémarrez votre ordinateur** si les résolutions de problèmes ne sont pas encore effectives. 
        #### Exemple
        
        Voici un exemple de la restauration de l’exécutable **/usr/bin/dpkg** (malencontreusement supprimé) sous Ubuntu.
        
        mount /cdrom  
        cd /cdrom/casper  
        sudo mkdir /media/pointdemontage  
        sudo mount -t squashfs -o loop filesystem.squashfs /media/pointdemontage  
        sudo cp /media/pointdemontage/usr/bin/dpkg /usr/bin/dpkg  
        sudo umount /media/pointdemontage  
        sudo rmdir /media/pointdemontage/