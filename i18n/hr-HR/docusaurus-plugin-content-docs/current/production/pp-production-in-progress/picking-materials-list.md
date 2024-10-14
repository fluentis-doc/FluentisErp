---
title: Lista prelievo materiali
sidebar_position: 4
---

:::important A cosa serve
La **lista prelievo materiali** di Fluentis è uno strumento fondamentale per la gestione efficace dei materiali destinati agli ordini di produzione. Consente di creare e gestire elenchi dettagliati di materiali da prelevare, collegando direttamente l'operazione alle specifiche esigenze di produzione. Questa funzione è molto utilizzata per creare un documento di picking per gestire efficacemente il trasferimento dei materiali (ad esempio nel WIP), semplificando il processo logistico e garantendo una tracciabilità accurata.
:::

La lista prelievo materiali consente di creare e gestire le liste di prelievo dei materiali per gli ordini di produzione che ne prevedono l'utilizzo.

È possibile ricercare tra gli ordini di produzione, in stato lanciato ed esecutivo, quello di interesse per poi effettuare due operazioni differenti.

La prima, tramite il pulsante **Cerca materiali**, permette di effettuare lo scarico di tutti i materiali contenuti nell’ordine di produzione che hanno come **tipo prelievo**, nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell’articolo, il valore **Con lista**. Questi i materiali vengono consumati nel momento in cui viene premuto il pulsante crea movimenti, che in questo caso, crea il movimento di scarico di magazzino.            

La seconda operazione permette di spostare i materiali dal magazzino in cui sono stoccati, al magazzino WIP ad esempio. Questo si verifica utilizzando il pulsante **Cerca materiali picking**; il quale permette di creare dei documenti di picking, quindi non delle vere e proprie registrazioni, ma dei documenti di spostamento dei materiali che si potranno visualizzare nella finestra Picking presente nell'area logistica.                
In questo caso, il pulsante **Crea movimenti** genera il documento di picking, nel quale per i materiali che sono con *Tipo prelievo con lista* verranno settate la causale e il magazzino che sono già presenti nella riga dei materiali dell'ordine di produzione per poter essere scaricati definitivamente; mentre, per i materiali con *Tipo prelievo Manuale* varranno settate la causale e il magazzino impostati nel “Tipo picking” utilizzato.  I materiali spostati nel magazzino WIP verranno poi scaricati all’interno delle dichiarazioni di produzione.            
La registrazione verrà fatta in un secondo momento tramite la procedura dedicata allo scarico del picking.        

## Filtro

In questo tab è possibile ricercare i picking desiderati in base ai filtri inseriti.

*Pulsanti specifici*:

> **Cerca materiali**: ricercando i materiali tramite questo pulsante, sarà poi possibile creare direttamente le registrazioni di magazzino. Tra tutti i dati riportati sotto riguardanti il dettaglio di ogni materiale, va sottolineata l'importanza del flag Mov. che dove attivo indica che per quel materiale è stato scelto il tipo di prelievo con lista nei Parametri MRP dell'articolo, mentre se il flag non è attivo significa che per quel materiale si è optato per il tipo di prelievo manuale. (per maggiori dettagli sul significato di questo tipo di prelievi si rimanda all'articolo relativo ai [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell'articolo).  
> **Cerca materiali picking**: ricercando i materiali tramite questo pulsante, sarà poi possibile creare dei documenti di picking, quindi non delle vere e proprie registrazioni, ma dei documenti di spostamento dei materiali che si potranno visualizzare nella finestra [Picking](/docs/logistics/picking/search-picking) presente nell'area logistica. In questo caso la registrazione verrà fatta in un secondo momento, dopo un secondo controllo. 
> **Crea movimenti**: permette, dopo aver selezionato i materiali in base al tipo di ricerca effettuata, di creare i movimenti di magazzino (lo scarico) oppure il documento di picking.
Nel caso in cui venga creato il picking, per i materiali che sono con *Tipo prelievo Con lista* verranno settati la causale e il magazzino che sono già presenti nella riga dei materiali dell'ordine di produzione; mentre, per i materiali con *Tipo prelievo Manuale* varranno settati la causale e il magazzino impostati nel *Tipo picking* del *Tipo picking* utilizzato.

## Ripristino registrazione

In questo tab è possibile ripristinare eventuali movimentazioni create nel tab precedente.