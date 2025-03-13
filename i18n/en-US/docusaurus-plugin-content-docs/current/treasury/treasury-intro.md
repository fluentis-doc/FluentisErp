---
title: Treasury
sidebar_position: 1
---

## Functionality (Funzionalità)

The Treasury area of **Fluentis ERP** features a series of modules and procedures that allow the company to analyze the trend of projected financial flows, assess their risk, and manage communication with credit institutions for both incoming and outgoing transactions.

Alongside these monitoring and analysis functionalities, there are various procedures for the ongoing and daily management of payment and collection operations, issuance, and presentation for collection or to be collected of effects and bank receipts, and advance requests for sales invoices with the bank.

The module closely interacts with Administration and therefore allows reading the open items from the due date schedule to generate the payments and bank transfers to be executed, or to issue effects and bank receipts.

Once the data is processed, the same procedures also allow for automatic generation of accounting entries for recording various collections and payments, as well as for the issuance, presentation, and collection of effects and Ri.Ba.

### Functionality Details (Dettaglio Funzionalità)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/cash-flow/general-overview/">Cash Flow (Flusso di Cassa)</Link>
        <p>to perform preventive analyses of potential cash flow, allowing for the creation of various scenarios including or excluding certain types of financial flow (e.g., with or without customer orders, for a more or less consolidated CF)</p>
        <p>Complete with</p>
        <p><Link to="/docs/treasury/cash-flow/off-balance-due-dates" className="bold-link">Off-balance Due Dates (Scadenze extracontabili)</Link></p>
        <p>to manually integrate the cash flow with extra-system projected flows</p>
        <p><Link to="/docs/treasury/cash-flow/reports" className="bold-link">Analytical Cash Flow Print (Stampa analitica cashflow)</Link></p>
        <p>for the complete representation of expected future results</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/advance/advances-collections">Invoice Advances (Anticipo Fatture)</Link>
        <p>Specific module for bank anticipation on invoicing (usually foreign)</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bills-holding/general-overview">Effects Portfolio (Portafoglio Effetti)</Link>
        <p>for the issuance, presentation, collection of effects and bank receipts, and related accounting entries, as well as the management and related accounting entries of overdue effects</p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices/" className="bold-link">Creation of Effects from Invoices (Creazione effetti dalle Fatture)</Link></p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values/" className="bold-link">Creation of Effects from Entries (Creazione effetti dalle Partite)</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/vendors-payments/general-overview">Supplier Payments (Pagamenti Fornitori)</Link>
        <p>for managing Transfer lists, SDD, and passive Ri.Ba. notices and automatic accounting records</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/block-passive-maturity-values" className="bold-link">Block Passive Entries (Blocco partite passive)</Link></p>
        <p>mass management of authorization block for payment of passive entries</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/payments-support-management" className="bold-link">Payment Support Management (Gestione appoggio pagamenti)</Link></p>
        <p>management of the expected bank support data for payments</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bank-account/bank-movements">Bank Accounts (Conti Correnti Bancari)</Link>
        <p>for importing electronic lists of bank movements and reconciling them with accounting, or to utilize them in generating entries</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/customer-risk/general-overview">Customer Risk (Rischio Cliente)</Link>
        <p>for managing credit limits on supplies and monitoring or blocking when exceeding imposed limits, analyzing credit risk exposure through various panels and indices</p>
        <p><Link to="/docs/treasury/customer-risk/procedures/lock-manager" className="bold-link">Lock Manager for Authorizing Exceedance (Lock manager per autorizzare lo sconfinamento)</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/customer-statement" className="bold-link">Customer Exposure (Esposizione clienti)</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/remittances-check" className="bold-link">Remittance Management (Gestione Rimesse)</Link></p>
        <p>For controlling average times in payment delays</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/docfinance/general-overview">DocFinance and Piteco (DocFinance e Piteco)</Link>
        <p>for managing the import and export of data to and from the major and most popular vertical treasury software.</p>
    </div>
</div>

## Basic Data (Dati di Base)
:::danger[Attention (Attenzione)]
Before using the available functionalities, it is necessary to manage a series of basic data: these are divided into two macro groups, [**Tables**](/docs/configurations/tables/finance/general-overview) and [**Parameters**](/docs/configurations/parameters/finance/general-overview).

Alternatively, a **Fast Start** procedure described below is available.
:::

## Fast Start Procedure (Procedura di Fast Start)

:::important[**Fast Start**]
The Treasury area can also be configured as a [**fully ready-to-use *FastStart* environment**](/docs/guide/fast-start) and allow for immediate use.
:::

## Data Entry Flow (Flusso di inserimento dei dati)

Although manual entry of data such as creating a bank receipt or a transfer list is possible, it is usually resorted to **automatic creation procedures** (e.g., *creation of effects from entries or invoices*) or preparation of payments starting from the open entries.

Generally, automatic accounting procedures for the portfolio or executed transfers are also used.

Other functionalities are instead software processes starting from the existing data, e.g., the Cash Flow with the automatic creation procedure, (although there is the possibility of creating it manually by recalling the financial flows one by one, which is rarely used) or data extracted from the Customer Risk module.

## Typical Workflow in the Treasury Area (Flusso di lavoro tipico area tesoreria)

- "Current" Procedures:
    - execution of supplier payments by reading the open entries and automatic accounting of the payment itself with closing of entries
    - issuance of active effects (frequently bank receipts) by reading invoices or open entries and automatic accounting of the issuance
    - creation of presentation lists for effects (Ri.Ba.) for collection or to be collected and export of the electronic file to be sent to the bank; automatic accounting of the presentation
    - collection of effects for collection (automatic bank transfer)
    - eventual emergence of default with reopening of customer credit, automatic accounting
    - creation of lists for presentation of invoices for discount by reading invoice due dates, automatic accounting of the advance and subsequent full collection

- "On-demand" Procedures:
    - Cash flow processing by reading the data present in the system (balances, entries, documents in the active and passive cycles, effects, job order documents, and production)
    - Processing of statistics on customer credit usage or payment delays