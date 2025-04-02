---
title: Introduzione
sidebar_position: 1
---

Il modulo Budget consente all'operatore di gestire il budget per centro di costo, che si integra con il controllo di gestione di ***Fluentis Erp*** per valorizzare una specifica area di analisi del Budget, che può essere valorizzata con specifici cost driver e viene confrontata con i dati consuntivi all'interno delle Comparazione Riclassificazioni.
Il modulo è presente nell'area controlling e prevede il caricamento dei dati di dettaglio tramite un'importazione da Excel dei dati previsionali di budget.

## Configurazione iniziale del modulo
le tabelle necessarie per l'utilizzo del modulo sono:
- nella tabella [**Tipi area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) serve un tipo specifico da associare alle aree di Budget
- nella tabella [**Area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) serve almeno un'area Budget associata al tipo area di budget
- la configurazione della struttura dei [**Centri di costo**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) aziendali

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