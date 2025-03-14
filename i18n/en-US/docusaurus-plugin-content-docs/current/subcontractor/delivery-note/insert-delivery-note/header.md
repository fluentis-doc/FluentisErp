---
title: Header (Testata)
sidebar_position: 2
---

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually (manualmente)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help (help di campo)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), or, based on the data entered in the subcontractor's registry, the application automatically fills in the fields *automatically (automaticamente)*.

Entering the **Supplier** will *automatically propose (proposti)* all specific data from the **Header** tab, according to the previously set data in the [supplier registry (anagrafica fornitore)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to its address and in the *sections (sezioni)*:  

- **Currency**: [Currency (Divisa)](/docs/guide/common/glossary/glossary-intro#currency), [Exchange rate (Cambio)](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Value date (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: [Country (Nazione)](/docs/guide/common/glossary/glossary-intro#country), [Language (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zone (Zona)](/docs/guide/common/glossary/glossary-intro#zone)
- **Delivery**: [Shipping (Spedizione)](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage (Porto)](/docs/guide/common/glossary/glossary-intro#carriage), [Packing (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), [Price list (Listino)](/docs/guide/common/glossary/glossary-intro#sales-price-list) and its [validity range (intervallo di validità)](/docs/guide/common/glossary/glossary-intro#validity-date)

*Other fields (Altri campi)*:

**Delivery Note status**: these 2 flags identify the status of the DDT, which can be printed (after the physical print of the delivery DDT report has been launched) and downloaded (after the DDT has been downloaded from the warehouse). If the DDT has not been printed, it cannot be downloaded;  

**Our/Your reference**: when the procedure [Fulfillment from order (Evasione da ordine)](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) is completed, the information present in the same field of the order is also proposed;  

**Project**: using the [field help (help di campo)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), you can link the document to a project.  

**Specific buttons (Pulsanti specifici)**

> [Expected deliveries (Consegne previste)](/docs/subcontractor/delivery-note/insert-delivery-note/header-procedures/execute-from-order): calls up the procedure to create a DDT from an order. It activates with the entry of the supplier and DDT type. The order to be fulfilled must have the *Printed* flag set and the *Order confirmation date* must be filled in;  
> **Automatic unload**: used to automatically download the warehouse with the selected items. This field will be editable only once the *Printed* field is activated.

### Payments

The **Payment Terms** are automatically reported from the *Supplier Registry > Payments tab (Anagrafica fornitore > tab Pagamenti)* and can be modified/deleted by the user.

If a financial discount is associated with the **Payment type**, the discount amount is considered only for accounting purposes, i.e., in the document deadlines and not in the total DDT.

If the document originates from an order, the payment types can be taken from the first document or from the supplier registry. 

*Specific buttons (Pulsanti specifici)*

> **Insert/Delete payments (Inserisci/Cancella pagamenti)**: used to insert/delete the selected payment lines.

### Discounts

Only the predefined discounts retrieved from the *Supplier Registry > Discounts tab (Anagrafica fornitore > tab Sconti)* are proposed and can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Agents

Indicates the agent code and its commission for each item line. The code and percentage defined in the *Subcontractor Registry > Agents tab (Anagrafica terzista > tab Agenti)* are proposed.

If the commission is not linked to the subcontractor in their registry, the agent must still be entered but with NULL commission because if it were with a commission of 0, it would mean that the agent is linked to the agent but does not receive commission.

The same section will be repeated for each item line in the respective *Agents tab (tab Agenti)*.

**Specific button (Pulsante specifico)**

**Delete agents**: allows deleting the selected agents.