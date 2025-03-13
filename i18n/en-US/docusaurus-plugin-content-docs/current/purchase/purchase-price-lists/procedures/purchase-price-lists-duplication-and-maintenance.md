---
title: Duplicate and Maintenance Purchasing Lists
sidebar_position: 3
---

This procedure allows you to update supplier price lists.

### Available Filters

You can filter the results by: *Start/End Validity Date (Data inizio/fine validità)*, *Currency*, *ITEM*, *Item Barcode (Barcode dell'articolo)*, or only for items that have been *Moved*, meaning linked to documents since a certain date.

If the filter for *Starting validity date* is completed, the application displays only the items from price lists valid on the entered date. Otherwise, all items will be displayed, including those from price lists that are no longer valid.

### Item Grid

Once the desired filters are selected, clicking *Search* will populate the grid with all items that meet the requested characteristics. The columns of the grid are:      
- **Account/Subaccount/Description (Conto/Sottoconto/Descrizione)**: contains the holder of the price list, if customized.      
- **Class/Code/Item Description (Classe/Codice/Descrizione articolo)**: identification data of the item in the price list.      
- **Currency**: shows the currency of the price list.    
- **Units of Measure**: this data is also taken from the price list.      
- **Price**: this field displays the price of the item present in the price list.        
- **Discount**: this field shows any discount present in the price list (only fixed discount).
- **Net price**: this column displays the *Price* net of *Discounts*.    
- **From validity date**: this field shows the start validity date of the price list.      
- **To validity date**: this field shows the potential end validity date.      
- **Last document date**: this field contains the date of the most recent DDT that features the item and price list.    
- **Quantity**: indicates the quantity to which the price refers.   
- **Variant/Variant Description (Variante/Descrizione variante)**: shows the code and description of the variant, if present.   
- **Movement**: the active flag indicates that warehouse movements have been recorded with this item and price list.   

### Toolbar

The available buttons in the ribbon bar are as follows:     
- **Refresh**: opens a pop-up to proceed with updating the price of the item in the price list; you must specify:
1. **Starting validity date** for the price list lines to be updated (optionally a **Expiration Date**, which is not mandatory),
2. **Rounding** containing the price change policies for prices and discounts of the price list, or
3. **Percentage Increase (Percentuale di incremento)**, by removing the rounding code and manually entering the percentage (or value).
4. **OK** to execute the update.

:::important Remember
If you do not specify the *Starting validity date*, the update will yield no results and will not be executed.
:::  

- **Closed**: opens a pop-up to enter the *Expiration Date* for the selected price list lines; the *End Validity Date (Data di fine validità)* must be greater than the maximum date of the last document related to the price list lines to be closed (expired).      
- **Duplicate price lists**: opens a pop-up and, for the selected price list lines, creates or adds new lines to a new price list or to an existing price list; it is possible, for the selected lines, to create a new price list by specifying the *Supplier*, which can be different from that of the starting price list, the *From validity date*, and the *Currency*; with the flag *Maintain the same dates of the source price list*, a price list is created under a different supplier but with the same validity dates.
- **Discounts**: opens a pop-up to assign *Line discounts* to the selected lines, adding them to those present or replacing them using the check button *Delete previous discounts*.
- **Price list re-opening**: if used, in the case of price list lines with *Expiration Date*, those lines are returned to the price list *without* an end validity date.