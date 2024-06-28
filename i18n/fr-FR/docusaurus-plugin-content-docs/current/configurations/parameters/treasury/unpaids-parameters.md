---
title: Paramètres impayés
sidebar_position: 2
---

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les paramétrages. |





Les paramètres du formulaire Impayés se trouvent en [Home > Paramètres > Trésorerie].

Dans les paramètres des impayés est possible de préétablir les éléments par défaut à proposer dans les procédures du formulaire. En particulier:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Compte transitoire + frais de protêt | Avec tel paramétrage on avancera à la réouverture des comptes clients sur un compte transitoire, pour le même montant de l'effet d'origine, et débiter les frais au compte bancaire. |
| Client + frais de protêt | On conseille le paramétrage du choix sur 'Client frais de protêt' aux fins de pouvoir rouvrir le compte client, pour le même montant de l'effet d'origine, et débiter les frais au compte bancaire. |
| Réouverture du compte relatif à la facture | On conseille le paramétrage du choix sur 'Réouverture du compte relatif à la facture'. Avec cette option, en effet la procédure ouvrira un nouveau compte, mais avec les mêmes références au numéro et date document de la facture d'origine. En cas d'effet récapitulatif de plusieurs documents seront insérés le premier de la liste, mais dans les notes du compte seront gérés la liste de tous les références.  |
| Ouverture d'un nouveau compte | L'option alternative, ouverture d'un nouveau compte, ira au contraire à créer un nouveau compte avec numéro et date document attribue sur la base du numéro et date de l'effet allé à impayé. |
| Queuing au compte relatif à la facture | Le champ n'est pas géré. |
| Ouverture d'un nouveau compte | Le champ n'est pas géré. |





La section en-dessous est à établir si on veut evoir par défaut à proposer pour la création de la facture au client pour les frais d'impayé.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Type facture | Il permet d'établir le type de facture à utiliser. |
| Type pai. | Il permet d'établir le type paiement à utiliser. |
| Unité de mesure | Il permet d'établir l'unité de mesure de la ligne article. |
| Sol. paiement | Il permet d'établir la solution de paiement pour engendrer l'échéance relative. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Type facturation | Il permet d'établir le chiffre d'affaires de vente c'est-à-dire la contreparie de produit avec laquelle relever la première note d'opération. |
| Taux TVA | Il permet d'établir le taux TVA. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Type de facturation | Le champ n'est pas géré. |
| Taux TVA | Le champ n'est pas géré. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Type facturation | Le champ n'est pas géré. |
| Taux TVA | Le champ n'est pas obligatoire. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Cause de comptabilité | C'est la cause à proposer dans les procédures de comptabilisation impayés. |
| Compte frais de protêt | C'est le compte à utiliser pour relever les frais débités par la banque. |
| Compte transitoire | C'est le sous-compte de transir qui serait utilisé pour la comptabilisation si a été établie la gestion 'Compte transitoire frais de protêt'. On conseille de compiler de toute façon le champ (éventuellement avec le compte des frais) parce que sera demandé obligatoirement pour l'exécution de la procédure de comptabilisation. |
| Compte transitoire bancaire | C'est le document transitoire bancaire à utiliser si l'impayé est relatif à effets ne présentés pas avec la procédure (p.ex. en cas d'utilisation du formulaire DocFinance). |
| Compte débit frais au client | C'est le sous-compte de produit à utiliser dans la procédure de comptabilisations impayées sur cession si a été choisi l'option de débit frais au client. |
| Type intérêt | À l'impayé peut être relié un taux d'intérêt de référence. En cas de lettre de change peut être simulé un calcul initial d'intérêts entre la date échéance prévue du titre et la date de relevé de l'impayé. |
| Création simple compte | Ce flag permet d'ouvrir un simple compte pour l'impayé d'un reçu bancaire créé par N comptes différents. |






