---
title: Paramètres PdP
sidebar_position: 3
---

La fenêtre des Paramètres PdP s'ouvre à travers le parcours Home > Paramètres > Production > Paramètres PdP. À travers cette fenêtre viennent établis tous les paramètres qui concernant la gestion des commandes de production et la façon où doivent être gérées les phases successives à la génération des mêmescommandes.

Dans la section **Méthode génération ** **commande** doit être établi le type de commande (monoproduit/multiproduit) qui doit être proposé dans le tab Paramètres de la définition PdP. Au moment de la génération de la commande par Définition PdP est de toute façon possible de modifier ce paramétrage, ainsi comme cette relative au menu déroulant successif appelé Regroupement produits pour, à travers laquelle est possible d'indiquer comme doivent être éventuellement regroupés les articles à l'intérieur de la même commande Monoproduit ou Multiproduit.

Si le type commande est Monoproduit, l'unique regroupement admis est ce pour article: ce type de gestion permet à l'utilisateur de faire engendrer automatiquement par le système une série de commandes monoproduit, en sélectionnant une liste de lignes de commandes clients, lignes provenances par Prévisions de vente ou par le Plan principal de productions ou provenances par le stock minimum, en faisant façon que chacune commande qu'il viendra engendrée présents la somme des quantités demandées pour le même article. La date finale d'une commande regroupée est toujours égale à ce du besoins plus voisin à la date où on lance le traitement.

Si le type commande est Multiproduit, les regroupements peuvent être effectués pour client, commande de vente, client/commande et permet à l'utilisateur d'insérer dans la même commande multiproduit plusieurs articles qui proviennent par lignes de commande cliente liée au même client, à la même commande de vente ou à la même commande de vente du même client.

Dans la section **Génération commande** ** par** l'utilisateur peut établir avec les prévus flag si la commande doit être engendrée par Commandes clients ou par un Prévisionnel (Prévisions de vente, Plan principal de production). Ces paramètres sont après modifiables par la fenêtre Définition PdP. Dans le cas de génération commande de production par le prévisionnel, il doitêtre spécifié s'on préfère que la commande de production vient engendrée avec échéance hebdomadaire ou mensuelle.

Le flag **Calcul** ** quantité sur la base du délai de production de l'article** vient activé si on veut utiliser les cycles de travail pour calculer la durée d'une commande de production; en ce cas, aux fins du calcul de la durée de la commande on fait référence au champ Délai de production présente dans les paramètres PdP de l'article. Dans le champ numéro de commande insérée on visualise le dernier numéro progressif de commande de production insérée.

Le flag **Génération** ** commande par commandes client en automatique**, s'actif, permet de faire en façon que la procédure créée automatiquement la commande de production dès que vient insérée une ligne commande client. La commande en ce cas vient créée dans l'état de 'N'examinée pas'. Généralement il vient activéau moment de la planification on utilise la procédure 'PdP' plutôt que la 'Planification générale'.

Le flag **Génération automatique commandes de prévision de ventes consolidées**, s'actif, permet de faire en façon que la procédure crée automatiquement la commande de production dès que vient effectué la consolidation d'une prévision de vente annuelle. Aussi en ce cas la commande vient créée dans l'état de 'N'examinée pas'.

Le flag **Actualisation** ** date prévue livraison**, s'actif, permet de voir automatiquement actualisée la date de prévue livraison de la ligne de la commande client liée à la ligne de commande de production dont on modifie manuellement la date de prévue fin.

Le flag **Considérer ** **les disponibilités provenances par le sous-traitant, achats, ventes, production, entrepôt** permettent à l'utilisateur de décider d'établir la considération de la disponibilité des produits finis en siège de génération commande de production.

La grille **Entrepôts** ** de planification commandes** est la simple visualisation de la liste des entrepôts sur qui doit être contrôlée la disponibilité en siège de génération commande de production. Cette liste vient établie dans le masque appellé 'Calcul disponibilité' qu'on trouve entre les Utilité.

Dans la section **Données dernières planifications** il apparaître certaines données récapitulatives de la dernière planification (heure début, numéro des erreurs engendrées, heure final, progressif de planification).

Le menu déroulant **Premier jour de la semaine visualisée** ** dans le calendrier de fabrique** permet d'insérer le jour qu'on veut faire apparaitre comme premier jour de la semaine de travail dans le calendrier de fabrique. Normalement on insère le lundi.

Dans la section **Couleurs des commandes ils **sont possibles d'établir les couleurs du fond et du texte des commandes de production sur la base de leur état (n'examinées pas, lancées, etc.).

Dans la section **Génération** ** automatique flux de production**, qui dépende par l'activation de l'homonyme flag, l'utilisateur peut décider d'activer le flag Planification, qui permet de voir déjà planifiées les commandes de production dès qu'engendrer par la définition PdP. L'activation du flag Planification perme d'activer le flag Relâche, qui permet de décider s'après la planification automatique les ordres planifiés d'achat, production et/ou sous-traitant doivent être relassé aussi ces en automatique. En ce dernier cas, pour les ordres planifiés de production est possible d'activer aussi le flag Relâche ex., qui permet d'engendrer directement les ordres de production exécutifs, en saltant donc aussi la procédure de Relâche ordres de production. Enfin, en activant aussi le flag Relâche ex, est possible de décider s'activer aussi le flag Sign. et le flag Supprimer mat. sans stock, qui servent respectivement pour faire en façon que l'ordre de production qui vient engendrée soit insérée automatiquement aussi la signalisation d'ouverture et la signalisation de clôture de toutes les phases de l'ordre, qui soient enregistrés à l'entrepôt et que les matériaux qui devaient être utilisés mais qui n'ont pas stock disponible soient éliminés par le tab Matériaux de la signalisation de production de la phase qui décharge les mêmes matériaux.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les modifications effectuées sur les paramètres PdP. |






