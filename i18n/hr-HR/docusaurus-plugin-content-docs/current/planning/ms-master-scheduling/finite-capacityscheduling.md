---
title: Schedulazione a capacità finita
sidebar_position: 3
---

La schedulazione di produzione a capacità finita permette di capire quanto lavoro può essere espresso in un periodo di tempo definito, considerando le limitazioni di alcune risorse. L’obiettivo finale è quello di garantire la maggiore efficienza dei ritmi produttivi lungo tutta la filiera interna allo stabilimento, ottimizzando i tempi e riducendo i costi dei centri di lavoro.  
Con questa modalità di pianificazione è possibile creare sequenze ottimali di lavorazione su ogni singolo Centro di lavoro ottenendo la loro massima saturazione.

## Commesse

Il tab commesse mostra solamente le commesse che si trovano in stato non schedulato.

*Pulsanti specifici*:

> **Schedulazione F.C.S.**: consente al sistema di schedulare a capacità finita le fasi di lavorazione dei documenti previsti;  
> **Modifica data commessa**: questo pulsante consente di modificare la data commessa;  
> **Cambia priorità**: tramite questa funzionalità si può variare la piorità delle commesse selezionate;    
> **Parametri MRP**: consente di aprire i parametri MRP delle commesse selezionate;    
> **Distinta base**: consente di aprire le distinte basi delle commesse selezionate;    
> **Ciclo di lavoro**: consente di aprire i cicli di lavoro delle commesse selezionate.        

*Filtri specifici*:

**Tipo commessa**: tramite questa combo è possibile andare a selezionare il tipo di commessa che si vuole visualizzare, se le commesse monoprodotto, le commesse multiprodotto oppure entrambe;

**Sito produzione**: si possono andare a visualizzare le commesse in base al sito di produzione in cui vanno prodotte, selezionandolo tramite l'apposita combo;

*Campi specifici nella griglia dei Risultati*

**Data suggerita**: come spiegato nell'articolo relativo ai parametri generali di schedulazione, attivando un particolare flag chiamato  [Controlla doc in ritardo con ATP](/docs/planning/ms-master-scheduling/general-schedule) lo schedulatore andrà ad eseguire un ragionamento tale per cui se anche uno solo degli ordini che vengono schedulati e generati risulta essere in ritardo rispetto alla data prevista il sistema andrà a cancellare tutti gli ordini creati e ripartirà a generali dalla data MS che viene definita sempre nei parametri e che si attiva solo settando il flag controllo doc in ritardo con ATP e andrà a proporre la nuova data per le commesse proprio nel campo *Data suggerita* presente nella griglia di risultato.

### Procedura schedulazione F.C.S.    

Dal tab **Commesse** è possibile selezionare le commesse non schedulate che si vogliono prendere in considerazione. 
Premendo il pulsante **Schedulazione F.C.S.** la procedura eseguirà una prima schedulazione a capacità infinita sulle commesse non schedulate appena selezionate, utilizzando i parametri presenti nel tab **Parametri generali** e di seguito eseguirà una schedulazione a capacità finita su tutti i documenti indicati nei **Parametri schedulazione a capacità finita**.

Come nel caso della schedulazione generale, gli ordini pianificati si potranno visualizzare nella form [Ricerca ordini pianificati](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

Per visualizzare tutte le schedulazioni effettuate e i relativi errori / warning creati per ogni  commessa, basterà spostarsi nel tab **Storico**.    

## Parametri di schedulazione generale

Tutti i parametri relativi alla fase di schedulazione generale posso essere consultati direttamente nell'articolo relativo alla [Schedulazione generale](/docs/planning/ms-master-scheduling/general-schedule) nella sezione **Parametri di schedulazione generale**.        

## Parametri schedulazione a capacità finita   

:::note Nota
Prima di procedere con la schedulazione F.C.S., è importante settare all'interno di questo tab i parametri  da seguire per eseguire la schedulazione a capacità finita.
::: 

**Schedulazione al più presto o al più tardi**: questi flag sono disabilitati ed è attivo sempre e solo il flag *Al più presto*, in quanto la schedulazione a capacità finita cerca di saturare al più presto i centri di lavoro;        

**Dalla data**: permette di definire la data da cui iniziare la schedulazione a capacità finita; è proposta come *Data odierna* ma può essere incrementata per un numero di giorni pari al valore che si può inserire dai *Parametri MPS* nel campo *Giorni prossima schedulazione*

**Operazione su ordini pianificati Ricalcolo tempo**: il flag è sempre attivo e permette di ricalcolare il tempo negli ordini pianificati;    

**Ricalcolo ordini di produzione**: permette di selezionare quali ordini di produzione, tra *Lanciati* e/o *Esecutivi*, deve prendere in considerazione la schedulazione F.C.S.;    

**Ricalcolo fasi**: permette di selezionare quali fasi di produzione, *Non iniziate* e/o *Già iniziate*, deve prendere in considerazione la schedulazione F.C.S.;    

**Modalità di ricalcolo fasi già iniziate**: permette di segliere la modalità con cui la procedura di schedulazione F.C.S. deve ricalcolare la parte rimanente da eseguire delle fasi già iniziate. Si tratta di definire se dare la priorità al tempo lavorato flaggando *Tempo già lavorato e poi Quantità già prodotte*, oppure dare la priorità alla quantità prodotta con il flag *Quantità già prodotte e poi Tempo già lavorato*;     

**Blocca gli ordini tassativi**: permette selezionare le tipologie di ordini tra *Pianificati*, *Lanciati* ed *Esecutivi*, che nel caso abbiano il flag *Tassativo* abilitato non saranno modificati dalla procedura di schedulazione F.C.S.;    

**Inizia lavori su disponibilità materiale**: se attivo, la schedulazione F.C.S. verificherà anche la disponibilità di materiale fino alla data indicata nel campo **Controllo disponibilità fino al**, oltre a quella data la schedulazione proseguira senza prendere in considerazione la disponibilità di materiale. Attivando il flag **Controllo disponibilità solo sui Materiali critici** la procedura verificherà la diposnibilità solamente per i materiali che in disitinta base hanno il flag *Critico* attivo;   

**Considera disponibiltà Materiale**: permetterà di selezionare la modalità con cui considerare la disponibilità del materiale tra *Generale* (indipendentemente dalla commessa di produzione ch elo impegna) e *Per Commessa Prod.*; attualmente è prevista solamente la regola *Generale*.

Nella parte sottostante della form è possibile indicare con quali criteri, a paratià di documento, la scheduazione a capacità finita deve operare.

:::note Nota
In accordo con i flag precedentemente attivati o meno, la schedulazione F.C.S. schedulerà i vari documenti nel seguente ordine: Fasi già iniziate, Fasi non ancora iniziate, Ordini di produzione in stato esecutivo e poi lanciato ed in fine Ordini pianificati. 
::: 

Dalla tabella **Scelte priorità schedulazione** è possibile trascinare con il drag & drop le singole voci all'interno della tabella **Piorità schedulaizone**, dove in quest'ultima è possibile variarne la priorità. Nel caso in cui vengano selezionare le voci *Clienti critici* oppure *C.d.L critici* si abiliterà anche la tabella **Dettaglio priorità schedulazione** dove sarà possibile inserire rispettivamente i clienti o i centri di lavoro, potendo variare anche in questo caso la priorità.   

*Pulsanti specifici*:

> **Ripristina priorità**: permette di ripristinare le priorità di default all'interno della tabella *Priorità schedulazione*.    

## Monitor

In questo tab, tramite l'attivazione o meno dei flag presenti, l'utente ha la possibilità di scegliere la visualizzazione dei risultati della schedulazione nel tab **Storico**.

Si può decidere se visualizzare i **Calendari** presi in considerazione (il Calendario di *Fabbrica* e il calendario delle *Capacità produttive*); si può decidere che venga segnalato se nella schedulazione erano presenti **Articoli privi di** *Parametri MRP*, privi di *Distinta base* o di *Ciclo di lavoro*, privi di *Fornitore preferenziale* (nel caso di ordini di acquisto), privi di *Terzista preferenziale* (per gli ordini di conto lavoro) e privi dell'indicazione della scorta minima per tutti quegli articoli che sono gestiti a scorta. Per ogni **Commessa di produzione** si può scegliere di visualizzare nello storico, il *Numero di righe schedulate* e il dettaglio di queste righe, le commesse in ritardo e le commesse scadute.

Per quanto riguarda gli **Ordini pianificati**, si può scegliere se visualizzare nello storico, il *Numero di ordini generati* e il loro *Dettaglio*, gli ordini *In ritardo* e *Scaduti*, le *Alternative materiali*; si può scegliere anche di essere avvisati nel caso in cui ci siano **Ordini pianificati privi di** *Materiale*, di *Fasi di lavorazione*, del *Fornitore* (per l'acquisto) e il *Terzista* (per il conto lavoro).

**Legenda**: i flag attivi permettono di ricevere l'avviso e i dettagli riguardanti le voci selezionate.

## Storico

Nella griglia di questo tab vengono visualizzate tutte le informazioni riepilogative relative alla schedulazione della commessa.

**Progr. sched.**: visualizza un semplice progressivo dell'operazione di schedulazione lanciata dall'utente;

**Operatore**: visualizza l'utente che ha lanciato la schedulazione;

**No. errori**: visualizza il numero degli errori registrati durante la procedura di schedulazione;

**Data inizio**: visualizza data e ora di inizio del processo di schedulazione;

**Data fine**: visualizza data e ora di fine del processo di schedulazione;

**Dati schedulati provenienti da**: visualizza l'origine precisa dei dati schedulati;

**Previsionale**: visualizza se i dati provengano dalle Previsioni di Vendita oppure dal Piano Principale di Produzione;

**Periodo**: visualizza il tipo di previsione, settimanale o mensile;

**Giorno**: visualizza il giorno della settimana designato come giorno in cui deve cadere la data di fine della commessa di produzione schedulata direttamente da Definizione MPS.

Tutte le altre colonne della griglia visualizzano le impostazioni utilizzate nel tab **Parametri** della Schedulazione relativa alla riga selezionata.

**Risultato schedulazione**

In base alla riga selezionata nella griglia, in questa sezione compariranno eventuali errori e/o warning con i dettagli richiesti dall'utente nel tab **Monitor**.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).




