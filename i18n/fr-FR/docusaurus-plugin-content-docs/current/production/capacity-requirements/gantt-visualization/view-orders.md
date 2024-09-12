---
title: Visualiser les ordres
sidebar_position: 4
---

La fenêtre 'Visualiser les ordres' est composée par 2 tab identiques, chacun desquelles est formée par 2 grilles. La grille inférieure si base à ce qu'on sélectionne dans la grille supérieure.

Dans le premier tab, appelé 'Ordres en Gantt', ils viennent visualiser, dans la grille supérieure, une ligne pour chaque phase de chaque ordre de production intéressé par l'emploi du centre de travail où par l'histogramme on est partis pour exploser la fenêtre en objet.

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Type ordre**: la colonne visualise le type de document; il peut être 'Exécutif', 'Lancé' et , s'on se réfère à l'ordre planifié, 'Planifié';

**Commandes de production**: la colonne visualise l'année et le numéro de la commande de production d'où a été engendré l'ordre. La colonne résulte vide si l'ordre planifié a été engendré manuellement ou si provient par le traitement MRP;

**Code type commande**: la colonne visualise le Code du type commande de production;

**Description type commande**: la colonne visualise la Description du type commande de production;

**Ordre**: la colonne visualise le numéro de l'Ordre planifié ou de production;

**Code type ordre**: la colonne visualise le code du type ordre planifié;

**Description type ordre**: la colonne visualise la description du type ordre planifié;

**Date début ordre**: la colonne visualise la date prévue de début de l'ordre planifié ou de production; cette date représente la date de prévue début de la prémier phase de travail du cycle de l'article;

**Date fin ordre**: la colonne visualise la date de prévue fin de l'ordre planifié ou de production; cette date représente la date de prévue fin de la dernière phase de travail du cycle de l'article;

**Exec Order**: la colonne a la valeur '0' si l'ordre n'a pas été signalé, la valeur '1' si a déjà subi des signalisations de production;

**Classe**: la colonne visualise la classe de l'article objet de l'ordre;

**Code article**: la colonne visualise le code de l'article objet de l'ordre;

**Description article**: la colonne visualise la description de l'article objet de l'ordre planifié;

**Variante**: la colonne visualise l'éventuelle variante de l'article;

**Description variante**: la colonne visualise l'éventuelle description variante de l'article;

**Code/Description zone de livr.**: les colonnes visualisent l'éventuel code et description de la zone de livraison;

**Phase de production**: la colonne visualise les codes de phase et sous-phase de la phase de production;

**Description phase**: la colonne visualise la description de la phase de production;

**Temps CDT**: la colonne visualise le total du temps que le Centre de travail par laquelle on est partis dédit à cette phase;

**%**: la colonne visualise les valeurs du temp en termes pourcentages sur le total de la capacité productive disponible pour ce jour;

**Article, Description, Variante, Description variante premier niveau**: les colonnes visualisent les informations relatives à la production infini de premier niveau présent dans la base de donnéés;

**Quantité**: la colonne visualise la quantité de l'ordre planifié de l'article;

**Quantité confirmée**: la colonne visualise la quantité confirmée de l'ordre planifié de l'article, différent de zéro seul si l'ordre planifié provient par le traitement MRP;

**Client**: la colonne visualise le compte et le sous-compte du client lié à l'ordre planifié;

**Fournisseur**: la colonne visualise le compte et le sous-compte du fournisseur lié à l'ordre planifié, si d'achat ou de sous-traitant.

Dans la grille en dessous viennent visualisées les lignes des commandes clients, si présents, par laquelle ont été engendrées les commandes de production lesquelles planification a porté à la création des ordres planifiés ou de production représentés dans la grille supérieure. Les informations visualisées sont Type, Année, Numéro et Date insertion de la commande client, le client présent en en-tête Commande client, Classe, Code, Description, Variante et Description variante de l'article présentent dans la ligne de la commande client, mais aussi sa date de prévue livraison.

Dans le deuxième tab ils viennent exposés, avec une structure identique à cette du tab 'Ordres en Gantt', les 'Ordres pas en Gantt'.

Existe aussi une petite Ribbon Bar qui permet à l'utilisateur de remplacer le centre de travail pour le document sélectionné et de les déplacer de 'x' jours ou à une déterminée date le document sélectionné dans la grille supérieur.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Importation simulation | Il se réfère à la procédure qui confirme les modifications exécutés par l'utilisateur dans les documents visualisés dans le graphique. |
| Enregistrer la simulation | Il se réfère à la procédure qui enregistre dans un fichier la simulation exécutée par l'utilisateur mais sans que ses modifications viennent établis dans les documents du graphique. |
| Charger la simulation | Il se réfère à la procédure que la charge dans le graphique une simulation précédemment enregistrée. |
| Zoom Out | Il permet d'augmenter le détail temporel dans le graphique. |
| Zoom In | Il permet de diminuer le détail temporel dans le graphique. |
| MRP | Il se réfère à la procédure qui lance le traitement MRP dans toute la base de données. |
| CDT surchargés | Il ouvre une fenêtre de pop-up à l'intérieur de lequelle parait une grille dont viennent visualisés les centres de travail intéressés par les documents du graphique, en rouge les jours dont les CDT résultent être utilisés majeurement respect à leur capacité productive quotidienne. |
| Rollback de la simulation | Il se réfère à la procédure pour exécuter le Rollback de la simulation sur lequel on est en train de travailler. |






