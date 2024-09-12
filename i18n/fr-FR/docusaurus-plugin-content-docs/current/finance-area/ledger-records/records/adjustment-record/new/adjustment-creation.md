---
title: Création redressement - Général
sidebar_position: 1
---

Avec cette procédure il est possible de faire calculer à la procédure les données des comptes de régularisation relatifs aux enregistrements comptables présents sur la base des données: il se réfère aux rectifications/intégrations (respectivement comptes de régularisation) relatives à assurances, locations, loyers de leasing ou assistance, qui ont pour caractéristique propre ces d'être relatifs à une période.

Les conditions pour exploiter cette procédure sont:

1) Ils ont été définis, dans le tableau Types compte, les types de compte économique 'à rectifier' qui s'identifient pour le flag 'Service' activé. Le calcul vient effectué, ainsi comme dans les bilans intermédiaires, pas pour tous les sous-comptes mais seul ces pour lesquels dans le plan des comptes a été assigné ce type de compte de coût ou de profit particulier.



2) Ils ont été définis dans les paramètres de comptabilité les sous-comptes standard de relevé des mouvements de compte de régularisation actif/passif. On rappelle qu'à niveau du plan des comptes, dans chaque sous-compte de coût/produit il peut être spécifiés sous-compte du compte de régularisation qui seront utilisés en priorité pour le relevé dès l'intégration ou rectification.



3) Ils ont été utilisés correctement les gammes de dates économiques d'exercice dans les mouvements de comptabilité. On rappelle, à propos, que pour qui veut utiliser l'option on conseille d'établir les paramètres d'insertion utilisateurs avec l'option 'Aucune date pour type compte service' afin d'obliger l'utilisateur à insérer, fois pour fois, la gamme de dates économiques valables pour chaque mouvement.






