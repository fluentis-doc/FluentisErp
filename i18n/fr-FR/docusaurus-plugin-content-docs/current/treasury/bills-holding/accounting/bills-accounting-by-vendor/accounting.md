---
title: Comptabilisation
sidebar_position: 1
---

À partir de ce masque s'avance à la comptabilisation du virement effets à fournisseur: la procédure ira à fermer le compte reliés au type des effets insérés dans le registre et effectuera le relevé des paiements fournisseur insérés dans le registre.

La partie supérieure du masque est dédiée au paramétrage des filtres de recherche: la comptabilisation des registres peut etre effectuée seul pour les registres de virement imprimés dans lesquels la section des effets est égale à la section paiements.

La section de **Paramétrage de la comptabilisation** peut être prédéfinie à l'intérieur des paramètres du formulaire Portefeuille effets. Se réfère à assigner la cause de comptabilité, les dates de référence pour l'enregistrement et les éventuels flag de comptabilisation et d'enregistrement provisoire.

Le flag **Regroupement** ** pour compte effet** signifie exécuter un enregistrement du type 'compte effet' à divers, où en ces divers seront présentes autant lignes que sont les effets à comptabiliser.

Le flag **Gestion** ** provisoire** ira à engendrer les enregistrements comptables du type provisoire.

Si la cause comptable prévoit le flag d'ouverture des comptes et l'effet a été créé manuellement sans associer un compte (ou son montant est supérieur au montant des comptes reliés), alors sera créés un compte client en avoir à rétribuer ensuite.

On rappelle que la comptabilisation registre peut-être effectuée aussi par l'intérieur du registre au moment de sa description.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Rechercher la liste des effets à comptabiliser. |
| Comptabilisation effets | Exécuter la comptabilisation pour les lignes sélectionnées. |






