---
title: Paramètres
sidebar_position: 2
---

À travers ce tab viennent établis tous les paramètres qui concernent la gestion de la création des commandes de production et le moyen par laquelle doivent être gérés les phases successives à la génération des commandes. Certains desréglages présents en ce tab viennent repris par la fenêtre Paramètres MPS, présent dans la section Home > Paramètres > Production.

Dans la section **Méthode** ** de génération de la commande** doit être établi le type de commande (Mono-produit/multiproduit) qui doit être proposé dans les tab paramètres de la définition MPS. Dans le moment de la génération de la commande de Définition MPS est de toute façon, possible de modifier ce paramétrage, aussi comme ce relatif au menu déroulant successif appélé 'Regroupement des produits par', à travers laquelle est possible d'indiquer comme doivent être éventuellement regroupés les articles à l'intérieur de la même commande monoproduit ou multiproduit.

Si le type commande est monoproduit, l'unique regroupement maisest ce par article: ce type de gestion permet à l'utilisateur de faire engendrer automatiquement par le système une série de commandes monoproduit, en sélectionnant une liste de lignes de commandes client, lignes provenant par les prévisions de vente ou par le Plan principal de production ou provenant par le stock minimum, en faisant en façon que chaque commande qui viendra engendrer présents la somme des quantités demandée par le même article. La date de fin d'une commande regroupée est toujours égale à celle du besoin plus voisin à la date qui lance le traitement.

Si le type commande et multiproduit les regroupements peuvent être effectués par le client, commande de vente, client/commande et permettant à l'utilisateur d'insérer dans la même commande multiproduit plus articles provenant par les lignes de commande cliente liée au même client, à la même commande de vente ou à la même commande de vente du même client.

Le flag 'Actualisation commandes déjà existents' permet de faire en façon qui, en partant par le tab 'Prévisionnel', on peut lancer directement une planification général sur les commandes engendrées automatiquement par ce tab qu'on trouve encore en état de n'examiner pas ou planifiées.

En plus, l'utilisateur peut établir avec certains flag, si la commande doit être engendrée par les commandes clients ou par un prévisionnel (prévisions de vente, plan principal de production), ou, en dernière analyse, par le stock minimum; en ce dernier cas vient visualisé un algorithme particulier qui viendra expliqué dans le paragraphe dédié au tab 'Stock minimum'.

Il existe encore la possibilité de décider, dans la case d'activation duflag 'Prévisionnel', avec quelle modalité temporel doit être engendréles commandes de production, à travers l'activation des boutons radios détaillés ensuite le fonctionnement:

**Mensuel**: en ce cas la commande de production viendra engendrée dans le même mois sur lesquels tombe la date finale de la prévision de vente ou dans le mois qu'a été insérée la quantité dans le Plan principal de production. L'utilisateur peut aussi établir le jour du mois qui doit être établi, par la procédure automatique de création de commande, la date de prévue fin de la même commande;

**Hebdomadaire**: en ce cas viendra engendrée une commande de production par chaque semaine du mois sur lesquels tombe la date finale de laprévision de vente ou dans le mois qu'a été insérée la quantité dans le Plan principal de production. L'utilisateur peut aussi établir le jour de la semaine qui doit être établi, par la procédure automatique de création de commande, la date de prévue fin de la même commande;

**Réels**: en ce cas viendra engendrée une commande de production par chaque semaine du mois sur lesquels tombe la date finale deprévision de vente ou du mois sur laquelle a été insérée la quantité dans le Plan principal de production, mais en considérant exactement la date final de chaque ligne de la prévision de vente;

**Hebdomadaire en considérant les jj de production de la zone de livraison**: en ce cas viendra engendrée une commande de production en tenant présent des jours de production de la zone de livraison liée au client par laquelle a été créée la prévision de vente.

Le flag **Regroupement des prévisions par les clients** sert à faire engendrer les commandes de production en regroupant les lignes de prévision de clients.

Le flag **Engendrer la commande dans le mois/semaine précédent**, s'activé, permet à l'utilisateur de créer la commande de production, engendrée par les prévisions de vente ou par le plan principal de production, dans le mois précédent de la prévision ou du plan principal, ou dans la semainde précédente à celle dans laquelletombe la date finale de prévision de vente

Dans la section **Si n'est pas spécifiée la date de livraison**, qui regarde seul le tab Commandes clients de la Définition MPS, l'utilisateur peut décider que, s'il n'y a pas la marchandise prête dans la ligne de la commande client qui doit être analisée par la procédure, la ligne sans la date peut être ignorée ou acceptée une certain date comme prévue fin de la commande ou encore accéptée une certain date comme prévu début de la commande.

Le flag **Considérer la disponibilité de l'article** permet,s'activé, de faire en façon qu'en tous les tabs de la définition MPS vient exposé la disponibilité de l'article à la date de prévue fin de la commande de production qui devra être créée. Le même arrive aussidans la tab récapitulation. La disponibilité vient reprise en considération sur la base des flags activés dans le 'Paramètres MPS' (Sous-traitant, Achats, Ventes, Production et Entrepôt).

En dessous, viennent exposés les **Entrepôts de planificaiton des commandes**, où paraisent les entrepôts qui ont été inséré dans la fenêtre du 'Calcul disponibilitè', qui si trouve dans le parcours Home > Utilité > Calcul disponibilité, à partir de tab Paramètres peuvent seul être visualisé et ne modifiés pas.

Le menu déroulant **Lieu productif** per met à l'utilisateur de décider de faire considérer la disponibilité à la procédure de génération commandes sur la base du Lieu productif, s'utilisé.

Le flag **Calcul quantité sur la base du lot économique**, s'activé, fait en façon que la procédure engendre la commande de production en considérant le lot économique d'achat inséré dans les tab fournisseurs préférentiels sur le fournisseur désigné comme par défaut si l'article analysé en Définition MPS àcomme type approvisionnement 'Achat' ou 'Sous-traitant', et le lot économique de production inséré dans les paramètres MRP si l'article objet de la commande à comme type approvisionnement "Production'.

Le flag **Calcul quantité sur la base des multiples de l'article**, s'activé, fait en façon que la procédure engendre la commande de production en considérant aussi les multiples du lot économique d'achat inséré dans les tab fournisseurs préférentiels sur le fournisseur désigné comme par défaut des articles si l'article objet de la commande a comme type approvisionnemet 'Achat' ou 'Sous-traintat', et les multiples du lot économique de production inséré dans les paramètres MRP si l'article analysé en Définition MPS a commetype approvisionnement 'Production'. Ce flag peut-être activé seul si résulte actif le flag du paragraphe précédent.

Le flag **Réintégration du stock minimum de l'article**, s'activé, permet à l'utilisateur de faire en façon que par l'article analysé en Définititon MPS soit reconstitué le stock minimum inséré dans le tab Approvisionnement du registre article.

Le flag **Réintégration point de commande de l'article**, s'activé, permet à l'utilisateur de faire en façon que par l'article analysé en Définition MPS soit reconstitué le point de commande inséré dans le tab Approvisionnement du registre article.

Le flag **Exclure les ordres en retard**, s'activé, permet à l'utilisateur de faire en façon que la procédure de la commande de production exclure par le calcul de la possibilité de l'article analysé les quantité provenants par les lignes de la commande client laquelle la Date de la marchandise prête résult être précédent à la date courant.






