---
title: Groupage 
sidebar_position: 5
---

In this tab, all information related to **groupage** is entered.      
This involves grouping various shipments of goods from different senders but destined for the same geographical area into a single load or container. In this way, it is possible to make the most of the available space in transportation means (such as trucks, shipping containers, or airplanes) and offer a more economical service compared to shipping single batches of goods.

The tab is divided into two main sections:

## Groupage Shipments 

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

## Shipping Items

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

*Specific buttons*

- **New groupage**: allows you to insert a new shipment into the groupage; 
- **Delete groupage**: allows you to delete the selected shipment from the groupage; 
- **Transfer items**: allows you to add items to the shipment by taking them directly from customer orders;
- **Delivery notes**: allows you to automatically create [DDT](/docs/sales/sales-delivery-notes/general-overview) for the shipments selected in the groupage;
- **Invoice**: allows you to automatically create [Invoices](/docs/sales/sales-invoices/general-overview) for the shipments selected in the groupage;
- **Picking**: allows you to automatically create [Pickings](/docs/logistics/picking/picking-intro) for the shipments selected in the groupage.

For anything not detailed in this document regarding the common functionality of the forms, refer to the following link [Common Functions, Buttons, and Fields](/docs/guide/common).