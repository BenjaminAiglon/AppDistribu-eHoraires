# AppDistribueeHoraires

Auteurs :   AIGLON Benjamin
            LHOEST Lancelot 
            
Service de gestion des horaires - Objectif : création des horaires pour les étudiants. 

3 parties : 

  1 interface graphique : on entre le matricule d'un étudiant et on visualise son horaire 
  1 base de données (mySQL) : elle contient la liste des UE avec leurs périodes (semaine 1, semaine 5, ...) et locaux
  1 serveur : récupération des informations des autres parties via API Http / Logique de l'application
  
  -- LOGIQUE --
  
  1ère étape : Entrer le matricule d'un étudiant via l'interface et l'envoyer au service "gestion des étudiants" pour l'intéroger sur la liste des cours (id) auxquels l'étudiant est inscrit
  
  2ème étape : Envoyer les id au service "gestion des UE" pour récupérer les appelations des UE 
  
  3ème étape : aller récupérer dans notre base de données la période et le local des UE
  
  4ème : Afficher l'horaire sur base de ces informations 
  
