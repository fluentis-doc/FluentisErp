---
title: Introduzione
sidebar_position: 2
---

Il modulo **Fatture di vendita** consente la creazione manuale o automatica delle fatture, il recupero di prezzi e sconti dai listini, l'inserimento di dettagli personalizzati, la gestione di vari tipi di fatture e numerazioni, e l'automatizzazione di processi come contabilizzazione, emissione di effetti e raggruppamento di DDT. La stampa è personalizzabile, assicurando una documentazione completa e tracciabile.


## Configurazione preliminare del modulo

- **[Numerazioni](/docs/configurations/tables/fluentis-numerations)**: definizione delle numerazioni per le fatture.  
- **[Parametri fatture di vendita](/docs/configurations/parameters/sales/sales-invoices-parameters)**: impostazioni specifiche per la gestione delle fatture.  
- **[Parametri raggruppamento fatture di vendita](/docs/configurations/parameters/sales/invoice-grouping)**: configurazione per unire più DDT in una fattura.  
- **[Fatturato vendite](/docs/configurations/tables/sales/sales-turnover)**: monitoraggio e gestione dei dati di vendita.  
- **[Tipi fatture](/docs/configurations/tables/sales/invoices-type)**: creazione e classificazione delle tipologie di fatture.

In alternativa è disponibile la procedura di [**Fast Start**](/docs/guide/fast-start).


## Documenti gestiti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/corrective-actions/corrective-action-management">Fatture di vendita</Link> 
Permette la creazione della fattura *manuale* con l'inserimento diretto di dati oppure *automatica* generandola a partire da *Ordini client** oppure da *Documenti di trasporto (DDT)*.  
####     Procedure  
Scarico fatture immediate da magazzino: Gli articoli sono scalati automaticamente dal magazzino in base alle spedizioni registrate.   
Creazione da DDT: Generazione di fatture per uno o più DDT in base alle necessità operative.  
####     Contabilizzazione  
Le fatture emesse sono contabilizzate automaticamente, aggiornando i registri finanziari e mantenendo la coerenza con il bilancio aziendale.  
####    Stampe  
Layout personalizzabili per ciascun cliente.  
Inclusione di tutti i dettagli commerciali e contabili richiesti.  

    </div>
</div>

## Collegamenti con altri moduli

<div className="cardContainer">
    <div className="card">
####     <Link to="/docs/sales/offers/settings">Modulo A</Link>
        <p>testo, testo, testo </p>
    </div>
    <div className="card">
####     <Link to="/docs/sales/sales-orders/settings">Modulo B</Link>
        <p>testo, testo, testo </p>
    </div>
</div>