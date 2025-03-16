---
title: Nuova chiusura automatica
sidebar_position: 2
---

La procedura di Chiusura automatica conti gestisce la chiusura di bilancio e la successiva riapertura: si tratta del solo movimento contabile, senza alcuna influenza dal punto di vista dei partitari.

La form si compone di una serie di tab e di un'area di testata comune in cui inserire i dati principali quali la data della chiusura e la descrizione.

## Dati obbligatori

Una volta lanciata la nuova chiusura, all'apertura della form vengono proposti in automatico la data di chiusura (data odierna) ed il numero di versione (progressivo), campi comunque editabili.

E' necessario inserire una descrizione e **compilare i campi obbligatori presenti nella Tab Parametri prima di procedere a Salvare** la chiusura.

Il salvataggio è necessario per abilitare i comandi presenti nella ribbon bar per l'elaborazione del calcolo, **Ripresa valori sottoconti**, e la contabilizzazione, **Crea registrazione per la chiusura dei conti.**

### Parametri

Nel tab ‘parametri' è necessario inserire: 

- dati per filtrare i movimenti contabili che saranno oggetto di chiusura dei conti; le **date registrazione e competenza** individuano quali registrazioni riportare nel saldo contabile: in particolare le date di competenza saranno relative al periodo di bilancio (1/1/….-31/12/….), mentre il campo ‘a data registrazione' potrebbe slittare nell'esercizio successivo per ricomprendere le scritture di rettifica:** si consiglia più semplicemente di non impostare il filtro per date registrazione**.

- i codici di sottoconto, causale da utilizzare e data di registrazione e di competenza contabile delle scritture di chiusura del libro giornale; tali dati (tranne le date di registrazione) vengono riportati automaticamente se inseriti all'interno dei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)** (tab ‘Conti');

- (opzionale) la scelta di gestire contestualmente anche la riapertura dei conti anziché gestirla separatamente con **[l'apposito comando](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new)**. 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab/image01.png)

**Anno contabile**: richiama il corrispondente anno dei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)**, serve per la gestione della riapertura delle scritture di assestamento, da attivare alla base della maschera con il flag **Giroconto scritture di assestamento**: si tratta di gestire, in coda alla riapertura conti, i movimenti di riattribuzione dei risconti e dei ratei (a patto che questi siano già stati elaborati con la procedura **[Scritture di assestamento](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**) ai costi/ricavi relativi (i risconti saranno registrati alla stessa data dell'apertura conti, i ratei invece alla data della registrazione del documento d'origine).

Flag **Gestione saldo** (di chiusura e riapertura) **per divisa di movimentazione**: se attivato il programma inserisce una riga per ogni divisa di movimentazione del sottoconto specifico, mantenendo chiaramente il totale in divisa della società corretto. Tale possibilità si rende necessaria per garantire la correttezza dei saldi iniziali della stampa ‘Estratto conto in valuta'.
 
ATTENZIONE: Prima di avviare il calcolo è bene verificare le impostazioni della tabella **[Tipi conto](/docs/configurations/tables/finance/account-types)**: 

in particolare i tipi conto di anagrafica cliente-fornitore-agente-banche oltre ad avere un flag sulle relative colonne debbono averne un secondo in una delle prime due colonne, relative all'attivo e al passivo patrimoniale. 

E' quindi possibile dare il via alla **Ripresa valori sottoconti** con il pulsante relativo, in modo da far calcolare al programma il saldo di ogni sottoconto e di presentare nelle tab Profitti e perdite e Patrimoniale i dati relativi. Una volta sicuri dei risultati è possibile passare all'ultima fase della procedura: rientrando nella scheda parametri, infatti, possiamo cliccare il pulsante Crea registrazione per la chiusura conti, che creerà le registrazioni contabili relative e inserirà il flag su **Contabilizzata**.

:::note
Se il flag **Giroconto scritture di assestamento** è stato attivato, quando si lancia il comando **Ripresa valori sottoconti**, diventerà visibile una ulteriore tab **[Riapertura scritture di assestamento](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**.
:::
 
#### Pulsanti specifici  
> **Salva**: permette di salvare la testata della chiusura conti, attivabile dopo aver inserito la descrizione.  
> **Ripresa valori sottoconti**: permette di far calcolare al programma il saldo di ogni sottoconto e di presentare nelle schede ‘profitti e perdite' e ‘patrimoniale' i dati relativi.  
> **Crea registrazione per la chiusura conti**: permette di creare la registrazione di chiusura conti.  
> **Ripristina contabilizzazione**: permette di annullare  ripristinando la contabilizzazione della chiusura conti.  

### Profitti e Perdite

Nel tab Profitti e Perdite verranno epilogati i componenti di reddito negativi e positivi con evidenza del risultato d'esercizio e la possibilità di filtrare i conti presenti nelle sezioni Componenti positivi di reddito e Componenti negativi di reddito tramite i campi Sottoconto costi, Sottoconto ricavi ed i pulsanti di ricerca posti nella ribbon bar (vedere tabella qui sotto).

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/profit-and-loss-tab/image01.png)

#### Pulsanti specifici  
> **Ricerca componenti positivi di reddito sottoconti**: permette di cercare all'interno della chiusura i conti di ricavo desiderati.  
> **Ricerca componenti positivi di reddito sottoconti**: permette di cercare all'interno della chiusura i conti di costo desiderati.  

### Patrimoniale

Nel Tab **Patrimoniale** verranno epilogati i componenti attivi e passivi  con evidenza del risultato d'esercizio e la possibilità di di filtrare (analogamente a quanto previsto per la tab **[Profitti e perdite](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**) i conti presenti nelle due sezioni sottostanti tramite i campi appositi ed i pulsanti di ricerca posti nella ribbon bar (vedere tabella qui sotto).

#### Pulsanti specifici  
> **Ricerca patrimoniale attivo**: permette di cercare all'interno della chiusura i conti attivi desiderati.  
> **Ricerca patrimoniale passivo**: permette di cercare all'interno della chiusura i conti passivi desiderati.  

### Registrazione

Le registrazioni (visualizzabili con un doppio click) sono in particolare le seguenti: 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image01.png)

#### Nella prima griglia  

- la prima registrazione chiude i ricavi, 

- la seconda i costi, 

- la terza rileva l'utile o la perdita chiudendo il conto economico, 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image02.png)

#### Nella seconda griglia  

- la quarta chiude il passivo 

- la quinta l'attivo (comprensivi dei conti di utile o perdita);  

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image03.png)

#### Nella terza griglia  

sono riportate le tre registrazioni dell'apertura: 

- la prima apre il passivo, 

- la seconda l'attivo, 

- la terza gira il conto utile/perdita d'esercizio all'utile/perdita dell'esercizio precedente.

:::note Nota

Eventuali errori che fossero rilevati in seguito possono essere risolti in questi modi: 

- è possibile cancellare direttamente la chiusura conti effettuata e, alla richiesta del programma, cancellare anche le registrazioni ad essa collegate al fine di ripartire da zero nella procedura; 

- in alternativa è presente un pulsante di *rollback*  **Ripristina contabilizzazione** della contabilizzazione (nella tab Parametri). 
:::

Esistono specifici permessi utente per la contabilizzazione e l'annullamento della stessa. 

:::danger Attenzione  
La chiusura conti bloccherà le registrazioni comprese nel range di date impostato e, inoltre, non sarà più possibile inserire registrazioni all'interno di quel range di date.

I **conti d'ordine** non sono mai oggetto di chiusura e riapertura conti in questa procedura.
::: 

### Riapertura Scriture di Assestamento

In questa maschera è visibile il risultato dell'opzione di giroconto automatico delle operazioni di assestamento in coda alle registrazioni di riapertura conti. Con questa opzione l'applicativo procederà a rilevare, alla data di riapertura, lo storno delle rettifiche **mentre opererà il giroconto delle integrazioni alla data della registrazione d'origine** dell'assestamento stesso.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image01.png)

 Facendo doppio clic sulle righe è possibile visualizzare il dettaglio delle registrazioni eseguite.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image02.png)

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image03.png)

:::tip Info
Generare la scrittura di riapertura delle scritture di integrazione (ratei attivi e passivi) alla data della scrittura di origine della rettifica è necessario, rispetto ad esempio a riaprire semplicemente all' 1/1 , al fine di gestire correttamente anche i calcoli delle chiusure infrannuali possibili con Fluentis.

Si pensi ad esempio di aver registrato il 15/04/2023 un costo che ha competenza 01/11/2022 31/03/2023, quindi verrà registrato il rateo passivo al 31/12 di 2 mesi. Registrando la sua registrazione opposta (lo storno) in data 01/01 dipenderebbe molto da come sono filtrati e gestisti ratei/risconti per la chiusura infrannuale, si rischia in sostanza di avere solo lo storno costi (ovvero la riapertura del rateo) e non la fattura del costo nel bilancio infrannuale. 

Registrando invece lo storno nello stesso giorno della fattura, qualsiasi sia il filtraggio successivo per l'estrazione dei saldi della chiusura infrannuale le due registrazioni "viaggeranno assieme" garantendo l'effetto che ci si attende (in questo caso un impatto neutro sul bilancio essendo il costo già stato anticipato all'esercizio precedente)
:::