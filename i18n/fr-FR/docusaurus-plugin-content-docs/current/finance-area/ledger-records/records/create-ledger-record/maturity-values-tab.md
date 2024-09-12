---
title: Tab comptes
sidebar_position: 3
---

Le dossier Comptes est présent seul si la cause a le flag 'Ouverture des comptes' établi.

La première section du dossier 'Comptes' est dédiée à la gestion des données de calcul des comptes en dessous: pour l'enregistrement manuel du type TVA on va trouver la grille compilée avec les données par défaut ainsi comme inséré à l'intérieur du registre client/fournisseur/agent assigné comme sous-compte titulaire du même enregistrement. Pour autres types d'enregistrement (par exemple, pour les paiements avancés il est possible de coder une cause qui ouvre le compte, dans le signe opposé, au contraire pas la fermer si le document n'a pas encore été relevé): en ce cas la gestion de cette section devient manuel, sa façon que l'utilisateur pourra insérer les données essentielles du type de paiement, de la solution de paiement et du sous-compte de référence, avec le 100% inséré dans le champ 'Pourcentage'.



Pour cette section il faut signaler que:

- le compte peut être créé aussi sur les sous-comptes pas de registre qui n'ont pas le flag Ouverture comptes dans le plan des comptes (ce flag est relatif au seul contrôle que les données du journal et les comptes correspondent pour les sous-compte qui l'a établi);

- les appuis bancaires sont ramenés typiquement par le registre ou par le document comptabilisé par la zone des achats/vents/receveurs, mais peuvent être de fois en fois forcée en utilisant l'aide ABI/CAB. L'appui bancaire relié en cette section sera le donné normalement utilisé dans les paiements fournisseurs quelle banque bénéficière du paiement sauf n'a pas été établi le flag d''Imposer la banque d'appui présent dans le registre du fournisseur';

- normalement il vient inséré le champ 'Pourcentage'. Le sens des champs 'Montant/Impôt' est le suivant: dans le champ 'Montant' il est possible d'insérer un montant fix par utiliser pour la combinaison type pai./solution pai. de la ligne en gestion; le champ 'Impôt' permet de définir, de ce montant, combien soit référable au TVA (il se sert si la solution de paiement prévoit des pourcentages imposable/impôt différences entre différents versements, pour obtenir un calcul correct). Il est possible d'insérer une combinaison impôt/pourcentage (déjà en registre): la procédure ira à valoriser le compte avec le type/soluction de paiement jusqu'à la couverture du montant et dans l'excédent ira à calculer selon le pourcentage de la ligne alternative (par ex. montant 1000 pour BB 30 jj, pourcentage 100 pour RB 60/90: si le montant et de 1500 seront créés un compte pour 1000 pour BB à 30 jj, deux comptes par 250 comme RB à 60 et 90 jours);



- le flag Regrouper les comptes qu'on trouve à gauche vient reprise par le registre client/fournisseur: n'a pas une utilisation pratique, parce qu'il est rare que deux comptes aient le même type de paiement et la même date échéances à l'intérieur du même document;

- en-dessous il y a certains champs de récapitulation de la situation client/fournisseur: le montant du crédit accordé dans le formulaire Risque client, la valeur de l'exposition obtenu selon la situation des comptes ouverts (sans considérer l'enregistrement en utilisation) et le solde comptable (en considérant aussi l'enregistrement en utilisation);

- dans le cas d'enregistration qui dérive par la comptabilisation impayée, la grille supérieure N'a AUCUNE importance pour le calcul des comptes qui se trouvent en bas (typiquement le registre prévoit les comptes pour RB, mais les impayés viennent gérés comme BB et ne doivent pas remettre en autre reçu bancaire): il vient lit uniquementsi sert le donné des appuis bancaires.

La grille en-dessous présente la liste des comptes calculés selon les paramétrages supérieurs: l'utilisateur peut forcer le type de paiement, la date échéance pour la faire correspondre à la donnée du document, il peut aussi forcer les montants des divers versements (en aient soin de respecter les totals). Plus important, peut-être, est la disponibilité de bloquer directement le paiement du compte: la procédure memorisera la date et l'utilisateur qui a bloqué le paiement (avec l'éventuelle note explicative) ainsi comme la date et l'utilisateur qu'on débloque ( pour les deux les opérations sont prévus spécifiques droits d'utilisateur dans l'ApplicationUserManager). Ultérieurs éléments à gestion manuel sont: la position du compte, qu'il est un tableau libre définible par l'utilisateur, en permettant de classifiquer en quelque façon les comptes comptables jusqu'au moment de leur création; les notes du compte, qu'il est possible aussi de lier automatiquement en cause comptable à la description de détail du sous-compte ainsi comme insérés en comptabilité. La grille des comptes NE permet PAS l'insertion manuel d'un seul versement. Le dernier champ prévoit la disponibilité d'assigner (ou modifier) l'agent de référence pour le compte: ce vient valorisé automatiquement sur la base de l'agent inséré dans la facture de vente dans l'acte de la comptabilisation (si sont présents plus agents, sera assigné ce avec commissions supérieurs). Si la cause prévoit soit l'ouverture des comptes, que la clôture pour la compensation et aie été actié aussi le flag 'Avis', au moment de l'enregistrement de l'enregistrement viendra restitué à l'utilisateur un message d'avis de la présense de comptes à pouvoir compenser.

La grille en dessous présente la liste des comptes calculés selon les paramétrages supérieurs: l'utilisateur peut forcer le type de paiement, la date échéance pour la faire correspondre à la donnée du document, il peut aussi forcer les montants des divers versements (en aient soin de respecter les totals). Plus importante, peut-être, est la disponibilité de bloquer directement le paiement du compte: la procédure mémorisera la date et l'utilisateur qui a bloqué le paiement (avec l'éventuelle note explicative) ainsi comme la date et l'utilisateur qu'on débloque ( pour les deux les opérations sont prévus spécifiques droits d'utilisateur dans l'ApplicationUserManager). Ultérieurs éléments à gestion manuelle sont: la position du compte, qu'il est un tableau libre définible par l'utilisateur, en permet des classifiquer en quelque façon les comptes comptables jusqu'au moment de leur création; les notes du compte, qui est possible aussi lier automatiquement en cause comptable à la description de détail dusous-compte ainsi comme inséré en comptabilité. La grille des comptes NE permet PAS l'insertion manuelle d'un seul versement. Le dernier champ prévoit la disponibilité d'assigner (ou modifier) l'agent de référence pour le compte: se vient valorisé automatiquement sur la base de l'agent inséré dans la facture de vente dans l'acte de la comptabilisation (si sont présents plus agents, sera assigné ce avec commissions supérieures). Si la cause prévoit soit l'ouverture des comptes, que la clôture pour la compensation et ait été actée aussi le flag 'Avis', de l'enregistrement de l'enregistrement viendra restitué à l'utilisateur un message d'avis de la présence de comptes à pouvoir compenser.

RIBBON BAR: ilreprésente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'enregistrement. |
| Nouvel enregistrement | Bouton pour créer un nouvel enregistrement. |
| Paramètres d'insertion | Il se réfère aux paramètres d'insertion du livre-journal. |
| Ouvrir le registre | Bouton pour rappeler, la gestion registre du sous-compte sélectionné, ou en absence, la recherche d'un autre registre. |
| Supprimer les comptes | Bouton pour supprimer le compte crée en automatique sr la base de la typologie de paiement insérée. |
| Supprimation par la grille des paiements | Bouton pour supprimer la solution de paiement, proposée en automatique par le registre, ou insérée manuellement. |
| Recalculer les comptes | Bouton pour recalculer le compte forcé manuellement. |
| Regrouper les comptes | Bouton pour regrouper les comptes en présence de plusieurs comptes avec la même date d'échéance. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document Manager | Bouton pour la liaison à la gestion documentale. |






