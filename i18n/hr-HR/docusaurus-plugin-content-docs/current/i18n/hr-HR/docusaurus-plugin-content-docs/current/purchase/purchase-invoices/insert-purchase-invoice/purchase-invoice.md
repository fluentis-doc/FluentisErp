---
title: Crea Fattura - sezione superiore
sidebar_position: 1
---

La form si apre tramite il percorso **Acquisti > Fatture di acquisto > Nuova fattura** oppure tramite il pulsante **Nuova** che si trova nella form [Ricerca fatture di acquisto](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices).

## *Come creare una fattura di vendita*


<details>
 
<summary>Clicca per i passaggi fondamentali - DA CONTROLLARE!!!!</summary>
 
1. **Inserisci i dati obbligatori**: *Tipo Ordine* e *Fornitore*. *Anno*, *Numero* e *Data Inserimento* saranno proposti in automatico.  
 
2. **Inserisci o modifica i dati facoltativi** della testata: come date di consegna, eventuali *sconti*, la *destinazione*, ecc.  
 
3. **Inserisci gli Articoli**: mediante doppio click nel campo *Codice articolo* si apre l’help articoli che permette di cercare e selezionare un articolo esistente. Tutti gli altri dati della riga, come *unità di misura*, *quantità*, *prezzo*, saranno proposti in automatico, ma possono essere modificati.
In alternativa è possibile selezionare come *Tipo riga* un *Articolo non codificato* e inserire manualmente i dati successivi.
 
4. **Inserisci eventuali sconti o altre informazioni aggiuntive** nei tab *Sconti/listini* e *Dati articolo*
 
5. **Controlla la sezione dei Riepiloghi** ed inserisci eventuali spese o sconti finali.  
 
6. Una volta controllato e confermato l’ordine, **inserisci una *Data conferma* e attiva il flag *Stampato* in testata** in modo da rendere l’ordine disponibile per le procedure di evasione.
 
</details>

## 1. Dati obbligatori

- **Tipo fattura acquisto** predefinito in *Tabelle > Acquisti > [Tipo fattura di acquisto](/docs/configurations/tables/purchase/purchase-invoices-type)*;   
Questo campo determina il range di numerazione del documento che si sta inserendo e propone automaticamente il *Numero interno* della fattura in base alla data inserimento e all'ultimo numero inserito;   
- **Fornitore** può essere inserito usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure manualmente;
- **Data**: viene proposta in automatico la data corrente ma può essere modificata manualmente rispettando la regola di progressione tra data e numero;
- **Numero interno**: viene proposto automaticamente in base al tipo fattura, ma può essere modificato manualmente sempre rispettando la regola di progressione tra data e numero;
- **Numero documento**: in questo campo è possibile inserire un numero documento che può essere diverso rispetto a quello proposto nel campo precedente.

La form contiene una serie di tab.

## 2. Testata

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati manualmente oppure con il [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base alle procedure che sceglie, l'applicazione compila i campi *automaticamente*.

:::note Ricorda
Se il documento viene *creato automaticamente*, ad esempio mediante **Evasione da ordine fornitore** o **Evasione da DDT** questi dati vengono ripresi dal *documento d'origine* da cui è stata generata la fattura.
:::

### 2.1 Dati fornitore

Inserendo il **Fornitore** vengono *proposti* in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle *sezioni*:  

- **Divisa**: sezione contenente i dati [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Nazione**: sezione contenente i dati [*Nazione*](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).   
- **Spedizione**: sezione contenente i dati [*Spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

### 2.2 Dati facoltativi testata

- **Stato fatture**: quando la fattura viene creata non ha nessun flag attivo. La sezione comprende i campi:

    > **Controllata**: il flag attivo permette la contabilizzazione della fattura;  
    > **Contabilizzata**: il flag è automaticamente attivato quando la fattura supporta la procedura di [Contabilizzazione](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting);  
    > **Caricata**: il flag diventa attivo quando la fattura supporta la procedura di [Carico nel magazzino](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice). Nel caso di fattura creata da documento di trasporto già caricato, è presente il parametro generale VE-PurchaseInvoices_VerifyLoadStatusDDT che blocca il flag Caricata anche nella fattura.
    > **Storicizzata**: attivando questo flag il documento non sarà più visibile per la procedure successive.   
    > **Annullata**: il flag attivo permette di annullare la fattura.

:::note
I flag possono essere tolti mediante le procedure di ripristino operazione.
:::

- **Data di arrivo**: in questo campo si può inserire la data di arrivo della merce.

- **Data carico**: questo campo viene compilato automaticamente con la data corrente al momento del carico oppure con la data usata per la registrazione di magazzino, a seconda della procedura utilizzata.   

- **Annotazioni fornitore**: questo campo viene ripreso dall'anagrafica fornitore, mentre nel caso di creazione da un solo ordine/DDT verranno ripresi gli stessi dati contenuti nell'omonimo campo del documento di partenza. Può essere inserito anche manualmente. 

- **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento.    
Se presente, viene ripreso dall'anagrafica fornitore altrimenti può essere inserito manualmente.
Nel caso in cui l'ordine viene completato con la procedura [Evasione da ordine](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) o mediante [Valorizzazione DDT di acquisto](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization), nei campi *Annotazioni fornitore* e *Nostro/Vostro riferimento* viene proposta l'informazione presente nei campi omonimi del documento di partenza (questo trasferimento è valido solo nel caso di fattura creata tramite il prelievo dei dati da un solo documento di partenza).

- **Note iniziali**: nel caso di evasione verranno riproposte le informazioni presenti nell'ordine. In alternativa, si possono selezionare le note che sono state inserite in precedenza nella tabella omonima che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*; per questo l'utente deve effettuare doppio click sul campo per aprire l'Help e selezionare i dati; altrimenti può inserirle manualmente.

- **Progetto**: usando l'help di campo si può collegare il documento a un progetto. Questa associazione funziona solo al livello della testata dell'articolo. Il progetto viene inserito automaticamente se il DDT è stato creato mediante evasione di un ordine che lo contiene.

- **CUP/CIG**: se nelle informazioni fiscali dell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) esso è abilitato alla gestione di CIG e CUP, sarà possibile compilare questi dati nel documento. I campi sono posizionati sottola voce *Annotazioni fornitore*.

- **Rif. FA**: posizionato sotto la voce *Nazione*. Viene usato dopo la creazione dello [storno](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) di una fattura per collegare manualmente le due fatture inserendo nella fattura di storno *numero*, *tipo* e *data* della fattura di origine.

- **Reg. cont.**: osizionato sotto la voce *Nazione*. Riporta numero, data e protocollo della registrazione contabile derivata dalla contabilizzazione della fattura. 

#### Pulsanti specifici (dettagliati nella sezione *Procedure testata*)

> **Evasione da ordini**: richiama la procedura per creare una fattura da un ordine fornitore. Si attiva con l'inserimento del fornitore e del tipo fattura. L'ordine da evadere dovrà aver impostato il flag *Stampato* e la *Data conferma ordine* valorizzata.    
> **Evasione DDT**: richiama la procedura per creare una fattura da un DDT. Si attiva con l'inserimento del fornitore e del tipo fattura. Il DDT da evadere dovrà aver impostato il flag *Controllata*.    
> **Carico automatico nel magazzino**: utilizzato per caricare automaticamente il magazzino con gli articoli selezionati. Questo campo sarà editabile solo una volta attivato il campo *Controllata* e inserito il *Numero documento*.

### 2.3 Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale fattura.

#### Pulsante specifico

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### 2.4 Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti* e possono essere modificate/cancellate dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Spedizione

Qui viene proposta l'informazione inserita nell'anagrafica fornitore, tab [Consegna](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), solo se esistono dati di default.

Il combo box propone tutti i *Destinatari* e le *Destinazioni* inserite nell'anagrafica fornitore.

Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti. 


### 2.6 Vettore

In questo campo è possibile inserire il Vettore che effettuerà la spedizione. Se questo è stato inserito nell'anagrafica fornitore, tab [Consegna](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) sarà possibile selezionarlo dal menù a tendina della seconda colonna, in alternativa sarà sufficiente fare doppio click sulla terza colonna (*Vettore*) per selezionare uno dei contatti della società.

Opzionalmente si possono aggiungere i dettagli della *Targa* del vettore e la *Data/Ora trasporto*.

### 2.7 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

### 2.8 Procedure testata

#### Carico automatico in magazzino

Questa procedura viene lanciata con l'aiuto del pulsante **Carico automatico nel magazzino** che si trova nella testata del documento e rispetta una serie di parametri impostati precedentemente nella fattura. Per dettagli consultare la procedura identica: [Carico fatture di acquisto in magazzino](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

Il risultato può essere visualizzato in Logistica > [Registrazioni](/docs/logistics/warehouse/stock-records/records) oppure nella procedura [Carico fatture di acquisto in magazzino](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse), tab *Riepilogativo*.


:::note Nota
Se nei *Parametri fatture di acquisto* è attivo il flag **Carico/Scarico automatico**, al momento dell'attivazione del flag *Controllata* nella testata della fattura sarà automaticamente proposto di caricare il documento a magazzino. 
:::

#### Evasione DDT

La procedura permette la creazione di una fattura di acquisto mediante evasione di uno o più DDT di acquisto.

Nella testata del documento, premendo il pulsante **Evasione DDT** si aprirà la form in cui è possibile filtrare i DDT intestati al fornitore del documento. È quindi possibile inserire gli articoli all'interno della fattura, evadendo totalmente o parzialmente i DDT.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

- i/il fornitore dei DDT deve essere lo stesso della fattura;
- il DDT che si vuole evadere deve avere attivo il flag *Controllato* e non deve essere già *Valorizzato*.

#### Procedimento

Si dovrà andare ad impostare nella testata della nuova fattura, il [Tipo fattura](/docs/configurations/tables/purchase/purchase-invoices-type) che si vuole creare e il *Fornitore*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione DDT* per aprire la form di evasione.

I filtri per fornitore e divisa verranno riportati in automatico in base al fornitore inserito nella fattura.

Nell'area di filtro è possibile scegliere se visualizzare i dati in una *Griglia*, una *Struttura gerarchica* oppure entrambe le soluzioni.

> La **Struttura gerarchica** permette di avere una suddivisione più chiara dei DDT disponibili per l'evasione e degli articoli contenuti in ciascuno di essi. Permette inoltre la selezione massiva tutti gli articoli contenuti all'interno di un DDT semplicemente attivando il flag sulla riga del DDT.   
> La **Griglia** permette una maggiore personalizzazione della form mediante aggiunta di campi da *Object navigator*. In questo caso la selezione massiva va effettuata mediante l'utilizzo dei tasti della tastiera e cliccando sul pulsante *Seleziona/Deseleziona* nella ribbon bar.

Una volta impostati tutti i filtri desiderati, cliccando sul pulsante di *Ricerca* verranno visualizzati nella parte sottostante tutti i DDT controllati e non ancora valorizzati oppure valorizzati parzialmente.

Nella griglia di risultati, l'utente ha poi la possibilità di:

 - Selezionare tutti o alcuni degli articoli proposti: per farlo basterà selezionare il flag presente all'inizio della riga articolo. La *Quantità da evadere* sarà automaticamente impostata uguale alla *Quantità residua*.
 - Selezionare alcuni articoli per una *quantità parziale*. In questo caso si dovrà andare a modificare la *Quantità da evadere*.

Per completare la procedura bisognerà poi cliccare sul pulsante *Trasferimento*, che andrà a riprendere tutti i dati presenti nei DDT seezionati e li riporterà nella fattura.

#### Pulsanti specifici

> **Ricerca**: permette di cercare i DDT disponibili per il trasferimento.  
> **Trasferimento**: permette di trasferire gli articoli/ordini selezionati.  
> **Seleziona tutto**: permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla lista.  
> **Seleziona**: permette di attivare i flag per tutte le righe selezionate con il mouse.   
> **Deseleziona**: permette di disattivare i flag per tutte le righe selezionate con il mouse.

#### Evasione da ordine

La procedura permette la creazione di una fattura di acquisto mediante evasione di uno o più ordini fornitore.

Nella testata del documento, premendo il pulsante **Evasione da ordini** si aprirà la form in cui è possibile filtrare gli ordini relativi al fornitore del documento. È quindi possibile inserire gli articoli all'interno della fattura, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

- i/il fornitore degli ordini deve essere lo stesso della fattura;
- l'ordine che si vuole evadere deve avere attivo il flag *Stampato* e deve essere già stato *Confermato*.

*Procedimento*:

Si dovrà andare ad impostare nella testata della nuova fattura, il [Tipo fattura](/docs/configurations/tables/purchase/purchase-invoices-type) che si vuole creare e il *Fornitore*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione da ordini* per aprire la form di evasione.

I filtri per fornitore e divisa verranno riportati in automatico in base al fornitore inserito nella fattura.

Nell'area di filtro è possibile scegliere se visualizzare i dati in una *Griglia*, una *Struttura gerarchica* oppure entrambe le soluzioni.

> La **Struttura gerarchica** permette di avere una suddivisione più chiara dei vari ordini e degli articoli contenuti in ciascuno di essi. Permette inoltre la selezione massiva tutti gli articoli contenuti all'interno di un ordine semplicemente attivando il flag sull'ordine.   
> La **Griglia** permette una maggiore personalizzazione della form mediante aggiunta di campi da *Object navigator*. In questo caso la selezione massiva va effettuata mediante l'utilizzo dei tasti della tastiera e cliccando sul pulsante *Attiva/Disattiva solo righe selezionate* nella ribbon bar.

Una volta impostati tutti i Filtri desiderati, cliccando sul pulsante di *Ricerca* verranno visualizzati nella parte sottostante tutti gli ordini stampati, confermati e non evasi oppure evasi parzialmente.

:::note Nota
La procedura riprende tutti i dati presenti nell'ordine e come conseguenza saranno applicate le condizioni di acquisto presenti nell'ordine, anche se queste attualmente sono cambiate.   
Nel caso di evasione di più ordini aventi la stessa soluzione di pagamento e/o stessa destinazione, verranno riportate nella fattura le informazioni contenute nell'ordine; in alternativa saranno riprese quelle dell'anagrafica fornitore. 
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 - Selezionare tutti o alcuni degli articoli proposti: per farlo basterà selezionare il flag presente all'inizio della riga articolo. La *Quantità da evadere* sarà automaticamente impostata uguale alla *Quantità residua*.
 - Selezionare alcuni articoli per una *quantità parziale*. In questo caso si dovrà andare a modificare la *Quantità da evadere*.

Per completare la procedura bisognerà poi cliccare sul pulsante *Evasione*, che andrà a riprendere tutti i dati presenti nell'ordine e li riporterà nella fattura.

#### Pulsanti specifici 

> **Ricerca**: permette di cercare gli ordini fornitore.  
> **Evasione**: permette di trasferire gli articoli/ordini selezionati.  
> **Evasione forzata ordine**: permette l'evasione forzata dell'ordine o delle righe articolo selezionate.  
> **Seleziona tutto**: permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla lista.  
> **Attiva solo righe selezionate**: permette di attivare i flag per tutte le righe selezionate con il mouse.   
> **Disattiva solo righe selezionate**: permette di disattivare i flag per tutte le righe selezionate con il mouse.

:::important Ricorda
Nel caso di più evasioni parziali per una determinata riga articolo all'interno della stessa fattura è possibile scegliere se sommare le quantità in un'unica riga nella fattura oppure se mantenere righe distinte, rispettivamente disattivando o attivando il flag **Evasione quantità articolo non sommata** nella tabella dei [Tipi fatture di acquisto](/docs/configurations/tables/purchase/purchase-invoices-type).
:::

#### Sdi - Chiusura documenti

Con il bottone **Sdi - Chiusura documenti** viene aperto il modulo per collegare manualmente eventuali ordini e DDT di acquisto alle fatture generate dagli xml ricevuti. Questa procedura viene inoltre avviata automaticamente quando viene effettuato questo collegamento dalla maschera [Documenti acquisti in entrata](/docs/finance-area/sdi-documents/incoming-purchase-documents).          
Il modulo è suddiviso in due sezioni principali: una a sinistra, dedicata alla visualizzazione dei DDT e degli Ordini, e una a destra, che mostra gli articoli della fattura. 

La griglia di ordini e DDT contiene le seguenti colonne:        
- Numero Riga Fattura Collegata
- Tipo Documento
- Numero
- Data
- Numero Riga
- Classe Articolo
- Codici Articolo
- Descrizione Articolo
- Quantità
- Prezzi
- Sconto Totale
- Importo Netto
- Prezzo Unitario Netto        

Le righe già collegate agli articoli della fattura saranno evidenziate in verde per facilitarne l'identificazione.

La griglia delle fatture contiene le seguenti colonne:        
- Numero riga
- Classe Articolo
- Codici Articolo
- Descrizione Articolo
- Quantità
- Prezzi
- Sconto Totale
- Importo Netto
- Prezzo Unitario Netto      

Le righe già collegate agli articoli di DDT o Ordini saranno evidenziate per facilitare la verifica.

In queste griglie vengono visualizzate solo le righe dei DDT o degli Ordini che non sono state eseguite o forzate in precedenza. 
Per eseguire il collegamento, è necessario inserire il numero di riga della fattura nella colonna *Numero Riga Fattura Collegata* e cliccare nella barra degli strumenti **Associa**. 

:::note
Lo stesso numero di fattura non può essere collegato contemporaneamente a un DDT e a un Ordine. 
:::

Con il pulsante **Associa**, le righe con il "Numero Riga Fattura Collegata" verranno eseguite nei DDT o negli Ordini corrispondenti.        
Il pulsante **Rollback Associa** permette di annullare il collegamento, ripristinando lo stato di esecuzione corretto per i DDT o gli Ordini.

Durante la fase di collegamento, il sistema esegue alcuni controlli per garantire la congruenza dei dati:       
- Prezzi: Differenze tra i prezzi riportati negli ordini/DDT e quelli della fattura generata automaticamente.
- Sconti: Discrepanze tra i valori totali degli sconti.
- Prezzo Netto Unitario: Differenze tra il prezzo netto unitario indicato nella fattura e quello riportato nei DDT/Ordini.
- Importo Totale: Differenze tra l'importo totale della fattura e la somma degli importi totali delle righe eseguite nei DDT/Ordini.

Se uno o più di questi controlli falliscono, il collegamento non viene effettuato automaticamente e l'errore viene riportato nella griglia degli errori, con l'indicazione del numero di riga della fattura e la descrizione dell'errore.

## 3. Articoli
sidebar_position: 4
---

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

:::note Nota
Se la fattura è stata creata mediante evasione di un ordine fornitoreo di un DDT di acquisto i seguenti dati saranno ripresi dal documento di partenza
:::

### 3.1 Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino. <br />
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino. <br />
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
> - *Articolo omaggio*: l'articolo omaggio viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

- **Classe/Codice/Descrizione articolo**: si possono inserire  [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con l'ausilio dell'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) il quale proporrà tutti i dati relativi inseriti nell'*Anagrafica articolo*. 
Dopo l'inserimento dell'articolo, la sua *Descrizione* sarà ripresa automaticamente dall'anagrafica. Se l'articolo ha *Varianti*, sarà possibile selezionare la variante desiderata dal tab *Dati*.

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Prezzo**: il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab *Sconti/Listini*. Lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata (vedi [Anagrafica contatti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Attraverso il doppio click nel campo **Listini** (tab *Sconti/Listini*) l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito.    
In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo, se nei [Parametri fatture di acquisto](/docs/configurations/parameters/purchase/purchase-orders-parameters/) il flag *Costo a zero in assenza di listini* non è attivo.

- **Importo**: viene calcolato in automatico al netto degli sconti.

- **Totale sconti**: indica l'importo totale degli sconti presenti nel tab *Sconti/Listini* per ogni riga articolo.   

- **IVA**: è prioritario il dato inserito nel campo IVA dell'*Anagrafica contatto*. Se questo non è presente, viene proposto il valore presente nell'*Anagrafica articolo*, ma l'utente ha la possibilità di inserire un dato diverso.

### 3.2 Dati facoltativi articoli

- **Codice/Descrizione articolo fornitore**: in questa sezione si potrà aggiungere il codice e la descrizione che il fornitore utilizza per identificare l'articolo; questo dato viene proposto in automatico se nell'anagrafica dell'articolo, tab [Fornitori preferenziali](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors) è stato associato un articolo fornitore. 

- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalità](/docs/erp-home/registers/items/create-new-items/item-registry/generality) dell'anagrafica articoli. Se questo non è presente, non viene proposto nessun dato e al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'anagrafica contatto.

#### Pulsanti specifici

> **Ricalcolo Conai**: se la [Gestione Conai](/docs/purchase/purchase-flow/conai) è abilitata per il documento, è possibile ricalcolare i valori con questo bottone dopo eventuali modifiche.
>
> **Gestione imballi**: permette l'apertura della gestione degli imballi a rendere usati nel documento di acquisto.   
Il pulsante diventa attivo se il documento è salvato, ma non caricato. Con clic su questo pulsante si apre la form corrispondente dove inserire la quantità, selezionare la riga ed eseguire il trasferimento dell'imballo selezionato nelle righe articolo cliccando sul pulsante **Execute**. In questa form vengono riportati gli articoli che sono stati inseriti con natura Imballo e che sono presenti nella tabella degli [Imballi a rendere](/docs/configurations/tables/logistics/package-to-be-returned).      
>
> **Storno ricevimenti**: il pulsante è attivo solo per i [Tipi fatture di acquisto](/docs/configurations/tables/purchase/purchase-invoices-type) che hanno la *Natura* di tipo *Nota accredito*. Nella form vengono visualizzate tutte le fatture intestate a quel fornitore. Dopo aver selezionato le righe articolo e le relative quantità da stornare sarà sufficiente premere il pulsante *Storno ricevimenti* per inserirli nella fattura.    
>
> **Aggiornamento listini**: il pulsante **Aggiorna listino corrente** permette di aggiornare i prezzi nel listino corrente per ciascuna riga articolo selezionata.    
il pulsante **Crea nuovo listino con nuova validità** invece, aprirà un pop-up in cui inserire le date di validità del nuovo listino, il quale conterrà solo le righe selezionate e sarà intestato al fornitore inserito nella fattura.   


:::important Ricorda   
Quando si crea/aggiorna un listino mediante questa procedura vengono riportati nel listino solo gli sconti che sono stati inseriti manualmente nella fattura. 
:::

### 3.3 Sconti/Listini

- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la data inizio/fine validità e con le condizioni particolari (ad es. **Tipo scaglione** di sconto) assegnate all'articolo nel listino.

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.

- **Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.        

### 3.4 Dati articolo 

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

- **Articolo**: riporta classe, codice e descrizione dell'articolo selezionato nella griglia.   
- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.     
- **Note**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.   
- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino. I dati sono ripresi dai [Tipi fatture di acquisto](/docs/configurations/tables/purchase/purchase-invoices-type) oppure dall'ordine fornitore o dal DDT, se la fattura deriva da evasione di un ordine o da valorizzazione DDT. Possono essere modificati manualmente per ciascuna riga articolo.   
- **Ubicazione**: viene proposta in automatico se alla causale utilizzata è stata associata un'ubicazione nella tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates) oppure se l'articolo è stato inserito nella [Mappa ubicazioni per articolo](/docs/logistics/warehouse/location/item-location-map/). Può essere inserita o modificata manualmente.  
- **Unità di misura/Quantità alternativa**: se nell'[anagrafica dell'articolo](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um) è stata codificata un'unità di misura alternativa con il flag *Predefinito* e nei Parametri ordini fornitore è stato attivato il flag *Proposta automatica U.M. alternativa*, questi valori saranno proposti in automatico al momento dell'inserimento dell'articolo, altrimenti è possibile selezionare una tra le unità di misura alternative codificate per l'articolo.   
- **Prezzo unità di misura alternativa**: se attivo indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale.    
Questo flag assieme ai campi *Unità di misura alternativa* e *Quantità alternativa* sono visibili solo se nei [Parametri fatture di acquisto](/docs/configurations/parameters/purchase/purchase-invoices-parameters) è stato attivato il flag *Gestione doppia unità di misura*.
- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.   
- **Rivalsa IVA**: se settata, l'IVA dell'omaggio viene considerata per il totale fattura.
- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.
- **Riferimento ordine**: nel caso in cui la fattura sia generata da un ordine, il riferimento all'ordine sarà riportato automaticamente in questo campo.
- **Dettaglio dichiarazioni**: viene riportata la [Dichiarazione d'intento](/docs/finance-area/declarations/declarations/intent-declaration) usata per proporre l'iva dell'articolo; dalla combo box è possibile cambiare la dichiarazione d'intento di riferimento, se presenti più dichiarazioni valide.

### 3.5 Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e numeri seriali che devono essere caricati nel magazzino.   
Se l'articolo non prevede la gestione dei [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number), questo tab sarà disabilitato.

:::tip Ricorda
Se nei [Parametri fatture di acquisto](/docs/configurations/parameters/purchase/purchase-invoices-parameters) il flag *Lotti e S.N. obbligatori* è disabilitato sarà possibile salvare il documento senza inserire i lotti/serial number. Inoltre, se la *Tipologia di prelievo* del lotto codificata nell'[anagrafica articolo](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) è *FIFO* o *Data scadenza* al momento del carico a magazzino della fattura i lotti saranno proposti in automatico, se non sono già stati inseriti in precedenza.
:::


### 3.6 Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />


### 3.7 Extra data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.8 Documenti allegati

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.9 Materiale Conai per l'articolo

Questo tab è visibile se per la società attiva è stata attivata la gestione Conai.

Questa sezione riporterà i materiali d’imballaggio che compongono l’articolo, con la relativa unità di misura, peso unitario (abbattuto dell’eventuale percentuale d’esenzione dell’anagrafica cliente) e il totale del peso ottenuto dalla moltiplicazione tra numero di articoli venduti per il peso unitario.    
Al salvataggio del documento, o alla pressione del pulsante **Ricalcolo Conai**, Fluentis inserirà una o più righe spese recuperando l’articolo dei materiali, con quantità uguale alla somma delle quantità e prezzo uguale al costo conai per quel materiale.

Per maggiori informazioni sulla [Gestione Conai](/docs/purchase/purchase-flow/conai) in Fluentis vedere la pagina allegata.


### 3.10 Costi da ricevere 

I tab **Costi da ricevere** e **Spese** non sono gestiti nella versione corrente di Fluentis.


### 3.11 Sezione valori

La sezione in basso, a destra, presenta il riassunto dei costi che concorrono alla formazione del prezzo finale di ciascun articolo selezionato nella griglia degli articoli. I campi presenti sono: 

- **Prezzo unitario**: il valore del campo *Prezzo*; 
- **Quantità**: il valore del campo *Quantità* o *Quantità alternativa*, a seconda del flag *Prezzo unità di misura alternativa*;
- **Importo di riga**: Prezzo articolo * Quantità articolo; 
- **Totale sconti**: la somma degli sconti dell'articolo, inclusi anche gli sconti finali;
- **Importo**: Importo di riga - Totale sconti;
- **Imposta**: Importo * aliquota IVA dell'articolo; 
- **Totale**: Importo + Imposta.

## 4. Riepiloghi

Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.

### 4.1 Sconti finali

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Spese

Sono proposte le spese inserite nell'anagrafica contatto, nel tab *Spese/Sconti*. In questa griglia eventuali spese devono essere inserite in positivo, eventuali sconti in negativo.      

Questi elementi vengono applicati alla totalità del documento e non sono distribuiti tra le righe degli articoli. Possono includere costi aggiuntivi, sconti globali, o maggiorazioni applicate all'intero documento. Se impostati nell'anagrafica articolo, vengono automaticamente proposti al momento della creazione del documento.

- **Tipo/Descrizione**: permette di scegliere le tipologie di spesa (predefiniti nella tabella [Tipi spese](/docs/configurations/tables/general-settings/expenses-types)), attribuendo alla tipologia la percentuale di spesa da applicare.  
- **Importo spesa**: indica il valore della spesa espresso nella divisa del documento.    
- **IVA**: indica l'aliquota IVA da applicare alle spese inserite.   
- **Percentuale/Valore**: indica se calcolare le spese con una percentuale oppure con un valore monetario predefinito. Selezionando *valore* l'importo della spesa va inserito sotto la voce omonima.      
- **Percentuale**: valore numerico della percentuale di spesa.  

:::note Nota
Se il *Tipo spesa* inserito ha il flag [ripartito](/docs/configurations/tables/general-settings/expenses-types#flag-di-aggancio-alle-logiche) attivo, durante il carico della fattura a magazzino la spesa sarà ripartita su tutti gli articoli in base agli importi totali di ogni riga articolo. Il risultato della ripartizione della spesa è visibile nella [registrazione di magazzino](/docs/logistics/warehouse/stock-records/record).    
1. Se gli articoli hanno un prezzo: la spesa totale sarà ripartita proporzionalmente sugli importi netti di ciascun articolo; il risultato verrà aggiunto al prezzo iniziale dell'articolo nel campo *Totale importo* della registrazione. Se per alcune righe l'importo è 0, esso sarà considerato come 1 per consentire una ripartizione della spesa su tutti gli articoli.   
2. Se tutti gli articoli hanno prezzo pari a 0: la spesa verrà distribuita equamente tra tutte le righe articolo e, a partire da questa distribuzione, sarà calcolato l'*importo movimento/importo gestionale* nella registrazione, tenendo conto delle quantità di ciascun articolo.   
:::

### 4.3 Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

### 4.4 Riepilogo scadenze

Rappresenta il riepilogo delle scadenze del documento, per ogni *tipo* e *soluzione* di pagamento.  
- **Numero**: valore progressivo della riga.  
- **Pagamento**: rappresenta il codice alfanumerico del *Tipo pagamento* ripreso dalla *Testata del documento > tab Pagamenti*.  
- **Importo**: Importo della scadenza calcolato. Può essere forzato manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*. (Scattano in automatico dei controlli e avvisi sulla quadratura tra i valori delle scadenze e il totale fattura)
- **Data scadenza**: Data della scadenza calcolata. Può essere forzata manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*.
- **Spese di incasso**: Campo in cui riportate le spese di incasso calcolate.
- **IVA**: da applicare alle spese di incasso (può essere impostata anche manualmente)
- **Causale pagamento**: è possibile inserire direttamente in fattura una causale contabile che da luogo ad una scrittura automatica di incasso / pagamento. NB prestare attenzione al template della causale perchè utilizzerà i conti presenti anche senza sottoconto, motivo per il quale è presente il campo seguente.
- **Conto sottoconto cliente / fornitore** conto che usa per incassare/pagare (cassa o banca ad esempio) la scadenza andando a sovrascrivere il conto presente nella causale contabile di pagamento (o incasso).
- **Segno**: solo le scadenze che hanno questo flag vengono poi gestite in pagamento con causale e conto impostato.
- **Modelli riferimento pagamento**: Modello di creazione del codice di pagamento. In alcune localizzazioni estere ogni scadenza in fattura prevede un codice attribuito da chi fattura: questo codice è strutturato secondo alcuni modelli specifici (tabella MB_PaymentReferenceModels), in modo da poter costruire il codice con un algoritmo.
- **Codici modelli pagamento**: Questo è il codice (strutturato come da modello precedente) da riportare nella partita e quindi poi nei pagamenti che si inviano alla banca, in modo che questa comunichi al beneficiario qual è la scadenza che è stata pagata (e così automatizzare l’import dai movimenti bancari con chiusura partita). Da qui viene compilato dentro la partita e nel file Sepa.
- **Data limite pag anticipato** Questo è un campo previsto nel tracciato fatture Sdi, la data limite per poter applicare lo sconto finanziario.
- **Tipo sconto**: Tipo di sconto finanziario.
- **Valore sconto**: Valore dello sconto finanziario su incasso.


### 4.5 Altri campi

**Note finali**: è un campo libero che può essere compilato dall'utente anche con l'ausilio dell'*Help note codificate*.


### 4.6 Totali documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />
