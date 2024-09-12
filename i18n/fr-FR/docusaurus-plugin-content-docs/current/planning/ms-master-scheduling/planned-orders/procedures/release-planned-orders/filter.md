---
title: Filtre
sidebar_position: 2
---

En ce tab est possible de visualiser la liste des ordres planifiés qui doivent subir une délivrance, filtrable à travers une série de critères de sélection. Le tab est formé par une grille de filtre et par une grille de résultat.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton par appliquer les filtres de recherche à l'intérieur de la base de données des Odres planifiés insérés. |
| Délivrance des ordres planifiés de production | Il se réfère à la procédure qui exécute la délivrance des ordres planifiés de production sélectionnés dans la grille de résultat, en engendrant les ordres de production lancés ou exécutifs, selon si sont établis les paramètres du besoin matériel. |
| Délivrance des ordres planifiés d'achat | Il se réfère à la procédure qui exécute la délivrance des ordres planifiés d'achat sélectionnés dans la grille de résultat, en engendrant les Demandes d'achat autorisées et pas autorisées, selon si sont établis les paramètres du besoin matériel. |
| Délivrance des ordres planifiés de sous-traitant | Il se réfère à la procédure qui exécute la délivrance des ordres planifiés de sous-traitant dans la grille de résultat, en engendrant les ordres de sous-traitant. |
| Ouvrir la recherche des ordres de production | Il se réfère à la procédure par ouvrir la recherche des ordres de production filtrés avec les mêmes critères utilisés dans la section de filtre de cette fenêtre. Par exemple, s'on filtre les ordres planifiés sur la base du numéro de commande 3 de l'année 2012, la fenêtre de recherche des ordres de production s'ouvrira déjà filtrée par la commande numéro 3 de l'année 2012. |
| Attributs | Il ouvre une fenêtre qui permet de décider s'activer ou non le Filtre attributs, qui permet de filtrer les ordres planifiés selon les attributs insérés à travers l'encodeur dans les articles objet de l'ordre. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

L'utilisateur peut utiliser les suivants filtres:

**Article**: le menu déroulant permet à l'utilisateur d'établir la classe de l'article, avec un double click dans le deuxième champ s'ouvre un 'Aide articles' à travers lequel est possible de sélectionner chaque article (code et description);

**Variantes**: avec un double click s'ouvre un 'Aide variantes' à travers lequel est possible de sélectionner la variante de l'article;

**Date début travail De...À**: en ces champs est possible d'insérer (en une gamme) la date prévue de début travail (de...à...);

**Date fin travail De...À**: en ces champs est possible d'insérer (en une gamme) la date prévue de fin travail (de...à...);

**Ordres de maintenance**: avec ce flag est possible de décider de visualiser aussi les ordres planifiés de maintenance;

**Délivrance des ordres planifiés à**: en ce menu déroulant est possible de sélectionner le type d'ordre qui devra être engendré avec la délivrance (Demandes d'achat, Ordres de production, Ordres de sous-traitant);

**Type ord.**: en ce menu déroulant est possible d'insérer le Type ordre planifié et filtrer selon ce critère, en visualisant donc tous les ordres planifiés du type sélectionné;

**Type comm.**: en ce menu déroulant est possible d'insérer le Type commande de production et filtrer selon ce critère, en visualisant donc tous les ordres planifiés engendrés par les commandes qui appartiennent au type sélectionné;

**Comm. prod.**: en ces 2 champs ils viennent établis le numéro et l'année de la commande de production;

**Fournisseur**: en ces 3 champs ils viennent spécifiées les relatives données du fournisseur: 'Compte', 'Sous-compte', 'Raison sociale du client', avec un double click sur le champ est possible d'ouvrir un 'Aide comptes' par lequel pouvoir sélectionner le fournisseur désideré;

**Commande**: en ce champ s'insère le numéro de la commande de vente, à travers l'aide des commandes;

**Client**: en ces 3 champs ils viennent spécifiées les relatives données du client: 'Compte', 'Sous-compte', 'Nom du client', avec un double click sur le premier champ est possible d'ouvrir un 'Aide comptes' par lequelle pouvoir sélectionner le client pour laquelle filtrer;

**Groupe**: en ce menu déroulant est possible d'insérer le numéro du groupe à qui appartiennent les ordres planifiés qu'on veut visualiser dans la grille.

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des ordres planifiés qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des ordres planifiés, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des ordres planifiés désirés.

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Année**: la colonne visualise l'année de l'Ordre planifié;

**Ordre**: la colonne visualise le numéro de l'Ordre planfié;

**Niveau**: la colonne visualise le niveau de la nomenclature qui identifie l'article objet de l'Ordre planifié;

**Code type ordre**: la colonne visualise le code du Type ordre planifié;

**Description type commande**: la colonne visualise la description du Type ordre planifié;

**Année commande**: la colonne visualise l'année de la commande de production par laquelle a été engendré l'ordre planifié. La colonne résulte vide si l'ordre planifié a été engendré manuellement ou si provient par le traitement MRP;

**Numéro commande**: la colonne visualise le numéro de la commande de production par laquelle a été engendré l'ordre planifié. La colonne résult vide si l'ordre planifié a été engendré manuellement ou si provient par le traitement MRP;

**Code type commande**: la colonne visualise le code du Type commande de production;

**Description type commande**: la colonne visualise la description du Type commande de production;

**Classe**: la colonne visualise la classe de l'article objet de l'Ordre planifié;

**Code article**: la colonne visualise le code de l'article objet de l'Ordre planifié;

**Variante**: la colonne visualise l'éventuelle variante de l'article;

**Date début**: la colonne visualise la date prévue début de l'Ordre planifié; s'on parle de l'ordre planifié d'achat ou de sous-traitant cette date représente la date où doit être envoyé au fournisseur l'ordre d'achat qui viendra successivement engendré avec la délivrance de l'ordre; s'on parle de l'ordre planifié de production cette date représente la date de prévu début de la première phase de travail du cycle de l'article;

**Date final**: la colonne visualise la date prévue final de l'Ordre planifié; s'on parle de l'ordre planifié d'achat ou de sous-traitant cette date représente la date où doit être reçue la commande et donc coïncidera avec la date de prévue réception de la ligne de l'ordre fournisseur qui viendra successivement engendré avec la délivrance de l'ordre; s'on parle de l'ordre planifié de production cette date représente la date de prévu fin de la première phase de travail du cycle de l'article;

**Quantité**: la colonne visualise la quantité de l'Ordre planifié de l'article;

**Quantité confirmée**: la colonne visualise la quantité confirmée de l'Ordre planifié de l'article, différente de zéro seul si l'ordre planifié previent par le traitement MRP;

**Client**: la colonne visualise le compte et le sous-compte du client lié à l'Ordre planifié;

**Fournisseur**: la colonne visualise le compte et le sous-compte du fournisseur lié à l'Ordre planifié, si d'achat ou de sous-traitant;

**Caractéristique**: la colonne visualise le code de la caractèristique de l'article objet de l'Ordre planifié;

**Commande**: la colonne visualise l'éventuelle commande de vente liée à l'Ordre planifié;

**Numéro client**: la colonne visualise le numéro de la commande client par laquelle a été engendrée la ligne de commande de production laquelle la planification a engendré l'ordre planifié;

**Année commande client**: la colonne visualise l'année de la commande client par laquelle a été engendrée la ligne de commande de production laquelle la planificaiton a engendré l'ordre planifié;

**Type CC**: la colonne visualise le Type de la commande client par laquelle a été engendrée la ligne de la commande de production laquelle la planification a engendrée l'ordre planifié;

**Description article**: la colonne visualise la description de l'article objet de l'Ordre planifié;

**Description fournisseur**: la colonne visualise la raison sociale du fournisseur lié à l'Ordre planifié, si d'achat ou de sous-traitant;

**Description caractéristique**: la colonne visualise la description de la Caractéristique de l'article objet de l'Ordre planifié;

**Obligatoire**: la colonne visualise un flag que s'actif permet à l'utilisateur d'indique que l'ordre planifié soit absolument ne déplaçable pas.






