---
title: Introduction
sidebar_position: 1
---

The Intrastat module is dedicated to the creation of Intrastat statistical declarations: it includes both manual data management and automatic insertion based on the data present in the purchase and sales invoices of the respective purchasing and sales areas, as well as a recovery of data from ledger records. The two modes are alternative and interdependent. By accounting for the invoices concerned with the appropriate settings (specifically activating the **flag** *Intrastat* within the **ledger templates** involved), it is possible to manage the automatic creation also through accounting records, for both goods and services.

The basic settings are linked to the **Registers** and **document types** in purchasing and sales: 

**it is necessary that the document is of intracommunity type and that the registrant is defined as an Intrastat subject.**

To maximize automation, it will be necessary to define, in the item registries, the nomenclature codes for each item as well as any conversion factors to obtain the automatic valuation of the complementary unit of measure. Clearly, it is necessary, as much as possible, to comprehensively define the transport type and delivery conditions within the various documents.

The module is used by creating a new Intrastat1 declaration (for sales) and Intrastat2 (for purchases): the data will be completed by pulling from purchase and sales invoices, from accounting records, or by manual entry in the relevant sections.

Once the data for the forms is completed, it will be possible to proceed with printing the forms or electronically sending them with the creation of the required file.

**List of mandatory tables to use the module:**

[Home>Tables>Finance] and [Home>Tables>General Settings] to identify the correct settings for Intrastat management.

[Nature of Intrastat transaction](/docs/configurations/tables/finance/nature-of-intrastat-transaction), 

[Intrastat numerations](/docs/configurations/tables/fluentis-numerations), 

[Nomenclature codes](/docs/configurations/tables/finance/nomenclature-codes), 

[Carriage](/docs/configurations/tables/general-settings/carriages), 

[Shippings](/docs/configurations/tables/general-settings/shipments).