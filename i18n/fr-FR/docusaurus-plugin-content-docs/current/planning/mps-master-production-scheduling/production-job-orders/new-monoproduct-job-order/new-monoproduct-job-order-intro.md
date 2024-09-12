---
title: Nouvelle commande mono-produit
sidebar_position: 1
---

La fenêtre qui permet d'insérer une Nouvelle commande mono-produit s'ouvre à travers le parcours Planification  > Commandes > Nouvelle commande mono-produit ou en appuyant sur l'icône de la Ribbon Bar de la fenêtre Commandes appelée 'Nouvelle commande mono-produit'.

L'application demande, tout d'abord, d'insérer le Type commande de production, aussi se propose, dans le menu déroulant, le type prédéfini comme type par défaut. Après avoir indiqué le type commande, l'utilisateur peut avancer à insérer, à travers l'aide ou en frappant manuellement la classe et le code, l'article à produire dans les cases. Après avoir inséré l'article à produire, l'application permet à l'utilisateur de choisir aussi la Variante de l'article, et complète la fenêtre de la nouvelle commande monoproduit avec toutes les informations disponibles relatives à l'article, c'est-à-dire,les données contenues dans la section 'Caractèristiques article',où on visualise le type d'approvisionnement de l'article inséré dans la commande (production, achat ou sous-traitant), le lot économique de production et ses multiples, le délai de production et le pourcentage de déchets; ces sont des données reprises par les paramètres MRP de l'article. Enfin, par pouvoir enregistrer la commande, l'application demande l'insertion de la date finale prévue et la quantité à produire dans les champs détaillés ensuite:

Les autres données présents dans la fenêtre de gestion sont les suivants:

**Année/Numéro**: en ces champs viennent insérés par défaut l'année et le numéro de la commande qui est en train de créer, en rélation au type de numérotaiton lié au type commande qui a été inséré dans le champ. Ces deux données peuvent aussi être modifiés manuellement par l'utilisateur;

**État**: en ce champ on peut visualiser, et éventuellement modifier l'état de la Commande de production. L'éta de la commande peut être:

**N'examinée pas**: il se réfère à l'état où vient créée la commande, donc signifie qui a été à peine insérée ou créée;

**Planifiée**: la commande avance en cet état après avoir subi le procès de Planification général;

**Lancée**: la commande avance en cet état après qu'au moins un des ordres planifiés de production ou d'achat engendrée par elle, pendant la Planification général, ont été relâchés;

**Exécutive**: la commande avance en cet état après qu'au moins un des ordres de production engendrée par elle, il a été relâché ou après qu'au moins un des ordres planifiés de sous-traitant engéndrée par elle a été relâché ou enfin après qu'au moins une des lignes de Demande d'achat engéndrée par elle a été transformée en ligne de commande fournisseur;

**Exécutée**: la commande avance en cet état après que l'ordre de production engendré par l'article objet de la commande a été avancé en état 'Exécuté';

**Historicisée**: la commande avance en cet état manuellement par éviter d'effectuer une recherche des commandes Exécutées;

**Annulée**: la commande avance en cet état manuellement, plutôt que la supprimer du tout, par indiquer que la commande, qui initialement eu été prévue, n'a pas été portée en production.

**Provenance**: ce champ indique si la commande a été insérée manuellement, en ce cas viendra visualisé le donnée 'Manuel', s'a été engendrée par une ligne d'un commande client, si viendra visualisé le donnée 'Commande client', o si la commande a été engendrée par prévisions de vente ou par un plan principal de production, viendra visualisé le donnée 'Prévisionel';

**Obligatoire (flag)**: il se réfère à un flag seul descritif, qui permet à l'utilisateur d'indiquer si cette commande soit d'importance fondamental ou non;

**Priorité**: à travers le menu déroulant est possible d'établir la priorité de la commande. Aussi ce donnée est simplement informatif;

**Approvisionnement**: ce menu déroulant visualise le type de Commande de production qu'on est en train de créer ou qui a été créée (Production, Achat, Sous-traitant). Généralment il coïncide avec le type d'approvisionnement de l'article objet de la même Commande de production;

**Date d'insertion/Dernière modification**: en ces champs, n'éditables pas, paraît la date d'insertion de la commande et sous la date de la dernière modification;

**Date de travail prévue Début/Fin**: en ces champs paraissent les dates de prévu Début/Fin de la Commande de production. Jusqu'à ce que la Commande de production reste en état 'N'examinée pas', ces dates sont indetiques entre leurs et sont égals à la date de marchandise prête de la ligne de la Commande client par laquelle la commande a été engendrée, ou égals à la date de fin de la Prévision de vente par laquelle la commande a été engendrée. Après que la Commande de production a été planifiée, la date de prévu début coïncide avec la date de prévu début du premier ordre planifié qui est engendré par la planification de la commande. Enfin, on rappelle qui en case d'insertion manuel de la Commande de production, l'utilisateur est tenu à insérer ce données manuellement, ceci porte l'impossibilité d'enregistrer la même commande;

**Date suggérée**: en ce champ paraît la date que le système à suggéré dans le cas où l'utilisateur à planifié la commande en utilisant le paramètres 'Contrôle les documents en rétard avec ATP' et en etaint établi, toujours dans les paramètres de Planification général, une 'Date début MS (Master Scheduling)'. La date suggérée est celle que l'utilisateur à la possibilité de décider qui devient la date prévue final de la commande;

**Date de travail d'effective Dèbut/Fin**: en ces champs paraissent les dates de Début/Fin de travail effectif, c'est-à-dire respectivement la date de la première signalisation de production d'un ordre de production engendré par la commande et la date de la denière signalisation de production qui a provoqué la clôture définitive de l'ordre de production où l'article est le même de la Commande de production. Enfin, la date d'effective fin est présent seul si la commande se trouve dans l'état 'Exécutée';

**Date de prévision Début/Fin**: en ces champs paraissent les dates de Début/Fin de la Prévision de Vente opérative par laquelle a été engendrée la Commande de production;

**Description**: en ce champ est possible de taper manuellement une description de la Commande de production. Se réfère à un champ n'obligatoire pas et absolument descriptif;

**Commande**: en ce champ vient visualisé le lien avec la Commande de vente, si présent. L'utilisateur peut visualiser ce champ par accrocher manuellement la Commande de Production à une en-tête ou à une ligne d'une Commande de vente existent;

**Client**: en ces 3 champs viennent spécifiés les relatifs données du Client: 'Compte', 'Sous-compte', 'Raison sociale du client', avec un double click sur le premier champ est possible ouvrir un 'Aide comptes' par laquelle pouvoir sélectionner le client en cause;

**Notes**: en ce champ est possible d'insérer manuellement une note relative à la Commande de production;

**Lieu prod.**: en ce champ est possible de spécifier quelle lieu productif doit être considérer par la planification de l'article présent dans la Commande de production;

**Article**: en ces champs est possible d'insérer la classe et avec un double click sur le deuxième champ est possible accéder à l'aide articles par pouvoir insérer le code de l'article, et sa description;

**Variante**: avec ce menu déroulant est possible de sélectionner la variante de l'article;

**Cycle**: en ce champ est possible de spécifier quelle est le numéro de cycle de travail qui doit être considéré par la planification de l'article présent en commande;

**Option**: en ce menu déroulant vient visualisée l'option qui doit être utilisée par la planification de l'article présent en commande;

**Quantité utilis. à produire/UMU**: en ce champ s'insére la quantité à produire dans l'unité de mesure alternative de l'article, et dans le champ 'UMU' s'insére l'unité de mesure alternative précodée par l'article qui doit être consideré. Si l'article n'a aucun unité de mesure alternative, ou s'on veut insérer la quantité à produire dans l'unité de mesure de gestion, on insére simplement la quantité à produire sans actualiser le champ 'UMU'. Enfin, on rappele que en cas d'insertion manuel de la Commande de production, l'utilisateur doit insérer ce donnée manuellement, ceci porte l'impossibilité d'enregistrer la même commande;

**Quantité de gest. à produire/UMG**: en ce champ s'insére la quantité à produire dans l'unité de mesure de gestion, et dans le champ 'UNG' si visualise l'unité de mesure de gestion de l'article. Le champ 'Quantité de gest. à produire' est actualisé automatiquement en insérant la quantité à produire relative au champ 'u';

**Quantité déjà produite/UMG**: en ce champ on visualise la quantité déjà produite dans l'unité de mesure de getion (UMG) de l'article.

Dans la partie inférieur de la fenêtre paraissent 3 differents tab: Attributs commandes, Référence commande client et Variantes, qui viennent détaillés en suite:  






