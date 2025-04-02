---
title: Introduzione
sidebar_position: 1
---

Il modulo di pianificazione di Fluentis è un sistema integrato progettato per gestire vari aspetti cruciali della pianificazione della produzione, come la **Pianificazione generale**, la **Schedulazione a capacità finita**, il **Material Requirements Planning (MRP)** e la gestione degli **Ordini pianificati**.       
La **pianificazione generale** in Fluentis adotta un approccio di capacità infinita, offrendo flessibilità nella schedulazione delle operazioni senza considerare vincoli fisici. Utilizza le logiche *al più presto*, per avviare le operazioni immediatamente, e *al più tardi*, per pianificarle il più tardi possibile rispettando le scadenze.       
La **schedulazione a capacità finita** è uno strumento progettato per ottimizzare la gestione delle risorse produttive all'interno di un'azienda manifatturiera, tenendo conto delle limitazioni fisiche delle risorse e creando piani di produzione realistici e attuabili.  
Il sistema **MRP** agevola l'analisi della disponibilità di materiali e risorse, proponendo strategie efficaci per ottimizzare sia l'acquisto che l'uso dei materiali, allo scopo di migliorare la produttività e ridurre gli sprechi. Gli ordini pianificati, generabili automaticamente o manualmente, permettono la gestione anticipata dei fabbisogni aziendali, offrendo flessibilità nella modifica di dettagli come le date di produzione.      
Complessivamente, il sistema Fluentis affronta le sfide della gestione della produzione integrando tecniche avanzate per ottimizzare efficienza e costi operativi.

## Moduli dell'area 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     MS - Matser Scheduling
        <p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Pianificazione generale</Link></p>
        <p>Opera a capacità infinita e permette di schedulare operazioni sia *al più presto*che *al più tardi*. Questi approcci flessibili consentono una gestione ottimizzata delle esigenze produttive e dei tempi di lavorazione.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P.</Link></p>
        <p>Permette di analizzare la disponibilità di materiali e risorse, ottimizzando la gestione di scorte e produzione mediante suggerimenti per anticipare, integrare o annullare ordini. Questo sistema migliora l'efficienza operativa riducendo i livelli di magazzino.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Schedulazione a capacità finita</Link></p>
        <p>Ottimizza la gestione delle risorse produttive considerando le capacità reali dell'azienda, consentendo di creare piani di produzione realistici limitando i tempi di inattività e migliorando l'efficienza operativa.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Ordini pianificati</Link></p>
        <p>Permette la creazione e la gestione efficiente degli ordini pianificati di produzione, acquisto e conto lavoro.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Rilascio ordini pianificati</Link></p>
        <p>Consente di trasformare gli ordini pianificati di produzione, acquisto e conto lavoro in ordini effettivi di produzione, richieste di acquisto e ordini di conto lavoro.</p>
    </div>
</div> 

## Per iniziare ad utilizzare   

- creare degli articoli nell'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item) 
- creare le [*Distinte basi*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) 
- creare i [*Cicli di lavoro*](/docs/erp-home/registers/production/routes/new-route) 
- creare i [*Centri di lavoro*](/docs/erp-home/registers/production/routes/work-center) 
- creare i [*Calendario di fabbrica*](/docs/configurations/tables/production/factory-calendar/) 
- creare i [*Calendari capacità produttive*](/docs/configurations/tables/production/productive-capacity-calendar/) 
- definire i [*Tipi documento*](/docs/configurations/tables/production/documents-types/)  
- definire i [*Parametri MS*](/docs/configurations/parameters/production/mps-parameters/)   
- definire i [*Parametri ordini produzione*](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro/)   

## Collegamenti con altri moduli 
Questi sono strettamente collegati all'[*Anagrafica articoli*](/docs/erp-home/registers/items/create-new-item), alle [*Distinte basi*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), [*Cicli di lavoro*](/docs/erp-home/registers/production/routes/new-route), [*Centri di lavoro*](/docs/erp-home/registers/production/routes/work-center), [*Ordini pianificati*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) e [*Ordini produzione*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).
