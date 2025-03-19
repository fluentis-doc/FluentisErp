---
title: Sales FAQ 
sidebar_position: 1
---

<details>

  <summary>1. How can I ensure that the list prices of the components of a Bill of Materials are displayed in the order item lines after clicking the ribbon bar button <b>Expand first level bill of materials</b>?</summary>
  
It is necessary to set the flag "Propose commercial data for manually exploded base bill" located within the customer order parameters. This way, the commercial data will be displayed, including the list prices of the components.

</details>

<details>

  <summary>2. How to manage the <b>validity date</b> in the Price Lists tab of the customer registry?</summary>
  
The validity date entered in the Price Lists grid in the customer registry indicates which types of price lists are valid from that date for that customer. The price retrieval in the documents must know in which price lists to look for the item. 
As a first condition, the price list to be included in the documents must be valid on this date. 
As a second condition for choosing the type of price list to include in the documents, the chosen price list must have a validity start date strictly less than the document date.     
In this way, it is possible to create all the price lists we want and apply them to the customer only from a certain date. 
Technically, all the price lists that are created, to be used for price searches must have:            
1. a validity start date greater than or equal to the validity date;       
2. a validity start date less than or equal to the document date;       
3. a validity end date greater than or equal to the document date or a null validity end date;              
Among all the price lists found with these conditions, the one with the validity range closest to the document date is chosen.

</details>

<details>

  <summary>3. If I have multiple <b>discounts</b> on the same item in a price list, what is the **priority**?</summary>
  
The considered priority is that stated in the discount type. Remember that the type of discount is important for managing the priority and the nature of the discount (Taxable or Cascade).

</details>

<details>

  <summary>4. Is it possible to duplicate only some items from the price list and not the entire price list?</summary>
  
Yes, it is possible to duplicate only specific items using the "Duplicate and Maintenance of Sales Price Lists" procedure and selecting only the desired items. 
The result will be a new price list containing only the modified items. 
For the other items, the previous price list will remain valid in the absence of a validity end date.

</details>

<details>

  <summary>5. For invoices, there is no <b>Availability Check</b> flag: how can we exclude them from the requirement calculation?</summary>
  
The invoices considered in the requirements are:
- immediate invoices, that is, accompanied;
- invoices arising from Delivery Notes if the Delivery Note has not been logged in the warehouse.

</details>

<details>

  <summary>6. What is the purpose of the <b>Tier Type</b> in the item lines of the price list?</summary>
  
The tier type entered in the item line of the price list is proposed automatically in the documents; otherwise, the user will manually choose the tier type to apply to the line.

</details>

<details>

  <summary>7. Can I use BizLink to export sales invoices to another management system, such as that of the accountant?</summary>
  
Yes, it is possible to create a dedicated parser to export the data, as required by another management system. 
Alternatively, the XML file of electronic invoicing can be used directly, if the management system that receives the invoice allows it: Fluentis manages the creation of invoices by importing the XML file of electronic invoicing.

</details>

<details>

  <summary>8. How can I set up <b>collection expenses</b> for receivables so that they are automatically handled by the management system based on the number of due dates?</summary>
  
If the expense has the flag "Collection Expense" and the payment type has the effect nature = 0 (RECEIVABLE), a collection expense will be added for each due date of the payment solution. 
If there are multiple due dates, each will have its own collection expense.

</details>

<details>

  <summary>9. What are the conditions for managing the <b>barcode</b> in documents?</summary>
  
The steps are as follows.     
1. In the Sales Document Parameters, set the flag <b>Use barcode</b>;                            
2. In the item registry, enter the <b>Barcode code</b>;                    
3. In the documents, enter the code in the <b>Barcode</b> column of the item grid; if the program recognizes the code, it automatically inserts the item.

</details>

<details>

  <summary>10. Where should the <b>Brand</b> be inserted to be displayed in sales documents?</summary>
  
The Brand must be entered in the item grid of the sales price lists to be displayed in the documents.

</details>

<details>

  <summary>11. Is it possible to hide a certain type of invoice from a user?</summary>
  
Yes, with <b>Restrictions</b>. These prevent users from creating, viewing, or modifying certain types of documents. Below is an example of how to prevent a user from using the Invoice Type with code FVITDIF. Remember that it is necessary to add the Restriction also in the user's Arm profile, in the appropriate grid.            

![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)

</details>

<details>

  <summary>12. The invoice is marked as Delivered even though I have not made any warehouse movements, and the Delivered flag is locked and cannot be removed.</summary>
  
In the case of an invoice created from a delivery document that has already been delivered, the general parameter VE-PurchaseInvoices_VerifyLoadStatusDDT blocks the Delivered flag even in the invoice.          

</details>

<details>

  <summary>13. How can I populate the Weights in the invoice summaries?</summary>
  
To see the summary of weights, it is necessary to flag the parameter **Recalculate transport** in the Document Parameters. It will also be necessary to select the correct unit of measure in the summaries to display the value.        

</details>

<details>

  <summary>14. Why can't I set Recipient and Destination when grouping the C.M.R. procedure by Account?</summary>
  
If you group only by Account, you cannot set Recipient and Destination because multiple lines with the same customer but different recipients/destinations create a single CMR line. Therefore, it is necessary to group by both Destination and Account.        

</details>

<details>

  <summary>15. How can I maintain the Carrier entered in the order in the DDT if I pass through Picking?</summary>
  
If the parameter "DDT grouped by single order" is set during DDT creation from Picking, the Carrier from the order is retained.

</details>

<details>

  <summary>16. What causes the difference in amount between the Invoiced Print and the Sum in Invoice Search?</summary>
  
In the Invoice Search, the taxable amount in EUR includes discounts/surcharges/final charges of the document, while the invoiced amount calculates only the values in the item list. 
In the Invoice Search, all invoice types are included in the filter, while in the Invoiced amount only the invoice types with the 'In statistics' flag active are counted.

</details>