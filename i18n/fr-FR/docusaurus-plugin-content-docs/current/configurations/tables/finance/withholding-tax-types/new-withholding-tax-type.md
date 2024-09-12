---
title: Nouveau
sidebar_position: 2
---



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Code retenue | Code alphanumérique de 5 caractères d'identification de la retenue: normalement il se réfère au code tribut ministériel. |
| Description retenue | Description du code retenue. |
| Tableau en Mod. 770 | Le menu déroulant 'Tableau en modèle 770' est un champ obligatoire: le modèle 770, de tout façon, n'est pas géré dans la procédure. |
| Code tribut | Le code tribut se réfère au tableau des codes tribut: cette est précompilé au moment de l'installation et contient la liste complète des codes tribut  prévus pour le modèle F24. |
| Cause de comptabilité | Le champ cause prévoit le paramétrage obligatoire pour enregistrer la rémunération en comptabilité: il se réfère normalement à une cause TVA, type un normal achat en Italie. Est de toute façon prévue aussi la valorisation des causes sans TVA pour gérer les cas de gestion retenues à collaborateurs sporadiques ne titulaires pas de compte TVA. |
| Code de pai. en mod. 770 | Code de paiement en 770 est un champ n'obligatoire pas et n'utilisé pas. |
| Types comptes | Le choix est entre comptes nets et comptes brut. La distinction est relative à la création des échéances au net ou au brut de tous les tributs payés par le receveur: le paramétrage Standard prévoit les comptes nets, aux fins d'avoir un échéancier avec l'effectif montant à payer au professionnel, en ce cas la cause comptable de référence ne devra pas avoir le bloc à l'enregistrement des mouvements déséquilibrés avec les comptes. |
| Groupes comptes | Flag pour activer la gestion des groupes comptes. |
| Type retenue | Le type retenue prévoit l'option à titre d'acompte ou à titre d'impôt: la distinction n'a actuellement aucun relevé sur l'opérativité du formulaire. |
| Débit Enasarco payé par l'agent | Le champ est dédié au paramétrage du sous-compte de débit sur lequel sera relevé le montant payé par l'agent. Tel sous-compte sera utilisé dans la comptabilisation des paiements ou dans la comptabilisation Enasarco selon s'a été établie la gestion payée par la maison ou non. Le champ est obligatoire s'est établi le champ successif de la catégorie agent. |
| Catégorie agent | La Catégorie agent est la typologie d'agent par lequel individuer les pourcentages de contribution à l'institut Enasarco. Si la catégorie a été établie il faudra insérer aussi le précédent sous-compte de débit vers l'Enasarco. Le champ est obligatoire seul si a été insérée la gestion de l'Enasarco payé par la maison. |
| Compt. Enasarco payé pas la maison | Le flag de 'Comptabilisaiton Enasarco payé par la maison' active le paramétrage des deux sous-comptes successifs et rend obligatoire l'assignation d'une catégorie agente et du sous-compte de débit pour la quote-partie payée par l'agent. L'activation de ce flag activera le relevé comptable des contributions Enasarco avec la procédure de comptabilisation homonyme. L'option est conseillée aux fins de rendre autonome telle relevée, étant donné que la contribution Enasarco va relevé pour exercice et pas pour caisse comme la retenue d'acompte. |
| Coût payé par la maison | Sous-compte à attribuer au relevé comptable de coût Enasarco payé par la maison. |
| Débit payé par la maison | Sous-compte à attribuer au relevé comptable de débit Enasarco payé par la maison. |
| Débit v/ Trésor public | Le sous-compte de débit v/ Trésor public mémorise le sous-compte de débit à utiliser pour relever le débit relatif à la retenue d'acompte. Ce sous-compte vient utilisé dans la procédure de comptabilisation paiements (avec la comptabilisation des paiements vient relevé le débit de la retenue à verser, qui est un tribut qui suive la logique de caisse): au moment que le paiement reguard les rémunérations des receveurs, en effet, il faut intégrer l'enregistrement avec les mouvements relatifs à la retenue et gérer les tableaux du formulaire pour garantir la possibilité d'obtenir l'impression des certifications retenues. |
| Cause de comptabilité industrielle | Le flag de la cause de comptabilité industrielle active la possibilité de gérer dans la rémunération receveurs les données de comptabilité industrielle. Normalement cette option n'est pas activée. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| % retenue | Pourcentage d'application de la retenue. |
| % imposable | Base de pourcentage d'application de la retenue. |
| % caisse de prévoyance | Pourcentage de caisse de prévoyance. |
| % Rid. Forf. rémunération | Champ n'en utilisation pas. |

La section INPS n'est pas actuellement plus nécessaire: elle permettait d'activer une section tributs ultérieurs à l'intérieur de la rémunération receveurs, pour gérer les tributs INPS. Actuellement cettes rémunérations passent pour le bureau de salariés et donc ne se réfèrent plus au formulaire receveurs.



| RibbonFunction | RibbonMeaning |
| --- | --- |

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'insertion du type retenue. |
| Nouveau | Bouton pour l'insertion d'un nouveau type de retenue. |
| Supprimer | Bouton pour supprimer le type de retenue sur lequel s'est positionné. |






