---
title: Lots
sidebar_position: 2
---

La fenêtre de Rechercher lots s'ouvre à travers le parcours Logistique > Lots/NS > Lots > Lots, et il présent la liste de tous les lots présents dans la base de données, en permettant de les modifier et les en visualiser un détail.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour appliquer les filtres de rechercher à l'intérieur de la base de données des lots insérés. |
| Modifier le lot | Il se réfère la procédure pour ouvrir en modification un lot inséré. |
| Visualiser le lot | Il se réfère la procédure pour ouvrir en visualisation un lot inséré. |
| Changer l'état du lot | Il se réfère à la procédure pour changer l'état du ou des lots sélectionnés. L'utilisation de ce touche ouvre une fenetre de Pop-up appellée 'Nouvel état lot', à l'intérieur duquelle est possible sélectionner un ou des états lots présents dans le tableau, appuyer le touche 'OK' et modifier donc massivement l'état de tous les lots sélectionnés. |

L'utilisation du touche 'Modifier le lot', permet à l'utilisateur d'entrer en modification dans le détail du lot, en ouvrant donc la fenêtre appellée 'Modifier le lot'.

La fenêtre est formée par une zone de filtre et par une grille de résultat.

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

L'utilisateur peut utiliser les suivants filtres:

**Article**: le premier menu déroulant permet d'établir la classe de l'article, avec double click sur le deuxième champ ou ouvre un 'Aide articles' à travers lequel est possible de sélectionner chaque article (code et description);

**Variantes**: avec un double click s'ouvre un aide variante à travers lequel est possible de sélectionner la variante de l'article;

**Lot n.**: à travers ce champ il est possible de filtrer sur la base du Code lot;

**Lot fournisseur**: à travers ce champ est possible de filtrer sur la base du Lot fournisseur;

**Entrepôt**: en ce menu déroulant est possible d'établir le code de l'entrepôt sur lequel on veut rechercher les lots à visualiser dans la grille;

**Date début échéan** **./val.**: en ces deux champs est possible d'établir une gamme de dates selon lesquels filtrer les lots sur la base de leur date de début et date de fine validité;

**Date charge lot De... ** **A...**: en ces 2 champs est possible d'établir une gamme de dates selon lesquels filtrer les lots sur la base à leur date de charge à entrepôt;

**Client**: en ces 3 champs ils viennent spécifiés les relatives données du client: 'compte', 'sous-compte', 'nom du client', avec un double click sur le premier champ est possible ouvrir un 'Aide comptes' par lequel pouvoir sélectionner le client pour lequel filtrer;

**Tous**: en activant ce flag l'utilisateur peut filtrer tous les lots présents dans la base de données;

**Ouverts**: en activant ce flag l'utilisateur peut filtrer seul les lots ouverts, c'est-à-dire seuls les lots dont existe encore un stock à entrepôt;

**Fermés**: en activant ce flag l'utilisateur peut filtrer seul les lots fermés, c'est-à-dire les lots lequel stock résulte égal à zéro;

**Regrouper** ** pour code lot**: en activant ce flag il vient activée une ultérieure grille à l'intérieur duquellle on voit une ligne pour chaque code lot, avec les quantités des diverses lignes du même lot sommées, entrepôt pour entrepôt et article pour article;

**Comm** **./Année**: à travers ce champ il est possible de filtrer les lots sur la base à la commande de vente à ces accrochée, en utilisant l'aide commandes qui s'explose avec un double click sur le champ jeune.

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des lots qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des lots, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des lots désirés.

Les colonnes visualisées dans la grille de résultat sont les suivantes:

**Fermé**: le flag, s'actif, souligne que le stock est égal à zéro;

**Lot n.**: la colonne visualise le Code du lot;

**Date début**: la colonne visualise la date de début du lot;

**Date éch** **.**: la colonne visualise la date d'échéance du lot;

**Quantité**: la quantité visualise la quantité initiale du lot pour chacun entrepôt;

**Quantité disp** **.**: la colonne visualise la quantité disponible pour chacune entrepôt du lot, c'est-à-dire la quantité en stock moins la quantité utilisée dans les divers documents. La quantité disponible peut aussi être visualisée comme égale à zéro dans le cas où on trouve en un état 'ne disponible pas pour les prélèvements automatiques';

**État** ** lot**: la colonne visualise l'état du lot. Il se réfère à une donnée qui pourrait aussi n'être pas géré;

**L** **. vend.**: le flag 'Lot vendable', s'actif, souligne que le lot est disponible pour être enlevé à l'intérieur des documents de vente, de production ou dans les enregistrements d'entrepôt;

**Entr** **.**: la colonne visualise le code de l'entrepôt sur lequel on trouve le lot;

**Description entr** **.**: la colonne visualise la description de l'entrepôt sur lequel on trouve le lot;

**Classe**: la colonne visualise la classe de l'article à qui est rapporté le lot;

**Code article**: la colonne visualise le code de l'article à qui est rapporté le lot;

**Variante**: la colonne visualise l'éventuelle variante de l'article à qui est rapporté le lot;

**Commande**: la colonne visualise la commande de vente liée au lot;

**Notes**: la colonne visualise les notes du lot;

**Description variante**: la colonne visualise la description de l'éventuelle variante de l'article à qui est rapporté le lot;

**Description article**: la colonne visualise la description de l'article à qui est rapporté le lot;

**Lot fourn.**: la colonne visualise le lot fournisseur;

**Fournisseur**: la colonne visualise les données du fournisseur du lot, donc du fournisseur titulaire du document avec qui a été changé le meme lot;

**UC**: la colonne visualise l'UC liée au lot.






