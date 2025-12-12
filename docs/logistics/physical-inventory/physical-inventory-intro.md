---
title: Introduzione agli Inventari Fisici
description: Introduzione alle funzionalità dell’area Inventari Fisici - creazione liste, rilevazione giacenze, allineamento fisico/logico, valorizzazioni e storico.
keywords:
  - inventari fisici
  - magazzino
  - valorizzazione
  - differenze inventariali
sidebar_position: 1
schema: TechArticle
tags:
  - inventario
  - magazzino
last_update:
  author: Fluentis Documentation Team
---

# Introduzione agli Inventari Fisici

Il modulo consente all'operatore di creare e gestire le liste inventariali, rilevare le giacenze fisiche e confrontarle con le giacenze logiche presenti nel sistema.  
In base ai parametri configurati, Fluentis permette di allineare automaticamente le giacenze logiche a quelle fisiche, sincronizzando il magazzino informatico con lo stato reale delle merci.  

Una volta completata la fase di allineamento, diventa possibile procedere con la **valorizzazione del magazzino**.

## I documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Inventari fisici</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Inventari fisici</Link></p>
        <p>Permette agli operatori di creare liste inventariali, effettuare rilevazioni delle giacenze fisiche e confrontare i dati ottenuti con le giacenze logiche presenti nel sistema. Attraverso un processo automatizzato, Fluentis facilita l'allineamento tra le giacenze fisiche e quelle logiche, garantendo così un'accurata ottimizzazione della gestione delle risorse.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Differenze inventariali</Link></p>
        <p>Garantisce un efficace allineamento tra le giacenze fisiche e logiche all'interno del magazzino. Questa funzionalità consente agli operatori di gestire e registrare le discrepanze identificate in modo sistematico, assicurando che ogni movimento di magazzino sia tracciato e contabilizzato in modo accurato.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Storico chiusura</Link></p>
        <p>Consente un accesso ai dati storicizzati relativi alle chiusure di magazzino, permettendo agli operatori di monitorare e analizzare le variazioni delle giacenze nel tempo. Questa funzionalità consente di consultare informazioni dettagliate come il costo ultimo, il costo medio e le giacenze di magazzino, tutte realizzate tramite la procedura di valorizzazione.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Storico magazzino</Link></p>
        <p>Permette agli utenti di consultare i dati storicizzati relativi alle operazioni di magazzino. Questa funzionalità consente di visualizzare un archivio dettagliato delle chiusure e delle valorizzazioni effettuate nel tempo, offrendo la possibilità di analizzare informazioni come il costo ultimo e medio di ciascun articolo, nonché le giacenze specifiche associate a ogni chiusura.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valorizzazione magazzino</Link></p>
        <p>Permette agli operatori di effettuare chiusure di magazzino a una data specificata, registrando le rimanenze e consentendo l'allineamento delle informazioni logistiche con quelle contabili, garantendo così una gestione accurata delle risorse e dei costi associati.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Inventario quantità valorizzato</Link></p>
        <p>Garantisce alle aziende di avere una visione chiara e dettagliata delle proprie scorte. Attraverso questo report, gli utenti possono accedere a informazioni complete non solo sulle quantità fisiche degli articoli presenti in magazzino, ma anche sul loro valore</p>
    </div>
</div>

## Per iniziare a utilizzare gli Inventari fisici

Per lavorare correttamente con gli **Inventari fisici**, è necessario predisporre i seguenti dati:

- creare articoli nell’[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)
- definire le [*Causali di magazzino*](/docs/configurations/tables/logistics/warehouse-templates)
- configurare i [*Parametri iniziali di magazzino*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)
- impostare i [*Parametri differenze inventariali*](/docs/configurations/parameters/logistics/stock-difference/)
- definire un [*Tipo lista inventariale*](/docs/configurations/tables/logistics/stock-lists-types/)
- creare un dipendente nella tabella [*Dipendenti*](/docs/project-management/registers/employee/new-employee/)

## Collegamenti con altri moduli

Dalle [*Registrazioni di magazzino*](/docs/logistics/warehouse/stock-records/record) è possibile visualizzare:

- i risultati degli inventari fisici  
- le chiusure di magazzino  
- le movimentazioni generate dall’allineamento delle giacenze  

Questo consente una visione completa e integrata del processo inventariale.
