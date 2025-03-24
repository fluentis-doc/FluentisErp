---
title: Asset import
sidebar_position: 2
---

The Excel sheet (template) for the import of assets in the Administration module allows for populating the asset records based on the asset categories that must already be present in the database.

**Category Code:** must already be present in the database and will be used in the imported asset record.

**Precode:** optional, to be managed only if the precode management is active by indicating the precode to be used in the numbering.

**Asset Number:** use a free number.

**Cost Center:** optional, used to assign a cost center in the asset record for subsequent movements during the amortization phase.

**Purchase Date:** Mandatory, it is the date of the historical cost entry.

**Document Number / Purchase Invoice Date:** optional, useful to indicate the reference to the purchase invoice.

**Purchase Supplier:** Optional, used to populate the supplier field of the asset in the asset record, fill in with the nickname of the supplier registry.

**Total Asset Value:** it is the historical cost of the asset loaded with the date in the Purchase Date column.

**Total Amortization Fund:** it is the total accumulated amortization fund at the time of loading/importing the asset record. Beware, this value will be loaded as expected for the loading of a previous asset (by filling in at least one amortization line), and therefore the data in the subsequent column **Year** is used.

**Amortization Percentage to Use:** Optional, used in case you want to enter a specific amortization percentage for the asset in question in the asset record; if not valued, nothing will be written in the corresponding field, and subsequent amortizations will be executed according to the percentage of the belonging category.