---
title: 'Automatiser l&#039;exportation d&#039;un site statique avec wget'
author: Gaetan
layout: post
permalink: /2010/04/automatiser-lexportation-dun-site-statique-avec-wget/
dsq_thread_id:
  - 465092035
categories:
  - Tutoriels
  - Web
tags:
  - webmaster
  - wget
---
# 

Il est préférable d’**utiliser un framework web** même si l’on veut réaliser un **site vitrine simple (statique)**, car l’on bénéficie des avantages du framework notamment de l’héritage (entre autre) des templates, de l’internationalisation, de la configuration des *routes*, du *SASS*, etc.

De plus, cela permet de rendre la maintenabilité moins longue et couteuse.

Néanmoins, son hébergeur ne permet pas toujours de faire tourner son site avec le framework utilisé (par exemple *ruby on rails* ou *play! framework*).

Pour remédier à ce problème, il suffit d’**exporter son site statique en simples pages HTML**.

Cet article est donc destiné aux particuliers ne voulant pas investir dans un serveur dédié, fans de framework avancés qui ne sont pas supportés par les offres d’entrée de gamme des hébergeurs (qui n’offrent généralement que le support du php). 



**D’ailleurs, pour ce type de site, pourquoi utiliser un framework MVC si l’on utilise que des vues ?**

## La démarche

### Le site web

**Réalisez le site** avec votre framework préféré et faites en sorte que la page principale (**/**) **permette l’accès à toutes les pages du site** par des liens (pas forcément directs).

### Exportation

Avec **wget** récupérez votre site à la ligne de commande :

wget -r -k -np "http://localhost:9000/"

A l’instar d’un moteur de recherche, c’est cette commande qui va s’occuper de **retracer toutes les pages web de votre site**, mais aussi toutes ses ressources (images, css, js, ..). En plus de cela, elle va **préserver le fonctionnement des liens** entre pages. 

Adaptez *http://localhost:9000/* à l’url de votre site.

Cela va créer le dossier *localhost:9000*, il ne vous restera plus qu’à l’envoyer sur votre serveur http.

## Internationalisation

Voici une solution pour exporter son internationalisation.

Elle consiste à rediriger l’utilisateur, depuis la page principale, sur la bonne page internationalisée en fonction de sa langue (indiquée par le navigateur), tout **en gardant les fichiers publics en commun** (css, images).

### Préparer ses routes

préparez les uri pour qu’elles soient de la forme **/{lang}/*/** avec **lang** désignant la langue désirée.

#### Exemples de routes

/en/  
/en/about/  
/fr/  
/fr/about/

### Ajouter des liens dans les templates pour changer de langue

Cette action est délicate car, comme précisé auparavant, **wget** essaye de retracer tous les liens entre pages.

Ainsi, si l’on crée des liens entre les différentes langues, **wget** créera un dossier *public* pour chaque langue internationalisée. 

Pour contourner ce problème et ainsi factoriser les fichiers communs, **une solution est de créer les liens à posteriori**.

#### Solution exemple avec play framework

  
#{if lang!='en'}  
  english version  
#{/if}  
#{if lang!='fr'}  
  french version  
#{/if}  


#!/bin/bash  
# script bash  
wget -r -k -np "http://localhost:9000/"  
sed -i s/ADD\_HERE\_ENGLISH\_LINK\_ATTRIBUTES/href="\/en\/"/g $(find . -name "*.html")  
sed -i s/ADD\_HERE\_FRENCH\_LINK\_ATTRIBUTES/href="\/fr\/"/g $(find . -name "*.html")

### Préparer une page de redirection

**Placez à posteriori un script de redirection à l’url /** pour rediriger vers la page adéquat.

#### Par exemple un script php



## Exemple

Mon [site professionnel][1] est développé et maintenu avec [Play! framework][2] et exporté en suivant ces mêmes astuces.

 [1]: http://pro.grenlibre.fr/
 [2]: http://playframework.org/