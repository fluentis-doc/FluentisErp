---
title: Purchase Orders Parameters
sidebar_position: 2
---

The parameters of supplier orders allow for basic settings to manage supplier orders correctly and according to the specific requests of each individual company.    

The window consists of buttons and three different tabs: *General*, *Load*, and *Analytic*. 

### General

**Management of double measurement unit**: only if activated, the system can manage the alternative unit of measure in the supplier order.

**Automatic proposal for alternative UM:** if activated, it ensures that the quantity related to the alternative unit of measure is proposed, provided that a default one has been set on the item registry. This flag can only be activated if the previous flag has been activated.

**Cost zero if price lists are missing**: if active, in the absence of a valid price list, it populates the price with a value of zero. If this item is not checked, the field will be filled with the last cost of the item, if present.

**Block the document insertion in public holidays:** if active, the system does not allow the entry of the order on holidays (Saturday, Sunday, and holidays). If not active, the system does not perform any checks and allows the order to be entered.

**Propose brand with priority Price list/Sales order:** no longer used.

**Allow edit VAT:** if active, in the case of [Automatic Order Creation from Purchase Requests](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests), the VAT code is proposed from the supplier registry.

**Mandatory user code:** if active, it is necessary to specify the operator code in the header, under the *Country* entry, otherwise it will not be possible to save the order. When the flag is not active, this data is optional.

**Search item price in all the defaults price list**: if active, the price of the item entered in the supplier order line will be searched in all predefined price lists of the supplier registry, in addition to the default price list. If not active, the price of the item will be searched only in the default price list present in the order header, but not in other price lists for the same supplier with different validity dates.

**Use vendor item**: if active, the item grid of the supplier order also proposes the field for entering and searching the supplier item code. If not active, this field will not be visible.

**Check items in exhaustion**: if activated, the system checks the availability of the items in the order line and notifies if the item is about to run out, meaning the flag *In exhaustion* has been activated in the [item registry](/docs/erp-home/registers/items/create-new-items).

**Packings accounting**: allows the accounting of rows with packaging items, which are usually managed for verifying the stock of [Package to be returned)](/docs/configurations/tables/logistics/package-to-be-returned).

### Load

In this tab, the parameters used for [Goods Receipt Load](/docs/purchase/goods-reception/procedures/good-receipt-load) are defined.

**Create recording with document date**: if active, the warehouse registration is made with the same date as the order, and it will not be necessary to specify the registration date in the load form. If not active, it will be necessary to specify the date in the load form.

**Priority warehouse and load template**: if active, it ensures that the warehouse load is performed using the **Warehouse** and **Template** defined in this tab. If the flag is not set, it uses the warehouse and reason defined in the goods receipt lines, if present; otherwise, it considers the parameters set in the goods receipt load procedure.

### Analytical

In this tab, the priority for retrieving the cost center (CdC) or profit center (CdP) in the document line is specified.

It is possible to modify the priorities using the following buttons in the ribbon bar:

> **Move Up**       
> **Move Down**.

*Default values (Valori di default)*: the CDC or CDP is retrieved from the invoiced type if present. For further details, refer to the table [Purchase turnover type](/docs/configurations/tables/purchase/purchase-invoices-type). If it is not present in the invoiced type, the system will look for it in *Supplier Registry (Anagrafica fornitore)*. If not present, it will be searched in *Item registry* and subsequently at the *Warehouse* level.

**Recompute**: if active, this flag recalculates the cost/profit centers according to the chosen priority.

**Mandatory cost/revenue center**: if active, this flag makes the entry of cost/profit centers mandatory.

**Evaluate priority by dimension**: if active, this flag allows evaluating every priority entered at the top to see if there are additional dimensions not yet valued. For example, suppose we have in the Item Registry the cost center of the *Business unit* dimension and in the purchase invoiced type the *Directional* dimension. If the flag is not active, the system evaluates only the CdC present in the Item Registry; if the flag is active, after loading the CdC present in the Item Registry, the system also evaluates the dimension present in the purchase invoiced type (in our example, the *Directional* dimension) and if it is different from those already managed (*Business Unit*), it loads the center and continues with the verification of other priorities.