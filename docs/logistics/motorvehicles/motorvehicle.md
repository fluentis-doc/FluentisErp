---
title: Nuovo automezzo
sidebar_position: 2
description: Guida alla gestione e codifica degli automezzi Fluentis ERP nel modulo Logistica.
schema: HowTo
tags:
  - logistica
  - automezzi
  - codifica
last_update:
  author: Fluentis Documentation Team
  date: 12-11-2025
keywords:
  - automezzi
  - logistica
  - dimensioni
  - piano di carico
---

# Nuovo automezzo

La tabella per la gestione degli automezzi si trova nel percorso **Logistica > Automezzi > Nuovo automezzo**.  
In questa tabella è possibile codificare i diversi *Automezzi* utilizzati e definirne le dimensioni.  
Un esempio di utilizzo degli automezzi codificati è presente nei [Piani di Carico](/docs/logistics/load-plans/create-plan/), nel tabulatore *Preparazione piano di carico*.  
La tabella consente di inserire nuovi record, cercare, visualizzare, modificare o cancellare quelli esistenti.

## Ricerca automezzi

La form è composta da un'area di filtro e una di risultato.  ato. 
Dopo aver impostato i filtri desiderati, cliccare sul pulsante **Ricerca** per visualizzare i risultati nella griglia di risultato.

## Inserimento Automezzi

Per inserire un nuovo automezzo:

1. Cliccare sulla prima riga vuota della griglia oppure premere il pulsante **Nuovo**.
2. Inserire almeno i campi obbligatori richiesti:

   - **Tipo automezzo**: tipologia del mezzo selezionata dalla tabella [Tipo automezzo](/docs/configurations/tables/logistics/motorvehicle-type);
   - **Codice**: codice identificativo del mezzo;
   - **Targa**: numero di targa del mezzo;
   - **Data registrazione**: data di registrazione del mezzo;
   - **Tipo carburanti autoveicolo**: tipo di carburante usato, definito nella tabella [Tipo di carburante](/docs/configurations/tables/logistics/motorvehicle-gas-type).

3. È possibile inoltre inserire campi opzionali come:

   - **Marca**: marca del mezzo presente nella tabella [Marchi automezzi](/docs/configurations/tables/logistics/motorvehicle-brands);
- **Modello**: indica il modello del mezzo presente nella tabella [Marchi automezzi](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **Data inizio**: indica la data di inizio di utilizzo dell'automezzo;     
- **Data scadenza contratto**: indica la data di scadenza del contratto dell'automezzo;  
- **Data chiusura**: indica la data dalla quale non è più possibile utilizzare l'automezzo;  
- **Descrizione**: permette di inserire una descrizione libera dell'automezzo;  
- **Conto**: permette di inserire il conto del cliente dell'automezzo;   
- **Proprietà autoveicolo**: permette di indicare la tipologia [Proprietà dell'autoveicolo](/docs/configurations/tables/logistics/motorvehicle-ownership); 
- **Autista assegnato**: permette di indicare l'[Autista assegnato](/docs/logistics/motorvehicles/motorvehicle-drivers) all'automezzo; 
- **Filiale aziendale**: permette di indicare la filiale aziendale;        
- **Progetto**: permette di indicare il progetto assegnato all'automezzo.

## Dettagli Automezzo

Nella parte inferiore della form sono disponibili i seguenti tab:

### Dettagli

Campi relativi alle caratteristiche fisiche e capacità dell'automezzo:

- **Vano**: vano dell'automezzo;
- **Targa**: targa identificativa;
- **Unità di misura portata**: unità di misura per la capacità di carico;
- **Portata massima**: capacità massima secondo l'unità di misura definita;
- **Unità di misura dimensioni**: unità utilizzata per le dimensioni (altezza, larghezza, profondità) e relative tolleranze;
- **Altezza**: altezza espressa nell'unità di misura dimensioni;
- **Larghezza**: larghezza espressa nell'unità di misura dimensioni;
- **Profondità**: profondità espressa nell'unità di misura dimensioni;
- **Tolleranza in altezza**: tolleranza di altezza;
- **Tolleranza in larghezza**: tolleranza di larghezza;
- **UM volume**: unità di misura per il volume;
- **Volume**: volume espresso nell'unità di misura volume;
- **Numero unità di carico contenibili**: numero massimo di unità di carico trasportabili;
- **Numero strati**: numero di strati caricato possibile.

### Periodo inattività automezzo

Consente di inserire i periodi durante i quali l'automezzo non è utilizzabile.  
Questi dati sono riportati nel [Planning](/docs/logistics/shipping/calendar).

I campi includono:

- **Descrizione**: permette di indicare la descrizione del periodo di inattività dell'automezzo;          
- **Da data**: permette di indicare la data di inizio del periodo di inattività dell'automezzo;          
- **A data**: permette di indicare la data di fine del periodo di inattività dell'automezzo;          
- **Motivo**: permette di inserire la motivazione codificata in [Motivi di assenza del conducente](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Riepilogo e approfondimenti

In questo documento è stata descritta la procedura completa per la codifica e la gestione di nuovi automezzi nel modulo Logistica del sistema ERP.

Per approfondire:

- [Piani di Carico](/docs/logistics/load-plans/create-plan/)
- [Autista assegnato](/docs/logistics/motorvehicles/motorvehicle-drivers)
- [Planning spedizioni e calendar](/docs/logistics/shipping/calendar)
- [Guida generale su funzionalità, pulsanti e campi comuni](/docs/guide/common)