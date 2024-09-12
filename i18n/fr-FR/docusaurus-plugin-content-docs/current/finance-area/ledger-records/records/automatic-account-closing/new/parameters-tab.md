---
title: Tab paramètres
sidebar_position: 2
---

À l'ouverture de la fenêtre 'Comptabilité-Clôture des comptes' dans le premier tab appelé 'paramètres' il faut insérer les filtres de capture des données par les enregistrements et les codes de sous-compte et causes à utiliser dans les écritures du livre-journal.

Les premiers trois champs (date clôture, version et description) en ramenant la date où s'effectue l'opération (n'a aucune influence avec les dates d'enregistrement), le numéro progressif de la clôture, et comme l'utilisateur définit la même opération (typiquement clôture des comptes année...). L'année comptable des paramètres de comptabilité à indiquer sert pour la gestion de la réouverture des écritures de redressement, à activer sur la base du masque avec le flag de 'Virement écritures de redressement': il se réfère à la gestion des mouvements de réattribution des réescomptes et des régularisations aux coûts/produits (les réescomptes seront enregistrés à la même date de l'ouverture des comptes, les régularisations au contraire à la date de l'enregistrement du document d'origine).



Dans les champs de filtre pour dates d'enregistrement et d'exercice il faut insérer les paramètres pour l'individuation des enregistrements à ramener dans le solde comptable: en particulier les dates d'exercice seront relatives aux périodes du bilan (1/1/...-31/12/...), au contraire, le champ 'à date enregistrement' pourrait repousser dans l'exercice successif pour recomprendre les écritures de rectification: on conseille plus simplement de n'établir pas le filtre pour date enregistrement.

Il est après possible d'effectuer le flag pour gérer le solde de clôture et réouverture pour devise de l'animation: se signifie que le programme insère une ligne pour chaque devise de l'animation du sous compte spécifique, en animant le total de la société correcte. Cette possibilité rende nécessaire pour garantir la correction des soldes initials de l'impression 'Relevé de compte en devise'.



Après ces données il faut donner au programme les références aux causes comptables, aux dates d'enregistrement et aux comptes à utiliser dans les opérations de clôture et de réouverture. Ces données (sauf les données d'enregistrent) viennent ramenera utomatiquement insérés à l'intérieur du tableau 'Paramètres decomptabilitè', tab 'Comptes'. Le flag 'Virement écritures de redressement' ira à far créer automatiquement la réouverture des coûts/profits rectifiés avec la procédure 'Écritures de redressement'.



À ce point il est possible d'enregistrer les paramétrages avec le relatif bouton, en façon d'activer les autres présents. Abord d'avancer aux opérations il faut vérifier les paramétrages du tableau 'Types compte': en particulier les types compte de registre client-fournisseur/agents-banques plus d'avoir un flag sur les relatives colonnes doivent avoir un deuxième en un des premiers deux colonnes, relatives à l'actif et passif patrimonial. Il est donc possible de rentrer dans la procédure et de faire repartir la 'Reprise des sous-comptes' avec le bouton relatif, en façon de faire calculer au programme le solde de chaque sous-compte et de présenter dans les dossiers 'profits et pertes' et 'patrimonial' les données relatifs. Une fois sûrs des résultats sont possibles d'avancer à la dernière phase de la procédure: en rentrant dans le dossier paramètres, en effet, on peut cliquer le bouton 'Créer l'enregistrement de la clôture', qui créera les enregistrements comptables relatives et insérera le flag dans le 'Comptabilisée'.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'en-tête de la clôture des comptes, activable après avoir inséré la description. |
| Reprise des valeurs de sous-compte | Bouton pour faire calculer au programme le solde de chaque sous-compte et de présenter dans les dossiers 'produits et pertes' et 'patrimoine' les données relatifs. |
| Créer enregistrement pour la clôture des comptes | Bouton pour créer l'enregistrement de la clôture des comptes. |
| Restaurer la comptabilisation | Bouton pour restaurer la comptabilisation de la clôture des comptes. |






