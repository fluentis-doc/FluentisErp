---
title: Articles
sidebar_position: 3
---

Le **type ligne** offre la possibilité de sélectionner les articles avec caractéristiques différents:

**Article codé**: ils sont les articles codés en registre et peuvent être comptabilisés en comptabilité analytique et enregistrés en entrepôt;

**Article ne codé** ** pas**: ils sont articles descriptifs qui peuvent être comptabilisés en comptabilité analytique, mais ils ne peuvent pas être animés en entrepôt;

**Article** ** frais**: ils sont articles codés et ne codés pas, et il vient résumés en façon distinctif dans les récapitulations des documents, si l'article frais est codé et d'intérêt fiscal viendra animé en entrepôt, si est necodé pas ou ne d'intérêt fiscal ne viendront animés en entrepôt;

**Article note**: il est une simple note, n'incise pas dans la comptabilité et dans l'entrepôt. Ces données peuvent être insérées automatiquement au moment qui viennent insérés directement la classe ou le matricule parce que le type ligne 'Article codé' vient sélectionné en automatique.

**Code**: il fait référence au 'Code article BarCode' inséré en 'Articles', tab 'Code BarCode'. Au moment où vient inséré, le programme reprendre automatiquement l'article associé avec toutes les données de son registre.

L'insertion de la classe ou de du matricule peut arriver manuellement ou avec l'aide du 'Aide articles' (double click dans la section jeune) lequel proposera toutes les données relatives insérées dans le registre article. Après l'insertion de l'article, sa description sera reprise automatiquement par le registre. Si l'article a variantes, il faudra sélectionner la variante désirée par le menu déroulant 'Variantes'. 

**Unité de mesure**: il vient proposée l'UM principale de l'article, mais l'utilisateur a la possibilité de choisir une unité de mesure alternative;

**Variantes**: il fait référence aux variantes de l'article sélectionné, si ces existents. Le choix de la variante est utile pour les articles avec cette configuration particulière, qui peuvent avoir un prix différent par ce standard établi. Par conséquence, le prix de l'article avec variantes peut être différent par le prix de l'article sans variantes. Ça peut redemander, éventuellement, la gestion des variants de l'article dans le catalogue d'achats de référence;

**Quantité**: il représente la quantité de l'UM principale; peut être insérée manuellement ou peut être proposée automatiquement sur la base à la quantité alternative et au facteur de conversion;

**Prix**: le prix vient proposé par le catalogue inséré dans le registre fournisseur; le catalogue de référence pour le même article est visualisé dans le tab 'Totals'. Le même document d'achats pourrait contenir articles par catalogues au cas où registres fournisseurs soient associés plus catalogues en cascade (voir le registre clients/fournisseurs). À travers double click dans le champ 'Catalogues' (tab 'Totals') l'utilisateur a la possibilité de sélectionner une offre différente par celle par défaut, par quel sera reprise le prix de l'article inséré. En absence du catalogue, la donnée proposée est le coût dernier repris par le registre article, si dans les paramètres n'est pas établi 'Coût à zéro en absence de catalogues'.

**TVA**: il est prioritaire la donnée insérée dans le champ TVA du registre fournisseur. Si ce n'est pas présent, vient proposé la valeur présente dans le registre article. Est un champ obligatoire;

**Chiffre d'affaires d'achat**: il vient proposé la donnée insérée dans le tab 'Généralité' du registre articles. Si ce n'est pas présent, ne vient pas proposé aucune donnée, mais au moment de la comptabilisation de la facture sera considéré la valeur insérée dans le champ 'Coût/Produit de contrepartie prédéfinie' du registre client;

**Unité de mesure alternative**: il vient proposée l'UM présente dans le tab 'UM alternative' du registre article avec le flag par 'Défaut' établi;

**Quantité alternative**: il vient proposée la valeur relative à l'UM alternative, calculée en multipliant ou en divisant la quantité de gestion (relative à l'UM principale) avec le facteur de conversion établit dans le registre article.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les opérations effectuées. Le même résultat s'obtient en déplaçant le curseur sur une ligne différente par celle qu'on désire enregistrer. |
| Divers | Il permet de chercher les conditions d'achat pour article dans les documents de vente précédentes et permet de reprendre il prix e la remise. |
| Nouvel article | Bouton pour insérer un nouvel article. |
| Supprimer article | Bouton pour supprimer l'article inséré. |
| Ouvrir le filtre articles (Entrepôt) | Bouton pour ouvrir le registre article. |
| Ouvrir le filtre articles (Fournisseurs) | Bouton pour ouvrir le tableau des articles fournisseurs. |
| Navigateur articles | Bouton pour ouvrir le navigateur articles. |
| Paramètres d'insertion des articles | Il ouvre la fenêtre des paramètres:- insertion automatique des articles dans le registre, s'établit il permet de coder les articles insérés dans l'ordre directement dans le registre article.- insertion automatique des variants dans le registre, s'établit il permet de coder les variantes insérées dans l'ordre directement dans la ligne article.- proposition automatique des codes variants, s'établit il permet de créer en automatique le code de la variante et l'utilisateur peut le modifier.- insertion automatique des articles fournisseurs dans le registre, s'établit il permet de coder les codes articles fournisseurs insérés dans l'ordre directement dans le tableau articles fournisseur.- actualisation automatique du catalogue fournisseur, s'établit il permet d'insérer et actualiser les prix dans le catalogue du fournisseur, présent dans le tab catalogues à actualiser présente en ces paramètres, avec les articles insérés dans l'ordre.- actualisation automatique du catalogue de vente, s'établir il permet d'insérer et actualiser les prix dans le catalogue de vente présente dans les tab articles de la commande fournisseur. |
| Attributs article | Bouton pour ouvrir la fenêtre attributs par le registre article. |
| Étendre/Réduire la grille des articles | Il permet de visualiser ou cacher les tab 'Totals', 'données', 'variantes', 'lots'. |
| Subdiviser les qté en plusieurs dates livraison | Il permet d'ajouter un article. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de classement documentaire associée à la masque en utilisation. |






