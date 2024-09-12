---
title: Commissions directes
sidebar_position: 4
---

La fenêtre est fondamentale pour définir quels sont les critères d'individuation des pourcentages de commissions.

Les premiers deux champs permettent de définir un pourcentage général et un montant fix: le pourcentage général sera utilisé seul si dans la section de droite, où si définent en ordre de priorité les critères de valorisation, est présente la typologie '1 - Registre agent'. La liste des options possibles est la suivante:

**Registre agent**: selon le pourcentage inséré dans le même registre;

**Registre client**: selon le pourcentage qui l'agent a dans le registre client;

**Zone client**: selon la zone associée au client;

**Catalogue client**: selon les catalogues applicables aux clients (donc catalogues généraux et/ou catalogues personnalisés);

**Classe**: selon la classe de l'article vendu;

**Article**: pour chaque article vient défini le pourcentage de l'agent en utilisation;

**Catalogue - Classe**: selon la combinaison de la classe article dans les divers catalogues;

**Catalogue - Classe - Article**: selon la combinaison de chaque article dans les divers catalogues;

**Type article**: selon le type d'article;

**Reg. Client - Classe**: selon la combinaison de la classe article pour chaque registre client;

**Reg. Client - Classe - Article**: selon la combinaison de la classe article pour chaque client;

**Tranche de remise**: selon le type de tranche remise [Home > Tableaux > Vente > Gamme remise], c'est-à-dire en reliant la commission à les remises que le même agent applique au client. Àleur fois, les tranches de remise peuvent dépendre par les classes article, par les catalogues, par le type article, par les caractéristiques articles, par les catégories produites ou être une structure d'échelons fix.

La logique d'individuation de la commission à appliquer, donc, dépende des priorités associées aux typologies qu'on veut utiliser: si sont, p.ex. présents avec priorité 1, 2, 3 les typologies '6 - article', '4 - article client', et '1- registre agent' le système ira à valuer, à l'insertion de l'article, si cet est dans la liste des articles pour lesquels l'agent a un pourcentage de commission établie (si est entre ces se prend ce % de commission), si n'est pas entre ces ira à valuer si la ligne a un prix qui derive par un catalogue particulier (p .ex. catalogues de remise) sur lequel l'agent a une commission définie (siest entre ces si prend ce % de commission), si n'est pas entre ces ira à utiliser le pourcentage fix du registre client.

Pour certaines de ces options il faut appuyer le bouton 'Détail pourcentages sélectionnées...' au fin d'ouvrir le masque de définition des combinaisons valables pour le même agent. En ces masques, qui dépendent par le type de paramétrage de départ (p.ex. s'on parle d'articles il y aura le champ de définition de l'article, s'on parle de catalogues il y aura le champ pour le catalogue, ecc), il est important ir à définir la gamme de dates de validité de ce paramétrage: pour le même article, p.ex. pourrait être plusieurs pourcentages de commission avec gamme de date validités différents.

Il faut expliquer le détail de commission défini sur la Gamme de remise: pour ces, en effet, est important définir quel soit la gamme de remise (comme défini dans le tableau) à appliquer à l'agent et si les commissions seront ces Standards insérés ou un pourcentage personnalisé pour l'agent sur les échelons de remise définis pour cette gamme; en deuxième lieu, est fondamental dir si le calcul de la remise effective appliquée est défini respect au prix du registre article, ou selon la relation prix brut-net de chaque ligne article (s'il ne sera pas possible d'automatiser les commissions agents au moment qu'ont créé les documents directement sur les prix nets).

Ultérieur annotation générale à propos au catalogues: ils viennent associés les spécifiques catalogues, pas une typologie de catalogue. En substance, si dans le formulaire des catalogues de vente si crée un nouveau catalogue du même type précédent mais avec une nouvelle date début validité, si va de nouveau associéau registre agent avec ses pourcentages de commissions.

Dans le masque, enfin, il y a un autre bouton qui permet d'insérer les paramétrages d'un autre agent, sélectionné par l'aide agents qui s'ouvre, en ce en utilisation.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer l'agent | Bouton pour enregistrer les modifications apportées aux agents. |
| Supprimer la commission | Bouton pour supprimer le détail des commissions sélectionnées. |






