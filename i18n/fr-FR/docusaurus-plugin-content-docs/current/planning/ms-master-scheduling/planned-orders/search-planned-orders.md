---
title: Rechercher les ordres planifiés
sidebar_position: 2
---

La fenêtre de Rechercher les ordres planifies s'ouvre à travers le parcours Planification > MPS > Ordres planifiés > Rechercher les ordres planifiés, et présente la liste des ordres planifiés déjà insérés, en permettent de les modifier, les visualiser et insérer nouveaux.

La fenêtre est composée par une zone de filtre et une grille de résultat.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton par appliquer les filtres de recherche à l'intérieur de la base de données des ordres planifiés insérés. |
| Insérer l'ordre | Il se réfère à la procédure pour insérer un nouveau Ordre planifié. |
| Modifier les ordres | Il se réfère à la procédure pour ouvrir en modification un Ordre planifié. |
| Visualiser les ordres | Il se réfère à la procédure pour ouvrir en visualisation un Ordre palnifié. |
| Supprimer les ordres | Il se réfère à la procédure pour supprimer un Ordre planifié précédemment inséré. |
| Vérifier la disponibilité | Exécuter la procédure qui permet de calculer et visualiser, par chaque matériel présent dans l'Ordre planifé de production, la disponibilité à la date d'engagement du matériel. |
| Modifier le filtre attributs | Ouvrir une fenêtre qui permet de décider s'activer ou non le Filtre attributs, qui permet de filtrer les Ordres planifiés selon les attributs insérés à travers l'encodeur dans les articles objet de l'ordre. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible spécifier plusieurs critères des filtres en même temps.

L'utilisateur peut utiliser les suivants filtres:

**Article**: le premier menu déroulant permet d'établir la classe de l'article, avec le double click sur le deuxième champ ouvre un 'Aide articles' à travers lequel est possible de sélectionner chaque article (code et description);

**Variante**: avec un double click s'ouvre un aide des variantes à travers lequel est possible de sélectionner la variante de l'article;

**Client**: en ces 3 champs viennent spécifiés les relatifs données du client: 'Compte', 'sous-compte', 'nom du client', avec un double click dans le premier champ est possible d'ouvrir un 'Aide comptes' par lequel sélectionner le client à filtrer;

**Commande**: en ce champ est possible d'insérer le numéro de la commande de vente, à travers l'aide commandes;

**Début travail De..À**: en ces champs est possible d'insérer (en une gamme= ) la date prévue de début travail (de...à);

**Fin travail De...À**: en ces champs est possible d'insérer (en une gamme) la date prévue de fin trvail (de...à...);

**Type com.**: en ce menu déroulant est possible d'insérer le Type de commande de production et filtrer selon ce critère, en visualisant donc toutes les Commandes de production du type sélectionné;

**Comm. Prod.**: en ces 2 champs viennent établis le numéro et l'année de la Commande de production;

**Ordre**: en ce champ est possible de filtrer par le numéro et l'année de l'ordre planifié;

**Type ordre de**: à travers ces flag est possible de filtrer seul les ordres d'achat, production, ou de sous-traitant; si sont actifs tous les flag des ordres viennent visualisés;

**Groupe**: en ce menu déroulant est possible d'insérer le numéro du groupe appartenant aux ordres planifiés qu'on veut visualiser dans la grille;

**Ordres de maintenance**: avec ce flag est possible de décider de visualiser aussi les ordres planifiés de maintenance;

**Synthèse mois**: en activant ce flag, la grille de résultat visualise, par chaque article, une ligne par chaque mois de l'année, en sommant les quantité totals prévues par tous les ordres planifiées qu'on trouve à l'intérieur du mois. La nouvelle visualisation vient activée après avoir cliqué dans l'icône qui permet de faire un

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des ordres planifiés qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des ordres planifiés, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des ordres planifiés désirés.

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Approvisionnement**: la colonne visualise le type d'approvisionnement de l'Ordre planifié, qui peut être de production, d'achat ou de sous-traitant, en rélation au type d'approvisionnement établi par l'article objet de l'ordre dans ses Paramètres MRP;

**Année**: la colonne visualise l'année de l'ordre planifié;

**Ordre**: la colonne visualise le numéro de l'ordre planifié;

**Niveau**: la colonne visualise le niveau de la nomenclature qui indétifique l'article objet de l'ordre planifié;

**Code type ordre**: la colonne visualise le code du Type ordre planifié;

**Description type ordre**: la colonne visualise la description du Type ordre planifié;

**Année commande**: la colonne visualise l'année de la commande de production par lequelle a été engendré l'ordre planifié. La colonne résult vide si l'ordre planifié est engendré manuellement ou qui proviennent par le traitement MRP;

**Numéro commande**: la colonne visualise le numéro de la commande de production par lequelle a été engendré l'ordre planifié. La colonne résult vide si l'ordre planifié est engendré manuellement ou qui proviennent par le traitement MRP;

**Code type commande**: la colonne visualise le code du Type commande de production;

**Description type commande**: la colonne visualise la description du Type commande de production;

**Date début**: la colonne visualise la date prévue de début de l'ordre planifié; s'on réfère à l'ordre planifié d'achat ou de sous-compte cette date représente la date sur lequelle doit être invié au fournisseur l'ordre planifié qui viendra après engendré avec la délivrance de l'ordre; s'on réfère à l'ordre planifié de production cette date représente la date de prévue début de la première phase de travail du cycle de l'article;

**Date FOB**: la colonne visualise la date FOB ('Free on Board'), qui vient calculée en sommant à la date de début prévu le Temp d'approvisionnement inséré dans le tab Fournisseurs préférentiels de l'article objet de l'ordre planifié, et vient gérée seul par les articles avec le type approvisionnement achat

**Date ETA**: la colonne visualise la date ETA ('Estimate Time of Arrival'), qui vient calculée en sommant à la date FOB le Lead Time inséré dans le tab Fournisseurs préférentiels de l'article objet de l'ordre planifié, et vient gérée seul par les articles avec le type approvisionnement achat.

**Date fin**: la colonne visualise la date de prévue fin de l'Ordre planifié; s'on réfère à l'ordre planifié d'achat ou de sous-traitant cette date représent la date sur lequelle doit être reçue la fourniture et donc coïncidera avec ka date de prévue réceptions de la ligne de l'ordre fournisseur qui viendra après engendré avec la délivrance de l'ordre; s'on réfère à l'ordre planifié de production cette date représente la date de prévue fin de la dernière phade de travail du cycle de l'article;

**De disponibilité minimum**: la colonne visualise un flag qui résult actif seul si l'Ordre planifié ait été engendré en utilisant la procédure de Planification général et en ayant activé dans les paramètres de Planification le flag qui permet de considérer la disponibilité minimum dans le période;

**Classe**: la colonne visualise la classe de l'article objet de l'Ordre planifié;

**Code article**: la colonne visualise le code de l'article objet de l'Ordre planifié;

**Variante**: la colonne visualise l'éventuelle variante de l'article;

**Quantité**: la colonne visualise la quantité de l'Ordre planifié de l'article;

**Quantité confirmée**: la colonne visualise la quantité confirmée de l'Ordre planifié de l'article, divers de zéro seul si l'Ordre planifié provenant par le traitement MRP;

**Client**: la colonne visualise le compte et le sous-compte du client lié à l'Ordre planifié;

**Fournisseur**: la colonne visualise le compte et le sous-compte du fournisseur lié à l'Ordre planifié, si d'achat ou de sous-traitant;

**Caractéristique**: la colonne visualise le code de la Caractéristiche de l'article objet de l'Ordre planifié;

**Commande**: la commande visualise l'éventuelle commande de vente liée à l'Ordre planifié;

**Description article**: la colonne visualise la description de l'article objet de l'Ordre planifié;

**Description client**: la colonne visualise la raison sociale du client lié à l'Ordre planifié;

**Description fournisseur**: la colonne visualise la raison sociale du fournisseur lié à l'Ordre planifié, si d'achat ou de sous-traitant;

**Description caractéristique**: la colonne visualise la description de la caractéristique de l'article objet de l'Ordre planifié;

**Lot économique d'achat**: la colonne visualise le lot économique d'achat du fournisseur préférentiel de l'article objet de l'Ordre planifié d'achat;

**Multiples lot économique d'achat**: la colonne visualise les multiples du lot économique d'achat du fournisseur préférentiel de l'article objet de l'Ordre planifié d'achat;

**Temp d'approvisionnement**: la colonne visualise le temp d'approvisionnement du fournisseur préférentiel de l'article objet de l'Ordre planifié d'achat;

**Lot économique de production**: la colonne visualise le lot économique de production inséré dans les paramètres MRP de l'article objet de l'Ordre planifié de production;

**Multiples lot économique de production**: la colonne visualise les multiples du lot économique de production inséré dans les paramètres MRP de l'article objet de l'Ordre planifié de production;

**Point de commande**: la colonne visualise le valeur du point de commande inséré dans le tab Approvisionnement du registre de l'article objet de l'Ordre planifié;

**Stock minimum**: la colonne visualise le valeur du stock minimum inséré dans le tab Approvisionnement du registre de l'article objet de l'Ordre planifié;

**Qté utilisée**: la colonne visualise la quantité utilisée à la date courant de l'article objet de l'Ordre planifié;

**Obligatoire**: la colonne visualise un flag qui s'actif permet à l'utilisateur d'indiquer que l'Ordre planifié soit absolument ne déplaçable pas.






