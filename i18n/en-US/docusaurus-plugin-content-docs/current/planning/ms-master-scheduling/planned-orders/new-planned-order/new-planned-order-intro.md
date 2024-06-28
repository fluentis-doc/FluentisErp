---
title: New Planned Order
sidebar_position: 1
---

The window, that enables the user to insert a New Planned Order, can be opened through the following path Planning > MPS > Planned Orders > New Planned Order, or by clicking on icon of Ribbon from the Search Planned Orders window called exactly 'Insert Order'.

Given that usually the planned orders are generated automatically by the general scheduling procedure or by MRP elaboration, through this menu item the user can generate a purchase, production or subcontractor planned order manually.

First, the application ask for the insertion of Planned Order Type, even if it proposes in the specific combo box the default type. After having indicated the order type, user can insert the item to be produced into the specific boxes through the help or by typing class and code manually. Then after having inserted the item to be produced, the application enables the user to choose even the item variant and it completes the window of the New Planned Order with all the available information realted to item. In addition, in order to save the item, the application needs the insertion of Estimated End Date and of Quantity to be produced into the specific fields, as follows. Lastly, after having saved, it is necessary to click on the 'Complete Orders Data' button in order to update all tabs (Materials, Phases, etc.) that take data from bill of material and working route of the Planned Order item (only if production one).

The other data in the management window are the following:

**Number / Year**: in these fields it is possible to insert automatically the planned order year and number that user is creating according to the numbering type linked to the planned order type inserted into the specific field. Both these data can be also modified manually by the user, but it is strongly not recommended;

**Order Type**: this combo shows the planned order type that user is creating or that has been created (Production, Purchase, Subcontractor). Usually it corresponds with the item procurement type related to the same planned order;

**Compulsory Order**: if this flag is active the planned order has a primary importance and it doesn't enable the user to move the same order by setting an higher date compared to the end date estimated by general scheduling

**Order Priority**: through this combo box it is possible to set the priority that is given to this order;

**Job Order Type**: through this box it is possible to view the production job order type from which the planned order has been generated. Obviously in case that it has been manually generated, it will not possible to link it to any existing production job order and so this box will be free;

**Generate from Demand**: through this field it is possible to view 'Manual' (in case that it is a planned order created manually), 'Dipendent'  (in case that it is a planned order created from scheduling and that depends on other planned order of higher level) or 'Indipendent' (in case that it is a planned order created from scheduling and that doesn't depend on other planned order of higher level, because it is already a first level order);

**Prod. J.O.**: through these 3 fields it is possible to set production job order year, number and description from which the planned order has been generated. Obviously it has been manually generated, it will not possible to link it to any existing production job order and so this box will be free;

**Insertion Date**: it is possible to set the current date (not editable) automatically;

**Job Order**: through a double click it is possible to open a 'job orders help' that enables the user to link a sales job order to the planned order that user is inserting;

**Last Modification**: it is possible to set the date in which the last order modification has been performed;

**Customer**: through these 3 fields it is possible to specify the Customer data: 'accoutn', 'detail account', 'customer name'. Thanks to a double click on the first field it is possible to open a 'Accounts Help' starting from which it is possible to select a customer to be linked to the order;

**Preferential Route Structures**: through a double click user can enter a routes help from which it is possible to select a route. In this field the user can decide from which item working route it is necessary to take information to be inserted subsequently into Planned Order Phases tab;

Version: the combo box enables the user to select the 'version', on the contrary the following field concerns the version year. Usually it is possible to set version automatically;

**Estimated Working Start – End**: it is possible to set the estimated working start and end dates. In case that, after having completed the working route data, the user edits one of these 2 dates, the other one is consequently recalculated;

**Item**: the first combo enables the user to set the item class. Thanks to a double click on the second field user can open an 'Item Help' through which it is possible to select the single order item (code and description);

**Notes**: it is a free field on which it is possible to insert notes;

**Variant**: through this combo box it is possible to specify the item variant;

**Option**: through this combo box it is possible to specify the item option. Usually user can set the option automatically (Base Option);

**Vendor/Subcontractor**: through the 'account', 'detail account' and 'name' it is possible to insert vendor/subcontractor data by opening possibly thanks to a double click the related accounts help. This box is active only in case that the planend order is a purchase or subcontractor one;

**Quantity to Be Produced**: in this field it is possible to specify the item quantity to be produced. In case of a production item, in this field it will be proposed automatically the quantity of the production economic lot inserted into item MRP parameters;

**Oper. UM**: it is possible to indicate the item operational unit of measure

**Quantity Used**: in this field it is possible to set the quantity to be produced into the alternative unit of measure

**UM Used**: it is possible to indicate the item alternative unit of measure

At the bottom of the window there are 8 different tabs: Materials, Phases, Rig, Equipments, Phase Note, Precodified Phase Notes, Attributes, Job Orders, as follows:






