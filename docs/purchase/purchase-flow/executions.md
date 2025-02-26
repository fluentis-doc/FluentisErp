---
title: Evasioni
sidebar_position: 5
---

Il ciclo di evasione in Fluentis serve a gestire in modo strutturato e integrato l'intero flusso operativo di acquisto, dalla fase iniziale di richiesta di acquisto fino alla fase finale di fatturazione. Ogni fase è caratterizzata da procedure specifiche e configurazioni che garantiscono una gestione fluida e integrata del flusso di lavoro.

## Conversione da Offerta a Ordine

La procedura di conversione da offerta fornitore a ordine di acquisto può essere avviata: 

- Dal Menù [Procedure](/docs/purchase/offer-request/procedures/order-creation): andando su *Acquisti > Richieste di Offerta > Procedure > Creazione Ordine fornitore da Offerta fornitore*.

Questa procedura permette di trasformare una richiesta di offerta in un ordine di acquisto effettivo. 
Per eseguire la conversione è necessario configurare il Tipo ordine fornitore desiderato nella tabella [Tipo richiesta di offerta](/docs/configurations/tables/purchase/purchase-offer-type). 

Durante la procedura di conversione appare un pop-up con le seguenti opzioni:
- Richiesta di offerta: permette di creare un ordine di acquisto per ciascuna richiesta di offerta.
- Conto: permette di raggruppare le richieste di offerta per fornitore.
- Chiudi le offerte collegate: inserisce una *Data chiusura* per le RDO convertite in ordini di acquisto.

Una volta confermata la conversione, il sistema genera un nuovo ordine fornitore utilizzando i dati della richiesta di offerta e avvisa l'utente con un messaggio pop-up riguardante il successo della conversione.

Per maggiori dettagli sulla procedura si rimanda all'apposita pagina della documentazione.

## Conversione da Richiesta di Acquisto a Ordine

La procedura di creazione Ordine fornitore da Richiesta di Acquisto può essere avviata:

- Dal Menù [Procedure](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): andando su *Acquisti > Ordini Fornitori > Procedure > Creazione automatica ordini*.

Questa procedura permette la creazione di uno o più ordini di acquisto a partire da una o più richieste di acquisto e si compone di cinque tab:

- Filtro Da: consente di inserire filtri per selezionare le RDA (con stato "Autorizzata") da convertire in ordine.
- Scelta fornitore: permette di effettuare la scelta del fornitore a cui intestare l'ordine sulla base di diversi criteri tra cui: miglior prezzo di acquisto, fornitore preferenziale di default, migliore condizione di pagamento, ecc.
- Prototipi ordine: visualizza il riepilogo dell'ordine da creare e consente di generare un nuovo ordine oppure di aggiungere le righe articolo ad un ordine esistente. 
- Parametri: configura le opzioni di creazione dell'ordine, come il tipo ordine da creare e i dati da utilizzare se non sono codificati per ogni articolo. È possibile scegliere anche di considerare le disponibilità provenienti dalle varie aree del gestionale. 
- Operazioni: permette di visualizzare, filtrare e annullare le operazioni precedenti. 

Una volta confermato il prototipo d'ordine, cliccando sul pulsante *Genera ordini fornitore* il sistema creerà gli ordini di acquisto sulla base dei parametri scelti. 

La stessa procedura può essere utilizzata per la creazione Ordini fornitore da Ordini cliente. Per maggiori dettagli si rimanda all'apposita [pagina](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) della documentazione.


## Evasione da Ordini a DDT

La procedura di evasione da ordine a Documento di Trasporto è disponibile in due modalità:

- Dal Menù [Procedure](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders): andando su *Acquisti > DDT di Acquisto > Procedure > Evasione da ordini*.
- Evasione dalla [Testata](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note) del DDT: utilizzando il pulsante *Evasione da Ordine* per aprire una finestra di selezione degli ordini confermati del fornitore da trasferire nel DDT.

Questa procedura permette di trasformare uno o più ordini di acquisto in uno o più DDT. Prima di avviare la procedura, è necessario configurare il tipo di DDT desiderato nella tabella [Tipi ordine fornitore](/docs/configurations/tables/purchase/purchase-orders-type/). La procedura automatica consente la creazione di DDT solo se l'ordine è stampato e confermato.

Le condizioni per l'evasione sono: 

- Il fornitore degli ordini deve coincidere con il fornitore del DDT.
- L'ordine da evadere deve avere il flag "Stampato" e una *Data di Conferma* ordine.
- Per la seconda procedura il *Tipo ordine* deve avere un *Tipo bolla consegna* associato.

Le condizioni di raggruppamento degli ordini in DDT possono essere definite nei [Parametri raggruppamento DDT di acquisto](/docs/configurations/parameters/purchase/dn-grouping).

Dopo aver selezionato gli ordini e impostato i filtri, cliccando su *Trasferimento* si genererà il DDT con i dati dell'ordine. Se l'evasione è stata eseguita correttamente, l'ordine cambierà automaticamente stato in *"Evaso"* o *"Parzialmente Evaso"*.

L'evasione da ordine a DDT è completabile anche dalla testata della fattura stessa tramite il pulsante *Evasione da ordine*.

## Evasione da DDT a Fatture

La procedura di evasione da DDT a fattura può essere avviata in due modalità:

- Dal Menù [Procedure](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization): andando su *Acquisti > Fatture di acquisto > Procedure > Valorizzazione DDT di acquisto*. 
- Dalla [Testata](/docs/purchase/purchase-invoices/insert-purchase-invoice/header) della Fattura di Vendita: utilizzando il pulsante *Evasione DDT* nella testata della fattura.

Questa procedura permette di creare una o più fatture a partire da uno o più DDT. La procedura si compone di tre tab principali:

- Valorizzazione: Consente di inserire filtri per selezionare i DDT da fatturare (con stato "Controllato") e specificare la data di creazione della fattura.
- Parametri: Configura il tipo fattura da creare, se non indicata nella tabella [Tipi DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) e i riferimenti DDT da riportare nella fattura.
- Precedenti: Permette di visualizzare, filtrare e annullare le operazioni di fatturazione precedenti.

Le condizioni di raggruppamento dei DDT in fattura possono essere definite nei [Parametri raggruppamento fattura di acquisto](/docs/configurations/parameters/purchase/invoice-grouping/).

Dopo aver selezionato i DDT e impostato i parametri, è possibile procedere con la creazione della fattura cliccando su *Valorizzazione DDT di acquisto*.

L'evasione da DDT a fattura è completabile anche dalla testata della fattura stessa tramite il pulsante *Evasione DDT*.