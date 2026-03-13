---
title: Rilascio ordini di produzione
description: Procedura per il rilascio e il ripristino degli ordini di produzione in Fluentis, con gestione dei movimenti di magazzino automatici.
keywords:
  - ordini di produzione
  - rilascio ordini
  - ripristino ordini
  - Fluentis ERP
  - produzione
sidebar_position: 2
schema: HowTo
tags:
  - produzione
  - ordini di produzione
  - magazzino
  - procedure
last_update:
  author: Fluentis Documentation Team
---

# Rilascio ordini di produzione

:::important
La procedura di **Rilascio degli ordini di produzione** in Fluentis consente di passare gli ordini dallo stato *Lanciato* allo stato *Esecutivo*.  
Mediante un'interfaccia intuitiva, è possibile filtrare e selezionare gli ordini da rilasciare, generando al contempo i relativi movimenti di magazzino per il prelievo automatico dei materiali.  
La stessa procedura permette anche di eseguire il **ripristino** degli ordini già rilasciati, ripristinando lo stato precedente.
:::

Questa form consente quindi di:
- cambiare lo stato degli ordini di produzione;
- generare i movimenti di scarico di tutti gli articoli che hanno, nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell'articolo, come *Tipo di prelievo* il valore **Automatico**;
- ripristinare ordini già rilasciati, eliminando i movimenti creati.


## Filtro

Il tab **Filtro** consente di visualizzare tutti gli ordini di produzione in stato *Lanciato* che devono ancora essere rilasciati.  
Sono disponibili diversi criteri di selezione per restringere la ricerca.

### Procedura di ricerca e rilascio

1. Impostare i criteri di selezione desiderati nel tab **Filtro**.
2. Fare clic su **Ricerca** nella *ribbon bar* per visualizzare gli ordini nella griglia dei risultati.
3. Selezionare uno o più ordini da rilasciare.
4. Fare clic su **Rilascio ordini** per:
   - aggiornare lo stato degli ordini da *Lanciato* a *Esecutivo*;
   - generare automaticamente i movimenti di magazzino di scarico di tutti i materiali che hanno, nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell'articolo, come *Tipo di prelievo* il valore **Automatico**.  

## Ripristino

Il tab **Ripristino** consente di annullare un rilascio già effettuato, riportando l’ordine allo stato precedente ed eliminando i movimenti di magazzino collegati.

### Funzionamento del tab Ripristino

- Dopo aver impostato i filtri, cliccare su **Ricerca**.
- Gli ordini rilasciati e ripristinabili vengono mostrati nella griglia di risultati.
- Selezionando una riga, nella griglia di risultati vengono visualizzati nella griglia sottostante i relativi movimenti di magazzino creati.

### Procedura di ripristino

1. Impostare i filtri e avviare la ricerca.
2. Selezionare uno o più ordini in stato *Esecutivo*.
3. Cliccare su **Ripristino** per:
   - riportare lo stato dell’ordine da *Esecutivo* a *Lanciato*;
   - eliminare i movimenti di magazzino generati al rilascio.

### Condizioni per il ripristino

Il ripristino è possibile solo se:
- l’ordine si trova nello stato **Esecutivo**;
- **non** sono state effettuate dichiarazioni di produzione.

Il ripristino **non è possibile** se l’ordine è nello stato *Evaso*, a meno che non si proceda a ritroso partendo dal rollback della registrazione della dichiarazione di produzione.

Gli ordini ripristinati torneranno automaticamente visibili nel tab **Filtro**, da cui potranno essere nuovamente rilasciati.


## Riepilogo e approfondimenti

La procedura di **Rilascio ordini di produzione** di Fluentis permette di:
- gestire il passaggio dallo stato *Lanciato* a *Esecutivo* degli ordini di produzione;
- generare automaticamente i movimenti di magazzino per il prelievo materiali;
- ripristinare gli ordini rilasciati quando non ancora dichiarati.

Per approfondire funzionalità correlate:
- [Parametri MRP degli articoli](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- [Funzionalità, pulsanti e campi comuni](/docs/guide/common)