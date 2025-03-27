---
title: Nuovo DDT di acquisto
sidebar_position: 2
---

La form *Crea DDT di acquisto* si apre tramite il percorso **Acquisti > DDT di acquisto > Nuova DDT** oppure tramite il pulsante *Nuovo* che si trova nella form [Ricerca DDT di acquisto](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note).

## *Come creare un DDT di acquisto*

<details>
 
<summary>Clicca per vedere i passaggi fondamentali</summary>
 
1. **Inserisci i dati obbligatori**: *Tipo DDT* e *Fornitore*. *Anno*, *Numero* e *Data Inserimento* saranno proposti in automatico.  
 
2. **Inserisci o modifica i dati facoltativi** della testata: come eventuali *sconti*, la *destinazione*, ecc.  
 
3. **Inserisci gli Articoli**: mediante doppio click nel campo *Codice articolo* si apre l’help articoli che permette di cercare e selezionare un articolo esistente. Tutti gli altri dati della riga, come *unità di misura*, *quantità*, *prezzo*, saranno proposti in automatico, ma possono essere modificati.
In alternativa è possibile selezionare come *Tipo riga* un *Articolo non codificato* e inserire manualmente i dati successivi.
 
4. **Inserisci eventuali sconti o altre informazioni aggiuntive** nei tab *Sconti/listini* e *Dati articolo*.

5. **Aggiungi e informazioni relative al Trasporto** della merce nel tab *Trasporto*.

6. **Controlla la sezione dei Riepiloghi** ed inserisci eventuali spese o sconti finali.  
 
7. Una volta confermato il DDT **attiva il flag *Controllato* in testata** in modo da rendere il documento disponibile per le procedure successive.
 
</details>

## **1. Dati obbligatori**

- **Tipo bolla cosegna acquisto**: predefinito in  *Configurazione > Tabelle > Acquisti > Tipi DDT di acquisto*.  
Questo campo determina il range di numerazione del documento che si sta inserendo e propone automaticamente il *Numero* del DDT in base alla data inserimento e all'ultimo numero inserito;   
- **Fornitore**: può essere inserito usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo)  oppure   [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale);   
- **Numero interno**: viene proposto automaticamente in base al tipo, ma può essere modificato manualmente rispettando la regola di progressione tra data e numero;  
- **Data inserimento**: viene proposta automaticamente la data corrente, ma può essere modificata manualmente sempre rispettando la regola di progressione tra data e numero;  
- **Numero**: in questo campo è possibile inserire un numero documento che può essere diverso rispetto a quello proposto nel campo precedente.   

La form contiene una serie di tab.

## **2. Testata**

Dopo aver selezionato i dati obbligatori nella sezione superiore, l'utente può continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure con il [help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) oppure, in base alle procedure che sceglie, l'applicazione compila i campi *automaticamente*.

:::note Ricorda
Se il documento viene *creato automaticamente*, ad esempio mediante [**Evasione da ordini**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

### 2.1 Dati fornitore

Inserendo il **Fornitore** vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle sezioni: 

- **Divisa**: sezione contenente i dati [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Nazione**: sezione contenente i dati [*Nazione*](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).   
- **Spedizione**: sezione contenente i dati [*Spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

### 2.2 Dati facoltativi testata

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

### 2.3 Pagamenti

Le **Soluzioni di pagamento** sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.

Se al **Tipo pagamento** è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

:::note Nota
Se il documento nasce mediante evasione di un solo *Ordine fornitore* oppure da più ordini aventi la stessa condizione di pagamento vengono ripresi il tipo e la soluzione di pagamento presenti negli ordini.
:::

#### Pulsante specifico:

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### 2.4 Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti* e possono essere modificati/cancellati dall'utente.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Procedure testata:**

### *Carico automatico nel magazzino*

Questa procedura viene lanciata con l'aiuto del pulsante omonimo che si trova nella testata del documento e rispetta una serie di parametri impostati precedentemente nel DDT (per dettagli consultare la procedura identica: [Registrazione DDT di acquisto in magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)).

Il risultato può essere visualizzato in Logistica > [Registrazioni](/docs/logistics/warehouse/stock-records/records) oppure nella procedura [Registrazione DDT di acquisto in magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse), tab *Riepilogativo*.

:::note Nota
Se nei [Parametri DDT di acquisto](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters#carico) è attivo il flag **Carico/Scarico automatico**, al momento dell'attivazione del flag *Controllata* nella testata del DDT sarà automaticamente proposto di effettuare il carico del DDT. Questo campo sarà editabile solo una volta attivato il campo *Controllato* e inserito il *Numero* documento.
:::

### *Evasione da ordine*

Nella testata del DDT, premendo il pulsante **Evasione da ordine** si aprirà la form dove è possibile filtrare gli ordini fornitori relativi al fornitore del documento.

Tramite questa procedura è possibile creare un DDT di acquisto dall'evasione del relativo ordine fornitore. E' quindi possibile inserire gli articoli all'interno del DDT, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

 -  i/il fornitore degli ordini deve essere lo stesso del DDT;
 -  l'ordine che si vuole evadere deve avere attivo il flag *Stampato* e deve essere già stato *Confermato*.

Si dovrà poi andare ad impostare nella testata del nuovo DDT, il *Tipo DDT* che si vuole creare e il *Fornitore*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione ordini* per aprire la form di evasione.

#### Procedimento

I filtri per fornitore e divisa verranno riportati in automatico in base al cliente selezionato nel DDT.

Nell'area di filtro è possibile scegliere se visualizzare i dati in una *Griglia*, una *Struttura gerarchica* oppure entrambe.

> La **Struttura gerarchica** permette di avere una suddivisione più chiara dei vari ordini e degli articoli contenuti in ciascuno di essi. Permette inoltre la selezione massiva tutti gli articoli contenuti all'interno di un ordine semplicemente selezionando l'ordine.    
> La **Griglia** permette una maggiore personalizzazione della form mediante aggiunta di campi da Object navigator. In questo caso la selezione massiva va effettuata mediante l'utilizzo dei tasti della tastiera e cliccando sul pulsante *Attiva/Disattiva solo righe selezionate* nella ribbon bar.

Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verranno visualizzati nella parte sottostante tutti gli ordini stampati, confermati e non evasi oppure evasi parzialmente.

:::note Nota
La procedura riprende tutti i dati presenti nell'ordine e come conseguenza saranno applicate le condizioni di acquisto presenti nell'ordine, anche se queste attualmente sono cambiate.   
Nel caso di evasione di più ordini aventi la stessa soluzione di pagamento e/o stessa destinazione, verranno riportate nel DDT le informazioni contenute nell'ordine; in alternativa saranno riprese quelle dell'anagrafica fornitore. 
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 - Selezionare tutti o alcuni degli articoli proposti: per farlo basterà selezionare il flag presente all'inizio della riga articolo. La *Quantità da evadere* sarà automaticamente impostata uguale alla *Quantità residua*.
 - Selezionare alcuni articoli per una *quantità parziale*. In questo caso si dovrà andare a modificare la *Quantità da evadere*.

Per completare la procedura bisognerà poi cliccare sul pulsante *Evasione*, che andrà a riprendere tutti i dati presenti nell'ordine e li riporterà nel DDT.

#### Pulsanti specifici

> **Ricerca**: permette di cercare gli ordini fornitore.  
> **Evasione**: permette di trasferire i dati degli ordini selezionati all'interno del nuovo DDT.  
> **Evasione forzata ordine**: permette l'evasione forzata dell'ordine o delle righe articolo selezionate.  
> **Seleziona tutto**: permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla lista.  
> **Attiva solo righe selezionate**: permette di attivare i flag per tutte le righe selezionate con il mouse.   
> **Disattiva solo righe selezionate**: permette di disattivare i flag per tutte le righe selezionate con il mouse.

:::important Ricorda
Nel caso di più evasioni parziali per una determinata riga articolo all'interno dello stesso DDT è possibile scegliere se sommare le quantità in un'unica riga nel DDT oppure se mantenere righe distinte, rispettivamente disattivando o attivando il flag **Evasione quantità articolo non sommata** nella tabella dei [Tipi DDT di acquisto](/docs/configurations/tables/purchase/purchase-delivery-notes-type/).
:::

## **3. Articoli**

In questo tab vengono inseriti tutti gli articoli con i relativi dati.

I dati si inseriscono manualmente, con l'ausilio dell'help di campo oppure possono essere proposti dalle procedure collegate ([Creazione DDT da Ricevimento merci](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) o [Evasione DDT di acquisto da ordini](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders)).

Per inserire un nuovo articolo nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.

:::note Nota
Se il DDT è stato creato mediante evasione di un ordine fornitore tutti i dati saranno ripresi dall'ordine.
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

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Prezzo**: il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab *Sconti/Listini*. Lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata (vedi [Anagrafica contatti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). Attraverso il doppio click nel campo **Listini** (tab *Sconti/Listini*) l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito.    
In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo, se nei [Parametri DDT Acquisto](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) il flag *Costo a zero in assenza di listini* non è attivo.

- **Importo**: viene calcolato in automatico al netto degli sconti.

- **Totale sconti**: indica l'importo totale degli sconti presenti nel tab *Sconti/Listini* per ogni riga articolo.   

- **IVA**: è prioritario il dato inserito nel campo IVA dell'*Anagrafica contatto*. Se questo non è presente, viene proposto il valore presente nell'*Anagrafica articolo*, ma l'utente ha la possibilità di inserire un dato diverso. È un campo obbligatorio.

### 3.2 Dati facoltativi articoli

- **Codice/Descrizione articolo fornitore**: in questa sezione si potrà aggiungere il codice e la descrizione che il fornitore utilizza per identificare l'articolo; questo dato viene proposto in automatico se nell'anagrafica dell'articolo, tab [Fornitori preferenziali](/docs/erp-home/registers/items/create-new-item/item-registry/preferential-vendors) è stato associato un articolo fornitore. 

- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalità](/docs/erp-home/registers/items/create-new-item) dell'anagrafica articoli. Se questo non è presente, non viene proposto nessun dato e al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'anagrafica contatto.

#### Pulsanti specifici

> **Ricalcolo Conai**: se la [Gestione Conai](/docs/sales/sales-flow/conai) è abilitata per il documento, è possibile ricalcolare i valori con questo bottone dopo eventuali modifiche.
>
> **Gestione imballi**: permette l'apertura della gestione degli imballi a rendere usati nel documento di acquisto.   
Il pulsante diventa attivo se il documento è salvato, ma non caricato.   
Con clic su questo pulsante si apre la form corrispondente dove inserire la quantità, selezionare la riga ed eseguire il trasferimento dell'imballo selezionato nelle righe articolo cliccando sul pulsante **Execute**. In questa form vengono riportati gli articoli che sono stati inseriti con natura Imballo e che sono presenti nella tabella degli [Imballi a rendere](/docs/configurations/tables/logistics/package-to-be-returned).    
>
> **Aggiorna ubicazione**: utilizzata per aggiornare l'ubicazione su più righe articolo. Il pulsante diventa attivobselezionando almeno due articoli e apre l'help ubicazioni da cui scegliere la nuova ubicazione per tutti gli articoli selezionati.   
>
> **Storno ricevimenti**: il pulsante è attivo solo per i [Tipi DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) che hanno la *Natura DDT* di tipo *Reso*. Nella form vengono visualizzati tutti i DDT intestati a quel fornitore che sono già stati caricati a magazzino. Dopo aver selezionato le righe articolo e le relative quantità da stornare sarà sufficiente premere il pulsante *Storno ricevimenti* per inserirli nel DDT.    
>
> **Aggiornamento listini**: il pulsante **Aggiorna listino corrente** permette di aggiornare i prezzi nel listino corrente per ciascuna riga articolo selezionata.    
il pulsante **Crea nuovo listino con nuova validità** invece, aprirà un pop-up in cui inserire le date di validità del nuovo listino, il quale conterrà solo le righe selezionate e sarà intestato al fornitore inserito nel DDT.


:::important Ricorda   
Quando si crea/aggiorna un listino mediante questa procedura vengono riportati nel listino solo gli sconti che sono stati inseriti manualmente nel DDT. 
:::

### 3.3 Sconti/Listini  

- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la data inizio/fine validità e con le condizioni particolari (ad es. **Tipo scaglione** di sconto) assegnate all'articolo nel listino.

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.

- **Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.        

#### Pulsante specifico

> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 

### 3.4 Dati articolo

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

- **Articolo**: riporta classe, codice e descrizione dell'articolo selezionato nella griglia.   
- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-item) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.     
- **Nota**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.   
- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino. I dati sono ripresi dai [Tipi DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) oppure dall'ordine fornitore, se il DDT deriva da evasione di un ordine. Possono essere modificati manualmente per ciascuna riga articolo.   
- **Ubicazione**: viene proposta in automatico se alla causale utilizzata è stata associata un'ubicazione nella tabella delle [Causali di magazzino](/docs/configurations/tables/logistics/warehouse-templates) oppure se l'articolo è stato inserito nella [Mappa ubicazioni per articolo](/docs/logistics/warehouse/location/item-location-map/). Può essere inserita o modificata manualmente.   
- **Valorizzata**: indica se la riga articolo è stata valorizzata, ovvero se è stata evasa all'interno di una fattura di acquisto.   
- **Valorizzata parzialmente**: indica se la riga articolo è stata valorizzata per una quantità parziale.   
- **Valorizzata forzatamente**: indica se la riga articolo è stata valorizzata forzatamente.   
- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.   
- **Unità di misura/Quantità alternativa**: se nell'[anagrafica dell'articolo](/docs/erp-home/registers/items/create-new-item/item-registry/alternative-um) è stata codificata un'unità di misura alternativa con il flag *Predefinito* e nei Parametri ordini fornitore è stato attivato il flag *Proposta automatica U.M. alternativa*, questi valori saranno proposti in automatico al momento dell'inserimento dell'articolo, altrimenti è possibile selezionare una tra le unità di misura alternative codificate per l'articolo.   
- **Prezzo unità di misura alternativa**: se attivo indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale.    
Questo flag assieme ai campi *Unità di misura alternativa* e *Quantità alternativa* sono visibili solo se nei [Parametri ordini fornitori](/docs/configurations/parameters/purchase/purchase-orders-parameters) è stato attivato il flag *Gestione doppia unità di misura*.
- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.
- **Riferimento ordine**: nel caso in cui il DDT viene generato dall'ordine, il riferimento all'ordine sarà riportato in questo campo.
- **Dettaglio dichiarazioni**: viene riportata la [Dichiarazione d'intento](/docs/finance-area/declarations/declarations/intent-declaration) usata per proporre l'iva dell'articolo; dalla combo box è possibile cambiare la dichiarazione d'intento di riferimento, se presenti più dichiarazioni valide.

### 3.5 Lotti e Serial number

Nelle due griglie possono essere inseriti i lotti e numeri seriali che devono essere caricati nel magazzino.   
Se l'articolo non prevede la gestione dei [Lotti e Serial Number](/docs/erp-home/registers/items/create-new-item), questo tab sarà disabilitato.

:::tip Ricorda
Se nei [Parametri DDT di acquisto](/docs/configurations/parameters/purchase/purchase-orders-parameters) il flag *Lotti e S.N. obbligatori* è disabilitato sarà possibile salvare il documento senza inserire i lotti/serial number. Inoltre, se la *Tipologia di prelievo* del lotto codificata nell'[anagrafica articolo](/docs/erp-home/registers/items/create-new-item) è *FIFO* o con *Data scadenza* al momento del carico a magazzino del DDT i lotti saranno proposti in automatico se non sono già stati inseriti in precedenza.
:::

#### Pulsanti specifici

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.6 Analitica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

#### Pulsanti specifici

import DeleteCostCenter from './../../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

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

Per maggiori informazioni sulla [Gestione Conai](/docs/sales/sales-flow/conai) in Fluentis vedere la pagina allegata.

### 3.9 Sezione valori

La sezione in basso, a destra, presenta il riassunto dei costi che concorrono alla formazione del prezzo finale di ciascun articolo selezionato nella griglia degli articoli. I campi presenti sono: 

- **Prezzo unitario**: il valore del campo *Prezzo*; 
- **Quantità**: il valore del campo *Quantità* o *Quantità alternativa*, a seconda del flag *Prezzo unità di misura alternativa*;
- **Importo di riga**: Prezzo articolo * Quantità articolo; 
- **Totale sconti**: la somma degli sconti dell'articolo, inclusi anche gli sconti finali;
- **Importo**: Importo di riga - Totale sconti;
- **Imposta**: Importo * aliquota IVA dell'articolo; 
- **Totale**: Importo + Imposta.

## **4. Riepiloghi**

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
Se il *Tipo spesa* inserito ha il flag [ripartito](/docs/configurations/tables/general-settings/expenses-types) attivo, durante il carico del DDT a magazzino la spesa sarà ripartita su tutti gli articoli in base agli importi totali di ogni riga articolo. Il risultato della ripartizione della spesa è visibile nella [registrazione di magazzino](/docs/logistics/warehouse/stock-records/record).    
1. Se gli articoli hanno un prezzo: la spesa totale sarà ripartita proporzionalmente sugli importi netti di ciascun articolo; il risultato verrà aggiunto al prezzo iniziale dell'articolo nel campo *Totale importo* della registrazione. Se per alcune righe l'importo è 0, esso sarà considerato come 1 per consentire una ripartizione della spesa su tutti gli articoli.   
2. Se tutti gli articoli hanno prezzo pari a 0: la spesa verrà distribuita equamente tra tutte le righe articolo e, a partire da questa distribuzione, sarà calcolato l'*importo movimento/importo gestionale* nella registrazione, tenendo conto delle quantità di ciascun articolo.   
:::

### 4.3 Riepiloghi IVA

Viene proposto il riepilogo IVA del documento, per ogni codice IVA.

### 4.4 Riepiloghi scadenze

Rappresenta il riepilogo delle scadenze del documento, per ogni *tipo* e *soluzione* di pagamento.  
- **Numero**: valore progressivo della riga.  
- **Pagamento**: rappresenta il codice alfanumerico del *Tipo pagamento* ripreso dalla *Testata del documento > tab Pagamenti*.  
- **Importo**: Importo della scadenza calcolato. Può essere forzato manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*. (Scattano in automatico dei controlli e avvisi sulla quadratura tra i valori delle scadenze e il totale fattura)
- **Data scadenza**: Data della scadenza calcolata. Può essere forzata manualmente, nel qual caso si attiva automaticamente il successivo flag *Modifica manuale*.
- **Spese di incasso**: Campo in cui riportate le spese di incasso calcolate.
- **IVA**: da applicare alle spese di incasso (può essere impostata anche manualmente)
- **Causale pagamento**: è possibile inserire direttamente in fattura una causale contabile che da luogo ad una scrittura automatica di incasso / pagamento. NB prestare attenzione al template della causale perchè utilizzerà i conti presenti anche senza sottoconto, motivo per il quale è presente il campo seguente.
- **Conto sottoconto cliente / fornitore** conto che usa per incassare/pagare (cassa o banca ad esempio) la scadenza andando a sovrascrivere il conto presente nella causale contabile di pagamento (o incasso).
- **Singolo**: attiva la contabilizzazione della chiusura scadenze nella scrittura automatizzata.
- **Modelli riferimento pagamento**: Modello di creazione del codice di pagamento. In alcune localizzazioni estere ogni scadenza in fattura prevede un codice attribuito da chi fattura: questo codice è strutturato secondo alcuni modelli specifici (tabella MB_PaymentReferenceModels), in modo da poter costruire il codice con un algoritmo.
- **Codici modelli pagamento**: Questo è il codice (strutturato come da modello precedente) da riportare nella partita e quindi poi nei pagamenti che si inviano alla banca, in modo che questa comunichi al beneficiario qual è la scadenza che è stata pagata (e così automatizzare l’import dai movimenti bancari con chiusura partita). Da qui viene compilato dentro la partita e nel file Sepa.
- **Data limite pag anticipato** Questo è un campo previsto nel tracciato fatture Sdi, la data limite per poter applicare lo sconto finanziario.
- **Tipo sconto**: Tipo di sconto finanziario.
- **Valore sconto**: Valore dello sconto finanziario su incasso.

### 4.5 Altri campi

- **Volume**: viene proposto il volume cumulativo, risultato dalla somma dei volumi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab* [*Pesi/Dimensioni*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions)), quando l'unità di misura del volume degli articoli corrisponde a quella inserita nei parametri del DDT. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.

- **Peso netto/lordo**: viene proposto il peso netto cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'*Anagrafica articolo > tab* [*Pesi/Dimensioni*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions)), quando l'unità di misura del peso degli articoli corrisponde a quello inserito nei parametri del DDT. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.

- **Colli**: viene proposto il numero dei colli, sulla base dei dati inseriti nell'*Anagrafica articolo > tab* [*Pesi/Dimensioni*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions), nei campi *Articoli presenti in un collo* oppure *Colli per formare l'articolo*. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.

- **Valori modificati manualmente**: attivando questo flag sarà possibile odificare manualmente i valori di *volume*, *peso netto*, *peso lordo* e *colli*.

### 4.6 Totali documento

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **5. Trasporto**

Il tab contiene informazioni riguardanti il trasporto degli articoli.

I combo box propongono tutti i *Destinatari*, le *Destinazioni* e i *Vettori* inseriti nell'*Anagrafica del contatto > tab [Spedizioni](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* ma possono essere inseriti manualmente. 

I dati presenti sono: 

- **Mittente**: in questo campo è possibile insrire il conto/sottoconto del mittente.
- **Destinatario**: viene proposto il destinatario di default inserito in anagrafica cliente; se non presente, viene preso l'indirizzo del cliente.    
- **Destinazione**: viene proposta la destinazione di default del destinatario, see inserita in anagrafica cliente.        
- **Volume**: viene proposto il volume cumulativo, risultato dalla somma dei volumi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del volume degli articoli corrisponde a quella inserita nei parametri della fattura. 
- **Peso netto**: viene proposto il peso netto cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del peso degli articoli corrisponde a quello inserito nei parametri della fattura. 
- **Peso lordo**: viene proposto il peso lordo cumulativo, risultato dalla somma dei pesi degli articoli (il valore viene ripreso dall'Anagrafica articolo > tab Pesi/Dimensioni), quando l'unità di misura del peso degli articoli corrisponde a quella inserita nei parametri della fattura.     
- **Aspetto esteriore bene**: combo box che rimanda all'omonima tabella in cui codificare i dati.     
- **Colli**: viene proposto il numero dei colli, sulla base dei dati inseriti nell'*Anagrafica articolo > tab Pesi/Dimensioni*, nei campi *Articoli presenti in un collo* oppure *Colli per formare l'articolo*. Sono presi in considerazione solo gli articoli che hanno questo campo compilato.     
- **Valori modificati manualmente**: con questo flag rendiamo possibile la modifica dei campi Volume, Peso netto, Peso lordo e Colli, che altrimenti riportano i dati da anagrafica articolo senza possibilità di modifica.     
- **Ingresso/Uscita dell'ufficio doganale**: campi utilizzati per l'eTrasport per la versione romena, che rimandano alla tabella *Ufficio doganale*.     
- **Ingresso/Uscita valico di frontiera**: campi utilizzati per l'eTrasport per la versione romena, che rimandanno alla tabella *Valico di frontiera*.      
- **Trasporto**: è necessario selezionare la figura che si occuperà del trasporto, mettendo il flag in *Mittente*, *Destinatario* o *Vettore*; in base alla selezione, la sezione sottostante cambierà; se il trasporto è a carico del *Mittente* sarà possibile inserire Targa automezzo, Rimorchio, Data e Ora di Inizio trasporto; se è a carico del *Destinatario* sarà possibile inserire Targa automezzo, Rimorchio, Data e Ora di Inizio trasporto; se è a carico del *Vettore* invece i campi disponibili saranno Anagrafica contabile del Vettore, Targa, Rimorchio, Data e Ora trasporto, eventuale Committente, Caricatore, Proprietario, Luogo carico. 