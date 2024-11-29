---
title: Patch notes Versione 707
sidebar_position: 1
---

### Patch 707.1-0009 - 21/11/2024
> - ARM – migration F2021-F2023 - manage parent/children properties/parameters in stand alone custom objects
> - FI - stampa controllo cespiti, revisione segni conti dei fondi ammortamento (#TT04667/24)
> - SH - Corretto problema di visibilità e salvataggio valori degli extradata nella form dell’anagrafica agente. (#TT04860/24)
> - FI - visualizzazione conti, ora è possibile filtrare con entrambi i flag ‘ da riconciliare’-‘riconciliati’ attivi. (#TT04836/24)
> - CRM - L'Offerta creata dall'interno dell'anagrafica di un Contatto CRM, riporta correttamente i Destinatari dell'anagrafica contabile collegata al contatto (#TT04831/24)
> - Schedulazione eventi con Task che usano la Sessione (#TT04732/24)
> - QY - Azioni correttive - Sono state implementate nuove informazioni descrittive:  "Verifica efficacia" e "Descrizione allegati" presenti nei dati generali dell'Azione correttiva e nei Programmi di azione.(#TT03939/24)
> - SD - Risoluzione errore che non riportava la descrizione articolo nell'evasione POS in DDT; risoluzione errore che inseriva prezzo a 0 nell'evasione POS in DDT con prezzo ivato (#TT04925/24)
> - WM - Nelle liste di Trasferimento UDC ora vengono visualizzate solo le stampe con contesto = 'TransferList'. Inoltre sono stati aggiunti i pulsanti di stampa anche all'interno della lista di prelievo e di trasferimento. (#TT04654/24)
> - WM – In Duplica articoli, implementata la possibilità di duplicare anche articoli archiviati. Nell’articolo duplicato il flag archiviato e i dati di legati al flag in esaurimento non verranno riportati. (#TT04809/24)
> - Improved script editor for smoother writing
> - SCS - Ordini di Conto lavoro - Revisione della proposta prezzi di lavorazione se associata una fase di lavorazione di un Ordine di produzione.
> - La priorità di ricerca e proposta del prezzo, fermo restando la ricerca di un listino valido per Terzista, Articolo e Unità di misura, è la seguente; ricerca del Prezzo indicato per:
o	- Fase standard, Fase e Sottofase indicate nella riga Ordine;
o	- Fase standard, Fase indicate nella riga Ordine con Sottofase vuota;
o	- Fase standard indicata nella riga Ordine con Fase e Sottofase vuote;
o	- Articolo privo di Fase standard, Fase e Sottofase.
> - SCM – Corretto errore negli Ordini fornitore che non permetteva la modifica del fornitore se nel Tipo ordine era attivo il flag “Controllo fornitore” (#TT04857/24).
> - Per le società con il controlling attivo, valorizzazione della griglia dei centri di costo dell’articolo nell’analitica dei documenti d’acquisto (#TT04580/24)
> - La webapi di import dei file Sdi ora accetta un nuovo parametro “SendFromGeneratedToDeliver” che, se impostato a 1, dopo l’inserimento del file Sdi in stato ‘Generato’ fa eseguire automaticamente la transizione ‘da spedire’ sul file stesso (#TT04171/24)
> - ARM – Add ItemNature property to ArmFormContext
> - Disabled the creation of client scripts for 100% custom modules
> - MES – Corretto bug nella registrazione delle dichiarazioni di produzione. Inoltre, nel messaggio di errore della registrazione è stata aggiunta anche l’informazione relativa all’ubicazione. (#TT04826/24)
> - SH – Nel Navigatore articoli, tab Acquisti sono state aggiunte le colonne di Descrizione sconto e Sconto unitario anche per i DDT e le Fatture di Acquisto (#TT04759/24).
> - SD - Fix Exchange Rate transfer between SD documents (#TT04919/24)
> - SCM – Se nei Parametri Commesse di Acquisto il flag “Evasione obbligatoria” è attivo, al momento dell’inserimento di un nuovo ordine fornitore si aprirà la form di Evasione commesse e non sarà possibile aggiungere manualmente articoli nell’ordine senza aver prima evaso almeno una riga di una Commessa di acquisto. Il flag “Evasione articoli da commessa obbligatoria” non permette l’aggiunta di altri articoli all’ordine, oltre a quelli inseriti mediante evasione da commessa. Il flag “Quantità fissa” non permette l’evasione di una quantità maggiore rispetto a quella inserita nella commessa (#TT04508/24).
> - FI - Correzione errore creazione Intrastat dalle registrazioni ( TT04980/24)
> - PM: Introdotto negli interventi - calcolo piano di fatturazione, possibilità di gestire orari notturni, e matrice articoli per sostituzione articolo in riga in caso di extra time/orari notturni (#TT00599/24)
> - MES – Implementata e migliorata la gestione dei parametri degli ordini di produzione per quanto riguarda magazzini e causali indicati nel tab magazzini. Per tutti i dettagli fare riferimento alla guida in linea sui Parametri degli ordini di produzione.
> - FI - revisione import da DocFinance (#TT04954/24)
> - FI - searching fixed assets to perform ammortamento for interim closure generates exception ( TT04993/24)
> - SD - Shipping calendar - Add default status color for background and foreground (#TT04932/24)
> - FI - show other linked sdi documents ( sales, purchase, professional) in view account and in view VAT movements ( TT05003/24)
> - ARM – fix publish extension in ODataController (TT04973/24)
> - CO - Previsioni di vendita mensili - Blocco durante il consolidamento di una versione se un'altra versione, per lo stesso anno, è già stata consolidata(ticket #TT04573/24)

### Patch 707.1-0008 - 15/11/2024
> - SH – Inserito controllo, anche per le Varianti articolo, che impedisce l’inserimento di un Barcode uguale (#TT04624/24)
> - MES – Corretto bug nella procedura di completamento dati ordine degli ordini di produzione. (#TT04741/24)
> - SD - Nella conversione F2021-F2023, valorizzazione del campo Dimensione nei documenti di vendita (#TT04775/24)
> - FI/PR/CO/SH - allineamento tecnico - FluentisLayoutControl and BaseForm (TT04772/24)
> - SCM – Stampa lista ordini – Impostata la data di prevista consegna corretta (#TT04803/24)
> - WM – Corretto bug in analisi disponibilità inerente alla visualizzazione con dettaglio distinta base nel caso di varianti. (#TT04602/24)
> - SD - La generazione del file Sdi viene bloccata quando la data fattura è successiva alla data odierna (#TT0431/24)
> - SD - Lo step di Controllo della fattura elettronica di vendita ora testa che, per le aliquote plafond inserite nelle dichiarazioni di intento dell’anno fattura, sia stata indicata in fattura anche la relativa dichiarazione di intento da utilizzare (#TT04751/24)
> - Add Reference to HttpClient for all server side scripts
> - Risolto problema di crash quando in ricezione merci si cerca di caricare una form custom(rif #TT04820/24.)
> - Solved problem to save script on Blazor
> - Bug script in object form blazor (#TT04421/24)
> - WM – Stampa Visualizzazione Giacenze – Creato repository Method e report standard visualizzazione giacenze (#TT04755/24)
> - MS – Risolta anomalia in generazione commesse di produzione nel caso in cui si usi il tipo commessa monoprodotto e raggruppamento per articolo (#TT04806/24)
> - CPM - calculation in CPM business crisis check ( TT04735/24)
> - FI - revsione contabilizzazione fatture di acquisto e vendita per gestione UM alternativa in scheda intrastat della registrazione creata (#TT04790/24)
> -  Creazione Scripts su AlgorithmService con oggetto Custom. (#TT04776/24)
> - Attività supervisor non visualizzate correttamente - sembrano vuote ma query presente in db (#TT04552/24)
> - CO/FI/PR - Blazor - administrative area ( TT0482/23)
> - FI - nel tab intrastat delle registrazioni contabili, revisione inserimento righe in sezione quater (#TT04839/24)
> - FI/CO/PR/SH/CRM - move code from Xaml constructor to PostInitialize ( TT04723/24)
> - SH-aggiungere download ID su rapporto sdi - #TT04786/24
> - ARM – fix multi domain Active Directory import
> - PM: risolta casistica di assegnazione categoria attività fatturabile in riga progetto (#TT04718/24)
> - FI - blocco della modifica delle registrazioni automatiche (#TT04692/24)
> - PM: risolto caso di tipo intervento segnalato come duplicato, in realtà dovuto ad una validation rule poi corretta (#TT04733/24)
> - PM: progetti - risolto caso di associazione tipo intervento pianificato nella riga di progetto che non funzionava (#TT04764/24)
> - SCS – Corretto errore nella ricerca degli Ordini di Conto lavoro causato dalla presenza di un oggetto custom (#TT04819/24).
> - WM – L’assenza della Numerazione di magazzino viene ora segnalata in fase di registrazione documento mediante un pop-up con un messaggio di errore (#TT04642/24).
> - SH – autorefresh dashboards (TT04763/24)
> - CO, CPM, FI, PR - review tabs layout - administrative area ( TT04854/24)
> - Improved writing performance of script editor
> - SH - nella tabella Tipi area ora non è possibile togliere il flag ‘Default’ se il tipo area è già stato associato ad un’area (#TT04847/24)
> - PM: aggiunta possibilità di gestire la data fine 00.00 nelle dichiarazioni attività ( #TT04167/24)
> - CO - aggiunto messaggio di avviso utente quando si esegue la procedura del controlling Elaborazione periodi e nella tabella Tipo Area manca una tipologia con flag Set regole attivo. ( TT04680/24)

### Patch 707.1-0007 - 08/11/2024
> - SD – Modificata la procedura di Creazione listini avanzata: ora vengono visualizzati nella griglia solo gli articoli che hanno una formula di aggiornamento politiche prezzi/sconti e solo con la formula inserita nell’anagrafica articolo. È stata aggiunta la possibilità di filtrare per la Formula di calcolo e per il Conto a cui è intestato il listino di origine e/o di destinazione. Infine, il Prezzo precedente viene ora ripreso da un listino analogo a quello di destinazione, se presente, in modo da calcolare la percentuale di variazione rispetto al prezzo di vendita in vigore al momento dell’aggiornamento listini. Se l’articolo non è già presente all’interno di un listino analogo a quello di destinazione, il Prezzo precedente sarà 0 e la percentuale di Variazione sarà 100% (#TT03973/24)
> - ARM - Risolto bug inerente l'esportazione dati degli ordini di produzione con webapi nel formato Json. (#TT04655/24)
> - FI - nel registro dichiarazioni di intento fornitori è stato disabilitato il test di copertura sui documenti di vendita (#TT04673/24)
> - FI - Payroll calculation ( TT01772/24)
> - PM: Data inizio-fine pianificazione wbs di progetto, gestito incremento data solo se l’unità di misura corrisponde al parametro Unità di misura giorni nei parametri progetto (#TT04433/24)
> - SD – Fix Sales -load Item with big matrix problem (#TT04469/24)
> - Add reference System.Security.Crysptography  to scripts (#TT04721/24)
> - PM: planner e wbs assegnazione risorse, risolto caso di drag&drop appuntamenti in calendari di risorse diverse ed in date diverse (#TT03781/24)
> - QY - ItemControlRef AfterUpdate / ImportItemControlResult optimization
> - WMS – In carico sposta UDC corretto bug che non riportava il focus del cursore nel campo codice barcode dopo aver spostato una UDC. (#TT04724/24)
> - PM: introdotto nelle dichiarazioni attività campo articolo, che se valorizzato per una attività fatturabile, verrà utilizzato nel servizio dell'intervento. In corrispondenza di UM il prezzo verrà preso dal progetto, in caso contrario verrà preso dalle logiche presenti nei documenti business (#TT04173/24)
> - Nell’evasione ordini fornitori in bolle e fatture acquisto senza ricalcolo analitica, revisione assegnazione centri su priorità magazzini (#TT01624/24)
> - MS – Corretta traduzione del messaggio di anticipare un ordine nella procedura MRP. (#TT04704/24)
> - FI - Blazor - Sdi transition inside Comunicazione liquidazione iva  ( TT04136/24)
> - FI - esclusione visualizzazione Tiles nelle form di “Visualizzazione conti” e “Blocco partite passive” (TT04659/24)
> - FI - Visualizzazione conti di conto economico ( TT04647/24)
> - SH - Error while creating new Company in General Settings ( TT04702/24)
> - SD - Corretto errore nella ricerca delle Fatture di Vendita collegato alla presenza di fatture inviate allo SDI RSM (#TT04740/24)
> - SD - SalesInvoice-Allow execution from DDT when linked with SDI (TT04745/24)

### Patch 707.1-0006 - 31/10/2024
> - Create script to report general parameters ( TT03202/24)
> - SD - Revisione calcolo centri di costo in documenti di vendita, per valorizzazione collection FSItemCostCenter (#TT04576/24)
> - WMS - Implementato nel Barcode tokenizer anche la possibilità di gestire le collections e non solo le references. (#TT04232/24)
> - SD – Stampa CMR - Corretta stampa del CMR, non riportava sempre i dati del Mittente e i Pesi (#TT04342/24).
> - Updated trigger INSERT for SH_ObjectConfigurationVersions
> - SD - La procedura di Conversione offerta in ordine riporta l'ubicazione collegata alla causale di magazzino collegata al tipo ordine (#TT04504/24)
> - SD - Corretto problema nel calcolo delle provvigioni maturate per agenti con criterio del pagamento avvenuto ed in presenza di pagamenti parziali di partite (#TT03435/24)
> - PM: migliorato controllo presenza tipo fatturato nei servizi nel caso il tipo intervento richieda il dato obbligatoriamente (#TT04371/24)
> - SD – Il ‘Modifica prezzi’ nella procedura ‘Dettaglio righe ordini’ inserisce il flag ‘Prezzo manuale’ alla riga articolo (#TT04620/24)
> - CRM: calendario - resa possibile visualizzazione di più calendari contemporaneamente (#TT04389/24)
> - SH - revisione dei parametri di default della localizzazione hr-HR
> - MS – Corretto bug nel rilascio degli ordini pianificati di conto lavoro nel caso in cui fosse utilizzata la UM utilizzo in un materiale. (#TT04603/24)
> - SH : al salvataggio di un nuovo contatto è stato aggiunto un nuovo test che avvisa se la partita iva è già presente nei contatti Crm (#TT04386/24)
> - FI - Accounting closure only one registration exception ( TT04607/24)
> - FI - nella form di aggiornamento Versamenti ritenuta, revisione assegnazione dati delega di pagamento (#TT04529/24)
> - CO - add currency in unique key of CO_ConsolidationListCostCenters and CO_InternalClosureModelListCostCenters ( TT04649/24)
> - FI - Nella contabilizzazione fatture di acquisto, quando c’è uno storno del movimento delle fatture da ricevere è stato aggiunto un messaggio che segnala la squadratura dei centri di costo in questa seconda: la fattura diventa in stato contabilizzata, ma si avvisa del mancato storno del fatture da ricevere (#TT04275/24)
> - PM: corretto caso del calcolo prezzo extratime nel piano di fatturazione degli interventi (#TT04223/24)
> - Nella form dei documenti Sdi in uscita, aggiunto pulsante per sostituire il file Sdi presente in Fluentis ricaricando un file con lo stesso nome. Il pulsante è attivo solo per documenti in stato ‘Generata’). Nel tab di log, nell’ultima operazione di generazione, viene annotato che è stata eseguito un update manuale (#TT03920/24)
> - SCS – Corretto errore nella registrazione di un Rientro di conto lavoro dall’interno del documento (#TT04578/24).
> - WM -  Corretto bug in analisi disponibilità nel caso di ordini di produzione con articoli con tipo prelievo con lista e creazione di lista prelievo materiali. Aggiunto anche il dettagli del riferimento all’articolo padre nelle righe dei picking collegati ad un ordine di produzione. (#TT04448/24)
> - SD - New changes for Shipping calendar(#TT04449/24)
> - SD - Shipping planner filters(#TT04651/24)
> - SD – L’ordinamento dei valori (Extra Data) nelle righe e nelle colonne di una Matrice in anagrafica articolo, viene mantenuto quando si creano i documenti (#TT04599/24)
> - WM – Apportati una serie di miglioramenti al modulo spedizioni.
> - SCM – Corretto errore che non aggiornava correttamente lo stato evasione dell’Ordine fornitore nel caso in cui una parte fosse evasa in un DDT e la restante in una Fattura (#TT04612/24).
> - QY – ItemControlRefAlgorithm
> - FI - Modificata procedura controlling Valorizzazione area acquisti vendite della chiusura infrannuale. Il rollback della procedura non è più bloccato dalla stampa della liquidazione iva in definitiva per il periodo in questione, accadeva se la causale utilizzata per la valorizzazione era una causale IVA. ( TT04436/24)
> - Nei documenti di acquisto, al cambio del magazzino nelle righe, il ricalcolo dei centri di costo viene eseguito ora solo se almeno uno dei due magazzini (iniziale e nuovo assegnato) hanno impostato i centri di costo
> - SH - al salvataggio della nuova società IT, inserimento tabelle/parametri di base fisse (#TT04555/24)
> - PM: corretto caso in cui non veniva letto l'articolo per le attività fuori orari dai parametri progetto (#TT04361/24)
> - PM: interventi - risolto caso in cui ricalcolo ore servizi sovrascriveva orari inseriti dall'utente (#TT04058/24)
> - WM – Al momento della creazione di un Picking da una spedizione viene ora riportata nel picking anche la quantità contenuta nell’ordine cliente (#TT04653/24).
> - FI - la creazione autoamtica intra acquisti da registrazioni ora riporta paese provenienza e provincia destinazione (#TT04600/24)
> - SD Pos- propose Item and ItemVariant from barcode (#TT04517/24)


### Patch 707.1-0005 - 24/10/2024
> - CRM - Nella creazione di un Contatto CRM, viene controllata l’eventuale preesistenza della partita IVA anche tra le Anagrafiche contabili e, nel caso, viene avvisato l’utente con un pop-up (#TT04386/24)
> - PR - Nella creazione del cash flow, valorizzazione banca di riferimento per le righe che sono movimentate dal portafoglio effetti (#TT04224/24)
> - SD - Offerte di Vendita e Ordini di Vendita - Uso del configuratore a matrice per gli articoli (#TT01258/21)
> - ARM - Revisione gestione log di visualizzazione Business Processes (#TT04470/24)
> - WM - Corretto bug in analisi disponibilità (#TT04462/24)
> - SH - Nel fast start, gestione righe di dettaglio nella causale INCO (incasso contanti)
> - SD - Spedizione: aggiungi il numero di tracking per la spedizione in groupage
> - ARM - Aggiungi filtro per il dominio se sono presenti più controller di dominio
> - FI - Nella generazione della fattura d’anticipo da partite d’anticipo, la riga articolo creata viene associata al progetto cliente se inserito nella partita (#TT04474/24)
> - Risolto problema per nascondere la tab per la configurazione di esportazione
> - SD - La creazione delle partite di anticipo da ordine/ddt ora associa il progetto di testata documento alla partita (#TT04473/24)
> - MS - Corretto bug in Generazione commesse di produzione nel tab Previsionale che si verificava nel caso in cui fossero processate molte righe (#TT04485/24)
> - SH - Nell’anagrafica contatti, tab Listini, è stata rimossa la griglia relativa ai Listini di Vendita associati a un listino fornitore (#TT00339/24)
> - FI - Stampa libro cespiti ammortizzabili: risolto errore in fase di stampa in definitivo del libro cespiti ammortizzabili (#TT04500/24)
> - FI - Il rollback della contabilizzazione chiusura conti ora verifica se le registrazioni di riapertura sono state già inserite in scritture di assestamento successive e non consente più il rollback (#TT00896/24)
> - MES - Implementata la possibilità di stampare anche dall'anteprima di stampa (#TT04307/24)
> - MES - Corretto bug nello scarico delle dichiarazioni di produzione inerente al consumo del semilavorato prodotto nella fase precedente nel caso in cui questa fosse la prima ed esterna (#TT03883/24)
> - SH - Anagrafica Agente: corretta la copia delle provvigioni da un agente, vengono copiate tutte le provvigioni di tutte le tipologie provvigione non ancora inserite nell'agente in cui si vuole copiare (#TT04450/24)
> - FI - Apertura commissioni da contabilità fattura di vendita, risolto problema di arrotondamento (#TT02172/24)
> - SD - Nel campo Descrizione del Vettore dei documenti è possibile andare a capo in caso di inserimento vettore non codificato (#TT04369/24)
> - WM - Filtri di aiuto per Unità di Carico/Elemento di Unità di Carico - correzione per personalizzazione
> - QY - Modifiche nel controllo risultati importazione articoli
> - SD - Valorizzazione interventi valorizza correttamente parte analitica nella fattura generata (#TT04540/24)
> - WMS - Implementata nel barcode tokenizer la possibilità di gestire i barcode delle ubicazioni senza l'indicazione del magazzino all'interno del barcode letto (#TT03936/24)
> - MS - Migliorata e ottimizzata la procedura di generazione commesse di produzione da previsionale (#TT04513/24)
> - PM - Assegnazione risorse WBS, risolto caso in cui risorse senza orari predefiniti, nei documenti creati da planner la pausa veniva cancellata (#TT04424/24)
> - CO - Corretto bug nel filtro della classe articolo della procedura Calcolo costi (#TT04512/24)
> - QY - Controlli articolo - Importa articoli da controllare da Dichiarazione di produzione - corretta anomalia che visualizzava anche i lotti di consumo del semilavorato di fase (#TT04382/24)
> - ARM - Invalidazione la cache dopo unione snapshot
> - WMS - Trasformato il widget delle ubicazioni in un widget editabile in modo da velocizzare il funzionamento delle procedure nel caso fossero presenti molte ubicazioni (#TT04399/24)

### Patch 707.1-0004 - 17/10/2024
> - MS - Correzione di bug sulla procedura di schedulazione generale legati al raggruppamento (#TT04026/24)
> - Aggiunti flag agli eventi di supervisore per saltare il log e cancellare automaticamente dopo n giorni
> - PR - Revisione acquisizione effetti dalle fatture (#TT04409/24)
> - FI - Revisione contabilizzazione fatture di vendita nell’automatismo di chiusura scadenza per pagamento diretto (#TT03474/24)
> - Modificata chiave univoca per l’oggetto FSConfigurationVariable
> - FI - Revisione inserimento manuale registrazioni di budget (#TT04225/24)
> - WM - In analisi disponibilità, ora il flag "Solo negativi" presente nell'expander "Visualizza righe senza disponibilità" filtra correttamente solo le righe con disponibilità negativa (#TT04356/24)
> - CRM - Modificato calendario per utente di Fluentis, abilitata possibilità di visualizzare più calendari utente. Aggiunto negli appuntamenti possibilità di collegare contatto CRM o cliente (#TT04389/24)
> - PR - Corretta importazione file movimenti bancari dove le date registrazione e valuta banca risultavano invertite (#TT04435/24)
> - ARM - Restrittività gruppi utente: propaga flag ai figli (#TT04429/24)
> - SH - Documentale - Griglia di anteprima per file Excel resa sola lettura (#TT04151/24)
> - SD - Creazione del Picking dalla Spedizione (#TT03749/24)
> - PM - Attività incluse nel calcolo SAL di progetto, risolto caso per cui se flag con "tempo manuale" attivo venivano escluse dal calcolo (#TT04160/24)
> - Bugfixing configuratore (#TT01197/24)

### Patch 707.1-0003 - 15/10/2024
> - SCS - Nei DDT di Conto lavoro per gli articoli inseriti manualmente vengono considerati il Magazzino e la Causale codificati nel Tipo DDT (#TT04284/24)
> - WM - Corretto bug in mappa delle ubicazioni articolo (#TT04365/24)
> - WM - Corretto bug nella procedura calcolo costo articolo nel caso in cui venisse inserito un movimento di magazzino con causale considera movimenti a zero e con un costo negativo (#TT00305/24)
> - Allineamento tecnico del Servizio Supervisor
> - Allineamento tecnico del Servizio BizLink
> - ARM - Workflow - Aggiunta azione per poter lanciare l'anteprima di stampa di un documento e per la stampa diretta (#TT04176/24)
> - CRM - Web campagne, risolto caso di mancato salvataggio nel caso di inserimento di attività nel workflow del contatto (#TT04319/24)
> - FI - Localizzazione HR, nel report ZP esclusione aliquote IVA legate ai campi I.2, I.6 e I.7 (#TT04407/24)
> - FI - Localizzazione HR, nel report PPO visualizzazione dell’aliquota IVA I.1 (#TT04406/24)
> - FI - Liquidazione IVA HR, modifiche nei campi I.2, I.5, I.10, 2.15, 3.3 (#TT04403/24)
> - SD - Dalla Ricerca ordini, le procedure di evasione DDT e Fatture creano i documenti considerando il Conai (#TT04392/24)
> - PR - Il salvataggio di una distinta fornitore ora avvisa se ci sono partite da compensare per i fornitori presenti nei dettagli dei pagamenti (#TT04122/24)

### Patch 707.1-0002 - 11/10/2024
> - Risolto problema con le icone dei pulsanti nell'editor di script (#TT04300/24)
> - ARM - Implementato formato di risposta per le API web (#TT04301/24)
> - SCS - Corretto errore negli Ordini di Conto Lavoro che talvolta non caricava i materiali per la prima riga articolo inserita (#TT04112/24)

### Patch 707.1-0001 - 10/10/2024
> - SD - Quando viene effettuata la conversione di un’Offerta in Ordine, se il tipo ordine ha il flag di Creazione Progetto Automatico attivo, il numero e il tipo progetto vengono proposti automaticamente al momento del salvataggio dell’ordine (#TT04336/24)
> - SH - Tipo file - Aggiunto tipo file .msg (#TT04182/24)
> - SD - Offerte di Vendita e Ordini di Vendita - Utilizzo del nuovo Configuratore (#TT01258/21)
> - SD - Risolta eccezione che impediva la modifica del prezzo di listino da anagrafica articolo (#TT04237/24)
> - ARM - Aggiunti script di post-migrazione per la versione RO (#TT04302/24)
> - ARM - Risolta eccezione durante l'eliminazione di una riga referenziata dalla griglia dei risultati del filtro (#TT04303/24)
> - Nel cambio stati delle fatture di vendita Sdi, rivisti gli step di firma per i file importati tramite WebApi (#TT04229/24)
