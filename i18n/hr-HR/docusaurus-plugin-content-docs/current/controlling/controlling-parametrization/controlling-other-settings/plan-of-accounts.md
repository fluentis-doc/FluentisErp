---
title: Piano dei Conti  
sidebar_position: 3
---

La tabella del [***Piano dei conti***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) presenta una serie di caratteristiche molto importanti a livello di logiche del Controlling, sia questo inteso come simulazioni di bilancio infrannuali che di contabilità analitica/gestionale vera e propria. Andiamo a vedere punto per punto le caratteristiche specifiche.

## GRIGLIA DEI SOTTOCONTI

- ***TIPO CONTO***: il collegamento al tipo conto è di fondamentale importanza: in particolar modo il tipo conto che prevede il flag 'Servizio' attivo (nel ***FastStart*** sono i *Costi da rettificare* e i *Ricavi da rettificare*) sarà quello che attiverà la gestione automatica dei ratei/risconti, sia a livello di contabilità generale (procedura delle ***Scritture di assestamento*** che per i bilanci infrannuali e le relative ***Scritture di rettifica*** e ***Scritture di integrazione***)

- flag ***GESTIONE CENTRI AZIENDALI***: se tutti associati a tipi conto economici hanno automaticamente la valorizzazione dell'analitica (se la causale contabile a sua volta ne prevede la gestione), questa può essere abilitata anche per Sottoconti patrimoniali tramite questo flag.

- ***VARIABILITA'***: quando la società ha il flag *Controlling* attivo, la contabilità gestionale che si valorizza dall'analitica prevede la suddivisione degli importi in *quota fissa* e *quota variabile*, che può essere definita con questo valore di default quando non è valorizzata la griglia di ***VARIABILITA' CENTRI DI COSTO*** presente sulla destra della maschera.

:::tip Nota
Quando il campo non è valorizzato, si intende che il sottoconto è al 100% un costo fisso
:::

- ***NON UTILIZZARE IN CONTROLLING*** quando la società ha il flag *Controlling* attivo, con questo campo possiamo indicare che il dato che la contabilità fornisce non è da utilizzare nelle elaborazioni del controlling, perché sostituito ad esempio da un dato stimato previsionale di inizio anno (es. Compensi collegio sindacale) o da una logica extracontabile (es. ammortamenti)

- ***TEMPI DI BILANCIAMENTO*** il campo si attiva se il precedente flag è stato attivato e consente di dire, se impostato, *quando* si vuole eseguire il conguaglio tra gestionale e dato contabile. Le opzioni disponibili sono
    - *Annuale*
    - *Infrannuale*

- ***TIPO DI BILANCIAMENTO*** il campo si attiva se il precedente flag è stato attivato e consente di dire, se impostato, *come* si vuole conguagliare il dato contabile. Le opzioni disponibili sono
    - *Riproporziona gestionale*: si andranno ad inserire delle righe automatiche per portare il totale del controlling ai valori contabili
    - *Differenze analitica*: si andrà ad annullare il dato del controlling per sostituirlo con i valori e i centri effettivamente utilizzati in contabilità

:::tip Nota
La prima opzione ha senso quando la rilevazione nel controlling può differire solo per l'importo rispetto a quanto viene registrato in contabilità
La seconda opzione ha senso quando,al momento della rilevazione reale contabile, non solo l'importo ma anche il centro di movimentazione può essere differente rispetto all'ipotesi precaricata nel controlling
:::

- ***PERCENTUALI DI VARIAZIONE***: quando la società ha il flag *Controlling* attivo, con questo campo possiamo dire la logica di variazione percentuale da poter applicare quando si duplicano i valori gestionali di questo sottoconto (nella duplicazione delle registrazioni dello ***Storico registrazioni gestionali***)

- ***DISTRIBUZIONE PERIODI***: quando la società ha il flag *Controlling* attivo, con questo campo possiamo definire come ripartire questo sottoconto nei periodi della contabilità gestionale nel corso dell'*elaborazione periodi*. Se non impostato ***FluentisERP*** utilizzerà i giorni di calendario di competenza della riga.

- ***GRUPPI DI CONGUAGLIO***: quando la società ha il flag *Controlling* attivo, il campo è di fondamentale importanza per i sottoconti economici delle rimanenze iniziali e finali, mentre ha valenza di raggruppamento dei dati omogenei nella maschera di controllo denominata ***Valori di controllo***

## GRIGLIA DI ATTRIBUZIONE DEI CENTRI
Per ogni sottoconto selezionato, nella scheda *Assegnazione centri* presente sul lato destro, avremo la possibilità di predefinire una lista di centri da valorizzare quando si movimenta questo sottoconto in contabilità, o lo si valorizza tramite il fatturato acquisti/vendite della riga articolo nel ciclo documentale passivo/attivo, a seconda delle priorità del singolo modulo.

In questa griglia abbiamo i seguenti campi:
- ***NUMERO*** progressivo di riga

- [***CENTRO DI COSTO***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) in questo campo si associa il centro aziendale. La proprietà è obbligatoria nelle società che **non** gestiscono il *Controlling*, mentre è opzionale in quelle con la gestione **attiva**. In questo secondo caso, infatti, si potrà indicare solo la *dimensione* da valorizzare e la *categoria* del centro predefinita.

- ***PERCENTUALE %*** la percentuale d'attribuzione, obbligatoria da valorizzare all'interno del range 0-100

- ***DIVISIONE*** la divisione da assegnare di default al movimento di analitica
:::tip Nota
In installazioni multidivisionali, è possibile gestire la divisione in due modi rispetto ai centri: vincolare l'uso dei centri legati alla divisione attiva/selezionata nella riga, piuttosto che consentire la valorizzazione del singolo centro su tutte le divisioni aziendali, indipendentemente dalla divisione di appartenenza del centro stesso
:::

- ***DATA INIZIO VALIDITA'*** e ***DATA FINE VALIDITA'*** questo range attualmente **non** viene testato

- [***DIMENSIONE***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) il campo è specifico per le società con il *Controlling* attivo, viene valorizzato secondo il centro selezionato nella riga ma può anche essere inserito manualmente quando il centro non è previsto nella riga. In questo caso serve nei casi in cui questa dimensione sia a quadratura obbligatoria (com'è tipicamente la *dimensione direzionale* dei centri), in modo da vincolare l'utente a valorizzarla in quadratura alla generale.

- ***CATEGORIA CENTRI DI COSTO*** il campo è specifico per le società con il *Controlling* attivo, viene valorizzato secondo il centro selezionato nella riga ma può anche essere inserito manualmente quando il centro non è previsto nella riga. Serve per limitare la visibilità dei centri selezionabili, in questa dimensione, quando si valorizza questo sottoconto.

:::tip Nota
Nel caso in cui si decida una valorizzazione puntuale caso per caso da parte dell'utente in contabilità, nel Piano dei conti possiamo scegliere di
- inserire più centri con percentuale 0: l'utente troverà queste righe nella registrazione e potrà valorizzare manualmente la singola riga con il valore del caso e ***FluentisERP*** al salvataggio cancellerà quelle rimanenti con importo zero. Se la dimensione dei centri e la causale non consentono registrazioni sbilanciate, non si potranno avere squadrature.
- inserire più centri con percentuale 100: l'utente troverà queste righe valorizzare nella registrazione e potrà eliminare quelle che non sono da valorizzare, piuttosto che modificare i valori prima di salvare. Se la dimensione dei centri e la causale non consentono registrazioni sbilanciate, non si potranno avere squadrature.
- Per chi utilizza la gestione del Controlling della Contabilità gestionale, è possibile inserire una riga di impostazione senza uno specifico centro, ma con solo la dimensione dei centri e, opzionalmente, anche la categoria dei centri che si vuole far valorizzare per quel conto: l'utente troverà nella registrazione la riga valorizzata con il centro vuoto ed aprendo la tendina avrà visibilità solo dei centri della dimensione (e della categoria, se impostata) del caso
:::


## GRIGLIA DI ATTRIBUZIONE DELLA VARIABILITA'
Questa sezione è specifica delle società con il *Controlling* attivo, e serve per legare la variabilità della movimentazione del sottoconto selezionato a seconda del centro che lo valorizza. Potrebbero esserci casi, infatti, nei quali certi sottoconto sono variabili a seconda della funzione che li valorizzi. Questa griglia è prioritaria rispetto al campo *Variabilità* generico che si può valorizzare nella riga del sottoconto

:::tip Nota
Ad esempio, l'energia elettrica potrebbe essere al 100% variabile quando la si associa alla produzione (perché se non produco non consumo) mentre essere totalmente fissa (cioè variabilità 0%) quando la valorizza sull'amministrazione, che si presuppone consumi energia indipendentemente dal volume produttivo
:::
