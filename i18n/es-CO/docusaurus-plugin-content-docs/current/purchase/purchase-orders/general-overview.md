---
title: Introduzione
sidebar_position: 1
---

Il modulo si trova nell'area **Acquisti > Ordini fornitori** e rappresenta uno degli step intermedi del ciclo passivo. Gli ordini di acquisto sono documenti formali emessi dal reparto *Acquisti*, utilizzati per richiedere beni o servizi da un fornitore, secondo condizioni predefinite. Contengono i dettagli relativi ai prodotti o servizi da acquistare, inclusi quantità, prezzi, termini di consegna, condizioni di pagamento e altre specifiche contrattuali.   


## **Configurazione preliminare del modulo**

Prima di utilizzare il modulo, è necessario compilare le seguenti tabelle e parametri:     
- [**Numerazioni**](/docs/configurations/tables/fluentis-numerations): inserimento delle numerazioni da utilizzare per gli ordini.       
- [**Tipi ordini fornitori**](/docs/configurations/tables/purchase/purchase-orders-type): creazione e definizione delle tipologie di ordine da utilizzare.
- [**Parametri ordini fornitori**](/docs/configurations/parameters/purchase/purchase-orders-parameters): impostazioni specifiche per la gestione degli ordini fornitore. 

## **Collegamenti con altri moduli**

Gli ordini di acquisto possono essere inseriti manualmente oppure creati automaticamente a partire da documenti preesistenti. Le modalità di generazione automatica comprendono:    

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Richieste di Acquisto</Link>
        <p>La procedura di [Creazione automatica ordini](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) permette la creazione di Ordini fornitore a partire da Richieste di Acquisto autorizzate.     </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Richieste di Offerta</Link>
        <p>Gli Ordini di acquisto possono essere generati da Richieste di offerta mediante la procedura di [Creazione Ordine fornitore da Offerta fornitore](/docs/purchase/offer-request/procedures/order-creation). </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Ordini Clienti</Link>
        <p>La procedura di *Creazione automatica ordini* permette anche la creazione di un *Ordine fornitore* a partire da un *Ordine cliente*. In alternativa, è possibile generare un ordine di acquisto dal filtro di [Ricerca Ordini clienti](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders) mediante il pulsante *Creazione ordini fornitori*.         </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-job-order/general-overview">Commesse di Acquisto</Link>
        <p>Gli Ordini di acquisto possono essere generati anche attraverso l'*evasione* totale o parziale di una commessa di acquisto, sulla base di contratti predefiniti e già negoziati con il fornitore.  </p>
    </div>
</div>


Una volta confermato, l'ordine di acquisto può essere evaso tramite un DDT o una fattura. Questo permette la registrazione della merce in magazzino e la successiva contabilizzazione della fattura all'interno del sistema, mantenendo un controllo accurato delle scorte e dei flussi finanziari.

Il modulo offre inoltre la possibilità di creare il [ricevimento della merce](/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure) permettendo all'operatore di evadere l'ordine fornitore, registrare l'arrivo dei beni, posizionarli nel magazzino o nelle ubicazioni predefinite, e procedere successivamente al carico ufficiale delle merci in magazzino.


