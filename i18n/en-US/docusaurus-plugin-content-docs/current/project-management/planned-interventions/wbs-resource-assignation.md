---
title: WBS Resource Allocation
sidebar_position: 3
---
## WBS Resource Allocation 
The WBS resource allocation functionality allows you to associate resources with project WBS without opening the project and using the calendar directly to view the actual commitments of the resource. It is available for the Fluentis Universal license and can be accessed from the Project Management > WBS Resource Allocation Area.

# Filters 
Upon opening, it will be necessary to select the calendars of the resources you intend to work with, from the **Filters** tab located at the bottom left. Click on search to view all available resources, and drag the relevant ones into the box on the right.

It will then be necessary to indicate the projects on which you want to work, the details of which will be visible in the **Planner for Project** tab located at the bottom next to the filters. The **WBS with residual days to assign** flag will show projects that have a quantity of "Allocated Days" greater than the quantity of "Estimated Days".

**General filters**: 
In this tab, you can select:
- which documents will be displayed in the calendars: Intervention Requests, Planned Interventions, Intervention, Activity Declaration, Resources assigned to Project WBS, Holidays. 
- The option **highlight days of resources that have availability** colors the background of days where not the entire time slot of the resource has been allocated. Available days will be colored in turquoise. 

Each type of document in the calendar can be colored differently to facilitate distinction.

The configuration should be done in the document type tables, e.g.:
intervention type table – for each type of intervention, it is possible to manage a different color.
The same procedure applies for intervention requests, planned interventions, and activity declarations.

Only the appointments of resources allocated to the project cannot have a color choice, which will correspond to the color of the resource's calendar. These appointments can be identified by the abbreviation “PR” (Project Resource) after the time.

In the presence of holiday and leave requests, the background will change to orange. If linked, the activity generated from the holiday request will be shown based on the **Holidays** option in the "Documents" filters.

# Planner for Project
From this view, it will be possible to drag individual WBS elements into the calendar of one or more resources and decide the type of document to create. The complete structure of the project will be displayed, including the row number, WBS number, WBS Description, Start Date, End Date, Assigned Days, Estimated Days, Planned Days, and Executed Days. 
Using the buttons in the Ribbon bar, it is possible to **Expand** and **Collapse** the entire structure.

Select a single lowest-level WBS and drag it to the desired day in the calendar. A window will open where you can indicate the resource (which is automatically proposed based on the calendar in which the appointment is being allocated), the start-end times, and breaks (obtained from the resource's shift), and the document to generate:
- Assign the resource to the WBS project
- Intervention request 
- Planned intervention 
- Intervention 

The appointment can be single or recurring, configured via the dedicated button **Recall date**:
- Daily: every *N.* days or every day
- Weekly: every *N.* weeks and on specific days
- Monthly: specific day of the month, every *N.* months, or the *first/second/third/fourth/last* day every *N.* months
- Yearly: every *N.* years or specific date or the *first/second/third/fourth/last* day of the specific month.

End of recurrence indicates how many appointments will be allocated with the above rule. 
- no end date
- Ends after: *N* recurrences. The value in "Estimated Days" is proposed by default.
- Ends on: *at date* 

Based on the type of document to generate, the following operations will be performed: 
- Resource assignment to the WBS project: a row will be inserted in the “Resources” tab for that WBS of the project
- Intervention request: a row will be inserted in the “Resources” tab for that WBS of the project and the intervention request will automatically be generated
- Planned intervention: a row will be inserted in the “Resources” tab for that WBS of the project and the planned intervention will automatically be generated
- Intervention: a row will be inserted in the “Resources” tab for that WBS of the project, the planned intervention will be generated, and consequently, the actual intervention.

In case of other documents already present for the day, it will ask whether to overlap the appointment.

If there are multiple appointments on the same day and not all can be displayed, an arrow will be shown that will open the detailed view of the day.

The appointments show 3 main pieces of information: 
- start time end – type document description
- client
- project WBS
Hovering the mouse over the appointment will display a tooltip with more details. Double-clicking opens the relevant document.

In the calendar, the drag&drop procedure is also available, so dragging an appointment from one day to another, or from one resource to another, will automatically update them in the respective documents. 
This operation is not allowed for interventions with a status other than inserted, and in billed activities. 

**Planner for Project**: below the project structure, there is an expander with a small calendar dedicated solely to the project, which shows appointments for the project and not for the resource.