---
title: Patch notes Versione 802
sidebar_position: 1
---

### Patch 801.0032 - 26/01/2026

> -	MES - Sistemato visualizzazione messaggi di errori da scripting in dichiarazioni di produzione (#TT00183/26).  
> -	MS - Calendario capacità produttive - Risolta l’anomalia che costringeva l’operatore ad uscire dalla gestione ogni qualvolta si modificava un orario nell’elenco dopo aver modificato uno precedentemente.  
> -	PR - Lock Manager: corretto errore in fase di inserimento riga all’interno del blocco cliente (#TT00027/26).
> -	PR - L'importazione file nella riconciliazione bancaria non popola i campi. Modifications in bank movement detail form can have an impact on profiles (#TT05582/25).

### Patch 801.0031 - 09/01/2026

> -	SCM - Quando un DDT movimentato a magazzino viene valorizzato o evaso in una Fattura di Acquisto con cambio valuta diverso, il cambio del DDT e il relativo importo della registrazione di magazzino vengono aggiornati di conseguenza(#TT04687/25).  
> -	WMS - Ricevimento merce - Esecuzione dell’algoritmo di chiusura form etichette anche da WPF.

### Patch 801.0030 - 12/12/2025

> -	FI - Creazione registrazioni contabili: risolto problema in fase di inserimento registrazioni in prima nota (Rif. Ticket TT05213/25).
> -	PM - WEBAPI dichiarazione attività - corretto caso per cui lo stato attività non veniva importato. (#TT05374/25)
> -	QY - Certificati di analisi - Corretta l'anomalia della mancata importazione del riferimento del Lotto dai controlli effettuati. (#TT05415/25)
> -	QY - Controllo articoli - Anomalia risolta nel widget dell'Ordine di produzione presente nel Filtro del controllo articoli che, in presenza di un numero elevato di Ordini da filtrare, costringeva l'utente a, una volta effettuato un primo filtro, eliminare il contenuto per poter filtrare il dato una seconda volta. (#TT05269/25)
> -	QY - Tipi prova - Risolta anomalia che visualizzava, nella colonna Categoria tipo prova, le categorie di tutte le società. (#TT05260/25)
> -	SD - Fix SalesOrder block at saving (#TT01258/21).
> -	SH - fix grid column visibility handling to/from profiles (TT03851/25).
> -	WM - Corretto bug in fase di generazione dei movimenti di magazzino, che non generava l'extension nella contropartita se presente nel movimento principale. (#TT05378/25)
  - WMS - Aggiunte alcune traduzioni in lingua Cinese (#TT04192/25)

### Patch 801.0029 - 28/11/2025

> -	FI - Corretto comportamento del flag Contabilizzato nel compenso percipiente, editabile se non contabilizzato con la procedura automatica e bloccato nel caso contrario. Modifications in compensi form can have an impact on profiles. ( #TT05242/25)
> -	FI - Creazione registrazione contabile cespiti: risolto problema nella registrazione dei cespiti utilizzando la funzionalità “Suddividi cespite” (Rif. Ticket TT04778/25)
> -	FI - Creazione registrazione contabile cespiti: risolto problema nella registrazione dei cespiti utilizzando la funzionalità “Suddividi cespite” (Rif. Ticket TT04778/25)
> -	MS - Rimossa popup da dettagli DDT in Ricevimento merce (#TT04318/25)
> -	QY - Controllo articoli - Piani di controllo - Corretta l'anomalia che visualizzava, nel tabulatore "Revisioni", riferimenti a Piani di controllo non correlati a quello visualizzato. (Rif.Ticket #TT05141/25)
> -	Risoluzione errore che impediva l’importazione Web API del ‘Tipo codice lotto’ degli articoli (#TT04840/25)
> -	SD - Creazione Ordine Fornitore da ricerca Ordini Clienti: Le righe di tipo omaggio presenti nell’Ordine cliente vengono ora riportate nell’Ordine fornitore come righe di tipo 1 - articolo codificato. (#TT04934/25)
> -	SD - Fix TaxAmount calculation (#TT04699/25)
> -	WM - Risolta un’anomalia che, in alcuni casi, impediva la corretta visualizzazione del contenuto della causale di magazzino all’apertura del documento. (#TT03964/25)
> -	WMS - Inibita doppia esecuzione dei comandi Conferma e Chiudi in Ricevimento merce.(#TT04487/25)
> -	WMS - Ricevimento merce - Corretta imprevista riconversione da quantità alternativa. (#TT04673/25)

### Patch 801.0028 - 06/11/2025

> -	CO - Scritture di Rettifica: abilitata la possibilità di esportare i dati della griglia. Modifications in Scritture di Rettifica form can have an impact on profiles (Rif. Ticket TT04136/25).
> -	FI - Comunicazione liquidazioni periodiche iva: Risolto problema in fase di creazione LIPE (Rif. Ticket TT04659/25).
> -	FI - contabilizzazione compensi su compenso creato da liquidazione agenti, blocco del ricalcolo enasarco. (#TT04577/25)
> -	MS - Corretto bug in Capacità centri di lavoro inerente ad una errata visualizzazione dei tempi di attesa coda presenti nelle fasi dei cicli di lavoro. (#TT04629/25)
> -	MS - Corretto bug nell’esecuzione della procedura MRP (#TT04604/25)
> -	MS - Corretto bug nella procedura MRP che, in alcuni casi, calcolava in maniera errata la data di fine degli ordini pianificati di acquisto. (#TT04624/25)
> -	MS - In capacità centri di lavoro nel caso in cui avvenga uno spostamento di fase in una giornata in cui il centro di lavoro è già completamente occupato, viene visualizzato un messaggio di errore. Altrimenti, viene saturata la giornata del centro di lavoro senza sovra-allocarla e il residuo del tempo (della fase spostata) viene ripartito nelle successive giornate lavorative per una capacità pari alla massima di quel centro di lavoro, indipendentemente dal carico di lavoro già presente. (#TT03527/25)
> -	SCM - Nir - correzione delle fonti dei lotti e delle quantità residue per più lotti, corretto anche il carico del magazzino per Nir #TT04615/25
> -	SCS - Ordine di conto lavoro, corretta anomalia che causava la ripetizione di messaggi di errore in fase di sostituzione articolo, da non fittizio a fittizio, nelle righe ordine (#TT03838/25)
> -	SD - Creazione DDT da Lista di prelievo UDC: Durante la creazione del DDT da una lista di prelievo UDC, se l’ordine cliente di origine contiene righe di tipo Note o Spese, queste vengono ora inserite nel DDT con il flag “In fattura” attivo. (#TT04486/25)
> -	WM - Analisi disponibilità, al cambio dell’articolo nel filtro e successivo rilancio della ricerca, la griglia di dettaglio viene aggiornata in base al nuovo articolo (#TT03562/25)
> -	WM - Migliorato ed ottimizzato il report Esplosione distinta base. Selezionando il flag Riepilogata è possibile anche visualizzare gli articoli raggruppati per codice a parità di livello (flag multi livello) oppure per tutta la distinta base (flag mono livello). (#TT04557/25)
> -	WM - Packing List - Corretto cambio stato a “Fatturato” aggiungendo UDC. (#TT04626/25)


### Patch 801.0027 - 23/10/2025

> -	CO - ripresa dati da produzione del controlling, i valori di progetto ripresi dai rientri del conto lavoro ora usano il prezzo netto di riga e non il lordo (#TT04478/25) 
> -	FI - completata implementazione del regime iva Art 74 DPR 633/72 Trimestrali “per natura”. Allineata stampa della liquidazione IVA periodica e calcolo (senza interessi trimestrali) nella Comunicazione trimestrale delle liquidazioni. ( TT03154/25) 
> -	FI - corretto calcolo interessi trimestrali iva nella comunicazione periodica delle liquidazioni IVA. Non vengono più esposti nel quarto trimestre come da istruzioni ministeriali. Rif. #TT00124/22 
> -	FI - corretto problema che non riportava I dati dei centri di costo riferiti alle commesse nelle scritture di assestamento. (TT03979/25) 
> -	FI - Creazione compenso da documenti di acquisto in entrata: Risolto problema relativo alla creazione di un nuovo contatto e al calcolo delle righe all’interno del compenso (Rif. Ticket TT01805/25). 
> -	FI - Creazione compenso da documenti di acquisto in entrata: risolto errore in fase di creazione del compenso dovuto a una descrizione troppo lunga e rivisti i calcoli nel riepilogo dati IVA (Rif. Ticket TT02622/25). 
> -	MES - Corretto bug, che si verificava nel caso in cui venisse rilasciato un ordine pianificato di produzione di livello inferiore senza che aver rilasciato anche l’ordine padre, se veniva creato un lotto per quell’ordine di produzione e poi veniva rilasciato l’ordine pianificato di produzione padre, non venivano agganciati i riferimenti corretti del campo SourceProductionOrder (#TT04449/25) 
> -	MES - Dichiarazioni di produzione da soluzione MES - Corretta anomalia che, alla doppia pressione del pulsante [Avanza], creava una doppia dichiarazione di produzione. (#TT04436/25) 
> -	MS - Corretto bug in costificazione delle commesse che non calcolava correttamente il tempo macchina se il centro di lavoro aveva il tempo fisso. (#TT04500/25) 
> -	MS - Corretto bug in costificazione delle commesse di produzione che non valorizzava correttamente il costo di setup. (#TT04167/25) 
> -	MS - Corretto bug in pianificazione generale che generava in alcuni casi ordini pianificati con quantità doppia. (#TT04502/25) 
> -	MS - Corretto bug in sequenza fasi top down grid che non permetteva di filtrare sulla descrizione del cliente dopo averla trascinata in griglia dall’object navigator. (#TT04489/25) 
> -	MS - Corretto il calcolo del tempo di inizio e fine in Sequenza fasi. (#TT03529/25) 
> -	MS - Ricalcolo capacità giornaliera dei Centri di lavoro - Corretta anomalia del calcolo delle capacità giornaliere se gestite o meno le eccezioni. Variazione layout nel Calendario capacità produttive per la gestione dei Periodi di lavoro in sostituzione delle Eccezioni .(#TT03446/25) 
> -	PR - distinte di anticipo, revisione gestione del tipo importo ‘imponibile’. Modifications in SalesInvoiceHelpFilterWidget and SalesInvoiceMaturityHelpAdvanceFilterWidget can have an impact on profile (#TT04280/25) 
> -	PR - stampa lista fatture anticipate/incassate, revisione del repository method per gestione filtro incassate. Modifications in stampa lista fatture anticipate/incassate can have an impact on profile (#TT04572/25) 
> -	Propaga il codice di nomenclatura da PurchaseDeliveryNoteItem e SubcontractorItem nell'articolo della fattura di acquisto (TT04504/25) 
> -	Revisione procedure di carico magazzino per valorizzazione centri di costo su più dimensioni (#TT04277/25) 
> -	SCM - Dettaglio righe ordini: Risolta anomalia che causava l’applicazione delle modifiche anche a righe non selezionate, nel caso in cui fossero state deselezionate a seguito dell’applicazione di un filtro nella griglia. (#TT04404/25) 
> -	SCM - In fase di duplicazione di un ordine fornitore, il flag Prezzo manuale viene ora impostato anche nel nuovo ordine, se presente in quello originale. (#TT04446/25) 
> -	SCS - Risolta anomalia nel calcolo del costo degli articoli durante la registrazione di un Rientro di Conto Lavoro, in presenza di valorizzazione dei materiali a costo ultimo e valorizzazione per lotto e commessa di produzione. (#TT04474/25) 
> -	SD - Corretto l’aggiornamento dello stato di evasione dell’Ordine cliente in seguito alla creazione di una Lista di Prelievo UDC e di una Fattura generata dalla lista di prelievo. (#TT04412/25) 
> -	SD - In fase di duplicazione di DDT, Fatture o Pos, se non viene trovata un’aliquota IVA valida tra dichiarazione d’intento, anagrafica cliente o anagrafica articolo, viene proposto il codice IVA presente nel documento di origine. (#TT03962/25) 
> -	SD - Ordini Clienti: Data la possibilità di aprire Proprietà Ordine Cliente  di ordini diversi (rif.ticket 4409/25) 
> -	SD - Risolta anomalia nella duplicazione di DDT e Fatture di Vendita che applicava l’aliquota IVA del cliente anche alle righe di tipo Note. (#TT04147/25) 
> -	WM - Corretto bug che impediva di inserire lotto economico nei parametri MRP dell’articolo nel caso in cui l’unità di misura dello stesso fosse con zero decimali. (#TT04418/25) 
> -	WM - Corretto mancato aggiornamento lotto economico in parametri mrp se um senza decimali. (#TT04481/25) 
> -	WM - Duplica articoli- creare la possibilità di estendere in modo personalizzato per altre proprietà da duplicare (#TT04607/25) 
> -	WMS - Corretto errore in ricevimento merce al salvataggio nel ricalcolo delle scadenze. (#TT04454/25) 

### Patch 801.0026 - 15/10/2025

> -	MES - Verticalizzazione Pharma - Ordini di produzione - Corretta anomalia che non effettuava un refresh della form al cambio stato workflow di "Parzialmente associato", non visualizzando automaticamente la griglia del dettaglio dei Lotti (#TT04063/25) 
> -	MES - Verticalizzazione Pharma - Ordini di produzione - Corretta anomalia che non decrementava la "Quantità totale" di consumo del materiale principale assegnando una "Quantità totale" di consumo ai materiali alternativi (#TT04062/25) 
> -	SCM - Dettaglio righe ordini: Risolta anomalia che causava l’applicazione delle modifiche anche a righe non selezionate, nel caso in cui fossero state deselezionate a seguito dell’applicazione di un filtro nella griglia (#TT04404/25) 
> -	SCM Nir - correzione delle sorgenti lotti e delle quantità residue. TT04344/25 
> -	SH - Documenti Sdi: Abilitato l’invio massivo dei Documenti di Vendita in uscita anche per file Sdi importati dall’esterno (#TT03619/25)  
WMS - Corretto errore in ricevimento merce al salvataggio nel ricalcolo delle scadenze (#TT04454/25) 

### Patch 801.0025 - 10/10/2025

> -	CO - Valorizzazione Distinta Base - E' stato corretto il calcolo del Costo dell'articolo. Il costo considera la ripartizione del Costo di attrezzaggio sulla base della quantità indicata nel parametro Lotto (parametro richiesto all'esecuzione del report) Costo materiali + Costo lavorazioni: macchina, manodopera ed esterne + Costo attrezzaggio / Lotto (#TT04238/25) 
> -	FI - Corretto Calcolo LIPE errato in presenza di IVA indetraibile e Pro-Rata (#TT03934/25) 
> -	FI - implementato giroconto automatico dell’iva indetraibile per pro-rata in fase di stampa definitiva e contabilizzazione della liquidazione periodica. **Attenzione! Questa modifica può impattare sui profili** (#TT04295/25) 
> -	FI - revisione contabilizzazione fatture per valorizzazione dimensione progetti (#TT04328/25) 
> -	FI - SafTGeneralLedgerEntryFilterResults - add option "Grouped" default 0. **Attenzione! Questa modifica può impattare sui profili** (#TT04178/25) 
> -	MES - Corretta anomalia nella registrazione delle dichiarazioni di produzione nel caso in cui venisse inserita una quantità scartata per un materiale (#TT04110/25) 
> -	MES - Corrette anomalie in MES sul tab operatori, dove gli operatori non attivi venivano riproposti come attivi nelle dichiarazioni successive e all’ordine di produzione che rimaneva in alcuni casi bloccato (#TT04122/25) 
> -	MS - Generazione Commesse di produzione da previsionale - Corretta anomalia (exception) generata durante la creazione della Commessa di produzione dai prototipi commesse (#TT04284/25) 
> -	MS - Implementata nelle commesse indipendenti o previsionali (in stato non esaminato o pianificato) la possibilità di modificare le date di inizio e fine previsione (#TT03335/25) 
> -	MS - Nella maschera Gestione cicli e fase di lavoro abbiamo corretto il filtro predefinito sullo stato per ogni tab del workflow e aggiunto anche il filtro ExtraData, che permette di visualizzare gli extra data relativi al ciclo, alle fasi del ciclo e all’articolo del ciclo. (#TT03893/25) 
> -	MS - Ora quando viene aggiunta una fase manualmente in un ordine pianificato o di produzione viene riportato correttamente anche il flag movimentabile della fase stessa (#TT04269/25) 
> -	MS - Ottimizzato il refresh delle griglie della form sequenza fasi nel caso in cui venisse modificato il campo note. (#TT04306/25) 
> -	PR - Corretto errore in fase di raggruppamento delle note di accredito con le fatture nelle ricevute bancarie. ( TT03636/25) 
> -	QY - Taratura strumenti - Corretta l'anomalia segnalata di errata gestione del numero di decimali nei valori da rilevare e rilevati dovuta alla non presenza dell'Unità di misura dello Strumento verificato (#TT04371/25) 
> -	Risolvere problemi di chiusura IVA versione RO (#TT04377/25) 
> -	SCM - L’importazione Web API dei DDT calcola correttamente le scadenze (#TT04223/25) 
> -	SCS - Conto lavoro di fase: Corretta anomalia che aggiornava lo stato della Commessa di Produzione a seguito dell’evasione di un Ordine di Produzione con ultima fase esterna, anche in presenza di ordini di livello superiore ancora in stato esecutivo (#TT03393/25) 
> -	SD - Stampa Fattura di Vendita: Risolta anteprima di stampa che esce vuota se non è già attivo il flag stampata (#TT03536/25 e #TT03531/25) 
> -	SH - Corretta anomalia che talvolta causava il cambiamento di stato del Workflow durante l’uso delle frecce della tastiera (#TT04285/25) 
> -	SH - webapi sull’oggetto FSLedgerAccount, revisione attribuzione codice di sottoconto del file su conti con numero massimo raggiunto (#TT04339/25) 
> -	WM - Differenze Inventariali: aggiunge articoli a 0 anche per lotti su cui ci sono altri lotti dell’articolo in lista (#TT03865/25) 


### Patch 801.0024 - 03/10/2025

> - FI - Inserite nuove opzioni per Ro 394 fiscal declaration. **Attenzione! Questa modifica può impattare sui profili** (#TT04183/25) 
> - FI - La modifica della categoria cespite ora cambia il sottoconto patrimoniale in testata cespite (#TT03931/25) 
> - FI - Revisione test di quadratura in contabilizzazione fatture con omaggi (#TT03708/25) 
> - MS - Fase soggetta a controllo qualità in  un Ciclo di produzione -  Tipo piano di controllo inseribile anche se la fase è stata resa soggetta a Controllo qualità senza confermare i valori (cambio riga).(#TT04190/25) 
> - SCM - Verticalizzazione Pharma - Edizioni - Ora è possibile modificare le informazioni di: Acquistabile, Data inizio, Data fine e Osservazioni, prima non editabili. 
> - SD - Gestione Acconti: Corretto l’aggiornamento del residuo acconto in caso di storno parziale. Abilitata la chiusura forzata dell’acconto tramite l’attivazione del flag Forzatamente evaso anche su fatture contabilizzate o con documento Sdi generato (#TT03759/25) 
> - WM - Ottimizzato algoritmo Valorizzazione Magazzino per UDC (#TT04132/25) 
> - WM - Tipologia prelievo FIFO dei lotti ora non considera le ubicazioni bloccate (#TT03598/24) 

### Patch 801.0023 - 19/10/2025

> - CO - Corretta anomalia nella procedura di calcolo costo nel caso di listini con prezzi con UM diversa da quella principale dell’articolo (#TT03766/25) 
> - CO - revisione ‘Ripresa ammortamento cespiti’ nelle chiusure infrannuali, ottimizzazione (si consiglia di eseguire la procedura con l’opzione ‘singola registrazione’ attiva) (#/25) 
> - FI - causali automatiche, revisione gestione Sottoconti automatici (#TT03869/25) 
> - FI - Corretto comportamento del filtro Categoria amministrativa nelle form generazione solleciti e generazione automatica solleciti (#TT03618/25) 
> - FI - Declaration 300 and 394 for RO - vat code 11 and 21 (#TT04041/25) 
> - FI - revisione import da DocFinance per esclusione blocchi in ricerca solleciti (#TT03926/25) 
> - FI - stampa Liquidazioni Agenti - vuota (#TT03928/25) 
numero ordine di produzione - numero lotto" e nel caso di una dichiarazione di produzione viene visualizzato: "numero ordine di produzione - numero lotto - numero dichiarazione di produzione" (#TT04069/25) 
> - SH - Rilascio set workflow base 
> - SH - Risolto bug esportazioni multiple da workflow (#TT03916/25) 
> - SH - Fast start, valorizzazione della tabella di dettaglio delle nature transazioni intrastat (#TT03930/25) 
> - SH - Revisione webapi di import dell’oggetto FSLedgerAccount per gestione anagrafica agenti (#TT03911/25) 
> - WM - Corretto bug nella procedura di chiusura di magazzino nel caso di gestione con UDC. Corretto bug nella procedura “Aggiungi / sposta articoli” presente in gestione UDC (#TT03596/25) 
> - WM - Corretto filtro magazzino nella chiamata API GetItemsAvailability (#TT03867/25)
> - WM - In analisi disponibilità migliorata la leggibilità del campo numero documento, dove nel caso in cui si tratti di un ordini di produzione viene visualizzato:  
> - WM - Rinominate le labels relative alla giacenza in analisi disponibilità, da: “Giacenza, Giacenza Disponibile, Giacenza Non Disponibile” a “Giacenza Operativa, Giacenza Operativa Disponibile, Giacenza Operativa Non Disponibile”. 

### Patch 801.0022 - 19/09/2025

> - CO - Corretta anomalia nella procedura di calcolo costo nel caso di listini con prezzi con UM diversa da quella principale dell’articolo. (#TT03766/25) 
> - CO - revisione ‘Ripresa ammortamento cespiti’ nelle chiusure infrannuali, ottimizzazione (si > - consiglia di eseguire la procedura con l’opzione ‘singola registrazione’ attiva) (#TT03929/25) 
> - FI - causali automatiche, revisione gestione Sottoconti automatici (#TT03869/25) 
> - FI - Corretto comportamento del filtro Categoria amministrativa nelle form generazione solleciti e generazione automatica solleciti ( #TT03618/25) 
> - FI - Modifica dichiarazione 300 and 394 for RO - Codice IVA 11 e 21 (#TT04041/25) 
> - FI - revisione import da DocFinance per esclusione blocchi in ricerca solleciti (#TT03926/25) 
> - FI - stampa Liquidazioni Agenti - vuota (#TT03928/25) 
numero ordine di produzione - numero lotto" e nel caso di una dichiarazione di produzione viene visualizzato: "numero ordine di produzione - numero lotto - numero dichiarazione di produzione" (#TT04069/25) 
> - Rilascio set workflow base 
> - Risolto bug esportazioni multiple da workflow (#TT03916/25) 
> - SH - fast start, valorizzazione della tabella di dettaglio delle nature transazioni intrastat (#TT03930/25) 
> - SH - revisione webapi di import dell’oggetto FSLedgerAccount per gestione anagrafica agenti (#TT03911/25) 
> - WM - Corretto bug nella procedura di chiusura di magazzino nel caso di gestione con UDC. Corretto bug nella procedura “Aggiungi / sposta articoli” presente in gestione UDC (#TT03596/25) 
> - WM - Corretto filtro magazzino nella chiamata API GetItemsAvailability (#TT03867/25) 
> - WM - In analisi disponibilità migliorata la leggibilità del campo numero documento, dove nel caso in cui si tratti di un ordini di produzione viene visualizzato:  
> - WM - Rinominate le labels relative alla giacenza in analisi disponibilità, da: “Giacenza, Giacenza Disponibile, Giacenza Non Disponibile” a “Giacenza Operativa, Giacenza Operativa Disponibile, Giacenza Operativa Non Disponibile”. 

### Patch 801.0021 - 11/09/2025

> - Add common libraries for Json on Script editor 
> - BI - fix algorithm call from query based SWITCHBOARD (TT03876/25) 
> - CO - modificato algoritmo di creazione della chiusura da private a virtual. (#TT03923/25) 
> - FI - importazione da DocFinance, se la partita da chiudere è legata ad un compenso professionista con partite gestite al netto ora Fluentis aggiunge automaticamente la registrazione che valorizza il debito della ritenuta (#TT03211/25). 
> - FI - Optimization of CalculateCustomerRiskOnDemand2 ( TT03855/25) 
> - FI - revisione gestione arrotondamenti sui movimenti dei centri di costo in contabilizzazione fattture di acquisto in valuta, revisione gestione natura articolo, sconti al lordo (#TT03742/25, #TT03840/25, #TT03845/25) 
> - FI - Risolto errore nella procedura di Creazione partita d’anticipo. (#TT03779/25) 
> - SCM - Corretta la proposta dei prezzi negli Ordini di Conto Lavoro rilasciati dalla Produzione, nei casi in cui il listino preveda prezzi diversi per fase di lavorazione. (#TT03418/25) 
> - SCM - Corretto errore nella generazione della Stampa Scadenziario Ordini fornitori. (#TT03881/25) 
> - SCM - Fatture di Acquisto: abilitato l’inserimento di Extra data nelle fatture già contabilizzate. (#TT03564/25) 
> - SCM: Il numero de lotto è stato modificato dopo aver inserito manualmente il valore nella bolla di consegna TT03872/25. 
> - WM - Corretto bug nell’import webapi degli articoli di magazzino nel caso in cui venisse importato anche il barcode della variante. (#TT03765/25) 
> - WM - Ora, i valori nella colonna "Stato Documento" della griglia di dettaglio dell'analisi analisi disponibilità vengono visualizzati correttamente. (#TT02367/25) 
> - WM - Prototipi: Nel calcolo del costo dei componenti vengono ora considerati anche eventuali prezzi per quantità definiti nel listino del fornitore preferenziale. Per i dettagli fare riferimento alla documentazione. (#TT03843/24) 
> - WMS - Ricevimento merci: migliorata la proposta di magazzino e causale in fase di creazione DDT (vedasi la documentazione in linea per i dettagli). (#TT03240/25)  
In fase di creazione del DDT, il magazzino e la causale verranno proposti nel seguente modo: 
- Se il magazzino riportato nell'ordine di acquisto è uno dei magazzini presenti nei [Parametri Carico/Scarico per utente] per quell’utente, la procedura lo propone.           
- Se il magazzino riportato nell’ordine di acquisto non è uno dei magazzini presenti nei [Parametri Carico/Scarico per utente] per quell’utente, la procedura lascia vuoti sia il campo del magazzino sia quello della causale di magazzino. In questo caso l’utente deve inserirli manualmente per poter proseguire, e quando prova a inserirli la procedura mostra un messaggio di conferma prima di poter proseguire: se clicca SÌ, può inserire uno dei magazzini presenti nei [Parametri Carico/Scarico per utente] per quell’utente; altrimenti se clicca NO, i campi magazzino e tipologia magazzino rimangono vuoti.       
- Se nell’ordine di acquisto non è specificato il magazzino e nei [Parametri Carico/Scarico per utente] per quell’utente è presente un solo magazzino, la procedura proporrà automaticamente quel magazzino e la relativa causale; mentre, se nei [Parametri Carico/Scarico per utente]per quell’utente sono presenti più magazzini, la procedura lascia vuoti sia il campo magazzino sia il campo della causale, e quando l’utente potrà scegliere tra quelli presenti nei parametri senza senza la necessità di mostrare alcun messaggio.  

### Patch 801.0020 - 04/09/2025

> - FI - contabilizzazione fatture di vendita per autofatture servizi esteri, revisione gestione “conto partner” nella causale automatica di giro (#TT03556/25) 
> - FI - F2021/2023 - Bug Extension - Fonderie Palmieri - change primary key ( TT03726/25) 
> - FI - revisione allineamento dati analitica/partite al cambiamento del progetto in testata registrazione contabile. (#TT02577/24) 
> - FI - revisione creazione registrazioni contabili da file Sdi (#TT03573/25) 
> - FI - tab analitica nelle registrazioni contabili, corretto caso in cui l'associazione al progetto salvava il riferimento solo alla testata e non alle righe progetto (#TT03591/25) 
> - PR - creazione manuale movimenti ordini clienti/fornitori nel cash flow, ottimizzazione procedura. Quando le righe da inserire sono più di 100, Fluentis segnala che è necessario salvare direttamente il cash flow. Le modifiche nel help subcontractor of cash flow possono avere un impatto sul profilos. (#TT01803/24) 
> - SCM - Creazione automatica Ordini da Ordini clienti: se nei parametri della procedura è attivo il flag "Esplosione livello da struttura distinta" l’ordine di acquisto generato conterrà il primo livello della distinta base dell’articolo presente nell’ordine cliente. Le quantità dei componenti saranno calcolate sulla base della quantità confermata in fase di generazione del prototipo, applicando i coefficienti di impiego indicati nella distinta base. (#TT02802/25) 
> - SD - Associazione Tipi Listini di Vendita: premendo Nuovo si aprirà la form di inserimento di una nuova associazione. Le modifiche nel both Filter and Object forms possono avere un impatto sul profilos (rif.ticket 3101/25)   
> - WM - Corretto bug che in alcune form (es. filtro distinta base) generava un errore nel caso in cui l’utente usasse apri form su uno degli elementi dopo aver cliccato il + sul filtro. (#TT03495/25) 