---
title: Commandes
sidebar_position: 2
---

La fenêtre des Commandes s'ouvre à travers le parcours Planification > Commandes > Commandes. Cette fenêtre permet non seulement de rechercher les Commandes de production déjà créées précédemment, mais de créer nouveaux avec les boutons de la Ribbon Bar.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton par appliquer les filtres de recherche à l'intérieur de la base de données des commandes de production insérées. |
| Insérer une commande mono-produit | Il se réfère à la procédure pour insérer une nouvelle commande de production mono-produit. |
| Insérer une commande multi-produit | Il se réfère à la procédure pour insérer une nouvelle commande de production multi-produit. |
| Modifier la commande | Il se réfère à la procédure pour modifier une commande de production précédemment insérée. |
| Visualiser la commande | Il se réfère à la procédure pour visualiser une commande de production précédemment insérée. |
| Supprimer la commande | Il se réfère à la procédure pour supprimer une commande de production précédemment insérée. |
| Modifier la date de la commande | Exécuter la procédure pour modifier la date final prévue d'une ou plusieurs commandes de production. |
| Modifier le filtre attribut | Ouvrir une fenêtre qui permet de décider s'activer ou non le filtre attribut, qui permet de filtrer les commandes de production selon les attributs insérés à travers le encodeurs dans les articles  objet de la même commande. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible spécifier plusieurs critères des filtres en même temps.

L'utilisateur peut utiliser les suivants filtres:

**Type comm.**: en ce menu déroulant est possible d'insérer le type commande de production et filtrer selon ce critère, en visualisant donc toutes les commandes de production du type sélectionné;

**De numéro ...... À numéro**: en ces champs est possible de rechercher les commandes en insérant une gamme de numérotation;

**De année ....... À année**: en ces champs est possible de rechercher les commandes en insérant une gamme temporel en considérant l'année de création de la commande;

**Article**: dans le premier menu déroulant est possible d'établir la classe de l'article, avec un double click dans le deuxième et troisième champ s'ouvre un aide articles qui sert par sélectionner l'article par laquelle on veut filtrer les Commandes de production;

**Variante**: en ce menu déroulant est possible de sélectionner la variante de l'article pour laquelle on veut exercer le filtre;

**Type commande**: à travers ce menu déroulant est possible de filtrer par commande mono-produit, commande multi-produit ou toutes;

**Comamnde client**: à travers ce menu déroulant est possible d'établir le type de l'ordre, la description et le numéro relatif. En ce cas viendront visualisées toutes les Commandes de production liées au numéro ordre par lequelle a été établi le filtre;

**Commandes**: en ce champ avec un double click est possible, avec l'Aide commandes, de sélectionner la commande de vente dans laquelle sont liées les Commandes de production qu'on veut rechercher;

**Client**: en ces 3 champs viennent spécifiés les rélatifs données du client: 'Compte', 'Sous-compte' et 'Nom du client', avec un double click sur le premier champ est possible d'ouvrir un 'Aide comptes' par lequelle pouvoir sélectionner le client en cause. En ce façon on recherche toutes les Commandes de production liées au client sélectionné;

**Lieu prod.**: avec ce champ est possible de filtrer les commandes par le Lieu productif associé à la même commande;

**Prévue fin travail De date..À date**: en ces champs peut être insérée (en une gamme) la date prévue de fin travai (de ... à ...); est possible éventuellement de spécifier à travers les flag si visualiser les commandes en rétard et/ou celles échues;

**Type approvisionnement**: à travers ces flag est possible de sélectionner la typologie d'approvisionnement qu'on veut filtrer s'on parle d'une Commande d'achat, de production ou de sous-traitant;

**État commande**: à travers ces flag est possible de filtrer l'état de la commande qu'on veut visualiser (n'examinées pas, planifiées, lancées, exécutive, exécutées et

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des commandes de productionqui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des commandes de production, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des commandes de production désirées.

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Type question**: il peut être employée, s'on parle une commande engendrée automatiquement à travers la Définition MPS, ou indépendante, s'on parle d'une commande engendrée manuellement;

**Type approv. commande**: la colonne visualise le type d'approvisionnament de la Commande, qui peut être de Production, d'Achat ou de Sous-traitant, en relation au type d'approvisionnement établi par l'article objet de la commande dans ses Paramètres MRP;

**Année**: la colonne visualise l'années de la Commande de production;

**Commande de travail**: la colonne visualise le numéro de la commande de vente liée à la Commande de production;

**État commande**: la colonne visualise l'état de la Commande de production (n'examinées pas, planifiées, lancées, exécutive, exécutées et historicisées);

**Date prévue début/fin travail**: la colonne visualise les dates prévues de début et fin travail de la Commande de production;

**Date suggérée**: la colonne visualise la date que la planification générale suggérée comme date prévue finale de la Commande de production s'a été établie une date bloc dans les paramètres d'abord d'exécuter la procédure de planification;

**Classe**: la colonne visualise la classe des articles présents dans la Commande de production;

**Code article**: la colonne visualise la code des articles présents dans la Commande de production;

**Variante**: la colonne visualise l'éventuelle variante de l'article;

**Quantité**: la colonne visualise la quantité à produire de l'article;

**Client**: la colonne visualise le compte et le sous-compte du client lié à la ligne de Commande de production;

**Commande**: la colonne visualise l'éventuel commande de vente liée à la ligne de Commande de production;

**Description article**: la colonne visualise la description de l'article à produire;

**Description client**: la colonne visualise la raison sociale du client lié à la ligne de Commande de production;

**Code type commande**: la colonne visualise le code du Type commande de production;

**Description type commande**: la colonne visualise la description du Type commande de production.






