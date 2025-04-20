---
title: Ordini di Produzione
sidebar_position: 3
---

Normalmente gli ordini di produzione vengono generati automaticamente dalla procedura di *Rilascio ordini di pianificati*.
Per creare un ordine di produzione manualmente, è necessario creare prima l'ordine pianificato di produzione e poi rilasciarlo tramite la procedura dedicata. 

## Testata ordine di produzione 

In testata vengono riepilogati tutti i dati riguardanti l'ordine di produzione, come: numero, lotto e anno, i dati della commessa e del cliente di riferimento, il progetto collegato, la data inizio e fine, le informazioni relative all’articolo da produrre, con versione distinta base e ciclo, quantità da produrre e prodotta.
È anche possibile indicare il magazzino e la causale, che saranno usate per il carico del prodotto finito a magazzino; queste avranno priorità massima rispetto a tutti gli altri parametri come spiegato in dettaglio nei [Parametri di produzione](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

*Pulsante specifico*:  

> **Completamento dati ordine**: richiama la procedura che consente di inserire e/o aggiornare, per l'articolo inserito nell'ordine di produzione, tutti i dati relativi a materiali, fasi, attrezzaggio, attrezzature, attributi e note varie, riprendendoli da distinta base e ciclo di lavorazione dell'articolo;
> **Ricalcola data inizio**: Richiama la procedura che consente di eseguire un aggiornamento della data inizio dell'ordine di produzione ed eventualmente delle fasi di lavorazione dello stesso a seguito di una modifica dei tempi di lavorazione e/o della quantità da produrre dell'articolo oggetto di ordine di produzione;  
> **Genera distinta base**: consente di generare la distinta base sulla base dei dati inseriti al'interno dell'ordine di produzione o di aggiornare i dati esistenti con quelli inseriti nell'ordine;  
> **Generazione ciclo di lavoro**: permette di creare il ciclo di lavoro dell'articolo basandosi sui dati inseriti nell'ordine, o di aggiornare i dati esistenti con quelli inseriti nell'ordine; 

*Campi specifici*: 

**Stato**: indica lo stato dell'ordine di produzione: *Lanciato* è lo stato iniziale dell'ordine di produzione appena generato dalla procedura di rilascio ordini pianificati, mentre *Esecutivo* è lo stato da assegnare all'ordine per poi poter procedere con le segnalazioni di produzione.     

**Tassativo**: abilitando questo flag, si rende l’ordine di produzione tassativo, quindi, la [Schedulazione a capacità finita](/docs/planning/ms-master-scheduling/finite-capacityscheduling) non lo andrà a riposizionare nel tempo e lo manterrà fisso in quelle date. Inoltre, questo verrà preso anche in considerazione dalla procedura [M.R.P.](/docs/planning/ms-master-scheduling/mrp) quando è attivo il flag *Differenzia domanda di produzione confermata*.

## Materiali

In questo tab vengono riportati i materiali di primo livello della distinta base relativa al prodotto finito da produrre, ma l'utente può modificare i dati e/o aggiungere ulteriori materiali alla lista componenti dell'ordine di produzione.  
Per importare i dati direttamente dalla distinta base dell'articolo, è necessario cliccare sul pulsante **Completamento dati ordine** presente nella ribbon bar.

*Pulsanti specifici*:

> **Inserisci materiale**: consente di inserire un nuovo materiale nella griglia;  
> **Cancella materiale**: consente di cancellare i materiali inseriti nella griglia. 

*Campi specifici*:

**Classe**: Indica la classe dell'articolo;       
**Codice articolo**: indica il codice dell'articolo;          
**Variante**: in questo campo viene inserita l'eventuale variante dell'articolo;           
**C/L**: in questo campo viene ripreso il flag presente nei *Parametri MRP* dell'articolo chiamato *considera in CL* ovvero indica se l'articolo deve essere incluso come materiale negli ordini di conto lavoro;      
**UM**: in questo campo viene riportata l'unità di misura principale dell'articolo;        
**Unità di misura**: in questo campo si inserisce l'eventuale unità di misura alternativa dell'articolo;  
**Data impiego**: coincide con la data inizio prevista della fase dell'ordine di produzione a cui è associato quel materiale; se non è associato a nessuna fase coincide con l'inizio della prima fase del ciclo;      
**Quantità impiego**: rappresenta la quantità unitaria necessaria per questo articolo (prevista dalla [Distinta base](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)) che può essere comunque modificata;  
**Quantità totale**: rappresenta la quantità che si ottiene moltiplicando la *Quantità d'impiego* per la *Quantità da produrre*;      
**Quantità alternativa**: rappresenta la quantità totale ma espressa nell'unità di misura alternativa;        
**Quantità prelevata**: rappresenta la quantità prelevata tramite [Lista di prelievo](/docs/production/pp-production-in-progress/picking-materials-list);      
**Fissa / Variabile**: indica se la quantità del materiale sia fissa o variabile, questo viene ereditato dalla [Distinta base](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management);              
**Percentuale scarto**: in questa casella viene inserita o ripresa dalla [Distinta base](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) l'eventuale percentuale di scarto per questo articolo;  
**Fase / Sotto Fase**: con un doppio click si apre un help fasi di lavorazione dal quale si può selezionare la relativa fase e sotto fase e quindi assegnare il materiale selezionato ad una determinata fase di lavorazione dell'articolo;     
**Magazzino**: indica il magazzino dal quale verrà scaricato questo articolo;       
**Causale**: indica la causale di magazzino con quale verrà scaricato questo articolo;    
**Priorità**: qui viene visualizzata la priorità del componente, se presente, inserita in [Distinta base](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management). Essa può essere modificata, come tutti gli altri dati presenti in questa griglia;      
**Quantità disponibile**: in questo campo compare la quantità disponibile dell'articolo alla data di impiego;      
**Da dichiarare su mobile**: se abilitato, verrà dichiarato su mobile.

## Fasi

In questo tab vengono riportate le fasi del ciclo di lavoro relativo al prodotto finito da produrre, ma l'utente può modificare i dati e/o aggiungere ulteriori fasi all'ordine di produzione.  
Per importare i dati direttamente dal ciclo di lavorazione dell'articolo, è necessario cliccare sul pulsante **Completamento dati ordine** presente nella ribbon bar.
Nell'ordine di produzione è possibile variare una fase da interna ad esterna, quindi sarà possibile inserire anche il terzista e al salvataggio dello stesso la procedura creerà l'ordine di conto lavoro. Inoltre, nel caso in cui una fase esterna venga convertita in interna, la procedura eliminerà automaticamente l'ordine di conto lavoro collegato.

*Pulsanti specifici*:
> **Inserisci fase**: consente di inserire una nuova fase nella griglia;  
> **Cancella fase**: consente di cancellare le fasi inserite nella griglia. 

*Campi specifici*:

**Codice fase / Fase / Sotto Fase**: con un doppio click si apre il relativo help fasi di lavorazione dal quale si può selezionare la relativa fase e sottofase;  
**Controllo qualità**: se attivato, questo flag indica che questa fase è soggetta a controllo qualità e nel tab specifico si può indicare il *Piano di controllo* che verrà utilizzato per verificare l'articolo a dichiarazione di produzione effettuata;     
**Fase produttiva**: se attivo, indica che la fase è produttiva e si può procedere all'inserimento delle segnalazioni di produzione (quindi attivandolo si vuole che la produzione per questa fase venga rilevata); se non attivo, non sarà possibile dichiarare la fase stessa;         
**Fase movimentabile**: se attivo, indica che nel momento in cui si va a rilevare la fase di produzione si creano anche dei movimenti di magazzino; questo significa che procedendo con la segnalazione di produzione di procederà anche al carico del prodotto finito a magazzino e allo scarico della materia prima impiegata per la produzione in quella fase;     
**Centro di lavoro**: indica il centro di lavoro, ovvero la macchina in cui si svolgerà quella specifica fase;     
**Tempo fisso**: se abilitato, indica che il tempo di quella fase è fisso e quindi non variabile in base alla quantità; questo viene ereditato dal centro di lavoro inserito;     
**Quantità fase**: indica la quantità totale di pezzi da produrre in quella fase;        
**Data inizio / fine prevista**: si tratta delle date di inizio e fine della relativa fase; cambiando le Date previste di inizio e fine lavorazione vengono automaticamente modificate anche quest'ultime. Esse vengono calcolate in base i tempi inseriti nelle fasi di lavorazione, e più precisamente in base al maggiore tra il tempo operaio totale e il tempo macchina totale per la fase selezionata;          
**Totale tempo macchina**: indica il tempo macchina totale, dato dal prodotto del *tempo macchina* per il *numero di macchine*;       
**Tempo macchina**: indica il tempo lavorazione dei quella macchina per quella fase;      
**Numero macchine**: indica il numero di macchine utilizzate in quella fase;     
**Totale tempo operaio**: indica il tempo operaio totale, dato dal prodotto del *tempo operaio* per il *numero di operai*;     
**Tempo operaio**: indica il tempo di lavorazione della manodopera per quella fase;        
**Numero operai**: indica il numero di operai impiegati in quella fase;     
**Fase / Sotto fase sovrapposta**: in questi due campi, nel caso di sovrapposizione, si andrà ad indicare la fase che si intende sovrapporre alla fase selezionata;
**Ubicazione**: permette di associare anche un'ubicazione di magazzino alla fase; questo significa che tutti gli articoli impiegati in quella fase saranno presenti in quell'ubicazione;     
**Descrizione terzista**: con doppio click sulla casella si apre il help per poter selezionare il conto e sottoconto del relativo terzista. Questa casella è attiva solo nel caso in cui la fase sia designata come fase *Esterna*. Da notare che il *terzista* viene anch'esso ripreso dalla fase di lavorazione inserita nel ciclo di lavorazione dell'articolo;
**Ordine conto lavoro creato**: indica che è stato creato l'ordine di conto lavoro. Funziona solo per le fasi esterne;        
**Descrizione centro lavoro**: indica la descrizione del centro di lavoro della fase;       
**Stampa definitivo**: indica che è stato stampato il [Foglio di lavoro](/docs/production/pp-production-in-progress/reports/worksheet) in maniera definitiva;   
**Data stampa foglio di lavoro**: indica la data di stampa del [Foglio di lavoro](/docs/production/pp-production-in-progress/reports/worksheet) in maniera definitiva;      
**Numero progressivo foglio lavoro**: indica il numero di progressivo del [Foglio di lavoro](/docs/production/pp-production-in-progress/reports/worksheet) stampato in maniera definitiva.      

### Fasi - Proprietà

Nel tab **Proprietà** sono visualizzati i seguenti dati relativi alla fase selezionata in griglia:

**Descrizione fase**: indica la descrizione della fase e sottofase selezionata;      
**Tipo**: in questa combo è possibile impostare il tipo di lavorazione (interna o esterna);  
**Sovrapposizione**: tramite questa combo inserisco la tipologia di un'eventuale sovrapposizione tra fasi. Possiamo avere sovrapposizione *Totale* (in questo caso la fase in oggetto è sovrapposta totalmente alla fase indicata), *A pezzi* (in questo caso è necessario indicare dopo quanti pezzi prodotti da questa fase avrà inizio la fase successiva), *A tempo* (in questo caso è necessario indicare dopo quanti minuti da quando è iniziata la fase indicata avrà inizio la fase successiva);  
**UM Tempi**: in questa combo box compare l'Unità Misura Tempi della Fase; si può decidere di gestire i tempi della fase in secondi, minuti, ore e giorni. Di solito si gestiscono a minuti i tempi delle fasi interne e a giorni quelli delle fasi esterne, ma ovviamente dipende molto dalla tipologia di azienda per cui si sta impostando il lavoro;  
**Macchina**: in questa combo può essere selezionato il codice (e descrizione) della relativa macchina. Essa viene proposta in automatico, ripresa dal centro di lavoro che è stato precedentemente inserito nella griglia;     
**Sito produttivo**: indica il sito di produzione nel quale verrà prodotto l'articolo; questo viene ereditato dalla commessa di produzione;       
**Gruppo manodopera**: in questa combo può essere selezionato il codice (e descrizione) del relativo gruppo manodopera. Essa viene proposto in automatico, ripreso dal centro di lavoro che è stato precedentemente inserito nella griglia;  
**Quantità pezzi per fase**: indica il numero di pezzi prodotti per ciascuna esecuzione di quella fase;         
**Valore**: qui si indica il valore dell'eventuale sovrapposizione, utilizzando i criteri specificati sopra;  
**Utilizzo**: se il flag è attivato, significa che si vuole che il tempo di attesa/coda aumenti il tempo di impegno del Centro di Lavoro su quella fase;  
**Tempo di attesa o coda**: indica il tempo che è necessario attendere alla fine dell’esecuzione della fase prima di poter rieseguirla. Inoltre, attivando il flag **Utilizzo** questo tempo di attesa verrà considerato come un ulteriore impegno del tempo del Centro di Lavoro su quella fase.

### Fasi - Extra Data

Contiene gli eventuali extra data relativi alla fase selezionata.

### Fasi - Documenti allegati

Permette di allegare dei documenti alla fase selezionata, i quali saranno poi visibili anche nel [MES](/docs/production/mes/mes-intro).

## Attrezzaggio

In questo tab è possibile definire i tempi relativi all'attrezzaggio della fase selezionata nel tab precedente.      
È importante ricordare che i dati inserenti al centro di lavoro, macchina e manodopera, vanno inseriti solamente se sono differenti da quelli usati per la fase, altrimenti se vuoti verranno automaticamente considerati quello della fase principale.  

*Campi specifici*:

**Fase / Sottofase / Descrizione**: in questi campi vengono visualizzate le informazioni relative alla fase che è selezionata nel tab *Fasi*;  
**Tipo**: indica la tipologia della fase (interna o esterna);  
**Tipo sovrapposizione**: indica l'eventuale tipologia della sovrapposizione;  
**UM Tempi**: indica l'unità di misura temporale della fase;  
**Centro di Lavoro**: in questi campi viene inserito il codice (e relativa descrizione) del Centro di Lavoro impostato per l'attrezzaggio; (da utilizzare solo se il centro di lavoro di attrezzaggio è diverso dal centro di lavoro utilizzato nella fase selezionata);      
**Macchina**: in questi campi viene inserito il codice (e relativa descrizione) della macchina per l'attrezzaggio; (da utilizzare solo se la macchina utilizzata per l'attrezzaggio è diversa dalla macchina utilizzata nella fase selezionata);        
**Gruppo Manodopera**: in questi campi viene inserito il codice (e relativa descrizione) del Gruppo manodopera per l'attrezzaggio; (da utilizzare solo se il gruppo manodopera utilizzato per l'attrezzaggio è diverso dalla gruppo manodopera utilizzata nella fase selezionata);         
**Valore**: indica il valore dell'eventuale sovrapponibilità;  
**Centro di lavoro**: in questi campi viene visualizzato il codice e la descrizione del relativo Centro di Lavoro della fase selezionata;  
**Data inizio**: viene visualizzata la data d'inizio della fase selezionata nel tab *Fasi*;  
**Data fine**: viene visualizzata la data di fine della fase selezionata nel tab *Fasi*;  
**Tempo attrezzaggio**: viene inserito il tempo dell'attrezzaggio. Si tratta di un tempo fisso, che non varia al variare delle quantità da produrre nella fase selezionata;  
**Tempo riattrezzaggio**: viene inserito il tempo del riattrezzaggio. Si utilizza nel caso in cui sia necessario riattrezzare il centro di lavoro tra un'esecuzione e l'altra della fase stessa e viene sommato al tempo attrezzaggio;           
**Num. macchine**: si indica il numero di macchine impiegate per l'attrezzaggio;  
**Num. operai**: si indica il numero di operai impiegati per l'attrezzaggio.

## Attrezzature

In questo tab, costituito principalmente da una griglia, è possibile definire quali e quante attrezzature dovranno essere utilizzate nella produzione della fase selezionata nel tab *Fasi*. 

*Campi specifici*:

**Sequenza**: in questo campo è possibile indicare la sequenza con cui devono essere utilizzate le attrezzature;  

**Attrezzature**: con questa combo box è possibile richiamare il codice dell'attrezzatura, ripreso dall'apposita tabella [Attrezzature](/docs/configurations/tables/production/equipments);  
**Classe/Codice articolo**: in questi campi è possibile indicare la classe e il codice dell'articolo (l'help filtra automaticamente solo gli articoli che sono identificati come *Attrezzature* nel campo *Natura Articolo* dell'anagrafica di magazzino);  
**Variante**: rappresenta la variante dell'articolo;  
**Quantità**: rappresenta la quantità dell'articolo.

## Controllo qualità

In questo tab, costituito principalmente da una griglia, è possibile visualizzare i dettagli delle prove pianificate di [controllo qualità](/docs/quality/quality-intro) per la fase / sottofase.

## Nota fase

In questo tab viene visualizzata la nota legata alla fase di lavorazione selezionata nel tab *Fasi*. Essa è modificabile dall'utente contestualmente all'ordine di produzione in oggetto.

## Istruzioni operative

In questo tab è possibile allegare e visualizzate le *Istruzioni operative* legate alla fase di lavorazione selezionata nel tab *Fasi*. Queste saranno visualizzabili anche in [Fluentis MES](/docs/production/mes/mes-intro). 

## Personale

In questo tab è possibile inserire gli operatori che dovranno svolgere le singole fasi del ciclo produttivo.    

## Extra Data

Per una descrizione approfondita sugli extra data si rimanda all'articolo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).