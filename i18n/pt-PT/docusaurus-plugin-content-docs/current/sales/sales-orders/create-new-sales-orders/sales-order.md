---
title: Nuovo ordine cliente
sidebar_position: 1
---

La form **Crea ordine cliente** si apre tramite il percorso **Vendite > Ordini clienti > Nuovo ordine** oppure tramite il pulsante ![](/img/neutral/common/new.png) che si trova nella form [Ricerca ordini clienti](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

## *Come creare un ordine cliente*

<details>
 
<summary>Clicca per i passaggi fondamentali</summary>
 
1. **Inserisci i dati obbligatori**: *Tipo Ordine* e *Cliente*. *Anno*, *Numero* e *Data Inserimento* saranno proposti in automatico.  
 
2. **Inserisci o modifica i dati facoltativi** della testata: come date di consegna, eventuali *sconti*, la *destinazione*, ecc.  
 
3. **Inserisci gli Articoli**: mediante doppio click nel campo *Codice articolo* si apre l’help articoli che permette di cercare e selezionare un articolo esistente. Tutti gli altri dati della riga, come *unità di misura*, *quantità*, *prezzo*, saranno proposti in automatico, ma possono essere modificati.
In alternativa è possibile selezionare come *Tipo riga* un *Articolo non codificato* e inserire manualmente i dati successivi.
 
4. **Inserisci eventuali sconti o altre informazioni aggiuntive** nei tab *Sconti/listini* e *Dati articolo*
 
5. **Controlla la sezione dei Riepiloghi** ed inserisci eventuali spese o sconti finali.  
 
6. Una volta controllato e confermato l’ordine, **inserisci una *Data conferma* e attiva il flag *Stampato* in testata** in modo da rendere l’ordine disponibile per le procedure di evasione.
 
</details>

## **1. Dati obbligatori**

Per continuare la creazione del ordine cliente, l'utente deve inserire i campi **obbligatori**:

- **Tipo ordine**: predefinito in  Configurazione > Tabelle > Vendite > [Tipi ordini](/docs/configurations/tables/sales/sales-order-types); rimandiamo alla documentazione relativa alla tabella per lo studio delle varie configurazioni possibili, ma per poter inserire un ordine è necessario che il tipo Ordine abbiamo definito la tipologia di numerazione, dato obbligatorio. In base alla configurazione presente nel tipo Ordine si possono aprire scenari diversi per l’inserimento dell’ordine cliente, ad esempio avere la creazione automatica di un progetto, la gestione a prezzi ivati, la gestione delle matrici, ecc.   
- **Numero**: ad ogni documento viene assegnato un numero secondo la numerazione specificata dall'utente nella tabella [Numerazione ordini clienti](/docs/configurations/tables/fluentis-numerations) e al tipo di documento che contiene la numerazione. La numerazione associata alla tipologia di ordine prevede generalmente una progressione automatica basata su data e numero, con una funzione di recupero che copre eventuali buchi nella sequenza (ad esempio, causati dalla cancellazione di documenti). Questo comportamento è regolato da due flag specifici nella tabella della numerazione. Se l'utente desidera inserire manualmente il numero, può disabilitare il flag di progressione data-numero (che garantisce l'incremento della numerazione nelle date future) e il flag di recupero numeri. Inoltre, dovrà abilitare il flag della numerazione esterna, segnalando così al sistema che la numerazione sarà gestita manualmente. 
- **Cliente**: usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure tastando [direttamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).  Inserendo il cliente, vengono automaticamente popolati, se presenti in anagrafia, i seguenti campi, che spiegheremo nelle sezioni successive: divisa, nazione, lingua, zona, spedizione, listino ed eventuali sconti, pagamenti, sconti, spese, agenti, destinazione, vettori, extra data.               
- **Data ordine**: indica la data di creazione dell’ordine. Questa data è fondamentale per il calcolo delle scadenze e delle eventuali condizioni di pagamento. Viene proposta la data odierna, modificabile; nel caso in cui la numerazione preveda una progressione di data e numero, e io inserisca una data nel passato, Fluentis controllerà la disponibilità di numeri in quella data per garantire la progressione, e se non presente segnalerà l’utente che non ci sono numeri disponibili in quella data.      
- **Tipo ritenuta**: questo campo è visibile solo se il cliente gestisce la ritenuta d’acconto, e quindi se in anagrafica presenta l’omonimo flag e il tipo di ritenuta, nel tab [informazioni fiscali](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information). La ritenuta d'acconto è una trattenuta fiscale applicata su pagamenti per prestazioni lavorative o professionali, anticipata al fisco dal committente e successivamente dedotta dall'imposta sul reddito del beneficiario. Per una gestione corretta di questa funzionalità, nella tabella tipi ritenuta deve essere codificato correttamente il codice per la fatturazione elettronica. il documento reperirà in automatico l'assoggettamento alla ritenuta per le righe sulle quali è possibile fare il calcolo, e in automatico calcolerà l'importo della ritenuta. 

La form contiene una serie di tab.

## **2. Testata**

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con l' [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Ricorda
Se il documento viene *creato automaticamente*, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

### 2.1 Dati cliente

Inserendo il **Cliente**, vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  
- **Divisa**: sezione contenente i dati [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nazione**: sezione contenente i dati [Nazione](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Spedizione**: sezione contenente i dati [Spedizione](/docs/guide/common/glossary/glossary-intro#shipment), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/guide/common/glossary/glossary-intro#sales-price-list) e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date)
- altri campi proposti con la scelta del cliente, ma modificabili: [Destinazione](/docs/guide/common/glossary/glossary-intro#destination), [Destinatario](/docs/guide/common/glossary/glossary-intro#recipient).

### 2.2 Dati facoltativi testata

- **Data consegna**: in questo campo è possibile inserire la data prevista di consegna della merce.
- **Data merce pronta**: in questo campo è possibile inserire la data in cui la merce sarà pronta; questa data deve essere minore o uguale alla precedente.      
- **Confermato**: questo flag indica che l'ordine è confermato e può essere quindi evaso; accanto è presente la **Data conferma**; questa condizione è obbligatoria se si vuole far procedere l’ordine sia per l’eventuale evasione nei documenti successivi (quali picking, ddt e fatture), sia per l’eventuale gestione della pianificazione di produzione.        
- **Stampato**: si attiva quando viene lanciata la stampa dell'ordine ed identifica che il documento è stato stampato; questo flag è importante anche per permettere l'evasione dell'ordine in altri documenti.      
- **Archiviato**: è necessario apporre questo flag se il documento deve essere archiviato.   
- **Annullato**: il flag attivo permette di annullare l'ordine; lo stato di testata dell'ordine cambierà in forzatamente evaso, in quanto l'ordine non dovrà più essere trasferibile in altri documenti.    
- **Codice Unico di Progetto/Codice Identificatico di Gara**: se nelle [informazioni fiscali](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) dell'anagrafica cliente esso è abilitato alla gestione di CIG e CUP, sarà possibile compilare questi dati nel documento.    
- **Annotazioni cliente**: questo campo viene ripreso dall'anagrafica cliente, ma può essere inserito anche manualmente.
- **Nostro riferimento/vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento cliente per il documento; nel caso in cui l'ordine venga generato tramite una procedura di creazione automatica, questi campi verranno popolati con le indicazioni presenti nell'documento d'origine. Questo trasferimento è valido solo nel caso di ordine cliente creato tramite il prelievo dei dati da un solo documento.     
- **Note iniziali**: si possono selezionare le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*; per questo l'utente deve effettuare doppio click sul campo per aprire l'Help e selezionare i dati; altrimenti può inserirle manualmente.       
- **Operatore**: permette di inserire l'utente che crea il documento. I dipendenti sono stati inseriti in precedenza nella tabella *Home > Dipendenti*; il dato diventa obbligatorio se l'opzione è impostata nei [Parametri](/docs/configurations/parameters/sales/sales-orders-parameters) del documento stesso.     
- **Stato evasione**: quando l'ordine è evaso tramite i documenti DDT o fatture, il suo stato evasione cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*; l'utente può forzare l'evasione di un ordine non totalmente evaso e quando questo succede, viene salvata anche la data evasione.      

:::note
Se viene attivato lo stato *Evaso forzato*, viene mostrato il messaggio: “L'evasione forzata della riga comporta l'automatica eliminazione di eventuali ordini pianificati collegati a commesse in stato schedulata e l’evasione delle commesse in stato schedulata e non esaminata. Per quanto riguarda documenti generati a fronte di commesse in stato lanciato o esecutivo le commesse e documenti non verranno modificati.”
:::

- **Decorrenza** è la data di decorrenza per il calcolo delle scadenze di pagamento.

#### Pulsanti specifiche  
> **Evasione da progetto**: richiama la procedura per creare un'ordine da un progetto.        
> **Sostituisci data prev. consegna nelle righe**: dopo aver specificato la data richiesta consegna e/o la data prevista consegna in testata ordine, è possibile sostituire in massa tali date nelle righe articolo già inserite.           
> **Sostituisci agente nelle righe**: questo pulsante fa aprire un pop nel quale inserire un'anagrafica agente, che verrà spalmata in tutte le righe articolo, aggiungendosi eventualmente ad Agenti già presenti.         
> **Sostituisci CIG/CUP nelle righe**: dopo aver specificato CIG e/o CUP in testata ordine, è possibile sostituire in massa tali dati nelle righe articolo già inserite.           
> **Help destinatari/destinazioni**: questo bottone apre l'Help per poter scegliere il destinatario/destinazione per il documento, tra quelli disponibili per il cliente e quindi codificati nella sua anagrafica. 

Nella testata sono poi presenti alcune tab che analizziamo di seguito.    

### 2.3 Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica cliente > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale.

Il pulsante specifico di questa tab è il **Cancella pagamenti**, utilizzato per cancellare le righe di pagamento selezionate.

### 2.4 Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica cliente > tab Sconti* e non quelli attribuiti alle condizioni di pagamento o a certi articoli. Possono essere modificate/cancellate dall'utente.
  
Gli sconti proposti in testata del documento vengono riportati in ogni nuova riga articolo inserita nel documento.

Se dopo aver inserito le righe articolo viene inserito un nuovo sconto in testata questo non viene replicato nelle righe articolo già inserite.

Il pulsante specifico di questa tab è il **Cancella sconti**, utilizzato per cancellare le righe di sconto selezionate.


### 2.5 Agenti

Indica il codice agente e la sua provvigione per ogni riga articolo. Vengono proposti il codice e la percentuale definiti nell'*Anagrafica cliente > tab Agenti*.

Se la provvigione non è collegata al cliente nella sua anagrafica, comunque deve essere inserito l'agente ma con provvigione NULL perché se fosse con provvigione 0, significherebbe che l'agente è collegato all'agente ma non percepisce provvigione.

Nel caso di generazione del DDT da ordine questo dato verrà ovviamente riportato uguale a quello dell'ordine cliente.

La stessa sezione verrà riproposta per ogni riga articolo nel relativo tab Agenti.

Il Pulsante specifico di questa maschera è il **Cancella agenti**, che permette di cancellare gli agenti selezionati.

### 2.6 Destinazione

Qui viene proposta l'informazione inserita nell'*Anagrafica cliente > tab Consegne*, solo se esistono dati di default. Il combo box propone tutti i destinatari, le destinazioni e i vettori inseriti nell'anagrafica cliente.

Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti. 

Nel caso in cui in anagrafica non sia stato inserito questo dato di default, allora vengono proposti come destinatario e destinazione l’indirizzo inserito nei dati anagrafici. 

### 2.7 Vettori

Nella sezione Vettori vengono proposti i dati inseriti nel tab [Consegna](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) dell’anagrafica cliente. In particolare, viene proposto il soggetto a carico del quale sarà il trasporto, tra mittente, destinatario e vettore. In base alla selezione, la sezione sottostante cambierà; se il trasporto è a carico del Mittente sarà possibile inserire Targa automezzo, Data e Ora di Inizio trasporto, e verrà proposto l’indirizzo della società; se è a carico del Destinatario sarà possibile inserire Targa automezzo, Data e Ora di Inizio trasporto, con la proposta della destinazione; se è a carico del Vettore invece i campi disponibili saranno Anagrafica contabile del Vettore, Targa, Data e Ora trasporto.

### 2.8 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

### 2.9 Cointestatari

Questo tab è attivo solo se in anagrafica cliente, tab [informazioni fiscali](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), sia stato inserito il flag per la gestione cointestatari. La gestione cointestatari permette a più persone di essere titolari congiunti dell’ordine. I cointestatari devono essere inseriti negli indirizzi alternativi dell’anagrafica, con un indirizzo che sia di [tipo](/docs/configurations/tables/general-settings/address-types), appunto, cointestatari. In questo modo, verranno proposti in questo tab, dove è necessario inserire a mano le percentuali di ripartizione della spesa.

## **3. Articoli raggruppati**

Questo tab è attivo e visibile solo per i [Tipi ordine](/docs/configurations/tables/sales/sales-order-types) che abbiano impostati il flag di *Gestione matrici Extra Data* e la relativa *Configurazione*. Questo tab permette infatti di generare le varianti articolo per le varie combinazioni di attributi valide, che saranno trasferite nel successivo tab [Articoli](/docs/sales/sales-orders/create-new-sales-orders/sales-order).       
Per tutti i campi non spiegati in questa pagina potete fare riferimento alla documentazione del tab [Articoli](/docs/sales/sales-orders/create-new-sales-orders/sales-order).       
Inserendo un [articolo gestito a Matrice](/docs/erp-home/registers/items/create-new-items/item-registry/matrix) nella griglia articoli, infatti, nel tab Matrici verrà visualizzata la matrice associata all'anagrafica articolo. Nelle celle della matrice sarà possibile imputare le quantità ordinate per ogni combinazione; sarà possibile compilare solo le celle che abbiano una combinazione valida in anagrafica.       
Una volta inserite quantità per ogni combinazione, è necessario cliccare il pulsante della barra degli strumenti *Conferma valori matrice* per generare tante varianti quante sono le combinazioni possibili. Ogni variante popolerà una riga del successivo tab Articoli, con la relativa quantità.

## **3. Articoli**

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Per inserire un **Nuovo articolo** nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo** presente nella ribbon bar.

Di seguito analizzati i campi *obbligatori* presenti nella griglia principale:
- **Riga**: questo campo contiene il numro riga e si compilerà automaticamente e progressivamente all'inserimento dei dati nella riga.

- **Tipo riga**: offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
>- *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino.
>- *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino.
>- *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino.
>- *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
>- *Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

:::note[NOTA]
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga - Articolo codificato vengono inseriti automaticamente.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note[NOTA]
In assenza del listino, il dato proposto è il **prezzo di vendita** ripreso dall'*Anagrafica articolo > tab [Costi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* oppure verrà recuperato in base alle impostazioni dei parametri del documento. In assenza anche di questo dato, verrà riportato il prezzo 0.
:::

- **Imponibile**: questo campo contiene il Prezzo unitario moltiplicato per la quantità, al netto degli sconti.

- **Sconti articolo**: contiene gli sconti validi per l'articolo, provenienti dalla testata, dal listino o dall'inserimento manuale.

- **Sconti finali articolo**: contiene gli sconti finali articolo imputati nei riepiloghi del documenti, che hanno la caratteristica di venire spalmati in tutti gli articoli.   

import ItemVat from './../../../import/fields/item-vat.md'

<ItemVat />

#### Campi non obbligatori

- **Barcode/Articolo cliente e Descrizione articolo cliente**: questi dati verranno ripresi dalle informazioni presenti nell'*Anagrafica articoli*; per gestire i Barcode è necessario attivarne la gestione nei [Parametri ordine cliente](/docs/configurations/parameters/sales/sales-orders-parameters). Questa colonna permette la proposta dell’articolo ricercandolo per il suo barcode. Essendo il barcode univoco, una volta digitato il barcode inserito in anagrafica articolo, verrà proposto l’articolo.   

- **Fatturato vendite**: viene proposto il dato inserito nell'*Anagrafica articoli > tab Generalità*; se non viene recuperato va inserito scegliendo una voce tra quelle proposte dalla relativa combo altrimenti la mancanza di questo dato potrebbe causare degli errori nella contabilizzazione della fattura che verrà generata dall'ordine, se in *Anagrafica cliente > Dati contabili > tab Amministrativa* non è stato impostato un valore nel campo *Ricavo di contropartita predefinito*.

- **Evaso forzato**: se attivo, questo flag indica che la riga articolo è stata evasa forzatamente: perchè il cliente non vuole più quell'articolo, oppure la quantità prodotta e spedita è inferiore alla quantità ordinata ma non verrà prodotto il saldo e quindi si andrà ad evadere forzatamente la quantità. 

:::note[NOTA]
Se viene gestita la produzione, quando il flag viene attivato, viene mostrato un messaggio che avvisa l'utente: “L'evasione forzata della riga comporta l'automatica eliminazione di eventuali ordini pianificati collegati a commesse in stato schedulata e l’evasione delle commesse in stato schedulata e non esaminata". Per quanto riguarda invece i documenti generati a fronte di commesse in stato lanciato o esecutivo, le commesse e documenti non verranno modificati.     
:::

- **Data Merce pronta e Data consegna**: queste date indicano la data in cui il materiale sarà pronto (quindi quando la produzione sarà terminata) e la data in cui si prevede di consegnare il materiale; la Data Merce Pronta deve essere minore o uguale alla Data consegna.

Nella sezione Articoli sono presenti i seguenti pulsanti, nella barra degli strumenti: 

> **Distinta Base**: permette di aprire la distinta base dell'articolo selezionato per poterne visualizzare i dettagli; (per maggiori informazioni su questo argomento si rimanda alll'articolo Albero della disinta base e gestione strutture).  
> **Esplodi primo livello distinta**: permette di aggiungere nell'ordine cliente i materiali (materie prime e semilavorati) presenti nella distinta base dell'articolo; verranno quindi riportati nell'ordine i componenti di primo livello del prodotto finito. Questa opzione per esempio è molto utilizzata per i prodotti a Kit (quindi composti da più parti).  
> **Aggiornamento listini**: permette di aggiornare il prezzo dell'articolo in un listino esistente (salvare il documento per abilitare questi bottoni), oppure di creare un nuovo listino con l'articolo e il relativo prezzo selezionato.       
> **Suddividi quantità in più consegne**: consente di suddividere la quantità di una riga articolo in più righe in base alle date di consegna. Selezionando la riga e cliccando sul pulsante si aprirà la form **Consegne diverse** all'interno della quale verrà riportata la *Data merce pronta*, la *Data consegna* e la *Quantità* della riga. Nella riga successiva si dovrà andare ad indicare la *Data merce pronta* (che dovrebbe essere la stessa), la *Data di consegna* che sarà diversa e la *Quantità* che si andrà a spedire in quella data e poi bisognerà andare a modificare la data nella prima riga aggiornandola alla quantità rimanente in modo che la somma delle quantità delle due righe dia come risultato la quantità iniziale della riga prima dello sdoppiamento. Confermare l'operazione con il pulsante *OK*.  
> **Confezionamento**: permette di creare una UDC a partire dalla riga selezionata. La riga deve essere un articolo codificato e salvato nel documento. L'utente deve avere i diritti all'interno dei [Parametri di carico/scarico](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) per il caricamento del pallet. Inoltre l'articolo deve essere gestito a UDC ed in base alle impostazione del Tipo UDC inserite in anagrafica articolo, tab [Confezionamento](/docs/erp-home/registers/items/create-new-items/item-registry/packaging), verrà creato l'UDC rispettando i criteri.      

Analizziamo a questo punto le tab presenti sotto la griglia articoli. 

### 3.1 Sconti/Listini

Questa tab ha come primo campo l'eventuale **Listino** valido per il cliente e collegato all'articolo, altrimenti è un campo che si può compilare manualmente per prendere il prezzo dell'articolo da uno specifico listino. Accanto ai dati del listino assegnato è presente il campo **Tipo scaglione**: esso riporta lo scaglione di sconto da utilizzare, che viene ripreso dall'anagrafica cliente oppure dal listino stesso.
Il flag **Prezzo manuale** permette di modificare il prezzo e gli sconti manualmente, e di mantenerli nei documenti che vengono creati dal documento dove la modifica è stata apportata.

Nella griglia invece vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione. Gli sconti possono essere ripresi: dall'anagrafica cliente, dalla soluzione di pagamento assegnata al documento, dal listino dall'associazione listino-cliente. Tutti i dati proposti sono modificabili.

Da questa griglia è possibile utilizzare il bottone **Cancell sconti** della barra degli strumenti. 

### 3.2 Dati articolo

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

import ItemVariant from './../../../import/fields/item-variant.md'

<ItemVariant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Magazzino/descrizione/Causale**: in questi campi andrà indicato il magazzino di scarico del materiale con la relativa causale necessario per gli scarichi della merce al momento dell'emissione del DDT o della fattura; questi dati vengono impostati nella tabella dei [Tipi ordine](/docs/configurations/tables/sales/sales-order-types).

- **Progetto**: è il progetto associato al documento; questo può essere assegnata, nel caso dell'ordine cliente, con l'ausilio della procedura *Evasione da commessa* oppure può essere assegnata con l'ausilio del help di campo.

- **Rivalsa IVA**: se settato l'iva dell'omaggio viene considerata per il totale documento.

- **Offerta**: riporta il riferimento dell'offerta cliente se l'ordine proviene da [Offerta](/docs/sales/offers/search-offers).

- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo;

- **Note**: offre la possibilità di inserire note per ogni articolo che si vuole vengano riportate in tutti i documenti.  

### 3.3 Agenti

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e i numeri seriali che devono essere scaricati dal magazzino e che sono collegati all'articolo nell'*Anagrafica articolo > tab [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* oppure possono essere inserite manualmente.

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

### 3.8 Matrici

Questo tab viene visualizzato esclusivamente per i [Tipi ordine](/docs/configurations/tables/sales/sales-order-types) che hanno il flag di gestione delle matrici Extra Data. 

### 3.9 Sezione valori

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

Il campo **Stato** in cima a questa sezione riporta la situazione dell'articolo nell'eventuale ciclo di produzione e si aggiorna in automatico in base allo stato della commessa collegata.
L'articolo può avere i seguenti stati:
- *Inserito* quando viene inserito l'articolo;
- *Confermato* quando l'ordine viene confermato, con i relativi flag e data in testata; 
- *In produzione* quando viene generata la commessa, attraverso la procedura di [Generazione commesse di produzione](/docs/planning/ms-master-scheduling/general-schedule) o automaticamente se il tipo ordine lo prevede; 
- *Prodotto* se la commessa collegata è in stato evaso;
- *Annullato* se l'articolo viene evaso forzatamente. 

## **4. Riepiloghi**

Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.

### 4.1 Sconti finali

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Riepilogo provvigioni agenti

In questa griglia vengono invece riepilogate le provvigioni totali maturate dall'agente per questo ordine, nel caso in cui vi sia l'agente collegato. Si troverà indicato l'agente e il valore della provvigione maturata.

### 4.3 Spese/Sconti/maggiorazioni finali

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.4 Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

### 4.5  Riepilogo scadenze    

In questa griglia vengono riportate le scadenze calcolate in base alle soluzioni delle tipologie di pagamento inserite. 

### 4.6 Altri campi 

**Note finali**: è un campo descrittivo che può essere compilato dall'utente anche con l'ausilio dell'*Help note codificate*. Possono essere inserite ulteriori note per il cliente riguardanti per esempio la consegna che verranno poi riportate nella stampa della Conferma d'Ordine nella parte finale della stampa.

### 4.6 Totali documento

Nella sezione destra di questa tab si possono consultare i riepiloghi del documento:       

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Documenti collegati**

In questa tab è possibile consultare i documenti allegati.
Per allegare i documenti è possibile procedere in due modi:
- utilizzando il pulsante della barra degli strumenti **Documenti** si può scegliere se allegare un documento già codificato in Fluentis o se creare un nuovo Documento da allegare.       
- utilizzando direttamente nella griglia il tasto destro e selezionando *Allega file* si va in creazione di un nuovo Documento da allegare.     