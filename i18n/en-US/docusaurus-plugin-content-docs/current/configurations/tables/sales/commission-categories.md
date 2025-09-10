---
title: Commission Category
sidebar_position: 3
---

In this form, commission categories are defined, essentially a sort of "extra data" for defining the criteria for reading commission percentages.

It is thus possible to define the business layer object and its property that serves as a reading parameter, and in the lower grid, specify a filter condition for validity.

Example **Object** -> FSSalesOrder  
**Property Path** -> SalesOrderTypeCode (the code of the sales order type)

In the lower grid specify **Value** *OCIT* (example to limit the validity to the coded order type *OCIT*, for example, order for Italy)

Normally, it can happen to configure various cases corresponding to different values of the selected property, for example *OCIT*, *OCUE*, etc., to differentiate the percentages depending on the type of order, whether Italian or European.

It can also happen to have even more complex cases with different combinations of values and properties of the object.

:::note[Note]
This configuration will lead to a particular compilation of the priority definition grid and commission calculation criteria present in the *Direct Commissions* tab of the agent registry.

The same criterion (for example, by item or by class) must be entered multiple times, associating each time the commission category that in this sense **acts as a filter**.

Thus, the row with the criterion that reads the class or the item is in turn linked to the detail of the criterion itself (via the ***Selected Percentage Detail*** button present in the same form) with the specific commissions for each item or class, is valid only when the order type is *OCIT*.
All details must be defined in a new row in conjunction with the commission category *OCUE* and valid only for that combination.
:::

:::danger[Warning]
The compilation of this form presents some peculiarities:
- The form consists of a *Master* grid (at the top) and a *Detail* grid below that depends on the former. After filling in the row in the *Master* grid, the *Detail* grid remains in a provisional state where it is not possible to write, or it presents 4 columns labeled *Value*. In reality, these are 4 types of data (text, date, true/false, etc.) that are alternatives of which **only one** can be used in relation to the property selected in the *Master* grid. Therefore, **after filling in the row in the Master grid, it is necessary to press the Search button again in the ribbon bar and re-select** the row with the mouse to be able to fill in the *Detail* grid.
- When filling in the row in the Master grid, after entering the code and free description for the commission category, it is advisable to use the search widget that suggests the name of the Fluentis object; for example, by typing FSSales..., objects such as FSSalesOrder or FSSalesInvoice will be proposed.
- After selecting the relevant Fluentis object, it is necessary to specify the **property** that will determine the detail value (filling in the *Detail* grid) to be searched. **It is recommended to double-click to use the search popup** that proposes the properties and all the collections linked to the object we have selected, making it much easier to define the reference property.
:::