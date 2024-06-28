---
title: En-tête et description des mouvements totals
sidebar_position: 1
---

Il est possible de voir des varies champs présents dans l'en-tête de l'enregistrement, dans l'ordre de chargement.

**Date d'enregistrement**: en un nouvel enregistrement cette date vient établie comme date d'aujourd'hui du système, mais il peut être déplacée en avant ou en arrière dans le temps seul si l'ordre chronologique des protocoles TVA et les éventuelles périodes imprimées en définitive et la présence des paramètres. L'importance de cette date est fondamentale parce qu'il n'existe pas la nécessité d'avancer à un 'Change d'exercice': à partir de la date d'enregistrement l'ERP ira à rechercher l'année des paramètres de comptabilité de référence (en individuant à l'intérieur de quelle gamme de date d'exercice s'y trouve) et par ce motif ira à reprendre les autres gammes de date de contrôle (date d'exercice en ligne et date période en ligne). Cette date est cette de base de l'impression du livre journal et des relevés des comptes comptables. En ce cas en appuyant le bouton de création d'un 'Nouvel enregistrement' il est possible d'établir les paramètres de l'utilisateur en façon que ce champ soit proposé aussi en ce nouveau;

**Numéro d'enregistrement**: il est un compteur quotidien des enregistrements; l'univocité de l'enregistrement vient déterminée toujours par la combinaison 'Date enregistrement' 'Numéro enregistrement'. Le choix d'un compteur quotidien a été effectuée pour donner la maximale liberté à l'utilisateur d'enregistrer plus date. Ce numéro d'enregistrement vient géré automatiquement par la procédure: en particulier, au moment de l'enregistrement il vient attribué le numéro définitif correct, en récupérant éventuellement un trou de numérotation à la date d'enregistrement relatif. Supprimer un enregistrement à la date X, en effet, laissera un trou dans la numérotation de cette date: seul en intervenant en insertion/modification d'une série des enregistrements de cette date le numéro sera récupéré. En cas d'enregistrement provisoire ce numéro ira en progression négativeà partir du numéro -1000, en façon de rendre visible par l'utilisateur que se réfère d'un enregistrement de cet état: les rapports et les recherches comptables sont établis pour filtrer par défaut seul dans les enregistrements définitifs;

**Date d'exercice**: il est la date de référence pour le bilan d'exercice: normalement est toujours égal à la date d'enregistrement, sauf que pour les écritures de redressement de bilan et les relatives clôtures/ouvertures des comptes, qu'ils peuvent être datées aussi en juin comme date enregistrement mais sera comme 31/12 - 01/01 comme date d'exercice. Attention: cette date NE peut PAS être utilisée pour relever les factures à recevoir de fin an. On conseille de la laisser toujours égale à la date d'enregistrement: en comptabilité il y a des impressions qui travaillent pour la date d'enregistrement, outres pour la date d'exercice, outre qui donne liberté à l'utilisateur de filtrer pour les deux, clairement on obtiendra des résultats différents selon des filtres appliqués. Dans les paramètres de gestion d'utilisateur est possible établir que cette date soit alignée automatiquement respect à la date d'enregistrement;

**Sous-compte titulaire de l'enregistrement**: ce champ est obligatoire seul pour les enregistrements TVA, parce qu'il est lié au registre client/fournisseur titulaire du document enregistré. Ce champ,normalement, il n'est pas compilé en cas d'enregistrements de paiement/encaissement, parce que normalement dans le même enregistrement s'effectuent N paiements/encaissements sur objets différents et s'il vient utilisé comme filtre des comptes ouverts dans le dossier 'Paiements'. S'est appuyé le bouton de création d'un 'Nouvel enregistrement' par cette en gestion il est possible d'établir les paramètres d'utilisateur en façon que ce champ soit proposé aussi en ce nouveau. La cause comptable, enfin, peut prévoir un contrôle de cohérence (dans la version 'soft' avis comme bloque) entre le type compté inséré en ce point et quand prévu en cause: le remplacement vient autorisée selon les paramétrages de comptabilité, section liste des comptes clients/fournisseurs;

**Cause**: ce champ est obligatoire: chaque enregistrement si base en effet su une cause de référence qui ne régulie pas les caractéristiques et le fonctionnement. Ce champ n'est pas modifiable une fois enregistrée l'enregistrement (clairement seront bloqués autres champs dans le cas où a été imprimé en définitive le registre TVA ou le journal ou a été effectuée la clôture automatique des comptes): si la cause est errée il faut nécessairement supprimer et réinsérer l'enregistrement avec le code correct. Si est appuyé le bouton de création d'un 'Nouvel enregistrement' par cet en gestion est possible d'établir les paramètres d'utilisateurs en façon que ce champ soit proposé aussi en cette nouvelle;

**Registre TVA**: il vient ramené par la cause de comptabilité sélectionnée: il peut être modifié manuellement par l'utilisateur mais l'opération est déconseillée (meilleur aller à coder une nouvelle cause spécifique dans le deuxième registre TVA);

**Protocole TVA**: il est un champ numérique qui vient géré automatiquement par la procédure pour chaque registre: à l'ouverture du masque sera proposé le max protocole 1 pour le registre établi, après l'enregistrement viendra confirmé ou non selon s'ont été effectués autres enregistrements pour ce registre ou protocoles TVA à récupérer (pour la récupération des protocoles: la récupération change selon si dans la cause est insérée ou non le bloc d'enregistrement avec numérotation pas progressive ou non, parce que avec le bloc sera récupéré un protocole libre à la même date enregistrement, sans le bloque sera proposé aussi un protocole pas valable pour cette date, avec les relatifs messages d'avertissement à l'utilisateur). Le champ du protocole vient désactivé en cas d'enregistrement provisoire;

**Type document**: il vient proposé par la procédure sur la base de la valeur établie dans les causes de comptabilité générale: il est modifiable, mais il se réfère seul à une modification normalement pas nécessaire (typiquement il faut spécifier les documents des enregistrements TVA, mais cet est déjà dans la cause, au contraire tous les autres mouvements auront toujours un document de type 'Générique');

**Date document**: il est un champ obligatoire ou non selon les paramétrages des causes de comptabilité (flag date document dans le deuxième tab): cette date ne peut pas être supérieur à la date d'enregistrement et doit être à l'intérieur de la gamme de dates de validité relative au période en ligne pour l'exercice de référence de l'enregistrement. S'il est appuyé le bouton de création d'un 'Nouvel enregistrement' par cette gestion est possible d'établir les paramètres d'utilisateur en façon que ce champ soit proposé aussi en ce nouveau;

**Numéro document**: il est un champ alphanumérique de 20 caractères: selon les paramétrages de la cause vient bloqué l'insertion du même numéro, de la même année (prise par la date document), du même type (champ type document), pour le même code inséré dans le champ sous-compte de l'en-tête de l'enregistrement (ce bloc est inséré par défaut sur chaque cause comptable, mais peut être désactivé). S'il y a le même numéro/année/sous-compte mais le type est différent, il vient au contraire rendu un semple message d'avertissement à l'utilisateur. Dans la même façon, le message d'avertissement vient rendu aussi la même référence est enregistréeen un enregistrement provisoire;

**Champ commande**: il est active seule si la cause de comptabilité prévoit la gestion des commandes: cette commande est celle de référence pour tout l'enregistrement, mais sera possible réattribuer les valeurs à l'intérieur du dossier 'Commandes' de la même. La rédaction du champ prévoit d'utiliser toujours l'aide commandes pour filtrer ces actives dans les commandes de vente de la zone de vente;

**Devise**: il est proposée en vue prioritaire par le registre titulaire de l'enregistrement, en alternative par la devise de la société: il peut-être de toute façon modifiée de fois en fois. Une fois enregistré l'enregistrement le champ ne peut plus être modifiable;

**Date devise**: il est la date de référence du change, ainsi comme inséré dans le tableau Changes devise: la procédure ira à lire en ce tableau la dernière date insérée précédente à cette. Dans les paramètres de gestion d'utilisateur cette date peut être établie comme date enregistrement (défaut) ou comme date document. Il est prévu un paramètre utilisateur d'avis quand n'est pas établi un change à la date de l'enregistrement (et donc vient utilisé un change précédent);

**Change**: il est la valeur du change ainsi comme inséré dans le tableau change devises: il se réfère au valeur INVERSE respect à ce que normalement si lit dans les champs devise (il y a cette situation parce que la procédure a maintenu la logique 'incertain pour incertain' qui derive par la gestion Lire - combien de Lires pour une unité de la deuxième devise - au contraire l'Euro a changes 'certain pour incertain' - avec 1 euro combien d'unité on obtient par la deuxième devise-). Cette valeur peut être forcée manuellement par l'utilisateur (di typique: causes de paiement/encaissement en devise, la valeur du change appliqué par la banque ne sera jamais cet officiel dans les changes internationaux);

**Total devise/Total document**: ils sont les champs liés entre leurs à travers le change, pour lequel dans les enregistrements en Euro sera déférent écrire le montant en un ou autre. La cause comptable peut prévoir que ces soient actualisés automatiquement au varié des données insérées à l'intérieur de la grille TVA, normalement seul en augmentation mais aussi en diminution se déplacé en cause. L'enregistrement de l'enregistrement peut être bloqué si ce montant n'est pas égal aux données TVA de l'enregistrement;

**Total montant**: il vient actualisé toujours automatiquement par la procédure, ne peut pas être inséré manullement.

Sur la base de l'enregistrement comptable, dans le dossier Enregistration, il est présente la description de l'enregistrement comptable: il se réfère à une note qui est possible d'établir à l'intérieur de la cause de comptabilité à travers l'utilisation des codes numériques (1) (2)...(10) (les code (8) et (9) s'utilisent seul dans les descriptions de détail des sous-compte dans la section du livre journal). Avec un double click dans le champ il est possible d'ouvrir une recherche à l'intérieur des notes codées (procédure présent à l'intérieur des 'Struments' - 'Utilité'): la modification manuel de cette description sera éventuellement réinitialisée dans la confirmation par l'utilisateur une fois modifié un des champs gérés automatiquement dans les notes.

Sur la base du masque sont présents ultérieurs champs de récapitulation des données TVA et de l'enregistrement: ils méritent en particulier une annotation les champs dédiés à la visualisation du déséquilibre de l'enregistrement, pas normalement permise (mais qu'il est possible d'habiliter dans les paramétrages de la cause en utilisation). Le déséquilibre sera proposé comme montant dans les nouvelles lignes de comptabilité qui seront insérées manuellement dans l'enregistrement.

La procédure de création enregistrement comptable est formée dans la façon suivante:

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'enregistrement. |
| Nouvel enregistrement | Bouton pour créer un nouvel enregistrement. |
| Paramètres d'insertion | Il se réfère aux paramètres d'insertion de la première livre journal. |
| Ouvrir le registre | Bouton pour rappeler, la gestion registre du sous-compte sélectionné, ou en absence, la recherche d'un autre registre. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document Manager | Bouton pour la liaison à la gestion documentale. |






