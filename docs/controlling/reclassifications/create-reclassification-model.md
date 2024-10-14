---
title: Crea modello di riclassificazione
sidebar_position: 2
---

:::note Percorso
**Controlling > Riclassificazioni > Modelli di riclassificazione>Crea modello di riclassificazione**

Nota:
Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).

:::

---

### INSERIMENTO NUOVO MODELLO - TESTATA

I modelli di riclassificazione sono elementi comuni a tutte le società caricate nello stesso database: la struttura del riclassificato, quindi, sarà visibile in tutte le società mentre quello che sarà specifico in ognuna di queste sarà l'assegnazione della propria struttura di piano dei conti (cdc/cdp ecc.) ai vari modelli. In questo modo sarà possibile anche creare un riclassificato consolidato di gruppo.

:::tip Nota
Sono comuni a tutte le società, o a tutte le società della stessa localizzazione geografica assegnata al *Tipo riclassificazione* tramite la sua proprietà *Nazione*
:::

Gli elementi necessari per poter creare un nuovo modello sono: 

- **Tipo riclassificazione** di appartenenza, 

- **Codice del modello** (alfanumerico di 10 caratteri), 

- **Descrizione** dello stesso.

- **Inversione segno**, disponibile solo in tipi riclassificazione legati al *Controlling*, consente di forzare l'inversione +- su tutti i nodi del modello

- **Indice in valore assoluto**, disponibile solo in tipi riclassificazione legati al *Controlling*, imposta il calcolo degli indici percentuali in valore assoluto appunto.

Attribuiti questi valori si attiveranno i vari pulsanti di definizione della struttura di riclassificazione: con il pulsante **Inserimento nodo radice** si andranno a creare i primi livelli della struttura, mentre con il successivo **Inserimento nodo** si aggiungeranno sottolivelli a quello selezionato nella struttura. 

Ogni livello della struttura, a sua volta, sarà definito attraverso un codice (alfanumerico di 8 caratteri) e una descrizione: l'univocità in questo caso particolare è data dalla combinazione di entrambi i valori, codice e descrizione insieme (questo perché in un riclassificato UE, ad esempio, sono presenti più livelli ‘A' nelle varie sezioni del modello, con descrizioni differenti). Vediamo nei punti successivi in dettaglio i *Tipi di livello* che si possono assegnare a questi codici, tenendo conto che la cancellazione dei vari livelli è consentita solo se questi non sono valorizzati in una formula ('somma dei figli' o 'espressione').


### UTILITY NELLA RIBBON BAR


 1. La maschera **ricerca sottoconti mancanti** consente di ricercare e stampare i sottoconti non inseriti in nessun punto del modello di riclassificazione: nel filtro di ricerca sono disponibili i flag *Visualizza conti scaduti - con data fine validità*, il flag *Visualizza il conto non utilizzato nella griglia dei centri di costo* e il flag *Visualizza il conto non utilizzato nella griglia dei conti*, questi ultimi due che consentono di definire se ricercare nei nodi di tipo *Centi di costo* o *Sottoconti*
 In particolare, se è stato inserito il generico conto, non saranno visualizzati i suoi sottoconti pur se questi non sono specificatamente inseriti nel modello stesso
 2. La maschera **ricerca sottoconti doppi** consente di ricercare e stampare la lista dei sottoconti che sono stati inseriti in più punti del modello, considerando solo i nodi dei conti o i nodi dei centri tramite i due flag *Visualizza il conto duplicato nella griglia centri di costo* e *Visualizza il conto duplicato nella griglia dei conti* presenti nel filtro. In particolare, se è stato inserito il generico conto e un suo sottoconto, questo sarà visualizzato in quanto considerato sia nel totale che come dettaglio


### CAMPI DI TESTATA

**Tipo del nodo** - Rappresenta il tipo di riga del modello di riclassificazione. Sono disponibili le seguenti tipologie:

- ***Sottoconti*** è dedicato alla valorizzazione dei dati di contabilità generale, secondo i dettagli della struttura del piano dei conti della società.

- ***Centri di costo***  dedicato alla valorizzazione dei dati dell'analitica. Nel caso in cui il modello sia legato al controlling avrà disponibili alcune caratteristiche specifiche.

- ***Centri di profitto*** (presente per retro-compatibilità, solo se la società non ha il flag *Controlling*) dedicato alla valorizzazione dei dati della contabilità per centro di profitto/ricavo

- ***Somma dei figli***: è un nodo che valorizzato automaticamente con la somma dei nodi presenti nel primo livello sottostante.

- ***Espressione***: in questo caso la sezione di compilazione dell'espressione è liberamente configurabile. Sono consentite le parentesi, la gestione dei 4 segni matematici principali, l'inserimento di numeri. Per riportare nella formula un nodo del modello è consigliato l'uso del pulsante 'Formula', che aprirà un help di selezione dei nodi del modello: in questa maschera, i nodi in rosso identificano quelli non ancora salvati e quindi non ancora utilizzabili in una formula.

- ***Commesse*** (presente per retro-compatibilità, solo se la società non ha il flag *Controlling*) dedicato alla valorizzazione dei dati della contabilità per commesse, secondo i dettagli della commessa.

- **Tipo del dato**, il campo è attivo solo in nodi di tipo *Espressione* e ha le opzioni *Valuta* o *Numero*: nel primo caso il livello visualizzerà un valore monetario con il simbolo e relativi decimali dalla divisa della società; nel secondo caso, il livello visualizzerà un generico valore numerico arrotondato al numero di decimali impostato nel campo successivo.

- **Inversione del segno del nodo selezionato** consente di invertire i segni negativi in positivi e viceversa: nei riclassificati di ***FluentisERP*** qualsiasi dato con saldo dare sarà visualizzato con segno positivo, l'avere con segno negativo. Attraverso questo flag, quindi, si potranno visualizzare totali positivi per livelli che per natura hanno saldo avere (passività, ricavi). Attenzione che questa impostazione ha un'influenza determinante sul risultato delle sommatorie e delle espressioni in genere. L'inversione del segno è applicato al risultato del livello, non ai dettagli (sottoconti, cdc, cdp, commesse) che lo valorizzano: questi continueranno ad avere il segno del saldo (vedi oltre in questo documento per l'inversione dei segni di specifici sottoconti).

- **Da stampare**: indica se il livello va riportato in stampa o meno.

:::tip Nota
L'uso di questo flag dipende chiaramente dalla sua gestione nella visibilità all'interno dei report di stampa
:::

- **Mostra dettagli**: abilita la possibilità di evidenziare, nei comparati, i dettagli interni del nodo (cioè la lista di sottoconti o centri)

- **Gestione divisa**: l'opzione è valida per i nodi di tipo *Sottoconto*, indica a ***FluentisERP*** di valorizzare eventuali saldi in divisa per i sottoconti che hanno il flag *Gestione divisa* nel piano dei conti (tipicamente tutte le anagrafiche clienti/fornitori/agenti/banche). In questo caso, quindi, nei riclassificati di questo modello potremo avere N righe per ogni sottoconto, una per ogni divisa di movimentazione nella chiusura infrannuale utilizzata.

- La sezione **Natura raggruppamento** consente di impostare i tipi di conto che si potranno assegnare a questo livello, ed è visibile solo quando siamo in un nodo di tipo *Sottoconti*: in sostanza, all'atto dell'inserimento del sottoconto sarà applicato un filtro per tipo conto già limitato a quanti presentano flag coerenti con l'impostazione stessa. 

:::tip Esempi
Ad esempio, se la natura è ‘Patrim. attivo', sarà possibile inserire i tipi conto che hanno questo flag in tabella: tipicamente l'attivo, i clienti e le banche. Nel caso in cui si modifichi questa impostazione con sottoconti già presenti nel livello, all'atto del salvataggio della modifica sarà richiesto se cancellare o meno i sottoconti non coerenti.
:::

Con il flag **Considera c.d.c./c.d.p. figli** (per modelli non legati a tipi del *Controlling*) si potrà inserire nel livello il centro di costo X e ***FluentisERP*** riporterà nel riclassificato tutti i suoi centri di costo interni che abbiano un valore. Il flag consente, quindi, di evitare di riportare e manutenere tutto il possibile dettaglio dei centri di costo ma solo il centro di costo superiore che li raggruppa.

### GRIGLIA AGGANCIO CONTI 

La griglia **Conti** consente di definire la lista dei conti e/o sottoconti che andranno a valorizzare questo livello del modello. Non è consentito l'inserimento dello stesso conto o sottoconto con lo stesso tipo saldo nello stesso livello, mentre questo può essere inserito in altri punti del riclassificato senza alcun vincolo. È consentito l'inserimento del solo conto (mastro) generico: il caso tipico è il conto generico che contiene i sottoconti di anagrafica, senza dettagliare la lista dei clienti/fornitori nel modello che causerebbe la necessità di un continuo allineamento dei vari modelli.

Il **tipo di saldo** della singola riga di conto o sottoconto prevede le seguenti possibilità: 

**Generale** (sarà inserito il saldo del sottoconto indipendentemente dal suo segno; nel caso di conto generico, sarà inserita la somma dei saldi dei sottoconti appartenenti a quel conto), 

**Dare** (sarà inserito il saldo del sottoconto solo se questo ha segno dare; nel caso di conto generico, sarà inserita la somma dei saldi dare dei sottoconti appartenenti a quel conto), 

**Avere** (sarà inserito il saldo del sottoconto solo se questo ha segno avere; nel caso di conto generico, sarà inserita la somma dei saldi avere dei sottoconti appartenenti a quel conto), 

**Incremento** (per il sottoconto o conto sarà calcolato il valore come differenza tra la chiusura infrannuale del riclassificato e un'altra chiusura di riferimento: questa tipologia è utile in caso di analisi per flussi).

L'ultimo flag presente in griglia è denominato **Inv. col.**: significa che, sul sottoconto selezionato, il segno del saldo sarà invertito.

:::tip Nota
Può tornare utile, ad esempio, per detrarre dal saldo di un conto il valore di un suo sottoconto: ad esempio, togliere un cliente intercompany che è stato codificato all'interno del mastro clienti standard, per poterlo gestire in un nodo separato senza duplicare valori
:::

L'inserimento, in questa griglia, può essere effettuato con due metodologie: il caricamento direttamente in griglia, digitando il codice o attraverso l'help conti che consente la selezione di un unico record, oppure l'uso del pulsante ‘Inserimento multiplo sottoconti' per avere un help conti con la selezione multipla attiva.

### GRIGLIA AGGANCIO CENTRI AZIENDALI

Nella griglia dei centri di costo si vanno a caricare i centri di costo che valorizzeranno il livello. I campi disponibili sono i seguenti:

- **Tipo riga**: il campo è legato alla gestione dei *Cost driver* nel *Controlling* ed è quindi in uso solo nei modelli di tipi legati alla contabilità gestionale del controlling, la selezione possibile è fra
    - *Sorgente* le righe di analitica assegnate direttamente al centro o attribuite al primo ciclo dei driver
    - *Ceduta* ad altri Centri di costo, che saranno indicati in griglia
    - *Ricevuta* da altri Centri di costo, che saranno indicati in griglia

- **Conto-Sottoconto-Descrizione**: serve per indicare con quale conto (o conto-sottoconto) contabile filtrare i dati dell'analitica o della gestionale

- [**Centro di costo**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): il campo è facoltativo nei modelli di tipo legato al Controlling, mentre è obbligatorio negli altri casi. E' il centro da utilizzare per filtrare i dati dell'analitica o della gestionale.

- **Inversione colonne**: significa che, sulla riga selezionata, il segno del saldo sarà invertito

- **Variabili**: il campo è visibile solo nei modelli di tipo legato al Controlling, consente di definire se utilizzare la 
    - quota *variabile* 
    - quota *fissa*
    - *generale* (dare o avere), che è il default quando non indicato

**Tipo saldo**: viene sempre gestito il saldo di tipo *Generale*, solo nei modelli di tipo legato al Controlling dovremo utilizzare i tipi saldo 
    - *Iniziale*
    - *Finale* 
    
per le righe dei sottoconti delle rimanenze iniziali/finali


### PARTICOLARITA' DEL TIPO NODO CENTRI DI COSTO PER MODELLI DEL CONTROLLING
Nei modelli con tipo legato al Controlling, abbiamo disponibilità di alcune opzioni specifiche nei nodi dei Centri di costo. In particolare:

- **Riferimento percentuale**: serve per capire, nelle comparazioni, qual è il nodo di riferimento per calcolare una percentuale 'verticale' nel modello

:::tip Nota
ad esempio lo imposteremo sul totale ricavi in modo da poter capire quanto incide, in percentuale, ogni nodo di costo rispetto ad esso
:::

- **Numeratore per calcolo indici**: in un modello di totalizzazione costi dei centri, indica il nodo che totalizza i costi per usarlo come numeratore per il calcolo delle tariffe dei centri

- **Variabili**: consente di definire se utilizzare la 
    - quota *variabile* 
    - quota *fissa*
    - *generale* (dare o avere), che è il default quando non indicato

l'indicazione a livello di nodo viene applicata se non è indicata a livello di singola riga in griglia

- **Indice del nodo**: non utilizzato

### PARTICOLARITA' DEL TIPO NODO CENTRI DI COSTO PER MODELLI DI CONSOLIDATO DI PROGETTO/COMMESSA

- **Numeratore per calcolo redditività**: indica il nodo che totalizza il margine di progetto/commessa

- **Tipo sorgente**: indica che tipo di origine dati andrà a valorizzare il nodo. Sono possibili le seguenti origini:
    - *Contabile*: utilizzato tipicamente per il nodo che totalizza i ricavi diretti di commessa, il dato arriva nella gestionale dalla contabilità
    - *Manuale*: per dati che arrivano da registrazioni extracontabili di area
    - *Formula*: per dati che arrivano dalle formule di calcolo
    - *Ammortamenti*: per dati che arrivano dal calcolo tecnico degli ammortamenti nel controlling
    - *Stanziamenti residui*: per i conguagli di fine periodo, solitamente non utilizzato
    - *Reversione a tariffa*: solitamente non utilizzato
    - *Rimanenze*: per dati che arrivano dalla contabilizzazione delle rimanenze nel controlling
    - *Materiali*: per evidenziare i consumi degli articoli (materiali) in produzione
    - *Lavorazioni esterne*: per evidenziare i costi delle lavorazioni esterne (dal conto lavoro)
    - *Trasformazione*: per evidenziare i costi delle lavorazioni interne (dalla produzione)
    - *Tempo macchina*: per mostrare i tempi macchina impiegati nella produzione
    - *Tempo uomo*: per mostrare i tempi uomo impiegati nella produzione
    - *Tempo macchina attrezzaggio*: per mostrare i tempi attrezzaggio macchina
    - *Tempo uomo attrezzaggio*: per mostrare i tempi attrezzaggio uomo
    - *Consolidamento*: per le registrazioni di consolidamento intercompany, solitamente non utilizzato
