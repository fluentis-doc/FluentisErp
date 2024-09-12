---
title: Stock minimum
sidebar_position: 5
---

À travers ce tab est possible de filtrer les lignes de articles gérés à Stock qu'on veut far analiser par la procédure Définition MP. Le seul requise essentiel qui permet à l'article d'être visualisable en cette grille est représenté, dans ces paramètres MRP, le type de gestion 'À stock'.

Le tab est formé par une zone de filtre et par un grille de résultat.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton par appliquer les filtres de recherche à l'intérieur de la base de données des articles qui correspondent aux requests du point 5.4. |
| Considérer par commande | Il se réfère à la procédure pour déplacer les lignes sélectionnées dans la grille du tab 'Récapitulation'. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection, une recherche sur le total des lignes de la commande client insérée et respondents aux critères de sélection déjà préétablis par le code de la fenêtre et listés dans les paragraphes précédents. Les filtres sont typiquement en condition 'AND' et est possible spécifier plus critères des filtres en même temps. L'utilisateur peut utiliser le filtre par la classe, le code, la description et la variante de l'article, le filtre par Catégorie di marchandise et par Caractéristique. À l'intérieur de la zone de filtre est présent le menu déroulant du Type commande de production, qui permet à l'utilisateur de décider le type de commande de production à engendrer. Enfin, est présent une case où l'utilisateur peut insérer la date final par sur lequel ne veut pas que les articles de la grille devient stock minimum.

GRILLE DE RÉSULTAT: la grille de résultat représent la liste des lignes des lignes qui corrispondent aux données de filtre sur spécifiés. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des articles, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des lignes désirées.

Les données visualisés dans la grille de résultat sont les suivants:

- classe, code et description de l'article;

- point de commande, Stock minimum et jours par le rangement (données reprises par le tab Approvisionnement du registre article);

- consommation moyen quotidien (donnée calculé en soustrayant le stock minimum par le point de commande et en séparant le résultat obtenu par les jous de rangement);

- lot économique de production et relatifs multiples (données reprises par les paramètres MRP de l'article);

- disponibilité début (se réfère à la disponibilité de l'article au jour de lance du traitement);

- disponibilité final (se réfère à la disponibilité de l'article au jour indiqué dans la case 'Sous le point de commande à la date');

- disponibilité minimum (se réfère à la disponibilité minimum que l'article a entre la date courant et la date indiquée dans la case 'Sous le point de commande à la date').

Existe enfin un autre grille, dans la partie inférieur de la fenêtre, qui visualise le détail de la disponibilité de l'article sélectionné dans la grille principal.

Après avoir filtré les lignes d'ordre désirées, l'utilisateur a la possibilité de sélectionner certaines de ces lignes (ou aussi toutes) et, en cliquant sur le touche 'Considérer par commandes' présentdans la Ribbon Bar, les déplacer dans la tab récapitulation, parlaquelle les lignes peurrent être considérés par la procédure de génération de la commande de production. Seules les lignes parlesquelles la procédure pense se devoir créer les commandes de production seront transférées dans le tab 'Récapitulation'. La procédure propose, par chaque article, une commande de production qui permet à l'utilisateur de faire en façon que, quand l'article aura le risque de descendre sous le niveau de stock minimum, vient recompléter à travers une commande de production qui a la date égale à la date du stock minimum. La quantité de cette commande de production devra permettre de survivre jusqu'à la date de 'Sous point de commande' indiquéedans la zone de filtre; mais, seul si l'article présente des lots économiques de production ou d'achat et des multiples.

 






