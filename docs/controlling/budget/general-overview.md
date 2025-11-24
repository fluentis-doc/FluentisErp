---
title: Introduzione
sidebar_position: 1
---

Dalla versione 2025 di Fluentis ERP sono possibili due diverse modalità di gestione del Budgeting.

1. il budget per centro di costo, che si integra con il controllo di gestione al fine di valorizzare una specifica area di analisi del Budget, e che può essere valorizzata con specifici cost driver. Viene poi confrontata con i dati consuntivi all'interno delle Comparazione Riclassificazioni.
Il modulo prevede il caricamento dei dati di dettaglio tramite un'importazione da Excel dei dati previsionali di budget.

2. gestione del budget anche senza l'utilizzo completo del modulo controllo di gestione: l'elaborazione è possibile per sottoconti contabili, per centri di costo, centri di profitto e su modello di riclassificazione.

## Configurazione iniziale del modulo
le tabelle necessarie per l'utilizzo del modulo sono:
- nella tabella [**Tipi area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) serve un tipo specifico da associare alle aree di Budget
- nella tabella [**Area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) serve almeno un'area Budget associata al tipo area di budget
- la configurazione della struttura dei [**Centri di costo**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) aziendali
- Per chi non utilizza il modulo controlling completo (Budgeting non attraverso le registrazioni extracontabili) può essere configurata la tabella **Tipi Budget** (una semplice tabella per codificare delle categorie e attribuire una numerazione) e la tabella [**Tipi Periodo**](/docs/configurations/tables/controlling/forecast/period-types)

## Documenti gestiti
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/budget/budget-excel-import">Importazione Budget da Excel con Bizlink</Link>
        <p>- per valorizzare nel controlling l'elaborazione esterna di un budget</p>
###     <Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Scritture di budget</Link>
        <p>- per intervenire manualmente sui dati di budget</p>
###     <Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Storico registrazioni gestionali</Link>
        <p>- per elaborare un Budget dai dati di un consuntivo esistente, applicando delle [*Percentuali di variazione*](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages) sui dati</p>
    </div>
</div>