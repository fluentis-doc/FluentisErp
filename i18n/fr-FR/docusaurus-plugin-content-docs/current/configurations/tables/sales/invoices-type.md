---
title: Type factures
sidebar_position: 16
---

Le type de factures est utilisé pour déterminer les propriétés d'une facture.

RIBBON BAR: il représente le menu de la forme en objet, à savoir la zone dans laquelle est possible d'effectuer des actions. La liste des fonctionnalités possibles est représentée de suite:



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rechercher | Bouton pour effectuer la recherche d'un type document. |
| Insertion | Bouton pour insérer un nouveau type document. |
| Supprimation | Bouton pour supprimer le type document. |
| Aperçu avant impression | Bouton pour exécuter l'aperçu avant impression. |
| Impression | Bouton pour exécuter l'impression selon les filtres établis et la configuration de l'imprimante. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Type | Type facture. |
| Description | Description du type facture. |
| Nature facture | Nature associée au type facture. |
| Type n./description | Type numérotation associée au type facture. |
| De ordre | S'il est établi, il signifie que la facture peut être créée en exécutant une commande client. |
| Facture immédiate | S'il est établi, il signifie que la facture est du type immédiat et devront être compilées, dans la facture, aussi les données pour le transport. |
| Code de trans. | Code de transaction utilisés pour la déclaration Intrastat. |
| En statistique | S'il est étali, il signifie que la facture de ce type vient considérée pour les statistiques. |
| Proforme | S'il est établi, la facture est de type proforme et ne peut pas être comptabilisée. |
|  [Cause/Description cause](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header)  | Cause comptable utilisée pour la comptabilisation de la facture. |
|  *Cause analytique/Description cause analytique*  | Cause analytique utilisée pour la comptabilisation de la facture en comptabilité analytique. |
| Notes | Ils peuvent être insérées des notes descriptives du type facture. |
| Contrôle client | Dans l'insertion du sous-compte titulaire de l'ordre vient vérifié que le type compte soit obligatoriement client. |
| Bloque doc. impr. | S'il est établi, il n'est pas possible de modifier une facture déjà imprimée. |
| Intercommunautaire | S'il est établi, il se vérifie si la Nation du client est CEE, en cas contraire que le type facture et le client ne sont pas su même type si lance un message d'avis. |
| Exéc. fact. proforme | S'il est établi, et si la facture est proforme l'exécution exécute l'ordre, autrements l'ordre reste n'exécuté pas. |
| Cause de transport | Description de la cause du transport. |
| Crédit | S'il est établi, la facture avec ce type rentre dans le contrôle du crédit. |
| Excluser le bloque | S'il est établi, il signifie que aussi s'on supère le crédit, et le document vient bloqué, laisse de toute façon l'insérer et l'imprimer. |
| Cause entrepôt/Description cause entrepôt | Cause de traitement de la marchandise utilisée contenue dans les factures de ce type. |
| Entr./Description entrepôt | Entrepôt d'utilisation de la marchandise contenue dans les factures de ce type. |
| Regr. comptes | S'il est établit, en comptabilisation factures viennent regroupés les comptes. |
| Sans aditionner la quantité | S'il est établi, en exécution des ordres de ce type les quantités exécutées viennent ramenées dans le document d'exécution pour chaque ligne d'exécution. |
| Agr. Vend. TVA | S'il est établi, il vient cherchée pour l'article s'existe le code de TVA agricole, s'il n'existe pas il vient pris le code TVA normal. |
| Contrôler prélèv. déchargé | S'il est établi, au moment qu'on crée un bon de livraison par un prélèvement déchargé, s'active en automatique le flag déchargé pour le bon de livraison. |
| Bloquer la qté. prélèv. | Bloquer la quantité et la quantité alternative dans le bon de livraison créé par une liste UC. |
| Calculer les commissions | S'il est établi, pour les factures avec ce type ils viennent calculées les commissions des agents. |
| Séparer DDT | S'il est établi, il est possible de décharger aussi les factures différentes. |
| Gest.EDI | S'il est établi, pour les factures avec ce type est possible créer le fichier EDI. |
| N'exécutées pas prélèv. | S'il est établi, en créant la facture par le prélèvement, le prélèvement ne résulte pas exécuté. |
| Prix avec TVA | S'il est établi les prix en factures de ce type seront compris de TVA. |
| Comp.écon. | S'il est établi, le type facture a compétence économique. |
| Cause comp. écon. | Cause de compétence économique utilisée en comptabilisation des factures. |



| RibbonFunction | RibbonMeaning |
| --- | --- |
| Rapport d'impression | Il est possible de définir des rapport à utiliser pour typologie d'ordre. |
| Noméro de copie | Il est possible de définir le numéro de copie à imprimer pour typologie de facture. |






