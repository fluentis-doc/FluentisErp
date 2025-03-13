---
title: Valorization PurchaseDeliveryNote
sidebar_position: 3
---

The procedure can be accessed via the path **Valorization PurchaseDeliveryNote**. 

It allows for the execution/restoration of the creation of the purchase invoice from one or more purchase delivery notes.

### Valuation

In this tab, the user has the option to input filters to search for the purchase delivery notes to be valued. It is possible to filter by: supplier, type of purchase delivery note, number, date, item, and project.

- **Creation date**: allows specifying the date of the invoice that will be created. 

*Specific button*: 

> **Valorization PurchaseDeliveryNote**: allows valuing the selected delivery notes in the grid, based on the parameters entered in the subsequent *Parameters* tab.

### Parameters

*Insertion on invoice*

- **Recalculate Cost Center/Revenue Center (Ricalcola CdC/CdR)**: used in analytical accounting, it serves to recalculate the cost or revenue centers.  

- **Sort DDT by supplier document number**: if set, it allows inserting the delivery notes into summary invoices sorting them by *supplier document number* instead of *internal number*.  

- **Purchase invoice type**: indicates the type of invoice to create.

*D.N. references*

- **Insert D.N. references**: if this flag is set, in the [Items tab (Articoli)](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) of the invoice, an *Item note (Articolo nota)* will display the references of the delivery note from which the invoice was created. The content of this note must be entered in the *Description* field, according to the parameters described in the label. 

    *Example*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). If the delivery note has number 5 and the date 11.09.2024, the item note in the invoice will be: 'Reference DDT no 5 of 11.09.2024'.

:::tip Remember (Ricorda)
For summary invoicing, it is necessary to set the grouping conditions to be used in the [Invoice Grouping Parameters (Parametri raggruppamento fatture)](/docs/configurations/parameters/purchase/invoice-grouping/). 
:::

*Specific button*: 

> **Save Valorization Parameters**: allows saving the parameters set for the valuation.

After selecting the delivery notes (from the *Valuation* tab) and setting the parameters, the invoice can be created with the help of the *Valorization PurchaseDeliveryNote* button.

### Previous

The last tab is the restoration: it can be used to filter, view, and cancel operations.

The data in the lower grids, **Invoices** and **Delivery notes**, corresponds to the valuation selected in the upper grid (after filtering the data). Furthermore, in these last two grids, there is the possibility to view the corresponding invoice and delivery note by double-clicking on the desired row.

*Specific buttons*:
> **Search Delivery Notes Valorization**: to search for created invoices and valued delivery notes based on the filters set. The result of this procedure is displayed in the result grid.  
> **Restore Invoices (Rirpistino fatture)**: to delete the selected invoice in the lower grid.  
> **Restore Valorization**: to delete the entire selected operation, with all its details displayed in the two underlying grids.