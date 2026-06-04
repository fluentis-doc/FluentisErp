---
title: Patch notes version 705
sidebar_position: 1
---

### Patch 705.1-0031 - 08/08/2024
> - FI - Reordering VAT protocols: corrected error in entering automatic numbering and updating protocols in descriptions (#TT03378/24)
> - SH - Optimization of entering Extra Data of type Date along with Extra Data of another type (#TT03055/24)
> - SD - Corrected outgoing error when inserting a new item in an already shipped DDT (#TT03177/24)
> - FI - During invoice creation or accounting registration from incoming purchase documents, only contacts with an associated accounting account are proposed (#TT03352/24)
PM: resolved case of WBS assignment in intervention, which in the case of correspondence with project parameters, prevented the association (#TT03574/24)
> - PM: Project - inserting a new child level of a root prevented the association of a coded article (#TT03583/24)
> - WM - Corrected bug in item registry, which when inserting a variant also created the bill of materials for that variant (#TT03443/24)
> - MS - Corrected bug in Work Center capacity that considered capacity on an internal work center given by a planned work order; now, if the planned work order has an internal phase (because sometimes it is produced internally and sometimes externally) this no longer commits that work center (#TT03406/24)
> - MES - Corrected bug in the work cycle that in case a new phase was added did not show the preferred supplier entered in the standard phase (#TT03551/24)
> - SD - In DDT and Sales Invoices it is now possible to reverse line items of type 2, 3, 4, and 5 (#TT02375/24)
> - MS - If in generating production orders a job is created with job type “Multiproduct” and grouping “None,” it is created with as many lines as there are customer order lines for that item; hence without grouping them into a single line (#TT03615/24)
> - WM - Now in the detail of availability analysis the production order lines populate the fields "Related customer order" and "Quantity of related customer order" if they are linked to a customer order (#TT03549/24)
> - WM - Corrected bug in lot help that did not correctly display the availability value in the upper grid when filtered by location (#TT03600/24)
> - SD - Removal of rounding in the discount calculation for the percentage of the Range discount (#TT03609/24)
> - SH - Decimals enabled in the Demand and Supply columns for Scheduled Orders, in Availability Analysis (#TT03201/24)
> - FI/PR - review of search filter display for payable/non-payable items, non-payables are excluded by default in the compensation masks, registrations, acquisition effects from accounts, in the supplier payments module (#TT03641/24)
> - SD - In the 'Detail rows of customer orders' form the filter in grid has been enabled for the 'Document Type of fulfillment' and 'Fulfillment document number' columns; after entering the filter, it is necessary to click Search to display the results (#TT03655/24)
> - FI - review of the recovery of depreciation of fixed assets for interim closures, calculation also in the presence of already entered depreciation in accounting for the year of closure (#TT03042/24)
> - WMS - Now in pick confirmation management, focus returns to the barcode field after each read (#TT03704/24)


### Patch 705.1-0030 - 30/07/2024
> - FI - review of scrolling the list of accounting registrations (#TT03440/24)
> - MES - Corrected bug in the materials withdrawal list related to the creation of picking with items managed in batches (#TT03187/24)
> - FI - for Swiss localization, review of the accounting of rounding on the total document manages final expenses without VAT (#TT03335/24)
> - FI - Corrected problem that did not handle the alternative support bank in the automatic creation of supplier payment records using the agent registry (#TT03274/24)
> - FI - in accounting for purchase invoices, management in grid VAT of the VAT field for automatic reasons (#TT02641/24)
> - SCM - review of accounting cost centers from purchase invoices, negative signs (#TT03239/24)
> - FI - Resolved exception error in Intrastat involving a case related to a credit note (#TT03449/24)
> - MS - New optimizations for the MRP procedure (#TT03485/24)
> - PM: Printing project details, corrected case of duplicate movements in the print. Managed correctly the case of DDT with warehouse movement and related associated invoice (#TT03484/24)
> - PM: billable activity declaration - managed correctly the notice of lack of configuration type intervention - in activity type or in general project parameters (#TT03462/24)
> - MES - Corrected bug in calculating the occupation of work centers in case the phases of the production order were modified (#TT02662/24)
> - FI - for companies with active controlling, review of the test of quadrature on dimensions (#TT03496/24)
> - SH - The Conai expense line, when saving the document, takes the same VAT as the item line that generated it (#TT02599/24)
> - SH - Review of Conai recalculation in case of duplicated document (#TT03508/24)
> - WMS - Corrected bug in the visualization of load units of the WMS picking confirmation (#TT03473/24)
> - SD - Corrected loop in the automatic unloading of DDT with only note and uncoded items (#TT03557/24)
> - MES - Corrected bug in calculating the cost of the item produced with production declarations (#TT03408/24)
> - SD - In hierarchical Sales Offers when a descriptive line is entered in the Materials tab, it is associated with a line type 2 (#TT03420/24)
> - SCS - In Work Order, a new parameter was added in the Proposed Materials Data named “From production order” used for recalculation of material quantities. It is automatically set when creating a work order from the external phase of a production order, when releasing a planned production order with external phase and when releasing a planned Work Order. For proposing material data in the Work Order, it is now possible to have a different parameter for each item line (#TT02097/24)
> - WM - Corrected bug in availability analysis (#TT03349/24)


### Patch 705.1-0029 - 18/07/2024
> - CO - Optimized Year-End Adjustments for extrabudgetary registrations (#TT03214/24)
> - FI - Review of validation control test of the accounting cause during accounting registrations (#TT03062/24 - #TT03060/24)
> - SD - Review control test of the seller/provider country in Sdi invoice for self-invoices, from country field to ISO code field of VAT number (#TT03368/24)
> - WM - In picking, improved accessibility to the lot field in case a picking is reopened and the user varies the quantity in the withdrawal quantity field. Previously it was necessary to change lines before varying the lot, but now it is no longer necessary (#TT03228/24)
> - MS - Corrected bug in releasing planned purchase orders, now the created RDA is correctly grouped by customer, type and year (#TT03382/24)
> - MES - Corrected bug in the materials withdrawal list that did not correctly change the status of production orders from launched to executive if more than one was processed at the same time (#TT03383/24)
> - SD - Corrected error that did not allow sorting by delivery status in the customer orders grid (#TT03404/24)
> - WM - In the inventory view, the decimals used by the alternative unit of measure are those indicated in the decimal UM field of the alternative unit used (#TT03313/24)
> - FI - in accounting for sales invoices, alignment of change management for the cost center section (#TT02172/24)
> - SCM - accounting for purchase invoices, assignment of division to cost center movement lines for final expense lines (#TT03239/24)
> - FI - resolved bug in the generation of reminders that instead of updating the line for reminders subsequent to the first created different lines (#TT03219/24)

### Patch 705.1-0028 - 12/07/2024
> - review of year-end credit storage from definitive print of periodic VAT liquidation in January (#TT02348/24)
> - PM - planner and WBS resource association - removed from activity view already linked to interventions (#TT03248/24)
> - CRM - email from CRM campaigns - blocked reloading email template, after the user has made modifications pre-send (#TT03253/24)
> - SD - Corrected error that did not correctly update final discounts following a modification of the payment solution (#TT03200/24)
> - CO - Resolved bug in the Bill of Materials report in which the material costs were not displayed (#TT03281/24)
> - MES - Corrected bug in production declarations, the location of the lot was not reported correctly in the warehouse withdrawal movement (#TT02156/24)
> - FI - payment accounting assigns the closing date of commissions based on the effect's due date (#TT02657/24)
> - FI - Error in the first note registration of customer collection (#TT03209/24)
> - MES - Implemented in production order the ability to unload materials for customer/supplier (#TT03210/24)
> - Implemented WEBAPI module Picking Import/export and Picking Unloading also with the import of lots/serial numbers (#TT02551/24)
> - SD - Discounts Widget: corrected calculation of row and document totals in the creation of DDT and Invoices from Picking created from Order with the use of the Discounts widget (#TT03333/24)

### Patch 705.1-0027 - 08/07/2024

> - PM - Calendar - managed display of holiday periods with orange background, even in timeline mode ( #TT03117/24)
> - SCM - in accounting purchase invoices, review of assignment of registration date for automatic reversal of the "invoices to be received" registration (#TT03056/24)

### Patch 705.1-0026 - 04/07/2024
> - SH - Corrected bug that, in the case of contact with a country other than IT, did not make visible in customer/supplier details, the tax regime field unless after closing and reopening the form (#TT02158/24)
> - Solved bug to create script events for Sdi documents
> - Solved bug to analyze parameters for Sdi Documents
> - SH - added new parameter to the command for duplicating contacts to decide whether the linked subaccounts should be duplicated for all companies or only for the current one (#TT02592/24)
> - SH - Contact Registry tab - Corrected anomaly for which if a profile was set in the contact registry the client/supplier parameter grouping tab was hidden (#TT02346/24)
> - FI - payment accounting assigns the closing date of commissions based on the effect's due date (#TT02657/24)
> - FI - corrected bug that did not populate cost centers accounting for adjustment entries (#TT02905/24)


### Patch 705.1-0025 - 01/07/2024
> - SCM - Corrected error that did not update the delivery status of the RDA following the activation of the Forcefully Delivered flag on the item lines (#TT02937/24)
> - CO - review of new reclassification for tree management (#TT02912/24)
> - PM - upon changing resource intervention, corrected resource and employee update in all places where the data is present within the intervention (#TT02759/24)

### Patch 705.1-0024 - 28/06/2024
> - FI - Corrected bug in the print launch form Enasarco that did not correctly handle the filter for date range (#TT00824/24)
> - CO - Review performance of new budget reclassification (#TT02912/24)
> - WMS - Corrected bug in the visualization of numbers with decimals (#TT02080/24)
> - WM - Corrected bug in the Details of movements form where the calculated quantities were displayed incorrectly in the alternative unit of measure (#TT02902/24)
> - SD - Corrected error that did not store the Print type in the Customer Order Types table (#TT02985/24)
> - SD - corrected case where in the invoice search grid zero appeared in the "Total Taxable" column despite the document containing the correct values (#TT02991/24)
> - PM - modified price proposal in intervention requests and planned interventions: if the article is not present and a project is assigned, article and price are proposed from the project. If the article is already present and a project is assigned, if the article in the document and the project match, the price is updated from the project. Otherwise, the price already present is maintained (#TT02837/24)
> - SCM - If the Alternative Unit Price flag is active in the Offer Request, at the time of creating the Supplier Order from Supplier Offer the flag will also be brought into the created order (#TT02804/24)
> - Form Fulfillment: Resolved synchronization between fulfillment generation and refresh fulfillment grid which in some cases returned a null value exception (#TT02661/24)
> - SD - Print order - Corrected anomaly in print destination (#TT02733/24)
> - CRM - reactivated expander in contact search grid (#TT02880/24)
> - PM - improved notifications of overlapping services in interventions (#TT02891/24)
> - Object - SdiPurchaseInvoice - added new properties: CurrencyCode, BaseAmount, VatAmount, TotalAmount (#TT03008/24)
> - Allowed coexistence of an algorithm created with ARM and one of type script.
> - SD - Resumption of commissions for discount range: corrected application of incorrect commission percentage due to rounding of the net line value (#TT02974/24)
> - SCM - Corrected bug that did not display the Code/Description of the Supplier Item in the Detail lines of Orders form when the order was not fulfilled (#TT02344/24)
> - SCM - Expenses with the Allocated flag entered in document summaries are now allocated to the items of the document even when the prices are zero (#TT02336/24)  
> - MES - Corrected bug related to the "Lot Reservation" field of the production order which was not correctly reported in the production declaration (#TT03079/24)
> - MES - Added the defect field in production declarations. This is only enabled after entering a scrapped quantity greater than zero (#TT01887/24)
> - FI - new general parameter to manage the issuance of reminders on closed accounts (#TT02936/24)
> - ARM - reprocess custom scripts when publishing server
> - SD - Grammatical correction of the outgoing warning when there are discounts with the same priority: the wrong word ‘successive’ was corrected to ‘next’ (#TT03073/24)
> - SD - Resumption of Commissions for discount range: if 0 commission lines are defined, they are treated as if they were a valid number even in the case of multiple definition lines for discount range and different commission categories. If the 0 commission is not to be considered, it should not be specified in the definition (#TT02859/24)
> - ELECTRONIC INVOICING SM: Restoring the state from Generated or Rejected to Checked deletes the integration file of the SM purchase invoice, resetting the name file when returned to unexamined (#TT03054/24)
> - SH - Availability Analysis: the check that if the base bill flag is set there is only 1 article was moved when clicking the ribbon button Search (#TT02783/24)

### Patch 705.1-0023 - 21/06/2024
> - SD - Added static method ConvertAllSelectedOffersToSalesOrders for scripts (#TT01258/21)
> - SH - Import excel price lists - Corrected anomalies in the duplication phase and in case of import of customer in item registry (#TT02871/24)
> - FI - in professional fees, revision of the inps charge field of recipients in the first tab in case of manual calculation (#TT02802/24)
> - FI - review of the Control of assets print for the amount of the fund in case of total/partial alienations (#TT02537/24)
> - PM - valuation of interventions, correction made for partial valuation (#TT02739/24)
> - SH - Modified descriptions of records in fixed table “Legal nature”, to differentiate ‘Residents’ from ‘Non-residents’ as per the 770 instructions table (#TT02870/24)

### Patch 705.1-0022 - 20/06/2024
> - MES - Corrected bug in production reports regarding the location of produced and batch-managed items (#TT02667/24)
> - CRM-CrmContact - layout changes (#TT01258/21)
> - SD - in the invoicing statement print, review management of signs in the subreport of totals for sales turnover (#TT02720/24)
> - MS - Corrected error in the processing of MRP that caused the operation to be blocked (#TT02408/24)
> - FI - Missing refresh of the "Search accounts" button in accounting registration - crash (#TT02089/20)
> - CRM - Virtualization enabled for grids of campaigns and distribution lists
> - PM - WBS resource assignment resolved drag&drop on calendar from the second resource onwards (#TT02544/24)
> - WM - Corrected bug in excel export of data present in the report Implosion components that did not report value in the quantity column (#TT02753/24)
> - SD - Corrected loop in the automatic unloading of DDT with only note and uncoded items (#TT03557/24)
> - MES - Corrected bug in the calculation of the cost of articles produced with production declarations (#TT03408/24)
> - SD - In hierarchical Sales Offers when a descriptive line is entered in the Materials tab, it is associated with a line type 2 (#TT03420/24)
> - SCS - In Work Orders, a new parameter was added in the Proposed Materials Data named “From production order” used for recalculation of material quantities. It is automatically set when creating a work order from the external phase of a production order, when releasing a planned production order with external phase and when releasing a planned Work Order. For proposing material data in the Work Order, it is now possible to have a different parameter for each item line (#TT02097/24)
> - WM - Corrected bug in availability analysis (#TT03349/24)


### Patch 705.1-0021 - 13/06/2024
> - MS - Release of planned orders - Incorrect total quantity calculation of material consumption if Order split into multiple batches (#TT01949/24)
> - WMS - Corrected bug in the WMS UDC Management form that proposed a warehouse even if there was more than one associated with that user. Therefore, in case of multiple warehouses, the warehouse is proposed empty and must be selected manually by the user (#TT02639/24)
> - MES - Implemented the management of production sites in the release of planned orders, in production orders and in production declarations (#TT02188/24)
> - FI - aligned behavior of the asset control print that now returns results of all categories if no particular category is selected (#TT02502/24)
> - SD - Corrected error that named the print ‘Turnover’ erroneously as ‘Invoice List’ (#TT02669/24)
> - PR - Incorrect VAT turn due to insolvency (#TT02378/23)
> - WM- Corrected bug in the prototype management that did not correctly display the placeholder flag of items (#TT02679/24)
> - MS - Added error message in the procedure for releasing planned orders in case the planned order to be released is open by another user (#TT02620/24)
> - SD - When converting an offer to an order, all data related to the item line common to both document types is propagated from the offer to the order (#TT02613/24)

### Patch 705.1-0020 - 07/06/2024
> - SH - Grouping algorithms: added order for String property of numbers (#TT02403/24/19)
> - Solved bug with Supervisor global parameters
> - SCS - Rounding for CDC on purchase order, purchase DDT, purchase invoice (#TT02500/24)
> - SCM - The purchase request must be considered executed if all lines are executed, excluding note lines (#TT02389/24).
> - SH - Corrected bugs in Prototype Management, concerning cut and import buttons; also, further improvements were made (#TT01978/24)
> - MS - Corrected error in the visualization of availability in the Automatic Generation of Orders from Shortage procedure (#TT02448/24)
> - PM - Planner correct visualization of certain appointments (#TT02505/24)
> - PM - Planner selecting a new resource in the filter, the calendar automatically updates without having to press search (#TT02539/24)
> - PM - Planner resolved issue of appointment deletion related to project resource that deleted the entire WBS (#TT02504/24)
> - WM - Removed the flag "Unload Lot" in warehouse reasons because obsolete (#TT02465/24)
> - WMS - In the item stock form of the WMS, items with stock equal to zero and locations with quantity equal to zero were hidden (#TT02177/24)

### Patch 705.1-0019 - 31/05/2024
> - WM - Corrected bug in visualization of error during warehouse valuation procedure if these were more than 100,000 (#TT02320/24)
> - SD - Corrected problem in sales documents that did not adequately manage commission in the presence of agents linked to a recipient/destination of the customer and NOT linked to any recipient/destination but simply to the customer (#TT00273/24)
> - MS - Decimal Minutes in working hours of CDL + new validation rules (#TT01592/24)
> - FI - Resolved issue that generated an error closing the Accounts viewing form after sorting on the Registration Date column (#TT02041/24)
> - PR - review of cash flow print for totals beyond the final date (#TT00241/24)
> - SCM - Resolved report during insertion of a new type of purchase invoice (#TT02345/24)
> - FL Browser - Resolved error in fulfillment grids that sometimes did not allow modification of the quantity to be fulfilled (#TT02036/24)
> - FI - Accounting for incoming purchase invoices: revision of the proposed due date within the created accounting registration (#TT01888/24)
> - FI - in the accounts search mask, reactivated the button to update account status (#TT02145/24)
> - FI - the resumption of asset depreciation from the interim closure module now applies, if present, the custom percentage of the asset header preferentially over the category percentage (#TT02070/24)
> - MS - Now, when creating a new item, by default, the "Exclude from MRP" flag present in the MRP parameters is not enabled (#TT02364/24)
> - FI - review of the procedure for transferring payments for pending VAT closure (#TT02398/24)
> - SCM, SCS - When the Alternative Unit Price flag is modified within a purchase invoice that values a Work Order return, it is modified also in the Return and in the related registration, if present. When the flag is modified from within the Work Order return, the amounts are recalculated also in the Warehouse registration (#TT00698/24)

### Patch 705.1-0018 - 23/05/2024
> - SD - Review of maturities for the case of collection of a re-opened claim after an insolvency (#TT02095/24) 
> - CO - Resumption of fixed asset depreciation for interim closures, review of cost center management (#TT02315/24)
> - Release of new print 2024 of the effective report for localization CH
> - SCM - Creation of a new report for supplier orders 'Deadline with alternative UM' with the following properties: dates in European format, Remaining Quantity column, UM column, consideration of UM alternative in price if provided in the document (#TT01802/24)
> - PM - Implemented new planner (#TT00759/24)
> - Resolved bug on payment import from systems (#TT02369/24)
> - ARM - Ribbon Editor: allows the user to view the edit ribbon also in other languages.
> - MS - General planning - Corrected anomaly of date proposal in Planned Orders (#TT02150/24)
> - FI - Webapi import of accounting registrations, review of management of the algorithm of the description movement set in accounting cause (#TT02143/24)
> - PM - Project SAL - corrected calculation of last cost (#TT01750/24)
> - PM - modified SAL codes related to purchase sale invoices. The codes with "not accounting" specified only consider invoices with the accounting flag NOT active, where not specified instead ALL invoices are considered, whether accounted or NOT accounted. Affected codes: PRCC005 - PRCC006 - PRCC007- PRCC008 - SLSP004 - SLSP005 - SLSP006 - SLSP007 (#TT02187/24)
> - Browser - form profiles general fixes - #TT02162/24
> - SD - In the down payment reversal line, the project is now also reported if present in the line item of the down payment invoice (#TT02170/24)
> - CO - internal closures, corrected bug in which the 'integration entries' return incorrect values in cost centers (#TT02319/24)


### Patch 705.1-0017 - 16/05/2024
> - PR - corrected bug that used customer account trzista for external phases in the Work Order instead of the actual supplier (#TT02034/24)
> - SD - Multi-level Offers: entering the Total Revenue in the resource line, the markup percentage is automatically calculated based on hours and total cost (#TT02119/24)
> - FI - revision of the economic due dates assigned to the re-opening records from automatic account closure (#TT01535/24 - #TT01814/24)
> - CO - in the new interim closure, removed the proposal of filters for document dates (#TT01594/24)
> - FI - in account compensation, review management of account filters with respect to the type of compensation, management of decimals in grid fields (#TT02113/24)
> - PM - WBS resource assignment, resolved recurring appointments case (#TT02132/24)
> - MES - In Production Declarations, the detail of the Location was added to the error message due to insufficient stock (#TT02064/24)
> - SCS - In DDT and Return of Work Order, the lot in materials is now automatically proposed if the withdrawal type is FIFO or Deadline (#TT01140/24)
> - SH - In Sales Invoices and in Purchase and Sales DDT is now possible to enter weights with decimal digits (#TT02163/24)
> - SH - Dragging of images: sets the file type of the document as 'JPG' when the file extension is 'JPEG' (#TT02210/24)  
> - SCM - Resolved error that prevented the insertion of a Supplier Order (#TT02181/24)
> - SCM - Resolved bug that did not correctly save a profile in Purchase Requests with the Unfulfilled filter (#TT02123/24)
> - MES - Corrected bug in the Material withdrawal List in case the flag "Associate lot for withdrawal list" present in production parameters was enabled. Now the lot associated with the material in the production order is correctly reported also in the pickings created with the Material withdrawal List (#TT03026/23)
> - WM - Corrected bug in managing UDC in case UDC unloading was executed (#TT02040/24)
> - WM, SCM, SCS, SD- Corrected bug in the formulation of the progressive lot code (#TT02142/24)
> - FI - Intrastat 2, fluentis545 - Error in resuming data from CustomPosting registrations (#TT02243/24)
> - SD - Offer versions correctly visible based on the flag "show all versions" also in the tabs of the workflow states (#TT02228/24)
> - CO - Review of totalization groups in the report of valuation reclassifications, in case of comparisons
> - WM - Corrected bug in availability analysis. Now the quantity of materials present in planned orders, with the unit of measure indicated in the bill, are correct (#TT02227/24)
> - PR - Automatic reconciliation of current accounts, closure of message box to display the ‘Please wait…’ message (#TT02392/24)
> - SD - When in sales area parameters the flag ‘Block document entry on public holidays per factory calendar’ is active the festive date check is carried out first in the Factory Calendar, then in the Productive Capacity Calendar (#TT02396/24)
> - SCS - When an Order of Work is entered for a supplier who has a predefined price list, if the inserted article is not present in the list, the proposed price is zero (#TT02234/24)
> - FI - in accounting registrations, review verification of dimensions of centers in the chart of accounts (#TT02324/24)
> - FI - accounting for purchase invoices, review of rounding in cost centers (#TT02483/24)
> - MES - Corrected bug in production reports that displayed the incorrect UM in the phase quantity field (#TT02459/24)
> - FI - corrected error at rollback of invoice registration related to an asset record (#TT02207/24 - TT02277/24)
> - MES - development of material declarations with location (#TT00577/24)
> - MES - development of web api service for registering production declarations (#TT02440/24)
> - SH/CRM - New properties in CrmContactReference and FSContactReferencePerson (#TT02493/24)
> - "Possibility of choosing "Cause" in item tab for purchase documents (#TT02561/24)

### Patch 705.1-0016 - 09/05/2024
> - FI - revision of resumption of values from registrations for section quater (#TT01985/24)
> - PR - Optimization of Cash Flow from Purchase DDT (#TT01754/24)
> - FI - Adjustment entries: review of detail description in accounting registrations created automatically by the procedure (#TT00503/24)
> - Resolved hidden header problem of scripts on Blazor
> - Resolved JavaScript start issue on Blockly
> - MS - Implemented in availability analysis and planning the management of production sites (#TT01836/24)
> - CO - Review of formula management for controlling (#TT01668/24)
> - SD - Corrected error in duplicating a Customer Order for which the Automatic Project Creation flag is active (#TT02058/24)
> - SH - The Duplicate article procedure also returns the Notes of the preferential Suppliers (#TT01580/24)
> - WM - Corrected bug in the warehouse valuation procedure (#TT02037/24)
> - FI - The accounting from purchases/sales values the province of the intrastat section filtering by country equal to that of the company (#TT02098/24)
> - SCM - In the item navigator grid, the columns related to Code and Variant Description have been added (#TT01890/24)
> - SCM - In the item registry, Suppliers Price List tab, the columns related to Code and Variant Description have been added (#TT01851/24)
> - Fixed "Import XML file" button that was missing in "Incoming purchase documents (#TT02121/24)
> - WMS - Now in the WMS Incoming Goods form, if in the warehouse load/unload parameters for the user is associated a single warehouse for that user, that one is proposed by default; otherwise, if multiple are associated, none is proposed by default and the user can only choose among those entered (#TT01909/24)
> - PM - Project SAL, managed inclusion of costs from sales DDT even in case of the article with sale price at 0 (#TT02018/24)
> - WMS - Now in the WMS Article Loading form, if in warehouse load/unload parameters for the user is associated a single warehouse for that user, that one is proposed by default; otherwise, if multiple are associated, none is proposed by default and the user can only choose among those entered (#TT01892/24)
> - WMS - Now in the WMS Article Unloading form, if in warehouse load/unload parameters for the user is associated a single warehouse for that user, that one is proposed by default; otherwise, if multiple are associated, none is proposed by default and the user can only choose among those entered (#TT01893/24)
> - WMS - Now in the WMS Article Move form, if in warehouse load/unload parameters for the user is associated a single warehouse for that user, that one is proposed by default; otherwise, if multiple are associated, none is proposed by default and the user can only choose among those entered (#TT01894/24)
> - WMS - Now in the WMS Article Adjustment form, if in warehouse load/unload parameters for the user is associated a single warehouse for that user, that one is proposed by default; otherwise, if multiple are associated, none is proposed by default and the user can only choose among those entered (#TT01895/24)
> - WMS - Now in the WMS Item Stock form, if in warehouse load/unload parameters for the user is associated a single warehouse for that user, that one is proposed by default; otherwise, if multiple are associated, none is proposed by default and the user can only choose among those entered (#TT01896/24)
> - WMS - Now in the UDC Picking List form of the WMS, if in warehouse load/unload parameters for the user is associated a single warehouse for that user, that one is proposed by default; otherwise, if multiple are associated, none is proposed by default and the user can only choose among those entered (#TT01905/24)
> - WMS - Now in the UDC Transfer List form of the WMS, if in warehouse load/unload parameters for the user is associated a single warehouse for that user, that one is proposed by default; otherwise, if multiple are associated, none is proposed by default and the user can only choose among those entered (#TT01906/24)
> - FI - registration of payment/receivable in foreign currency, if the payments are of the same currency as the head registration and there are no manual lines then the total document in currency corresponds to the closed value in currency. If there are payments in other currencies and/or manual lines, instead, the total in currency will be the calculation of the currency countervalue of the total debit/credit in company currency (#TT01703/24)
> - SD - In the creation of the Sdi file on invoices/credit notes in currency, revision of rounding management (#TT1703/24 - #TT02135/24)
> - Fixed transfer of note-type items in purchase DDT with fulfillment from Supplier orders (#TT02130/24)
> - WM - Corrected bug in batches registry that did not correctly visualize decimals (#TT02055/24)
> - SD - Release note: SD - In the Conversion from Offer to Order, the final item discounts entered in the Offer are reported in the item lines of the Order (#TT02103/24)


### Patch 705.1-0015 - 30/04/2024
> - SD – The check on the Ready Goods Date, which must be less than or equal to the Delivery Date, has been inserted also in the Header of the Customer Order (#TT01711/24)
> - Browser - fix bindings not working anymore after 'new' in an object form (TT01885/24)
> - Fix Blazor Contact-grid Item-client layout problem (#TT01258/21)
> - FI - Removed the flags of non-payable invoices from the supplier payment creation forms, automatic supplier payments, payment tab of the payment accounting registration, account compensations. (#TT01701/24)
> - WMS - In the management check and Confirm picking forms of the WMS, reviewed the stock proposal in the case where the item's lot was already entered in the picking. (#TT01435/24)
> - New layout for tiles
> - Add pivot viewer to dashboards
> - SH - Import webApi - Fix propose FormattedNumber (#TT02622/23)
> - Browser – fix column order when saving profiles (TT01946/24)
> - Solved layout bugs on Blazor-Supervisor & BizLink 
> - SH - New warning message if setting the registry of a natural person does not fill in the name and surname and new error message generating the electronic invoice file without these data. (#TT01700/24)
> - PM - Fix null error on project details report (#TT01087/24)
> - Fluentis Browser - MS - Scheduled Orders Filter – bug fix - Grid rows color are missing (#TT01826/24)
> - Fluentis Browser - MES – bug fix - tabulator "Documents and Operating Instructions" the right area disappear (#TT01970/24)
> - PR - review of data recovery from work return in cash flow (#TT01934/24)
> - FI - quarterly VAT communication, 2024 alignment (TT01141/24)
> - SCM – Corrected error that prevented the editing of Editions in the Pharma (#TT01753/24)
> - PM - the value of the extra project data is loaded into the search form grid (#TT01740/24)
> - PM – Resolved issue in “Project detail print” that did not report accounting entries linked only to the project header and not to items. (#TT01087/24)
> - FI - Cost center from delivery notes not visible in general ledger posting & Movement analysis for cost centers report (TT01521/24)
> - SH - Alternative addresses: review saving of name and surname fields within alternative addresses (TT01794/24)
> - Fluentis Browser - MES - Work Sheet – bug fix - Expander "Sorting" is blinking (#TT01968/24)
> - FL Browser – MS - working shift error in detail delete (#TT01673/24)
> - Removed tabs on Script Editor


### Patch 705.1-0014 - 29/04/2024
> - FI - Resolved rounding error when creating a registration from a sales invoice with another currency and when VAT is not equal to 0.
> - SH - Fluentis Browser - resolved problems on the Document tab of item help (#TT01258/21)
> - WM - Fluentis Browser - resolved general problems on batches (#TT01258/21)
> - SD - Fluentis Browser - resolved selection problems on grids (#TT01258/21)
> - PR - review of cash flow calculation from work orders (#TT01609/24)
> - FI - Review of accounting of professional payments for payment number/accounts and grouping by subaccount (#TT01285/24)
> - FI - Review of calculation of accounts for foreign purchase invoices without VAT movement (#TT02800/23)
> - FI - Fluentis Browser - Corrected the problem of automatic creation of agent settlement layout (#TT01258/21)
> - MES - Fluentis Browser - Solved bug in uploads (#TT01874/24)
> - QY - Fluentis Browser - Added missing items on the Measurement Tool (#TT01882/24)
> - MES - Fluentis Browser - Added non-visible fields on Production Orders (#TT01655/24)
> - MES - Fluentis Browser - Added vertical scrollbar on Automatic Generation Capacity Calendar (#TT01652/24)
> - MES - Fluentis Browser - "Job costing type" in Document type is not canceled if I change the "Standard code" (#TT01741/24)
> - SD - Fluentis Browser - resolved various errors on selection in documents (#TT01258/21)
> - SD - Fluentis Browser - Resolved layout problems in Creating DDT from Picking (#TT01258/21)
> - WM-Fluentis Browser - resolved general localization problems (#TT01258/21)
> - PM - Fluentis Browser - optimized WBS assignment of projects (#TT01784/24)
> - CO - Fluentis Browser - Resolved issues in the cancellation of annual Sales (#TT01258/21)
> - FI - review of VAT liquidation for Croatian localization (#TT03562/23)
> - FI - review of agent commission management in accounting, for partial collections and for accounting invoices with a total of 0 (#TT01822/24)
> - FI - review final print of periodic VAT liquidation January for saving prior year credit/prior period credit (#TT01160/24)
> - WM - Fluentis Browser - Optimized Protoypes layout (#TT01529/24)


### Patch 705.1-0013 - 24/04/2024
> - SH - Corrected error in Availability Analysis that appeared when warehouses and reasons were not entered in the Production Orders Parameters (#TT01765/24)
> - PM - Managed export to excel of calculated fields in the SAL grid (#TT01433/24)
> - SD - If the client is a natural person without filled name/surname, the Sdi file is populated in the Name tag with the customer company name. If either only the name or surname is missing, the creation of the file is blocked (#TT01700/24)
> - FI - fast compensation, review of the procedure for closing commissions associated with the accounts (#TT01664/24)
> - FI - Fluentis Browser - Corrected validation errors in the chart of accounts (#TT01464/24)
> - SH - Optimized DataSource display.
> - SD - The search is based on priority even in the case of multiple lines for the same type of commission (#TT1695/24)
> - MS - Fluentis Browser - MS - F.C.S. - Review of the layout of FCS parameters in the tab (#TT01827/24)
> - MES - Fluentis Browser - MES - Production resource filter - Added missing ribbon in the popup module "Import" (#TT01764/24)
> - MES - Fluentis Browser - MES - Worksheet - Resolved bug on multiple sorting (#TT01873/24)
> - SH - Fluentis Browser - Corrected the filter line of the tree view list that does not work as expected (#TT01845/24)
> - SD - Corrected error that did not populate the ‘Conai Materials for the article’ in credit notes (#TT01841/24)
> - PM - WEB improvements made to planner in the web area (#TT01782/24)
> - SH - WebApi - Corrected search on property references that start with the same name
> - Fi - WebApi - Corrected import of records with VatReferenceNumber

### Patch 705.1-0012 - 23/04/2024
> - ARM - Possibility to include Ribbon solution snapshots (#TT02656/23)
> - MES - Browser - bug fix for Resource Usage Control - Layout review & Localization (#TT01720/24)
> - CPM - Browser - cost center unit of measurement, duplication module was not displaying correctly (#TT01675/24)
> - SH - Resolved issues closing Sales parameters (#TT01258/21)
> - MES - Fluentis Browser - Active Flag bug fix for Equipment (#TT01651/24)
> - MES - Browser - Active Flag bug fix for Tools (#TT01742/24)
> - SH - Fluentis Browser - Dashboard705V1 (dashboard) (#TT01471/24)
> - CRM - Fluentis Browser - resolution of general issues (#TT01509/24)
> - FI - quarterly VAT communication, 2024 alignment (#TT01141/24)
> - SH - Fluentis Browser - Corrected visual alignment of tree structure cells (#TT01845/24)
> - SCM - Corrected error that proposed the same 'Supplier Item Description' in the 'Order fulfillment' procedure for all preferential suppliers of the item (#TT01501/24)

### Patch 705.1-0011 - 22/04/2024
> - SD - Fix Blazor Crm Tickets- quantities sum problem (TT1258/21)
> - WM - Corrected error that did not allow the generation of a DDT from the UDC Withdrawal List (#TT01595/24)
> - FI - New posting from previous new posting not saved (#TT01832/24 and #TT01611/24)
> - MS - browser - bug fix for Release of planned orders pop-up Summary - (#TT01630/24)
> - MS - bug fix for deleting lines in Work Shifts (TT01673/24) 
> - Browser - improved dataGrid keyboard navigation (TT01504/24)
> - Browser - prevent spin edit increment from arrows (TT01537/24)
> - Browser - fix dataGrid not saving column changes in profiles (TT01739/24)
> - SH - propose export filename from print preview if the document has the "ReportAttachFileName" transformation (TT00837/24)
> - Browser - fix tab/enter not selecting the focused row in the dropdown sometimes (TT01508/24)
> - SCM - If a purchase document is already loaded, it is not possible to change the lot code (#TT01712/24)
> - SD - Fix Blazor Sales Carrier- Help Contact problem (TT1258/21)
> - PM - Project SAL, allowed drag&drop of fields from the object
> - SCM/SCS - Fix Blazor Carrier- Help Contact problem
> - MS - browser - bug fix for Factory Calendar, Productive Capacity Calendar (TT01524/24)
> - MES - browser - bug fix for displaying tabs Production Resource (TT01766/24)
> - SD - Corrected the display of Fulfillment Diagrams for documents containing only item lines of type 2 (#TT01445/24)
> - MES - browser - bug fix in the Worksheet - disables row deletion (TT01719/24)
> - CO - Browser - lower grid for cost center link to projects, all columns are active (TT01671/24)
> - CO - Browser - controlling formulas (TT01668/24)

### Patch 705.1-0010 - 19/04/2024
> - SCM - purchase invoice accrual data management for RO version
> - SD - Fix Blazor Crm Tickets- view mode problems (TT01258/21)
> - MS - FL Browser: Production orders generation (TT01543/24)
> - MS - FL Browser: Production Order (#TT01614/24)
> - ARM - Fix standard Diagrams saved as custom (#TT01751/24)
> - Browser - tree control fixes for edit row (#TT01670/24)
> - Browser - data controls exception fixes
> - Browser - CPM issues (one is also in WPF) (TT01685/24)
> - Browser - VAT settlement printed in definitive, Blazor is allowing me to change VAT code while WPF (correctly) not (TT01631/24)
> - SD - Corrected error in Movement Details that displayed some quantities with incorrect sign (#TT01546/24)

### Patch 705.1-0009 - 18/04/2024
> - FI - fix error on recalculate automatic registration
> - Fixed missing reference for BlazorApp
> - SD - Fix Blazor LoadPlan-insert order problem (TT01258/21)
> - FI - automatic registration related to the environmental tax - RO version (TT01749/24)
> - SD - Fix Contact-operation Calculation Discount problem (TT01258/21)
> - FL Browser: dashboard menu doesn't open and home doesn't display anything (#TT01612/24)
> - Browser - definitive printing (journal, VAT settlement, VAT registry) is not running updates 'after process' (#TT01566/24)
> - SD - Fix SalesOrder status problem (TT01258/21)
> - PM - Webapi importazione dichiarazione attività, corretta gestione campo TotalTime e valori inizio-fine pausa (#TT01627/24)
> - FL Browser: dynamic filter expression cannot be used (#TT01637/24)
> - FL Browser - Fix colors in Phase sequence. (#TT01632/24)
> - FL Browser: Pianificazione Parte 2. (#TT01614/24)
> - FL Browser: Pianificazione parte 1. (#TT01531/24)
> - SD - Fix Blazor SalesForecast - DataRetrieve problems (TT01258/21)
> - Fluentis Browser - MES - Bug fix in Declarations Record (TT01757/24)
> - Fluentis Browser - MES - Ribbon fix in Production Declarations (TT01759/24)
> - FL BROWSER - Blazor - Certificazione unica (TT00965/24)
> - Fluentis Browser - MES - Recalculate dates fix (TT01656/24)
> - SD - Fix FL Browser - hierarchical sales offer converted to an order and project, doesn't insert material and resources in the sales order (TT01777/24)
> - FI - in the accounting registration, blocked the possibility of modifying payment lines resulting from accounting payments, must perform the rollback and modify the payment amount in the accounting procedure. (#TT00909/24)
> - FI - Browser - posting template, VAT accrual date combo is not opening (TT01659/24)
> - FI - Note of release: the filter date of the Balance Viewing now relies on the economic due date of the header and no longer on the registration date (#TT01243/24)
> - SD - Fix FL Browser: same offer opened in edit mode in browser + WPF at the same time (TT01778/24)
> - FI - calculation of total payment commissions in USD currency (TT01696/24)
> - Solved bug to create script client side for namespace different form FluentisErp
> - SD - Fix Blazor Contact client-tab Delivery (TT01258/21)
> - SD - Fix wrong dictionary link for procedure grouping (TT01258/21)
> - FI - Align Maturity in other currency when there are differences with Postingledger (TT01805/24)
> - CO - Browser - new recordings inside Internal closure, or manual area recordings (TT01536/24)
> - SH - Fluentis Query Studio for Blazor (TT00907/24)


### Patch 705.1-0008 - 16/04/2024
> - SD - Fix FL Browser: Generazione commesse di produzione(ticket TT01543/24)
> - SD - Fix FL Browser: Logistica parte 2(ticket TT01511/24)
> - Browser - fix filter row for references in read-write filter result data grids
> - WM - FL Browser: Pianificazione parte 1 (#TT01531/24)
> - MS - FL Browser: Generazione commesse di produzione (TT01543/24)
> - SD - Fix Blazor SalesPriceList Creation-decimals error (TT01258/21)
> - PM - corretto filtro progetti di tipo template nella conversione offerta in ordine e progetto (#TT01479/24)
> - WM - Inventario a quantità valorizzato - Corretta anomalia sul ‘Valore unitario’, proposto nel report di ‘Stampa inventario’, se richiesta la ‘Valorizzazione a Costo medio’ e ‘Valorizza a magazzino’ presente nei ‘Parametri iniziali magazzino’. (#TT01690/24)
> - Browser - fix ‘%’ symbol not working as intended in filter rows (#TT01626/24)
> - Browser - fix references not being saved in read-write filter results	
> - SD - Fix Blazor SalesPriceListRounding problems (TT01258/21)
> - FI - Browser - simulation of fixed asset depreciations, missing column in grid (#TT01591/24)
> - SCM - Corrected error in updating amounts in warehouse movements in the presence of a shared expense in the DDT or in the Purchase Invoice (#TT00794/24).
> - PR - Lock manager shows all document records from all companies (TT01593/24)