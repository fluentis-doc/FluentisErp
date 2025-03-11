---
title: Contabilizzazione Effetti
sidebar_position: 1
---

La form si trova in Tesoreria > Portafoglio Effetti > Contabilizzazione > Contabilizzazione effetti

Da questa maschera si procede alla contabilizzazione effetti: la procedura, secondo le impostazioni della causale contabile impostata, chiuderà le partite clienti associate agli effetti selezionati.

:::tip[Nota]
Generalmente si può eseguire questa procedura direttamente eseguendo ***l'acquisizione automatica effetti dalle partite***
dove, abilitando l'apposito flag, si esegue contemporaneamente anche la presente procedura.

**Risulta invece necessario accedere specificamente alla presente form per il ripristino della contabilizzazione effetti**. 
:::

## Come contabilizzare un effetto

1. Utilizza la parte superiore della maschera per filtrare la ricerca degli effetti da contabilizzare.

2. Seleziona dalla griglia centrale gli effetti che desideri contabilizzare 

3. Compila i parametri per la contabilizzazione quali la **Causale di contabilità**, la **data registrazione** e la data competenza.

:::note[Nota]
Questa sezione può essere predefinita all'interno dei [**parametri**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del modulo Portafoglio effetti. 

Il flag di **raggruppamento per conto effetto** significa eseguire una registrazione unica dove saranno presenti tante righe quante sono gli effetti da contabilizzare ed in contropartita il conto associato alla tipologia di effetto (nella **tabella Tipi Effetti**).

Il flag di **gestione provvisoria** andrà a generare registrazioni contabili di tipo provvisorio.

Se la causale contabile prevede il flag di apertura partite e l'effetto è stato creato manualmente senza associare una partita (o il suo importo è superiore all'importo delle partite collegate), allora sarà create una partita cliente in avere da compensare in seguito.

Si ricorda che non sarà possibile contabilizzare effetti creati da fatture stampate quando queste non sono state ancora contabilizzate.
:::

4. Premi il bottone nella ribbon bar **Contabilizzazione effetti**



**Pulsanti specifici**

**Ricerca**: Ricerca la lista degli effetti da contabilizzare.

**Contabilizzazione effetti**: Esegue la contabilizzazione per le righe selezionate.

### Tab Precedenti

Dalla scheda *precedenti* è possibile procedere all'annullamento delle contabilizzazioni eseguite. 

L'annullamento sarà possibile solo se il periodo è ancora modificabile (stampa libro giornale e chiusura conti non eseguite). 

Un doppio click nella sezione delle registrazioni consentirà di visualizzare la registrazione contabile relativa. 

E' presente un Tab di dettaglio di visualizzazione degli errori rilevati nel corso della contabilizzazione.

:::tip[Nota]
Il ripristino della contabilizzazione dell'effetto deve **necessariamente** essere eseguito dalla presente form.

In fase di creazione dell'effetto è possibile, infatti, lanciare contestualmente la sua contabilizzazione, ma NON il contrario. 

Pertanto si dovrà procedere prima ad annullarne la contabilizzazione da qui, e poi si potrà annullare la procedura di creazione, tornando ad una situazione precedente (partita cliente aperta e saldo cliente non ancora stornato).
:::

**Pulsanti specifici**

**Ricerca**: Ricerca la lista delle contabilizzazioni eseguite.

**Rollback contabilizzazione**: Esegue il ripristino delle contabilizzazioni selezionate per tutti i documenti in esse contenuti.

**Rollback effetti**: Esegue il ripristino della registrazione contabile selezionata riferita al singolo effetto. ATTENZIONE: questa modalità è possibile solo se in fase di contabilizzazione non è stata attivata l'opzione per raggruppare per tipo effetto (che genera registrazioni uniche per ogni tipo effetto).





