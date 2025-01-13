---
title: Nuovo ordine fornitore
sidebar_position: 2
---
 
La form si trova nell'area **Acquisti > Ordini fornitori** e contiene i dettagli relativi ai prodotti o servizi da acquistare, inclusi quantità, prezzi, termini di consegna, condizioni di pagamento e altre specifiche contrattuali.
 
Dalla form di ricerca degli ordini è possibile creare un nuovo documento mediante il pulsante **Nuovo** oppure aprirne uno esistente per visualizzarlo e/o modificarlo.
 
## *Come creare un ordine fornitore*


<details>
 
<summary>Clicca per i passaggi fondamentali</summary>
 
1. **Inserisci i dati obbligatori**: *Tipo Ordine* e *Fornitore*. *Anno*, *Numero* e *Data Inserimento* saranno proposti in automatico.  
 
2. **Inserisci o modifica i dati facoltativi** della testata: come date di consegna, eventuali *sconti*, la *destinazione*, ecc.  
 
3. **Inserisci gli Articoli**: mediante doppio click nel campo *Codice articolo* si apre l’help articoli che permette di cercare e selezionare un articolo esistente. Tutti gli altri dati della riga, come *unità di misura*, *quantità*, *prezzo*, saranno proposti in automatico, ma possono essere modificati.
In alternativa è possibile selezionare come *Tipo riga* un *Articolo non codificato* e inserire manualmente i dati successivi.
 
4. **Inserisci eventuali sconti o altre informazioni aggiuntive** nei tab *Sconti/listini* e *Dati articolo*
 
5. **Controlla la sezione dei Riepiloghi** ed inserisci eventuali spese o sconti finali.  
 
6. Una volta controllato e confermato l’ordine, **inserisci una *Data conferma* e attiva il flag *Stampato* in testata** in modo da rendere l’ordine disponibile per le procedure di evasione.
 
</details>
 
 
## 1. Dati obbligatori
 
Per creare l'ordine, l'utente deve inserire i campi obbligatori:
 
- **Tipo ordine**: predefinito in *Configurazione > Tabelle > Acquisti > Tipi ordini fornitori*. Questo campo determina il range di numerazione del documento che si sta inserendo e propone automaticamente il numero ordine fornitore in base alla data inserimento e all'ultimo numero inserito. Inoltre, se nel *Tipo ordine* è settato il flag [Conferma ordine automatica](/docs/configurations/tables/purchase/purchase-orders-type), viene proposta la data conferma ordine uguale alla data inserimento ordine;  
- **Anno**: viene inserito automaticamente l'anno in corso, ma può essere modificato manualmente sempre rispettando la regola di progressione tra data e numero;  
- **Numero**: viene proposto automaticamente in base al tipo, ma può essere modificato manualmente sempre rispettando la regola di progressione tra data e numero;  
- **Data inserimento**: viene proposta automaticamente la data corrente, ma può essere modificata manualmente sempre rispettando la regola di progressione tra data e numero;  
- **Fornitore**: può essere inserito usando l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) oppure [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).
 
## 2. Testata
 
Continuare l'inserimento dei seguenti dati [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale) oppure con l'[help di campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo).
 
:::note Ricorda
Se il documento viene *creato automaticamente*, ad esempio dal filtro di ricerca degli [**Ordini clienti**](/docs/sales/sales-orders/search-sales-orders), dalla procedura di [**Creazione automatica ordini**](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) o dalla procedura di [**Creazione ordine fornitore da offerta fornitore**](/docs/purchase/offer-request/procedures/order-creation), questi dati vengono ripresi dal *documento d'origine* da cui è stato generato.
:::
 
### 2.1 Dati fornitore
 
Inserendo il **Fornitore**, vengono proposti automaticamente tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle sezioni:
 
- **Divisa**: sezione contenente i dati [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).  
- **Nazione**: sezione contenente i dati [*Nazione*](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).  
- **Spedizione**: sezione contenente i dati [*Spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) predefinito e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Pagamenti**: sezione contenente i dati [*Pagamenti*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Sconti*, *Destinazione* e *Vettore*.    
 
Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.
 
### 2.2 Dati facoltativi testata
 
- **Data richiesta consegna** e **Data consegna**: se impostate prima di inserire gli articoli all'interno dell'ordine, esse saranno riportate anche sulle singole righe articolo. In alternativa, sarà sufficiente premere il pulsante *Sostituisci data prevista consegna nelle righe* nella ribbon bar per aggiornare le date sulle righe articolo.  
- **Data conferma ordine**: per i *Tipi ordine* che hanno il flag [Conferma ordine automatica](/docs/configurations/tables/purchase/purchase-orders-type) . Viene inserita in automatico la data corrente al momento di creazione dell'ordine. Per poter effettuare l'evasione di un ordine fornitore, è necessario inserire una *Data conferma*.  
- **Decorrenza**: è la data di decorrenza per il calcolo delle scadenze di pagamento.  
- **Annotazioni fornitore**: questo campo viene ripreso dall'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), ma può essere inserito anche manualmente.  
- **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento. Se presente, viene ripreso dall'anagrafica fornitore altrimenti può essere inserito manualmente.    
Nel caso in cui l'ordine viene completato con la procedura *Evasione da progetto*, nei campi *Annotazioni fornitore* e *Nostro/Vostro riferimento* viene proposta l'informazione presente nei campi omonimi della commessa d'acquisto. Questo trasferimento è valido solo nel caso di ordine fornitore creato tramite il prelievo dei dati da un solo documento d'origine.  
- **Note iniziali ordine**: si possono selezionare le note che sono state inserite in precedenza nella tabella che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo, l'utente deve effettuare doppio click sul campo *Note iniziale* per aprire Help note codificate e selezionare i dati.  
- **Progetto:** usando l'help di campo, si può collegare il documento a un [progetto](/docs/project-management/projects/search-projects-intro). Questa associazione funziona solo al livello della testata dell'articolo. Il progetto viene inserito automaticamente se l'ordine fornitore nasce a fronte di un documento che lo contiene (ad esempio da ordini pianificati di acquisto).  
- **Commessa di produzione**: usando l'help di campo, si può collegare il documento ad una [commessa di produzione](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders). Se l'ordine viene creato dal rilascio degli ordini pianificati di acquisto, la commessa viene proposta automaticamente.  
- **Nazione**, *Lingua*, *Zona* sono ripresi dall'anagrafica del fornitore, se presenti, altrimenti possono essere inseriti manualmente.  
- **Operatore**: permette di inserire l'utente che crea il documento. Se nei Parametri ordini fornitore il flag [Codice operatore obbligatorio](/docs/configurations/parameters/purchase/purchase-orders-parameters) è attivo, sarà obbligatorio inserire il dipendente in questo campo per poter salvare l'ordine. I [dipendenti](/docs/project-management/registers/employee/new-employee) devono essere inseriti in precedenza nella tabella *Dipendenti*.  
- **Spedizioni**, *Porto* e *Imballo* sono ripresi dall'anagrafica del fornitore, se presenti, altrimenti possono essere inseriti manualmente.  
- **Listino**: se nell'anagrafica del fornitore c'è un listino con flag *Predefinito*, esso sarà proposto in questo campo congiuntamente alle sue date di validità.  
- **Listini di aggiornare**: se tale flag è attivo, il relativo listino di acquisto si aggiorna automaticamente in fase di salvataggio con le informazioni dell'articolo. Questo flag è modificabile anche a livello di riga articolo.  
- **Punti vendita**: si trova sotto il menù della voce *Spedizioni* e viene gestito solo dalla verticalizzazione riguardante le catene di distribuzione. Nel caso di un ordine fornitore creato da trasferimento di merci tra punti vendita di una stessa catena, in questo campo viene visualizzato il punto vendita di origine della merce.
- **Stato evasione**: Quando l'ordine viene evaso tramite un DDT o una fattura, il suo *Stato evasione* cambia automaticamente da *Non evaso* a *Parzialmente evaso* o *Evaso*. L'utente può forzare l'evasione di un ordine non totalmente evaso e quando questo succede, viene salvata anche la data evasione nel campo *In data*.  
 
I seguenti flag indicano lo *stato dell'ordine*:
- **Stampato**: questo flag viene attivato in automatico al momento di lancio della *Stampa* definitiva mediante il pulsante posto nella ribbon bar. In alternativa, può essere attivato manualmente per poter effettuare l'evasione dell'ordine in un DDT o in una fattura;  
- **Annullato**: quando l'utente vuole annullare un documento invece di cancellarlo, automaticamente l'ordine viene messo forzatamente evaso in tutte le sue righe articolo;  
- **Storicizzato**: quando l'utente lo storicizza.
 
#### Pulsanti specifici
 
> **Evasione da progetto**: richiama la [procedura* per creare un ordine fornitore da una commessa di acquisto. Si attiva con l'inserimento del fornitore e del tipo ordine fornitore. Per poter evadere la commessa di acquisto è necessario che sia stampata e confermata.   
> **Sostituisci data prev. consegna nelle righe**: pemette, dopo aver specificato la *Data richiesta consegna* e/o la *Data consegna* in testata ordine, di sostituire in massa tali date nelle righe articolo già inserite.
 
### 2.3 Pagamenti
 
Le [Soluzioni di pagamento](/docs/configurations/tables/general-settings/payment-terms) sono riportate in automatico dall'*Anagrafica fornitore - tab Pagamenti* e possono essere modificate/cancellate dall'utente.
 
Se al [Tipo pagamento](/docs/configurations/tables/general-settings/payment-types) è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.
 
Se il documento nasce da una commessa o da un'offerta fornitore, il tipo pagamento viene ripreso dal documento di origine.
 
#### Pulsante specifico:
 
**Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.
 
 
### 2.4 Sconti
 
Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore > tab Sconti*. Possono essere modificati/cancellati dall'utente.
 
import TabDiscount from './../../../import/sections/tab-discount.md'
 
<TabDiscount />
 
### 2.5 Destinazione
 
L'informazione inserita nell'*Anagrafica fornitore > tab Consegne* viene proposta, solo se esistono dati di default. Il combo box propone tutti i destinatari, le destinazioni e i vettori inseriti nell'anagrafica fornitore.
 
Gli indirizzi di spedizione (destinatario/destinazione e vettore) possono essere inseriti anche solo descrittivi senza essere precedentemente inseriti tra i contatti.
 
### 2.6 Vettore
 
In questo campo è possibile inserire il *Vettore* che effettuerà la spedizione dell'ordine. Se questo è stato inserito nell'*Anagrafica fornitore > tab Consegne*, sarà possibile selezionarlo dal menù a tendina della seconda colonna. Alternativamente, sarà sufficiente fare doppio click sulla terza colonna (*Vettore*) per selezionare uno dei contatti della società.
 
Opzionalmente si possono aggiungere i dettagli della *Targa* del vettore e la *Data/Ora trasporto*.
 
### 2.7 Extra Data
 
import TabExtraData from './../../../import/sections/tab-extra-data.md'
 
<TabExtraData />
 
### 2.8 Procedure testata - Evasione da progetto
 
La procedura di ripresa articoli da progetto permette di evadere anche parzialmente la commessa di acquisto. Sono proposte tutte le commesse non evase, non forzatamente evase e parzialmente evase. Per poter essere evasa una commessa di acquisto, deve essere *Stampata* e avere una *Data conferma*.
 
Prima di procedere con l'evasione, sarà necessario inserire il *Tipo di ordine* che si vuole creare e il *Fornitore* nella testata del documento. Successivamente, premendo il pulsante **Evasione da progetto**, si aprirà la form dove è possibile filtrare le commesse relative al fornitore del documento.
 
Nell'area di filtro, è possibile scegliere se visualizzare i dati in una Griglia, una Struttura gerarchica oppure entrambe.
 
> - La **Struttura gerarchica** permette di avere una suddivisione più chiara dei vari ordini e degli articoli contenuti in ciascuno di essi, facilitando anche la selezione massiva degli articoli all'interno di una commessa.  
> - La **Griglia** consente una maggiore personalizzazione della form mediante aggiunta di campi da *Object navigator*. In questo caso, la selezione massiva va effettuata mediante l'utilizzo dei tasti della tastiera e cliccando sul pulsante *Attiva/Disattiva solo righe selezionate* nella ribbon bar.
 
Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verranno visualizzati nella parte sottostante tutte le commesse stampate, confermate e non evase oppure evase parzialmente.
 
:::important NOTA
La procedura riprende tutti i dati presenti nella commessa e, come conseguenza, saranno applicate le condizioni di acquisto presenti nella commessa, anche se queste attualmente sono cambiate.
:::
 
Nella griglia di risultati, l'utente ha poi la possibilità di:
 
- Selezionare tutti o alcuni degli articoli proposti: per farlo basterà selezionare il flag presente all'inizio della riga articolo. La Quantità da evadere sarà automaticamente impostata uguale alla Quantità residua.
- Selezionare alcuni articoli per una quantità parziale. In questo caso, si dovrà modificare la Quantità da evadere.
 
Per completare la procedura, bisognerà cliccare sul pulsante Evasione, che andrà a riprendere tutti i dati presenti nella commessa e li riporterà nell'ordine.
 
#### Pulsanti specifici
 
> **Ricerca**: permette di cercare le commesse di acquisto;  
> **Esecuzione**: permette di trasferire gli articoli selezionati;  
> **Seleziona/Deseleziona tutti**: permette di selezionare/deselezionare tutti gli articoli dalla lista;  
> **Attiva/Disattiva solo righe selezionate**: utile soprattutto per l'evasione mediante griglia; permette di attivare/disattivare i flag di tutte le righe selezionate.  
 
## 3. Articoli
 
In questo tab vengono inseriti tutti gli articoli con i relativi dati.
 
import InsertMode from './../../../import/sections/insert-mode.md'
 
<InsertMode />
 
Per inserire un nuovo articolo nella griglia, basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante *Nuovo articolo* presente nella ribbon bar.
 
### 3.1 Dati obbligatori
 
import RowNumber from './../../../import/fields/row-number.md'
 
<RowNumber />
 
- **Tipo riga**: offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino. <br />
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino. <br />
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti; se l'articolo spesa è codificato e di interesse fiscale, verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale, non verranno movimentati a magazzino. <br />
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
 
:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::
 
import ItemClassDescription from './../../../import/sections/item-class-description.md'
 
<ItemClassDescription />
 
import UM from './../../../import/fields/item-um.md'
 
<UM />
 
import Quantity from './../../../import/fields/item-quantity.md'
 
<Quantity />
 
import Price from './../../../import/fields/item-price.md'
 
<Price />
 
In assenza del listino, il dato proposto può essere ripreso dal *costo ultimo* di anagrafica articolo, se nei [Parametri ordini fornitori](/docs/configurations/parameters/purchase/purchase-orders-parameters) il flag *Costo a zero in assenza di listini* non è attivo.
 
import Vat from './../../../import/fields/item-vat.md'
 
<Vat />
 
- **Importo**: viene calcolato in automatico al netto degli sconti.
- **Totale sconti**: indica l'importo totale degli sconti presenti nel tab *Sconti/Listini* per ogni riga articolo.    
 
### 3.2 Dati facoltativi articoli
 
- **Codice/Descrizione articolo fornitore**: in questa sezione si può aggiungere il codice e la descrizione che il fornitore utilizza per identificare l'articolo; questo dato viene proposto in automatico se nell'anagrafica dell'articolo (tab [Fornitori preferenziali](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors)) è stato associato un articolo fornitore.
 
- **Tipo fatturato acquisti**: viene proposto il dato inserito nel tab [Generalità](/docs/erp-home/registers/items/create-new-items/item-registry/generality) dell'anagrafica articoli. Se questo non è presente, non viene proposto nessun dato e al momento della contabilizzazione della fattura, sarà considerato il valore inserito nel campo *Costo/Ricavo di contropartita predefinito* dell'anagrafica contatto.
 
- **Data richiesta consegna** e **Data consegna**: indicano la data richiesta e prevista per la consegna. Possono essere proposte le date inserite nel tab testata oppure si possono modificare manualmente.
 
#### Pulsanti specifici
 
> **Suddividi la quantità in più date consegna**: utilizzato per suddividere la riga ordine in più righe a seconda della consegna richiesta. Questa procedura aprirà una nuova form in cui si dovrà inserire la nuova *data richiesta consegna* e le quantità previste per ciascuna data.  
> **Confezionamento**: si abilita dopo il salvataggio dell'ordine e permette di creare una UDC a partire dalla riga selezionata. La riga deve essere un articolo codificato e salvato nel documento. L'utente deve avere i diritti all'interno dei [Parametri di carico/scarico](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro/) per il caricamento del pallet. Inoltre, l'articolo deve essere gestito a UDC, e in base alle impostazioni del Tipo UDC inserite nell'anagrafica articolo, tab [Confezionamento](/docs/erp-home/registers/items/create-new-items/item-registry/packaging) verrà creato l'UDC rispettando i criteri.  
> **Aggiornamento listini**: il pulsante *Aggiorna listino corrente* permette di aggiornare i prezzi nel listino corrente per ciascuna riga articolo selezionata;    
il pulsante *Crea nuovo listino con nuova validità* invece, aprirà un pop-up in cui inserire le date di validità del nuovo listino, il quale conterrà solo le righe selezionate e sarà intestato al fornitore inserito nell'ordine.
 
:::note Ricorda  
Quando si crea/aggiorna un listino mediante questa procedura, nel listino vengono riportati solo gli sconti inseriti manualmente nell'ordine.
:::
 
### 3.3 Sconti/Listini  
 
- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la data inizio/fine validità e con le condizioni particolari (ad es. **Tipo scaglione** di sconto) assegnate all'articolo nel listino.
 
- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.
 
- **Listini da aggiornare**: se tale flag è attivo, il prezzo dell'articolo si aggiorna automaticamente nel relativo listino di acquisto in fase di salvataggio.
 
- **Sconti**: vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione.        
 
#### Pulsante specifico
 
**Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente.
 
### 3.4 Dati articolo  
 
All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.
 
- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-items/item-registry/variants) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante, essi saranno aggiornati quando si seleziona una variante diversa dell'articolo.  
 
- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa, può essere selezionato tramite l'apposito help progetti.
 
- **Note**: sono le note relative alla riga articolo e possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati.
 
- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.
 
- **Articoli commessa di produzione**: se l'ordine fornitore è collegato ad una commessa di produzione (mediante il rilascio di un ordine pianificato di acquisto e creazione di ordine fornitore da richiesta di acquisto), in questo campo viene riportato l'articolo padre contenuto nella commessa.
 
- **Richiesta di offerta**: se l'ordine è stato creato da una richiesta di offerta, mediante la procedura [Creazione Ordine fornitore da Offerta fornitore](/docs/purchase/offer-request/procedures/order-creation), in questo campo viene riportata la richiesta di riferimento.
 
- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino. I dati sono ripresi dai [Tipi ordine](/docs/configurations/tables/purchase/purchase-orders-type), ma possono essere modificati manualmente per ciascuna riga articolo.
 
- **Commesse di produzione**: se l'ordine fornitore è stato creato dalla pianificazione di produzione, viene riportata la commessa di produzione di riferimento (vedi *Creazione automatica ordini*). 
 
- **Prezzo unità di misura alternativa**: se attivo, indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale. Questo flag, assieme ai campi *Unità di misura alternativa* e *Quantità alternativa*, è visibile solo se nei [Parametri ordini fornitori](/docs/configurations/parameters/purchase/purchase-orders-parameters/) è stato attivato il flag *Gestione doppia unità di misura*.
 
- **Unità di misura/Quantità alternativa**: se nell'[anagrafica dell'articolo](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um) è stata codificata un'unità di misura alternativa con il flag *Predefinito* e nei Parametri ordini fornitore è stato attivato il flag *Proposta automatica U.M. alternativa*, questi valori saranno proposti in automatico al momento dell'inserimento dell'articolo.
 
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
 
## 4. Riepiloghi
 
Nelle diverse sezioni di questo tab sono presentate le informazioni principali dell'intero documento e alcuni pulsanti specifici.
 
### 4.1 Sconti finali
 
import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'
 
<SummariesFinalDiscount />
 
### 4.2 Spese
 
import SummariesExpenses from './../../../import/sections/summaries-expenses.md'
 
<SummariesExpenses />
 
### 4.3 Riepiloghi IVA
 
Viene proposto il riepilogo IVA del documento, per ogni codice IVA.
 
### 4.4 Riepiloghi scadenze
 
In questa griglia vengono riportate le scadenze calcolate in base alle soluzioni delle tipologie di pagamento inserite.
 
### 4.5 Altri campi 
 
**Note finali**: è un campo descrittivo che può essere compilato dall'utente anche con l'ausilio dell'*Help note codificate*.
 
### 4.6 Totali documento
 
import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'
 
<SummariesDocumentTotal />
