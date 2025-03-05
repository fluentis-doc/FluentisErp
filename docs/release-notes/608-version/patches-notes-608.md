---
title: Patch notes Versione 608
sidebar_position: 2
---

### Patch 608.1-0064 - 18/12/2024
> - FI - la stampa di verifica delle dichiarazioni di intento totalizza ora anche i dati dei rientri del conto lavoro non fatturati (#TT05290/24)
> - FI - la stampa definitiva della liquidazione iva periodica ora memorizza il saldo a credito nel campo del credito precedente della form di Dichiarazione iva periodica, non più in quello delle Variazioni iva periodo precedente. (#TT03694/24 e TT05230/24)
> - FI - problemi in fase di annullamento stampa definitiva liquidazione ( TT04859/24 )
> - MS - In Capacità centri lavoro migliorata e ottimizzata la visualizzazione degli orari di inizio e fine delle fasi. (#TT04350/24)
> - SH – corretto errore calcolo livello distinta base nell’analisi disponibilità (#TT05376/24)
> - SD - Risoluzione errore che indicava l'apertura del listino dal proprio utente nel caso di precedente utilizzo della procedura di Duplica e Manutenzione Listini (#TT05236/24)
> - CO - Revisione procedura di valorizzazione area acquisti/vendite, esclusione test sulla stampa definitiva iva delle liquidazioni e dei registri (#TT04436/24)
> - FI - stampa controllo dettaglio dichiarazione intento fornitori ( TT05290/24)
> - FI - partial sale and depreciation ( TT05469/24)


### Patch 608.1-0063 - 12/12/2024
> - SCM – Durante la creazione di un Ordine Fornitore a partire da una RDA, se l'articolo nella RDA è stato inserito con un'unità di misura alternativa, sulla riga articolo dell'ordine verranno riportate l'unità di misura principale e la relativa quantità. L'unità di misura alternativa e la sua quantità saranno inserite nell'apposito campo (#TT04650/24).
> - PR - aggiunti alla form Distinte di anticipo i campi per il totale distinta e totale anticipato. ( TT04711/24)
> - SCM – Contabilizzazione fatture di acquisto – Corretta anomalia in fase di contabilizzazione fatture di acquisto (#TT01625/24)
> - SD - Migliorato campo Percentuale/ Valore nella riga articolo dei documenti di vendita, Tab Agente, che non riportava correttamente il dato in tutte le condizioni di calcolo della provvigione. (#TT5075/24)
> - SCS – Form Rientri – Corretta anomalia che in caso di workflow alla prima apertura del documento dava errore (#TT04944/24)”
> - FI - nel caso di contabilizzazione fatture di acquisto in divisa estera con integrazione iva reverse charge, revisione gestione arrotondamento importo iva convertita in euro (#TT03221/24).
> - Scm: Errore della nota di consegna dell'acquisto durante il caricamento e il rollback #TT05306/24
> - FI - generazione file Dichiarazione di intento, revisione campo ‘Codice fiscale società dichiarante’ (posizione 296 del record B), ora viene valorizzata dal codice fiscale dell’anagrafica dichiarante impostata in testata e non più con il codice fiscale della società attiva (#TT05167/24)
> - SCS – Se la Società prevede la Gestione Controlling (con l’omonimo flag nella tabella Società), l’Evasione di un DDT o di un Rientro all’interno di una fattura riporta per date di competenza le date dello scarico documento, se non presente le date del documento (#TT05126/24)
> - SCM, SCS - Corretto errore nella registrazione di un Rientro di conto lavoro o di un DDT di Acquisto dall’interno del documento (#TT04754/24).
> - CO - modifica manuale delle registrazioni extracontabili del controlling, revisione valorizzazione dei centri di costo per valorizzazione campi importo in divisa e società (#TT05235/24)


### Patch 608.1-0062 - 05/12/2024
> - WMS – In gestione spunta viene correttamente valorizzato il campo WMM_LoadingUnitItem_WMLUI_Id delle UDC create con più righe. (#TT05104/24)
> - FI - revisione aggiornamento flag di chiusura Sollecito al variare della chiusura dei singoli movimenti al suo interno. (#TT02651/24)
> - SD-Revisione assegnazione dichiarazione di intento su righe di storno acconto, ora si legge la dichiarazione valida per la data fattura. Cancellando il riferimento assegnato sarà visibile la dich intento della riga originale acconto o quella valida sui riferimenti fattura impostati per la testata (#TT04907/24)
> - SD – La Duplica fattura riporta il campo LedgerAccountForStatisticReport.Id nel nuovo documento (#TT05040/24)
> - FI - revisione contabilizzazione fatture da ricevere per valorizzazione stringhe descrittive dentro la registrazione creata. Attenzione che in causale: 1 il tipo importo del costo deve essere ‘imponibile sottoconto + imposta indetraibile sottoconto’ 2 se si vuole riportare numero e data documento di trasporto servirà l’obbligo del tipo/numero e data documento (#TT05044/24)
> - CO - revisione gestione modelli di riclassificazione per livelli con codice/descrizione null (#TT05055/24)
> - MES – Corretto bug che azzerava la Quantità prodotta di un Ordine di produzione quando veniva eseguito il Ricalcolo Costi ordine di Produzione (#TT05094/24).
> - MES - Corretto bug nel Calcolo costi Ordini di Produzione con valorizzazione dei materiali al costo del lotto (#TT04509/24).

### Patch 608.1-0061 - 28/11/2024
> - Sales Fix IndirectExchangeRate at migration (#TT04919/24)
> - SH – Corretto errore nel Navigatore articoli che, se usato in modalità ridotta, talvolta perdeva il focus del puntatore aprendo un documento diverso rispetto a quello selezionato (#TT01033/24).
> - Purchase/Project/Subcontractor - fix Indirect echange rate at migration (#TT04930/24)
> - PR, FI - L’import dei file bancari per la riconciliazione ora assegna in testata la divisa dall’anagrafica banca. Revisione dell’assegnazione per movimenti (#TT04525/24)
> - FI, PR, CO - update IndirectExchangeRate in administrative area ( TT05095/24)  
> - MPS - Corretto bug in pianificazione generale nel caso fosse presente una attrezzatura nel ciclo senza l’articolo associato. (#TT05077/24)

### Patch 608.1-0060 - 21/11/2024
> - Revisione calcolo residuo per partite in valuta (#TT04613/24)
> - FI - stampa controllo cespiti, revisione segni conti dei fondi ammortamento (#TT04667/24)
> - MES – Corretto bug in registrazione segnalazioni di produzione. (#TT04825/24)
> - MES – Corretto bug nella registrazione delle dichiarazioni di produzione. (#TT04826/24)

### Patch 608.1-0059 - 13/11/2024
> - MPS – In Definizione MPS,  le commesse selezionate nel tab riepilogativo vengono aggiunte ad una commessa già esistente (indicata nel box Commessa di produzione proposto nel tab Riepilogativo), se e solo se è abilitato il flag Aggiornamento commesse già esistenti nel tab parametri. In automatico verrà proposta una commessa già salvata dove aggiungere le righe, se ne esiste già una con quel tipo e data. (#TT04762/24)
> - SH – Modifica del filtro di sola lettura per la classe Extra data dell’oggetto FSItemMaterialProfile, per abilitare la selezione dei ‘Valori ammessi’ basati su questo oggetto durante la creazione di una matrice in Anagrafica Articolo (#TT04490/24)
> - MES – Corretto bug nella procedura di completamento dati ordine degli ordini di produzione. (#TT04741/24)
> - WM – Corretto bug in analisi disponibilità inerente alla visualizzazione con dettaglio distinta base nel caso di varianti. (#TT04602/24)
> - FI - repository method ComputeCheckDeclarationOfExemptionAmounts ( TT02373/23)


### Patch 608.1-0058 - 07/11/2024
> - FI - revisione assegnazione date competenza economica in contabilizzazione fatture di acquisto (#TT02138/24)
> - FI - Add checks for migration (TT04710/24)
> - Nell’evasione ordini fornitori in bolle e fatture acquisto senza ricalcolo analitica, revisione assegnazione centri su priorità magazzini (#TT01624/24)
> - SD - Corretto errore nella ricerca delle Fatture di Vendita collegato alla presenza di fatture inviate allo SDI RSM (#TT04740/24)

### Patch 608.1-0057 - 31/10/2024
> - WMS - Implementato nel Barcode tokenizer anche la possibilità di gestire le collections e non solo le references. (#TT04232/24)
> - SD – Stampa CMR - Corretta stampa del CMR, non riportava sempre i dati del Mittente e i Pesi (#TT04342/24).
> -   SD - Corretto problema nel calcolo delle provvigioni maturate per agenti con criterio del pagamento avvenuto ed in presenza di pagamenti parziali di partite (#TT03435/24 & #TT04483/2)
> - MS – Corretto bug nel rilascio degli ordini pianificati di conto lavoro nel caso in cui fosse utilizzata la UM utilizzo in un materiale. (#TT04603/24)
> - CO - add currency in unique key of CO_ConsolidationListCostCenters and CO_InternalClosureModelListCostCenters ( TT04649/24)
> - FI - Nella contabilizzazione fatture di acquisto, quando c’è uno storno del movimento delle fatture da ricevere è stato aggiunto un messaggio che segnala la squadratura dei centri di costo in questa seconda: la fattura diventa in stato contabilizzata, ma si avvisa del mancato storno del fatture da ricevere (#TT04275/24)
> - SCS – Corretto errore nella registrazione di un Rientro di conto lavoro dall’interno del documento (#TT04578/24).
> - SD – L’ordinamento dei valori (Extra Data) nelle righe e nelle colonne di una Matrice in anagrafica articolo, viene mantenuto quando si creano i documenti (#TT04599/24)
> - SCM – Corretto errore che non aggiornava correttamente lo stato evasione dell’Ordine fornitore nel caso in cui una parte fosse evasa in un DDT e la restante in una Fattura (#TT04612/24).
> - FI - Modificata procedura controlling Valorizzazione area acquisti vendite della chiusura infrannuale. Il rollback della procedura non è più bloccato dalla stampa della liquidazione iva in definitiva per il periodo in questione, accadeva se la causale utilizzata per la valorizzazione era una causale IVA. ( TT04436/24)
> - SH – Document Manager - Fix blocking app when shared folder document type used (TT02202/24)
> - Nei documenti di acquisto, al cambio del magazzino nelle righe, il ricalcolo dei centri di costo viene eseguito ora solo se almeno uno dei due magazzini (iniziale e nuovo assegnato) hanno impostato i centri di costo

### Patch 608.1-0056 - 24/10/2024
> - BI - cruscotti - Fix problema apertura dettagli (#TT03539/24)
> - WM - Corretto bug nella stampa di Sottoscorta che andava in loop nel caso di un articolo con Scorta massima uguale al Punto di riordino (#TT03980/24).
> - MPS - Corretto bug in Definizione MPS nel tab Previsionale che si verificava nel caso in cui fossero processate molte righe (#TT04485/24)
> - FI - Stampa libro cespiti ammortizzabili: risolto errore in fase di stampa in definitivo del libro cespiti ammortizzabile ( TT04500/24)
> - MES - Corretto bug nello scarico delle dichiarazioni di produzione inerente al consumo del semilavorato prodotto nella fase precedente nel caso in cui questa fosse la prima ed esterna (#TT03883/24)
> - MS - Migliorata e ottimizzata la procedura di generazione commesse di produzione da previsionale (#TT04513/24)
> - CO - Corretto bug nel filtro della classe articolo della procedura Calcolo costi (#TT04512/24)

### Patch 608.1-0055 - 17/10/2024
> - FI - Comunicazione liquidazione periodica iva- revisione della stampa per l'indicazione del debito periodo precedente non superiore ai 100€ (campo VP7)
> - CO - nella procedura delle Scritture di rettifica delle Chiusure infrannuali, revisione gestione raggruppamenti alternativi (#TT01216/24)
> - MPS - Corretto bug nella procedura MRP (#TT04322/24)
> - SCM - Corretto errore che non permetteva l’inserimento multiplo di articoli nelle Richieste di Offerta (#TT04334/24)
> - SD - Risolta exception che impediva la modifica del prezzo di listino da anagrafica articolo (#TT04237/24)
> - SCS - Corretto errore negli Ordini di Conto lavoro che talvolta non caricava i materiali per la prima riga articolo inserita (#TT04112/24)
> - WM- Corretto bug nella procedura calcolo costo articolo nel caso in cui venisse inserito un movimento di magazzino con causale considera movimenti a zero e con un costo negativo (#TT00305/24)
> - Aggiungi flag agli eventi del supervisore per saltare il log e cancellare automaticamente dopo n giorni (#TT04430/24)
> - SD - Ottimizzazione della griglia 'Note articolo-cliente' del tab Varie dell'anagrafica cliente (#TT01967/24)
> - MS -  Ottimizzata e migliorata la procedura di pianificazione generale e corretto bug nella funzione "Controlla documenti in ritardo con ATP" (#TT03837/24)
> - MS - Corretti bug in pianificazione generale (#TT03785/24 - #TT04245/24)
> - PR - corretta importazione file movimenti bancari dove le date registrazione e valuta banca risultavano invertite (#TT04435/24)

### Patch 608.1-0054 - 03/10/2024
> - SH - Documentale - Corretto bug in caricamento di più documenti in modalità cartella in quanto andava in disconnessione il programma (#TT03705/24 - #TT02202/24)
> - CO - revisione calcolo mensilizzazione dell’elaborazione periodi (#TT04072/24)
> - nel calcolo dei totali fatture di acquisto, gestione delle aliquote iva con flag ‘Reverse charge’ per gestione fatture miste (#TT03198/24)
> - SD - Stampa Bilancino di fatturazione - Corretti bug subreport ricalcolo iva e spese (#TT03249/24)
> - SD - modificato il messaggio all'apertura dell'ordine cliente dal quale è stato generato un progetto inserito in un ordine fornitore (#TT03608/24)
> - MES - Ottimizzata la procedura registrazione segnalazioni (#TT04017/24)
> - SH - Correggi il filtro dei dati aggiuntivi: le colonne vengono caricate dal profilo. Salta la colonna se non è valida (#TT01838/24)
> - SCM - Nella procedura di Creazione automatica ordini fornitore da Ordini clienti è ora possibile utilizzare anche articoli la cui descrizione supera 200 caratteri (#TT04031/24)

### Patch 608.1-0053 - 20/09/2024
> - WM - Aggiunto la variante nel report ValorizatedBOM e ValorizatedItemCostBOM della valorizzazione distinta base
> - SCM, SCS - Corretto errore nella ripartizione delle spese con flag Ripartita inserite nei riepiloghi dei documenti (#TT02336/24)  
> - CO - revisione cancellazione registrazioni rimanenze nelle chiusure infrannuali (#TT03976/24)
> - SH - Creazione Documenti allegati docx - miglioramento Anteprima (#TT03095/24)
> - CO - Aggiunta la Colonna costo variante nel calcolo costi. Questa riporta i valori presenti nel tab varianti dell’anagrafica articolo (#TT03057/24 - #TT03043/24)
> - FI - Stampa Libro Cespiti con esercizio non solare (#TT03716/24)

### Patch 608.1-0052 - 12/09/2024
> - PM- corretta data spese inserite automaticamente nella dichiarazione attività generata dal cambio stato approvato dell'intervento (#TT03640/24)
> - MS - Corretto bug nella Pianificazione generale; ora la schedulazione con il flag “Considera anche le alternative dei materiali” funziona correttamente (#TT00306/24)

### Patch 608.1-0051 - 05/09/2024
> - FI - all’interno delle registrazioni contabili, revisione del pulsante di ricalcolo imposta (#TT02926/24)
> - FI - revisione salvataggio registrazioni con nuovi cespiti in creazione, localizzazione RO-HR (#TT03614/24)
> - QY - Controllo articoli - Importa articoli da controllare - Risolta anomalia nella ricerca di un articolo, gestito a lotti, già precedentemente importato (#TT03709/24)
> - FI - Report di registrazione IVA: modifica per consentire l'uso di frequenza trimestrale/mensile per la storia (#TT03769/24)
> - SCM - Nella procedura di Evasione da ordini la Quantità da evadere permette l'inserimento degli stessi decimali della Quantità residua (#TT03700/24)
> - WM - Nella form di ricerca dell’anagrafica articolo, ora i campi Cliente e Fornitore preferenziale filtrano i dati rispettivamente per cliente e fornitore.  (#TT03698/24)

### Patch 608.1-0050 - 08/08/2024
> - WM - Corretto bug in analisi disponibilità (#TT03349/24)
> - WM - Corretto bug in anagrafica articolo, che all'inserimento di una variante creava anche la distinta base per quella variante (#TT03443/24)
> - MPS - Corretto bug in Capacità centri di lavoro che considerava la capacità su un centro di lavoro interno data da un ordine pianificato di conto lavoro; ora, se l’ordine pianificato di conto lavoro ha una fase interna (perché a volte viene prodotto internamente e a volte esternamente) questo non impegna più quel centro di lavoro (#TT03406/24)
> - WM - Ora nel dettaglio dell’analisi disponibilità le righe di ordini produzione valorizzano i campi "Ordine cliente collegato" e "Quantità ordine cliente collegato” se sono collegate ad un ordine cliente (#TT03549/24)
> - FI - Fatture acquisto SDI- mancato controllo per Codice Fiscale (#TT01432/23)
> - SH - Abilitati i decimali nelle colonne Domanda e Offerta per gli Ordini pianificati, nell'Analisi disponibilità (#TT03201/24)
> - FI - la contabilizzazione canoni di leasing ora utilizza il conto il costo degli interessi sul sottoconto specifico impostato (#TT03582/24)
> - MES- Corretto bug nella procedura di ricalcolo costo nel caso in cui fossero presenti delle varianti (#TT02015/24)

### Patch 608.1-0049 - 30/07/2024
> - MES - Corretto bug nel calcolo del costo dell'articolo prodotto con le dichiarazioni di produzione (#TT03408/24)
> - SCM - Valorizzazione DDT Acquisto- Corretto errore valorizzazione DDT Acquisto (#TT03538/24)
> - SCS - Corretto errore che al momento della duplicazione di un Ordine di Conto Lavoro forzatamente evaso non aggiornava lo stato evasione dei materiali da consegnare del nuovo ordine (#TT03380/24)

### Patch 608.1-0048 - 26/07/2024
---note Attenzione
Con questa patch viene rilasciato il ticket 2097/24 che consente l'aggiornamento delle quantità dei materiali da spedire e impiegare modificando la quantità dell'articolo da lavorare sia nell'ordine di produzione per fase o livello che nell'ordine di conto lavoro. Per fare questo sono stati aggiornati i dati delle quantità degli ordini di conto lavoro ancora non evasi o parzialmente evasi. Si consiglia di verificare gli ordini in essere dopo l'installazione della patch.
---
> - FI - Risolto errore exception nell’intrastat che coinvolgeva un caso relativo ad una nota di accredito (#TT03449/24)
> - WM - Nella maschera di Ricerca picking è ora possibile filtrare per i Picking Non evasi (#TT03191/24)
> - MS - Nuove ottimizzazioni per la procedura del MRP (#TT03485/24)
> - SCS - Corretto errore che al momento della duplicazione di un Ordine di Conto Lavoro forzatamente evaso non aggiornava lo stato evasione dei materiali da consegnare del nuovo ordine (#TT03380/24)
> - SCS - Negli Ordini di Conto lavoro è stato aggiunto un nuovo parametro nei Dati materiali proposti denominato “Dall’ordine di produzione” usato per il ricalcolo delle quantità dei materiali. Viene impostato automaticamente alla creazione di un ordine di conto lavoro da fase esterna di un ordine di produzione, al rilascio di un ordine pianificato di produzione con fase esterna e al rilascio di un Ordine di Conto lavoro pianificato. Per la proposta dei dati dei materiali nell’ordine di Conto lavoro è ora possibile avere un parametro diverso per ogni riga articolo (#TT02097/24)
> - SCS - Corretto errore che al momento della duplicazione di un Ordine di Conto Lavoro forzatamente evaso non aggiornava lo stato evasione dei materiali da consegnare del nuovo ordine (#TT03380/24)
> - WM - implemented progress bar for Valorization (#TT03460/24)
> - MS - Migliorata ed ottimizzata la procedura di costificazione commessa (#TT00449/24)
> - MS - Ottimizzata e velocizzata la procedura MRP (#TT02462/24)
> - MES - Corretto bug nel calcolo dell'occupazione dei centri di lavoro nel caso in cui fossero modificate le fasi dell'ordine di produzione (#TT02662/24)
> - FI - per società con controlling attivo, revisione test di quadratura sulle dimensioni (#TT03496/24)
> - SH - Revisione ricalcolo Conai in caso di documento duplicato (#TT03508/24)

### Patch 608.1-0047 - 19/07/2024

> - SCM - Corretto errore che non aggiornava lo stato evasione delle RDA a seguito dell’attivazione del flag Evaso forzatamente sulle righe articolo (#TT02937/24)
> - SCM - Corretto errore che non aggiornava lo stato evasione delle RDA a seguito dell’attivazione del flag Evaso forzatamente sulle righe articolo (#TT02937/24)
> - CO - revisione nuova riclassificazione per gestione tree (#TT02912/24)
> - WM - Corretto bug che non verificava correttamente la giacenza negativa quando l’articolo si trovava all’interno di una registrazione di scarico in contropartita (#TT01417/24)
> - CO - Corretto bug nel calcolo del costo del tempo di attrezzaggio nella procedura Calcolo costo del Controlling (#TT02654/24)
> - MPS - Corretto errore che modificava lo stato di una commessa schedulata a seguito di cancellazione dell’ordine pianificato e schedulazione di un’altra commessa (#TT02393/24)
> - FI - la contabilizzazione effetti assegna la data chiusura commissioni in base alla scadenza effetto (#TT02657/24)
> - WM - Nell’analisi disponibilità gli ordini clienti non confermati non vengono considerati (#TT02463/24)
> - SCM - A seguito della Valorizzazione DDT di acquisto mediante procedura, il flag Valorizzato viene ora riportato anche sulle righe articolo del DDT (#TT02562/24)
> - WM - Corretto bug che talvolta non riportava la causale o l’ubicazione sulla prima riga dei documenti (#TT02490/24)
> - SCM - in contabilizzazione fatture di acquisto, revisione assegnazione data registrazione per storno automatico della registrazione “fatture da ricevere” (#TT03056/24)
> - revisione memorizzazione credito anno precedente da stampa definitiva liquidazione iva periodica di gennaio (#TT02348/24)
> - Revisione quadratura movimenti di analitica negli ordini fornitori (#TT03053/24)
> - CO - Risolto bug nel report Distinta base valorizzata nel quale non venivano visualizzati i valori del costo dei materiali (#TT03281/24)
> - MES - Corretto bug nelle dichiarazioni di produzione, non veniva riportato correttamente il valore dell’ubicazione del lotto nel movimento di magazzino di scarico del materiale (#TT02156/24)
> - FI - la contabilizzazione effetti assegna la data chiusura commissioni in base alla scadenza effetto (#TT02657/24)
> - FI - Errore registrazione in prima nota di incasso da cliente (#TT03209/24)
> - SCM -  Errore contabilizzazione FDR (#TT03262/24)
> - FI - revisione gestione test di validazione della causale contabile nel corso delle contabilizzazioni (#TT03062/24 - #TT03060/24)
> - SD - Al momento della Conversione delle Offerte in Ordini Cliente viene ora mantenuto l’ordinamento di articoli presente nell’Offerta (#TT03169/24)
> - SD - Revisione test controllo della nazione cedente/prestatore in fattura Sdi per autofatture, da campo nazione al campo codice iso della partita iva (#TT03368/24)
> - WM - Corretto bug nel calcolo dell'analisi disponibilità che generava un errore nell'esecuzione dell'mrp (#TT03389/24)
> - MS - Corretto bug nel rilascio degli ordini pianificati di acquisto, ora le RDA create vengono raggruppate correttamente per cliente, tipo e anno (#TT03382/24)
> - SD - Nella procedura di Creazione da DDT, è stato inserito un nuovo controllo che impedisce la creazione di  un’autofattura da DDT (#TT02889/24)
> - FI - nella contabilizzazione fatture di vendita, allineamento della gestione del cambio per la sezione dei centri di costo (#TT02172/24)
> - SCM - contabilizzazione fatture di acquisto, assegnazione divisione alle righe di movimento centro di costo per righe di spese finali (#TT03239/24)
> - SCM  - Ricerca DDT Acquisto- nella colonna di valorizzazione viene riportata la fattura creata dal ddt (#TT01055/24)
> - FI - nella contabilizzazione fatture di acquisto, gestione in grigila iva del campo dell’iva per causali automatiche (#TT02641/24)

### Patch 608.1-0046 - 28/06/2024

> - MS - Corretto errore nell’elaborazione dell’MRP che generava il blocco dell'operazione (#TT02408/24)
> - WM - Corretto bug nell’export excel dei dati presenti nel report Implosione componenti che non riportava il valore nella colonna quantità (#TT02753/24)
> - MS - Nel ciclo di produzione, quando si associa un materiale ad una determinata fase, questo non viene più visualizzato nell’help tra i materiali che rimangono da associare alle singole fasi (#TT02785/24)
> - FI - revisione gestione assegnazione numerazione cespiti in caso di cambiamento categoria/precodice cespite (#TT02777/24)
> - FE San Marino- Fatture di Vendita non conformi Ora è possibile riportare una fattura di vendita non conforme per l'HUB di San Marino allo stato Da Esaminare per la correzione (#TT02791/24)
> - FI - nei compensi professionisti, revisione campo inps carico percipienti del primo tab nel caso di calcolo manuale (#TT02802/24)
> - FI - revisione stampa Controllo cespiti per importo del fondo in caso di alienazioni totali/parziali (#TT02537/24)
> - SH - Modificate le descrizioni dei record in tabella fissa “Natura giuridica”, per differenziare ‘Residenti’ da ‘Non residenti’ come da tabella delle istruzioni 770 (#TT02870/24)
> - FI - Corretto bug nella form di lancio della stampa Enasarco che non gestiva correttamente il filtro per range di date (#TT00824/24)
> - CO - Revisione performance nuova riclassificazione di bilancio (#TT02912/24)
> - PM - modificata proposta prezzo nelle richieste interventi ed interventi pianificati- se l'articolo non è presente e vene assegnato un progetto, articolo e prezzo sono proposti da progetto. Se l'articolo è già presente e viene assegnato un progetto, se articolo nel documento e nel progetto coincidono, il prezzo viene aggiornato da progetto. Altrimenti viene mantenuto il prezzo già presente (#TT02837/24)
> - SCM - Se il flag Prezzo Unità di Misura Alternativa è attivo nella Richiesta di Offerta, al momento della creazione dell’Ordine fornitore da Offerta fornitore il flag sarà riportato anche nell’ordine creato (#TT02804/24)
> - SCM - Corretto bug che non visualizzava Codice/Descrizione dell’Articolo fornitore nella form di Dettaglio righe Ordini quando l’ordine non era evaso (#TT02344/24)
> - SCM - Le spese con flag Ripartita inserite nei riepiloghi dei documenti vengono ora ripartite sugli articoli del documento anche quando i prezzi sono a zero (#TT02336/24)  
> - FATTURAZIONE ELETTRONICA SM- Eseguendo il ripristino della stato da Generato o scartato Hub SM a Controllato viene eliminato il file di integrazione della fattura d'acquisto SM, riportando lo stato a non esaminato viene anche resettato il nome file (#TT03054/24)
> - SH - Analisi Didsponibilità- il controllo che se è settao il flag distinta base ci sia settato 1 solo articolo è stato spostato quando si clicca nel ribbon button Ricerca (#TT02783/24)


### Patch 608.1-0045 - 14/06/2024

> - WM- Implementata la possibilità di salvare l’ordinamento dell’albero della distinta base e dei prototipi nel profilo.  (#TT02677/24)
> - WM - Corretto bug nella stampa inventario a quantità valorizzato inerente al flag storicizzazione inventario.  (#TT02708/24)
> - BZ - Nell’importazione standard ‘Articoli e Barcode’ è possibile compilare la colonna ‘Default Forn. Pref.’ con i valori TRUE o FALSE (#TT02245/24)
> - BZ - Nell’importazione standard ‘Articoli e Listini di Vendita’ sistemato problema in fase di importazione degli sconti (#TT02245/24)
> - FI - revisione contabilizzazione fatture di acquisto con righe con/senza fatturato acquisti su stesso sottoconto (#TT02771/24)
> - PM - generazione interventi da richiesta interventi, corretta procedura in modo che gli orari dell'intervento siano ereditati dalla richiesta intervento (#TT02748/24)
> - SD - Selezionando il Raggruppamento per Tipo e Soluzione di Pagamento all’interno dei Parametri di raggruppamento nei documenti di destinazione saranno riportati i pagamenti presenti nei documenti di origine (#TT02403/24)
> - MES - Corretto bug nelle segnalazioni di produzione inerente all’ubicazione degli articoli prodotti e gestiti a lotti (#TT02667/24)

### Patch 608.1-0044 - 10/06/2024

> - SCS - Arrotondamento per Cdc su ordine di acquisto, DDT di acquisto, Fattura di acquisto TT02500/24.
> - SCM - La richiesta di acquisto deve essere considerata eseguita se vengono eseguite tutte le righe, ad eccezione delle righe di nota TT02389/24.
> - SD - Corretto errore che non permetteva di effettuare lo storno di un DDT di Vendita contenente anche righe di tipo Note (#TT02585/24)
> - MPS - Corretto errore nella visualizzazione della disponibilità nella procedura di Definizione MPS da Sottoscorta (#TT02448/24)
> - FI - revisione chiusura commissioni in registrazioni contabili di incasso/pagamento (#TT02501/24)
> - MES - Corretto errore nelle Dichiarazioni di Produzione che non permetteva il ripristino della registrazione nel caso in cui ci fosse una referenza nella tabella PM_ProjectItemDetails (#TT02419/24)
> - PM - corretta visualizzazione % avanzamento e righe descrittive nel report dettaglio avanzamento progetti (#TT01386/24)
> - MPS - Corretto errore nella Generazione automatica del flusso di produzione da Ordine cliente che non generava il messaggio di riepilogo con le commesse e gli ordini creati (#TT02578/24)
> - FI - revisione gestione centri di costo in contabilizzazione fatture di vendita (#TT02621/24)
> - CO - Ottimizzata la procedura di calcolo costo.  (#TT02255/24, #TT02209/24)
> - SCM - Creazione nuovo report per gli ordini fornitori 'Scadenziario con UM alternativa' con le seguenti proprietà- date in formato europeo, colonna Quantità residua, colonna UM, considerazione della UM alternativa nel prezzo se previsto nel documento (#TT01820/24)
> - SCM - Risoluzione dell'errore che non rendeva visibile la Data consegna nel report Portafoglio Ordini (#TT01819/24)
> - Risolto bug con righe contenenti Debito e Credito (#TT02694/24)
> - MS - Rilascio ordini pianificati - Viene considerata la quantità fissa del padre nella distinta base durante il rilascio degli Ordini di produzione e di Conto lavoro.(#TT00873/24)
> - MS - Rilascio Ordini pianificati - Ricalcolo errato quantità totale consumo materiali se Ordine diviso in più lotti (#TT01949/24)
> - FI - allineato comportamento della stampa controllo cespiti che ora restituisce i risultati di tutte le categorie se non viene selezionata alcuna categoria in particolare (#TT02502/24)
> - SD - Implementazione apertura ordini dopo conversione(#TT02247/24)
> - PR - Giroconto iva errato dopo insoluto (#TT02378/23)
> - WM- Corretto bug nella gestione prototipi che generava un errore alla chiusura di un prototipo (#TT02678/24)
> - WM - Corretto bug nella gestione prototipi che non visualizzava correttamente il flag fittizio degli articoli (#TT02679/24)

### Patch 608.1-0043 - 31/05/2024

> - WM - Corretto bug nella visualizzazione degli errori della procedura di valorizzazione magazzino nel caso in cui questi fossero più di 100.000 (#TT02320/24)
> - SD - Corretto problema nei documenti di vendita che non gestiva adeguatamente la provvigione in presenza contemporaneamente di agenti legati ad un destinatario/destinazione del cliente e NON legati ad alcun destinatario /destinazione ma semplicemente al cliente (#TT00273/24)
> - FI - Risolto problema che generava un errore chiudendo la form Visualizzazione conti dopo che era stato eseguito l’ordinamento sulla colonna Data Registrazione (#TT02041/24)
> - PR - revisione stampa cash flow per totali oltre la data finale (#TT00241/24)
> - FI - Contabilizzazione fatture acquisto in entrata - revisione proposta della data competenza all’interno della registrazione contabile creata (#TT01888/24)
> - FI - nella maschera della ricerca partite, riattivato il pulsante di aggiornamento dello stato partite (#TT02145/24)
> - FI - la ripresa ammortamento cespiti del modulo chiusure infrannuali ora applica, se presente, la percentuale custom della testata cespite in via prioritaria rispetto alla percentuale in categoria cespite (#TT02070/24)
> - FI - revisione della procedura di giroconto partite per chiusura iva in sospensione (#TT02398/24)
> - SCM, SCS - Quando viene modificato il flag Prezzo Unità di misura Alternativa all’interno di una Fattura di acquisto che valorizza un Rientro di Conto lavoro, esso viene modificato anche nel Rientro e nella relativa registrazione, se presente. Quando il flag viene modificato dall’interno Rientro di Conto lavoro gli importi vengono ricalcolati anche nella Registrazione di magazzino (#TT00698/24)
> - FI - Nel caso in cui venga importato nei documenti sdi di acquisto in entrata un file che presenta dei dati non conformi al formato non viene più generata una exception ma il visualizzatore presenterà una pagina bianca (#TT02322/24)
> - FI - corretto bug che non gestiva correttamente il giroconto iva nell’ambito dell’iva per cassa, quando la partita incassata era originata da una RiBa precedentemente insoluta (#TT02378/23)
> - FI - revisione stampa liquidazione iva periodica per periodo senza dati (#TT01779/24)
> - FI - nella riconciliazione manuale dei conti correnti, abilitata la possibilità di cambiare date di filtro (#TT02390/24)
> - SCS - Al momento della registrazione di un Rientro di Conto lavoro viene verificata prima la giacenza dei materiali alla data corrente e successivamente alla data usata per la registrazione di magazzino (#TT02394/24)
> - PR - riconciliazione conti correnti automatica, chiusura message box per visualizzare il messaggio di ‘Attendere…’ (#TT02392/24)
> - SD - Quando nei parametri dell’area Vendite è attivo il flag ‘Blocca inserimento documento in date festive da calendario di fabbrica’ il controllo della data festiva viene effettuato prima nel Calendario di Fabbrica, poi nel Calendario delle capacità produttive (#TT02396/24)
> - SCS - Quando viene inserito un Ordine di Conto lavoro per un fornitore che ha un listino predefinito, se l’articolo inserito non è presente nel listino il prezzo proposto è zero (#TT02234/24)
> - FI - contabilizzazione fatture di acquisto, revisione arrotondamenti centri di costo (#TT02483/24)
> - MES - Corretto bug nelle segnalazioni di produzione che visualizzava l'UM errata nel campo quantità fase (#TT02459/24)
> - FI - corretto errore al rollback di registrazione fattura di acquisto connessa ad una scheda cespite (#TT02207/24 - #TT02277/24)

### Patch 608.1-0042 - 23/05/2024

> - CO - Ripresa ammortamento cespiti delle chiusure infrannuali, revisione gestione centri di costo (#TT02315/24)
> - SD - Revisione della stampa provvigioni maturate per il caso dell'incasso di una partita riaperta dopo un insoluto (#TT02095/24)  
> - Rilascio nuova stampa 2024 del rendiconto effettivo per localizzazione CH
> - CO - Controlling, internal closures, 'scritture di integrazione' returns wrong values in Cost centers(#TT02319/24)
> - SD - Nella riga dello storno acconto viene ora riportato anche il progetto, se presente nella riga articolo della fattura di acconto (#TT02170/24)
> - MS - Pianificazione generale - Corretta anomalia di proposta date negli Ordini pianificati (#TT02150/24)


### Patch 608.1-0041 - 16/05/2024

> - PR - corretto bug che utilizzava nel cashflow il conto cliente trzista per fasi esterni nell’ordine di conto lavoro anziché il fornitore effettivo (#TT02034/24)
> - FI - revisione delle date di competenza economica assegnate alle registrazioni di riapertura degli assestamenti dalla chiusura conti automatica (#TT01535/24 - #TT01814/24)
> - FI - nella compensazione partite, revisione gestione filtri partite rispetto al tipo di compensazione, gestione decimali nei campi in griglia (#TT02113/24)
> - MES - Nelle Dichiarazioni di Produzione è stato aggiunto il dettaglio dell’Ubicazione nel messaggio di errore dovuto a giacenza insufficiente (#TT02064/24)
> - SD - Nella Conversione da Offerta a Ordine, gli sconti finali articolo inseriti nell’Offerta vengono riportati nelle righe articolo dell’Ordine (#TT02103/24)
> - SH - Nelle Fatture di Vendita e nei DDT di Vendita e di Acquisto è ora possibile inserire pesi con cifre decimali (#TT02163/24)
> - SCM - Risolto bug che non salvava correttamente un profilo nelle Richieste di Acquisto con filtro Non evase (#TT02123/24)
> - WM, SCM, SCS , SD- Corretto bug nella formulazione del progressivo del codice lotto (#TT02142/24)
> - FI - Intrastat 2 , fluentis545 - Errore in ripresa dati da registrazioni CustomPosting (#TT02243/24)
> - MES - Corretto bug in Lista prelievo materiale nel caso in cui fosse abilitato il flag "Associa lotto per lista di prelievo" presente nei parametri di produzione. Ora il lotto associato al materiale nell'ordine di produzione viene correttamente riportato anche nei picking creati con la Lista prelievo materiale (#TT03026/23)
> - PR - Contabilizzazione pagamenti fornitori, revisione gestione note di riga quando la causale non prevede il raggruppamento pagamenti in giornale (#TT01702/24)
> - CO - Revisione totalizzazione gruppi nel report di valorizzazione riclassificazioni, in caso di comparazioni
> - WM - Corretto bug in analisi disponibilità. Ora la quantità dei materiali presenti negli ordini pianificati, con unità di misura utilizza indicata in distinta, sono corrette (#TT02227/24)

### Patch 608.1-0040 - 09/05/2024

> - SH - Nuovo messaggio di avviso se impostando l’anagrafica di una persona fisica non vengono compilati in nome e cognome e nuovo messaggio di errore generando il file della fattura elettronica senza questi dati (#TT01700/24)
> - PR - revisione ripresa dati da rientri di c/lavoro nel cash flow (#TT01934/24)
> - FI - Comunicazione trimestrale dell'iva, allineamento 2024 (#TT01141/24)
> - SCM - Corretto errore che impediva la modifica delle Edizioni nel Pharma (#TT01753/24)
> - FI - Centro di costo da bolle di consegna non visibile nella registrazione in contabilità generale e nell'analisi dei movimenti dei centri di costo (#TT01521/24)
> - SH - Indirizzi alternativi - revisione salvataggio dei campi nome e cognome all’interno degli indirizzi alternativi (#TT01794/24)
> - FI - Revisione ripresa valori da registrazioni per sezione quater (#TT01985/24)
> - PR - Ottimizzazione Cash Flow da DDT Acquisto (#TT01754/24)
> - FI - Scritture di assestamento- revisione descrizione dettaglio nelle registrazioni contabili create automaticamente dalla procedura (#TT00503/24)
> - SH - La procedura di Duplica articolo riporta anche le Note dei Fornitori preferenziali (#TT01580/24)
> - WM - Corretto bug nella procedura di valorizzazione magazzino (#TT02037/24)
> - SCS - Corretto errore che riportava la quantità negativa nell'Evasione di un ordine di conto lavoro in un ddt (#TT01835/24)
> - FI - Registrazione di pagamento/incasso in divisa estera, se i pagamenti sono della stessa divisa della testata registrazione e non ci sono righe manuali allora il totale del documento in valuta corrisponde al valore in divisa chiuso. Se vi sono pagamenti in altre divise e/o righe manuali, invece, il totale in divisa sarà il calcolo del controvalore divisa del totale dare/avere in divisa società (#TT1703/24)
> - SD - Nella creazione file Sdi su fatture/note di credito in valuta, revisione gestione arrotondamenti (#TT1703/24 - #TT02135/24)

### Patch 608.1-0039 - 29/04/2024

> - SD - Corretto errore nel Dettaglio Movimenti che visualizzava alcune quantità con segno errato (#TT01546/24)
> - SD - Il campo ‘Riferimento ordine’ delle righe articolo in fattura viene popolato anche per le righe Nota (#TT01733/24)
> - SD - Corretta la visualizzazione dei Diagrammi di Evasione per i documenti contenenti solo righe articolo di tipo 2 (#TT01445/24)
> - SCM - Corretto errore che proponeva la stessa 'Descrizione articolo fornitore' nella procedura di 'Evasione ordini', per tutti i fornitori preferenziali dell'articolo (#TT01501/24)
> - FI - Migrazione 2015 (#TT01808/24)
> - SD - Se il cliente persona fisica non ha nome/cognome compilato, il file Sdi viene valorizzato nel tag Denominazione con la Ragione sociale cliente. Nel caso manchi solo nome o solo cognome, la creazione del file viene bloccata (#TT01700/24)
> - FI - compensazione veloce, revisione procedura per chiusura commissioni associate alle partite (#TT01664/24)
> - SD - La ricerca avviene in base alla priorità anche nel caso di più righe per la stessa tipologia di provvigione (#TT01695/24)
> - SD - Corretto errore che non popolava i ‘Materiali Conai per l’articolo’ nelle note di credito (#TT01841/24)
> - PR - revisione del calcolo del cash flow da ordini di conto lavoro (#TT01609/24)
> - FI - Revisione contabilizzazione pagamenti percipienti per numerazione pagamento/partite e raggruppamento per sottoconto (#TT01285/24)
> - FI - Revisione calcolo partite per fatture acquisto cespiti estere senza movimento iva (#TT02800/23)
> - FI - Revisione liquidazione iva della localizzazione Croata (#TT03562/23)
> - FI - Revisione gestione commissioni agenti in contabilità, per incassi parziali e per contabilizzazione fatture con totale 0 (#TT01822/24)
> - FI - Revisione stampa definitiva liquidazione iva periodica gennaio per salvataggio credito anno precedente/credito periodo precedente (#TT01160/24)
> - SD - Il controllo sulla Data Merce Pronta, che deve essere minore o uguale alla Data consegna, è stato inserito anche nella Testata dell’Ordine cliente (#TT01711/24)
> - WMS - Nella form gestione spunta del WMS, rivista la proposta della giacenza nel caso in cui il lotto dell'articolo fosse già inserito nel picking (#TT01435/24)
> - MES - Corretto bug nel calcolo del tempo macchina e manodopera nelle dichiarazioni di produzione (#TT01400/24)

### Patch 608.1-0038 - 18/04/2024

> - WM - Inventario a quantità valorizzato - Corretta anomalia sul ‘Valore unitario’, proposto nel report di ‘Stampa inventario’, se richiesta la ‘Valorizzazione a Costo medio’ e ‘Valorizza a magazzino’ presente nei ‘Parametri iniziali magazzino’ (#TT01690/24)
> - SCM - Corretto errore nell’aggiornamento degli importi nei movimenti di magazzino in presenza di una spesa ripartita nel DDT o nella Fattura di Acquisto (#TT00794/24)
> - PR -  Il Lock Manager mostra tutti i record dei documenti di tutte le aziende (#TT01593/24)
> - FI - nella registrazione contabile, bloccata la possibilità di modificare righe pagamento derivanti da pagamenti percipienti, bisogna eseguire il rollback e modificare l’importo di pagamento nella procedura di contabilizzazione (#TT00909/24)
> - FI - La data di filtro della Visualizzazione bilancio ora si basa sulla data competenza di testata e non più sulla data registrazione (#TT01243/24)
> - FI - Calcolo provvigioni pagamento totale in valuta USD (#TT01696/24)

### Patch 608.1-0037 - 15/04/2024

> - CO - Corretto bug che in alcuni casi generava un report vuoto nella stampa della riclassificazione con comparazione (#TT00917/24)
> - FI - In contabilizzazione fatture di vendita, alle partite viene assegnato l’agente che ha l’importo provvigionale più alto tra le varie righe documento, in caso di valori uguali l’ordine è per id agente (#TT01286/24)
> - MES - Implementata nella lista prelievo materiali la gestione della quantità residua (#TT00836/24)

### Patch 608.1-0036 - 11/04/2024

> - FI - Miglioramenti sulle procedure automatiche intrastat- esportazioni Grecia (#TT01232/24)
> - FI, PR - revisione contabilizzazione effetti per partite create su divisioni differenti da quella attiva (#TT01401/24)
> - MS - Aggiunto un messaggio di errore nell'MRP nel caso in cui l'articolo fosse di produzione ma non avesse la distinta base (#TT01414/24)
> - FI - Associazione file xml a percipienti- revisione proposta dei soli file nello stato ‘non assegnato’ (#TT01317/24)
> - FI - Risolto l'errore di ricerca con il filtro del conto nella creazione di intrastat dalle vendite (#TT02458/23)
> - PR - Corretto bug che in fase di creazione RiBa da fatture nel caso di fattura e nota di accredito da accorpare sommava invece di sottrarre la NC (#TT00897/24)
> - WM - Corretto bug in analisi disponibilità che non mostrava correttamente i valori nei campi- Ordine cliente collegato e quantità ordine cliente (#TT01062/24)
> - MS - Corretto bug nella procedura MRP nel caso di articoli fittizi (#TT01164/24)
> - FI - Revisione attivazione pulsanti di gestione all’interno dell’intrastat (#TT01232/24)
> - Risolto il bug del caricamento dello script per ViewModel con BusinessObjectName mancante.


### Patch 608.1-0035 - 08/04/2024

> - CO - Corretto bug nella procedura di Calcolo costo (#TT00799/24)
> - WMS - Corretto bug nella form di rettifica articolo (#TT01376/24)
> - WM - Nelle liste inventariali, migliorato il funzionamento del pulsante "Help articoli movimentati". Nel caso incui si inserisca anche l'ubicazione nei filtri di ricerca vengono riportati nella lista solo gli articoli presenti in quell'ubicazione (#TT00616/24)
> - FI - Revisione filtro per divisione in stampa Sottoconti eseguita dalla form ‘Visualizzazione conti’ (#TT01394/24)
> - WM - Quando si genera una registrazione dalla maschera di Visualizzazione Giacenze, se la causale inserita ha una contropartita verrà proposta l’ubicazione della causale, eliminandola verrà proposta l’ubicazione dell’articolo (#TT01351/24)
> - WM - Quando si genera una registrazione dalla maschera di Visualizzazione Giacenze, se la causale inserita ha una contropartita verrà proposta l’ubicazione della causale, eliminandola verrà proposta l’ubicazione dell’articolo (#TT01351/24)
> - FI -  Raggruppamento dei dettagli intrastat, perdita del collegamento tra SDSII_IntrastatDetail_FIIDT_Id e FIIDT_Id (#TT01352/24)
> - SD - Consentita la modifica del range di date competenza economica in fatture di vendita con file Sdi creato ma non contabilizzate (#TT01038/24)
> - SCM - Corretto bug nella creazione del codice lotto nel caso in cui non venisse inserito manualmente nel DDT, ma calcolato creato automaticamente al momento dello scarico. Succedeva solo nel caso in cui fosse utilizzato il nomignolo del fornitore nella composizione del codice (#TT01297/24)
> - SD - Blocco al ricalcolo a zero della percentuale provvigionale su righe evase da OC, nel caso di range sconto e categoria provvigionale di filtro (#TT01310/24)


### Patch 608.1-0034 - 04/04/2024

> - WM - Corretto bug nel report Stampa inventario a quantità valorizzato inerente al costo da costo effettivo lotti e alla visualizzazione dei costi unitari e totali di riga (#TT01233/24 - #TT00807/24)
> - PR - revisione contabilizzazione movimenti bancari da riconciliazione conti (#TT01215/24)
> - PR - corretto bug nel calcolo scadenze del cashflow sugli ordini conto lavoro (#TT01203/24)
> - Rilascio stampa LIPE anno 2024
> - WM - Corretto bug nel report di Valorizzazione Assiemi in merito alle lavorazioni esterne (#TT00920/24)
> - FI - corretto bug nella stampa di verifica della dichiarazione di intento quando nella fattura c’erano delle spese finali agganciate alla dichiarazione dii in tento il loro valore non veniva correttamente riportato sulla colonna registrato e rimaneva sulla colonna fatturato (#TT01311/24)
> - FI - revisione assegnazione sezione intrastat servizi in contabilizzazione da fatture acquisto (#TT01258/24)
> - SD - Le spese di Incasso sono assoggettate automaticamente all’iva principale del documento (#TT00511/24)
> - Nell'evasione ordini fornitori in fattura, revisione assegnazione date competenza economica nell'analitica (#TT01275/24)
> - FI - gestione di due nuovi parametri generali ("FS-FI-Intrastat-UseDocumentWeightInPurchase" e "FS-FI-Intrastat-UseDocumentWeightInSale") che, se impostati, fanno valorizzare la massa nella della collection FSPostingIntrastat dal peso rilevato nella riga articolo del documento (se non impostati si userà invece il dato da anagrafica articolo) Con lo stesso parametro, inoltre, la generazione automatica intrastat da fattura acquisto/vendita andrà a leggere allo stesso modo la massa netta della riga nel documento (piuttosto che dall'anagrafica articolo) (#TT00692/24)
> - FI - revisione test di quadratura cdc/coge al salvataggio della registrazione contabile (#TT01372/24)
> - SD - Al salvataggio di una nota di credito, tutti i Tipi spesa vengono inseriti con segno negativo, tranne le spese Bollo (#TT01289/24)

### Patch 608.1-0033 - 29/03/2024

> - FI - Risolto bug nella Comunicazione trimestrale liquidazioni iva quando nel quarto trimestre si inseriva un valore nel campo acconto e poi salvando il campo veniva resettato (#TT00678/24)
> - QY - Corretto bug che non visualizzava i Workflow nella form di Batch Records (#TT01165/24)
> - SCM - Nella stampa Scadenziario ordini fornitori, le Date sono state cambiate in formato europeo, ed i Prezzi a due decimali (#TT01051/24)
> - SD - E' possibile modificare gli Extra Data di una Fattura di vendita anche se Scaricata (#TT00712/24)
> - MS - Corretto bug nella pianificazione generale nel caso venissero rischedulate commesse già in stato lanciato/esecutivo (#TT00158/24)
> - PR - risolto bug nella form gestione liquidità che non aggiornava correttamente il campo Progressivo al variare dei flag escludi e nascondi (#TT00435/24)
> - Risolto il problema dell'esecuzione dell'attività con parametri mancanti in SqlQuery
> - PM - correzioni inserimento appuntamenti nel planner relativi ad interventi pianificati e richieste intervento. Migliorata gestione spostamento /cambiamento data/ora/risorsa (#TT00144/24)
> - SCM - Nella griglia ad albero della maschera di Evasione Ordini aperta da DDT, la Proprietà ‘Numero riga’ può essere trascinata da Object Navigator e salvata con Profilo (#TT01044/24)
> - SD - Le versioni successive di un’Offerta ereditano i Documenti allegati (#TT01149/24)
> - Risolti alcuni bug con l'interfaccia utente del Supervisor e aggiunto il filtro Log sugli eventi
> - SD-Nell'evasione ordini clienti in fattura, revisione assegnazione date competenza economica nell'analitica (#TT01275/24)
> - PR - revisione gestione note di riga nell’import dei movimenti bancari su file cbi (#TT01101/24)
> - PR - revisione contabilizzazione movimenti bancari da riconciliazione conti (#TT01215/24)
> - FI - gestione del parametro di localizzazione 'IN-IntrastatRoundByOperation' nella ripresa dati da fatture acquisto/vendite (#TT02412/22)

### Patch 608.1-0032 - 21/03/2024

> - MS - Corretto bug che causava la perdita del riferimento alla riga di progetto a seguito di un ripristino dell’ordine di produzione (#TT01014/24)
> - MS - Corretto bug che non cancellava il riferimento alla riga di progetto a seguito della cancellazione del progetto dall’interno di un ordine di produzione (#TT01014/24)
> - MES - Corretto bug nelle Segnalazioni di Produzione che non riconosceva l’ordine temporale corretto delle segnalazioni, quando erano inserite allo stesso orario (#TT00985/24)
> - MS - Corretti errori nella procedura di Costificazione delle Commesse di produzione e nella stampa Costificazione Commessa (#TT00497/24)
> - SD - Contabilizzazione automatica fatture di vendita- rivista la procedura di contabilizzazione automatica note di credito con tipo movimento non iva (#TT00666/24)
> - SD - Le spese Varie presenti negli Ordini vengono tutte riportate nel documento riepilogativo che evade gli Ordini (#TT01102/24)
> - FI - Revisione contabilizzazione fatture da ricevere per gestione bolle con articoli non codificati e/o documento non caricato a magazzino (#TT00555/24)
> -  FI - inserimento tipi operazione fiscale ‘Acquisto rottami, cascami, ecc.’ e ‘Pulizia, demol., … edifici’ (#TT00804/24)
> - MES - Corretto bug che causava un blocco temporaneo dell’applicativo in caso di registrazioni di Dichiarazioni di Produzione con numerose segnalazioni per fase (#TT00946/24)
> - MES - Corretto bug nelle Dichiarazioni di Produzione che non aggiornava il tempo macchina e il tempo uomo quando si eseguiva la procedura di Ricalcolo tempi (#TT01017/24)
> - FI - IVA a CREDITO sul file per la LIPE tiene conto anche dell’IVA indetraibile da pro-rata (#TT01596/23)
> - ARM - post migrazione - sostituire il codice dei moduli Wcf con WebApi
> - FI - abilitata la cancellazione delle righe contabili importate da DocFinance (#TT01046/24)
> - CO -  nella stampa del consolidato di Progetto, revisione filtro per tipo progetto (#TT01172/24)
> - SCM - Corretto bug nella procedura di Creazione Automatica Ordini Fornitore da Ordine Cliente che non calcolava correttamente le quantità nella procedura di Evasione Ordine in DDT quando venivano modificate le quantità dell’ordine fornitore nel prototipo (#TT01199/24)



### Patch 608.1-0031 - 15/03/2024

> - CO - calcolo ammortamenti del controlling, revisione elaborazioni dati iniziali (#TT00477/24)
> - Migrazione ARM- eliminazione delle proprietà orfane degli oggetti business personalizzati (OBJ_BusinessObjectPropertyCustomProperties)
> - FI - blocco del ricalcolo FSPostingPaymentSet quando si entra in modifica di una registrazione e non si ricalcolano le partite (#TT00362/24)
> - SD - Quando viene aggiunta una nuova riga all’interno di un Ordine Cliente per cui vengono generate automaticamente le Commesse di Produzione, la nuova riga nella commessa assume stato Non esaminato (#TT00984/24)
> - SD - Nella procedura di creazione Fatture da DDT, viene mantenuto l’ordinamento alfabetico per Ragione sociale se inserito nella tab di filtro (#TT00929/24)
> - FI - nella procedura automatica di creazione intra1 da fatture, revisione del campo 'paese origine' in caso di raggruppamento eseguito nei parametri (#TT00715/24)
> - WM - Corretto bug in analisi disponibilità inerente alle dichiarazioni di produzione nel caso in cui fosse gestito il wip (#TT00947/24)
> - FI - revisione gestione arrotondamenti partite in valuta nella contabilizzazione fatture di vendita (#TT00938/24)
> - Valorizzazione riferimenti numero e data ordini ,bolle e documenti conto lavoro (#TT1036/24)
> - MS - Corretto bug nel calcolo del costo totale lavorazioni nella costificazione della commessa (#TT02545/23)
> - MES - Corretto bug nelle dichiarazioni di produzione nei tab relativi alle causali di sospensione e agli scarti.
> - SD - Implementato e migliorato il funzionamento del flag “Evaso forzato” presente nelle righe degli ordini di vendita e anche del campo stato evasione presente nella testata (quando viene selezionato- “Evaso forzatamente”); ora quando vengono attivati viene mostrato un messaggio che avvisa che- “L'evasione forzata della riga comporta l'automatica eliminazione di eventuali ordini pianificati collegati a commesse in stato schedulata e l’evasione delle commesse in stato schedulata e non esaminata. Per quanto riguarda documenti generati a fronte di commesse in stato lanciato o esecutivo le commesse e documenti non verranno modificati.” (#TT00219/24)
> - CO - BUG in stampe riclassificato (#TT00917/24)
> - PR - Corretto bug in fase di contabilizzazione pagamento fornitore di una partita precedentemente chiusa parzialmente. La registrazione di pagamento  del residuo riportava erroneamente il totale della partita (#TT00845/24)
> - WMS - Implementato la gestione spunta del WMS. Ora se nel picking è stato associato un lotto all'articolo questo viene proposto direttamente nella gestione spunta (#TT00589/24)


### Patch 608.1-0030 - 07/03/2024

> - WMS - Nella form giacenza articolo del WMS è stata aggiunta una nuova colonna per la visualizzazione delle giacenze.
Le colonne facenti riferimento alla giacenza sono tre- Giacenza (Gest.), Giacenza e Giacenza(FC) (FC = Fattore di conversione)
Nel caso di utilizzo della *UM Def. WMS* (presente nel tab Unità di misura alternative dell'anagrafica articolo), la prima risulta valorizzata con l'unità di misura principale dell'articolo, la seconda risulta popolata con la giacenza espressa nell'unità di misura alternativa dell'articolo e data dalla somma dei movimenti, mentre la terza è data dalla giacenza espressa nell'unità di misura alternativa ma calcolata con il fattore di conversione.
Nel caso in cui, il flag *UM Def. WMS* non sia abilitato, le colonne *Giacenza* e *Giacenza(FC)* non verranno valorizzate (#TT00446/24)
> - CRM -  E’ possibile cancellare i Riferimenti dei Contatti CRM se non hanno collegamenti (#TT00748/24)
> - FI - per la localizzazione HR, visualizzazione in griglia iva dei campi ‘escluso da causale automatiche’ e ‘aliquota iva per causali automatiche’ (#TT02964/23)
> - SCM - Corretto errore nella compilazione degli sconti nei Listini di Conto Lavoro (#TT00227/24)
> - SD - Ottimizzata la possibilità di inserire nuovi articoli in listini corposi (#TT02980/23)
> - SD - Risolto errore che impediva l’inserimento di nuove righe nella tabella Fatturato vendite (#TT00329/24)
> - SD - A seguito di una modifica del Fatturato Vendite all’interno di un DDT di Vendita, non vengono più aggiornati Data e Utente dell’ultima Modifica nella testata dell’Ordine cliente collegato (#TT00308/24)
> - FI - Esportazione Intrastat- sezione doganale e valore negativo nel riepilogo se inserito nella sezione quinquies (#TT00580/24)
> - SD - Ottimizzazione della Gestione Acconti in caso di database migrati (#TT00781/24)
> - FI - revisione tree dell’help centri di costo (#TT00828/24)
> - FI - revisione tab di rollback della ripresa ammortamento cespiti nelle chiusure infrannuali (#TT00805/24)
> - SCM - Corretto errore nella procedura di Creazione Automatica Ordini fornitore da Ordine Cliente che non riportava più la quantità dell’ordine nel Prototipo, a seguito di una modifica fornitore (#TT00777/24)
> - PR - Profilo in esposizione clienti (#TT00853/24)

### Patch 608.1-0029 - 01/03/2024

> - SH - Correzione dell’errore che non manteneva le modifiche nel Profilo se predefinito, nella modulo Attività di Fluentis (#TT00592/24)
> - SCS - L’ordine di conto lavoro generato da un ordine di produzione con fase esterna ora rileva il prezzo dal Listino di Conto lavoro anche quando nel listino è presente solo l’articolo, senza la fase (#TT00439/24)
> - CO - Ammortamenti per il controlling, tabella CO_DepreciationYearStartings righe replicate + valori errati (#TT00477/24)
> - WM - Corretto errore nella conversione della quantità alternativa proveniente da un Rientro di Conto lavoro, nella form di Dettaglio Movimenti (#TT00517/24)
> - WM - Corretto bug nel calcolo delle differenze inventariali, nel caso in cui nella lista inventariale sia valorizzata l'unità di misura alternativa (#TT00366/24)
> - WMS - Corretto bug nella form inventario del WMS, dove nel caso in cui le liste fossero gestite con UM Alternative, il dato dell'UM Gestionale che viene calcolato mediante fattore di conversione non rispettava i decimali previsti dall'unità di misura (#TT00675/24)
> - WM - Nelle procedure di Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo, l’Object Navigator presenta l’oggetto FSItemStockSummary (#TT00650/24)
> - MES - Corretto bug nella registrazione di delle dichiarazioni di produzione con articoli alternativi presenti (#TT00649/24)
> - WM - Corretto errore nella procedura di aggiornamento Costo Medio e Costo Ultimo (#TT00585/24)
> - FI - In caso di creazione Fattura di vendita da Partita di anticipo, le scadenze vengono create con il flag Manuale (#TT00672/24)
> - MES - Corretto bug nelle dichiarazioni di produzione (#TT00702/24)
> - SCM - Corretto errore nell’evasione di una bolla in fattura con prezzo ivato (#TT00220/24)
> - SD - Nella Creazione fattura da DDT, le righe Conai seguono i segni delle righe del documento (#TT00670/24)
> - SD - Per agenti con pagamento avvenuto o scadenza maturata, la stampa provvigioni maturate e la creazione automatica liquidazione provvigioni ora considerano maturate le provvigioni inserite in una fattura a zero se all'interno del documento c'è uno storno acconto riferito ad un acconto con partita incassata (#TT00620/24)
> - FI - revisione test quadratura registrazione generale con analitica in caso di divisioni miste (#TT00543/24)
> - PR - bonifici Sepa per localizzazione HR, revisione struttura per tag NbOfTxs e CtrlSum mancanti all’interno della collezione PmtInf (#TT00791/24)
> - SD - Per le procedure di Evasione DDT ed Evasione Fatture, Pagamento e Destinatario vengono presi dal Primo Ordine o da Anagrafica, a seconda dei Parametri impostati nel tab Evasione (#TT00369/24)
> - WMS - Aggiunto il flag "Mantieni ubicazione" nella tabella dei "Tipi liste inventariali". Questo fa in modo che in fase di inventario con il WMS l'ubicazione inserita non verrà variata fino a quando non sarà  letta un'altra ubicazione (#TT00726/24)
> - WMS - Nella form Lista trasferimento UDC del WMS, il tab  Dettaglio UDC verrà abilitato solamente dopo aver inserito tutti i dati di testata (#TT03336/23)
> - FI/CO/SH - nelle aliquote iva, aggiunto nuovo flag per identificare le aliquote di vendita estere che caricano il plafond per il periodo successivo (#TT00343/24)
> - WMS - Corretto bug nelle form UDC che non visualizzava correttamente lo stato delle liste di prelievo e trasferimento nel WMS (#TT00792/24)
> - SD - A seguito della Conversione di un’Offerta in Ordine Cliente vengono riportati anche i dati di Peso Netto e Peso Lordo, se presenti nell’Offerta (#TT00746/24)
> - SD - Correzione dell’errore che richiedeva uno sconto a scaglione nel caso di inserimento del Mask in un nuovo Arrotondamento (#TT00756/24)


### Patch 608.1-0028 - 20/02/2024

> - QY - Risolto bug nel Controllo articoli (#TT00135/24)
> - MPS - Risolto bug nella procedura MRP (#TT00456/24)
> - SD - Nelle fatture di vendita, abilitata la modifica dei dati di analitica quando il documento è stato gestito per lo Sdi e non è contabilizzato (#TT00182/24)
> - SH - Revisione gestione allegati nei workflow con azione ‘Email transizioni workflow’ (#TT00436/24)
> - CRM - Nella Ricerca Opportunità, i campi trascinati da Object Navigator possono essere aggiunti solo al blocco di colonne centrale (#TT03617/23)
> - PR - gestione data scadenza effetto nella nota di dettaglio del movimento (#TT00430/24)
> - WM - Corretta visualizzazione della stampa Inventario a quantità valorizzato (#TT00455/24)
> - PR - revisione creazione effetti da partite per esclusione messaggio su residuo partite parzialmente aperte (#TT00502/24)
> - SCM - procedura di contabilizzazione fatture da ricevere, gestione della dimensione progetto (#TT02925/23)
> - PR - la contabilizzazione dei pagamenti fornitori mostra le causali valide alla data impostata nella form (#TT00444/24)
> - FI - revisione della riapertura assestamenti delle chiusura automatiche conti, caso con assestamenti con/senza singola registrazione impostato (#TT00380/24)
> - BI - Correzione del passaggio al widget successivo nei moduli di filtro quando si preme invio da kb (#TT00569/24)
> - WEBAPI- risolta l’anomalia legata al settaggio della ResidualQuantity di bolle di acquisto e bolle vendita per righe con quantità 1 (#TT00480/24)
> - SD - Nell’Help articoli, tab Documenti, vengono popolati i campi Classe, Codice e Descrizione articolo (#TT00381/24)
> - WMS - Apportate delle migliorie al layout della form di gestione spunta (#TT00210/24)
> - MES - Corretto bug nella visualizzazione di lotti e serial number nelle Dichiarazioni di Produzione (#TT00487/24)
> - WM - Corretta visualizzazione dei Movimenti di magazzino per gli articoli con Unità di misura alternativa (#TT00531/24)
> - WM - Corretto bug nella procedura Sottoscorta delle stampe gestionali che non calcolava correttamente la quantità di riordino (#TT00481/24)
> - WEBAPI - risolta l’anomalia legata al settaggio della ResidualQuantity di bolle di acquisto e bolle vendita per righe con quantità 1(00479/24)
> - SCS - Se nei Parametri di Conto Lavoro è impostato il flag ‘Considera magazzini in base al tipo DDT rientro’, nell’Evasione di un Ordine il magazzino viene cercato con le seguenti priorità- prima nel Tipo DDT; dopo nell’Ordine; dopo nei Parametri di Conto lavoro. Se il Parametro non è attivo, le priorità sono le seguenti- prima nell’Ordine, poi nei Parametri (#TT00558/24)
> - WMS - Corretto bug in gestione spunta nel caso in cui si cancellasse una spunta legata ad un movimento con contro partita (#TT00532/24)
> - Fi - revisione stampa liquidazione iva periodica, visualizzazione del subreport del plafond solo se questo ha flag default
> - FI - Contabilizzazione fatture- revisione parte analitica contabilizzazione fatture con date competenza diverse (#TT00240/24)
> - SCS - Se nei Parametri di Conto Lavoro è impostato il flag ‘Considera magazzini in base al tipo DDT rientro’, nell’Evasione di un Ordine il magazzino viene cercato con le seguenti priorità- prima nel Tipo DDT/Rientro; dopo nell’Ordine; dopo nei Parametri di Conto lavoro. Se il Parametro non è attivo, le priorità sono le seguenti- prima nell’Ordine, poi nei Parametri (#TT03583/23)
> - SH - Alla creazione di un nuovo Contatto, la tab Parametri di raggruppamento viene popolata con i valori di default (#TT00601/24)
> - PR - revisione importazione file xml Sepa conti correnti, localizzazione HR e IT (#TT00264/24)
> - PR - In case, Note di rilascio- modificata la contabilizzazione insoluti per inserimento riferimento alla data scadenza effetto insoluto (#TT00549/24)
> - MPS - Inserite alcune migliorie e correzioni nella procedura MRP (#TT02029/23)
> - MES - Corretto bug nelle dichiarazioni di produzione, che ricalcolava i materiali impiegato nel caso in cui fosse inserito un articolo nel tab Articoli alternativi (#TT00571/24)
> - MES - Corretto bug nelle dichiarazioni di produzione che si verificava al momento della registrazione (#TT00606/24)
> - WMS - Corretto bug nella for di filtro degli inventari (#TT00605/24)
> - MES - Migliorata la funzionalità di “Generazione lotti” presente nel filtro degli ordini di produzione. Ora la quantità del lotto di origine non può essere variata nel caso in cui siano già state create delle Liste di prelievo, delle Dichiarazioni di produzione, oppure nel caso in cui alcuni materiali siano già stati consumati. In questi casi è comunque possibile creare nuovi lotti di produzione, ma senza poter variare la quantità del lotto di origine (#TT00353/24) 
> - PM - Procedura aggiornamento prezzi progetto e documenti collegati, corretta conversione tra diverse unità di misura (#TT03661/23)       
> - WM - Implementata la procedura di Analisi disponibilità nella gestione degli ordini di conto lavoro (#TT00350/24) 
> - WM - Corretto bug nella procedura di Analisi disponibilità nella gestione degli ordini di conto lavoro (#TT00190/24)


### Patch 608.1 -0027  - 08/02/2024

> - SCM - richieste di acquisto  - risolvere il problema di salvataggio righe su analitica senza centro di costo (#TT00095/24)
> - SCM - Risoluzione dell’errore uscente al salvataggio di un documento, dopo aver inserito un articolo con lotto partendo dalla selezione del Tipo riga (#TT03505/23)
> - SCM - A fronte di una modifica del conto all’interno di un ordine fornitore non viene più mantenuto l’imponibile valorizzato (#TT00035/24)
> - PM  - Procedura di creazione progetto da template, se presenti indirizzi di destinatario e destinazione predefiniti per il cliente, prevalgono sugli indirizzi indicati nel template (#TT00122/24)
> - SH - Nelle attività -task inserita indicazione della società e divisione in cui sono state inserite, al fine di garantire la corretta intestazione dei documenti aperti direttamente dalle attività (#TT00280/24)
> - SD  - Risolvere il problema del esportazione colonna "Stato SDI" (#TT00321/24)
> - WM - Corretto bug nella procedura Sottoscorta delle stampe gestionali che generava erroneamente la commessa anche per gli articoli con tipo approvvigionamento “Acquisto” (#TT00438/24)
> - MPS - Nella form di Sequenza fasi top down grid, inserendo la sequenza e confermando la riga, ora il focus rimane sulla riga appena modificata anche dopo l’aggiornamento della form (#TT00351/24)
> - WM  - Correto bug in valorizazzione magazzino (#TT02573/23)
> - SCS - Correzione bug che bloccava l’inserimento righe di Ordini di conto lavoro (#TT00284/24)
> - SH - Correzione dell’errore che non popolava la combo box degli Extra Data aggiunti con Form Navigator (#TT00415/24)
> - SH - Eseguendo l’Apri form dalla combo box di un Extra Data aggiunto tramite Form Navigator, la tabella che si apre risulta popolata (#TT00412/24)
> - FI  - Ripresa ammortamento cespiti - Controlling (#TT00324/24)
> - FI - cambiamento calcolo per non dedutibile - versione RO
> - SH - fix filtering  - automatic supplier payment creation procedure(#TT00376/24)
> - SD - Aggiornamento della stampa standard Fattura di vendita (#TT00409/24)
> - SD - Creazione file xml - revisione del campo regime fiscale in autofattura con cedente codificato come agente (#TT00469/24)
> - FI  - revisione contabilizzazione ammortamento per assegnazione divisione ai movimenti di analitica (#TT00216/24)
> - SD  - Calcolo Provvigioni- Aggiornato utilizzo parametro di attribuzione provvigioni per le righe di Acconto e Storno Acconto (#Tipo riga 6 e 7) (#TT001258/21)
> - FI  - nei parametri di contabilità è stato inserito un nuovo campo con il limite minimo di debito iva da versare, impostato di default a 100€ per gli anni a partire dal 2024. Allineamento dei report standard della liquidazione iva periodica (#TT00349/24)
> - FI - Revisione procedura di contabilizzazione automatica note di credito con prezzo ivato (#TT00119/24)
> - PR  - in modifica degli effetti attivi, abilitazione della modifica del flag accreditato e dello stato effetto quando la società è codificata per DocFinance (#TT01387/23)

### Patch 608.1 -0026  - 30/01/2024

> - CRM - Quando un’Attività viene Completata, si aggiorna la Data di chiusura dell’Attività all’interno del Workflows Log che l’ha creata; se l’Attività viene Riaperta, la Data di chiusura nel Workflows Log viene cancellata (#TT00097/24)
> - MPS  - Corretto bug in costificazione dove non erano visualizzati i costi preventivi dei materiali e il valore totale del costo manodopera (#TT02967/23)
> - FI - Import partite  - Corretto bug in fase di importazione partite aperte da Excel che non gestiva correttamente il tasso di cambio utilizzando il tasso inverso anzichè quello diretto.
> - WMS - Corretto bug che non riportava correttamente i dati relativi all’operatore nelle liste inventariali.  Corretto bug nelle liste di trasferimento all’inserimento dell’ubicazione (#TT00153/24)
> - WM  - Sistemazione Generazione DDT da Picking con Cambio Errato (#TT00364/24)
> - CRM - Il Manager del task può modificare l’Operatore/Ruolo assegnato all’Attività creata (#TT00211/24)
> - CO - fix filtro per divisione - prendere la divisione da movconti e non da registrazione
> - WM  - Aggiunto sul report del Giornale di magazzino il filtro per società e divisione (#TT00375/24)
> - FI  - Gestione export cedolini ore dipendenti per Sistemi (#TT00212/24)

### Patch 608.1 -0025  - 25/01/2024

> - CRM  - Sincronizzazione calendario tra Fluentis e Outlook (#TT03320/23)
> - MPS - Corretto bug nella gestione degli stati di testata e di riga delle commesse multiprodotto (#TT03550/23) 
> - MES - Corretto bug nelle Dichiarazioni di produzione che cambiava il magazzino e la causale di consumo di un articolo nel momento in cui si inseriva una quantità di scarto (#TT00025/24)
> - SD - La creazione del compenso da liquidazione agenti ora riporta il tipo/soluzione di pagamento della liquidazione e non anche quello dell’anagrafica agente (#TT00192/24)
> - Risolto il bug dell'utilizzo di un servizio OData personalizzato all'interno di uno script client
> - ARM - Fix exception all'ingresso della gestione Gruppi - Restrizioni (#TT00229/24)
> - SCM - Corretto bug nei DDT di acquisto che, nel caso di modifica del prezzo in fattura rimanevano valorizzati anche a seguito di cancellazione della fattura (#TT00147/24)
> - MPS  - Corretto bug nel rilascio degli ordini pianificati di conto lavoro (#TT00170/24)
> - SD - Sistemata la proposta delle date competenze sulla parte analitica nelle fatture di vendita (#TT00240/24)
> - MES  - Corretto bug che non manteneva il legame con gli ordini figli al momento del rilascio degli ordini pianificati in ordini di produzione (#TT00161/24)
> - SD  - Revisione gestione blocco fido quando il documento in modifica è quello che causa lo sforamento ed è già autorizzato (#TT00206/24)
> - CRM  - La Ricerca Attività della label Attività si aggiorna correttamente se un task viene Completato (#TT00150/24)
> - SCM - Aprendo la procedura di Creazione Automatica Ordini e spostandosi nel tab Ordini cliente del Filtro, non si viene più reindirizzati automaticamente al tab Scelta fornitore (#TT03511/23)
> - Aggiunti Import e export paghe for sistemi (#TT00151/24)
> - FI  - Gestione export cedolini ore dipendenti per Sistemi (#TT00212/24)
> - FI  - Revisione suddivisione partite per righe collegate a scadenze fatture acquisto (#TT00269/24)
> - PR  - Revisione apertura partite da contabilizzazione pagamenti fornitori quando i dettagli non sono collegati a partita (#TT00261/24)
> - PR  - Nei pagamenti fornitori, nell’inserimento manuale delle righe revisione gestione campo importo in valuta per gestione decimali (#TT00281/24)
> - SH  - Revisione fast start per localizzazione CH
> - FI  - Nuovo campo "Codice altre somme non soggette a ritenuta" dentro la form Gestione tipo ritenuta (#TT01453/23)
> - PR - Contabilizzazione insoluti- revisione contabilizzazione insoluti con flag ‘Contabilizzazione riepilogativa’ attivo (#TT00239/23)
> - SD - Correzione dell’errore che si generava nella Creazione Fattura dalla Ricerca Ordini clienti, nel caso di Ordine con una riga articolo codificato, una riga articolo non codificato e una riga note (#TT00291/24)
> - FI - CU2024  - Rilascio nuovo report Certificazione Unica 2024

### Patch 608.1 -0024  - 17/01/2024

> - WMS  - Nella form Lista traferimento UDC è stato aggiunto lo stato della lista sia come filtro che come colonna sulla griglia dei risultati (#TT03338/23)
> - CO  - revisione gestione flag ‘visualizzazione importi negativi’ nella stampa bilancio infrannuale (#TT00099/24)
> - WMS  - Migliorato il contrasto tra le righe inserite e quella selezionata (#TT00102/24)
> - WMS  - Corretto bug sul framework che generava il blocco dell’applicazione (#TT00117/24)
> - WMS  - Corretto bug sulla Conferma Liste Trasferimento del WMS a causa del quale il movimento di contropartita non riporta l'ora esatta (#TT00131/24)
> - SH  - filtro dei record della tabella Filiali aziendali per società attiva (#TT00022/24)
> - MS  - Corretto bug che causava un errore nella schedulazione di una commessa in presenza di una personalizzazione sugli articoli (#TT00085/24)
> - SH/FI/PR  - SHC_Description to 80char (#TT03469/23)
> - MPS  - Risolto bug in Schedulazione Generale e MRP legato all’analisi disponibilità (#TT03566/23, #TT00033/24)
> - WMS  - Nella form lista di trasferimento UDC il pulsante Salva viene abilitato solo dopo aver inserito tutti i dati necessari (#TT03336/23)
> - MPS  - Corretto bug nel calcolo dell’analisi disponibilità per articoli con migliaia di componenti (#TT00173/24)
> - FI  - revisione inserimento alienazioni cespiti in registrazioni create da contabilizzazione fatture di vendita (#TT00196/24)
> - MES  - Risolta exception in registrazione dichiarazione con lotti quando siamo su una fase dopo la prima e Fluentis dovrebbe scaricare il lotto dalla fase precedente (#TT00185/24)
> - SH  - Filtering by item extension property(#TT00011/24)
> - CO  - "Nella maschera dei movimenti fisici, visualizzazione della divisione aziendale di riferimento quando il parametro generale 'FS -CO -CostCenterByDepartment' è impostato 'false'" (#TT00029/24)
> - WM  - Corretto bug che ripotava in maniera errata la larghezza di una UDC nel form Confezionamento dell’anagrafica articolo (#TT00177/24)

### Patch 608.1 -0023  - 11/01/2024

> - FI  - La stampa di controllo delle dichiarazioni di intento esclude ora le righe articolo ddt evase o forzatamente evase (#TT03419/23)
> - FI  - Nella maschera della ricerca mutui, valorizzazione del campo ‘Importo residuo’ in griglia (#TT03633/23)
> - FI  - Revisione visualizzazione flag ‘Fatturato’ nel terzo tab della form di gestione partite d’anticipo (#TT03633/23)
> - MES  - Corretto bug nelle dichiarazioni di produzione che non caricava correttamente le UDC create all’interno della dichiarazione (#TT03393/23)
> - MPS  - Risoluzione dell’errore che chiudeva Fluentis in caso di selezione di più Tipi ordine nei filtri della Definizione MPS per gli Ordini cliente (#TT00088/24)
> - MES  - Implementata la possibilità di trascinare le informazioni presenti nel tab generalità dell’articolo anche nel filtro dei cicli di lavoro e degli ordini di produzione (#TT03650/23)
> - WM  - Corretto bug in Visualizzazione giacenze nella quale non veniva visualizzata correttamente la giacenza degli articoli contenenti nella descrizione il carattere ‘#’ (#TT00006/24)
> - FI  - Revisione procedura differenza tra saldo contabile e partite aperte per gestione cambi su partite in divisa (#TT00073/24)
> - WMS  - Nel tab UDC della gestione spunta del WMS il pulsante Stampa UDC si abilita correttamente (#TT00091/24)
> - SD  - Nella Creazione automatica liquidazione provvigioni e creazione compenso da liquidazione agente, revisione della conversione valori in divisa agente (#TT03444/23)

### Patch 608.1 -0022  - 08/01/2024

> - Revisione stampa BankCreditSituation per renaming oggetto
> - MS  - Sequenza fasi  - Risolta anomalia all’esecuzione della funzionalità di ‘Cambio data’ (#TT03670/23)
> - WMS  - Corretto bug in Conferma trasferimento UDC sull’aggiornamento dei dati presenti nella tabella dettaglio UDC (#TT03340/23)
> - WMS  - In gestione spunta migliorato il layout del tab articoli spuntati (#TT03130/23)
> - PR  - revisione inserimento righe nella form di Gestione della liquidità (#TT03677/23)
> - FI  - nella ripresa ammortamento cespiti del controlling, revisione utilizzo flag di dimezzamento percentuale primo anno (#TT03681/23)
> - WMS  - Corretto bug in Conferma trasferimento liste UDC che non riportava correttamente le causali di carico scarico nel caso in cui il magazzino di partenza e arrivo fosse lo stesso (#TT03337/23)
> - FI  - modifiche alla gestione campi a struttura variabile per la CU (#TT00019/24)
> - WMS  - Corretto bug che impediva di vedere correttamente le informazioni presenti nei messaggi delle exception (#TT03489/23)
> - SH, PR  - revisione gestione edit di calcolo castelletti in anagrafica banche e in distinte di presentazione (#TT03680/23)
> - SH  - in tabella aliquote iva della localizzzione S.Marino, visibilità del codice per le fatture elettroniche (#TT03675/23)
> - SD - La fattura di vendita può essere filtrata dopo il tipo di persona da Contatti- Entità legale (#TT03667/23)
> - MES  - Risolti bug nelle dichiarazioni di produzione nel caso in cui vengano gestite le quantità scartate con articoli a lotti e anche nel caso di una registrazione con quantità prodotta uguale a zero e quantità scartata maggiore di zero (#TT03708/23  - #TT00005/24)
> - SD  - Creazione del tab Parametri di raggruppamento per Cliente/Fornitore in Anagrafica contatto. Questi parametri hanno priorità rispetto ai Parametri di raggruppamento generali (#TT03564/23)
> - FI  - nella contabilizzazione delle fatture di vendita è stato inserito una nuova opzione per assegnare alla registrazione la divisione che deriva dalla filiale impostata nel cliente della fattura (#TT00031/24)
> - FI  - nei parametri generali è possibile definire il codice ‘FS -CO -CostCenterByDepartment’ (di tipo Boolean) per non filtrare i centri aziendali in base alla divisione attiva, ma solo per società (#TT00028/24)
> - FI  - revisione creazione solleciti per troncamento testi (#TT00037/24)
> - SD  - Corretto il funzionamento del filtro sugli Extra Data nei DDT di vendita (#TT00058/24)

### Patch 608.1 -0021  - 21/12/2023

> - PM   - gestita propagazione extradata da articolo a righe di servizi nell'intervento (#TT03515/23)
> - WMS  - Risolto bug nella form Spunta articolo nel caso di molte righe picking (#TT03353/23)
> - CRM  - Durante l’invio di una Newsletter, nel campo Bcc vengono riportate tutte le email destinatarie prese dalla Lista di distribuzione, in copia nascosta (#TT03576/23)
> - WMS  - La form di Gestione Spunta può essere utilizzata anche per la Conferma Picking, quindi può essere utilizzata senza UDC. Questo permetterà di confermare una riga picking senza l’utilizzo dei pallet oppure di gestire il prelievo dei materiali degli ordini di produzione (#TT03130/23)        
> - SCM  - Correzione dell’errore che non faceva aggiornare i totali dopo la procedura di Storno ricevimenti interna ai DDT di acquisto (#TT03578/23)
> - WMS  - Implementato il fatto che il focus ritorni nel campo barcode dopo aver creato la nuova UDC in gestione spunta (#TT03345/23)
> - MES  - Corretto bug nelle dichiarazioni di produzione nel caso in cui si andasse a cambiare il lotto di un articolo alternativo (#TT03595/23)
> - WMS  - In gestione spunta del WMS nel caso in cui venga mostrato il messaggio di indisponibilità di un articolo, il focus ritorna sul campo barcode direttamente (#TT03352/23)


### Patch 608.1 -0020  - 15/12/2023

> - CRM  - Le Attività create dalle Attività in sospeso di un’Opportunità, riportano il Contatto CRM intestatario dell’Opportunità (#TT03431/23)
> - CRM  - Nella Ricerca Attività - in sospeso, inserendo il filtro Conto vengono visualizzate anche le Attività create quando il Conto era ancora un Contatto CRM (#TT03431/23)
> - CRM  - La cancellazione del filtro "Contatti attivi da" dalla Ricerca Opportunità permette di visualizzare anche le Opportunità chiuse (#TT03414/23)
> - FI  - Revisione contabilizzazione Giroconto partiite (#TT03521/23)
> - FI  - Risolto errore in fase di creazione del messaggio dalle sottoclassi SDI  - application exception 24734/2023 (#TT03519/23)
> - PM  - risolta casistica di cancellazione risorse assegnate ad una wbs nel caso di cambio articolo della wbs (#TT03421/23)
> - SCS  - Risoluzione dell’errore che impediva l’inserimento delle UM alternative negli Articoli dei Rientri di conto lavoro che le prevedono (#TT03382/23)
> - WMS  - Corretto bug in Sposta articolo del WMS che non inseriva ore, minuti e secondi, nel campo data creazione dei movimenti in contro partita (#TT02482/23)
> - FI  - Regolarizzazione valute  (#TT03281/23)
> - WM  - Corretto bug in analisi disponibilità inerente alle righe relative alle commesse di produzione (#TT03224/23)
> - MES  - Risolto bug nelle segnalazioni di produzione che inseriva un valore diverso da zero nella quantità prodotta nel caso in cui si inserisse una sospensione (#TT03411/23)
> - CO  - nella stampa del consolidato di progetto del controlling, aggiunto filtro (non obbligatorio) di selezione della registrazione di consolidamento da stampare (#TT03485/23)
> - MES  - Corretto bug nelle dichiarazioni di produzione che agganciavano la causale di carico scarico errata prendendola dai semilavorati WIP anziché dal box dei semilavorati nelle parametri di produzione.  (#TT03508/23)
> - FI  - Gestione delle fatture d'acquisto con righe miste "Inversione contabile/non inversione contabile" (#TT03285/21)
> - CO  - creazione chiusure infrannuali, revisione gestione saldi dei centri di costo (#TT03530/23)
> - SD  - L’IVA della Dichiarazione d’intento nelle Spese dei Riepiloghi viene inserita nel DDT creato da Ordine, anche se si passa per Picking (#TT02907/23)
> - WMS  - Nella form conferma trasferimento del WMS aggiunto il messaggio di "Operazione effettuata" anche nel caso in cui venga confermata direttamente dal filtro di ricerca (#TT03339/23)
> - QY  - Controllo articoli  - Gestione delle prove con Tipo valore “Testo”  - All’inserimento del “Valore rilevato” non viene più proposto l’ “Esito” ma è l’operatore che lo deve indicare (#TT03523/23)
> - WM  - Nell'anagrafica lotti, nei tab carico e scarico implementata la possibilità di visualizzare i dettagli sulle quantità evase con l'aggiunta delle colonne "Numero riga", "Quantità" e "Unità di misura" (#TT03487/23)
> - SH  - La colonna ‘Destinazione’ della griglia ‘Elenco destinazioni’ del tab ‘Consegna’ dell’Anagrafica contatto è stata adattata per contenere fino a 80 caratteri, uguale limite della ‘Ragione sociale’ del contatto (#TT03307/23)
> - CO  - nella contabilizzazione rimanenze delle chiusure infrannuali, valorizzazione della descrizione movimento per tutte le registrazioni create (#TT03495/23)
> - FI  - Corretto bug in fase di contabilizzazione distinta Ri.ba (modalità iva per cassa) contenente effetti creati accorpando più di una partita, che generava scritture di giroconti iva con importi errati (#TT02548/23)
> - FI  - revisione rollback contabilizzazione insoluti (#TT03579/23)
> - FI/PR  - Corretto bug in fase di contabilizzazione distinta di presentazione riba con iva per cassa che non leggeva i giorni banca dall’anagrafica creando la registrazione di giroconto in data errata (#TT02552/23)
> - SCS  - La ‘Quantità da produrre’ dei ‘Dati articolo’ degli Articoli degli Ordini di Conto Lavoro è stata allineata con la EffectiveQuantity presente nei riepiloghi di riga (#TT03401/23)
> - QY  - Claims  - Nuova gestione di "Tipo di notifica", "Tempo di notifica" e "Riferimento sito cliente" (#TT03536/23)
> - FI  - nella griglia dei dettagli di un nuovo compenso, resi editabili i campi del range di date competenza economica (#TT03585/23)
> - PR  - contabilizzazione insoluti, revisione gestione registrazione riepilogativa (#TT03446/23)

### Patch 608.1 -0019  - 11/12/2023

> - WM  - bug fix per valorizzazione magazzino
> - MES  - Risolto bug nelle segnalazioni di produzione che inseriva un valore diverso da zero nella quantità prodotta nel caso in cui si inserisse una sospensione (#TT03411/23)
> - FI  - CONTROLLING - corretto bug che generava valori errati nella ripresa ammortamento cespiti della chiusura infrannuale (#TT03082/23)
> - FI  - corretto bug nella form differenza tra saldo contabile e partite quando la somma delle partite da confrontare era data da partite tutte dello stesso valore (#TT03315/23)
> - PR  - Errata apertura partita in contabilizzazione Insoluto (#TT03438/23)
> - SCM  - Importazione file xml - rivista formattazione della data nell’importazione del file xml (rif #TT03194/23)
> - WM  - Allineamento tecnico in fase di selezione righe dalla griglia delle giacenze per creare una registrazione di magazzino (#TT02776/23)
> - WM - Crea la possibilità di arrivare a una lista di inventario di un secondo utente anche se l'inventario e aperto da un altro utente. E un inventario chiuso diventa non modificabile (#TT03443/23)
> - CRM  - Risolto errore per il quale non veniva trovato il campo Email nel Template, durante l’invio di una Newsletter (#TT03322/23)
> - Fluentis - Attività - Risolto abilitazione alla modifica di attività già inserite (#TT03391/23)
> - FI  - RO aggiunti nuovi conti su FastStart
> - MPS  - Schedulazione generale  - E' stata corretta la proposta, negli Ordini di conto lavoro, dei materiali di padri fittizi il cui consumo è previsto in specifiche fasi di lavoro purchè indicata la medesima fase e sottofase che dovrà essere presente sia nel padre non fittizio che nei figli fittizi ad ogni livello della distinta base (#TT03007/23)
> - MPS  - Material Requirements and Parameters  - modifica layout  - I parametri di Rilascio richieste di acquisto autorizzate e Rilascio ordini di produzione esecutivi sono stati spostati nei Parametri del Rilascio Ordini pianificati (#TT03085/23)
> - WM  - Prototipi  - E’ stata corretta l’applicazione della percentuale nei Costi Generali (#TT03368/23)
> - SCM  - Nelle fatture di acquisto, la modifica delle date competenza in riga articolo viene ora propagata alle righe di analitica sottostanti (#TT03214/23)
> - CO  - revisione calcolo scritture di rettifica, revisione gestione righe con stesso conto e range di date competenza ma in registrazioni differenti (#TT03478/23)
> - FI  - Contabilizzazione fatture di vendita  - con sconto sui pagamenti  - non significa prendere il valore dello sconto, ma chiudere tutte le scadenze (#TT03408/23)
> - FI  - Errore in fase di contabilizzazione fatture di vendita (#TT03331/23)
> - MPS  - Schedulazione generale  - Risolta l'anomalia di evasione commessa nel caso in cui non ci sia disponibilità degli articoli richiesti. Caso specifico di configurazione schedulazione con "Raggruppamento per articolo" e articolo padre "Fittizio" (#TT03424/23)
> - SH   - Aggiornamento della struttura versione v8 da Anaf import
> - SDI  -Attivazione pulsante di creazione fatture di acquisto per RO
> - SCM  - Stampa richieste d’acquisto  - Resa disponibile anche la stampa documento dal filtro di ricerca delle richieste d’acquisto e non solo dall’interno del documento
> - PR  - Esposizione clienti (#TT03231/23)
> - CO  - revisione elaborazione periodi del controlling per mensilizzazione dati oltre l’esercizio corrente (#TT03186/23)
> - SCM -Fatture di Acquisto - Il flag Prezzo Manuale viene trasferito dal Rientro alla Fattura di Acquisto
> - MPS  - Corretto bug nell'aggiornamento di stato delle righe delle commessa di produzione multiprodotto di acquisto e conto lavoro (#TT01533/23)

### Patch 608.1 -0018  - 29/11/2023

> - SH  - In gestione prototipi, corretto bug sul costo dei materiali preso da listino fornitore preferenziale netto (#TT03232/23)
> - SH  - corretto il file eInvoice per la versione RO 
> - WMS  - Corretto bug in rettifica articolo (#TT03366/23)
> - WM  - registrazione sbilanciata in contabilizzazione movimenti (#TT02343/23) 
> - WM  - Corretto bug nel report Inventario a quantità valorizzato nel caso in cui si selezionasse la stampa LIFO (#TT03291/23)
> - FI  - revisione contabilizzazione fatture di acquisto per valorizzazione centri di costo (#TT03392/23)
> - SD  - Revisione calcolo enasarco quota ditta per storno automatico delle quote minimali versate nei trimestri precedenti (#TT03396/23)
> - FI  - gestione imposta monofare per localizzazione S.Marino (#TT02641/23)
> - WM   - proposte di lotti ottimizzati per lo scarico e la generazione del codice del registro dei lotti (#TT03371/23)
> - SCM  - Risolto errore uscente spostandosi nel tab Listini dell’Help articoli (#TT03177/23)
> - FI  - Rollback fattura di vendita contabilizzata con pagamento impostato in fattura  - non è consentito perché la scadenza è utilizzata (#TT03407/23)
> - eInvoice RO  - allineato il parser alla legislazione
> - SD  - gestione imposta monofare per localizzazione S.Marino (#TT02639/23)
> - FI  - Categorie di immobilizzazioni  - numerazione  - anche se impostiamo una numerazione non è visibile nella ricerca (#TT03406/23)

### Patch 608.1 -0017  - 24/11/2023

> - FI  - aggiornamento versione dichiarazione RO 390 a v3
> - MPS  - Corretto bug nella procedura MRP inerente agli articolo con variante (#TT03313/23)

### Patch 608.1 -0016  - 23/11/2023

> - MES  - Corretto bug nel MES che tramite il campo codice barcode permetteva di aggiungere fasi in stato lanciato. Ora, viene mostrato un messaggio di avviso (#TT03192/23)
> - FI  - revisione gestione date competenza economica in contabilizzazione ammortamenti in localizzazioni con calcolo mensile (#TT02267/23)
> - SH  - Eliminate from FSContact  -> Code special chars !@#$%^&* | \ / _ . , ; - (#TT03207/23)
> - CO  - gestione comparazione del controlling (#TT02752/23)
> - Risolto l'errore di compilazione di script che includono un oggetto personalizzato
> - CO  - nelle chiusure infrannuali, revisione scritture di integrazione per possibile conto di rateo mancante (#TT03235/23)
> - WMS  - Corretto bug nella visualizzazione del filtro dei picking in gestione spunta. Ora un picking completamente spuntato se viene riaperto cancellando una riga di spunta, viene visualizzato correttamente anche nel filtro (#TT03216/23)
> - WMS  - In gestione spunta ora, nel caso in cui ci siano più righe di uno stesso articolo e si inizi a spuntarne uno, il focus rimane su quell'articolo fino a quando la quantità residua scende a zero e poi si posiziona su un altro (#TT03146/23)
> - WM  - I decimali vengono visualizzati correttamente sulle quantità presenti nella griglia di dettaglio dell'analisi disponibilità (#TT03113/23)
> - PM - corretto calcolo Totale Tempo nelle attività fatturate, nel caso in cui gli orari di inizio/fine/pausa siano modificati direttamente dall'intervento a cui l'attività è collegata (#TT03157/23)
> - FI  - causale automatica ‘giroconto reverse charge’ in localizzazione Serba (#TT02965/23), gestione iva automatica, flag di esclusione e impostazione base imponibile a zero nella riga
> - SH  - Alla  riapertura di un’anagrafica contatto, vengono mantenute Priorità e Percentuale degli sconti inseriti nella griglia degli sconti predefiniti (#TT03236/23)
> - SD  - Nei documenti di vendita, la modifica delle date competenza in riga articolo viene ora propagata alle righe di analitica sottostanti (#TT03214/23)
> - ARM  - import optimizations
> - FI - Nella procedura di calcolo interessi moratori, reso possibile calcolo contestuale di diversi tassi nello stesso periodo (#TT03226/23)
> - SH  - risolvere il problema della visualizzazione del log sdi per ROeInvoiceUBL e ROeCreditNoteUBL
> - SD  - Se la Descrizione articolo supera i 250 caratteri nel file xml, l’importazione dell’Ordine PEPPOL tronca la stringa per i caratteri che eccedono (#TT03258/23)
> - SD  - Valorizzazione SalesDeliveryNote -aggiunti user e domain al messaggio di documento bloccato (#TT03012/23)
> - QY  - Corretto bug in creazione di un nuovo batch record (Verticalizzazione Pharma) (#TT02976/23)
> - FI  - allineamento date competenza analitica al cambiamento date nei dettagli compensi (#TT03153/23)

### Patch 608.1 -0015  - 09/11/2023

> - CO  - la creazione di registrazioni extracontabili di chiusura manuali ora riporta l’area del controlling della chiusura stessa (#TT02924/23)
> - FI  - rollback di tutte le registrazioni relative a un documento anche se l'utente seleziona solo una registrazione dall'elenco.
> - FI  - SafT  - aggiungere una condizione all'acquisto quando si filtra la registrazione dei post.
> - Le librerie ftp sono state aggiornate per risolvere alcuni problemi di compatibilità con le aree FTP dei server Linux e il connettore IMAP è stato aggiornato.
> - WM  - Corretto bug in Gestione picking che non visualizzava correttamente il valore contenuto nel campo "Ubicazione" nel tab "Spunta" (#TT03063/23)
> - QY  - Corretto bug in ricerca da "Import articoli da controllare" con origine "Segnalazioni di produzione", ora propone solamente le righe che hanno almeno una tra quantità prodotta e quantità scartata maggiore di zero (#TT03041/23)
> - WM  - Implementata nell’analisi disponibilità la possibilità di visualizzare l’impegno degli articoli fittizi (#TT02963/23)
> - Updated Excel schema import for Movimenti Fisici Controlling (#TT3083/23)
> - “SCS  - Nel caso di variazione Fornitore in un Ordine di Conto lavoro, è stato migliorato il messaggio che avvisa il cambiamento di data valuta e cambio nei documenti collegati (#TT02771/23)
> - SCM  - Nella procedura di Evasione da Ordini, le righe note non vengono più visualizzate se gli articoli di altro tipo sono stati evasi; inoltre, se selezionate vengono riportate nel DDT di acquisto (#TT02910/23)
> - WM  - Corretto bug nella visualizzazione dei decimali dnel campo "Quantità" del tab "Componenti" della distinta base (#TT03051/23)
> - CRM  - Corretto errore che indicava l’oggetto non ancora salvato nel caso di inserimento Attività in un Contatto CRM (#TT02196/23)
> - QY  - Reclami e Non conformità  - I valori dei punteggi per il calcolo indice qualificazione fornitore non venivano riportati dalla tabella al documento (#TT03032/23)
> - Spostata la data di scadenza del nuovo flusso CBI al 2024 -03 -17
> - FI  - corretto bug che non gestiva il campo note nella distinta bonifico generata da pagamento compensi (#TT02551/23)
> - SH  - risolto errore al salvataggio quando il codice del conto è alfanumerico (#TT03123/23)
> - SH  - La Destinazione quando presa dall'anagrafica Società riporta - Descrizione società, Via, Indirizzo, Numero civico, Dettaglio numero, CAP, Comune, Provincia, Nazione (#TT02982/23)
> - PM  - quando un'attività fatturabile crea un intervento, la data dell'intervento corrisponde alla data dell'attività. Quindi tutte le attività svolte nella stessa data sono raggruppate in un unico intervento (#TT03008/23)
> - FI  - la contabilizzazione Enasarco ora visualizza le righe dei compensi con la sola quota ditta o la sola quota agente (#TT03050/2)
> - MPS  - Corretto bug nei "parametri generali" della schedulazione che non manteneva salvato il flag "Esecuzione del MRP dopo schedulazione" (#TT03046/23)
> - WMS  - Corretto bug in gestione spunta nel caso in cui nel picking fossero presenti più righe per lo stesso articolo (#TT03093/23)
> - MPS  - Corretto bug nel filtro della form MRP nel caso in cui si filtrasse utilizzando il flag “Pianificare” (#TT03126/23)
> - SD  - Quando nel tipo ordine sono presenti configurazioni di ricerca, il cambio del tipo in testata fa ora verificare e ricalcolare i tipi pagamento (#TT03038/23)
> - ARM  - nascosto e impostato il flag IsWpfEnabled nella base di ModuleKind  - WebApi=> 0, Views => 1 (#TT03119/23)
> - FI  - revisione calcolo e contabilizzazione chiusura automatica conti (#TT03127/23)
> - MPS  - Corretto bug in rilascio ordini pianificati, nella creazione di un ordine di conto lavoro da un ordine pianificato di produzione con un articolo che in distinta presenta semilavorati fittizzi (#TT03007/23)

### Patch 608.1 -0014  - 25/10/2023

> - QY  - Documenti di origine interna  - Aggiunta degli stati del documento
> - Risolto il bug per la schedulazione mensile
> - SD  - Se tutte le righe articolo delle altre tipologie sono state evase da Ordine a DDT, non saranno più visibili nella maschera di Evasione le righe Note (#TT02935/23)
> - SCS  - l'ubicazione si aggiorna in base alla causale di magazzino (#TT02524/23)
> - FI  - gestione del flag di stato completamente pagato in contabilizzazione pagamenti percipienti (#TT02947/23)
> - CRM  - Nelle Attività in sospeso di un’Opportunità, se inserisco una Data scadenza essa viene mantenuta (#TT02569/23)
> - WMS  -  Aggiunto pulsante Stampa UDC  sul tab UDC della gestione spunta del WMS (#TT02764/23)
> - MPS  - Corretto bug in rilascio ordini pianificati inerente alla gestione dell'unità di misura alternativa. Implementato in schedulazione generale con raggruppamento la gestione dell'unità di misura alternativa (#TT02795/23)
> - WM  - Corretto bug sulle ubicazioni, che si generava quando veniva modificato il codice di un nodo (#TT02911/23)
> - Revisione stampa brogliaccio chiusure per impostazione default su parametri del repository method
> - FI  - revisione rollback contabilizzazione fatture di acquisto e vendita per cancellazione extra data delle partite (#TT02913/23)
> - SH  - in tabella iva, visibilità della colonna ‘Fine validità’ per tutte le localizzazioni, mentre per localizzazione Serba, Croata e S.Marino visibilità del flag di esclusione da causale automatica, dell’iva per causale automatica, del codice per documenti elettronici, del flag Reverse charge (#TT02964/23)
> - SH  - i dettagli di forfait sono replicati nelle anagrafiche cliente duplicate (#TT02992/23)
> - FI  - revisione contabilizzazione pagamenti percipienti per pagamenti parziali (#TT02966/23)
> - Arm  - Workflow  - Modificata logica workflow, se non viene inserito un utente non vengono effettuati controlli sull'utente che esegue il workflow. Se viene inserito deve avere anche un indirizzo email valido configurato a livello dell'utente fluentis
> - WM  - Corretto bug nella procedura di Valorizzazione magazzino (#TT02846/23)
> - WM  - Corretto bug nel caso in cui venga creata la RDA dal report Sottoscorta quando non è presente il calendario di fabbrica (#TT02969/23)
> - MES  - Corretto bug negli ordini di produzione quando si utilizzava il pulsante “Generazione lotti” e nell’ordine di produzione erano contenute una o più fasi esterne (#TT02946/23)
> - WMS - Sistemazione calcolo della giacenza in caso di articoli gestiti a lotto e lettura di codici a barre specifici. Corretta gestione nella pulizia del campo lotto (#TT02586/23)
> - MPS  - Capacità Centri di Lavoro  - Corretta anomalia su capacità visualizzata per fasi già segnalate e chiuse (#TT02432/23)
> - MES  - Corretto bug nel filtro dell’articolo della form “Gestione cicli e fasi di lavoro” nel caso in cui si usasse “%” (#TT01411/23)


### Patch 608.1 -0013  - 17/10/2023

> - SH  - Nella tabella aliquote/modalità iva, modificata la visibilità del tab di configurazione collegamenti ai codici dichiarativi (#TT02790/23)
> - MES  - Risolti alcuni bug nei controlli degli oggetti e nella dichiarazione delle quantità nelle dichiarazioni di interruzione (#TT02730/23)
> - FI  - Correzione errore in creazione pagamenti dentro la registrazione contabile (#TT01583/23)
> - FI  - Stampa estratto conto  - Corretta traduzione in label anno precedente (#TT02812/23) 
> - QY  - Se viene inserita una Scheda tecnica in Anagrafica articolo, l'articolo viene riportato negli Articoli associati della Scheda (#TT02558/23)
> - Risolto bug nello Xaml Creator (#TT02778/23)
> - PR  - Pagamenti Fornitori - revisione flag contabilizzato all’interno delle distinte di pagamento (#TT02379/23)
> - FI  - Contabilità delle fatture di vendita - la scadenza viene creata aperta quando si contabilizza una fattura di vendita generata da una scadenza anticipata (#TT02842/23)
> - MES  - Corretti bug negli ordini di produzione inerenti alla variazione della quantità da produrre e all'inserimento manuale di una nuova fase esterna (#TT02777/23)
> - SD  - Revisione visibilità filtri e campi Sdi per localizzazione S.Marino (#TT02850/23)
> - Corretta traduzione in croato per i termini Attività fatturabile e Apri Form
> - WM  - In analisi disponibilità il filtro per variante permette di selezionare solo le varianti dell’articolo inserito.
> - SCS  - Risoluzione dell'eccezione generata dalla cancellazione degli articoli degli Ordini di conto lavoro derivanti dalla Schedulazione (#TT02603/23)
> - FI/PR  - Risolto Giroconto iva errato dopo insoluto (#TT02378/23)
> - WMS  - In gestione spunta quando una riga “Picking” viene evasa completamente va in coda nel tab “Articoli” ed viene evidenziata in rosso. Inoltre, ora è possibile selezionarla e visualizzare le relative righe confermate nel tab “Articoli spuntati” (#TT02471/23)
> - WMS  -  Aggiunto pulsante Stampa UDC  sul tab UDC della gestione spunta del WMS (#TT02764/23)
> - SCM_PurchaseDeliveryNotes  -> SCMPDN_Code  - cambiamento lunghezza da 18 a 20 caratteri (#TT02687/23)
> - SH  - Visualizzazione della cartella Dati extra in ObjectNavigator per gli oggetti personalizzati (#TT02870/23)
> - SH  - visibilità impostazioni fatture elettroniche per localizzazione S.Marino (#TT02848/23)
> - WMS  - In Ricevimento merce migliorata e facilitata la procedura per caricare uno stesso articolo con lotti diversi (#TT02648/23)
> - WMS  - In Ricevimento merce - ridisegnato il layout della form; in "Ricerca \ Visualizza" nel dettaglio righe vengono visualizzate solo quelle da evadere o parzialmente evase; quando si preme “Creazione DDT” si passa alla form di creazione DDT e il focus è posizionato sul campo “DDT”; una volta confermate tutte le righe dell’ordine si viene posizionati automaticamente sul tab “Dettaglio” (#TT02593/23)
> - SH  - visibilità del campo regime fiscale in tabella società e anagrafiche per localizzazione S.Marino (#TT02851/23)
> - WM  - risolto problema di salvataggio scarico prima di avere un carico (#TT02878/23)
> - BI  - fix detail grid reselection of row  - "E stato aggiunto un elemento con la stessa chiave"(#TT02917/23)
> - MPS  - Schedulazione generale  - Gestione della Versione (#TT02380/23)
> - QY  - Taratura strumenti  - Tarature  - Data prevista non necessaria se viene creata una nuova taratura (#TT02893/23)
> - SH  - saltare l'aggiornamento dell'oggetto corrente se il modulo si sta chiudendo (#TT02870/23)


### Patch 608.1 -0012  - 05/10/2023

> - WMS  - Nella form Gestione spunta del WMS sono state fatte le seguenti implementazioni - In apertura del picking il focus si posiziona sul tab "Conferma"; modificato il layout del tab “Conferma” per permettere una migliore lettura; riposizionato il bottone "Nuova UDC"; quando si conferma l'ultima riga articolo il focus si posiziona in automatico sul tab "UDC" (#TT02588/23)
> - MES  - Corretto bug nel calcolo della quantità prodotta nelle segnalazioni nel caso in cui siano prodotti anche articoli alternativi (#TT02654/23)
> - MES  - Workstation  - Exception selecting an existing Production resource linked to an Workstation  - Solved (#TT02729/23)
> - MPS  - Corretto bug sullo stato di riga delle commesse multiprodotto nel caso in cui si rilasciasse un ordine pianificato di produzione con all'interno una fase esterna (#TT02602/23)
> - WM  - rispristinato il funzionamento del generatore codice quando premuto pulsante Salva e nuovo in anagrafica Articolo (#TT02701/23)
> - WM  - il riferimento alla riga progetto viene salvato nella tabella della riga picking (#TT02669/23)
> - FI  - Numerazione registrazioni contabili provvisorie - risolto errore nel caso in cui all’interno della numerazione venisse disattivato il flag di recupero numeri  (#TT02070/23)
> - FI  - corretto bug che in fase di contabilizzazione della presentazione distinta RiBa, in presenza del regime IVA per cassa, valorizzava il campo data competenza iVA in modo errato (pari alla registrazione fattura di vendita) Rif #TT02375/23
> - MPS  - Corretto bug sulla visualizzazione dei valori presenti nel campo “Unità di misura tempi” della fase di un ciclo di lavoro (#TT02767/23)
> - SCS  - Se in un Ordine di Conto lavoro creato da Duplica modifico il Magazzino, la Causale verrà sbiancata permettendo l’inserimento di quella nuova (#TT02620/23)
> - CO  - allineamento tecnico stampa Consolidato di progetto nel controlling (#TT02791/23)


### Patch 608.1 -0011  - 28/09/2023

> - QY  - Correzione dell'errore che impediva la modifica di schede tecniche duplicate (#TT02557/23)
> - FI  - gestione dei campi di collegamento ai progetti nelle riaperture delle scritture di assestamento 
> - Consentito di reimportare un file con lo stesso nome ma con una data di aggiornamento diversa con il servizio BizLink
> - Metel  - Aggiunto parser e documento di flusso per l'importazione dei listini metel vers. 020 di 178 caratteri
> - MES  - Corretto il bug del comando "Ricalcola data di inizio" negli ordini di produzione (#TT02429/23)
> - MES  - Corretto il bug relativo al pulsante "Completamento dati ordine" che non eliminava correttamente le fasi esterne aggiunte direttamente nell'ordine di produzione e non presenti nel ciclo di lavoro (#TT02566/23)
> - WM  - Corretto il bug se si utilizza la procedura "Modifica di massa degli articoli" per inserire gli orari dei fornitori preferiti (#TT02614/23)
> - WM  - Corretto un bug nei dati anagrafici dei lotti che nel filtro dei lotti non visualizzava correttamente i decimali nella scheda di caricamento (#TT02580/23)
> - MES  - Corretto un bug nel filtro del ciclo di lavoro che non permetteva di visualizzare correttamente i valori del campo "Tipo" (#TT02628/23)
> - CO  - comparazione riclassificazioni, revisione gestione aggiornento dati (#TT02664/23)
> - SD  - Nella stampa Lista fatture, la posizione della valuta nella colonna Scadenze dipende dalla Lingua della Società (#TT02609/23)
> - WMS  - Nel filtro picking della form Gestione spunta sono visualizzati solo i picking in stato non evaso o parzialmente evaso (#TT02635/23)
> - WMS  - Carico/Sposta UDC  - bug fix for showing loading unit details after reading the barcode for the loading unit  (#TT02480/23)
> - SD  - Stampa Fatturato  - Aggiunta la percentuale su ogni riga stampata (#TT02676/23)
> - WMS  - In apertura del form Gestione spunta del WMS il focus è posizionato sul campo "Numero" picking. 
Corretto bug che generava dei problemi nel caso in cui si ritornasse nella form del filtro picking 	dopo aver confermato un picking tramite la Gestione spunta.  
Nel caso in cui l'utente confermi la riga, di un articolo gestito a lotti e per il quale non sia stato 	inserito il lotto, verrà mostrato un messaggio che ricorda di inserire il lotto (#TT02584/23)
> - WMS  - Nella form gestione spunta ora viene pulito il campo del lotto ad ogni conferma di riga (#TT02468/23)
> - SCS  - Corretto bug sul controllo giacenza per ubicazione dei materiali del rientro di conto lavoro (#TT02630/23)
> - PM  - è possibile cancellare una richiesta intervento con id > 32.767 (#TT02529/23)
> - SCM  - La Somma della colonna Imponibile negli articoli delle Fatture di acquisto si aggiorna all’aggiunta di Sconti (#TT02325/23)
> - QY  - Controllo articoli  - Schede tecniche  - E’ stata riattivata la codifica automatica del codice e della descrizione sulla base delle impostazioni indicate nel Tipo scheda (#TT02243/23)
> - WMS  - Nel WMS form Ricezione merce sono state effettuate le seguenti implementazioni-    
 - Corretta la ricerca sul campo "Fornitore" 
 - nel filtro della form vengono mostrati di default solo Ordini fornitore in stato "Non evaso" o "Parz.te evaso"
 - rimosso il pulsante "Indietro"
 - spostato il pulsante "Creazione DDT" in terza posizione così da evitare di scorrere (#TT02590/23)
> - CO  - revisione stampa Consolidato di progetto (#TT02689/23)
> - FI  - nella gestione mutui, modifiche alla gestione del totale debito null (#TT02700/23)
> - WMS  - Gestione Spunta Possibilità di richiamare nella form una UDC tramite Barcode Tokenizer (#TT02165/23)
> - FI  - revisione gestione omaggi con/senza rivalsa iva in contabilizzazione fatture di acquisto e fatture di vendita (#TT02498/23)

### Patch 608.1 -0010  - 14/09/2023

> - SD  - La Duplica Ordini cliente riporta l'UnitNetPrice (#TT02366/23)
> - SH  - Le griglie dei gruppi di account fissi prenderanno i diritti dell'utente
> - SH  - Correggere la selezione della casella di controllo - consente di selezionare/deselezionare solo quando si è sopra il Controllo (#TT02479/23)
> - CO  - revisione calcolo ammortamenti del controlling  (#TT02531/23)
> - MES  - gestione seganalazioni  - bug fix per cambia codice lotto materiale (#TT02499/23)
> - FI  - Campo "In pagamento"  - Dashboard "Scadenziario clienti fornitori" (#TT02236/23)
> - WMS  - corretto a database il valore della data e ora del movimento di contropartita gestito dallo Sposta Articolo con articoli gestiti a lotti (#TT02482/23)
> - Sistemazione problema nella schedulazione generale con la gestione dell'analisi disponibilità (#TT02543/23)

### Patch 608.1 -0009  - 07/09/2023

> - FI  - Stampa modelli Intrastat - Correzione formato data in stampa modello Intrastat2 (#TT02381/23)
> - FI  - data competenza for ammortization (Croatian/Serbian localization)  - (#TT02267/23)
> - FI  - Report VatPdvURA_hr -HR_EUR  - Allineamento collegamento label ai campi rinominati
> - SD  - Risolta eccezione uscente nella Definizione MPS (#TT02474/23)
> - EAM  - corretto errore relativo al salvataggio dell'anagrafica impianti (#TT02452/23)
> - FI  - Migrazione Fluentis2021 bug DictionaryEntry tabelle (#TT02441/23)
> - SD  - Migrazione Fluentis2021 bug SalesInvoice, field LedgerAccountForStatisticReport (#TT02456/23)


### Patch 608.1 -0008  - 01/09/2023

> - SD  - Nei DDT e nelle Fatture dopo aver inserito i lotti e salvato, il tasto Salva non rimane abilitato (#TT02320/23)
> - SD  - Correzione del valore di Storno omaggi senza rivalsa IVA nei Documenti SDI (#TT02336/23)
> - SD  - La Duplica di DDT e Fatture riporta la Dichiarazione d’intento se c’è plafond disponibile (#TT02318/23)
> - PR  - Acquisizione effetti da fastture e da partite (#TT02332/23)
> - SD/SCM  - La valorizzazione DDT non ricalcola più l’iva per la dichiarazione d’intento (#TT02357/23)
> - MES  - Corretto bug nelle dichiarazioni di produzione relativo alla proposta dei lotti nei materiali da scaricare (#TT01839/23)
> - FI  - Campi "Anno", "Mese" e "Trim." su griglia intrastat in reg. contabili (#TT01630/23)
> - MPS  - Bug fix per Schedulazione al piu presto  - correzione inserimento occupazione per ordini pianificati di produzione (#TT02281/23)
> - WMS  - In gestione spunta del WMS corretto il funzionamento del filtro del campo data (#TT02361/23)
> - FI  - Compensi - iva con data fine validità (#TT02176/23)
> - FI  - in una registrazione manuale non iva relativa ai cespiti, l’inversione del segno dare/avere di un importo negativo nei cespiti viene effettuata solo se la causale prevede il flag di inversione (#TT02358/23)
> - FI  - nella riconciliazione conti correnti, revisione utilizzo filtri movimenti riconciliati/non riconciliati (#TT02011/23)
> - SD  - nella stampa del DDT di vendita compare l'unità di misura del peso netto, peso lordo e del collo
> - SD  - Offerte  - Corretta anomalia la quale non creava l'ordine convertendo un'offerta (#TT02424/23)
> - PM  - risoluzione errori relativi all'utilizzo dei filtri e inserimento delle trasformation (#TT01939/23)
> - WMS  - In gestione spunta del WMS corretto bug sul calcolo della giacenza/disponibilità dell'articolo (#TT02434/23)
> - SD  - Per il file Sdi, revisione importo di storno omaggio in caso di riga senza rivalsa iva (#TT02444/23)


### Patch 608.1 -0007 - 03/08/2023

> - WM  - Picking -Diagramma Globale - Sono ora indicati sia gli Ordini Cliente e che i DDT collegati al Picking (#TT02289/23)
> - SCM - In evasione ordine fornitore in fattura di acquisto, valorizzazione del campo SourceAmountOrigin (#TT02119/23)
> - SCS  - La quantità lotti viene proposta uguale alla quantità di riga (#TT02183/23)
> - PM  - Risolto errore relativo al lancio del report Progetti > - Dettaglio progetti con filtro conto impostato (#TT02216/23)
> - WMS  - Ridotta la larghezza della colonna unità di misura in Giacenza articolo e Rettifica articolo (#TT02219/23)
> - SCM  - Modificando manualmente l’Importo dei Riepiloghi IVA di una Fattura di acquisto, i totali vengono ricalcolati correttamente (#TT01888/23)
> - SCM  - Il numero lotto di carico creato considera il Numero Bolla di Acquisto se inserito nei Dettagli del Tipo codice lotto (#TT02264/23)
> - PM  - Il tipo attività impostato nei parametri della procedura attività da interventi è adesso preso in considerazione (#TT02260/23)
> - SCM  - Nella procedura di creazione automatica ordini, vengono visualizzate anche le righe delle RDA relative ad articoli in esaurimento e se selezionate per la creazione dell’ordine, alla conferma viene visualizzato un messaggio di avviso che l’articolo in questione è in esaurimento e quindi non è possibile creare l’ordine fornitore (#TT02226/23)
> - WMS  - Corretto bug nelle liste di trasferimento UDC. Ora il focus viene riportato nel campo codice barcode ad ogni nuovo inserimento (#TT02276/23)
> - WMS  - Corretto bug in inventari. Ora il focus viene riportato nel campo codice barcode ad ogni nuovo inserimento (#TT02277/23)
> - PR  - Corretto bug che non valorizzava il campo del totale effetti visualizzati nella form Acquisizione effetti da fatture (#TT02233/23)
> - SD  Le note di credito create da ddt di reso hanno le righe Conai con il segno negativo (#TT01428/23)

### Patch 608.1 -0006 - 28/07/2023

> - BZ  - Corretto bug nell'import di BizLink dei cicli di lavorazione nel caso in cui venisse creata una nuova fase (#TT02173/23)
> - Reso Più fruibile l’editing di script per file con più di 1000 righe
> - FI  - Risoluzione errore nella Chiusura automatica conti - la scrittura automatica della rilevazione dell'utile/perdita non è corretta in quanto viene utilizzato solo lo stesso conto Economico sia in dare che in avere anzichè il conto Utile/Perdita, risultando i conti aperti (#TT02152/23)
> - SCS  - Nei ddt di conto lavoro ora l'ubicazione indicata nel lotto selezionato viene riportata nel movimento di magazzino (#TT02186/23)
> - SD  - Nei ddt, nelle fatture di vendita e negli ordini clienti ora l'ubicazione indicata nel lotto selezionato viene riportata nel movimento di magazzino (#TT02186/23)
> - WM  - Nei picking ora l'ubicazione indicata nel lotto selezionato viene riportata nel movimento di magazzino (#TT02186/23)
> - ARM  - Abilitate le collection Extradata negli oggetti custom (#TT02026/23)
> - PM  - Risolto errore generazione attività per le ore viaggio ritorno da procedura creazione attività da interventi (#TT02251/23)
> - SCM  - Risoluzione dell’eccezione uscente nel Trasferimento in fattura di un ordine fornitore avente un articolo codificato e un articolo nota (#TT02050/23)
> - FI  - Blocco alla cancellazione di una registrazione contabile se ci sono partite inserite in un pagamento fornitore da contabilizzare (#TT02083/23)
> - WMS  - Nella form gestione spunta è stato aggiunto il campo lotto  (#TT02078/23)
> - WMS  - Nella form gestione spunta è stato aggiunto il pulsante "Stampa" (#TT02016/23)
> - SD  - Se nel Tipo Offerta viene collegato un Tipo opportunità, al salvataggio dell’Offerta viene creata una Nuova Opportunità se in testata Offerta non ne viene inserita una preesistente; se inserita, l’Opportunità preesistente viene aggiornata (#TT01821/23)

### Patch 608.1 -0005 - 20/07/2023

> - WMS  - Corretto bug in lista trasferimento UDC in fase di selezione dell’ubicazione (#TT02065/23)
> - WMS  - Corretto bug in dichiarazione produzione tramite il WMS che non caricava correttamente la fase da dichiarare (#TT02128/23)
> - FI  - Saf -T  - nuova finestra per controllare ed eseguire l'esportazione bizlink (#TT03167/22)
> - WMS  - Implementato il barcode tokenizer nella form di dichiarazione produzione del WMS (#TT02157/23)
> - SD  - Nelle fatture di vendita, lo storno acconto propone ora la dichiarazione di intento dalla riga d'acconto d'origine e il combo mostra le dichiarazioni dell'esercizio dell'acconto (#TT02084/23)
> - MES  - Creato report "Consuntivo ore operatori" nelle dichiarazioni di produzione, questo permette di vedere le ore lavorate di ciascun operatore giorno per giorno  
> - FI  - Context menù di apertura form ‘Estratto conto’, ripristino assegnazione conto/sottoconto alla form di destinazione (#TT02055/23)
> - WMS  - Corretto bug nella gestione spunta del WMS nel caso in cui venga cancellato un articolo (#TT02163/23)
> - WMS  - Corretti bug nella form di ricevimento merci del WMS, inerenti all’inserimento dell’ubicazione tramite barcode e dei lotti (#TT02061/23)
> - SH  - All’interno del piano dei conti la stampa ora riporta nel report il gruppo selezionato con tutti i gruppi e conti sottostanti (#TT02185/23)
> - PR  - Revisione rollback acquisizione effetti dalle fatture (#TT02184/23)
> - FI  - Corretto bug nella form Commissioni che raddoppiava il valore dell’incasso cliente e di conseguenza della provvigione maturata (#TT02009/23)
> - SD  - La creazione di una Nuova fattura dall’interno del tab Trasporto di una precedente fattura riporta la Destinazione di anagrafica quando inserisco il cliente (#TT02168/23)
> - MES  - Corretto bug sul filtro delle segnalazioni di produzione che non permetteva di lanciare correttamente la stampa "Consuntivo ore operatori" (#TT02188/23)


### Patch 608.1 -0004 - 14/07/2023

> - FI  - Correzione dell'errore in corrispondenza della fattura di vendita e della fattura di acquisto con centro di costo allegato (#TT02056/23)
> - MES  - Corretto bug nella dichiarazione di produzione che non visualizzata correttamente la causale di carico del prodotto finito se inserita manualmente nell'ordine di produzione (#TT02066/23)
> - WMS  - Corretto bug sul calcolo della quantità nell'unità di misura alternativa nella form Giacenza articolo (#TT02062/23)
> - WMS  - Corretto bug sul calcolo della quantità nell'unità di misura alternativa nella form Rettifica articolo (#TT02063/23)
> - QY  - Corretto bug sulla tabella degli Strumenti di Misura della qualità. Ora, nel caso in cui venga creato un nuovo Strumento di Misura, il campo Modello viene salvato correttamente (#TT01978/23)
> - WM  - Contabilità di magazzino  - utilizzare ItemFiscalCategories StockAccount da voci di registrazione contropartita (#TT02100/23)
> - SH  - Visualizzazione del campo CIN in griglia banche d’appoggio delle anagrafiche clienti/fornitori (#TT02069/23)
> - PM  - E' possibile modificare il numero progetto delle attività collegate a sprint di settimane anteriori e chiusi (#TT02015/23)
> - CRM  - Miglioramento Stampa Dettagli Contatto CRM - eliminazione ultima pagina vuota, adattamento dimensioni logo, eliminazione Pagamenti e aggiunta Agenti (#TT02041/23)
> - MPS  - Schedulazione generale  - Non venivano correttamente considerate le alternative dei materiali (#TT01477/23)
> - SD  - La Conversione da Offerta a Ordine trasferisce il flag Prezzo manuale solo se presente in Offerta (#TT01972/23)
> - SD  - E' stato inserito un controllo nel pulsante Stampa dei DDT e delle fatture che impedisce lo scarico doppio in caso di molteplici stampe consecutive (#TT01050/21)
> - MES  - Corretto bug nelle dichiarazioni di produzione sulla congruenza tra le date della dichiarazione e le date dei dipendenti (#TT02701/22)
> - WF  - Risolta eccezione uscente nella cancellazione di un Tipo Attività nella tabella Gruppo attività (#TT02114/23)
> - SCM  - Risoluzione dell’eccezione uscente nel Trasferimento in fattura di un ordine fornitore avente un articolo codificato e un articolo nota (#TT02050/23)
> - SH  - Aggiunto messaggio per oggetti non salvati (#TT01761/23)
> - QY  - Controllo articoli  - Corretta la ripresa dati del Tipo prova esterna nei Piani di Controllo (#TT01211/23)


### Patch 608.1 -0003 - 06/07/2023

> - SH  - Risoluzione dell’errore uscente inserendo un numero nella tabella Classi articolo, tab Codificatore articolo, colonna Ordinamento, e cambiando cella (#TT01609/23)
> - FI  - Ottimizzazione stampa giornale contabile (#TT01551/23)
> - ARM  - Correzione della selezione del gruppo di oggetti business padre quando il gruppo padre di una nuova tabella non ha una corrispondenza. Se non viene trovato, viene dato un messaggio di errore (#TT01956/23)
> - PM  - Corretto l’errore relativo al volume limite di dati gestiti dal calendario (#TT1385/22)
> - SCM  - La creazione fatture di acquisto da file Sdi riporta solo i dati di pagamento dal file, senza acquisizione dei default dell’anagrafica fornitore (#TT01898/23)
> - SD  - Fix per stampa listini di vendita. Se viene customizzato l'oggetto, ora si può utilizzare anche la stampa standard (#TT01945/23)
> - SD  - La stampa DDT clienti riporta la Data inizio trasporto (#TT02028/23)
> - SD  - Dashboard fatturato  - Risolto problema sulla query del datasource degli agenti (#TT02043/23)
> - FI  - Correzione errore in creazione pagamenti dentro la registrazione contabile (#TT01583/23)  
> - SCS  - Importazione prezzi/fornitore  - Fix per errore in fase di importazione, ora si può sia importare l’articolo che creare il listino usando il flag Crea listino fornitore (#TT02000/23)
> - ARM  - Correzione del DictionaryWidget nei Workflow (#TT01868/23)
> - SH  - I Profili salvano il flag Pannello riepilogo totali e le modifiche in esso (#TT01807/23)
> - SH  - Ottimizzato lo spostamento tra Profili default e customizzati, quando essi contengono delle modifiche relative ai filtri ExtraData (#TT00069/23)


### Patch 608.1 -0002 - 29/06/2023

> - SH - ottimizzazione apertura dashboard in modalità di progettazione (#TT01766/23)
> - MPS - Corretto bug in rilascio ordini pianificati. Ora i materiali vengono riportati correttamente negli ordini di conto lavoro generati dal rilascio di un ordine pianificato di produzione (#TT01872/23)
> - Crm - Ottimizzazione dell'uso della posta nel - Visit report (#TT01942/23)
> - FI - la creazione intrastat da fatture toglie la partita iva se il soggetto ha un codice oltre i 16 caratteri previsti (#TT01943/23)
> - FI - la cancellazione di una riga di assestamento contabile elimina la corrispondente riga di assestamento dei centri di costo/profitto (#TT01379/23)
> - CRM - Dashboard - Applicati fix alle dashboards - STD_CRM_Contact_GeneralInfo, STD_CRM_Opportunities_General (#TT01679/23)
> - SD - correzione per Report SalesPriceList con oggetti personalizzati (#TT01945/23)
> - ARM - aggiunto ServerSidePrinter in Arm User Form
> - SH - Ottimizzazione trasferimento lotti nei documenti di reso (#TT01969/23)
> - Crm - risolto errore nella data di default dei Ticket (#TT01258/21)
> - WM - Risoluzione dell’errore di movimenti doppi nella maschera di Dettaglio Movimenti, in caso di valorizzazione in fattura di un ddt di vendita precedentemente scaricato (#TT01966/23)
> - SH - Bug fixed. Corretti bug in prototipazione, inerenti alla valorizzazione degli articoli di conto lavoro e del costo industriale (#TT01628/23)
> - SH - Nei documenti allegati della griglia delle spese da rimborsare manca il filtro per oggetto padre (cioè filtra solo i documenti collegati alle spese dell'intervento) (#TT01977/23)

### Patch 608.1 -0001 - 23/06/2023

> - ARM - correzione errore durante l'importazione di nome utente e email dalla directory LDAP
> - ARM - Correzione del messaggio di errore quando si salva una tabella con uno schema errato (ad esempio una tabella personalizzata con uno schema standard)
> - FI - il numero del documento e la data del documento vengono proposti per la chiusura del RO IVA
> - FI - revisione gestione righe automatica di vendita cespiti in registrazioni in valuta (#TT01832/23)
> - SH - I nuovi Parametri generali generati vengono creati custom e non più standard (#TT01862/23)
> - WM - Corretto bug in schedulazione generale nel caso in cui la distinta base fosse composta da migliaia di articoli (#TT01827/23)
> - SH - Risoluzione del problema di impossibilità di salvataggio Workflow a seguito della comparsa dell’errore di Codici non univoci (#TT01869/23)
> - FI - revisione del filtraggio per società nella dichiarazione croata OPZ (#TT01606/23)
> - SH - modificata traduzione inglese dell’unità di misura da UM a MU
> - SH - Inserendo, tramite Form Navigator, un Extra Data contenente una data in testata documento, il valore viene riportato nel tab Extra Data anche inserendo la data odierna (#TT01834/23)
> - CRM - la descrizione attività è mantenuta dopo la chiusura e riapertura del contatto crm (#TT01210/23)
> - FI - contabilizzazione fatture di vendita con sconti contabilizzati al lordo, revisione gestione assegnazione centri di costo (#TT01913/23)
> - WMS - In WMS, Logistica > Inventari, corretto bug nel caso in cui venisse chiusa la form del messaggio di “aggiunta / aggiorna” con la “x” (#TT01805/23)
> - SD - La procedura di Creazione Ordini fornitore dalla Ricerca Ordini cliente considera gli articoli solo se codificati (#TT01884/23)
> - SH - Risoluzione del problema di impossibilità di salvataggio Workflow a seguito della comparsa dell’errore di Codici non univoci (#TT01869/23)
> - FI - ammortamento cespiti incrementali in Fluentis2021, revisione ricerca per raggruppamento (#TT01848/23)
> - CRM - All'interno del tab Contatti delle Campagne Marketing, espandendo le righe vengono visualizzati dati dell'anagrafica contatto (#TT01929/23)
> - FI - rollback contabilizzazione insoluti con fattura di rivalsa spese collegata, revisione cancellazione fattura, se non stampata/contabilizzata (#TT01434/23)
> - SCM - La Data consegna degli ordini fornitori riporta la Data di arrivo stimata della RDA collegata (#TT01580/23)
> - PJ - Ottimizzazione della possibilità di modificare da Form navigator le label della testata Interventi (#TT01799/23)
> - CRM - Il Riferimento ticket nei Parametri CRM non è obbligatorio e se cancellato non esce l’errore (#TT01825/23)
> - SD - se la diminuzione dell’importo del documento, già segnalato nel fido, porta lo sconfinamento al di sotto del valore fido cliente, la riga di segnalazione nel lock manager viene cancellata (#TT01806/23)
> - SD - Rivisitazione filtri del report Fatturato vendite (#TT01258/21)
