---
title: Gestione cash flow
description: Caricamento, modifica e gestione dei flussi di cassa in Fluentis ERP con strumenti di simulazione e acquisizione dati.
keywords:
  - cash flow
  - gestione flussi finanziari
  - simulazione cash flow
  - contabilità
sidebar_position: 2
schema: TechArticle
tags:
  - finanza
  - contabilità
  - cash flow
last_update:
  author: Fluentis Documentation Team
---

# Gestione cash flow

## Introduzione

Da questa maschera è possibile caricare e modificare i dati del cash flow.  
Le voci di menù consentono di creare o aggiornare i calcoli di simulazione del cash flow. Con la gestione manuale, l'utente può inserire righe direttamente oppure richiamare i dati tramite il pulsante **Acquisizione**, selezionando il tipo di flusso d'interesse che aprirà la relativa maschera di ricerca e selezione.

È possibile anche visualizzare il documento d'origine per valutarne i dati.

#### Pulsanti specifici

- **Salva**: Salva il cash flow in gestione.  
- **Ricerca tutti**: Esegue la ricerca dei flussi per i conti finanziari.  
- **Ricerca movimenti cash flow**: Esegue la ricerca dei movimenti per i tipi di flusso previsionale.  
- **Acquisizione**: Da questo pulsante l'utente può selezionare il tipo di flusso dal quale riprendere i dati previsionali da inserire nel cash flow in uso. Ogni dettaglio di questo pulsante aprirà un help contestuale specifico per il tipo di flusso, vedi applicazione a.  
- **Nuovo mov. cont.**: Attiva il cursore nell'inserimento di una nuova riga di dettaglio nei movimenti dei conti finanziari.  
- **Nuovo mov. flow**: Attiva il cursore nell'inserimento di una nuova riga di dettaglio nei movimenti previsionali.  
- **Ripristino tutti**: Cancella tutti i movimenti inseriti.  
- **Ripristino contabilità**: Cancella i movimenti dei conti finanziari.  
- **Ripristino cash flow**: Cancella i movimenti previsionali.  
- **Visualizza doc. orig.**: Visualizza il documento d'origine del flusso previsionale selezionata.

#### Pulsante (lista) *Acquisizione*

Le tipologie di acquisizione disponibili:

1. **Partite**: riprende le partite contabili dalla contabilità.  
2. **Contabilità**: riprende i saldi dei tipi conto finanziari.  
3. **Extra contabile**: importa le scadenze extracontabili del cash flow.  
4. **Fatture (acquisto/vendita)**: seleziona i dati delle scadenze fatture di acquisto/vendita.  
5. **Ordini (clienti/fornitori)**: seleziona le simulazioni dei dati residui degli ordini confermati.  
da queste maschere si selezionano le simulazioni dei dati residui degli ordini clienti/fornitori (stampati e confermati). Nel caso in cui si desideri confrontare la ricerca, ad esempio, con la form generale di ricerca degli ordini (clienti o fornitori), tenere presente che: 
     - nel cashflow sono selezionati (di default) solo gli ordini non evasi (con possibilità di attivare l'apposito flag per la ricerca di quelli parzialmente evasi, soltanto, oppure in aggiunta ai non evasi, di cui è comunque visibile in griglia il flag identificativo) 
     - vengono esclusi ordini senza dettaglio di righe con valore diverso da zero (altrimenti non generano scadenze) 
     - sono esclusi quelli forzatamente evasi
     - la divisa deve essere non vuota
     - il conto di testata deve essere valorizzato
     - il numero dell'ordine eve essere maggiore di zero
     - il tipo ordine deve avere il flag cashflow (come per la creazione automatica del cashflow)
     - la data conferma ordine deve essere valorizzata
     - l'ordine non deve essere già stato incluso in un'altro cashflow calcolato.  

L'help consente due modalità:

- **Visualizza ordini**: mostra i dati di testata degli ordini.  
- **Visualizza articoli**: mostra i dati delle righe ordine (quindi in caso di più righe sarà riportato più volte il numero ordine ed i dati di testata).

Flag **Escludi articoli in fattura** verifica se le righe dell'ordine sono già evase in fattura o DDT.  

*Esempio*: ordine con 3 articoli (il primo non evaso, il secondo parzialmente evaso ed il terzo totalmente evaso).  
- Con flag attivo:
  - nella modalità *Visualizza ordini* sarà estratto quell'ordine perchè la riga 1 e 2 non sono totalmente evase ed il valore per il cashflow sarà la somma della riga 1 ed il residuo ella riga 2.  
  - nella modalità *Visualizza articoli* sarà estratta solo la riga 1 perchè non evasa.

6. **Percipienti non contabilizzati**: consente di inserire nel cash flow i dati dei compensi percipienti non contabilizzati.  
7. **DDT (vendita/acquisto)**: permettono di riprendere i dati dei  DDT non valorizzate in fattura.  
8. **Conto lavoro (ordini/rientri)**: permettono di riprende dati dagli ordini di conto lavoro e dai relativi rientri non fatturati (lasciare le impostazioni di default di entrambe la maschere).
