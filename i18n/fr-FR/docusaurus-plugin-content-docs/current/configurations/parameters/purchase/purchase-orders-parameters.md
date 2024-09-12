---
title: Paramètres commandes fournisseur
sidebar_position: 5
---

Les paramètres des commandes fournisseurs permettent le paramétrage de base pour gérer correctement et selon les spécifiques demandes par chaque société.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurer paramètres | Il permet de restaurer les paramètes aux valeurs initiales. |

#1.1 Tab général

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Gestion double unité de mesure | Au moment qu'il est établi, s'habilite le menu déroulant UM alt. et la colonn quantité alternative dans la grille articles de l'ordre. |
| Proposition automatique UM alternative | Ce contrôle s'habilite seul si 'Gestion double unité de mesure' est active. Au moment qu'il vient inséré un article qui a dans son registre tab UM alternative une UM alternative par défaut, cette UM vient automatiquement proposée comme UM alt. de l'article et il vient calculée la quantité aussi la quantité alternative en utilisant le même facteur de conversion. |
| Récuperer seul dans la journée | Au moment qu'il est établi, la récupération des trous de numérotation arrive automatiquement dans l'arc de la journée. Si dans la journée ont été créés les ordres 7, 8, 11, 12 et le flag sont établis, le prochain numéro proposé sera 10, c'est-à-dire le premier numéro mineur à cet inséré par l'utilisateur qui est un numéro libre. |
| Insert. autom. variantes en attributs variantes | Au moment qu'il est établi, dans les tab articles de la gestion des ordres, le code variante et la description variante deviennent 2 champs éditables et pour les données insérées dans les 2 champs s'il n'est pas déjà présent dans le registre variante il vient demandé s'on veut les enregistrer dans le registre variantes. En cette façon en insérant les lignes ordres viennent créées aussi les variantes des articles. |
| Il ne permet pas d'exécuter qté supérieur | S'il est établi, au moment qu'il vient créé une Réception marchandise par ordre, l'utilisateur ne peut pas insérer une quantité supérieure à celle présente en ordre. |
| Contrôler sequence date et numéro | S'il est établi, il ne sera pas possible n'avoir progressivité entre le numéro document et la date document. Ainsi, si en date 21/11/2011 il y a 3 ordres avec numéro 7, 8, 10 et pour la date 22/11/2011 il y a l'ordre numéro 11, et l'utilisateur veut insérer un ordre en date 22/11/2011. L'unique numéro possible en telle date sera le 12 pour maintenir la progressivité entre numéro et date. |
| Coût zéro en absence de catalogues | Au moment qu'il est établi et si les catalogues n'existent pas pour les articles insérés dans l'ordre, le prix proposé sera 0, si au contraire il n'est pas établi viendra proposé le coût dernier de registre articles. |
| Visualiser dimensions | Au moment qu'il est actif dans le tab article de la gestion bons de livraison d'achat sont visibles les 3 colonnes 'Hauteur', 'Largeur', 'Profondeur' (MGAD_Hateur, MGAS_Largeur, MGAS_Profondeur de MG_Reg.données – Tab Poids/Dimensions de registre articles). |
| Bloquer insertion document en date fériée | Au moment qu'il est actif, il n'est pas possible d'insérer les documents avec la date fériée du calendrier des fêtes d'entreprise. |
| Exécuter seul les ordres autorisés | S'il est actif, au moment que dans la réception marchandise ils sont exécutés les ordres, ils viennent visualisés seul les ordres autorisés. |
| Proposer marque avec priorité Catalogue fournisseur/ordre client | S'il est actif, au moment qu'ils sont insérés les articles dans l'ordre, il vient enregistrée la marque de l'article en catalogue dans l'ordre. La création commandes fournisseurs par commandes clients avec ce contrôle établi copie la marque par la commande client à la commande fournisseur. |
| Permettre modification TVA | S'il est actif, dans la création automatique des ordres par demandes d'achat le code TVA vient proposé dans les ordres. |
| Code opérateur obligatoire | S'il est actif, en gestion des ordres est obligatoire insérer l'opérateur/employé. |
| Rechercher les prix articles en tous les catalogues prédéfinis | S'il est actif, ce paramètre est utilisé pour la recherche du prix dans les catalogues fournisseurs, la recherche qui arrive dans les catalogues du type prédéfini en registre fournisseur n'est pas valables (les catalogues sont ces qui font date début validité = à la date d'aujourd'hui et ont la date finale validité nulle ou > = à la date d'aujourd'hui). |

#1.2 Tab importation par BarCodeEn ce tab l'utilisateur spécifique les paramètres pour importer les données contenues dans le tableau CF_ImpoBCAll. La Form d'importation s'ouvre par la barre d'outils de la gestion réception marchandise dans le tab articles.

#1.3 Tab charge

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Créer enregistrement avec la date du document | Au moment qu'il est établi l'enregistrement d'entrepôt vient fait avec la même date de la Réception marchandises, et il n'est pas nécessaire spécifier la date enregistrement dans la Form de charge. |
| Priorité paramètres réception | Au moment qu'en ce paramètre vient établi l'entrepôt et la cause de charge viennent lues par les lignes de la réception marchandises et s'il n'y a pas des paramètres de la Form charge, au contraire si n'est pas établi ils viennent utilisés l'entrepôt et la cause insérée en cette Form de paramètres. |

#1.4 Tab analytiqueCes paramètres indiquent la priorité de recherche des centres de coût ou de profit pour les attribuer aux articles de la commande fournisseur. Combien le flag recalcule il vient établi les centres de coût ou de profit ils viennent insérés/actualisés dans les articles à travers a priorité choisie.






