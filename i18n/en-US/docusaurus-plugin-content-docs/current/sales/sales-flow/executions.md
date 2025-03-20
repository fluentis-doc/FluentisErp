---
title: Execution
sidebar_position: 7
---

The Execution cycle in Fluentis serves to manage in a structured and integrated way the entire sales operational flow, from the initial offering phase to the final invoicing phase. Each phase is characterized by specific procedures and configurations that ensure a smooth and integrated workflow management.

## Conversion from Offer to Order

The conversion procedure from offer to sales order can be initiated in two ways:

- From the [Offers Search](/docs/sales/offers/search-offers): By selecting one or more offers and clicking on the *Conversion* button present in the toolbar, a mass conversion can be executed.
- From the [Header](/docs/sales/offers/insert-offer) of the Offer: Within the individual offer, the *Conversion* button in the header allows converting the selected offer into a sales order.

This procedure allows transforming a sales offer into an actual sales order. To correctly perform the conversion, it is necessary to configure the desired [Order Type](/docs/configurations/tables/sales/sales-order-types) in the [Offer Type](/docs/configurations/tables/sales/sales-offer-type) table. Additionally, the offer must have a *Confirmation Date* entered in the header; otherwise, the system will display a pop-up message requesting confirmation of the offer before proceeding.

During the conversion procedure, a pop-up appears with several options:

- Offer Line Management: If some lines of the offer have already been converted into an order, the system asks the user whether they want to create a new order using all lines of the offer or only those not yet referenced.
- Create/Update Project: This option allows creating or updating a project. Available options include *Create New Empty Project*, *Create New Project from Offer*, or *Create New Project from Offer and Project Template*. It is necessary to specify the [Project Type](/docs/configurations/tables/project-management/project-type) to be created. If the project already exists, the name of the project to be updated must be entered.
- Transfer Materials/Resources: This option allows transferring the resources and materials of the offer, if [hierarchical](/docs/sales/offers/insert-offer), as item lines in the order.

Once the conversion is confirmed, the system generates a new customer order using the offer data and notifies the user with a pop-up message regarding the success of the conversion, the number of the converted offer, the version, and the number of the generated customer order. The information modified in the registry during the creation of the offer (e.g., Customer Notes, Shipping, Payments) will also be reflected in the generated order.

## Execution from Orders to Delivery Notes 

The execution procedure from order to Delivery Note is available in two ways:

- Mass execution from the [Orders Search](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders): In the Orders Search, select one or more orders to be fulfilled and click on Delivery Note execution in the toolbar.
- Execution from the [Header](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) of the Delivery Note: In the Header of the Delivery Note, use the execution from Order button to open a selection window for the confirmed customer orders to be transferred to the Delivery Note.

This procedure allows transforming one or more sales orders into one or more Delivery Notes. Before initiating the procedure, it is necessary to configure the desired type of Delivery Note in the [Order Type](/docs/configurations/tables/sales/sales-order-types) table. The automatic procedure allows the creation of Delivery Notes only if the order is printed and confirmed.

The conditions for execution are:

- The customer of the orders must match the customer of the Delivery Note.
- The order to be fulfilled must have the "Printed" flag and a Confirmation Date.
- The table "Delivery Note Types" must have the "Order" flag set, which indicates that the Delivery Note can be generated from an order.
- If the procedure is initiated from the Orders Search, the document types must be compatible: in the "Order Types" table, the type of order to be fulfilled must have the corresponding Delivery Note type set.

After selecting the orders and setting the filters, clicking on *Transfer* will generate the Delivery Note with the order data. If executed correctly, the order will automatically change status to "Executed" or "Partially Executed".

## Execution from Delivery Notes to Invoices 

The fulfillment procedure from Delivery Notes to invoices can be initiated in two ways:

- From the [Procedures](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes) Menu: Going to *Sales > Sales Invoices > Procedures > Create from Delivery Notes*.
- From the [Header](/docs/sales/sales-invoices/invoicing/sales-invoice) of the Sales Invoice: Using the *Delivery Note Execution* button in the header of the invoice.

This procedure allows creating one or more invoices from one or more Delivery Notes. The procedure consists of three main tabs:

- Valuation: Allows entering filters to select the Delivery Notes to be invoiced (with "Printed" status) and specify the creation date of the invoice.
- Parameters: Configures the grouping options for creating an invoice from multiple Delivery Notes, such as including Delivery Notes from different years and VAT periods, different types of Delivery Notes, or with different exchange rates. It is also possible to define how payments are treated, restoring those from the registry or keeping those specified in the Delivery Notes.
- Previous: Allows viewing, filtering, and canceling previous invoicing operations.

After selecting the Delivery Notes and setting the parameters, you can proceed with the invoice creation by clicking on *Create Invoice from Delivery Notes*.

The fulfillment from Delivery Notes to invoices can also be completed from the header of the invoice itself via the Delivery Note Execution button.