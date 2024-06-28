---
title: Paiements
sidebar_position: 4
---

En cette Form on va à spécifier les caractéristiques commercialespar défaut à propos des paiements/encaissements.

Dans la grille supérieure est possible insérer les banques d'appui du sujet: sont toujours les banques de la contrepartie. Entre ces, celle établie comme 'Défaut' peut être utilisée comme banque bénéficier des virements fournisseurs du formulaire 'Paiements fournisseurs'. L'insertion d'une banque peut être exécutée à travers un double click dans les champs Abi/Cab pour ouvrir l'aide de recherche entre les agences bancaires nationales, par lesquels sélectionner celle du cas et créer le code dans le registre à compléter avec les données de compte courant, Cin, Iban, Swift. On signale aussi la possibilité d'insérer une raison sociale bénéficier si les paiements sont d'une troisième partie (p.ex. une société financière du groupe).

La section fondamentale du tab paiement est celle centrale, où estétablie la logique de calcul des échéances: on sélection le type de paiement et la solution de paiement (les deux si trouvent en Home > Tableaux > Paramétrages généraux), le montant ou le pourcentage de paiement et la relative banque de référence pour les comptes. En cas de registre client et type paiement reçu bancaire, en ce champ va indiquée la banque du client alors est l'appui bancaire de la société en utilisation si le type paiement est virement (en façon d'avoir en impression des documents les références de paiement pour le client); au contraire pour les fournisseurs sera indiquée la banque du fournisseur dans le cas de virement, la banque de la société en cas de reçue bancaire. Le champ du montant de paiement permet ce type de gestion: le système calculera les échéances jusqu'au montant indiqué, les valeurs plus de ce chiffre seront gérés avec la typologie qui au 100%.

La typologie de calcul du compte permet de définir si la base de calcul des comptes est le seule imposable du document (p.ex. pour les fournisseurs intercommunautaires ou gérés comptabilement en régime d'auto-liquidation, où donc le TVA qu'on complète dans le document ne va pas gérée à niveau d'échéancier) ou imposable TVA (qui est la logique par défaut aussi si en ce champ n'est pas indiqué rien).

Le flag **Regrouper comptes** permet de regrouper les comptes quidans le même enregistrement ont la même date échéance (p .ex. pour les cas des mois d'exclusion);

Avec le flag **Regr** **. échéances en effets**, au contraire, s'établit la possibilité de regrouper plusieurs comptes/échéances en un unique effet du formulaire portefeuille effets (seront regroupée en cas d'égale date échéances et même banque d'appui);

Le flag **Regr. notes créd** **. en effets** permet de ristourner, dans la création effets, aussi les notes de crédit qui ont le type paiement à gérer dans les effets: en ce cas le virement est indépendant par la date échéance de la note de crédit, mais suit l'ordre de création du même effet;

Le champ **Jours en retard** est un donnée statistique calculé dans le risk client et utilisé dans les projections de Cash Flow.

Dans la section des mois d'exclusion est possible d'indiquer que les échéances d'un déterminé mois repoussent à un jour spécifique du mois successif.

Dans la partie plus en basse, il y a certains autres champs de gestion:

**Type contr** **. crédit**: est possible de définir si le client est sujet à un seul 'Moniteur crédit' (c'est-à-dire sera remplacé un message de signalisation du dépassement du crédit) ou un 'Bloc doc. et moniteur crédit' avec lequel le document qui va à dépasser le crédit sera bloqué et devra être autorisé à l'intérieur du formulaire Risk client (procédure 'Lock manager'), ou en une base de données avec plusieurs sociétés la possibilité d'établir un 'Moniteur du groupe' ou 'Bloc de groupe' (en allant donc à évaluer la situation globale du sujet en comparaison avec toutes les sociétés gérées dans la base de données). Dans le formulaire Risk client il y a la procédure de 'Gestion crédits' qui permet de visualiser la liste des paramétrages de crédit établie sur tous les codes client, sans devoir entrer dans chaque registre;

**Mont. crédit accordé**: est le montant du crédit qui est accordé au sujet, selon les paramétrages de calcul définis pour le Risk client (voir la documentation sur le formulaire). Aussi ce champ peut être géré par la Gestion crédits du formulaire Risk client;

**Crédit** ** assuré**: est un simple champ indicatif du montant couvert par l'assurance, n'influente pas sur les calculs du risk;

**Notes crédit**: annotations commerciales sur le crédit accordé;

**Zone**: zone statistique;

**Contrôle** ** exposit.**: avec ce flag si rendra visible ce sujet dans les masques récapitulatifs de l'exposition clients;

**Date d'accord**: est la date de l'accord sur le calcul des intérêts de demeure pour les retards de paiement;

**Type rappel**: type rappel à créer dans la procédure de création automatique rappels (Home > Tableaux  >  Administration);

**Type** ** taux d'intérêt**: est le type de taux moratoire à appliquer au sujet sur la base de l'accord fixé (Home > Tableaux  > Administration);

**Spread**: majoration de taux en comparaison au standard de sa typologie.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les modifications au registre en utilisation. |
| Supprimer banques | Bouton pour supprimer la banque d'appui sélectionnée. |
| Supprimer le type paiement | Bouton pour supprimer par la ligne des typologies de paiement. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de document. Se renyoie au document spécifique. |






