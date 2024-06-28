---
title: Créer
sidebar_position: 6
---

À partir de ce masque s'avance à la création d'un nouveau registre de paiement: le masque est le même aussi pour l'ouverture en modification/visualisation d'un registre déjà enregistrée.

Dans le premier menu déroulant on sélection le type de paiement de référence du registre. Dans les champs successifs la procédure propose l'année actuelle du système et la numérotation progressive du registre: comme date d'émission vient proposée la date actuelle.

**Banque**: à l'intérieur de ce champ il va inséré normalement le code de sous-compte du registre bancaire sur lequel émettre le registre: le caractère de la liaison à un registre bancaire est lié à la nécessité d'avoir les références Cin/abi/cab/compte courant nécessaires pour l'envoi télématique du tracé des virements Italie. Par le point de vue de la comptabilisation des paiements, au contraire, il n'a aucune nécessité particulière: ce sous-compte pourrait être un quoi que sous-compte du plan des comptes;

**Compte courant**: il vient compilé automatiquement sur la base du registre bancaire relié aux sous-comptes insérés: éventuellement peut être inséré et/ou modifié manuellement;

**Notes** ** initiales**: il est un champ libre de notes de paiements, n'utilisé pas dans le Standard;

**Notes** ** finales**: il vient utilisé dans la comptabilisation paiements pour valoriser la description de détails du mouvement comptable du sous-compte bancaire.

Le flag **Impose** ** cette date devise bénéficier** permet de définir, dans le tracé télématique, quelle soit la date devise à attribuer au bénéficier du paiement: en cas la date n'est pas spécifiée sera utilisée la date d'aujourd'hui. Si le flag n'est pas établi la date devise sera égal à la date échéance.

Sur la droite sont présents deux flag d'état du registre: le flag Imprimé ne vient pas géré automatiquement par le programme, au contraire le flag fichier émit vient actualisé sur la base de la création du fichier télématique. Il est possible de recréer le fichier aussi sans réinitialiser ce flag en registre.

La gestion des détails des paiements s'effectue normalement à travers le bouton de 'Paiements par les comptes': se réfère de sélectionner donc la liste des comptes comptables à fermer avec le paiement en registre. En ce masque de sélection par les comptes, entre les divers filtres et le flag disponibles, est utile signaler qui: et déconseillé l'utilisation du flag de visualisation des comptes receveurs, ce parce que la gestion du paiement si doit effectuer par le formulaire receveurs pour pouvoir obtenir la certification des retenues; le flag 'Imposer banque d'appui par le registre du fournisseur' signifie ir à utiliser comme banque bénéficiaire du paiement la banque par défaut insérée dans le registre fournisseur dans la section paiements, grille des banques d'appui, ce indépendamment par la banque d'appui reliée au compte dans son enregistrement comptable de création. Ce deuxième flag peut être prédéfini par défaut dans les paramètres du formulaire.

Il vient permis la modification des valeurs de paiement inséré dans la grille, aux fins d'obtenir par exemple paiements partiels, ainsi comme l'ajoute de lignes paiement manuel: en ce deuxième cas se réfère à une exagération qui peut ira à créer une différence entre soldes comptables du sous-compte inséré et solde du grand livre, parce que la procédure de comptabilisation paiements ne va pas à gérer une éventuelle ouverture du compte de signe opposé de balancement des sections si n'est pas établi le flag 'Ouverture des comptes' dans la cause. Le champ réduction permet de relever uniquement réductions actives.

Le dernier détail dans la gestion de la grille se réfère au champ **Notes**: ce vient compilé automatiquement sur la base des comptes payés selon les références du document qui vient fermé. Ces notes seront ramenées dans les lignes de paiement insérées en comptabilité générale, en correspondance du sous-comptes relatif.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Nouveau paiement | Bouton pour insérer, manuellement, une ligne de paiement fournisseur. |
| Enregistrer | Bouton pour enregistrer l'en-tête du nouveau paiement fournisseur, activable après avoir inséré, le type paiement et le sous-compte bancaire. |
| Supprimer les paiements sélectionnés | Bouton pour supprimer les paiements fournisseurs créés manuellement ou par la création du paiement de comptes. |
| Créer un paiement par les comptes | Bouton, activable après avoir enregistré l'en-tête, pour créer un paiement, en achatant les données par les archives comptes. |
| Numérotation de |  |
| Documents | Bouton pour la liaison à la gestion documentale. |






