---
title: Fixed asset category for controlling
sidebar_position: 2
---

The form can be found at the path: **Tables > Controlling > Analytical Accounting > Fixed asset category for controlling**

:::tip Note
This table is dedicated to companies that have activated *Controlling* management, but it is not mandatory if accounting logic for valuating depreciation in management control is to be applied.
:::

In this table, we identify the various calculation types that we want to use in processing technical depreciations for controlling: the management control logics, regarding assets, differ from accounting logics in order to use logic related, for example, to the quantities produced by a specific machine, rather than a repurchase value. This avoids distortions related, for example, to accounting depreciation criteria that are heavily influenced by tax rules.

#### Specific Fields

- **Code** of the category

- **Description** of the category

- **COST SUBACCOUNT** and **FUND SUBACCOUNT** to use: these could be the same subaccounts associated with accounting asset categories, in order to perform year-end adjustments between the two calculation logics, or specific controlling subaccounts that are not used in accounting.

:::tip Note
In cases where it is desired to use specific subaccounts in controlling, separate from those of general accounting, it is recommended to define a specific *Account type* with the *Controlling* flag set, as these subaccounts cannot even mistakenly be used in general accounting entries.
:::

- **Calculation base** we can choose from:  
    - *Asset value*, which is the same as accounting
    - *Objective value*, given off-book
    - *Repurchase value*, a specific field for controlling

- **CALCULATION TYPE** can be of 5 different types:  
    - *Percent Completed*: according to the percentage for controlling set in the individual asset
    - *Perpetual percentage*: like the previous one but without checks on the remaining balance to be depreciated
    - *Quantity*: for assets that have a useful life related to a theoretical quantity produced (e.g. a mold that can produce a certain number of impressions)
    - *Quantity perpetuates*: like the previous one, but without checking if the total theoretical quantity has been reached
    - *Completely in the year*: to fully depreciate the asset in the year of purchase.

- **Percent Completed** we can set the percentage for this category, which will be indicated on the individual asset, or leave the field blank to enter it each time within the asset.

- **Use Actualization Percentage** The flag, also shown in the corresponding tab *Depreciation for controlling* in the asset sheet, when activated, allows the asset value to be increased year by year based on the value set in the *Actualization Percentage* field in the **[*Accounting Parameters*](/docs/configurations/parameters/finance/accounting-parameters)**.

- **Recreate controlling values** is typically needed in cases where there is uncertainty about the extra-accounting criteria to be applied to the calculation of technical depreciations. Since the processing of depreciations will start from year YYYY, **FluentisERP** must first calculate the balances at the end of year YYYY-1. If percentages or logics are changed, it may therefore be necessary to reset this starting data to restart the calculations.

:::danger WARNING
Be cautious with the changes made to these categories: for example, if we set a flag and save the row to confirm, **FluentisERP** will ask us if we want to update the assets in this category. We must be careful that if we confirm the operation and are in a category with percentage calculation but *without the percentage set*, the system will also reset the percentages in the assets.
:::

:::tip Note
The categories entered in this table, along with their settings, will then be referenced within the [**asset sheets**](/docs/finance-area/fixed-assets/fixed-assets-management) in the *Depreciation for controlling* tab to associate the individual asset with the category.
:::