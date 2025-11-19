---
title: Cash Flow Management 
sidebar_position: 2
---

From this screen, you can load/edit the cash flow.

From these menu items, it is possible to create/modify the simulation calculations of the cash flow. With manual management, you can enter lines manually or retrieve data through the acquisition button present in the header, selecting the type of flow of interest, which will open the related search and selection mask.

From this mask, it is also possible to view the source document to evaluate its data.

#### Specific Buttons

> **Save**: Saves the cash flow for management.  
> **Search All**: Performs the search for flows for financial accounts.  
> **Search cash flow movements**: Performs the search for movements for forecast flow types.  
> **Transfer**: From this button, the user can select the type of flow from which to retrieve the forecast data to be inserted into the cash flow in use. Each detail of this button will open a specific contextual help for the type of flow, see application a.  
> **New Account Movement**: Activates the cursor for entering a new detail line in the financial accounts movements.  
> **New Flow Mov.**: Activates the cursor for entering a new detail line in the forecast movements.  
> **Restore All**: Deletes all entered movements.  
> **Restore Accounting**: Deletes the movements of financial accounts.  
> **Restore Cash Flow**: Deletes the forecast movements.  
> **View Source Document**: Displays the source document of the selected forecast flow.  

**BUTTON (list) *Transfer*:**

 1. **Mat. values**: the mask allows you to retrieve the accounting parties from accounting;
 2. **Accounting**: the mask allows you to retrieve the balances of the financial account types;
 3. **Extra Accounting**: the mask allows you to retrieve data on extra-accounting cash flow deadlines;
 4. **Invoices (purchase/sale)**: from these masks you can select data from purchase/sale invoice deadlines;
 5. **Orders (customers/suppliers)**: from these masks, you can select simulations of remaining data from customer/supplier orders (printed and confirmed). In case you want to compare the search, for example, with the general order search form (customers or suppliers), keep in mind that: 
- in the cash flow, only unfulfilled orders are selected (by default) (with the possibility of activating the specific flag to search for those partially fulfilled, only, or in addition to the unfulfilled ones, which is still identifiable in the grid);
- orders without line details with a value different from zero are excluded (otherwise they do not generate due dates);
- those forcibly fulfilled are excluded;
- the currency must be non-empty;
- the header account must be valued;
- the order number must be greater than zero;
- the order type must have the cash flow flag (as for the automatic creation of the cash flow);
- the order confirmation date must be valued;
- the order must not have already been included in another calculated cash flow.

The help allows for two search modes: ***View Orders*** which displays the header data of the orders in the lines, and ***View Items*** which displays the order line data (so in the case of multiple lines, the order number and header data will be reported multiple times).

The flag ***Exclude items in sales invoice*** checks if the order lines have already been fulfilled in an invoice or in a DN.

Example: an order with 3 items, the first not fulfilled, the second partially fulfilled, and the third fully fulfilled.

With the flag active:
- in the *View Orders* mode, that order will be extracted because lines 1 and 2 are not fully fulfilled, and the value for the cash flow will be the sum of line 1 and the residual of line 2;
- in the *View Items* mode, only line 1 will be extracted because it is not fulfilled.

6. Unaccounted recipients (Percipienti non contabilizzati): the mask allows you to enter the data of unaccounted recipient compensations into the cash flow;
 7. **DN (sale/purchase)**: the masks allow you to retrieve data from DNs not valued in invoices;
 8. **Subcontractor (orders/returns)**: the masks allow you to retrieve data from subcontractor and related unbilled returns (leave the default settings of both masks).