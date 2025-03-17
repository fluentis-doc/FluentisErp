---
title: Lists 
sidebar_position: 3
---

The form for searching lists 
- can be found in Treasury > Portfolio Bills > Bills > Lists

- allows the user to search for previously issued presentation lists in order to view, modify, and possibly delete them.


## Ribbon Bar Buttons

> - **Search Lists:** Button to search for lists according to the search filters set in the header of the form.
> - **New List:** Opens the form to enter a new list.
> - **Modify List:** Allows the modification of a previously entered list.
> - **View List:** Displays a previously entered list.
> - **Delete List:** Deletes a previously entered list.

> Executing the **print** (*Preview* or *Print*) *Presentation list*: launches, for the selected lists with the mouse (holding Ctrl allows multiple lists to be selected simultaneously), the corresponding print available in the [**print menu**](/docs/treasury/bills-holding/reports/print-presentation-lists) of the module.

## Filters in the Header of the Form

- **Type:** filters by type of list, this is defined in the table [***Types of Presentation Lists Bills***](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)

- **Bank:** filters by the **Current account bank** set on the list header.

- **FROM - TO List Number:** filters by list number, given by the automatic numeration during the creation of the list.

- **FROM / TO Presentation Date:** filters by presentation date, a field in the list header generally set to "*today*" but can be changed by the user.

- **Currencies:** filters by currency, a header data that refers to the currency of the Bills contained in the list, for example to extract only items denominated in dollars.

- **Printed:** if activated, this flag extracts only printed lists (or those with the *printed* flag as "true").

- **Accounted:** if activated, this flag extracts only lists that have been accounted through [the appropriate procedure](/docs/treasury/bills-holding/accounting/lists-accounting) (or those with the *accounted* flag as "true").


## Results Grid

This form presents the same fields present in the filters detailed above.

It also displays the **Total** of the list (sums the amounts of the Bills in the list).