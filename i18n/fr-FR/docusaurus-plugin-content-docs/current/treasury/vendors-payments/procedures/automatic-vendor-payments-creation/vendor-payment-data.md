---
title: Données paiement fournisseur
sidebar_position: 2
---

À l'intérieur du deuxième dossier **Paramètres** ils vont établis les divers éléments de gestion de la procédure: avant de toute va insérée la banque de référence, qui sera la banque titulaire du registre. Normalement il se réfère à un code relié à un registre banques, aux fins de reprendre par ce le champ du compte courant et avoir toutes les données à insérer dans l'envoi télématique des virements Italie.

Le flag **Utiliser la banque de paiement par le compte du fournisseur**, en absence du registre imposera à la procédure de créer autant registres qui sont les banques de paiement assignées aux divers comptes sélectionnées dans la procédure de gestion d'appui paiement, ou insérées dans le registre  du fournisseur. En absence des deux le paiement sera inséré dans le registre pour le code banque établi dans le champ initial.

Le flag **Utiliser la banque d'appui présent dans le registre du fournisseur** force l'assignation des codes bancaires du bénéficier en le lisant par la ligne banque par défaut inséré dans la section banques d'appui du dossier paiements du registre fournisseur. Ce flag peut être prédéfini à l'intérieur des paramètres du formulaire.

Le type paiement permet de définir la typologie de paiement à assigner au registre: le champ devient obligatoire seul au moment que les comptes à payer prévoient typologies de paiement n'uniforme pas.

**L'année** **et la date d'émission** sont définies par défaut sur la base de la date du système.

Le flag de **Paramétrage** ** date devise bénéficier** permet d'assigner, à l'intérieur du tracé télématique, une date devise pour le bénéficier du paiement, qui si n'est pas établi vient assignée comme date d'aujourd'hui. Si le flag n'est pas établi la date devise sera égal à la date échéance.

Le champ **Notes initiales** est un champ libre de notes de paiement, n'utilisé pas dans le Standard.

Le champ **Notes finales** vient utilisé dans la comptabilisation paiements pour valoriser la description de détail du mouvement comptable du sous-compte bancaire.

Le flag de **Comptabilisation** ** de l'opération** permet de relever directement la clôture des comptes et les relatifs mouvements de compte double des paiements en création: si n'utilisée pas sera possible d'utiliser ensuite la procédure séparée de comptabilisation.

La cause de comptabilité à utiliser pour l'enregistrement, des dates d'enregistrement et paient, du sous-compte de relever des réductions actives insérées dans le registre (ce sous-compte vientproposé sur la base du sous-compte 'Survenances actives' insérées dans les paramètres de comptabilité), une date et numéro document optionnel à insérer comme références de l'en-tête de l'enregistrement (pourrait être le numéro/date registre).



Sur la droite est présent un flag par défaut de **Relevé de la clôture ** **des comptes** (proposés par défaut, à n'enlève pas) et les critères de gestion du regroupement en comptabilité: l'option par défaut, regroupement banque, permet de relever un enregistrement pour chaque sous-compte bancaire de sortie, qui est la gestion meilleure aux fins de simplifier la réconciliation des mouvements bancaires par les impressions des relevés des comptes. En alternative est disponible un regroupement pour sous-compte fournisseur et une option d'enregistrements détaillé paiement pour paiement.

Si la cause comptable prévoit la gestion de la date devise bancaire et à l'intérieur du registre bancaire a été défini un numéro de jours pour son calcul en relation à la cause comptable utilisée, le champ sera géré en automatique dans l'enregistrement résultant.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Début de la création du paiement à comptes | Bouton à travers lequel avances à la création du paiement/registre et si prévu aussi de la comptabilisation du même paiement. Le bouton est actif après avoir sélectionné au moins un compte dans le premier tab et après avoir indiqué la banque de paiement du présent tab. |






