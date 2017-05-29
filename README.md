# AppDistribueeHoraires

Auteurs :   AIGLON Benjamin & LHOEST Lancelot 
            
Service de gestion des horaires - Objectif : création des horaires pour les étudiants. 

3 parties : 

  1 application web (Angular, fichier "app.component.ts"):
  
     interface graphique: on entre le matricule d'un étudiant et on visualise son horaire
     logique: des requêtes HTTP sont envoyées à notre serveur ou aux serveurs des autres services (UE et étudiants)
  
  1 base de données (mySQL) : elle contient la liste des UE avec leurs périodes (semaine 1, semaine 5, ...) et locaux
  
  1 serveur (Node.js, fichier "server.js"): il permet de récupérer des informations stockées dans la base de données
  
  -- LOGIQUE --
  
  1ère étape : Entrer le matricule d'un étudiant via l'interface et l'envoyer au service "gestion des étudiants" pour                       l'interroger sur la liste des cours (id) auxquels l'étudiant est inscrit
  
  2ème étape : Envoyer les id au service "gestion des UE" pour récupérer les appelations des UE 
  
  3ème étape : Aller récupérer dans notre base de données la période et le local des UE
  
  4ème : Afficher l'horaire sur base de ces informations
  
  
  Pour l'instant, uniquement l'affichage de l'horaire dans la console a été testé. Le code pour afficher l'horaire dans l'application a également été écrit et il devrait fonctionner, mais par manque de temps il n'a pas encore pu être testé (étant donné que nous devons tous être réunis pour pouvoir faire fonctionner correctement cette application distribuée).
  
Pour compléter ce travail, une fonctionnalité pourrait être développer :
  
Modification de l'interface pour que les professeurs puissent également avoir accès à leur horaire et qu'il puisse le                           modifier si besoin

  
