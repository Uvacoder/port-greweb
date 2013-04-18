---
title: How to deploy your play applications on ArchLinux with daemons
author: Gaetan
layout: post
permalink: /2011/10/how-to-deploy-your-play-applications-on-archlinux-with-daemons/
topsy_short_url:
  - 
meta_description:
  - 'This video shows how to run different instances of Play framework server in the most Linux friendly way: using daemons. Example with ArchLinux, using yaourt, the playframework AUR package and nginx.'
dsq_thread_id:
  - 463659739
categories:
  - GNU/Linux
  - Tutoriels Vidéos
  - Web
tags:
  - archlinux
  - GNU/Linux
  - playframework
---
# 

This video shows how to run different instances of [Play framework][1] server in the most Linux friendly way: using daemons. Example with ArchLinux, using yaourt, the [playframework AUR package][2] and [nginx][3].

 [1]: http://playframework.org
 [2]: http://aur.archlinux.org/packages.php?ID=45541
 [3]: http://nginx.org



# Some links

*   [Play framework website][1]
*   [Play framework Archlinux documentation][4]
*   [Play framework AUR package][2]

 [4]: https://wiki.archlinux.org/index.php/Play_framework



# Abstract summary

## Introduction

Existing Platform as a Service: [Playapps.net][5], [Heroku.com][6].

 [5]: http://playapps.net
 [6]: http://heroku.com

Our needs are quite different: you sometimes need to have your own server on your own infrastructure and not depending on third party web services.

Let’s see how to deploy some play applications from scratch with ArchLinux.

## Requirement

[Install ArchLinux on your server][7]

 [7]: http://archlinux.org

[Install yaourt][8]

 [8]: http://archlinux.fr/yaourt-en

## Installation

yaourt -S playframework

## Creating 2 play framework applications

mkdir sites && cd sites  
play new app1  
play new app2 # editing app/views/

## Configuring daemons

cd /etc/rc.d  
ln -s skeleton_playapp app1  
ln -s skeleton_playapp app2  
cd /etc/conf.d  
cp playapp_sample app1  
cp playapp_sample app2  
vim app1 # configure variables  
vim app2 # configure variables

For app1 :

PLAY_APP=/home/gre/sites/app1  
PLAY_USER=gre  
PLAY_ARGS="--%prod --http.port=9001" 

For app2 :

PLAY_APP=/home/gre/sites/app2  
PLAY_USER=gre  
PLAY_ARGS="--%prod --http.port=9002" 

## Starting daemons

rc.d start app1  
rc.d start app2

Make it permanent in /etc/rc.conf by adding them in the DAEMONS variable.

...  
DAEMONS=(... app1 app2) 

## Nginx, as a front end proxy server

Install nginx using pacman.

Edit /etc/nginx/conf/nginx.conf

...  
    server {  
        listen 80;  
        server_name app2.archdemo;  
        location / {  
          proxy_pass http://127.0.0.1:9002;  
          proxy\_set\_header Host $host;  
          proxy\_set\_header X-Forwarded-For $proxy\_add\_x\_forwarded\_for;  
          proxy\_set\_header X-Forwarded-Host $host;  
          proxy\_set\_header X-Forwarded-Port $server_port;  
          proxy\_set\_header X-Forwarded-Proto https;  
        }  
    }  
    server {  
        listen 80;  
        server_name app1.archdemo;  
        location / {  
          proxy_pass http://127.0.0.1:9001;  
          proxy\_set\_header Host $host;  
          proxy\_set\_header X-Forwarded-For $proxy\_add\_x\_forwarded\_for;  
          proxy\_set\_header X-Forwarded-Host $host;  
          proxy\_set\_header X-Forwarded-Port $server_port;  
          proxy\_set\_header X-Forwarded-Proto https;  
        }  
    }  
...