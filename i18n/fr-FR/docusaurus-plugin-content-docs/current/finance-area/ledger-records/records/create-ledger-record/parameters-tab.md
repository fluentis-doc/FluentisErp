---
title: Tab paramètres
sidebar_position: 8
---

Le tabulateur 'Paramètres' est toujours présente en un registre comptable, mais normalement ne faut pas aller à visualiser/gérer parce que l'unique note d'intéresse est l'état défini ou provisoire de l'enregistrement comptable en utilisation: en effet, l'enregistrement comptable 'définitive' continuera à être modifiable (en tout sauf que dans la cause et devise de référence) jusqu'à n'aura pas été imprimé en définitive un livre fiscal obligatoire où la même n'aura pas été utilisée en une clôture automatique des comptes. L'utilisation de l'état 'provisoire' de l'enregistrement (qu'ira à enlever et désactiver le protocole TVA et à énumérer négativement de -1000 l'enregistrement) il peut-être utilisé pour relever en comptabilité les factures à payer en vit avancé ou autre type d'opération périodique à manifestation future (type loyers avances). Entrer dans l'enregistrement à insérer de nouveau l'état définitif ira à réassigner automatiquement le numéro de l'enregistrement et le protocole TVA valable pour la date enregistrement établi (sauf la progressivité du même). On rappelle qu'en comptabilité est présent une procédure de gestion enregistrements provisoires qui permet de gérer en façon plus rapide l'attribution à enregistrement définitive d'un set d'enregistrements provisoires sélectionnés.

Les flag suivants dérivent par la cause comptable:

**Actualisation des soldes**: il doit être toujours laissé établi, ainsi comme **Regrouper le registre TVA** (que simplement vont à regrouper ou non dans le journal les lignes TVA référées au même sous-compte comptable);

**Actualisation automatique CDC, CDP et commandes**: il peut-être d'intéresse pour certains types d'enregistrement manuel, pour lesquels l'utilisateur soit normalement lié à une gestion manuelle des fichiers CDC/CDP: en laissant le flag inséré, en effet, l'ERP ira toujours à réinitialiser les fichiers cités à chaque modification du donné d'origine du livre-journal, ceci pourrait causer la perte de tous les insertions manuels effectués. Cet automatisme, aussi avec le flag n'insérer pas, est de toute façon présente à l'acte de l'insertion de l'enregistrement: vaut en effet pour l'entrée en modification de la même.

Les champs relatifs à la liste noire permettent au contraire de gérer le cas particulier des achats extra-cee (avec cause pas TVA) à résumer dans la déclaration des opérations avec pays à fiscalité privilégiée, en reliant l'enregistrement actuel au mouvement TVA du bon de livraison de douane par lequel lire les valeurs à déclarer.

La grille en dessous, au contraire, visualise l'éventuel enregistrement automatique relié à cet en utilisation: à chaque modification de la première, en effet, la procédure continuera à aligner la deuxième selon la logique des causes automatiques.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'enregistrement. |
| Nouvel enregistrement | Bouton pour créer un nouvel enregistrement. |
| Paramètres d'insertion | Il se réfère aux paramètres d'insertion du livre-journal. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document Manager | Bouton pour la liaison à la gestion documentale. |






