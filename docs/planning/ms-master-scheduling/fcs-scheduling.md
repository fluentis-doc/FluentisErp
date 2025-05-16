---
title: Schedulazione F.C.S.
sidebar_position: 5
---

:::important A cosa serve
Il sistema AFCS Fluentis consente di simulare i processi produttivi, di approvvigionamento, vendita e distribuzione di una organizzazione.
Fluentis AFCS esegue una simulazione di dettaglio molto realistica che consente di raggiungere i seguenti obiettivi:
- Stimare con precisione le date di consegna a clienti interni ed esterni all’organizzazione (anche in ambiti DDMRP).
- Ottimizzare i processi produttivi in modo da bilanciare al meglio costo di produzione e livello di servizio.
- Individuare le criticità che riducono le prestazioni del sistema produttivo, e di conseguenza simulare azioni migliorative (per esempio straordinari, esternalizzazione di attività, incremento della capacità produttiva etc.).
- Misurare la qualità del piano di produzione tramite indicatori numerici di prestazione (K.P.I).
- Simulare diversi scenari da confrontare tramite i K.P.I per scegliere la soluzione migliore.
- Creare dei piani di lavoro dettagliati di breve periodo da rilasciare in produzione.
- Aggiornare rapidamente il piano di produzione in base all’avanzamento effettivo, ed al presentarsi di imprevisti (per esempio mancanza inattesa di personale, guasto di un macchinario etc.).
:::

Per avviare una sessione di simulazione FCS bisogna prima di tutto eseguire la fase di importazione in RAM dei dati del database Fluentis.      
Durante questa fase vengono eseguiti molti controlli sulla validità dei dati ai fini della simulazione, ed al termine si possono avere delle segnalazioni di errori, che non permettono di avviare la sessione di simulazione, o delle segnalazioni di avvertimento, che permettono comunque di procedere con la simulazione.      
Se la fase di importazione si è conclusa senza errori, si può procedere alla simulazione premendo sul tasto **Esegui**, ed alla fine di questa si può salvarne il risultato premendo il tasto **Salva**, ed analizzarne successivamente i dettagli tramite il form [Esecuzioni FCS](/docs/planning/ms-master-scheduling/fcs-execution).       
Il comportamento dello schedulatore dipende dai valori inseriti nei parametri di schedulazione presenti nelle seguenti sezioni della form.

### **Simulazione**

- **Data ed ora inizio simulazione**: tramite questo campo si impostano la data e l'orario di inizio della simulazione. Quando il form viene aperto, questo campo è compilato con la data e l'orario attuali.
- **Passo simulazione in minuti**: con questo campo si imposta la durata di ciascun passo della simulazione, in multipli di 6 minuti (decimi di ora), da un minimo di 6 ad un massimo di 30. Più piccolo è il passo, più tempo durerà la simulazione, a parità di orizzonte di simulazione.      
Se le attività lavorative sono mediamente brevi, scegliere un passo piccolo, se sono mediamente lunghe, come per esempio nel settore delle costruzioni, si può utilizzare un passo più lungo.
- **Giorni anticipo rilascio ordini**: le fasi di un ordine di produzione, vengono simulate a partire dalla data inizio dell'ordine. Se si vuole anticipare le lavorazioni (schedulazione al più presto o per ottimizzare le sequenze di lavoro su macchine con levati tempi di attrezzaggio), inserire un valore positivo in questo campo. Se per esempio si inserisce 10, le lavorazioni di un ordine saranno rilasciate in reparto, e quindi saranno potenzialmente lavorabili, 10 giorni prima della data inizio dell'ordine.      
Un valore negativo avrà invece l'effetto contrario, cioè le lavorazioni non potranno essere rilasciate in produzione alla data inizio dell'ordine, ma solo dopo il numero giorni indicato da questo parametro.    
In sintesi, un valore positivo può migliorare le sequenze di lavorazione su macchine con tempi elevati di attrezzaggio ed aumentare il carico di lavoro della fabbrica nel breve periodo, ma inevitabilmente verranno anticipate delle lavorazioni, incrementando il capitale circolante da investire nel piano di produzione, ed i costi di permanenza in reparto delle merci.
- **Giorni durata simulazione**: questo parametro indica la durata in giorni della simulazione, a partire dalla data inizio impostata.

### **Fornitori**

- **Giorni ritardo disponibilità per acquisti**: questo parametro indica dopo quanti giorni dalla data di consegna indicata sugli ordini di acquisto, la merce è considerata prelevabile da magazzino ai fini della simulazione FCS. È un parametro di sicurezza che rende più realistico e probabile il piano di produzione generato dallo schedulatore.      
Se infatti questo parametro è nullo, la merce degli ordini di acquisto verrà considerata disponibile a partire dal giorno successivo alla data di consegna dell'ordine. Se per esempio, una consegna di un fornitore avviene con 3 giorni di ritardo e questo parametro vale almeno 3, il piano di lavoro creato dallo schedulatore risulterebbe sicuramente ancora valido e fattibile, perchè siamo certi che nessuna lavorazione che necessiti di tale merce possa essere stata simulata prima dell'arrivo effettivo della merce, mentre se questo campo fosse nullo, le lavorazioni che necessitano della merce in ritardo programmate entro quei 3 giorni, non sarebbero eseguibili.  
- **Giorni ritardo disponibilità per conto lavoro**: funziona come nel caso dell'acquisto, ma per gli ordini di conto lavoro.

### **Accorpamento**

- **Massima attesa in ore**: una lavorazione su macchina a lavorazioni accorpate, viene messa in attesa di essere lavorata insieme ad altre fasi con lo stesso codice di accorpamento, al fine di ottimizzare la produttività della macchina.       
Se il tempo di attesa della fase (in ore di turno attivo della macchina), supera questo valore, la lavorazione viene inserita nella prima sessione di lavoro disponibile, a prescindere dalle necessità di ottimizzazione dell'utilizzo della macchina.      
Se non venisse specificato alcun valore per questo parametro, il tempo di attesa di una fase di lavoro sarebbe indefinibile.      
Se per esempio il turno di lavoro normale di una macchina è di 8 ore al giorno, e se questo parametro valesse 24, allora la fase potrebbe rimanere in attesa di essere lavorata non più di 3 giorni.     
Questo parametro serve a limitare il ritardo che può subire una lavorazione per esigenze di ottimizzazione di carico della macchina. Più questo valore è grande, migliore sarà l'ottimizzazione dell'uso della macchina, ma maggiori potranno essere i ritardi medi delle lavorazioni.

### **Attrezzaggio**

- **Considerato breve se non supera minuti**: se ad una macchina è associata una regola di attrezzaggio, quando durante la simulazione diventa libera, se nessuna delle lavorazioni rilasciate ha un tempo di attrezzaggio inferiore al valore di questo campo, e se il centro di lavoro ha una percentuale di carico inferiore al parametro di schedulazione che determina quando questo va considerato un collo di bottiglia, lo schedulatore potrebbe decidere di non impiegarla immediatamente e lasciarla inattiva, in attesa che venga rilasciata una lavorazione con attrezzaggio di breve durata.      
Se esiste una lavorazione rilasciata, che ha un tempo di attrezzaggio che non supera il valore di questo campo, la lavorazione viene assegnata senza dubbio alla macchina.
- **Massimo ritardo operazione in giorni**: una lavorazione può essere ritardata rispetto al suo inizio programmato se, dato lo stato della macchina, il tempo di attrezzaggio non è breve.     
Questa logica, potrebbe portare ad un ritardo inaccettabile di alcune lavorazioni, pertanto viene stabilito un ritardo massimo accettabile tramite questo parametro, oltre il quale la lavorazione viene eseguita a prescindere dal tempo di attrezzaggio.
- **Il centro è considerato un collo di bottiglia se % carico supera**: questa è la percentuale di carico di un centro di lavoro, oltre alla quale esso viene considerato saturo, e di conseguenza le macchine di tale centro che hanno una regola di attrezzaggio, vengono sempre impegnate quando si liberano, a prescindere dai tempi di attrezzaggio delle lavorazioni rilasciate ed in attesa di essere lavorate.       
Questo valore ha effetto solo per i centri di lavoro con macchine con regole di attrezzaggio.
- **Costo giornaliero ritardo consegna**: l'ottimizzazione della sequenza di lavorazione di una macchina con regola di attrezzaggio, può portare ad anticipare alcune lavorazioni, ed a posticiparne altre.       
Questo parametro, il cui valore ottimale va determinato in modo sperimentale in ciascuna azienda, attribuisce un costo a ciascun giorno di ritardo di una lavorazione, al fine di giungere alla sequenza ottimale. Aumentare questo valore, porta a penalizzare maggiormente sequenze di lavoro con task in forte ritardo, e quindi a ridurre il ritardo medio delle lavorazioni sulle macchine con regola di attrezzaggio.
- **Costo annuo scorte in %**: nelle macchine con regola di attrezzaggio, la sequenza di lavorazione ottimale viene ottenuta considerando anche il costo derivante dall'anticipare delle lavorazioni ai fini di ridurre il tempo di attrezzaggio.      
Ciò porta inevitabilmente a generare un costo di work in process, poichè anticipare lavorazioni significa fare un maggior uso di capitale circolante (sul quale si paga un interesse), ed aver bisogno di maggiori spazi di stoccaggio e quindi ad incrementare il costo di stoccaggio delle merci.     Aumentare questo valore porta a ridurre l'anticipo medio  delle lavorazioni sulle macchine con regola di attrezzaggio.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
