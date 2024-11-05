---
title: Definizione delle relazioni fra piano dei conti e piano dei centri aziendali
sidebar_position: 2.2
---

Dopo aver redatto il piano dei [***Centri aziendali***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) il passaggio successivo è quello di prendere il nostro [***PIANO DEI CONTI***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) e relazionarlo al piano dei centri: in questa fase, quindi, dobbiamo definire conto per conto le logiche di attribuzione dello stesso ai vari centri. Per esempio, il riscaldamento, molte volte, si suddivide in base ai metri quadri occupati dai centri medesimi piuttosto che la forza motrice in base a un parametro di utilizzo teorico di ogni centro della stessa forza motrice. Altro esempio è quello di una manutenzione in base alle fatture che la contabilità riceve direttamente. Se vogliamo un’attribuzione oggettiva delle manutenzioni nel momento in cui noi riceveremo la fattura saremo anche in gradi di attribuirla al centro in modo corretto. Bisogna definire in modo particolareggiato le relazioni esistenti tra i conti di contabilità e i relativi centri, in modo da attivare una contabilità analitica a integrazione di quella generale che non comporti un eccessivo appesantimento di lavoro da parte dell'ufficio amministrativo.

:::tip Nota
Per chi utilizza la gestione del Controlling della Contabilità gestionale, invece di predefinire un'attribuzione secondo percentuali fissate a livello di Piano dei conti, si suggerisce di associare il centro virtuale al 100% per poi definire dei *Cost driver* specifici di ribaltamento, magari anche solo sulla stessa logica percentuale. A livello di Contabilità gestionale, infatti, il dato dell'analitica della contabilità generale viene sempre cancellato e ricreato per il periodo che si sta elaborando e quindi risulta molto più comodo applicare a valle una regola del cost driver, che consente di essere applicata in un range di date di validità (aprendo alla possibilità di cambiare in corsa i criteri applicati) senza dover intervenire manualmente sulle registrazioni analitiche già memorizzate.
:::

:::tip Nota
Nel caso in cui si decida una valorizzazione puntuale caso per caso da parte dell'utente in contabilità, nel Piano dei conti possiamo scegliere di
- inserire più centri con percentuale 0: l'utente troverà queste righe nella registrazione e potrà valorizzare manualmente la singola riga con il valore del caso e ***FluentisERP*** al salvataggio cancellerà quelle rimanenti con importo zero. Se la dimensione dei centri e la causale non consentono registrazioni sbilanciate, non si potranno avere squadrature.
- inserire più centri con percentuale 100: l'utente troverà queste righe valorizzare nella registrazione e potrà eliminare quelle che non sono da valorizzare, piuttosto che modificare i valori prima di salvare. Se la dimensione dei centri e la causale non consentono registrazioni sbilanciate, non si potranno avere squadrature.
- Per chi utilizza la gestione del Controlling della Contabilità gestionale, è possibile inserire una riga di impostazione senza uno specifico centro, ma con solo la dimensione dei centri e, opzionalmente, anche la categoria dei centri che si vuole far valorizzare per quel conto: l'utente troverà nella registrazione la riga valorizzata con il centro vuoto ed aprendo la tendina avrà visibilità solo dei centri della dimensione (e della categoria, se impostata) del caso
:::

L'aggancio al Piano dei conti è solo uno dei punti disponibili al collegamento dei centri: a seconda dei casi, delle dimensioni da valorizzare e delle logiche da applicare, potrebbe essere utile procedere al collegamento dei *Centri aziendali* su altre anagrafiche di ***FluentisERP***. Possiamo infatti associare i centri a
- Anagrafiche articoli
- Anagrafiche clienti/fornitori/agenti
- Dipendenti e categorie attività del personale, in uso nell'area Progetti
- Anagrafica dei magazzini
- Anagrafiche cespiti

:::tip Nota
Ogni modulo del ciclo attivo/passivo, nella relativa maschera di configurazione dei suoi parametri, prevede la definizione dell'ordine logico di ricerca dei centri per valorizzare la singola riga articolo nel documento del caso, così come la definizione di come comportarsi nei vari processi di creazione dati da un modulo all'altro (ad es.come comportasi l'evasione di un ordine, piuttosto che nelle creazione fatture da ddt).
Anche queste configurazioni sono da valutare attentamente per definire il punto corretto di valorizzazione dei dati nel ciclo documentale.
:::

Un'ulteriore importante caratteristica da definire a livello del piano dei conti è quella dell'utilizzo o meno del dato contabile nelle elaborazioni del Controlling: alcuni esempi possono rendere più chiaro la necessità di impostare l'opzione *Non utilizzare nel controlling* con gli eventuali criteri di conguaglio.
Nel piano dei conti avremo innanzi tutto una serie di costi a rilevazione posticipata: il caso tipico è il costo del collegio sindacale, che devo stimare ad inizio anno per il controlling, ma che si andrà a conguagliare a fine anno quando avrò il dato consuntivo rilevato contabilmente.
Oppure l'azienda potrebbe decidere di utilizzare l'ammortamento civilistico/fiscale di contabilità anche nelle valutazioni per la contabilità gestionale, piuttosto che introdurre una logica di ammortamento tecnico extracontabile.
Oppure i costi per il personale, quando contabilmente non si rilevano periodicamente le quote parte degli accantonamenti che hanno manifestazione in determinati periodi dell'anno (come nei mesi di rilevazione di tredicesime o mensilità aggiuntive).