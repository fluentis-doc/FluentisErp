---
title: Introduction 
sidebar_position: 1
---

The Fluentis ERP Bills Portfolio module is designed to manage and monitor commercial Bills, such as drafts, bank receipts, and other deferred payment instruments. 

This module allows for the management of all operations related to Bills, from their creation to presentation at the bank for good completion or collection, up to the recording of the final credits of collected amounts, providing complete control over cash flows resulting from deferred payments.

## The operational flow: 

- starts by retrieving data from sales invoices or ledger records. 

- Executes the closing of the customer account, the generation of the presentation lists, and the possible creation of the final default. 

It is possible to define the various types of necessary Bills at will. 

The **Cash order**, currently the most used instrument in Italy, are already present in the system (following the initial Fast Start configuration).

## List of tables necessary to manage the module:

[Bills numeration](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-numeration),  

[Presentation lists numeration](/docs/configurations/tables/treasury/bills-portfolio-module-tables/presentation-lists-numeration),  

[Types of Bills](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types),  

[Types of presentation lists for Bills](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types),  

[Bills statuses](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-status),  

[Unpaid statuses](/docs/configurations/tables/treasury/bills-portfolio-module-tables/unpaid-status),  

[Payment types](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types).

## Parameters necessary to manage the module:

[Bills portfolio parameters](/docs/configurations/parameters/treasury/bills-portfolio-parameters).

 

## Procedures present in the module

| Function | Meaning | Video Tutorial Details |
| --- | --- | --- |
|  [Bills from Invoices Issue](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)  | Invokes the procedure to automatically create Bills from invoice due dates. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [ìBills from Maturity Value Issue](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)  | Invokes the procedure to automatically create Bills from open accounts. |<a href="https://youtu.be/pWgf3bowpMQ&amp;t=05s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Bills Accounting](/docs/treasury/bills-holding/accounting/bills-accounting)  | Invokes the procedure to perform the accounting of Bills and close the customer account. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=02m55s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  **Bills Accounting by Vendor**  | Invokes the procedure to perform the accounting of Bills to the supplier and close the supplier account. | |
|  [Lists Accounting](/docs/treasury/bills-holding/accounting/lists-accounting)  | Invokes the procedure to perform the accounting of the list and value the presentation account. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=05m05s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  Accounting of credits  | Invokes the procedure to perform the accounting of the credit in account. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=07m51s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Unpaid Import](/docs/treasury/bills-holding/procedures/import-unpaids)  | Invokes the import procedure of the unpaid telematic trace. |
|  [Unpaid Accounting](/docs/treasury/bills-holding/accounting/unpaid-accounting)  | Invokes the accounting procedure for unpaids, with concurrent reopening of the customer account according to the module parameters. | |
|  Accounting of unpaids on assignment | Invokes the accounting procedure for unpaids, with concurrent reopening of customer and supplier accounts according to the module parameters. | |

## Prints of the module

| Function | Meaning | Video Tutorial Details |
| --- | --- | --- |
|  [Print presentation lists](/docs/treasury/bills-holding/reports/print-presentation-lists)  | Invokes the procedure to print the presentation lists for the Bills at the bank. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Report - Bills Portfolio situation](/docs/treasury/bills-holding/reports/bill-holding-situation)  | Invokes the procedure to print the statistics of the Bills Portfolio Situation. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |
|  [Print Unpaid List](/docs/treasury/bills-holding/reports/print-unpaid-list)  | Invokes the procedure to print the current list of unpaids. | <a href="https://youtu.be/pWgf3bowpMQ&amp;t=09m26s" target="_blank" rel="noopener noreferrer">Link to Video Tutorial</a> |

<iframe width="560" height="315" src="https://www.youtube.com/embed/pWgf3bowpMQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>