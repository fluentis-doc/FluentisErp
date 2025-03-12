---
title: Finance
sidebar_position: 1
---

The parameters of the **Finance** area concern the modules of 

[**Accounting**](/docs/configurations/parameters/finance/accounting-parameters): **Essential (Indispensabili)** for the use of any accounting functionality, they contain the definition of fundamental data such as the duration of the fiscal year, the accounts used for automated accounting operations, and the matching between records and the chart of accounts; therefore, they also influence the process of creating new customer and supplier records.

**Professional Men**: Parameters **not necessary (non necessari)** and present for backward compatibility

[**Fixed Assets**](/docs/configurations/parameters/finance/fixed-assets-parameters): parameters that provide specific options of limited interest only to the fixed assets/controlling module

[**Payroll Import (Importazione paghe)**](/docs/configurations/parameters/finance/payroll-import-parameters) Specific parameters for importing records related to employee payroll from other management systems via the Bizlink import flow.

:::danger[Attention (Attenzione)]
Failure to manage this basic data could prevent the use of the affected functionalities.
:::

:::tip[Note (Nota)]
Due to the close interconnection with the Treasury area, particularly for the various procedures of automatic accounting of the Active Portfolio and Supplier Payments module, it is advisable to check and manage the [**Parameters**](/docs/configurations/parameters/treasury/general-overview) of the treasury area as well.
:::

:::important[**Fast Start (Fast Start)**]
The parameters of the administrative area are subject to the possibility of initializing a [**FastStart environment (ambiente *FastStart*)**](/docs/guide/fast-start) configured to allow immediate use.
:::