---
title: En-tête
sidebar_position: 1
---

L'insertion d'une facture de vente demande:

Type facture: prédéfini en [Home > Tableaux > Vente]. À chaque document vient assigné un numéro selon la numérotation spécifiée par l'utilisateur dans la tableau ‘Numérotation' et au type de document qui contient la numérotation; l'année et la date courante vient compilée en automatique.

Avec l'insertion du client viennent proposés, en automatique, tous les données spécifiés dans le tab 'En-tête', selon les données établis précédemment dans le registre client. Les données proposés, s'ils ont été spécifiés dans le registre, sont:

**Expédition**: il vient proposée l'information insérée dans le registre client, tab 'Expéditions' (tableau de référence 'Expéditions');

**Port**: il vient proposée l'infomation insérée dans le registre client, tab 'Expéditions' (tableau de référence 'Port');

**Emballage**: il vient proposée l'information insérée dans le registre client, tab 'Expéditions'(tableau de référence 'Emballages');

**Pays**: il vient proposée l'information insérée dans le tab 'Donnes communes' dans le registre client (tableau de référence 'Pays');

**Zone**: il vient proposée l'information insérée dans le registre client, tab 'Expéditions' (tableau de référence 'Zones');

**Catalogues**: il vient proposée l'information insérée dans le registre, tab 'Catalogues', mais seul s'existe un offre par défault (tableau de référence 'Catalogue de vente');

**De (date validité)**: le catalogue sélectionné est valable en partant de cette date;

**À (date validité)**: le catalogue sélectionné est valable jusqu'à cette date;

**Langue**: il vient proposée l'information insérée dans le tab 'Données communes' dans le registre client;

**Devise**: il vient proposée l'information insérée dans le registre client, tab 'Administratif' (tableau de référence 'Devises');

**Change devise**: si la devise de la société est égal à celle du document, le valeur reporté sera 1, autremment le valeur sera reprise de Changes devises ou de Changes fix pour l'EURO;

**Date devise**: date pour laquelle vient calculé le valeur de change comme rapport entre la monnaie de la société et celle du client, selon les paramétrages dans la tableau 'Changes devises';

**Notes initials**: il est possible insérer des notes qui on été inséré precédémment en 'Notes codées', et donc, l'utilisateur doit effectuer double click sur le champ 'Note initial' pour ouvrir 'Aide note codées' et pour sélectionner les données, ou avec le touche droit du souris est possible ouvrir une fenêtre pour pouvoir spécifies un long text de note, si le champ contient un valeur viendra changé le couleur du fond du champ;

**Annotations registre**: il vient proposée l'information insérée dans le registre client, tab 'Administratif', ou avec le touche droit du souris est possible ouvrir une fenêtre pour pouvoir spécifier un long text de note, si le champ contient un valeur viendra changé le couleur du fond du champ;

**Destination et destinataire**: il vient proposée l'information insérée dans le registre client, tab 'Expéditions';

**Utilisateur**: il permet d'insérer l'utilisateur qui crée le document (tableau de référence 'Cherche personnel') dans la zone administrative/personnel. Cette option doit être établi dans les Paramètres du même document;

**Commande**:il  permet de relier le document à une commande de vente;

**Réf. FT et Type**: après avoir créer le ristourne d'une facture, l'utilisateur doit relier les deux factures en insérant dans le ristourne le numéro, date et type de la facture d'origine;

**Enreg.Compt.**: rapporte le numéro, date et protocole de l'enregistrement comptable dérivée par la comptabilisation de la facture;

**État doc.**: la donnée se référer au tableau des états document, le donnée doit être inséré par l'utilisateur et peut  être utilisé par les procedures de répétition de l'ERP, installées pour la gestion d'une siège avec des points de vente;

**EDI**: la date de transmission du document des procedures de EDI;

**Date effective**: il se réfère à la date du calcul des échéances de paiement.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les factures de vente. |
| Exécution par ordre client | Il se réfère à la procédure par créer une facture par un commande client. |
| Créer facture par prélèvement | Il permet de reprendre les articles par une liste de prélèvement. |
| Créer facture par les catalogues de vente | Il permet de reprendre les articles par les catalogues de vente. |
| Créer facture par bordereau d'expédition | Il permet de reprendre les articles par le bordereau d'expédition. |
| Aide destinataire/destination | Il permet de visualier et insérer les destinataires/les destinations par le registre client. |
| Supprimer facture | Il exécute la procédure par supprimer une facture précédemment insérée. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de classement documentaire associée à la masque en utilisation. |






