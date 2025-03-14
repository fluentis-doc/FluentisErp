---
title: Introduction (Introduzione)
sidebar_position: 1
---

The Fluentis ERP Effects Portfolio module is designed to manage and monitor commercial effects, such as drafts, bank receipts, and other deferred payment instruments. 

This module allows for the management of all operations related to effects, from their creation to presentation at the bank for good completion or collection, up to the recording of the final credits of collected amounts, providing complete control over cash flows resulting from deferred payments.

## The operational flow: 

- starts by retrieving data from sales invoices or accounting entries. 

- Executes the closing of the customer account, the generation of the presentation lists, and the possible creation of the final default. 

It is possible to define the various types of necessary effects at will. 

The **Cash order**, currently the most used instrument in Italy, are already present in the system (following the initial Fast Start configuration).

## List of tables necessary to manage the module:

[Effects numbering (Numerazione effetti)](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-numeration),  

[Presentation lists numbering (Numerazione distinte di presentazione)](/docs/configurations/tables/treasury/bills-portfolio-module-tables/presentation-lists-numeration),  

[Types of effects (Tipi effetti)](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types),  

[Types of presentation lists for effects (Tipi presentazione distinte effetti)](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types),  

[Effects statuses (Stati effetti)](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-status),  

[Unpaid statuses (Stati insoluti)](/docs/configurations/tables/treasury/bills-portfolio-module-tables/unpaid-status),  

[Payment types (Tipi pagamento)](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types).

## Parameters necessary to manage the module:

[Effects portfolio parameters (Parametri portafoglio effetti)](/docs/configurations/parameters/treasury/bills-portfolio-parameters).

 

## Procedures present in the module

| Function (Funzione) | Meaning (Significato) | Video Tutorial Details (Dettaglio Video Tutorial) |
| --- | --- | --- |
|  [Acquisition of effects from invoices (Acquisizione effetti dalle fatture)](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)  | Invokes the procedure to automatically create effects from invoice due dates. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Acquisition of effects from due accounts (Acquisizione effetti dalle partite)](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)  | Invokes the procedure to automatically create effects from open accounts. |<a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Accounting of effects (Contabilizzazione effetti)](/docs/treasury/bills-holding/accounting/bills-accounting)  | Invokes the procedure to perform the accounting of effects and close the customer account. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=02m55s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  **Bills Accounting by Vendor**  | Invokes the procedure to perform the accounting of effects to the supplier and close the supplier account. | |
|  [Accounting of lists (Contabilizzazione distinte)](/docs/treasury/bills-holding/accounting/lists-accounting)  | Invokes the procedure to perform the accounting of the list and value the presentation account. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05m05s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  Accounting of credits  | Invokes the procedure to perform the accounting of the credit in account. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=07m51s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Importing unpaids (Importazione insoluti)](/docs/treasury/bills-holding/procedures/import-unpaids)  | Invokes the import procedure of the unpaid telematic trace. |
|  [Accounting of unpaids (Contabilizzazione insoluti)](/docs/treasury/bills-holding/accounting/unpaid-accounting)  | Invokes the accounting procedure for unpaids, with concurrent reopening of the customer account according to the module parameters. | |
|  Accounting of unpaids on assignment | Invokes the accounting procedure for unpaids, with concurrent reopening of customer and supplier accounts according to the module parameters. | |

## Prints of the module

| Function (Funzione) | Meaning (Significato) | Video Tutorial Details (Dettaglio Video Tutorial) |
| --- | --- | --- |
|  [Print presentation lists (Stampa distinte di presentazione)](/docs/treasury/bills-holding/reports/print-presentation-lists)  | Invokes the procedure to print the presentation lists for the effects at the bank. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Print Effects Portfolio Situation (Stampa Situazione portafoglio effetti)](/docs/treasury/bills-holding/reports/bill-holding-situation)  | Invokes the procedure to print the statistics of the Effects Portfolio Situation. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Print Unpaid List (Stampa Lista insoluti)](/docs/treasury/bills-holding/reports/print-unpaid-list)  | Invokes the procedure to print the current list of unpaids. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |

<iframe width="560" height="315" src="https://www.youtube.com/embed/pWgf3bowpMQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>