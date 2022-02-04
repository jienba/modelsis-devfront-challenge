# modelsis-devfront-challenge
Test Technique Dev front Modelsis

## Introduction
Ce projet est un test technique dont le but est d'intégrer une maquette d'application de Méteo.
Les données nous proviennent d'une API Rest  dont il faut faire la consommation.

## Stack
Pour mener à bien ce test technique, nous utilisons la version lts 14.18.1 de NodeJS et la version 12.2.15 d'Angular.

## Découpage de notre maquette
Ci-dessous, voici un découpage simple de notre application.


![](../Maquette_Test_Technique.png)
Dans ce découpage, nous avons trois parties composants distincts:
- une partie de gauche responsable de l'affichage des informations  telles que la température, le temps(climat) actuel, la date ainsi que la ville dont on récupère les informations.  
- Dans la deuxième partie (en haut à droite), nous affichons les prévisions climatiques des cinq  jours à venir
- Enfin dans la troisième partie nous présentons les autres données météorologiques comme l'humidité, la vitesse du vent, sa direction, etc.

## Contraintes
Durant le développement de l'application, par moment l'API [MetaWeather ](https://www.metaweather.com/) présentait quelques soucis en retournant une erreur de type [403](https://en.wikipedia.org/wiki/HTTP_403).
Si vous rencontrez des difficultés avec le CORS lors de l’appel au API de metaweather vous
pouvez utiliser https://cors-anywhere.herokuapp.com/corsdemo pour palier à cette erreur.

## Comment lancer le projet?
Après avoir cloné le project, executer la commande `npm install` pour installer les dépendances du projet.
Enfin, lancer la commande `ng serve` pour lancer le projet

#### Enjoy 😇 🤛
