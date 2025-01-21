---
title: Fixed Assets Depreciation Retrieve
sidebar_position: 3
---

Within the mid-year closing module, after creating a mid-year closing, it is possible to automatically value the depreciations relevant to the economic period set within it.

## Depreciation 

Upon opening the form, the following must be set at the bottom:

- the **Incremental Closing** (from which the range of economic competence dates is read);

- the **Registration Date** of the movement in the extra-accounting records;

- the **Template** to be used (it is also necessary that the template allows for the management of cost centers/job orders to value them in the registration).

The flag **Single Recording** is used to create a single extra-accounting registration containing the various depreciation/funds detail accounts. 

It is interesting to note that within the upper search filters, there is a flag to search for assets belonging to the 'incremental' categories or not.

When the data search is launched, the program will populate the form grid with the data of the depreciations to be calculated, proportional to the number of days of the closing's competence. In particular, for each asset, it will be checked if the depreciation of the year (from the year set as the closing parameter) is already present in its record, and this value will be recalibrated to the number of days: if it is not present, a calculation will be simulated (based on the parameters of the category of belonging and available residuals) and then this value will be proportioned to the number of days of competence.

Remember to select all the rows present in the grid to value them in the closing.

## Previous 

In this tab, it is possible to cancel the operation performed in the previous tab, *Depreciation*.