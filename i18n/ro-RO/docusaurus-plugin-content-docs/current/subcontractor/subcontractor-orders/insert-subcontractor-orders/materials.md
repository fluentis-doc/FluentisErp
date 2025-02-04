---
title: Materiali
sidebar_position: 4
---

La form è costituita da due griglie che riportano i materiali da inviare al terzista per la lavorazione e i materiali che saranno impiegati al rientro del prodotto lavorato.
E' possibile inserire articoli codificati, non codificati e note. 

I materiali inviati e impiegati possono essere gestiti dall'operatore e in tal caso è necessario immettere la quantità, l'eventuale prezzo della lavorazione, la data di previsto rientro, la data di impiego del materiale. Questi dati sono invece già valorizzati nel caso in cui l'ordine provenga da *Schedulazione generale* o da *Elaborazione MRP*.

## Materiali da consegnare

**Codice articolo**: indica il materiale da consegnare per la lavorazione;  

:::note Nota
Nel caso in cui l'ordine di conto lavoro sia generato dal rilascio di un *Ordine pianificato di conto lavoro* o di un *Ordine pianificato di produzione* con una o più fasi esterne, i materiali da consegnare non verranno visualizzati se: non esistono i [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell'articolo, o il flag *Considera in conto lavoro* non è abilitato nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), o se il *tipo prelievo* nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) è *automatico*, o se [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) il *tipo prelievo* è *con lista* e il flag WIP non è abilitato.
:::

## Materiali da impiegare

**Codice articolo**: indica il materiale da impiegare al rientro del lavorato;  
**Impiego unitario**: quantità da impiegare per ogni unità del rientro del lavorato, nel caso di gestione automatica della schedulazione di distinte; questo dato è valorizzato dal sistema;  
**Impiego totale**: quantità totale da impiegare per la completa lavorazione nel caso di gestione automatica della schedulazione di distinte; questo dato è valorizzato dal sistema;  
**% scarto**: quantità da impiegare in più che risulta essere lo scarto;  
**Data prev. impegno**: in base a questa data il sistema pianifica la disponibilità del fabbisogno.