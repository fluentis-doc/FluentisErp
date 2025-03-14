---
title: New Ledger Record
sidebar_position: 1
---


## **1. Mandatory Data**

**Registration date**: in a new registration, this is set as the system's current date but can be moved forward or backward in time, subject to the chronological ordering of VAT protocols and any periods printed definitively and the presence of parameters. The importance of this date is fundamental as there is no need to proceed with a 'Change exercise': starting from the registration date, the application will search for the year of the reference accounting parameters (identifying within which range of exercise dates it falls) and from there it will take other control date ranges (competence dates in line and period dates in line). This date is the basis for printing the journal and accounting statements. In case the button to create a 'New registration' is pressed from the one being managed, it is possible to set the **Insertion parameters** (in the ribbon bar) so that this field is also proposed in that new entry;

**Competence date**: this is the date for the financial year closure: it is normally always the same as the registration date, except for the year-end adjustments and related account closures/openings, which can be dated to June as the registration date but will have the competence date as 31/12 – 01/01. Note: this date CANNOT be used to capture end-of-year invoices. It is advisable to keep it always equal to the registration date: in accounting, there are prints that work by registration date, others by competence date, and others that give users the flexibility to filter by both; clearly, different results would be obtained depending on the filters applied.

In the **input parameters** it is possible to set this date to be automatically aligned with the registration date;

**Registration number**: this is a daily counter for registrations; the uniqueness of the registration is always determined by the combination of 'Registration date (Data registrazione)' + 'Registration number (Numero registrazione)'. The choice of a daily counter was made to give users maximum freedom to register on multiple dates. This registration number is managed automatically by the procedure: specifically, at the time of saving, the correct definitive number is assigned, possibly recovering a gap in numbering related to the registration date. Deleting a registration on date X, in fact, will leave a gap in the numbering on that date: only by intervening in the insertion/modification of one of the registrations on that date will the number be recovered. In the case of a provisional registration, this number will progress negatively starting from -1000, making it clearly visible to the user that it is a registration of this status: reports and accounting searches are set to filter by default only on definitive registrations;

**Account detail account of the registration holder**: this field is mandatory only for VAT registrations, as it is linked to the customer/supplier record holding the registered document. This field should normally not be filled out in case of payment/collection registrations, as typically multiple payments/collections are made on different subjects in the same registration, and the field present in the 'Payments' tab is used as a filter for Mat. values. If the button for creating a 'New registration' is pressed from the one being managed, it is possible to set the **input parameters** so that this field is also proposed in that new registration. Finally, the ledger template can foreseen a **[consistency check](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** between the type of account entered at this point and what is provided in the reason; 

**Template**: this field is **mandatory**: each registration is indeed based on a reference reason that regulates its characteristics and operation. This field can no longer be modified once the registration is saved (clearly other fields will be blocked if the VAT register or journal has been definitively printed, or if an automatic account closure has occurred): in the event that the reason is incorrect, it is necessary to delete and re-enter the registration with the correct code. If the button for creating a 'New registration' is pressed from the one being managed, it is possible to set the **input parameters** so that this field is also proposed in that new registration;

**VAT books**: is reported by the bookkeeping reason selected and cannot be manually modified; 

**VAT reference no.**: this is a numeric field that is managed automatically by the procedure for each register: when the mask opens, the maximum protocol + 1 for the set register will be proposed first, then upon saving it will be confirmed or not depending on whether other saves have been made for that register or if there are VAT protocols to recover.

The recovery of protocols changes depending on whether the reason has the saving block with non-progressive numbering set (this is a consistency check between the registration date and the protocol number); with the active block, a free protocol will only be recovered if the registration date is consistent; without the block, even an invalid protocol for that date will be proposed, with relevant warnings to the user.

The protocol field is disabled in the case of provisional registration;

**Document type**: it is proposed by the procedure based on the value set in general ledger templates: it is modifiable, but it is a change that is normally unnecessary (typically it serves to specify document types for VAT registrations, e.g., FV = Sales Invoices or FA = Purchase Invoices, while all other movements will always have a document of 'generic' type);

**Document date**: this field is mandatory or not depending on the **[settings of ledger templates:](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** this date cannot be later than the registration date and must be within the validity date range related to the **[current period for the reference financial year](/docs/configurations/parameters/finance/accounting-parameters)** of the registration. If the button for creating a 'New registration' is pressed from the one being managed, it is possible to set the **input parameters** so that this field is also proposed in that new registration;

<a id="campo_progetto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a> 

**Document Number**: this is an alphanumeric field of 20 characters: depending on the settings of the reason, the entry of the same number/year (taken from the document date) / type (document type field) for the same code entered in the header detail account field is blocked (this block is inserted by default on every ledger template but can be disabled). If the same number/year/detail account is used but the type is different, a simple warning message will be returned to the user. Similarly, a warning message will also be returned if the same reference is saved in a provisional registration;

**Project field**: is active only if the ledger template provides for project management (formerly 'Job ordere' flag): this project is the reference for the entire registration, but it will be possible to reassign values within the '**[Project](/docs/finance-area/ledger-records/records/ledger-record)**' tab of the same. The filling of the field requires always using the project help (search mask that activates with a double-click within the field) to filter those active within the **Projects area**;

:::danger ATTENTION
the field and the above tab are active only when the general record of the company (Configuration > Tables > General Settings > Company) has the **Controlling Management** flag deactivated. This means that the complete management module of management control is not active.  
If the **Controlling Management** flag is active, project management (or Job order, according to the previous terminology) will occur differently, meaning it will be necessary to assign the project (Job order) through a specific cost center (now corporate center) that has as dimensions (see the documentation of the controlling area) that suitable for managing Job orders.
:::

**Currency**: primarily proposed from the record holder's file, alternatively from the company's currency: it can still be modified each time. Once the registration is saved, the field is no longer modifiable;

**Currency date**: is the reference date for the exchange rate as entered in the currency exchange table: the procedure will read in this table the last inserted date prior to this one. In the user management parameters, this date can be set as the registration date (default) or as the document date. A user warning parameter is provided when no exchange is set on the registration date (and therefore a prior exchange is used);

**Exchange**: is the exchange rate as entered in the currency exchange table: it is the INVERSE value compared to that normally read in currency exchange (this derives from the fact that the procedure has maintained the logic of 'certain for uncertain' derived from the management of lire – how many lire for one unit of the second currency – while the euro has 'certain for uncertain' exchange rates – with 1 euro how many units I get of the second currency). This value can be manually forced by the user (typical case: payment/collection reasons in currency, the exchange rate applied by the bank will never be the official rate of international exchanges);

**Total currency / total document**: these are fields linked to each other through the exchange rate, so in euro registrations it will be indifferent to write the amount in one or the other. The **[ledger template](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** can foresee that these are automatically updated as the data entered within the VAT grid varies, normally only in an increase but also in a decrease if set in reason. The registration can be blocked if this amount is not equal to the VAT data of the registration;

**Total VAT**: is always updated automatically by the procedure and should not be entered manually.

At the base of the ledger record, in the registration tab, there is the description of the ledger record: this is a note that can be set within the ledger template using numerical codes (1) (2) … (10) (codes (8) and (9) are used only in detail descriptions of detail accounts in the journal section). With a double click in the field, it is possible to open a search within the coded notes (procedure present within Utilities: manual modification of this description will eventually be reset upon user confirmation once one of the fields managed automatically in the notes has been modified.

At the bottom of the mask, there are additional summary fields for VAT data and the registration: particular attention should be paid to the fields dedicated to displaying the imbalance of the registration, something normally not allowed (but which can be enabled in the settings of the reason in use). 

The imbalance will be proposed as amounts in new manually entered accounting lines in order to balance it automatically.

#### Specific Buttons

> **Insertion parameters**: calls the input parameters of the journal.

- *Economic accrual date*: present in the VAT register grid and automatically reported in that of the journal, can be proposed as daily (equal to the registration date for both "from date" and "to date"), end of financial year ("to date" will be set to 31/12/XXXX), and none for service type accounts (where it will be left blank if the counterparty account used is of the "to be adjusted" type or useful for calculating adjustments, in order to force the user to define the date range);  
- *Warn if the currency is unbalance*: checks whether the 'Amount in currency' column in the journal balances (even if represented in a single column, the program knows the transaction section);   
- Warn exchange date: since the exchange proposed automatically in the registration is the last exchange inserted in the "currency exchange" table, it checks that the exchange date in the "currency exchange" table is equal to the registration date;  
- *detail account (None / Last inserted)*: referring to the detail account of the registration holder entered in the header.

## **Record**

### 2.1 VAT data of the document 
This section is present only for VAT registrations (where a VAT register and a coherent VAT movement type are set in the ledger template).  

In the case of manual entry of a new registration, the section can be filled in in several ways:  
- the customer/supplier/agent record holding the registration has no predefined counterparty detail account and no standard VAT rate: in this case, the user proceeds to choose the type of VAT operation (see below for details) as well as the reference detail account of the line and the corresponding VAT rate. Once this is set, the procedure will break down the total of the document/registration entered in the header to assign the corresponding amounts to the line. The user can modify these and proceed with new entries, which will always have the same entry logic, and the proposed amount will be calculated based on the missing difference to cover the registration total;  
- the customer/supplier/agent record provides for the predefined counterparty detail account and/or the VAT rate: once the type of VAT movement is entered, the procedure will propose the counterparty detail account and/or the VAT rate as predefined, and the amounts will be entered as in the previous case by breaking down the total document/registration, and the user can modify them manually: the next line, again, will propose detail account/tax rate from the record and the obtained amount from the residual to cover the total document/registration;  
- the customer/supplier record (not managed for agents) provides a list of counterparty detail accounts, no predefined counterparty detail account, and there is a predefined VAT rate: in this case, the application will directly propose in the VAT section the list of predefined counterparty detail accounts, each with the corresponding detailed VAT rate or with the record's predefined rate, and the user must manually enter the amounts line by line. In this case, the manual addition of a new line will not propose the related detail account but only the VAT rate, breaking down the missing amount to cover the document/registration total.

**VAT type**: it is a fixed internal table of the system and contains the fields:  
> - **General**: it is the **standard** type of VAT movement, sufficient in almost all cases. This type line is considered in some VAT procedures as a goods movement;  
> - **For resale**: to be used for purchases that are the basis for calculating the percentages to be applied in the ventilation of receipts (e.g., for supermarkets or pharmacies: these retailers do not apply VAT article by article, but are allowed to make a single total of sales at the end of the period and divide amounts according to the proportion of articles purchased during the period);  
> - **Roundings**: these are the rounding outside the VAT field, typical of phone bills for example. The utility of this indication is minimal, however, the corresponding detail account is inserted according to the logic seen above;  
> - **VAT Sale 74Ter**: it is a specific movement type for travel agencies, for which the VAT competence date shifts by 30 days compared to the date of the operation (selling today, VAT will be paid in next month's liquidation). On these lines, the VAT management of 74Ter with the related periodic VAT liquidation is applied;  
> - **Resale**: these are the sales on which the application will apply the calculation of receipt ventilation;   
> - **Non-agricultural operation**: it is a specific movement type for companies subject to agricultural regime, it serves to exclude this regime (set in the ledger template) for that specific line;  
> - **Service**: it is a specific movement type used to identify that the line derives from a purchase/sale of services, an important element in some VAT procedures (e.g., INTRASTAT lists).

**% non-deductible**: is taken from the VAT rate entered in the line. Manual forcing is not recommended; the correct operation is to modify the VAT rate;  
**VAT**: can be forced manually compared to the calculation made by the procedure: it may happen, in fact, that the incoming document has a rounding not correctly managed, the user must register the document as received;  
**Total currency / total**: these are calculated fields and not stored at the database level;  
**From competence date / To competence date**: these are the **economic competence dates**, fundamental for the automatic **adjustments and integrations** both at the interim financial statements and accounting balance level. Based on their indication, rates and accruals will be calculated.  

*Example*: we are at 31/03/year X. 

If the cost registration reports competence dates 31/03/X - 31/03/X+1, on 31/12/X when running the adjustment procedures, an active accrual for the portion of cost competence from 01/01/X+1 - 31/03/X+1 will be calculated.

If the cost registration executed on 31/01/X reports competence dates 31/01/X-1 -31/01/X, when running the adjustment procedures on 31/12//X-1, a passive rate will be calculated for the portion of cost competence from 31/01/X-1 - 31/12/X-1.

This date range can be managed automatically, depending on the **[input parameters]**, in 3 alternative ways: 'End of fiscal year' (with which the initial date is proposed based on the document date and the final date as fiscal year end date: this option is not recommended), 'Daily' (with which both dates are set based on the document date) and 'No date for service type account', which is the recommended option. In this case, in fact, the application will not propose any date for economic detail accounts that foresee the service account type flag but will force the user to manually enter the correct date range (while in other cases it will propose the same document date for both dates). In this way, we are more secure that the user manages the competence range correctly, for example for insurance, rent, periodic fees detail accounts;

**Attention**: for the procedure to automatically calculate rates and accruals, the type of account used for the accounts interested in adjustments must be defined in the **[Account Types](/docs/configurations/tables/finance/account-types)** table with the Service flag.

Example of account types (in standard databases) "Adjustable costs" and "Adjustable revenues" which have the service flag in the Account Types table.

The suitable account type will be assigned to the detail account in question directly in the chart of accounts.

**Month**: this is the VAT reference period for the registration, obtained based on the liquidation type and the VAT competence date. The field effectively used in the liquidation, however, is the VAT competence date;  
**VAT accrual date**: this field is proposed based on the ledger template setting, typically as the registration date for purchases and the document date for sales (if the movement is a 74Ter sale then it is document date + 30 days). This is the **reference date for printing the periodic VAT liquidation**;  
**Plafond acrrual**: this date is taken as a reference for the registration in question for the calculation of the ceiling; it is proposed equal to the document date for all VAT rates that foresee the management of VAT ceilings;  
**Note for variation previous years**: this field is active only for registrations with document type that foresees the 'Variation note' flag. It serves to indicate that the credit note line refers to previous years from the year of the document for the calculation of the related field in the customer/supplier list;  
**Reference date for variation note**: this field is active only for registrations with document type that foresees the 'Variation note' flag. It serves to indicate the reference date of the variation note;  
**Division**: this field is only visible if the reason provides for the management of divisions. In this case, it will be possible to split the same VAT registration across multiple business divisions.

#### Additional Notes  
- it is not possible to save VAT lines with a taxable amount of 0 unless the ledger template permits it (flag ‘allow detail accounts with value 0');  
- rounding of VAT is managed line by line, while legislation prescribes that the calculation be made on a taxable amount that groups all lines with the same VAT rate: it is possible, therefore, that there is a difference solely due to the management of rounding (this is valid for the manual entry of an ledger record: the automatic accounting from purchases and sales already performs the correct calculation) concerning the document in registration. Once the difference is detected, the solutions are: 1) manually force a VAT line 2) press the tax recalculation button located in the header and have the application automatically align the last line of each existing VAT rate.

### 2.2 Journal 

<details>

  <summary>Click to view the example</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Each general ledger record must necessarily have lines in this section to be saved. In the case of VAT registrations, this part is calculated based on the logic of amount types, according to the data loaded in the lines of the previous VAT part; in the case of payment/collection registrations, on the other hand, the amounts depend on the amounts of payments loaded in the 'Payments' tab itself; in other cases, however, the lines and amounts will be managed manually by the user, keeping in mind that:  
- the reason may propose a list of predefined detail accounts (e.g., employee payroll reasons): the user will need to enter amounts line by line in the correct section (note: the signs set in the reason DO NOT bind the user's entry to the same section). At the moment of saving, if the reason does not authorize it, the unfilled detail accounts will be automatically deleted;  
- in the case of a simple 'debit/credit' registration, it is possible to code a specific reason that already provides the detail accounts to be used with the amount type 'Total Doc./Registration' so that the user simply writes the amount in the header totals and the procedure places them in debit/credit according to the reason;  
- every new manual entry of the lines will cover the potential imbalance present in the registration: it is reminded that unbalanced registrations cannot be saved unless the reason is enabled.

**Currency**: may provide details of the currency (exchange date, exchange value, and currency amount): the currency amount must always be entered in absolute value (the debit/credit sign in the company's currency also defines its sign); the fields in currency and in the company's currency can be uncoupled from each other by not recalculating the amounts upon confirmation messages that are executed during their modification;  
**From competence date / To competence date**: this date range, as mentioned already for the VAT section, is crucial for managing adjustment entries both for interim financial statements and for the accounting balance. Please refer to the specific notes inserted above;  
**Division**: may be present if set in the reason, may serve to divide the same registration across multiple divisions;  
**Det. description** (is recommended for default entry on all): may be present if set in the reason, this can also be partly managed automatically in reason with notes (1) – (2) … etc. as for the general description. Of particular interest is the management of codes (8)-(9) related to customer/supplier lines closing accounting items;  
**Curr. bank date**: The field can be automated based on the number of days set on each bank record, for each ledger template concerning them;  
**Line no.**: may be useful for particularly long registrations (e.g., payroll) to keep the various detail accounts in the order of entry;  
**Manual Mat. values reference**: may be present, if set in reason, may serve to manually link accounting lines without going through Mat. value management;  
**Offset detail account**: may be present, if set in reason, its manual use is not recommended. The automatic management in VAT registrations provides for customer/supplier lines to assign the higher cost/revenue detail account, while for cost/revenue/VAT lines, the counterparty will be the customer/supplier detail account.

#### Further Notes  

The user can proceed to manually force the journal lines: it is usually advised to align the data starting directly from the VAT. Any forceful entries can be reset by pressing the journal recalculation button.  
In the ledger template, particularly for all VAT reasons, for the line with the 'Total Doc./registration', the generic account of customers/suppliers is entered, which will be replaced from time to time with the detail account holder of the registration: this replacement will occur only if in the **[accounting parameters](/docs/configurations/parameters/finance/accounting-parameters)**, accounts list section, the type of detail account related is authorized.

## 3. Mat. values

The tab is present **only if the reason has the 'Mat. values' flag set**. 

### 3.1 Mat. values type 

It is dedicated to managing the data for calculating the underlying Mat. values and retraces the payment conditions for a manual VAT-type registration. We will find the grid filled in with the default data as entered in the customer/supplier/agent record assigned as the registration holder. For other types of registrations (for example, for advance payments it is possible to code a reason that opens the item, in the opposite sign, instead of closing it since the document has not yet been recorded): in this case, the management of this section becomes manual, so the user can enter the essential data of the payment type, the payment solution, and the reference detail account, with 100% entered in the 'Percentage' field.  

For this section, it is worth noting that:  
- the item can also be created on non-record detail accounts and that do not have the Mat. values flag in the chart of accounts (this flag is related only to the control that the journal and items data match for detail accounts that have set it);  
- banking supports are typically reported from the record or the document accounted for from the purchasing/selling/recipient area, but can be forced each time by recalling a different one using the abi/cab help (double click in the field). The connected bank support in this section will be the data normally used in supplier payments as the banking beneficiary of the payment unless the flag '**[Enforce bank support present in supplier record](/docs/configurations/parameters/treasury/vendor-payments-parameters)**' is set;  
- normally the '**Percentage**' field is entered. The meaning of the 'Amount/Tax' fields is as follows: in the '**Amount**' field, you can enter a fixed amount to use for the payment type/payment solution combination of the line being processed; the '**Tax**' field allows defining how much of this amount is attributable to VAT (this is useful in case the payment solution foresees differentiated taxable/tax percentages among the various installments to achieve a correct calculation). It is possible to enter a combination amount/percentage:

**Groupe Mat. Val.**: the flag, not active, is taken from the customer/supplier record: substantially has no practical use, as it is rare that two items have the same payment type and same due date within the same document;

- below, there are some summary fields of the customer/supplier situation: the amount of credit granted in the customer risk module, the value of exposure obtained according to the situation of Mat. values (without considering the registration in use) and the accounting balance (considering also the registration in use);

- if the registration is derived from **insolvents accounting**, the upper grid has NO relevance for the calculation of the underlying items (typically the record provides items for RB, but insolvencies are managed as BB and no other reissued automatically): it is only read in case the bank support data is needed.

### 3.2 Mat. values

It presents the list of items calculated according to the settings of the above section: the user can force the payment type, due date, and amounts of the various installments (ensuring totals are respected). The items grid does NOT allow the manual entry of a new installment. 

In the case where the reason foresees both the opening of items, and closure for compensation and the 'Warning' flag has also been activated, when saving the registration, the user will be returned a warning message of the presence of items to be compensated.

**Description**: indicates the status of the item (open, partially open, closed);  
**Account/detail account/description**: detail account customer or supplier to which the item is referenced;  
**Payment Type (Pag)**: type of payment (wire transfer, cash, etc...);  
**Due date**: due date calculated based on the payment conditions of the upper grid or set manually;  
**Doc. Code**: code of the document that generated the item (example FA = purchase invoice, FV = sales invoice);  
**Document date**: date of the document (e.g., purchase invoice) that generated the item;  
**Doc. no.**: number of the document that generated the item;  
**Currency**: currency in which the item is denominated (e.g., EUR = Euro);  
**Exchange**: exchange rate that determined the value in currency and the equivalent in Euro of the item;  
**Currency date**: date of reference for the exchange rate;  
**Currency amount**: equal to the amount in euros if the exchange is 1;  
**Debit / Credit Amount**: the item has a sign (or section, whichever you like) as does the accounting movement that generated it. The item with a debit sign will be a receivable, while an item with a credit sign will be a payable (e.g., in response to an invoice received from a supplier or a credit note issued to a customer); 

It is also possible to block the payment of the item (Flag **Not pay.**): the procedure will record the date and the user who blocked the payment with an eventual explanatory note (**Start lock, Locked user, Lock note**) as well as the date and user unlocking it (**User unlock, Lock end**), specific user rights are provided for both operations in the ARM. 

**Number / year of the mat. value**: automatically assigned to identify the item;  
**Maturity position**: combo box connected to a freely definable table, allows to classify accounting items from the moment of their creation;  
**Notes**: free notes that can also be automatically linked, in ledger template, to the detailed description of the detail account as entered in accounting.  
**Agent**: in this field, it is possible to attach the reference agent for the item: this is automatically set based on the agent entered in the sales invoice at the time of accounting (if multiple agents are present, the one with higher Job orders will be assigned).  
**Ref. Date / Ref. Number**: fields taken from the document date and document number in the ledger record (if present, otherwise taken from registration date/number), they allow grouping and filtering items/settlements referring to the same document (for example, a credit note referring to an invoice, to view the ledger all together).  
**Cig** and **Cup**: taken from the sales invoice but can also be written manually (via combo box). See **[documentation on invoice fields](/docs/sales/sales-invoices/invoicing/sales-invoice)**.  
**Reference Models and Reference Number**: fields usually not used in Italy, typical of Croatia (where, when the company issues the invoice at each due date, it associates a type/code identifying the installment, which the customer then reports in payment and the bank reports in the collection transaction: from the bank statement, it is therefore easy to trace the closed installment. The fields represent a reference also following a future implementation of bank movements import).  
**Average Delay in Payment Days**: Not used in Italy: takes the value of the delay days from the customer record but can be modified manually. Can be used in cash flow simulation.

#### Specific Buttons  
> **Delete maturity values**: allows deleting the automatically created item based on the type of payment entered.  
> **Delete from Payments Grid**: allows deleting the proposed payment solution automatically from the record or manually entered.  
> **Recalculate Maturity Values**: allows recalculating the manually forced item.  
> **Groupe Mat. Val.**: allows grouping items in the presence of multiple items with the same due date.  

## **Payments** 

The 'Payments' tab **is only present if the reason has the 'Closing items' flag set**. It allows viewing Mat. values to proceed with payments/collections while closing Mat. values or compensating them.  

:::tip Info
The tab is divided into two fundamental grids, the first, the upper one, serves to search for Mat. values to close, the second, lower, will contain the result of the closing maneuver (that is, the resulting payments)
:::

### Correct Configuration of Interaction between Opening, Closing, and Compensating Items

- Typically, all VAT-type registrations have the 'Opening items' flag and may also have the item closing + compensation flag; 

- The **payment/collection reasons**, on the other hand, always foresee the closing of items **without ever the compensation flag**, they may eventually have the opening items flag to manage advance payment cases (in this case, lacking the closure of an item, a reverse item will be opened maintaining the balance with the accounting movement - balance that can be made mandatory through the **[parameters](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** of the ledger template). 

:::tip ATTENTION
Difference between payment items and compensating items:  
compensation, in accounting terminology, can be understood as item compensation (debit/credit) of the same detail account (e.g., invoice with credit note) but also as customer/supplier compensation (e.g., I offset the debt to the supplier detail account with the credit from the customer detail account that belongs to the same record).  
In this form, compensation is strictly linked to the item situation concerning the same detail account.  
Customer/supplier compensation can simply be managed by making a **payment** item (simple closure) "crossed" (both debit and credit - for example via a transfer - going to "offset" at balance in accounting).
Alternatively, two more specific and flexible procedures can be used: [**Compensating items**](/docs/finance-area/maturity-values/procedures/maturity-compensation) or [**Quick compensation**](/docs/finance-area/maturity-values/procedures/fast-compensation)
:::

If in the header of the registration a holder detail account has been entered, this will be reported as a search filter in the relevant initial fields of the payments tab: 

<details>

  <summary>Click to view the example</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

for all VAT registrations, therefore, the application will propose here the items of the only customer/supplier entered in the header, to proceed to the invoice/credit note compensation; 

in the case of payment/collection registrations (especially for multiple customers or suppliers), on the other hand, normally the header field will be empty, and it will be up to the user to complete the filter according to their needs. 

In particular, note the **Bank** detail account field: this is not a filter, but is automatically filled with the payment detail account entered in the **[record](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** of the registration's customer/supplier holder and from here updates the ledger record in the field that provides for the amount type ‘Total Doc./registration’ 

<details>

  <summary>Click to view the example</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image03.png)

</details>

(if the **[accounting parameters](/docs/configurations/parameters/finance/accounting-parameters)**, in the clients/suppliers accounts list, authorize the substitution, that is, there must be an association between the bank account type and the corresponding master in the chart of accounts for the substitution to occur).

<details>

  <summary>Click to view the example</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image04.png)

</details>

### Execution of the Item Closure 

:::tip HOW TO CLOSE THE ITEM
Once identified, in the first grid, the item(s) to pay, it is possible to select them and pay them by **double-clicking** on the single line, or using the **Create payments** button.
:::

In the case where the reason foresees the item compensation, the **Compensating items** button will be active (and the double-click will have the same meaning). 

Another useful button in this section is the **Create extended payments**: 

<details>

  <summary>Click to view the example</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image08.png)

</details>

this will open an intermediate mask for setting the payment amount with an eventual discount amount, with the corresponding detail account for accounting entry. 

:::note NOTE
In this mask related to the *Extended payments* command (only here) it is possible to set the state **Forcefully closed** for an item (via the appropriate flag): the use of this state is not recommended as it is not determined by the normal creation of a payment that closes the item but forcibly modifies its state, it can be useful to realign differences and errors that are no longer identifiable for normal correction.  
A similar result can be obtained by manually creating a payment and forcing the amount.  
It is not allowed to force the payment with an amount exceeding the item balance.
:::

In the payment list, payment notes can be entered: these notes can also be automatically linked, in reason, with the generic description of the ledger record (flag *description in journal and payments*, not recommended).

If the payment will be managed, according to the **[reason settings](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, at the historical exchange rate of the item, no exchange difference will be automatically detected and will need to be managed manually in accounting: the option also facilitates, and this is particularly useful, the management of equality between Mat. values and accounting balances. 

Conversely, if the option is not active, the euro equivalent will be calculated at the registration date exchange rate (and in this case, if set correctly **[in the reason](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** - see useful/loss due to exchange type - and **[in currencies](/docs/configurations/tables/general-settings/currencies)**, the procedure will automatically value the profit/loss detail accounts by currency). 

Through the **Expand/collapse** button, it is possible to display only one of the two grids (searching for items or payments). 

At the bottom, totalization fields of the selected amounts will be displayed. 

Based on the payments effectively entered and the settings of the reason, the application will update the line with the amount type ‘Total Doc./registration’ (for example assigned to the payment's bank detail account) with the total of recorded payments, while inserting a line for each payment or grouping the debit and credit payments, divided by currency, for each paid/received client/supplier detail account.

#### Specific Buttons  
> **Insertion parameters**: calls the input parameters of the journal.  
> **Search Maturity Values**: allows searching for items to pay/receive.  
> **Delete Payments**: allows deleting previously selected payments.  
> **Create Payments**: allows creating the payment for the selected item.  
> **Compensation**: allows performing item compensation if provided in the ledger template.  
> **Create extended payments**: allows managing payment/receipt with any discount amounts and the corresponding accounting entry detail account.  
> **Expand/Collapse**: allows reducing the view to just the payment or item part and vice versa, or expanding both.  

## **Analytic**

It is dedicated to managing cost/profit centers (now corporate centers); it is present only if the reason has at least one of the two flags for Cost Center / Profit Center management.

:::danger ATTENTION
The management of cost/profit centers (now corporate centers) will differ depending on whether the **advanced management control features** are activated within the **[Company](/docs/configurations/tables/general-settings/company)** table.

These functionalities, recently developed, allow for more advanced and flexible controlling management (for example allowing multi-dimensional analysis of corporate centers and reversions of any center against others) compared to the standard set of functionalities, which are still available by choosing not to activate the **CONTROLLING MANAGEMENT** flag within the table mentioned above.
:::

 Depending on the reason settings, one section, the other, or both will be present (in the latter case with two options: in the case of 'separate cc/cp management', both must be filled in simultaneously; otherwise, the procedure will assign the amount only to one of the two sections, the costs will go to the cost centers and revenues to the profit centers). 

In case advanced controlling functions are used, even though it is possible to activate both cc and cp in the ledger template, the filling of the latter is superfluous as only the cc (which assumes the new definition of corporate centers) will be filled. Corporate centers can accommodate both positive components (of profit) and negative components (of cost) and can be allocated to each other according to the rules provided in the module as completely flexible.

If the ledger template has also activated the **Machine management** option, a grid for cost/revenue allocation will be present for company vehicles (below the main cost center grid).  
Recalling the vehicle via the appropriate combo box will also allow assigning its detail data.  
The combo box is linked to the Vehicle Management table (Logistics > Vehicles > Daily Activity > Vehicle Management)

### FIELDS PRESENT IN THE MAIN GRID

If the advanced controlling functions are active, a pivot table-like structure that groups, detail account by detail account, the allocations of accounting movements to the centers for analysis dimension will be present. Indeed, according to the advanced methodologies mentioned above, corporate centers must be assigned an analysis dimension creating subfunctional subsets for different possible configurations in developing analytical accounting.

The same detail account that accommodates the cost accounting movement can thus be assigned simultaneously to multiple centers referring to different dimensions (and therefore "groupings").

Within the same dimension, the movement could also be divided (for example at 50%) over two centers.

<details>

  <summary>Click to view the image</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab/image07.png)

</details>

**Account / detail account / Description**: fields for entering the accounting detail account assigned to the center. The data will be automatically reported if there is an association defined in the chart of accounts or in the record (see below).

**Project**: If the ledger template has the Projects flag enabled (formerly Job Orders), this field is visible and allows assigning the movement to a project. The widget refers to the Projects table (Project Management > Projects > Projects)

:::danger ATTENTION
if the advanced controlling functions are active, it is provided that the project can only be assigned by linking it to a corporate center associated with the dimension of type Job order or to the dimensions for which the **Enable Job order** flag has been activated.  

This dimension (which can be named at will, although it is advisable to have a clear name, such as "Job orders" or "Projects") is linked to the correct type through a flag present in the **Dimensions** table (Configuration > Tables > Controlling > Analytical Accounting > Dimension) 
:::

**Cost Centers / Cost Centers Description**: fields for entering (through the combo box positioned on the cost centers field) the center to which the cost (or profit) is to be attributed. The combo box refers to the **[Corporate Centers](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** table (Configuration > Tables > Controlling > Analytical > Corporate Centers).  
**Currency**: value taken from the data of the ledger record, specifies the currency (which then presents the counter value in Euro) of the movement being attributed.  
**Currency date**: Currency exchange date (taken from the accounting movement).  
**Exchange**: The value of the currency exchange (taken from the accounting movement).  
**Currency amount**: Currency amount of the movement (taken from the accounting movement in the case of total allocation of the movement to a single center or defined through the allocation percentage in the chart of accounts or in the record); the value can be manually changed to define the desired allocation to the centers in the case of splitting the cost over multiple centers. The field presents in a single section and is then entered in the debit or credit section of the movement in euros following the scheme of the ledger template or the registration (Registration Tab), but can then be forced.

**Debit Amount / Credit Amount**: Euro amount of the movement (taken from the accounting movement in the case of total allocation of the movement to a single center or defined through the allocation percentage in the chart of accounts or in the record); the value can be manually changed to define the desired allocation to the centers in the case of splitting the cost over multiple centers.

**From Competence Date / To Competence Date**: Taken from the accounting movement (can be forced). Allow the adjustment for economic competence (rates and accruals) to be made even for movements of the centers.

**Detail Description**: Taken from the same name field in the lines of the accounting movement. 

#### The loading of data in the cc/cp sections can be automated in two ways:

- through the assignment of centers in the chart of accounts, to the cost/revenue detail accounts, valuing the percentage of attributing the value of each account to one or more centers. For more details see **[Chart of Accounts](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**. 

- in customer/supplier records, (also always in percentage) in which case all economic detail accounts entered in the registration headed to the subject will be valued in the same way and attributed to the center indicated in the record. 

The priority of valuation, between the rule set in the chart of accounts and that defined in the record, is set within the **[general ledger parameters](/docs/configurations/parameters/finance/accounting-parameters)**.

Manual modifications to calculated amounts are allowed, as is direct manual entry of the lines: in the latter case, the procedure will automatically propose the amounts to cover, detail account by detail account, the total moved in accounting, reporting the same range of competence dates. It is important to note, in fact, that the adjustment and integration procedures also foresee the adjustment of movements assigned to cost/profit centers.

At the time of saving the registration, the application will proceed to return a mask with the details of valuation differences, possibly blocking the saving if this is set in the reason in use.

#### Specific Buttons  
> **Delete Selected Cost Centers**: allows deleting the selected cost centers.  
> **Delete Selected Profit Centers**: allows deleting the selected profit centers.  
> **Expand/Collapse**: allows reducing the view to just the cost or profit centers section and vice versa or expanding both.  

## **Projects**

The **Projects** tab (formerly *Job Orders*) is present only if the reason has the *Projects* flag set.

:::danger ATTENTION
if the advanced controlling functions are active (the *Controlling management* flag in the Company table), it is provided that the project can only be assigned by linking it to a corporate center also assigned to a dimension of type Job order.

**If the advanced functions for controlling are active, therefore, the tab in question will NOT be visible.** 

Instead, the field present in the header of the registration for assigning the Project (ex Job order) to the entire registration instead of the detail of the movements will remain visible.
:::
 
In this tab, the various Projects (sale Job orders) will be assigned the economic data recorded in the ledger record: automatically, all will be assigned to the Job order entered in the header, but the user can manually split the amounts differently directly in this section.

In the manual entry of amounts, the software will automatically assign the residual value in order to square the accounting movement. Controls of the balancing of amounts with general ledger are provided and the possibility to block the saving of the registration in case of differences (see '** [parameters](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**' of the reason).

## 7. Fixed Asset

The Fixed Assets tab is dedicated to managing long-term assets: it will be used to record purchases, increases, disposals, and destructions.

ATTENTION: The tab is visible only if the ledger template being used has the '**fixed assets**' flag active. Additionally, it is advisable to set, also in the reason (tab **[Registration details](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**), the **type of operation** to perform, via the combo box next to the above flag (acquisition, disposal, destruction, etc.). Therefore, it is advisable to create different reasons dedicated to fixed assets and suitable for performing the various possible operations. 

### Upper Table

It is dedicated to coding the new fixed asset purchased or selecting the existing fixed asset to record a new operation within it. **To insert a new fixed asset**, simply fill a new row, while **to select an existing fixed asset**, it is necessary to use the button called **Select existing fixed asset** present in the ribbon bar to call up the already existing fixed asset tab and integrate it.  

#### INSERTION PROCEDURE:

- select the **Fixed Asset Category** to which it belongs via the combo box (which is linked to the **[fixed asset category table](/docs/configurations/tables/finance/fixed-asset-category)**),  
- select the **Type of Property** (normally 'owned asset' is proposed by default), (**Property notes**: field for entering an additional free annotation)  
- assign a **Classification code** (if you wish to obtain a numbering within this precode, in fact, it is not possible to have two fixed asset records with the same number unless using a precode that allows assigning a new numbering to it) the combo box is linked to the **[Precode assets table](/docs/configurations/tables/finance/fixed-asset-precode)**  
- confirm the automatic progressive numbering assigned to the fixed asset record, or impose the desired number (also via combination with the precode)  
- enter the '**Fixed assets description**' (which will be reported in the fixed asset record and used in all module reports such as the asset register and prints of the records). 

All these fields will be taken directly from the already existing fixed asset in the case of an additional operation. 

- enter the **Amount** (the asset's value corresponding to the cost of the operation, i.e., the taxable amount plus any non-deductible VAT in the case of purchase or selling price in the case of total or partial alienation);

- enter the **VAT rate** via the appropriate combo box.

The **% non-deductibility (ind)**. field, regarding the percentage of non-deductibility of VAT, is usually automatically filled in and depends on the VAT code selected through the settings set in the **[Rates and VAT Modes](/docs/configurations/tables/finance/vat-rates)** table. Manual modification is not recommended.

**State**: automatically set, initially, upon purchase is set to 'not amortized'; subsequently, depending on the accumulated amortizations, the status will be 'partially amortized' or 'fully amortized'. The value can be manually forced via the combo box connected to a fixed table.  
**Operation type**: proposed according to the settings of the ledger template: typically, in the case of purchases or increases, the operation type is 'original cost', while for sales, it will be 'Partial Alienation' or 'Total Alienation';  
**Account / detail account / Description**: taken from the asset category (if entered in the **[Fixed Asset Category](/docs/configurations/tables/finance/fixed-asset-category)** table);  
**Start Activity Date**: is proposed based on the registration date: from this date, the year from which the asset can be amortized will be verified;  
**End Activity Date**: is not entered (but visibility in the asset register also depends on this field);  
**Start / End Warranty**: informational field regarding the warranty validity.  
**Used**: identifies the assets that have been purchased used (for these assets, the depreciation application percentage in the first year is 100% and early depreciation is only applicable for one year),  
**In use**: (proposed by default at saving) indicates that the asset is actually in use (without this flag the asset cannot be amortized),  
**Maintenance**: indicates that the asset is to be considered for maintenance calculations. 

**Notes**: field for annotations, not reported in standard reports (can be added by customizing them). 

**Tax statistics**: Enables the management of the lower tab Fixed Asset Objective Data to be used for tax depreciation.

**Dummy company**: to identify fixed assets to be considered in fixed asset prints that fall within these fiscal case definitions, 

**Deductibility Type**: allows setting the tax deductibility of the depreciation for the asset. The combo box is linked to the **[Deductibility Types](/docs/configurations/tables/finance/deductibility-types)** table.

**M.U.**: combo box that allows selecting the unit of measure (code) for the quantity (e.g., Kg, Pieces...); the **Description** of the chosen unit is displayed in the adjacent field;

**Perc.**: field visible only if the **[Fixed Asset Parameters](/docs/configurations/parameters/finance/fixed-assets-parameters)** form has the 'Percentage on single fixed asset' flag active. It allows defining a specific depreciation percentage for the fixed asset being inserted, which will prevail over the one defined within the corresponding asset category. The field is reported within the fixed asset record.

**Depr. type**: combo box that allows selecting the type (code) of objective amortization to apply; the **Description** of the selected code is displayed in the adjacent field; the combo box is linked to the **[Objective Amortization Types](/docs/configurations/tables/finance/objective-amortization-types)** table (Amortization Type).

**Upon saving the line, various messages may appear depending on the cases**:

- "The fixed asset has a value lower than ___. Do you want to amortize it at 100%?": the asset category has set a value in the 'total amortization limit' field and the value entered for the new asset is lower: we are in the case of fixed assets valued below €516 (the old million lira) which tax law allows to be recorded directly as cost (i.e., to be amortized at 100%) directly in the year of purchase. Choosing Yes will perform the 100% amortization in the first year, updating the flag in the fixed asset record's header so that it is specifically managed in the automatic amortization procedure;

- "Do you want to link the partial alienation to an already existing asset operation?": the reason is for partial sale and the asset category does not have the 'incremental' flag: in this case, a message will be executed for assigning the alienation amount to a specific asset operation of the fixed asset. Example: for a 'non-incremental' fixed asset, each individual operation row is managed at the level of amortizations with a separate lifespan: the partial alienation (compared to the entire asset) could actually be managed as a total sale of the individual operation (e.g., I have a computer, I increase it with a scanner, then sell only the scanner).

**Choosing Yes** will display a help (popup) for searching which **component** that makes up the fixed asset you want to alienate, allowing you to select it through the *Search* and *Select* buttons. 

In particular, note that the various components are easily identifiable as they are referred to, within the help, to the **Progressive** field also as within the fixed asset record.

### Lower Tables

The content refers to the selected upper row. 

#### ASSET OPERATIONS: 

(a new row is added for each operation loaded in the upper grid). 

**Operation Date**: Date on which the movement is registered in the fixed assets book;

**Row Progress**: Progress number of the operation;

**Purchase value**: this field is valued only by operations executed with the Type operation 'original cost' with the asset acquisition value (equal to the taxable amount + any non-deductible VAT);

**Quantity**: refers to the quantity of goods to load;

**Nondeductible VAT**: carries the value of any non-deductible VAT that will be added to the cost to determine the initial accounting value (historical cost). The value is automatically compiled from the value entered in the 'Amount' field of the upper grid concerning the VAT code selected in the adjacent field (if it provides for non-deductibility);

**Amount not depreciable**: if in the corresponding asset category the field 'Amortizable percentage' is valued, the field will be automatically filled in; the amount is deducted from the calculation value of the amortization e.g. Perc. amm = 50% Historical Cost 30,000;

Amortization 30,000 - 15,000 = 15,000 x 3%; The amortization will be calculated until the fund does not reach 15,000;

**Residual non-depreciable**: managed only manually, with reference to the previous field example, the amortization will be equal to 30,000 *3% but until the fund does not reach 15,000;

**Already Amortized**: the value is visible only if the amortization has been calculated but not yet accounted for (upon accounting the value, it will be added to the 'Account Value' and the fund);

**Accumulated Ordinary/Anticipated/Decelerated Amortization**: the fields capture, depending on the type of amortization calculated (ordinary or anticipated or decelerated) the accumulation of the accounted amortization quotes;

**Tax Amortization Fund**: will be valued if the 'Fiscal' flag present in the asset category is active or can be activated at the level of each row in the Amortization Tab.

**Alienation**: captures the sale value of the asset and is automatically valued via the 'Amount' field of the upper grid if the Movement Type is 'Alienation'. Based on this value and the value of the Capital Gain or loss, the historical value of the asset to be written off from the fixed assets book will be updated;

**Partial sale**: captures the sale value of the asset and is automatically valued via the 'Amount' field of the upper grid if the Movement Type is 'Partial Alienation'. Based on this value and the value of the Capital Gain or loss, the historical value of the asset to be written off from the fixed assets book will be updated; 

**Gain**: captures the capital gain from the sale of the fixed asset and contributes to the calculation of the historical value sold;

**Reinvested gain**: not active;

**Modernization**: increases the historical cost following the revaluation law;

**Capital loss**: captures the value of the capital loss from the sale of the fixed asset and contributes to the calculation of the historical value sold.

**Crush**: usually filled in with zero (as an alternative to the fields 'Alienation' or 'Partial Alienation'), a value may be attributed for special cases (e.g. scrap realization value);

**Original cost divested**: historical value that is sold within an operation with Type movement 'Alienation' or 'Partial Alienation' calculated based on the data entered in the Alienation, Partial Alienation, (or Destruction), Capital Gain and Capital Loss fields. The Accounting Value field will, in parallel, be adjusted negatively for an amount determined from the original value sold less accumulated amortization fund;

**VAT**: not active in Italy;

**Adjustment**: not active in Italy;

**Value Euro**: countervalue in Euro if the value is expressed in currency or if the company's currency is different from Euro;

**Detail account**: counterparty detail account of the supplier (purchase) or Customer (sale) at the row level relating to the individual component (could be purchased or sold to different parties);

**Doc. Date / Doc. Nr. / VAT Protocol**: references of the purchase or sale invoice corresponding to the movement row in question;

**Notes**: free line notes;

**Sales Progress**: in case of partial sale, it reports the progress of the row selected for selling the related component;

**Printed**: activates if the fixed assets book related to the row in question has been definitively printed.

#### ECONOMIC OPERATIONS:

(normally not used), serves to link to the fixed asset record a cost that does not have to be capitalized (because not multi-annual).

The data contained in this tab is valued if in the upper grid a row is entered with Type movement 'Economic operations'.

The fields are similar to those present in the asset operations tab.

#### AMORTIZATION:

Normally not used within the ledger record, as amortization can be more conveniently managed through the specific automatic procedure within the adjustment entries, or for individual fixed assets, from within the fixed asset record (in the specific grid that mirrors the fields present in the commented tab).

If it is desired, within a journal registration, to carry out the amortization (as far as the fixed asset record is concerned, the accounting part will be managed in the Registration tab) it will be necessary to recall the existing fixed asset to be amortized via the **Select an existing fixed asset** button, which will display the corresponding row in the upper grid, ensure that the type of operation is *Accumulated Ordinary Amortization*, if not already provided in the reason settings, enter in the **Amount** field the value of the annual amortization to be registered, then in the *Amortization* tab indicate the year of amortization (field **Year**) and manually fill in the mandatory fields of the grid:

**Progressive**: allows to select via the combo box the row of the fixed asset record to be amortized (the only one present if there are no additional components or increases of the fixed asset);

**Year**: Confirm the amortization year;

**Type of Amortization**: Ordinary, anticipated, or decelerated;

**Account / detail account / description of the amortization quota**: normally recalled automatically via the fixed asset category of the row loaded in the upper grid;

**Account / detail account / description of the amortization fund**: normally recalled automatically via the fixed asset category of the row loaded in the upper grid;

**Origin amount**: value of the fixed asset (historical) on which depreciation is calculated applying the **Percentage** (or amortization rate);

**Days of possession**: on which the amortization is calculated if in the settings of the corresponding asset category the calculation on days was chosen (with appropriate flag);

**Cost**: result of the calculation taxable * Percentage * days of possession / 365 (can be manually forced).

**Accounted**: flag accounted, assigns to the registration the qualification of accounted preventing overwriting, without this flag, a subsequent amortization cannot be processed.

**Fiscal**: flag that identifies the amortization for tax purposes and will increase the tax fund in the corresponding field, distinct from the accounting/civil fund.

**Deductible depreciation** / **Non-deductible depreciation**: fields automatically valued with the deductible and non-deductible portions of the amortization, if in the **[fixed asset category](/docs/configurations/tables/finance/fixed-asset-category)** related the Deductibility type field has been valued, which in turn is linked to the **[Deductibility Types](/docs/configurations/tables/finance/deductibility-types)** table, where the percentage of deductibility is defined. Otherwise, they can be manually valued.

In the asset operations tab, the type of operation F.do Amm. Ordinario will have already updated the fixed assets book row that increases the amortization fund and reduces by an equal amount the net accounting value of the asset.

#### MANAGEMENT OBJECTIVE DATA:

This tab allows managing the objective amortization data (technical extra-accounting - or fiscal) which can be processed alongside civil accounting amortization.

First, within the **[Fixed Asset Categories](/docs/configurations/tables/finance/fixed-asset-category)** table, the corresponding flag must be activated to receive the data within the fixed asset record.

Then, entering the corresponding ledger record, for example, concerning the purchase of the fixed asset, in this tab the data will automatically be reported (which can then be modified independently of the official patrimonial ones) useful for objective amortizations.

The fields of the tab indeed mirror those present in the 'Asset Operations' tab. The 'Amortizations' tab, on the other hand, is used exclusively for accounting/civil-type registrations, so the management of technical (extra-accounting) amortizations can only be carried out by entering the fixed asset record (Finance > Fixed Assets > Fixed Assets > double-click to enter).

#### COST CENTERS - Job orders:

This tab (**visible only when the advanced controlling functions are NOT active**) managed by the *Controlling Management* flag in the Company table is reserved for entering the cost/profit center (now corporate center) and the Job order (now Project) to be linked to the fixed asset record that will be created with the ledger record being entered.

In particular, the center that will be linked to the fixed asset record with the registration (and which can also be manually entered directly in the record in the 'Detail' tab of the same) represents an exception, valid for that asset, concerning the data entered in the asset category to which the entered record refers, in the Fixed Asset Categories table.

**The inserted cost center will be valued at the time of calculation (by the automatic procedure) of the amortization.**

:::tip NOTE:
If the advanced controlling features are active, the management of the corporate center and the project to which the amortization quotas should be attributed will be defined in a specific **Amortization for controlling** tab within the fixed asset record.
:::

**Cost center**: combo box necessary to recall the center and linked with the **[Corporate Centers](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** table

**Description**: Description of the center recalled via the previous field;

**Percent Completed**: percentage of allocation to the center entered in the row in use (for example, in case of total allocation to that center, indicate 100%; if the cost concerning the amortization quota will be divided over two centers, two rows will be entered each with a 50% allocation).

## PROCEDURE FOR SALE OF ASSET

- Enter an adequately configured ledger template with the Fixed Assets function and the correct type of operation, for example, total alienation
- Fill in the registration header as usual with the customer and invoice data including the total
- In the Fixed Assets tab, use the command **Select existing fixed asset** to call up the sold fixed asset record
- In the upper grid, indicate in the **Amount** field the taxable value of the sale agreed with the customer (indicate zero if the fixed asset is donated or destroyed)
- In the lower grid, the value of the accumulated amortization fund is automatically reversed, and, by difference, the capital gain or loss field is compiled automatically
- If the reason is correctly configured (advisable standard reason), the accounting section is already correctly complete with VAT and accounting data including the reversal of the historical cost, the amortization fund, and the recording of the capital gain/loss.

## OTHER

In the case of a partial alienation (always for an 'incremental' asset or in the event of partial alienation not connected for a non-incremental one), the user will need to supplement the record of the partial operation with the reversal amounts of the funds (therefore with a negative sign) and value the corresponding capital gain or loss: these amounts will then also need to be entered in the 'registration' record for the general ledger. In other cases, however, the application will have correctly updated the fixed asset record, will have also inserted the movement within the VAT section of the registration, and from there will have updated the corresponding registration. In the case of alienation, in particular, if the capital loss and gain detail accounts have been coded both within the reason and in the accounting parameters, the related rows for the sale operation (a row for reversing the total active historical asset, one or more rows for reversing the amortization funds, and by difference the loss/gain) will be added.

Additional operations that can be activated in the fixed asset record: at the time of loading a new asset, it is possible to proceed to split it into N different records. It is possible, in fact, that the purchase relates to multiple identical fixed assets, such as 5 identical computers: instead of manually loading 5 fixed assets, the user could proceed to load one for the total and then split it into 5 equal parts automatically using the appropriate button (another option could be to create a single fixed asset that consists of 5 fixed assets: this, although it simplifies the situation in the fixed assets book, creates a certain difficulty later in managing fixed asset alienations, as they will need to be managed manually as partial alienations).

It is possible to delete the inserted fixed asset row in the upper grid: in this case, a confirmation message for the deletion of the fixed asset record will also be executed, for which the default is set to 'No' (the message is executed even at the time of closing the registration without saving). Special attention is recommended with this message, in order not to leave 'empty' fixed asset records within the database.

#### Specific Buttons  
> **Select fixed asset**: allows selecting an already existing fixed asset and recording a new operation within it.  
> **Delete fixed asset.**: allows deleting the selected fixed asset.  
> **Delete selelected data from depreciation type grid**: allows deleting the selected row within the grid (lower) contained in the Amortizations tab.  

## **Parameters**

The **Parameters** tab is always present in an ledger record, reporting a series of useful information and parameters but not strictly necessary for entering a registration. 

**Recording status**: *definitive* or *provisional* for the ledger record in use: the registration with the state 'definitive' will continue to be modifiable (in everything except for the reason and reference currency) until a mandatory fiscal book has been printed definitively or the same has been used in an automatic account closure. The use of the 'provisional' state of the registration (which will remove and disable the VAT protocol and number the registration negatively starting from -1000) can be used to record invoices to be paid in advance or other types of periodic operations with future manifestation (like postponed rent). Entering the registration to re-enter the definitive state will automatically reassign the registration number and the valid VAT protocol for the set registration date (subject to its progressiveness). A management procedure for provisional registrations is present that allows for mass management of the transition to definitive registration for a group of selected provisional registrations.

The following flags derive from the ledger template: 

**VAT books grouping** (which it is recommended to keep always active) will group or not in the journal the VAT lines referring to the same accounting detail account;

**Automatic recalculation of cost centers, revenue, and projects**: may be of interest for certain types of manual registrations, for which the user is usually bound to manual management of the cc/cp sheets: by leaving the flag inserted, indeed, the application will always reset the cited sheets upon each modification of the originating data of the journal, which could cause the loss of all manual entries made. This automation, even with the flag not inserted, is however present at the time of entering the registration: it applies indeed to the modification entry of the same. 

**In black list**: (OBSOLETE) allows for managing the particular case of purchases from non-EU (with non-VAT reason) to summarize in the declaration operations with countries with privileged taxation, linking the current registration to the VAT movement of the customs DDT from which to read the values to declare.

**Date / Num. registration linked**: obsolete field, is enabled when the 'Black list' flag is activated. It was used for black list declarations, to link the customs DDT invoice (which provided the values to communicate) to the registering subject in the black list.

**Date / Num. reg linked to credit note**: obsolete field; in the sales area, when creating a credit note, a reference can be indicated within the document to which invoice it refers: 

![](/img/it-it/finance-area/