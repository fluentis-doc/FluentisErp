---
title: Testata
sidebar_position: 2
---

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base ai dati inseriti nell'anagrafica del terzista', l'applicazione compila i campi *automaticamente*.

Inserendo il **Fornitore** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/glossary/glossary-intro#currency), [Cambio](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/glossary/glossary-intro#country), [Lingua](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Spedizione**: [Spedizione](/docs/guide/glossary/glossary-intro#shipment), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Imballo](/docs/guide/glossary/glossary-intro#packing), [Listino](/docs/guide/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/glossary/glossary-intro#validity-date)

*Altri campi*:

**Stato DDT**: con questi 2 flag viene identificato lo stato del DDT, che può essere stampato (dopo che è stata lanciata la stampa fisica del report del DDT di consegna) e scaricato (dopo che è avvenuto lo scarico del DDT stessa dal magazzino). Se il DDT non è stato stampato non è possibile scaricarlo;  

**Nostro/Vostro riferimento**: quando viene completata la procedura [Evasione da ordine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), viene proposta anche l'informazione presente nel campo omonimo dell'ordine;  

**Progetto**: usando il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.  

**Pulsanti specifici**

> [Consegne previste](/docs/subcontractor/delivery-note/insert-delivery-note/header-procedures/execute-from-order): richiama la procedura per creare un DDT da un ordine. Si attiva con l'inserimento del fornitore e del tipo DDT. L'ordine da evadere dovrà aver impostato il flag *Stampato* e la *Data conferma ordine* valorizzata;  
> **Scarico automatico**: utilizzato per scaricare automaticamente il magazzino con gli articoli selezionati. Questo campo sarà editabile solo una volta attivato il campo *Stampato*.

### Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

Se il documento nasce da un ordine, i tipi pagamento possono essere ripresi dal primo documento o dall'anagrafica fornitore. 

*Pulsanti specifici*

> **Inserisci/Cancella pagamenti**: utilizzati per inserire/cancellare le righe di pagamento selezionate.

### Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Viene proposto il codice e la percentuale definiti nell'*Anagrafica terzista > tab Agenti*.

Se la provvigione non è collegata al terzista nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è collegato all'agente ma non percepisce provvigione.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab *Agenti*.

**Pulsante specifico**

**Cancella agenti**: permette di cancellare gli agenti selezionati.

