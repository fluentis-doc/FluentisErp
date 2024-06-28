---
title: Articles
sidebar_position: 1
---

Le **tipe ligne** offre la possibilité de sélectionner les articles avec caractéristiques divers:

**Article codé**: ils sont les articles codés dans le registre et peuvent être comptabilisés dans la comptabilité analytique et enregistrés dans l'entrepôt;

**Article ne codé pas**: ils sont les articles descriptifs qui peuvent être comptabilisés dans la comptabilité analytique et enregistrés dans l'entrepôt;

**Article dépenses**: ils sont les articles codés ou ne codés pas et viennent resumés en façon distincte dans les récapitulations des documents, si l'article dépense est codé et d'intérêt fiscal viendra mouvementé dans l'entrepôt, si n'est pas codé ou pas d'intérêt fiscal ne viendra pas mouvementés dans l'entrepôt;

**Article note**: il est une simple note, ne grave pas dans la comptabilité et dans l'entrepôt;

**Article hommage**: l'article hommage vient géré comme un article codé ou ne codé pas aux fins fiscales et d'entrepôt mais puisque est une hommage vient compté séparément dans les récapitulations de la facture, sur la base du flag 'Rechange TVA' vient calculé le montant de la TVA de l'hommage payé par le client ou pas. Ces données peuvent être insérés automatiquement quand insérées directement la classe ou la matricule parce que le type ligne 'article codé' vient sélectionné en automatique.

**Code**: il fait référence au code inséré dans les articles, tab 'Code BarCode'. Combien cet est inséré, le programme reprendre automatiquement l'article associé, avec tous les données de son registre;

L'insertion de la classe ou de du matricule peut avenir manuellement ou avec le secours du 'Aide articles' (double click dans la section jeune) lequelle proposera tous les données relatives insérées dans le registre article. Après l'insertion de l'article, sa description sera reprise automatiquement dans le registre. Si l'article à variants, il faudra sélectionner la variante dérisée du menu déroulant 'Variants'.

**Unité de mesure**: il vient proposée l'UM principale de l'article, mais l'utilisateur a la possibilité de choisir une unité de mesure alternative;

**Variants**: il fait référence à éventuels variants de l'article sélectionné. Le choixde la variante est utile pour les articles avec cette configuration particulière, qui peuvent avoir un prix divers de ce standard établi. En conséquence, le prix de l'article avec variants peut être divers des prix de l'article sans variants. Ceci peut redemander, éventuellement, la gestion des variants de l'article dans le catalogue de vente de référence;

**Quantité**: il représente la quantité de la UM principal; peut être insérémanuellement ou peut être repris par le document de vente considéré pour l'exécution (par exemple: par la commande client);

**Prix: **le prix vient proposé par le catalogue inséré dans le registre client; le catalogue de référence pour le même article est visualisé dans le tab 'Totals'. Le même document de vente pourrait contenir des articles des catalogues divers si dans le registre client sont associés plusieurs catalogues en cascade (voir le registre clients/fournisseurs). À travers d'un double click dans le champ 'Catalogues' (tab 'Totals') l'utilisateur a la possibilité de sélectionnerune offre diverse de celle par défaut, par laquelle sera repris le prix de l'article inséré. En absence du catalogue, la donnée proposée est le prix de vente repris par le registre article;

**TVA**: il est prioritaire la donnée insérée dans le camp 'TVA' du registre client; si ce n'est pas présent, vient proposé la valeur présente dans le registre article. Est un champ obligatoire;

**Chiffre d'affaire vente**:il vient proposé la donnée insérée dans le tab 'Généralité' du registre articles. Si ce n'est pas présent, ne vient pas proposé aucune donnée mais au moment de la comptabilisation de la facture, lavaleur insérée dans le champ 'Coût/Profit de contrepartie prédéfini' du registre client sera considéré, ou sera engendré un message d'erreur;

**Unité de mesure alternative**: il vient proprosée l'UM présente dans le tab 'UM alternative' du registre article avec le flag par 'défaut' établi;

**Quantité alternative**: il vient proposée l'UM alternative, calculé en multipliant ou en divisant la quantité de gestion (relative à l'UM principale) avec le facteur de conversion établit dans le registre article.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les opérations effectuées. Le même résultat si obtient en déplaçant le curseur dans une ligne divers de celle qu'on désire enregistrer. |
| Nouvel article | Bouton pour insérer un nouvel article. |
| Supprimer article | Bouton pour supprimer l'article inséré. |
| Variés - Rechercher les derniers prix | Il permet de chercher les conditions des vente pour l'article dans les documents de vente précédents et permet de reprendre le prix et la remise. |
| Ouvrir la disponibilité | Bouton pour ouvrir la 'Disponibilité article'. |
| Étendre/réduir la grille des articles | Il permet de visualiser ou cacher les tab 'totals', 'données', 'variants', 'lots'. |
| Importation articles | Il permet l'importation des articles d'un document. |
| Importation Bar Code | Il permet l'importation de Bar Code. |
| Enregistrements d'entrepôt | Il permet d'ajouter un article de type note par les enregistrements d'entrepôt. |
| Attributs articles | Bouton pour ouvrir la fenêtre par le registre article. |
| Scan | Il permet d'ajouter un article. |
| Supprimer les remises | Il permet de supprimer la remise associée à un article. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de classement documentaire associée à la masque en utilisation. |






