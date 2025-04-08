---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area **Acquisti > DDT Acquisto**. Il DDT viene generato quando un fornitore spedisce la merce ordinata. Questo modulo consente di registrare i movimenti dei beni in entrata, facilitando il controllo e la tracciabilità della merce ricevuta e permettendo una gestione precisa del materiale disponibile a magazzino.

## **Configurazione preliminare del modulo**

Prima di utilizzare il modulo, è necessario compilare le seguenti tabelle e parametri:     
- [**Numerazioni**](/docs/configurations/tables/fluentis-numerations): inserimento delle numerazioni da utilizzare per i DDT di Acquisto.     
- [**Fatturato acquisti**](/docs/configurations/tables/purchase/purchase-turnover/): definizione delle tipologie di Fatturato acquisti da inserire nei documenti.
- [**Tipi DDT**](/docs/configurations/tables/purchase/purchase-orders-type): creazione e definizione delle tipologie di DDT da utilizzare.
- [**Parametri DDT acquisto**](/docs/configurations/parameters/purchase/purchase-orders-parameters): impostazioni specifiche per la gestione dei DDT. 

## **Collegamenti con altri moduli**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Ordini Fornitore</Link>
        <p>Il DDT può essere creato mediante evasione di uno o più Ordini fornitore, sia dall'interno del DDT utilizzando il pulsante Evasione da ordini, sia attraverso l'apposita [procedura](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Ricevimento merci</Link>
        <p>La procedura di [Creazione DDT da Ricevimento merci](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) permette la creazione della anche quando l'ordine è già stato evaso all'interno di un *Ricevimento merci*  </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistica</Link>
        <p>Una volta generato e controllato, il DDT di acquisto può essere [caricato a magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) per registrare l'arrivo della merce e aggiornare le giacenze di materiale.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Fatture di Acquisto</Link>
        <p>La procedura di [Valorizzazione DDT di acquisto](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) permette di creare la creazione delle Fatture a partire dalle bolle di acquisto.  </p>
    </div>
</div>
