---
title: Testata
sidebar_position: 2
---

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati:  
- [manualmente](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection)  
- oppure con l'[help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) 
- oppure, in base alle procedure che sceglie, l'applicazione compila i campi **automaticamente**.

:::note Ricorda
Se il documento viene *creato automaticamente*, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Cliente**, vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  
- **Divisa**: sezione contenente i dati [Divisa](/docs/guide/glossary/glossary-intro#currency), [Cambio](/docs/guide/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/glossary/glossary-intro#currency-date).
- **Nazione**: sezione contenente i dati [Nazione](/docs/guide/glossary/glossary-intro#country), [Lingua](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone).
- **Spedizione**: sezione contenente i dati [Spedizione](/docs/guide/glossary/glossary-intro#shipment), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Imballo](/docs/guide/glossary/glossary-intro#packing), [Listino](/docs/guide/glossary/glossary-intro#sales-price-list) (in testata documento viene inserito il listino inserito in anagrafica cliente con il flag Default) con il tipo scaglione di sconto e il suo [intervallo di validità](/docs/guide/glossary/glossary-intro#validity-date).

Elenchiamo gli altri campi disponibili nella testata:
- **Stampata**: si attiva quando viene lanciata la stampa del documento ed identifica che il documento è stato stampato.      
- **Scaricata**: questo flag si attiva automaticamente quando il documento viene movimentato a magazzino, con il bottone della barra degli strumenti *Scarico automatico* o con le procedure a disposizione.  

:::note Nota
Nel caso di fattura creata da documento di trasporto già scaricato, è presente il parametro generale VE-PurchaseInvoices_VerifyLoadStatusDDT che blocca il flag *Scaricata* anche nella fattura. 
:::  

- **Annullata**: il flag attivo permette di annullare il documento; verranno inseriti automaticamente i flag *Scaricata* e *Valorizzata* per evitare che il documento sia visibile nelle procedure.      
- **Contabilizzata**: il flag indica che la fattura è stata contabilizzata.    

:::note
I flag possono essere tolti con le procedure di ripristino operazione.
:::

- **Annotazioni cliente**: viene proposta l'informazione inserita nell'anagrafica cliente, mentre nel caso di creazione in automatico da un ordine/DDT verranno ripresi gli stessi dati contenuti nell'omonimo campo del documento di origine; può essere inserito anche manualmente. Con il tasto destro del mouse si può aprire una form per poter specificare un testo molto lungo di nota; se il campo contiene un valore viene cambiato il colore dello sfondo del campo.      
- **Nostro riferimento/vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento cliente per la fattura in oggetto.   
- **Riferimento al Numero Ordini Cliente**: in questo campo viene inserito in automatico l'ordine da cui deriva la fattura.     
- **Riferimento alla Data Ordini cliente**: in questo campo viene inserito in automatico la data dell'ordine da cui deriva la fattura; insieme al campo precedente, crea i dati necessari al tag 2.1.2 del file xml della fattura elettronica, quando essa verrà creata; se non compilati verrà preso invece il campo Vostro Riferimento. Nel caso in cui la fattura venga generata tramite la procedura di:  
> *Creazione da ordine cliente*, questi ultimi quattro campi verranno popolati con le indicazioni presenti nell'ordine cliente. Questo trasferimento è valido solo nel caso della fattura creata tramite il prelievo dei dati da un solo ordine;  
> *Evasione DDT*, questi campi verranno popolati con le indicazioni presenti nel DDT. Questo trasferimento è valido solo nel caso della fattura creata tramite il prelievo dei dati da un solo DDT.          

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

import User from './../../../import/fields/user.md'

<User />

- **Progetto**: usando l'[help di campo](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.  
Questa associazione funziona solo a livello della testata dell'articolo.
- **Audit Trail**: come in tutti i documenti, questa sezione riporta la data di creazione del documento con l'operatore, e la data di ultima modifica del documento con l'operatore.      
- **Tipo riferimento**: se la fattura proviene da un'altra fattura a causa di uno Storno del documento, qui viene riportato il tipo fattura del documento di origine.     
- **Riferimento FT**: se la fattura è stata creata da un'altra fattura, qui vengono riportati il numero e la data del documento di origine.       
- **Riferimento SDI id**: in questo campo vengono riportati i riferimenti della fattura se inviata allo SDI.      
- **Registrazione contabile**: contiene l'identificativo della registrazione contabile se la fattura è stata contabilizzata.      
- **Spedizione**: in questa sezione vengono riportati eventuali Porto, Imballo e Automezzo inseriti in anagrafica cliente; i campi sono modificabili.       
- **Listino**: viene proposto il listino con il flag di default inserito in *Anagrafica cliente > Listini* che sarà utilizzato per il documento; è un dato modificabile.     
- **Tipo scaglione**: riporta il tipo di scaglione di sconto inserito in *Anagrafica cliente > Listini* previsto per il tipo listino di default.       
- **Decorrenza**: rappresenta la data di decorrenza per il calcolo delle scadenze di pagamento.

*Pulsanti specifici*  
> **[Evasione da ordine cliente](/docs/sales/sales-invoices/invoicing/header-procedures/execution-from-sales-order)**: richiama la procedura per creare una fattura da un ordine cliente. Si attiva con l'inserimento del cliente e del tipo fattura.      
> **Evasione da DDT**: richiama la procedura per creare una fattura da un documento di trasporto. Si attiva con l'inserimento del cliente e del tipo fattura;      
> **[Scarico automatico](/docs/sales/sales-invoices/invoicing/header-procedures/unload)**: questa procedura permette di effettuare lo scarico di magazzino del documento, se *Stampato*.      
> **Help destinatario/destinazione**: permette di visualizzare e inserire i destinatari/le destinazioni dall'anagrafica cliente.     
> **Inserisci agente nelle righe**: spalma l'agente inserito in testata nelle righe articolo, nel tab *Agenti*.     
> **Inserisci CIG/CUP nelle righe**: spalma i codici inseriti in testata nelle righe articolo, nella relative combo box.     
> **Cancella pagamenti**: cancella i pagamenti di testata.    
> **Registro dei documenti SDI**: apre il documento sdi riferito alla fattura, una volta *Controllata*.       
 
## Pagamenti 

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica cliente > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale fattura.  

Se il documento nasce da un

- *Ordine cliente* i tipi pagamento possono essere ripresi dal primo documento, dall'anagrafica cliente oppure vengono visualizzati in una form tutti i pagamenti dei documenti da evadere e l'utente seleziona la tipologia di pagamento interessata.

- *DDT* possono essere mantenuti i pagamenti di anagrafica del cliente oppure mantenuti i singoli pagamenti presenti in ogni DDT, in questo caso viene riportato in fattura il tipo pagamento con l'imponibile e l'iva uguale a quello del DDT e viene aggiunta una nuova riga per le eventuali righe articolo aggiunte in fattura non provenienti da DDT.

## Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e possono essere modificate/cancellate dall'utente.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Viene proposto il codice e la percentuale definiti nell'*Anagrafica cliente > tab Agenti*.

Se la provvigione non è collegata al cliente nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è collegato all'agente ma non percepisce provvigione.

Nel caso di generazione della fattura da ordine questo dato verrà ovviamente riportato uguale a quello dell'ordine cliente.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab Agenti.

## Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />