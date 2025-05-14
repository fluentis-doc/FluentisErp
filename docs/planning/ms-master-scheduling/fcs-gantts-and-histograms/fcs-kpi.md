---
title: K.P.I. F.C.S.
sidebar_position: 9
---

Questa form riporta i valori dei principali key performance indicators.        
Attraverso le due griglie principale risulta possibile confrontare i valori relativi a due differenti simulazioni, utile per esempio se si eseguono simulazioni con differenti valori dei parametri di schedulazione e stessi dati importati.       

Una volta selezionate le simulazioni, nei tab sottostanti vengono riportati relativi dati.

## Ordini cliente

**Ritardo massimo**: è il ritardo massimo riscontrato tra le righe ordine cliente schedulate. L'indicatore ha fondo scala a 100 giorni, se questo valore supera 100 giorni il valore di dettaglio è riportato in fondo al grafico.

**Ritardo medio**: è il valore medio delle righe ordine cliente schedulate in ritardo.

**Articoli ordini cliente schedulate**: è il numero di righe ordine cliente che sono state schedulate.

**Articoli ordini cliente ritardati**: è il numero di righe ordine cliente in ritardo.

**Percentuale di ritardi**: è il rapporto percentuale tra le righe ordine cliente in ritardo e le righe ordine cliente schedulate.

## Costi flusso materiali

Permette di confrontare i seguenti costi delle simulazioni:

- **Costo flusso di magazzino**: mantenere stoccato un articolo a magazzino ha un costo. In letteratura esistono vari esempi di calcolo di questo costo, normalmente dato dal costo dell'immobilizzo del capitale circolante (interessi da pagare per l'uso del capitale), e costi di stoccaggio delle merci a magazzino (costo di affitto od ammortamento degli spazi di magazzino, costi di climatizzazione ed illuminazione, costi di strutture di stoccaggio, di sistemi di movimentazione merci in magazzino, costi di personale etc.).         
Nel calcolo si tieni conto di questi costi tramite un valore percentuale da applicare al costo standard dell'articolo (vedi parametri di schedulazione). Se per esempio tale percentuale vale 10, ed il costo unitario dell'articolo è di 80, avremo un costo di 8 per un intero anno per una singola unità dell'articolo. Questo valore viene diviso per 365 ottenendo il costo giornaliero per unità, e questo valore viene moltiplicato per la giacenza finale a magazzino di ogni giorno della simulazione, ed i valori per ogni giorno della simulazione vengono sommati.               
Il valore di questo KPI è il costo di mantenimento a magazzino di tutti gli articoli della simulazione durante il periodo della stessa. Più velocemente le merci vengono utilizzate e meno tempo permarranno a magazzino in attesa di essere usate e minore sarà il valore di questo KPI. All'aumentare del flusso delle merci, il valore di questo KPI diminuisce. Anticipare le lavorazioni porta ovviamente ad incrementare il valore di questo KPI.

- **Costo di flusso del W.I.P.**: questo KPI viene calcolato in modo simile a quello di magazzino,  usando la stessa percentuale come base di calcolo. Una volta calcolato il costo giornaliero unitario di stoccaggio di un articolo di produzione, questo viene moltiplicato per la durata schedulata dell'ordine (data fine schedulata meno data inizio schedulata).     
Supponiamo per esempio, di avere un ordine di produzione di 60 pezzi di un articolo che ha un costo unitario di 80, la cui durata schedulata è di 9 giorni, e che la percentuale attribuita al costo di stoccaggio sia 10, avremo un costo giornaliero unitario di  (80 * 10 / 100 ) / 365, pari a 0,0219178  da moltiplicare per 60, ottenendo un costo giornaliero di 1,315 che va moltiplicato per la durata schedulata in giorni dell'ordine, 9, ottenendo un costo totale di w.i.p. dell'ordine pari a 11,84.       
Questo calcolo viene eseguito per tutti gli ordini di produzione schedulati e la somma totale è il valore di questo KPI. Minore è la durata degli ordini di produzione e minore risulta il valore di questo KPI. Se il flusso delle merci in produzione migliora, cioè vengono prodotte in meno tempo, questo KPI diminuisce.

- **Costo flusso totale**: è la somma dei due precedenti valori. Un piano di produzione migliora, solo se questo KPI diminuisce, non se diminuisce uno dei suoi elementi.     
L'effetto di valori diversi dei parametri di schedulazione e delle forzature del planner, possono essere valutati nel loro complesso dall'andamento del valore di questo KPI.

## Centri di lavoro

All'interno di questo tab è possibile selezionare il tipo di indicatore che si vuole visualizzare tra:

- **% Carico**: la percentuale di carico è la percentuale di tempo disponibile in cui è avvenuta la lavorazione
 
- **% Attrezzaggio**: la percentuale di attrezzaggio è la percentuale di tempo disponibile impegnata in attività di attrezzaggio.

- **% ore inattive**: questo KPI è dato dal rapporto tra le ore di attesa improduttiva e le ore disponibili. Le ore di attesa improduttiva, sono quelle in cui un task ha impegnato le relative risorse (macchine, lavoratori, risorse produttive generiche) senza poter creare avanzamento, poichè materiali o lavoratori non erano sufficienti. I materiali possono non essere sufficienti per due motivi: 1. se per qualcuno di quelli necessari è possibile il prelievo parziale, ed al momento dell'avvio in produzione non era disponibile tutta la quantità necessaria, quindi si è prelevato quella disponibile, ma una volta consumata, non ce n'era altra disponibile a magazzino, quindi la lavorazione si è interrotta in attesa della disponibilità del materiale. 2. se il task è relativo ad una fase di lavoro per la quale è stata impostata la sovrapposizione rispetto alla fase precedente, e la fase che precede non riesce a produrre al ritmo richiesto dalla fase di questo task, il quale dunque si troverà ad aver lavorato quanto giunto dalla fase precedente e non avere più materiale da lavorare, quindi rimane inattiva in attesa che arrivi tale materiale. L'altra possibile causa di inattività è data dalla mancanza di lavoratori disponibili. Infatti il task viene avviato se i lavoratori con la giusta qualifica sono disponibili, ma dopo che questi vengono rilasciati (fine attrezzaggio o fine turno di lavoro dei lavoratori), il task non riesce a trovare altri lavoratori e dovrà attendere che diventino disponibili.

- **Buffer medio**: questo valore è calcolato considerando le attività in coda in attesa di essere lavorate presso un centro di lavoro. Questo valore rappresenta la media giornaliera, nel periodo della simulazione, del totale ore da lavorare sul centro in coda in attesa. Se per esempio, in un centro vengono lavorate fasi per un totale di 18 ore di tempo-fase in un giorno, ma queste fasi non hanno dovuto attendere per poter essere lavorate, il buffer di tale giorno vale 0.  In definitiva, valori alti di questo KPI indicano che il centro è un collo di bottiglia. Per esempio, possiamo confrontare due centri di lavoro, e se entrambi hanno un carico percentuale elevato, non significa che entrambi sono dei colli di bottiglia, bisogna valutare il valore di questo KPI per capire quale è più in crisi. Ad esempio, se entrambi hanno una percentuale di carico di lavoro del 95%, ma uno ha un buffer di 2 ore e l'altro ha un buffer di 16 ore, bisogna certamente agire sul secondo, cercando di aumentarne la capacità produttiva o esternalizzando una parte della produzione.

## Macchine

All'interno di questo tab è possibile selezionare il tipo di indicatore che si vuole visualizzare tra:

- **% Carico**: la percentuale di carico è la percentuale di tempo disponibile in cui è avvenuta la lavorazione
 
- **% Attrezzaggio**: la percentuale di attrezzaggio è la percentuale di tempo disponibile impegnata in attività di attrezzaggio.

- **% ore inattive**: questo KPI è dato dal rapporto tra le ore di attesa improduttiva e le ore disponibili. Le ore di attesa improduttiva, sono quelle in cui un task ha impegnato le relative risorse (macchine, lavoratori, risorse produttive generiche) senza poter creare avanzamento, poichè materiali o lavoratori non erano sufficienti. I materiali possono non essere sufficienti per due motivi: 1. se per qualcuno di quelli necessari è possibile il prelievo parziale, ed al momento dell'avvio in produzione non era disponibile tutta la quantità necessaria, quindi si è prelevato quella disponibile, ma una volta consumata, non ce n'era altra disponibile a magazzino, quindi la lavorazione si è interrotta in attesa della disponibilità del materiale. 2. se il task è relativo ad una fase di lavoro per la quale è stata impostata la sovrapposizione rispetto alla fase precedente, e la fase che precede non riesce a produrre al ritmo richiesto dalla fase di questo task, il quale dunque si troverà ad aver lavorato quanto giunto dalla fase precedente e non avere più materiale da lavorare, quindi rimane inattiva in attesa che arrivi tale materiale. L'altra possibile causa di inattività è data dalla mancanza di lavoratori disponibili. Infatti il task viene avviato se i lavoratori con la giusta qualifica sono disponibili, ma dopo che questi vengono rilasciati (fine attrezzaggio o fine turno di lavoro dei lavoratori), il task non riesce a trovare altri lavoratori e dovrà attendere che diventino disponibili.

## Competenze lavoratori

All'interno di questo tab è possibile selezionare il tipo di indicatore che si vuole visualizzare tra:

- **% Carico**: la percentuale di carico è la percentuale di tempo disponibile in cui è avvenuta la lavorazione
 
- **% Attrezzaggio**: la percentuale di attrezzaggio è la percentuale di tempo disponibile impegnata in attività di attrezzaggio.

- **% ore inattive**: questo KPI è dato dal rapporto tra le ore di attesa improduttiva e le ore disponibili. Le ore di attesa improduttiva, sono quelle in cui un task ha impegnato le relative risorse (macchine, lavoratori, risorse produttive generiche) senza poter creare avanzamento, poichè materiali o lavoratori non erano sufficienti. I materiali possono non essere sufficienti per due motivi: 1. se per qualcuno di quelli necessari è possibile il prelievo parziale, ed al momento dell'avvio in produzione non era disponibile tutta la quantità necessaria, quindi si è prelevato quella disponibile, ma una volta consumata, non ce n'era altra disponibile a magazzino, quindi la lavorazione si è interrotta in attesa della disponibilità del materiale. 2. se il task è relativo ad una fase di lavoro per la quale è stata impostata la sovrapposizione rispetto alla fase precedente, e la fase che precede non riesce a produrre al ritmo richiesto dalla fase di questo task, il quale dunque si troverà ad aver lavorato quanto giunto dalla fase precedente e non avere più materiale da lavorare, quindi rimane inattiva in attesa che arrivi tale materiale. L'altra possibile causa di inattività è data dalla mancanza di lavoratori disponibili. Infatti il task viene avviato se i lavoratori con la giusta qualifica sono disponibili, ma dopo che questi vengono rilasciati (fine attrezzaggio o fine turno di lavoro dei lavoratori), il task non riesce a trovare altri lavoratori e dovrà attendere che diventino disponibili.

## Tipi risorsa

All'interno di questo tab è possibile selezionare il tipo di indicatore che si vuole visualizzare tra:

- **% Carico**: la percentuale di carico è la percentuale di tempo disponibile in cui è avvenuta la lavorazione
 
- **% Attrezzaggio**: la percentuale di attrezzaggio è la percentuale di tempo disponibile impegnata in attività di attrezzaggio.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).
