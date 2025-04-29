---
title: Nuova dichiarazione
sidebar_position: 2
---

Normalmente le *Dichiarazioni di produzione* vengono generate automaticamente tramite Fluentis [MES](/docs/production/mes/mes-intro), ma l'utente ha anche la possibilità di generarle manualmente utilizzando questa form.

All'apertura della form è necessario inserire l'ordine di produzione con l’indicazione di anno, numero e lotto, manualmente o tramite l’help dedicato, e la fase e sottofase che si vuole dichiarare sempre in maniera manuale o tramite l’help.         
In questo modo vengono caricati in automatico i dati della fase selezionata nella parte superiore della form, dove possiamo vedere le informazioni relative al tipo ordine di produzione, alla commessa con anno, numero e tipo, al progetto associato, il centro di lavoro e la macchina su cui si sta eseguendo la fase, la data di fine prevista lavorazione, e le informazioni dell’articolo con eventuale variante.        
L’indicazione della quantità totale da produrre, la quantità prodotta che è pari alla somma delle quantità dichiarate dall’ultima fase produttiva e movimentabile del ciclo, quindi corrispondente all’articolo finito, e la quantità di fase prodotta che è data dalla somma delle quantità presenti nella dichiarazione della fase stessa.

Il campo **barcode** presente in testata, viene utilizzato per l'inserimento dell'Ordine di produzione o della Fase da dichiarare.    
Il barcode deve essere composto da un identificativo fisso per riconoscere l'Ordine di produzione (707) oppure la Fase di un ordine di produzione (718), il carattere di separazione "-" e l'identificativo o dell'Ordine di produzione o della Fase che si desidera dichiarare.   

Esempio: 707-1234 oppure 718-98765

Nella griglia centrale vanno inserite le righe della dichiarazione di produzione.
Il primo dato da inserire è lo *Stato della dichiarazione* che può assumere i seguenti valori:

- *Apertura*: permette di creare una dichiarazione di produzione di apertura;    
- *Sospensione*: permette di creare una dichiarazione di produzione di sospensione;    
- *Ripresa*: permette di creare una dichiarazione di produzione di ripresa; va inserito solo dopo una *Sospensione*;          
- *Avanzamento*: permette di creare una dichiarazione di produzione di avanzamento;    
- *Chiusura*: permette di creare una dichiarazione di produzione di chiusura;    

Ogni dichiarazione di produzione deve avere come prima riga una dichiarazione di apertura che determina il momento in cui inizia la lavorazione.              
Questa può essere seguita da un avanzamento o direttamente da una fase di chiusura a seconda dei casi. La differenza sostanziale sta nel fatto che la chiusura non permette di inserire ulteriori righe di dichiarazione, mentre l'avanzamento si.         
Inoltre, è anche possibile inserire dichiarazioni di sospensione seguite da una di ripresa, nel caso in cui sia necessario fermare la produzione per qualche motivo.

*Pulsante specifico*:  

> **Salva**: permette di salvare le modifiche effettuate;        
> **Nuova dichiarazione di produzione**: permette di inserire una nuova riga della dichiarazione;          
> **Ricalcola tempo macchina**: permette di ricalcolare il tempo macchina di tutte le righe della dichiarazione;          
> **Ricalcola tempo uomo**: permette di ricalcolare il tempo di manodopera di tutte le righe della dichiarazione;          
> **Inserisci dichiarazioni**: permette di inserire una nuova riga di dichiarazione successiva a quelle già inserite;         
> **Nuova sospensione/ripresa**: permette di inserire contemporaneamente una riga di sospensione e una riga di ripresa indicando nel pop-up data ed ora per ciascuna; il pulsante si attiva solo se l'ultimo stato della dichiarazione è di *Apertura* o *Avanzamento*;                 
> **Cancella dichiarazioni**: permette di cancellare la riga di dichiarazione selezionata;            
> **Apri UDC**: permette di aprire la *Gestione unità di carico* con filtrata l'unità di carico relativa alla riga delle dichiarazione selezionata;          
> **Crea UDC**: permette di creare un'unità di carico relativa alla riga delle dichiarazione selezionata. Per crearla è necessario prima inserire manualmente *Tipo unità di carico* e il *Dipendente*;       
> **Registrazione dichiarazioni**: permette di creare la registrazione del movimento di magazzino relativo alla riga di dichiarazione selezionata;          
> **Ripristino dichiarazioni**: permette di annullare la registrazione del movimento di magazzino relativo alla riga di dichiarazione selezionata.                                     

*Campi specifici*: 

**Registrato**: indica che la riga della dichiarazione è stata registrata ed è stato creato il relativo movimento di magazzino;        
**Data**: indica la data di inizio relativa alla riga della dichiarazione;         
**Ora**: indica l'ora di inizio relativa alla riga della dichiarazione;         
**Numero**: è un numero progressivo che viene attribuito alle singolo righe della dichiarazione (parte sempre da 1);        
**Stato dichiarazione**: permette di definire lo stato relativo alla riga della dichiarazione. Può assumere i seguenti valori: *Apertura*, *Sospensione*, *Ripresa*, *Avanzamento* o *Chiusura*;        
**Causale di sospensione**: permette di indicare la causale di sospensione da utilizzare per la relativa riga di dichiarazione. Si abilità solo se lo *Stato dichiarazione* è di tipo *Sospensione*;     
**Lotto**: permette di inserire manualmente il numero di lotto relativo alla quantità prodotta;    
**Quantità prodotta**: indica la quantità prodotta relativa alla riga della dichiarazione;         
**Unità di misura alternativa**: indica l'unità di misura alternativa utilizzata;     
**Quantità alternativa**: indica la quantità prodotta nell'unità di misura alternativa utilizzata;       
**Magazzino versamento**: indica il magazzino di versamento della quantità prodotta;         
**Causale versamento**: indica la causale di versamento utilizzata per la quantità prodotta;         
**Versamento ubicazione**: indica l'ubicazione di versamento della quantità prodotta;         
**Quantità scartata**: indica la quantità scartata relativa alla riga della dichiarazione;        
**Magazzino di scarto**: indica il magazzino di versamento della quantità scartata;      
**Causale di scarto**: indica la causale di versamento utilizzata per la quantità scartata;       
**Ubicazione di scarto**: indica l'ubicazione di versamento della quantità scartata;        
**Difetto**: permette di inserire il difetto relativo alla quantità scartata. Si abilità solamente dopo aver inserito un valore maggiore di zero nel campo della **Quantità scartata**;       
**Magazzino di consumo**: permette di specificare il magazzino di consumo dell'articolo (in testata della dichiarazione di produzione) utilizzato dalla fase precedente;            
**Causale di consumo**: permette di specificare la causale di consumo dell'articolo (in testata della dichiarazione di produzione) utilizzato dalla fase precedente;       
**Ubicazione di consumo**: permette di specificare l'ubicazione di consumo dell'articolo (in testata della dichiarazione di produzione) utilizzato dalla fase precedente;        
**Macchine**: indica il numero delle macchine indica la descrizione della causale di versamento della quantità prodotta;             
**Numero macchine**: indica il numero delle macchine utilizzata relativo alla riga della dichiarazione;        
**Gruppi manodopera**: indica il codice del gruppo manodopera utilizzato relativo alla riga della dichiarazione;         
**Numero operai**: indica il numero di operai utilizzati relativo alla riga della dichiarazione;        
**Sito produttivo**: indica il codice del sito produttivo relativo alla riga della dichiarazione;     
**Tempo macchina**: indica il tempo macchina relativo alla riga della dichiarazione; viene calcolato come differenza tra *data/ora* della dichiarazione attuale e quelle della dichiarazione precedente. (La label del campo si modifica in base all'unità di misura del tempo della fase dichiara);           
**Tempo manodopera**: indica il tempo manodopera relativo alla riga della dichiarazione; viene calcolato come differenza tra *data/ora* della dichiarazione attuale e quelle della dichiarazione precedente. (La label del campo si modifica in base all'unità di misura del tempo della fase dichiara);                    
**Tempo attrezzaggio**: indica il tempo di attrezzaggio relativo alla riga della dichiarazione; viene indicato manualmente. (La label del campo si modifica in base all'unità di misura del tempo della fase dichiara);             
**Dipendente**: indica il codice dell'utente che sta effettuando la dichiarazione;             
**Cognome**: indica il cognome dell'utente che sta effettuando la dichiarazione;            
**Nome**: indica il nome dell'utente che sta effettuando la dichiarazione;           
**Unità di carico**: indica il numero dell'unità di carico, composto da anno, numero ordine di produzione e un progressivo. Per far si che sia possibile utilizzare l'unità di carico nelle dichiarazioni di produzione è necessario che il **Gruppo**, configurato nel [Tipo gruppo UDC](/docs/configurations/tables/logistics/loading-unit-group-type/) dell'unità di carico, sia di tipo *Commessa di produzione* oppure *Ordine di produzione*;       
**Tipo unità di carico**: indica il tipo di unità di carico;     
**Descrizione tipo unità di carico**: indica la descrizione del tipo unità di carico;         
**Numero unità di carico**: indica il numero dell'unità di carico;    
**Unità di carico di scarico**: **Work in progress**       
**Altezza**: indica l'altezza dell'unità di carico;    
**Larghezza**: indica la larghezza dell'unità di carico;    
**Profondità**: indica la profondità dell'unità di carico;    
**Descrizione causale di sospensione**: indica la descrizione della *Causale di sospensione* utilizzata nella riga della dichiarazione;                       
**Descrizione magazzino di versamento**: indica la descrizione del magazzino di versamento della quantità prodotta;         
**Descrizione causale di versamento**: indica la descrizione della causale di versamento della quantità prodotta;      
**Descrizione magazzino di scarto**: indica la descrizione del magazzino di versamento della quantità scartata;      
**Descrizione causale di scarto**: indica la descrizione della causale di versamento della quantità scartata;      
**Descrizione macchina**: indica la descrizione della macchina utilizzata;            
**Descrizione gruppo manodopera**: indica la descrizione del gruppo manodopera utilizzato;              
**Descrizione sito produzione**: indica la descrizione del sito produttivo utilizzato.

La parte inferiore della form si compone di una serie di tab relativi alla riga della dichiarazione selezionata.

## Materiali

In questo tab vengono riportati automaticamente i materiali utilizzati nella fase per la realizzazione dell'articolo da produrre, ma l'utente può modificare i dati e/o aggiungere ulteriori materiali in base alle necessità.      
Ovviamente, per far si che i materiali siano riportati automaticamente, la fase deve essere l'ultima di tipo *Produttivo* e *Movimentabile* presente nel ciclo; nel caso in cui non fosse l'ultima, deve comunque essere di tipo *Produttivo* e *Movimentabile* ed ad essa devono essere stati assegnati dei materiali direttamente.  

*Campi specifici*: 

**Registrato**: indica che il materiale della riga della dichiarazione selezionata è stato registrato ed è stato creato il relativo movimento di magazzino;        
**Unità di carico materiale**: permette di indicare l'unità di carico da cui prelevo il materiale;             
**Classe**: indica la classe dell'articolo;         
**Codice articolo**: indica il codice dell'articolo;         
**Variante**: indica il codice variante dell'articolo;         
**Unità di misura**: indica l'unità di misura principale del materiale;        
**Quantità prelevata**: indica la quantità prelevata tramite la procedura [Lista prelievo materiali](/docs/production/pp-production-in-progress/picking-materials-list);         
**Quantità consumata**: indica la quantità utilizzata del materiale;         
**Unità di misura alternativa**: indica l'unità di misura alternativa del materiale;        
**Quantità alternativa**: indica la quantità utilizzata del materiale nell'unità di misura alternativa;        
**Magazzino consumo**: indica il codice del magazzino di consumo del materiale;         
**Causale consumo**: indica il codice della causale di consumo del materiale;         
**Ubicazione consumo**: indica il codice dell'ubicazione del magazzino di consumo del materiale;         
**Quantità scartata**: indica la quantità scartata del materiale;     
**Magazzino di scarto**: indica il codice del magazzino di scarto del materiale;     
**Ubicazione di scarto**: indica il codice dell'ubicazione del magazzino di scarto del materiale;        
**Causale di scarico**: indica il codice della casuale di scarto del materiale;     
**Descrizione articolo**: indica la descrizione dell'articolo;        
**Descrizione variante**: indica la descrizione della variante dell'articolo;        
**Descrizione magazzino consumo**: indica la descrizione del magazzino di consumo del materiale;        
**Descrizione causale consumo**: indica la descrizione della causale di consumo del materiale;        
**Descrizione magazzino di scarto**: indica la descrizione del magazzino di scarto del materiale;        
**Descrizione causale di scarto**: indica la descrizione della causale di scarto del materiale;        
**Priorità**: indica la priorità con la quale vengono visualizzati i materiali.        

Inoltre, nella parte sottostante è possibile inserire i lotti e anche i serial number nelle relative griglie.

La griglia dei *Lotti* si compone delle seguenti colonne:

**Lotto**: indica il numero di lotto del materiale selezionato;        
**Codice lotto fornitore**: indica il numero di lotto del fornitore del materiale selezionato;         
**Quantità**: indica la quantità di materiale selezionato per quel lotto;         
**Ubicazione**: indica l'ubicazione di quel lotto del materiale selezionato;     
**Data inizio**: indica la data inizio del lotto del materiale selezionato;         
**Data scadenza**: indica la data scadenza del lotto del materiale selezionato;         
**Conto/Sottoconto/Descrizione conto**: indicano rispettivamente conto, sotto conto e descrizione del cliente/fornitore del materiale selezionato.   

La griglia dei *Serial number* si compone delle seguenti colonne:

**Barcode**: il codice barcode riporta il numero di serial number e le altre informazione relative. Per tutte le informazioni su come codificare i barcode da leggere in questo campo consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer);          
**Tipo Serial number**: indica il tipo di serial number del materiale selezionato;    
**Serial number**: indica il serial number del materiale selezionato;    
**Data inizio**: indica la data inizio del serial number del materiale selezionato;    
**Annullato**: indica che il serial number è in stato annullato;      
**Lotto**: indica il codice lotto del serial number del materiale selezionato.             

## Squadra

Questo tab permette di gestire i membri della squadra che svolgono la lavorazione relativa alla riga della dichiarazione selezionata andando ad indicare per ognuno data inizio e fine lavorazione.

*Campi specifici*: 

**Codice**: indica il codice dell'operatore che sta lavorando sulla dichiarazione;             
**Cognome**: indica il cognome dell'operatore che sta lavorando sulla dichiarazione;     
**Nome**: indica il nome dell'operatore che sta lavorando sulla dichiarazione;        
**Capo squadra**: indica che quell'operatore è anche capo squadra;      
**Attività**: indica l'attività che sta svolgendo l'operatore;        
**Descrizione**: indica la descrizione dell'attività che sta svolgendo l'operatore;      
**Attrezzaggio**: indica che il tempo lavorato dall'operatore verrà calcolato come tempo di attrezzaggio nelle successive analisi;       
**Data inizio**: indica la data di inizio della lavorazione dell'operatore;         
**Ora inizio**: indica l'ora di inizio della lavorazione dell'operatore;         
**Data fine**: indica la data di fine della lavorazione dell'operatore;         
**Ora fine**: indica l'ora di fine della lavorazione dell'operatore;         
**Data creazione**: indica la data di creazione del record;         
**Data ultima modifica**: indica la data di ultima modifica del record;         
**Operatore**: indica l'utente di creazione del record.

## Articoli alternativi

Questo tab permette di aggiungere e gestire tutti quegli articoli (spin-off) che vengono realizzati come conseguenza della produzione di un articolo principale.       
Quindi, è possibile inserirli nella griglia dedicata con la possibilità di gestirne anche i relativi lotti e serial numbers.      
Ovviamente, i lotti e serial numbers sono riferiti alla riga dell'articolo alternativo selezionato.      
I movimenti di carico degli articoli alternativi saranno effettuati con il magazzino, la causale e l’ubicazione indicate sulla riga.

La griglia dei *Lotti* si compone delle seguenti colonne:

**Lotto**: indica il numero di lotto dell'articolo;  
**Tipo codice lotto**: indica il tipo del codice lotto dell'articolo;         
**Tipo lotto**: indica il tipo del lotto dell'articolo;         
**Codice lotto fornitore**: indica il numero di lotto del fornitore dell'articolo;       
**Note**: permette di inserire una nota relativa al lotto;                 
**Quantità**: indica la quantità dell'articolo per quel lotto;         
**Ubicazione**: indica l'ubicazione di quel lotto dell'articolo;     
**Data inizio**: indica la data inizio del lotto dell'articolo;         
**Data scadenza**: indica la data scadenza del lotto dell'articolo;         
**Conto/Sottoconto/Descrizione conto**: indicano rispettivamente conto, sotto conto e descrizione del cliente/fornitore dell'articolo.   

La griglia dei *Serial number* si compone delle seguenti colonne:
    
**Codice Serial number**: indica il serial number dell'articolo;      
**Tipo Serial numnber**: indica il tipo di serial number dell'articolo;  
**Serial number cliente**: indica il serial number del cliente per quell'articolo;      
**Serial number fornitore**: indica il serial number del fornitore per quell'articolo;      
**Data inizio**: indica la data inizio del serial number dell'articolo;    
**Annullato**: indica che il serial number è in stato annullato;      
**Lotto**: indica il codice lotto del serial number dell'articolo.             

## Sospensioni

Questo tab permette di specificare più causali di sospensione con i relativi minuti e si abilità solamente in corrispondenza di una riga con stato dichiarazione *Sospensione*.  

## Scarto

Questo tab permette di specificare più magazzini e causali di scarto con le relative quantità e si abilità solamente se viene dichiarata una quantità scartata.  

## Extra Data

Permmette di gestire e visualizzare gli Extra Data relativi alla dichiarazione .

Per una descrizione approfondita sugli extra data si rimanda all'articolo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Lotti e Serial Number

Nel tab **Lotti e Serial numbers**, in fase di registrazione della dichiarazione di produzione, vengono riportati in automatico i lotti e i serial numbers degli articoli prodotti in base alla logica indicata nel tab [Lotti e Serial numbers](/docs/erp-home/registers/items/create-new-item#17-lotti-e-serial-number) dell’anagrafica articolo.      
Nel caso in cui fosse indicato un lotto nel campo lotto della riga di dichiarazione, gli articoli prodotti verranno registrati con questo numero di lotto, che ha priorità rispetto alle regole inserite in anagrafica.

La griglia dei *Lotti* si compone delle seguenti colonne:

**Lotto**: indica il numero di lotto dell'articolo;  
**Tipo codice lotto**: indica il tipo del codice lotto dell'articolo;         
**Tipo lotto**: indica il tipo del lotto dell'articolo;         
**Codice lotto fornitore**: indica il numero di lotto del fornitore dell'articolo;       
**Note**: permette di inserire una nota relativa al lotto;                 
**Quantità**: indica la quantità dell'articolo per quel lotto;         
**Ubicazione**: indica l'ubicazione di quel lotto dell'articolo;     
**Data inizio**: indica la data inizio del lotto dell'articolo;         
**Data scadenza**: indica la data scadenza del lotto dell'articolo;         
**Conto/Sottoconto/Descrizione conto**: indicano rispettivamente conto, sotto conto e descrizione del cliente/fornitore dell'articolo.   

La griglia dei *Serial number* si compone delle seguenti colonne:
    
**Codice Serial number**: indica il serial number dell'articolo;      
**Tipo Serial number**: indica il tipo di serial number dell'articolo;  
**Serial number cliente**: indica il serial number del cliente per quell'articolo;      
**Serial number fornitore**: indica il serial number del fornitore per quell'articolo;      
**Data inizio**: indica la data inizio del serial number dell'articolo;    
**Annullato**: indica che il serial number è in stato annullato;      
**Lotto**: indica il codice lotto del serial number dell'articolo.             

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).



