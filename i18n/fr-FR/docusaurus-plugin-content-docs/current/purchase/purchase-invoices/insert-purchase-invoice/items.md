---
title: Articles
sidebar_position: 4
---

Le **type ligne** offre la possibilité de sélectionner les articles avec caractéristiques différents:

**Article codé**: ils sont les articles codés en registre et peuvent être comptabilisés en comptabilité analytique et enregistrés en entrepôt;

**Article ne codé** ** pas**: ils sont articles descriptifs qui peuvent être comptabilisés en comptabilité analytique mais ne peuvent pas être animés en entrepôt;

**Article** ** frais**: ils sont articles codés et ne codés pas, et il vient résumés en façon distinctif dans les récapitulations des documents, si l'article frais est codé et d'intérêt fiscal viendra animé en entrepôt, si est necodé pas ou ne d'intérêt fiscal ne viendront pas animés en entrepôt;

**Article note**: il est une simple note, n'incise pas dans la comptabilité et dans l'entrepôt;

**Article hommage**: l'article hommage vient géré comme un article codé et ne codé pas aux fins fiscales et d'entrepôt, toutefois, en étant un hommage, il vient gagné séparément dans les récapitulations de la facture; sur la base du flag 'Revanche TVA' il vient calculé le montant TVA de l'hommage qui peut être ou non payé par le client.

Ces données peuvent être insérées automatiquement au moment que l'utilisateur insère la classe ou la matricule parce que le type ligne 'Article codé' vient sélectionner en automatique.

**Code**: il fait référence au code article BarCode inséré en 'Articles', tab 'Code BarCode'. Au moment où vient inséré, le programme reprendre automatiquement l'article associé avec toutes les données de son registre.

L'insertion de la classe ou de du matricule peut avenir manuellement ou avec l'aide du 'Aide articles' (double click dans la section jeune) lequel proposera toutes les données relatives insérées dans le registre article. Après l'insertion de l'article, sa description sera reprise automatiquement par le registre. Si l'article a variantes, il faudra sélectionner la variante désirée par le menu déroulant 'Variantes'. Le lot vient engendré automatiquement ou peut être inséré son code.

**Variantes**: il fait référence aux variantes de l'article sélectionné. Le choix de la variante est utile pour les articles avec cette configuration particulière, qui peuvent avoir un prix différent par ce standard établi. Par conséquence, le prix de l'article avec variantes peut être différent par le prix de l'article sans variantes. Ça peut redemander, éventuellement, la gestion des variants de l'article dans le catalogue d'achats de référence;

**Unité de mesure**: il vient proposée l'UM principale de l'article, mais l'utilisateur a la possibilité de choisir une unité de mesure alternative;

**Quantité**: il représente la quantité de l'UM principale; il peut être insérée manuellement ou il peut être reprise par le document d'achats considéré pour l'exécution (pour exemple par la commande fournisseur);

**Prix**: le prix vient proposé par le catalogue inséré dans le registre fournisseur; le catalogue de référence pour le même article est visualisé dans le tab 'Totals'. Le même document d'achats pourrait contenir articles par catalogues au cas où registres fournisseurs soient associés plus catalogues en cascade (voir le registre clients/fournisseurs). À travers double click dans le champ 'Catalogues' (tab 'Totals') l'utilisateur a la possibilité de sélectionner une offre différente par celle par défaut, par quel sera reprise le prix de l'article inséré. En absence du catalogue, la donnée proposée est le coût dernier repris par le registre article;

**TVA**: il est prioritaire la donnée insérée dans le champ TVA du registre fournisseur. Si ce n'est pas présent, il vient proposé la valeur présente dans le registre article. Est un champ obligatoire;

**Chiffre d'affaires d'achat**: il vient proposé la donnée insérée dans le tab 'Généralité' du registre articles. Si ce n'est pas présent, il ne vient pas proposé aucune donnée, mais au moment de la comptabilisation de la facture sera considéré la valeur insérée dans le champ 'Coût/Produit de contrepartie prédéfinie' du registre fournisseur;

**Unité de mesure alternative**: il vient proposée l'UM présente dans le tab 'UM alternative' du registre article avec le flag par 'Défaut' établi;

**Quantité alternative**: il vient proposée la valeur relative à l'UM alternative, calculée en multipliant ou en divisant la quantité de gestion (relative à l'UM principale) avec le facteur de conversion établit dans le registre article.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les opérations effectuées. Le même résultat s'obtient en déplaçant le curseur sur une ligne différente de celle qu'on désire enregistrer. |
| Nouvel article | Bouton pour insérer un nouvel article. |
| Virement fact. à recevoir | Procédure qui permet de ristourner les factures à recevoir. |
| Modifier les chiffres d'affaires | Bouton pour modifier le type chiffre d'affaires achats. |
| Supprimer article | Bouton pour supprimer l'article inséré. |
| Éteindre/Réduire la grille des articles | Il permet de visualiser ou cacher les tab 'totals', 'données', 'variantes', 'lots'. |
| Importation par BarCode | Il permet l'importation par BarCode. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de classement documentaire associée à la masque en utilisation. |






