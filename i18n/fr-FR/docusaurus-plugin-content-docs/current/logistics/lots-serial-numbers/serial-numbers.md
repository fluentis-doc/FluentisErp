---
title: Numéro de série
sidebar_position: 3
---

La fenêtre de Rechercher numéro de série s'ouvre à travers le parcours Logistique > Lots/NS > Lots > Numéros de série, et présent la liste de tous les Numéros de série présents dans la base de données, en permettant de les modifier et visualiser un détail.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour appliquer les filtres de recherche à l'intérieur de la base de données des numéros de série insérés. |
| Modifier numéro de série | Il se réfère à la procédure pour ouvrir en modification un numéro de série inséré. |
| Visualiser numéro di série | Il se réfère à la procédure pour ouvrir en visualisation un numéro de série inséré. |

L'utilisation du touche 'Modifier numéro de série' permet à l'utilisateur d'entrer en modification dans le détail du Numéro de série, en ouvrant donc la fenêtre appellée 'Modifier numéro de série'.

La fenêtre est formée par une zone de filtre et par une grille de résultat.

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection, une recherche sur le total des Numéros de série chargés. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

L'utilisateur peut utiliser les suivants filtres:

**Article**: le premier menu déroulant permet d'établir la classe de l'article, avec double click selon le champ on ouvre un 'Aide articles' à travers lequel est possible de sélectionner chaque article (code et description);

**Variantes**: avec un double click s'ouvre un aide variant à travers lequel est possible de sélectionner la variante de l'article;

**Code NS**: à travers ce champ il est possible de filtrer sur la base du Code numéro de série;

**Entrepôt**: en ce menu déroulant il est possible d'établir le code de l'entrepôt sur lequel on veut rechercher les numéros de série à visualiser dans la grille;

**Lot n.**: à travers ce champ il est possible de filtrer sur la base du code lot à qui appartient le numéro de série qu'on veut visualiser dans la grille;

**Date enrg** **. début/fin**: en ces 2 champs il est possible d'établir une gamme de dates selon lesquels filtrer les lots sur la base à leur date de charge à entrepôt;

**Numéros de série présents à la date**: en ce champ il est possible de décider de visualiser seul les numéros de série qui étaient présents à une certaine date. En ce cas la procédure contrôle tous les mouvements d'entrepôt qui ont intéressé articles gérés à Numéro de série et visualise seule les numéros de série présents à la date indiquée;

**Situation** ** de NS**: en cette section on trouve 4 flag, qui permettent à l'utilisateur de filtrer les numéros de série déchargés (c'est-à-dire ces qui ont été déjà utilisés en certains document de décharge et qui donc ne sont plus disponibles), chargés (c'est-à-dire ces qui ont été chargés à entrepôt), ne déchargés pas (c'est-à-dire ces qui sont encore disponibles à entrepôt et qui donc n'ont encore été utilisés en certain document de décharge), ne chargés pas (c'est-à-dire ces qui ont été engendré à l'intérieur d'un document de charge comme pour exemple un bon de livraison d'achat, mais lequel document de chargé n'a encore été chargé à entrepôt). Évidemment la combinaison de ces flag permet à l'utilisateur devisualiser les numéros de série qu'on désire en relation à leur état;

**Visualiser** ** les numéros de série échus**: ce flag permet à l'utilisateur de décider de visualiser dans la grille aussi les numéros de série échus, donc ces laquelle Date fin est précédent à la Date courante.

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des Numéros de série qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des Numéros de série, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des Numéro de série désirés.

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Numéros de série**: la colonne visualise le numéro de série;

**Chargé/Ne chargé** ** pas**: la colonne visualise l'écrit 'Chargé' si le document à travers lequel a été engendré le numéro de série a été déjà chargé à entrepôt, 'Ne charger pas' au cas au contraire;

**Date début**: la colonne visualise la date de début du numéro de série;

**Date final**: la colonne visualise la date finale du numéro de série;

**Code** ** lot**: la colonne visualise le code du lot associé au numéro de série;

**Classe**: la colonne visualise la classe de l'article à qui est référé le numéro de série;

**Code** ** article**: la colonne visualise le code de l'article à qui est référé le numéro de série;

**Code variante**: la colonne visualise l'éventuelle variante de l'article à qui est référé le numéro de série;

**Entrepôt**: la colonne visualise le code de l'entrepôt sur lequel se trouve le numéro de série;

**Description entrepôt**: la colonne visualise la description de l'entrepôt sur lequel on trouve le numéro de série;

**Localisation**: la colonne visualise le code de la localisation sur qui on trouve le numéro de série;

**Description** ** article**: la colonne visualise la description de l'article à qui est référé le numéro de série;

**Description** ** variante**: la colonne visualise la description de l'éventuelle variante de l'article à qui est référé le numéro de série.






