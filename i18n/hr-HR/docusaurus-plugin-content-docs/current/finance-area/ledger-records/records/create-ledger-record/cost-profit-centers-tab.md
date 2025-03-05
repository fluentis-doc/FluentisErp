---
title: Tab Analitica
sidebar_position: 5
---

 

**La Tab Analitica** dedicata alla gestione a centro di costo/profitto (oggi centri aziendali), è presente solo se la causale ha almeno uno dei due flag di gestione Centri di costo / Centri di profitto.

:::danger ATTENZIONE
La gestione dei centri di costo / profitto (oggi centri aziendali) sarà differente a seconda che siano attivate o meno le **funzionalità avanzate per il controllo di gestione** all'interno della tabella [**Società**](/docs/configurations/tables/general-settings/company).

Queste funzionalità, recentemente sviluppate, permettono una gestione più evoluta e flessibile del controlling (ad esempio consentendo analisi di centri aziendali multi dimensionali e reversioni di qualsiasi centro uno sull'altro) rispetto al set di funzionalità standard, le quali sono comunque tutt'ora disponibili decidendo di non attivare il **flag GESTIONE CONTROLLING** all'interno della tabella di cui sopra.
:::


 a seconda delle impostazioni della causale sarà presente una sezione, l'altra, o entrambe (in quest'ultimo caso con due opzioni: nel caso di ‘gestione separata cdc/cdp' entrambe saranno da valorizzare contemporaneamente, altrimenti la procedura attribuirà l'importo solo ad una delle due sezioni, i costi andranno sui centri di costo e i ricavi ai centri di profitto). 

Nel caso in cui si utilizzino le funzioni evolute per il controlling, sebbene sia possibile attivare nella causale contabile sia cdc che cdp, la valorizzazione di questi ultimi risulta superflua poiché si andrà a valorizzare unicamente i cdc (che assumono la nuova definizione di centri aziendali). I centri aziendali possono accogliere infatti sia componenti positivi (di profitto) che componenti negativi (di costo) e possono essere ribaltati a piacimento gli uni sugli altri secondo le logiche previste nel modulo conformemente al nuovo set di funzionalità in maniera totalmente flessibile.



Se nella causale contabile è stata attivata anche l'opzione **Gestione macchina** sarà presente anche una griglia di valorizzazione costi/ricavi agli automezzi aziendali (sotto alla griglia principale dei centri di costo)


Richiamando l'automezzo tramite la combo box apposita sarà possibile attribuire anche i dati di dettaglio dello stesso.

La combo box è collegata alla tabella Gestione automezzo (Logistica > Automezzi >Attività giornaliera > Gestione Automezzo)

 

### CAMPI PRESENTI NELLA GRIGLIA PRINCIPALE

Se le funzionalità avanzate del controlling sono attive è presente una struttura tipo pivot table che raggruppa, sottoconto per sottoconto, le attribuzioni dei movimenti contabili ai centri per dimensione di analisi. Infatti secondo le metodologie avanzate di cui sopra i centri aziendali devono essere attribuiti ad una dimensione di analisi creando quindi dei sottoinsiemi funzionali a diverse configurazioni possibili nello sviluppo della contabilità analitica.

Lo stesso sottoconto che accoglie il movimento di costo contabile, può dunque essere imputato contemporaneamente a più centri facenti riferimento a dimensioni (e quindi "raggruppamenti") diversi.

All'interno della stessa dimensione il movimento potrebbe poi essere ripartito (esempio al 50%) su due centri.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab/image07.png)

 

**Conto / Sottoconto / Descrizione**: campi per l'inserimento del sottoconto contabile che viene attribuito al centro. I dati saranno riportati in automatico se è presente una associazione definita nel piano dei conti o in anagrafica (vedere sotto).

**Progetto**: Se nella causale contabile è abilitato il flag Progetti (ex Commesse) è visibile questo campo che permette di attribuire il movimento ad un progetto. Il widget fa riferimento alla tabella Progetti (Gestione Progetti > Progetti > Progetti)

:::danger ATTENZIONE:
se le funzioni avanzate del controlling sono attive, è previsto che il progetto possa essere attribuito soltanto agganciandolo ad un centro aziendale associato alla dimensione di tipo Commessa oppure alle dimensioni per le quali è stato attivato il flag **Abilita commessa**. 

Tale dimensione (che può essere nominata a piacere, anche se si consiglia un nome chiaro, ad esempio "Commesse" o "Progetti") viene agganciata alla corretta tipologia tramite un flag presente nella tabella **Dimensioni** (Configurazione > Tabelle >Controlling > Contabilità analitica > Dimensione) 
:::


**Centri di costo / Descrizione centri di Costo**: campi per l'inserimento (tramite combo box posizionata sul campo Centri di costo) del centro sul quale attribuire il costo (o profitto). La combo box fa riferimento alla tabella **[Centri Aziendali](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** (Configurazione > Tabelle >Controlling > Analitica > Centri Aziendali). 

**Divisa**: valore ripreso dai dati della registrazione contabile, specifica la divisa (che presenta poi il controvalore in Euro) del movimento che viene attribuito.

**Data Valuta**: Data valuta del cambio tra divisa ed Euro (ripresa dal movimento contabile).

**Cambio**: Valore del cambio tra divisa ed Euro (ripresa dal movimento contabile).

**Importo Valuta**: Importo in divisa del movimento (ripreso dal movimento contabile in caso di attribuzione totale del movimento ad un singolo centro oppure definito attraverso la percentuale di attribuzione nel piano dei conti o in anagrafica); il valore può essere variato manualmente per definire l'attribuzione ai centri desiderata in caso di ripartizione del costo su più centri. Il campo si presenta su un'unica sezione e viene poi inserito nella sezione dare o avere del movimento in euro seguendo lo schema della causale contabile o della registrazione (Tab Registrazione), ma può essere poi forzato.

**Importo Dare / Importo Avere**: Importo in Euro del movimento (ripreso dal movimento contabile in caso di attribuzione totale del movimento ad un singolo centro oppure definito attraverso la percentuale di attribuzione nel piano dei conti o in anagrafica); il valore può essere variato manualmente per definire l'attribuzione ai centri desiderata in caso di ripartizione del costo su più centri.

**Da Data Competenza / A Data Competenza**: Ripresi dal movimento contabile  (possono eventualmente essere forzate). Permettono la rettifica per competenza economica (ratei e risconti) anche dei movimenti dei centri.

**Descrizione di Dettaglio**: Ripresa dall'omonimo campo nelle righe del movimento contabile.

 

### Il caricamento dei dati nelle sezioni cdc/cdp può essere automatizzato in due modi:

- attraverso l'assegnazione dei centri nel piano dei conti, ai sottoconti di costo/ricavo, valorizzando la percentuale di attribuzione del valore di ogni conto ad uno o più centri. Per maggiori dettagli vedere **[Piano dei conti](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**. 

- nelle anagrafiche clienti/fornitori, (sempre in percentuale) nel qual caso tutti i sottoconti economici inseriti nella registrazione intestata al soggetto saranno valorizzati allo stesso modo e attribuiti al centro indicato in anagrafica. 

La priorità di valorizzazione, tra la regola impostata nel piano dei conti e quella definita nell'anagrafica, si imposta all'interno dei **[parametri di contabilità generale](/docs/configurations/parameters/finance/accounting-parameters)**.

Sono consentite modifiche manuali agli importi calcolati, così come direttamente un inserimento manuale delle righe: in questo secondo caso la procedura proporrà automaticamente gli importi per coprire, sottoconto per sottoconto, il totale movimentato in contabilità, riportando lo stesso range di date di competenza. È importante segnalare, infatti, che le procedure di rettifica e integrazioni prevedono anche la rettifica dei movimenti assegnati a centro di costo/profitto.

Al momento del salvataggio della registrazione l'applicativo procederà a ritornare una maschera con i dettagli delle differenze di valorizzazione, bloccando eventualmente il salvataggio se così è impostato nella causale in uso.



| Funzione | Significato |
| --- | --- |
| Cancella i centri di costo selezionati | Pulsante per cancellare i centri di costo selezionati. |
| Cancella i centri di profitto selezionati | Pulsante per cancellare i centri di profitto selezionati. |
| Espandi/riduci | Pulsante per ridurre la visualizzazione alla sola parte dei centri di costo o profitto e viceversa o espanderla ad entrambe. |







