---
title: Gestion rémunérations
sidebar_position: 1
---

À partir da ce masque on avance au chargement/modification du document reçu par le professionnel ou par l'agent, soit s'on parle d'un honoraire provisoire que d'une facture définitive: la différence entre les deux, en effet, concernera uniquement l'insertion immédiate ou successive (en entrant donc en modification d'un provisoire déjà relevé) des champs relatifs au numéro et date document définitif.

Le premier champ de la rémunération concerne l'insertion du sous-compte titulaire de la rémunération: est possible insérer en ce champ seul les sous-comptes avec type compte agent ou fournisseur quiaient le flag retenu à la source établi en registre.

Les flag d'état successifs sont: 'comptabilisé', géré en automatique par l'application au moment de la comptabilisation des rémunérations. Une fois établit ce flag la rémunération ne sera pas plus modifiable. Le flag 'retenue versée' sera appliqué à la rémunération manuellement ou à travers à la procédure Versements retenue exigible par le masque de recherche rémunérations. Le flag 'certifié' vient établi en automatique par le programme à l'acte de l'impression définitive des certifications retenues.

Relié au sous-compte agent ou fournisseur peut être prédéfini le type de retenue à produire au moment du chargement de la rémunération.



Le champ note successif permet d'annoter un texte de référence de la rémunération: il se réfère à une note qui sera après ramenées dans les notes de détail de tous les mouvements comptables reliés à cette rémunération. Après est présent un champ 'Description mouvement' qui sera utilisé dans la comptabilisation des rémunérations pour l'homonyme champ de l'enregistrement comptable.

Dans la partie à droit on trouve le numéro et l'année de référence de la rémunération: il se réfère à une numérotation automatique intérieure du programme qui doit être univoque pour la société. Dans le champ Date il vient proposée comme date actuelle mais ne peut pas être comme la date de l'honoraire provisoire reçue.



Les champs date et numéro document définitif concernent les références à la facture définitive: il se réfère aux champs obligatoires pour avancer à la comptabilisation des rémunérations, aussi si la cause de référence ne doit être une cause TVA. Ces deux champs seront les uniques modifiables si le paiement a déjà été relevé en comptabilité.



Le champ commande/année sert à relier la rémunération à une commande de vente: il pourrait être le cas d'une expertise dans un chantier géré à commande. Si la cause comptable de référence a la gestion commandes alors les coûts insérés en cette rémunération seront assignés à cette.

Devise, date et change est relié à la gestion de la devise et des relatifs données du change prélevés par le tableau changes (la devise vient établie par le registre agent/fournisseur).

À l'intérieur des détails de la rémunération seront à charger toutes les lignes de détail de la rémunération: on avancera normalement par le type ligne 'Coût du service' pour lequel l'application proposera le pourcentage de l'imposable et de retenue liée par le type retenue, le sous-compte de coût sera ramené par le coût de contrepartie de l'agent/fournisseur (il pourrait après avoir le sous-compte industriel de contrepartie et les données de comptabilité analytique ainsi comme définis dans la cause industrielle reliée), le coût en devise et en euro, le taux TVA à appliquer (il est proposée aussi cette sur la base du registre), le pourcentage de caisse de prévoyance à calculer sur la ligne (il est proposée par le type retenue) et les dates d'exercice économique de référence. Ces sont gérés, pour l'utilisateur lié, selon ses paramètres de gestion (qu'il est possible d'établir avec le bouton présent en ce masque): les lignes successives à la première proposeront automatiquement la gammer établie dans la ligne précédente.

Les types de lignes successives sont: 'caisse de préyonce', pour lequel l'application proposera pourcentage d'application 0% de la retenue et la valeur calculée automatiquement sur la base du pourcentage présent dans la ligne du coût du service précédemment chargée.



Le type ligne **Enasarco** ne va pas utilisé.

Le type ligne 'autre' vient gérer comme montant sujet à retenue (mais l'utilisateur peut forcer tel paramétrage): il se réfère normalement au remboursement des frais insérés dans la rémunération, qui peuvent être ou non sujets à retenue et normalement sont n'imposable pas de TVA.



À l'enregistrement de la rémunération seront exécutés messages de contrôle si la valeur du compte n'est pas correspondante avec le total à payer, ainsi comme du manqué équilibrage des données à centre de coût/profit.

Une fois qui a été exécutée la comptabilisation des rémunérations ne sera plus permis de modifier les données de la rémunération: si a été exécutée la comptabilisation paiements ou Enasarco, eu contraire, seront modifiables les références au numéro/date document définitif, la description mouvement et le sous-compte inséré dans la grille des détails.

Pour conclure, il est possible de créer une nouvelle rémunération directement par l'intérieur de précédent à peine enregistré à travers le bouton de gestion: la nouvelle rémunération aura certains éléments repris par le précédent, selon les paramétrages utilisateur chargées. Si la rémunération est enregistrée et la date est numéro document définitif, il sera possible d'avancer à la comptabilisation à travers le bouton relatif: s'ouvrira un masque où les dates proposées seront ces derniers valables pour les registres TVA associé à la cause du type retenue.

Il est présent aussi un bouton d'impression de la rémunération en utilisation.

RIBBON BAR: il  représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Il enregistre la rémunération en gestion. |
| Nouvelle rémunération | Créer une nouvelle rémunération à partir de l'actuelle. |
| Paramètres d'insertion | Il permet de définir les paramètres utilisateur pour la gestion de la rémunération. Voir l'application a. |
| Comptabiliser et fermer | Il est actif quand ont été insérés la date et le numéro document définitifs, permet d'exécuter la comptabilisation de la rémunération. |
| Nouveau détail | Il active le curseur dans l'insertion d'une nouvelle ligne de détails de la rémunération. |
| Supprimer détail | Il supprime les lignes de détail sélectinnées dans la rémunération. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Bouton pour la liaison à la gestion du document. |

APPLICATIONS:

a) Dans les paramètres utilisateur il est possible de définir si la nouvelle rémunération doit reproposer le même sous-compte de l'actuel, le même type de retenue, comme gérer la nouvelle date document et enfin comme gérer la gamme de dates d'exercice économique (fin exercice - c'est-à-dire la date finale sera égal à au fin exercice, quotidienne - c'est-à-dire date finale égale à date initiale, aucune date pour type compte services - c'est-à-dire redemandera obligatoirement l'insertion des deux dates si le type du sous-compte inséré est établi comme 'Servive').






