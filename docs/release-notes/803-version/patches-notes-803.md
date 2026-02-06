---
title: Patch notes Versione 803
sidebar_position: 1
---

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
> -	PM: duplica intervento da planner, corretto caso per cui settava le ore di inizio servizio nella data intervento generale, invece di mantenere l'ora 00.00 (#TT00499/26 )
> -	PM: generazione intervento da intervento pianificato - corretta casistica per cui solo in specifiche condizioni, le spese sostenute non riportavano la data corretta e le spese da fatturare non erano proposte correttamente (#TT00481/26)
> -	PM: WEB ripristinati tasti di espandi/comprimi nella visualizzazione progetto nel calendario di WBS assegnazione risorse (#TT00477/26)
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