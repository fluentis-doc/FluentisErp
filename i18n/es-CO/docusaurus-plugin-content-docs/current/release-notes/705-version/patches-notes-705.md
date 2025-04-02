---
title: Patch notes Versione 705
sidebar_position: 1
---

### Patch 705.1-0031 - 08/08/2024
> - FI - Riordino protocolli IVA: corretto errore nell’inserimento numerazione automatica e nell’aggiornamento protocolli nelle descrizioni (#TT03378/24)
> - SH - Ottimizzazione dell'inserimento Extra Data di tipo Data insieme ad Extra Data di altro tipo (#TT03055/24)
> - SD - Corretto errore uscente nell’inserimento di un nuovo articolo in un DDT già scaricato (#TT03177/24)
> - FI - Durante la creazione della fattura o della registrazione contabile dai Documenti di acquisto in entrata, vengono proposti solo i contatti con un conto contabile collegato (#TT03352/24)
PM: risolto caso di assegnazione wbs in intervento, che nel caso di corrispondenza con i parametri progetto, impediva l'associazione (#TT03574/24)
> - PM: Progetto - inserimento nuovo livello figlio di una root, impediva l'associazione di un articolo codificato (#TT03583/24)
> - WM - Corretto bug in anagrafica articolo, che all'inserimento di una variante creava anche la distinta base per quella variante (#TT03443/24)
> - MS - Corretto bug in Capacità centri di lavoro che considerava la capacità su un centro di lavoro interno data da un ordine pianificato di conto lavoro; ora, se l’ordine pianificato di conto lavoro ha una fase interna (perché a volte viene prodotto internamente e a volte esternamente) questo non impegna più quel centro di lavoro (#TT03406/24)
> - MES - Corretto bug nel ciclo di lavoro che nel caso in cui venisse aggiunta una nuova fase non riportava il fornitore preferenziale inserito nella fase standard (#TT03551/24)
> - SD - Nei DDT e nelle Fatture di Vendita è ora possibile effettuare lo storno delle righe articolo di tipo 2, 3, 4 e 5 (#TT02375/24)
> - MS - Se in generazione commesse di produzione viene generata una commessa con tipo commessa “Multiprodotto” e  raggruppamento “Nessuno”, questa viene creata con tante righe quante sono le righe degli ordini clienti per quell’articolo; quindi senza raggrupparle in un’unica riga (#TT03615/24)
> - WM - Ora nel dettaglio dell’analisi disponibilità le righe di ordini produzione valorizzano i campi "Ordine cliente collegato" e "Quantità ordine cliente collegato” se sono collegate ad un ordine cliente (#TT03549/24)
> - WM - Corretto bug nell'help lotti che non visualizzava correttamente il valore della disponibilità nella griglia superiore nel caso in cui fosse filtrato per ubicazione (#TT03600/24)
> - SD - Eliminazione dell’arrotondamento nel calcolo dello sconto per la percentuale del Range discount (#TT03609/24)
> - SH - Abilitati i decimali nelle colonne Domanda e Offerta per gli Ordini pianificati, nell'Analisi disponibilità (#TT03201/24)
> - FI/PR - revisione visualizzazione filtri di ricerca per partite pagabili/non pagabili, le non pagabili vengono escluse di default nelle maschere delle compensazioni, nelle registrazioni, nell’acquisizione effetti da partite, nel modulo pagamenti fornitori (#TT03641/24)
> - SD - Nella form ‘Dettaglio righe Ordini clienti’ è stato abilitato il filtro in griglia per le colonne ‘Tipo documento evasione’ e ‘Numero documento evasione’; dopo l’inserimento del filtro è necessario cliccare Ricerca per visualizzare i risultati (#TT03655/24)
> - FI - revisione ripresa ammortamento cespiti delle chiusure infrannuali, calcolo anche in presenza in contabilità di ammortamenti già inseriti per l’anno della chiusura (#TT03042/24)
> - WMS - Adesso in gestione spunta e conferma picking il focus ritorna nel campo barcode dopo ogni lettura (#TT03704/24)


### Patch 705.1-0030 - 30/07/2024
> - FI - revisione scroll della lista registrazioni contabili (#TT03440/24)
> - MES - Corretto bug nella lista prelievo materiali inerente alla creazione del picking con articoli gestiti a lotti (#TT03187/24)
> - FI - per la localizzazione svizzera, revisione contabilizzazione degli arrotondamenti sul totale documento gestiscono con spese finali senza iva (#TT03335/24)
> - FI - Corretto problema che non gestiva la banca d’appoggio alternativa nella creazione automatica distinta di pagamento fornitori utilizzando l’anagrafica agente (#TT03274/24)
> - FI - nella contabilizzazione fatture di acquisto, gestione in grigila iva del campo dell’iva per causali automatiche (#TT02641/24)
> - SCM - revisione contabilizzazione centri di costo da fatture acquisto, segni negativi (#TT03239/24)
> - FI - Risolto errore exception nell’intrastat che coinvolgeva un caso relativo ad una nota di accredito (#TT03449/24)
> - MS - Nuove ottimizzazioni per la procedura del MRP (#TT03485/24)
> - PM: Stampa dettaglio progetti, corretto caso di movimenti doppi in stampa. Gestito correttamente caso di ddt con movimentazione a magazzino e relativa fattura collegata (#TT03484/24)
> - PM: dichiarazione attività fatturabile - gestita correttamente avviso di mancanza configurazione tipo intervento - nel tipo attività o nei parametri generali di progetto (#TT03462/24)
> - MES - Corretto bug nel calcolo dell'occupazione dei centri di lavoro nel caso in cui fossero modificate le fasi dell'ordine di produzione (#TT02662/24)
> - FI - per società con controlling attivo, revisione test di quadratura sulle dimensioni (#TT03496/24)
> - SH - La riga spesa Conai, al salvataggio del documento, prende la stessa IVA della riga articolo che l’ha generata (#TT02599/24)
> - SH - Revisione ricalcolo Conai in caso di documento duplicato (#TT03508/24)
> - WMS - Corretto bug nella visualizzazione delle unità di carico della Conferma prelievo UDC del WMS (#TT03473/24)
> - SD - Corretto loop nello scqarico automatico di DDT con soli articoli note e non codificati (#TT03557/24)
> - MES - Corretto bug nel calcolo del costo dell'articolo prodotto con le dichiarazioni di produzione (#TT03408/24)
> - SD - Nelle Offerte di Vendita gerarchiche quando viene inserita una riga descrittiva nel tab Materiali viene associato un tipo riga 2 (#TT03420/24)
> - SCS - Negli Ordini di Conto lavoro è stato aggiunto un nuovo parametro nei Dati materiali proposti denominato “Dall’ordine di produzione” usato per il ricalcolo delle quantità dei materiali. Viene impostato automaticamente alla creazione di un ordine di conto lavoro da fase esterna di un ordine di produzione, al rilascio di un ordine pianificato di produzione con fase esterna e al rilascio di un Ordine di Conto lavoro pianificato. Per la proposta dei dati dei materiali nell’ordine di Conto lavoro è ora possibile avere un parametro diverso per ogni riga articolo (#TT02097/24)
> - WM - Corretto bug in analisi disponibilità (#TT03349/24)


### Patch 705.1-0029 - 18/07/2024
> - CO - Ottimizzate le Registrazioni extracontabili di chiusura (#TT03214/24)
> - FI - Revisione gestione test di validazione della causale contabile nel corso delle contabilizzazioni (#TT03062/24 - #TT03060/24)
> - SD - Revisione test controllo della nazione cedente/prestatore in fattura Sdi per autofatture, da campo nazione al campo codice iso della partita iva (#TT03368/24)
> - WM - Nel picking, migliorata l'accessibilità al campo lotto nel caso in cui si riapra un picking e l'utente vari la quantità nel campo quantità prelievo. Prima era necessario cambiare riga prima di variare il lotto, mentre ora non è più necessario (#TT03228/24)
> - MS - Corretto bug nel rilascio degli ordini pianificati di acquisto, ora le RDA create vengono raggruppate correttamente per cliente, tipo e anno (#TT03382/24)
> - MES - Corretto bug nella lista prelievo materiali che non variava correttamente lo stato degli ordini di produzione da lanciato ad esecutivo se venivano elaborati più di uno alla volta (#TT03383/24)
> - SD - Corretto errore che non permetteva di effettuare un ordinamento per stato evasione nella griglia degli Ordini clienti (#TT03404/24)
> - WM - In visualizzazione giacenze, i decimali utilizzati dall'UM alternativa utilizzati, sono quelli indicati sul campo UM decimali dell'UM alternativa utilizzata (#TT03313/24)
> - FI - nella contabilizzazione fatture di vendita, allineamento della gestione del cambio per la sezione dei centri di costo (#TT02172/24)
> - SCM - contabilizzazione fatture di acquisto, assegnazione divisione alle righe di movimento centro di costo per righe di spese finali (#TT03239/24)
> - FI - corretto bug nella generazione solleciti che anziché aggiornare la riga per solleciti successivi al primo creava righe diverse (#TT03219/24)

### Patch 705.1-0028 - 12/07/2024
> - revisione memorizzazione credito anno precedente da stampa definitiva liquidazione iva periodica di gennaio (#TT02348/24)
> - PM -  planner e wbs associazione risorse - rimosse dalla visualizzazione attività già collegate ad interventi (#TT03248/24)
> - CRM - email da campagne crm - bloccato ricaricamento template email, dopo che l'utente ha fatto delle modifiche pre - invio (#TT03253/24)
> - SD - Corretto errore che non aggiornava correttamente gli sconti finali a seguito di una modifica della soluzione di pagamento (#TT03200/24)
> - CO - Risolto bug nel report Distinta base valorizzata nel quale non venivano visualizzati i valori del costo dei materiali (#TT03281/24)
> - MES - Corretto bug nelle dichiarazioni di produzione, non veniva riportato correttamente il valore dell’ubicazione del lotto nel movimento di magazzino di scarico del materiale (#TT02156/24)
> - FI - la contabilizzazione effetti assegna la data chiusura commissioni in base alla scadenza effetto (#TT02657/24)
> - FI - Errore registrazione in prima nota di incasso da cliente (#TT03209/24)
> - MES - Implementata nell’ordine di produzione la possibilità di scaricare i materiali per cliente/fornitore (#TT03210/24)
> - Implementazione WEBAPI modulo Picking Import/export e Scarico Picking anche con l'importazione dei lotti/serial number (#TT02551/24)
> - SD - Widget Sconti: corretto calcolo totali di riga e documento nella creazione DDT e Fatture da Picking creati da Ordine con l'uso del widget Sconti (#TT03333/24)

### Patch 705.1-0027 - 08/07/2024

> - PM - Calendario - gestita visualizzazione periodi ferie con sfondo di colore arancione, anche in modalità timeline ( #TT03117/24)
> - SCM - in contabilizzazione fatture di acquisto, revisione assegnazione data registrazione per storno automatico della registrazione “fatture da ricevere” (#TT03056/24)

### Patch 705.1-0026 - 04/07/2024
> - SH - Corretto bug che, nel caso di contatto con nazione diversa da IT, non rendeva visibile nei dettagli cliente / fornitore, il campo Regime fiscale se non dopo chiusura e riapertura form (#TT02158/24)
> - Solved bug to create script events for Sdi documents
> - Solved bug to analize paramaters for Sdi Documents
> - SH - aggiunto nuovo parametro al commando di duplica contatti per decidere se i sottoconti collegati devono essere duplicati per tutte le società o solo per quella corrente (#TT02592/24)
> - SH - Tab Anagrafica contatti - Corretta anomalia per la quale se impostato un profilo nell’anagrafica contatti il tab di raggruppamento parametri cli/for veniva nascosto (#TT02346/24)
> - FI - la contabilizzazione effetti assegna la data chiusura commissioni in base alla scadenza effetto (#TT02657/24)
> - FI - corretto bug che non faceva valorizzare i centri di costo contabilizzando le scritture di assestamento (#TT02905/24)


### Patch 705.1-0025 - 01/07/2024
> - SCM - Corretto errore che non aggiornava lo stato evasione delle RDA a seguito dell’attivazione del flag Evaso forzatamente sulle righe articolo (#TT02937/24)
> - CO - revisione nuova riclassificazione per gestione tree (#TT02912/24)
> - PM - al cambio risorsa intervento, corretto aggiornamento risorsa e dipendente in tutti i punti in cui il dato è presente all’interno dell’intervento (#TT02759/24)

### Patch 705.1-0024 - 28/06/2024
> - FI - Corretto bug nella form di lancio della stampa Enasarco che non gestiva correttamente il filtro per range di date (#TT00824/24)
> - CO - Revisione performance nuova riclassificazione di bilancio (#TT02912/24)
> - WMS - Corretto bug nella visualizzazione dei numeri con decimali (#TT02080/24)
> - WM - Corretto bug nella form Dettaglio movimenti in cui venivano visualizzati in maniera errata le quantità calcolate nell’UM alternativa (#TT02902/24)
> - SD - Corretto errore che non memorizzava il tipo Stampa nella tabella Tipi Ordine Cliente (#TT02985/24)
> - SD - corretto caso in cui nella griglia di ricerca fatture veniva visualizzato zero nella colonna “Totale Imponibile” nonostante il documento contenesse i valori corretti (#TT02991/24)
> - PM - modificata proposta prezzo nelle richieste interventi ed interventi pianificati: se l'articolo non è presente e vene assegnato un progetto, articolo e prezzo sono proposti da progetto. Se l'articolo è già presente e viene assegnato un progetto, se articolo nel documento e nel progetto coincidono, il prezzo viene aggiornato da progetto. Altrimenti viene mantenuto il prezzo già presente (#TT02837/24)
> - SCM - Se il flag Prezzo Unità di Misura Alternativa è attivo nella Richiesta di Offerta, al momento della creazione dell’Ordine fornitore da Offerta fornitore il flag sarà riportato anche nell’ordine creato (#TT02804/24)
> - Form Evasione: Risolta sincronizzazione tra generazione evasione e refresh griglia evasione che in alcuni casi restituiva un exception di valore null (#TT02661/24)
> - SD - Stampa ordine - Corretta anomalia in stampa destinazione (#TT02733/24)
> - CRM - riabilitato expander in griglia ricerca contatti (#TT02880/24)
> - PM - migliorate segnalazioni di servizi sovrapposti negli interventi (#TT02891/24)
> - Ogetto - SdiPurchaseInvoice - aggiungere nuove proprieta: CurrencyCode, BaseAmount, VatAmount, TotalAmount(#TT03008/24)
> - Permessa la coesistenza di un algoritmo creato con arm e di uno di tipo script.
> - SD - Ripresa provvigioni per range sconto: corretta applicazione % di provvigione errata dovuta all'arrotondamento del valore netto riga (#TT02974/24)
> - SCM - Corretto bug che non visualizzava Codice/Descrizione dell’Articolo fornitore nella form di Dettaglio righe Ordini quando l’ordine non era evaso (#TT02344/24)
> - SCM - Le spese con flag Ripartita inserite nei riepiloghi dei documenti vengono ora ripartite sugli articoli del documento anche quando i prezzi sono a zero (#TT02336/24)  
> - MES - Corretto bug relativo al campo "Prenotazione lotto di carico" dell'ordine di produzione che non veniva riportato correttamente nella dichiarazione di produzione (#TT03079/24)
> - MES - Aggiunto il campo difetto nelle dichiarazioni di produzione. Questo si abilità solamente dopo aver inserito una quantità scartata maggiore di zero (#TT01887/24)
> - FI - nuovo parametro generale per gestire l’emissione solleciti su partite chiuse (#TT02936/24)
> - ARM - reprocess custom scripts when publishing server
> - SD - Correzione grammaticale dell’avviso uscente quando sono presenti sconti con la stessa priorità: la parola sbagliata ‘sequente’ è stata corretta in ‘seguente’ (#TT03073/24)
> - SD - Ripresa Provvigioni per range di sconto: se sono definite delle righe provvigioni 0 vengono considerate come fossero un numero valido anche nel caso di più righe definizione per range di sconto e categoria provvigione diversa. Se non si vuole considerare la provvigione 0 non deve essere specificata nella definizione (#TT02859/24)
> - FATTURAZIONE ELETTRONICA SM: Eseguendo il ripristino della stato da Generato o scartato Hub SM a Controllato viene eliminato il file di integrazione della fattura d'acquisto SM, riportando lo stato a non esaminato viene anche resettato il nome file (#TT03054/24)
> - SH - Analisi Didsponibilità: il controllo che se è settato il flag distinta base ci sia settato 1 solo articolo è stato spostato quando si clicca nel ribbon button Ricerca (#TT02783/24)

### Patch 705.1-0023 - 21/06/2024
> - SD - Aggiunto il metodo statico ConvertAllSelectedOffersToSalesOrders per gli script (#TT01258/21)
> - SH - Import excel listini di vendita - Corrette anomalie in fase di duplicazione tracciato e in caso di import del cliente in anagrafica articolo (#TT02871/24)
> - FI - nei compensi professionisti, revisione campo inps carico percipienti del primo tab nel caso di calcolo manuale (#TT02802/24)
> - FI - revisione stampa Controllo cespiti per importo del fondo in caso di alienazioni totali/parziali (#TT02537/24)
> - PM - valorizzazione interventi, effettuata correzione per valorizzazione parziale (#TT02739/24)
> - SH - Modificate le descrizioni dei record in tabella fissa “Natura giuridica”, per differenziare ‘Residenti’ da ‘Non residenti’ come da tabella delle istruzioni 770 (#TT02870/24)

### Patch 705.1-0022 - 20/06/2024
> - MES - Corretto bug nelle segnalazioni di produzione inerente all’ubicazione degli articoli prodotti e gestiti a lotti (#TT02667/24)
> - CRM-CrmContact - layout changes (#TT01258/21)
> - SD - nella stampa del bilancino di fatturazione, revisione gestione segni nel subreport dei totali per fatturato vendite (#TT02720/24)
> - MS - Corretto errore nell’elaborazione dell’MRP che generava il blocco dell'operazione (#TT02408/24)
> - FI - Mancato refresh pulsante "Ricerca partite" in registrazione contabili - crash (#TT02089/20)
> - CRM - Abilitazione della virtualizzazione per le griglie delle campagne e delle liste di distribuzione
> - PM - WBS assegnazione risorse risolto drag&drop su calendario dalla seconda risorsa in poi (#TT02544/24)
> - WM - Corretto bug nell’export excel dei dati presenti nel report Implosione componenti che non riportava il valore nella colonna quantità (#TT02753/24)
> - MS - Nel ciclo di produzione, quando si associa un materiale ad una determinata fase, questo non viene più visualizzato nell’help tra i materiali che rimangono da associare alle singole fasi.  (#TT02785/24)
> - MES - Corretto errore che non riportava l’ubicazione nella registrazione della dichiarazione di produzione (#TT02807/24)
> - Impostato il primo giorno della settimana per lo scheduler (in base alla cultura corrente) (#TT02849/24)
> - SH - E’ permessa la navigazione tra gli stati del Workflow nelle Ricerche, anche se l’oggetto è customizzato (#TT02414/24)
> - SH - Nell'anagrafica agenti sono stati aggiunti i campi di link all'utente arm associato e all'impostazione di visibilità dei documenti, per gestione restrizioni di visibilità su accessi esterni (#TT02866/24)
> - WM - Corretto bug in dettaglio movimenti che non visualizzava il movimento di scarico di UDC in determinate condizioni (#TT02472/24)
> - Solved bug to compile some script with out LastModified info
> - FI - revisione gestione assegnazione numerazione cespiti in caso di cambiamento categoria/precodice cespite (#TT02777/24)
> - FE San Marino: Fatture di Vendita non conformi Ora è possibile riportare una fattura di vendita non conforme per l'HUB di San Marino allo stato Da Esaminare per la correzione (#TT02791/24)
> - FI - Exception in double posting involving Sottoconto i pagamento (#TT02938/24)
> - SH - Contatti Clienti/Fornitori/Agenti: se il cliente/fornitore/agente è stato inserito da procedure esterne Fluentis senza inserire il record nella tabella dei dati amministrativi/Contabili, il record viene creato automaticamente quando si entra in modifica del contatto collegato al tipo conto Cliente/Fornitore/Agente (#TT02778/24)
> - CRM - risolta visualizzazione contatti limitata a 200 nelle campagne (#TT02895/24)

### Patch 705.1-0021 - 13/06/2024
> - MS - Rilascio Ordini pianificati - Ricalcolo errato quantità totale consumo materiali se Ordine diviso in più lotti (#TT01949/24)
> - WMS - Corretto bug nella form Gestione UDC del WMS che proponeva un magazzino anche nel caso in cui ce ne fosse più di uno associato a quell'utente. Quindi, nel caso di più magazzini, il magazzino viene proposto vuoto e deve essere selezionato manualmente dall'utente (#TT02639/24)
> - MES - Implementata la gestione dei siti produttivi nel rilascio ordini pianificati, negli ordini di produzione e nelle dichiarazioni di produzione (#TT02188/24)
> - FI - allineato comportamento della stampa controllo cespiti che ora restituisce i risultati di tutte le categorie se non viene selezionata alcuna categoria in particolare (#TT02502/24)
> - SD - Corretto errore che nominava la stampa ‘Fatturato’ erroneamente come ‘Lista fatture’ (#TT02669/24)
> - PR - Giroconto iva errato dopo insoluto (#TT02378/23)
> - WM- Corretto bug nella gestione prototipi che non visualizzava correttamente il flag fittizio degli articoli (#TT02679/24)
> - MS - Aggiunto messaggio di errore nella procedura di Rilascio ordini pianificati nel caso in cui l’ordine pianificato da rilasciare è aperto da un altro utente (#TT02620/24)
> - SD - Convertendo un’offerta in ordine, vengono propagati dall’offerta all’ordine tutti i dati relativi alla riga articolo in comune ai due tipi documento (#TT02613/24)
> - SD - Corretto errore (con messaggio ‘Primo carattere non valido’) che impediva l’inserimento del Mask nella procedura di Creazione Listini Avanzata (#TT02648/24)
> - Nuova webapi per l’import/export dei file Sdi (#TT01950/24)
> - SCM - Le bolle di consegna dell'acquisto non devono essere eliminate se contengono documenti SDI TT02436/24.
> - WM - Corretto bug nella stampa inventario a quantità valorizzato inerente al flag storicizzazione inventario.  (#TT02708/24)
> - SD - Ottimizzata la ricerca e selezione delle righe nelle procedure di Evasione Ordini e DDT (#TT02311/24)
> - PM - Planner e WBS assegnazione risorse - introdotto flag "evidenziare giorni delle risorse che hanno disponibilità" che colora lo sfondo per le risorse/giorni in cui non tutto l'orario lavorativo è stato allocato con appuntamenti (#TT02538/24)
> - PM - webapi importazione attività, introdotti controlli su coerenza date-orari (#TT01986/24)
> - MS - Nei Parametri MS è ora possibile salvare le modifiche apportate ai flag di Rilascio Ordini Pianificati anche senza aver effettuato una prima Pianificazione Generale (#TT02672/24)
> - PM - modificata stampa dettaglio progetti, in modo che consideri anche le registrazioni contabili di prima nota generica, non solo le registrazioni relative a documenti di acquisto o vendita (#TT02528/24)
> - FI - revisione contabilizzazione fatture di acquisto con righe con/senza fatturato acquisti su stesso sottoconto (#TT02771/24)
> - MES - Corretto bug relative alla Web API SignalItemImportExport che non importava correttamente le note. Inoltre, è stato implementato il seguente comando: \<RecomputeMaterialsQuantity\>True\</RecomputeMaterialsQuantity\> (che accetta i seguenti valori: 1, 0, True/true, False/false e ha default True), il quale permette di decidere se le quantità dei materiali consumati debbano essere ricalcolate o meno all’interno della dichiarazione di produzione (#TT02512/24)
> - SCM - Ottimizzata la procedura di valorizzazione di molti DDT di acquisto con creazione di fatture contenenti centinaia di righe (#TT01706/24)
> - PM - Introdotto filtro per lo "stato sprint" nella griglia di ricerca degli sprint (#TT02761/24)
> - PM - generazione interventi da richiesta interventi, corretta procedura in modo che gli orari dell'intervento siano ereditati dalla richiesta intervento (#TT02748/24)
> - PM - nella richiesta intervento o intervento pianificato, selezionando il progetto viene proposto l'articolo e la unità di misura dal progetto (#TT02647/24)
> - SD - Selezionando il Raggruppamento per Tipo e Soluzione di Pagamento all’interno dei Parametri di raggruppamento nei documenti di destinazione saranno riportati i pagamenti presenti nei documenti di origine (#TT02403/24)
> - ARM - Ensure base loadrequest is loaded before allowing IsActive flag (#TT02642/24)
> - SCM - Nei parametri delle procedure di Valorizzazione DDT di Acquisto e di Rientro è stato aggiunto un nuovo flag che, se settato permette di inserire i DDT all’interno delle fatture riepilogative ordinandoli per numero documento fornitore invece del numero interno (#TT01817/24)

### Patch 705.1-0020 - 07/06/2024
> - SH - Algoritmi di raggruppamento: aggiunto l'ordine per proprietà Stringa di numeri (#TT02403/24/19)
> - Solved bug with Supervisor global paramaters
> - SCS - Arrotondamento per Cdc su ordine di acquisto, DDT di acquisto, Fattura di acquisto TT02500/24
> - SCM - La richiesta di acquisto deve essere considerata eseguita se vengono eseguite tutte le righe, ad eccezione delle righe di nota TT02389/24.
> - SH - Corretti bugs in Gestione prototipi, inerenti ai pulsanti taglia e importa; inoltre sono stati apportati altri miglioramenti (#TT01978/24)
> - MS - Corretto errore nella visualizzazione della disponibilità nella procedura di Generazione automatica commesse da Sottoscorta (#TT02448/24)
> - PM - Planner corretta visualizzazione di alcuni appuntamenti (#TT02505/24)
> - PM - Planner selezionando una nuova risorsa nel filtro, il calendario si aggiorna automaticamente senza dover premere cerca (#TT02539/24)
> - PM - Planner risolto caso di cancellazione appuntamento relativo a risorsa progetto che cancellava l'intera wbs (#TT02504/24)
> - WM - Rimosso il flag "Scarico lotto" nelle causali di magazzino perchè obsoleto (#TT02465/24)
> - WMS - Nella form Giacenza articolo del WMS, sono stati nascosti gli articoli con giacenza pari a zero e le ubicazioni con quantità pari a zero (#TT02177/24)
> - WMS - Nella form Giacenza articolo del WMS, sono stati nascosti gli articoli con giacenza pari a zero e le ubicazioni con quantità pari a zero (#TT02177/24)
> - SD - Non è possibile eliminare gli avvisi a cui sono allegati documenti SDI (#TT02438/24)
> - FI - revisione chiusura commissioni in registrazioni contabili di incasso/pagamento (#TT02501/24)
> - PR - Corretto problema nella procedura Creazione automatica pagamenti fornitori quanto il nome della banca oppure il nome del fornitore da pagare conteneva il carattere & (#TT02183/24)
> - SD - Dalle Ricerche dei documenti è possibile eseguire le procedure della barra degli strumenti, anche posizionandosi nelle tab del Workflow (#TT02533/24)
> - PM - Risolta casistica per cui lo stato del progetto veniva impostato automaticamente come evaso (#TT02635/24)
> - SCM - Corretto errore che impediva il Rollback del carico di un DDT se valorizzato (#TT02049/24)
> - SCM - Aggiungere il filtro Stato della bolla di consegna elettronica  nella finestra di ricerca Bolla di consegna dell'acquisto TT02645/24.
> - MES - Corretto errore nelle Dichiarazioni di Produzione che non permetteva il ripristino della registrazione nel caso in cui ci fosse una referenza nella tabella PM_ProjectItemDetails (#TT02419/24)
> - ARM - fix Open Tile for editing
> - PM - corretta visualizzazione % avanzamento e righe descrittive nel report dettaglio avanzamento progetti (#TT01386/24)
> - MS - Corretto errore nella Generazione automatica del flusso di produzione da Ordine cliente che non generava il messaggio di riepilogo con le commesse e gli ordini creati (#TT02578/24)
> - FI - revisione gestione centri di costo in contabilizzazione fatture di vendita (#TT02621/24)
> - CO - Ottimizzata la procedura di calcolo costo (#TT02255/24 - #TT02209/24)

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
> - SH - Nelle Fatture di Vendita e nei DDT di Vendita e di Acquisto è ora possibile inserire pesi con cifre decimali (#TT02163/24)
> - SH - Trascinamento di immagini: imposta il tipo di file del documento come 'JPG' quando l'estensione del file è 'JPEG' (#TT02210/24)  
> - SCM - Risolto errore che non permetteva l’inserimento di un Ordine Fornitore (#TT02181/24)
> - SCM - Risolto bug che non salvava correttamente un profilo nelle Richieste di Acquisto con filtro Non evase (#TT02123/24)
> - MES - Corretto bug in Lista prelievo materiale nel caso in cui fosse abilitato il flag "Associa lotto per lista di prelievo" presente nei parametri di produzione. Ora il lotto associato al materiale nell'ordine di produzione viene correttamente riportato anche nei picking creati con la Lista prelievo materiale (#TT03026/23)
> - WM - Corretto bug in gestione UDC nel caso in cui fosse effettuato lo scarico UDC (#TT02040/24)
> - WM, SCM, SCS , SD- Corretto bug nella formulazione del progressivo del codice lotto (#TT02142/24)
> - FI - Intrastat 2 , fluentis545 - Errore in ripresa dati da registrazioni CustomPosting (#TT02243/24)
> - SD - Versioni offerte visibili correttamente in base al flag "visualizza tutte le versioni" anche nei tab degli stati del workflow (#TT02228/24)
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
