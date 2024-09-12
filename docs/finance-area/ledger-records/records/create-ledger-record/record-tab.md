---
title: Tab Registrazione
sidebar_position: 2
---

 

La prima sezione "**Estremi IVA del documento**", è presente solo per registrazioni IVA (dove nella causale contabile è settato un registro IVA ed un tipo di movimento iva coerente). 


 

In caso di inserimento manuale di una nuova registrazione la sezione può essere compilata in più modi:

- l'anagrafica cliente/fornitore/agente intestataria della registrazione non ha alcun sottoconto di contropartita predefinito e nemmeno l'aliquota iva standard: in questo caso l'utente procedere a scegliere il tipo di operazione IVA (vedi sotto il dettaglio) così come il sottoconto di riferimento della riga e l'aliquota IVA relativa. Una volta impostato anche questo la procedura provvederà a scorporare il totale del documento/registrazione inserito in testata per assegnare gli importi relativi alla riga. L'utente potrà modificare questi e procedere a nuovi inserimenti, che avranno sempre la stessa logica di inserimento e l'importo proposto sarà calcolato sulla base della differenza mancante a coprire il totale della registrazione;

- l'anagrafica cliente/fornitore/agente prevede il sottoconto di contropartita predefinito e/o l'aliquota IVA: una volta inserito il tipo di movimento IVA la procedura andrà a proporre il sottoconto di contropartita e/o l'aliquota così come predefinita, gli importi saranno inseriti come nel caso precedente scorporando il totale documento/registrazione e l'utente potrà modificarli manualmente: la prossima riga, nuovamente, proporrà sottoconto/aliquota dall'anagrafica e l'importo ottenuto dal residuo a copertura del totale documento/registrazione;

- l'anagrafica cliente/fornitore (non è gestito per gli agenti) prevede una lista di sottoconti di contropartita, nessun sottoconto di contropartita predefinito, ed è presente l'aliquota IVA predefinita: in questo caso l'applicativo proporrà direttamente nella sezione IVA la lista dei sottoconti di contropartita predefiniti, ognuno con la relativa aliquota IVA di dettaglio o con l'aliquota predefinita dell'anagrafica, e l'utente dovrà porre gli importi manualmente riga per riga. In questo caso l'aggiunta manuale di una nuova riga non andrà a proporre il sottoconto relativo ma la sola aliquota IVA, scorporando l'importo mancante a copertura del totale documento/registrazione;

**La lista dei tipi di movimento IVA, una tabella fissa interna del sistema, prevede la seguente lista**:

**Generico**: è il tipo **standard** di movimento IVA, sufficiente nella quasi totalità dei casi. Questo tipo riga viene considerato in alcune procedure IVA come movimento merce;

**Destinato alla rivendita**: è da utilizzare per gli acquisti che sono base di calcolo delle percentuali da applicare nella ventilazione dei corrispettivi (ad es. per supermercati o farmacie: questi dettaglianti non applicano l'IVA articolo per articolo, ma viene loro consentito di fare un totale unico delle vendite di fine periodo e suddividere gli importi secondo la proporzione degli articoli acquistati nel periodo); 

**Arrotondamenti**: si tratta degli arrotondamenti fuori campo IVA, tipici ad esempio delle bollette telefoniche. L'utilità di questa indicazione è minima, comunque il sottoconto relativo viene inserito secondo la logica vista poco sopra;

**Vendita IVA 74Ter**: si tratta di un tipo movimento specifico per le agenzie di viaggio, per le quali la data competenza IVA slitta di 30 giorni rispetto alla data dell'operazione (vendo in data odierna, l'IVA sarà da versare nella liquidazione del prossimo mese). Su queste righe viene applicata la gestione IVA del 74Ter con la liquidazione IVA periodica relativa;

**Rivendita**: si tratta delle vendite sulle quali l'applicativo andrà ad applicare il calcolo della ventilazione dei corrispettivi;

**Operazione non agricola**: si tratta di un tipo movimento specifico per le società soggette a regime agricolo, serve per escludere da questo regime (impostato nella causale contabile) per la riga specifica;

**Servizio**: si tratta di un tipo movimento specifico per identificare che la riga deriva da un acquisto/vendita di servizi, elemento importante in alcune procedure IVA (ad esempio glie elenchi INTRASTAT).

Per i campi successivi della griglia IVA vanno menzionati:

**% Indetraibilità**: viene ripreso dall'aliquota IVA inserita nella riga. Se ne sconsiglia la forzatura manuale, l'operazione corretta è modificare l'aliquota IVA;

**Imposta**: può essere forzato manualmente rispetto al calcolo effettuato  dalla procedura: può succedere, infatti, che il documento in acquisto abbia un arrotondamento non gestito correttamente, l'utente deve registrare il documento così come lo riceve;

**Totale valuta / totale**: sono campi calcolati e non memorizzati a livello di database;

**Da data competenza/A data competenza**: sono le date di **competenza economica**, fondamentali per i **calcoli** automatici delle **rettifiche e integrazioni** sia a livello di bilancio infrannuale che di bilancio contabile. Sulla base della loro indicazione saranno calcolati i ratei ed i risconti.

Esempio: siamo al 31/03/anno X. 

Se la registrazione di costo riporta date di competenza 31/03/X - 31/03/X+1, in data 31/12/X al lancio delle procedure di assestamento sarà calcolato un risconto attivo per la quota parte del costo di competenza 01/01/X+1 - 31/03/X+1.



Se la registrazione di costo eseguita il 31/01/X riporta date di competenza 31/01/X-1 -31/01/X, al lancio delle procedure di assestamento in data 31/12//X-1 verrà calcolato un rateo passivo per la quota parte di costo di competenza 31/01/X-1 - 31/12/X-1

 

Questo range di date può essere gestito automaticamente, a seconda dei **[Parametri di inserimento](/docs/finance-area/ledger-records/records/create-ledger-record/header-and-total-movements-description)**, in 3 modi alternativi: ‘Fine esercizio' (con la quale la data iniziale viene proposta sulla base della data documento e quella finale come data fine esercizio: opzione sconsigliata), ‘Giornaliera' (con la quale entrambe le date sono impostate sulla base della data documento) e ‘Nessuna data per tipo conto servizio' che è l'opzione consigliata. In questo caso, infatti, l'applicativo non proporrà nessuna data per i sottoconti economici che prevedono nel tipo conto il flag ‘servizio' ma obbligherà l'utente all'inserimento manuale del range corretto (mentre negli altri casi proporrà la stessa data documento su entrambe le date). In questo modo saremo più sicuri che l'utente vada a gestire il range di competenza correttamente, per esempio per i sottoconti delle assicurazioni, degli affitti, dei canoni periodici;

ATTENZIONE: perché possano essere calcolati automaticamente i ratei e risconti dalla procedura di assestamento è necessario che il tipo conto utilizzato per i conti interessati dalle rettifiche sia definito nella tabella **[Tipi conto](/docs/configurations/tables/finance/account-types)** con il flag Servizio.

Esempio di tipi conto (nei database standard) "Costi da rettificare" e "Ricavi da rettificare" che hanno il flag servizio nella tabella Tipi conto.

Il tipo conto idoneo verrà assegnato al sottoconto in questione direttamente nel piano dei conti.

 

**Mese**: è il periodo di riferimento IVA per la registrazione, ottenuto rispetto al tipo di liquidazione e alla data di competenza IVA. Il campo utilizzato effettivamente nella liquidazione, comunque, è la data competenza IVA;

**Data competenza IVA**: il campo viene proposto rispetto all'impostazione della causale contabile, tipicamente come data registrazione per gli acquisti e data documento per le vendite (se il movimento è vendita 74Ter allora è data documento + 30gg). Questa è la **data di riferimento per la stampa della liquidazione IVA periodica**;

**Competenza plafond**: questa data viene presa come riferimento per il concorso della registrazione in questione al calcolo del plafond; viene proposta pari alla data documento per tutte le aliquote IVA che prevedono la gestione del plafond IVA;

**Nota variaz. anni prec.**: il campo è attivo solo per registrazioni con tipo documento che prevede il flag ‘Nota di variazione'. Serve ad indicare che la riga della nota di credito è riferita ad anni precedenti all'anno del documento, per il calcolo del relativo campo dell'elenco clienti/fornitori;

**Data rif. nota var.**: il campo è attivo solo per registrazioni con tipo documento che prevede il flag ‘Nota di variazione'. Serve ad indicare la data di riferimento della nota di variazione;

**Divisione**: il campo è visibile solo se la causale prevede la gestione delle divisioni. In questo caso sarà possibile suddividere la stessa registrazione IVA su più divisioni aziendali.

 Annotazioni ulteriori:

- non è possibile salvare righe IVA con imponibile 0 a meno che la causale contabile non lo consenta (flag ‘consenti sottoconti con valore 0');

- gli arrotondamenti dell'IVA sono gestiti riga per riga, mentre la normativa prescrive che il calcolo sia effettuato su un imponibile che raggruppa tutte le righe con stessa aliquota IVA: è possibile, quindi, che ci sia una differenza dovuta unicamente alla gestione arrotondamenti (il discorso vale per l'inserimento manuale di una registrazione contabile: le contabilizzazioni automatiche da acquisti e dalle vendite effettuano già il calcolo corretto) rispetto al documento in registrazione. Una volta rilevata la differenza le soluzioni sono: 1) forzare manualmente una riga IVA 2) premere il pulsante di ricalcolo imposta che si trova nella testata e far allineare automaticamente dall'applicativo l'ultima riga di ogni aliquota presente.

 

La seconda griglia della scheda ‘Registrazione' è relativa alla sezione **Libro giornale**:

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

 

ogni registrazione di contabilità generale deve obbligatoriamente avere righe in questa sezione per poter essere salvata. In caso di registrazioni IVA questa parte viene calcolata, sulla base della logica dei tipi importo, secondo i dati caricati nelle righe della precedente parte IVA; in caso di registrazioni di pagamento/incasso, invece, gli importi dipendono dagli importi dei pagamenti caricati nella scheda ‘Pagamenti' stessa; negli altri casi, invece, le righe e gli importi saranno gestiti in generale manualmente dall'utente, tenendo conto che:

- la causale può proporre una lista di sottoconti preimpostati (es.: causali delle paghe dipendenti): l'utente dovrà in questo caso entrare riga per riga a dare semplicemente gli importi nella sezione corretta (attenzione: i segni impostati nella causale NON vincolano l'inserimento dell'utente alla medesima sezione). Al momento del salvataggio, se la causale non lo autorizza, i sottoconti non valorizzati saranno cancellati automaticamente;

- in caso di registrazione semplice ‘dare/avere' è possibile codificare una causale specifica che preveda già i sottoconti da utilizzare con il tipo importo ‘Tot. Doc./Registrazione' per far si che l'utente scriva semplicemente l'importo nei campi dei totali di testata e la procedura li metta in dare/avere secondo la causale;

- ogni nuovo inserimento manuale delle righe andrà a coprire l'eventuale sbilancio presente nella registrazione: si ricorda che le registrazioni sbilanciate non possono essere salvate, se non abilitando la causale.

 Ulteriori campi disponibili:

**Valuta**: può prevedere i dettagli della valuta (data cambio, valore cambio e importo valuta): l'importo valuta va caricato sempre in valore assoluto (il segno dare/avere nella divisa della società definisce anche il suo segno); i campi in valuta e nella divisa della società possono essere svincolati tra loro non ricalcolando gli  importi ai messaggi di conferma che sono eseguiti in modifica degli stessi;

**Da data competenza/A data competenza**: questo range di date, come detto già per la sezione IVA, è fondamentale per la gestione delle scritture di assestamento sia per i bilanci infrannuali che per il bilancio contabile. Si rimanda alle note specifiche inserite sopra;

**Divisione**: può essere presente se impostato in causale, può servire per suddividere la stessa registrazione su più divisioni;

**Descrizione dettaglio** (ne è consigliato l'inserimento di default su tutte): può essere presente se impostato in causale, anche questo può essere in parte gestito automaticamente in causale con le note (1) – (2) … ecc come per la descrizione generale. Di particolare interesse la gestione dei codici (8)-(9) relativamente alle righe clienti/fornitori di chiusura partite contabili;

**Data valuta banca**: Il campo può essere automatizzato rispetto al numero di giorni impostato, su ogni anagrafica banche, per ogni causale contabile che le riguarda;

**Num. riga**: può tornare utile per registrazioni particolarmente lunghe (es. paghe) per mantenere in ordine di inserimento i vari sottoconti;

**Rif. manuale partite**: può essere presente, se impostato in causale, può servire per legare manualmente righe di contabilità senza passare per la gestione a partite aperte;

**Sottoconto di contropartita**: può essere presente, se impostato in causale, ne è sconsigliato l'uso manuale. La gestione automatica in registrazioni IVA prevede per le righe clienti/fornitori di assegnare il sottoconto di costo/ricavo  di importo maggiore, mentre per le righe di costo/ricavo/IVA la contropartita sarà il sottoconto cliente/fornitore.

 

Ulteriori annotazioni: 

l'utente può procedere a forzare manualmente le righe di libro giornale: normalmente si consiglia di allineare i dati a partire direttamente dall'IVA. Eventuali forzature possono essere resettate premendo il pulsante di ricalcolo libro giornale.

Nella causale contabile, in particolare per tutte le causali IVA, per la riga con il ‘Tot. Doc./registrazione' si inserisce il conto generico dei clienti/fornitori, che sarà sostituito di volta in volta con il sottoconto intestatario della registrazione: questa sostituzione sarà effettuata solo se nei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)**, sezione lista conti clienti/fornitori, viene autorizzata la tipologia di sottoconto relativa.






