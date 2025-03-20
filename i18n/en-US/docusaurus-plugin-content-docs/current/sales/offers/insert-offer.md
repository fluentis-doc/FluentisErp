---
title: New Customer Offer 
sidebar_position: 3
---

The **New Offer** form opens through the path **Sales > New Offer** or via the **New** button located in the [Offer Search](/docs/sales/offers/search-offers) form.

## *How to create a customer offer*

<details>
 
<summary>Click for the essential steps - TO CHECK</summary>
 
1. **Enter mandatory data**: *Order Type* and *Customer*. *Year*, *Number*, and *Entry Date* will be proposed automatically.  
 
2. **Enter or modify optional header data**: such as delivery dates, any *discounts*, the *destination*, etc.  
 
3. **Enter Articles**: by double-clicking in the *Item Code* field, the item help appears, allowing you to search and select an existing item. All other line data, such as *unit of measure*, *quantity*, *price*, will be proposed automatically, but can be modified. Alternatively, you can select *Uncoded Article* as *Line Type* and manually enter the subsequent data.
 
4. **Enter any discounts or additional information** in the *Discounts/Price Lists* and *Item Data* tabs.
 
5. **Check the Summary section** and enter any additional expenses or final discounts.  
 
6. Once the order has been checked and confirmed, **enter a *Confirmation Date* and activate the *Printed* flag in the header** to make the order available for fulfillment procedures.
 
</details>

## **1. Mandatory Data**    

- **Sales offer type**: contains the type of offer, among those entered in the [Offer Types](/docs/configurations/tables/sales/sales-offer-type).

- **Number**: each document is assigned a number according to the numbering specified by the user in the [Offer Numbering](/docs/configurations/tables/fluentis-numerations) table and based on the document type that contains the numbering.     

- **Client**: entering the customer is possible using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or by [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) entering the characters.

- **Crm Contact**: if the Offer is for a lead that is not yet a customer, a CRM Contact can be entered instead of a customer.    

- **Year**: the current year is proposed.  

- **Date**: today's date is proposed.     

- **Version**: this field indicates the Version number of the offer; if new, the proposed Version will be the first.    

#### Non-mandatory data:

- **Contact Opportunity**: if the created offer type has an associated Opportunity Type in the [Offer Types](/docs/configurations/tables/sales/sales-offer-type) table, an Opportunity for the customer/contact will be automatically created upon saving the Offer, which will be reported in this field and become editable by the user. If a pre-existing Opportunity is manually entered in this field, it is updated.           

## **2. Header**

After entering data in the upper section, you can proceed with header data:      

- **Currency**: the Currency of the customer is proposed.

- **Delivery**: the mode of [Shipping](/docs/configurations/tables/general-settings/shipments) from the customer profile is proposed.      

- **Sales price list**: the default price list present in the customer profile is proposed, along with the relevant Scale Type provided for the customer.     

- **Customer Annotations**: in this section, you can enter Customer References, any Initial/Final Notes; the *Customer Annotations* field reports the Notes entered in the [Customer Profile Data](/docs/erp-home/registers/contacts/create-new-contact/general).     

- **Confirmation date estimation**: indicates the date on which the offer was confirmed and can therefore be converted into an order.     

- **Estimated delivery date**: this is the date on which the goods are expected to be delivered; this data is reported in the order created from the offer.     

- **Closing date**: indicates the date on which the offer was closed.

- **Canceled date**: the date on which the Offer will be considered null if it has not become an Order.

- **Offer validity**: deadline for the validity of the offer; this is an informational field.

#### Specific buttons    

> **New version**: generates a new version of the offer, incrementing the *Version* field. Subsequent versions of an Offer inherit the attached Documents.       

> **Replace expected delivery date in lines**: replaces the Expected Delivery Date entered in the header in all article lines.       

> **Conversion**: allows you to transform a sales offer into an actual sales order. For the process to occur correctly, it is essential to configure the desired Order Type in the [Offer Types](/docs/configurations/tables/sales/sales-offer-type) table. Additionally, for the offer to be successfully converted, it must have a Confirmation Date in the header; otherwise, the system will alert the user via a pop-up message indicating the need to confirm the offer before proceeding. Once all required data has been entered, a pop-up will appear with the following fields:     
> - if some lines of the offer have already been converted into an order, the user will be asked if they want to create a new order using all offer lines or only those lines not yet referenced.             
> - **Create/Update Project**: with this flag, we instruct the system that in addition to creating the order, it should also proceed with the creation or updating of the project. If the project needs to be created, it is necessary to tick the command *Create New Empty Project*, *Create New Project from Offer*, or **Create New Project from Offer and Project Template**; in all cases, it will be necessary to enter the **[Project Type](/docs/configurations/tables/project-management/project-type)** to be created in the appropriate field; in the latter case, the **Template Project** will also need to be entered. If the project already exists and needs to be updated with the data entered in the offer, the **Project** field must be filled with the project to be updated.     
> - **Report Materials/Resources from Offer lines as Order lines**: with these flags, items with the resources and materials from the offer are included in the order, if hierarchical.              
Once the pop-up is confirmed, the system will then generate a new customer order using the data from the offer. This order can be viewed and modified in the [Customer Order Search](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders) section. Additionally, the user will be informed via a pop-up message regarding the success of the conversion, the number of the converted offer and its version, along with a message containing the number of the customer order generated from the conversion.        
If the Offer data proposed by the profile are modified, they will be transferred to the Order generated from the conversion: Customer Annotations, Shipping, Payments, Discounts, Agents, Destinations, Carriers.      

The following tabs are populated with fields taken from the customer/contact profile, which can be modified:  
- **Payments**
- **Discounts**
- **Recipients**
- **Carriers**
- **Agents**
- **Extra Data**
- **Email Information**

## **3.a Offer Articles**

Articles are entered in the main grid.    

The following tabs are then present:       
- **Discounts**: this tab reports the Price List, if present, from which to take the price for the selected article; it also reports discounts, from the price list or profile, and allows entering new discounts; finally, there is a *Manual price* flag, which indicates retaining prices entered manually (this flag is carried over when converting the offer into an order).     
- **Agents**: this tab lists the customer’s Agents with their respective commissions.      
- **Item data**: several data regarding the item are present, such as any Variants, Warehouse, Alternative unit of measure.    
- **Extra Data**
- **Attached Documents**        

#### Specific buttons

- **Create new prototype**: this button creates a [Prototype](/docs/erp-home/registers/production/standardization/new-prototype) for the selected article line; the reference to the generated estimate is recorded in the Item Data tab, in the Estimate field. The generated prototype can be modified from the relevant module.
- **Associate prototype**: with this button, it is possible to associate the offer with an existing [Prototype](/docs/erp-home/registers/production/standardization/new-prototype); help will open allowing you to choose from the prototypes available for that article.
- **Open prototype**: this button is enabled if the selected article line has an associated Prototype, and allows you to open it.     
- **Import from Projects**: this function opens the *Project Article* help, where it is possible to select items coming from a project to be included in the sales offer. The pop-up opens directly with a filter on the customer named in the offer, to allow visualizing their respective projects.    

## **3.b Hierarchical Offer Articles**

If the Offer is of *hierarchical type*, the Articles tab will be different.      

Articles are entered in the main grid using the toolbar buttons, allowing you to create a tree structure. The characteristics of the articles must be specified in the *Activities* tab.    

Let’s now list the special tabs of a hierarchical offer.        

### 3.b.1 Activities 

In this tab, it is necessary to enter the characteristics of the articles in the articles grid. The fields present are:     
- **Line number/Level**: contains the line and WBS numbers and is automatically set, although it can be freely modified.          
- **Projects Node Type**: indicates whether the line is a **Root Node**, an **Activity Node**, or a **Work Package Node** (the final project node, the only one that can contain coded item numbers).       
- **Line type**: indicates the type of article among Coded, Uncoded, Expenses, or Notes (the latter by default).            
- **Item code**: this section reports Class, Code, and Description of the possibly selected coded article.             
- **Variant code**: reports a possible [Variant](/docs/erp-home/registers/items/create-new-items/item-registry/variants) of the article.       
- **Item description**: this section reports the Description of the article, if of type Note or Uncoded.    
- **Prototype**: contains any linked [Prototype](/docs/erp-home/registers/production/standardization/new-prototype).          
- **Quantity/UM/Price**: contains quantity, unit of measure, and price of the selected item.        
- **Alternative quantity**: contains any alternative quantity, with the Alternative Unit of Measure next to it.     
- **Price MU**: if entered, this flag indicates to multiply the unit price by the alternative quantity to obtain the amount.   
- **Price list**: it is possible to associate a price list from which to obtain the price of the article, along with the **Scale Type** to be applied for the discount.     
- **Manual price**: this flag indicates that a price has been manually entered, and therefore, the list price should not be considered.          
- **Update price from resources**: this flag, if set, changes the *Price* field by entering the same amount as the *Revenue* column in the *Resources* tab; it can be used, for example, when the line amount depends entirely on the time spent by Resources.        
- **Update price from materials**: this flag, if set, changes the *Price* field by entering the same amount as the *Revenue* column in the *Materials* tab; it can be used, for example, when the line amount depends entirely on the Materials used.       
- **Update price from item prototype**: this flag, if set, changes the *Price* field by entering the same amount as the *Sales Price* column of the associated prototype.     
- **Exclude Resources in Sales Order**: this flag ensures that the Resources of the selected article line are not included in the customer order created from the conversion of the offer.     
- **Exclude Materials in Sales Order**: this flag ensures that the Materials of the selected article line are not included in the customer order created from the conversion of the offer.     
- **Discounts**: this grid displays the discounts provided for the customer and allows adding others.     
- **Material revenues/Resources revenues**: these fields display the *Revenue* columns from the Resources and Materials tabs; this way, it is possible to directly see the impact of amounts on the total Price from this tab.     
- **VAT**: indicates the VAT to be applied.             
- **Sales Turnover**: indicates the [Sales turnover](/docs/configurations/tables/sales/sales-turnover) of the article.                
- **Expected delivery date/Expected delivery period**: in these fields, expected date/period for delivering the selected article can be entered.    

### 3.b.2 Resources

In this tab, it is possible to indicate the Revenues obtained from various Resources. The fields present are: 
- **Asset**: requires the entry of a [Resource](/docs/project-management/registers/employee/new-employee) that has performed the activity.     
- **Units of Measure**: contains the unit of measure to use for the Resource; the default one from the resource profile is proposed, but it can be changed.      
- **Quantity/Unit Cost/Total Cost**: the Total Cost is automatically calculated by multiplying the entered Quantity by the Unit Price.      
- **Percentage/Value**: in these fields, any markup to be applied to the Total Cost can be entered, either as a percentage or as a value.     
- **Revenue**: in this column, the Total Cost with markup will be automatically calculated.        
- **Note**: in this field, free notes can be entered.       
- **Full time equivalent**: in this field, it is possible to input how many days/hours of the resource correspond to the company hours (for example, if a resource works part-time for 4 hours, 1 day of this resource should correspond to 0.5 company days).     

### 3.b.3 Materials

In this tab, it is possible to indicate the Revenues obtained from the use of Materials.      
In the first columns of the grid, a Coded Item, Uncoded, or Notes can be entered, along with its possible Variant and VAT. The subsequent columns are:     
- **Quantity/Unit Cost/Total Cost**: the Total Cost is automatically calculated by multiplying the entered Quantity by the Unit Cost.      
- **Origin type cost**: it is possible to select the origin from which to populate the *Unit Cost* column among: Last cost, Average cost, Standard cost, Net supplier price list, Supplier order, or Purchase invoice; this field is configurable by default in the [Offer Parameters](/docs/configurations/parameters/sales/offer-parameters).    
- **Percentage/Value**: in these fields, any markup to be applied to the Total Cost can be entered, either as a percentage or value.     
- **Revenue**: in this column, the Total Cost with markup will be automatically calculated.        
- **Vendor description**: the preferred Supplier entered in the item profile is proposed, but it can be modified; if the supplier price list is selected in the *Cost origin type* column, the list considered will be the valid one for this supplier; additionally, this supplier will be the addressee of the **Request for Quotation** generated from the material line.           
- **Request number/date**: contains the eventual **Request for Quotation** created for the Material; in fact, when in the *Materials* tab, the *Create Request for Quotation* button appears in the toolbar, which will generate the RFQ for the selected material.    
- **Note**: in this field, free notes can be entered.   

Other tabs present are similar to those of the non-hierarchical offer.     

#### Specific buttons

> **Create new prototype**: this button creates a [Prototype](/docs/erp-home/registers/production/standardization/new-prototype) for the selected article line; the reference to the generated estimate is recorded in the Item Data tab, in the Estimate field. The generated prototype can be modified from the relevant module.      
> **Associate prototype**: with this button, it is possible to associate the offer with an existing [Prototype](/docs/erp-home/registers/production/standardization/new-prototype); help will open allowing you to choose from the prototypes available for that article.       
> **Open prototype**: this button is enabled if the selected article line has an associated Prototype, and allows you to open it.       
> **Import from Projects**: this function opens the Project Article help, where it is possible to select items coming from a project that we want to insert into the sales offer. The pop-up opens directly with a filter on the client named in the offer, to allow visualizing its respective projects.     
> **New Child**: allows inserting a project line as a child of the selected line.        
> **New Brother**: allows inserting a project line at the same level as the selected line.       
> **Replace WBS number**: allows incorporating the project Number into the WBS numbers of the lines.       
> **Collapse**: allows hiding the tree lines.       
> **Expand**: allows viewing the tree lines.

## **4. Offer Summaries**

In this tab, summaries can be entered and are valid for the entire document:

### 4.1 Final discounts for articles

import SummariesFinalDiscount from './../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount /> 

### 4.2 Final expenses/discounts/increases 

import SummariesExpenses from './../../import/sections/summaries-expenses.md'

<SummariesExpenses />