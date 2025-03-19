---
title: Project Price Update
sidebar_position: 3
---

The Update Prices procedure **updates the price, reference price list, and VAT code** in project lines, intervention requests, planned interventions, and interventions based on the parameters set in the lower part of the form.

For more details on the common parts of the forms, refer to the link [Custom features, buttons, and common fields](/docs/guide/common).

## Procedure  

1. Set the desired **filters** in the filters section and press the **Search** button in the main menu;  
2. Select the rows to update in the results table;  
The selection can be made manually in the results table or by using the **Select All** or **Deselect All** buttons in the menu bar;  
3. Set the updated **price, price list**, and **VAT code** in the **Price/VAT** section at the bottom of the window;  
4. Press **Process Prices** to view the preview of the changes that will appear in the **New Price** and **VAT** columns. If a price list has been used to update the price, information related to the price list will appear in the **Sales List** and **List Date** columns.

:::note Note
Changes at this stage are only applied to the preview and are not yet effective in the documents.
:::

5. Define in the parameters section the **documents** for which you want to apply the changes and the related **options** for the WBS to be updated;  
6. Press **Update** to make the changes effective in the documents.
  
## Price/VAT

**Force Price**: use this option if you want to manually specify the new price;

**Update price and list with last price list**: if selected, the last valid price list will be used to determine the new price;

**Update price and list with price list**: if selected, the price list entered later will be used to determine the new price;

**Force VAT**: manually indicate the VAT code to be used for the selected rows, which will be entered in the VAT column of the results table;

**Updates the VAT code from the customer register**: the VAT code is determined by the value entered in the customer registry.
  
## Options

**Duplicate WBS row to update**: if selected, the WBS lines to be updated are duplicated in the project;

**Reverse assigned days in duplicated WBS**: if selected, the days assigned to the duplicated WBS are reversed from the previous WBS.
  
## Documents

**Update price of intervention requests and planned interventions connected to the WBS not yet fulfilled**: when project lines are updated, requests and planned intervention documents that have not yet been fulfilled are automatically updated;

**Update interventions linked to the WBS not yet invoiced**: in this case, the service line data and the linked line data in the **Billing Plan** tab will be updated.