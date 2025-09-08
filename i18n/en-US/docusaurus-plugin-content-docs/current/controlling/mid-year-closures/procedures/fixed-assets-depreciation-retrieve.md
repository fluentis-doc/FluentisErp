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

In the search filter section, there is the flag **Incremental Operations**. The depreciation must be carried out in two stages, extracting the assets belonging to categories WITH the flag active and WITHOUT it. Value defined within the table of [**asset categories**](/docs/configurations/tables/finance/fixed-asset-category).

When the data search is launched, the program will populate the form grid with the data of the depreciations to be calculated, proportional to the number of days of the closing's competence. In particular, for each asset, it will be checked if the depreciation of the year (from the year set as the closing parameter) is already present in its record, and this value will be recalibrated to the number of days: if it is not present, a calculation will be simulated (based on the parameters of the category of belonging and available residuals) and then this value will be proportioned to the number of days of competence.

Remember to select all the rows present in the grid to value them in the closing.

### Non-Deductible Depreciation Indeducibile

At the bottom of the form, there is the flag **Use non-deductible account**.  
The value (ON / OFF) of the flag can be predefined in the [**asset parameters**](/docs/configurations/parameters/finance/fixed-assets-parameters).

If active, the non-deductible portion of the amortization will be automatically accounted for in the specific account that has been defined within the table of [**asset categories**](/docs/configurations/tables/finance/fixed-asset-category#seconda-tabella).

The percentage of non-deductibility of the amortization is defined through the field ***Deductibility type***, also within the asset categories.

## Previous 

In this tab, it is possible to cancel the operation performed in the previous tab, *Depreciation*.