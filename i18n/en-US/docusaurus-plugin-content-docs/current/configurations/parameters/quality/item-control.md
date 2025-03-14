---
title: Item Control Parameters
sidebar_position: 1
---

The parameters can be found at the path **Item Control Parameters**.

The data contained in this management are used to provide information in the following areas:   
- **Data Sheets**;   
- **Control Plans**;   
- **Item control**;   
- **Certificates of Analysis**.   

#### Specific Button

**Save**: allows you to save the modified information. 

## General 

In this tab, it is possible to enter data to suggest by default in the *Item Control* module documents.   

### Test Types 

In this expander, it is possible to enter data to suggest in the *Test Types*.   
In the expander, you can enter:   
- **Value type**: *Value type* to suggest when entering a *Test type*.   
- **Limit type**: *Limit type* to suggest when entering a *Test type*.   

### Technical Sheets
In this expander, it is possible to enter data to suggest in the *Data Sheets*.   
In the expander, you can enter:   
- **Data sheet type**: *Data sheet type* to suggest when entering a *Data sheet*.   
- **Responsible**: *Employee* to suggest as responsible when entering a *Data sheet*.   
- **Disclaimer type in Items**: *Disclaimer type* to suggest when entering an *Related item* of a *Data sheet*.   
- **Disclaimer type in print**: *Disclaimer type* to suggest in *Declaration type to print if the item is without one* in the *Report Data Sheet*.   

### Control Plans  

In this expander, it is possible to enter data to suggest in the *Control Plans*.   
In the expander, you can enter:   
- **Control plan type**: *Control plan type* to suggest when entering a *Control plan*.   
- **Responsible**: *Employee* to suggest as responsible when entering a *Control plan*.   

### Analysis Certificates 

In this expander, it is possible to enter data to suggest in the *Certificates of Analysis*.   
In the expander, you can enter:   
- **Certificate type**: *Analysis certificate type* to suggest when entering an *Certificate of Analysis*.   
- **Responsible**: *Employee* to suggest as responsible when entering an *Certificate of Analysis*.   


## Item Control  

In this tab, it is possible to enter data:
> - to suggest by default in *Item Control*;   
> - to define various colors to recognize the different states of a *Control*;   
> - to set management parameters;   
> - for automatic research and association of *Control Plans* to associate with the *Item Control*.   

- **Enable detecting multiple values**: indicates the activation of the possibility to detect multiple values for each test in all types of documents.   
- **Automatic approval of detected values**: indicates the automatic *Approval* of the *Test* upon detection of the *Values* and automatic assignment of the *Result*.   
- **Negative result proposal**: is a list of predefined values from the system that indicate the methodology for assigning non-conformity of the *Test*.   
> The methodology is only considered for the detection of *Tests* of *Numeric* type in *Measurement values*. The predefined values are:   
> - *at the first non compliant detected value*;   
> - *based on the arithmetic mean of the detected values*.   
>
- **Negative result type**: is the proposal of the *Result type* in the case of non-compliant *Tests*.   
- **Positive result type**: is the proposal of the *Result type* in the case of compliant *Tests*.   


### Document Types for Import 

In this expander/list, it is possible to enter data to be considered during the *Importing Items to Check* and to propose in the *Item Control*.   
The table contains the types of documents managed by the *Item Control*.   
They are predefined types from the system, and it is not possible to add new ones or delete them. The predefined values are:
> - *Good Reception*;   
> - *Purchase delivery note*;   
> - *Purchase invoice*;   
> - *Production declaration*;   
> - *Phase of Production Order*;   
> - *Subcontractor return*;   
> - *Handling load*.   

In the list, for each document type, it is possible to enter:   
- **Def.**: indicates the proposed document type in the search filters; only one type can be selected, or none.   
- **Item detail**: is a list of predefined values from the system that identify the type of detail to check for the *ITEM* for the specific document type. The predefined values are:   
>- *None* - the considered *ITEM* row will not take any detail data;   
>- *Batch* - the considered *ITEM* row will take as maximum detail the *Batch*;   
>- *S.N.* - the considered *ITEM* row will take as maximum detail the *Serial number*;   
>- *UDC* - the considered *ITEM* row will take as maximum detail the *Loading Units*;   
>
- **Mult.**: indicates whether to enable *Measurement values* in the *Item Control* for the specific document type.   
> To be considered, the general parameter *Enable multiple value detection* must be indicated.   
- **Item Control Type**: *Item Control Type* to propose when entering an *Item Control* for the specific document type.   
- **Control plan type**: during the *Importing Items to Check*, excluding the production document types (*Production declaration* and *Phase of Production Order*), it is the *Control plan type* that has a higher priority for searching the *Control plan* to associate with the *Item Control*.   
- **Description Item Control Type**: is the description of the *Item Control Type*.   
- **Control plan type description**: is the description of the *Control plan type*.   

### Item Control Row Colors   

In this list, it is possible to define various colors to recognize the different states of an *Item Control*.   
These colors are applied in the *Item Control Filters*. The list consists of the following information:   
- **Type**: is the state of the *Item Control* to which the colorings will be associated.   
> The table contains predefined values from the system, and it is not possible to add new ones, delete them, or modify them. The predefined values are:
> - *Items not subjects to control*;   
> - *Controls without a Control Plan*;   
> - *ItemControl with multiple TestMethods*;   
> - *Controls not detected*;   
> - *Controls with unsatisfied result*;   
> - *Controls not detected*;   
> - *Controls not detected*;   
> - *Controls already validated*.   
>
- **Background**: is the color applied to the background of the *Item Control row* of the specific state.   
- **Text**: is the color applied to the text of the *Item Control row* of the specific state.   

### Data Customization for Document Type       

In this list, it is possible to add *Properties* of the source document type in the data log of the *Item Control*.   
The table contains the same document types reported in **Document Types for Import**.   
They are predefined types from the system, and it is not possible to add new ones or delete them.   
There are 5 pieces of information for each data type: *Text*, *Yes/No*, *Int*, *Decimal*, *Date*.   
By double-clicking on the cell, it is possible to select the desired *Properties* of the document.   

:::tip *Example:*   
for the document type *Purchase invoice*, it is possible to add the value of the *Properties* *Your reference*.   
By double-clicking on the *Text 01* column, the Help for the row properties of the *Purchase invoice* document will be executed.   
Expand the *Invoice* reference, select the *Your reference* property, and click the *Select* button.   
The property *YourReference* will appear in the cell where the selection was made.
:::

### Customization of Column Headers for Document Type     

In this list, it is possible to indicate the *Property Title*, corresponding to the selected *Properties* from the list **Data Customization for Document Type** that will appear in the data log of the *Item Control*.   
The table contains the same document types reported in **Document Types for Import**.   
They are predefined types from the system, and it is not possible to add new ones or delete them.   
There are 5 pieces of information for each data type: *Text*, *Yes/No*, *Int*, *Decimal*, *Date*.   
By double-clicking on the cell, it is possible to select the desired *Dictionary entry* to be reported as a header.   

:::tip *Example:*   
for the document type *Purchase invoice*, it is possible to indicate the header corresponding to the previous example for the value of the *Properties* *Your reference*.   
By double-clicking on the *Text 01* column or by manually entering the *Dictionary entry*, input *Your reference*.   
:::

For anything not detailed in this document regarding the common operation of the forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).