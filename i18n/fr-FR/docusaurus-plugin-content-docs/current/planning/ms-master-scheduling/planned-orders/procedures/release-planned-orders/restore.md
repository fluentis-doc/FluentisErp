---
title: Restauration
sidebar_position: 4
---

En ce tab est possible de visualiser la liste des ordres planifiés qui doivent subir la restauration d'une délivrance, filtrables à travers une série de critères de sélection. L'exécution de la procédure de restauration de l'ordre planifié permet d'annuler la délivrance précédemment effectuée, en restaure la situation précédente à la même délivrance. Cette opération est réalisable seul en certains cas précis:

Par** l'ordre planifié de production**: seul si l'ordre de production engendré se trouve dans l'état de 'Lancé'; si l'ordre de productionest 'Exécutif' il faut exécuter la restauration de la délivrance de l'ordre de production, au contraire si est déjà 'Exécuté', il n'est pas possible d'exécuter la restauration de l'ordre planifié, sauf qui n'avance pas en partent par le rollback de l'enregistrement de la signalisation de production.

Par **l'ordre planifié d'achat**: seul si la ligne de demande d'achat engendrée se trouve dans l'état de 'N'exécutée pas'; si la ligne DA a déjà été exécutée avec la création d'une commande fournisseur, il faudra avances en partent par le document d'achat jusqu'à quelle on est arrivés.

Par **l'ordre planifié de sous-traitant**: seul si la ligne de la commande de sous-traitant engendrée n'ait encore été exécutée, ou n'ait pas été engendrée un bon de livraison par le matériel relatif à celle ligne de commande de sous-traitant.

Par exécuter la délivrance est suffisant sélectionner une ou plusieurs lignes par la grille supérieure et cliquer sur le bouton 'Restauration' présent dans la Ribbon Bar.

Le tab est composé par une zone de filtre, d'une grille de résultat et par une grille composée par 3 différents tab, qui dépend de la ligne sélectionnée dans la grille supérieure.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton par apploque les filtres de recherche à l'intérieur de la base de données des Ordres planifiés insérés et déjà relâchés. |
| Restauration | Il se réfère à la procédure qui exécute la restauration du relâche des ordres planifiés de production, d'achat et/ou de sous-traitant sélectionnés dans la grille de résulata, comme expliqué au détail de ce tab. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

L'utilisateur peut utiliser les suivants filtres:

**Article**: le premier menu déroulant permet d'établir la classe de l'article, avec un double click sur le deuxième champ s'ouvre un 'Aide articles' à travers lequel est possible de sélectionner chaque article (code et description);

**Variante**: avec un double click s'ouvre un 'Aide variantes' à travers lequel est possible de sélectionner la variante de l'article;

**Ordres de maintenance**: avec ce flag est possible de décider de visualiser aussi les ordres planifiés de maintenance;

**Type comm.**: en ce menu déroulant est possible d'insérer le Type commande de production et filtrer selon ce critère, en visualisant donc tous les ordres planifiés engendrés par les commandes qui appartiennent au type sélectionné;

**Commande**: en ce champ s'insère le numéro de la commande de vente, à travers l'aide commandes;

**Client**: en ces 3 champs ils viennent spécifiées les relatives données du client: 'Compte', Sous-compte' e 'Nom du client', avec un double click sur le premier champ est possible d'ouvrir un 'Aide comptes' dans lequel pouvoir sélectionner le client pour lequelle filtrer;

**Fournisseur**: en ces 3 champs ils viennent spécifiées les relatives données du fournisseur: 'Compte', 'Sous-compte' et 'Raison sociale du client', avec un double click sur le premier champ est possible d'ouvrir un 'Aide comptes' dans lequelle pouvoir sélectionner le fournisseur désideré;

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des ordres planifiés qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des ordres planifiés, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des ordres planifiés désirés.

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Utilisateur délivrance**: la colonne visualise l'utilisateur de l'ERP qui a exécuté la délivrance de l'ordre planifié sélectionné;

**Date de délivrance**: la colonne visualise où l'utilisateur a exécuté la délivrance en-dessus;

**Année**: la colonne visualise l'année de l'ordre planifié;

**Ordre**: la colonne visualise le numéro de l'ordre planifié;

**Code type ordre**: la colonne visualise le code du Type ordre planifié;

**Description type ordre**: la colonne visualise la description du type ordre planifié;

**Année commande**: la colonne visualise l'année de la commade de production par lequel a été engendré l'ordre planifié. La colonne résulte vide si l'ordre planifié a été engendré manuellement ou provient par le traitement MRP;

**Numéro commande**: la colonne visualise le numéro de la commade de production par lequel a été engendré l'ordre planifié. La colonne résulte vide si l'ordre planifié a été engendré manuellement ou provient par le traitement MRP;

**Code type commande**: la colonne visualise le code du Type commande de production;

**Description type commande**: la colonne visualise la description du Type commande de production:

**Classe**: la colonne visualise la classe de l'article objet de l'ordre planifié;

**Variante**: la colonne visualise l'éventuelle variante de l'article;

**Date début**: la colonne visualise la date prévue début de l'Ordre planifié; s'on parle d'un ordre planifié d'achat ou d'un sous-traitant cette date représente la date où doit être envoyé au fournisseur l'ordre d'achat qui viendra successivement engendré avec la délivrance du même ordre; s'on parle d'ordre planifié de production cette colonne représente la date de préve début de la première phase de travail du cycle de l'article;

**Date final**: la colonne visualise la date prévue final de l'Ordre planifié; s'on parle d'un ordre planifié d'achat ou d'un sous-traitant cette date représente la date où doit être envoyé à la commande et donc coïncidera avec la date de prévue réception de la ligne de l'ordre fournisseur qui viendra successivement engendré avec la délivrance du même ordre; s'on parle d'ordre planifié de production cette date représente la date de préve final de la première phase de travail du cycle de l'article;

**Quantité**: la colonne visualise la quantité de l'Ordre planifié de l'article;

**Commande**: la colonne visualise l'éventuelle commande de vente liée à l'Ordre planifié;

**Client**: la colonne visualise le compte et le sous-compte du client lié à l'Ordre planifié;

**Fournisseur**: la colonne visualise le compte et le sous-compte lié à l'Ordre planifié, si d'achat ou de sous-traitant;

**Caractéristique**: la colonne visualise le code de la caractéristique de l'article objet de l'Ordre planifié;

**Description article**: la colonne visualise la description de l'article objet de l'Ordre planifié;

**Description client**: la colonne visualise la raison sociale du client lié à l'Ordre planifié;

**Description fournisseur**: la colonne visualise la raison sociale du fournisseur lié à l'Ordre planifié, si d'achat ou de sous-traitant;

**Description caractéristique**: la colonne visualise la description de la caractéristique de l'article objet de l'Ordre planifié.

En tenant sélectionnée une des lignes présents dans la grille de résultat, il vient visualisé un détail, dans la grille en bas, relatif au document engendré par l'ordre planifié dont à la ligne de la grille supérieur. Le document peut être, comme précédemment avancé;

**Ordre de production**: en ce cas le détail vient visualisé dans le tab 'Ordres de production';

**Commande de sous-traitant**: en ce cas le détail vient visualisé dans le tab 'Commandes de sous-traitant';

**Demande d'achat**: en ce tab le détail vient visualisé dans le tab 'Ordres d'achat'.

Par chaque document il vient fourni un détail égal a ce qui est possible d'obtenir en recherchant les documents dans les fenêtres de chercher placées dans les formulaires d'application.






