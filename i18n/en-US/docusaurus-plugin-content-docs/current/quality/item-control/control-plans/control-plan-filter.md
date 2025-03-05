---
title: Search Control Plan Search 
sidebar_position: 1
---

The filter is located on the path **Quality > Item Controls > Control Plans**.   


In the **Control Plans**, sequences of *Planned Tests* are defined to be carried out during material acceptance, throughout the production flow, or during final testing to verify the suitability of received materials or produced items.   
*Control Plans* can be defined for individual items or for groups, or associated with *Stages* of *Processing Cycles*, and differentiated by *Customer* and *Supplier*.   
Management of *Revisions* for the *Control Plan* is provided.


The data filter allows for the entry of new *Control Plans* or for searching existing ones to view, modify, or delete them.   


### ![](/img/neutral/common/search.png) Search Control Plan  

The form is composed of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view the results in the results grid.   


### ![](/img/neutral/common/new.png) Insert Control Plans 

To enter new *Control Plans*, it is necessary to press the **New** button.   


### ![](/img/neutral/common/edit.png) Modify or ![](/img/neutral/common/view.png) View Control Plans 

To open the management of the results grid, you must double-click on the row of interest or, by selecting one or more rows, press the **Modify** or **View** buttons.   


*Specific buttons*:  

### ![](/img/neutral/common/duplicate.png) Duplicate Control Plan 


To duplicate an existing *Control Plan* into a new *Control Plan*, you need to click on the *Control Plan* in the grid that you want to duplicate and press the **Duplicate Control Plan** button. Only one *Control Plan* can be duplicated at a time. A request will be displayed:   
> **Control plan type**: this is the *Control plan type* of the new *Control Plan* (mandatory data), the *Control plan type* of the origin *Control Plan* is proposed.   
> **Number**: this is the progressive *Number* of the new *Control Plan* (mandatory data), proposed based on what is provided by the *Numeration* associated with the *Control plan type* and today's date.   
> **Duplicate with traceability**: this indicates whether to maintain the relationship/traceability of the destination *Control Plan* in the origin *Control Plan*, specifically in the *Related Control Plans* tab.   

Then press the **OK** button or the **Cancel** button if you do not wish to proceed with the duplication.   
At the end of the process, the new *Control Plan* is displayed.


### ![](/img/neutral/common/execute.png) Create New Revision 

To create a new *Revision* for an existing *Control Plan*, it is necessary to click on the *Control Plan* in the grid from which you wish to create a new *Revision* and press the **Create New Edition** button. A new *Revision* can be created for only one *Control Plan* at a time.   
A new *Control Plan* is created, containing all the information from the origin *Control Plan* but with an incremented *Revision* index and the *Start Validity Date* equal to today’s date.  
The origin *Control Plan* will end its validity by automatically setting the *End Validity Date* to today’s date.   
At the end of the process, the new *Revision* of the *Control Plan* is displayed.


### Create New Data Sheet 

From the *Control Plan*, it is possible to create a *Data Sheet*; to do this, you need to click on the *Control Plan* in the grid from which you wish to duplicate and press the **Create New Data Sheet** button. A new *Data Sheet* can be created for only one *Control Plan* at a time.   
A new *Data Sheet* is created with all the information from the origin *Control Plan*, but with a *Revision* index equal to *zero* and a *Start Validity Date* equal to today’s date. A request will be displayed:   
> **Sheet type**: this is the *Sheet type* of the new *Data Sheet* (mandatory data).   
> **Of the customer**: this is the *Customer* of the new *Data Sheet*, the *Customer account* of the origin *Control Plan* is proposed (only if it is of *Customer account type*).   
> **New code**: this is the *Code* for the new *Data Sheet* (mandatory data), proposed based on what is provided by the *Encoding Method* associated with the *Data Sheet type*.   
> **Rev.**: this is the *Revision* index of the new *Data Sheet* (mandatory data), proposed as *zero*.   
> **Create maintaining traceability**: indicates whether to maintain the relationship/traceability in the destination *Data Sheet* to the origin *Control Plan*, specifically in the *Related Sheets* tab.   

Then press the **OK** button or the **Cancel** button if you do not wish to proceed with the creation.   
At the end of the process, the new *Data Sheet* is displayed.   


### Control Plan Requests
From this button, you can manage *Control Plan Requests*.   


For everything not detailed in this document about the common functioning of forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).
