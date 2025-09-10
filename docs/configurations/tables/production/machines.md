---
title: Macchine
sidebar_position: 9
---

In questa tabella vengono codificate tutte le macchine impiegate all'interno dei vari cicli di lavoro, ognuna collegata ad un centro di costo.

Le tabelle relative alle macchine e ai gruppi manodopera sono importanti per definire il costo delle varie fasi, in quanto il costo orario della macchina X tempo macchina sommato al costo orario del gruppo manodopera X il costo orario operaio avranno come risultato il costo della fase di lavorazione.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Macchine**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Macchine**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

Per il nuovo record, nella griglia *Macchine*, si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione** della macchina. Si può specificare se la macchina risulta **Attiva** o meno, il centro aziendale collegato alla macchina, ecc.

*Campi specifici*: 

**Macchina**: codice macchina;  
**Descrizione**: descrizione della macchina;  
**Attiva**: indica se la macchina è attiva o meno, quindi se sia utilizzabile e pianificabile;  
**Dichiarazione materiale mobile**: è utilizzato nella form delle dichiarazioni di produzione del WMS; se attivo, in fase di dichiarazione verrà richiesto anche di inserire i materiali consumati;      
**Stampa etichetta**: è utilizzato nella form delle dichiarazioni di produzione del WMS; se attivo, alla conferma della dichiarazione di produzione permette di stampare le relative etichette;      
**Centri di lavoro**: indica su quale centro di lavoro è associata la macchina; è possibile associare più macchine ad uno stesso centro di lavoro e tra queste sarà possibile scegliere quale utilizzare nel widget ***Macchina*** presente nel [tab Produzione del MES](/docs/production/mes/mes-main-form);        
**Centro aziendale**: indica il centro di costo a cui si riferisce la macchina;  
**Reparti**: indica il codice del reparto in cui è inserita la macchina;  
**Classe macchina**: indica la classe della macchina (nel caso in cui la macchina sia codificata come articolo);  
**Codice articolo macchina**: indica il codice articolo (nel caso in cui la macchina sia codificata come articolo);  
**Sito Produzione**: nel caso di più stabilimenti indica il codice del sito produttivo in cui si trova la macchina;  
**Descrizione sito produttivo**: indica la descrizione del sito produttivo; 
**Ubicazione**:           
**Data acquisto**: indica la data di acquisto della macchina;  
**Precodice cespite**: indica il precodice del cespite;  
**Numero**: indica il numero del cespite;  
**Descrizione**: indica la descrizione del cespite;  
**Ordine di acquisto**: indica il numero del documento di acquisto del cespite;  
**Data installazione**: indica la data di installazione della macchina;  
**Data inserimento**: indica la data di inserimento della macchina;  
**Data ultima modifica**: indica la data di ultima modifica della macchina;  
**Descrizione centro di costo**: indica la descrizione del centro di costo a cui si riferisce la macchina;  
**Descrizione Reparto**: indica la descrizione del reparto in cui è inserita la macchina;  
**Descrizione articolo macchina**: indica la descrizione articolo (nel caso in cui la macchina sia codificata come articolo);  

<details>
<summary> I seguenti campi sono utilizzati solamente nella procedura di [Schedulazione F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Turno di lavoro**: scegliere il turno di lavoro standard della macchina (se si sceglie un turno più ampio di quello del relativo centro di lavoro, prevarrà comunque quest'ultimo). Con l'eccezione dei lavoratori, per tutte le altre risorse se è presente una pausa nel turno verrà ignorata. Solo i lavoratori hanno una necessità fisica e legale di pausa. Nel caso la macchina richieda la presenza di un operatore, questa verrà forzata a rispettare la pausa di lavoro dell'operatore, quindi le ore effettivamente lavorabili sono limitate dall'operatore.       
Se per esempio il turno di lavoro dell'operatore è 08:00 - 12:00, 13:00 -17:00, la macchina non produrrà durante la pausa, anche se per essa è stato impostato un turno senza pausa che inizia alle 08:00 e finisce alle 17:00. La differenza tra impostare per la macchina un turno con pausa o senza, sta solo nella capacità mostrata nel relativo istogramma di carico. Nell'esempio fatto, se si imposta un turno senza pausa l'istogramma mostrerà una capacità di 9 ore, ma la macchina non lavorerà mai più di 8, perchè la sua capacità teorica è di 9 ore, ma nella pratica non riuscirebbe mai a lavorare più di 8 ore. Se se imposta un turno uguale a quello del lavoratore, la capacità mostrata sull'istogramma è di 8 ore.         
**Descrizione turno di lavoro**: indica la descrizione del turno di lavoro;               
**% Efficienza**: il tempo di lavoro sulla fase viene aumentato o diminuito in base al valore di questo campo. Se per esempio vale 50%, il tempo di lavorazione sulla macchina sarà doppio rispetto a quello indicato sulla fase. Serve per tenere conto della diversa produttività delle macchine dello stesso centro, ma lo stesso obiettivo può essere raggiunto utilizzando le macchine alternative sulla fase, indicando i relativi tempi di lavorazione;      
**% Manodopera setup**: indica la percentuale del tempo di lavoro del lavoratore assorbita durante l'attrezzaggio. Se inferiore al 100% il lavoratore può lavorare su più macchine simultaneamente;         
**% manodopera lavorazione**: indica la percentuale del tempo di lavoro del lavoratore assorbita durante la produzione. Se inferiore al 100% il lavoratore può lavorare su più macchine simultaneamente;          
**Regola Setup**: regola di attrezzaggio applicabile alla macchina (per fasi con attributi di attrezzaggio). Vedere il relativo form per capire come impostare la regola. Questo campo va utilizzato se il tempo di attrezzaggio della macchina non è trascurabile, e se può variare di molto in base al cambiamento di configurazione, tra lavorazione precedente e lavorazione successiva. Lo schedulatore può creare una sequenza di lavoro ottimale, solo se è messo in condizione di poter calcolare con precisione il tempo di attrezzaggio, tramite la definizione degli attributi di attrezzaggio. Il tempo di attrezzaggio è uno degli elementi che determinano la sequenza ottimale, ma generalmente non è l'unico. Tale tempo viene moltiplicato per il costo orario della macchina, giungendo al calcolo del costo dell'attrezzaggio di un task. Tramite alcuni parametri di schedulazione, viene calcolato un costo dovuto all'anticipare una lavorazioni, ed uno dovuto al ritardarla. Una sequenza ottimale infatti, non può essere tale se alcuni task vengono troppo anticipati o troppo ritardati per poter ridurre il tempo di attrezzaggio. La sequenza ottimale è quindi data da un compromesso tra l'esigenza di diminuire il tempo di attrezzaggio, in modo da aumentare la produttività della macchina, e l'esigenza di non incrementare il work in process e di non creare ritardi eccessivi delle lavorazioni;         
**Regola accorpamento**: regola di accorpamento applicabile (le fasi devono avere un codice di accorpamento). Vedere il relativo form per capire come impostarla. Se una macchina ha una regola di accorpamento, le relative lavorazioni verranno eseguite non singolarmente ma in gruppi aventi lo stesso codice di accorpamento. La macchina verrà fatta funzionare in sessioni di lavoro sequenziali, in ciascuna delle quali verranno trattate insieme solo fasi aventi lo stesso codice di accorpamento. Al fine di massimizzare la produttività della macchina, lo schedulatore cercherà di avviare una sessione di lavoro, solo se le fasi di un accorpamento superano il limite minimo di riempimento della macchina, stabilito nella regola di accorpamento della stessa, a meno che nel gruppo delle fasi ce n'è almeno una che ha atteso per un tempo superiore al massimo consentito nel relativo parametro di schedulazione. Se il riempimento dato dalle fasi con uno stesso codice di accorpamento, supera il limite massimo definito nella regola di accorpamento, verranno create più sessioni di lavoro, ciascuna con un proprio task, cercando ogni volta la combinazione di fasi che massimizza il riempimento della macchina. Questa logica di funzionamento, viene modificata parzialmente se la macchina ha anche una regola di attrezzaggio. Infatti la sequenza di sessioni di lavoro generata dallo schedulatore cercherà di ottimizzare la produttività della macchina, considerando non solo il riempimento di questa ma anche il tempo perso nel relativo attrezzaggio. La produttività di un gruppo di fasi con lo stesso codice di accorpamento, è calcolata considerando il tempo totale di lavorazione (numero sessioni per durata di una sessione più tempo di attrezzaggio) ed il volume totale di lavoro eseguito in tale tempo. Quando ci sono più gruppi tra i quali scegliere, ogni volta lo schedulatore seleziona quello con la maggiore produttività, a meno che nel gruppo vi sia una lavorazione che ha superato il tempo massimo di attesa, stabilito nel relativo parametro di schedulazione;          
**Costo orario Setup**: costo orario attrezzaggio (usato per determinare la sequenza lavorazioni su macchine con regola di attrezzaggio). Questo valore viene moltiplicato per il tempo di attrezzaggio calcolato tramite la regola di attrezzaggio, in modo da calcolare il costo totale dell'attrezzaggio, che è uno dei tre costi presi in esame per determinare la sequenza di lavorazione ottimale.
**Colore sfondo**: indica il colore di sfondo utilizzato nel gantt di macchine per questa macchina; (attualmente non è ancora stato implementato)       
**Colore testo**: indica il colore del testo utilizzato nel gantt di macchine per questa macchina; (attualmente non è ancora stato implementato)      

</details>

Nella seconda sezione invece si può andare a dettagliare la **Sequenze** delle macchine alternative.

*Macchine alternative**: se questo tab è vuoto, lo schedulatore userà solo la macchina indicata sulla fase e, se questa non è indicata, utilizzerà una macchina qualsiasi del centro di lavoro (tra quelle libere ovviamente). Se la lavorazione può essere eseguita solo su alcune macchine del centro e non su tutte, verranno considerate quelle indicate in questa scheda più quella sulla fase.       
Questo tab può essere utilizzato anche indicando tutte le macchine del centro, quando la necessità non è limitare l'elenco delle macchine ma fornire dati diversi per i tempi di lavorazione.

<details>
<summary> I seguenti tab sono utilizzati solamente nella procedura di [Schedulazione F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Attributi di attrezzaggio**: questo tab permette di definire quali attributi di attrezzaggio vanno considerati per la macchina, i coefficienti da applicare per gli attributi numerici, i tempi di montaggio e di smontaggio se non numerici o l'eventuale necessità di calcolare i valori di transizione tramite matrice di attrezzaggio.

**Configurazione iniziale**: questo tab permette di definire i valori di inizio simulazione degli attributi di attrezzaggio (se al momento dell'importazione dello stato della fabbrica la macchina non sta lavorando, non si può ricavare dalla fase in lavorazione i valori degli attributi di attrezzaggio).

**Matrici**: questo tab permette di definire i tempi per passare da un valore ad un altro di un attributo di attrezzaggio quando questi dipendono dalle combinazioni di stato precedente e stato successivo (tipico per esempio nel caso di linee di verniciatura, oppure le sequenze allergeniche nell'industria alimentare)

</details>

*Campi specifici*:  

**Sequenza**: indica la sequenza delle macchine alternative;   
**Macchina**: indica il codice macchina;  
**Descrizione macchina**: indica la descrizione della macchina;  
**Attiva**: indica se la macchina è attiva o meno, quindi se sia utilizzabile e pianificabile;  
**Centro aziendale**: indica il centro di costo a cui si riferisce la macchina;  
**Descrizione centro di costo**: indica la descrizione del centro di costo a cui si riferisce la macchina;   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).