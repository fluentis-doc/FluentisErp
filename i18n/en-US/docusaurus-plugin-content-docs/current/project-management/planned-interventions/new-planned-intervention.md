---
title: New Planned Intervention (Nuovo Intervento Pianificato)
sidebar_position: 1
---

In this form, it is possible to enter a new **Planned intervention**. The data to be entered are:

**Planned type**: contains the type of intervention, which can be coded in the [Planned Type Table](/docs/configurations/tables/project-management/planned-type/);

**Number/Date**: contains the number and the date of the planned intervention;

**Client**: contains the customer to whom the intervention is intended;

**Contact**: contains the optional *Contact* to whom the intervention is directed;

**Activity category**: contains the category of activity;

**Project**: contains the [Project](/docs/project-management/projects/search-projects-intro/) linked to the intervention;

**Tickets/Ticket Severity (Tickets/Severità Ticket)**: contains a relevant reference ticket with the associated severity;

**SLA**: is the Service Level Agreement;

**State**: contains the status of the intervention, between Planned, Confirmed, Closed, or Canceled;

**Confirmation date**: contains the confirmation date of the intervention.

There are also several tabs in which to enter additional information about the planned intervention.

**Resources Tab (Tab Risorse)**  
In this tab, it is possible to enter the **Asset** that will carry out the planned intervention. The data to be entered are:  
**Asset**: contains the Resource;  
**Employee**: contains the associated Employee record,  
**From planned date**: contains the date and time of the start of the intervention;  
**Start pause**: contains the time the break starts;  
**Break end time**: contains the time the break ends;  
**To planned date**: contains the date and time of the end of the intervention,  
**Effective time**: contains the necessary time, calculated based on the previous fields;  
**Description**: is a mandatory field in which to describe the intervention and any notes for the resource.  
There are also some flags that regulate the obligation of the **Technician**, the **Date**, and indicate whether the activity is billable.

![](/img/it-it/project-management/planned-intervention/resource.png)

**Solution Tab (Tab Soluzione)**  
In this tab, there are two freely fillable areas: **Terms** and **Note**.

**Estimate Tab (Tab Stima)**  
In this tab, it is possible to enter an estimate for the planned intervention through the following data:  
**Units of Measure**: contains the UM to be used to quantify the intervention;  
**Sales price list**: it is possible to link a [Sales Price List](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) from which to take the information;  
**Quantity**: it is possible to directly fill in the actual time in this tab, which will appear in the corresponding field in the Resources tab;  
**Net unit price**: contains the unit price based on the UM;  
**Total amount**: a calculated field based on the previously entered data;  
**Currency**: indicates the currency to be used.

When selecting the project, the following values are proposed: 

- Sales Price List  
- Ticket  
- Description  
- Activity Category  
- Billable  
- Value-Added Activity  
- Item (if not already entered)  
- Unit of Measure if not already entered  
- Net Unit Price  

The net unit price is updated with the value present in the project if the item is already present in the planned intervention and matches the item in the project.  
Alternatively, if the item is not present in the planned intervention and is assigned from the project, then the price will also be updated with the value present in the project.

![](/img/it-it/project-management/planned-intervention/stima.png)

**Connected Document Tab (Tab Documento collegato)**  
In this tab, it is possible to view and add attachments, which will be saved in the Document Management module of Fluentis. To add a file, simply use drag and drop, selecting the file from its current location and dropping it into the table.  
The following form will then open:

![](/img/it-it/project-management/planned-intervention/document.png)

In the **Document type** field at the top of the form, it is possible to select the type of document being uploaded from those available.  
Then, by pressing the **Apply** button, this value will be reflected in the corresponding field for all the files currently being uploaded. **First Name** and **Type** are automatically retrieved by the procedure.  
By pressing OK, the program will save the file in the Document Management system of Fluentis.

**Extra Data Tab (Tab Extra Data)**  
In this tab, it is possible to enter any connected Extra Data; for more information, consult the section on [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata/).