---
title: Exécution stock minimum
sidebar_position: 3
---

La procédure du stock minimum utilise un algorithme que si base sur la consommation moyenne quotidienne calculé par le tab approvisionnement du registre articles.

On part donc par le stock au moment de l'élaboration et on contrôle si à la date demandée, à travers la consommation moyenne, on va ou non en stock minimum.

(Stock minimum - Point de rangement) / Jours pour le rangement

La procédure du stock minimum est formée dans la façon suivante:

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Exécuter | Une fois insérés les filtres permet d'exécuter la procédure du stock minimum. |
| Aperçu avant impression | Il se réfère à la procédure d'aperçu avant impression. |
| Impression | Il se réfère à la procédure pour l'impression physique du stock minimum. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection, une recherche sur le total des articles insérés et gérés à stock. Les filtres sont typiquement encondition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps. En particulier est possible de choisir article (classe, code article, description), éventuelle variante seule pour articles gérés à variante, la date limite jusqu'à laquelle on veut calculer le stock minimum. Il est en outre possible d'habiliter la création automatique des demandes d'achat pour les articles en stock minimum. Si vient activée cette fonction il faut spécifier le type demande document et, en voulant une note à insérer en en-tete demande d'achat.

GRILLE DE RÉSULTAT DE L'EXÉCUTION: la grille de résultat de l'exécution représente la liste des élaborations effectuées en spécifiant le numéro de date élaboration. Avec un double click en correspondance de la ligne désirée est possible d'ouvrir le résultat et donc le détail de l'élaboration. Les informations qu'on trouve à l'intérieur sont les références aux articles en stock minimum (classe, code article, description), éventuelle variante et description variante, disponibilité à la date élaboration, point de rangement calculé, consommation moyenne calculée, date àlaquelle les articles vont en stock minimum et la quantité demandée pour satisfaire le stock.






