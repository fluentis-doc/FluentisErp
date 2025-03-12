---
title: TESORERIA
sidebar_position: 1
---

## Funzionalità

L'area Tesoreria di **Fluentis ERP** presenta una serie di moduli e procedure che consentono all'azienda di analizzare l'andamento dei flussi finanziari previsti, valutarne la rischiosità, e gestirne la comunicazione con gli istituti di credito sia in entrata che in uscita.

A queste funzionalità di monitoraggio ed analisi, si affiancano varie procedure per la gestione corrente e quotidiana delle operazioni di pagamento e incasso, di emissione e presentazione al salvo buon fine o all'incasso di effetti e ricevute bancarie, di anticipo fatture di vendita press la banca.

Il modulo dialoga strettamente con l'Amministrazione e permette pertanto di leggere le partite aperte dello scadenziario al fine di generare i pagamenti ed i bonifici da eseguire, oppure di emettere gli effetti e le ricevute bancarie.

Quando il dato viene elaborato, le stesse procedure premettono di generare in automatico le scritture contabili per la rilevazione dei vari incassi e pagamento oppure per l'emissione, presentazione ed incasso di effetti e Ri.Ba.


### Dettaglio Funzionalità


import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/cash-flow/general-overview/">Cash Flow</Link>
        <p>per eseguire analisi preventive del flusso di cassa potenziale, consentendo di creare diversi scenari includendo o escludendo alcune tipologie di flusso finanziario (es. con o senza gli ordini clienti, per un CF più o meno consolidato)</p>
        <p>Completo di</p>
        <p><Link to="/docs/treasury/cash-flow/off-balance-due-dates" className="bold-link">Scadenze extracontabili</Link></p>
        <p>per integrare manualmente il cahsflow con flussi previsionali extra sistema</p>
        <p><Link to="/docs/treasury/cash-flow/reports" className="bold-link">Stampa analitica cashflow</Link></p>
        <p>per la rappresentazione completa dei risultati futuri attesi</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/advance/advances-collections">Anticipo Fatture</Link>
        <p>Modulo specifico per l'anticipazione bancaria sulla fatturazione (solitamente estera)</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bills-holding/general-overview">Portafoglio Effetti</Link>
        <p>per l'emissione, la presentazione , l'incasso di effetti e ricevute bancarie e le relative rilevazioni contabili, oltre alla gestione e relative scritture contabili degli effetti insoluti</p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices/" className="bold-link">Creazione effetti dalle Fatture</Link></p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values/" className="bold-link">Creazione effetti dalle Partite</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/vendors-payments/general-overview">Pagamenti Fornitori</Link>
        <p>per la gestione delle distinte di Bonifico, SDD, e Avvisi Ri.Ba. passivi e la relativa rilevazione contabile in automatico</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/block-passive-maturity-values" className="bold-link">Blocco partite passive</Link></p>
        <p>gestione massiva del blocco autorizzazione al pagamento delle partite passive</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/payments-support-management" className="bold-link">Gestione appoggio pagamenti</Link></p>
        <p>gestione dei dati degli appoggi bancari previsti per i pagamenti</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bank-account/bank-movements">Conti Correnti Bancari</Link>
        <p>per l'importazione delle liste movimenti bancari telematiche e la loro riconciliazione con la contabilità, oppure per sfruttarli nella generazione delle scritture</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/customer-risk/general-overview">Rischio Cliente</Link>
        <p>per la gestione del fido sulle forniture a credito ed il monitoraggio o blocco a fronte del superamento del limite imposto, l'analisi dell'esposizione al rischio di credito tramite vari pannelli ed indici</p>
        <p><Link to="/docs/treasury/customer-risk/procedures/lock-manager" className="bold-link">Lock manager per autorizzare lo sconfinamento</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/customer-statement" className="bold-link">Esposizione clienti</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/remittances-check" className="bold-link">Gestione Rimesse</Link></p>
        <p>Per il controllo tempi medi nel ritardo pagamenti</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/treasury/docfinance/general-overview">DocFinance e Piteco</Link>
        <p>per la gestione dell'importazione ed esportazione dati verso i maggiori e più diffusi software verticali per la tesoreria.</p>
    </div>
</div>

## Dati di Base
:::danger[Attenzione]
Prima di utilizzare le funzionalità disponibili occorre gestire una serie di dati di base: essi sono suddivisi in due macro gruppi, [**Tabelle**](/docs/configurations/tables/finance/general-overview) e [**Parametri**](/docs/configurations/parameters/finance/general-overview).

In alternativa è disponibile la procedura di **Fast Start** descritta di seguito.
:::

## Procedura di Fast Start

:::important[**Fast Start**]
Anche l'area Tesoreria può essere configurata come [**ambiente *FastStart* totalmente pronto all'uso**](/docs/guide/fast-start) e permettere un utilizzo immediato.
:::

## Flusso di inserimento dei dati

Benchè sia possibile l'inserimento manuale di dati quali ad esempio la creazione di una ricevuta bancaria o di una distinta di bonifico, solitamente si ricorre a **procedure automatiche** di creazione (esempio *creazione effetti dalle partite o dalle fatture*) o di predisposizione dei pagamenti a partire dalle partite aperte.

Si ricorre inoltre generalmente a procedure automatiche di contabilizzazione del portafoglio o dei bonifici eseguiti.

Altre funzionalità risultano invece elaborazioni del software a partire dai dati presenti, es. il Cashflow con la procedura dui creazione automatica, (benchè esista la possibilità di crearlo manualmente richiamando i flussi finanziari uno ad uno, raramente utilizzato) oppure i dati estratti dal modulo Rischio cliente.

## Flusso di lavoro tipico area tesoreria

- Procedure "Correnti": 
    - esecuzione dei pagamenti fornitori leggendo le partite aperte e contabilizzazione automatica del pagamento stesso con chiusura partite
    - emissione di effetti attivi (frequentemente ricevute bancarie) leggendo le fatture o le partite aperte e contabilizzazione automatica dell'emissione
    - creazione di distinte di presentazione effetti (Ri.Ba.) l salvo buon fine o all'incasso ed esportazione del file telematico per l'invio alla banca; contabilizzazione automatica della presentazione
    - incasso degli effetti al salvo buon fine (giroconto automatico)
    - eventuale emersione insoluto con riapertura del credito cliente, contabilizzazione automatica
    - creazione di distinte di presentazione fatture allo sconto leggendo le scadenze delle fatture, contabilizzazione automatica dell'anticipo e del successivo incasso completo

- Procedure "On demand":
    - Elaborazione cashflow leggendo i dati presenti a sistema (saldi, partite, documenti ciclo attivo e passivo, effetti, documenti di conto lavoro e produzione)
    - Elaborazione di statistiche di utilizzo fidi clienti o ritardo pagamenti