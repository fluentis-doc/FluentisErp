---
title: Lista prelievo materiali
sidebar_position: 4
---

La form consente di creare e gestire liste di prelievo materiali per gli ordini di produzione che ne prevedono l'utilizzo.

## Filtro

In questo tab è possibile ricercare i picking desiderati in base ai filtri inseriti.

*Pulsanti specifici*:

> **Cerca materiali**: ricercando i materiali tramite questo pulsante, sarà poi possibile creare direttamente le registrazioni di magazzino. Tra tutti i dati riportati sotto riguardanti il dettaglio di ogni materiale, va sottolineata l'importanza del flag Mov. che dove attivo indica che per quel materiale è stato scelto il tipo di prelievo con lista nei Parametri MRP dell'articolo, mentre se il flag non è attivo significa che per quel materiale si è optato per il tipo di prelievo manuale. (per maggiori dettagli sul significato di questo tipo di prelievi si rimanda all'articolo relativo ai [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell'articolo).  
> **Cerca materiali picking**: ricercando i materiali tramite questo pulsante, sarà poi possibile creare dei documenti di picking, quindi non delle vere e proprie registrazioni, ma dei documenti di spostamento dei materiali che si potranno visualizzare nella finestra [Picking](/docs/logistics/picking/search-picking) presente nell'area logistica. In questo caso la registrazione verrà fatta in un secondo momento, dopo un secondo controllo. 
> **Crea movimenti**: permette, dopo aver selezionato i materiali in base al tipo di ricerca effettuata, di creare i movimenti di magazzino (lo scarico) oppure il documento di picking.
Nel caso in cui venga creato il picking, per i materiali che sono con *Tipo prelievo Con lista* verranno settati la causale e il magazzino che sono già presenti nella riga dei materiali dell'ordine di produzione; mentre, per i materiali con *Tipo prelievo Manuale* varranno settati la causale e il magazzino impostati nel *Tipo picking* del *Tipo picking* utilizzato.

## Ripristino registrazione

In questo tab è possibile ripristinare eventuali movimentazioni create nel tab precedente.