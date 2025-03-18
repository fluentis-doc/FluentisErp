---
title: Treasury
sidebar_position: 1
---

## Functionality 

The Treasury area of **Fluentis ERP** features a series of modules and procedures that allow the company to analyze the trend of projected financial flows, assess their risk, and manage communication with credit institutions for both incoming and outgoing transactions.

Alongside these monitoring and analysis functionalities, there are various procedures for the ongoing and daily management of payment and collection operations, issuance, and presentation for collection or to be collected of bills and bank receipts, and advance requests for sales invoices with the bank.

The module closely interacts with Finance and therefore allows reading the open items from the due date schedule to generate the payments and bank transfers to be executed, or to issue bills and bank receipts.

Once the data is processed, the same procedures also allow for automatic generation of ledger records for recording various collections and payments, as well as for the issuance, presentation, and collection of bills and Ri.Ba.

### Functionality Details 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/cash-flow/general-overview/">Cash Flow</Link>
        <p>to perform preventive analyses of potential cash flow, allowing for the creation of various scenarios including or excluding certain types of financial flow (e.g., with or without customer orders, for a more or less consolidated CF)</p>
        <p>Complete with</p>
        <p><Link to="/docs/treasury/cash-flow/off-balance-due-dates" className="bold-link">Off-balance Due Dates</Link></p>
        <p>to manually integrate the cash flow with extra-system projected flows</p>
        <p><Link to="/docs/treasury/cash-flow/reports" className="bold-link">Analytical Cash Flow Print</Link></p>
        <p>for the complete representation of expected future results</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/advance/advances-collections">Invoice Advances</Link>
        <p>Specific module for bank anticipation on invoicing (usually foreign)</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bills-holding/general-overview">Bills Portfolio</Link>
        <p>for the issuance, presentation, collection of bills and bank receipts, and related ledger records, as well as the management and related ledger records of overdue bills</p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices/" className="bold-link">Creation of bills from Invoices</Link></p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values/" className="bold-link">Creation of bills from Maturity Values</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/vendors-payments/general-overview">Supplier Payments</Link>
        <p>for managing Transfer lists, SDD, and passive Ri.Ba. notices and automatic accounting records</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/block-passive-maturity-values" className="bold-link">Block Passive Maturity Values</Link></p>
        <p>mass management of authorization block for payment of passive mat. values</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/payments-support-management" className="bold-link">Payment Support Management</Link></p>
        <p>management of the expected bank support data for payments</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bank-account/bank-movements">Bank Accounts</Link>
        <p>for importing electronic lists of bank movements and reconciling them with accounting, or to utilize them in generating mat. values</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/customer-risk/general-overview">Customer Risk</Link>
        <p>for managing credit limits on supplies and monitoring or blocking when exceeding imposed limits, analyzing credit risk exposure through various panels and indices</p>
        <p><Link to="/docs/treasury/customer-risk/procedures/lock-manager" className="bold-link">Lock Manager for Authorizing Exceedance</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/customer-statement" className="bold-link">Customer Exposure</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/remittances-check" className="bold-link">Remittance Management</Link></p>
        <p>For controlling average times in payment delays</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/docfinance/general-overview">DocFinance and Piteco</Link>
        <p>for managing the import and export of data to and from the major and most popular vertical treasury software.</p>
    </div>
</div>

## Basic Data 
:::danger[Attention]
Before using the available functionalities, it is necessary to manage a series of basic data: these are divided into two macro groups, [**Tables**](/docs/configurations/tables/finance/general-overview) and [**Parameters**](/docs/configurations/parameters/finance/general-overview).

Alternatively, a **Fast Start** procedure described below is available.
:::

## Fast Start Procedure 

:::important[**Fast Start**]
The Treasury area can also be configured as a [**fully ready-to-use *FastStart* environment**](/docs/guide/fast-start) and allow for immediate use.
:::

## Data Entry Flow 

Although manual entry of data such as creating a bank receipt or a transfer list is possible, it is usually resorted to **automatic creation procedures** (e.g., *creation of bills from mat. values or invoices*) or preparation of payments starting from the open mat. values.

Generally, automatic accounting procedures for the portfolio or executed transfers are also used.

Other functionalities are instead software processes starting from the existing data, e.g., the Cash Flow with the automatic creation procedure, (although there is the possibility of creating it manually by recalling the financial flows one by one, which is rarely used) or data extracted from the Customer Risk module.

## Typical Workflow in the Treasury Area 

- "Current" Procedures:
    - execution of supplier payments by reading the open mat. values and automatic accounting of the payment itself with closing of mat. values
    - issuance of active bills (frequently bank receipts) by reading invoices or open mat. values and automatic accounting of the issuance
    - creation of presentation lists for bills (Ri.Ba.) for collection or to be collected and export of the electronic file to be sent to the bank; automatic accounting of the presentation
    - collection of bills for collection (automatic bank transfer)
    - eventual emergence of default with reopening of customer credit, automatic accounting
    - creation of lists for presentation of invoices for discount by reading invoice due dates, automatic accounting of the advance and subsequent full collection

- "On-demand" Procedures:
    - Cash flow processing by reading the data present in the system (balances, mat. values, documents in the active and passive cycles, bills, job order documents, and production)
    - Processing of statistics on customer credit usage or payment delays