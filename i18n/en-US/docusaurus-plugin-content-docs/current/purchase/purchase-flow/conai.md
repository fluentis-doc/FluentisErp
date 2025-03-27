---
title: Recycle Management
sidebar_position: 2
---

The **CONAI** (National Packaging Consortium) management in Fluentis is a module that allows for the automation of the application of costs related to the CONAI environmental contribution on purchase and sales documents. This tool is essential for companies that manage packaging and must comply with Italian regulations regarding the disposal and recycling of packaging materials. The automatic application of CONAI costs in Fluentis occurs based on the parameters configured by the user and is directly reflected in the accounting documents, ensuring precise and compliant calculations.

## Activation of Recycle Management

To activate CONAI management in Fluentis, it is necessary to configure some fields in the [Company](/docs/configurations/tables/general-settings/company) table, in the Other Settings section:

- **Recycle partner code**: This code is assigned to companies at the time of registration with CONAI. It is a unique identifier used to monitor declarations and environmental contributions owed by the company based on the packaging placed on the market.

- **Recycle partner type**: Defines the role of the company in the packaging supply chain in Italy. The available partner types are:
  - **Autoproducer**: Company that produces packaging for its own use without selling it to third parties. Uses packaging to pack its own products.
  - **Dealer / Distributor**: Company that purchases packaging to resell it without directly using it. This category includes wholesalers or distributors.
  - **Other users**: Companies that purchase packaging to pack products intended for sale but do not produce them. They do not fall into the categories "Self-Producer" or "Trader/Distributor".
  - **Producer**: Company that produces packaging and sells it to other users or distributors.

- **CONAI Partner Start/End Date**: It is possible to specify the validity period of the partnership with CONAI, if applicable.

## Material Types

The management of packaging material types takes place in the logistics table called [Material Types](/docs/configurations/tables/logistics/material-types). This table encodes the different materials (such as steel, aluminum, paper, wood, plastic, etc.) used for packaging. For each type of material, the following must be set:

- **Recycle material code**: Specifies the type of material in accordance with the CONAI classification.
- **Fictitious Article Code**: Used to create the expense line related to the CONAI contribution in the delivery notes or invoices. If no article code is provided, that material will not be valid for the CONAI configuration.

A single article code can be used for all materials or one can be specified for each type, depending on the desired level of detail in tax documents.

- **Rates and Units of Measure**: The grid below allows for defining the applicable rates for each material based on various date ranges. The unit of measure, generally in tons, must be consistent with that used in sales items and CONAI fictitious items.

## Definitions in Item Registry

In the [Weights/Dimensions](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions) tab of the item registry, it is possible to specify the characteristics of the packaging for CONAI management. In this section, one can define:

- **Used in Purchase/Sale**: Specifies whether the item is subject to the calculation of the CONAI contribution in purchase or sales documents.
- **Type of packaging**: Indicates whether the packaging is primary, secondary, or tertiary.
- **Empty or Full**: Indicates whether the packaging is empty (flag not set) or full (flag set).
- **Packaging Materials**: List of materials that make up the packaging with their corresponding weight in coded units of measure.

## Settings in Customer/Supplier Registry

To correctly apply CONAI costs in purchase or sales documents, it is necessary to properly configure the customer or supplier registry in the [CONAI Settings](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai) tab:

- **Recycle partner type**: For sales calculation, the customer must be a self-producer (A), a trader/distributor (U1), or other users (U2). For purchase calculation, the supplier must be a producer (P).
- **Exemption Percentages**: In the grid, it is possible to set any exemption percentages for each type of material, with the corresponding validity dates.

## DDT Types and Invoice Types

In the [DDT Types](/docs/configurations/tables/sales/delivery-notes-type) and [Invoice Types](/docs/configurations/tables/sales/invoices-type), there is a **Recycle Management** flag. This flag activates the automatic calculation of the CONAI contribution for that specific type of document.

## Example of Application in a Sales Invoice

If CONAI management is activated for a company, in the *Items* tab of the sales invoice, there will be a sub-tab called **CONAI Materials for the Item**. This section includes the packaging materials that make up the item, with the following information:

- **Units of Measure**: Specifies the unit of measure used for the material.
- **Unit Weight**: The weight of each material, potentially reduced by the exemption percentage defined in the customer registry.
- **Total Weight**: Calculated by multiplying the number of items sold by the unit weight.

When saving the document or pressing the *Recalculate CONAI* button in the toolbar, Fluentis will automatically insert one or more expense lines, retrieving the article for the materials with quantities and prices corresponding to the CONAI cost for that material. In the electronic invoice file for the SDI (Interchange System), Fluentis will automatically add tags in the "Other Managerial Data" section to report the materials and unit weights of the items.

## Control and Totalization Prints

In the purchase and sales invoice modules, two print formats are available that allow the extraction of periodic totals for the various materials, both for internal control and for processing the data to report to CONAI. For sales, there is also a report that reflects the CONAI web pages for uploading declaration data, filtering the materials based on the starting letters of the CONAI Code entered in the materials table.