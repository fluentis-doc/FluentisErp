---
title: Testata
sidebar_position: 2
---

### Testata

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base alle procedure che sceglie, l'applicazione compila i campi *automaticamente*.

:::note Ricorda
Se il documento viene *creato automaticamente*, ad esempio mediante [**Evasione da ordini**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Fornitore** vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle sezioni: 

- **Divisa**: sezione contenente i dati [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).   
- **Nazione**: sezione contenente i dati [*Nazione*](/docs/guide/glossary/glossary-intro#country), [Lingua](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone).   
- **Spedizione**: sezione contenente i dati [*Spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Imballo](/docs/guide/glossary/glossary-intro#packing), [Listino](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità](/docs/guide/glossary/glossary-intro#validity-date).

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

*Campi facoltativi*:

- **Stato DDT**: i seguenti flag indicano lo stato del DDT. Al momento della creazione del DDT nessuno di questi flag è attivo:   

    > **Controllata**: il flag attivo permette la contabilizzazione/valorizzazione del DDT.     
    > **Valorizzata**: questo flag si attiva quando il DDT viene valorizzato in fattura.   
    > **Valorizzata Parzialmente**: questo flag indica che il DDT è staato valorizzato solo parzialmente in fattura.     
    > **Valorizzata Forzatamente**: questo flag si attiva se il DDT è stato chiuso forzatamente con l'evasione forzata degli articoli; per esempio, quando il residuo non sarà consegnato e il documento viene considerato chiuso anche se non lo sarebbe.   
    > **Caricata**: questo flag si attiva automaticamente quando il documento viene movimentato a magazzino mediante il bottone *Carico automatico* della barra degli strumenti o con la [procedura di carico in magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).  
    > **Contabilizzata**: viene automaticamente selezionato quando il DDT viene contabilizzato;  
    > **Annullata**: il flag attivo permette di annullare il DDT.

:::note Nota
I flag possono essere tolti con la procedura di ripristino operazione.
:::

- **Data di arrivo**: in questo campo si può inserire la data di arrivo della merce.

- **Data carico**: questo campo viene compilato automaticamente con la data corrente al momento del carico oppure con la data usata per la registrazione di magazzino, a seconda della procedura utilizzata.   

- **Annotazioni fornitore**: questo campo viene ripreso dall'anagrafica fornitore, mentre nel caso di creazione da un solo ordine verranno ripresi gli stessi dati contenuti nell'omonimo campo dell'ordine fornitore. Può essere inserito anche manualmente. 

- **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento.    
Se presente, viene ripreso dall'anagrafica fornitore altrimenti può essere inserito manualmente.
Nel caso in cui l'ordine viene completato con la procedura [Evasione da ordine](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), nei campi *Annotazioni fornitore* e *Nostro/Vostro riferimento* viene proposta l'informazione presente nei campi omonimi dell'ordine di acquisto (questo trasferimento è valido solo nel caso di DDT creato tramite il prelievo dei dati da un solo ordine).

- **Note iniziali**: si possono selezionare le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*; per questo l'utente deve effettuare doppio click sul campo per aprire l'Help e selezionare i dati; altrimenti può inserirle manualmente.

- **Progetto**: usando l'help di campo si può collegare il documento a un progetto. Questa associazione funziona solo al livello della testata dell'articolo. Il progetto viene inserito automaticamente se il DDT è stato creato mediante evasione di un ordine che lo contiene.

I pulsanti presenti nella ribbon bar della testata del DDT sono:

> [Evasione da ordine](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order): richiama la procedura per creare un DDT da un ordine fornitore. Si attiva con l'inserimento del fornitore e del tipo DDT. L'ordine da evadere dovrà aver impostato il flag *Stampato* e la *Data conferma ordine*.  
> [Carico automatico nel magazzino](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/automatic-loading-on-warehouse): utilizzato per caricare automaticamente il magazzino con gli articoli selezionati. Questo campo sarà editabile solo una volta attivato il campo *Controllato* e inserito il *Numero* documento.

### Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

:::note Nota
Se il documento nasce mediante evasione di un solo *Ordine fornitore* oppure da più ordini aventi la stessa condizione di pagamento vengono ripresi il tipo e la soluzione di pagamento presenti negli ordini.
:::

*Pulsante specifico*:

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti* e possono essere modificati/cancellati dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />
