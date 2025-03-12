---
title: Fixed Fixed Asset Category
sidebar_position: 5
---

:::tip[FAst Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure it manually, please refer to the checklist on the linked page.
:::

Within this table, the categories of assets managed within the company are encoded.

### Upper Table

**Category**: alphanumeric code.

**Category Description**: description of the category.

**Account**: the balance sheet account for the fixed asset.

**Detail account**: the balance sheet subaccount for the fixed asset.

**Description**: description of the balance sheet subaccount for the fixed asset.

**Mat/Immaterial (Mat/Imm.)**: indication of the type, Material or Immaterial, of the asset.

**Max Depreciation Amount (Massimale amm.)**: maximum depreciation amount achievable for each asset in the category.

**Perc. Depr.**: the maximum percentage of the asset's value that can be depreciated.

**Incremental oper.**: if the flag is not set, as is default, each line of increment of the asset's value will be managed with a separate and autonomous depreciation detail. If the flag is set, on the contrary, each increment will be attributed to the initial purchase line, always increasing the initial value at its origin date.

**Total Depreciation Limit (Limite amm. totale)**: limit for the application of total depreciation at 100% in the year of purchase.

**Revaluations (Rivalutazioni)**: flag for managing the details of revaluations.

**Budget Code (Cod. bilancio)**: budget code for printing the revaluation report.

**Extra accounting values**: activates the management of the extracontable data of the asset: this involves a duplication of accounting balance sheet values in order to apply a separate extracontable depreciation logic.

**Days**: By activating this flag, the calculation of the depreciation quota will take into account the exact days of possession of the asset in the current year, rather than referring to the standard logic that calculates the full quota regardless of the purchase date, possibly halving it in the first year if the flag *First Year Depreciation (Amm. Primo anno)* present in the second grid has been activated (see below).

**Numeration**: (Optional) Allows defining a specific asset sheet numbering for each individual category. The field connects to the [**appropriate table**](/docs/configurations/tables/fluentis-numerations) where the numerator is defined. If not defined, by default, the general numbering of assets possibly linked to the precode (or unique) will continue to be used.

### Second Table

The second section is dedicated to setting up the depreciation details applicable to the selected upper category.

**Depr. type**: select the type of depreciation between ordinary depreciation, accelerated depreciation, and decelerated depreciation, the latter normally not used.

**Account**: cost account on which to record periodic depreciation.

**Detail account**: cost subaccount on which to record periodic depreciation.

**Account description**: description of the cost subaccount.

**Fund account**: fund account to which periodic depreciation is allocated.

**Fund det.acc.**: fund subaccount to allocate periodic depreciation, which could also be the same active balance sheet value to directly write off the amount.

**Account description**: description of the fund subaccount.

**Exclude**: the flag allows excluding the selected depreciation type from the automatic depreciation calculation.

**Percent Completed**: the depreciation percentage to be applied for the set depreciation type.

**Year no.**: activated only for accelerated depreciations, in which the 3 years of application must be entered. Regarding this value, it should be noted that for used assets, the number of application years is automatically set to the purchase year only.

**First Year Depreciation (Amm. primo anno)**: automatically proposed for all material categories, it will halve the depreciation percentage in the asset's start activity year.

**Fiscal**: can be set for accelerated depreciation rows to manage it as non-accountable fiscal depreciation.

**Deductibility Type (Tipo deducibilità)**: allows assigning a deductibility code for tax purposes to the type of depreciation.

**Deductibility Description (Descr. deducibilità)**: description of the deductibility type.

#### Specific Buttons

**Search in the Table Above**: allows searching in the upper table through the category and description filter fields.  
**Insert in Upper Table (Inserisce nella tabella superiore)**: allows inserting a new asset category.  
**Insert in Detail Table (Inserisce nella tabella dettaglio)**: allows inserting details of the selected upper table.  
**Insert in Cdc Table (Inserisce nella tabella Cdc)**: allows inserting the Cdc of the selected upper table. OBSOLETE  
**Delete selected lines**: allows deleting the selected rows (asset category).  
**Delete Selected Lines from the Table Below**: allows deleting the selected rows from the lower table (details of the depreciation type).  
**Delete Selected Rows from Cdc Table (Cancella righe selezionate dalla tabella Cdc)**: allows deleting the selected rows from the cost centers table. OBSOLETE  
**Save**: allows saving changes.  

### COST CENTERS GRID (REMOVED IF THE COMPLETE CONTROLLING MODULE IS ACTIVE IN THE COMPANY TABLE, WITHOUT THE COST CENTER USAGE PARAMETER)

:::note NOTE
Although the management of cost centers for assets can be processed with more sophisticated objective depreciation management logic, useful for the needs of in-depth management control, it is still possible to attach a specific cost center for each asset, **in the Detail tab** (or directly on the asset category, but in that case, it is necessary to deactivate the Controlling Management flag in the registry of the operating company) to value it with the annual quota calculated for fiscal and accounting purposes.
:::

Within the asset sheet in the cost centers grid of the **Asset Operations** tab, it is possible to assign, for the **single depreciation line**, the default percentage valuation to the cost center for assets linked to the category. This setting is secondary to the assignment of cost centers within the individual asset registry (that of the Detail tab).

**CDC**: cost center to which to assign the valuation of the assets belonging to the category.

**Description**: cost center description.

**Percent Completed**: setting of the valuation percentage to the cost center.

### **VIDEO TUTORIALS**
:::important See Also
[**VIDEO TUTORIALS ON ASSET TABLES**](/docs/video/finance/intro.md)
:::