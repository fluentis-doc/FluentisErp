---
title: Off-balance Due Date
sidebar_position: 3
---

The form is located in Treasury > Cash Flow > Cash Flow > Off-balance Due Date (Scadenze extra-contabili).

With this mask, it is possible to manage the extracontablen deadlines that are read in the appropriate cash flow stream (defined in the table [**Flow Types**](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types) by the *Extracontablen* flag), such as forecasting outflows for taxes, salaries/wages, etc.

## How to enter an extracontablen deadline for cash flow reading

Directly enter the expected deadlines in the grid.

- The **Due Date Types** field is linked to the corresponding table where you can freely define a "label" to represent the type of deadline.
- The Deadline Date (Data scadenza) will define the representation in the cash flow (in the corresponding month) as it is considered the date of manifestation of the financial flow we are entering.
- The Currency (Divisa) will be proposed as the one of the company (e.g., Euro) and can be changed to enter a flow in foreign currency; in this case, the exchange rate will also be managed based on the deadline date.
- The amount in currency (importo in valuta) is that denominated in the selected currency in the previous field, while the Debit amount (Dare) (positive financial flow, e.g., a receivable) or Credit amount (Avere) (negative flow, e.g., a debt) are denominated in the company's currency (e.g., Euro).
- The **closed** (chiusa) flag can be used to exclude the row from future simulations without needing to delete it, in case you wish to keep and archive it.

**Specific buttons (Pulsanti specifici)**

**Search**: Button to apply search filters to the list of extracontablen deadlines.

**New**: Sets the cursor to enter a new extracontablen deadline.

**Cancel**: Deletes the selected extracontablen deadline.