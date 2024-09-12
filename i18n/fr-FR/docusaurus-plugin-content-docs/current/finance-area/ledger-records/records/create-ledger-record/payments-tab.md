---
title: Tab paiements
sidebar_position: 4
---

Le dossier 'Paiements' est présent seul si la cause a le flag 'Clôture comptes' établi.

Le dossier 'Paiements' permet de visualiser les comptes ouverts pour avancer aux paiements/encaissements ou aux compensations: typiquement tous les enregistrements de type TVA ont le flag d''ouverture comptes' et pourraient avoir (les notes de crédit normalement ont) aussi le flag de clôture compensation comptes; les causes de paiement/encaissement, au contraire, prévoient toujours la clôture des comptes sans jamais le flag de compensation, éventuellement  ils peuvent avoir le flag d'ouverture comptes pour gérer les cas de paiement avancé. Paiements comptes et compensations comptes: la compensation, dans la terminologie comptable, peut-être entendue soit comme compensation comptes (débit/crédit) du même sous-compte (p.ex. facture avec note de crédit) mais aussi comme compensation client/fournisseur (p.ex. compenser le débit en comparaison du sous-traitant fournisseur avec le crédit du sous-compte client en faisant à la ligne du même registre. Dans la logique de l'ERP, au contraire, la compensation est strictement reliée à la situation de comptes en faisant à la ligne du même sous-compte, qui peut être géré plus en général simplement en effectuant soit les paiements des comptes débit que crédit (que pour le solde di 'compensent' en comptabilité).

Si dans l'en-tête de l'enregistrement a été inséré un sous-compte titulaire, ce sera ramené comme filtre de recherche dans les champs relatifs du dossier paiements: pour tous les enregistrements TVA, donc, l'ERP proposera les comptes du seul client/fournisseur inséré en en-tête, pour avancer à la compensation facture/note de crédit; dans le cas d'enregistrement de paiement/encaissement, au contraire, normalement le champ sera vide et serra l'utilisateur à compiler les filtres selon les exigences. Il faut signaler, en particulier, le champ du sous-compte 'Banque': il ne se réfère pas à un filtre, mais il vient compilé avec le sous-compte de paiement inséré dans le registre du client/fournisseur titulaire de l'enregistrement et par ici actualisé va à actualiser l'enregistrement comptable dans le champ qui prévoit le type montant 'Tot. doc./enregistrement' (si les paramètres de comptabilité, dans la liste des comptes clients/fournisseurs, autorisent le remplacement).

Une fois individué, dans la première grille, le compte (ou les comptes) à payer est possible de les sélectionner et de les payer à travers le double click dans chaque ligne, ou en utilisant le bouton 'Créer paiements'. Si la cause prévoit la compensation compte sera active le bouton de 'Compensation comptes' (et le double click aura la même importance). Un dernier bouton à utiliser en cette section est le 'Créer les paiements étendus': s'ouvrira un masque intermédiaire de paramétrages du montant du paiement avec l'éventuel montant de réduction, avec relatif sous-compte pour la relevé comptable (détail: en ce masque il y a l'unique point où établir l'état 'Forcemment fermé' à un compte: l'utilisation de cet état est déconseillé); un résultat semblable peut être obtenu en forçant le montant du paiement que l'ERP ira à ramener, pour chaque compte, dans la section en dessous relatif aux paiements. Il n'est pas permis de forcer le paiement avec un montant supérieur au restant du compte.

Dans la liste des paiements peuvent être insérées notes des mêmes: ces notes ne peuvent pas être reliées automatiquement, en cause, avec la description générique de l'enregistrement comptable (flag 'description en journal et paiements', déconseillé).

Pour conclure: il est présent un rapport d'impression (quittance) des paiements de l'enregistrement. En deuxième lieu, le paiement sera géré, selon les paramétrages de la cause, au change historique du compte (en cette façon il ne sera pas relevée aucune différence de change en automatique, qui sera à gérer manuellement en comptabilité: l'option facilite la gestion de l'égalité entre les comptes ouverts et le solde comptable) ou la contre-valeur euro sera calculée au change de la date d'enregistrement (et en ce cas, s'établit correctement en cause et dans les devises, la procédure valorisera automatiquement les sous-comptes d'utile/perte des changes devise pour devise). Enfin, si on visualise une seule des deux grilles à travers le bouton 'Étendre/Réduire', seront visualisés les champs de totalisation des montants sélectionnés dans la même: sur la base des paiements effectivement insérés et des paramétrages de la cause, l'ERP actualisera la ligne avec le type montant 'Tot. Doc./enregistrement' avec le total des paiements relevés, pendant qu'insérera une ligne pour chaque paiement ou regroupera les paiements débit et crédit, devise pour devise, de chaque sous-compte payé/encaissé.

RIBBON BAR: ilreprésente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'enregistrement. |
| Nouvel enregistrement | Bouton pour créer un nouvel enregistrement. |
| Paramètres d'insertion | Il se réfère aux paramètres d'insertion du livre-journal. |
| Ouvrir le registre | Bouton pour rappeler la gestion du registre du sous-compte sélectionné, ou en absence, la recherche d'un autre registre. |
| Rechercher les comptes | Bouton pour rechercher les comptes à payer/encaisser. |
| Supprimer les paiements | Bouton pour supprimer les paiements précédemment sélectionnés. |
| Créer les paiements | Bouton pour créer le paiement du compte sélectionné. |
| Compensation | Bouton pour opérer la compensation des comptes si prévu dans la cause comptable. |
| Créer les paiements étendus | Bouton pour gérer le paiement/encaissement avec éventuels montant de réduction et relatif sous-compte de relevé comptable. |
| Étendre/Réduire | Bouton pour réduire la visualisation à la seule partie des comptes où paiements et vice versa ou l'étendre aux deux. |
| Impression | Bouton pour imprimer le paiement/encaissement sélectionné. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document Manager | Bouton pour la liaison à la gestion documentale. |






