---
title: Company 
sidebar_position: 3
---


:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

In case of manual configuration, refer to the checklist on the linked page.
:::

### INTRODUCTION 

The table, which is considered fundamental and necessary to manage any other data, allows for the coding of companies related to the database to which you are connected.

It is possible to code an unlimited number of companies that will always be all online simultaneously within the same database. After entering/creating a new company, it will be necessary to manage visibility rights for users through the ARM application.

:::note Note
Normally, the installation procedure for Fluentis creates a default company, so the database is never entirely empty.
:::

Next to the concept of company (or more precisely, society, also in the legal sense, coded in the database), it is immediately necessary to mention **DIVISION**.

For each company, it is necessary to <u>**code at least one division**</u> (for example, it can be named "*Main Office*" or other similar names if there is no specific need to define different divisions after understanding the relative management and peculiarities).

:::tip INFO
The concept of division can be understood as a company department or a branch of the company, of such importance that it determines a separate active and passive cycle, understood as the production of documents, orders, invoices, etc. Accounting, although unique at the company level which produces a single balance sheet, can be easily filtered by division to produce a divisional balance sheet. Also, in various forms such as the accounting movement search and open items, it is possible to filter (sometimes the filter field is initially "hidden" within an expandable section). Item registries are also separate as they refer to different "businesses".
:::

---

### MANAGEMENT TABLE

The form that opens represents the list of companies present in the database. 
Some fields present in the detail of the company itself are displayed in the grid for convenience, as illustrated below.

**To create a new company** (which will then be defined as the only or various related divisions), **press the *NEW* button**.

:::note Note
After creating the new company in this table, it is necessary to manage its visibility permissions for the various users through the ARM application and also to preliminarily define the company itself in ARM (menu Companies).
:::

### COMPANY REGISTRY DETAIL 

the **Code** of the Company (which must correspond to the code defined in the ARM portal)

**Description**: that is the official corporate name of the company.

**VAT register number**: normally entered without the country prefix like IT for Italy.

**Company tax code**: which can correspond to the VAT number.

**Activity code**: that is the ATECO code of the main activity of the company.

**Company's Country**: based on this field, Fluentis recognizes the localization and fiscal settings to be presented by default in the system.

**Currency**: this is the currency in which the company’s official accounting is kept.

:::note Note
The country and currency of the company are already populated as they are required and set at the time of Fluentis installation. They are clearly fundamental data that implement a series of other administrative and fiscal settings. The currency, in particular, is the one in which our accounting is denominated.
:::

**Language**: in this field, not mandatory but very important, the official language of the company is indicated. It is used as the default language to be reported in prints, as well as in the automatic valorization of descriptive strings in accounting.

**Associated Registry**: this is an optional field that serves for two types of use: the first in case the company is a sole proprietorship, this is the connection to the registry that allows us to retrieve the data of the individual for tax declarations.
The second use: in case of two companies belonging to a group that have relations, and therefore intercompany documents, it is used for the data transfer from one company to the other; for example, so that the sales invoice of the first company automatically becomes a purchase invoice for the second company: to do this, therefore, the second company must know in which registry to look for the supplier to correctly address the document.
The setting is also used for the procedure in the Controlling module > Closures > Interim > Consolidation, where the system neutralizes costs and revenues, receivables, and payables between the two companies part of the group, while aggregating "external" costs and revenues, receivables, and payables to obtain a consolidated balance sheet.

**Address fields**: that is the address of the registered office.

**VAT office**: in this field, the city where the reference VAT office of the company is located is indicated.

**REA Office/REA Registration Number**: code of the province and registration number in the business register (necessary for electronic invoicing).

**Subscribed Capital/Paid-in Capital**: texts relating to the values of the corporate capital situation (necessary for electronic invoicing).

The **Members** and **State** fields, whether in liquidation or not, are also necessary, always for electronic invoicing.

**Legal nature**: in this field, the code that identifies the type of company is indicated. The table is fixed and predefined.

**Tax system**: in this field, the tax regime under which it operates is indicated. The table is fixed and predefined.

:::tip VAT GROUP
In the list of possible regimes, code 61 VAT GROUP has been added. Selecting this item (if the company we are managing is part of a VAT group and therefore presents its tax code but the VAT number of the parent company), in the export phase of the XML file of the electronic sales invoice, both the VAT number and the tax code will be reported. In fact, the SDI checks both fields (and not only the VAT number) in case the company declares to be part of a VAT group.

For XML files of incoming purchase invoices, with this setting a check is also carried out on the VAT number and then, if there are multiple companies in the database with the same VAT number, also on the tax code.
:::

**Decimal Places for Quantity Fields**: which indicates how many decimal places to report in the prints for the quantity fields of the documents.
The flag **Show currency symbol** indicates whether or not to display the currency symbol (and fields equal to zero) in the accounting movement display forms.

Flag **Controlling Management** that enables the "advanced" procedures (full set of functions) of the controlling area for the company we are modifying.

**Parent company**: field managed in the procedure of the controlling module *Master Consolidation*. This performs a specific data consolidation for the parent company.

By entering the parent company, the field for matching with the chart of accounts of the master company also becomes visible within the chart of accounts of the selected company.
Thus, during consolidation, the accounting movement of the subsidiary will be reflected in the account indicated relating to the master company.
The data managed in this processing, in any case, is the one managed in the controlling module and already elaborated by the related cost drivers, not the general accounting data.
Only the accounting nature part will be transcoded, while the cost center movement (business center) will be reported unchanged, and the prerequisite for the reporting is, in fact, that the business center code is the same in both the master company and the subsidiary.

#### Lower Section

At the bottom of the window, we find three expandable sections with additional data that can be entered; in this case, these are optional data that may also not be present, at least initially:

Within the **EDI** (Electronic Data Interchange) section, some company values used in these telematics files can be indicated.

In the **Stamp charges** section, the value of stamp duty expenses and the value that triggers the obligation of its application in the invoice is indicated, the authorization number for virtual stamp duty, and the province of the finance authority. I remind you that in the company table, the minimum value of VAT-exempt operations that triggers the addition of stamp duty in the invoice should be entered, but this stamp duty expense must also be coded in the Expenses Types table and must be entered in the customer registry. Only in this way, if the amount in the invoice is VAT-exempt, the stamp duty expense will be added.

**Ri.Ba Expander**: contains the identifying data of the company for the banking telematics system: the SIA code (5 alphanumeric characters) and the CUC code (8 characters) for SEPA.


### Division Grid, Default Banking Support, and Logo

In the right column of the form, we have three grids.

In the first, the defined divisions for the company are visible. It is good to always remember that for each company, there must be at least one division within the software, even if this, as happens in many cases, corresponds to the only office. In fact, it is often renamed to division 1 or, even better, simply headquarters. For each division, it is possible to define whether management control occurs on a weekly or monthly basis.

In the second, we can indicate the  

The last part concerns the company logo, for which the default one (set through the ***Change Default Logo*** button on the ribbon bar) is automatically used within the documents of the active/passive cycle.

One or more images must be imported to be used as a logo via the ***Import Images*** button.

---

### GENERAL SETTINGS BUTTON (FOR STARTING THE FAST START PROCEDURE)

This button creates, in a newly installed database, or in a company added to the database, a whole series of default base data; for example, a chart of accounts and basic settings for VAT registers, accounting reasons, document types such as orders, delivery notes, and invoices, etc.

This is a very useful feature during the definition phase of the strategy for launching a new company and for the relative software setup because, in certain cases, it may be more convenient, in order to make the software fully operational in a short time, to start from a default situation, then making modifications to adapt, for example, the chart of accounts, accounting reasons, and other default tables to the concrete situation, rather than starting from scratch by creating these tables and settings. 

:::tip[More Info]
For more detailed information, see [**here**](/docs/guide/fast-start).
:::

### DATA REQUIRED FOR ELECTRONIC INVOICING

:::tip WARNING

It is recommended to completely fill in all the data managed by the company registry, however we take the opportunity to highlight the fields that are necessary for creating electronic invoices. 

- First of all, the VAT number and the tax code. 
- The recipient code and PEC are not mandatory fields useful solely for storing your data.
- Regarding the phone and fax, if you wish to fill them in, it is recommended not to use the separator for the prefix to avoid possible issues in the formal checks of the interchange system, due to unrecognized characters.
- The fields related to the REA office, the first accommodates the province abbreviation and the second the number.
- The **Members** and **State** fields are also necessary, whether in liquidation or not.
- You will also need to fill in the subscribed and paid-in capital for this purpose, taking care not to use the thousand separator and to separate the two decimals with a point instead of a comma, again due to the formal checks of the SdI. 
- The legal nature and the tax regime.
:::


### SETTINGS FOR COMPANIES BELONGING TO A VAT GROUP

:::tip Info: the VAT group
With the introduction of this regulation, the possibility has been foreseen for companies linked by financial, economic, and organizational interests to create a single group, considered as a single taxpayer (for VAT purposes only) towards the tax authorities. It will, therefore, have a single VAT number. The companies that are part of the group will invoice operations to third parties with a common VAT number, the group VAT number. On the other hand, the sales of goods and the provision of services exchanged between companies within the group will not be relevant for VAT taxable income. Consequently, all operations carried out by one of the group subjects are considered as carried out by the entire group. Invoices and other documents are issued by the Group representative or the participants indicating on them both the group VAT number and the tax code of the participating subject who performed the operation.
:::

In case one or more existing companies in the database are part of a VAT group, it is necessary to populate the **VAT register number** field (with the group VAT number) and the **Fiscal Code** field (specific to the company part of the group). 
It is important to also set the **Legal nature** to '61- VAT group'. 


### **NEW VAT GROUP TAB**

In this tab, the configurations of the VAT group consisting of one or more of the companies in the database are entered.

Start Year/Period and End Year/Period: to define the validity of the setting and the existence of the VAT group status.

Is parent company: to be activated if the company in use is the parent company, that is, the one that imposes its VAT number on the others.

Combo box parent company: serves to link the company in use to the already existing parent company within the same database.

Parent Company Registry: serves to select an external parent company, therefore not present within the same database as a company (for example, because managed with different software and therefore needs to be entered as a simple contact registry from which to read data such as the VAT number, etc.).


**NOTE: Within the processing of LiPe (quarterly communication of VAT settlements), there is a flag to enable the VAT group mode for the declaration itself.**

---

### VIDEO TUTORIALS

:::important See Also
[**VIDEO TUTORIALS ON GENERAL TABLES**](/docs/video/finance/intro)
:::