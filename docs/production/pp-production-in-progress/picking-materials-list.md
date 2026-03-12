---
title: Lista prelievo materiali
description: Gestione delle liste di prelievo materiali per ordini di produzione in Fluentis, con creazione movimenti e documenti di picking.
keywords:
  - lista prelievo
  - materiali produzione
  - picking
  - Fluentis
  - ordini di produzione
sidebar_position: 4
schema: TechArticle
tags:
  - produzione
  - logistica
  - materiali
  - picking
last_update:
  author: Fluentis Documentation Team
---

# Lista prelievo materiali

:::important A cosa serve
La **lista prelievo materiali** di Fluentis è uno strumento fondamentale per la gestione efficace dei materiali destinati agli ordini di produzione. Consente di creare e gestire elenchi dettagliati di materiali da prelevare, collegando direttamente l'operazione alle specifiche esigenze produttive.  
È molto utilizzata per generare documenti di picking e gestire il trasferimento dei materiali, ad esempio verso il magazzino WIP, semplificando il flusso logistico e garantendo una tracciabilità accurata.
:::

La procedura consente di creare e gestire le *liste di prelievo dei materiali* per gli *ordini di produzione* che ne prevedono l'utilizzo.

È possibile ricercare tra gli *ordini di produzione*, in stato *lanciato* ed *esecutivo*, quello di interesse per poi effettuare due operazioni distinte:

- **Cerca materiali**: consente lo scarico dei materiali che, nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell’articolo, sono configurati con *Tipo prelievo: Con lista*. Il consumo effettivo avviene tramite il pulsante **Crea movimenti**, generando lo **scarico di magazzino**.  
- **Cerca materiali picking**: permette di spostare i materiali dal magazzino in cui sono stoccati (al magazzino WIP ad esempio) e la creazione di **documenti di picking**, cioè documenti di movimentazione non ancora registrati, visualizzabili nella finestra [Picking](/docs/logistics/picking/search-picking).  

Il pulsante **Crea movimenti** genera il documento di picking, impostando automaticamente:
  - per materiali con *Tipo prelievo Con lista*: causale e magazzino che sono già presenti nella riga dei materiali dell'ordine di produzione per poter essere scaricati definitivamente;
  - per materiali con *Tipo prelievo Manuale*: causale e magazzino impostati nel *Tipo picking* selezionato.

I materiali trasferiti nel magazzino WIP verranno poi scaricati all’interno delle **dichiarazioni di produzione**.  
La registrazione verrà fatta in un secondo momento tramite la procedura dedicata allo **scarico del picking**.

## Filtro

Nel tab **Filtro** è possibile ricercare i picking desiderati applicando i filtri disponibili.

### Pulsanti specifici

- **Cerca materiali**: ricercando i materiali tramite questo pulsante, sarà poi possibile creare direttamente le registrazioni di magazzino. Tra tutti i dati riportati sotto riguardanti il dettaglio di ogni materiale, va sottolineata l'importanza del flag Mov. che dove attivo indica che per quel materiale è stato scelto il tipo di prelievo con lista nei Parametri MRP dell'articolo, mentre se il flag non è attivo significa che per quel materiale si è optato per il tipo di prelievo manuale. (Per maggiori dettagli sul significato di questo tipo di prelievi si rimanda all'articolo relativo ai [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) dell'articolo).  
- **Cerca materiali picking**: ricercando i materiali tramite questo pulsante, sarà poi possibile creare dei documenti di picking, quindi non delle vere e proprie registrazioni, ma dei documenti di spostamento dei materiali che si potranno visualizzare nella finestra [Picking](/docs/logistics/picking/search-picking) presente nell'area logistica. In questo caso la registrazione verrà fatta in un secondo momento, dopo un secondo controllo.             
- **Crea movimenti**: permette, dopo aver selezionato i materiali in base al tipo di ricerca effettuata, di creare i movimenti di magazzino (lo scarico) oppure il documento di picking.  
Nel caso in cui venga creato il picking, per i materiali che sono con:  
> - *Tipo prelievo Con lista*: verranno settati la causale e il magazzino che sono già presenti nella riga dei materiali dell'ordine di produzione.  
> - *Tipo prelievo Manuale*: varranno settati la causale e il magazzino impostati nel **Tipo picking** utilizzato.  

## Ripristino registrazione

In questo tab è possibile **ripristinare** le movimentazioni create in precedenza.  
Selezionando una riga vengono visualizzati:  
- nel tab **Registrazioni di prelievo generate** → le registrazioni create;
- nel tab **Picking generati da prelievo** → i picking generati.

### Pulsanti specifici

- **Cancella lista prelievo**: ripristina contemporaneamente sia le registrazioni sia i picking generati.  
- **Cancella registrazioni**: ripristina esclusivamente la registrazione di magazzino selezionata.   
- **Cancella picking**: ripristina il documento di picking selezionato nel tab **Picking generati da prelievo**.

## Riepilogo e approfondimenti

La lista prelievo materiali permette di:

- gestire i materiali destinati agli ordini di produzione;
- creare movimenti di scarico o documenti di picking;
- gestire trasferimenti verso magazzini intermedi (es. WIP);
- tracciare e ripristinare facilmente registrazioni e picking.

Per approfondire:

- [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)
- [Picking – Area Logistica](/docs/logistics/picking/search-picking)
- [Funzionalità e campi comuni](/docs/guide/common)