---
title: Import Items to Check 
sidebar_position: 2
---

The import procedure is located at **Quality > Item Checks > Item Checks > Import Items to Check**.   


:::important Purpose
This management allows for the creation of new *Item Checks* by importing the *Items* to check from the provided *Document Types*:   
> ***Goods Receipt***   
> ***Purchase Delivery Note***   
> ***Purchase Invoices***   
> ***Production Declarations***   
> ***Production Order Phases***   
> ***Valorization of Subcontractor Returns***   
> ***Movements Load***   

and associate them with the planned *Control Plan* to then verify their compliance through visual inspections or with the aid of *Measuring Instruments*.   
:::


The form is divided into:
- a filter area, contextual to the *Document Type* from which the *Items* to check are to be imported;   
- an area made up of several tabs, one for each *Document Type*, each containing grids dedicated to the results of the filter.   

## Specific Buttons

### ![](/img/neutral/common/search.png) Search Document Lines to Import

The filter area and the tab containing the results grid change once the *Document Type* is specified.   
Once the desired filters are set, clicking on the **Search** button will display the results within the results grid.   
For the selected *Document Type*, only the item document lines will be displayed:   
- coded for *Goods Receipt*, *Purchase Delivery Note*, *Purchase Invoices*, and *Valorization of Subcontractor Returns*;   
- with produced and/or discarded quantities for *Production Declarations*;   

for the remaining *Document Types* of *Production Order Phases* and *Movements Load*, all document lines will be displayed.   

### Confirm Document Lines to Import

Enabled if at least one line is selected from the results grid and the *Control Type* to create.   
Once the desired lines are selected, it is necessary to click the **Confirm** button to associate the *Control Plans* and create the *Item controls*.   
At the end of the operation, a prompt will ask if you wish to continue with the import process or open the *Item controls* just created.   

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />

## Management Import Items to Check 

### Filter Area

The area consists of a fixed part where the general search filters are shown and a variable part contextual to the selected *Document Type*; the variable part is displayed below the *Item* expander.   
The general search filters are:   
> **Document Type**: is the *Document Type* in which to search for information.   
> When executing the management task, the *Document Type* indicated as *Default* in the list of *Document Types for Import* in the *Item controls* tab of the *Item Control Parameters* will be proposed; if not specified, *Purchase Delivery Note* will be suggested.   
> The automatic proposal, or any subsequent variation by the operator, will change the variable part of the filters and the displayed tab.   
>   
> **Item Detail**: is the type of detail to check for the specific *Item* related to the document type.   
> It is a predefined list of values from the system:   
> - *None* - the considered *Item* line will not take any detail data;   
> - *Batch* - the considered *Item* line will take the maximum detail as the *Batch*;   
> - *S.N.* - the considered *Item* line will take the maximum detail as the *Serial Number*;   
> - *Loading Unit* - the considered *Item* line will take the maximum detail as the *Loading Unit*.   
>   
> When executing the management task, the *Item Detail* indicated in *Item Detail* in the list of *Document Types for Import* in the *Item controls* tab of the *Item Control Parameters* will be proposed.   
>
> **Control Type**: the code of the *Control Type* to associate with the *Item controls* to be created.   
> When executing the management task, the *Control Type* indicated in *Control Type* in the list of *Document Types for Import* in the *Item controls* tab of the *Item Control Parameters* will be proposed.   
>   
> expander **Detail**   
>> **Not yet considered**: indicates whether to search only for the document lines that have not been considered in previous imports.   
>> **Already considered**: indicates whether to search, in addition to those not yet considered, also for the lines that have already been considered in previous imports (usually used if further checks are desired).   
>   
> **Bar Code**: is the code enabled for recognition of: *Item*, *Loading Unit*, *Batch*, and *Serial Number*.   
>   
> expander **Item**
>> **Loading Unit**: is the formatted code of the *Loading Unit*.   
>> **Batch**: is the code of the *Batch*.   
>> **Serial Number**: is the code of the *Serial Number*.   

### Result Area   

Contained in each tab, it is the "grid" that contains the result of the *Search* applied to the filter area.   
The information contained in the list is contextual to the selected *Document Type*.   

For anything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).