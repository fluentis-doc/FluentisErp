---
title: New Activity by Project 
sidebar_position: 1
---

The data is as follows:

**Activity type**: contains the [Activity Type](/docs/configurations/tables/project-management/activity-type/);

**Activity Date/Activity Number**: contains the date and number of the activity; the oldest missing date based on the months to be verified set in the project parameters will be proposed automatically. If the date falls on a configured non-working day in the Calendar, it will not be proposed.

**Asset**: contains the resource performing the activity;

**Manual Date/Time**: contains the date of entry and the flag, if active, enables the **Total time** field so that it is not calculated automatically but can be modified manually by the user;

**Client**: contains the client for whom the activity is performed;

**Statistic account**: it is possible to enter an account to be used for statistics;

**Project**: contains the [Project](/docs/project-management/projects/search-projects-intro/) linked;

Opening the Project expander, it is possible to set an **ITEM**: this item code will be used if the activity is billable and thus converted into an intervention. If a specific article code is not indicated, the service in the intervention will have the item code, UM, and price taken from the linked project. 
If a specific article is indicated: 
- if the item UM and the linked project UM match, and the project UM is of type "Time," the intervention will have the item code indicated in the activity, with price and UM taken from the project. 
- if the item UM and the linked project UM do NOT match or the project UM is not of type "Time," the intervention will have the item code indicated in the activity, with price and UM allocated based on standard document logic (as in the case of inserting a new line in a document, pricing, discounts, default price in item registry, etc.)

**Start Time/End Time**: contains the start and end time of the activity; it is proposed based on the resource's shift, and if there are already other declarations, only the missing time slot for the day will be proposed. 
<u>Unequal dates are not allowed</u> between the various Start-End, Start-End break, and Activity Date fields; therefore, when modifying any date of these, the other fields will automatically align. 
If the End Time is modified to be before the break starts, the break will be automatically deleted.

**Break Start Time/Break End Time**: contains the break times;

**Overlapped activity**: flag that automatically activates if it detects the presence of other activities for the resource on the same day or time slot.

**Overlap minutes**: it is possible for the user to manually indicate the actual time during which the activities overlap.

**Remote Working activity**: flag that automatically activates based on the configurations related to Smart Working in the resource registry. It will then be used in the payroll processing to identify the days on which Smart Working was performed. In the appropriate dashboards, it will be possible to verify the presence of days with hybrid activity declarations for the same day. 

**Origin Cost Center**: cost center proposed by the employee registry associated with the resource. 

**Cost center**: cost center proposed by the activity category.

**Tickets**: ticket associated with the activity; if the client and project fields are not filled in the activity declaration, they will be automatically filled from the associated ticket.

**Technical Estimation**: if the ticket has a technical estimate that corresponds to the client and the resource, it will be proposed automatically. If the client and project fields are not filled in the activity declaration, they will be automatically filled from the associated ticket/technical estimate. 

**Plant**: equipment registry of the EAM area, associated with the activity. 

**Company / Department Intercompany**: indicates the company and division of belonging if different from the input company. 

**Intervention**: contains the eventual [Intervention](/docs/project-management/service-activities/search-intervention/) linked manually or generated automatically upon saving the activity or generated by the guided procedure; in the activity type, it is possible to set the type of intervention to be used. 
![](/img/it-it/project-management/projects/declaration.png)

**Activity status**: contains the status among Inserted, Verified, Suspended, Closed.

**Total time**: contains the count in hours of the activity declaration, calculated based on the declared times. If the "Manual Time" flag is enabled, the field will be editable by the user. 

**Estimated work percentage**: it is possible to indicate a value from 0 to 100 to be entered in the eventual service of the intervention generated from the activity.

**Invoicing criteria**

**Activity category**: automatically proposed from the project if present, or entered by the user. The cost center and the "Invoiceable Activity" flag depend on the activity category.

**Intercompany Activity**: flag that identifies the activity managed as intercompany. 

**Invoiced activity**: flag that indicates whether the activity is linked to the intervention, and therefore invoiced. 

**Invoiceable activity**: flag that indicates whether the activity can be converted into an intervention, and therefore invoiced. This flag is set depending on the activity category or by the user. 

**Force invoiced activity**: flag that indicates whether the activity can be considered invoiced even if it is not actually invoiced, so that the associated intervention is not generated. 

**Value added activity**: flag that identifies value-added activities for statistical purposes. Valued based on the project; if not present, based on the configuration of the activity category. It can be manually modified by the user. 

Subsequently, there are various tabs.


**Description Tab**
In this tab, it is possible to describe the activity in the **Task description** field, which will be used as the Activity Description in generated interventions (if generated). There is also an **Internal description** that will not be propagated in any other document. 
If the activity is linked to an intervention and changes are made to the times and/or description, the intervention will also be automatically updated. 

**Travel Costs Tab**
This tab contains any travel costs incurred by the resource. 
During manual entry of the activity declaration, costs will be automatically proposed by selecting the resource, if configured in the registry. 
If the activity declaration was generated automatically from the intervention, the Travel costs tab will only contain what was declared by the resource as costs incurred in the intervention. If the costs tab in the intervention is completely empty, the configured costs in the resource registry will still be proposed in the activity. 

Upon saving, if the proposed costs have not been completed with values and amounts, they will be automatically deleted. 

It is possible to indicate the **Charge type**, and based on its configuration, other fields such as **Travel hours**, **Hourly cost**, **KM**, **Km cost**, **Lump-sum amount**, **VAT**, **VAT included**, **Charge amount**, **Date**, **Payment type**, etc., will be enabled for modification.

**Full Costing** is calculated automatically in the case of "hourly cost" or "cost per KM," multiplied by the respective "travel hours" and "KM". 

**To Refund**: if enabled, in the payroll processing, the amount will be considered as to be reimbursed; otherwise, it will be excluded from the payroll. 

**On invoice**: indicates whether the cost should be included as an cost "To be invoiced" in the intervention if generated. 

**Notes**: any notes entered by the user.

**Contact Activity Tab**
In this tab, it is possible to link the activity declaration to a contact from the CRM area, to a CRM Opportunity, and to a Marketing Campaign. 

**Attached Documents Tab**
In this tab, you can view and add attachments, which will be saved in the Document module of Fluentis. To add a file, simply use drag and drop, that is, selecting the file from the current path and dropping it into the table.

**Extra Data Tab** 
In this tab, it is possible to enter any linked Extra Data; for more information, refer to the section [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).