# AppDistribueeHoraires

Auteurs :   AIGLON Benjamin & LHOEST Lancelot 
            
Service de gestion des horaires - Objectif : création des horaires pour les étudiants. 

3 parties : 

  1 application web (Angular, fichier "app.component.ts"):
  
            - interface graphique: on entre le matricule d'un étudiant et on visualise son horaire
            - logique: des requêtes HTTP sont envoyées à notre serveur ou aux serveurs des autres services (UE et étudiants)
  
  1 base de données (mySQL) : elle contient la liste des UE avec leurs périodes (semaine 1, semaine 5, ...) et locaux
  
  1 serveur (Node.js, fichier "server.js"): il permet de récupérer des informations stockées dans la base de données
  
  -- LOGIQUE --
  
  1ère étape : Entrer le matricule d'un étudiant via l'interface et l'envoyer au service "gestion des étudiants" pour                       l'interroger sur la liste des cours (id) auxquels l'étudiant est inscrit
  
  2ème étape : Envoyer les id au service "gestion des UE" pour récupérer les appelations des UE 
  
  3ème étape : Aller récupérer dans notre base de données la période et le local des UE
  
  4ème : Afficher l'horaire sur base de ces informations
  
  
  Pour l'instant, uniquement l'affichage de l'horaire dans la console a été testé. Le code pour afficher l'horaire dans l'application a également été écrit et il devrait fonctionner, mais par manque de temps il n'a pas encore pu être testé (étant donné que nous devons tous être réunis pour pouvoir faire fonctionner correctement cette application distribuée).
  
  Deux principales améliorations pourraient encore être ajoutées:
  
            - ajouter une fonction pour les professeur, similaire à celle qui récupère la liste des cours (id) auxquels un étudiant est inscrit, qui récupèrerait la liste des cours (id) auxquels un professeur est inscrit.
            - ajouter la possibilité d'ajouter depuis l'application web des nouveaux cours à notre base de données, ayant lieu pendant une certaine semaine et ayant lieu dans un certain local. Ainsi un utilisateur pourrait le faire. Maintenant, on est encore obligé de le faire en ligne de commande en MySQL. Le but de cette fonctionnalité est donc de permettre à notre application d'effectuer des transferts de données bidirectionnels, au lieu d'unidirectionnels comme c'est le cas pour l'instant. Il faut pouvoir faire des requêtes GET et des requêtes POST vers notre serveur. 
  
