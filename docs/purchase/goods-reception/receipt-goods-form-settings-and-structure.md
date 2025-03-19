---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area acquisti **Acquisti > Ricevimento merci** e rappresenta un passaggio intermedio che consente di registrare l'arrivo della merce inviata da un fornitore, in modo da aggiornare le giacenze di magazzino senza dover prima creare il Documento di Trasporto (DDT) o la Fattura di acquisto. 

## **Configurazione preliminare del modulo**

Prima di utilizzare il modulo, è necessario compilare le seguenti tabelle e parametri:     
- [**Numerazioni**](/docs/configurations/tables/fluentis-numerations): inserimento delle numerazioni da utilizzare per i ricevimenti merce.     
- [**Tipi ricevimento merci**](/docs/configurations/tables/purchase/goods-receipt-types)
- [**Parametri ordini fornitori**](/docs/configurations/parameters/purchase/purchase-orders-parameters): nel tab *Carico* vanno indicati i parametri da utilizzare per il *Carico ricevimento* merci. 

## **Collegamenti con altri moduli**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistica</Link>
        <p>Il ricevimento merci può essere caricato a magazzino mediante l'apposita [procedura](/docs/purchase/goods-reception/procedures/good-receipt-load).  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">DDT e Fatture di Acquisto</Link>
        <p>A partire da un ricevimento merci è possibile effettuare la [Creazione di un DDT di acquisto](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) oppure di una [Fattura di acquisto](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).  </p>
    </div>
</div>
