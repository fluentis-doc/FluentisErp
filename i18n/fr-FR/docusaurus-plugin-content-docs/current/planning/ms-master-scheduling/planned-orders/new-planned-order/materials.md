---
title: Matériaux
sidebar_position: 2
---

Ce tab est formé par une grille, à l'intérieur dunquel l'utilisateur peut insérer manuellement les matériaux qu'on veut qui viennent utilisés par la production de l'article objet de l'ordre planifié (seul si de production). Ceci résult déjà compilé si l'ordre planifié vient par la planification général et par le traitement MRP, au contraire, quand l'ordre est inséré manuellement il faut, par établir les données de la base de données, cliquer sur le bouton 'Achèvement données ordre' présent dans le barre d'outils. Les colonnes présents dans la grille sont les suivants:

**Priorité**: il vient visualisée la priorité du composante, si présent, insérée dans la nomenclature. Elles peut être modifiée, comme tous les autres données présents en cette grille:

**Classe**: à travers le relatif menu déroulant est possible établir la classe de l'article;

**Code article**: avec un double click on entre à l'intérieur d'un aide articles à travers lequelle on sélectionne le code de l'article;

**Variante**: en ce menu déroulant vient établie la variante de l'article;

**Option**: en ce menu déroulant vient établi l'option de l'article;

**ST**: en ce champ vient reprise le flag présent dans les paramètres MRP de l'article appelé 'Cours de travail';

**UM**: en ce champ on insère l'unité de mesure de l'article;

**UMU**: en ce champ on insère l'éventuel unité de mesure alternative de l'article;

**Date engagement**: il coïncide avec la date de début prévue par l'ordre planifié (en modifiant la première vient automatiquement changée aussi cette dernière);

**Qté engagement**: il est la quantité unitaire nécessaire par ce article (prévue par la BD) qui peut être de toute façon modifiée;

**Qté total**: il est la quantité qui obtient en multipliant la Qté engagement par la Qté à produire;

**% déchet**: en ce case vient insérée ou reprise par la nomenclature l'éventuelle % de déchet par cet article;

**Phase/Sous-phase**: avec un double click on ouvre un aide de phase travail dans lequelle est possible sélectionner la relative phase et sous-phase, et donc assigner le matériel sélectionné à une déterminée phase de travail de l'article;

**Description article**: en ce champ paraït la description de l'article;

**Qté disp.**: en ce champ paraït la quantité disponible de l'article à la date d'engament.

Il faut soulingé que, s'il y a l'achévement automatique de cette grille, tous les données sur indiqués viennent actualisés automatiquement, en laissant de toute façon la possibilité à l'utilisateur de les modifier et/ou ajouter ultérieurs matériaux à la liste des composants de l'ordre planifié. Si l'ordre planifié est d'achat le bat Matériaux résult n'actif pas.






