---
title: Lire un fichier audio en cours de téléchargement sous Firefox
author: Gaetan
excerpt: |
  <p>Le téléchargement de podcasts audios <acronym title="pesant plusieurs centaines de Mo">lourds</acronym> est souvent long et fastidieux. Vous auriez peut-être envie de commencer à <strong>écouter le podcast durant son téléchargement</strong> sous Firefox.</p> <p>L'astuce qui suit <strong>fonctionne avec toutes les plateformes de téléchargement</strong> telles que <em>megaupload</em>, <em>depositfiles</em>, <em>rapidshare</em>, ...</p> <p>Elle <strong>concerne le système Linux</strong> au moyen de <code>mplayer</code> mais est tout aussi <strong>applicable sur d'autres systèmes d'exploitation</strong>.</p>
layout: post
permalink: /2009/08/lire-un-fichier-audio-en-cours-de-telechargement-sous-firefox/
dsq_thread_id:
  - 464623967
categories:
  - Bash Tips
tags:
  - audio
  - firefox
  - mplayer
  - téléchargement
---
# 

Le téléchargement de podcasts audios lourds est souvent long et fastidieux. Vous auriez peut-être envie de commencer à **écouter le podcast durant son téléchargement** sous Firefox.

L’astuce qui suit **fonctionne avec toutes les plateformes de téléchargement** telles que *megaupload*, *depositfiles*, *rapidshare*, …

Elle **concerne le système Linux** au moyen de

mplayer

mais est tout aussi **applicable sur d’autres systèmes d’exploitation**.



Lorsque vous téléchargez un fichier sous Firefox, un **fichier temporaire .part** est créé à côté du fichier en cours de téléchargement et contient en réalité **le contenu du téléchargement**.

* * *

## L’astuce

*   **Ouvrez un Terminal**.




*   **Déplacez vous dans le dossier** contenant votre podcast en téléchargement.

chez moi:

cd Bureau/ 

*   **Lisez le fichier .part de votre podcast avec mplayer** (ou avec un autre lecteur de flux audio selon le système d’exploitation).

Par exemple :

mplayer monfichieraudio.mp3.part 

* * *

Voilà c’est tout ! Vous êtes en train de lire le fichier en cours de téléchargement. Si votre téléchargement à suffisamment d’avance, vous pouvez avancer dans la lecture du podcast avec la **flèche de droite** mais attention, si vous dépassez l’avancement actuel du téléchargement, la musique s’arrêtera.