---
title: Controlling Fluentis ERP
description: Scopri il modulo Controlling di Fluentis ERP - chiusure infrannuali, budget, riclassificazioni, controllo di gestione e integrazione con produzione, vendite e acquisti.
sidebar_position: 1
keywords: [Controlling ERP, Fluentis ERP, Contabilità analitica, Budget, Riclassificazioni bilancio, Centro di costo, Reporting gestionale]
schema: TechArticle
tags:
  - Controlling
  - Fluentis ERP
last_update:
  author: Fluentis Documentation Team
  date: 2025-10-29
---

# Controlling Fluentis ERP

Il modulo **Controlling di Fluentis ERP** consente alle aziende di monitorare e gestire la preparazione di simulazioni di bilancio infrannuale, la gestione delle riclassificazioni di bilancio su [*Modelli*](/docs/controlling/reclassifications/create-reclassification-model) liberamente configurabili, così come l'inserimento e manutenzione di tutte le registrazioni gestionali necessarie per la contabilità direzionale per centro di costo.

Sono presenti inoltre procedure di consolidamento di bilancio dedicate alle installazioni multisocietarie, così come la possibilità di effettuare comparazioni sui dati storici elaborati, le previsioni di vendita e il calcolo del costo prodotto, i budget per centro aziendale.

La gestione del controlling è naturalmente integrata con tutte le aree di **Fluentis ERP**: dalla ripresa dei documenti in transito all'interno del ciclo passivo ed attivo, alla valorizzazione dei dati quantitativi (*tempi* e *quantità*) inseriti nelle segnalazioni di produzione, così come la valorizzazione dei costi di materiali e lavorazioni esterne fino alla rilevazione delle ore e i costi di attività e interventi dell'area progetti.

L'utente può configurare liberamente in ogni momento, seguendo l'evoluzione delle necessità aziendali, la struttura dei [*Centri aziendali*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) da valorizzare nella contabilità analitica, potendo contare sulla loro struttura [*multidimensionale*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) e multilivello, ma anche tutte le logiche dei [*cost driver*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) di ribaltamento dati tra centri.

La flessibilità del modulo consente la ripresa dei dati dalle varie aree di **Fluentis ERP** ma anche il caricamento da fogli excel esterni oppure l'inserimento manuale.

## Moduli Controlling ERP

Le principali aree funzionali sono:

- **[Chiusure infrannuali](/docs/controlling/mid-year-closures/general-overview)**: simulazione extracontabile del bilancio, gestione ratei, risconti, rimanenze e consolidamento.
- **[Controllo di gestione](/docs/controlling/controlling-recordings/controlling-recording-intro)**: registrazione movimenti fisici, storici gestionali, procedure periodiche e storico di progetto.
- **[Reporting e Riclassificazioni](/docs/controlling/reclassifications/reclassification-overview)**: modelli di riclassificazione, comparazioni e analisi dei dati.
- **[Budgeting](/docs/controlling/budget/general-overview)**: registrazioni di budget mensilizzate, gestione delle registrazioni extracontabili.
- **[Costo prodotto](/docs/controlling/cost-calculation/product-cost-intro)**: valorizzazione delle distinte basi di prodotto.
- **[Previsioni di vendita](/docs/controlling/sales-forecast/sales-forecast-intro)**: elaborazione previsioni basate sui dati storici di vendita.

Di seguito sono descritti tutti i moduli principali con link e sintesi dei contenuti:

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/mid-year-closures/general-overview">Chiusure infrannuali</Link>
        <p>Permette di simulare una chiusura di bilancio infrannuale extracontabile, che resterà memorizzata a sistema, sfruttando una serie di procedure automatiche che velocizzano i passaggi:</p>
            <p><Link to="/docs/controlling/mid-year-closures/create-mid-year-closures-intro" className="bold-link">Crea chiusura infrannuale</Link></p>
            <p>- crea il set di dati iniziale di periodo</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/adjusting-entry" className="bold-link">Scritture di rettifica</Link></p>
            <p>- gestisce i risconti</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/integration-records" className="bold-link">Scritture di integrazione</Link></p>
            <p>- gestisce i ratei</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/purchase-and-sales-area-valorization" className="bold-link">Valorizzazione area acquisti e vendite</Link></p>
            <p>- gestisce le fatture da ricevere/emettere dai documenti in transito nel ciclo attivo/passivo</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/warehouse-oddments" className="bold-link">Contabilizzazione rimanenze</Link></p>
            <p>- rileva le rimanenze iniziali/finali</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/fixed-assets-depreciation-retrieve" className="bold-link">Ripresa ammortamento cespiti</Link></p>
            <p>- crea gli ammortamenti</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/consolidation" className="bold-link">Consolidamento</Link></p>
            <p>- per creare un consolidato di bilancio</p>
            <p><Link to="/docs/controlling/mid-year-closures/search-off-balance-sheet-records" className="bold-link">Scritture extracontabili di chiusura</Link></p>
            <p>- per gestioni manuali</p>
    </div>
<div className="card">
###     <Link to="/docs/controlling/controlling-recordings/controlling-recording-intro">Controllo di gestione</Link>
        <p>In questo modulo abbiamo tutte le procedure del vero e proprio Controlling</p>
        <p>**Prima nota**: una prima nota di entry di dati fisici o di registrazioni dell'area di analisi.</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/recording-physical-movements" className="bold-link">Registrazione movimenti fisici</Link>: valorizzata da produzione/progetto o manualmente</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/extra-accounting-records-of-area" className="bold-link">Registrazioni extracontabili di area</Link>: valorizzate in automatico da ammortamenti o rimanenze, piuttosto che manuali</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/corporate-centers-std-rates" className="bold-link">Tariffe standard dei centri</Link>: a gestione manuale</p>
        <p>**Storico gestionale**: In questa sezione abbiamo tutti gli storici delle varie base dati elaborate</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/physical-flux-history" className="bold-link">Storico flusso fisico</Link>: la base dati storica dei movimenti fisici</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/depreciation-history" className="bold-link">Storico ammortamenti</Link>: la base dati storica degli ammortamenti elaborati</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Storico registrazioni gestionali</Link>: la base dati mensilizzata e rielaborata da tutti i driver</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/index-history" className="bold-link">Storico indici</Link>: la base dati storica degli indici di costo elaborati sui vari centri</p>
        <p>**Procedure**: In questa sezione troviamo le varie procedure di ripresa e elaborazione dati</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-production-data" className="bold-link">Ripresa dati da produzione</Link>: per riprendere tempi e costi dai progetti, tempi dalla produzione, costi dalle lavorazioni interne/esterne</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-sales-invoice" className="bold-link">Ripresa dati da fatture di vendita</Link>: per riprendere provvigioni e sconti applicati</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/period-processing" className="bold-link">Elaborazione periodi</Link>: per elaborare dati fisici, ammortamenti, ed elaborare la base dati applicando driver</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/alignment-production-indexes" className="bold-link">Aggiornamento tariffe di produzione</Link>: per allineare le tariffe dei centri produttivi</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/master-consolidation" className="bold-link">Consolidamento master</Link>: per creare un controlling unificato di gruppo</p>
        <p>**Storico di progetto**: in questa sezione abbiamo tutti gli storici delle varie base dati elaborate per chi lavora a progetto/commessa</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-physical-history" className="bold-link">Storico movimenti fisici di commessa</Link>: la base dati storica dei tempi e quantità lavorate su progetto/commessa</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/recording-project-history" className="bold-link">*Registrazioni gestionali*</Link>: la base dati storica dei costi e ricavi diretti di progetto</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/production-values" className="bold-link">Valori da produzione</Link>: materiali e lavorazioni direttamente utilizzati su progetto/commessa</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-consolidation" className="bold-link">Consolidato di commessa</Link>: la base dati risultante con costi diretti, indiretti e driver di ribaltamento di costi generali</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/reclassification-overview">Reporting</Link>
        <p>Modulo dedicato alla preparazione e all'elaborazione dei modelli di rappresentazione dei dati dell'area, sia come dati contabili che di analitica o gestionale.</p>
        <p><Link to="/docs/controlling/reclassifications/create-reclassification-model" className="bold-link">Modelli di riclassificazione</Link>: per definire liberamente la struttura delle riclassificazioni desiderate, applicando conti e centri specifici della realtà aziendale</p>
        <p><Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Riclassificazioni</Link>: sono i risultati dell'applicazione dei dati sui vari modelli, riclassificati che restano storicizzati per analisi successive</p>
        <p><Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Comparazioni</Link>: la procedura che consente di confrontare liberamente più riclassificati o più aree, periodi e dimensioni di analisi della contabilità gestionale</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/budget/general-overview">Budgeting</Link>
        <p>Gestione dei dati periodici di budget, su centri di costo e/o progetti.</p>
        <p><Link to="/docs/controlling/budget/offbalance-records-search" className="bold-link">Registrazioni extracontabili di budget</Link></p>
        <p>- le registrazioni di budget per l'anno, magari importate da excel</p>
        <p><Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Registrazioni di budget</Link></p>
        <p>- le registrazioni del budget elaborato e mensilizzato sui singoli periodi</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/cost-calculation/product-cost-intro">Costo prodotto</Link>
        <p>In questo modulo valorizziamo i dati delle distinte basi di prodotto per verificarne la marginalità.</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/sales-forecast/sales-forecast-intro">Previsioni di vendita</Link>
        <p>In questo modulo possiamo creare le previsioni di vendita di anno o periodo, a partire magari dai dati storici dei documenti presenti nell'area vendite per poi rielaborarli.</p>
    </div>
</div>

## Integrazione Controlling con altre aree di Fluentis ERP

- **[Contabilità generale](/docs/finance-area/finance-intro)**: ripresa saldi di periodo, , sia di contabilità generale che di analitica e di progetto. Dal modulo cespiti si valorizzano i dati degli ammortamenti di competenza.
- **[Area logistica](/docs/logistics/logistics-intro)**: dalla gestione di magazzino importiamo la valorizzazione di periodo delle rimanenze.
- **[Area vendite](/docs/sales/sales-intro)**: rilevazione fatture da emettere e provvigioni di competenza del periodo prima della loro maturazione. Tutti i documenti dell'area vendite valorizzano la contabilità analitica e di progetto su ogni riga articolo.
- **[Area acquisti e c/lavoro](/docs/purchase/purchases-intro)**: rilevazione fatture da ricevere , sia per merce in entrata che per lavorazioni esterne non ancora fatturate. Tutti i documenti dell'area acquisti valorizzano la contabilità analitica e di progetto su ogni riga articolo.
- **[Gestione progetti](/docs/project-management/project-management-intro)**: per le ore personale e dati interventi esterni.
- **[Area produzione](/docs/production/production-intro)**: fornisce i tempi (manodopera e macchina) e le quantità utilizzate nelle fasi di produzione.

## Dati di Base

:::danger[Attenzione]
Prima di utilizzare le funzionalità disponibili del controllo di gestione, occorre gestire una serie di impostazioni nelle [**Tabelle di base**](/docs/controlling/controlling-parametrization/general-overview), che dipendono dagli obiettivi che si vogliono raggiungere. Per sua natura, il controlling può prevedere solo marginalmente una configurazione [**Fast start**](/docs/guide/fast-start).

## Flusso di lavoro tipico area controlling
Per una azienda di produzione che utilizzi in toto le procedure del controlling, il flusso operativo periodico sarà tipicamente il seguente:
- Creazione della Chiusura infrannuale del periodo, che contiene i consuntivi
- Ripresa dati da produzione
- Elaborazione periodi
- Riclassificazioni di bilancio e Comparazione riclassificazioni del controlling
- Consolidato di progetto e/o costo prodotto
- Valutazione degli scostamenti di budget