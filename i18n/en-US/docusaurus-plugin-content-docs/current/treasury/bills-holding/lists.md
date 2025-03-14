---
title: Lists (Distinte)
sidebar_position: 3
---

The form for searching lists 
- can be found in Treasury > Portfolio Effects > Effects > Lists

- allows the user to search for previously issued presentation lists in order to view, modify, and possibly delete them.


## Ribbon Bar Buttons

> - **Search Lists (Ricerca distinte):** Button to search for lists according to the search filters set in the header of the form.
> - **New List (Nuovo distinte):** Opens the form to enter a new list.
> - **Modify List (Modifica distinte):** Allows the modification of a previously entered list.
> - **View List (Visualizzazione distinte):** Displays a previously entered list.
> - **Delete List (Cancella distinte):** Deletes a previously entered list.

> Executing the **print** (*Preview* or *Print*) *Presentation list*: launches, for the selected lists with the mouse (holding Ctrl allows multiple lists to be selected simultaneously), the corresponding print available in the [**print menu**](/docs/treasury/bills-holding/reports/print-presentation-lists) of the module.

## Filters in the Header of the Form

- **Type (Tipo):** filters by type of list, this is defined in the table [***Types of Presentation Lists Effects***](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)

- **Bank (Banca):** filters by the **Current account bank** set on the list header.

- **FROM - TO List Number (DA - A Numero distinta):** filters by list number, given by the automatic numbering during the creation of the list.

- **FROM / TO Presentation Date (DA / A data presentazione):** filters by presentation date, a field in the list header generally set to "*today*" but can be changed by the user.

- **Currencies (Divise):** filters by currency, a header data that refers to the currency of the effects contained in the list, for example to extract only items denominated in dollars.

- **Printed (Stampato):** if activated, this flag extracts only printed lists (or those with the *printed* flag as "true").

- **Accounted (Contabilizzata):** if activated, this flag extracts only lists that have been accounted through [the appropriate procedure](/docs/treasury/bills-holding/accounting/lists-accounting) (or those with the *accounted* flag as "true").


## Results Grid

This form presents the same fields present in the filters detailed above.

It also displays the **Total** of the list (sums the amounts of the effects in the list).