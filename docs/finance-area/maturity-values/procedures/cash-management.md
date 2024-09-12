---
title: Gestione Liquidità
sidebar_position: 6
---

L’utilità della presente form è quello di dare un quadro semplice e veloce della situazione bancaria in modo da verificare la disponibilità per ogni conto bancario ed eventualmente spostare/ritardare l'impegno o cambiare la banca.


### Modalità Operative: 

Sono presenti due possibili modalità: con o senza l’aggancio ad un cash flow. 

Tramite il cash flow è possibile prendere in considerazione anche i dati prelevati dal ciclo attivo/passivo, in modo da estendere il periodo di analisi oltre a quelle che sono le sole evidenze contabili dei partitari. 

Se non si usa il cash flow, si leggeranno solo saldi contabili (per le disponibilità) ed i partitari (per questo motivo la stessa entry di menù è stata collocata sia nel menu delle partite che nel modulo cash flow…).

:::danger Attenzione
Quello che l’utente vede all’apertura della maschera è l’ultima situazione salvata, così come l’ha gestita l’ultima volta. Le modifiche che dovesse fare ai valori o ai dati, se vengono confermati con un nuovo salvataggio, andranno a storicizzare la situazione di partenza e a memorizzare i nuovi dati, che saranno riproposti riaprendo la maschera in seguito. 
Le precedenti elaborazioni fatte vengono memorizzate nel database ma, attualmente, non è ancora prevista la possibilità di consultare le versioni precedenti.
:::


### Logiche specifiche del cash flow
Se è già presente un cash flow  calcolato ed apriamo per la prima volta la maschera di Gestione liquidità, l’utente può selezionare il cash flow dal quale recepire i dati elaborati.

Una volta selezionato un cash flow, Fluentis prenderà i saldi dei conti finanziari per inserirli nella griglia superiore delle disponibilità.


**ATTENZIONE: occorre aprire l’expander *Liquidità disponibile* per vedere la lista dei conti bancari, con i valori dei fidi e degli utilizzi nel portafoglio.**

![](/img/it-it/finance-area/maturity-values/cash-management-1.png)

tutti gli altri valori saranno da riprendere dal pannello laterale *Cash flow*, ricercando con il pulsante di ***Ricerca cash flow***, selezionando le righe e aggiungendole con il pulsante ***Crea dal flusso di cassa***.

![](/img/it-it/finance-area/maturity-values/cash-management-2.png)

![](/img/it-it/finance-area/maturity-values/cash-management-3.png)

L’utente può creare un nuovo cash flow tramite il pulsante ***Calcola cash flow***, che va a creare una nuova simulazione con i parametri di default salvati (in modo simile a quanto avviene per creare i dati da esportare su altri software di tesoreria come DocFinance: 
l'elaborazione è equivalente all' apertura della maschera di *creazione automatica cash flow*, aggiunta di una descrizione e avvio dell'elaborazione senza aggiunta di altri parametri): 

in questo caso, completata l’elaborazione, Fluentis chiederà se si vogliono aggiornare i dati o meno nella *Gestione della liquidità* attiva. 

In alternativa l’utente può anche creare dal cash flow una nuova simulazione e poi riaprire la maschera di gestione della liquidità: in questo caso, all’apertura della *Gestione della liquidità*, avrà un messaggio che chiede se si vuole aggiornare i dati con quelli del nuovo cash flow o meno.

In entrambi i casi, se non si aggiornano i dati non succederà nulla, mentre, se vengono aggiornati, Fluentis andrà a verificare i cambiamenti alle righe precedenti, per andare ad aggiornare i valori: i dati della liquidità saranno aggiornati con quelli nuovi disponibili dal nuovo previsionale, mentre per quanto riguarda partite e altri flussi Fluentis verifica se la riga esiste ancora, in modo da cancellare il record se non esiste più la partita, oppure aggiornerà i valori (se il residuo è cambiato o la data scadenza è cambiata). 

Non vengono sovrascritte dai nuovi dati quelle impostazioni fatte a mano in precedenza dall’ utente (ad esempio nel campo ‘importo da pagare’, o nella data prevista) per non perdere tali dati.

Fatto questo l’utente potrà leggere dal pannello cash flow i nuovi record previsionali ed aggiungerli alla gestione corrente

### Logiche specifiche quando non c’è il cash flow
In questo caso non accade nulla all’apertura della maschera.
L’utente ha a disposizione il pulsante ***Aggiorna partite*** che consente di fare un allineamento dei record di simulazione (la griglia in basso) rispetto alla situazione attuale delle partite. Se la partita è chiusa allora sarà eliminata dalla gestione, altrimenti sarà aggiornata con il nuovo residuo o le nuove date.

### Logiche generali
#### Griglia in alto
L’utente può riprendere dal pannello *Record* i saldi dei conti che preferisce, per inserirli tra le disponibilità. Questo pannello mostra la *visualizzazione conti*, con le righe di dettaglio dei vari movimenti: selezionando una riga e premendo sul pulsante ***Creazione da registrazioni*** Fluentis prenderà il conto ed inserirà una riga con il <u>saldo ad oggi</u>, <u>**non con l’importo del movimento specifico selezionato**</u>.
E' possibile anche inserire manualmente i record delle disponibilità, o sovrascrivere l’importo valuta e/o euro.

:::note Altri campi della griglia

**Linea di credito globale**: è il castelletto globale dell’anagrafica banca

**Linea di credito anticipi**: è il castelletto anticipi dell’anagrafica banca

**Linea di credito effetti SBF**: è il castelletto sbf dell’anagrafica banca

**Saldo Anticipi**: rappresenta un ‘Saldo anticipi su fattura’, è il totale presentato nel modulo *anticipi e incassi* (con data scadenza superiore ad ‘oggi’)

**Saldo SBF**: rappresenta il ‘Saldo effetti presentati’, il totale degli effetti presentati nel portafoglio (con data scadenza superiore ad ‘oggi’)

**Residuo per Anticipi**: rappresenta il ‘Castelletto residuo per anticipi’, la differenza dei due valori precedenti relativi agli anticipi su fattura

**Residuo per SBF**: rappresenta il ‘Castelletto residuo per presentazione sbf’, la differenza dei due valori precedenti relativi agli effetti

**Liquidità disponibile**: somma di importo del saldo contabile + effetti presentati

**Liquidità disponibile progressiva**: è un progressivo di riga del valore precedente. Il valore dell’ultima riga è quello che si vede in testata dell’expander.
:::

#### Griglia in basso
Anche in questa griglia l’utente può inserire nuove righe manualmente, anche senza collegare alcun conto (ad esempio per rilevare uscite/entrate extracontabili come paghe o iva da versare). 

I campi modificabili sono quelli della *Data prevista*, del *Numero sequenziale*, *importo monetario da pagare*, i flag *Escludi* e *Nascondi*. 

Le righe diventano rosse quando il residuo progressivo di riga va in negativo.

![](/img/it-it/finance-area/maturity-values/cash-management-4.png)

La **data prevista** è la *data prevista* presente all'interno della partita (oppure è impostata uguale ad oggi se questa è inferiore): modificare il valore in questa griglia della presente form va ad aggiornare la data prevista all'interno della partita collegata (al salvataggio). 

Se la riga arriva dal cash flow sarà presa dalla data prevista che c’è nella riga di cash flow (o oggi se antecedente).

La **data scadenza** è la data ufficiale della partita (o del flusso di cash flow).

Il **Numero sequenziale** è quello che mette in ordine di pagamento le righe: lo si può cambiare scrivendo a mano il nuovo valore o indirettamente tramite il pulsante **Modifica la data prevista**. Questo pulsante fa riposizionare le partite selezionate dopo quelle che già esistono alla data impostata, modificandone il numero con un valore superiore.

**Conto/sottoconto** è editabile nelle righe manuali, non quelle che arrivano da partite/flussi

**Nota** è compilata con la ragione sociale del cliente/fornitore, altrimenti sarà scritta manualmente la descrizione del flusso extracontabile che si sta inserendo manualmente
gli importi non sono modificabili se sono legati a righe che arrivano da partite/flussi finanziari

il campo ***conto*** più a destra è il conto della banca d’appoggio (presa dalla partita o dal flusso di cash flow),

il flag **Escludi**  esclude la riga dal calcolo, pur lasciandola visibile

il flag **Nascondi** imposta automaticamente anche il flag *escludi* e serve a non conteggiare la riga e a non renderla visibile (tramite il flag di filtro in testata **Escludi** **nascosti**,  togliendo tale flag tornano visibili).

I campi più a destra sono collegati al [**Livello autorizzativo**](/docs/configurations/tables/finance/authorization-levels/) (**data autorizzazione, nome, descrizione, codice, descrizione e nota di autorizzazione**).

### Altre opzioni:
- il filtro per **conto banca** (in testata), in modo da avere nella griglia superiore le disponibilità di quella banca e nella inferiore le relative righe canalizzate su questo istituto;

- il pulsante **Cambia banca** per cambiare massivamente la banca di riferimento delle righe selezionate

- il pulsante **Autorizza le partite** , per procedere alle autorizzazioni (disponibile se l’utente può dare l’autorizzazione alla riga selezionata, (secondo il suo [**Livello autorizzativo**](/docs/configurations/tables/finance/authorization-levels/) già raggiunto)

- il pulsante **Crea pagamenti** che consente di creare la distinta del modulo *Pagamenti fornitori*, se le righe selezionate sono pagabili.
