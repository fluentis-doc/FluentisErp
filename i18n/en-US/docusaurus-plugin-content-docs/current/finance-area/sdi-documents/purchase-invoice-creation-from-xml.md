---
title: Create Purchase Invoice from XML
sidebar_position: 4
---

The button **Create Purchase Invoice** is available in the ribbon bar of the ES Document Log, accessible from Applications > BizLink > ES Documents > Incoming Purchase Documents.

:::note Note
To activate the button, the flag SDICFC_PurchaseInvoiceCreation must be set in the fluentis.SDI_CompanyConfiguration table via SQL.
:::

Once a row is selected, it allows for the creation of an invoice in the passive cycle documents after importing or receiving the ES document in XML format from FBH. 
It is therefore possible to proceed to attach it to the fulfillment of Purchase Delivery Note and orders to which it refers.

After clicking the Create Purchase Invoice button, a window will open to specify the supplier account to use. If the account does not exist, it will be possible to create it.
Once the account is confirmed, another window titled Values to Use will open, requesting the following data:

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img1.png)

**Type of Purchase Invoice:** specify the type of document to create;

**Items:** specify the items that will be part of the purchase invoice;

**VAT:** specify the applicable tax rate;

**Payment Type:** contains the payment type to be entered in the document for the supplier.

All these data can be set as default to propose for subsequent times using the flag **Save Settings**, present next to each data to be used.

Once all fields are filled in and OK is pressed, the created purchase invoice will open; it will have the chosen type, item, and VAT. If the item is not recognized as coded, an uncoded item will be inserted. 
Other data is retrieved by default from the supplier's register. It is possible to manually modify and save the invoice.

---

For creating invoices with **CODED ITEMS** (automatic recognition of item registers present in Fluentis), it is necessary to proceed as follows to allow for recognition; otherwise, an invoice will be created with type 2 lines (uncoded).

Item registrers may have an internal coding that differs from that used by the supplier sending the invoice.

Example: Code - MATCH1  Description - PT 2.5 BU
Within this register, the section of *preferential vendor* must be populated with the indication of the relevant supplier and the corresponding coding adopted by the supplier for this item.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img5.png)

The supplier may adopt a type of coding or even more than one as visible in the image.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img3.png)

For example, an EAN code encoding or some other type.

:::danger Attention
The first coding present in the XML document will be read; in this example, the SA type coding will be utilized while the EAN coding will be ignored, thus this first reference must be managed.
:::

Within the supplier register, the valid coding type for that supplier must therefore be inserted (tab *Fiscal Information*).

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img6.png)

If the configurations are done correctly, the result of the creation of the invoice is as follows, where you can notice that there is an uncoded line for unanticipated transport costs.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img4.png)

---

In the ribbon bar of the header, there is the button **Sdi – Closing Documents** that allows you to link a Purchase Delivery Note to the purchase invoice just created. 

Once the button is clicked, a window will open where there are filters to set for a more targeted search of the Purchase Delivery Notes to match: you can enter the Purchase Delivery Note Type, number, Supplier, etc.

By pressing the Search button, the Purchase Delivery Notes will be displayed on the left, and the purchase invoices on the right that can be matched.

By selecting the documents or individual rows in the grids and clicking the **Links** button in the ribbon bar, the linking between documents will be executed.

A window will appear to notify the operation is completed and another window Sdi - Closing Documents Summary – 
Closure Documents with the details of the connection.


![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img2.png)

From this moment, the Purchase Delivery Note and the invoice are linked. It is possible to verify the connection within the Purchase Invoice, which contains the reference to the Purchase Delivery Note in the Items tab.