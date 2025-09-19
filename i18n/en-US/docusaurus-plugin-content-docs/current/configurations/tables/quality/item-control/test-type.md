---
title: Test Types 
sidebar_position: 1
---

The table is located at **Tables > Quality > Item Controls > Test Types**.

In this table, it is possible to encode the types of Tests to be performed during goods acceptance and throughout the production process on the items.   
Some examples of the use of *Test Types* can be found in the management:
> **Data Sheets** - in the *Property* tab;   
> **Control Plans** - in the *Planned Tests* tab;   
> **Items Control** - in the *Tests* tab;   
> **Certificates of Analysis** - in the *Controls and detected values > Detected values* tab;   
> **M.E.S.** - in the *Quality Controls > Tests* tab.

The table allows for the insertion of new records or searching for existing ones to visualize, modify, or delete them.

**Search Test Types**

The form consists of a filter area and a results area. Once all desired filters are set, click on the **Search** button to view the results in the results grid.

**Insert Test Types**

To insert new *Test Types*, click in the grid on the first empty row or press the **New** button.   
For the new record, at least the mandatory fields required by the program must be entered: **Code** and **Description**.

**Duplicate Test Types**

To duplicate an existing *Test Type* into a new *Test Type*, click in the grid on the *Test Type* you want to duplicate and press the **Duplicate** button.   
A request for the **Code** of the new *Test Type* (mandatory data) and flags will be displayed, allowing you to choose whether to also duplicate the information for: *Configuration*, *Possible results*, *Function*, and *Images*.   
Then press the **OK** button or the **Cancel** button if you wish to proceed with duplication or not.

## Test Types 

This is the list where the main information of the *Test Type* is entered.   
The list consists of the following information:   
> **Code**: the code of the *Test Type*.   
> **Description**: the description of the *Test Type*.   
> **Standard Control plan reference**: It is a descriptive field that contains references to standard recognized testing methodologies.
>  
> **Category**
>> **Code**: the code of the *Category*.   
>> **Description**: the description of the *Category*.   
>> **Destructive**: indicates whether the test is of a destructive type.   
>
> **Internal laboratory**: indicates whether the test is performed internally.   
>  
> **External laboratory**
>> **Description**: enabled if the Internal Laboratory has not been indicated, it is the company name of the *analysis laboratory* that will perform the test.
>  
> **Measurement tool**
>> **Code**: the code of the *Measurement tool* to be used for detecting the values of the *Test Type*.   
>> **Description**: the description of the *Measurement tool category* to be used for detecting the values of the *Test Type*.
>  
> **Values**
>> **To detect**: indicates whether the test is to be detected or is only a *Property* and is therefore not detectable and is used in the *Data Sheets*.   
>> **Unit of measure**: the *Unit of measure* of the values to be detected.   
>> **Value type**: the *Value type* to be detected: *Numeric*, *Yes/No*, or *Foreground*.   
>> **Limit type**: enabled if the *Value type* is *Numeric*, it is the *Limit type* that will be proposed in the Tests.   
>  
> **Test control type**
>> **Generic**: indicates whether the test is commonly carried out on the types of documents that can be specified in the subsequent columns.   
>> **Document type**: enabled if the *Value type* is *Generic*, it is the document where the *Test Type* is commonly carried out.   
>> **Proposal in...**: enabled if the *Value type* is *Generic* and if the *Document type* provides for it, it is the detail (*Document header* or *Document row* ) where the *Test Type* is commonly carried out.   
>> **Code**: the code of the *Test control type* to be used.   
>> **Description**: the description of the *Test control type* to be used.
>> **Frequency**: is the descriptive frequency with which to perform the control.
>  
> **Notes**: free annotations.

### Attributes Type of test

It is possible to insert [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for the *Test Type*.   
These *Extra data* are inherited in the *Tests* of documents where the use of attributes is expected.   

### Configuration Parameters Test and Measuring instrument

Contains the necessary [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for operators to prepare all necessary instruments to begin a specific test. These can be considered necessary configurations, operational information needed for the execution of the test.   
These *Extra data* are inherited in the *Tests* of documents where a configuration is expected.   

### Possible Results

It is possible to customize, for the selected *Test Type*, the possible *Result Types*.   
When a single test is measured, based on its compliance, the system will propose the default result of *positive* or *negative*.   
The list consists of the following information:   
> **Result**: the code of the *Result Type*.   
> **Result description**: the description of the *Result Type*.   
> **Default positive**: indicates that it will be proposed as a positive result when a test is measured.   
> **Default negative**: indicates that it will be proposed as a negative result when a test is measured.   
> **Sequence**: the sequence of display in the lists of *Result Types* for the selected "Test Type".   
> **Notes**: free annotations.

### Detection and Approval Functions 

It is an attribution of rights that lists who can detect and/or approve the test values.   
The list consists of the following information:   
> **Function**: the code of the *Company Function*.   
> **Function description**: the description of the *Company Function*.   
> **Activity type**: the right given to the *Company Function* during the detection and/or approval activities of a test. Possible values are:   
> - *Can detect* - the *Company Function* has permissions for value detection only;   
> - *Can approve* - the *Company Function* has permissions for the approval of the test only;   
> - *Can detect and approve* - the *Company Function* has permissions for value detection and test approval.   
>
> Other *Company Functions* not listed do not have any rights to detect values and approve the test.   
> If no *Company Functions* are specified, all operators will be able to detect values and approve the test.
>
> **Notes**: free annotations.

### Images

It is possible to associate useful images for the test to be measured. For example, it may help to visually indicate certain characteristics or activities to be carried out during the preparation and execution of the test itself.

For everything not detailed in this document regarding the common operation of the forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).