---
title: Patch notes Versione 545
sidebar_position: 1
---

### Patch 545.1-0117- 09/05/2025

> - SD - Corretto l’aggiornamento delle quantità residue durante l’evasione DDT da ricerca Ordini Clienti, in presenza di articoli gestiti a lotti e numeri seriali (#TT00900/25)

### Patch 545.1-0116- 30/04/2025
> - FI - revisione calcolo importi cash flow su Ordini fornitori.(#TT01073/25) 
> - SD - Nelle Fatture di Vendita scaricate per cui è stato generato il documento Sdi le quantità e i prezzi degli articoli non sono più modificabili.(#TT00881/25) 
> - WM - fix su calcoli di stampa brogliaccio di magazzino 
> - PR - in una nuova distinta di anticipo fatture, il cambio del tipo distinta aggiorna entrambi i sottoconti della testata distinta.(#TT01384/25) 
> - SD - Ordini clienti: Risolto errore nel calcolo della Quantità residua degli articoli in caso di modifica manuale della quantità evasa in una Fattura di Vendita.(#TT01574/25) 
> - PR - Corretto malfunzionamento del filtro Stato Partite nella form Gestione Appoggio Pagamenti.( TT01468/25). Modifications in form Gestione Appoggio Pagamenti can have an impact on profile 
> - SD - modificato test al salvataggio fatture, per il nuovo tipo delle Autofatture TD29.(#TT01693/25) 
> - SCM - Proponi centro di costo e conto per modificare il tipo fatturato della fattura di acquisto TT01584/25. 
> - FI - Stampa estratto conto - Corretta anomalia che non permettava la stampa impostando il filtro per agente e per conto cliente.(#TT01719/25) 
> - FI - Mancato riporto Dichiarazione d'intento da Documento SDI.( TT01820/25) 
> - SD - Risolto errore in fase di evasione ordini in DDT in presenza di articoli gestiti con lotti e numeri seriali.(#TT00900/25) 
> - FI - la creazione Intra2 acquisti da fatture di acquisto ora valorizza la nazione della partita iva dal campo IsoCode dell’anagrafica e non dalla nazione dell’anagrafica stessa.(#TT01817/25)


### Patch 545.1-0115- 07/03/2025
> - FI - revisione filtro stampa liquidazione iva periodica con periodicità trimestrale e calcolo acconto trimestrale (#TT00866/25)
> - FI - Errato calcolo liquidazione iva  ( #TT03165/24)
> - FI - Stampa Liquidazione Iva periodica - non viene riportato il registro iva acquisti nella stampa (#TT01236/25)

### Patch 545.1-0114- 28/02/2025
> - Bizlink - Import excel fatture - Resi non obbligatori prezzo, unità di misura e iva per poter importare le righe nota (#TT00639/25)
> - FI - revisione filtro stampa liquidazione iva periodica con periodicità trimestrale e calcolo acconto trimestrale (#TT00866/25)
> - FI - Errato calcolo liquidazione iva  ( #TT03165/24)
> - Ottimizzazione stampa “Brogliaccio di magazzino”
> - PR - Campo "Progresso" nel modulo Gestione della liquidità (#TT02060/24) Changes were made to field progressive of form Gestione della liquidità. The profile can be affected by the changes.
> - FI - revisione contabilizzazione assestamenti con opzione ‘singola registrazione’, ripristino a null del campo di link ‘-1’ quando la registrazione non può essere salvata causa squadrature
> - FI - Unlimited digit number on currency adjustment procedure (#TT00991/25) Changes were made in exchange field of form CurrencyAdjustmentAccounting.The profile can be affected by the changes.
> - FI - partial payments for vat delayed (#TT01013/25)

### Patch 545.1-0113- 14/02/2025
> - FI - revisione stampa ‘Differenza partite aperte saldo contabile’, visualizzazione risultati anche per stampa ‘dettagliata’ (#TT00121/24)
> - WM - fix verifica giacenza per ogni scarico tra data scarico e data corente (#TT02878/23)
> - Aog -  fix per la finestra di creazione ordine di acquisto da richiesta di acquisto - quando si chiudeva la finestra e esisteva un prototipo ordine selezionato si creava cmq un ordine anche se la procedura non era lanciata(ref #TT00335/25)
> - SCM - La creazione della fattura di acquisto da file Sdi non riporta più le impostazioni di pagamento dell’anagrafica fornitore (#TT04209/24)
> - MPS - Corretto bug nel rilascio degli ordini pianificati di conto lavoro nei quali non veniva inserita correttamente l’UM di misura nel caso di articoli gestiti con UM alternativa (#TT05068/24)
> - FI - F20215 - errore compensazione veloce (#TT00415/25)
> - Caricamento NIR - risolvere il problema quando la registrazione ha contrapartita di carico - proporre lotti(#TT00472/25)
> - MPS - Ora la data di consegna proposta negli ordini pianificati nati da articoli gestiti a scorta tramite la procedura MRP e schedulazione tiene conto correttamente del lead time di approvvigionamento (#TT03597/24)
> - WM - Corretto errore nella generazione RDA da Sottoscorta che troncava la descrizione degli articoli se superiore a 20 caratteri (#TT00136/25)
> - SCM - Corretto errore che non aggiornava correttamente lo stato di evasione della Richiesta di Acquisto a seguito dell’evasione forzata di alcune righe (#TT00397/25)
> - Rilascio stampa Certificazioni Uniche 2025

### Patch 545.1-0111- 18/12/2024
> - SH - Errore in fase di apertura "Regime Fiscale" (#TT05028/24)
> - SCM - Errore della nota di consegna dell'acquisto durante il caricamento e il rollback #TT05306/24
> - SCS - Se la Società prevede la Gestione Controlling (con l’omonimo flag nella tabella Società), l’Evasione di un DDT o di un Rientro all’interno di una fattura riporta per date di competenza le date dello scarico documento, se non presente le date del documento (#TT05126/24)
> - FI - problemi in fase di annullamento stampa definitiva liquidazione (#TT04859/24)
> - FI - la stampa definitiva della liquidazione iva periodica ora memorizza il saldo a credito nel campo del credito precedente della form di Dichiarazione iva periodica, non più in quello delle Variazioni iva periodo precedente (#TT03694/24)

### Patch 545.1-0110- 28/10/2024
> - MES - Corretto bug negli ordini di produzione in merito al pulsante completamento dati ordine. Il problema si verificava nel caso in cui in distinta base ci fossero più righe dello stesso articolo tra i materiali di un articolo padre senza indicazione della priorità (#TT05019/24)
> - PR - nel modulo Anticipi Incassi, procedura di contabilizzazione incassi, gestione del parametro di descrizione movimento (#TT04923/24)

### Patch 545.1-0109- 21/10/2024
> - ARM - Workflow: Passaggio di stato condizionato(#TT04384/24)
> - SD - Ottimizzazione della griglia 'Note articolo-cliente' del tab Varie dell'anagrafica cliente (#TT01967/24)
> - MPS - Corretto bug in schedulazione generale nel caso in cui si schedulasse un articolo con in distinta base un materiale alternativo con quantità null (#TT04639/24)
> - Nell’evasione ordini fornitori in bolle e fatture acquisto senza ricalcolo analitica, revisione assegnazione centri su priorità magazzini (#TT01624/24)
> - Revisione import excel delle fatture di vendita, fix del lookup del campo ‘Cedente’
> - Bizlink - esportazione Piteco - filtro per pagamenti contabilizati

### Patch 545.1-0108- 24/10/2024
> - SD - nella contabilizzazione fatture di vendita, esclusione righe con spese incasso 0 (#TT01642/24)
> - SCS - Corretto errore negli Ordini di Conto lavoro che moltiplicava le quantità dei materiali da impiegare (#TT03904/24) 
> - SCM - Corretto errore che non permetteva l’inserimento multiplo di articoli nelle Richieste di Offerta (#TT04334/24)
> - WM- Corretto bug nella procedura calcolo costo articolo nel caso in cui venisse inserito un movimento di magazzino con causale considera movimenti a zero e con un costo negativo (#TT00305/24)
> - PR - corretto errore in fase di contabilizzazione distinta anticipi incassi che raddoppiava i valori ( #TT01262/24)
> - CO - skipping FA_Pagam rows with both importo than percentage 0 (#TT04477/24)
> - MES - Corretto bug nello scarico delle dichiarazioni di produzione inerente al consumo del semilavorato prodotto nella fase precedente nel caso in cui questa fosse la prima ed esterna (#TT03883/24)

### Patch 545.1-0107- 26/09/2024

> - MPS - Implementata gestione del numero riga non interger nella procedura di Definizione MPS (#TT03992/24)
> - CO - revisione calcolo mensilizzazione dell’elaborazione periodi (#TT04072/24)

### Patch 545.1-0106- 20/09/2024

> - SH - Contact-fix load ItemCustomer collection problem (#TT01967/24)
> - WM- Schede di Movimentazione - Aggiunti parametri AccountId, AccountCode, AccountDetailCode e AccountDescription per poter calcolare la giacenza iniziale per fornitore (#TT03922/24)
> - WM - Aggiunto la variante nel report ValorizatedBOM e ValorizatedItemCostBOM della valorizzazione distinta base
> - FI - manage the accrual date ranges from closure settings (#TT04008/24)
> - MS - Corretto bug in pianificazione generale che non cancellava gli ordini pianificati collegati al cash flow (#TT03806/24)
> - MS - Corretto bug nel rilascio ordini pianificati di produzione, a causa del quale non veniva correttamente valorizzato l'ordine di conto lavoro creato da una fase esterna nel caso in cui nel listino non fosse indicata la fase di riferimento (#TT03885/24)
> - SH - Update IBAN structure check for country AE (United Arab Emirates) (#TT03985/24)
> - CO - revisione cancellazione registrazioni rimanenze nelle chiusure infrannuali (#TT03976/24)
> - CO - Aggiunta la Colonna costo variante nel calcolo costi. Questa riporta i valori presenti nel tab varianti dell’anagrafica articolo (#TT03057/24 - #TT03043/24)
> - SCS - È possibile salvare il rientro di conto lavoro senza indicare i lotti nei materiali se il flag “Lotti e numeri seriali obbligatori” presente nei parametri di conto lavoro è disabilitato.  (#TT03989/24)

### Patch 545.1-0105- 05/09/2024

> - SD - Creazione fatture da DDT -corretto errore in fase di creazione fatture da DDT di vendita (#Ticket #TT03745/24)
> - FI - Vat register report - change to have the possibility to use quarterly/monthly for history (#TT03769/24)
> - PM- aggiunta ora nel campo "data inizio" delle risorse assegnate alle wbs di progetto (#TT03545/24)
> - WM - Corretto errore nella Stampa Valorizzazione Assiemi che non calcolava correttamente i costi nel caso di componenti con quantità diverse da uno (#TT02175/24)
> - FI - corretto errore in fase di inserimento cespite componente incrementativo di cespite parzialmente ammortizzato con iva parzialmente indetraibile ( #TT01937/23)

### Patch 545.1-0104- 08/08/2024

> - WM - Corretto bug che non verificava correttamente la giacenza negativa quando l’articolo si trovava all’interno di una registrazione di scarico in contropartita (#TT01417/24)
> - MPS - Corretto bug nel Rilascio degli Ordini di Conto lavoro che riportava solo il prezzo dell’articolo, ma non il Listino (#TT02812/24)
> - revisione memorizzazione credito anno precedente da stampa definitiva liquidazione iva periodica di gennaio (#TT02348/24)
> - SD - Nella procedura di Creazione da DDT, è stato inserito un nuovo controllo che impedisce la creazione di  un’autofattura da DDT (#TT02889/24)
> -  SCS - Corretto errore nei Rientri di Conto lavoro che non permetteva la modifica del Tipo fatturato acquisti sulle righe articolo (#TT03212/24)
> - SD - Corretto errore che non permetteva l’evasione forzata di un Ordine Cliente quando era collegato ad un Ordine Pianificato di Produzione contenente degli Extra Data (#TT03267/24)
> - MPS - Corretto bug in Capacità centri di lavoro che considerava la capacità su un centro di lavoro interno data da un ordine pianificato di conto lavoro; ora, se l’ordine pianificato di conto lavoro ha una fase interna (perché a volte viene prodotto internamente e a volte esternamente) questo non impegna più quel centro di lavoro (#TT03406/24)
> - MPS - Corretto bug in schedulazione generale che generava ordini pianificati con quantità non corrette (#TT03354/24 - #TT03204/24)
> - SCS - Risolto bug che permetteva la modifica della Quantità Articolo in un Ordine di conto lavoro già evaso in DDT (#TT02529/24)

### Patch 545.1-0103- 27/06/2024

> - SD - Correzione dell’errore che richiedeva uno sconto a scaglione nel caso di inserimento del Mask in un nuovo Arrotondamento (#TT00756/24)
> - SD - nella stampa del bilancino di fatturazione, revisione gestione segni nel subreport dei totali per fatturato vendite (#TT02720/24)
> - WM - Corretto bug nell’export excel dei dati presenti nel report Implosione componenti che non riportava il valore nella colonna quantità (#TT02753/24)
> - FI - Corretto bug nella form di lancio della stampa Enasarco che non gestiva correttamente il filtro per range di date (#TT00824/24)
> - QY - Azioni correttive - Revisione logiche di abilitazione informazioni presenti nel tabulatore Verifiche prossimo audit.(#TT02916/24)
> - SCM - Se il flag Prezzo Unità di Misura Alternativa è attivo nella Richiesta di Offerta, al momento della creazione dell’Ordine fornitore da Offerta fornitore il flag sarà riportato anche nell’ordine creato (#TT02804/24)
> - SCM - Corretto bug che non visualizzava Codice/Descrizione dell’Articolo fornitore nella form di Dettaglio righe Ordini quando l’ordine non era evaso (#TT02344/24)

### Patch 545.1-0102- 03/06/2024

> - SD - In DDT e Fatture aggiunto controllo preliminare allo scarico del lotto, in caso di lotti in negativo (#TT02237/24)
> - WM - Corretto bug nella visualizzazione degli errori della procedura di valorizzazione magazzino nel caso in cui questi fossero più di 100.000 (#TT02320/24)
> - SD - Corretto problema nei documenti di vendita che non gestiva adeguatamente la provvigione in presenza contemporaneamente di agenti legati ad un destinatario / destinazione del cliente e NON legati ad alcun destinatario /destinazione ma semplicemente al cliente (#TT00273/24)
> - FI - intrastat mensile vendite solo ai fini fiscali (#TT01966/24)
> - MPS - Corretto un problema tecnico legato alle custom relative alla schedulazione (#TT02304/24)
> - MPS - Corretto bug nel calcolo della data inizio degli ordini pianificati di acquisto (#TT03587/23)
> - SCM, SCS - Quando viene modificato il flag Prezzo Unità di misura Alternativa all’interno di una Fattura di acquisto che valorizza un Rientro di Conto lavoro, esso viene modificato anche nel Rientro e nella relativa registrazione, se presente. Quando il flag viene modificato dall’interno Rientro di Conto lavoro gli importi vengono ricalcolati anche nella Registrazione di magazzino (#TT00698/24)
> - SCM, SCS - Quando viene modificato il flag Prezzo Unità di misura Alternativa all’interno di una Fattura di acquisto che valorizza un Rientro di Conto lavoro, esso viene modificato anche nel Rientro e nella relativa registrazione, se presente. Quando il flag viene modificato dall’interno Rientro di Conto lavoro gli importi vengono ricalcolati anche nella Registrazione di magazzino (#TT00698/24)
> - SD - Quando nei parametri dell’area Vendite è attivo il flag ‘Blocca inserimento documento in date festive da calendario di fabbrica’ il controllo della data festiva viene effettuato prima nel Calendario di Fabbrica, poi nel Calendario delle capacità produttive (#TT02396/24)
> - SCS - Arrotondamento per Cdc su ordine di acquisto, DDT di acquisto, Fattura di acquisto (#TT02500/24)
> - SCM - La richiesta di acquisto deve essere considerata eseguita se vengono eseguite tutte le righe, ad eccezione delle righe di nota (#TT02389/24)
> - FI - Ripristino funzionalità di rettifica dei pagamenti parziali da griglia pagamenti (#TT02559/24)

### Patch 545.1-0101- 16/05/2024

> - SH - La procedura di Duplica articolo riporta anche le Note dei Fornitori preferenziali (#TT01580/24)
> -  SCM - Corretto errore che proponeva la stessa 'Descrizione articolo fornitore' nella procedura di 'Evasione ordini', per tutti i fornitori preferenziali dell'articolo (#TT01501/24)
> - FI - nella registrazione contabile, bloccata la possibilità di modificare righe pagamento derivanti da pagamenti percipienti, bisogna eseguire il rollback e modificare l’importo di pagamento nella procedura di contabilizzazione (#TT00909/24)
> - MES - Nelle Dichiarazioni di Produzione è stato aggiunto il dettaglio dell’Ubicazione nel messaggio di errore dovuto a giacenza insufficiente (#TT02064/24)
> - SCM - Risolto bug che non salvava correttamente un profilo nelle Richieste di Acquisto con filtro Non evase (#TT02123/24)
> - WM - Corretto bug nella formulazione del progressivo del codice lotto (#TT02142/24)
> - FI - Intrastat 2 , fluentis545 - Errore in ripresa dati da registrazioni CustomPosting (#TT02243/24)

### Patch 545.1-0100- 03/05/2024

> - FI, PR - revisione contabilizzazione effetti per partite create su divisioni differenti da quella attiva (#TT01401/24)
> - FI - in caso di gestione del controlling, le registrazioni di rettifica non prevedono più l’assegnazione di una data competenza economica alle righe contabili/cdc/cdp, mentre le integrazioni prevedono la data iniziale uguale alla data competenza economica della riga originale (e data finale fine mese) (#TT01061/24)
> - SCM - Corretto errore nell’aggiornamento degli importi nei movimenti di magazzino in presenza di una spesa ripartita nel DDT o nella Fattura di Acquisto (#TT00794/24)
> - SD - Corretto errore che modificava lo stato di evasione della commessa a seguito di un aggiornamento della Data consegna nell’Ordine cliente (#TT01699/24)
> - FI - revisione stampa definitiva liquidazione iva periodica gennaio per salvataggio credito anno precedente/credito periodo precedente (#TT01160/24)
> - CRM - Il mittente riportato nelle Newsletter viene preso dal campo 'Da', presente nella testata delle Newsletter (#TT01770/24)
> - FI - comunicazione trimestrale dell'iva, allineamento 2024 (#TT01141/24)
> - SD - Ricerca Provvigioni per destinazione- corretto la ricerca della % di provvigione per cliente e destinazione merce (#TT00273/24)
> - MES - Risolto bug nel ricalcolo della data ora inizio e fine delle fasi dell’ordine di produzione (#TT03584/23)
> - MPS - Risolto bug in fase di creazione degli ordini pianificati nel caso di materiali con livello fittizio (#TT00562/24)
> - MPS - Corretto bug in schedulazione generale nel caso in cui si schedulassero molte righe contemporaneamente (#TT01451/24)
> - MPS - Corretto bug in schedulazione generale per commesse non esaminate (#TT02897/23)


### Patch 545.1-0099- 28/03/2024
 
> - SD - cambiamenti per eFattura versione rumena  
> - FI - blocco del ricalcolo FSPostingPaymentSet quando si entra in modifica di una registrazione e non si ricalcolano le partite (#TT00362/24)  
> - SCM - Correzione dell’errore che impediva la Valorizzazione DDT in caso di Numero documento fino a 20 cifre (#TT00849/24)  
> - SD - Gestione eccezioni delle fatture elettroniche peppol (#TT01258/21)  
> - SD - Implementato e migliorato il funzionamento del flag “Evaso forzato” presente nelle righe degli ordini di vendita e anche del campo stato evasione presente nella testata (quando viene selezionato- “Evaso forzatamente”); ora quando vengono attivati viene mostrato un messaggio che avvisa che- “L'evasione forzata della riga comporta l'automatica eliminazione di eventuali ordini pianificati collegati a commesse in stato schedulata e l’evasione delle commesse in stato schedulata e non esaminata. Per quanto riguarda documenti generati a fronte di commesse in stato lanciato o esecutivo le commesse e documenti non verranno modificati.” (#TT00219/24)  
> - FI - Stampa videata liquidazione IVA (#TT01127/24)  
> - SD - Le spese Varie presenti negli Ordini vengono tutte riportate nel documento riepilogativo che evade gli Ordini (#TT01102/24)  
> - MPS - Corretto errore che non permetteva la cancellazione di una Commessa di Produzione (#TT01011/24)  
> - FI - IVA a CREDITO sul file per la LIPE tiene conto anche dell’IVA indetraibile da pro-rata (#TT01596/23)  
> - CO -  nella stampa del consolidato di Progetto, revisione filtro per tipo progetto (#TT01172/24)  
> - WM - Migliorata la visualizzazione in analisi disponibilità dei picking creati tramite lista prelievo materiali (#TT01205/24)  
> - SD - Risolta errata esposizione nella stampa provvigioni maturate di alcuni casi che erano già agganciati a liquidazioni agenti (#TT01208/24)  

### Patch 545.1-0098- 08/03/2024
 
> - FI - Esportazione Intrastat- sezione doganale e valore negativo nel riepilogo se inserito nella sezione quinquies (#TT00580/24)  
> - MPS - Schedulazione Generale- È ora possibile cancellare un ordine pianificato anche quando è contenuto all’interno di un Cash Flow (#TT00684/24)  
> - CO - calcolo ammortamenti del controlling, revisione elaborazioni dati iniziali (#TT00477/24) 

### Patch 545.1-0097- 01/03/2024

> - FI - In caso di creazione Fattura di vendita da Partita di anticipo, le scadenze vengono create con il flag Manuale (#TT00672/24)  
> - CRM - Nell’invio delle Newsletter, viene considerato il contenuto della proprietà Company Email delle Liste di distribuzione dinamiche, come destinatario delle email (#TT00730/24)   
> - SCS - Importazione xml rientri- Corretto errore di timeout dell'importazione (#TT02194/23)  

### Patch 545.1-0096- 22/02/2024
 
> - PR - in modifica degli effetti attivi, abilitazione della modifica del flag accreditato e dello stato effetto quando la società è codificata per DocFinance (#TT01387/23)  
> - MPS - Risolti bug in schedulazione (#TT01685/23, #TT00403/24, #TT00083/24, #TT03527/23, #TT00186/24)  
> - CRM - Risoluzione dell'errore che impediva l'invio delle Newsletter se presente una Lista di distribuzione dinamica (#TT00551/24)  
> - FI - revisione stampa liquidazione iva periodica, visualizzazione del subreport del plafond solo se questo ha flag default  
> - WM - Corretto bug nella procedura di valorizzazione magazzino (#TT00596/24)  
> - MPS - Risolto bug nella procedura di Schedulazione Generale (#TT00462/24)  
> - WM - Corretto errore nella conversione della quantità alternativa proveniente da un Rientro di Conto lavoro, nella form di Dettaglio Movimenti (#TT00517/24)  
> - SD - Per agenti con pagamento avvenuto o scadenza maturata, la stampa provvigioni maturate e la creazione automatica liquidazione provvigioni ora considerano maturate le provvigioni inserite in una fattura a zero se all'interno del documento c'è uno storno acconto riferito ad un acconto con partita incassata (#TT00620/24)  
> - FI - Corretto bug registro IVA RO  
> - CO -  Ammortamenti per il controlling, tabella CO_DepreciationYearStartings righe replicate + valori errati (#TT00477/24)  
> - WM - Corretto errore nella procedura di aggiornamento Costo Medio e Costo Ultimo (#TT00585/24) 

### Patch 545.1-0095- 08/02/2024
 
> - WM - Aggiunto sul report del Giornale di magazzino il filtro per società e divisione (#TT00375/24)  
> - SD - Risolvere il problema del esportazione colonna "Stato SDI" (#TT00321/24)  
> - FI - cambiamento calcolo per non deducibile- versione RO  
> - SCM - richieste di acquisto- risolvere il problema di salvataggio righe su analitica senza centro di costo(#TT00095/24)  

### Patch 545.1-0094- 06/02/2024
 
> - WM - Aggiunto sul report del Giornale di magazzino il filtro per società e divisione (#TT00375/24)  
> - SD - Risolto il problema del esportazione colonna "Stato SDI" (#TT00321/24)  
> - SCM - richieste di acquisto- risolvere il problema di salvataggio righe su analitica senza centro di costo(#TT00095/24)  
 
### Patch 545.1-0093- 25/01/2024

> - SH - Creazione nuovo anno- quando il parametro fix è true- se esistono righe con anno di data di fine validità > = anno- per non aggiornare a null (#TT00093/24)  
> - MES - Corretto bug nelle dichiarazioni di produzione che non caricava correttamente le UDC create all’interno della dichiarazione (#TT03393/23)  
> - SH - revisione del rollbak contatori nuovo anno, per i numeratori ex-2010 test se esistono documenti nel periodo (#TT00120/24)  
> - SD - Revisione gestione blocco fido quando il documento in modifica è quello che causa lo sforamento ed è già autorizzato (#TT00206/24)  
> - PR - nei pagamenti fornitori, nell’inserimento manuale delle righe revisione gestione campo importo in valuta per gestione decimali (#TT00281/24)  
> - FI - CU2024- Rilascio nuovo report Certificazione Unica 2024  
> -  Aggiunta della possibilità di aggiungere il prefisso Custom a flowOperation per personalizzare un flusso std  

### Patch 545.1-0092- 09/01/2024
 
> - FI - fattura di acquisto con percentuale non deducibile in Ro- risolti valori errati nel centro di costo in contabilità (#TT03651/23)  
> - SD - le righe degli interventi vengono riportate in fattura da valorizzazione interventi (#TT03594/23)  
> - SD - L’IVA della Dichiarazione d’intento nelle Spese dei Riepiloghi viene inserita nel DDT creato da Ordine, anche se si passa per Picking (#TT02907/23)  
> - SD - Revisione campo Arrotondamento in file xml nel caso di note di credito con prezzo ivato (#TT03685/23)  
> - SD - La fattura di vendita può essere filtrata dopo il tipo di persona da Contatti- Entità legale (#TT03667/23)  
> - SD - Corretto il funzionamento del filtro sugli Extra Data nei DDT di vendita (#TT00058/24)  
> - FI - Nella maschera della ricerca mutui, valorizzazione del campo ‘Importo residuo’ in griglia (#TT03633/23) 

### Patch 545.1-0091- 15/12/2023

> - CO - revisione elaborazione periodi del controlling per mensilizzazione dati oltre l’esercizio corrente (#TT03186/23) 

> - CO - nella stampa del consolidato di progetto del controlling, aggiunto filtro (non obbligatorio) di selezione della registrazione di consolidamento da stampare (#TT03485/23) 

> - SH - La colonna ‘Destinazione’ della griglia ‘Elenco destinazioni’ del tab ‘Consegna’ dell’Anagrafica contatto è stata adattata per contenere fino a 80 caratteri, uguale limite della ‘Ragione sociale’ del contatto (#TT03307/23) 

> - SCM - Carico a Mazzino- risolto l'inserimento del valore del movimento di magazzino quando la riga documento ha l'unità di misura Alternativa ma quantità alternativa 0 (#TT01740/23) 

> - SCM - Carico a Mazzino- risolto l'inserimento del valore del movimento di magazzino quando la riga documento ha l'unità di misura Alternativa ma quantità alternativa 0  (#TT03069/23) 

> - CO - nella contabilizzazione rimanenze delle chiusure infrannuali, valorizzazione della descrizione movimento per tutte le registrazioni create (#TT03495/23) 

### Patch 545.1-0090- 07/12/2023

> - SD - Se la Descrizione articolo supera i 250 caratteri nel file xml, l’importazione dell’Ordine PEPPOL tronca la stringa per i caratteri che eccedono (#TT03258/23)”. 

> - SCM - Risolta eccezione uscente nell'Evasione ordini di conto lavoro in DDT, causata da un parametro non presente (#TT03287/23) 

> - FI - allineamento date competenza analitica al cambiamento date nei dettagli compensi (#TT03153/23) 

> - FI - revisione assegnazione conti nelle scritture di rettifica delle chiusure infrannuali (#TT03349/23) 

> - SD - Nella procedura di ‘Contabilizzazione fatture’ è stato eliminato il filtro nella griglia ‘Registrazione contabile’ del tab Precedenti (#TT02115/23) 

> - SD - Revisione calcolo enasarco quota ditta per storno automatico delle quote minimali versate nei trimestri precedenti (#TT03396/23) 

> - CRM - Risolta eccezione uscente cliccando il tasto Invia in una Newsletter (#TT02563/23) 

> - SCM - Importazione file xml- rivista formattazione della data nell’importazione del file xml (#TT03194/23) 

> - FI - RO aggiungere nuovi conti su FastStart 

> - WM - Crea la possibilità di arrivare a una lista di inventario di un secondo utente anche se l'inventario e aperto da un altro utente 

> - SH - RO proposta dati anagrafica contatto da versione 8 di Anaf 

### Patch 545.1-0089- 17/11/2023
 
> - SD - Nel caso di Evasione parziale di un Ordine in un Picking, successivo inserimento articolo nel Picking, e creazione della Fattura, l’articolo inserito nel Picking viene considerato nei Riepiloghi fattura (#TT02039/23) 

> - MES - Risolto bug nel calcolo del costo dei movimenti di magazzino legati alla registrazione delle dichiarazioni di produzione (#TT02589/23) 

> - SH - context panel- corretta anomalia su context panel, in caso di dati non presente non restuisce un errore ma non carica i dati #TT02954/23 

> - MPS - Nella RDA creata da Rilascio Ordini pianificati, viene proposto il listino valido per il fornitore anche se esso non è il fornitore preferenziale di default per l’articolo. Inoltre, in questa procedura l’articolo viene cercato in tutti i listini validi per il fornitore, mentre prima veniva cercato solo nell’ultimo listino valido (#TT02898/23) 

> - CO - gestione comparazione del controlling (#TT02752/23) 

> - SH - Eliminate da FSContact -> Code special chars !@#$%^&* | \ / _ . , ; - (#TT03207/23) 

> - CO - nelle chiusure infrannuali, revisione scritture di integrazione per possibile conto di rateo mancante (#TT03235/23) 

### Patch 545.1-0088- 25/10/2023
 
> - FI - errore in creazione pagamenti dentro la registrazione contabile (#TT01583/23) 

> - WM - In Analisi disponibilità anche per le righe di dettaglio relative a commesse di produzione è possibile visualizzare conto, sottoconto e descrizione del cliente (#TT01554/23) 

> - SCM_PurchaseDeliveryNotes -> SCMPDN_Code- cambiamento lunghezza da 18 a 20 caratteri(#TT02687/23) 

> - BI - forzata la conversione in int per il numeratore e il denominatore- cruscotti  

> - MPS - Migliorata la gestione degli articoli fittizi in schedulazione e analisi disponibilità (#TT01484/23) 

> - MPS - Schedulazione generale- Gestione della Versione (#TT01863/23, #TT02380/23) 

> - PR - nella contabilizzazione distinte Sbf con chiusura conto cliente, aggiunto raggruppamento righe per data scadenza (#TT01130/23) 

> - WM - risolvere problema di salvataggio scarico prima di avere un carico (#TT02878/23) 

> - CO - Controlling- valorizzazione area acquisti in errore (#TT02693/23) 

> - BI - Corretta la riselezione della riga della griglia di dettaglio- "E stato aggiunto un elemento con la stessa chiave"(#TT02917/23) 

> - WM - Corretto bug nella procedura di calcolo costo (#TT02685/23) 

> - CO - fix refactor in scritture di rettifica 

> - WM - Corretto bug sulle ubicazioni, che si generava quando veniva modificato il codice di un nodo (#TT02911/23) 

> - MES - Corretto bug nel filtro dell’articolo della form “Gestione cicli e fasi di lavoro” nel caso in cui si usasse “%” (#TT01411/23) 

### Patch 545.1-0087- 05/10/2023
 
> - CO - gestione della UT_SpMapping in stored CO_CalcJobOrderReclassification, CO_CreateProjectFinalCalculation (#TT02652/23) 

> - CO - nella valorizzazione bolle di acquisto delle chiusure infrannuali, gestione delle competenze economiche sulla base della data carico bolla 

> - SCS - Corretto bug sul controllo giacenza per ubicazione dei materiali del rientro di conto lavoro (#TT02630/23) 

> - PM - è possibile cancellare una richiesta intervento con id > 32.767 (#TT02529/23) 

> - SCM - La Somma della colonna Imponibile negli articoli delle Fatture di acquisto si aggiorna all’aggiunta di Sconti (#TT02325/23) 

> - MPS - Corretto bug nella form di visualizzazione dati dell’MRP (#TT02508/23) 

> - FI - revisione gestione sconti in contabilizzazione fatture con prezzo ivato (#TT02498/23) 

> - MES - Corretto bug nel calcolo della quantità prodotta nelle segnalazioni nel caso in cui siano prodotti anche articoli alternativi (#TT02654/23) 

> - WM - il riferimento alla riga progetto viene salvato nella tabella della riga picking (#TT02669/23) 

> - Note di rilascio- creazione indici in fatture di vendita per ottimizzazione tempi esecuzione report (#TT02765/23) 

> - FI - Numerazione registrazioni contabili provvisorie- risolto errore nel caso in cui all’interno della numerazione venisse disattivato il flag di recupero numeri  (#TT02070/23) 

> - CO - aggiunto indice per migliorare la procedura di ‘Elaborazione consuntivi di progetto’ 

### Patch 545.1-0086- 22/09/2023
 
> - SD - La Duplica Ordini cliente riporta l'UnitNetPrice (#TT02366/23) 

> - CO - revisione calcolo ammortamenti del controlling (#TT02531/23) 

> - FI - proposta cambio in sp CA_CreateSimpleReg 

> - FI - gestione campi di link ai progetti nelle riaperture delle scritture di assestamento 

> - FI - Fatture acquisto SDI- mancato controllo per Codice Fiscale (#TT01432/23) 

> - MPS - Corretto bug nel caso di cancellazione di una commessa che aveva degli ordini pianificati rilasciati on extradata (#TT02464/23) 

> - WM - Corretto bug in fase di inserimento componente in distinta base (#TT02394/23) 

> - WM - Corretto bug nel caso in cui si usasse la procedura "Modifica massiva articoli" per inserire i tempi dei fornitori preferenziali (#TT02614/23) 

> - SD - Se un Picking viene creato inserendo prima manualmente una riga articolo e poi evadendo all'interno un ordine, la Fattura creata da Picking considererà anche la riga inserita manualmente (#TT02039/23) 

### Patch 545.1-0085- 07/09/2023
 
> - MPS - Corretto bug in schedulazione per calcolare data impegno nei materiali di ordini pianificati  (#TT02093/23) 

> - SD - Correzione del valore di Storno omaggi senza rivalsa IVA nei Documenti SDI (#TT02336/23) 

> - SD - La Duplica di DDT e Fatture riporta la Dichiarazione d’intento se c’è plafond disponibile (#TT02318/23) 

> - FI - Campi "Anno", "Mese" e "Trim." su griglia intrastat in reg. contabili (#TT01630/23) 

> - FI - Compensi- iva con data fine validità (#TT02176/23) 

> - FI - in una registrazione manuale non iva relativa ai cespiti, l’inversione del segno dare/avere di un importo negativo nei cespiti viene effettuata solo se la causale prevede il flag di inversione (#TT02358/23) 

> - SD/SCM - Modifica della contabilizzazione dei documenti impostati per l'utilizzo di "prezzo IVA inclusa" (#TT01662/23) 

> - Aligned BizLink flows for Sepa and Sdd see tickets (#TT02082/23 e #TT02081/23) 

> - SD - Per il file Sdi, revisione della gestione del segno per i riepiloghi iva legati agli storni degli omaggi (#TT02396/23) 

> - SD - Per il file Sdi, revisione importo di storno omaggio in caso di riga senza rivalsa iva (#TT02444/23) 

> - FI - Stampa modelli Intrastat- Correzione formato data in stampa modello Intrastat2 (#TT02381/23) 

> - SD - Nella creazione Fattura da Lista di prelievo UDC/Packing List, è stato inserito un controllo per il rispetto progressione data e numero fattura (#TT02335/23) 

> - FI - nella creazione registrazioni contabili da file Sdi, verifica di partita iva e codice fiscale (se presente nel file) per l’individuazione del sottoconto fornitore, per gestione gruppi iva(#TT01432/23) 

> - SCS - Import FSSubcontractorReturn- Corretto timeout in fase di importazione di un rientro di conto lavoro (#TT02408/23) 

> - SH - Documentale- Corretto bug in caso di tipo documento cartella, ora vengono usate le credenziali inserite nel tipo documento e non l'utente della pool  (#TT01658/23) 

### Patch 545.1-0084- 02/08/2023
 
> - SCS - Errore durante la convalida delle scorte sulla registrazione dello scarico di ritorno del subappaltatore TT01985/23 

> - MPS -  Corretto bug in schedulazione che si verificava nel caso in cui venissero schedulate più commesse contemporaneamente con il raggruppamento.  (#TT01459/23) 

> - FI - stampa giornale contabile (#TT01551/23) 

> - SD - Listini di vendita- Fix per stampa listini di vendita. Se viene customizzato l'oggetto, ora si può utilizzare anche la stampa standard (#TT01945/23) 

> - SH - Risoluzione dell'errore uscente riaprendo l'allegato di Tipo email di un documento (#TT00081/22) 

> - SCS - Implementata la procedura di scarico rientri di conto lavoro impedendo che si possa cliccare più di una volta sul pulsante scarico (#TT00949/23) 

> - SCM - Sistemato errore sul campo "Descrizione articolo fornitore" in ordini fornitori.(rif #TT02006/23) 

> - SD - Il Bilancino di Fatturazione riporta nel Totale imponibile la somma delle righe Imponibile dei Riepiloghi fattura (#TT01826/23) 

> - FI - RO version- fix sul calcolo dello scarico delle immobilizzazioni per i conti patrimoniali e i conti di costo (#TT01788/23) 

> - CO - revisione della duplica dello storico registrazioni gestionali in registrazioni extracontabili di area(#TT01831/23) 

> - MES - Corretto bug nelle dichiarazioni di produzione sulla congruenza tra le date della dichiarazione e le date dei dipendenti (#TT02701/22) 

> - SD - La Conversione da Offerta a Ordine trasferisce il flag Prezzo manuale solo se presente in Offerta (#TT01972/23) 

> - SD - è stato inserito un controllo nel pulsante Stampa dei DDT e delle fatture che impedisce lo scarico doppio in caso di molteplici stampe consecutive (#TT01050/21) 

> - SD - Nelle fatture di vendita, lo storno acconto propone ora la dichiarazione di intento dalla riga d'acconto d'origine e il combo mostra le dichiarazioni dell'esercizio dell'acconto (#TT02084/23) 

> - MES - Aggiunta la colonna “Quantità da produrre” nella tabella degli ordini di produzione della procedura di stampa del Foglio di lavoro (#TT01503/23) 

> - WM - Corretto bug in gestione distinta basi che generava un errore durante l’esplosione dell’albero della distinta (#TT02148/23) 

> - SD - La creazione di una Nuova fattura dall’interno del tab Trasporto di una precedente fattura riporta la Destinazione di anagrafica quando inserisco il cliente (#TT02168/23) 

> - FI - blocco alla cancellazione di una registrazione contabile se ci sono partite inserite in un pagamento fornitore da contabilizzare (#TT02083/23) 

> - SCM - La stampa dei documenti di acquisto riporta la UM alternativa nel caso ci sia il flag UM prezzo nelle righe articolo (#TT02237/23) 

> - SCS - Sistemato errore nella creazione DDT di Consegna da ordini di conto lavoro con la procedura evasione da ordini (Riferimento Ticket- #TT02202/23) 

> - Allineato tracciato Sepa (#TT00338/23) 

### Patch 545.1-0083- 27/06/2023
 
> - FI - allineato campo Pagamenti da registrazioni provvisorie nella form del calcolo rischio cliente inquanto non veniva correttamente valorizzato (#TT00947/23) 

> - SD - CMR- Modificata stampa CMR (#TT03221/22) 

> - FI - Stampa situazione ritenute, revisione campo ritenuta versata (#TT01775/23) 

> - CO - allineata la logica di gestione della competenza economica per le Fatture da emettere / ricevere nelle chiusure infrannuali (#TT01267/23) 

> - SD - se la diminuzione dell’importo del documento, già segnalato nel fido, porta lo sconfinamento al di sotto del valore fido cliente, la riga di segnalazione nel lock manager viene cancellata (##T01806/23) 

> - CO - Soppressione righe con valore 0 in chiusura conti infrannuale, scritture di rettifica (#TT00797/23) 

> - SCS - Corretto l'errore sul rollback della bolla di consegna del subappaltatore (#TT01962/23)

### Patch 545.1-0082- 14/06/2023
 
> - MES - Segnalazioni- Ripristino dello stato di evasione di un ordine di produzione se viene modificata una segnalazione collegata (#TT01485/23) 

> - FI - corretto bug che non permetteva il corretto funzionamento del campo di filtro Conto agente nell’esecuzione dei report Estratto conto e Sottoconti(#TT01281/23) 

> - SH - Eliminazione del tipo riga 8 dai documenti (#TT00762/23) 

> - SD - Il flag Rivalsa IVA viene trasferito tra Ordine e DDT anche passando per il Picking (#TT01708/23) 

> - FI - stampa giornale contabile- add a new message (#TT01551/23) 

> - SCM - Revisione dell’assegnazione a centro di costo su priorità magazzino alla modifica del magazzino nella riga del documento (#TT01715/23) 

> - SCM - negli ordini fornitori, gestione del parametro di blocco al salvataggio quando il valore dell'analitica non corrisponde al valore dell'articolo (#TT01716/23)

> - Risolto problema che in fase di anteprima di stampa non caricarva alla prima anteprima i bottoni di imposta pagina e disegno (#TT01719/22) 

> - SCM - I totali della Fattura rimangono corretti aggiungendo delle Spese nei Riepiloghi (#TT01681/23) 

> - SCM,SCS,QY,SD,WM, MES - La convalida negativa delle scorte prima della registrazione del magazzino viene generata da tutte le aree prendendo in considerazione tutte le date successive alla data di registrazione (#TT00839/23) 

> - CO - nell’elaborazione periodi del Controlling, verifica della presenza di un periodo di distribuzione di default per eseguire l’elaborazione (#TT01687/23) 

> - SD - corretto bug che non valorizzava correttamente le scadenze i n fattura di vendita quando generata da DDT e in presenza della ritenuta d’acconto (#TT01719/23) 

> - SH - Revisione del calcolo dei riepiloghi iva su documenti con prezzo ivato. Ora dal prezzo ivato si totalizza per aliquota e si calcola l'iva da questo totale, poi per differenza l'imponibile (invece di sommare imponibili e iva, già arrotondate, dalle righe articolo come prima) Il prezzo (non ivato) di riga ora viene gestito con 8 decimali (#TT01266/23) 

> - SD - La creazione del file Sdi delle fatture di vendita con prezzo ivato ora valorizza il tag <>Arrotondamento</> dei riepiloghi iva, per quadratura tra la somma degli imponibili di riga e l'imponibile calcolato dallo scorporo sul totale ivato per aliquota. Allineamento dei conteggi per gli articoli omaggi, con e senza rivalsa iva (#TT01704/23) 

> - PM - la stored procedure [dbo].[CM_ValorCommese] gestisce l'esecuzione della stored procedure personalizzata tramite la tabella ut_sp_mapping (#TT01782/23) 

> - SCM - All’inserimento dei Serial number in un Ricevimento merci, i codici inseriti manualmente vengono mantenuti al cambio di riga (#TT01771/23) 

> - FI - Contabilization of sales invoices with 'price including vat' and 'omaggi' rows (#TT01662/23, #TT01800/23) 

### Patch 545.1-0081- 26/05/2023


> - SCS - Corretto il riferimento dei campi fase, sottofase e codice fase nell’evasione dei DDT e rientri di conto lavoro (#TT01191/23) 

> - QY - Nella Ricerca Reclami, la colonna Gestione viene correttamente popolata (#TT01072/23) 

> - SCM - In area acquisti, revisione del calcolo importo scopertura dichiarazioni di intento (#TT01126/23) 

> - CRM - Risoluzione eccezione 429 del server nell'apertura dei Contatti (#TT01318/23) 

> - CRM - E' possibile cancellare la Data chiusura nell'anagrafica Ticket (#TT01364/23) 

> - WM - Attivazione della Propagazione degli Extra Data da Item a FSMovement (#TT01358/23) 

> - FI - revisione inserimento multiplo centri di costo nei cost driver (#TT01435/23) 

> - CO - incrementato il tempo di attesa nella ripresa dati da produzione, Ripresa movimenti fisici (#TT01457/23) 

> - MPS -  Corretto bug sul filtro del codice articolo della procedura Gestione cicli e fasi di lavoro (#TT01411/23) 

> - SD - Abilitata modifica causale di chiusura automatica scadenze in fatture già inviate allo Sdi (#TT00344/23) 

> - SD - Gestione Offerte- Aggiunto indice per la referenza all'oggetto padre delle righe offerte (#TT01421/23) 

> - SH - Risolta eccezione uscente cliccando Nuova destinazione dalla tab Consegna dei contatti (#TT01460/23) 

> - WM -  Corretto bug nell’import articoli della gestione prototipi. Ora le fasi vengono correttamente inserite nella sezione del Ciclo nel tab Componenti (#TT00791/22 e #TT02388/22) 

> - SCM - La creazione di un Profilo nella Definizione politiche sconti non causa più la scomparsa della prima griglia (#TT01291/23) 

> - FI - revisione salvataggio credito anno precedente per periodo gennaio/primo trimestre (#TT01380/23) 

> - CO - revisione stored ripresa costi di commessa nel controlling (#TT01435/23) 

> - CO - revisione calcolo consuntivo di progetto per gestione indici nulli (#TT01469/23) 

> - PR - corretto bug che in fase di rollback della procedura Contabilizzazione anticipi incassi generava dei valori anomali (valori negativi) per il campo AISD_ImportoIncasso (#TT01425/23) 

> - WM -  Corretto bug nei parametri MRP di articoli gestiti a variante. Ora i parametri visualizzano correttamente la variante (#TT01441/23) 

> - MPS -  Corretto bug sullo stato delle testate delle commesse di produzione.  (#TT01376/23) 

> - WM - Aggiornato l'ordinamento dei dati nel report di stampa del giornale di magazzino; ora l'ordinamento delle righe avviene per magazzino e per data registrazione. 

> - FI - errore in creazione pagamenti dentro la registrazione contabile (#TT01583/23) 

> - IS - quando si crea 'Rivalsa Iva' e si creano le fatture, si creano le righe per il costo dell'insoluto (senza registrarsi sul cliente e aprire la scadenza) (#TT01243/23) 

> - FI - Corretto report registri iva, riportava un indicazione sbagliata relativamente alla quota parte di competenza dei periodi precedenti/successivi (#TT00207/23) 

> - SD - La modifica delle righe articolo in un'Offerta intestata a Contatto CRM è stata ottimizzata nel caso di Spese nei riepiloghi (#TT01598/23) 

> -CO- nei Valori di controllo del Controlling, il tab Valori commesse filtra ora sulla tabella specifica dove si valorizzano i driver di commessa/progetto #TT01587/23 

> - PR - contab insoluti- tab rollback -show invoice number and date in lower grid (#TT01615/23) 

### Patch 545.1-0080- 28/04/2023
 
> - SD - Se la fattura proviene da Ordine, nel file xml verrà riportato il campo Vostro riferimento di testata; se assente, verrà riportata la dicitura VUOTO (#TT03021/22) 

> - WM - Corretta la gestione della ubicazione del movimento di magazzino creato da articoli alternativi delle segnalazioni di produzione, ora è settato a seconda della casuale utilizzata nell’ordine (#TT00815/23) 

> - FI - soluzione problema al salvataggio data stampa liquidazioni iva in società con periodicità trimestrale, revisione impostazione periodo di stampa quando si imposta il flag ‘Definitiva’ (#TT01156/23) 

> - SCM, SD - Inserito pop up di avviso IVA obbligatoria in caso di cambio cliente o fornitore in Fattura (#TT03387/22) 

> - FI - soluzione al problema della selezione del centro di costo  nel Tab Analitica (#TT01225/23)  

> - MPS -  Corretto bug in analisi disponibilità relativamente al calcolo Scarico degli ordini di produzione che usa valori anche dal picking (#TT01159/23)   

> - SH - ottimizzazione flag Gestione RAEE nelle anagrafiche clienti e fornitori- esso è presente solo nelle anagrafiche clienti (#TT01192/23) 

> - CO - nella maschera di Valori di controllo del controlling, aggiunto filtro per Dimensione (#TT#01150/23) 

> - SH - è stata implementata la logica del contattore attività e il conteggio delle attività lette quando l’utente assegnato è diverso dall’utente manager (#TT00222/23) 

> - MPS -  Corretto bug in "Sequenza Fasi- TopDown grid" che non visualizzava correttamente gli ordini pianificati (#TT01263/23) 

> - MPS -  Corretto bug sulla disponibilità della schedulazione generale (#TT00442/23) 

> - PR - l’inserimento di una riga (manuale o da help partite) in una distinta di pagamento fornitore valorizza ore la stringa dell’iban in ‘upper case’ (#TT01231/23) 

> - SCM - Il Carico in magazzino del Ricevimento merci riporta il prezzo degli articoli del documento (#TT01075/23) 

> - CO - modifiche al calcolo ammortamenti del controlling (#TT01298/23) 

> - CO - centro di costo e record del driver di costo- modificato nel caso in cui il valore di suddivisione sia inferiore a 0,01, in 0,01 

> - CRM - Nel Dettaglio ticket della Gestione ticket, il testo della Descrizione va a capo automaticamente alla fine della riga (#TT01222/23) 

> - PR - Area Tesoreria, Modulo rischio cliente, corretto bug che nel ricalcolo rischio cliente non considerava correttamente le partite provenienti da registrazioni provvisorie. Rif #TT00947/23 

> - MPS - Schedulazione generale , F.C.S., M.R.P., completamento dati ordini pianificati/produzione- Considerazione della data di validità di una fase di lavorazione alla data di esecuzione (#TT03354/22) 

> - SCS - È stato corretto l'errore relativo all'eliminazione dei lotti sui materiali sui resi dei subappaltatori.(ref #TT01313/23) 

### Patch 545.1-0079- 13/04/2023
 
> - SCM - Il Carico in magazzino del Ricevimento merci riporta il prezzo degli articoli del documento (#TT01075/23) 

> - WM -  Corretto bug nel calcolo dei costi diretti all’interno dei prototipi.(#TT00979/23) 

> - CO - modificata stored standard per abilitazione UT_SpMapping (#TT01175/23) 

> - MPS -  Corretto bug sulla schedulazione relativa al reintegro scorta minima.(#TT00983/23) 

> - SCM - La procedura di Creazione Automatica ordini riporta i primi 255 caratteri della descrizione articoli del documento di partenza (#TT01938/23) 

### Patch 545.1-0078- 06/04/2023
 
> - WM_StampaGestionale- Articoli Non Movimentati- Modifica del formato del campo Data Ultima Registrazione in dd/MM/yyyy. 

> - FI - calcolo scritture di assestamento (#TT00454/23) 

> - SD, SCM - Nella procedura di Duplica e Manutenzione, l’Aggiorna listini in Valore permette un numero di decimali libero (#TT00925/23) 

> - MES - Negli ordini di produzione se viene indicato un lotto nei materiali, questo viene riproposto, in corrispondenza del materiale, anche nel relativo picking creato dalla procedura di Lista prelievo materiali (#TT01408/22) 

> - SD - Nella testata dei documenti di vendita il bottone della ribbon bar è stato rinominato in "Inserisci Agente nelle righe" (#TT00890/23) 

> - SD - Correzione della Somma nel Pannello riepilogo totali della Ricerca fatture di vendita- la variazione dell'Ordinamento di colonna non ne modifica i valori (#TT00780/23) 

> - QY - Item Control- Importazioni articoli da controllare- La quantità specificata per riga documento da importare ora riporta la quantità del dettaglio Lotto, se richiesto, non quella della riga articolo. 

> - revisione file bonifici Sepa localizzazione francese, tolto il tag **TwnNm** e il blocco **PmtTpInf** presente dentro la sezione **CdtTrfTxInf** (#T00940/23)

> - MPS - Implementazione nel calcolo del costo del tempo di attrezzaggio nella costificazione della commessa. Nel caso in cui, nel tab attrezzaggio del ciclo, non siano indicati macchina e/o gruppo manodopera, la procedura considera il costo della macchina e/o del gruppo manodopera presenti nella fase. Se nel tab attrezzaggio è indicato il centro di lavoro, la procedura considera il costo della macchina e/o del gruppo manodopera legati a quel centro di lavoro. Se nel tab attrezzaggio, è indicata la macchina e/o il gruppo manodopera, la procedura considera il costo della macchina e/o del gruppo manodopera indicati nel tab (#TT03389/22) 

> - SCM - Risolto l’errore che causava lo scambio di Magazzini tra Divisioni, nell’inserimento di un Ricevimento Merci (#TT00915/23) 

> - SCM - L'Aggiorna prezzi all'interno dei Listini di acquisto funziona anche se l'oggetto è custom (#TT01007/23) 

> - MPS - Schedulazione finita- bug fix per controlla disponibilita (#TT00033/23) 

> - CO - nella duplicazione comparazione riclassificazioni del controlling, risoluzione errore nel caso di codifica centri con codici puntati tipo xxx.yy (#TT00973/23) 

> - CO - nell’elaborazione periodi del controlling, revisione del calcolo indici per gestione su centri non soggetti a driver (#TT00974/23) 

> - FI - nella creazione della registrazione contabile da file Sdi, gestione dello sconto del blocco **ScontoMaggiorazione** inserito nei **DatiGeneraliDocumento**. La contabilizzazione aggiunge due righe, una di storno del cliente e l’altra sul conto indicato nella form di gestione dell’import (#TT00834/23)

> - CO - nell’elaborazione periodi del controlling, revisione gestione origine dati per differenziazione saldo contabile e manuale (#TT#00991/23) 

> - CO - nell’elaborazione periodi del controlling, revisione gestione tipo riga per distribuzione periodi su centro ‘valori non assegnati’ (#TT01010/23) 

> - PR - Risolto problema in fase di creazione pagamenti fornitori manualmente, quando veniva creato un nuovo pagamento e contestualmente si andavano a richiamare le partite da inserire non venivano compilati tutti i dati relativi alla banca ma occorreva entrare ed uscire dal pagamento per avere il dettaglio compilato (#TT00916/23) 

> - SD - La creazione e la successiva cancellazione di un ddt preveniente da picking proveniente da ordine non preclude la possibilità di cancellare il picking (#TT01033/23) 

> - Sistemato errore in chiusura listini fornitori" (#TT00627/23) 

> - SCS - La Percentuale di Spese dei Riepiloghi degli Ordini e dei DDT viene impostata di default a 0, permettendo all'utente di inserire direttamente il valore (#TT01016/23) 

> - FI - Risolto problema nell’elaborazione della comunicazione liquidazioni periodiche iva, il credito anno precedente veniva erroneamente riportato prendendo lo stesso valore del credito periodo precedente andando così a raddoppiare il credito (#TT00875/23) 

> - SD - Una fattura proveniente da più ordini cliente riporta tutte le spese degli ordini di partenza; è stato corretto l'errore che moltiplicava le righe spesa riportate per il numero di righe articolo presenti negli ordini di partenza (#TT01088/23) 

### Patch 545.1-0077- 23/03/2023
 
> - SD - Inserito controllo su destinatario e destinazione in caso di Evasione ordini multiple in ddt o fattura (#TT00807/23) 

> - SCS - Correzione errore Quantità residua nei Materiali degli ordini di conto lavoro evasi in ddt (#TT00459/23) 

> - SCS - Inserita possibilità di evadere una quantità decimale nelle Consegna previste (#TT00817/23) 

> - SD - Nella creazione del file Sdi, sostituzione del carattere '&' con 'e' invece che 'and' (#TT00845/23) 

> - CO - crea chiusura intrannuale- year proposal (#TT00862/23) 

> - SH - Errore Fluentis in procedura di duplicazione contatto (#TT00848/23) 

> - SD - Revisione ricerca ddt di vendita nella procedura di valorizzazione (#TT00825/23) 

> - SCM - Gli sconti finali inseriti in fattura vengono riportate nelle righe del ddt di acquisto e nella registrazione di magazzino collegati (#TT00417/23) 

> - WM - La Visualizzazione giacenze considera i decimali della Unità di misura (#TT00754/23) 

> - PR - Corretto bug che permetteva la cancellazione delle righe nella form Lock manager utilizzando il tasto CANC della tastiera, anche se l’utente non aveva i diritti sul comando di cancellazione (#TT00724/23)

> - CO - revisione comparazione riclassificazioni 

> - FI - corretto bug che non gestiva correttamente i valori durante le operazioni di distruzione cespite e alienazione parziale cespite operando da dentro la scrittura contabile di prima nota.(#TT00786/23) 

> - SCS - Nei rientri di conto lavoro, la disponibilità di lotti e serial number considera la disponibilità dei materiali e non degli articoli (#TT00676/23) 

> - SCM - Per le righe della Fattura provenienti da Rientro Conto lavoro non è possibile effettuare l'Aggiornamento Listini (#TT00654/23) 

> - SH - In caso di creazione anagrafica di tipo persona fisica, viene restituito ora un messaggio se il codice fiscale è già esistente in altra anagrafica (#TT00874/23) 

> - WM -  Corretto bug su “Anno Data Inserimento” del tipo codice serial number (#TT00757/23) 

### Patch 545.1-0076- 14/03/2023
 
> - Abilitazione modifica campo 'Note iniziali' nelle fatture di vendita anche dopo la creazione di file fatture ordinarie Sdi (#TT00593/23) 

> - WM -  Corretto bug nella procedura di calcolo costo (#TT00657/23) 

> - FI - "certificazione ritenuta telematica"- double click on "percorso file" (#TT00812/23) 

> - SD - Risolto problema di duplicazione Pagamenti nella Valorizzazione di più Interventi in Fattura (#TT03278/22) 

> - FI - scritture di assestamento- crash at button "verifica calcolo assestamento" (#TT02401/22) 

> - FI - error at print and print preview in schede cespiti if year is null (#TT00799/23) 

> - MPS -  Risolto il problema in merito al calcolo disponibilità nella scheduilazione nel caso di articolo fittizio (#TT00651/23) 

> - MPS - Implementata la possibilità di gestire più commesse di produzione e ordini pianificati dopo la schedulazione nel caso venga utilizzato il raggruppamento ed il rilascio automatico (#TT00560/23 e #TT00614/23) 

### Patch 545.1-0075- 02/03/2023

> - PM - i clienti fornitori per i quali è stata inserita una data fine validità \> = alla data attività nella dichiarazione attività, non vengono proposti nel widget cliente fornitore del documento (#TT00555/23) 

> - SD - Disabilitato il doppio clic su stampa biglietto POS (#TT00611/23) 

> - SD - Nell’evasione di più ordini in una fattura viene riportata solo la spesa Trasporto del primo ordine (#TT00631/23) 

> - FI - Corretto bug in fase di inserimento dei precodici cespite nella tabella Precodice cespite in relazione al parametro di gestione precodice per singola società (#TT02955/22)

### Patch 545.1-0074- 23/02/2023
 
> - changes in BI_Valor_FA_Commesse  and BI_Valor_BA_Commesse. Inserts in BI_Cdc if the company has flag controlling (#TT00469/23) 

> - changes in BI_ScritIntegrCdC and BI_ScritCdC. Add management of CACD_CMAN_Id/CACD_CMAR_Id (#TT00470/23) 

> - SD - procedura di contabilità delle fatture di vendita/ modifica dell'algoritmo (#TT03298/22) 

> - CO - revisione procedura ‘Contabilizzazione rimanenze’ per gestione rimanenze iniziali con periodo antecedente di magazzino chiuso (#TT00440/23) 

> - SD - Rimozione spazi dal tag Iban delle fatture elettroniche (#TT00502/23) 

> - Corretto bug in fase di importazione di un particolare tipo di fattura elettronica in formato .p7m criptato (#TT00304/23) 

> - MES - Corretto bug nel calcolo dei minuti nelle segnalazioni di produzione (#TT00423/23) 

> - SH - fix IsReadOnlyFromProfile- non è stato preso in considerazione quando l'utente ha personalizzato il layout del modulo (#TT02214/22) 

> - Sistemato errore nella creazione RDA inserendo articoli con progetto 

> - SCS - Se un Rientro contiene un Articolo archiviato successivamente alla creazione dell’Ordine di conto lavoro, la sua registrazione di magazzino avvisa quale articolo sia archiviato (#TT00405/23) 

> - BZ - Aggiunto campo Persona nell'importazione contatti CRM (#TT02054/22) 

> - CO - revisione gestione date competenza e conti utilizzati nella contabilizzazione rimanenze, revisione comparazione riclassificazioni per fomule e dettagli dei dati rimanenze iniziali/finali (#TT00554/23) 

Revisione evasione ordine per ripristino iva ordinaria nel caso in cui non ci sia dichiarazione di intento valido alla data documento 

> - FI - Nella creazione autofatture di vendita da registrazione contabile, valorizzazione della nota di dettaglio inserita in riga iva nella descrizione articolo riportata in fattura(ref. ticket 510/23) 

> - WM - Risolto problema di visualizzazione Iso Code nella Descrizione in Lingua dell'articolo (#TT00465/23) 

> - WM -  Corretto bug nella stampa inventario valorizzato nel caso in cui il cliente non avesse il sotto conto (#TT00528/23) 

> - FI - nella creazione della registrazione contabile da file Sdi, viene ora restituito un messaggio se il pagamento nel file è differente da quanto impostato in anagrafica fornitore (#TT01064/22) 

> - SD - Correzione della duplica sconti articolo in caso di cambiamento tipo ddt di vendita ( #TT00400/23) 

> - FI -  nella stampa della liquidazione iva periodica, quando si imposta il flag definitiva ora si assegna il prossimo periodo da stampare sulla base dell’ultimo inserito in tabella versamenti iva per l’anno (#TT3266/22) 

### Patch 545.1-0073- 09/02/2023

> - CO - revisione gestione stampa ‘Consolidato di progetto’ per tempi esecuzione 

> - SD - La ricerca Fatture di vendita presenta in griglia l'Importo Iva, che sarà con segno negativo per le note di credito (#TT00287/23) 

> - SD -  Revisione procedura di creazione file xml in caso di quantità alternativa (#TT00397/23) 

### Patch 545.1-0072- 03/02/2023 

> - FI - Compilazione intrastat 1 (vendite) trimestrale (#TT02195/21) 

> - MES -  Corretto bug nelle segnalazioni di produzione relative allo scarico dei materiali legati a specifiche fasi nel caso di utilizzo del magazzino WIP. 

> - SD - correzione dei bug relativi all'impostazione dei prezzi nei servizi di workreport collegati alla WBS del progetto (#TT01159/22) 

> - SCM - Corretto errore di carico automatico fattura di acquisto (#TT02700/22) 

> - SCM - La cancellazione di una riga articolo nell’Ordine Fornitore aggiorna la Quantità residua della Commessa di acquisto collegata (#TT00215/23) 

> - SCS - Subcontractor return- I totali del documento non venivano ricalcolati all’eliminazione di una riga articolo. 

> - CO - revisione gestione stampa ‘Consolidato di progetto’ per tempi esecuzione 

> - SCM - Gli sconti previsti dalla Definizione politiche sconti vengono correttamente riportati (#TT03250/22) 

> - MES - Risolta anomalia incongruenza valori disponibilità rispetto agli ordini pianificati schedulati.  (#TT03022/22) 

### Patch 545.1-0071- 27/01/2023 

> - FI - maschera della “Certificazione ritenuta telematica”, allineamento campo ‘Eventi eccezionali’ per gestione CU2023 (#TT00168/23) 

> - SD - Corretti errori di sovrascrittura nella creazione Progetto da Ordine cliente (#TT03419/22) 

> - SCM - Se modifico la quantità nella Creazione automatica ordini da Richiesta di Acquisto, l’Ordine viene creato con il prezzo corretto (#TT00058/23) 

> - QY - Le note di credito create dal modulo Qualità hanno il segno corretto (#TT01431/22) 

> - SCM - Il prezzo manuale viene mantenuto nella Creazione ordine fornitore da Offerta fornitore (#TT02562/22) 

> - SD - In creazione file xml delle vendite, sostituzione dei caratteri invalidi anche per il tag con i riferimenti ordine di acquisto (#TT00243/23) 

> - FI - In creazione autofattura vendite da registrazione contabile non iva, revisione gestione segni note di credito (#TT02554/22) 

> - CF- revisione calcolo cash flow per ordini di acquisto (#TT00201/23) 

### Patch 545.1-0070- 19/01/2023
 
> - SCS - Risolta eccezione uscente nel caso di inserimento spesa a Valore nei Rientri conto lavoro (#TT03150/22) 

> - WM - Pharma- il profilo in anagrafica lotti non veniva visualizzato correttamente dopo il salvataggio (#TT00102/23) 

> - SD - fatturazione elettronica in uscita, gestione file semplificato per fatture di tipo 'Note di variazione sola iva' (#TT02958/22) 

> - MES - Ora il calcolo dei tempi macchina e manodopera prende in considerazione correttamente le pause pranzo e pause notturne nelle segnalazioni di produzione (#TT02993/22) 

> - FI - Procedura Generazione Solleciti- Filtro Agente (#TT02762/22) 

> - WM - Utilizzando l’help del scarico serial number è possibile selezionare e riportare nella relativa griglia più serial number contemporaneamente (#TT00108/23) 

> - FI - Aggiunto il filtro MBPCC_CDC_Id is not null nell'algoritmo di generazione del centro di costo dal libro mastro di registrazione (#TT00170/23) 

> - SCS - Aggiunte le colonne di Fase, Sottofase e codice fase nella griglia di evasione da ordini nei rientri di conto lavoro (#TT02390/22) 

> - Rilascio stampe CU2023 

### Patch 545.1-0069- 12/01/2023 

> - FI - creazione file telematico dichiarazione d’intento (#TT03407/22) 

> - MES - Nelle segnalazioni di produzione, ora è possibile variare l’ubicazione nel filtro dell’help lotti per il materiale da scaricare (#TT03106/22) 

> - WM - Stampa giacenze- Aggiunto parametro stock value che riporta la Giacenza a data inserita nella form (#TT03450/22) 

> - SD - La generazione di un Progetto da Ordine tiene in considerazione il periodo della Numerazione del tipo progetto (#TT03419/22) 

> - CO - revisione procedura di creazione riclassificazioni con dati di consolidamento, ottimizzazione tempi di esecuzione (#TT03252/22) 

> - FI - revisione menù a tendina di selezione del centro di costo nelle registrazioni contabili, se la dimensione di appartenenza prevede il vincolo conto/centro e nell’impostazione del piano dei conti c’è sia il centro che la categoria centro, allora si visualizza ora solo il centro impostato. Revisione del salvataggio per testare il vincolo conto/centro (#TT03386/22) 

> - MES - Il funzionamento del tasto “Completamento dati ordine” negli ordini di produzione, ora sostituisce i soli materiali non ancora scaricati e le fasi non ancora dichiarate (#TT01755/22) 

> - PR - revisione contabilizzazione distinte effetti, per mantenimento tipologia sbf/dopo incasso impostata nella distinta (in localizzazione italiana) (#TT03195/22) 

> - FI - revisione filtro di ricerca ‘Cdc mancanti’ in form “Verifiche dati per controlling” nel modulo cespiti (#TT03384/22) 

> - FI - Export chart of account for DocFinance (#TT00091/23) 

> - BI - Context panel- corretta anomalia in caso di più context panel sullo stesso oggetto 

### Patch 545.1-0068- 22/12/2022

> - SD - Le spese finali del DDT riportano l'IVA della dichiarazione di intento, anche se il DDT proviene da ordine (#TT03409/22) 

### Patch 545.1-0067- 15/12/2022 

> - MPS Capacità Centri di Lavoro- Nell’istogramma la barra verticale laterale dei tempi si sposta se viene effettuato un doppio click sulla barra di occupazione di una giornata. 

> - FI - errore in creazione INTRA Vendite, stringa troncata (#TT03311/22) 

> - SD - Risolto errore uscente al momento dello scarico fatture (#TT3309/22) 

> - SCS - Aggiunte le colonne di Fase, Sottofase e codice fase nella griglia di evasione degli ordini di conto lavoro (#TT02390/22)

> - FI - In creazione nuova ‘Dichiarazione iva periodica’ per gennaio, proposta del credito anno precedente ripreso da tabella dei versamenti iva (#TT00353/21) 

> - FI - revisione gestione stampa definitiva del libro giornale (#TT02008/22) 

> - PR - Campo conto non editabile nel Tipo conto finanziario (#TT03319/22) 

> - WM -  Ora la procedura di “Ricalcolo costo” prende correttamente in considerazione anche i movimenti con importo pari a zero (#TT03216/22) 

### Patch 545.1-0066- 07/12/2022 

> - CO - tasso di cambio e valori valutari nella chiusura dei conti economici e patrimoniali (#TT03263/22) 

> - CO - incrementato il tempo di attesa per la Ripresa costi di commessa del Controlling.

> - CO - comparazione riclassificazioni del controlling, revisione gestione dati rimanenze iniziali in caso di visualizzazione del dettaglio periodi.  

> - CO - revisione Calcolo costi di commessa nel controlling, per gestione periodicità vuota.

### Patch 545.1-0065- 30/11/2022 

> - FI - la stampa dei registri iva ora riporta i dati del ‘cedente/prestatore’ delle autofatture di vendita contabilizzate 

> - FI - Corretto comportamento anomalo del campo ‘Tipo Documento’ in registrazione contabile cespite e scheda cespite (#TT03084/22) 

> - SD - La dichiarazione di intento non viene riportata, nel file xml, in corrispondenza delle Spese, se esse prevedono un’aliquota diversa (#TT03213/22) 

> - MES -  Corretta, nelle segnalazioni di produzione, la proposta della causale di carico del prodotto finito nel caso in cui l’ultima fase produttiva e movimentabile non fosse l’ultima (#TT03189/22) 

> - SCS - Ora, se prensente, la commessa di produzione viene riportata anche nei movimenti di scarico dei materiali dei rientri di conto lavoro (#TT03110/22) 

### Patch 545.1-0064- 24/11/2022 

> - FI - revisione ordinamento righe all’interno del plafond (#TT03092/22) 

> - FI - revisione suddivisione cespiti per ubicazione e centri di costo (#TT01050/22) 

> - FI - corretto comportamento anomalo dei campi VP8 e VPN modificando i valori manualmente al salvataggio (#TT02144/22) 

> - WM - Nella Visualizzazione Giacenze, viene mantenuta la colonna "Qtà UM alt." se trascinata in griglia dall'Object navigator, con il salvataggio di un profilo (#TT02904/22) 

> - PM - Corretto il problema di aggiornamento della descrizione del wbs nella scheda attività del progetto, corretta la mancata corrispondenza della descrizione tra articolo e wbs nell'inserimento dell'articolo codificato (#TT02137/22) 

> - MES -  Corretto bug nel calcolo dei tempi delle fasi di lavorazione dopo aver cambiato la data nell’ordine di produzione e premuto il tasto ricalcola data inizio (#TT02849/22) 

> - FI - revisione controllo importo file Sdi con registrazione contabile, caso note di credito (#TT02914/22) 

> - SH - Cambiato messaggio di eliminazione nel piano dei conti (#TT03136/22) 

### Patch 545.1-0063- 11/11/2022 

> - SCM - Import listini fornitori- Eliminata la colonna non utilizzata nello schema- Codice produttore (#TT02932) 

> - SD - Import autofatture di vendita- Aggiunte le colonne conto e sottoconto del cedente (#TT02954) 

> - FI - Stampa Libri cespiti ammortizzabili- Aggiunta la colonna fornitore del cespite in caso di stampa completa (#TT2678) 

> - SD - Nel caso di Evasione DDT dalla Ricerca Ordini cliente, l’utente viene avvisato se il cliente è stato bloccato nel Lock manager (#TT02945/22) 

> - SD - Revisione creazione file Sdi fatture di vendita per documenti con sole righe note negli articoli ma valori nelle spese finali (#TT01056/22) 

> - MPS -  Ora è possibile schedulare anche articoli (con tipo approvvigionamento “Produzione”) privi di distinta, ma con un ciclo di produzione con almeno una fase (#TT02852/22) 

> - MPS - Corretto bug in schedulazione con raggruppamento degli ordini pianificati che non considerava correttamente la disponibilità (#TT03010/22) 

> - SD - Nella creazione ordini clienti da offerte, impostato il tipo di calcolo provvigionale di default dall’anagrafica agente (#TT02853/22) 

> - FI - revisione combo per dichiarazioni di intento in contabilità, visualizzazione per conti passivi (#TT03027/22) 

> - FI - revisione contabilizzazione liquidazione iva periodica per esclusione registri iva non da liquidare (#TT02911/22) 

> - FI - revisione ricalcolo partite in caso di creazione su data scadenza e non per soluzione di pagamento (#TT02916/22) 

> - CO - revisione messaggio sui caratteri utilizzati in codifica dei nodi dei modelli di riclassificazione (#TT02793/22) 

> - CO - revisione applicazione distribuzione periodi nella procedura di elaborazione periodi  

> - FI - revisione assegnazione note pagamento in compensazioni eseguite all’interno delle registrazioni contabili (#TT01924/22) 

> - FI - revisione gestione widget di selezione progetti in registrazioni contabili (#TT02941/22) 

> - SD - Risolto errore causato da uno sconto negativo con due decimali uscente nel Controllo della Fattura di vendita (#TT03063/22) 

### Patch 545.1-0062- 01/11/2022

> - CO - migliorate tempistiche in scritture di rettifica (#TT02544/22) 

> - SCM - Aggiungere la percentuale non deducibile nella fattura d'acquisto Versione RO 

### Patch 545.1-0061- 28/10/2022 

> - SD - Nello step Controllata della fatturazione elettronica, verifica della lunghezza della descrizione articolo per blocco se superiore ai 1000 caratteri disponibili (#TT02865/22) 

> - MPS  Corretto bug in schedulazione generale nel caso in cui venissero schedulati articoli di tipo fittizio (#TT02733/22)

### Patch 545.1-0060- 26/10/2022 

> - MPS -  Corretto bug nel rilascio automatico ordini pianificati di conto lavoro da schedulazione (#TT01494/21) 

> - SD - Risolta eccezione uscente in Analisi disponibilità considerando tutte le disponibilità (#TT02771/22) 

> - MES - Ordini di produzione- Prelievi/Resi Aggiuntivi- Bug fix per disponibilita lotti per ubicazione (2068/22) 

> - QY - Risolto bug filtro "Ancora da rilevare" nel Controllo articoli (#TT00305/22) 

> - Add calculated property NomenclatureHistoryOnDate On FSPosting and FSPostingLedger (#TT02845/22) 

> - SD - E’ possibile usare la funzione Aggiorna, nella procedura Duplica e manutenzione listini di vendita, per più righe articolo (#TT02794/22) 

> - SCM - Se, nei Riepiloghi delle fatture di acquisto, viene modificato il campo Posizione partita della griglia Riepilogo scadenze, la modifica viene mantenuta e viene inserito il flag Modifica manuale (#TT02689/22)

> - WM - L’aggiunta di campi dal Form navigator nell’Anagrafica lotti non comporta problemi nelle altre griglie (#TT01388/22) 

> - CO - nella stampa del consolidato di progetto nel controlling, inseriti filtri per anno e periodo (#TT02820/22) 

> - MPS -  Corretto bug nell’aggionamento delle date degli ordini di produzione dalla maschera "Capacità centri di lavoro" (#TT00119/22)  

> - PR - Lettura Anticipi fatture nel cashflow  (#TT02679/22) 

> - SD - Risolta eccezione uscente nell'Evasione da commessa della testata Ordini cliente (#TT02900/22) 

> - FI - revisione stampa “Valorizzazione riclassificazione” nel caso di confronti tra due riclassificati 

### Patch 545.1-0059- 17/10/2022

> - SD - In fatturazione elettronica, lo step 'Controllata' ora verifica la presenza del numero formattato in fattura (#TT02579/22) 

> - SD - Gestione riferimenti dich.intento su file Sdi per spese finali (#TT02735/22) 

> - CO - la contabilizzazione rimanenze ora valorizza il centro aziendale dal conto contabile e, se questo non è presente, dal centro inserito in anagrafica articolo  

> - CO - revisione gestione mensilizzazione registrazioni manuali nell’elaborazione periodi del controlling (#TT02750/22) 

> - PR - Lettura Anticipi fatture nel cashflow (#TT02679/22) 

> - FI - propagate SafTNondeductiblePercentage (#TT02756/22)

### Patch 545.1-0058- 07/10/2022 

> - SD - La Marca inserita nei listini di vendita viene correttamente riportata nei documenti (#TT02614/22) 

> - WM -  corretta codifica serial number che non teneva in considerazione la categoria merceologica (#TT02620/22) 

> - SD - Correzione dell'errore uscente in caso di Selezione totale degli ordini nella maschera di Evasione ordini da fattura (#TT02668/22) 

> - SCM - La creazione di una RDO per un solo articolo di una RDA, riporta correttamente nei riepiloghi il totale solo di quell’articolo (#TT02612/22) 

> - WM -  Utilizzando la “Modifica massiva” presente nel filtro articoli è possibile anche modifica i parametri presenti nel tab Lotti e SN, ma solo degli articoli che non sono ancora stati movimentati (#TT02037/22) 

> - SH - revisione fast start per nuove impostazioni autofatture 

> - WM - Sotto scorta- Gestione dati minimi di Scorta minima e Punto di riordino (#TT01724/22) 

> - FI - Revisione creazione fattura da partite d’anticipo per arrotondamenti pagamenti (#TT02697/22) 

> - MPS -  La procedura di schedulazione al più presto e al più tardi, se utilizzate con il raggruppamento degli ordini pianificati, considera correttamente il lotto economico e i suoi multipli negli approvvigionamenti dei livelli figlio (#TT00435/22) 

> - PR - Correzione calcolo degli importi scadenze ordini clienti nella procedura di Creazione automatica Cash flow (#TT02635/22) 

> - PR - block flag 'Contabilizzato' on 'Distinte effetti' (#TT02675/22) 

> - BI - > - SD - E' possibile filtrare per Articolo la stampa Bilancino di Fatturazione (#TT01837/22) 

> - SCM - purchase invoice accounting- fixed for cost center Ro version (#TT02581/22) 

> - WM -  Corretto bug nella generazione del stampa LIFO presente nell’inventario a quantità valorizzato (#TT01933/21) 

### Patch 545.1-0057- 27/09/2022 

> - CO - Errore scritture di rettifica su chiusure infrannuali (#TT02441/22) 

> - FI - Fattura acquisto cespiti (#TT01640/22) 

> - PR - Cash Flow- ordine fornitore con riga sconto (#TT02391/22) 

> - CO - Anomalia calcolo bilanci riclassificati (#TT02427/22) 

> - FI - nella stampa schede cespiti, visualizzazione delle quote deducibili/indeducibili dell’ammortamento 

> - MPS -  Corretto bug che cancellava i parametri fabbisogni materiali al salvataggio dei parametri MPS (#TT02399/22) 

> - SD - Esclusione del blocco per il codice articolo cliente quando in anagrafica articolo è stato inserito come codice uno spazio(#TT02136/22) 

> - MPS - Nella form del rilascio degli ordini pianificati è ora possibile utilizzare l'object navigator (#TT02551/22) 

> - BI - Fix  Risolto bug per variabile ids (#TT02527/22) 

> - BI - Cruscotti- Risolto bug che non permetteva di selezionare tutti i cubotti del cruscotto (#TT02493/22) 

> - SCS - Risolto errore nell’inserimento articoli negli ordini di conto lavoro (#TT02511/22)

### Patch 545.1-0056- 15/09/2022 

> - SD - La cancellazione degli Sconti finali articoli in un Ordine cliente derivante da Offerta, viene considerata nei riepiloghi (#TT02449/22) 

> - SD -  E’ possibile selezionare tutte le Fatture di vendita dalla maschera di ricerca (#TT02443/22) 

> - SD - Nella duplica fatture di vendita, ora si riporta anche la categoria agente se presente (#TT02409/22) 

> - SCS - Risolto errore di visualizzazione nell'inserimento di serial number nei DDT di conto lavoro (#TT02424/22) 

> - WM - Gestione distinta base- bug fix per modificare la distinta con articoli gestiti con numeri grandi di varianti (#TT01432/22) 

> - FI - Liquidazione iva annuale (#TT00704/22) 

> - SCM - inserita possibilità di modificare la quantità delle righe provenienti dalla bolla di consegna dell'acquisto caricata se il parametro dei lotti obbligatori non è attivo.

> - CO - per il controlling, revisione ripresa dei materiali usati negli interventi (#TT02492/22) 

> - SD - nella contabilizzazione fatture di vendita, revisione inserimento partita a zero per gestione commissioni agenti su pagato (#TT02464/22) 

### Patch 545.1-0054- 08/09/2022  

> - SCM - Nei Dettagli del tab Operazioni della procedura di Creazione Automatica Ordini, viene correttamente riportato il codice articolo (#TT02323/22) 

> - SCM - Corretto errore uscente al momento del collegamento delle fatture di acquisto con i documenti SDI (#TT02420/22) 

> - FI - Corretto bug che valorizzava gli interessi trimestrali nella comunicazione liquidazioni iva anche in presenza di risultato a credito (#TT01269/22) 

> - SD - nella fatturazione elettronica italiana, nello step 'Controllata' è stato inserito un nuovo controllo sulla presenza di cod iso e partita iva del 'cedente prestatore' delle autofatture (sia nell'anagrafica principale che nel suo eventuale indirizzo alternativo di tipo 'rappresentante fiscale') (#TT02411/22) 

> - CO - nella contabilizzazione rimanenze del controlling, revisione assegnazione conti in ambienti multisocietari  

> - MPS - corretto bug nella procedura di rilascio ordini che creava gli ordini di conto lavoro in un’altra società (#TT02419/22) 

> - WM - Anagrafica Articoli- bug fix per visualizzare codice nazione (#TT02395/22) 

> - MPS - Corretto bug che cancellava i parametri fabbisogni materiali al salvataggio dei parametri MPS (#TT02399/22)

> - SCM - L'utente non potrà più modificare la quantità se è collegata a un bollettino di consegna carico (#TT02436/22) 

### Patch 545.1-0053- 01/09/2022  

> - PR - Corretta procedura di Creazione automatica Cash flow nel caso di ordini fornitore con più righe pagamento e diverse WBS articolo associate (#TT01966/22) 

> - FI - Il campo Sezione nella tab Intrastat della registrazione contabile è stato reso editabile (#TT01360/22) 

> - FI - Messaggio di rifiuto per il rollback delle scadenze di regolarizzazione della valuta utilizzate nell'importazione di un foglio di banca (#TT02167/22) 

> - MPS - Costificazione commesse di produzione- Risoluzione di alcuni bugs.  

Sono state corrette le seguenti anomalie- 

>> - il costo effettivo del materiale veniva calcolato non considerando il costo di "Commessa di produzione" se richiesto dal relativo parametro di calcolo; 

>> - la somma del costo effettivo, visualizzato nel dettaglio dei "Materiali utilizzati", non veniva ricalcolato correttamente nella sessione sottostante della sintesi dei costi del documento selezionato; 

>> - è stato aumentato il valore di tempo di time-out per dare modo di poter elaborare strutture complesse di Commessa (#TT02159/22) 

> - MES - Ordini di produzione- Mancato ricalcolo occupazione da generazione Lotti Ordine di produzione. E' stato corretto il ricalcolo dell'occupazione dei Centri di Lavoro durante la suddivisione, in più lotti, di un Ordine di produzione (#TT00719/21) 

> - SD - Quando l'ultima wbs di livello inferiore di un nodo di progetto viene cancellata, l'imponibile del nodo wbs superiore viene aggiornato immediatamente 

> - MPS - Rilascio ordini di produzione- Qualità su fasi. Al rilascio degli Ordini pianificati di produzione viene ora copiato anche il riferimento del Piano di controllo associato alla fase di lavorazione (#TT00674/22) 

> - MPS - MES -  corretta la stored procedure di rilascio ordini pianificati che riporta gli extradata direttamente dagli ordini pianificati ai relativi ordini di produzione o conto lavoro in maniera automatica (#TT01889/17) 

> - SD - Stampe Progetti- Sistemazione report ricerca progetti (#TT01668/22) 

> - SD - Risoluzione di errori generici nel form Planner, Ottimizzazione dell'allineamento dei dati negli interventi pianificati in seguito a modifiche eseguite in planner- (#Ticket- #TT01163/22) 

> - CO - revisione cancellazione nodo del modello di riclassificazione (#TT01905/22) 

> - MPS -  Corretto bug nel Gantt che non permetteva di applicare le modifiche dopo aver variato la data di una fase (#TT01853/22) 

> - SD - La duplica di una fattura non riporta i Riferimenti in testata della fattura di origine (#TT02189/22) 

> - FI - Corretto bug che non gestiva correttamente l’iva detraibile indetraibile su conti diversi quando contabilizzata in automatico dalla fattura xml ricevuta (#TT01327/22) 

> - SCM - Ordini di acquisto- Non evasione delle Commesse di produzione con tipo di approvvigionamento di acquisto. Corretta la procedura che non evadeva la Commessa di produzione con tipo di approvvigionamento di acquisto all'evasione dell'Ordine fornitore o della riga associata alla commessa stessa. 

> - SD - Se modifico i totali di un Intervento aprendo quest’ultimo dalla procedura di Valorizzazione interventi, la griglia di filtro si aggiorna (#TT02173/22) 

> - SD - Miglioramento dell'aggiornamento dei dati contenuti nel navigatore risorse del form progetti in seguito a modifiche eseguite nel tab risorse (#TT01428/22) 

> - SD - Non è possibile cambiare il Tipo riga in un DDT di vendita già scaricato (#TT02208/22) 

> - SD - Correzione dei Riepiloghi nel caso di Esplosione distinta base per un articolo kit in Ordine cliente (#TT02219/22) 

> - SCS - Registrazione movimenti - Nella registrazione movimento di carico dell'articolo rientrato non veniva riportato il riferimento della Commessa di produzione collegata. 

> - SD - Revisione gestione pagamento a zero per commissioni su pagamento avvenuto durante la contabilizzazione fatture di vendita (#TT02247/22) 

> - MES - Il pulsante Nuova segnalazione viene abilitato dopo che tutte le Segnalazioni di produzione sono state caricate (#TT01899/22) 

> - MES -  Nel caso in cui la prima fase di un ciclo sia esterna e l’ultima interna, la procedura propone i materiali da consumare correttamente sia nelle segnalazioni che nei documenti di conto lavoro (#TT01523/22) 

> - Fix proposta divisa alla creazione di un ordine fornitore da una richiesta di acquisto.

> - SCS -  Negli ordini di conto lavoro, la procedura “Dati materiali proposti” esplode correttamente i materiali di distinte con versioni diverse da quella di default e con articoli fittizi al loro interno (#TT01884/22) 

> - MES - Gestione segnalazioni- Visualizzazione delle Unità di misura- Nell'elenco dei Materiali, alla sinistra delle Quantità prelevate e consumate, sono state aggiunte le relative Unità di misura principale e alternativa del materiale (#TT02269/22) 

> - Aumentato il campo nome file nelle tabelle di fatturazione elettronica 

> - MPS - Ricalcolo Livello Minimo- Sono stati ottimizzati i tempi di esecuzione del calcolo sostituendo la procedura in algoritmo (#TT00627/21) 

> - MPS -  corretto bug nella procedura di rilascio ordini pianificati, ora l’unità di misura nelle righe dei materiali viene inserita correttamente nel tab materiali degli ordini di conto lavoro (#TT02325/22) 

> - SCM - Aggiunto il filtro per lo Stato articolo nella maschera di Dettaglio righe Ordine fornitore (#TT01404/22) 

> - E’ stata aggiunta la possibilità di gestire i tipi riga note nelle importazioni excel 

> - FI - Aggiunto il Profile Management nel tab Dettaglio dei Cespiti (#TT02345/22) 

> - SD - Ottimizzata procedura di Duplica e Manutenzione Listini di Vendita per listini molto corposi (#TT02042/22) 

> - FI - stampa bilancio- Corretto il comportamento della combo box Escludi causale nell0esecuzione del report Bilancio di esercizio perchè la selezione rimaneva in memoria anche cancellando il dato dal campo (#TT01819/22) 

### Patch 545.1-0052- 28/07/2022  

> - SD - Correzione delle scadenze nelle fatture di vendita se cadono nel mese escluso in anagrafica cliente (#TT01638/22) 

> - SD - Il campo DescriptionDiscount trascinato dall’Object navigator negli Ordini cliente si popola anche se l’ordine proviene dalla Conversione offerta (#TT01131/22) 

> - CO - nella ripresa ore di progetto, gestione del tipo tempo (come tempo uomo) (#TT02143/22) 

> - MPS - Commesse di produzione- Costificazione- Errata quantità effettiva consumo materiali. E' stata corretta l'anomalia che proponeva un'errata quantità effettiva per il consumo dei materiali e relativo costo effettivo consumo (#TT03246/21) 

> - FI - l’apertura di una registrazione contabile va ora a verificare se è collegata ad un file autofatture in vendita inviato allo Sdi, per bloccare i campi non più modificabili e consentire il salvataggio di modifiche agli altri (#TT02122/22) 

> - SD - SalesInvoice- correggere il filtro dello stato della fattura Elettronica (#TT02085/22) 

> - SD - il campo FTAR_UnitNetPrice si valorizza anche nella creazione Fattura di vendita da DDT (#TT02145/22) 

> - MPS - bug fix per rilascio ordini pianificati di acquisto con raggruppamento, corretta quantità residua articolo nella richiesta di acquisto (#TT02154/22) 

> - Test della corrispondenza tra partita iva del cedente prestatore e partita iva del soggetto intestatario del documento al quale il file viene collegato 

> - SH - Add non-deductible account and non-deductible percentage in accounts interface (#TT02147/22) 

> - SD - I riepiloghi totali nella maschera di Ricerca fatture si aggiornano in base ai filtri applicati (#TT01825/22) 

### Patch 545.1-0051- 22/07/2022
  
> - CO - revisione calcolo ammortamenti del controlling per gestione valori patrimoniali esistenti nel singolo mese (#TT02726/21) 

> - SD - Validation rules for e-Invoice Romania for the Controlled status (#TT01987/22) 

> - Aggiunta gestione riga note per fatture San Marino 

> - SD - Comunicazione autofatture SDI  (#TT02082/22) 

> - Aggiornato schema importazione contatti CRM da excel 

> - FI - intrastat- revisione ripartizione spese finali in intrastat, revisione assegnazione sezione bis/ter che viene ora effettuata sulla base della data di riferimento inserita in testata della fattura di vendita/acquisto e della periodicità intrastat inserita nei parametri di contabilità generale (#TT02074/22) 

> - WM - Bug fixed in esplosione distinta base. L'esplosione di una distinta base di grandi dimensioni occupa, in maniera molto inferiore rispetto a prima, la cpu del server (#TT01432/22) 

> - SCM - I DDT di acquisto duplicati non riportano il Riferimento ordine del DDT di origine (#TT02057/22)

### Patch 545.1-0050- 13/07/2022  

> - Risolvere il problema durante la generazione dell'allegato fattura di vendita RO (#TT01613/22) 

> - Modifica per prevenire un errore che veniva generato quando il file xml della fattura di acquisto 

> - WM - La causale di contropartita utilizzata per lo scarico Picking viene presa dalla riga picking, se assente viene presa dai Parametri picking o dai parametri della procedura di Scarico; se ancora assente lo scarico non viene effettuato (#TT01143/21) 

> - SD - Traduzione etichetta in lingua italiana, miglioramento della navigabilità del calendario e mantenimento puntamento al giorno selezionato al cambio periodo (da giornaliero a settimanale, a mensile) (#TT00932/22) 

> - SCM - Se la RDA ha più righe con lo stesso articolo, la procedura di Creazione automatica ordini con il parametro Raggruppa per articolo crea una singola riga con la somma delle quantità dell'articolo (#TT01310/22) 

> - SCM - Inseriti i Tipi allegato nella tabella SDI_DocumentType per IT, RO e SM (#TT01862/22) 

> - SD - Nella creazione file Sdi fatture di vendita, gestione della sezione del 'rappresentante fiscale' del cedente/prestatore (es. caso di autofatture TD19) La sezione viene valorizzata se nell'anagrafica del cedente/prestatore si definisce un indirizzo alternativo di tipo 'Rappresentante fiscale' (#TT01915/22) 

> - FI - Risolta eccezione uscente nello Scarica tassi di cambio (#TT01880/22) 

> - PR - revisione creazione distinta di presentazione effetti per compilazione conto bancario senza tipo distinta impostato (#TT01932/22) 

> - PM - Risolta cancellazione interventi, nel caso di interventi senza righe di servizi o materiali, non veniva effettuata (#TT01789/22) 

> - SCS - Ordini di conto lavoro- Se l’articolo da produrre ha un tipo di approvvigionamento di conto lavoro e viene rettificata la Data di previsto rientro, alla conferma della richiesta se variare anche le Date di impegno dei materiali, la procedura ricalcola la data impegno detraendo, dalla Data di previsto rientro, il Tempo totale di approvvigionamento per il terzista indicato nell’anagrafica dell’articolo da produrre (#TT01793/22) 

> - SH - nel piano dei conti, revisione gestione pulsante nuovo sottoconto quando il precedente non è ancora salvato e manca della descrizione (#TT01936/22) 

> - MPS - Cicli di lavoro- Gestione cicli e fasi di lavoro- Il "Tempo macchina" e il "Tempo operaio" venivano convertiti in modo errato rispetto alla relativa "UM tempi" 
(#TT02534/20) 

> - FI - nelle scritture di assestamento, se l’integrazione da effettuare è tutta di competenza dell’anno precedente allora ora si propone il conto delle fatture da ricevere dal fornitore intestatario della registrazione, oppure dai conti fatture da emettere/ricevere dei parametri di contabilità se è cliente (o se manca il fornitore in testata) (#TT02561/19) 

> - CO - la ripresa dati da produzione per il controlling ora elimina i dati precedenti senza filtrare per tipo costo 

> - PR - Pagamenti Fornitori- rollback contabilizzazione (#TT01664/22) 

> - FI - rollback calcolo provvigioni- crash on ripristina if no row is in grid (#TT01940/22) 

> - FI - nell’inserimento manuale di un cespite, abilitazione del pulsante nuova operazione patrimoniale se non è stata impostata una categoria cespite (#TT01935/22) 

> - FI - Cambiamento in Parametri di Contabilità generale- visualizzata periodicità Intrastat (#TT01580/22) 

> - CO - revisione duplica movimenti e revisione modifica cambio anno in griglia (#TT01943/22) 

> - CRM - Corretto l’errore uscente con la Modifica Nota in un Contatto CRM (#TT02010/22) 

> - MES - CRP- Capacità Centri di Lavoro- Risoluzioni di alcune anomalie e modifiche al layout- 

1. Alcune colonne degli elenchi "Filtro Centri di Lavoro" e "Fasi di lavoro" non sono state localizzate in lingua. 
2. Modificando "Data inizio" e "Data fine" il periodo visualizzato nell'istogramma si aggiorna automaticamente. 
3. Nell'elenco delle "Fasi di lavoro" sono state rinominate le colonne- 
     - "Attivi" in "Fase Prod."; 
     - "Movimentabile" in "Fase Mov.". 
4. Sempre nell'elenco delle "Fasi di lavoro" sono state riposizionate le colonne- 
     - "Quantità", "Qtà impegno", "Quantità fase", "Fase Prod." e "Fase Mov." alla destra della colonna "Sottofase" nella sessione delle colonne scrollabili centrale; 
     - "Centro di lavoro", "Data inizio fase", "Data fine fase" e "Data merce pronta" alla sinistra della colonna "UM tempi" nella sessione delle colonne non scrollabili di destra. 

(#TT02376/20) 

### Patch 545.1-0049- 31/06/2022  

> - SH - Ottimizzata la Visualizzazione posizione contatti sulla mappa, nella Ricerca contatti (#TT01643/22) 

> - SCM - Corretto errore che valorizzava le righe ddt in caso di sconto nell'ultima riga (#TT01398/22) 

> - SCS - E' possibile ricercare i Rientri di conto lavoro inserendo il filtro Materiali impiegati (#TT01375/22) 

> - Soluzione Ordini Cliente - Generazione automatica Commesse di produzione- Tipo approvvigionamento articolo errato durante la generazione automatica delle Commesse di produzione (#TT01610/22) 

> - FI - nelle registrazioni contabili, il menù a tendina dei centri aziendali ora filtra per la dimensione della riga stessa (#TT01625/22) 

> - SD - Inserito, nella ricerca Fatture di vendita, il segno negativo per le Note di credito anche nella colonna Imponibile (#TT01661/22) 

> - CO - l’elaborazione periodi del controlling, quando è selezionata una chiusura infrannuale, ora riporta nell’elaborazione i mesi di competenza della chiusura anche quando valorizza le registrazioni manuali di area (#TT02723/21) 

> - SH - Gestione documentale- In un elenco di gestione "Documenti allegati" associato ad una riga documento (es. Ordini, DDT, Fatture, Rientri da conto lavoro, Reclami, Non conformità, ...), ora è possibile visualizzare in anteprima il "Documento allegato" anche se il documento di origine viene aperto in sola visualizzazione. 

> - SH - Creazione nuovo destinatario / destinazione- All’inserimento di un nuovo destinatario / destinazione non viene più proposto il flag ‘contabile’ di default (#TT01689/22) 

> - SD - Se si utilizza la procedura di Valorizzazione interventi per un Intervento aperto, esce il messaggio di avviso (#TT01785/22) 

> - CO - Corretto il report di stampa “Valorizzazione Assiemi”, ora riporta correttamente i costi relativi alle lavorazioni esterne sulle singole righe e non solo sul totale (#TT01675/22) 

> - SCM - Nel Dettaglio righe ordini, il filtro ExtraData riporta e popola correttamente la colonna aggiuntiva (#TT01356/22) 

> - MPS - Nel filtro dei cicli di lavoro è possibile aprire l’expander senza la generazione di errori (#TT01443/22) 

> - MPS - Negli ordini pianificati di conto lavoro il lead time per il ricalcolo della data inizio viene preso dal fornitore preferenziale indicato nel tab “fornitori preferenziali” dell’anagrafica articolo, se non presente viene preso dai parametri mrp, ed se ancora non presente viene utilizzato il valore nel campo “lead time analisi” del tab approvvigionamento dell’anagrafica articoli (#TT01792/22) 

> - MES - Errore di salvataggio nei parametri mrp (#Tipo RDA e flag Pianificazione) Inoltre, corretto anche il problema relativo alla registrazione della segnalazione di produzione nel caso in cui un materiale fosse gestito a lotti (#TT01468/22) 

### Patch 545.1-0048- 31/06/2022  

> - SD - I Diagrammi di Evasione riportano correttamente i documenti anche se contengono articoli non codificati (#TT01486/22) 

> - WM - Anagrafica Articoli- rilascio campo nazione in testata articoli anche per verticalizzazioni pharma/foundry/fashion (1586/22) 

> - FI - R.N. Stampando la liquidazione periodica IVA di dicembre, se risulta un credito, il valore viene ora riportato nella form Dichiarazione IVA periodica del mese corrispondente nel campo relativo, in questo modo anche la ristampa della liquidazione contiene il riporto del credito precedente (#TT00518/22)

> - SD - Correggere il calcolo dell'IVA in fase di creazione della fattura dal picking per le fatture con prezzo comprensivo di IVA (#TT01688/22)

> - WM - Nella Visualizzazione giacenze la Scorta massima, se trascinata dall’Object navigator, si presenta come numero intero (#TT01685/22) 

### Patch 545.1-0047- 10/06/2022  

> - Revisione creazione fatture acquisto da file Sdi per gestione date 

> - SD - E’ possibile ricercare le fatture di vendita filtrando per lo Stato della fattura elettronica (#TT01549/22) 

> - FI - nella compensazione veloce, revisione gestione messaggio di selezione multipla in entrambe le griglie (#TT01497/22) 

> - FI - wrong exchange decimal number in leasing details (#TT01556/22) 

> - Soluzione Ordini Cliente - Generazione automatica Commesse di produzione- Tipo approvvigionamento articolo errato durante la generazione automatica delle Commesse di produzione (#TT01554/22) 

> - SD - sales accounting- nella contabilizzazione di una fattura in divisa differente dalla divisa società, se per questa è già stato creato il file Sdi allora il cambio resta quello utilizzato in testata fattura (#TT01391/22) 

> - SD - nel file Sdi fatture di vendita in uscita, se la società attiva ha natura giuridica 'Gruppo iva' allora il file riporta sia la partita iva che il codice fiscale del cedente prestatore. Stessa gestione in caso di autofattura, dove si va a verificare la natura giuridica dell'anagrafica del cedente prestatore impostato in testata fattura (#TT01452/22) 

> - SD - L’evasione di un ordine in una fattura dalla ricerca Ordini di vendita avvisa l’eventuale presenza di fatture di acconto per il cliente (#TT01548/22) 

> - WM - Quando viene creata una registrazione di magazzino con un prodotto finito, che al suo interno ha più semilavorati fittizi che comprendono lo stesso componente (gestito a lotti), allora il componente viene scaricato controllando la  giacenza residua per lotto (#TT01411/22) 

> - SCM - Correzione della visualizzazione del widget dei SN nei DDT di acquisto creati da ordine (#TT01513/22) 

> - SD - Gli Extra Data propagati nelle Offerte si trasferiscono solo nei documenti che ne prevedono l’Attivazione (#TT01479/22) 

> - FI - revisione associazione file Sdi a compensi percipienti (#TT01558/22) 

> - FI - revisione gestione pagamenti in eccesso con arrotondamento negativo (#TT03164/21) 

> - SD - Correction for the sales invoice search filter (#TT01589/22) 

> - CO - nella ripresa ore dipendenti per il controlling, i centri destinatari delle ore vengono ora anche valorizzati come centro di origine delle ore ricevute stesse, in modo da avere le quantità per il calcolo tariffe del centro 

> - SDI -Documenti di acquisto in entrata- La creazione della fattura di acquisto da file SDI considera le righe senza quantità e prezzo come righe di tipo nota, se la quantità non c'è o è 0 ma c'è il prezzo la quantità viene messa uguale a 1. Nella griglia per l'importazione è stato aggiunto il tipo fatturato acquisti che può essere inserito dall'utente per tutte le righe, nella griglia di importazione è possibile inserire il tipo riga per ogni riga e anche la quantità, unità misura, prezzo e data competenza da a. Se c'è la dichiarazione di intento nel file XML viene controllata ed inserita in fattura (#TT01288/22) 

> - SD - Se viene cambiato l’articolo nelle righe di un’Offerta, gli Extra Data si aggiornano correttamente proponendo solo quelli per il nuovo articolo inserito (#TT01480/22) 

> - FI - revisione cancellazione righe dichiarazioni di intento (#TT01587/22) 

> - SCM - corretto il calcolo del numero riga ordine fornitore in caso di creazione ordine fornitore da richiesta di acquisto (#TT00988/22) 

> - MPS - Cicli di lavoro- Nel filtro dei cicli di lavoro, visualizzando il dettaglio di una riga, veniva visualizzata una exception. L’anomalia è stata risolta (#TT01443/22) 

### Patch 545.1-0046- 31/05/2022  

> - CRM - corretto l'arresto anomalo durante l'inserimento delle note di contatto (#TT01484/22) 

> - SH - Corretto errore in anagrafica sugli indirizzi alternativi (#TT01466/22) 

> - FI - RoDeclaration- Companies Name esteso a 200 caratteri.

### Patch 545.1-0045- 26/05/2022  

> - FI - nella creazione registrazioni contabili da file Sdi, gestione del caso importo scadenza negativo (#TT03068/21) 

> - FI - nella creazione registrazioni da file Sdi, nel caso in cui nel file non sia indicato l’iban, questo viene assegnato dalla prima riga con lo stesso tipo pagamento dell’anagrafica fornitore (#TT01064/22) 

> - SCM - La procedura di Evasione da ordini crea un DDT di acquisto senza il flag Controllato. Il documento viene aperto nella testata (#TT01342/22) 

> - SCM - Possibilità di gestire il Mask dell'Arrotondamento nella procedura di Duplica e Manutenzione Listini di acquisto (#TT01666/22) 

> - SD - Nella Ricerca fatture di vendita le Note accredito vengono visualizzate con segno negativo (#TT01291/22) 

> - PR - nella contabilizzazione dei movimenti di riconciliazione bancaria, al salvataggio della registrazione creata viene impostato automaticamente il flag di movimento riconciliato (#TT02724/20) 

> - FI - it's not possible to delete a row from section 'sexies' of intrastat1 (#TT01409/22) 

> - SD - E’ possibile Ricalcolare le provvigioni Agenti nei documenti di vendita provenienti da evasione (#TT01384/22) 

> - SH - Revisione gestione combo di selezione della dichiarazione di intento (#TT01426/22) 

> - FI - revisione gestione campo anno nei dettagli della CU2022 (#TT01339/22) 

> - SH - modifica alla stored di fast start per anticipare l’anno iniziale del numeratore partite 

> - QY - La chiusura e la riapertura degli Strumenti di Misura dopo la creazione di una nuova riga mantiene il valore inserito nel campo Modello (#TT01402/22) 

> - SCM - Gli Extra Data semplici riportano correttamente il Valore, la Descrizione e le Note dall’Anagrafica articolo all’Ordine fornitore, anche se esso viene creato da Richiesta d’acquisto (#TT01347/22) 

> - SCM - Le righe di un Ordine fornitore duplicato hanno Stato evasione 0 \= Not executed (#TT01236/22) 

> - FI - la registrazione automatica di giro iva in sospensione verifica se c’è iva ancora da stornare e chiude solo fino all’importo residuo (#TT00849/20) 

> - CO - translate 2 labels in "crea chiusure infrannuale" form (#TT01450/22) 

> - WM - Nel caso in cui si stia scaricando un articolo fittizio con distinta base e che abbia come figlio un articolo gestito a lotti/Serial number, adesso nel movimento di magazzino generato dal DDT viene assegnato il lotto e il serial number ai componenti (#TT01233/22) 

> - CO - Contabilizzazione rimanenze del controlling, esclusione delle righe di impostazione centri nel piano dei conti che hanno solo la dimensione impostata 

### Patch 545.1-0044- 19/05/2022 

> - SD - Nella maschera di Evasione ordine da Fattura di vendita, l’ordinamento delle righe articolo è uguale all’ordinamento delle righe nell’Ordine (#TT01229/22) 

> - FI - nella creazione registrazioni contabili di file Sdi, valorizzazione automatica del link alla dichiarazione di intento inserita dal fornitore negli ‘altri dati gestionali’ come richiesto dall’agenzia delle entrate (\<TipoDato\>INTENTO\</TipoDato\>\<RiferimentoTesto\>00000000000000000-000000\</RiferimentoTesto\>) Il campo di link è attivo e visibile in griglia iva delle registrazioni contabili per le aliquote che hanno il flag plafond in tabella. Al salvataggio della registrazione viene effettuato un controllo (non bloccante) del superamento dell’importo della dichiarazione selezionata- il test viene effettuato unicamente sui dati delle registrazioni contabili, non rilevano documenti in elaborazione nel ciclo documentale attivo/passivo (che prevedono già il test nel ciclo documentale stesso) Non sono previste compilazioni automatiche su registrazioni già salvate nel sistema. 

> - MES - Nel caso in cui la prima fase di un ciclo di lavoro sia esterna (quindi si intende conto lavoro di fase), il semilavorato nel magazzino (es. WIP) caricato dal rientro di conto lavoro viene scaricato con la successiva fase del ciclo (#TT01100/22) 

> - SD - I tipi fattura di vendita che non hanno il flag Immediata non vengono considerati nello Scarico automatico (#TT01302/22) 

> - FI - il rollback della contabilizzazione ammortamenti su singola registrazione viene cancellata per tutti i cespiti presenti al suo interno (#TT01736/21) 

> - PR - impostato il numero completo del documento nella maturità creata in occasione della contabilità in sospeso (#TT00513/22) 

> - CO - nel calcolo dei conguagli, esclusione del centro da riassegnare dal conteggio delle proporzioni di conguaglio (#TT01259/22) 

> - MPS - Implementata la definizione MPS per quanto riguarda la creazione delle commesse da previsioni di vendita. Se nei parametri della definizione MPS viene abilitata la possibilità di generare le commesse dalle previsioni di vendita, insieme all’opzione “Mensile”, che abilita il campo accanto dove è possibile inserire un giorno (es. 15 ), allora la procedura crea una commessa con data nello stesso giorno (15) ovviamente tenendo presente il calendario e quindi nel caso prenderà il primo giorno lavorativo precedente al 15. Inoltre, se viene flaggato anche “Genera commessa nel mese precedente”, la procedura crea una commessa con data nello stesso giorno (15) ma del mese precedente. Invece, selezionando l’opzione “Reali”, la procedura crea una commessa con la data effettiva indicata nella previsione tenendo conto del calendario. Se invece, viene anche abilitato il flag “Genera commessa nel mese precedente”, la procedura crea la commessa con la data effettiva indicata nella previsione però anticipata di un mese tenendo sempre conto del calendario (#TT00770/22) 

> - SD - Aggiunta stampa richieste d’intervento (#TT01232/22) 

> - SD - La creazione di file Sdi su fatture di vendita in divisa diversa dall'euro prevedono ora la conversione all'euro dei dati secondo il cambio inserito in testata fattura, arrotondando gli importi in modo da garantire l'eguaglianza dei dati euro con la registrazione contabile che sarà eseguita sul documento. La sezione delle scadenze resta nella valuta originaria, viene annotato nel campo del codice pagamento la divisa di riferimento dell'importo (#TT01036/22) 

> - SCM - Alla riapertura di un Ordine fornitore sono visibili le colonne Articolo fornitore e Descrizione articolo fornitore, se inserite (#TT01273/22) 

> - CO - corretto bug che non consentiva di eseguire correttamente una cancellazione di chiusure dei conti infrannuali ( #TT01209/22) 

> - FI - corretto bug che non valorizzava correttamente il flag “Escludi da causale automatica” quando veiva registrata automaticamente una fattura ricevuta da SDI (#TT00354/22) 

> - FI - Correzione del pulsante Nuovo cliccato più volte, correzione dell'eliminazione dell'Account (#TT01368/22) 

> - FI - Revisione arrotondamento nel calcolo dell’ imposta indetraibile su registrazione acquisto cespite (#TT00669/22) 

### Patch 545.1-0043- 10/05/2022 

> - Adeguato file XML alla fatturazione di San Marino per la parte degli acquisti 

> - SCM - Attivazione del parametro Carico/Scarico automatico nei DDT e nelle fatture di acquisto- se flaggato, viene generata la registrazione di magazzino dopo il controllo del documento (#TT00760/22)

> - SD - E' possibile inserire sconti minori di -100 (#TT01206/22) 

> - FI - revisione del calcolo del cash flow per esclusione bolle acquisto e vendita con flag forzatamente valorizzate ed esclusione ordini di conto lavoro forzatamente evasi 

> - SD - Cancellate le colonne relative alle dimensioni nella maschera dei Listini di Vendita (#TT01205/22) 

> - WM - Bug-fix- in fase di creazione UDC, la riga UDC viene associata alla riga ordine cliente con la data di consegna più vicina, non ancora evasa completamente (1240/22) 

> - FI - gestita la data di maturazione nei conti dei prestiti bancari e degli F24 (#TT00569/22) 

> - FI - consentita la modifica del numero di riga nel registro delle registrazioni (#TT01120/22) 

> - SCM - Coretto errore in fase di associazione fattura d’acquisto alla relativa fattura elettronica (#TT001186/22) 

> - SCM - L'Aggiorna prezzi interno al Listino fornitore permette di inserire tanti decimali quanti sono quelli previsti dalla Valuta (#TT01110/22) 

### Patch 545.1-0042- 04/05/2022 

> - SCM - Inserito il blocco della possibilità di cambiare il tipo ordine nei Prototipi della procedura di Creazione Automatica Ordini (#TT00898/21)

> - SD - In caso di storno di una Fattura di vendita con Dichiarazione d’intento, quest’ultima viene riportata (#TT00701/22) 

> - SD - Il filtro della Categoria Commerciale, all'interno del filtro Cliente, nella Ricerca ordini di vendita e Scadenziario ordini, funziona correttamente (#TT00869/22) 

> - SD - Risolto il problema generato dalla lunghezza del nome utente, nella movimentazione a magazzino di ddt e fatture (#TT00808/22) 

> - WM - La creazione del numero lotto nei documenti considera correttamente i Dettagli tipo codice lotto (#TT00850/22) 

> - FI - Sistemati i campi con le descrizioni in rumeno in Intrastat (#TT00789/22) 

> - CO - revisione duplicazione movimenti fisici controlling (#TT00517/21) 

> - FI - se la causale contabile consente i sottoconti a zero, ora è possibile inserire anche righe di analitica con importo zero (#TT00148/21) 

> - FI - cancellazione a cascata della terza registrazione automatica delle registrazioni contabili (#TT02663/20) 

> - SD - Fix SalesDeliveryNote- call Wcf service problem (#TT00914/22) 

> - SCM - Aggiunte le colonne per i riferimenti del Numero RDA e del Numero OC di origine nella procedura di Creazione automatica ordini, tab Scelta fornitore (#TT00882/22) 

> - Revisione creazione fatture acquisto da bolle acquisto senza ricalcolo dei centri aziendali, per mantenere i valori impostati senza ricalcolare in base alla percentuale di riga del documento di origine 

> - MPS - Se l’Articolo ha il carattere + nella Descrizione, viene correttamente visualizzato nel Sottoscorta della Definizione MPS, se ne ha i requisiti (#TT00921/22) 

> - Revisione data competenza righe articolo in contabilizzazione fatture acquisto, per leggere la data bolla prima della data fattura in caso di mancanza della registrazione di carico 

> - SD - Nel caso di cancellazione del lotto da un picking derivante da ordine, anche nell’ordine collegato il lotto verrà cancellato. Lo stesso vale nei DDT e nelle fatture create da ordine (#TT00540/22) 

> - SD -  Inseriti i diritti Arm “Permetti cambiare il flag Contabilizzata sulla fattura” e “Permetti cambiare il flag Scaricata sulla fattura”. Inoltre, un utente che non ha il diritto Nuovo, non può impostare il flag Scaricata a mano, anche se il flag Stampata è attivo (#TT00872/22) 

> - SD - Gestione dichiarazione di intento in creazione ddt/ft da picking e udc. L'esenzione iva viene applicata se il totale del documento è all'interno del valore disponibile nella dichiarazione (#TT00862/22) 

> - SD - L’inserimento di un articolo fittizio per la riga acconto in fattura ora riporta la descrizione e il fatturato vendite di questo (#TT00952/22) 

> - SD - Nel caso di inserimento di un Prezzo ivato negativo in riga Fattura, anche il Prezzo sarà negativo (#TT00944/22) 

> - SD - Evasione- nella lista documenti da evadere si vedono anche i documenti aperti in modifica da altri utenti, se selezionati viene visualizzato il messaggio con l’utente che ha aperto il documento (#TT00542/22) 

> - MPS - Le commesse di produzione vengono generate mantenendo l'ordine delle righe dell'ordine cliente, nel caso in cui non vi sia nessun raggruppamento nei parametri MPS (#TT00911/22) 

> - WM - Risolto errore uscente nella Creazione registrazione da Visualizzazione giacenze filtrate per progetto (#TT00935/22) 

### Patch 545.1-0041.2- 28/04/2022

> - BI - Modificata vista della Business Intelligence del consegnato dei ddt. È stata tolto il collegamento ai centri di costi in quanto venivano duplicate le righe nei centri di costo, c’erano piu righe per la stessa riga documento (#TT00936/22) 

> - FI - Registrazione nota di accredito fornitore (#TT00407/22) 

### Patch 545.1-0041- 28/04/2022 

> - Corretto bug che creava la liquidazione delle provvigioni agenti con totali a zero (#TT00954/22) 

> - SD - La stampa listini di vendita propone i listini validi per i documenti in base alla data inserita nei filtri (#TT00926/22) 

> - FI - inserito messaggio di conferma al ricalcolo dei totali di testata in valuta delle registrazioni, in modo da poter svincolare dal cambio l’importo in valuta rispetto al controvalore euro (o il contrario) 

Nelle fatture di vendita, in caso di creazione file Sdi a prezzi netti, disabilitato blocco alla creazione del file per sconti con più decimali o per sconti a valore (#TT00948/22) 

> - FI - Cespiti parzialmente ammortizzati privi di Totale ammortizzato 

> - FI - eliminata la comparazione della riclassificazione/modello di riclassificazione (#TT00368/21) 

> - SD - Stampa Interventi Pianificati- Aggiunta nuova stampa per gli interventi pianificati (#TT00879/22) 

> - BI - Modificata vista della Business Intelligence del consegnato dei ddt. È stata tolto il collegamento ai centri di costi in quanto veniva duplicate le righe in quanto nei centri di costo c’erano piu righe per la stessa riga documento (#TT00936/22) 

> - BI - Bilancino di fatturazione- Modificato subreport invoiced_turnovertypes, escluse le righe omaggio dal report (#TT00585/22) 

> - SD - Controllo XML Fatture- risolto caso in cui il nome del file XML creato dava errore perché non riconsceva i caratteri finali nel nome del file (#TT00090/22) 

> - SCS - Nei DDT di conto lavoro, se non specificato diversamente in anagrafica, viene proposto come destinatario il fornitore stesso (#TT02785/21) 

> - SCS - Nel caso di evasione di un Ordine di Conto lavoro in un DDT, il Destinatario e la Destinazione in testata non vengono sovrascritti (#TT03159/21) 

> - FI - nelle registrazioni provvisorie che derivano dal modulo Percipienti è stata consentita la modifica di numero e data documento, al salvataggio si aggiorna il documento d'origine. 

> - FI - Stampa bilancio d’esercizio a sezioni contrapposte, corretto errore che in caso di stampa con flag “comparazione anno precedente” non sommava il totale conto correttamente (#TT02963/21) 

> - FI - revisione gestione dati oggettivi nei cespiti(#TT02322/21) 

> - Creazione campo alternativo dove memorizzare il folder di creazione dei file fatture vendita Sdi, per quelli che non sono da firmare. Il campo è impostato di default uguale al folder di quelli da firmare (#TT00185/21) 

> - FI - Corretto bug che non valorizzava correttamente la quota deducibile  e indeducibile dell’ammortamento (#TT01413/21) 

> - FI - Spesometro 2017 and Fatturazione elettronica con soggetti non residentim(#TT00305/21) 

> - Nella creazione fatture da picking a da list UDC, valorizzazione del collegamento alla dichiarazione di intento (#TT00862/22) 

> - FI - Add Group by criterium in report form Riepilogo per codice iva (#TT00884/22) 

> - SH - flag “Contabile” in Anagrafica contatti (#TT00886/22) 

> - MPS, MES- bug fix per Sovrapposizione fasi per numero pezzi- cicli, ordini pianificati, ordini di produzione (#TT00425/22) 

> - WM - inserito controllo sul lotto/scarico in offset quando si ha lo stesso articolo più di una volta (#TT00086/21) 

> - WM - In Registrazioni > Dettaglio movimento, la ricerca funziona inserendo prima il filtro data e dopo il filtro articolo, anche se nella maschera è stato creato un profilo (#TT00994/22) 

> - WM - Nella combo box del filtro Causale magazzino della stampa Schede di Movimentazione, è possibile selezionare più righe tramite il Ctrl (#TT00089/22) 

> - WM - Ora la stampa “Distinta base valorizzata” prende in considerazione la UM utilizzo inserita nei componenti della distinta base (#TT00797/22) 

> - WM - Ora la procedura di valorizzazione assiemi prende in considerazione la versione della distinta base selezionata (#TT00798/22) 

> - MES - Ora nelle segnalazioni viene proposto il lotto dei materiali scaricati secondo la seguente regola- se indicato nell'ordine di produzione verrà riportato in automatico; se invece, non è indicato nell'ordine di produzione verrà riportato il lotto secondo la regola indicata nel campo "TIpologia prelievo" del tab "Lotti e Serial number" dell'anagrafica articoli, quindi con la logica FIFO o per data scadenza, se invece la tipologia prelievo è manuale non verrà proposto nessun lotto in automatico e sarà necessario inserirlo manualmente (#TT00986/22) 

> - CO - Duplicazione modelli di riclassificazione- Risolto errore in fase duplicazione modello di riclassificazione (#TT01012/22) 

> - SD - Inserito controllo sullo sforamento delle dichiarazioni di intento nello step ‘Controllata’ della fatturazione elettronica vendite (#TT01009/22) 

> - FI - Lo sconto di un articolo di tipo Spese viene correttamente considerato nella contabilizzazione della fattura di vendita (#TT00965/22) 

> - SCM - Correzione dell’errore sul formato uscente al momento del carico in magazzino di un DDT di acquisto (#TT03043/21) 

> - FI - aggiunti campi per il contrassegno di partita incassata ella grigli di visualizzazione delle commissioni agenti modulo amministrativo (#TT01043/22) 

> - FI - Messaggio contabilizzazione compensi (#TT00733/22) 

### Patch 545.1-0040- 05/04/2022 

> - SCM - Inserito il blocco della possibilità di cambiare il tipo ordine nei Prototipi della procedura di Creazione Automatica Ordini (#TT00898/21)

> - SD - In caso di storno di una Fattura di vendita con Dichiarazione d’intento, quest’ultima viene riportata (#TT00701/22) 

> - SD - Il filtro della Categoria Commerciale, all'interno del filtro Cliente, nella Ricerca ordini di vendita e Scadenziario ordini, funziona correttamente (#TT00869/22) 

> - SD - Risolto il problema generato dalla lunghezza del nome utente, nella movimentazione a magazzino di ddt e fatture (#TT00808/22) 

> - WM - La creazione del numero lotto nei documenti considera correttamente i Dettagli tipo codice lotto (#TT00850/22) 

> - FI - Sistemati i campi con le descrizioni in rumeno in Intrastat(#TT00789/22) 

> - Fix on accounting registrations related to invoices and delivery notes 

> - CO - revisione duplicazione movimenti fisici controlling(#TT00517/21) 

> - FI - se la causale contabile consente i sottoconti a zero, ora è possibile inserire anche righe di analitica con importo zero (#TT00148/21) 

> - FI - cancellazione a cascata della terza registrazione automatica delle registrazioni contabili(#TT02663/20) 

> - SD - Fix SalesDeliveryNote- call Wcf service problem (#TT00914/22) 

> - SCM - Aggiunte le colonne per i riferimenti del Numero RDA e del Numero OC di origine nella procedura di Creazione automatica ordini, tab Scelta fornitore (#TT00882/22) 

> - Revisione creazione fatture acquisto da bolle acquisto senza ricalcolo dei centri aziendali, per mantenere i valori impostati senza ricalcolare in base alla percentuale di riga del documento di origine 

> - MPS - Se l’Articolo ha il carattere + nella Descrizione, viene correttamente visualizzato nel Sottoscorta della Definizione MPS, se ne ha i requisiti (#TT00921/22) 

> - CO - TT01219/21 formula review   

> - Revisione data competenza righe articolo in contabilizzazione fatture acquisto, per leggere la data bolla prima della data fattura in caso di mancanza della registrazione di carico 

> - SD - Nel caso di cancellazione del lotto da un picking derivante da ordine, anche nell’ordine collegato il lotto verrà cancellato. Lo stesso vale nei DDT e nelle fatture create da ordine (#TT00540/22) 

> - SD -  Inseriti i diritti Arm “Permetti cambiare il flag Contabilizzata sulla fattura” e “Permetti cambiare il flag Scaricata sulla fattura”. Inoltre, un utente che non ha il diritto Nuovo, non può impostare il flag Scaricata a mano, anche se il flag Stampata è attivo (#TT00872/22) 

> - SD - Gestione dichiarazione di intento in creazione ddt/ft da picking e udc. L'esenzione iva viene applicata se il totale del documento è all'interno del valore disponibile nella dichiarazione (#TT00862/22) 

> - SD - L’inserimento di un articolo fittizio per la riga acconto in fattura ora riporta la descrizione e il fatturato vendite di questo(#TT00952/22) 

> - SD - Nel caso di inserimento di un Prezzo ivato negativo in riga Fattura, anche il Prezzo sarà negativo (#TT00944/22) 

> - SD - Evasione- nella lista documenti da evadere si vedono anche i documenti aperti in modifica da altri utenti, se selezionati viene visualizzato il messaggio con l’utente che ha aperto il documento (#TT0542/22) 

> - MPS - Le commesse di produzione vengono generate mantenendo l'ordine delle righe dell'ordine cliente, nel caso in cui non vi sia nessun raggruppamento nei parametri MPS (#TT00911/22) 

> - WM - Risolto errore uscente nella Creazione registrazione da Visualizzazione giacenze filtrate per progetto (#TT00935/22) 

### Patch 545.1-0038- 17/03/2022
 
> - FI - Revisione apertura registrazioni dalla form 'Fatturazione elettronica con soggetti non residenti' 

> - SH - Prototipi- Correzione dell'anomalia che non considerava la selezione del cliente per la stampa del prototipo (#TT02179/21)

> - SD - Contabilizzazione fattura di vendita con omaggi senza rivalsa IVA (#TT01730/19) 

> - SCM - Nel caso di scarico a magazzino di un ddt di reso, l'Ubicazione della Registrazione di magazzino deriva dalla Causale di magazzino delle righe del ddt (#TT00671/22) 

> - SH - Nella Stampa Rendiconto progetti, le colonne Dare e Avere vengono correttamente popolate con i rispettivi valori della registrazione contabile collegata (#TT01053/21) 

> - Foundry- WM Prototipi- Risolto exception all’inserimento di un nuovo componente nei prototipi. 

> - CO - revisione gestione inserimenti nodi nei modelli di riclassificazione 

### Patch 545.1-0037- 11/03/2022 

> - SD - Nel caso di valorizzazione (da procedura o manuale) di un DDT di vendita con un DDT di reso, viene creta una fattura riepilogativa con il segno degli importi corretto in base alla Natura documento. Nel caso si provi a valorizzare i due DDT in una nota di accredito, invece, compare un alert (#TT03139/21) 

> - FI - intrastat- fix grouping problem 

> - Import exchange rate for > - IT- import only decimal values. 

> - SD - Nel caso di Magazzino per cliente/fornitore, l'evasione, in una fattura,  di righe ordine con lotti e numeri seriali, va a buon fine (#TT00565/22) 

> - WM - L'evasione di Picking in DDT, dalla maschera di ricerca picking, considera correttamente il tipo DDT impostato nella tabella Tipi picking e Tipi ordine (#TT00430/22) 

> - FI - revisione creazione manuale nuova registrazione con causale giro iva in sospensione 

> - SD - Aumentata la dimensione del campo FTVB_User, in modo da essere in linea con il campo relativo dalla tabella SEC_Users (#TT00622/22) 

> - SD - Nel file Sdi, le condizioni di resa sono inserito solo quando il codice porto è un codice incoterm (#TT03188/21) 

> - SCM - nell’evasione bolla acquisto in fattura, revisione gestione dati associati ai centri aziendali secondo il parametro di ricalcolo impostato in parametri fatture di acquisto 

> - WM - Ottimizzato il refresh della pagina nel caso di Definizione MPS per un numero molto alto di righe Previsionale (#TT03180/21) 

> - FI - saving a posting with empty cost center 

> - SH - Ottimizzata la visualizzazione della posizione sulla Mappa, dalla ricerca Contatti anagrafici e CRM (#TT00615/22) 

> - SCM - Risolto il bug riguardante il flag Recupero Numeri nella Numerazione dei documenti (#TT00444/22) 

> - MPS - Commesse di produzione- Colori commesse in ritardo o scadute (550/21) 

> - FI - Anomalia in procedura "aggiungi partite da raggruppare" nelle partite (#TT01579/21) 

> - Nel collegamento del file Sdi alle fatture di acquisto, inserimento controllo tra totale imponibile/iva del file rispetto ai valori nei riepiloghi iva della fattura 

> - FI - Contabilizzazione automatica fatture di vendita- Risolto errore in fase di generazione registrazione contabile di fattura di vendita in presenza di prezzo ivato e sconti (#TT00204/22) 

> - FI, PR- Estrazione partite da CashFlow estrae anche quelle raggruppate (#TT00530/22) 

> - Workflow- solve application exception- 549/2022 (#TT00055/22) 

### Patch 545.1-0036- 03/03/2022 

> - FI - intrastat- grouping with different purchase origin country 

> - SH - L’agente che ha in anagrafica la data fine rapporto impostata non è più visibile (da quella data) nel tooltip di selezione nelle anagrafiche clienti(#TT01296/21) 

> - MPS - La generazione di Ordini di conto lavoro da schedulazione generale riporta correttamente i Materiali, in base ai Parametri di conto lavoro impostati (#TT00193/22) 

> - FI - Timeout in procedura di import files DocFinance tramite BizLink (#TT01658/21) 

> - SD - Il fix permette di utilizzare la funzione "Sostituisci agente nelle righe" sugli ordini clienti anche se la prima riga del corpo è una riga di tipo Nota Articolo (#TT00533/22) 

> - WM - Schede di movimentazione, Visualizzazione Giacenze- Modificatata form in modo che alla stampa venga passato il dato della variante (#TT00497/22 , #TT00481/22) 

> - SD - Per la fatturazione elettronica, gestione del tag **TipoResa** valorizzandolo con il codice del ‘Porto’ inserito in fattura (#TT03188/21) 

> - nuova stampa “Consolidato di progetto” raggruppata per centro di progetto 

> - SH - increase dimension of alternative nomenclature user (#TT00538/22) 

> - SD - L'Arrotondamento, nella procedura di Duplica e Manutenzione Listini, considera correttamente il mask per il numero di decimali; il numero di zeri visibili dipende dalla Divisa (#TT00526/22) 

> - SCS - In rientri di conto lavoro > tab materiali, la disponibilità dei lotti nell'help lotti ora è calcolata sulla "Data rientro" (ReturnDate) e non più sulla "Data doc. def." (date)  (#TT00447/22) 

> - SCM - Nelle righe articolo di un Ordine Fornitore, per la Quantità Alternativa sono visibili tanti decimali quanti sono previsti nella tabella Unità di misura (#TT00496/22) 

> - FI - compilazione tabella codici aggiuntivi per CU2022 

> - FI - Intrastat2022, nei parametri di contabilità è stato inserito un flag per le operazioni superiori a 20000000, se non impostato i campi porto/spedizione non sono più obbligatori nelle dichiarazioni mensili (e non vengono riportati dalla procedure automatiche di compilazione) 

> - Update Schema for Elettronic Sales Invoice 

> - MPS - Inserimento del flag "Visualizza anche gli articoli archiviati" nel filtro dei Cicli di Lavoro (#TT02715/21) 

> - SD - SalesInvoice-ItemValorization verification for NC (#TT03139/21) 

> - SCS - Negli ordini di conto lavoro nati da un ordine di produzione, se evado forzatamente lo stato dell'ordine direttamente dalla testata del documento, l'ordine di produzione collegato viene portato in stato "Evaso".    #TT00410/22 

> - SCM - Sistemato errore in "creazione automatica ordini", tab "scelta fornitore" trascinando più articoli (#TT00522/22)

### Patch 545.1-0035- 23/02/2022 

> - WM - Inventari fisici - Liste inventariali- Velocizzato inserimento delle quantità nelle liste inventariali con migliaia di articoli (#TT00389/22) 

> - PR - Vendor Payment- revisione assegnazione riferimenti iban in creazione pagamenti fornitori 

> - Crm - Distribution list- optimize unassigned member tab (#TT01723/21) 

> - FI - Intrastat2022- creation from purchase invoice 

> - FI - Intrastat2022- Allineamento stampe Intrastat 2022 

> - MES - Nella tabella Tipi Documenti, è possibile inserire la colonna Stampa, che verrà salvata cliccando di nuovo il pulsante di Ricerca (#TT03242/21) 

> - SCM / SD - cost center accounting- test on not null cost center link 

> - Update schema fatture per importazione da BizLink per problema numerazione 

> - Update connector to recive invoices from SanMarino 

### Patch 545.1-0034- 18/02/2022 

> - SD - stampa ddt- Modificati campi destinatario e destinazione in modo che considerino anche i dati storicizzati (#TT03259/21) 

> - MPS - Risolta eccezione uscente con il doppio click nell’istogramma della Capacità Centri di Lavoro (#TT00190/22) 

> - WM - Storico chiusura- Aggiunto in load request la possibilità di caricare il magazzino (#TT02838/21) 

> - FI - Professional certification for 2022  (#TT00107/22) 

> - Allineamento date competenza economica al cambio data documento 

> - FI - Saldo Sel dare in una registrazione contabile  (#TT01676/21) 

> - FI - Certificazione Telematica- Aggiunta stampa certificazione per l’anno 2022 

> - SD - La duplicazione di un Intervento imposta la data odierna nel nuovo Intervento. Inoltre, nel tab Servizi di un Intervento, inserendo l'Ora fine pausa e l'Ora fine, il Tempo effettivo viene calcolato correttamente (#TT00306/22) 

> - SD - La funzione Nuovo progetto da modello crea un Progetto che riporta il Tipo pagamento dell'anagrafica del nuovo contatto selezionato (#TT00140/22) 

> - SD - Nel caso di Tipo pagamento con Sconto finale associato, una fattura di vendita con più righe articolo riporta correttamente le scadenze (#TT00348/22) 

> - CRM - La Conversione di un Contatto CRM in un Cliente trasferisce il Telefono cellulare (#TT00313/22) 

> - M.P.S. - Controllo articoli- Corretto il numero dei decimali visualizzati nei Valori rilevati nell'elenco della Rilevazione valori multipli 

>> - Nei Parametri del Controllo articoli è stata data la possibilità di non indicare un Tipo documento di default da proporre nei filtri di ricerca dei Controlli articolo e nei Certificati di analisi. 

>> - Nei Parametri del Controllo articoli è stata data la possibilità di non indicare un Tipo documento di default da proporre nei filtri di ricerca dei Controlli articolo e nei Certificati di analisi. 

> - QY - Reclami e Non conformità- E' possibile indicare tutte le U.D.C. caricate e scaricate 

> - FI - New features of Intrastat 2022 

> - SD - il numero di decimali accettati nel campo prezzo delle righe di progetto commessa è di 15 come in tutti i documenti Fluentis. > - SD - il numero di decimali accettati nel campo prezzo delle righe di progetto commessa è di 15 come in tutti i documenti Fluentis. 

> - SD - Creazione fattura da ddt- Risolto errore in fase di generazione fattura da ddt per il quale venivano create due righe pagamenti al 100% (#TT00340/22) 

> - FI - professionals- revisione contabilizzazione pagamenti percipienti in database refactored 

> - PR - Vendor Payment- revisione assegnazione riferimenti iban in creazione pagamenti fornitori 

### Patch 545.1-0033- 04/02/2022 

> - SCM - contabilizzazione fatture da ricevere- Rientro C/L 

> - SD - Nell’Help articoli dei documenti di vendita, tab Documenti, sono visibili i documenti in base ai filtri selezionati (#TT00223/22) 

> - Sistemato errore di stampa nei "Documenti vendita in uscita 

> - SH - Correction for the function UT_DettDispoPROD_Refactor which is used for the Availability Analysis to take into consideration only the orders in execution (#TT00264/22) 

> - SH - Sistemata la percentuale per l'agente inserito in procedura "Assegnazione agenti" (#TT00272/22) 

> - FI - revisione 'result grid' dei solleciti per visualizzazione in Modifica massiva stati 

> - Add whait on error for SanMarino document 

> - Add Handle for insert signed xml 

> - Controllo articoli- E’ stato corretto il numero dei decimali visualizzati nei Valori rilevati nell'elenco della Rilevazione valori multipli sulla base dell’Unità di Misura della prova specificata nella relativa riga 

> - SCM - Nella procedura di Creazione automatica ordini da RDA, se utilizzo la funzione "Drag & Drop" per cambiare il fornitore previsto, l'ordine a fornitore viene generato con il listino del nuovo fornitore (#TT03235/21) 

### Patch 545.1-0032- 27/01/2022 

> - FI - Make visible”Fiscal Operation Type” to all countries 

> - FI - manage the case when maturity remains locked in reservation 

> - Storno DDT di acquisto- Data di arrivo e Data carico nello storno non sono valorizzate (#TT02791/21) 

> - SD - in creazione file Sdi delle fatture di vendita, inserimento del numero ddt formattato (se presente) nel tag dei riferimenti ddt (#TT0111/22) 

> - Rientro Conto Lavoro- Migliorata procedura di calcolo dei materiali da consegnare (#TT087/22) 

> - SCS - Valorizzazione Rientri- Nei parametri della Valorizzazione Rientri il tipo fattura non filtrava per divisione. 

> - SD - Fix error on cancellation of sales order when are rows in lots unloading link table (#TT0121/22) 

> - SD - Fix error on lots unloading when make transfer from sales delivery note to sales invoice (#TT0122/22) 

> - SCS - Se un DDT di acquisto o un documento di trasporto hanno articoli con diversa causale di magazzino e vengono contabilizzati con la procedura di Contabilizzazione fatture da ricevere, creano correttamente la registrazione contabile (#TT00104/22) 

> - CO - revision ripresa costi di commessa nel controlling 

> - FI - bug in 'Visualizzazione movimenti iva' regarding tipo operazioni; 

> - MES - Production Signals- Display the unload materials errors for all the signal's materials (13/22) 

> - CO - revisione drag&drop dei nodi nei modelli di riclassificazione (#TT00108/22) 

> - SCS - La procedura di Valorizzazione DDT di rientro crea correttamente una fattura con i totali corretti; il Rientro è visibile nei Riepiloghi della procedura ed è possibile effettuare il Rollback (#TT03149/21) 

> - MES - Gestione Segnalazioni- cambio della logica di valorizzazione del carico per produzione. Ora la valorizzazione viene calcolata in base al tipo costo proposto della causale di magazzino di carico per produzione (2895/21) 

> - SCM - Evasione DDT in Fattura- modificando i prezzi in fattura la modifica viene riportata anche in DDT e nel movimento di magazzino (#TT01967/21) 

> - SCM - Fattura di Acquisto- Risolto il settaggio di magazzino e causale sulle righe articolo in caso di import DDT di Acq in una nuova fattura(#TT03269/21) 

> - SCM - fix error on lots loading when make the transfer from purchase delivery note to purchase invoice.(#TT00178/22) 

> - SCS - Nel caso di salvataggio e riapertura di un ordine di conto lavoro, nel tab materiali i valori in “quantità da consegnare” non vengono modificati  (#TT00127/22) 

> - SCM - Inserendo in un DDT di acquisto un articolo con quantità 0, non viene inserito automaticamente il flag Valorizzata, né sulla riga né sulla testata (#TT00096/22) 

> - SCS - Nel caso di salvataggio e riapertura di un ordine di conto lavoro, nel tab materiali i valori in “quantità da consegnare” non vengono modificati  (#TT00127/22) 

> - SH - in anagrafica contatto, sezione indirizzi alternativi, modificato il dato che veniva salvato nel campo Utente Ultima variazione per adeguarlo alla logica generale. 

> - SCM - Se un articolo ha un Fornitore preferenziale con un Minimo lotto, l’inserimento di una riga articolo in un ordine fornitore fa uscire l’alert solo nel caso di inserimento quantità sbagliata (#TT03232/21) 

> - SCM - nella contabilizzazione fatture di acquisto per società con gestione controlling attiva, le date competenza dei centri ora vengono allineate a quelle assegnate alle righe contabili 

> - WM - Prototipi- Rivisto calcolo costo manodopera e macchina. Il costo manodopera è la somma dei costi uomo e dei costi di attrezzaggio uomo di tutte le fasi inserite nel prototipi, anche delle fasi inserite nei componenti di conto lavoro che non abbiano associato un terzista con un listino di conto lavoro.  

Il costo macchina è la somma dei costi macchina e dei costi di attrezzaggio macchina di tutte le fasi inserite nel prototipi, anche delle fasi inserite nei componenti di conto lavoro che non abbiano associato un terzista con un listino di conto lavoro.  Il calcolo del costo di manodopera e macchina tengono conto delle quantità per fase, delle quantità di componente nella distinta base e dei lotti di produzione inseriti per la definizione del costo nel prototipo (#TT0173/21) 

### Patch 545.1-0031- 14/01/2022 

> - SD - Correzione dell'errore uscente al salvataggio della modifica del Valore degli Sconti finali articoli di un ddt di vendita (#TT03203/21) 

> - WM - Stampa FIFO- Modificata stampa e stored procedure che fa il calcolo della valorizzazione.  

> - Update for Anaf Site Ro version. 

> - SH - Fix user impersonation for Document Types with physical path set(#TT03196/21) 

> - Add SdiLogic and BizLink Service to send Purchase Invoice to SanMarino Hub and to read invoice status 

> - FI - Sistemato errore nel salvataggio di una registrazione di acquisto cespite.(#TT03251/21) 

> - SH - fix filter for documents 

> - WM - Pharma- fixed bug in components extra data 

> - WM - Stampa FIFO- changed implementation (1933/21) 

> - SH - La duplica di un contatto assegna al nuovo contatto un nuovo id nel campo MBCF_MBAN_Id (#TT03278/21) 

> - MES - ListaPrelievo Materiali- Da questo momento, da una singola lista di prelievo materiali é possibile generare più picking list fino a chiusura della stessa (3199/21) 

> - SH - in creazione cliente estero, revisione dell’inserimento riga ‘XXXXXXX’ della fatturazione elettronica per inserimento di default della tipologia ufficio 

> - FI - Gestione Liquidità maturity filter 

> - CO - revisione calcolo e stampa consolidato di progetto del controlling, per valorizzazione costi di struttura 

> - SH - E' possibile modificare il Costo materiale dei componenti di acquisto dei Prototipi (#TT03104/21) 

> - SD - Aggiornamento conto statistico in fatture in base al conto cliente inserito nella fattura (#TT03253/21) 

> - SCS - La procedura di Duplica Listini di Conto Lavoro riporta correttamente la quantità del listino di partenza (#TT03224/21) 

> - SCM - Correzione degli errori riguardanti l'ordinamento degli articoli nella Creazione OC da OF (#TT02867/21) 

> - SD - Inserita la possibilità di selezionare e quindi copiare il Codice articolo degli articoli di un ddt di vendita (#TT00039/22) 

> - OffSetReport- eliminate Abs and show Debit or credit based on value IsDebit 

> - Nella stampa di cortesia degli xml fatture Sdi, aggiunta visualizzazione della “Data ricevimento Sdi” 

> - Revisione calcolo ore per cedolini paghe 

### Patch 545.1-0030- 17/12/2021 

> - MES - Segnalazione di Produzione e Disponibilità- Adeguamento Gestione della Disponibilità da Produzione- la modifica prevede che l’ultima fase produttiva e movimentabile in sequenza di fase e sottofase abbia l’azione di aggiornare la Quantità Prodotta dell’Ordine di Produzione, mentre l’ultima fase produttiva indipendentemente che sia movimentabile o meno abbia l’azione di chiudere l’ordine di produzione. In questo modo l’analisi della disponibilità è in grado di seguire in modo mirato l’andamento effettivo della produzione (#TT03020/21) 

> - MES - Se in un Ordine di produzione modifico la Quantità gestionale da produrre, la Quantità impiego non cambia. Inoltre, nel caso in cui l’articolo padre abbia una UM alternativa e nell’Ordine di produzione venga modificata la Quantità gestionale da produrre, la Quantità utilizzata da produrre si aggiorna correttamente, come la Quantità alternativa dei materiali (#TT02947/21) 

> - SD - Per la fatturazione elettronica, è stata rivista la gestione riferimenti dichiarazioni di intento come da provvedimento Agenzia Entrate con PROT. n. 293390/2021 del 28/10/2021- Attuazione presidio antifrode. Il tag **RiferimentoData** con la data della dichiarazione di intento è individuata dal campo ‘Data protocollo’ inserita nella riga del registro dichiarazioni di intento. Il tag **RiferimentoTesto** viene ora strutturato come ‘Identificativo-Progressivo’ prelevato sempre dalla riga del registro, tramite la ‘Transformation’ standard sull’oggetto FSDeclarationOFExemption- per quanti avessero ‘Trasformation’ custom, è necessario modificare la personalizzazione per allinearla alla normativa (#TT03063/21) 

> - CO - comparazione riclassificazioni del controlling, revisione procedura di duplica 

> - MES - modificato report ordine di produzione e scheda prodotto- Aggiunte quantità nel subreport materiali scheda prodotto e agganciato al report fasi. Aggiunte le quantità da produrre e localizzate le etichette (#TT02830/21) 

> - WM *- Valorizzazione assiemi- Modificata stampa valorizzazione assiemi 

> - PR - revisione rollback contabilizzazione distinte effetti 

> - MPS - In fase di rilascio Ordini pianificati di produzione la quantità dei componenti lavorati con UM alternativa risulta corretta (#TT02943/21) 

> - SD - Nella Creazione da più DDT di una fattura, nel caso in cui i DDT abbiano tutti lo stesso tipo di pagamento ma solo uno con l'IBAN, la fattura viene create con le scadenze corrette (#TT03116/21) 

> - FI - per il file FEC della localizzazione francese, revisione valorizzazione del numero registrazione 

> - SCM - Nel caso di evasione, all'interno di una fattura di acquisto, di un ddt di acquisto, i lotti degli articoli vengono correttamente riportati (#TT02926/21) 

> - MES - Sistemato errore in apertura segnalazioni di produzione (#TT03136/21) 

> - Add San Marino document import 

> - MPS - La Schedulazione generale genera Ordini pianificati con date corrette, in particolare la data fine considera la data inizio e non può esserne antecedente (#TT02990/21) 

> - Nomenclature properties- fix for custom purpose 

> - SD - Sistemato calcolo "totale a pagare" nelle fatture dove viene applicata la "scissione dei pagamenti" (#TT03174/21) 

> - SCS - Nella creazione di Ordini e Rientri di Conto Lavoro, il programma riporta correttamente l'IVA a 0 nei riepiloghi nel caso di fornitori intracomunitari (#TT03014/21)". 

> - SD - quando un Intervento viene duplicato viene impostato con stato "In corso"; i campi ITAN_FTAN_Id e ITAN_BLAN_Id vengono impostati Null (#TT03082/21)". 

> - SCS - Nel caso in cui il fornitore abbia aliquota di esenzione per dichiarazione d'intento, la valorizzazione del rientro di conto lavoro crea correttamente una fattura con i riepiloghi esenti IVA (#TT02994/21) 

> - SCS - La valorizzazione di un rientro di conto lavoro riporta correttamente gli sconti, anche se non derivanti da un ordine (#TT03069/21) 

> - SCM - La valorizzazione di un ddt di reso insieme ad un ddt di acquisto crea una fattura di acquisto con gli importi di reso in negativo; questa operazione non può creare una nota di accredito (#TT03009/21)” 

> - CO - Revisione calcolo riclassificato di commessa 

> - Crm - Newsletter- Error Duplicating a CRM Newsletter (#TT02388/21) 

> - SD - Gli Sconti a valore di un listino di vendita vengono correttamente riportati negli ordini (#TT03175/21) 

> - Add BizLink Parser Import for Pubblic Administrator Invoices from xml file 

### Patch 545.1-0029- 26/11/2021 

> - FI - Stampa registri iva- Modificata stampa in quanto nel riepilogo finale stampava solo il totale di una fattura, relativo al mese precedente, e non la somma di tutte le fatture del mese precedente. 

> - MES - Stampa foglio di lavoro- aggiunta stampa standard, chiamata Scheda di prodotto nelle stampe del foglio di lavoro.  (#TT02830/21) 

> - WM - Stampa inventario a quantità valorizzato- Aggiunta stampa per valorizzazione FIFO (#TT02800/21) 

> - Vendor Payments- changes to allow custom objects 

> - WM - Extra Data- è stata implementata la propagazione degli Extra Data dalla testata dell'Ordine Cliente alla testata dei Picking (#TT02973/21) 

> - SD - Note Codificate- Corretta importazione note codificate nelle righe documento che troncava a 255 caratteri (#TT02999/21) 

> - SD - Risoluzione errore in fase di generazione commessa da ordine cliente (#TT02366/21) 

> - FI - revisione filtro Visualizzazione conti 

> - FI - intrastat- forced positive sign in section quater/quinquies for services 

> - FI - intrastat- changed, for IT, the assignment of service sections depending on vat row type (or previous invoice intrastat nature) 

> - SD - Il numero di decimali della quantità dei lotti ed il numero di decimali della quantità degli articoli in OC, BL, FT, PK, BCL sono modificabili nella tabella delle UM (#TT02978/21) 

> - MES - Segnalazione di Produzione- Creazione Serial Number da registrazione dell’Avanzamento risultava non performante ed è quindi stata ottimizzata per diminuire i tempi di attesa che ora sono di pochi secondi.(#TT03019/21) 

> - SD - Fix SalesOrder- Language description problem (#TT03039/21) 

> - MPS - FCS - Gestione dei Centri di Lavoro a Capacità infinita e modifica di alcuni messaggi di errore 

### Patch 545.1-0028- 08/11/2021 

> - Fix SalesInvoice duplication problem (#TT02853/21) 

> - WM - Aggiunta la possibilità di filtrare per lotto con il simbolo '%' nella visualizzazione giacenza. Tale filtro è passato anche alla stampa (#TT02844/21) 

> - FI - SD - PC - > - SCM - Change to create automatically sales invoices from postings- Self-Billing to Sdi  (#TT02709/21) 

> - FI - DICHIARAZIONI D'INTENTO- Tipo conto 'patrimoniale passivo' (#TT02675/21) 

> - CO - revisione gestione scritture di integrazione per caso società multidivisionale 

> - Ro Inventory- send report name to the algorithm 

> - Fix for Microsoft.Office.Interop.Outlook- set Embed Interop Types  \= true 

> - FI - Flag Consenti sottoconti con valore a zero (#TT02155/21 ) 

> - MPS - Risoluzione dell'errore uscente durante la Schedulazione, se nei parametri MPS è impostata l'"ultima schedulazione effettuata per operatore" come parametro proposto in schedulazione (#TT02889/21) 

> - MPS - Risoluzione dell’errore uscente nella Schedulazione generale quando la distinta ha una quantità padre maggiore di uno e viene considerata la disponibilità (#TT02927/21) 

> - Rewrite the logic for Accounting statement romanian reports  

### Patch 545.1-0027- 22/10/2021 

> - Sistemato errore apertura DDT creati dalle liste di trasferimento UDC (ref. Ticket #TT02777/21) 

> - SD - sales invoice accounting- nella gestione commissioni, revisione contabilizzazione fatture di vendita per gestione tipo calcolo provvigione dalle impostazioni del singolo documento, se non impostate dall’anagrafica agente 

> - Optimize import from Piteco 

> - Crm - Document template- handle data source parameters 

> - Fix search in Nir procedures 

> - SCM - Correzione del messaggio di avviso uscente negli ordini fornitori nel caso in cui venga inserita una quantità non corrispondente al lotto minimo e suoi multipli codificati in anagrafica (#TT02781/21)”. 

> - FI - Gestione Provvigioni in Compensazione Partite (#TT02409/ 21) 

> - Creazione ordini fornitori con dichiarazione d'intento(#Ticket 2787/21 😊 

> - MES Pharma- Production Order, tab extra data- enable extra data buttons (#TT02752/21)  

> - WM - BOM- copy also component’s extra data when moving one component in a different BOM (#TT02695/21) 

> - MES - Aggiunta della label "Modifica stato ordine" nella ribbon bar della lista degli ordini di produzione in lingua francese (#TT02579/21) 

> - WM - Item- Modificato comportamento web publishing in anagrafica articoli. Il campo è MGAA_WEBIsDispo, ogni volta che viene modificato ci permette ora di salvare (#TT02737/21 ) 

> - PM - Risolto apertura del progetto che non visualizzava l'intera struttura WBS del progetto (#TT02525/21) 

### Patch 545.1-0026- 14/10/2021 

> - Add function to set AlternativeQta for electronic invoice 

> - SH - numeration- set numeration for promissory types 

> - SD - è possibile inserire nuove righe con magazzino e causale diversa in ddt di vendita già scaricati (#TT01950/21) 

> - Analisi Disponibilità- Risolto errata considerazione delle disponibilità in caso di documenti di fabbisgono e offerta con la stessa data (#TT02735/21) 

> - WM - By creating a lot code with the DDT Number+Generic Field+ProgressiveNumber, the generated lot code does not have the DDT number inside (#TT02455/21) 

> - Schedulazione Generale- Per la ricerca dei componenti e delle fasi viene utilizzata la versione di distinta della commessa per il livello 0 e la versione di distinta, se presente, di ogni singolo componente per i livelli sottostanti e per le attrezzature, in mancanza della versione nei materiali/attrezzature viene utilizzata quella del padre (#TT1751/21) 

> - MPS - Nel caso di modifica della Quantità delle righe di un ordine cliente vengono modificate, nella Commessa collegata, la Quantità e la Quantità alternativa, in base al fattore di conversione o dello stesso importo se il fattore di conversione non esiste (#TT02546/21) 

> - SD - nella tabella delle fatture di vendita, creazione nuovo campo alfanumerico per memorizzare i riferimenti fatture collegate, che viene ora visualizzato e utilizzato al posto del precedente campo numerico (ref. ticket #TT02709/21) 

> - M.P.S. - F.C.S.- Gestione del blocco degli ordini tassativi (#TT02477/21) 

> - SD - Correzione dell’eccezione uscente cliccando il bottone Trasferimento nell’evasione di un ddt in una fattura di vendita (#TT02748/21 

> - FI - Intrastat- creazione automatica intrastat vendite trimestrale, revisione obbligatorietà nomenclatura combinata (#TT02195/21) 

> - FI - anticipi incassi- contabilizzazione anticipi/incassi con raggruppamento per banca, gestione giroconti automatici di chiusura presentazione 

### Patch 545.1-0025- 07/10/2021

> - M.P.S. e M.E.S.- Completamento dati ordine- Ripresa dati delle note dei materiali (#TT02559/21)

> - WM - In caso di Scarico picking derivante da Lista Prelievo Materiali, la commessa collegata viene riportata correttamente nella Registrazione di magazzino e nella Contropartita (#TT02359/21)
> - WM - La Modifica massiva delle anagrafiche articolo aggiorna correttamente il Tipo materiale (#TT02426/21)
> - SD - Correzione dell'errore uscente nel caricamente delle fasi e dei materiali di un progetto con un numero elevato di fasi e componenti (#TT03125/20)
> - FI - intrastat- add button export document inside intrastat; add file in documents (#TT00896/21)
> - CO - InterimClosure- add indexes to record and record ledger in order to improve the speed ( exception 29596 / 2021)
> - FI - Posting- revisione gestione filtro tab pagamenti quando si crea una nuova registrazione dall’interno della precedente salvata (#TT02089/20)
> - CO - reclassifications- manage the case when a level has more then 99 items
> - CO - revisione segni contabilizzazione rimanenze nelle chiusure infrannuali

### Patch 545.1-0024- 28/09/2021 

> - Solved problem importing AbiCab file if Prov or Cap are missing on db 

> - CO - revisione filtro Valori di conguaglio in form Valori di controllo. 

> - FI - Stampa Liquidazione IVA periodica- Modifcato arrotondamento decimale in caso particolare (#TT02447/21) 

> - CO - nella procedura di contabilizzazione rimanenze del controlling, revisione gestione filtro per giacenze positive/negative 

> - CO - revisione filtro in griglia della form ‘Conti non utilizzati in controlling’ 

> - Solved problem with IDCodeRace field 

> - FI - calcolo provvigioni in contabilità revisione per gestione commissioni in divisa. Se l’utente non imposta il filtro per divisa viene creato un compenso unico nella divisa della società, utilizzando il controvalore euro maturato per le provvigioni indipendentemente dalla divisa originale. Se si filtra per divisione, invece, viene creato un compenso nella divisa impostata, applicando il cambio alla data compenso oppure utilizzando il controvalore euro alla data documento (cioè il vecchio controvalore euro della commissione) se è stato anche impostato il flag ‘Conversione provvigioni usando il cambio alla data documento’ 

> - SD - Disabled button of creation invoice from SalesJobOrder to prevent double click(ref. Ticket 2436/21) 

> - FI - Importazione file xml SDI- errato valore iva (#TT00358/21) 

> - FI - solving problem on fixed assets depreciation RO algorithm  

> - SD - Revisione dell’evasione ddt dall’interno della fattura di vendita per ripresa dati delle provvigioni agenti (#TT02571/21) 

> - Correzione dell'errore uscente nella ricerca articoli di un ddt di vendita, tab Documenti (#TT02561/21) 

> - CO - revisione Elaborazione periodi per calcolo ammortamenti e cancellazione registrazioni extracontabili di area 

> - SD - Mancata visualizzazione profili su form ricerca/modifica/inserimento ordini clienti  TT02507/21 

> - CO - Reclassification - when delete ReclassificationComparationDetails then delete InternalClosureModelLinks  records that are created automatically when making comparation for controlling 

> - FI - Professionals- changed the TotalToPay field to not apply the exchange rate 

> - SD - Evadendo un DDT di vendita in una fattura, viene correttamente riportato il valore dell'Extra Data nelle righe articolo (#TT02470/21) 

> - BizLink- Se la causale contabile prevede la Data competenza IVA uguale alla Data del documento, con l’importazione dei Movimenti Contabili da BizLink la registrazione contabile riporta correttamente il valore nella colonna Comp. IVA, a differenza di prima che riportava sempre la Data registrazione (#TT02356/21) 

> - PR - AdvancesCollections- revisione stampa lista fatture anticipate/incassate per filtro con flag Anticipate e Incassate impostato 

> - FI - Posting- revisione aggiornamento data competenza iva al cambio data registrazione, nel caso di competenza iva uguale a data documento 

> - CO - nell’elaborazione dei driver, revisione gestione segni per tipo distribuzione “09- Su grandezza fisica” 

> - Nel caso di creazione Ordine Fornitore da Offerta Fornitore, l’ordine viene correttamente creato anche se l’offerta ha una riga nota (#TT02524/21) 

> - SCM - In caso di mancanza di Destinatario e Destinazione in anagrafica Fornitore, nei documenti di acquisto viene proposta la Società (#TT00749/21)". 

> - SD - Risoluzione errori nell'apertura di progetti composti da distinte basi importate (#TT02525/21) 

> - FI - Visualizzazione movimenti iva, revisione filtro per tipo operazione (#TT02429/21) 

> - FI - creazione registrazioni da file Sdi in entrata, revisione memorizzazione percentuale iva in anagrafica per separatore decimale (#TT00782/21) 

> - MPS - Gli ordini pianificati generati dalla Schedulazione di una Commessa, la cui Distinta base ha dei componenti con Versioni differenti, hanno la Versione corretta dei componenti (#TT01751/21) 

### Patch 545.1-0023- 06/09/2021 

> - Creazione intervento da intervento pianificato- se già presente un intervento per la stessa data e per lo stesso cliente la riga servizio viene accodata all'intervento già presente (#TT02279/21) 

> - SCM - L'ordine a fornitore derivante da una richiesta di acquisto composta da articoli di un listino fornitore personalizzato, riporta correttamente gli sconti su tutte le righe (#TT02211/21)

> - Sistemata la formattazione del campo SJORA_ActivityDate quando l'attività viene creata come conferma di una richiesta ferie/permesso. 

> - SD - Risoluzione dell'errore uscente al momento della Creazione Automatica ordini fornitori a partire dalla maschera di ricerca ordini clienti (#TT02296/21) 

> - SD - Sia nel caso di Scarico dalla Testata di un ddt di vendita, sia nel caso di utilizzo della procedura di scarico ddt, la registrazione di magazzino avrà la data del documento (#TT02228/21) 

> - SD - sales invoice accounting- error at rollback search when the account has a special char (#TT02310/21) 

> - SD - Dashboard Sales Turnover- Modificati datasource in quanto non tenevano conto delle note di credito (#TT00019/21) 

> - FI - intrastat- solve intrastat sign bug in intrastat creation from posting, second tab 

> - SH - Risoluzione del problema che impediva la cancellazione dei Centri aziendali, attraverso il Canc o il bottone Cancella legame CdC (#TT02321/21) 

> - CO - revisione calcolo e report consolidato di Progetto dell’area controlling 

> - SCM - Stampa scadenziario fornitori- Modificata formattazione date, quantità e prezzi in quanto non corrette (#TT02329/21) 

> - MES - Cambiando le date di un documento nella Capacità Centri di Lavoro, alla modifica successiva dell’ordine le date risultano corrette senza sovrapposizioni tra iniziale e finale (#TT02039/21) 

> - WM - fix filer by department on “Select Movement Report” 

> - PR - reconciliation bank account- importazione file conti correnti cbi, revisione gestione segni (#TT02355/21) 

> - Creare a Wcf for algorithm method ImportPartnersVatDelayedAnaf- RO version 

> - WM - Settata commessa di produzione sui movimenti di scarico dei picking 

> - WM - Anagrafica articoli- solved bug (#TT02375/21) 

> - Optimize query Wcf- Nir 

> - PR - Fix remaining amount check 

> - Nella tab Risorse del progetto una riga ora viene considerata evasa quando è stato creato l'intervento pianificato e questo è in stato 'Chiuso' o 'Annullato'. Inoltre il flag Evaso è selezionato di default (#TT01936/21) 

> - MPS - Se un tipo ordine cliente prevede la creazione automatica della commessa, questa verrà creata con il “Tipo commessa prod.” indicato nella tabella Tipi ordini cliente (#TT2366/21) 

> - Solved problem to import invoice  from excel with different payments 

> - SD - Se un ddt di reso viene Annullato con il flag, il ddt di partenza è di nuovo utilizzabile per altri storni (#TT01906/21) 

> - FI - Stampa Registri IVA- Modificata stampa in quanto non stampava i dati di competenza iva del periodo successivo rispetto a quello selezionato (#TT02379/21) 

> - SD - Sistemato errore nel annullamento di un ordine (#TT02291/21) 

> - SD - Stampa DDT- Aggiunto campo calcolato in stampa che riporta i riferimenti dell’ordine cliente relativi all’articolo. Per poterlo utilizzare va aggiunto un raggruppamento all’interno del detail report per OrderItem.Order.Id. Attenzione che se vengono aggiunte delle righe articolo (anche note) direttamente sul ddt esse non avranno nessun riferimento e saranno stampate per prime, vanno creati due subreport con un filterstring in cui nel primo si stampano tutte le righe con riferimento ordine e nel secondo quelle senza, o viceversa (#TT01912/21) 

> - Gestita la cancellazione dell'attività / dell'intervento quando questi sono collegati ad uno sprint- viene visualizzato un messaggio che chiede conferma per l'eliminazione della referenza dell'attività / dell'intervento dallo sprint.(#TT02226) 

> - SD - Se viene cancellato un progetto dalla testata dell'Ordine cliente, compare il messaggio--Conferma l'aggiornamento della commessa a tutte le righe articolo già inserite correttamente, come nel caso della modifica o dell'inserimento di un nuovo progetto (#TT2335/21) 

> - FI - nei cost driver con tipo distribuzione ’14- Reversione margini per commessa’, revisione modifica del tipo calcolo indice per escludere il controllo alla valorizzazione del campo um 

> - FI -  revisione gestione visibilità tipi distribuzione in griglia cost driver 

> - SD/ SCM - nella contabilizzazione da acquisti e vendite, la dimensione dei centri commesse viene valorizzata solo se questa dimensione è prevista nel piano dei conti per il sottoconto di costo/ricavo. 

> - CO - Revisione calcolo consolidato di progetto.  

> - CO - Revisione elaborazione per la stampa del consolidato di progetto.  

> - CO - Revisione ripresa dati da produzione 

> - SCM - changes for RO purchase invoice accounting 

> - SCS - Risoluzione errori legati a unità di misura non valide nella registrazione rientri conto lavoro (#TT00727/21) 

> - Crm - Distribution list- fix for custom expression 

> - Ottimizzazione procedura di creazione NIR 

> - MES - Inserimento del messaggio di avviso di utilizzare il Rollback del Rilascio Ordini di Produzione in caso di tentativo di cambiare lo stato di un Ordine di Produzione da Esecutivo a Lanciato (#TT02343/21) 

> - SCS - Se nella creazione di un Rientro Conto Lavoro vengono inseriti due articoli gestiti a lotti, ed il secondo lotto viene inserito solo dopo due ore, il Numero lotto risulta corretto e non uguale al primo Numero lotto (#TT02005/21) 

> - SCM - Quando, dopo la valorizzazione di un DDT di acquisto, si modifica la quantità alternativa della fattura risultante, il DDT viene aggiornato con importi e quantità corrette (#TT02351/21) 

> - SCM - L’Importazione Prezzi e Articoli fornitori funziona anche se il codice articolo è diverso dal codice articolo fornitore- in particolare, nel caso di inserimento di un codice articolo interno esistente, e di un codice articolo fornitore non esistente, Fluentis inserirà il Fornitore preferenziale ed il nuovo codice articolo fornitore nell’anagrafica dell’articolo interno esistente. Inoltre, eliminazione del doppione uscente dopo l’Importazione nella maschera di ricerca Articoli fornitori (#TT02406/21) 

### Patch 545.1-0022- 30/07/2021 

> - FI - error for HK 

> - QY - make virtual for custom purpose 

> - CO - comparazione riclassificazione- Gestione range periodi su più anni 

> - Sistemato il reperimento del tipo attività per le attività create da intervento- il tipo viene reperito dai parametri della risorsa che ha dichiarato l’intervento e non da quelli della risorsa collegata in Fluentis (#TT02232/21) 

> - Sistemata visualizzazione orari interventi e attività all'interno dello Sprint (#TT02240/21) 

> - creazione intervento da intervento pianificato- se già presente un intervento per la stessa data e per lo stesso cliente la riga servizio viene accodata all'intervento già presente (#TT02279/21) " 

> - Crm - Scheduler- fix too many parameters provided 

### Patch 545.1-0021- 27/07/2021 

> - PR - vendor payments- Corretto bug in fase di creazione della distinta di bonifico che non leggeva correttamente il parametro che impone la banca di appoggio presente in anagrafica fornitore rispetto a quella abbinata alla partita aperta (#TT01889/21) 

> - Fix problem on RO accounting statement  

> - SH - Fast start- Revisione numerazione fatture di vendita in localizzazione croata 

> - SD - Optimization SalesOrderItem(ref. Ticket #TT02213/21) 

> - Scm - Purchase delivery note- TT02119/21 

> - FI - Intrastat- revisione raggruppamento righe intrastat per massa netta minore dell’unità 

> - SD - Fatture di vendita- nella contabilizzazione fatture ora si compilano i riferimenti mese/trimestre ter nel tab intrastat delle registrazioni, dalla data del documento di riferimento inserito in testata delle note di credito 

> - Change edit type for transition opened from email link 

> - SH - inserimento del filtro ExtraData nella gestione documentale (#TT00666/21) 

> - WM - Warehouse closing- bug fix on showing closing errors 

> - WM - Liste prelievo UDC- bug fix on setting alternative quantity (#TT02250/21) 

> - WM - Loading unit - bug fix on extradata proposal  

> - FI, CO, PR- error for HK 

> - Fattura d’acquisto- corretto bug che non riportava il conto contabile nella sezione della contabilità analitica (centri di costo) e modificata logica per riportare le stesse date di competenza economica nella sezione analitica prendendole dalla riga articolo. #TT01182/21 

> - Risolto errore in inserimento attività con spese (#TT00963/21) 

>> - Aggiunta l'ora nel campo Data inizio in Creazione interventi pianificati da Progetto. 

>> - Modificata creazione intervento per impostare la data intervento pari alla data dell'intervento pianificato. 

### Patch 545.1-0020- 16/07/2021 

> - WM - Stampa Lifo- Modificato layout della stampa 

>> - MRP- Correzione dell’errore di timeout uscente lanciando la procedura MRP dalla tab Commesse (#TT01900/21) 

> - SD - Listini Vendita- Creazione Listini Vendita- Aggiornato filtro per data validità del listino di origine per le diverse Culture del database (#TT02107/21) 

> - FI - fixed asset- Fix Project Filter on fixed assets reports for Controlling case (#TT02114/21) 

> - Solved problem with Missing Reference for Intercompany 

> - FI - Corretto bug quando veniva creata una registrazione contabile con segno negativo e la causale contabile aveva una seconda causale collegata. Nonostante il messaggio di richiesta di invertire il segno nella scrittura collegata, l’inversione non veniva eseguita (#TT02094/21)   

> - WM - In Modifica Inventari Articoli, dopo la selezione di tutti gli articoli esistenti, è possibile modificare la colonna Quantità senza che il programma si blocchi (#TT01533/21) 

> - SD - Proposta data creazione in Duplica e manutenzione Listini di Vendita (Riferimento Ticket- #TT02147/21) 

>> - Fix nella procedura di evasione progetti in ordini clienti con molti dati inseriti al livello del database(rif. TT02123/21) 

>> - Per i clienti con dichiarazione di intento quando viene indicato il progetto nella riga servizio di un intervento rimane il codice IVA della dichiarazione e non viene impostato quello del progetto (#TT02087/21) 

> - QY - FSCoa workflow bug fix (#TT02153/21) 

> - CO - Comparazione riclassificazioni- modifica visibilità dettagli, revisione calcoli 

> - Creato un nuovo stato 'Annullato' per gli interventi pianificati. Quando un intervento pianificato è in stato 'Annullato' non può essere trasformato in intervento (#TT02103/21) 

> - SD - SalesDeliveryNote\SalesInvoice-CancelledSetter logic modifications (#TT01906/21) 

> - FI - modificata procedura scritture di assestamento per permettere di cancellare le singole righe calcolate e non contabilizzate in modo da rendere modificabile la scrittura contabile collegata (#TT00266/21 ) 

### Patch 545.1-0019- 09/07/2021 

> - SD - Negli ordini clienti che generano un progetto, è possibile inserire, nella tab Pagamenti in testata, delle righe con diversa Data scadenza e nessuna soluzione di pagamento (#TT02011/21) 

> - FI - fixed asset- Fix division filter to depreciations search in accounting procedure (#TT01639/21) 

> - CO - nella ripresa dati da produzione del controlling, esclusione delle segnalazioni di sospensione 

> - CO - Valorizzazione rimanenze- revisione gestione contabilizzazione rimanenze, in caso di gestione ‘mensile’ (label modificata in ‘Controlling’) le registrazioni vengono create solo nell’area di analisi collegata alla chiusura (come registrazioni di area); il centro di costo viene ripreso ora in via prioritaria dall’articolo, poi dal conto delle rimanenze iniziali/finali impostato nell’articolo o nella categoria fiscale 

>> - MRP- disabled MRP execution button while MRP is running (#TT01850/21) 

> - FI - reports- Stampa Estratto Conto Generate error if there's no date but only the account (#TT01927/21) 

> - SH - Extradata Clienti- Aggiunto indice per migliorare le prestazioni di Fluentis in presenza di molti extradata in anagrafica contatti (#TT02055/21 ) 

> - SH - Tipi indirizzi- Possibilità di memorizzare un profilo della form (#TT02059/21) 

> - SH - Province- Fix validity check when description is modified (#TT02084/21) 

> - SD - Se all'interno di un Tipo POS viene cambiato il Listino, questo viene memorizzato una volta salvato e riaperto il Tipo POS (#TT00056/21) 

> - SD - Se vengono inserite delle Provvigioni agenti nelle righe di un ddt di vendita, esse vengono correttamente riportate nelle righe della nuova fattura creata, in cui viene evaso il ddt (#TT02101/21) 

> - SD - I materiali Conai inseriti nelle righe articolo di un ddt di vendita vengono correttamente riportati nelle righe della fattura (#TT02085/21) 

> - BI - Fix initialization of pivot grid (#TT001765/21) 

>> - WM - Nel Navigatore articoli, tab Vendita, è stato corretto il filtro Data merce pronta, per allinearlo alla griglia (#TT01191/21) 

>> - SCM - Partendo da un ordine cliente con una determinata quantità, e modificando questa quantità nella Creazione automatica ordini, verrà creato un ordine fornitore con le quantità corrette nella riga articolo e nei riepiloghi (#TT01965/21) 

>> - Sistemata la formattazione delle date nel filtro di ricerca degli interventi pianificati (#TT01935/21) 

> - CRM - Newsletter - use template from transformation to send unique content for every recipient 

> - PR - Cash flow- revisione join effetto con stato effetto nella procedura di calcolo cash flow 

> - SH - Prototipi- Revisione calcolo dei costi per i componenti- 

>> - se il componente è di acquisto il suo costo materiale è dato dal listino valido del suo fornitore preferenziale oppure dal costo di magazzino mentre il costo lavorazione è 0; 

>> - se il componente è di conto lavoro il suo costo materiale è la somma dei costi dei suoi componenti mentre il costo lavorazione è ricavato dal ciclo di lavoro di fasi esterne oppure dal costo di listino del suo terzista prefernziale; 

>> - se il componente è di produzione il suo costo materiale è la somma dei costi dei suoi componenti mentre il costo lavorazione è ricavato dal ciclo di lavoro 

> - Il costo totale del prototipo è calcolato come i semilavorati e il costo materiale, costo manodopera, costo macchina e costo industriale vengono riportati anche nel tab Costi. 

> - SCM - Listini Fornitori- Duplica e Manutenzione Listini Fornitori- Revisione filtro 

>> - Se non è specificata la data inizio validità \< = Al e la data fine validità \> = Al  vengono visualizzati gli articoli di tutti i listini storici anche se non più validi. 

>> - Se è specificata la  Data inizio validità \< = Al vengono visualizzati tutti i gli articoli dei listini con data inizio validità strettamente minore o uguale a  Data inizio validità \< = Al e con data fine validità NULL oppure maggiore uguale a  Data inizio validità \< = Al. 

>> - Se è specificata  data inizio validità \< = Al e  data fine validità \< = Al vengono visualizzati tutti i gli articoli dei listini con data inizio validità strettamente minore o uguale a Data inizio validità \< = Al e con data fine validità strettamente maggiore o uguale a  data finevalidità \< = Al.  (#TT02004/21) 

### Patch 545.1-0018- 28/06/2021 

> - SD - Nelle righe articolo degli ordini di vendita, il filtro della colonna UM alternativa propone tutte le UM, non solo le UM alternative presenti in anagrafica articolo (#TT01788/21) 

> - WM - Correzione dell’errore uscente con la selezione di tutti gli articoli esistenti dal filtro di ricerca articoli, nella Modifica Inventari Articoli (#TT01533/21) 

Corretta creazione attività dichiarata come conferma del periodo richiesto come ferie, in accordo con l'orario di lavoro della risorsa (#TT01566/21) 

> - WM - Valorizzazione assieme- Revisionata stampa valorizzazione assieme (#TT01720/21) 

> - Solved problem on Intercompany Wizard Interface with recursive Objects 

> - SD - risolto exception all'esecuzione della Stampa Cedolini Agenti (#TT01836/21) 

> - WM - Causali di magazzino-  Risoluzione dell'eccezione uscente al momento della modifica del flag "Sca. lotto"  (#TT01758/21)”. 

> - MPS - Schedulazione generale e FCS- Data inizio e fine schedulazione visualizzati nel formato Data, Ore e Minuti (#TT01822/21) 

> - Sistemato calcolo analisi disponibilità per articoli provenienti da fatture di acquisto (#TT01834/21) 

> - MPS - Correzione dell’eccezione uscente nella Definizione MPS filtrando per Cliente (#TT01827/21) 

> - SD - In caso di creazione di un ordine cliente con un articolo codificato e un articolo non codificato, e successiva evasione in ddt solo dell’articolo non codificato, il diagramma di Evasione dell’ordine riporta correttamente entrambi i documenti (#TT01863/21) 

> - SCM - Se nei parametri dei DDT di acquisto appongo il flag “Uso articolo fornitore”, allora avrò la colonna “Articolo fornitore” negli articoli del DDT di acquisto, come negli altri documenti (#TT01752/21)”. 

> - SD - Ordini Cliente- Lentezza Evasione Progetti in Ordine Cliente- Nell'evasione Progetti in Ordine Cliente è stata migliorata la velocità di visualizzazione dei Progetti (rif. 2459/20) 

> - WM - Il Navigatore Articoli riporta correttamente la Data Merce Pronta inserita negli Ordini clienti (#TT01191/21) 

> - MES - Stampa Fasi- Corretto articolo da produrre (#TT01918/21) 

> - SD - Fix SalesPriceList-change status error. 

> - SD - SalesInvoice-Allow ExtraDataItem modification when accounted.(ref. Ticket #TT01744/21) 

> - CO - Comparazione riclassificazioni- Revisione gestione righe con tipo importo 'Iniziale' o 'Finale' in visualizzazione con/senza dettagli di periodo (#TT01892/21) 

> - Sistemato aggiornamento date intervallo orario al cambio della data effettiva del servizio. 

> - Corretto reperimento spese da cliente impostato come default nei parametri operatore, alla creazione dell’intervento da intervento pianificato. 

> - Corretto errore all’inserimento della risorsa nella testata dell’intervento.(rif #TT01831/21) 

> - Sistemato format date e aggiornamento date giorni festivi nella tab Risorse dei Progetti.(#TT01808/21) 

> - WM - Stampa picking- Aggiunto subReport per stampare anche i lotti se presenti associati all’articolo del picking. Revisionato layout stampa (#TT01916/21) 

> - Corretta impostazione campi quantità e prezzo nella riga offerta creata da import progetto (#TT00304/21) 

> - SH - Prototipi- Duplica- Non venivano duplicati- Valore e Quantità degli Altri costi."(rif #TT01909/21) 

> - SD - Stampa Ordini- Modificata stampa, aggiunta data consegna (#TT01915/21) 

> - SD - Impostiamo un Fatturato vendite con diversi Tipo contabilizzazione articolo e impostiamo uno di questi in anagrafica cliente. Nella fattura di vendita ed in quella duplicata viene riportato correttamente il Tipo nella tab Analitica degli Articoli (#TT01963/21) . 

> - CO - Calcolo Costo articolo- Risoluzione anomalia calcolo costo materiali di articoli gestiti a variante (#TT01732/21) 

> - Gruppo Iva gestione riferimento codice fiscale 

> - Import from Piteco file- filter by company when searching the account and template 

> - SD - Apponiamo il flag Autocommesse ed impostiamo un Tipo progetto nella tabella Tipi ordine. La conversione di un’offerta dalla Testata riporta correttamente il riferimento al progetto nell’ordine cliente (#TT01968/21) 

> - MPS - Commesse di produzione- Variazione layout Dati articolo nella gestione delle Commesse monoprodotto (#TT01921/21) 

> - QY - Controllo articoli- Le registrazioni di magazzino venivano memorizzate con data nel formato Datetime.(#TT01833/21) 

> - QY - Non conformità- Risoluzione anomalia Calcolo Totale materiale non rilavorato su Quantità e prezzo alternativo.(#TT01387/21) 

> - CO - Valori di controllo- modifica al calcolo degli importi visualizzati nel tab ‘Valori di conguaglio’ 

> - SCM - Stampa report listino fornitore- Modificato stampa in quanto non portava i decimali con il prezzo in stampa (#TT01980/21  ) 

> - SD - Re-established the possibility of the invoice fiscalization in relation with the payment type (#TT01992/21)  

> - Solved problem with Intercompany importer to set null missing fields 

> - MPS - Calendario Capacità produttive- Risoluzione anomalia di eliminazione errata di calendari per altre aziende (#TT01958/21) 

> - MPS - Schedulazione generale- Risoluzione anomalia di evasione errata Commessa in assenza di disponibilità articolo (#TT01653/21) 

> - SD - Possibilità di aggiungere righe nei ddt di vendita una volta Stampati e Scaricati, ma non Valorizzati (#TT01950/21) 

### Patch 545.1-0017- 08/06/2021 

> - FI - Report Sottoconti- Modificata data elaborazione in quanto non era formattata correttamente (#TT01646/21) 

> - BizLink- fix rproblem in RO declaration 

> - SH - Soluzione per il ricalcolo degli sconti per i documenti Business (#TT01523/21) 

> - SD - Dalla maschera di ricerca Ordini Clienti, selezionando una o più righe e cliccando Creazione Ordini Fornitori sulla ribbon bar, l’Ordine Fornitore generato riporta le righe articolo nello stesso ordine dell’Ordine Cliente (#TT00120/21) 

> - MPS - Ordini pianificati- Errore su dimensione campo superata su Utente (#TT01633/21) 

> - Tabella Provincie- Aggiornato il codice di Imperia (#TT01570/21) 

> - MES - Correzione dell'errore presente nell'inserimento di una fase nella Modifica Segnalazione relativa ad un Ordine di Produzione (#TT01617/21) 

> - FI - make virtual for custom purpose 

> - Update schema Articoli/Listini vend for import on demand with corret label for Listini 

> - SD - Stampa fabbisogno materiali- Modificato subreport componenti in modo da calcolare la quantità corretta per il componente 

> - FI - revisione ripresa saldo periodo/anno precedente nel caso di periodo corrente senza movimenti 

> - CO - Comparation reclassification- row visible  (#TT0848/21) 

> - SD - Contabilizzazione fatture di vendita- revisione gestione messaggi per utenti con lingua it-CH 

> - MPS - L’inserimento di un Ticket in un Intervento Pianificato, comporta la compilazione dei campi SLA e Severità dello stesso ticket (#TT01545/21) 

> - FI - sales invoice and purchase invoice cost center accounting- change the account used for job order dimension of centers 

> - SD - Possibilità di gestire il Mask dell'Arrotondamento nella procedura di Duplica e Manutenzione Listini di Vendita (#TT01666/21) 

> - SD - Fix Unloaded SalesDeliveryNote\SalesInvoice modification problem(ref #TT01705/21) 

> - SD - Block Sales Documents closing  during the saving process (ref #TT01716/21) 

> - FI - fixed assets- filter by department in reports (#TT01671/21) 

> - CO - Previsioni di Vendita- Bug Fix al salvataggio delle Previsioni di vendita (#TT1718/21) 

> - SD - creazione listo vendita- corretto applicazione arrotondamento agli scaglioni di prezzo per quantità (ref #TT01728/21) 

> - SH - Correzione dell’errore uscente nel Trasferimento di una riga di Progetto nella maschera di Evasione da progetto da un Ordine di Vendita (#TT01734/21) 

> - QY - Cause- E' permesso l'inserimento di sole Cause attive (ref #TT01197/21) 

> - QY - General- Duplicate Test Types- Completion of choices duplicates sub-classes	      (ref # TT00911/21) 

> - MES - Aggiunta del gruppo form Profili nella ribbon bar del Parametri MRP (#TT01698/21) 

> - Crm - Newsletter- fix load 

> - FI - Ricerca cespiti- il filtro per Cdc ora verifica se nella società è attivo la gestione controlling (#TT01587/21) 

> - FI - contabilizzazioni ammortamenti- revisione rollback nel caso di gestione singola registrazione (#TT01736/21) 

> - QY - Reclami- Rettifica utilizzo valori negli oggetti reclamati (ref # TT01199/21) 

> - MPS - Trasferimento del campo Macchina tra i diversi documenti dei cicli di pianificazione e produzione (#TT01725/21) 

> - MPS - Parametri MRP articolo- "Proposta ordini pianificati senza crearli" con descrizione non corretta (#TT01700/21) 

> - WM - Stampa registrazioni di magazzino- Modificato paese di origine in quanto il report è stato fatto per la Croazia.  

> - Solved bugs on Intercompany Interface  

### Patch 545.1-0016- 20/05/2021 

> - SH - Aliquote/Modalita IVA- field CatIva - correct Eslcuso with Escluso 

> - Update schema for importi Listini fornitori from Excel 

> - SD - Risoluzione al problema di pagamenti e scadenze duplicate nel caso di creazione massiva di fatture di vendita da ddt (#TT01297/21) 

> - WM - make public some properties in WarehousePostingViewModel for custom purpose. 

> - Generando, con la Definizione MPS, una commessa di produzione partendo da un ordine cliente di più righe, essa riporta in modo corretto i progressivi degli articoli (#TT01346/21) 

> - SD - Liquidazione provvigione agente- Modificata trasformation ReportEmailTemplate in quanto andava in errore se non c’è il tipo indirizzo di fatturazione per l’agente (#TT01498/21) 

> - SD - Liquidazione provvigione agente- Modificata stampa in quanto se l’agente aveva come tipo pagamento “5- pagamento avvenuto” veniva considerata la provvigione sul totale fattura e non su quello che effettivamente era stato pagato (#TT01498/21) 

> - CO - Stampa Valorizzazione Riclassificazione- Modifica stampa in quanto non sommava correttamente se comparati due anni e non veniva inserita la divisa (#TT01498/21)  

> - Ogni volte che lo stato dell’intervento passa in Controllato viene creata l’attività se non esiste già. 

> - solo per interventi di tipo esterno vengono reperite le spese di default dell’anagrafica cliente e dell’anagrafica risorsa. 

> - Corretta l’impostazione dell’orario nelle attività che vengono create dalla conferma della richiesta ferie (#TT01373/21) 

> - SCM - Nella Creazione automatica ordini fornitori viene riportato il Fatturato acquisti presente in Anagrafica articolo; se non dovesse esserci viene preso dai Parametri, altrimenti dal documento di partenza, in questo caso una RDA (#TT02975/20) 

> - SD - Possibilità di inserire come nuova Soluzione di pagamento il codice 60210 (#TT01558/21) 

> - MES - Possibilità di inserire i campi Numero macchine e Numero operai con i decimali, nella tab Fasi degli Ordini pianificati e degli Ordini di produzione (#TT01480/21) 

> - Crm - Campaign- remove limitation for CrmCampaignContact->CrmCampaignContact  

> - Crm - Campaign- Add possibility to send email when flag IsEmailStandby is true 

> - Crm - Contacts- add possibility to drag properties from Object Navigator for Contact reference 

> - Crm - Opportunity- fix problem when drag-drop card inside Opportunity Progress Kan Ban Board 

> - CO - Calcolo Costi Articolo- Revisione calcolo costo di Attrezzaggio 

> - A partire da un DDT di acquisto, è possibile creare un nuovo listino fornitore con la stessa data di inizio validità di uno preesistente, cliccando Aggiornamento Listini -> Crea nuovo listino con nuova validità (#TT01393/21)”. 

> - correzioni nel riporto di data validità in duplica prototipi 

> - SD - SalesOrder- Make virtual for custom purpose. 

> - SD -  L’evasione di un ordine in un ddt di vendita riporta correttamente la Destinazione inserita nella testata dell’ordine (#TT01577/21) 

> - CO - Consolidato di commessa- fix calcolo dati per report 

> - CO - Costo prodotto- Calcolo costo prodotto del controlling 

### Patch 545.1-0015- 06/05/2021 

> - SD - La stampa del POS aggiorna il relativo flag in Testata POS (#TT01307/21) 

> - SD - Corretta visualizzazione delle destinazioni dalla combo box in Testata Ordine Cliente quando inserisco più ordini dello stesso cliente (#TT01283/21) 

> - SD - Eseguendo l’Evasione DDT dalla maschera di ricerca Ordini clienti, nel documento viene riportato il Vettore impostato nell’Ordine, se diverso da quello di anagrafica (#TT01285/21) 

> - FI - Stampa Registri IVA- Modificato report in quanto stampava una pagina bianca se impostato il flag riepilogativo (#TT01193/21) 

> - FI - Causali di contabilità- disabilitato il campo registro iva se il tipo movimento è “Non iva” 

> - SH - stored di download cam> - BI - revisione per errori in download 

> - FI -Comunicazione liquidazioni periodiche iva- revisione ripresa credito anno precedente 

> - SH - Agenti- Revisione inserimento articoli in dettaglio provvigioni (#TT01364/21) 

> - FI - bank loan accounting- change stored - fixes for Ro 

> - FI - accounting- Currency Adjustment changes for RO 

> - FI - accounting- changes in stored import from bank 

> - FI - currency adjustment- modify stored  

> - Crm - Contact- allow sending email if flag IsEmailStandby is true;  add tooltip for activity description column 

> - PR - bills holdings- change in accounting promissory list - insert payment for prommisory for Ro 

> - FI - F24 Codice tributo- Impostando il codice tributo 6099 nonostante compili il campo relativo alle rate continua a segnalare che il campo "rateazione/Reg/prov" va compilato (#TT01117/21) 

> - FI - report calcolo provvigioni- new param CommissionsAccruedAt 

> - SD/ Spring- all'inserimento manuale di un servizio all'interno di uno spring, viene mostrata correttamente l'unità di misura e l'orario di svolgimento. Inserita la colonna WBS nella griglia.  

> - WM /Item Prototype- ricalcola costi- se si importa una distinta base o all’inserimento di un nuovo componente il sistema non restituisce più l’errore del parametro s (#TT00429/21)  

> - WM /Item Prototype- costi materiali e di lavorazione- all'aggiornamento del costo dei materiali nella griglia degli articoli, si aggiorna anche il campo dei materiali nel tab costi (#TT00631/21) 

> - SCS - Duplica OCL- se viene duplicato l'ocl da un ordine collegato ad una bolla di ricevimento materiali, non viene più mostrato il messaggio di avviso e viene aggiornata la quantità dei materiali sulla base della quantità inserita negli articoli (#TT01136/21) 

> - MPS - Rilascio ordini pianificati- bug fix per rilascio (#TT01412/21) 

> - FI - categoria cespite- Button Inserisci nella tabella dett. must not be active if any voice of the upper grid is selected.  

> - PR - pagamenti fornitori- Eliminato il test di presenza stesso codice cig/cup in tutte le righe pagamento 

> - SD - Inserimento del blocco Lotto in un Picking derivante da Ordine cliente (#TT01303/21) 

> - #TT01418/21 Add BizLink Parser for Sepa FR 

> - Registro dei documenti SDI- Aggiornata localizzazione / traduzione del campo Stato documento 

> - FI - esportazione ore per paghe- formattazione in rosso delle righe con ore uguali a zero 

> - SD / Creazione fattura da progetti- se presente il codice CIG e CUP nella testata del progetto, questi vengono riportati anche nella fattura che si crea dalla procedura di creazione fatture da progetti (#TT00395/21) 

> - SCM - Eliminazione del blocco sulla possibilità di autorizzare una riga di tipo Nota in una RDA (#TT01355/21) 

> - PR - pagamenti sepa- gestione parser pain.001.001.02 per localizzazione francese 

> - Crm - Newsletter- new improvements - send emails in batches, add wait time between batches, add 2 new parameters in CRM, display the busy indicator above pop-up 

> - SH - Documents- Link email to document 

> - FI - esterometro- aggiornamento segnalazioni file errore per tipi documento invalidi 

> - SH - Task- fix for New activity 

### Patch 545.1-0014- 23/04/2021 

> - BizLink- Importazioni on Demand- Realizzata importazione degli ordini clienti da file Excel (#TT0969/21) 

> - FI - stampa liquidazione iva periodica- revisione calcolo saldo da riportare in tabella Versamenti iva per stampa definitiva gennaio, quando il credito dell'anno precedente è solo in tabella Dichiarazione iva 

> - BI - Profili cu> - BI - Aggiunto pulsante reset filtri che ricarica tutti i dati e resetta tutti i filtri 

> - FI - Stampa liquidazione iva annuale- revisione calcolo dati iva acquisti sospesi dell’esercizio ancora da pagare 

> - SD - Risoluzione errore durante la ricerca degli interventi nella maschera di valorizzazione (#TT01174/21) 

> - FI - Visualizzazione movimenti iva- blocco cancellazione righe da tastier 

> - PR - Effetti- Revisione gestione del blocco creazione effetti senza abi/cab 

> - Crm - Newsletter- in some cases image is added as attachment instead of being embedded- add a new flag in order to let the user choose if the image should be embedded 

> - SD - Il DDT riporta il prezzo degli articoli degli ordini di vendita, anche se il prezzo degli articoli viene modificato in anagrafica articoli prima dell'evasione (#TT01109/21) 

> - SH - Il navigatore articoli nella tab Vendita funziona correttamente se impostata la data di consegna(#TT01191/21) 

> - CO - Chiusure infrannuali- revisione query di test in apertura e in cancellazione registrazioni extracontabili 

> - CA - Calcolo provvigioni- nei percipienti, revisione gestione date di calcolo 

> - FI - Stampa Bilancio d’esercizio- Sistemato problema in quanto considerava le registrazioni successive alla data impostata nel filtro di stampa per i conti d’ordine (#TT01160/21) 

> - SD - Stampa lista fatture- Modificato binding sulle label delle date da Company.Country.IsoCode a Country.Language.IsoCode 

> - SCM - Stampa lista fatture- Modificato binding sulle label delle date da Company.Country.IsoCode a Country.Language.IsoCode 

> - SD - Risolto il problema riguardante la creazione di multiple Registrazioni di magazzino al momento del doppio click del pulsante Stampa nella creazione di un DDT di vendita (#TT01050/21) 

> - SD - Remove SalesInvoice user check at standard Fiscalization(#TT01262/21) 

> - QY - Controllo articoli- Memorizzazione date di inizio e fine prova con dettaglio valori di hh-mm-ss 

> - FI - Liquidazione iva annuale- revisione totalizzazione iva acquisti sospesa e giro iva sospesa di anni differenti 

> - MPS - Schedulazione generale- La modifica del tipo Approvvigionamento nella Commessa non veniva considerato (#TT2801/20) 

> - MES - Segnalazione di Produzione- Problema nella proposizione dei materiali da consumare; non veniva correttamente gestito il caso di ultima fase produttiva e movimentabile tra le fasi di lavoro dell’ordine di produzione (#TT694/21) 

> - SCS - Rientri- Risoluzione anomalie di evasione e dichiarazione quantità prodotte negli Ordini di produzione collegati.(rif ticekt TT00903/21) 

> - PROTOTIPI- Corretta la funzione Ricalcolo Costi che viene lanciata tramite l'omonimo bottone all’interno dell’anagrafica prototipi 

> - MES - Ordini di produzione- Anomalia durante l’eliminazione di una Fase esterna. 

> - WM - Creando un profilo form nella maschera di Dettaglio movimenti nel menu Registrazioni, è possibile ricercare gli articoli dopo il doppio click nell’apposito campo (#TT1105/21) 

### Patch 545.1-0013- 15/04/2021 


> - WM - Correzione del lancio Differenze Inventariali (#TT1077/21) 

> - WM - Report Multipli- Modificato report in modo che stampi ordinato per priorità 

> - Update schema for BizLink parser PayrollExport 

> - FI - Registrazioni contabili- revisione calcolo riga con tipo importo ‘Imposta detraibile’ 

> - SD - Report Ordine cliente- Modificato totale merce in modo che tenga conto anche degli sconti finali oltre che a quelli di riga 

> - FI - Report Bilancio D’esercizio a sez. Contrapposte- Modificato subreport Costi/Ricavi in quanto non faceva la somma corretta 

> - SD - Report Bilancino di fatturazione- Aggiunti subreport che riportano le spese e il riepilogo iva 

> - MPS - Schedulazione generale- Le commesse con Approvvigionamento di Acquisto non venivano schedulate (#TT974/21) 

> - ARM - Restrizioni- Risolto exception all'apertura con doppio click della Filter Expression della restrizione (#TT02080/20) 

> - PR - -Cash flow- Revisione calcolo ordini fornitori per UM alternativa (#Ticket 611/21) 

> - FI - Riapertura assestamento- revisione gestione data inizio competenza delle operazioni di rettifica (#Ticket 2930/20) 

> - CRM - Newsletter -problem with newsletter when distribution list has more than 50 members- extend limitation 

> - BizLink - Importazioni on Demand- Realizzata importazione degli ordini clienti da file Excel (#TT0969/21) 

> - SH - Fluentis Query Studio- Sql syntax highlight parser fix 

> - SD - Progetti- Nella creazione interventi, il cambio data intervento va ora ad allineare la data delle spese. Revisione della creazione cedolini paghe per conteggiare le spese per intervento legato all’attività 

> - SCS - Righe di Ordine conto lavoro parzialmente evaso- l’evasione parziale delle righe da Rientri ora setta correttamente il CLOA_FlgEva permettendo di evadere le quantità non ancora evase e visualizzando l’ordine di conto lavoro in analisi disponibilità. 

### Patch 545.1-0012- 08/04/2021

> - Fix Rollback Unload SalesDeliveryNote\SalesInvoice- open WarehousePosting problem(ref ticket 2333/20) 

> - FI - Bilancio esercizio- Quando l’anno precedente è bisestile, il filtro ‘a data’ 28/02/yyyy viene impostato come 29/02/yyyy-1 

> - FI - Libro giornale- Corretto script report che andava ad arrotondare i decimali quando veniva fatto il riporto dopo una stampa definitiva 

> - SD - Report lista ordini/fatture- modificata percentuale iva, se nulla visualizza il codice 

> - SCM - Report lista ddt/fatture- modificata percentuale iva, se nulla visualizza il codice 

> - SCM - L'ordine delle righe articolo risultanti dalla procedura di creazione automatica ordini fornitori è uguale all'ordine delle righe articolo dell'ordine cliente corrispondente (#TT00120/21) 

> - Crm - Newsletter- in alcuni casi l'immagine viene aggiunta come allegato invece di essere incorporata- aggiungere un nuovo flag per consentire all'utente di scegliere se l'immagine deve essere incorporata 

> - FI - Partite- view fluentis.CA_PartiteMaturities, revisione trigger di insert (#TT00608/21) 

> - Dichiarazione attività per progetto- il valore del campo Progetto viene proposto dopo aver usato la procedura Salva&Nuovo. 

> - SH - evasione ordini- revisione gestione stringa riferimenti ordine per utenti con lingua it-CH(ref ticket TT01040/21) 

> - CO - Report riclassificazione valorizzazione- modificato report in quanto se fatto confronto con altra riclassificazione non sommava gli importi corretamente 

### Patch 545.1-0011- 02/04/2021
 
> - SD - Ripristino del pulsante nella ribbon bar RIPRISTINA DDT in caso di rollback scarico DDT da magazzino (#TT00927/21) 

> - FI - Libro Giornale- Sistemato riporto dare / avere in quanto calcolava anche la riga della pagina successiva 

> - FI - Estratto conto- Risolto problema stampa in cui le cross band line andavano da una pagina all'altra sovrascrivendo l'intestazione 

> - BI - Vista OC ordinato- Risolto problema vista ssas_oc_ordinato, ricreato l’alter view impostando il formato UCS-2 LE BOM 

> - WM - Aggiornamento della colonna Totale importo dopo l'inserimento della Quantità gestionale, nelle Registrazioni di magazzino (#TT899/21) 

> - PROTOTIPI / Duplica prototipi- corretta la duplicazione dei prototipi riportando i costi corretti e le fasi di lavoro (#TT00639/21) 

> - SCM - Fatture acquisto- ricalcolo Cdc al cambio aliquota iva negli articoli(rif #TT00786/21) 

> - SCS - Rientri di Conto Lavoro- Registrazione Rientri- corretto la registrazione dei rientri in caso di riga articolo rientrato con quantità zero. Per la gestione dei resi non lavorati ora è possibile caricare a magazzino i materiali rientrati con quantità maggiore di zero (rif #TT00879/21) 

> - SD / varianti di un articolo inserito nella struttura del progetto- se l'articolo, inserito come "articolo codificato" all'interno del progetto, ha collegate le varianti, al momento della ricerca vengono mostrate solo le varianti presenti per l'articolo specificato (#TT00794/21) 

> - BI - Riclassificazioni- Revisione totalizzazione conti per sottoconti con saldi in divisa 

> - Crm - Newsletter- merge fields of Newsletter Template are not working- when a template with merge fields was used in the Newsletter form, fields used in the template were not loaded 

> - SD - Fatture di Vendita- XML della fatturazione elettronica, nel tag Allegati del file XML vengono inseriti tutti gli attachment che hanno prefisso Allegato_, è stato inserito questo vincolo per dare una regola di quali file mettere negli allegati tra tutti quelli collegati alla fattura. Importante non allegare file di dimensioni superiori ai 4.8 MB, meglio se molto più piccoli, in quanto lo SDI scarta i file con dimensioni superiori a 5 MB (#TT0678/21) 

> - WM / Registrazioni di magazzino legate al progetto- nel campo "progetto" della registrazione di magazzino, è possibile collegare la wbs del progetto. Il numero del progetto viene quindi visualizzato in tale campo e il dettaglio del progetto si visualizza del campo "progetto" in testata (#TT00881/21) 

> - FI - EstrattoConto- Fix previous year balance calculation when stating period changement is performed without validation 

> - SCS - Ordini di Conto Lavoro- Se l'ordine è di tipo Aperto, in evasione ordini nei rientri, verranno visualizzati gli ordini confermati con righe ordine stampate, mentre se l'ordine è di tipo Chiuso, in evasione ordini saranno visualizzati gli ordini stampati e confermati (#TT0851/21) 

> - SD - risolto errore nella funzione di conferma della richiesta ferie 

> - SCM - Correzione dell’inserimento della WBS di progetto nelle righe articolo di una richiesta di acquisto (#TT00780/21) 

> - MPS Schedulazione Generale, I parametri vengono salvati dopo la prima esecuzione (#TT02239/20) 

> - CO - scritture integrazione- add return after calling the custom stored 

### Patch 545.1-0010- 26/03/2021 

> - SD - Fix SalesOrder- disabled tab Linked doucments (#TT02333/20) 

> - FI - Estratto conto- Risolto problema stampa in cui le cross band line andavano da una pagina all'altra sovrascrivendo l'intestazione 

> - SH - BusinessDocument-allow DocumentTyper change for lots in the same warehouse.(ref ticket 2891/20) 

> - SD - Offerte- Anomalie sulla generazione/associazione prototipi.(rif ticket 897/21) 

> - WM - Scarico UDC- time optimization for loading unit unload (#TT0246/21) 

> - BI - Fix format field refresh 

> - CO - Comparazione riclassificazioni controlling- revisione inserimento righe di impostazione con anni differenti 

> - CO - Valori di controllo- revisione scheda ‘Valori revertiti’ 

> - WM - Anagrafica Articoli (Pharma)- Fix visualizzazione Forma Galenica all'interno degli articoli (#TT828/21 ) 

> - SCM - Creazione automatica Ordini- Creazione da Ordine Cliente, ora la descrizione riportata nell’ordine fornitore è la descrizione di anagrafica dell’articolo (#TT03156/20) 

> - SD - Filtro di ricerca- risolto exception all'apertura della lista articoli nella lista della ricerca documenti (#TT0#TT00497/21) 

> - SD - Dichiarazione attività di progetto- modifica gestione data riferimento spese in inserimento manuale attività, revisione gestione flag ‘da rimborsare’ per ore viaggio nella creazione attività da interventi 

> - Crm - Newsletter- Email address visualization on newsletter- check if contact reference has Email and display it, otherwise, display the Email from the contact. TT00674/21 

> - Crm - Newsletter- Email Subject on newsletter- change the old load with the new load and also fix the business object name. TT00677/21 

> - Scs - Ordini Conto Lavoro- nelle righe ordine il codice IVA viene proposto tenendo conto delle dichiarazioni di intento (#TT083/21) 

> - CO - make chiusure- When company works with controlling, then we add cdc rows at 0 for the accounts that are set 'not used in controlling' and have 'balancing timing' set (#To manage in balancing when running 'elaborazione periodi') 

> - ARM- Fix Documentation Stakeholders  form 

> - CO - Mid-Year Closures- call stored procedure when Print or Preview is invoked- call stored procedure when flag Recalculate is true or false 

> - Portal - Fix for popup- release object before closing popup 

> - FI - Contab. riapertura assestamenti- revisione gestione date competenza 

> - CO - Report consuntivo di progetto- revisione procedura calcolo 

> - SD - Sprint- changes in Sprint-  

>> - Display message when sprint range is longer than the range from sprint type 

>> - Display more fields in sprint grid 

>> - Fix filtering by contact for resource activities 

>> - Fix Status for read only Sprint 

>> - Add new default sprint type parameter in Project parameters 

> - Add GroupBy for tag CodVoceUfficiale on fBizLink flow PayrollExport 

> - SD - DDT- le righe articolo con quantità 0 non vengono considerate nell'evasione DDT in fattura e lo stato del DDT viene calcolato considerando solo le righe con quantità diversa da 0.(rif ticket 2956/20) 

> - PR - Gestione liquidità- Abilitazione salvataggio righe senza sottoconto e revisione ordinamento colonne 

### Patch 545.1-0009- 19/03/2021 

> - SD - sistemati report stampe multiple 

> - SCM - sistemati report stampe multiple 

> - SD - Riferimento fattura in ricerca DDT con valorizzazione (#TT#TT00649/21) 

> - SD - Dopo l'evasione da ordine, le righe degli articoli nota nel DDT/fattura non riportano l'IVA della dichiarazione d'intento del cliente, se presente (#TT#TT00758/21) 

> - SCM / Widget Progetti FA- il progetto collegato agli articoli della fattura, riporta in tutti gli articoli la wbs e la descrizione (#TT00735/21) 

> - SD / tab Risorse Progetti- corretto l'errore che restituiva premendo il bottone Nuovo ed eliminando una risorsa (#TT00778/21) 

> - SCM /Widget progetti in RDA- il progetto collegato agli articoli di una RDA, riporta in tutti gli articoli la wbs e la descrizione (#TT00780/21) 

> - SD - Listini Vendita- Gestione listino, risolto ordinamento righe scaglioni in ordine crescente per quantità a valore (#TT#TT00396/21) 

> - SD - Fatture di Vendita- Calcolo scadenze- Se l'imponibile degli articoli risulta minore alla somma degli imponibili riportati nelle righe pagamento di testata, viene bloccato il ricalcolo delle scadenze (che risulterebbero anche negative) e dato un messaggio che invita l'utente a cancellare le righe pagamento riferite ai DDT lasciando solo righe a % (#TT0399/21) 

> - WM - Duplica articoli- in fase di duplica articoli con i parametri MRP, viene riportato, se attivo, il flag "Proposta Ordini Pianificati senza crearli (#TT00776/21) 

> - FI - nella visualizzazione Bilancio, gestione del link al livello dei conti per visualizzazione descrizioni in griglia 

> - FA contab. changed a condition to assing account for 'Fatture da ricevere' instead of supplier account only when template is 'no vat' (and there's as before the flag 'Fatt. da ric.' in invoice type) 

> - FI - Contabilizzazione ammortamenti- Revisione rollback contabilizzazione, notification error 9124/2021   

> - SD - export SDI- fix format in DatiTrasporto_DataOraRitiro- if in tag dataoraritiro the hour is with . change with -, so instead of 00.00.00 change in 00-00-00   

> - SCM - Ordini fornitori e DDT di acquisto- Risolta eccezione generata muovendosi tra le righe di un ordine fornitore o di un DDT acquisto (#TT0473/21) 

> - PR - cash flow- changes for 'Gestione liquidità'- soluzione in patch 545.009 

> - Crm - campain- Optimize Campaign;  Add email send date in campaign contact pop-up  

> - Portal - Fix for popup (revisione duplicazione anagrafiche)- soluzione in patch 545.009 

> - FI - posting- crash at save for refactor db- error RiffFatt- soluzione in patch 545.009 

> - FI - advances accounting- template for second automatic posting, now taking same template as the one used in contab. distinta; if null then uses template from combo  

> - FI - advances accounting- value for this second automatic template is checking if template that opened partita had movement type 'split payment', in order to compare payment to invoice origin value (without vat) instead of looking at total invoice (with vat) Split payment invoices has maturities without vat inside  

> - SCS - Listini Conto Lavoro- Risolta eccezione con le selezione multipla da help articoli (#TT0680/21) 

> - FI - Calcolo interessi- modifica label  

> - QY - Problema generazione Movimenti Controllo Qualità 

> - FI - Gestione Liquidità- Modifiche alla gestione livelli autorizzativi  

> - FI - Distinte di anticipo- Revisione calcolo totale distinta (#Ticket 137/21) 

> - BI - Risoluzione bug problema Olap, cambiando profilo, non veniva fatto il refresh della tabella 

> - BI - fix Bilancino report filter form opening (#Ticket TT00731/21, 446/21) 

### Patch 545.1-0008- 11/03/2021 

> - Revisione gestione del blocco creazione effetti senza abi/cab 

> - SD - Impostato formato europeo di data e ora per riferimento DDT dopo l’evasione in fattura (#TT00693/21) 

> - SD - Fatture di Vendita- Calcolo scadenze- rivisto il calcolo delle scadenze e la proposta dei tipi pagamento nella creazione fatture da DDT. Se i DDT hanno tutti lo stesso tipo pagamento nella fattura non vengono riportati i pagamenti con imponibile, iva e spese, ma viene inserito il tipo pagamento a percentuale, in questo modo aggiungendo/cancellando/diminuendo valore nelle righe fattura (storno acconti, spese aggiuntive non di incasso, ecc..) il calcolo delle scadenze avviene sempre considerando il tipo pagamento in %. Se invece la fattura viene creata da DDT con pagamenti diversi viene aggiunta la riga con il pagamento di anagrafica del cliente e il 100% per tutte le modifiche fatte in fattura che porta l'imponibile degli articoli + spese ad essere maggiore alla somma degli imponibili riportati nelle righe pagamento di testata, se però l'imponibile degli articoli risulta minore alla somma degli imponibili riportati nelle righe pagamento di testata, viene bloccato il ricalcolo delle scadenze (che risulterebbero anche negative) e dato un messaggio che invita l'utente a cancellare le righe pagamento riferite ai DDT lasciando solo righe a % (#TT0399/21) 

> - ARM- Fluentis Query Studio- use command timeout from configuration File 

> - CRM - changes for Campaign 

> - SD - Listini Vendita- Procedure- Creazione listini vendita- Modificando il tipo arrotondamento da utilizzare viene aggiornata la griglia degli articoli applicando l’arrotondamento corretto (#TT0749/21) 

> - Solved problem with ShiwftCode on Sepa Export 

> - PR - la creazione file Sepa dei bonifici fornitori ora verifica la presenza del codice unico cliente in tabella società e non il codice Sia non più utilizzato nel tracciato 

> - SD\Scm- Set ItemCustomer\ItemVendor at multiple insert from Help (#TT753/21) 

> - Pite> - CO - add description to payment list 

> - FI and > - PR - ‘Calcolo dati paghe’ ;  notifications 7942/2021 and 7945/2021 ; changes for 'Gestione liquidità' 

> - SH - create new year CH- fixed account group for synthetic account '1850' 

> - gestione nuovo extra-data di testata fattura codificato come ‘DatiFattureCollegate‘, per valorizzare IdDocumento alfanumerici 

> - SD - Modificare report Fabbisogno materiali- Aggiunta considerazione variante 

> - FI - add group conditions in declaration of exemption amount 

> - SCM \ Creazione FA da ricevimento merci- miglioramento della procedura di creazione di fa da ricevimento merci quando il numero di righe di ricevimento è elevato nel caso in cui l’articolo è collegato ad un listino con molti articoli ( #TT00738/21) 

> - CRM - changes for Campaign 

> - Prototipi/ Modifica componenti- possibilità di modificare/sostituire componenti con quantità decimale (#TT00638/21) 

> - SCM - Impostato formato europeo di data e ora per riferimento DDT dopo l’evasione in fattura (#TT00693/21) 

### Patch 545.1-0007- 05/03/2021 

> - Qualità- Tipi Esito- Rinominata la voce del dizionario Risultati in Esito 

> - Qualità- Creazione automatica Azione correttiva da Reclamo e Non conformità 

> - SD - Sistemato calcolo scadenze nelle fatture generate da DDT (ref ticket 399/21) 

> - WM - Carico SN- in DDT acq, quando viene caricato solo con il flag un SN senza utilizzare la procedura, in anagrafica del SN caricato, veniva visualizzata una riga vuota (#TT00298/21) 

> - Solved problem with State Navigator 

> - WM - Anagrafica Lotti- visualizzazione di tutti i movimenti di carico e scarico precedenti all'ultima data di chiusura, per avere una tracciabilità (#TT00582/21) 

> - FI - Stampa Liquidazione IVA Annuale, registro iva sul quale stampare e aggiornamento opzionale del numero pagine (#TT00197/21) 

> - FI - show period at printing 'vat registry' and 'periodical vat settlement' in definitive 

> - SD - Revisione aggiornamento dati liquidazione agenti dopo cancellazione righe nella scheda ‘pagamenti avvenuti’ della liquidazione stessa(#TT#TT00066/21) 

> - SD - Impostato blocco salvataggio fatture se presenti righe articolo con numero riga \< 1 (#TT00571/21) 

> - SD / OC, DDT, FT- quando si annulla un documento di vendita (ordine, ddt o fattura) gestito a lotti e SN, i lotti e SN collegati tornano disponibili per gli altri documenti (#TT00225/21) 

> - SCS - report Liste ddt- sistemato il layout e impostato l'ordinamento per tipo ddt, numero e fornitore(#TT00575/21) 

> - SD - Riferimento fattura in ricerca DDT con valorizzazione (#TT#TT00649/21) 

> - FI - Modifiche allo xaml della maschera dipendenti per gestione personalizzazioni 

> - FI - Creazione file certificazione ritenute 2021, revisione ordinamento righe 

> - SD - Calcolo Pesi e Colli- Il calcolo è dato dal peso e volume dell'anagrafica dell'articolo moltiplicata per la quantità espressa nella UM gestionale dell'articolo ( potrebbe essere la UM principale dei documenti o la UM alternativa o nessuna delle due); Se le UM utilizzate nel documento non sono la UM gestionale dell'articolo viene dato un messaggio che il calcolo del peso non sarà completo (ref. ticket #TT00592/21) 

> - ARM- fix duplicated rows in ARM.[GLB_BizLinkUserConnections] (#TT00653/21) 

> - SCM - Listini Acquisto- Gestione listino, risolto ordinamento righe scaglioni in ordine crescente per quantità a valore 

> - FI - Modifiche procedura calcolo ore per Cedolini dipendenti 

> - CO - revisione modello di riclassificazione per gestione campo tipo saldo 

> - FI - revisione gestione contabilizzazione fatture da file acquisto Sdi (nuovo parametro di visualizzazione impostazioni, memorizzazione delle impostazioni dei conti associati a righe articolo non codificate)- TT00559/21 

> - CO - la chiusura infrannuale ora accoda alla lista dei conti non utilizzati in controlling anche quelli del piano dei conti che non sono stati utilizzati nel periodo 

> - CO - rilascio report standard del 'Consolidato di progetto' (#TT00128/21) 

> - Nel calcolo indici del controlling, revisione calcolo numeratori fissi/variabili e denominatori (#TT00643/21 e TT00642/21) 

> - SD - fatture immediate non conformi SDI in caso di presenza dal campo data inizio trasporto e ora inizio trasporto(#TT00634/21) 

> - FI - nell'help partite degli effetti, rimosso il filtro per divisione 

> - SCM - Importazione prezzi fornitori- se nei parametri della procedura di importazione prezzi fornitore- 

>> - È inserito un codice articolo fornitore diverso dal codice interno, il codice articolo fornitore verrà inserito nei fornitori preferenziali  

>> - è inserito un fornitore per la creazione del listino viene utilizzato quel fornitore e  non il fornitore preferenziale degli articoli da inserire nel listino 

>> - è inserita la classe viene utilizzata con priorità per la creazione degli articoli   

>> - è inserita la UM Articolo viene utilizzata con priorità per la creazione degli articoli 

>> - è inserita la UM Prezzo viene utilizzata con priorità per la creazione dei listini  

> - La categoria di sconto dell’articolo fornitore deve essere inserita obbligatoriamente nel file Excel (#TT0605/21)  

> - FI - IBAN code- test del codice con un warning invece di un errore se non esiste un algoritmo di test per la nazione dell’iban stesso, es. Egitto (#TT00672/21) 

> - CRM - new changes in campaign 

> - PR - Errore quando si modifica il cambio nella riga selezionando una partita prima del salvataggio della distinta di pagamento (#TT00683/21) 

### Patch 545.1-0006- 25/02/2021 

> - FI - visualizzazione conti bug (#TT00323/21) 

> - SCM - Creazione Ordini fornitori da ordini clienti- il filtro di ricerca degli ordini clienti considera correttamente lo stato degli ordini clienti (#TT02887/20) 

> - PR - filter in help scadenze in gestione anticipi and incassi (#TT03079/20) 

> - SDI- Corretto problema nell’importazione e visualizzazione di fatture elettroniche di acquisto in formato .p7m 

> - PR - revisione dell’help scadenze all’interno delle distinte di anticipo (#TT03079/20) 

> - PR - remove a filter in help partite from effetti for Ro 

> - FI - Calcolo dati paghe 

> - SD - Sistemato calcolo scadenze nelle fatture generate da DDT (ref ticket 399/21) 

> - FI - Update trasformation dich. D'intento (#Ticket- #TT00587/21) 

> - CO - New report for 'consolidato di progetto' (#TT00128/21) 

> - SD - Listini di Vendita- Risolto problema di duplica righe sconto se si salva senza spostarsi di cella (#TT00466/21) 

> - SD - Modificato report lista fatture con spese bollo 

> - SCM - Carico DDT e Fatture- Risolto calcolo costo articolo magazzino con spese ripartite (#TT055/21) 

> - SD - SalesOffer with Linked documents- convert into SalesOrder(ref ticket 279/21) 

> - PR - nella form di contabilizzazione anticipi incassi sono stati aggiunti i totali delle righe selezionate e visualizzate (#TT00380/21) 

> - CRM - changes in Campaign 

> - CO - revisione visualizzazione indice percentuale di centro nelle comparazioni del controlling 

> - SD - Sdi sales invoice file creation and 'Cassa previdenza' changes( 332/21) 

> - MES - Ordine di Produzione Verticalizzazione Pharma- sistemata visibilità cliente nella form di gestione (398/21) 

### Patch 545.1-0005- 19/02/2021 

> - Amm- Sitemato report Verifica Dich. D’Intento in modo che stampi correttamente il rif. Identificativo anche se non c’è il flag gruppo IVA attivo 

> - FI - wrong account at maturity compensation 

> - SH - fix on search Anaf by fiscal code- romanian site 

> - SD - Fix LoadPlan -insert SalesOrder error(ref ticket 468/21) 

> - Solved problem to import Movimenti controlling  

> - Solved bug to export Riba for Sida code 

> - MES - fix grid materials on opening production order in read only 

> - SD - Duplica e Manutenzione Listini di Vendita - Aprendo due procedure Duplica e Manutenzione Listini di Vendita, i campi del filtro di ricerca vengono correttamente visualizzati (ref. ticket 475/21) 

> - SD - SalesInvoiceMaturity-fix Total 0 problem(ref ticket 442/21) 

> - SD - Sistemato calcolo scadenze nelle fatture generate da DDT (ref ticket 399/21) 

> - SD - a new state for intervention called "Sospeso" (#TT00510/21) 

> - SD /Ordini di vendita- corretto l'inserimento di una riga tipo Spese che porta il totale dell'ordine a zero (ref ticket  472/21) 

> - FI - solve error in fixed asset posting (#TT00506/21) 

> - SH - filter Banca in form Anagrafiche contatti (#TT00422/21) 

> - CRM -  check FSTask -> Subject length 

> - CRM -  check PipelineStage 

> - CRM -  KanBan- check SalesInvoiceNature is CreditNoteToClient 

> - CRM -  Campaign filter- remove from date proposal 

> - SD - Gestione progetti- Corretto malfunzionamento funzione di conferma richiesta ferie 

> - Change stereotype in Richieste Ferie/permessi 

> - FI - la creazione della registrazione da file Sdi con parametro di data registrazione ‘Ultima introdotta’, ora va a verificare l’ultima data utilizzata per il registro iva della causale impostata/di default 

> - CO - allineamento tecnico tabella prima nota movimenti fisici controlling 

> - CO - new check-box 'Working hours management for project' in form 'Ripresa dati da produzione' 

> - FI - Raggruppamenti partite 

> - FI - changes for CH localization 

> - FI - Calcolo dati paghe 

> - SD - fix delete FSSalesJobOrderResourceActivity 

> - PR - fix crash creazione automatica pagamenti fornitori 

> - Foundry- Rivisto esportazione prototipi (#TT0513/21) 

> - per localizzazione svizzera, gestione del regime iva in contabilizzazione fatt. Acquisto/vendita 

> - CRM - changes in Campaign 

> - FI - stampa liquidazione iva periodica per aziende con tipi attività iva multipli, revisione totali finali 

> - SD - Anagrafica agenti- dettaglio provvigioni- risolto exception all’inserimento della data inizio validità del dettaglio provvigioni (ref. Ticket 528/21) 

> - SH - add virtual for custom purpose in reversal window 

> - SH - fix unique key exception in categoria cespiti 

> - Form Evasione- Se si seleziona la riga da evadere propone la quantità da evadere se si toglie la selezione toglie la quantità da evadere (#TT0454/21) 

> - SD - Duplicazione Offerte- risolto la duplica del check "Prezzo Manuale" (#TT0178/21) 

> - CRM - changes in Campaign 

> - SD - Storno Fattura- Risolto la possibilità di modificare gli extradata nelle fatture di storno (#TT0356/21) 

> - SCS - Righe parzialmente evase- la riga non risulta essere evasa, il campo CLOA_FlgEv \= 0 

### Patch 545.1-0004- 12/02/2021 

> - BI - Set default decimals to 4 for Action parameter of Decimal type(#TT01266/20) 

> - SH - tab for interests inside bank nomenclature is not working properly- when inserting a row in right grid for passive interests, then it inserts in left too 

> - SD - project- allocated days not calculated right at save project 

> - FI - increase dimension of CASA_Utente (#TT00369/21) 

> - SH - SQl query export to grid- prevent column headers from being copied (#TT00390/21) 

> - FI - revisione rollback per cespiti con ammortamenti fiscali 

> - Nell'evasione ordini fornitori in bolla e fattura di acquisto, revisione valorizzazione aliquota iva per dichiarazioni di intento 

> - Solved problem about decimal separator on out SSD file 

> - Update schema for parser PayrollExport 

> - ARM- Custom Project Documentation- add Sql Trigger and Stored Procedure to Document reference types 

> - FI - increase dimension of RifIdentificative, ReferenceProtocol1 to 17 chars (#TT00434/21) 

> - PR - Cash flow planning (#TT00005/21) 

> - CRM - enable SQL Query for document template 

> - CRM - KanBan- convert all currencies to euro 

> - FI - changes for 'calcola dati paghe' 

> - CRM - add target currency 

> - CRM - limit width for activity description 

### Patch 545.1-0003- 06/02/2021 

> - FI - Spesometro 2017 and Fatturazione elettronica con soggetti non residenti (#TT00305/21) 

> - SD - time improving in Dichiarazione attivita per progetto 

> - ARM- Documentazione Progetti Custom- Add “Arm User" column property for Stakeholder and “Additional description” property for Document Reference; 

> - CRM - solve bug in contact note (Application exception- 2610/202) 

> - FI - revisione creazione riepiloghi cedolini paghe (#TT00317/21) 

> - SD - validity filter in project help (#TT00325/21) 

> - SD - Fix SalesDeliveryNote Valorization problem(#Ticket 293/21) 

> - Fix MPSDefinition problem. 

> - PR - problem at export bonifici for RO IMP 

> - FI - FEC file creation (#TT00185/21) 

> - CRM - Improve a advanced filter on Crm periodic Report (rif #TT00280/21) 

> - SD - Note di rilascio- nelle fatture di vendita, gestione calcolo ritenuta su tipo spesa con flag cassa previdenza e soggetto ritenuta impostati (rif #TT00331/21) 

> - FI - error at creating postings from Sdi file 

> - SD - Expenses retrieval problem in Intervention 

> - CRM - fix type conversion 

> - SD - in "dichiarazione attivita for progetto" propose info from ticket (#TT00349/21) 

> - PR - add new parameter on export Pite> - CO - filter by company 

> - SD - Lunghezza descrizione di Ordini vendita,bolle, fatture e progetti- eliminato il limite della lunghezza di 255 caratteri nella descrizione articolo (rif #TT00173/21) 

> - CRM - Kan Ban filter data from multiple companies 

> - FI - procedura F24 per Dicembre 2020 non calcola di dati (#TT00103/21, TT00167/21) 

> - CRM - move Various group in contact tab;  fix condition 

> - Corretto tracciato xml fattura elettronica che non veniva valorizzato correttamente nella sezione Sconto / Maggiorazione in presenza di imposta di bollo non riaddebitata 

> - CRM - Campaign -  add contact reference in help widgets; propose contact reference when inserting new campaign contacts 

> - SD - changes for SAL (filter only by account); add more properties in the widget's grid 

### Patch 545.1-0002- 01/02/2021 

> - PR - fix for custom purpose 

> - FI - Fix behaviour on preinsert and preupdate declaration of exemption- save only on succes 

> - ARM- Add motivation and note to dataprovider 

> - ARM- Custom Documentation Project- Deploy Object forms for ProjectItem and ProjectDocument 

> - FI - Modificato report estratto conto in quanto nell’ultima pagina non riportava il saldo corretto 

> - FI - revisione apertura partite in registrazioni iva per sottoconti differenti da quello intestatario della registrazione 

> - FI - Sistemato errore di timeout nelle Dichiarazioni di intento (#TT00208/21) 

> - FI - nel report di verifica dichiarazioni di intento, visualizzazione del dato inserito in registrazioni contabili manuali 

> - FI - gestione della contabilizzazione compensi con flag provvisoria (#TT00239/21) 

> - Modificato report dettaglio anagrafiche in quanto non riportava il numero di cellulare e la p.iva correttamente 

> - FI - rilascio modifiche CU2020 

> - SD - time proposal in request and planned intervention 

> - Dati Articolo/Progetto- per ogni livello del progetto inserimento del numero della WBS e della descrizione.(rif #TT00051/21) 

> - SD - Change description length for SalesOrderItem, SalesDeliveryNoteItem, SalesInvoiceItem, SalesJobOrderItem (rif #TT00173/21) 

> - SD - improve time at saving project 

> - SD - Modificato report Stampa fatture di bollo, aggiunto contatore per il numero di fatture 

> - FI - Esterometro error 

> - SD - Nel momento dell'evasione OC in un DDT viene mantenuto il conto di ricavo in base al tipo contab. articolo (configurazione che viene fatta nel tipo fatturato vendita) se non è impostato il ricalcolo trasporto nei parametri DDT (ref #TT00200/21) 

> - CRM - add document grid in campaign email pop up 

> - CRM - new features for modal- localized ok and cancel button, full screen capability 

> - CRM - changes for mail merge in rich edit 

> - CRM - add new email popup for campaign add interaction for getting html from rich edit content 

> - CRM - update project computed fields when changing (FSService, FSPlannedIntervention, FSSalesJobOrderResourceActivity) 

> - MES - Ordini di produzione- Generazione Lotti da Lotti maggiori di zero (223/21) 

> - FI - FEC file creation (#TT00185/21) 

> - CRM - in budget, not filter UM combo by time + crash in campaign, when the period is not set 

> - SD - valorizzazione interventi (#TT03276/20 and TT03279) 

> - CRM - Improve a advanced filter on Crm periodic Report (rif #TT00280/21) 

> - File SDI in entrata- controllato che la lunghezza file non superi il valore presente in documentazione tecnica (#TT03112/20) 

> - Foundry - Prototipi Getti- risolto exception al salvataggio del prototipo 

> - SD - risolto errata numerazione Fatture di vendita (#TT0216/21) 

> - SD - add green color for rows that are linked in request intervention or planned intervention (planned intervention must be linked to service or activities) 

> - SD - filter linked resource grid by selected resource from sales job order item resource 

> - PR - problema distinte di pagamento 

> - IT- new row in IT_Stato 

### Patch 545.1-0001- 26/01/2021

> - SD - Nelle fatture di vendita, gestione riferimento al dettaglio dichiarazione di intento su spese d'incasso (#TTTT00097/21) 

> - CRM - phone calls import (#TT00001/21) 

> - errore in contabilizzazione- user too long- (#TT00048/21) 

> - update project computed fields when changing (FSService, FSPlannedIntervention, FSSalesJobOrderResourceActivity)  

> - SD - nel report provvigioni maturate, il campo 'Data scadenza' riporta la data della scadenza e non più la data fattura anche nel caso di agenti con maturazione su 'Fattura emessa' (#TTTT00230/21) 

> - WM - Liste UDC- bug fix per visualizzare codice lotto dopo help UDC (3197/20) 

> - SD - check mandatory type fields at save interventions 