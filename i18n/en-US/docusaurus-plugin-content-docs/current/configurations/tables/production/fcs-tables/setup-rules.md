---
title: Setup Rules
sidebar_position: 2
---

The table is located at the path **Tables > Production > F.C.S. Tables > Setup Rules**.

The data present in this table is used only in the procedure for [F.C.S Scheduling](/docs/planning/ms-master-scheduling/fcs-scheduling).

This form allows defining the rules that enable the calculation of the setup time for the processes to be performed on a machine for which [Setup Properties)](/docs/configurations/tables/production/fcs-tables/setup-property) are defined.       
A setup rule can be defined through more than one record in this table. Each record allows managing up to 10 setup attributes. For each of the attributes defined in the record, there is a multiplication coefficient (default 1) that will be applied to the state transition value of the attribute.         
The values obtained after multiplication by the coefficients are treated according to the calculation type selected in the record (maximum, minimum, sum, average), and finally, the result is multiplied by the total coefficient (default 1).      
If the rule is defined through more than one record, the sum of the results of each record is performed to arrive at the final setup time calculation.

The table allows the insertion of new records or the search for already existing ones to display, modify, or delete them.

**Search Setup Rules**

The form consists of a filter area and a results area. Once all the desired filters are set, simply click the **Search** button to display the results in the results grid.

**Insert Setup Rules**

To insert new codes, you must click on the first empty row in the grid or press the **New** button.

For the new record, at least the mandatory fields required by the program must be filled in: **Code** and **Description**.

For anything not detailed in this document regarding the common functionality of forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).