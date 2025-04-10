---
title: Patch Notes Version 605 
sidebar_position: 1
---


## Patch 605.1-0013: 09/23/2022

> - FI: automatic account closure: wrong calculations (#TT02397/22)      
> - ARM: fix for workflow attachments      
> - ARM: New Table Validation: The old schema must not be null when the old table name is not empty.      
> - CO: Anomaly in reclassified balance calculations (#TT02427/22)      

## Patch 605.1-0012: 09/15/2022

> - SD: In the duplicate sales invoices, the agent category is now also reported if present (#TT02409/22)      
> - Alignment of CashFlow export to new functionalities      
> - Extradata: Extradati based on data sources with propagation case      
> - FI: Change in Romanian logic for 390      
> - SD: Fixed error when trying to open card items in SalesDeliveryNote (#TT02485/22)      
> - SH: Datasources: removed the "AdvancedClass" property not used by the user interface      
> - CO: automatic account closure: wrong calculations (#TT02397/22)      
> - FI: modified the print of the book of depreciable assets in Fluentis2021 for managing the display of sold/destroyed assets (#TT02000/22)      
> - MPS: Fixed MPS Definition: data filter problem (#TT02502/22)      
> - FI: recalculated VAT and ledgers of the general ledger when the exchange rate of recording is modified (#TT02481/22)      
> - SCM: NIr: Fixed timeout when opening the edit module (#TT02512/22)      
> - CRM: resolved activity creation from suspended activities entered in the Workflow (#TT02480/22)      

## Patch 605.1-0011: 09/09/2022

> - Fixed datetime parser bug in script reference      
> - Fixed Blockly region update bug      
> - SCS: Bug Fixed: Corrected single and multiple selection in serial number help in job order DDT.      
> - SH : company: increased size for SHC_PostalCode to 10 characters and SHC_VATOffice to 50 characters (#TT02238/22)      
> - PM: intervention valuation, managed grouping of invoice plan lines in the invoice also based on the "taxed price" flag in the invoice. (#TT02309/22)      
> - FI: automatic account closure (#TT02397/22)      
> - Increased '2xTap' times and added fixes for the 'Xamarin' scheduler      
> - FI: adjustments: resolved outgoing exception when trying to control adjustment calculation (#TT02401/22)      
> - FI: resolved anomaly in accounting compensation with negative values, with flag disabled for sign reversal for values less than zero. (#TT02356/22)      
> - CO: review of project hours recovery management to convert according to UM settings (#TT02157/22)      
> - FI: Declarations 300 and 3xx: changes for RO logic (#TT02431/22)      
> - Fixed the creation of DDT from Picking in some cases (#TT02416/22)      
> - FI, SCM: Error in assignment of electronic purchase invoices to records (#TT02350/22)      
> - FI, SCM: XML purchase linkage to accounting records (#TT01403/22)      
> - SCM: Rounding problem in general ledger registration in accounting of purchase invoices for RO (#TT02445/22)      
> - SD: in Italian electronic invoicing, in the 'Checked' step, a new check on the presence of the ISO code and VAT number of the 'supplier' of self-invoices has been added (both in the main registry and in its possible alternative address of type 'tax representative') (#TT02411/22)      
> - CO: review DDT filter in purchase valuation area (#TT02258/22)      
> - PR: risk management: increased RSUE_Descr1 size to 80 characters (#TT02392/22)      
> - Bizlink: Export cash flow for DocFinance: Fluentis2021 (#TT02451/22)  

## Patch 605.1-0010: 08/31/2022

> - SD: Bug fixed: corrected bug in updating production order when customer order data changes (#TT02232/22)      
> - CO: in controlling, review calculation of 'Project cost recovery' for Fluentis2021      
> - SCS: Job order fulfillment      
> “SCS: Corrected job order fulfillment, the job becomes fulfilled once the job order is in 'Fulfilled' or 'Forced Fulfilled' state.”
> - SCM: Purchase order fulfillment       
> “SCM: Corrected purchase order fulfillment, the job becomes fulfilled when all documents generated from it are in 'Fulfilled' or 'Forced Fulfilled' state (R.D.A. and Supplier Orders).”      
> - PM: resolved anomaly on rollback of invoices generated by interventions, resetting the status to "checked" for all non-billed interventions, not just those subject to rollback (#TT02233/22)      
> - PM: resolved anomaly on rollback of invoices generated by interventions, resetting the status to "checked" for all non-billed interventions, not just those subject to rollback (#TT02233/22)      
> - PM: in interventions, for incurred expenses, a preview of attachments was added (#TT02187/22)      
> - PM: in interventions, filling in the "description of activities performed" field for a service, if the max allowed characters were exceeded, the field was reset. Now replaced with input blocking without field reset (#TT02186/22)      
> - ARM: Default sending address added for emails sent with a Workflow action. If not set, the email address of the operator performing the workflow advancement will be used.      
> - PM: changing the "actual time" and "rounding" fields in an intervention invoice plan would not recalculate the quantity field. Resolved. (#TT02067/22)      
> - PM: new activity insertion for resource, the proposed date automatically considers the working hours for the resource, suggesting any missing time slots for the day. If inserting a date overlapping with another activity, it asks whether to proceed. If inserting an activity date that is non-working, it will be flagged. (#TT02104/22)      
> - PM: for some extratime lines (related to travel hours), the taxed price field in the invoice plan was not being valued. Resolved (#TT01592/22)      
> - PM: in invoice plan calculation, for certain cases where travel is partially included in services, there were anomalies in conversion of actual time. Resolved (#TT01561/22)      
> - PM: in invoice plan calculation, in the case of including travel hours in services for which the travel hours are totally in extratime, one line remained at 0. Resolved (#TT01968/22)      
> - PM: improved activity generation from interventions, including automatic insertion of the activity upon changing intervention state to “approved”. A new field “activity category” was added in expenses, used in the case of activity generation from travel hours; in activities generated from interventions, only incurred expenses are reported, not those to be billed (#TT01516/22)      
> - PM: intervention valuation, in the case of service lines with and without WIP in the same intervention, invoice line groupings take WIP into account. Therefore, in the invoice, there will be two separate groupings for lines with and without WIP, with the corresponding reversed entry (#TT02047/22)      
> - PM: in the case of changing resources in an intervention, incurred and billable expenses and the corresponding invoice plan are recalculated, consistent with the resource and the expected configurations (#TT02319/22)      
> - FI: CashFlow: resolved bug in detailed cashflow analysis printing phase (#TT02183/22)      
> - PM: in the rollback of the activity generation procedure from intervention, new filters were added for searching documents to perform the rollback: search by date/number/customer/resource of the intervention, by date/number/customer/resource of the activity. (#TT02313/22)      
> - FI: error in using the 'Accounting Commission' procedure in the Finance area:-> professional man (#TT02356/22)      
> - FI: automatic account closure (#TT02370/22)      
> - SCS: Bug Fixed. Corrected a bug in DDT and Job Returns that did not allow the display of lines to import in “Fulfillment from orders” when the DDT or the Return was deleted respectively (#TT02366/22)   


## Patch 605.1-0009: 08/05/2022

> - Fixed bug in managing accounting movement description from Excel      
> - SD: Validation rules for e-Invoice Romania for Checked state (#TT01987/22)      
> - SD: Fix SalesInvoice-added new item errors in documents (#TT02179/22)      
> - MRP: bug fixed: corrected a bug in the MRP procedure when the "Differentiate confirmed production demand" flag is activated.      
> - FI: intrastat: modified allocation of allocated expenses to exclude down payment/storno down payment lines. Revised assignment of the bis/ter section based on the document header reference date (#TT02074/22)      
> - Xamarin: WM: The Input Code widget did not gain focus when the DetailsConfirmation tab was selected; corrected the exception that occurred when creating a new load unit was canceled, in the DetailsConfirmation tab; correction of the "Open load unit" button (located on the ribbon), which was not enabled when a line in the Details tab was selected.      
> - added support for commands in auto-completion      
> - SD: Corrected invoice discharge procedure (#TT02239/22)       
> - Xamarin: SH: Correction of a bug preventing saving and taking photos on Xamarin      
> - Xamarin: Framework: Correction of permissions for camera and localization of the popup    


## Patch 605.1-0008: 07/27/2022

> - FI: communication of periodic VAT settlement, export revision from button in Fluentis2021 (#TT02094/22)      
> - WM: Cost Calculation: bug fixed for execution of Cost Calculation for Selected Items.      
> - Fixed bug in importing text files on Linux systems      
> - PM: added possibility to generate activities from interventions via the procedure, also for interventions with “approved” status (#TT02059/22)      
> - Changes to PM module, FI module, SH module, CRM module, Xamarin framework, for the fix of specific CRM forms (mobile app only)      
> - ModalFormParameter: added support for PasswordBoxEdit control  


## Patch 605.1-0007: 07/19/2022

> - FI: revised handling of end-of-line characters for Intrastat files (#TT02075/22)      
> - MRP: The MRP procedure correctly generates planned orders even if the parameters do not have all the active flags related to the creation of planned orders for: purchase, job order, and production.      
> - PM: from the rollback procedure of "activity generation from interventions," it became possible to rollback activities related to both services and travel hours (#TT01999/22)      
> - PM: resolved anomaly where incurred expenses in the intervention were not correctly reported in the corresponding activities generated from the intervention (#TT02001/22)      
> - WM: Cost Calculation: bug fixed for execution of Cost Calculation for Selected Items  


## Patch 605.1-0006: 07/15/2022

> - SalesInvoice: correction execution from SalesDeliveryNote: issue with note lines.      
> - CO: data retrieval from production (#TT01956/22)      
> - PM: searching for interventions applying a filter for items generated an anomaly, which has been resolved (#TT01967/22)      
> - PM: resolved anomaly in activity generation from intervention state change to "approved". In the presence of project parameters :per operator, it only worked for the intervention specified in the parameters. Now it works for all types of interventions. (#TT01566/22)      
> - CO: revision of interim balance prints in controlling      
> - SH: resolved anomaly in electronic purchase invoice visualization, checked for certain cases where the file had an extension of .XML written in uppercase (#TT01855/22)      
> - PM: in planned interventions, when changing the start date, it is asked whether to also update the following dates (pause and end) in the display. Responding affirmatively did not always propose the correct times based on the working shift of the resource. This case has been resolved (#TT01594/22)      
> - PM: procedure for generating interventions from activities, in Romanian, gave an incomplete message when clicking the create intervention button. Resolved (#TT01894/22)      
> - MRP: The procedure now correctly deletes non-linked scheduled orders with each execution to recreate them. Additionally, the functionality of the "Grouping GG" parameter present in the MRP parameters has also been corrected.      
> - MPS: Scheduling: If one or more job orders are selected, the procedure correctly schedules only those present in the selection.      
> - PM: improved management of cancellation of activities/interventions linked to each other and with sprints.       
>> 1. When canceling an intervention already included in the sprint, the reference to the intervention in the sprint is also deleted.            
>> 2. When canceling travel hours present in the intervention for which a linked activity has been generated, the corresponding activity is also deleted.       
>> 3. When canceling an intervention that has generated one or more linked activities, the corresponding activities are also deleted.      
>> 4. When canceling an intervention that has been generated BY one or more activities, only the intervention is deleted, while the activities remain and the "billed" flag is restored to false.          
> - Added API scripting for control management and related Blockly widgets      
> - PM: when deleting travel hours from already approved interventions, an error occurred as a linked activity was present for the travel hours. This case has been resolved by also deleting the activities linked to the travel hours of the intervention (#TT01893/22)      
> - MRP: In the MRP results tab, the date of the documents present in the "action description" field is correctly formatted according to the selected language.      
> - PM: improved generation of activities from confirmation of leave/permit period, did not correctly generate all activities if other activity declarations were already present in the same period. (#TT01835/22)      
> - PM: changing the activity date in the activity declaration causes recalculation of the other fields "start hour/end hour/start pause hour/end pause hour". Likewise, if the "start hour" field is modified, the "activity date" field is updated (#TT02018/22)      
> - PM: changing the intervention state from the ribbon bar from "entered" to "to be approved," failed to calculate the invoice plan. Resolved. (#TT01997/22)      
> - PM: if an intervention has been approved and thus generated a linked activity, the following fields are locked from modification: customer (in the intervention header), resource/date/hours/description/project/activity category/ticket (in services). Other fields (e.g., price, VAT, .W.I.P., progress percentage, etc.) can still be modified. (#TT02012/22)      
> - SH: Management of StatisticalAgent property (#TT02005/22)  


## Patch 605.1-0005: 07/08/2022

> - PM: Resolved cancellation of interventions, in the case of interventions without service or material lines, it was not carried out (#TT01789/22)      
> - PM: Resolved anomaly in expenses incurred in interventions, in the case of enabling the "To Be Reimbursed" flag, the expense amount field was set equal to the "total cost" field (zeroed). Now the value is maintained (#TT01939/22)      
> - SH: in the chart of accounts, revision of management of the new subaccount button when the previous one is not yet saved and lacks a description (#TT01936/22)      
> - PM: Creation of SalesInvoice from Project Sal: payment modification (#TT01515/22)      
> - PM: Fixed insertion of new WBS lines, in the case of a project with gantt management gave an error. (#TT01922/22)      
> - PM: changing the customer holder of a project with confirmation of price list updates, items, etc., in the case of a null price for WBS would not allow saving without giving any alert message (#TT01927/22)      
> - PM: in case of using square brackets in the description of a WBS, it generated an error opening the project after saving (#TT01790/22)      
> - PM: opening an intervention with Fluentis in a language other than Italian, in the invoice plan displayed the price fields with a specific foreign currency for the set language.    


## Patch 605.1-0004: 07/06/2022

> - PM: Resolved anomaly in saving interventions, in the case of WBS without price or quantity linked to service lines (#TT01839/22)      
> - SH: fix extradata based on DataSource      
> - MPS: this error message "Error: Production Item Blocked or without the required Bill of Materials or cyclic bill," will be replaced by messages specifying the error, thus regarding the "blocked for production" flag between rmrp parameters and the "no authorization needed" flag in the "Error: Production Item Blocked or without the required Bill of Materials or cyclic bill" bill of materials.      
> - Alignment of Xamarin with the latest version of Trk            
> - Added CheckRowManagement form for the Xamarin platform and changed CheckRowManagement ViewModel for Wpf      
> - MES: Release of planned orders: In the case of external phases, the procedure did not correctly generate job orders and did not propose materials to deliver and use correctly.      
> - Added automatic recompilation script for newly installed versions      
> - FI: Resolved outgoing exception in Download exchange rates (#TT01880/22)      
> - SD: In the creation of Sdi sales invoice files, management of the section of the 'tax representative' of the supplier (e.g., case of self-invoices TD19). The section is populated if an alternative address of type 'Tax Representative' is defined in the supplier's registry (#TT01915/22).      
> - MRP: Corrected the algorithm that, in some cases, generated planned orders with double quantities.      
> - MRP: Now, unconfirmed customer orders without delivery and goods ready dates are no longer considered by MRP, if the MRP parameters for customer orders have the flag on the "Do not consider items without delivery date" option.      
> - FI: File for Declarations of Intent in Fluentis2021 (#TT01902/22)  

 
## Patch 605.1-0003: 07/01/2022  

> - Updated template for client script ObjectForm      
> - FI: 394 fix declaration

This patch release of planned orders for items with bill of materials containing fictitious items.  

## Patch 605.1-0002: 06/29/2022 

> - PR: Review for null field in expenses for operation (#TT01774/22)        
> - Updated orphan configuration lines of BizLink         
> - Modification to prevent an error that was generated when creating the XML file for the purchase invoice  


## Patch 605.1-0001: 06/28/2022  

> - MPS: Resolved problem with the release of a production order with only one external phase in the cycle, now creates both production order and job order.         
> - MES: Corrected release of planned orders for items with bill of materials containing fictitious items.