---
title: Parameters
sidebar_position: 3
---

Within the **Parameters** section, the procedure displays all the detailed lines of items entered in the selected documents, showing the data retrieved from each of them. In particular:

![](/img/it-it/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters/image01.png)

 

**Status and VAT code**: are taken from the registry of the named subject;

**Same currency value**: presents the item amount data (price*quantity-discounts) in the currency of the purchase invoice (the field is only present for intra2);

**Amount operation Euro**: takes the item amount at the exchange rate entered in the invoice;

**Intrastat transaction nature**: is taken from the document type;

**Combined nomenclature**: from the item line in the invoice and, if empty, from the item registry;

**Net mass**: calculated based on the weight set in the item registry;

**Supl. M.U.**: can be automatically calculated if the nomenclature code provides for a second unit of measure, through the conversion between the management unit of measure and this one, according to the conversion factors set in the item;

**Stat value** is calculated in multiple ways depending on the settings (percentage variation compared to the customer/supplier registry, or increased by expenses specifically entered in the document);

**Transport code and Transport mode** are entered regarding the port/shipping codes assigned to the document;

**Data related to the provinces of origin/destination** and to the **country of origin/destination** are read from the registry of the named subject of the document or from the company table.

At the end of the grid, references to the original document of the line are displayed.

Once the necessary data in the model is completed (this depends on the Simplified flag entered in the header of the declaration but also on the type of reporting period), it is possible to proceed with the creation of the model, an operation that will carry the details into sections bis/ter/quater depending on the nature of the Intrastat transaction (type 2 is reported in section Ter related to corrections, type "S" in section quater). It is possible to proceed, even before this movement, with a first grouping of amounts: this operation will, however, be performed document by document, causing a first rounding of data to the unit.

| Function | Extended Description |
| --- | --- |
| Delete | Button to delete the selected intra-community invoices. |
| Creation | Executes the creation of the Intrastat model reporting the data present in this Tab within the sections of the model |
| Create | Executes the deletion of all lines from the grid |
| Group | Executes the grouping of lines based on the subject receiving the invoices and other homogeneous data |
| Save | Allows saving the data entered in order to, for example, continue at a later time |