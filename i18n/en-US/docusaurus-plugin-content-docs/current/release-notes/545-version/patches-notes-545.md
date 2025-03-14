---
title: Patch notes Version 545 (Patch notes Versione 545)
sidebar_position: 1
---

### Patch 545.1-0115- 07/03/2025
> - FI - revision of the periodic VAT settlement print filter with quarterly frequency and quarterly advance calculation (#TT00866/25)
> - FI - Incorrect calculation of VAT settlement (#TT03165/24)
> - FI - Periodic VAT settlement print - the VAT purchase register is not included in the printout (#TT01236/25)

### Patch 545.1-0114- 28/02/2025
> - Bizlink – Excel import of invoices – Non-mandatory returns of price, unit of measure, and VAT to import the note lines (#TT00639/25)
> - FI - revision of the periodic VAT settlement print filter with quarterly frequency and quarterly advance calculation (#TT00866/25)
> - FI - Incorrect calculation of VAT settlement (#TT03165/24)
> - Optimization of the "Warehouse Report" printout
> - PR - Field "Progress" in the Cash Management module (TT02060/24). Changes were made to the progressive field of Cash Management form. The profile can be affected by the changes.
> - FI - revision of the accounting of adjustments with the option 'single record’, restoration of the link field ‘-1’ to null when the record cannot be saved due to discrepancies
> - FI - Unlimited digit number on currency adjustment procedure (TT00991/25). Changes were made in the exchange field of CurrencyAdjustmentAccounting form. The profile can be affected by the changes.
> - FI - partial payments for VAT delayed (TT01013/25)

### Patch 545.1-0113- 14/02/2025
> - FI - revision of the print ‘Difference between open items and accounting balance’, display results also for the ‘detailed’ print (#TT00121/24)
> - WM - fix stock check for each unloading between unload date and current date (#TT02878/23)
> - Aog - fix for the purchase order creation window from a purchase request - when the window was closed and a prototype order was selected, an order was still created even if the procedure was not started (ref #TT00335/25)
> - SCM - The creation of the purchase invoice from the Sdi file no longer reflects the payment settings of the supplier record (#TT04209/24)
> - MPS - Corrected a bug in the release of planned orders of contract work where the unit of measure was not correctly entered in the case of items managed with an alternative unit of measure (#TT05068/24)
> - FI - F20215 - fast compensation error (#TT00415/25)
> - NIR Loading - resolve the issue when the registration has a load counterpart - propose lots (#TT00472/25)
> - MPS - Now the proposed delivery date in planned orders originating from items managed with stock through the MRP and scheduling procedure correctly takes into account the procurement lead time (#TT03597/24)
> - WM - Corrected error in generating RDA from Understock that truncated the description of articles if it exceeded 20 characters (#TT00136/25)
> - SCM - Corrected error that did not properly update the fulfillment status of the Purchase Request following the forced fulfillment of some lines (#TT00397/25)
> - Release of Unique Certifications printing for 2025.

### Patch 545.1-0111- 18/12/2024
> - SH - Error in opening "Tax Regime" (#TT05028/24)
> - SCM - Error in the delivery note of the purchase during loading and rollback (#TT05306/24)
> - SCS - If the Company provides Controlling Management (with the homonymous flag in the Company table), the Fulfillment of a DDT or Return within an invoice shows the unload document dates for accounting dates, if not present, the document dates (#TT05126/24)
> - FI - issues during cancellation of the final VAT settlement printing (#TT04859/24)
> - FI - the final print of the periodic VAT settlement now stores the credit balance in the previous credit field of the periodic VAT declaration form, no longer in the field of previous period VAT variations (#TT03694/24)

### Patch 545.1-0110- 28/10/2024
> - MES - Corrected bug in production orders regarding the order data completion button. The problem occurred when there were multiple lines of the same item in the bill of materials without indicating priority (#TT05019/24)
> - PR - in the Collection Advances module, cash receipt accounting procedure, management of the movement description parameter (#TT04923/24)

### Patch 545.1-0109- 21/10/2024
> - ARM - Workflow: Conditional state transition (#TT04384/24)
> - SD - Optimization of the 'Customer-Item Notes' grid in the Miscellaneous tab of the customer record (#TT01967/24)
> - MPS - Corrected bug in general scheduling when scheduling an item that has an alternative material with a null quantity in its bill of materials (#TT04639/24)
> - In the fulfillment of supplier orders in bills and purchase invoices without analytical recalculation, revision of center assignments based on warehouse priorities (#TT01624/24)
> - Revision of the excel import of sales invoices, fix for the lookup of the ‘Cedente’ field
> - Bizlink - export Piteco - filter for accounted payments.

### Patch 545.1-0108- 24/10/2024
> - SD - in the accounting of sales invoices, exclusion of lines with collection expenses of 0 (#TT01642/24)
> - SCS - Corrected error in Work Order that multiplied the quantities of materials to be used (#TT03904/24)
> - SCM - Corrected error that prevented multiple entries of items in the Request for Quotation (#TT04334/24)
> - WM - Corrected bug in item cost calculation procedure when a warehouse movement is entered with a causative reason considering zero movements and with a negative cost (#TT00305/24)
> - PR - corrected error during the accounting of advances report that doubled values (#TT01262/24)
> - CO - skipping FA_Pagam rows with both amount and percentage 0 (#TT04477/24)
> - MES - Corrected bug in the unloading of production declarations concerning the consumption of the semi-finished product in the previous phase in case this was the first and external one (#TT03883/24)

### Patch 545.1-0107- 26/09/2024
> - MPS - Implemented management of non-integer line numbers in the MPS Definition procedure (#TT03992/24)
> - CO - revision of the monthly calculation of the periods processing (#TT04072/24)

### Patch 545.1-0106- 20/09/2024
> - SH - Contact-fix load ItemCustomer collection problem (#TT01967/24)
> - WM- Movement Cards - Added AccountId, AccountCode, AccountDetailCode, and AccountDescription parameters to calculate the initial stock for the supplier (#TT03922/24)
> - WM - Added variant in the ValorizatedBOM and ValorizatedItemCostBOM report of the BOM valuation
> - FI - manage the accrual date ranges from closure settings (#TT04008/24)
> - MS - Corrected bug in general planning that did not delete planned orders linked to cash flow (#TT03806/24)
> - MS - Corrected bug in the release of planned production orders, due to which the contract work order created from an external phase was not correctly valued if the reference phase was not indicated in the price list (#TT03885/24)
> - SH - Update IBAN structure check for country AE (United Arab Emirates) (#TT03985/24)
> - CO - revision of the cancellation of inventory records in the inter-annual closures (#TT03976/24)
> - CO - Added the Variant cost column in cost calculations. This shows the values present in the variant tab of the item registry (#TT03057/24 - #TT03043/24)
> - SCS - It is possible to save the return of contract work without indicating the lots in the materials if the flag “Lots and serial numbers required” in the work settings is disabled. (#TT03989/24)

### Patch 545.1-0105- 05/09/2024
> - SD - Creation of invoices from DDT - corrected error during the creation of invoices from sales DDT (#Ticket #TT03745/24)
> - FI - VAT register report - change to have the possibility to use quarterly/monthly for history (#TT03769/24)
> - PM- added now in the field "start date" of the resources assigned to project wbs (#TT03545/24)
> - WM - Corrected error in the Printing Valuation of Assemblies that did not correctly calculate costs in the case of components with quantities different from one (#TT02175/24)
> - FI - corrected error during the insertion of an increasing asset component of partially depreciated asset with partially non-deductible VAT (#TT01937/23)

### Patch 545.1-0104- 08/08/2024
> - WM - Corrected bug that did not correctly check negative stock when the item was within a unloading registration in counterpart (#TT01417/24)
> - MPS - Corrected bug in the Release of Contract Work Orders that reported only the item price but not the Price List (#TT02812/24)
> - revision of the credit year storage from the final print of the periodic VAT settlement of January (#TT02348/24)
> - SD - In the Create from DDT procedure, a new check was added to prevent the creation of an autofattura from DDT (#TT02889/24)
> - SCS - Corrected error in Return of Contract Work that did not allow the modification of the purchase Invoice type on item lines (#TT03212/24)
> - SD - Corrected error that did not allow forced fulfillment of a Customer Order when it was linked to a Planned Production Order containing Extra Data (#TT03267/24)
> - MPS - Corrected bug in Work Center capacities that accounted for the capacity on an internal work center given by a planned contract order; now, if the planned contract order has an internal phase (because sometimes it is produced internally and sometimes externally) this no longer commits that work center (#TT03406/24)
> - MPS - Corrected bug in general scheduling that generated planned orders with incorrect quantities (#TT03354/24 - #TT03204/24)
> - SCS - Resolved bug that allowed modification of the Item Quantity in a Contract Work Order already fulfilled in DDT (#TT02529/24)

### Patch 545.1-0103- 27/06/2024
> - SD - Correction of the error that required a tiered discount in case of inserting the Mask in a new Rounding (#TT00756/24)
> - SD - in the invoicing balance report, revision of the management of signs in the subreport of totals for sales turnover (#TT02720/24)
> - WM - Corrected bug in the excel export of data present in the components implosion report that did not show the value in the quantity column (#TT02753/24)
> - FI - Corrected bug in the launch form of the Enasarco print that did not correctly manage the filter for date range (#TT00824/24)
> - QY - Corrective actions - Revision of validation logics for information present in the verification next audit tab (#TT02916/24)
> - SCM - If the Alternative Unit Price flag is active in the Request for Quotation, when creating the Supplier Order from Supplier Quotation the flag will also be reported in the created order (#TT02804/24)
> - SCM - Corrected bug that did not display the Code/Description of the Supplier Item in the Detail lines Orders form when the order was not fulfilled (#TT02344/24)

### Patch 545.1-0102- 03/06/2024
> - SD - In DDT and Invoices added preliminary check for lot unloading, in case of negative lots (#TT02237/24)
> - WM - Corrected bug in displaying warehouse valuation errors if they exceeded 100,000 (#TT02320/24)
> - SD - Corrected problem in sales documents that did not adequately manage commissions in the presence simultaneously of agents linked to a recipient / destination of the customer and NOT linked to any recipient / destination but simply to the customer (#TT00273/24)
> - FI - monthly intrastat sales only for tax purposes (#TT01966/24)
> - MPS - Corrected a technical problem related to customizations regarding scheduling (#TT02304/24)
> - MPS - Corrected bug in calculating the start date of planned purchase orders (#TT03587/23)
> - SCM, SCS - When the Alternative Unit Price flag is modified within a Purchase Invoice that values a Contract Work Return, it is also modified in the Return and the related registration, if present. When the flag is modified from within the Contract Work Return, amounts are also recalculated in the Inventory registration (#TT00698/24)
> - SCM, SCS - When the Alternative Unit Price flag is modified within a Purchase Invoice that values a Contract Work Return, it is also modified in the Return and the related registration, if present. When the flag is modified from within the Contract Work Return, amounts are also recalculated in the Inventory registration (#TT00698/24)
> - SD - When in the parameters of the Sales area the flag ‘Block document entry on public holidays from the factory calendar’ is active, the festive date check is performed first in the Factory Calendar, then in the Production Capacity Calendar (#TT02396/24)
> - SCS - Rounding for CDC on purchase order, DDT purchase, purchase invoice (#TT02500/24)
> - SCM - The purchase request must be considered fulfilled if all lines are executed, except for note lines (#TT02389/24)
> - FI - Restore functionality for adjusting partial payments from the payments grid (#TT02559/24)

### Patch 545.1-0101- 16/05/2024
> - SH - The Duplicate item procedure also includes Notes from preferred Suppliers (#TT01580/24)
> - SCM - Corrected error that proposed the same 'Supplier item description' in the 'Order fulfillment' procedure for all preferred suppliers of the item (#TT01501/24)
> - FI - in accounting registration, blocked the possibility of modifying payment lines derived from recipient payments, a rollback must be performed and the payment amount modified in the accounting procedure (#TT00909/24)
> - MES - In Production Declarations, the Location detail was added to the error message due to insufficient stock (#TT02064/24)
> - SCM - Resolved bug that did not correctly save a profile in Requests for Purchase with filter Not fulfilled (#TT02123/24)
> - WM - Corrected bug in the formulation of the progressive lot code (#TT02142/24)
> - FI - Intrastat 2, fluentis545 - Error in data recovery from CustomPosting registrations (#TT02243/24)

### Patch 545.1-0100- 03/05/2024
> - FI, PR - revision of accounting records for partitions created on divisions different from the active one (#TT01401/24)
> - FI - in case of controlling management, adjustment registrations no longer foresee the assignment of an economic competence date to accounting/cdc/cdp lines, while integrations foresee the initial date equal to the economic competence date of the original line (and final date end of month) (#TT01061/24)
> - SCM - Corrected error in updating amounts in warehouse movements in the presence of an expense distributed in the DDT or in the Purchase Invoice (#TT00794/24)
> - SD - Corrected error that modified the fulfillment status of the job after an update of the Delivery date in the customer order (#TT01699/24)
> - FI - revision of the final print of the periodic January VAT settlement for saving credit from the previous year/credit from the previous period (#TT01160/24)
> - CRM - The sender reported in the Newsletters is taken from the 'From' field present in the header of the Newsletters (#TT01770/24)
> - FI - quarterly communication of VAT, alignment 2024 (#TT01141/24)
> - SD - Search for Commissions by destination - corrected the search for the % commission by customer and destination goods (#TT00273/24)
> - MES - Resolved bug in recalculating the start and end date of the phases of the production order (#TT03584/23)
> - MPS - Resolved bug in the creation of planned orders in the case of materials with fictitious levels (#TT00562/24)
> - MPS - Corrected bug in general scheduling in the case of scheduling many lines simultaneously (#TT01451/24)
> - MPS - Corrected bug in general scheduling for unexamined jobs (#TT02897/23)

### Patch 545.1-0099- 28/03/2024
> - SD - changes for eFattura Romanian version
> - FI - blocking FSPostingPaymentSet recalculation when entering a registration and not recalculating the partitions (#TT00362/24)
> - SCM - Correction of the error that prevented the Valuation of DDT in case of Document Number up to 20 digits (#TT00849/24)
> - SD - Exception handling for electronic invoices peppol (#TT01258/21)
> - SD - Implemented and improved the functionality of the flag “Forced Fulfilled” present in the lines of sales orders and also of the fulfillment status field present in the head (when “Forced Fulfilled” is selected); now when they are activated a message will be shown warning that "The forced fulfillment of the line entails the automatic deletion of any planned orders linked to jobs in scheduled status and the fulfillment of jobs in scheduled and unexamined status. As for documents generated in relation to jobs in launched or executive status, jobs and documents will not be modified.” (#TT00219/24)
> - FI - Screen printout of VAT liquidation (#TT01127/24)
> - SD - The various expenses present in Orders are all reported in the summary document that fulfills the Orders (#TT01102/24)
> - MPS - Corrected error that prevented the cancellation of a Production Job (#TT01011/24)
> - FI - VAT credit in the file for LIPE also takes into account the non-deductible VAT from pro-rata (#TT01596/23)
> - CO - in the printout of the consolidated Project, revision of filter by project type (#TT01172/24)
> - WM - Improved visualization in availability analysis of pickings created via the material picking list (#TT01205/24)
> - SD - Resolved incorrect exposure in matured commissions printout in some cases that were already linked to agent settlements (#TT01208/24)

### Patch 545.1-0098- 08/03/2024
> - FI - Export Intrastat- customs section and negative value in summary if entered in the quinquies section (#TT00580/24)
> - MPS - General Scheduling- It is now possible to delete a planned order even when it is contained within a Cash Flow (#TT00684/24)
> - CO - depreciation calculations for controlling, revision of initial data processing (#TT00477/24)

### Patch 545.1-0097- 01/03/2024
> - FI - When creating a sales invoice from an advance payment, the deadlines are created with the Manual flag (#TT00672/24)
> - CRM - In sending Newsletters, the content of the Company Email property of dynamic Distribution Lists is considered as the email recipient (#TT00730/24)
> - SCS - Importing xml returns - corrected import timeout error (#TT02194/23)

### Patch 545.1-0096- 22/02/2024
> - PR - in editing active effects, enabling the modification of the credited flag and effect state when the company is coded for DocFinance (#TT01387/23)
> - MPS - Resolved bugs in scheduling (#TT01685/23, #TT00403/24, #TT00083/24, #TT03527/23, #TT00186/24)
> - CRM - Resolution of the error that prevented the sending of Newsletters if there was a dynamic Distribution List (#TT00551/24)
> - FI - revision of the periodic VAT settlement print, visualization of the subreport of the plafond only if this has a default flag
> - WM - Corrected bug in the warehouse valuation procedure (#TT00596/24)
> - MPS - Resolved bug in the General Scheduling procedure (#TT00462/24)
> - WM - Corrected error in converting the alternative quantity coming from a Return of Contract work, in the Movements Detail form (#TT00517/24)

### Patch 545.1-0095- 08/02/2024
> - WM - Added on the Warehouse Journal report the filter for company and division (#TT00375/24)
> - SD - Resolve the issue of exporting the "SDI Status" column (#TT00321/24)
> - FI - change in calculation for non-deductible - version RO
> - SCM - purchase requests - solve the problem of saving lines on analytics without cost center (#TT00095/24)

### Patch 545.1-0094- 06/02/2024
> - WM - Added on the Warehouse Journal report the filter for company and division (#TT00375/24)
> - SD - Resolved the issue of exporting the "SDI Status" column (#TT00321/24)
> - SCM - purchase requests - solve the problem of saving lines on analytics without cost center (#TT00095/24)
 
### Patch 545.1-0093- 25/01/2024

> - SH - Creation of new year - when the fix parameter is true - if there are rows with year of end validity date >= year - to not update to null (#TT00093/24)
> - MES - Corrected bug in production declarations that did not correctly load the UDCP created within the declaration (#TT03393/23)
> - SH - revision of the rollback of counters for the new year, for numerators ex-2010 test if there are documents in the period (#TT00120/24)
> - SD - Revision of management blocking of credit in case the modified document is the one that causes the discrepancy and is already authorized (#TT00206/24)
> - PR - in supplier payments, in the manual insertion of lines, revision management of the currency field for decimal management (#TT00281/24)
> - FI - CU2024- Release of the new Unique Certification report for 2024
> - Added the possibility to add the Custom prefix to flowOperation to customize a standard flow

### Patch 545.1-0092- 09/01/2024
 
> - FI - purchase invoice with non-deductible percentage in Ro - resolved incorrect values in cost center in accounting (#TT03651/23)
> - SD - the intervention lines are reported in the invoice by valuing interventions (#TT03594/23)
> - SD - The VAT of the Declaration of Intent in the Summary Expenses is inserted into the DDT created from Order, even if passed through Picking (#TT02907/23)
> - SD - Revision of rounding field in xml file in case of credit notes with tax-inclusive price (#TT03685/23)
> - SD - The sales invoice can be filtered after the type of person from Contacts - Legal entity (#TT03667/23)
> - SD - Corrected the functioning of the filter on Extra Data in sales DDTs (#TT00058/24)
> - FI - In the mortgage search mask, valuing the 'Remaining Amount' field in grid (#TT03633/23)

### Patch 545.1-0091- 15/12/2023

> - CO - revision of processing periods of the controlling for monthly data beyond the current year (#TT03186/23)

> - CO - in the printout of the consolidated project of the controlling, added filter (not mandatory) for selecting the consolidation record to be printed (#TT03485/23)

> - SH - The 'Destination' column of the 'List of Destinations' grid of the 'Delivery' tab of the contact registry has been adapted to contain up to 80 characters, the same limit as the 'Company Name' of the contact (#TT03307/23)

> - SCM - Loading Mazzino - resolved the insertion of the value of the warehouse movement when the document line has the Alternative unit of measure but alternative quantity 0 (#TT01740/23)

> - SCM - Loading Mazzino - resolved the insertion of the value of the warehouse movement when the document line has the Alternative unit of measure but alternative quantity 0 (#TT03069/23)

> - CO - in the accounting of inventory in the inter-annual closures, valuing the description of the movement for all created records (#TT03495/23)

### Patch 545.1-0090- 07/12/2023

> - SD - If the Article Description exceeds 250 characters in the xml file, the import of the PEPPOL Order truncates the string for the exceeding characters (#TT03258/23).

> - SCM - Resolved outgoing exception in order fulfillment in DDT, caused by a missing parameter (#TT03287/23)

> - FI - alignment of analytical competence dates with changes in compensation details (#TT03153/23)

> - FI - revision of account assignments in adjustment entries of inter-annual closures (#TT03349/23)

> - SD - In the 'Accounting invoices' procedure, the filter in the 'Accounting registration' grid of the Previous tab was removed (#TT02115/23)

> - SD - Revision of the calculation of the enasarco company quota for automatic reversal of the minimum paid in previous quarters (#TT03396/23)

> - CRM - Resolved outgoing exception when clicking the Send button in a Newsletter (#TT02563/23)

> - SCM - XML file import - revised formatting of the date in the import of the XML file (ref #TT03194/23)

> - FI - RO add new accounts on FastStart 

> - WM - Create the possibility to reach a second user’s inventory list even if the inventory is opened by another user 

> - SH - RO data proposal from version 8 of Anaf 

### Patch 545.1-0089- 17/11/2023
 
> - SD - In the case of Partial Fulfillment of an Order in a Picking, subsequent insertion of an item in the Picking, and creation of the Invoice, the item inserted in the Picking is considered in the Invoice summaries (#TT02039/23) 

> - MES - Resolved bug in the calculation of the cost of warehouse movements related to the registration of production declarations (#TT02589/23) 

> - SH - context panel- corrected anomaly on context panel, in case of missing data it does not return an error but does not load the data (#TT02954/23) 

> - MPS - In the RDA created from the Release of Planned Orders, the valid price list for the supplier is proposed even if it is not the default preferred supplier for the item. Moreover, in this procedure, the item is searched in all valid price lists for the supplier, whereas before it was only searched in the last valid price list (#TT02898/23) 

> - CO - management of the controlling comparison (#TT02752/23) 

> - SH - Removed from FSContact -> Code special chars !@#$%^&* | \ / _ . , ; - (#TT03207/23) 

> - CO - in the inter-annual closures, revision of integration entries for possible missing accrual account (#TT03235/23) 

### Patch 545.1-0088- 25/10/2023
 
> - FI - error in creating payments within the accounting registration (#TT01583/23) 

> - WM - In Availability Analysis, also for detail lines related to production jobs, it is possible to view the account, subaccount, and description of the customer (#TT01554/23) 

> - SCM_PurchaseDeliveryNotes -> SCMPDN_Code - change length from 18 to 20 characters(#TT02687/23) 

> - BI - forced conversion to int for numerator and denominator - dashboards  

> - MPS - Improved management of fictitious items in scheduling and availability analysis (#TT01484/23) 

> - MPS - General scheduling- Management of the Version (#TT01863/23, #TT02380/23) 

> - PR - in the accounting records of sbf with customer account closure, added grouping of lines by due date (#TT01130/23) 

> - WM - resolve issue of saving unloading before having a load (#TT02878/23) 

> - CO - Controlling - valuation of the purchasing area in error (#TT02693/23) 

> - BI - Corrected the re-selection of the detail line grid - "An item was added with the same key" (#TT02917/23) 

> - WM - Corrected bug in location management, which occurred when the code of a node was modified (#TT02911/23) 

> - MES - Corrected bug in filtering the article in the "Management cycles and work phases" form in case of using "%" (#TT01411/23) 

### Patch 545.1-0087- 05/10/2023
 
> - CO - management of the UT_SpMapping in stored CO_CalcJobOrderReclassification, CO_CreateProjectFinalCalculation (#TT02652/23) 

> - CO - in the valuation of the purchase DDT in the inter-annual closures, management of the economic competences based on the load receipt information (#TT03206/23) 

> - SCS - Resolved error for incoming unloading of DDT when executing Goods Receipt (#TT00879/22) 

> - MPS - Corrected bug in cost adjustment for internal assessments based on zero movements (#TT02228/21) 

> - CO - revision concerning periods of contention in the industrial accounting of exposé/disclosure (#TT02224/23) 

> - SH - correction for number of remaining days (#TT02218/23) 

> - WM - Fix in managing alternative associated item numbers (#TT02225/23) 

> - QM - added new features in selection of templates (#TT02229/23) 

> - WM - Fixed situation when generating 'Prioritized' orders which dealt with rejected items (#TT02227/23) 

> - SD - Fix on Non-conformities eventually reallocated (#TT02227/23)