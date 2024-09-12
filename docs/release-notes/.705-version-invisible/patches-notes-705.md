
### Patch 705.1-0015 - 30/04/2024
> - SD – Il controllo sulla Data Merce Pronta, che deve essere minore o uguale alla Data consegna, è stato inserito anche nella Testata dell’Ordine cliente (#TT01711/24)
> - Browser - fix bindings not working anymore after 'new' in an object form (TT01885/24)
> - Fix Blazor Contact-grid Item-client layout problem(#TT01258/21)
> - FI - Rimossi i flag delle partite non pagabili dalle form di creazione pagamento fornitori, creazione automatica pagamenti fornitori, tab pagamenti della registrazione contabile di pagamento, compensazione partite. #TT01701/24
> - WMS - Nelle form gestione spunta e Conferma picking del WMS, rivista la proposta della giacenza nel caso in cui il lotto dell'articolo fosse già inserito nel picking. (#TT01435/24)
> - New layout for tiles
> - Add pivot viewer to dashboards
> - SH - Import webApi - Fix propose FormattedNumber (#TT02622/23)
> - Browser – fix column order when saving profiles (TT01946/24)
> - Solved layout bugs on Blazor-Supervisor & BizLink 
> - SH - Nuovo messaggio di avviso se impostando l’anagrafica di una persona fisica non vengono compilati in nome e cognome e nuovo messaggio di errore generando il file della fattura elettronica senza questi dati.( #TT01700/24)
> - PM-Fix null error on project details report (#TT01087/24)
> - Fluentis Browser - MS - Filtro Ordini pianificati – bug fix - Grid rows color are missing 
(#TT01826/24)
> - Fluentis Browser - MES – bug fix - tabulator "Documenti e Istruzioni operative" the right area disappear (#TT01970/24)
> - PR - revisione ripresa dati da rientri di c/lavoro nel cash flow (#TT01934/24)
> - FI - quarterly vat comunication, 2024 alignment ( TT01141/24)
> - SCM – Corretto errore che impediva la modifica delle Edizioni nel Pharma (#TT01753/24)
> - PM - il valore degli extra data di progetto viene caricato nella griglia della form di ricerca (ticket 01740/24
> - PM – Risolta casistica in “Stampa dettaglio progetto” che non riportava scritture contabili con collegamento alla sola testata del progetto e non agli articoli. (#TT01087/24)
> - FI - Cost center from delivery notes not visible in general ledger posting & Movement analysis for cost centers report ( TT01521/24)
> - SH - Indirizzi alternativi : revisione salvataggio dei campi nome e cognome all’interno degli indirizzi alternativi ( TT01794/24 )
> - Fluentis Browser - MES - Foglio di Lavoro – bug fix - Expander "Ordinamento" is blinking (#TT01968/24)
> - FL Browser – MS -  working shift error in detail delete (#TT01673/24)
> - Removed tabs on Script Editor


### Patch 705.1-0014 - 29/04/2024
> - FI - Risolto l'errore di arrotondamento quando si crea una registrazione da una fattura di vendita con un'altra valuta e quando l'IVA non è pari a 0.
> - SH - Fluentis Browser - risolti problemi sul tab Documenti dell'help articoli (#TT01258/21)
> - WM - Fluentis Browser - risolti problemi generali sui lotti (#TT01258/21)
> - SD - Fluentis Browser - risolti problemi di selezione sulle griglie (#TT01258/21)
> - PR - revisione del calcolo del cash flow da ordini di conto lavoro (#TT01609/24)
> - FI - Revisione contabilizzazione pagamenti percipienti per numerazione pagamento/partite e raggruppamento per sottoconto (#TT01285/24)
> - FI - Revisione calcolo partite per fatture acquisto cespiti estere senza movimento iva (#TT02800/23)
> - FI - Fluentis Browser - Corretto il problema della creazione automatica del layout di insediamento degli agenti (#TT01258/21)
> - MES - Fluentis Browser - Risolto bug sui caricamenti (#TT01874/24)
> - QY - Fluentis Browser - Aggiunti oggetti mancanti sullo Strumento di Misura (#TT01882/24)
> - MES - Fluentis Browser - Aggiunti campi non visibili sugli Ordini di Produzione (#TT01655/24)
> - MES - Fluentis Browser - Aggiunto scrollbar verticale sulla Generazione automatica Calendario Capacità Produttive (#TT01652/24)
> - MES - Fluentis Browser - "Tipo costificazione commessa" nel Tipo documenti non viene annullato se modifico il "Codice standard" (#TT01741/24)
> - SD - Fluentis Browser - risolti vari errori sulla selezione nei documenti (#TT01258/21)
> - SD - Fluentis Browser - Risolti problemi di layout nella Creazione DDT da Picking (#TT01258/21)
> - WM- Fluentis Browser - risolti problemi generali di localizzazione (#TT01258/21)
> - PM - Fluentis Browser - ottimizzazione assegnazione wbs dei progetti (#TT01784/24)
> - CO - Fluentis Browser - Risolti problemi di cancellazione delle Vendite annuali (#TT01258/21)
> - FI - revisione liquidazione iva della localizzazione Croata (#TT03562/23)
> - FI - revisione gestione commissioni agenti in contabilità, per incassi parziali e per contabilizzazione fatture con totale 0 (#TT01822/24)
> - FI - revisione stampa definitiva liquidazione iva periodica gennaio per salvataggio credito anno precedente/credito periodo precedente (#TT01160/24)
> - WM - Fluentis Browser - Ottimizzazione layout Prototipi (#TT01529/24)


### Patch 705.1-0013 - 24/04/2024
> - SH - Corretto errore nell'Analisi Disponibilita che appariva quando non erano stati inseriti i magazzini e le causali all'interno dei Parametri Ordini di Produzione (#TT01765/24)
> - PM - Gestita esportazione in excel dei campi calcolati nella griglia del SAL (#TT01433/24)
> - SD - Se il cliente persona fisica non ha nome/cognome compilato, il file Sdi viene valorizzato nel tag Denominazione con la Ragione sociale cliente. Nel caso manchi solo nome o solo cognome, la creazione del file viene bloccata (#TT01700/24)
> - FI - compensazione veloce, revisione procedura per chiusura commissioni associate alle partite (#TT01664/24)
> - FI - Fluentis Browser - Corretti gli errori di convalida nel piano dei conti (#TT01464/24)
> - SH - Ottimizzazione visualizzazione Datasource.
> - SD - La ricerca avviene in base alla priorità anche nel caso di più righe per la stessa tipologia di provvigione (#TT1695/24)
> - MS - Fluentis Browser - MS - F.C.S. - Revisione layout dei FCS parametri del tabulatore (#TT01827/24)
> - MES - Fluentis Browser - MES - Filtro risorse di produzione - Aggiunta della barra multifunzione mancante nel modulo popup “Importa” (#TT01764/24)
> - MES - Fluentis Browser - MES - Foglio di Lavoro - Risolto bug sui multipli ordinamenti (#TT01873/24)
> - SH - Fluentis Browser - Corretto la riga del filtro dell'elenco ad albero che non funziona come previsto (#TT01845/24)
> - SD - Corretto errore che non popolava i ‘Materiali Conai per l’articolo’ nelle note di credito (#TT01841/24)
> - PM - WEB effettuati miglioramenti su planner nella parte web (#TT01782/24)
> - SH - WebApi - Corretto la ricerca su riferimenti di proprietà che iniziano con lo stesso nome
> - Fi - WebApi - Corretta l'importazione di registrazioni con VatReferenceNumber

### Patch 705.1-0012 - 23/04/2024
> - ARM - Possibilità di includere le soluzioni Ribbon snapshots (#TT02656/23)
> - MES - Browser - bug fix for Controllo Utilizzo Risorse - Layout review & Localization (#TT01720/24)
> - CPM - Browser - unità di misura dei centri di costo, modulo di duplicazione non era visibile correttamente (#TT01675/24)
> - SH - Risolti problemi di chiusura dei Parametri di vendita (#TT01258/21)
> - MES - Fluentis Browser - Flag Attiva bug fix for Attrezzature (#TT01651/24)
> - MES - Browser - Flag Attiva bug fix for Utensili (#TT01742/24)
> - SH - Fluentis Browser - Dashboard705V1 (dashboard) (#TT01471/24)
> - CRM - Fluentis Browser - risoluzione problemi generali (#TT01509/24)
> - FI - quarterly vat comunication, 2024 alignment (#TT01141/24)
> - SH - Fluentis Browser - Corretto allineamento visivo delle celle delle strutture ad albero (#TT01845/24)
> - SCM - Corretto errore che proponeva la stessa 'Descrizione articolo fornitore' nella procedura di 'Evasione ordini', per tutti i fornitori preferenziali dell'articolo (#TT01501/24)

### Patch 705.1-0011 - 22/04/2024
> - SD - Fix Blazor Crm Tickets- quantities sum problem(TT1258/21)
> - WM - Corretto errore che non permetteva la generazione di un DDT dalla Lista di Prelievo UDC (#TT01595/24)
> - FI - New posting from previous new posting not saved (#TT01832/24 e #TT01611/24)
> - MS - browser - bug fix per Rilascio ordini pianificati pop-up Riepilogativa - (#TT01630/24)
> - MS - bug fix per cancellare righe nel Turni di lavoro (TT01673/24) 
> - Browser - improved dataGrid keyboard navigation (TT01504/24)
> - Browser - prevent spin edit increment from arrows (TT01537/24)
> - Browser - fix dataGrid not saving column changes in profiles (TT01739/24)
> - SH - propose export file name from print preview if the document has the "ReportAttachFileName" transformation(TT00837/24)
> - Browser - fix tab/enter not selecting the focused row in the dropdown sometimes (TT01508/24)
> - SCM - Se un documento di acquisto è già caricato, non è possibile cambiare il codice lotto (#TT01712/24)
> - SD - Fix Blazor Sales Carrier- Help Contact problem (TT1258/21)
> - PM - SAL di progetto, reso possibile drag&drop campi dall’object
> - SCM/SCS - Fix Blazor Carrier- Help Contact problem
> - MS - browser - bug fix per Calendario di Fabbrica,  Calendario Capacità Produttive  (TT01524/24)
> - MES - browser - bug fix per visualizzazione tabs Risorsa di produzione  (TT01766/24)
> - SD - Corretta la visualizzazione dei Diagrammi di Evasione per i documenti contenenti solo righe articolo di tipo 2 (#TT01445/24)
> - MES - browser - bug fix nel Foglio di Lavoro - disabilita cancellazione righe (TT01719/24)
> - CO - Browser - lower grid for cost center link to projects, all columns are active ( TT01671/24)
> - CO - Browser - controlling formulas ( TT01668/24)

### Patch 705.1-0010 - 19/04/2024
> - Scm - purchase invoice accrual data management for RO version
> - SD - Fix Blazor Crm Tickets- view mode problems(TT01258/21)
> - MS - FL Browser: Generazione commesse di produzione (TT01543/24)
> - MS - FL Browser: Commesa di produzione (#TT01614/24)
> - ARM - Fix standard Diagrams saved as custom (#TT01751/24)
> - Browser - tree control fixes for edit row (#TT01670/24)
> - Browser - data controls exception fixes
> - Browser - cpm issues (one is also in Wpf) ( TT01685/24)
> - Browser - vat settlement printed in definitive, blazor is allowing me to change Vat code while wpf (correctly) not ( TT01631/24)
> - SD - Corretto errore nel Dettaglio Movimenti che visualizzava alcune quantità con segno errato (#TT01546/24)

### Patch 705.1-0009 - 18/04/2024
> - FI - fix error on recalculate automatic registration
> - Fixed missing reference for BlazorApp
> - SD - Fix Blazor LoadPlan-insert order problem(TT01258/21)
> - FI - automatic registration related to the enviromental tax - RO version ( TT01749/24)
> - SD - Fix Contact-operation Calculation Discount problem (TT01258/21)
> - FL Browser: dasboard menu doesn't open and home doesn't display anything (#TT01612/24)
> - Browser - definitive printing (journal, vat settlement, vat registry) is not running updates 'after process' (#TT01566/24)
> - SD - Fix SalesOrder status problem (TT01258/21)
> - PM - Webapi importazione dichiarazione attività, corretta gestione campo TotalTime e valori inizio-fine pausa (#TT01627/24)
> - FL Browser: dynamic filter expression cannot be used (#TT01637/24)
> - FL Browser - Fix colors in Phase sequence. (#TT01632/24)
> - FL Browser: Pianificazione Parte 2. (#TT01614/24)
> - FL Browser: Pianificazione parte 1. (#TT01531/24)
> - SD - Fix Blazor SalesForecast - DataRetrieve problems (TT01258/21)
> - Fluentis Browser - MES - Bug fix in Declarations Record (TT01757/24)
> - Fluentis Browser - MES - Ribbon fix in Production Declarations (TT01759/24)
> - FL BROWSER - Blazor - Certificazione unica ( TT00965/24)
> - Fluentis Browser - MES - Recalculate dates fix (TT01656/24)
> - SD - Fix FL Browser - gerarchical sales offer converted to a order and project, doesn't insert material and resources in the sales order(TT01777/24)
> - FI - nella registrazione contabile, bloccata la possibilità di modificare righe pagamento derivanti da pagamenti percipienti, bisogna eseguire il rollback e modificare l’importo di pagamento nella procedura di contabilizzazione. (#TT00909/24)
> - FI - Browser - posting template, vat accrual date combo is not opening ( TT01659/24)
> - FI - Note di rilascio: la data di filtro della Visualizzazione bilancio ora si basa sulla data competenza di testata e non più sulla data registrazione (#TT01243/24)
> - SD - Fix FL Browser: same offer opened in edit mode in browser + wpf at the same time (TT01778/24)
> - FI - calcolo provvigioni pagamento totale in valuta USD  ( TT01696/24)
> - Solved bug to create script client side for namespace different form FluentisErp
> - SD - Fix Blazor Contact client-tab Delivery (TT01258/21)
> - SD - Fix wrong dictionary link for procedure grouping (TT01258/21)
> - FI - Align Maturity in other currency when are differences with Postingledger( TT01805/24 )
> - CO - Browser - new recordings inside Internal closure, or manual area recordings ( TT01536/24)
> - SH - Fluentis Query Studio for Blazor (TT00907/24)


### Patch 705.1-0008 - 16/04/2024
> - SD - Fix FL Browser: Generazione commesse di produzione(ticket TT01543/24)
> - SD - Fix FL Browser: Logistica parte 2(ticket TT01511/24)
> - Browser - fix filter row for references in read-write filter result data grids
> - WM - FL Browser: Pianificazione parte 1 (#TT01531/24)
> - MS - FL Browser: Generazione commesse di produzione (TT01543/24)
> - SD- Fix Blazor SalesPriceList Creation-decimals error (TT01258/21)
> - PM - corretto filtro progetti di tipo template nella conversione offerta in ordine e progetto (#TT01479/24)
> - WM - Inventario a quantità valorizzato - Corretta anomalia sul ‘Valore unitario’, proposto nel report di ‘Stampa inventario’, se richiesta la ‘Valorizzazione a Costo medio’ e ‘Valorizza a magazzino’ presente nei ‘Parametri iniziali magazzino’.(#TT01690/24)
> - Browser - fix ‘%’ symbol not working as intended in filter rows (#TT01626/24)
> - Browser - fix references not being saved in read-write filter results	
> - SD - Fix Blazor SalesPriceListRounding problems (TT01258/21)
> - FI - Browser - simulation of fixed asset depreciations, missing column in grid (#TT01591/24)
> - SCM - Corretto errore nell’aggiornamento degli importi nei movimenti di magazzino in presenza di una spesa ripartita nel DDT o nella Fattura di Acquisto (#TT00794/24).
> - PR - Lock manager shows all document records from all companies ( TT01593/24)


### Patch 705.1-0007 - 15/04/2024
> - SH - insert account in chart of accounts ( TT01466/24)
> - CO - corretto bug che in alcuni casi generava un report vuoto nella stampa della riclassificazione con comparazione ( TT00917/24)
> - FI - in contabilizzazione fatture di vendita, alle partite viene assegnato l’agente che ha l’importo provvigionale più alto tra le varie righe documento, in caso di valori uguali l’ordine è per id agente (TT01286/24)
> - SD - Al salvataggio di una nota di credito, tutti i Tipi spesa vengono inseriti con segno negativo, tranne le spese Bollo (#TT01289/24)
> - SD-Nell'evasione ordini clienti in fattura, revisione assegnazione date competenza economica nell'analitica (#TT01275/24)
> - SD - Fix Blazor various problems (TT01258/21)
> - FI - TT01517/24 - Browser - intrastat automatic creation from documents or postings
> - FI - TT01591/24 - Browser - simulation of fixed asset depreciations, missing column in grid
> - WM - Fix layout problems in Blazor (#TT01493/24)
> - Solved bug to detect Output parameters on Algorithms
> - MES - Implementata nella lista prelievo materiali la gestione della quantità residua. (#TT00836/24)
> - CRM - TT01565/24 - FL Browser - Distribution list in the Newsletter - some problems
> - FI - TT01585/24 - Browser - missing depreciation grid inside fixed assets
> - Browser - fix for Chart of Accounts validation error (#TT01464/24)
> - QY - Blazor fixes (TT01550/24, TT01551/24, TT01553/24, TT01555/24, TT01558/24, TT01559/24, TT01560/24, TT01561/24)
> - SD - Fix Blazor Contact-flag for Priority problem (TT01258/21)
> - SH - Browser - overdue registers flag not visible in register (#TT01486/24) 
> - Browser - dasboard menu doesn't open and home doesn't display anything (#TT01612/24)
> - SD - Blocco importazione fatture di vendita Web Api per fatture scaricate, contabilizzate o inviate al sistema di fatturazione elettronica. (TT01578/24)
> - PM : migliorata gestione spese da fatture di acquisto nel SAL di progetto (#TT01366/24)
> - SCM, SCS - All’interno dei documenti di Acquisti e Conto Lavoro è ora possibile inserire un vettore (#TT01132/24).

### Patch 705.1-0006 - 11/04/2024
> - SD - Fix Blazor SalesInvoice-AccountManagementOnInvoice confirm problem and Sales Summary Agents delete problem(TT01258/21)
> - Arm - fix for search widget
> - PM - SAL di progetto, aggiunto codice PRCC008 Costi Extra da Spese in Fatture d'Acquisto che considera tutte le fatture di acquisto, contabilizzate e non. Corretta descrizione codice PRCC006 in Costi Extra da Spese in Fatture d'Acquisto non contabilizzate (#TT01385/24)
> - Browser - fix selection from Item help not being applied (#TT01480/24)
> - CO - Browser - new reclassification inside controlling (#TT01538/24)
> - SD - Fix Blazor PackagesManagement - search error (TT01258/21)
> - FI - fix starting period ComputeAcccounting Statement - to be readed from General Ledger Parameters (TT01567/24)
> - Browser - fix Contacts filter issues (#TT01519/24)
> - Browser - fix Contact register errors related to person type (#TT01541/24)
> - SD - Fix Sales Price for AlternativeQuantity search problem (TT01258/21)
> - MS - Corretto bug nella procedura MRP nel caso di articoli fittizi. (#TT01164/24)
> - FI - revisione attivazione pulsanti di gestione all’interno dell’intrastat (#TT01232/24)
> - Solved bug to load script for ViewModel with missing BusinessObjectName
> - Browser - data grid / tree view optimizations
> - ARM - Working Unit - fix error when Update WebApi models when only read only object present
> - SD - Fix Blazor SalesPriceList AssociationType-dynamic columns problem (TT01258/21)

### Patch 705.1-0005 - 10/04/2024
> - SD - Fix Filter details delete problem(TT01258/21)
> - Fix workflow popup (blazor) 
> - Browser - open company details in modify it returns notification error (#TT01475/24)
> - Drag and drop in Opportunity Kan Ban (#TT01096/24)
> - Browser - fix computed fields generated type (#TT01125/24)
> - FI - Associazione file xml a percipienti: revisione proposta dei soli file nello stato ‘non assegnato’  (TT01317/24)
> - CRM - Browser - List in the newsletter (add dynamic columns) (#TT00904/24)
> - PR - Corretto bug che in fase di creazione RiBa da fatture nel caso di fattura e nota di accredito da accorpare sommava invece di sottrarre la NC. ( TT00897/24)
> - SD - Fix Blazor Carrier and AccountHolder widget problem
> - SCM - Al momento della Creazione fattura d’acquisto da file XML il prezzo viene importato in fattura con il flag Prezzo Manuale attivo e senza riprendere la scontistica interna (#TT01227/24).
> - WM - Corretto bug sulle tiles (Chiusi, Non chiusi) dell'anagrafica lotti. (#TT01497/24)
> - PM - SAL Risolta anomalia in elaborazione massiva (#TT01439/24)
> - WM - Corretto bug in analisi disponibilità che non mostrava correttamente i valori nei campi: Ordine cliente collegato e quantità ordine cliente. (#TT01062/24)
> - Browser - general fix for column bindings relative to the current row

### Patch 705.1-0004 - 09/04/2024
> - SD - Inserimento di un nuovo pop up di avviso nel caso in cui venga inserito un tipo fattura senza split payment (quindi senza Causale contabile associata che abbia Tipo movimento ‘29’) e un cliente che invece gestisce lo split payment (#TT01237/24)
> - FI, PR - revisione contabilizzazione effetti per partite create su divisioni differenti da quella attiva (#TT01401/24)
> - MS - Aggiunto un messaggio di errore nell'MRP nel caso in cui l'articolo fosse di produzione ma non avesse la distinta base. (#TT01414/24)
> - WM - Tradotto titolo della stampa Tracciabilità Lotto
> - CO - Corretto bug che non eseguiva correttamente il refresh della form selezionando un nodo del modello di riclassificazione per inserire i sottoconti collegati. Migliorato messaggio utente di avviso per tipi conto ( TT01367/24)
> - Solved bug on cancel BizLink connector editor state
> - CRM - add context menu for scheduler and other fixes (# TT01481/24)


### Patch 705.1-0003 - 08/04/2024
> - FI - revisione filtro per divisione in stampa Sottoconti eseguita dalla form ‘Visualizzazione conti’ ( TT01394/24)
> - WM - Corretto titolo della form Tracciabilità Lotto (#TT01415/24).
> - WM - Quando si genera una registrazione dalla maschera di Visualizzazione Giacenze, se la causale inserita ha una contropartita verrà proposta l’ubicazione della causale, eliminandola verrà proposta l’ubicazione dell’articolo (#TT01351/24).
> - WM - Quando si genera una registrazione dalla maschera di Visualizzazione Giacenze, se la causale inserita ha una contropartita verrà proposta l’ubicazione della causale, eliminandola verrà proposta l’ubicazione dell’articolo (#TT01351/24).
> - SD - Consentita la modifica del range di date competenza economica in fatture di vendita con file Sdi creato ma non contabilizzate (#TT01038/24)
> - SCM - Corretto bug nella creazione del codice lotto nel caso in cui non venisse inserito manualmente nel DDT, ma calcolato creato automaticamente al momento dello scarico. Succedeva solo nel caso in cui fosse utilizzato il nomignolo del fornitore nella composizione del codice. (#TT01297/24)
> - SD - Blocco al ricalcolo a zero della percentuale provvigionale su righe evase da OC, nel caso di range sconto e categoria provvigionale di filtro (#TT01310/24)
> - CRM - fix for campaign (create dynamic columns) (#TT01398/23)

### Patch 705.1-0002 - 05/04/2024
> - WM - Corretto bug nel report di Valorizzazione Assiemi in merito alle lavorazioni esterne. (#TT00920/24)
> - FI - corretto bug nella stampa di verifica della dichiarazione di intento quando nella fattura c’erano delle spese finali agganciate alla dichiarazione dii in tento il loro valore non veniva correttamente riportato sulla colonna registrato e rimaneva sulla colonna fatturato ( TT01311/24).
> - SD - Le spese di Incasso sono assoggettate automaticamente all’iva principale del documento (#TT00511/24)
> - Nell'evasione ordini fornitori in fattura, revisione assegnazione date competenza economica nell'analitica ( #TT01275/24 )
> - PM - SAL progetto inserito nuovo codice PRCC007 - Costi da Fatture Acquisto (#TT01279/24).
> - ARM - Manage Custom Use Document manager flag, fix LicenceType Widget
> - PM - WBS Resource assignation (#TT01346/24)
> - PM - SAL di progetto nelle righe di dettaglio aggiunto articolo e descrizione dalla riga del documento. (#TT01278/24)
> - FI - revisione test di quadratura cdc/coge al salvataggio della registrazione contabile (#TT01372/24)
> - SH - fix loop for Business Object Extension 

### Patch 705.1-0001 - 02/04/2024
> -  Solved some bugs with Supervisor UI and add Log filter on Events
> - ARM - Working Units - display IsDevelopment field and set default value  as True
> - ARM - migration fixes
> - MES - Lista di prelievo - Aggiunta colonna "Note materiale" nell'elenco dei "Materiali" (#TT01322/24)
> - Solved problem with Task parameters
> - WM - Corretto bug nel report Stampa inventario a quantità valorizzato inerente al costo da costo effettivo lotti e alla visualizzazione dei costi unitari e totali di riga. (#TT01233/24 - #TT00807/24)
> - SD - L'inserimento di un articolo all'interno di una Fattura di Vendita mediante l'utilizzo dell'Help articoli ora riporta correttamente la classe (#TT01213/24).
> - SD: I valori della bolla di consegna  vengono visualizzati in Fluentis per gli uffici doganali, i valichi di frontiera e il mittente(TT01350/24)
> - PR - corretto bug nel calcolo scadenze del cashflow sugli ordini conto lavoro ( TT01203/24)
> - PM - Elaborazione SAL di più progetti in contemporanea, risolte casistiche di calcoli non corretti. (#TT01325/24)
> - PM - WBS Resource assignation (#TT01346/24)
> - Rilascio stampa LIPE anno 2024
