---
title: Ordine pianificato
sidebar_position: 4
---

:::important A cosa serve
La funzione degli **Ordini Pianificati** nel sistema Fluentis è una componente chiave per la gestione della pianificazione della produzione e degli acquisti. Gli ordini pianificati possono essere generati automaticamente attraverso la schedulazione generale o tramite l'elaborazione MRP (Manufacturing Resource Planning), oppure creati manualmente dall'utente. Questi ordini vengono utilizzati per gestire le necessità future delle risorse e dei materiali in modo preventivo e organizzato.

Nella piattaforma Fluentis, gli ordini pianificati possono essere relativi a diverse tipologie: produzione, acquisto, e conto lavoro; questi vengono visualizzati con colori diversi nella griglia, a seconda della loro tipologia. Lo scopo principale dell'utilizzo degli ordini pianificati è ottimizzare i processi produttivi e di approvvigionamento, garantendo che le risorse necessarie siano disponibili quando richiesto e che le operazioni possano procedere senza interruzioni.
:::

Normalmente gli ordini pianificati vengono generati automaticamente dalla procedura di *Pianificazione generale* oppure dall'*Elaborazione MPR*, ma l'utente ha la possibilità di generare manualmente un ordine pianificato, sia esso di acquisto, di produzione o di conto lavoro.

La form si apre tramite:  
 -  il percorso **Pianificazione > MS Master scheduling > Ordini Pianificati > Nuovo Ordine Pianificato** 

oppure tramite 

 - il pulsante **Inserisci Ordine** che si trova nella form [Ricerca Ordini Pianificati](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Testata ordine pianificato 

La form si compone di una parte contenente le informazioni di testata e da una serie di tab sottostanti.          
In automatico vengono inseriti *numero*, *anno* e *data*, l’indicazione se si tratti di un *ordine di acquisto, di produzione o conto lavoro* ed il *tipo di ordine pianificato*. Quest’ultimo e la numerazione sono presi direttamente dai dati inseriti nella tabella [Tipo documenti](/docs/configurations/tables/production/documents-types/) presente tra le tabelle di produzione. Allo stesso tempo sono inseriti anche il *numero del ciclo di lavoro* di default e la *versione* da utilizzare.                   
I dati obbligatori da inserire sono: l’*articolo* con eventuale variante, e la *data di inizio e fine*; dopo di che sarà sufficiente inserire la *quantità* da produrre / acquistare.            

*Pulsante specifico*:  

> **Completamento dati ordine**: richiama la procedura che consente di inserire e/o aggiornare, per l'articolo inserito nell'ordine pianificato, tutti i dati relativi a materiali, fasi, attrezzaggio, attrezzature, attributi e note varie, riprendendoli da distinta base e ciclo di lavorazione dell'articolo e **validi alla data di esecuzione del completamento dati**.      
> **Ricalcola data inizio**: Richiama la procedura che consente di eseguire un aggiornamento della data inizio dell'ordine pianificato ed eventualmente delle fasi di lavorazione dello stesso a seguito di una modifica dei tempi di lavorazione e/o della quantità da produrre dell'articolo oggetto di ordine pianificato;  
> **[Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)**: consente di aprire la finestra relativa ai parametri MRP dell'articolo;  
> **Genera distinta base**: consente di generare la distinta base sulla base dei dati inseriti all'interno dell'ordine di produzione o di aggiornare i dati esistenti con quelli inseriti nell'ordine;  
> **Generazione ciclo di lavoro**: permette di creare il ciclo di lavoro dell'articolo basandosi sui dati inseriti nell'ordine, o di aggiornare i dati esistenti con quelli inseriti nell'ordine;  
> **[Distinta base](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)**: permette di aprire la schermata relativa alla distinta base dell'articolo;  
> **[Cicli di lavoro](/docs/erp-home/registers/production/routes/new-route)**: permette di visualizzare il ciclo di lavoro e le relative fasi di produzione dell'articolo.  

*Campi specifici*: 

**Tipo Ordine Pianificato**: viene proposto il tipo predefinito come tipo di default;  
**Ordine tassativo**: se attivo, questo flag indica che l'ordine pianificato assume un' importanza prioritaria e non permette all'utente di spostare l'ordine stesso impostando una data maggiore rispetto alla data fine prevista da schedulazione generale;  
**Priorità dell'ordine**: permette di impostare la priorità che viene data a questo ordine;  
**Generato da domanda**: in questo campo viene visualizzato *Manuale* (se si tratta di un ordine pianificato creato manualmente), *Dipendente* (se si tratta di un ordine pianificato creato da schedulazione e che dipende da altri ordini pianificati di livello superiore) o *Indipendente* (se si tratta di un ordine pianificato creato da schedulazione e che non dipende da altri ordini pianificati di livello superiore, in quanto già esso è un ordine di livello 1);    
**Commessa prod**: in questi 3 campi vengono impostati l'anno, il numero e la descrizione della commessa di produzione da cui è stato generato l'ordine pianificato. Ovviamente se esso è stato generato manualmente, non sarà possibile legarlo ad alcune commessa di produzione già esistente e quindi questa casella risulterà vuota;     
**Tipo commessa**: in questa casella viene visualizzato il tipo della commessa di produzione da cui è stato generato l'ordine pianificato. Ovviamente se esso è stato generato manualmente, non sarà possibile legarlo ad alcune commessa di produzione già esistente e quindi questa casella risulterà vuota;     
**Progetto**: con un doppio click si apre l'help' che permette di collegare un progetto all'ordine pianificato che si sta inserendo;       
**Cliente**: indica il cliente della commessa;      
**Fornitore/Terzista**: queste caselle risultano attive nel caso in cui l'ordine pianificato sia di acquisto o di conto lavoro;     
**Articolo**: indica classe, codice e descrizione dell'articolo della commessa;        
**Variante**: in questa combo box viene specificata la variante dell'articolo;  
**Quantità da produrre**: indica la quantità da produrre;         
**UM Gestionale**: viene indicata l'unità misura gestionale dell'articolo;  
**Quantità utilizzo**: in questo campo viene impostata la quantità da produrre nella eventuale unità di misura alternativa;  
**UM Utilizzo**: viene indicata l'unità misura alternativa dell'articolo;  
**Data inizio e fine**: vengono impostate le date previste di inizio e fine della relativa lavorazione. Se dopo aver completato i dati del ciclo di lavorazione l'utente esegue una modifica di una di queste 2 date, l'altra viene ricalcolata di conseguenza;  
**Audit trail**: sezione che riporta in automatico la data di creazione dell'ordine e la data dell'ultima modifica, riportando per entrambe l'utente che ha compiuto l'operazione;  
**Note**: é un campo libero nel quale possono essere inserite note.  

Dopo il salvataggio almeno dei campi obbligatori premere il pulsante **Completamento dati ordine** per aggiornare tutti i tabs (Materiali, Fasi, etc.) che prendono i dati da distinta base e ciclo di lavorazione dell'articolo oggetto di Ordine Pianificato (solo se di produzione).


## Materiali

Questo tab è costituito da una griglia, all'interno della quale l'utente può inserire manualmente i materiali che vuole che vengano utilizzati per la produzione dell'articolo oggetto dell'ordine pianificato (solo se di produzione). Dopo l'inserimento manuale è necessario, per importare i dati dalla distinta base, cliccare sul pulsante **Completamento dati ordine** presente nella ribbon bar.

La griglia risulta già compilata nel caso in cui l'ordine pianificato provenga da *Schedulazione generale* o da *Elaborazione MRP*, ma l'utente può modificare i dati e/o aggiungere ulteriori materiali alla lista componenti dell'ordine pianificato.  

:::note Nota
Se l'ordine pianificato è di acquisto il tab *Materiali* risulta non attivo.
:::

*Pulsanti specifici*:
> **Inserisci materiale**: consente di inserire un nuovo materiale nella griglia;  
> **Cancella materiale**: consente di cancellare i materiali inseriti nella griglia. 

*Campi specifici*:

**Priorità**: qui viene visualizzata la priorità del componente, se presente, inserita in distinta base. Essa può essere modificata, come tutti gli altri dati presenti in questa griglia;  
**C/L**: in questo campo viene ripreso il flag presente nei *Parametri MRP* dell'articolo chiamato *Considera in CL* ovvero indica se l'articolo deve essere incluso come materiale negli ordini di conto lavoro;        
**UM Utilizzo**: in questo campo si inserisce l'eventuale unità di misura alternativa dell'articolo;  
**Data impiego**: coincide con la data inizio prevista dell'ordine pianificato (modificando la prima viene automaticamente cambiata anche quest'ultima);  
**Qtà impiego**: rappresenta la quantità unitaria necessaria per questo articolo (prevista dalla DB) che può essere comunque modificata;  
**Qtà totale**: rappresenta la quantità che si ottiene moltiplicando la *Qtà d'impiego* per la *Qtà da produrre*;  
**% scarto**: in questa casella viene inserita o ripresa dalla distinta base l'eventuale % di scarto per questo articolo;  
**Fase/Sottofase**: è possibile inserire manualmente la relativa fase e sottofase e quindi assegnare il materiale selezionato ad una determinata fase di lavorazione dell'articolo; queste vengono proposte in automatico dal ciclo di lavoro;            
**Q.tà disp**: in questo campo compare la quantità disponibile dell'articolo alla data di impiego.

## Fasi

Questo tab è costituito da una griglia, all'interno della quale l'utente può inserire manualmente le fasi che vuole che vengano utilizzati per la produzione dell'articolo oggetto dell'ordine pianificato (solo se di produzione). Dopo l'inserimento manuale è necessario, per importare i dati dal ciclo di lavorazione dell'articolo, cliccare sul pulsante **Completamento dati ordine** presente nella ribbon bar.

La griglia risulta già compilata nel caso in cui l'ordine pianificato provenga da *Schedulazione generale* o da *Elaborazione MRP*. 

*Pulsanti specifici*:
> **Inserisci fase**: consente di inserire una nuova fase nella griglia;  
> **Cancella fase**: consente di cancellare le fasi inserite nella griglia. 

*Campi specifici*:

**Codice fase/Fase/Sotto Fase**: con un doppio click si apre il relativo help fasi di lavorazione dal quale si può selezionare la relativa fase e sottofase;  
**Controllo qualità**: questo flag indica se il materiale debba essere sottoposto a controllo qualità prima del suo utilizzo;  
**Fase produttiva**: se il flag è spuntato identifica che la fase in questione è una fase produttiva, e che quindi dovrà essere segnalata; 
**Movimentabile**:  se il flag è spuntato identifica che la fase in questione è una fase movimentabile, quindi genererà un movimento di magazzino una volta registrata la dichiarazione di produzione;         
**Centro di lavoro**: da questa combo si imposta il Centro di lavoro. Esso viene proposto in automatico, ripreso dalla fase che è stata precedentemente selezionata ed inserita nella griglia;  
**Data inizio/fine prevista**: si tratta delle date di inizio e fine della relativa fase; cambiando le Date previste di inizio e fine lavorazione vengono automaticamente modificate anche quest'ultime. Esse vengono calcolate in base i tempi inseriti nelle fasi di lavorazione, e più precisamente in base al maggiore tra il tempo operaio e il tempo macchina totale per la fase selezionata;  
**Tempo macchina**: è il tempo impiegato dalla macchina per realizzare la fase, riferito alla quantità di pezzi per fase;  
**Numero macchine**: indica il numero di macchine coinvolte in questa fase;  
**Qtà pezzi per fase**: indica il numero di pezzi per fase;  
**Tempo operaio**: è il tempo impiegato dall'operaio per realizzare questa fase, riferito alla quantità di pezzi per fase;  
**Numero operai**: è il numero di operai coinvolti in questa fase;  
**Conto terzista/descrizione terzista**: con doppio click sulla casella si apre il help per poter selezionare il conto e sottoconto del relativo terzista. Questa casella è attiva solo nel caso in cui la fase sia designata come fase *Esterna*. Da notare che il *terzista* viene anch'esso ripreso dalla fase di lavorazione inserita nel ciclo di lavorazione dell'articolo.  
**Decrizione centro di lavoro**: indica la descrizione del centro di lavoro.       

### Fasi - Proprietà

Contiene le proprietà relative alla fase selezionata.

**Descrizione fase/sottofase**: in questo campo appare la descrizione della fase selezionata;  
**Tipo**: in questa combo è possibile impostare il tipo di lavorazione (interna o esterna);  
**Sovrapposizione**: tramite questa combo inserisco la tipologia di un'eventuale sovrapposizione tra fasi. Possiamo avere sovrapposizione *Totale* (in questo caso la fase in oggetto è sovrapposta totalmente alla fase indicata successiva), *A pezzi* (in questo caso è necessario indicare dopo quanti pezzi prodotti da questa fase avrà inizio la fase successiva), *A tempo* (in questo caso è necessario indicare dopo quanti minuti da quando è iniziata la fase in oggetto avrà inizio la fase successiva);  
**UM Tempi**: in questa combo box compare l'*Unità Misura Tempi* della Fase; si può decidere di gestire i tempi della fase in secondi, minuti, ore e giorni. Di solito si gestiscono a minuti i tempi delle fasi interne e a giorni quelli delle fasi esterne, ma ovviamente dipende molto dalla tipologia di azienda per cui si sta impostando il lavoro;  
**Macchina**: in questa combo può essere selezionato il codice (e descrizione) della relativa macchina. Essa viene proposta in automatico, ripresa dal centro di lavoro che è stato precedentemente inserito nella griglia;  
**Gruppo manodopera**: in questa combo può essere selezionato il codice (e descrizione) del relativo gruppo manodopera. Essa viene proposto in automatico, ripreso dal centro di lavoro che è stato precedentemente inserito nella griglia;  
**Sovrapposizione riferita alla fase/sottofase**: qui viene indicato il codice della fase e Sottofase che presentano una sovrapposizione con la fase in oggetto. Di solito si indica la fase successiva, ma anche qui si tratta solo di una consuetudine; 
**Valore**: qui si indica il valore dell'eventuale sovrapposizione, utilizzando i criteri specificati sopra;  
**Utilizzo**: se il flag è attivato, significa che si vuole che il tempo di attesa/coda aumenti il tempo di impegno del Centro di Lavoro su quella fase;  
**Tempo di attesa o coda**: indica l'eventuale tempo di attesa/coda prevista per questa macchina.  

### Fasi - Extra Data

Contiene gli eventuali extra data relativi alla fase selezionata.

## Attrezzaggio

In questo tab è possibile definire i tempi relativi all'attrezzaggio della fase selezionata nel tab precedente. 

*Campi specifici*:

**Fase/Sottofase**: in questi campi vengono visualizzate le informazioni relative alla fase che è selezionata nel tab *Fasi*;  
**Tipo**: indica la tipologia della fase (interna o esterna);  
**Tipo sovrapposizione**: indica l'eventuale tipologia della sovrapposizione;  
**UM Tempi**: indica l'unità di misura temporale della fase;  
**Centro di Lavoro**: in questi campi viene inserito il codice (e relativa descrizione) del Centro di Lavoro impostato per l'attrezzaggio;  
**Macchina**: in questi campi viene inserito il codice (e relativa descrizione) della macchina per l'attrezzaggio;  
**Gruppo MDO**: in questi campi viene inserito il codice (e relativa descrizione) del Gruppo manodopera per l'attrezzaggio;  
**Valore**: indica il valore dell'eventuale sovrapponibilità;  
**CdL**: in questi campi viene visualizzato il codice e la descrizione del relativo Centro di Lavoro della fase selezionata;  
**Data inizio**: viene visualizzata la data d'inizio della fase selezionata nel tab *Fasi*;  
**Data fine**: viene visualizzata la data di fine della fase selezionata nel tab *Fasi*;  
**Tempo attrezzaggio**: viene inserito il tempo dell'attrezzaggio. Si tratta di un tempo fisso, che non varia al variare delle quantità da produrre nella fase selezionata;  
**Tempo riattrezzaggio**: viene inserito il tempo del riattrezzaggio, che viene sommato al tempo attrezzaggio;  
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

In questo tab, costituito principalmente da una griglia, è possibile visualizzare i dettagli delle prove pianificate di controllo per la fase/sottofasse.

## Nota fase

In questo tab viene visualizzata la nota legata alla fase di lavorazione selezionata nel tab *Fasi*. Essa è modificabile dall'utente contestualmente all'ordine pianificato in oggetto.

## Istruzioni operative

In questo tab vengono visualizzate le note e i documenti legati alla fase di lavorazione selezionata nel tab *Fasi*. Esse sono modificabili dall'utente contestualmente all'ordine pianificato in oggetto. Questi documenti sono visibili all'interno del MES nel tab *Documenti e Istruzioni operative*.

## Extra Data

Per una descrizione approfondita sugli extra data si rimanda all'articolo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).