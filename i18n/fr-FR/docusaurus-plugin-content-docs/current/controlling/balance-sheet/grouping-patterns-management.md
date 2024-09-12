---
title: Gestion des modèles de regroupement
sidebar_position: 6
---

Il faut d'abord éclaire que les modèles de regroupement sont éléments communs à toutes les sociétés chargées dans la même base de données: la structure du reclassé, donc, sera visible en toutes les sociétés, au contraire, ce qui sera spécifié en chacun de ces sera l'assignation de la propre structure de plan des comptes (CDC/CDP ecc.) aux divers modèles. En cette façon sera possible aussi créer un reclassé consolidé du groupe.

Les éléments nécessaires par pouvoir créer un nouveau modèle sont seulement trois: le type reclassement d'appartenance, un code du modèle (alphanumérique de 10 caractères) et une description du même. En attribuant ces trois valeurs, seront activés divers bouton de définition de la structure de reclassement: avec le bouton 'Insertion noeud racine' se créeront les premiers niveaux de la structure, au contraire, avec le successif 'Insertion noeud' s'ajouteront des sous niveaux à ce sélectionné dans la structure. Chaque niveau de la structure, à son tour, sera défini à travers un code (alphanumérique de caractères) et une description: l'univocité en cette façon particulière est formée par la combinaison de deux valeurs, code et description ensemble (ce parce qu'en un reclassé Cee, par exemple, sont présentes plusieurs niveaux 'À' dans les différentes sections du modèle). Dans les points successifs on va voire en détail les types de niveau qui est possible d'assigner à ces articles, en tenant compte que la supprimation des différentes niveaux est constitué seul si ces ne sont pas valorisés en une formule ('somme des enfants ou expression').

RIBBON BAR: le représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Nouveau modèle | Il exécute la création d'un nouveau modèle de regroupement. |
| Rechercher noeud successif | Il exécute la recherche du texte établi dans le noeud successif à ce sélectionné. |
| Rechercher noeud précédent | Il exécute la recherche du texte établi dans le noeud précédent a ce sélectionné. |
| Insertion noeud racine | Avec ce bouton vient exécutée la création d'un nouveau niveau d'origine, indifféremment du niveau sélectionné. |
| Insertion noeud | Avec ce bouton vient exécutée la création d'un nouveau niveau enfant à l'intérieur du niveau sélectionné. |
| Supprimation noeud | Le bouton exécute la supprimation du noeud sélectionné. La supprimation est permise seul si le noeud est utilisé en une formule du même modèle. |
| Augnementation de la tabulation | Le bouton augnement l'espacement de l'arbre du modèle. |
| Diminution de la tabulation | Le bouton diminue l'espacement de l'arbre du modèle. |
| Explostion du noeud | Avec ce bouton seront ouverts tous les niveaux intérieurs au noeud sélectionné. |
| Implosion du noeud | Avec ce bouton seront fermés tous les niveaux intérieurs au noeud sélectionné. |
| Supprimer le sous-compte | Il supprime le sous-compte, le centre de coût/profit ou les commandes sélectionnées dans la grille de détail du noeud sélectionné. |
| Rechercher les sous-compte manquants | Le bouton ouvre la masque de recherche des sous-compte n'insérés pas en aucun noeud du réclassé. Voir l'application '1'. |
| Rechercher sous-compte doubles | Le bouton ouvre une masque de recherche des sous-comptes insérés plus fois dans le reclassé. Voir l'application '2'. |
| Insertion multiple sous-comptes | Il ouvre un aide comptes avec la sélection des sous-comptes validée. |

APPLICATIONS:

1. Le masque recherche sous-comptes manquants permet de rechercher et imprimer les sous-comptes n'insérés pas en aucun point du modèle de reclassement. En particulier, s'a été inséré le compte générique, ils ne seront pas visualisés les sous-comptes aussi si ces ne sont pas insérés en détail dans le même modèle.

2. Le masque recherche sous-comptes doubles permet de rechercher et imprimer la liste des sous-compte qui ont été insérés en plus point du modèle. En particulier, s'a été inséré le compte générique et son sous-compte, ce sera visualisé parce que considéré soit dans le total que comme en détail.

**A** - Le niveau sous-compte est dédié à la valorisation des données de comptailité général, selon les détails de la structure du plan des comptes de la société.

Avant tout, le **Type de la donnée** peut être 'Devise' ou 'Numéro': dans le premier cas le niveau visualisera une valeur monétaire avec le symbole et les relatifs décimaux par la devise de la société; dans le deuxième cas, le niveau visualisera une générique valeur numérique arrondi au numéro des décimaux établi dans le champ successif.

**Inversion du signe du noeud sélectionné **permet d'invertir les signes négatifs en positif et vice-versa: dans lesreclassés de l'ERP chaque donnée avec solde débit sera visualisé avec le signe positif, le crédit avec signe négatif. À travers ce flag, donc, est possible de visualiser les totals positifs par les niveaux que par nature ont le solde crédit (passif, profits). Attention que ce paramétrage à une influence déterminant sur le résultat des sommatoires et des expressions en genre. L'inversion du signe est appliqué au résultat du niveau, pas aux détails (sous-comptes, CDC, CDP, commandes) que les valorise: ces continueront à avoir le signe du solde (voir en avant ce document pour les signes d'inversion dessous-comptes).

**À imprimer** indique si le niveau vait rapporté en impression ou non.

La section **Nature de regroupement** permet d'établir les types de compte qui sont possibles d'assigner à ce niveau: c'est-à-dire, dans l'insertion du sous-compte sera appliqué un filtre par type compte déjà limité à combien ont le flag courants avec le même paramétrage. Par exemple, si la nature est 'Patrim. actif', sera possible d'insérer les types comptes qui ont ce flag dans le tableau: typiquement l'actif, les clients et les banques. Dans le cas d'un modification du paramétrage avec les sous-comptes déjà présents dans le niveau, au moment de l'enregistrement de la modification sera demandé si supprimer ou non les sous-compte ne cohérents pas.

La grille des 'Comptes' permet de définir la liste des comptes et/ou sous-comptes qui iront à valoriser ce niveau du formulaire. Avant tout, il faut éclairer qui n'est pas possible l'insertion du même compte ou sous-compte avec le même type solde dans le même niveau, au contraire, ce peut être inséré en autres points de reclassement sans aucun lien. Est permis l'insertion d'un seul compte (mastro) générique: le cas typique est le compte générique qui contient les sous-comptes de registre, sans détailler la liste des clients/fournisseurs dans le modèle qui provoquera la nécessité d'un continu alignement des divers modèles.

Le type de solde de chaque ligne de compte ou sous-compte prévoit les suivantes possibilités: 'Général' (sera inséré le solde du sous-compte indépendamment de son signe; dans le cas de compte générique, sera insérée la somme des soldes des sous-comptes qui appartiennent à ce compte), 'Débit' (sera inséré le solde du sous-compte seul si ce au signe débit; dans le cas de compte générique, sera insérée la somme des soldes débit des sous-comptes qui appartiennent à ce compte), 'Crédit' (sera inséré le solde du sous-compte seul si cet a le signe crédit; dans le cas de compte générique; sera insérée la somme des soldes crédit des sous-comptes qui appartiennent à ce compte), et enfin 'Augmentation' (pour le sous-compte ou compte sera calculée la valeur comme différence entre la clôture intermédiaire du reclassé et un autre clôture de référence: cette typologie est utile en cas d'analyse par les flux).

Le dernier flag présent dans la grille est appelé **Col. inv**.: signifie que, dans le sous-compte sélectionné, le signe du solde sera inverti. Il peut-être utile, par exemple, pour déduire par le solde d'un compte la valeur d'un son sous-compte.

L'insertion, en cette grille, peut-être effectuée avec deux méthodologies: le chargement directement dans la grille, en introduisant le code ou à travers de l'aide compte qui permet la sélection d'un unique record, ou l'utilisation du bouton 'Insertion multiple des sous-comptes' par avoir un aide comptes avec la sélection multiple active.

En conclusion, dans la gestion des modèles fondés sur les sous-comptes sont particulièrement utiles deux boutons de gestion du masque: visualiser les sous-comptes manquants et visualiser les sous-compte doubles. Ces deux vont à présenter à l'utilisateur deux listes particulièrement intéressants en configuration du modèle: une liste de comptes/sous-compte qui ne sont pas insérés en aucun niveau du reclassé et une liste de comptes/sous-comptes qui ont été insérés plusieurs fois en différents niveaux, avec le relatif type solde associé.

**B** - Le niveau somme des enfants est un type prédéfini d'expression valorisée automatiquement dans la sommatoire algébrique des valeurs des niveaux immédiatement en-dessous.

Avant tout, le **Type de la donnée** peut être 'Devise' ou 'Numéro': dans le premier cas le niveau visualisera une valeur monétaire avec le symbole et les relatifs décimaux par la devise de la société; dans le deuxième cas, le niveau visualisera une générique valeur numérique arrondi au numéro des décimaux établi dans le champ successif.

**Inversion du signe du noeud sélectionné **permet d'invertir les signes négatifs en positif et vice-versa: dans les reclassés de l'ERP chaque donnée avec solde débit sera visualisé avec le signe positif, le crédit avec signe négatif. À travers ce flag, donc, est possible de visualiser les totals positifs pour les niveaux qui par la nature ont le solde crédit (passif, profits). Attention, ce paramétrage a un influence déterminant sur le résultat des sommatoires et des expressions en genre. 

**À imprimer** indique si le niveau va rapporté en impression ou non.

Il ne sera pas possible de supprimer le niveau combien sont niveau supérieur est de type 'Somme des enfants', parce que valorisé dans sa formule: sera suffissant changer le type du niveau supérieur, supprimer et après rétablir la typologie 'Somme des enfants'.

**C** - Le niveau d'expression permet à l'utilisateur de définir librement la formule qui valoriserà le même niveau.

Avant tout, le **Type de la donnée** peut être 'Devise' ou 'Numéro': dans le premier cas le niveau visualisera une valeur monétaire avec le symbole et les relatifs décimaux par la devise de la société; dans le deuxième cas, le niveau visualisera une générique valeur numérique arrondi au numéro des décimaux établi dans le champ successif.

**Inversion du signe du noeud sélectionné **permet d'invertir les signes négatifs en positif et vice-versa: dans les reclassés de l'ERP chaque donnée avec solde débit sera visualisé avec le signe positif, le crédit avec signe négatif. À travers ce flag, donc, est possible de visualiser les totals positifs pour les niveaux qui par la nature ont le solde crédit (passif, profits). Attention, ce paramétrage a un influence déterminant sur le résultat des sommatoires et des expressions en genre. 

**À imprimer** indique si le niveau vait rapporté en impression ou non.

À différence du type 'Somme des enfants', par le niveau expression, la section de la formule est éditable: sont permises les parenthèses et les quattre opérations algébrique de base, aussi comme les valeurs numériques fixes. Pour rapporter dans la formule un niveau il faut tenir appuyer le bouton Ctrl et traîner cet à l'intérieur du champ formule.

**D** - Le niveau du centre de coût est dédié à la valorisation des données de comptabilité analytique, selon les détails de la structure des centres de coût de la société.

Avant tout, le **Type du donnée** peut être 'Devise' ou 'Numéro': dans le premier cas le niveau visualisera une valeur monétaire avec le symbole et les relatifs décimaux par la devise de la société; dans le deuxième cas, le niveau visualisera une générique valeur numérique arrondi au numéro des décimaux établi dans le champ successif.

**Inversion du signe du noeud sélectionné **permet d'invertir les signes négatifs en positif et vice-versa: dans les reclassés de l'ERP chaque donnée avec solde débit sera visualisé avec le signe positif, le crédit avec signe négatif. À travers ce flag, donc, est possible de visualiser les totals positifs par les niveaux et pour la nature qui ont le solde crédit (passif, profits). Attention, ce paramétrage a un influence déterminant sur le résultat des sommatoires et des expressions en genre. L'inversion du signe est appliqué au résultat du niveau, pas aux détails  (sous-comptes, CDC, CDP, commandes) que les valorises: ces continueront à avoir le signe du solde (voir en avant ce document pour les signes d'inversion des centres de coûts).

**À imprimer** indique si le niveau va rapporté en impression ou non.

Avec le flag **Considérer CDC/CDP enfants **sera possible d'insérer dans le niveau le centre de coût X et l'ERP rapportera dans le reclassé tous ses centres de coût intérieurs qui avaient une valeur. Le flag permet, donc, d'éviter, de rapporter et maintenir tout le possible détail des centres de coût mais seul le centre de coût supérieur qui les regroupes.

Dans la grille des centres de coût se chargent les centres de coût qui valoriseront le niveau: est possible aussi d'indiquer les comptes/sous-compte, en façon de visualiser le niveau seul avec le solde des mouvements de la combinaison CDC/compte ou CDC/sous-compte. Le dernier flag présent dans la grille est appelé **Col. inv**.: signifie que, dans la ligne sélectionnée, le signe du solde sera inverti. 

**E** - Le niveau centre de profit est dédié à la valorisation des données de comptabilité analytique, selon les détails de la structure des centres de profit de la sociétè.

Avant tout, le **Type du donnée** peut être 'Devise' ou 'Numéro': dans le premier cas le niveau visualisera une valeur monétaire avec le symbole et les relatifs décimaux par la devise de la société; dans le deuxième cas, le niveau visualisera une générique valeur numérique arrondi au numéro des décimaux établi dans le champ successif.

**Inversion du signe du noeud sélectionné **permet d'invertir les signes négatifs en positif et vice-versa: dans les reclassés de l'ERP chaque donnée avec solde débit sera visualisé avec le signe positif, le crédit avec signe négatif. À travers ce flag, donc, est possible de visualiser les totals positifs par les niveaux et par nature qui ont le solde crédit (passif, profits). Attention que ce paramétrage a un influence déterminant sur le résultat des sommatoires et des expressions en genre. L'inversion du signe est appliqué au résultat du niveau, pas aux détails  (sous-comptes, CDC, CDP, commandes) que les valorises: ces continueront à avoir le signe du solde (voir en avant ce document pour les signes d'inversion des centres de profit).

**À imprimer** indique si le niveau va rapporté en impression ou non.

Avec le flag **Considérer CDC/CDP enfants **sera possible d'insérer dans le niveau le centre de coût X et l'ERP rapportera dans le reclassé tous sons centres de profit intérieurs qui avaient une valeur. Le flag permet, donc, d'éviter, de rapporter et maintenir tout le possible détail des centres de profit mais seul le centre de profit supérieur qui les regroupes.

Dans la grille des centres de coût se chargent les centres de profit qui valoriseront le niveau: est possible aussi d'indiquer les compte/sous-compte, en façon de visualiser le niveau seul avec le solde des mouvements de la combinaison CDP/compte ou CDP/sous-compte. Le dernier flag présent dans la grille est appelé **Col. inv**.: signifie que, dans la ligne sélectionnée, le signe du solde sera inverti. 

**F** - Le niveau commandes est dédié à la valorisation des données de la comptabilité par les commandes, selon les détails de la commande.

Avant tout, le **Type du donnée** peut être 'Devise' ou 'Numéro': dans le premier cas le niveau visualisera une valeur monétaire avec le symbole et les relatifs décimaux par la devise de la société; dans le deuxième cas, le niveau visualisera une générique valeur numérique arrondi au numéro des décimaux établi dans le champ successif.

**Inversion du signe du noeud sélectionné **permet d'invertir les signes négatifs en positif et vice-versa: dans les reclassés de l'ERP chaque donnée avec solde débit sera visualisé avec le signe positif, le crédit avec signe négatif. À travers ce flag, donc, est possible de visualiser les totals positifs par les niveaux et par nature qui ont le solde crédit (passif, profits). Attention que ce paramétrage a un influence déterminant sur le résultat des sommatoires et des expressions en genre. L'inversion du signe est appliqué au résultat du niveau, pas aux détails  (sous-comptes, CDC, CDP, commandes) que les valorises: ces continueront à avoir le signe du solde (voir en avant ce document pour les signes d'inversion des commandes).

**À imprimer** indique si le niveau va rapporté en impression ou non.

La section **Nature de regroupement** permet d'établir les types de compte qui sont possibles d'assigner a ce niveau: c'est-à-dire, dans l'insertion du sous-compte sera appliqué un filtre par type compte déjà limité à combien ont le flag courants avec le même paramétrage. Par exemple, si la nature est 'Patrim. actif', sera possible d'insérer les types comptes qui ont ce flag dans la tableau: typiquement l'actif, les clients et les banques. Il faut tenir en cosidération que la valorisation à commandes est automatique seul par les sous-comptes économiques et pas par les patriminiaux.

La grille des 'Comptes' permet de définir la liste des comptes et/ou sous-comptes (qui ont valorisé la comptabilité par commande) qui iront a valoriser ce niveau du formulaire. Avant tout, il faut éclairer qui n'est pas possible l'insertion du même compte ou sous-compte avec le même type solde dans le même niveau, au contraire, ce peut-être inséré en autres points de reclassement sans aucun lien. Aussi ici est possible l'insertion d'un seul compte (mastro) générique.

Le type de solde de chaque ligne de compte ou sous-compte prévoit les suivantes possibilités: 'Général' (sera inséré le solde du sous-compte indépendamment de son signe; dans le cas de compte générique, sera insérée la somme des soldes des sous-comptes qui appartiennent à ce compte), 'Débit' (sera inséré le solde du sous-compte seul si cet au signe débit; dans le cas de compte générique, sera insérée la somme des soldes débit dessous-comptes qui appartiennent à ce compte), 'Crédit' (sera inséré le solde du sous-compte seul si cet a le signe crédit; dans le cas de compte générique, sera insérée la somme des soldes crédit des sous-comptes qui appartiennent à ce compte), et enfin 'Augmentation' (pour le sous-compte ou compte sera calculée la valeur comme différence entre la clôture intermédiaire du reclassé et un autre clôture de référence: cette typologie est utile en cas d'analyse par les flux).

Le dernier flag présent dans la grille est appelé **Col. inv**.: signifie que, dans le sous-compte sélectionné, le signe du solde sera inverti. Il peut être utile, par exemple, pour déduire par le solde d'un compte la valeur de son sous-compte.






