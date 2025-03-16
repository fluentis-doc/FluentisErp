---
title: Nuova
sidebar_position: 2
---

La procedura Apertura automatica conti si può utilizzare, in alternativa ad una scrittura di prima nota da inserire tramite il comando **[Creazione Registrazione contabile](/docs/finance-area/ledger-records/records/create-ledger-record/header-and-total-movements-description),**  **per rilevare i saldi di inizio attività.**

**A partire dalla prima chiusura di bilancio, le successive aperture conti potranno essere gestite direttamente dalla procedura di chiusura.**

 

NOTA:

Con questa procedura si registrano unicamente i saldi contabili di apertura, non l'apertura delle partite contabili relative.

 





**Data apertura**: è la **data dell'elaborazione**, non ha alcun collegamento con la data di registrazione dell'operazione che si andrà a indicare nel campo apposito alla base della finestra;

**Numero apertura**: è un numero progressivo gestito automaticamente;

**Descrizione**: consente all'utente di identificare l'operazione, così come le annotazioni;

**Conto** e **Tipo conto**: sono filtri di ricerca all'interno della lista del piano dei conti;

**Data registrazione** e **Data competenza**: campi obbligatori da assegnare alla registrazione di apertura;

**Numero**: sarà assegnato una volta operata la contabilizzazione;

**Causale di apertura conti** e **Descrizione del movimento**: da assegnare per il libro giornale.

Una volta impostati questi dati obbligatori sarà possibile salvare le impostazioni e attivare tutta la lista dei sottoconti contabili: la fase successiva sarà quindi quella di operare la memorizzazione sottoconto per sottoconto del saldo dare o avere di apertura conti, con l'eventuale importo di apertura in divisa.

![](/img/it-it/finance-area/ledger-records/records/automatic-accounts-opening/new/image01.png)

 

Esempio (non realistico)

 

Solo una volta che il totale dare e il totale avere corrispondono sarà possibile procedere alla rilevazione in contabilità della ripresa saldi (in caso contrario premendo il comando di contabilizzazione sarà visualizzato un messaggio di errore).

 

CONSIGLI OPERATIVI:

l'utente può riaprire più volte la stessa elaborazione di apertura conti per completare tutti i dati (l'operazione potrebbe essere anche lunga e svolgersi in più giorni) prima di procedere, oppure si potrebbero creare tante aperture conti differenti, magari differenziando una per l'attivo, l'altra per il passivo, o per i clienti/fornitori ecc.

Nella maschera non è prevista una procedura di rollback: si potrà semplicemente cancellare l'apertura e l'applicativo chiederà conferma della cancellazione della relativa registrazione di contabilità.

Nel caso in cui siano operate modifiche al dettaglio dell'apertura conti DOPO la sua contabilizzazione, è possibile premere nuovamente il comando Crea registrazione di apertura (nella ribbon bar) per aggiornare la precedente scrittura contabile. Apparirà un messaggio di avviso e conferma dell'aggiornamento della scrittura.



| Funzione | Significato |
| --- | --- |
| Salva | Pulsante per salvare la testata dell'apertura conti, attivabile dopo aver inserito la descrizione e la causale contabile. |
| Cerca | Pulsante per cercare, la lista dei conti, che si intendono inserire nell'apertura, attraverso i campi del sottoconto e del tipo conto. |
| Crea registrazione apertura | Pulsante per creare la registrazione di apertura conti. |
| Apre la registrazione per l'apertura conti | Pulsante che apre la registrazione di apertura. |
| Elimina dettaglio | Elimina il contenuto dei campi riferiti alla riga selezionata. ATTENZIONE: le righe per quanto riguarda il contenuto dei campi relativi al conto non possono essere eliminate, se lasciate in bianco non saranno incluse nella scrittura contabile di apertura. |






