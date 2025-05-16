---
title: Ricerca Ordini Pianificati
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Pulsanti specifici*:

> [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): tramite questo pulsante è possibile aprire la schermata relativa ai parametri MRP dell'articolo;             
> [Distinta base](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permette di aprire la schermata relativa alla distinta base dell'articolo;  
> [Cicli di lavoro](/docs/erp-home/registers/production/routes/new-route): permette di visualizzare il ciclo di lavoro e le relative fasi di produzione dell'articolo.
> **Attiva tassativo**: permette di attivare il flag **Tassativo** all'interno di tutti gli ordini pianificati selezionati;       
> **Disattiva tassativo**: permette di disattivare il flag **Tassativo** all'interno di tutti gli ordini pianificati selezionati.   

*Campi specifici*:

**Data inizio**: per gli ordini pianificati di acquisto o di conto lavoro rappresenta la data in cui deve essere inviato al fornitore l'ordine di acquisto che verrà successivamente generato con il rilascio dell'ordine stesso. Per gli ordini pianificati di produzione questa data rappresenta la data di previsto inizio della prima fase di lavorazione del ciclo dell'articolo;  
**Data FOB**(free on Board): rappresenta la data che viene calcolata sommando alla *Data di inizio previsto* il *Tempo di Approvvigionamento* inserito nel tab [Fornitori Preferenziali](/docs/erp-home/registers/items/create-new-item) dell'articolo oggetto dell'ordine pianificato, e viene gestita solo per gli articoli con tipo approvvigionamento *Acquisto*;  
**Data ETA**(Estimated Time of Arrival): rappresenta la data che viene calcolata sommando alla *Data FOB* il *Lead Time di Spedizione* inserito sempre nel tab *Fornitori Preferenziali* dell'articolo oggetto dell'ordine pianificato, e viene gestita solo per gli articoli con tipo approvvigionamento *Acquisto*;      
**Data fine**: per gli ordini pianificati di acquisto o di conto lavoro rappresenta la data in cui deve essere ricevuta la fornitura e quindi coinciderà con la data di previsto ricevimento della riga dell'ordine fornitore che verrà successivamente generato con il rilascio dell'ordine stesso. Per gli ordini pianificati di produzione questa data rappresenta la data di prevista fine dell'ultima fase di lavorazione del ciclo dell'articolo;  
**Da disponibilità minima**: il flag è attivo solo se l'ordine pianificato è stato generato utilizzando la procedura di *Schedulazione generale* e se, nei [Parametri di Schedulazione](/docs/planning/ms-master-scheduling/general-schedule), il flag che consente di *Considerare la disponibilità minima nel periodo* è attivo. Questo flag si attiva quando la *Data della disponibilità minima* nel periodo di schedulazione è successiva alla data di fabbisogno; in caso contrario sarà disabilitato;            
**Quantità confermata**: è diversa da zero solamente se l'ordine risulta generato dall'elaborazione dell'MRP;  
**Quantità impegnata**: è la quantità che risulta essere impegnata alla data corrente dell'articolo;  
**Tassativo**: se attivo, il flag indicherà che l'ordine pianificato di produzione non è spostabile rispetto alla data di inizio impostata al suo interno; questo è considerato solo dalla procedura di [Schedulazione a capacità finita](/docs/planning/ms-master-scheduling/finite-capacityscheduling).

All'interno della griglia, gli ordini verranno visualizzati con colori diversi in base al *Tipo di ordine pianificato* (se di acquisto, produzione e conto lavoro). Questa impostazione viene data all'interno dei [Parametri fabbisogno dei materiali](/docs/configurations/parameters/production/resource-requirements-parameters), nella relativa griglia dove si può scegliere il colore dello sfondo della riga o del testo dei diversi ordini.

Sempre da questa form è possibile inserire un nuovo ordine, cliccando sul pulsante [Inserisci ordine](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).
