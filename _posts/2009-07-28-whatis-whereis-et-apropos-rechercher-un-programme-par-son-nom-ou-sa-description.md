---
title: 'whatis, whereis et apropos : rechercher un programme par son nom ou sa description'
author: Gaetan
excerpt: "<p>Sous GNU/Linux, les pages de manuel sont un moyen de documentation d'un programme.</p> <p>Néanmoins, on peut ne plus se souvenir du <strong>nom</strong> du programme ou on peut aussi vouloir avoir l'<strong>adresse absolue</strong> d'un programme.</p> <p>Heureusement, il existe des outils de recherches.</p>"
layout: post
permalink: >
  /2009/07/whatis-whereis-et-apropos-rechercher-un-programme-par-son-nom-ou-sa-description/
dsq_thread_id:
  - 466373909
categories:
  - Bash Tips
tags:
  - manpages
---
# 

Sous GNU/Linux, les pages de manuel sont un moyen de documentation d’un programme.

Néanmoins, on peut ne plus se souvenir du **nom** du programme ou on peut aussi vouloir avoir l’**adresse absolue** d’un programme.

Heureusement, il existe des outils de recherches.



whatis

et

apropos

permettent de **rechercher un programme par mot clé** dans les noms ou les descriptions des programmes.

whatis

sont approximativement similaire mais

apropos

est un peu moins stricte dans les recherches.

whereis

quand à lui permet d’**obtenir les chemins absolus** vers les **exécutables** du programme ainsi que les **pages du manuel**.

## Exemples

apropos grep

: On obtient toutes les variantes de **grep**

    bzegrep (1)          - search possibly bzip2 compressed files for a regular expression
    bzfgrep (1)          - search possibly bzip2 compressed files for a regular expression
    bzgrep (1)           - search possibly bzip2 compressed files for a regular expression
    egrep (1)            - print lines matching a pattern
    fgrep (1)            - print lines matching a pattern
    grep (1)             - print lines matching a pattern
    grepjar (1)          - search files in a jar file for a pattern
    msggrep (1)          - pattern matching on message catalog
    pgrep (1)            - look up or signal processes based on name and other attributes
    rgrep (1)            - print lines matching a pattern
    zegrep (1)           - search possibly compressed files for a regular expression
    zfgrep (1)           - search possibly compressed files for a regular expression
    zgrep (1)            - search possibly compressed files for a regular expression
    zipgrep (1)          - search files in a ZIP archive for lines matching a pattern

* * *

apropos -e grep

: le mot-clé **grep** est comparé exactement avec le nom des pages et avec leur description.

    grep (1)             - print lines matching a pattern

* * *

whatis grep

: recherche le mot clé exacte “**grep**”

    grep (1)             - print lines matching a pattern

* * *

apropos hp[0-9]{4}$

: **apropos** gère les expressions régulières. Ici je recherche les noms finissant par **“hp” suivit de 4 chiffres**.

    sane-hp3500 (5)      - SANE backend for Hewlett-Packard ScanJet 3500 series scanners
    sane-hp3900 (5)      - SANE backend for RTS8822 chipset based scanners
    sane-hp4200 (5)      - SANE backend for Hewlett-Packard 4200 scanners
    sane-hp5400 (5)      - SANE backend for Hewlett-Packard 54XX scanners
    sane-hp5590 (5)      - SANE backend for Hewlett-Packard 5550/5590/7650 Workgroup/Docume...

* * *

whereis nano

: Recherche les chemins vers les différents exécutables de **nano** ainsi que la page de man.

    nano: /bin/nano /usr/bin/nano /usr/share/nano /usr/share/man/man1/nano.1.gz

* * *A bientôt pour d’autres astuces shell.