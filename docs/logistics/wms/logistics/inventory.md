---
title: Inventario
sidebar_position: 6
---

Questa procedura è utilizzata per popolare una lista inventariale creata in wpf con gli articoli letti tramite barcode.      
Se un articolo viene letto una seconda volta (stessa Classe/Codice/Lotto (se gestito a lotti)) e indicato nella stessa ubicazione della prima, compare un pop-up che chiede se **Aggiungere** o **Sostituire** la quantità letta in precedenza.

Per l'utilizzo di questa form, non è necessario inserire nessun parametro nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

:::note Nota
È possibile variare il comportamento della lista inventariale relativamente all'ubicazione tramite il flag **Mantieni ubicazione** nella tabella dei [Tipi liste inventariali](/docs/configurations/tables/logistics/stock-lists-types). Questo se attivo, fa in modo che in fase di inventario con il WMS l'ubicazione inserita non verrà variata fino a quando non sarà letta un'altra ubicazione; nel caso in cui invece, fosse disattivato, l'ubicazione dovrà essere inserita ogni volta prima della conferma dell'articolo.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

