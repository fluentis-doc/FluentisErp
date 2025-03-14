---
title: DDMRP Item Parameters 
sidebar_position: 5
---

Through this form, the parameters necessary for the management of a buffer item, that is managed under DDMRP logic, are defined.

For each buffer item, there must be at least one record in this table, one for each distribution center (see **logistics structure**) in which the item is managed as DDMRP stock, and optionally one for the factory (empty warehouse field) if the item is also managed as DDMRP stock in the factory.

The DDMRP parameters to be defined are as follows:

- **Warehouse**, 

  is the warehouse code associated with the logistic unit of the record, that is, the distribution center (or intermediate hub) and is left empty if the record refers to the factory.

- **Supplier**

  indicates the supplier from whom to source this item in this logistic unit.

  By default, the supplying logistic unit is indicated in the logistics structure table; this field can manage exceptions for individual items.

  For example, normally items at this logistic unit are supplied by a Hub, but some items are supplied by another hub or directly from the factory.

  If the supplier is not present in the logistics unit table, it is an external supplier and a regular purchase order will be issued to that supplier.

- **Days for transport**

  if the supplier field is filled, this must also be filled, which represents the time required to procure the goods from the logistic unit or external supplier indicated in the supplier field.


- **Buffer code**, 

  is the code of the buffer profile associated with this item in the indicated logistic unit in the warehouse field.

- **Lead time factor**,

  is used to enforce a different value than that expected from the buffer profile associated with the record.

- **Variability Factor**,

  is used to enforce a different value than that expected from the buffer profile associated with the record.

- **Average Daily Consumption (ADU)**, 

  is the average quantity consumed daily at the logistic unit of the record (therefore varies for each logistic unit) and must consider a sufficiently long time period (multiple times the lead time of the item) over which to perform the average.
  
  This value strongly influences the stock level of the item and must be updated periodically [(see procedure)](/docs/ddmrp/procedures/ADU-update).

- **Decoupled Lead Time (DLT)**,

  is a non-editable field resulting from the calculation of the relevant procedure.

  It is the time needed to procure the item considering the presence of other buffers in its bill of materials or logistics network.

  In the case of a distribution center, it is given by the sum of the transport time from the supplying logistic unit and any production time if the supplying unit is the factory and the item is not a buffer in the factory (therefore there is no stock).

- **Cumulative Lead Time (CLT)**,

  is a non-editable field resulting from the calculation of the DLT procedure.

  It is the time necessary to procure the item in the factory if none of the items in its bill of materials is a buffer, therefore it is the production time in the case of total absence of stock for its bill of materials.

- **Desired Reorder Cycle (DOC)**,

  must be expressed in days and represents the number of days you wish to have between one order and the next.

  Its value is taken into account in the calculation of the green zone of this item.

- **Minimum Order Quantity (MOQ)**,

  if there is a minimum order quantity imposed by the supplier or imposed internally (especially to minimize production setups) it must be indicated in this field.

  Its value is taken into account in the calculation of the green zone of this item.

- **Green zone**,

  is a non-editable field resulting from the zone update procedure.

  The green zone determines the size of orders (no order proposed by DDMRP can have a quantity less than the green zone) and therefore also the related reorder frequency, equal to the ratio between the green zone and ADU, as well as the forecasted average and maximum stock levels.

- **Yellow zone**,

  is a non-editable field resulting from the zone update procedure.

  The yellow zone represents the average consumption in the period of time necessary to replenish the item (DLT). 
  

- **Red zone**,

  is a non-editable field resulting from the zone update procedure.

  The red zone determines the safety stock level, the minimum and maximum expected inventory.

  Its size increases with the increasing variability associated with the buffer (see buffer profile).

- **Order Peak Threshold (OST)**,

  is used in the NFP (Net Flow Position) calculation.

  When the total demand in a day (within the peak horizon) exceeds this value, it is considered in the NFP calculation.

  It is recommended to use a value between 50% and 100% of the item's red zone.

  A value that is too small would lead to considering demand peaks as normal variations and consequently too frequent orders would be issued with an average inventory higher than necessary.

  A value that is too large would often fail to recognize demand peaks (significant but not huge), causing stock to be lower than necessary, resulting in deep erosion of the red zone or even stockouts.

  **Order Peak Horizon (OSH)**,

  is the time horizon from today within which to check for demand peaks (NFP calculation).

  This value must not be less than the value of the DLT (decoupled lead time) as it is necessary to notice any demand peaks with sufficient advance, at least equal to the time needed to procure the item.

- **Average Daily Consumption Forecast Method**,

  select one of the following methods that will be applied by the related ADU update procedure (average daily consumption):

  - 0) no update
  - 1) arithmetic average of the past (actual past consumptions are analyzed and all consumptions have the same weight)
  - 2) weighted average of the past (recent consumptions weigh more than past ones)
  - 3) arithmetic average of the future (the daily consumption forecast table is analyzed)
  - 4) average of the past and future (combination of methods 1 and 3)
  - 5) weighted past and arithmetic future (combination of methods 2 and 3)


- **Backward days**,

  time period in the past in which to calculate the average daily consumption

- **Forward days**,

  time period in the future in which to carry out the average daily consumption forecast

- **Stock Type**

  defines the type of DDMRP stock

  - 1 = Replenished (dynamic stock)
  - 2 = Replenished override (static stock)
  - 3 = Min-max (min-max stock)



**Import Button**

Allows the entry of DDMRP parameters for an item-variant-warehouse combination where the warehouse code identifies a [**logistic unit**](/docs/ddmrp/master-data/facilities) as a distribution center or a hub or the factory (in this case the field is empty).

First, choose a warehouse from the relevant combo box; this way, items for which there is no existing DDMRP parameters record for that warehouse will be shown (for the factory, choose any of those associated with it since to the system, all factory warehouses are equivalent to the warehouse with a null code).

Then choose a buffer profile to associate with the new record in order to enable the "insert" button.

At this point, select the rows to import and press the "insert" button, then open the new records to complete the data entry.

**Parameter Replacement Button**

Works by selecting rows in the form with the same value in the Warehouse field.

If you need to act on multiple warehouses, do it one at a time.

Once multiple rows are selected, the button is enabled and opens a form through which it is possible to modify one or more parameters for the selected records.

The modification occurs only if the flag next to the parameter is activated.

**Delete Button**

Allows the deletion of a row, thereby ensuring that the item in the indicated warehouse is no longer considered a DDMRP buffer.

The historical values related to the item-warehouse will still be retained and can be viewed both from the DDMRP parameter history and from the Net Flow Position history.