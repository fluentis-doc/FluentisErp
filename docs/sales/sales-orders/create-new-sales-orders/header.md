---
title: Testata
sidebar_position: 2
---

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure con l' [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Ricorda
Se il documento viene *creato automaticamente*, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Cliente**, vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  
- **Divisa**: sezione contenente i dati [Divisa](/docs/guide/glossary/glossary-intro#currency), [Cambio](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).
- **Nazione**: sezione contenente i dati [Nazione](/docs/guide/glossary/glossary-intro#country), [Lingua](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone).
- **Spedizione**: sezione contenente i dati [Spedizione](/docs/guide/glossary/glossary-intro#shipment), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Imballo](/docs/guide/glossary/glossary-intro#packing), [Listino](/docs/guide/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/glossary/glossary-intro#validity-date)
- altri campi proposti con la scelta del cliente, ma modificabili: [Destinazione](/docs/guide/glossary/glossary-intro#destination), [Destinatario](/docs/guide/glossary/glossary-intro#recipient).

Elenchiamo gli altri campi disponibili nella testata:
- **Confermato**: questo flag indica che l'ordine è confermato e può essere quindi evaso; accanto è presente la **Data conferma**.  
- **Stampato**: si attiva quando viene lanciata la stampa dell'ordine ed identifica che il documento è stato stampato; questo flag è importante anche per permettere l'evasione dell'ordine in altri documenti.      
- **Archiviato**: è necessario apporre questo flag se il documento decce essere archiviato.   
- **Annullato**: il flag attivo permette di annullare l'ordine.      
- **Codice Unico di Progetto/Codice Identificatico di Gara**: se nelle [informazioni fiscali](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) dell'anagrafica cliente esso è abilitato alla gestione di CIG e CUP, sarà possibile compilare questi dati nel documento.    
- **Annotazioni cliente**: questo campo viene ripreso dall'anagrafica cliente, ma può essere inserito anche manualmente.
- **Nostro riferimento/vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento cliente per il documento; nel caso in cui l'ordine venga generato tramite una procedura di creazione automatica, questi campi verranno popolati con le indicazioni presenti nell'documento d'origine. Questo trasferimento è valido solo nel caso del ordine cliente creato tramite il prelievo dei dati da un solo documento.     
- **Note iniziali**: si possono selezionare le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*; per questo l'utente deve effettuare doppio click sul campo per aprire l'Help e selezionare i dati; altrimenti può inserirle manualmente.       
- **Operatore**: permette di inserire l'utente che crea il documento. I dipendenti sono stati inseriti in precedenza nella tabella *Home > Dipendenti*; il dato diventa obbligatorio se l'opzione è impostata nei [Parametri](/docs/configurations/parameters/sales/sales-orders-parameters) del documento stesso.     
- **Stato evasione**: quando l'ordine è evaso tramite i documenti DDT o fatture, il suo stato evasione cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*; l'utente può forzare l'evasione di un ordine non totalmente evaso e quando questo succede, viene salvata anche la data evasione.
- **Decorrenza** è la data di decorrenza per il calcolo delle scadenze di pagamento.

I pulsanti presenti nella ribbon bar della testata dell'ordine sono:
- **Evasione da progetto**: richiama la procedura per creare un'ordine da un progetto. 
- **Sostituisci data prev. consegna nelle righe**: dopo aver specificato la data richiesta consegna e/o la data prevista consegna in testata ordine, è possibile sostituire in massa tali date nelle righe articolo già inserite.     
- **Sostituisci agente nelle righe**: questo pulsante fa aprire un pop nel quale inserire un'anagrafica agente, che verrà spalmata in tutte le righe articolo, aggiungendosi eventualmente ad Agenti già presenti. 
- **Sostituisci CIG/CUP nelle righe**: dopo aver specificato CIG e/o CUP in testata ordine, è possibile sostituire in massa tali dati nelle righe articolo già inserite.   
- **Help destinatari/destinazioni**: questo bottone apre l'Help per poter scegliere il destinatario/destinazione per il documento, tra quelli disponibili per il cliente e quindi codificati nella sua anagrafica. 

Nella testata sono poi presenti alcune tab che analizziamo di seguito.    

## Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica cliente > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale.

Il pulsante specifico di questa tab è il **Cancella pagamenti**, utilizzato per cancellare le righe di pagamento selezionate.


## Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e non quelli attribuiti alle condizioni di pagamento o a certi articoli. Possono essere modificate/cancellate dall'utente.
  
Gli sconti proposti in testata del documento vengono riportati in ogni nuova riga articolo inserita nel documento.

Se dopo aver inserito le righe articolo viene inserito un nuovo sconto in testata questo non viene replicato nelle righe articolo già inserite.

Il pulsante specifico di questa tab è il **Cancella sconti**, utilizzato per cancellare le righe di sconto selezionate.


## Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Vengono proposti il codice e la percentuale definiti nell'*Anagrafica cliente > tab Agenti*.

Se la provvigione non è collegata al cliente nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è collegato all'agente ma non percepisce provvigione.

Nel caso di generazione del DDT da ordine questo dato verrà ovviamente riportato uguale a quello dell'ordine cliente.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab Agenti.

Il Pulsante specifico di questa maschera è il **Cancella agenti**, che permette di cancellare gli agenti selezionati.

## Destinazione

Qui viene proposta l'informazione inserita nell'*Anagrafica cliente > tab Consegne*, solo se esistono dati di default. Il combo box propone tutti i destinatari, le destinazioni e i vettori inseriti nell'anagrafica cliente.

Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti. 

## Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />