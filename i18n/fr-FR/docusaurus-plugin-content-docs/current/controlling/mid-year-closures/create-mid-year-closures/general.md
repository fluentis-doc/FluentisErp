---
title: Général
sidebar_position: 2
---

Flag **Sélectionner les données par division**: s'établi, le champ successif de division devient un filtre avec laquelle prélever par la comptabilité les seules données de la division établie.

**Exclure la cause**: dans le cas d'un prélèvement des données d'une entière année comptable déjà fermé, permet d'exclure les enregistrements de clôture des comptes et donc obtenir les données du bilan d'exercice.

**A** - Section **Reprise ** **des valeurs patrimoniales**

Le flag de **Reprise des valeurs de nature patrimonial**, présent pardéfaut, valide la section au-dessous de filtre. Avec cette option, l'ERP ira à insérer dans la clôture intermédiaire aussi les soldes des sous-comptes reliés aux types de compte qui présentent le flag **Patrimonial actif** ou **Patrimonial passif**.

La section des filtres par la date d'enregistrement et date d'exercice en dessous permet de définir les gammes de dates qui seront utilisés pour récupérer les données patrimoniales par les enregistrements de la période établie (la référence est aux homonymes des champs d'en-tête des enregistrements, il n'y a pas des gammes d'exercices économiques insérés dans les lignes de comptabilité, voir le fichier CH_1.4_Raffronto_Periodo_Budget.doc). En particulier, au cas où n'aient encore été enregistrées en comptabilité la clôture et la réoverture des comptes, la date de début peut être antidatée à la date de la dernière ouverture des comptes relevée en comptabilité, de sorte d'avoir une donnée patrimonial correct. Il faut considérer, qu'en ce cas, on retrouvera une différence entre le solde patrimonial et le solde économique de l'exércice en cours: telle différence, visualisé comme déséquilibre de l'enregistrement de clôture intermédiaire, correspondra au bénéfice/perte de l'exercice précédent pas encore relevé dans la clôture/réouverture des comptes de comptabilité générale.

Dans le cas que la clôture ne prévoit pas la reprise patrimoniale, de nouveau l'enregistrement de clôture intermédiaire (de la seule section économique) déséquilibrera par le bénéfice/perte de la période.

**B** - Section** Reprise des valeurs économiques**

Le flag de **Reprise des valeurs de nature économique**, présent pardéfaut, valide la section au-dessous de filtre. Avec cette option, l'ERP ira à insérer dans la clôture intermédiaire aussi les soldes des sous-comptes reliés aux types de compte qui présentent le flag **Économique** ** actif** ou **Économique** ** passif**.

La section des filtres par la date d'enregistrement, compétence et document en dessous permet de définir les gammes de dates qui seront utilisés pour récupérer les données patrimoniales par les enregistrements de la période établie (la référence est aux homonymes des champs d'en-tête des enregistrements, il n'y a pas des gammes d'exercices économiques insérés dans les lignes de comptabilité, voir le fichier CH_1.4_Raffronto_Periodo_Budget.doc). En particulier, la gamme de date document, ne proposé pas par défaut, normalement ne vient pas établie: pas tous les enregistrements comptables, en effet, présentent les dates documents en au cas où n'ait encore été enregistrée en en-tête (habituellement seuls les enregistrements de factures d'achat/vente).

Dans le cas que la clôture ne prévoit pas la reprise économique, l'enregistrement de clôture intermédiaire (de la seule section patrimonial) déséquilibrera par le bénéfice/perte de la période.

**C** - Sections **Données** ** de la clôture des comptes**

La section présente les éléments d'identification de cette simulation de bilan.

**Cause de la clôture des comptes**: il est la cause à utiliser par créer l'enregistrement de reprise des soldes. On rappelle que ce cause doit avoir le flag CDC/CDP/commandes afin que ces éléments soient considérés dans la même clôture intermédiaire;

**Date clôture**: il est la date de création de cette simulation, qui sera utilisée comme date de l'enregistrement extra-comptable de la même clôture et par les autres enregistrements. N'a aucune valeur particulière;

**Numéro clôture**: il est le numéro progressif de la clôture, proposé en automatique par le système;

**Description** ** de la clôture**: il est la description qui apparaîtra en tous les masques du formulaire Clôtures intermédiaires, en ce du bilanet du budget. On conseille de décrire clairement les gammes de dates établies pour pouvoir comprendre la période simulée, parce que les filtres établis dans le masque ne seront pas visibles dans les phases successives;

**Paramètres** ** de comptabilité relevés par l'exercice comptable du ...**: il faut associer l'année comptable de référence, par reprendre par les paramètres de comptabilité les sous-comptes et les paramétrages standard (la clôture pourra impliquer plusieursexercices, il doit y avoir un année 'prioritaire').

**D** - Section **Comparaison de la période budget**

La section est d'une importance fondamentale par la gamme de dates d'exercice économique: voit en détail la signification des divers champs présents.

Période budget: en ce champ s'établit le type de périodicité parlequel le sélectionner le détail de la période d'exercice;

**Détail** ** période d'exercice**: les valeurs mises en évidencedépendent des champs précédents et permettent de valoriser la successive gamme de dates d'exercice. Si les deux sont établis, la clôture intermédiaire qu'on va à créer sera considérée par le logiciel comme bilan par pouvoir utiliser (par tous les budgets qui présentent la même gamme de date d'exercice) dans l'analyse des écartements du formulaire budget, après la 'Reprise des données' (vérifier la documentation du formulaire budget);

**Compétence économique du** **/au**: cette gamme de dates est obligatoire par pouvoir avancer à la création de la clôture intermédiaire. Indique la période d'exercice économique qui intéresse: sera donc pris comme référence par le calcul des écritures de rectification/intégration et par le calcul de la reprise des amortissements de la période. Par exemplifier, s'ont été reprisles enregistrements du premier semestre de l'exercice X et se sont insérés le même semestre comme gamme de dates d'exercice économique, avec les procédures de rectification, le programme vérifiera si sont présentes des lignes de comptabilité avec la gamme de compétence au-dehors de ce semestre aux fins d'en relever le réescompte relatif.

**E** - Section **Options clôture**

**Regroupement sous-comptes**: n'établir ces flag, n'est pas utilisé pour le moment (le formulaire Bilan, ainsi comme le rapport du Bilan intermédiaire, permet de valoriser directement le solde à niveau des comptes en excluant les registres, sans la nécessité d'aucun regroupement en phase d'enregistrement de clôture);

**Clôture** ** pour commande**: avec ce flag, le programme ira à créer un enregistrement de clôture intermédiaire par chaque commande de vente qui a été valorisée dans les enregistrements comptables dede filtre établi. On rappelle que la cause de la clôture intermédiaire doit prévoir la gestion des commandes par en gérer les données;

**Considérer** ** les enregistrements provisoires**: avec ce flag, la reprise des données de comptabilité ira à considérer aussi les enregistrements comptables avec l'état 'provisoires';

**Valeurs calculées**: cette section propose les totals patrimoniaux/économiques calculés par le premier enregistrement de clôture effectué. (La référence est au flag 'Clôture par commande' qui va à créer N enregistrements de clôture, donc cette section visualisera seulement les données par la première commande individuée dans la période).






