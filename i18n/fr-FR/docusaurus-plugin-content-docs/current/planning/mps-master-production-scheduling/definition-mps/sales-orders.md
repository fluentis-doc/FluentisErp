---
title: Commandes clients
sidebar_position: 3
---

À travers ce tab est possible de filtrer les lignes de la commande client qu'on veut faire analiser par la procédure Définition MPS. Les lignes d'ordre qui peuvent être visualisées en ce tab doivent repondre à ces requises:

- l'article objet de la ligne commande client doit avoir le flag 'Commandes' validé dans ses 'Paramètres MRP;

- la ligne ne doit pas avoir été exécutée à travers le Picking List, ou bon de livraison de vente, ou facture de vente;

- la ligne ne doit pas avoir été mise 'Forcement exécutée';

- la ligne doit résulter en état de 'N'exécutée pas' ou 'Partiellement exécutée';

- à partir de la ligne ne doivent encore été engendrées les Commandes de production;

- la ligne doit avoir la date de marchandise prête insérée dans le tab Articles de la commande client;

- la commande client par lequelle vient la ligne doit être 'Imprimée' et 'Confirmée'.

La non présence d'UNE SEUL de ces conditions provoque l'impossibilité de visualiser la ligne commande client de la grille.

Le tab est composé par une zone de filtre et par grille de résultat.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton par appliquer les filtres de recherche à l'intérieur de la base de données des lignes de la commande client insérées et qui correspondent aux requests du point 5.2. |
| Considérer par commandes | Il se réfère à la procédure pour déplacer les lignes de la commande client sélectionnées dans la grille du tab 'Récapitulation'. |
| Génération flux | Il se réfère à la procédure pour exécuter la génération du flux de production selon les paramètres établis dans la fenêtre 'Paramètres MPS'. |
| Modifier le filtre attribut | Il e réfère à la procédure pour visualiser ou non le filtre attributs. En activant ce touche et les deux flags présents dans la fenêtre de pop up qui sort automatiquement, est possible utiliser le filtre par Attributs, donc en exploitant les données provenants par les tableaux de l''Encodeur'. Par chaque tableau est possible établir un ou plusieurs filtres, en voyant s'ajouter dans la grille des résultats les colonnes liés aux attributs sélectionnés, en visualisant les données provenants par les tableaux. En cette grille on visualise, en utilisation le filtre attributs, les données présents dans la fenêtre des attributs qui s'active avec le touche présent dans le tab Articles de la commande client. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection, une recherche sur le total des lignes de la commande client insérée et respondents aux critères de sélection déjà préétablis par le code de la fenêtre et listés dans les paragraphes précédents. Les filtres sont typiquement en condition 'AND' et est possible spécifier plus critères des filtres en même temps. L'utilisateur peut utiliser le filtre par la classe, le code, la description et la variante de l'article, le filtre par Type et numéro commande client, par Client, par Commande de Vente, par Date de livraison prévue de la ligne commande client, par Type commande de production (en ce cas on filtre les lignes de la commande client provenants par le commandes client dont le type a un déterminé type commande lié dans la tableau 'Types commande client').

GRILLE DE RÉSULTAT: la grille de résultat représent la liste des lignes de la commande client qui corrispondent aux données de filtre sur spécifiés. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des lignes d'ordre, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des lignes désirées.

Les données visualisés dans la grille de résultat sont le type commande client, le numéro ordre de l'année, la date d'insertion commande (Date CC'), le numéro ligne, le champ qui visualise le compte et le sous-compte du client, la commande de vente, classe, code, et variante de l'article, l'option de la ligne de la commande client, la quantité encore à exécuter par la ligne d'ordre ('Quantité'), la quantité disponible ('Disponibilité') de cet article dans la date de marchandise prête de la ligne d'ordre ('Livraison'), le code et la description du type commande de production lié au type commande client, la description de l'article et la raison sociale du client ('Description client').

Il faut spécifier que la colonne 'Disponibilité' résulte égal à zéro par toutes les lignes si le flag 'Considérer la disponibilité de l'article' présent dans le tab Paramètres est désactivé. Si le flag est activé, la procédure de recherche des lignes d'ordre demande un temp d'attent plus long parce que en ce moment le système exécute 'Run Time' le calcul de la disponilibité de chaque ligne article visualisable dans la grille sur la base des filtres de recherche établis.

Après avoir filtré les lignes d'ordre désirées, l'utilisateur a la possibilité de sélectionner certains de ces lignes (ou aussi toutes) et, en cliquant sur le touche 'Considérer par commandes' présent dans la Ribbon Bar, les deplacer dans le tab Récapitulation, par lequelle les lignes peurrent être considérés par la procédure de génération de la commande de production.

Un autre possibilité est celle d'utiliser, toujours après avoir sélectionné une ou plusieurs lignes de commande client, le touche 'Génération flux', qui si valide seul si dans les Paramètres MPS le flag  'Génération automatique flux de production' ait été validé. Grâce a ce flag est possible commencer le flux de production complet après la création des Commandes de produciton, qui seront immédiatement planifiés et, selon les flag successifs, lequelle le fonctionnement est spécifiée dans le document relatif aux paramètres de production, viendraient éventuellement engendrée les ordres planifiés, les ordres de production et aussi les signalisations de production.






