---
title: Patch notes Versione 803
sidebar_position: 1
---

### Patch 803.0014 - 23/03/2026

> -	BI - Switchboards: Corrette le azioni di chiamata del tipo algoritmo. (#TT01175/26)   
> -	FI - aggiunto un controllo sull’avvenuta esportazione del tracciato telematico per la comunicazione trimestrale liquidazioni iva che blocca la form dalla modifica dei dati già esportati. Modifications in Periodic VAT calculation form can have impact on profiles.(#TT00972/26)  
> -	FI - Corretta esportazione del tracciato telematico certificazioni uniche delle ritenute d’acconto che non incrementava correttamente la numerazione delle righe dopo la centesima posizione.(#TT01198/26)  
> -	FI - revisione contabilizzazione fattura con gestione partite d’acconto, in caso di spese bollo (o altre) aggiuntive ora viene creata una partita separata per l’importo relativo (#TT00891/26)  
> -	FI - revisione form di acquisizione automatica intrastat, disabilitazione pulsante di ricerca finché la ricerca automatica non si conclude. (#TT01022/26)  
> -	FI - revisione rollback contabilizzazione per messaggi di blocco non restituiti in interfaccia. (#TT01228/26)  
> -	FI - Risolto problema di visibilità nel report di stampa della CU 2026 dei campi relativi alla sezione Dati Previdenziali. Rif. #TT00960/26
> -	FI- Solving Customization issue regarding FsCostCenter with the extension table procedure (#TT01051/26)  
> -	MES - Corretto bug nell’import webapi delle dichiarazioni di produzione riguardo al tag QuantityProduced (#TT01226/26).  
> -	MES - Gestione ordini produzione - bug fix per inserire fase esterne (#TT01192/26)  
> -	MS - AFCS, un task su macchina con regola attrezzaggio può essere messo in produzione anche se i materiali necessari non sono completamente disponibili a magazzino (#TT01282/26).  
> -	MS - AFCS: le giacenze negative vengono ignorate se il relativo flag nei parametri MRP è attivo (#TT01156/26).    
> -	MS - Aggiunta indicazione dell’articolo mancante quando un task su macchina con regola attrezzaggio non può essere lavorato (#TT01232/26)  
> -	PM - progetti - servizio di caricamento campi - abilitato caricamento dati anagrafica articolo - parametri MRP. Potranno quindi essere abilitati gli appositi campi nella load request affinchè siano visibili nelle righe progetto (#TT01286/26)  
> -	PR - Modificato algoritmo di importazione file cbi per i movimenti bancari per considerare tutti i possibili caratteri di controllo LF e CRLF ( TT01009/26)  
> -	PR - revisione dimensione campo FSDocFinancePostingImportError.Line (fluentis.PR_DocFinancePostingImportErrors.PRDFPIE_Line). (#TT01049/26)  
> -	SD - Numerazione ddt di conto lavoro, ddt di vendita, corretto errore di numerazione nel caso in cui Progressione data numero sia attivo. (#TT00598/26)  
> -	SD - Conversione offerta in ordine e progetto, gestita propagazione IBAN impostato nella tab pagamenti dell’offerta, anche nella tab pagamenti del progetto (#TT01141/26)  
> -	SH - Anagrafica cliente - Tab Listini: impedito di poter specificare nella stessa riga sia un listino generale che un listino per cliente. (rif.ticket 1264/26)  
> -	SH - Gestione matrice applicazione tasse, revisione per società e partner non EU (#TT01182/26, #TT01326/26)  
> -	WM - GetItemsStock: Aggiunte request property per unità di misura alternativa. (#TT00959/26)  
> -	WM - In fase di creazione ddt/fattura da packing list ora viene riportato correttamente sulla riga dell’articolo il valore presente nel campo Vostro numero riferimento dell’ordine cliente. ( #TT01259/26)  
> -	WM - Mappa Ubicazioni per articolo: Corretto errore in inserimento nuove mappature. (#TT00612/26)  
> -	WM - WebApi PickingWarehousePosting: Impostato messaggio Success in caso di completamento senza errori. (#TT01179/26)  
> -	WMS - Corretto problema in messaggio di errore in WMS per cui i comandi per visualizzare i dettagli e l’invio o meno dell’errore non funzionavano.

### Patch 803.0013 - 16/03/2026

> - CO - modifiche nei *cost driver* e nella gestione reparti. (#TT00030/24)  
> - CO - La duplicazione delle registrazioni extracontabili del controlling ora mantiene le competenze economiche dei movimenti originali. (#TT00981/26)  
> - FI - In testata dell’Intrastat acquisti sono stati inseriti due flag di abilitazione delle sezioni beni o servizi. La creazione dalle procedure automatiche restituisce un messaggio di conferma dell’esclusione delle righe appartenenti a sezioni non abilitate; la creazione del file intra esclude le righe inserite in sezioni beni o servizi non attive. Le modifiche al form Intrastat possono avere impatto sui profili. (#TT00823/26)  
> - FI - La contabilizzazione delle scritture di assestamento non assegna più le date di competenza economica per le righe di rettifica. (#TT00789/26)
> - FI - Revisionata la contabilizzazione acquisti in società con gestione tasse attiva. (#TT00799/26)
> - FI - Risolto un problema di visibilità nel report di stampa della CU 2026 riguardante i campi della sezione Dati Previdenziali. Le modifiche al form “Certificazione ritenute telematica” possono avere impatto sui profili. (#TT00960/26)  
> - ImportPurchasePriceLists - Corretto il nome del route “ImportPurchasePriceLists”. (#TT01123/26)  
> - MES - Corretto bug nella registrazione delle dichiarazioni di produzione che non riportava correttamente, nel movimento, la quantità alternativa (se utilizzata) inserita nel materiale consumato. (#TT01018/26)  
> - MES - Ordini di produzione: implementata la possibilità di eseguire l’algoritmo standard di ricalcolo dei costi degli ordini tramite la API operation *RecalculateCosts*.  
La documentazione è disponibile in Fluentis Integration Documentation, area MES, Production Orders, RecalculateCosts. (#TT00397/26)  
> - PM - Risolto un caso in cui, per due o più appuntamenti diversi con stesso tipo documento, numero documento, stato documento e range di date, ma con risorse e WBS differenti, l’appuntamento risultava visibile solo per una risorsa. (#TT00951/26)
> - PM - Valorizzazione interventi: nella riga descrittiva in fattura relativa all’intervento viene ora indicata anche la descrizione del tipo intervento, oltre al codice. (#TT00775/26)   
> - PR - Risolto errore nella ricerca dei pagamenti fornitori da contabilizzare quando l’oggetto *FSSupplierPaymentDetail* è custom. (#TT00483/26)   
> - SD - Corretta la gestione dello storno fatturazione in presenza di articoli con prezzo negativo: in fase di generazione della nota di credito, l’importo viene ora riportato con segno positivo, garantendo la corretta valorizzazione dell’imponibile totale. (#TT01045/26)  
> - SD - Scarico magazzino da rendita: Ottimizzata la chiamata dell’algoritmo *UpdateBatchRegister*. (#TT01149/26)  
> - SD - Offerte multilivello: gestito messaggio bloccante in fase di conversione in ordine nel caso di codice IVA mancante nei materiali. (#TT01031/26)  
> - SD - WebApi SalesInvoice e POS: corretto il comportamento di aggiornamento per evitare la modifica automatica della data con la data corrente. (#TT01107/26)  
> - SH - Contatti - Indirizzi alternativi: riportata la ragione sociale a 80 caratteri. (#TT01039/26)
> - SH - Gestione Spese: le spese da anagrafica cliente vengono proposte solo alla creazione di nuovi documenti senza origine. In evasione/valorizzazione, le spese valore vengono trasferite tali e quali; le spese percentuali vengono convertite in importo proporzionale. Le spese omogenee (stesso tipo) provenienti da più documenti vengono sommate. Le variazioni di quantità/prezzi/sconti nel documento evaso richiedono una correzione manuale delle spese; viene mostrato un avviso. (rif. ticket 511/26)  
> - WM - Abilitato il cambio classe articolo tramite WebAPI. (#TT05186/25)  
> - WM - Distinta Base: corretto l’errato aggiornamento dell’unità di misura nei componenti con UM predefinita.  
> - WM - Liste di prelievo UDC: aggiunto un nuovo report “Packing list”.  
> - WM - Piani di Carico: ripristino l’evasione degli ordini cliente in stato “Rilascio” con cancellazione del picking. (#TT01008/26)  
> - WM - Piani di Carico: rivista la gestione dell’unità di misura in creazione lista UDC. (#TT05221/25)  
> - WM - Prototipi: corretta l’anomalia che non considerava correttamente la politica di sconto alla proposta “Miglior prezzo di listino fornitore”. (#TT00747/26)  
> - WM - Valorizzazione di Magazzino: ora è possibile cancellare movimenti di magazzino che presentano una referenza negli errori di chiusura. (#TT00888/26)   
> - WMS - Corretto bug nelle form WMS di conferma spunta e ricevimento merci che si verificava quando veniva creata una seconda unità di carico. (#TT01128/26)

### Patch 803.0012 - 05/03/2026

> - CO - implementato messaggio di avviso utente quando si cerca di cancellare un nodo in un modello di riclassificazione, se è referenziato in altre parti del modello ( T00842/26)
> - CO - revisione elaborazione periodi, esclusione delle righe con date competenza nulle (#TT00971/26)
> - CRM - Introdotto caricamento tra i dati del ticket dell’agente principale del contatto CRM (TT00926/26)
> - FI - change D300 - fiscal RO changes add new fields ( TT00820/26)
> - FI - contabilizzazione movimenti di magazzino, revisione gestione descrizione di dettaglio nei movimenti di centro di costo della registrazione contabile (#TT00815/26)
> - FI - revisione gestione contabilizzazione e rollback scritture di assestamento (#TT00808/26)
> - Fixed bug when configuring objects containing ExtraData based on DataSource
> - MES - Corretto bug nel calcolo costo dell’articolo prodotto con la dichiarazione di produzione nel caso in cui nel ciclo fossero presenti fasi esterne prima dell’ultima fase interna. (#TT00748/26)
> - MES - Corretto bug nel calcolo del costo dei materiali degli ordini di produzione che non considerava correttamente le chiusure di magazzino. (#TT00452/26)
> - MES - Corretto bug nell’importazione tramite webapi delle dichiarazioni di produzione, nelle quali, nel caso in cui il lotto del materiale importato fosse inesistente, veniva proposto un lotto con la logica fifo anche se il tipo prelievo dell’articolo era manuale. Ora, se cui il tipo prelievo dell’articolo è manuale e nei parametri degli ordini di produzione è attivo il flag Gestione automatica dei lotti e SN, nel caso in cui il lotto del materiale fosse inesistente, verrà creata la riga del materiale ma senza associare un lotto. (#TT00711/26)
> - MES - Corretto bug nella procedura di Generazione lotto degli ordini di produzione che non generava correttamente l’extension per il nuovo lotto. (#TT00920/26)
> - MS - Commesse di produzione - Revisionate tutte le procedure che aggiornano la “Data merce pronta” di una Commessa di tipo Indipendente, in quanto la “Data merce pronta” veniva aggiornata alla “Data fine prevista” della Commessa, anche se il parametro dedicato, “Aggiornamento Data merce pronta” presente nei “Parametri MS”, non lo permetteva. (#TT00875/26)
> - MS - F.C.S. - Corretta l’anomalia che non considerava la disponibilità dei materiali per l’inizio lavori pur indicando tale richiesta nei parametri. (#TT00604/26)
> - MS - Pianificazione generale - Modifiche attuate:
>> - corretta l’anomalia che pianificava l’ora di fine e quella di inizio di due ordini di una medesima commessa di livello figlio e padre accavallando gli orari;
>> - modificata la logica di considerazione della “% di utilizzo centro di lavoro”: antecedente alla modifica la percentuale incrementava il tempo di lavoro giornaliero del relativo Calendario della capacità produttiva; ora è il tempo di lavoro della fase che viene incrementato mantenendo inalterato il periodo di lavoro giornaliero del Centro.
>> - !! Per rendere attive e corrette le variazioni alle procedure di calcolo si rende necessario rigenerare tutti i “Calendari delle capacità produttive” di tutti i Centri di lavoro !! (#TT04940/25)
> - PM - risolto caso specifico in cui non venivano proposte le spese negli interventi esterni (#TT00956/26)
> - PM - videata cedolino paghe - risolto caso per cui avendo il profilo impostato come default, non proponeva la risorsa nei filtri attività (#TT00652/26)
> - PR - Change in SDD file creation ( TT05663/25)
> - Profili - Corretto il funzionamento dei profili nei documenti che possono avere il tab Documenti Collegati. (rif.ticket 792/26)
> - Restored font widget for Blockly
> - Risolto problema integrazione GitHub per credenziali non corrette
> - RN - corretto problema nella fattura di acquisto (tipo nota di credito) quando veniva impostata una spesa finale di tipo bollo e nelle righe erano presenti prezzi o quantità negative, il messaggio di richiesta di inversione segno della spesa finale non gestiva correttamente il rifiuto di invertire il segno. Rif. Ticket - #TT00726/26
> - SCM - Documenti di acquisto in entrata: revisione della gestione delle fatture elettroniche con allegati in formato .7zip (Rif. Ticket 878/26)
> - SD - Creazione Ordine fornitore da Ordine cliente - Sulle righe articolo dell’ordine fornitore vengono ora riportati il magazzino e la causale previsti per il tipo ordine creato. (#TT00889/26)
> - SD - Dettaglio righe ordini clienti: Corretta la visualizzazione di codice e descrizione articolo cliente nella griglia dei risultati. (#TT00297/26)
> - SD - Evasione ordini in DDT e Fatture: i centri di costo e ricavo non vengono più riportati anche sulle righe di tipo note in presenza del flag “Ricalcola centri di costo/ricavo”. (#TT00801/26)
> - SD - Ottimizzata l’importazione Web API dei listini di vendita corposi. Inserita la possibilità di fare update sugli articoli per aggiungerne al listino (#TT04887/24, #TT05479/25)
> - SD - Se l’utente porta in stato controllato e poi non esaminato una fattura di vendita creata da DDT, sarà possibile effettuare il RollBack dell'operazione per cancellare la fattura. (#TT05405/25)
> - SD-Importo ordine di vendita WebApi: quando viene l'esecuzione forzatamente, da aggiornare anche ForceExecutedQuantity su articoli di ordine cliente(#TT00825/26)
> - SH - generazione file F24, revisione campi importo con decimali per separatore virgola (#TT01973/25)
> - SH - matrice di applicazione tasse, revisione gestione univocità di riga. (#TT00738/26)
> - Solved bug for form generator widget on script editor
> - Solved bug to compile Forms from Script
> - Solved bug to execute Workflow Action Script
> - Solved bug to invoke global script from Cruscotti
> - Solved bug to set UI property to MultiTarget widget from script
> - WM - Analisi Disponibilità con dettaglio distinta base: Corretto mancata valorizzazione colonne se versione di distinta nei componenti vuota. (#TT00602/26)
> - WM - Corretta valorizzazione “Livello”, “Priorità” e “Articolo Padre” in analisi disponibilità con dettaglio distinta base. (#TT00602/26)
> - WM - Corretto bug nell’import webapi dell’anagrafica articolo che non veniva correttamente inserito il valore del campo Nomenclatura. (#TT00840/26)
> - WM - Negative stock resulted after editing warehouse entry registration (#TT00644/26)
> - WM - Prototipi - Corrette le anomalie che non calcolavano correttamente la componente del Costo macchina e quella degli Altri costi. (#TT00716/26)
> - WM - Registrazioni di Magazzino - Abilitata quantità movimento se UM alternativa specificata. (#TT00802/26)


### Patch 803.0011 - 20/02/2026

> -	Bizlink FI : Obrazac PDV for HR localization, passed to v.11 ( TT00770/26)
> -	CPQ - Risolto problema che genera un’eccezione quando si estrae il tipo di un Extra Data basato su DataSource
> -	MES - Corretto bug nel report Foglio di Lavoro nel quale venivano visualizzati dei valori con il formato inglese. (#TT00688/26)
> -	PM - Generazione fatture da interventi - il progetto collegato al servizio riporta CIG e CUP in testata. Le righe della fattura che fanno riferimento a quel progetto avranno riportato il codice CIG CUP negli appositi campi ( #TT03731/25)
> -	PM - Gestita casistica di intestazione fatture generate da progetti, per cui ora è possibile avere il cliente di fatturazione diverso dal cliente del progetto (#TT00695/26)
> -	PR - revisione contabilizzazione da riconciliazione bancaria, se si effettuano chiusure partite ora la riga banca importata da file non viene più ricalcolata. (#TT05304/25)
> -	Rilascio stampa Obrazac PDV versione 11 per localizzazione HR
> -	SCM - Corretta anomalia che non permetteva l’attivazione dei flag della sezione Stato DDT in fase di creazione di un Nuovo DDT dall’interno di uno esistente. (#TT00667/26)
> -	SCM - Ordini Fornitore: corretto l’aggiornamento della quantità residua dell’articolo a seguito di utilizzo del pulsante Suddividi quantità in più date di consegna. (#TT00692/26)
> -	SCM - Registrazione DDT di Acquisto: Risolto errore che si verificava durante il caricamento di un DDT, in presenza del parametro Tralasciare l’articolo senza magazzino e causale. (#TT00768/26)
> -	SD - Fatture di Vendita: In fase di emissione di una nota di credito mediante la procedura di Storno fatturazione viene ora valorizzato il campo Base liquidazione agenti. (#TT00632/26)
> -	SD - Inserita la possibilità, nell'importazione WebAPI di picking, DDT e fatture, di evadere le righe ordine inserendo la proprietà OrderItem che trasferisce tutte le proprietà dell'articolo (#TT04674/25)
> -	SD - Nell'importazione Web API delle fatture di vendita, vengono correttamente inserite le scadenze anche nel caso in cui si inseriscano nel file (#TT00736/26)
> -	SD - Ordini Cliente: Abilitata la possibilità di aggiungere CIG e CUP alla griglia di ricerca degli ordini di vendita. (#TT00659/26)
> -	Solved bug to send fiscal invoice to Croatia FiscalAgency Ticket (#TT00641/26)
> -	WM - Allineato dimensioni note picking a note ordini per evitare troncamenti (#TT00696/26)
> -	WM - Prototipi - Corretta l’anomalia che, durante la creazione di un nuovo prototipo, non veniva ricalcolato correttamente la componente di costo del materiale. (#TT00666/26)
> -	WMS - Migliorata risposta del tasto Indietro in form Inventario (#TT00177/26)
> -	WMS - Ricevimento Merci - Sistemato problema in cui venivano ignorate le condizioni di filtro. (#TT00174/26)

### Patch 803.0010 - 13/02/2026

> -	CPQ - bugfixing su script di inizializzazione e aggiunta Extra Data ad articoli creati.
> -	FI - calcolo ammortamenti, revisione gestione data inizio attività su cespiti collegati ( TT00645/26)
> -	FI - Contabilizzazione Compensi ed Enasarco: revisione delle procedure di contabilizzazione dei compensi e dei contributi Enasarco, con revisione delle relative procedure di rollback. (Rif. Ticket TT00330/26)
> -	FI - creazione file F24, revisione record 50.01 (#TT01973/25)
> -	FI - PaymentImport fix - delete FSMaturityPaymentReservation ( TT00631/26)
> -	Framework - Risolta l’anomalia che, aprendo un documento, causava uno sfarfallio iniziale nell’evidenziazione dei campi obbligatori (quelli evidenziati in rosso). (#TT00553/26)
> -	Impostazione Xslt di visualizzazione Liquidazione iva periodica (#TT00520/26)
> -	MS - Corretto bug in costificazione che non calcolava correttamente il costo per le fasi a tempo fisso. (#TT05668/25)
> -	MS - MES - Ora se la numerazione dei documenti commesse di produzione, ordini pianificati, ordini di produzione e di conto lavoro sono con periodo Annuale, la numerazione proposta dipenderà dall'anno della data del documento appena inserito. (#TT00040/26)
> -	MS e MES - Materiali proposti al Completamento dati ordine
> -	PM - risolto caso di segnalazione nella ricerca interventi in presenza di customizzazioni (#TT00466/26)
> -	QY - Filtro controllo articoli - Risolto il problema di perdita dei caratteri inseriti nel filtro degli Ordini di produzione, presente nei documenti di origine delle Dichiarazioni di produzione e nella Fase ordine di produzione. (#TT00454/26)
> -	QY - Numerazione documenti - Dove prevista la numerazione documenti, è stata implementata la gestione della progressione non annuale.(#TT00625/26)
> -	revisione calcolo scaglioni Firr (#TT00516/26)
> -	Risolto errore durante la ricerca di documenti su tab precedenti di NIR quando esiste custom per oggetto PurchaseDeliveryNote o PurchaseInvoice(TT00653/26)
> -	SCS - Creazione Ordine di Conto lavoro da fase esterna di Ordine di Produzione: Corretta la proposta dell'ubicazione riportata sulla riga articolo dell'ordine di conto lavoro. (#TT05383/25)
> -	SH - Attività/Task - Corretto errore in chiusura nuova attività senza salvare. (TT00613/26)
> -	Solved crash when click on dashboard grid for some dashboards
> -	Solved problem to compile script for Mono platform
> -	WM - Aggiunta proprietà “Qtà Impegno” in analisi disponibilità con dettaglio distinta base. (#TT05061/25). Can have an impact in the profile of availability form
> -	WM - Lista inventariale - Messaggio di avviso in Help articoli se magazzino non presente nella lista. (#TT00471/26)
> -	WM - MS - MES: Allineato il comportamento dell’utilizzo dell’unità di misura alternativa all’interno di tutte le form delle aree logistica, pianificazione e produzione, nel caso in cui fosse attivato il flag *Tassativo*. (#TT05379/25)
> -	WM - Stampa inventario - Corretto filtri tipo e categoria fiscale non funzionanti in valorizzazione LIFO. (#TT00404/26)
> -	WM - Valorizzazione magazzino - Limitato il controllo giacenza su articoli fittizi alla data chiusura.(#TT00541/26)
> -	WMS - Articoli fittizi possono non possono essere inventariati. (#TT05113/25)
> -	WMS - Carico UDC - Attivata identificazione barcode ubicazione. (#TT05359/25)
> -	È stata revisionata la modalità di proposta dei materiali nel completamento dati ordine degli Ordini pianificati e degli Ordini di produzione. Al momento della richiesta di completamento, viene visualizzata una finestra in cui è possibile scegliere quale data considerare per la verifica della data di validità del componente della distinta base.
> -	Le opzioni disponibili sono: Data prevista inizio (proposta predefinita) e Data odierna(#TT02644/25).

### Patch 803.0009 - 06/02/2026

> -	CPQ - Aggiunte validazioni sulle configurazioni e bug fixing
> -	FI - Intrastat - in caso di importo 0 il raggruppamento mantiene il campo del segno impostato a 1 (#TT00417/26)
> -	FI - Partite: Modificata la gestione di FSMaturity in custom (#TT00180/26)
> -	FI - Revisione chiusura partite in registrazioni contabili, lock random su update nei solleciti (#TT01305/25)
> -	FI - Webapi sull’oggetto FSPosting, revisione dell’importazione per gestire gli automatismi di chiusura partite delle registrazioni di pagamento/incassso (#TT05518/25)
> -	MES - Corretto bug nell'import Webapi delle dichiarazioni di produzione. (#TT00459/26)
> -	MES - Soluzione MES - Utilizzando il bar-code tokenizer della Risorsa di tipo Dipendente, indipendentemente dal tabulatore visualizzato, è ora possibile inserire un nuovo componente della Squadra di lavoro oppure impostare un termine attività per un componente già presente (#TT00249/26)
> -	MS - Corretto bug in pianificazione generale che nel caso in cui fosse attivato il flag "Esecuzione MRP dopo pianificazione" veniva rimosso il flag "Pianificati" nei parametri della procedura MRP. (#TT00168/26)
> -	MS - Corretto bug in pianificazione generale nel caso in cui venissero pianificate nuovamente commesse in stato esecutivo o lanciato. (#TT00046/26)
> -	MS - Corretto bug nella procedura MRP che in alcuni casi non creava correttamente gli ordini pianificati per i figli degli articoli fittizi. (#TT04427/25)
> -	MS - Corretto bug nella procedura MRP che non generava correttamente gli ordini pianificati nel caso in cui fosse attivo il flag Considera passato. (#TT05561/25)
> -	PM - duplica intervento da planner, corretto caso per cui settava le ore di inizio servizio nella data intervento generale, invece di mantenere l'ora 00.00 (#TT00499/26 )
> -	PM - generazione intervento da intervento pianificato - corretta casistica per cui solo in specifiche condizioni, le spese sostenute non riportavano la data corretta e le spese da fatturare non erano proposte correttamente (#TT00481/26)
> -	PM - WEB ripristinati tasti di espandi/comprimi nella visualizzazione progetto nel calendario di WBS assegnazione risorse (#TT00477/26)
> -	Risolto problema di importazioni ordini Peppol
> -	SCM - Calcolo RAEE: Risolta procedura EVASIONE ORDINI per il calcolo delle spese RAEE (rif.ticket 331/26)
> -	SCM - Contabilizzazione fatture di acquisto: revisione della procedura di rollback della contabilizzazione in presenza di partite già pagate (#TT00381/26)
> -	SCM - Corretto il calcolo degli Importi del documento generato tramite la procedura di Creazione DDT da Ricevimento Merci. (#TT00524/26)
> -	SCM - Ordini Fornitore: Il Contributo RAEE viene ora calcolato anche negli ordini generati da Richieste di acquisto o Richieste di Offerta. (#TT00526/26)
> -	SCM - Valorizzazione DDT di Acquisto: Corretto errore nella valorizzazione di un DDT contenente articoli gestiti con serial number.( #TT00530/26)
> -	SD - Fatture di Vendita: Risolta anomalia che attivava il pulsante Salva nelle fatture Consegnate, quando era attivo il flag Valori modificati manualmente nel tab Trasporto. (#TT04757/25)
> -	SD - Ordini clienti: Risolto errore che talvolta si verificava al salvataggio di un ordine generato mediante Evasione da Progetto. (#TT00455/26)
> -	SD - Shippings - Calendario Spedizioni - Corretto errori in creazione spedizioni da calendario. (#TT00391/26)
> -	SD- Se la riga acconto (tipo 6) in fattura aveva l’articolo valorizzato, ora lo storno acconto riporta questo articolo nella riga di tipo 7. (#TT00084/26)
> -	SD\SCM-Nella tabella dei tipi spese aggiungere un check button per determinare l’area di competenza, in questo modo è possibile gestire tipi spesa differenti tra documenti di acquisto e di vendita, e nel caso del RAEE questi vengono proposti automaticamente dagli algoritmi.Modifications in charge type form can have an impact on profiles (#TT00339/26)
> -	SD-Corretto errore nella stampa delle provvigioni maturate, modulo vendite, che presentava la provvigione come non maturata, anche se la partita era chiusa, nel caso in cui il pagamento veniva registrato assieme al pagamento di un insoluto. (Rif Ticket 353/26)
> -	WM - Valorizzazione di magazzino - Controllo giacenze negative lotti anche se magazzino ammette giacenze negative. (#TT00344/26)

### Patch 803.0008 - 29/01/2026

> -	Arm - validate database view before aligning to object
> -	BI - Dasboards(Cruscotti) fix column countings when filter present (TT00178/26)
> -	CO - Ottimizzazione elaborazione periodi (TT00435/26)
> -	FI - Registrazioni Contabili, Movimenti Contabili: Revisione salvataggio dei profili (Rif. Ticket TT00052/26)
> -	MES - Ordine di produzione - Corretta l’anomalia per cui, eseguendo una nuova form di filtro, dopo la selezione di un oggetto Tile con valori maggiori di zero e la pressione del relativo tasto di Ricerca, non veniva visualizzato alcun dato. Era necessario eseguire una seconda Ricerca per visualizzare correttamente le informazioni. (#TT00345/26)
> -	MS - Corretto errore che nella procedura di Generazione commesse di produzione che dal tab sottoscorta non riporta tutti gli articoli da inserire in commessa. (#TT02716/25)
> -	MS - Corretto errore che nella procedura di Generazione commesse di produzione che dal tab sottoscorta per il quale la form andava in crash nel caso in cui fossero presenti molte righe da caricare. (#TT00861/25)
> -	QY - Azioni correttive - Risolta l’anomalia che da ‘Crea Azione correttiva’, presente nelle gestioni: ‘Reclami’, ‘Non conformità’ e ‘Azioni correttive’, non veniva ricopiato il ‘Riferimento documenti’. (#TT00070/26)
> -	Risolto bug nello script editor per generare il codice per aprire una form
> -	SCM - Calcolo RAEE: Risolto eccedenza importo dei scadenza rispetto a Totale Documento per errata considerazione del contributo RAEE (rif.ticket 327/26)
> -	SD - Generazione file XML della fatturazione elettronica: è possibile creare un file custom per le righe fattura personalizzando l'algoritmo CheckSalesInvoiceItemForElectronicExportLinesDetail (rif.ticket 5255/25)
> -	SD-SalesOrder-Expand first level logic modification(TT00368/26).
> -	WM - Corretto bug nella webapi degli articoli in cui andava in errore la delete di una variante articolo (#TT00039/26).

### Patch 803.0007 - 26/01/2026

> -	Cambia formato Data Valuta e Data Valuta NIR, rimuovere la parte ORA (#TT00290/26)
> -	CPQ - miglioramenti computazionali, inserimento bottone per allineamento parametri e binding, bugfix
> -	FI - Controllo sbilanci cdc/cdp/progetti, revisione gestione flag 'controllo date competenza'. (#TT00291/26)
> -	FI - creazione public virtual void MovementsAccountingWithParameters, per poter facilmente contabilizzare i movimenti di magazzino tramite script (#TT00264/26)
> -	FI - CU2026, revisione tendina di regime escluso (RF19). Modifications in Certificazione ritenute telematica form can have an impact on profiles. (#TT00248/26)
> -	FI - Links change in Purchase invoices accounting procedure. Small improvements in supplier invoice accounting ( TT00280/26).
> -	MES - Sistemato visualizzazione messaggi di errori da scripting in dichiarazioni di produzione. (#TT00183/26)
> -	MS - Corretto bug nella procedura MRP che non generava gli ordini pianificati con le quantità corrette in alcuni casi. (#TT00234/26)
> -	PR - L'importazione file nella riconciliazione bancaria non popola i campi. Modifications in bank movement detail form can have an impact on profiles (TT05582/25).
> -	QY - Azioni correttive - E' stata aggiornata la descrizione del data source e invertita la visualizzazione di Area e Settore.
> -	QY - Azioni correttive - E' stata aggiornata la descrizione del data source.
> -	QY - Documenti di origine esterna - E' stato creato il data source per l'analisi di quanti documenti sono stati inseriti per categoria documento.
> -	QY - Documenti di origine esterna - E' stato creato il grafico per l'analisi di quanti documenti sono stati inseriti per categoria documento.
> -	QY - Documenti di origine interna - E' stato creato il data source per l'analisi di quanti documenti sono stati inseriti per categoria documento.
> -	QY - Documenti di origine interna - E' stato creato il grafico per l'analisi di quanti documenti sono stati inseriti per categoria documento.
> -	QY - Non conformità - E' stata aggiornata la descrizione del data source.
> -	QY - Non conformità - E' stato creato il data source per l'analisi di quante non conformità sono state inserite per fornitore.
> -	QY - Non conformità - E' stato creato il data source per l'analisi di quante non conformità sono state inserite per funzione/area/reparto.
> -	QY - Non conformità - E' stato creato il grafico per l'analisi di quante non conformità sono state inserite per fornitore.
> -	QY - Non conformità - E' stato creato il grafico per l'analisi di quante non conformità sono state inserite per funzione/area/reparto.
> -	QY - Reclami - E' stata aggiornata la descrizione del data source.
> -	QY - Strumenti di misura - E' stata aggiornata la descrizione del grafico.
> -	QY - Strumenti di misura - E' stata modificata l'origine dei dati e aggiornata la descrizione del data source.
> -	QY - Strumenti di misura - E' stato creato il data source per l'analisi sugli strumenti di misura.
> -	Rilascio stampa CU2026
> -	Risolto bug nel magazzino 3d per spostare le ubicazioni graficamente
> -	Risolto bug widget Task Supervisor
> -	SCM - Richieste di Offerta: Abilitata la possibilità di creare una nuova versione o di duplicare un’offerta intestata ad un Nuovo fornitore. (#TT05126/25)
> -	SD - Evasione DDT e Fatture da ricerca Ordini cliente: Abilitata la proposta automatica dei lotti anche per l’evasione da ricerca ordini, quando il flag Proposta lotti è attivo e la tipologia di prelievo del lotto non è manuale. (#TT05623/25)
> -	SD - Offerte di vendita gerarchiche: Introdotta la possibilità di inserire materiali con tipo riga Articolo non codificato digitando direttamente la descrizione articolo. (#TT00296/26)
> -	SD - Ottimizzazione webapi ordine cliente(#TT04576/25)
> -	SD - Revisione calcolo automatico liquidazione agenti quando sono presenti fatture di vendita con divise differenti.Modifications in agent settlement form can have an impact on profiles (#TT05266/25)
> -	SD - Risolta un’anomalia durante lo scarico di documenti contenenti articoli gestiti a lotti e numeri seriali, inseriti con quantità negative. (TT05672/25)
> -	SDI Documenti di acquisto in entrata: Ora l'anteprima di stampa è stata riportata alle dimensioni e font presenti nel visualizzatore del registro SDI (rif.ticket 00094/26 e 287/26)
> -	SH - Corretto bug che non visualizzava correttamente tutti i caratteri del codice articolo nell’intestazione della form. (#TT00243/26)
> -	SH - fix right panels(Tools, Object Navigator, Context Panel, Configuration) ordering when pinned first time (#TT04452/25)
> -	SH - Prototipi - La dimensione del campo note di fase è stata uniformata a quella delle note di fase del ciclo di lavoro in quanto, all’importazione di quest’ultime nelle fasi del prototipo, veniva generato un errore di dato troncato se la nota di fase del ciclo di lavoro eccedeva di 512 caratteri. (#TT00166/26)
> -	WMS - Carico/Sposta UDC - Abilitato lo spostamento ubicazione anche per UDC non caricate (#TT05359/25).

### Patch 803.0006 - 16/01/2026

> -	ARM - Correzione della migrazione del database per BizLink FBH (#TT00057/26)
> -	CO - form Visualizzazione totali per Centro di costo, risolto errore in apertura (#TT00036/26)
> -	CO - nella form dei ‘Valori di controllo’ del controlling, i campi con i valori delle griglie sono stati formattati con i separatori delle migliaia. **Attenzione! Questa modifica può impattare sui profili** (#TT00012/26)
> -	CO - nella procedura di “Storico ammortamenti” dell’elaborazione periodi nel Controlling, compilazione campi del cambio valuta e importo valuta (#TT04897/25)
> -	CO - nelle scritture di integrazione delle Chiusure infrannuali ora Fluentis restituisce un messaggio se la registrazione da creare non ha righe a causa del valore 0 dell’integrazione da eseguire (#TT04864/25)
> -	CO - procedura di Consolidamento Master, revisione filtro applicato alla dimensione Dimensione nella griglia (#TT00031/26)
> -	FI - la contabilizzazione della fattura di acquisto con allocazione costi ora usa il sottoconto dal riferimento di allocazione anche negli ambienti con tax engine attiva (#TT05618/25)
> -	FI - la contabilizzazione ora valorizza l’analitica della registrazione solo per i sottoconti economici o per i patrimoniali che hanno la gestione centri aziendali attiva (#TT00169/26)
> -	FI - Nella gestione delle dichiarazioni di intento i pulsanti di stampa si abilitano solo quando la dichiarazione è salvata ( Application exception - 287125/2025 )
> -	FI - solve a crash in interest calculation ( application exception 287428/2025)
> -	FI - è stata modificata la tabella Giurisdizione per aggiungere i campi della regione e provincia di riferimento. Modificata la stampa Registro tasse e Riepilogo per codice tasse per aggiungere filtri per nazione/regione/provincia della giurisdizione. **Attenzione! Questa modifica può impattare sui profili** (#TT05664/25)
> -	FI - Compensazione veloce: inserito messaggio di avviso quando si compensano partite riferite ad un anno non presente all’interno dei parametri di contabilità (#TT05459/25)
> -	FI/PR/CRM/SH/SD - set defaults post migrazione
> -	MES - Importo WebApi segnalazioni di produzione - nuova opzione "RegisterSignalAfterInsert" - registra automaticamente dopo l'inserimento (se la registrazione da errori, viene eseguito un rollback anche per l'inserimento di segnalazione) (#TT00095/26)
> -	MS - Fasi standard - La colonna del Tempo fisso non è più modificabile in quanto è relativa al Centro di Lavoro e non alla Fase standard (#TT00104/26)
> -	PM - WEBAPI importazione interventi - gestita caso in cui righe servizi non codificate con progetto associato non venivano importate (#TT05501/25)
> -	PR - Lock Manager: corretto errore in fase di inserimento riga all’interno del blocco cliente (#TT00027/26)
> -	PR - Stampa dilazione media incassi: revisione proposta della data scadenza nel report (#05491/25)
> -	Risolto bug per ImportazioniExcel nel calcolo degli elementi inclusi in una transazione
> -	SCM - DDT di Acquisto: Corretto il calcolo delle spese relative al Contributo RAEE nel caso di creazione DDT da Ricevimento merci del WMS (#TT00085/26)
> -	SCM - Ordini Fornitore: corretto l’aggiornamento dello stato di evasione della riga a seguito di utilizzo del pulsante Suddividi quantità in più date di consegna, nel caso di righe articolo parzialmente evase. Introdotto un controllo in fase di suddivisione che impedisce di impostare, sulla riga di origine, una quantità inferiore a quella già evasa (#TT04796/25)
> -	SCM - Richieste di Acquisto: Il prezzo unitario netto viene ora determinato partendo dal prezzo dell’articolo, invece che dall’importo netto della riga (#TT05051/25)
> -	SCS - Se nei parametri di Conto lavoro è attivo il flag Controlla disponibilità, durante l’evasione di un ordine in DDT di conto lavoro viene verificata la disponibilità del materiale presso il magazzino del terzista. Se la disponibilità è uguale o superiore alla quantità residua del materiale, la quantità da evadere proposta sarà zero. Se la disponibilità è inferiore, la quantità da evadere proposta sarà calcolata come differenza tra la quantità residua e la disponibilità nel magazzino del terzista (#TT01615/25)
> -	SD - Creazione Fattura da DDT: Se per il cliente risultano Fatture di Acconto non ancora chiuse, la procedura di valorizzazione segnala all’utente la presenza di acconti aperti (#TT05473/25)
> -	SD - Creazione Fattura di Vendita da Gestione anticipi: La fattura generata dalla gestione anticipi non riporta gli sconti predefiniti per cliente o tipo pagamento (#TT04844/25)
> -	SD - Correzione del calcolo della percentuale dell’agente sugli articoli del documento di vendita dopo la modifica dello sconto finale (#TT04058/25)
> -	SD - Ottimizzazione importazione ordini di vendita WebApi, (#TT04576/25)
> -	SD - Impostazione dei valori per le tabelle fisse di vendita dopo la migrazione (#TT00096/26)
> -	SH - Risolto problema di visualizzazione nell’apertura dei dettagli delle maschere da Form navigator (#TT05677/25)
> -	WM - Brogliaccio di Magazzino: Corretto calcolo giacenza iniziale con rimanenze nel periodo di stampa (#TT00142/26)
> -	WM - Brogliaccio di magazzino: Corretto errore “summaryTemplate missing” (#TT00170/26)
> -	WM - Spedizioni - Corretta errata evasione ordini clienti creando picking con tipo senza evasione (#TT05607/25)
> -	WM - Stampa inventario a quantità - spostato totale di magazzino nel footer per problema di caricamento del dato con molte righe. (#TT00008/26)
> -	WMS - Ricevimento Merce - Creazione UDC con gruppo da ordine fornitore ora vengono generate con anno concorde (#TT00077/26)

### Patch 803.0005 - 09/01/2026

> -	CO - riclassificazione comparazioni (#TT00010/26)
> -	FI - contabilizzazione documenti di acquisto/vendita con tax engine attivo, in caso di mancanza di righe nelle collection delle tasse ora si contabilizza utilizzando la tassa con categoria ‘nexus exemption’ (#TT05566/25)
> -	FI - Nella form di stampa “Registri tasse”, inserita opzione per selezionare un range di periodo manuale, escludendo la selezione per mese/trimestre. Con questa opzione, la stampa definitiva non è abilitata (#TT05624/25)
> -	MS - Corretto bug che non riportava le note dei materiali presenti in distinta base negli ordini pianificati generati (#TT05675/25)
> -	Risolto bug per aggiungere moduli custom allo script delle importazioni Excel (#TT05655/25)
> -	Risolto problema di Identizzione nello script editor
> -	SCM - Importazione da prezzi fornitore: Se nel file di importazione Prezzi fornitore da Excel è stato indicato uno sconto, questo potrà essere riportato nel Listino fornitore generato dall’importazione prezzi fornitore, utilizzando la tipologia di sconto indicata nei parametri della procedura (#TT05273/25)
> -	SCM - Quando un DDT movimentato a magazzino viene valorizzato o evaso in una Fattura di Acquisto con cambio valuta diverso, il cambio del DDT e il relativo importo della registrazione di magazzino vengono aggiornati di conseguenza (#TT04687/25)
> -	SCS - Rientro di conto lavoro: implementata la possibilità di duplicare un Rientro (#TT05329/25)
> -	SD - Aggiunto il campo Riferimento disegno tecnico nelle offerte e negli ordini clienti all'interno del tab item data. **Attenzione! Questa modifica può impattare sui profili** (#TT05634/25)
> -	SD - Nella creazione del file Sdi IT, valorizzazione tag NumeroCivico del cedente/prestatore e cessionario/committente (#TT05470/25)
> -	SD - Revisione visibilità campo 'Cedente prestatore' per autofatture (#TT05662/25)
> -	SD - Stampa DDT di Vendita: Corretta la visualizzazione dell’unità di misura nella stampa nel caso di prezzo articolo riferito all’unità di misura alternativa (#TT05230/25)
> -	SH - Revisione gestione inserimento dettagli nella Matrice applicazione tasse (#TT05283/25)
> -	Risolto errore per script mancante su Parser Objects
> -	WM - Corretto bug in ricevimento merci del WMS che non inseriva correttamente il conto del cliente nelle unità di carico create (#TT05674/25)
> -	WMS - Ricevimento merce - Esecuzione dell’algoritmo di chiusura form etichette anche da WPF. (#TT05548/25)

### Patch 803.0004 - 22/12/2025

> - FI - Stampa di controllo cespiti, revisione per calcolo del tipo operazione iva indetraibile (#TT05537/25)
> - MES - MES Solution - Gestione del Centro di lavoro "Multi-risorsa" Utilizzato nel caso in cui il Centro di lavoro venga utilizzato contemporaneamente da più Operatori ognuno dei quali inizia e porta a termine una lavorazione. A tal proposito, nelle "Risorse di produzione" di tipo "Centro di lavoro", nei parametri "Generali", tabulatore "Generale", è stato gestito il parametro "Centro di lavoro multi-risorsa". Nel M.E.S., se per un "Centro di lavoro multi-risorsa" viene indicata una "Risorsa" di tipo "Dipendente" e viene dichiarata una fase di lavorazione, questa può essere dichiarata e portata a termine solamente da quella Risorsa dipendente. Si rendesse necessario un cambio Risorsa dipendente, la fase deve essere Sospesa indicando una "Causale di sospensione" con l'indicazione di "Blocco proposta fase in M.E.S." per poi essere nuovamente selezionata, tramite il pulsante "Seleziona nuove fasi", ed effettuata una dichiarazione di ripresa con un'altra Risorsa dipendente (#TT05411/25)
> - MS - Corretto bug in Schedulazione a capacità finita che raggruppava in alcuni casi gli ordini pianificati creati anche se non richiesto (#TT05238/25)
> - Risolto il problema di compilazione dello script dell’algoritmo con le informazioni di log.

### Patch 803.0003 - 19/12/2025

> -	Allineamento tecnico Importazioni Excel della progress Bar
> -	Disabilitazione script loger
> -	MES - MES Solution - Gestione del blocco proposta fase in soluzione tramite le "Causali di sospensione". Alla sospensione di un'attività, indicando una "Causale di sospensione" con l'indicazione di "Blocco proposta fase in M.E.S.", alla successiva proposta delle fasi in lavorazione per il Centro di lavoro, la fase sospesa non verrà visualizzata. Per poter proseguire nella lavorazione della fase sospesa è necessario selezionarla, tramite il pulsante "Seleziona nuove fasi", ed effettuare una dichiarazione di ripresa (#TT05365/25)
> -	MS - Corretto bug nella procedura MRP che non generava gli ordini pianificati con la quantità corretta in alcuni casi particolari (#TT05310/25)
> -	MS - Corretto bug nella procedura MRP inerente allla creazione di ordini pianificati raggruppati per gli articoli figli (#TT04735/25)
> -	Risolti i bugs per creare una configurazione di Intercompany Importer
> -	SCM - Risolto errore che in alcuni casi impediva la cancellazione dei DDT di Acquisto per i quali era stato effettuato un tentativo di valorizzazione (#TT05568/25)

### Patch 803.0002 - 18/12/2025

> -	ARM - Correzione della combobox Unità di lavoro nella ribbon.
> -	CRM - WEBAPI - importazione offerte di vendita, risolto caso per cui il contatto CRM non veniva trovato in Fluentis in fase di importazione (#TT05577/25)
> -	FI - revisione contabilizzazione documenti per valorizzazione dimensione progetti, in caso di utilizzo di un centro di progetto diverso da quello di default Fluentis non inserisce più un doppione con quello di default (#TT05570/25)
> -	FI - revisione contabilizzazione fatture di acquisto con incrementi multipli sullo stesso cespite (#TT05558/25)
> -	MS - Corretto bug in pianificazione generale legato all’utilizzo di articoli fittizi in distinta base (#TT04427/25)
> -	Risolto bug di compilazione script dall’anagrafica degli script
> -	SCM - Creazione Fattura di Acquisto da Documenti di acquisto in entrata: per gli articoli privi di unità di misura nel file XML, la fattura viene generata utilizzando l’unità di misura selezionata nella procedura di creazione (#TT05445/25)
> -	SD - Conversione Offerta di Vendita in Ordine: se il cliente intestatario dell’offerta è stato bloccato nel Lock Manager la creazione dell’ordine viene bloccata (#TT05495/25)
> -	SD - Conversione Offerta in Ordine Cliente: Nel riferimento all’offerta presente sulle righe articolo dell’ordine viene ora riportata la data dell’offerta anziché la data di creazione (#TT05527/25)
> -	SD - Nelle Offerte gerarchiche, la modifica dell’articolo nella sezione Materiali aggiorna ora automaticamente anche la relativa descrizione (#TT05534/25)
> -	WM - Corretto bug in fase di cancellazione delle righe di un picking creato da spedizione (#TT05488/25)

### Patch 803.0001 - 17/12/2025

> - ARM - aggiornamento dello script post migrazione
> - Risolto il problema con i parametri obbligatori delle attività supervisore
> - Risolto un bug nella creazione di una nuova operazione di flusso e dei documenti con BizLink
> - Risolto un bug relativo ai parametri GitHub mancanti nell’editor di script
> - SD - correzione importazione SalesOffer via WebApi - ricerca ticket CrmContact (#TT5577/25)