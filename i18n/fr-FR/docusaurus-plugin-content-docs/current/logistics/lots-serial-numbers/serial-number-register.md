---
title: Modifier le numéro de série
sidebar_position: 5
---

Cette fenêtre visualise le détail du lot et se compose par 4 diverses sections: une première section où on trouve les données générales de l'en-tête du même lot et autres 3 sections appellée 'Documents de charge', 'Quantité et document pour le décharge du numéro de série', 'Documents de décharge'.

**Section 1 - En-tête lot**:

En cette section ils viennent visualiser, avec possibilité de modifier certains, les données principales relatives au lot et en particulier:

**Article**: dans les 3 champs relatifs viennent visualisés la classe, code et description de l'article à qui on est référé le numéro de série. Il se réfère à un article avec le flag 'Gestion NS' activé dans le tab Lots/SN du registre article, autrement il n'aurait pas été possible d'exécuter le charge du lot pour le même article;

**Variante**: dans les 2 champs relatifs viennent visualisés le code et la description de la variante de l'article à qui est référé le Numéro de série, si présent;

**Numéro de série**: en ce champ apparaitre le Code du numéro de série. Il se réfère à un champ éditable par l'utilisateur, malgré pendant les opérations de charge est possible d'engendrer automatiquement sur la base de certaines règles qui viennent établies dans le tab 'Codes numéro de série' présent dans les paramètres initials d'entrepôt. Il s''insère abord de tout un code et une description du type code numéro de série, s'enregistre la ligne et on décide quels paramètres on veut utiliser pour la combinaison du type code lot à peine créé. Pour chaque paramètre utilisé est possible de décider par combien de caractères doit être formé etéventuellement aussi le caractère de remplissage le '0' et comme longueur 5 viendra créés numéro de série avec premier numéro 00000, après 00001, après 0002 et ainsi de suite. Le type code numéros de série doit être accroché au registre dans le champ situé dans le tab 'Lots/NS', en façon telle que dans les procédures qui créent automatiquement le code numéro de série pour l'article en question le même numéro de série vient engendré selon les règles établies dans le tab 'Codes numéro de série' des paramètres initial d'entrepôt et liées au type code numérro de série accroché à l'article. Le champ est alphanumérique et peut obtenir la longueur de 50 caractères comme limite maximale;

**Code lot**: en ce champ apparaît le code du lot de qui fait partie le numéro de série. L'article auquel est référé le numéro de série pourrait en effet être géré aussi à lots; donc en ce cas un lot de 100 pièces, p.ex. pourrait être composé de 100 divers numéros de série. Le même numéro de série pourrait en outre appartenir à lots divers du même article, ou à lots des articles divers;

**Entrepôt**: en ces 2 champs apparaissent le code et la description de l'entrepôt sur lequel a été chargé le numéro de série;

**Charg./Déchar.**: en ces deux champs apparaissent les informations qui se référent à l'état du numéro de série, à qu'on a déjà parlé dans le paragraphe relatif à la grille de résultat de Recherche le numéro de série;

**Date début**: en ce champ apparaissait normalement la date où a été chargé le numéro de série, éditable par l'utilisateur. Si le numéro de série a été chargé à travers l'enregistrement d'entrepôt, cette date vient proposée égale à la date où a été créée l'enregistrement; si le numéro de série a été chargé à travers la charge d'un bon de livraison d'achat ou enregistrement rentré de sous-traitant, cette date vient établie comme égale à la date du bon de livraison d'achat ou de sous-traitant (sauf qu'à l'intérieur du bon de livraison l'utilisateur n'ait pas modifié manuellement); si le numéro de série a été déchargé à travers enregistrement d'une signalisation de production, cette date vient proposée comme égale à la date de la signalisation de production;

**Date final**: en ce champ apparaissait la date d'échéance du numéro de série, éditable par l'utilisateur, qui vient calculée, en siège de création du lot et donc de charge du relatif mouvement d'entrepôt, en partant par la date de début et en sommant les jours de validité du numéro de série insérés dans le tab lots/NS du registre article;

**Charge enreg. entr.**: en ce champ apparaît en entier l'information quiregarde l'enregistrement d'entrepôt qui a chargé le numéro de série.

**Section 2 - Documents de charge**:

En cette section ils viennent visualisés les données fondamentales des documents qui ont contribué à effectuer le charge du numéro de série. Généralement apparaitre toujours le détail de l'enregistrement d'entrepôt qui a chargé le numéro de série; si cet a été engendrée à travers la charge d'un document (bon de livraison, rentrée, ecc.), alors apparaitre une ligne où quittent les détails aussi de ce document. Ces données sont visualisées en une grille où apparaissent les suivantes colonnes:

**Document**: en ce champ il vient visualisé le type de document qui a engendré le charge du numéro de série. Il peut être un enregistrement d'entrepôt, un bon de livraison d'achat ou une rentrée de sous-traitant;

**Numéro**: en ce champ il vient visualisé le numéro du document;

**Date**: en ce champ il vient visualisée la date du document;

Il faut noter qu'avec un simple double click sur la ligne du document est possible, en accord avec tous les droits de l'utilisateur, d'ouvrir en seule visualisation le document relatif.

**Section 3 - Quantité et document pour le décharge du lot**:

En cette section ils viennent visualisés les données fondamentales du premier document, en ordre chronologique, qui a utilisé le numéro de série. Si le numéro de série a été déchargé directement à travers un enregistrement d'entrepôt, alors en cette grille n'apparaitre pas rien, parce que l'enregistrement d'entrepôt de décharge du numéro de série apparaissait toujours dans la section 4. Ces données sont visualisées en une grille où apparaissent les suivantes colonnes:

**Quantité**: en ce champ il vient visualisée la quantité du lot qui a été utilisée dans le document;

**Type document**: en ce champ il vient visualisé le type de document qui a pour premier utilisé le numéro de série. Il peut être un ordre de production, une commande client, un bon de livraison de vente, une facture de vente, une liste de prélèvement, un bon de livraison de sous-traitant, une rentrée de sous-traitant;

**Numéro**: en ce champ il vient visualisé le numéro du document;

**Date**: en ce champ il vient visualisée la date du document;

Il faut noter qu'avec un simple double click sur la ligne du document est possible, en accord avec tous les droits de l'utilisateur, d'ouvrir en seule visualisation le document relatif.

**Section 4 - Documents de décharge**:

En cette section ils viennent visualisés les données fondamentales de l'enregistrement d'entrepôt qui a déchargé le numéro de série et des autres éventuels documents où le numéro de série a été utilisé, en relation au document sélectionné dans la grille de la section 3. Ces données sont visualisées en une grille où apparaissent les suivantes colonnes:

**Document**: en ce champ il vient visualisé le type de document à l'intérieur duquel est present le numéro de série, en rélation au document sélectionné dans la grille de la section 3. Il peut être un bon de livraison de vente, une facture de vente, une liste de prélèvement, un bon de livraison de sous-traitant, une rentrée de sous-traitant;

**Numéro**: en ce champ il vient visualisé le numéro du document;

**Date**: en ce champ il vient visualisée la date du document;

Il faut noter qu'avec un simple double click sur la ligne du document est possible, en accord avec tous les droits de l'utilisateur, d'ouvrir en seule visualisation le document relatif.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton qu'enregistre les modifications apportées aux données du numéro de série. |






