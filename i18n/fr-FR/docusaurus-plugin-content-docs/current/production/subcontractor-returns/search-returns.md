---
title: Rechercher les rentrées
sidebar_position: 2
---

La fenêtre Rechercher les rentrées s'ouvre à travers le parcours Sous-traitant > Rentrées > Rechercher les rentrées > Rechercher les rentrées et présente la liste des rentrées de sous-traitant déjà insérées, en permettant de les modifier, les visualiser et insérer nouveaux.

La fenêtre est formée par une zone de filtre et par une grille de résultat.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour appliquer les filtres de recherche à l'intérieur de la base de données des Rentrées de sous-traitant insérés. |
| Insérer | Il se réfère à la procédure pour insérer un nouveau Rentrée de sous-traitant. |
| Modifier | Il se réfère à la procédure pour ouvrir en modification un Rentrée de sous-traitant. |
| Visualiser | Il se réfère à la procédure pour ouvrir en visualisation un Rentrée de sous-traitant. |
| Supprimer | Il se réfère à la procédure pour supprimer un Rentrée de sous-traitant précédemment inséré. |
| Modifier le filtre attributs | Il ouvre une fenêtre qui permet de décider s'activer ou non le Filtre attributs, qui permet de filtrer les Rentrées de sous-traitant selon les attributs insérés à travers l'encodeur dans les articles objet  du même rentrée. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

L'utilisateur peut utiliser les suivants filtres:

**Sous-traitant**: en ces 2 champs ils viennent spécifiés les relatives données du sous-traitant de la rentrée: 'compte' et 'sous-compte', au contraire la raison sociale du sous-traitant parait en automatique, avec un double click dans le prémier champ est possible d'ouvrir un 'Aide comptes' dans lequel pouvoir sélectionner le sous-traitant pour lequel filtrer. Le sous-traitant normallement est inséré dans le plan des comptes entre les fournisseurs;

**De date bons de livraison... À date bon de livraison...**: en ces champs il est possible d'insérer (en une gamme) la date du bon de livraison de rentrée du sous-traitant (de... à...);

**De date rentrée... À date rentrée...**: en ces champs il est possible d'insérer (en une gamme) la date de la réelle rentrée de la marchandise par le sous-traitant (de... à...), s'il normalement est différent de la date du bon de livraison; il se réfère à la date dont viendra proposée l'enregistrement à entrepôt de la même rentrée;

**Type rentrée**: en ce menu déroulant il est possible d'insérer le Type de rentrée et filtrer selon ce critère, en visualisant donc toutes les rentrées du type sélectionné;

**N. bons de livraison de rentrée**: en ce champ il est possible d'insérer le numéro du bon de livraison de rentrée et filtrer selon ce critère. Le champ du numéro du bon de livraison est un champ de texte ne numérique pas;

**Commande**: en ce champ il est possible d'insérer le numéro de la commande de vente, à travers l'aide des commandes;

**Valorisés**: ce flag permet de filtrer les rentrées déjà valorisées, c'est-à-dire les rentrées dunquel a déjà été créée une facture d'achat dans la zone Achats;

**Chargés**: ce flag permet de filtrer les rentrées déjà chargées à l'entrepôt, c'est-à-dire les rentrées pour lequel a déjà été effectueé l'opération de Enregistrement rentrées;

**Tous**: ce flag permet de filtrer toutes les rentrées de sous-traitant, indépendamment si a été chargée et/ou valorisée;

**Rechercher les articles**: ce bouton permet d'activer une section qui permet de filtrer en utilisant une série d'autres paramètres, détaillé en suite:

**Classe/Cod.Art./Description**: le prémier menu déroulant permet d'établir la classe de l'article, avec un double click sur le deuxieme champ s'ouvre un 'Aide articles' à travers lequelle on sélectionne chaque article (code et description);

**Type comm.**: en ce menu déroulant est possible d'insérer le Type commande de production et filtrer selon ce critère, en utilisant donc toutes les rentrées liés aux commandes du type sélectionné;

**Comm. produ.**: en ces 2 champs ils viennent établis le numéro et l'année de la commande de production.

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des Rentrées de sous-traitant qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des Rentrées de sous-traitant, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des Rentrées de sous-traitant désirées.

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Contrôlé**: le flag permet de comprendre si ls rentrée a été contrôlér ou non. Si le rentrée n'est pas contrôlé, elle ne peut pas être effectuée ni l'opération de valorisation ni cette d'enregistrement du même;

**Valorisé**: le flag permet de comprendre si la rentrée a été valorisée ou non;

**Chargé**: il permet de comprendre si la rentrée a été enregistrée ou non;

**Bon de livrasion**: la colonne visualise le numéro du bon de livraison;

**Date bon de livraison**: la colonne visualise la date du bon de livraison de rentrée:

**Date rentrée**: la colonne visualise la date de la réelle rentrée de la marchandise par le sous-traitant;

**Sous-traitant**: la colonne visualise le compte et le sous-compte du sous-traitant titulaire de la rentrée;

**Description sous-traitant**: la colonne visualise la raison sociale du sous-traitant titulaire de la rentrée;

**Total**: la colonne visualise le total de la commande au brut du taux TVA.






