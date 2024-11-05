---
title: Tipi DDT acquisto
sidebar_position: 5
---

Questa tabella è fondamentale per definire le varie tipologie di DDT di acquisto disponibili, ognuna con le proprie caratteristiche. E' raggiungibile da *Configurazione > Tabelle > Acquisti > Tipi DDT di acquisto*.

I campi presenti sono:

**Codice\Descrizione**: campi obbligatori per definire il tipo e la descrizione della bolla di acquisto.

**Numerazione\Descrizione**: campo obbligatorio per la [Numerazione](/docs/configurations/tables/fluentis-numerations) da associare al tipo DDT.

**Tipo/Descrizione fattura di acquisto**: in questo campo va definito il [Tipo fattura](/docs/configurations/tables/purchase/purchase-invoices-type) da creare quando si utilizza la procedura di [Valorizzazione DDT di acquisto](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization). È possibile creare la fattura da DDT solo se questo campo è stato valorizzato.

**Natura DDT**: in questo campo va inserita la natura del DDT: consegna, reso, c/visione o reso c/visione. Questo valore dovrà essere selezionato da un elenco.         

**Magazzino/Descrizione magazzino**: è il magazzino di arrivo della merce che viene settato in automatico sulle righe articolo dei DDT creati con questo tipo.

**Causale/Descrizione causale**: è la [Causale](/docs/configurations/tables/logistics/warehouse-templates) di movimentazione della merce in arrivo che viene settata in automatico sulle righe articolo dei DDT creati con questo tipo.

**Controllo fornitore**: serve ad attivare un controllo per il quale, in fase di selezione del soggetto intestatario della bolla, la procedura ci permetterà di selezionare solo conti di tipo fornitore e non di tipo cliente.

**Cash Flow**: se settato, il tipo ordine concorre al calcolo del cash flow.

**Evasione quantità articolo non sommata**: se settato, nel momento in cui si andranno ad evadere righe ordine con quantità parziali nello stesso DDT questo flag consentirà di riportare le quantità evase dell'ordine suddivise per riga articolo senza sommare le quantità.

**Agricola acquisti IVA**: se attivo, in fase di creazione della bolla, il sistema controlla se per l'articolo utilizzato è presente un codice dell'IVA agricola, se non esiste viene preso il codice IVA normale.

**Gestione matrici extra data**: se attivo, permette di visualizzare nel caso di gestione articoli con matrice, un tab aggiuntivo per l'imputazione dei valori della quantità per singola cella di matrice.

**Stampa**: in questo campo è possibile scegliere la stampa da utilizzare di default (si ricorda che, per stampare il report di default, in fase di stampa sarà necessario selezionare l'opzione *Stampe multiple*); nel campo successivo è possibile indicare un **Numero di copie** da stampare.    

**Gestione Conai**: questo flag permette di attivare la gestione Conai per ciascun di tipo DDT. Per maggiori dettagli sulla gestione delle spese relative al [Conai](/docs/sales/sales-flow/conai) si rimanda all'apposita pagina della documentazione.

**Controllo qualità**: i tipi DDT che hanno questo flag attivo sono visibili nella form [Importa articoli da controllare](/docs/quality/item-control/items-control/item-control-import/) posta nell'area *Qualità*.

**Gestione cespiti**: questo flag permette di abilitare la [Gestione cespiti](/docs/finance-area/fixed-assets/general-overview) per quel tipo ordine e di selezionare il **Tipo operazione** che si vuole effettuare, che nel caso degli acquisti sarà un *Costo originario*.     