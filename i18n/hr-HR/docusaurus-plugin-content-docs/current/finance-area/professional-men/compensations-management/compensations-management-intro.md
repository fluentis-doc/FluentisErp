---
title: Gestione compensi
sidebar_position: 1
---

### **LINK AI TAB DELLA PARTE INFERIORE DELLA FORM**:

** [Totale ritenuta](/docs/finance-area/professional-men/compensations-management/total-withholding-tax) **

** [Lista pagamenti](/docs/finance-area/professional-men/compensations-management/total-withholding-tax) **

** [Versamenti ritenute](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in) **

** [Riepiloghi IVA](/docs/finance-area/professional-men/compensations-management/vat-summaries) **

** [Centri di costo / profitto](/docs/finance-area/professional-men/compensations-management/cost-profit-centres) **

** [INPS](/docs/finance-area/professional-men/compensations-management/national-insurance) **

 

 

Da questa maschera si procede al caricamento/modifica del documento ricevuto dal professionista o dall'agente, **sia nel caso di notula provvisoria che di fattura definitiva: la differenza tra i due, infatti, riguarderà unicamente l'inserimento immediato o successivo (entrando quindi in modifica di un provvisoria già rilevato) dei campi relativi al numero e data documento definitivo.**

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image01.png)

 

### **CAMPI DI TESTATA**:

**Percipiente**: riguarda l'inserimento del sottoconto intestatario del compenso: si possono inserire in questo campo solo sottoconti con tipo conto agente oppure fornitori che abbiano il flag ritenute d'acconto impostato in anagrafica.

I flag di stato successivi (aprire l'expander) sono: 

**contabilizzato**: gestito in automatico dall'applicazione al momento della contabilizzazione compensi. Una volta impostato questo flag il compenso non sarà più modificabile. **ritenuta versata**: sarà applicato al compenso manualmente oppure attraverso alla procedura ** [Versamenti ritenuta](/docs/finance-area/professional-men/search-compensations/withholding-tax-paying-in) ** eseguibile dalla maschera di ricerca compensi. 

**certificato**: viene impostato in automatico dal programma all'atto della stampa definitiva delle certificazioni ritenute.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image02.png)

 

Collegato al sottoconto agente o fornitore può essere predefinito il **tipo di ritenuta** da proporre al momento di caricamento del compenso (il collegamento si definisce nell'anagrafica dell'agente o del fornitore).

Il campo **note** successivo consente di annotare un testo di riferimento del compenso: si tratta di una nota che sarà poi riportata nelle note di dettaglio di tutti i movimenti contabili collegati a questo compenso. 

**Descrizione movimento**: sarà utilizzato nella contabilizzazione compensi per l'omonimo campo della registrazione contabile.

 

Nella parte a destra: 

**Codice pagamento**: questo campo, proposto in automatico (richiamando il compenso il tipo ritenuta applicabile) se è stato compilato l'omonimo campo nella form  [Gestione tipo ritenuta](/docs/configurations/tables/finance/withholding-tax-types), si riferisce al codice relativo alla causale di pagamento da indicare nella Certificazione unica dei percipienti (vedere istruzioni ministeriali).

Esempio: codice A = prestazioni di lavoro autonomo esercitate abitualmente; Q = provvigioni corrisposte ad agente o rappresentante di commercio monomandatario; R = provvigioni corrisposte ad agente o rappresentante di commercio plurimandatario; U = provvigioni corrisposte a procacciatore d'affari......

 

**Numero e anno di riferimento del compenso**: si tratta di una numerazione automatica interna del programma che deve essere univoca per la società. 

**Data documento**: viene proposta come la data attuale ma può essere impostata come la data della notula provvisoria ricevuta.

**Data e numero documento definitivo**: riguardano i riferimenti alla fattura definitiva: si tratta di campi obbligatori per procedere alla contabilizzazione compensi, anche se la causale di riferimento non dovesse essere una causale IVA. Questi due campi saranno gli unici modificabili nel caso in cui il pagamento sia già stato rilevato in contabilità.

**Data ricevimento**: campo per annotare la data di ricezione della fattura definitiva (non obbligatorio per la contabilizzazione).

 

**Progetto** (ex commessa): serve a collegare il compenso ad un progetto (commessa di vendita): potrebbe essere il caso di una perizia su un cantiere gestito a commessa. Se la ** [causale contabile](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) ** utilizzata nella contabilizzazione del compenso ha il flag progetti (ex commesse) attivo allora i costi inseriti in questo compenso saranno assegnati al progetto (commessa) inserito in questo campo.

**Cambio valuta/Data valuta/Divisa**: collegati alla gestione della divisa e dei relativi dati del cambio prelevati dalla tabella cambi (la divisa viene impostata dall'anagrafica agente/fornitore).

 

### RIGHE DI DETTAGLIO

 

**Tipo riga**: dato fonadamentale che permette di gestire automaticamente l'applicazione della ritenuta d'acconto sulla quota di costo del servizio e la sua disapplicazione sulla quota relativa lla cassa previdenziale del percipiente. Può essere di tre tipologie:



**Costo del servizio**: per inserire la quota soggetta a ritenuta per la quale Fluentis proporrà la percentuale di imponibile e l'aliquota della ritenuta letti dal tipo ritenuta, il sottoconto di costo sarà riportato dal costo di contropartita dell'agente/fornitore, il costo in valuta e in euro, l'aliquota IVA da applicare (proposta anche questa sulla base dell'anagrafica), la percentuale di cassa previdenza da calcolare sulla riga (proposta dal tipo ritenuta) e le date di competenza economica di riferimento. Queste sono gestite, per l'utente connesso, secondo i parametri di inserimento (che si possono impostare con il pulsante presente nella ribbon bar): le righe successive alla prima proporranno automaticamente il range impostato nella riga precedente.

**Cassa previdenza**: Fluentis proporrà Imponibile ritenuta 0% e il valore imponibile iva calcolato automaticamente sulla base della percentuale presente nella riga del costo del servizio precedentemente caricata.

**Altro**: viene gestito come importo soggetto a ritenuta (ma l'utente può forzare tale impostazione): si tratta normalmente dei rimborsi spese a piè di lista inseriti nel compenso, che possono essere o meno soggetti a ritenuta e normalmente sono non imponibili di IVA.

Al salvataggio del compenso saranno eseguiti messaggi di controllo nel caso in cui il valore delle partita non sia corrispondente con il totale a pagare, così come del mancato bilanciamento dei dati a centro di costo/profitto.

Una volta che è stata eseguita la contabilizzazione compensi non sarà più consentito di modificare i dati del compenso: nel caso in cui sia stato eseguita la contab. pagamenti o Enasarco, invece, saranno modificabili i riferimenti al numero/data documento definitivo, la descrizione movimento e il sottoconto inserito nella griglia dei dettagli.

 Nel caso in cui il compenso sia salvato e abbia data e numero documento definitivo, sarà possibile procedere alla contabilizzazione attraverso il pulsante **Contabilizza e chiudi** nella ribbon bar: si aprirà una maschera nella quale le date proposte saranno quelle ultime valide per il registro iva associato alla causale collegata al tipo ritenuta utilizzato.

Sono disponibili alcune stampe che possono essere eseguite con i comandi posti nella ribbon bar.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image03.png)


*Pulsanti specifici*:  
> **Parametri inserimento**: nei parametri utente è possibile definire se il nuovo compenso deve riproporre lo stesso sottoconto dell'attuale, lo stesso tipo ritenuta, come gestire la nuova data documento e infine come gestire il range di date competenza economica (fine esercizio – cioè la data finale sarà uguale alla fine esercizio, giornaliera – cioè data finale uguale a data iniziale, nessuna data per tipo conto servizi – cioè richiederà obbligatoriamente l'inserimento di entrambe le date se il tipo del sottoconto inserito è impostato come 'Servizio');  
> **Contabilizza e chiudi**: attivo quando sono stati inseriti data e numero documento definitivi, consente di eseguire la contabilizzazione del compenso;  
> **Nuovo dettaglio**: attiva il cursore nell'inserimento di una nuova riga di dettaglio del compenso;  
> **Cancella dettaglio**: cancella le righe di dettaglio selezionate nel compenso;  
> **Calcola valori**: esegue un ricalcolo dei valori relativi alle ritenute sulla base dei dati inseriti nelle righe di dettaglio.  

---
### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>