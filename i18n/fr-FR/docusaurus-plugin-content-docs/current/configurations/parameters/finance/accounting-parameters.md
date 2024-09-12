---
title: Paramètres de comptabilité
sidebar_position: 2
---

Les Paramètres de comptabilité se trouvent en [Home > Paramètres  >  Administration].

Le masque des Paramètres de comptabilité permet de définir les divers paramètres de gestion de chaque année comptable sélectionnée dans la grille de gauche.

Il faut signaler deux boutons de gestion du masque: le bouton d''Annulation des impressions définitives du livre journal' et ce d''Impression définitive du livre immobilisations', lequel utilisation est liée à un spécifique droit utilisateur gérable avec l'ApplicationResourceManager activable pour chacun. En les deux cas, une fois annulée l'impression définitive, l'utilisateur doit réinitialiser les contacteurs relatifs.

On rappelle enfin que les paramètres de comptabilité est letableau base pour individuer la dernière année de gestion actif pour la procédure de génération de la nouvelle année comptable qu'on trouve à l'intérieur des Utilité.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Enregistrer | Bouton pour enregistrer les paramétrages relatifs à l'année de gestion comptable sur lequel s'est positionnés. |
| Insertion | Bouton pour insérer une nouvelle année de gestion comptable. |
| Supprimer | Bouton pour supprimer l'année de gestion comptable sur lequel s'est positionnés. |
| Insertion compte | Bouton pour insérer les types de comptes registres autorisés pour chaque compte inséré. Le paramétrage autorise le remplacement automatique du compte générique en cause  avec le sous-compte titulaire du document fiscal, ainsi comme va à bloquer ou signaler les comptes incompatibles. |
| Supprimer le compte | Bouton pour supprimer les comptes précédemment insérés. |
| Annuler les impressions définitives | Bouton pour avancer à l'annulation des impressions définitives du livre journal, lequel est lié à un spécifique droit utilisateur gérable avec l'ApplicationResourceManager activable pour chacun. Une fois annulée l'impression définitive, l'utilisateur doit réinitialiser les contacteurs relatifs. |
| Annuler livre amortissements | Bouton pour avancer à l'annulation des impressions définitives du livre immobilisation, lequel est lié à un spécifique droit utilisateur gérable avec l'ApplicationResourceManager activable pour chacun. Une fois annulée l'impression définitive, l'utilisateur doit réinitialiser les contacteurs relatifs. |

#1.1 Tab général

| RibbonFunction | RibbonMeaning |
| --- | --- |
| Début/fin période en ligne | Champs obligatoires, si définent la gamme de dates document gérable à l'intérieur des enregistrements de l'exercice sélectionné. |
| Début/fin exercice en ligne | Champs obligatoires, si définent la gamme de dates d'exercice gérable à l'intérieur des enregistrements de l'exercice sélectionné. |
| Clôture exercice précédent | Il défine la date de clôture de l'exercice précédent. |
| Date dernière impression livre journal | Il enregistre la dernière date imprimée en définitive pour l'exercice courant. À l'ouverture d'un nouvel exercice cette date doit correspondre avec la date de clôture de l'exercice précédent. |
| Début/fin exercice | Il définit la gamme de dates enregistrement de l'exercice sélectionné. Chaque enregistrement comptable pour les contrôles des champs précédents, vient insérée dans l'exercice d'appartenance respect à cettes dates, qui ne doivent pas se superposer entre les divers exercices. |
| Dernière page livre journal imprimée | Il enregistre la dernière page du livre journal de l'exercice sélectionné imprimée en définitive. À la création d'un nouvel exercice ce champ doit être établi à zéro. |
| Dernière ligne livre journale imprimée | Il enregistre la dernière page du livre journal de l'exercice sélectionné imprimée en définitive. À la création d'un nouvel exercice ce champ doit être établi à zéro. |
| Solde débit/crédit | Il enregistre les derniers soldes débit/crédit du livre journal de l'exercice sélectionné imprimée en définitive. À la création d'un nouvel exercice ce champ doit être établi à zéro. |
| Dernière page livre immobilisations imprimée | Il enregistre la dernière page du livre immobilisationsde l'exercice sélectionné imprimée en définitive. À la création d'un nouvel exercice ce champ doit être établi à zéro. |
| Pourcentage pro-rata | Le champ permet d'établir la valeur pourcentage du pro-rata valable pour l'exercice sélectionné. En cas n'a pas un option à utiliser laisser le champ vide ou établi à 100%. |
| Cause ouverture et clôture comptes | Les deux champs, pas obligatoires, permettent de préétablir les causes à utiliser dans les procédures de clôture/ouverture des comptes. |
| Proposer centres de coût/profit de | La section définit l'ordre logique de valorisation comptable des centres de coûts/profit. |
| Type comptabilisation TVA | Le champ permet de définir le type de comptabilisation par défaut des taux TVA sur les divers sous-comptes du plan des comptes. |
| Règlement TVA | Il établit la périodicité des règlements TVA périodiques. |
| Type arrondissement TVA | Il établit l'arrondissement TVA toujours pour excès avec la sélection 'Lire' ou selon le logique euro. |
| Registres TVA | Il définit s'imprimer les registres TVA pour date enregistrement ou pour date d'exercice TVA à l'intérieur de la période sélectionnée. Pour qui ne se profit pas de la possibilité de facturation déférée entre le 15 du mois successif le résultat ne change pas. |
| Date exercice Plafond égale à | Il définit di la date d'exercice plafond à assigner aux mouvements TVA avec taux reliés au plafond va établie sur la base de la date d'enregistrement ou à la date document. |
| Liste des comptes clients fournisseurs | En cette section s'établissent les types de registres autorisés pour chaque compte inséré. Le paramétrage autorise le remplacement automatique du compte générique en cause avec le sous-compte titulaire du document fiscal, ainsi comme va à bloquer ou signaler les comptes incompatibles. |

#1.2 Tab comptesLa liste des comptes présents à l'intérieur du deuxième tabulateur n'est pas obligatoire, mais il permet de prédéfinir les sous-comptes à proposer en diverses procédures ou exploiter au meilleur certains automatismes de la procédure.



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Sous-compte TVA achats | Il permet d'établir le sous-compte à proposer dans le relevé automatique du virement TVA au moment de l'impression définitive du règlement TVA périodique. |
| Sous-compte TVA ventes | Il permet d'établir le sous-compte à proposer dans le relevé automatique du virement TVA au moment de l'impression définitive du règlement TVA périodique. |
| État patrimonial initial | Il permet d'établir le sous-compte à proposer pour les opérations d'ouverture automatique des comptes. |
| Bénéficie d'exercice courant | Il permet d'établir le sous-compte à proposer pour les opérations de clôture/ouverture automatique des comptes. |
| Pertes d'exercice courant | Il permet d'établir le sous-compte à proposer pour les opérations de clôture/ouverture automatique des comptes. |
| Bénéficie d'exercice précédent | Il permet d'établir le sous-compte à proposer pour les opérations de clôture/ouverture automatique des comptes. |
| Perte d'exercice précédent | Il permet d'établir le sous-compte à proposer pour les opérations de clôture/ouverture automatique des comptes. |
| Compte économique | Il permet d'établir le sous-compte à proposer pour les opérations de clôture automatique des comptes. |
| Moins-value | Il permet d'établir le sous-compte à utiliser dans le relevé des différences économiques négatives à cession immobilisations. |
| Plus-value | Il permet d'établir le sous-compte à utiliser dans le relevé des différences économiques positives à cession immobilisations. |
| Survenances actives | Il permet d'établir le sous-compte à utiliser dans le relevé des survenances actives. |
| Survenances passives | Il permet d'établir le sous-compte à utiliser dans le relevé des survenances passives. |
| Inexistences actives | Il permet d'établir le sous-compte à utiliser dans le relevé des inexistences actives. |
| Inexistences passives | Il permet d'établir le sous-compte à utiliser dans le relevé des inexistences passives. |
| Dettes vers trésor public | Il permet d'établir le sous-compte à utiliser dans le relevé des automatique du virement TVA au moment de l'impression définitive du règlement TVA périodique. |
| Crédits vers trésor public | Il permet d'établir le sous-compte de crédit vers trésor public à proposer dans le relevé des automatique du virement TVA au moment de l'impression définitive du règlement TVA périodique. |
| Compte équivalents | Il permet d'établir le sous-compte du client fictif de relevé patrimonial des équivalents. |
| Contrepartie équivalents | Actif si le précédent compte équivalents est activé, il permet d'établir le sous-compte de contrepartie économique des équivalents à aérer. |
| Taux TVA équivalents | Actif si le précédent compte équivalents est activé, il permet d'établir le taux TVA de relevé des équivalents à aérer. |
| Facture à recevoir | Le champ permet d'établir le sous-compte générique à utiliser dans la procédure de 'Comptabilisation factures à recevoir' présent dans le formulaire 'Factures d'achat', ou dans la comptabilisation des factures d'achat d'un type qui prévoit la gestion de l'exercice. |
| Facture à émettre | Le champ permet d'établir le sous-compte générique à utiliser dans la comptabilisation des factures de vente d'un type qui prévoit la gestion de l'exercice. |
| Charges payées d'avance | Le champ permet d'établir le sous-compte générique à utiliser dans la procédure des rectifications automatiques du formulaire 'Clôture intermediaires'. |
| Régularisations actives | Le champ permet d'établir le sous-compte générique à utiliser dans la procédure des rectifications automatiques du formulaire 'Clôture intermediaires'. |
| Produits reçus d'avance | Le champ permet d'établir le sous-compte générique à utiliser dans la procédure des rectifications automatiques du formulaire 'Clôture intermediaires'. |
| Régularisations passives | Le champ permet d'établir le sous-compte générique à utiliser dans la procédure des rectifications automatiques du formulaire 'Clôture intermediaires'. |
| Coûts suspendus | Sous-compte standard de relevé des coûts suspendus, pour la comptabilité simplifiée/professionels. |
| Profits suspendus | Sous-compte standard de relevé des profits suspendus, pour la comptabilité simplifiée/professionels. |






