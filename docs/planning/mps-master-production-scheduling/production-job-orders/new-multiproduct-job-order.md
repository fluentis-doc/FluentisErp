---
title: Commessa Multiprodotto
sidebar_position: 5
---

La form si apre tramite il percorso **Pianificazione > Commesse di produzione** cliccando nella form **Commesse di produzione** sul pulsante **Inserisci commessa multiprodotto**.

## Pulsanti specifici

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): tramite questo pulsante è possibile aprire la schermata relativa ai parametri MRP dell'articolo;  
> [Distinta base](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permette di aprire la schermata relativa alla distinta base dell'articolo;  
> [Cicli di lavoro](/docs/erp-home/registers/production/routes/new-route): permette di visualizzare il ciclo di lavoro e le relative fasi di produzione dell'articolo.

## Gestione commesse multiprodotto

Questo tab si presenta uguale a quello presente nella schermata di [inserimento commesse monoprodotto](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

La *differenza sostanziale* sta nel fatto che non è presente una sezione in cui viene inserito l'articolo con i suoi relativi dati come avviene per la creazione di una commessa monoprodotto, ma bensi questo spazio è sostituito da una griglia che permette l'inserimento non di uno, ma di più articoli essendo appunto una commessa multiprodotto.

I campi presenti nella griglia, sono gli stessi della [commessa monoprodotto](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order); l'unica differenza è il campo **Progressivo** che è un campo editabile dall'utente,  in cui viene proposto un progressivo di riga della *Commessa di Produzione Multiprodotto* e le date di previsto inizio/fine, la data suggerita e la data di inizio e fine previsione vengono specificate per ogni articolo presente nella commessa multiprodotto (resta comunque la sezione Data prevista e Data effettiva riferite allo stato complessivo della commessa multiprodotto).

### Riferimenti ordini clienti

Il tab contiene una griglia di sola lettura, in cui compaiono gli ordini clienti collegati alla commessa di produzione di riferimento quando la commessa è stata generata da una o più righe ordini clienti.  
**Tipo/Anno/Numero**: in queste colonne vengono visualizzati il *Tipo/Anno/Numero* dell'ordine cliente in cui è contenuta la riga di cui viene esposto il dettaglio;  
**N./Quantità/*UM**: in questa colonna viene visualizzata la quantità della riga dell'ordine cliente di cui viene esposto il dettaglio;  
**Data merce pronta**: in questa colonna viene visualizzata la data della merce pronta che è stata impostata nella riga dell'ordine cliente di cui viene esposto il dettaglio;  
**Conto**: in questa colonna vengono visualizzati conto e sottoconto del cliente a cui è intestato l'ordine cliente in cui è contenuta la riga di cui viene esposto il dettaglio.

### Extra data

Anche questo tab è costituito da una griglia in cui verranno riportati tutti gli extra data collegati all'articolo presente nella commessa di produzione.

##  Costificazione

Tutte le informazioni relative alla **Costificazione** si possono consultare nella pagina [Costificazione](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra data

Questo tab, che affianca il tab *Gestione commesse multiprodotto*, contiene tutto l'insieme degli [extra data](/docs/configurations/utility/extra-data/extradata/search-extradata) collegati alla commessa di produzione.

Per i dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).