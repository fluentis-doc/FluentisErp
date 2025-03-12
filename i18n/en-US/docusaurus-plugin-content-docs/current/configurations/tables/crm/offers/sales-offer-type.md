---
title: Sales offer types
sidebar_position: 1
---

The table is used to determine the properties of a sales offer.

The form consists of a filter area and a results area. Once all desired filters are set, just click the **Search** button to display the results within the results grid.

To enter new records, you need to click on the first empty row in the grid or press the **New** button.

**Code/Description (Codice/Descrizione):** fields where the code and description of the document type are indicated (the code you enter must be unique).

**Modify version**: this flag indicates the types of offers for which to manage versions.

**Price including VAT**: allows the system to retrieve the selling price from price lists or from the item registry and reports it with the addition of VAT. If it does not find the price list, for example, in case of an expired price list or incompatible currency list, it retrieves costs or prices from the item registry and reports them including VAT. The costs and prices in the registry are in EUR, so the system will also convert them into the customer's currency.

**Numeration**: this field should contain the appropriate numbering code. For further details on document numbering, refer to the article [Fluentis Numberings](/docs/configurations/tables/fluentis-numerations).

**Sales order type**: this field indicates the type of Sales Order to be created at the time of converting the offer using the appropriate procedure.

**Sales price list**: this type of generic price list is used for price searching if there is no type of price list entered in the price lists tab of the customer or contact registry. It is usually used when making offers to CRM contacts that have not yet been acquired as customers and for which no price list types have been entered in the Price Lists tab of the registry.

**Print and Number of Copies (Stampa e numero di copie)**: these fields define the default print and the number of copies to print; remember that to print the default print, it is necessary to select *Multiple reports* at the time of printing.

**Item Prototype Type**: this field contains the type of item prototype to be created in the prototype creation procedure from within the offer.

**Opportunity Type**: if an Opportunity Type is linked in the Offer Type, a New Opportunity will be created upon saving the Offer if no pre-existing one is entered in the Offer header; if one is entered, the pre-existing Opportunity is updated.

**Asset Management and Operation Type (Gestione cespiti e Tipo operazione)**: the flag allows for managing assets for this type of document. In the next field, the asset operation type is indicated, which in the case of sales can be a total alienation, partial alienation, or destruction.

**Discount Type/Description (Tipo sconto/Descrizione)**: in this column, you can associate the type of discount to be proposed when discounts are entered directly in the *Item discounts* column of the documents' item grid (for more details, see the article [Simplified Discount Widget Management](/docs/sales/sales-flow/discount-widget)).