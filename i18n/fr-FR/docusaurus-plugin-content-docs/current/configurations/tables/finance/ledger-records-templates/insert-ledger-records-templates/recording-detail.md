---
title: Détails enregistrement
sidebar_position: 3
---

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Registre TVA | Le champ, obligatoire seul pour causes avec type mouvement TVA, permet d'assigner le registre TVA de référence  à la cause en gestion. |
| Date exercice TVA | Le champ permet de définir quel soit la date d'exercice à assigner au mouvement TVA: le programme propose  la date enregistrement pour les mouvements sur les registres achats et la date document pour les mouvements sur les registres de vente. On recommande d'établir la date d'exercice comme date d'enregistrement  aussi pour les causes de virement TVA IntraCEE. |
| Typo/N. document | Le paramétrage de ce flag rend obligatoire le champ du numéro document pour l'enregistrement de l'enregistrement basée sur cette cause. |
| N. Doc. = Prot. TVA | Le paramétrage de ce flag implique que le programme proposera le numéro du document sur la base du numéro de protocole TVA progressif. Le champ, donc, na va pas établi pour les enregistrements d'achat pour lesquels numéro document et protocole n'ont aucun lien réciproque; pour ce quel concerne la vente, au contraire, l'utilisation est suggérée seul pour les causes d'enregistrements effectués manuellement directement en comptabilité générale: le paramétrage de ce flag est déconseillé pour les causes établies dans les types de factures de vente et utilisées dans la comptabilisation des factures. |
| Date document | Le paramétrage de ce flag rend obligatoire le champ de la date document pour l'enregistrement de l'enregistrement basé sur la cause. |
| Prot. TVA = N. doc. | Le paramétrage de ce flag implique que le programme cherchera d'attribuer le protocole TVA sur la base du numéro de document. Le champ, donc, ne va pas établi pour les enregistrements d'achat pour lesquels les numéros document et le protocole n'ont aucune liaison réciproque; pour ce que concernent les ventes, au contraire, l'utilisation est suggérée pour toutes les causes établies dans les types de factures de vente et utilisées donc dans la comptabilisation des factures: la possibilité d'utiliser ce paramétrage dépend de la certitude que la numérotation des types factures soit la même pour tous les documents à enregistrer dans le même Registre TVA. |
| Ouverture des comptes | La présence de ce flag fera apparaitre le tabulateur de création des grands livres dans l'enregistrement comptable qui utilisera cette cause: le paramétrage de ce flag est donc conseillé pour tous les enregistrements du type TVA et en général pour pouvoir gérer l'échéancier clients/fournisseurs. Le flag peut être établi aussi pour les causes qui relèvent un paiement avancé: en ce cas dans l'ouverture sera ouverte un compte de signe contraire à compenser successivement avec les comptes qu'on créera au moment de le relevé comptable du document fiscal successif. |
| Dét. mouv. en comptes | Avec ce flag le programme insérera dans les notes des comptes les textes insérés dans le champ 'Détail mouvement' de la ligne de comptabilité d'origine du compte. Le flag est actif seul au moment que le précendent 'Ouverture des comptes' a été établi. |
| Ouverture pour chaque ligne mouv. | Avec ce flag le programme insérera, un compte pour chaque ligne mouvement, dans lequel est présent un sous-compte avec le flag de gestion  des comptes ouverte établi. Le flag est actif seul au moment que la précedent 'Ouverture des comptes' a été établi. |
| Clôture des comptes | La présence de ce flag fera apparaitre le tabulateur de clôture des grand-livres dans l'enregistrement comptable qui utilisera cette cause. Il se réfère typiquement de tous les enregistrements paiement/encaissement ne TVA pas, mais peut aussi être établi en combinaison avec l'ouverture des comptes et compensation des comptes pour les causes des notes de crédit et en général pour tous les enregistrements qui prévoient une ouverture avec une contextuelle comparaison d'une situation de régression. |
| Utilisation échange historique | Avec ce flag, disponible seul s'y a étè établie la clôture des comptes, l'ERP avancera à fermer les grands livres avec l'échange historique d'ouverture sans aucune relevée automatique des différences de l'échange. |
| Regroup. pai. en livre journal | Avec ce flag, disponible seul s'y a été établie la clôture des comptes, l'ERP avancera à regrouper en un unique mouvement de comptabilité tous les montants de clôture comptes liés à un même sous-compte (en particulier, regroupera les mouvements de même signe et même devise). |
| Excluire par comm. réalisées | Avec ce flag, disponible seul s'y a été établie la clôture des comptes, les clôtures des comptes effectuées avec cette cause comptable ne seront pas pensés valable pour le calcul des commissions réalisé pour les agents avec le calcul du type 'Paiement avvenu'. |
| Réf. doc. compte en paim. | Avec ce flag, disponible seul si a été établie la clôture des comptes, l'ERP avancera à gérer les codes (8) et (9) de relevé des références des clôtures des comptes dans les descriptions de détail des mouvements. |
| Compens. comptes | Avec ce flag, disponible seul s'y a été établi les deux flag d'ouverture et clôture des comptes, la procédure activera la possibilité d'avancer à une compensation des comptes à l'intérieur de l'enregistrement basé sur cette cause: cette combinaison de flag vient conseillée pour toutes les causes reliées à documents de type note de crédit. |
| Avis compens. | Avec ce flag s'active, à l'enregistrement de l'enregistrement comptable, un contrôle qui avis l'utilisateur sur la présence de comptes à compenser. |
| Regr. comptes | Le flag active la gestion des regroupements des comptes au contraire que la gestion standard à ouverture/clôture des comptes, à travers un tabulateur spécifique de relevé dans l'enregistrement comptable. |
| Regr. comptes – type paiement | Il est la typologie de paiement à assigner aux mouvements de regroupements des comptes relevés avec cette cause. |
| Commandes | La présence de ce flag fera apparaitre le tabulateur de gestion de la valorisation des commandes dans les enregistrements comptables. |
| Centres de coût | La présence de ce flag fera apparaitre le tabulateur de gestion de la valorisation des centres de coût dans les enregistrements comptables. |
| Centres de profit | La présence de ce flag fera apparaitre le tabulateur de gestion de la valorisation des centres de profit dans les enregistrements comptables. |
| Gestion véhicule | Le flag visualisera en comptabilité, dans la fiche analytique, une grille de valorisation des coûts/produits  aux véhicules d'entreprise. |
| Retenue d'acompte | Champ n'utilisé pas: le relevé de la retenue d'acompte vient effectuée automatiquement par la procédure de comptabilisation des paiements du formulaire Receveurs, indépendamment par la présence du flag en objet. |
| Immobilisations | La présence de ce flag fera apparaitre le tabulateur de gestion des fiches immobilisations dans l'enregistrement comptable. |
| Type opération | Il se réfère au type d'opération à proposer par défaut pour les nouveaux mouvements relevés à l'intérieur du fiche immobilisations en comptabilité. |
| Actualisation soldes | Flag établi par défaut. |
| Descr. mouv. en journal et paiements | Avec ce flag la procédure ira à copier la description générale de l'enregistrement en toutes les descriptions  de détail des mouvements  et aussi dans les notes de paiements. |
| Adjudication | Le flag individue les enregistrements qui naissent en adjudication, utilisé pour les récapitulations fiscales. |
| Devise | La présence de ce flag fera apparaitre le champ Devise dans la section du livre-journal. |
| Change devise/date devise | La présence de ce flag fera apparaitre les champs du change et de la date devise dans la section du livre journal. |
| Montant devise | La présence de ce flag fera apparaitre le champ Montant devise dans la section du livre journal. |
| Sous-compte de contrepartie | La présence de ce flag fera apparaitre les champs des sous-comptes de contrepartie dans la section du livre journal. La gestion des champs de contrepartie n'est pas conseillée. |
| Détail du mouvement | La présence de ce flag fera apparaitre le champ du Détail mouvement dans la section du livre journal: on conseille d'établir ce flag pour toutes les causes comptables, en façon de permettre toujours  l'insertion de notes de chaque mouvement comptable. |
| Division | La présence de ce flag fera apparaitre le champ Division déjà à compte de la section TVA, ainsi comme dans la section du livre journal. Avec ce paramétrage sera possible de casser le chargement du même document su plusieurs divisions de la société. |
| Jours banque | La présence de ce flag fera apparaitre le champ de la date devise bancaire dans la section du livre journal: le champ, donc, est conseillée pour toutes les causes comptables qui relèvent mouvements financiers. La gestion de ce champ peut être automatisée sur la base des jours de devises (positifs/négatifs) établie dans le registre des banques pour chaque cause. |
| Numéro progressif | La présence de ce flag fera apparaitre le champ du Numéro ligne dans la section du livre journal: on conseille d'insérer ce flag pour causes particulièrement longues, en façon de permettre à l'utilisateur d'ordonner les records en façon fixe comme dans la cause (p.ex. relevé des salaires). |
| Réf. manuel des comptes | La présence de ce flag fera apparaitre le champ du Réf. manuel du compte dans la section du livre journal. Le champ est indiqué pour relier manuellement les mouvements de comptabilité pour la gestion des comptes. |






