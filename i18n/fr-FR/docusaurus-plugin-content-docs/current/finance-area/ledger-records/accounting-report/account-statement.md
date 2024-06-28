---
title: Relevé de compte
sidebar_position: 3
---

Il se réfère au rapport de base pour obtenir le détail des mouvements comptables de chaque sous-compte, n'importe quel soit le type (actif, passif, coût, produit, registres): avec le rapport Standard pour chaque sous-compte il y aura une nouvelle feuille d'impression.

Élément caractéristique du rapport:

- il est possible, à travers le filtre agent, de redemander le relevé de compte de tous les clients dans lequel le registre a été inséré cet agent;

- il est possible de redemander les données à travers 'Visualiser montants en devise' (format A4 horizontal), ou sans ce flag, voir seul les données débit/crédit dans la devise de la société (format A4 verticaux), ou établir 'Visualiser les contreparties' avec le numéro des mouvements de contrepartie à montrer (format A4 horizontal), ou enfin les mouvements exprès en une spécifique devise (format A4 horizontal). Ces paramétrages sont enregistrés à niveau de chaque utilisateur pour les faire visualiser à la prochaine réouverture du masque;

- il est possible d'ordonner les enregistrements pour date enregistrement ou par date d'exercice. Ce paramétrage sera enregistrée à niveau de chaque utilisateur pour la proposer à la prochaine réouverture du masque. L'option devient de particulier intérêt si la clôture/réouverture des comptes soit effectuée avec la date enregistrement et d'exercice différent, au fin d'avoir un solde progressif significatif;

- il est beaucoup important éclaircir la gestion des filtres pour date respect au champ 'Date dernière ouverture des comptes'. À différence de la 'Visualisation des comptes', dans lequel sont toujours visibles tous les mouvements de chaque sous-compte, le rapport est un procès d'impression pour lequel est important la numérosité des records à visualiser au fin des prestations de la machine. En cette façon l'ERP proposera en impression les mouvements en considérant le solde initial à partir de la dernière ouverture des comptes, qui vient proposée comme la date plus autre qui soit précédente aux filtres initials du rapport. Enexemplifiant, si l'utilisateur filtre les mouvements par le 01/09/2007 au 31/08/2007, détail des mouvements reliés à enregistrements avec date à l'intérieur de la gamme 01/09-31/12/2007 (pour lequel, dans le rapport seront insérés seul les sous-comptes qui ont au moins un mouvement entre la date de la dernière ouverture des comptes et la date final de filtre). Si l'utilisateur, au contraire, supprime la date ouverture des comptes, le résultat sera égal à ce présent dans la visualisation des comptes.

Dernier détail spécifique qui il faut annoter est le fichier Standard dénommé CA_EstrattoConto(sint). rpt qui est possible de relier au rapport en objet: il se réfère à un rapport synthétique qui présent la liste de tous les sous-comptes sans aucun saut page. On conseille l'utilisation de ce rapport pour imprimer les grands livres à joindre aux impressions de clôture de l'exercice comptable.

Le rapport Standard CA_EstrattoConto(Controp). rpt et CA_EstrattoConto(NoValuta). rpt ne sont plus utilisés, mais ont été intégrés à travers certains paramètres dans le même rapport Standard CA_EstrattoConto.rpt.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Aperçu avant impression | Bouton pour exécuter l'aperçu avant impression du relevé de compte. |
| Impression | Bouton pour exécuter l'impression physique du document relevé de compte. |






