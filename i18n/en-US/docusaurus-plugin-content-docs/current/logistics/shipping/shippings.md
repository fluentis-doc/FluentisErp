---
title: Shipments
sidebar_position: 3
---

:::important Purpose
The management of **Shipments** in Fluentis represents a significant advancement in logistical and operational management for companies using this ERP platform. It has been designed to optimize and simplify the shipping process, offering more efficient and integrated control of all logistical activities. The shipment management system in Fluentis also introduces the possibility of creating groupage, a logistical process through which shipments from different customers or suppliers are consolidated into a single transport unit.

This consolidation method offers various benefits:

- **Cost Reduction**: The creation of groupage allows for the optimization of loading space use and reduces transportation costs per unit of shipped goods. It is particularly advantageous for companies that ship goods in quantities lower than a full load.
- **Operational Efficiency**: Consolidating multiple shipments into a single load simplifies the management of operations and reduces transit times, enhancing the overall efficiency of the logistical process.
- **Flexibility and Scalability**: Companies can easily adapt their shipping strategy based on demand and market changes, leveraging the flexibility offered by groupage to manage shipping peaks or have more control over delivery times.

In summary, this shipment management functionality in Fluentis provides companies with a powerful tool to optimize logistics, improve efficiency, and reduce costs while maintaining a high level of service and customer satisfaction.
:::

The **New Shipment** form opens through the path **Logistics > Shipments > New Shipment** or via the **New** button found in the [Shipment Search](/docs/logistics/shipping/search-shippings) form.

In the input form, the **Date** and **Year** are automatically proposed, but they can be modified.

## **1. Mandatory fields

- **Type of shipment**: indicates the type of shipment and automatically the *number* of the shipment is also entered. This is predefined in *Configuration > Tables > Logistics > [Shipping Types](/docs/configurations/tables/logistics/shipping-type)*.       
- **Shipping status**: predefined in *Configuration > Tables > Logistics > [Shipping States](/docs/configurations/tables/logistics/shipping-states)*.        
- **Transported by**: the user can choose from the following options: *Sender*, *Recipient*, and *Carrier*.
- **Number**: each document is assigned a number according to the numbering specified by the user and the type of shipment that contains the numbering.       
- **Carrier**: allows indicating the carrier who will make the shipment.
- **Client**: allows indicating the customer for the shipment.

## **2. Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data:  
- **Start date**: allows you to indicate the start date of the shipment;      
- **End date**: allows you to indicate the end date of the shipment;    
- **Planned hours**: indicates the total hours needed for the shipment. It is calculated automatically based on the start and end dates;

Information regarding the vehicle and driver:  
- **Motorvehicle**: allows you to select the vehicle that will be used for the shipment from those listed in the [Vehicles](/docs/logistics/motorvehicles/motorvehicle) table;  
- **Assigned driver**: allows you to select the driver who will carry out the shipment from those indicated in the [Drivers](/docs/logistics/motorvehicles/motorvehicle-drivers) table;       
- **Volume**: allows you to indicate the volume of the shipment and the related unit of measure;  
- **Net weight**: allows you to indicate the net weight of the shipment and the related unit of measure;  
- **Gross Weight**: allows you to indicate the gross weight of the shipment and the related unit of measure;  

Information regarding the goods:  
- **Type of packaging**: allows you to select the appearance of the shipped goods from those listed in the [Goods Appearance](/docs/configurations/tables/logistics/type-of-packaging/) table;  
- **Tracking number**: allows you to indicate the tracking number of the shipment. This will be proposed by default for all shipments entered in the **groupage** tab;  
- **Total number of packages**: allows you to indicate the number of packages in the shipment.  

Information related to the currency:  
- **Currency**: section containing data related to the [Currency](/docs/guide/common/glossary/glossary-intro#currency)  
- **Currency date**: indicates the [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date)  

Information regarding the recipient and destination:  
- **Production site**: allows you to choose the production site from which the shipment will be made and automatically populates the address associated with the *Contact* (inserted in the *Production Site*) in the Address of the loading location of the shipment;  
- **Loading location address**: upon opening the form, this field is default populated with the address of the company, from which the goods should typically leave. It is also possible to modify it manually;  
- **Destination address**: allows you to indicate the destination location of the shipment.  

Information related to the shipment:  
- **Delivery**: allows you to indicate data related to the [Shipment](/docs/guide/common/glossary/glossary-intro#shipment);  
- **Carriage**: allows you to indicate data related to the [Port](/docs/guide/common/glossary/glossary-intro#carriage);  
- **Packing**: allows you to indicate data related to the [Packing](/docs/guide/common/glossary/glossary-intro#packing).  

Any notes:  
- **Note**: allows you to insert a free note;         
- **Initial note**: allows you to insert an additional free note.     

And finally, the information related to the status of shipment fulfillment:  
- **Execution status**: when the shipment is fulfilled through DDT documents or invoices, its fulfillment status automatically changes from *Not executed* to *Partially executed* or *Closed*; the user can force the fulfillment of an order that is not fully fulfilled by indicating the status *Forced fulfilled*;  
- **Closing date**: indicates the fulfillment date of the document.

## **3. Groupage**

In this tab, all information related to **groupage** is entered.      
This involves grouping various shipments of goods from different senders but destined for the same geographical area into a single load or container. In this way, it is possible to make the most of the available space in transportation means (such as trucks, shipping containers, or airplanes) and offer a more economical service compared to shipping single batches of goods.

The tab is divided into two main sections:

### Groupage Shipments 

In this grid, information related to the shipments contained in this **groupage** is entered. Therefore, to add a new shipment to the grid, you can position yourself on the row to fill in the various data or use the **New** button present in the ribbon bar. 

The available columns are as follows and grouped by:

Shipment 
- **Line number**: indicates the row number of the shipment and is entered automatically;
- **Start date**: indicates the start date/time of the shipment;
- **End date**: indicates the end date/time of the shipment;
- **Planned hours**: indicates the duration in hours of the shipment and is calculated automatically based on the start and end dates;
- **Tracking number**: indicates the tracking number of the individual shipment; if specified in the header tab, the tracking number is proposed in all created shipments, and can always be manually modified by the user.

Loading location address
- **Origin**: indicates the business name/name of the loading location;         
- **P.code**: indicates the postal code of the loading location;
- **City**: indicates the city of the loading location;
- **Province**: indicates the province of the loading location;
- **Loading location address**: indicates the address of the loading location. This is defaulted to the company address, from which goods should normally depart, as indicated in the document header.

Destination location address
- **Destination**: indicates the business name/name of the destination location;            
- **P.code**: indicates the postal code of the destination location;
- **City**: indicates the city of the destination location;
- **Province**: indicates the province of the destination location;
- **Destination location address**: indicates the address of the destination location. This is automatically populated from the customer registry, but can still be manually modified by the user.

Vehicle 
- **Motorvehicle**: indicates the vehicle that will be used for the shipment;
- **Assigned driver**: indicates the driver who will conduct the shipment.

Additionally, for each row of the groupage, you can expand the relevant row details by clicking on the **+** to manage the following fields related to the loading location:
- **Phone**: allows you to enter the phone number related to the loading location;
- **E-mail**: allows you to enter the e-mail address related to the loading location;
- **Notes**: allows you to enter a free note related to the loading location;
and for the destination:
- **Phone**: allows you to enter the phone number related to the destination;
- **E-mail**: allows you to enter the e-mail address related to the destination;
- **Notes**: allows you to enter a free note related to the destination.

### Shipping Items

In this section, all items contained within the selected shipment in the groupage are displayed.         
To insert a **New Item** into the grid, you can position yourself on the row to fill in the various data or use the **New** button present in the ribbon bar.            
Alternatively, items can also be added directly from customer orders through the **Transfer items** procedure.           
By pressing the **Transfer items** button, the form named **Linking Sales Orders** opens, where the customer of the shipment is already proposed in the respective filter by default. Then, by pressing the **Search** button, all items from the unfulfilled and partially fulfilled orders of that customer will be displayed in the right grid.        
On the left side of the form, grids related to *groupage shipments* and *shipping items* are shown with the data entered in the main groupage form.         
At this point, the user can, with drag & drop, drag the items from the right grid directly onto the individual shipment, and they will automatically be inserted into the *shipping items* grid related to that shipment.
Additionally, it is also possible to add items from other customers' orders by simply changing the value of the *Client* filter and pressing **Search** again.
Once all items have been added, by pressing the **Transfer** button, the user will confirm all modifications.       

The available columns are as follows:   
- **Line number**: indicates the row number of the item entered in the groupage; 
- **Class**: indicates the class of the item; 
- **ITEM**: indicates the item code; 
- **Item variant**: indicates the item variant; 
- **Variant description**: indicates the variant description of the item; 
- **Units of Measure**: indicates the unit of measure of the item;
- **Brand**: displays the value of the brand entered in the item registry;
- **Quantity**: indicates the quantity of the item;
- **Alternative Measurement Unit**: indicates the alternative unit of measure of the item;           
- **Alternative quantity**: indicates the quantity of the item;            
- **Volume**: indicates the volume of the item;             
- **Net weight**: indicates the net weight of the item;
- **Gross Weight**: indicates the gross weight of the item;
- **Customer order account**: displays the account of the customer order to which the item belongs;
- **Sales order type**: displays the type of the customer order to which the item belongs;
- **Customer order date**: displays the date of the customer order to which the item belongs;
- **Invoice or DDT**: displays the reference of the invoice / DDT created by pressing the **Invoice** or **Delivery notes** buttons; the value is displayed in the format document type / document date / document number;
- **Picking reference**: displays the reference of the picking created by pressing the **Picking** button; the value is displayed in the format document type / document date / document number.

#### Specific buttons 
- **New groupage**: allows you to insert a new shipment into the groupage; 
- **Delete groupage**: allows you to delete the selected shipment from the groupage; 
- **Transfer items**: allows you to add items to the shipment by taking them directly from customer orders;
- **Delivery notes**: allows you to automatically create [DDT](/docs/sales/sales-delivery-notes/general-overview) for the shipments selected in the groupage;
- **Invoice**: allows you to automatically create [Invoices](/docs/sales/sales-invoices/general-overview) for the shipments selected in the groupage;
- **Picking**: allows you to automatically create [Pickings](/docs/logistics/picking/picking-intro) for the shipments selected in the groupage.

For anything not detailed in this document regarding the common functionality of the forms, refer to the following link [Common Functions, Buttons, and Fields](/docs/guide/common).

## **4. Summaries**

In the Summaries, information related to the costs of the entire document is presented.

### Charges

In this grid, it is possible to enter any expenses that must be entered as positive, and any discounts as negative.

These elements are applied to the entirety of the document and are not distributed among the lines of the items. They can include additional costs, global discounts, or surcharges applied to the entire document. 

To enter a new expense, it is necessary to fill in the following data:

- **Line number**: indicates the line number of the entered expense, which is automatically filled;
- **Expense type / Description**: allows you to choose the predefined types of expenses in the table [Expense Types](/docs/configurations/tables/general-settings/expenses-types/);
- **Charge amount**: indicates the value of the expense expressed in the currency of the document;
- **Charge description**: Detail of declarations: the possible valid declaration of intent for the customer is entered here;
- **VAT**: allows you to select the VAT rate, predefined in the table [VAT Rates/Methods](/docs/configurations/tables/finance/vat-rates/).

On the right side of the form, the following fields are present:

- **Notes**: allows you to enter a free note;
- **Total amount**: allows you to view the total amount of the expense given by the sum of the values entered in the *Charges* table.