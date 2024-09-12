---
title: Paramètres
sidebar_position: 3
---

Dans le deuxième dossier on va à gérer les paramètres de la procédure: les dates d'enregistrement et d'exercice, la cause de paiement à utiliser, les sous-comptes de la banque à débiter et ce de relevé du débit de la retenue (n'est pas obligatoire, si n'est pas présent sera utilisé le sous-compte inséré dans le type retenu). Le flag de clôture comptes, proposé par défaut, ne va jamais enlevé (aux fins de gérer la clôture des comptes).

Les options de regroupement prévues sont:

Le défaut **Regroupement** ** banque** sans le flag Regrouper les sous-comptes: en ce cas sera créée un unique enregistrement avec un unique mouvement bancaire (pour faciliter la réconciliation des mouvements avec le relevé de compte bancaire) au contraire les autres sous-comptes seront détaillées compensations pour compensation (pour un contrôle majeur des mouvements sur le compte des retenues). S'établit aussi le flag de regroupement des sous-comptes seront regroupés les données aussi des sous-comptes égaux mouvementés;

**Regroupement pour sous-compte**: en ce cas le regroupement sera effectué receveur pour receveur;

**Aucun regroupement**: en ce cas chaque rémunération aura un enregistrement séparé.

La section successive, activée par le flag de **Génération** ** paiements fournisseur**, permet de créer un registre de paiement dans le formulaire Paiements fournisseurs, aux fins de l'imprimer et envoyer télématiquement le tracé des virements bancaires par voie Remote Banking. Les champs à établir sont: le type de paiement du registre, le champ compte courant (il vient proposé par le registre lié au sous-compte bancaire inséré en haut) et éventuelle note finale à ramener en comptabilité en correspondance de la ligne banque.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Comptabilisation paiements | Il exécute la comptabilisation des paiements sélectionnés. |






