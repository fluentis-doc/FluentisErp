---
title: Détail
sidebar_position: 1
---

On entre maintenant dans le dossier Détail: l'état de l'immobilisation vient géré automatiquement par l'ERP sur la base des opérations reliées à l'immobilisation et ne va pas forcé. La date de début activité, proposée comme date d'aujourd'hui, est la date dans lequel l'immobilisation est effectivement entrée en utilisation dans la société: seule à partir de cette date sera possible d'amortir l'immobilisation. La date de fine activité normalement ne va pas établie seul en cas particuliers pour bloquer le calcul de l'amortissement et pas visualiser plus l'immobilisation à livre immobilisations: dans la gestion normale, en effet, à l'achèvement de l'amortissement restant l'immobilisation ne sera de toute façon plus amorti. Les dates successives relatives aux garanties n'ont pas une gestion spécifique: il y a des champs à disposition pour mémoriser ces éléments.

Dans le champ **Immobilisations** il vient ramené automatiquement le sous-compte patrimonial de référence pour la catégorie immobilisation sélectionnée; le successif code du fournisseur ne vient pas géré automatiquement par le programme, parce que les fournisseurs et les clients de référence des diverses opérations seront indiqués spécifiquement à l'intérieur de ces. Le sous-compte industriel fa référence en détail du plan des comptes industriel, normalement pas visualisé.

**Emplacement** et **Matricule** sont des champs textuels libres, où annoter l'emplacement et la matricule de l'immobilisation; le code employé peut permettre de mémoriser le sujet qui a en utilisation l'immobilisation.

Selon les paramétrages des paramètres, est possible de voir un pourcentage d'amortissement civile 'personalisée' pour chaque immobilisation, à utiliser en voie priorité respect à celle de la catégorie d'appartenance comme aussi l'unité de mesure pour les quantités valorisées dans le dossier immobilisation.

Dans le champ **Déductibilité** est possible d'associer à chaque immobilisation seul type prioritaire de déductibilité fiscale des propres amortissements.

La section des **Centres de coût/commandes** de vente s'active seule une fois enregistré le registre de l'immobilisation: il permet d'attribuer une structure pourcentage de valorisation automatique des amortissements aux divers centres de coût/commandes de vente définies dans la société.



Ils sont aussi présents une série de cases à cocher:

Par défaut de l'immobilisation **en utilisation** (si le flag n'est pas présent, l'immobilisation ne pourra pas être amorti), l'état d'immobilisation **utilisé** (si le flag est établi, l'amortissement avancé sera appliqué seule la première année d'achat et le flag **A** **mortissement** ** premier année** n'aura pas effect, donc les pourcentages d'application des amortissements de la première année ne seront pas réduits);

**En maintenance** signifie qu'il faut compter dans l'impression maintenance l'immobilisation;

**Cessé** est un flag actif seul pour catégorie immobilisations immatérielles et sert à exclure l'impression à livre immobilisation si la valeur patrimoniale a été ristoruné par le bilan (amortissement direct en compte et pas à fonds);

**Amort. total** permet d'attribuer à l'immobilisation l'amortissement au 100% directement aux premier années: à l'enregistrement de l'immobilisation ERP sera effectuée une vérification de l'exactitude de ce paramétrage en relation aux limites établies en catégorie immobilisation; sera visible l'état d'immobilisation imprimé ou non, qui indiquera la pas modificabilité des références de l'en-tête de l'immobilisation si s'a déjà été inséré en une impression définitive du livre immobilisations amorties.

Pour conclure, le flag **Mesurage** ** du revenu** et **Études de secteur** servent pour identifier les immobilisations à considérer pour ces accomplissements fiscales.



RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Il enregistre l'immobilisation, obligatoire pour assigner un numéro à l'immobilisation et activer les divers tab. |
| Documents | Gestion du stockage de document associée au masque en utilisation. |






