---
title: Articles
sidebar_position: 1
---

Le **tipe ligne** offre la possibilité de sélectionner les articles avec caractéristiques différentes:

**Article codé**: ils ont les articles codés dans le registre et ils peuvent être comptabilisés dans la comptabilité analytique et enregistrés dans l'entrepôt;

**Article ne codé pas**: ils sont les articles descritifs qui peuvent être comptabilisés dans la comptabilité analytique et enregistrés dans l'entrepôt;

**Article dépenses**: ils sont les articles codés ou ne codés pas et viennent resumés en façon distincte dans les récapitulations des documents, si l'article frais est codé et d'intérêt fiscal viendra animé dans l'entrepôt, si n'est pas codé ou pas d'intérêt fiscal ne viendra pas animé dans l'entrepôt;

**Article note**: il est une simple note, ne grave pas dans la comptabilité et dans l'entrepôt;

**Article hommage**: l'article hommage vient géré comme un article codé ou ne codé pas aux fins fiscales et d'entrepôt mais puisque il est une hommage vient compté séparément dans les récapitulations de la facture, sur la base du flag 'Rechange TVA' vient calculé le montant de la TVA de l'hommage payé par le client ou pas.

**Code**: il fait référence au code inséré dans les articles, tab 'Code BarCode'. Combien cet est inséré, le programme reprendre automatiquement l'article associé, avec tous les données de son registre;

L'insertion de la classe ou du matricule peut arriver manuellement ou avec le secours du 'Aide articles' (double click dans la section jeune) lequelle proposera toutes les données rélatives insérées dans le registre article. Après l'insertion de l'article, sa description sera reprise automatiquement dans le registre. Si l'article a variantes, il faudra sélectionner la variante dérisée du menu déroulant 'Variantes'.

**Unité de mesure**: il vient proposée l'UM principale de l'article, mais l'utilisateur a la possibilité de choisir une unité de mesure alternative;

**Variants**: il fait référence à éventuels variants de l'article sélectionné. La choix de la variante est utile pour les articles avec cette configuration particulier, qui peuvent avoir un prix divers de ce standard établi. En conséquence, le prix de l'article avec variants peut être divers du prix de l'article sans variants. Ceci peut redemander, éventuellement, la gestion des variants de l'article dans le catalogue de vente de référence;

**Quantité**: il représente la quantité de la UM principale; il peut être inséré manuellement ou peut être reprise par le document de vente considéré pour l'exécution (par exemple: par le commande client);

**Prix: **le prix vient proposé par la catalogue inséré dans le registre client; le catalogue de référence pour le même article est visualisé dans le tab 'Totals'. Le même document de vente pourrait contenir des articles des catalogues différentes si dans le registre client sont associés plusieurs catalogues en cascade (voir le registre clients/fournisseurs). À travers un double click dans le champ 'Catalogues' (tab 'Totals') l'utilisateur a la possibilité de sélectionner un offre divers de celle par défaut, par laquelles sera repris le prix de l'article inséré. En absense du catalogue, la donnée proposée est le prix de vente repris par le registre article;

**TVA: il **est prioritaire la donnée insérée dans le champ 'TVA' du registre client; si ce n'est pas présent, il vient proposé la valeur présente dans le registre article. C'est un champ obligatoire;

**Chiffre d'affaire vente**: il vient proposé la donnée insérée dans le tab 'Généralité' du registre articles. Si ce n'est pas présent, il ne vient pas proposée aucune donnée mais au moment de la comptabilisation de la facture, la valeur insérée dans le champ 'Coût/Profit de contrepartie prédéfini' du registre client sera considérée, ou sera engendré un message d'erreur;

**Unité de mesure alternative**: il vient proprosée l'UM présente dans le tab 'UM alternative' du registre article avec le flag par 'défaut' établi;

**Quantité alternative**: il vient proposée l'UM alternative, calculé en multipliant ou en divisant la quantité de gestion (relative à l'UM principale) avec le facteur de conversion établi dans le registre article.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les opérations effectuées. Le même résultat se obtient en deplaçant le curseur dans une ligne divers de celle qu'on désire enregistrer. |
| Nouvel article | Bouton pour insérer un nouvel article. |
| Supprimer article | Bouton pour supprimer l'article inséré. |
| Divers - Rechercher les derniers prix | Il permet de chercher les conditions de vente par l'article dans les documents de vente précédents et permet de reprendre le prix et la remise. |
| Ouvrir la disponibilité | Bouton pour ouvrir la 'Disponibilité article'. |
| Étendre/Réduire la grille des articles | Il permet de visualiser ou cacher les tab 'totals', 'données', 'variantes', 'lots'. |
| Importation articles | Il permet l'importation des articles par un document. |
| Importationpar BarCode | Il permet l'importation par BarCode. |
| Enregistrements d'entrepôt | Il permet d'ajouter un article type note par les enregistrements d'entrepôt (par la version RO). |
| Gestion acompte |  |
| Gestion emballage |  |
| Attributs article | Bouton pour ouvrir la fenêtre des attributs par le registre article. |






