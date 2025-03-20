---
title: DDT and return valorization
sidebar_position: 5
---

The procedure opens via the path **DDT and return valorization**.

It allows for the execution/restoration of the creation of purchase invoices starting from both purchase delivery notes and return delivery notes.

### Valuation

In this tab, the user has the ability to enter filters to search for purchase and return delivery notes to be valued. It is possible to filter by: supplier, type of purchase note, type of return, number, date, item, and project.

Unlike the two similar procedures [Valuation of Purchase Delivery Notes](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) and [Valuation of Return Delivery Notes](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization), this form displays a row for each item line contained in the document. Consequently, it is also possible to value a single item line.

- **Invoice number and date**: allows specifying the number and date of the invoice that will be created. 

*Specific buttons*: 

> **Valorization**: allows valuing the selected delivery notes in the grid, based on the parameters entered in the subsequent *Parameters* tab.   
> **Show only documents**: this button activates or deactivates the eponymous flag in the filter section, allowing you to choose whether to display a row for every item contained in the documents or only the document header.

### Parameters

#### Purchase Delivery Note Parameters

*Insertion on invoice*

- **Recalculate Cost Center/Revenue Center**: used in analytical accounting, it serves to recalculate the cost or revenue centers.  
- **Sort DDT by supplier document number**: if set, it allows entering the delivery notes into summary invoices sorted by *supplier document number* instead of *internal number*.  
- **Purchase invoice type**: indicates the type of invoice to create.

*D.N. references*

- **Insert D.N. references**: if this flag is set, in the [Items tab](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) of the invoice, an *Item note* will be displayed that will take the references from the delivery note from which the invoice was created. The content of this note must be entered in the *Description* field, according to the parameters described in the label. 
    
    *Example*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). If the delivery note has number 5 and date 11.09.2024, the item note in the invoice will be: 'DDT reference no 5 of 11.09.2024'.

#### Return from Job Order Parameters

*Invoice type*

- **Invoice type**: indicates the type of invoice to create.
- **Sort DDT by supplier document number**: if set, it allows entering returns into summary invoices sorted by *document number*. Alternatively, returns will be sorted by document date.  

*Return references*

- **Maintain return references**: if this flag is set, in the [Items tab](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) of the invoice, an *Item note* will be displayed that will take the references from the return from which the invoice was created. The content of this note must be entered in the *Description* field, according to the parameters described in the label. 

:::tip Remember
For summary invoicing, it is necessary to set in the [Invoice Grouping Parameters](/docs/configurations/parameters/purchase/invoice-grouping/) the grouping conditions to use. 
:::

*Specific buttons*: 

> **Save DDT parameters**: allows saving the parameters set for the valuation of purchase delivery notes.   
> **Save return parameters**: allows saving the parameters set for the valuation of job order returns.

After selecting the DDTs (from the *Valuation* tab) and setting the parameters, the invoice can be created with the help of the *Valuation* button.

### Previous

The last tab is for restoration: it can be used to filter, view, and cancel operations.

In the upper grid, all created invoices are displayed. By selecting one, you can see in the lower grids the **Operator name** and the date of the valuation, along with the **Purchase delivery note** or the **Return from Job Order** from which the invoice was generated, along with the list of valued items. There is also the possibility to open the DDT, the return, or the generated invoice with a double click on the desired row.

*Specific buttons*:
> **Search valorizations**: to search for created invoices and valued DDTs based on the set filters. The result of this procedure is displayed in the result grid.  
> **Restore invoices**: to delete the selected invoice in the lower grid.