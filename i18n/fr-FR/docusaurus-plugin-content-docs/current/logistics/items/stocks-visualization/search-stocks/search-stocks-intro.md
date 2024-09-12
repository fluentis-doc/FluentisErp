---
title: Rechercher stocks
sidebar_position: 1
---

La procédure de visualisation stock a été étudiée pour permettre à l'utilisateur d'extrapoler facilement les stock d'entrepôt avec le bût de contrôler l'entrepôt et la correspondance entre le stock physique et logique.

La procédure de la visualisation stocks est formée dans la façon suivante:

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Recalcul stocks | Bouton pour recalculer les stocks après actions d'importation mouvements par l'extérieur. |
| Rechercher | Il se réfère à la procédure pour rechercher les stocks selon les filtres insérés. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Générations enregistrements | Il exécute la procédure pour créer une enregistrement d'entrepôt. Il est présent seul un tab entrepôt, commande de production et détail stock article. |
| Aperçu avant impression | Il exécute la procédure pour visualiser l'aperçu avant impression d'un rapport standard ou d'un rapport personnalisé. Il est présent seul sur le tab Détail stock article. |
| Impression | Il exécute la procédure pour exécuter l'impression physique du rapport standard ou d'un rapport personnalisé. Il est présent seul sur le tab Détail stock article. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection, une recherche sur le total des stocks à entrepôt.. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

En plus des filtres base qui identifient l'article selon les données de registre on signale la possibilité de visualiser les divers types decoûts, les stocks positifs, négatifs et/ou nuls, les stocks en un entrepôt et un emplacement particulier et surtout la date à laquelle on veut interroger les stocks. En cette façon est possible d'exécuter une recherche aussi dans le passé.



GRILLE DE RÉSULTAT: la grille de résultat représente la liste des articles qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des stocks, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des articles.

La grille de résultat est subdivisé en 10 tab:

**Article**: les résultats viennent regroupés pour article et viennent spécifiés les valeurs de classe, code article, description, deuxième description, variante (éventuelle), description variante (éventuelle), quantité et unité de mesure;

**Entrepôt**: les résultats viennent regroupés pour entrepôt et viennent spécifiés, en plus des valeurs du tab article, aussi les valeurs d'entrepôt et description entrepôt;

**Emplacement**: les résultats viennent regroupés pour emplacements et viennent spécifiés, en plus des valeurs du tab article, aussi les valeurs d'emplacement, description emplacement et état emplacement;

**Commande**: les résultats viennent regroupés pour commande de vente et viennent spécifiés, en plus des valeurs du tab article, aussi les valeurs de numéro commande, année commande et description article commande;

**Option**: les résultats viennent regroupés pour option et viennent spécifiés, en plus des valeurs du tab article, aussi les valeurs d'option et description option;

**Client/fournisseur**: les résultats viennent regroupés pour client/fournisseur (présents dans les enregistrements d'entrepôt) et viennent spécifiés, en plus des valeurs du tab article, aussi les valeurs du client/fournisseur;

**Lot**: s'il y a des articles gérés à lots les résultats vient regroupés pour lot et viennent spécifiés, en plus des valeurs du tab article, aussi les valeurs d'entrepôt, lot et quantité disponible;

**Attributs**: les résultats viennent regroupés pour attribut et viennent spécifiés, en plus des valeurs du tab article, aussi les valeurs de deuxième description article, option, entrepôt, description entrepôt, attribut, valeur attribut, emplacement, lot et date charge lot;

**Commande** ** production**: les résultats viennent regroupés pour commande de production et viennent spécifiés, en plus des valeurs du tab article, aussi les valeurs d'entrepôt, description entrepôt, emplacement, numéro commande de production et année commande de production;

**Détail** ** stocks article**: il est le détail maximum des résultats regroupés pour tous les tab précédents. Ils viennent spécifiés les valeurs de classe, code article, descriptions article, deuxième description article, variante, description variante, option, description option, entrepôt, emplacement, numéro commande, année commande, description client/fournisseur, lot, quantité disponible, quantité stock, unité de mesure et état d'emplacement.






