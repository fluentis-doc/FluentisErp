---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area **Acquisti > Fatture di acquisto**. Le fatture di acquisto sono documenti fiscali emessi dai fornitori a fronte della fornitura di beni o servizi all'azienda e rappresentano la base per la registrazione contabile e il pagamento dei fornitori. 

## **Configurazione preliminare del modulo**

Prima di utilizzare il modulo, è necessario compilare le seguenti tabelle e parametri:     
- [**Numerazioni**](/docs/configurations/tables/fluentis-numerations): inserimento delle numerazioni da utilizzare per le Fatture di Acquisto.     
- [**Fatturato acquisti**](/docs/configurations/tables/purchase/purchase-turnover/): definizione delle tipologie di Fatturato acquisti da inserire nei documenti.
- [**Tipi Fatture di Acquisto**](/docs/configurations/tables/purchase/purchase-invoices-type): creazione e definizione delle tipologie di Fatture da utilizzare.
- [**Parametri Fatture di Acquisto**](/docs/configurations/parameters/purchase/purchase-invoices-parameters): impostazioni specifiche per la gestione delle fatture. 
- [**Parametri di raggruppamento fatture di acquisto**](/docs/configurations/parameters/purchase/invoice-grouping/): definire le condizioni di raggruppamento dei DDT in fattura.


## **Collegamenti con altri moduli**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Ordini Fornitore</Link>
        <p>La Fattura può essere creata mediante evasione di uno o più Ordini fornitore dall'interno della fattura utilizzando il pulsante Evasione da ordini.  </p>
    </div>
        <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">DDT di Acquisto</Link>
        <p>La Fattura può essere creata mediante evasione di uno o più DDT, sia dall'interno della fattura utilizzando il pulsante Evasione DDT, sia mediante la procedura di [Valorizzazione DDT di Acquisto](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization).  </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/subcontractor/subcontractor-returns/insert-returns/search-returns"> Rientro di Conto Lavoro</Link>
        <p>la procedura di *Valorizzazione DDT di rientro* consente di generare una fattura di acquisto evadendo uno o più rientri di conto lavoro.   </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Ricevimento merci</Link>
        <p>La procedura di [Creazione fatture da Ricevimento merci](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt) permette la creazione della fattura a partire da un ricevimento merci già registrato.  </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistica</Link>
        <p>Le Fatture di acquisto di tipo immediato possono essere caricate a magazzino per registrare l'arrivo della merce e aggiornare le giacenze di materiale.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting">Contabilizzazione</Link>
        <p> La contabilizzazione automatica delle fatture permette di aggiornare i registri contabili e finanziari e garantendo la coerenza con il bilancio aziendale. </p>
    </div>
</div>
