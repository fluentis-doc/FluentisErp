---
title: Patch notes Versione 606
sidebar_position: 1
---

<details>
<summary>Patch 606.1-0002: 17/10/2022</summary>

- ARM: Correzione proposta di codice oggetto quando si personalizza una tabella in un oggetto   
- ARM: correzione oggetto snapshot nei collegamenti alla tabella/applicazione snapshot su linux  

</details>

<details>
<summary>Patch 606.1-0003: 21/10/2022</summary>

- Arm:   
>: Correzione bug quando non è presente alcun oggetto personalizzato    
>: Custom form Ribbon from standard form     
>: Modifica del modello ribbon nella base del livello di modifica consentito    
- All'interno dell'editor di script è possibile sovrascrivere una funzione e inserire una sezione a blocchi.    
- PM: introdotta gestione calcolo ferie/permessi/ROL nella elaborazione dati per cedolino (#TT02473/22)     
- SCM: fix errore nella contabilità delle fatture di acquisto per la parte rumena (#TT02843/22)  
- SH: Aggiunta della proprietà calcolata ContactHistoryOnDate per i documenti (#TT02848/22)  
- PM: generazione ed inserimento manuale da nuovo di interventi pianificati/interventi/attività, valorizzano il flag "smart working" in base alla configurazione anagrafica della risorsa (#TT02695/22)  
- SD: revisione contabilizzazione fatture di vendita per gestione omaggi (#TT02265/22)  
- Aggiunta la proprietà calcolata NomenclatureHistoryOnDate su FSPosting e FSPostingLedger (#TT02845/22)  
- Aggiunto SignatureHelp all'editor di script  
- PM: risolto caso in cui la riga di storno WIP non veniva inserita in fattura (#TT02755/22)  
- PK: Correzione problemi di posizione e di aggiornamento di PickingItemDetail(#TT02833/22)
- Risolto il bug del salvataggio dello stato dei widget di WorkFlow  
- PM: corretto controllo date in richieste di ferie/permessi (data fine successiva alla data inizio)#TT02860/22

</details>

<details>
    <summary>Patch 606.1-0004: 27/10/2022</summary>

- Aggiornamento percentuale del tipo di operazione fiscale per la versione RO  
- ARM: Correzione GetMultipleObjectInformation, esclusione delle proprietà Collection dagli oggetti dell'estensione
- Aggiornato il trigger per l'attività dello script Supervisor  
- aggiunto il campo della licenza per l'utente Soluzione  
- SH: Add NomenclatureHistoryOnDate: Correzione filtro per data del documento (#TT02845/22)  
- SCM: I filtri della data nel rollback della fattura di acquisto non funzionano (#TT02929/22)  

</details>

<details>
<summary>Patch 606.1-0005: 07/11/2022</summary>   

- ARM: generato il metodo EnsureExtension. Generato anche il segmento standard quando l'entità personalizzata è pubblicata nell'ambiente personalizzato; fare riferimento all'oggetto personalizzato invece che a quello standard dall'oggetto Extension; correggere la nuova proposta di indice di ItemNature   
- SD: Fix SalesInvoiceType and SalesInvoice Turnover: problemi di stampa.  
- aggiunta della funzionalità di completamento del codice all'editor di script  
- FI: revisione stampa controllo dichiarazioni di intento per segni note di credito (#TT02829/22)  
- FI: revisione cancellazione righe nei Versamenti iva (#TT02854/22)  
- SD: Correzione dei problemi di esecuzione personalizzata delle vendite da SalesOrder e da SalesDeliveryNote.  
- SCM: Import listini fornitori: Eliminata la colonna non utilizzata nello schema: Codice produttore (#TT02932/22)  
- SD: Import autofatture di vendita:Aggiunte le colonne conto e sottoconto del cedente (#TT02954/22)  
- SCS: Delivery Notes: Il prezzo del materiale da consegnare al terzista viene proposto sempre a zero (#TT02973)
- FI: revisione importazione registrazioni contabili da DocFinance (#TT02727/22 e #TT02859/22)  
- FI: Sostituzione codice paga nel cedolino:se configurato: per le attività con flag Smart Working attivo (#TT02923/22)  
- FI: corretta anomalia in cancellazione cedolini paga legato al residuo di ferie-permessi-rol (#TT02887/22)  
- PM: cambiato criterio di raggruppamento righe nei cedolini: Risorsa, Codice Paga nell’attività, Data Attività, Flag Interno/Esterno del tipo intervento collegato all’attività (se presente) #TT02869/22 
- PM: nei cedolini paga, nella griglia "valori" rimosso elenco valori  riepilogativo dei movimenti con flag "esterno" abilitato (#TT02861/22)  
- CRM: risolte anomalie legate a drag&drop delle attività configurate per stato di workflow. Reso visibile nel riepilogo attività la data inizio/fine promemoria (#TT02440/22)  
- CRM: in caso di inserimento di attività da eseguire dal WF con indicata data scadenza e abilitato il flag "crea nuova attività", la data scadenza viene riportata anche nella relativa nuova attività creata (#TT02999/22)
- SD: Gestita propagazione extradata relativi alle righe di progetto anche nel caso di inserimento manuale di righe in fattura con riferimento a progetti (#TT02964/22)  
- PM: Gestita propagazione extradata relativa alle righe di progetto, nei seguenti documenti: richieste intervento, interventi pianificati, interventi. Sia in caso di inserimento manuale del documento sia per la generazione documenti da procedure (#TT02964/22)    

</details>

<details>
<summary>Patch 606.1-0006: 11/11/2022</summary>   

- Aggiornato lo script della categoria Supervisor con i nuovi commenti
- SCS: Rientro con materiali gestiti a lotto: Risolto verifica giacenza materiale per ubicaizone e terzista
- FI: revisione ricalcolo partite in caso di creazione su data scadenza e non per soluzione di pagamento (#TT02916/22)
- Aggiunta rifattorizzazione del codice di script per le espressioni Linq
- PM: aggiunta gestione "natura" per i tipi origine costo/ricavo; corrette alcune anomalie nella elaborazione del SAL (#TT02617/22)
- Rilasciato lo script Supervisor per le attività RegisterSignalItem, ExecuteMrp, CustomerRisks
- CRM: inserita possibilità di aggiornare i task direttamente dalle attività sospese di workflow che li hanno generati. In caso di eliminazione dell'attività sospesa, si elimina anche il task collegato (#TT03016/22)
- PM: Payroll, nella elaborazione cedolino paghe vengono considerate le ore configurate nel "Turno principale" se presenti, altrimenti si considera la configurazione dell'orario di lavoro (#TT03019/22)   

</details>

<details>
<summary>Patch 606.1-0007: 21/11/2022</summary>   

- WM: Configurazione della matrice di elementi su ExtraData basato su origine dati SQL
- Generazione del codice di script aggiornata con la logica per saltare la funzione di base
- FI: ripresa ammortamento cespiti, revisione gestione procedura ed elaborazione (#TT03100/22)
- PM: Nella valorizzazione interventi, valorizzando un singolo intervento con extradata in testata intervento propagato da anagrafica cliente, non veniva riportato in fattura nonostante la configurazione attivata. Nella valorizzazione di più interventi il caso non si verificava. Risolto (#TT03087/22)
- SD: Gestita cancellazione fatture generate da valorizzazione intervento, anche direttamente dalla form di ricerca fattura e non solo tramite rollback procedura. ( TT03088/22)
- PM: paghe, gestiti casi specifici per le ore di viaggio con indennità di trasferta (#TT03000/22)
- FI: Campo tipo documento in op.patrimoniali Cespiti (#TT03084/22)
- FI: revisione salvataggio registrazioni contabili con cespiti in Fluentis2021 (#TT03137/22)
- FI: comunicazione liquidazioni periodiche iva, revisioni calcolo per test società in gruppo iva (#TT03134/22)   

</details>

<details>
<summary>Patch 606.1-0008: 25/11/2022</summary>   

- Risolto il problema dell'utente mancante sul Supervisor nel pianificatore eventi
- Aggiunto un selettore di widget da xaml per Blockly   

</details>

<details>
<summary>Patch 606.1-0009: 29/11/2022</summary>   

- SCS: SubcontractorDeliveryNote Scarico-nuovi filtri numero/data/postazione magazzino
- Possibilità di bloccare la creazione di più script per lo stesso metodo di algoritmo
- Aggiunta la localizzazione per Blockly e impostata in modalità offline
- PM: gestita propagazione extradata nei documenti collegati alla wbs di progetto per cui è stato configurato l’extradata (#TT02964/22)   

</details>

<details>
<summary>Patch 606.1-0010: 07/12/2022</summary>   

- BI: Cruscotti: Dismissione dell'indicatore di occupato quando si annulla/chiude il modulo dei parametri a comparsa
- Aggiunto un widget null per Blockly
- CO: revisione elaborazione chiusura infrannuale per dati centri di costo, revisione Valorizzazione acquisti e vendite per filtro ddt di acquisto (#TT03149/22)   

</details>

<details>
<summary>Patch 606.1-0011: 15/12/2022</summary>   

- CO: revisione elaborazione chiusura infrannuale per dati centri di costo, revisione Valorizzazione acquisti e vendite per filtro ddt di acquisto (#TT03149/22)
- SH: revisione salvataggio data di riferimento del cambio (#TT03327/22)
- CO: revisione elaborazione ammortamenti del controlling (#TT 3249/22)
- CO: nelle comparazioni riclassificazioni del controlling, revisione della visualizzazione dei dettagli dei periodi (#TT03251/22)
- WM: Gestione picking:  Impostato ordinamento di default per ID riga Articolo Picking (prima era per ID Articolo) e reso disponibile gestione profili (#TT03315/22)
- MES: In lista prelievo materiali, nel caso in cui venga creato il picking, quindi con "Cerca i materiali picking", per i materiali che sono con "Tipo prelievo Con lista" verranno settati nel picking la causale e il magazzino che sono già presenti nella riga dei materiali dell'ordine di produzione; mentre, per i materiali con "Tipo prelievo Manuale" varranno settati la causale e il magazzino impostati nel *Tipo picking* del *Tipo picking* utilizzato.
- MES: Corretto bug nelle segnalazioni di produzione che non permetteva di inserire il lotto dei materiali gestiti a lotti

</details>

<details>
<summary>Patch 606.1-0012: 22/12/2022</summary>   

- SH: Correzione la visualizzazione di Extradata di tipo semplice nella griglia (#TT03340/22)
- Risolto Problema di scripting per gli oggetti ReadOnly e il modulo Report
- Formattazione degli script allineata alla logica di VisualStudio
- SD: Gestione delle fasce di sconto anche quando non presente la categoria provvigionale (#TT03364/22)
- CO: revisione inserimento nodi di livello inferiore nei modelli di riclassificazione di Fluentis2021 (#TT03334/22)   

</details>

<details>
<summary>Patch 606.1-0013: 23/12/2022</summary>   

- FI: modificata condizione in VAT_PdvS_HR da MBRI_Id a MBTM_TipoMov (#TT03391/22)
- FI: VAT_PdvZP_HR, condizione per convertire in standard (#TT03392/22)
- FI: creazione file telematico dichiarazione d’intento (#TT03407/22)
- Aggiunta la ricerca delle categorie di Blockly   

</details>

<details>
<summary>Patch 606.1-0014: 09/01/2023</summary>   

- FI: revisione stampa dichiarazioni di intento (#TT03407/22)
- SH: gestione parametro generale di impostazione widget per i conti, per attivare il nuovo con 1 edit o tornare al precedente a 3 edit
- FI: Corretto VatRegisterSale hr-HR per il nome errato della proprietà negli script
- SD: Stampa fatture HR: Aggiunto report per storno HR
- FI: Cash flow export: il valore fisso dovrebbe essere '00001' mentre ora è '1' (#TT00034/23)
- FI: revisione rollback ammortamento cespiti (#TT00024/23)
- TT03324/22: consentita la possibilità di eseguire una transizione senza modificare lo stato
- WM: L’help dei lotti ora calcola il decremento della disponibilità degli stessi, anche se il documento non è stato ancora memorizzato nel DB (#TT00015/23)   

</details>

<details>
<summary>Patch 606.1-0015: 12/01/2023</summary>   

- Esportazione file Piano dei Conti e Cash flow per DocFinance: gestione dei caratteri di fine riga come CR+LF anche per installazioni della parte server di Fluentis su Linux (#TT00036/23)
- FI: Revisione del rollback della contabilizzazione pagamenti compensi, mantenimento del flag ‘contabilizzato’ in testata compenso; abilitazione rollback contabilizzazione compensi anche se la causale ha blocco cancellazione se partita pagata (#TT00010/23)
- WM: rollback accounting: il server supporta un massimo di 2100 parametri
- SD: Integrato calcolo CONAI automatico in fase di generazione DDT/Fatture da Picking (#TT00057/23)
- FI: implementazione FA_RO_PreContabFattura e FA_RO_ContabFattura_PostProcessIVA (#TT00068/23)
- SH: Anagrafiche contatti: Modificata trasformation FullAddress in modo che riporti anche il numero civico se presente in anagrafica
- QY: Calibration Instruments: Strumenti di misura con articoli di sola natura Attrezzatura.
- BI: Risolta la visualizzazione del messaggio di occupato che non scompare dopo il completamento dell'azione. Ridimensionato HeaderCode (testo del gruppo superiore)   

</details>

<details>
<summary>Patch 606.1-0016: 13/01/2023</summary>   

- FI: I registri Iva che non devono essere in dichiarazione Iva non devono essere bloccati (#TT01902/19)
- Script aggiornato per creare un documento Html dal recordset    

</details>

<details>
<summary>Patch 606.1-0017: 18/01/2023</summary>   

- TT00050/23: Gestione degli errori del flusso di lavoro durante l'invocazione di SP in transizione
- WM: Bug fixed. Corretto bug in creazione lotto da lotto, ora la causale di scarico lotto di origine viene proposta correttamente : (#TT00122/23)
- PR: generazione file Riba (#TT03061/22)
- PackagesManagement: ordinamento per codice articolo (#TT03156/22)
- FI: Procedura Generazione Solleciti: Filtro Agente (#TT02762/22)
- MES: Implementati a standard nel MES il report delle etichette articolo (con o senza Lotti e/o Serial Number) e il report delle etichette UDC.
- FI, PR: Diverse questioni su Gestione Liquidità (#TT03247/22)   

</details>

<details>
<summary>Patch 606.1-0018: 24/01/2023</summary>   

- PR: Risoluzione eccezioni uscenti in Contabilizzazione distinta di anticipo (#TT00103/23)
- Modello di script aggiornato per BizLink Intercompany
- Aggiornamento della definizione degli script per i nuovi parser BizLink
- SCM: contabilizzazione fatture di acquisto, memorizzazione dei parametri di contabilizzazione (#TT00126/23)
- Aggiunta l'esportazione di PayRoll per TeamSystem
- Aggiunta di funzionalità a Intercompany per l'esportazione
- PM / Sprint: corretta la procedura di creazione e apertura sprint per: cliente, PM e periodo di tempo   

</details>

<details>
<summary>Patch 606.1-0019: 31/01/2023</summary>   

- FI: segnalazione URA in localizzazione HR, esclusione dell'iva sospesa; distacco template tipi di movimento (#TT00204/23)
- FI: attivazione flag “account reopening” in chiusura automatica conti for Ro (#TT00254/23)
- TT00082/23: aggiungere proprio al livello della transizione consentita
- FI: Application exception: 2074/2023: aggiunto un elemento con la stessa chiave
- Aggiunto widget Html Blockly per creare un documento Html complesso
- FI: Parametro per vedere la percentuale di ammortamento di ogni immobilizzazione: Fluentis2021 (#TT00280/23)
- SD: La creazione DDT da Ordine riporta l'Ubicazione del Tipo Ordine anche passando da Picking (#TT00248/23)   

</details>

<details>
<summary>Patch 606.1-0020: 02/02/2023</summary>   

- MPS: Bug Fixed. Corretto bug nella generazione commesse da previsione in Definizione MPS (#TT00284/23)
- Risolto il problema dell'interfaccia ReadWrite su BizLink Import per il suo rilevamento automatico
- SD: La quantità residua di un Progetto non viene modificata se evado l'ordine collegato in un DDT
- Revisione algoritmo di suddivisione partite (#TT00233/23)   

</details>

<details>
<summary>Patch 606.1-0021: 10/02/2023</summary>   

- ARM: pubblicazione tipi di oggetto delle proprietà di riferimento degli oggetti di estensione personalizzati
- WM: Bug fixed. Risolto bug nella form di ricerca delle differenze inventariali (#TT00274/23)
- MPS: Bug fixed. Risolto bug in schedulazione generale (#TT00004/23)
- ARM: correzione la proposta dell'utente per l'account di posta elettronica
- ARM: correzione della generazione di modelli MVVM personalizzati (non generare la classe RW per gli oggetti senza modulo RW)
- FI: revisione cancellazione record in tabella Versamenti Iva (#TT00056/23)
- WM: Bug fixed. Corretto bug nelle differenze inventariali in merito all'UM alternativa (#TT00292/23)
- Allineamento il widget Blockly per il flusso di lavoro alla nuova logica
- Aggiunto un gestore di password per i parametri del supervisor
- Controllo articoli: Risoluzione anomalie varie:
o	Piani di controllo: Articoli Associati: Non venivano memorizzate le modifiche;
o	Controllo Articoli: Visualizzato o modificato un controllo un articolo, alla chiusura veniva visualizzato un errore;
o	Parametri Controllo Articoli: veniva visualizzato un errore all'apertura.
- Risolto il bug dell'utilizzo del parametro globale per l'attività Email
- SD:  Revisione procedura di creazione file xml in caso di quantità alternativa (#TT00397/23)
- SCM: Risolto errore nella Valorizzazione DDT di acquisto che indicava l'apertura dei documenti da parte di un altro utente e impediva la procedura
- SCM: Una fattura creata da più DDT riporta una riga nota di riferimento per ogni DDT di partenza   

</details>

<details>
<summary>Patch 606.1-0022: 15/02/2023</summary>   

- La causale proposta nelle righe di imballo nei documenti è quella presente nella causale di movimentazione degli imballi a rendere (#TT00413/13)
- SD: Correzione il problema dell'importazione delle scadenze delle fatture di vendita e della riscossione dell'IVA (#TT00482/23).
- ARM: Correzione il nome dello script e nascondere il controllo dello script all'interno del gruppo del flusso di lavoro (#TT00082/23)
- WM: Riepilogativa: aggiunti filtri di ricerca per picking e cliente (#TT00415/23)
- SD: Risolto problema di duplicazione righe Lotto nella Registrazione di magazzino di un ddt prima scaricato e poi valorizzato
- SD: Rimozione spazi dal tag Iban delle fatture elettroniche (#TT00502/23).
- ARM: modifiche per l'esecuzione della transizione (eliminazione del token quando la transizione viene eseguita), modifica del nome del widget per GenerateDocumentAction
- aggiungere l'avanzamento per il processo di aggiornamento (#TT00082/23)
- WM: revisione contabilizzazione movimenti di magazzino, gestione segni (#TT00504/23)   

</details>

<details>
<summary>Patch 606.1-0023: 20/02/2023</summary>   

- Problema risolto per l'esportazione di file txt da documenti BizLink
- FI: revisione esportazione file F24 (#TT00559/23)
- SCM: Attivati i filtri nella stampa Scadenziario Ordini fornitori (#TT00355/23)   

</details>

<details>
<summary>Patch 606.1-0024: 23/02/2023</summary>   

- FI:  revisione maschera ammortamento cespiti per calcolo giorni possesso e attribuzione data ammortamento in elaborazione (#TT03183/22)
- Applicazione la rinominazione dei file all'esportazione Intrastat
- Import registrazioni da DocFinance, revisione inserimento pagamenti partite per esclusione righe sconto/abbuono
- CO: revisione gestione date competenza e conti utilizzati nella contabilizzazione rimanenze, revisione comparazione riclassificazioni per fomule e dettagli dei dati rimanenze iniziali/finali (#TT00554/23)
- SD: Correzione della duplica sconti articolo in caso di cambiamento tipo ddt di vendita (#TT00400/23)
- FI: revisione gestione segni note di credito   

</details>

<details>
<summary>Patch 606.1-0025: 02/03/2023</summary>   

- Risoluzione il problema dei vettori di migrazione.
- PM: i clienti fornitori per i quali è stata inserita una data fine validità >= alla data attività nella dichiarazione attività, non vengono proposti nel widget cliente fornitore del documento (#TT00555/23)
- Problema risolto con il generatore di sorgenti Xaml
- SD: Disabilitato il doppio clic su stampa biglietto POS (#TT00611/23)
- SD: Nell’evasione di più ordini in una fattura viene riportata solo la spesa Trasporto del primo ordine (#TT00631/23)
- SD: Il Peso di riga in ddt e fatture viene ricalcolato anche al variare della quantità alternativa nel caso di UM alternativa Tassativa (#TT00656/23)
- PM: ristabilita la possibilità di inserire un articolo codificato in un nodo di progetto work package node (#TT00643/23)
- WM: Correzione errore di giacenza nel caso di valorizzazione ordine in ddt e poi in fattura di acquisto (#TT00661/23)   

</details>

<details>
<summary>Patch 606.1-0026: 09/03/2023</summary>   

- Abilitazione modifica campo 'Note iniziali' nelle fatture di vendita anche dopo la creazione di file fatture ordinarie Sdi(#TT00593/23)
- SD: I pesi articolo vengono correttamente riportati dall’ordine al ddt anche passando per il picking (#TT00722/23)
- FI: Scarica tassi di cambio per HR cambi valute (#TT00795/23)   

</details>

<details>
<summary>Patch 606.1-0027: 30/03/2023</summary>   

- FI:  revisione calcolo ammortamenti per localizzazione serba (#TT00682/23)
- FI: Scarica tassi di cambio for HR cambi valute (#TT00795/23)
- SD: Stampa Fattura: Sistemato script in report (#TT00816/23)
- SH: Trasformation: Modificata la priorità sulla trasformation FullTextFiscalDescription in modo che funzioni correttamente
- SCS: Correzione errore Quantità residua nei Materiali degli ordini di conto lavoro evasi in ddt (#TT00459/23)
- SCS: Inserita possibilità di evadere una quantità decimale nelle Consegna previste (#TT00817/23)
- SCS: Correzione errore uscente al cambio Fornitore in un Ordine di conto lavoro derivante da Rilascio ordini pianificati (#TT00823/23)
- PR: Risolto errore in generazione file SDD (#TT00419/23)
- SCM: Correzione della giacenza in caso di scarico ddt da magazzino successivo alla valorizzazione (#TT00804/23)
- SCM: Gli sconti finali inseriti in fattura vengono riportate nelle righe del ddt di acquisto e nella registrazione di magazzino collegati (#TT00417/23)
- SD: Nel caso di Creazione fattura da DDT e successivo scarico del DDT, la Visualizzazione giacenze viene aggiornata correttamente (#TT00802/23)
- FI: revisione filtro date liquidazione iva periodica/annuale
- FI: eccezione 4882/2023, troncamento di una stringa nei pagamenti dei fornitori
- FI: Corretto report certificazione unica: non veniva riportato il codice fiscale del rappresentante firmatario della comunicazione  
- Bizlink: revisione localizzazione testo riferimenti fattura in file Riba (#TT00888/23)   

</details>

<details>
<summary>Patch 606.1-0028: 06/04/2023</summary>   

- PR: Risolto problema in fase di creazione pagamenti fornitori manualmente, quando veniva creato un nuovo pagamento e contestualmente si andavano a richiamare le partite da inserire non venivano compilati tutti i dati relativi alla banca ma occorreva entrare ed uscire dal pagamento per avere il dettaglio compilato (#TT00916/23)
- SCS: Nel caso in cui l’ultima fase movimentabile e produttiva sia esterna, adesso il rientro di conto lavoro aggiorna correttamente la quantità prodotta nell’ordine di produzione.: (#TT00736/23)
- SCS: Negli ordini di conto lavoro, il costo proposto per gli articoli privi di listino è pari a zero (#TT00978/23)
- FI: Risolto problema nell’elaborazione della comunicazione liquidazioni periodiche iva, il credito anno precedente veniva erroneamente riportato prendendo lo stesso valore del credito periodo precedente andando così a raddoppiare il credito (#TT00875/23)
- FI: revisione test su quadratura centri di costo/profitto in caso di società senza controlling e senza gestione separata cdc/cdp in causale contabile (#TT01055/23)   

</details>
