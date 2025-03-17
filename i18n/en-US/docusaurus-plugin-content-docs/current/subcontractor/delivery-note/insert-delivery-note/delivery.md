---
title: Delivery 
sidebar_position: 4
---

In this tab, the materials that must be delivered to the subcontractor are entered. They can be entered automatically through the *Fulfillment from Order* procedure or manually by the user.


*Specific buttons*:
> **Insert Material**: calls the procedure to insert a new material into the item grid of the 'Deliveries' tab.  
> **Delete materials**: calls the procedure to delete a material from the item grid of the 'Deliveries' tab. 

*Specific fields*:

**Order C/L number and year**: the number and year of the work order from which the item line was taken are displayed. If the line was inserted manually, this column remains blank;

**Estimated delivery date**: represents the expected delivery date of the material, taken from the *Materials to Deliver* tab of the work order from which the item line of the DDT was generated;

**Estimated return**: represents the expected return date of the finished product that will be made by the subcontractor using the material being delivered, taken from the *Items to Produce* tab of the work order from which the item line of the DDT was generated;

**Line number**: represents a simple progressive number of the document line, editable by the user;

**MU**: represents the management unit of measure of the item being delivered;

**Phase/Subphase**: displays the phase code and the subphase code of the production phase of the production order to which the item may be linked; this occurs if the work order from which this DDT line was created was generated from an external phase of a production order;

**Quantity**: represents the quantity that has been decided to be delivered to the subcontractor, editable by the user;

**Warehouse**: represents the code of the warehouse from which the goods to be delivered to the subcontractor are taken. The warehouse code is proposed to be the same as that set in the line of the 'Materials to Deliver' tab of the work order from which the DDT line was generated, but it is editable by the user. If the flag is active, present in the Work Order Parameters, called 'Consider warehouses based on the delivery DDT type', the proposed warehouse will be the one set in the 'Sales Invoice Types' table, in the appropriate 'Warehouse' column;

**Template**: represents the code of the warehouse reason that will be used to withdraw the goods from the warehouse necessary to deliver to the subcontractor. The code of the warehouse reason is proposed to be the same as that set in the line of the 'Materials to Deliver' tab of the work order from which the DDT line was generated, but is editable by the user. If the flag is active, present in the Work Order Parameters, called 'Consider warehouses based on the delivery DDT type', the proposed reason will be that set in the 'Sales Invoice Types' table, in the appropriate 'Reason' column;

**Price**: represents the unit price of the item. This is a column editable by the user and is not mandatory. It is usually used when the delivery DDT needs to pass through customs;

**VAT**: represents the VAT code, or it can be automatically proposed by the procedure that retrieves it from the subcontractor’s registration or from the item registration present in the line, depending on the cases. The combo box draws from the 'VAT Rates' table found in 'General Settings';

**Purchase turnover type**: represents the code of the Invoicing Type, or it can be automatically proposed by the procedure that retrieves it from the item registration present in the line. The combo box draws from the 'Purchasing Invoicing Type' table found in the 'Purchasing Area Tables';     

**Weights**: the total Net Weight and Gross Weight of the item lines are reported. The weights of the item registration are multiplied by the line quantity.

### Batch Shipping

In this tab, the user is given the option to set the batches to be withdrawn from the warehouse with the quantity of the item taken for sending to the subcontractor, in case there are multiple different batches withdrawn with the same DDT line.

The batch grid allows the user to select the batch by accessing the appropriate 'Batch Help', which filters among the available batches of the item selected in the upper grid. The information reported in the batch grid includes batch code type, batch code, supplier batch, batch type, start date, and expiration date, batch quantity, location, and supplier information of the batch (account, subaccount, and company name). Obviously, the sum of the quantities of the various batches must exactly match the quantity delivered of the item line.

### Material Data

In this tab, the following information related to the selected line in the grid is displayed:

**Class, code, description, and variant of the item, quantity to be delivered, unit of measure, Warehouse, Reason, Order C/L**: this is a series of information simply taken from the selected DDT line;

**Project**: represents the sales order associated with the DDT line. Usually, the sales order entered in the line of the work order from which the DDT line was generated is called;

**Notes**: in this field, the user can enter a note related to the selected line.