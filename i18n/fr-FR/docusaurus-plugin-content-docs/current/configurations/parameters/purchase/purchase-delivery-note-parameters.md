---
title: Paramètres bons de livraison d'achat
sidebar_position: 6
---

Les paramètres des bons de livraison permettent le paramétrage de base pour pouvoir gérer correctement et selon les spécifiques demandes par chaque société.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Restaurer paramètres | Il permet de restaurer les paramètres aux valeurs initiales. |

#1.1 Tab général

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Gestion double unité de mesure | Combien il est établi s'habilite le menu déroulant UM alt. et la colonne quantité alternative dans la grille articles de la bon de livraison d'achat. |
| Proposition automatique UM alternative | Ce contrôle s'habilite seul si 'Gestion double unité de mesure' est active. Combien il vient inséré un article qui a dans son registre tab UM alternative, une UM alternative par défaut, cette UM vient automatiquement proposée comme UM alt, de l'article et il vient calculée aussi la quantité alternative en utilisant le même facteur de conversion. |
| Visualiser dimensions | Combien il est actif dans le tab article de la gestion bons de livraison d'achat sont visibles les 3 colonnes 'Hauteur', 'Largeur' et 'Profondeur' (données présentes dans le tab Poids/Dimensions du registre articles). |
| Permettre bons de livraison avec même numéro et fournisseur | Combien il est établi, est possible d'insérer bons de livraison pour le meme fournisseur avec le meme numéro et il vient visualisé un message d'avis. |
| Lots et NS obligatoires | Combien il est établi pour les articles gérés à lots et numéro de série est obligatoire spécifique un lot ou les numéros de série dans les relatifs tab. |
| Rechercher prix articles en tous les catalogues prédéfinis | Ce paramètre est utilisé pour la recherche du prix dans les catalogues fournisseurs, la recherche arrive dans les catalogues du type prédéfini dans le registre fournisseur aussi si les catalogues ne sont pas valables (les catalogues sont ces qui ont la date début validité = à la date d'aujourd'hui et a la date fine validité nulle ou > = à la date d'aujourd'hui). |
| Permettre les remises pour les articles hommages | S'il est établi, est possible d'insérer les remises aussi sur les lignes de type hommage. |

#1.2 Tab charge

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Créer enregistrement avec la date du document | Combien il est établi, l'enregistrement d'entrepôt vient fait avec la même date du bon de livraison, et il ne sera pas nécessaire spécifiquer la date enregistrement dans la Forme de charge. |
| Priorité entrepôt et causes de charge  | Combien ce paramètre est établi l'entrepôt et la cause de charge viennent lis par les lignes du bon de livraison de charge et, s'il n'y a pas, par les paramètres de la Form charge, au contraire s'il n'est pas établi ils viennent utilisés l'entrepôt et la cause insérés en cette Form de paramètres. |
| Charge/Décharge automatique | Si le flag est établi au moment que le bon de livraison vient mis 'Contrôlé' automatiquement part la procédure de charge du bon de livraison à entrepôt. |
| Avis articles fictifs | S'il est établi, pendant la charge du bon de livraison il vient contrôlé si dans les bons de livraison sont présents des articles fictifs; si ces sont présents, il vient donné un message d'on veut charge le bon de livraison; en répondant si le bon de livraison vient chargé. |

#1.3 Tab importationEn ce tab l'utilisateur spécifique le prénom et le parcours du fichier pour importer les articles par BarCode. La Form d'importation s'ouvre par la barre d'outils de gestion du bon de livraison, dans le tab articles. À travers ce paramétrage est possible d'insérer les articles par le fichier dans le bon de livraison.

#1.4 Tab importation BarCodeEn ce tab l'utilisateur spécifique les paramètres pour importer les données contenues dans le tableau BA_ImpoBCAll. La Form d'importation s'ouvre par la barre d'outils de gestion du bon de livraison, dans le tab articles. À travers ce paramétrage est possible d'insérer les articles par un tableau configuré dans le bon de livraison. 

#1.5 Tab analytiqueCes paramètres indiquent la priorité de recherche des centres de coût ou de profit pour les attribuer aux articles du bon de livraison. Au moment que le flag recalcul, il est établi les centres de coût ou de profit viennent insérés/actualisés dans les articles à travers la priorité choisie.






