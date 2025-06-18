---
title: Receipt List
sidebar_position: 1
---

:::important Purpose 
The goods receipt module is an essential tool for effective warehouse flow management. This function allows for the timely identification of incoming materials, ensuring an accurate and organized loading of goods. The process begins with the selection of supplier orders that are not fulfilled or partially fulfilled, facilitated by detailed filters that allow viewing items awaiting receipt.

Once the orders are selected, the operator can generate the Purchase Delivery Document (Delivery Note), entering details related to the items to be loaded. The system also supports the creation of loading units if these are managed, further improving the organization and traceability of received goods. By entering data related to lots, quantities, and other relevant information, the module ensures complete control over warehouse movements.
:::

This procedure is used during the goods receipt phase for item identification, creation, and loading of the purchase Delivery Note.

The form opens on the supplier order filter, where all orders in the state *Not executed* and *Partially executed* can be viewed. 
Results can be filtered by *Number*, *Order Type*, *Year*, *ITEM*, and *Supplier*.
After selecting one or more supplier orders, it is possible to view unfulfilled and partially fulfilled items using the *View* button, while by using the *Create delivery note* button, you can start entering the items that will be present in the Delivery Note.

The main form consists of the following tabs:

- **Create delivery note**
After selecting the supplier order, through the *Create delivery note* button, you can open the form on the *Create Purchase Delivery Note* tab, where the focus will be placed directly on the "Delivery Note" field to enter the document number first.
Additionally, information related to the first item on the order will be displayed, along with the header information of the order itself.

> **Warehouse**: indicates the warehouse where movements will be made;          
> **Warehouse template**: indicates the warehouse template for the movements;     
> **Delivery note type**: indicates the type of Delivery Note with which the transport document will be created;                
> **Date**: indicates the date of the Delivery Note being created; by default, today’s date is proposed;     
> **Order**: indicates the supplier order number;           
> **ITEM**: indicates class, code, and description of the item being confirmed;           
> **Line number**: indicates the line number of the item in the supplier order;          
> **Barcode**: allows reading barcodes via a specific reader for various operations;      
> **Vendor batch**: allows entering the supplier lot number;     
> **LT**: allows generating the internal lot number;           
> **Expiry date**: indicates the expiration date of the lot;          
> **Ordered quantity**: indicates the ordered quantity;    
> **Residual quantity**: indicates the remaining quantity;       
> **Quantity**: indicates the quantity to be loaded in the warehouse;    
> **Propose Location**: indicates the proposed location;              
> **Location**: allows entering a location different from the proposed one.

Through the **Input code** field (using a barcode reader), it is possible to enter data related to the lot, location, the recorded quantity, and the item in case you want to load a different one than what is proposed, but still present in the previously selected orders.       
After entering data related to the current item, they can be confirmed via the **Confirm** button.     
Once all lines of the order have been confirmed, you will be automatically positioned on the **Delivery Note Details** tab, where by using the **Closed** button, the Delivery Note can be saved and the related warehouse movement can be carried out.

**Specific Buttons**
> **Confirm**: allows confirming the entered data for the selected item;           
> **Conf+Stp**: allows confirming the entered data for the item and also opens a pop-up that provides the option to print labels;       
> **Print Report**: allows printing labels;       
> **Closed**: allows saving the created Delivery Note and creating the related warehouse movements;        
> **Next object**: allows moving to the next item in the supplier order;       
> **Previous object**: allows moving to the previous item in the supplier order.

- **Delivery Note Details**       
In this form, all information related to the created lines is displayed.

**Specific Buttons**
> **Delete items**: allows deleting the selected line from the Delivery Note.   

- **Order Details**: 
In this form, all information related to the considered supplier order is displayed.

## **Goods receipt with loading units**

If the item is managed with loading units, and therefore, in the tab [packaging](/docs/erp-home/registers/items/create-new-item) of the item registry, there must be at least one line with the flag **Mandatory Loading Unit** active, the priority and the quantity.     
The goods receipt procedure will have to consider the line by choosing the one with the highest priority among those for that supplier client (if indicated, otherwise choose among those without), but with the flag Mandatory Loading Unit active.     

Therefore, after entering all data related to the item as described previously for the case without UDC, when the **Confirm** button is pressed, the procedure will open a new form dedicated to the creation of loading units; where the item data will be preloaded, such as: *class*, *code*, and *item description*, with possible *variant* and *lot*.     

The **Residual quantity** will initially be equal to the value indicated in the main form in the quantity field; this will then be dynamically updated with each new entry in the table.    
The table is initially empty, while the following values are already entered: 
> **Number**: indicates the number of loading units of that type;         
> **UDC Type**: indicates the type of loading unit;       
> **Loading unit number**: indicates the unique number of the loading unit;         
> **Quantity**: indicates the quantity contained in the loading unit.

The cursor focus is positioned in the supplier reference field, allowing the operator to easily and quickly enter the value.       
Once this value is entered (not mandatory), simply pressing the **Forward** button will insert the line into the table and update the remaining quantity value.      
After each click on the **Next** button, the focus is always repositioned in the supplier reference field.     
Selecting one of the rows in the table and pressing the delete button will remove it while updating the remaining quantity.      
The operator can also modify an already entered line. By selecting the row in the table, all data will be displayed in the fields below where the user can modify them, and by pressing the **Forward** button, apply these changes to the table row.        
Once the entry and confirmation of all rows are completed, pressing the **Closed** button will return to the main form, from which pressing the **Closed** button will create the relevant warehouse movements related to the recently loaded Delivery Note and the creation of linked loading units.

**Load/Unload Parameters** to be entered in the table [Loading/Unloading Parameters per user](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | LoadingUnitCreationFromPurchaseDeliveryNoteItem |

Specifically, they are used in the following way:

> ReceivingGoodsCreateDocument: after selecting **Receipt List** and pressing the **Create delivery note** button, the warehouse and reason indicated in this parameter are used in the lines of the items of the just created Delivery Note.
> LoadingUnitCreationFromPurchaseDeliveryNoteItem: after selecting **Receipt List** and pressing the **Create delivery note** button, the warehouse and reason indicated in this parameter are used in the creation and loading of the newly created loading units. This parameter is only necessary if loading units are being used.

For all information on how to code the barcodes to be read in the **Input code** field, consult the page related to the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

## **Goods receipt with Label Creation**

In the case it is necessary to create labels for the items that are about to be loaded, after entering all the data related to the item as described previously, the operator must press the **Confirm + Print** button, and the procedure will open a new form dedicated to label creation.       
In this form, the focus is already placed on the quantity that will be entered on each label, allowing the user to modify it immediately.      
Additionally, the user can also decide the number of labels with a specific quantity.     
Once the data is correctly entered, the operator must press the next button to insert the row with the labels into the central grid, and simultaneously, the **residual quantity** (initially, it will be equal to the value indicated in the main form in the quantity field) will be updated. In case of errors, it is possible to select a row and delete it with the **Cancel** button.        
Once all labels are completed, it will be possible to print them with the corresponding button, and then by using the close button, the operator can return to the main form for creating the Delivery Note, from which they can proceed with new rows.      
In this case, the operator can also recall the previously confirmed row and reopen it with the confirm plus print button to modify the labels.      
After completing the modifications, pressing the close button will create the purchase Delivery Note with the corresponding warehouse movements.      

In this case, the **Load/Unload Parameters** are the same as those seen in the previous cases.