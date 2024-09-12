---
title: Tab immobilisations
sidebar_position: 7
---

Le tabulateur Immobilisations est dédié à la gestion des biens à utilisation pluriannuelle: ils seront utilisés pour relever les achats, augmentations, aliénations et distributions.

La section supérieure est dédiée à la codification de la nouvelle immobilisation achetée ou à la section de l'immobilisation existe une nouvelle opération à son intérieur: pour insérer une nouvelle immobilisation il est suffisant avancer à compiler manuellement une nouvelle ligne, au contraire, pour sélectionner une immobilisation existent il faut nécessairement utiliser le premier bouton à gauche nomé 'Sélectionner l'immobilisation existant'. Dans le cas d'insertion manuelle l'utilisateur devra sélectionner la catégorie immobilisation d'appartenance, le type de propriété (normalement l'immobilisation 'de proprieté' proposé par défaut va déjà bien), assigner s'on veut un précodé (en façon d'obtenir une numérotation à l'intérieur de se précode) et confirmer la numérotation progressive assignée en automatique, pour après passer à donner un nom à ce nouveau registre immobilisation en insertion (qui sera utilisée en tous les rapports du formulaire): tous ces champs seront reprises directement par l'immobilisation déjà existant dans le cas d'opération additionnelle.

**Type opération**: il vient proposé sur la base du paramétrage de la cause comptable: typiquement dans le cas d'achat ou augmentations le type opérations 'coût originaire' va toujours bien, au contraire pour la vente pourrait varier entre 'Alignement partiel' et 'Alignement totale' (et normalement il n'est pas possible de créer deux causes différentes mais de fois en fois on va à changer);

**Sous-compte général**: il vient reprise par la catégorie immobilisation ou par la même immobilisation, au contraire le compte industriel normalement il ne vient pas utilisé: à ce point on insère le montant de l'opération (qui est le coût d'achat ou le montant de vente dans le cas d'alignement) et le taux TVA de l'opération (dans le cas d'achat avec TVA ne déductible pas, le quota d'inductibilité ira à augmenterl'immobilisation);



**Date de début activité**: il vient proposée sur la base de la date d'enregistrement: par cette date sera vérifié l'année à partir duquel l'immobilisation peut être amortie;

**Date de fine validité**: il ne vient pas insérée (mais la visualisation dans le livre immobilisation dépend aussi par ce champ) parce que les immobilisations seront gérées en automatique respect au restant amortissable;

**Gamme de date garantie**: il n'a aucune importance en vigueur.

Concluent la première grille les suivants flag:

**Utilisé**: il indétifie les immobilisations qui ont été achetées utilisés (pour ces immobilisations la pourcentage d'application de l'amortissement , la première année est du 100% et l'amortissement avancé est applicable seul pour une année);

En utilisation: (proposé par défaut à l'enregistrement) indique que l'immobilisation est effectivement en utilisation (sans ce flag l'immobilisation ne peut pas être amortie);

**Maint.**: il faut considérer l'immobilisation pour le calcul des maintenances. Le champ Notes finales ne vient pas ramené en aucun rapport ni procédure;

**Profit-mètre et Société fictive (societa di comodo** **)**: ils servent pouridentifier les immobilisations à considérer dans les imprimantes immobilisations qui rentrent en ces cas statistiques fiscales;

**Type déductibilité**: il permet d'établir la déductibilité fiscale de l'amortissement pour l'immobilisation.

Dans l'enregistrement de la ligne pourraient être exécutés, selon différents cas, divers messages de gestion:

- la catégorie immobilisation a établi une valeur dans le champ du 'Limite amort. total' et la valeur insérée pour la nouvelle immobilisation est inférieur: on est dans le cas des immobilisations de valeur inférieure à 516 € (le vieux million de lire) qui la législation fiscale permettent de tourner directement à coût (c'est-à-dire amortir au 100%) directement dans l'année d'achat. En ce cas sera exécuté un message de confirmation de l'amortissement au 100% la première année, qui ira à établir le flag dans l'en-tête du registre immobilisation en façon d'être géré en façon spécifique dans la procédure automatique d'amortissement;



- la cause de comptabilité prévoit la gestion des centres de coût: en ce cas sera exécuté un message d'attribution des centres de coût au registre immobilisations. Cette attribution sera obligatoire si la cause prévoit l'obligation d'équilibrer les CDC avec la comptabilité;

- la cause est de vente partielle et la catégorie immobilisation n'a pas le flag 'augmetel': en ce cas sera exécuté un message d'attribution du montant d'aliénation à une spécifique opération patrimonial de l'immobilisation. Pour éclaircir la situation, pour un immobilisation 'pas augnementel' chaque ligne d'opération vient gérée à niveau d'amortissement avec une vie indépendante: l'alinéation partiel (respect à toute l'immobilisation) pourrait être gérée comme une vente totale de l'opération (p.ex. j'ai un ordinateur, j'augmente avec un scanner, et après je vends le scanner).



Complété l'enregistrement la situation sera la suivante: la ligne supérieure sera sélectionnée et dans les divers tabulateurs de détail en bas sera présente le détail de l'immobilisation, soitcomme opération patrimoniale (où aura été ajoutée une nouvelle ligne relative à l'opération chargée sur), que comme opération économique (normalement n'utilise pas), qu'enfin comme amortissements. En cas d'aliénation partielle (toujours pour un immobilisation 'augmentel' ou en cas d'aliénation partielle ne reliéepas pour un pas augmenter) l'utilisateur devra compléter la ligne de l'opération partielle avec les montants de virements des fonds (avec un signe négativé donc) et valoriser la moins-value ou plus-value relative: ces montants seront à insérer aussi à l'intérieur de la fiche 'enregistrement' pour la comptabilité général. En autres cas, au contraire, l'ERP aura actualisé correctement le fichier immobilisation, aura inséré le mouvement aussi à l'intérieur de la section TVA de l'enregistrement et par ici aura actualisé l'enregistrement relatif. Dans le cas d'aliénation, en particulier, si ont été codés les sous-comptes de moins-value et plus-value soit à l'intérieur de la cause que dans les paramètres de comptabilité, auront été ajoutées aussi les lignes relatives à l'opération de vente (une ligne de virement du total patrimonial actif, une ou plusieurs lignes de virement des fonds amortissement et pour différence la moins-value/plus-value).

Ultérieurs opérations activables dans le fichier immobilisations: au moment du chargement d'un nouvel immobilisation est possible avance à le subdiviser en N fichiers différents. Est possible, en effet, que l'achat soit relatif à un numéro d'immobilisations identiques, comme par exemple 5 ordinateurs égaux: l'utilisateur, au lieu de charger 5 immobilisations manuellement, pourrait avancer à charger un pour le total et après le subdiviser en 5 parties égaux automatiquement avec le bouton (un choix ultérieurpourrait créer une unique immobilisation qui si compose par 5 immobilisations: ce, si par une partie simplifie la situation à livre immobilisations, par l'autre crée une certaine difficulté à gérer lesaliénations immobilisations, parce que seront à gérer manuellement comme aliénations partielles).



Il est possible de supprimer la ligne immobilisation insérée dans la grille supérieure: en ce cas sera exécuté un message de confirmation de la supprimation aussi du registre immobilisation, pour lequel par défault est dans 'Non' (le message vient exécuté aussi au moment de fermer l'enregistrement sans enregistrer). On recommande de faire particulière attention au message, aux fins dene pas laisser des fichiers immobilisations 'vides' à l'intérieur de la base de données.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'enregistrement. |
| Nouvel enregistrement | Bouton pour créer un nouvel enregistrement. |
| Paramètres d'insertion | Il se réfère aux paramètres d'insertion du livre-journal. |
| Ouvrir le registre | Bouton pour rappeler la gestion du registre du sous-compte sélectionné, ou en absence, la recherche d'un autre registre. |
| Sélectionner une immobilisation existant | Bouton pour sélectionner une immobilisation déjà existante et relever une nouvelle opération à son intérieur. |
| Supprimer l'immobilisation | Bouton pour supprimer l'immobilisation sélectionné. |
| Liaison immobilisation | Bouton pour relier l'immobilisation sélectionné à un immobilisation parent. |
| Supprimer les données sélectionnés par la  grille imposable amortissable  |  |
| Supprimer les données sélectionnés par la grille  type amortissement |  |
| Subdiviser l'immobilisation | Bouton pour subdiviser l'immobilisation en créations, en N fichiers différents. |
| Détail réévaluation |  |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document Manager | Bouton pour la liaison à la gestion documentale. |






