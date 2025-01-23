---
title: Control Values 
sidebar_position: 3
---

This form is intended to host the reconciliation between accounting values and controlling values and is extremely useful for keeping track of the allocations and transfers that have taken place and the adjustments calculated by the system in relation to the methods provided for this operation.

Before launching the data search, it will be necessary to set the following fields in the header of the form:
- the ***Area*** of the data to be searched, mandatory 
- the ***Dimension*** of the data to be searched, optional 
- the ***Year***, mandatory 
- the range of ***From period*** and ***To period***, optional 


The data is organized into five distinct tabs:

***Source Values  to Assign:*** represents the accounting movements associated with the corporate center marked by the flag *Accounts to be assigned* (specific for costs that general accounting cannot directly assign). The last column *Value* allows verification that all allocations have been closed correctly, without leaving any open data.

***Assigned source values:*** similar in structure to the previous one, highlights the data actually assigned by the corporate center intended for costs to be reassigned and the receiving centers. Here too, the last column *Value* allows verification that all allocations have been closed correctly, without leaving any open data.

**Revised values:** highlights the transfers between centers managed by the cost drivers. The data is represented by grouping each Cost driver that has managed the corporate centers and for each center the movement connected to the accounting account that has been transferred. Again, the last column *Difference* allows verification that all transfers have been closed correctly, without leaving any open data at the *Cost driver* level.

**Order values:** In this tab, the transfers of the Projects/Job Orders dimension are highlighted, always occurring through cost drivers.

**Adjustment values:** in the last tab, the differences between the accounting data and the controlling data are highlighted, grouping the accounts according to the *Adjustment Group* to which they belong as inserted in the chart of accounts. The presence of values in the *Difference* column on groups of accounts that do not provide for a separate off-balance management in advance of the accounting data will indicate some assignment of values at the level of off-balance registrations in the area, which will require further investigation to understand the origin and possibly adapt the analysis model.

:::tip Example 
This last tab is important to verify, in particular, those accounts (e.g., fees of the board of statutory auditors) that accounting records after the fact and are therefore subject to forecast off-balance recording in controlling, in order to check their mid-year/yearly adjustment in the **Process periods** procedure where, in the *Process accounting data* section, the field **Balancing timing** allows selecting the logic *Mid-Year* rather than *Yearly*.
:::