---
title: Patch notes Versione 707
sidebar_position: 1
---

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
