---
title: Paramètres facture de vente
sidebar_position: 5
---

Les paramètres des factures de vente permettent le paramétrage de base pour gérer correctement et selon les spécifiques demandes par chaque société.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurer paramètres | Il permet de restaurer les paramètres aux valeurs initiales. |

#1.1 Tab général

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Proposer commission insérée dans l'en-tête du document pour tous les articles | Il n'est pas géré. |
| Insertion commissions dans les types ligne 6 et 7(acompte/virement) | Il signale que les lignes article acompte et virement gèrent les commissions agents. |
| Gestion double unité de mesure | Combient est établi s'habilite le menu déroulant UM alt et la colonne quantité alternative dans la grille Articles de gestion factures. |
| Proposition automatique UM alternative - | Cette note s'habilite seule si 'Gestion double unité de mesure' est actif. Au moment qui vient inséré un article qui a dans son registre tab UM alternatives une UM alternative de défaut, cette UM vient automatiquement proposée comme UM alt de l'article et il vient calculée aussi la quantité alternative en utilisant le même facteur de conversion. |
| Proposition automatique transport payé par le vecteur | S'il est établi, signifie que le type transport sera Vecteur et il viendra proposé le vecteur de défaut. |
| Déf. UM volume | S'il est établi, signifie qui est l'unité de mesure de défaut pour le volume dans le calcul transport du bon de livraison. |
| Dé. UM poids | S'il est établi, signifie que est l'unité de mesure de défault pour le poids dans le calcul transport du bon de livraison. |
| Récupérer seul dans la journée | S'il est établi, signifie qui viendront récupérés les numéros disponibles seulement pour la journée d'aujourd'hui. |
| Récupération automatique | S'il est établi, signifie qui viendra proposé en automatique le premier numéro disponible. |
| Contrôler disponibilité | S'il est établi, signifie qui viendra vérifiée la disponibilité de l'article bon de livraison. |
| Prix négatifs dans les notes crédit | S'il est établi, signifie qui viendra notifiquée la présence des prix positifs dans les factures avec type notes de crédit. |
| Exclure commandes clients | S'il est établi, signifie que l'engagement des commandes clients ne viendra pas considéré dans le calcul de la disponilité de l'article bon de livraison. |
| Disp. obligatoire | S'il est établi, signifie que la disponibilité de l'article bon de livraison sera obligatoire, c'est-à-dire la quantité ne pourra pas être majeur de la disponibilité. |
| Visualiser disponibilité | S'il est établi, signifie que, en insérant la quantité dans la ligne, il viendra visualisée la disponibilité article. |
| Sous-traitant | S'il est établi, signifie que les documents de sous-traitant viendront considérés dans le calcul de la disponibilité de l'article bon de livraison. |
| Achats | S'il est établi, signifie que les documents d'achat viendront considérés dans le calcul de la disponibilité de l'article bon de livraison. |
| Ventes | S'il est établi signifie que les documents de vente viendront considérés dans le calcul de la disponibilité de l'article bon de livraison. |
| Prod. planifiée | S'il est établi, signifie que les documents de besoins matériaux et commande de production viendront considérés dans le calcul de la disponibilité de l'article bon de livraison. |
| Prod. relâchée | S'il est établi, signifie que les ordres de production viendront considérés dans le calcul de la disponibilité de l'article bon de livraison. |
| Entrepôt | S'il est établi, signifie que les enregistrements entrepôt viendront considérées dans le calcul de la disponibilité de l'article bon de livraison. |
| Contrôler prochain catalogue | Il signale que l'article inséré dans la ligne facture viendra recherché aussi dans les catalogues spécifiés dans le registre client, en plus du catalogue de défaut. |
| Contrôle Intra-cee | Il signale qui viendra vérifié si le type facture et le client ont le même type Intra-cee. |
| Utiliser BarCode | Il signale que la colonne BarCode article de la grille Articles soit gérée. |
| Gest. taille et couleur | Il signale que les colonnes Lot de la grille Variantes sont gérées. |
| Visualiser dimensions | S'il est établi, signifie que les colonnes dimensions (Hauteur, Largeur, Profondeur) de la grille Articles soient gérées. |
| Permettre remises pour les articles hommages | Il signale que les articles hommage gèrent les remises. |
| Contrôler intégrité | Il signale qu'il vient vérifiée l'intégrité de la facture. |
| Recalcul transport | Il signale que le transport de la facture vient calculé en automatique. |
| Sans frais enc. en notes de crédit | Il signale que les frais encaissement ne viendront pas insérées dans les échéances des factures avec le type notes de crédit. |
| Bloquer l'insertion document en dates fériées | Il signale que les dates fériées viennent bloquées pour l'utilisation. |
| Vérifier ventes prix lots | Il signale qu'il viendra fait une vérification pour le montant unitaire de la ligne facture. |
| Code opér. obligatoire | Il signale que la spécifique de l'opérateur dans l'en-tête facture est obligatoire. |
| Réf. extérieur ordre | Il signale que les références extérieurs de la commande client relié à la ligne article facture viennent gérés. |
| N. maximum des lignes | Il spécifique le numéro maximum permis dans la grille 'Articles'. |

#1.2 Tab exécution

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Paiements | Il spécifique la valeur utilisée pour le paiement de la facture dans le cas d'exécution multiple ordres: Premier ordre, Registre ou Sélection manuel. |
| Destinataire | Il spécifique la valeur utilisée pour le destinataire de la facture dans le cas de l'exécution multiple des ordres: Premier ordre, registre ou Sélection manuel. |

#1.3 Tab décharge

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Créer enregistrement avec la date du document | Combien il est établi, l'enregistrement d'entrepôt vient fait avec la même date de la facture d'achat, et il ne sera pas nécessaire spécifier la date enregistrement dans la Form de charge. |
| Priorité entrepôt et causes de décharge | Combien ce paramètre est établi, l'entrepôt et la cause de décharge viennent lis par les lignes factures, au contraire s'il n'est pas établi viennent utilisés l'entrepôt et la cause insérés en cette Form de paramètres. |
| Entrepôt | Il spécifique l'entrepôt à utiliser pour la décharge de la facture combien le paramètre Priorité entrepôt et cause de décharge par les lignes articles des DDT n'est pas actif. |
| Causa | Il spécifique la cause à utiliser pour la décharge de la facture combien la Priorité entrepôt et cause de décharge par les lignes articles des DDT n'est pas actif. |
| Avis articles fictifs | Si cet est établi, pendant la décharge de la facture vient contrôlé si dans la facture sont présents des articles fictifs, s'ils sont présents vient donné un message s'on veut décharger la facture; en répondant si la facture vient de toute façon déchargée. |

#1.4 Tab importationEn ce tab l'utilisateur spécifique le prénom et le chemin du fichier pour importer les articles par BarCode. La Form d'importation s'ouvre par la barre d'outils de la gestion factures dans le tab articles. À travers ce paramétrage est possible d'insérer les articles par le fichier dans la facture.

#1.5 Tab Importation BarCodeEn ce tab l'utilisateur spécifique les paramètres pour importer les données contenues dans le tableau FT_ImpBCAll. La Form d'importation s'ouvre par la barre d'outils de la gestion factures dans le tab articles. À travers ce paramétrage est possible d'insérer les articles par un tableau configuré dans la facture.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| UM alternative | S'il est établi, il signifie que la colonne UM alt de la grille Importation BarCode est gérée. |
| Emplacement | S'il est établi, il signifie que la colonne Emplacement de la grille Importation BarCode est gérée. |
| Compte client/fournisseur | S'il est établi, il signifie que les colonnes Compte, Sous-compte, Description client/fournisseur de la grille Importation BarCode sont gérées. |
| Prix article | S'il est établi, il signifie que la colonne Prix de la grille Importation BarCode est gérée. |
| Option | S'il est établi, il signifie que la colonne Option de la grille Importation BarCode est gérée. |
| Variante | S'il est établi, il signifie que la colonne Variante de la grille Importation BarCode est gérée. |
| Type prélèvement article | Il spécifique le type de prélèvement article: classe/code article, lot, numéro de série. |

#1.6 Tab Prélèvement

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Type fact. | Il spécifique le type chiffre d'affaires à utiliser à l'importation articles prévèlement dans la facture. |
| TVA | Il spécifique le code TVA à utiliser à l'importation articles prélèvement dans la facture. |

#1.7 Tab Valorisation

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Valorisation Groupe ajouté par les causes | Il spécifique les champs ajoutés pour le regroupement des bons de livraison dans la procédure de valorisation. |

#1.8 Tab analytiqueCes paramètres indiquent la priorité de recherche des centres de coût ou de profit pour les attribuer aux articles de la facture. Combien le flag recalcul est établi, les centres de coût ou de profit viennent insérés/actualisés dans les articles à travers la priorité choisie.






