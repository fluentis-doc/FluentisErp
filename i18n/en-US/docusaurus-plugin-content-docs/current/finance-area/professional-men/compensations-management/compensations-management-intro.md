---
title: Remunerations Management
sidebar_position: 1
---

### **LINK TO THE TABS AT THE BOTTOM OF THE FORM**:

**[Withholding-tax Total](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**

**[Payment List](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**

**[Withholding tax paying-in](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in)**

**[VAT Summaries](/docs/finance-area/professional-men/compensations-management/vat-summaries)**

**[Cost/Profit Centers](/docs/finance-area/professional-men/compensations-management/cost-profit-centres)**

**[Social Security](/docs/finance-area/professional-men/compensations-management/national-insurance)**

 



From this mask, you proceed to load/edit the document received from the professional or the agent, **both in the case of a provisional note and a final invoice: the difference between the two will only involve the immediate or subsequent entry (thus modifying an already recorded provisional) of the fields related to the number and date of the final document.**

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image01.png)

 

### **HEADER FIELDS**:

**Professional man**: refers to the entry of the detail account for the compensation: only detail accounts with agent account type or suppliers with the withholding tax flag set in the register can be entered in this field.

The subsequent status flags (open the expander) are:

**accounted**: automatically managed by the application at the time of compensation accounting. Once this flag is set, the compensation will no longer be modifiable. **withholding paid-up**: will be applied to the compensation manually or through the procedure **[Withholding tax paying-in](/docs/finance-area/professional-men/search-compensations/withholding-tax-paying-in)** executable from the compensation search mask.

**certified**: automatically set by the program at the time of printing the final withholding certifications.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image02.png)

 

Connected to the agent or supplier deatil account, the **Withholding Tax Type** can be predefined to propose at the time of loading the compensation (the connection is defined in the register of the agent or supplier).

The subsequent **notes** field allows you to annotate a reference text for the compensation: this is a note that will then be included in the detailed notes of all accounting movements related to this compensation.

**Movement description**: will be used in the compensation accounting for the same field in the accounting record.

 

On the right side:

**Payment Code**: this field, automatically proposed (calling the compensation the applicable withholding tax type) if the corresponding field in the **[Withholding Tax Type Management](/docs/configurations/tables/finance/withholding-tax-types)** form is filled, refers to the code related to the payment reason to be indicated in the Unique Certification of the payees (see ministerial instructions).

Example: code A = services performed as a self-employed worker; Q = commissions paid to a single-mandate agent or representative; R = commissions paid to a multi-mandate agent or representative; U = commissions paid to a business finder.... 

 

**Reference Number and Year of Compensation**: this is an internal automatic numbering of the program that must be unique for the company.

**Document date**: proposed as the current date but can be set to the date of the received provisional note.

**Definitive document no./date**: refer to the references of the final invoice: these are mandatory fields for proceeding with the compensation accounting, even if the reference template may not necessarily be a VAT-related template. These two fields will be the only modifiable ones in case a payment has already been recorded in accounting.

**Reception date**: field to note the date of receipt of the final invoice (not mandatory for accounting).

 

**Project** (ex job order): serves to link the compensation to a project (sales job order): this could be the case of an appraisal on a job site managed per contract. If the **[ledger template](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail)** used in the compensation accounting has the projects (ex jobs order) flag active, then the costs entered in this compensation will be assigned to the project (job order) entered in this field.

**Currency exchange/Currencye exchange/Currency**: linked to the management of the currency and relevant exchange data retrieved from the exchange rate table (the currency is set in the agent/supplier register).

 

### DETAIL LINES

 

**Line Type**: fundamental data that allows the automatic management of the application of withholding on the service cost portion and its non-application on the portion related to the payee's pension fund. It can be of three types:



**Service cost**: to enter the portion subject to withholding for which Fluentis will propose the taxable percentage and the withholding rate read from the withholding tax type, the cost detail account will be reported from the corresponding cost of the agent/supplier, the cost in currency and euros, the VAT rate to be applied (also proposed based on the register), the pension fund percentage to be calculated on the line (proposed by the withholding tax type), and the reference economic competence dates. These are managed, for the connected user, according to the entry parameters (which can be set with the button available in the ribbon bar): the lines following the first will automatically propose the range set in the previous line.

**Social insurance fund**: Fluentis will propose Taxable withholding 0% and the taxable VAT value calculated automatically based on the percentage present in the service cost line previously entered.

**Other**: managed as an amount subject to withholding (but the user can force this setting): normally refers to reimbursements included in the compensation, which may or may not be subject to withholding and are usually VAT exempt.

Upon saving the compensation, control messages will be executed in case the value of the item does not correspond with the total to pay, as well as in the case of non-balancing the data to cost/profit center.

Once the compensation accounting has been executed, it will no longer be allowed to modify the compensation data: in case payment accounting or Enasarco accounting has been executed, however, the references to the final document number/date, movement description, and the detail account entered in the details grid will be modifiable.

In case the compensation is saved and has a final document date and number, it will be possible to proceed with the accounting through the **Accounting and Close** button in the ribbon bar: a mask will open in which the proposed dates will be the most recent valid ones for the VAT register associated with the template linked to the withholding type used.

Some prints are available that can be executed with the commands placed in the ribbon bar.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image03.png)


*Specific buttons*:  
> **Insertion Parameters**: in the user parameters, it is possible to define whether the new compensation should propose the same detail account as the current one, the same withholding tax type, how to handle the new document date, and finally how to manage the economic competence date range (end of the fiscal year – i.e., the end date will be equal to the end of the fiscal year, daily – i.e., final date equal to the start date, no date for service type accounts – i.e., it will require the entry of both dates if the type of the entered detail account is set as 'Service');  
> **Accounting and Close**: active when final document date and number have been entered, allows for the accounting of the compensation;  
> **New Detail**: activates the cursor for entering a new detail line for the compensation;  
> **Delete Detail**: deletes the selected detail lines within the compensation;  
> **Compute Values**: recalculates the values related to the withholdings based on the data entered in the detail lines.  

---
### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>