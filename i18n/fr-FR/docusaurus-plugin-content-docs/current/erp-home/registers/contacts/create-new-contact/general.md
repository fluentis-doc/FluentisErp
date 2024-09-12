---
title: Données communes
sidebar_position: 3
---

Cette fiche représente le détail des données lié par le registre en utilisation. Tous les éléments de la partie supérieur du masque sont communes, comme données de rubrique, pour toutes les sociétés actives dans la base de données en utilisation. Seul la partie d'assignation des sous-comptes comptables dans la grille en bas est spécifiée de la société en utilisation et permet de définir quels sont ses particulières caractéristiques d'administration/commerciaux.

**Raison sociale** est le champ à l'intérieur duquel définir le prénom du sujet: il sera assigné à tous les sous-comptes comptables définis pour le registre en utilisation et sera ramené à travers ce en chaque impression comptable/de document.

Sur la base du texte ici inséré, en quittant par le champ, le gestionnel ira à engendrer automatiquement un 'Surnom', c'est-à-dire un code univoque bref d'identification du même registre: c'est modifiable par l'utilisateur, mais il doit être unique dans la liste de tous les registres. Étant donnée que la recherche du sujet (si comptable) sera effectuée typiquement sur la base de la raison sociale, ce champ n'est pas particulièrement important;

Le flag** C** **omptable**, présent par défaut dans les nouvelles insertions, permettra de définir les détails de gestion d'administration/commercial pour les sous-comptes associés auregistre en utilisation;

**Adresse**: il est l'adresse de du siège légal;

**Code postal**: il est le code postal;

**Province**: champ éditable à l'intérieur duquel insérer la municipalité du siège legal. Il est présent un aide communes pour rechercher dans la liste des communies ainsi comme définis en tableaux [Home > Tableaux > Paramètrages générals];

**Notes**: champ libre à l'intérieur duquel est possible de définir, p.ex. le texte complèt de l'adresse à ramener en impression des documents, sans devoirs changer adresse+code postal+municipalité+province;

**Nation**: code de la nation pour le registre en utilisation, ainsi comme défini dans le tableau [Home > Tableaux  >  Paramétrages générales]. Il faut ramener que ce champ est la base pour l'individuation des sujets présents en Nations à fiscalité privilégiée. [Home > Tableaux > Paramétrages généraux  > Nations livre noire], pour la relative déclaration fiscale de la zone d'administration;

**Région**: code de la région d'appartenance [Home > Tableaux > Paramétrages généraux];

**Langue**: code de la langue [Home > Tableaux > Paramétragesgénéraux] de référence pour les communications adressés au registre en utilisation. Il est possible d'engendrer une rapportistique automatiquement en langue sur la base du dictionnaire défini en ARM (Application Ressource Manager);

**Date naissance**: le champ n'est plus en utilisation. Il se reporte au paragraphe 'Personnes de référence' du présent document;

**Compte TVA**: champ proposé par le code ISO international de la nation (défini dans le même tableau Nations) et par le relatif compte TVA. Le champ est sujet à test de cohérence du caractère de contrôle pour les comptes TVA italiens (test exécuté à la sortie du champ ou manuellement avec le bouton successif);

**Code fiscal**: champ pour l'insertion du code fiscal du sujet;

**Personne physique/juridique**: il indique si le sujet est un privé ou non;

**Téléphone**: champ pour l'insertion du téléphone principal du contact;

**Télécopie**: champ pour l'insertion de la télécopie principale du contact;

**Modem**: champ pour l'insertion du numéro de modem du contact;

**Télex**: champ pour l'insertion du numéro de télex du contact;

**Http**: champ pour l'insertion du site web du contact;

**Courrier électronique**: champ pour l'insertion de l'adresse du courrierélectronique par défaut du contact;

**Numéro client**:

**Date der. variation**: champ qui visualise la date du dernier enregistrement effectué pour le registre en utilisation;

**Date fine validité**: champ pour bloquer l'utilisation du registre en utilisation. Une fois établit cette date, le système demandera s'attribuer cette fine validité sur tous les sous-comptes comptables associés au même registre: sur aucun, sur une seule société en utilisation, sur toute la société ou si annuler la modification;

**Code EDI**: code identifiant du registre pour le fichier EDI;

**Numéro intérieur**: numéro intérieur pour le fichier EDI;

**Code vendeur**:

**N.reg. camion.**: pour les registres relatifs à transporteur, est le code du sujet dans le registre des camionneurs.

Dans la section **Accès Web** est possible d'habiliter l'accès à travers Internet Explorer à l'ARP, en habilitant le registre et assignat le prénom utilisateur et le mot de passe d'accès.

Dans la section inférieur est présente la grille avec la liste des sous-comptes comptables associés au registre en utilisation: ces partege ont donc, les memes données communes généraux. L'insertion prévoit l'identification du type compte civil à créer (client, fournisseur, banque, agent) et sur la base de ce, par les paramètres de comptabilité générale, il vient proposé le compte associé et le prochaine numéro de sous-compte à son intérieur. S'ils  sont présents plusieurs comptes pour le type compte sélectionné, il ne sera pas proposé aucun compte et sera sous la direction de l'utilisateur sa description (à travers l'aide des comptes éventuellement). Voix de frais, dérogabilité, description2 et description3 sont les données statistiques ou de complément. 

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les modifications apportées au registre en utilisation. |
| Ouvrir gestion | Bouton pour ouvrir la gestion de détail du sous-compte comptable sélectionné. Selon le type de compte relié (client, fournisseur, banque, agent) s'ouvrira un masque avec caractéristiques spécifiques, ainsi comme détaillé ensuite dans le présent document. |
| Insertion compte | Bouton pour positionner le curseur à l'insertion d'une nouvelle ligne de compte/sous-compte pour le registre en utilisation. |
| Supprimer | Bouton pour supprimer le sous-compte sélectionné. La supprimation sera permise si et seul si ne sont pas présents références dans le programme sur le même sous-compte. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion de document. Se reporte au document spécifique. |






