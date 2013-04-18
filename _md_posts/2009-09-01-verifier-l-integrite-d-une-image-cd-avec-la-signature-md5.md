---
title: 'Vérifier l&#039;intégrité d&#039;une image CD avec la signature MD5'
author: Gaetan
excerpt: |
  <p>Lors du <strong>téléchargement d'une distribution GNU/Linux</strong>, il n'est pas rare que ce téléchargement soit <strong>endommagé</strong>.</p> <p>Pour vérifier l'intégrité de l'image CD téléchargée, vous pouvez calculer <strong><acronym title="son empreinte">sa signature MD5</acronym></strong> et la comparer avec la <strong><acronym title="la véritable empreinte">signature MD5 "publique"</acronym></strong>. Si elles ne concordonnent pas, c'est que votre fichier est endommagé et qu'il faudra le télécharger une nouvelle fois.</p> <p>Utiliser le P2P pour télécharger une distribution est alors d'un grand intérêt car le P2P permet une vérification/correction des données transférées.</p>
layout: post
permalink: /2009/09/verifier-l-integrite-d-une-image-cd-avec-la-signature-md5/
dsq_thread_id:
  - 465053989
categories:
  - Tutoriels
tags:
  - CD
  - GNU/Linux
  - md5
---
# 

Lors du **téléchargement d’une distribution GNU/Linux**, il n’est pas rare que ce téléchargement soit **endommagé**.

Pour vérifier l’intégrité de l’image CD téléchargée, vous pouvez calculer **sa signature MD5** et la comparer avec la **signature MD5 “publique”**. Si elles ne concordonnent pas, c’est que votre fichier est endommagé et qu’il faudra le télécharger une nouvelle fois.

Utiliser le P2P pour télécharger une distribution est alors d’un grand intérêt car le P2P permet une vérification/correction des données transférées.



## Vérifier l’image CD avant de graver

*   Dans un premier temps, calculez la signature MD5 de votre fichier image CD en **tapant la commande 
        md5sum 
    
     
    *   Vous aurez le résultat après quelque instant. La signature MD5 est une série de chiffres (**** à **9**) et de lettres (**a** à **f**).
    *   Ensuite, recherchez la signature MD5 “publique” de votre image téléchargé sur internet. Vous pouvez pour cela rechercher sur votre moteur de recherche préféré : 
            md5 
    
    *   Si la signature MD5 trouvé sur internet correspond à celle que vous avez calculée, c’est que **votre fichier est correct**, dans le cas contraire, il est endommagé. 
    **Exemple :**
    
    *   Sur mon moteur de recherche 
            md5 ubuntu-9.04-desktop-i386.iso
    
    *   je trouve ce site [https://help.ubuntu.com/community/U…][1] .
    *   qui m’indique la signature MD5 correspondante : 
            66fa77789c7b8ff63130e5d5a272d67b
    
    *   66fa77789c7b8ff63130e5d5a272d67b est aussi le résultat que j’avais trouvé avec la commande 
            md5sum ubuntu-9.04-desktop-i386.iso
        
        donc mon image CD est correcte.  
        ### Je ne trouve pas la signature MD5 sur internet
        
        Si vous ne trouvez pas l’empreinte publique de votre image CD, c’est que vous avez probablement mal cherché. Soit.
        
        Une autre façon de faire est d’**entrer la signature MD5 calculée de votre fichier téléchargé** directement sur votre moteur de recherche. Par exemple : Je tape 
            66fa77789c7b8ff63130e5d5a272d67b
        
        sur google.
        
        *   Si la recherche comporte des résultats et si elle concerne bien votre distribution, c’est que votre fichier est correct.
        *   Si la recherche ne mène à aucun résultat, c’est probablement que votre fichier est endommagé.
        
        ## Vérifier le CD une fois gravé
        
        Après la gravure sur le CD, il peut toujours exister des erreurs sur le CD (c’est rare mais pas improbable).
        
        Heureusement, les développeurs ont pensé à cela : ils ont placé un fichier **md5sum.txt** à la racine du CD afin de pouvoir **vérifier l’intégrité du CD** ultérieurement.
        
        Vérifier que ce fichier existe, autrement inutile d’aller plus loin.
        
        **Rendez-vous dans le répertoire de votre CD** en ligne de commande :
        
        cd /media/cdrom0
        
        (adaptez selon le point de montage du lecteur CD)
        
        Ensuite, lancez la commande **md5sum** en mode “comparaison automatique” :
        
        md5sum -c md5sum.txt
        
        Cette commande va vérifier la validité du contenu de tous les fichiers.
        
        **Le nombre de fichiers endommagés est indiqué en fin de recherche. Si aucun fichier n’est endommagé, rien n’est indiqué, votre CD est opérationnel.**

 [1]: https://help.ubuntu.com/community/UbuntuHashes "https://help.ubuntu.com/community/UbuntuHashes"