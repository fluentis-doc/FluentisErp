---
title: Recycle Management
sidebar_position: 2
---

The **CONAI** (National Packaging Consortium) management in Fluentis is a module that enables the automation of the application of costs related to the CONAI environmental contribution on purchase and sales documents. This tool is essential for companies that manage packaging and must comply with Italian regulations regarding the disposal and recycling of packaging materials. The automatic application of CONAI costs in Fluentis occurs based on the parameters configured by the user and directly reflects on accounting documents, ensuring precise and compliant calculations.

## Activation of Recycle Management

To activate CONAI management in Fluentis, it is necessary to configure certain fields in the [Company](/docs/configurations/tables/general-settings/company) table, in the Other Settings section:        

**Recycle partner code**: This code is assigned to companies upon registration with CONAI. It is a unique identifier used to monitor declarations and environmental contributions owed by the company based on the packaging placed on the market.     

**Recycle partner type**: Defines the role of the company in the packaging supply chain in Italy. The available partner types are:
- A – Self-producer (Autoproduttore): Company that produces packaging for its own use without selling it to third parties. Uses packaging to package its own products.
- U1 – Trader/Distributor (Commerciante/Distributore): Company that purchases packaging for resale without using it directly. This category includes wholesalers or distributors.
- U2 – Other Users (Altri Utilizzatori): Companies that purchase packaging to package products intended for sale but do not produce them. Do not fall into the categories "Self-producer" or "Trader/Distributor."
- P – Producer (Produttore): Company that produces packaging and sells it to other users or distributors.

**Start/End Date for CONAI Partner (Data Inizio/Fine Partner CONAI)**: It is possible to specify the validity period of the partnership with CONAI, if applicable.

## Material Types Table

The management of packaging material types occurs in the logistics table called [Material Types](/docs/configurations/tables/logistics/material-types). In this table, different materials (such as steel, aluminum, paper, wood, plastic, etc.) used for packaging are coded. For each material type, the following must be set:

**Recycle material code**: Specifies the type of material in accordance with CONAI classification.     
**Fictitious Article Code (Codice Articolo Fittizio)**: Used to create the expense line related to the CONAI contribution in the delivery notes or invoices. If an article code is not indicated, that material will not be valid for CONAI configuration.

It is possible to use a single article code for all materials or specify one for each type, depending on the desired level of detail in the tax documents.

**Rates and Units of Measure (Tariffe e Unità di Misura)**: The grid below allows defining the rates applicable for each material based on various date ranges. The unit of measure, generally in tons, must be consistent with that used for sales articles and CONAI fictitious articles.

## Definitions in Item Registry

In the [Weights/Dimensions](/docs/erp-home/registers/items/create-new-items/item-registry/weights-dimensions) tab of the item registry, it is possible to specify the characteristics of packaging for CONAI management. In this section, you can define:

**Used in Purchase/Sale (Usa in Acquisto/Vendita)**: Specifies whether the item is subject to the calculation of the CONAI contribution in purchase or sales documents.      
**Type of packaging**: Indicates whether the packaging is primary, secondary, or tertiary.     
**Empty or Full**: Indicates whether the packaging is empty (flag not set) or full (flag set).     
**Packaging Materials (Materiali di Imballaggio)**: List of materials that make up the packaging with their corresponding weight in coded units of measure.         

## Settings in Customer/Supplier Registry

To correctly apply CONAI costs in purchase or sales documents, it is necessary to correctly configure the customer or supplier registry in the [CONAI Settings](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai) tab:

**Recycle partner type**: For sales calculation, the customer must be a self-producer (A), a trader/distributor (U1), or other users (U2). For purchase calculation, the supplier must be a producer (P).     
**Exemption Percentages (Percentuali di Esenzione)**: In the grid, it is possible to set any exemption percentages for each type of material, along with their validity dates.

## Delivery Note Types and Invoice Types

In [delivery note types](/docs/configurations/tables/sales/delivery-notes-type) and [invoice types](/docs/configurations/tables/sales/invoices-type), there is a **Recycle Management** flag. This flag enables the automatic calculation of the CONAI contribution for that specific type of document.

## Example of Application in a Sales Invoice

If CONAI management is activated for a company, in the *Articles* tab of the sales invoice, a sub-tab called **CONAI Materials for the item** will be available. This section includes the packaging materials that make up the item, with the following information:         

**Units of Measure**: Specifies the unit of measure used for the material.      
**Unit Weight (Peso Unitario)**: The weight of each material, possibly reduced by the percentage of exemption defined in the customer registry.     
**Total Weight**: Calculated by multiplying the number of items sold by the unit weight.     

When saving the document or pressing the *Recalculate CONAI* button in the toolbar, Fluentis will automatically insert one or more expense lines, retrieving the materials article with quantities and prices corresponding to the CONAI cost for that material. In the electronic invoice file for the SDI (Interchange System), Fluentis will automatically add tags in the "Other Management Data" section to report the materials and unit weights of the items.

## Control and Totalization Prints

In the purchase and sales invoice modules, two print formats are available that allow extracting periodic totals for the various materials, both for internal control and for processing data to report to CONAI. For sales, a report is also available that reflects the CONAI website pages for loading declaration data, filtering the materials based on the initial letters of the CONAI Code entered in the materials table.