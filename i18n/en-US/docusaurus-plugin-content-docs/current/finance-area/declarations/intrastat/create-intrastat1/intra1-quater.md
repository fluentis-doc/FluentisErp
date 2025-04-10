---
title: Intra1 Quater
sidebar_position: 5
---

The 'quater' section of the Intrastat declarations contains detailed data for the period related to the provision of services. 

This section is automatically filled by the procedure, pulling data from **[invoice types](/docs/configurations/tables/sales/invoices-type)** with a transaction nature of 'S – services'. 

![](/img/it-it/finance-area/declarations/intrastat/create-intrastat1/intra1-quater/image01.png)

![](/img/it-it/finance-area/declarations/intrastat/create-intrastat1/intra1-quater/image02.png)

 

Or from ledger records (not generated from purchases/sales), always with 'VAT Service' type lines, 

![](/img/it-it/finance-area/declarations/intrastat/create-intrastat1/intra1-quater/image03.png)

but modification and manual integration are allowed.

**NOTE**: the ledger template related to the accounting entry must have the INTRASTAT flag active and the related Intrastat tab of the entry must be filled out. 

![](/img/it-it/finance-area/declarations/intrastat/create-intrastat1/intra1-quater/image04.png)



| Function | Extended Description |
| --- | --- |
| Save | Button through which to save the declaration. |
| **[Automatic Creation](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/automatic-creation)** | Button that calls the guided procedure for data retrieval from the sales area. |
| **[Create from Records](/docs/finance-area/declarations/intrastat/create-from-records-intrastat1/create-from-records-intrastat1-intro)** | Button that calls the guided procedure for data retrieval from ledger records. |
| Delete | Button to delete the selected detail line. |