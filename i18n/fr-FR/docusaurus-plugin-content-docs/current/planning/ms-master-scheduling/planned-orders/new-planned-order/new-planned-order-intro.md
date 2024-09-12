---
title: Nouvel ordre planifié
sidebar_position: 1
---

La fenêtre qui permet d'insérer un Nouvel ordre planifié s'ouvre à travers le parcours Planification  > MPS  >  Ordres planifiées  > Nouvel ordre planifié, ou en cliquant sur l'icône de la Ribbon Bar par la fenêtre Rechercher ordres planifiés appelés 'Insérer ordre'.

Normalement les ordres planifiés sont engendrés automatiquement par la procédure de planification générale ou par le traitement MPR, avec cette voix de menu l'utilisateur a la possibilité d'engendrer manuellement un ordre planifié, soit ce d'achat, de production ou de sous-traitant.

L'application demande, avant tout, d'insérer le Type ordre planifié, aussi se propose, dans le menu déroulant, le type prédéfini comme type par défaut. Après avoir indiqué le type ordre, l'utilisateur peut avancer à insérer, à travers l'aide ou en tapant manuellement la classe et le code, l'article à produire dans les cases. Après avoir inséré l'article à produire, l'application permet à l'utilisateur de choisir aussi la variante de l'article, et complet la fenêtre du Nouvel ordre planifié avec toutes les informations disponibles relatives à l'article. Enfin, par pouvoir enregistrer l'ordre, l'application demande l'insertion de la date finale prévue et de la quantité à produire dans les champs qui si détaillent ensuite. Après l'enregistrement, il faut appuyer le bouton 'Achèvementdonnées ordre' par voir actualisés tous les tab (Matériaux, Phases,ecc.) qui prennent les données par la nomenclature et par le cycle de travail de l'article objet d'Ordre planifié (seul si de production).

Les autres données présents dans la fenêtre de gestion sont les suivants:

**Numéro/Année**: en ces champs vient inséré par défaut l'année et le numéro de l'ordre planifié qu'on est en train de chercher, par rapport au type de numérotation lié au type ordre planifié qui a été inséré dans le champ. Ces deux données peuvent aussi être modifiés manuellement par l'utilisateur, aussi s'on déconseille;

**Type ordre**: ce menu déroulant visualise le type d'ordre planifié qu'on est en train de créer ou qui a été créée (Production, Achat, Sous-traitant). Généralement coïncide avec le type d'approvisionnement de l'article objet de l'ordre planifié;

**Ordre obligatoire**: si ce flag est actif l'ordre planifié devient d'un importance prioritaire et ne permet pas à l'utilisateur de déplacer l'ordre en établissant une date majeur respect à la date final prévue par le planification général;

**Priorité de l'ordre**: en ce menu déroulant vient établi la priorité qui vient donnée a cet ordre;

**Type commande**: en ce case vient visualisé le type de la commande de production par lequelle a été engendré l'ordre planifié. Évidemment si lui-même a été engendré manuellement, ne sera pas possible le lié à certains commande de production déjà existent et donc ce case résultera vide; 

**Engendré par le demande**: en ce champ vient visualisé 'Manuel' (s'on parle d'un ordre planifié créé manuellement), 'Employé' (s'on parle d'un ordre planifié créé par la planification et qui dépend par autres ordres planifies de niveau supérieur) ou 'Indépendant' (s'on parle d'un ordre planifié créé par la planification et qui ne dépend par par autres ordre planifié de niveau supérieur, parce que ce est déjà un niveau 1);

**Comm. Prod.**: en ces 3 champs viennent établis l'année, le numéro et la description de la commande de production par lequelle a été engendré l'ordre planifié. Évidemment si lui-même a été engendré manuellement, ne sera pas possible le lié à certains commande de production déjà existent et donc ce case résultera vide;  

**Date insertion**: il vient établie par défaut la date courant (n'éditable pas);

**Commande**: avec un double clik s'ouvre un 'aide commandes' qui permet de relier une commande de vente à l'ordre planifié qu'on est en train d'insérer;

**Dernière modification**: il vient établie la date dans lequelle a été effectuée la dernière modificaiton de l'ordre;

**Client**: en ces 3 champs viennent spécifier les relatifs données du client: 'Compte', 'Sous-compte', 'Nom du client', avec un double click sur le premier champ est possible ouvrir un 'Aide comptes' dans lequelle pouvoir sélectionner le client à lier à l'ordre;

**Cycle des structures préférentiel**: avec un double click on entre en un aide des cycles dans lequelle est possible sélectionner un cycle. En ce champ l'utilisateur a donc la possibilité de décider quelle cycle de travail de cet article doivent être prises les informations à insérer successivement dans le tab Phases de l'ordre planifié;

**Version**: le menu déroulant permet de sélectionner la 'Version', au contraire le chamo successif est relatif à l'année de référence de la version. Normalement vient établie en automatique la version par défaut;

**Début-Fin prévu travail**: ils viennent établies les dates prévues de début et fin travail. Si après avoir completé les données du cycle de travail l'utilisateur exécute une modification d'une de ces 2 dates, l'autre vient récalculée en conséquence;

**Article**: le premier menu déroulant permet d'établir la classe de l'article, avec double click sur le deuxième champ on ouvre un 'Aide articles' à travers lequelle est possible sélectionner chaque rticle de l'ordre (code et description);

**Notes**: il est un champ libre dans lequelle peuvent être insérées des notes;

**Variante**: en ce menu déroulant vient spécifiée la variante de l'article;

**Option**: en ce menu déroulant vient spécifiée l'option de l'article. Normalement vient établie en automatique l'option par défaut (Option base);

**Fournisseur/Sous-traitant**: à travers le 'Compte', 'Sous-compte' et relatif 'Nom' est possible insérer les données du relatif fournisseur/sous-traitant, en ouvrant éventuellement avec un double click le relatif help comptes. Cette case résulte active seul si l'ordre planifié est d'achat ou de sous-traitant;

**Quantité à produire**: en ce champ on spécifie la quantité de l'article qu'on doit produire. Si l'article inséré est de production, en cette case vient proposée automatiquement la quantité du lot économique de production insérée dans les paramètres MRP de l'article;

**UM de gest.**: il vient indiquée l'unité de mesure de gestion de l'article;

**Quantité d'utilisat.**: en ce champ vient établie la quantité à produire dans l'éventuel unité de mesure alternative;

**UM d'utilisat.**: il vient indiquée l'unité de mesure alternative de l'article.

Dans la partie inférieur de la fenêtre apparaissent 8 differents tab: Matériaux, Phases, Outillage, Équipements, Note des phases, Notes précodés des phases, Attributs, Commandes, qui viennent détaillés suivant:






