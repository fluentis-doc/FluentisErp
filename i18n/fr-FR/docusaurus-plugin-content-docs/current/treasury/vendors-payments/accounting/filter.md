---
title: Filtre
sidebar_position: 1
---

La partie supérieure du masque est dédiée aux filtres de recherche du paiement créé dans le formulaire mais n'encore comptabilisés: dans la grille seront visualisés en effet toutes les lignes de détail des paiements présents dans les divers registres, qui pourront donc être comptabilisées partiellement. La situation normale, de toute façon, prévoit de filtrer avec les références du registre et la comptabiliser en bloc.

Sur la base du masque ils vont insérées les données de gestion de l'opération: il se réfère à la cause de comptabilité à utiliser pour l'enregistrement, des dates d'enregistrements et paiements, du sous-compte de relevé des réductions actives insérées dans le registre (ce sous-compte vient proposé sur la base du sous-compte 'Survenances actives' insérées dans les paramètres de comptabilité), une date et numéro document optionnel à insérer comme références de l'en-tête de l'enregistrement (pourrait être le numéro/date registre).



Sur la droite est présente un flag par défaut de 'Relevé de la clôture des comptes' (proposé par défaut, à n'enlever pas) et le critère de gestion du regroupement en comptabilité: l'option par défaut, regroupement banque, permet de relever un enregistrement pour chaque sous-compte banque de sortie, qui est la gestion meilleure aux fins de simplifier la réconciliation des mouvements bancaires par les impressions des relevés de compte. En alternative est disponible un regroupement pour le sous-compte fournisseur et une option d'enregistrement détaillé paiement pour paiement.

Si la cause comptable prévoit la gestion de la date devise banque et à l'intérieur du registre banques a été défini un numéro de jours pour son calcul en relation à la cause comptable utilisée, le champ sera géré en automatique dans l'enregistrement résultant.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour la recherche des comptes payés avec les registres du formulaire. |
| Comptabilisation | Bouton pour la comptabilisation et contextuelle clôture des comptes payés. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des paiements qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des paiements, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des paiements.






