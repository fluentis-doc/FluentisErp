---
title: Patch notes Versione 706
sidebar_position: 1
---

### Patch 706.1-0008 - 05/09/2024
> - MS – In generazione commesse è possibile creare prototipi commessa con molte più righe contemporaneamente. (#TT03636/24)
> - WMS - Adesso in gestione spunta e conferma picking il focus ritorna nel campo barcode dopo ogni lettura. (#TT03704/24)
> - FI - all’interno delle registrazioni contabili, revisione del pulsante di ricalcolo imposta (#TT02926/24)
> - ARM – Projects page freezing fix
> - SD – Se nei documenti di vendita viene cambiato il Cliente, anche il widget Sconti articolo nel tab Articoli si aggiorna (#TT03735/24)
> - FI - Vat register report - change to have the posibility to use quarterly/monthly for history  (TT03769/24)
> - SH - Abilitata la colonna Valore del Parametro generale 'Default Ledger Account Style': nella colonna Valore è possibile inserire 1 o 3 per configurare il widget delle anagrafiche contabili in uno o tre campi (conto, sottoconto, descrizione) (#TT03604/24)
> - WM – In modifica massiva articoli, aggiunta la possibilità di variare il flag Default WMS nel tab UM alternative. (#TT03683/24)
> - MES – Nelle dichiarazioni di produzione, quando viene registrato un avanzamento, nel movimento di magazzino viene già calcolato il costo dell’articolo prodotto, senza attendere la dichiarazione di chiusura. (#TT03071/24)
> - WM – Corretto bug nella funzione di rollback trasferimento delle liste di trasferimento UDC. (#TT03710/24)
> - SCM - Nella procedura di Evasione da ordini la Quantità da evadere permette l'inserimento degli stessi decimali della Quantità residua (#TT03700/24)
> - WMS - Corretto bug nel ricevimento merci che non creava correttamente i movimenti delle UDC create. (#TT03677/24)
> - FI/SCM/WM - Standardization HR - workflow purchase accounting ( TT03450/24)
> - FI/SCM/SD - Non working cases for FA_RO_ContabFattura - in algorithm ( TT03737/24)
> - WM - Migliorata e ottimizzata la procedura di import dei picking tramite Webapi. (#TT03723/24)
> - FI - SafT - changes for GeneralLedgerEntries July 2024 ( TT03838/24)
> - SH - Piano dei Conti Fast Start senza caratteri accentati ( TT03740/24)
> - WM – Nella form di ricerca dell’anagrafica articolo, ora i campi Cliente e Fornitore preferenziale filtrano i dati rispettivamente per cliente e fornitore.  (#TT03698/24)
> - SCM - Creata stampa Etichette da Ordini Fornitori che genera etichette fisiche per l'identificazione e la gestione degli articoli che fanno parte di un ordine.
> - WM - In gestione spunta e conferma picking del WMS, ora gli articoli nel tab articoli sono ordinati anche per numero della riga di picking.  (#TT03847/24)
> - PM: spese da fatturare proposte negli interventi, ripristinato filtro per tipo intervento in fase di proposta (#TT03653/24)
> - SD - Nelle stampe standard 'Fattura di vendita' e 'Fattura accompagnatoria' vengono stampate, solo per le fatture EXTRA UE, le Nomenclature degli Articoli sotto il codice articolo; inoltre, nella colonna della descrizione articolo viene riportato uno specchietto con il Riepilogo degli importi per nomenclatura (#TT02102/24)
> - ARM – migration customization projects/objects fix
> - PM - risolto blocco in modifica quantità, prezzo, unità di misura dopo aver inserito un articolo codificato in un progetto (ticket 03696/24)
> - PM: WEB calendario e assegnazione risorse wbs, in caso di più risorse corretta spostamento/allineamento label utilizzando lo scroll bar  (#TT03405/24)
> - PM: WEB cedolini paga, aggiunti totali parziali nel riepilogo per ogni tipo spesa  (#TT03186/24)
> - PM: planner e wbs assegnazione risorse, sbloccata possibilità di assegnare appuntamenti alle risorse anche in giornate non previste per il loro calendario lavorativo (TT03451/24)
> - PM: wbs assegnazione risorse aggiunti campi inizio e fine pausa in fase di creazione nuovo appuntamento (TT03452/24)


### Patch 706.1-0007 - 08/08/2024
> - SD - Nei DDT e nelle Fatture di Vendita è ora possibile effettuare lo storno delle righe articolo di tipo 2, 3, 4 e 5 (#TT02375/24)
> - MS - Se in generazione commesse di produzione viene generata una commessa con tipo commessa “Multiprodotto” e  raggruppamento “Nessuno”, questa viene creata con tante righe quante sono le righe degli ordini clienti per quell’articolo; quindi senza raggrupparle in un’unica riga (#TT03615/24)
> - WM - Ora nel dettaglio dell’analisi disponibilità le righe di ordini produzione valorizzano i campi "Ordine cliente collegato" e "Quantità ordine cliente collegato” se sono collegate ad un ordine cliente (#TT03549/24)
> - MS - Corretto bug sulla procedura MRP per articoli di produzione con distinta base non autorizzata (#TT03543/24)
> - WM - Corretto bug nell'help lotti che non visualizzava correttamente il valore della disponibilità nella griglia superiore nel caso in cui fosse filtrato per ubicazione (#TT03600/24)
> - SCM - Nella form ‘Sdi- Chiusura documenti’, apribile dalla testata delle Fatture di acquisto, sono state aggiunte nella prima griglia le colonne Numero documento e Data documento (#TT03049/22)
> - SD - Eliminazione dell’arrotondamento nel calcolo dello sconto per la percentuale del Range discount (#TT03609/24)
> - SH - Abilitati i decimali nelle colonne Domanda e Offerta per gli Ordini pianificati, nell'Analisi disponibilità (#TT03201/24)
> - FI - la contabilizzazione canoni di leasing ora utilizza il conto il costo degli interessi sul sottoconto specifico impostato (#TT03582/24)
> - FI/PR - revisione visualizzazione filtri di ricerca per partite pagabili/non pagabili, le non pagabili vengono escluse di default nelle maschere delle compensazioni, nelle registrazioni, nell’acquisizione effetti da partite, nel modulo pagamenti fornitori (#TT03641/24)
> - QY - Non compliance - Corretta anomalia della propagazione degli Extra data dal Tipo non conformità alla Non conformità (#TT03586/24)
> - SD - Nella form ‘Dettaglio righe Ordini clienti’ è stato abilitato il filtro in griglia per le colonne ‘Tipo documento evasione’ e ‘Numero documento evasione’; dopo l’inserimento del filtro è necessario cliccare Ricerca per visualizzare i risultati (#TT03655/24)
> - FI/PM - nella form di gestione dei cedolini ore dipendenti, il filtro attività ora è impostato sulla risorsa/dipendente e non più sull’utente connesso (#TT03607/24)
> - PR - gestione file SEPA per Slovenia (versione pain 001.001.03) (#TT03504/24)
> - FI - revisione ripresa ammortamento cespiti delle chiusure infrannuali, calcolo anche in presenza in contabilità di ammortamenti già inseriti per l’anno della chiusura (#TT03042/24)
> - WMS - Corfema picking e Gestione spunta. Implementata la possibilità di sovra evadere la quantità indicata in un picking (#TT03651/24)
> - WM - Corretto bug nella procedura di ricalcolo costo nel caso in cui fossero presenti delle varianti (#TT02015/24)

### Patch 706.1-0006 - 01/08/2024
> - WMS - Corretto bug nella visualizzazione delle unità di carico della Conferma prelievo UDC del WMS (#TT03473/24)
> - SD - Corretto loop nello scarico automatico di DDT con soli articoli note e non codificati (rif.ticket 3557/24)
> - MES - Corretto bug nel calcolo del costo dell'articolo prodotto con le dichiarazioni di produzione (#TT03408/24)
> - SD - Nelle Offerte di Vendita gerarchiche quando viene inserita una riga descrittiva nel tab Materiali viene associato un tipo riga 2 (#TT03420/24)
> - WM - Corretto bug in analisi disponibilità (#TT03349/24)
> - FI - Riordino protocolli IVA: corretto errore nell’inserimento numerazione automatica e nell’aggiornamento protocolli nelle descrizioni (#TT03378/24)
> - FI - corretto errore in fase di lancio della contabilizzazione del file Movimenti bancari (#TT03579/24)
> - SH - Ottimizzazione dell'inserimento Extra Data di tipo Data insieme ad Extra Data di altro tipo (#TT03055/24)
> - SD - Corretto errore uscente nell’inserimento di un nuovo articolo in un DDT già scaricato (#TT03177/24)
> - FI - Durante la creazione della fattura o della registrazione contabile dai Documenti di acquisto in entrata, vengono proposti solo i contatti con un conto contabile collegato (#TT03352/24)
> - PM: Risolta segnalazione su cambio cliente in testata progetto (#TT03565/24)
> - PM: risolto caso di assegnazione wbs in intervento, che nel caso di corrispondenza con i parametri progetto, impediva l'associazione (#TT03574/24)
> - PM: Progetto - inserimento nuovo livello figlio di una root, impediva l'associazione di un articolo codificato (#TT03583/24)
> - WM - Corretto bug in anagrafica articolo, che all'inserimento di una variante creava anche la distinta base per quella variante.(#TT03443/24)
> - MS - Corretto bug in Capacità centri di lavoro che considerava la capacità su un centro di lavoro interno data da un ordine pianificato di conto lavoro; ora, se l’ordine pianificato di conto lavoro ha una fase interna (perché a volte viene prodotto internamente e a volte esternamente) questo non impegna più quel centro di lavoro (#TT03406/24)
> - MES - Corretto bug nel ciclo di lavoro che nel caso in cui venisse aggiunta una nuova fase non riportava il fornitore preferenziale inserito nella fase standard (#TT03551/24)

### Patch 706.1-0005 - 18/07/2024
> - MS - Nuove ottimizzazioni per la procedura del MRP (#TT03485/24)
> - SCS - Corretto errore che al momento della duplicazione di un Ordine di Conto Lavoro forzatamente evaso non aggiornava lo stato evasione dei materiali da consegnare del nuovo ordine (#TT03380/24)
> - SCS - Negli Ordini di Conto lavoro è stato aggiunto un nuovo parametro nei Dati materiali proposti denominato “Dall’ordine di produzione” usato per il ricalcolo delle quantità dei materiali. Viene impostato automaticamente alla creazione di un ordine di conto lavoro da fase esterna di un ordine di produzione, al rilascio di un ordine pianificato di produzione con fase esterna e al rilascio di un Ordine di Conto lavoro pianificato. Per la proposta dei dati dei materiali nell’ordine di Conto lavoro è ora possibile avere un parametro diverso per ogni riga articolo (#TT02097/24)
> - SCS - Corretto errore nel calcolo delle quantità dei materiali negli Ordini di Conto lavoro quando venivano proposti dall’ultima consegna effettuata presso lo stesso terzista (#TT03168/24)
> - PM - Stampa dettaglio progetti, corretto caso di movimenti doppi in stampa. Gestito correttamente caso di ddt con movimentazione a magazzino e relativa fattura collegata (#TT03484/24)
> - PM - dichiarazione attività fatturabile - gestita correttamente avviso di mancanza configurazione tipo intervento - nel tipo attività o nei parametri generali di progetto (#TT03462/24)
> - MS - Ottimizzata e velocizzata la procedura MRP (#TT02462/24)
> - MES - Corretto bug nel calcolo dell'occupazione dei centri di lavoro nel caso in cui fossero modificate le fasi dell'ordine di produzione (#TT02662/24)
> - SH - La riga spesa Conai, al salvataggio del documento, prende la stessa IVA della riga articolo che l’ha generata (#TT02599/24)
> - FI - per società con controlling attivo, revisione test di quadratura sulle dimensioni (#TT03496/24)
> - SH - Revisione ricalcolo Conai in caso di documento duplicato (#TT03508/24)
> - MS - Migliorata ed ottimizzata la procedura di costificazione commessa (#TT00449/24)

### Patch 706.1-0004 - 22/07/2024
> - FI - revisione scroll della lista registrazioni contabili (#TT03440/24)
> - MES - Corretto bug nella lista prelievo materiali inerente alla creazione del picking con articoli gestiti a lotti (#TT03187/24)
> - FI - per la localizzazione svizzera, revisione contabilizzazione degli arrotondamenti sul totale documento gestiscono con spese finali senza iva (#TT03335/24)
> - FI - Corretto problema che non gestiva la banca d’appoggio alternativa nella creazione automatica distinta di pagamento fornitori utilizzando l’anagrafica agente (#TT03274/24)
> - Gestione timeout esecuzione stored procedure blockly (#TT03153/24)
> - HR - calcolo paghe - introdotto nuovo flag nei codici paga "Straordinario festivo" che considera tutte le attività svolte nelle giornate di sabato e/o domenica, non previste nell'orario lavorativo della risorsa (#TT02674/24)
> - FI - nella contabilizzazione fatture di acquisto, gestione in grigila iva del campo dell’iva per causali automatiche (#TT02641/24)
> - SCM - revisione contabilizzazione centri di costo da fatture acquisto, segni negativi (#TT03239)
> - FI - Risolto errore exception nell’intrastat che coinvolgeva un caso relativo ad una nota di accredito rif R: TT03449/24

### Patch 706.1-0003 - 18/07/2024
> - FI - nella contabilizzazione fatture di vendita, allineamento della gestione del cambio per la sezione dei centri di costo (#TT02172/24)
> - SCM - contabilizzazione fatture di acquisto, assegnazione divisione alle righe di movimento centro di costo per righe di spese finali (#TT03239/24)
> - SD - Corretto errore che non permetteva di effettuare un ordinamento per stato evasione nella griglia degli Ordini clienti (#TT03404/24)
> - WM - In visualizzazione giacenze, i decimali utilizzati dall'UM alternativa utilizzati, sono quelli indicati sul campo UM decimali dell'UM alternativa utilizzata (#TT03313/24)

### Patch 706.1-0002 - 17/07/2024
> - MES - Corretto bug nella lista prelievo materiali che non variava correttamente lo stato degli ordini di produzione da lanciato ad esecutivo se venivano elaborati più di uno alla volta (#TT03383/24)
> - MS - Nella form di Generazione Commesse di Produzione da Sottoscorta è stata aggiunta la colonna della Giacenza alla data odierna, mentre per i documenti privi della Data Consegna viene ora preso in considerazione il parametro “Se non è specificata la data di consegna” presente nel tab Parametri della form (#TT02573/24)
> - PR - per la generazione file Sepa, Sepa estero, Sepa Sdd vengono ora verificati i parametri generali "FS-PR-SEPA-PaymentRequest", "FS-PR-SEPA-ForeignPaymentRequest", "FS-PR-SEPA-SDD", per capire quale flusso BizLink chiamare. Se non impostato, si usa il flusso predefinito per la localizzazione della società (#TT03341/24)

### Patch 706.1-0002 - 16/07/2024
> - SD - Revisione test controllo della nazione cedente/prestatore in fattura Sdi per autofatture, da campo nazione al campo codice iso della partita iva (#TT03368/24)
> - WM - Nel picking, migliorata l'accessibilità al campo lotto nel caso in cui si riapra un picking e l'utente vari la quantità nel campo quantità prelievo. Prima era necessario cambiare riga prima di variare il lotto, mentre ora non è più necessario (#TT03228/24)
> - PM - wbs assegnazione risorse, migliorato refresh visualizzazione tree progetto in seguito a cambio filtri (#TT03376/24)
> - MS - Corretto bug nel rilascio degli ordini pianificati di acquisto, ora le RDA create vengono raggruppate correttamente per cliente, tipo e anno (#TT03382/24)


### Patch 706.1-0000

> - WEBAPI - risolta l’anomalia legata al settaggio della ResidualQuantity di DDT di acquisto e DDT di vendita per righe con quantità 1.  
> - FI - Enasarco: corretto bug nella form di lancio della stampa 'Enasarco' che non gestiva correttamente il filtro per range di date (#TT00824/24)  
> - FI - Liquidazione iva periodica di gennaio - stampa definitiva: il credito anno precedente non viene più salvato nella dichiarazione iva periodica, anche nel campo del credito periodo precedente.  
> - FI - Registrazione contabile: nel tab 'Pagamenti' è stata bloccata la possibilità di modificare le righe pagamento derivanti da pagamenti percipienti; bisogna eseguire il rollback e modificare l’importo di pagamento nella procedura di contabilizzazione.   
> - FI - Contabilizzazione anticipi incassi: corretto errore nella form 'Contabilizzazione anticipi incassi' dove nel totale, a fronte di note di credito, il relativo importo veniva sommato anziché sottratto (#TT01463/23)  
> - FI - Contabilizzazione fatture di acquisto: revisione gestione 'Data registrazione' per lo storno automatico delle 'Fatture da ricevere'.  
> - FI - Intra2: revisione 'Ripresa dati da registrazioni' per il caso dell’oggetto FSPosting custom.  
> - MES: risolto bug nel ricalcolo della data ora inizio e fine delle fasi dell’ordine di produzione (#TT03584/23)  
> - MES - Schedulazione generale: corretto bug per commesse non esaminate.  
> - MES - Dichiarazioni di produzione: è stato aggiunto il dettaglio dell’ubicazione nel messaggio di errore dovuto a giacenza insufficiente (#TT02064/24)  
> - MPS: risolto bug in fase di creazione degli ordini pianificati nel caso di materiali con livello fittizio (#TT00562/24)  
> - MPS - Schedulazione generale: corretto bug per il caso in cui si schedulassero molte righe contemporaneamente (#TT01451/24)  
> - MPS: corretto bug che si verificava nel caso in cui venisse usato il raggruppamento insieme al lotto economico (#TT02990/23-#TT01099/24)  
> - MPS - Schedulazione: corretto il problema tecnico legato alle custom relative alla schedulazione (#TT02304/24)  
> - PR - Gestione liquidità: è stato modificato il comportamento della form per allinearlo alle logiche generali. Il campo calcolato 'Progressivo' può essere gestito solo con l’ordinamento di default della form e viene nascosto cambiando criterio di ordinamento (#TT02060/24)   
> - QY - Azioni correttive: revisione logiche di abilitazione informazioni presenti nel tabulatore 'Verifiche prossimo audit'.   
> - SCM - Richieste di acquisto: risolta l'anomalia che non salvava correttamente un profilo nelle richieste con filtro 'Non evase' (#TT02123/24)   
> - SCM - Dettaglio righe ordini: corretto il bug che non visualizzava 'Codice/Descrizione' dell’articolo fornitore quando l’ordine non era evaso (#TT02344/24)  
> - SCM - DDT acquisto: se un documento di acquisto è già caricato, non è possibile cambiare il codice lotto (#TT01712/24)  
> - SCM - Documenti acquisto: corretto l'errore nell’aggiornamento degli importi nei movimenti di magazzino in presenza di una spesa ripartita nel DDT o nella Fattura di Acquisto (#TT00794/24)  
> - SCM - Evasione ordini: corretto l'errore che proponeva la stessa 'Descrizione articolo fornitore' nella procedura di 'Evasione ordini', per tutti i fornitori preferenziali dell'articolo (#TT01501/24)  
> - SCM - Richiesta di offerta: se il flag 'Prezzo unità di misura alternativa' è attivo nella 'Richiesta di offerta', al momento della creazione dell’Ordine fornitore da 'Offerta fornitore' il flag sarà riportato anche nell’ordine creato (#TT02804/24)   
> - SCS - DDT e nei Rientri di Conto Lavoro: il lotto nei materiali viene ora proposto in automatico se la tipologia di prelievo è FIFO o A scadenza (#TT01140/24)    
> - SCS - Listini terzisti: corretto bug nel 'Rilascio degli ordini di conto lavoro' che riportava solo il prezzo dell’articolo, ma non il listino.  
> - SD - Bilancino di fatturazione: revisione gestione segni nel subreport dei totali per fatturato vendite.  
> - SD - Documenti di vendita: corretta l'anomalia nei documenti di vendita che non gestiva adeguatamente la provvigione in presenza contemporaneamente di agenti legati ad un destinatario/destinazione del cliente e NON legati ad alcun destinatario/destinazione ma semplicemente al cliente (#TT00273/24)   
> - SD - Ordini clienti: corretto errore che modificava lo stato di evasione della commessa a seguito di un aggiornamento della 'Data consegna' nell’ordine cliente (#TT01699/24)  
> - SH - Duplica articoli: la procedura riporta anche le note dei fornitori preferenziali (#TT01580/24)  
> - WM - Implosione componenti: corretto bug nell’export excel dei dati presenti nel report 'Implosione componenti' che non riportava il valore nella colonna 'Quantità' (#TT02753/24)   
> - WM - Valorizzazione magazzino: corretta l'anomalia nella visualizzazione degli errori della procedura nel caso in cui questi fossero più di 100.000.  
> - PM - Interventi: con il cambio dello stato dell'intervento da 'Approvato' in 'Inserito', vengono cancellate tutte le attività collegate all'intervento, per poi rigenerarle al nuovo cambio stato (#TT00391/24)  
> - PM - Elaborazione SAL: risolte casistiche di calcoli non corretti per elaborazioni SAL di più progetti in contemporanea (#TT01325/24)  
> - PM - Progetti: formattato correttamente il campo prezzo nelle righe dei progetti (#TT01384/24)  
> - PM - Progetti: le modifiche al numero wbs nella tabella del modulo progetto vengono riportate nel tab 'Attività' (ticket 01020/24)    
> - PM - SAL: bloccato inserimento manuale di entrambi i valori dare/avere nella stessa riga; reso modificabile campo 'Riferimento'.  
> - PM - Analisi SAL: reso visibile nel titolo di ogni SAL anche la nota (#TT01382/24)  
> - SD - Fatture di vendita: al salvataggio di una nota di credito, tutti i 'Tipi spesa' vengono inseriti con segno negativo, tranne le spese 'Bollo' (#TT01289/24)  
> - SD - Fatture di vendita: consentita la modifica del range di 'date di competenza economica' con file Sdi creato ma documento non contabilizzato.  
> - SD - Fatture di vendita: l'inserimento di un articolo all'interno di una 'Fattura di vendita' mediante l'utilizzo dell'Help articoli ora riporta correttamente la classe (#TT01213/24)  
> - TR - Import file cbi: revisione gestione note di riga nell’import dei movimenti bancari.   
> - Offers - Offerte: le versioni successive di un’Offerta ereditano i 'Documenti allegati' (#TT01149/24)  