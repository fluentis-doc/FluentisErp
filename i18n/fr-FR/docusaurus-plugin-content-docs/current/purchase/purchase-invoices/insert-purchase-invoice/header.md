---
title: En-tête
sidebar_position: 3
---

Après l'insertion des données sur indiqués, aussi le champ du fournisseur peut être modifié. Le choix du fournisseur peut arriver à travers l'aide de champ. Avec l'insertion du fournisseur viennent proposés en automatique toutes les données spécifiques du tab 'En-tête', selon les données établies précédemment dans le registre fournisseur. Les données proposées, si spécifiés dans le registre, sont:

**Expédition**: il vient proposée l'information insérée dans le registre fournisseur, tab 'Expéditions' (tableau de référence 'Expéditions');

**Port**: il vient proposée l'information insérée dans le registre fournisseur, tab 'Expéditions' (tableau de réfèrence 'Port');

**Emballage**: il vient proposée l'information insérée dans le registre fournisseur, tab 'Expéditions' (tableau de référence 'Emballages');

**Pays**: il vient proposée l'information insérée, tab 'Données communes' dans le registre fournisseur (tableau de référence 'Emballages');

**Zone**: il vient proposée l'information insérée dans le registre fournisseur, tab 'Expéditions' (tableau de référence 'Zones');

**Catalogue**: il vient proposée l'information insérée dans le registre fournisseur dans le tab Catalogues, mais seul s'il existe une offre par défaut (tableau de référence 'Catalogues fournisseurs');

**De date validité**: le catalogue sélectionné est valable en partant par cette date;

**À (date validité)**: le catalogue sélectionné est valables jusqu'à cette date;

**Langue**: il vient proposée l'information insérée dans le tab 'Données communes' du registre fournisseur;

**Devise**: il vient proposée l'information insérée dans le registre fournisseur, tab 'Administratif' (tableau de référence devises);

**Change devise**: si la devise de la société est égale à celle du document, la valeur ramené sera 1, autrement la valeur sera reprise par Changes devises ou par Changes fixes pour l'Euro;

**Date devise**: date où vient calculé la valeur du change comme rapporte entre la monnaie de la société et celle du client, selon les paramétrages dans le tableau Changes devises;

**Notes initiales**: il est possible d'insérer des notes qui ont été insérées précédemment en 'Notes codées'. Pour ce l'utilisateur doit exécuter double click sur le champ 'Notes initiales' pour ouvrir 'Aide notes codées' et pour sélectionner les données, ou avec le touche droit du souris est possible ouvrir une fenêtre pour pouvoir spécifier un texte bien long de note, si le champ contient une valeur vient changé la couleur du fond du champ.

**Commande**: il permet de lier le document à une commande;

**Rif. FA et Type**: après avoir créé le virement d'une facture, l'utilisateur doit relier les deux factures en insérant dans le virement le numéro, la date et le type de la facture d'origine;

**Reg. ** **Comp.**: il ramène le numéro, la date et le protocole de l'enregistrement comptable dérivé par la comptabilisation de la facture;

**État** ** document**: la donnée se réfère à au tableau des étatsdocument, la donnée doit être inséré par l'utilisateur et peut-être utilisé par les procédures de réplication de l'ERP installées pour la gestion d'un siège avec des points de vente.

Certains champs de l'en-tête peuvent avoir une gestion un peu différente par celle de autres documents. Ces sont:

**Notre référence**: au moment qui vient completée la procédure 'Exécution par ordre', vient proposée aussi l'information présentedans le champ homonyme de l'ordre. Ce transfert est valable seul si la facture a été créée à travers le prélèvement des données par un seul ordre. Si la facture a été emise par un seul bon de livraison à travers la procédure 'Valorisation bons de livraison d'achat', ce champ propose l'information présente dans le champ homonyme du bon de livraison;

**Votre référence**: au moment que vient completée la procédure 'Exécution par l'ordre', vient proposée aussi l'information présente dans le champ homonyme de l'ordre. Ce transfert est valable seul si la facture a été créée à travers le prélèvement des données par un seul ordre. Si la facture a été emise par un seul bon de livraison à travers la procédure 'Valorisation bons de livraison', ce champ propose l'information présente dans le champ homonyme du bon de livraison;

**État facture**: au moment vient créée la facture, cette n'a aucun flag actif. Pour comptabiliser la facture il faut qui cette ait le flag 'Contrôllée' actif. Le flag 'Comptabilisée' est automatiquement sélectionné au moment que la facture supporte la procédure de comptabiliser; le flag 'Chargée' devient actif au moment que la facture supporte la procédure de chargé et vient enlevé avec la procédure de restauration de l'opération. Existe aussi la possibilité d'annuler la facture à travers le flag 'Annulée'.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les factures d'achat. |
|  [Exécution par la commande fournisseur](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note)  | Se réfère à la procédure pour créer une facture par une commande fournisseur. |
| Ouvrir le registre | Il permet de visualiser les données du registre. |
| Supprimer les paiements | Il permet de supprimer les paiements insérés dans l'en-tête; les paiements sont reprise par le registre. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de classement documentaire associée à la masque en utilisation. |






