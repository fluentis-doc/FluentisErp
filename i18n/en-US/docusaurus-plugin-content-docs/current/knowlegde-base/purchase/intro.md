---
title: FAQ Purchases 
sidebar_position: 1
---

<details>

  <summary>1. Why is the <b>Description</b> field of the supplier item mandatory while for the customer it is not?</summary>
  
The customer needs to know their code, but the description is not important, as the code is used in the printed document. Instead, for the supplier, the description may be much more technical and necessary, as the data is usually imported.

</details>


<details>

  <summary>2. What is the purpose of the <b>Tier type</b> in the item lines of the price list?</summary>
  
The tier type entered in the item line of the price list is automatically proposed in the documents, otherwise the user will manually choose the tier type to apply to the line. Remember that for the same price list item, it is possible to enter different discount tiers.

</details>


<details>

  <summary>3. Is there a check that prevents double inventory entries from delivery notes (ddt) and invoices?</summary>
  
Yes, if an invoice is linked to an already posted or shipped ddt, the invoice cannot be posted/shipped, unless the "Unlink" flag is active in the invoice type: in this case, both the ddt and the invoice can be processed.

</details>


<details>

  <summary>4. How can I keep the history of previous prices of an updated price list?</summary>
  
In this case, it is necessary to duplicate the document.

</details>


<details>

  <summary>5. What are the conditions for using <b>Massive change</b> in the summaries of a purchase invoice?</summary>
  
The conditions are:       
 1. The price must not be VAT-inclusive;     
 2. The items must not have discounts;
 3. The items must have an actual quantity.

</details>


<details>

  <summary>6. How can I prevent the quantity of items in documents already posted to inventory from being modified?</summary>
  
It is necessary to open the Initial Warehouse Parameters corresponding to the current year and remove the **Modify quantity** flag from the *Modify stock records from documents* section. This will prevent the modification of line quantities in documents that have already been processed to inventory.

</details>


<details>

  <summary>7. The invoice appears as Posted even though I have not made any inventory movement, and the Posted flag is locked and cannot be removed.</summary>
  
In the case of an invoice created from a delivery document that has already been posted, there is a general parameter VE-PurchaseInvoices_VerifyLoadStatusDDT that locks the Posted flag even in the invoice.         

</details>