---
title: Modifier lot
sidebar_position: 4
---

Cette fenêtre visualise le détail du lot et se compose par 4 diverses sections: une première section où on trouve les données générales de l'en-tête du même lot et autres 3 sections appellée 'Documents de charge', 'Quantité et document pour le décharge du lot', 'Documents de décharge'.

**Section 1 - En-tête lot**:

En cette section ils viennent visualiser, avec possibilité de modifier certains, les données principales relatives au lot et en particulier:

**Article**: dans les 3 champs relatifs ils viennent visualisés la classe, code et description de l'article à qui on est référé le lot. Il se réfère à un article avec le flag 'Gestion lots' activé dans le tab Lots/SN du registre article, autrement il n'aurait pas été possible d'exécuter le charge du lot pour le même article;

**Variante**: dans les 2 champs relatifs viennent visualisés le code et la description de la variante de l'article à qui est référé le lot, si présent;

**Lot n.**: en ce champ apparaitre le Code du lot. Il se réfère à un champ éditable par l'utilisateur, malgré pendant les opérations de charge il est possible d'engendré automatiquement sur la base de certaines règles qui viennent établies dans le tab 'Codes lot' présent dans les paramètres initials d'entrepôt. S'on insère abord de tout un code lot à peine créé. Pour chaque paramètre utilisé est possible de décider par combien de caractères doit être formé etéventuellement aussi le caractère de remplissage le '0' et comme longueur 5 viendra créés lots avec premier numéro 00000, après 00001, après 0002 et ainsi de suite. Le type code lot doit être accroché au registre dans le champ situé dans le tab 'Lots/NS', en façon telle que dans les procédures qui créent automatiquement le code lot pour l'article en question le même lot vient engendré selon les règles établies dans le tab 'Codes lot' des paramètres initial d'entrepôt et liées au type code lot accroché à l'article. Le champ est alphanumérique et peut obtenir la longueur de 50 caractères comme limite maximale. Il ne se réfère pas au coordonné du lot, parce qu'il est possible d'effectuer plusieurs charges en divers mouvements du même lot; en ce cas apparaissent plusieurs lignes avec le même Code lot à l'intérieur de la ligne de Rechercher lots;

**Lot fournisseur**: en ce champ apparaissait le code du lot fournisseur, donc d'habitude le prénom que le fournisseur attribue au lot. Il se réfère d'un champ éditable par l'utilisateur et ne générable pas automatiquement pendant les opérations de charge. Aussi il peut atteindre la longueur de 50 caractères comme limite maximale et peut-être aussi pour les lots divers d'articles divers;

**Date début validité**: en ce champ apparaissait normalement la date où a été chargé le lot, éditable par l'utilisateur. Si le lot a été chargé à travers l'enregistrement d'entrepôt, cette date vient proposée égale à la date où a été créée l'enregistrement; si le lot a été chargé à travers la charge d'un bon de livraison d'achat ou enregistrement rentré de sous-traitant, cette date vient établie comme égale à la date du bon de livraison d'achat ou de sous-traitant (sauf qu'à l'intérieur du bon de livraison l'utilisateur n'ait pas modifié manuellement); si le lot a été déchargé à travers enregistrement d'une signalisation de production, cette date vient proposée comme égale à la date de la signalisation de production;

**Date échéance**: en ce champ apparaissait la date d'échéance du lot, éditable par l'utilisateur, qui vient calculée, en siège de création du lot et donc de charge du relatif mouvement d'entrepôt, en partant par la date de début et en sommant les jours de validité du lot insérés dans le tab lots/NS du registre article;

**Quantité**: en ce champ apparaissait la quantité initiale chargée pour le lot à travers le premier document qui a chargé le même lot;

**Entrepôt**: en ces 2 champs apparaissent le code et la description de l'entrepôt sur lequel a été chargé le lot;

**Comm** **/année**: en ce champ apparaissait la commande de vente, éditable par l'utilisateur, lié au lot. Normalement il se réfère à la commande de vente accrochée à la ligne de l'article qui a été chargée et qui a chargé le même lot;

**Notes**: en ce champ apparaissent les notes insérées dans l'enregistrement d'entrepôt contextuellement au charge du lot. Le champ est éditable par l'utilisateur et visualisable aussi dans Rechercher lots, comme sur spécifié;

**Fermé**: le flag 'Fermé', s'activé, va a indiquer que le lot a été complement déchargé par l'entrepôt. Il faut noter qu'après la clôture de l'entrepôt tous les lots restants de l'année qu'on est en train de fermer viennent automatiquement établis comme 'Fermés', parce qu'ils viennent rechargés, sur le stock initial de la nouvelle année, les lots 'jumelles' avec les quantité restantes à la fin de l'année précédant la clôture;

**État lot**: le menu déroulant visualise l'état du lot. Il est modifiable par l'utilisateur et se réfère aux données provenants par le tableau 'État lot'. L'état du lot détermine la possibilité d'utiliser ou non le lot dans les documents de vente, de production et dans les enregistrements de décharge d'entrepôt. Il se réfère de toute façon à une gestion ne contraignante pas, l'utilisateur n'est pas donc obligé à exploiter la fonctionnalité du tableau 'États lot';

**Évaluation** ** lot**: le menu déroulant visualise la donnée relative à l'évaluation du lot. Il est modifiable par l'utilisateur et se réfère aux données provenant par le tableau 'Évaluation lot'. Cette donnée a fonctions purement descriptives, sans avoir donc aucune influence particulière dure les procédures et fenêtres d'Ideale, en résultant donc aussi facultatif;

**L** **. vend.**: le flag 'Lot vendable', s'active, souligne que le lot est disponible pour être retiré à l'intérieur des documents de vente, de production ou dans les enregistrements d'entrepôt. Il se réfère à une possibilité qui a l'utilisateur pour définir la possibilité de retirer ou non un lot, en alternative à la gestion, plus complexe et articulée, des états lot;

**Section 2 - Documents de charge**:

En cette section ils viennent visualisés les données fondamentales des documents qui ont contribué à effectuer le charge du lot. Généralement apparaitre toujours le détail de l'enregistrement d'entrepôt qui a chargé le lot; si cet a été engendrée à travers la charge d'un document (bon de livraison, rentrée, ecc.), alors apparaitre une ligne où quittent les détails aussi de ce document. Ces données sont visualisées en une grille où apparaissent les suivantes colonnes:

**Document**: en ce champ il vient visualisé le type de document qui a engendré le charge du lot. Il peut être un enregistrement d'entrepôt, un bon de livraison d'achat ou une rentrée de sous-traitant;

**Numéro**: en ce champ il vient visualisé le numéro du document;

**Date**: en ce champ il vient visualisée la date du document;

Il faut noter qu'avec un simple double click sur la ligne du document est possible, en accord avec tous les droits de l'utilisateur, d'ouvrir en seule visualisation le document relatif.

**Section 3 - Quantité et document pour le déchargé du lot**:

En cette section ils viennent visualisés les données fondamentales du premier document, en ordre chronologique, qui a utilisé le lot. Si le lot a été déchargé directement à travers un enregistrement d'entrepôt, alors en cette grille n'apparaitre pas rien, parce que l'enregistrement d'entrepôt de décharge du lot apparaissait toujours dans la section 4. Ces données sont visualisées en une grille où apparaissent les suivantes colonnes:

**Quantité**: en ce champ il vient visualisée la quantité du lot qui a été utilisée dans le document;

**Document**: en ce champ il vient visualisé le type de document qui a pour premier utilisé le lot. Il peut être un ordre de production, une commande client, un bon de livraison de vente, une facture de vente, une liste de prélèvement, un bon de livraison de sous-traitant, une rentrée de sous-traitant;

**Numéro**: en ce champ il vient visualisé le numéro du document;

**Date**: en ce champ il vient visualisée la date du document;

**Date**: en ce champ il vient visualisée la date du document;

Il faut noter qu'avec un simple double click sur la ligne du document est possible, en accord avec tous les droits de l'utilisateur, d'ouvrir en seule visualisation le document relatif.

**Section4 - Documents de déchargé**:

En cette section ils viennent visualisés les données fondamentales de l'enregistrement d'entrepôt qui a déchargé le lot et des autres éventuels documents où le lot a été utilisé, en relation au document sélectionné dans la grille de la section 3. Ces données sont visualisées en une grille où apparaissent les suivantes colonnes:

**Document**: en ce champ il vient visualisé le type de document à l'intérieur duquel est present le lot, en rélation au document sélectionné dans la grille de la section 3. Il peut être un bon de livraison de vente, une facture de vente, une liste de prélèvement, un bon de livraison de sous-traitant, une rentrée de sous-traitant;

**Numéro**: en ce champ il vient visualisé le numéro du document;

**Date**: en ce champ il vient visualisée la date du document;

Il faut noter qu'avec un simple double click sur la ligne du document est possible, en accord avec tous les droits de l'utilisateur, d'ouvrir en seule visualisation le document relatif.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton qui enregistre les modifications apportées aux données du lot. |
| Visualise les attributs de lot | Il ouvre une ultérieure fenêtre à l'intérieur duquel l'utilisateur peut assigner au lot une série d'attributs, en attigeant aux tableaux de l'Encodeur. |






