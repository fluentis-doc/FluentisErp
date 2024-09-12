---
title: Paramètres commandes clients
sidebar_position: 2
---

Les paramètres des commandes clients permettent le paramétrage de base pour gérer correctement et selon les spécifiques demandées par chaque société.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurer paramètres | Il permet de restaurer les paramètres aux valeurs initiales. |

#1.1 Tab général

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Proposer commission pour tous les articles | Il n'est pas géré. |
| Gestion double unité de mesure | Il signale qu'il vient gérée l'unité de mesure alternative dans la commande client. |
| Proposition automatique UM alternative | S'il est actif, il vient gérée l'unité de mesure alternative dans la commande client. |
| Couvrir les trous de numérotation | S'il est actif, ils viendront récupérés les numéros disponibles. |
| Code opér. obligatoire | S'il est actif, le spécifique de l'opérateur dans l'en-tête commande client est obligatoire. |
| Contrôle sequence date et numéro document | S'il est actif, il viendra vérifiée la séquentialité date/numéro pour les commandes clients. |
| Récupérer seul dans la journée | S'il est actif, ils viendront récupérés les numéros disponibles seulement pour la journée d'aujourd'hui. |
| Récupération automatique | Il signale qui viendra proposé en automatique le premier numéro disponible. |
| Insertion automatique variantes en attributs variantes | S'il est actif, les variantes des attributs viendront insérées en automatique dans le registre.  |
| Exploder nomenclature | S'il est actif, dans l'insertion d'un article viendra remplacé par le premier niveau de sa nomenclature, s'il existe. |
| Contrôler disponibilité | S'il est actif, il viendra vérifiée la disponibilité de l'article commande client. |
| Exclure commandes clients | S'il est actif, l'engagement des commandes clients ne viendra pas considéré dans le calcul de la disponibilité de l'article commande client. |
| Dispon. obligatoire | S'il est actif, la disponibilité de l'article commande client sera obligatoire, c'est-à-dire la quantité ne pourra être majeur de la disponibilité. |
| Visualiser disp. | S'il est actif, il viendra visualisée la disponibilité à niveau de ligne article au moment qu'on insère la quantité. |
| Sous-traitant | S'il est actif, les documents de sous-traitant ils viendront considérés dans le calcul de la disponibilité de l'article commande client. |
| Achats | S'il est actif, les documents d'achat viendront considérés dans le calcul de la disponibilité de l'article commande client. |
| Ventes | S'il est actif, les documents de vente viendront considérés dans le calcul de la disponibilité de l'article commande client. |
| Prod. planifiée | S'il est actif, les documents du besoin matériaux et la commande de production viendront considérés dans le calcul de la disponibilité de l'article commande client. |
| Prod. délivrée | S'il est actif, les ordres de production viendront considérés dans le calcul de la disponibilité de l'article commande client. |
| Entrepôt | S'il est actif, les enregistrements d'entrepôt viendront considérées dans le calcul de la disponibilité de l'article commande client. |
| Rechercher prix article en tous les catalogues prédéfinis | S'il est actif, l'article inséré dans la ligne commande client viendra recherché aussi dans les catalogues spécifiés dans le registre client, en plus du catalogue par défault. |
| Utilisation BarCode | S'il est actif, les colonnes Article client et Description article client de la grille Articles sont visibles et gérées. |
| Utilisation article client | S'il est actif, les colonnes Article client et Description article client de la grille Articles sont visibles et gérées. |
| Gestion taille et couleur | S'il est actif, les colonnes Lot de la grille Variantes sont gérées. |
| Visualiser dimensions | S'il est actif, les colonnes dimensions (Hauteur, Largeur, Profondeur) de la grille Articles sont gérées. |
| Permettre remises pour les articles hommages | S'il est actif, les articles hommages gèrent les remises. |
| Contrôler intégrité | S'il est actif, il vient vérifiée l'intégrité des données de la commande client. |
| Obligation rapport colis qté | S'il est actif, il viendra vérifiée la quantité ligne commande client relativement au numéro colis du registre article. |
| Bloquer insértion document en date fériées | S'il est actif, il est empêché l'utilisation des dates fériées. |
| Proposer lot économique | S'il est actif, il est proposé le lot économique du registre article pour la quantité de la ligne commande client. |
| Lien comm. clie./prod. | S'il est actif, la quantité de la ligne commande client viendra tenue égale avec la quantité de la commande de production, avec laquelle est relié. |
| Assembler attributs | S'il est actif, ils viendront insérés comme attributs ligne commande client, soit les attributs du client que ces du registre article. |
| Bloquer attributs | S'il est actif, la grille Attributs de l'article commande client viendra bloquée. |

#1.2 Tab décharge

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Priorité paramètres insérés pour chaque ligne ordre | Il n'est plus géré. |
| Entrepôt | Il n'est plus géré. |
| Cause | Il n'est plus géré. |

#1.3 Tab configurateur

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Configurateur | Il spécifique l'adresse HTTP configurateur. |
| Commandes clients | Il spécifique l'adresse HTTP WSOC. |
| Version | Il spécifique le type de configurateur utilisé: Configurateur ou Visual Tailor. |

#1.4 Tab exécution

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Paiements | Il spécifique la valeur utilisée pour le paiement de la commande client dans le cas de l'exécution multiple commande de vente: Premier ordres, Registre ou Sélection manuel. |
| Destination | Il spécifique la valeur utilisée pour le destinataire de la commande client dans le cas de l'exécution multiple commande de vente: Premier ordre, Registre ou Sélection manuel. |
| Exécution par rechercher ordres Regoupement pour type et solution de paiement | Il spécifique que les commandes clients viendront regroupés pour type et solution paiement à l'exécution directe dans les bons de livraison ou dans les factures. |
| Exécution par rechercher ordres Regroupement pour destination | Il spécifique que les commandes clients viendront regroupés pour le destinataire et la destination à l'exécution directe dans les bons de livraison ou dans les factures. |

#1.5 Tab analytiqueIl spécifique la priorité pour la recherche CDC/CDP: type chiffre d'affaires, Registre, Registre articles ou Entrepôt.






