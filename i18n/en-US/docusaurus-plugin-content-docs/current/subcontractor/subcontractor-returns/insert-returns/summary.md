---
title: Summaries (Riepiloghi)
sidebar_position: 6
---

The summaries present the main information of the entire document.

## Final Discounts on Items (Sconti finali articoli)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Expenses (Spese)

The expenses entered in the contact registry are proposed in the tab *Charges/Discounts*. In this grid, any expenses should be entered as positive, and any discounts as negative.      

These elements are applied to the entirety of the document and are not distributed among the item lines. They can include additional costs, global discounts, or surcharges applied to the entire document. If set in the item registry, they will be automatically proposed when the document is created.

- **Type/Description (Tipo/Descrizione)**: allows you to choose the types of expenses (predefined in the table [Expense Types](/docs/configurations/tables/general-settings/expenses-types)), assigning to the type the percentage of expense to apply.  
- **Charge amount**: indicates the value of the expense expressed in the currency of the document.    
- **VAT**: indicates the VAT rate to be applied to the entered expenses.   
- **Percentage/Value**: indicates whether to calculate the expenses with a percentage or with a predefined monetary value. By selecting *Value*, the expense amount should be entered under the homonymous entry.      
- **Percent Completed**: numerical value of the expense percentage.  

:::note Note
If the *Charge type* entered has the [split](/docs/configurations/tables/general-settings/expenses-types#flag-di-aggancio-alle-logiche) flag active, during the restocking process, the expense will be distributed across all items based on the total amounts of each item line. The result of the expense allocation is visible in the [warehouse record](/docs/logistics/warehouse/stock-records/record).    
1. If the items have a price: the total expense will be allocated proportionally to the net amounts of each item; the result will be added to the initial price of the item in the *Total amount* field of the record. If for some lines the amount is 0, it will be considered as 1 to allow an allocation of the expense across all items.   
2. If all items have a price of 0: the expense will be distributed equally among all item lines, and from this distribution, the *movement amount/management amount (importo movimento/importo gestionale)* will be calculated in the record, taking into account the quantities of each item.   
:::

## Document Totals (Totali documento)

**Items gross amount**: represents the sum of the values of all items;  
**On-account**: represents the value of any deposit received for the document;  
**Amount giveaway**: represents the amount of gift-type items entered in the *Items* tab;  
**Total discounts applied**: represents the total value of discounts applied to the items, excluding the final discounts;  
**Items net amount**: *Gross Amount of Items* – *Total Discounts Applied*;  
**Total final discounts**: represents the value of final discounts expressed as a percentage of the gross amount of items;  
**Net Amount of Final Discounts (Importo netto sconti finali)**: *Net Amount of Items* - *Total Final Discounts*;  
**Collection charges**: represents the sum of collection expenses entered in the *Charges* grid;  
**Stamp charges**: represents the sum of stamp duty expenses entered in the *Charges* grid;   
**Origin amount**: *Net Amount of Items* – *Final Discounts* + *Total Undocumented Expenses (Totale spese non documentati)* + *Total Documented Expenses (Totale spese documentati)*;  
**VAT**: represents the sum of the values contained in the VAT summaries;  
**Total**: *Taxable Amount* + *VAT*.