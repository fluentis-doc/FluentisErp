---
title: Plan des comptes
sidebar_position: 2
---

La codification du plan des comptes prévoit de partir par l'insertion de la liste des groupes du plan des comptes dans la section supérieure du masque: à travers les boutons d'insertion regroupements/groupes il est possible d'insérer nouveaux premiers niveaux o niveaux inférieurs à ce sélectionné, en attribuent à chaque un code alphanumérique univoque, une description (plus une deuxième alternative) et un type compte de référence.

Une fois sélectionné le groupe de niveau plus baisse s'activera, dans la grille en-dessous, la liste des comptes et sous-comptes insérés à l'intérieur de ce. L'insertion d'un nouveau code devra prévoir d'abord de tout le niveau du 'compte' ('grand livre' dans la terminologie comptable) qu'il est identifié par le manque du code de sous-compte: chacun de ces peut être un code alphanumérique de 8 caractères, mais il est conseillé suivre un critère numérique progressif avec uniformité de caractères (p.ex. tous les comptes à 4 caractères, tous les sous-comptes à 3). Le type compte de chaque ligne qui vient insérée sera proposé comme le type compte du groupe d'appartenance; se réfère de toute façon d'un code proposé que l'utilisateur peut modifier (p.ex. pour insérer les fonds d'amortissement directement à l'intérieur de la section patrimoine actif).

Les comptes NE peuvent PAS être reliés aux types compte de registre: seuls les sous-comptes à leur intérieur pourront avoir un détail de registre relié. Les sous-comptes de registre, en outre, peuvent être insérés et modifiés seuls par la gestion des registres contacts, présent toujours à l'intérieur du menu 'Struments' - 'Registres'. Enfin, les sous-comptes de type "comptes d'ordre' peurrent être insérés seul à l'intérieur de comptes à leur fois de type d'ordre.



En allant à lire dans les détails les diverses colonnes présentes dans la liste, sont possibles voir:

**Date d'insertion**: il est la date de création du compte/sous-compte;

**Date dernier modification**: il est la date de dernière modification du code de compte/sous-compte, actualisée automatiquement par l'ERP;

**Date de fine validité**: il sert pour bloquer l'utilisation du sous-compte en nouvels enregistrements comptables (à partir par la date insérée), en maintenant la visibilité des mouvements précédemment insérés;

**Ouverture des comptes**: le flag va à interagir avec le contrôle d'équilibrage des mouvements comptables avec la donnée des comptes. Pour n'importe quel sous-compte, en effet, est possible de créer manuellement un compte comptable, mais seul pour ceux qui ont établi ce flag l'ERP ira à vérifier si ce vient effectué ou non, en bloquante ou non l'enregistrement de l'enregistrement selon des paramétrages de la cause comptable de référence;

**Ultérieure description**: deuxième description, normalement n'utilisée pas;

**Notes**: notes du sous-compte, normalement n'utilisé pas;

**Comptes de régularisation actifs/passifs**: ces sous-comptes permettent de relier sur chaque sous-compte les codes de comptes de régularisation spécifiques à utiliser en voie prioritaire au moment de le relevé intermédiaire ou de bilan des écritures de rectification/intégration. S'il n'est pas présent ici, seront utilisés les comptes par défaut insérés dans les paramètres de comptabilité générale;

**Voix frais**: champ d'assignation d'une voix frais. Actuellement il vient utilisé pour l'exportation du plan des comptes/échéancier sur le DocFinance au fin statistique; selon l'utilisation est comme filtre de recherche pour la procédure d'Écritures à diff. Budget' du formulaire Clôtures intermédiaires. Il peut avoir en outre valeurs statistique dans les cubes des données de la Business Intelligence de la zone d'administration;

**Type périodicité budget**: il sert pour relier un critère de répartition annuel spécifique de la donnée de budget annuelle.

Il n'est pas possible de supprimer un groupe qui ait à son intérieur un sous-groupe, ainsi comme si ce a comptes/sous-comptes: à la même façon il n'est pas possible de supprimer un compte qui ait à son intérieur sous-comptes, et même pas éliminer les codes utilisés en n'importe quel tableau du gestionnel.

**Suggestions pour la codification**:

- identifier de toute d'abord quels sont les deux niveaux de détail maximums: ces identifièrent les sous-comptes et les comptes à insérer e par ces, à reculons, seront possibles de regrouper à niveau supérieur;

- faire attention aux codes des registres clients/fournisseurs: en beaucoup de logiciens, en effet, le grand livre clients est déjà un sous-compte dont le registre spécifique un niveau ultérieur NE visible PAS dans le plan des comptes. L'ERP, au contraire, prévoit directement sur le plan des comptes les niveaux de détail du registre;

- éviter les codes alphanumériques: ce pour raisons d'ordonnance;

- maintenir le même numéro de caractères pour tous les comptes et un même numéro pour les sous-comptes (avec l'exception des sous-comptes de registre, pour lesquels les codes de sous-comptes prévoiront une numérosité certement supérieure): ce mouvement pour raisons d'ordonnance (p.ex. l'ordre alphanumérique des numéros 1, 2, 10 est 1, 10, 2, donc le paramétrage correct doit être 01, 02 et 10);

- limiter le numéro de caractères à ces effectivement nécessaires: n'a aucun sens avoir un code de sous-compte à 8 caractères au moment effectivement à l'intérieur d'un compte ils y iront au maximum peus dizaines de sous-comptes (pour actif/passif/coût/produits normalement 3-4 caractères sont plus que suffisants). Pour les comptables est certainement différent taper 4 4 caractères que 8 8 sur chaque ligne de comptabilité. Successivement, ces codes seront à ramener en toutes les impressions et les feuilles physiquement ne sont pas infinies;

- il peut-être utile différencier le compte ou le sous-compte avec un caractère seul majuscule: ce pour avoir à vue une indication qu'on est en train de sélectionner un plutôt que l'outre, surtout en case d'homonyme;

- ne 'salir' pas le plan des comptes avec complexe détails qui ont le seul bût d'obtenir données 'statistiques': existent les centres de coût, de profit, la comptabilité analytique, la Business Intelligence pour ces fins.

**Paramétrages centres de coût e de profit**

À l'intérieur du plan des comptes est possible d'assigner à chaque sous-compte une structure de valorisation pourcentage à centre de coût/profit. L'ERP ira après à proposer automatiquement cette valorisation (pour les seuls sous-comptes économiques), en laissant à l'utilisateur la possibilité d'en modifier les valeurs manuellement où nécessaire.

La liaison vient effectué simplement en sélectionnant le sous-compte de référence et en insérant la liste des CDC/CDP dans deux grilles: est possible de relier la valorisation sur les divisions d'entreprise différentes, mais normalement la division ne vient pas compilée. Il n'y a aucun contrôle que la somme des pourcentages insérés soit égale au 100%.

On ne rappele, an outre que:

- la valorisation en comptabilité dépende par la présence, dans la cause comptable utilisée, des flag relatifs aux CDC/CDP;

- il est possible de prévoir une copie de valorisation: pour exemple, si un sous-compte de coût a soit CDC que CDP reliés, la cause peut prévoir mouvement les deux et avec l'option 'Gestion séparée CDC/CDP' seront les deux valorisés, autrement seront valorisés les seuls CDC pour les coûts (et en cas de sous-comptes de produit seront valorisés les CDP).

Il y a ultérieurs points de codification des centres de coût/profit: registers clients/fournisseurs/agents, registres articles, entrepôts et immobilisations. La priorité de valorisation vient définie normalement dans les paramètres de gestion de chaque formulaire.

**Paramétrages sous-comptes automatiques**

Pour chaque sous-compte il est possible d'assigner une liste des sous-comptes à valoriser automatiquement en cas de causes automatiques. En particulier la logique de fonctionnement prévoit:

- que le sous-compte soit utilisé dans la section TVA de l'enregistrement:

- que l'enregistrement se base sur une cause que prévoit une cause automatique;

- à ces conditions l'ERP ira à ajouter, dans l'enregistrement automatique, les sous-comptes automatiques qui sont reliés aux sous-comptes;

- la valorisation de ces sous-comptes utilisera le type montant de la section 'sous-comptes automatiques' mais l'en appliquant à la ligne TVA d'origine.

Exemple d'utilisation peut être l'enregistrement de sous-comptes pour lesquels doivent être valorisé en débit/crédit comptes d'ordre.

- la valorizzazione di questi sottoconti utilizzerà il tipo importo della sezione ‘sottoconti automatici' ma applicandola alla riga IVA d'origine.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:

 



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher comptes | Il exécute la recherche des comptes/sous-comptes à l'intérieur du groupe sélectionné. |
| Nouveau compte | Établir le curseur à l'insertion d'un nouveau compte/sous-compte à l'intérieur du groupe sélectionné. |
| Déplacement comptes | Ouvrir un masque pour déplacer un compte par un groupe à un groupe. |
| Ouvrir les registres | Ouvrir le registre associée au sous-compte client/fournisseur/banque/agent sélectionné. |
| Supprimer le compte | Il supprime le compte/sous-compte sélectionné. Il n'est pas possible de supprimer un compte/sous-compte utilisé: établir une date de fine validité pour le rendre invisible à l'utilisateur. |
| Chercher en bas | Chercher le groupe en bas respect au groupe sélectionné. |
| Chercher en haut | Chercher le groupe en haut respect au groupe sélectionné. |
| Nouveau regroupement | Il exécute l'insertion d'un nouveau groupe 'racine' de la structure du plan des comptes, indépendamment du groupe sélectionné. |
| Nouveau groupe | Il exécute l'insertion d'un groupe à l'intérieur de ce sélectionné. Il n'est pas possible insérer groupes à l'intérieur d'un qui a déjà comptes/sous-comptes associés. |
| Supprimer groupe | Il exécute la supprimation du groupe sélectionné. |
| Augmenter | Augmenter la tabulation de l'arbre. |
| Baisser | Baisser la tabulation de l'arbre. |
| Exploser l'arbre | Ouvrir les niveaux en-dessous au groupe sélectionné. |
| Imploser l'arbre | Fermer les niveaux en-dessous au groupe sélectionné. |
| Nouveau centre de coût | Établir le curseur à l'insertion d'un nouveau centre de coût pour le compte/sous-compte sélectionné. |
| Supprimer le centre de coût | Exécuter la supprimation du centre de coût sélectionné. |
| Nouveau centre de profit | Établir le curseur à l'insertion d'un nouveau centre de profit pour le compte/sous-compte sélectionné. |
| Supprimer le centre de profit | Exécuter la supprimation du centre de profit sélectionné. |
| Aperçu avant impression | Exécuter l'aperçu avant impression du groupe sélectionné. Dans la Ribbon Bar il y a une voix alternative pour imprimer tout le plan des comptes. |
| Impression | Exécuter l'impression du groupe sélectionné. Dans la Ribbon Bar il y a la voix alternative pour imprimer tout le plan des comptes. |






