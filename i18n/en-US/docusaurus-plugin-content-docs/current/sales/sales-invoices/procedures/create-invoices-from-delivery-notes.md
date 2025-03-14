---
title: Creating Invoices from DDT (Creazione fatture da DDT)
sidebar_position: 1
---

The procedure is opened via the path **Sales > Sales Invoices > Procedures > Creation from DDT**. 

This procedure allows you to execute/restore the operations of creating invoices from one or more DDT.

### Valuation

In this tab, the user has the opportunity to enter filters to search for DDTs, with the status *Printed*, to be invoiced with the help of filters (DDT type, date, number, customer). 

**Creation date**: allows specifying the date of the invoice that will be created. 

*Specific buttons*: 
> **Create invoices from DDT (Creazione fatture da DDT)**: allows valuing the selected DDTs in the grid, based on the parameters entered in the following *Parameters* tab.
> **Open D.N.**: allows viewing and modifying the selected DDT.

:::note
It is not possible to create a self-invoice from DDT.
:::

### Parameters

*Insertion on invoice*

With the help of these parameters, DDTs of the same customer can be grouped into a single invoice:

**DN with different years and Vat periods**: the active flag allows the creation of the invoice from DDTs of different years and VAT periods.

**Delivery Notes with different types**: the active flag allows the creation of an invoice from different types of DDT.

**Delivery Notes with different exchanges rates**: the active flag allows the creation of an invoice from multiple DDTs with different exchange rates.

**Grouping DN by payment type and term**: payment types can be taken from the customer registry or kept as those of the DDT. If there is no grouping by payment type, the invoice may contain multiple lines of different payments. 

*Processing of payments in invoice*

If there are DDTs with different payment solutions and the *Group DDT (Raggruppa DDT)* flag has not been set:

**Restore nomenclature data**: the invoice will take the payment solutions from the registry (and does not consider the information entered in the DDT). 

**Keeps those from DDT (Mantiene quelli dei DDT)**: the invoice will take the payment solutions entered in the DDT.

*Insertion on invoice*

**Grouping maturities on invoice**: the active flag allows grouping due dates with the same date but coming from different DDTs into a single solution.

**Recalculate CDC/CDP (Ricalcola CdC/CdP)**: used in analytical accounting, it is used to recalculate cost or profit centers.

*D.N. references*

**Insert D.N. references**: if this flag is set, in the [Items](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) tab of the invoice, an *Item note (Articolo nota)* will be displayed that retrieves the references from the DDT from which the invoice was created. The composition of this note must be entered in the 'Description' field according to the parameters described in the label.

*Specific button*: 

> **Save Parameters**: allows saving the parameters set for valuation.

After selecting the DDTs (from the *Valuation* tab) and setting the parameters, the invoice can be created with the help of the *Create Invoice from DDT (Creazione fattura da DDT)* button.

### Previous

As the last tab, there is a restore tab: it can be used to filter, view, and cancel operations.

The data in the grids below, **Invoices** and **DDT**, correspond to the valuation selected in the upper grid (after filtering the data). Additionally, in these last two grids, it is possible to view the invoice and the corresponding DDT by double-clicking the desired row.

*Specific buttons*:
> **Search invoices**: allows searching for valued DDTs.  
> **Restore creation**: allows restoring the entire operation, that is, in the case of creating multiple invoices simultaneously, it cancels all invoices and restores the DDTs.  
> **Restore Invoice**: allows restoring the selected invoice in the *Invoices* tab.