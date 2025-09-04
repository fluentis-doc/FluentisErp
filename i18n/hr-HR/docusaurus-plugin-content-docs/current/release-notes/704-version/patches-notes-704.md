---
title: Patch notes version 704
sidebar_position: 1
---


### Patch 704.1-0031 - 05/16/2024
> - PR - fixed a bug that used the customer account in the cash flow for external phases in the work order instead of the actual supplier (#TT02034/24)
> - FI - revised the economic competence dates assigned to the reopening of adjustments from the automatic account closure (#TT01535/24 - #TT01814/24)
> - FI - in the offsetting of items, revised management of item filters based on the type of offsetting, management of decimals in grid fields (#TT02113/24)
> - SH - Image dragging: set the document file type as 'JPG' when the file extension is 'JPEG' (#TT02210/24)
> - SD - Offer versions visible correctly based on the "display all versions" flag even in the workflow state tabs (#TT02228/24)

### Patch 704.1-0030 - 05/09/2024
> - WMS - In the transfer list form UDC, the status of the list has been added both as a filter and as a column in the results grid (#TT03338/23, #TT02030/24)
> - SCM - In the item registry, tab Supplier Price Lists, columns related to Code and Description variant have been added (#TT01851/24)
> - SCM - In the article navigator grid, columns related to Code and Description variant have been added (#TT01890/24)
> - WMS - Now in the WMS Goods Receipt form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01909/24)
> - WMS - Now in the WMS Item Load form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01892/24)
> - WMS - Now in the WMS Item Unload form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01893/24)
> - WMS - Now in the WMS Move Item form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01894/24)
> - WMS - Now in the WMS Article Adjustment form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01895/24)
> - WMS - Now in the WMS Item Inventory form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01896/24)
> - WMS - Now in the WMS UDC Picking Lists form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01905/24)
> - WMS - Now in the WMS UDC Management form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01906/24)
> - WMS - Now in the WMS UDC Transfer Lists form, if in the user loading/unloading warehouse parameters a single warehouse is associated for that user, it will be proposed by default; otherwise, if multiple are associated, none will be proposed by default and the user can only choose from those listed (#TT01903/24)
> - FI - recording of payment/collection in foreign currency, if the payments are of the same currency as the registration header and there are no manual lines, then the total of the document in currency corresponds to the closed currency value. If there are payments in other currencies and/or manual lines, the total in currency will be the calculation of the currency countervalue of the total debit/credit in corporate currency (#TT1703/24)
> - SD - In the creation of the Sdi file on invoices/credit notes in currency, revised management of rounding (#TT1703/24 - #TT02135/24)

### Patch 704.1-0029 - 05/06/2024
> - SH - New warning message if setting the registry of a natural person without filling in the first name and surname and new error message when generating the electronic invoice file without this data (#TT01700/24)
> - PR - Revision of data recovery from work returns in the cash flow (#TT01934/24)
> - PM - The value of extra data from the project is loaded in the search form grid (#TT01740/24)
> - PM - Resolved the case in “Project Detail Print” that did not report accounting entries linked only to the project header and not to the items (#TT01087/24)
> - FI - Cost center from delivery notes not visible in general ledger posting & Movement analysis for cost centers report (#TT01521/24)
> - SH - Alternative addresses: revised saving of the first name and surname fields within alternative addresses (#TT01794/24)
> - FI - Revised retrieval of values from records for section four (#TT01985/24)
> - PR - Optimization of Cash Flow from Purchase DDT (#TT01754/24)
> - FI - Adjustment entries: revised detail description in accounting records automatically created by the process (#TT00503/24)

### Patch 704.1-0028 - 04/29/2024
> - SD - Corrected error in Movement Details that displayed some quantities with the wrong sign (#TT01546/24)
> - ARM - Forms Wizard - Replaced fluentis: BaseView with fluentis: ViewModelResolver.
> - WM - Corrected error that prevented the generation of a DDT from the UDC Picking List (#TT01595/24)
> - Resolved the error of creating client-side scripts for a namespace different from FluentisErp.
> - SH - The export file name is proposed in the print preview if the document has the transformation “ReportAttachFileName” (#TT00837/24)
> - SCM - If a purchase document is already loaded, it is not possible to change the lot code (#TT01712/24)
> - PM - Project SAL, drag&drop of fields from the object has been made possible
> - SCM - Corrected error that proposed the same 'Supplier Item Description' in the 'Order Fulfillment' procedure for all preferential suppliers of the item (#TT01501/24)
> - SH - Corrected error in Availability Analysis that appeared when warehouses and reasons were not entered in the Production Orders Parameters (#TT01765/24)
> - PM - Managed Excel export of calculated fields in the SAL grid (#TT01433/24)
> - SD - The search occurs based on priority even in the case of multiple lines for the same type of commission (#TT01695/24)
> - SD - Corrected error that did not populate the ‘Conai Materials for the item’ in credit notes (#TT01841/24)
> - PR - revised cash flow calculation from work orders (#TT01609/24)
> - FI - Revised calculation of items for foreign acquisition invoices without VAT movement (#TT02800/23)
> - FI - Revised VAT liquidation for Croatian localization (#TT03562/23)
> - FI - Revised management of agent commissions in accounting, for partial collections and for accounting invoices with a total of 0 (#TT01822/24)
> - FI - Revised definitive printout of periodic VAT liquidation for saving prior year credit/prior period credit (#TT01160/24)

### Patch 704.1-0027 - 04/18/2024
> - ARM -  Work unit - correction of the error during the update of WebApi models when there is only a read-only object
> - MES - Implemented in the material picking list the management of remaining quantity (#TT00836/24)
> - SD - Blocked import of sales invoices through Web Api for invoices downloaded, posted, or sent to the electronic invoicing system (#TT01578/24)
> - PM - improved expense management from purchase invoices in project SAL (#TT01366/24)
> - SCM, SCS - Within Purchase and Work Order documents, it is now possible to insert a carrier (#TT01132/24)
> - SD, SCS, WM - Within Sales documents, Work Order Slips, and Picking it is now possible to insert a carrier (#TT01132/24)
> - WM - Valued quantity inventory - Corrected anomaly on ‘Unit Value’, proposed in the ‘Inventory Print’ report, when ‘Valuation at Average Cost’ and ‘Value at Warehouse’ in ‘Initial Warehouse Parameters’ is requested (#TT01690/24)
> - FI - automatic registration related to the environmental tax - RO version (#TT01749/24)
> - PM - Web API import of activity declaration, corrected management of TotalTime field and start-end pause values (#TT01627/24)

### Patch 704.1-0026 - 04/11/2024

> - FI - revised filter for division in the Sub-Account print executed from the ‘Account Viewing’ form (#TT01394/24)
> - WM - Corrected title of the Lot Traceability form (#TT01415/24)
> - SD - Allowed modification of the economic competence date range in sales invoices with Sdi files created but not posted (#TT01038/24)
> - SD - Blocked recalculation to zero of the commission percentage on lines fulfilled from OC, in case of discount range and commission category filter (#TT01310/24)
> - SD - Insertion of a new pop-up warning in case an invoice type without split payment (thus without an associated accounting cause that has movement type ‘29’) is entered and a customer that, instead, manages split payment (#TT01237/24)
> - MS - Added an error message in MRP if the item was of production but did not have a bill of materials (#TT01414/24)
> - WM - Translated the title of the Lot Traceability print
> - CO - Corrected bug that did not refresh the form correctly by selecting a node of the reclassification model to insert the linked sub-accounts. Improved user warning message for account types (#TT01367/24)
> - FI - Association of XML files to recipients: revised the proposal of only files in the ‘unassigned’ status (#TT01317/24)
> - PR - Corrected bug that in the phase of creating RiBa from invoices in the case of an invoice and a credit note to be merged summed instead of subtracting the NC (#TT00897/24)
> - Corrected the white label for tabs and widgets when the theme is Office2019Colorful (#TT00980/24)
> - SCM - At the time of creating a purchase invoice from the XML file, the price is imported into the invoice with the Manual Price flag active and without taking internal discounts (#TT01227/24)
> - PM - SAL resolved abnormality in mass processing (#TT01439/24)
> - WM - Corrected bug in availability analysis that did not show values correctly in the fields: Linked customer order and customer order quantity (#TT01062/24)
> - PM - Project SAL, added PRCC008 code Extra Costs from Expenses in Purchase Invoices considering all, both posted and not (#TT01385/24)
> - PM - Project SAL inserted new PRCC007 code - Costs from Purchase Invoices (#TT01279/24)
> - PM - Project SAL in detail lines added item and description from the document line (#TT01278/24)
> - FI - revised activation of management buttons within the intrastat (#TT01232/24)

### Patch 704.1-0025 - 04/04/2024

> - QY - Corrected bug that did not display Workflows in the Batch Records form (#TT01165/24)
> - SCM - In the Supplier Orders aging report, Dates have been changed to European format, and Prices to two decimals (#TT01051/24)
> - MS - Corrected bug in general scheduling in case scheduled jobs were rescheduled already in launched/executive status (#TT00158/24)
> - Resolved Bug in Excel import code when using special characters.
> - PR - resolved bug in the liquidity management form that did not correctly update the Progress field when excluding and hiding flags changed (#TT00435/24)
> - fast start CH revision (#TT00489/24)
> - PM - corrections in scheduling insertion of appointments related to planned interventions and service requests. Improved management of date/time/resource move/change (#TT00144/24)
> - SCM - In the tree grid of the Order Fulfillment mask opened from DDT, the Property ‘Line Number’ can be dragged from Object Navigator and saved with the Profile (#TT01044/24)
> - SD - The insertion of an item within a Sales Invoice using the Article Help now correctly returns the class (#TT01213/24)
> - PR - corrected bug in the deadline calculation of the cash flow on work orders (#TT01203/24)
> - PM - Processing project SAL of multiple projects at the same time, resolved cases of incorrect calculations (#TT01325/24)
> - Released LIPE print for the year 2024
> - FI - corrected bug in the verification print of the declaration of intent when the invoice contained final expenses linked to the declaration of intent, their value was not correctly reflected in the registered column and remained in the invoiced column (#TT01311/24)
> - SD - Collection expenses are automatically subject to the main VAT of the document (#TT00511/24)
> - PM - Processing project SAL of multiple projects at the same time, resolved cases of incorrect calculations (#TT01325/24)

### Patch 704.1-0024 - 03/28/2024

> - QY - Corrected bug that did not display Workflows in the Batch Records form (#TT01165/24)
> - SCM - In the Supplier Orders aging print, Dates have been changed to European format, and Prices to two decimals (#TT01051/24)
> - MS - Corrected bug in general scheduling in case scheduled jobs were rescheduled already in launched/executive status (#TT00158/24)
> - Resolved Bug in the Excel import code when using special characters.
> - PR - resolved bug in the liquidity management form that did not correctly update the Progress field when excluding and hiding flags changed (#TT00435/24)
> - Resolved the issue of executing activity with missing parameters in SqlQuery
> - fast start CH revision (#TT00489/24)
> - PM - corrections in scheduling insertion of appointments related to planned interventions and service requests. Improved management of date/time/resource move/change (#TT00144/24)
> - SCM - In the tree grid of the Order Fulfillment mask opened from DDT, the Property ‘Line Number’ can be dragged from Object Navigator and saved with the Profile (#TT01044/24)

### Patch 704.1-0023 - 03/21/2024

> - MS - Corrected errors in the Costing process of production Jobs and in the Costing Job print (#TT00497/24)
> - MS - Corrected bug that caused the loss of reference to the project line following a restoration of the production order (#TT01014/24)
> - MES - Corrected bug in Production Reports that did not recognize the correct chronological order of reports when they were entered at the same time (#TT00985/24)
> - SD - Automatic accounting of sales invoices: revised the automatic accounting procedure of credit notes with non-VAT movement type (#TT00666/24)
> - MS - Corrected bug in general scheduling in case the parameters were set to automatic release of planned orders (#TT01148/24)
> - ARM - The user is prompted to select which Business Object to extend if more objects are connected to the same table.
> - MES - Corrected bug that caused a temporary lock of the application in case of production declarations with numerous reports for phase (#TT00946/24)
> - MES - Corrected bug in Production Declarations that did not update machine time and human time when executing the Time Recalculation process (#TT01017/24)
> - FI - VAT CREDIT on the file for the LIPE also takes into account the non-deductible VAT from pro-rata (#TT01596/23)
> - MES - In the material picking list, the table of materials has been added with the conditional formatting function (#TT01159/24)
> - CO - in the project consolidated print, revised filter for project type (#TT01172/24)
> - SCM - Corrected bug in the Automatic Supplier Orders Creation procedure from Customer Order that did not correctly calculate quantities in the Order Fulfillment procedure in DDT when the supplier order quantities were modified in the prototype (#TT01199/24)

### Patch 704.1-0022 - 03/15/2024

> - SH - WebApi - Resolved issue with contact reference to account import when the operation type is not specified
> - SD - implemented web API for importing sales invoices (#TT002622/23)
> - Valuation of order, slip, and work account number and date references (#TT001036/24)
> - SH - Corrected the error opening the contact from the Freelance menu (#TT01072/24)
> - MS - Corrected bug in total cost calculations of processing in the costing of the job (#TT02545/23)
> - Resolved the issue in filtering the value of the combo within the Excel import with a fixed value.
> - ARM - Managed the automatic renaming of extension tables.

### Patch 704.1-0021 - 03/08/2024

> - SD - Following a modification of Sales Turnover within a Sales DDT, the Date and User of the last Modification in the linked Customer Order header are no longer updated (#TT00308/24)
> - FI - Intrastat export customs section and negative value in summary if inserted in quinquies section (#TT00580/24)
> - SCM - Corrected error in the procedure of Automatic Supplier Order Creation from Customer Order that no longer reported the order quantity in the Prototype, following a supplier change (#TT00777/24)
> - PR - Profile in customer exposure (#TT00853/24)
> - Resolved the issue of importing references with a Null value and the multiple search on Intercompany
> - CO - depreciation calculations for controlling, revised processing for initial data (#TT00477/24)

### Patch 704.1-0020 - 03/05/2024

> - SD - Correction of the error requiring a tiered discount in case of entering the Mask in a new Rounding (#TT00756/24)
> - SD - Following the Conversion of an Offer into Customer Order, the value of the alternative quantity is also included if present in the Offer (#TT00779/24)
> - WMS - In the item inventory form of the WMS, a new column has been added for the display of totals.
The columns referring to stock are three: Stock (Gest.), Stock, and Stock(FC) (FC = Conversion factor).
In the case of using the *UM Def. WMS* (present in the Alternative unit of measure tab of the item registry), the first is populated with the item's main unit of measure, the second is populated with the stock expressed in the alternative unit of measure of the item and given by the sum of movements, while the third is given by the stock expressed in the alternative unit of measure but calculated with the conversion factor.
In the case where the *UM Def. WMS* flag is not enabled, the *Stock* and *Stock(FC)* columns will not be populated (#TT00446/24)
> - CRM - It is possible to delete CRM Contact References if they have no links (#TT00748/24)
> - SD - In Sales Offers, the item price is no longer zeroed following a change in quantity (#TT00861/24)
> - FI - map new field CustomSection on FSIntrastatDetail (#TT00729/24)
> - SD - initialized list of values for Cost origin type for materials in offers, used for databases updated from F2021 to F2023 (#TT00593/24)
> - SH - revised fast start for CH localization
> - SD - Optimized the ability to insert new items into voluminous price lists (#TT02980/23)
> - SD - Resolved error that prevented the insertion of new lines in the sales invoice table (#TT00329/24)
> - SCM - Corrected error in compiling discounts in Work Order price lists (#TT00227/24)

### Patch 704.1-0019 - 02/29/2024

> - FI - In the case of creating a Sales Invoice from an Advance Payment Item, the deadlines are created with the Manual flag (#TT00672/24)
> - MES - Corrected bug in production declarations (#TT00702/24)
> - SCM - Corrected error in fulfilling a slip in an invoice with a VAT-inclusive price (#TT00220/24)
> - ARM - Added a message to enable registration if the start of the custom pool fails after publishing (#TT00676/24)
> - SD - For agents with payment made or maturity reached, the printout of accrued commissions and the automatic creation of commission liquidation now consider accrued commissions entered in a zero invoice if within the document there is a cancellation of the advance related to an collected advance (#TT00620/24)
> - SD - Resolved zeroing of unit price at parent level when inserting new child nodes (#TT00735/24)
> - WMS - Added the flag "Keep location" in the table of "Inventory List Types". This ensures that during inventory with the WMS, the entered location will not be changed until another location is read (#TT00726/24)
> - WMS - In the UDC transfer list form of the WMS, the UDC Detail tab will only be enabled after all header data has been entered (#TT03336/23)
> - FI/CO/SH - in VAT rates, added a new flag to identify foreign sales rates that load the ceiling for the subsequent period (#TT00343/24)
> - MS - Corrected bug in production job charts (#TT00790/24)
> - WMS - Corrected bug in UDC forms that did not correctly display the status of the picking and transfer lists in WMS (#TT00792/24)
> - SD - Following the Conversion of an Offer into Customer Order, the Net Weight and Gross Weight data are also reported, if present in the Offer (#TT00746/24)

### Patch 704.1-0018 - 02/22/2024

> - WMS - Corrected bug in the inventory filter form (#TT00605/24)
> - MES - Improved the functionality of "Batch Generation" present in the production orders filter. Now the origin batch quantity cannot be changed if picking lists, production declarations have already been created, or if some materials have already been consumed. In these cases, new production batches can still be created, but the quantity of the origin batch cannot be varied (#TT00353/24)
> - PM - Procedure for updating project prices and related documents, corrected conversion between different units of measure (#TT03661/23)
> - Forced recompilation of the script if the project is null but has already been released
> - SH - developed webapi controller GeneralReadWritePublicController for importing customer/supplier records (# TT00619/24)
> - WM - Implemented availability analysis procedure in the management of work orders (#TT00350/24)
> - WM - Corrected bug in availability analysis procedure in management of work orders (#TT00190/24)
> - SH - Correction of the error that did not maintain changes in the Profile if set as default, in the Fluentis Activity module (#TT00592/24)
> - SCS - The work order generated from a production order with an external phase now retrieves the price from the Work Order price list even when only the item is present in the list, without the phase (#TT00439/24)
> - CO - Depreciations for controlling, table CO_DepreciationYearStartings replicating rows + wrong values (#TT00477/24)
> - WM - Corrected error in the conversion of alternative quantity from a Work Order Return, in the Movements Detail form (#TT00517/24)
> - WM - Corrected bug in the calculation of inventory differences, in case the alternative unit of measure is set in the inventory list (#TT00366/24)
> - WMS - Corrected bug in the WMS inventory form, where in the case where lists were managed with Alternative UM, the data of the Managed UM calculated with the conversion factor did not respect the expected decimals from the unit of measure (#TT00675/24)
> - WM - In the procedures for Creating a batch from a batch and Creating a batch from a batch with article change, the Object Navigator presents the FSItemStockSummary object (#TT00650/24)
> - MES - Corrected bug in recording production declarations with alternative items present (#TT00649/24)
> - WM - Corrected error in updating Average Cost and Last Cost procedures (#TT00585/24)

### Patch 704.1-0017 - 02/16/2024

> - ARM - revision saving new BPMN elements (#TT00486/24)
> - PM - Created WEBAPI for importing project activities (#TT00400/24)
> - SD - Conversion of offer to order, hidden option "report materials/resources from offer lines as order lines" if the offer type does not enable the "hierarchical" option (#TT00276/24)
> - WM - Corrected display of Inventory Print with valued quantity (#TT00455/24)
> - Resolved the bug of recursive properties on Blockly contextual variables
> - FI - release of the webapi controller AccountingReadWritePublicController
> - BI - Corrected the transition to the next widget in filter modules when Enter is pressed (#TT00569/24)
> - WEBAPI: resolved the anomaly related to setting the ResidualQuantity of purchase and sales slips for rows with quantity 1 (#TT00480/24)
> - MES - Corrected bug in the display of batches and serial numbers in Production Declarations (#TT00487/24)
> - WM - Corrected display of Warehouse Movements for items with Alternative Unit of Measure (#TT00531/24)
> - WM - Corrected bug in the Backorder management of management prints that did not correctly calculate the reorder quantity (#TT00481/24)
> - WEBAPI: resolved the anomaly related to setting the ResidualQuantity of purchase and sales slips for rows with quantity 1 (##TT00479/24)
> - SCS - If in the Work Order Parameters the flag ‘Consider warehouses based on the return DDT type’ is set, when fulfilling an Order, the warehouse is searched with the following priorities: first in the DDT Type; then in the Order; then in the Work Order Parameters. If the Parameter is not active, the priorities are as follows: first in the Order, then in the Parameters (#TT00558/24)
> - SCM - Corrected bug in the procedure for creating a Supplier Price List in the Fluentis browser (#TT03643/23)
> - WMS - Corrected bug in managing checkmarks in case a checkmark linked to a movement with a counterparty is deleted (#TT00532/24)
> - FI - revised printout of periodic VAT liquidation, showing the subreport of the ceiling only if it has the default flag
> - PM: Project with WBS structure, allowed insertion of notes type children at coded/non-coded parent levels (#TT00243/24)
> - FI - Accounting of invoices: revised analytical part of invoice accounting with different competence dates (#TT00240/24)
> - SCS - If in the Work Order Parameters the flag ‘Consider warehouses based on the return DDT type’ is set, when fulfilling an Order, the warehouse is searched with the following priorities: first in the DDT Type/Return; then in the Order; then in the Work Order Parameters. If the Parameter is not active, the priorities are as follows: first in the Order, then in the Parameters (#TT03583/23)
> - SD - Corrected default value list for node type field for multi-level offering in case of updating Fluentis from version 2021 to version 2023 (#TT00590/24)
> - PM - managed taxable amount field in the tree structure of WBS projects, even in the case of items coded with note children (#TT00335/24)
> - SH - Upon creating a new Contact, the grouping parameter tab is populated with default values (#TT00601/24)
> - SD - Customer orders with automatic project generation, managed alignment of order number - project number in the case of a project without a numerator (#TT00274/24)
> - MPS - Some improvements and corrections in the MRP procedure (#TT02029/23)
> - MES - Corrected bug in production declarations, which recalculated materials used in case an item was inserted in the Alternative Items tab (#TT00571/24)
> - MES - Corrected bug in production declarations that occurred at the moment of registration (#TT00606/24)

### Patch 704.1-0016 - 02/09/2024

> - SCM - purchase requests - resolving the issue of saving lines on analytical without a cost center (#TT00095/24)
> - Translation of the SDI status according to the dictionary and not according to the code (#TT03342/23)
> - SH - In task activities, inserted indication of the company and division in which they were inserted, in order to ensure the correct heading of documents opened directly from activities (#TT00280/24)
> - SD - Multi-level offers, blocked the possibility of inserting different child levels into parent levels with line type 3 - expenses (#TT00327/24)
> - SD - Multi-level offers, corrected display of Taxable Amount field for cases where there is a parent level coded with note-type children (#TT00328/24)
> - ARM - correction of migration: the GEN_RightConditionalRules field is copied from the source DB
> - SD - Resolving the issue of exporting the "SDI Status" column (#TT00321/24)
> - SD - Multi-level offers, managed the possibility of selectively excluding some materials and resources from import into the order; set order line sorting as in the offer; materials valued in order if parent code to which they are linked is 0; otherwise, materials are 0 and the parent is valued; added the possibility of mass assigning a markup percentage to all lines (#TT03372/23)
> - SD - Multi-level offers, at the time of conversion into project and order, for each offer and order line managed reference to the respective project WBS (#TT03542/23)
> - SD - Multi-level offers, introduced the possibility of inserting in levels with coded/uncoded row type, child levels of note type (#TT00245/24)
> - SH - Document - Implemented the possibility of deleting a document stored on an object (#TT03426/23)
> - SCM - In Fluentis browser, within Goods Receipt, the display of item lines following fulfillment from orders has been corrected (#TT00044/24)
> - WM - Corrected bug in Backorder management prints that generated the job even for items with procurement type “Purchase” (#TT00438/24)
> - MPS - In the top-down phase sequence grid form, entering the sequence and confirming the row now keeps the focus on the just modified row even after the form update (#TT00351/24)
> - WM - Corrected bug in warehouse valuation (#TT02573/23)
> - SH - Correction of the error that did not populate the combo box of Additional Data added with Form Navigator (#TT00415/24)
> - SH - Executing Open form from the combo box of Additional Data added via Form Navigator, the table that opens is populated (#TT00412/24)
> - SCS - Correction of bug that blocked the insertion of Work Order rows (#TT00284/24)
> - Revision management of creating purchase invoices from Sdi file for amounts with a negative sign
> - PM - Codes of the Cost Origin Type list replaced with new codes in documents and configuration tables, and then deleted (#TT03470/23)
> - Translation of the SDI status according to the dictionary and not according to the code (#TT03342/23)
> - FI - change calculation for non-deductible - RO version
> - SD - Sales offer parameters, added the possibility of managing in the project title also the our reference / your reference fields present in the offer (#TT00247/24) 
> - PM: Project with WBS structure, allowed insertion of notes type children at coded/non-coded parent levels (#TT00243/24)
> - SD - Update the standard sales invoice print (#TT00409/24)
> - SD - XML file creation: revised the tax regime field in self-invoice with issuer coded as agent (#TT00469/24)
> - SD - Added the possibility to fulfill only descriptive lines within sales documents (#TT00429/24)
> - SD - Commission Calculation: Updated use of the commission attribution parameter for Advance and Return Advance lines (#Line type 6 and 7) (#TT001258/21)
> - SH - Activated electronic invoice token version RO (#TT00426/24)
> - SD - Multi-level offers unlocked insertion of resources even for intermediate coded lines; for parent lines coded with note children, if resources and materials are inserted at the child level and price updates from resources/materials are expected, the parent is updated with the sum of the values present in the children (#TT00358/24)
> - FI - purchase accounting: closed non-deductible VAT with deferred VAT (#TT00473/24)
> - FI - Revised the procedure for automatic credit note accounting with VAT-inclusive price (#TT00119/24)
> - SD - Multi-level offers in the case of very long item description or note, set maximum field extension length with scrollbar. For other documents customer orders, sales ddt and work ddt, sales invoice, maximum extension managed only for the notes field (#TT00485/24)
> - QY - Resolved bug in Item Control (#TT00135/24)
> - MPS - Resolved bug in the MRP procedure (#TT00456/24)
> - SD - In sales invoices, enabled editing of analytical data when the document has been managed for Sdi and is not posted (#TT00182/24)
> - SD - During the conversion from customer Offer to customer Order, warehouses and reasons set in Customer Order Types are now proposed (#TT00406/24)
> - SCM - RDA: the proposed price in the RDA lines is the net supplier obtained by applying all applicable discounts to the item (#TT00127/24)

### Patch 704.1-0015 - 01/31/2024

> - FI - Created new field "Code for other amounts not subject to withholding" in Retention type management (#TT01453/23)
> - Added a function to the WebApi script sender to notify information in the BizLink registry
> - FI - CU2024 - Release of new report Unique Certification 2024
> - SD - Correction of the error that occurred in the Creation of Invoice from Customer Orders Search, in the case of an Order with one coded item line, one uncoded item line and one note line (#TT00291/24)
> - Solved bug for Intrastat file (#TT00299/24)
> - CRM - When an Activity is Completed, updates the Closing Date of the Activity within the Workflow Log that created it; if the Activity is Reopened, the Closing Date in the Workflow Log is cleared (#TT00097/24)
> - SD - In hierarchical offers, tab Materials, increased decimals managed in the Unit Cost field (#TT00254/24)
> - MPS - Corrected bug in costing where preliminary costs of materials and total labor cost were not displayed (#TT02967/23)
> - SH - Prototypes - Article and uncoded components management has been implemented (#TT03604/23)
> - SD - Multi-level offers, duplicate procedure also considers new line flags Exclude Resources from Customer Order and Exclude materials in Customer Order (#TT00357/24)
> - WMS - Corrected bug that did not correctly report the operator data in inventory lists. Corrected bug in transfer lists when inserting location (#TT00153/24)
> - WM - Fixed DDT Generation from Picking with Wrong Change (#TT00364/24)
> - CRM - The Task Manager can modify the Assigned Operator/Role of the Created Activity (#TT00211/24)
> - CO - fix filter for division - take the division from movconti and not from registration
> - WM - Added in the Warehouse Journal report filter for company and division (#TT00375/24)
> - FI - Management of employee hours payslip exports for Systems (#TT00212/24)
> - SD - In Article Help, tab Documents, the fields Class, Code, and Item Description are populated (#TT00381/24)
> - SD - Multi-level offers made the delivery date and estimated delivery period visible in the row of the wbs structure. Removed block of quantity = 1 for wbs rows with materials and resources. If priced calculated from materials and resources, the unit price is calculated from the sum of the material revenues and/or resources, divided by the quantity indicated in the wbs row (#TT00123/24)
> - PM - Project creation procedure from template, if recipient and destination addresses are predefined for the client, they prevail over those specified in the template (#TT00122/24)
> - SCM: Following a modification of the account within a supplier order, the valued taxable amount is no longer maintained (#TT00035/24)
> - SCM - Resolution of the error returning when saving a document after adding an item with a lot starting from row type selection (#TT03505/23)
> - SCM - Resolution of the error returning when saving a document after adding an item with a lot starting from row type selection (#TT03505/23)
> - PM - the discount field of the interventions accepts decimal values in the header and in the service row (#TT03553/23)

### Patch 704.1-0014 - 01/24/2024

> - WM - Revision of Article Navigator with addition of new tabs (#TT00130/24)
> - MES - Corrected bug that did not maintain the link with child orders at the time of releasing planned orders in production orders (#TT00161/24)
> - SD - Revision of credit limit blocking management when the document being modified is the one causing the overspending and is already authorized (#TT00206/24)
> - SCM - In the Automatic Order Creation procedure, Operations tab, all lines of the same Created Supplier Order are grouped into a single operation, even if there have been multiple fulfillments (#TT01891/23)
> - SCM - Opening the Automatic Order Creation procedure and moving to the Customer Orders tab of the Filter, users will no longer be redirected to the Supplier Selection tab (#TT03511/23)
> - SD - In hierarchical offers, the possibility has been enabled to manage for parent levels of type coded or uncoded, child levels with type line only 4-notes (#TT00245/24)
> - SD - In hierarchical offers, tab Materials, increased decimals managed in the Unit Cost field (#TT00254/24)
> - SD - In hierarchical offers, made visible in the tree structure and in the Activities tab the date and the expected delivery period. Removed the block of quantity 1 in case of price updated by Materials and/or Resources (#TT00123/24)
> - Added the possibility to add a custom prefix to FlowOperation to use a customization of flowOperation

### Patch 704.1-0013 - 01/19/2024

> - Resolved the issue with the custom OData service to create a new script or update it (#TT00067/24)
> - MS - Resolved bug in General Scheduling and MRP related to availability analysis (#TT03566/23, #TT00033/24)
> - WMS - In the UDC transfer list form the Save button is enabled only after all necessary data has been entered (#TT03336/23)
> - SD: Material cost calculation offer for cost origin type "supplier price list", in case of change of line type, quantity, and supplier (#TT03372/23)
> - MPS - Corrected bug in availability analysis for items with thousands of components (#TT00173/24)
> - PM - template projects are displayed in the search form (#TT00007/24)
> - MES - Resolved exception in registering a declaration with batches when we are on a phase after the first one and Fluentis should download the batch from the previous phase (#TT00185/24)
> - WM - Corrected bug incorrectly reporting the width of a UDC in the item registry Packing form (#TT00177/24)
> - MS - MRP Article Parameters - implemented Exclude from planning (#TT01778/23)
> - CRM - Calendar synchronization between Fluentis and Outlook (#TT03320/23)
> - MPS - Corrected bug in header and line status management of multi-product jobs (#TT03550/23) 
> - Allow notifying script module errors with the Electronic invoice
> - MES - Corrected bug in Production Declarations that changed the warehouse and the consumption reason of an item when a waste quantity was entered (#TT00025/24)
> - SD - The creation of compensation from agent liquidation now reports the type/payment solution of the liquidation and not also that of the agent registry (#TT00192/24)
> - CRM - Review total line nodes from Marketing Budget
> - SH - Fix loading information for tasks after update (#TT00150/24)
> - MPS - Material Requirements and Parameters - modify layout - The parameters for Release of authorized purchase requests and Release of executive production orders have been moved to the Parameters of Release of scheduled Orders (#TT03085/23)
> - Added property reader DataProvider for script
> - FI - corrected bug in the difference between accounting balance and items when the sum of items to be compared was given by all items of the same value (#TT03315/23)
> - SCM - Corrected bug in the purchase DDTs that, in the case of modifying the price in invoice remained valued even after canceling the invoice (#TT00147/24)
> - MPS - Corrected bug in the release of scheduled orders of work (#TT00170/24)
> - FI - Management of employee hours payslip exports for Systems (#TT00212/24)
> - Added payroll manager for Systems (#TT00151/24)

### Patch 704.1-0012 - 01/16/2024

> - MS - Resolution of the error that closed Fluentis in case of selection of more Order Types in the filters of the Production Commissions Generation for Customer Orders (#TT00088/24)
> - SH - executing workflows from tabs in the search forms now creates attachments without replicating them (#TT00103/24)
> - WMS - Improved contrast between inserted lines and selected one (#TT00102/24)
> - WMS - Corrected bug on the framework that generated the application lock (#TT00117/24)
> - WMS - Corrected bug on the Confirmation of UDC Transfer due to which the counterparty movement does not report the exact time (#TT00131/24)
> - MS - Corrected bug that caused an error in the scheduling of a job in the presence of a customization on the items (#TT00085/24)
> - SCM - Corrected bug in creating a Purchase Request that did not detect the price of an item with a variant from the supplier price list (#TT03711/23)

### Patch 704.1-0011 - 01/11/2024

> - Revision of the BankCreditSituation print for renaming object
> - MS - Phase sequence - Resolved anomaly when executing the 'Change date' functionality (#TT03670/23)
> - SH - Prototypes - Implemented management of items and uncoded components (#TT02948/23)
> - WMS - Corrected bug in UDC transfer confirmation regarding updating data present in the UDC detail table (#TT03340/23)
> - SD - Creation of the grouping parameters tab for Customer/Supplier in the Contact Registry. These parameters take precedence over general grouping parameters (#TT03564/23)
> - WM - Resolved bug in the creation of Loading Plans that did not correctly reflect the manually modified quantity when using the Insert order button (#TT03642/23)
> - CRM - The total amount column in Sales Forecast Management reports the product of Total Quantity and Average Unit Price; also, each parent row node reports the sum of the amounts of the child rows. In the Sales forecast closure print, a Year filter was added for selecting Sales forecasts. With the insertion of the sales forecast field, the Type period is automatically populated (with the Type period equal to that present in the sales forecast type) Finally, the Detail type period can be chosen based on the inserted Type period (#TT0318/23)
> - PR - revision of line insertion in the liquidity management form (#TT03677/23)
> - FI - in the recovery of amortization of controlled assets, revision of the use of first year percentage halving flag (#TT03681/23)
> - FI - changes to variable structure field management for CU (#TT00019/24)
> - SH, PR - revision of management edit of balance calculations in bank registry and presentation statements (#TT03680/23)
> - MES - Fixed bugs in production declarations in the case of managing quantities discarded with batch items and also in the case of a registration with produced quantity equal to zero and discarded quantity greater than zero (#TT03708/23 - #TT00005/24)
> - SD - Corrected functionality of the filter on Extra Data in sales DDTs (#TT00058/24)
> - SD - In sales documents, in case of valuation centers on all dimensions, on saving, a message is now returned for cancellation of rows without a cost center instead of a block to be managed manually row by row (#TT00065/24)
> - SH - Creation of a new year - when the fix parameter is true - if there are rows with year of validity end date >= year - do not update to null (#TT00093/24)
> - MES - Fixed bug in production declarations that did not correctly load batches created within the declaration (#TT03393/23)
> - WM - Corrected bug in Stock Level Visualization where it did not correctly display the stock of items containing the character ‘#’ in the description (#TT00006/24)
> - WMS - In the UDC management tab of WMS, the Print UDC button is enabled correctly (#TT00091/24) 

### Patch 704.1-0010 - 12/22/2023

> - FI - Corrected bug during accounting of Ri.ba breakdown (cash VAT mode) containing effects created by merging more than one item, that generated VAT reclassification entries with incorrect amounts (#TT02548/23)
> - FI - revision rollback of uncollectibles accounting (#TT03579/23)
> - CRM - Resolved error that added empty columns when saving a Profile in Opportunity Search (#TT03567/23)
> - SH - Prototypes - Implemented management of items and uncoded components.(#TT02948/23)
> - PM: managed propagation of extra data from item to service lines in the intervention (#TT03515/23)
> - WM - Technical alignment during inventory line selection to create a warehouse registration (#TT02776/23)
> - WMS - Corrected bug in Move Item of WMS that did not enter hours, minutes, and seconds in the creation date field of counter-movement (#TT02482/23)
> - MES - Fixed bug in production reports that inserted a non-zero value into the produced quantity in case a suspension was entered (#TT03411/23)
> - MES - Corrected bug in production declarations that linked incorrect load/unload reasons taking them from WIP work in progress instead of from the box of work in parameters (#TT03508/23)
> - WMS - In the WMS transfer confirmation form, added "Operation performed" message also in case of direct confirmation from the filter search (#TT03339/23)
> - PM - added 2 new fields in projects to track whether the project was generated from an offer (#TT03454/23)
> - WM - In the lot registry, in the loading and unloading tabs, implemented the capability to view details on fulfilled quantities by adding the columns "Line Number," "Quantity," and "Unit of measurement" (#TT03487/23)
> - SD - Introduced new features for hierarchical offers, such as copy/move levels, create RDA, replace wbs number, FTE for resources, price update from resources/materials (#TT03084/23)
> - SD - Introduced management of offers with hierarchical structure (#TT02881/23)
> - SD - Introduced management of automatic project creation from offer (#TT03040/23)
> - SD - Managed extended description of item for the sales area; added capability to exclude materials/resources rows from customer orders; improved ordering of order lines generated from hierarchical offers; blocked conversion of offer to order if uncoded prototypes are present; managed item/material price or offer line in the order based on how the offer lines are valued; managed mass propagation of markup percentage across all material lines in 1 single pass (#TT03372/23)
> - SD - Improved management of prototypes in customer offers (#TT03100/23)
> - FI - corrected erroneous values in cost center in accounting in case of non-deductible Romanian percentage (#TT03651/23)
> - SCM - item price for offer requests is no longer defined based on prior purchase requests (#TT03518/23)
> - SCM - when the value of the lines in the RDO generator tab is 0, then they are 0 in the RDO created from using the procedure (#TT03458/23)

### Patch 704.1-0009 - 12/14/2023

> - PM - update date and resource assigned to the project's wbs, automatically updating the data in the planned intervention if present and the related resource calendars (#TT03327/23) 
> - SCM - Importing XML file: revised date formatting in XML file import (#TT03194/23)
> - FI - RO - add new accounts in FastStart
> - WM - Create the possibility to reach an inventory list of a second user even if the inventory is opened by another user. And a closed inventory becomes unmodifiable (#TT03443/23)
> - SCM - In purchase invoices, modifying the competence dates in item lines is now propagated to the underlying analytical lines (#TT03214/23)
> - FI - Accounting sales invoices - with discounts on payments - does not mean taking the discount value, but closing all deadlines (#TT03408/23)
> - Fluentis- Activity: Resolved enabling modification of already entered activities (#TT03391/23)
> - SDI - Activation of the purchase invoice creation button for RO
> - MES - Resolved bug in production reports that inserted a non-zero value into the produced quantity in case a suspension was entered (#TT03411/23)
> - MS - General scheduling - Resolved the anomaly of fulfilling orders in case there is no availability of requested items. Specific case of scheduling configuration with "Grouping by item" and parent item "Dummy" (#TT03424/23)
> - MS - General scheduling - The proposal in Work Orders of materials from dummy parents whose consumption is expected in specific work phases has been corrected as long as the same phase and sub-phase are indicated that must be present both in the non-dummy parent and in the dummy children at every level of the bill of materials (#TT03007/23)
> - SCM - Print purchase requests - Document printing from the purchase requests search filter has also become available, and not only from within the document
> - CO - revised processing periods of controlling for monthly data beyond the current year (#TT03186/23)