---
title: Exportations
sidebar_position: 2
---

À partir de ce masque s'exécutent les exportations données pourdocFinance, avec trois différentes options:

**Exporter registre**: l'activation de ce flag imposera au système de créer le fichier d'alignement du plan des comptes et des registres. Une fois établi s'activeront les champs reliés successifs, où établir le prénom fichier et le parcours partagé de création (les deux données seront enregistrées pour être reproposés à la création successive). Le premier champ 'Date dernière exportation' permetde définir la date de référence pour l'exportation des seules données modifiées/ajoutée dans le plan des comptes: est permis de supprimer cette date en façon de créer un fichier complet de tous les paramétrages de plan des comptes/registre (ce a un impact significatif sur les temps nécessaires à l'alignement entre les deux systèmes);

**Création automatique Flux de trésorerie**: avec ce flag le programme ira à créer un nouveau flux de trésorerie dans le formulaire homonyme, abord d'avancer à l'éventuelle exportation des données du point successif. La création arrivera avec les paramètres par défaut de la procédure 'Création automatique flux de trésorerie': on renvoie à la documentation spécifique pour ultérieurs détails;

**Exporter Flux de trésorerie**: avec ce flag le système ira à créer le fichier des flux financiers, soit comme comptes comptables qui comme prévisionnels. Au moment que le flag vient établi, s'active le successif flag 'Déductibilité par les registres/types paiement' et leschamps avec les prénoms et le parcours portagé de création du fichier (les deux enregistrés). En détail, selon qui a été établi leflag 'Déductibilité par les registres/types paiement' ou non, la logique d'assignation de la déductibilité change: en case n'est pasétablie, la déductibilité dérivera par le registre client/fournisseur et si ici n'est pas établie sera calculée avec codes fix ('01' pour les reçus bancaires, ou '01' - '02' - '03' - '04' si différence entre la date échéance et la date actuelle rendre une date échue, une différence inférieure aux 30 jours, par les 30 aux 90 ou plus de 90).

Sur la base du masque va défini l'utilisateur qui ira à exécuter la création des fichiers. Il faut que ce ait accès aux dossiers portagés établis pour la création des fichiers.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Avec ce bouton est possible d'enregistrer les paramétrages à proposer par défaut dans le masque. |
| Exportation | Exécuter la création du/des fichier/s ainsi comme établis dans le masque. |






