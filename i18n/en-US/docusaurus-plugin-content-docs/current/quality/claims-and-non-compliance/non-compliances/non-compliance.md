---
title: Non-compliance
sidebar_position: 2
---

The data that make up a **Non-compliance** are:     
- **Type of Non-compliance**: contains the type; this selection will determine the possibility of entering a customer, a supplier, or a business function depending on the type;               
- **Year**, **Number**, and **Date**.

Let’s analyze the underlying tabs.

## Header  
**Responsible person**: contains the [Employee](/docs/project-management/registers/employee/new-employee) responsible;      
**Business function**: contains any responsible Business function;       
**Production site**: contains the company production site where the non-compliance occurred;      
**Approved/on date**: contains the references of who approved the non-compliance;
**Closed/on date**: contains the references of who closed the non-compliance and any **Notifications** made.        

Non-compliance can only be Approved and Closed by:
- Responsible person: in this field, it is possible to enter the coded Employee, who must have an associated Arm user;
- Responsible function: it is possible to enable an entire business function to modify; in this case, one must select Open form in the business function and enter, in the grid below, the Employees to be enabled for each selected business function.

There are also several tabs.

## Document ref.
Contains the references of the documents related to the goods that proved to be non compliant, so the invoice with which it was sold, the goods receipt, the complaint from which it originated, etc. The fields are not editable but are populated automatically if the non-compliance originates from other documents.

## Annotations      
This tab contains free Notes, whether commercial, technical, or administrative.

## Values    
This tab contains:    
**Currency**: with which to specify the values of the Non-compliance;      
**Ref. Doc. Debit**: contains the documents received for which a charge for non-compliance is requested;       
**Management cost**: automatic if decided in the Parameters, otherwise it must be entered manually; this cost is the internal management cost incurred for handling the Non-compliance; it will be charged to: my company if responsible for the supply; to the supplier otherwise responsible for the supply;       
**Value to be charged**: this is the amount we recognize and want to charge; the debit note generated will reference the field **Ref. Doc. Accreditation** and will mark the flag **Valorized**; this amount may be different from the **Total non-compliance** if it is decided not to charge the total amount to any supplier;     
**Total non-compliance**: it is the sum of Total non-reworked material, Total reworked material, and Management cost.             

## Defects Management 
It is possible to indicate one or more defects found, with the related data:     
- **Defect detected**: contains the Defect with related **Code** and **Description** and any **Notes**;     
- **Alleged cause**, which caused the defect;    
- **Detecting step**, with the details of the phase in which the defect was detected;   
- **Severity**: contains the possible Severity of the defect;    
- **Ref. Corrective Action**: contains the references of the corrective action if created.   

This tab is divided into further tabs.        

## Defective Data      
The main data are:      
- **Effective cause**: it is possible that the presumed cause of the defect, entered in the grid, does not coincide with the effective cause, which can be entered in this field;      
- **Proposed solution**: contains the solution that has been proposed to solve the defect, from a dropdown list;     
- **Decision taken**: contains the solution that has been undertaken from the possible proposals;
- etc.     
It is possible to specify various fields with the **Notes** next to them.     

## Materials Used 
This tab contains materials possibly used to remedy the defect. The materials data are accompanied by their respective costs.

## Defective objects (Oggetti difettosi)
Contains all the items in which the defect from the main grid was detected. The data entered in this tab will populate the **Values** of the header.

## Subjects involved
In this tab, it is possible to indicate the business functions involved and/or the [Employees](/docs/project-management/registers/employee/new-employee).     
In the **Involvement management** section, it is possible to indicate the Reason for involvement, an automatic field if we previously entered one in the business functions table.    

The specific buttons on the ribbon bar are:
**Create corrective action**: upon selecting a defect, it is possible to create a Corrective Action. A mask opens where a series of data are requested to be reported in the Action.