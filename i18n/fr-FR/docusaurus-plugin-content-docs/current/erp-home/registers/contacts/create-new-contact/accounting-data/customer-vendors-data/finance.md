---
title: Administration
sidebar_position: 2
---

Les champs présents sont les suivantes:

**Position TVA**: il est le taux TVA à proposer dans le cycle de document actif/passif et dans les enregistrements comptables. En détail, la priorité de valorisation dans les documents prévoit la vérification des déclarations d'intention, après le registre client/fournisseur et enfin le registre article; pour l'administration, il vient utilisé uniquement le registre client/fournisseur (et agent);

**Sous-compte factures à recevoir**: indiquer en ce champ le sous-compte patrimoniel (prioritaire respect par défaut inséré dans les paramètres de comptabilité) à utiliser dans la procédure de la zone d'achats 'Comptabilisation factures à recevoir';

**Devise**: le champ, obligatoire, vient proposé par défaut sur la base de la devise de la société, mais il peut-être modifié pour avoir cette proposition dans la création des documents et des enregistrements comptables;

**Sous-compte de facturation**: le champ, en utilisation pour les registres clients, permet de définir pour le sous-compte en utilisation, quel est le sous-compte, sur quel donner un titre pour la facture dans le cours de la création des factures par le DDT;

**Type compt. article**: pour les comptabilisations de Fluentis, il permet de définir la logique de valorisation du sous-compte de détail du chiffre d'affaires achats/vente;

**Sous-compte de paiem. (pai. fourn.)**: ce sous-compte permet de prédéfinir quel est le sous-compte à utiliser dans la comptabilisation des paiements fournisseurs. Le champ vient aussiassocié aux comptes comptables créés, aux fins de pouvoir vérifier la canalisation des paiements/encaissements dans les impressions des échéanciers et dans les simulations de Cash Flow;

**Types compt. TVA**: le champ permet de définir, en combinaison avec le paramétrage des causes de comptabilité générale, quel est le sous-compte TVA d'achat/vente à utiliser dans les enregistrements titulaires du sujet en utilisation. Il existe un type compt. TVA par défaut à l'intérieur des paramètres de comptabilité;

**Coût industriel de contrepartie**: il est le sous-compte à proposer par défaut dans les enregistrements de comptabilité industrielle;

**Coût/produit de contrepartie prédéf.**: il est le sous-compte de comptabilité générale à proposer par défaut dans les enregistrements comptables TVA; en cas de comptabilisation des documents par les achats/ventes, ce sous-compte est la valeur par défaut à utiliser dans le cas où n'a pas été inséré un chiffre d'affaires achats/ventes dans les lignes article;

**Coût/produit de contrepartie altern.**: cette grille permet de prédéfinir la liste des sous-comptes et le relatif taux TVA à proposer dans les enregistrements IVA du sujet; pour utiliser l'option il faut qui soit établie une 'Position TVA' par défaut et ne soit pas insérée aucun coût/produit de contrepartie prédéfini;

**Utilisation à comptes ouverts**: le flag vient proposé par défaut et est obligatoire pour pouvoir gérer automatiquement les comptes ouverts. Les sous-comptes qui ont ce flag peuvent être contrôlés compatiblement, selon les paramétrages des causes comptables, pour garantir qui il y a correspondance entre le solde comptable et le solde grand-livre;

**Retenue d'acompte**: pour activer la gestion de ce sujet à l'intérieur du formulaire Receveurs;

**Type retenue**: le champ activé par le précédent flag, définit le type retenue à proposer par défaut à la création de la rémunération;

**Code serv.**: en cas de sujet avec flag 'Intrastat', il est possible d'indiquer le code service par défaut pour les sections quater et quinquies de la déclaration Intrastat;

**Signe**: signe qui définit si les frais vont sommées ou déduis pour obtenir la valeur statistique de la marchandise dans les déclarations Intrastat;

**N. facture de trasp.**: le flag ne permets pas à l'utilisateur qui l'utilise la création de factures de vente de transport;

**Facturation récapitulative**: il habilite la possibilité de regrouper plusieurs documents de transport en une unique facture d'achat/vente, selon les logiques de regroupement de la même procédure;

**Intrastat**: flag qui habilite la gestion de la déclaration Intrastat pour les documents/enregistrements par l'utilisateur;

**Pourc. frais Intr.**: il indique le pourcentage moyen des frais à ajouter/enlever à la valeur des marchandises pour le calcul de la valeur statistique dans la déclaration Intrastat;

**Ne regroup. pas pour dest.**: il indique que pour le sujet en utilisation il n'est jamais possible de regrouper les bons de livraison pour destination dans le cours de la création des factures de vente;

**Regr. pour CM**: pour le sujet les bons de livraison de transport vont regroupés pour la commande pour créer les factures de vente;

**CUP**: le flag habilite le champ CUP en en-tête des commandes de vente/factures de vente/achat;

**Code client RID**: code à utiliser dans les fichiers des registres RID;

**Gestion RAEE**: il habilite la gestion du RAEE dans les factures de vente;

**Gest. EDI**: il habilite la gestion des fichiers EDI;

**Exclure par la liste noire**: pour les sujets de nation liste noire, le flag permet d'exclure le sujet par les mouvements ramenés dans la déclaration;

**Art. 62**: il habilite la gestion des échéances pour les marchandises périssables selon l'art. 62;

**Cig.**: le champ habilite le champ CIG en en-tête des commandes de vente/factures de vente/d'achat;

**Catégorie d'administration**: donnée statistique de la catégorie d'administration associée au sujet;

**Catégorie commerciale**: donnée statistique mais aussi de configuration des remises selon les critères d'association définis dans les catalogues de la zone de vente;

**Catégorie de facturation**: critère de filtre pour la procédure de création factures de vente par le DDT;

**Sous-compte chef du groupe**: dans l'analyse des risks client, il permet d'assembler les clients qui apparaissent au même groupe d'entreprises;

**Annotation générales**: notes qui viennent ramenées dans l'en-tête des documents d'achat/vente;

**Responsable**: pour les analyses du risk client, sujet intérieur responsable commercial du sujet.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les modifications au registre en utilisation. |
| Calculation remise | Bouton pour assigner, au registre client en utilisation, une configuration remises (définies dans le formulaire Catalogues de vente de la zone de vente). Ce bouton est actif seul à l'intérieur d'un registre client. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Document manager | Gestion du document. Se revoie au document spécifique. |






