---
title: Articles
sidebar_position: 1
---

Le **tipe ligne** offre la possibilité de sélectionner les articles avec caractéristiques diverses:

**Article codé**: ils sont les articles codés dans le registre et peuvent être comptabilisés dans la comptabilité analytique et enregistrés dans l'entrepôt;

**Article ne codé pas**: ils sont les articles descritifs qui peuvent être comptabilisés dans la comptabilité analytique, mais ne peuvent pas être mouvementés dans l'entrepôt;

**Article dépenses**: ils sont les articles codés ou ne codés pas et viennent resumés en façon distincte dans les récapitulations des documents, si l'article frais est codé et d'intérêt fiscal viendra mouvementé dans l'entrepôt, si n'est pas codé ou pas d'intérêt fiscal ne viendra pas mouvementés dans l'entrepôt;

**Article note**: il est une simple note, ne grave pas dans la comptabilité et dans l'entrepôt.

Ces données peuvent être insérées automatiquement quand l'utilisateur insère directement la classe ou la matricule parce que le type ligne ‘article codé' vient sélectionné en automatique. 

L'insertion de la classe ou de du matricule peut avenir manuellement ou avec le secours du 'Aide articles' (double click dans la section jeune) laquelle proposera tous les données relatives insérées dans le registre article. Après l'insertion de l'article, sa description sera reprise automatiquement dans le registre. Si l'article a variantes, il faudra sélectionner la variante dérisée du menu déroulant 'Variantes'.

**Quantité**: il représente la quantité de la UM principale; il peut-être insérée manuellement ou peut-être reprise par le document d'achat considéré pour l'exécution;

**Prix: **le prix vient proposé par le catalogue inséré dans le registre client; le catalogue de référence pour le même article est visualisé dans le tab 'Totals'. Le même document d'achat pourrait contenir des articles des catalogues divers si dans le registre client sont associés plusieurs catalogues en cascade (voir le registre clients/fournisseurs). À travers d'un double click dans le champ 'Catalogues' (tab 'Totals') l'utilisateur a la possibilité de sélectionner une offre diverse de celle par défaut, par laquelle sera repris le prix de l'article inséré. En absence du catalogue, la donnée proposée est le prix de vente repris par le registre article;

**TVA: il **est prioritaire la donnée insérée dans le camp 'TVA' du registre client; si ce n'est pas présent, il vient proposé la valeur présente dans le registre article. Il est un champ obligatoire;

**Chiffre d'affaire vente**: il vient proposé la donnée insérée dans le tab 'Généralité' du registre articles;

**Variantes**: il fait référence aux variantes de l'article sélectionné, si ces existent.Le choix de la variante est utile pour les articles avec cette configuration particulière qui peuvent avoir le prix divers de ce standard établi. En conséquence, le prix de l'article avec variants peut être divers des prix de l'article sans variants. Ceci peut demander l'éventuelle gestion des variants de l'article dans le catalogue de vente de référence;

**Unité de mesure alternative**: il vient proprosée l'UM principal de l'article, mais l'utilisateur a la possibilité de choisir un unite de mesure alternative;

**Quantité alternative**: il vient proposée la valeur relative à l'UM alternative, calculé en multipliant ou en divisant la quantité de gestion (relative à l'UM principale) avec le facteur de conversion établi dans le registre article.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les opérations effectuées. Le même résultat si obtient en déplaçant le curseur sur une ligne divers de celle que vous désirez enregistrer. |
| Nouvel article | Bouton pour insérer un nouvel article. |
| Supprimer article | Bouton pour supprimer l'article inséré. |
| Nouvel enfant | Pour les commandes configurées avec la structure hiérarchique en <Tableaux/Ventes/Type commandes ventes> peuvent insérer les articles dans celle structure.  |
| Nouveau frère | Pour les commandes configurées avec la structure hiérarchique en <Tableaux/Vente/Type commandes de vente> peuvent insérer les articles dans celle structure. |
| Étendre/Reduire la grille des articles | Il permet de visualiser ou cacher les tab 'totals', 'données', 'variantes', 'lots', 'chiffre d'affaire' , 'demande d'intervention'. |
| Supprimer les remises | Bouton pour supprimer la remise de l'article inséré. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de classement documentaire associée à la masque en utilisation. |






