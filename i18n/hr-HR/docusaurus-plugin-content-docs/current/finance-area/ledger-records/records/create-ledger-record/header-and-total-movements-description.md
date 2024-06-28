---
title: Testata e Descrizione movimenti totali
sidebar_position: 1
---

LINK:

**[TAB REGISTRAZIONE](/docs/finance-area/ledger-records/records/create-ledger-record/record-tab)**

**[TAB PARTITE](/docs/finance-area/ledger-records/records/create-ledger-record/maturity-values-tab)**

**[TAB PAGAMENTI](/docs/finance-area/ledger-records/records/create-ledger-record/payments-tab)**

**[TAB CENTRI DI COSTO / PROFITTO](/docs/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab)**

**[TAB PROGETTO (Ex Commesse)](/docs/finance-area/ledger-records/records/create-ledger-record/job-orders-tab)**

**[TAB CESPITI](/docs/finance-area/ledger-records/records/create-ledger-record/fixed-assets-tab)**

**[TAB PARAMETRI](/docs/finance-area/ledger-records/records/create-ledger-record/parameters-tab)**

**[TAB RAGGRUPPAMENTO PARTITE](/docs/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab)**

Campi presenti nella **testata della registrazione**, nell'ordine di caricamento:

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/header-and-total-movements-description/image01.png)

 

**Data di registrazione**: in una nuova registrazione questa viene impostata come data odierna di sistema, ma può essere spostata in avanti o indietro nel tempo fatti salvi l'ordinamento cronologico dei protocolli IVA e gli eventuali periodi stampati in definitivo e la presenza dei parametri. L'importanza di questa data è fondamentale in quanto non esiste la necessità di procedere ad un ‘Cambio esercizio': a partire dalla data di registrazione l'applicativo andrà a ricercare l'anno dei parametri di contabilità di riferimento (individuando all'interno di quale range di date esercizio si trovi) e da questo andrà a riprendere gli altri range di date di controllo (date competenza in linea e date periodo in linea). Questa data è quella base della stampa del libro giornale e degli estratti conto contabili. In caso sia premuto il pulsante di creazione di una ‘Nuova registrazione' da quella in gestione è possibile impostare i **parametri di inserimento** ![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/header-and-total-movements-description/image02.png)  (nella ribbon bar) in modo che questo campo sia proposto anche in quella nuova;

**Numero di registrazione**: è un contatore giornaliero delle registrazioni; l'univocità della registrazione viene determinata sempre dalla combinazione ‘Data registrazione'+ ‘Numero registrazione'. La scelta di un contatore giornaliero è stata effettuata per dare massima libertà all'utente di registrare su più date. Questo numero di registrazione viene gestito automaticamente dalla procedura: in particolare, al momento del salvataggio viene attribuito il numero definitivo corretto, recuperando eventualmente un buco di numerazione alla data registrazione relativa. Cancellare una registrazione alla data X, infatti, lascerà un buco nella numerazione di questa data: solo intervenendo in inserimento/modifica di una delle registrazioni di questa data il numero sarà recuperato. In caso di registrazione provvisoria questo numero andrà in progressione negativa a partire dal numero -1000, in modo da rendere ben visibile all'utente che si tratta di una registrazione di questo stato: i report e le ricerche contabili sono impostate per filtrare di default solo sulle registrazioni definitive;

**Data competenza**: è la data di riferimento per il bilancio di esercizio: normalmente è sempre uguale alla data registrazione, salvo che per le scritture di assestamento di bilancio e le relative chiusure/aperture conti, che possono essere datate anche giugno come data registrazione ma saranno come 31/12 – 01/01 come data competenza. Attenzione: questa data NON può essere utilizzata per rilevare le fatture da ricevere di fine anno. Si consiglia di lasciarla sempre uguale alla data registrazione: in contabilità ci sono stampe che lavorano per data registrazione, altre per data competenza, altre che danno libertà all'utente di filtrare per entrambe, chiaramente si otterrebbero risultati differenti a seconda dei filtri applicati. Nei **parametri di inserimento** è possibile impostare che questa data sia allineata automaticamente rispetto alla data registrazione;

**Sottoconto intestatario della registrazione**: questo campo è obbligatorio solo per registrazioni IVA, in quanto è legata all'anagrafica cliente/fornitore intestataria del documento registrato. Questo campo, normalmente, non va compilato in caso di registrazioni di pagamento/incasso, in quanto normalmente nella stessa registrazione si effettuano N pagamenti/incassi su soggetti differenti e viene utilizzato come filtro delle partite aperte il campo presente nella scheda ‘Pagamenti'. In caso sia premuto il pulsante di creazione di una ‘Nuova registrazione' da quella in gestione è possibile impostare i **parametri di inserimento** in modo che questo campo sia proposto anche in quella nuova. La causale contabile, infine, può prevedere un  **[controllo di coerenza](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/parameters)** tra il tipo conto inserito in questo punto e quanto previsto in causale; 

**Causale**: questo campo è **obbligatorio**: ogni registrazione si basa infatti su una causale di riferimento che ne regola le caratteristiche e il funzionamento. Questo campo non è più modificabile una volta salvata la registrazione (chiaramente saranno bloccati altri campi nel caso in cui sia stato stampato in definitivo il registro IVA o il giornale o sia stata effettuata la chiusura automatica conti): nel caso in cui la causale sia errata bisogna necessariamente cancellare e reinserire la registrazione con il codice corretto. In caso sia premuto il pulsante di creazione di una ‘Nuova registrazione' da quella in gestione è possibile impostare i **parametri di inserimento** in modo che questo campo sia proposto anche in quella nuova;

**Registro IVA**: viene riportato dalla causale di contabilità selezionate non è modificabile manualmente: 

**Protocollo IVA**: è un campo numerico che viene gestito automaticamente dalla procedura per ogni registro: all'apertura della maschera sarà proposto il max protocollo + 1 per il registro impostato, poi al salvataggio verrà confermato o meno a seconda del caso che siano stati effettuati altri salvataggi per quel registro o vi siano protocolli IVA da recuperare. 

Il recupero protocolli cambia a seconda che nella causale sia inserito o meno il blocco del salvataggio con numerazione non progressiva (trattasi di un controllo di coerenza tra data registrazione e numero di protocollo), con il blocco attivo sarà recuperato un protocollo libero solamente se la data registrazione è coerente, senza il blocco sarà proposto anche un protocollo non valido per quella data, con i relativi messaggi di avvertimento all'utente). 

Il campo del protocollo viene disabilitato in caso di registrazione provvisoria;

**Tipo documento**: viene proposto dalla procedura sulla base del valore impostato nelle causali di contabilità generale: è modificabile, ma si tratta di una modifica normalmente non necessaria (tipicamente serve specificare i documenti delle registrazioni IVA, esempio FV = Fatture di vendita o FA = Fatture di acquisto, mentre tutti gli altri movimenti avranno sempre un documento di tipo ‘generico');

**Data documento**: è un campo obbligatorio o meno a seconda delle  **[impostazioni delle causali di contabilità:](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail)** questa data non può essere superiore alla data di registrazione e deve essere all'interno del range di date di validità relativo al  **[periodo in linea per l'esercizio di riferimento](/docs/configurations/parameters/finance/accounting-parameters)** della registrazione. In caso sia premuto il pulsante di creazione di una ‘Nuova registrazione' da quella in gestione è possibile impostare i **parametri di inserimento** in modo che questo campo sia proposto anche in quella nuova;

<a id="campo_progetto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a> 

**Numero documento**: è un campo alfanumerico di 20 caratteri: a seconda delle impostazioni della causale viene bloccato l'inserimento dello stesso numero/anno (preso dalla data documento) / tipo (campo tipo documento) per lo stesso codice inserito nel campo sottoconto della testata della registrazione (questo blocco è inserito di default su ogni causale contabile, ma può essere disabilitato). In caso che sia lo stesso numero/anno/sottoconto ma il tipo sia differente viene invece restituito un semplice messaggio di avvertimento all'utente. Allo stesso modo, il messaggio di avvertimento viene restituito anche se lo stesso riferimento è salvato in una registrazione provvisoria;

**Campo Progetto** (ex commessa): è attivo solo se la causale di contabilità prevede la gestione progetti (ex flag 'Commessa'): questo progetto è quello di riferimento per tutta la registrazione, ma sarà possibile riattribuire i valori all'interno della scheda ‘**[Progetto](/docs/finance-area/ledger-records/records/create-ledger-record/job-orders-tab)**' della stessa. La compilazione del campo prevede di utilizzare sempre l'help progetto (maschera di ricerca che si attiva con doppio click all'interno del campo) per filtrare quelli attivi all'interno dell'area **Progetti**;


:::danger ATTENZIONE
il campo e la tab sopra descritti sono attivi solamente quando all'interno dell'anagrafica generale della società (Configurazione > Tabelle >Impostazioni generali > Società) il flag **Gestione Controlling** è disattivato. Ciò significa che non è attivo il modulo di gestione del controllo di gestione in modalità completa.

Nel caso in cui il flag **Gestione Controlling** sia attivo la gestione del progetto (o commessa, secondo la precedente dicitura) avverrà in maniera diversa, ovvero sarà necessario attribuire il progetto (commessa) attraverso un particolare centro di costo (oggi centro aziendale) avente come dimensione (si veda la documentazione dell'area controlling) quella adatta alla gestione delle commesse.
:::


 

**Divisa**: proposta in via prioritaria dall'anagrafica intestataria della registrazione, in alternativa dalla divisa della società: può essere comunque modificata di volta in volta. Una volta salvata la registrazione il campo non è più modificabile;

**Data valuta**: è la data di riferimento del cambio, così come inserito nella tabella cambi valuta: la procedura andrà a leggere in questa tabella l'ultima data inserita precedente a questa. Nei parametri di gestione utente questa data può essere impostata come data registrazione (default) o come data documento. E' previsto un parametro utente di avviso quando non è impostata un cambio alla data della registrazione (e quindi viene utilizzato un cambio antecedente);

**Cambio**: è il valore del cambio così come inserito nella tabella cambi valute: si tratta del valore INVERSO rispetto a quello che normalmente si legge nei cambi valute (questo deriva dal fatto che la procedura ha mantenuto la logica ‘incerto per certo' derivante dalla gestione lire – quante lire per una unità della seconda divisa – mentre l'euro ha cambi ‘certo per incerto' – con 1 euro quante unità ottengo della seconda divisa –). Tale valore può essere forzato manualmente dall'utente (caso tipico: causali di pagamento/incasso in divisa, il valore del cambio applicato dalla banca non sarà mai quello ufficiale dei cambi internazionali);

**Totale divisa / Totale documento**: sono campi legati tra loro attraverso il cambio, per cui in registrazioni in euro sarà indifferente scrivere l'importo in uno o l'altro.  **[La causale contabile](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/parameters)** può prevedere che questi siano aggiornati automaticamente al variare dei dati inseriti all'interno della griglia IVA, normalmente solo in incremento ma anche in decremento se impostato in causale. Il salvataggio della registrazione può essere bloccato se questo importo non è uguale ai dati IVA della registrazione;

**Totale imposta**: viene aggiornato sempre automaticamente dalla procedura, non va inserito manualmente.

Alla base della registrazione contabile, nella scheda registrazione, è presente la descrizione della registrazione contabile: si tratta di una nota che si può impostare all'interno della causale di contabilità attraverso l'uso dei codici numerici (1) (2) … (10) (i codici (8) e (9) si utilizzano solo nelle descrizioni di dettaglio dei sottoconti nella sezione del libro giornale). Con un doppio click nel campo è possibile aprire una ricerca all'interno delle note codificate (procedura presente all'interno delle Utilità: la modifica manuale di questa descrizione sarà eventualmente resettata su conferma utente una volta modificato uno dei campi gestiti automaticamente nelle note.

Alla base della maschera sono presenti ulteriori campi di riepilogo dei dati IVA e della registrazione: meritano in particolare un'annotazione i campi dedicati alla visualizzazione dello sbilancio della registrazione, cosa normalmente non consentita (ma che si può abilitare nelle impostazioni della causale in uso). 

Lo sbilancio sarà proposto come importo nelle nuove righe di contabilità che saranno inserite manualmente nella registrazione al fine di bilanciarla automaticamente.





RIBBON BAR: rappresenta il menu della Form in oggetto, ossia l'area nella quale è possibile effettuare delle azioni. La lista delle funzionalità possibili, nel tab corrente, è di seguito rappresentata:

In particolare si segnala il comando **Parametri di inserimento**

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/header-and-total-movements-description/image03.png)

 



| Funzione | Significato |
| --- | --- |
| Salva | Pulsante per salvare la registrazione. |
| Nuova registrazione | Pulsante per creare una nuova registrazione. |
| Parametri di inserimento | Richiama i parametri di inserimento della prima nota. Di seguito alcune precisazioni:- Sottconto (Nessuno / Ultimo introdotto) riferito al sottoconto intestatario della registrazione inserito in testata.- Data competenza economica: presente nella griglia del registro IVA e riportata in automatico in quella del Libro giornale, può essere proposta come giornaliero (pari alla data registrazione sia per "da data" sia per "a data"), fine esercizio ("a data" sarà impostato 31/12/XXXX), e nessuna per conti di tipo servizi (dove sarà lasciata in bianco se il conto di contropartita utilizzato è di tipo "da rettificare" ovvero utile per il calcolo dell'assestamento, al fine di obbligare l'utente a definire il range di date)- Avvisa sbilancio in valuta: controlla se anche la colonna 'Importo in valuta' nel Libro Giornale bilancia (anche se rappresentata su un' unica colonna il programma conosce la sezione del movimento);- Avvisa data cambio: poiché il cambio proposto in automatico nella registrazione è l'ultimo cambio inserito nella tabella "cambi valute", verifica che la data del cambio in tabella "cambi valute" sia uguale a data registrazione |
| Apri anagrafica | Pulsante per richiamare, la gestione anagrafica del sottoconto selezionato, o in assenza, la ricerca di un'altra anagrafica. |
|  |  |



| Funzione | Significato |
| --- | --- |
|  [Document Manager](/docs/guide/operations-with-data/document-manager)  | Pulsante per il collegamento alla gestione documentale. |


---

### VIDEO TUTORIALS

<iframe width="560" height="315" src="https://www.youtube.com/embed/lOWGrEg-w6A" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>





