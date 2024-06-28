---
title: Tab Generale
---

**Matières premières**: ils viennent établis l'entrepôt et la relative cause qui doivent être considérés par les procédures qui déchargent les matières premières ou de toute façon le niveau immédiatement en-dessous à l'article de l'ordre de production qui n'ait pas autres sous niveaux à sa fois;

**TEC**: ils viennent établis l'entrepôt de Travail en cours, la relative cause et en autre les causes relatives aux charges des matériaux, à la consommation des matériaux, aux retours n'utilisés pas, à l'écart des matériaux, aux charges des semi-travaillés et à la consommation des semi-travaillés. Au moment qui ils viennent établis les données relatives à l'entrepôt TEC, le type de prélèvement du matériel qui doit transiter par cet entrepôt peut-être établi comme 'Manuel'; en cette façon, au moment où la commande de production du produit fini ou du semi-travaillé vient relâchée, le matériel contenu en lui vient transféré par l'entrepôt désigné comme 'Matières premières' à l'entrepôt TEC. Ce matériel vient après déchargé pendant la signalisation de production de la dernière phase de travail de l'article objet de l'ordre de production, ou pendant la phase de travail auquel le même matériel a été associé. Contrairement, si le type de prélèvement du matériel est 'Avec liste', alors au moment du déplacement du matériel à l'entrepôt TEC arrive à la même façon en ce qui concerne au paramétrage avec prélèvement manuel, le décharge par le TEC arrive à travers la procédure de la Liste de prélèvement;

**Semi-Travaillés**: ils viennent établis l'entrepôt et la relative cause qui doivent être considérés par les procédures qui animent les semis-travaillés ou de toute façon le niveau immédiatement en-dessous à l'article objet de l'ordre de production et qu'à sa fois a sous-niveaux. Avec ces paramétrages il vient animé aussi le produit fini (donc l'article objet de l'ordre de production), dans le cas de cycle de travail à plusieurs phases, mais seul sur la dernière phase. La case 'Dénoncer semi-travaillé dernière phase' va établie s'on veut que le semi-travaillé vient chargé, par la dernière phase de travail de sa commande de production, sur l'entrepôt divers ou avec une cause diverse par ce standard;

**Semi-travaillés** ** TEC**: ils viennent établis l'entrepôt et la relative cause qui doivent être considérés par les procédures qui animent les semi-travaillés ou de toute façon le niveau immédiatement en-dessous à l'article objet de l'ordre de production et qu'à sa fois sous-niveaux. Avec ces paramétrages il vient animé aussi le produit fini (donc l'article objet de l'ordre de production), dans le cas de cycle de travail à plusieurs phases. Donc les causes ici établies viennent considérées seul quand le semi-travaillé passe d'une phase à une autre où n'est pas la dernière, parce que pour la dernière phase ils viennent considérés l'entrepôt et la cause établis sur la section semi-travaillés;

**Produits** ** finis**: ils viennent établis l'entrepôt et la relative cause qui doivent être considérés par les procédures qui chargent les produits finis, donc l'article objet de l'ordre de production;

**Écarts**: ils viennent établis l'entrepôt et la relative cause qui doivent être considérés au moment que l'utilisateur insère une quantité d'écart sur la ligne de la signalisation de production ou sur la ligne du matériel utilisé, toujours à l'intérieur de la signalisation de production.

Le flag **Gestion** ** automatique des lots et des numéros de série**, s'actif, permet à l'utilisateur de voir proposés en automatique les lots et/ou les numéros de série des matériaux qui viennent utilisés dans le cours de la production, directement à l'intérieur des grilles posées en relation à la grille des matériaux utilisés de la signalisation de production. Contrairement, l'utilisateur devra établir manuellement soit les lots, soit les numéros de série des articles utilisés qui aient ce type de gestion;

Le flag **Détermination** ** temps en automatique dans les signalisations**, s'actif, permet à l'utilisateur de voir calculés automatiquement le temps machine et le temps ouvrier sur la base des horaires des signalisations. Contrairement, l'utilisateur devra établir manuellement les temps sur la ligne de la signalisation de production;

Le flag **Division de l'ordre si les lots matériaux ne sont pas suffisant**, s'actif, permet à l'utilisateur de faire en façon que la procédure de Relâche ordres de production contrôle le si les quantités des matériaux à décharger automatiquement (donc seul en cas de type prélèvement automatique ou manuel mais avec gestion TEC) soient suffisantes dans l'entrepôt par qui doivent être retirées; s'ils ne le sont pas, alors la procédure divise l'ordre de production en 2 ordres divers qui auront le même numéro/année mais lot divers (le premier aura le lot 0, le deuxième le lor 1; le premier sera ce pour lequel les matériaux présents à entrepôt sont suffisants);

Le flag **Gestion double unité de mesure**, s'actif, permet à l'utilisateur de gérer la double unité de mesure à l'intérieur des signalisations de production, donc soit pour les articles produits soit pour les matériaux utilisés;

Le flag **Proposition automatique UM alternative**, s'actif, permet à l'utilisateur de voir proposée automatiquement l'unité de mesure alternative établie pour l'article à l'intérieur de la signalisation de production. Normalement, s'il vient activé le flag Gestion double unité de mesure, il s'active aussi ce pour confort;

Le flag **Même** ** lot pour écarts/écarts matériaux** permettent, s'actifs, de décider que le lot chargé dans l'entrepôt écarts soit égal au lot qui a été produit (dans le cas d'écart du produit fini, donc dans le cas du premier des 2 flags) ou au lot qui a été utilisé (dans le cas d'écart du matériel, donc dans le cas du deuxième des 2 flag);

Le flag **Changer date commande sur ** **change date** ** ordre de production** s'actif, permet à l'utilisateur de faire en façon qu'au change de la date fine de l'ordre de production vienne modifiée automatiquement aussi la date finale de la commande, toujours que l'article objet de l'ordre de production soit le même objet de la commande de production; donc l'ordre de production doit être de niveau 0;

Le flag **Calcul** ** cout de production pour avancements**, s'actif, permet à l'utilisateur de faire en façon qu'au moment qu'on enregistre les avancements de production, le cout de l'enregistrement d'entrepôt vient augmenté de fois en fois du cout effectif calculé sur la base du temps effectif déclaré dans la signalisation multiplié pour le cout horaire de machine et/ou groupe mains-d'ouvre, donc pour le cout horaire du centre de travail utilisé;

La section **Feuille de travail ** **gérée** ** pour** permet, à travers l'activation d'un bouton radio, de choisir le type de regroupement à utiliser pendant l'impression de la feuille de travail. Il se réfère de toute façon à une proposition, qui peut être après modifiée à l'intérieur du masque d'impression de la même feuille de travail;

La section **Période d'analyse** permet, à travers l'activation d'un des boutons radio de choisir la période de filtrage des ordres de production qui devront être visualisés dans la fenêtre de l'impression du feuille de travail (hebdomadaire, quotidienne ou chaque 2 jours);

La section **Valorisation** ** matériaux à coût** permet, à travers l'activation d'un des boutons radio, de choisir le type de cout pour la valorisation des matériaux (dernier, moyen ou standard);

Le flag **Associer lot pour liste de ** **prélèvements** s'actif viennent associés en automatique les lots dans les prélèvements de productions créées par la liste de prélèvements des matériaux;

Le flag **Contrôle** ** avancement**, s'actif, à la modification de la quantité signalisation, apparaît un message qui demande sirecalculer ou non les matériaux reliés à la signalisation.






