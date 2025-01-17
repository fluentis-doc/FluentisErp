---
title: Calibration Tools
sidebar_position: 2
---

Management can be found on the path **Quality > Calibration Tools > Calibration Tools > New Calibration Tools** or it can be performed from **Calibration Tools Search**.


:::important What is it for
In the Calibration Tools management, it is possible to register Internal Calibrations and Calibration Certificates.   
If the instrument is subject to calibration and the calibration is internal, it is possible to enter the recorded values for the specified positions. Fluentis will automatically assign a positive or negative result for each individual position and overall.   
If the instrument is subject to calibration and the calibration is external, it is possible to attach the Calibration Certificate received from the third party that performed the calibration. The result will be manually attributed by the user in this case.   
Standard reports available include: Instrument Calibration Log grouped by: Report, Instrument, and User.   

Standard reporting is available for:   
> **Instrument Calibration Log**: list of *Calibration Tools* groupable by: *Report*, *Instrument*, and *Carried out by*.   
:::


## Command Buttons


### ![](/img/neutral/common/save.png) Save

By pressing this button, all modified information of the displayed *Calibration Tool* is saved.


## Data Management


### Header Data

The managed information includes:   
> **Calibration Type**: it is the *Calibration Type* (mandatory data).   
> When manually entering a new *Calibration*, the *Manual Calibration Type* indicated in the *Calibration Tools Parameters* is proposed.   
>
> **Year/Number**: these are the *Year* and *Number* of the *Calibration Tool* (both mandatory data).   
> When entering a new *Calibration Tool*:   
> - the *Effective Calibration Date* is proposed as today’s date;   
> - the *Year* and *Number* are proposed based on the *Effective Calibration Date* and the *Numeration* associated with the *Calibration Type*.   
>
> **Calibration carried out by**: expander where it is possible to enter:   
>
>> **Internal Calibration**: indicates that the *Measurement Tool* is calibrated by an internal subject of the company.   
>> **External Laboratory**: it is the business name of the *Supplier* that performs the external calibration.   
>> **Function**: it is the *Business Function* that performs the internal calibration.   
>> **Employee**: it is the *Employee* who performs the internal calibration.   
>
> **Scheduled**: indicates that the *Calibration Tool* has been planned.   
> **Calibration Result**: it is the overall *Result* of the calibration.   
> It is automatically calculated based on the *Results* of the *Detected Values*, if it is an *Internal Calibration*.   
> It is manually assigned if it is an *External Calibration*.   
> **Remarks**: free notes on the subject.   
> **Notes**: free notes.   
>
> **Scheduled Calibration Date**: it is the planned calibration date.   
> It is proposed by the *Schedule New Calibrations* and is not modifiable.   
> **Effective Calibration Date**: it is the date of the effective calibration.   
> When manually entering a new calibration, it is proposed as today’s date. 
It is proposed by the *Schedule New Calibrations* as the *Scheduled Calibration Date* and is subsequently modifiable.   
> **Measurement Tool**: it is the reference to the *Measurement Tool* subject to *Calibration*.   
>
> **Properties of the Tool**: expander where it is possible to view:   
>
>> **Properties of the Tool**: it is the *Model* of the *Measurement Tool*.   
>> **Active**: indicates that the *Measurement Tool* is still *active*.   
>> **Classification**: it is the *Classification*; examples: Mechanical, Electrical, Electronic, etc.   
>> **Unit of Measure**: it is the *Unit of Measure* of the values recorded by the *Measurement Tool*.   
>> **Range of Measurement**: it is the measurable range of the *Measurement Tool*.   
>> **Accuracy**: it is the minimum *Measurement Precision*.   
>> **Limits**: these are the *Acceptance Limits* of the *Measurement Tool* for use; examples: potential precision limits, environments where it should not be used, etc.   
>
> **Audit Trail**: read-only expander where the following information is visible:   
>
>> **Creation Date/Name**: it is the date and the *User A.R.M.* who entered the *Corrective Action*.   
>> **Last Edit Date/Name**: it is the date and the *User A.R.M.* who made the last edit to the *Corrective Action*.   


### Detected Values
The tab is only visible if the *Measurement Tool* is subject to *Internal Calibration*.
In this list, it is possible to indicate the values to be detected during *Internal Calibration* activities.   
If the *Measurement Tool* is *Active*, *Subject to calibration*, and if it is *Internal Calibration*, these values are inherited from the item register of the *Measurement Tool*.   
All information is disabled except for: *Data detected*, *Result*, *Remarks*, and *Notes*.
The list consists of the following information:   
> **Sequence**: it is the recording sequence.   
> **Position**: free notes on the subject.   
> **Reading Interval**: free notes on the subject.   
> **Required Data**: it is the typical required value.   
> **Uncertainty (-)**: it is the negative uncertainty value (expressed as a percentage) that will be applied to the *Data detected*.   
> **Uncertainty (+)**: it is the positive uncertainty value (expressed as a percentage) that will be applied to the *Data detected*.   
> **Data Detected**: it is the value detected from the reading of the instrument made in the indicated *position*.   
> **Variance**: it is the value calculated from the difference between *Data detected* and *Required Data*.   
If the deviation is greater than the *Data detected* plus the *Uncertainty (±)* (application in percentage), the *Result* of the detection will be negative.   
At the first negative *Result* value in the list of *Detected Values*, the overall *Calibration Result* will also be negative.   
> **Remarks**: free notes on the subject.   
> **Note**: free notes.   


### Reports and Calibration Certificates History
In this list, it is possible to view the history of *Calibrations* and *Calibration Certificates* planned and performed for the *Measurement Tool* associated with the displayed *Calibration*.   
By double-clicking the desired line, it is possible to manage the selected *Calibration*.   
The list consists of the following information:   
> **Calibration Type**: it is the code of the *Calibration Type*.   
> **Calibration Type Description**: it is the description of the *Calibration Type*.   
> **Year**: it is the *Year* of the document.   
> **Number**: it is the *Number* of the document.   
> **Internal Calibration**: indicates if an *Internal Calibration* has been issued.   
> **Scheduled**: indicates if the document has been scheduled (planned).   
> **Scheduled Date**: it is the planned calibration date.   
> **Calibration Date**: it is the date of the effective calibration.   
> **Result**: it is the code of the *Calibration Result*.   
> **Result Description**: it is the description of the *Calibration Result*.   
> **Category**: it is the code of the *Category Tool*.   
> **Category Description**: it is the description of the *Category Tool*.   
> **Code**: it is the code of the *Measurement Tool*.   
> **Serial Number**: it is the serial number of the *Measurement Tool*.   
> **Model**: it is the model of the *Measurement Tool*.   
> **External Laboratory**: it is the business name of the *Supplier* that performs the external calibration.   
> **Function**: it is the code of the *Business Function* that performs the internal calibration.   
> **Function Description**: it is the description of the *Business Function* that performs the internal calibration.   
> **Code**: it is the code of the *Employee* who performs the internal calibration.   
> **Surname**: it is the last name of the *Employee* who performs the internal calibration.   
> **Name**: it is the first name of the *Employee* who performs the internal calibration.   


### Extra Data
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each *Calibration Tool*.   


### Picture
The picture associated with the management of the *Measurement Tool* is displayed.   


For anything not detailed in this document regarding the common operation of forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).