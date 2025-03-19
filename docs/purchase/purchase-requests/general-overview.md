---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area **Acquisti > Richieste di acquisto** e consente la creazione, gestione e monitoraggio delle richieste di acquisto, permettendo all'operatore di elaborare internamente all'azienda la richiesta di materiale da acquistare a partire da segnalazioni di carenze di inventario, richieste provenienti dai vari reparti aziendali o previsioni di domanda.

## **Configurazione preliminare del modulo**

Prima di utilizzare il modulo, è necessario compilare le seguenti tabelle e parametri:     
- [**Numerazione richieste di acquisto**](/docs/configurations/tables/fluentis-numerations): inserimento delle numerazioni da utilizzare per le Richieste di Acquisto.       
- [**Tipi richieste di acquisto**](/docs/configurations/tables/purchase/purchase-request-type): creazione delle tipologie di RDA.
- [**Parametri richieste di acquisto**](/docs/configurations/parameters/purchase/purchase-requests-parameters): impostazioni specifiche per la gestione delle RDA. 

## **Collegamenti con altri moduli**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution">Logistica</Link>
        <p>Dalla stampa *Sottoscorta*, posta sotto l'area *Logistica > Stampe Gestionali > Sottoscorta*, è possibile generare le RDA di reintegro della scorta per gli articoli che hanno disponibilità minore rispetto al loro punto di riordino.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders#richieste-dacquisto">Pianificazione e Produzione</Link>
        <p>La Pianificazione generale e l'MRP possono generare *ordini pianificati di acquisto* sulla base delle richieste di materiale necessario per la produzione. Tali ordini possono essere trasformati in *Richieste di Acquisto* automaticamente oppure manualmente dalla procedura di *Rilascio ordini pianificati*.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Richieste di Offerta</Link>
        <p>La Richiesta di Acquisto può generare una *Richiesta di Offerta*, mediante il pulsante **Generatore RDO** posto all'interno della RDA. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Ordini fornitore</Link>
        <p>Una volta autorizzata, la RDA può essere trasformata in un *Ordine di acquisto* mediante la procedura di [Creazione automatica Ordini](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests).</p>
    </div>
</div>
