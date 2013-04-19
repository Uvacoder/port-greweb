---
title: Installer un Ubuntu stable et compatible sur le Dell Mini 12
author: Gaetan
excerpt: "<p>Le <strong>Dell Mini 12</strong> comporte du matériel assez mal géré sous GNU/Linux, notamment du coté de la gestion du serveur graphique Xorg.</p> <p>Le pilote graphique <strong>poulsbo</strong> (ou psb) est fonctionnel sur Ubuntu 8.04, mais l'est très mal sur les versions suivantes d'Ubuntu (c'est dût à la version du noyau).</p> <p>De plus, il est conseillé d'installer une version avec l'<strong>architecture lpia</strong> optimisée pour les processeurs <strong>Atom</strong>.</p> <p>Néanmoins, <strong>si vous avez encore la version de dell</strong>, nous vous déconseillons de procéder à une nouvelle installation d'Ubuntu sur votre Dell Mini 12 . L'ajout des dépôts ubuntu-mobile sur la version de Dell serait une solution intéressante bien que beaucoup de personnes témoignent d'instabilités sur cette version native de Dell.</p> <p>Si toutefois vous voulez tenter l'expérience, <strong>suivez donc ce tutoriel</strong> et renseignez vous sur d'autres sites (voir les annexes)...</p>"
layout: post
permalink: /2009/09/installer-un-ubuntu-stable-et-compatible-sur-le-dell-mini-12/
dsq_thread_id:
  - 463659432
categories:
  - Tutoriels
tags:
  - dell-mini-12
  - GNU/Linux
  - installation
  - ubuntu
---
# 

Le **Dell Mini 12** comporte du matériel assez mal géré sous GNU/Linux, notamment du coté de la gestion du serveur graphique Xorg.

Le pilote graphique **poulsbo** (ou psb) est fonctionnel sur Ubuntu 8.04, mais l’est très mal sur les versions suivantes d’Ubuntu (c’est dût à la version du noyau).

De plus, il est conseillé d’installer une version avec l’**architecture lpia** optimisée pour les processeurs **Atom**.

Néanmoins, **si vous avez encore la version de dell**, nous vous déconseillons de procéder à une nouvelle installation d’Ubuntu sur votre Dell Mini 12 . L’ajout des dépôts ubuntu-mobile sur la version de Dell serait une solution intéressante bien que beaucoup de personnes témoignent d’instabilités sur cette version native de Dell.

Si toutefois vous voulez tenter l’expérience, **suivez donc ce tutoriel** et renseignez vous sur d’autres sites (voir les annexes)…



* * *

## Attention

**La solution présentée dans ce tutoriel utilise tout le disque dur du Mini 12.** Il est donc impératif de faire toutes les sauvegardes nécessaires avant d’installer car rien ne pourra être récupérer (ni vos anciens systèmes d’exploitation installés). En effet, il ne propose pas la possibilité de choisir le partitionnement adéquat.

* * *

## A quelle niveau de compatibilité ce tutoriel mène

*   **Affichage graphique** fonctionnel : résolution maximale de 1280×800. Pilotes 3D non testés (et non conseillés).
*   Gestion du **son** et de la **vidéo** sans lag.
*   **Webcam** compatible.
*   **Wifi** et **Ethernet** opérationnel.
*   **Bluetooth** fonctionnel.
*   Deuxième écran opérationnel immédiatement au branchement de la prise VGA. (mode clone testé)
*   Raccourcis claviers avec **Fn** opérationnels sauf **Fn F2**.
*   **Mise en veille** sans problème.
*   Lecteur **SD-MS/MMC**: ***non testé***.
*   Prise **jack casque** opérationnelle. Prise **jack micro** non testée.
*   Gestion de la **batterie** (affichage du temps de charge et diverses informations).

**glxgears** donne des résultats proches de **100 fps** avec les pilotes graphiques 2D mais pas les pilotes graphiques 3D ce qui est un score raisonnable (moins de 30 fps sans pilotes).

## Ce dont vous avez besoin

*   L’ordinateur portable **Dell Mini 12** (évidemment)
*   Une **clé USB** (sauvegardez son contenu car nous la formaterons)
*   Un **autre ordinateur** sous **Ubuntu de préférence** (pour préparer la clé usb d’installation et bien sur suivre ce tutoriel).

## Préparations

### Télécharger UNR 8.04

Avant toute installation, vous devez d’abord vous procurer Ubuntu Netbook Remix (UNR) 8.04 :

**Téléchargement: [unr-1.0.1.img (1.0 Go)][1]**

 [1]: http://oem-images.canonical.com/unr/unr-1.0.1.img

### Créer une clé USB d’installation

*   **Connectez votre clé USB** et faites toutes les **sauvegardes** nécessaires car nous allons la formater pour l’utiliser comme clé d’installation.

#### Si votre ordinateur actuel est sur Linux

*   Installez le packet **usb-imagewriter**.

Sous Ubuntu:

sudo apt-get install usb-imagewriter

ou [cliquez ici][2].

 [2]: apt://usb-imagewriter

*   Ouvrez ImageWriter. **Sélectionnez votre fichier .img** téléchargé plus haut dans le premier champ. **Sélectionnez la clé usb** qui servira pour l’installation dans le second champ.
*   Validez en sélectionnant **Write to device**.

#### Sur un autre système

Veuillez jetez un coup d’œil ici : [https://wiki.ubuntu.com/UNR/Install…][3]

 [3]: https://wiki.ubuntu.com/UNR/Installation/Hard "https://wiki.ubuntu.com/UNR/Installation/Hard"

*   Une fois la clé d’installation créé, **déconnectez votre clé USB d’installation**.

## Installation sur le Mini 12

*   **Connectez votre clé USB d’installation** sur le Mini 12.
*   **Démarrer le Mini 12**.
*   Au chargement du boot, appuyez sur la **touche F12**.
*   **Sélectionnez l’option “USB Storage”** pour démarrer sur la clé USB (le second choix chez moi).
*   La clé USB d’installation se lance. Arrivé à un moment, on vous demande ce que vous voulez lancer (boot), **appuyez sur Entrée comme indiqué**.
*   **Attendez** que l’installation se fasse.
*   Losqu’elle est terminée, on vous demande de retirer la clé usb (quelque chose comme “please **unplug** usb to reboot”). **Retirez donc la clé usb** (en toute sécurité). L’ordinateur **redémarre**.

## Configuration

### Premier démarrage

Au premier démarrage, on vous demande des informations classiques (comme toute installation Ubuntu) telle que la localisation et les informations du premier utilisateur.

*   **Remplissez ces informations**.

### Désactivation de certains programmes

A la première ouverture de session, ne paniquez pas, nous allons désactiver le lancement de ce programme lent et non approprié pour le Mini 12 qui se nomme *“**Netbook Launcher**, A Clutter-based desktop launcher”*, vous le trouverez peut-être aussi sous le nom de *UME Launcher*.

Nous allons aussi désactiver **Maximus** qui maximise toute les fenêtres ouvertes.

*   Pour désactivez ces programmes, **lancez les préférences de sessions** : Appuyez sur ALT F2, entrez gnome-session-properties
    
    , Validez. 
    *   **Cherchez** ensuite dans la liste des programmes au démarrage les deux programmes cités plus haut et **décochez-les**. **Redémarrez** votre session pour faire disparaitre ces applications (ou bien, redémarrez votre ordinateur). 
    ### Modification du tableau de bord
    
    **Arrangez le tableau de bord** pour que soit visible la **Barre de menus** classique d’Ubuntu et la **liste des fenêtres**.
    
    ### Procéder aux mises à jour
    
    *   **Configurer votre connexion internet** pour **procéder aux mises à jour** du système. Redémarrez l’ordinateur après les mises à jour si nécessaire.
    *   Maintenant allez dans le terminal et entrez sudo apt-get update && sudo apt-get upgrade
        
        . Il se peut qu’il y ait plusieurs fois de nouvelles mises à jour après plusieurs redémarrages. **Assurez vous que toutes les mises à jour aient été effectuées avant de continuer**.  
        ### Installer les dépôts ubuntu-mobile (launchpad)
        
        *   Dans un terminal, entrez sudo gedit /etc/apt/sources.list
            
            pour modifier la liste des dépôts. Ajoutez à la fin de /etc/apt/sources.list les lignes suivantes :  
                #  
                deb http://ppa.launchpad.net/ubuntu-mobile/ubuntu hardy main  
                deb-src http://ppa.launchpad.net/ubuntu-mobile/ubuntu hardy main
            
            #### Ajoutez la clé d’identification du dépôt
            
            *   Depuis votre netbook, **rendez vous sur la page [http://keyserver.ubuntu.com:11371/p…][4]**.
            *   Copiez collez le contenu de la page entre **- – - BEGIN PGP PUBLIC KEY BLOCK – - -** (inclus) et **- – - END PGP PUBLIC KEY BLOCK – - -** (inclus) dans un fichier nommé **ppa.key**.
            *   Ajoutez cette clé avec la commande sudo apt-key add ppa.key
                
                .  
                ### Installation du pilote graphique PSB
                
                *   En ligne de commande, **actualisez la liste des dépôts** ( sudo apt-get update
                    
                    ) et **mettez à jour** au cas où (
                    
                    sudo apt-get upgrade
                    
                    ). Redémarrez si demandé et **vérifiez que toutes les mises à jour sont effectuées** avant de continuer. 
                    *   **Installez le pilote graphique poulsbo** par la commande: 
                    sudo apt-get install xserver-xorg-video-psb
                    
                    .
                    
                    *   **Redémarrez**.
                    
                    Normalement, au redémarrage, vous avez maintenant la bonne résolution de votre écran de géré !
                    
                    ## Configuration plus en profondeur
                    
                    ### Montrer le bureau
                    
                    **Effectuez un clic droit sur le bureau**. S’il n’a aucun effet, c’est bien que votre Bureau n’est pas visible.
                    
                    Pour résoudre ce problème, ouvrez ** gconf-editor
                    
                     puis allez dans **apps>nautilus>preferences** et cochez **show_desktop**. Reconnectez vous pour appliquer ces changements.
                    
                    ### Désactiver PulseAudio
                    
                    **PulseAudio** n’est pas indispensable, la lecture de musique / vidéo, fonctionne sans celui ci.
                    
                    Ainsi, on peux **désactiver son lancement automatique** dans
                    
                    gnome-session-properties
                    
                    .
                    
                    ### Installer flash
                    
                    Pour pouvoir lire le flash sur internet, **vous devez installer le plugin flash** :
                    
                    sudo apt-get install flashplugin-nonfree
                    
                    .
                    
                    Après cela, **votre Dell Mini 12 sera capable de lire les contenus flash** comme par exemple les vidéos de youtube, dailymotion, …
                    
                    ### Accélérer le démarrage d’Ubuntu
                    
                    Au démarrage d’ubuntu, il se peut que la **barre de chargement mette du temps à se lancer** (plus de 20 secondes d’attente inutile).
                    
                    Ce problème est dût à une **mauvaise option du kernel au boot**.
                    
                    *   Pour cela, nous devons éditer le fichier /boot/grub/menu.lst. **Attention aux mauvaises manipulations.**
                    *   Entrez dans un terminal : sudo gedit /boot/grub/menu.lst
                    
                    *   Repérez le **premier bloc du boot** (celui après la ligne ## ## End Default Options ##
                        
                        ). 
                        *   Repérez la ligne **kernel** de ce bloc, vous avez normalement quelque chose comme : 
                            kernel         /boot/vmlinuz-2.6.24-24-lpia ro **boot=disk** quiet splash
                        
                        *   **Changez uniquement** la partie en gras en **root=/dev/sda1** :
                        
                            kernel         /boot/vmlinuz-2.6.24-24-lpia ro **root=/dev/sda1** quiet splash
                        
                        **Attention**, j’insiste c’est bien **root** et pas **boot**.
                        
                        Si vous rencontrez un problème de démarrage après cette manipulation, appuyez sur **Echap** juste avant le démarrage d’Ubuntu. Vous accéderez au **menu grub** et pourrez effectuer des modifications (touche E).
                        
                        ### Réduire les bruits de clic du disque dur
                        
                        Il se peut que vous entendiez régulièrement votre disque dur **“cliquer”**. Pour **réduire ce bruit désagréable**, modifiez le fichier /etc/default/acpi-support en root:
                        
                        sudo gedit /etc/default/acpi-support
                        
                        A la dernière ligne vous avez normalement :
                        
                        SPINDOWN_TIME=12
                        
                        . Modifiez le **12** en **200**.
                        
                        Après un démarrage, le bruit du disque dur devrait moins s’entendre.
                        
                        > The encoding of the timeout value is somewhat peculiar. A value of zero means “timeouts are disabled”: the device will not automatically enter standby mode. Values from 1 to 240 specify multiples of 5 seconds, yielding timeouts from 5 seconds to 20 minutes. Values from 241 to 251 specify from 1 to 11 units of 30 minutes, yielding timeouts from 30 minutes to 5.5 hours. A value of 252 signifies a timeout of 21 minutes. A value of 253 sets a vendor-defined timeout period between 8 and 12 hours, and the value 254 is reserved. 255 is interpreted as 21 minutes plus 15 seconds. Note that some older drives may have very different interpretations of these values.
                        
                        ### Ajout du firmware msvdx_fw.bin
                        
                        *   Si vous avez gardé le fichier **msvdx_fw.bin** de l’installation initiale de Dell *(vous pouvez aussi le rechercher sur internet à vos risques et périls)*, **Placez-le dans le dossier adéquat** :
                        
                        sudo cp msvdx_fw.bin /lib/firmware/\`uname -r\`
                        
                        .
                        
                        *   **Redémarrez puis vérifiez son fonctionnement** : En entrant dmesg | grep psb
                            
                            , si vous voyez la ligne
                            
                            [drm:psb\_setup\_fw] *ERROR psb: No valid msvdx_fw.bin firmware found.
                            
                            , c’est qu’il est mal placé (essayez donc dans un autre dossier de /lib/firmware/).  
                            ### Pilotes 3D
                            
                            **Nous déconseillons l’utilisation des pilotes 3D car ils sont instables et provoquerait des ralentissements [(source)][5]**.
                            
                            Toutefois, si vous voulez quand même les installer, suivez cette procédure :
                            
                            *   Copiez le fichier **psb_dri.so** (issu de la version initiale de Dell) dans **/usr/lib/dri**.
                            *   Copiez le fichier **Xpsb.so** (issu de la version initiale de Dell) dans **/usr/lib/xorg/modules**.
                            *   **Redémarrez** votre session graphique.
                            *   Entrez dans un **Terminal**: cat /var/log/Xorg.0.log | grep Xpsb
                                
                                . Si vous trouver quelque chose comme
                                
                                (WW) PSB(0): Poulsbo Xpsb driver not available.  XVideo and 3D acceleration will not work
                                
                                c’est que votre installation du pilote 3D n’a pas fonctionnée. 
                                *   Pour **vérifier que la 3D fonctionne bien**, vérifiez que glxinfo | grep "direct rendering"
                                    
                                    affiche
                                    
                                    direct rendering: Yes
                                    
                                    .  
                                    Vous pouvez aussi regarder ici [http://doc.ubuntu-fr.org/poulsbo][6] pour la gestion de la 3D.
                                    
                                    ## Annexes Utilisés
                                    
                                    *   [(ubuntuforums.org) Installing on the Dell Mini 12][7] 
                                        *   notamment: [#94][8]
                                    *   [http://gma500.wiki-site.com][9]

 [4]: http://keyserver.ubuntu.com:11371/pks/lookup?op=get&search=0x99D6B21CC6598A30 "http://keyserver.ubuntu.com:11371/pks/lookup?op=get&search=0x99D6B21CC6598A30"
 [5]: http://ubuntuforums.org/showpost.php?p=6636562&postcount=235
 [6]: http://doc.ubuntu-fr.org/poulsbo "http://doc.ubuntu-fr.org/poulsbo"
 [7]: http://ubuntuforums.org/showthread.php?t=1014534
 [8]: http://ubuntuforums.org/showpost.php?p=6512181&postcount=94
 [9]: http://gma500.wiki-site.com "http://gma500.wiki-site.com"