---
title: Modifier - Recalcul du risk client
sidebar_position: 1
---

Les deux masques gèrent la visualisation de l'état compressif du risk en comparaison avec un déterminé client: le 'Recalcul risk client' est une simple demande de la situation actuelle du client, au contraire le masque de modification de la procédure 'Utilisation crédits' permet d'enregistrer chaque calcul effectué et en visualiser donc une série historique.

On voit en détail la liste des champs visualisée, qui est la mêmeprésente aussi dans le masque de l'exposition clients.

Dans l'en-tete ils sont présents les paramètres de calcul: le code du client, la date de début calcule (établie par défaut par les paramètres du formulaire risk client), la date finale de référence (établie à aujourd'hui), le numéro de jours de retard pour les effets Sbf et effets à l'après encaissement (établi par les paramètres du formulaire), le flag de considération des comptes reliés aux enregistrements provisoires. En appuyant le bouton de calcul apparaitront les suivantes valeurs:

**Chif. d'aff. 12 ** **m**: il est le chiffre d'affaires (par la zone vente et factures de vente) des 12 mois précédents à la date de référence;

**Chiffre d'affaires** ** année**: il est le chiffre d'affaires (par la zone de vente et factures de vente) par le début de l'année;

Dans la section **Situation** ** comptes ouverts** ils seront visibles les totals débit/crédit et le solde relatif aux comptes ouverts:

Dans la section **Paiem. par l'enreg. provis** **.** ils seront visualisés les éventuels montants de paiement insérés dans les enregistrements provisoires;

Dans la section **Situation solde comptable** ils seront visibles les totals débit/crédit et le solde du grand-livre de comptabilité générale;

**Solde comptes/comptable**: il repropose les totals débit/crédit calculés par les comptes ou par le solde ainsi comme visualisé dans les sections précédentes;

**Factures** ** à comptabiliser**: ils sont les montants des factures (des types factures reliés au crédit) imprimées mais pas encore comptabilisées;

**DDT** ** à facturer**: ils sont les montants des bons de livraisons (des types bons de livraisons reliés au crédit) imprimés mais pas encore facturés;

**Ordres** ** à exécuter**: ils sont les montants des ordres (des types ordre reliés au crédit) imprimés, confirmés mais n'exécutés encore;

**Effets** ** émis**: ils sont les montants des effets (du formulaire portefeuille effets) émis et comptabilisés, ma ne présentés encore;

**Effets** ** présentés à la remise - au Sbf - à l'encaissement**: ils sont les montants des effets présentés mais qui ont la date échéance (plus jours des paramètres insérés dans l'en-tete du calcul) supérieur à la date de référence;

Section **impayés**: ils sont ici visualisés les impayés ne comptabiliséspas, ou (si le flag est inséré) aussi ce déjà comptabilisés, soit comme montant que relatif numéro;

Par la somme des valeurs précédentes il vient calculée le 'Risk client', qui comparé au crédit permis, donnera le franchissement du crédit.

Le champ **É** **chué** visualise le montant des comptes ouverts mais déjà échus, quels ultérieurs éléments d'analyse de la situation du client.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Le bouton, présent en modification d'un crédit déjà calculé, permet d'enregistrer le résultat obtenu. |
| Calculer | Il se réfère à la procédure pour calculer la situation complessive de risk pour le client. |






