---
title: Patch Notes v804
sidebar_label: 🔧 Patch Notes v804
sidebar_position: 1.1
---

### Patch 804.0010 - 30/07/2026

> -	ARM - gestione BPMN, revisione cancellazione script e salvataggio modifica (#TT03241/26)
> -	CPM - Calculation of margins inside CPM (#TT03252/26)
> -	CPQ - Modificata la generazione delle distinte in prototipi nel configuratore con apertura distinta generata. Aggiunta la possibilità di importare distinte nelle configurazioni principali. Aggiunta la duplicazione delle distinte per gli articoli (#TT03290/26, #TT03349/26)
> -	FI - Amministrazione Ricerca Conto per descrizione (#TT03281/26)
> -	FI - corretto bug nella stampa Verifica dichiarazione i intento con dettagli relativamente ai compensi percipienti: Non venivano valorizzate correttamente le colonne Fatturato e Registrato, sommando i valori. (#TT02312/26)
> -	FI - correzione ai codici riferiti al campo Riga dichiarazione fiscale, nella sezione Specifiche per Dichiarazione, della tabella Aliquote e modalità iva. In precedenza i codici erano errati e non permettevano la corretta esecuzione della stampa di riferimento. (#TT02906/26)
> -	FI - Gestione data fine validità delle Nomenclature Combinate (#TT03142/26)
> -	FI - nelle righe di dettaglio dei compensi la modifica delle date competenza ora va ad aggiornare la riga collegata dell’analitica (#TT03150/26)
> -	FI - Registrazioni contabili: revisione della logica di proposta automatica del campo "Materiale/Immateriale" durante la contabilizzazione automatica delle fatture di acquisto cespiti. Modifications inside posting fixed asset tab can have impact on profiles. (#TT03017/26).
> -	FI - Revisione label utile/perdita di fine sezione nel caso di comparazione con risultati opposti. (#TT03315/26)
> -	FI - webapi su oggetto FSPosting, tolto vincolo di compilazione della proprietà FSPosting.Account. (#TT02929/26)
> -	Fix stable sorting for grid export (#TT02877/25)
> -	Rilascio stampa standard per form "Marginalità di vendita prodotto" nel CPM
> -	Risolto bug per generare un namaspace valido per gli script
> -	SCM - Corretto l’allineamento degli indirizzi inseriti nel tab Destinazione della testata dell’ordine fornitore. (#TT03325/26)
> -	SCS - Ordini di conto lavoro: ottimizzata apertura documentale (#TT03342/26).
> -	SD - La cancellazione della fattura di vendita ora elimina eventuali calcoli margini prodotto presenti nella soluzione CPM (#TT03393/26)
> -	SH - Corretta anomalia nel salvataggio del flag "Fatturazione elettronica" in anagrafica contatti (#TT03344/26). Modificato metodo di verifica firma dei pagamenti STRIPE
> -	SH - Fix DepartmentId type for account widget (#TT03414/26)
> -	WM - Analisi disponibilità: corretto errore di timeout in caricamento dettagli per articoli aventi distinte con numerosi componenti fittizi. (#TT03051/26)
> -	WM - Nel filtro della form delle differenze inventariali è possibile aggiungere anche le colonne relative ai costi dell’articolo semplicemente attivando il relativo flag. (#TT01224/26)
> -	WM e MS - Pianificazione generale e Analisi disponibilità: gestione dell’analisi disponibilità per considerare domande e offerte le Attrezzature e loro considerazione nella Pianificazione generale.(#TT01328/26)
> -	WMS - Ricevimento Merce: Allineate label in griglia UDC su Maui e WPF. (#TT02777/26)

### Patch 804.009 - 24/07/2026

> -	Bizlink - Import Excel Movimenti Contabili: corretto il tracciato di import Excel per il riporto delle date di competenza economica (#TT03076/26).
> -	Add configuration for Office365 two factor autentication
> -	Aggiunta sezione Class Context negli script del configuratore
> -	CO - nella procedura Valorizzazione acquisti e vendite dentro le Chiusure infrannuali, modifica della gestione analitica per la dimensione progetti (#TT03218/26)
> -	CPM - New features inside CPM (#TT02549/26)
> -	FI - Compensi: revisione della gestione del campo "Descrizione Movimento" all'interno dei compensi (#TT03004/26).
> -	FI - inserito nuovo parametro generale “FS-PR-DocFinancePostingDelete”, se impostato a true allora le registrazioni create da DocFinance sono cancellabili dalla ricerca registrazioni/movimenti contabili (#TT02000/26)
> -	FI - Risolto bug nei campi di filtro Da Data Pagamento A Data pagamento, nella form del report Ritenuta d'acconto, i quali non filtravano correttamente i dati. (#TT02731/26)
> -	Inoltre, se in fase di dichiarazione di produzione viene dichiarato un parziale, è possibile nell’ordine di produzione ridurre la quantità del lotto del materiale fino a pareggiare la quantità consumata in dichiarazione. (#TT03016/26)
> -	MES - All’interno dei tab lotti dei materiali dell’ordine di produzione, nel caso venga inserito un primo lotto e si indichi una quantità parziale, nel momento in cui si inserisce il secondo lotto viene proposta la quantità residua e non più quella totale.
> -	MES - Corretto bug nell’import webapi delle dichiarazioni di produzione nel caso venissero importate più dichiarazioni contemporaneamente. (#TT03263/26)
> -	MES - Tramite il pulsante generazione lotti degli ordini di produzione, è possibile creare nuovi lotti modificando la quantità del lotto di origine anche nel caso in cui per questo OP siano già state create delle dichiarazioni di produzione, a patto però che la quantità del lotto di origine non diventi inferiore alla quantità già prodotta. (#TT03092/26)
> -	MS - AFCS. Quando dei materiali erano assegnati ad una fase di lavoro chiusa, i relativi fabbisogni erano importati ugualmente, il che poteva portare ad avere nella importazione un segnale di warning di articolo non bilanciato. (#TT03236/26)
> -	MS - Corretto il calcolo del Ricavo previsto in costificazione, nel caso in cui venisse aggiunta una nuova riga all’ordine cliente e alla commessa stessa. (#TT03044/26)
> -	MS - Master Schedule: Risolta anomalia di mancato messaggio di generazione commesse da nuova riga ordine cliente. (#TT03321/26)
> -	MS - Ordini pianificati: risoluzione anomalia di disallineamento tra sottofasi presenti nei materiali e nelle fasi durante l’inserimento dell’ordine; i valori presenti erano Null per i materiali e 0 per le fasi. (#TT02011/26)
> -	OP - Ordini di produzione: eliminando un ordine di produzione vengono eliminati anche i riferimenti ai dati storici del degli ordini pianificati creati durante il loro rilascio. (#TT03257/26)
> -	PM - risolto caso per cui nei parametri progetti non venivano salvate le impostazioni del campo "Costo predefinito materiali progetto" (#TT03292/26)
> -	PR - revisione creazione file Riba e bonifici, sostituzione “left or right quotation mark” con ' (quotation mark) e - (En dash) con - (minus). (#TT02815/26)
> -	QY - Controllo articoli - Importa articoli da controllare: per i tipi documento Dichiarazioni di produzione e Fasi ordine di produzione, nella griglia dei risultati sono state aggiunte le colonne di Macchina e Gruppo manodopera. (#TT03195/26)
> -	Rilascio import excel standard per la procedura del Budget
> -	SCS - Ordini conto Lavoro: La ripresa dei prezzi dai listini di conto lavoro avviene considerando i prezzi in unità di misura alternativa e la priorità di ricerca standard di prezzi e sconti (#TT1847/26)
> -	SD - DDT di Vendita: consentita possibilità di cambio vettore dopo aver effettuato lo scarico del documento (#TT03289/26)
> -	SD - Griglia pagamenti dentro liquidazione agenti, in caso di pagamento avvenuto o scadenza maturata, la griglia non è più editabile nei valori e mostra correttamente la quota parte maturata nella liquidazione in us.Modifications inside Agent settlemente form can have impact on profiles. (#TT04671/24)
> -	SD - Listini di vendita: allineata la struttura grafica agli altri listini presenti per garantire uniformità dell'interfaccia e maggiore coerenza nella consultazione.(#TT03070/26)
> -	SD - Listini di Vendita: Corretta configurazione campo SDSPLIED_ExtraDataValue in ExtraData presenti su articolo (#TT03220/26)
> -	SD - Modificato il comportamento della stampa Provvigioni maturate che non gestiva correttamente alcune casistiche di scadenze derivanti da fatture e note di accredito raggruppate negli effetti attivi e modifica della logica per la maturazione della provvigione sulle partite pagate; se inserite in un effetto attivo la maturazione segue la data scadenza effetto. (#TT02018/26)
> -	SD - Offerte con struttura gerarchica - corretto calcolo totali nei livelli intermedi nel caso di applicazione di sconti nel riepilogo (#TT03244/26)
> -	SD - Proporre la data di trasporto con la data odierna durante la creazione della Nota di Credito di Vendita tramite il pulsante Nota di Credito (#TT03251/26)
> -	WM - Consider also simple and group by datasources for Extradata item class generator (#TT03152/26)
> -	WM - Dettaglio movimento: corretto filtro classe articolo non funzionante con valori multipli. (#TT02212/26)
> -	WM - Dettaglio UDC: Corretto errore in customizzazione della form. (#TT03287/26)
> -	WM - Nel filtro picking sono state cambiate le label da: “Evaso” a “Spedito” e da “Non evaso” a “Non spedito”, dato che quel filtro va a verificare se per il picking è stato creato o meno il DDT o la fattura. Modifications inside Filter Picking form can have impact on profiles. (#TT03127/26)
> -	WMS - Carico/Sposta UDC Multiplo: Corretta visualizzazione ubicazione parziale. (#TT02947/26)
> -	WMS - Liste Trasferimento UDC: Aggiunta gestione del flag “Da unità di carico ad Articoli” presente nel Tipo picking, aggiunta l’ubicazione di partenza in testata con relativa gestione e valorizzazione del conto nel movimento di carico con il terzista indicato in lista. (#TT00857/26)
> -	WMS - Ricevimento Merce: Richiesta di aggiornamento della quantità di riga se diversa da quella delle UDC inserite. (#TT05147/25)
> -	WMS - Spunta Picking: Disabilitata doppia pressione su tasto conferma. (#TT02234/26)
> -	WMS - Carico/Sposta UDC Multiplo - Corretto perdita causale in selezione seconda UDC. (#TT02944/26)
> -	WMS - Gestione Spunta -abilitato spunta UDC già create, sia mantenendo il codice UDC che in creazione di nuova UDC. (#TT00858/26)
> -	XtraReport - implementato nuove funzionalità nella stampa lista fatture (#TT02859/26)

### Patch 804.008 - 17/07/2026

> -	ARM - Display Advanced user configuration section considering Fluentis.Arm.Mvvm.SH.ViewModels.ShowAdvancedUserConfiguration parameter
> -	CO - aggiunto messaggio di conferma esecuzione scritture per cost driver. Esecuzione da procedura Elaborazione periodi, Elaborazione Chiusura infrannuale. (#TT02740/26)
> -	CO - creazione nuova chiusura infrannuale, revisione gestione dei sottoconti non utilizzati in controlling. (#TT03146/26)
> -	CRM - WEB gestita visibilità su più righe della descrizione attività nei log attività dei workflow (#TT03099/26)
> -	FI - Comunicazione liquidazioni periodiche IVA: adeguamento della procedura di elaborazione del calcolo trimestre (#TT03137/26, TT03120/26)
> -	FI - il salvataggio delle registrazioni di contabilità generale verificano ora che tutti i conti inseriti siano della società della registrazione contabile (#TT03012/26)
> -	FI - la contabilizzazione enasarco e pagamento dei percipienti non verifica più il parametro “FS-FI-Posting-BlockPostingBeforeReceiveDate” (#TT02720/26)
> -	FI - Libro Inventari: revisione della procedura di inserimento dei dati di testata (#TT02929/26)
> -	FI - modificata contabilizzazione automatica fatture di acquisto. Allineamento dei campi totale in valuta, iva indetraibile nel caso in cui l’iva venga modificata manualmente dal riepilogo della fattura di acquisto. (#TT03027/26)
> -	FI - Registrazioni Contabili: revisione proposta del menù rapido nella ricerca registrazioni con gestione della riga di dettaglio espansa (#TT02813/26)
> -	FI - revisione contabilizzazione fatture di vendita con ritenute al lordo, per righe registrazione (#TT03097/26)
> -	FI - revisione stampa liquidazione agenti, revisione campo della provvigione maturata (#TT02338/25)
> -	FI - ulteriore revisione/ottimizzazione della procedura di ‘Acquisizione da registrazioni’ nell’intrastat. (#TT02699/26)
> -	Framework - Corretta la gestione della riga filtro durante l’inserimento di un’aggiunta di calcolo della somma nel totale imponibile (#TT02143/26)
> -	MES - Corretto bug nell’import webapi delle dichiarazioni di produzione inerente al serial number del materiale impiegato. (#TT02465/26)
> -	MES - Manufacturing Execution System: risolta anomalia che non allineava il calcolo costi con il movimento di produzione quando il centro di costo di riferimento aveva un’unità di misura indicata ma senza fattore di conversione. (#TT02837/26)
> -	MES - Ordini di produzione - Verticalizzazione Pharma - E’ stata corretta l’anomalia che non permetteva la memorizzazione di un profilo. (#TT00943/26)
> -	MS - AFCS. Corretto un bug per cui per alcuni ordini cliente non veniva indicata la data di consegna schedulata (#TT02957/26)
> -	Note di rilascio: revisione verifica società/divisione quando sono attive maschere di società differenti (#TT03094/26)
> -	PM - dichiarazione attività - spese , gestito caso per cui il flag spesa “fatturabile” per cui una volta attivato, non si riusciva a disabilitare (#TT03058/26)
> -	PM - servizi intervento - corretto caso in cui se l'orario inizio servizio e l'orario di inizio della fascia oraria coincidevano, veniva rilevato un fuori orario nel piano di fatturazione non corretto (#TT02997/26)
> -	PM - WEB - richieste ferie e permessi - corretto caso per cui in fase di conferma ferie e permessi, nella videata di conferma non venivano proposti gli orari indicati nella richiesta (#TT03105/26)
> -	PR - acquisizione effetti dalle fatture, gestione progress bar e ottimizzazione (#TT02852/26)
> -	QY - Controllo articoli: corretta l’anomalia che non permetteva la memorizzazione di un profilo successivamente alla modifica della form di Filtro Controlli articolo. (#TT03077/26)
> -	QY - Taratura strumenti: parametrizzazione delle Incertezze (-) e (+) espresse in Valore o Percentuale. Nei “Parametri Taratura strumenti” è stata aggiunta una nuova informazione “Tipo tolleranza espressa in” per dare la possibilità di scegliere se le Incertezze vengano espresse in Valore o Percentuale. Il dato parametrizzato si applica al calcolo dell’Esito nei “Valori rilevati” durante la Taratura interna di uno strumento.(#TT03111/26)
> -	WEBAPI - Importazione DDT/Fatture Acquisto con Serial Number: Corretta l’importazione dei Serial Number con codice predefinito. (#TT2589/26)
> -	SCM - Creazione automatica Ordini Fornitori da Ordini Clienti: ottimizzata gestione tipo fatturato acquisti quando non presente in anagrafica articolo (#TT03043/26)
> -	SCS - Duplica e Manutenzione Listini Conto Lavoro: Adeguato l’aggiornamento degli scaglioni utilizzando i codici di arrotondamento predefiniti. (#TT2841/26)
> -	SCS - Rientri di conto lavoro: Modificando il costo dell’articolo di un rientro già caricato l’aggiornamento viene effettuato anche nel costo del movimento di magazzino. (#TT2182/26)
> -	SD - Duplica e Manutenzione Listini vendita: Adeguato l’aggiornamento degli scaglioni utilizzando i codici di arrotondamento predefiniti. (#TT2841/26)
> -	SD - Listini di vendita: allineata la struttura grafica agli altri listini presenti per garantire uniformità dell'interfaccia e maggiore coerenza nella consultazione.(#TT03070/26)
> -	SD - Sdi - implementazione HR - Fina Reporting (#TT03138/26)
> -	SH - Clear Extradata filter and display grid when profile change in filter form (#TT02223/26)
> -	SH - WEB - risolto caso per cui non era possibile codificare un nuovo fornitore dalle fatture di acquisto elettroniche (#TT03134/26)
> -	WM - Analisi disponibilità: Corretto filtro Codice Articolo in griglia, che non funzionava correttamente se abilitato il flag “Dettaglio distinta base”. (#TT02928/26)
> -	WM - Calendario Spedizioni: Corretta destinazione in riquadro rimuovendo informazioni duplicate e provincia errata. (#TT02254/26)
> -	WM - Dettaglio UDC: Allineata lettura causali di carico/scarico a Gestione UDC. (#TT00852/26)
> -	WM - Duplica articolo: attivata duplicazione anche del flag Default WMS (#TT02277/26)
> -	WM - Stampa Scheda Costi Prototipi: Corretto costo totale unitario tenendo conto della quantità. (#TT02300/26)
> -	WMS - Gestione Spunta: abilitato spunta UDC già create, sia mantenendo il codice UDC che in creazione di nuova UDC. (#TT00858/26)
> -	WMS - Gestione UDC: Sistemata griglia risultati nella form di ricerca parzialmente fuori schermo e pulisci tutto che non cancellava l’articolo. (#TT02949/26)
> -	WMS - Giacenza UDC: Disattivato raggruppamento per lotto. (#TT02615/26)
> -	WMS - Inventario UDC: Aggiunta possibilità di ripresa dell’inventario precedente. (#TT00860/26)
> -	WMS - Liste di trasferimento: Sistemato layout in sovrapposizione su griglia dettaglio. (#TT02456/26)
> -	WMS - Liste UDC: Corretto errore “Inserire il Tipo”. (#TT02948/26)
> -	WMS - Ricevimento Merce: Ripristinato focus sul numero in apertura form di ricerca. (#TT02946/26)

### Patch 804.007 - 10/07/2026

> -	CRM - WEB campagne - corretta visibilità dati contatto in una campagna (#TT02921/26)
> -	CRM - WEB corretta visualizzazione descrizione attività nei workflow (#TT02920/26)
> -	FI - fix giroconto partite - null reference - aliniamento con SP fluentis2015 (#TT03018/26)
> -	FI - Partial unaccounting invoice due to Maturity Reservation (#TT02798/26)
> -	FI - revisione calcolo scadenze nei compensi professionisti, verifica del tipo calcolo partite (#TT02866/26)
> -	MES - Produzione: corretta anomalia nel filtro della Stampa del Foglio di Lavoro, dove il filtro per Macchina non veniva applicato correttamente. (#TT02936/26)
> -	PM - WEB Planner risorse e Planner generale - ripristinata scroll bar nel caso di selezione di più calendari e ripristinato bottone per cancellare riga risorsa (#TT02988/26)
> -	PM - generazione fatture da progetto ripristinato filtro di ricerca per date (#TT03003/26)  
> -	PM - wpf/web ripristinata possibilità di aggiungere allegati tramite drag&drop nell'apposita area legata alle spese intervento (#TT03009/26)  
> -	corretto tracciato import offerte da Bizlink, nel caso di più società con diversi dipartimenti
> -	PR - acquisizione effetti dalle partite, revisione assegnazione divisione attiva (#TT02530/26 )
> -	SCM - Nella procedura di creazione automatica ordini fornitore è possibile aggiungere in griglia, tramite l’object navigator i dati relativi all’utente di creazione. (#TT02218/26)
> -	SCM - Ottimizzazione procedura importazione Ordini Fornitori Excel tramite BizLink per sconti di riga e sconti finali.
> -	SD - Categoria commerciale: ottimizzata possibilità di inserimento campo da object navigator (#TT02925/26)
> -	SD - Fatture di vendita: aggiornamento logica calcolo colli, che viene calcolato sulla base dei dati presenti in anagrafica articolo (confezionamento, tipo UDC, articoli per collo / colli per articolo) e viene sempre arrotondato per eccesso all'unità intera superiore. Il valore viene invece azzerato se il tipo di fatturazione non è immediata (#TT01041/26, #TT02987/26)
> -	SD - Ottimizzazione procedura importazione offerte Excel tramite BizLink per sconti di riga e sconti finali (#TT02696/26).
> -	SD - Ottimizzazione procedura importazione offerte Excel tramite BizLink (#TT02577/26).
> -	SH - Destinazioni/destinatari in anagrafica: impossibilità di salvare nuova destinazione senza avvalorare Ragione Sociale(#TT02766/26)
> -	WM - Picking: Rivisti e corretti i controlli in cancellazione Spunta. (#TT02742/26)
> -	WM - Prototipi - Corretto il calcolo del Totale costo ricaricato. L’applicazione del “Ricarico”, in “Percentuale”, ora viene applicato o sul “Costo industriale” oppure sul “Costo industriale + costi diretti” sulla base di quanto indicato nei “Parametri prototipi” alla voce “Calcolo Totale costo ricaricato con ricarico su”. (#TT02850/26)

### Patch 804.006 - 03/07/2026

> - Crm - Campaign - create new and insert contacts - close and reopen required to refresh list(#TT02919/26)
> - Crm - Campaign - FL Browser: crm campaing read only field - in the wpf are ok (#TT02921/26)
> - MES - Dichiarazioni di produzione: corretta anomalia su mancata indicazione di magazzino, causale e ubicazione di consumo nelle dichiarazioni di fasi successive alla prima. (#TT02455/26)
> - MS - Pianificazione Generale: risolto bug che causava un errore nell’utilizzo del filtro in griglia nella colonna “Codice Articolo” (#TT02876/26)
> - SCM - Risolta anomalia in fase di apertura tramite il RibbonReportDesigner nel report PurchaseOrderHoldingValue(#TT00634/26)
> - SD - File sdi XML: corretta formattazione dell'indirizzo nel file xml da inviare allo sdi (#TT01857/26)
> - SH - WEB - risolto caso di eccezione in fase di creazione nuovi documenti in presenza di workflow e con un utente con ruoli con restrizioni (#TT02918/26)

### Patch 804.005 - 01/07/2026

> - ARM - fix Right Form Save button enabled when form opened (#TT02002/26)
> - FI - Aggiunto supporto per società diverse e sandbox di test per i pagamenti elettronici
> - MS - Capacità Centri di lavoro: risolta anomalia relativa ai tempi di lavorazione indicati nella fase di lavorazione, rispetto a quelli visualizzati graficamente nell’istogramma delle capacità, quando il numero delle macchine e/o degli operai è maggiore di uno. (#TT02624/26)
> - SD - L'invio delle Offerte per email prende l'Indirizzo alternativo inserito in Anagrafica cliente relativo alle offerte (#TT02862/26)
> - WM - GetItemStockSummary: corretto filtro per fase standard in lettura giacenze. (#TT02857/26)
> - WMS - Spunta Picking: Aggiunto filtro per fase standard su giacenza per ubicazione della scheda Conferma. (#TT02857/26)

### Patch 804.004 - 30/06/2026

> - ARM - Consider Connection Public Url when publish from Working Unit;
> - CPQ - Aggiunto supporto a nodi ereditati nella configurazione della distinta base all’interno della configurazione principale
> - FI - Aggiunto supporto alle società nei pagamenti elettronici versione 1.0 per retro-compatibilità. Aggiunta anche gestione Sandbox per i test.
> - MS - AFCS. Risolto un bug relativo ad una indicazione errata del codice di magazzino nella scheda dei fabbisogni dipendenti.(#TT02834/26)

### Patch 804.003 - 29/06/2026

> -	MES - Generazione commesse di produzione: corretta anomalia che generava dei prototipi commesse di produzione diversi rispetto a quelli richiesti dal tab ordini clienti. (#TT02682/26)
> -	MS - M.R.P. - Ora, se si attiva o disattiva il parametro “Controllo fabbisogni con generazione ordini pianificati” viene memorizzato e, alla successiva riapertura della form, il parametro rimane impostato all’esecuzione precedente. (#TT02664/26)
> -	PM - FL Browser: planner and resource planner don't show filters column (#TT02819/26)
> -	SCS - Rientri di conto lavoro: Modificando il costo dell’articolo di un rientro già caricato l’aggiornamento viene effettuato anche nel costo del movimento di magazzino. (#TT2182/26)

### Patch 804.002 - 26/06/2026

> -	FI - creazione intrastat da registrazioni, revisione per visualizzazione pop up di 'Elaborazione...' in corso, ottimizzazione, esecuzione arrrotondamento all'unità della massa netta tramite pulsante di raggruppamento anche quando non c'è nulla da raggruppare (#TT02749/26, #TT02699/26)
> -	PR - Anomalia acquisizione effetti attivi - procedura apparentemente conclusa ma schermata in attesa (#TT02530/26)
> -	SH- Nella griglia di ricerca - tab workflow, verranno mostrati solo i documenti per cui c’è un workflow attivo, gli altri documenti saranno esclusi e rimarranno visibili nella griglia principale di ricerca (#TT01839/26)
> -	WM - Scarico documenti per fase standard: Corretto controllo giacenza non per fase standard. (#TT02843/26)

### Patch 804.001 - 26/06/2026

> -	Add QuickActions script editor to Blazor App
> -	Arm - Regole di accettazione su transizione workflow (#TT02593/26)
> -	FI - Import estratto conto, revisione selezione partite non collegate a registrazioni (#TT02842/26)
> -	MES - Ora vengono proposte correttamente i magazzini e le causali di consumo dei semi lavorati. (#TT02743/26)
> -	MES - Ordini di produzione: Magazzino e Causale di versamento dell’articolo da produrre, presenti in testata al documento, sono stati disabilitati in quanto copia del Magazzino e Causale di versamento indicati nell’ultima fase di lavorazione produttiva e movimentabile. (#TT02416/26)
> -	PR - file ACH in vendor payments (#TT02848/26)
> -	PR - rilascio parser di gestione riferimento creditore in file bonifici Sepa (#TT02844/26)
> -	Rilascio import excel per estratto conto banche Usa (Wise, United, Truist, Piemonte)
> -	SD - Ordine cliente: ottimizzazione gestione ExtraData nelle righe articoli (#TT02750/26)
> -	SD - Offerte gerarchiche tab materiali - corretta casistica di gestione valuta diversa tra offerta cliente ed ordine fornitore/fattura fornitore da cui sono presi i costi dei materiali (#TT02791/26)
> -	Update DevExpress Components for BizLink SpreadsheetSchems