---
title: Parametri Conto Lavoro
sidebar_position: 2
tags: [Conto Lavoro]
---

Attraverso questa finestra vengono settati tutti i parametri che riguardano la gestione del conto lavoro e più nello specifico il modo in cui devono essere eseguite le movimentazioni di magazzino innescate dalle procedure del modulo stesso.

### Generale

**Tipo DDT**  
In questa sezione si imposta il tipo DDT di vendita che deve essere proposto di default quando si utilizza la procedura di creazione DDT di consegna di conto lavoro. Questo tipo DDT utilizzerà in automatico magazzino e causale impostati nelle apposite combo della voce 'Consegne materiali a terzisti' che si trova nella finestra dei parametri di conto lavoro.

**Codice operatore obbligatorio**: se attivo, permette di decidere se sia necessario inserire il codice operatore nel momento in cui si inserisce la DDT di consegna di conto lavoro.

**Dati materiali proposti**: visualizza le 4 differenti possibilità che l'utente ha di far proporre automaticamente alla procedura i materiali nel tab Materiali da Consegnare dell'ordine di conto lavoro.  
Le possibilità sono le seguenti:  
1. *Da ultima consegna effettuata presso lo stesso terzista*: si controlla l'ultimo ordine di conto lavoro generato per lo stesso terzista e in cui è presente lo stesso articolo da produrre;  
2. *Esplosione livello da struttura distinta*: si controlla la distinta base dell'articolo inserito nel tab Articoli da Produrre;  
3. *Consegna dello stesso articolo da produrre*: si inserisce nel tab Materiali da Consegnare lo stesso articolo inserito nel tab Articoli da Produrre;  
4. *Nessun materiale*: nel tab Materiali da Consegnare non viene proposto alcun materiale.

**Controlla disponibilità**: se attivo, permette di decidere se fare in modo che la procedura controlli o meno la disponibilità proveniente dai flag impostati nella sezione *Considera le disponibilità provenienti da*.

**Nessun materiale in consegna**: se attivo, fa in modo che nel tab *Materiali da consegnare* non sia inserito alcun articolo per nessun articolo da produrre.

**Disponibilità materiali**: se attivo, fa in modo che la procedura consideri anche la disponibilità dei materiali da impiegare nel corso dell'effettuazione del rientro da conto lavoro.

**Carico/Scarico automatico**: se attivo, permette all'utente di fare in modo che le movimentazioni di magazzino in uscita avvengano automaticamente non appena la DDT di consegna venga stampata. Questo consente di saltare lo step dello scarico dei  DDT di consegna di conto lavoro

**Blocca inserimento documento in date festive**: se attivo, impedisce l'inserimento di un ordine, di una DDT e di un rientro di conto lavoro in date festive.

**Costo zero in assenza di listino**: se attivo, consente l'inserimento di un articolo nel tab *Articoli di Produrre* dell'ordine di conto lavoro senza che la procedura inserisca come prezzo unitario di lavorazione il costo ultimo dell'articolo preso dalla sua anagrafica; quindi viene inserito un prezzo unitario uguale a zero.

**Controllo terzista di riferimento per gli articoli**: se attivo, consente all'utente di fare in modo che la procedura di creazione degli ordini di conto lavoro controlli se l'articolo che si sta inserendo nel tab *Articoli da Produrre* abbia, come fornitore preferenziale, il terzista inserito nella testata dell'ordine stesso.

**Disponibilità obbligatoria**: se attivo, impedisce l'inserimento di materiali in ordini di conto lavoro nel caso di mancata disponibilità alla data dell'eventuale consegna al terzista.

**Proposta dell'ultimo prezzo di lavorazione effettuato**: se attivato, consente di far proporre nell'ordine di conto lavoro, nella casella del prezzo unitario di lavorazione del tab *Articoli da Produrre*, il prezzo dell'ultimo ordine di conto lavoro emesso per quell'articolo per lo stesso terzista.

**Valor. lavorazione materiali a costo**: permette di definire se la valorizzazione della lavorazione dei materiali debba avvenire a costo ultimo o a costo medio. Quindi si tratta di un metodo per decidere se i materiali utilizzati dai terzisti debbano essere imputati alla lavorazione utilizzando il  costo ultimo oppure il  costo medio tra quelli inseriti nell'anagrafica dell'articolo stesso. Inoltre, è possibile, selezionando i flag *Lotti* e/o *Commessa di produzione*, andare a proporre come costo del materiale il costo ultimo/Medio/standard per il relativo lotto e/o commessa di produzione in base ai flag attivati.    

**Versione**: consentono di selezionare la versione della distinta base.

**Dati dei materiali proposti negli ordini di conto lavoro** è costituita a sua volta da altre 4 sezioni:

1. **Considera le disponibilità provenienti da**: è possibile decidere se considerare o no le disponibilità provenienti da Conto Lavoro / Produzione / Acquisti / Magazzino / Vendite; ciascuno di questi flag sta a indicare la volontà da parte dell'utente di fare in modo che la procedura di creazione dell'ordine di conto lavoro consideri la disponibilità dei materiali in base alle informazioni che provengono dalle singole aree applicative di ERP. Quindi per esempio se l'utente sceglie di attivare il flag solo su Acquisti e non su Vendite, significa che saranno considerate le disponibilità provenienti dagli ordini fornitori, dalle DDT e fatture di acquisto e dalle richieste di acquisto e non quelle provenienti da ordini clienti, DDT e fatture di vendita;

2. **Prodotti finiti** (flag): permette di scegliere, al momento dell'inserimento di un articolo nel tab *Articoli da produrre* dell'ordine di conto lavoro, se considerare le quantità degli articoli stessi in base al lotto economico, e/o considerare eventualmente anche i multipli del lotto;

3. **Materiali**: permette di scegliere, al momento dell'inserimento di un articolo nel tab *Articoli da produrre* dell'ordine di conto lavoro, se considerare per i materiali da consegnare le quantità degli articoli stessi in base al lotto economico, e/o considerare eventualmente anche i multipli del lotto;

**Rigenerazione materiali nell'aggiornamento dell'articolo**: se il flag è attivato, ogniqualvolta si effettui una modifica sulla riga articolo presente nel tab *Articoli da produrre* dell'ordine di conto lavoro la procedura rigenera le informazioni relative ai materiali da consegnare e da impiegare da inserire nell'ultimo tab dell'ordine stesso;

4. **Magazzini**: permette di scegliere se considerare i magazzini in base al tipo di DDT di rientro o al tipo di DDT consegna, invece che utilizzare le impostazioni inserite nelle apposite combo delle voci *Consegne materiali a terzisti* e *Rientro prodotto*.

### Magazzini

**Consegne materiali a terzisti W.i.P.**   
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per lo scarico dei materiali destinati ai terzisti nel caso in cui sia utilizzata la gestione del magazzino W.I.P., attivabile nei [Parametri ordini produzione](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro). In questo caso, tutti gli ordini di conto lavoro creati dal *Rilascio ordini pianificati* o direttamente dall'ordine di produzione useranno questo magazzino e casuale per lo scarico dei materiali inseriti nel tab [Materiali da Consegnare](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/materials) dell'ordine di conto lavoro.    

**Consegne materiali a terzisti**   
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per lo scarico dei materiali destinati ai terzisti. Quindi il magazzino impostato è il magazzino da cui saranno scaricati i materiali inseriti nel tab [Materiali da Consegnare](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/materials) dell'ordine di conto lavoro. Questi saranno impiegati solo negli ordini di conto lavoro creati manualemente nel caso in cui sia attiva la gestione del magazzino W.I.P., mentre se la gestione del magazzino W.I.P. non è attiva verranno considerate in tutti i casi.     

**Consumo materiali impiegati**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per lo scarico dei materiali che i terzisti hanno utilizzato. Quindi il magazzino impostato è il magazzino da cui saranno scaricati i materiali inseriti nel tab Materiali dell'ordine di Rientro di conto lavoro. Fare link quando verrà creato l'articolo.   

**Carichi materiali a terzisti**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per il carico dei materiali destinati ai terzisti. Quindi il magazzino impostato è il magazzino su cui saranno caricati i materiali inseriti nel tab Materiali da Consegnare dell'ordine di conto lavoro. Questi dati vengono ripresi dalla causale di contropartita inserita nella tabella delle causali in corrispondenza della causale che effettua lo scarico dei materiali destinati ai terzisti (cioè la causale impostata nell'apposita combo box della sezione *Consegne materiali a terzisti*).

**Consegne materiali tra terzisti**   
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per lo spostamento dei materiali da un terzista ad un altro.     

**Rientro articolo W.I.P.**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per il carico dei semilavorati che i terzisti hanno realizzato, questa verrà usata nel caso di tutte le fasi esterne che non siano l'ultima fase del ciclo di lavoro. Quindi il magazzino impostato è il magazzino su cui saranno caricati gli articoli inseriti nel tab Articoli dell'Ordine di Rientro di conto lavoro.

**Rientro articolo finito**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per il carico dei prodotti finiti / semilavorati che i terzisti hanno realizzato, questa verrà usata nel caso in cui la fase esterna sia l'ultima fase del ciclo di lavoro. Quindi il magazzino impostato è il magazzino su cui saranno caricati gli articoli inseriti nel tab Articoli dell'Ordine di Rientro di conto lavoro.

**Materiale reso**  
In questa sezione vengono impostati il magazzino e la relativa causale che devono essere considerati per il carico dei resi. Quindi il magazzino impostato è il magazzino su cui saranno caricati gli articoli inseriti nel tab Materiali Impiegati del Rientro di conto lavoro e a cui è stata associata una quantità resa.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).