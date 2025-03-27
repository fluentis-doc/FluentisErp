---
title: Measurement Tool 
sidebar_position: 2
---

The management is found along the path **Quality > Calibration tools > Measurement tools > New Measurement Tool** or it can be executed from the **Measurement Tools Search**.


:::important Purpose
In this register, the measurement tools used to ensure the suitability of products and the delivery of services offered are stored.   
The measurement tool can be associated with purchase information, responsibility, technical/mechanical properties, location, and calibration.   
If the tool is subject to calibration and the calibration is internal, it is possible to define the activities that must be performed and the values to be detected for the calibration to be successful.   
If the tool is subject to calibration and the calibration is external, it is possible to define the third-party entity that will carry out the calibration.   
If a calibration periodicity is entered, the "Schedule New Calibrations" button allows for the automatic creation of scheduled calibrations for a desired period.   
Standard reports are available for: Grouped instruments register by: Tool, Category, Supplier, Location, User, Expire Warrant, and Calibration due date, Register of Tools not subject to calibration, and Measurement Tool Card.

Standard reports available include:   
> **Measurement Instruments Register**: list of *Measurement Tools* groupable by: *Instrument*, *Category*, *Supplier* (of purchase), *Location*, *User*, *Expire warrant*, and *Calibration due date*.   
> **Register of Instruments not subject to calibration**: list of *Measurement Tools* where *Calibration* is not foreseen; for printing this report, the filter *Status - Not subject to calibration: All, Subject to calibration, Not subject to calibration* has no effect.   
> **Measurement Tool Card**: sheet of *Measurement Tools*.   
:::


## Command Buttons


### ![](/img/neutral/common/save.png) Save

Pressing this button saves all modified information of the displayed *Measurement Tool*.


### ![](/img/neutral/common/duplicate.png) Duplicate Tool

To duplicate the displayed *Measurement Tool* into a new *Measurement Tool*, simply press the **Duplicate** button.   
The information from the source tool that is not duplicated includes: *Code*, *Serial number*, *Purchase date*, *Expire warrant*, *Location supplier*, *Customer owner*, *Picture*, and data from the last calibration performed: *Last calibration date* and *Result*.   
At the end of the process, the new *Measurement Tool* is displayed.


### Schedule New Calibrations

The button is enabled only if the *Measurement Tool* is *Active*, is *Subject to calibration*, and there is a *Calibration period* (*Unit of measure* *Days* or *Months*). A request is displayed:   
> **Plan until**: this is the end date for scheduling new scheduled calibrations.

*Method used for scheduling*:   
First, all previous planned *Calibrations* that have not yet been carried out for the *Tool* are removed.  
Subsequently, starting from the date of the last *Calibration*, as many *Calibrations* as possible are created within the requested interval from today's date and scheduled according to the *Calibration period*. If the first proposed date falls on a non-working day specified in the *Factory Calendar*, the proposed date will be postponed to the first useful working date.   
If no *Calibration* has ever been scheduled or performed for the tool, or if the last *Calibration* date is earlier than today minus the *Calibration period*, the first *Calibration* will be proposed for today, followed by the others.



### New Calibration

The button is enabled only if the *Measurement Tool* is *Active* and is *Subject to calibration*.   
To create a new unplanned *Calibration* for the displayed *Measurement Tool*, it is necessary to press the **New Calibration** button.   
Upon confirming the request, a new *Calibration* is created; the *Calibration type* (internal or external) is proposed, as indicated in the *Calibration Tools Parameters*, along with the references of the *Measurement Tool* and its properties.   
At the end of the process, the new *Training course* is displayed.


## Data Management


### Header Data

The managed information includes:   
> **Category**: this is the *Category tool* of the *Measurement Tool* (mandatory data).   
> **Code**: this is the code of the *Measurement Tool* (mandatory data).   
> **Serial number**: this is the serial number of the *Measurement Tool*; free descriptive information.   
> **Model**: this is the model of the *Measurement Tool*; free descriptive information.   
>
> **Purchase Data**: expander where it is possible to enter:   
>
>> **Supplier**: this is the business name of the *Supplier* of purchase.   
>> **Producer**: this is the contact of the *Manufacturer* of the tool.   
>> **Purchase date**: this is the purchase date.   
>> **Expire warrant**: this is the warranty expiry date of the purchase.   
>> **Maintenance/service supplier**: this is the business name of the usual maintenance/service *Supplier*.   
>
> **Responsible Function**: expander where it is possible to enter:   
>
>> **Function**: this is the responsible *Business function*.   
>> **Employee**: this is the responsible *Employee*.   
>
> **Calibration Properties**: expander where it is possible to enter:   
>
>> **Not subject to calibration**: indicates that the *Measurement Tool* is not subject to calibration.   
>> In this case, all other information present in the expander is disabled.   
>> **Internal calibration**: indicates that the *Measurement Tool* is calibrated by someone internal to the company.   
>> **Calibration period**: this is the period (expressed in the subsequent *Unit of measure*) of calibration of the *Measurement Tool*.   
>> **Unit of measure**: this is the *Unit of measure* for the *Calibration period*.   
>> **Last calibration**: this is the date of the last calibration performed; the value is automatically set upon assigning the *Result* of the last calibration performed but can also be indicated manually.   
>> **Result**: this is the *Result* of the last calibration performed; the value is automatically set upon assigning the *Result* of the last calibration performed but can also be indicated manually.   
>> **Next calibration date**: this is the date of the next calibration; the value is automatically set upon assigning the *Result* of the last calibration performed but can also be indicated manually.   
>> **Calibration supplier**: this is the business name of the *Supplier* that performs the external calibration.   
>
> **Classification**: this is the *Classification*; examples: Mechanical, Electrical, Electronic, etc.   
> **Item**: this is the *Item* associated with the *Measurement Tool*; the item must be of *Item nature* *Equipment* or *Tool* to be selectable.   
>
> **Properties of the tool**: expander where it is possible to enter:   
>
>> **Unit of measure**: this is the *Unit of measure* of the values detected by the *Measurement Tool*.   
>> **Range of measurement**: this is the measurable range of the *Measurement Tool*.   
>> **Accuracy**: this is the minimum *Measurement accuracy*.   
>> **Limits**: these are the *Acceptance limits* of the *Measurement Tool* for use; examples: any precision limits, environments where it should not be used, etc.   
>> **Supplier location**: this is the business name of the *Supplier* where the *Measurement Tool* is located.   
>> **It is a primary tool**: indicates that the displayed *Measurement Tool* is used for calibrating other tools.   
>> **Primary tool**: this is the *Measurement Tool* used to perform the calibration of the displayed tool.   
>
> **Usage Function**: expander where it is possible to enter:   
>
>> **Function**: this is the *Business function* that regularly uses the *Measurement Tool*.   
>> **Employee**: this is the *Employee* who regularly uses the *Measurement Tool*.   
>
> **Measurement tool class**: this is the *Measurement Tool Class*; it is commonly used to define different levels of downgrading of the *Measurement Tool*.   
> **Warehouse/Location**: this is the *Warehouse/Location* where the *Measurement Tool* is located.   
> **Customer owner**: this is the business name of the owner *Customer*.   
> **Active**: indicates that the *Measurement Tool* is still *active*.   
> **Not active since**: indicates the date since which the *Measurement Tool* is no longer *active*.   
> **Note**: free notes.   


### Values to be detected
In this list, it is possible to define the types of measurement and the values to be detected during *Internal Calibration* activities.   
If the *Measurement Tool* is *Active*, is *Subject to calibration*, and if it is of *Internal Calibration*, these values are reported in the *Internal Calibrations*.   
The list consists of the following information:   
> **Sequence**: this is the sequence of detection.   
> **Position**: free notes on the subject.   
> **Reading interval**: free notes on the subject.   
> **Data required**: this is the required typical value.   
> **Uncertainty (-)**: this is the value of negative uncertainty (expressed in percentage) that will be applied to the *Data required*.   
> **Uncertainty (+)**: this is the value of positive uncertainty (expressed in percentage) that will be applied to the *Data required*.   
> **Note**: free notes.   


### Associated Items
In this list, it is possible to associate measurable *Items* with the *Measurement Tool*.   
With the current version of Fluentis, there are no standard checks that verify the use of the tool to detect values from the *Items* present on this list.   
The list consists of the following information:   
> **Class**: this is the *Item Class*.   
> **Code**: this is the code of the *Item*.   
> **Class**: this is the description of the *Item*.   
> **Notes**: free notes.   


### Reports and Calibration Certificates History
In this list, it is possible to view the history of *Calibrations* and *Calibration certificates* planned and performed for the *Measurement Tool*.   
By double-clicking on the desired row, it is possible to manage the selected *Calibration*.   
The list consists of the following information:   
> **Calibration type**: this is the code of the *Calibration type*.   
> **Calibration type description**: this is the description of the *Calibration type*.   
> **Year**: this is the *Year* of the document.   
> **Number**: this is the *Number* of the document.   
> **Internal calibration**: indicates if an *Internal Calibration* has been issued.   
> **Scheduled**: indicates if the document has been scheduled (planned).   
> **Scheduled date**: this is the expected calibration date.   
> **Calibration date**: this is the actual calibration date.   
> **Result**: this is the code of the *Result* of the calibration.   
> **Result description**: this is the description of the *Result* of the calibration.   
> **Category**: this is the code of the *Category Tool*.   
> **Category description**: this is the description of the *Category Tool*.   
> **Code**: this is the code of the *Measurement Tool*.   
> **Serial number**: this is the serial number of the *Measurement Tool*.   
> **Model**: this is the model of the *Measurement Tool*.   
> **External laboratory**: this is the business name of the *Supplier* that performs the external calibration.   
> **Function**: this is the code of the *Business function* that performs the internal calibration.   
> **Function description**: this is the description of the *Business function* that performs the internal calibration.   
> **Code**: this is the code of the *Employee* who performs the internal calibration.   
> **Surname**: this is the last name of the *Employee* who performs the internal calibration.   
> **Name**: this is the first name of the *Employee* who performs the internal calibration.   


### Extra Data
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for each *Measurement Tool*.   


### Linked Documents
In this list, it is possible to add and consult any attachments; a preview can be displayed.   


### Picture
It is possible to attach a picture of the *Measurement Tool* using drag&drop; a preview is displayed.   
This attachment is not included in the Fluentis Document.   


For everything not detailed in this document regarding the common operation of forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).