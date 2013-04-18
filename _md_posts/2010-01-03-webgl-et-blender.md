---
title: WebGL et blender
author: Gaetan
excerpt: "<p>Voici une impressionnante démonstration d'une scène 3D (réalisée sous blender) dans un navigateur web, et ceci sans plugin supplémentaire (contrairement au flash) mais grâce à WebGL (canvas 3D), une API javascript utilisant <strong>openGL</strong>.</p>"
layout: post
permalink: /2010/01/webgl-et-blender/
dsq_thread_id:
  - 466393758
categories:
  - Infographie libre
tags:
  - blender
  - GLGE
  - Web
  - WebGL
---
# 

Voici une impressionnante démonstration d’une scène 3D (réalisée sous blender) dans un navigateur web, et ceci sans plugin supplémentaire (contrairement au flash) mais grâce à WebGL (canvas 3D), une API javascript utilisant **openGL**.



## Qu’est ce que GLGE?

**GLGE** est une bibliothèque graphique facilitant l’utilisation de **WebGL**. Rappelons que WebGL est une API Javascript permettant d’accéder à openGL sur un navigateur web et ainsi de bénéficier de l’accélération 3D de la carte graphique et ceci sans aucun plugin.

**GLGE est donc une surcouche à WebGL** de plus haut niveau, permettant ainsi d’accélérer le développement.

[Site internet][1]

 [1]: http://www.glge.org

## Démonstrations

La démonstration de WebGL avec GLGE est disponible ici : [http://www.glge.org/demo/][2]. **Son chargement nécessite un navigateur très récent**, c’est à dire : un nightly builds de firefox ou de web kit ([plus d’informations ici][3]).

 [2]: http://www.glge.org/demo/ "http://www.glge.org/demo/"
 [3]: http://www.glge.org/getting-webgl/

Autrement vous pouvez visionner un screencast de la page web en question :

## Utilisation

### Depuis blender

L’exportation d’une scène sous blender se fait grâce aux scripts **objectexport.py** et **skelexport2.py** respectivement pour exporter les **objets** et les **armatures** (disponibles à la racine du projet GLGE).

Elle est encore **incomplète** (car elle concerne uniquement les objets et les armatures) mais on peux imaginer d’ici quelques mois l’arrivée de scripts permettant l’exportation instantanée d’une** scène entière de blender** (c’est à dire les models, les textures, les animations, les blocs logic du GameEngine) vers un contenu web.