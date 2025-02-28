---
title: Sales Offer Types 
sidebar_position: 23
---

:::tip[Fast Start]
The table is subject to the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::

The table opens via the path **Tables > Sales > Sales Offer Types**.

It allows you to insert new records or search for existing ones to view, modify, or delete them.

The form consists of a filter area and a result area. Once all desired filters are set, simply click the **Search** button to display the results within the result grid.

To insert new records, you need to click on the first empty row in the grid or press the **New** button.

**Code/Description:** fields where the code and description of the document type are indicated (the code entered must be unique).

**Hierarchical structure:** by enabling this flag, the items in the offer will follow a hierarchical structure; for more details, refer to the related [documentation](/docs/sales/offers/insert-offer).

**Modify version:** this flag indicates the types of offer for which to manage versions.

**Price including VAT:** allows the system to retrieve the selling price from price lists or from the item registry and displays it with the addition of VAT. If it does not find the price list, for example, in case of an expired price list or a price list in an incompatible currency, it retrieves the costs or prices from the item registry and reports them including VAT. The costs and prices in the registry are in Euro, so the system will also convert them into the customer's currency.

**Numeration:** in this field, the appropriate numeration code should be entered. For more information on document numeration, refer to the article [Fluentis Numerations](/docs/configurations/tables/fluentis-numerations).

**Sales order type:** in this field, the [type of Sales Order](/docs/configurations/tables/sales/sales-order-types) to be created at the time of converting the offer with the appropriate procedure is indicated.

**Sales price list:** this type of price list, which is generic, is used for price searches if no type of price list is entered in the price lists tab of the customer or contact registry. It is usually used when making offers to CRM contacts that have not yet been acquired as customers and for which price list types have not been entered in the Price Lists tab of the registry.

**Print report and number of copies:** through these fields, the default print report and number of copies to print are defined; remember that to print the default print report, it is necessary to select *Multiple reports* at the time of printing.

**Item Prototype Type:** this field contains the type of item prototype to be created in the prototype creation procedure from within the offer.

**Opportunity type:** if a [Opportunity Type](/docs/configurations/tables/crm/opportunities/opportunity-type) is linked in the Offer Type, upon saving the Offer a [New Opportunity](/docs/crm/chance/new-chance) will be created if there is no existing one entered in the Offer header; if one is entered, the existing Opportunity will be updated.

**Fixed assets management and Operation type:** the flag allows for the management of fixed assets for this type of document. In the next field, the type of fixed asset operation is indicated, which in the case of sales can be a total sale, partial sale, or destruction.

**Discount type/Description:** in this column, you can associate the type of discount to propose when discounts are entered directly in the *Item Discounts* column of the document item grid (for more details see the article [Simplified Discount Widget Management](/docs/sales/sales-flow/discount-widget)).