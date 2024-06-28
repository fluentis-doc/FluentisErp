---
title: Tab gestion
sidebar_position: 2
---

L'opérativité de la procédure prévoit d'indiquer initialement pour quel exercice comptable on veut avancer au calcul, après quoi on indiquera la date d'enregistrement/exercice à assigner aux enregistrements à créer ainsi comme les causes à utiliser pour la rectification et l'intégration. L'option de chaque enregistrement ira ou non à cumuler en chaque enregistrement toutes les rectifications et en un autre toutes les intégrations.

Une fois enregistrer ces paramétrages s'activera le bouton de calcul qui ira à peupler la section en dessous avec la liste des redressements proposés: à l'intérieur de ces sera indiquée la typologie d'opération, les références à l'enregistrement d'origine, le numéro des jours de la rectification et après, éditables, le montant et le sous-compte de relevé. Si les causes établies prévoient la gestion à CDC/CDP et le mouvement d'origine ait les relatifs données à rectifier/intégrer, dans la section en dessous seront présents aussi les détails des calculs relatifs.

La phase successive sera celle de confirmer, ligne pour ligne, que le montant calculé est correct et complet à travers le paramétrage du flag 'Contrôlé', opération qui activera par conséquence la modificabilité et les relatifs flag de contrôle aussi de la section en dessous relative aux CDC/CDP. Toutes les lignes avec l'état 'contrôlé' seront objet de du relevé en comptabilité qui sera exécutée en appuyant le bouton de comptabilisation. L'utilisateur peut avancer à créer plusieurs comptabilisations main qu'ils viennent définies les détails, ainsi comme avancer à recalculer la liste pour vérifier qui n'a pas été ajouté autres opérations (typiquement d'intégrations d'enregistrements du nouvel exercice avec compétence précédent) ou créer redressements nouveaux pour ces. Il est de toute façon présente dans la liste de restauration de la situation précédente.



S'ils ont été effectuées les modifications aux enregistrements en comptabilité pourrait être utile utiliser le bouton 'Vérifier le calcul': ce bouton ira à effectuer un recalcul ligne pour ligne, en montrant éventuelles différences respectes à ce déjà proposé dans la grille, avec le bouton pour aligner les différences ou non, qui ira aussi à supprimer les lignes de rectification/intégration reliée à mouvements comptables n'existent plus (il ne sara pas possible comptabiliser si présentes lignes avec références à mouvements n'existent pas, il faudra passer pour ce masque à les supprimer).



Une dernière annotation, bien importante: si les redressements ont déjà été comptabilisés: actuellement n'existe aucun bloque à la modification par l'utilisateur du mouvement d'origine qui a porté à la rectification, l'unique bloque est à la supprimation de l'enregistrement qui n'est pas permis. On rappelle donc la maximale attention dans l'entré en modification des enregistrements qui soient impliqués dans les opérations de redressement de fin année.

Le dernier détail à rappeler est relatif à la procédure de Clôture automatique des comptes: en cet est présent une option de virement automatique des opérations de redressement en queue aux enregistrements de réouverture des comptes. Avec cette option l'ERP avancera à relever, à la date de réouverture, le virement des rectifications pendant qui opérera le virement des intégrations à la date de l'enregistrement d'origine du même redressement.



RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer l'en-tête, activable après avoir completé les mêmes données. |
| Calculer | Bouton pour le calcul qui ira à peupler la section en dessous avec la liste des redressements proposés. |
| Vérifier le calcul de redressement | Bouton qui ira à effectuer un recalcul ligne pour ligne, en montrant éventuelles différences respectes à ce déjà proposé dans la grille. |
| Comptabiliser | Bouton pour la comptabilisation des lignes, avec établi le flag de contrôlé. |






