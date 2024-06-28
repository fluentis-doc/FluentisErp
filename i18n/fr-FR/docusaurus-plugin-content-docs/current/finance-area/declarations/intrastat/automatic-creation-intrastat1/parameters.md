---
title: Paramètres
sidebar_position: 3
---

À l'intérieur de la section **Paramètres** la procédure ramène toutes les lignes de détail des articles insérés dans les documents sélectionnés, en ramenant par chacune de ces les données retiréespar le document. En particulier:

**État et code TVA**: ils sont pris par le registre du sujet titulaire;

**Valeur en devise**: il présente la donnée du montant article (prix*quantité-remises) dans la devise de la facture d'achat (le champ est présent seul pour l'Intra2);

**Montant des opérations en euro**: il prend le montant de l'article au change inséré dans la facture;

**Nature de la transaction**: il est reprise par le type document;

**Nomenclature combinée**: par la ligne article en facture et, si vide, par le registre articles;

**Masse net**: il est calculée sur la base du poids établi dans le registre article;

**Unité suppl.**: il peut-être calculée automatiquement si le code nomenclature prévoit une deuxième unité de mesure, à traves la conversion entra l'unité de mesure de gestion et cette, selon les factures de conversion établies dans l'article;

**Valeur statistique**: il vient calculé en plusieurs façons selon les paramétrages (variation pourcentage respect au registre client/fournisseur, ou augmenté par les dépenses insérées en manière spécifique dans le document); 

**Code transport** et **Modalité de transport**: il est inséré respect aux codes port/spéditionc assignés au document;

**Données relatives** ** aux provinces d'origine/destination** et au **Pays de provenance/destination**: ils sont liées par le registre du sujet titulaire du document ou par le tableau société.

À la fin de la grille sont visualisés les références au document d'origine de la ligne.

Une fois complétés les données nécessaires dans le modèle (et cedepend du flag Simplifiée insérée dans l'en-tête de la déclaration mais aussi par le type de période du résumé) est possible d'avancer à la création du modèle, opération qui ira à ramener les détails dans les sections bis/ter/quater selon la nature de la transaction Intrastat (le type 2 vient ramené dans la section Ter relatif aux rectifications, le type 'S' dans la section Quater). Est possible d'avancer, abord encore de ce déplacement, à un premier regroupement des montants: cette opération sera mais effectuée document pour document, en causant un premier arrondissement des données à l'unité.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Supprimer | Bouton pour supprimer les factures du type intracommunautaire sélectionnées. |






