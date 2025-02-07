---
title: Nuovo ciclo
sidebar_position: 2
---

Dopo aver creato le distinte base degli articoli, si deve procedere con la definizione dei cicli di lavoro ovvero l'insieme delle varie fasi di produzione di un prodotto.

La procedura di creazione di un **Nuovo ciclo** si apre tramite il percorso:

**Produzione > Cicli di lavoro > Cicli di lavoro**, cliccando sul pulsante **Nuovo**

oppure

**Produzione > Cicli di lavoro > Nuovo ciclo di lavoro**.

Con entrambe le procedure si aprirà la form **Gestione cicli di lavoro** composta da una sezione nella quale si andranno a definire le caratteristiche obbligatorie del ciclo e da una sezione composta da diversi tab che ne raggruppano le caratteristiche specifiche.

### Sezione superiore

Qui si inseriscono le informazioni di base relative al ciclo:

**Ciclo:** si andranno ad inserire il codice e la descrizione del ciclo di lavoro;

**Articolo e Variante**: tramite l'help si andrà ad inserire l'articolo relativo al ciclo e la variante nel caso in cui esista la variante dell'articolo selezionato;

**Versione**: si andrà a selezionare tramite l'apposita combo la versione della distinta per cui si vuole inserire un nuovo ciclo di lavoro;

**Ciclo**: si va a definire se si tratta di un ciclo *Operativo* o *Non operativo* e quindi in questo caso non utilizzabile;

**Tipo ciclo**: che può essere *Standard* per il ciclo principale e che verrà proposto come default per quell’articolo ed avrà come numero ciclo 1, oppure nel caso si abbiano più cicli per lo stesso articolo, si andrà a settare il flag su *Alternativo* e verrà abilitata anche la possibilità di variare il numero di ciclo. Per ogni articolo è possibile avere solo un ciclo *standard*;

**Data inserimento / Data modifica**: le date *Data inserimento / Data modifica* verranno compilate in automatico rispettivamente con la data inserimento del ciclo e se viene apportata una qualsiasi modifica anche con la data di ultima modifica del ciclo;

### Fasi

Nella griglia si inseriscono le fasi di lavorazione del ciclo; per ogni ciclo possiamo avere più fasi di lavorazione. Le fasi vengono codificate all'interno della tabella [Fasi Standard](/docs/configurations/tables/production/standard-phases) che si trova tra le tabella della sezione *Produzione*.

Le informazioni importanti che riguardano la fase e che serviranno a livello produttivo sono:

**Codice**: indica il codice della fase standard; una volta selezionata la fase la griglia si completerà con i dati settati all'interno della tabella;

**Fase**: indica il numero progressivo di fase; che viene proposto in automatico in base al valore del parametro *Proposta sequenza fase*, presente in configurazione; *Parametri > Produzione > Parametri ordini di produzione*. Questo parametro consente di scegliere, durante la creazione di un ciclo di lavoro, il numero di sequenza della fase che viene proposto, che può essere preso dal numero di sequenza della fase standard oppure come progressivo dell’ordine di inserimento, indicando anche il valore progressivo di inserimento nel campo step. 

**Sottofase**: indica il numero di sottofase per differenziarle a parità di numero di fase;

**Descrizione fase / sottofase**: indica la descrizione della fase / sottofase;

**Tipo**: permette di definire se si tratta di è una fase interna e quindi implicherà solamente la creazione di ordini di produzione interni, oppure se è una fase esterna e quindi andrà a generare anche un ordine di conto lavoro;

**Centro di lavoro**: indica il centro di lavoro, ovvero la macchina in cui si svolgerà quella specifica fase;

**Tempo fisso**: se abilitato, indica che il tempo di quella fase è fisso e quindi non variabile in base alla quantità; questo viene ereditato dal centro di lavoro inserito;

**Controllo qualità**: se attivato, questo flag indica che questa fase è soggetta a controllo qualità e nel tab specifico si può indicare il *Piano di controllo* che verrà utilizzato per verificare l'articolo a dichiarazione di produzione effettuata;

**Fase produttiva**: se attivo, indica che la fase è produttiva e si può procedere all'inserimento delle segnalazioni di produzione (quindi attivandolo si vuole che la produzione per questa fase venga rilevata); se non attivo, non sarà possibile dichiarare la fase stessa;      

**Fase movimentabile**: se attivo, indica che nel momento in cui si va a rilevare la fase di produzione si creano anche dei movimenti di magazzino; questo significa che procedendo con la segnalazione di produzione di procederà anche al carico del prodotto finito a magazzino e allo scarico della materia prima impiegata per la produzione in quella fase;

:::note Nota
Tutte le fasi esterne devono sempre avere i flag **Fase produttiva** e **Fase movimentabile** attivi.
:::

**Macchina/Gruppo manodopera**: in questi campi si vanno a selezionare tramite la combo box, il codice della *macchina* in cui avviene la fase e il codice *gruppo manodopera* che viene utilizzato; questi due codici vengono ripresi dalle rispettive tabelle precedentemente codificate: [Gruppi manodopera](/docs/configurations/tables/production/labour-group) e [Macchine](/docs/configurations/tables/production/machines) che si trovano sempre tra le tabella della sezione *Produzione*;  

**Unità di misura tempo**: permette di specificare l'unità di misura dei tempi della fase, che può essere espressa in giorni, ore, minuti e secondi;    

**Inizio/Fine validità**: permettono di indicare la data di inizio e la data fine validità di una fase nel caso in cui si decida che quella fase specifica sarà valida solamente per un determinato periodo di tempo;

**Tipo di Sovrapposizione**: in questo campo viene di default settato il valore *Nessuna*. Se invece si ha una fase che si sovrappone ad un'altra si andrà ad indicare il tipo di sovrapposizione tra quelli proposti nella combo: *Totale*, *A pezzo* e *A Tempo*. Inserendo il valore *Totale*, significa che la fase e sottofase selezionata può iniziare contemporaneamente alla fase indicata nei campi *Fase e sottofase Sovrapposizione*. Mentre scegliendo l’opzione *a quantità* o *a tempo*, la fase selezionata potrà iniziare ad essere lavorata solo al raggiungimento rispettivamente del valore di quantità prodotta o tempo della fase indicata nei campi *Fase e sottofase Sovrapposizione* trascorso indicato nel campo *valore*.

**Valore:** permette di indicare il valore relativo al tipo di sovrapposizione e non centra nulla con valore il economico (ad esempio se la sovrapposizione è *A pezzi* allora nel campo *Valore* è necessario indicare dopo quanti pezzi è possibile iniziare la fase, mentre se la sovrapposizione è *A tempo* nel campo *Valore* è necessario inserire il tempo che deve trascorrere per poter iniziare con la fase);

**Fase sovrapposizione / sottofase sovrapposizione**: in questi due campi, nel caso di sovrapposizione, si andrà ad indicare la fase che si intende sovrapporre alla fase principale;

**Costo Unitario**: in questo campo si va ad inserire il costo della fase quando si decide di non valorizzare con la valorizzazione di macchina e gruppo manodopera;

**Ubicazione**: permette di associare anche un'ubicazione di magazzino alla fase; questo significa che tutti gli articoli impiegati in quella fase saranno presenti in quell'ubicazione.

**Descrizione terzista**: nel caso in cui la fase sia esterna, si potrà andare ad indicare in questo campo il terzista che si occuperà della fase esterna;

**Descrizione Centro di Lavoro**, **Descrizione macchina**, **Descrizione Gruppo Manodopera**: in questi campi si troveranno le descrizioni dei codici riferiti alle varie sezioni elencate.

C'è poi una terza sezione in cui si andranno ad indicare i dati più precisi in riferimento alla macchina, agli operai e ai tempi:

**Numero Macchine**: indica il numero di macchine necessarie per lo svolgimento della fase;

**Tempi macchina**: permette di indicare i tempi macchina espressi nell'unità di misura di riferimento selezionata precedentemente nella griglia fase, espresso nell'unità di misura indicata nel campo **Unità di misura tempo**;

**Quantità fase**: indica la quantità di prodotto che si stima di produrre durante la fase selezionata (ad ogni esecuzione di quella fase);

**Numero Operai**: indica il numero di operai necessari per lo svolgimento della fase;

**Tempo Operai**: il tempo di impiego necessario per lo svolgimento della fase, espresso nell'unità di misura indicata nel campo **Unità di misura tempo**;

**Tempo attesa coda**: indica il tempo di attesa/coda che verrà sommato alla durata della fase; è il tempo di attesa alla fine di ogni esecuzione di quella fase; 

**Tempo attesa-Coda crea impegno**: se attivo, indica che il tempo di attesa/coda crea impegno, quindi non è possibile iniziare una nuova fase perchè il centro di lavoro risulta occupato fino allo scadere del tempo di attesa/coda.

### I tab

**Attrezzaggio**: in questo tab si andranno ad indicare i tempi di attrezzaggio della macchina per poter avviare la fase e i tempi di riattrezzaggio nel caso in cui sia necessario riattrezzare il centro di lavoro tra un'esecuzione e l'altra della fase stessa, rispettivamente nei campi *Tempo attrezzaggio* e *Tempo riattrezzaggio*. Si potranno indicare il numero di macchine e operai necessari per la fase di attrezzaggio nei campi *Numero macchine* e *Numero operai*. Inoltre, nel caso l'attrezzaggio avvenga con *Centro di lavoro / Macchina / Gruppo manodopera* diverso da quello della fase, sarà possibile specificare i nuovi dati tramite le relative combo;

**Materiali**: in questo tab si andranno ad indicare i materiali che si vuole vengano scaricati non alla fine delle fasi di produzione di quel prodotto finito, ma alla fine della fase specifica. Quando si associa un materiale ad una determinata fase, questo non viene più visualizzato nell’help tra i materiali che rimangono da associare alle singole fasi. Si ricorda che tutti i materiali non associati ad una specifica fase, verranno scaricati in concomitanza dell’ultima fase *produttiva* e *movimentabile* del ciclo;          

**Attrezzature**: in questo tab si andranno ad inserire le attrezzature che verranno utilizzare all'interno della fase; si andrà ad inserire l'attrezzatura selezionandola tramite la relativa combo tra le attrezzature codificate all'interno della tabella  [Attrezzature](/docs/configurations/tables/production/equipments) presente nella sezione delle tabelle dedicate alla *Produzione*. Se attivo, il flag *Schedulata* starà ad indicare che l'attrezzatura risulterà impegnata durante la produzione; con questo flag la schedulazione prenderà in considerazione, non l'articolo inserito tramite la combo delle attrezzature, ma l'articolo inserito nei campi classe e codice, il quale deve avere come *Natura articolo* la tipologia *Attrezzatura* o *Utensile*;

**Utensili**: in questo tab si andranno ad inserire eventuali utensili, selezionandoli tramite combo tra quelli codificati all'interno della tabella [Utensili](/docs/configurations/tables/production/tools) presente nella sezione delle tabelle dedicate alla *Produzione*;

**Controllo qualità**: se è stato attivato il flag **Controllo qualità** relativo alla fase selezionata, in questo tab si andrà a selezionare il *Piano di controllo*. In automatico verranno proposte le *Prove pianificate* da effettuare per il controllo dell'articolo. Per la comprensione delle colonne di questa griglia si rimanda alla documentazione relativa ai Piani controllo;     

**Disegni**: in questo tab si andranno ad inserire eventuali disegni relativi a questa fase;

**Annotazioni**: in questi campi si potranno inserire eventuali annotazioni tecniche o di altro genere relative alla fase;

**Istruzioni operative**: permette di caricare documenti di vario genere legati alla fase, i quali saranno poi visualizzati anche all'interno di Fluentis MES;

**Alternative**: in questo tab potranno essere inserite delle fasi alternative alla fase di riferimento; 

**Extra data fasi / Extra data:** in questi due tab si andranno ad inserire, rispettivamente, gli extra data per ogni fase e gli extra data legati al ciclo stesso, selezionandoli tramite combo tra quelli precodificati nella relativa tabella *Extradata* (Utility > Extradata). Per inserire un extra data bisognerà cliccare il tasto destro del mouse e selezionare la voce aggiungi nuovo extra data con la possibilità di scegliere se inserirlo al primo livello, oppure se ci sono già extra data inseriti scegliere se si vuole inserire un extra data figlio all'extra data già esistente; in questo modo comparirà una nuova riga in cui poter procedere con l'inserimento.

*Pulsanti specifici*:

> **Inserisci fasi**: permette di inserire nuove fasi nella griglia relativa alle fasi;  
> **Cancella fase**: permette di cancellare una o più fasi selezionate; 
> **Aggiorna da fase / Cancella i dati attrezzaggio**: compaiono nella Ribbon bar quando ci posiziona nel tab *Attrezzaggio*: tramite il pulsante *Aggiorna da fase* si vanno ad aggiornare i dati di attrezzaggio prendendoli dalla fase; tramite il pulsante *Cancella i dati di attrezzaggio* si vanno invece a cancellare i dati relativi all'attrezzaggio;  
> **Aggiorna materiali da Distinta Base**: questo pulsante compare nella Ribbon bar quando ci si posiziona nel tab *Materiali*: tramite questo pulsante si vanno ad aggiungere nel tab i materiali prendendoli dalla distinta base dell'articolo;  
> **Inserisci / Cancella attrezzatura**: questi pulsanti compaiono nella Ribbon quando ci si posiziona nel tab *Attrezzatura*: tramite questi pulsanti si possono andare ad inserire le attrezzature oppure a cancellare le attrezzature selezionate;  
> **Inserisci / Cancella utensili**: questi pulsanti compaiono nella Ribbon quando ci si posiziona nel tab *Utensili*: tramite questi pulsanti si possono andare ad inserire gli utensili oppure a cancellare gli utensili selezionati.  

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).