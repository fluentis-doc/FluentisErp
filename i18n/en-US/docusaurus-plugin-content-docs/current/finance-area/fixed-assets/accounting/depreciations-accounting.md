---
title: Depreciation Accounting 
sidebar_position: 1
---

LINK:

**[Depreciation](/docs/finance-area/fixed-assets/accounting/depreciation)**

**[Restore](/docs/finance-area/fixed-assets/accounting/restore)**

 

 

The accounting procedure will update the fixed asset records (by adding the Posted flag and consequently updating the value of the depreciation fund and the net book value) and will register the related depreciation movements in accounting.

In order for the procedure to be successful, the following must be met:

- **[General Ledger Parameters](/docs/configurations/parameters/finance/accounting-parameters)** for the reference year must have been created;

- **[Fixed Assets Parameters](/docs/configurations/parameters/finance/fixed-assets-parameters)** must have been created;

- In the **[Fixed Asset Categories](/docs/configurations/tables/finance/fixed-asset-category)** table, accounts related to the depreciation quota and depreciation fund must be defined (for each category);

- The ledger template you wish to use for depreciation accounting must be defined.


### Non-Deductible Depreciation

At the bottom of the form, there is the flag **Use non-deductible account**.  
The value (ON / OFF) of the flag can be predefined in the [**asset parameters**](/docs/configurations/parameters/finance/fixed-assets-parameters).

If active, the non-deductible portion of the depreciation will be automatically recorded in the specific account that has been defined within the table of [**asset categories**](/docs/configurations/tables/finance/fixed-asset-category).

The percentage of non-deductibility of the depreciation is defined through the field ***Deductibility type***, also within the asset categories.