---
title: Patch Notes Version 606 
sidebar_position: 1
---

### Patch 606.1-0028: 06/04/2023

> - PR: Resolved issue during the manual creation of supplier payments; when a new payment was created and the items to be entered were called, not all bank-related data was filled in, and it required entering and exiting the payment to get the detailed data filled (#TT00916/23)
> - SCS: If the last movable and productive phase is external, now the work order return correctly updates the produced quantity in the production order. (#TT00736/23)
> - SCS: In work orders, the proposed cost for items without a price list is zero (#TT00978/23)
> - FI: Resolved issue in processing periodic VAT settlement communication; the previous year's credit was incorrectly reported using the same value as the previous period's credit, thus doubling the credit (#TT00875/23)
> - FI: Review test on the balancing of cost/profit centers in case of a company without controlling and without separate management of CDC/CDP in accounting reason (#TT01055/23)

### Patch 606.1-0027: 30/03/2023

> - FI: Review of depreciation calculation for Serbian localization (#TT00682/23)
> - FI: Download exchange rates for HR currency changes (#TT00795/23)
> - SD: Invoice Printing: Fixed script in report (#TT00816/23)
> - SH: Transformation: Changed the priority on the FullTextFiscalDescription transformation so that it works correctly.
> - SCS: Corrected error in remaining quantity in materials of fulfilled work orders in DDT (#TT00459/23)
> - SCS: Added the possibility to fulfill a decimal quantity in expected deliveries (#TT00817/23)
> - SCS: Corrected outgoing error on supplier change in a work order derived from the release of planned orders (#TT00823/23)
> - PR: Resolved error in generating SDD files (#TT00419/23)
> - SCM: Correction of stock balance in case of DDT unloading from the warehouse after valuation (#TT00804/23)
> - SCM: Final discounts entered in invoices are reflected in the lines of the purchase DDT and in the related warehouse registration (#TT00417/23)
> - SD: In the case of creating an invoice from DDT and subsequent unloading of the DDT, the stock view is updated correctly (#TT00802/23)
> - FI: Review VAT settlement date filter periodic/annual
> - FI: Exception 4882/2023, truncation of a string in supplier payments
> - FI: Corrected the unique certification report: the tax code of the signing representative of the communication was not reported.
> - Bizlink: Review localization of invoice references text in Riba file (#TT00888/23)

### Patch 606.1-0026: 09/03/2023

> - Enabled modification of the 'Initial Notes' field in sales invoices even after the creation of ordinary invoice files Sdi (#TT00593/23)
> - SD: Article weights are correctly reported from the order to the DDT even passing through picking (#TT00722/23)
> - FI: Download exchange rates for HR currency changes (#TT00795/23)

### Patch 606.1-0025: 02/03/2023

> - Resolution of the issue with migration vectors.
> - PM: suppliers for which an end validity date >= the activity date in the activity declaration are not proposed in the customer/supplier widget of the document (#TT00555/23)
> - Resolved issue with the Xaml source generator
> - SD: Disabled double-click on POS ticket printing (#TT00611/23)
> - SD: In the fulfillment of multiple orders in an invoice, only the transport cost of the first order is reported (#TT00631/23)
> - SD: Line weight in DDT and invoices is recalculated even when the alternative quantity changes in the case of mandatory alternative UM (#TT00656/23)
> - PM: restored the ability to enter a coded article in a work package node (#TT00643/23)
> - WM: Corrected stock error in the case of valuing an order in DDT and then in a purchase invoice (#TT00661/23)

### Patch 606.1-0024: 23/02/2023

> - FI: Review of the asset depreciation mask for calculation of possession days and attribution of depreciation date in processing (#TT03183/22)
> - Application of renaming files during Intrastat export
> - Import of registrations from DocFinance, reviewed insertion of payment items for exclusion of discount/refund lines
> - CO: Review of the management of compliance dates and accounts used in the accounting of stock, revision of comparison reclassifications for formulas and data details of initial/final stock (#TT00554/23)
> - SD: Correction of duplicate article discounts in the case of changing the selling DDT type (#TT00400/23)
> - FI: Review of management of credit note signs.

### Patch 606.1-0023: 20/02/2023

> - Resolved issue with exporting txt files from BizLink documents
> - FI: Review of F24 file export (#TT00559/23)
> - SCM: Activated filters in the Supplier Orders Aging report (#TT00355/23)

### Patch 606.1-0022: 15/02/2023

> - The reason proposed in the packaging lines of documents is the one present in the movement reason of the returnable packaging (#TT00413/13)
> - SD: Corrected issue with the import of sales invoice deadlines and VAT collection (#TT00482/23).
> - ARM: Corrected the name of the script and hid the script control within the workflow group (#TT00082/23)
> - WM: Summary: added search filters for picking and customer (#TT00415/23)
> - SD: Resolved issue of duplicate batch lines in warehouse registration of a previously unloaded and then valued DDT.
> - SD: Removed spaces from the Iban tag of electronic invoices (#TT00502/23).
> - ARM: modifications for executing the transition (removing the token when the transition is executed), modification of the widget name for GenerateDocumentAction.
> - Added progress for the update process (#TT00082/23)
> - WM: Review of warehouse movements accounting, management of signs (#TT00504/23)

### Patch 606.1-0021: 10/02/2023

> - ARM: Publication of object types of reference properties of custom extension objects.
> - WM: Bug fixed. Resolved bug in the search form for inventory differences (#TT00274/23)
> - MPS: Bug fixed. Resolved bug in general scheduling (#TT00004/23)
> - ARM: corrected user suggestion for email account
> - ARM: corrected generation of custom MVVM templates (do not generate the RW class for objects without RW form)
> - FI: Review of record deletion in VAT Payments table (#TT00056/23)
> - WM: Bug fixed. Corrected bug in inventory differences concerning alternative UM (#TT00292/23)
> - Aligned the Blockly widget for workflow to the new logic.
> - Added a password manager for supervisor parameters.
> - Article control: Resolved various anomalies:
   - Control Plans: Associated Articles: Changes were not being saved;
   - Article Control: Viewing or modifying a control of an article, an error was displayed upon closing;
   - Article Control Parameters: an error was displayed upon opening.
> - Resolved the bug of using the global parameter for the Email activity.
> - SD: Review of XML file creation procedure in case of alternative quantity (#TT00397/23)
> - SCM: Resolved error in Valuation of purchase DDT indicating that the documents were opened by another user and preventing the procedure.
> - SCM: An invoice created from multiple DDT includes a reference note line for each originating DDT.

### Patch 606.1-0020: 02/02/2023

> - MPS: Bug Fixed. Corrected bug in order generation from forecasts in MPS Definition (#TT00284/23)
> - Resolved interface ReadWrite issue on BizLink Import for its automatic detection.
> - SD: The remaining quantity of a Project does not change if I fulfill the linked order in a DDT.
> - Review of split batches algorithm (#TT00233/23)

### Patch 606.1-0019: 31/01/2023

> - FI: URA report in HR localization, exclusion of suspended VAT; detachment of movement type template (#TT00204/23)
> - FI: activation of the "account reopening" flag in automatic closure of accounts for Ro (#TT00254/23)
> - TT00082/23: add to the level of the allowed transition.
> - FI: Application exception: 2074/2023: added an item with the same key.
> - Added Html Blockly widget to create complex Html documents.
> - FI: Parameter to view the percentage of depreciation of each fixed asset: Fluentis2021 (#TT00280/23)
> - SD: Creating DDT from Order carries over the Location of the Order Type even passing through Picking (#TT00248/23)

### Patch 606.1-0018: 24/01/2023

> - PR: Resolution of outgoing exceptions in Accounting advance list (#TT00103/23)
> - Updated script model for BizLink Intercompany.
> - Update script definitions for new BizLink parsers.
> - SCM: accounting of purchase invoices, storing accounting parameters (#TT00126/23)
> - Added PayRoll export for TeamSystem.
> - Added functionality to Intercompany for export.
> - PM / Sprint: corrected creation and opening procedure for sprint for: customer, PM and timeframe.

### Patch 606.1-0017: 18/01/2023

> - TT00050/23: Management of workflow errors during SP invocation in transition.
> - WM: Bug fixed. Corrected bug in creating batches from lots, now the unloading reason of the source lot is proposed correctly : (#TT00122/23)
> - PR: generation of Riba files (#TT03061/22)
> - Packages Management: sorting by article code (#TT03156/22)
> - FI: Procedure for Generating Reminders: Agent Filter (#TT02762/22)
> - MES: Implemented standard in MES for article label report (with or without Lots and/or Serial Number) and UDC label report.
> - FI, PR: Various issues on Liquidity Management (#TT03247/22)

### Patch 606.1-0016: 13/01/2023

> - FI: VAT registers that should not be in the VAT declaration should not be blocked (#TT01902/19).
> - Updated script to create an HTML document from the recordset.

### Patch 606.1-0015: 12/01/2023

> - Export of Chart of Accounts and Cash flow files for DocFinance: management of end line characters as CR+LF even for Fluentis server installations on Linux (#TT00036/23)
> - FI: Review of roll back of compensation payment accounting, maintaining the 'accounted' flag in compensation header; enabling roll back of compensation accounting even if the reason has deletion lock if the item is paid (#TT00010/23)
> - WM: rollback accounting: the server supports a maximum of 2100 parameters.
> - SD: Integrated automatic CONAI calculation in the generation phase of DDT/Invoices from Picking (#TT00057/23)
> - FI: implementation of FA_RO_PreContabInvoice and FA_RO_ContabInvoice_PostProcessVAT (#TT00068/23)
> - SH: Contacts master data: Changed FullAddress transformation so that it also reports the house number if present in the master data.
> - QY: Calibration Instruments: Measuring instruments with equipment-only articles.
> - BI: Resolved the display of the busy message that does not disappear after completing the action. Resized HeaderCode (text of the upper group).

### Patch 606.1-0014: 09/01/2023

> - FI: Review printing of declarations of intent (#TT03407/22)
> - SH: management of general parameter setting widget for accounts, to activate the new one with 1 edit or revert to the previous one with 3 edits.
> - FI: Corrected VatRegisterSale hr-HR for the incorrectly named property in scripts.
> - SD: Printing invoices HR: Added report for HR offset.
> - FI: Cash flow export: the fixed value should be '00001' while now it is '1' (#TT00034/23)
> - FI: review of asset depreciation rollback (#TT00024/23)
> - TT03324/22: allowed to perform a transition without changing state.
> - WM: The help of batches now calculates the decrease in their availability, even if the document has not yet been stored in the DB (#TT00015/23).

### Patch 606.1-0013: 23/12/2022

> - FI: changed condition in VAT_PdvS_HR from MBRI_Id to MBTM_TipoMov (#TT03391/22)
> - FI: VAT_PdvZP_HR, condition to convert to standard (#TT03392/22)
> - FI: creation of telematic file declaration of intent (#TT03407/22)
> - Added search categories for Blockly.

### Patch 606.1-0012: 22/12/2022

> - SH: Correction of the display of simple type Extradata in the grid (#TT03340/22)
> - Resolved scripting issue for ReadOnly objects and Report module.
> - Formatting of scripts aligned with VisualStudio logic.
> - SD: Management of discount bands even when the commission category is not present (#TT03364/22)
> - CO: Review of insertion of lower-level nodes in Fluentis2021 reclassification templates (#TT03334/22)

### Patch 606.1-0011: 15/12/2022

> - CO: Review of processing of interim closing for cost center data, review Valuation of purchases and sales for purchase DDT filter (#TT03149/22)
> - SH: review of saving the reference date of the exchange (#TT03327/22)
> - CO: review of depreciation processing for controlling (#TT3249/22)
> - CO: in comparison of controlling reclassifications, review of the display of period details (#TT03251/22)
> - WM: Picking management: Set default sorting for Article Picking line ID (previously was by Article ID) and including profile management (#TT03315/22)
> - MES: In the material picking list, in the case where picking is created using "Search materials picking", for materials with "Pick type with list", the reason and warehouse that are already present in the line of the production order materials will be set; for materials with "Manual pick type," the reason and warehouse set in the *Pick type* of the *Pick type* used will apply.
> - MES: Corrected bug in production reporting that did not allow the input of the batch of materials managed in batches.

### Patch 606.1-0010: 07/12/2022

> - BI: Dashboards: Discharged the busy indicator when canceling/closing the pop-up parameters module.
> - Added a null widget for Blockly.
> - CO: Review processing of interim closing for cost center data, review Valuation of purchases and sales for purchase DDT filter (#TT03149/22).

### Patch 606.1-0009: 29/11/2022

> - SCS: SubcontractorDeliveryNote Unloading-new filters by number/date/warehouse location.
> - Possibility to prevent the creation of multiple scripts for the same algorithm method.
> - Added localization for Blockly and set to offline mode.
> - PM: managed propagation of extradata in documents linked to the project WBS for which the extradata is configured (#TT02964/22).

### Patch 606.1-0008: 25/11/2022

> - Resolved the issue of the missing user on the Supervisor in the event scheduler.
> - Added a widget selector from xaml for Blockly.

### Patch 606.1-0007: 21/11/2022

> - WM: Configuration of the matrix of items on ExtraData based on SQL data source.
> - Updated script generation code with logic to skip the base function.
> - FI: resumption of asset depreciation, review of procedure management and processing (#TT03100/22).
> - PM: In the valuation of interventions, when valuing a single intervention with extradata in the intervention header propagated from customer master data, it was not reported in the invoice despite the activated configuration. In the valuation of multiple interventions, this case did not occur. Resolved (#TT03087/22).
> - SD: Managed deletion of invoices generated by intervention valuation, also directly from the invoice search form and not only through rollback procedure. (#TT03088/22).
> - PM: Payroll, managed specific cases for travel hours with travel allowances (#TT03000/22).
> - FI: Document type field in asset management (#TT03084/22).
> - FI: Review of saving accounting records with assets in Fluentis2021 (#TT03137/22).
> - FI: communication of periodic VAT settlements, review of calculation for test companies in VAT group (#TT03134/22).

### Patch 606.1-0006: 11/11/2022

> - Updated the Supervisor category script with new comments.
> - SCS: Return with batch-managed materials: Resolved material stock verification for location and subcontractor.
> - FI: review of recalculating items in case of creation on due date and not for payment solution (#TT02916/22).
> - Added refactoring of script code for Linq expressions.
> - PM: added management of "nature" for cost/revenue origin types; corrected some anomalies in SAL processing (#TT02617/22).
> - Released the Supervisor script for the activities RegisterSignalItem, ExecuteMrp, CustomerRisks.
> - CRM: introduced the ability to update tasks directly from the suspended workflow activities that generated them. In case of deletion of the suspended activity, the linked task is also deleted (#TT03016/22).
> - PM: Payroll, in the processing of payslips, the hours configured in the "Main Shift" are considered if present; otherwise, the working hours configuration is considered (#TT03019/22).

### Patch 606.1-0005: 07/11/2022

> - ARM: generated the EnsureExtension method. Also generated the standard segment when the custom entity is published in the custom environment; refer to the custom object instead of the standard one from the Extension object; correct the new proposed index of ItemNature.
> - SD: Fix SalesInvoiceType and SalesInvoice Turnover: printing issues.
> - added code completion functionality in the script editor.
> - FI: review of printing declarations of intent for credit note signs (#TT02829/22).
> - FI: review of deletion of lines in VAT Payments (#TT02854/22).
> - SD: Fixed issues with custom execution of sales from SalesOrder and SalesDeliveryNote.
> - SCM: Import supplier price lists: Removed the unused column in the schema: Manufacturer code (#TT02932/22).
> - SD: Import of self-invoices: Added the seller's account and sub-account columns (#TT02954/22).
> - SCS: Delivery Notes: The delivery material price to the subcontractor is always proposed as zero (#TT02973).
> - FI: review of importing accounting records from DocFinance (#TT02727/22 and #TT02859/22).
> - FI: Replacement of payment codes in payroll: if configured: for activities with active Smart Working flag (#TT02923/22).
> - FI: corrected anomaly in the cancellation of payslips related to leave-permission-ROL residues (#TT02887/22).
> - PM: Changed grouping criterion for lines in payslips: Resource, Pay Code in activity, Activity Date, Internal/External Flag of the intervention type linked to the activity (if present) (#TT02869/22).
> - PM: in payslips, in the "values" grid removed summary list of movements with the "external" flag enabled (#TT02861/22).
> - CRM: resolved anomalies related to drag & drop of activities configured for workflow status. Made the start/end reminder date visible in the activity summary (#TT02440/22).
> - CRM: in case of inserting tasks to be executed from the WF with specified due date and enabled "create new task" flag, the due date is also reported in the newly created task (#TT02999/22).
> - SD: Managed propagation of extradata related to project lines even in case of manual entry of lines in invoice referencing projects (#TT02964/22).
> - PM: Managed propagation of extradata related to project lines, in the following documents: intervention requests, planned interventions, interventions. Both in case of manual document entry and for document generation from procedures (#TT02964/22).

### Patch 606.1-0004: 27/10/2022

> - Updated fiscal operation type percentage for the RO version.
> - ARM: Fixed GetMultipleObjectInformation, excluded the Collection properties from extension objects.
> - Updated the trigger for the Supervisor script activity.
> - added the license field for the Solution user.
> - SH: Add NomenclatureHistoryOnDate: Fixed filter for document date (#TT02845/22).
> - SCM: Date filters in rollback of the purchase invoice do not work (#TT02929/22).

### Patch 606.1-0003: 21/10/2022

> - ARM:
>> - Fixed bug when no custom object is present.
>> - Custom form Ribbon from standard form.
> - Modified ribbon model in base allowed modification level.
> - Within the script editor, it is possible to override a function and insert a block section.
> - PM: introduced management of vacation/leave/ROL calculation in data processing for payslip (#TT02473/22).
> - SCM: fixed error in the accounting of purchase invoices for the Romanian part (#TT02843/22).
> - SH: Added calculated property ContactHistoryOnDate for documents (#TT02848/22).
> - PM: generation and manual entry of new planned interventions/interventions/activities, valuing the "smart working" flag based on the resource master data configuration (#TT02695/22).
> - SD: review of accounting for sales invoices for gift management (#TT02265/22).
> - Added the calculated property NomenclatureHistoryOnDate on FSPosting and FSPostingLedger (#TT02845/22).
> - Added SignatureHelp to the script editor.
> - PM: resolved case where the WIP reverse line was not inserted in the invoice (#TT02755/22).
> - PK: Fixed issues with position and updating of PickingItemDetail (#TT02833/22).
> - Resolved bug in saving the state of Workflow widgets.
> - PM: corrected date check in leave/permission requests (end date after start date) (#TT02860/22).

### Patch 606.1-0002: 17/10/2022

> - ARM:
>> - Fixed proposed object code when customizing a table in an object.
>> - Fixed snapshot object in links to the table/snapshot application on Linux.

### Patch 606.1-0001: 13/10/2022

Arm - Fix snapshot object to table links/apply snapshot on Linux.