---
title: Causes d'entrepôt
sidebar_position: 7
---

La fenêtre des causes d'entrepôt s'ouvre à travers le parcours Home > Tableaux > Logistique > Causes d'entrepôt. À travers cette fenêtre viennent établies toutes les causes d'entrepôt qui servent au traitement des articles de et pour les divers entrepôts insérés dans le tableau 'Entrepôts'. Elle a une petite zone de filtre, à travers lequel l'utilisateur peut filtrer les causes insérées pour l'Entrepôt (en utilisation le menu déroulant qui se réfère aux entrepôts par le tableau homonyme), pour code et pour description cause, et d'une grille de résultat et d'insertion.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour appliquer les filtres de recherche à l'intérieur de la base de données des Causes d'entrepôt insérées. |
| Supprimation | Il se réfère à la procédure pour supprimer une Cause d'entrepôt précédemment insérére. Il faut remarquer que si la cause a déjà été utilisée il n'est pas possible l'éliminer. |
| Aperçu avant impression | Il visualise un aperçu avant impression du tableau des Causes d'entrepôt. |
| Impression | Il lance l'impression sur l'imprimante prédéfinie du rapport du tableau des Causes d'entrepôt. |

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des causes qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des causes, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des causes désirées.

Les colonnes présents dans la grille de résultat sont les suivants:

**Entr.**: en cette colonne l'utilisateur doit établir, en utilisant le menu déroulant que se réfère aux données du tableau 'Entrepôt', le code d'entrepôt pour lequel doit insérer la cause de traitement;

**Caus** **.**: en cette colonne l'utilisateur doit insérer le code de la cause d'entrepôt. Il peut rattraper une longueur maximale de 3 caractères alphanumériques. Il est possible de créer plusieurs causes d'entrepôt avec le même code, à pacte que les causes soient engendrées pour entrepôts différents; deux causes avec le même code sur le même entrepôt ne sont donc admises;

**Description**: en cette colonne l'utilisateur doit insérer la description d'entrepôt, qui peut rattraper une longueur maximale de 80 caractères alphanumériques;

**Type**: en cette colonne l'utilisateur doit insérer le type de traitement qui caractérise la cause. Elle peut être de Charge, si la quantité du mouvement d'entrepôt créé avec celle cause vient enregistrée dans la base de données comme positive, ou de Décharge, si la quantité du mouvement d'entrepôt créé avec celle cause vient enregistrée comme négative;

**Coût proposé**: en cette colonne l'utilisateur doit choisir quel cout doit être proposé automatiquement au moment s'insère un mouvement manuellement. Le coût proposé peut-être le coût dernier, le coût moyen, le prix de vente ou le cout standard de l'article animé. Il faut remarquer que pendant que le prix de vente et le coût standard viennent repris directement par le registre de l'article, le coût moyen et le coût dernier viennent calculé par l'application au moment où s'insère le mouvement, sur la base des mouvements effectués avec causes qui ont respectivement le flag 'AjouCM' et le flag 'Ajou. CU' activé;

**Ajus. CM**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Ajustement Coût moyen' activé, il vient ajuster le coût moyen dans le registre de l'article avec montant du mouvement. En outre tous les mouvements exécutés en utilisant une cause qui a ce flag activé concourent au calcul du coût moyen réfléchi de l'article. Il faut noter que le flag n'est pas activable ou désactivable après que la cause ait déjà été utilisée aussi pour un seul mouvement d'entrepôt. Normalement ce flag s'active seul pour les mouvements di charge, mais il peut être activé aussi pour les mouvements de décharge, au moment on veut faire en façon que la moyenne réfléchie du coût de l'article est calculée aussi en considérant les prix de vente liés aux décharges d'entrepôt du même article;

**Ajus. CD**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tete de l'enregistrement la cause qui a le flag 'Ajustement coût dernier' activé, il vient ajusté le coût dernier dans le registre de l'article avec le montant du mouvement. Il faut noter que le flag n'est pas activable ou désactivable après que la cause ait déjà été utilisée aussi pour un seul mouvement d'entrepôt. Ce flag s'active seul pour les mouvements de charge;

**Ajus. PV**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tete de l'enregistrement la cause qui a le flag 'Ajustement prix de vente' activé, il vient ajusté le prix de vente dans le registre de l'article avec le montant du mouvement. Il faut noter que le flag n'est activable pas ou désactivable après que la cause ait déjà été utilisée aussi pour un seul mouvement d'entrepôt. Ce flag s'active seul pour les mouvements de décharge;

**Int. fisc.**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Intérêt fiscal' activé, le même mouvement vient considéré dans le journal d'entrepôt et dans le calcul de l'inventaire quantité valorisé, toujours que l'article animé ait lui aussi le flag 'Intérêt fiscal' activé dans le tab 'Généralité';

**Calc. ABC**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Calcul ABC' activé le mouvement viendra considéré pour le calcul ABC de l'article animé;

**P.to rang.**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Point de rangement' activé, le mouvement vient considéré par la procédure qui exécute le calcul du point de rangement. Normalement le flag vient activé seul les causes de décharge;

**Gest. lots**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Gestion lots' activé le mouvement permet l'insertion du lot dans la grille de l'enregistrement d'entrepôt pour un déterminé article qui est géré à lots. Le même pour la gestion à Numéro de série;

**Lots ne disponibles pas**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Lots ne disponibles pas' activé avec le mouvement si pourront aussi décharger lots qui se trouvent en un état qui n'est pas disponible;

**C.D. lot**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Coût dernier lot' et au même temps le coût proposé est le coût dernier, au moment que se charge un déterminé code lot, au contraire de proposer dans le montant du mouvement le coût dernier par le registre de l'article sera proposé le coût d dernier chargé fait avec tel code lot;

**Déch. lot**: le flag 'Décharge lot' sert au moment qu'il est nécessaire faire en façon que dans le document de vente (commande client, bon de livraison de vente ou facture de vente) la cause de décharge du lot vient proposée automatiquement dans la grille des lots du même document. Il sera en effet, la cause désignée avec ce flag à être proposée en automatique par la procédure; sera après l'utilisateur que la remplacera avec une autre cause selon des cases;

**Cons.**: les mouvements effectués avec une cause qui présente le flag 'Consumation' activé viennent visualisés dans la fenêtre de coûtification de la commande de production dans la tab Récapitulation coûts et temps dans la grille Matériaux utilisés;

**Doc. oblig.**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Document obligatoire' activé, est obligatoire spécifier quelque chose dans le champ 'Document de référence' de l'enregistrement d'entrepôt;

**Compte oblig.**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Compte obligatoire' activé, est obligatoire spécifier quelque choose dans le champ 'Client/fournisseur' de l'enregistrement d'entrepôt. Il vient utilisée normalement pour les enregistrements relatifs à la consummation et à la livraison matériaux de sous-traitant;

**Nomencl** **.**: au moment qu'on insère un mouvement d'entrepôt en utilisant dans l'en-tête de l'enregistrement la cause qui a le flag 'Nomenclature' activé alors dans le moment où s'enregistre la ligne du mouvement, plutôt que l'article sélectionné (qui doit obligatoirement avoir une nomenclature) ils viennent inséré les articles de premier niveau de la nomenclature. Il vient souvent utilisé dans les causes de décharge de contrepartie pour décharger les composants d'un article chargé par la cause principale;

**Gestion inv.** **phys**: le flag 'Gestion inventaire physique' permet de décider quels sont les causes d'entrepôt qui doivent pouvoir être sélectionnables dans les Paramètres initials d'entrepôt comme causes à utiliser dans le calcul des différences d'inventaires. Les enregistrements d'entrepôt qui seront créées automatiquement par la procédure 'Différences d'inventaires' présenterant dans l'en-tête les causes de ce type;

**Entr. CTP**: en cette colonne l'utilisateur peut spécifier le code d'entrepôt de contrepartie, en puisant à travers le menu déroulant au tableau des Entrepôts. Il n'est pas que l'entrepôt qui doit apparait dans le tab 'Contrepartie' de l'enregistrement d'entrepôt;

**Cause CTP**: en cette colonne l'utilisateur peut spécifier le code de la cause à utiliser dans la contrepartie. Ceci permet de faire en façonqu'au moment qui vient créé un mouvement d'entrepôt en utilisant la cause principale, vient automatiquement inséré aussi un mouvement de signe opposé. P.ex., s'établit la cause de contrepartie pour exécuter les déplacements entre les entrepôts différents ou pour faire déplacements entre emplacements différents à l'intérieur dumême entrepôt;

**Stocks**: avec ce flag l'utilisateur peut désigner pour une chaque cause pour chacun entrepôt qu'elle doit être la cause utilisée par la procédure 'Valorisation entrepôt' qui exécute la clôture d'entrepôt pour créer les enregistrements de charge pour l'inventaire initial;

**Emplacement**: en cette colonne, identifiée avec une case de couleur jeune, l'utilisateur peut insérer, en puisant dans l''Aide emplacements', qui explose avec un double click sur la case, l'emplacement prédéfini qui viendra proposée dans le mouvement de charge et de décharge au cas où n'est pas avancé par la procédure qui crée le mouvement. Les paramétrages de l'emplacement par défaut sont normalement utilisée sur les causes de charge, parce que le décharge doit être effectués par l'emplacement sur lequel on trouve l'article au moment où s'exécute la même décharge;

**Ind. rotat.**: si ce flag est actif alors les enregistrements créés avec telle cause viennent considérées dans la procédure du calcul de l'index de rotation d'entrepôt;

**Alternatives**: l'activation de ce flag avaient dans le même temps auflag 'Nomenclature'; s'active, au moment qu'on crée un mouvement avec une cause de décharge qui a les deux flags activés et un des composants n'a pas la quantité suffisante pour être déchargé; la procédure contrôle si un article alternatif (spécifié dans la nomenclature) a au contraire quantité suffisante pour être déchargé à la place du composant principal;

**Alternatives mixtes**: l'activation de ce flag avaient au même temps duflag 'Nomenclature'; s'active, la procédure décharge au même temps plusieurs articles alternatifs jusqu'à l'achèvement de la quantité nécessaire. Il est strictement lié au flag 'Alternatives';

**Considérer les mouvements à zéro**: avec l'activation de ce flag l'utilisateur peut décider quels sont les mouvements d'entrepôt avec le coût égal à zéro qui doit concourir au calcul du coût moyen réfléchi des articles. Évidemment le flag vient d'habitude activé sur les causes qui ont le flag 'Ajustement coût moyen' activé.






