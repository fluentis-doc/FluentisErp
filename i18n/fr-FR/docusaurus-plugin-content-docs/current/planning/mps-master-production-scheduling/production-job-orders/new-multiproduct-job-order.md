---
title: Nouvelle commande multi-produit
sidebar_position: 4
---

La fenêtre qui permet d'insérer une Nouvelle commande multiproduit s'ouvre à travers le parcours Planification  > Commandes > Nouvelle commande multi-produit ou en appuyant sur l'icône de la Ribbon de la fenêtre Commandes appelée 'Nouvelle commande multi-produit'.

L'application demande, tout d'abord, d'insérer le Type commande de production, aussi se propose, dans le menu déroulant, le type prédéfini comme type par défaut. Après avoir indiqué le type commande, l'utilisateur doit enregistrer l'en-tête de la commande multiproduit et après, on peut avancer à insérer, à travers l'aide ou en tapant manuellement la classe et le code, l'article à produire dans la grille. Après avoir inséré l'article à produire, l'application permet à l'utilisateur de choisir aussi la variante de l'article, d'insérer la quantité à produire et la date finale prévue de la commande; donc vient complétée automatiquement la première ligne de la grille Nouvelle commande multiproduit avec la description de l'article, le type d'approvisionnement de la ligne de commande (qui vient repris par le type d'approvisionnement de l'article et peut-être de production, d'achat ou de sous-traitant), l'état de la commande, l'unité de mesure de l'article, la quantité produite et la date de début prévue.

Les données présentes dans la fenêtre de l'en-tête de la commande multiproduit sont les suivants:

**Année/Numéro**: en ce champ vient inséré par défaut l'année et le numéro de la commande qui est en train de créer, en rélation au type de numérotaiton lié au type commande qui a été inséré dans le champ. Ces deux données peuvent aussi être modifiés manuellement par l'utilisateur;

**État**: en ce champ est possible de visualiser, et éventuellement modifier l'état de la Commande de production multi-produit. L'état de la commande peut être:

**N'examinée pas**: il se réfère à l'état par lequel vient créée la commande, donc signifie qui a été à peine insérée ou créée;

**Planifiée**: la commande avance en cet état après avoir au moins une ligne de commande qui a subi le procès de Planification générale;

**Lancée**: la commande avance en cet état après qu'au moins un des ordres planifiés de production ou d'achat engendrée par elle, pendant la Planification général, ont été relâchés;

**Exécutive**: la commande avance en cet état après qu'au moins un des ordres de production engendrée par elle, a été relâché ou après qu'au moins un des ordres planifiés de sous-traitant engéndrée par elle a été relâché ou enfin après qu'au moins une des lignes de Demande d'achat engéndrée par elle a été transformée en ligne de commande fournisseur;

**Exécutée**: la commande avance en cet état après que l'ordre de production engendré par l'article objet de la commande a été avancé en état 'Exécuté';

**Historicisée**: la commande avance en cet état manuellement par éviter d'effectuer une recherche des commandes Exécutées;

**Obligatoire (flag)**: il se réfère à un flag seul descritif, qui permet à l'utilisateur d'indiquer si cette commande soit d'importance fondamental ou non;

**Priorité**: à travers le menu déroulant est possible établir la priorité de la commande. Aussi ce donnée est simplement informatif;

**Approvisionnement**: ce menu déroulant visualise le type de Commande de production qu'on est en train de créer ou qui a été créée (production, achat, sous-traitant). Généralment coïncide avec le type d'approvisionnement de l'article objet de la même Commande multi-produit;

**Date d'insertion/Dernière modification**: en ces champs, n'éditables pas, paraît la date d'insertion de la commande et sous la date de la dernière modification;

**Date de travail prévue Début/Fin**: en ces champs paraissent les dates de prévu Début/Fin de la Commande de production, en considérant comme date de début, la date plus ancienne entre celles de toutes les lignes de commande et comme date fin, la date plus loin entre celles de toutes les lignes de commande;

**Date de travail d'effective Dèbut/Fin**: en ces champs paraissent les dates de Début/Fin de travail effectif, c'est-à-dire respectivement la date de la première signalisation de production d'un ordre de production engendré par la commande et la date de la denière signalisation de production qui a provoqué la clôture définitive de l'ordre de production où l'article est le même de la Commande de production. Enfin, la date d'effectif fin est présent seul si la commande se trouve dans l'état 'Exécutée';

**Description**: en ce champ est possible de tapper manuellement une description de la Commande de production. Se réfère à un champ n'obligatoire pas et absolument descriptif;

**Commande**: en ce champ vient visualisé le lien avec la Commande de vente, si présent. L'utilisateur peut visualiser ce champ par accrocher manuellement la Commande de Production à une en-tête ou à une ligne d'une Commande de vente existent;

**Client**: en ces 3 champs viennent spécifiés les relatifs données du Client: 'Compte', 'Sous-compte', 'Raison sociale du client', avec un double click sur le premier champ est possible ouvrir un 'Aide comptes' par laquelle pouvoir sélectionner le client en cause. Si la Commande de production multi-produit a été engendrée à travers le regroupement de plus lignes commande client du même client, en ce champ parait le client à qui a été donnée un titre la commande client dans laquelle sont contenues les lignes de l'ordre, autrement le champ paraite vide. Est possible de toute façon éditer manuellement par l'utilisateur;

**Notes**: en ce champ est possible d'insérer manuellement une note relative à la Commande de production;

**Lieu prod.**: en ce champ est possible de spécifier quelle lieu productif doit être considérer par la planification de l'article présent dans la Commande de production;

Les champs présents dans la grille des articles de la  Commande multi-produit sont les suivants:

**Type approvisionnement**: ce menu déroulant visualise le type de ligne de Commande de production qu'on est en train de créer ou qui a été créée (production, achat, sous-traitant). En général, coincide avec le type d'approvisionnement de l'article objet de la Commande de production;

**État**: en ce champ est possible de visualiser, et éventuellement modifier, l'état de la ligne de Commande de production. L'état de la ligne de commande peut être:

**N'examinée pas**: se réfère à l'état par lequelle la commande est créée, donc signifie qu'a été insérée ou créée au moment;

**Planifiée**: la commande avance en cet état après avoir au moins une ligne de commande qui a subi le procès de Planification général;

**Lancée**: la commande avance en cet état après qu'au moins un des ordres planifiés de production ou d'achat engendrée par elle, pendant la Planification général, ont été relâchés;

**Exécutive**: la commande avance en cet état après qu'au moins un des ordres de production engendrée par elle, a été relâché ou après qu'au moins un des ordres planifiés de sous-traitant engéndrée par elle a été relâché ou enfin après qu'au moins une des lignes de Demande d'achat engéndrée par elle a été transformée en ligne de commande fournisseur;

**Exécutée**: la commande avance en cet état après que l'ordre de production engendré par l'article objet de la commande a été avancé en état 'Exécuté';

**Historicisée**: la commande avance en cet état manuellement par éviter d'effectuer une recherche des commandes Exécutées;

**Annulée**: la commande peut être mise en cet état manuellement plutôt que la supprimer du tout, par indiquer que la commande, initiallement prévue, n'est pas été portée en production;

**Prog.**: en ce champ, éditable par l'utilisateur, vient proposé un progressif de ligne de la Commande de production multi-produit;

**Cycle**: en ce champ est possible de spécifier quelle soit le numéro de cycle de travail qui doit être considéré par la planification de l'article présent en commande;

**Classe**: en cette colonne est possible de spécifier la classe de l'article à insérer dans la ligne de commande;

**Code article**: en cette colonne est possible d'insérer manuellement le code de l'article à produire, ou avec un double click sur la case jaune est possible accéder à l''aide articles' par povoir insérer le code de l'article; la description de l'article vient insérée en conséquence en manière automatique;

**Variante**: avec ce menu déroulant est possible de sélectionner la variante de l'article;

**Option**: en ce menu déroulant vient visualisé le choix qui doit être utilisée par la planification de l'article présent dans la commande;

**UM utils.**: en cette colonne on insére l'unité de mesure alternative précodée par cet article qui doit être considérée;

**Quantité utilisation à produire**: en ce champ on insére la quantité à produire dans l'unité de mesure alternative de l'article. Si l'article n'a aucun unité de mesure alternative, ou s'on veut insérer la quantité à produire dans l'unité de mesure de gestion, on insère simplement la quantité à produire sans actualiser le champ 'UM utils.'. Enfin, on rappele qui en case d'insertion manuel de la ligne de Commande de production, l'utilisateur doit insérer ce donnée manuellement, ceci porte l'impossibilité d'enregistrer la ligne de commande;

**UM**: en cette colonne on visualise l'unité de mesure de gestion de l'article;

**Quantité de gest. à produire**: en ce champ on insére la quantité à produire dans l'unité de mesure de gestion. Le champ 'Quantité de gest. à produire' vient actualisé automatiquement en insérant la quantité à produire dans le champ avec le point 'j';

**Quantité produite**: en ce champ on visualise la quantité déjà produite dans l'unité de mesure de gestion de l'article;

**Date début prévue**: en cette colonne paraït la date de prévue début de la ligne de Commande de production. Jusqu'à ce que la Commande de production rest en état 'N'examinée pas', cette date est égal à la date de prévue fin et à la date de marchandise prête de la ligne de Commande client par laquelle la ligne de commande a été engendrée, ou égal à la date de début de la Prévision de vente par laquelle la ligne de commande a été engendrée. Après que la ligne de Commande de production a été planifiée, la date de prévue début de la commande coïncide avec la date de prévue fin du premier ordre planifié qui vient engedré par la planification de la ligne de commande;

**Date fin prévue**: en cette colonne paraït la date de prévue fin de la ligne de Commande de production. Jusqu'à ce que la Commande de production rest en état 'N'examinée pas', cette date est égal à la date de prévue début et à la date de marchandise prêt de la ligne de Commande client par laquelle la ligne de commande a été engendrée. Après que la ligne de Commande de production a été planifiée, la date de prévue fin de la commande coïncide avec la date de prévue fin du premier ordre planifié qui vient engedré par la planification de la ligne de commande. Enfin, on rappele que en cas d'insertion manuel de la ligne de Commande de production, l'utilisateur doit insérer ce donnée manuellement, ceci porte à l'impossibilité d'enregistrer la ligne de commande;

**Date suggérée**: en cette colonne paraït la dete que le système a suggéré dans le cas où l'utilisateur a planifié la ligne de commande en utilisant le paramètre 'Contôler les documents en retard avec ATP' et en ayant établi, toujours dans les paramètres de Planification general, une 'Date début MS (Master Scheduling)'. La date suggérée est celle que l'utilisateur aura la facolté de décider qui devient la date de prévu fin de la ligne de commande;

**Date début prévision**: en cette colonne paraït  la date de début Prévision de vente opérative par laquelle a été engendrée la ligne de Commande de production;

**Commande**: en ce champ vient visualisé le lien avec la Commande de vente, se présent. L'utilisateur peut utiliser ce champ par accrocher manuellement la ligne de Commande de production à un en-tête ou à une ligne d'une Commande de vente existant;

**Année**: en cette colonne on visualise l'année de la commande de vente éventuellement lié dans le champ du point précédent;

**Client compte/Client sous-compte/Description Clinet**: en ces 3 champs viennent spécifiés les relatifs données du client: 'compte', 'sous-compte', 'raison sociale du client', avec un double click sur le premier ou deuxième champ est possible ouvrir un 'Aide comptes' par laquelle pouvoir sélectionner le client en cause. Si la ligne de Commande de production a été engendrée par une ligne d'un Commande client, en ce champ paraït le client mise au nom la Commande client où il y a celle ligne:

**Description article**: en cette colonne paraït la description de l'article objet de la ligne de Commande de production.

Dans la partie inférieur de la fenêtre paraissent 3 divers tab: Attributs commande, référence commandes clients et variantes, qui si réfèrent à la ligne de commande sélectionnée dans la grille et qui ont été détaillés dans la section du présent document dédié à la 'Nouvelle commande mono-produit'.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton par enregistrer les modifications sur la Commande de production. |
| Insérer la commande multi-produit | Il se réfère à la procédure pour insérer une nouvelle Commande de production muti-produit: l'application enregistre automatiquement la commande insérée et enleve tous les champs en rendant la fenêtre disponible par l'insertion d'une commande. |
| Doubler la commande | Il se réfère à la procédure pour engendrer une nouvelle Commande de production multi-produit, composée par les mêmes articles par lequelle est formée la commande de départ. Avant d'ouvrir la nouvelle fenêtre, l'application demande l'éventuelle enregistrement des données de la commande de départ. |
| Insérer article | Déplacer automatiquement le souris dans la première colonne de la première ligne disponible de la grille, en ce façon permet l'insertion d'une nouvelle ligne de commande. |
| Supprimer article | Supprimer la ligne sélectionnée dans la grille articles de la Commande de production multi-produit. |
| Aperçu avant impression | Il se réfère à la fenêtre 'Vérifier les commandes', par lequelle un des points successifs du présent document, déjà préfiltrée par la Commande de production par lequelle on est partis. |
| Impression | Il se réfère à la fenêtre 'Vérifier les commandes', par lequelle un des points successifs du présent document, déjà précodée par la Commande de production par lequelle on est partis. |






