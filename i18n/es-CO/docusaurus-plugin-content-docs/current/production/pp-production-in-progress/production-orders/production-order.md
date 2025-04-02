---
title: Ordini di Produzione
sidebar_position: 3
---

Normalmente gli ordini di produzione vengono generati automaticamente dalla procedura di *Rilascio ordini di pianificati*.
Per creare un ordine di produzione manualmente, è necessario creare prima l'ordine pianificato di produzione e poi rilasciarlo tramite la procedura dedicata. 

## Testata ordine di produzione 

in testata vengono riepilogati tutti i dati riguardanti l'ordine di produzione, come: numero commessa e cliente di riferimento, progetto collegato, data inizio/fine, articolo, versione distinta base e ciclo, quantità da produrre, ecc...

*Pulsante specifico*:  

> **Completamento dati ordine**: richiama la procedura che consente di inserire e/o aggiornare, per l'articolo inserito nell'ordine di produzione, tutti i dati relativi a materiali, fasi, attrezzaggio, attrezzature, attributi e note varie, riprendendoli da distinta base e ciclo di lavorazione dell'articolo;
> **Ricalcola data inizio**: Richiama la procedura che consente di eseguire un aggiornamento della data inizio dell'ordine di produzione ed eventualmente delle fasi di lavorazione dello stesso a seguito di una modifica dei tempi di lavorazione e/o della quantità da produrre dell'articolo oggetto di ordine di produzione;  
> **Genera distinta base**: consente di generare la distinta base sulla base dei dati inseriti al'interno dell'ordine di produzione o di aggiornare i dati esistenti con quelli inseriti nell'ordine;  
> **Generazione ciclo di lavoro**: permette di creare il ciclo di lavoro dell'articolo basandosi sui dati inseriti nell'ordine, o di aggiornare i dati esistenti con quelli inseriti nell'ordine; 

*Campi specifici*: 

**Stato**: indica lo stato dell'ordine di produzione: *Lanciato* è lo stato iniziale dell'ordine di produzione appena generato dalla procedura di rilascio ordini pianificati, mentre *Esecutivo* è lo stato da assegnare all'ordine per poi poter procedere con le segnalazioni di produzione.     

## Materiali

In questo tab vengono riportati i materiali di primo livello della distinta base relativa al prodotto finito da produrre, ma l'utente può modificare i dati e/o aggiungere ulteriori materiali alla lista componenti dell'ordine di produzione.  
Per importare i dati direttamente dalla distinta base dell'articolo, è necessario cliccare sul pulsante **Completamento dati ordine** presente nella ribbon bar.

*Pulsanti specifici*:

> **Inserisci materiale**: consente di inserire un nuovo materiale nella griglia;  
> **Cancella materiale**: consente di cancellare i materiali inseriti nella griglia. 

*Campi specifici*:

**Priorità**: qui viene visualizzata la priorità del componente, se presente, inserita in distinta base. Essa può essere modificata, come tutti gli altri dati presenti in questa griglia;  
**C/L**: in questo campo viene ripreso il flag presente nei *Parametri MRP* dell'articolo chiamato 'considera in CL' ovvero indica se l'articolo deve essere incluso come materiale negli ordini di conto lavoro;  
**Unità di misura**: in questo campo si inserisce l'eventuale unità di misura alternativa dell'articolo;  
**Data impiego**: coincide con la data inizio prevista dell'ordine di produzione (modificando la prima viene automaticamente cambiata anche quest'ultima);  
**Q.tà impiego**: rappresenta la quantità unitaria necessaria per questo articolo (prevista dalla DB) che può essere comunque modificata;  
**Q.tà totale**: rappresenta la quantità che si ottiene moltiplicando la *Q.tà d'impiego* per la *Q.tà da produrre*; 
**Q.tà alternativa**: rappresenta la quantità totale ma espressa nell'unità di misura alternativa;  
**% scarto**: in questa casella viene inserita o ripresa dalla distinta base l'eventuale % di scarto per questo articolo;  
**Fase/StFase**: con un doppio click si apre un help fasi di lavorazione dal quale si può selezionare la relativa fase e sottofase, e quindi assegnare il materiale selezionato ad una determinata fase di lavorazione dell'articolo;  
**Q.tà disp**: in questo campo compare la quantità disponibile dell'articolo alla data di impiego;
**Da dichiarare su mobile**: se abilitato, verrà dichiarato su mobile.

## Fasi

In questo tab vengono riportate le fasi del ciclo di lavoro relativo al prodotto finito da produrre, ma l'utente può modificare i dati e/o aggiungere ulteriori fasi all'ordine di produzione.  
Per importare i dati direttamente dal ciclo di lavorazione dell'articolo, è necessario cliccare sul pulsante **Completamento dati ordine** presente nella ribbon bar.
Nell'ordine di produzione è possibile variare una fase da interna ad esterna, quindi sarà possibile inserire anche il terzista e al salvataggio dello stesso la procedura creerà l'ordine di conto lavoro. Inoltre, nel caso in cui una fase esterna venga convertita in interna, la procedura eliminerà automaticamente l'ordine di conto lavoro collegato.

*Pulsanti specifici*:
> **Inserisci fase**: consente di inserire una nuova fase nella griglia;  
> **Cancella fase**: consente di cancellare le fasi inserite nella griglia. 

*Campi specifici*:

**Codice fase/Fase/Sotto Fase**: con un doppio click si apre il relativo help fasi di lavorazione dal quale si può selezionare la relativa fase e sottofase;  
**Ctrl. qual.**: questo flag indica se il materiale debba essere sottoposto a controllo qualità prima del suo utilizzo;  
**Fase prod**: se il flag è spuntato identifica che la fase in questione è una fase produttiva, e che quindi dovrà essere segnalata;  
**Centro di lavoro**: da questa combo si imposta il Centro di lavoro. Esso viene proposto in automatico, ripreso dalla fase che è stata precedentemente selezionata ed inserita nella griglia;  
**Data inizio/fine prevista**: si tratta delle date di inizio e fine della relativa fase; cambiando le Date previste di inizio e fine lavorazione vengono automaticamente modificate anche quest'ultime. Esse vengono calcolate in base i tempi inseriti nelle fasi di lavorazione, e più precisamente in base al maggiore tra il tempo operaio e il tempo macchina totale per la fase selezionata;  
**Tempo macchina**: è il tempo impiegato dalla macchina per realizzare la fase, riferito alla quantità di pezzi per fase;  
**Numero macchine**: indica il numero di macchine coinvolte in questa fase;  
**Qtà pezzi per fase**: indica il numero di pezzi per fase;  
**Tempo operaio**: è il tempo impiegato dall'operaio per realizzare questa fase, riferito alla quantità di pezzi per fase;  
**Numero operai**: è il numero di operai coinvolti in questa fase;  
**Conto terzista/descrizione terzista**: con doppio click sulla casella si apre il help per poter selezionare il conto e sottoconto del relativo terzista. Questa *casella è attiva solo* nel caso in cui la fase sia designata come fase *Esterna*. Da notare che il *terzista* viene anch'esso ripreso dalla fase di lavorazione inserita nel ciclo di lavorazione dell'articolo;
**Ord. CL creato**: se flaggato, indica che è già stato creato il relativo ordine di conto lavoro;
**Sequenza**: indica la sequenza con cui dovrà essere realizzata quella fase, è possibile modificarlo direttamente dall'ordine di produzione.   
**Costo operaio**: viene valorizzato da quando inizio a fare le dichiarazione di produzione;    
**Costo macchina**: viene valorizzato da quando inizio a fare le dichiarazione di produzione;    
**Costo attrezzaggio**: viene valorizzato da quando inizio a fare le dichiarazione di produzione.   

### Fasi - Proprietà

Contiene le proprietà relative alla fase selezionata.

**Descrizione fase/sottofase**: in questo campo appare la descrizione della fase selezionata;  
**Tipo**: in questa combo è possibile impostare il tipo di lavorazione (interna o esterna);  
**Sovrapp**: tramite questa combo inserisco la tipologia di un'eventuale sovrapposizione tra fasi. Possiamo avere sovrapposizione *Totale* (in questo caso la fase in oggetto è sovrapposta totalmente alla fase indicata successiva), *A pezzi* (in questo caso è necessario indicare dopo quanti pezzi prodotti da questa fase avrà inizio la fase successiva), *A tempo* (in questo caso è necessario indicare dopo quanti minuti da quando è iniziata la fase in oggetto avrà inizio la fase successiva);  
**UM Tempi**: in questa combo box compare l'Unità Misura Tempi della Fase; si può decidere di gestire i tempi della fase in secondi, minuti, ore e giorni. Di solito si gestiscono a minuti i tempi delle fasi interne e a giorni quelli delle fasi esterne, ma ovviamente dipende molto dalla tipologia di azienda per cui si sta impostando il lavoro;  
**Macchina**: in questa combo può essere selezionato il codice (e descrizione) della relativa macchina. Essa viene proposta in automatico, ripresa dal centro di lavoro che è stato precedentemente inserito nella griglia;  
**Gruppo manodopera**: in questa combo può essere selezionato il codice (e descrizione) del relativo gruppo manodopera. Essa viene proposto in automatico, ripreso dal centro di lavoro che è stato precedentemente inserito nella griglia;  
**Sovrapposiz. riferita alla fase/sottofase**: qui viene indicato il codice della fase e Sottofase che presentano una sovrapposizione con la fase in oggetto. Di solito si indica la fase successiva, ma anche qui si tratta solo di una consuetudine; 
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

In questo tab, costituito principalmente da una griglia, è possibile visualizzare i dettagli delle prove pianificate di controllo qualità per la fase/sottofasse.

## Nota fase

In questo tab viene visualizzata la nota legata alla fase di lavorazione selezionata nel tab *Fasi*. Essa è modificabile dall'utente contestualmente all'ordine di produione in oggetto.

## Istruzioni opertative

In questo tab è possibile allegare e visualizzate le *Istruzioni operative* legate alla fase di lavorazione selezionata nel tab *Fasi*.

## Personale

In questo tab è possibile inserire gli operatori che dovranno svolgere le singole fasi del ciclo produttivo.    

## Extra Data

Per una descrizione approfondita sugli extra data si rimanda all'articolo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).