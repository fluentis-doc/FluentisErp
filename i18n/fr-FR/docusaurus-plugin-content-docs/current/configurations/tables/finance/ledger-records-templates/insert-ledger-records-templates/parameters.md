---
title: Paramètres
sidebar_position: 4
---

La première partie des paramètres est dédiée au paramétrage de l'ordre avec lequel présenter les tabulateurs prévus, à travers les prévus boutons.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Contrôle type compte | La présence de ce flag imposera à la procédure de vérifier la correspondance du sous-compte titulaire de l'enregistrement respect aux paramétrages des paramètres de comptabilité (p.ex. utilisation d'un compte client en une cause d'achat à fournisseur): en cas de résultat négatif sera exécuté un simple message d'avertissement.  |
| Bloquer l'enregistrement si le type compte est imcompatible | La présence de ce flag imposera à la procédure d'annuler l'insertion d'un sous-compte titulaire de l'enregistrement ne valable pas en respect aux paramétrages des paramètres de comptabilité (p.ex. utilisation d'un compte client en une cause d'achat à fournisseur). |
| Permettre l'enregistrement comptable avec le déséquilibre | La présence de ce flag permettra à l'utilisateur d'enregistrer les enregistrements comptables ne bilancées pas. Si, ne conseillé pas, on veut permettre enregistrements de ce type, on rappelle qui est disponibles un rapport de visualisation des enregistrements déséquilibrés, par relier à l'impression Brouillon du formulaire de comptabilité générale. |
| Bloquer la supprimation des enregistrements avec comptes payés | Avec ce flag ne sera pas possible de supprimer les enregistrements qui aient à l'intérieur au moins un compte avec un paiement relié. |
| Bloquer l'enregistrement si la valeur des comptes n'est pas égale au mouvement comptable. | La présence de ce flag imposera à la procédure de bloquer l'enregistrement des enregistrements pour lesquels la valeur des mouvements comptables ne corresponde pas aux valeurs d'entretien des livres jounales (en ouverture et en clôture des comptes): si n'a pas été établie, la procédure, de toute façon exécutera un message d'avis de la présence d'une différence. Le contrôle vient exécuté sur tous les sous-comptes qui dans le plan des comptes ont établi le flag 'Ouverture des comptes'. |
| Bloquer l'enregistrement si le total document est différent par le total des données TVA | La présence de ce flag imposera à la procédure de bloquer l'enregistrement des enregistrements pour lesquels la valeur totale des mouvements TVA ne corresponde pas aux totals établis dans l'en-tête de l'enregistrement: si le champ n'est pas établi la procédure, de toute façon, exécutera un message d'avis. |
| Actualiser automatiquement le total du document au varier des données dans la grille du TVA | La présence de ce flag imposera à la procédure d'actualiser, mais seul en augmentation, les totals de l'en-tête de l'enregistrement au varier de la somme totale insérée dans la section TVA de l'enregistrement. |
| Actualier aussi la diminution | Ce flag, actif seul au moment que le précédent est établi, forcera la procédure à actualiser les totals de l'enregistrement aussi en diminution. |
| Bloquer l'enregistrement si l'ordre de protocole n'est pas respectée | La présence de ce flag imposera à la procédure de bloquer l'enregistrement des enregistrements pour lesquels l'ordre temporel de protocolation n'est pas respecté: en particulier, avec ce flag la procédure récupérera numéros de protocoles seuls si a été établie une date d'enregistrement valable pour le même numéro. Si le flag ne vient pas inséré, de toute façon, la procédure exécutera un message d'avis du manque d'ordre de protocolation: se rappelle, en outre, que l'impression registres TVA ne permet pas, dans le paramétrage par défault, d'imprimer en définitive registres TVA qui aient trou dans la numérotation ou ne suivant pas l'ordre de protocolation correct. |
| Gestion separée CDC/CDP | Ce flag, actif seul si la cause gère soit les centres de coût que de profit, permettera d'assigner les mouvements économiques de comptabilité soit aux centres de coût qu'aux centres de profit. Si n'est pas établi, au contraire, le mouvement peut être assigné seul à une des deux sections. |
| Récalcule automatique CDC, CDP, et commandes | Le flag en objet sera ramené aussi dans les enregistrements comptables basées sur cette cause: le signifiqué est ce d'exécuter automatiquement ou non le recalcul des sections analitiques des centres de coût, profit e des commandes une fois entrée en modificaiton d'un enregistrement comptable déjà enregistrée. À l'acte de l'insertion d'une nouvelle enregistrement, jusqu'à son premier enregistrement, l'actualisation de ces sections sera toujours automatiques en respect des paramétrages par défault défini. |
| Bloquer l'enregistrement si la valeur des CDC/CDP n'est pas égale au mouvement comptable | La présence de ce flag imposera à la procédure de bloquer l'enregistrement des enregistrements pour lesquels la valeur totale des mouvements analytiques des centres de coût profit ne corresponde pas aux montants économiques animés dans la section de comptabilité générale: si le flag n'a pas été inséré, sera de toute façon exécuté un message d'avis du manque correspondance des valeurs. |
| Regrouper TVA dans le livre journal | La présence de ce flag imposera à la procédure de regrouper dans le livre journal les lignes TVA assignées au même sous-compte comptable (et à la même division). |
| Bloquer l'enregistrement avec le numéro document doublé | La présence de ce flag, inséré par défault, imposera à la procédure de bloquer l'enregistrement des enregistrements comptables avec le même numéro document, même année, même type document et registre en en-tête de l'enregistrement. |
| Couleur du fond | Établir en ce champ la couleur du fond pour visualiser dans les recherches à vidéo les mouvements basés sur cette cause. L'utilisation des couleurs peut être utile pour individuer le type de mouvement sans devoir lire descriptions ou codes des causes. |
| Couleur du texte | Établir en ce champ la couleur des textes pour visualiser dans les recherches à vidéo les mouvements basés sur cette cause. L'utilisation des couleurs peut être utile pour individuer le type de mouvement sans devoir lire descriptions ou codes des causes. |
| Exemple de texte | Le champ visualise le résultat de la combinaison de couleurs établie. |
| Caractère cursif | Établir en ce champ la visualisation en cursif des caractères pour cette cause dans les recherches à vidéo: peuvent être utile pour individuer le type mouvement sans devoir lire les descriptions et codes des causes. |
| Caractère gras | Établir en ce champ la visualisation en gras des caractères pour cette cause dans les recherches à vidéo: peuvent être utile pour individuer le type mouvement sans devoir lire les descriptions et codes des causes. |

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'insertion/modification de la cause comptable. |
| Supprimer | Bouton pour supprimer la cause comptable. |






