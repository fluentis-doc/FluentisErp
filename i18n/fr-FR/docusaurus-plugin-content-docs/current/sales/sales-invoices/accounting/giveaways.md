---
title: Hommages
sidebar_position: 3
---

Dans le tab Hommages s'établissent certains éléments généraux de la comptabilistion des factures.

**Comptabilisation hommages**: avec ce flag s'active la gestion de la comptabilisation hommages, en activant les champs successifs reliés. Si la facture qu'est en train de comptabiliser présent un hommage mais le paramètre de gestion n'a pas été établi, le système demandera confirmation à l'utilisateur avec un avis du manqué paramétrage. En cette situation sera enregistrée la facture sans aucune gestion de la ligne hommage, qui ira donc géré manuellement en comptabilité. Si la gestion des hommages s'est activée mais sans insérer aucun sous-compte dans les champs successifs, le système ira à ajouter, dans les normals mouvements de comptabilisation, les nécessaireslignes de ristourne du profit en utilisant le même sous-compteétabli par l'article de ventes. Si au contraire a été établi le flag 'Substituer le compte de l'article' s'activera le champ où établir le sous-compte de ristourne acomptes, qui sera utilisé au lieu du sous-compte de l'article en ces lignes additionnel. Le champ du 'Compte ristourne TVA', au contraire, opère si l'article hommage en facture n'a pas le flag 'RechangeTVA', qui indique se la TVA appliquée à l'article hommage est payé par (avec le flag) ou pas (sans le flag) par le client. Combien le montant sera enregistré et ristourné seul si le compte de ristourne TVA est inséré, ou l'opération sera gérée manuellement en comptabilité (aussi en ce champ il y a un message de confirmation/avis du manqué paramétrage);

**Créer fichier XML**: avec ce flag le programme ira à créer une tracé xml du résultat de la comtptabilisation, dans le dossier établie dans le champ successif;

**Sous-compte remise financier**: ce champ vient visualisé par enregistrer la remise financière reliée à l'échéance facture.

RIBBON BAR: ilreprésente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer paramètres | Il permet d'enregistret les paramètres insérés. |






