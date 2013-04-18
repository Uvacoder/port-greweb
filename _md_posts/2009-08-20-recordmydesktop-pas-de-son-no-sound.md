---
title: 'RecordMyDesktop : pas de son (no sound) : Solution'
author: Gaetan
excerpt: |
  <p>L'application <strong>RecordMyDesktop</strong> (sous Linux) qui permet le <acronym title="enregistrement audio/vidéo de l'écran">screencast</acronym> ne fonctionne pas toujours concernant l'<strong>enregistrement du son</strong>.</p> <p>Ce billet vous permettra peut-être de résoudre ce problème...</p>
layout: post
permalink: /2009/08/recordmydesktop-pas-de-son-no-sound/
dsq_thread_id:
  - 463659293
categories:
  - GNU/Linux
tags:
  - audio
  - recordmydesktop
  - solution
---
# 

L’application **RecordMyDesktop** (sous Linux) qui permet le screencast ne fonctionne pas toujours concernant l’**enregistrement du son**.

Ce billet vous permettra peut-être de résoudre ce problème…



Après quelques manipulations, j’ai réussi à régler mon problème d’enregistrement de son sous **gtk-recordmydesktop**.

Personnellement, J’utilise **Linux Ubuntu 9.04** *(fraichement installé donc configuration de défaut)*, avec la carte son **Realtek ALC850**.

## Solution

### Version graphique (avec gtk-recordmydesktop)

*   Au menu de l’application, **cliquez sur *Avancé***.
*   Sélectionnez l’onglet *Son*.
*   Dans *Périphérique*, vous avez normalement par défaut le mot DEFAULT
    
    . **Remplacez-le par hw:1,0
    
    . 
    *   Fermez la fenêtre *Avancé*. Faites un essai d’enregistrement. Normalement le son qui sort de vos enceintes et même le son du microphone est **correctement enregistré**.
    *   Si cela ne fonctionne pas, essayer à la place de hw:1,0
        
        de mettre
        
        hw:0,0
        
        .  
        #### Une image vaut mieux que des mots
        
        ![][1]
        
        ### Version console
        
        *   L’astuce revient à utiliser l’option : **-device hw:1,0**
        
        Donc par exemple :
        
        recordmydesktop -device hw:1,0
        
        * * *J’espère que cette astuce vous a permis de résoudre ce problème.

 [1]: http://data.greweb.fr/blog/image/recordmydesktop-no_sound_fixed.png