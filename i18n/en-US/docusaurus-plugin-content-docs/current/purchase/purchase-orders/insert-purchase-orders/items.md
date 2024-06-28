---
title: Items
sidebar_position: 3
---

In this tab, all items along with their respective data are entered.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

### Mandatory Data

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

import RowType from './../../../import/sections/row-type.md'

<RowType />

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

In the absence of a price list, the proposed data can be taken from the *last cost* of the item record, if the *Zero Cost in Absence of Price Lists* flag is not active in the [Purchase Orders Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters).

import Vat from './../../../import/fields/item-vat.md'

<Vat />

**Amount**: automatically calculated net of discounts.

**Total Discounts**: indicates the total amount of discounts in the *Discounts/Pricelists* tab for each item line.

### Optional Data

**Supplier Article Code/Description**: in this section, you can add the code and description used by the supplier to identify the item; this data is automatically proposed if an article supplier is associated in the item record's [Preferred Suppliers](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors) tab.

**Purchase Invoicing Type**: the data entered in the [General](/docs/erp-home/registers/items/create-new-items/item-registry/generality) tab of the item record is proposed here. If absent, no data is proposed, and at the time of invoice accounting, the value entered in the *Default Counterpart Cost/Revenue* field of the contact record will be considered.

**Requested Delivery Date** and **Delivery Date**: indicate the requested and expected delivery dates. The dates entered in the header tab may be proposed or manually modified.

*Specific buttons*

> **Split Quantity into Multiple Delivery Dates**: used to split the order line into multiple lines based on the requested delivery. This procedure opens a new form where the new *requested delivery date* and quantities for each date must be entered.
> **Packaging**: enabled after saving the order and allows the creation of a UDC (Unit of Delivery) from the selected line. The line must be a coded item saved in the document. The user must have rights within the [Load/Unload Parameters](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro/) for pallet loading. Additionally, the item must be managed as a UDC, and based on the settings in the Item Record's [Packaging](/docs/erp-home/registers/items/create-new-items/item-registry/packaging) tab, the UDC will be created adhering to these criteria.
> **Update Pricelists**: the *Update Current Pricelist* button updates prices in the current pricelist for each selected item line; the *Create New Pricelist with New Validity* button opens a pop-up to enter the validity dates for the new pricelist, which will contain only the selected lines and will be addressed to the supplier specified in the order.

:::note Remember
When creating/updating a pricelist through this procedure, only manually entered discounts are included in the pricelist.
:::

## Discounts/Pricelists

**Pricelist**: the pricelist from which the item price was taken is proposed, along with start/end validity dates and any special conditions (e.g., discount tier type) assigned to the item in the pricelist.

**Manual Price**: activated automatically when the item price is manually entered or modified.

**Pricelists to Update**: if this flag is active, the item price is automatically updated in the corresponding purchase pricelist upon saving.

**Discounts**: all discounts associated with the item are proposed, each with its own calculation and assignment base.

*Specific button*

> **Delete Discount**: allows deletion of the selected discount from the corresponding grid.

## Item Data

Additional information related to the item is displayed/entered in this tab.

**Variant**: in this field, you can select a variant of the item from those previously coded in the [Variants](/docs/erp-home/registers/items/create-new-items/item-registry/variants) tab of the item record. If different prices and/or discounts have been set for each variant in the pricelist, they will be updated when selecting a different item variant.

**Project**: represents the project associated with the document. If a project has been entered in the document header, it will be carried over to all item lines; alternatively, it can be selected via the project help tool.

**Notes**: these are notes related to the item line, which can also be entered via the coded notes help. They will be included in all documents generated from this.

**Brand**: represents the brand of the item, taken from its record or from the item's pricelist.

**Production Job Orders**: if the purchase order is linked to a production job order (through the release of a planned purchase order and creation of a purchase order from a purchase request), the parent item from the job order is displayed here.

**Request for Quotation**: if the order was created from a request for quotation using the [Create Purchase Order from Supplier Offer](/docs/purchase/offer-request/order-creation) procedure, the reference request is displayed here.

**Warehouse and Reason**: the warehouse and associated reason that will appear automatically when loading the corresponding items into inventory. Data is taken from the [Order Types](/docs/configurations/tables/purchase/purchase-orders-type) but can be manually modified for each item line.

**Production Jobs**: if the purchase order was created through production planning, the related production job order is displayed here (see *Automatic Purchase Order Creation*).

**Alternative Unit Price**: if active, indicates that the price entered for the item line refers to the alternative unit of measure and not the primary one. This flag, along with the *Alternative Unit of Measure* and *Alternative Quantity* fields, is visible only if the [Purchase Order Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters/) flag for *Managing Dual Unit of Measure* is activated.

**Unit of Measure/Alternative Quantity**: if an alternative unit of measure has been coded in the item record's [Alternative Unit of Measure](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um) tab with the *Default* flag, and the *Automatic Proposal of Alternative U.M.* flag has been activated in the Purchase Orders Parameters, these values will be proposed automatically when the item is inserted.

### Analytical

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## Extra Data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## Attached Documents

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## Value Section

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />