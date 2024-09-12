---
title: Paramètres de calcul des intérêts moratoires
sidebar_position: 3
---

À gauche il est présente une liste de flag de sélection des types de comptes pour lesquels avancer au calcul des taux d'intérêt, au contraire en haut il est présent un champ de filtre pour codes de compte/sous-compte. En dessous de ce on doit établir le type de taux par défaut à appliquer et les flag qui guident la logique de calcul:

**Calculer pour les comptes fermés dans la période**: la procédure ira à vérifier les comptes qui sont devenus fermés à l'intérieur de la gamme de dates établies et seules pour ces ira à calculer la valeur des intérêts, donc pour les paiements partiels ne sera pas contaminé aucun intérêt;

**Calculer pour les paiements de la période**: la procédure ira à individuer les paiements enregistrés à l'intérieur de la gamme de dates et sur ces montants ira à calculer la valeur une intérêts relative: ce paramétrage est celle conseillée. 

Si n'a pas été inséré aucun flag le calcul ira à valoriser les intérêts relatifs aux jours de retard présents dans la gamme de dates établies.

**Type document et type paiement**: ils sont ultérieurs filtres d'individuation des comptes sur lesquels exécuter le calcul des intérêts.

Le bouton radio successif permet de définir le type de taux à utiliser dans le calcul des intérêts:

- calculer les intérêts seuls sur les clients pour lequel a été inséré dans le registre une date d'accord;

- calculer les intérêts sur les clients avec un accord selon les paramétrages de registre, le taux par défaut inséré en haut pour tous les autres;

- calculer les intérêts pour tous les clients selon le taux d'intérêt par défaut en haut.

Un dernier flag, déjà établi par défaut prévoit l'exclusion par les intérêts des comptes payés avec effets du formulaire portefeuille effets: tel paramétrage sert, en particulier, pour les types taux sur lesquels a été établi le calcul aussi à remise, parce que la clôture du compte client vient normalement relevée directement à l'émission de la reu bancaire/droite de change.

La procédure de calcul est formée dans a façon suivante;

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Calcul des intérêts | Le bouton exécute le calcul sur la base des paramètres établis. |






