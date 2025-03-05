---
title: Costificazione
sidebar_position: 6
---

**Parametrizzazioni preliminari**   

Prima di procedere vedasi quando indicato nelle seguenti pagine in merito alla *Costificazione delle commesse di produzione*:    

> [Parametri MS -> tab costificazione commessa](/docs/configurations/parameters/production/mps-parameters)     
> [Tipi documenti](/docs/configurations/tables/production/documents-types)     
> [Tipo costificazione commessa](/docs/configurations/tables/production/production-job-order-cost-type)      
> [Parametri conto lavoro -> Valor. lavorazione materiali a costo](/docs/configurations/parameters/production/subcontractor-parameters/)       

*Pulsanti specifici*:
 
> **Costi aggiuntivi**: permette di inserire dei costi aggiuntivi che possono essere proposti di default in ogni successiva costificazione (questi costi non sono legati alla singola commessa, ma sono globali). Tali costi si dividono in *Costi diretti*, *Costi generali* e *Altri costi*. Questi verranno riportati di default nelle corrispondenti sezioni di costi preventivi e consuntivi nel tab *Costi totali*;     
> **Esegui costificazione**: permette di lanciare la procedura di costificazione commesse;    
> **Inserisci costificazione**: permette di inserire una nuova costificazione; in automatico verrnno inseriti tutti i dati di default inseriti nella fase di parametrizzazione preliminare, che ovviamente possono essere variati manualmente per la singola costificazione;     
> **Cancella costificazione**: permette di cancellare una costificazione già creata;     
> **Esplodi costificazione**: permette di esplodere l'albero dei documenti di una costificazione già creata. 

:::note Nota
Il tab **Costificazione** (realtavio alla costificazione) è presente nella gestione sia delle commesse monoprodotto che in quella delle multiprodotto; nel caso delle multiprodotto la costificazione perderà in esame tutti gli articoli presenti in quella commessa.
::: 

Nella parte superiore della form è presente una griglia contenente l'elenco di tutte le valorizzazioni lanciate per quella commessa, mentre nella parte destra vengono mostrate le informazioni generali relative alla commessa selezionata.
La parte inferiore della form, invece, si compone dei seguenti tab:

## Dettaglio costi

In questo tab vengono mostrate le informazioni di dettglio dei costi relativi alla costificazione selezionata nella parte superiore della form.
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
**Totale costo diretto comm.**: totale del *Costo industriale* e del *Totale costi diretti*;     
**Ricarico**: permette di indicare il tipo di ricarico se a percentuale o a valore ed anche il valore stesso;    
**Totale costo ricaricato**: totale del *Totale costo diretto comm.* e del *Ricarico*;     
**Totale costi generali**: totale dei costi inseriti nella sezione **Costi generali**;      
**Totale altri costi**: totale dei costi inseriti nella sezione **Altri costi**;     
**Correzione**: permette di inserire un valore per correggere il *Totale costo ricaricato*;      
**Arrotondamento**: permette di decidere se arrotondare per eccesso o difetto e l'ordine di grandezza;     
**Totale costo commesa**: totale del *Totale costo ricaricato*, *Totale costi generali*, *Totale altri costi*, *Correzione* ed *Arrotondamento*. Il *Totale costo commesa* viene evidenziato in rosso nella sezione dei *Costi consuntivi* quando questo è superiore quello presente nella sezione dei *Costi preventivi*.           

:::note Nota
I campi che vengono riportati ed allineati in automatico, tra la sezione dei *Costi preventivi* e quella dei *Costi consuntivi*, sono: il *Ricarco* (tipo di ricarico e valore), *Correzione* ed *Arrotondamento* (tipo di arrotondamento e valore). In ogni caso nella sezione dei *Costi consuntivi* è possibile variarli manualmente per diversificarli dai valori inseriti nella sezione dei *Costi preventivi*.
::: 

Tramite il punlsante **Costi aggiuntivi** è possibile inserire dei *Costi diretti*, *Costi generali* e *Altri costi* che possono essere proposti di default, sia nei costi preventivi che nei costi consuntivi.      
Per ciascuno di questi costi è possibile definire se sia di tipo percerntuale o a valore, indicandone anche il valore stesso.    

Per tutte le informazioni necessarie alla creazione di questi costi, consultare la pagina relativa a [Voci di costo](/docs/configurations/tables/general-settings/cost-elements).         

## Analisi costi

In questo tab vengono messe in evidenza tutte le componenti di costo per quanto rigaurda i costi preventivi e consuntivi, utilizzando due tipi di analisi:      

> **Sintetica**: in questa tipologia di analisi viene riportato il *Costo industriale*, quindi come somma dei costi materiali e dei costi di lavorazione, inoltre sono riportati i *Costi diretti*, *Costi generali* e *Altri costi* ed infine il totale di *Ricarichi* e *Correzioni*;     
> **Analitica**: in questa tipologia, invece, vengono riportate nel grafico tutte le voci singolarmente, quindi il *Costo industriale* viene suddiviso in *Costo materiali*, *Costo lavorazione interne* e *Costo lavorazioni esterne*; anche le voci relative a *Ricarichi* e *Correzioni* vengono riportate separatamente; ovviamente vengono poi riportati anche i Costi diretti*, *Costi generali* e *Altri costi*.       

Per i dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
