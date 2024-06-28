---
title: Données générales
sidebar_position: 2
---

Dans la section **Nomenclature** ** de référence** il vient établi, s'il est nécessaire, l'article laquelle la nomenclature doit être prise comme référence pour la planification d'une éventuelle commande de production pour l'article/variante sur lesquels les paramètres MRP sont en train de travailler.

Le menu déroulant **Politique de gestion** permet à l'utilisateur de choisir si gérer l'article à:

**Prévision**: en ce cas l'article viendra géré à travers la génération des prévisions de vente ou à travers l'insertion d'un plan principal de production. Ces deux types de documents seront après examinés à travers la procédure de Définition PdP;

**Écart**: en ce cas l'article viendra géré sur la base des informations relatives aux points de rangement et d'écart minimum insérés dans le tab approvisionnement du registre article. Aussi en ce cas la génération de la commande de production de l'article sera obtenue à travers l'utilisation de la procédure de Définition PdP;

**Commande**: en ce cas l'article viendra géré à travers la Définition PdP, tab 'Commandes clients';

**Besoins**: en ce cas l'article sera considéré dans le masque d'analyse du PdP présente dans la Planification générale et pourra être pris en considération dans le cas d'utilisation de la procédure 'PdP' en lieu de la procédure 'Planificaiton générale'. Aussi l'article géré à Besoins pourra être considéré par la procédure de 'Définition PdP', mais la différence est ce qu'en ce cas sont possibles, à travers un paramètre posé dans les 'Paramètres PdP', de faire en façon que la commande vient engendrée en automatique des insérées la ligne commande client, et donc sauter la procédure de 'Définition PdP'.

Le menu déroulant **Type d'approvisionnement** permet à l'utilisateur de choisir si l'article doit être de:

**Achat**: en ce cas l'explosion des besoins crée un ordre planifié d'achat pour l'article en question;

**Production**: en ce cas l'explosion des besoins crée un ordre planifié de production pour l'article en question;

**Sous-traitant**: en ce cas l'explosion des besoins crée un ordre planifié de sous-traitant pour l'article en question.

Le menu déroulant **Type** ** de prélèvement** permet à l'utilisateur de choisir le type de prélèvement de l'article entre...

**Manuel**: avec ce paramétrage, l'article viendra retiré seul pendant la signalisation de production du niveau de la nomenclature à lui directement supérieure. Le prélèvement arrivera contextuellement à la signalisation de la phase de production à laquelle le matériel a été accroché, ou, en absence d'une phase reliée, contextuellement à la signalisation de la dernière phase intérieure de production. Il faut noter que dans le cas d'utilisation de l'entrepôt TEC, le type de prélèvement Manuel comporte le passage du matériel en question par l'entrepôt matière premier à l'entrepôt TEC dans le cours du relâche de l'ordre de production, et après sa décharge par le PdP pendant la signalisation;

**Automatique**: avec ce paramétrage l'article viendra retiré pendantle relâche de l'ordre de production avec conséquent passage de l'ordre de production de Lancé à Exécutif;

**Avec liste**: avec ce paramétrage l'article viendra retiré à travers la génération d'une Liste de prélèvement, à travers l'utilisateur de l'homonyme procédure présente dans la Zone de production à Production en avancement > Ordres de production;

Le menu déroulant **Priorité** permet à l'utilisateur de choisir le type de priorité à assigner à l'article. Il se réfère d'une donnée reprise par le tableau **Priorité approvisionnement** présente en Home > Tableaux > Production;

Le flag **Comm** **. production**, s'activé, indique que les lignes commande client qui présentant cet article doivent être visualisées dans le filtre Commandes clients de la Définition PdP;

La case à cocher **% ** **Écart** permet à l'utilisateur d'établir un pourcentage d'écart fix pour l'article. Ce pourcentage vient établitoujours avec cette donnée au moment que l'article vient repris à l'intérieur d'une nomenclature;

La case à cocher **N. cycle** permet d'indiquer quel est le cycle définitif comme de défaut pour l'article;

Le flag **Considérer en ST**, s'activé, permet à l'utilisateur de faire en façon que l'article est considéré dans la compilation automatique du tab Matériaux à livrer et du tab Matériaux à utiliser de la commande de sous-traitant;

La section** Paramètres de production** résulte active si la politique de gestion de l'article est Production. En elle est possible d'établir les suivants champs:

**Délai de production**: en ce champ l'utilisateur qui n'utilise pas les cycles de production peut établir un délai de production pour l'article en question, temps calculé en jours de travail qui si basent sur le calendrier de fabrique et qui ne change pas au changement de la quantité à produire;

**Unité** ** de capacité productive**: en ce champ l'utilisateur peut insérer l'unité de capacité productive pour qui doit être considéré le délai de production de l'article;

**Délai** ** de production fix**: en ce champ l'utilisateur peut décider de vouloir considérer une valeur de délai de production fix et necalculé pas sur la base des ses cycles de travail, en insérant donc la valeur en jours de travail et en activant cette modalité à travers le flag;

**Lot économique**: en ce champ l'utilisateur peut établir un lot économique de production de l'article, qui viendra considéré par les procédures de Définition PdP et Planification générale (seul dans le cas de flag 'Considérer disponibilité pour le premier niveau activé);

**Multiples**: en ce champ l'utilisateur peut établir les multiples du lot économique de production de l'article, qui viendront considérés par les procédures de Définition PdP et Planification générale (seul dans le cas de gla 'Considérer disponibilité pour le premier niveau activé);

**JJ de regroupement**: en ce champ l'utilisateur détermine la période temporelle sur qui la procédure regroupe les éventuels ordres planifiés. Si par exemple ce paramètre vaut 5 pour une donnée article, seront regroupés tous les ordres planifiés qui ont date comprise dans l'intervalle de 5 jours de travail (par le calendrier de fabrique);

**JJ tolérance avances, JJ** ** tolérance retards**: ils sont les jours que le PdP tolère en avance ou en retard d'un document sans proposer l'effective avance ou retard, mais en exploitant l'éventuel surnombre sans propositions. Pour ce motif si par exemple un article spécifique a comme valeurs jj tol.avances = 2 et jj tol. retards = 5, il signifie que si l'algorithme PdP relève l'exigence d'avancer ou de retarder un document pour cet article, ce ne viendra pas communiqué à l'utilisateur comme demande d'avance ou de retard si dans l'intervalle de 2 jours précédents dans le cas d'avance et dans l'intervalle de 5 jours successifs dans le cas de retard (à l'utilisateur sera seule communiqué que l'exigence a été satisfait par le particulier document);

**Tolérance en jours/pourcentage par le délai de production**: il détermine la période temporelle où pouvoir avancer ou retarder (plus de ce limite le PdP propose d'éliminer le document) et jusqu'à communiquer l'éventuel surnombre d'un article. Il peut être exprimé en jours ou en pourcentage à délai de production. Pour lequel si par exemple pour un article viennent définis 90 jours de tolérance, les documents relatifs à cet article spécifique pouvaient être avancés ou retardés au maximum de 90 jours, si l'exigence dépassera cette seuil, le PdP proposera d'éliminer le document et d'en créer un nouveau dans la date où a relevé l'exigence. En outre, pour le spécifique article, une éventuelle disponibilité en surnombre pourra être disponible jusqu'à un maximum de 90 jours.

Dans la section **Lecture registres/cycles** l'utilisateur a la possibilité d'établir la version du registre et du cycle de production qui doit être considérée par la procédure Pdp pour l'article en question.

Dans la section **Considérer ** **les disponibilités provenances** ** par** l'utilisateur a la possibilité de décider quels soient les zones de gestion les qui documents doivent être pris en considération pendant le traitement de la procédure PdP. Les zones sont d'Achat, Vente, Entrepôt (et en ce cas est possible de décider si doivent être considérées ou non les stocks de lots en état ne disponible pas à travers l'activation du flag), Sous-compte, Planification (donc Commande de production, Ordres planifiés d'achat, Sous-traitant et/ou Production), Production relâchée (donc Ordres de production).

Dans la partie à gauche de la fenêtre est possible après d'établir une série de données qui servent au traitement de la procédure PdP. Les flag qui peuvent être utilisés sont les suivants:

**Considérer les quantités** ** sur la base du lot économique**: s'activé, le flag permet de faire en façon que pour l'article vient considéré le lot économique de production ou d'achat établi;

**Considérer** ** les multiples du lot économique**: s'activé, le flag permet de faire en façon que pour l'article vient considéré le multiple du lot économique de production ou d'achat établi;

**Réintégration** ** stock minimum de l'article**: s'activé, le flag permet de faire en façon que pour l'article vient réintégrait le stock minimum établi dans son registre, tab 'Aprovisionnement';

**Considérer** ** l'index de couverture**: s'activé, le flag permet de faire en façon que pour l'article vient considéré l'index de couverture établi dans son registre, tab 'Aprovisionnement';

**Considérer** ** aussi les alternatives des matériaux**: s'activé, le flag permet de faire en façon que pour l'article vient considérées aussi ses alternatives établies dans la nomenclature, tab 'Alternatives';

**Considérer** ** les phases alternatives**: s'activé, le flag permet de faire en façon que pour l'article viennent considérées, s'il est de production, les phases alternatives dans les cycles de travail du même article. Dans la case à cocher 'Tolérance pour l'occupation du CDT' est possible d'établir un pourcentage qui permet de décider de combien est possible de dépasser la quantité de travail disponible dans le centre de travail, au contraire dans la case à cocher 'Tolérance de production' est possible d'établir, toujours en pourcentage, combien est possible de produire l'article en ce qui concerne la quantité prévue de l'ordre de production;

**Bloc pour production**: s'activé, le flag fait en façon que s'une commande de production de cet article vient élaborée par la Planification générale sort le message 'Impossible planifier, l'article XXXX est bloqué pour la production'. En ce cas la planification se bloque et l'utilisateur la doit relancer en excluant la commande relative à cet article. 

Enfin est possible, en utilisant le menu déroulant Gestion prévision, comme devront être engendrées les commandes de production par Définition PdP dans le cas de génération par le Prévisionnel. Les possibilités sont les suivantes: le majeur entre les commandes clients et prévision de vente; toujours la prévision de vente; le mineur entre les commandes clients et prévision de vente; toujours les commandes clients; la somme des commandes clients et prévisions de vente.

Dans la section **Paramètre** ** d'achat/sous-traitant**, qui résulte active si la politique de gestion de l'article est 'Achat' ou 'Sous-traitant',est possible de visualiser et éventuellement modifier les données insérées à l'intérieur du tab fournisseur préférentiel du registre article.

 






