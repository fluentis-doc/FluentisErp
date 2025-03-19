---
title: Fulfillment 
sidebar_position: 5
---

The **Execution** cycle in Fluentis serves to manage the entire operational flow of purchasing in a structured and integrated manner, from the initial request phase to the final invoicing phase. Each phase is characterized by specific procedures and configurations that ensure a smooth and integrated management of the workflow.

## Conversion from Offer to Order 

The procedure for **converting a supplier offer to a purchase order** can be initiated:

- From the [Menu Procedures](/docs/purchase/offer-request/procedures/order-creation): going to *Purchases > Offer Requests > Procedures > Create Supplier Order from Supplier Offer*.

This procedure allows converting an offer request into an actual purchase order.  
To perform the conversion, it is necessary to configure the desired supplier order type in the [Offer Request Type](/docs/configurations/tables/purchase/purchase-offer-type) table.

During the conversion procedure, a pop-up appears with the following options:
- **Offer Request**: allows creating a purchase order for each offer request.
- **Account**: allows grouping offer requests by supplier.
- **Automatically Close the connected offers**: inserts a *Closing date* for the RDO converted into purchase orders.

Once the conversion is confirmed, the system generates a new supplier order using the data from the offer request and notifies the user with a pop-up message regarding the success of the conversion.

For more details on the procedure, please refer to the dedicated page in the documentation.

## Conversion from Purchase Request to Order

The procedure for **creating a Supplier Order from Purchase Request** can be initiated:

- From the [Menu Procedures](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests): going to *Purchases > Supplier Orders > Procedures > Automatic Order Creation*.

This procedure allows for the creation of one or more purchase orders from one or more purchase requests and consists of five tabs:

- **Filter from**: allows you to apply filters to select the RDA (with status "Authorized") to convert to order.
- **Supplier choice**: allows selecting the supplier to whom to address the order based on various criteria, including: best purchase price, default preferred supplier, best payment terms, etc.
- **Order prototypes**: displays the summary of the order to be created and allows generating a new order or adding item lines to an existing order.
- **Parameters**: configures the order creation options, such as the type of order to create and the data to use if not coded for each item. It is also possible to choose to consider availabilities from various areas of the management system.
- **Operations**: allows you to view, filter, and cancel previous operations.

Once the order prototype is confirmed, clicking the *Generate Supplier Orders (Genera ordini fornitore)* button will cause the system to create the purchase orders based on the chosen parameters.

The same procedure can be used for creating **Supplier Orders from Customer Orders**. For more details, please refer to the specific [page](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) in the documentation.

## Fulfillment from Orders to Delivery Notes 

The procedure for **fulfilling from order to Delivery Note** is available in two modes:

- From the [Menu Procedures](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders): going to *Purchases > Purchase DDT > Procedures > Fulfillment from Orders*.
- Fulfillment from the [Header](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note) of the DDT: using the *Order Fulfillment (Evasione da Ordine)* button to open a selection window of confirmed orders from the supplier to transfer to the DDT.

This procedure allows transforming one or more purchase orders into one or more DDTs. Before starting the procedure, it is necessary to configure the desired DDT type in the [Supplier Order Types](/docs/configurations/tables/purchase/purchase-orders-type/) table. The automatic procedure allows the creation of DDTs only if the order is printed and confirmed.

The conditions for fulfillment are:

- The supplier of the orders must match the supplier of the DDT.
- The order to be fulfilled must have the "Printed" flag and an *Order Confirmation Date (Data di Conferma)*.
- For the second procedure, the *Order Type* must have an associated *Delivery Note Type*.

The conditions for grouping orders in DDT can be defined in the [DDT Grouping Parameters](/docs/configurations/parameters/purchase/dn-grouping).

After selecting the orders and setting the filters, clicking on *Transfer* will generate the DDT with the order data. If the fulfillment has been executed correctly, the order will automatically change status to *"Fulfilled"* or *"Partially Fulfilled"*.

Fulfillment from order to DDT can also be completed from the header of the invoice itself using the *Order Fulfillment* button.

## Fulfillment from DDT to Invoices 

The procedure for **fulfilling from DDT to invoice** can be initiated in two modes:

- From the [Menu Procedures](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization): going to *Purchases > Purchase Invoices > Procedures > Valuation of Purchase DDT*.
- From the [Header](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) of the Sales Invoice: using the *D.N. execution* button in the invoice header.

This procedure allows creating one or more invoices from one or more DDTs. The procedure consists of three main tabs:

- **Valorization**: allows you to apply filters to select the DDTs to be invoiced (with status "Checked") and specify the invoice creation date.
- **Parameters**: configures the type of invoice to create, if not indicated in the [DDT Types](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) table, and the DDT references to be reported on the invoice.
- **Previous**: allows you to view, filter, and cancel previous invoicing operations.

The conditions for grouping DDTs in an invoice can be defined in the [Purchase Invoice Grouping Parameters](/docs/configurations/parameters/purchase/invoice-grouping/).

After selecting the DDTs and setting the parameters, it is possible to proceed with creating the invoice by clicking on *Valorization PurchaseDeliveryNote*.

Fulfillment from DDT to invoice can also be completed from the header of the invoice itself using the *D.N. execution* button.