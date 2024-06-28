---
title: Parameters
sidebar_position: 3
---

Within the parameters section the procedure shows all detail lines of items inserted on the selected documents, taking document data from each of them. In particular:

**status and tax code** are taken from the subject register;

**value in currency** presents the item amount data (price*quantity-discounts) in the purchase invoice currency (the field is present only for intra2);

**amount of euro operations** takes the item amount at the exchange inserted on invoice;

**nature of transaction** is taken by document type;

**Nomenclature Made by** the item line in invoice and if it is free even by the items register;

**Net Mass** is calculated according to the weight set on item register;

**Suppl. Unit of Measure** can be calculated automatically if the nomenclature code provides for a second unit of measure, through the conversion between operational unit of measure and this one according to conversion factors set on item;

**Statistical Value** is calculated in several ways according to the settings (percentage variation compared to the customer/vendor register, or increased from charges inserted on document specifically);

**Transport Code and Modality** are inserted compared to carriage/delivery codes assigned to document;

**Data related to origin/destination provinces **and to** the place of origin/destination** are identified by document register or company table.

At the end of the grid there are the references to the source document of line.

Once having completed data necessary in model (and this depends on 'simplified' flag inserted on header of declaration but it depends also on summary period type) it is possible to go on to create the model, operation that will record details on bis/ter/quarter sections according to the Intrastat transaction nature (the 2 type is reported on Ter section related to adjustments, the 'S' type on quarter section). Before this movement it is possible to go on to group amounts: this operation will be performed document by document, causing a first data rounding to the unit.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Delete | Button to delete the invoices belonging to the selected intra-Community type. |






