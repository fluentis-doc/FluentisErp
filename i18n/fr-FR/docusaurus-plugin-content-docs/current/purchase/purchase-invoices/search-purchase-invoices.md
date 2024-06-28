---
title: Rechercher les factures d'achat
sidebar_position: 2
---

La procédure Rechercher factures d'achat a été désignée pour permettre à l'utilisateur de rechercher facilement les factures précédemment insérées, avec le bût de les visualiser, les modifier, éventuellement les supprimer ou avancer à l'insertion d'une nouvelle facture, après la possibilité d'avoir les droits nécessaires pour ces opérations.

Avec l'aide des filtres est possible visualiser: un seul document (p.ex. rechercher pour numéro document), plus documents (p.ex. rechercher pour date), les documents insérés en une année (p.ex. rechercher pour année), les documents insérés pour un certain fournisseur (p.ex. rechercher pour compte/sous-compte). En plus, il y a la possibilité de chercher les documents qui contiennent un certaine article ou une certain classe articles en utilisation 'Rechercher articles'.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher les factures | Bouton pour rechercher les factures dans la base de données. |
| Nouvelle facture | Bouton pour créer une nouvelle facture. |
| Modifier la facture | Bouton pour modifier une facture précédemment insérée. |
| Visualiser la facture | Bouton pour visualiser les factures précédemment insérées. Il ne permet la modification. |
| Supprimer la facture | Bouton pour supprimer une facture précédemment insérée. |
| Doubler la facture | Bouton pour doubler une facture. Il permet la création d'une copie d'un document, en ramenant toutes les conditions du document d'origine mais avec les données actuels. |
| Virement facture | Bouton pour créer le document de virement par la facture d'origine insérée. Au moment que l'utilisateur exécute le virement sort une form avec la liste de tous les articles de la facture d'origine; l'utilisateur doit sélectionner la cause d'animation de l'article, établir le flag 'Virement' et enfin le type facture  à créer. La liaison entre la facture de virement et la facture d'origine doit être insérée manuellement par l'utilisateur dans les champs de référence 'Rif. FA' et 'Type'. |
| Conversion | Bouton pour la conversion des prix d'un document en une autre devise. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Factures d'achat | Il se réfère à la procédure pour imprimer les factures d'achat selon les critères de filtre spécifiés (type facture, numéro, date, fournisseur, ecc). |
| Liste factures d'achat | Il se réfère à la procédure pour imprimer une liste de factures selon les critères de filtre spécifiés (type facture, numéro, date, fournisseur), en offrant la possibilité d'ordonner sur la base du fournisseur, numéro facture, type facture ou date insertion. |
| Chiffre d'affaires d'achat | Il se réfère à la procédure pour imprimer les factures d'achat selon les critères de filtre spécifiés (type facture, numéro, date, fournisseur), en offrant la possibilité d'ordonner sur la base de l'article, classe articles, pays et fournisseur. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
|  [Paramètres factures d'achat](/docs/configurations/parameters/purchase/purchase-invoices-parameters)  | La procédure permet de configuerer et visualiser les paramètres des factures d'achat. |
|  [Comptabilisation factures d'achat](/docs/purchase/purchase-invoices/accounting/invoices-accounting-to-be-received)  | La procédure permet de comptabiliser les factures d'achat. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des factures qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des enregistrements, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des factures désirées.






