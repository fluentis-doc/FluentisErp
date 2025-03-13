---
title: Return delivery notes valorization
sidebar_position: 4
---

The procedure opens through the path **Purchases > Purchase Invoices > Procedures > Return delivery notes valorization (Acquisti > Fatture di acquisto > Procedure > Valorizzazione DDT di rientro)**.

The procedure allows the creation of invoices from return DDT.

### Return Filter (Filtro rientri)

In this tab, the user has the opportunity to enter filters to search for return DDT to be valued. It is possible to filter by: supplier, return type, document number, date, item, and project.

- **Invoice number and date (Numero e data fattura)**: allows you to specify the number and date of the invoice that will be created.

- **Total**: allows you to see the total amount of the selected returns for valuation.

*Specific button*: 

> **Valorization of Subcontractor Returns**: allows for the valuation of the selected returns in the grid, based on the parameters entered in the subsequent *Parameters* tab.


### Parameters (Parametri)

*Invoice type*

- **Invoice type**: indicates the type of invoice to be created.

- **Sort DDT by supplier document number**: if set, allows the returns to be included within the summary invoices sorted by *Document Number*. Alternatively, the returns will be sorted by document date.

*Return references*

- **Maintain return references**: if this flag is set, in the [Items tab (Articoli)](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) of the invoice, a *Note item (Articolo nota)* will be displayed that will take the references from the return from which the invoice was created. The content of this note must be entered in the *Description* field, according to the parameters described in the label.

:::tip Remember (Ricorda)
For summary invoicing, it is necessary to set the grouping conditions to be used in the [Invoice Grouping Parameters (Parametri raggruppamento fatture)](/docs/configurations/parameters/purchase/invoice-grouping/). 
:::

*Specific button*: 

> **Save Valorization Parameters**: allows you to save the parameters set for valuation.

After selecting the return DDT (from the *Return Filter* tab) and setting the parameters, the invoice can be created with the help of the *Valuation of work account returns* button.

### Previous (Precedenti)

The last tab is the restoration tab: it can be used to filter, view, and cancel operations.

The data in the bottom grids, **Invoices** and **Returns**, corresponds to the valuation selected in the upper grid (after filtering the data). Additionally, in these last two grids, it is possible to view the corresponding invoice and return by double-clicking the row.

*Specific buttons*:
> **Search Returns Valorization**: to search for created invoices and valued returns. The result of this procedure is displayed in the result grid.    
> **Restore Valorization**: to delete the entire selected operation, with all its details displayed in the two underlying grids.