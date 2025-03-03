---
title: Evasioni
sidebar_position: 7
---

Il ciclo di evasione in Fluentis serve a gestire in modo strutturato e integrato l'intero flusso operativo di vendita, dalla fase iniziale di offerta fino alla fase finale di fatturazione. Ogni fase è caratterizzata da procedure specifiche e configurazioni che garantiscono una gestione fluida e integrata del flusso di lavoro.

## Conversione da Offerta a Ordine

La procedura di conversione da offerta a ordine di vendita può essere avviata in due modalità:

- Dalla [Ricerca Offerte](/docs/sales/offers/search-offers): Selezionando una o più offerte e cliccando sul pulsante *Conversione* presente nella barra degli strumenti, è possibile eseguire una conversione massiva.
- Dalla [Testata](/docs/sales/offers/insert-offer) dell'Offerta: All'interno della singola offerta, il pulsante di *Conversione* nella testata consente di convertire l'offerta selezionata in un ordine di vendita.

Questa procedura permette di trasformare un'offerta di vendita in un ordine di vendita effettivo. Per eseguire correttamente la conversione, è necessario configurare il [Tipo di ordine](/docs/configurations/tables/sales/sales-order-types) desiderato nella tabella [Tipo di offerta](/docs/configurations/tables/sales/sales-offer-type). Inoltre, l'offerta deve avere una *Data di Conferma* inserita nella testata; in caso contrario, il sistema visualizzerà un messaggio pop-up per richiedere la conferma dell'offerta prima di procedere.

Durante la procedura di conversione, appare un pop-up con diverse opzioni:

- Gestione delle Righe Offerta: Se alcune righe dell'offerta sono già state convertite in ordine, il sistema chiede all'utente se vuole creare un nuovo ordine utilizzando tutte le righe dell'offerta o solo quelle non ancora referenziate.
- Crea/Aggiorna Progetto: Questa opzione consente di creare o aggiornare un progetto. Sono disponibili le opzioni: *Crea Nuovo Progetto Vuoto*, *Crea Nuovo Progetto da Offerta*, o *Crea Nuovo Progetto da Offerta e Template Progetto*. È necessario specificare il [Tipo Progetto](/docs/configurations/tables/project-management/project-type) da creare. Se il progetto esiste già, bisogna inserire il nome del progetto da aggiornare.
- Trasferimento Materiali/Risorse: Questa opzione consente di trasferire le risorse e i materiali dell'offerta, se [gerarchica](/docs/sales/offers/insert-offer), come righe articolo nell'ordine.

Una volta confermata la conversione, il sistema genera un nuovo ordine cliente utilizzando i dati dell'offerta e avvisa l'utente con un messaggio pop-up riguardante il successo della conversione, il numero dell'offerta convertita, la versione e il numero dell'ordine cliente generato. Le informazioni modificate in anagrafica durante la creazione dell'offerta (ad es. Annotazioni Cliente, Spedizione, Pagamenti) saranno riportate anche nell'ordine generato.

## Evasione da Ordini a DDT

La procedura di evasione da ordine a Documento di Trasporto è disponibile in due modalità:

- Evasione Massiva dalla [Ricerca Ordini](/docs/sales/sales-orders/search-sales-orders): Nella Ricerca Ordini, selezionare uno o più ordini da evadere e cliccare su Evasione DDT nella barra degli strumenti.
- Evasione dalla [Testata](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT: Nella Testata del DDT, utilizzare il pulsante Evasione da Ordine per aprire una finestra di selezione degli ordini confermati del cliente da trasferire nel DDT.

Questa procedura permette di trasformare uno o più ordini di vendita in uno o più DDT. Prima di avviare la procedura, è necessario configurare il tipo di DDT desiderato nella tabella [Tipo di ordine](/docs/configurations/tables/sales/sales-order-types). La procedura automatica consente la creazione di DDT solo se l'ordine è stampato e confermato.

Le condizioni per l'evasione sono:

- Il cliente degli ordini deve coincidere con il cliente del DDT.
- L'ordine da evadere deve avere il flag "Stampato" e una Data di Conferma Ordine.
- La tabella "Tipi DDT" deve avere il flag "Ordine", che indica che il DDT può essere generato a partire da un ordine.
- Se la procedura è avviata dalla Ricerca Ordini, i tipi di documento devono essere compatibili: nella tabella "Tipi Ordine", il tipo ordine da evadere deve avere impostato il tipo DDT corrispondente.

Dopo aver selezionato gli ordini e impostato i filtri, cliccando su *Trasferimento* si genererà il DDT con i dati dell'ordine. Se eseguita correttamente, l'ordine cambierà automaticamente stato in "Evaso" o "Parzialmente Evaso".

## Evasione da DDT a Fatture

La procedura di evasione da DDT a fattura può essere avviata in due modalità:

- Dal Menu [Procedure](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes): Andando su *Vendite > Fatture di Vendita > Procedure > Creazione da DDT*.
- Dalla [Testata](/docs/sales/sales-invoices/invoicing/header) della Fattura di Vendita: Utilizzando il pulsante *Evasione DDT* nella testata della fattura.

Questa procedura permette di creare una o più fatture a partire da uno o più DDT. La procedura si compone di tre tab principali:

- Valorizzazione: Consente di inserire filtri per selezionare i DDT da fatturare (con stato "Stampato") e specificare la data di creazione della fattura.
- Parametri: Configura le opzioni di raggruppamento per la creazione di una fattura da più DDT, come l'inclusione di DDT di anni e periodi IVA diversi, tipi di DDT diversi o con tassi di cambio diversi. È possibile anche definire il trattamento dei pagamenti, ripristinando quelli dell'anagrafica o mantenendo quelli specificati nei DDT.
- Precedenti: Permette di visualizzare, filtrare e annullare le operazioni di fatturazione precedenti.

Dopo aver selezionato i DDT e impostato i parametri, è possibile procedere con la creazione della fattura cliccando su *Creazione Fattura da DDT*.

L'evasione da DDT a fattura è completabile anche dalla testata della fattura stessa tramite il pulsante Evasione DDT.