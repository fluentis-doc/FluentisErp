---
title: Taux TVA
sidebar_position: 2
---

Le tableau en objet est commun à toutes les sociétés présentes dans la base de données et présente la liste des taux TVA applicable en tout le gestionnel.

Il se réfère à un tableau préchargé sur lequel l'utilisateur habilité peut opérer pour modifier ou ajouter le nécessaire pour l'activité de la société.

Le masque est formé par trois sections: celle supérieure avec la liste des taux TVA, la section centrale permet de définir pour chaque taux TVA plusieurs sous-comptes d'achats/ventes à utiliser pour chaque 'Type comptabilisation TVA' attribue au client/fournisseur (ou prévu par défaut dans les paramètres de comptabilité; l'utilisation dépende aussi des paramétrages spécifiques des causes de comptabilité générale) et en basse un détail de notes codées spécifiques du taux, vous n'utilisez en aucune option standard du gestionnel.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Code | Code numérique d'identification du taux. |
| Description | Description qui viendra ramenée en toutes les impressions fiscales standard du gestionnel. |
| Pourcentage | Définir le pourcentage TVA à appliquer. |
| Cat. TVA | Il se réfère aux typologies de TVA fixes prévues par le gestionnel. La typologie est beaucoup importante, p.ex. pour la totalisation des divers mouvements dans les listes clients/fournisseurs ainsi comme dans la communication  du TVA annuel. |
| Pourc. Indéductible | Définir le pourcentage d'indéductiblité à appliquer aux impôts. |
| Plafond | Le flag définie quels taux devont être gérés, en augmentation ou baisse selon s'est en vente ou en achat, dans le calcul du Plafond TVA. |
| Dans la déclar. TVA | Le flag établi quels taux soient à gérer dans la déclaration/communication TVA annuelle. |
| N'Intra pas | Le flag établit le taux que, pourtant étant utilisées en documents (dans les formulaires factures achats/ventes) ou en enregistrements du type Intra Cee, il ne vient pas considéré telles. Vient dit dans la création automatique des récapitulations Intrastat et dans le calcul de la communication TVA annuelle. |
| Répub. San Marino | Le flag détermine quels soient les taux utilisés dans les opérations avec San Marino. |
| % TVA Agr. Déduc. | Le champ établit le pourcentage d'indudictibilité du taux en cas de mouvement en régime agricole. |
| Permeter TVA 0 en LJ | Le flag impose l'enregistrement de lignes TVA avec montant 0 soit débit que crédit dans le livre journal. La cause comptable d'utilisation, de toute façon, doit prévoir le même type d'autorisation  des lignes à 0. |
| Importer or argent | Le flag permet d'établir quels taux vont récapitulés dans les champs prévus dans la Communication TVA annuelle. |
| Importer ferrailles  | Le flag permet d'établir quels taux vont récapitulés dans les champs prévus dans la Communication TVA annuelle. |
| Pas dans le cli/four | Le flag permet d'excluire par la liste clients/fournisseurs les mouvements TVA reliés à ce taux. |

La section centrale permet de définir pour chaque taux TVA plusieurs sous-comptes achats/ventes à utiliser pour chaque 'Type comptabilisation TVA' attribuit au client/fournisseur (ou prévu par défaut dans les paramètres de comptabilité; l'utilisation dépende aussi par les paramétrages spécifiques des causes de comptabilité générale).



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Type compt. TVA | Code alphanumérique du type de comptabilisation TVA. |
| Descrip. Type comptab. | Description type de comptabilisation TVA. |
| Compte achats | Le compte d'achat à proposer pour ce type de comptabilisation TVA. |
| Sous-comptes achats | Le sous-compte d'achat à proposer pour ce type de comptabilisation TVA. |
| Description | Description du sous-compte d'achat à proposer pour ce type de comptabilisation TVA. |
| Compte ventes | Le compte de vente à proposer pour ce type de comptabilisation TVA. |
| Sous-compte vente | Le sous-compte de vente à proposer pour ce type de comptabilisation TVA. |
| Description | Description du sous-compte de vente à proposer pour ce type de comptabilisation TVA. |

La troisième section permet de définir un détail de notes codées spécifiques du taux, il n'utilise pas en aucune option standard du gestionnel.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Code | Code. |
| Notes | Champ notes. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour effectuer la recherche d'un taux TVA à travers le champ description. |
| Insertion | Bouton pour insérer un nouveau taux TVA. |
| Supprimation | Bouton pour supprimer un taux TVA sauf si cette n'a pas été déjà utilisée. |
| Aperçu avant impression | Bouton pour effectuer l'aperçu avant impression des taux TVA. |
| Impression | Bouton pour effectuer l'impression des taux TVA. |






