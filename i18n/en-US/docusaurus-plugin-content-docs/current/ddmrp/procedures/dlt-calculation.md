---
title: Update Decoupled Lead Time (DLT) 
sidebar_position: 2
---
This procedure calculates the decoupled lead time (DLT) for all buffer items, whether they are in the factory or in distribution centers/hubs.

This is a very important parameter for determining the size of buffer zones and therefore also the stock levels that are proportional to the DLT.

If a distribution center/hub is supplied by a hub, the DLT of the items stored in it is the same for all and is given by the lead time specified in the logistics structure table (unless the item indicates a supply exception in the Ddmrp parameters).

If the distribution center/hub is supplied by the factory, each item will have a specific DLT value given by the sum of the transportation lead time from the factory and the time required to manufacture the product in the factory (zero only for those items that are buffers in the factory).

The procedure requires accurate and present information; therefore, the part type of the buffer profile must be correct for buffer items, and in general, the lead time of the items in the bill of materials must be present (for purchasing items, the preferred supplier must be specified with the related flag and lead time, for other items the lead time must be present in the MRP parameters).

Items with inconsistent or lacking data will not be considered in the calculation; furthermore, at the end of the procedure, a message will be displayed listing the inconsistencies found. 

For all factory items that have a bill of materials, the procedure will sum the lead times of each item along each branch of the bill, stopping when it encounters a buffer item because a buffer item is already available, thus requiring no time to be procured.

The highest of the sums from the various branches determines the DLT value of the item, i.e., the time required to build the product.

This calculation is also performed for products that are not Ddmrp stock in the factory, as they may be in distribution centers/hubs, thus the relevant DLT is equal to the DLT value in the factory plus the transportation time.

The procedure also determines the critical path of each item, meaning it identifies all items that are on the longest supply chain, i.e., those that determine the DLT value of the item.

If you want to reduce the DLT value of an item, you need to choose items on the critical chain as new buffer items, as selecting items that are not on the critical chain does not bring any benefits.

At the end of the procedure, the zone update procedure is automatically called.