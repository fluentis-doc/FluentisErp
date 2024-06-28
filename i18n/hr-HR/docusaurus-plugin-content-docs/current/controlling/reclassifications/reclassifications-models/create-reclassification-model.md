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

Gli elementi necessari per poter creare un nuovo modello sono: 

**Tipo riclassificazione** di appartenenza, 

**Codice del modello** (alfanumerico di 10 caratteri), 

**Descrizione** dello stesso. 

Attribuiti questi tre valori si attiveranno i vari pulsanti di definizione della struttura di riclassificazione: con il pulsante **Inserimento nodo radice** si andranno a creare i primi livelli della struttura, mentre con il successivo **Inserimento nodo** si aggiungeranno sottolivelli a quello selezionato nella struttura. 

Ogni livello della struttura, a sua volta, sarà definito attraverso un codice (alfanumerico di caratteri) e una descrizione: l'univocità in questo caso particolare è data dalla combinazione di entrambi i valori, codice e descrizione insieme (questo perché in un riclassificato Cee, ad esempio, sono presenti più livelli ‘A' nelle varie sezioni del modello). Vediamo nei punti successivi in dettaglio i Tipi di livello che si possono assegnare a questi codici, tenendo conto che la cancellazione dei vari livelli è consentita solo se questi non sono valorizzati in una formula ('somma dei figli' o 'espressione').


### UTILITY NELLA RIBBON BAR


 1. La maschera **ricerca sottoconti mancanti** consente di ricercare e stampare i sottoconti non inseriti in nessun punto del modello di riclassificazione. In particolare, se è stato inserito il generico conto, non saranno visualizzati i suoi sottoconti pur se questi non sono specificatamente inseriti nel modello stesso
 2. La maschera **ricerca sottoconti doppi** consente di ricercare e stampare la lista dei sottoconti che sono stati inseriti in più punti del modello. In particolare, se è stato inserito il generico conto e un suo sottoconto, questo sarà visualizzato in quanto considerato sia nel totale che come dettaglio


### CAMPI DI TESTATA

**Tipo del nodo** - Rappresenta il tipo di riga del modello di riclassificazione: Il tipo *sottoconti* è dedicato alla valorizzazione dei dati di contabilità generale, secondo i dettagli della struttura del piano dei conti della società.
Sono possibile inoltre il tipo ***Centri di costo***, (Centri idi profitto presente p er retro-compatibilità) *Sommatoria* (somma dei figli), ***Espressione*** (Formula definibile liberamente) e *Commesse* (per retro-compatibilità dedicato alla valorizzazione dei dati della contabilità per commesse, secondo i dettagli della commessa.).

A differenza del tipo ‘Somma dei figli', per il livello espressione la sezione della formula è editabile: sono consentite le parentesi e le quattro operazioni algebriche base, così come valori numerici fissi. Per riportare nella formula un livello è necessario tenere premuto il pulsante CTRL e trascinare questo all'interno del campo formula.


**Tipo del dato** può essere ‘Valuta' o ‘Numero': nel primo caso il livello visualizzerà un valore monetario con il simbolo e relativi decimali dalla divisa della società; nel secondo caso, il livello visualizzerà un generico valore numerico arrotondato al numero di decimali impostato nel campo successivo.

**Inversione del segno del nodo selezionato** consente di invertire i segni negativi in positivi e viceversa: nei riclassificati di ERP qualsiasi dato con saldo dare sarà visualizzato con segno positivo, l'avere con segno negativo. Attraverso questo flag, quindi, si potranno visualizzare totali positivi per livelli che per natura hanno saldo avere (passività, ricavi). Attenzione che questa impostazione ha un'influenza determinante sul risultato delle sommatorie e delle espressioni in genere. L'inversione del segno è applicato al risultato del livello, non ai dettagli (sottoconti, cdc, cdp, commesse) che lo valorizzano: questi continueranno ad avere il segno del saldo (vedi oltre in questo documento per l'inversione dei segni dei sottoconti).

**Da stampare** indica se il livello va riportato in stampa o meno.

La sezione **Natura raggruppamento** consente di impostare i tipi di conto che si potranno assegnare a questo livello: in sostanza, all'atto dell'inserimento del sottoconto sarà applicato un filtro per tipo conto già limitato a quanti presentano flag coerenti con l'impostazione stessa. Ad esempio, se la natura è ‘Patrim. attivo', sarà possibile inserire i tipi conto che hanno questo flag in tabella: tipicamente l'attivo, i clienti e le banche. Nel caso in cui si modifichi questa impostazione con sottoconti già presenti nel livello, all'atto del salvataggio della modifica sarà richiesto se cancellare o meno i sottoconti non coerenti.


Con il flag **Considera c.d.c./c.d.p. figli** si potrà inserire nel livello il centro di costo X e ERP riporterà nel riclassificato tutti i suoi centri di costo interni che abbiano un valore. Il flag consente, quindi, di evitare di riportare e manutenere tutto il possibile dettaglio dei centri di costo ma solo il centro di costo superiore che li raggruppa.

Nella griglia dei centri di costo si vanno a caricare i centri di costo che valorizzeranno il livello: oltre al centro di costo è possibile indicare anche il conto/sottoconto, in modo da valorizzare il livello solo con il saldo dei movimenti della combinazione cdc/conto o cdc/sottoconto. L'ultimo flag presente in griglia è denominato **Inv. col.**: significa che, sulla riga selezionata, il segno del saldo sarà invertito.

### GRIGLIA AGGANCIO CONTI / CENTRI AZIENDALI

La griglia **Conti** consente di definire la lista dei conti e/o sottoconti che andranno a valorizzare questo livello del modello. Non è consentito l'inserimento dello stesso conto o sottoconto con lo stesso tipo saldo nello stesso livello, mentre questo può essere inserito in altri punti del riclassificato senza alcun vincolo. È consentito l'inserimento del solo conto (mastro) generico: il caso tipico è il conto generico che contiene i sottoconti di anagrafica, senza dettagliare la lista dei clienti/fornitori nel modello che causerebbe la necessità di un continuo allineamento dei vari modelli.

Il **tipo di saldo** della singola riga di conto o sottoconto prevede le seguenti possibilità: 

**Generale** (sarà inserito il saldo del sottoconto indipendentemente dal suo segno; nel caso di conto generico, sarà inserita la somma dei saldi dei sottoconti appartenenti a quel conto), 

**Dare** (sarà inserito il saldo del sottoconto solo se questo ha segno dare; nel caso di conto generico, sarà inserita la somma dei saldi dare dei sottoconti appartenenti a quel conto), 

**Avere** (sarà inserito il saldo del sottoconto solo se questo ha segno avere; nel caso di conto generico, sarà inserita la somma dei saldi avere dei sottoconti appartenenti a quel conto), 

**Incremento** (per il sottoconto o conto sarà calcolato il valore come differenza tra la chiusura infrannuale del riclassificato e un'altra chiusura di riferimento: questa tipologia è utile in caso di analisi per flussi).

L'ultimo flag presente in griglia è denominato **Inv. col.**: significa che, sul sottoconto selezionato, il segno del saldo sarà invertito. Può tornare utile, ad esempio, per detrarre dal saldo di un conto il valore di un suo sottoconto.

L'inserimento, in questa griglia, può essere effettuato con due metodologie: il caricamento direttamente in griglia, digitando il codice o attraverso l'help conti che consente la selezione di un unico record, oppure l'uso del pulsante ‘Inserimento multiplo sottoconti' per avere un help conti con la selezione multipla attiva.

