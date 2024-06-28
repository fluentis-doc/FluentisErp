---
title: Gestion de réception marchandise
sidebar_position: 3
---

Pour insérer une nouvelle réception marchandise doivent être insérés:

**Fournisseur**: à travers l'aide ou l'insertion manuel de compte et sous-compte;

**Date**: il vient proposée la date égale à la date d'aujourd'hui;

**Numéro**: il vient proposé le dernier numéro progressif utile pour la date;

**Type**: réception marchandises.

Le Type articles qui est possible d'insérer dans les réceptions marchandises sont seuls articles codés dans le registre et peuvent être insérés manuellement ou à importation par le BarCode ou par les commandes fournisseurs.

**Code**: il fait référence au 'Code article BarCode' inséré dans les Articles, tab 'Code BarCode'. Au moment de l'insertion le programme reprenait automatiquement l'article associé, avec toutes les données de son registre. L'insertion de la classe ou du matricule peut avenir manuellement ou avec l'aide de l''Aide articles' ( double click dans la section jaune) lequel proposera toutes les données relatives insérées dans le registre article. Après l'insertion de l'article, sa description sera reprise automatiquement par le registre. Si l'article à variantes, il faudra sélectionner la variante désirée par le menu déroulant 'Variantes';

**Variantes**: il fait référence aux variantes de l'article sélectionné, si ces existent. Le choix de la variante est utile pour les articles avec cette configuration particulière, qui peuvent avoir un prix différent de ce standard établi. Par conséquent, le prix de l'article avec variantes peut être différent par le prix de l'article sans variantes. Ça peut demander, éventuellement, la gestion des variantes de l'article dans le catalogue de vente de référence;

**Article fournisseur**: il fait référence au tableau des articles fournisseurs, l'article peut être sélectionné à travers l'aide ou inséré manuellement;

**Variante article fournisseur**: il fait référence au tableau de la variante des articles fournisseur, la variante peut être sélectionnée à travers l'aide ou insérée manuellement;

**Unité de mesure**: il vient proposée l'UM principal de l'article, mais l'utilisateur a la possibilité de choisir une unité de mesure alternative;

**Quantité document**: il représente la quantité de l'UM principale; il vient insérée la quantité rapportée à la commande fournisseur exécuté, n'est pas une donnée obligatoire;

**Quantité reçue**: il représente la quantité effectivement reçue;

**Unité de mesure alternative**: il vient proposée l'UM présente dans le tab UM alternative du registre article avec le flag par 'Défaut' établi;

**Quantité alternative**: il vient proposé la valeur relative à l'UM alternative, calculé en multipliant ou en divisant la quantité de gestion (relative à l'UM principale) avec le facteur de conversion établit dans le registre article;

**Prix**: il représente le prix présent dans la commande fournisseur ou le coût dernier de registre articles;

**Option**: la donnée, obligatoire, corresponde au tableau des options de la nomenclature;

**Entrepôt**: il est l'entrepôt de réception de la marchandise, il vient reprise par la commande fournisseur si la ligne réception a exécuté une ligne commande fournisseur ou peut être insérée manuellement par l'utilisateur;

**Cause**: il est la cause de réception de la marchandise, vient reprise par la commande fournisseur si la ligne réception a exécuté une ligna commande fournisseur ou peut être insérée manuellement par l'utilisateur;

**Description article**: il vient proposée la description de l'article et n'est pas possible la modifier;

**Référence ordre**: si la ligne a été créée en traitant une ligne commande fournisseur vient ramené le numéro ordre exécuté;

**Localisation**: si la cause a une localisation par défaut, il vient proposée telle localisation autrement peut-être insérée manuellement si l'entrepôt est géré à localisations;

**Commande**: pour chaque ligne réception est possible d'associer une commande de vente.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer la réception marchandises | Enregistrer la réception. |
| Nouvel article | Si position dans la grille article pour une nouvelle insertion. |
| Supprimer articles | Il supprime les lignes article sélectionnées. |
| Propriété de l'article | Si la ligne article a exécuté une ligne commande fournisseur à travers cette fonction est possible visualiser les données de la commande fournisseur de référence et les données de la ligne article récapitulatif. |
| De commande fournisseur | La procédure permet de créer les lignes de réception en exécutant les commande fournisseurs. |
| Importation par BarCode | Il permet d'importer les lignes article par un tableau configurée dans les paramètres. |






