---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area **Acquisti > Richieste di offerta** e rappresenta uno degli step intermedi del ciclo passivo. 
Le richieste di offerta (RDO) servono a gestire il processo di raccolta e confronto di preventivi da parte dei fornitori permettendo la scelta delle condizioni di fornitura migliori.

## **Configurazione preliminare del modulo**

Prima di utilizzare il modulo, è necessario compilare le seguenti tabelle e parametri:     
- [**Numerazioni**](/docs/configurations/tables/fluentis-numerations): inserimento delle numerazioni da utilizzare per le Richieste di Offerta.       
- [**Tipi richieste di offerta**](/docs/configurations/tables/purchase/purchase-offer-type): creazione delle tipologie di RDO.


## **Collegamenti con altri moduli**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Richieste di Acquisto</Link>
        <p>Le Richiesta di Offerta possono essere generate dalle *Richiesta di Acquisto*, mediante il pulsante **Generatore RDO** posto all'interno della RDA. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Ordini fornitore</Link>
        <p>Una volta selezionata l'offerta più conveniente, è possibile convertire la RDO in un ordine di acquisto utilizzando la procedura di [Creazione ordine fornitore da offerta fornitore](/docs/purchase/offer-request/procedures/order-creation).</p>
    </div>
</div>
