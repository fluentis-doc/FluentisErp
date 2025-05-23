---
title: Centri di lavoro
sidebar_position: 3
---

Attraverso questa form si possono codificare i vari centri di lavoro inserendo anche le informazioni relative alle macchine e ai gruppi di manodopera che li compongono.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

### Ricerca Centri di lavoro

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

### Inserimento Centri di lavoro

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Inserisci**. 

Le informazioni obbligatorie per la creazione di un nuovo centro di lavoro sono: il codice, la descrizione e il tipo.

La form si compone di una sezione principale, dove vengono inseriti i seguenti dati relativi al centro di lavoro:

**Centri di lavoro**: indica il codice del CdL;  
**Descrizione centro di lavoro**: indica la descrizione del CdL;  
**Tempo fisso**: indica che il centro di lavoro lavora a tempo fisso, il tempo di lavorazione dell’articolo non dipende dal numero di pezzi;  
**Capacità infinita**: indica che il centro di lavoro lavora a capacità infinita; quindi, ha una disponibilità talmente grande che è possibile caricarlo continuamente;  
**Tipo centro di lavoro**: indica se il centro di lavoro sia interno o esterno;  
**Macchina**: indica il codice macchina associato a quel centro di lavoro;  
**Numero macchine**: indica il numero di macchine equivalenti;  
**Gruppi Manodopera**: indica il codice del gruppo di manodopera associato al centro di lavoro;  
**Numero Operai**: indica il numero di operai del centro di lavoro;  
**Priorità per il calcolo disponibilità calendario**: indica quale criterio utilizzare per poter calcolare la disponibilità nel tempo di quel centro di lavoro;  
**Reparto**: indica il codice del reparto in cui è inserito il centro di lavoro;  
**% utilizzo centro di lavoro**: indica la percentuale di efficienza del centro di lavoro;             
**% minimo livello occupazionale**: indica la percentuale minima che deve essere libera nel centro di lavoro per potergli assegnare un’altra attività;  
**Ora inizio lavoro**: indica l’orario di inizio lavoro del centro di lavoro;  
**Ora inizio pausa**: indica l’orario di inizio pausa del centro di lavoro;  
**ora fine pausa**: indica l’orario di fine pausa del centro di lavoro;  
**Ora fine lavoro**: indica l’orario di fine lavoro del centro di lavoro;  
**Ore giornaliere**: indica il totale giornaliero delle ore lavorate;  
**Turno di lavoro**: indica il codice del turno di lavoro associato al centro di lavoro;  
**Descrizione turno**: indica la descrizione del turno di lavoro associato al centro di lavoro;  
**Data inserimento**: indica la data di inserimento del record;  
**Data ultima modifica**: indica la data di ultima modifica del record;  
**Descrizione macchina**: indica la descrizione della macchina;  
**Descrizione gruppo Manodopera**: indica la descrizione del gruppo di manodopera;  
**Descrizione reparto**: indica la descrizione del reparto;      
**Sito produzione**: indica il [Sito di produzione](/docs/configurations/parameters/production/production-orders-parameters/production-site) del centro di lavoro;       
**Descrizione sito produzione**: indica la descrizione del [Sito di produzione](/docs/configurations/parameters/production/production-orders-parameters/production-site) del centro di lavoro.

Nella seconda sezione è possibile inserire delle eccezioni per quanto riguarda gli orari di lavoro del centro di lavoro selezionato.

<details>
<summary> I seguenti campi sono utilizzati solamente nella procedura di [Schedulazione F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Tipo capacità**: selezionare **Capacità finita** per tenere conto della capacità produttiva del centro, e delle risorse ad esso associate (macchine, lavoratori, risorse generiche). Per centri con macchine la capacità è calcolata considerando tutte le macchine del centro ed i relativi turni di lavoro standard e relative eccezioni di calendario (vedi istogrammi di carico). Per centri senza macchine, il limite dei task lavorabili contemporaneamente è dato dai lavoratori disponibili con la qualifica di lavorazione richiesta dal centro (secondo turni di lavoro standard ed eccezioni di calendario). In questo caso la capacità mostrata negli istogrammi è il contenuto del campo **Ore mediamente lavorate** del centro di lavoro, che potrebbe risultare inferiore in qualche giorno, al carico di lavoro simulato, pur avendo schedulato il centro a capacità finita. Questo perchè la capacità del centro mostrata negli istogrammi non viene calcolata considerando tutti i lavoratori che possiedono la qualifica di lavorazione richiesta dal centro, in quanto spesso le persone hanno più qualifiche e non vengono dedicate in modo esclusivo al centro di lavoro, quindi se la capacità fosse calcolata in tal modo sarebbe poco realistica e sovrastimata.          
Se si seleziona **Capacità infinita**, il centro non deve avere ne macchinari ne qualifiche, ed in questo caso i task vengono messi in schedulazione considerando solo i vincoli di materiali ed il turno di lavoro standard e relative eccezioni di calendario del centro. Questa scelta ha senso quando il centro ha sempre risorse abbondanti rispetto alle richieste e non è mai necessario attendere che le risorse del centro si liberino. Usare questo valore per le fasi di lavorazione da eseguire presso terzisti (conto lavoro di fase), a meno che si voglia schedulare a capacità finita il terzista. In caso di fase esterna schedulata a capacità infinita,  la durata della fase è data dalle ore della stessa e dalle ore del turno del centro. Se per esempio la fase dura 40 ore ed il centro ha un turno standard di 8 ore, la fase avrà una durata di 5 giorni lavorativi. In tal caso potrebbe essere necessario utilizzare il flag **Tempo fisso** del centro per far si che la durata della fase sia indipendente dalla quantità.            
**Tipo schedulazione centro**: selezionare **Standard** se il centro utilizza macchinari che necessitano di lavoratori dedicati a tempo totale o parziale per farli funzionare, **Automatico** se il centro utilizza macchine che possono funzionare senza lavoratori, **Assieme** se non utilizza macchine ed il numero di lavoratori da assegnare al task è fisso, **Panca flessibile** se non utilizza macchine ed il numero di lavoratori da assegnare al task può variare da un valore minimo, indicato dal campo numero lavoratori della relativa fase, ed un valore massimo indicato dal campo "numero massimo lavoratori" indicato sul centro.             
**Qualifica attrezzaggio**: indica la qualifica lavoratori necessaria per eseguire attrezzaggio macchine del centro;        
**Qualifica lavorazione**: indica la qualifica lavoratori necessaria per eseguire la lavorazione nel centro;       
**Numero operai attrezzaggio**: indica il numero di lavoratori necessario per eseguire l'attrezzaggio delle macchine del centro;          
**Numero massimo operai lavorazione**: Indica il numero massimo lavoratori (solo per centro di tipo panca flessibile). Lo schedulatore impiegherà un numero di lavoratori minimo pari al numero operatori e massimo pari a questo valore;       
**Numero massimo tasks**: indica il massimo numero di task contemporaneamente attivi schedulabile. Se non compilato, il limite sarà dato dal numero macchine, o dal numero lavoratori necessari, o dalle risorse di produzione richieste. Se per esempio il centro ha 10 macchine ma si vuole che non ne vengano usate più di 5 contemporaneamente, impostare a 5 questo campo;      
**Ore mediamente lavorate**: indica le ore mediamente lavorate in un giorno. Per i centri di lavoro che non hanno macchine, questo valore verrà considerato come capacità, mentre nel caso di centri con macchine, verrà considerata la somma delle capacità delle stesse, giorno per giorno in base ai relativi turni di lavoro ed eccezioni di calendario;     
**Tempo buffer**: indica le ore buffer desiderato. Lo schedulatore cercherà di creare una coda di attività in attesa di essere lavorate presso questo centro, pari al valore di questo campo. Serve per applicare un principio chiave della "theory of constraints", ovvero far si che i centri di lavoro che sono dei colli di bottiglia, non risultino mai inattivi a causa di mancanza di materiale da lavorare, come conseguenza di una cattiva programmazione delle attività.

</details>


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).