---
title: Sales Order Types
sidebar_position: 23
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, please refer to the checklist on the linked page.
:::

The table can be accessed via the path **Tables > Sales > Sales Order Types**.

It allows you to insert new records or search for existing ones to view, modify, or delete them.

The form consists of a filter area and a result area. Once all desired filters are set, simply click the **Search** button to view the results within the result grid.

To insert new records, you need to click in the grid on the first empty row or press the **New** button.  

**Type/Description:** fields where the code and description of the sales order type are indicated. Important: the code must be unique for each company and division;

**Numeration:** in this field, the appropriate numeration code should be entered. For further details on document numeration, refer to the article [Fluentis Numerations](/docs/configurations/tables/fluentis-numerations); 

**Automatic Project Creation** and **Project Type**: if active, the system will create a project of the type specified in the Project Type column during the sales order insertion phase, with the same number as the sales order; the created project will be automatically inserted in the header of the sales order to create the relationship. The project created is considered as a container for collecting documents related to the project and its lines. The project created from the sales order is kept updated based on the changes made in the order and maintains the project line link for each order line.

**Automatic Order Confirmation**: if active, when entering a new order, the order confirmation date is automatically set to the date of order entry; 

**Esclude Lock:** refers to the lock due to exceeding the credit limit and therefore included in the Lock Manager management present in the treasury area among the procedures for Credit Utilization. If active, the system will not consider the document lock due to exceeding the credit limit for this order type but will allow the user to enter and print the document; if not active, the order type will be blocked if the credit limit is exceeded, and the user will be prevented from printing the document; 

**Execution of Delivery Note Type:** contains the DN type that you want to be generated when the automatic DN Execution procedure is launched from the ribbon button in Search Sales Orders; 

**Execution of Invoice Type:** contains the invoice type that you want to be generated when the automatic Invoice Execution procedure is launched from the ribbon button in Search Sales Orders; 

**Execution Picking Type:** contains the picking type that you want to be generated when launching the procedure to create picking from [Shippings](/docs/logistics/shipping/shippings); 

**Block Listed Document:** if active, it does not allow modification of the sales order that has the "Printed" flag active in the header; 

**Credit:** if active, orders of this type are considered for calculating exceeding the credit limit; 

**Cash Flow:** if active, the order type contributes to the calculation of [cash flow](/docs/treasury/cash-flow/cash-flow/search-cash-flow); 

**Warehouse/Warehouse Description:** in these fields, the [warehouse](/docs/configurations/tables/logistics/warehouses) for the commitment of the items present in that particular order type is indicated; the warehouse specified here is reported in all item lines inserted in orders of this type. 

**Template/Warehouse Template Description:** in these fields, the *movement template* for the committed items contained in that specific order type is indicated; the template specified here is reported in all item lines inserted in orders of this type. 

**Unsumed Item Quantity Order:** if active, when executing the same order line in different moments in the same evasion document (DN, Invoice, ..) the individual item lines are reported in the evasion document without summing the quantities. For example, I have an order line of 10 pieces; I execute 2 pieces in the first DN and then execute another 2 pieces of the same line in the second execution, the DN will show 2 item lines with 2 quantities each, while without the flag, the second execution would have increased the DN line bringing the quantity to 4; 

**Check availability:** if active, these order types will be considered in the [availability calculation](/docs/erp-home/registers/items/calculate-availability); 

**VAT Purch. Agr.:** if active, at the time of order creation, the system will check if an agricultural VAT code is present for the item used; otherwise, the VAT code present in the [item registry](/docs/erp-home/registers/items/create-new-items) will be used; 

**Price including VAT:** the management of prices including VAT is activated through this parameter present in all documents in the sales area starting from sales price lists. In the price retrieval of a document with the VAT Price type, it searches in the price lists with the same VAT Price flag set, and discounts are calculated starting from the VAT price. From the VAT price using the VAT rate from the customer contact or item registry, the non-VAT price is calculated. In the documents, the columns Price and Price including VAT are visible. Attention! If there is no valid price list set with the VAT Price flag and there is a sales price in the item registry, the sales price will be proposed as the VAT Price. Attention! It is possible to execute an order with the VAT price flag in a DN with a non-VAT price type; the line totals are calculated differently between a document with a VAT price flag and a document without a VAT price flag. Attention! It is possible to duplicate an order with a VAT price flag into an order with a non-VAT price type; the line totals are calculated differently between a document with a VAT price flag and a document without a VAT price flag. To understand the functioning of Price Retrieval and VAT and non-VAT prices, follow the article Price Retrieval and Discounts in Sales Documents. 

**Production Job Order Type:** in this field, you can indicate the type of production job order that you want to be generated from this type of order within the *MPS Definition* at the time of generating production job orders from the sales order; if the subsequent flag *Production Job Order Generation* is set, the generation of the job order will occur automatically when the order is confirmed. 

**Purchase Order Types/Purchase Order Type Description:** the code for the purchase order type to be generated should be indicated in case you choose to generate the purchase order from the sales order, through the appropriate procedure; 

**Customer Ctrl.:** if active, when inserting the customer within the order, the system will perform a check on the registries, verifying that the entered code corresponds to a customer contact code. If not, the system will notify the user; without this flag, it is possible to create orders even for vendor account types. 

**Extra Data Matrix Management:** if active, it allows the display, in the case of managing items with matrices, an additional tab for entering the values of the quantity for each matrix cell. If not active, this TAB and the subsequent matrix will not be displayed. To learn more about Matrix Management, read the article Extra-Data Matrix Management. 

**Configuration:** in this field, a code for the automatic setting of Extra Data in the header of the sales order should be entered. 

**Print Report:** in this field, it is possible to set the default print to be used for this document type; remember that, during document printing, it will be necessary to select the 'Multiple Prints' report to automatically use the default print report;

**Number of Copies:** this field sets the number of document copies to print; 

**Production Job Order Generation:** if active, indicates that the production job order of the specified type in the *Production Job Order Type* column will be automatically created once the order is confirmed. 

:::notes
When a new line is added within a Sales Order for which Production Job Orders are automatically generated, the new line in the job order assumes the status *Not examined*.
:::

**Fixed Assets Management:** if active, in the items tab of the order, the Fixed Assets tab is activated to link the order to the sale of a fixed asset.

**Operation Type:** is always connected to fixed asset management, if indicated, it is automatically proposed in the Operation Type widget present in the Fixed Assets tab of the Items tab of the order. 

**Discount Type/Description:** in this column, it is possible to associate the discount type to be proposed when discounts are entered directly in the *Item Discounts* column of the item grid of the documents (for more details see the article [Simplified Discount Widget Management](/docs/sales/sales-flow/discount-widget)).