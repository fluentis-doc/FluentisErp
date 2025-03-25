---
title: Sales Invoice Shipping from Warehouse 
sidebar_position: 2
---

The procedure opens through the path **Sales > DN > Procedures > Shipping invoices from warehouse**. 

This procedure allows you to execute/restore the automatic shipping operations from the warehouse of the items present in the invoice. 

### Filter 

In this tab, the user has the option to search for and transfer invoices that have set the *Printed* flag within them.

**Warehouse posting date**: allows you to specify the date related to the shipping from the warehouse, except for the setting *Create the registration with the document date* in the *Sales Invoice Parameters > Shipping tab*.

*Specific buttons*:

> **Search**: allows searching for invoices to be shipped.  
> **Unload**: allows executing the shipping of the selected invoices from the warehouse, based on the shipping algorithms and the parameters entered in the subsequent *Parameters tab*. 

### Parameters 

In this screen, the user has the opportunity to specify, for item lines, how to handle exceptions.

In this case, if the invoice lines have not specified the warehouse and the reason for shipping, the available options are:

- **Do not perform full invoice shipping**: does not allow partial shipping of the DN;

- **Ignore item without warehouse and template**: allows partial shipping of the document;

- **Accept the following data as warehouse and reason**: for all items found without warehouse and reason in the selected invoices in the filter section, set the data entered right after, in the fields: *Warehouse* and *Template* (ensures complete shipping of the document).

*Specific button*

> **Save Parameters**: allows saving the parameters set for the registration.

After selecting the invoices (from the *Filter tab*) and setting the parameters, the invoices can be shipped using the *Unload* button.

### Summary 

In this tab, the user has the option to search, view, and cancel the shipping operations carried out that meet the specific conditions for canceling warehouse registrations.

The data in the grids below, **Invoices** and **Record**, correspond to the selected shipping registration in the upper grid (after filtering the data). Additionally, in these last two grids, there is the possibility to view the invoice and its warehouse registration (double click on the row).

*Specific buttons*:
> **Search Unloaded Invoices**: to search for shipped invoices. The result of this procedure is displayed in the result grid.  
> **Delete unload**: to completely delete the selected shipping operations in the result grid.  
> **Restore Invoices**: to delete the shipping operations selected in the result grid for the invoice in use in the detail grid.



<iframe width="560" height="315" src="https://www.youtube.com/embed/MWEUxnmD1hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>