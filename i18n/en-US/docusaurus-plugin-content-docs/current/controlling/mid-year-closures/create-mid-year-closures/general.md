---
title: General
sidebar_position: 2
---

**Select Data for Department** flag: if set, the following department field becomes a filter through which it is possible to take data of department set by the accounting.

**Exclude Template**: in case of fetching data from an accounting year already closed, it enables the user to exclude records of accounts closures in order to obtain accounting year balance data.

**A** – Section **Retrieve Patrimonial Values**

The default **Retrieve of Values with patrimonial nature** flag enables the filter section below. Thanks to this option Ideal will insert into the mid-year closure also the detail accounts balances linked to the account types which present the **Active Patrimonial** or **Passive Patrimonial** flag.

The filter section for record date and accrual date enables the user to establish the dates range that will be used in order to retrieve patrimonial data from records about the period set (refer to the same header fields of records, not to economic accrual range inserted into the accounting lines, view file CH_1.4_Raffronto_Periodo_Budget.doc). In particular, in case that the accounts closure and reopening have not been yet recorded in accounting, the start date can be backdated to the last date of accounts opening occurred in accounting, in order to have certain correct patrimonial data. Consider that, in this case, there will be a difference between patrimonial balance and economic balance of the current accounting period: that difference, viewed as imbalance of the mid-year closure record, will correspond to the profit/loss of the previous accounting period not yet detected in closure/reopening of financial accounting accounts.

In case that the closure does not provide for a patrimonial retrieve, the record of mid-year closure (only of the economic section) will unbalance again as regards the profit/loss of the period.

**B** – **Economic Values Retrieve Section**

The default **Retrieve of Values with patrimonial nature** flag enables the filter section below. Thanks to this option Ideal will insert into the mid-year closure also the detail accounts balances linked to the account types which present the **Costs Account** or **Revenues Account** flag.

The filter section for record, accrual and document date enables the user to establish the dates range that will be used in order to retrieve patrimonial data from records about the period set (refer to the same header fields of records, not to economic accrual range inserted into the accounting lines, view file CH_1.4_Raffronto_Periodo_Budget.doc). In particular, the document dates range, not proposed automatically, usually is not set: not all accounting records, for this reason, have document dates on header (usually only regarding the sales/purchase invoices records).

In case that the closure does not provide for a patrimonial retrieve, the record of mid-year closure (only of the patrimonial section) will unbalance again as regards the profit/loss of the period.

**C** – **Accounts Closure Data Section**

The section of **Accounts Closure Data** presents the identification elements of this balance simulation.

 **Template of Accounts Closing**: it is the template to be used in order to create the balances retrieve record. Remember that template has to have CC/PC/job orders flags in order to make sure that these elements are considered on the same mid-year closure.

 **Closing Date**: it is the creation date of this simulation, that will be used as off-balance record date of the same closing and for other records. It has no particular value.

**Closing Number**: it is the progressive number of the closing, proposed automatically by the system.

 **Closing Description**: it is the description that will be in all masks of the Mid-Year Closures module, in modules of Balance and Budget. It is recommended to describe clearly the dates range set in order to understand the simulated period, because filters, set on mask, will not be visible in the following phases.

 **Ledger Parameters found on accounting period of …**: it is necessary to associate the reference accounting year, in order to take the detail accounts and the standard settings from the accounting parameters (the closure could involve more accounting periods; for this reason there has to be a 'priority' year).

**D** – **Comparison Section of Budget Period**

The section of **Date related to the comparison with budget period** is very important for economic accrual date range: let us see in detail the meaning of the various fields.

**Budget Period**: in this field it is possible to set the period type from which to select the accrual period detail.

**Accrual Period Detail**: the highlighted values depend on what has been established in the previous field and enable the user to valorize the following accrual date range. If both are set, the mid-year closure that user is creating, will be considered by the software as a final budget in order to be used (for all budgets that present the same accrual dates range) on the variances analysis of the budget module, after 'Data Retrieve' (verify the Budget module documentation).

**Economic Accrual from/to**: this dates range is obligatory in order to going on to create the mid-year closure. It indicates the economic accrual period of interest: it will be possible so to consider it as a reference for the adjustment/integration entry calculation and for the calculation of period depreciations retrieve. For example, if records of the first semester of the X accounting period have been retrieved and if the same semester has been inserted as a range of economic accrual date, together with the adjustment procedures, the program will verify if there are accounting lines with accrual range out of this semester in order to detect the related deferred.

**E** – **Closure Options Section**

**Detail Accounts Grouping**: do not set these flags, they are not used at the moment (The Balance Sheet module as well as the mid-year Balance report, enable the user to valorize directly the accounts balance excluding registers, without the necessity to have any grouping during the closure record).

**Closing per Job Order**: through this flag, the program will create a mid-year closure record for each sales job order that has been valorized in the accounting records of the filter period set. Remember that the mid-year closure template has to provide for the management of job orders in order to manage the related data.

**Consider Temporary Records**: through this flag, data retrieve from accounting will consider also the accounting records with 'temporary' status.

**Calculated Values**: this section proposes the patrimonial/economic totals calculated from the first closure record performed. (The reference refers to the **Closure per Job Order** flag, that creates a number of closure records. For this reason, this section will view only data from the first job order identified during the period).






