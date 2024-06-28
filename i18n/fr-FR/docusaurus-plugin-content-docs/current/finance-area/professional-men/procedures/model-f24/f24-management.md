---
title: Gestion F24
sidebar_position: 2
---

La création du modèle F24 prévoit le chargement d'un nouveau modèle à l'intérieur duquel les données de l'en-tête sont compilés sur la base des références insérées à l'intérieur du tableau 'Société'. La période TVA et la période retenue sont proposées comme le mois actuel: ils seront à indiquer, normalement le mois précédemment pour pouvoir ramener automatiquement dans la déclaration les données du règlement TVA périodique de référence et les divers codes contributions relatifs à lases rémunérations paiées. En particulier, pour ce qui concerne les règlements TVA, il sera recherchée la période mémorisée dans le masque 'Versements TVA' présent en comptabilité générale (où sont mémorisées automatiquement les valeurs du règlement au moment de son impression en définitive: est permis un chargement manuel de la valeur).

Une fois mémorisés les données de l'en-tête d'activera le bouton 'Proposer les valeurs' qui iront à compiler les diverses lignes du premier dossier Trésor public. Une fois compilées manuellement aussi toutes les autres sections de la déclaration, selon la nécessité, il établi le versant/signataire et le parcours de création du fichier seront possible d'exécuter la création du fichier avec le bouton qui ira à créer un fichier avec le nom structuré comme 'Compte TVA société' + '_' + 'Numéro déclaration' + '_' + 'Date déclaration' avec l'extension F24. En cas de données obligatoires manquantessera restitué un message d'erreur explicatif et le fichier n'e sera pas créé.

Il est possible d'annuler la création du fichier avec le bouton de gestion.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Il enregistre le modèle en utilisation. |
| Proposer les valeurs | Il exécute la reprise des données par le versement TVA et par les retenues des rémunérations payés. |
| Visualiser | Il visualise le fichier télématique créé. |
| Nouveau détail | Il établit le curseur dans la grille d'insertion des détails. |
| Supprimer le détail | Il supprime la ligne de détail sélectionnée. |
| Créer le fichier télématique | Il exécute la création du fichier télématique dans la Directory établie. |
| Annuler le fichier télématique | Il supprime le fichier télématique créé. |






