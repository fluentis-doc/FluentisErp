---
title: Tab Partite
sidebar_position: 3
---

La scheda Partite è presente **solo se la causale ha il flag 'Apertura partite'** impostato.
 

### **La prima sezione** della scheda **Partite** 

è dedicata alla gestione dei dati di calcolo delle partite sottostanti e ricalca le condizioni di pagamento per una registrazione manuale di tipo IVA troveremo la griglia compilata con i dati di default così come inseriti all'interno dell'anagrafica cliente/fornitore/agente assegnata come sottoconto intestatario della registrazione stessa. Per altri tipi di registrazione (ad esempio, per i pagamenti anticipati è possibile codificare una causale che apra la partita, nel segno opposto, invece di chiuderla visto che il documento non è stato ancora rilevato): in questo caso la gestione di questa sezione diventa manuale, cosicché l'utente potrà inserire i dati essenziali del tipo di pagamento, della soluzione di pagamento e del sottoconto di riferimento, con il 100% inserito nel campo 'Percentuale'.

Per questa sezione è da segnalare che:

- la partita può essere creata anche su sottoconti non di anagrafica e che non hanno il flag Apertura partite nel piano dei conti (questo flag è relativo al solo controllo che i dati di giornale e partite corrispondano per i sottoconti che l'hanno impostato);

- gli appoggi bancari sono riportati tipicamente dall'anagrafica o dal documento contabilizzato dall'area acquisti/vendite/percipienti, ma possono essere di volta in volta forzati richiamandone uno differente utilizzando l'help abi/cab (doppio click nel campo). L'appoggio bancario collegato in questa sezione sarà il dato normalmente utilizzato nei pagamenti fornitori quale banca beneficiaria del pagamento a meno che non sia impostato il flag di '**[Imponi banca d'appoggio presente in anagrafica del fornitore](/docs/configurations/parameters/treasury/vendor-payments-parameters)**';

- normalmente viene inserito il campo '**Percentuale**'. Il significato dei campi 'Importo/Imposta' è il seguente: nel campo '**Importo**' si può inserire un importo fisso da utilizzare per la combinazione tipo pag./soluzione pag. della riga in gestione; il campo '**Imposta**' consente di definire, di questo importo, quanto sia riferibile all'IVA (questo serve nel caso in cui la soluzione di pagamento preveda delle percentuali imponibile/imposta differenziate tra le varie rate, per ottenere un calcolo corretto). È possibile inserire una combinazione importo/percentuale:



- flag **Raggruppa partite** NON ATTIVO: che si trova a sinistra viene ripreso dall'anagrafica cliente/fornitore: sostanzialmente non ha uso pratico, in quanto è ben raro che due partite abbiano stesso tipo pagamento e stessa data scadenza all'interno dello stesso documento;

- al di sotto ci sono alcuni campi di riepilogo della situazione cliente/fornitore: l'importo del fido concesso nel modulo Rischio cliente, il valore dell'esposizione ottenuto secondo la situazione delle partite aperte (senza considerare la registrazione in uso) e il saldo contabile (considerando anche la registrazione in uso);

- nel caso di registrazione derivante dalla **contabilizzazione insoluti**, la griglia superiore NON ha nessuna rilevanza per il calcolo delle partite sottostanti (tipicamente l'anagrafica prevede partite per RB, ma gli insoluti vengono gestiti come BB e non si devono riemettere in automatico altre riba): viene letta unicamente nel caso serva il dato degli appoggi bancari.

### **La griglia sottostante** 

presenta la lista delle partite calcolate secondo le impostazioni della sezione sopra: l'utente può forzare il tipo di pagamento, la data scadenza e gli importi delle varie rate (avendo cura di rispettare i totali). La griglia delle partite NON consente l'inserimento manuale di una nuova rata. 

Nel caso in cui la causale preveda sia l'apertura partite, che la chiusura per compensazione e sia stato attivato anche il flag 'Avviso', al momento del salvataggio della registrazione verrà restituito all'utente un messaggio di avviso della presenza di partite da poter compensare.

 

### I dati riportati per ogni partita creata sono:

**Descrizione**: viene indicato lo stato della partita (aperta, parzialmente aperta, chiusa);

**Conto/sottoconto/descrizione**: sottoconto cliente o fornitore al quale la partita è riferita;

**Pag**: tipo pagamento (bonifico, contanti ecc...);

**Scadenza**: data di scadenza calcolata a partire dalle condizioni di pagamento della griglia soprastante o imposta manualmente;

**Cod. doc**: codice del documento che ha generato la partita (esempio FA = fattura di acquisto, FV = fattura di vendita);

**Data documento**: data del documento (esempio fattura di acquisto) che ha generato la partita;

**N. documento**: numero del documento che ha generato la partita;

**Divisa**: divisa in cui è denominata la partita (es. EUR = Euro);

**Cambio**: tasso di cambio che ha determinato il valore in valuta ed il controvalore in Euro della partita;

**Data Valuta**: data di riferimento del tasso di cambio;

**Importo in valuta**: pari all'importo in euro se il cambio è 1;

**Importo Dare / Avere**: la partita ha un segno (o sezione che dir si voglia) così come il movimento contabile che l'ha generata. La partita con segno dare sarà una partita a nostro credito, mentre una partita con segno avere sarà una partita a debito (esempio a fronte di fattura ricevuta da fornitore o di nota di accredito emessa al cliente) ;

 

E' inoltre possibile bloccare il pagamento della partita (Flag **Non Pagabile**): la procedura memorizzerà la data e l'utente che ha bloccato il pagamento con un'eventuale nota esplicativa (**Inizio Blocco, Utente Blocco, Note Blocco**) così come data e utente sbloccante (**Utente Sblocco, Fine Blocco**), per entrambe le operazioni sono previsti specifici diritti utente nell'ARM. 

### Ulteriori elementi:

**Numero / anno partita**: assegnati automaticamente per identificare la partita;

 

**Posizione partita**: combo box collegata ad una una tabella libera definibile dall'utente, consente di classificare le partite contabili fin dal momento della loro creazione; 

**Note** (della partita): note libere che si possono anche legare automaticamente in causale contabile alla descrizione di dettaglio del sottoconto così come inserite in contabilità. 

 

**Agente**: in questo campo è possibile agganciare l'agente di riferimento per la partita: questo viene valorizzato automaticamente sulla base dell'agente inserito nella fattura di vendita all'atto della contabilizzazione (nel caso siano presenti più agenti, sarà assegnato quello con provvigioni superiori). 

**Data Rif / N. Rif**: Campi ripresi dalla data documento  e numero documento nella registrazione contabile (se presenti, altrimenti ripresi da data/numero registrazione), premettono di raggruppare e filtrare le partite/settlement riferite allo stesso documento (ad esempio una nota di credito che si riferisce ad una fattura, per visualizzare il partitario tutto insieme).

**Cig** e **Cup**: ripresi dalla fattura di vendita, ma possono anche esser scritti a mano (tramite combo box) Si veda **[documentazione sui campi in fattura](/docs/sales/sales-invoices/invoicing/header).**

**Modelli di riferimento** e **Numero di riferimento**: campi solitamente non utilizzati in Italia, tipici della Croazia (dove quando l'azienda emette la fattura ad ogni scadenza associa un tipo/codice identificativo della rata, che il cliente poi riporta nel pagamento e la banca riporta nel movimento d'incasso: dall'estratto conto bancario, quindi, facilmente si può risalire alla rata chiusa. Il campi rappresentano un riferimento anche a seguito di una futura implementazione di importazione movimenti bancari).

**Ritardo medio giorni di pagamento**: Non utilizzato in Italia: riprende il valore dei giorni di ritardo dell'anagrafica cliente ma è modificabile anche manualmente. Può essere utilizzato nella simulazione di cash flow.



| Funzione | Significato |
| --- | --- |
| Cancella le partite | Pulsante per cancellare la partita creata in automatico in base alla tipologia di pagamento inserita. |
| Cancellazione dalla griglia dei pagamenti | Pulsante per cancellare la soluzione di pagamento, proposta in automatico dall'anagrafica, o inserita manualmente. |
| Ricalcola partite | Pulsante per ricalcolare la partita forzata manualmente. |
| Raggruppa partite | Pulsante per raggruppare le partite in presenza di più partite con stessa data scadenza. |







