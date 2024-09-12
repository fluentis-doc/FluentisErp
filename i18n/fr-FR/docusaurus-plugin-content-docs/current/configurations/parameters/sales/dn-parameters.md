---
title: Paramètres DDT
sidebar_position: 3
---

Les paramètres des DDT permettent le paramétrage de base pour gérer correctement et selon les spécifiques demandes par chaque société.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurer paramètres | Il permet de restaurer les paramètres aux valeurs intiales. |

#1.1 Tab général

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Proposer commission pour tous les articles | Il n'est pas géré. |
| Gestion double unité de mesure | S'il est établi, il signifique que vient gérée l'unité de mesure alternative dans le bon de livraison. |
| Proposition automatique UM alternative | Cette note s'habilite seule si 'Gestion double unité de mesure' est active. Au moment qu'il vient inséré un article qui a dans son registre tab UM alternative une UM alternative par défaut, cette UM vient automatiquement proposée comme UM alt. de l'article et il vient calculée aussi la quantité alternative en utilisant le même facteur de conversion. |
| Proposition automatique transport payé par le vecteur | S'il est établi, il signifie que le type de transport sera Vecteur et viendra proposé le vecteur de défaut. |
| Déf. U.M. volume | S'il est établi, il signifie que l'unité de mesure par défaut pour le volume dans le calcul transport du bon de livraison. |
| Déf. U.M. poids | S'il est établi, il signifie que l'unité de mesure par défaut pour le poids dans le calcul transport du bon de livraison. |
| Contrôle sequence date et numéro document | S'il est établi, il signifie qu'il viendra vérifiée la séquentialité date/numéro pour les bons de livraison. |
| Récupérer seul dans la journée | S'il est établi, il signifie qu'ils viendront récupérés les numéros disponibles seulement pour la journée d'haujoud'hui. |
| Récupération automatique | S'il est établi, il signifie qu'il viendra proposé en automatique le premier numéro disponible. |
| Contrôle disponibilité | S'il est établi, il signifie qu'il viendra vérifiée la disponibilité de l'article bon de livraison. |
| Exclure commandes clients | S'il est établi, il signifie que l'engagement des commandes clients ne viendra pas considéré dans le calcul de la disponibilité de l'article bon de livraison. |
| Disp. obligatoire | S'il est établi, il signifie que la disponibilité de l'article bon de livraison sera obligatoire, c'est-à-dire la quantité ne pourrait pas être majeur de la disponibilité. |
| Visualiser disp. | S'il est établi, il signifie que, en insérant la quantité dans la ligne, il viendra visualisée la disponibilité article. |
| Sous-traitant | S'il est établi, il signifie que les documents de sous-traitant viendront considérés dans le calcul de la disponilité de l'article bon de livraison. |
| Achats | S'établi, il signifie que les documents d'achat viendront considérés dans le calcul de la disponibilité de l'article bon de livraison. |
| Ventes | S'il est établi, il signifie que les documents de vente viendront considérés dans le calcul de la disponibilité de l'article bon de livraison. |
| Prod. planifiée | S'il est établi, il signifie que les documents de besoins des matériaux et commande de production viendront considérés dans le calcul de la disponibilité de l'article bon de livraison. |
| Prod. relâchée | S'il est établi, il signifie que les ordres de production viendront considérés dans le calcul de la disponilité de l'article bon de livraison. |
| Entrepôt | S'il est établi, il signifie que les enregistrements entrepôt viendront considérées dans le calcul de la disponibilité de l'article bon de livraison. |
| Rechercher prix articles dans tous les catalogues prédéfinis | S'il est établi, il signifie que l'article inséré dans la ligne bon de livraison viendra recherché aussi dans les catalogues spécifiés dans le registre client, en plus du catalogue par défaut. |
| Code opér. obligatoire | S'il est établi, il signifie que la spécifique de l'opérateur dans l'en-tête bon de livraison est obligatoire. |
| Utilisation BarCode | S'il est établi, il signifie que la colonne BarCode article de la grille Articles est gérée. |
| Gestion taille et couleur | S'il est établi que les colonnes Lot de la grille Variantes sont gérées. |
| Visualiser dimensions | S'il est établi, il signifie que les colonnes dimensions (Hauteur, Largeur, Profondeur) de la grille Articles sont gérées. |
| Recalculer transport | S'il est établi, il signifie que le transport du bon de livraison vient calculé en automatique. |
| Permettre remises pour les articles hommages | S'il est établi, il signifie que les articles hommages gèrent les remises. |
| Contrôler intégrité | S'il est établi, il signifie qu'il vient vérifiée l'intégrité du bon de livraison. |
| Réf. extérieur ordre | S'il est établi, il signifie qu'ils viennent gérés les références extérieurs de la commande client reliée avec la ligne article bon de livraison. |
| Bloquer insertion document en date fériée | S'il est établi, il signifie qu'ils viennent bloquées pour l'utilisation des dates fériées. |
| N. maximum lignes | Il spécifique le numéro maximum permis dans la grille Articles. |

#1.2 Tab exécution

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Paiements | Il spécifique la valeur utilisée pour le paiement du bon de livraison de l'exécution multiple ordres: premier ordre, registre ou sélection manuel. |
| Destinataire | Il spécifique la valeur utilisée pour le destinataire du bon de livraison dans le cas de l'exécution multiple ordres: premier ordre, registre ou sélection manuel. |
| Contrôle cohérence entre les paiements bons de livraison et ordre | S'il est établi signifie qu'il ne viendra pas permise l'exécution par les ordres avec paiments differents. |

#1.3 Tab décharge

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Créer enregistrement avec la date du document | Combien sont établis l'enregistrement d'entrepôt il vient faite avec la même date du DDT, et il ne sera pas nécessaire spécifier la date enregistrement de la Form de décharge. |
| Priorité entrepôt et cause de décharge par les lignes articles des DDT | Combien ce paramètre est établi l'entrepôt et la cause de décharge viennent lis par les lignes du DDT, au contraire s'il n'est pas établi ils viennent utilisés l'entrepôt et la cause insérée en cette Form de paramètres. |
| Entrepôt | Il spécifique l'entrepôt a utilisé pour la décharge du bon de livraison au moment que le paramètre Priorité entrepôt et cause de décharge par les lignes articles des DDT n'est pas actif. |
| Cause | Il spécifique la cause à utilisé pour la décharge du bon de livraison au moment que le paramètre Priorité entrepôt et cause de décharge par les lignes articles des DDT n'est pas actif. |
| Charge/Décharge automatique | S'il est établi, signifie que le décharge du bon de livraison viendra effectué en automatique à l'activation du flag Imprimée. |
| Avis articles fictifs | Si cet est établi pendant la décharge du DDT vient contrôlé si dans le DDT sont présents des articles fictifs, si sont présents il vient donnée un message s'on veut décharger le DDT; en répondant si le DDT vient de toute façon déchargé. |

#1.4 Tab importationEn ce tab l'utilisateur spécifique le prénom et le chemin du fichier pour importer les articles par BarCode. La Form d'importation s'ouvre par la barre d'outils de la gestion DDT dans les tab articles. À traversce paramétrage est possible d'insérer les articles par le fichier dans le DDT.

#1.5 Tab importation BarCodeEn ce tab l'utilisateur spécifique les paramètres pour importer les données contenues dans le tableau BL_ImpBCAll. La Form d'importation s'ouvre par la barre d'outils de la gestion DDT, dans le tab articles. À travers ce paramétrage est possible d'insérer par un tableau les articles par un tableau configuré dans le DDT.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| UM alternative | S'il est établi, il signifie que la colonne UM alt de la grille Importation BarCode est gérée. |
| Emplacement | S'il est établi, il signifie que la colonne Emplacement de la grille Importation BarCode est gérée. |
| Compte client/fournisseur | S'il est établi, il signifie que les colonnes Compte, Sous-compte, Description client/fournisseur de la grille Importation BarCode sont gérées. |
| Prix article | S'il est établi, il signifie que la colonne Prix de la grille Importation BarCode est gérée. |
| Option | S'il est établi, il signifie que la colonne Option de la grille Importation BarCode est gérée. |
| Variante | S'il est établi, il signifie que la colonne Variante de la grille Importation BarCode est gérée. |
| Type prélèvement article | Il spécifique le type prélèvement article: classe/code article, lot et numéro de série. |

#1.6 Tab prélèvement

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Type chiff.d'affaires | Il spécifique le type chiffre d'affaires à utiliser dans l'importation articles Prélèvement dans le DDT. |
| TVA | Il spécifique le code TVA à utiliser dans l'importation articles prélèvement dans le DDT. |

#1.7 Tab analytiqueCes paramètres indiquent la priorité de recherche des centres de coût ou de profit pour les attribuer aux articles du DDT. Combien le flag Recalcul est établi, les centres de coût ou de profit viennent insérés/actualisés dans les articles à travers la priorité choisie.






