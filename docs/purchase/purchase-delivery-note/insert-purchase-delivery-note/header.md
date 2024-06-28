---
title: Testata
sidebar_position: 2
---

## Testata

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base alle procedure che sceglie, l'applicazione compila i campi *automaticamente*.

:::note Ricorda
Se il documento viene *creato automaticamente*, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Fornitore** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: [Divisa](/docs/guide/glossary/glossary-intro#currency), [Cambio](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).
- **Nazione**: [Nazione](/docs/guide/glossary/glossary-intro#country), [Lingua](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Spedizione**: [Spedizione](/docs/guide/glossary/glossary-intro#shipment), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Imballo](/docs/guide/glossary/glossary-intro#packing), [Listino](/docs/guide/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/glossary/glossary-intro#validity-date)

*Altri campi opzionali*:

**Stato DDT**: quando il DDT viene creato, non ha nessun flag attivo. La sezione comprende i campi:
> **Controllato**: il flag attivo permette la contabilizzazione/valorizzazione del DDT;  
> **Valorizzato**: viene automaticamente selezionato quando il DDT viene valorizzato;  
> **Contabilizzato**: viene automaticamente selezionato quando il DDT viene contabilizzato;  
> **Caricato**: diventa attivo quando il DDT supporta la [procedura di carico in magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).  
> **Annullato**: il flag attivo permette di annullare il DDT.

:::note
I flag possono essere tolti con la procedura di ripristino operazione.
:::

**Annotazioni fornitore**: questo campo viene ripreso dall'anagrafica fornitore, mentre nel caso di creazione da ordine verranno ripresi gli stessi dati contenuti nell'omonimo campo dell'ordine fornitore.

Può essere inserito anche manualmente. Con il tasto destro del mouse si può aprire una form per poter specificare un testo molto lungo di nota; se il campo contiene un valore viene cambiato il colore dello sfondo del campo.

**Nostro/Vostro riferimento**: quando viene completata la procedura [Evasione da ordine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), viene proposta anche l'informazione presente nel campo omonimo dell'ordine.

Questo trasferimento è valido solo nel caso del DDT creata tramite il prelievo dei dati da un solo ordine;

**Note iniziali**:  verranno riproposte le informazioni presenti nell'ordine, nel caso di [Evasione DDT da ordine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Si possono inserire anche manualmente usando il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) per aprire le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo l'utente deve effettuare doppio click sul campo **Note iniziale** per aprire *Help note codificate* e selezionare i dati, oppure con il tasto destro del mouse può aprire una finestra per poter specificare un testo molto lungo di nota. Se il campo contiene un valore, viene cambiato il colore dello sfondo del campo.

**Progetto**: usando il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.  
Questa associazione funziona solo al livello della testata dell'articolo.

**Stato documento**: si riferisce alla tabella degli **Stati documento**; il dato deve essere inserito dall'utente e può essere utilizzato dalle procedure di replicazione del gestionale installate per la gestione di una sede con dei punti vendita.

**Pulsanti specifici**

> [Evasione da ordine](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order): richiama la procedura per creare un DDT da un ordine fornitore. Si attiva con l'inserimento del fornitore e del tipo DDT. L'ordine da evadere dovrà aver impostato il flag *Stampato* e la *Data conferma ordine* valorizzata.  
> [Carico automatico nel magazzino](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/automatic-loading-on-warehouse): utilizzato per caricare automaticamente il magazzino con gli articoli selezionati. Questo campo sarà editabile solo una volta attivato il campo *Controllato* e inserito il *Numero* documento.

### Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

Se il documento nasce da un *Ordine fornitore*, i tipi pagamento possono essere ripresi dal primo documento, dall'anagrafica fornitore oppure visualizzati in una form dei documenti da evadere e l'utente seleziona la tipologia di pagamento interessata. 

*Pulsante specifico*

**Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Destinatario

import TabRecipient from './../../../import/sections/tab-recipient.md'

<TabRecipient />

### Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />
