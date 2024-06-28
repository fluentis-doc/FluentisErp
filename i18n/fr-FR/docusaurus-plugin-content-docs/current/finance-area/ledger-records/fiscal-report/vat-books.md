---
title: Registres TVA
sidebar_position: 9
---

L'impression des registres TVA doit être effectuée pour chaque registre: il n'est pas permis l'impression globale de tous les registres de la période.

**Période TVA**: Il est le premier champ. À l'ouverture du masque ce pourrait être le mois précédent à l'actuel dans la période mensuelle ou le trimestre dans la périodicité du règlement établie dans les paramètres de comptabilité soit trimestriel;

Année de référence: c'est le deuxième champ;

**Registre TVA à imprimer**: ce champ n'est pas obligatoire seul si l'utilisateur demande l'impression du registre récapitulatif;

**Division**: il n'est pas à utiliser;

**Registre TVA**: il va imprimé pour société, en effet est permis le paramétrage de ce filtre seul dans le cas d'impression provisoire.

Les champs successifs visualisent quel est le dernier numéro de la page imprimée pour le registre établi: cette donnée vient reprise par le tableau Registre TVA.

Le flag **Visualiser** ** l'en-tête** et déjà établi par défaut: on enlève au moment qu'on devait faire viser les formulaires timbrés dans quels imprimer les registres, obligation qui n'est plus prévue. Avec ce flag il vient ramener le nom du registre TVA, de la société et le numéro/année des pages.



Le flag **Visualiser le type document **fera ajouter, dans les références des documents, aussi le type du document: peut servir dans le cas où les factures de vent aient plusieurs numérotations.

Le titre du registre vient repris par le nom du registre TVA et sera ceramené en impression avec l'option 'Visualiser l'en-tête'.



En appuyant dans l'option 'Définitive' la procédure ira à modifier la période de référence pour la faire correspondre à ce successif au dernier imprimé en définitive: sera en outre désactivés le filtre pour la division et le numéro de copies à imprimer. L'exécution de l'aperçu avant impression n'ira pas à bloquer la période et actualiser les contacteurs: seule l'exécution du procès d'impression physique ira à opérer le bloque de la période/registrée en comptabilité et à actualiser le contacteur des pages du tableau Registres TVA (et n'est pas importante que le procès d'impression aille à bonne fin ou non, il pourrait être aussi une impression dans le fichier). En exécutant l'impression o l'aperçu avant impression, l'ERP ira à vérifier s'il y a des trous dans l'enregistration et si l'ordre chronologique a été respecté, en bloquant l'impression définitive sauf si le registre TVA n'ait pas été désactivé le flag de contrôle en tableau. L'impression définitive N'est PAS nécessaire pour avancer à l'impression du règlement TVA périodique.



L'impression du registre récapitulatif exécute le rapport CA_RegistroRiep.rpt: ce type de rapport va à regrouper les totals des taux registre pour registre, avec une récapitulation finale de tous les achats ou de toutes les ventes.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Aperçu avant impression | Bouton pour exécuter l'aperçu avant impression du registre TVA. |
| Impression | Bouton pour exécuter l'impression physique du registre TVA. |






