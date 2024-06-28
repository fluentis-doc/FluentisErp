---
title: Insertion des causes de comptabilité générale
sidebar_position: 1
---

Les causes comptables sont formées par un en-tête et par trois sections dénommées respectivement détail attribue, détail enregistrement et paramètres qu'on parlera ensuite.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Cause | Un code alphanumérique de caractères qui doit être univoque. |
| Description cause | Description de la cause. |
| Type mouvement | Le type de mouvement de l'enregistrement. Se réfère à un tableau fix intérieur, il n'est pas disponible en modification à l'utilisateur, que subdivise les causes ne TVA pas par les diverses typologies de mouvement TVA. |
| Type document | Le tableau est préchargée mais peut-être modifiée/intégrée par l'utilisateur. En ce tableau, en particulier, sont d'intérêt les lignes qui prévoient les flag ‘Crédit' et ‘Note de variation': pour le ‘Credit', en effet, la procédure contrôle que la section TVA soit valorisée avec montants négatifs (un contrôle de cohérence des signes, en outre, vient effectuée sur la comptabilisation des notes de crédit par la zone de vente/achat: signifie que ne peuvent pas être présentes lignes avec montants positifs et au même temps autres pour un outre sous-compte avec montants négatifs): pour la ‘Note de variation' la procédure ira à activer, toujours dans la section TVA de l'enregistrement, un flag d'identification des lignes relatives aux notes de variation et une date de référence. |
| Registre encaissements et paiements | Identifier les causes à ramener dans le registre encaissements/paiements de comptabilité simplifiée professionnelles. |
| Professionnels | Identifier une cause pour la comptabilité des professionnels. |
| Date fine validité | Il est possible de bloquer l'utilisation d'une cause comptable à partir de cette date. Il ne sera pas visible dans la liste des causes de la date successive. |






