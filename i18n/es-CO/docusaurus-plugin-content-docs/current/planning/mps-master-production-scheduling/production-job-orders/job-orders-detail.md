---
title: Commesse di produzione (dettagli)
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

In base allo stato della commessa (quindi schedulata, esecutiva etc), la riga della commessa avrà un colore diverso. I colori che si possono abbinare allo stato della commessa, vengono stabiliti all'interno dei [Parametri MS](/docs/configurations/parameters/production/mps-parameters), nella sezione *Colori delle commesse*.  

Sempre da questa form è possibile *creare nuove commesse*, sia **monoprodotto** che **multiprodotto** cliccando sui rispettivi pulsanti presenti nella *Ribbon Bar*: [Inserisci commessa](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) e [Inserisci commessa multiprodotto](/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

Facendo doppio clic su una delle commesse presenti nella griglia di risultato si entrerà nel dettaglio della commessa, i cui dati verranno approfonditi negli articoli Inserimenti nuova commessa monoprodotto e Inserimento nuova commessa multiprodotto.

La colonna *Costificata*, se il flag è attivo, indica che la commessa ha già almeno una costificazione al suo interno.

:::note **Nota bene**
La differenza tra la form **Commesse di produzione** e la form **Commesse di produzione (dettagli)**, è  che in quest'ultima è possibile visualizzare in griglia anche gli articoli presenti all'interno della commessa, mentre in quella senza dettagli sono visualizzati solo i dati di testata delle commesse di produzione.     
:::

*Pulsanti specifici*:

> **Modifica data commessa**: permette di variare la *data di merce pronta* e *di prevista fine* delle commesse selezionate andando ad indicare semplicemente la data nel pop up e confermando;          
> **Duplica commessa**: permette di duplicare la commessa selezionata;  
> **Cambia priorità**: consente di cambiare la priorità assegnata alla commessa;  
> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): tramite questo pulsante è possibile aprire la schermata relativa ai parametri MRP dell'articolo;    
> [Distinta base](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permette di aprire la schermata relativa alla distinta base dell'articolo;  
> [Cicli di lavoro](/docs/erp-home/registers/production/routes/new-route): permette di visualizzare il ciclo di lavoro e le relative fasi di produzione dell'articolo.