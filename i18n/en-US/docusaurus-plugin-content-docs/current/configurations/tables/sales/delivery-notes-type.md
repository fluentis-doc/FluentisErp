---
title: Delivery Note Types
sidebar_position: 18
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist of the linked page.
:::

The table opens through the path **Tables > Sales > Delivery Note Types** and is used to determine the properties of a delivery note .

It allows for the insertion of new records or for searching existing ones to view, modify, or delete them.

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

To insert new records, click on the first empty row in the grid or press the **New** button.

**DN Type / Description of DN Type**: type and description of the DN type. The DN code must be unique;

**Numeration**: this field should contain the appropriate numbering code. For more details, refer to the article concerning [Fluentis Numeration](/docs/configurations/tables/fluentis-numerations);

**DN Nature**: this field should contain the nature of the DN: delivery, return, for viewing, and return for viewing. This value must be selected from a list;

**Order**: if active, this flag indicates that the DN can be fulfilled by a sales order;

**Values**: if active, this flag will ensure that the values of the item lines present in the document are shown in the DDT print;

**Invoice Type/Invoice Type Description**: in these fields, the type of invoice that you want to be used to create the invoice from the DN via the specific [procedure](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes) will be defined. The invoice can only be created from the DN if this field is filled with the invoice type;

**Reason for Transport**: this field should contain the description of the transport reason; it is a free text field where the reason to be proposed in the DN should be indicated;

**Customer Ctrl.**: if active, this flag allows the system to perform a check on the customer account/detail account type that has been entered in the document to verify that it is necessarily a customer. If not, the system will notify the user with an error message. It is advisable to activate it on all types of Sales DN;

**Block Listed Document**: if active, this flag does not allow modification of a DN that is already marked as Printed at the header;

**Credit**: if active, the DN of this type will be subject to credit control;

**Exclude Lock**: if active, the system for this DN type will not consider the document lock due to potential credit limit excess but will still allow the user to enter and print it;

**Cash flow**: if active, the DDT type contributes to the calculation of [cash flow](/docs/treasury/cash-flow/cash-flow/search-cash-flow).

**Warehouse/Warehouse Description**: in these fields, the receiving warehouse of the goods contained in DN belonging to this type should be entered. This value will be used as the default value;

**Warehouse Template/Warehouse Template Description**: in these fields, the template for the movement of incoming goods contained in DDT belonging to this type must be indicated;

**Unsumed Item Quantity Order**: if this flag is set, it will allow for fulfillment of these types of DN to report the quantities fulfilled in the fulfillment document divided by item line without summing the quantities;

**VAT Purch. Agr.**: if active, at the time of creating the DN, the system will check if there is an agricultural VAT code for the item used, otherwise it will use the VAT code present in the item register;

**Check Downloaded Picking**: if active, when creating a DN from a downloaded Picking, the downloaded flag for the DN is automatically activated. It is advisable to always activate this flag if using picking management;

**Block Picking Quantity**: if active, it blocks the quantity and alternative quantity in the DN created from the Loading Unit list. It is advisable to always activate this flag if using picking and Loading Unit management;

**Allow unload not available batches**: if active, it also allows downloading of unavailable batches;

**EDI Management**: if active, it is possible to create an EDI file for this type of DN;

**Price Including VAT**: if active, the system retrieves the selling price from price lists or from the item register and reports it with the addition of VAT. If it cannot find the price list (for example, due to an expired price list or a price list in a non-compatible currency), it retrieves costs or prices from the item register and reports them including VAT.

The costs and prices in the register are in EUR, so the system will also convert them into the client's currency.

**Check Batches**: if active, it checks that the batches are congruent for the items;

**Extra Data Matrix Management**: if active, allows for the display of an additional tab for inputting quantity values for each cell of the matrix in case of managing items with a matrix. If not active, this TAB and the corresponding matrix will not be displayed.

**Fixed Asset Management**: this flag enables the management of fixed assets in the invoice type, and in the subsequent field, the type of asset operation must be specified;

**Operation Type**: in this combo box, it is possible to select the type of asset operation from various options (revaluation, destruction, capital gain, etc.).

**Discount Type/Description**: in this column, it is possible to associate the type of discount to be proposed when discounts are entered directly in the *Item Discounts* column of the document's item grid (for further details see the article [Simplified Discount Widget Management](/docs/sales/sales-flow/discount-widget)). 