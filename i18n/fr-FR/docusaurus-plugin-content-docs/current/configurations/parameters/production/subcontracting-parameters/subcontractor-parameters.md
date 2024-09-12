---
title: Paramètres sous-traitants
sidebar_position: 1
---

La fenêtre des Paramètres de sous-traitants s'ouvre à travers le parcours Home > Paramètres > Production > Paramètres de sous-traitants. À travers cette fenêtre ils viennent établis tous les paramètres qui concernant la gestion du sous-traitant et plus en spécifique la façon où doivent être exécutées les mouvementations d'entrepôt amorcer par les procédures du même formulaire.

Dans la section **Livraisons matériaux à sous-traitants** ils viennent établis l'entrepôt et la relative cause qui doivent être considérés pour la décharge des matériaux adressés aux sous-traitants. Donc l'entrepôt établi est l'entrepôt d'où seront déchargés les matériaux insérés dans les tab matériaux à livrer de la commande de sous-traitant.

Dans la section **Charges matériaux à sous-traitants** ils viennent établis l'entrepôt et la relative cause qui doivent être considéréspour la charge des matériaux adressés aux sous-traitants. Donc l'entrepôt établi est l'entrepôt sur lequel seront chargés les matériaux insérés dans les tab matériaux à livrer de la commande de sous-traitant. Ces données viennent reprises par la cause de contrepartie insérée dans le tableau des causes en correspondance de la cause qui effectue le décharge des matériaux adressés aux sous-traitants (c'est-à-dire la cause établie dans le menu déroulant de la section 'Livraisons matériaux à sous-traitants').

Dans la section **Livraisons matériaux entre sous-traitants** ils viennent établis l'entrepôt et la relative cause qui doivent être considérés pour le déplacement des matériaux par un sous-traitant par un autre. Ces données viennent utilisés dans le masque appellé 'Transfert entre sous-traitants'.

Dans la section **Consommation** ** matériaux utilisés** ils viennent établis l'entrepôt et la relative cause qui doivent être considérés pour la décharge des matériaux que les sous-traitants ont utilisés. Donc l'entrepôt établi est l'entrepôt par qui seront déchargés les matériaux insérés dans le tab Matériaux utilisés de la rentrée de sous-traitant.

La section **Rentrée produit sujet** ** à CQ** est actuellement n'active pas.

Dans la section **Rentrée produit** ilsviennent établis l'entrepôt et la relative cause qui doivent être considérés pou le charge des produits finis (ou semi-finis) que les sous-traitants ont réalisés. Donc l'entrepôt établi est l'entrepôt sur lequel seront chargés les articles insérés dans le tab Articles rentrés de la Rentrée de sous-traitant.

Dans la section **Matériel retour **ils viennent établis l'entrepôt et la relative cause qui doivent être considérés pour les charges des retours. Donc l'entrepôt établi est l'entrepôt sur lequel seront chargés les articles insérés dans le tab Matériaux utilisés dans la rentrée du sous-compte et à laquelle a été associée une quantité retour.

Dans la section **Type** ** bon de livraison** on établit le type bon de livraison de vente qui doit être proposé par défaut au moment qu'on utilise la procédure de création bons de livraison de sous-traitant. Ce type de bon de livraison utilisera en automatique entrepôt et cause établis dans le menu déroulant de la voix 'Livraisons matériaux à sous-comptes' qu'on trouve dans lafenêtre des paramètres de sous-traitant.

Le flag **Code opérateur obligatoire** permet de décider s'il est nécessaire insérer le code opérateur au moment où on insère le bon de livraison de sous-traitant.

Dans la boîte 'Dernier numéro commande de sous-traitant insérée' vient visualisé le dernier numéro progressif utilisé dans les commandes de sous-comptes.

**Données matériaux proposés**: il visualise les 4 différentes possibilités que l'utilisateur a de faire proposer automatiquement à la procédure les matériaux dans le tab Matériaux à livrer de la commande sous-traitant. Les possibilités sont les suivantes: 1. Par la dernière livraison effectuée chez le sous-traitant: on contrôle la dernière commande de sous-traitant engendrée pour le même sous-traitant et où est présent le même article à produire; 2. Explosion niveau par la structure registre: on contrôle la nomenclature de l'article inséré dans le tab Articles a produire; 3. Livraison du même article à proposer: on insère dans le tab Matériaux à livrer le même article inséré dans le tab Articles à produire; 4. Aucun matériel: dans le tab Matériaux à livrer ne vient pas proposé aucun matériel.

Le flag **Proposition du dernier prix de travail** effectué s'est activé, permet de faire proposer dans la commande de sous-traitant, dans la case du prix unitaire de travail du tab Articles à produire, le prix de la dernière commande sous-traitant émis pour cet article pour le meme sous-traitant.

Le bouton radio **Valor. de travail matériaux à cout **permet de définir si la valorisation de travail des matériaux doit arriver à cout dernier ou à cout moyen. Donc il se réfère à une méthode pour décider si les matériaux utilisés par les sous-traitants soient être imputés au travail en utilisant le cout dernier ou le cout moyen entre ces insérés dans le registre du même article.

Le menu déroulant Version/Option: permettent de sélectionner la version de la nomenclature et la relative option. Généralement les données viennent proposés par défaut égales à la version active et à l'option de base.

La section **Données** ** des matériaux proposés dans les commandes de sous-traitants** est formée à sa façon par autres 5 sections:

**Considérer les disponibilités** ** qui provenant par**: il est possible de décider si considérer ou non les disponibilités qui provenant par le sous-traitant/production/achats/entrepot/ventes; chacun de ces flag indiquent la volonté par l'utilisateur de faire en façon que la procédure de création de la commande de sous-traitant considère la disponibilité des matériaux sur la base des informations qui proviennent par simples zones applicatives de l'ERP. Donc par exemple si l'utilisateur choix d'activer le flag seul sur Achats et pas sur Ventes, signifie qui seront considérées les disponibilités provenances par les commandes fournisseurs, par les bons de livraison et factures d'achat et par demandes d'achat et pas ces provenances par commandes clients, bons de livraisons et factures de vente;

**Produits** ** finis** (flag): il permet de choisir, au moment de l'insertion d'un article dans le tab Articles à produire de la commande de sous-traitant, si considérer les quantités des mêmes articles sur la base du lot économique, et/ou considérer éventuellement aussi les multiples du lot;

**Matériaux**: il permet de choisir, au moment de l'insertion d'un article dans le tab Articles à produire de la commande de sous-traitant, si considérer pour les matériaux à livrer les quantités des mêmes articles sur la base du lot économique, et/ou considérer éventuellement aussi les multiples du lot;

**Régénération matériaux de l'actualisation de l'article**: si le flag est activé, toutes les fois qu'on effectue une modification sur la ligne article présente dans le tab Articles à produire de la commande de sous-traitant la procédure régénère les informations relatives aux matériaux à livrer, à utiliser et à insérer dans le dernier tab dumême ordre;

**Entrepôt**: il permet de choisir si considérer les entrepôts sur la base du type de bon de livraison de rentrée ou au type de bon de livraison, au contraire qui utiliser les paramétrages insérés dans le menu déroulant des voix 'Livrer matériaux à sous-traitants' et 'Rentrée produit'.

Le flag **Contrôler la disponibilité** permet de décider si faire en façon que la procédure contrôles ou non la disponibilité provenance par les flags établit dans la section 'Considérer les disponibilité provenantes par'.

Le flag **Disponibilité** ** obligatoire**, s'actif, empêche l'insertion de matériaux en commande de sous-traitant en cas de manquée disponibilité à la date éventuelle livraison au sous-traitant.

Le flag **Aucun matériel** ** en livraison**, s'actif, fait en façon que dans le tab Matériaux à livrer ne soit pas inséré aucun article pour aucun article à produire.

Le flag **Contrôle** ** disponibilité matériaux**, s'actif, fait en façon que la procédure considère aussi la disponibilité des matériaux à utiliser dans le cours de l'effectuation de la rentrée par le sous-traitant.

Le flag **Charge/Décharge** ** automatique**, s'actif, permet à l'utilisateur de faire en façon que l'animation de l'entrepôt en sorite arrive automatiquement dès que le bon de livraison vient imprimé. Ce permet de sauter le pas de la décharge des bons de livraison de sous-traitant.

Le flag **Bloquer l'insertion document ** **en date fériée**, s'actif, empêche l'insertion d'un ordre, d'un bon de livraison et d'une rentrée de sous-traitant en date fériée.

Le flag **Cout zéro ** **en absence du** ** catalogue**, s'actif, permet l'insertion d'un article dans le tab Articles à produire de la commande de sous-traitant sans que la procédure insère comme prix unitaire de travail le cout dernier de l'article prise par son registre; donc il vient inséré un prix unitaire égal à zéro.

Le flag **C** **ontrôle** ** sous-traitant de référence pour les articles**, s'actif, permet à l'utilisateur de faire en façon que la procédure de création des commandes de sous-traitants contrôle si l'article qu'on est en train d'insérer dans le tab Articles à produire aie, comme fournisseur préférentiel, le sous-traitant inséré dans l'en-tête du même ordre.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les modifications effectuées sur les paramètres de sous-traitant. |






