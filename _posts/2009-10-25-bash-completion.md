---
title: 'Bash completion : gérer l&#039;auto-complétion bash d&#039;un programme'
author: Gaetan
excerpt: "<p>Peu de tutoriels existent autour de la programme de script bash permettant la gestion de l'<strong>auto-complétion</strong> et des <strong>suggestions</strong> mais c'est pourtant une chose importante pour tout bon logiciel fréquemment utilisé en ligne de commande.</p> <p>Cela consiste à <strong>compléter les arguments d'une commande en bash</strong> au moyen de la touche tabulation (TAB).</p> <p>Voici donc un petit tutoriel pour commencer le <strong>bash_completion</strong>.</p>"
layout: post
permalink: /2009/10/bash-completion/
dsq_thread_id:
  - 463659470
categories:
  - Tutoriels
tags:
  - bash
  - completion
  - manpages
  - Programming
---
# 

Peu de tutoriels existent autour de la programme de script bash permettant la gestion de l’**auto-complétion** et des **suggestions** mais c’est pourtant une chose importante pour tout bon logiciel fréquemment utilisé en ligne de commande.

Cela consiste à **compléter les arguments d’une commande en bash** au moyen de la touche tabulation (TAB).

Voici donc un petit tutoriel pour commencer le **bash_completion**.



## Requis pour le fonctionnement de bash_completion

### Un terminal bash

Évidemment, sans terminal “bash-compatible”, on ne pourrait pas utiliser le *bash completion* !

### Le packet **bash-completion** installé

Il est **généralement automatiquement installé** sur une majorité des distributions Linux actuelles, à vérifier tout de même.

sudo apt-get install bash-completion

sous ubuntu.

### Un .bashrc adéquat

Votre .bashrc doit contenir l’inclusion de **/etc/bash_completion**.

Par exemple sous Ubuntu cette partie est automatiquement présente dans **~/.bashrc** :

if [ -f /etc/bash_completion ];  
then ./etc/bash_completion  
fi

## Fonctionnement de bash completion

Le fonctionnement global est le suivant :

*   **A chaque demande d’auto-completion** avec la touche TAB, une fonction bash est exécutée.
*   La fonction bash à exécuter est déterminée par la commande **complete**. Pour associer une commande bash à une fonction de *bash completion*, il suffit en effet de faire : **complete -F _mafonction macommandeassocié**.
*   Cette fonction bash comporte un code qui va **traiter l’auto-complétion en fonction du contexte** *(le nombre d’argument, l’argument précédent, les arguments déjà entrés, l’argument actuel en cours de frappe, etc)*. Ce traitement consiste à affecter une valeur à la variable **COMPREPLY** qui sera utilisé par **bash_completion** par la suite. Cette valeur est généralement généré par la commande **compgen**.

## Mode d’emploi de compgen et complete

Voici les informations sur **compgen** et **complete** récupéré depuis les pages manuel de **bash**.

### compgen

**compgen** [option] [mot]

Produit les correspondances des complètements possibles pour mot selon les options, qui peuvent être toute option acceptée par la commande interne **complete** à l’exception de **-p** et **-r** et écrit le résultat sur la sortie standard. Lorsqu’on utilise les options **-F** ou **-C**, les diverses variables de l’interpréteur créées par les outils de complètement programmables, lorsque disponibles, n’auront pas de valeurs utilisables.

Les correspondances seront produites de la même façon que si le programme de complètement programmable les avait produites directement à partir d’une spécification de complètement avec les mêmes attributs. Si mot est spécifié, seules les complètements qui correspondent à mot sont affichés.

La valeur renvoyée est vrai, à moins qu’une option incorrecte ait été fournie ou qu’aucune correspondance n’ait été produite.

### complete

*Version réduite. Plus d’informations dans **man bash**.*

**complete** [**-abcdefgjksuv**] [**-o** option-complètement] [**-A** action] [**-G** glob‐pat] [**-W** liste\_de\_mots] [**-P** prefix] [**-S** suffix] [**-X** motif_filtre] [**-F** fonction] [**-C** commande] nom [nom ...]

**complete -pr** [nom ...]

Spécifie comment les arguments de chaque nom doivent être complétés. Si l’option **-p** est fournie ou si aucune option n’est fournie, les spécifications de complètement existantes sont affichées de telle façon qu’elles puissent être réutilisées comme entrée. L’option **-r** retire une spécification de complètement à chaque nom fourni ou, si aucun nom n’est fourni, toutes les spécifications de complètement.

Le processus d’application de ces spécifications de complètement lorsqu’un complètement de mot est tenté est décrit plus haut dans **Complètement programmable**.

Les autres options, si spécifiées, ont les significations suivantes. Les arguments des options **-G**, **-W** et **-X** (et, si nécessaire, les options **-P** et **-S**) devraient être protégées pour leur éviter le développement avant que la commande interne **complete** soit appelée.

**-o** option-complètement

L’option-complètement commande plusieurs aspects du comportement des spécifications de complètement au-delà de la simple production de complètement.

option-complètement peut être l’une des suivantes :

**bashdefault, default, dirnames, filenames, nospace, plusdirs**

** -A** action

L’action peut être l’une des suivantes pour produire une liste des complètements possibles :

**alias, arrayvar, binding, builtin, command, directory, disabled, enabled, export, file, function, group, helptopic, hostname, job, keyword, running, service, setopt, shopt, signal, stopped, user, variable**

**-G** globpat

Le motif de développement des noms de fichiers globpat est développé pour produire les complètements possibles.

**-W** liste\_de\_mots

La liste\_de\_mots est découpée en utilisant les caractères de la variable spéciale **IFS** comme délimiteurs et chaque mot résultant est développé. Les complètements possibles sont les éléments de la liste résultante qui correspondent au mot en cours de complètement.

**-C** commande

La commande est exécutée dans un environnement de sous-interpréteur et sa sortie est utilisée comme complètements possibles.

**-F** fonction

La fonction de l’interpréteur est exécutée dans l’interpréteur courant. Lorsqu’elle finit, les complètements possibles sont récupérés à partir de la valeur de la variable de type tableau **COMPREPLY**.

**-X** motif_filtre

motif_filtre est un motif utilisé pour le développement des noms de fichiers. Il est appliqué à la liste des complètements possibles produite par les options et arguments précédents et chaque complètement correspondant à motif_filtre est supprimé de la liste. Un ! au début du motif_filtre inverse le motif ; dans ce cas, tout complètement qui ne correspond pas à motif_filtre est supprimé.

**-P** prefix

prefix est ajouté au début de chaque complètement possible après que toutes les autres options ont été appliquées.

**-S** suffix

suffix est ajouté à chaque complètement possible après que toutes les autres options ont été appliquées.

La valeur renvoyée est vrai, à moins qu’une option incorrecte ait été fournie, qu’une option comme **-p** ou **-r** ait été fournie sans un nom d’argument, qu’une tentative ait été faite pour supprimer une spécification de complètement pour un nom pour lequel il n’existe pas de spécification, ou bien qu’une erreur soit survenue lors de l’ajout d’une spécification de complètement.

## Pratique

Dans nos exemples, nous utiliserons la commande **grenlibre** (qui n’existe pas) pour l’auto-complétion.

### Hello world en completion

#### Code de **hello_world.sh** :

# Fonction de notre auto completion  
_grenlibre()  
{  
# declaration des variables locales  
local args cur opts  
  
#COMPREPLY désigne la réponse à renvoyer pour la complétion actuelle  
COMPREPLY=()  
  
# argc : vaut le nombre d'argument actuel sur la ligne de commande  
argc=${COMP_CWORD}|>  
  
# cur  : désigne la chaine de caractère actuelle pour le dernier mot de la ligne de commande  
cur="${COMP_WORDS[argc]}"  
  
# les options possibles pour notre auto-complétion  
opts="Hello world"  
  
# on auto-complete la ligne de commande en recherchant cur dans la liste opts.  
COMPREPLY=( $(compgen -W "$opts" -- $cur ) )  
#A noter que le -- est important ici pour éviter les "injections d'options" depuis $cur.  
}  
  
# On active l'auto-completion de la commande grenlibre en relation avec la fonction _grenlibre  
complete -F _grenlibre grenlibre

#### Exécution

On exécute notre script avec la commande :

. hello_world.sh

(ici le **** est important avec **hello_world.sh**).

Dans le cas où l’on voudrait rendre définitif notre script, c’est à dire ne pas avoir à retaper

. hello_world.sh

à chaque fois, on pourra le déplacer dans **/etc/bash_completion.d/**, répertoire automatiquement exécuté à l’initialisation d’un terminal bash.

#### Test de l’auto-complétion

C’est bien beau d’avoir programmé notre script mais il faudrait peut-être aussi le tester !

*   **grenlibre **

$ grenlibre Hello  world

affiche la liste des options **opts**. Ici **Hello** et **world**.

*   **grenlibre Hel**

$ grenlibre Hello

Complète “Hel” par “Hello” grâce à la liste des options **opts**.

### Assembleur

Réalisons maintenant l’auto-complétion d’un programme du genre assembleur / compilateur tel que gcc, as. Nous l’appellerons encore **grenlibre**.

#### Analyse des usages

Supposons que ce programme nous propose plusieurs usages en ligne de commande :

*   grenlibre 
*   grenlibre  -output 
*   grenlibre -output  

mais aussi avec plusieurs fichier sources :

*   grenlibre  [ ...]
*   grenlibre [ ...] -output  [ ...]

On peut penser à d’autres options…

*   grenlibre -help

##### Ce qui nous donne le pseudo code suivant

*   si le mot commence par “-”, on va **auto-compléter les options**
*   sinon **si le dernier argument n’était pas un argument d’option**, il faut **auto-compléter les fichiers .src** depuis le répertoire actuel.

#### Code de **assembleur.sh**

# Fonction de notre auto completion  
_grenlibre()  
{  
local argc cur prev opts  
COMPREPLY=()  
  
argc=${COMP_CWORD}|> # nombre d'arguments actuel  
cur="${COMP_WORDS[argc]}" # argument actuel (en cours de frappe)  
prev="${COMP_WORDS[argc-1]}" # argument précédent  
opts="-output -help" # liste des options  
  
# si le mot commence par "-"  
if [[ "$cur" == -* ]] ; then  
  
# On auto-complète l'argument actuel à l'aide de la liste d'options opts  
COMPREPLY=( $(compgen -W "$opts" -- $cur ) )  
  
else # sinon  
  
# si le dernier argument n'était pas un argument option  
if [[ "$prev" != -* ]] ; then  
  
# On auto-complète l'argument actuel avec les fichiers .src  
COMPREPLY=( $(compgen -f -X "!*.src" $cur ) )  
  
fi  
  
fi  
}

# On active l’auto-complétion de la commande grenlibre en relation avec la fonction _grenlibre  
complete -F _grenlibre grenlibre

#### Exécution

Comme précédemment, il suffit d’utiliser la commande

. assembleur.sh

.

#### Test de l’auto-complétion

Mon dossier actuel comporte 3 fichiers .src : *algo.src*, *graphic.src*, *main.src* et les 2 scripts *assembleur.sh* et *hello_world.sh*.

*   **grenlibre** 

    $ grenlibre algo.src     graphic.src  main.src

Il propose la liste des fichiers .src de ce répertoire.

*   **grenlibre ma**

    $ grenlibre main.src

Auto-complétion effectuée.

*   **grenlibre main.src -**

    $ grenlibre main.src --help    -output

Il propose la liste des options.

*   **grenlibre main.src -output **

Aucune complétion ici, c’est bien le résultat voulu.

*   **grenlibre main.src -output a.out a**

    $ grenlibre main.src -output a.out algo.src

Notez que **assembleur.sh** commence également par a, mais que algo.src a été complété. En effet seul les fichiers .src sont pris en compte autant dans l’affichage de suggestions que l’auto-complétion.

*   **grenlibre main.src -output a.out algo.src g**

    $ grenlibre main.src -output a.out algo.src graphic.src

Voila le résultat en quelque pressions de touches. Efficace, non ?

## Conclusion

Vous voici donc lancé dans le bash_completion !

Pour continuer, vous pouvez en exercice tenter de refaire le fonctionnement de bash_completion déjà existant et ensuite comparer vos codes avec les fonctions existantes.

Vous trouverez votre bonheur dans **/etc/bash_completion** et dans le dossier des scripts **/etc/bash_completion.d/**.

Vous pouvez aussi voir la liste des complete effectué avec

complete -p

et la liste des fonctions incluses avec

define -f

. N’hésitez pas à ajouter un

 | less

en fin de commande pour naviguer facilement dans le résultat.

Bonne continuation, toute remarque est la bienvenue.

## Références

*   [An\_introduction\_to\_bash\_completion\_part\_1][1]
*   [An\_introduction\_to\_bash\_completion\_part\_2][2]
*   **man bash**

 [1]: http://www.debian-administration.org/article/An_introduction_to_bash_completion_part_1
 [2]: http://www.debian-administration.org/article/An_introduction_to_bash_completion_part_2