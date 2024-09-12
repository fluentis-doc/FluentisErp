---
title: Prévisionnel
sidebar_position: 4
---

À travers de tab est possible de filtrer les lignes de Prévisions de vente ou du Plan principal de production qu'on veut faire analiser par la procédure Définition MPS, en utilisant les filtres par article et par variante. 

Les lignes des Prévisions de vente qui peuvent être visualisées en ce tab doivent repondre à ces requises:

- le prévision de vente annuel doit être en état de 'Consolidée';

- le prévision de vente annuel doit avoir été engendrée avec une version valide;

- par la ligne de prévision ne doivent encore avoir été engendrées les Commandes de production;

À partir des lignes du Plan principal de production qui peuvent être visualisées en ce tab ne doivent encore avoir été engendrée les Commandes de production.

Le tab est composé par une zone de filtre et par grille de résultat.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton par appliquer les filtres de recherche à l'intérieur de la base de données des lignes de prévision de vente et du plan principal de production et qui correspondent aux requests du point 5.3. |
| Considérer les commandes | Il se réfère à la procédure pour déplacer les lignes sélectionnées dans la grille du tab 'Récapitulation'. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection, une recherche sur le total des lignes des articles respondents aux critères de sélection déjà préétablis par le code de la fenêtre et listés dans les paragraphes précédents. Les filtres sont typiquement en condition 'AND' et est possible spécifier plus critères des filtres en même temps. L'utilisateur peut utiliser le filtre par la classe, le code, la description et la variante de l'article. 

GRILLE DE RÉSULTAT: la grille de résultat représent la liste des articles qui corrispondent aux données de filtre sur spécifiés. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des lignes d'ordre, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des lignes désirées.

Les données visualisés dans la grille de résultat sont la classe, le code et la description de l'article, l'année de la prévision de vente, le numéro du mois ou de la semaine de la prévision de vente, la date de génération de la commande de production, les dates de début et de fin prévision (par exemple, si la prévision a été établie par la mois de mai, la date de début sera le 01/05 et la date final sera le 31/05), la quantité relative à chaque ligne de prévision, le compte, le sous, compte et enfin la description du client relatif à la ligne de prévision de vente (si présent).

Dans la partie inférieur de la fenêtre est présent une grille qui permet à l'utilisateur d'établir les types de commandes client qui doivent être considérés au même temp par les quantité présents dans les prévisions de vente, en façon que la procédure de création commande engendre la commande de production avec une quantité égal au majeur, au mineur ou à la somme des quantité présents, par le même article, dans la lignes commande client et/ou en prévision de production ou plan principal.

Enfin, est possible établir le mois de fin planification, qui sert par visualiser dans la grille seul les prévisions de vente qui arrivent jusqu'à la date indiquée, et le type commande de production à engendrer.






