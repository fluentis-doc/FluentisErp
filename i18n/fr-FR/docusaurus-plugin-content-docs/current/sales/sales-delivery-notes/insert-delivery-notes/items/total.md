---
title: Totals
sidebar_position: 2
---

**Remises**: ils viennent proposées toutes les remises associées à l'article, chacun avec la propre base de calcul et d'assignation. Les remises peuvent être reprises: par le registre client, par la solution de paiement assignée au document et par le catalogue de l'association calatogue-client. Toutes les données proposées sont modifiables.

**Valeurs catalogues**: il proposait le catalogue dont a été reprise l'article, avec la date de début/fin validité et avec les conditions particulières de vente (p. ex. Tranche de remise) assignée à l'article dans le catalogue.

**Entrepôt et cause**: ils viennent proposés l'entrepôt et la cause de référence qui paraîtront en automatique au moment de la décharge des articles relatifs de l'entrepôt. Les données sont reprises par les typesDDT/BL.

Chaque ligne article comprendre les suivantes valeurs:

**Prix unitaire**: la valeur du champ ‘Prix';

**Quantité**: la valeur du champ ‘Quantité';

**Montant brut**: prix article * quantité article;

**Total remises**: la somme des remises de l'article, inclus aussi les remises finales;

**Imposable**: montant brut – remises;

**TVA**: imposable * taux TVA de l'article;

**Total**: imposable + montant.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Supprimer la remise | Il permet di supprimer la remise associée à l'article sélectionné dans la grille en-dessus. |






