---
title: Patch Notes Version 608 
sidebar_position: 2
---

### Patch 608.1-0070 - 02/28/2025
> - FI – Annual VAT settlement printing: resolved error in printing the annual VAT settlement when the 'Store the number of the last page' flag was activated in the parameters (TT00200/25)
> - PR - "Progress" field in the Cash Management module (TT02060/24). Changes were made to the progressive field of the Cash Management form. The profile can be affected by the changes.
> - MS – Fixed bug on the functioning of the Release planned orders button in the MRP procedure. (#TT00837/25)
> - SD – Optimized search in the Order Fulfillment and DDT forms in sales documents (#TT00797/25 and TT01016/25).
> - FI - revision of CU file generation due to incorrect final carriage return (#TT00965/25)
> - FI - Unlimited digit number on the currency adjustment procedure (TT00991/25). Changes were made in the exchange field of the CurrencyAdjustmentAccounting form. The profile can be affected by the changes.
> - SCS – In Work Account returns, the item price is taken from the Work Account Price List, if present, otherwise it is always proposed as zero (#TT00986/25).
> - modified the printing of the quarterly VAT communication, sorting of periods (#TT00981/25)
> - FI - review management of display/storage/exporting of data for periodic VAT communication (lipe) in case a period has been deleted in the periodic VAT declaration. (#TT00981/25)
> - FI - Fixed the issue of missing reporting of country of origin, country of dispatch, and destination province in the intrastat lists. Fixed missing reporting of the transport mode field in the printing. Ref. #TT05326/24
> - FI - Reconciliation of bank statements: resolved issue in accounting for reconciliation of bank movements (TT05601/24)

### Patch 608.1-0069 - 02/21/2025
> - FI - revision of amortization calculations on categories with the 'Incremental' flag (#TT00113/25)
> - SCS – If activated in the Work Account Order, the Manual Price flag is also reported in the Return created by fulfillment from order (#TT05336/24).
> - SCM - Resolution of error that prevented the Valuation of a Return DDT, following a previous Rollback of the procedure (#TT00052/25)
> - FI - Enasarco print - Revision of sums in Enasarco print (#TT00766/25)
> - FI - revision of filter printing periodic VAT liquidation with quarterly periodicity and calculation of quarterly advances (#TT00866/25).
> - SCS - Fixed generic error during the registration of a Work Account Return (#TT00656/25).

### Patch 608.1-0068 - 02/06/2025
> - Release printing of Unique Certifications 2025
> - SH - Fixed error in the Duplicate Items procedure that occurred in the presence of custom Extra Data (#TT00247/25).
> - WM - Fixed bugs in the warehouse valuation procedure related to closure with UDC (#TT00535/25)
> - WM - In availability analysis, the "Only negative" flag present in the "Show lines without availability" expander now correctly filters only the lines with negative availability (#TT00613/25)
> - WM- Fixed bug in the cost calculation procedure that in some cases generated an exception (#TT00231/25)
> - WM - Fixed error in the Cost Calculation procedure that in some cases reset the value of the last processed cost (#TT05527/24)
> - MPS - Improved generation of production orders from Stockouts to ensure proper functioning even with many lines (#TT00572/25)
> - FI - Withholding tax declaration for 2025, alignment (TT00236/25)
> - SH - Fix new numbering from Numeration widget combobox context menu (#TT03655/23)

### Patch 608.1-0067 - 01/30/2025
> - WM - Fixed bug in the Stockout procedure (#TT05117/24)
> - FI - revision of cost center signs in the accounting of purchase invoices (#TT00013/25)
> - FI - adjustment management form issues (TT04549/24)
> - SD - The numerations with period 'None' are no longer reset at the beginning of the year; the numbering of documents in the new year will start from the highest number recorded in the previous period (#TT00000/25)
> - MES - Fixed bug in the registration of production reports in the case of an intermediate phase following an external phase (#TT05515/24)
> - MPS - During the creation of orders from customer orders, the alternative unit of measure inherited in the order from the customer order (as long as this is among those indicated in the alternative UM tab of the item registry) (#TT05068/24)
> - FI - revision of profit center rounding in accounting (#TT00186/25)
> - SCM, SCS - Numerations with period 'None' are no longer reset at the beginning of the year; the document numbering in the new year will start from the higher number entered in the previous year (#TT00020/25)
> - WM - Fixed verification of inventory for each shipment between the shipment date and the current date (#TT02878/23)
> - WM - Fixed bug in the rollback of the procedure Stockout from check (#TT00286/25)
> - FI - VAT settlement with flag 'calculate advance' (TT00414/25)
> - NIR loading - solve the problem when the registration has load counterpart - suggest lots(#TT00472/25)
> - FI - the accounting of adjustments now values the division field in the cost centers (#TT00314/25)
> - FI - the automatic accounting of credit notes now manages the dates range of competence from the source operation (#TT00309/25)
> - SH - Province Table conversion code from 4char to 4varchar (TT00298/25)
> - MPS - Fixed bugs in the capacity finite scheduling procedure that created a discrepancy between the dates indicated in the phases and what was reported in the underlying chart, also corrected the calculation of the end date and time of individual phases (#TT00325/25 - #TT04638/24)
> - MPS - Fixed MRP procedure that generated planned orders for invalid items in the bill of materials (#TT05478/24 and #TT00376/25)
> - FI - Printing periodic VAT liquidation - Revisited the calculation of interest arising from quarterly VAT liquidations (#TT00302/25)

### Patch 608.1-0066 - 01/15/2025
> - SCS - Fixed error in Returns and Work Account Orders which, when adding an alternative unit of measure, changed the item price even with the "Manual Price" flag enabled (#TT05336/24)
> - FI - management of the new general parameter "FS-FI-Posting-BlockPostingBeforeReceiveDate", if set to true it blocks the possibility of registering Sdi documents with a date prior to the reception date (#TT00847/24)
> - FI - in foreign currency payment registrations in header, revised management of totals in currency to also consider manual lines in the same currency (#TT05254/24)
> - FI - revision of compensation accounting for occasional compensation management without VAT (#TT05321/24)
> - MPS - Fixed bug in finite capacity scheduling that did not correctly generate the occupancy of orders with the severe flag active (#TT05445/24)

### Patch 608.1-0065 - 12/20/2024
> - FI - revision of export file for the 'Exports' flag set in the lines and not in the header. When setting the ‘file details’ flag, now in the line the link to the contact registry is no longer reset (#TT05510/24)

### Patch 608.1-0064 - 12/18/2024
> - FI - verification print of intent declarations now totals the data of the unbilled returns of the work account (#TT05290/24)
> - FI - the definitive print of the periodic VAT settlement now stores the credit balance in the previous credit field of the periodic VAT declaration form, no longer in that of the previous period VAT variations (#TT03694/24 and #TT05230/24)
> - FI - issues in cancelling the final print settlement (#TT04859/24)
> - MS - In Work Centers Capacity improved and optimized the display of start and end times of phases (#TT04350/24)
> - SH - fixed error calculation of bill of materials levels in availability analysis (#TT05376/24)
> - SD - Resolution of error that indicated the opening of the price list from its user in case of prior use of the Duplicate and Price List Maintenance procedures (#TT05236/24)
> - CO - Revision of the purchase/sales area valuation procedure, exclusion of tests on the final VAT printing of the settlements and registers (#TT04436/24)
> - FI - control detail print of intent declaration suppliers (#TT05290/24)
> - FI - partial sale and depreciation (#TT05469/24)

### Patch 608.1-0063 - 12/12/2024
> - SCM - During the creation of a Supplier Order from an RDA, if the item in the RDA was entered with an alternative unit of measurement, the order item line will report the primary unit of measurement and the corresponding quantity. The alternative unit of measure and its quantity will be entered in the appropriate field (#TT04650/24)
> - PR - added fields for total bill and total advance in the Advance Bill Form (#TT04711/24)
> - SCM - Invoice accounting - Corrected anomaly during purchase invoice accounting (#TT01625/24)
> - SD - Improved Percentage/Value field in the item line of sales documents, Agent Tab, which did not properly report the data in all commission calculation conditions (#TT5075/24)
> - SCS - Form Returns - Fixed anomaly that in case of workflow on the first opening of the document gave an error (#TT04944/24)
> - FI - in the case of accounting for foreign currency purchase invoices with reverse charge VAT integration, revised management of rounding of VAT converted into euros (#TT03221/24)
> - Scm: Delivery note error during the loading and rollback (#TT05306/24)
> - FI - generation of intent declaration file, revision of the field 'Tax code of declaring company' (position 296 of record B), is now populated by the tax code of the declaring registry set in the header and no longer with the active company’s tax code (#TT05167/24)
> - SCS - If the Company provides for Controlling Management (with the corresponding flag in the Company table), the fulfillment of a DDT or a Return within an invoice reports for competence dates the dates of the document unloading, if not present the dates of the document (#TT05126/24)
> - SCM, SCS - Fixed error during registration of a Work Account Return or Purchase DDT from within the document (#TT04754/24)
> - CO - manual modification of extra-accounting controlling registrations, revised valuation of cost centers for valuation of fields in foreign currency and company (#TT05235/24)

### Patch 608.1-0062 - 12/05/2024
> - WMS - The loading unit item field of the UDCs created with multiple lines is now correctly populated in the management check (#TT05104/24)
> - FI - revision of closing flag update reminder when varying the closure of individual movements within it (#TT02651/24)
> - SD - Review assignment of intent declaration on discount lines, now valid declaration is read for the invoice date. By deleting the assigned reference, the intent declaration of the original advance line or that valid for the invoice references set for the header will be visible (#TT04907/24)
> - SD - The Duplicate invoice reports the LedgerAccountForStatisticReport.Id in the new document (#TT05040/24)
> - FI - revision of accounting for invoices to be received for the valuation of descriptive strings inside the created registration. Be careful that in the reason: 1 the amount type of cost must be ‘taxable sub-account + non-deductible tax sub-account’ 2 if you want to report number and date of transport document it will require the obligation of document type/number and date (#TT05044/24)
> - CO - review of management of reclassification models for levels with null code/description (#TT05055/24)
> - MES - Fixed bug that zeroed the Quantity produced of a production Order when the Cost order recalculation was executed (#TT05094/24)
> - MES - Fixed bug in Production Orders Cost Calculation with valuation of materials at batch cost (#TT04509/24)

### Patch 608.1-0061 - 11/28/2024
> - Sales Fix IndirectExchangeRate at migration (#TT04919/24)
> - SH - Fixed error in Item Navigator which, when used in reduced mode, sometimes lost the pointer focus opening a different document than the selected one (#TT01033/24)
> - Purchase/Project/Subcontractor - fixed Indirect exchange rate at migration (#TT04930/24)
> - PR, FI - The import of bank files for reconciliation now assigns the currency from the bank registry in the header. Revision of assignment for movements (#TT04525/24)
> - FI, PR, CO - update IndirectExchangeRate in administrative area (#TT05095/24)  
> - MPS - Fixed bug in general planning if there was an equipment in the cycle without the associated item (#TT05077/24)

### Patch 608.1-0060 - 11/21/2024
> - Revision of residual calculation for currency items (#TT04613/24)
> - FI - print assets control, revision of signs for depreciation funds (#TT04667/24)
> - MES - Fixed bug in registration of production reports (#TT04825/24)
> - MES - Fixed bug in recording production declarations (#TT04826/24)

### Patch 608.1-0059 - 11/13/2024
> - MPS - In MPS Definition, selected orders in the summary tab are added to an already existing order (indicated in the production order box in the Summary tab), if and only if the flag Update existing jobs in the parameters tab is enabled. Automatically, a saved order will be proposed where lines will be added, if one already exists with that type and date (#TT04762/24)
> - SH - Modification of the read-only filter for the Extra Data class of the FSItemMaterialProfile object, to enable the selection of 'Allowed Values' based on this object during the creation of a matrix in Item Registry (#TT04490/24)
> - MES - Fixed bug in data order completion for production orders (#TT04741/24)
> - WM - Fixed bug in availability analysis concerning detail display in the case of variants (#TT04602/24)
> - FI - repository method ComputeCheckDeclarationOfExemptionAmounts (#TT02373/23)

### Patch 608.1-0058 - 11/07/2024
> - FI - revision of economic competence dates assignment in accounting for purchase invoices (#TT02138/24)
> - FI - Add checks for migration (#TT04710/24)
> - In supplier order fulfillment in invoices and purchase invoices without analytical recalculation, revision of assignment centers based on warehouse priorities (#TT01624/24)
> - SD - Fixed error in searching for Sales Invoices related to the presence of invoices sent to SDI RSM (#TT04740/24)

### Patch 608.1-0057 - 10/31/2024
> - WMS - Implemented in the Barcode tokenizer also the ability to manage collections and not just references (#TT04232/24)
> - SD - CMR print - Fixed CMR print, did not always report the Sender's data and Weights (#TT04342/24)
> - SD - Fixed issue in the calculation of accrued commissions for agents with the criterion of payment made and in the presence of partial payments of batches (#TT03435/24 & #TT04483/2)
> - MS - Fixed bug in the release of planned work account orders in case the use UM was utilized in a material (#TT04603/24)
> - CO - add currency in unique key of CO_ConsolidationListCostCenters and CO_InternalClosureModelListCostCenters (#TT04649/24)
> - FI - In the accounting of purchase invoices, when there is a reversal of the movement of invoices to be received, a message was added indicating the mismatch of cost centers in this second: the invoice becomes in accounted state, but the non-reversal of invoices to be received is indicated (#TT04275/24)
> - SCS - Fixed error in the registration of a Work Account Return from within the document (#TT04578/24)
> - SD - The ordering of values (Extra Data) in the rows and columns of a Matrix in item registry is maintained when documents are created (#TT04599/24)
> - SCM - Fixed error that did not correctly update the fulfillment status of the Supplier Order in case part was fulfilled in a DDT and the remaining in an Invoice (#TT04612/24)
> - FI - Modified controlling procedure for Valuation for purchase sales for mid-year closing. The rollback of the procedure is no longer blocked by the final VAT settlement print for the relevant period, which happened if the reason used for the valuation was a VAT reason (#TT04436/24)
> - SH - Document Manager - Fix blocking app when shared folder document type used (#TT02202/24)
> - In purchase documents, changing the warehouse in the lines, the recalculation of cost centers is now performed only if at least one of the two warehouses (initial and newly assigned) have set the cost centers.

### Patch 608.1-0056 - 10/24/2024
> - BI - dashboards - Fix problem opening details (#TT03539/24)
> - WM - Fixed bug in Stockout printing that went into a loop in the case of an item with Maximum stock equal to the Reorder point (#TT03980/24)
> - MPS - Fixed bug in MPS Definition in the Forecast tab that occurred when many lines were processed (#TT04485/24)
> - FI - Printing report of depreciable assets: resolved error in definitive printing of the depreciable assets book (#TT04500/24)
> - MES - Fixed bug in the unloading of production declarations regarding the consumption of the semi-finished good produced in the previous phase in case it was the first and external (#TT03883/24)
> - MS - Improved and optimized the procedure for generating production orders from forecasts (#TT04513/24)
> - CO - Fixed bug in the filter of the article class in the Cost calculation procedure (#TT04512/24)

### Patch 608.1-0055 - 10/17/2024
> - FI - communication of periodic VAT settlement- revision of printing for the indication of previous period debt not exceeding €100 (field VP7)
> - CO - in the procedure of Adjustment Journal of mid-year closings, revised management of alternative groupings (#TT01216/24)
> - MPS - Fixed bug in the MRP procedure (#TT04322/24)
> - SCM - Fixed error that did not allow multiple item entries in the Request for Quotes (#TT04334/24)
> - SD - Resolved exception that prevented modifying the list price from item registry (#TT04237/24)
> - SCS - Fixed error in Work Account Orders that sometimes did not load materials for the first item line entered (#TT04112/24)
> - WM- Fixed bug in calculating the article cost when a warehouse movement with a zero consideration reason and a negative cost is inserted (#TT00305/24)
> - Added flags to supervisor events to skip logging and automatically delete after n days (#TT04430/24)
> - SD - Optimization of the grid 'Article-Customer Notes' in the Miscellaneous tab of customer registry (#TT01967/24)
> - MS - Optimized and improved the general planning procedure and fixed bug in the "Check overdue documents with ATP" function (#TT03837/24)
> - MS - Fixed bugs in general planning (#TT03785/24 - #TT04245/24)
> - PR - Fixed import of bank movement files where the registration and bank currency dates were inverted (#TT04435/24)

### Patch 608.1-0054 - 10/03/2024
> - SH - Document - Fixed bug in loading multiple documents in folder mode as the program went into disconnection (#TT03705/24 - #TT02202/24)
> - CO - revision of monthlyization calculation of period processing (#TT04072/24)
> - in the calculation of purchase invoice totals, management of VAT rates with 'Reverse charge' flag for mixed invoices (#TT03198/24)
> - SD - Print Billing Summary - Fixed subreport bugs recalculating VAT and expenses (#TT03249/24)
> - SD - modified the message when opening the customer order from which a project was generated inserted in a supplier order (#TT03608/24)
> - MES - Optimized the reporting procedure (#TT04017/24)
> - SH - Fix the filter of additional data: columns loaded from profile. Skip the column if invalid (#TT01838/24)
> - SCM - In the automatic creation of supplier orders from customer orders, it is now possible to use items whose description exceeds 200 characters (#TT04031/24)

### Patch 608.1-0053 - 09/20/2024
> - WM - Added variant in the ValorizatedBOM and ValorizatedItemCostBOM report of the bill of materials
> - SCM, SCS - Fixed error in expense allocation with flag Allocated entered in document summaries (#TT02336/24)  
> - CO - revision of deletion of closing records in mid-year closings (#TT03976/24)
> - SH - Creating Attached Documents docx - improved Preview (#TT03095/24)
> - CO - Added Variant cost column in cost calculations. This reports values present in the variants tab of the item registry (#TT03057/24 - #TT03043/24)
> - FI - Print Book of Assets with non-solar exercise (#TT03716/24)

### Patch 608.1-0052 - 09/12/2024
> - PM- fixed date of expenses automatically entered in the activity declaration generated by the approval status change of the intervention (#TT03640/24)
> - MS - Fixed bug in General Planning; now scheduling with the flag “Also consider the alternatives of materials” works correctly (#TT00306/24)

### Patch 608.1-0051 - 09/05/2024
> - FI - within accounting records, revision of the tax recalculation button (#TT02926/24)
> - FI - revision saving records with new assets during creation, localization RO-HR (#TT03614/24)
> - QY - Article Control - Import articles to check - Resolved anomaly in searching for an article managed in batches, previously imported (#TT03709/24)
> - FI - VAT registration report: modification to allow the use of quarterly/monthly frequency for history (#TT03769/24)
> - SCM - In the Order Fulfillment procedure, the Quantity to fulfill allows the entry of the same decimals as the Residual Quantity (#TT03700/24)
> - WM - In the item registry search form, now the Client and Preferred Supplier fields filter data respectively for client and supplier.  (#TT03698/24)

### Patch 608.1-0050 - 08/08/2024
> - WM - Fixed bug in availability analysis (#TT03349/24)
> - WM - Fixed bug in item registry, which when inserting a variant also created the bill of materials for that variant (#TT03443/24)
> - MPS - Fixed bug in Work Center capacities that considered the capacity of an internal work center given by a planned work order; now, if the planned work order has an internal phase (as sometimes produced internally and sometimes externally) this no longer commits that work center (#TT03406/24)
> - WM - Now in the detail of availability analysis, production order rows value the fields "Linked customer order" and "Linked customer order quantity” if they are linked to a customer order (#TT03549/24)
> - FI - Invoices purchase SDI - missing control for Tax Code (#TT01432/23)
> - SH - Enabled decimals in the Request and Offer columns for Planned Orders, in Availability Analysis (#TT03201/24)
> - FI - the accounting of leasing fees now uses the interest cost account on the specific subaccount set (#TT03582/24)
> - MES- Fixed bug in cost recalculation procedure in case there were variants present (#TT02015/24)

### Patch 608.1-0049 - 07/30/2024
> - MES - Fixed bug in calculating the cost of the item produced with production statements (#TT03408/24)
> - SCM - Valuation Purchase DDT- Fixed error valuation Purchase DDT (#TT03538/24)
> - SCS - Fixed error that when duplicating a Work Account Order forcibly fulfilled did not update the fulfillment status of the materials to be delivered of the new order (#TT03380/24)

### Patch 608.1-0048 - 07/26/2024
---note Attention
With this patch, ticket 2097/24 is released which allows the updating of the quantities of materials to be shipped and utilized by modifying the quantity of the item to be processed both in the production order by phase or level and in the work order. For this, the data of the quantities of work orders that have not been fulfilled or partially fulfilled have been updated. It is recommended to check ongoing orders after the patch installation.
---
> - FI - Resolved exception error in intrastat involving a case related to a credit note (#TT03449/24)
> - WM - In the picking search mask it is now possible to filter for Unfulfilled Pickings (#TT03191/24)
> - MS - New optimizations for the MRP procedure (#TT03485/24)
> - SCS - Fixed error that when duplicating a forcibly fulfilled Work Account Order did not update the fulfillment status of the materials to be delivered of the new order (#TT03380/24)
> - SCS - In Work Orders, a new parameter has been added in the Proposed Material Data called "From production order" used for recalculating the quantities of materials. It is automatically set when creating a work order from the external phase of a production order, upon release of a planned production order with an external phase and upon release of a planned Work Order. Now for proposing material data in the work order, it is possible to have a different parameter for each item line (#TT02097/24)
> - SCS - Fixed error that when duplicating a forcibly fulfilled Work Account Order did not update the fulfillment status of the materials to be delivered of the new order (#TT03380/24)
> - WM - implemented progress bar for Valorization (#TT03460/24)
> - MS - Improved and optimized the costing procedure for orders (#TT00449/24)
> - MS - Optimized and accelerated the MRP procedure (#TT02462/24)
> - MES - Fixed bug in the calculation of job occupation in case the order phases were modified (#TT02662/24)
> - FI- fixed error in the restoration of records from accounting for invoices connected to an asset (#TT02387/23)

### Patch 608.1-0047 - 07/19/2024
> - SCM - Fixed error that did not update the fulfillment status of the RDA following the activation of the Forcibly Fulfilled flag on the article lines (#TT02937/24)
> - SCM - Fixed error that did not update the fulfillment status of the RDA following the activation of the Forcibly Fulfilled flag on the article lines (#TT02937/24)
> - CO - revision of new reclassification for tree management (#TT02912/24)
> - WM - Fixed bug that did not verify negative inventory correctly when the item was inside an unloading registration counterparty (#TT01417/24)
> - CO - Fixed bug in calculating the cost of setup time in the cost calculation procedure (#TT02654/24)
> - MPS - Fixed error that modified the status of a scheduled order following the cancellation of the planned order and scheduling of another order (#TT02393/24)
> - FI - accounting for bills assigns the closing date of commissions based on the due date of the effect (#TT02657/24)
> - WM - In availability analysis, unconfirmed customer orders are not considered (#TT02463/24)
> - SCM - Following the Purchase DDT Valuation via the procedure, the Valued flag is now also reported on the order lines of the DDT (#TT02562/24)
> - WM - Fixed bug that sometimes did not report the reason or location on the first line of documents (#TT02490/24)
> - SCM - in accounting for purchase invoices, revision of assignment of registration date for automatic reversal of "invoices to be received" entry (#TT03056/24)
> - revision of storage of previous year credit from the final print of the periodic VAT settlement of January (#TT02348/24)
> - Review of accounting movements in analytical orders (#TT03053/24)
> - CO - Fixed bug in the report Valued bill of materials where the material cost values were not displayed (#TT03281/24)
> - MES - Fixed bug in production declarations that did not correctly return the batch location value in the unload warehouse movement (#TT02156/24)
> - FI - the accounting for billing effects assigns the closing date of commissions based on the due date of the effect (#TT02657/24)
> - FI - Error registration in journal entry of collection from customer (#TT03209/24)
> - SCM - Error accounting FDR (#TT03262/24)
> - FI - revision of management validation test of accounting reason during accounting entries (#TT03062/24 - #TT03060/24)
> - SD - When converting Offers to Customer Orders, the article ordering present in the Offer is now maintained (#TT03169/24)
> - SD - Revision of control test of the cedent/prestator country in SDI invoice for self-billing, from country field to ISO code field of the VAT number (#TT03368/24)
> - WM - Fixed bug in availability analysis calculation that generated an error in the execution of the mrp (#TT03389/24)
> - MS - Fixed bug in the release of planned purchase orders, now the created RDA are grouped correctly by customer, type, and year (#TT03382/24)
> - SD - In the Create from DDT procedure, a new control has been inserted that prevents the creation of a self-billing from DDT (#TT02889/24)
> - FI - in the accounting for sales invoices, alignment of exchange management for the cost center section (#TT02172/24)
> - SCM - accounting for purchase invoices, assignment of division to movement lines of cost center for expense lines (#TT03239/24)
> - SCM  - Search Purchase DDT - in the valuation column shows the invoice created from the ddt (#TT01055/24)
> - FI - in the accounting for purchase invoices, management in the VAT grid of the VAT field for automatic reasons (#TT02641/24)

### Patch 608.1-0046 - 06/28/2024
> - MS - Fixed error in MRP processing that generated the operation block (#TT02408/24)
> - WM - Fixed bug in excel export of data present in the Implosion components report that did not report the value in the quantity column (#TT02753/24)
> - MS - In the production cycle, when a material is associated with a certain phase, it no longer appears in the help among materials that remain to be associated with the individual phases (#TT02785/24)
> - FI - revision of management of asset numbering assignment in case of changing asset category/precodice (#TT02777/24)
> - FE San Marino - Non-compliant Sales Invoices Now it is possible to report a non-compliant sales invoice for the SM HUB to the state To be Examined for correction (#TT02791/24)
> - FI - in professional fees, revision of the INPS load field for the first tab in case of manual calculation (#TT02802/24)
> - FI - revision of asset control print for the amount of the fund in case of total/partial alienations (#TT02537/24)
> - SH - Modified descriptions of records in fixed table “Legal Nature,” to differentiate ‘Residents’ from ‘Non-residents’ as per the 770 instructions table (#TT02870/24)
> - FI - Fixed bug in the Enasarco print launch form that did not correctly manage the filter for date range (#TT00824/24)
> - CO - Revision performance of new budgeting for financial statements (#TT02912/24)
> - PM - modified price proposal in request for interventions and planned interventions - if the item is not present and a project is assigned, item and price are proposed by project. If the item is already present and a project is assigned, if the item in the document and in the project coincide, the price is updated by project. Otherwise, it keeps the price already present (#TT02837/24)
> - SCM - If the Alternative Unit Price flag is active in the Request for Quotation, when creating the Supplier Order from the Supplier Offer the flag will also be reported in the created order (#TT02804/24)
> - SCM - Fixed bug that did not display Code/Description of the Supplier Item in the Order Line Detail form when the order was unfulfilled (#TT02344/24)
> - SCM - Expenses with the Allocated flag entered in the document summaries are now allocated to the document items even when prices are zero (#TT02336/24)  
> - ELECTRONIC INVOICING SM - Performing the restoration of the status from Generated or discarded Hub SM to Checked eliminates the integration file of the SM purchase invoice, bringing the status back to unexamined also resets the filename (#TT03054/24)
> - SH - Availability Analysis- the check that if the bill of materials flag is set there is only one item set has been moved when clicking the ribbon button Search (#TT02783/24)

### Patch 608.1-0045 - 06/14/2024
> - WM- Implemented the ability to save the sorting of the bill of materials and prototypes in the profile. (#TT02677/24)
> - WM - Fixed bug in the inventory print that was valued related to the inventory historicization flag.  (#TT02708/24)
> - BZ - In the standard import ‘Items and Barcode’ it is possible to fill in the ‘Default Supplier Pref.’ column with TRUE or FALSE values (#TT02245/24)
> - BZ - In the standard import ‘Items and Sales Price Lists’ fixed problem during import of discounts (#TT02245/24)
> - FI - revision of accounting for purchase invoices with rows with/without purchase revenues on the same subaccount (#TT02771/24)
> - PM - generation of interventions from requests for interventions, corrected procedure so that the intervention times are inherited from the request for intervention (#TT02748/24)
> - SD - Selecting Grouping by Type and Payment Solution within the Grouping parameters in destination documents will report the payments present in the source documents (#TT02403/24)
> - MES - Fixed bug in production reports concerning the location of produced items and managed in batches (#TT02667/24)

### Patch 608.1-0044 - 06/10/2024
> - SCS - Rounding for Cdc on purchase order, Purchase DDT, Purchase Invoice TT02500/24.
> - SCM - The purchase request must be considered executed if all lines are executed, except for note lines TT02389/24.
> - SD - Fixed error that prevented the reversal of a Sales DDT containing also note-type lines (#TT02585/24)
> - MPS - Fixed error in the visibility of availability in the MPS Definition procedure from Stockout (#TT02448/24)
> - FI - revision of closing commissions in accounting records of receipts/payments (#TT02501/24)
> - MES - Fixed error in Production Declarations that did not allow restoring the registration in case there was a reference in the PM_ProjectItemDetails table (#TT02419/24)
> - PM - fixed display of % progress and descriptive lines in the report detailed project progress (#TT01386/24)
> - MPS - Fixed error in the Automatic Generation of production flow from Customer Order that did not generate the summary message with the orders and created orders (#TT02578/24)
> - FI - revision of cost center management in accounting for sales invoices (#TT02621/24)
> - CO - Optimized the procedure for cost calculation.  (#TT02255/24, #TT02209/24)
> - SCM - Created a new report for supplier orders 'Schedule with alternative UM' with the following properties - dates in European format, remaining quantity column, UM column, consideration of alternative UM in the price if provided in the document (#TT01820/24)
> - SCM - Resolution of error that did not make visible the Delivery Date in the Order Portfolio report (#TT01819/24)
> - Fixed bug with lines containing Debit and Credit (#TT02694/24)
> - MS - Release of planned orders - The fixed quantity of the parent in the bill of materials will be considered during the release of Production and Work orders.(#TT00873/24)
> - MS - Release of Planned Orders - Incorrect total quantity consumption of materials if the Order is divided into multiple batches (#TT01949/24)
> - FI - aligned behavior of asset control print that now returns results from all categories if no specific category is selected (#TT02502/24)
> - SD - Implementation of opening orders after conversion(#TT02247/24)
> - PR - Incorrect VAT transfer after default (#TT02378/23)
> - WM- Fixed bug in the prototype management that generated an error when closing a prototype (#TT02678/24)
> - WM - Fixed bug in prototype management that did not correctly display the fictitious flag of the items (#TT02679/24)

### Patch 608.1-0043 - 05/31/2024
> - WM - Fixed bug in the visibility of errors in the warehouse valuation procedure in case they were more than 100,000 (#TT02320/24)
> - SD - Fixed issue in sales documents that did not adequately manage the commission in the presence of agents linked to a customer destination and NOT linked to any destination but simply to the customer (#TT00273/24)
> - FI - Resolved issue that generated an error closing the Account View form after sorting on the Registration Date column (#TT02041/24)
> - PR - revision of cash flow printing for totals beyond the final date (#TT00241/24)
> - FI - Accounting for incoming purchase invoices - revision of the proposed due date inside the created accounting record (#TT01888/24)
> - FI - in the party search mask, reactivated the button to update party status (#TT02145/24)
> - FI - the resumption of asset depreciation in the mid-year shutdown module now applies, if present, the custom percentage of the asset header prioritizing over the percentage in the asset category (#TT02070/24)
> - FI - revision of the write-off procedure for VAT closing in suspension (#TT02398/24)
> - SCM, SCS - When the Alternative Unit Price flag is changed within a Purchase invoice that values a Work Account Return, it is also modified in the Return and the related record if present. When the flag is modified from within the Work Account Return, the amounts are recalculated in the Inventory Registration (#TT00698/24)
> - FI - In cases where a file with non-compliant data is imported in incoming purchase Sdi documents, an exception is no longer generated, but the viewer will present a blank page (#TT02322/24)
> - FI - fixed bug that did not correctly manage the VAT transfer in the area of VAT for cash, when the collected party originated from a previously unpaid RiBa (#TT02378/23)
> - FI - revision of the periodic VAT liquidation print for periods with no data (#TT01779/24)
> - FI - in the manual reconciliation of bank accounts, enabled the ability to change filter dates (#TT02390/24)
> - SCS - When registering a Work Account Return, the stock of materials is first checked against the current date and then against the date used for warehouse registration (#TT02394/24)
> - PR - automatic reconciliation of bank accounts, closure of message box to display the message ‘Please wait…’ (#TT02392/24)
> - SD - When the Sales area parameters have the 'Block document insertion on holidays from the factory calendar' flag active, the holiday date check is performed first in the Factory Calendar, then in the Production Capacity Calendar (#TT02396/24)
> - SCS - When inserting a Work Account Order for a supplier that has a predefined price list, if the inserted item is not present in the price list, the proposed price is zero (#TT02234/24)
> - FI - accounting for purchase invoices, revision of cost center rounding (#TT02483/24)
> - MES - Fixed bug in production reports that displayed the wrong UM in the phase quantity field (#TT02459/24)
> - FI - fixed error on the rollback of invoice registration connected to an asset file (#TT02207/24 - #TT02277/24)

### Patch 608.1 -0042 - 05/23/2024
> - CO - Resumption of depreciation of assets in mid-year closings, revision of cost center management (#TT02315/24)
> - SD - Revision of accrued commissions printing for the case of collection of a party reopened after an unpaid (#TT02095/24)  
> - Release new 2024 print for the effective report for localization CH
> - CO - Controlling, internal closures, 'integration writings' returns wrong values in Cost centers(#TT02319/24)
> - SD - In the discount line of the advance, the project is now also reported, if present in the invoice line of the advance (#TT02170/24)
> - MS - General planning - Corrected anomaly of proposed dates in Planned Orders (#TT02150/24)

### Patch 608.1 -0041 - 05/16/2024
> - PR - fixed bug that used the third-party client account in cash flow for external phases in the work order instead of the actual supplier (#TT02034/24)
> - FI - revision of economic competence dates assigned to reopening records of adjustments from automatic account closing (#TT01535/24 - #TT01814/24)
> - FI - in the party compensation, revision of party filter management regarding the type of compensation, management of decimals in grid fields (#TT02113/24)
> - MES - In Production Declarations, the detail of Location was added in the error message due to insufficient stock (#TT02064/24)
> - SD - In Conversion from Offer to Order, the final item discounts entered in the Offer are reported in the Order item lines (#TT02103/24)
> - SH - In Sales Invoices and Sales and Purchase DDTs is now possible to enter weights with decimal figures (#TT02163/24)
> - SCM - Fixed bug that did not correctly save a profile in the Purchase Requests filter Not fulfilled (#TT02123/24)
> - WM, SCM, SCS , SD - Fixed bug in the formulation of the progressive of the batch code (#TT02142/24)
> - FI - Intrastat 2, fluentis545 - Error in data resumption from CustomPosting records (#TT02243/24)
> - MES - Fixed bug in Material picking list in case the 'Associate batch for picking list' flag is present in the production parameters. Now the batch associated with the material in the production order is correctly reported also in the created pickings (#TT05094/24)
> - PR - Accounting supplier payments, revision of string notes management when the reason does not provide grouping of payments in the journal (#TT01702/24)
> - CO - Revision totalization groups in the report of revaluations, in case of comparisons
> - WM - Fixed bug in the article cost calculation procedure in case a warehouse movement with a zero consideration reason and a negative cost was inserted (#TT00305/24)
> - Added flags to supervisor events to skip logging and automatically delete after n days (#TT04430/24)
> - SD - Optimization of the grid 'Article-Customer Notes' in the Miscellaneous tab of customer registry (#TT01967/24)
> - MS - Optimized and improved the general planning procedure and fixed bug in the "Check overdue documents with ATP" function (#TT03837/24)
> - MS - Fixed bugs in general planning (#TT03785/24 - #TT04245/24)
> - PR - Fixed import of bank movements where the registration and bank currency dates were inverted (#TT04435/24)

### Patch 608.1 -0040 - 05/09/2024
> - Revision of residual calculation for currency items (#TT04613/24)
> - FI - print assets control, revision of signs for depreciation funds (#TT04667/24)
> - MES - Fixed bug in registration of production reports (#TT04825/24)
> - MES - Fixed bug in recording production declarations (#TT04826/24)

### Patch 608.1 -0039 - 04/29/2024
> - FI - Revised criteria for including the currency in invoice printing (#TT00414/25)
> - FI - VAT Settlement with flag 'calculate advance' (TT00414/25)
> - FI - Fixed the issue of missing reporting of country of origin, country of dispatch, and destination province in intrastat lists. Fixed missing reporting of the transport mode field in the printing. Ref. #TT05326/24
> - FI - Fixed error in accounting invoices for exports involving missing states (#TT02112/23)
> - WM - Corrected bug in invoicing printing (#TT0106/23)
> - SD - Fix responsible staff access to DDT.

### Patch 608.1 -0038 - 06/15/2024
> - WM - Improved the summary reports view in warehouse management (#TT03116/23)
> - CO - Updated revenue estimations in cost reporting (#TT00943/23)
> - FI - Revised importation process for taxpayers (#TT01719/24)
> - MES - Fixed bugs in generating product details reports (#TT04216/24)
> - PR - Resolved inconsistencies regarding due date assessments in invoices (#TT02280/24)
> - SD - Improved clarity in payment terms for service providers #TB02104/23 ##

### Patch 608.1 -0037 - 04/16/2024
> - PR - Updated report for sales predictions - following categorizations (#TT02273/24) 
> - MSD - Resolved errors in visibility of work orders affecting activity records initiative submissions (#TT02213/24)
> - WMS - Fixed reading discount amounts for line assignments (#TT02241/23)
> - SCS - Revised error relating work account transfers digitization activities (#TB02354/24)

### Patch 608.1 -0036 - 04/08/2024
> - SCS - Updated error prevention processes of automatic materials allocation in work account orders (#TT02336/24) 
> - PR - Corrected edits to corresponding summary counts in cash flow (#TT02300/24) 
> - WM - Fixed frequency rate error in cash flow for repeated orders #TT02406/24

### Patch 608.1 -0035 - 03/31/2024
> - FI - Improved temporary restructuring procedures on order records to enhance performance (#TT02130/24)
> - SH - Error correction in synchronization issues (#TT02159/23) 
> - BM - Recent algorithms improved clarity for item search data (#TT02014/23) 

### Patch 608.1 -0034 - 03/15/2024
> - FI - Improved taxation processes for transaction orders (#TT02130/24)
> - PR - Updated particulars for order representation activities connected with reports (#TT02233/24)
> - SH - Resolved problems with survey submissions during processing (#TT02256/23)

### Patch 608.1 -0033 - 03/14/2024
> - SH - Improved sales status monitoring procedures in reports for planning audiences improvements.

### Patch 608.1 -0032 - 02/28/2024
> - FI - Earnings brackets... #TT01713/24
> - PR - Updated correction procedures for planning factors linking to cash flow process issues (#TT00721/23)

### Patch 608.1 -0031 - 02/15/2024
> - Updated details for income-loss into controls against item returns (#TT02302/23)
> - Improved links between cash flows and VAT graphics for financial calculations in estimating and generating reports (#TT01963/23)
 
### Patch 608.1 -0030 - 01/30/2024
> - WMS - fixed bug related to reconciliation with stocks. (#TT02234/23)
> - Revised field usage issues on reports engaging active branch projections (#TT02185/23)