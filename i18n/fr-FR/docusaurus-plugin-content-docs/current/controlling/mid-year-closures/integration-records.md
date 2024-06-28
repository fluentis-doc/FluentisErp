---
title: Écritures d'intégration
sidebar_position: 14
---

À l'intérieur du formulaire Clôtures intermédiaires, est possible de sélectionner l'écriture d'intégration. Le masque permet de gérer séparément les opérations d'intégration qui sont possibles d'exécuter à la création d'une nouvelle clôture intermédiaire.

Pour gérer la procédure est suffisant établir la clôture de référence, la date de début d'exercice de référence, le type de calendrier à utiliser (on conseille de laisser le calendrier solaire) et la cause à utiliser (qui doit avoir le flag CDC/CDP par gérer l'intégration des centres de coût/profit).

Avec cette procédure le système vérifiera, à partir de la 'Date de début exercice par les écritures d'intégration', les lignes de coût/profit présents en comptabilité et pas insérée dans la clôture (c'est-à-dire enregistrements au-dehors de la gamme de dates enregistrement/exercice établies au moment de la reprise de la comptabilité), par créer les régularisations des jours à l'intérieur de la gamme de dates d'exercice économique. Les sous-compte de régularisation à utiliser seront ceux insérés dans le plan des comptes en correspondance de chaque sous-comptes de coût/profit ou le sous-compte générique inséré dans les paramètres de comptabilité de l'année de la clôture intermédiaire. Est présent un bouton de restauration/supprimation des mouvements déjà relevés par cette procédure.

Cette procédure est particulièrement importante quoi qui concerne la date de début à établir, parce que normalement cette date sera établi égal à la date de la dernière ouverture des comptes relevée en comptabilité. Par exemple: si l'utilisateur est en train de créer la clôture du premier trimestre de la période comptable, les dates seront typiquement 01/01/année - 31/03/année et s'il y a la reoverture des comptes d'exercice, ce signifiera qu'à l'intérieur de cette gamme il sera directement le virement coût/profit des régularisations relevées dans le bilan 'année-1' et donc la date de début par les intégrations devront être établie comme 01/01/année de sorte que le logiciel vérifie si après le 31/03 il y a des lignes avec compétence du trimestre précédent. S'il n'y a pas l'ouverture, il faudra établir la date de début comme 01/01/année-1 par s'assurer que l'ERP vérifie se aussi en tout l'exercice précédent existe coût/profit du trimestre initial de cette période d'exercice. Si l'utilisateur a déjà relevé manuellement en comptabilité aux31/12/année-1 la régularisation de la période, l'écriture d'intégration pourrait causer la double révélation de la régularisation d'exercice.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Effectuer les écritures | Exécuter la relevé extra-comptable des écritures d'intégration par la clôture sélectionnée. |
| Supprimer les écritures | Supprimer les enregistrements extra-comptables d'intégration par la clôture sélectionnée. |






