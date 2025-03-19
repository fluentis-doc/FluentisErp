---
title: New Intervention Request 
sidebar_position: 2
---

In this form, it is possible to enter the data for the **Intervention Request**:

**Request Intervention Type**: contains the [type of request](/docs/configurations/tables/project-management/request-intervention-type/);

**Number/Date**: contains the number and date of the request;

**Client**: contains the client to whom it is addressed;

**Contact**: contains any *Contact* to whom the request is directed, which may not yet be a client;

**Activity category**: indicates any activity category related to the request;

**Main Asset**: it is possible to link a plant to the request;

**ITEM**: it is possible to link an item; if not indicated, during project selection, the item entered in the project line will be proposed.

**Project**: contains the linked [Project](/docs/project-management/projects/search-projects-intro/);

**Ticket**: contains the ticket for the intervention request, along with the related severity;

**SLA**: contains the level of Service Level Agreement, necessary for priority studies;

**Intervention Request Status**: indicates the current status of the request, among Open, Planned, Released, or Closed;

**Confirmation date**: contains the date when the request is confirmed;

**Closing date**: contains the potential closure date of the request.

In this form, there are also specific tabs.

**Resources Tab**

This tab contains the resource for which the intervention request is made. There are also some tabs indicating the mandatory nature of the Technician and the Date, and a flag that indicates whether the Activity is invoiceable. The other data are:

**Asset**: contains the resource coded in Project Management > Resource Management;

**Employee**: contains the Employee account, usually coinciding with the resource;

**From demand date**: contains the start date and time of the activity;

**Start pause**: contains the date and time of the start of the break;

**Break end time**: contains the date and time of the end of the break;

**To demand date**: contains the end date and time of the activity;

**Effective time**: contains the duration, calculated from the previous data;

**Description**: contains a free description of the request.

It is possible to link additional resources in the **Linked Resources** grid.

**Solution Tab**

In this tab, it is possible to freely describe the intervention request in the **Terms** and **Note** fields.

**Estimation Tab**

In this tab, the estimate of the Project linked to the Intervention Request is present. If there is no linkage, these fields can still be freely modified:

**Units of Measure**: indicates the unit of measure to be considered for quantification;

**Sales price list**: contains a potential [Price List](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) to consider;

**Quantity**: indicates the quantity of units needed;

**Net unit price**: indicates the net unit price;

**Total amount**: indicates the total amount.

During project selection, the following values are proposed:

- Sales Price List 
- Ticket 
- Description 
- Task Category  
- Invoiceable 
- Value Added Activity 
- Item (if not already inserted)
- Unit of Measure if not already inserted
- Net Unit Price 

The net unit price is updated with the value present in the project if the item is already present in the intervention request and matches the item in the project. Or if the item is not present in the intervention request and is assigned from the project, consequently, the price will also be updated with the value present in the project.