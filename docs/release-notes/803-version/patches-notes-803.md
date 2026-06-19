---
title: Patch Notes v803
sidebar_label: 🔧 Patch Notes v803
sidebar_position: 1
---

### Patch 803.0026 - 19/06/2026

> -	CO - salvataggio modelli di riclassificazione, ottimizzazione (#TT02665/26)
> -	CRM - Ticket - ripristinata possibilità di modifica extradata in seguito a salvataggio ticket (#TT02613/26)
> -	Fi - Valorizzazione area acquisti/vendite (#TT02678/26)
> -	SCM – Creazione automatica ordini fornitori da RDA: ottimizzazione gestione data richiesta consegna e data consegna in prototipi ordine (#TT02154/26).
> -	SCM – Duplicazione fatture di acquisto: corretta la gestione del riporto della data di competenza nella fattura duplicata (#2459/26).
> -	SCM - Ottimizzazione procedure di rollback carico e scarico documenti con articoli gestiti a lotti e serial number (#TT00744/26).
> -	SCS - Extradata Conto Lavoro: Implementata propagazione degli extra-data dagli ordini conto lavoro ai DDT di consegna. (#2617/26)
> -	SH - Ripristinata funzionalità per cui nelle corpo delle email inviate da workflow, sono inclusi i link agli stati alternativi, che permettono l'avanzamento del workflow da email (#TT02687/26)
> -	SH - workflow log - risolto caso per cui una attività di workflow completata tramite task utente, non mostrava più la descrizione (#TT01373/26)
> -	Solved bug to Add more than one object to Excel Imports

### Patch 803.0025 - 15/06/2026

> -	FI - revisione assegnazione numero cespiti nella procedura di suddivisione cespiti dentro la registrazione contabile (#TT02419/26)
> -	FI - revisione calcolo importi per registrazione automatica giro iva da stampa liquidazione iva definitiva (#TT02548/26)
> -	FI - Calcolo Provvigioni: aggiunta visibilità dei parametri di filtro nella stampa Amministrazione > Percipienti > Calcolo Provvigioni. Rif #TT02180/26
> -	FI - ricerca compensi, revisione applicazione filtro
> -	PR - Gestione della liquidità: revisione inserimento righe disponibilità bancarie da cash flow e da ricerca registrazioni (#TT01923/26 - #TT02211/25 - #TT03176/25)
> -	SCM - Bolle di Acquisto Rollback Carico Lotti e Serial Number: risolto il rollback dei movimenti di carico da bolla di acquisto, l’indisponibilità era causata dal fatto che i movimenti dei ddt valorizzati in fattura non venivano conteggiati correttamente. (#TT744/26)
> -	SD - Blocco eliminazione righe su Riepiloghi Iva/scadenze su elenco Fatture Vendita post consegna allo SDI (#TT02532/26)
> -	SD - Fatture di vendita: risolta l'errata applicazione degli sconti finali nella procedura di creazione da DDT per gli articoli con parametro 'Nessuna condizione commerciale' attivo (#TT02260/26)
> -	SH - Risolto un problema di blocco della riga nella griglia di inserimento che si verificava al doppio clic sui campi ComboBox relativi a oggetti referenziati, in assenza di filter widget o filter result.

### Patch 803.0024 - 12/06/2026

> -	Arm - fix merge (#TT02594/26)
> -	FI - aggiunta visibilità dei parametri di filtro nella stampa Amministrazione > Percipienti > Calcolo Provvigioni. Modifications inside the form calculate commission report can have impact on profiles. (#TT02180/26)
> -	FI - Import bank account (#TT02271/26)
> -	FI - revisione contabilizzazione nota di credito acquisti con segni misti e date competenza differenti (#TT02545/26)
> -	MES - Costificazione Ordini di produzione: corretta anomalia che non considerava le variazioni di Macchina e/o Gruppo manodopera nelle Dichiarazioni di produzione rispetto a quelli predefiniti nella Fase di lavoro. (#TT02400/26).
> -	MS - Pianificazione generale: corretta un'anomalia nel controllo della disponibilità degli articoli richiesti dagli Ordini cliente quando il magazzino di vendita non era compreso tra quelli considerati dal calcolo della disponibilità. (#TT02573/26)
> -	PR - Extend the PR_FileTypes column PRFTY_Extension to 4 chars (#TT02586/26)
> -	SD - Corretta visualizzazione categoria merceologia in procedura “Duplica e manutenzione listini di vendita” (#TT02219/26)
> -	SD - Corretta visualizzazione sconti di riga e riepiloghi su DDT creato con “Evasione DDT” da elenco ordini clienti (#TT02585/26).
> -	SD - Corretta visualizzazione stato evasione ordine cliente da proprietà. Modifications inside the SalesOrder property form can have impact on profiles. (#TT02468/26).
> -	SD - Corretto ricalcolo colli-pesi su righe ordine cliente al variare della quantità alternativa (#TT00803/26)
> -	SD - Evasione Ordini Cliente: È stata introdotta la gestione degli ordini cliente con totale negativo, tipicamente utilizzati per rappresentare un rientro merce anziché una vendita. Nei casi di ordine con totale negativo le quantità e/o i prezzi vengono automaticamente gestiti con segno negativo (-). Tali ordini possono essere evasi esclusivamente tramite fatture con natura Nota di accredito. L’evasione di questi ordini è consentita solo all’interno di una nuova fattura con Tipo impostato come Nota di accredito. Non è possibile evadere questi ordini direttamente dal filtro Ordini. (#TT1868/26)
> -	SD - offerta già convertita in ordine, risolto caso per cui convertendo nuovamente veniva dato messaggio con esito positivo ma l’ordine non veniva creato effettivamente (#TT02496/26)
> -	SH - Corretto anomalia del pulsante refresh all'interno del ribbon dashboard (#TT02321/26)
> -	WMS - Spunta Picking: Aggiunto ordinamento in prelievo righe picking per Ubicazione e Priorità ubicazione. Modifications inside the form can have impact on profiles. (#TT02126/26)


### Patch 803.0023 - 05/06/2026

> -	FI - Creazione registrazione contabile con analitica: revisione della gestione del campo "Descrizione centri di costo", ora impostato come sola lettura. **Attenzione! Questa modifica può impattare sui profili** (#TT01625/26)
> -	FI - revisione gestione pulsante creazione file Intrastat da ricerca intra1 (#TT02355/26)
> -	FI - revisione proposta sottoconti in griglia centri di costo (#TT02420/26)
> -	FI - stampa Riepilogo movimenti contabili con contropartite, revisione repository method (#TT02356/26)
> -	MES - Segnalazioni: Permesso rollback registrazione a seguito di rollback trasferimento (#TT01145/26)
> -	MS - AFCS. In caso di mancanza materiale durante la lavorazione di un task, il messaggio di warning ora specifica qual è l'articolo mancante (#TT02440/26)
> -	MS - Capacità Centri di lavoro: corretta l’anomalia sulla proposta del periodo visualizzato, diversa dal filtro impostato, allo spostamento di una fase tra due centri di lavoro (#TT02289/26)
> -	MS - Ordini pianificati - L’esecuzione delle procedure di Pianificazione generale, M.R.P., la funzionalità di Completamento dati ordine e la variazione del Tipo di approvvigionamento dell’Ordine pianificato, propongono i magazzini e le causali di versamento e consumo sulla base Tipo di approvvigionamento: Acquisto e Produzione dai Parametri degli Ordini di produzione, Conto lavoro dai Parametri di Conto lavoro (#TT02266/26, #TT02422/26)
> -	MS - Rilascio ordini pianificati: risolta l'anomalia che, al rilascio di Ordini pianificati di produzione, veniva generata una exception (#TT02448/26)
> -	PM - Aggiornato report Dettaglio interventi - introdotto totale imponibile e migliorata gestione label colonne.
> -	PR - revisione gestione griglia Gestione fidi in caso di applicazione filtri (#TT02250/26)
> -	PR - riconciliazione CC, revisione import file di testo Cbi per gestione conti bancari diversi (#TT02332/26)
> -	SCM - Corretta stampa diretta in registro sdi documenti acquisto in entrata (#TT02149/26)
> -	SCM - Creazione Automatica Ordini - Ordini clienti: campo “Tipo fatturato acquisto” popolato in base ad anagrafica articolo (#TT02364/26)
> -	SCM - Creazione automatica ordini fornitori - Ordini clienti: generazione di ordine fornitore con flag abilitato “Esplosione livello da struttura distinta” per articoli senza Distinta Base (#TT2439/26)
> -	SCM - Dettaglio righe Ordine: Aggiunto filtro per ordini e righe articolo non evasi (#TT1875/26)
> -	SD - Creazione Ordini Fornitori da Ordini clienti: se l’articolo non ha il fornitore preferenziale viene bloccata la creazione dell’ordine fornitore e visualizzato il messaggio (#TT2207/26, #TT02439/26)
> -	SD - Gestione lotti in fase di picking collegato a ordine cliente: Se, durante il picking generato dall’evasione di un ordine cliente, viene rimosso il lotto precedentemente prenotato, tale lotto viene automaticamente eliminato anche dall’ordine cliente. Questo comportamento consente di liberare correttamente la prenotazione, evitando che rimanga impegnata sull’ordine (#TT1700/26)
> -	SD - Sincronizzazione ordine cliente e progetto creato automaticamente dall’ordine: Nel caso in cui venga modificato un ordine collegato a un progetto già utilizzato in altri moduli, viene visualizzato un messaggio informativo. Il messaggio segnala che le modifiche apportate all’ordine non saranno replicate nel progetto, in quanto quest’ultimo risulta già referenziato, indicando anche il modulo coinvolto (#TT1828/26)
> -	SH - Corretto il blocco dell'applicazione che si verificava quando veniva modificata la numerazione delle righe della griglia (#TT01394/26)
> -	TR - Corretto filtro di ricerca della data scadenza in Effetti. **Attenzione! Questa modifica può impattare sui profili** (#TT02491/26)
> -	WEB - aprendo documenti di società diverse in contemporanea, veniva visualizzata un'eccezione (#TT02446/26)
> -	WM - Gestione UDC: Abilitato inserimento/modifica extra data per UDC caricate (#TT01258/26)
> -	WM - Piani di Carico: Calcolo disponibilità ad oggi se data consegna nel passato in creazione piano (#TT02464/26)
> -	WM - Piani di Carico: Corretto calcolo disponibilità in presenza di varianti articolo in creazione piano. **Attenzione! Questa modifica può impattare sui profili** (#TT01960/26)
> -	WM - Registrazioni di Magazzino: Inibita modifica/inserimento per date non successive ultima chiusura (#TT02429/26)
> -	WMS - Ricevimento Merce - UDC create sempre con stesso anno dell’ordine fornitore (#TT00077/26)

### Patch 803.0022 - 28/05/2026

> -	CPQ - Aggiunte alcune funzionalità per la generazione dele BOM d configuratore e ottimizzate le funzione di selezione risposte e creazione configurazioni.  
> -	FI - revisione gestione segni in causali automatiche con prima registrazione negativa (#TT02176/26)
> -	SCM - Creazione Automatica Ordini Fornitori: la creazione Ordini Fornitori con l’opzione di proposta fornitore e prezzi, “Fornitore con migliore prezzo di acquisto”, tiene conto anche degli scaglioni di prezzo in funzione della quantità (#TT02545/25)
> -	SCM - Creazione Automatica Ordini: La creazione degli Ordini Fornitore (OF) con le opzioni di proposta fornitore (“da fornitore” e “per miglior prezzo di listino”) tiene conto degli scaglioni di prezzo in funzione della quantità. È inoltre possibile gestire automaticamente la priorità di applicazione degli sconti, nel caso siano presenti più condizioni con lo stesso tipo (#TT01011/26)
> -	SCM - Coretta valorizzazione parziale di commessa a seguito di ordine fornitore con procedura “evasione da progetto” (#TT01632/26)
> -	SH - allineati campi SHCNTC_Description e SHCH_Description per evitare errori in fase di storicizzazione di una anagrafica (#TT02151/26)
> -	WM - Corretto un bug nell’algoritmo di aggiunta Extra Data agli articoli
> -	WMS - Corretto popup errore Fluentis (#TT00937/26)
> -	WMS - Ricevimento Merce: DDT mantiene prezzo ordine anziché leggerlo dal listino (#TT01879/26)


### Patch 803.0021 - 26/05/2026

> -	SH - Consentito il salvataggio del comando anche in assenza dei relativi permessi (#TT02125/26)
> -	CO - revisione driver di progetto nell’elaborazione del consuntivo di progetto (#TT01593/26)
> -	CPQ - Risolto problema di sessione NHibernate errata nella creazione delle distinte da configurazione.
> -	E’ stato disabilitata la visualizzazione grafica delle Ubicazioni su Web (#TT01810/26)
> -	FI - Aggiunto il flag Includi scadenze non sollecitate nella form di generazione solleciti che, in caso di filtro per data sollecito non poteva restituire le partite mai sollecitate. **Attenzione! Questa modifica può impattare sui profili** (#TT01954/26)
> -	FI - Corretta anomalia nella cancellazione dei clienti dalla lista esclusi da solleciti automatici (#TT01837/26)
> -	FI - Revisione ricalcolo importi di riga Cdc quando si interviene nella colonna della percentuale. Revisione proposta sottoconto se si inserisce una riga manuale a partire dalla tendina del centro di costo. Revisione assegnazione collegamento alla riga del giornale di origine (#TT02150/26)
> -	Import paghe da zucchetti, revisione gestione data di riferimento e riferimento cdc (#TT05241/25)
> -	Modifiche al framework per griglie con campi non attivati correttamente (#TT02250/26)
> -	Risolto il problema su algoritmo di creazione NIR da bolla di acquisto quando si usa un lotto di scarico per documenti di reso (#TT02240/26)
> -	Risolti problemi relativi alla creazione del NIR con lotti (#TT02240/26)
> -	SCM - Importazione Prezzi Fornitori: E’ stata ottimizzata la procedura di selezione e importazione con un numero di righe che supera le migliaia (#TT2035/26)
> -	SD - Creazione Ordini Fornitori da Ordini clienti: se l’articolo non ha il fornitore preferenziale viene bloccata la creazione dell’ordine fornitore e visualizzato il messaggio (#TT2207/26)
> -	SH - API cambi del giorno (#TT00620/26)
> -	SH - workflow gestito da ricerca documenti, corretto caso per cui le nelle transizioni, le condizioni impostate nel campo ignora azione non venivano considerate (#TT02352/26)
> -	WM - Prototipi: corretta anomalia all’inserimento di un nuovo componente, con successiva importazione della distinta base del medesimo componente. Il nuovo componente veniva eliminato e i materiali, presenti nella nuova distinta base, li importata al livello 1 del padre (#TT02122/26)
> -	WMS - Aggiunto comando per generare una exception (#TT00937/26)
> -	WMS - Liste Trasferimento UDC: Inibita aggiunta UDC su liste in stato “Trasferita” (#TT01154/26)
> -	WMS - Ricevimento merce: Corretto quantità alternativa che rimaneva valorizzata (#TT01217/26)
> -	WMS - Ricevimento merce: Inibita creazione riga aggiuntiva con quantità zero se presente una unità di misura alternativa (#TT05080/25)
> -	WMS - Ricevimento merce: Inibita doppia apertura form con doppio click su “Creazione DDT acquisto” (#TT00939/26)


### Patch 803.0020 - 15/05/2026

> -	CO - nelle registrazioni del controlling, rivisto l’inserimento manuali di righe nella griglia dei cdc (#TT02152/26)
> -	CPQ - Aggiunte nuove funzioni alla classe Helper dello scripting nelle configurazioni
> -	CPQ - Risolto problema nella creazione delle distinte base da configuratore
> -	FI - errore apertura partite (#TT02171/26)
> -	FI - migliorato controllo di quadratura per dimensione tra movimenti contabile e centri di costo (#TT01297/26)
> -	FI - migliorato messaggio di warning che non riconosceva correttamente i segni nell’associazione tra file sdi ricevuti e registrazioni contabili in caso di note di accredito ed Autofatture (#TTT01425/26)
> -	FI - nella form di ricerca ‘Commissioni’ è stato inserito un nuovo flag di filtro ‘Da liquidare’, impostandolo si abilita la data di riferimento che sarà utilizzata per visualizzare le righe in maturazione. **Attenzione! Questa modifica può impattare sui profili** (#TT01385/26)
> -	FI - revisione gestione inizio date competenza per le riaperture degli assestamenti, per il caso di rettifiche con data inizio successiva all’inizio esercizio successivo (#TT02150/26)
> -	MS - AFCS - incrementata lista parametri input per calcolo personalizzato tempo di attrezzaggio (#TT01965/26)
> -	MS - M.R.P.: corretta anomalia per articoli che sono componenti di altri articoli fittizi (#TT02170/26)
> -	MS - Pianificazione generale: corretta anomalia generata alla generazione di Ordini pianificati di produzione con l’utilizzo di materiali alternativi indicati in Distinta base (#TT01855/26)
> -	Portal - Conferma Picking: Aggiornamento flag stampato da mobile (#TT01751/26)
> -	PR - creazione ed esportazione cash flow per DocFinance, ottimizzazione ed esclusione dall’elaborazione di dati inutili per il file (#TT02184/26)
> -	SD - Gestione Data Competenza: In fase di evasione ordini, la data di competenza viene automaticamente ricalcolata sulla base della data del documento generato (DDT o fattura)(#TT1950/26)
> -	SH - Considerata la condizione di attivazione del workflow nei filtri (#TT01839/26)
> -	WMS - Spunta Picking: Incrementate righe in griglia tab Articoli (#TT02112/26)

### Patch 803.0019 - 08/05/2026

> -	CO - chiusure infrannuali, revisione memorizzazione id delle registrazioni utilizzate, memorizzazione flag di "Chiusure per divisione", revisione procedura di Scritture di integrazione per utilizzare il campo "Chiusure per divisione" memorizzato. **Attenzione! Questa modifica può impattare sui profili** (#TT01948/26)
> -	CPQ - Bug fixing su alcuni errori in UI e modifica comportamento selezioni nelle matrici helper
> -	FI - in anagrafica banche aggiunto campo di assegnazione dello schema excel di import, utilizzo nella form “Importa estratto conto”, nella quale è stato aggiunto campo per memorizzare un eventuale identificativo di riga. **Attenzione! Questa modifica può impattare sui profili** (#TT01718/26)
> -	FI - WEB - registrazioni contabili - tab analitica - risolto caso per cui cambiando il centro di costo su diverse righe in modo sequenziale, si verificava un'eccezione (#TT01775/26)
> -	MES - Soluzione M.E.S.: è stata migliorata l’automazione della soluzione. Ora, l’operatore, non serve che indichi su quale Centro di lavoro inizia a lavorare. Questo viene automaticamente proposto alla selezione della Fase. Se la Fase: non è ancora stata iniziata, proporrà il Centro di lavoro previsto nella Fase selezionata; è già iniziata, proporrà l’ultimo Centro di lavoro dichiarato (#TT00250/26)
> -	MS - M.R.P.: il calcolo del livello minimo degli articoli ora viene calcolato non più sulla versione di default ma su tutte le versioni utilizzate. Precedentemente alla modifica, gli articoli utilizzati come componenti in distinta base con una versione diversa da quella di default, non venivano considerati correttamente dall’elaborazione (#TT01809/26)
> -	MS - Pianificazione generale: è stata resa disponibile la possibilità di aggiungere, dall’object navigator, dei filtri di ricerca aggiuntivi (#TT01774/26)
> -	PR - la creazione insoluti in società con gestione Commissioni non verifica più se l’effetto è accreditato (#TT01050/26)
> -	PR - nella riconciliazione conti correnti, quando la riga riconciliata è legata ad una registrazione contabile creata da un’altra procedura allora l’operazione di scollegamento non esegue più la cancellazione della registrazione; se la registrazione è manuale, invece, viene restituito un messaggio di richiesta conferma della cancellazione (#TT01495/26)
> -	SCM - Richieste di Acquisto: In dettaglio righe richieste di acquisto aggiunta colonna con il costo totale di riga (#TT02123/26) **Attenzione! Questa modifica può impattare sui profili**
> -	SD - Creazione da ddt: risolto assenza modalità di pagamento nelle valorizzazioni di più documenti implicando clienti con parametri raggruppamento in anagrafica (#TT01955/26)
> -	SD - Offerta, ordine, ddt, fattura di vendita, consegna conto lavoro: corretto errore cancellazione articolo con prezzo per unità di misura alternativa in riga esistente (#TT02105/26)
> -	SH - Creazione anagrafica da documenti di acquisto in entrata: revisione delle procedure per la generazione dell’anagrafica a partire dai documenti di acquisto in entrata (#TT00774/26)
> -	SH - Corretto bug nella cancellazione delle sottocollezioni con estensione custom (#TT00969/26)
> -	WebAPI acquisti - risolere problmi di aggiornamento valori su righe articoli (#TT02091/26)
> -	WM - Lista Trasferimento UDC: Corrette incongruenze a seguito di rollback (#TT01145/26)
> -	WM - Stampa Inventario a quantità: Risolta errata ubicazione in stampa (#TT01891/26)
> -	WM - WebApi ImportWarehousePostings: Corretta importazione Serial Numbers (#TT01788/26)
> -	WMS - Gestione spunta: Corretto comportamento con riga picking senza causale o senza ubicazione (#TT01862/26)

### Patch 803.0018 - 29/04/2026

> -	CO - Nei valori di controllo, revisione gestione dati del tab ‘Valori Commessa’ (#TT01816/26)
> -	FI - Corretto errore nella stampa Calcolo provvigioni modulo amministrazione che non visualizzava correttamente i dati Ticket (#TT01701/26)
> -	FI - Creati nuovi parametri `Gen-GlobalSettings_ManageSafT` e `GlobalSettings_ItemMUWeightsForIntrastat` (#TT01888/26)
> -	FI - form di ammortamento cespiti, revisione ricerca cespiti per esclusione righe già totalmente ammortizzate in anni precedenti ma con righe aggiuntive già ammortizzate nell’anno ricercato (#TT01465/26)
> -	FI - Gestione partite di anticipo: nel tab ordini cliente e DDT sono state aggiunte le colonne con il codice e la descrizione della soluzione di pagamento del documento. **Attenzione! Questa modifica può impattare sui profili** (#TT01636/26)
> -	FI - Migliorato controllo di quadratura tra i centri di costo e il movimento contabile nei casi in cui nel piano dei conti non è presente un abbinamento conto-centro (#TT01297/26)
> -	FI - nella compensazione partite, revisione gestione cancellazione conto di testata (#TT01800/26)
> -	FI - Rilascio stampe Tax Statistic per localizzazione US, revisione stringhe del Bilancio di Esercizio per terminologia US
> -	FI - Scritture di assestamento, revisione gestione inserimento assestamenti per centri di costo (#TT01946/26)
> -	MES - Foglio di lavoro: corretta l’anomalia sulla ricerca del filtro relativo agli Ordini cliente (#TT05177/25)
> -	MS - AFCS - se un ordine di produzione aveva lo stesso componente elencato più volte e riferito alla stessa fase si poteva creare un errore (#TT01734/26)
> -	MS - Corretto bug nel calendario della capacita centri di lavoro che non considerava correttamente i valori nel caso in cui fosse inserito 0 come numero macchine o operai (#TT01042/26)
> -	MS - M.R.P.: corretta l’anomalia che, durante l’aggiornamento dei Parametri di esecuzione dell’elaborazione, generava un time-out con relativa exception (#TT01203/26)
> -	MS - Pianificazione generale - Corretta anomalia che non rigenerava gli Ordini pianificati in ritardo rispetto alla data odierna se richiesto il “Controllo documenti in ritardo con ATP” (#TT01769/26)
> -	MS - Rilascio ordini pianificati - Al rilascio di un Ordine pianificato di produzione con fase esterna, viene verificata la presenza, nei Parametri di Conto lavoro, delle Causali necessarie per la movimentazione. In loro assenza viene visualizzato un messaggio di errore e l’Ordine pianificato non viene rilasciato (#TT01583/26)
> -	MS - Sequenza fasi e Capacità Centri di lavoro: risolta anomalia che presentava, nelle colonne dei Tempi Macchina e Manodopera la Quantità di fase (#TT01963/26)
> -	MS - Stampe - Ordini di produzione: revisionato il calcolo del costo; ora il tempo di sospensione non viene considerato nel calcolo del costo (#TT01692/26)
> -	MS- AFCS - Corretto bug relativo a una fase successiva a una fase di tipo lotto (#TT01633/26)
> -	QY - Controllo articoli - Importazione articoli da controllare: corretta anomalia sulla ricerca e associazione dei Piani di controllo, anche obsoleti, sulla base della data del documento importato (#TT01883/26)
> -	SCM - Importazione Prezzi Fornitore: Migliorate le performance di importazione di numero considerevole di articoli (`>6000 righe <10000 righe`) con creazione articoli e creazione listino fornitore (#TT1302/26)
> -	SCS - Registrazioni Rientri - Rollback : esplicitati i messaggi di mancanza giacenza (#TT01604/26)
> -	SCS - Rientro Conto Lavoro: Per le righe di tipo Nota non viene richiesto nessun altro dato oltre alla descrizione (#TT00800/26)
> -	SD - WEBAPI Import Ordini: se l'ordine è di tipo Con Prezzi Ivati e non è specificato il prezzo automaticamente verrà ricercato un listino con prezzi ivati (#TT01790/26)
> -	SD - Fattura di Vendita - Modifica Progetto (#TT2031/25) Il progetto è modificabile se:  
>> - la fattura non è ancora Controllata per lo SDI  
>> - non è Contabilizzata con una causale che gestisce la contabilizzazione per progetto  
>> - non rappresenta i dati di contratto da riportare nel file XML della fatturazione elettronica tramite il relativo parametro globale  
> -	SDI - Documenti di acquisto in entrata.  E’ stato aggiornato il comportamento dei comandi di stampa e anteprima di stampa:  
>> - Il comando Anteprima di stampa mostrerà la stessa anteprima attualmente disponibile tramite il pulsante Stampa. All’interno dell’anteprima l’utente potrà selezionare la stampante e avviare la stampa.  
>> - Se vengono selezionati più documenti e si utilizza il comando Anteprima di stampa, tutti i documenti selezionati verranno mostrati in un’unica anteprima di stampa. In questo caso non sarà possibile gestire le opzioni fronte/retro, ma sarà comunque possibile stampare più documenti in un’unica operazione.  
>> - Il comando Stampa invierà direttamente il report alla stampante predefinita dell’utente per il report fatture di acquisto, senza visualizzare l’anteprima di stampa.  
>> - Se vengono selezionati più documenti l’utente potrà sfruttare le impostazioni della stampante (ad esempio stampa fronte/retro)(#TT03482/25)   
> -	SH - Corretta l’estrazione del report considerando la natura articolo (#TT00903/26)
> -	SH - Modificata la logica di BusinessDocumentItem-UnitNetPrice (#TT05051/25)
> -	WM - Anagrafica articolo: Salvataggio nota in creazione articolo (#TT01035/26)
> -	WM - Liste Trasferimento UDC: Corretto valorizzazione tipo Udc in griglia (#TT01152/26)
> -	WM - Ottimizzazione import WebApi di registrazione di magazzino (#TT01820/26)
> -	WM - Piani di Carico: Aggiunta data merce pronta articolo in dettaglio piano di carico. **Attenzione! Questa modifica può impattare sui profili** (#TT01902/26)
> -	WM - Stampa articoli non movimentati: Corretto funzionamento flag interesse fiscale (#TT01642/26)
> -	WM - Visualizza Giacenza: Disattivato ridimensionamento form su inserimento progetto in Genera registrazione (#TT01927/26)
> -	WN - Disponibilità lotti: Corretta data movimento lotto in fatturazione di vendita che creava problemi dopo chiusura di magazzino (#TT01543/26)

### Patch 803.0017 - 17/04/2026

> -	CO - revisione elaborazione ammortamenti del controlling (#TT01510/26)
> -	CPQ - Ottimizzate le prestazioni di calcolo delle matrici e risoluzione di alcuni problemi lato core e UI
> -	Creata stampa standard per la form Visualizzazione Bilancio con centri di costo.
> -	CRM - Griglia ricerca ticket - corretto caso per cui colonna extradata non mostrava i dati (#TT01332/26)
> -	FI - calcolo scritture di assestamento, revisione gestione arrotondamenti righe Cdc (#TT01506/26)
> -	FI - Creata stampa standard per la form Visualizzazione Bilancio con centri di costo (#TT01380/26)
> -	FI - il salvataggio della registrazione contabile restituisce un avviso se manca il progetto per i centri di costo della dimensione con 'IsProjectEnabled' true (#TT01641/26)
> -	FI - Implementato Payment_Received for HR eInvoice (#TT01269/26)
> -	FI - Modificata contabilizzazione rata mutuo. Le date di competenza economica sui conti di costo e sui centri di costo vengono impostate pari alla data registrazione anche in presenza del parametro di inserimento “Nessuno per tipo conto servizi” (#TT00569/26)
> -	MES - Dichiarazioni di produzione: se l’Ubicazione proposta per il versamento del Semilavorato WIP viene annullata nella Fase di un Ordine di produzione, durante la Dichiarazione di produzione viene proposta l’Ubicazione associata alla Causale di carico (se presente) altrimenti rimane vuota (#TT01629/26)
> -	MS - M.R.P: corretta l’anomalia che, in presenza di un articolo gestito con dei valori di approvvigionamento e la richiesta di esecuzione MRP considerando anche il passato, proponeva dei reintegri nel passato (#TT01167/26, #TT01545/26)
> -	MS - Pianificazione generale: corretta l’anomalia che, in presenza di un componente comune a due o più righe commessa e se richiesta la pianificazione con raggruppamento per Articolo da produrre, all’Ordine pianificato generato venivano calcolate date di previsto inizio e fine al più tardi (#TT00987/26)
> -	MS - Sequenza Fasi: corrette le anomalie di: rappresentazione dei valori visualizzati nel “Tempo macchina” e del calcolo degli Orari di inizio e fine fase (#TT01612/26)
> -	SCM - Bolle di Acquisto/Fatture Acquisto: Disabilitata la possibilità di cancellare i lotti dopo il carico del documento (#TT1664/26)
> - SCS - Corretto aggiornamento costo in movimento rientro di C/L letto da anagrafica articolo (#TT01357/26)
> -	SD - Creato nuovo metodo per chiamata scripting “Create SalesInvoice from SalesDeliveryNote”. **Attenzione! Questa modifica può impattare sui profili** (#TT01704/26)
> -	SD - Corretto problema nella creazione di fatture proforma con lotti provenienti dal Picking (#TT01074/26)
> -	SD - Corretto problema nel controllo numero colli per articolo negli ordini cliente (#TT01597/26)
> -	SD - WebApi SalesDeliveryNote, SalesInvoice, Picking - evasione da ordine - non permetere evadere righe evase o forzatamente evase (#TT01744/26)
> -	SH - Aggiunto supporto a OCR e elaborazione documenti di importazione con AI (lato server)
> -	SH - Aggiunto supporto pagamenti elettronici
> -	SH - fix barcode retrieval from images within document manager
> -	SH - Profili - Risolto bug il quale in alcuni casi dopo aver aggiunto una colonna, non si poteva più rimuovere (#TT00938/26, #TT01250/26, #TT00614/26)

### Patch 803.0016 - 09/04/2026

> -	Arm - in un ambiente cliente, ora la duplica di un workflow standard crea la copia con natura “customer” (#TT01631/26)
> -	CO - Modifiche alla gestione cost driver e reparti (#TT00030/24)
> -	CO - elaborazione periodi, revisione mensilizzazione dati iniziale (#TT01502/26)
> -	CO - revisione form di ‘Visualizzazione valori Contabilità gestionale’. **Attenzione! Questa modifica può impattare sui profili** (#TT01525/26)
> -	FI - Corretta la gestione delle date di fine validità per gli agenti quando vengono inseriti nelle partite aperte dei clienti (#TT01388/26)
> -	FI - form di stampa Bilancio d’esercizio, impostazione di default del flag ‘Visualizza importi segno negativo’ e della causale esclusa ripresa dai parametri di contabilità, causale di chiusura conti. **Attenzione! Questa modifica può impattare sui profili** (#TT01400/26)
> -	FI - la contabilizzazione fatture di vendita ora riporta destinatario e destinazione nelle partite contabili (#TT00531/26)
> -	FI - la riapertura degli assestamenti ora imposta le date competenza economica delle integrazione con stesso range di date delle righe di giornale (#TT01497/26)
> -	FI - modificata la stampa della certificazione unica ritenute d'acconto. Il campo sesso riportava di default F anche quando il campo nell'anagrafica percipiente era NULL (#TT01315/26)
> -	FI - revisione gestione tendina di selezione dei centri di costo per dimensioni con flag ‘Progetti’ attiva (#TT00030/26)
> -	FI - revisione impostazione progetto nelle righe di analitica delle registrazioni contabili quando la dimensione prevede il flag ‘Abilita progetti’ (#TT01096/26)
> -	Framework - Corretto il conteggio degli stati del workflow (#TT01291/26)
> -	MES - Dichiarazioni di produzione - Corretta l’anomalia che non proponeva Magazzino e Causale di scarto in presenza di un Materiale con una percentuale di scarto predefinita (#TT01246/26)
> -	MS - AFCS: Da magazzino alternativo è ora possibile prelevare la sola quantità che manca in quello principale, invece che tutta la quantità richiesta dall'ordine di produzione (#TT01466/26)
> -	MS - Commesse di produzione - Corretta l’anomalia, durante la costificazione, che non considerava correttamente il costo preventivo delle lavorazioni su Centri di lavoro a tempo fisso moltiplicando il tempo fisso per la quantità da produrre (#TT05668/25)
> -	MS - Corretto bug nel filtro del report degli ordini di produzione che non filtrava correttamente per l’anno indicato nel filtro (#TT01498/26)
> -	MS- AFCS: In caso di attributo di attrezzaggio numerico è stata potenziata la modalità di calcolo aggiungendo una costante. Ora il calcolo è come l'equazione di una retta, cioè del tipo R = c*x + k, dove x è la variazione di valore dell’attributo e k è la costante (#TT01040/26)
> -	PM - Inserimento righe fatturazione nel tab Fatturazione di un progetto - corretta proposta dell’anno in modo che corrisponda all’anno corrente e non all’anno del progetto (#TT01300/26)
> -	QY - Reclami, Non conformità e Azioni correttive - Sono stati revisionati i metodi di calcolo dei contatori delle Tile in modo che rispecchino il numero di documenti associati al relativo flag di stato: Approvato, Accettato, Bloccato e Chiuso (#TT01452/26)
> -	SCM - Corretta valorizzazione dei DDT di acquisto e rientro conto lavoro: è ora possibile valorizzare insieme più righe di DDT di natura diversa (#TT01216/26)
> -	SD - Corretto il funzionamento del filtro di ricerca “confermato” e “non confermato” in Ordini Clienti (#TT01464/26)
> -	SD - Creazione file XML FE: limitato la descrizione dell’indirizzo `<CedentePrestatore><Sede><Indirizzo>` ai 60 caratteri ministeriali (#TT01416/26)
> -	SD - Dopo il trasferimento degli imballi a rendere nella form DDT di vendita, spostandosi tra le righe della griglia i valori vengono visualizzati correttamente (#TT01576/26)
> -	SD - Pesi e Volume in tab trasporto: Corretta visualizzazione UM di misura dei pesi e del volume che in alcuni casi non era visbile anche se correttamente calcolata (#TT01521/26 #TT01530/26)
> -	SD/SCM - Duplica documenti di acquisto/vendita, sviluppata esclusione delle righe di analitica legate a centri di costo non validi alla data (#TT01524/26 - #TT01353/26)
> -	SD - conversione offerta di vendita in ordine - se mancante l'articolo da usare per le righe ordine derivate da risorse offerta, la conversione viene bloccata (#TT01220/26)
> -	SH - Focus su campo Trova eseguendo il comando Ricerca (#TT01361/26)
> -	SH - la creazione degli allegati tramite workflow ora assegna all’allegato del documentale il nome corretto (#TT01341/26)
> -	WM - Analisi disponibilità - abilitato ordinamento anche con dettaglio distinta base (#TT01571/26)
> -	WM - Form di Selezione Lotti da scaricare - Modifiche al layout (#TT01493/26)
> -	WM - Gestione UDC: Blocco spostamento su magazzino diverso anche se stesso codice ubicazione (#TT00440/26)
> -	WM - Picking - Revisione layout dati di dettaglio in griglia di ricerca. **Attenzione! Questa modifica può impattare sui profili** (#TT01463/26)
> -	WM - Prototipi - Corretta l’anomalia che non calcolava correttamente il Costo lavorazione dei componenti di Conto lavoro, in assenza di un listino associato (#TT01526/26)
> -	WM - Stampa packing list: raggruppamento anche per articolo (#TT01567/26)
> -	WM - Tracciabilità lotti: Corretta quantità scaricata lotto anziché movimento in stampa (#TT00622/26)
> -	WMS - - Ricevimento Merci: Focus su barcode dopo conferma di ogni riga (#TT01496/26)
> -	WMS Maui - Conferma Picking/Gestione Spunta - Inibita selezione manuale articolo. **Attenzione! Questa modifica può impattare sui profili** (#TT01494/26)
> -	WMS Maui - Conferma prelievo UDC - focus su campo barcode UDC (#TT04479/25)
> -	SH - reso visibile il flag Visualizza Cambio indiretto nella tabella società. **Attenzione! Questa modifica può impattare sui profili** (#TT01157/26)

### Patch 803.0015 - 26/03/2026

> -	CO - revisione Elaborazione periodi per filtro su divisione, revisione comparazione riclassificazioni per sezione calcolo indici(#TT01390/26)
> -	CPQ - Ottimizzato l’algoritmo di calcolo delle combinazioni valide della matrice completa del configuratore
> -	FI - corretto errore nella stampa Situazione contabile sottoconti che non gestiva correttamente l’opzione Visualizza Valori di apertura (#TT01256/26)
> -	FI - revisione gestione tipo importo ‘Imponibile sottoconto’ per caso note di credito con segni misti (#TT00769/26)
> -	FI - Visualizzazione e compilazione campo ‘Provincia origine’ in scheda Intrastat delle registrazioni e in creazione automatica intrastat vendite da registrazioni. **Attenzione! Questa modifica può impattare sui profili** (#TT01023/26)
> -	PR - corretto calcolo del cashflow per il flusso relativo agli ordini di conto lavoro. In presenza di calcolo del prezzo utilizzando la quantità alternativa non calcolava correttamente il valore dell’imponibile continuando a leggere la quantità e unità di misura principale. Ora utilizza direttamente la proprietà NetAmount (#TT00873/26)
> -	SCM - Importazione Prezzi Fornitore: Corretta la ricerca in filtro per i valori della classe e codice articolo (#TT1114/26)
> -	SD - WebAPI importa bolla di consegna e fattura di vendita - consente quantità superiori a quella dell'articolo dell'ordine di vendita correlato (#TT01384/26)
> -	SD- Corretta la visualizzazione dei decimali nella quantità alternativa nel tab Riepilogo. **Attenzione! Questa modifica può impattare sui profili** (#TT01238/26)
> -	SH - Consider UseDocumentManager flag from “Edit Standard Object” custom property (#TT00699/26)
> -	WEBAPI Import: Risolto l'errore in importazione di un file XML/Json contenente solo proprietà referenze (#TT1197/26)
> -	MES - Corretto bug nella procedura di Generazione lotto degli ordini di produzione che non generava correttamente l’extension per il nuovo lotto (#TT00920/26)

### Patch 803.0014 - 23/03/2026

> -	BI - Switchboards: Corrette le azioni di chiamata del tipo algoritmo (#TT01175/26)   
> -	FI - aggiunto un controllo sull’avvenuta esportazione del tracciato telematico per la comunicazione trimestrale liquidazioni iva che blocca la form dalla modifica dei dati già esportati. **Attenzione! Questa modifica può impattare sui profili** (#TT00972/26)  
> -	FI - Corretta esportazione del tracciato telematico certificazioni uniche delle ritenute d’acconto che non incrementava correttamente la numerazione delle righe dopo la centesima posizione (#TT01198/26)  
> -	FI - revisione contabilizzazione fattura con gestione partite d’acconto, in caso di spese bollo (o altre) aggiuntive ora viene creata una partita separata per l’importo relativo (#TT00891/26)  
> -	FI - revisione form di acquisizione automatica intrastat, disabilitazione pulsante di ricerca finché la ricerca automatica non si conclude (#TT01022/26)  
> -	FI - revisione rollback contabilizzazione per messaggi di blocco non restituiti in interfaccia (#TT01228/26)  
> -	FI - Risolto problema di visibilità nel report di stampa della CU 2026 dei campi relativi alla sezione Dati Previdenziali (#TT00960/26)
> -	FI - Risolto problema di customizzazione relativo a FsCostCenter con la procedura della tabella estensione (#TT01051/26)  
> -	MES - Corretto bug nell’import webapi delle dichiarazioni di produzione riguardo al tag QuantityProduced (#TT01226/26)  
> -	MES - Gestione ordini produzione - bug fix per inserire fase esterne (#TT01192/26)  
> -	MS - AFCS, un task su macchina con regola attrezzaggio può essere messo in produzione anche se i materiali necessari non sono completamente disponibili a magazzino (#TT01282/26)  
> -	MS - AFCS: le giacenze negative vengono ignorate se il relativo flag nei parametri MRP è attivo (#TT01156/26)    
> -	MS - Aggiunta indicazione dell’articolo mancante quando un task su macchina con regola attrezzaggio non può essere lavorato (#TT01232/26)  
> -	PM - progetti - servizio di caricamento campi - abilitato caricamento dati anagrafica articolo - parametri MRP. Potranno quindi essere abilitati gli appositi campi nella load request affinchè siano visibili nelle righe progetto (#TT01286/26)  
> -	PR - Modificato algoritmo di importazione file cbi per i movimenti bancari per considerare tutti i possibili caratteri di controllo LF e CRLF (#TT01009/26)  
> -	PR - revisione dimensione campo FSDocFinancePostingImportError.Line (fluentis.PR_DocFinancePostingImportErrors.PRDFPIE_Line) (#TT01049/26)  
> -	SD - Numerazione ddt di conto lavoro, ddt di vendita, corretto errore di numerazione nel caso in cui Progressione data numero sia attivo (#TT00598/26)  
> -	SD - Conversione offerta in ordine e progetto, gestita propagazione IBAN impostato nella tab pagamenti dell’offerta, anche nella tab pagamenti del progetto (#TT01141/26)  
> -	SH - Anagrafica cliente - Tab Listini: impedito di poter specificare nella stessa riga sia un listino generale che un listino per cliente (#TT1264/26)  
> -	SH - Gestione matrice applicazione tasse, revisione per società e partner non EU (#TT01182/26, #TT01326/26)  
> -	WM - GetItemsStock: Aggiunte request property per unità di misura alternativa (#TT00959/26)  
> -	WM - In fase di creazione ddt/fattura da packing list ora viene riportato correttamente sulla riga dell’articolo il valore presente nel campo Vostro numero riferimento dell’ordine cliente ( #TT01259/26)  
> -	WM - Mappa Ubicazioni per articolo: Corretto errore in inserimento nuove mappature (#TT00612/26)  
> -	WM - WebApi PickingWarehousePosting: Impostato messaggio Success in caso di completamento senza errori (#TT01179/26)  
> -	WMS - Corretto problema in messaggio di errore in WMS per cui i comandi per visualizzare i dettagli e l’invio o meno dell’errore non funzionavano (#TT00937/26)

### Patch 803.0013 - 16/03/2026

> - CO - modifiche nei *cost driver* e nella gestione reparti (#TT00030/24)  
> - CO - La duplicazione delle registrazioni extracontabili del controlling ora mantiene le competenze economiche dei movimenti originali (#TT00981/26)  
> - FI - In testata dell’Intrastat acquisti sono stati inseriti due flag di abilitazione delle sezioni beni o servizi. La creazione dalle procedure automatiche restituisce un messaggio di conferma dell’esclusione delle righe appartenenti a sezioni non abilitate; la creazione del file intra esclude le righe inserite in sezioni beni o servizi non attive. Le modifiche al form Intrastat possono avere impatto sui profili (#TT00823/26)  
> - FI - La contabilizzazione delle scritture di assestamento non assegna più le date di competenza economica per le righe di rettifica (#TT00789/26)
> - FI - Revisionata la contabilizzazione acquisti in società con gestione tasse attiva (#TT00799/26)
> - FI - Risolto un problema di visibilità nel report di stampa della CU 2026 riguardante i campi della sezione Dati Previdenziali. Le modifiche al form “Certificazione ritenute telematica” possono avere impatto sui profili (#TT00960/26)  
> - ImportPurchasePriceLists - Corretto il nome del route “ImportPurchasePriceLists” (#TT01123/26)  
> - MES - Corretto bug nella registrazione delle dichiarazioni di produzione che non riportava correttamente, nel movimento, la quantità alternativa (se utilizzata) inserita nel materiale consumato (#TT01018/26)  
> - MES - Ordini di produzione: implementata la possibilità di eseguire l’algoritmo standard di ricalcolo dei costi degli ordini tramite la API operation *RecalculateCosts*.  
La documentazione è disponibile in Fluentis Integration Documentation, area MES, Production Orders, RecalculateCosts (#TT00397/26)  
> - PM - Risolto un caso in cui, per due o più appuntamenti diversi con stesso tipo documento, numero documento, stato documento e range di date, ma con risorse e WBS differenti, l’appuntamento risultava visibile solo per una risorsa (#TT00951/26)
> - PM - Valorizzazione interventi: nella riga descrittiva in fattura relativa all’intervento viene ora indicata anche la descrizione del tipo intervento, oltre al codice (#TT00775/26)   
> - PR - Risolto errore nella ricerca dei pagamenti fornitori da contabilizzare quando l’oggetto *FSSupplierPaymentDetail* è custom (#TT00483/26)   
> - SD - Corretta la gestione dello storno fatturazione in presenza di articoli con prezzo negativo: in fase di generazione della nota di credito, l’importo viene ora riportato con segno positivo, garantendo la corretta valorizzazione dell’imponibile totale (#TT01045/26)  
> - SD - Scarico magazzino da rendita: Ottimizzata la chiamata dell’algoritmo *UpdateBatchRegister* (#TT01149/26)  
> - SD - Offerte multilivello: gestito messaggio bloccante in fase di conversione in ordine nel caso di codice IVA mancante nei materiali (#TT01031/26)  
> - SD - WebApi SalesInvoice e POS: corretto il comportamento di aggiornamento per evitare la modifica automatica della data con la data corrente (#TT01107/26)  
> - SH - Contatti - Indirizzi alternativi: riportata la ragione sociale a 80 caratteri (#TT01039/26)
> - SH - Gestione Spese: le spese da anagrafica cliente vengono proposte solo alla creazione di nuovi documenti senza origine. In evasione/valorizzazione, le spese valore vengono trasferite tali e quali; le spese percentuali vengono convertite in importo proporzionale. Le spese omogenee (stesso tipo) provenienti da più documenti vengono sommate. Le variazioni di quantità/prezzi/sconti nel documento evaso richiedono una correzione manuale delle spese; viene mostrato un avviso (#TT00511/26)  
> - WM - Abilitato il cambio classe articolo tramite WebAPI (#TT05186/25)  
> - WM - Distinta Base: corretto l’errato aggiornamento dell’unità di misura nei componenti con UM predefinita (#TT00363/26)
> - WM - Liste di prelievo UDC: aggiunto un nuovo report “Packing list” (#TT01567/26)
> - WM - Piani di Carico: ripristino l’evasione degli ordini cliente in stato “Rilascio” con cancellazione del picking (#TT01008/26)  
> - WM - Piani di Carico: rivista la gestione dell’unità di misura in creazione lista UDC (#TT05221/25)  
> - WM - Prototipi: corretta l’anomalia che non considerava correttamente la politica di sconto alla proposta “Miglior prezzo di listino fornitore” (#TT00747/26)  
> - WM - Valorizzazione di Magazzino: ora è possibile cancellare movimenti di magazzino che presentano una referenza negli errori di chiusura (#TT00888/26)   
> - WMS - Corretto bug nelle form WMS di conferma spunta e ricevimento merci che si verificava quando veniva creata una seconda unità di carico (#TT01128/26)

### Patch 803.0012 - 05/03/2026

> - CO - implementato messaggio di avviso utente quando si cerca di cancellare un nodo in un modello di riclassificazione, se è referenziato in altre parti del modello ( T00842/26)
> - CO - revisione elaborazione periodi, esclusione delle righe con date competenza nulle (#TT00971/26)
> - CRM - Introdotto caricamento tra i dati del ticket dell’agente principale del contatto CRM (#TT00926/26)
> - FI - change D300 - fiscal RO changes add new fields (#TT00820/26)
> - FI - contabilizzazione movimenti di magazzino, revisione gestione descrizione di dettaglio nei movimenti di centro di costo della registrazione contabile (#TT00815/26)
> - FI - revisione gestione contabilizzazione e rollback scritture di assestamento (#TT00808/26)
> - Fixed bug when configuring objects containing ExtraData based on DataSource
> - MES - Corretto bug nel calcolo costo dell’articolo prodotto con la dichiarazione di produzione nel caso in cui nel ciclo fossero presenti fasi esterne prima dell’ultima fase interna (#TT00748/26)
> - MES - Corretto bug nel calcolo del costo dei materiali degli ordini di produzione che non considerava correttamente le chiusure di magazzino (#TT00452/26)
> - MES - Corretto bug nell’importazione tramite webapi delle dichiarazioni di produzione, nelle quali, nel caso in cui il lotto del materiale importato fosse inesistente, veniva proposto un lotto con la logica fifo anche se il tipo prelievo dell’articolo era manuale. Ora, se cui il tipo prelievo dell’articolo è manuale e nei parametri degli ordini di produzione è attivo il flag Gestione automatica dei lotti e SN, nel caso in cui il lotto del materiale fosse inesistente, verrà creata la riga del materiale ma senza associare un lotto (#TT00711/26)
> - MES - Corretto bug nella procedura di Generazione lotto degli ordini di produzione che non generava correttamente l’extension per il nuovo lotto (#TT00920/26)
> - MS - Commesse di produzione - Revisionate tutte le procedure che aggiornano la “Data merce pronta” di una Commessa di tipo Indipendente, in quanto la “Data merce pronta” veniva aggiornata alla “Data fine prevista” della Commessa, anche se il parametro dedicato, “Aggiornamento Data merce pronta” presente nei “Parametri MS”, non lo permetteva (#TT00875/26)
> - MS - F.C.S. - Corretta l’anomalia che non considerava la disponibilità dei materiali per l’inizio lavori pur indicando tale richiesta nei parametri (#TT00604/26)
> - MS - Pianificazione generale - Modifiche attuate:
>> - corretta l’anomalia che pianificava l’ora di fine e quella di inizio di due ordini di una medesima commessa di livello figlio e padre accavallando gli orari;
>> - modificata la logica di considerazione della “% di utilizzo centro di lavoro”: antecedente alla modifica la percentuale incrementava il tempo di lavoro giornaliero del relativo Calendario della capacità produttiva; ora è il tempo di lavoro della fase che viene incrementato mantenendo inalterato il periodo di lavoro giornaliero del Centro.
>> - !! Per rendere attive e corrette le variazioni alle procedure di calcolo si rende necessario rigenerare tutti i “Calendari delle capacità produttive” di tutti i Centri di lavoro !! (#TT04940/25)
> - PM - risolto caso specifico in cui non venivano proposte le spese negli interventi esterni (#TT00956/26)
> - PM - videata cedolino paghe - risolto caso per cui avendo il profilo impostato come default, non proponeva la risorsa nei filtri attività (#TT00652/26)
> - PR - Change in SDD file creation (#TT05663/25)
> - Profili - Corretto il funzionamento dei profili nei documenti che possono avere il tab Documenti Collegati (#TT792/26)
> - Restored font widget for Blockly
> - Risolto problema integrazione GitHub per credenziali non corrette
> - RN - corretto problema nella fattura di acquisto (#Tipo nota di credito) quando veniva impostata una spesa finale di tipo bollo e nelle righe erano presenti prezzi o quantità negative, il messaggio di richiesta di inversione segno della spesa finale non gestiva correttamente il rifiuto di invertire il segno (#TT00726/26)
> - SCM - Documenti di acquisto in entrata: revisione della gestione delle fatture elettroniche con allegati in formato .7zip (#TT00878/26)
> - SD - Creazione Ordine fornitore da Ordine cliente - Sulle righe articolo dell’ordine fornitore vengono ora riportati il magazzino e la causale previsti per il tipo ordine creato (#TT00889/26)
> - SD - Dettaglio righe ordini clienti: Corretta la visualizzazione di codice e descrizione articolo cliente nella griglia dei risultati (#TT00297/26)
> - SD - Evasione ordini in DDT e Fatture: i centri di costo e ricavo non vengono più riportati anche sulle righe di tipo note in presenza del flag “Ricalcola centri di costo/ricavo” (#TT00801/26)
> - SD - Ottimizzata l’importazione Web API dei listini di vendita corposi. Inserita la possibilità di fare update sugli articoli per aggiungerne al listino (#TT04887/24, #TT05479/25)
> - SD - Se l’utente porta in stato controllato e poi non esaminato una fattura di vendita creata da DDT, sarà possibile effettuare il RollBack dell'operazione per cancellare la fattura (#TT05405/25)
> - SD-Importo ordine di vendita WebApi: quando viene l'esecuzione forzatamente, da aggiornare anche ForceExecutedQuantity su articoli di ordine cliente(#TT00825/26)
> - SH - generazione file F24, revisione campi importo con decimali per separatore virgola (#TT01973/25)
> - SH - matrice di applicazione tasse, revisione gestione univocità di riga (#TT00738/26)
> - Solved bug for form generator widget on script editor
> - Solved bug to compile Forms from Script
> - Solved bug to execute Workflow Action Script
> - Solved bug to invoke global script from Cruscotti
> - Solved bug to set UI property to MultiTarget widget from script
> - WM - Analisi Disponibilità con dettaglio distinta base: Corretto mancata valorizzazione colonne se versione di distinta nei componenti vuota (#TT00602/26)
> - WM - Corretta valorizzazione “Livello”, “Priorità” e “Articolo Padre” in analisi disponibilità con dettaglio distinta base (#TT00602/26)
> - WM - Corretto bug nell’import webapi dell’anagrafica articolo che non veniva correttamente inserito il valore del campo Nomenclatura (#TT00840/26)
> - WM - Negative stock resulted after editing warehouse entry registration (#TT00644/26)
> - WM - Prototipi - Corrette le anomalie che non calcolavano correttamente la componente del Costo macchina e quella degli Altri costi (#TT00716/26)
> - WM - Registrazioni di Magazzino - Abilitata quantità movimento se UM alternativa specificata (#TT00802/26)


### Patch 803.0011 - 20/02/2026

> -	Bizlink FI : Obrazac PDV for HR localization, passed to v.11 (#TT00770/26)
> -	CPQ - Risolto problema che genera un’eccezione quando si estrae il tipo di un Extra Data basato su DataSource
> -	MES - Corretto bug nel report Foglio di Lavoro nel quale venivano visualizzati dei valori con il formato inglese (#TT00688/26)
> -	PM - Generazione fatture da interventi - il progetto collegato al servizio riporta CIG e CUP in testata. Le righe della fattura che fanno riferimento a quel progetto avranno riportato il codice CIG CUP negli appositi campi ( #TT03731/25)
> -	PM - Gestita casistica di intestazione fatture generate da progetti, per cui ora è possibile avere il cliente di fatturazione diverso dal cliente del progetto (#TT00695/26)
> -	PR - revisione contabilizzazione da riconciliazione bancaria, se si effettuano chiusure partite ora la riga banca importata da file non viene più ricalcolata (#TT05304/25)
> -	Rilascio stampa Obrazac PDV versione 11 per localizzazione HR
> -	SCM - Corretta anomalia che non permetteva l’attivazione dei flag della sezione Stato DDT in fase di creazione di un Nuovo DDT dall’interno di uno esistente (#TT00667/26)
> -	SCM - Ordini Fornitore: corretto l’aggiornamento della quantità residua dell’articolo a seguito di utilizzo del pulsante Suddividi quantità in più date di consegna (#TT00692/26)
> -	SCM - Registrazione DDT di Acquisto: Risolto errore che si verificava durante il caricamento di un DDT, in presenza del parametro Tralasciare l’articolo senza magazzino e causale (#TT00768/26)
> -	SD - Fatture di Vendita: In fase di emissione di una nota di credito mediante la procedura di Storno fatturazione viene ora valorizzato il campo Base liquidazione agenti (#TT00632/26)
> -	SD - Inserita la possibilità, nell'importazione WebAPI di picking, DDT e fatture, di evadere le righe ordine inserendo la proprietà OrderItem che trasferisce tutte le proprietà dell'articolo (#TT04674/25)
> -	SD - Nell'importazione Web API delle fatture di vendita, vengono correttamente inserite le scadenze anche nel caso in cui si inseriscano nel file (#TT00736/26)
> -	SD - Ordini Cliente: Abilitata la possibilità di aggiungere CIG e CUP alla griglia di ricerca degli ordini di vendita (#TT00659/26)
> -	Solved bug to send fiscal invoice to Croatia FiscalAgency Ticket (#TT00641/26)
> -	WM - Allineato dimensioni note picking a note ordini per evitare troncamenti (#TT00696/26)
> -	WM - Prototipi - Corretta l’anomalia che, durante la creazione di un nuovo prototipo, non veniva ricalcolato correttamente la componente di costo del materiale (#TT00666/26)
> -	WMS - Migliorata risposta del tasto Indietro in form Inventario (#TT00177/26)
> -	WMS - Ricevimento Merci - Sistemato problema in cui venivano ignorate le condizioni di filtro (#TT00174/26)

### Patch 803.0010 - 13/02/2026

> -	CPQ - bugfixing su script di inizializzazione e aggiunta Extra Data ad articoli creati.
> -	FI - calcolo ammortamenti, revisione gestione data inizio attività su cespiti collegati (#TT00645/26)
> -	FI - Contabilizzazione Compensi ed Enasarco: revisione delle procedure di contabilizzazione dei compensi e dei contributi Enasarco, con revisione delle relative procedure di rollback (#TT00330/26)
> -	FI - creazione file F24, revisione record 50.01 (#TT01973/25)
> -	FI - PaymentImport fix - delete FSMaturityPaymentReservation (#TT00631/26)
> -	Framework - Risolta l’anomalia che, aprendo un documento, causava uno sfarfallio iniziale nell’evidenziazione dei campi obbligatori (quelli evidenziati in rosso) (#TT00553/26)
> -	Impostazione Xslt di visualizzazione Liquidazione iva periodica (#TT00520/26)
> -	MS - Corretto bug in costificazione che non calcolava correttamente il costo per le fasi a tempo fisso (#TT05668/25)
> -	MS - MES - Ora se la numerazione dei documenti commesse di produzione, ordini pianificati, ordini di produzione e di conto lavoro sono con periodo Annuale, la numerazione proposta dipenderà dall'anno della data del documento appena inserito (#TT00040/26)
> -	MS e MES - Materiali proposti al Completamento dati ordine
> -	PM - risolto caso di segnalazione nella ricerca interventi in presenza di customizzazioni (#TT00466/26)
> -	QY - Filtro controllo articoli - Risolto il problema di perdita dei caratteri inseriti nel filtro degli Ordini di produzione, presente nei documenti di origine delle Dichiarazioni di produzione e nella Fase ordine di produzione (#TT00454/26)
> -	QY - Numerazione documenti - Dove prevista la numerazione documenti, è stata implementata la gestione della progressione non annuale (#TT00625/26)
> -	revisione calcolo scaglioni Firr (#TT00516/26)
> -	Risolto errore durante la ricerca di documenti su tab precedenti di NIR quando esiste custom per oggetto PurchaseDeliveryNote o PurchaseInvoice(#TT00653/26)
> -	SCS - Creazione Ordine di Conto lavoro da fase esterna di Ordine di Produzione: Corretta la proposta dell'ubicazione riportata sulla riga articolo dell'ordine di conto lavoro (#TT05383/25)
> -	SH - Attività/Task - Corretto errore in chiusura nuova attività senza salvare (#TT00613/26)
> -	Solved crash when click on dashboard grid for some dashboards
> -	Solved problem to compile script for Mono platform
> -	WM - Aggiunta proprietà “Qtà Impegno” in analisi disponibilità con dettaglio distinta base (#TT05061/25) **Attenzione! Questa modifica può impattare sui profili**
> -	WM - Lista inventariale - Messaggio di avviso in Help articoli se magazzino non presente nella lista (#TT00471/26)
> -	WM - MS - MES: Allineato il comportamento dell’utilizzo dell’unità di misura alternativa all’interno di tutte le form delle aree logistica, pianificazione e produzione, nel caso in cui fosse attivato il flag *Tassativo* (#TT05379/25)
> -	WM - Stampa inventario - Corretto filtri tipo e categoria fiscale non funzionanti in valorizzazione LIFO (#TT00404/26)
> -	WM - Valorizzazione magazzino - Limitato il controllo giacenza su articoli fittizi alla data chiusura (#TT00541/26)
> -	WMS - Articoli fittizi possono non possono essere inventariati (#TT05113/25)
> -	WMS - Carico UDC - Attivata identificazione barcode ubicazione (#TT05359/25)
> -	È stata revisionata la modalità di proposta dei materiali nel completamento dati ordine degli Ordini pianificati e degli Ordini di produzione. Al momento della richiesta di completamento, viene visualizzata una finestra in cui è possibile scegliere quale data considerare per la verifica della data di validità del componente della distinta base.
> -	Le opzioni disponibili sono: Data prevista inizio (proposta predefinita) e Data odierna(#TT02644/25)

### Patch 803.0009 - 06/02/2026

> -	CPQ - Aggiunte validazioni sulle configurazioni e bug fixing
> -	FI - Intrastat - in caso di importo 0 il raggruppamento mantiene il campo del segno impostato a 1 (#TT00417/26)
> -	FI - Partite: Modificata la gestione di FSMaturity in custom (#TT00180/26)
> -	FI - Revisione chiusura partite in registrazioni contabili, lock random su update nei solleciti (#TT01305/25)
> -	FI - Webapi sull’oggetto FSPosting, revisione dell’importazione per gestire gli automatismi di chiusura partite delle registrazioni di pagamento/incassso (#TT05518/25)
> -	MES - Corretto bug nell'import Webapi delle dichiarazioni di produzione (#TT00459/26)
> -	MES - Soluzione MES - Utilizzando il bar-code tokenizer della Risorsa di tipo Dipendente, indipendentemente dal tabulatore visualizzato, è ora possibile inserire un nuovo componente della Squadra di lavoro oppure impostare un termine attività per un componente già presente (#TT00249/26)
> -	MS - Corretto bug in pianificazione generale che nel caso in cui fosse attivato il flag "Esecuzione MRP dopo pianificazione" veniva rimosso il flag "Pianificati" nei parametri della procedura MRP (#TT00168/26)
> -	MS - Corretto bug in pianificazione generale nel caso in cui venissero pianificate nuovamente commesse in stato esecutivo o lanciato (#TT00046/26)
> -	MS - Corretto bug nella procedura MRP che in alcuni casi non creava correttamente gli ordini pianificati per i figli degli articoli fittizi (#TT04427/25)
> -	MS - Corretto bug nella procedura MRP che non generava correttamente gli ordini pianificati nel caso in cui fosse attivo il flag Considera passato (#TT05561/25)
> -	PM - duplica intervento da planner, corretto caso per cui settava le ore di inizio servizio nella data intervento generale, invece di mantenere l'ora 00.00 (#TT00499/26)
> -	PM - generazione intervento da intervento pianificato - corretta casistica per cui solo in specifiche condizioni, le spese sostenute non riportavano la data corretta e le spese da fatturare non erano proposte correttamente (#TT00481/26)
> -	PM - WEB ripristinati tasti di espandi/comprimi nella visualizzazione progetto nel calendario di WBS assegnazione risorse (#TT00477/26)
> -	Risolto problema di importazioni ordini Peppol
> -	SCM - Calcolo RAEE: Risolta procedura EVASIONE ORDINI per il calcolo delle spese RAEE (#TT331/26)
> -	SCM - Contabilizzazione fatture di acquisto: revisione della procedura di rollback della contabilizzazione in presenza di partite già pagate (#TT00381/26)
> -	SCM - Corretto il calcolo degli Importi del documento generato tramite la procedura di Creazione DDT da Ricevimento Merci (#TT00524/26)
> -	SCM - Ordini Fornitore: Il Contributo RAEE viene ora calcolato anche negli ordini generati da Richieste di acquisto o Richieste di Offerta (#TT00526/26)
> -	SCM - Valorizzazione DDT di Acquisto: Corretto errore nella valorizzazione di un DDT contenente articoli gestiti con serial number ( #TT00530/26)
> -	SD - Fatture di Vendita: Risolta anomalia che attivava il pulsante Salva nelle fatture Consegnate, quando era attivo il flag Valori modificati manualmente nel tab Trasporto (#TT04757/25)
> -	SD - Ordini clienti: Risolto errore che talvolta si verificava al salvataggio di un ordine generato mediante Evasione da Progetto (#TT00455/26)
> -	SD - Shippings - Calendario Spedizioni - Corretto errori in creazione spedizioni da calendario (#TT00391/26)
> -	SD- Se la riga acconto (#Tipo 6) in fattura aveva l’articolo valorizzato, ora lo storno acconto riporta questo articolo nella riga di tipo 7 (#TT00084/26)
> -	SD\SCM-Nella tabella dei tipi spese aggiungere un check button per determinare l’area di competenza, in questo modo è possibile gestire tipi spesa differenti tra documenti di acquisto e di vendita, e nel caso del RAEE questi vengono proposti automaticamente dagli algoritmi. **Attenzione! Questa modifica può impattare sui profili** (#TT00339/26)
> -	SD-Corretto errore nella stampa delle provvigioni maturate, modulo vendite, che presentava la provvigione come non maturata, anche se la partita era chiusa, nel caso in cui il pagamento veniva registrato assieme al pagamento di un insoluto (#TT353/26)
> -	WM - Valorizzazione di magazzino - Controllo giacenze negative lotti anche se magazzino ammette giacenze negative (#TT00344/26)

### Patch 803.0008 - 29/01/2026

> -	Arm - Validare la vista database prima dell’allineamento all’oggetto.
> -	BI - Dashboard (Cruscotti): corretto il conteggio delle colonne in presenza di filtri (#TT00178/26)
> -	CO - Ottimizzazione elaborazione periodi (#TT00435/26)
> -	FI - Registrazioni Contabili, Movimenti Contabili: Revisione salvataggio dei profili (#TT00052/26)
> -	MES - Ordine di produzione - Corretta l’anomalia per cui, eseguendo una nuova form di filtro, dopo la selezione di un oggetto Tile con valori maggiori di zero e la pressione del relativo tasto di Ricerca, non veniva visualizzato alcun dato. Era necessario eseguire una seconda Ricerca per visualizzare correttamente le informazioni (#TT00345/26)
> -	MS - Corretto errore che nella procedura di Generazione commesse di produzione che dal tab sottoscorta non riporta tutti gli articoli da inserire in commessa (#TT02716/25)
> -	MS - Corretto errore che nella procedura di Generazione commesse di produzione che dal tab sottoscorta per il quale la form andava in crash nel caso in cui fossero presenti molte righe da caricare (#TT00861/25)
> -	QY - Azioni correttive - Risolta l’anomalia che da ‘Crea Azione correttiva’, presente nelle gestioni: ‘Reclami’, ‘Non conformità’ e ‘Azioni correttive’, non veniva ricopiato il ‘Riferimento documenti’ (#TT00070/26)
> -	SH - Risolto bug nello script editor per generare il codice per aprire una form
> -	SCM - Calcolo RAEE: Risolto eccedenza importo dei scadenza rispetto a Totale Documento per errata considerazione del contributo RAEE (#TT327/26)
> -	SD - Generazione file XML della fatturazione elettronica: è possibile creare un file custom per le righe fattura personalizzando l'algoritmo CheckSalesInvoiceItemForElectronicExportLinesDetail (#TT5255/25)
> -	SD-SalesOrder-Expand first level logic modification(#TT00368/26)
> -	WM - Corretto bug nella webapi degli articoli in cui andava in errore la delete di una variante articolo (#TT00039/26)

### Patch 803.0007 - 26/01/2026

> -	Cambia formato Data Valuta e Data Valuta NIR, rimuovere la parte ORA (#TT00290/26)
> -	CPQ - miglioramenti computazionali, inserimento bottone per allineamento parametri e binding, bugfix
> -	FI - Controllo sbilanci cdc/cdp/progetti, revisione gestione flag 'controllo date competenza' (#TT00291/26)
> -	FI - creazione public virtual void MovementsAccountingWithParameters, per poter facilmente contabilizzare i movimenti di magazzino tramite script (#TT00264/26)
> -	FI - CU2026, revisione tendina di regime escluso (RF19) **Attenzione! Questa modifica può impattare sui profili** (#TT00248/26)
> -	FI - Links change in Purchase invoices accounting procedure. Small improvements in supplier invoice accounting (#TT00280/26)
> -	MES - Sistemato visualizzazione messaggi di errori da scripting in dichiarazioni di produzione (#TT00183/26)
> -	MS - Corretto bug nella procedura MRP che non generava gli ordini pianificati con le quantità corrette in alcuni casi (#TT00234/26)
> -	PR - L'importazione file nella riconciliazione bancaria non popola i campi. **Attenzione! Questa modifica può impattare sui profili** (#TT05582/25)
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
> -	SCM - Richieste di Offerta: Abilitata la possibilità di creare una nuova versione o di duplicare un’offerta intestata ad un Nuovo fornitore (#TT05126/25)
> -	SD - Evasione DDT e Fatture da ricerca Ordini cliente: Abilitata la proposta automatica dei lotti anche per l’evasione da ricerca ordini, quando il flag Proposta lotti è attivo e la tipologia di prelievo del lotto non è manuale (#TT05623/25)
> -	SD - Offerte di vendita gerarchiche: Introdotta la possibilità di inserire materiali con tipo riga Articolo non codificato digitando direttamente la descrizione articolo (#TT00296/26)
> -	SD - Ottimizzazione webapi ordine cliente(#TT04576/25)
> -	SD - Revisione calcolo automatico liquidazione agenti quando sono presenti fatture di vendita con divise differenti. **Attenzione! Questa modifica può impattare sui profili** (#TT05266/25)
> -	SD - Risolta un’anomalia durante lo scarico di documenti contenenti articoli gestiti a lotti e numeri seriali, inseriti con quantità negative (#TT05672/25)
> -	SDI Documenti di acquisto in entrata: Ora l'anteprima di stampa è stata riportata alle dimensioni e font presenti nel visualizzatore del registro SDI (#TT00094/26 e 287/26)
> -	SH - Corretto bug che non visualizzava correttamente tutti i caratteri del codice articolo nell’intestazione della form (#TT00243/26)
> -	SH - fix right panels(#Tools, Object Navigator, Context Panel, Configuration) ordering when pinned first time (#TT04452/25)
> -	SH - Prototipi - La dimensione del campo note di fase è stata uniformata a quella delle note di fase del ciclo di lavoro in quanto, all’importazione di quest’ultime nelle fasi del prototipo, veniva generato un errore di dato troncato se la nota di fase del ciclo di lavoro eccedeva di 512 caratteri (#TT00166/26)
> -	WMS - Carico/Sposta UDC - Abilitato lo spostamento ubicazione anche per UDC non caricate (#TT05359/25)

### Patch 803.0006 - 16/01/2026

> -	ARM - Correzione della migrazione del database per BizLink FBH (#TT00057/26)
> -	CO - form Visualizzazione totali per Centro di costo, risolto errore in apertura (#TT00036/26)
> -	CO - nella form dei ‘Valori di controllo’ del controlling, i campi con i valori delle griglie sono stati formattati con i separatori delle migliaia. **Attenzione! Questa modifica può impattare sui profili** (#TT00012/26)
> -	CO - nella procedura di “Storico ammortamenti” dell’elaborazione periodi nel Controlling, compilazione campi del cambio valuta e importo valuta (#TT04897/25)
> -	CO - nelle scritture di integrazione delle Chiusure infrannuali ora Fluentis restituisce un messaggio se la registrazione da creare non ha righe a causa del valore 0 dell’integrazione da eseguire (#TT04864/25)
> -	CO - procedura di Consolidamento Master, revisione filtro applicato alla dimensione Dimensione nella griglia (#TT00031/26)
> -	FI - la contabilizzazione della fattura di acquisto con allocazione costi ora usa il sottoconto dal riferimento di allocazione anche negli ambienti con tax engine attiva (#TT05618/25)
> -	FI - la contabilizzazione ora valorizza l’analitica della registrazione solo per i sottoconti economici o per i patrimoniali che hanno la gestione centri aziendali attiva (#TT00169/26)
> -	FI - Nella gestione delle dichiarazioni di intento i pulsanti di stampa si abilitano solo quando la dichiarazione è salvata ( Application exception - 287125/2025)
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
> -	WM - Stampa inventario a quantità - spostato totale di magazzino nel footer per problema di caricamento del dato con molte righe (#TT00008/26)
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
> -	WMS - Ricevimento merce - Esecuzione dell’algoritmo di chiusura form etichette anche da WPF (#TT05548/25)

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