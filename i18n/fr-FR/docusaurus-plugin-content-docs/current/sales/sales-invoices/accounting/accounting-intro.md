---
title: Comptabilisation
sidebar_position: 2
---

Ce le masque présente dans la partie supérieur des filtres de rechercher pour individuer la liste des factures à comptabiliser présents dans le système.

Une facture, pour être comptabilisée, doit satisfaire une série de conditions: dans sa en-tête doit avoir établi le flag 'Imprimée' et le type facture doit contenir la cause générale par la comptabilisation.

Sur la base du masque sont présents certains paramètres de gestion de la comptabilisation:

**Date enregistrement égal à la date document**: ce flag impose la comptabilisation de chaque facture à leur date d'émission. Si le flag est débranché, il faut activer le champ successif sur lequel est possible d'établir une date fixe d'enregistrement;

**Utiliser l'échange de la tableau change**: avec ce flag on impose au système de vérification le tableau des échanges par utiliser ce présent à la date enregistrement/facture (ou le dernier inséré précédemment). Si le flag n'est pas établi sera utilisé l'échange déjà présent dans l'en-tête de la facture;

**Actualiser l'échange dans le document**: le champ est actif seul si le précédent flag est établi. Le champ relatif se réfère à l'actualisation de l'échange présent dans l'en-tête de la facture, écrasant ce présent;

**Compet. TVA = date document**: le flag impose qui la compétence TVA des mouvements soit égal à la date facture. Dans le cas où l'utilisateur dérise utiliser la possibilité de facturer jusqu'au 15 du mois successif à la date d'expédition (facturation différée), le flag vait enlevé par laisser que la compétence TVA soit repris par la date de début transport dans le bon de livraison d'origine, aussi comme prévu par la réglementation TVA;

**Comptabilisation industriel**: le champ va établi par gérer aussi la comptabilisation industrielle. Le champ de la cause comptable que se valide n'est pas obligatoire, parce qu'il est associté au type facture et codé aussi la cause industriel à utiliser.

La procédure de 'Comptabilisation factures' est constituée dans le suivante façon:

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher facture | Bouton pour chercher les factures; viennent proposés toutes les factures imprimées et ne comptabilisées pas. |
| Comptabilisation factures | Il exécute la comptabilisation des factures sélectionnées, selon les paramétrages définis. |






