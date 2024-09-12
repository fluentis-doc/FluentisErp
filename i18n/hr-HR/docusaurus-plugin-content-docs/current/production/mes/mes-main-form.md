---
title: MES
sidebar_position: 3
---

## *Pulsanti specifici*:  

**Navigabilità**
> *Precedente*: permette di passare al tab precedente;     
> *Successivo*: permette di passare al tab successivo;     
> *Aggiorna*: permette di aggiornare tutti i dati della form, da usare nel caso in cui vengano fatte modifiche sulla risorsa utilizzata;      
> *Cancella selezione*: permette di annullare la selezioni delle fasi presenti nella griglia principale.     

**Conferma segnalazione**
> *Conferma inizio*: permette di creare una segnalazione di produzione di apertura;    
> *Conferma avanzamento*: permette di creare una segnalazione di produzione di avanzamento;    
> *Conferma sospensione*: permette di creare una segnalazione di produzione di sospensione;    
> *Conferma ripresa*: permette di creare una segnalazione di produzione di ripresa;    
> *Conferma chiusura*: permette di creare una segnalazione di produzione di chiusura;    
> *Annulla*: permette di azzerare tutti i dati inseriti in Fluentis MES.                   

## Form principale

La form principale si compone di una sezione con i seguenti campi ed una griglia contenente le fasi in lavoro: 

- **Codice barcode**      
Gran parte delle operazioni che possono essere effettuate in Fluentis MES, possono essere agevolate e velocizzate grazie all’utilizzo del campo *Codice barcode*, che se opportunamente configurato, rielabora in maniera intelligente i dati acquisiti tramite la lettura del barcode e autonomamente va ad inserire i valori nei campi corrispondenti.    
Questo da un grande vantaggio all’operatore sia in termini di velocità di inserimento che di efficienza, dato che dovrà leggere i dati sempre nello stesso campo *Codice barcode* senza avere il problema di dover cambiare il focus.     
I Barcode possono essere configurati all’interno della form Barcode tokenizer, presente in: Tabelle > Impostazioni generali > Barcode tokenizer.               
Quindi, questo campo *Codice barcode*, nel MES, può essere utilizzato dall’operatore per aggiungere singole fasi o gruppi di fasi, o ad esempio anche le fasi di un intero ordine di produzione, oppure ancora caricare i lotti e/o serial number dei materiali da scaricare, il tutto semplicemente leggendo i vari barcode. 

- **Workstation**      
La procedura è in grado di riconoscere la workstation su cui sta lavorando e se a questa è stato associato un centro di lavoro, caricherà in automatico tutte le fasi che erano in lavorazione su quel centro di lavoro, a quel punto l’operatore può scegliere se proseguire con la segnalazione di quelle fasi o ad esempio aggiungerne altre. Tutte le ulteriori informazioni si possono consultare nella sezione dedicata alla [Workstation](/docs/production/mes/workstation).     

- **Risorsa**      
Il campo *Risorsa*, viene utilizzato per inserire un qualsiasi tipo di risorsa di produzione.     
Nel caso in cui venga inserita una risorsa di tipo *Centro di lavoro*, questo verrà sostituito automaticamente anche nel relativo campo del *Centro di lavoro*, andando di conseguenza a caricare le fasi inerenti al nuovo centro appena inserito.    
Nel caso in cui, invece venga inserita una risorsa di tipo *Dipendente*, questo sarà utilizzato come utente di dichiarazione. L'inserimento di una risorsa di tipo dipendente è richiesto obbligatoriamente nel caso in cui sia attivo il flag *Operatore obbligatorio* presente nel tab *Generali* delle [Risorse di produzione](/docs/production/mes/production-resources).        

- **Centro di lavoro**
Indica il centro di lavoro su cui l'operatore sta facendo la dichiarazione; è possibile visualizzare solo i centri di lavoro legati alla *Workstation*. Nel caso in cui, la *Workstation* non sia stata inserita, oppure non sia stato associato nessun *Centro di lavoro* alla *Workstation*, sarà possibile visualizzare tutte le *Risorse di produzione* di tipo *Centro di lavoro*.    

- **Fasi in lavoro**
Le fasi possono essere aggiunte all'interno della griglia tramite il campo *Codice barcode*, oppure utilizzando il pulsante specifico *Seleziona nuove fasi* presente nel menù di destra. La griglia contiene una serie di informazioni relative alla commessa, all'ordine di produzione, al progetto, alla variante, ecc... 
Tutte queste informazioni possono essere rese visibili o nascoste tramite la gestione nel tab *Layout* delle [Risorse di produzione](/docs/production/mes/production-resources).   
Per la riga selezionata, sulla parte destra della griglia, è possibile visualizzare l'immagine di default inserita nell'[Anagrafica articolo](/docs/erp-home/registers/items/create-new-items/item-registry/images); inoltre, con il doppio click verrà visualizzata a tutto schermo.       
                
### Tab Produzione      

*Pulsanti specifici*:

> *Pulisci risorsa*: permette di rimuovere il valore inserito nel campo *Risorsa*;    
> *Seleziona nuove fasi*: permette di aprire un help per selezionare nuove fasi da aggiungere a quelle presenti nella griglia principale;      
> *Elimina fase*: permette di rimuove la fase o le fasi selezionate dalla griglia principale.    

Il tab **Produzione** è dedicato all'inserimento delle informazioni relative ai tempi di produzione / setup e alle quantità prodotte / scartate. Questo è l'unico che non può essere reso invisibile e si compone dei seguenti campi:
> **Macchina**: in questo campo viene proposta di default la *Macchina* che è indicata nel *Centro di lavoro* se la fase deve essere ancora iniziata, mentre se sono già state inserite delle dichiarazioni, propone quella della dichiarazione precedente. Inoltre, è comunque possibile variarla manualmente, ma solo con una delle macchine alternative indicate nell'anagrafica della macchina principale;      
> **Tempo lavoro**: permette di visualizzare / modificare manualmente il tempo di lavoro; è possibile variarne il comportamente tramite i flag *Inserimento tempo manuale* e *Tempo proposto* presenti in [Risorse di produzione](/docs/production/mes/production-resources). Il tempo viene calcolato automaticamente come differenza tra il tempo della dichiarazione attuale e della precedente;                   
> **Tempo setup**: permette di inserire / modificare manualmente il tempo di lavoro;         
> **Quantità prodotta**: permette di inserire la quantità prodotta con quella dichiarazione;         
> **Quantità alternativa**: permette di inserire la quantità alternativa prodotta con quella dichiarazione;      
> **Magazzino versamento**: indica il magazzino di carico dei prodotti realizzati con la dichiarazione;       
> **Causale versamento**: indica la causale di carico dei prodotti realizzati con la dichiarazione;       
> **Ubicazione versamento**: indica l'ubicazione di carico dei prodotti realizzati con la dichiarazione;       
> **Magazzino versamento scarto**: indica il magazzino di scarico dei prodotti realizzati e scartati con la dichiarazione;       
> **Causale versamento scarto**: indica la causale di scarico dei prodotti realizzati e scartati con la dichiarazione;       
> **Ubicazione versamento scarto**: indica l'ubicazione di scarico dei prodotti realizzati e scartati con la dichiarazione;       
> **Difetto**: indica il difetto di scarico dei prodotti realizzati e scartati con la dichiarazione; è attivabile un controllo dedicato tramite il flag *Difetto obbligatorio se dichiarato scarto* presente in [Risorse di produzione](/docs/production/mes/production-resources);           
> **Causale di sospensione**: indica la causale di sospensione che viene utilizzata nella dichiarazione; nel caso in cui un operatore crei una sospensione, senza indicare la causale di sospensione, verrà utilizzata la causale di default indicata nel campo *Causale di sospensione proposta* presente nella form delle [Risorse di produzione](/docs/production/mes/production-resources).       

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).      

### Tab Controlli qualità

*Pulsanti specifici*:

> **Seleziona articoli da controllare**: 
> **Importa tutti gli articoli**: 

Work in progress 

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources). 

### Tab Lotti e S/N

*Pulsanti specifici*:

> *Genera*: permette di generare i lotti e i serial number;        
> *Elimina*: permette di eliminare il lotto / serial number selezionato.       

In questo tab è possibile visualizzare tutti gli articoli realizzati con l'indicazione delle relative quantità prodotte e scartate; inoltre, attraverso le apposite griglie è possibile inserire / modificare le informazioni relative ai *Lotti* e *Serial number*.         

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).     

### Tab Etichette

*Pulsanti specifici*:

> *Nuova*: permette di creare una riga per l'inserimento una nuova etichetta;          
> *Cancella*: permette di cancellare la riga dell'etichetta selezionata;       
> *Nuova UDC*: permette di rigenerare il codice dell'UDC selezionata;      
> *Stampa selezione*: permtte di stampare solo le etichette selezionate;       
> *Stampa tutto*: permette di stampare tutte le etichette.          

Nel tab **Etichette** vengono create automaticamente le etichette inerenti agli articoli prodotti.
La quantità di articoli per ciascuna etichetta è determinata dalle informaizoni inserite nell'anagrafica articolo come segue:
1. Tab *Confezionamento*: considera l'UDC e la quantità inserite nella riga con il flag "Unità di carico obbligatoria" attivo;       
2. Tab *Peso/Dimensioni*: considera l'UDC e la quantità inserite nei campi *Tipo unità di carico* e *Numero articoli per unità di carico*;    
3. Tab *Peso/Dimensioni* > *Numero colli*: considera la quantità inserita in *Articoli presenti in un collo*; in questo caso non verrà proposta l'UDC.

Inoltre, l'operatore povrà inserire manualmente o tramite il campo *Codice barcode* *Lotti* e *Serial number* se necessari.      
Il campo **Stato stampa** può assumere i valori di *Non stampato*, *Stampato* o *Ristampato* in base al numero di volte che l'etichetta è stata stampata.

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).     

### Tab Materiali

Nel tab **Materiali** vengono riportati automaticamente i materiali consumati in base alla quantità dell'articolo padre da produrre e alla sua distinta base; solo nel caso in cui sia attivo il flag **Dichiarazione quantità materiale obbligatoria** presente nel tab *Generali* della gestione delle [Risorse di produzione](/docs/production/mes/production-resources), il materiale verrà proposto con quantità zero e l'operatore sarà costretto ad inserirlo manualmente.   
Inoltre, è possibile indicare le quantità scartate di ogni singolo materiali con anche magazzino e causale di scarto; attraverso le apposite griglie è possibile inserire / modificare le informazioni relative ai *Lotti* e *Serial number* relativi al singolo materiale selezionato.            

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).     

### Tab Squadra

*Pulsanti specifici*:

> *Entra in squadra*: permette di inserire un o più operatori all'interno della squadra di lavoro;        
> *Esci in squadra*: permette di fare uscire un o più operatori dalla squadra di lavoro;      
> *Sostituisce operatore*: permette di sostituire un operatore (attivo) con un altro mantenendo le date/ore di ingresso e uscita dalla squadra;        
> *Rimuovi da squadra*: permette di rimuovere la riga relativa all'operatore selezionato.        

Il tab **Squadra** si compone di due sezioni:
> Elenco operatori attivi: permette di inserire e visualizzare gli operatori attivi nella dichiarazione di produzione; il primo operatore inserito assume il flag di *Capo squadra* (ch epuò essere cambiato manualmente);            
> Elenco operatori non attivi: permette di visualizzare gli operatori non più attivi (che hanno lavorato su questa o questi fasi nelle dichiarazioni precedenti).

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).  

### Tab Analisi

Il tab **Analisi** è dedicato alla visualizzazione e consultazione dei dati relativi alle performance dell'attività di produzione; questo si compone di tre sezioni:
- Diagrammi OOE
- Diagrammi a barre: **Analisi quantità** e **Analisi tempo**
- Tabelle: **Valori quantità** e **Valori tempi** 

L'**OEE**, **Overall Equipment Effectiveness** (Efficienza complessiva della risorsa produttiva) è un indice di performance (KPI) per misurare la capacità produttiva di una azienda di produzione.

Il valore **OEE** è costituito dai seguenti tre fattori:
- **Disponibilità operativa (Availability)**: Percentuale del tempo lavorato (B) rispetto al tempo disponibile (A).
Si utilizza il rapporto tra il tempo disponibile di lavoro dell'impianto (A) rispetto al reale tempo in cui l'impianto ha prodotto (B).
- **Tempi lavorazione (Performance) - Efficienza**: Percentuale tra gli articoli realmente lavorati (D) rispetto agli articoli teoricamente lavorabili (C).
Nella pianificazione vengono calcolati gli articoli lavorabili a regime ottimale (C), eventuali riduzioni di tali performance indicano un calo produttivo (D).
- **Qualità del prodotto (Quality)**: È il rapporto percentuale tra gli articoli conformi (F) rispetto agli articoli prodotti (E).
Si evidenziano in tal modo cali produttivi relativi a scarti o rilavorazioni che incidono sull'inefficienza generale.
- **Efficienza complessiva (OEE)**: Deriva dal calcolo dalle tre precedenti analisi ed è dato da: 

OEE = Availability * Performance * Quality * 100 = B/A * D/C * F/E * 100

L'indice di **Efficienza complessiva** può essere calcolato con o senza l'attrezzaggio.

Nella sezione dei diagrammi a barre sono presenti i diagrammi **Analisi quantità** e **Analisi tempo** nei quali è possibile visualizzare i dati di quantità e tempi preventivi e quelli  
consuntivi dichiarati fino a quel momento.      

Nelle tabelle presenti nell'ultima sezione, è ancora possibile visualizzare i dati di quantità e tempi preventivi e quelli consuntivi dichiarati fino a quel momento, ma in questo caso sottoforma di dati tabellari.

I dati riportati in tutte le sezioni del tab **Analisi** sono relativi alle fasi selezionate, nel caso in cui non sia selezionata nessuna delle fasi i dati riportatati rappresenteranno il totale di tutte le fasi presenti nella griglia *Fasi in lavoro*.

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).  

### Tab Documenti e Istruzioni operative

Questo tab si compone delle sezioni **Documenti** e **Istruzioni operative**.

La sezione **Documenti**, a sua volta si suddivide in:
> **Documenti allegati alla fase selezionata**: permette di visualizzare tutti i documenti allegati all'*Anagrafica articolo*, all'*Ordine cliente*, alla *Commessa di produzione*, all'*Ordine di produzione*, in accordo con quanto indicato nella tab *Gestione documentale* presente nelle [Risorse di produzione](/docs/production/mes/production-resources);       
> **Documenti allegati alla segnalazione della fase selezionata**: permette di consultare o allegare direttamente alla dichiarazione dei nuovi documenti anche tramite drag & drop.      

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).  

### Tab Note

Il tab si compone di due sezioni:            
> **Elenco note (seleziona una fase)**: permette di consultare e visualizzare le note relative alla fase selezionata; le note che vengono visualizzate in questa tabella sono prese direttamente dalle fasi del ciclo di lavoro e puù precisamente dal tab *Annotazioni*;                
> **Elenco note segnalazione**: permette di inserire e consultare le note relative alla dichiarazione in corso.     

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).  

### Tab Segnalazioni precedenti

Questo tab permette di visualizzare tutte le segnalazioni precedenti relative alla fase selezionata.

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).  

### Tab ExtraData

Questo tab si compone di due griglie:
> *Elenco extra data (selezionare una fase)*: permette di gestire gli extra data relativi alla fase selezionata;       
> *Elenco extra data segnalazione*: permette di gestire gli extra data relativi alla dichiarazione che si sta eseguendo.       

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).  


