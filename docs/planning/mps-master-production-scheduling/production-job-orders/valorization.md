---
title: Costificazione
sidebar_position: 6
---

:::important A cosa serve
La **Costificazione** delle commesse di produzione rappresenta un elemento cruciale nella gestione efficace dei processi produttivi aziendali.         
Questo sistema di gestione permette di stabilire, monitorare e confrontare i costi previsti ed effettivi associati a una commessa, fornendo un quadro chiaro e dettagliato delle risorse impiegate.         
Attraverso un'interfaccia strutturata, il sistema consente di impostare parametri preliminari, gestire documenti e inserire o modificare costi aggiuntivi, sia a livello globale che specifico per ogni commessa.          
La possibilità di analizzare i costi in maniera sintetica e analitica, e di apportare correzioni e risparmi, rende la **Costificazione** uno strumento essenziale per mantenere la competitività e l'efficienza produttiva.
:::

**Parametrizzazioni preliminari**   

Prima di procedere vedasi quando indicato nelle seguenti pagine in merito alla *Costificazione delle commesse di produzione*:    

> [Parametri MS -> tab costificazione commessa](/docs/configurations/parameters/production/mps-parameters)  
> [Tipo costificazione commessa](/docs/configurations/tables/production/production-job-order-cost-type)      
> [Tipi documenti](/docs/configurations/tables/production/documents-types)     
> [Parametri conto lavoro -> Valor. lavorazione materiali a costo](/docs/configurations/parameters/production/subcontractor-parameters/)       

*Pulsanti specifici*:
 
> **Costi aggiuntivi**: permette di inserire dei costi aggiuntivi che possono essere proposti di default in ogni successiva costificazione (questi costi non sono legati alla singola commessa, ma sono globali). Tali costi si dividono in *Costi diretti*, *Costi generali* e *Altri costi*. Questi verranno riportati di default nelle corrispondenti sezioni di costi preventivi e consuntivi nel tab *Costi totali*;     
> **Esegui costificazione**: permette di lanciare la procedura di costificazione commesse;    
> **Inserisci costificazione**: permette di inserire una nuova costificazione; in automatico verranno inseriti tutti i dati di default inseriti nella fase di parametrizzazione preliminare, che ovviamente possono essere variati manualmente per la singola costificazione;     
> **Cancella costificazione**: permette di cancellare una costificazione già creata;     
> **Esplodi costificazione**: permette di esplodere l'albero dei documenti di una costificazione già creata. 

:::note Nota
Il tab **Costificazione** è presente nella gestione sia delle commesse monoprodotto che in quella delle multiprodotto; nel caso delle multiprodotto la costificazione perderà in esame tutti gli articoli presenti in quella commessa.
::: 

Questo tab si compone di una sezione di testata contenente le informazioni relative alla costificazione selezionata e da una serie di tab sottostanti: **Dettaglio costi**, **Costi totali** e **Analisi costi**.          
Nella seziona di testata è presente una griglia contenente l'elenco di tutte le valorizzazioni lanciate per quella commessa, mentre nella parte destra vengono mostrate le informazioni generali relative alla costificazione selezionata.             
Nella ribbon bar sono presenti i pulsanti che permettono di aprire i [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell'articolo, la [Distinta base](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) e il [Ciclo di lavoro](/docs/erp-home/registers/production/routes/new-route). 
Tramite il pulsante **Inserisci costificazione**, in automatico sarà creata una nuova costificazione e verranno inseriti tutti i dati di default inseriti nella fase di parametrizzazione preliminare, che ovviamente possono ancora essere variati manualmente per la singola riga.           
Selezionando una riga di costificazione è possibile esplodere l'albero dei documenti tramite il pulsante **Esplodi costificazione**, oppure eliminarla con il pulsante **Cancella costificaizone**.        
Tramite il pulsante **Costi aggiuntivi**, invece, è possibile inserire dei costi aggiuntivi che possono essere proposti di default in ogni successiva costificazione (questi costi non sono legati alla singola commessa, ma sono globali). Tali costi si dividono in *Costi diretti, Costi generali e Altri costi*. Questi verranno riportati di default nelle corrispondenti sezioni di costi preventivi e consuntivi nel tab **Costi totali**. Altrimenti sarà sempre possibile inserirli o modificarli manualmente nella relativa sezione del tab costi totali.           
Una volta decisi tutti i parametri, per eseguire o rieseguire una costificazione, sarà sufficiente selezionarla e premere il pulsante **Esegue costificazione**.

## Dettaglio costi


Nel tab dettaglio costi vengono mostrate le informazioni di dettaglio dei costi relativi alla costificazione selezionata nella parte superiore della form. 
Nella tabella di sinistra è possibile visualizzare l'albero dei documenti che compongono la costificazione con le seguenti informazioni:
**Tipo documento**: indica la tipologia del documento;    
**Anno**: indica l'anno del documento;     
**Numero**: indica il numero del documento;     
**Lotto**: indica il numero di lotto del documento (se presente);     
**Tipo**: indica il codice della tipologia del documento;    
**Classe**: indica la classe dell'articolo presente nel documento;     
**Codice articolo**: indica il codice dell'articolo presente nel documento;    
**Variante**: indica la variante dell'articolo presente nel documento;      
**U.M.**: indica l'unità di misura dell'articolo presente nel documento;      
**Quantità**: indica la quantità dell'articolo presente nel documento;      
**Cst. tot. previsto**: indica il costo totale previsto (preventivo) dell'articolo presente nel documento;      
**Cst. tot. effettivo**: indica il costo totale effettivo (consuntivo) dell'articolo presente nel documento;      
**Descrizione articolo**: indica la descrizione dell'articolo presente nel documento;      
**Descrizione variante**: indica la descrizione della variante dell'articolo presente nel documento.      

Una volta selezionato un documento dall'albero, nella parte destra della form vengono visualizzate tutte le informazioni di dettaglio relative allo stesso, suddivise per:

#### *Lavorazioni interne*  

**C.D.L.**: indica il codice del centro di lavoro;    
**Macchina**: indica il codice della macchina;     
**Grp MDO**: indica il codice del gruppo manodopera;     
**Rif. Documento**: indica il riferimento del documento;    
**U.M. Tempi**: indica l'unità di misura dei tempi;    
**T. Setup previsto**: indica il tempo di setup previsto;     
**T. Setup effettivo**: indica il tempo di setup effettivo;    
**T. Macchina previsto**: indica il tempo macchina previsto;    
**T. Macchina effettivo**: indica il tempo macchina effettivo;     
**T. MDO previsto**: indica il tempo manodopera previsto;    
**T. MDO effettivo**: indica il tempo manodopera effettivo;    
**Descrizione C.D.L.**: indica la descrizione dell'articolo del centro di lavoro; 
**Descrizione macchina**: indica la descrizione dalla macchina;     
**Descrizione Grp. MDO**: indica la descrizione del gruppo manodopera;        
**Cst. tot. previsto**: indica il costo totale previsto;    
**Cst. tot. effettivo**: indica il costo totale previsto. 

:::note Nota
Nel caso in cui il centro di lavoro effettivo sia diverso da quello previsto, in questa tabella verranno visualizzate due righe, una con il centro di lavoro previsto con i relativi costi ed una con il centro di lavoro effettivo. 
::: 

#### *Lavorazioni esterne*

**Terzista**: indica il terzista;     
**Rif. Documento**: indica il riferimento del documento;    
**U.M.**: indica l'unità di misura gestionale;    
**Q.tà prevista**: indica la quantità prevista da produrre;    
**Q.tà effettiva**: indica la quantità effettiva prodotta;    
**Prz. unit. previsto**: indica il prezzo unitario previsto;    
**Prz. Unit. effettivo**: indica il prezzo unitario effettivo;    
**Cst. tot. previsto**: indica il costo totale previsto;    
**Cst. tot. effettivo**: indica il costo totale previsto.    

#### *Materiali*    

**Classe**: indica la classe dell'articolo;     
**Codice articolo**: indica il codice dell'articolo;    
**Descrizione articolo**: indica la descrizione dell'articolo;      
**Rif. Documento**: indica il riferimento del documento;    
**U.M.**: indica l'unità di misura gestionale;    
**Q.tà prevista**: indica la quantità prevista da acquistare;    
**Q.tà effettiva**: indica la quantità effettiva acquistata;    
**Prz. unit. previsto**: indica il prezzo unitario previsto;    
**Prz. Unit. effettivo**: indica il prezzo unitario effettivo;     
**Variante**: indica la variante dell'articolo;     
**Descrizione variante**: indica la descrizione della variante dell'articolo;   
**Cst. tot. previsto**: indica il costo totale previsto;    
**Cst. tot. effettivo**: indica il costo totale previsto.   

Nella parte inferiore della form è presente un expander denominato **Dettaglio costo documento** nel quale vengono riportate le seguenti informazioni:

**Costo materiali preventivo / effettivo unitario**: indica il costo unitario dei materiali preventivo / effettivo relativo al documento selezionato;    
**Costo lavorazione preventivo / effettivo unitario**: indica il costo unitario delle lavorazioni (interne ed esterne) preventivo / effettivo relativo al documento selezionato;  
**Totale costo preventivo / effettivo unitario**: indica il totale costo unitario (materiali e lavorazioni) preventivo / effettivo relativo al documento selezionato;    
**Costo materiali preventivo / effettivo totale**: indica il costo unitario dei materiali preventivo / effettivo relativo al documento selezionato;    
**Costo lavorazione preventivo / effettivo totale**: indica il costo unitario delle lavorazioni (interne ed esterne) preventivo / effettivo relativo al documento selezionato;  
**Totale costo preventivo / effettivo totale**: indica il totale costo unitario (materiali e lavorazioni) preventivo / effettivo relativo al documento selezionato;  

## Costi totali

In questo tab sono riportati in maniera riepilogativa i costi preventivi e consuntivi relativi alla costificazione selezionata.     
Nello specifico, per ciascuna sezione (preventivo e consuntivo), sono riportati i seguenti campi:     
**Costo industriale**: totale dei costi materiali e costo lavorazioni (interne ed esterne);     
**Totale costi diretti**: totale dei costi inseriti nella sezione **Costi diretti**;    
**Totale costo diretto commessa**: totale del *Costo industriale* e del *Totale costi diretti*;     
**Ricarico**: permette di indicare il tipo di ricarico se a percentuale o a valore ed anche il valore stesso;    
**Totale costo ricaricato**: totale del *Totale costo diretto commessa* e del *Ricarico*;     
**Totale costi generali**: totale dei costi inseriti nella sezione **Costi generali**;      
**Totale altri costi**: totale dei costi inseriti nella sezione **Altri costi**;     
**Correzione**: permette di inserire un valore per correggere il *Totale costo ricaricato*;      
**Arrotondamento**: permette di decidere se arrotondare per eccesso o difetto e l'ordine di grandezza;     
**Totale costo commessa**: totale del *Totale costo ricaricato*, *Totale costi generali*, *Totale altri costi*, *Correzione* ed *Arrotondamento*. Il *Totale costo commessa* viene evidenziato in rosso nella sezione dei *Costi consuntivi* quando questo è superiore quello presente nella sezione dei *Costi preventivi*.           

:::note Nota
I campi che vengono riportati ed allineati in automatico, tra la sezione dei *Costi preventivi* e quella dei *Costi consuntivi*, sono: il *Ricarico* (tipo di ricarico e valore), *Correzione* ed *Arrotondamento* (tipo di arrotondamento e valore). In ogni caso nella sezione dei *Costi consuntivi* è possibile variarli manualmente per diversificarli dai valori inseriti nella sezione dei *Costi preventivi*.
::: 

Tramite il pulsante **Costi aggiuntivi** è possibile inserire dei *Costi diretti*, *Costi generali* e *Altri costi* che possono essere proposti di default, sia nei costi preventivi che nei costi consuntivi.      
Per ciascuno di questi costi è possibile definire se sia di tipo percentuale o a valore, indicandone anche il valore stesso.    

Per tutte le informazioni necessarie alla creazione di questi costi, consultare la pagina relativa a [Voci di costo](/docs/configurations/tables/general-settings/cost-elements).         

## Analisi costi

In questo tab vengono messe in evidenza tutte le componenti di costo per quanto riguarda i costi preventivi e consuntivi, utilizzando due tipi di analisi:      

> **Sintetica**: in questa tipologia di analisi viene riportato il *Costo industriale*, quindi come somma dei costi materiali e dei costi di lavorazione, inoltre sono riportati i *Costi diretti*, *Costi generali* e *Altri costi* ed infine il totale di *Ricarichi* e *Correzioni*;     
> **Analitica**: in questa tipologia, invece, vengono riportate nel grafico tutte le voci singolarmente, quindi il *Costo industriale* viene suddiviso in *Costo materiali*, *Costo lavorazione interne* e *Costo lavorazioni esterne*; anche le voci relative a *Ricarichi* e *Correzioni* vengono riportate separatamente; ovviamente vengono poi riportati anche i *Costi diretti*, *Costi generali* e *Altri costi*.       

Queste due tipologie di analisi possono essere confrontate tramite una *ripartizione dei costi* con un diagramma a torta, oppure con un *raffronto dei costi* utilizzando un diagramma a barre.

## Modalità di calcolo dei costi preventivi e effettivi (consuntivi)

I documenti preventivi che concorrono al calcolo dei costi preventivi sono: 
- Commessa
- Ordine pianificato
- Richiesta di acquisto
- Ordine fornitore
- Ordine di produzione 
- Ordine di conto lavoro

I documenti effettivi che concorrono al calcolo dei costi effettivi sono: 
- DDT di consegna materiale
- Rientri di conto lavoro
- Dichiarazioni di produzione

### Lavorazioni interne

Per il calcolo del costo di lavorazione di una fase preventivo, la priorità maggiore viene data al valore indicato nel campo **Costo unitario** presente nel [Ciclo di lavoro](/docs/erp-home/registers/production/routes/new-route); quindi in questo caso non vengono considerati i tempi e costi associati alla macchina o al gruppo manodopera.                
Nel caco in cui il **Costo unitario** presente nel [Ciclo di lavoro](/docs/erp-home/registers/production/routes/new-route) sia null o zero, i costi delle lavorazioni interne vengono presi dalla [Macchina](/docs/configurations/tables/production/machines) e dal [Gruppo manodopera](/docs/configurations/tables/production/labour-group) che sono stati previsti di utilizzare nel ciclo di lavoro per i costi preventivi e da quelli che sono stati effettivamente utilizzati nelle dichiarazioni di produzione per i costi effettivi.         
Alla [Macchina](/docs/configurations/tables/production/machines) e al [Gruppo manodopera](/docs/configurations/tables/production/labour-group) viene associato un [Centro di costo](/docs/configurations/tables/production/cost-center) nelle rispettive tabelle, dove a questo [Centro di costo](/docs/configurations/tables/production/cost-center) è associata una certa tariffa.         
Ovviamente, il costo indicato nel [Centro di costo](/docs/configurations/tables/production/cost-center) verrà moltiplicato per il tempo indicato nel ciclo di lavoro per i costi preventivi, mentre per i costi effettivi verrà moltiplicato per il tempo effettivamente impiegato riportato nelle dichiarazioni di produzione.
Inoltre, è importate avere inserito il numero di macchine e il numero di operatoti sia nel ciclo che poi nella dichiarazione di produzione; aver generato il [Calendario di fabbrica](/docs/configurations/tables/production/factory-calendar) e quelli delle [Capacità produttive](/docs/configurations/tables/production/productive-capacity-calendar); ed anche aver indicato all'interno dei [Centri di lavoro](/docs/erp-home/registers/production/routes/work-center) i relativi orari di inizio e fine (compresa la pausa).

### Lavorazioni esterne

Per il calcolo del costo di lavorazione di una fase preventivo, la priorità maggiore viene data al valore indicato nel campo **Costo unitario** presente nel [Ciclo di lavoro](https://docs.fluentis.com/FluentisErp/docs/erp-home/registers/production/routes/new-route); quindi in questo caso non vengono considerati i costi presenti nei listini ci conto lavoro.       
Nel caco in cui il **Costo unitario** presente nel [Ciclo di lavoro](https://docs.fluentis.com/FluentisErp/docs/erp-home/registers/production/routes/new-route) sia null o zero, il costo preventivo si basa sul prezzo di listino di conto lavoro (fintanto che non è stato creato l'ordine di conto lavoro), nel momento in cui viene creato l'ordine di conto lavoro si baserà sul prezzo indicato nella riga dell'articolo.      
Per quanto riguarda il costo effettivo, il costo viene preso dal valore indicato nel documento di rientro di conto lavoro.       

### Materiali

Il costo del materiali si basa sul **Tipo costo** che abbiamo selezionato nella costificazione, quindi ultimo, medio o standard.          
Inoltre, si basa anche sui flag **Costo del lotto** e **Costo della commessa**. Se sono attivati entrambi, la procedura valorizzerà il costo del materiale in base al tipo costo selezionato considerando i valori solo di quella specifica commessa e per quello specifico lotto, ovviamente tra i movimenti effettuati con causali di carico con il flag *aggiorna costo ultimo o medio* (a seconda del valore indicato nel campo **Tipo di costo**) e il flag di *interesse fiscale* attivi; se non trova nessun movimento con queste caratteristiche va a cercare tra i movimenti che hanno caricato quel lotto, se non trova nemmeno questi va a cercare tra tutti i movimenti di quell'articolo. Se non ho nessun movimento di carico per quell'articolo va a vedere nei rispettivi campi costo ultimo, medio e standard dell'anagrafica dell'articolo.         
Nel caso del costo preventivo i valori verranno presi dalla [Richiesta di acquisto](/docs/purchase/purchase-requests/general-overview) e dall'[Ordine fornitore](/docs/purchase/purchase-orders/general-overview) e moltiplicati per i consumi previsti nella [Distinta base](/docs/erp-home/registers/production/bill-of-materials/assemblies/new-assemble); mentre per i costi effettivi verranno presi dai [DDT di acquisto](/docs/purchase/purchase-delivery-note/general-overview) del materiale e moltiplicati per le quantità impiegate nelle [Dichiarazioni di produzione](/docs/production/pp-production-in-progress/signals/sisgnals).

Per i dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).


