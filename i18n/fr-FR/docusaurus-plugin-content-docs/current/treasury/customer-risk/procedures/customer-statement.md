---
title: Exposition clients
sidebar_position: 2
---

Le masque 'Exposition clients' permet d'avoir un tableau général global de toute la situation de risk en comparaison avec les divers clients, avec la possibilité d'obtenir des données pour agent, nation, en regroupant aussi pour les groupes sociétaires. On voit en détail les paramétrages présents et les valeurs redonnées, en considérant que les clients présentés dans le masque sont ces pour lesquels en registre a été inséré le flag 'Exposition clients'.

La section initiale des paramètres risk client repropose les mêmes paramètres par défaut de calcul établis pour le formulaire, avec en plus la gamme de dates d'enregistrements utilisés pour le contrôle livraisons (pour les détails voir le document successif).

Dans la section successive de l'en-tête est possible de filtrer pour un déterminé responsable (l'employé qui a été associé au registre client, premier tab 'administration'), filtrer les clients 'Étrangers' ou 'Italie', visualiser les données regroupées pour le 'groupe sociétaire' (il viendra visualisé un seul total pour le sous-compte inséré dans le champ du 'groupe sociétaire' présent dans la tab administration du registre client au contraire que chaque sous-comptes client de détail) et enfin regrouper (et filtrer) les données pour agent ou nation. À la droite est prévue la possibilité d'ordonner les données pour le code de compte/sous-compte ou pour description (raison sociale) du client.

On peut maintenant détailler les données visualisées en grille (dans lequel seront visualisées en rouge les lignes avec écartement):

**Impayés**: il vient ici visualisé le montant des impayés ne comptabilisés pas, ou (si le flag dans l'en-tête est inséré) aussi ces déjà comptabilisés;

**Chiff.d'aff. derniers** ** 12 mois**: il est le chiffre d'affaires (par la zone de vente et factures de vente) des 12 mois précédents à la date de référence;

**Écartement** ** jours**: il indique le numéro de jours d'écartement entre l'échéance moyenne et la date devise d'encaissement moyen, selon ce calculé avec la logique du masque 'Contrôle livraison' ouen renvoi pour les détails;

**Écartement jj éch** **.**: il indique lees jours d'écartement moyen de la date échéance respect à la date document;

**Chiffre d'affaires**: il est le chiffre d'affaires (par la zone de vente et factures de vente) par le début de l'année;

**DSO**: Days of Sales Outstanding, les jours de rotation du crédit. La formule de calcul est 365 * (comptes débit - comptes crédit effets en échéance impayées factures à comptabiliser) / Chiff.d'aff. derniers 12 mois. Si le chiffre d'affaires des derniers 12 mois est 0 alors aussi le DSO sera 0;

**Crédit et Crédit** ** assuré**: montant du crédit gestionnel et du crédit assuré;

**Solde** ** grand-livre**: il repropose les totals débit/crédit calculés par les comptes ou par le solde comptable;

**Paiem. à enreg. provis** **.**: montant des paiements des comptes reliés à enregistrements provisoires;

**Effets** ** en échéance**: montant des effets échéances (effets émisprésentés);

**À** ** comptabiliser**: ils sont les montants des bons de livraison (des types bons de livraison reliés au crédit) imprimés mais ne facturéspas encore);

**Tot. Exposition**: somme des ordres ouverts DDT à fact. fact. à compt. solde comptes/comp. effets arrivé à échéance impayés ne compt. pas;

**Échu**: montant des comptes ouverts et déjà échus:

**Échu par enreg. prov** **.**: comme le précédent, mais il dérive par les enregistrements provisoires;

**Ordres**: ils sont les montants des ordres (des types ordre relié au crédit) imprimés, ne confirmés pas mais n'exécutés pas encore.

À partir du masque de l'exposition client est possible: d'effectuer une impression des données visualisées, ou d'avancer au masque du 'Contrôle livraison' relativement à la ligne du client sélectionné, à travers le relatif bouton de gestion.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Calculer | Bouton pour calculer le risk client selon les filtres et les paramétrages indiqués. |
| Aperçu avant impression | Il se réfère à la procédure d'aperçu avant impression pour le calcul effectué. |
| Impression | Il se réfère à la procédure d'impression pour le calcul effectué. |
| Contrôle livraisons | Il se réfère à la procédure pour ouvrir le masque de contrôle livraisons. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

GRILLE DE RÉSULTAT: la grille de résultat représente la liste des calculs qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir un calcul d'exposition, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des exposititons.






