---
title: Data Sheet Search
sidebar_position: 1
---

The filter can be found on the path **Quality > Item Controls > Data Sheets**.

The **Data Sheets** catalog all the information that describes the characteristics of the associated products as suitable for a contract, a functional specification, or a specific use; they can be customizable for *Client*.   
Revisions and traceability between different *Data Sheets* are managed.   
Standard reports are available for: *Data Sheet* (for internal use) and *Product Details* (for commercial use).


The data filter allows for the entry of new *Data Sheets* or to search for existing ones to view, modify, or delete them.

### ![](/img/neutral/common/search.png) Data Sheet Search 

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view the results in the results grid.

### ![](/img/neutral/common/new.png) Insertion of Data Sheet 

To enter new *Data Sheets*, it is necessary to press the **New** button.

### ![](/img/neutral/common/edit.png) Edit or ![](/img/neutral/common/view.png) View Data Sheets 

To open the management of the results grid, it is necessary to double-click on the row of interest or, by selecting one or more rows, press the **Modify** or **View** buttons.

*Specific buttons*:

### ![](/img/neutral/common/duplicate.png) Duplicate Sheet 

To duplicate an existing *Data Sheet* into a new *Data Sheet*, click on the *Data Sheet* in the grid that you wish to duplicate and press the **Duplicate Sheet** button. You can duplicate only one *Data Sheet* at a time. A request will be displayed:   
> **Sheet Type**: it is the *Sheet Type* of the new *Data Sheet* (mandatory data).   
> **Customer**: it is the *Customer* of the new *Data Sheet*, and the *Customer account* from the source *Data Sheet* is proposed.   
> **New code**: it is the *Code* of the new *Data Sheet* (mandatory data), and it is proposed based on what is provided by the *Encoding Method* associated with the *Data Sheet Type*.   
> **Duplicate with traceability**: indicates whether to maintain the relationship/traceability in the source *Data Sheet* (related sheets tab of the source *Data Sheet*) and in the destination *Data Sheet* (in the data sheet origin expander present in the header info).

Then press the **OK** button or the **Cancel** button if you wish to continue with the duplication process or not.   
The new *Data Sheet* created will have the *Revision* equal to *Zero*.   
At the end of the process, the new *Data Sheet* will be displayed.

### ![](/img/neutral/common/execute.png) Create New Revision 

To create a new *Revision* of an existing *Data Sheet*, click on the *Data Sheet* in the grid from which you want to create a new *Revision* and press the **Create New Revision** button. You can create a new *Revision* for only one *Data Sheet* at a time.   
A new *Data Sheet* will be created, with all the information from the source *Data Sheet* but with an incremented *Revision index* and the *Start validity date* equal to today's date.   
The source *Data Sheet* will end its validity; the *End validity date* will be set to today's date.   
At the end of the process, the new *Revision* of the *Data Sheet* will be displayed.

### ![](/img/neutral/common/item-web.png) Create Control Plan

From the *Data Sheet* it is possible to create a *Control Plan*; to do this, click on the *Data Sheet* in the grid from which you wish to duplicate and press the **Create New Control Plan** button. You can create a new *Control Plan* for only one *Data Sheet* at a time.   
A new *Control Plan* will be created, copying only the source *Properties* with the *Tests to detect* indicator, all other information from the *Data Sheet* but with *Revision index* equal to *zero* and the *Start validity date* equal to today's date. A request will be displayed:   
> **Control plan type**: it is the *Control Plan Type* of the new *Control Plan* (mandatory data).   
> **Number**: it is the progressive *Number* of the new *Control Plan* (mandatory data), proposed based on what is provided by the *Numeration* associated with the *Control Plan Type* and today's date.   
> **Create maintaining traceability**: indicates whether to maintain the relationship/traceability of the source *Data Sheet* in the destination *Control Plan* (origin control plan expander present in the header info).

Then press the **OK** button or the **Cancel** button if you wish to proceed with the creation or not.   
At the end of the process, the new *Control Plan* will be displayed.

For anything not detailed in this document regarding the common operation of the forms, please refer to the following link [Custom features, Buttons, and Fields](/docs/guide/common).