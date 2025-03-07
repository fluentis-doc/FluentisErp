---
title: Sales Invoice Types 
sidebar_position: 20
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist of the linked page.
:::

The table opens through the path **Tables > Sales > Sales Invoice Types** and is used to determine the properties of an invoice;

It allows you to insert new records or search for existing ones to view, modify, or delete them;

The form consists of a filter area and a result area; Once all desired filters are set, just click the **Search** button to view the results in the result grid;

To insert new records, you need to click on the first empty row in the grid or press the **New** button;

**Type/Description**: invoice type and description of the invoice type; the code entered must be unique;

**Numeration:** in this field, the appropriate numeration code must be entered; For further details, refer to the item on [fluentis numerations](/docs/configurations/tables/fluentis-numerations);

**Invoice nature**: in this field, the nature associated with the invoice type must be entered; the value will be selected from a list including Invoice, Credit note, etc.;

**Order**: if active, the invoice can be created from the order execution through the appropriate procedure; otherwise, the 'get from orders' button will be deactivated;

**Direct**: if active, it means that the invoice is of direct type and the transportation data must also be filled in the invoice; if not active, the invoice will be of deferred type and the transportation data will be retrieved from the Delivery Note;

**Intrastat Transaction Nature**: in this field, the transaction code used for the intrastat declaration must be entered; For further details, refer to [Nature of intrastat transactions](/docs/configurations/tables/finance/nature-of-intrastat-transaction);

**In statistic**: if active, invoices of this type will be included in the statistics and will be visible in the *Invoiced* prints;

**Proforma**: if active, the invoice is of proforma type and cannot be accounted for;

**Template**: in this field, the ledger template used for the invoice's accounting must be entered; For further details, refer to [general ledger templates](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates);

**Document Type**: in this field, the cost template used for the accounting of the invoice in analytic accounting must be entered;

**Notes**: free text field where descriptive notes about the invoice type can be entered;

**Customer ctrl.**: if active, this flag allows the system to check the type of register of the account/detail account that has been entered in the document to ensure that it is strictly a customer; If not, the system will notify the user with an error message; It is *mandatory* to activate it for all types of sales invoices;

**Block listed document**: if active, this flag does not allow modifying an invoice that is already marked with the *Printed* flag set in the header;

**Intracomunitar**: if active, the system checks that the customer's country is a *EEC country*; This flag should be *set only on intracomunitar invoice types*; If there is no link between the customer and the intracomunitar invoice type, the system will return a warning message;

**Execution proforma invoice**: if set, and the invoice is proforma, the execution execute the order; otherwise, the order remains not executed;

**Reason for transport**: Free text field where a reason for transportation that can be printed on the invoice should be indicated;

**Credit**: if active, invoices of this type will fall under the credit limit control;

**Esclude lock:** refers to the lock for exceeding the credit limit and is therefore included in the Lock Manager management present in the treasury area among the procedures for Using Credits. If active, the system for this invoice type will not consider the document lock due to exceeding the credit limit but will allow the user to insert and print the document; if not active, the invoice type will be blocked if the credit limit is exceeded, and the user will be prevented from printing the document;

**Warehouse/Description of warehouse**: in these fields, the [warehouse](/docs/configurations/tables/logistics/warehouses) of commitment for the items present in that particular invoice type will be indicated; the specified warehouse is reported in all item lines included in invoices of this type; 

**Template/Warehouse template description**: in these fields, the [movement template](/docs/configurations/tables/logistics/warehouse-templates) for the committed items contained in that specific type of order will be indicated; the specified reason will be reported in all item lines included in orders of this type; 

**Maturity value grouping**: if active, in the accounting of invoices, the lines will be grouped; For further details, refer to [maturity value grouping](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping);

**Agricultural VAT for sales**: if active, during the creation of delivery notes, the system will check if an agricultural VAT code is present for the item used; if not, the VAT code present in the item's register will be used;

**Check unloaded Picking**: if active, when creating an invoice from a downloaded picking, the downloaded flag for the delivery note is automatically activated; If not active, the flag will not be activated;

**Block Picking Quantity**: if active, it blocks the quantity and alternative quantity in the invoice created from the Loading Unit list; If not active, it does not block the quantity but leaves it free; It is recommended to always activate this flag if using picking and Loading Unit management;

**Calculate Commissions**: if active, invoices belonging to this type will be counted in the calculation of agent commissions;

**Disconnect D.N.**: if active, it is also possible to download deferred invoices from the warehouse (Normally, warehouse download occurs via D.N.);

**Not execute Picking**: if active, will not execute the picking if an invoice is generated;

**Price including VAT**: The management of VAT-included prices is activated through this parameter present in all documents in the sales area starting from sales price lists. In the price recovery of a document with the VAT Price type, it searches the price lists, with the same VAT Price flag set, and calculates discounts starting from the VAT-included price. From the VAT-included price, the non-VAT price is calculated using the VAT rate of either the customer contact or the item register. In the documents, the Price and VAT Price columns are visible. Attention! If there is no valid price list with the VAT Price flag set and there is a sales price in the item register, the sales price will be proposed as VAT Price. To understand how the Price Recovery and VAT and non-VAT prices function, refer to the item Price Recovery and Discounts in sales documents.

**Economic competence**: if active, the invoice type has economic competence, and therefore, it will be necessary to set the dates of the competence period;

**Economic accrual template**: in this field, the economic accrual template used in invoicing must be indicated; This value can be chosen from a list; For further details, refer to [general ledger templates](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates);

**Extra Data Matrix Management**: if active, it allows you to visualize, in the case of item management with a matrix, an additional tab for entering the quantity values for each matrix cell; If not active, this tab and the corresponding matrix are not displayed;

**Print Report**: in this field, it is possible to set the default print to be used for this type of document; remember that, during the document printing phase, you will need to select the 'Multiple Prints' report to automatically use the default print;

**Number of copies**: in this field, the number of document copies to be printed is set;

**Recycle Management**: this button enables the Recycle Management for the invoice type;

**Fixed Assets Management**: this flag enables the management of fixed assets in the invoice type, and the type of asset operation must be specified in the next field;

**Operation Type**: in this combo box, you can select the type of fixed asset operation from various options (revaluation, destruction, gain, etc.).

**Discount Type/Description**: in this column, the type of discount can be associated to be proposed when discounts are entered directly in the *Item Discounts* column of the document item grid (for more details see the article [Simplified Discount Widget Management](/docs/sales/sales-flow/discount-widget)).