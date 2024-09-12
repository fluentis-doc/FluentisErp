---
title: Patch notes Versione 607
sidebar_position: 2
---

<details>
<summary>Patch 607.1-0001: 17/02/2023</summary>

-	Allineamento file xml Vat settlement per localizzazione HR
-	FI: revisione esportazione file F24(TT00559/23) 
-   CRM: Cliccando Invia dalle Newsletter, è possibile scegliere se utilizzare la Lista di distribuzione oppure inserire i destinatari all'interno del Modello (#TT02968/22)   
-   CRM: Creazione del filtro Oggetto nei tab Assegnato e Non assegnato delle Liste di distribuzione (#TT03113/23)

</details>

<details>
<summary>Patch 607.1-0002: 21/02/2023</summary>

-	MPS: Corretto bug in schedulazione che generava ordini pianificati con “Quantità utilizzo” null (#TT00511/23) 
-	WM: Corretto bug nella stampa inventario valorizzato nel caso in cui il cliente non avesse il sotto conto (#TT00528/23) 
-	FI: revisione maschera ammortamento cespiti per calcolo giorni possesso e attribuzione data ammortamento in elaborazione (TT03183/22) 
-	BZ: L’importazione standard dei Contatti CRM riporta la Persona Fisica (0) o Giuridica (1) in base ai parametri impostati nel foglio di importazione 
-	CRM: Risolto problema di duplicazione Attività nei Contatti creati (#TT00574/23) 
-	Import registrazioni da DocFinance, revisione inserimento pagamenti partite per esclusione righe sconto/abbuono 
-	MES: Corretto bug nella lista di prelievo materiali (#TT00402/23)  

</details>

<details>
<summary>Patch 607.1-0003: 24/02/2023</summary>  

-	MES: Bug fixed. Corretto bug nelle segnalazioni di produzione in merito alle causali e magazzini proposti (#TT00586/23)
-	CO: revisione gestione date competenza e conti utilizzati nella contabilizzazione rimanenze, revisione comparazione riclassificazioni per fomule e dettagli dei dati rimanenze iniziali/finali (TT00554/23)  
-	MES: Bug fixed. Risolto bug in lista prelievo materiali (#TT00620/23)
-	MPS: Bug fixed. Corretto bug sugli stati delle righe delle commesse multiprodotto (#TT00607/23)
-	SD: Correzione della duplica sconti articolo in caso di cambiamento tipo ddt di vendita (#TT00400/23)
-	ARM: visualizzazione di un nuovo messaggio quando l'utente non ha diritto alla transizione consentita; correzione della proposta di un'accettazione unica della transizione e del nome dello script della transizione consentita
-	FI: nella stampa della liquidazione iva periodica, quando si imposta il flag definitiva ora si assegna il prossimo periodo da stampare sulla base dell’ultimo inserito in tabella versamenti iva per l’anno (TT3266/22)
-	SCS: Aggiunti i campi di magazzino e causale di "Consegna materiali terzisti wip" nei parametri di conto lavoro; questi sono presi in considerazione dalle procedure di creazione degli ordini di conto lavoro (dal rilascio e dall'ordine di produzione) se è attivo il flag WIP presente nei parametri degli ordini di produzione.: (#TT00583/23)
-	SCS: Inserito il parametro relativo all'obbligatorietà dei lotti nei Parametri conto lavoro (#TT00360/23)
-	FI: revisione gestione segni note di credito
-	PM: i clienti fornitori per i quali è stata inserita una data fine validità >= alla data attività nella dichiarazione attività, non vengono proposti nel widget cliente fornitore del documento (#TT00555/23)  

</details>

<details>
<summary>Patch 607.1-0004: 02/03/2023</summary>  

-	SD: Disabilitato il doppio clic su stampa biglietto POS (#TT00611/23)
-	SD: Nell’evasione di più ordini in una fattura viene riportata solo la spesa Trasporto del primo ordine (#TT00631/23)
-	SD: Il Peso di riga in ddt e fatture viene ricalcolato anche al variare della quantità alternativa nel caso di UM alternativa Tassativa (#TT00656/23)
-	PM: ristabilita la possibilità di inserire un articolo codificato in un nodo di progetto work package node (#TT00643/23)  
-	MPS: Bug fixed. Corretto bug sullo stato di testata delle commesse (#TT00662/23)  
-	ARM: visualizzato un nuovo messaggio quando l'utente non ha i diritti per la transizione consentita   
-	WM: Bug fixed. Corretto bug negli inventari fisici in merito al pulsante “Creazione lista inventario totale” (#TT00626/23)  
-	MES: Bug fixed. Corretto bug nel calcolo della quantità dei materiali da consumare nel caso in cui vi siano molti decimali (#TT00670/23)
-	WM: Correzione errore di giacenza nel caso di valorizzazione ordine in ddt e poi in fattura di acquisto (#TT00661/23)
-	MPS: In definizione MPS, nel caso in cui sia attivato il controllo disponibilità, quando genero una commessa per un articolo di cui ho la completa disponibilità, questa commessa verrà creata con quantità zero e stato “Evaso” (#TT00662/23)
-	ARM: Correzione per l'eliminazione di uno script; Correzione per la configurazione del divieto di kan; Aggiunta di nuovi campi per il divieto di kan.
-	CO: revisione contabilizzazione rimanenze del controlling per gestione chiusura magazzini (#TT00554/23)
-	SCM: Le fatture di acquisto non immediate non hanno i lotti obbligatori a prescindere dai parametri di magazzino (#TT00623/23)”  

</details>

<details>
<summary>Patch 607.1-0005: 08/03/2023</summary>  

-	Abilitazione modifica campo 'Note iniziali' nelle fatture di vendita anche dopo la creazione di file fatture ordinarie Sdi(rif ticket #TT00593/23)
-	FI: Bilancio  (4 ugaglianze) Euroamount report  ( TT00750/23)
-	MES: Risolto problema di inserimento lotti nella prima riga delle Segnalazioni di produzione (#TT00717/23)
-	SD: I pesi articolo vengono correttamente riportati dall’ordine al ddt anche passando per il picking (#TT00722/23)
-	WM: Risolto problema di duplicazione lotti a seguito del carico ddt di acquisto antecedente alla creazione della fattura (#TT00715/23)
-	FI: Report CU: Risolto problema sulla città di nascita
-	SCS: Bug Fixed. Corretto bug nella procedura di registrazione rientri.: (#TT00695/23)
-	PM: Correzioni su calcolo quantità residua in progetto tab sal e dettaglio wip
-	PM: gli interventi pianificati sono visibili in calendario, l’inserimento delle date di servizio inserite nel documento creato è stato ottimizzato (ticket 00347/23)
-	PM: non è più possibile attivare confermato dallo scrum master se il servizio è in stato inserito, è adesso possibile inserire delle note nelle righe dello sprint (ticket 00463/23).
-	SCM: Le fatture di acquisto non immediate non hanno i lotti obbligatori a prescindere dai parametri di magazzino (#TT00623/23)”

</details>

<details>
<summary>Patch 607.1-0006: 10/03/2023</summary>  

-	FI: Scarica tassi di cambio for HR cambi valute (#TT00795/23)
-	FI: Pagamento Fattura in Valuta ( TT00646/23)
-	SCM: Negli articoli degli ordini fornitori, l’help di riga uscente digitando % nell’Articolo fornitore ha le colonne corrette (#TT00411/23)
-	ARM: visualizzazione il percorso preferenziale e il percorso alternativo quando l'utente non ne ha diritto (mostrare il messaggio quando l'utente tenta di selezionare un percorso senza diritto)
-	WM: Ottimizzato inserimento articoli nelle liste inventariali (#TT00562/23)
-	FI: revisione calcolo ammortamenti per localizzazione serba (#TT00682/23)
-	FI: Scarica tassi di cambio for HR cambi valute (#TT00795/23)
-	SD: Stampa Fattura: Sistemato script in report (#TT00816/23)  

</details>

<details>
<summary>Patch 607.1-0007: 14/03/2023</summary>  

-	SH: Modificata la priorità sulla trasformation FullTextFiscalDescription in modo che funzioni correttamente
-	SCS: Bug Fixed. Corretto bug nella procedura di registrazione rientri (#TT00695/23)
-	SCM: Risolto errore uscente al salvataggio del DDT dopo l'evasione di un ordine fornitore derivante da commessa (#TT00835/23)
-	SD: SalesInvoice SDI- considerare il tipo di persona per il fornitore di trasferimenti (#TT00843/23)
-	WM: Bug fixed. Corretto bug nella procedura di chiusura di magazzino (#TT00702/23)  

</details>

<details>
<summary>Patch 607.1-0008: 20/03/2023</summary>  

-	SH: Società: Modificata trasformation FullTextFiscalDescription modificata la descrizione in caso di società con lingua croata
-	SD: Inserito controllo su destinatario e destinazione in caso di Evasione ordini multiple in ddt o fattura (#TT00807/23)
-	SCS: Correzione errore Quantità residua nei Materiali degli ordini di conto lavoro evasi in ddt (#TT00459/23)
-	SCS: Inserita possibilità di evadere una quantità decimale nelle Consegna previste (#TT00817/23)
-	SCS: Correzione errore uscente al cambio Fornitore in un Ordine di conto lavoro derivante da Rilascio ordini pianificati (#TT00823/23)
-	SH: Errore Fluentis in procedura di duplicazione contatto ( TT00848/23)
-	PR: Risolto errore in generazione file SDD (#TT00419/23)
-	WM: Bug fixed. Corretto bug su “Anno Data Inserimento” del tipo codice serial number. (TT00757/23)
-	SCM: Correzione ricerca Articolo manuale nelle righe dei ddt di acquisto (#TT00850/23)
-	PM-SPRINT: sistemato l'aggiornamento automatico dello stato dopo aver confermato tutte le righe.  
-	MPS: Bug fixed. Nei parametri della schedulazione generale, ora viene correttamente salvato anche flag "Considera disponibilità anche per il primo livello”.  (#TT00706/23)
-	MPS: Bug fixed. Corretto bug in schedulazione generale nel caso in cui venga schedulata una commessa già in stato esecutivo. (#TT00688/23)
-	MPS: Reso editabile il campo "Data/Tassativa" (FSProductionJobOrder.Date) all'interno delle commesse di produzione.: (#TT00776/23)
-	SCM: Correzione della giacenza in caso di scarico ddt da magazzino successivo alla valorizzazione (#TT00804/23)
-	SCM: Gli sconti finali inseriti in fattura vengono riportate nelle righe del ddt di acquisto e nella registrazione di magazzino collegati (#TT00417/23)
-	SD: Nel caso di Creazione fattura da DDT e successivo scarico del DDT, la Visualizzazione giacenze viene aggiornata correttamente (#TT00802/23)  

</details>

<details>
<summary>Patch 607.1-0009: 24/03/2023</summary>  

-	FI: risoluzione exception 4882/2023
-	SH: Società: modificata transformation FullTextFiscalDescription per il footer dei report HR
-	FI: TT00786/23 corretto bug che non gestiva correttamente i valori durante le operazioni di distruzione cespite e alienazione parziale cespite operando da dentro la scrittura contabile di prima nota.
-	FI: Corretto report certificazione unica: non veniva riportato il codice fiscale del rappresentante firmatario della comunicazione  
-	FI: salvataggio parametri di creazione registrazioni contabili da file Sdi (#TT00821/23)
-	PR: l’esportazione cash flow per DocFinance non imposta più tutti i flag nei parametri automatici di generazione cash flow (#TT00891/23)
-	WM: Big fixed. Corretto bug in stampa Inventario a quantità valorizzato, nei casi in cui si venissero usati come valorizzazione il flag costo medio (senza da anagrafica articolo) o il flag costo ultimo con anagrafica articolo.: (#TT00753/23)
-	FI, SCM: Create registration from sdi document ( TT00935/23)
-	Bizlink: revisione localizzazione testo riferimenti fattura in file Riba (#TT00888/23)
-	CO: revisione comparazione riclassificazioni(TT00880/23)
-	SCM: Per le righe della Fattura provenienti da Rientro Conto lavoro non è possibile effettuare l'Aggiornamento Listini (#TT00654/23)
-	SH: nel fast start e nelle installazioni già attive, gestione dei record italiani di default della tabella festività (#TT00936/23)
-	WM_StampaGestionale: Articoli Non Movimentati: Modifica del formato del campo Data Ultima Registrazione in dd/MM/yyyy.
-	SD, SCM: Nella procedura di Duplica e Manutenzione, l’Aggiorna listini in Valore permette un numero di decimali libero (#TT00925/23)

</details>

<details>
<summary>Patch 607.1-0010: 31/03/2023</summary>  

-	SD: L'Ora trasporto nei documenti di vendita viene mantenuta se salvata, ma viene aggiornata all'ora attuale in caso di cambio Tipo trasporto (#TT00265/23)
-	MPS: Bug fixed. Corretto bug in schedulazione a capacità finita sulle date inizio e fine degli ordini pianificati.: (#TT03232/22)
-	MES: Negli ordini di produzione se viene indicato un lotto nei materiali, questo viene riproposto, in corrispondenza del materiale, anche nel relativo picking creato dalla procedura di Lista prelievo materiali.: (#TT01408/22)
-	SD: Nella testata dei documenti di vendita il bottone della ribbon bar è stato rinominato in "Inserisci Agente nelle righe" (#TT00890/23)
-	MES: Negli ordini di produzione se viene indicato un lotto nei materiali, questo viene riproposto, in corrispondenza del materiale, anche nel relativo picking creato dalla procedura di Lista prelievo materiali.: (#TT01408/22)
-	revisione file bonifici Sepa localizzazione francese, tolto il tag TwnNm e il blocco PmtTpInf presente dentro la sezione CdtTrfTxInf. #T00940/23
-	PR: nella maschera di Importazione registrazioni del modulo DocFinance, abilitazione della cancellazione da tastiera della singola registrazione selezionata nella seconda griglia (#TT00903/23)
-	SD: In caso di Creazione registrazione con la data del documento, vengono presi in considerazione anche le date per Mittente e Destinatario, oltre che per Vettore (#TT00575/23)

</details>

<details>
<summary>Patch 607.1-0011: 06/04/2023</summary>  

-	WM: Locations: bug fix: all'inserimento di una nuova località ora la collezione delle località "figli" viene mostrata correttamente e senza errori
-	CO: nell’elaborazione periodi del controlling, revisione gestione origine dati per differenziazione saldo contabile e manuale (TT#00991/23)
-	CO: nell’elaborazione periodi del controlling, revisione gestione tipo riga per distribuzione periodi su centro ‘valori non assegnati’ (TT#01010/23)
-	CO: nella duplicazione comparazione riclassificazioni del controlling, risoluzione errore nel caso di codifica centri con codici puntati tipo xxx.yy (#TT00973/23)
-	CO: nell’elaborazione periodi del controlling, revisione del calcolo indici per gestione su centri non soggetti a driver (#TT00974/23)
-	PR: Risolto problema in fase di creazione pagamenti fornitori manualmente, quando veniva creato un nuovo pagamento e contestualmente si andavano a richiamare le partite da inserire non venivano compilati tutti i dati relativi alla banca ma occorreva entrare ed uscire dal pagamento per avere il dettaglio compilato (Ticket: #TT00916/23)
-	MPS: Bug fixed. Corretto bug nella generazione del flusso automatico di produzione.: (#TT01060/23)  
-	SCS: Nel caso in cui l’ultima fase movimentabile e produttiva sia esterna, adesso il rientro di conto lavoro aggiorna correttamente la quantità prodotta nell’ordine di produzione.: (#TT00736/23)
-	SCS: Negli ordini di conto lavoro, il costo proposto per gli articoli privi di listino è pari a zero.: (#TT00978/23)
-	FI: Risolto problema nell’elaborazione della comunicazione liquidazioni periodiche iva, il credito anno precedente veniva erroneamente riportato prendendo lo stesso valore del credito periodo precedente andando così a raddoppiare il credito. (Ticket: #TT00875/23)
-	SD: Risoluzione eccezione uscente allo scarico dei documenti dal magazzino (#TT01071/23)
-	FI: revisione test su quadratura centri di costo/profitto in caso di società senza controlling e senza gestione separata cdc/cdp in causale contabile. #TT01055/23
-	SD: scadenziario ordini cliente: Modificata la formatting rules della stampa in modo che non vengano sovrapposte le date di scadenza
-	CO: revisione logica di creazione chiusure infrannuali per gestione dati per saldi senza ricalcoli dei dati valutari. ( TT01025/23)
-	MPS: Bug fixed. Corrretto bug in costificazione commessa, relativamente a documenti collegati manualmente alla commessa stessa .: (#TT00982/23)  
-	MES: Bug fixed. Corretto bug relativo alla percentuale di scarto (indicata sul componente della distinta base) sulle segnalazioni di produzione.: (#TT01050/23)  

</details>

<details>
<summary>Patch 607.1-0012: 12/04/2023</summary>  

-	SD: Una fattura proveniente da più ordini cliente riporta tutte le spese degli ordini di partenza; è stato corretto l'errore che moltiplicava le righe spesa riportate per il numero di righe articolo presenti negli ordini di partenza (#TT01088/23)
-	FI: cambiamento label in Dipendente, tab “Curriculum e corsi”
-	PM: quando viene duplicato un progetto da template il listino prezzi viene creato a partire del cliente in testata (ticket 00734/23)
-	PM: i ticket salvati sulla riga servizi vengono copiati nella riga di invoice plan, i ticket salvati in riga invoice plan vengono salvati correttamente (ticket 00758/239)
-	PM: Creazione attività da Interventi: Corretta anomalia riscontrata nell'aggiornamento delle date servizio con collegata l'attività, se l'intervento è già in da Approvare e l'attività collegata già creata e viene modificata la data del servizio non veniva aggiornata anche la data dell'attività. (rif.ticket 1065/23)
-	WM: In analisi disponibilità, è possibile salvare nel profilo anche il valore del periodo di verifica.: (#TT01082/23)
-	WM: Bug fixed. Corretto bug nel calcolo dei costi diretti all’interno dei prototipi.: (#TT00979/23)
-	SH: Procedura modificata: Contabilizzazione fatture di acquisto da registro SDI: migliorato il controllo per la memorizzazione del conto di contropartita, ora anche se è già stato memorizzato un conto di default abbinato al codice articolo, nel caso in cui nel file xml sia presente un diverso codice articolo (tag Codice Valore) viene nuovamente proposto il popup di abbinamento c onti in fase di contabilizzazione. Rif TT00981/23
-	CO: stampa bilancio infrannuale, soluzione errore in esecuzione per campi nulli (#TT01125/23)
-	BZ: L'importazione Listini Fornitori permette la creazione di un nuovo Articolo fornitore e l'inserimento dello stesso nel Listino importato: per fare ciò è necessario inserire il parametro "Inserimento articolo fornitore" (#TT01064/23)
-	BZ: Inserimento del BizLink Parameter "Stampata" nell'Importazione Fatture di vendita, che permette di importare le fatture con il flag Stampata (#TT02496/21)
-	FI: Registrazione contabile di acquisto cespiti, resi modificabili i campi delle percentuali di assegnazione a centro di costo/progetto (TT#01142/23)
-	MPS/MES: Variata la logica del cambio di stato nelle commesse di produzione, secondo le seguenti regole: 
1.	la commessa passa in stato “Esecutivo” quando viene rilasciato il primo: ordine pianificato acquisto, ordine pianificato di conto lavoro o ordine pianificato produzione e questo si trova nello stato “Esecutivo”;
2.	la commessa passa in stato “Lanciato” se vi sono solo ordini di produzione nello stato “Lanciato” e nessun ordine pianificato di acquisto o di conto lavoro rilasciato;
3.	se l'utente utilizza il comando di rollback, quando ci sono più ordini pianificati di acquisto o di conto lavoro rilasciati e nessun ordine di produzione in stato esecutivo o lanciato, la commessa ritorna in stato “Schedulata”;
4.	la commessa passa in stato “Evaso” quando tutti gli ordini con il “livello più basso” sono in stato evaso. Se l'utente modifica lo stato di uno di essi, anche la commessa cambia il proprio stato.  (#TT00969/23)
-	FI: contabilizzazione da fattura di vendita non interrotta in un periodo IVA chiuso: TT03261/22
-	FI: modifica gestione inserimento righe aggiuntive nella griglia dei centri di costo, quando questi sono di dimensione differente. #TT00911/23
-	CO: Aggiunto un filtro per 'Dimensione' nell'intestazione del modulo 'Valori di controllo'.  (TT01150/23)  

</details>

<details>
<summary>Patch 607.1-0013: 13/04/2023</summary>  

-	PM: il service level agreement e il livello severità impostati nel tipo richiesta intervento viene riportato in documento (ticket 01092/23)
-	MPS: Bug fixed. Corretto bug nel calcolo disponibilità. (#TT01074/23)  

</details>

<details>
<summary>Patch 607.1-0014: 28/04/2023</summary>  

-	WM:Stampa Picking: Gestita anomalia per cui era visibile solo un lotto per articolo Picking
-	BZ: Correzione errore dei totali azzerati nel caso di importazione Ordini fornitore con quantità maggiori di uno (#TT01052/23)
-	SD: Se la fattura proviene da Ordine, nel file xml verrà riportato il campo Vostro riferimento di testata; se assente, verrà riportata la dicitura VUOTO (#TT03021/22)
-	WM: Nei documenti di vendita, acquisto, logistica e conto lavoro vengono riportati il Peso netto e il Peso lordo totali delle righe articolo, presi dall’anagrafica dell’articolo (#TT02570/22)
-	ARM: Dasboards: mostrare messaggio di completamento dell'operazione (#TT01198/23)
-	MES: Inserita la possibilità di gestire i decimali nella colonna Quantità del tab Lotti delle Segnalazioni di produzione (#TT01163/23)
-	WMS: Corretto il funzionamento del campo quantità nella maschera WMS di Sposta Articolo in caso di unità di misura gestionale senza decimali.
-	MPS: Bug fixed. Risolto un bug nella cancellazione di commesse schedulate con l'esecuzione automatica dell'mrp.
-	FI: Revisione contabilizzazione fatture di acquisto per violazione constraint su valori centri di costo ( 8137/23 notification)
-	SCM: Le note di credito create da ddt di reso riportano le spese Conai con il segno negativo, come le altre righe del documento (#TT01019/23)
-	SCM: Le Note di Accredito hanno le righe Articolo con la Quantità negativa; nel caso di inserimento Quantità positiva, uscirà un pop up per cambiare il segno della quantità (#TT02609/22)
-	PM: viene inserito un prefiltro nella maschera delle richieste ferie e permessi con risorsa = Resource = risorsa collegata (SEC_Users)  e data = primo giorno anno corrente (ticket 00931/23)
-	SCM, SD: Inserito pop up di avviso IVA obbligatoria in caso di cambio cliente o fornitore in Fattura (#TT03387/22)
-	SH: ottimizzazione flag Gestione RAEE nelle anagrafiche clienti e fornitori: esso è presente solo nelle anagrafiche clienti (#TT01192/23)
-	FI: Risolto problema all'interno della maschera partite, se una partita veniva inserita all'interno di un pagamento fornitore il flag 'In pagamento' non veniva attivato automaticamente nella partita. (Ticket: #TT01141/23)
-	SD: Nel caso di una commessa creata da un ordine cliente (con la procedura automatica o da Definizione MPS), se viene modifica la data merce pronta nell'ordine cliente la procedura aggiorna la data merce pronta della riga commessa.: (#TT01252/23)
-	CO: nei valori di controllo del controlling, revisione calcolo dell’ultimo tab Valori di conguaglio #TT01171/23
-	WM: Bug fixed. Corretto bug in creazione distinta base nell’inserimento dell’articolo padre.: (#TT01268/23)
-	MPS: Bug fixed. Corretto bug nel calcolo disponibilità nella schedulazione generale.: (#TT01274/23)
-	SCM: Il Ricevimento merci riporta nel Prezzo il Costo ultimo dell'articolo (#TT01151/23)
-	SCM: Nella tabella fluentis.SCM_PurchaseDemandItems i campi SCMPDI_Quantity e SCMPDI_ResidualQuantity hanno lo stesso arrotondamento decimale, per evitare che le richieste di acquisto risultino parzialmente evase (#TT01209/23)
-	maschera Partite, revisione calcolo dei risultati quando si filtra per ‘partite aperte al’ #TT02206/22
-	PR: Area Tesoreria, Modulo rischio cliente, corretto bug che nel ricalcolo rischio cliente non considerava correttamente le partite provenienti da registrazioni provvisorie. Rif #TT00947/23  
-	MES: Bug fixed. Corretto bug nel caso in cui in un ordine di produzione si cambi una fase da esterna ad interna con un centro di lavoro a cui mancano gli orari di inizio e fine (#TT01311/23)  

</details>

<details>
<summary>Patch 607.1-0015: 04/05/2023</summary>  

-   BZ: Le righe Nota vengono importate senza Prezzo e Quantità, nelle importazioni BizLink di Ordini Clienti e Ordini Fornitori (#TT01052/23)  
-   SD: Quantità, Quantità Residua e Quantità da Evadere hanno lo stesso arrotondamento dei decimali nella maschera di Evasione Ordine in DDT (#TT01325/23)  
-   SD: Quantità, Quantità Residua e Quantità da Evadere hanno lo stesso arrotondamento dei decimali nella maschera di Evasione DDT in Fattura (#TT01296/23)  
-   CRM: Risoluzione eccezione 429 del server nell'apertura dei Contatti (#TT01318/23)  
-   SCM: In area acquisti, revisione del calcolo importo scopertura dichiarazioni di intento (#TT01126/23)  
-   WM: Nei movimenti di magazzino è possibile trascinare dall'object navigator il campo "Articoli commessa di produzione", questo visualizzerà il relativo numero di commessa. (#TT01319/23)  
-   SH: Eliminazione del concetto di transizione nell'esecuzione delle store procedure da scripting    
-   BZ: Ottimizzazione importazione standard dei cicli di lavoro tramite import excel.: (#TT01359/23)  
-   SCS: Attivazione del filtro per gli articoli Parzialmente evasi nella maschera di Ricerca Ordini di conto lavoro (#TT01374/23)  

</details>

<details>
<summary>Patch 607.1-0016: 11/05/2023</summary>  

-   PR: distinte di anticipo fattura, valorizzazione campo data scadenza (#TT01399/23)   
-   MPS: Corretto bug in schedulazione nel caso in cui venga schedulata una commessa già in stato esecutivo (#TT00965/23)   
-   MPS: Corretto bug sullo stato commesse di produzione nel caso in cui l’ordine di primo livello non sia stato rilasciato (#TT01352/23)   
-   MPS: L’inserimento da Object Navigator della colonna Tipo nella Ricerca Cicli di Lavoro non manda più in errore la Ricerca (#TT01401/23)   
-   MPS: Corretto bug sul calcolo della data prevista inizio e fine lavorazione nelle testate delle commesse multiprodotto (#TT01242/23)  
-   MPS: Corretto bug sul campo “Articoli commessa di produzione” nel caso in cui venga trascinato dall’object navigator negli ordini pianificati (#TT01418/23)  
-   SD, SCM: Nelle note di credito l’inserimento dei Materiali Conai riporta una spesa con quantità negativa (#TT01428/23)  
-   SD: Nei Listini di vendita, dopo aver cliccato Nuovo articolo, nella ribbon bar, è possibile inserire gli articoli con il tasto destro Incolla nelle celle  (TT#TT01444/23)  
-   SD: Abilitata modifica causale di chiusura automatica scadenze in fatture già inviate allo Sdi. (#TT00344/23)  
-   SH: Workflow: Corretto bug nello states navigator in quanto non visualizzava lo stato successivo, mentre in modifica del documento si vede (#TT01302/23)  
-   WM: Bug fixed. Corretto bug in fase di inserimento varianti nella distinta base (#TT01402/23)  

</details>

<details>
<summary>Patch 607.1-0017: 11/05/2023</summary>  

-   WM: Bug fixed. Corretto bug in “Gestione UDC”. Ora i decimali dei campi “Peso netto” e “Peso lordo” vengono visualizzati correttamente (#TT01486/23)  
-   WM: Bug fixed. Corretto bug in anagrafica articoli inerente all’inserimento varianti (#TT01482/23)  
-   SCM: Corretto errore che impediva l’esecuzione delle query salvate sulla maschera di ricerca delle richieste di acquisto (#TT01195/23)  
-   FI: revisione gestione griglia di contabilità per messaggio ricalcolo importi in valuta  

</details>  

<details>
<summary>Patch 607.1-0018: 22/05/2023</summary>  

-   SH: La lunghezza massima del campo Codice destinazione nell’Elenco destinazioni dell’anagrafica contatto è stata portata a 8 (#TT01370/23)  
-   FI: revisione salvataggio credito anno precedente per periodo gennaio/primo trimestre (#TT01380/23)  
-   QY: Taratura strumenti: Alcune aggiunte al filtro dell'anagrafica degli Strumenti di Misura: Extra-data, Articolo associato, Fornitore di: acquisto, manutenzione/assistenza, taratura, ubicazione e Cliente proprietario (#TT01535/23)  
-   SD: Inserimento di un nuovo messaggio di errore “L’ordine non può essere evaso perché non è stato impostato il Tipo documento per l’evasione” nel caso di impossibilità di evasione ordine in ddt, fattura o picking (#TT01517/23)  
-   FI: nella stampa del Bilancio di verifica della localizzazione serba, abilitazione del filtro per classe 0 (#TT01544/23)  
-   E’ stata integrata la logica di generazione del file in base alle chiavi di raggruppamento (#TT01545/23)  
-   FI: Liquidazione iva periodica, corretto bug in fase di stampa liquidazione iva a cadenza trimestrale  
-   SCS: Revisione report Scadenziario Rientri: vengono riportati il numero d'ordine, di riga e i raggruppamenti (#TT01521/23)  
-   FI: Comunicazione liquidazioni periodiche iva, revisione stampa che non riportava correttamente i campi relativi alla partita iva dell’azienda e il codice fiscale del dichiarante (#TT01499/23)  
-   Aggiunta  dell’esportazione documento "Comunicazione OPZ"  per la localizzazione Croazia  
-   SD: Correzione dei problemi di aggiornamento dei valori del prezzo e dell'arrotondamento nella creazione listini di vendita(#TT01552/23)  
-   BZ: Allineamento tracciato importazione movimenti contabili da Excel (#TT01321/23)  
-   SCM: Risoluzione dell’errore che rendeva Non evaso l’ordine collegato, in caso di Rollback Valorizzazione DDT di acquisto in fattura (#TT01511/23)  
-   SCS: Rinominata la colonna Descrizione articolo nei Materiali dei Rientri di conto lavoro (#TT01327/23)  
-   PM: inserimento di una nuova funzionalità in tipo sprint che permette di impostare la riapertura dello sprint quando viene modificato il prezzo in un documento inserito nello sprint (ticket 01188/23)  
-   WMS: Ora nella form Giacenza Articolo del WMS, se viene ricercato un articolo gestito a lotti inserendo un lotto nell'apposito filtro della sezione filtri, la ricerca rimanda i risultati legati a quel singolo lotto. non piu i risultati legati ai lotti che comprendono il codice inserito nel filtro. (#TT01541/23)  
-   WMS: Ora, se utilizzata una UM Default per WMS, in un articolo gestito a lotti, lo Sposta Articolo funziona correttamente (#TT01538/23)  
-   CO: revisione errore entrando in secondo tab/totale numeratore per calcolo indici sempre a zero quando si visualizza il dettaglio periodi ( TT01559/23)  

</details>  

<details>
<summary>Patch 607.1-0019: 26/05/2023</summary>  

-	WM - Aggiornato l'ordinamento dei dati nel report di stampa del giornale di magazzino; ora l'ordinamento delle righe avviene per magazzino e per data registrazione
-	WMS - Implementata funzione form conferma picking con gestione ubicazioni e gestione lotti (#TT01515/23)
-	SCM – Attivazione dei filtri nella procedura Evasione da ordini (#TT01575/23)
-	FI - Corretto report registri iva, riportava un indicazione sbagliata relativamente alla quota parte di competenza dei periodi precedenti/successivi (#TT00207/23)
-	SCM - La stampa Scadenziario Ordini Fornitore effettua l'ordinamento per Fornitore o Data consegna in base ai filtri selezionati (#TT01501/23)
-	MES – Risolto errore che lasciava attivo il bottone Salva nel caso di Creazione Ordine di Produzione da Rilascio Ordini pianificati e successivi modifica stato del workflow, aggiunta fase e cambiamento dello stato in Esecutivo nell’OP (#TT01573/23)
-	MES – Aggiunta la colonna “Quantità da produrre” nella tabella degli ordini di produzione della procedura di stampa del Foglio di lavoro. (#TT01503/23)
-	SH – Attivazione del Codificatore articolo anche per Extra Data basati su Data Source, durante la creazione di un nuovo articolo o la sua duplica (#TT01488/23)
-	SH - Risoluzione dell’eccezione uscente all’inserimento del flag “Utilizza in codice” nel tab Codificatore articolo della tabella Classi articolo (#TT01488/23)
-	FI – Risolto problema nella stampa liquidazione iva periodica a cadenza trimestrale, se la stampa veniva eseguita con il flag definitiva attivato veniva generato un errore (#TT01604/23)
-	SCM – Nella Creazione Automatica Ordini sono visibili anche gli articoli che non hanno un Fornitore preferenziale in anagrafica (#TT01590/23)
-	SH – Il pop up che avvisa l’utente di aver inserito un Progetto intestato a un soggetto diverso dall’intestatario del documento è stato lasciato solo nel modulo Gestione progetti e nei Workreport (#TT01571/23)
-	SCS – Risoluzione dell’eccezione uscente nel caso di inserimento articolo in un Ordine di conto lavoro con inseriti in testata il Progetto e la Commessa di produzione (#TT01572/23)
-	ARM - fix database context menu articoli visualizzato in base alla configurazioene Arm  - parametro ChangeLevelAllowed
-	CO - nei Valori di controllo del Controlling, il tab Valori commesse filtra ora sulla tabella specifica dove si valorizzano i driver di commessa/progetto (#TT01587/23)
-	SD - La modifica delle righe articolo in un'Offerta intestata a Contatto CRM è stata ottimizzata nel caso di Spese nei riepiloghi (#TT01598/23)
-	ARM – Correzione della deserializzazione della Dashboard esistente quando non è impostato alcun filtro (#TT01653/23)
-	SCM - Le righe articolo ordine con una quantità residua negativa non sono visibili nella procedura di Evasione in DDT (#TT01431/23)
-	PR - creazione automatica pagamenti fornitori - filter on "conto" is not working in 2021 anymore (#TT01100/23)
-	Risolto il problema con la logica di raggruppamento di DocumentNumber, sul documento VendorPayment per Rs (#TT01659/23)
-	FI - revisione stampa liquidazione iva annuale per totali iva in sospensione di competenza di anni differenti (#TT01328/12)
-	SCM – Nella procedura Evasione da Ordini, la Quantità da evadere diventa visibile alla selezione del flag della corrispondente riga (#TT01617/23)
-	MPS - Schedulazione generale - Parametri non memorizzati
-	Nei parametri, quando si imposta il flag "Considera le disponibilità provenienti da: Acquisto e si procede con la schedulazione, non vengono considerati gli ordini di acquisto ed il parametro non viene memorizzato (#TT01616/23)
  
</details>  
