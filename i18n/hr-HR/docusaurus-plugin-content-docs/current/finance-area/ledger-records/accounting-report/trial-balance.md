---
title: Bilancio di Verifica
sidebar_position: 1
---

La stampa del Bilancio di verifica visualizza una lista dei sottoconti con i relativi totali dare/avere e i saldi.

I principali parametri di filtro da gestire prima di lanciare la stampa sono:

 - il range di date di registrazione; di default viene proposto il periodo da inizio anno ad oggi.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image01.png)

- il range di date di competenza **contabile** (da non confondere con il concetto di competenza economica).

 ![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image02.png)

E' possibile filtrare solo alcuni sottoconti riferiti alle anagrafiche clienti (coppia di widget più in alto) e fornitori (seconda coppia di widget)

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image03.png)

Oppure è possibile escludere alcuni tipi conti di anagrafica affinché non vengano visualizzati i dettagli di ogni singolo sottoconto riferito alla tipologia per la quale si attiva il flag.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image04.png)

 

Si possono richiedere tutti i sottoconti, solo quelli movimentati, oppure i movimentati con saldo diverso da zero.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image05.png)

 

Con la descrizione standard del sottoconto oppure utilizzando la **[seconda descrizione](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**.

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image06.png)

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image07.png)

 ![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image08.png)

E' possibile includere anche le registrazioni provvisorie (di default sono attive solo quelle definitive).

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image09.png)

**OPZIONI**:

![](/img/it-it/finance-area/ledger-records/accounting-report/trial-balance/image10.png)

**Divisione**: la combo box permette di selezionare solo una delle divisioni presenti nel data base al fine di elaborare il bilancio solo per quella selezionata, diversamanete, se non vien selezionata una (o più di una tenendo premuto il tasto Ctrl) si otterrà il bilancio dell'intera società in uso. Si ricorda che il concetto di divisione si riferisce ad una unità operativa specifica (alla quale sono riferiti i documenti ed i movimenti contabili) riferita però alla stessa società (quindi allo stresso soggetto giuridico) la quale fiscalmente e legalmente presenta il bilancio ed i dati contabili e fiscali.

**Escludi causale**: tramite la combo box è possibile escludere i movimenti riferiti alla causale contabile selezionata. La possibilità è particolarmente utile quando si desidera ristampare un bilancio relativo ad un periodo per il quale è già intervenuta la chiusura dei conti e pertanto i saldi risultano a zero. Si inserirà allora nel campo in commento la causale utilizzata per la chiusura conti (esempio causale codice BILCH) per visualizzare nuovamente il bilancio con situazione saldi prima della chiusura.

**Apertura**: flag che, se attivato, esclude dall'elaborazione del bilancio i movimenti di apertura conti generati dalla procedura di riapertura conti contestuale alla **[chiusura automatica conti](/docs/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab).**



| Funzione | Significato |
| --- | --- |
| Anteprima | Pulsante per eseguire l'anteprima di stampa. |
| Stampa | Pulsante per eseguire la stampa fisica del documento. |


<iframe width="560" height="315" src="https://www.youtube.com/embed/vQS47gLDe2M" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>



