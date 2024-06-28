---
title: Articles
sidebar_position: 4
---

Le **type ** **ligne** offre la possibilité de sélectionner les articles avec caractéristiques en dessous:

**Article codé**: ils sont les articles codés en registre et ils peuvent être comptabilisés en comptabilité analytique et enregistrés en entrepôt;

**Article ne codé** ** pas**: ils sont les articles descriptifs qui peuvent être comptabilisés en comptabilité analytique mais ne peuvent pas être animés en entrepôt;

**Article** ** frais**: ils sont les articles codés ou ne codent pas résumés en façon distincte dans les récapitulations des documents; si l'article frais est codés et d'intérêt fiscal ils viendront animés en entrepôt, si n'est pas codé ou n'a pas intérêt fiscal ne viendra pas animé en entrepôt;

**Article** ** notes**: il est une simple note, ne pèse pas sur la comptabilité et sur l'entrepôt;

**Article** ** hommage**: l'article hommage vient géré comme un article codé ou ne codé pas aux fins fiscales et d'entrepôt mais en aient un hommage, lui vient comptagé séparément dans les résumes du bon de livraison;

Ces articles peuvent être insérés automatiquement au moment insérés directement la classe ou la matricule parce que le type ligne 'Article codé' vient sélectionné en automatique.

**Code**: il fait référence au 'Code article BarCode' inséré dans les articles, tab 'Code BarCode'. Au moment que s'il vient inséré, le programme reprendre automatiquement l'article associé à toutes les données de son registre.

L'insertion de la classe ou de la matricule peut arriver manuellement ou avec l'aide de l''Aide articles' (double click dans la section jeune) laquelle proposera tous les données relatives insérées dans le registre article. Après l'insertion de l'article, sa description sera reprise automatiquement par le registre. Si l'article a variantes, il faudra sélectionner la variante désirée par le menu déroulant 'Variantes'. Le lot vient engendré automatiquement ou l'utilisateur peut insérer manuellement son code.

**Quantité**: il représente la quantité de la UM principale; peut être insérée manuellement ou peut être reprise par le document d'achat considéré pour l'exécution (p.ex.: par la commande fournisseur);

**Prix**: le prix vient proposé par le catalogue inséré dans le registre fournisseur; le catalogue de référence pour le même article est visualisé dans le tab 'Totals'. Si dans le registre fournisseur sont associées plus catalogues en cascade (voir le registre clients/fournisseurs), le même document d'achat pourrait contenir articles par différents catalogues. À travers le double click dans le champ 'Catalogues' (tab 'Totals') l'utilisateur a la possibilité de sélectionner une offre différente par celle par défaut, par laquelle sera reprise le prix de l'article inséré. En absence du catalogue, la donnée proposée est le coût dernier repris par le registre article;

**TVA**: la donnée insérée dans le champ TVA du registre fournisseur est prioritaire. Si ce n'est pas présent, il vient proposé la valeur présente dans le registre article. il est un champ obligatoire;

**Chiffre d'affaires** ** achats**: il vient proposé la donnée insérée dans le tab 'Généralité' du registre articles. Si ce n'est pas présent il ne vient pas proposé aucune donnée mais au moment de la comptabilisation de la facture sera considéré la valeur insérée dans le champ 'Coût/Produit de contrepartie prédéfini' du registre fournisseur;

**Unité de mesure alternative**: il vient proposée l'UM présente dans le tab UM alternative du registre article avec le flag par 'Défaut' établi;

**Quantité alternative**: il vient proposé le valeur relatif à l'UM alternative, calculé en multipliant ou en divisant la quantité de gestion (relative à l'UM principale) avec le facteur de conversion établit dans le registre article;

**Entrepôt et cause**: ils viennent proposés l'entrepôt et la cause de référence qui paraissent automatiquement au moment de la charge des articles en entrepôt.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les opérations effectuées. Le même résultat s'obtient en déplaçant le curseur sur une ligne différence de celle qu'on désire enregistrer. |
| Nouvel article | Bouton pour insérer un nouvel article. |
| Supprimer article | Bouton pour supprimer l'article inséré. |
| Étendre/Reduire la grille des articles | Il permet de visualiser ou cacher les tab 'Totals, 'Données', 'Variantes', 'Lots'. |
| Importation par BarCode | Il permet l'importation des articles par BarCode. |
| Supprimer les remises | Bouton pour supprimer la remise de l'article. |
| Gestion emballage |  |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de classement documentaire associée à la masque en utilisation. |






