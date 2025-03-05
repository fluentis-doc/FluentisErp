---
title: Fixed Asset Category for Controlling
sidebar_position: 2
---

:::note Path
**Tables > Controlling > Analytic Accounting > Fixed Asset Category for Controlling**

Note:
For anything not detailed in this document regarding the common functionality of forms, please refer to the following link [Custom features, Buttons, and Common Fields](/docs/guide/common).

:::

---

:::tip Note
This table is dedicated to companies that have activated the *Controlling* management, but it is not mandatory if one wishes to apply accounting logic for the valuation of depreciation in management control.
:::

In this table, we will identify the various types of calculations we want to use in the processing of technical depreciation for controlling: the management control logic, relating to fixed assets, diverges from accounting logic in order to utilize principles linked, for example, to the quantities produced by a certain machine, rather than to a buy back value. By doing this, distortions related, for example, to accounting depreciation criteria, which are heavily influenced by tax logic, are avoided.

Table Fields

- ***CODE*** of agent category 

- ***DESCRIPTION*** of agent category 

- ***COST DETAIL ACCOUNT*** and ***FUND DETAIL ACCOUNT*** to use: these could be the same detail accounts associated with accounting fixed asset categories, in order to operate end-of-year reconciliations between the two calculation logics, rather than specific controlling detail accounts that are not used in accounting.

:::tip note
In case specific detail accounts separate from those of general ledger are to be used in controlling, it is advisable to define a specific *Account Type* with the *Controlling* flag set, as these detail accounts cannot be used even mistakenly in general ledger records.
:::


- ***CALCULATION BASE*** we can choose between:
    - *Asset value*, which is the same as accounting
    - *Objective value*, an off-balance sheet value
    - *Buy back value*, a specific field for controlling

- ***CALCULATION TYPE*** can be one of 5 different types:
    - *Percentage*: according to the percentage for controlling set for the individual fixed asset
    - *Perpetual percentage*: like the previous one but without checks on the balance to be depreciated
    - *Quantity*: for fixed assets that have a useful life tied to a theoretical produced quantity (e.g., a mold that can produce a certain number of units)
    - *Perpetual quantity*: like the previous one, but without checking if the total theoretical quantity has been reached
    - *Completely in the year*: to fully depreciate the fixed asset in the year of purchase.

- ***PERCENTAGE*** we can set the percentage of this category, which will be reported on the individual fixed asset, or leave the field blank to enter it each time within the fixed asset

- ***USE ACTUALIZATION PERCENTAGE*** The flag, also reflected in the corresponding tab *Depreciation for Controlling* present in the fixed asset sheet, if activated, causes the fixed asset value to be increased year by year based on the value set in the *Actualization Percentage* field in the ** [*Accounting Parameters*](/docs/configurations/parameters/finance/accounting-parameters) **.

- ***RECREATE CONTROLLING VALUES*** is typically needed if there is uncertainty about the off-balance sheet criteria to apply to the calculation of technical depreciation. Since the processing of depreciation will start from year YYYY, ***FluentisERP*** will first have to calculate the leftovers as of the end of year YYYY-1. If percentages or logics are changed, it may then be necessary to reset this starting data to restart the processing from scratch.

:::danger ATTENTION
Be cautious with the changes made to these categories: for example, if we set a flag and save the row to confirm, ***FluentisERP*** will ask if we want to update the fixed assets of this category. We must be careful that if we confirm the operation and we are in a category with percentage calculation but *without the percentage set*, the system will also reset the percentages in the fixed assets.
:::

---

:::tip Note

The categories entered in this table, with their respective settings, will then be called within the [**fixed asset sheets**](/docs/finance-area/fixed-assets/fixed-assets-management) in the *Depreciation for Controlling* tab, to associate each individual fixed asset with the category.

:::