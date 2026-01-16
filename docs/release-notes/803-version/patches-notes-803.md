---
title: Patch notes Versione 803
sidebar_position: 1
---

### Patch 803.0006 - 16/01/2026

> -	ARM - fix database migration for Bizlink FBH (#TT00057/26)
> -	CO - form Visualizzazione totali per Centro di costo, risolto errore in apertura (#TT00036/26)
> -	CO - nella form dei ‘Valori di controllo’ del controlling, i campi con i valori delle griglie sono stati formattati con i separatori delle migliaia. Modifications in form ‘Valori di controllo’ can have an impact on profiles.(#TT00012/26)
> -	CO - nella procedura di “Storico ammortamenti” dell’elaborazione periodi nel Controlling, compilazione campi del cambio valuta e importo valuta (#TT04897/25)
> -	CO - nelle scritture di integrazione delle Chiusure infrannuali ora Fluentis restituisce un messaggio se la registrazione da creare non ha righe a causa del valore 0 dell’integrazione da eseguire. (#TT04864/25)
> -	CO - procedura di Consolidamento Master, revisione filtro applicato alla dimensione Dimensione nella griglia. (#TT00031/26)
> -	FI - la contabilizzazione della fattura di acquisto con allocazione costi ora usa il sottoconto dal riferimento di allocazione anche negli ambienti con tax engine attiva. (#TT05618/25)
> -	FI - la contabilizzazione ora valorizza l’analitica della registrazione solo per i sottoconti economici o per i patrimoniali che hanno la gestione centri aziendali attiva. (#TT00169/26)
> -	FI - Nella gestione delle dichiarazioni di intento i pulsanti di stampa si abilitano solo quando la dichiarazione è salvata ( Application exception - 287125/2025 )
> -	FI - solve a crash in interest calculation ( application exception 287428/2025)
> -	FI - è stata modificata la tabella Giurisdizione per aggiungere i campi della regione e provincia di riferimento. Modificata la stampa Registro tasse e Riepilogo per codice tasse per aggiungere filtri per nazione/regione/provincia della giurisdizione. Modifications in forms Giurisdizione, Registro tasse and Riepilogo per codice tasse can have an impact on profiles(#TT05664/25)
> -	FI - Compensazione veloce: inserito messaggio di avviso quando si compensano partite riferite ad un anno non presente all’interno dei parametri di contabilità ( TT05459/25)
> -	FI/PR/CRM/SH/SD - set defaults post migration
> -	MES - Importo WebApi segnalazioni di produzione - nuova opzione "RegisterSignalAfterInsert" - registra automaticamente dopo l'inserimento (se la registrazione da errori, viene eseguito un rollback anche per l'inserimento di segnalazione) (#TT00095/26)
> -	MS - Fasi standard - La colonna del Tempo fisso non è più modificabile in quanto è relativa al Centro di Lavoro e non alla Fase standard (#TT00104/26).
> -	PM - WEBAPI importazione interventi - gestita caso in cui righe servizi non codificate con progetto associato non venivano importate. (#TT05501/25)
> -	PR - Lock Manager: corretto errore in fase di inserimento riga all’interno del blocco cliente (rif. Ticket TT00027/26)
> -	PR - Stampa dilazione media incassi: revisione proposta della data scadenza nel report (rif. ticket 5491/25)
> -	Risolto bug per ImportazioniExcel nel calcolo degli elementi inclusi in una transazione
> -	SCM - DDT di Acquisto: Corretto il calcolo delle spese relative al Contributo RAEE nel caso di creazione DDT da Ricevimento merci del WMS. (#TT00085/26)
> -	SCM - Ordini Fornitore: corretto l’aggiornamento dello stato di evasione della riga a seguito di utilizzo del pulsante Suddividi quantità in più date di consegna, nel caso di righe articolo parzialmente evase. Introdotto un controllo in fase di suddivisione che impedisce di impostare, sulla riga di origine, una quantità inferiore a quella già evasa. (#TT04796/25)
> -	SCM - Richieste di Acquisto: Il prezzo unitario netto viene ora determinato partendo dal prezzo dell’articolo, invece che dall’importo netto della riga. (#TT05051/25)
> -	SCS - Se nei parametri di Conto lavoro è attivo il flag Controlla disponibilità, durante l’evasione di un ordine in DDT di conto lavoro viene verificata la disponibilità del materiale presso il magazzino del terzista. Se la disponibilità è uguale o superiore alla quantità residua del materiale, la quantità da evadere proposta sarà zero. Se la disponibilità è inferiore, la quantità da evadere proposta sarà calcolata come differenza tra la quantità residua e la disponibilità nel magazzino del terzista. (#TT01615/25)
> -	SD - Creazione Fattura da DDT: Se per il cliente risultano Fatture di Acconto non ancora chiuse, la procedura di valorizzazione segnala all’utente la presenza di acconti aperti. (#TT05473/25)
> -	SD - Creazione Fattura di Vendita da Gestione anticipi: La fattura generata dalla gestione anticipi non riporta gli sconti predefiniti per cliente o tipo pagamento. (#TT04844/25)
> -	SD - Fix Sales business document item agent percentage calculation after final discount change(#TT04058/25)
> -	SD - Ottimizzazione importazione ordini di vendita WebApi, (#TT04576/25)
> -	SD - Set values for sales fixed tables after migration(#TT00096/26)
> -	SH - Risolto problema di visualizzazione nell’apertura dei dettagli delle maschere da Form navigator. (#TT05677/25)
> -	WM - Brogliaccio di Magazzino: Corretto calcolo giacenza iniziale con rimanenze nel periodo di stampa. (#TT00142/26)
> -	WM - Brogliaccio di magazzino: Corretto errore “summaryTemplate missing”. (#TT00170/26)
> -	WM - Spedizioni - Corretta errata evasione ordini clienti creando picking con tipo senza evasione. (#TT05607/25)
> -	WM - Stampa inventario a quantità - spostato totale di magazzino nel footer per problema di caricamento del dato con molte righe.
> -	WMS - Ricevimento Merce - Creazione UDC con gruppo da ordine fornitore ora vengono generate con anno concorde. (#TT00077/26)

### Patch 803.0005 - 09/01/2026

> -	CO - comparation reclassifications ( TT00010/26)
> -	FI - contabilizzazione documenti di acquisto/vendita con tax engine attivo, in caso di mancanza di righe nelle collection delle tasse ora si contabilizza utilizzando la tassa con categoria ‘nexus exemption’ (#TT05566/25)
> -	FI - Nella form di stampa “Registri tasse”, inserita opzione per selezionare un range di periodo manuale, escludendo la selezione per mese/trimestre. Con questa opzione, la stampa definitiva non è abilitata. (#TT05624/25)
> -	MS - Corretto bug che non riportava le note dei materiali presenti in distinta base negli ordini pianificati generati. (#TT05675/25)
> -	Risolto bug per aggiungere moduli custom allo script delle importazioni Excel (#TT05655/25)
> -	Risolto problema di Identizzione nello script editor
> -	SCM - Importazione da prezzi fornitore: Se nel file di importazione Prezzi fornitore da Excel è stato indicato uno sconto, questo potrà essere riportato nel Listino fornitore generato dall’importazione prezzi fornitore, utilizzando la tipologia di sconto indicata nei parametri della procedura. (#TT05273/25)
> -	SCM - Quando un DDT movimentato a magazzino viene valorizzato o evaso in una Fattura di Acquisto con cambio valuta diverso, il cambio del DDT e il relativo importo della registrazione di magazzino vengono aggiornati di conseguenza. (#TT04687/25)
> -	SCS - Rientro di conto lavoro: implementata la possibilità di duplicare un Rientro. (#TT05329/25)
> -	SD - Aggiunto il campo Riferimento disegno tecnico nelle offerte e negli ordini clienti all'interno del tab item data. Modifications in SalesOrder and SalesOffer object forms can have an impact on profiles (#TT05634/25)
> -	SD - Nella creazione del file Sdi IT, valorizzazione tag `<NumeroCivico>` del cedente/prestatore e cessionario/committente (#TT05470/25)
> -	SD - Revisione visibilità campo 'Cedente prestatore' per autofatture. (#TT05662/25)
> -	SD - Stampa DDT di Vendita: Corretta la visualizzazione dell’unità di misura nella stampa nel caso di prezzo articolo riferito all’unità di misura alternativa. (#TT05230/25)
> -	SH - Revisione gestione inserimento dettagli nella Matrice applicazione tasse. (#TT05283/25)
> -	Solved bug for missing script on Parser Objects
> -	WM - Corretto bug in ricevimento merci del WMS che non inseriva correttamente il conto del cliente nelle unità di carico create. (#TT05674/25)
> -	WMS - Ricevimento merce - Esecuzione dell’algoritmo di chiusura form etichette anche da WPF.

### Patch 803.0004 - 22/12/2025

> - FI - Stampa di controllo cespiti, revisione per calcolo del tipo operazione iva indetraibile (#TT05537/25).
> - MES - MES Solution - Gestione del Centro di lavoro "Multi-risorsa" Utilizzato nel caso in cui il Centro di lavoro venga utilizzato contemporaneamente da più Operatori ognuno dei quali inizia e porta a termine una lavorazione. A tal proposito, nelle "Risorse di produzione" di tipo "Centro di lavoro", nei parametri "Generali", tabulatore "Generale", è stato gestito il parametro "Centro di lavoro multi-risorsa". Nel M.E.S., se per un "Centro di lavoro multi-risorsa" viene indicata una "Risorsa" di tipo "Dipendente" e viene dichiarata una fase di lavorazione, questa può essere dichiarata e portata a termine solamente da quella Risorsa dipendente. Si rendesse necessario un cambio Risorsa dipendente, la fase deve essere Sospesa indicando una "Causale di sospensione" con l'indicazione di "Blocco proposta fase in M.E.S." per poi essere nuovamente selezionata, tramite il pulsante "Seleziona nuove fasi", ed effettuata una dichiarazione di ripresa con un'altra Risorsa dipendente (#TT05411/25).
> - MS - Corretto bug in Schedulazione a capacità finita che raggruppava in alcuni casi gli ordini pianificati creati anche se non richiesto (#TT05238/25).
> - Solved problem to compile algoritm script with Log information.

### Patch 803.0003 - 19/12/2025

> -	Allineamento tecnico Importazioni Excel della progress Bar
> -	Disable script loger
> -	MES - MES Solution - Gestione del blocco proposta fase in soluzione tramite le "Causali di sospensione". Alla sospensione di un'attività, indicando una "Causale di sospensione" con l'indicazione di "Blocco proposta fase in M.E.S.", alla successiva proposta delle fasi in lavorazione per il Centro di lavoro, la fase sospesa non verrà visualizzata. Per poter proseguire nella lavorazione della fase sospesa è necessario selezionarla, tramite il pulsante "Seleziona nuove fasi", ed effettuare una dichiarazione di ripresa (#TT05365/25).
> -	MS - Corretto bug nella procedura MRP che non generava gli ordini pianificati con la quantità corretta in alcuni casi particolari (#TT05310/25).
> -	MS - Corretto bug nella procedura MRP inerente allla creazione di ordini pianificati raggruppati per gli articoli figli (#TT04735/25).
> -	Risolti i bugs per creare una configurazione di Intercompany Importer
> -	SCM - Risolto errore che in alcuni casi impediva la cancellazione dei DDT di Acquisto per i quali era stato effettuato un tentativo di valorizzazione (#TT05568/25).
> -	SD - Electronic Payment(#TT05442/25).

### Patch 803.0002 - 18/12/2025

> -	ARM - Fix ribbon Working unit combobox
> -	CRM - WEBAPI - importazione offerte di vendita, risolto caso per cui il contatto CRM non veniva trovato in Fluentis in fase di importazione (#TT05577/25).
> -	FI - revisione contabilizzazione documenti per valorizzazione dimensione progetti, in caso di utilizzo di un centro di progetto diverso da quello di default Fluentis non inserisce più un doppione con quello di default (#TT05570/25).
> -	FI - revisione contabilizzazione fatture di acquisto con incrementi multipli sullo stesso cespite (#TT05558/25).
> -	MS - Corretto bug in pianificazione generale legato all’utilizzo di articoli fittizi in distinta base (#TT04427/25).
> -	Risolto bug di compilazione script dall’anagrafica degli script
> -	SCM - Creazione Fattura di Acquisto da Documenti di acquisto in entrata: per gli articoli privi di unità di misura nel file XML, la fattura viene generata utilizzando l’unità di misura selezionata nella procedura di creazione (#TT05445/25).
> -	SD - Conversione Offerta di Vendita in Ordine: se il cliente intestatario dell’offerta è stato bloccato nel Lock Manager la creazione dell’ordine viene bloccata (#TT05495/25).
> -	SD - Conversione Offerta in Ordine Cliente: Nel riferimento all’offerta presente sulle righe articolo dell’ordine viene ora riportata la data dell’offerta anziché la data di creazione (#TT05527/25).
> -	SD - Electronic Payment (#TT05442/25).
> -	SD - Nelle Offerte gerarchiche, la modifica dell’articolo nella sezione Materiali aggiorna ora automaticamente anche la relativa descrizione (#TT05534/25).
> -	WM - Corretto bug in fase di cancellazione delle righe di un picking creato da spedizione (#TT05488/25).

### Patch 803.0001 - 17/12/2025

> -	ARM - update post migration script  
> -	Solved problem with supervisor activities required parameters  
> -	Solved bug to create a new flow operation and documents with BizLink  
> -	Solved bug with missing GitHub parameters on script editor 
> -	SalesOffer - Fix SalesOffer import WebApi - search for CrmContact Ticket (5577/25).