---
title: Safety Stock
sidebar_position: 5
---

Through this tab it is possible to filter the items lines managed on Stock, that user wants to analyze by the MPS Definition procedure. The only one important condition that item should have is the 'Items with Stock' management type into its MPS Parameters.

The tab consists of a filter area and of a results grid.

RIBBON BAR: it represents the Form Menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following: 



| Function | Meaning |
| --- | --- |
| Search | Button to apply search filters within database of items that fulfill the conditions complying with the requirements stated at the beginning of the 5.4 section. |
| Consider for Job Orders | It refers to the procedure to move lines selected in the grid of 'Summary' tab. |

FILTER AREA: The filter area contains the list of the possible data types thanks to which it is possible to perform a selction, a research on the total items, which fulfill the selection criteria already preset by window code and listed into the previous paragraph. Typically Filters have 'AND' condition and it is possible to specify more filter criteria at the same time. The user can use filter per item class, code, description and variant, Product Category and Characteristic. Within the filter area there is the Production Job Order Type combo box, which enables the user to decide the type of production job order to be generated. Lastly, there is a box on which user can insert the date up to which items does not be safety stock.

RESULT GRID: Through the grid of result it is possible to view the list of items, which correspond to the filter data above mentioned. After having specified the values through which it is possible to obtain items search, the user, by clicking on Search button of the related Ribbon, will obtain the desired lines list on the result grid.

The data that can be viewed in the result grid are the following:

**Item class, code and description**

**Reorder Level, Minimum Stock and Days for Reorder** (data taken from Item Register Procurement tab)

**Average Daily Consumption** (calculated deducting the minimum stock from reorder level and dividing the obtained result according to days of reorder)

**Production economic order quantity** and realted multiples (data chosen by item MRP parameters)

**Initial Availability**, that is the item availability according to the date of the elaboration

**Final Availability**, that is the item availability according to the date indicated into the 'Under ROL on date' box

**Minimum Availability**, that is the minimum availability that item has during period between the current date and date indicated in 'Under ROL on date' box

Lastly, at the bottom of the window, there is an additional grid that shows the availability detail of the selected item into the main grid.

After having filtered the item lines, the user can select some of these lines (or all) and by clicking on the 'Consider for Job Orders' button into the Ribbon Bar, move them to the Summary tab, from which lines could be examined by production job order generation procedure. The Procedure will select lines for the production job order creation and they will transfer to the 'Summary' tab. The procedure proposes for each item a production job order that enables the user to integrate again the item, that has the risk to fo safety stock, through a production job order having the same date as the minimum stock date. This production job order quantity will have to enables the user to 'survive' till the 'Under ROL' date indicated within the filter area. Obviously this occurs in case that the item has some production or purchase economic lots and multiples.






