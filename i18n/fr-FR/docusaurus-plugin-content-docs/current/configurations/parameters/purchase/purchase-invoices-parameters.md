---
title: Paramètres factures d'achat
sidebar_position: 7
---

Les paramètres des factures d'achat permettent le paramétrage de base pour gérer correctement et selon les spécifiques demandes par chaque société.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurer paramètres | Il permet de restaurer les paramètres aux valeurs initiales. |

Tab général

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Gestion double unité de mesure | Combien il est établi on habilite le menu déroulant UM alt. et la colonne quantité alternative dans la grille articles de la facture d'achat. |
| Proposition automatique UM alternative | Ce contrôle s'habilite seul si 'Gestion double unité de mesure' est active. Combien il vient inséré un article qui a dans son registre tab UM alternative une UM alternative par défaut, cette UM vient automatiquement proposée comme UM alt. de l'article et il vient calculée aussi la quantité alternative en utilisant le même facteur de conversion. |
| 'Type facture', 'Taux TVA', 'Type chiffre d'affaires achats' | Ces paramètres viennent utilisés comme défaut dans la création des factures par ordres. |
| Lots et NS obligatoires | Combien il établi pour les articles gérés à lors et numéro de série, il est obligatoire spécifiquer un lot et les numéros de série dans les relatifs tab. |
| Rechercher prix articles dans les catalogues prédéfinis | Ce paramètres est utilisé pour la recherche du prix dans les catalogues fournisseurs; la recherche arrive dans les catalogues du type prédéfini dans le registre fournisseur si les catalogues ne sont pas valables (les catalogues valables sont ces qui ont début validité < = à la date d'aujourd'hui et ont la date de fine validité nulle ou > = à la date d'aujourd'hui). |
| Permettre remises pour les articles hommages | S'il est établi, est possible d'insérer remises aussi sur les lignes de type hommage. |

Tab charge

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Créer enregistrement avec la date du document | Combien il est établi, l'enregistrement d'entrepôt vient fait avec la même date de la facture d'achat, et il ne sera pas nécessaire spécifiquer la date enregistrement dans la Forme de charge. |
| Priorité entrepôt et causes de charge | Combien ce paramètre est établi, l'entrepôt et la cause de charge viennent lis par les lignes de la facture d'achat et s'il n'y a pas par paramètres de la Forme de charge, au contraire s'il n'est pas établi, ils viennent utilisés l'entrepôt et la cause insérés en cette Form de paramètres. |
| Avis articles fictifs | Si cet est établi pendant la charge de la facture il vient contrôlé si dans la facture sont présents des articles fictifs; si ces sont présents, il vient donné un message s'on veut charger la facture; en répondant si la facture vient chargée. |

Tab importation par BarCodeEn ce tab l'utilisateur spécifique le prénom et le chemin du fichier pour importer les articles par BarCode. La Form d'importation s'ouvre par la barre d'outils de la gestion factures d'achat, dans le tab articles. À travers ce paramétrage est possible d'insérer les articles par le fichier dans la facture d'achat.

Tab importationDans ce tab l'utilisateur spécifique les paramètres pour importer les données contenues dans le tableau FA_ImpBCAll. La Form d'importation s'ouvre par la barre d'outils de la gestion facture d'achat, dans le tab articles. À travers ce paramétrage est possible d'insérer les articles par un tableau configuré dans la facture.

Tab analytiqueCes paramètres indiquent la priorité de recherche des centres de coût ou de profit pour les attribuer aux articles de la facture d'achat. Combien le flag recalcul est établi les centres de coût ou de profit viennent insérés/actualisés dans les articles à travers la priorité choisie.






