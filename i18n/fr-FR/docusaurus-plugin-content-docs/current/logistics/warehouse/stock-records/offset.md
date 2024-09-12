---
title: Contrepartie
sidebar_position: 5
---

Ce tab est exactement égal au tab enregistrement, mais résulte actif seul si la cause d'entrepôt établit dans le tab enregistrement présent un entrepôt et une cause de contrepartie. Les causes de contrepartie viennent établies si on veut gérer un double mouvement d'entrepôt, avec un seul enregistrement. Est donc possible, dans le tableau des causes d'entrepôt, d'établir une case de charge comme contrepartie d'une cause de décharge et vice-versa.

Dans la tab contrepartie viennent donc ramenés exactement toutes les données établies à l'intérieur du tab enregistrement, avec la possibilité pour l'utilisateur de modifier seul certaines des données de l'en-tête, quels CDC, Document entier, Document de référence, date document de référence et commande de vente.

Les données de la ligne du mouvement ils devront au contraire être égales entre les 2 tabs; le même pour les grilles lots, numéros de série, variantes et centres de coût de chaque mouvement.

Il y a un cas particulier où dans le tab Enregistrement vient inséréun article et dans le tab Contrepartie vient insérés autres: ça arrive seul au moment que la cause de contrepartie accrochée à la cause principale a activé le flag 'Nomenclature', flag qui permet à l'utilisateur de charger l'article dans le tab enregistrement (donc en utilisant une cause de charge) et voir sa nomenclature insérée dans le tab Contrepartie, à l'intérieur de laquelle sera donc présente une cause de décharge. Évidemment peut être géré aussi le vice-versa.

Une situation typique qui demande la gestion de causes avec la contrepartie accrochée porte aux décharges automatiques du bon de livraison de sous-traitant, qui exécute le décharge des matériaux à livrer au sous-traitant par l'entrepôt matières premières (ou semi-fini, selon les cas), avec consécutif et immédiat charge sur l'entrepôt du sous-traitant des mêmes matériaux, qui devront par lui être utilisés pour produire ça que lui a été demandé à travers la commande sous-traitant.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Nouvel enregistrement | Bouton qui enregistre l'enregistrement à peine créé ou les modifications à elle apportées et aux mêmes temps permet à l'utilisateur d'insérer un nouvel enregistrement d'entrepôt en nettoyant toutes les données de la fenêtre déjà ouverte. |
| Enregistrer | Bouton qui enregistre l'enregistrement à peine créé ou les modifications à elle apportées. |
| Insérer mouvements | Il se réfère à la procédure pour insérer une nouvelle ligne dans la grille des mouvements d'entrepôt. |
| Supprimer mouvements sélectionnés | Il se réfère à la procédure qui exécute de supprimer les lignes sélectionnées dans la grille des mouvements. |
| Expander la grille | Il se réfère à la procédure qui permet d'expander à tout l'écran la grille des mouvements d'entrepôt, en cachent aux mêmes temps les grilles en dessous. |
| Supprimer les centres de coût | Il se réfère à la procédure qui permet de supprimer les lignes sélectionnées dans la grille des centres de coût. |
| Supprimer le numéro de série | Il se réfère à la procédure qui permet de supprimer les lignes sélectionnées dans la grille des numéros de série. |
| Supprimer les lots | Il se réfère à la procédure qui permet de supprimer les lignes sélectionnées dans la grille des lots. |
| Importation | Il se réfère la procédure pour importer articles par un fichier. Le fichier doit être établi dans le tab 'Importation' des paramètres initial d'entrepôt. La pression de cette touche ouvre une fenêtre, appellée 'Importation', à l'intérieur de laquelle viennent visualisées toutes les lignes présentes dans le fichier dans la grille. En sélectionnant les lignes de la grille et en cliquant sur le touche 'Importer', les mêmes lignes viennent insérées dans la grille des mouvements de l'enregistrement d'entrepôt. |
| Importation par BarCode | Il se réfère à la procédure pour importer articles en liant leur code à barres avec un émule de clavier. La pression de cette touche ouvre une fenêtre, appellée 'Importation par BarCode', à l'intérieur de laquelle viennent visualisées toutes les lignes présentes dans le fichier de la grille. En sélectionnant les lignes de la grille et en cliquant sur le touche 'Importer', les mêmes lignes viennent insérées dans la grille des mouvements de l'enregistrement d'entrepôt. |
| Visualiser le stock pour l'article | Il se réfère à la procédure qui ouvre la fenêtre de ‘Visualisation stock' déjà filtrée pour l'article sélectionné dans la grille des mouvements et pour l'entrepôt établi dans l'en-tete de l'enregistrement. Si on clique sur le touche sans avoir sélectionné aucun article en grille, la procédure ouvre la ‘Visualisation stocks' filtrée seule pour l'entrepôt, mais en montrant les stocks de tous les articles présents en cet entrepôt. |






