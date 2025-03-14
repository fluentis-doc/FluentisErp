---
title: Search Plafond
sidebar_position: 3
---

The Search Plafond form

- is located in Finance > Declarations > Ceiling

- allows the user to search for previously created Ceiling calculations in order to view, modify, or possibly delete them.

From this form, it is also possible to manually enter a new Ceiling calculation using the button [**New plafond**](/docs/finance-area/declarations/declarations/plafond/plafond-management).



## Ribbon Bar Buttons

> - **Search:** Button to search for Ceiling calculations according to the search filters set in the header of the form.
> - **New:** Opens the form to insert a new calculation.
> - **Edit:** Allows modifying a previously entered calculation.
> - **View:** Allows viewing a previously entered calculation.
> - **Delete:** Deletes a previously entered calculation.


## Tables and Preliminary Parameters for Ceiling Management

The setup for the ceiling calculation derives solely from the table [**VAT Rate Modifications**](/docs/configurations/tables/finance/vat-rates): 

The fields of the table involved are:

**Ceiling:** the flag defines which rates are linked to the declarations of intent: this flag identifies the rate that "**consumes**" the general available ceiling month by month as habitual exporters.

**Foreign Sales for Plafond:** this flag identifies the VAT rates present in sales records for the year yyyy, which **increase** the available ceiling for year yyyy+1 as habitual exporters.

The ledger template and the registrant's record do not matter. Credit notes adjust the amounts related to the movements.