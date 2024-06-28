---
title: Plan des comptes industriel
sidebar_position: 1
---

La codification du plan des comptes industriel prévoit de partir par l'insertion de la liste des groupes dans la section supérieure du masque: à travers les boutons d'insertion regroupements/groupes sera possible d'insérer nouveaux premiers niveaux ou niveaux inférieurs à ce sélectionné, en attribuant à chacun un code alphanumérique univoque, une description et un type compte de référence. Le type compte de référence est le même type des comptes de comptabilité générale.

Une fois sélectionné le groupe de niveau plus bas s'activera, dans la grille en dessous, la liste des comptes industriels insérés à l'intérieur de ce. À différence du plan de comptabilité générale, dans la comptabilité industrielle n'est pas prévue l'insertion du niveau des comptes (c'est-à-dire un code de compte sans un sous-compte) mais s'avancera directement à la création du détail compte, sous-compte: chacun de ces champs peut être un code alphanumérique de 7 caractères, aussi s'est conseillé suivre un critère numérique progressif avec uniformité de caractères (p.ex. tous les comptes à 4 caractères, tous les sous-comptes à 3). Le type compte de chaque ligne qui vient insérée sera proposé comme le type compte du groupe d'appartenance: il se réfère de toute façon d'un code proposé que l'utilisateur peut modifier.

En allant à lire dans les détails, dans les diverses colonnes présentes dans la liste sera possible de voir:

**Compte/Sous-compte** de comptabilité générale associé. Le champ est optionnel et permet de définir quel est le sous-compte général associé au sous-compte d'industriel en utilisation, pour valoriser automatiquement la générale par l'insertion de l'industrielle;

**Date d'insertion**: il est la date de création du compte/sous-compte;

**Date dernier variation**: il est la date de la dernière modification du code de compte/sous-compte, actualisée automatiquement par le système;

**Date de fine validité**: il sert pour bloquer l'utilisation du sous-compte en nouveaux enregistrements industriels (à partir par la date insérée), en maintenant la visibilité des mouvements précédemment insérés;

**Business Process**: le champ permet d'associer le sous-compte industriel à un Business Processe. Actuellement le champ n'est pas en utilisation;

**Cat. produit**: le champ permet d'associer le sous-compte industriel à une catégorie de produits, pour fins statistiques.

Dans les sections inférieures il est possible d'associer à chaque sous-compte industriel aux centres de coût/profit (et aux activités, n'enutilisation pas): cette structure de valorisation pourcentage au Centre de coût/profit sera proposé automatiquement (pour les seuls sous-comptes économiques), en laissant à l'utilisateur la possibilité de modifier les valeurs manuellement où nécessaire.

La liaison vient effectuée semplicement en sélectionnant le sous-compte de référence et en insérant la liste des cdc/cdp dans les deux grilles (en indiquant obligatoirement aussi un Business Process associé): il est possible de relier la valorisation sur les divisions d'entreprise différentes, mais normalement la division ne vient pas compilée. Il n'a aucun contrôle que la somme des pourcentages insérés soit égale au 100%.



Se rappèle aussi que:

- la valorisation en comptabilité industrielle dépende par la présence des flag relatifs aux cdc/cdp dans la cause industrielle ou générale associée au mouvement;

- est possible prévoir une double valorisation: p.ex., si un sous-compte de coût a soit cdc que cdp reliés, la cause peut prévoir de nouveau les deux et avec l'option 'Gestion séparée cdc/cdp' seront les deux valorisés, autrement seront valorisés les seuls cdc pour les coûts (et en cas de sous-comptes de produit seront valorisés les cdp).

Il y a outres points de codification des centres de coût/profit: registres clients/fournisseurs/agents, registres articles, entrepôts et immobilisations. La priorité de valorisation vient définie normalement dans les paramètres de gestion du chaque formulaire.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Avec ce bouton s'exécute la recherche des sous-comptes selon les filtres de recherche établis à l'intérieur du groupe sélectionné. |
| Nouveau compte | Il établit le curseur à l'insertion d'un nouveau sous-compte industriel à l'intérieur du groupe sélectionné. |
| Rechercher le compte en haut | Rechercher les sous-compte de filtre dans les groupes précédents. |
| Rechercher les compte en bas | Rechercher le sous-compte de filtre dans les groupes suivants. |
| Supprimer le compte | Exécuter la supprimation du sous-compte industriel sélectionné. Il n'est pas possible supprimer un sous-compte si ce a été utilisé dans le système. |
| Nouvelle classe | Exécuter l'insertion d'un nouveau groupe 'racine' dans la structure du plan des comptes industriel. |
| Nouveau compte | Exécuter l'insertion d'un nouveau sous-groupe à l'intérieur du groupe sélectionné dans la structure du plan des comptes industriel. |
| Supprimer le compte | Exécuter la supprimation du groupe sélectionné. |
| Augmentation | Augmentation de la tabulation de la structura à arbre. |
| Diminution | Diminution de la tabulation de la structure à arbre. |
| Exploser | Exploser l'arbre en-dessous au groupe sélectionné. |
| Imploser | Imploser l'arbre en-dessous au groupe sélectionné. |
| Nouvelle activité | Imposer le curseur à l'insertion d'une nouvelle activité pour le sous-compte sélectionné. |
| Supprimer l'activité | Supprimer l'activité sélectionnée. |
| Nouveau CDC | Imposer le curseur à l'insertion d'un nouveau centre de coût pour le sous-compte sélectionné. |
| Supprimer CDC | Supprimer le centre de coût sélectionné. |
| Nouveau CDP | Imposer le curseur à l'insertion d'un nouveau centre de profit pour le sous-compte sélectionné. |
| Supprimer CDP | Supprimer le centre de profit sélectionné. |
| Aperçu avant impression | Exécuter l'aperçu avant impression des sous-compes industriels pour le groupe sélectionné. |
| Impression | Exécuter l'impression des sous-comptes industriels pour le groupe sélectionné. |






