---
title: Creazione assestamento
sidebar_position: 2
---

Con questa procedura si potranno calcolare e contabilizzare i dati dei **ratei e risconti** relativi alle registrazioni contabili presenti nella base dati: 

si tratta ad esempio delle rettifiche/integrazioni (rispettivamente risconti e ratei) relative ad assicurazioni, affitti, canoni di leasing o assistenza, che hanno la caratteristica di essere relativi ad un periodo a cavallo d'anno. Pertanto per la regola contabile della competenza economica sono soggetti a rettifiche.

## Requisiti per l'utilizzo della procedura

1) Siano stati definiti, nella tabella **[Tipi conto](/docs/configurations/tables/finance/account-types)**, dei tipi conto economici (chiamati ad esempio ‘da rettificare') che abbiano il flag ‘**Servizio**' attivato. 

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image01.png) 

Il calcolo viene effettuato (così come nei bilanci infrannuali) SOLO per i sottoconti per i quali nel piano dei conti è stata assegnato questi tipi conto particolare.

2) Siano stati definiti nei **[parametri di contabilità](/docs/configurations/parameters/finance/accounting-parameters)** i sottoconti standard di rilevazione dei movimenti di rateo/risconto attivo/passivo. 

:::note
Si ricorda che a livello del piano dei conti, sul singolo sottoconto di costo/ricavo possono essere specificati sottoconti di rateo/risconto che saranno utilizzati in via prioritaria per la rilevazione dell'integrazione o rettifica.
:::

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image02.png)

3) Siano stati utilizzati correttamente i range di date per la competenza economica  nei movimenti di contabilità. 

:::note
Si consiglia di impostare i **[parametri di inserimento](/docs/finance-area/ledger-records/records/ledger-record)** utente con l'opzione ‘Nessuna data per tipo conto servizio' al fine di obbligare l'utente a inserire, volta per volta, il range di date economiche valide per il singolo movimento.
:::

## Gestione

### Procedura 

- indicare per quale esercizio contabile si vuole procedere al calcolo e la data di calcolo (di default è proposta la data odierna); 

- indicare la data registrazione/competenza da assegnare alle registrazioni contabili da creare; 

- indicare le causali contabili da utilizzare per la rettifica e l'integrazione. 

L'opzione singola registrazione andrà o meno a cumulare in un'unica registrazione tutte le rettifiche e in un'altra tutte le integrazioni.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image01.png) 

Una volta salvate queste impostazioni si attiverà il pulsante **Calcola**


che andrà a popolare la sezione sottostante con la lista degli assestamenti proposti: all'interno di questi sarà indicata la tipologia di operazione, i riferimenti alla registrazione d'origine, il numero di giorni della rettifica e poi, editabili, l'importo e il sottoconto di rilevazione. 

Nel caso in cui le causali impostate prevedano la gestione cdc/cdp e il movimento d'origine abbia i relativi dati da rettificare/integrare, nella sezione sottostante saranno presenti anche i dettagli dei calcoli relativi.

 

La fase successiva sarà quella di confermare, riga per riga, che l'importo calcolato è corretto e completo attraverso l'imposizione del flag **Controllato**, operazione che attiverà di conseguenza la modificabilità e i relativi flag di controllo anche della sezione sottostante relativa ai cdc/cdp. 

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image04.png)

Tutte le righe con stato *controllato* saranno oggetto della rilevazione in contabilità che sarà eseguita premendo il pulsante di **Contabilizza**. 

L'utente può procedere a creare più contabilizzazioni man mano che vengono definiti i dettagli, così come procedere a ricalcolare la lista per verificare che non siano state aggiunte altre operazioni (tipicamente di integrazione di registrazioni del nuovo esercizio con competenza antecedente) o creare assestamenti nuovi per questi. È comunque presente la **[scheda di ripristino](/docs/finance-area/ledger-records/records/adjustment-record/adjustment-creation)** della situazione precedente.

:::note
Saranno contabilizzate tutte le righe con flag **Controllato** attivo.
:::
 
Nel caso in cui siano state effettuate modifiche alle registrazioni in contabilità dopo il lancio del calcolo potrebbe essere utile utilizzare il pulsante **Verifica calcolo assestamento**:  
questo pulsante andrà ad effettuare un ricalcolo riga per riga, mostrando eventuali differenze rispetto a quanto già proposto nella griglia (in particolare campi **Assestamento Dare / Avere** e **Nuovo assestamento Dare / avere**), con un pulsante per allineare le differenze o meno, che andrà anche a cancellare righe di rettifica/integrazione collegate a movimenti contabili non più esistenti (Non sarà possibile contabilizzare se presenti righe con riferimenti a movimenti non esistenti ed in tal caso sarà dunque necessario passare per questa maschera e cancellarli).

:::danger Attenzione
Nel caso in cui gli assestamenti siano già stati contabilizzati non è previsto alcun blocco alla modifica del movimento di origine che ha portato alla rettifica, l'unico blocco è alla cancellazione della registrazione che non è consentita. Si raccomanda quindi la massima attenzione nell'entrare in modifica di registrazioni che siano coinvolte nelle operazioni di assestamento di fine anno.
:::

:::note Nota relativa alla procedura di **[Chiusura automatica conti](/docs/finance-area/ledger-records/records/automatic-account-closing/new-account-closing)**: è presente un'opzione di giroconto automatico delle operazioni di assestamento in coda alle registrazioni di riapertura conti. Con questa opzione l'applicativo procederà a rilevare, alla data di riapertura, lo storno delle rettifiche mentre opererà il giroconto delle integrazioni alla data della registrazione d'origine dell'assestamento stesso.
:::

**FLAG Singola registrazione:** con questo flag attivo la contabilizzazione degli assestamenti avviene con un'unica registrazione contabile (unico numero) anzichè con tante registrazioni quante sono le rettifiche da eseguire.
In fase di riapertura conti anche il giroconto per riapertura dei ratei e risconti seguirà la medesima impostazione.

### GESTIONE FATTURE DA RICEVERE

In questa sezione illustriamo come gestire in modo automatizzato la particolare situazione delle *Fatture da ricevere*, ovvero lo stanziamento da effettuare a fine anno quando la registrazione di un costo o di un ricavo di competenza avverrà solo nell'esercizio successivo.

In sintesi possiamo vedere, nelle immagini seguenti, come il riconoscimento di questa situazione avvenga automaticamente da parte del software e venga utilizzato il conto apposito previsto nei parametri generali di contabilità.

E' possibile inoltre personalizzare il conto da utilizzare in relazione ad ogni singolo fornitore o cliente.

Allo stesso modo è possibile personalizzare il conto da utilizzare per gli altri ratei e risconti attivi e passivi impostando il conto particolare in corrispondenza del conto del costo o ricavo direttamente nel piano dei conti.

#### Situazione standard SENZA IMPOSTAZIONI SPECIFICHE NEL FORNITORE

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image08.png)

E NEMMENO NEL CONTO DI COSTO

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image09.png)

LE IMPOSTAZIONI SONO SOLO A LIVELLO DI PARAMETRI DI CONTABILITA’

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image10.png)

**CASO 1 registrazione nell’anno x e competenza totalmente in x+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image11.png)

**CASO 2: registrazione nell’anno y e competenza tutta nell’anno y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image12.png)

**CASO 3: registrazione anno x e competenza a cavallo tra x e x+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**CASO 4: registrazioni anno y con competenza a cavallo tra y e y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**RISULTATI**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image15.png)


La riga 1 è la rettifica del caso 1, dove tutto il costo registrato nell’anno X è di competenza dell’esercizio successivo X+1: Fluentis utilizza il conto Risconti attivi definito nei parametri di contabilità generale

La riga 2 è l’integrazione del caso 2, dove tutto il costo registrato nell’anno Y è di competenza dell’esercizio precedente Y-1: Fluentis utilizza il conto delle ‘Fatture da ricevere’ definito nei parametri di contabilità generale

La riga 3 è la rettifica del caso 3, dove il costo registrato nell’anno X è solo in parte di competenza dell’esercizio successivo X+1: Fluentis utilizza il conto Risconti attivi definito nei parametri di contabilità generale

La riga 4 è l’integrazione del caso 4, dove il costo registrato nell’anno Y è solo in parte di competenza dell’esercizio precedente Y-1: Fluentis utilizza il conto Ratei passivi definito nei parametri di contabilità generale

**CON IMPOSTAZIONI SPECIFICHE PER FORNITORE/CONTO CONTABILE**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image16.png)


![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image17.png)

**RISULTATO**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image18.png)

Al posto dei sottoconti di default si utilizzano i sottoconti custom presi dalla riga di costo o dal fornitore

## Ripristino

E' presente una scheda finale ‘**Ripristino**' per visualizzare in anteprima le registrazioni effettuate e per annullarle attraverso l'apposito pulsante.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/restore-tab/image01.png)

E' possibile utilizzare i campi di filtro per conto / sottoconto ed i flag adiacenti per selezionare solo scritture di integrazione o solo scritture di rettifica prima di procedere al ripristino.