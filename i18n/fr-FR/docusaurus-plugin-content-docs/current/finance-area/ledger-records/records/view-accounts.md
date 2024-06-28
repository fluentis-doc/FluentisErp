---
title: Visualisation des comptes
sidebar_position: 2
---

Le masque de 'Visualisation des comptes' permet de visualiser les mouvements comptables de n'importe quel compte ou sous-compte comptable, de la typologie qu'on veut (actif, passif, coûts, profits): tous les mouvements de tous les exercices comptables sont toujours en ligne, mais pourront être modifiés ou non selon la clôture de la période comme impressions fiscales obligatoires ou comme les opérations de la clôture des comptes.

Dans la partie supérieure il faut insérer un code de compte ou directement un sous-compte de détails: les champs de filtre suivants, au contraire, sont une option et prévoient prédéfinis le filtre pour les mouvements de la division active et le flag des enregistrements définitifs.

La grille des donnés visualise, par défaut ordonné pour la date d'enregistrement ascendant, la liste des mouvements selon les filtres établis: en supposant d'avoir filtré pour un compte x avec 'de date enregistrement' 01/01/yyyy, on a dans les champs en haut de la section 'Solde précédent' les totals de débit et crédit des enregistrements précédents aux 01/01/yyy, dans la grille des enregistrements le champ 'progressif' visualisera dans la première ligne ce montant actualisé de la valeur de la même ligne pour être successivement actualisé ligne pour ligne (IMPORTANT: se signifie qui ce progressif a signifié seul si l'ordre ascendant pour la date enregistrement ou date d'exercice pas dans les autres cas); dans les totals sur la base du masque au contraire on aura comme 'Solde sélection' la somme de débit et crédié qui sont sélectionnés dans la grille, comme 'Solde courant' la somme de débit et crédit des lignes visualisées dans la grille, comme 'Total' il aura la somme de débit et crédit du solde précédent et du solde courant pendant que le champ 'Soldes' sera effectivement le solde final ou en débit ou en crédit (qui correspondra toujours au progressif visualisé dans la dernière ligne).

Un autre élément qui faut tenir présent dans la gestion de la grille est la suivante: il y a deux séries de sous-comptes visualisés, le sous-compte titulaire (qui vient repris par le sous-compte titulaire de l'enregistrement dans lequel est reprise par le même mouvement) et le sous-compte de détail qui est effectivement le sous-compte dont on recherche les mouvements. Par exemple, si on est en train de visualiser les mouvements d'un compte générique de coût, on a eu dans le sous-compte titulaire les codes des fournisseurs qui ont envoyé des factures enregistrées à ce compte de coût et dans le sous-compte de détail de chaque sous-compte de coûts spécifiques relevés.

Les opérations qui sont possibles d'effectuer à niveau de 'Visualisation des comptes' sont:

- double click dans la chaque ligne visualisée, en ce cas, si l'utilisateur a des droits relatifs, cherchera d'ouvrir en modification l'enregistrement d'appartenance du mouvement;

- appuyer le bouton 'Modification' aura le même effect du double click qu'on vient de décrire;



- appuyer le bouton 'Doc. origine', quand est active, ira à ouvrir en Visualisation (si l'utilisateur a le droit) la facture d'achat ou de vente qu'avec la comptabilisation a créé le mouvement de comptabilité sélectionné;

- appuyer le bouton 'Détails' (active si est sélectionnée seule une ligne) pour visualiser en une grille séparée tous les mouvements de l'enregistrement comptable d'appartenance. À peine le curseur sera déplacé en un autre record supérieur, la grille sera désactivée.

La procédure de visualisation des comptes est formée dans le suivant façon:

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Visualiser les comptes | Bouton pour visualiser les enregistrements comptables précédemment insérées. |
| Modifier | Bouton pour modifier un nouvel enregistrement comptable précédemment insérée. |
| Document d'origine | Bouton à travers lequel rappeler le document d'origine dans lequel s'est formé l'enregistrement comptable. |
| Détails | Il visualise, dans la grille résultat, le détails de l'enregistrement comptable sélectionné. |

ZONE DE FILTRE: la zone de filtre est celle dédiée à recevoir la liste des possibles types de données grâce à lesquelles est possible d'effectuer une sélection. Les filtres sont typiquement en condition 'AND' et est possible de spécifier plusieurs critères des filtres en même temps.

GRILLE DE RÉSULTAT: òa grille de résultat représente la liste des enregistrements qui correspondent aux données de filtre surspécifie. L'utilisateur, après avoir spécifié les valeurs par lesquelles désire obtenir une recherche des enregistrements, en appuyant le touche [Recherche] présent dans la rélative Ribbon, obtiendra dans la grille de résultat la liste des enregistrements désirés.






