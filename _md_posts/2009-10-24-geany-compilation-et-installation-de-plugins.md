---
title: 'Geany &#8211; compilation et installation de plugins'
author: Gaetan
excerpt: |
  <p>A la demande d'un commentaire, je vais détailler dans cet article l'installation de <strong><a href="http://blog.greweb.fr/?post/2009/07/Geany">Geany</a></strong> et de ses <strong>plugins</strong>.</p> <p>Dans un premier temps nous présenterons l'installation de la <strong>version SVN de geany</strong>, qui comporte les toutes dernières nouveautés de geany. Ensuite, nous présenterons la <strong>version des dépôts Ubuntu</strong> potentiellement plus stable mais avec moins de fonctionnalités car plus ancienne.</p> <p>A noté que l'installation depuis les dépôts est <strong>très simple</strong>, nous vous la conseillons si vous débutez avec le concept de compilation de logiciels. Néanmoins, cette version ne vous permet pas toujours d'avoir ce que vous voulez (notamment si vous voulez bénéficier des dernières nouveautés de geany, ou d'un plugin spécifique non présent dans les dépôts).</p>
layout: post
permalink: /2009/10/geany-compilation-et-installation-de-plugins/
aktt_notify_twitter:
  - no
dsq_thread_id:
  - 463659445
categories:
  - Tutoriels
tags:
  - compilation
  - editeur de texte
  - geany
  - IDE
  - installation
---
# 

A la demande d’un commentaire, je vais détailler dans cet article l’installation de **[Geany][1]** et de ses **plugins**.

 [1]: http://blog.greweb.fr/?post/2009/07/Geany

Dans un premier temps nous présenterons l’installation de la **version SVN de geany**, qui comporte les toutes dernières nouveautés de geany. Ensuite, nous présenterons la **version des dépôts Ubuntu** potentiellement plus stable mais avec moins de fonctionnalités car plus ancienne.

A noté que l’installation depuis les dépôts est **très simple**, nous vous la conseillons si vous débutez avec le concept de compilation de logiciels. Néanmoins, cette version ne vous permet pas toujours d’avoir ce que vous voulez (notamment si vous voulez bénéficier des dernières nouveautés de geany, ou d’un plugin spécifique non présent dans les dépôts).



## Depuis les sources (version SVN)

### Téléchargement des sources

Si vous ne désirez pas la dernière version (de développement) mais préférez une **version stable**, téléchargez les sources de la dernière version stable depuis [geany.org][2] et décompressez le dans un dossier (nommons le *geany/* dans la suite de ce tutoriel).

 [2]: http://geany.org

* * *

Dans la cas inverse, nous allons récupérer la dernière version de geany grâce à un **gestionnaire de source** :

#### Avec SVN

*   Pour récupérer les sources il suffit d’entrer svn co https://geany.svn.sourceforge.net/svnroot/geany/trunk geany




*   A noté qu’il est nécessaire d’avoir préalablement installé SVN :  sudo apt-get install subversion
    
    sous Ubuntu.  
    #### Avec GIT
    
    *   Pour récupérer les sources il suffit d’entrer git clone http://git.geany.org/git/geany
    
    
    
    
    *   A noté qu’il est nécessaire d’avoir préalablement installé GIT :  sudo apt-get install git-core
        
        sous Ubuntu.  
        * * *
        
        **Une fois le code source récupéré**, rendez-vous dans le dossier *geany/* fraîchement créé :
        
        cd geany/
        
        ### Compilation de *geany*
        
        #### Installation des dépendances
        
        Pour la compilation de *geany*, il est nécessaire d’avoir un certain nombre de **bibliothèques logicielles** (*librairies* en anglais) d’installées. Ces bibliothèques sont les **dépendances** de l’application.
        
        * * *
        
        Nous avons besoin pour *geany* des bibliothèques suivantes
        
        *   **build-essential** : la base pour compiler un programme.
        *   **libtool**, **autoconf** et **automake** : bibliothèques permettant la configuration et compilation automatique de code source afin d’améliorer sa portabilité.
        *   **intltool** : outil d’internationalisation.
        *   **Glib** (libglib2.0-dev) : bibliothèque à tout faire.
        *   **GTK** (libgtk2.0-dev) : bibliothèque d’interface graphique.
        
        Sous *Ubuntu*, vous pouvez installer ces bibliothèques avec la commande : 
        
        sudo apt-get install build-essential autoconf automake intltool libtool libglib2.0-dev libgtk2.0-dev
        
        ou tout simplement en [cliquant ici][3].
        
        * * *
        
        Lancez la commande
        
        ./autogen.sh
        
        toujours depuis le dossier *geany/* . Si une dépendance manque, elle vous sera indiquée.
        
        Par exemple :
        
            **Error**: You must have `glib' installed.  
            You can get it from: ftp://ftp.gtk.org/pub/gtk
        
        ou encore
        
            No package 'gtk -2.0' found
        
        Autrement, si toutes les dépendances sont installées, **l’application est prête à être compilée**.
        
            Configuration is done OK.  
            Now type 'make' to compile.
        
        #### Compilation
        
        Comme indiqué, il suffit de taper
        
        make
        
        pour compiler le programme. Cette étape va prendre environ 5 minutes à se réaliser, vous pouvez aller prendre un café !
        
        Une fois cette étape achevé avec succès, vous pouvez d’ores et déjà lancer l’application avec la commande
        
        ./src/geany
        
        .
        
        Celle ci indique bien que vous possédez la dernière version svn de geany :
        
            10:31:05: This is Geany 0.19 (svn >= r4357).
        
        Néanmoins aucun plugin n’est disponible dans **Outils > Gestionnaire de plugin** . Pour la suite, nous vous conseillons d’installer *geany*.
        
        Pour **installer *geany***, lancez la commande
        
        sudo make install
        
        . La commande
        
        geany
        
        lance l’application qui comporte désormais une première liste de plugin. Nous allons maintenant compléter cette liste.
        
        ### Installation de plugins supplémentaires
        
        Pour l’installation de plugins supplémentaires, il faut commencer par télécharger les sources de chaque plugin.
        
        Dans notre exemple, nous prendrons comme plugin le **débuggeur gdb intégré dans geany**.
        
        #### Téléchargement
        
        Soit on télécharge les sources de **geanygdb** depuis [ce site][4] puis on extrait le code dans le dossier *geanygdb/*.
        
        Soit on utilise le dépôt SVN : 
        
        svn co http://geany-plugins.svn.sourceforge.net/svnroot/geany-plugins/trunk/geanygdb 
        
        > NOTE: il semblerait que le dépôt est déconnecté, si c’est encore le cas chez vous, optez pour la première solution.
        
        ensuite on se rend dans le dossier *geanygdb/* :
        
        cd geanygdb
        
        .
        
        Comme précédemment, on fait un
        
        ./autogen.sh
        
        , on vérifie que toute les dépendances sont installées, et on compile avec
        
        make
        
        .
        
        On installe le plugin avec
        
        sudo make install
        
        .
        
        Maintenant, on réouvre *geany*, puis dans **Outils > Gestionnaire de plugin** on constate que ***Debugger*** s’est ajouté (voir image). On a plus qu’à le cocher pour l’activer.
        
        ![][5]
        
        ## Depuis les dépôt Ubuntu (version non svn)
        
        ### Installation de geany
        
        Utilisez simplement la commande 
        
        sudo apt-get install geany 
        
        ### Installation de plugins
        
        On commence à taper **sudo apt-get install geany-plugin** dans le terminal puis on **appuie deux fois sur la touche TAB** (la touche au dessus du verrouillage majuscule) pour faire jouer l’auto-completion.
        
        Dans mon cas on obtient cette liste :
        
            geany-plugin-addons
            geany-plugin-lua
            geany-plugin-shiftcolumn
            geany-plugin-doc
            geany-plugin-prj
            geany-plugin-spellcheck
            geany-plugin-gdb
            geany-plugins
            geany-plugin-vc
            geany-plugin-latex
            geany-plugins-common
            geany-plugin-lipsum
            geany-plugin-sendmail
        
        On a alors plus qu’à choisir le plugin adéquat, par exemple pour **geany-plugin-gdb**, entrez la commande :
        
        sudo apt-get install geany-plugin-gdb 
        
        Si vous désirez installer un plugin qui n’apparait pas dans les dépôts, il faudra **télécharger, compiler et installer les sources de ce plugin** comme expliqué précédemment.

 [3]: apt://build-essential,autoconf,automake,intltool,libtool,libglib2.0-dev,libgtk2.0-dev
 [4]: http://plugins.geany.org/geanygdb/#download
 [5]: http://data.greweb.fr/blog/image/logiciel/geany/geany-plugins-list.png