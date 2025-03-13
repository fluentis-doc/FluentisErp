---
title: Workflow Log (Workflow Log)
sidebar_position: 2
---

This is the first tab of the **CRM contacts** panel. This tab appears only if a workflow has been activated for CRM Contacts that requires displaying the log tab. For technical details, please refer to the documentation on workflows.     
Using a workflow for managing Contacts allows for managing the relationship with potential clients in stages. The various stages of the workflow can include different activities aimed at winning the client, which will depend on the type of relationship reached at that particular stage: for example, in the Qualification stage, it will be important to make an introductory call, while in the Opportunity stage it may not be necessary because the client already knows us and is evaluating the purchase.       

There are two tabs: Activities and Log.

## Activities (Attività)

The available fields in the activities detail are divided into 2 boxes, **Task** and **Pending activity**. The first serves to detail the activity already performed, while the second can already define some information regarding the activity that will need to be performed subsequent to the one already entered.

In the first box, the following fields are present:

**Activity type**: you can specify the type of activity performed for the contact; the types are defined in the Activities Types table in Arm; depending on the settings entered in the workflow, the activities may change based on the stage of the workflow you are in;          

**Date**: this field is automatically filled in by the procedure when the **Activity type** field is entered; 

**User**: contains the Fluentis user who has made the entry;    

**Task description**: you can specify the details of the activity in this field.     

In the second box, the following fields are present:

**Pending activity date**: this field is automatically filled in by the procedure when the **Activity type** field is entered;

**Activity type**: you can specify the type of suspended activity for the contact; 

**Task description**: in this field, you can detail the activity that needs to be performed;

**Closing date**: you can set a due date for the activity;

**User**: the Fluentis user who will perform the activity must be defined;

**Reminder Start/End Date (Data inizio/fine promemoria)**: in this field, you can indicate the range of dates during which a reminder for the next activity should be displayed;        

**Create activity**: checking this box will create a new entry in the **Task** section of Fluentis for the user indicated in the **User** field. This automation will trigger at the time of saving the contact.    

## Log (Log)

In this tab, changes in the workflow status are displayed, indicating: the starting and ending status, the operator who made the operation, and the date.