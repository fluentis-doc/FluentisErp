---
title: Risorse di produzione
sidebar_position: 2
---

Attraverso questa finestra vengono settati tutti i parametri che riguardano la gestione delle risorse di produzione all'interno del MES.

*Pulsante specifico*:  

> **Importa**: permette di importare all'interno della tabella **Risorse di produzione**, le seguenti tipologie di risorse: *Articolo*, *Macchina*, *Dipendente*, *Centro di lavoro* e *Strumento di misura*; è inoltre possibile importarne più di una alla volta semplicemente selezionandole tramite il pop-up *Importa*.
Nel caso in cui nella tabella siano già presenti dei record e l'operatore ne seleziona uno con una certa tipologia di risorsa, quando preme il pulsante *Importa* la procedura filtrerà già per quella stessa tipologia di risorsa, inoltre, copierà tutte le impostazioni inserite nella risorsa selezionata (cioè quella già presente nella griglia delle risorse) nei nuovi record delle risorse inserite con la procedura di importazione.

### Risorse di produzione

La form si compone di una prima griglia contenente i dati relativi alle risorse inserite, tra cui:       
**Codice**: indica il codice risorsa di produzione;       
**Descrizione**: indica la descrizione del codice risorsa di produzione;      
**Tipo di risorsa**: indica il tipo di risorsa tra: *Dipendente*, *Articolo*, *Macchina*, *Strumento di misura* e *Centro di lavoro*;         
**Macchina**: indica il codice della macchina associata alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Macchina*;       
**Descrizione macchina**: indica la descrizione della macchina associata alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Macchina*;     
**Centro di lavoro**: indica il codice del centro di lavoro associata alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Centro di lavoro*;      
**Descrizione centro di lavoro**: indica la descrizione del centro di lavoro associato alla risorsa;è abilitato solo se il *Tipo di risorsa* è *Centro di lavoro*;     
**Dipendente**: indica il codice del dipendente associato alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Dipendente*;     
**Cognome**: indica il cognome del dipendente associato alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Dipendente*;     
**Nome**: indica il nome del dipendente associato alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Dipendente*;     
**Classe**: indica la classe dell'articolo associato alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Strumento di misura*;       
**Codice articolo**: indica il codice dell'articolo associato alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Strumento di misura*;       
**Descrizione articolo**: indica la descrizione dell'articolo associato alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Strumento di misura*;       
**Strumento di misura**: indica il codice dell'articolo attrezzatura associato alla risorsa; è abilitato solo se il *Tipo di risorsa* è *Strumento di misura*;        
**Secondi di refresh**: indica il numero di secondi di refresh delle form del MES, ad esempio: per il refresh dei dati nel tab *Analisi* oppure il refresh del tempo di lavorazione automatico.     

Ad ogni risorsa inserita nella griglia superiore sono associate tutte le informazioni presenti nei tab sottostanti.

## Generali

In questo tab sono presenti una serie di informazioni che influenzano il comportamento della singola risorsa di produzione durante le Dichiarazioni di produzione.    

**Operatore obbligatorio**: se attivo, obbliga l'operatore ad inserire nel campo *Risorsa* della form principale delle Dichiarazioni di produzione, una risorsa di tipo dipendente prima di poter proseguire con il resto delle attività. Questo sarà il dipendente che verrà indicato come operatore che effettua la dichiarazione;         
**Password obbligatoria**: se attivo, obbliga l'operatore ad inserire una password per poter proseguire; le password richieste sono nel seguente ordine: la password presente nella form del [Dipendente](/docs/project-management/registers/employee/new-employee/) e se non presente, viene richiesta la password si sistema. Se entrambe non sono presenti, viene richiesto di inserirne una.
:::note Nota
Nel caso in cui siano abilitati entrambi i flag **Operatore obbligatorio** e **Password obbligatoria**, l'operatore dovrà inserire per prima cosa il dipendente e poi, su richiesta della procedura, la password.
:::
**Squadra obbligatoria**: se attivo, abilita un controllo che obbliga l'operatore ad inserire almeno un membro della squadra prima di proseguire nell'attività di dichiarazione;     
**Consenti segnalazione sovrapposta**: se attivo, è possibile dichiarare le fasi di un ordine di produzione senza seguire la sequenza prevista indicata nel ciclo; nel caso non si attivo, invece, non è possibile effettuare nessuna alcuna sovrapposizione di fasi o dichiarare fasi senza seguirne la sequenza del ciclo;    
**Abilita multi-fase**: se attivo, permette di abilitare la possibilità di effettuare dichiarazioni di più fasi contemporaneamente;    
**Numero massimo di fasi**: permette di indicare il numero massimo di fasi che è possibile dichiarare contemporaneamente;    
**Inserimento tempo manuale**: se attivo, abilita l'inserimento del tempo di lavoro da parte dell'operatore;     
**Tempo proposto**: se attivo, abilita l'inserimento del tempo di lavoro viene proposto in automatico;      
**Metodo di ripartizione tempo**: indica la modalità in cui viene ripartito il tempo nel caso di dichiarazione contemporanea di più fasi di lavorazione. Le modalità attive sono: *Sequenza*: il tempo viene ripartito sulle fasi in lavoro in base alla sequenza pianificata o di inserimento, *Proporzionale*: il tempo viene ripartito in maniera proporzionale in base alla quantità prodotta della dichiarazione e alle quantità da produrre delle singole fasi;       
**Metodo di ripartizione quantità**: indica la modalità in cui viene ripartita la quantità nel caso di dichiarazione contemporanea di più fasi di lavorazione. Le modalità attive sono: *Sequenza*: la quantità viene ripartita sulle fasi in lavoro in base alla sequenza pianificata o di inserimento, *Proporzionale*: la quantità viene ripartita in maniera proporzionale in base alla quantità prodotta della dichiarazione e alle quantità da produrre delle singole fasi; *Manuale* permette di indicare le quantità prodotte manualmente su ogni singola fase;         
**Dichiarazione quantità materiale obbligatoria**: se attivo, insieme al flag **Obbligo dichiarazione materiale manuale** presente nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell'articolo, fa sì che nel tab *Materiali* delle Dichiarazioni di produzione l'articolo venga proposto con quantità zero e quindi l'utente, sarà obbligato ad inserire manualmente una valore prima di poter proseguire;    
**Foglio di lavoro obbligatorio**: se attivo, abilita un controllo che impedisce all'operatore di aggiungere una fase che non ha ancora il flag di "Stampa definitiva" abilitato. Questo flag di "Stampa definitiva" può essere abilitato dalla procedura di stampa del [Foglio di lavoro](/docs/production/pp-production-in-progress/reports/worksheet);    
**Stampa etichette obbligatoria**: se attivo, abilita un controllo che obbliga l'operatore a stampare tutte le etichette prima di proseguire nell'attività di dichiarazione;    
**Difetto obbligatorio se dichiarato scarto**: se attivo, abilita un controllo che obbliga l'operatore ad inserire la tipologia del difetto nel caso in cui inserisca una quantità scartata;    
**Registrazione automatica**: se attivo, permette di creare la registrazione di magazzino in maniera automatica alla conferma della dichiarazione.    

### *Gestione documentale*     
**Tipo origine documento da escludere**: questa tabella è legata al tab *Documenti e Istruzioni operative* di Fluentis MES e permette di definire quali tipologie di documenti devono essere escluse; in questo modo i file allegati a queste tipologie di documenti non saranno visualizzati nel tab *Documenti e Istruzioni operative*.     
Le tipologie di documenti che si possono escludere sono: 
> *Nessuna*: nessuno delle tipologie di documenti è esclusa;   
> *Articolo*: tutti i documenti (file, immagini,...) legati all'articolo non saranno visualizzati nel tab *Documenti e Istruzioni operative*;     
> *Ordine cliente*: tutti i documenti (file, immagini,...) legati all'ordine cliente non saranno visualizzati nel tab *Documenti e Istruzioni operative*;      
> *Commessa*: tutti i documenti (file, immagini,...) legati alla commessa non saranno visualizzati nel tab *Documenti e Istruzioni operative*;   
> *Ordine di produzione*: tutti i documenti (file, immagini,...) legati all'ordine di produzione non saranno visualizzati nel tab *Documenti e Istruzioni operative*;
> *Fase ordine di produzione*: tutti i documenti (file, immagini,...) legati alla singola fase di un ordine di produzione (all'interno del tab *Documenti allegati* relativo alla fase) non saranno visualizzati nel tab *Documenti e Istruzioni operative*.          

### *Controlli Qualità*
Contiene una serie di controlli legati al tab *Controllo qualità* di Fluentis MES.     
**Tipo controllo da considerare**: è il tipo documento del controllo articoli in cui verranno memorizzati i valori rilevati;      
**Dettaglio articolo da considerare**: è il massimo dettaglio dell'articolo che si va a considerare per effettuare i test (Nessuno, Lotto, S.N., U.D.C.);     
**La fase è bloccabile**: al primo valore non conforme o alla media dei valori rilevati non conforme, la fase stessa e le fasi successive vengono bloccate fino a quando non verranno sbloccate da parte di un operatore abilitato. In questo caso verrà utilizzata la **Causale di sospensione blocco fase** indicata nella sezione dedicata alle causali di sospensione.        

### *Causali di sospensione*       
**Causali di sospensione da escludere**: in questa tabella è possibile indicare tutte le causali di sospensione che si vogliono escludere all'interno di Fluentis MES.

**Causale di sospensione proposta**: indica la causale di sospensione che viene utilizzata di default nel caso in cui un operatore crei una sospensione senza indicare una causale di sospensione nel relativo campo nel tab *Produzione* di Fluentis MES.

**Interruzione automatica**: se abilitato, permette di attivare le interruzioni automatiche delle dichiarazioni secondo gli orari indicati nel centro di lavoro;        
**Causale di sospensione pausa notturna**: indica la causale di sospensione che viene utilizzata per creare la sospensione per la pausa notturna;      
**Causale di sospensione pausa pranzo**: indica la causale di sospensione che viene utilizzata per creare la sospensione per la pausa pranzo;      
**Causale di sospensione blocco fase**: indica la causale di sospensione che viene utilizzata per bloccare le fasi nel caso di non conformità nei controlli di qualità.      

## Layout

*Pulsanti specifici*:  

> **Layout completo**: permette di attivare il layout completo dell'interfaccia MES con un solo click;           
> **Layout minimo**: permette di attivare il layout minimo dell'interfaccia MES con un solo click;               

In questo tab sono presenti una serie di informazioni che influenzano il layout della risorsa di produzione durante le Dichiarazioni di produzione.      

**Sequenza tabulatori**       
Questa sezione permette di definire se un tab sia visibile o meno, inoltre è possibile variare anche la loro sequenza;    

**Non visualizzare**        
Questa sezione permette di nascondere varie informazioni non necessarie all'interno di Fluentis MES.

### **Generale**
> *Gruppo*: se attivo, nasconde le informazioni relative al gruppo;     
> *Sequenza*: se attivo, nasconde le informazioni relative alla sequenza;     
> *Sottofase*: se attivo, nasconde le informazioni relative alla Sottofase;     
> *Centro di lavoro*: se attivo, nasconde le informazioni relative al centro di lavoro;     
> *Macchina*: se attivo, nasconde le informazioni relative alla macchina;     
> *Gruppo manodopera*: se attivo, nasconde le informazioni relative al gruppo manodopera;     
> *Date previste*: se attivo, nasconde le informazioni relative alle date previste;     
> *Variante*: se attivo, nasconde le informazioni relative alla variante;     
> *Ordine di produzione*: se attivo, nasconde le informazioni relative all'ordine di produzione;    
> *Commessa*: se attivo, nasconde le informazioni relative alla commessa;    
> *Progetto*: se attivo, nasconde le informazioni relative al progetto;    
> *Lotti*: se attivo, nasconde le informazioni relative alla gestione dei lotti;    
> *Serial number*: se attivo, nasconde le informazioni relative alla gestione dei serial number;    
> *UDC*: se attivo, nasconde le informazioni relative alla gestione delle UDC;    
  
### **Articoli prodotti**
> *Magazzino versamento*: se attivo, nasconde le informazioni relative al magazzino di versamento degli articoli prodotti nel tab *Produzione*;    
> *Causale versamento*: se attivo, nasconde le informazioni relative alla causale di versamento degli articoli prodotti nel tab *Produzione*;    
> *Ubicazione versamento*: se attivo, nasconde le informazioni relative all'ubicazione di versamento degli articoli prodotti nel tab *Produzione*;    
> *Magazzino versamento scarto*: se attivo, nasconde le informazioni relative al magazzino di versamento scarto degli articoli prodotti nel tab *Produzione*;     
> *Causale versamento scarto*: se attivo, nasconde le informazioni relative alla causale di versamento scarto degli articoli prodotti nel tab *Produzione*;     
> *Ubicazione versamento scarto*: se attivo, nasconde le informazioni relative all'ubicazione di versamento scarto degli articoli prodotti nel tab *Produzione*;     
> *Quantità alternativa*: se attivo, nasconde le informazioni relative alla gestione della quantità alternativa;  

### **Materiali**
> *Magazzino prelievo*: se attivo, nasconde le informazioni relative al magazzino di scarico dei materiali nel tab *Materiali*;    
> *Causale prelievo*: se attivo, nasconde le informazioni relative alla causale di scarico dei materiali nel tab *Materiali*;    
> *Magazzino versamento scarto*: se attivo, nasconde le informazioni relative al magazzino di scarico scarto dei materiali nel tab *Materiali*;    
> *Causale versamento scarto*: se attivo, nasconde le informazioni relative alla causale di scarico scarto dei materiali nel tab *Materiali*;    

### **Controlli qualità**

> **Sequenza**: se attivo, nasconde le informazioni relative alla sequenza nel tab *Controlli qualità*;     
> **Tipo di prova**: se attivo, nasconde le informazioni relative al tipo di prova nel tab *Controlli qualità*;     
> **Strumenti di misura**: se attivo, nasconde le informazioni relative alla Categoria strumento di misura e agli Strumenti di misura nel tab *Controlli qualità*;      
> **Limiti tolleranze**: se attivo, nasconde le informazioni relative ai Limiti tolleranze (L.min.(toll-), L.min.(toll+), L.max.(toll-) e L.max.(toll+)) nel tab *Controlli qualità*;     
> **Tipo controllo e Frequenza**: se attivo, nasconde le informazioni relative al Tipo controllo prova e Frequenza nel tab *Controlli qualità*;        
> **Magazzino**: se attivo, nasconde le informazioni relative al magazzino nel tab *Controlli qualità*;         
> **Causale**: se attivo, nasconde le informazioni relative alla causale di magazzino per articoli non conformi nel tab *Controlli qualità*;       

### **Altro**

*Produzione*
> *Widget macchina*: se attivo, nasconde le informazioni relative alla macchina nel tab *Produzione*;    
> *Difetto*: se attivo, nasconde le informazioni relative al difetto nel tab *Produzione*;    
> *Causale sospensione*: se attivo, nasconde le informazioni relative alla causale di sospensione nel tab *Produzione*;       

*Squadra*
> *Operatori non più attivi*: se attivo, nasconde la griglia relativa all'*Elenco operatori non più attivi* nel tab *Squadra*;    

*Note*
> *Elenco note*: se attivo, nasconde la griglia relativa ai *Documenti allegati alla segnalazione della fase selezionata* nel tab *Documenti e Istruzioni operative* nel tab *Note*;    

*Analisi*      
> *OEE*: se attivo, nasconde i grafici OEE nel tab *Analisi*;    
> *Grafici*: se attivo, nasconde i grafici a barre (*Analisi quantità*, *Analisi tempo*) nel tab *Analisi*;    
> *Griglie*: se attivo, nasconde le tabelle (*Valori quantità*, *Valori tempo*) nel tab *Analisi*.      

*Extra Data*
> *Elenco extra data*: se attivo, nasconde la griglia relativa all'*Elenco extra data (selezionare una fase)* nel tab *Extra data*;     

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).




