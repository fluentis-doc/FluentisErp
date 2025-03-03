---
title: Vendite
sidebar_position: 1
---

L’area **Vendite** di **Fluentis ERP** è progettata per garantire una gestione completa e ottimizzata delle attività commerciali, offrendo una struttura modulare e interconnessa che supporta l’intero processo di vendita, dalla creazione di offerte fino all’analisi dei margini. 

## Configurazione preliminare dell'area

Prima di utilizzare le funzionalità disponibili occorre gestire una serie di dati di base: essi sono suddivisi in due macro gruppi, [**Tabelle**](/docs/configurations/tables/sales/agent-category) e [**Parametri**](/docs/configurations/parameters/sales/general-overview).

In alternativa è disponibile la procedura di [**Fast Start**](/docs/guide/fast-start) per la quale sarà necessario unicamente gestire un set minimo di dati quali le [**Anagrafiche**](/docs/erp-home/registers/registers-intro).


## Moduli Vendite

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/offers/settings">Offerte</Link>
        <p>Creazione, monitoraggio e aggiornamento delle proposte commerciali, integrandole direttamente con i processi aziendali.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Ordini</Link>
        <p>Gestione e organizzazione del processo di acquisto di beni e servizi da parte dei clienti.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-delivery-notes/general-overview">DDT</Link>
        <p>Tracciamento e documentazione della movimentazione delle merci in uscita.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/sales-invoices/general-overview">Fatture</Link>
        <p>Attestazione della transazione di vendita, specificando i beni o servizi forniti, i costi, l'IVA e le condizioni di pagamento.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/pos/general-overview">POS</Link>
        <p>Gestione delle vendite direttamente nel punto cassa, con strumenti per la creazione e gestione di fatture, emissione di ricevute e aggiornamento automatico delle giacenze di magazzino.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/agents/general-overview">Liquidazione agenti</Link>
        <p>Gestione delle vendite direttamente nel punto cassa, con strumenti avanzati per la creazione e gestione di fatture, emissione di ricevute e aggiornamento automatico delle giacenze di magazzino..</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-price-list/general-overview">Listini di vendita</Link>
        <p>Elenco dei prezzi dei prodotti o servizi offerti per facilitare il processo di vendita e includere eventuali sconti applicabili.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/price-control/definition">Gestione prezzi</Link>
        <p>Gestione di sconti aggiuntivi basati sulla categoria commerciale di appartenenza del cliente o altre politiche di definizione sconti.</p>
    </div>
</div>

## Integrazioni con altre aree

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/pos/general-overview">Logistica</Link>
        <p>Aggiornamento automatico delle **giacenze** in tempo reale durante la registrazione dei documenti di vendita.</p>
        <p>Possibilità di generare **Picking** e **Piani di Carico** direttamente dagli ordini clienti, con ulteriore trasformazione in **DDT** e **Fatture** per una gestione ottimizzata delle spedizioni.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/agents/general-overview">Pianificazione e Produzione</Link>
        <p>Supporto al **Demand Planning** tramite l’integrazione con i processi di vendita, particolarmente utile per modelli produttivi come: **Make to Order (MTO)**, **Engineering to Order (ETO)**, **Assembly to Order (ATO)**.</p> 
        <p>Questa connessione garantisce un allineamento tra gli ordini di vendita e le attività produttive, migliorando la pianificazione delle risorse e l’efficienza operativa.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-price-list/general-overview">Contabilità</Link>
        <p>L’integrazione garantisce una gestione fluida e accurata delle transazioni amministrative derivanti dai documenti di vendita, riducendo errori e automatizzando la registrazione contabile.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/price-control/definition">Controllo di Gestione</Link>
        <p>Fornisce strumenti di analisi avanzata per monitorare i **margini di profitto** relativi a ciascun processo di vendita.</p>
        <p>Consente un’analisi dettagliata delle performance commerciali, favorendo l’ottimizzazione delle strategie di vendita e il miglioramento della redditività aziendale.</p>
    </div>
</div>

## Flusso operativo tipico dell'area

1. **Acquisizione opportunità**: le offerte vengono gestite tramite il modulo CRM, raccogliendo informazioni su clienti esistenti e potenziali.  
2. **Conversione offerte in ordini**: le offerte accettate vengono trasformate in ordini, centralizzando le informazioni per proseguire con il processo.  
3. **Creazione automatica dei documenti**: a partire dagli ordini, vengono generati automaticamente i DDT e le Fatture di vendita.  
4. **Vendite al dettaglio (POS)**: le operazioni al punto cassa sono gestite tramite il modulo POS, che registra le vendite e aggiorna la contabilità in tempo reale.  
5. **Gestione prezzi**: aggiornamento e storicizzazione dei prezzi e sconti associati agli articoli codificati.  
6. **Liquidazione provvigioni**: le provvigioni per gli agenti vengono calcolate e liquidate automaticamente, semplificando la gestione delle commissioni.