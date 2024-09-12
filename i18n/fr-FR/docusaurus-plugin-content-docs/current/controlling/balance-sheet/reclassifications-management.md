---
title: Gestion des reclassements
sidebar_position: 8
---

Dans le cas d'insertion d'un nouveau reclassement, à l'ouverture de du masque il faut établir le code univoque de 5 caractères alphanumériques et la description du reclassement, insérer le modèle de reclassement et rappeler les données de la clôture des comptes intermédiaires à utiliser. Si a été établi le flag de 'Consolidé' sera possible rappeler le code de la consolidation intersociétaire à gérer dans le reclassé.

Dans l'en-tête du masque sont présents, au plus, un champ de liaison avec les commandes de vente, un par les centres de coût et un par des centres de profit: une fois établie un de ces, l'ERP recalculera toute la structure due reclassée en reprenant les données des enregistrements intermédiaires reliées au filtre établi.

Le dernier champ de l'en-tête du reclassement est appelé **Clôture de ** **réf** **. par le calcul à augmentations**: est la valeur initiale où le programme ira à calculer les différences par valoriser les détails avec le type solde 'Incrémentiel' (voir la documentation de détail detyper de niveau sous-comptes et commandes).

Au-dessous de cette section, dans le côté gauche de du masque, sera reproposée la structure du modèle de reclassement valorisé par les données de la clôture/consolidée établie. En sélectionnantun niveau du type different de 'somme des enfants' ou'espression', l'ERP montrera dans le côté de droit deux grilles: encelle supérieure sera visualisée la liste des soldes de la clôture (consolidée) cohérente avec les paramétrages du même niveau, en celle inférieure la liste des données qui ont valorisé effectivement le niveau. À travers le bouton présent entre les deux grilles sera possible apporter une modification directement au reclassé sans modifier le modèle de référence. Il est permis aussi l'intervention manuelle dans les données présentes dans la grilleen dessous, avec aussi la possibilité d'insérer nouvelles lignes manuelles.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Il enregistre le reclassement en utilisation. |
| Insertion | Mettre le curseur à l'insertion d'un nouveau détail dans la grille des sous-comptes/CDC/CDP/commandes du noeud sélectionné. |
| Rechercher noeud successif | Il recherche le regroupement dans les groupes successifs à ce sélectionné. |
| Recherche noeud précédent | Il recherche le regroupement dans les groupes précédents à ce sélectionné. |
| Explosion noeud | Il ouvre le détail du noeud sélectionné. |
| Implosion noeud | Il ferme le détail du noeud sélectionné. |
| Augmentation tabulation | Il augmente la distance visualisée entre les niveaux des grouper dans l'arbre. |
| Diminution tabulation | Il diminue la distance visualisée entre les niveaux des grouper dans l'arbre. |
| Rechercher | Il exécute la recherche dans la liste globale des sous-comptes de la clôture utilisables pour le noeud sélectionné. |
| Rechercher sous-compte | Il exécute la recherche dans la liste des sous-comptes insérés dans le groupe sélectionné. |
| Recalculer | Il recalcule les valeurs du reclassement. |






