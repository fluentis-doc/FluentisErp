---
title: Complaints 
sidebar_position: 2
---

The data that make up a **Complaint** are:     
**Complaint type**: contains the type; this selection will determine the visible tabs;            
**Customer**: contains the origin of the complaint, which can also be a **Contact**.

Let's analyze the ***Header*** section, common to both possible types of Complaints.         
**Responsible person**: contains the [Employee](/docs/project-management/registers/employee/new-employee) responsible for the complaint;      
**Business function**: contains any responsible Business function;       
**Ref. documents**: contains references to the documents related to the goods that have turned out to be non-compliant, such as the invoice with which it was sold, the receipt of goods, etc.;     
**Approved/On date**: contains references to who approved the Complaint;
**Closed/On date**: contains references to who closed the Complaint and any notifications made.        

Complaints can be Approved and Closed only by:
- Responsible person: in this field, it is possible to enter the coded Employee, who must have an associated Arm user;
- Responsible function: it is possible to enable an entire business function to modify; in this case, one must open the form in the business function and enter, in the grid below, the Employees to be authorized for each selected business function.

Several tabs are also present.

## Notifications
This tab contains the **Reason for the complaint** received and, if applicable, the **Production site** of the company recipient.
If the complaint is not accepted by the company, the **Reason for withdrawal** will be freely fillable beside it. 

## Annotations     
This tab contains free notes, commercial, technical, or administrative.

## Values   
This tab contains:    
**Currency**: to specify the values of the Complaint;      
**Ref. Doc. Debit**: contains the documents received for which a charge for non-compliance is requested;       
**Total complaint**: this field is automatic if the flag **Total automatic recalculation** is set in the Parameters, or it is calculated automatically from the sum of the defect handling; this complaint is the sum that the customer contests to us, and if fully creditable, it will coincide with the Value to be credited;         
**Management cost**: automatic if decided in the Parameters, otherwise chargeable manually; this cost is the internal management cost that I spend for handling the complaint; it will be chargeable to my company if responsible for the supply; to the supplier otherwise responsible for the supply;       
**Value to be credited**: is the value that we recognize and to be credited; the credit note generated will reference the field **Ref. Doc. Accreditation** and will apply the **Valorized** flag; the total to be credited is what we pay to the customer, the management cost is what I pay internally.            

Let's analyze the tab ***Defects Management***, present only if the type of Complaint is **Customer Complaint**.    
It is possible to indicate one or more defects found in the Complaint, with the respective data:     
- **Defect detected**: contains the Defect with its **Code** and **Description** and any **Notes**;     
- **Alleged cause**, which caused the defect;    
- **Detecting step**, with details of the phase in which the defect was detected;    
- **Quantity**: contains the sold, contested, and returned quantity of the goods;     
- **Ref. Corrective action**: contains references to the corrective action if created.   
This tab is divided into additional tabs.        

## Defective Data     
The main data are:      
- **Severity**: contains the eventual Severity of the defect;    
- **Effective cause**: it is possible that the alleged cause of the defect, entered in the grid, does not coincide with the effective cause, which can be entered in this field;      
- **Proposed solution**: contains the solution that has been proposed to resolve the defect, from a dropdown list;     
- **Decision taken**: contains the solution that, among the possible proposals, has been undertaken;
- etc.     
It is possible to specify the various fields with **Notes** next to them.     

## Materials Used 
This tab contains materials that may have been used to remedy the defect. The data of the materials are accompanied by their respective costs.

## Claimed Objects
Contains all the items for which the defect of the main grid was found.

## Subjects Involved 
In this tab, it is possible to indicate the involved Business functions and/or the [Employees](/docs/project-management/registers/employee/new-employee).     
In the **Involvement Management** section, it is possible to indicate the Reason for involvement, which is an automatic field if we have previously entered one in the business functions table.   

Let's analyze the tab ***8D Management***, present only if the type of Complaint is **8D Customer Complaint**.    
This tab is divided into two additional tabs.      

## Claimed Objects    
This tab contains a list of all the materials being contested.     

## 8D Management         
This tab contains the management of the 8D Problem Solving model, which requires the definition of:     
- a **Team**, in which to indicate the Function and/or Employee;     
- **Containment Actions** to avoid the immediate recurrence of the detected defects;     
- an analysis of the **Causes** that allowed the event to occur;     
- the list of **Actions** that will be undertaken and will become Permanent over time to prevent the defect from reappearing;   
- when the **Implemented** flag is checked in the Action, the **Validate Actions** is enabled;    
- any **Phases** to be implemented in light of the activities for corrective actions.    


The specific buttons on the ribbon bar are:
**Create corrective action**: upon selecting a defect, a Corrective Action can be created. A form will open where a series of data are requested to be entered in the Action.     
**Create non-compliance**: upon selecting a defect, it is possible to create a related Non-compliance.