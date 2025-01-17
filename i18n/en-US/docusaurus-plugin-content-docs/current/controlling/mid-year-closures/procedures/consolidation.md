---
title: Consolidamento
sidebar_position: 1
---

La procedura consente innanzi tutto di legare le chiusure infrannuali delle varie società presenti nel database, al fine di creare un **bilancio consolidato di gruppo** da stampare o valorizzare in un riclassificato di bilancio, ma andrà anche a creare una registrazione di consolidamento nella quale **si andranno ad elidere i movimenti** economici **intercompany** e i crediti e debiti intercompany.

Nella testata della maschera è possibile filtrare il range di date delle chiusure da considerare ma anche impostare, opzionalmente, la società capogruppo d'interesse: in questo modo nella griglia della maschera saranno visualizzate le società che non hanno impostato una società capogruppo o quelle che fanno capo alla capogruppo selezionata; per ogni società, poi, sarà visualizzata l'ultima chiusura conti creata all'interno del range di filtro impostatato (E' possibile selezionare una chiusura infrannuale differente dall'ultima proposta). Il flag ‘Sel.' andrà a individuare su quali eseguire l'operazione di consolidamento, mentre nella colonna 'Cambio' è possibile impostare un cambio specifico da utilizzare per la conversione dei saldi provenienti da società con divisa differente da quelle della capogruppo.

Al di sotto della griglia si andranno a inserire alcuni parametri da utilizzare: la descrizione da attribuire al consolidamento, una causale di registrazione, l'utente dell'operazione (proposto già come l'utente attivo) e infine un flag di conversione dei codici di sottoconto su quelli della società capogruppo.

All'interno della tabella società, riga per riga, è possibile associare un'anagrafica: da questa anagrafica si andranno a individuare i sottoconti clienti/fornitori del gruppo (ad es. nella società X si andrà a vedere se l'anagrafica legata alla società Y è codificata come cliente e/o fornitore). Dalle registrazioni intestate a questi sottoconti valorizzate nelle chiusure selezionate, si andranno a inserire con segno inverso i costi/ricavi nella nuova registrazione; per gli stessi sottoconti si andranno a verificare le partite aperte, al momento del consolidamento, e si andranno a stornare i saldi anche di questi.

:::tip Nota
Nel piano dei conti delle società che hanno in tabella una società capogruppo, sono visibili i campi per assegnare i codici di conto/sottoconto della capogruppo.
:::

## Procedura

:::important[]
Procedura passo passo di attivazione ed esecuzione (supponiamo due aziende)

- Nella tabella [**società**](/docs/configurations/tables/general-settings/company#dettaglio-anagrafica-societa) di ognuna delle aziende in questione compilare il campo ***Anagrafica associata*** per collegare un Contatto che contraddistingua l'azienda stessa nel consolidamento, ad esempio se l'azienda si chiama Alfa, nella sua tabella società colleghiamo un contatto (precedentemente creato) che si chiama ad es. "Alfa Spa". 
- Nel piano conti di ognuna delle società sarà stato creato il sottoconto (attraverso la gestione **dati contabili** dell'anagrafica) di tipo cliente o fornitore dell'altra azienda del gruppo e saranno stati registrati degli scambi incrociati, ad esempio acquisto da parte dell'azienda 1 e vendita da parte dell'azienda 2 (ognuno dal suo punto di vista). 
- Ognuna delle aziende lancia una chiusura conti infrannuale per il medesimo periodo 
- Nella procedura *Consolidamento* selezionerò le due chiusure delle due società di cui generare le scritture di rettifica per consolidamento che vanno a neutralizzare costi e ricavi e crediti e debiti reciproci aggregando invece i movimenti verso l'esterno
:::

## Precedenti

Dalla scheda precedenti è possibile procedere alla cancellazione delle procedure di consolidamento eseguite.