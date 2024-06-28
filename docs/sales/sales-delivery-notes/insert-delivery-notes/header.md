---
title: Testata
sidebar_position: 2
---

## Testata 

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure con l' [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base alle procedure che sceglie, l'applicazione compila i campi *automaticamente*.

:::note Ricorda
Se il documento viene *creato automaticamente*, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Cliente** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/glossary/glossary-intro#currency), [Cambio](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/glossary/glossary-intro#country), [Lingua](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Spedizione**: [Spedizione](/docs/guide/glossary/glossary-intro#shipment), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Imballo](/docs/guide/glossary/glossary-intro#packing), [Listino](/docs/guide/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/glossary/glossary-intro#validity-date)
- altri campi proposti con la scelta del cliente, ma modificabili: [Destinazione](/docs/guide/glossary/glossary-intro#destination), [Destinatario](/docs/guide/glossary/glossary-intro#recipient).

*Altri campi opzionali*:

**Stato ordine**: in fase di creazione la DDT, non presenta nessun flag attivo. La sezione comprende i campi:
> **Stampato** si attiva quando viene lanciata la stampa dell'ordine.  
> **Annullato**: il flag attivo permette di annullare l'ordine.

:::note
I flag possono essere tolti con la procedura di ripristino operazione.
:::

**Annotazioni cliente**: questo campo viene ripreso dall'anagrafica cliente, mentre nel caso di creazione da ordine verranno ripresi gli stessi dati contenuti nell'omonimo campo dell'ordine cliente.

Può essere inserito anche manualmente. Con il tasto destro del mouse si può aprire una form per poter specificare un testo molto lungo di nota; se il campo contiene un valore viene cambiato il colore dello sfondo del campo.

**Nostro riferimento/vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento cliente per l'ordine in oggetto.

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

import User from './../../../import/fields/user.md'

<User />

**Progetto**: usando il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.  
Questa associazione funziona solo al livello della testata dell'articolo.

**EDI** è la data di trasmissione del documento dalle procedure di EDI.

**Decorrenza** è la data di decorrenza per il calcolo delle scadenze di pagamento.

*Pulsanti specifici*

> *Evasione da commessa*: questo pulsante richiama la procedura di creazione di un ordine cliente da una commessa. Si attiva con l'inserimento del cliente ed del tipo documento.

### Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica cliente > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale ordine.


*Pulsante specifico*

**Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.


## Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e possono essere modificate/cancellate dall'utente.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Viene proposto il codice e la percentuale definiti nell'*Anagrafica cliente > tab Agenti*.

Se la provvigione non è collegata al cliente nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è collegato all'agente ma non percepisce provvigione.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab *Agenti*.

**Pulsante specifico**

**Cancella agenti**: permette di cancellare gli agenti selezionati.


## Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />