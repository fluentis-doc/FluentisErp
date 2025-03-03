---
title: Crea DDT di vendita - sezione superiore
sidebar_position: 1
---

La form **Crea DDT di vendita** si apre tramite il percorso **Vendite > DDT > Crea DDT di vendita** oppure tramite il pulsante ![](/img/neutral/common/new.png) che si trova nella form [Ricerca DDT di vendita](/docs/sales/sales-delivery-notes/search-sales-dn).

Per continuare la creazione del DDT di vendita, l'utente deve inserire i campi obbligatori:
- **Tipo DDT**: predefinito in  *Configurazione > Tabelle > Vendite> [Tipi DDT](/docs/configurations/tables/sales/delivery-notes-type)*.
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente e al tipo di documento che contiene la numerazione. La numerazione associata alla tipologia di DDT prevede generalmente una progressione automatica basata su data e numero, con una funzione di recupero che copre eventuali buchi nella sequenza (ad esempio, causati dalla cancellazione di documenti). Questo comportamento è regolato da due flag specifici nella tabella della numerazione. Se l'utente desidera inserire manualmente il numero, può disabilitare il flag di progressione data-numero (che garantisce l'incremento della numerazione nelle date future) e il flag di recupero numeri. Inoltre, dovrà abilitare il flag della numerazione esterna, segnalando così al sistema che la numerazione sarà gestita manualmente.    
- **Cliente**: digitabile usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), tastando [direttamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) i dati oppure usando la procedura automatica, se si sceglie di creare i documenti tramite l'[Evasione DDT da ordine cliente](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn-procedures/execution-from-order).  Inserendo il cliente, vengono automaticamente popolati, se presenti in anagrafia, i seguenti campi, che spiegheremo nelle sezioni successive: divisa, nazione, lingua, zona, spedizione, listino ed eventuali sconti, pagamenti, sconti, spese, agenti, destinazione, vettori, extra data.               
- **Data**: indica la data di creazione del DDT. Questa data è fondamentale per il calcolo delle scadenze e delle eventuali condizioni di pagamento. Viene proposta la data odierna, modificabile; nel caso in cui la numerazione preveda una progressione di data e numero, e io inserisca una data nel passato, Fluentis controllerà la disponibilità di numeri in quella data per garantire la progressione, e se non presente segnalerà l’utente che non ci sono numeri disponibili in quella data. 

La form contiene una serie di tab.

---
title: Testata
sidebar_position: 2
---

## Testata 

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con l' [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base alle procedure che sceglie, l'applicazione compila i campi *automaticamente*.

:::note Ricorda
Se il documento viene *creato automaticamente*, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Cliente**, vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  
- **Divisa**: sezione contenente i dati [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nazione**: sezione contenente i dati [Nazione](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Spedizione**: sezione contenente i dati [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) (in testata documento viene inserito il listino inserito in anagrafica cliente con il flag Default) con il tipo scaglione di sconto e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).

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
> [Evasione da ordini](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn-procedures/execution-from-order) (vedere la documentazione relativa).    
> [Scarico automatico](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn-procedures/unload) (vedere la documentazione relativa)   
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

h1---
title: Evasione da ordine
sidebar_position: 1
---

Nella testata del DDT, premendo il pulsante **Evasione da ordine** si aprirà la form dove è possibile filtrare gli ordini confermati del cliente del documento e trasferirli nel DDT. E' possibile eseguire l'operazione di creazione DDT da ordine anche dalla [Ricerca ordini](/docs/sales/sales-orders/search-sales-orders).

Tramite questa procedura è possibile creare un DDT di vendita dall'evasione del relativo ordine cliente. E' quindi possibile inserire gli articoli all'interno del DDT, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

 -  i/il cliente degli ordini deve essere lo stesso del DDT;
 -  l'ordine che si vuole evadere deve avere impostato il flag *Stampato* e la *Data conferma ordine*;
 -  nella tabella [Tipi DDT](/docs/configurations/tables/sales/delivery-notes-type) deve essere presente il flag su *Ordine* (che indica che il DDT può derivare da un ordine).    
 - solo se la procedura viene eseguita dalla Ricerca ordini, i tipi documento devono essere compatibili: nella tabella [Tipi ordine](/docs/configurations/tables/sales/sales-order-types) il tipo ordine che si vuole evadere deve avere impostato il tipo DDT corrispondente.        

Si dovrà poi andare ad impostare nella testata del nuovo DDT, il *Tipo DDT* che si vuole creare (che deve corrispondere a quello impostato nella tabella dei *Tipi ordini*) e il *Cliente*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione ordini* per aprire la form di evasione.

*Procedimento*:

I filtri per cliente e divisa verranno riportati in automatico in base al cliente selezionato nel DDT.

Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verrà visualizzata nella griglia una riga per ciascun ordine stampato, confermato e non evaso oppure evaso parzialmente.

:::note Nota
La procedura riprende tutti i dati presenti nell'ordine e come conseguenza saranno applicate le condizioni di acquisto presenti nell'ordine, anche se queste attualmente sono cambiate.
:::

:::note Nota
Le righe di tipo Nota saranno sempre visibili, anche se già evase, fino a quando tutte le righe delle altre tipologie saranno evase.
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 1. selezionare l'*ordine per intero*. Per farlo basterà selezionare il flag presente all'inizio della riga ordine.
 2. selezionare solo *alcuni* degli *articoli* proposti. Per farlo basterà selezionare il flag presente all'inizio della riga articolo.
 3. selezionare solo *alcuni articoli* per una *determinata quantità*. In questo caso dovrà andare a modificare la quantità da evadere.

Per completare la procedura bisognerà poi cliccare sul pulsante *Trasferimento*, che andrà a riprendere tutti i dati presenti nell'ordine e li riporterà nel DDT.

*Pulsanti specifici*:

> **Ricerca** permette di cercare gli ordini fornitore.  
> **Trasferimento** permette di trasferire i dati dell'ordine selezionato all'interno del nuovo DDT.  
> **Evasione forzata dell'ordine** permette l'evasione forzata dell'ordine; nel caso in cui vengano selezionate alcune righe dell'ordine, verranno evase forzatamente solo le righe selezionate (con l'aggiunta del flag *Evaso forzato* in corrispondenza della riga articolo); nel caso venga evaso l'ordine intero, esso cambierà lo stato anche in testata.  
> **Evasione ordini** permette l'evasione dell'ordine.  
> **Espandi** permette di espandere l'intero albero degli ordini nella griglia sottostante, per visualizzare gli articoli contenuti in essi.  
> **Comprimi** permette di comprimere la visualizzazione delle righe articolo, e di far visualizzare solamente le righe ordine.  
> **Seleziona tutti** permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti** permette di deselezionare tutti gli articoli dalla lista.  

h2 ---
title: Scarico automatico
sidebar_position: 2
---

L'altra procedura presente in testata DDT è lo scarico automatico da magazzino. Il pulsante si abilita se il documento è Stampato.      
Ricordiamo che se nei [Parametri DDT](/docs/configurations/parameters/sales/dn-parameters) è abilitato lo scarico automatico, questa procedura verrà avviata in automatico una volta Stampato il documento.      
Una volta avviata la procedura, Fluentis controlla la presenza di magazzino e causale nelle righe DDT e l'eventuale presenza di lotti e serial number se richiesti; nel caso la procedura non vada a buon fine viene avvisato l'utente con un errore.      
Se la procedura va a buon fine, viene creata la [Registrazione di magazzino](/docs/logistics/warehouse/stock-records/record) che movimenta gli articoli del documento e viene inserito il flag **Scaricato** nella testata DDT.      

---
title: Articoli
sidebar_position: 3
---

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

## Griglia articoli

Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar. Le colonne disponibili sono le seguenti:   

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga**: offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
>- *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino.
>- *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino.
>- *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino.
>- *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
>- *Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.
:::note[NOTA]
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga - Articolo codificato vengono inseriti automaticamente.
:::

- **Barcode**: se nei [Parametri DDT](/docs/configurations/parameters/sales/dn-parameters) è stata abilitata la gestione dei Barcode, comparirà la colonna Barcode dove selezionare il dato per l'articolo tra i Barcode inseriti in *Anagrafica articolo > Barcode*. 

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **Articolo cliente**: se nei [Parametri DDT](/docs/configurations/parameters/sales/dn-parameters) è stata abilitata la gestione degli Articolo cliente, comparirà la colonna Articolo cliente, con il codice articolo valido per il cliente intestatario del documento e inserito in *Anagrafica articolo > Clienti*. 

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
In assenza del listino, il dato proposto è il **prezzo di vendita** ripreso dall'*Anagrafica articolo > tab [Costi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* oppure verrà recuperato in base alle impostazioni dei parametri del documento. In assenza anche di questo dato, verrà riportato il prezzo 0.
:::

- **Imponibile**: in questo campo viene riportato il Prezzo unitario, moltiplicato per la quantità articolo, al netto degli sconti.        

- **Sconti articolo**: viene riportata la somma degli sconti previsti per l'articolo.     

- **Sconti finali articolo**: viene riportata la somma degli sconti finali inseriti articolo inseriti nei Riepiloghi del documento.     

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*. Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* oppure sarà generato un messaggio di errore.   

- **In fattura**: questo flag viene inserito di default, ma si può disabilitare se l'articolo non dovrà essere trasferito in fattura e quindi non dovrà comparire nelle procedure di evasione del DDT.     

- **Peso netto**: viene riportato il Peso netto presente in anagrafica articolo, moltiplicato per la quantità articolo della riga.     

- **Peso lordo**: viene riportato il Peso lordo presente in anagrafica articolo, moltiplicato per la quantità articolo della riga.     


*Pulsanti specifici*

> **Ricalcolo Conai**: se il [Conai](/docs/sales/sales-flow/conai) è abilitato per il documento, è possibile ricalcolare i valori con questo bottone dopo eventuali modifiche.       

> **Aggiorna i dati Conai nell'anagrafica articolo**: se nel tab *Materiali Conai per l'articolo* vengono modificati Unità di misura e/o Peso, è possibile trasferire questi valori nella sezione Conai dell'anagrafica articolo.      

> **Gestione imballi**: permette l'apertura della gestione degli imballi a rendere usati nel documento di acquisti.
Il pulsante diventa attivo se il documento è salvato, ma non caricato.
Cliccando su questo pulsante si apre la form corrispondente dove: inserire la quantità, selezionare la riga ed eseguire il trasferimento dell'imballo selezionato nelle righe articolo cliccando sul pulsante Execute. In questa form vengono riportati gli articoli che sono stati inseriti con natura Imballo e che sono presenti nella tabella degli Imballi a rendere.         

> **Aggiornamento listini**: cliccando sulla tendina accanto al pulsante si accede a due procedure. La prima procedura è **Aggiorna il listino corrente**, che permette di allineare il prezzo dell'articolo internamente al Listino, a seguito di una eventuale variazione di prezzo direttamente nella riga articolo. Invece con la seconda procedura, **Crea nuovo listino con nuova validità**, è possibile creare un nuovo listino personalizzato per il cliente intestatario del documento; verranno richiesti, in un pop-up, le date di inizio e fine validità del nuovo listino.      

> **Mostra/Nascondi dettagli**: cliccando questo bottone si rendono o meno visibili le tab interne agli Articoli.   


## Sconti/Listini

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

## Dati

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento dello scarico degli articoli relativi dal magazzino. I dati sono ripresi dai *Tipi DDT* oppure si inseriscono manualmente.
- **Variante**: è possibile scegliere una variante dell'articolo, se codificate all'interno dell'*Anagrafica articolo > Varianti*.    
- **Stato evasione**: in questa sezione è possibile verificare se la riga articolo è stata Valorizzata, Valorizzata parzialmente o Valorizzata forzatamente.       
- **Progetto**: è il progetto associato al documento oppure può essere assegnato con l'ausilio del help di campo.     
- **Rivalsa IVA**: se settato l'iva dell'omaggio viene considerata per il totale documento.   
- **Riferimento ordine**: fa riferimento all'ordine dal quale è stata creata la DDT.  
- **Nostro riferimento/vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento cliente per il documento; nel caso in cui il DDT venga generato tramite una procedura di creazione automatica, questi campi verranno popolati con le indicazioni presenti nell'documento d'origine.      
- **Numero/Data riferimento**: riportano il Riferimento al Numero e alla Data dell'Ordine cliente di origine.     
- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.    
- **In fattura**: questo flag viene inserito di default, ma si può disabilitare se l'articolo non dovrà essere trasferito in fattura e quindi non dovrà comparire nelle procedure di evasione del DDT.     
- **Nota**: offre la possibilità di inserire note per ogni articolo.     
- **Dettaglio dichiarazioni**: viene riportata la [Dichiarazione d'intento](/docs/finance-area/declarations/declarations/intent-declaration) usata per proporre l'iva dell'articolo; dalla combo box è possibile cambiare la dichiarazione d'intento di riferimento, se presenti più dichiarazioni valide.    

## Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

## Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e i numeri seriali che devono essere scaricati dal magazzino.     
Questa operazione è condizionata dalla presenza dei lotti e dei numeri seriali nel magazzino. 

Se l'articolo non prevede la gestione dei Lotti/Numeri seriali, questo tab sarà disabilitato.  

*Pulsanti specifici*

import DeleteLot from './../../../import/buttons/delete-lot.md'

> <DeleteLot />

import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteSN />

## Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## Sezione valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

---
title: Riepiloghi
sidebar_position: 5
---

Nei Riepiloghi sono presentate le informazioni principali dell'intero documento.

## Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Riepilogo provvigioni agenti

In questo tab vengono riepilogate le provvigioni previste per ogni agente.     

## Spese/Sconti/maggiorazioni finali 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

- **Dettaglio dichiarazioni**: viene inserita l'eventuale dichhiarazione d'intento valida per il cliente.    

## Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

## Riepilogo scadenze

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

## Totali documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

---
title: Trasporto
sidebar_position: 6
---

I dati presenti sono: 

- **Destinatario**: viene proposto il destinatario di default inserito in anagrafica cliente; se non presente, viene preso l'indirizzo del cliente.    
- **Destinazione**: viene proposta la destinazione di default del destinatario, se inserita in anagrafica cliente.        
- **Numero Tracking**: campo libero. 
- **Volume**: viene proposto il volume cumulativo, risultato dalla somma dei volumi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del volume degli articoli corrisponde a quella inserita nei [parametri del DDT](/docs/configurations/parameters/sales/dn-parameters). 
- **Peso netto**: viene proposto il peso netto cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del peso degli articoli corrisponde a quello inserito nei parametri del DDT. 
- **Peso lordo**: viene proposto il peso lordo cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del peso degli articoli corrisponde a quella inserita nei parametri del DDT.     
- **Aspetto esteriore dei beni**: combo box che rimanda all'omonima tabella.     
- **Colli**: viene proposto il numero dei colli, sulla base dei dati inseriti nell'*Anagrafica articolo > tab Pesi/Dimensioni*, nei campi *Articoli presenti in un collo* oppure *Colli per formare l'articolo*. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.     
- **Valori modificati manualmente**: con questo flag rendiamo possibile la modifica dei campi Volume, Peso netto, Peso lordo e Colli, che altrimenti riportano i dati da anagrafica articolo senza possibilità di modifica.     
- **Ingresso/Uscita dell'ufficio doganale**: campi utilizzati per l'eTrasport per la versione romena, che rimandano alla tabella Ufficio doganale.     
- **Ingresso/Uscita valico di frontiera**: campi utilizzati per l'eTrasport per la versione romena, che rimandanno alla tabella Valico di frontiera.      
- **Trasporto**: è necessario selezionare la figura che si occuperà del trasporto, mettendo il flag in Mittente, Destinatario o Vettore; in base alla selezione, la sezione sottostante cambierà; se il trasporto è a carico del Mittente sarà possibile inserire Targa automezzo, Rimorchio, Data e Ora di Inizio trasporto; se è a carico del Destinatario sarà possibile inserire Targa automezzo, Rimorchio, Data e Ora di Inizio trasporto; se è a carico del Vettore invece i campi disponibili saranno Anagrafica contabile del Vettore, Targa, Rimorchio, Data e Ora trasporto, eventuale Committente, Caricatore, Proprietario, Luogo carico. 

---
title: Documenti collegati
sidebar_position: 7
---

In questa tab è possibile consultare i documenti allegati.
Per allegare i documenti è possibile procedere in due modi:
- utilizzando il pulsante della barra degli strumenti **Documenti** si può scegliere se allegare un documento già codificato in Fluentis o se creare un nuovo Documento da allegare.       
- utilizzando direttamente nella griglia il tasto destro e selezionando *Allega file* si va in creazione di un nuovo Documento da allegare.     

