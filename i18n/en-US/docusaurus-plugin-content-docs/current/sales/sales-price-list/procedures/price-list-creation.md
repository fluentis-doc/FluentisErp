---
title: Create Sales Price List
sidebar_position: 3
---

This procedure allows you to create new sales price lists, starting from the items of existing documents. At the top of the form, there are filters to search the Source Data: choose between Sales Price List, Purchase Price List, Item Registry, Purchase DN, Purchase Invoices, or Supplier Orders; by expanding the Document Search, it is also possible to further filter to search for a specific price list. To view the results, press Search Price Lists.

In the first grid, the documents resulting from the search will be displayed, and by selecting a row, the items from the document will be displayed in the lower grid. Let's analyze the columns:       
- **Class/Code/Description of the item**: identifying data of the item, followed by **Variant**, **Quantity**, **UM**, **Brand**.       
- **Not Consider**: items that have this value checked will not be changed in the new price list.     
- **Previous cost**: proposes the cost from the last document of the selected type in source data.     
- **Initial price**: identifies the price that was in the source document.     
- **Initial price including VAT**: displays the initial price including VAT.      
- **Non-rounded price**: proposes the price including the increase (or decrease) decided for the new price list.    
- **Non-rounded price including VAT**: non-rounded price including VAT.     
- **Mask**: shows the mask to which the individual item is subject.       
- **Rounded price**: the *Non-rounded price* is rounded according to the defined *Mask*.      
- **Rounded price including VAT**: the *Non-rounded price including VAT* is rounded according to the defined *Mask*.     
- **Current price list**: if **Append selected data to an already created price list** is selected in the *Price List to Create* section (below), the column will display the price that the item has in the selected price list, if present.       

In the lower section, mandatory data for the *Price List to Create* is required: the type of price list (either generic or customized), the Type or Customer based on the type, the Start validity date (optionally, also an End validity date), the Currency, the Rounding to be applied, and the flags:         
- **Price including VAT**: indicates that the price list to be created will be a list with prices already included VAT.       
- **Minimum price list**: informational flag indicating to create a price list with minimum attempted selling prices.  

These data can be entered manually, or by clicking the button **Append selected data to an already created price list**, they will be entered automatically, as a pop-up will open to select the price list from which to take the registry data. This operation will ensure that when the procedure starts, the items will be added to the existing price list, and a new price list will not be created; if some items already exist in the selected existing price list, the user will be asked whether to keep the old price list or update it.           

The creation of price lists is carried out with the buttons present in the ribbon bar:       
- **Create all the items**: the price list is created with all items present in the selected document in the first grid.         
- **Create selected items**: the price list is created with the items selected in the second grid.        

Once the new price list is created, Fluentis will ask whether to open it or not.      

In the ribbon bar, there are additional buttons for managing the mask:     
- **Update mask**: updates the *Mask* associated with the highlighted item in the item registry.       
- **Retrieve Mask from Range**: in case of a change in the *Roundings* field in the *Price Lists to Create* section, this button recalculates the *Mask* in the second grid, proposing the *Mask* of the selected Rounding.             
- **Activate/Deactivate Do Not Consider flag**: Activates or deactivates the *Not Consider* flag of the highlighted items.