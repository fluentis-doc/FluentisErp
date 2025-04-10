---
title: Nuova Richiesta di offerta
sidebar_position: 3
---

La form si apre tramite il percorso **Acquisti > Richiesta di Offerta > Nuova richiesta di offerta** oppure dal filtro di riceca Richieste di Offerta, mediante il pulsante Nuovo.

## *Come creare una richiesta di offerta*

<details>
 
<summary>Clicca per vedere i passaggi fondamentali</summary>
 
1. **Inserisci i dati obbligatori**: *Tipo richiesta di offerta* e *Fornitore*. *Anno*, *Numero* e *Data* saranno proposti in automatico.  
 
2. **Inserisci o modifica i dati facoltativi** della testata: come date di consegna, eventuali *sconti*, la *destinazione*, ecc.  
 
3. **Inserisci gli Articoli**: mediante doppio click nel campo *Codice articolo* si apre l’help articoli che permette di cercare e selezionare un articolo esistente. Tutti gli altri dati della riga, come *unità di misura*, *quantità*, *prezzo*, saranno proposti in automatico, ma possono essere modificati.
In alternativa è possibile selezionare come *Tipo riga* un *Articolo non codificato* e inserire manualmente i dati successivi.
 
4. **Inserisci eventuali sconti o altre informazioni aggiuntive** nei tab *Sconti* e *Dati articolo*
 
5. **Controlla la sezione dei Riepiloghi** ed inserisci eventuali sconti finali.  
 
6. Una volta controllata e confermata l'offerta, **inserisci una *Data conferma* in testata** in modo da rendere il documento disponibile per la conversione in ordine.
 
</details>

## **1. Sezione superiore** {#upper-section}

I campi obbligatori per l'inserimento di una richiesta di acquisto sono i seguenti:

- **Tipo**: è un campo obbligatorio. A seconda del [Tipo RDO](/docs/configurations/tables/purchase/purchase-offer-type) scelto, saranno attivate alcune funzionalità, quali ad esempio la *Gestione cespiti*. 
- **Data/Anno**: di default viene proposta la data corrente, ma può essere modificata manualmente.  
- **Numero**: poposto automaticamente in base al Tipo RDO scelto.   
- **Fornitore**: contiene l'anagrafica contatto a cui viene richiesta l'offerta.                
- **Versione**: contiene la versione dell'offerta; è possibile creare una nuova versione con il pulsante della ribbon bar **Nuova versione**.        

:::note Ricorda
Se il documento viene *creato automaticamente* da una RDA, questi dati vengono ripresi dal *documento d'origine* da cui è stata generato.
:::

## **2. Testata** {#header}

### 2.1 Dati fornitore

Inserendo il **Fornitore** vengono proposti in automatico tutti i dati specifici del tab **Testata**, secondo i dati impostati in precedenza nell'[anagrafica fornitore](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) nei campi corrispondenti al suo indirizzo e nelle sezioni:    
>- **Divisa**: sezione contenente i dati [Divisa](/docs/configurations/tables/general-settings/currencies), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Data valuta](/docs/guide/common/glossary/glossary-intro#currency-date).     
>- **Spedizione**: sezione contenente i dati [*Spedizioni*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Porto](/docs/guide/common/glossary/glossary-intro#carriage), [Imballo](/docs/guide/common/glossary/glossary-intro#packing), [Listino](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) predefinito e il suo [intervallo di validità](/docs/guide/common/glossary/glossary-intro#validity-date).   
>- **Nazione**: sezione contenente i dati [*Nazione*](/docs/guide/common/glossary/glossary-intro#country), [Lingua](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).    
>- **Pagamenti**: sezione contenente i dati [*Pagamenti*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Sconti*, *Destinazione* e *Vettore*.    

Tutti questi campi possono essere cancellati oppure modificati manualmente dall'utente.

### 2.2 Dati facoltativi testata 

- **Annotazioni**: questo campo viene ripreso dall'anagrafica fornitore o eventualmente dalla RDA, ma può essere inserito anche manualmente.             
- **Nostro/Vostro riferimento**: in questi campi solitamente viene indicato un riferimento interno ed un riferimento fornitore per il documento. Se presente, viene ripreso dall'anagrafica fornitore alrimenti può essere inserito manualmente.   
- **Note iniziali/finali**: si possono selezionare le note che sono state inserite in precedenza nella tabella che si trova nel percorso *Configurazione > Utilità > Gestione note codificate*. Per questo l'utente deve effettuare doppio click sul campo *Note iniziali/finali* per aprire Help note codificate e selezionare i dati.
- **Progetto**: usando l'help di campo si può collegare il documento a un progetto. Questa associazione funziona solo al livello della testata dell'articolo. Il progetto viene inserito automaticamente se la RDO è stata generata da una RDA che lo contiene. 
- **Data conferma offerta**: permette di inserire la data in cui è stata confermata l'offerta, ma non è un dato obbligatorio; nella procedura di [Creazione ordine fornitore da Offerta fornitore](/docs/purchase/offer-request/procedures/order-creation) è possibile visualizzare e convertire anche le RDO non confermate, attivando l'apposito flag nell'area di filtro.  
- **Data prevista consegna**: se impostata prima dell'inserimento degli articoli all'interno della RDO sarà riportate anche sulle singole righe articolo. In alternativa sarà sufficiente premere il pulsante *Sostituisci data prevista consegna nelle righe* nella ribbon bar per aggiornare le date sulle righe articolo.
- **Data chiusura**: al momento della conversione della RDO in ordine fornitore viene automaticamente valorizzata con la data corrente se è stato abilitato l'apposito flag per chiudere le offerte convertite. 
- **Validità offerta**: permette di impostare una data fine validità per la richiesta di offerta. 

#### Pulsanti specifici

> **Sostituisci data prev. consegna nelle righe**: dopo aver specificato la data prevista consegna in testata è possibile sostituirla in massa nelle righe articolo già inserite.

### 2.3 Pagamenti

Le [Soluzioni di pagamento](/docs/configurations/tables/general-settings/payment-terms) sono riportate in automatico dall'*Anagrafica fornitore > tab Pagamenti* e possono essere modificate/cancellate dall'utente.   
Se al [Tipo pagamento](/docs/configurations/tables/general-settings/payment-types) è associato uno sconto finanziario, l'importo dello sconto viene considerato solo ai fini contabili cioè nelle scadenze del documento e non nel totale DDT.

#### Pulsanti specifici

> **Cancella pagamenti**: utilizzato per cancellare le righe di pagamento selezionate.

### 2.4 Sconti

Vengono proposti solo gli sconti predefiniti ripresi dall'*Anagrafica fornitore> tab Sconti* e non quelli attribuiti alle condizioni di pagamento o a certi articoli. Possono essere modificati/cancellati dall'utente.   

Gli sconti proposti in testata del documento vengono riportati in ogni nuova riga articolo inserita nel documento. Se dopo aver inserito le righe articolo viene inserito un nuovo sconto in testata questo non viene replicato nelle righe articolo già inserite.

#### Pulsanti specifici

> **Cancella sconti predefiniti**: utilizzato per cancellare gli sconti selezionati.


### 2.5 Extra Data

Qui viene proposta l'informazione inserita nell'*Anagrafica del soggetto > tab Extra data*, solo se esistono dati di default.

## **3. Articoli** {#items}

Per inserire un *Nuovo articolo* nella griglia basterà posizionarsi sulla riga per compilare i vari dati oppure utilizzare il pulsante **Nuovo articolo** presente nella ribbon bar.

### 3.1 Dati obbligatori

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo riga** offre la possibilità di selezionare, dalla combo-box, articoli con caratteristiche diverse:
> - *Articolo codificato*: sono gli articoli codificati in anagrafica e possono essere contabilizzati in contabilità analitica e registrati in magazzino.  
> - *Articolo non-codificato*: sono articoli descrittivi che possono essere contabilizzati in contabilità analitica ma non possono essere movimentati a magazzino.  
> - *Articolo spese*: sono articoli codificati o non-codificati e vengono riassunti in modo distinto nei riepiloghi dei documenti, se l'articolo spesa è codificato e di interesse fiscale verrà movimentato in magazzino, se è non codificato oppure non di interesse fiscale non verranno movimentati a magazzino.  
> - *Articolo note*: sono note descrittive riportate nella stampa del documento; non incidono sulla contabilità e sul magazzino.
> - *Articolo omaggio*: viene gestito come un articolo codificato o non codificato ai fini fiscali e di magazzino, ma essendo un omaggio viene conteggiato separatamente nei riepiloghi del documento e in base al flag Rivalsa iva viene calcolato l'importo dell'iva dell'omaggio a carico del soggetto oppure no.

:::note Nota
Se si parte direttamente con l'inserimento dell'articolo, la sua classe, il codice e il tipo riga (*Articolo codificato*) vengono inseriti automaticamente.
:::

- **Classe/Codice/Descrizione articolo**: si possono inserire manualmente oppure con l'ausilio dell'help di campo il quale proporrà tutti i dati relativi inseriti nell'Anagrafica articolo. Dopo l'inserimento dell'articolo, la sua Descrizione sarà ripresa automaticamente dall'anagrafica. Se l'articolo ha Varianti, sarà possibile selezionare la variante desiderata dal tab Dati articolo.

- **Unità di misura**: viene proposta l'unità di misura principale dell'articolo, ma nel caso in cui nell'anagrafica articolo siano codificate unità di misura alternative l'utente ha la possibilità di sceglierne un'altra.

- **Quantità**: rappresenta la quantità dell'U.M. principale e di default ha il valore 1; può essere modificata manualmente oppure può essere ripresa dal documento considerato per l'evasione.

- **Prezzo**: il prezzo viene proposto dal listino inserito nell'anagrafica contatto; il listino di riferimento per l'articolo stesso è visualizzato nel tab *Dati articolo*; lo stesso documento potrebbe contenere articoli con prezzi presi da listini diversi, se nell'anagrafica soggetto sono associati più listini in cascata. Attraverso il doppio click nel campo Listini l'utente ha la possibilità di selezionare un listino diverso da quello di default, dal quale sarà ripreso il prezzo dell'articolo inserito.   

- **IVA**: è prioritario il dato inserito nel campo IVA dell'Anagrafica contatto. Se questo non è presente, viene proposto il valore presente nell'Anagrafica articolo, ma l'utente ha la possibilità di inserire un'altro dato. 

- **Importo unitario**: viene calcolato in automatico al netto degli sconti.

### 3.2 Dati non obbligatori

- **Fatturato acquisti**: viene proposto il dato inserito nel tab *Generalità* dell'anagrafica articoli.   

- **Data chiusura**: indica la data di chiusura dell'offerta; viene compilata automaticamente se al momento della [creazione ordine fornitore da offerta fornitore](/docs/purchase/offer-request/procedures/order-creation) viene selezionato il flag di chiusura delle offerte. 

- **Data stimata di consegna**: indica la data prevista per la consegna della merce. Viene proposta in automatico se la *Data prevista consegna*è stata valorizzata nel tab testata.

- **Periodo di prevista consegna**: campo descrittivo libero in cui è possibile indicare il periodo di tempo previsto per la consegna della merce.

### 3.3 Sconti {#discount}

- **Tipo scaglione**: riporta lo scaglione di sconto da utilizzare, che viene ripreso dall'anagrafica fornitore oppure dal listino.  

- **Prezzo manuale**: si attiva automaticamente quando il prezzo dell'articolo è stato inserito o modificato manualmente.   

Nella griglia invece vengono proposti tutti gli sconti associati all'articolo, ognuno con la propria base di calcolo e di assegnazione. Gli sconti possono essere ripresi: dall'anagrafica fornitore, dalla soluzione di pagamento assegnata al documento, dal listino, dalla [definizione politiche sconti](/docs/purchase/price-control/definition). Tutti i dati proposti sono modificabili.

#### Pulsanti specifici

> **Cancella sconti**: permette di cancellare lo sconto selezionato dalla griglia corrispondente. 

### 3.4 Dati articolo {#items-data}

All'interno di questo tab vengono riportate/inserite ulteriori informazioni relative all'articolo.

>- **Articolo**: visualizza l'articolo selezionato nella griglia superiore.   
>- **Variante**: in questo campo è possibile selezionare una variante dell'articolo tra quelle precedentemente codificate nel tab [Varianti](/docs/erp-home/registers/items/create-new-item) dell'anagrafica articolo. Se nel listino sono stati inseriti prezzi e/o sconti diversi per ciascuna variante essi saranno aggiornati quando si sleziona una variante diversa dell'articolo.     
>- **Nota**: sono le note relative alla riga articolo, possono essere inserite anche tramite l'help note codificate. Saranno riportate in tutti i documenti generati da questo.
>- **Magazzino e causale**: vengono proposti il magazzino e la causale di riferimento che compariranno in automatico al momento del carico degli articoli relativi in magazzino.    

>- **Progetto**: rappresenta il progetto da associare al documento. Se nella testata del documento è stato inserito un progetto, esso sarà riportato su tutte le righe articolo; in alternativa può essere selezionato tramite l'apposito help progetti.
>- **Listino**: viene proposto il listino dal quale è stato ripreso il prezzo dell'articolo, con la sua data inizio/fine validità.

>- **Unità di misura/Quantità alternativa**: permette di impostare un'unità di misura alternativa e la relativa quantità per l'articolo selezionato nella griglia.     
>- **Prezzo unità di misura alternativa**: se attivo indica che il prezzo inserito sulla riga articolo è riferito all'unità di misura alternativa e non a quella principale.    

>- **Marca**: rappresenta la marca dell'articolo, ripresa dalla sua anagrafica oppure dal listino dell'articolo.   
>- **Richiesta di acquisto**: se l'offerta è stato creata da RDA viene riportata la [Richiesta d'acquisto](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request) di riferimento.   


#### 3.4 Extra data {#extra-data}

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

#### 3.5 Documenti allegati {#attached-documents}

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## **4. Riepiloghi** {#summaries}

Nelle sezioni di questo tab sono presentate le informazioni principali dell'intero documento.

### 4.1 Sconti finali articoli

Gli sconti finali applicati a livello di singolo articolo vengono distribuiti (o "spalmati") su ciascuna riga articolo del documento. Questo significa che l'importo dello sconto è suddiviso proporzionalmente tra tutti gli articoli presenti nel documento, e lo sconto relativo sarà visibile nel tab Articoli per ogni singola riga.

- **Tipo/Descrizione sconto**: permette di scegliere le tipologie di sconto (predefiniti in [Tipi sconti](/docs/configurations/tables/general-settings/discount-types)), attribuendo alla tipologia la priorità di applicazione dello sconto e se lo sconto viene calcolato sull'imponibile o in cascata rispetto agli sconti precedentemente applicati.  

- **Priorità**: rappresenta la priorità di applicazione dello sconto; l'ordinamento da applicare avviene in modo crescente.  

- **Cascata/Imponibile**: per definire se il calcolo dello sconto usa come imponibile il (prezzo * quantità) - (sconti già calcolati) oppure (prezzo * quantità).  

- **Valore**: valore numerico dello sconto finale da applicare.  

### 4.2 Totali documento

- **Importo lordo articoli**: rappresenta la somma dei valori di tutti gli articoli.

- **Acconto**: rappresenta il valore dell'eventuale acconto ricevuto per il documento.

- **Importo omaggio**: rappresenta l'importo degli articoli di tipo omaggio inseriti nel tab *Articoli*.

- **Totale sconti applicati**: rappresenta il valore totale degli sconti applicati sugli articoli, escludendo gli sconti finali.

- **Importo netto articoli**: *Importo lordo articoli* – *Totale sconti applicati*.

- **Sconti finali articoli**: rappresenta il valore degli sconti finali espressi in percentuale sull'importo lordo degli articoli.

- **Importo netto sconti finali**: *Importo netto articoli* - *Totale sconti finali*.

- **Totale articoli spese**: rappresenta il valore delle spese inserite nel tab precedente come articoli di *Tipo spese*.

- **Spese di incasso**: rappresenta la somma delle spese di incasso inserite nella griglia delle *Spese*.

- **Spese bollo**: rappresenta la somma delle spese di bollo inserite nella griglia delle *Spese*.

- **Totale spese/sconti/maggiorazioni**: rappresenta il valore totale delle spese inserite nella griglia *Spese*.

- **Imponibile**: *Importo netto articoli* – *Sconti finali* + *Totale articoli spese* + *Totale spese/sconti/maggiorazioni*.

- **IVA**: rappresenta la somma dei valori contenuti nei riepiloghi IVA.

- **Totale**: *Imponibile* + *IVA*.