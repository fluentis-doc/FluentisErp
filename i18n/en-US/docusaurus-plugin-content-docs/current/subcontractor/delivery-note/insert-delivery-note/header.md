---
title: Header
sidebar_position: 2
---

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), or, based on the data entered in the subcontractor's registry, the application automatically fills in the fields *automatically*.

Entering the **Supplier** will *automatically propose* all specific data from the **Header** tab, according to the previously set data in the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to its address and in the *sections*:  

- **Currency**: [Currency](/docs/guide/common/glossary/glossary-intro#currency), [Exchange](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: [Country](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone)
- **Delivery**: [Shipping](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), [Price list](/docs/guide/common/glossary/glossary-intro#sales-price-list) and its [validity range](/docs/guide/common/glossary/glossary-intro#validity-date)

*Other fields*:

**Delivery Note status**: these 2 flags identify the status of the Delivery Note, which can be printed (after the physical print of the Delivery Note report has been launched) and downloaded (after the Delivery Note has been downloaded from the warehouse). If the Delivery Note has not been printed, it cannot be downloaded;  

**Our/Your reference**: when the procedure [Fulfillment from order](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) is completed, the information present in the same field of the order is also proposed;  

**Project**: using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), you can link the document to a project.  

**Specific buttons**

> [Expected deliveries](/docs/subcontractor/delivery-note/insert-delivery-note/header-procedures/execute-from-order): calls up the procedure to create a Delivery Note from an order. It activates with the entry of the supplier and Delivery Note type. The order to be fulfilled must have the *Printed* flag set and the *Order confirmation date* must be filled in;  
> **Automatic unload**: used to automatically download the warehouse with the selected items. This field will be editable only once the *Printed* field is activated.

### Payments

The **Payment Terms** are automatically reported from the *Supplier Registry > Payments tab* and can be modified/deleted by the user.

If a financial discount is associated with the **Payment type**, the discount amount is considered only for accounting purposes, i.e., in the document deadlines and not in the total Delivery Note.

If the document originates from an order, the payment types can be taken from the first document or from the supplier registry. 

*Specific buttons*

> **Insert/Delete payments**: used to insert/delete the selected payment lines.

### Discounts

Only the predefined discounts retrieved from the *Supplier Registry > Discounts tab* are proposed and can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Agents

Indicates the agent code and its commission for each item line. The code and percentage defined in the *Subcontractor Registry > Agents tab* are proposed.

If the commission is not linked to the subcontractor in their registry, the agent must still be entered but with NULL commission because if it were with a commission of 0, it would mean that the agent is linked to the agent but does not receive commission.

The same section will be repeated for each item line in the respective *Agents tab*.

**Specific button**

**Delete agents**: allows deleting the selected agents.