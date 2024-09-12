---
title: Enregistrement
---

Ce tab est formé par un en-tete et par 4 différentes grilles, la première desquelles est celle à qui l'intérieur viennent insérés les articles qui viennent mouvementés à travers l'enregistrement d'entrepôt; les autres 3 grilles viennent utilisées selon les paramétrages établis dans le registre de l'article et de la cause d'entrepôt insérée dans l'en-tete.

**En-tête enregistrement**:

L'application demande, comme première chose, d'insérer dans l'en-tête du tab Enregistrement le code de l'entrepôt sur lequel effectuer l'enregistrement. La procédure insère en automatique la date de l'enregistrement (Date enreg.) égale à la date cohérente et le numéro de l'enregistrement, qui n'est pas qu'un progressif pour l'entrepôt qui se mise à zéro chaque jour, en ripatant automatiquement par le numéro 1. Les deux données sont éditables par l'utilisateur; la date de l'enregistrement identifie dans le spécifique le jour où viennent effectués les mouvements d'entrepôt qui seront après insérés dans la grille, donc peut aussiêtre modifiée en établissant par exemple une date précédente à la date courante. Mais, cette date doit être toujours compris entre les deux dates de début et fine période insérée dans le premier tab des Paramètres initials d'entrepôt. Il faut noter qu'après l'insertion du premier article dans la grille, la date et le numéro de l'enregistrement deviennent de seule lecture.

Le deuxième et dernier donnée est obligatoire aux fins de l'insertion des mouvements d'entrepôt est la cause d'entrepôt, qu'on sélectionne en utilisant le menu déroulant, dans laquelle viennent proposées seul les causes liées à l'entrepôt élu. Après avoir inséré cette donnée, l'utilisateur peut avancer, s'il veut, à l'insertion des mouvements dans la grille articles. Toutefois existent autres données dans l'en-tete qui si peuvent compiler, et précisément:

**CDC**: en ce champ, en utilisant l'Aide centres de coût' qui s'explose avec un double click sur le même champ, est possible d'insérer le centre de coût qui doit être relié à l'entier enregistrement d'entrepôt. Il faut noter que cette opération va effectuée seul après avoir inséré au moins une ligne à l'intérieur de la grille des articles; en ce cas la procédure établira, pour chaque ligne de mouvement, le centre de coût inséré dans l'en-tête;

**Doc. int.**: en ce champ, dénommé 'Document entier', l'utilisateur peut donner une spécifique ultérieure en ce qui concerne au motif pour lequel vient créé l'enregistrement. Si l'enregistrement a été créé en automatique par l'enregistrement d'une Signalisation de production, en ce champ apparaît l'indication concernant le numéro de la signalisation et la phase pour lequel le même a été effectué;

**Version**: à travers ce menu déroulant l'utilisateur peut établir une version différente par celle par défaut, proposée de toute façon en automatique par la procédure;

**Doc. réf** **.**: en ce champ, dénommé 'Document de référence', l'utilisateur peut spécifier la raison principale pour lequel vient insérée l'enregistrement d'entrepôt. Si l'enregistrement a été créée en automatique à travers le charge ou le décharge d'un document, en ce champ vient établi automatiquement une description paramétrique du document, où apparaissent aussi la description du type de document et son numéro. Si l'enregistrement a été créée en automatique par l'enregistrement d'une Signalisation de production, en ce champ apparaitre le numéro de l'ordre de production pour lequel a été effectuée la signalisation de production. Ce champ résulte de toute façon éditable par l'utilisateur, aussi si vient rempli en automatique par l'application;

**Date doc. réf.**: en ce champ, dénommée 'Date document de référence', l'utilisateur peut spécifier une date relative au document sur la base dunquel on est en train d'insérer l'enregistrement. Si l'enregistrement a été créée en automatique à travers la Commande: avec un double click s'ouvre un 'aide commandes' qui permet de relier une commande de vente à l'entier enregistrement qu'on est en train d'insérer. Elle vient après répliquer en chacune des lignes article insérées dans la grille;

**Commande**: avec un double click s'ouvre un 'aide commandes' qui permet de relier une commande de vente à l'entier enregistrement qu'on est en train d'insérer. Elle vient après répliquer en chacune des lignes article insérées dans la grille;

**Cli/four**: en ces 3 champs viennent spécifiés les relatives données du Client ou du Fournisseur: 'compte', 'sous-compte', 'raison sociale', avec un double click sur le premier champ est possible d'ouvrir un 'Aide comptes' par lequel pouvoir sélectionner le client ou le fournisseur à lier à l'enregistrement. Si l'enregistrement a été créée en automatique à travers la charge ou le décharge d'un document, en ce champ viennent établis automatiquement les données du client ou du fournisseur titulaire du même document.

Comme déjà sur spécifié, l'utilisateur peut passer à ce point à l'insertion des mouvements dans la première grille, celle qui contiendra les articles à animer.

**Grille articles/animés**:

En cette grille l'utilisateur peut insérer, en s'autant avec l'Aide articles, la liste des articles à animer.

Les colonnes présentes dans la grille sont les suivantes:

**Classe**: en ce champ, à travers le menu déroulant, est possible de sélectionner la classe de l'article;

**Code** ** article**: en cette colonne est possible de tapper manuellement le code de l'article, ou avec un double click sur ce champ l'utilisateur a la possibilité de bénéficier de l'aide articles, qui permet de rechercher l'article sur la base d'une série de filtres de recherche;

**Variante**: à travers ce menu déroulant, l'utilisateur peut sélectionner et insérer une des variantes de l'article. Si l'article ne présent pas variantes, le menu déroulant résulte désactivé;

**Option**: en ce menu déroulant vient spécifiée l'option de l'article. Normalement vient établie en automatique l'option par défaut (option base). La donnée de l'option est de toute façon obligatoire, peine l'impossibilité d'enregistrer la ligne du mouvement;

**Description** ** options**: en cette colonne vient visualisée la description de l'option insérée;

**UM gést** **.**: en cette colonne apparaissait, en seule lecture, le code de l'unité de mesure de gestion de l'article;

**UM** ** alt.**: en cette colonne l'utilisateur peut sélectionner, à travers le menu déroulant, le code d'une des unités de mesure alternatives de l'article, si présent, aux fins d'exécuter le mouvement enimputant la quantité dans l'unité de mesure alternative sélectionne. La quantité de gestion viendrait en ce cas calculer automatiquement sur la base du facture de conversion établi dans le tab 'UM alternative' du Registre article;

**Quantité mouvement**: en cette colonne l'utilisateur doit insérer la quantité du mouvement, exprimée dans l'unité de mesure de gestion dans le cas où la colonne 'UM alt.' résulte vide; en cas contraire la quantité serait exprimée dans l'unité de mesure alternative insérée dans la colonne 'UM alt.'. Après que l'utilisateur a inséré le code de l'article et l'a fait reconnaitre comme valable à la procédure, la quantité mouvement vient insérée automatiquement comme égale à 1; à ce point l'utilisateur la peut modifier. La quantité du mouvement va toujours insérée en valeur absolue, parce que si se réfère à un mouvement de charge ou de décharge est déterminé par le type de cause utilisée;

**Quantité de gestion**: en cette colonne apparaitre, en seule lecture, la quantité exprimée dans l'unité de mesure de gestion de l'article. Elle est égale à la quantité mouvement si la colonne 'UM alt.' résulte vide; en cas contraire la colonne devient éditable et l'utilisateur doit insérer la quantité de gestion manuellement, en voyant après calculée automatiquement la quantité mouvement, qui aura donc une valeur égale à la quantité de gestion devise ou multipliée (selon établi dans les Paramètres initials d'entrepôt) pour le facteur de conversionétablit dans le tab 'UM alternative' du Registre article;

**Montant mouvement**: en cette colonne apparaitre en automatique la valeur de coût dernier, coût moyen, coût standard, ou prix de vente, selon le paramétrage de la cause d'entrepôt utilisée dans l'enregistrement. Si la cause a comme coût proposé l'indication 'Aucun', la procédure propose comme coût de l'enregistrement une valeur égale à zéro. Si la colonne 'UM alt.' résulte vide, le montant mouvement résulte toujours identique au montant de gestion; contrairement, en cette colonne il faudra insérer le montant unitaire de l'article sur la base de l'unité de mesure alternative insérée dans la ligne du mouvement. Si dans les paramètres initials d'entrepôt est activé, pour l'année courant, leflag 'Montrer info-bulle de stock en enregistrements', la procédure visualise, en une info-bulle, le stock de cet article sur l'entrepôt surqu'on est en train de créer le mouvement, exactement au moment où l'utilisateur est en train d'insérer ou de modifier la même quantité, si le stock ce n'est pas suffisant et si dans les Paramètres initials d'entrepôt est désactivé, pour l'année en cours, le flag 'Permettre stock négatif' pour cet entrepôt, la ligne de mouvement ne viendra pas enregistrée;

**Montant de gestion**: en cette colonne apparaissait en automatique la valeur de coût dernier, coût moyen, coût standard, ou prix de vente, selon le paramétrage de la cause d'entrepôt utilisée dans l'enregistrement. Si dans la cause il y a comme coût proposé l'indication 'Aucun', la procédure propose comme coût de l'enregistrement une valeur égale à zéro. Si la colonne 'UM alt.' résulte vide, le montant de gestion résulte toujours identique au montant mouvement; diversement, en cette colonne, toujours de toute façon de seule lecture, viendraient calculée la valeur unitaire du mouvement sur la base de l'unité de mesure, à travers la suivante formule: Montant mouvement * Quantité mouvement / Quantité de gestion;

**Commande vente**: en cette colonne l'utilisateur peut insérer, à travers l'aide commandes', qui s'explose avec un double click sur le champ jeune, la commande de vente qui doit être associée à la ligne du mouvement;

**Montant** ** total**: en cette colonne apparaissat, n'éditable pas, le montant total de la ligne du mouvement. Il résulte par la multiplication de la quantité de gestion pour le montant de gestion;

**Description** ** article**: en cette colonne apparaissait la description de l'article. Elle vient établie automatiquement au moment qui vient reconnu par la grille l'article inséré par l'utilisateur;

**Description variante**: en cette colonne apparaissait la description de la variante de l'article. Elle vient établie automatiquement au moment qui vient reconnu par la grille le code de la variante de l'article inséré par l'utilisateur;

**Numéro mouvement**: en cette colonne apparaissait le numéro progressif du mouvement. Il part toujours par 1 et est un simple progressif qui mise à zéro au moment qu'on ouvre un autre enregistrement d'entrepôt. Le champ est seul de lecture et ne permet pas la récupération manuelle des numéros de mouvement, dans le cas d'élimination manuelle de ligne mouvement.

En récapitulant, l'utilisateur, pour insérer un mouvement dans la grille, doit tapper le code article dans la juste colonne et en s'aidant avec l'info-bulle le faire reconnaitre à la procédure à travers le touche 'Enter', ou utiliser l''Aide articles; après il peut insérer la variante de l'article et l'éventuelle unité de mesure alternative, donc, la quantité du mouvement (ou de gestion, selon les circonstances déjà proposées dans le paragraphe), la valeur du mouvement, l'éventuelle commande de vente, enfin il peut descendre sur la ligne en dessous en enregistrant donc la ligne du mouvement.

Au moment où l'utilisateur avance à l'enregistrement de la ligne du mouvement, la procédure peut exécuter correctement l'enregistrement et rendre disponible la ligne successive pour l'insertion d'un nouveau mouvement, ou il peut imposer à l'utilisateur de compléter l'insertion à travers la charge des lots et/ou des numéros de série dans les justes grilles en dessous.

**Grille lots**:

En cette grille, active seule si la cause d'entrepôt utilisée a le flag 'Gest. lots' activé et si aussi l'article est désigné comme article géré à lots, l'utilisateur doit insérer les informations liées au lot ou aux lots à animer.

Comme on sait, l'enregistrement d'entrepôt peut être de charge ou de décharge; selon les 2 divers cas, la grille des lots a différentes utilisations et paramétrages.

1º cas: Enregistrement de charge

Au moment où l'utilisateur avance à l'enregistrement de la ligne du mouvement, la procédure laisse en 'Actualiser' la même ligne, en invitant l'utilisateur à se déplacer dans la grille Lots et à indiquer les détails des lots à charger.

Les colonnes présentes dans la grille sont les suivantes:

**Auto**: en appuyant ce bouton, qu'on trouve au début de la première ligne de la grille, la procédure exécute la création automatique du lot, sur la base du Type code lot lié au registre de l'article et sur la base du numéro de jours d'échéance insérés dans le registre;

Type code: en cette colonne vient inséré automatiquement, à la pression du bouton 'Auto', le type code lot inséré dans le registre article. Il est de toute façon modifiable par l'utilisateur;

**Type** ** lot**: en cette colonne peut être optionnelement inséré par l'utilisateur le type lot, à travers le menu déroulant, qui puise par l'homonyme tableau. Il se réfère à une donnée pas obligatoire;

**Lots** ** n.**: en cette colonne vient inséré automatiquement, à la pression du bouton 'Auto', le code du lot à charger, construi sur la base des règles établies dans les Paramètres initials d'entrepot associées au type code lot inséré. Il est de toute façon éditable par l'utilisateur, lequel pourrait donc aussi éviter d'utiliser le bouton 'Auto' et insérer manuellement le code du lot. Le champ est de couleur jeune parce que l'utilisateur, en alternative à la pression du touche 'Auto', pourrait décider d'exécuter une nouvelle charge d'un lot déjà existant dans la base de données; en ce cas avec un double click sur le champ jeune aura façon de, à travers l''Aide lots', choisir le lot à charger en filtrant entre les lots gérés jusqu'à ce moment dans la base de données et dans la société où on est en train de travailler;

**Lot fourn** **.**: en cette colonne vient inséré manuellement le code du lot fournisseur, donc normalement le prénom que le fournisseur attribue au lot. Il se réfère à un champ ne générable pas automatiquement pendant les opérations de charge et pas obligatoire. Si le Code lot vient inséré en puisant par l''Aide lots', cette colonne viendrait compilée automatiquement avec le Lot fournisseur accroché au lot élu;

**Date début**: en ce champ apparaît la même date de l'enregistrement d'entrepôt, éditable par l'utilisateur. Si le Code lot vient inséré en puisant par l''Aide lots', cette colonne viendrait compilée automatiquement avec la date de début du lot élu;

**Date éch** **.**: en ce champ apparaît la date d'échéance du lot, éditable par l'utilisateur, qui vient calculée, en partant par la date de début et en sommant les jours de validité du lot inséré dans les tab lots/NS du registre article. Si le Code lot vient inséré en puisant par l''Aide lots', cette colonne viendrait compilée automatiquement avec la date d'échéance du lot élu;

**Quantité**: en ce champ apparaît la quantité qu'on veut attribuer au lot inséré. Dans le cas de création du lot à travers la pression du touche 'Auto', la quantité vient remplie automatiquement avec la quantité contenue dans la ligne du mouvement; elle est mais éditable par l'utilisateur; lequel pourrait donc décider de modifier la quantité, en la diminuant, et en exécutant après une ultérieure pression sur le touche 'Auto' mais sur la ligne en dessous: en telle façon créerait un nouveau lot, avec caractéristiques semblables au lot déjà inséré mais avec Code lot différent;

**Fermé**: le flag 'Fermé', s'activé, indique que le lot a été complètement déchargé par l'entrepôt. Normalement, dans le cas de charge du lot le flag résulté toujours désactivé;

**L** **. vend.**: le flag 'Lot vendable', s'active, souligne que le lot est disponible pour être retiré à l'intérieur des documents de vente, de production ou dans les enregistrements d'entrepôt. Il se réfère à une possibilité qui a l'utilisateur pour définir la possibilité de retirer ou non un lot, en alternative à la gestion, davantage complexe estarticulé, des états lot. Donc dans le cas de charge automatique du lot, le flag résulte actif par défaut, aussi si l'utilisateur peut décider déjà en cette phase de le désactiver, en rendant donc déjà indisponible le même lot;

**Description**: en ce champ l'utilisateur peut insérer une note relative au lot qu'on est en train de charger. Si le Code lot vient inséré en puisant par l''Aide lots', cette colonne viendrait compilée automatiquement avec la note liée au lot élu;

Après avoir complété l'insertion des lots dans la grille 'Lots', en faisant en façon que la quantité de la ligne du mouvement est égale à la somma des quantités des lots chargés, l'utilisateur peut s'occuper à enregistrer la ligne du mouvement sans plus recevoir messages d'erreur par la procédure.

2º cas: Enregistrement de décharge:

Au moment où l'utilisateur avance à l'enregistrement de la ligne du mouvement, la procédure laisse en 'Actualiser' la même ligne, en invitant l'utilisateur à se déplacer dans la grille Lots et à indiquer les détails des lots à décharger.

Les colonnes présentes dans la grille sont les suivantes:

**Lots** ** n.**: en cette colonne avec un double click sur le champ jeune l'utilisateur à la façon de, à travers l''Aide lots', de choisir le lot à décharger en le filtrant entre les lots disponibles dans l'entrepot de l'enregistrement;

**Lot fourn** **.**: en cette colonne vient compilée automatiquement avec le Lot fournisseur accroché au lot élu;

Date début: en ce champ apparaît la date de début du lot élu;

**Date éch** **.**: en ce champ apparaît la date d'échéance du lot élu;

**Quantité**: en ce champ apparaît la quantité qu'on veut décharger du lot élu. Elle est éditable par l'utilisateur, lequel pourrait donc décider de modifier la quantité, en la diminuant, et en exécutant après une ultérieure recherche à travers l'aide lots mais sur la ligne en dessous;

**Emplacements**: en ce champ vient visualisée l'emplacement où est chargé le lot élu.

Après avoir complété l'insertion des lots à décharger dans la grille 'Lots', en faisant en façon que la quantité de la ligne du mouvement est égale à la somme des quantités des lots déchargés, l'utilisateur peut d'occuper à enregistrer la ligne du mouvement sans plus recevoir messages d'erreur par la procédure.

**Grille numéros de série**:

En cette grille, active seule si la cause d'entrepôt utilisée a le flag 'Gest. lots' activé et si aussi l'article est désigné comme articlegéré à Numéros de série, l'utilisateur doit insérer les informations liées aux Numéros de série à animer.

Comme on sait, l'enregistrement d'entrepôt peut être de charge ou de décharge; selon les 2 divers cas, la grille Numéros de série à différentes utilisations et paramétrages.

1º cas: Enregistrement de charge

Au moment où l'utilisateur avance à l'enregistrement de la ligne du mouvement, la procédure laisse en 'Actualiser' la même ligne, en invitant l'utilisateur à se déplacer dans la grille Numéros de série et à indiquer les détails des Numéros de série à charger.

Les colonnes présentes dans la grille sont les suivantes:

**Auto**: en appuyant ce bouton, que se trouve au début de la première ligne de la grille, la procédure exécute la création automatique du numéro de série, sur la base du type code NS lié au registre de l'article et sur la base du numéro de jours d'échéance insérées toujours en registre. Il vient créé mais seul le premier numéro de série; dans la grille devra être inséré un numéro de lignes égales à la quantité insérée dans la ligne du mouvement. Donc, par exemple, si la ligne mouvement présente une quantité de 30 pièces, dans la grille des numéros de série devront être insérés 30 numéros de série, un pour chacune ligne de la grille. Le système plus rapide pour créer automatiquement les numéros de série en cette grille est-ce d'exploiter le champ extérieur à la grille appellé 'Proposition automatique du Numéro de série', où est possible d'établir le premier des numéros de série qu'on veut charger et après est possible de cliquer sur le touche 'Proposer NS', qui prévoit, en partant par le premier numéro de série, à créer tous les autres numéros de série demandés par la quantité de la ligne du mouvement; les numéros de série viendront créés en progressif en partant par le premier inséré;

**Types NS**: en cette colonne vient inséré automatiquement, à la pression du bouton 'Auto', le type code NS inséré dans le registre article. Il est de toute façon modifiable par l'utilisateur;

**Numéro de série**: en cette colonne vient inséré automatiquement, à la pression du bouton 'Auto', le code du NS à charger, construit sur la base des règles établies dans les Paramètres initials d'entrepôts associés au type code NS inséré. Il est de toute façon éditable par l'utilisateur.

Après avoir complété l'insertion des lots dans la grille 'Numéros de série', en faisant en façon que la quantité de la ligne du mouvement est égale au numéro des numéros de série insérés dans la grille, l'utilisateur peut s'occuper à enregistrer la ligne du mouvement sans plus recevoir messages d'erreur par la procédure.

2º cas: Enregistrement de décharge

Au moment où l'utilisateur avance à l'enregistrement de la ligne du mouvement, la procédure laisse en 'Actualiser' la même ligne, en invitant l'utilisateur à se déplacer dans la grille numéros de série et à indiquer les détails des numéros de série à décharger.

Les colonnes présentes dans la grille sont les suivantes:

**N** **.**: en cette colonne vient visualisé simplement le numéro de la ligne; il se réfère à un progressif engendré automatiquement;

**Numéro de série**: en cette colonne l'utilisateur doit insérer, à travers un double click sur le champ jeune, les numéros de série à décharger, en puisant par l''Aide numéros de série';

Après avoir complété l'insertion des lots à décharger dans la grille 'Numéros de série', en faisant en façon que la quantité de la ligne du mouvement est égale au numéro des numéros de série insérés dans la grille, l'utilisateur peut s'occuper à enregistrer la ligne du mouvement sans plus recevoir messages d'erreur par la procédure. 

**Grille variantes**:

En cette grille l'utilisateur peut gérer le mouvementation de l'article avec variantes en utilisant la possibilité d'exploiter la présence d'un 'Attribut' par défaut, qui vient insérer dans le tab 'Attributs' du registre article. En établissant en effet l'attribut par défaut dans le menu déroulant qui apparaît à peine sur la grille, l'utilisateur peut facilement lier à la même ligne mouvement plusieurs quantités di différentes variantes du même article, en permettant donc à la procédure d'exécuter automatiquement la somme des quantités des chaque lignes de variantes insérées et de la ramener dans la quantité de gestion de la ligne mouvement.

La grille est formée simplement par une colonne où est possible de sélectionner la variante de l'article et une colonne où on doit insérer la quantité pour celle variante. La grille est utilisable seul si dans le registre article est présent un attribut par défaut.

La modalité d'insertion des données à l'intérieur de cette grille ne change pas en relation toujours est-il que se réfère à un enregistrement de charge ou de décharge.

**Grille centres de coût de chaque mouvement**:

En cette grille l'utilisateur peut accrocher à la ligne mouvement un ou plusieurs centres de coût, en attribuant donc différentes quantités du mouvement à différents centres de coût.

La grille est formée par une colonne où apparaît un champ de couleur jeune, sur lequel l'utilisateur peut, en exercitant un double click, ouvrir l''Aide centres de coût', à travers lequel est possible d'insérer le centre de coût dans la ligne de la grille, en complétant après la ligne avec la quantité à qui ce centre de coût doit être référé. Si la somma des quantités insérées dans les lignes de la grille des centres de coût est différente par la quantité de gestion de la ligne mouvement, la procédure donne un avis et empêche d'enregistrer le mouvement.

Il faut noter que si après avoir inséré les centres de coût sur chaque mouvement de l'enregistrement l'utilisateur établie le centre de coût dans l'en-tete de la même, tous les centres de coût insérés dans chaque ligne mouvements viennent remplacés parceux de l'en-tête.






