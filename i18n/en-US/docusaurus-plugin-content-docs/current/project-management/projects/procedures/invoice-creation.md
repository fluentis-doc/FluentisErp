---
title: Create Sales Invoice
sidebar_position: 1
---

In the filter area, it is possible to specify a series of filters to search for projects in a more targeted way.

After setting the filters, pressing the **Search** button in the ribbon bar will display the results in the grid. 
At the bottom, it is possible to specify the parameters to use for executing the procedure:

**Invoice type**: contains the type of invoice to create, if it is not set in the table [Project Types (Tipi progetto)](/docs/configurations/tables/project-management/project-type/);

**Creation date**: contains the date when the invoice will be created;

**Grouping the items on invoice**: with this flag, items will be grouped in the invoice;

**Add Projects Reference**: this flag adds the originating project to the invoice;

**Creation of advance invoice (Creazione della fattura di acconto)**: this flag allows for the generation of a potential advance invoice.

It is also possible to choose whether to convert the currency with the **Currency convert** flag, which makes the fields **Currency**, **Rounding**, and **Exchange** editable.

To execute the procedure, once the parameters are set, simply select the project line in the grid and click the **Transfer** button in the ribbon bar.

The results of the procedure are visible in the **Restore** tab. In it, by pressing the **Search** button in the ribbon bar, the operations performed are displayed. By selecting the row of the user who performed the procedure, the lower grids **Invoices** and **Items** show the details of the operation.
If you want to perform a **Currency adjustment rollback** of the procedure, select the chosen row and click **Restore** in the ribbon bar.