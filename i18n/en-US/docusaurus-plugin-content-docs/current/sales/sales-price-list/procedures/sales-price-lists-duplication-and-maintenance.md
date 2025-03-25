---
title: Duplicate and Maintenance Sales PriceList
sidebar_position: 6
---

This procedure allows for updating items in sales price lists.     

### Available Filters

In the filter section, you can choose to view:           
- **All** types of price lists,       
- only **General** price lists, or        
- only **Customer-specific** price lists.        

Based on the selection, the search for **P. list type** or **Client** is activated on the right side.         
If the filter for *Starting validity date* is completed, the application displays the items from the lists valid on the entered date. Otherwise, all items will be displayed, including those from lists that are no longer valid.         
You can also filter by: End Validity Date, Currency, Item, Item Barcode, or only for items that have been moved, i.e., linked to documents from a certain date.

### Item Grid

Once the desired filters are selected, clicking Search will populate the grid with all items that meet the requested criteria. The columns of the grid are:      
- **P. list type**: shows the type of list, whether generic, along with the relevant **Description**.      
- **Account/Subaccount/Description**: contains the owner of the price list if it is personalized.       
- **Class/Code/Item Description**: identifying data of the item in the price list.      
- **Currency code**: shows the Currency of the price list.    
- **Measurement Unit Code**: this data is also taken from the price list.      
- **Price**: this field shows the price of the item present in the price list.        
- **Discount**: this field shows any discount present in the price list (only fixed discount).
- **Net price**: this column displays the Price net of Discounts.    
- **From validity date**: this field shows the start validity date of the price list.      
- **To validity date**: this field shows the potential end validity date.      
- **Last document date**: this field shows the date of the most recent DN that lists the item and price list.    

### Toolbar

The buttons available on the ribbon bar are as follows:     
- **Refresh**: opens a pop-up to proceed with updating the item price in the list; you must specify:
1. **Starting validity date** of the price list rows to be updated (optionally also an **Expiration Date** which is not mandatory)
2. **Rounding** containing the policies for price and discount changes in the price list, or
3. **Increment percentage**, removing the rounding code and manually entering the percentage.
4. **OK** to execute the update.

:::note Note
If the Start validity date is not specified, the update will yield no result and will not be executed.
:::  

- **Close price lists**: opens a new form to enforce the *Expiration Date* for the selected price list rows; the *End Validity Date* must be greater than the latest date of the last document referring to the price list rows to be closed (expired).      
- **Duplicate price lists**: opens a pop-up and, for the selected price list rows, creates or adds new rows to a new price list or an existing one; it is possible, for the selected rows, to create a new price list by specifying whether you want to create a *General* or *Customized* list, the *P. list type*, the *From validity date*, and the *Currency*; with the flag *Maintain the same dates of the source price list*, a list of a different type is created but with the same validity dates.
- **Discounts**: opens a pop-up to assign *Discounts* to the selected rows, adding them to the existing ones or replacing them using the checkbox *Delete previous discounts*.
- **Price list re-opening**: if used, in case of price list rows with *Expiration Date*, those rows are returned to the list *without* the end validity date.