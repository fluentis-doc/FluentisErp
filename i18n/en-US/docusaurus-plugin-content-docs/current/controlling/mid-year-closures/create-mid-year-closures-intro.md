---
title: Create Mid-Year Closures 
sidebar_position: 3
---

The procedure allows creating new mid-year balance sheet simulations.

The source of the starting data is always the General Ledger at the time of creating the closure itself: the program retrieves the balances of the various detail accounts, according to the closure creation parameters set in this form, to then allow the off-balance addition of all accruals, deferred charge, depreciations, and manual records to arrive at a balance sheet simulation including the necessary adjustments and corrections. The operation has no effect on general ledger data for the purpose of year-end closure: the mid-year closures module is, in fact, managed in database tables completely separate from general ledger.


## Tab *General*

Flag **Select data for department**: if set, the previous field for the division becomes a filter to retrieve only the data of the set division from accounting.

**Accounting year**: the reference year of the data, used to identify the default accounts for adjustment records and the related accounting periods.

**Exclude causal**: in the case of retrieving data for an entire closed fiscal year, allows excluding closure account records and thus obtaining the financial data for the year.

**Area**: the field is visible only in companies that manage Controlling. The area of Finals to associate with the dataset being processed will be selected.



### Section **Retrieve of Asset Values**

The flag for **Retrieve of movements with patrimonial nature**, which is present by default, enables the underlying filter section. With this option, the ERP will also include the balances of the detail accounts linked to account types that have the flag **Active Patrimonial** or **Passive Assets** in the mid-year closure.

The section of filters for registration date and maturity date allows defining the date ranges that will be used to retrieve asset data from the records of the set period.

:::tip NOTE
In particular, if the closure and re-opening of accounts have not yet been registered in accounting, the start date must be retrodated to the last account opening date recorded in accounting, to ensure a correct asset figure.

It should be noted that, in this case, there will be a difference between the asset balance and the economic balance of the current year, corresponding to the profit/loss of the previous year not yet recorded in the general ledger closure/re-opening: upon launching the creation, Fluentis will ask if you want to value this difference on the predefined profit or loss accounts in the accounting parameters, obtaining a balanced record; whereas if this option is not used, there will be an imbalance in the record, and thus, for the proper execution of the closure operation itself, the template must allow saving imbalanced records.
:::


If the closure does not foresee the asset retrieve, again, the registration of mid-year closure (of the economic section only) will imbalance for the profit/loss of the period.

### Section **Retrieve of Economic Values **

The flag for **Retrieve of movements with economic nature**, which is present by default, enables the underlying filter section. With this option, the balances of the detail accounts linked to account types that have the flag **Economic Costs** or **Economic Revenues** are included in the mid-year closure.

The section of filters for registration date, maturity, and document allows defining the ranges of dates that will be used to retrieve data from the records of the set period.

:::tip NOTE
The document date range, which is not set by default, is usually not specified: not all ledger records have document dates in the header (typically only the records for purchase/sale invoices).
:::


If the closure does not foresee the economic recovery, the registration of the interim closure (of the asset section only) will imbalance for the profit/loss of the period. 

### Section **Data for accounts closing**

The section presents the identifying elements that will be attributed to this balance sheet simulation.

**Temp. of acc. closing**: it is the template to be used to create the balance retrieve record. It is noted that this template must have the flags for CDC/CDP/projects so that these elements are considered in the mid-year closure itself.

**Closed date**: it is the creation date of this simulation, which will be used as the date of the off-balance closure record and for other records. It has no particular significance.

**Closing Number**: it is the progressive number of the closure, automatically proposed by the system.

**Closing descr.**: it is the description that will appear in all screens of the Mid-Year Closures module, in the Balance Sheet and Budget modules. It is advisable to clearly describe the date ranges set so that one understands the simulated period when selecting the closure in the various procedures in the Controlling area.

**Economic Competence From/To**: this date range is mandatory to proceed with the creation of the mid-year closure. It indicates the period of economic competence of interest: it will thus be taken as a reference for the calculation of adjustment/integration records, for the calculation of the retrieve of the current period's depreciations, and generally for the various downstream procedures. To exemplify, if the records of the first half of the year X have been retrieved and the same semester has been entered as the range of economic competence, the adjustment procedures will check if there are any accounting lines with competence ranges outside of this semester in order to record their related deferral.

### Section **Closure Options**


**Closure for Job Order**: with this flag, the program will create an mid-year closure record for each sales order that was recorded in the ledger records of the set filter period. It is noted that the mid-year closure template must foresee the management of the job orders (projects) to manage their data.

**Consider temporary recordings**: with this flag, the retrieve of data from accounting will also consider ledger records with the status 'temporary'.

### Calculated Values 

This section offers the total asset/economic values calculated from the first closure record made. 

(with flag **Closure for Job Order**, this section will only display data from the first identified order in the period).

### Rectification and Integrations

The section allows managing automatically, at the end of the mid-year data retrieve record, the related adjustment and integration records.

:::note Note
This type of adjustment records is done automatically only for movements of the economic detail accounts linked to an account type that has the *Service* flag set. 
:::

The reference for adjustments/integrations is to the **competence date range** entered in the journal records (and in the cost/profit centers for the analytical part).

**Automatic adjustment entries (Scritture di rettifica in automatico)**: setting the flag will activate the section for automatic adjustments. It is necessary to set the reason that will identify the operation. Also here, to adjust the CDC/CDP movements, it will be necessary for the reason to foresee their management.

The recommended settings are to use the **group by registration** option and, above all, the **solar calendar**.

:::tip Note
The sub-accounts of deferral to be used will be those entered in the chart of accounts corresponding to the individual cost/revenue sub-account or the generic sub-account entered in the accounting parameters for the year of the interim closure itself.
:::

This flag automatically creates what the user can also manage separately after processing the closure balance in the dedicated *Adjustment Entries* procedure always referred to the interim closures menu (*procedure*).

**Automatic integration entries (Scritture di integrazione in automatico)**: setting the flag will activate the section for automatic integrations. It is necessary to set the reason that will identify the operation **and the maturity start date**. 

Also here, to integrate the CDC/CDP movements, it will be necessary for the reason to foresee their management.

The default setup of the solar calendar is what is recommended to use.

With this flag, the program will verify, **starting from the *Maturity Start Date for Integration Entries*,** the cost/revenue lines present in accounting and not included in the closure (i.e., entries outside the set registration/maturity dates), to create accruals for the days within the set maturity date ranges for the closure.

:::tip Note
The sub-accounts of accrual to be used will be those entered in the chart of accounts corresponding to the individual cost/revenue sub-account or the generic sub-account entered in the accounting parameters for the year of the interim closure itself. 
If the cost/revenue has economic maturity **entirely included in the interest range of the closure** and is in an accounting entry with the header sub-account valued, then Fluentis assumes it is an entry of an invoice to be received/sent and will use these sub-accounts taking them from the customer/supplier registry or the accounting parameters of the selected year, instead of the accrual sub-account.
:::

This flag automatically creates what the user can also manage separately after processing the closure balances in the dedicated *Integration Entries* procedure.

:::danger IMPORTANT
Particular attention must be given to the **maturity start date** to be set. 

Normally, this date will be set equal to the date of the last account opening recorded in accounting. 

Example: if we are creating the closure for the first quarter of the year, the date range for the economic section will typically be 01/01/year X – 31/03/year X, and if the account re-opening of the previous year is present, then within this range there will directly be the transfer to the cost/revenue of the accruals recorded in the 'year X-1' balance and therefore the start date for the integrations will be set as 01/01/year X so that the software checks if there are records with maturity in the previous quarter after 31/03.

**If the re-opening is NOT present**, however, it will be necessary to set the start date as 01/01/**year X-1** **to include as well, for maturity, the movements that would have been subject to re-opening (accruals and deferrals) from the previous year.** 
:::

:::danger WARNING
The controlling module operates in a more flexible manner, in some situations, compared to the administrative module.
In fact, it is able to automatically adjust any cost or revenue (with compatible account types) for either economic maturity shares in the past or future, as it proceeds to monthly allocate the costs/revenues and thus automatically removes values before and after the range of closure. For instance, if the cost recorded in year X has partial (or total) maturity in year X-1, processing the period calculations on the actual data of the closure of year X will still only consider the requested maturity period.

Particular attention should be given to the **management of adjustments made in the administrative module**. 
**It is recommended to perform the calculation and posting of adjustments and the closure and re-opening of accounts with re-opening adjustment through the automatic procedures, avoiding manual entries.**

The automatic procedure imposes, in fact, on the re-opening entries of adjustments the date equal to the original entry subject to correction and the economic maturity of that entry equal to year X-1. This way, it avoids that when processing period closures of year X, the software calculates further adjustments, already having the correct maturity result in the balance of year X (or interim period of year X) due to the proper re-opening of the previous adjustment.  
:::

### Recovery of Depreciation of Assets (Ripresa ammortamento cespiti)

The section allows automatically managing, at the end of the interim data recovery entry, the recognition of civil/fiscal amortizations for the maturity period: it therefore uses the same logic as the *Depreciation of Assets* procedure in the Assets module, but only for the days of economic maturity of interest in the closure. 
Once the calculation has been enabled, the accounting reason to use must be set, and it must be chosen whether to create a *single cumulative entry* or detailed entry for each asset.
The flag 'Incremental Operations', for which it refers to the assets module, allows filtering the type of asset categories to manage.
This flag automatically creates what the user can manage separately after processing the closure balances in the dedicated *Recovery of Depreciation of Assets* procedure.

:::tip Note
If both incremental and non-incremental asset categories are present in the company, it is advisable to use the dedicated *Recovery of Depreciation of Assets* procedure, so that both combinations can be launched in sequence.
:::

### Accounting for Inventories (Contabilizzazione rimanenze)

The section allows automatically managing, at the end of the interim data recovery entry, the recognition of beginning/end inventories for the maturity period.
Once the management is enabled, we will manage the date range to be used, the type of inventory to consider (*Positive/Negative*), the type of cost calculation (*Average Cost, Last Cost, FIFO by Annual Installments, LIFO by Annual Installments, Managerial Area, Actual Lot Cost*) and the accounting reason to be used for the entries to be created.
The presence or absence of the Controlling flag will manage the operations in two different ways:
- If the flag *is not present*, **FluentisERP** will create the entries for the beginning and end inventories on the start and end dates of the Interim Closure period, and will insert them at the end of the other adjustment entries of the closure itself.
- If the flag *is present*, **FluentisERP** will create the entries for beginning and end inventories for each single month within the maturity date range of the Interim Closure, and will insert them as Off-Balance Entries in the Area associated with the closure itself (thus they will not be closure entries, but entries valid only for Controlling).

:::tip Note
The processing performs a test for the presence or absence of this type of entries, and therefore, if they are already present, it will ask if you want to delete and recreate them or if you want to add them (as in the case where only some warehouses are selected and not all through the available dropdown). If both the Controlling Area entries and the closure adjustment entries should be created, it is necessary to launch the procedure *first* with the Controlling flag active and *then* with the flag deactivated.
:::

## Tab *Parameters (Parametri)*

The ‘Parameters’ tab allows setting, for certain account types or for individual account/sub-account, the type of balance to calculate. In detail:

**General (Generale)**: it is the normal default situation. With this option, the ERP will calculate a debit or credit balance and a general balance.

**Debit/Credit (Dare/avere):** with this option, the program will calculate both a total of debit movements, a total credit, and the related final balance.

The reference is to the various options of the reclassification models present in the *Reporting > Reclassifications* module: in these, it is possible to set only the value ‘Debit' or ‘Credit' or general.

For example, recording a cost in a reclassification (i.e., the total debit movements of sub-account X) and its adjustments (i.e., the total credit movements of sub-account X) in two separate points of the reclassification may provide additional information beyond the simple algebraic balance ‘debit’ - ‘credit’ general.