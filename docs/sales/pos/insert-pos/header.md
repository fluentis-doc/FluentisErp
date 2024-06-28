---
title: Testata
sidebar_position: 2
---

## Testata

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection).

Inserendo il **Conto** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica contatto](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/glossary/glossary-intro#currency), [Cambio](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/glossary/glossary-intro#country), [Lingua](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Spedizione**: [Spedizione](/docs/guide/glossary/glossary-intro#shipment), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Imballo](/docs/guide/glossary/glossary-intro#packing), [Listino](/docs/guide/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/glossary/glossary-intro#validity-date)

*Altri campi*:

**Stato POS**: in fase di creazione, il POS non presenta nessun flag attivo. La sezione comprende i campi:
> **Stampato** si attiva quando viene lanciata la stampa dello scontrino.  
> **Scaricato** indica che il POS è stato scaricato dal magazzino manualmente oppure tramite la procedura di scarico automatico.  
> **Contabilizzato**: viene automaticamente selezionato quando il POS viene contabilizzato.  
> **Annullato**: il flag attivo permette di annullare il POS.

:::note
I flag possono essere tolti con la procedura di ripristino operazione.
:::

**Nostro riferimento/vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento cliente per il POS in oggetto.  

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

**Operatore**: permette di inserire l'utente che crea il documento. I dipendenti sono stati inseriti in precedenza nella tabella *Dipendenti* che si trova nel percorso *Home > Dipendenti*. 

**Progetto**: usando il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.  
Questa associazione funziona solo al livello della testata dell'articolo.

## Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica cliente > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

*Pulsante specifico*

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

## Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e possono essere modificate/cancellate dall'utente.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Viene proposto il codice e la percentuale definiti nell'*Anagrafica cliente > tab Agenti*.

Se la provvigione non è collegata al cliente nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è associato, ma non percepisce provvigione.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab *Agenti*.

*Pulsante specifico*

> **Cancella agenti**: permette di cancellare gli agenti selezionati.