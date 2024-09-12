---
title: Histogramme
sidebar_position: 3
---

En ce tab, formé par une grille de résultat et par une partie graphique, est possible de visualiser une ligne pour chaque phase des ordres planifiés et/ou de production filtrés sur la base des critères de recherche établis dans le tab "Filtre'".

Les colonnes visualisées dans la grille de résultat sont les suivants:

**Document**: la colonne visualise l'indication relative à la ligne qui est sélectionnée se réfère à un Ordre de production ou à un Ordre planifié;

**État document**: la colonne visualise l'état du document, si se réfère des Ordres de production. Les valeurs exposées peuvent être 'Lancé','Exécutif','Exécuté';

**Priorité**: la colonne visualise la priorité du document;

**Oblig.**: la colonne visualise un flag ('Obligatoire') qui s'active permet à l'utilisateur d'indiquer que l'ordre planifié est absolumentne déplaçable;

**Année**: la colonne visualise l'année du document;

**Ordre**: la colonne visualise le numéro du document;

**Code type ordre**: la colonne visualise la description du document;

**Description type ordre**: la colonne visualise la description du document;

**Année commande**: la colonne visualise l'année de la commande de production par lequel a été engendré le document. La colonne résulte vide si le même document a été engendré manuellement ou si provient par le traitement MRP;

**Numéro commande**: la commande visualise le numéro de la commande de production par lequelle a été engendré le document. La colonne résulte vide si le même document a été engendré manuellement ou si provient par le traitement MRP;

**Code type commande**: la colonne visualise le code du type commande de production;

**Description type commande**: la colonne visualise la description du type commande de production;

**Date début ordre**: la colonne visualise la date prévue de début du document; cette date représente la date de prévu début de la première phase de travail du cycle de l'article;

**Date fin ordre**: la colonne visualise la date prévue fin du document; cette date représente la date de prévu fin de la dernière phase de travail du cycle de l'article;

**Date marchandise prête**: la colonne visualise la date de marchandise prête de la ligne de la commande client par laquelle a été engendrée la commande laquelle planification ou traitement MRP a engendré l'ordre sélectionné. Le champ résulte vide si la commande qui a engendré l'ordre planifié ou de production a été créée par le 'Prévisionnel' ou manuellement;

**Date de livraison prévue**: la colonne visualise la date de livraison prévue de la ligne de la commande client par lequelle a été engendrée la commande laquelle planification ou traitement MRP a engendré l'ordre sélectionné. Le champ résulte vide si la commande qui a engendré l'ordre planifié ou de production a été créée par le 'Prévisionnel' ou manuellement;

**Phase, Sous-phase, Description phase**: en ces champs ils viennent visualiser les données relatives à la phase de travail de l'ordre planifié ou de production objet de la ligne sélectionnée;

**CDT**: ce menu déroulant, qui visualise le code du Centre de travail désigné pour la phase sélectionnée permettre éventuellement aussi de modifier le CDT, en assignant donc la phase sélectionnée à un autre Centre de travail;

**Date début phase/Date fin phase**: il se réfère à des dates de début et fin de la phase sélectionnée. Elles viennent calculées sur la base des temps insérés dans les phases de travail, et plus précisément sur la base au majeur entre le temps d'ouvrier et le temps machinent total pour la phase sélectionnée;

**UM temps**: la colonne visualise l'unité de mesure utilisée, pour la phase sélectionnée, pour les temps qui paraissent dans les colonnes suivantes. Elles peuvent être secondes, minutes, heures et jours;

**Temps équip.**: la colonne visualise le temps d'équipement établi pour la phase sélectionnée;

**Temps machine**: la colonne visualise le temps machine unitaire établi, pour la phase sélectionnée, pour la quantité pour phase;

**Temps attribué**: la colonne visualise le temps ouvrier unitaire établi, pour la phase sélectionnée, pour la quantité pour phase;

**Classe**: la colonne visualise la classe de l'article objet du document;

**Code article**: la colonne visualise le code de l'article objet du document;

**Variante**: la colonne visualise l'éventuelle variante de l'article objet du document;

**Quantité**: la colonne visualise la quantité à produire pour cet ordre pour la phase sélectionnée;

**Quantité produite**: la colonne visualise la quantité déjà produite (et donc signalée) pour cet ordre pour la phase sélectionnée;

**Quantité restante**: la colonne visualise la différence entre les 2 champs sur indiqués, donc la quantité encore à produire pour cet ordre pour la phase sélectionnée;

**Notes**: la colonne visualise les notes insérées dans le tab Notes de l'ordre planifié ou de production pour la phase sélectionnée;

**Commande**: la colonne visualise l'éventuelle commande de vente liée au document;

**Client**: la colonne visualise le compte et le sous-compte du client lié au document;

**Description client**: la colonne visualise la raison sociale du client lié au document;

**Description article**: la colonne visualise la description de l'article objet du document;

**Description centre de travail**: la colonne visualise la description du Centre de travail désigné pour la phase sélectionnée.

En sélectionnant une ligne de la grille, la section en bas visualise le graphique relatif au centre de travail utilisé dans la phase sélectionnée, en mettant en évidence en jaune le temps utilisé par cette phase. En rouge vient mis en évidence l'histogramme relatif à la capacité productive disponible du centre de travail représenté dans le graphique exposé, en bleu vient mis en évidence l'histogramme relatif au temps utilisé dans les ordres planifiés, au contraire, le vert mis en évidence l'histogramme relatif au temputilisé dans les ordres de production. Dans l'axe d'abscisses en effet ils viennent représentés les jours du calendrier de l'usine (les jours de travail sont marqués par l'histogramme de couleur rouge), au contraire dans l'axe des ordonnées viennent indiqués les minutes de travail disponibles pour un jour, calculés sur la base du calendrier de chaque capacité productive. Par exemple, si un centre de travail a la capacité quotidienne de 8 heures, dans le graphique la barre verticale rouge arrivera jusqu'aux valeurs de 480 minutes représentés dans l'axe des ordonnées.

En exerçant un simple double click dans la ligne de la grille, l'utilisateur entre directement dans le document (ordre planifié ou ordre de production) qui contient la phase représentée dans la ligne d'où on est partis, avec la possibilité, subordonnée à la présence des droits d'utilisateur, de modifier le document et voir, après avoir donné un 'Refresh' de la visualisation, la situation actualisée aussi par le point de vue graphique.






