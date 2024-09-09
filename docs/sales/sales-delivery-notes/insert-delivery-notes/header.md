---
title: Testata
sidebar_position: 2
---

## Testata 

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure con l' [help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base alle procedure che sceglie, l'applicazione compila i campi *automaticamente*.

:::note Ricorda
Se il documento viene *creato automaticamente*, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Cliente**, vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  
- **Divisa**: sezione contenente i dati [Divisa](/docs/guide/glossary/glossary-intro#currency), [Cambio](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).
- **Nazione**: sezione contenente i dati [Nazione](/docs/guide/glossary/glossary-intro#country), [Lingua](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone).
- **Spedizione**: sezione contenente i dati [Spedizione](/docs/guide/glossary/glossary-intro#shipment), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Imballo](/docs/guide/glossary/glossary-intro#packing), [Listino](/docs/guide/glossary/glossary-intro#sales-price-list) (in testata documento viene inserito il listino inserito in anagrafica cliente con il flag Default) con il tipo scaglione di sconto e il suo [intervallo di validità](/docs/guide/glossary/glossary-intro#validity-date).

Elenchiamo gli altri campi disponibili nella testata del DDT:
- **Stampata**: si attiva quando viene lanciata la stampa del documento ed identifica che il documento è stato stampato; questo flag è importante anche per permettere l'evasione del DDT in altri documenti.      
- **Scaricata**: questo flag si attiva automaticamente quando il documento viene movimentato a magazzino, con il bottone della barra degli strumenti *Scarico automatico* o con le procedure a disposizione.     
- **Valorizzata**: questo flag si attiva quando il DDT viene valorizzato in fattura.   
- **Valorizzata parzialmente**: questo flag indica che il DDT è staato valorizzato solo parzialmente in fattura. 
- **Valorizzata forzatamente**: questo flag si attiva se il DDT è stato chiuso forzatamente con l'evasione forzata degli articoli; per esempio, quando il residuo non sarà consegnato e il documento viene considerato chiuso anche se non lo sarebbe.
- **Annullata**: il flag attivo permette di annullare l'ordine.      

:::note
I flag possono essere tolti con le procedure di ripristino operazione.
:::

- **Codice Unico di Progetto/Codice Identificatico di Gara**: se nelle [informazioni fiscali](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) dell'anagrafica cliente esso è abilitato alla gestione di CIG e CUP, sarà possibile compilare questi dati nel documento.    
- **Annotazioni cliente**: questo campo viene ripreso dall'ordine che ha creato il DDT, ma può essere inserito anche manualmente.
- **Nostro riferimento/vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento cliente per il documento; nel caso in cui il DDT venga generato tramite una procedura di creazione automatica, questi campi verranno popolati con le indicazioni presenti nell'documento d'origine (questo trasferimento è valido solo nel caso di DDT creato tramite il prelievo dei dati da un solo documento d'origine).   
- **Riferimento al Numero Ordini Cliente**: in questo campo viene inserito in automatico l'ordine da cui deriva il DDT.
- **Riferimento alla Data Ordini cliente**: in questo campo viene inserito in automatico la data dell'ordine da cui deriva il DDT; insieme al campo precedente, crea i dati necessari al tag 2.1.2 del file xml della fattura elettronica, quando essa verrà creata; se non compilati verrà preso invece il campo Vostro Riferimento.     
- **Note iniziali DDT**: si possono selezionare le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*; per questo l'utente deve effettuare doppio click sul campo per aprire l'Help e selezionare i dati; altrimenti può inserirle manualmente.       
- **Progetto**: è possibile associare un progetto al documento.    
- **Operatore**: permette di inserire l'utente che crea il documento. I dipendenti sono stati inseriti in precedenza nella tabella *Home > Dipendenti*; il dato diventa obbligatorio se l'opzione è impostata nei [Parametri](/docs/configurations/parameters/sales/dn-parameters) del documento stesso.     
- **Stato evasione**: quando l'ordine è evaso tramite i documenti DDT o fatture, il suo stato evasione cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*; l'utente può forzare l'evasione di un ordine non totalmente evaso e quando questo succede, viene salvata anche la data evasione.
- **Decorrenza** è la data di decorrenza per il calcolo delle scadenze di pagamento.      
- **Audit Trail**: come in tutti i documenti, questa sezione riporta la data di creazione del documento con l'operatore, e la data di ultima modifica del documento con l'operatore.   

I pulsanti presenti nella ribbon bar della testata del DDT sono:    
> [Evasione da ordini](/docs/sales/sales-delivery-notes/insert-delivery-notes/header-procedures/execution-from-order) (vedere la documentazione relativa).    
> [Scarico automatico](/docs/sales/sales-delivery-notes/insert-delivery-notes/header-procedures/unload) (vedere la documentazione relativa)   
> **Help destinatari/destinazioni**: questo bottone apre l'Help per poter scegliere il destinatario/destinazione per il documento, tra quelli disponibili per il cliente e quindi codificati nella sua anagrafica.      
> **Inserisci agente nelle righe**: questo pulsante fa aprire un pop nel quale inserire un'anagrafica agente, che verrà spalmata in tutte le righe articolo, aggiungendosi eventualmente ad Agenti già presenti.           
> **Sostituisci CIG/CUP nelle righe**: dopo aver specificato CIG e/o CUP in testata, è possibile sostituire in massa tali dati nelle righe articolo già inserite.      
> **Cancella**: cancella gli sconti selezionati nel tab *Sconti* della Testata.          

Nella testata sono poi presenti alcune tab che analizziamo di seguito. 

## Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dal documento di origine o dall'*Anagrafica cliente > tab Pagamenti* e possono essere modificate/cancellate dall'utente.        
Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale ordine.

*Pulsante specifico*
> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

## Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Viene proposto il codice e la percentuale definiti nell'*Anagrafica cliente > tab Agenti*.
Se la provvigione non è collegata al cliente nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è collegato all'agente ma non percepisce provvigione.
La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab *Agenti*.

*Pulsante specifico*
> **Cancella agenti**: permette di cancellare gli agenti selezionati.

## Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />