---
title: Parametri Ordini di Produzione
sidebar_position: 1
---

La form si apre tramite il percorso **Parametri > Produzione > Parametri Ordini di Produzione**. Attraverso questa finestra vengono settati tutti i parametri che riguardano la movimentazione degli articoli tramite le procedure legate all'area produzione, nonché alcuni parametri che permettono di decidere le modalità di gestione di alcune parti dell'area produzione.

### Generale

**Gestione automatica dei lotti e dei serial number**: se attivo, propone automaticamente i lotti e/o i numeri di serie dei materiali che vengono utilizzati nel corso della produzione, direttamente all'interno delle apposite griglie poste in relazione alla griglia dei materiali utilizzati della segnalazione di produzione. Diversamente, l'utente dovrà impostare manualmente sia i lotti, sia i numeri di serie degli articoli utilizzati che abbiano questo tipo di gestione; ricordiamo che la gestione a lotti o SN viene impostata all'interno dell'*Anagrafica articolo* nel tab [Lotti e SN](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) selezionando il tipo di gestione desiderata.

**Gestione doppia unità di misura**: se attivo, permette all'utente di gestire la doppia unità di misura all'interno delle segnalazioni di produzione, quindi sia per gli articoli prodotti sia per i materiali utilizzati;

**Stesso lotto per scarti articoli/scarti materiali**: se attivo, permette all'utente di decidere che il lotto caricato nel magazzino scarti sia identico al lotto che è stato prodotto (nel caso di scarto del prodotto finito, dunque nel caso del primo dei 2 flag) oppure al lotto che è stato utilizzato (nel caso di scarto del materiale, dunque nel caso del secondo dei 2 flag);

**Divisione ordine se i lotti materiali non sono sufficienti**: se attivo, permette all'utente di fare in modo che la procedura di *Rilascio ordini di produzione* controlli se le quantità di materiale da scaricare automaticamente (quindi solo in caso di tipo prelievo automatico o manuale ma con gestione WIP) siano sufficienti nel magazzino da cui devono essere prelevate; se non lo sono, la procedura divide l'ordine di produzione in 2 ordini diversi che avranno lo stesso numero/anno ma lotto diverso (il primo avrà il lotto 0, il secondo il lotto 1; il primo sarà quello per cui i materiali presenti a magazzino sono sufficienti);

**Cambia data commessa su cambio data ordine di produzione**: se attivo, permette all'utente di fare in modo che al cambio della data fine dell'ordine di produzione venga modificata automaticamente anche la data fine della commessa, sempre che l'articolo oggetto dell'ordine di produzione sia lo stesso oggetto della commessa di produzione; quindi l'ordine di produzione deve essere di livello 0;

**Calcolo costo produzione per avanzamenti**: se attivo, permette all'utente di fare in modo che man mano che si registrano gli avanzamenti di produzione il costo della registrazione di magazzino venga incrementato di volta in volta del costo effettivo calcolato in base al tempo effettivo dichiarato nella segnalazione moltiplicato per il costo orario di macchina e/o gruppo manodopera, quindi per il costo orario del centro di lavoro utilizzato;

**Stampa Fogli di lavoro per Ordini Lanciati**: è un default che viene impostato sulla relativa form di lancio di stampa e quando viene fatto il lancio degli ordini escono in automatico la stampa degli ordini;

**Determinazione tempi in automatico nelle segnalazioni**: se attivo, calcola automaticamente il tempo macchina e il tempo operaio in base agli orari delle segnalazioni. Diversamente, l'utente dovrà impostare manualmente i detti tempi sulla riga della segnalazione di produzione; 

**Proposta automatica U.M. alternativa**: se attivo, propone automaticamente l'unità di misura alternativa impostata per l'articolo all'interno della segnalazione di produzione. Solitamente, se viene attivato il flag **Gestione doppia unità di misura**, si attiva per comodità anche questo flag che diventa editabile solamente se si è attivato il flag **Gestione doppia unità di misura**;

**Stesso lotto per scarti materiali**: se abilitato, i materiali scartati mantengono lo stesso lotto dei materiali consumati;

**Registrazione automatica segnalazioni**: se attivo, questo flag indica che appena inserisco la segnalazione questa viene anche registrata automaticamente;

**Associa lotto per lista prelievo**: se attivo, questo flag indica che quando si crea una lista di prelievo tramite la relativa procedura, per i materiali gestiti a lotti il sistema va a scegliere i materiali che sono da prelevare per quel/quegli ordini di produzione che ho selezionato; se non viene attivato vuol dire che l'utente dovrà andare a dichiarare manualmente quali sono i lotti che sono stati prelevati;

**Aggiorna materiali utilizzati nell’ordine di produzione**: se attivo, al variare della quantità dichiarata in una dichiarazione di produzione, verrà mostrato un messaggio che chiede di ricalcolare o meno le quantità utilizzate dei materiali; se non è attivo, il ricalcolo dei materiali avviene automaticamente;

**Abilita controllo presenze nel MES**: se attivo, abilita il controllo presenze all'interno di Fluentis MES, Il controllo si basa sulla tabella *Fluentis.HR_BadgeRecords*.       
In questa i campi obbligatori per il controllo sono: *HRBR_Resource_HRR_Id*, *HRBR_RecordDateTime*, *HRBR_BadgeRecordType_HRBRTY_Id*, che può assumere i valori E = Ingresso o U = Uscita.
Per ogni riga ci può essere solo l’orario di entrata o quello di uscita, quindi in giorno ci saranno 4 righe per ogni utente, ad esempio:     
- 2024-01-02 08:30:00.000 - tipo E 
- 2024-01-02 12:30:00.000 - Tipo U 
- 2024-01-02 14:00:00.000 - Tipo E 
- 2024-01-02 18:00:00.000 - Tipo U      
I dati devono essere importati all'interno di questa tabella partendo dai dati del timbratore utilizzato.

**Mostra la versione per componente dentro distinta base**: se attivo, abilita il campo della versione nel tab componente della distinta base.

Ci sono infine altre quattro sezioni: **Fogli di lavoro Gestiti per**, **Periodo Analisi**, **Valorizzazione materiali a costo**, **Proposta sequenza fase**.

**Fogli di lavoro gestiti per**: la sezione consente, tramite l'attivazione di uno dei radio button, di scegliere il tipo di raggruppamento da utilizzare durante la stampa del foglio di lavoro (che contiene i parametri che indicano come deve essere prodotto quel materiale). Si tratta comunque di una proposta, che può essere poi modificata all'interno della maschera di stampa del foglio di lavoro stesso;

**Periodo di Analisi**: la sezione consente, tramite l'attivazione di uno dei radio button, di scegliere il periodo di filtraggio degli ordini di produzione che dovranno essere visualizzati nella finestra della stampa del foglio di lavoro (settimanale, giornaliero o ogni X giorni);

**Valorizzazione materiali a costo**: la sezione consente, tramite l'attivazione di uno dei radio button, di scegliere il tipo di costo per la valorizzazione dei materiali (costo ultimo/medio alla data del versamento ovvero della mia segnalazione di produzione o il costo standard). Inoltre, è possibile, selezionando i flag *Lotti* e/o *Commessa di produzione*, andare a proporre come costo del materiale il costo ultimo/Medio/standard per il relativo lotto e/o commessa di produzione in base ai flag attivati.    

**Proposta sequenza fase**: la sezione consente di scegliere, durante la creazione di un ciclo di lavoro, il numero di sequenza della fase che viene proposto, che può essere preso dal numero di sequenza della fase standard oppure come progressivo dell’ordine di inserimento, indicando anche il valore di step.

### Magazzini

La form è dedicata all'inserimento dei magazzini  e delle relative causali che regolano le movimentazioni degli articoli tramite le procedure legate alla produzione; la stessa schermata viene riproposta nei *Parametri MRP* dell'articolo nel tab [Magazzini](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), con la differenza che i magazzini impostati nei *Parametri di produzione* sono considerati dati generali validi di default per gli articoli; se si vanno ad impostare per un articolo in particolare dei magazzini diversi nei *Parametri MRP* dell' articolo, il sistema andrà a dare <u>priorità ai parametri</u> che trova settati in quest'ultima finestra per i carichi e scarichi dei materiali legati alla produzione di questo articolo.

In questo tab quindi, si potranno impostare i magazzini relativi alle *Materie Prime*, ai *Semilavorati*, ai *Prodotti finiti* e ad eventuali *Scarti* con le relative causali di carico e scarico.

Per poter impostare uno di quest magazzini sarà sufficiente selezionare tramite le relative combo box il magazzino e le causali (precodificati nelle rispettive tabelle *Magazzini* e *Causali*) che si vogliono impostare.

Oltre a questi magazzini principali vi sono i magazzini W.I.P. (gestione non molto utilizzata) che si attivano selezionando la voce W.I.P. e procedendo alla selezione all'interno della combo box dei magazzini e delle causali come viene fatto per gli altri magazzini.

Per magazzini *W.I.P.* (Work in Progress) si intendono dei magazzini di transizione, in cui la merce transita nel momento in cui l'ordine di produzione del prodotto finito o del semilavorato viene rilasciato. Quando vengono settati questi magazzini il tipo di prelievo del materiale deve essere *Manuale*, altrimenti se fosse un tipo di prelievo *Automatico* lo scarico dei materiali avverrebbe in automatico nel momento del rilascio dell'ordine di produzione. Nel caso dei magazzini W.I.P. il materiale al momento del rilascio viene quindi spostato in questi magazzini e viene scaricato durante la segnalazione di produzione dell'ultima fase di lavorazione dell'articolo dell'ordine di produzione oppure durante la fase di lavorazione a cui il materiale è associato.

Diversamente, se il tipo di prelievo del materiale è *Con Lista*, allora mentre lo spostamento del materiale al magazzino W.I.P. avviene nello stesso modo rispetto al tipo di prelievo manuale, lo scarico dal W.I.P. avviene tramite la procedura della Lista di prelievo.     

Nello specifico, i magazzini e le causali inserite nella sezione *W.I.P.* vengono impiegati nei movimenti di carico e scarico delle segnalazioni di tutte le fasi di un ciclo di lavoro tranne che per l'ultima fase.     
Nel caso dell'ultima fase vengono usate magazzini e causali della sezione *Prodotti finiti* se l'ordine di produzione è di livello 1 (quindi relativo al prodotto finito), oppure vengono usate quelle della sezione *Semilavorati* se l'ordine di produzione non è di livello 1 (quindi è un semilavorato) e il flag *W.I.P.* è disabilitato; altrimenti se il flag *W.I.P.* è attivo e l'ordine di produzione non è di livello 1 vengono usate quelle della sezione *Semilavorati W.I.P.*     

:::note Nota
Quando viene attivato il flag *W.I.P.* nei *Parametri ordini produzione*, automaticamente nella creazione degli ordini di conto lavoro (dal *Rilascio ordini pianificati* o direttamente dall'ordine di produzione), vengono considerate per i materiali da inviare al terzista il magazzino e la causale presenti nei  [Parametri conto lavoro](/docs/configurations/parameters/production/subcontractor-parameters) alla sezione *Consegne materiali a terzisti W.I.P.*; quindi in questo caso i materiali da inviare ai terzisti saranno prelevati direttamente dal magazzino *W.I.P.*    
:::    

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
