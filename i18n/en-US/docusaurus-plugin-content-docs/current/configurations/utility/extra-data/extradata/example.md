---
title: Example 
sidebar_position: 6
---

## Creating an Extra Data "Color" Activated in Item Registry and Purchase Order, but not in other documents

The creation of an **Extra Data** begins with the header where it is necessary to insert:                
**Code**: identifier;            
**Content Type**: choose between [Object](/docs/configurations/utility/extra-data/extradata/new-extradata-object), [Simple](/docs/configurations/utility/extra-data/extradata/new-extradata-simple), or Data source;       
**Widget Type**: you can choose between a combo box widget, or with code or description autocomplete;        
**Name**: we enter "Highlight Color", which is present in the dictionary;            
**Description**: we enter "Highlight Color";                        
**Business Object**: we then enter FSColor because we take various colors from here.         
It is possible to insert **Rights** for viewing and/or modification and **Validity Dates**.       

![](/img/it-it/configurations/utility/extradata/example/header.png) 

In the **Activations** grid, we insert:            
**Parent Object**: we want the Extra Data to be activated in FSPurchaseOrderItem and FSItem;           
**Property**: ExtraData.        

![](/img/it-it/configurations/utility/extradata/example/active.png) 

In the **Propagation** grid, selecting the parent object FSPurchaseOrderItem we insert:          
**Property Path**: Item, because the purchase order takes the Extra Data from the item;      
**Collection Property**: ExtraData.

![](/img/it-it/configurations/utility/extradata/example/prop.png) 

We can save and close the Extra Data.
Now we go to the **Item Registry** where we insert the Extra Data in the **Extra Data** tab. 
To add the Extra Data, position yourself on the grid > right-click > Add Extra Data.

![](/img/it-it/configurations/utility/extradata/example/item.png) 

At this point, we move on to creating a **Purchase Request** in which we insert the item.   
Then we open the **Automatic Order Generation** procedure, select the PD, and create a Purchase Order from it.
We open the created Purchase Order.
In the **Items** > **Extra Data** tab, the created Extra Data is visible.   

![](/img/it-it/configurations/utility/extradata/example/order.png)