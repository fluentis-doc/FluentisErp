---
title: Opérations patrimoniales
sidebar_position: 2
---

Une fois enregistrés les données de l'en-tête s'activeront les tabulateurs successifs: à l'intérieur du dossier 'Opérations patrimoniales' sont présentes les détails des diverses opérations à livre immobilisation. La première ligne sera sûrement relative à l'achat initial de l'immobilisation: la date de l'opération, son numéro progressif et le successif montant inséré dans la colonne relative (éventuellement, s'il y a la gestion des quantités, aussi la quantité des immobilisations relatives à cette valeur totale). À l'extrême droit de la grille sont présents le champ du 'Sous-compte client/fournisseur' et les autres références de l'opération. En cas il y a le chargement d'une immobilisation historique le montant des fonds amortissement déjà calculés NE sera PAS inséré directement en cette section mais ramené dans la section en-dessous avec l'état 'Comptabilisé' affin que cette section soit recalculée par l'ERP.

La grille centrale présente la liste des amortissements calculés pour l'immobilisation: l'insertion peut être manuelle ou automatique. L'insertion manuelle prévoit l'indication de l'année de référence, du numéro ligne progressif de référence (mais seul pour catégorie pas d'augmentations, pour les autres le champ est caché parce que l'amortissement sera toujours relié au progressif 1), type d'amortissement à appliquer: en cette façon l'ERP remanèra les paramétrages de la catégorie immobilisation de référence, avec un compte sous-compte pourcentage de l'application et les montants (valeurs qui sont possibles de forcer et modifier à volonté). À la fin de la grille est présent la date de référence de l'amortissement, proposée comme la fin d'exercice de l'année comptable de référence de la ligne, et enfin les montants de la quote-partie déductible et pas déductible de l'amortissement. L'insertion automatique prévoit la définition de l'année de référence dans le champ supérieur à la grille et l'utilisation du bouton de gestion 'Exécute l'amortissement automatique' qui ira à ramener les données des amortissements prévues en catégorie pour toute l'immobilisation en utilisation.

Le calcul de l'amortissement sera ramené dans la colonne 'Déjà amorti' de la grille supérieure qui servira à indiquer un montant pas encore définitif: seul avec l'indication du flag Comptabilisé, dans les diverses lignes, les montants supérieurs seront attribués à la colonne du fond relatif à la typologie du même amortissement. L'insertion manuelle du flag N'effectue PAS un enregistrement en comptabilité (pour ce, il y a la procédure de comptabilisation des amortissements): on utilise normalement seul pour le chargement manuel initial de la situation historique, pour laquelle, d'habitude, s'effectue une insertion unique du montant total amorti à l'année précédente au début de l'utilisation de l'ERP et pas de tout le détail de l'amortissement. Dans l'enregistrement de la ligne avec le flag Comptabilisé, l'ERP demandera s'on veut relié un enregistrement comptable déjà existant, message où normalement (en cas de reprise des données historiques) ont répondu négativement. Le flag d'Amortissement fiscal prévoit la gestion fiscale de la ligne amortissement: vient proposé sur la base du même flag prévu en catégorie d'immobilisation. En certain cas il peut être utilisé manuellement pour relever à livre immobilisation, le virement des amortissements avancés utilisés dans le bilan ordinaire à amortissements fiscales à gérer seul pour le calcul de la taxation. La gestion fiscale, au contraire, on a à travers la valorisation des champs avec les montants déductibles/pas déductible de l'amortissement, valorisés automatiquement sur la base de le pourcentage de déductibilité associée à l'immobilisation ou à sa catégorie.



Dans la dernier section il est présent le détail de valorisation à centre de coût/commande de vente des amortissements sélectionnés dans la deuxième grille.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Nouvelle opération | Il active le curseur dans la première grille des opérations patrimoniales. |
| Supprimer l'opération | Il supprime l'opération sélectinnées dans la grille de l'opération patrimoniale. |
| Nouvel amoritissement | Il active le curseur dans la deuxième grille des amortissements. |
| Supprimer amortissement | Il supprimer l'amortissement sélectionné dans la grille amortissements. |
| Exécute l'amortissement automatique | Il calcule l'amortissement de l'immobilisation en utilisation pour l'année établi dans le champ immédiatement au-dessus de la grille amortissements. |
| Insertion CDC | Il active le curseur dans la grille des centres de coût. |
| Supprimer CDC | Il supprimer le mouvement du centre de coût sélectionné dans la grille. |
| Calcul des centres de coût | Il exécute le calcul des centres de coût pour la valeur de la ligne amortissement sélectionnée. |
| Insertion des commandes | Il active le curseur dans la grille des commandes. |
| Supprimer les commandes | Il supprime le calcul commande sélectionné dans la grille. |
| Calcul des commandes | Il exécute le calcul de la commande pour le valeur de la ligne amortissement sélectionnée. |
| Détails réévaluation | Il ouvre la gestion des détails de réévaluation. Le bouton est active seul si le flag 'Réévaluations' est établi pour la catégorie de l'immobilisation en utilisation. Voir l'application a. |
| Documents | Gestion du stockage de document associé au masque en utilisation. |

Applications:

a) Détails réévaluation: dans le masque détails réévaluation est possible d'insérer les détails des valeurs de réévaluation (imposable et montante réévaluation, fonds et montant du fonds réévalué) de l'immobilisation en utilisation, avec la référence du type réévaluation défini en tableau.






