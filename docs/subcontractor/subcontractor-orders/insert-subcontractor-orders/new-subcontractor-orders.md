---
title: Nuovo ordine di conto lavoro
sidebar_position: 1
---

Tramite questa form è possibile creare manualmente un nuovo ordine di conto lavoro oppure si possono modificare quelli già esistenti.

La form si apre tramite il percorso **Conto Lavoro > Ordine di conto lavoro > Nuovo ordine di conto lavoro** oppure tramite il pulsante **Nuovo** che si trova nella form [Ricerca ordine di conto lavoro](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/search-subcontractor-orders).

## **1. Dati obbligatori**

L'applicazione richiede di inserire il **Fornitore** (Terzista) intestatario del ordine, utilizzando l'apposito help conti. In automatico verranno proposti: **Anno**, **Numero**, **Data** correnti e il **Tipo documento** (proposto uguale a quello inserito nei *Parametri di Conto Lavoro*), che possono essere modificati dall'utente.

## **2. Testata** {#header}

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base ai dati inseriti nell'anagrafica del terzista', l'applicazione compila i campi *automaticamente*.

### 2.1 Dati fornitore

Inserendo il **Fornitore** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Consegna**: [Consegna](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica terzista > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

#### Pulsante specifico

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### 2.3 Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica terzista > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## **3. Articoli** 

La form è costituita da una griglia, all'interno della quale l'utente può inserire manualmente i prodotti che sono richiesti al terzista. 
E' possibile inserire articoli codificati e note.

Essa risulta già compilata nel caso in cui l'ordine provenga da *Schedulazione generale* o da *Elaborazione MRP*, lasciando comunque la facoltà all'utente di modificarla e/o aggiungere ulteriori materiali alla lista componenti dell'ordine pianificato. Da notare che se l'ordine pianificato è di acquisto il tab Materiali risulta non attivo. 

### 3.1 Dati articolo

In questo tab vengono visualizzate le informazioni relative alla riga selezionata nella griglia degli articoli, tra quali:

**Corso lavorazione**: in questo campo è ripreso il flag presente nei parametri MRP dell'articolo chiamato *Corso Lavorazione*;  
**Quantità da produrre**: quantità dell'ordine iniziale comunicata al terzista;  
**Quantità già rientrata**: totale della quantità ricevuta e lavorata;  
**Data previsto rientro**: data di arrivo merce lavorata;  
**Note lavorazione**: sono gestite dall'utente. Può essere parametrizzato e possono essere riportati dei dati sensibili del sistema, ad esempio la descrizione della fase di lavoro che ha generato il fabbisogno di lavorazione;  
**Fase**: con un doppio click si apre un help fasi di lavorazione dal quale si può selezionare la relativa fase e sottofase, e quindi assegnare il materiale selezionato ad una determinata fase di lavorazione dell'articolo;  
**Magazzino**: magazzino di destinazione del prodotto lavorato;  
**Pesi**: vengono riportati il Peso netto e il Peso lordo totali delle righe articolo. Vengono riportati i pesi di anagrafica articolo moltiplicati per la quantità di riga.

## **3. Materiali**

La form è costituita da due griglie che riportano i materiali da inviare al terzista per la lavorazione e i materiali che saranno impiegati al rientro del prodotto lavorato.
E' possibile inserire articoli codificati, non codificati e note. 

I materiali inviati e impiegati possono essere gestiti dall'operatore e in tal caso è necessario immettere la quantità, l'eventuale prezzo della lavorazione, la data di previsto rientro, la data di impiego del materiale. Questi dati sono invece già valorizzati nel caso in cui l'ordine provenga da *Schedulazione generale* o da *Elaborazione MRP*.

### 3.1 Materiali da consegnare

**Codice articolo**: indica il materiale da consegnare per la lavorazione;  

:::note Nota
Nel caso in cui l'ordine di conto lavoro sia generato dal rilascio di un *Ordine pianificato di conto lavoro* o di un *Ordine pianificato di produzione* con una o più fasi esterne, i materiali da consegnare non verranno visualizzati se: non esistono i [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell'articolo, o il flag *Considera in conto lavoro* non è abilitato nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), o se il *tipo prelievo* nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) è *automatico*, o se [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) il *tipo prelievo* è *con lista* e il flag WIP non è abilitato.
:::

### 3.2 Materiali da impiegare

**Codice articolo**: indica il materiale da impiegare al rientro del lavorato;  
**Impiego unitario**: quantità da impiegare per ogni unità del rientro del lavorato, nel caso di gestione automatica della schedulazione di distinte; questo dato è valorizzato dal sistema;  
**Impiego totale**: quantità totale da impiegare per la completa lavorazione nel caso di gestione automatica della schedulazione di distinte; questo dato è valorizzato dal sistema;  
**% scarto**: quantità da impiegare in più che risulta essere lo scarto;  
**Data prev. impegno**: in base a questa data il sistema pianifica la disponibilità del fabbisogno.

## **4. Riepiloghi**

Nei Riepiloghi sono presentate le informazioni principali dell'intero documento.

### 3.1 Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 3.2 Spese

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 3.3 Totali documento

**Importo lordo articoli**: rappresenta la somma dei valori di tutti gli articoli;  
**Acconto**: rappresenta il valore dell' eventuale acconto ricevuto per il documento;  
**Importo omaggio**: rappresenta l'importo degli articoli di tipo omaggio inseriti nel tab *Articoli*;  
**Totale sconti applicati**: rappresenta il valore totale dei sconti applicati sugli articoli, ma senza i sconti finali;  
**Importo netto articoli**: *Importo lordo articoli* – *Totale sconti applicati*;  
**Totale sconti finali**: rappresenta il valore degli sconti finali espressi in percentuale sull'importo lordo degli articoli;  
**Importo netto sconti finali**: *Importo netto articoli* - *Totale sconti finali*;  
**Spese di incasso**: rappresenta la somma delle spese di incasso inserite nella griglia delle *Spese*;  
**Spese bollo**: rappresenta la somma delle spese di bollo inserite nella griglia delle *Spese*;   
**Imponibile**: *Importo netto articoli* – *Sconti finali* + *Totale spese non documentati* + *Totale spese documentati*;  
**Imposta**: rappresenta la somma dei valori contenuti nei riepiloghi IVA;  
**Totale**: *Imponibile* + *IVA*.