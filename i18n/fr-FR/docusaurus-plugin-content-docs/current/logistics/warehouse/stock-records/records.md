---
title: Enregistrements
sidebar_position: 2
---

La fenêtre de 'Rechercher enregistrements d'entrepôt' s'ouvre à travers le parcours Logistique > Entrepôt > Enregistrements > Enregistrements, et présente la liste de tous les enregistrements d'entrepôt présents dans la base de données, en permettent de les modifier et visualiser un détail.

La fenêtre est formée par une zone de filtre et par une grille de résultat.

L'utilisateur peut utiliser les suivants filtres:

**Entrepôt**: en ce menu déroulant est possible d'établir le code de l'entrepôt pour lequel on veut filtrer les enregistrements. Dans la Statistique à côté apparaît la description de l'entrepôt sélectionné;

**Cause**: en ce menu déroulant est possible d'établir le code de la cause d'entrepôt pour laquelle on veut filtrer les enregistrements. Dans la Statistique à côté apparaitre la description de la cause sélectionnée;

**De numéro...À numéro...**: en ces 2 champs est possible d'établir une gamme de numéros selon lequel filtrer les enregistrements sur la base de leur numéro progressif;

**De date...À date...**: en ces 2 champs est possible d'établir une gamme de date selon lesquels filtrer les enregistrements sur la base de leur date d'insertion;

**Document de référence**: à travers ce champ est possible de filtrer les enregistrements d'entrepôt sur la base à ce champ où normalement apparaît le document de référence, c'est-à-dire ce qui a causé la génération du même enregistrement;

**Date document**: à travers ce champ est possible de filtrer les enregistrements d'entrepôt sur la base de la date du document de référence, c'est-à-dire de ce qui a causé la génération du même enregistrement;

**Client/Fournisseur**: à travers ce champ est possible de filtrer les enregistrements d'entrepôt sur la base du client ou fournisseur titulaire du document lequel charge ou décharge a engendré l'enregistrement;

**Comm. prod.**: en ces 2 champs s'insère l'année et le numéro de la commande de production par lequel a été, avec successive délivrance et signalisations, engendrée l'enregistrement d'entrepôt;

**Article**: le premier menu déroulant permet d'établir la classe de l'article, avec un double click sur le deuxième champ on ouvre un 'Aide articles' à travers lequel est possible sélectionner chaque article (code et description). En filtrant pour article on trouve tous les enregistrements à l'intérieur desquels est présent au moins en un mouvement l'article;

**Variante**: avec double click on ouvre un aide variant à travers lequel sont possibles de sélectionner la variante de l'article et filtrer les enregistrements à l'intérieur desquels est présente au moins en un mouvement celle variante de l'article;

**Lots**: à travers ce champ est possible de filtrer les enregistrements sur la base du code lot, en trouvant donc tous les enregistrements à l'intérieur desquels est présent au moins en un mouvement ce lot de l'article;

**Commande**: à travers ce champ est possible de filtrer les enregistrements sur la base de la commande de vente à elle accroché dans l'en-tete, en utilisant l'aide commande qui explose avec un double click sur le champ jeune.

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Entrepôt**: la colonne visualise le code de l'entrepôt sur lequel a été engendré l'enregistrement;

**Cause**: la colonne visualise le code de la cause d'entrepôt qui a effectué le mouvement et que donc a été insérée dans l'en-tête de l'enregistrement;

**Date**: la colonne visualise la date d'insertion de l'enregistrement d'entrepôt;

**Numéro**: la colonne visualise le numéro progressif de l'enregistrement d'entrepôt;

**Document de référence**: la colonne visualise ça qui est présent dans le champ 'Document de référence' de l'en-tête de l'enregistrement;

**Date doc.**: la colonne visualise la date du document de référence présente dans l'en-tête de l'enregistrement;

**Charge/Décharge**: la colonne visualise le type d'enregistrement. Elle peut être seul de charge ou de décharge;

**Entrep.c.**: la colonne visualise le code de l'entrepôt de l'enregistrement de contrepartie, si présent;

**Caus.c.**: la colonne visualise le code de l'entrepôt de l'enregistrement de contrepartie, si présent;

**N. cpt.**: la colonne visualise le numéro progressif de l'enregistrement de contrepartie, si présent;

**Doc. référence cpt.**: la colonne visualise ça qui est présent dans le champ 'Document de référence' de l'en-tête de l'enregistrement de contrepartie, si présent;

**Compte/Sous-compte/Description compte/sous-compte**: la colonne visualise le compte, sous-compte et raison sociale du client ou du fournisseur inséré dans l'en-tête de l'enregistrement d'entrepôt.

RIBBON BAR: représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour appliquer les filtres de recherche à l'intérieur de la base de données des enregistrements d'entrepôt insérés. |
| Insérer | Il se réfère à la procédure pour insérer un nouvel enregistrement d'entrepôt. |
| Modifier | Il se réfère à la procédure pour ouvrir en modification un enregistrement d'entrepôt. |
| Visualiser | Il se réfère à la procédure pour ouvrir en visualisation un enregistrement d'entrepôt. |
| Supprimer | Il se réfère à la procédure pour supprimer un enregistrement d'entrepôt précédemment inséré. |
| Modifier le filtre attributs | Il ouvre une fenêtre qui permet de décider s'activer ou non le Filtre attributs, qui permet de filtrer les enregistrements d'entrepôt selon les attributs insérés à travers l'encodeur dans les articles objet du même enregistrement. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection, une recherche sur le total des enregistrements d'entrepôt. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des enregistrements d'entrepôt qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des enregistrements, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des enregistrements désirés.






