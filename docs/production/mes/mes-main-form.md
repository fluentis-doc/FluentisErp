---
title: MES
sidebar_position: 5
---

:::important A cosa serve
La forma principale del Modulo di Esecuzione della Produzione (MES) di Fluentis è progettata per ottimizzare e semplificare il processo di dichiarazione delle attività produttive. Questa interfaccia consente agli operatori di monitorare e gestire in tempo reale le risorse di produzione, facilitando l'inserimento dei dati relativi alle fasi di lavorazione e alle quantità prodotte.

Gli operatori possono gestire facilmente l'inserimento e la modifica dei dati, grazie a funzionalità come il barcode Tokenizer e l'abilitazione di controlli specifici per garantire la correttezza delle registrazioni. Inoltre, il sistema supporta diversi metodi di ripartizione del tempo e delle quantità, consentendo un'analisi dettagliata delle performance produttive e garantendo una gestione efficiente delle risorse impiegate.

Questo approccio integrato non solo migliora la visibilità delle operazioni, ma contribuisce anche a ottimizzare i flussi di lavoro e la produttività complessiva dell'impresa.
:::

## *Pulsanti specifici*:  

**Navigabilità**
> *Precedente*: permette di passare al tab precedente;     
> *Successivo*: permette di passare al tab successivo;     
> *Aggiorna*: permette di aggiornare tutti i dati della form, da usare nel caso in cui vengano fatte modifiche sulla risorsa utilizzata;      
> *Cancella selezione*: permette di annullare la selezioni delle fasi presenti nella griglia principale.     

**Conferma segnalazione**
> *Inizia*: permette di creare una segnalazione di produzione di apertura;    
> *Avanza*: permette di creare una segnalazione di produzione di avanzamento;    
> *Sospendi*: permette di creare una segnalazione di produzione di sospensione;    
> *Riprendi*: permette di creare una segnalazione di produzione di ripresa;    
> *Chiudi*: permette di creare una segnalazione di produzione di chiusura;    
> *Annulla*: permette di azzerare tutti i dati inseriti in Fluentis MES.                   

## Form principale

La form principale si compone di una sezione con i seguenti campi ed una griglia contenente le fasi in lavoro: 

- **Codice barcode**      
Gran parte delle operazioni che possono essere effettuate in Fluentis MES, possono essere agevolate e velocizzate grazie all’utilizzo del campo *Codice barcode*, che se opportunamente configurato, rielabora in maniera intelligente i dati acquisiti tramite la lettura del barcode e autonomamente va ad inserire i valori nei campi corrispondenti.    
Questo da un grande vantaggio all’operatore sia in termini di velocità di inserimento che di efficienza, dato che dovrà leggere i dati sempre nello stesso campo *Codice barcode* senza avere il problema di dover cambiare il focus.     
I Barcode possono essere configurati all’interno della form Barcode tokenizer, presente in: Tabelle > Impostazioni generali > Barcode tokenizer.               
Quindi, questo campo *Codice barcode*, nel MES, può essere utilizzato dall’operatore per aggiungere singole fasi o gruppi di fasi, o ad esempio anche le fasi di un intero ordine di produzione, oppure ancora caricare i lotti e/o serial number dei materiali da scaricare, il tutto semplicemente leggendo i vari barcode. 

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

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
> **Tempo lavoro**: permette di visualizzare / modificare manualmente il tempo di lavoro; è possibile variarne il comportamento tramite i flag *Inserimento tempo manuale* e *Tempo proposto* presenti in [Risorse di produzione](/docs/production/mes/production-resources). Il tempo viene calcolato automaticamente come differenza tra il tempo della dichiarazione attuale e della precedente;                   
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

> *Seleziona articoli*: permette di selezionare quali articoli inserire nella tabella dei controlli qualità tra quelli prodotti o scartati;       
> *Importa tutti*: permette di inserire nella tabella dei controlli qualitàtutti gli articoli prodotti o scartati;     
> *Elimina controllo*: permette di eliminare il controllo selezionato;           
> *Duplica prova*: permette di duplicare la prova selezionata;       
> *Elimina prova*: permette di eliminare la prova selezionata.   

Questo tab permette di gestire i controlli della qualità per gli articoli prodotti e/o scartati. 

Le righe possono essere inserite all'interno della tabella *Controlli qualità* tramite i due pulsanti specifici.          
In questa tabella vengono riportati i seguenti dati:
> *Classe*: indica la classe dell'articolo;          
> *Codice articolo*: indica il codice dell'articolo;          
> *Variante*: indica la variante dell'articolo;    
> *Dettaglio articolo da considerare*: indica il massimo dettaglio dell'articolo che si va a considerare per effettuare i test (Nessuno, Lotto, S.N., U.D.C.). Questo viene selezionato nel tab *Controlli Qualità* della gestione delle [Risorse di produzione](/docs/production/mes/production-resources);             
> *Rifer. dettaglio*: indica il valore del *Dettaglio articolo da considerare*, ad esempio il numero del lotto;          
> *U.M.*: indica l'unità di misura dell'articolo;    
> *Quantità*: indica quantità dell'articolo;    
> *Scarto*: se attivo, indica che la quantità indicata è di tipo scarto; se non attivo, invece, indica che la quantità prodotta e non scarta;             
> *Descrizione articolo*: indica la descrizione dell'articolo;          
> *Descrizione variante*: indica la descrizione della variante.      

Se nell'ordine di produzione legato a quella fase, la fase è soggetta al controllo qualità e abbiamo già associato un piano di controllo (che viene ereditato dalla fase del ciclo di lavoro standard, ma ovviamente può essere variato manualmente sia nell'ordine pianificato che nell'ordine di produzione), le prove legate al piano di controllo indicato verranno riportate automaticamente all'interno della tabella *Prove*.      

La tabella *Prove* si compone dei seguenti campi:         
> *Sequenza*: indica la sequenza delle prove da effettuare;          
> *Tipo di Prova*: indica il codice della prova da effettuare;         
> *Descrizione tipo di prova*: indica la descrizione della prova da effettuare;           
> *Categoria strumento*: indica la categoria dello strumento utilizzato;         
> *Tipo valore*: indica se il valore è di tipo *Testo*, di tipo *Si/No* oppure di tipo *Numerico*;      
> *Tipo limite*: permette di indicare un *Tipo limite*; si abilita solo se il *Tipo valore* è *Numerico*;       
> *Valore Unità di misura*: indica l'unità di misura dei valori;           
> *Valore nominale*: indica il valore numerico che deve avere la prova;      
> *Limite minimo* / *Limite massimo*: indicano il limite minimo e massimo di errore che può avere la prova, in percentuale o valore assoluto in base al flag *%*; il *Limite minimo* va sottratto al *Valore nominale*, mentre il *Limite massimo* va sommato;       
> *L. min (toll-/+)* / *L. Max (toll-/+)*: indica le tolleranze sui limiti minimo e massimo che si aggiungono alle tolleranze precedenti; può essere presente per esempio l'incertezza sull'unità di misura; è un valore percentuale;                
> *%*: indica se i valori sono espressi in percentuale o sono assoluti;               
> *Tipo controllo prova*: indica il tipo di controllo della prova;        
> *Frequenza*: indica la frequenza del controllo;       
> *Strumento di misura*: indica lo strumento utilizzato, nel caso siano presenti valori da rilevare; è composto da un Codice/Categoria;      
> *Valore rilevato*: indica il valore rilevato (viene utilizzato se ho un valore puntuale);      
> *Media valori rilevati*: indica la media dei valori rilevati (viene valorizzato in base ai valori inseriti nella tabella **Rilevazione valori multipli**);      
> *Esito*: indica l'esito della prova e viene determinato in automatico in base ai parametri inseriti;       
> *Quantità non conforme*: indica la quantità che è stata rilevata non conferme;        
> *Magazzino*: indica il magazzino in cui sono presenti gli articoli non conformi; questo valore viene riportato automaticamente in base a quanto indicato nel *Tipo di controllo articolo*;                    
> *Causale magazzino per articoli non conformi*: indica la causale con la quale saranno scaricati gli articoli non conformi;questo valore viene riportato automaticamente in base a quanto indicato nel *Tipo di controllo articolo*. Questa movimentazione viene effettuata al momento della registrazione della dichiarazione di produzione;                    
> *Note*: permette di inserire una nota libera.       

La tabella **Rilevazione valori multipli** viene utilizzata nel caso in cui siano rilevati più valori e questi concorreranno a determinare la *Media valori rilevati*.
Questa si compone delle seguenti colonne:
> *Sequenza*: indica la sequenza dei valori rilevati;      
> *Posizione*: è un campo descrittivo che permette di indicare in quale posizione è stata effettuata la misurazione;       
> *Strumento di misura*: indica lo strumento utilizzato per quella rilevazione;            
> *Valore rilevato*: indica il valore rilevato;            
> *Note*: permette di inserire una nota libera.  

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources). 

Maggiori dettagli sull'area relativa alla gestione della qualità sono presenti in [Qualità](/docs/quality/quality-intro).          

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
> *Stampa selezione*: permette di stampare solo le etichette selezionate;       
> *Stampa tutto*: permette di stampare tutte le etichette.          

Nel tab **Etichette** vengono create automaticamente le etichette inerenti agli articoli prodotti.
La quantità di articoli per ciascuna etichetta è determinata dalle informazioni inserite nell'anagrafica articolo come segue:
1. Tab *Confezionamento*: considera l'UDC e la quantità inserite nella riga con il flag "Unità di carico obbligatoria" attivo;       
2. Tab *Peso/Dimensioni*: considera l'UDC e la quantità inserite nei campi *Tipo unità di carico* e *Numero articoli per unità di carico*;    
3. Tab *Peso/Dimensioni* > *Numero colli*: considera la quantità inserita in *Articoli presenti in un collo*; in questo caso non verrà proposta l'UDC.

Inoltre, l'operatore potrà inserire manualmente o tramite il campo *Codice barcode* *Lotti* e *Serial number* se necessari.      
Il campo **Stato stampa** può assumere i valori di *Non stampato*, *Stampato* o *Ristampato* in base al numero di volte che l'etichetta è stata stampata.

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).     

### Tab Materiali

Nel tab **Materiali** vengono riportati automaticamente i materiali consumati in base alla quantità dell'articolo padre da produrre e alla sua distinta base; solo nel caso in cui sia attivo il flag **Dichiarazione quantità materiale obbligatoria** presente nel tab *Generali* della gestione delle [Risorse di produzione](/docs/production/mes/production-resources), il materiale verrà proposto evidenziato in giallo con quantità zero e l'operatore sarà costretto ad inserirlo manualmente.   
Inoltre, è possibile indicare le quantità scartate di ogni singolo materiale con anche magazzino e causale di scarto; attraverso le apposite griglie è possibile inserire / modificare le informazioni relative ai *Lotti* e *Serial number* relativi al singolo materiale selezionato.            

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).     

### Tab Squadra

*Pulsanti specifici*:

> *Entra in squadra*: permette di inserire un o più operatori all'interno della squadra di lavoro;        
> *Esci da squadra*: permette di fare uscire un o più operatori dalla squadra di lavoro;      
> *Sostituisce operatore*: permette di sostituire un operatore (attivo) con un altro mantenendo le date/ore di ingresso e uscita dalla squadra;        
> *Rimuovi da squadra*: permette di rimuovere la riga relativa all'operatore selezionato.        

Il tab **Squadra** si compone di due sezioni:
> Elenco operatori attivi: permette di inserire e visualizzare gli operatori attivi nella dichiarazione di produzione; il primo operatore inserito assume il flag di *Capo squadra* (che può essere cambiato manualmente);            
> Elenco operatori non attivi: permette di visualizzare gli operatori non più attivi (che hanno lavorato su questa o queste fasi nelle dichiarazioni precedenti).

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).  

### Tab Analisi

Il tab **Analisi** è dedicato alla visualizzazione e consultazione dei dati relativi alle performance dell'attività di produzione; questo si compone di tre sezioni:
- Diagrammi OEE
- Diagrammi a barre: **Analisi quantità** e **Analisi tempo**
- Tabelle: **Valori quantità** e **Valori tempi** 

L'**OEE**, **Overall Equipment Effectiveness** (Efficienza complessiva della risorsa produttiva) è un indice di performance (KPI) per misurare la capacità produttiva di una azienda di produzione.

Il valore **OEE** è costituito dai seguenti tre fattori:
- **Disponibilità operativa (Availability)**: percentuale del tempo lavorato (B) rispetto al tempo disponibile (A).
Si utilizza il rapporto tra il tempo disponibile di lavoro dell'impianto (A) rispetto al reale tempo in cui l'impianto ha prodotto (B).
- **Tempi lavorazione (Performance) - Efficienza**: percentuale tra gli articoli realmente lavorati (D) rispetto agli articoli teoricamente lavorabili (C).
Nella pianificazione vengono calcolati gli articoli lavorabili a regime ottimale (C), eventuali riduzioni di tali performance indicano un calo produttivo (D).
- **Qualità del prodotto (Quality)**: è il rapporto percentuale tra gli articoli conformi (F) rispetto agli articoli prodotti (E).
Si evidenziano in tal modo cali produttivi relativi a scarti o rilavorazioni che incidono sull'inefficienza generale.
- **Efficienza complessiva (OEE)**: deriva dal calcolo dalle tre precedenti analisi ed è dato da: 

OEE = Availability x Performance x Quality x 100 = B/A x D/C x F/E x 100

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
> **Documenti allegati alla segnalazione della fase selezionata**: permette di consultare o allegare direttamente alla dichiarazione dei nuovi documenti anche tramite drag & drop;       
> **Istruzioni operative**: permette di visualizzare tutti i documenti allegati alla fase del ciclo di produzione.          

È possibile modificare il funzionamento e il layout della form tramite la gestione delle [Risorse di produzione](/docs/production/mes/production-resources).  

### Tab Note

Il tab si compone di due sezioni:            
> **Elenco note (seleziona una fase)**: permette di consultare e visualizzare le note relative alla fase selezionata; le note che vengono visualizzate in questa tabella sono prese direttamente dalle fasi del ciclo di lavoro e più precisamente dal tab *Annotazioni*;                
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


