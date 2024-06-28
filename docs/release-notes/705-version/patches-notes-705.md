---
title: Patch notes Versione 705
sidebar_position: 1
---

### Patch 705.1-0023 - 21/06/2024
> - SD – Add ConvertAllSelectedOffersToSalesOrders static method for scripting(TT01258/21)
> - SH – Import excel listini di vendita – Corrette anomalie in fase di duplicazione tracciato e in caso di import del cliente in anagrafica articolo (#TT02871/24)
> - FI - nei compensi professionisti, revisione campo inps carico percipienti del primo tab nel caso di calcolo manuale (#TT02802/24).
> - FI - revisione stampa Controllo cespiti per importo del fondo in caso di alienazioni totali/parziali (#TT02537/24)
> - CO - revisione gestione comparazione riclassificazioni per interfaccia browser (#TT02750/24)
> - PM: valorizzazione interventi, effettuata correzione per valorizzazione parziale. (#TT02739/24)
> - SH - Modificate le descrizioni dei record in tabella fissa “Natura giuridica”, per differenziare ‘Residenti’ da ‘Non residenti’ come da tabella delle istruzioni 770 (#TT02870/24)
> - ARM – review documentation forms

### Patch 705.1-0022 - 20/06/2024
> - MES – Corretto bug nelle segnalazioni di produzione inerente all’ubicazione degli articoli prodotti e gestiti a lotti. (#TT02667/24)
> - CRM-CrmContact - layout changes (#TT01258/21)
> - SD - nella stampa del bilancino di fatturazione, revisione gestione segni nel subreport dei totali per fatturato vendite (#TT02720/24)
> - MS – Corretto errore nell’elaborazione dell’MRP che generava il blocco dell'operazione (#TT02408/24).
> - FI - Mancato refresh pulsante "Ricerca partite" in registrazione contabili – crash ( TT02089/20)
> - SH – Fix for map control (use new API)
> - SH – Changes for pivot grid(#TT02756/24)
> - CRM – Enable virtualization for campaign and distribution list grids
> - PM: WEB sprint - ripristinate colonne fisse a destra con i flag di verifica (#TT02762/24)
> - PM: WBS assegnazione risorse risolto drag&drop su calendario dalla seconda risorsa in poi (#TT02544/24)
> - WM – Corretto bug nell’export excel dei dati presenti nel report Implosione componenti che non riportava il valore nella colonna quantità. (#TT02753/24)
> - MS – Nel ciclo di produzione, quando si associa un materiale ad una determinata fase, questo non viene più visualizzato nell’help tra i materiali che rimangono da associare alle singole fasi.  (#TT02785/24)
> - MES – Corretto errore che non riportava l’ubicazione nella registrazione della dichiarazione di produzione (#TT02807/24).
> - Set first day of week for the scheduler (based on current culture) (#TT02849/24)
> - SH – E’ permessa la navigazione tra gli stati del Workflow nelle Ricerche, anche se l’oggetto è customizzato (#TT02414/24)”.
> - SH - Nell'anagrafica agenti sono stati aggiunti i campi di link all'utente arm associato e all'impostazione di visibilità dei documenti, per gestione restrizioni di visibilità su accessi esterni. (#TT02866/24)
> - SD-Change name for LineNumber and ItemRowType (#TT02808/24)
> - SD – Set Stereotype for SalesOrder ForcedExecutedQuantity (#TT02718/24)
> - The general parameters form for Excel imports from the web is not displayed correctly 
> - Solved bug to export BizLink Documents from WebUI (#TT02747/24)
> - WM – Corretto bug in dettaglio movimenti che non visualizzava il movimento di scarico di UDC in determinate condizioni. (#TT02472/24)
> - Solved bug to compile some script with out LastModified info
> - FI - revisione gestione assegnazione numerazione cespiti in caso di cambiamento categoria/precodice cespite (#TT02777/24)
> - FE San Marino: Fatture di Vendita non conformi Ora è possibile riportare una fattura di vendita non conforme per l'HUB di San Marino allo stato Da Esaminare per la correzione. (rif.ticket 2791/24)
> - FI - Exception in double posting involving Sottoconto i pagamento ( TT02938/24)
> - WM-Add WebAPI Picking Import, Export and WarehousePosting operations (TT02108/24)
> - SH - Contatti Clienti/Fornitori/Agenti: se il cliente/fornitore/agente è stato inserito da procedure esterne Fluentis senza inserire il record nella tabella dei dati amministrativi/Contabili, il record viene creato automaticamente quando si entra in modifica del contatto collegato al tipo conto Cliente/Fornitore/Agente. (rif ticket 2778/24)
> - PM: WEB corretto salvataggio profilo negli interventi per determinati campi come il conto cliente e la nazione (#TT02873/24)
> - PM: WEB risolto caso di anomalia in apertura planner  (#TT02882/24)
> - CRM: risolta visualizzazione contatti limitata a 200 nelle campagne (#TT02895/24)
> - CRM: WEB l'ultima descrizione inserita a livello di workflow log del contatto della campagna CRM, viene riportata in automatico nel campo descrizione del contatto della campagna (#TT02932/24)
> - PM: WEB risolta segnalazione in inserimento nuovo intervento / nuovo servizio (#TT02854/24)


### Patch 705.1-0021 - 13/06/2024
> - Report VatRegisterSale hr-HR updated to latest version by Croatian standard, field 17 has been added (0% VRIJEDNOST ISPORUKE)
> - Add XmlWriter dll for Script
> - Solved bug with row with Debit and Credit (#TT02694/24)
> - MS - Rilascio Ordini pianificati - Ricalcolo errato quantità totale consumo materiali se Ordine diviso in più lotti (#TT01949/24)
> - WMS - Corretto bug nella form Gestione UDC del WMS che proponeva un magazzino anche nel caso in cui ce ne fosse più di uno associato a quell'utente. Quindi, nel caso di più magazzini, il magazzino viene proposto vuoto e deve essere selezionato manualmente dall'utente. (#TT02639/24)
> - MES – Implementata la gestione dei siti produttivi nel rilascio ordini pianificati, negli ordini di produzione e nelle dichiarazioni di produzione. (#TT02188/24)
> - FI - allineato comportamento della stampa controllo cespiti che ora restituisce i risultati di tutte le categorie se non viene selezionata alcuna categoria in particolare. ( TT02502/24)
> - SD – Corretto errore che nominava la stampa ‘Fatturato’ erroneamente come ‘Lista fatture’ (#TT02669/24)
> - PR - Giroconto iva errato dopo insoluto ( TT02378/23)
> - WM- Corretto bug nella gestione prototipi che non visualizzava correttamente il flag fittizio degli articoli. (#TT02679/24)
> - MS – Aggiunto messaggio di errore nella procedura di Rilascio ordini pianificati nel caso in cui l’ordine pianificato da rilasciare è aperto da un altro utente (#TT02620/24).
> - SD: Convertendo un’offerta in ordine, vengono propagati dall’offerta all’ordine tutti i dati relativi alla riga articolo in comune ai due tipi documento. (TT02613/24)
> - SD – Corretto errore (con messaggio ‘Primo carattere non valido’) che impediva l’inserimento del Mask nella procedura di Creazione Listini Avanzata (#TT02648/24)
> - Nuova webapi per l’import/export dei file Sdi (#TT01950/24)
> - SCM: Le bolle di consegna dell'acquisto non devono essere eliminate se contengono documenti SDI TT02436/24.
> - WM – Corretto bug nella stampa inventario a quantità valorizzato inerente al flag storicizzazione inventario.  (#TT02708/24)
> - FL Browser: SD – Corretto errore negli Ordini Clienti e nei DDT di Vendita (#TT02634/24)
> - SD – Ottimizzata la ricerca e selezione delle righe nelle procedure di Evasione Ordini e DDT (#TT02311/24).
> - FL Browser – Save Attachment from Document manager – edit form (#TT02482/24)
> - PM: Planner e WBS assegnazione risorse - introdotto flag "evidenziare giorni delle risorse che hanno disponibilità" che colora lo sfondo per le risorse/giorni in cui non tutto l'orario lavorativo è stato allocato con appuntamenti. (#TT02538/24)
> - PM: WEB risolto errore in inserimento riga servizio intervento (#TT02735/24)
> - PM: webapi importazione attività, introdotti controlli su coerenza date-orari (#TT01986/24)
> - MS – Nei Parametri MS è ora possibile salvare le modifiche apportate ai flag di Rilascio Ordini Pianificati anche senza aver effettuato una prima Pianificazione Generale (#TT02672/24).
> - PM: modificata stampa dettaglio progetti, in modo che consideri anche le registrazioni contabili di prima nota generica, non solo le registrazioni relative a documenti di acquisto o vendita (#TT02528/24)
> - FI - revisione contabilizzazione fatture di acquisto con righe con/senza fatturato acquisti su stesso sottoconto ( TT02771/24)
> - FSContact – WebApi import/export
> - MES – Corretto bug relative alla Web API SignalItemImportExport che non importava correttamente le note. Inoltre, è stato implementato il seguente comando: \<RecomputeMaterialsQuantity\>True\</RecomputeMaterialsQuantity\> (che accetta i seguenti valori: 1, 0, True/true, False/false e ha default True), il quale permette di decidere se le quantità dei materiali consumati debbano essere ricalcolate o meno all’interno della dichiarazione di produzione. (#TT02512/24)
> - SCM - Ottimizzata la procedura di valorizzazione di molti DDT di acquisto con creazione di fatture contenenti centinaia di righe (#TT01706/24).
> - PM: Introdotto filtro per lo "stato sprint" nella griglia di ricerca degli sprint (#TT02761/24 )
> - PM: generazione interventi da richiesta interventi, corretta procedura in modo che gli orari dell'intervento siano ereditati dalla richiesta intervento (#TT02748/24)
> - PM: nella richiesta intervento o intervento pianificato, selezionando il progetto viene proposto l'articolo e la unità di misura dal progetto (#TT02647/24)
> - SD – Selezionando il Raggruppamento per Tipo e Soluzione di Pagamento all’interno dei Parametri di raggruppamento nei documenti di destinazione saranno riportati i pagamenti presenti nei documenti di origine (#TT02403/24)
> - ARM - Ensure base loadrequest is loaded before allowing IsActive flag (#TT02642/24)
> - CO - Reclasification Model - add new options ( TT02288/24)
> - SCM – Nei parametri delle procedure di Valorizzazione DDT di Acquisto e di Rientro è stato aggiunto un nuovo flag che, se settato permette di inserire i DDT all’interno delle fatture riepilogative ordinandoli per numero documento fornitore invece del numero interno (#TT01817/24).

### Patch 705.1-0020 - 07/06/2024
> - SH - Grouping algorithms- add order by property Number string (#TT02403/24/19)
> - Solved bug with Supervisor global paramaters
> - SCS: Arrotondamento per Cdc su ordine di acquisto, DDT di acquisto, Fattura di acquisto TT02500/24
> - SCM: La richiesta di acquisto deve essere considerata eseguita se vengono eseguite tutte le righe, ad eccezione delle righe di nota TT02389/24.
> - SH – Corretti bugs in Gestione prototipi, inerenti ai pulsanti taglia e importa; inoltre sono stati apportati altri miglioramenti. (#TT01978/24)
> - MS – Corretto errore nella visualizzazione della disponibilità nella procedura di Generazione automatica commesse da Sottoscorta (#TT02448/24)
> - PM - Planner corretta visualizzazione di alcuni appuntamenti. (#TT02505/24)
> - PM - Planner selezionando una nuova risorsa nel filtro, il calendario si aggiorna automaticamente senza dover premere cerca. (#TT02539/24)
> - PM - Planner risolto caso di cancellazione appuntamento relativo a risorsa progetto che cancellava l'intera wbs (#TT02504/24)
> - PR - Webapi for FSContactAccountRiskLock object (#TT02399/24)
> - ARM - blazor projects generation - fix (path containing spaces and regenerate when first build fails)
> - WM - Rimosso il flag "Scarico lotto" nelle causali di magazzino perchè obsoleto. (#TT02465/24)
> - WMS – Nella form Giacenza articolo del WMS, sono stati nascosti gli articoli con giacenza pari a zero e le ubicazioni con quantità pari a zero. (#TT02177/24)
> - WMS – Nella form Giacenza articolo del WMS, sono stati nascosti gli articoli con giacenza pari a zero e le ubicazioni con quantità pari a zero. (#TT02177/24)
> - SD: Non è possibile eliminare gli avvisi a cui sono allegati documenti SDI (TT02438/24)
> - FI - revisione chiusura commissioni in registrazioni contabili di incasso/pagamento (#TT02501/24)
> - PR - Corretto problema nella procedura Creazione automatica pagamenti fornitori quanto il nome della banca oppure il nome del fornitore da pagare conteneva il carattere &. ( TT02183/24)
> - SD – Dalle Ricerche dei documenti è possibile eseguire le procedure della barra degli strumenti, anche posizionandosi nelle tab del Workflow (#TT02533/24)
> - PM: Risolta casistica per cui lo stato del progetto veniva impostato automaticamente come evaso (#TT02635/24)
> - SCM – Corretto errore che impediva il Rollback del carico di un DDT se valorizzato (#TT02049/24)
> - SCM: Aggiungere il filtro Stato della bolla di consegna elettronica  nella finestra di ricerca Bolla di consegna dell'acquisto TT02645/24.
> - MES – Corretto errore nelle Dichiarazioni di Produzione che non permetteva il ripristino della registrazione nel caso in cui ci fosse una referenza nella tabella PM_ProjectItemDetails (#TT02419/24).
> - ARM – fix Open Tile for editing
> - PM - corretta visualizzazione % avanzamento e righe descrittive nel report dettaglio avanzamento progetti (#TT01386/24)
> - MS - Corretto errore nella Generazione automatica del flusso di produzione da Ordine cliente che non generava il messaggio di riepilogo con le commesse e gli ordini creati (#TT02578/24)
> - FI - revisione gestione centri di costo in contabilizzazione fatture di vendita (#TT02621/24)
> - CO – Ottimizzata la procedura di calcolo costo. (#TT02255/24 - #TT02209/24)
> - SD - SalesDeliveryNote - Add SDI Status filter (#TT02643/24)


### Patch 705.1-0019 - 31/05/2024
> - WM - Corretto bug nella visualizzazione degli errori della procedura di valorizzazione magazzino nel caso in cui questi fossero più di 100.000 (#TT02320/24)
> - SD - Corretto problema nei documenti di vendita che non gestiva adeguatamente la provvigione in presenza contemporaneamente di agenti legati ad un destinatario / destinazione del cliente e NON legati ad alcun destinatario /destinazione ma semplicemente al cliente (#TT00273/24)
> - MS - Minuti Centesimali negli orari di lavoro dei CDL + nuove regole di validazione (#TT01592/24)
> - FI - Risolto problema che generava un errore chiudendo la form Visualizzazione conti dopo che era stato eseguito l’ordinamento sulla colonna Data Registrazione (#TT02041/24)
> - PR - revisione stampa cash flow per totali oltre la data finale (#TT00241/24)
> - SCM - Risolta segnalazione in inserimento nuovo tipo fattura di acquisto (#TT02345/24)
> - FL Browser - Risolto errore nelle griglie di evasione che talvolta non permetteva la modifica della quantità da evadere (#TT02036/24)
> - FI - Contabilizzazione fatture acquisto in entrata : revisione proposta della data competenza all’interno della registrazione contabile creata (#TT01888/24)
> - FI - nella maschera della ricerca partite, riattivato il pulsante di aggiornamento dello stato partite (#TT02145/24)
> - FI - la ripresa ammortamento cespiti del modulo chiusure infrannuali ora applica, se presente, la percentuale custom della testata cespite in via prioritaria rispetto alla percentuale in categoria cespite (#TT02070/24)
> - MS - Ora, alla creazione di un nuovo articolo, di default non viene abilitato il flag "Escludi da MRP" presente nei parametri MRP (#TT02364/24)
> - FI - revisione della procedura di giroconto partite per chiusura iva in sospensione (#TT02398/24)
> - SCM, SCS - Quando viene modificato il flag Prezzo Unità di misura Alternativa all’interno di una Fattura di acquisto che valorizza un Rientro di Conto lavoro, esso viene modificato anche nel Rientro e nella relativa registrazione, se presente. Quando il flag viene modificato dall’interno Rientro di Conto lavoro gli importi vengono ricalcolati anche nella Registrazione di magazzino (#TT00698/24)
> - R.N. nel caso in cui venga importato nei documenti sdi di acquisto in entrata un file che presenta dei dati non conformi al formato non viene più generata una exception ma il visualizzatore presenterà una pagina bianca (#TT02322/24)
> - PM - nella form di ricerca progetti ora è possibile selezionare un singolo campo della grid. copiarlo e incollarlo, senza che vengano riportati i dati di tutta la riga selezionata (#TT02275/24)
> - SH - Risolto il problema del salvataggio dei parametri per LogonUser e LanguageUser (#TT02381/24)
> - FI - corretto bug che non gestiva correttamente il giroconto iva nell’ambito dell’iva per cassa, quando la partita incassata era originata da una RiBa precedentemente insoluta (#TT02378/23)
> - FI - revisione stampa liquidazione iva periodica per periodo senza dati (#TT01779/24)
> - SH - Gestione documenti - correzione dell'errore di esportazione dei file attraverso il flusso di lavoro a causa dell'azienda mancante (#TT02481/24)
> - FI - nella riconciliazione manuale dei conti correnti, abilitata la possibilità di cambiare date di filtro (#TT02390/24)
> - PM - Stampa dettaglio progetti, gestita evasione parziale e casi di documenti movimentati a magazzino con articoli fittizi o spese (#TT02435/24)
> - SCM - Migliorato il tempo di inserimento articoli nelle RDA e di generazione RDO da RDA nel caso di documenti con centinaia di righe (#TT02039/24)
> - SCS - Al momento della registrazione di un Rientro di Conto lavoro viene verificata prima la giacenza dei materiali alla data corrente e successivamente alla data usata per la registrazione di magazzino (#TT02394/24)
> - PR - riconciliazione conti correnti automatica, chiusura message box per visualizzare il messaggio di ‘Attendere…’ (#TT02392/24)
> - SD - Quando nei parametri dell’area Vendite è attivo il flag ‘Blocca inserimento documento in date festive da calendario di fabbrica’ il controllo della data festiva viene effettuato prima nel Calendario di Fabbrica, poi nel Calendario delle capacità produttive (#TT02396/24)
> - SCS - Quando viene inserito un Ordine di Conto lavoro per un fornitore che ha un listino predefinito, se l’articolo inserito non è presente nel listino il prezzo proposto è zero (#TT02234/24)
> - FI - nelle registrazioni contabili, revisione verifica dimensioni dei centri nel piano dei conti (#TT02324/24)
> - FI - contabilizzazione fatture di acquisto, revisione arrotondamenti centri di costo (#TT02483/24)
> - MES - Corretto bug nelle segnalazioni di produzione che visualizzava l'UM errata nel campo quantità fase (#TT02459/24)
> - FI - corretto errore al rollback di registrazione fattura di acquisto connessa ad una scheda cespite (#TT02207/24 - TT02277/24)
> - MES - sviluppo dichiarazioni materiali con ubicazione (#TT00577/24)
> - MES - sviluppo web api service per regsitrazione dichiarazioni di produzione (#TT02440/24)
> - SH/CRM - Nuove proprietà in CrmContactReference e in FSContactReferencePerson (#TT02493/24)
> - "Possibilità di scelta "Causale" in tab articoli nei documenti di acquisto (#TT02561/24)

### Patch 705.1-0018 - 23/05/2024
> - SD - Revisione della stampa provvigioni maturate per il caso dell'incasso di una partita riaperta dopo un insoluto (#TT02095/24) 
> - CO - Ripresa ammortamento cespiti delle chiusure infrannuali, revisione gestione centri di costo (#TT02315/24)
> - Rilascio nuova stampa 2024 del rendiconto effettivo per localizzazione CH
> - SCM - Creazione nuovo report per gli ordini fornitori 'Scadenziario con UM alternativa' con le seguenti proprietà: date in formato europeo, colonna Quantità residua, colonna UM, considerazione della UM alternativa nel prezzo se previsto nel documento (#TT01802/24)
> - PM - Implementato nuovo planner (#TT00759/24)
> - Risolto bug sull'importazione pagamenti da sistemi (#TT02369/24)
> - MES - Risolti bug in webapi segnalazioni (#TT02166/24)
> - ARM - Ribbon Editor: consente all'utente di visualizzare il ribbon di modifica anche in altre lingue.
> - MS - Pianificazione generale - Corretta anomalia di proposta date negli Ordini pianificati (#TT02150/24)
> - FI - Webapi di import delle registrazioni contabili, revisione gestione dell’algoritmo di valorizzazione della descrizione movimento impostata in causale contabile (#TT02143/24)
> - PM - SAL progetto - corretto calcolo costo ultimo (#TT01750/24)
> - PM - modificati codici SAL relativi alle fatture di acquisto vendita. I codici con specificato "non contabilizzata" considerano solo le fatture con flag contabilizzata NON attivo, dove non specificato invece si considerano TUTTE le fatture, contabilizzate o NON contabilizzate. Codici interessati: PRCC005 - PRCC006 - PRCC007- PRCC008 - SLSP004 - SLSP005 - SLSP006 - SLSP007 (#TT02187/24)
> - Browser - form profiles general fixes - #TT02162/24
> - SD - Nella riga dello storno acconto viene ora riportato anche il progetto, se presente nella riga articolo della fattura di acconto (#TT02170/24)
> - CO - chiusure interne, corretto bug nel quale le 'scritture di integrazione' restituiscono valori errati nei centri di costo (#TT02319/24)


### Patch 705.1-0017 - 16/05/2024
> - PR - corretto bug che utilizzava nel cashflow il conto cliente trzista per fasi esterni nell’ordine di conto lavoro anziché il fornitore effettivo (#TT02034/24)
> - SD - Offerte Multilivello: inserendo il Ricavo totale nella riga delle risorse, la percentuale di ricarico viene calcolata in automatico in base alle ore e costo totale (#TT02119/24)
> - FI - revisione delle date di competenza economica assegnate alle registrazioni di riapertura degli assestamenti dalla chiusura conti automatica (#TT01535/24 - #TT01814/24)
> - CO - nella nuova chiusura infrannuale, eliminata la proposta dei filtri per date documento (#TT01594/24)
> - FI -  nella compensazione partite, revisione gestione filtri partite rispetto al tipo di compensazione, gestione decimali nei campi in griglia (#TT02113/24)
> - PM - Assegnazione risorse wbs , risolta casistica appuntamenti ricorrenti (#TT02132/24)
> - MES - Nelle Dichiarazioni di Produzione è stato aggiunto il dettaglio dell’Ubicazione nel messaggio di errore dovuto a giacenza insufficiente (#TT02064/24)
> - SCS - Nei DDT e nei Rientri di Conto Lavoro il lotto nei materiali viene ora proposto in automatico se la tipologia di prelievo è FIFO o A scadenza (#TT01140/24)
> - SH - Nelle Fatture di Vendita e nei DDT di Vendita e di Acquisto è ora possibile inserire pesi con cifre decimali (#TT02163/24).
> - SH - Trascinamento di immagini: imposta il tipo di file del documento come 'JPG' quando l'estensione del file è 'JPEG' (#TT02210/24)  
> - SCM - Risolto errore che non permetteva l’inserimento di un Ordine Fornitore (#TT02181/24).
> - SCM - Risolto bug che non salvava correttamente un profilo nelle Richieste di Acquisto con filtro Non evase (#TT02123/24).
> - MES - Corretto bug in Lista prelievo materiale nel caso in cui fosse abilitato il flag "Associa lotto per lista di prelievo" presente nei parametri di produzione. Ora il lotto associato al materiale nell'ordine di produzione viene correttamente riportato anche nei picking creati con la Lista prelievo materiale (#TT03026/23)
> - WM - Corretto bug in gestione UDC nel caso in cui fosse effettuato lo scarico UDC (#TT02040/24)
> - WM, SCM, SCS , SD- Corretto bug nella formulazione del progressivo del codice lotto (#TT02142/24)
> - FI - Intrastat 2 , fluentis545 - Errore in ripresa dati da registrazioni CustomPosting (#TT02243/24)
> - SD - Versioni offerte visibili correttamente in base al flag "visualizza tutte le versioni" anche nei tab degli stati del workflow (#TT02228/24)
> - SD - Fluentis WEB risolta apertura ddt di vendita (#TT02160/24)
> - CO - Revisione totalizzazione gruppi nel report di valorizzazione riclassificazioni, in caso di comparazioni
> - WM - Corretto bug in analisi disponibilità. Ora la quantità dei materiali presenti negli ordini pianificati, con unità di misura utilizza indicata in distinta, sono corrette (#TT02227/24)
> - PR - Contabilizzazione pagamenti fornitori, revisione gestione note di riga quando la causale non prevede il raggruppamento pagamenti in giornale (#TT01702/24)


### Patch 705.1-0016 - 09/05/2024
> - FI - revisione ripresa valori da registrazioni per sezione quater (#TT01985/24)
> - PR - Ottimizzazione Cash Flow da DDT Acquisto (#TT01754/24)
> - FI - Scritture di assestamento: revisione descrizione dettaglio nelle registrazioni contabili create automaticamente dalla procedura (#TT00503/24)
> - Risolto il problema di intestazione nascosta degli script su Blazor
> - Risolto il problema dell'avvio di JavaScript su Blockly
> - MS - Implementata in analisi disponibilità e pianificazione la gestione dei siti produttivi (#TT01836/24)
> - CO - Revisione gestione formule di calcolo per controlling (#TT01668/24)
> - SD - Corretto errore nella duplicazione di un Ordine Cliente per cui è attivo il flag di Creazione Progetto Automatico (#TT02058/24)
> - SH - La procedura di Duplica articolo riporta anche le Note dei Fornitori preferenziali (#TT01580/24)
> - WM - Corretto bug nella procedura di valorizzazione magazzino (#TT02037/24)
> - FI - La contabilizzazione da acquisti/vendite valorizza la provincia della sezione  intrastat filtrando per nazione uguale a quella della società (#TT02098/24)
> - SCM - Nella griglia del Navigatore articoli sono state aggiunte le colonne relative a Codice e Descrizione variante (#TT01890/24)
> - SCM - Nell’anagrafica articolo, tab Listini Fornitori sono state aggiunte le colonne relative a Codice e Descrizione variante (#TT01851/24)
> - Sistemato bottone "Importa file XML" che  risultava mancante in "Documenti acquisto in entrata (#TT02121/24)
> - WMS - Ora nella form Ricevimento Merci del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01909/24)
> - PM - SAL di progetto, gestita inclusione costi da ddt di vendita anche in caso di articolo con prezzo di vendita a 0 (#TT02018/24)
> - WMS - Ora nella form Carico articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01892/24)
> - WMS - Ora nella form Scarico articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01893/24)
> - WMS - Ora nella form Sposta articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01894/24)
> - WMS - Ora nella form Rettifica articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01895/24)
> - WMS - Ora nella form Giacenza articolo del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01896/24)
> - WMS - Ora nella form Liste di prelievo UDC del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01905/24)
> - WMS - Ora nella form Gestione UDC del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01906/24)
> - WMS - Ora nella form Liste Trasferimenti UDC del WMS, se nei  parametri magazzino carico/scarico per utente è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti (#TT01903/24)
> - FI - registrazione di pagamento/incasso in divisa estera, se i pagamenti sono della stessa divisa della testata registrazione e non ci sono righe manuali allora il totale del documento in valuta corrisponde al valore in divisa chiuso. Se vi sono pagamenti in altre divise e/o righe manuali, invece, il totale in divisa sarà il calcolo del controvalore divisa del totale dare/avere in divisa società (#TT01703/24)
> - SD - Nella creazione file Sdi su fatture/note di credito in valuta, revisione gestione arrotondamenti (#TT1703/24 - #TT02135/24)
> - Sistemato il trasferimento articoli di tipo note nei DDT acquisto con evasione da ordini Fornitore (#TT02130/24)
> - WM - Corretto bug in anagrafica lotti che non visualizzata correttamente i decimali (#TT02055/24)
> - SD - Release note: SD - Nella Conversione da Offerta a Ordine, gli sconti finali articolo inseriti nell’Offerta vengono riportati nelle righe articolo dell’Ordine (#TT02103/24)