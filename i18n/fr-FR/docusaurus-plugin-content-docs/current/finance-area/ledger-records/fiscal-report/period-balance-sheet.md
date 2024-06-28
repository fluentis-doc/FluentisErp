---
title: Bilan d'exercice
sidebar_position: 1
---

Ce rapport a la fonction de présenter un tableau base du bilan d'entreprise, en subdivisant par défaut les quatre sections actif/passif/coûts/produits typiques. On souligne que le rapport fonctionne uniquement pour date d'exercice comptable insérée dans l'en-tête de l'enregistrement, indépendamment donc par la date d'enregistrement de la même au livre journal.

Sous il y a diverses options prévues dans le masque:

**Visualisation montantes signe négative**: s'établit l'ERP insérera chaque sous-compte dans la section d'appartenance (selon son type compte) avec éventuellement le signe négatif au moment que le solde soit dans la section. Si le flag n'est pas permis, comme par défaut, chaque sous-compte sera visualisé dans la section relative à son solde;

**Détail du registre**: par défaut l'ERP excluait tout le détail des sous-comptes reliés aux clients/fournisseurs et aux agents. Seul avec les flags relatifs seront visualisés les détails de ces sous-comptes de registre;

**Exclure les comptes d'ordre**: les comptes d'ordre sont visualisés en chaux aux sections de l'actif et passif. Avec ce flag les comptes d'ordre ne seront pas visualisés dans le rapport. On rappelle, en particulier, que les comptes d'ordre ne sont jamais objet de clôture/ouverture des comptes dans la procédure automatique de l'ERP;

**Comparaison année précédente**: avec cette option il sera exécuté le rapport CA_BilancioAnnoPre.rpt qui prévoit la colonne de l'année en cours et une pour le solde de la même période mais de l'année précédent à cet établi comme filtre;

**Exclure la cause**: s'ils ont été relevés les enregistrements de clôture des comptes, pour obtenir les soldes de bilan il faudra exclure les mouvements basés sur la cause de la même clôture. Exécuter le rapport sans exclure cette donnera un rapport avec tous les soldes à zéro (sauf les comptes d'ordre pour ce dit sur): cette peut être utilisée comme contrôle de vérification de l'effectif bonne fin des opérations de clôture des comptes effectués.

Il est possible d'insérer dans l'impression aussi les mouvements qui dérivent par les enregistrements provisoires.

Une dernière annotation concerne autres deux fichiers associables à travers la gestion des impressions à la procédure: le rapport CA_BilancioSezioni.rpt visualise le bilan à sections opposées, le rapport CA_BilancioGruppi.rpt au contraire visualise la structure de plan des comptes avec les relatifs résultats des regroupements des divers comptes.

On rappelle, de toute façon, que la maximum flexibilité de ré classification (p .ex. bilan selon IV directive CEE) s'obtient en utilisant le formulaire Bilan et les relatifs modèles de reclassement.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Aperçu avant impression | Bouton pour exécuter l'aperçu avant impression du bilan d'exercice. |
| Impression | Bouton pour exécuter l'impression physique du bilan d'exercice. |






