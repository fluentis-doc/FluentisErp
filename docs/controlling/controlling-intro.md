---
title: Controlling
sidebar_position: 1
---

L'area dedicata al controlling di **Fluentis ERP** contempla tutte le funzionalità necessarie alla preparazione di simulazioni di bilancio infrannuale, la gestione delle riclassificazioni di bilancio su [*Modelli*](/docs/controlling/reclassifications/create-reclassification-model) liberamente configurabili, così come l'inserimento e manutenzione di tutte le registrazioni gestionali necessarie per la contabilità direzionale per centro di costo.

Sono presenti inoltre procedure di consolidamento di bilancio dedicate alle installazioni multisocietarie, così come la possibilità di effettuare comparazioni sui dati storici elaborati, le previsioni di vendita e il calcolo del costo prodotto, i budget per centro aziendale.

La gestione del controlling è naturalmente integrata con tutte le aree di **Fluentis ERP**: dalla ripresa dei documenti in transito all'interno del ciclo passivo ed attivo, alla valorizzazione dei dati quantitativi (*tempi* e *quantità*) inseriti nelle segnalazioni di produzione, così come la valorizzazione dei costi di materiali e lavorazioni esterne fino alla rilevazione delle ore e i costi di attività e interventi dell'area progetti.

L'utente può configurare liberamente in ogni momento, seguendo l'evoluzione delle necessità aziendali, la struttura dei [*Centri aziendali*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) da valorizzare nella contabilità analitica, potendo contare sulla loro struttura [*multidimensionale*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) e multilivello, ma anche tutte le logiche dei [*cost driver*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) di ribaltamento dati tra centri.

La flessibilità del modulo consente la ripresa dei dati dalle varie aree di **Fluentis ERP** ma anche il caricamento da fogli excel esterni oppure l'inserimento manuale.

## Moduli dell'area
### [***Chiusure infrannuali***](/docs/controlling/mid-year-closures/general-overview)
    Permette di simulare una chiusura di bilancio infrannuale extracontabile, che resterà memorizzata a sistema, sfruttando una serie di procedure automatiche che velocizzano i passaggi:
    - [**Crea chiusura conti infrannuale**](/docs/controlling/mid-year-closures/create-mid-year-closures-intro): crea il set di dati iniziale di periodo
    - [**Scritture di rettifica**](/docs/controlling/mid-year-closures/procedures/adjusting-entry): gestisce i risconti
    - [**Scritture di integrazione**](/docs/controlling/mid-year-closures/procedures/integration-records): gestisce i ratei
    - [**Valorizzazione area acquisti e vendite**](/docs/controlling/mid-year-closures/procedures/purchase-and-sales-area-valorization): gestisce le fatture da ricevere/emettere dai documenti in transito nel ciclo attivo/passivo
    - [**Contabilizzazione rimanenze**](/docs/controlling/mid-year-closures/procedures/warehouse-oddments): rileva le rimanenze iniziali/finali
    - [**Ripresa ammortamento cespiti**](/docs/controlling/mid-year-closures/procedures/fixed-assets-depreciation-retrieve): crea gli ammortamenti
    - [**Consolidamento**](/docs/controlling/mid-year-closures/procedures/consolidation): per creare un consolidato di bilancio
    - [**Scritture extracontabili di chiusura**](/docs/controlling/mid-year-closures/search-off-balance-sheet-records): per gestioni manuali

### [***Conbatilità Gestionale***](/docs/controlling/controlling-recordings/controlling_recording_intro)
    In questo modulo abbiamo tutte le procedure del vero e proprio Controlling, basato sulle registrazioni analitiche recepite dalla chiusura infrannuale e dalle registrazioni a valore e quantità che si recuperano dall'area produttiva o dai progetti:
    - **Prima nota**: una prima nota di entry di dati fisici o di registrazioni dell'area di analisi
        - [*Registrazione movimenti fisici*](/docs/controlling/controlling-recordings/first-note/recording-physical-movements): valorizzata da produzione/progetto o manualmente
        - [*Registrazioni extracontabili di area*](/docs/controlling/controlling-recordings/first-note/extra-accounting-records-of-area): valorizzate in automatico da ammortamenti o rimanenze, piuttosto che manuali
        - [*Tariffe standard dei centri*](/docs/controlling/controlling-recordings/first-note/corporate-centers-std-rates): a gestione manuale

    - **Storico gestionale**
    In questa sezione abbiamo tutti gli storici delle varie base dati elaborate
        - [*Storico flusso fisico*](/docs/controlling/controlling-recordings/history/physical-flux-history): la base dati storica dei movimenti fisici
        - [*Storico ammortamenti*](/docs/controlling/controlling-recordings/history/depreciation-history): la base dati storica degli ammortamenti elaborati
        - [*Storico registrazioni gestionali*](/docs/controlling/controlling-recordings/history/recording-history): la base dati mensilizzata e rielaborata da tutti i driver
        - [*Storico indici*](/docs/controlling/controlling-recordings/history/index-history): la base dati storica degli indici di costo elaborati sui vari centri

    - **Procedure**
    In questa sezione troviamo le varie procedure di ripresa e elaborazione dati
        - [*Ripresa dati da produzione*](/docs/controlling/controlling-recordings/procedure/recovery-of-production-data): per riprendere tempi e costi dai progetti, tempi dalla produzione, costi dalle lavorazioni interne/esterne
        - [*Ripresa dati da fatture di vendita*](/docs/controlling/controlling-recordings/procedure/recovery-of-sales-invoice): per riprendere provvigioni e sconti applicati
        - [*Elaborazione periodi*](/docs/controlling/controlling-recordings/procedure/period-processing): per elaborare dati fisici, ammortamenti, ed elaborare la base dati applicando driver
        - [*Aggiornamento tariffe di produzione*](/docs/controlling/controlling-recordings/procedure/alignment-production-indexes): per allineare le tariffe dei centri produttivi
        - [*Consolidamento master*](/docs/controlling/controlling-recordings/procedure/master-consolidation): per creare un controlling unificato di gruppo

    - [**Storico di progetto**](/docs/controlling/controlling-recordings/project-history/project-history-intro)
    In questa sezione abbiamo tutti gli storici delle varie base dati elaborate per chi lavora a progetto/commessa
        - [*Storico movimenti fisici di commessa*](/docs/controlling/controlling-recordings/project-history/project-physical-history): la base dati storica dei tempi e quantità lavorate su progetto/commessa
        - [*Registrazioni gestionali*](/docs/controlling/controlling-recordings/project-history/recording-project-history): la base dati storica dei costi e ricavi diretti di progetto
        - [*Valori da produzione*](/docs/controlling/controlling-recordings/project-history/production-values): materiali e lavorazioni direttamente utilizzati su progetto/commessa
        - [*Consolidato di commessa*](/docs/controlling/controlling-recordings/project-history/project-consolidation): la base dati risultante con costi diretti, indiretti e driver di ribaltamento di costi generali

### [***Budgeting***](/docs/controlling/budget/general-overview)
E' il modulo dove gestire i dati dei Budget per centro di costo
    - [**Registrazioni extracontabili di budget**](/docs/controlling/budget/offbalance-records-search): le registrazioni di partenza per l'anno, magari importate da excel

    - [**Registrazioni di budget**](/docs/controlling/budget/budgeting-records-search): le registrazioni del budget elaborato e mensilizzato sui singoli periodi

### [***Reporting***](/docs/controlling/reclassifications/reclassification-overview)
E' il modulo dedicato alla preparazione e all'elaborazione dei modelli di rappresentazione dei dati dell'area, sia come dati contabili che di analitica o gestionale
    - [**Modelli di riclassificazione**](/docs/controlling/reclassifications/create-reclassification-model): per definire liberamente la struttura delle riclassificazioni desiderate, applicando conti e centri specifici della realtà aziendale

    - [**Riclassificazioni**](/docs/controlling/reclassifications/reclassifications-management): sono i risultati dell'applicazione dei dati sui vari modelli, riclassificati che restano storicizzati per analisi successive

    - [**Comparazioni**](/docs/controlling/reclassifications/comparations): la procedura che consente di confrontare liberamente più riclassificati o più aree, periodi e dimensioni di analisi della contabilità gestionale

### [***Previsioni di vendita***](/docs/controlling/sales-forecast/sales-forecast-intro)
In questo modulo possiamo creare le previsioni di vendita di anno o periodo, a partire magari dai dati storici dei documenti presenti nell'area vendite per poi rielaborarli

### [***Costo prodotto***](/docs/controlling/cost-calculation/product-cost-intro)
In questo modulo valorizziamo i dati delle distinte basi di prodotto per verificarne la marginalità
