---
title: Rilascio Ordini Pianificati
sidebar_position: 1
---

La form permette la creazione di:

- *richieste di acquisto*, eventualmente già autorizzate tramite un opportuno parametro, nel caso di ordini pianificati di acquisto;  
- *ordini di conto lavoro* nel caso di ordini pianificati di conto lavoro, o nel caso in cui nella lista fasi di un ordine pianificato di produzione sia presente una fase esterna;  
- *ordini di produzione*, *lanciati* o *esecutivi* a seconda dell'attivazione di un apposito parametro, nel caso di ordini pianificati di produzione.

Il rilascio degli ordini comporta che questi non siano più visibili tra gli [Ordini pianificati](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) e, di conseguenza, non può essere generata una nuova [Schedulazione](/docs/planning/ms-master-scheduling/general-schedule) della commessa di produzione da cui gli ordini pianificati erano stati eventualmente generati tramite schedulazione generale. Gli ordini pianificati presenti nella griglia generati manualmente o tramite elaborazione MPR non presentano alcun legame con le commesse di produzione.

## Filtro

In questo tab è possibile visualizzare la lista degli ordini pianificati che devono essere ancora rilasciati ed è possibile filtrarli attraverso una serie di criteri di selezione. 

Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** presente nella *ribbon bar* per visualizzare i risultati all'interno della griglia di risultato.

*Pulsanti specifici*: 

> **Rilascio Ordini Pianificati di produzione**: questo pulsante si attiva solamente se nei filtri viene impostato, nel campo *Rilascio ordini pianificati a*, il tipo ordine di produzione e se nella griglia di risultato è stata selezionata almeno una riga ordine di produzione da rilasciare; cliccando su questa funzionalità il sistema eseguirà il rilascio generando ordini di produzione lanciati o esecutivi, a seconda di come siano stati impostati i parametri all'interno dei [Parametri Fabbisogno Materiali](/docs/configurations/parameters/production/resource-requirements-parameters);  
> **Rilascio ordini pianificati di Acquisto**: questo pulsante si attiva solamente se nei filtri viene impostato, nel campo *Rilascio ordini pianificati a*, il tipo ordine di acquisto e se nella griglia di risultato è stata selezionata almeno una riga ordine di acquisto da rilasciare; cliccando su questa funzionalità il sistema eseguirà il rilascio generando Richieste d'Acquisto autorizzare oppure non autorizzate, a seconda di come si sia scelto di impostare il parametri all'interno dei  [Parametri Fabbisogno Materiali](/docs/configurations/parameters/production/resource-requirements-parameters);  
> **Rilascio ordini pianificati di Conto Lavoro**: questo pulsante si attiva solamente se nei filtri viene impostato, nel campo *Rilascio ordini pianificati a*, il tipo ordine di conto lavoro e se nella griglia di risultato è stata selezionata almeno una riga ordine di conto lavoro da rilasciare; cliccando su questa funzionalità il sistema eseguirà il rilascio generando ordini di Conto Lavoro;   
> **Apri ricerca ordini di produzione**: tramite questo pulsante sarà possibile aprire la Ricerca Ordini di Produzione filtrati con gli stessi criteri utilizzati nella sezione di filtro di questa finestra. Ad esempio se si filtrano gli ordini pianificati in questa schermata in base al numero di commessa 3 dell'anno 2018, la finestra di ricerca ordini di produzione di aprirà già filtrata per la commessa 3 dell'anno 2018.

*Campi specifici*:

**Anno**: indica l'anno dell'ordine pianificato;     
**Ordine**: indica il numero dell'ordine pianificato;           
**Livello**: indica il livello dell'articolo oggetto dell'ordine all'interno della distinta base;  
**Anno/Numero/Codice/Descrizione commessa di produzione**: i campi risulteranno essere vuoti se l'ordine pianificato è stato generato manulamente oppure tramite MRP;  
**Data di inizio prevista**: se si tratta di ordine pianificato di acquisto o di conto lavoro questa data rappresenta la data in cui deve essere inviato al fornitore l'ordine di acquisto che verrà successivamente generato con il rilascio dell'ordine stesso; se si tratta di ordine pianificato di produzione questa data rappresenta la data di previsto inizio della prima fase di lavorazione del ciclo dell'articolo;  
**Data di fine prevista**: se si tratta di ordine pianificato di acquisto o di conto lavoro questa data rappresenta la data in cui deve essere ricevuta la fornitura e quindi coinciderà con la data di previsto ricevimento della riga dell'ordine fornitore che verrà successivamente generato con il rilascio dell'ordine stesso; se si tratta di ordine pianificato di produzione questa data rappresenta la data di prevista fine dell'ultima fase di lavorazione del ciclo dell'articolo;  
**Quantità confermata**: sarà diversa da zero solamente se l'elaborazione è avvenuta tramite l'MRP; 
**Cliente conto, sottoconto e decsrizione**: indica il cliente collegato nel caso degli ordini di produzione;  
**Fornitore conto, sottoconto e decsrizione**: indica il fornitore collegato nel caso degli ordini di acquisto e di conto lavoro;  
**Anno/Numero/Tipo ordine cliente**: rappresenta l'ordine cliente da cui è stata generata la commessa da cui è stato schedulato l'ordine pianificato in oggetto.

Dopo aver individuato gli ordini che si vogliono rilasciare, per procedere con il **Rilascio** bisognerà utilizzare uno dei pulsanti presenti nella *ribbon bar*, in base al tipo ordine che si deve rilasciare: **Rilascio Ordini Pianificati di produzione**, **Rilascio ordini pianificati di Acquisto** oppure **Rilascio ordini pianificati di Conto Lavoro**. Questi pulsanti si abiliteranno rispettivamente a quanto inserito nel campo **Rilascio ordini pianificati a**.

E' anche possibile entrare in **Visualizzazione dei dettagli dell'ordine pianificato** presente nella griglia, facendo semplicemente doppio click con il mouse sopra la riga dell'ordine pianficato che si desidera visualizzare, prima di procedere al rilascio. 

## Parametri

In questo tab è possibile impostare e salvare i parametri che servono per il rilascio degli ordini pianificati.  

### Ordini di Produzione

In questa sezione è possibile, tramite l'attivazione del flag **Generazione ordini di conto lavoro per operazioni esterne**, decidere che, se nella lista fasi dell'ordine pianificato di produzione che si sta rilasciando è presente una fase esterna, venga generato di conseguenza un ordine di conto lavoro per la fase esterna. Solitamente questo flag viene lasciato attivo.

### Richieste d'acquisto

Nella sezione è possibile:

- impostare, tramite l'apposita combo box, il **Tipo di richiesta di acquisto** che deve essere generata dal rilascio ordine pianificati di acquisto. In questa combo box viene proposto automaticamente il tipo richiesta di acquisto già impostato nei [Parametri Fabbisogno Materiali](/docs/configurations/parameters/production/resource-requirements-parameters) nella sezione Parametri per il rilascio degli ordini pianificati;      
- attivando il flag **Proprietà approvvigionamento da Parametri MRP articolo** la procedura creerà le *richieste di acquisto* inserendo la priorità indicata nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del singolo articolo; mentre se non è attivo le *richieste di acquisto* verranno create con la priorità incata nella commessa a cui sono legate;      
- fare in modo, attivando il flag **Arrotonda richiesta di acquisto**',che la procedura di rilascio ordine pianificato di acquisto arrotondi all'intero superiore la quantità che viene inserita nella riga della richiesta di acquisto che viene generata dal rilascio degli ordini pianificati di acquisto, nel caso in cui siano presenti quantità con decimali;  
- decidere il metodo di raggruppamento: attivando infatti il flag **Raggruppa al più presto**, la procedura di rilascio effettua un raggruppamento di ordini pianificati di acquisto generati per lo stesso articolo; nella casella **Per un periodo in giorni di** si imposta il numero di giorni di range entro il quale può essere effettuato il raggruppamento, considerando le date di previsto ricevimento degli articoli, quindi le date di fine ordine pianificato di acquisto;  
- decidere, nel caso non sia presente il fornitore nell'ordine pianificato di acquisto, se **Accettare gli ordini senza il fornitore**, **Tralasciare gli ordini senza il  fornitore** oppure **Accettare come fornitore il seguente conto** specificato nelle apposite caselle.

### Ordini di conto lavoro

Nella sezione è possibile:

- impostare, tramite la combo box del **Tipo Ordine** e il campo **Anno**, se l'ordine di conto lavoro da generare debba essere di tipo *Chiuso* o *Aperto* e di che anno debba essere;  
- decidere il metodo di raggruppamento: attivando infatti il flag **Raggruppare gli ordini dello stesso terzista**, la procedura di rilascio effettua un raggruppamento di ordini pianificati di conto lavoro, inserendo nello stesso ordine di conto lavoro gli articoli che devono essere lavorati dallo stesso terzista;   
- decidere, nel caso non sia presente il terzista nell'ordine pianificato di conto lavoro, se **Accettare gli ordini senza il fornitore**, **Tralasciare gli ordini senza il terzista** oppure **Accettare come terzista il seguente conto** specificato nelle apposite caselle.

*Pulsante specifico*:  
> **Salva le modifiche**: consente di salvare  i parametri come sono stati impostati.

### Ripristino

In questo tab è possibile eseguire la procedura di ripristino ordine pianificato che consente di annullare il rilascio precedentemente effettuato, ripristinando la situazione antecedente al rilascio stesso. 

Vengono visualizzati gli ordini pianificati della stessa tipologia specificata nel campo **Rilascio ordini pianificati a** del tab **Filtro**.

Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** presente nella *ribbon bar* per visualizzare i risultati all'interno della griglia di risultato.  

Tenendo selezionata una delle righe presenti nella griglia di risultato, viene visualizzato in uno dei tre tab inferiori, **Ordini di produzione**, **Richieste d'acquisto** oppure **Ordini di conto lavoro**, il documento generato dal rilascio dell'ordine pianificato selezionato.

Per lanciare il ripristino, selezionare uno o più ordini e cliccare il pulsante **Ripristino ordini**. 

*Condizioni per la procedura di ripristino*:

Per l'**ordine pianificato di produzione**: solo se l'ordine di produzione generato si trova nello stato di *Lanciato*; nel caso in cui l'ordine di produzione sia *Esecutivo* è necessario eseguire il ripristino del rilascio dell'ordine di produzione, mentre nel caso in cui sia già *Evaso* non è più possibile eseguire il ripristino dell'ordine pianificato, a meno che non si proceda a ritroso partendo dal rollback della registrazione della segnalazione di produzione;  
Per l'**ordine pianificato di acquisto**: solo se la riga di richiesta di acquisto generata si trova nello stato di *Non Evasa*; nel caso in cui la riga di richiesta di acquisto sia già stata evasa con la creazione di un ordine fornitore, sarà necessario procedere a ritroso partendo dal documento di acquisto fino al quale si è già arrivati;  
Per l'**ordine pianificato di conto lavoro**: solo se la riga dell'ordine di conto lavoro generato non sia stata ancora evasa, oppure non sia stato generato una DDT di consegna per il materiale relativo a quella riga di ordine di conto lavoro.

Eseguendo questa procedura, gli ordini ripristinati saranno nuovamente visibili nel tab di **Filtro** dove sarà possibile rieseguire il rilascio.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).