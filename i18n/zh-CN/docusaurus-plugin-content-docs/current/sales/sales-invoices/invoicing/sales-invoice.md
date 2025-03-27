---
title: Nuova fattura di vendita
sidebar_position: 2
---

La form si apre:  
1. tramite il percorso **Vendite > Fatture > Crea fattura di vendita**  
oppure 
2. tramite il pulsante **Nuova** che si trova nella form [Ricerca fatture di vendita](/docs/sales/sales-invoices/invoicing/search-sales-invoices).

## **1. Dati obbligatori**

Per continuare la creazione del documento, l'utente deve inserire i campi *obbligatori*:

- **Tipo fattura**: predefinito in *Configurazione > Tabelle >Vendite > [Tipo fattura di vendita](/docs/configurations/tables/sales/invoices-type)*.          
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione](/docs/configurations/tables/fluentis-numerations) e al tipo di documento che contiene la numerazione. La numerazione associata alla tipologia di fattura prevede generalmente una progressione automatica basata su data e numero, con una funzione di recupero che copre eventuali buchi nella sequenza (ad esempio, causati dalla cancellazione di documenti). Questo comportamento è regolato da due flag specifici nella tabella della numerazione. Se l'utente desidera inserire manualmente il numero, può disabilitare il flag di progressione data-numero (che garantisce l'incremento della numerazione nelle date future) e il flag di recupero numeri. Inoltre, dovrà abilitare il flag della numerazione esterna, segnalando così al sistema che la numerazione sarà gestita manualmente.            
- **Cliente**: usando l' [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure tastando [direttamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) i dati. Inserendo il cliente, vengono automaticamente popolati, se presenti in anagrafia, i seguenti campi, che spiegheremo nelle sezioni successive: divisa, nazione, lingua, zona, spedizione, listino ed eventuali sconti, pagamenti, sconti, spese, agenti, destinazione, vettori, extra data.               
- **Data fattura**: indica la data di creazione della fattura. Questa data è fondamentale per il calcolo delle scadenze e delle eventuali condizioni di pagamento. Viene proposta la data odierna, modificabile; nel caso in cui la numerazione preveda una progressione di data e numero, e io inserisca una data nel passato, Fluentis controllerà la disponibilità di numeri in quella data per garantire la progressione, e se non presente segnalerà l’utente che non ci sono numeri disponibili in quella data. 

Continuare la creazione inserendo almeno i dati obbligatori su ognuno dei tab sotto.

## **2. Testata**

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati:  
- [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  
- oppure con l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) 
- oppure, in base alle procedure che sceglie, l'applicazione compila i campi **automaticamente**.

:::note Ricorda
Se il documento viene *creato automaticamente*, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

Inserendo il **Cliente**, vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  
- **Divisa**: sezione contenente i dati [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nazione**: sezione contenente i dati [Nazione](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Spedizione**: sezione contenente i dati [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) (in testata documento viene inserito il listino inserito in anagrafica cliente con il flag Default) con il tipo scaglione di sconto e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Altri campi

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

- **Progetto**: usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) si può collegare il documento a un progetto.  
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

#### Pulsanti specifici

> **[Evasione da ordine cliente](/docs/sales/sales-invoices/invoicing/sales-invoice)**: richiama la procedura per creare una fattura da un ordine cliente. Si attiva con l'inserimento del cliente e del tipo fattura.      
> **Evasione da DDT**: richiama la procedura per creare una fattura da un documento di trasporto. Si attiva con l'inserimento del cliente e del tipo fattura;      
> **[Scarico automatico](/docs/sales/sales-invoices/invoicing/sales-invoice)**: questa procedura permette di effettuare lo scarico di magazzino del documento, se *Stampato*.      
> **Help destinatario/destinazione**: permette di visualizzare e inserire i destinatari/le destinazioni dall'anagrafica cliente.     
> **Inserisci agente nelle righe**: spalma l'agente inserito in testata nelle righe articolo, nel tab *Agenti*.     
> **Inserisci CIG/CUP nelle righe**: spalma i codici inseriti in testata nelle righe articolo, nella relative combo box.     
> **Cancella pagamenti**: cancella i pagamenti di testata.    
> **Registro dei documenti SDI**: apre il documento sdi riferito alla fattura, una volta *Controllata*.       
 
### 2.1 Pagamenti 

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica cliente > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale fattura.  

Se il documento nasce da un:

- *Ordine cliente* i tipi pagamento possono essere ripresi dal primo documento, dall'anagrafica cliente oppure vengono visualizzati in una form tutti i pagamenti dei documenti da evadere e l'utente seleziona la tipologia di pagamento interessata.

- *DDT* possono essere mantenuti i pagamenti di anagrafica del cliente oppure mantenuti i singoli pagamenti presenti in ogni DDT, in questo caso viene riportato in fattura il tipo pagamento con l'imponibile e l'iva uguale a quello del DDT e viene aggiunta una nuova riga per le eventuali righe articolo aggiunte in fattura non provenienti da DDT.

### 2.2 Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e possono essere modificate/cancellate dall'utente.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Viene proposto il codice e la percentuale definiti nell'*Anagrafica cliente > tab Agenti*.

Se la provvigione non è collegata al cliente nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è collegato all'agente ma non percepisce provvigione.

Nel caso di generazione della fattura da ordine questo dato verrà ovviamente riportato uguale a quello dell'ordine cliente.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab Agenti.

### 2.4 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## Procedure testata:  

### *Fatturazione elettronica*

Da questa sezione presente nella barra degli strumenti della fattura è possibile gestire la creazione e l'invio della fattura elettronica allo SDI. Questa procedura si esegue con il cambio stato del documento; gli stati sono i seguenti:
- *Non esaminata*: è lo stato di partenza in cui si trovano i documenti prima di comunicare con lo sdi; il documento è stato generato e ancora non sono 
state fatte azioni relative alla gestione del documento elettronico; gli stati successivi possono essere Controllato, Annullata o Esclusa;             
- *Controllato*: impostando questo stato vengono effettuati i controlli da parte di Fluentis sul documento; nel caso in cui manchino dei dati per la comunicazione con SDI verrà avvisato l'utente; da questo stato in poi si accenderà il bottone *Registro dei documenti sdi* dove consultare lo storico e il foglio di stile dell'xml; gli stati successivi possono essere Generata, Annullata, Esclusa;              
- *Generato*: E’ stato creato il file XML relativo al documento elettronico. Da questo momento è possibile procedere con gli stati successivi per inviare il file al Fluentis Business Hub oppure scaricare il file XML per gestioni esterne; gli stati successivi possono essere Firmata, Da spedire, Annullata, Esclusa;       
- *Firmata*: Il documento è stato firmato esternamente con certificato di firma Cadeso Xades e reimportato in Fluentis nel nuovo formato; gli stati succcessivi possono essere Da spedire, Annullata, Esclusa;      
- *Da spedire*: Questo stato, da utilizzare nel caso in cui sia correttamente configurato il canale Fluentis Business Hub, accoda il documento alla lista documenti che BizLink dovrà processare per l’invio a Sdi; non sono previste altre azioni manuali in quanto sarà necessario attendere l'esito dello Sdi;           
- *Annullata*: il documento non deve essere inviato al cliente finale ma resta comunque valido ai fini IVA;       
- *Esclusa*: Il documento è stato creato ma non rientra tra quelli da inviare al SdI (es. nota di storno interna o cliente non residente in italia e non soggetto a fatturazione elettronica con invio a SdI).

### *Evasione da DDT*

Nella testata della fattura, premendo il pulsante **Evasione da DDT** si aprirà la form dove è possibile filtrare i DDT relativi al cliente del documento.

Tramite questa procedura è possibile creare una fattura di vendita dall'evasione del relativo DDT. E' quindi possibile inserire gli articoli all'interno della fattura, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:
 -  i/il cliente deve essere lo stesso della fattura;
 -  il DDT che si vuole evadere deve avere impostato il flag *Stampato*;

#### Procedimento 

I filtri per cliente e divisa verranno riportati in automatico in base al cliente selezionato nella fattura.

Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verrà visualizzata nella griglia una riga per ciascun DDT stampato, confermato e non evaso oppure evaso parzialmente.

:::note Nota
La procedura riprende tutti i dati presenti neL ddt e come conseguenza saranno applicate le condizioni di acquisto presenti, anche se queste attualmente sono cambiate(es: aggiornamento listini).
:::

:::note Nota
Le righe di tipo Nota saranno sempre visibili, anche se già evase, fino a quando tutte le righe delle altre tipologie saranno evase.
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 1. selezionare il *DDT per intero*. Per farlo basterà selezionare il flag presente all'inizio della riga.
 2. selezionare solo *alcuni* degli *articoli* proposti. Per farlo basterà selezionare il flag presente all'inizio della riga articolo.
 3. selezionare solo *alcuni articoli* ma solo per una *determinata quantità*. In questo caso dovrà andare a modificare la quantità da evadere.

Per completare la procedura bisognerà poi cliccare sul pulsante *Trasferimento*, che andrà a riprendere tutti i dati presenti nel ddt e li riporterà nella fattura.

#### Pulsanti specifici 

> **Ricerca**: permette di cercare i documenti.  
> **Trasferimento**: permette di trasferire i dati del documento selezionato all'interno della nuova fattura.  
> **Evasione forzata dell'ordine**: permette l'evasione forzata dell DDT.  
> **Evasione ordini**: permette l'evasione del DDT.  
> **Espandi**: permette di espandere l'intero albero deI DDT nella griglia sottostante, per visualizzare gli articoli contenuti in essi.  
> **Comprimi**: permette di comprimere la visualizzazione delle righe articolo, e di far visualizzare solamente le righe DDT.  
> **Seleziona tutti**: permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla lista. 

### *Evasione da ordini clienti*

Nella testata della fattura, premendo il pulsante **Evasione da ordini clienti** si aprirà la form dove è possibile filtrare gli ordini relativi al cliente del documento.

Tramite questa procedura è possibile creare una fattura di vendita dall'evasione del relativo ordine cliente. E' quindi possibile inserire gli articoli all'interno della fattura, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:
 -  i/il cliente degli ordini deve essere lo stesso della fattura;
 -  l'ordine che si vuole evadere deve avere impostato il flag *Stampato* e la *Data conferma ordine*;
 -  i tipi documento devono essere compatibili: nella tabella dei *Tipi ordini* il tipo ordine che si vuole evadere deve avere impostato il tipo fattura corrispondente, mentre nella tabella dei *Tipi fatture* deve essere presente il flag su *Ordine* (che indica che la fattura deriva da un ordine);

Si dovrà poi andare ad impostare nella testata della nuovo DDT, il *Tipo DDT* che si vuole creare (che deve corrispondere a quello impostato nella tabella dei *Tipi ordini*) e il *Cliente*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione ordini* per aprire la form di evasione.

#### Procedimento 

I filtri per cliente e divisa verranno riportati in automatico in base al cliente selezionato nella fattura.

Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verrà visualizzata nella griglia una riga per ciascun ordine stampato, confermato e non evaso oppure evaso parzialmente.

:::note Nota
La procedura riprende tutti i dati presenti nell'ordine e come conseguenza saranno applicate le condizioni di acquisto presenti nell'ordine, anche se queste attualmente sono cambiate(es: aggiornamento listini).
:::

:::note Nota
Le righe di tipo Nota saranno sempre visibili, anche se già evase, fino a quando tutte le righe delle altre tipologie saranno evase.
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 1. selezionare l'*ordine per intero*. Per farlo basterà selezionare il flag presente all'inizio della riga ordine.
 2. selezionare solo *alcuni* degli *articoli* proposti. Per farlo basterà selezionare il flag presente all'inizio della riga articolo.
 3. selezionare solo *alcuni articoli* ma solo per una *determinata quantità*. In questo caso dovrà andare a modificare la quantità da evadere.

Per completare la procedura bisognerà poi cliccare sul pulsante *Trasferimento*, che andrà a riprendere tutti i dati presenti nell'ordine e li riporterà nella fattura.

#### Pulsanti specifici 

> **Ricerca**: permette di cercare gli ordini.  
> **Trasferimento**: permette di trasferire i dati dell'ordine selezionato all'interno della nuova fattura.  
> **Evasione forzata dell'ordine**: permette l'evasione forzata dell'ordine.  
> **Evasione ordini**: permette l'evasione dell'ordine.  
> **Espandi**: permette di espandere l'intero albero degli ordini nella griglia sottostante, per visualizzare gli articoli contenuti in essi.  
> **Comprimi**: permette di comprimere la visualizzazione delle righe articolo, e di far visualizzare solamente le righe ordine.  
> **Seleziona tutti**: permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla lista. 

### *Scarico automatico*

Un'altra procedura presente in testata è lo scarico automatico da magazzino. Il pulsante si abilita se il documento è Stampato e se la fattura non è collegata ad un DDT già scaricato.      
Ricordiamo che se nei [Parametri fattura](/docs/configurations/parameters/sales/sales-invoices-parameters) è abilitato lo scarico automatico, questa procedura verrà avviata in automatico una volta Stampato il documento.      
Una volta avviata la procedura, Fluentis controlla la presenza di magazzino e causale nelle righe fattura e l'eventuale presenza di lotti e serial number se richiesti; nel caso la procedura non vada a buon fine viene avvisato l'utente con un errore.      
Se la procedura va a buon fine, viene creata la [Registrazione di magazzino](/docs/logistics/warehouse/stock-records/record) che movimenta gli articoli del documento e viene inserito il flag **Scaricato** nella testata.      

## **3. Articoli**

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar. Le colonne disponibili sono le seguenti:   

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga**: offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
>- *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino.
>- *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino.
>- *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino.
>- *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
>- *Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.
>- *Fattura d'acconto*: la riga articolo acconto viene utilizzata per creare delle fatture di acconto.  
>- *Storno fattura d'acconto*: la riga articolo storno acconto chiude la riga articolo acconto e gli acconti possono essere selezionati tramite un help acconti. Questi dati possono essere inseriti automaticamente quando si inserisce direttamente la classe o la matricola perché il tipo riga 'articolo codificato' viene selezionato in automatico.
:::note[NOTA]
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga - Articolo codificato vengono inseriti automaticamente.
:::

- **Barcode**: se nei [Parametri fattura](/docs/configurations/parameters/sales/sales-invoices-parameters) è stata abilitata la gestione dei Barcode, comparirà la colonna Barcode dove selezionare il dato per l'articolo tra i Barcode inseriti in *Anagrafica articolo > Barcode*. 

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **Articolo cliente**: se nei [Parametri fattura](/docs/configurations/parameters/sales/sales-invoices-parameters) è stata abilitata la gestione degli Articolo cliente, comparirà la colonna Articolo cliente, con il codice articolo valido per il cliente intestatario del documento e inserito in *Anagrafica articolo > Clienti*. 

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
In assenza del listino, il dato proposto è il **prezzo di vendita** ripreso dall'*Anagrafica articolo > tab [Costi](/docs/erp-home/registers/items/create-new-item)* oppure verrà recuperato in base alle impostazioni dei parametri del documento. In assenza anche di questo dato, verrà riportato il prezzo 0.
:::

- **Imponibile**: in questo campo viene riportato il Prezzo unitario, moltiplicato per la quantità articolo, al netto degli sconti.        

- **Sconti articolo**: viene riportata la somma degli sconti previsti per l'articolo.     

- **Sconti finali articolo**: viene riportata la somma degli sconti finali inseriti articolo inseriti nei Riepiloghi del documento.     

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*. Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* oppure sarà generato un messaggio di errore.
Se questo non è presente, non viene proposto nessun dato ma al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'*Anagrafica cliente > Dati contabili > tab Amministrativa* oppure sarà generato un messaggio di errore.

#### Pulsanti specifici

> **Ricalcolo Conai**: se il [Conai](/docs/sales/sales-flow/conai) è abilitato per il documento, è possibile ricalcolare i valori con questo bottone dopo eventuali modifiche.     

> **Aggiorna i dati Conai nell'anagrafica articolo**: se nel tab *Materiali Conai per l'articolo* vengono modificati Unità di misura e/o Peso, è possibile trasferire questi valori nella sezione Conai dell'anagrafica articolo.      

> **Gestione imballi**: permette l'apertura della gestione degli imballi a rendere usati nel documento di acquisti.
Il pulsante diventa attivo se il documento è salvato, ma non caricato.
Cliccando su questo pulsante si apre la form corrispondente dove: inserire la quantità, selezionare la riga ed eseguire il trasferimento dell'imballo selezionato nelle righe articolo cliccando sul pulsante Execute. In questa form vengono riportati gli articoli che sono stati inseriti con natura Imballo e che sono presenti nella tabella degli Imballi a rendere.         
  
> **Aggiornamento listini**: cliccando sulla tendina accanto al pulsante si accede a due procedure. La prima procedura è **Aggiorna il listino corrente**, che permette di allineare il prezzo dell'articolo internamente al Listino, a seguito di una eventuale variazione di prezzo direttamente nella riga articolo. Invece con la seconda procedura, **Crea nuovo listino con nuova validità**, è possibile creare un nuovo listino personalizzato per il cliente intestatario del documento; verranno richiesti, in un pop-up, le date di inizio e fine validità del nuovo listino.      

> **Mostra/Nascondi dettagli**: cliccando questo bottone si rendono o meno visibili le tab interne agli Articoli.   

> **Gestione acconti**: Fluentis permette di gestire le fatture di acconto e il relativo storno, procedure apribili cliccando questo pulsante.
> - **Creazione fattura di acconto**
Le fatture di acconto possono avere un [Tipo documento](/docs/configurations/tables/sales/invoices-type) dedicato o meno, in quanto la gestione degli acconti non avviene a livello di tabella, ma di articoli.
La gestione degli acconti prevede quindi la creazione di una normale fattura di vendita, per la quale sono richiesti un **Tipo**, un **Cliente**, ecc.
Dopo la compilazione dei dati di Testata, è possibile passare alla tab Articoli.
Nella griglia articoli, inserire un *Tipo riga 6 Fattura d'acconto*, una Descrizione libera,  il Prezzo, l'IVA, un Fatturato (che dovrebbe avere come conto Anticipi clienti), ed eventuali altri dati. E' quindi la riga di questa tipologia a determinare l'ammontare dell'acconto.
Una volta completata la fattura, è possibile stamparla. 
A questo punto la fattura d'acconto risulta confermata.
Al momento della creazione di altri documenti per questo cliente, Fluentis mi avviserà dell'esistenza di una fattura di acconto.
> - **Storno fattura di acconto**
Per stornare una fattura di acconto è necessario creare una nuova fattura di vendita intestata allo stesso cliente.
Nel tab Articoli, se il cliente ha almeno una fattura di acconto, sarà attivo il bottone della ribbon bar **Gestione acconti**. Cliccandolo verrà aperta l'omonima procedura.    
Nel tab **Storno acconti** è possibile selezionare gli acconti da stornare; dopo la selezione, con il bottone **Crea storno** verrà creato lo storno, il quale sarà riportato nella griglia in basso. 
Alla chiusura della maschera verrà chiesto se inserire il nuovo valore di storno in fattura. In caso di conferma, sarà possibile consultare la riga storno nel tab Articoli della fattura, che riporterà i dati della fattura di acconto precedentemente creata.

Sono poi presenti alcune tab che analizziamo di seguito. 

### 3.1 Sconti/Listini

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.2 Dati articolo

- **Variante**: contiene l'eventuale variante dell'articolo;    

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Magazzino, causale e ubicazione**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento dello scarico degli articoli relativi dal magazzino. I dati sono ripresi dalla tabella *Tipi fatture*;     

- **Articolo**: riporta l'articolo selezionato;     

- **Progetto**: è il progetto associato al documento oppure può essere assegnato con l'ausilio del help di campo; 

- **Rivalsa IVA**: se settato l'iva dell'omaggio viene considerata per il totale fattura;     

- **Dettaglio dichiarazioni**: contiene eventuale [dichiarazione d'intento](/docs/finance-area/declarations/declarations/intent-declaration) del cliente;

- **Riferimento ordine**: fa riferimento all'ordine dal quale è stata creata la fattura;

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

- **Note**: offre la possibilità di inserire note per ogni articolo;

### 3.3 Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e i numeri seriali che devono essere scaricati dal magazzino e che sono collegati all'articolo nell'*Anagrafica articolo > tab [Lotti e Serial Number]*(/docs/erp-home/registers/items/create-new-item) oppure possono essere inserite manualmente.

Questa operazione è condizionata dalla presenza dei lotti e dei numeri seriali nel magazzino. 

Se l'articolo non prevede la gestione dei Lotti/Numeri seriali, questo tab sarà disabilitato.

#### Pulsanti specifici

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />  
> <DeleteSN />

### 3.5 Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Sezione valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **4. Riepiloghi**

Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.

### 4.1 IVA/Scadenze

#### Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

#### Riepilogo scadenze

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

Generalmente le scadenze si ricalcolano se viene modificato il pagamento in testata del documento. Le casistiche nelle quali non vengono aggiornate le scadenze, se modifico il pagamento in testata, sono le seguenti:      
-	Quando la fattura ha il link SDI ed ha stato diverso da NotExamined, Controlled, Canceled, Excluded 
-	Quando c’è almeno una scadenza con il flag ‘Modifica manuale’ attivo 
-	Quando la fattura ha il collegamento con uno o più Effetti oppure è collegata con una riga FSAdvanceInvoiceMaturity
-	Quando c’è lo sconto nella scadenza che però non proviene dal pagamento
-	Quando la somma dell’Importo nella griglia Pagamenti è maggiore dell’Imponibile della fattura
-	Oppure se le fatture sono state modificate fuori da Fluentis

In questi casi è necessario cliccare il bottone della barra degli strumenti 'Ricalcola e raggruppa scadenze'.    


### 4.2 Agenti/Sconti/Spese

#### Sconti finali articoli

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

#### Spese/Sconti

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

#### Altri campi 

**Note finali**: è un campo libero che può essere compilato dall'utente con l'ausilio del 'Help note codificate'.

### 4.3 Totali documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

- **Sconto totale percentuale**: è possibile inserire un ulteriore sconto finale in percentuale; inserendo questo campo si popola automaticamente anche il successivo.     

- **Sconto totale valore**: è possibile inserire uno sconto finale in valore.      

- **Arrotondamento**: è presente un ulteriore campo per arrotondare in eccesso il documento.     

- **Totale a pagare**: viene infine riportato il totale definitivo ottenuto.     

## **5. Trasporto**

Se la fattura è accompagnatoria è necessaro compilare il tab Trasporto.       
I dati presenti sono: 

- **Destinatario**: viene proposto il destinatario di default inserito in anagrafica cliente; se non presente, viene preso l'indirizzo del cliente.    
- **Destinazione**: viene proposta la destinazione di default del destinatario, see inserita in anagrafica cliente.        
- **Numero Tracking**: campo libero. 
- **Volume**: viene proposto il volume cumulativo, risultato dalla somma dei volumi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del volume degli articoli corrisponde a quella inserita nei parametri della fattura. 
- **Peso netto**: viene proposto il peso netto cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del peso degli articoli corrisponde a quello inserito nei parametri della fattura. 
- **Peso lordo**: viene proposto il peso lordo cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del peso degli articoli corrisponde a quella inserita nei parametri della fattura.     
- **Aspetto esteriore dei beni**: combo box che rimanda all'omonima tabella.     
- **Colli**: viene proposto il numero dei colli, sulla base dei dati inseriti nell'*Anagrafica articolo > tab Pesi/Dimensioni*, nei campi *Articoli presenti in un collo* oppure *Colli per formare l'articolo*. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.     
- **Valori modificati manualmente**: con questo flag rendiamo possibile la modifica dei campi Volume, Peso netto, Peso lordo e Colli, che altrimenti riportano i dati da anagrafica articolo senza possibilità di modifica.     
- **Trasporto**: è necessario selezionare la figura che si occuperà del trasporto, mettendo il flag in Mittente, Destinatario o Vettore; in base alla selezione, la sezione sottostante cambierà; se il trasporto è a carico del Mittente sarà possibile inserire Targa automezzo, Rimorchio, Data e Ora di Inizio trasporto; se è a carico del Destinatario sarà possibile inserire Targa automezzo, Rimorchio, Data e Ora di Inizio trasporto; se è a carico del Vettore invece i campi disponibili saranno Anagrafica contabile del Vettore, Targa, Rimorchio, Data e Ora trasporto, eventuale Committente, Caricatore, Proprietario, Luogo carico. 

## **6. Documenti collegati**

In questa tab è possibile consultare i documenti allegati.
Per allegare i documenti è possibile procedere in due modi:
- utilizzando il pulsante della barra degli strumenti **Documenti** si può scegliere se allegare un documento già codificato in Fluentis o se creare un nuovo Documento da allegare.       
- utilizzando direttamente nella griglia il tasto destro e selezionando *Allega file* si va in creazione di un nuovo Documento da allegare.     