---
title: P.P.E. deliveries/returns
sidebar_position: 1
---

The management can be found at **Home > Employees > P.P.E. deliveries/returns  > P.P.E. deliveries/returns**   


:::important What it is for
This procedure allows you to register the deliveries and returns of *P.P.E.* to *Employees*.   

The form consists of a filter area, a proposed data area, and a results area.   
Once all desired filters are set, simply click the **Search deliveries** or **Search for returns** button to display the results in the results grid.   
:::


## Specific Buttons   


### ![](/img/neutral/common/search.png) Search Deliveries 
The search for *P.P.E.* to be delivered is based on the active *P.P.E.* expected for the *Task* and the *Employees* who hold the same *Task*.   
Based on the set filter, results are displayed in the results grid. The *Expected date*:   
- is not displayed if deliveries of *P.P.E.* have never been made for the *Employee*;   
- is displayed in *red* if the expected delivery of the *P.P.E.* is overdue compared to the current date;   
- is calculated based on the date of the last delivery made plus the *Monthly validity* indicated in the *Task* held by the *Employee*.
- if the *Employee* holds multiple *Tasks* and the same *P.P.E.* is needed for multiple *Tasks* with different *Monthly validity*, the *Monthly validity* considered for the calculation of the *Expected date* will be the lesser ones.


### Propose Deliveries  
Button enabled only if a **Search deliveries** has been previously performed.   
Proposes the *Quantity delivered* as 1 (one) in all rows displayed in the *Results Area*.   


### Delete Deliveries  
Button enabled only if a **Search deliveries** has been previously performed.   
Proposes the *Quantity delivered* as 0 (zero) in all rows displayed in the *Results Area*.   


### Search Returns   
The search for *P.P.E.* to be returned is based on the *P.P.E.* delivered to the *Employees*.   
Based on the set filter, results are displayed in the results grid.   
The *Expected date* is displayed in *red* if the expected return of the *P.P.E.* is overdue compared to the current date.   
No checks are made to ensure that the *Quantity returned* is consistent with the *Delivered Quantities* previously.  


### Propose Returns   
Button enabled only if a **Search for returns** has been previously performed.   
Proposes the *Quantity returned* as 1 (one) in all rows displayed in the *Results Area*.   


### Delete Returns    
Button enabled only if a **Search for returns** has been previously performed.   
Proposes the *Quantity returned* as 0 (zero) in all rows displayed in the *Results Area*.   


### ![](/img/neutral/common/save.png) Save    
All rows present in the *Results Area* with *Quantity delivered* or *Quantity returned* greater than *zero* will be inserted into the *P.P.E. delivery/return history*, as of the *Delivered/Returned on date* present in the *Data proposed for deliveries/returns* area.   


## Management Areas


### Filter   
The data filter consists of the following information:   
> **Deliveries/Returns for the employee**: this is the *Employee* for whom you want to search for *D.P.I.* to deliver/receive.   
> **Deliveries/Returns for P.P.E.**: this is the *P.P.E.* that you want to deliver/receive.   


### Proposed Data for Deliveries/Returns   
The information contained in this expander is mandatory for registering the *deliveries/returns*.   
The expander consists of the following information:   
> **Delivered by/Returned to**: this is the *person* who delivers the *P.P.E.* to the *Employees* / receives the *P.P.E.* from the *Employees*.   
> **Delivered/Returned on date**: this is the delivery/return date of the *P.P.E..* to the *Employees*.   


### Result   
The list consists of the following information:   
> **Expected date**: this is the expected delivery/return date of the *P.P.E.* to the *Employees*.   
>
> **Employee**
>> **Code**: this is the code of the recipient *Employee*.   
>> **Surname**: this is the surname of the recipient *Employee*.   
>> **First Name**: this is the name of the recipient *Employee*.   
>
> **P.P.E.**
>> **Code**: this is the code of the *P.P.E.* to be delivered/returned.   
>> **Description**: this is the description of the *P.P.E.* to be delivered/returned.   
>
> **Quantity**
>> **Delivered**: this is the *Quantity delivered* of the *P.P.E.* to the *Employee*.   
>> **Yield**: this is the *Quantity returned* of the *P.P.E.* from the *Employee*.   
>
> **Signed**: indicates whether the *Employee* has signed the *Delivery/Return Form* for acceptance.   
> **Use**: free notes on the subject; proposed from the list of *P.P.E.* required for the *Task* held by the *Employee*.   
> **Prescriptions**: free notes on the subject; proposed from the list of *P.P.E.* required for the *Task* held by the *Employee*.   
> **Notes**: free notes.   


For everything not detailed in this document regarding the common functionality of the forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).