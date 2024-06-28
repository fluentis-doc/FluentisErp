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

**Stato fattura**: quando la fattura viene creata non ha nessun flag attivo. La sezione comprende i campi:
> **Controllata**: il flag attivo permette la contabilizzazione della fattura;  
> **Contabilizzata**: il flag è automaticamente attivato quando la fattura supporta la [procedura di contabilizzare](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting);  
> **Caricata**: il flag diventa attivo quando la fattura supporta la [procedura di carico](/docs/purchase/purchase-invoices/insert-purchase-invoice/header-procedures/automatic-loading-on-warehouse). Nel caso di fattura creata da documento di trasporto già caricato, è presente il parametro generale VE-PurchaseInvoices_VerifyLoadStatusDDT che blocca il flag Caricata anche nella fattura.
> **Annullata**: il flag attivo permette di annullare la fattura.

:::note
I flag possono essere tolti con la procedura di ripristino operazione.
:::

**Annotazioni fornitore**: viene proposta l'informazione inserita nell'anagrafica fornitore, mentre nel caso di creazione in automatico da un'altro documento verranno ripresi gli stessi dati contenuti nell'omonimo campo del documento di origine.

Può essere inserito anche manualmente. Con il tasto destro del mouse si può aprire una form per poter specificare un testo molto lungo di nota; se il campo contiene un valore viene cambiato il colore dello sfondo del campo.

**Nostro/Vostro riferimento**: quando vengono generati con la procedura:
- [Evasione da ordine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), viene proposta l'informazione presente nel campo omonimo dell'ordine.
 
Questo trasferimento è valido solo nel caso in cui la fattura sia stata creata tramite il prelievo dei dati da un solo ordine.

- [Valorizzazione DDT di acquisto](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) , viene proposta l'informazione presente nel campo omonimo del DDT.

Questo trasferimento è valido solo nel caso in cui la fattura sia stata emessa da un solo DDT.

**Note iniziali**: verranno riproposte le informazioni presenti nell'ordine, nel caso di [Evasione da ordine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).

Si possono inserire anche manualmente usando il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) per aprire le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo l'utente deve effettuare doppio click sul campo **Note iniziale** per aprire *Help note codificate* e selezionare i dati, oppure con il tasto destro del mouse può aprire una finestra per poter specificare un testo molto lungo di nota. Se il campo contiene un valore, viene cambiato il colore dello sfondo del campo.

**Progetto**: usando il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.

Questa associazione funziona solo al livello della testata dell'articolo.

**Stato documento**: si riferisce alla tabella degli stati documento; il dato deve essere inserito dall'utente e può essere utilizzato dalle procedure di replicazione del gestionale installate per la gestione di una sede con dei punti vendita.

**Rif.FA**: dopo aver creato lo [storno](/docs/purchase/purchase-invoices/search-purchase-invoices) di una fattura, l'utente deve collegare le due fatture inserendo nello storno il *numero*, *data* e *tipo* della fattura di origine;

**Reg. cont.**: riporta numero, data e protocollo della registrazione contabile derivata dalla contabilizzazione della fattura. 

*Pulsanti specifici*

> [Evasione da ordine](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order): richiama la procedura per creare una fattura da un ordine fornitore. Si attiva con l'inserimento del fornitore ed del tipo fattura. L'ordine da evadere dovrà aver impostato il flag *Stampato* e la *Data conferma ordine* valorizzata.  
> [Carico automatico nel magazzino](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse): utilizzato per caricare automaticamente il magazzino con gli articoli selezionati. Questo campo sarà editabile solo una volta attivato il campo *Controllato* e inserito il *Numero* documento.

### Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale fattura.

Se il documento nasce da un:

- *ordine fornitore*, i tipi pagamento possono essere ripresi dal primo documento, dall'anagrafica fornitore; tutti i pagamenti dei documenti da evadere possono essere visualizzati in un'unica form e l'utente può selezionare la tipologia di pagamento interessata.

- *DDT*, possono essere mantenuti i pagamenti di anagrafica del fornitore oppure i singoli pagamenti presenti in ogni DDT; in questo caso viene riportato in fattura il tipo pagamento con l'imponibile e l'IVA uguali al DDT; inoltre, per le eventuali righe articolo aggiunte in fattura non provenienti dal DDT, viene aggiunta una nuova riga.

*Pulsante specifico*

**Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Spedizione

Qui viene proposta l'informazione inserita nell' anagrafica fornitore, tab [Spedizioni](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), solo se esistono dati di default.

Il combo box propone tutti i *Destinatari* e le *Destinazioni* inserite nell'anagrafica fornitore.

Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti. 


### Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />
