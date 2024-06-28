---
title: Récapitulation
sidebar_position: 3
---

En ce tab est possible d'exécuter le 'Rollback' de l'opération de l'enregistrement de la Bon de livraison, en restaurant donc la situation précédente à la même opération. Dans l'en-tête de ce tab sont présents certains filtres de recherche, qui permettent à l'utilisateur de sélectionner les opérations en filtrant par numéro dedécharge (De....À.), date de décharge de du bon de livraison (De...à...), numéro de du bon de livraison (De...à...).

Les résultats sont visibles à l'intérieur de la grille posée dans la partie supérieure de la fenêtre, appelée 'Décharge des bons de livraison", où viennent rapportés le numéro d'opérations d'enregistrement, la date où a été effectuée et l'utilisateur qui l'a effectuée. En tenant sélectionnée une ligne de cette grille, dans la grille posée dans la partie inférieure du masque est possible de visualiser les bons de livraison décharges (dans le tab 'Bons de livraison', où est possible de visualiser l'année, le type bon de livraison, la description type bon de livraison, le numéro, la date du bon de livraison), ainsi que les relatifs enregistrementsd'entrepôt qui ont été automatiquement engendrés par le décharge du bon de livraison sélectionnée dans les tab bons de livraison (dans le tab 'Enreg.', où est possible de visualiser l'entrepôt, cause d'entrepôt, le numéro et la date de l'enregistrement d'entrepôt, le sous-traitant et le document de référence, la date du document et les éventuels données de l'enregistrement de contrepartie, si présent).

Les touches posées dans la Ribbon Bar, qui viendra détaillée ensuite, servent à exécuter les opérations de Rollback, avec modalité différente.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour appliquer les filtres de recherche à l'intérieur de la base de données des Bons de livraison insérées, imprimées et déjà déchargées. |
| Supprimer | Il se réfère à la procédure qui exécute le Rollback de l'entière opération de décharge du bon de livraison sélectionnée dans la grille 'Décharge des bons de livraison'; donc si avec la même opération d'enregistrement ont été déchargées plus bons de livraison, toutes ces bons de livraison seront rapportées dans l'état de 'ne déchargées pas'. |
| Restaurer les bons de livraison | Il se réfère à la procédure qui exécute le Rollback de l'enregistrement de seuls les bons de livraison sélectionnées dans la grille inférieur, tab 'Bons de livraison'. |
| Restaurer | Il se réfère à la procédure qui exécute la simple supprimation des enregistrements d'entrepôt sélectionnées dans le tab 'Enreg.', sans rapporter le bon de livraison relative dans l'état de 'ne déchargée pas'.  On conseille de n'utiliser jamais ce touche, seul si nécessaire. |
| Rapport | Il visualise l'aperçu avant impression de l'opération de décharge des bons de livraison sélectionnées dans la grille 'Décharge des bons de livraison', en offrant un détail des bons de livraison déchargés et des motivations pour lequelle certains éventuellement n'ont pas été déchargées. |






