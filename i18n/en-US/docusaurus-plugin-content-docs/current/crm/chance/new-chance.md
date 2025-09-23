---
title: New opportunity
sidebar_position: 3
---

In this form, all general information related to the **Opportunity** that you want to enter will be included. The Opportunity screen is composed of three parts:

- the first part at the top shows any associated workflows; each user can create their own workflow based on corporate CRM needs; refer to the related guide on Workflows for more details;    
- the central part presents the Header of the Opportunity, with general and demographic information, some of which are mandatory and others not;    
- below, there are various tabs that report the different operations carried out and will be addressed later in this guide.    


## Opportunity Management 

*Specific buttons* in the ribbon bar:  
> **Save**: button to save the Opportunity and its related modifications;    
> **Calculate values**: button to recalculate the values of the opportunity based on the offer to which the opportunity is linked.  

### Header    

**Opportunity Type**: used to define the [Opportunity Type](/docs/configurations/tables/crm/opportunities/opportunity-type) being entered. On the opportunity type, it is also possible to indicate a default pipeline flux;

**Number**: a value automatically assigned by Fluentis that allows for a unique identification of the opportunity;

**Title**: this field, which is mandatory, allows defining a title for the opportunity so that it can be recognized more easily;

**Creation date**: this date indicates when the opportunity was entered into Fluentis;

**Closed date**: this field allows you to indicate a closing date for the opportunity and can serve as a filter in the opportunity search mask;

**Contact**: this field is used to specify the Contact to whom the opportunity is assigned. It refers to the [contacts register](/docs/crm/home-crm/contacts/new-contact) of the CRM;

**Main Agent**: this data is retrieved automatically based on what is indicated in the CRM contact registry for the owner of the opportunity;    

**Currency**: indicates the currency in which the values of the opportunity should be expressed;

**Time Elapsed from Last Activity**: indicates the time elapsed from the last activity was recorded for the opportunity in question;

**Probability progress**: used to indicate a % of [probability](/docs/configurations/tables/crm/opportunities/probability-progress) of success related to the opportunity;

**Contact quality**: used to indicate the [quality](/docs/configurations/tables/crm/contacts/contact-quality) of the contact assigned to the opportunity;

**Won/Lost**: used to indicate whether the opportunity has been won or lost;

**Reasons**: in this field, you can select the [reasons](/docs/configurations/tables/crm/opportunities/closing-reason) for the winning or losing of the opportunity;

**Description**: used to further detail the reasons that led to the winning or losing of the opportunity;

**Net amount**: this field reports the total value of the opportunity net of discounts; this field is automatically filled in by completing the underlying *Detail* tab;     

**Gross amount**: this field reports the total value of the opportunity including discounts; this field is automatically filled in by completing the underlying *Detail* tab;     

**Discounts**: this field reports the total discounts of the opportunity; this field is automatically filled in by completing the underlying *Detail* tab;     

**Earnings Before Interest and Taxes**: in this manually filled field, the user must indicate the expected gross margin for the opportunity;

**Expected Sales Order Date**: in this field, you can indicate an expected date for the issuance of the first order related to the opportunity;

**Expected Sales Invoices Date**: in this field, you can indicate an expected date for the issuance of the first invoice related to the opportunity.

In the third and final section of Opportunity Management, there are 4 tabs:

### Workflow Logs 

In this tab, the activities related to the workflow associated with this Opportunity are displayed. This tab appears if a workflow is associated with this object.        

### Detail 

In this tab, the economic detail of the offer is shown. For each detail line, the following can be specified:  
**Family Product**: refers to the Product Family table;  
**Description**: the description of the previously selected Product Family;  
**Gross amount**: allows indicating the amount of the opportunity, for the previously indicated product family, net of discounts;  
**Discount**: allows indicating the discount amount applied for the previously indicated product family;  
**Net amount**: calculated as the difference between the **Gross amount** and **Discount** fields;  
**Expected revenue**: allows indicating what will be the actual forecast value of the opportunity line;  
**Expected sales invoice date**: corresponds to the date on which it is expected to invoice the opportunity in question;  
**Expected sales delivery date**: corresponds to the date on which it is expected to bill the opportunity in question;  
**Expected Sales Order Date**: corresponds to the date on which it is expected to issue the order for the opportunity in question;  
**Closed date**: the date on which the line in question was closed;  
**Note**: in this field, it is possible to indicate any notes related to the line in question.

### Sales Offers

In this tab, the offers linked to the opportunity are displayed. By double-clicking on the offer line, you access the view/edit mode of the offer itself.  
**Note**: in this field, you can provide additional notes.

### Related Documents  
In this tab, you can view the files attached to the opportunity or proceed to attach new files using the drag and drop procedure.