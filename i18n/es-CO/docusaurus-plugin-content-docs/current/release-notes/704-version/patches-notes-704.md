---
title: Patch notes Versione 704
sidebar_position: 1
---

### Patch 704.1-0031 - 16/05/2024
> - PR - corretto bug che utilizzava nel cashflow il conto cliente trzista per fasi esterni nell’ordine di conto lavoro anziché il fornitore effettivo (#TT02034/24)
> - FI - revisione delle date di competenza economica assegnate alle registrazioni di riapertura degli assestamenti dalla chiusura conti automatica (#TT01535/24 - #TT01814/24)
> - FI - nella compensazione partite, revisione gestione filtri partite rispetto al tipo di compensazione, gestione decimali nei campi in griglia (#TT02113/24)
> - SH - Trascinamento di immagini: impostato il tipo di file del documento come 'JPG' quando l'estensione del file è 'JPEG' (#TT02210/24)
> - SD - Versioni offerte visibili correttamente in base al flag "visualizza tutte le versioni" anche nei tab degli stati del workflow (#TT02228/24)

### Patch 704.1-0030 - 09/05/2024
> - WMS - Nella form Lista trasferimento UDC è stato aggiunto lo stato della lista sia come filtro che come colonna sulla griglia dei risultati  (#TT03338/23, #TT02030/24)
> - SCM - Nell'anagrafica articolo, tab Listini Fornitori sono state aggiunte le colonne relative a Codice e Descrizione variante (#TT01851/24)
> - SCM - Nella griglia del Navigatore articoli sono state aggiunte le colonne relative a Codice e Descrizione variante (#TT01890/24)
> - WMS - Ora nella form Ricevimento Merci del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01909/24)
> - WMS - Ora nella form Carico articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01892/24)
> - WMS - Ora nella form Scarico articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01893/24)
> - WMS - Ora nella form Sposta articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01894/24)
> - WMS - Ora nella form Rettifica articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01895/24)
> - WMS - Ora nella form Giacenza articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01896/24)
> - WMS - Ora nella form Liste di prelievo UDC del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01905/24)
> - WMS - Ora nella form Gestione UDC del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01906/24)
> - WMS - Ora nella form Liste Trasferimenti UDC del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell'utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01903/24)
> - FI - registrazione di pagamento/incasso in divisa estera, se i pagamenti sono della stessa divisa della testata registrazione e non ci sono righe manuali allora il totale del documento in valuta corrisponde al valore in divisa chiuso. Se vi sono pagamenti in altre divise e/o righe manuali, invece, il totale in divisa sarà il calcolo del controvalore divisa del totale dare/avere in divisa società (#TT1703/24)
> - SD - Nella creazione file Sdi su fatture/note di credito in valuta, revisione gestione arrotondamenti (#TT1703/24 - #TT02135/24)

### Patch 704.1-0029 - 06/05/2024
> - SH - Nuovo messaggio di avviso se impostando l’anagrafica di una persona fisica non vengono compilati in nome e cognome e nuovo messaggio di errore generando il file della fattura elettronica senza questi dati (#TT01700/24)
> - PR - Revisione ripresa dati da rientri di c/lavoro nel cash flow (#TT01934/24)
> - PM - Il valore degli extra data di progetto viene caricato nella griglia della form di ricerca (#TT01740/24)
> - PM - Risolta casistica in “Stampa dettaglio progetto” che non riportava scritture contabili con collegamento alla sola testata del progetto e non agli articoli (#TT01087/24)
> - FI - Cost center from delivery notes not visible in general ledger posting & Movement analysis for cost centers report (#TT01521/24)
> - SH - Indirizzi alternativi: revisione salvataggio dei campi nome e cognome all’interno degli indirizzi alternativi (#TT01794/24)
> - FI - Revisione ripresa valori da registrazioni per sezione quater (#TT01985/24)
> - PR - Ottimizzazione Cash Flow da DDT Acquisto (#TT01754/24)
> - FI - Scritture di assestamento: revisione descrizione dettaglio nelle registrazioni contabili create automaticamente dalla procedura (#TT00503/24)

### Patch 704.1-0028 - 29/04/2024
> - SD - Corretto errore nel Dettaglio Movimenti che visualizzava alcune quantità con segno errato (#TT01546/24)
> - ARM - Forms Wizard - Sostituzione fluentis: BaseView con fluentis: ViewModelResolver.
> - WM - Corretto errore che non permetteva la generazione di un DDT dalla Lista di Prelievo UDC (#TT01595/24)
> - Risolto l'errore di creare script lato client per uno spazio dei nomi diverso da FluentisErp.
> - SH - viene proposto il nome del file di esportazione nell'anteprima di stampa se il documento ha la trasformazione “ReportAttachFileName” (#TT00837/24)
> - SCM - Se un documento di acquisto è già caricato, non è possibile cambiare il codice lotto (#TT01712/24)
> - PM - SAL di progetto, reso possibile il drag&drop dei campi dall’object
> - SCM - Corretto errore che proponeva la stessa 'Descrizione articolo fornitore' nella procedura di 'Evasione ordini', per tutti i fornitori preferenziali dell'articolo (#TT01501/24)
> - SH - Corretto errore nell'Analisi Disponibilita che appariva quando non erano stati inseriti i magazzini e le causali all'interno dei Parametri Ordini di Produzione (#TT01765/24)
> - PM - Gestita esportazione in excel dei campi calcolati nella griglia del SAL (#TT01433/24)
> - SD - La ricerca avviene in base alla priorità anche nel caso di più righe per la stessa tipologia di provvigione (#TT01695/24)
> - SD - Corretto errore che non popolava i ‘Materiali Conai per l’articolo’ nelle note di credito (#TT01841/24)
> - PR - revisione del calcolo del cash flow da ordini di conto lavoro (#TT01609/24)
> - FI - Revisione calcolo partite per fatture acquisto cespiti estere senza movimento iva (#TT02800/23)
> - FI - Revisione liquidazione iva della localizzazione Croata (#TT03562/23)
> - FI - Revisione gestione commissioni agenti in contabilità, per incassi parziali e per contabilizzazione fatture con totale 0 (#TT01822/24)
> - FI - Revisione stampa definitiva liquidazione iva periodica gennaio per salvataggio credito anno precedente/credito periodo precedente (#TT01160/24)


### Patch 704.1-0027 - 18/04/2024
> - ARM -  Unità di lavoro - correzione dell'errore durante l'aggiornamento dei modelli WebApi quando è presente solo un oggetto di sola lettura
> - MES - Implementata nella lista prelievo materiali la gestione della quantità residua (#TT00836/24)
> - SD - Blocco importazione fatture di vendita Web Api per fatture scaricate, contabilizzate o inviate al sistema di fatturazione elettronica (#TT01578/24)
> - PM - migliorata gestione spese da fatture di acquisto nel SAL di progetto (#TT01366/24)
> -  SCM, SCS - All’interno dei documenti di Acquisti e Conto Lavoro è ora possibile inserire un vettore (#TT01132/24)
> - SD, SCS, WM - All’interno dei documenti di Vendita, Bolle di Conto Lavoro e Picking è ora possibile inserire un vettore (#TT01132/24)
> - WM - Inventario a quantità valorizzato - Corretta anomalia sul ‘Valore unitario’, proposto nel report di ‘Stampa inventario’, se richiesta la ‘Valorizzazione a Costo medio’ e ‘Valorizza a magazzino’ presente nei ‘Parametri iniziali magazzino’ (#TT01690/24)
> - FI - registrazione automatica relativa alla tassa ambientale - RO version (#TT01749/24)
> - PM - Webapi importazione dichiarazione attività, corretta gestione campo TotalTime e valori inizio-fine pausa (#TT01627/24)

### Patch 704.1-0026 - 11/04/2024

> - FI - revisione filtro per divisione in stampa Sottoconti eseguita dalla form ‘Visualizzazione conti’ (#TT01394/24)
> - WM - Corretto titolo della form Tracciabilità Lotto (#TT01415/24)
> - SD - Consentita la modifica del range di date competenza economica in fatture di vendita con file Sdi creato ma non contabilizzate (#TT01038/24)
> - SD - Blocco al ricalcolo a zero della percentuale provvigionale su righe evase da OC, nel caso di range sconto e categoria provvigionale di filtro (#TT01310/24)
> - SD - Inserimento di un nuovo pop up di avviso nel caso in cui venga inserito un tipo fattura senza split payment (quindi senza Causale contabile associata che abbia Tipo movimento ‘29’) e un cliente che invece gestisce lo split payment (#TT01237/24)
> - MS - Aggiunto un messaggio di errore nell'MRP nel caso in cui l'articolo fosse di produzione ma non avesse la distinta base (#TT01414/24)
> - WM - Tradotto titolo della stampa Tracciabilità Lotto
> - CO - Corretto bug che non eseguiva correttamente il refresh della form selezionando un nodo del modello di riclassificazione per inserire i sottoconti collegati. Migliorato messaggio utente di avviso per tipi conto (#TT01367/24)
> - FI - Associazione file xml a percipienti: revisione proposta dei soli file nello stato ‘non assegnato’  (#TT01317/24)
> - PR - Corretto bug che in fase di creazione RiBa da fatture nel caso di fattura e nota di accredito da accorpare sommava invece di sottrarre la NC (#TT00897/24)
> -  Corretta l'etichetta bianca per le schede e i widget quando il tema è Office2019Colorful (#TT00980/24)
> - SCM - Al momento della Creazione fattura d’acquisto da file XML il prezzo viene importato in fattura con il flag Prezzo Manuale attivo e senza riprendere la scontistica interna (#TT01227/24)
> - PM - SAL Risolta anomalia in elaborazione massiva (#TT01439/24)
> - WM - Corretto bug in analisi disponibilità che non mostrava correttamente i valori nei campi: Ordine cliente collegato e quantità ordine cliente (#TT01062/24)
> - PM - SAL di progetto, aggiunto codice PRCC008 Costi Extra da Spese in Fatture d'Acquisto che considera tutte le fatture di acquisto, contabilizzate e non. Corretta descrizione codice PRCC006 in Costi Extra da Spese in Fatture d'Acquisto non contabilizzate (#TT01385/24)
> - PM - SAL progetto inserito nuovo codice PRCC007 - Costi da Fatture Acquisto (#TT01279/24)
> - PM - SAL di progetto nelle righe di dettaglio aggiunto articolo e descrizione dalla riga del documento (#TT01278/24)
> - FI - revisione attivazione pulsanti di gestione all’interno dell’intrastat (#TT01232/24)

### Patch 704.1-0025 - 04/04/2024

> - QY - Corretto bug che non visualizzava i Workflow nella form di Batch Records (#TT01165/24)
> - SCM - Nella stampa Scadenziario ordini fornitori, le Date sono state cambiate in formato europeo, ed i Prezzi a due decimali (#TT01051/24)
> - MS - Corretto bug nella pianificazione generale nel caso venissero rischedulate commesse già in stato lanciato/esecutivo (#TT00158/24)
> - Risolto Bug nel Codice delle importazioni Excel quando i usano caratteri speciali.
> - PR - risolto bug nella form gestione liquidità che non aggiornava correttamente il campo Progressivo al variare dei flag escludi e nascondi (#TT00435/24)
> - revisione fast start CH (#TT00489/24)
> - PM - correzioni inserimento appuntamenti nel planner relativi ad interventi pianificati e richieste intervento. Migliorata gestione spostamento /cambiamento data/ora/risorsa (#TT00144/24)
> - SCM - Nella griglia ad albero della maschera di Evasione Ordini aperta da DDT, la Proprietà ‘Numero riga’ può essere trascinata da Object Navigator e salvata con Profilo (#TT01044/24)
> - SD - L'inserimento di un articolo all'interno di una Fattura di Vendita mediante l'utilizzo dell'Help articoli ora riporta correttamente la classe (#TT01213/24)
> - PR - corretto bug nel calcolo scadenze del cashflow sugli ordini conto lavoro (#TT01203/24)
> - PM - Elaborazione SAL di più progetti in contemporanea, risolte casistiche di calcoli non corretti (#TT01325/24)
> - Rilascio stampa LIPE anno 2024
> - FI - corretto bug nella stampa di verifica della dichiarazione di intento quando nella fattura c’erano delle spese finali agganciate alla dichiarazione dii in tento il loro valore non veniva correttamente riportato sulla colonna registrato e rimaneva sulla colonna fatturato (#TT01311/24)
> - SD - Le spese di Incasso sono assoggettate automaticamente all’iva principale del documento (#TT00511/24)
> - PM - Elaborazione SAL di più progetti in contemporanea, risolte casistiche di calcoli non corretti (#TT01325/24)

### Patch 704.1-0024 - 28/03/2024

> - QY - Corretto bug che non visualizzava i Workflow nella form di Batch Records (#TT01165/24)
> - SCM - Nella stampa Scadenziario ordini fornitori, le Date sono state cambiate in formato europeo, ed i Prezzi a due decimali (#TT01051/24)
> - MS - Corretto bug nella pianificazione generale nel caso venissero rischedulate commesse già in stato lanciato/esecutivo (#TT00158/24)
> - Risolto Bug nel Codice delle importazioni Excel quando i usano caratteri speciali.
> - PR - risolto bug nella form gestione liquidità che non aggiornava correttamente il campo Progressivo al variare dei flag escludi e nascondi (#TT00435/24)
> - Risolto il problema dell'esecuzione dell'attività con parametri mancanti in SqlQuery
> - revisione fast start CH (#TT00489/24)
> - PM - correzioni inserimento appuntamenti nel planner relativi ad interventi pianificati e richieste intervento. Migliorata gestione spostamento /cambiamento data/ora/risorsa (#TT00144/24)
> - SCM - Nella griglia ad albero della maschera di Evasione Ordini aperta da DDT, la Proprietà ‘Numero riga’ può essere trascinata da Object Navigator e salvata con Profilo (#TT01044/24)

### Patch 704.1-0023 - 21/03/2024

> - MS - Corretti errori nella procedura di Costificazione delle Commesse di produzione e nella stampa Costificazione Commessa (#TT00497/24)
> - MS - Corretto bug che causava la perdita del riferimento alla riga di progetto a seguito di un ripristino dell’ordine di produzione (#TT01014/24)
> - MES - Corretto bug nelle Segnalazioni di Produzione che non riconosceva l’ordine temporale corretto delle segnalazioni, quando erano inserite allo stesso orario (#TT00985/24)
> - SD - Contabilizzazione automatica fatture di vendita: rivista la procedura di contabilizzazione automatica note di credito con tipo movimento non iva (#TT00666/24)
> - MS - Corretto bug in pianificazione generale nel caso in cui nei parametri fosse impostato il rilascio automatico degli ordini pianificati (#TT01148/24)
> - ARM - Viene chiesto all'utente quale Business Object estendere se più oggetti sono collegati alla stessa tabella.
> - MES - Corretto bug che causava un blocco temporaneo dell’applicativo in caso di registrazioni di Dichiarazioni di Produzione con numerose segnalazioni per fase (#TT00946/24)
> - MES - Corretto bug nelle Dichiarazioni di Produzione che non aggiornava il tempo macchina e il tempo uomo quando si eseguiva la procedura di Ricalcolo tempi (#TT01017/24)
> - FI - IVA a CREDITO sul file per la LIPE tiene conto anche dell’IVA indetraibile da pro-rata (#TT01596/23)
> - MES - Nella lista prelievo materiali, nella tabella dei materiali è stata aggiunta la funzione della formattazione condizionale (#TT01159/24)
> - CO -  nella stampa del consolidato di Progetto, revisione filtro per tipo progetto (#TT01172/24)
> - SCM - Corretto bug nella procedura di Creazione Automatica Ordini Fornitore da Ordine Cliente che non calcolava correttamente le quantità nella procedura di Evasione Ordine in DDT quando venivano modificate le quantità dell’ordine fornitore nel prototipo (#TT01199/24)

### Patch 704.1-0022 - 15/03/2024

> - SH - WebApi - Risolto il problema con riferimento contatto al importazione conto quando il tipo di operazione non è specificato
> - SD - implementazione web api per l'importazione delle fatture di vendita (#TT002622/23)
> - Valorizzazione riferimenti numero e data ordini, bolle e documenti conto lavoro (#TT001036/24)
> - SH - Corretto l'errore all'apertura del contatto dal menu Freelance (#TT01072/24)
> - MS - Corretto bug nel calcolo del costo totale lavorazioni nella costificazione della commessa (#TT02545/23)
> - Risolto il problema nel filtrare il valore della combo all'interno dell'importazione di Excel con un valore fisso.
> - ARM - Gestita la rinominazione automatica delle tabelle di estensione.

### Patch 704.1-0021 - 08/03/2024

> - SD - A seguito di una modifica del Fatturato Vendite all’interno di un DDT di Vendita, non vengono più aggiornati Data e Utente dell’ultima Modifica nella testata dell’Ordine cliente collegato (#TT00308/24)
> - FI - Intrastat export sezione doganale and negative value in riepilogo if inserted in quinquies section (#TT00580/24)
> - SCM - Corretto errore nella procedura di Creazione Automatica Ordini fornitore da Ordine Cliente che non riportava più la quantità dell’ordine nel Prototipo, a seguito di una modifica fornitore (#TT00777/24)
> - PR - Profilo in esposizione clienti (#TT00853/24)
> - Risolto il problema dell'importazione di riferimenti con valore Null e della ricerca multipla su Intercompany
> - CO - calcolo ammortamenti del controlling, revisione elaborazioni dati iniziali (#TT00477/24)

### Patch 704.1-0020 - 05/03/2024

> - SD - Correzione dell’errore che richiedeva uno sconto a scaglione nel caso di inserimento del Mask in un nuovo Arrotondamento (#TT00756/24)
> - SD - A seguito della Conversione di un’Offerta in Ordine Cliente viene riportato anche il valore della quantità alternativa, se presente nell’Offerta (#TT00779/24)
> - WMS - Nella form giacenza articolo del WMS è stata aggiunta una nuova colonna per la visualizzazione delle giacenze.
Le colonne facenti riferimento alla giacenza sono tre: Giacenza (Gest.), Giacenza e Giacenza(FC) (FC = Fattore di conversione).
Nel caso di utilizzo della *UM Def. WMS* (presente nel tab Unità di misura alternative dell'anagrafica articolo), la prima risulta valorizzata con l'unità di misura principale dell'articolo, la seconda risulta popolata con la giacenza espressa nell'unità di misura alternativa dell'articolo e data dalla somma dei movimenti, mentre la terza è data dalla giacenza espressa nell'unità di misura alternativa ma calcolata con il fattore di conversione.
Nel caso in cui, il flag *UM Def. WMS* non sia abilitato, le colonne *Giacenza* e *Giacenza(FC)* non verranno valorizzate (#TT00446/24)
> - CRM -  E’ possibile cancellare i Riferimenti dei Contatti CRM se non hanno collegamenti (#TT00748/24)
> - SD - Nelle Offerte di Vendita il prezzo dell’articolo non viene più azzerato a seguito di una modifica della quantità (#TT00861/24)
> - FI - map new field CustomSection on FSIntrastatDetail (#TT00729/24)
> - SD - aggiunto script inizializzazione elenco valori Tipo origine costo per i materiali nelle offerte, utilizzato per i db aggiornati da F2021 a F2023 (#TT00593/24)
> - SH - revisione fast start per localizzazione CH
> - SD - Ottimizzata la possibilità di inserire nuovi articoli in listini corposi (#TT02980/23)
> - SD - Risolto errore che impediva l’inserimento di nuove righe nella tabella Fatturato vendite (#TT00329/24)
> - SCM - Corretto errore nella compilazione degli sconti nei Listini di Conto Lavoro (#TT00227/24)

### Patch 704.1-0019 - 29/02/2024

> - FI - In caso di creazione Fattura di vendita da Partita di anticipo, le scadenze vengono create con il flag Manuale (#TT00672/24)
> - MES - Corretto bug nelle dichiarazioni di produzione (#TT00702/24)
> - SCM - Corretto errore nell’evasione di una bolla in fattura con prezzo ivato (#TT00220/24)
> - ARM - Aggiunto un messaggio per abilitare la registrazione se l'avvio del pool personalizzato fallisce dopo la pubblicazione (#TT00676/24)
> - SD - Per agenti con pagamento avvenuto o scadenza maturata, la stampa provvigioni maturate e la creazione automatica liquidazione provvigioni ora considerano maturate le provvigioni inserite in una fattura a zero se all'interno del documento c'è uno storno acconto riferito ad un acconto con partita incassata (#TT00620/24)
> - SD - Risolto azzeramento prezzo unitario su livello padre in caso di inserimento nuovi nodi figli (#TT00735/24)
> - WMS - Aggiunto il flag "Mantieni ubicazione" nella tabella dei "Tipi liste inventariali". Questo fa in modo che in fase di inventario con il WMS l'ubicazione inserita non verrà variata fino a quando non sarà  letta un'altra ubicazione (#TT00726/24)
> - WMS - Nella form Lista trasferimento UDC del WMS, il tab  Dettaglio UDC verrà abilitato solamente dopo aver inserito tutti i dati di testata (#TT03336/23)
> - FI/CO/SH - nelle aliquote iva, aggiunto nuovo flag per identificare le aliquote di vendita estere che caricano il plafond per il periodo successivo (#TT00343/24)
> - MS - Corretto bug nei diagrammi delle commesse di produzione (#TT00790/24)
> - WMS - Corretto bug nelle form UDC che non visualizzava correttamente lo stato delle liste di prelievo e trasferimento nel WMS (#TT00792/24)
> - SD - A seguito della Conversione di un’Offerta in Ordine Cliente vengono riportati anche i dati di Peso Netto e Peso Lordo, se presenti nell’Offerta (#TT00746/24)

### Patch 704.1-0018 - 22/02/2024

> - WMS - Corretto bug nella for di filtro degli inventari (#TT00605/24)
> - MES - Migliorata la funzionalità di “Generazione lotti” presente nel filtro degli ordini di produzione. Ora la quantità del lotto di origine non può essere variata nel caso in cui siano già state create delle Liste di prelievo, delle Dichiarazioni di produzione, oppure nel caso in cui alcuni materiali siano già stati consumati. In questi casi è comunque possibile creare nuovi lotti di produzione, ma senza poter variare la quantità del lotto di origine (#TT00353/24)        
> - PM - Procedura aggiornamento prezzi progetto e documenti collegati, corretta conversione tra diverse unità di misura (#TT03661/23)
> - Forzata la ricompilazione dello script se il progetto è nullo ma è già stato rilasciato
> - SH - sviluppato webapi controller GeneralReadWritePublicController per l’import delle anagrafiche clienti/fornitori (# TT00619/24)
> - WM - Implementata la procedura di Analisi disponibilità nella gestione degli ordini di conto lavoro (#TT00350/24)
> - WM - Corretto bug nella procedura di Analisi disponibilità nella gestione degli ordini di conto lavoro (#TT00190/24)
> - SH - Correzione dell’errore che non manteneva le modifiche nel Profilo se predefinito, nella modulo Attività di Fluentis (#TT00592/24)
> - SCS - L’ordine di conto lavoro generato da un ordine di produzione con fase esterna ora rileva il prezzo dal Listino di Conto lavoro anche quando nel listino è presente solo l’articolo, senza la fase (#TT00439/24)
> - CO - Depreciations for controlling, table CO_DepreciationYearStartings replicating rows + wrong values (#TT00477/24)
> - WM - Corretto errore nella conversione della quantità alternativa proveniente da un Rientro di Conto lavoro, nella form di Dettaglio Movimenti (#TT00517/24)
> - WM - Corretto bug nel calcolo delle differenze inventariali, nel caso in cui nella lista inventariale sia valorizzata l'unità di misura alternativa (#TT00366/24)
> - WMS - Corretto bug nella form inventario del WMS, dove nel caso in cui le liste fossero gestite con UM Alternative, il dato dell'UM Gestionale che viene calcolato mediante fattore di conversione non rispettava i decimali previsti dall'unità di misura (#TT00675/24)
> - WM - Nelle procedure di Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo, l’Object Navigator presenta l’oggetto FSItemStockSummary (#TT00650/24)
> - MES - Corretto bug nella registrazione di delle dichiarazioni di produzione con articoli alternativi presenti (#TT00649/24)
> - WM - Corretto errore nella procedura di aggiornamento Costo Medio e Costo Ultimo (#TT00585/24)

### Patch 704.1-0017 - 16/02/2024

> - ARM - revisione salvataggio nuovi elementi delle BPMN (#TT00486/24)
> - PM - Creata WEBAPI per importazione attività di progetto (#TT00400/24)
> - SD - Conversione offerta in ordine, nascosta opzione "riporta materiali/risorse da righe offerta come righe ordine" se nel tipo offerta non è abilitata l'opzione "gerarchica" (#TT00276/24)
> - WM - Corretta visualizzazione della stampa Inventario a quantità valorizzato (#TT00455/24)
> - Risolto il bug delle proprietà ricorsive sulle variabili contestuali di Blockly
> - FI - rilascio controller webapi AccountingReadWritePublicController
> - BI - Correzione del passaggio al widget successivo nei moduli di filtro quando si preme invio da kb (#TT00569/24)
> - WEBAPI: risolta l’anomalia legata al settaggio della ResidualQuantity di bolle di acquisto e bolle vendita per righe con quantità 1 (#TT00480/24)
> - MES - Corretto bug nella visualizzazione di lotti e serial number nelle Dichiarazioni di Produzione (#TT00487/24)
> - WM - Corretta visualizzazione dei Movimenti di magazzino per gli articoli con Unità di misura alternativa (#TT00531/24)
> - WM - Corretto bug nella procedura Sottoscorta delle stampe gestionali che non calcolava correttamente la quantità di riordino (#TT00481/24)
> - WEBAPI: risolta l’anomalia legata al settaggio della ResidualQuantity di bolle di acquisto e bolle vendita per righe con quantità 1 (##TT00479/24)
> - SCS - Se nei Parametri di Conto Lavoro è impostato il flag ‘Considera magazzini in base al tipo DDT rientro’, nell’Evasione di un Ordine il magazzino viene cercato con le seguenti priorità: prima nel Tipo DDT; dopo nell’Ordine; dopo nei Parametri di Conto lavoro. Se il Parametro non è attivo, le priorità sono le seguenti: prima nell’Ordine, poi nei Parametri (#TT00558/24)
> - SCM - Corretto bug nella procedura di creazione di un Listino Fornitore in Fluentis browser (#TT03643/23)
> - WMS - Corretto bug in gestione spunta nel caso in cui si cancellasse una spunta legata ad un movimento con contro partita (#TT00532/24)
> - Fi - revisione stampa liquidazione iva periodica, visualizzazione del subreport del plafond solo se questo ha flag default
> - PM: Progetto con struttura a wbs, reso possibile inserimento figli di tipo note nei livelli padre codificati/non codificati (#TT00243/24)
> - FI - Contabilizzazione fatture: revisione parte analitica contabilizzazione fatture con date competenza diverse (#TT00240/24)
> - SCS - Se nei Parametri di Conto Lavoro è impostato il flag ‘Considera magazzini in base al tipo DDT rientro’, nell’Evasione di un Ordine il magazzino viene cercato con le seguenti priorità: prima nel Tipo DDT/Rientro; dopo nell’Ordine; dopo nei Parametri di Conto lavoro. Se il Parametro non è attivo, le priorità sono le seguenti: prima nell’Ordine, poi nei Parametri (#TT03583/23)
> - SD - Corretto elenco valori di default del campo tipo nodo per l'offerta multilivello in caso di aggiornamento di Fluentis dalla versione 2021 alla versione 2023 (#TT00590/24)
> - PM - gestito campo imponibile importo nella struttura ad albero dei progetti wbs, anche nel caso di articoli codificati con figli note (#TT00335/24)
> - SH - Alla creazione di un nuovo Contatto, la tab Parametri di raggruppamento viene popolata con i valori di default (#TT00601/24)
> - SD - Ordini cliente con generazione automatica progetto, gestito allineamento numero ordine - numero progetto in caso di progetto senza numeratore (#TT00274/24)
> - MPS - Inserite alcune migliorie e correzioni nella procedura MRP (#TT02029/23)
> - MES - Corretto bug nelle dichiarazioni di produzione, che ricalcolava i materiali impiegato nel caso in cui fosse inserito un articolo nel tab Articoli alternativi (#TT00571/24)
> - MES - Corretto bug nelle dichiarazioni di produzione che si verificava al momento della registrazione (#TT00606/24)

### Patch 704.1-0016 - 09/02/2024

> - SCM - richieste di acquisto - risolvere il problema di salvataggio righe su analitica senza centro di costo (#TT00095/24)
> - Traduzione dello stato SDI secondo il dizionario e non secondo il codice (#TT03342/23)
> - SH - Nelle attività-task inserita indicazione della società e divisione in cui sono state inserite, al fine di garantire la corretta intestazione dei documenti aperti direttamente dalle attività (#TT00280/24)
> - SD - Offerte multilivello, bloccata possibilità di inserire livelli figli diversi dalle note, per livelli padre con tipo riga 3 - spese (#TT00327/24)
> - SD - Offerte multilivello, corretta visualizzazione campo Importo Imponibile per i casi in cui è presente un livello padre è codificato con figli di tipo note (#TT00328/24)
> - ARM - correzione della migrazione: viene copiato il campo GEN_RightConditionalRules dal DB di origine
> - SD - Risolvere il problema del esportazione colonna "Stato SDI" (#TT00321/24)
> - SD - Offerte multilivello, gestita possibilità di escludere selettivamente alcuni materiali e risorse dall'importazione nell'ordine; impostato ordinamento righe ordine come nell'offerta; materiali valorizzati in ordine se codice padre a cui sono legati è 0, in caso contrario i materiali sono a 0 ed il padre è valorizzato; aggiunta possibilità di assegnare percentuale di ricarico massivamente su tutte le righe (#TT03372/23)
> - SD - Offerte multilivello, in fase di conversione in progetto ed ordine, per ogni riga di offerta ed ordine gestito riferimento alla relativa wbs di progetto (#TT03542/23)
> - SD - Offerte multilivello, introdotta possibilità di inserire nei livelli con tipo riga codificato/non codificato, livelli figli di tipo note (#TT00245/24)
> - SH - Documentale - Implementata possibilità di cancellazione di un documento memorizzato su un oggetto (#TT03426/23)
> - SCM - In Fluentis browser, all’interno del Ricevimento merci, è stata corretta la visualizzazione delle righe articolo a seguito di evasione da ordini (#TT00044/24)
> - WM - Corretto bug nella procedura Sottoscorta delle stampe gestionali che generava erroneamente la commessa anche per gli articoli con tipo approvvigionamento “Acquisto” (#TT00438/24)
> - MPS - Nella form di Sequenza fasi top down grid, inserendo la sequenza e confermando la riga, ora il focus rimane sulla riga appena modificata anche dopo l’aggiornamento della form (#TT00351/24)
> - WM - Corretto bug in valorizazzione magazzino (#TT02573/23)
> - SH - Correzione dell’errore che non popolava la combo box degli Extra Data aggiunti con Form Navigator (#TT00415/24)
> - SH - Eseguendo l’Apri form dalla combo box di un Extra Data aggiunto tramite Form Navigator, la tabella che si apre risulta popolata (#TT00412/24)
> - SCS - Correzione bug che bloccava l’inserimento righe di Ordini di conto lavoro (#TT00284/24)
> - Revisione gestione creazione fatture acquisto da file Sdi per importi con segno negativo
> - PM - Codici dell'elenco Tipo origine costo ricavo sostituiti con i nuovi codici nei documenti e nelle tabelle di configurazione, ed in seguito eliminati (#TT03470/23)
> - Traduzione dello stato SDI secondo il dizionario e non secondo il codice (#TT03342/23)
> - FI - cambiamento calcolo per non dedutibile - versione RO
> - SD - Parametri offerta di vendita, aggiunta possibilità di gestire nel titolo progetto anche i campi nostro riferimento / vostro riferimento presenti nell'offerta (#TT00247/24) 
> - PM: Progetto con struttura a wbs, reso possibile inserimento figli di tipo note nei livelli padre codificati/non codificati (#TT00243/24)
> - SD - Aggiornamento della stampa standard Fattura di vendita (#TT00409/24)
> - SD - Creazione file xml : revisione del campo regime fiscale in autofattura con cedente codificato come agente (#TT00469/24)
> - SD - Aggiunta la possibilità di evadere solo righe descrittive all’interno dei documenti di vendita (#TT00429/24)
> - SD - Calcolo Provvigioni: Aggiornato utilizzo parametro di attribuzione provvigioni per le righe di Acconto e Storno Acconto (#Tipo riga 6 e 7) (#TT001258/21)
> - SH - Attivata la fattura elettronica token versione RO (#TT00426/24)
> - SD - Offerte multilivello sbloccato inserimento risorse anche per righe codificate intermedie; per righe padre codificate con figli note, se le risorse e materiali sono inseriti a livello dei figli ed è previsto l'aggiornamento prezzi da risorse/materiali, il padre viene aggiornato con la somma dei valori presenti nei figli (#TT00358/24)
> - FI - contabilità acquisti: chiuss l'IVA non detraibile con IVA differita (#TT00473/24)
> - FI - Revisione procedura di contabilizzazione automatica note di credito con prezzo ivato (#TT00119/24)
> - SD - Offerte multilivello nel caso di descrizione articolo o nota molto lunga, impostata lunghezza massima di estensione del campo con la barra di scorrimento. Per gli altri documenti ordini cliente, ddt di vendita e ddt di conto lavoro, fattura di vendita, estensione massima gestita solo per il campo note (#TT00485/24)
> - QY - Risolto bug nel Controllo articoli (#TT00135/24)
> - MPS - Risolto bug nella procedura MRP (#TT00456/24)
> - SD - Nelle fatture di vendita, abilitata la modifica dei dati di analitica quando il documento è stato gestito per lo Sdi e non è contabilizzato (#TT00182/24)
> - SD - Durante la conversione da Offerta cliente in Ordine cliente vengono ora proposti magazzino e causale impostati nei Tipi ordine cliente (#TT00406/24)
> - SCM - RDA: il prezzo proposto nelle righe RDA è il netto fornitore ottenuto applicando tutti gli sconti applicabili all'articolo (#TT00127/24)

### Patch 704.1-0015 - 31/01/2024

> - FI - Creato nuovo campo "Codice altre somme non soggette a ritenuta" in Gestione tipo ritenuta (#TT01453/23)
> - Aggiunta una funzione al mittente di script WebApi per notificare informazioni sul registro BizLink
> - FI - CU2024 - Rilascio nuovo report Certificazione Unica 2024
> - SD - Correzione dell’errore che si generava nella Creazione Fattura dalla Ricerca Ordini clienti, nel caso di Ordine con una riga articolo codificato, una riga articolo non codificato e una riga note (#TT00291/24)
> - Solved bug for file Intrastat (#TT00299/24)
> - CRM - Quando un’Attività viene Completata, si aggiorna la Data di chiusura dell’Attività all’interno del Workflows Log che l’ha creata; se l’Attività viene Riaperta, la Data di chiusura nel Workflows Log viene cancellata (#TT00097/24)
> - SD - Nelle offerte gerarchiche, tab Materiali, aumentati decimali gestiti nel campo Costo Unitario (#TT00254/24)
> - MPS - Corretto bug in costificazione dove non erano visualizzati i costi preventivi dei materiali e il valore totale del costo manodopera (#TT02967/23)
> - SH - Prototipi - E' stata implementata la codifica degli articoli e dei componenti non codificati (#TT03604/23)
> - SD - Offerte multilivello, procedura di duplica considera anche i nuovi flag di riga Escludi Risorse in Ordine cliente ed Escludi materiali in ordine cliente (#TT00357/24)
> - WMS - Corretto bug che non riportava correttamente i dati relativi all’operatore nelle liste inventariali.  Corretto bug nelle liste di trasferimento all’inserimento dell’ubicazione (#TT00153/24)
> - WM - Sistemazione Generazione DDT da Picking con Cambio Errato (#TT00364/24)
> - CRM - Il Manager del task può modificare l’Operatore/Ruolo assegnato all’Attività creata (#TT00211/24)
> - CO - fix filtro per divisione - prendere la divisione da movconti e non da registrazione
> - WM - Aggiunto sul report del Giornale di magazzino il filtro per società e divisione (#TT00375/24)
> - FI - Gestione export cedolini ore dipendenti per Sistemi (#TT00212/24)
> - SD - Nell’Help articoli, tab Documenti, vengono popolati i campi Classe, Codice e Descrizione articolo (#TT00381/24)
> - SD - Offerte multilivello resi visibili data consegna e periodo prevista consegna nella riga della struttura wbs. Rimosso blocco di quantità = 1 per le righe wbs con materiali e risorse. Se prezzo calcolato da materiali e risorse, il prezzo unitario è calcolato dalla somma del ricavo materiali e o risorse, diviso per la quantità indicata in riga wbs (#TT00123/24)
> - PM - Procedura di creazione progetto da template, se presenti indirizzi di destinatario e destinazione predefiniti per il cliente, prevalgono sugli indirizzi indicati nel template (#TT00122/24)
> - SCM: A fronte di una modifica del conto all’interno di un ordine fornitore non viene più mantenuto l’imponibile valorizzato (#TT00035/24)
> - SCM - Risoluzione dell’errore uscente al salvataggio di un documento, dopo aver inserito un articolo con lotto partendo dalla selezione del Tipo riga (#TT03505/23)
> - SCM - Risoluzione dell’errore uscente al salvataggio di un documento, dopo aver inserito un articolo con lotto partendo dalla selezione del Tipo riga (#TT03505/23)
> - PM - il campo sconto degli interventi accetta valori decimali in testata e in riga servizio (#TT03553/23)

### Patch 704.1-0014 - 24/01/2024

> - WM - Revisione Navigatore articoli con aggiunta di nuove tab (#TT00130/24)
> - MES - Corretto bug che non manteneva il legame con gli ordini figli al momento del rilascio degli ordini pianificati in ordini di produzione (#TT00161/24)
> - SD - Revisione gestione blocco fido quando il documento in modifica è quello che causa lo sforamento ed è già autorizzato (#TT00206/24)
> - SCM - Nella procedura di Creazione Automatica Ordini, tab Operazioni, vengono raggruppate in un'unica operazione tutte le righe dello stesso Ordine fornitore creato, anche se le evasioni sono state multiple (#TT01891/23)
> - SCM - Aprendo la procedura di Creazione Automatica Ordini e spostandosi nel tab Ordini cliente del Filtro, non si viene più reindirizzati automaticamente al tab Scelta fornitore (#TT03511/23)
> - SD - Nelle offerte gerarchiche abilitata possibilità di gestire per i livelli padre di tipo codificato o non codificato, dei livelli figli solo di tipo riga 4-note (#TT00245/24)
> - SD - Nelle offerte gerarchiche, tab Materiali, aumentati decimali gestiti nel campo Costo Unitario (#TT00254/24)
> - SD - Nelle offerte gerarchiche, resi visibili nella struttura ad albero e nella tab Attività la data ed il periodo di prevista consegna. Rimosso il blocco della quantità 1 nel caso di prezzo aggiornato dai Materiali e/o Risorse (#TT00123/24)
> - Aggiunta la possibilità di aggiungere un prefisso personalizzato a FlowOperation per utilizzare una personalizzazione di flowOperation

### Patch 704.1-0013 - 19/01/2024

> - Risolto il problema con il servizio OData personalizzato per creare un nuovo script o aggiornarlo (#TT00067/24)
> - MS - Risolto bug in Schedulazione Generale e MRP legato all’analisi disponibilità (#TT03566/23, #TT00033/24)
> - WMS - Nella form lista di trasferimento UDC il pulsante Salva viene abilitato solo dopo aver inserito tutti i dati necessari (#TT03336/23)
> - SD: Calcolo costo materiali offerta per il tipo origine costo "listino fornitore", nel caso di variazione tipo riga, quantità e fornitore (#TT03372/23)
> - MPS - Corretto bug nel calcolo dell’analisi disponibilità per articoli con migliaia di componenti (#TT00173/24)
> - PM - i progetti template sono visualizzati nella form di ricerca (#TT00007/24)
> - MES - Risolta exception in registrazione dichiarazione con lotti quando siamo su una fase dopo la prima e Fluentis dovrebbe scaricare il lotto dalla fase precedente (#TT00185/24)
> - WM - Corretto bug che riportava in maniera errata la larghezza di una UDC nel form Confezionamento dell’anagrafica articolo (#TT00177/24)
> - MS - Parametri MRP Articolo - implementazione Escludi da pianificazione (#TT01778/23)
> - CRM - Sincronizzazione del calendario tra Fluentis e Outlook (#TT03320/23)
> - MPS - Corretto bug nella gestione degli stati di testata e di riga delle commesse multiprodotto (#TT03550/23) 
> - Consentire di notificare gli errori del modulo di script con la fattura di Elettronica
> - MES - Corretto bug nelle Dichiarazioni di produzione che cambiava il magazzino e la causale di consumo di un articolo nel momento in cui si inseriva una quantità di scarto (#TT00025/24)
> - SD- La creazione del compenso da liquidazione agenti ora riporta il tipo/soluzione di pagamento della liquidazione e non anche quello dell’anagrafica agente (#TT00192/24)
> - CRM - Revisione dei totali delle righe nodo dei Marketing Budget
> - SH - Fix loading information for tasks after update (#TT00150/24)
> - MPS - Material Requirements and Parameters - modifica layout - I parametri di Rilascio richieste di acquisto autorizzate e Rilascio ordini di produzione esecutivi sono stati spostati nei Parametri del Rilascio Ordini pianificati (#TT03085/23)
> - Aggiunto il lettore di proprietà DataProvider per lo script
> - FI - corretto bug nella form differenza tra saldo contabile e partite quando la somma delle partite da confrontare era data da partite tutte dello stesso valore (#TT03315/23)
> - SCM - Corretto bug nei DDT di acquisto che, nel caso di modifica del prezzo in fattura rimanevano valorizzati anche a seguito di cancellazione della fattura (#TT00147/24)
> - MPS - Corretto bug nel rilascio degli ordini pianificati di conto lavoro (#TT00170/24)
> - FI - Gestione export cedolini ore dipendenti per Sistemi (#TT00212/24)
> - Aggiunto responsabile paghe per Sistemi (#TT00151/24)


### Patch 704.1-0012 - 16/01/2024

> - MS - Risoluzione dell’errore che chiudeva Fluentis in caso di selezione di più Tipi ordine nei filtri della Generazione Commesse di Produzione per gli Ordini cliente (#TT00088/24)
> - SH - l’esecuzione dei workflow dai tab nelle form di ricerca ora crea attachment senza replicarli (#TT00103/24)
> - WMS - Migliorato il contrasto tra le righe inserite e quella selezionata (#TT00102/24)
> - WMS - Corretto bug sul framework che generava il blocco dell’applicazione (#TT00117/24)
> - WMS - Corretto bug sulla Conferma Liste Trasferimento del WMS a causa del quale il movimento di contropartita non riporta l'ora esatta (#TT00131/24)
> - MS - Corretto bug che causava un errore nella schedulazione di una commessa in presenza di una personalizzazione sugli articoli (#TT00085/24)
> - SCM - Corretto bug nella creazione di una Richiesta di Acquisto che non rilevava il prezzo di un articolo con variante dal listino fornitore (#TT03711/23)


### Patch 704.1-0011 - 11/01/2024

> - Revisione stampa BankCreditSituation per renaming oggetto
> - MS - Sequenza fasi - Risolta anomalia all’esecuzione della funzionalità di ‘Cambio data’ (#TT03670/23)
> - SH - Prototipi - E' stata implementata la gestione degli articoli e dei componenti non codificati (#TT02948/23)
> - WMS - Corretto bug in Conferma trasferimento UDC sull’aggiornamento dei dati presenti nella tabella dettaglio UDC (#TT03340/23)
> - SD - Creazione del tab Parametri di raggruppamento per Cliente/Fornitore in Anagrafica contatto. Questi parametri hanno priorità rispetto ai Parametri di raggruppamento generali (#TT03564/23)
> - WM - Risolto bug nella creazione dei Piani di carico che non riportava in maniera corretta la quantità modificata manualmente quando si utilizzava il pulsante Inserisci odine (#TT03642/23)
> - CRM - La colonna Importo totale nella Gestione Previsioni di Vendita riporta il prodotto di Quantità totale e Prezzo medio unitario; inoltre ogni nodo padre di riga riporta la somma degli importi delle righe figlie. Nella Stampa Chiusura previsioni di vendita, è stato inserito il filtro Anno per la scelta delle Previsioni di vendita. Con l’inserimento del campo Previsione di vendita, in automatico viene popolato il Tipo periodo (con il Tipo periodo uguale a quello presente nel Tipo previsione di vendita) Infine, il Dettaglio tipo periodo può essere scelto in base al Tipo periodo inserito (#TT0318/23)
> - PR - revisione inserimento righe nella form di Gestione della liquidità (#TT03677/23)
> - FI - nella ripresa ammortamento cespiti del controlling, revisione utilizzo flag di dimezzamento percentuale primo anno (#TT03681/23)
> - FI - modifiche alla gestione campi a struttura variabile per la CU (#TT00019/24)
> - SH, PR - revisione gestione edit di calcolo castelletti in anagrafica banche e in distinte di presentazione (#TT03680/23)
> - MES - Risolti bug nelle dichiarazioni di produzione nel caso in cui vengano gestite le quantità scartate con articoli a lotti e anche nel caso di una registrazione con quantità prodotta uguale a zero e quantità scartata maggiore di zero (#TT03708/23 - #TT00005/24)
> - SD - Corretto il funzionamento del filtro sugli Extra Data nei DDT di vendita (#TT00058/24)
> - SD - Nei documenti di vendita, in caso di valorizzazione centri su tutte le dimensioni, al salvataggio viene ora restituito un messaggio di cancellazione delle righe senza centro di costo invece di un blocco da gestire manualmente riga per riga (#TT00065/24)
> - SH - Creazione nuovo anno - quando il parametro fix è true - se esistono righe con anno di data di fine validità >= anno - non aggiornare a null (#TT00093/24)
> - MES - Corretto bug nelle dichiarazioni di produzione che non caricava correttamente le UDC create all’interno della dichiarazione (#TT03393/23)
> - WM - Corretto bug in Visualizzazione giacenze nella quale non veniva visualizzata correttamente la giacenza degli articoli contenenti nella descrizione il carattere ‘#’ (#TT00006/24)
> - WMS - Nel tab UDC della gestione spunta del WMS il pulsante Stampa UDC si abilita correttamente (#TT00091/24) 


### Patch 704.1-0010 - 22/12/2023

> - FI - Corretto bug in fase di contabilizzazione distinta Ri.ba (modalità iva per cassa) contenente effetti creati accorpando più di una partita, che generava scritture di giroconti iva con importi errati (#TT02548/23)
> - FI - revisione rollback contabilizzazione insoluti (#TT03579/23)
> - CRM - Risolto errore che aggiungeva colonne vuote al salvataggio di un Profilo nella Ricerca Opportunità (#TT03567/23)
> - SH - Prototipi - E' stata implementata la gestione degli articoli e dei componenti non codificati.(#TT02948/23)
> - PM: gestita propagazione extradata da articolo a righe di servizi nell'intervento (#TT03515/23)
> - WM- Allineamento tecnico in fase di selezione righe dalla griglia delle giacenze per creare una registrazione di magazzino (#TT02776/23)
> - WMS - Corretto bug in Sposta articolo del WMS che non inseriva ore, minuti e secondi, nel campo data creazione dei movimenti in contro partita (#TT02482/23)
> - MES - Risolto bug nelle segnalazioni di produzione che inseriva un valore diverso da zero nella quantità prodotta nel caso in cui si inserisse una sospensione (#TT03411/23)
> - MES - Corretto bug nelle dichiarazioni di produzione che agganciavano la causale di carico scarico errata prendendola dai semilavorati WIP anziché dal box dei semilavorati nelle parametri di produzione (#TT03508/23)
> - WMS - Nella form conferma trasferimento del WMS aggiunto il messaggio di "Operazione effettuata" anche nel caso in cui venga confermata direttamente dal filtro di ricerca (#TT03339/23)
> - PM - inseriti 2 nuovi campi nei progetti per tracciare se il progetto è stato generato da offerta (#TT03454/23)
> - WM - Nell'anagrafica lotti, nei tab carico e scarico implementata la possibilità di visualizzare i dettagli sulle quantità evase con l'aggiunta delle colonne "Numero riga", "Quantità" e "Unità di misura" (#TT03487/23)
> - SD - Introdotte nuove funzionalità per le offerte gerarchiche, quali copia/sposta livelli, crea RDA, sostituisci numero wbs, FTE per le risorse, aggiornamento prezzo da risorse/materiali (#TT03084/23)
> - SD - Introdotta gestione offerte con struttura gerarchica (#TT02881/23)
> - SD - Introdotta gestione creazione automatica progetti da offerta (#TT03040/23)
> - SD - Gestita descrizione estesa articolo per l’area vendite; aggiunta possibilità di escludere per riga materiali/risorse dagli ordini cliente; migliorato ordinamento righe ordine generato da offerta gerarchica; blocco conversione offerta in ordine se presenti prototipi non codificati; gestione prezzo materiali o riga offerta nell’ordine a seconda di come sono valorizzate le righe dell’offerta; gestita possibilità di propagazione percentuale ricarico su tutte le righe materiali con 1 solo passaggio (#TT03372/23)
> - SD - Migliorata gestione prototipi nelle offerte cliente (#TT03100/23)
> - FI - correzione dei valori errati nel centro di costo in contabilità in caso di percentuale non deducibile romena (#TT03651/23)
> - SCM - il prezzo articolo delle richieste di offerta non viene più definito in base alle richieste di acquisto precedenti (#TT03518/23)
> - SCM - quando il valore delle righe nel tab generatore RDO sono a 0 allora sono a 0 nella RDO creata dall'utilizzo della procedura (#TT03458/23)

### Patch 704.1-0009 - 14/12/2023

> - PM - aggiornamento data e risorsa assegnati alla wbs del progetto, aggiornano automaticamente i dati nell'intervento pianificato se presente ed i relativi calendari delle risorse (#TT03327/23) 
> - SCM - Importazione file xml: rivista formattazione della data nell’importazione del file xml (#TT03194/23)
> - FI - RO - agiungere nuovi conti in FastStart
> - WM - Crea la possibilità di arrivare a una lista di inventario di un secondo utente anche se l'inventario e aperto da un altro utente. E un inventario chiuso diventa non modificabile (#TT03443/23)
> - SCM - Nelle fatture di acquisto, la modifica delle date competenza in riga articolo viene ora propagata alle righe di analitica sottostanti (#TT03214/23)
> - FI - Contabilizzare le fatture di vendita - con sconto sui pagamenti - non significa prendere il valore dello sconto, ma chiudere tutte le scadenze (#TT03408/23)
> - Fluentis- Attività: Risolto abilitazione alla modifica di attività già inserite (#TT03391/23)
> - SDI - Attivazione pulsante di creazione fatture di acquisto per RO
> - MES - Risolto bug nelle segnalazioni di produzione che inseriva un valore diverso da zero nella quantità prodotta nel caso in cui si inserisse una sospensione (#TT03411/23)
> - MS - Schedulazione generale - Risolta l'anomalia di evasione commessa nel caso in cui non ci sia disponibilità degli articoli richiesti. Caso specifico di configurazione schedulazione con "Raggruppamento per articolo" e articolo padre "Fittizio" (#TT03424/23)
> - MS - Schedulazione generale - E' stata corretta la proposta, negli Ordini di conto lavoro, dei materiali di padri fittizi il cui consumo è previsto in specifiche fasi di lavoro purchè indicata la medesima fase e sottofase che dovrà essere presente sia nel padre non fittizio che nei figli fittizi ad ogni livello della distinta base (#TT03007/23)
> - SCM - Stampa richieste d’acquisto - Resa disponibile anche la stampa documento dal filtro di ricerca delle richieste d’acquisto e non solo dall’interno del documento
> - CO - revisione elaborazione periodi del controlling per mensilizzazione dati oltre l’esercizio corrente (#TT03186/23)
> - Risolto l'errore di reimpostare la cartella di lavoro quando si carica un file esterno su Blazor
> - MPS - Corretto bug nell'aggiornamento di stato delle righe delle commessa di produzione multiprodotto di acquisto e conto lavoro (#TT01533/23)
> - SCS - Risoluzione dell’errore che impediva l’inserimento delle UM alternative negli Articoli dei Rientri di conto lavoro che le prevedono (#TT03382/23)
> - PM - risolta casistica di cancellazione risorse assegnate ad una wbs nel caso di cambio articolo della wbs. Rif. ticket (#TT03421/23)
> - WM - Corretto bug in analisi disponibilità inerente alle righe relative alle commesse di produzione (#TT03224/23)
> - CO - creazione chiusure infrannuali, revisione gestione saldi dei centri di costo (#TT03530/23)