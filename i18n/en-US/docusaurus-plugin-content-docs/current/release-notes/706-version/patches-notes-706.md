---
title: Patch Notes Version 706 (Patch notes Versione 706)
sidebar_position: 1
---

### Patch 706.1-0018 - 10/31/2024
> - QY - Article Controls - Import articles to check from Production Declaration - Fixed an issue that displayed consumption batches of semi-finished phase. (#TT04382/24)
> - CO - Added currency in unique key of CO_ConsolidationListCostCenters and CO_InternalClosureModelListCostCenters (TT04649/24)

### Patch 706.1-0017 - 10/24/2024
> - MES - Declaration Registration: fixes a bug for verifying material stock by location (#TT04372/24)
> - FI/PR - Resolves a crash problem in tiles for customized configurations (#TT04373/24)
> - SH - Agent Registry: fixes the copying of commissions from one agent, now all types of commission not yet entered in the destination agent are copied (#TT04450/24)

### Patch 706.1-0016 - 10/17/2024
> - Fixed the issue with button icons in the script editor.
> - SCS - In DDT of Work Account for manually entered items, the Warehouse and Reason coded in the DDT Type are considered (#TT04284/24)
> - WM - Fixed bug in article location map (#TT04365/24)
> - MES - Optimized and improved the web API for importing production reports, particularly on the data in the team tab (#TT03034/24)
> - Technical alignments Supervisor Service
> - Technical alignments BizLink Service
> - WM - Resolved the article prototype import issue using a custom BizLink schema.
> - MS - Fixed bugs on the general scheduling procedure related to grouping (#TT04026/24)
> - FI - Review of the accounting of sales invoices in the automation of expiry closure for direct payment (#TT03474/24)
> - MS - Fixed bugs in general scheduling (#TT03785/24 - #TT04245/24)
> - MS - Optimized and improved the general scheduling procedure and fixed a bug in the "Check documents overdue with ATP" function (#TT03837/24)
> - WM - In availability analysis, the "Only negative" flag present in the "Show lines without availability" expander now correctly filters only the lines with negative availability (#TT04356/24)
> - PR - Fixed the import of bank movement files where the registration dates and bank currencies were reversed (#TT04435/24)

### Patch 706.1-0015 - 10/10/2024
> - SCS - Multiple Prints - Added multiple print report for work account documents (#TT04144/24)
> - PR - Reviewed SEPA file version pain 001.001.03 for SI localization (#TT04313/24)
> - SD - Order Due Date Print - Modified report to manage sorting by delivery date and customer (#TT04277/24)
> - MS - Fixed bug in MRP procedure (#TT04322/24)
> - SD - When converting a Quote to an Order, if the order type has the Automatic Project Creation flag active, the project number and type are proposed automatically at the time of order saving (#TT04336/24)
> - SH - File Type - Added file type .msg (#TT04182/24)
> - SCM - Fixed error that prevented multiple entry of articles in Offer Requests (#TT04334/24)
> - SD - Resolved exception that prevented modification of the list price from the item registry (#TT04237/24)
> - ARM - Fixed exception during deletion of a line referenced by the filter results grid.
> - In the state change of Sdi sales invoices, reviewed the signature step on files imported through WebApi (#TT04229/24)
> - SCS - Fixed error in Work Account Orders that sometimes did not load materials for the first item line entered (#TT04112/24)

### Patch 706.1-0014 - 10/07/2024
> - FI - Communication of periodic VAT settlement - revision of print for indicating the previous period debt not exceeding €100 (field VP7)
> - ARM - It is possible to hide the tiles from the document search masks in the following way - access the Object Navigator, open the Informations folder of the object, enter Edit and remove the Default flag from Document view (#TT04227/24)

### Patch 706.1-0013 - 10/03/2024
> - CO - revision of the monthly calculation of period processing (#TT04072/24)
> - MES - Fixed bug in checking material inventory of production reports (#TT04123/24)
> - SD - Billing Balance Print - Fixed subreport bugs for VAT recalculation and expenses (#TT03249/24)
> - SD - Fixed error that caused the "VAT/Price required" message to loop when trying to save the document without entering mandatory data (#TT02165/24)
> - SD, SCS - When the Lots and SN mandatory flag is not active and the Lot pick type is FIFO or Expiration Date, the lot code is automatically proposed when the document is unloaded, if it has not already been manually entered (#TT03979/24)
> - FI - SafT - changes for GeneralLedgerEntries July 2024 (#TT03838/24)
> - MES - Optimized the declaration registration procedure (#TT04017/24)
> - Fixed bug in property detection for the base interface of the object on Blocky.
> - SCM - Fixed bug in automatic order creation procedure that returned an error when choosing to insert items into an existing order (#TT04134/24)
> - PM - managed overlap or double confirmation of vacation requests (#TT02125/24)
> - ARM - Fixed mapping of extension properties when the extension object has multiple properties with the parent object type.
> - SH - Fixed filter of additional data - columns are loaded from the profile. Skip the column if it is not valid (#TT01838/24)
> - MS - Fixed bug in applying the minimum economic lot for purchase in case of a general planning with grouping (#TT04026/24)
> - WM - Allow picking of unloading when created from production (#TT04235/24)

### Patch 706.1-0012 - 09/26/2024
> - WM - In lot and traceability registry, flags - All, None, and Positive have been added to the filter, allowing filtering for quantities in stock, committed, and available (#TT03510/24)
> - SD - In the Advanced Price List Generation procedure, also discounts entered in the Discount Policy Definition can be considered - it is necessary to activate the "Discount resumption" flag in the Price/Discount policy update formula and the "Price Management" flag in the contact registry, price list tab (#TT02411/24)
> - Customized standard algorithm method not visible on object navigator (#TT04032/24)
> - SD - Enabled the Status field in the Orders row summary, whose values can be - Entered, Confirmed, In production, Produced, Canceled (#TT04066/24)
> - Fixed the issue with the missing link to MasterDocumentId (#TT04027/24)
> - SH - Documental - Fixed bug in loading multiple documents in folder mode as it was causing the program to disconnect (#TT03705/24 - #TT02202/24 )
> - CO - revision of the monthly calculation of period processing (#TT04072/24)
> - in the calculation of total purchase invoices, managing VAT rates with the 'Reverse charge' flag for managing mixed invoices (#TT03198)
> - SD - Implemented management of 'Final Expenses/Discounts' in the WEB Api import of customer orders (#TT04102/24)
> - SCM - Fixed error in Automatic order creation from RDA that sometimes suggested incorrect confirmed quantities (#TT03956/24)
> - WM - Base Bills - Fixed grid visibility of the Cycle tab by creating a default profile (#TT03907/24)
> - ARM - Allows customization of objects without mapping; correction of the parent property of the extension object.

### Patch 706.1-0011 - 09/20/2024
> - WM - Added the variant in the ValorizatedBOM and ValorizatedItemCostBOM report of the bill of materials valuation
> - QY - Corrective actions - Multiline management of the columns "Proposed action" and "Items to evaluate" present in action plans has been enabled (#TT03938/24)
> - ARM - Align the object from the table - ensure that the property starts with an uppercase letter; correct the parent object.
> - FI - Retention payments - fixed unpaid payment date update issue (#Ticket#TT02897/24)
> - QY - Article Control - Import articles to check - Fixed the anomaly of searching using filters on Lots and Serial Numbers (#TT03789/24)
> - QY - Article Control - Import articles to check - Resolved anomaly in searching for an article, managed by lots, previously imported (#TT03709/24)
> - Arm.SCR_ScriptCategories - Fixed SQL script that adds new categories for CPQ script area
> - SCM, SCS - Fixed error in expense allocation with distributed flag inserted in document summaries (#TT02336/24)  
> - SH - Update IBAN structure check for country AE (United Arab Emirates) (#TT03985/24)
> - SH - Resolved case in inserting accounts into the chart of accounts (#TT04007/24)
> - CO - revision of the deletion of registers in inter-annual closures (#TT03976/24)
> - PM- WEB resolved hour planner visualization with grouping by project (#TT03950/24)
> - PR - Accounting of payment slips (#TT02623/24)
> - CO - Added the Variant cost column in the cost calculation. This reports the values present in the variants tab of the item registry (#TT03057/24 - #TT03043/24)
> - SD - Fixed error in Sales Invoice print, which did not print the item Code in case of 'Mode of sorting' by Code (#TT04003/24)
> - SD - Fixed error in saving profiles in the Sales Quote form (#TT03907/24)
> - SD- Fixed error in the Customer Orders Search filter that sometimes displayed duplicate items in the order detail window (#TT03982/24)
> - FI - Print Fixed Assets Book with non-solar fiscal year (#TT03716/24)

### Patch 706.1-0010 - 09/12/2024
> - QY - Measuring Instruments - Implemented the propagation of Extradata between Measuring Instrument Category and Measuring Instrument (#TT03855/24)
> - QY - Complaints - Fixed the anomaly applying the Article filter in the Complaint Search (#TT03654/24)
> - SD - Fixed error in DDT fulfillment from Customer Orders search filter (#TT03910/24)
> - FI- resolved specific error case in downloading and printing electronic purchase invoices (#TT03513/24)
> - CO - revision of comparison refactoring for displaying cost indices in detailed monthly view (#TT02853/24)
> - FI - In accounting registrations, revised insertion of new VAT line (#TT03900/24)
> - In the valuation of purchase ddt, revised management of cost center due dates (#TT03699/24)
> - CRM - resolved case where in campaigns the contact workflow advanced in status without directly clicking, only by opening the expander (#TT03807/24)
> - MES - Fixed bug in production declaration during the registration of movements (#TT03901/24)
> - WEBAPI - Import Sales Order - if the Order type requires project creation, the web API creates the project upon importing the sales order (#TT03481/24)
> - Fixed the issue with the script code that used reserved words.
> - WM- Movement Cards - Added parameters AccountId, AccountCode, AccountDetailCode and AccountDescription to calculate the initial stock for suppliers (#TT03922/24)
> - SH - Fixed dashboard saves from Dashboard designer (#TT03725/24)
> - SD - Fixed the execution issue from customized SalesOrder/SalesDeliveryNote (#TT03731/24)
> - PM- planner, resolved case on web that loaded only the actual selected month and not the previous month's data, even if some days of the previous month were displayed on screen (#TT03782/24)
> - MS - Fixed bug in opening the Work Center loads form (#TT03943/24)
> - Added integration between BizLink and the document import and export WebApi
> - CRM- added functionality so that customer registry updates CRM registry if connected; in case of customer registry deletion, the reference is removed from the CRM registry; added option in CRM parameters so that entering a new accounting account creates a CRM registry if not already present (#TT03874/24)

### Patch 706.1-0009 - 09/10/2024
> - ARM - migration - align custom objects
> - FI - Environment tax for RO - invoices with VAT - tax must be applied to base amount (#TT03877/24)
> - CRM - add new filters for CrmContact (#TT03665/24)
> - CRM - add new Crm Parameter 'When searching for a CRM contact, also search as parent contact' (#TT03671/24)
> - SCM - Fixed error in DDT Fulfillment procedure that did not always report correct quantities in DDT (#TT03750/24)
> - BI - Pivot grid Dashboards - fix loading profiles in ribbon
> - SCM - The standard Web Api import of purchase DDT includes note type lines (#TT03884/24)
> - PM- fixed case where enabling the "Exclude off-hours calculation" flag did not calculate the billing plan in interventions (#TT03780/24)
> - PM- Generate activities from hours spent inserted in interventions even with a different expense date from the service (#TT03590/24)
> - PM- fixed expense date automatically inserted in the activity declaration generated by changing the intervention approved status (#TT03640/24)
> - MS - Implemented the Production Order Generation flag in the item MRP Parameters - if active, indicates that customer order lines with this item must be displayed in the filter of the Customer Orders tab in Production Order Generation; additionally, it will also be considered if the Automatic flow generation present in MS Parameters is active. If the flag is deactivated, the item will not be considered in either procedure (#TT03242/24)
> - WM - it is possible to query stock for project lines in Stock View (#Ticket 03719/24)
> - MS - In production order generation, it is now possible to create order prototypes with many more lines simultaneously (#TT03636/24)
> - WMS - Fixed bug in UDC load/unload form (#TT03875/24)
> - MS - Fixed bug in General Planning; now the scheduling with the "Also consider material alternatives" flag works correctly (#TT00306/24)
> - Review of the management step 'signature' for Sdi files imported via webapi (#TT03741/24)

### Patch 706.1-0008 - 09/05/2024
> - MS - In production order generation, it is now possible to create order prototypes with many more lines simultaneously (#TT03636/24)
> - WMS - Now in picking and confirming picking management, focus returns to the barcode field after each read (#TT03704/24)
> - FI - within accounting registrations, revised the tax recalculation button (#TT02926/24)
> - ARM - Projects page freezing fix
> - SD - If the Customer is changed in sales documents, the Article Discounts widget in the Articles tab also updates (#TT03735/24)
> - FI - VAT register report - change to have the possibility to use quarterly/monthly for history (#TT03769/24)
> - SH - Enabled the column Value of the General Parameter 'Default Ledger Account Style' - in the Value column, it is possible to enter 1 or 3 to configure the accounting master data widget in either one or three fields (account, sub-account, description) (#TT03604/24)
> - WM - In mass modification of items, added the possibility to change the Default WMS flag in the UM alternatives tab (#TT03683/24)
> - MES - In production declarations, when a progress is recorded, the cost of the produced item is already calculated in the stock movement, without waiting for the closure declaration (#TT03071/24)
> - WM - Fixed bug in the rollback function of transferring the UDC transfer lists (#TT03710/24)
> - SCM - In the order fulfillment procedure, the Quantity to fulfill allows the insertion of the same decimals as the Remaining Quantity (#TT03700/24)
> - WMS - Fixed bug in goods receipt that did not correctly create movements of created UDC (#TT03677/24)
> - FI/SCM/WM - Standardization HR - workflow purchase accounting (#TT03450/24)
> - FI/SCM/SD - Non working cases for FA_RO_ContabFattura - in algorithm (#TT03737/24)
> - WM - Improved and optimized the procedure for importing picks via Webapi (#TT03723/24)
> - FI - SafT - changes for GeneralLedgerEntries July 2024 (#TT03838/24)
> - SH - Fast Start Chart of Accounts without accented characters (#TT03740/24)
> - WM - In the item registry search form, now the Customer and Preferred Supplier fields filter data respectively by customer and supplier (#TT03698/24)
> - SCM - Created Print Labels from Supplier Orders that generates physical labels for identifying and managing items that are part of an order.
> - WM - In picking and confirming picking management of WMS, now articles in the articles tab are also sorted by picking line number (#TT03847/24)
> - PM- expenses to be billed proposed in interventions, restored filter for type of intervention during proposal (#TT03653/24)
> - SD - In standard prints 'Sales Invoice' and 'Accompanying Invoice', for EXTRA EU invoices, the Nomenclatures of the Articles are printed under the item code; furthermore, in the item description column, a summary of amounts for nomenclature is reported (#TT02102/24)
> - ARM - migration customization projects/objects fix
> - PM - fixed blockage in modifying quantity, price, unit of measure after inserting a coded item in a project (#Ticket 03696/24)
> - PM- WEB payroll and resource assignment wbs, in case of multiple resources, corrected movement/alignment label using the scroll bar (#TT03405/24)
> - PM- WEB pay slips, added partial totals in the summary for each expense type (#TT03186/24)
> - PM- planner and wbs resource assignment, unlocked the ability to assign appointments to resources even on days not planned for their work calendar (#TT03451/24)
> - PM- WBS resource assignment added fields start and end break when creating a new appointment (#TT03452/24)

### Patch 706.1-0007 - 08/08/2024
> - SD - In DDT and Sales Invoices it is now possible to reverse item lines of type 2, 3, 4, and 5 (#TT02375/24)
> - MS - If a production order is generated with order type "Multiproduct" and grouping "None", it is created with as many lines as there are customer order lines for that item; thus without grouping them into a single line (#TT03615/24)
> - WM - Now in the detail of availability analysis, production order lines highlight the fields "Linked customer order" and "Linked customer order quantity” if they are connected to a customer order (#TT03549/24)
> - MS - Fixed bug in MRP procedure for production articles with unauthorized bill of materials (#TT03543/24)
> - WM - Fixed bug in lot help that did not correctly display the availability value in the upper grid if filtered by location (#TT03600/24)
> - SCM - In the ‘Sdi- Document Closure’ form, opened from the header of purchase invoices, added the columns Document Number and Document Date to the first grid (#TT03049/22)
> - SD - Elimination of rounding in discount calculation for the percentage of the range discount (#TT03609/24)
> - SH - Enabled decimals in Demand and Offer columns for Planned Orders, in Availability Analysis (#TT03201/24)
> - FI - the accounting of leasing fees now uses the interest cost account on the specific sub-account set (#TT03582/24)
> - FI/PR - revised display of search filters for payable/non-payable accounts, non-payables are excluded by default in the compensation masks, in registrations, in acquiring effects from accounts, in the supplier payments module (#TT03641/24)
> - QY - Non compliance - Fixed anomaly of propagation of Extra data from Non-conformance Type to Non-conformance (#TT03586/24)
> - SD - In the 'Detailed Lines of Customer Orders' form, the filter in the grid for the 'Fulfillment document type' and 'Fulfillment document number' columns has been enabled; after entering the filter, you need to click Search to see the results (#TT03655/24)
> - FI/PM - in the employee hours pay slip management form, the activity filter is now set to the resource/employee and no longer to the connected user (#TT03607/24)
> - PR - management of SEPA files for Slovenia (version pain 001.001.03) (#TT03504/24)
> - FI - review of depreciation recovery of fixed assets in inter-annual closures, calculation also in the presence of previously entered depreciation for the year of closure (#TT03042/24)
> - WMS - Fixed picking and Checking management. Implemented the possibility of exceeding the specified quantity in a picking (#TT03651/24)
> - WM - Fixed bug in cost recalculation procedure in case of variants present (#TT02015/24)

### Patch 706.1-0006 - 01/08/2024
> - WMS - Fixed bug in displaying load units of the WMS Picking Confirmation (#TT03473/24)
> - SD - Fixed loop in automatic unloading of DDT with only non-coded note articles (ref.ticket 3557/24)
> - MES - Fixed bug in calculating the cost of produced articles with production declarations (#TT03408/24)
> - SD - In hierarchical Sales Quotes when a descriptive line is entered in the Materials tab, a type line 2 is associated (#TT03420/24)
> - WM - Fixed bug in availability analysis (#TT03349/24)
> - FI - Reorganization of VAT protocols - fixed error in automatic numbering insertion and in updating protocols in descriptions (#TT03378/24)
> - FI - fixed error in the phase of launching the accounting of the bank movements file (#TT03579/24)
> - SH - Optimized insertion of Extra Data of type Date along with Extra Data of another type (#TT03055/24)
> - SD - Fixed outgoing error in entering a new article in an already unloaded DDT (#TT03177/24)
> - FI - During the creation of the invoice or accounting registration from incoming purchase documents, only contacts with a linked accounting account are proposed (#TT03352/24)
> - PM- Resolved report on changing customers in project header (#TT03565/24)
> - PM- fixed case of WBS assignment in intervention, which in case of matching project parameters, prevented association (#TT03574/24)
> - PM- Project - entering a new child level of a root, prevented the association of a coded article (#TT03583/24)
> - WM - Fixed bug in the item registry, which when entering a variant also created the bill of materials for that variant. (#TT03443/24)
> - MS - Fixed bug in Work Center capacity that considered the capacity on an internal work center given by a planned work order; now, if the planned work order has an internal phase (because sometimes it is produced internally and sometimes externally) it no longer commits that work center (#TT03406/24)
> - MES - Fixed bug in the work cycle that if a new phase was added did not report the preferred supplier entered in the standard phase (#TT03551/24)

### Patch 706.1-0005 - 07/18/2024
> - MS - New optimizations for the MRP procedure (#TT03485/24)
> - SCS - Fixed error that when duplicating a forced fulfilled Work Order did not update the fulfillment status of materials to be delivered of the new order (#TT03380/24)
> - SCS - In Work Orders, a new parameter in the Proposed material Data called “From the production order” has been added, used for recalculating material quantities. It is automatically set when creating a work order from the external phase of a production order, upon release of a planned production order with external phase, and upon release of a planned work order. For proposing material data in the work order, it is now possible to have a different parameter for each item line (#TT02097/24)
> - SCS - Fixed error in calculating material quantities in Work Orders when they were proposed from the last delivery made at the same contractor (#TT03168/24)
> - PM - Printing project details, fixed case of duplicate movements in printing. Properly managed case of DDT with warehouse movement and related linked invoice (#TT03484/24)
> - PM - billable activity declaration - correctly managed warning of missing intervention type configuration - in activity type or in project general parameters (#TT03462/24)
> - MS - Optimized and sped up the MRP procedure (#TT02462/24)
> - MES - Fixed bug in calculating the occupancy of work centers in case the phases of the production order were modified (#TT02662/24)
> - SH - The Conai expenditure line, upon saving the document, takes the same VAT of the article line that generated it (#TT02599/24)
> - FI - for companies with active controlling, review of balance testing on dimensions (#TT03496/24)
> - SH - Review of Conai recalculation in case of duplicated document (#TT03508/24)
> - MS - Improved and optimized the job costing procedure (#TT00449/24)

### Patch 706.1-0004 - 07/22/2024
> - FI - review scroll of the accounting entries list (#TT03440/24)
> - MES - Fixed bug in the material withdrawal list related to the creation of picking with items managed in lots (#TT03187/24)
> - FI - for Swiss localization, revision of accounting for rounding on document total manages with final expenses without VAT (#TT03335/24)
> - FI - Fixed issue that did not handle alternative supporting bank in the automatic creation of supplier payment statements using the agent registry (#TT03274/24)
> - Management of execution timeout for stored procedure blockly (#TT03153/24)
> - HR - payroll calculation - introduced new flag in pay codes "Holiday Overtime" that considers all activities performed on Saturdays and/or Sundays, not scheduled in the working hours of the resource (#TT02674/24)
> - FI - in accounting of purchase invoices, management in the VAT grid of the VAT field for automatic reasons (#TT02641/24)
> - SCM - Review accounting of cost centers from purchase invoices, negative signs (#TT03239)
> - FI - Resolved error exception in intrastat that involved a case related to a credit note ref R- TT03449/24

### Patch 706.1-0003 - 07/18/2024
> - FI - in accounting of sales invoices, alignment of management of the exchange for the cost center section (#TT02172/24)
> - SCM - accounting of purchase invoices, assignment of division to movement lines of cost center for final expense lines (#TT03239/24)
> - SD - Fixed error that prevented ordering by fulfillment status in the Customer Orders grid (#TT03404/24)
> - WM - In stock view, the decimals used by the alternative UM are those indicated in the decimals field of the used alternative UM (#TT03313/24)

### Patch 706.1-0002 - 07/17/2024
> - MES - Fixed bug in the material withdrawal list that did not correctly change the status of production orders from launched to executive if more than one were processed at once (#TT03383/24)
> - MS - In the Production Order Generation form from Low Stock, the column of Stock as of today has been added, while for documents without Delivery Date, the parameter “If delivery date is not specified” present in the Parameter tab of the form is now considered (#TT02573/24)
> - PR - for generating SEPA files, Foreign SEPA, SDD SEPA, the parameters "FS-PR-SEPA-PaymentRequest", "FS-PR-SEPA-ForeignPaymentRequest", "FS-PR-SEPA-SDD" are now checked to understand which BizLink flow to call. If not set, the default flow for the company's localization is used (#TT03341/24)

### Patch 706.1-0001 - 07/16/2024
> - SD - Revision test of the issuing country's check on the Sdi invoice for self-invoices, from country field to ISO code field of the VAT number (#TT03368/24)
> - WM - In picking, improved accessibility to the lot field in case a picking is reopened and the user changes the quantity in the withdrawal quantity field. It was previously necessary to change rows before changing the lot, whereas now it is no longer necessary (#TT03228/24)
> - PM - WBS resource assignment, improved project tree view refresh after changing filters (#TT03376/24)
> - MS - Fixed bug in releasing planned purchase orders, now the created RDAs are correctly grouped by customer, type, and year (#TT03382/24)


### Patch 706.1-0000

> - WEBAPI - resolved the anomaly related to setting the ResidualQuantity of purchase DDT and sales DDT for lines with quantity 1.  
> - FI - Enasarco- fixed bug in launching the 'Enasarco' print form that did not correctly handle the filter for date range (#TT00824/24)  
> - FI - periodic VAT settlement for January - final print - the previous year's credit is no longer saved in the periodic VAT declaration, even in the field of the previous period credit.  
> - FI - Accounting registration- in the 'Payments' tab, the possibility of modifying payment lines derived from recipient payments has been blocked; it is necessary to execute the rollback and modify the payment amount in the accounting procedure.   
> - FI - Accounting of advance receipts- fixed error in the form 'Accounting of advance receipts' where the total, in the case of credit notes, was added instead of subtracted (#TT01463/23)  
> - FI - Accounting of purchase invoices- revision of 'Registration date' management for the automatic reversal of 'Invoices to be received'.  
> - FI - Intra2- revision of 'Data recovery from registrations' for the case of the custom FSPosting object.  
> - MES- resolved bug in recalculating the start and end date of phases of the production order (#TT03584/23)  
> - MES - General scheduling- fixed bug for unexamined orders.  
> - MES - Production declarations- added details of location in the error message due to insufficient stock (#TT02064/24)  
> - MPS- resolved bug in creating planned orders in case of materials with dummy level (#TT00562/24)  
> - MPS - General scheduling- fixed bug for case of scheduling many lines simultaneously (#TT01451/24)  
> - MPS- fixed bug that occurred when using grouping along with the economic lot (#TT02990/23-#TT01099/24)  
> - MPS - Scheduling- fixed technical issue related to scheduling custom processes (#TT02304/24)  
> - PR - Liquidity management- the behavior of the form has been modified to align it with general logics. The calculated field 'Progressive' can only be managed with the default sorting of the form, and is hidden by changing the sorting criterion (#TT02060/24)   
> - QY - Corrective actions- revision of logics for enabling information present in the 'Next audit checks' tab.   
> - SCM - Purchase requests- resolved anomaly that did not correctly save a profile in request filters with 'Unfulfilled' (#TT02123/24)   
> - SCM - Order line detail- fixed the bug that did not display 'Code/Description' of the supplier article when the order was unfulfilled (#TT02344/24)  
> - SCM - Purchase DDT- if a purchase document is already loaded, the lot code cannot be changed (#TT01712/24)  
> - SCM - Purchase documents- fixed error in updating amounts in warehouse movements in the presence of a divided expense in the DDT or the Purchase Invoice (#TT00794/24)  
> - SCM - Order fulfillment- fixed error that offered the same 'Supplier article description' in the 'Order fulfillment' procedure, for all preferential suppliers of the article (#TT01501/24)  
> - SCM - Offer request- if the 'Alternative unit of measure price' flag is active in the 'Offer request', when creating the Supplier Order from 'Supplier offer', the flag will also be included in the created order (#TT02804/24)   
> - SCS - DDT and in Work Account Returns- the lot in materials is now automatically proposed if the pick type is FIFO or Expiration Date (#TT01140/24)    
> - SCS - Outsourcing price lists- fixed bug in 'Release of work orders' that only reported the item price but not the price list.  
> - SD - Billing balance- revision of signs in subreport totals for sales volumes.  
> - SD - Sales documents- fixed the anomaly in sales documents that did not adequately handle commission in the presence of both agents linked to a customer recipient/destination and NOT linked to any recipient/destination but simply to the customer (#TT00273/24)   
> - SD - Customer Orders- fixed error that modified the fulfillment status of the order following an update of the 'Delivery date' in the customer order (#TT01699/24)  
> - SH - Duplicate items- the procedure also carries over the notes of the preferential suppliers (#TT01580/24)  
> - WM - Component implosion- fixed bug in the excel export of data present in the 'Component implosion' report that did not report the value in the 'Quantity' column (#TT02753/24)   
> - WM - Warehouse valuation- fixed anomaly in displaying procedure errors in case there were more than 100,000.  
> - PM - Interventions- when changing the status of the intervention from 'Approved' to 'Entered', all activities linked to the intervention are deleted, only to be regenerated upon the new status change (#TT00391/24)  
> - PM - SAL processing- resolved cases of incorrect calculations for SAL processing of multiple projects simultaneously (#TT01325/24)  
> - PM - Projects- correctly formatted the price field in project lines (#TT01384/24)  
> - PM - Projects- changes to the WBS number in the project module table are reflected in the 'Activities' tab (#Ticket 01020/24)    
> - PM - SAL- blocked manual entry of both debit/credit values in the same row; made the 'Reference' field editable.  
> - PM - SAL analysis- made note visible in the title of each SAL (#TT01382/24)  
> - SD - Sales invoices- upon saving a credit note, all 'Expense Types' are inserted with a negative sign, except for 'Stamp duty' expenses (#TT01289/24)  
> - SD - Sales invoices- allowed modification of the range of 'economic competence dates' with a created Sdi file but not yet accounted document.  
> - SD - Sales invoices- inserting an article within a 'Sales invoice' using the article help now correctly reports the class (#TT01213/24)  
> - TR - Import cbi file- revision of row note management in the import of bank movements.   
> - Offers - Offers- the successive versions of an Offer inherit the 'Attached Documents' (#TT01149/24)