---
title: Liste di Trasferimento UDC (versione WPF e WMS)
sidebar_position: 2
---

### Liste di Trasferimento UDC (versione WPF)

Le **Liste di Trasferimento UDC** sono molto simili alle [Liste di prelievo UDC / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), con la differenza che vengono utilizzate nel caso di movimentazioni di UDC all’interno dei propri magazzini, mentre **Liste di prelievo UDC / Packing list** sono impiegate nel caso in cui si voglia spedire la merce ad un cliente.     

Dalla maschera di **Ricerca** è possibile ricercare le liste precedentemente inserite.     

Per creare una nuova lista cliccare **Nuovo**.          
I dati obbligatori da inserire sono:         
**Tipo picking**: inserire la tipologia di [picking](/docs/logistics/picking/picking-management) da utilizzare;       
**Utente**: inserire il dipendente codificato che crea il documento;      
**Utente per conf.**: inserire il dipendente che ha il diritto di confermare la lista.    

Dopo aver inserito questi dati e gli altri se necessario è possibile salvare la Lista di trasferimento. Dato che si tratta di un trasferimento, è necessario inserire anche il **Magazzino di partenza** e il **Magazzino di destinazione**.       

*Pulsanti specifici:*

> **Gestione UDC**: selezionando una Lista di trasferimento e cliccando questo bottone viene aperta la maschera **Gestione UDC** in cui vengono proposti le UDC disponibili per il trasferimento. E' possibile trasferire l'UDC con il pulsante **Sposta UDC**.             
> **DDT**: crea il DDT dalla **Liste di Trasferimento UDC** selezionata.    

Per tutte le informazioni su come utilizzare questa form da WMS consultare le [Liste di Trasferimento UDC](/docs/logistics/wms/udc/loading-unit-transfer-list)


### Liste trasferimento UDC (versione WMS)

Questa procedura è utilizzata per la creazione di liste di traferimento con unità di carico.     
Le **Liste di Trasferimento UDC** sono molto simili alle [Liste di prelievo UDC / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), con la differenza che vengono utilizzate nel caso di movimentazioni di UDC all’interno dei propri magazzini, mentre **Liste di prelievo UDC / Packing list** sono impiegate nel caso in cui si voglia spedire la merce ad un cliente.        
Il relativo movimento di magazzino verrà generato solo tramite la procedura di [Conferma trasferimento](/docs/logistics/wms/udc/confirm-transfer). 

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

Per questo parametro la casuale di magazzino può essere lasciata vuota.

:::note Nota
Se nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente, un solo magazzino, viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

