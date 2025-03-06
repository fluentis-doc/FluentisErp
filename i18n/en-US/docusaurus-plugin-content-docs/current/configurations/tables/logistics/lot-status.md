---
title: Batch Status
sidebar_position: 22
---

The table is located at **Tables > Logistics > Batch Status**.

In this table, it is possible to encode the *Batches Status* to define their validity.

It allows you to insert new records or search for existing ones to display, modify, or delete them.

**Search Batch Status**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view the results in the results grid.

**Insert Batch Status**

To insert new encodings, you must click on the first empty row in the grid or press the **New** button.  
For the new record, the mandatory fields required by the program must be filled: **Code** and **Description**.

A batch is characterized by a status that defines its validity. For some types of materials in particular, such as food and pharmaceutical products, the status is mandatory (for example, in the pharmaceutical field, a batch that requires testing before it can be used will have an initial status of *In quarantine* until the testing is completed).

*Specific fields*:     

> **Disp. prel. auto**: if active, this batch will not be considered in availability;     
> **Not available for MRP**: if active, this batch will be considered by MRP only if the *Consider batches with 'not available' state* flag has also been activated in the *MRP Parameters* of the item. If either the *Not available for MRP* flag or the *Consider batches with 'not available' state* flag is not active, then the MRP will not consider it either.

For anything not detailed in this document regarding the common functionality of forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).