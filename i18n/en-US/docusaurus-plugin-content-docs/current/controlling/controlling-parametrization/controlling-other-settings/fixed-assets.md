---
title: Fixed Asset Master Data 
sidebar_position: 7
---

First, we need to determine if it is sufficient for us to apply accounting logic, or if our management control needs to detach from this to apply different criteria.

In the first case, we will open the ***Fixed Asset Module Parameters*** to activate the flag *Accounting Center Enable*. With this option, within the fixed asset categories, we will have visibility of the grid of defaults for *Cost Centers* to use, as well as in the header of the fixed asset, where we will have the grid that specifies the *Cost Centers* for each individual fixed asset: in both grids, essentially, I can indicate the list of centers to be valued with the corresponding percentage. When we create our accounting statements through the ***Mid-Year Closing***, we will enter the *Fixed Assets Depreciation Retrieve*, select our closing, and ***FluentisERP*** will propose the calculation of depreciation based on the number of days relevant to the closing itself, applying the category percentages to evaluate them on the centers with this priority: first, the centers entered in the fixed asset header, then moving to the fixed asset category level, and finally those of the cost account in the chart of accounts.

If we are in a company with active *Controlling*, and we want to detach from the accounting logic, we will not set the *Accounting Center Enable* flag, and at this point, the centers will disappear in the categories and in the fixed asset header, and the ***Controlling Settings*** sheet will become mandatory to save a fixed asset.

If we enter a fixed asset master file and go to the Depreciation for controlling tab, we have the following fields available:

- the ***FIXED ASSETS CATEGORIES FOR CONTROLLING***, a mandatory field, which will populate the following common fields with its defaults

- any ***BUY BACK VALUE*** to populate if the calculation base requires it

- the ***TOTAL QUANTITY*** that the fixed asset can manage over its useful life

- the related ***UNIT OF MEASURE***

:::tip Note
The quantity calculation will essentially take the depreciation calculation base, divide it by the total quantity to obtain a unit depreciation, and then, reading the quantities produced in the single period from the fixed asset (values that we typically receive from the ***Data Retrieve from Production***), we will get the depreciation value of the period.
:::

- the ***CALCULATION BASE***, retrieved from the corresponding category, which can be modified in the single fixed asset

- the ***CALCULATION TYPE***, taken from the corresponding category, which can also be modified in the single fixed asset

- the ***PERCENTAGE FOR CONTROLLING*** field to be populated when the calculation type is related to percentage logic, proposed by the corresponding category but can be modified

- the flag ***USE ACTUALIZATION PERCENTAGE***

- the flag ***RECREATE CONTROLLING VALUES***

The last two flags refer to those present in the corresponding category (which should be referred to for the explanations), but like the previous fields, the category setting serves only to propose the respective default of the single fixed asset, because each fixed asset can potentially differ from the category's setting.

Finally, in the grid below, we will define which ***COST CENTERS*** to attribute the fixed asset depreciation to, or potentially also the ***PROJECT*** onto which it will be charged as direct depreciation.

The ***DATE RANGE*** and ***YEAR*** fields will be enabled only if the total depreciation in the year has been set, and it is indeed to define in which year to fully expense it or in which specific period of the year.

:::tip Note
In the fixed asset module, we have the *Data Check for Controlling* form available: this form, very similar to the normal fixed asset search, allows searching for fixed assets that do not have valid links to cost centers in the depreciation tab for *Controlling*. If we open the first one on the list, for example, we can see that it has a percentage of 0 and therefore will not result in any depreciation; the error could otherwise be that there is no cost center entered, or that the multiplier is 0.
:::