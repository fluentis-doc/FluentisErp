---
title: Paramètres d'entrepôt
sidebar_position: 2
---

Après avoir sélectionné l'année dont on veut établir les paramètres dans la grille en haut à gauche, on visualise les 'Données de l'année' sélectionné.

**Données de l'année**: le premier de ces données est la 'Date dernierde la clôture d'exercice', c'est-à-dire la date où a été fait la dernière clôture d'entrepôt avec la reprise des soldes (voir la prévue procédure). Dans la majeur partie des cas elle corresponde aux 31-12 de l'année précédents. Le jour successif, donc normalement le 1º janvier, ils viennent insérées les enregistrements d'entrepôt de charge pour l'inventaire initial, créées automatiquement par la procédure de 'Visualisation d'entrepôt', à travers l'utilisation de la cause de charge Stocks: cette cause doit avoir le flag 'Stocks' actif.

Pour chaque entrepôt présente dans la société doit être présente une et une seule cause de charge des stocks initiale. Les invendus chargés avec cette cause dans le jour d'ouverture de l'entrepôt représentent les invendus initials du même entrepôt. Tous les mouvements successifs à cet enregistrement de charge seront identifiés comme entrées ou comme sortie d'entrepôt selon si se réfère à charge ou décharges.



**Calcul des invendus pour article, entrepôt**: les invendus d'entrepôt et donc la visualisation des invendus peuvent être vues sur la base des paramètres ici définis; donc est possible d'obtenir un calcul précis des invendus pour variante, pour emplacement, pour lot, pour commande ou pour client/fournisseur selon les flag actifs.

**Comme d'obtient la quantité alternative**: pour ce qui concerne le calcul de la quantité exprimée dans l'unité de mesure alternative cette peut être exécutée en divisant ou en multipliant la quantité de gestion pour le facteur de conversion selon l'option choisie. Ce paramètre vient défini et est valable pour tous les articles. Le facteur de conversion vient établi à niveau de registre article pour chaque unité de mesure alternative établie dans le même registre.

**Modifier les enregistrements d'entrepôt reliés avec autres documents**: il permet de modifier les enregistrements d'entrepôt reliés avec bons de livraison d'achat, factures d'achat, bons de livraison de vente, factures de vente, ecc. L'absence de ce flag comporte le fait que les documents d'entrepôt crées sur la base de documents d'achat ou de vente ne peuvent pas être modifiés. En ce cas paraîtra un message qui montre le fait que la modification n'est pas possible.

Pour ce qui concerne la modification des enregistrements d'entrepôt par les documents il faut tenir présent qu'il est possible de choisir si modifier la quantité, modifier le prix, modifier les deux ou aucune. Ce signifie qui au moment qu'un document déjà enregistré à entrepôt, pour exemple un bon de livraison d'achat, vient modifié, l'application contrôle si le flag Modifier quantité et le flag Modifier prix sont actifs ou non; en cas d'affirmation la modification exécutée dans le document vient transmise aussi dans l'enregistrement d'entrepôt avec lequel le document est lié, contrairement la modification du document n'intervient pas sur le relatif enregistrement d'entrepôt. Il est possible d'activer aussi un seul des deux flag.



**Valoriser pour entrepôt**: il permet de décider si la clôture d'entrepôt doit tenir en considération les coûts moyens (ou dernier, ou standard, selon quel type de coût on veut utiliser pour la clôture d'entrepôt) liés aux traitements effectués dans le cours de l'année sur chaque entrepôt. Ce signifie qui si un article a subi mouvementations sur 3 entrepôts, par exemple, si le flag actif aura 3 lignes différentes dans l'Historique d'Entrepôt pour l'année pour lequel on exécute la clôture, avec probablement 3 coûts moyens et 3 coûts deniers différents.

**Gestion des lots et numéros de série**: il permet de décider si doivent être permis mouvements d'entrepôt à lots et/ou à numéros de série. Si ce flag est désactivé, tous les autres flag présents dans la base de données qui gèrent options relatives à lots et numéros de série résultent inefficaces.

**Lots et NS obligatoires**: s'activé, il oblige l'utilisateur à insérer en tous les documents d'achat et de vente le lot de l'article inséré dans le même document, à condition que l'article soit géré à lots ou à numéros de série.

**Gestion taille et couleur**: il permet d'activer ou non la possibilité de gérer les articles à travers le paramétrages 'Taille et couleur', qui permet d'établir, en certains documents, une grille matricielle où insérer avec une certaine facilité d'opération, les quantités de l'article à gérer dans le même document.

**Permettre l'invendu négatif**: il permet d'envoyer sous-zéro l'invendu d'un article. Si le flag n'est pas activé, le système empêche toujours d'enregistrer les enregistrements d'entrepôt ou opérations de décharge qu'ils envoient sous-zéro l'invendu de n'importe quel article. Il faut préciser que si l'article est géré à lots ou à numéros de série, activer ce flag ne signifie pas d'avoir la possibilité de l'envoyer sous-zéro, parce que l'article géré à lots ou à numéros de série ne peut jamais être déchargé si l'invendu du lot ou du numéro de série qu'on veut déchargé n'existe pas.

**Permettre la modification des comptes des articles déjà utilisés**: il permet de modifier les donnés de 'Chiffre d'affaires d'achats' et 'Chiffre d'affaires de vente' d'articles qui ont déjà subi mouvementation d'entrepôt. Si le flag est désactivé cette modification est empêché.

**Obligation entrepôt pour les articles gérés à lots**: il impose à l'utilisateur d'insérer, dans les documents de décharge d'articles gérés à lots, l'entrepôt et la cause de décharge abord de sélectionner le lot à décharger. Contrairement, l'utilisateur peut décider de décharger, sur la même ligne article du document, un lot à entrepôt et un autre lot par un autre entrepôt, n'aient plus la nécessité d'indiquer par quel entrepôt viendront déchargés les lots à niveau de ligne document.

**Date début période et date fine période**: ils permettent à l'utilisateur de définir la période précédente laquelle peuvent être insérées et/ou modifiées et/ou supprimées les enregistrements d'entrepôt. Normalement on établi comme date début période une date à peine précédente respect à la date de dernière clôture de l'entrepôt, et comme date fine période la fin de l'année solaire en cours.

**Dupliquer l'article en un autre société**: ce flag permet de décider en quelles autres sociétés doivent pouvoir être doublés les articles en utilisant la fonction 'Dupliquer les articles', présente dans le formulaire Entrepôt.






