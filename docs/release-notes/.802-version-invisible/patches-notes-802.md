---
title: Patch notes Versione 802
sidebar_position: 1
---

### Patch 802.0012 - 13/11/2025

> -	Add Implementation to create Payment Link with a external provider 
> -	Allineamento dei report del Consolidato di progetto per passaggio di un nuovo parametro con la lista degli Id selezionati nella form di lancio (#TT04894/25) 
> -	CO - consolidato di progetto, revisione filtro per progetto e modifica alla gestione del filtro per Codice del consolidato (abilitata la selezione multipla, passaggio al report di un nuovo parametro con la lista degli Id selezionati). ( TT04894/25) 
> -	CO - nella maschera della ”Associazione centri progetti”, per il tipo progetto è stato aggiunta la tipologia di ‘Centro del progetto/wbs’ che fa leggere il centro associato in testata/wbs del progetto stesso. ( TT03580/25) 
> -	CPQ - fix inserimento allowed values durante salvataggio (errore violazione PK) 
> -	Fi - crash at closing forms because combo ( TT04941/25) 
> -	FI - fix missing automat payment registration at invoice accounting. ( TT02936/25) 
> -	FI - Risolvere anomalia su contabilizzazione fattura di acquisto con valori negativi per l'importo in valuta conto iva ( TT04827/25) 
> -	MES - Corretto bug in MES che generava un consumo doppio dei materiali in Analisi disponibilità. (#TT04885/25) 
> -	PM - Risolto caso per cui la configurazione non corretta di conti analitici, mandavano in loop la fatturazione da progetto (#TT04788/25) 
> -	Risolto bug importazioni excel della colorazione del background  
> -	SD - Ordini Clienti Diagramma Evasione: Corretto diagramma nel caso ci siano delle note di accredito collegate alla fattura che è nata dal ddt che ha evaso un ordine cliente collegato ad una offerta (Rif.ticket 1207/25) 
> -	SD - Ottimizzazione dell'importazione WebApi - vendite(#TT04576/25) 
> -	SH - fix grid column visibility handling to/from profiles(TT03851/25) 
> -	SH - webapi di import FSLedgerAccount, valorizzazione campo di gestione fatture elettroniche (#TT04641/25) 
> -	WM - Analisi disponibilità risolto errore profilo contenente filtro tipo documento e calcoli per colonna (#TT03363/25) 
> -	WM - WebAPI di import degli articoli - In fase di import di un articolo, se vengono importate anche le dimensioni e i pesi, nel tab pesi e dimensioni verranno agganciate di default le UM di riferimento rispettivamente per dimensioni, volume e pesi. (#TT04668/25) 

### Patch 802.0011 - 06/11/2025

> -	BI - Call scripts from Cruscotti 
> -	CO - elaborazione del consuntivo di progetto, si ricercano i dati delle dimensioni di tipo progetto o anche progetto abilitato (#TT04783/25) 
> -	CPQ - Corretto inizializzazione webapi service 
> -	FI - la contabilizzazione compensi ora assegna la data competenza iva in base alle impostazioni della causale (data reg o data doc.). (#TT04422/25) 
> -	FI - revisione contabilizzazione dei dati iva in caso di importi iva portati a zero nel riepilogo della fattura di acquisto. (#TT01757/25) 
> -	MES - MES Solution - Risoluzione di alcune anomalie durante la rilevazione valori del Controllo articoli e sblocco ordine al cambio del Centro di lavoro. 
> -	MS - Corretto bug che nel caso in cui fosse lanciata la pianificazione generale con esecuzione mrp e con la form MRP aperta, per visualizzare i dati dell’elaborazione della form MRP era necessario chiuderla e riaprirla. (#TT00943/25) 
> -	MS - Corretto bug in Capacità centri di lavoro inerente ad una errata visualizzazione dei tempi di attesa coda presenti nelle fasi dei cicli di lavoro. (#TT04629/25) 
> -	MS - Corretto bug in fase di rilascio degli ordini pianificati di produzione che generava ordini di conto lavoro con una quantità errata nel caso in cui in distinta fosse usata una UM alternativa. (#TT04708/25) 
> -	MS - In capacità centri di lavoro nel caso in cui avvenga uno spostamento di fase in una giornata in cui il centro di lavoro è già completamente occupato, viene visualizzato un messaggio di errore. Altrimenti, viene saturata la giornata del centro di lavoro senza sovra-allocarla e il residuo del tempo (della fase spostata) viene ripartito nelle successive giornate lavorative per una capacità pari alla massima di quel centro di lavoro, indipendentemente dal carico di lavoro già presente. (#TT03527/25) 
> -	QY - Reclami - Risolta anomalia riscontrata alla creazione di un profilo nella form di gestione; veniva generata una exception, (#TT04731/25) 
> -	Risolto il problema della notifica degli errori nell’integrazione WebApi/BizLink 
> -	Risolto problema integrazione WebApi/BizLink per alcuni formati. 
> -	SCS - Nell’importazione Web API del Ricevimento merci, viene considerata la quantità inserita (#TT04163/25) 
> -	SD - Creazione DDT da Lista di prelievo UDC: Durante la creazione del DDT da una lista di prelievo UDC, se l’ordine cliente di origine contiene righe di tipo Note o Spese, queste vengono ora inserite nel DDT con il flag “In fattura” attivo. (#TT04486/25) 
> -	SD - Ordini Clienti: Modifiche layout of the tab Costi Articolo. Modifications in SalesOrder object form can have an impact on profiles. Rif ticket (4597/25) 
> -	SD - Revisione import documenti di vendita tramite webapi per gestione collection tasse, se valorizzata nel file Fluentis recepisce il dato presente altrimenti va a richiamare gli algoritmi di valorizzazione standard (#TT04695/25) 
> -	SD - Revisione della valorizzazione interventi in società con tax engine attiva, esclusione blocco per iva mancante e ricalcolo tasse in fattura (#TT04713/25) 
> -	SD - Per le offerte gerarchiche, visualizzazione del tab Tasse se si è in società con Tax engine attiva. Modifications in SalesOffer object form can have an impact on profiles (#TT04791/25) 
> -	SH - Corretto caso di mancata esecuzione stored procedure configurata nelle transizioni dei workflow, eseguendo il cambio stato wf dalla griglia di ricerca dei documenti (#TT04415/25) 
> -	SH - Chiusura tabella Aree. Modifications in Area object form can have an impact on profiles ( TT03006/24) 
> -	SH - webapi di import FSLedgerAccount, revisione gestione destinatari/destinazioni (#TT04641/25) 
> -	SH - Report designer - Ensure default ItemNature is set (#TT04702/25) 
> -	Sulla piattaforma Web non venivano caricati gli script ViewModel custom (#TT04847/25) 
> -	WM - Migliorato ed ottimizzato il report Esplosione distinta base. Selezionando il flag Riepilogata è possibile anche visualizzare gli articoli raggruppati per codice a parità di livello (flag multi livello) oppure per tutta la distinta base (flag mono livello). (#TT04557/25) 
> -	WM - Risolto problema su registrazione di magazzino - non proponeva il costo quando si selezionava piu lotti da help lotti (#TT04898/25) 
> -	WMS - Gestione Spunta - Errore non gestito in chiusura spunta. (#TT04750/25) 
> -	WMS-Fix Maui CheckRowManagement Filter expand problem. Modifications in CheckRowManagement filter form can have an impact on profiles. (#TT01258/21) 

### Patch 802.0010 - 28/10/2025

> -	ARM - Fix in compact grid templates for properties with stereotype 
> -	CO - Revisione Elaborazione consuntivo di progetto nell'elaborazione periodi del controlling (#TT04783/25) 
> -	CO - revisione visualizzazione tab scostamenti in comparazione riclassificazioni (#TT04759/25) 
> -	Framework - Disable compact grids in help 
> -	MS - Corretto bug nella procedura MRP che in alcuni casi visualizzava dei risultati contrastanti con quanto presente in analisi disponibilità. (#TT04605/25) 
> -	Revisione Valorizzazione interventi per Tax engine (#TT04721/25) 
> -	SCM: Nir - correzione delle fonti dei lotti e delle quantità residue per più lotti, corretto anche il carico del magazzino per Nir #TT04615/25 
> -	SCS - Ordine di conto lavoro, corretta anomalia che causava la ripetizione di messaggi di errore in fase di sostituzione articolo, da non fittizio a fittizio, nelle righe ordine (#TT03838/25) 3
> -	SD - Ordini Clienti: Implementazione Costi Articolo in Articoli Ordini Clienti  
    È stata introdotta una nuova tab  “Costi Articolo” all’interno della sezione Articoli degli Ordini Clienti, con lo scopo di associare ad ogni riga d’ordine il fornitore preferenziale e il relativo costo di acquisto dell’articolo venduto. Il tab Costi Articolo non contiene il riferimento diretto all’articolo, poiché il costo è associato all’articolo venduto nella riga d’ordine. Sono gestite le tipologie di origine del costo e nei Parametri degli Ordini Clienti è possibile definire quale è l’origine del costo gestito di default nell’inserimento Ordini Clienti. 
    Le proprietà dei Costi Materiali sono: 
    Costo unitario e totale 
    Percentuale e valore del ricarico 
    Valore del profitto 
    Origine del costo (magazzino, listino, ordine, fattura) 
    Riferimenti a documenti di acquisto (listino, ordine, fattura) 
    Alla creazione di una riga d’ordine cliente (non derivata da offerta), i dati vengono automaticamente inseriti nel tab Costi Articolo, in base al fornitore preferenziale dell’articolo e al tipo di origine del costo definito nei parametri dell’ordine cliente. 
    Se l’ordine cliente deriva da un’offerta CRM, i dati vengono copiati dal tab Materiali, per il materiale con lo stesso codice della riga articolo dell’offerta mantenendo la stessa logica di origine del costo. 
    Impatto sui processi 
    La procedura di generazione dell’Ordine di Acquisto da Ordine Cliente è stata aggiornata: se presenti, verranno utilizzati fornitore, listino e costo del tab  Costi Articolo della riga ordine; in caso contrario, verrà mantenuta la logica attuale. 
    Modifications in SalesOrder object form can have an impact on profiles 
    Rif ticket (4597/25) 
> -	SD - Fix Sales Tiles problem(#TT01258/21) 
> -	SD - Revisione valorizzazione centri di costo quando la priorità è sull’anagrafica articolo e ci sono più centri (#TT04670/25) 
> -	SH - Nelle società con Tax engine attiva, la modifica del sottoconto di testata del documento fa ricalcolare le tasse applicate nel documento (#TT04699/25) 
> -	SH - add new parameter for import web api of FSLedgerAccount 
> -	Solved bug to edit webapi configuration for json format 
> -	Solved bug to enable additional fields on supervisor activity widget activity 
> -	WM - Aggiornamento del costo effettivo per i lotti sui movimenti di carico a magazzino, provenienti da diverse aree (vendite, acquisti, produzione, terzista) (TT04267/25). 
> -	WM - Analisi disponibilità, al cambio dell’articolo nel filtro e successivo rilancio della ricerca, la griglia di dettaglio viene aggiornata in base al nuovo articolo (#TT03562/25) 
> -	WM - Piani di Carico - Ripristino quantità residua ordine cliente in cancellazione Piano di Carico con Picking(TT04272/25). 
> -	WM - Packing List - Corretto cambio stato a “Fatturato” aggiungendo UDC. (#TT04626/25) 


### Patch 802.0009 - 28/10/2025

> -	CO - Scritture di Rettifica: abilitata la possibilità di esportare i dati della griglia. Modifications in Scritture di Rettifica form can have an impact on profiles (Rif. Ticket TT04136/25). 
> -	FI - Comunicazione liquidazioni periodiche iva: Risolto problema in fase di creazione LIPE (Rif. Ticket TT04659/25). 
> -	FI - revisione contabilizzazione documenti per errore in raggruppamento centri di costo. (#TT04658/25) 
> -	FI, PR - abilitata la multi-selezione nei campi combo per le form Pagamenti fornitori, Creazione automatica pagamenti fornitori e Gestione appoggio pagamenti. Modifications in these forms can have an impact on profiles ( TT03917/25) 
> -	MS - Corretto bug nella procedura MRP che, in alcuni casi, calcolava in maniera errata la data di fine degli ordini pianificati di acquisto. (#TT04624/25) 
> -	SD - Nella conversione da Contatto CRM ad Anagrafica cliente, vengono riportati gli Extra Data, se attivati (#TT04525/25) 
> -	Solved bug to map null field with Json files 


### Patch 802.0008 - 27/10/2025

> -	CRM - corretto caso che non permetteva di effettuare inserimenti continuativi di attività nei workflow dei contatti presenti nelle campagne marketing (#TT04302/25) 
> -	CRM - risolto caso per cui cliccando sulla email di un riferimento di un contatto CRM, si verificava una anomalia. Reso possibile apertura diretta gestore di posta installato su pc. (#TT04550/25) 
> -	FI - contabilizzazione compensi su compenso creato da liquidazione agenti, blocco del ricalcolo enasarco. (#TT04577/25) 
> -	MS - Corretto bug in pianificazione generale che generava in alcuni casi ordini pianificati con quantità doppia. (#TT04502/25) 
> -	MS - Corretto bug nell’esecuzione della procedura MRP (#TT04604/25) 
> -	MS - Corretto il calcolo del tempo di inizio e fine in Sequenza fasi. (#TT03529/25) 
> -	PR - distinte di anticipo, revisione gestione del tipo importo ‘imponibile’. Modifications in SalesInvoiceHelpFilterWidget and SalesInvoiceMaturityHelpAdvanceFilterWidget can have an impact on profile (#TT04280/25) 
> -	PR - stampa lista fatture anticipate/incassate, revisione del repository method per gestione filtro incassate. Modifications in stampa lista fatture anticipate/incassate can have an impact on profile (#TT04572/25) 
> -	WM - Duplica articoli- creare la possibilità di estendere in modo personalizzato per altre proprietà da duplicare (#TT04607/25) 
> -	WM - Tracciabilità lotti: corretto controllo validità componenti in distinta base. (TT04524/25) 

### Patch 802.0007 - 22/10/2025

> -	ARM - Simply default template for workflow script 
> -	CRM: nella proposta dati di un contatto CRM, se il campo p.iva è vuoto viene segnalata l'obbligatorietà del dato. Dalla versione web rimosso dalla visualizzazione il campo Tax Identification Number nel caso di società non USA  (#TT04456/25) 
> -	FI - Creazione compenso da documenti di acquisto in entrata: risolto errore in fase di creazione del compenso dovuto a una descrizione troppo lunga e rivisti i calcoli nel riepilogo dati IVA (Rif. Ticket TT02622/25). 
> -	FI - Stampa iva periodica - Completata implementazione del regime iva Art 74 DPR 633/72 Trimestrali “per natura”. Allineata stampa della liquidazione IVA periodica e calcolo (senza interessi trimestrali) nella Comunicazione trimestrale delle liquidazioni. (#TT03154/25) 
> -	FI - revisione gestione messaggi di conferma al salvataggio delle registrazioni contabili (#TT04552/25) 
> -	MES - Corretto bug, che si verificava nel caso in cui venisse rilasciato un ordine pianificato di produzione di livello inferiore senza che aver rilasciato anche l’ordine padre, se veniva creato un lotto per quell’ordine di produzione e poi veniva rilasciato l’ordine pianificato di produzione padre, non venivano agganciati i riferimenti corretti del campo SourceProductionOrder (#TT04449/25) 
> -	MS - Corretto bug in costificazione delle commesse che non calcolava correttamente il tempo macchina se il centro di lavoro aveva il tempo fisso. (#TT04500/25) 
> -	MS - Corretto bug in sequenza fasi top down grid che non permetteva di filtrare sulla descrizione del cliente dopo averla trascinata in griglia dall’object navigator. (#TT04489/25) 
> -	MS - Corretto errore in salvataggio commessa in assenza di magazzino/causale nell’ordine cliente. (#TT04543/25) 
> -	PM - calcolo SAL - Corretta inclusione spese anche se l’attività dichiarata ha totale tempo 0 (#TT04384/25) 
> -	PM - Corretta elaborazione SAL affinchè consideri i costi e ricavi da contabilità (#TT04540/25) 
> -	PR, SH, WM - revisione esecuzione filtro automatico su form Controllo rimesse, Matrice applicazione tasse, Tasse, Tipo tassazione partner, Tipo tassazione documenti, Tipo tassazione articolo acquisto, Tipo tassazione articolo vendita (#TT04520/25) 
> -	Propaga il codice di nomenclatura da PurchaseDeliveryNoteItem e SubcontractorItem nell'articolo della fattura di acquisto (TT04504/25) 
> -	Revisione procedure di carico magazzino per valorizzazione centri di costo su più dimensioni (#TT04277/25) 
> -	SCM - In fase di duplicazione di un ordine fornitore, il flag Prezzo manuale viene ora impostato anche nel nuovo ordine, se presente in quello originale. (#TT04446/25) 
> -	SCS - Risolta anomalia nel calcolo del costo degli articoli durante la registrazione di un Rientro di Conto Lavoro, in presenza di valorizzazione dei materiali a costo ultimo e valorizzazione per lotto e commessa di produzione. (#TT04474/25) 
> -	SD - Corretto l’aggiornamento dello stato di evasione dell’Ordine cliente in seguito alla creazione di una Lista di Prelievo UDC e di una Fattura generata dalla lista di prelievo. (#TT04412/25) 
> -	SD - Creazione Fattura di Vendita da Picking: In fase di salvataggio della Fattura, a seguito di modifiche, viene ora visualizzato un messaggio che segnala la presenza di fatture di acconto intestate al cliente del documento. (#TT04460/25) 
> -	SD - Listini di Vendita: Aggiunto un controllo sul tipo conto in fase di creazione di listini di vendita personalizzati per permettere la creazione di listini intestati solo a conti di tipo cliente. Modifications in Filter SalesPriceList form, SalesPriceList object form  and Create SalesPriceList can have an impact on profile. (#TT04472/25) 
> -	SD: Nelle scadenze delle fatture, introdotto nuovo campo in database dove è possibile memorizzare i link per gestire i pagamenti online (#TT04563/25) 
> -	SH -  revisione webapi di import FSLedgerAccount, revisione gestione update su collection CustomerSupplierAccountPublicAdministrations (#TT04506/25) 
> -	WM - Corretto errato calcolo disponibilità in magazzino esterno. (#TT04532/25) 

### Patch 802.0006 - 16/10/2025

> -	CO - ripresa dati da produzione del controlling, i valori di progetto ripresi dai rientri del conto lavoro ora usano il prezzo netto di riga e non il lordo (#TT04478/25) 
> -	FI - corretto calcolo interessi trimestrali iva nella comunicazione periodica delle liquidazioni IVA. Non vengono più esposti nel quarto trimestre come da istruzioni ministeriali. Rif. #TT00124/22 
> -	FI - corretto problema che non riportava I dati dei centri di costo riferiti alle commesse nelle scritture di assestamento. (TT03979/25) 
> -	FI - Creazione compenso da documenti di acquisto in entrata: Risolto problema relativo alla creazione di un nuovo contatto e al calcolo delle righe all’interno del compenso (Rif. Ticket TT01805/25). 
> -	MES - Dichiarazioni di produzione da soluzione MES - Corretta anomalia che, alla doppia pressione del pulsante [Avanza], creava una doppia dichiarazione di produzione. (#TT04436/25) 
> -	MES - Dichiarazioni di produzione da soluzione MES - Corretta anomalia che, alla doppia pressione del pulsante [Avanza], creava una doppia dichiarazione di produzione. (#TT04436/25) 
> -	MES - Verticalizzazione Pharma - Ordini di produzione - Corretta anomalia che non effettuava un refresh della form al cambio stato workflow di "Parzialmente associato", non visualizzando automaticamente la griglia del dettaglio dei Lotti. (#TT04063/25) 
> -	MES - Verticalizzazione Pharma - Ordini di produzione - Corretta anomalia che non decrementava la "Quantità totale" di consumo del materiale principale assegnando una "Quantità totale" di consumo ai materiali alternativi. (#TT04062/25) 
> -	MS - Corretto bug in costificazione delle commesse di produzione che non valorizzava correttamente il costo di setup. (#TT04167/25) 
> -	SCM - Dettaglio righe ordini: Risolta anomalia che causava l’applicazione delle modifiche anche a righe non selezionate, nel caso in cui fossero state deselezionate a seguito dell’applicazione di un filtro nella griglia. (#TT04404/25) 
> -	SCM Nir - correzione delle sorgenti lotti e delle quantità residue. (# TT04344/25) 
> -	SD - Abilitata la modifica del vettore nei DDT di Vendita valorizzati ma non ancora movimentati a magazzino. (#TT03807/25) 
> -	SD - Corretto calcolo della provvigione agente negli ordini cliente che veniva azzerato in caso di percentuale agente impostata manualmente nelle righe ordine e inserimento sconto finale nei riepiloghi. (#TT04058/25) 
> -	SD - Creazione DDT da Picking: corretta anomalia che in alcuni casi non riportava nel DDT il Destinatario e la Destinazione dell'Ordine cliente quando veniva utilizzato il raggruppamento per destinazione. (#TT04275/25) 
> -	SD - Lo scarico di magazzino valorizza i centri di costo a carico di magazzino valutando la dimensione dei centri (#TT04277/25) 
> -	SD - Modificata la logica della stampa Provvigioni maturate che ora mostra la provvigione anche se il totale fattura è zero, nel caso di storno acconti, e l’agente ha il criterio di maturazione a fattura emessa. Rif #TT04367/25 
> -	SD - Nelle procedure di creazione di DDT, Fatture o Picking da Ordini, DDT, POS, Picking, Liste di prelievo UDC, Liste di trasferimento UDC, Spedizioni o Interventi, è stato implementato un controllo che impedisce la generazione del documento qualora il cliente risulti bloccato nel Lock Manager. (#TT04207/25) 
> -	SD - Ordini Clienti: Data la possibilità di aprire Proprietà Ordine Cliente  di ordini diversi (rif.ticket 4409/25) 
> -	SD - Provvigioni per Range Sconto: Per il calcolo del range sconto corretto  la % di sconto per la ricerca del range corretto viene calcolata nel seguente modo: totale sconto di riga (non arrotondato) diviso per la quantita di riga e il risultato diviso per il prezzo di riga, il risultato non arrotondato è la % di sconto per la ricerca del range corretto. (rif ticket 4408/25) 
> -	SD - Revisione creazione compenso percipiente da liquidazione agenti con opzione ‘Non ricalcolare enasarco’, caso con sottoconto di fatturazione attivo (#TT04247/25) 
> -	SH - Documenti Sdi: Abilitato l’invio massivo dei Documenti di Vendita in uscita anche per file Sdi importati dall’esterno. (#TT03619/25) 
> -	WM - Analisi Disponibilità: disponibilità del rientro di conto lavoro slegata dal magazzino del materiale. (#TT04419/25) 
> -	WM - Analisi disponibilità: tolta dalla disponibilità la giacenza su ubicazioni bloccate. (#TT04477/25) 
> -	WM - Corretto bug che impediva di inserire lotto economico nei parametri MRP dell’articolo nel caso in cui l’unità di misura dello stesso fosse con zero decimali. (#TT04418/25) 
> -	WM - Corretto mancato aggiornamento lotto economico in parametri mrp se um senza decimali. (#TT04481/25) 
> -	WM - revisione test di quadratura quantità nei movimenti dei centri di costo delle registrazioni di magazzino, valutazione per dimensione dei centri (#TT04488/25) 
> -	WMS - Corretto errore in ricevimento merce al salvataggio nel ricalcolo delle scadenze. (#TT04454/25) 

### Patch 802.0005 - 14/10/2025

> -	SH - Import Contatti - Corretta anomalia su schema di importazione (#TT04225/25). 
> -	WMS - Corretta anomalia nel tab articoli delle forma gestione spunta e conferma picking nella quale non veniva visualizzato il corretto numero di decimali. Le modifiche nel CheckRowManagement form possono avere un impatto sui profili (#TT04208/25).  

### Patch 802.0004 - 09/10/2025

> -	Aggiornamento parser sistemi per esportazione paghe 
> -	CO - Valorizzazione Distinta Base - E' stato corretto il calcolo del Costo dell'articolo. Il costo considera la ripartizione del Costo di attrezzaggio sulla base della quantità indicata nel parametro Lotto (parametro richiesto all'esecuzione del report) Costo materiali + Costo lavorazioni: macchina, manodopera ed esterne + Costo attrezzaggio / Lotto. (#TT04238/25) 
> -	FI - Blazor - crash in posting in account widget URI too large ( TT04354/25) 
> -	FI - correct indexes ( TT04299/25) 
> -	FI - Corretto Calcolo LIPE errato in presenza di IVA indetraibile e Pro-Rata ( TT03934/25) 
> -	FI - implementato giroconto automatico dell’iva indetraibile per pro-rata in fase di stampa definitiva e contabilizzazione della liquidazione periodica. Le modifiche nel FSGeneralLedgerParameter and PeriodicalVatSettlmentReport forms possono avere un impatto sul profilo. ( TT04295/25) 
> -	FI - revisione contabilizzazione fatture per valorizzazione dimensione progetti (#TT04328/25) 
> -	FI - SafTGeneralLedgerEntryFilterResults - add option "Grouped" default 0. Le modifiche nel SafTGeneralLedgerEntryFilter object form possono avere un impatto sul profilo. ( TT04178/25 ) 
> -	MES - Corretta anomalia nella registrazione delle dichiarazioni di produzione nel caso in cui venisse inserita una quantità scartata per un materiale. (#TT04110/25) 
> -	MES - Corrette anomalie in MES sul tab operatori, dove gli operatori non attivi venivano riproposti come attivi nelle dichiarazioni successive e all’ordine di produzione che rimaneva in alcuni casi bloccato. (#TT04122/25) 
> -	MS - Implementata nelle commesse indipendenti o previsionali (in stato non esaminato o pianificato) la possibilità di modificare le date di inizio e fine previsione. (#TT03335/25) 
> -	MS - Nella maschera Gestione cicli e fase di lavoro abbiamo corretto il filtro predefinito sullo stato per ogni tab del workflow e aggiunto anche il filtro ExtraData, che permette di visualizzare gli extra data relativi al ciclo, alle fasi del ciclo e all’articolo del ciclo. (#TT03893/25) 
> -	MS - Ora quando viene aggiunta una fase manualmente in un ordine pianificato o di produzione viene riportato correttamente anche il flag movimentabile della fase stessa. (#TT04269/25) 
> -	MS - Ottimizzato il refresh delle griglie della form sequenza fasi nel caso in cui venisse modificato il campo note. (#TT04306/25) 
> -	PM - WEB - interventi - risolta casistica per cui i campi vuoti non erano editabili (#TT04334/25) 
> -	PM - WEB ripristinata funzionalità del WBS assegnazione risorse - drag&drop degli appuntamenti (TT04368/25) 
> -	PM - WEB valorizzazione interventi - ripristinato bottone "valorizzazione" che da interfaccia web risultava disabilitato (#TT04307/25) 
> -	PR - Corretto errore in fase di raggruppamento delle note di accredito con le fatture nelle ricevute bancarie. ( TT03636/25) 
> -	QY - Taratura strumenti - Corretta l'anomalia segnalata di errata gestione del numero di decimali nei valori da rilevare e rilevati dovuta alla non presenza dell'Unità di misura dello Strumento verificato. (#TT04371/25) 
> -	Risolto problema salvataggio attività di supervisor (TT04332/25) 
> -	SCM - L’importazione Web API dei DDT calcola correttamente le scadenze (#TT04223/25) 
> -	SCS - Conto lavoro di fase: Corretta anomalia che aggiornava lo stato della Commessa di Produzione a seguito dell’evasione di un Ordine di Produzione con ultima fase esterna, anche in presenza di ordini di livello superiore ancora in stato esecutivo. (#TT03393/25) 
> -	SD - Abilitata la possibilità di modificare la Data consegna e la Data merce pronta negli Ordini Clienti che hanno generato automaticamente il Progetto e la Commessa di Produzione. Le modifiche nel SalesOrder object form possono avere un impatto sul profilos. (#TT03882/25) 
> -	SD - In fase di duplicazione di DDT, Fatture o Pos, se non viene trovata un’aliquota IVA valida tra dichiarazione d’intento, anagrafica cliente o anagrafica articolo, viene proposto il codice IVA presente nel documento di origine. (#TT03962/25) 
> -	SD - In fase di Evasione di un Ordine cliente in DDT o Fattura viene ora popolata anche l’ora di inizio trasporto. (#TT03386/25) 
> -	SH - Corretta anomalia che talvolta causava il cambiamento di stato del Workflow durante l’uso delle frecce della tastiera. (#TT04285/25) 
> -	SH - DataSources - Consider simple datasources properties formulas as Devexpress Criteria expressions (TT04074/25) 
> -	SH - webapi sull’oggetto FSLedgerAccount, revisione attribuzione codice di sottoconto del file su conti con numero massimo raggiunto (#TT04339/25) 
> -	SH - WEB - nei report che richiedono l'inserimento di filtri nell'anteprima, corretta disposizione label dei filtri che in alcuni casi era sovrapposta (#TT04338/25) 
> -	WM - Differenze Inventariali: aggiunge articoli a 0 anche per lotti su cui ci sono altri lotti dell’articolo in lista. (#TT03865/25) 

### Patch 802.0003 - 03/10/2025

> -	BI - pivot - add Excel Export command in contextual menu 
> -	FI - ‘New options for Ro 394 fiscal declaration’. Le modifiche nel declaration 394 object form possono avere un impatto sul profilo ( TT04183/25) 
> -	FI - fix RO declaration D300 
> -	FI - la modifica della categoria cespite ora cambia il sottoconto patrimoniale in testata cespite. (#TT03931/25) 
> -	FI - revisione test di quadratura in contabilizzazione fatture con omaggi (#TT03708/25) 
> -	FI - Stampa Analisi Centri di Costo: Revisione logica proposta totali (TT03996/25) 
> -	MS - Fase soggetta a controllo qualità in  un Ciclo di produzione -  Tipo piano di controllo inseribile anche se la fase è stata resa soggetta a Controllo qualità senza confermare i valori (cambio riga).(#TT04190/25) 
> -	PM - Risolta casistica che bloccava la valorizzazione interventi (#TT04266/25) 
> -	QY - Calibration planner fixes/changes (TT03064/25) 
> -	  QY - Sono stati implementati i diagrammi generali per le relazioni tra i seguenti documenti: (Reclamo e Azioni correttive; Non conformità e Azioni correttive; Azione correttiva padre e Azioni correttive figlie; Corso di base e Corsi di formazione - #TT03480/25) 
> -	SCM - verticalizzazione Pharma - Edizioni - Ora è possibile modificare le informazioni di: Acquistabile, Data inizio, Data fine e Osservazioni, prima non editabili. 
> -	SD - Risoluzione dell’errore che duplicava gli sconti finali derivanti dal tipo pagamento, in tutte le procedure di evasione (#TT03745/25) 
> -	SD - Sconti Offerta - Implementata possibilità di non far modificare, visualizzare, elininare o creare gli sconti in testa dell'offerta tramite il diritto FSSalesOfferPredefinedDiscount (#TT003853/25) 
> -	SD Pos- Fix Item barcode problem(TT01258/21) 
> -	SD - Elimina le fatture con più di 2100 articoli (TT04134/25) 
> -	WM - Ottimizzato algoritmo Valorizzazione Magazzino per UDC. (#TT04132/25) 
> -	WM - Tipologia prelievo FIFO dei lotti ora non considera le ubicazioni bloccate. (#TT03598/24) 
> -	WMS - Gestione spunta: spunte multiple eseguite con registrazioni di scarico distinte (#TT04029/25) 

### Patch 802.0002 - 25/09/2025

> -	FI - Declaration 300 and 394 for RO - vat code 11 and 21 ( TT04041/25) 
> -	FI - liquidazione iva periodica, aggiunto collegamento alle anagrafiche per impostare la società che presenta la comunicazione per conto di un altro contribuente. Le modifiche nel periodic vat calculation form possono avere un impatto sul profilos. (#TT04050/25) 
> -	FI - propose department in postingCostCenter (TT04126/25) 
> -	MES - Corretta anomalia nella dichiarazioni di produzione che non inseriva correttamente il valore nella registrazione di magazzino nel caso in cui nel centro di costo fosse specificata una unità di misura. (#TT03519/25) 
> -	PM - procedura di generazione fattura di vendita da progetto, gestito caso in cui non compariva messaggio di blocco nel caso di cliente bloccato nel Lock Manager (TT03721/25) 
> -	PM - risolto caso per cui generando fattura da interventi tramite procedura di valorizzazione, in caso di ritenuta d'acconto veniva riportata solo come riferimento e non calcolata nei totali. (#TT03799/25) 
> -	SCS - Distinta base, intercettato caso in cui, la quantità padre di un componente risulta pari a zero, con conseguente anomalia in fase di Esplosione livello da struttura distinta nell’ordine di conto lavoro (#TT03891/25) 
> -	SD - Corretta anomalia che in alcuni casi non liberava la quantità residua del lotto dopo l’evasione forzata di un Ordine cliente in DDT di Vendita. (#TT03588/25) 
> -	SD - Creazione Fatture da DDT: corretti errori nella valorizzazione dei DDT di trasferimento merce con articoli gestiti a lotti e dei DDT contenenti articoli con lo stesso codice lotto riportato su più righe. (#TT03901/25, #TT04043/25) 
> -	SD - Gestione Acconti: Corretto l’aggiornamento del residuo acconto in caso di storno parziale. Abilitata la chiusura forzata dell’acconto tramite l’attivazione del flag Forzatamente evaso anche su fatture contabilizzate o con documento Sdi generato. (#TT03759/25) 
> -	SD - Nel caso in cui il parametro ‘Codice operatore obbligatorio’ sia attivo in fattura, la procedura ‘Creazione da DDT’ riporta l’operatore inserito nel DDT nel caso di evasione 1-1, mentre nel caso di evasione n-1 la creazione non avviene (#TT04107/25) 
> -	SD - Risolta anomalia nella duplicazione di DDT e Fatture di Vendita che applicava l’aliquota IVA del cliente anche alle righe di tipo Note. (#TT04147/25) 
> -	SD - Corretto problema di visibilità nel campo Descrizione agente per la bolla di vendita. Le modifiche nel SalesDeliveryNote object form possono avere un impatto sul profilos. (#TT01258/21) 
> -	SH - Webapi di import FSLedgerAccount, revisione gestione banche d’appoggio e dati fido. (#TT04082/25) 
> -	WM - Anagrafica lotti: Aggiunti i campi “Quantità impegnata”, che consente di visualizzare i documenti e le quantità con cui il lotto risulta impegnato, e “Chiuso forzatamente”, che indica l’evasione forzata della riga con conseguente liberazione dell’impegno del lotto. (#TT03787/25) 
> -	WM - Corretto mancato filtro su componenti scaduti in inserimento massivo componenti distinta base (#TT04070/25) 
> -	WM - Nascosti dati sensibili (costi) nell’expander dell’articolo (#TT02167/25) 
> -	WM -  Corretto calcolo giacenza in griglia anagrafica lotti. (#TT04045/25) 

### Patch 802.0001 - 19/09/2025

> -	CO - Corretta anomalia nella procedura di calcolo costo nel caso di listini con prezzi con UM diversa da quella principale dell’articolo. (#TT03766/25) 
> -	CO - modificato algoritmo di creazione della chiusura da private a virtual. (#TT03923/25) 
> -	CO - revisione ‘Ripresa ammortamento cespiti’ nelle chiusure infrannuali, ottimizzazione (si consiglia di eseguire la procedura con l’opzione ‘singola registrazione’ attiva) (TT03929/25) 
> -	CRM - L’Agente principale viene riportato in testata Offerta anche se il Contatto CRM non ha un’anagrafica contabile associata (#TT02925/25) 
> -	FI - causali automatiche, revisione gestione Sottoconti automatici (#TT03869/25) 
> -	FI - Corretto comportamento del filtro Categoria amministrativa nelle form generazione solleciti e generazione automatica solleciti ( #TT03618/25) 
> -	FI - Declaration 300 and 394 for RO - vat code 11 and 21 ( TT04041/25) 
> -	FI - Fixed assets: new option for depreciation contabilization for F2025 - Ripresa ammortamento cespiti ( TT00384/25) 
> -	FI - revisione import da DocFinance per esclusione blocchi in ricerca solleciti. (#TT03926/25) 
> -	FI - stampa Liquidazioni Agenti - vuota ( TT03928/25) 
> -	Risolto bug esportazioni multiple (#TT03916/25) 
> -	SD - Fatture di vendita: Per le fatture di tipo differito, l’attivazione del flag Stampata a seguito della stampa del documento non richiama più la procedura di scarico automatico. (#TT03689/25) 
> -	SD - I campi CIG e CUP inseriti nella testata dell’Ordine Cliente vengono riportati automaticamente anche nel Progetto generato dall’ordine. Inoltre, durante l’evasione di un progetto in Ordine Cliente, i valori di CIG e CUP presenti nella testata del progetto vengono trasferiti anche sulle righe articolo dell’ordine. (#TT03627/25) 
> -	SD - I DDT valorizzati nella stessa fattura possono essere scaricati anche separatamente. Le fatture generate da DDT sono scaricabili solo se di tipo immediato e con flag Scollega DDT, altrimenti lo scarico va effettuato direttamente dai DDT. Per le fatture immediate, quando tutti i DDT risultano scaricati, l’attivazione del flag Stampata in fattura imposta automaticamente anche il flag Scaricata. (#TT03152/25) 
> -	SH - add FilterName and FilterPath in DashboardDatasource 
> -	SH - fast start, valorizzazione della tabella di dettaglio delle nature transazioni intrastat (#TT03930/25) 
> -	SH - revisione webapi di import dell’oggetto FSLedgerAccount per gestione anagrafica agenti (#TT03911/25) 
> -	Solved bug to edit BizLink Parser Objects 
> -	WM - Corretto bug nella procedura di chiusura di magazzino nel caso di gestione con UDC. Corretto bug nella procedura “Aggiungi / sposta articoli” presente in gestione UDC. (#TT03596/25) 
> -	WM - Corretto filtro magazzino nella chiamata API GetItemsAvailability . (TT03867/25 ) 
> -	WM - In analisi disponibilità migliorata la leggibilità del campo numero documento, dove nel caso in cui si tratti di un ordini di produzione viene visualizzato:  
> -	WM - In conferma picking di articoli gestiti a lotti aggiornata quantità di riga anche alla prima sovraevasione(#TT04004/25) 
> -	WM - Ottimizzata e migliorata la visualizzazione in analisi disponibilità degli ordini di produzione e delle relative dichiarazioni di produzione. (#TT03754/25 - #TT01102/25 - #TT04027/25) 
> -	WM - Ottimizzato e velocizzato il caricamento dei picking nella form di filtro picking. (#TT03764/25) 
> -	WM - Rinominate le labels relative alla giacenza in analisi disponibilità, da: “Giacenza, Giacenza Disponibile, Giacenza Non Disponibile” a “Giacenza Operativa, Giacenza Operativa Disponibile, Giacenza Operativa Non Disponibile”. 
> -	WMS - "numero ordine di produzione - numero lotto" e nel caso di una dichiarazione di produzione viene visualizzato: "numero ordine di produzione - numero lotto - numero dichiarazione di produzione". (#TT04069/25) 
