---
title: Introduction
sidebar_position: 1
---

The functionalities for electronic invoicing, although linked to aspects and administrative fiscal needs, are transversal and affect various areas of Fluentis ERP, including purchasing, sales, administration, etc...

The strength of the module lies in its integration. Without leaving the ERP, it is possible to automatically receive new purchase invoices and record them, or issue and send new sales invoices to the ES.

It is still possible to export the xml files of sales invoices if you wish to send them through external channels different from our Fluentis Business Hub. Similarly, it is possible to manually import xml files for purchase invoices.

The forms for managing xml files have an integrated viewer to clearly read the xml files using different stylesheets (the graphical interpretation layer, currently the most common are those of the Revenue Agency and Assosoftware).

**Tables involved in the coding and parameters for electronic invoicing:**

- VAT rates and methods: where the N code for VAT exemption is configured
- Payment types: where the MP code for payment types is reported
- Invoice types: where to associate the appropriate entries from the subsequent Document Types table
- Document types: where to indicate the TD code for the type of invoice

For more specific settings, see [**here**](/docs/finance-area/e-invoice/configuration_einvoice)