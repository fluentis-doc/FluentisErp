---
title: Patch Notes Version 707 (Patch notes Versione 707)
sidebar_position: 1
---

### Patch 707.1-0023 - 03/07/2025
> - FI - Fixed issue with missing import of fields for country of origin, country of departure, and destination province in intrastat listings. Fixed missing transport mode field in printing. Ref. #TT05326/24
> - ARM – Business Object Browser - fixed filter on View/Table function names
> - CRM: contact closure date - fixed functioning in the contact search filters (#TT00927/25)
> - FI - Unique Certification Print: Revision of recipient description in case it is a legal entity (TT01098/25)
> - FI - revision of the creation of advance payments and import Excel lines (#TT01171/25).
> - Added ConnectionTimeout to BizLink Service
> - CO - in the procedures for Creating interim closure, Inventory accounting, updating the status of items, technical alignment for tracing procedures (TT05604/24)
> - PM: Resolved case in the procedure for Generating interventions from activities with grouping conditions – if an item is set in the activity declaration, it was not considered (#TT01170/25)
> - SCS – Fixed error when releasing a scheduled Job Order that incorrectly reported the client's VAT rate instead of the supplier's (#TT00959/25).
> - SCM - In the Supplier price import procedure, the column headers for 'Item Class' and 'Item Code' were corrected, which were inverted (#TT05100/24)
> - PR - Resolved issue with processing times for some types of cash flow in cash flow, e.g., RDA, improved overall performance in cash flow processing and the opening of masks, and implemented the progress status bar. Ref. #TT00408/25
> - FI - revision and optimization of the rollback process of accounting (#TT00647/25)
> - SD - Shipping Calendar implementations (#TT00735/25, #TT00734/25, #TT00733/25, #TT00456/25, #TT04936/24)
> - SD: Shipments - Introduced end validity date in driver registers, which is compared with the shipment document date. Driver selection combos are also filtered accordingly. (TT04935/24)
> - WM – In the creation phase of DDT and invoice from a picking, the possibility of grouping, in the DDT or invoice, the checked lines of the same article through the Group checked lines flag has been implemented. (#TT00481/25)
> - FI - Intrastat - Issue on managing weights below 1kg and Credit Notes for the current month (TT01061/25)
> - ARM – DB Browser - fixed filter on Views/Table Valued Functions
> - WM - In shipments, during the picking creation phase, no longer different row types other than types 1 and 5 are reported. (#TT01009/25)
> - SCM – Fixed storage of filters set in the Order line Details form, which were not saved correctly in profiles (#TT01063/25).
> - Modifications in purchase item details form that can have an impact on a profile
> - SCM – Fixed error in the loading of a DDT or Purchase Invoice, which did not report the Supplier in the batch registry when the batch code was manually modified (#TT01124/25).

### Patch 707.1-0022 - 02/28/2025
> - FI - revision of the creation of a new periodic VAT declaration (#TT00975/25)
> - FI - revision of the print filter for periodic VAT liquidation with quarterly periodicity and calculation of quarterly advance (#TT00866/25).
> - FI - Analytical account with a zero amount in the sale invoice accounting with complimentary lines without a surcharge (TT00316/25)
> - SCM - accounting from inside the purchase invoice (summary tab) now sets the posting date equal to the document date if it is later than the last registered date of the VAT register, and sets the due date according to user parameter settings. (#TT04804/24)
> - SCM – Print Order Portfolio by quantity - Corrected visualization of invoice details (#TT00937/25)
> - FI – Print List of Parties – Corrected date format in the case of grouping by due date to dd/mm/yyyy (#TT00940/25)
> - SD – Conai prints – Corrected anomaly in case of page breaks (#TT00952/25)
> - SD – Immediate sales invoice print – Corrected anomaly on the date since it was not exported during PDF export (#TT00984/25)
> - SCM – Fixed error in the valuation procedure of Purchase DDT and returns, which sometimes generated a double stock movement for items managed in batches (#TT00596/25).
> - SCM - Change layout for purchase invoices Closing documents - filter to be related to items (TT00550/25)
> - ARM – workflow – corrected anomaly on priority (#TT00878/25)
> - FI - in the manual creation of parties, revision of saving for assignment of the next free number (#TT00507/25)
> - SCM – In purchase documents, when the price list is manually modified, the price is updated and proposed based on the new price list (#TT00651/25).
> - FI – Compensation: resolved issue in change of compensation with Enasarco (TT00606/25)
> - SCM – In the Duplication and maintenance of supplier price lists procedure, rounding is now applied correctly (#TT00642/25).
> - FI – Print annual VAT liquidation: fixed error in printing of annual VAT liquidation when the flag is activated in the parameters ‘Store the number of the last page’ (TT00200/25)
> - PR/FI/CO/SH/ CPM/CRM - revision of grid filters to disable the option on certain columns ( TT00793/25). Changes were made in calculated fields of forms CustomerLastStatementFilterResults, CreditManagementFilterResult, BillsTypesFilterResults, AdvanceFilterResults, CreditManagementRWFilterResult, BillsTypesRWFilterResults, PayrollResourceActivity, IntrastatSexies, QuarterlyInvoiceCommunicationFilterResults, ObjectiveDepreciationFilterResult, MaturityFilterResultsSimple, MaturityCashManagementFilterResults, FixedAssetFilterResults, FixedAssetDepreciationFilterResult, EmploymentCostElementFilterResults, EmployeeFilterResults, BankLoanFilterResults, AutomaticDepreciationFilterResult, AdvanceMaturityFilterResults, PostingIntrastatTab, IntrastatTransactionNatureRWFilterResults, EmploymentCostElementRWFilterResults, CertificationHoldRWFilterResults, CertificationHold, AccountCompensationTypeRWFilterResults, VariableRWFilterResults, TargetingRWFilterResults, CategoryRWFilterResults, ConsolidationListProjectFilterResults, ConsolidationListAccountFilterResults, ClosureValorizationFilterResults, ClosureModelListProjectFilterResults, ClosureModelListAccountFilterResults, PeriodTypeRWFilterResults, ContactOpportunityFilterResults, ContactFilterResults, NomenclatureFilterResults, ContactAlternativeRWFilterResults. The profile can be affected by the changes.
> - Optimization of the print “Warehouse Ledger”
> - MES – In production declarations, the costs of materials are now allocated only to finished products and not to alternative products. The cost of alternative products is assigned based on the proposed cost of the reason that loads them into the stock. (#TT00678/25)
> - WM – Fixed bug in help unloading batches that did not properly display data between the main grid and that for location. (#TT00722/25)
> - MS – Fixed bug on the function of the Release of planned orders present in the MRP procedure. (#TT00837/25) (changed xamls: MrpDetailFilterResults, MrpDetailFilterWidget)
> - MES – Fixed the layout of the Workbook report present in the production order filter. (#TT01027/25)
> - SCM – Corrected visualization of the Item Class and Item Code fields in the Import from Supplier Prices procedure (#TT00715/25). 
> - Changes to the PurchasePriceListFromFileDetailFilterResults that can affect a profile on the form of duplicate and maintenance of purchase price list
> - WM – Fixed error that did not allow changing the quantity of the parent in a Registration with counterpart and unloading bill of materials in the case of items managed in batches (#TT01026/25).
> - MS – Fixed bug in phase sequence related to the Release button of planned production orders. (#TT01031/25)
> - WM – Fixed bug in the bill of materials linked to the copy component button. (#TT00438/25)
> - FI - review of generating CU file for incorrect final carriage return (#TT00965/25)
> - FI - Unlimited digit number on currency adjustment procedure (TT00991/25). Changes were made in exchange field of form CurrencyAdjustmentAccounting. The profile can be affected by the changes.
> - Modified the print of the quarterly VAT communication, ordering the periods (#TT00981/25)
> - PM: resolved visibility of diagram in projects, in case of invoices with non-coded lines (#TT00985/25)
> - SCS – In Job Work Returns, the item price is taken from the Job Work Price List, if present, otherwise it is always proposed as zero (#TT00986/25).
> - SD – Optimized the search in the Order Fulfillment forms and DDT in the Sales documents (#TT00797/25 and TT01016/25).
> - SCM and SD – Fixed error during Price Update in the Duplicate and Maintenance procedures for supplier price lists and Duplicate and Maintenance for sales price lists (#TT01060/25)
> - ARM – Fix for Workflow (#TT01086/25)
> - FI - revision of management of display/storage/export of data of the periodic VAT Communication (lipe) in the event that a period in the periodic VAT declaration has been deleted. (#TT00981/25)

### Patch 707.1-0021 - 02/20/2025
> - Resolved bug in code generation in an algorithm related to the blockly section
> - MES – In production declarations, the material proposal is made independently of the declared quantity. (#TT04864/24)
> - SH - fix ExtraData widget in ItemCodifier (TT00851/25)
> - SH - In the import of the FSLedgerAccount object, setters were enabled on the Abi/Cab code fields to automatically create the supporting bank. (#TT00813/25)
> - SD - In the Conai Print, the Reference Year is inserted based on the filters set (#TT00723/25)
> - ARM - Workflow - Corrected anomaly that generated duplicate documents in case of automatic action (#TT00333/25)
> - CO - new reclassification, visualization of the type balance in the sub-accounts grid (#TT00826/25)
> - FI - Print Enasarco - Revision of sum in Enasarco print (#TT00766/25)
> - SD - In the Order Search, expanding the detail of the lines, Our and Your reference headers are reported (#TT00830/25)
> - SD - In the Offers Search, the standard Tile 'Expired' reports unconfirmed offers and with end validity date earlier than today (#TT00825/25)
> - FI - in the prints of items, reviewed filter ‘Show securities’ (#TT00257/25)
> - SCM – Optimized the deletion of many items from purchase documents (#TT01963/24).

### Patch 707.1-0020 - 02/13/2025
> - CO - Optimization of the interim closure procedure (#TT00699/25)
> - SD - accompanying invoice print - resolved anomaly on the total to pay field (#TT00672/25)
> - SCS - In Job Orders, corrected error in the proposal of the quantities of materials in case the material was managed with the alternative unit of measure in the Bill of materials (#TT05226/24)
> - SCS - If active in the Job Order, the Manual Price flag is also reported in the Return created through fulfillment from the order (#TT05336/24)
> - SCM - The accounting of invoices to be received now excludes purchase bills with the 'Forcefully valued' flag (#TT0558/25)
> - ARM - Workflow - Implemented the management of rights in workflows. Three parameterizable rights: View and Edit on the status. Right on transition.
 If the view right is set on the status without that right, the status will not be seen in the workflow tab.
If the edit right is set on the status without that right, the status can be seen but documents of that status cannot be modified.
If a transition right is set, the two states linked by the transition can be seen. Attempting to perform the transition without that right will return the error “User does not have the right to modify the status” (#TT04844/24)
> - WM - In case a partial tick of a picking is made and the corresponding DDT created, now with subsequent ticks it is possible to generate the subsequent DDTs without problems (#TT00689/25)
> - SD - In case an invoice is generated with the procedure for Managing advance payments, it will have Payments with Taxable, and in the related Storno the deadlines will be calculated (#TT00646/25)
> - CRM - In the Visit Report, the main Agent entered in the Customer or CRM Contact registry is reported (#TT00713/25)
> - FI - revision of vat liquidation printing for Serbian localization, due to issue in browser interface (#TT00777/25)
> - FI - Revision of cost center dropdown when only dimension and center category are indicated in the chart of accounts (#TT00489/25)
> - SH - Availability Analysis: Resolved filter error for Item Type if a custom call is made (ref.ticket 790/25)
> - MES - Fixed bug in the registration of production declarations (#TT00352/25)
> - MES - Fixed bug in production declarations. In case an advancement with zero quantity is created and then the quantity is changed, now a message is shown asking whether to recalculate the materials or not (#TT00374/25)
> - WM - Fixed bug in the Inventory report with valued quantity in the case where detail for location and lot were activated (#TT00658/25)
> - SD - In customer orders, the discount associated with the customer is now correctly reported on all article lines entered after saving and reopening the document (#TT00779/25)
> - Crm - Calendar - resolved case where modifications to an existing appointment were not saved (#TT00768/25)
> - SD - The Extra Data entered in the Picking are transferred to the Header of the DDT that it fulfills, if in a 1 to 1 relationship (#TT00353/25)
> - FI - In the search form for Parties, filter and sorting options in the calculated field ‘Party status’ are disabled (#TT00750/25)
> - SCS - In Job Orders, it is now possible to enter item descriptions with multiple lines (#TT05526/24)
> - PM - resolved case of error in rollback procedure for Creating interventions from Activities (#TT05370/24)
> - MS - General planning - Incorrect application of economic lot (#TT00179/25)
> - CRM - The Proposal data in CRM Contact does not populate the Tax Code with the Iso Code (#TT00537/25)

### Patch 707.1-0019 - 02/06/2025
> - WMS - In the management form, decimals in the quantity field are now correctly displayed (#TT00208/25)
> - SH - In the Duplicate Items procedure, the Insertion Date of the new item is now set correctly to the current date (#TT00515/25)
> - MS - Fixed bug in flow generation in the production job generation form that proposed incorrect parameters in scheduling (#TT00528/25)
> - SD – Proposal Expenses/Discounts/Surcharges: In the fulfillment and valuation flow of documents, Expenses/Discounts/Surcharges of type "Various" are taken from the source document and inserted into the destination document only if processing 1 source document creates 1 destination document; in the case of groupings of source documents, Expenses/Discounts/Surcharges of type "Various" are taken from the customer registry of the destination document (#TT00417/25)
> - SCM - Fixed error during joint valuation of Purchase DDT and Return through the appropriate procedure (#TT00595/25)
> - MES - Fixed bug related to the help for material lots in production orders, which did not correctly propose the selected quantity for location in some cases (#TT05597/24)
> - SD - Removed the tag 'GiorniTerminiPagamento' when the value is negative (#TT00601/25)
> - MS - Fixed bug in general planning that did not generate planned orders correctly with the 'Consider availability' at the first level active (#TT00230/25)
> - WM - Fixed bugs in the inventory valuation procedure related to closure with UDC (#TT00535/25)
> - WM - Fixed bug in the cost calculation procedure that in some cases generated an exception (#TT00231/25)
> - WM - Fixed error in the Cost Calculation procedure that in some cases reset the value of the last processed cost (#TT05527/24)
> - SD - Resolved error in Sales DDT that caused the information in the Article Data tab to disappear upon creating a custom profile (#TT00544/25)
> - WM - Now when a new variant is entered in the article registry's tab, the MRP parameters for that article/variant will be created by copying them from the MRP parameters of the neutral article (#TT00575/25)
> - WM - Fixed bug in the proposed cost calculation of the item in stock movements with counterpart, in the case where it was done using a unloading reason (with the bill of materials flag active) and a loading reason in counterpart (#TT00393/25)
> - Import project activities from Excel (#TT05598/24)
> - Resolved issue with managing AssociatedProperty and slowness in opening the BizLink WebApi parser
> - PM - WEB Parameters for operator - corrected visibility of the Project field, which was present but not visible (#TT00590/25)
> - MS - Improved the generation of production orders from stock shortages to ensure proper functioning even with many lines (#TT00572/25)
> - PM - Resolved case where if the user in use has different roles both configured in user permissions set in the project header, an anomaly occurred (#TT05350/24)
> - SD - In the Creation of DDT and Sales Invoices from Picking with ticking, the weights of items, if present, are now reported in the generated documents (#TT00510/25)
> - SCM - Notes item to omit on purchase invoice accounting (#TT00688/25)
> - MS - Fixed problem in the article filter of the production job generation (#TT00597/25)
> - FI - the creation of the advance invoice, from the management of advance payments, in the case of multiple selection now creates a deadline for each party (#TT00631/25)
> - WM - Implemented in availability analysis the references to the customer order present in the fields Linked customer order and Customer order quantity (#TT00124/25)
> - WM - Fixed bug in inventory lists that did not correctly link the quantities in case project and WBS were indicated (#TT00054/25)

### Patch 707.1-0018 - 01/31/2025
> - FI - Print reminder letters - Resolved rounding anomaly on monetary values (#TT00361/25)
> - SCM - Incoming purchase documents: Fixed error that occurred during setting the filter on the date of the last event (ref. #TT00245/25)
> - SD: Multi-level Offers - conversion to project. Fixed case where the Assigned Days in the project were not calculated simultaneously during the conversion from offer (#TT00206/25)
> - SCS - The location entered in the Location map for the article is now also reported in Job Orders and Job Returns (#TT00154/25)
> - SH - Noticeboard/Bacheca - Unified display between WPF and web version of the noticeboard (#TT04205/24)
> - CO - printing of the project consolidation now allows filtering of data for part of the project center code, through the use of percentage (#TT00394/25)
> - WM - During the Transfer of items in shipments, now the remaining quantity on partially fulfilled items is correctly proposed (#TT00402/25)
> - NIR upload - resolving issue when the registration has a loading counterpart - propose lots (#TT00472/25)
> - WM - Right-clicking on an item and selecting view stocks, the stocks view opens with the item code already filtered (#TT00102/25)
> - WM - Item - in the unit of measure field of the preferred supplier tab, the accepted values are limited to those entered in the alternative UM tab (05610/24)
> - FI - accounting adjustments now value the division field in cost centers (#TT00314/25)
> - FI - automatic accounting of invoice cancellations to be received now manages the date ranges of the origin operation (#TT00309/25)
> - FI - the creation of VAT lines from fixed asset movement now sets the VAT due period consistently with the VAT due date (#TT00229/25)
> - PM - valuation of interventions - fixed case where intent declaration was assigned even if the invoice was of type proforma (#TT00439/25)
> - SD: Hierarchical Offers, in case of changing item in an existing offer line, the price is proposed according to standard procedure, and the flags for calculating price from resources, materials, and prototypes are disabled (#TT00499/25)
> - Solved bug to view Locations on Xamarin part
> - MES - Fixed bug in registration of production declarations which occurred if a discarded quantity was entered in the material row and this quantity changed the consumed quantity of the material itself (#TT00513/25)
> - Entered check preventing the modification of a project line's quantity to 0 if already fulfilled (#TT00212/25)
> - WMS - Merchandise Reception form in WMS. Now clicking on an already confirmed line (with the quantity field empty, otherwise creates a new line) and pressing the “Confirm” button allows re-entering the UDC management form with previously loaded data and modifying them (#TT05491/24)
> - MS - Fixed bugs in the general scheduling procedure that created discrepancies between the indicated dates in the phases and those reported in the underlying graph, also fixed the calculation of the end date of individual phases (#TT00325/25 - #TT04638/24)
> - FI - in the creation of intra from invoices (purchase or sale), the destination section is now visible (#TT00344/25)
> - MS - Fixed the MRP procedure that generated planned orders for invalid items in the bill of materials (#TT05478/24 and #TT00376/25)
> - FI - Print periodic VAT liquidation - Reviewed calculation of interests arising from quarterly VAT liquidations (#TT00302/25)
> - PR/FI/CO/SH/ CPM/CRM - revision of grid filters to disable the option on certain columns (TT00793/25). Changes were made in calculated fields of forms CustomerLastStatementFilterResults, CreditManagementFilterResult, BillsTypesFilterResults, AdvanceFilterResults, CreditManagementRWFilterResult, BillsTypesRWFilterResults, PayrollResourceActivity, IntrastatSexies, QuarterlyInvoiceCommunicationFilterResults, ObjectiveDepreciationFilterResult, MaturityFilterResultsSimple, MaturityCashManagementFilterResults, FixedAssetFilterResults, FixedAssetDepreciationFilterResult, EmploymentCostElementFilterResults, EmployeeFilterResults, BankLoanFilterResults, AutomaticDepreciationFilterResult, AdvanceMaturityFilterResults, PostingIntrastatTab, IntrastatTransactionNatureRWFilterResults, EmploymentCostElementRWFilterResults, CertificationHoldRWFilterResults, CertificationHold, AccountCompensationTypeRWFilterResults, VariableRWFilterResults, TargetingRWFilterResults, CategoryRWFilterResults, ConsolidationListProjectFilterResults, ConsolidationListAccountFilterResults, ClosureValorizationFilterResults, ClosureModelListProjectFilterResults, ClosureModelListAccountFilterResults, PeriodTypeRWFilterResults, ContactOpportunityFilterResults, ContactFilterResults, NomenclatureFilterResults, ContactAlternativeRWFilterResults. The profile can be affected by the changes.
> - Optimization of the print “Warehouse Ledger”
> - MES – In production declarations, the costs of materials are now allocated only to finished products and not to alternative products. The cost of alternative products is assigned based on the proposed cost of the reason that loads them into the stock. (#TT00678/25)
> - WM – Fixed bug in the picking help that did not properly display data between the main grid and that for location. (#TT00722/25)
> - MS – Fixed bug on the function of the Release of planned orders present in the MRP procedure. (#TT00837/25) (changed xamls: MrpDetailFilterResults, MrpDetailFilterWidget)
> - MES – Fixed the layout of the Workbook report present in the production order filter. (#TT01027/25)
> - SCM – Corrected visualization of the Item Class and Item Code fields in the Import from Supplier Prices procedure (#TT00715/25). 
> - Changes to the PurchasePriceListFromFileDetailFilterResults that can affect a profile on the form of duplicate and maintenance of purchase price list
> - WM – Fixed error that did not allow changing the quantity of the parent in a Registration with counterpart and unloading bill of materials in the case of items managed in batches (#TT01026/25).