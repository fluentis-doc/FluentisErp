---
title: POS Types 
sidebar_position: 25
---

:::tip[FAst Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::

The table opens via the path **Tables > Sales > POS Types**.

### Search POS

Allows for the insertion of new records or to search for already existing ones to view, modify, or delete them.

The form consists of a filter area and a result area. Once all desired filters are set, simply click the **Search** button to display the results within the result grid.

To modify/view a POS type, double-click the desired row or press the **Modify** button.

To insert new records, you need to press the **New** button, which will open a new entry form.

### POS Insertion/mMdification

In this form, all data related to the new type of POS to be inserted will be entered, such as:

**Type and description**: in these fields, the type and description of the POS must be defined;

**Numeration**: in this field, the appropriate numeration code will be entered. For further details on management numerations, refer to the article [Fluentis Numerations](/docs/configurations/tables/fluentis-numerations);

**Default**: if active, this flag indicates the default POS type that is proposed when creating a new POS;

**Notes**: this is a free text field where any descriptive notes can be entered, which will then be displayed in the respective prints;

**Price including VAT**: if active, the prices present in the offer will be displayed including VAT;

**On-account**: if active, this flag indicates that the POS is of deposit type and can be canceled with a transaction using an ordinary POS type;

**Server name/Database/Table**: in these fields, the Server, Database, and Table from which to read and/or write POS data will be selected;

**Document Collection Table**: table to read and/or write data of documents linked to the POS;

**MU Arrival**: MU used in the creation of DN and invoices from the POS;

**VAT Arrival/VAT Description**: VAT code used in the creation of DN and invoices from the POS;

**POS description**: point of sale where the POS are created;

**Counter**: in this field, the code of the counter to be linked to the POS must be indicated;

**Prod. cat.**: in this field, the mercantile category reported on the order is indicated;

**VAT**: VAT code to be used in the POS;

**Warehouse**: in this field, the warehouse of the goods commitment contained in this type of POS must be indicated;

**Causal**: in this field, the reason for the movement of the committed goods contained in this type of POS must be indicated;

**Payment Type**: in this field, the payment type proposed in the POS of this type is offered;

**Payment Term**: in this field, the payment solution proposed in the POS of this type is indicated;

**Price List**: in this field, the general price list code from which the prices of the items to be inserted into the POS are taken is indicated;

**Validity Date**: here the validity date of the general price list will be reported;

**Automatic unload when closing consideration**: if active, when the POS is printed, it is also automatically allocated from the warehouse; otherwise, manual allocation must be carried out;

**Need cash register**: if active, this flag indicates that it is necessary to connect to a cash register to print the receipt;

**View variants**: if active, item variants can also be used;

**View attributes**: if active, item attributes can also be used.

For everything not detailed in this document regarding the common functionality of the forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).