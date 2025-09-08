---
title: Patrimonial operations
sidebar_position: 2
---

Within this tab, the details of various asset transactions are entered.

Thus, it represents, along with the Detail tab, the main section of the asset sheet.

| Function | Extended Description |
| --- | --- |
| New operation | Activates the cursor in the first grid of asset transactions. |
| Delete operation | Deletes the selected operation in the asset transaction grid. |
| New depreciation | Activates the cursor in the second grid of depreciations. |
| Delete depreciation | Deletes the selected depreciation in the depreciation grid. |
| Execute automatic depreciation | Calculates the depreciation of the asset in use for the year set in the field immediately above the depreciation grid. |
| Insert cost center | Activates the cursor in the cost center grid. |
| Delete cost center | Deletes the movement of the selected cost center in the grid. |
| Calculate cost centers | Executes the calculation of cost centers for the value of the selected depreciation line. |
| Insert job orders | Activates the cursor in the job orders grid. |
| Delete job orders | Deletes the selected job order calculation in the grid. |
| Calculate job orders | Executes the calculation of the job order for the value of the selected depreciation line. |
| Revaluation details | Opens the management of revaluation details. The button is active only if the 'revaluations' flag is set for the category of the asset in use. See application a. |
| Documents | Management of the document archiving associated with the mask in use. |

### UPPER GRID 

This grid is used both for acquisition (or increase) operations of the asset and for sale operations (total or partial).

The first row is always used for the initial purchase of the asset: the **date of the transaction**, its **progressive number**, and the subsequent **amount** entered in the relevant column:

**Purchase value**: if the amount relates to a purchase operation and thus represents the historical cost;

**Alienation**: if the amount refers to a total alienation and represents the sale value;

**Partial sale**: if the amount refers to a partial alienation and represents the sale value;

If quantity management is active, the **quantity** field must also be filled in.

:::danger NOTE:
In the case of loading a pre-existing historical asset, the amount of already calculated depreciation funds **MUST NOT** be directly entered in this section but recorded in the section below (by entering the total accumulated depreciation in a single depreciation entry with the year equal to the year prior to the insertion date) **Accounted*** by checking the corresponding flag to ensure that this section is recalculated by the ERP. **See the corresponding tutorial video.**
:::

**![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image01.png)**

When entering a row related to an asset transaction (e.g., purchase, but also alienation) and setting the corresponding amount in the appropriate column (e.g., original cost in the case of purchase), you will notice that the fields highlighted in yellow are automatically updated by the program.

**Amount to be depreciated**: load value (purchase or otherwise historical cost loaded) on which to calculate depreciation;

**Book value**: Historical Cost - Accumulated Depreciation Fund;

**Already depreciated**: Provisional value that will be updated at the time of depreciation calculation and will then be reset again by updating the total accumulated depreciation (at the time of depreciation posting).

### CENTRAL GRID Depreciations:

Presents the list of depreciations calculated for the asset: entry can be manual or automatic. 

- Manual entry requires indicating the reference year, the progressive line number (but only for non-incremental categories; for others, the field is hidden as depreciation will always be linked to progressive 1), and the type of depreciation to apply: at this point, the ERP will report the settings of the reference asset category, with a main account and detail account for posting the quota, the percentage, and amounts (values that can be forced and modified at will). At the end of the grid, the reference date of the depreciation is proposed as the end of the financial year of reference for the row, and finally, the amounts of deductible and non-deductible depreciation quotas are shown.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image02.png)

- Automatic entry requires defining the reference year in the field above the grid and using the *Execute automatic depreciation* management button, which will report the expected depreciation data in the category for all the assets in use.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image03.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image04.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image05.png)

The depreciation calculation will be reported in the ***Already depreciated*** column of the upper grid, which will serve to indicate a non-definitive amount: only with the indication of the **Accounted*** flag in the various rows, higher amounts will be allocated to the column of the fund related to the type of depreciation itself. 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image06.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image07.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image08.png)

:::danger Note
Manual entry of the flag **DOES NOT** register in the accounting (for this, there is the depreciation posting procedure): it is normally used only for the initial manual loading of the historical situation, for which, as a rule, a unique entry of the total accumulated depreciation for the year preceding the start of using the management system is made and not all the depreciation details. 
:::

When saving the row with the *Accounted* flag, Fluentis will ask if you want to link an already existing accounting entry, to which the usual (in case of recovering historical data) answer is negative.

The fiscal depreciation flag provides for the fiscal management of the depreciation row: it is proposed based on the same flag provided in the asset category. In some cases, it can be used manually to record in the asset book the rotation of early depreciations used in the ordinary financial statements to manage fiscal depreciations only for tax calculation. Fiscal management, on the other hand, occurs through the valuation of the fields with the deductible/non-deductible amounts of the depreciation, automatically valued based on the percentage of deductibility associated with the asset or its category.

### Non-Deductible Depreciation

There are two columns for calculating the *deductible* and *non-deductible* portions of amortization.

The percentage of non-deductibility of amortization is defined through the field ***Deductibility Type*** within the [**asset categories**](/docs/configurations/tables/finance/fixed-asset-category#seconda-tabella).

The **Account / Detail account / Non-deductible Description** is automatically populated if the accounting account to be used automatically has been defined within the asset category in conjunction with the Deductibility Type.

If the flag **Use non-deductible account** is activated in the automatic amortization accounting procedures, the portion of amortization that is not tax-deductible will be automatically accounted for in the specific account.

In the last section, there is a detailed valuation by cost center of the depreciations selected in the second grid.

### Loading a Pre-existing Fixed Asset 

To insert existing assets into the system at the start of registrations, with the related depreciation fund situation, proceed as follows:
1. Insert a new asset sheet with the demographic data of the asset: description, category, etc. (Detail tab *Dettaglio*) and pay attention to the **start date of activity** that must be the historical one.

2. In the *Patrimonial operations* tab, enter the historical cost indicating the purchase date and filling in the **Purchase value** field.

3. **DO NOT** manually fill in the *Depreciation fund* field in the row (otherwise it would be overwritten in the next depreciation), but enter a row (below) in the Depreciation grid with the year equal to the year prior to the insertion year and the total of the already calculated depreciations. And set the posted flag. The depreciation must be entered in the cost field (imposing it regardless of the other previous fields.)

### Management of Asset Alienation (cases of partial alienation)

#### Case of already depreciated asset
This is a valid example if the asset has not been managed through components or increases but indivisibly.

1. The automatic accounting entry is not managed, so the asset can also be managed from within the sheet and then make the entry Dep. Fund to Asset separately.
2. To partially unload the asset, enter a negative amount in the fund column for an amount corresponding to the historical cost portion sold or destroyed.
3. In the Partial alienation column, always indicate the value at which it is sold (or 0.00 if destroyed).
4. The original cost divested column will update automatically.


#### Case of NOT fully depreciated asset

Initial situation

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling1.png)

To partially unload the asset, enter a negative amount in the fund column for an amount corresponding to the portion of the fund set aside proportional to the historical cost sold or destroyed.

In the Partial alienation column, indicate the value at which it is sold (or 0.00 if destroyed; in this case, you can also indicate the value in the Destruction column).
The original cost divested column will automatically calculate.

The calculation done in the original cost divested column also takes into account the capital gain/loss on sale, which must be entered considering the portion of net book value that is ceded.

**Example 1:** 
Historical cost 1000, depreciated by 125.
I sell half for the price of 200.

I adjust the set-aside fund for half, thus -62.50, and have a sale value (be careful to fill in the Partial alienation column; otherwise, if I fill in the total alienation column, it forces me to unload the entire historical cost) of 200.

Thus, I will need to calculate the loss to enter based on half of the net book value, thus 875 / 2 = 437.50.
Loss = 437.50 – 200 = 237.50

The original cost divested field is automatically calculated to 500, which is the historical cost actually unloaded from the asset book for half.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling2.png)

**Example 2:** 
Historical cost 1000, depreciated by 125.
I dispose of half at price 0.00.

I adjust the set-aside fund for half, thus -62.50, and have a sale value (be careful to fill in the Partial alienation column; otherwise, if I fill in the total alienation column, it forces me to unload the entire historical cost) of 0.00.

Thus, I will need to calculate the loss to enter based on half of the net book value, thus 875 / 2 = 437.50.
Loss = 437.50 – 0 = 437.50.

The original cost divested field is automatically calculated to 500, which is the historical cost actually unloaded from the asset book for half.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling3.png)

:::tip[Tip]
Asset alienation, particularly in simpler cases of total alienation, can be managed more automatically through the accounting entry of the sale made with a rationale that has enabled the functionality for assets and with operation type Total alienation (or partial).

In the entry, the [**specific Asset section**](/docs/finance-area/ledger-records/records/ledger-record) will appear.