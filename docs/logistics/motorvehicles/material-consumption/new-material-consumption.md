---
title: Nuovo consumo materiali
description: Creazione e gestione dei documenti di consumo materiali associati agli automezzi nel modulo Logistica.
keywords:
  - consumo materiali
  - automezzi
  - logistica
  - magazzino
  - Fluentis ERP
sidebar_position: 2
schema: HowTo
sidebar_label: Nuovo consumo materiali
tags:
  - logistica
  - automezzi
  - magazzino
last_update:
  author: Fluentis Documentation Team
  date: 10-11-2025
---

# Nuovo consumo materiali

Questa sezione descrive la procedura per creare un nuovo documento di **consumo materiali** associato a un automezzo, specificando campi di testata, dettagli operativi e gestione lotti.

La form **Nuovo consumo materiali** si apre premendo il pulsante **Nuovo** nella sezione **Logistica > Automezzi > Consumo materiali**.

## Dati di testata

La struttura della form è simile a una registrazione di magazzino e prevede la compilazione dei seguenti *dati di testata*:

- **Automezzo**: identifica l’automezzo per il quale vengono consumati i materiali. Deve essere codificato in [Gestione automezzo](/docs/logistics/motorvehicles/motorvehicle-management).
- **Numero**: consente di inserire manualmente il numero del documento.
- **Responsabile**: indica l’utente che ha creato il documento ed è valorizzato automaticamente.
- **Magazzino**: specifica il magazzino in cui verrà registrato il movimento.
- **Causale**: definisce la causale di magazzino con la quale verrà effettuato il movimento.

## Inserimento operazioni di consumo

Nella griglia centrale **Elenco operazioni effettuate** devono essere inseriti tutti gli articoli consumati, compilando i seguenti campi:

- **Classe / Codice articolo / Descrizione articolo**: indicano la classificazione, il codice e la descrizione dell’articolo.
- **Unità di misura**: specifica l’unità di misura dell’articolo.
- **Quantità**: indica la quantità dell’articolo consumata.
- **Variante**: consente di selezionare la variante dell’articolo.
- **Descrizione variante**: descrive la variante dell’articolo selezionato.
- **Progetto**: associa l’articolo a un progetto specifico.
- **Descrizione**: descrive il progetto collegato all’articolo.

:::important
È necessario compilare accuratamente tutti i campi per garantire la corretta tracciabilità dei movimenti di magazzino.
:::

## Gestione lotti degli articoli

Nella tabella sottostante è possibile inserire i lotti relativi all’articolo selezionato nella griglia principale.

**Campi specifici:**

- **Numero lotto**: identifica il numero del lotto.
- **Codice lotto fornitore**: indica il codice del lotto fornito dal fornitore.
- **Data inizio**: specifica la data di inizio del lotto.
- **Data scadenza**: indica la data di scadenza del lotto.
- **Quantità**: definisce la quantità associata al lotto.
- **Ubicazione**: indica il codice dell’ubicazione del lotto nel magazzino.

:::important
Assicurarsi che i lotti inseriti siano corretti, poiché influiscono sulla tracciabilità dei materiali e sulla gestione delle scorte.
:::

## Riepilogo e approfondimenti

Una volta completata la registrazione del **consumo materiali**, il sistema aggiorna automaticamente i movimenti di magazzino, garantendo una tracciabilità completa dei materiali associati all’automezzo.

Per approfondire:
- [Gestione automezzo](/docs/logistics/motorvehicles/motorvehicle-management)
- [Registrazioni di magazzino](/docs/logistics/warehouse/stock-records/record)
- [Funzionalità, pulsanti e campi comuni](/docs/guide/common)
