---
title: Autisti automezzi
description: Gestione e codifica degli autisti associati agli automezzi nel modulo Logistica.
keywords:
  - automezzi
  - logistica
  - spedizioni
  - Fluentis ERP
sidebar_position: 3
schema: HowTo
sidebar_label: Autisti automezzi
tags:
  - logistica
  - automezzi
  - spedizioni
last_update:
  author: Fluentis Documentation Team
  date: 10-11-2025
---

# Autisti automezzi

Questa sezione descrive come gestire e codificare gli **autisti associati agli automezzi**, con dettagli su ricerca, inserimento e gestione dei periodi di inattività.

La tabella si trova sul percorso **Logistica > Automezzi > Autisti automezzi**.

Gli autisti codificati in questa tabella potranno essere selezionati nelle [Spedizioni](/docs/logistics/shipping/shippings).  
È possibile inserire nuovi record o ricercare quelli esistenti per visualizzarli, modificarli o cancellarli.

## Ricerca Autisti automezzi

La form è composta da un’area di **filtro** e da un’area di **risultato**.  
Dopo aver impostato tutti i filtri desiderati, premere il pulsante **Ricerca** per visualizzare i risultati nella griglia.

## Inserimento Autisti automezzi

Per inserire un nuovo autista è possibile cliccare sulla prima riga vuota della griglia oppure premere il pulsante **Nuovo**.  

I campi obbligatori da compilare sono:
- **Nome**  
- **Cognome**

### Campi opzionali

- **Patenti di guida**: consente di selezionare la patente dell’autista tra quelle presenti in [Patenti di guida automezzi](/docs/configurations/tables/logistics/motorvehicle-driving-licences).  
- **Risorsa assegnata**: permette di indicare la [Risorsa progetti](/docs/configurations/tables/project-management/project-resources/) assegnata al veicolo.  
- **Dipendente**: consente di associare un dipendente interno.  
- **Dipendente esterno assegnato**: permette di inserire manualmente un dipendente esterno associato alla risorsa.

### Pulsante disponibile

- **Cancella**: consente di eliminare il record selezionato.

## Periodo di inattività autista

Nella griglia *Periodo di inattività autista* è possibile inserire i periodi di inattività, che verranno riportati nel [Planning](/docs/logistics/shipping/calendar).

### Campi disponibili

- **Descrizione**: descrizione del periodo di inattività dell'autista.  
- **Da data**: data di inizio del periodo di inattività dell'autista.  
- **A data**: data di fine del periodo di inattività dell'autista.  
- **Motivo**:rappresenta la motivazione codificata in [Motivi di assenza del conducente](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Riepilogo e approfondimenti

Questa guida spiega come inserire, ricercare e gestire gli **autisti automezzi**, inclusi i periodi di inattività e i riferimenti alle spedizioni e risorse associate.  

Per approfondire:
- [Spedizioni](/docs/logistics/shipping/shippings)
- [Patenti di guida automezzi](/docs/configurations/tables/logistics/motorvehicle-driving-licences)
- [Motivi di assenza del conducente](/docs/configurations/tables/logistics/driver-off-time-reasons/)
