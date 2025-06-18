---
title: Fluentis Fast Start - Roadmap for Starting a New Operating Environment
sidebar_position: 2
---

The **Fast Start** is a feature designed to make the initialization of the Fluentis management system quick and easy, eliminating the need for extensive manual configurations.

### Configuration with Fast Start

**Initial Assessment**  
- Decide whether to adopt the **Fast Start** to launch the system with preconfigured settings. This choice will affect the initial setup.

**Fast Start Features**  
- Automatic population of basic parameters.  
- Simplified configuration for quickly starting the system.  

**Main Benefits**  
- Efficiency in the initial setup.  
- Reduced risk of manual errors and savings in time and resources.  

**Launch the Procedure**  
- Start the **Fast Start** to apply the default settings.  
- Subsequently review the generated parameters to ensure compliance with business requirements.

:::tip[Where to Activate]
**To launch the procedure**, access the [**Company Table**](/docs/configurations/tables/general-settings/company), enter the specific company of interest, and press the *General Settings* button present in the ribbon bar.
:::

:::note[Info]
The procedure is available for **each individual company** present in the database, therefore, for example, company 1 could be initialized with the Fast Start procedure, while company 2 could be configured manually. 

This is why the **activation button** is located **within the individual company**.
:::

:::danger[WARNING]
The chart of accounts (in no part) and other tables involved in the procedure must not already be populated. It is recommended to decide immediately and execute this procedure first after installation.

:::

---
<details>

  <summary>Fast Start (Click to expand)</summary>

Tables involved (Stored Procedure Fluentis.SH_CreateNewYear_IT):
    
 - > Account Types 
 - > Chart of Accounts 
 - > General Accounting Parameters 
 - > Asset Parameters 
 - > Portfolio Parameters (active - effects) 
 - > Outstanding Parameters 
 - > MPS Parameters 
 - > Accounting templates 
 - > VAT Codes 
 - > VAT Registers
 - > Document Types 
 - > Payment Types 
 - > Payment Solutions 
 - > Agent Categories 
 - > Withholding Types 
 - > Asset Categories 
 - > Financial Flow Types 
 - > Advance Types
 - > Outstanding Status 
 - > Effects Status 
 - > Presentation Note Types 
 - > Effects Types 
 - > Link between payment types table and effect types 
 - > Accounting Registration Numberings (definitive and provisional)   
 - > Transaction Numbering 
 - > Settlement Numbering 
 - > Monitor Payment Numbering 
 - > Intrastat Numbering 
 - > Agents Settlement Numbering 
 - > Presentation Note Numbering
 - > Effects Numbering 
 - > [Sales Document Numbering](/docs/configurations/tables/fluentis-numerations)  
 - > [Purchase Document Numbering](/docs/configurations/tables/fluentis-numerations)  
 - > Invoice Types ([purchase](/docs/configurations/tables/purchase/purchase-invoices-type) and [sales](/docs/configurations/tables/sales/invoices-type)) with links to accounting templates
 - > Delivery Note Types ([purchase](/docs/configurations/tables/purchase/purchase-delivery-notes-type) and [sales](/docs/configurations/tables/sales/delivery-notes-type)) linking to invoice types
 - > Order Types ([purchase](/docs/configurations/tables/purchase/purchase-orders-type) and [sales](/docs/configurations/tables/sales/sales-order-types)) linking to delivery note types
 - > [Offer Types](/docs/configurations/tables/sales/sales-offer-type) 
 - > [Invoice Parameters](/docs/configurations/parameters/sales/sales-invoices-parameters) and related [groupings](/docs/configurations/parameters/sales/invoice-grouping)  
 - > [Delivery Note Parameters](/docs/configurations/parameters/sales/dn-parameters) and related [groupings](/docs/configurations/parameters/sales/dn-grouping)  
 - > [Order Parameters](/docs/configurations/parameters/sales/sales-orders-parameters) and related [groupings](/docs/configurations/parameters/sales/orders-grouping)
 - > [Offer Parameters](/docs/configurations/parameters/sales/offer-parameters) 
 - > Project Types (sales job order)
 - > Intervention Types 
 - > Project Numbering 
 - > Intervention Numbering 
 - > Intervention Request Types (and related numbering)
 - > Planned Intervention Types (and numbering)
 - > Job Work Return Types (and numbering)
 - > Job Order Types (and numbering)
 - > Production Order Types (and numbering)
 - > Planned Purchasing Order Types (and numbering)
 - > Planned Production Order Types (and numbering)
 - > Planned Job Order Types (and numbering)
 - > Production Order Types (and numbering)
 - > Job Order Types (and numbering)
 - > RDA Types (and numbering)
 - > (Types) sales turnover 
 - > (Types) purchase turnover
 - > Price List Types 
 - > Address Types 
 - > Discount Types 
 - > Languages 
 - > Countries 
 - > Blacklist Countries 
 - > Currencies 
 - > Units of Measure 
 - > Freight 
 - > Shipping (types) 
 - > Reclassification Models (controlling)
 - > Link of the reclassification model for CEE balance with detailed chart of accounts
 - > Working Hours 
 - > Severity (ticket CRM)
 - > SLA (ticket CRM)
 - > CRM Ticket Types (Tipi Ticket CRM) (and numbering)
 - > Bill of Materials Versions
 - > Item Classes 
 - > Warehouses
 - > Warehouse Templates 
 - > Default Data for CRM (Contact Types, Visit report, Opportunities, Contact Quality, success percentages, etc...)

</details>

---

**CUSTOM ENVIRONMENT WITHOUT FAST START **

If you do not launch the Fast Start, it is necessary to manually populate the following tables.

## BASIC TABLES 

<details>

  <summary>COUNTRIES Click to expand!</summary>
 
 ## Table necessary for all documents and the entry of CLI FOR registries

  1. Fill in the code (can also be internal but the international one is recommended) and description 
  2. Specifically check the field COD ISO EU which, if missing, does not save the pre-VAT code, pay attention to special cases
     * Greece GR -> ISO = 'EL'
     * Save special cases can be executed to update and fill ISO EU = COD ISO (old db pre-fast start)

</details>

<details>

  <summary>CURRENCIES Click to expand!</summary>
 
 ## Table necessary for managing currency exchanges and accounting registrations

  1. Ensure the presence of at least the main currencies and especially Euro
  2. Flag *download exchanges* to enable the entry of the rate for the currency
  3. Other fields
     * Decimals, it is recommended to set to 2
     * Euro flag only on EUR

    4. The lower grid is optional but useful for automating the detection of exchange rate differences by setting the relevant accounting accounts 

</details>

<details>

  <summary>COMPANY  Click to expand!</summary>
 
 ## Table necessary for electronic invoicing and for company data in documents and prints

  1. Fill in all tax data
  2. Data necessary for electronic invoicing
         * VAT number and fiscal code
         * Phone and fax are not mandatory, be careful not to enter / or special chars to separate the prefix
        * REA (Province two letters and number)
        * Sole partner / more partners
        * Liquidation YES / NO
        * Subscribed / paid capital - PAY ATTENTION not to put the thousands point and separate decimals with a point and NOT a comma
        * Legal nature
        * Tax regime

</details>

<details>

  <summary>DOCUMENT TYPES Click to expand!</summary>
 
 ## General group table 'Document Types' not to be confused with the homonymous one in the administration group

  1. Verify with a Fast Start the minimum essential types
  2. **For Electronic invoicing, enter a type with code and Description FattPubb**

</details>

<details>

  <summary>PAYMENT TYPES  Click to expand!</summary>
 
 ## Necessary for the registries and documents (deadlines) and accounting records 

Ensure the presence of data in the **P.A. Code** field for the electronic invoice treatment

Pay attention to the connection with effect types (bottom right grid) otherwise it will not search the entries in the creation of effects

</details>

<details>

  <summary>PAYMENT SOLUTIONS Click to expand!</summary>
 
 ## Necessary for documents (deadlines) and accounting 

</details>

## ADMINISTRATION TABLES 

### Basic Accounting 

<details>

  <summary>VAT RATES Click to expand!</summary>
 
 ## Necessary for accounting, documents, electronic invoicing

  1. Pay attention to populate the PA Code field on exemption/exclusion/non-taxability codes for Electronic Invoices
  2. Check the IN VAT Declaration field necessary for quarterly VAT settlements
  3. Check where necessary the VAT field at 0 in LG which allows VAT lines at zero
  4. Check where necessary the VAT field for automatic templates (reverse charge cases with non-deductibility on purchase)
  5. Check the field Exclude from automatic templates (mixed reverse charge cases - non-reverse part)
    

</details>

<details>

  <summary>VAT REGISTERS Click to expand!</summary>
 
 ## Necessary for accounting and VAT settlement

  1. Plan a distribution between Italy, EU and Extra EU, advisable to distinguish between goods and services EU in light of document codes TD17 - TD18 for self-invoices to communicate to the SDI (advisable distribution also for extra EU)
  2. For purchase registers in reverse charge (Italy and EU), plan the respective registers on the sales side for the giroconto, do not share the giroconto register with EU sales (for example).
  3. It is advisable to provide for a specific register for VAT settlements (to facilitate the definitive print and reprint in case only this section is unlocked)
  4. Plan (and then verify) the correct matching between Invoice Type, Invoice Type Numbering, Accounting template, and VAT Register to avoid creating gaps in protocols or conflicts. The templates on the sales side generally have the option to impose the protocol equal to the invoice number.
  5. Ensure you have entered the current year and any previous years if necessary, then the year will be created automatically by the new year counter generation utility.
    

</details>


<details>

  <summary>ACCOUNTING REGISTRATION NUMBERING Click to expand!</summary>
 
 ## Necessary for accounting

  1. Ensure at least one numbering for definitive registrations (recommended use of code 1 description General ledger posting numeration)
  2. Plan and set the policy of the numerator (Daily or Annual) other parameters of the numerator as per general instructions on numberers
  3. It is advisable to anticipate a numbering for provisional registrations too (Code 2 description General ledger posting provisory numeration)
    

</details>

<details>

  <summary>ACCOUNT TYPES Click to expand!</summary>
 
 ## Necessary for the Chart of Accounts, accounting, and balance printing

  1. Ensure at least the 4 types Asset Liability Costs Revenues for the Balance Sheet and journal entries 
  2. Plan and set the account types for Customers and Suppliers (it is advisable to divide Italy, EU, and Extra EU), make sure to tick both Active/Passive and Customer/Supplier
  3. It is advisable to also provide for a type for Banks for use through registries; otherwise certain functions like the portfolio cannot be managed, it is not advisable to register bank transactions with a non-register bank account.
  4. It is advisable to create an account type for costs and revenues to be adjusted with accruals and deferrals to be set with the Service flag in addition to cost/Revenues
  5. Necessary to create an Agent type if you want to activate the commission management (Flag on passive and Agent)
  6. Optional to create the Order Accounts type (with the order accounts flag) to manage off-balance sheet entries.
    

</details>


<details>

  <summary>CHART OF ACCOUNTS Click to expand!</summary>
 
 ## Necessary for accounting and balance printing

  1. Plan in the group grid at least the 4 types Asset Liability Costs Revenues
  2. Plan the subgroups (no limit on the number of sublevels) and also fill in the group Nature field
  3. Define, in the lower grid, for each last-level group of details the accounts/sub-accounts of detail. ATTENTION: for each group there must be at least one account where the sub-accounts will then be inserted
  4. DO NOT insert accounts for registries (Customers Suppliers Agents and BANKS) from here but only through CONTACTS
  5. Ensure all necessary accounts (Closing and Opening Balance, Closing Income Statement, Profit Loss, and Profit Loss from the previous year, Accruals and Deferrals - with specific account type)
  6. Optional to create the Order Accounts group to manage off-balance entries.
    

</details>


<details>

  <summary>GENERAL ACCOUNTING PARAMETERS Click to expand!</summary>
 
 ## Necessary for accounting

  1. Insert the current year and any previous years if necessary, then the year will be created automatically by the utility for generating the new year counters.
  2. Fill in the three date ranges for exercise management
  3. Fill in, if available, also the templates for closing and opening accounts, or take them back later
  4. Fill in the VAT periodicity
  5. Enter the pairings between ledgers related to customers and suppliers, banks, and agents, and the respective account types
  6. Define the accounts for automatic procedures in the second tab
 

</details>

<details>

  <summary>GENERAL ACCOUNTING TEMPLATE  Click to expand!</summary>
 
 ## Necessary for accounting

  1. Plan the templates connected to the main types of purchase and sale invoices, and connect them to their respective VAT registers (A template with general accounts on Customer Supplier and cost revenue, specific sub-account for credit debt VAT is necessary) Be careful with the type of amount in the lines.
  2. Also plan templates for giroconto for Reverse Charge and EU
  3. Provide templates for payments and collections with account closing (necessary also for bank transfer lists, etc.) pay attention to the template and type of amount in the lines
  4. Provide templates for the phases of the active portfolio (issuance of effects, Presentation and Credit), presentation and credit do not need a template, while issuance requires a template Effects in portfolio to Customer
  5. Plan templates for credit notes with inverted template signs, for reverse charge use the inversion of the first and share the giroconto that has the option for automatic sign inversion
  6. Provide templates for recipients (with template) and for recipient payments (template not needed)
  7. Provide templates for opening closing, accruals, and deferrals, amortizations (template not needed)
  8. It is advisable to provide for other templates for the journal entries and a general journal entry template without a template.
  9. Provide settings for sending self-invoices to SDI and a template for EU service purchases without VAT connecting to the self-invoice  
 
    
</details>

### Asset Management 

<details>

  <summary>ASSET PARAMETERS Click to expand!</summary>
 
 ## Necessary for asset management

  1. Plan the management policy of numbering, whether single or with pre-code  
    
</details>

<details>

  <summary>ASSET CATEGORIES TABLE Click to expand!</summary>
 
 ## Necessary for accounting and asset management

  1. Provide the categories and the ministerial depreciation rate according to the type of activity performed
  2. Enter the limit for annual depreciation (usually 516 Euro) in the categories
  3. Enter the flag Depreciation first year to halve the share in the first year
  4. Plan the depreciation policy of incremental components (it is not recommended to change it mid-course)
   
</details>

<details>

  <summary>ASSET PRE-CODE TABLE Click to expand!</summary>
 
 ## Optional

  1. Plan the policy of numbering management, whether single or with pre-code 
 
    

</details>

### Recipient Management 
<details>

  <summary>TAX CODE TABLE Click to expand!</summary>
 
 ## Necessary for F24 management

  1. Verify the presence of data and add if necessary codes for VAT (6001, 6002.... 6099) and for withholdings (1040, 1038....)

   
</details>

<details>

  <summary>WITHHOLDING TYPES TABLE  Click to expand!</summary>
 
 ## Necessary for recipient management

  1. Provide necessary types for recipients (1040) at 20% withholding, for agents and for flat-rate taxpayers (0% on 100%)
  2. Link the templates for the compensation accounting 
  3. Link the agent category in the type reserved for agents
   
</details>

---

## TREASURY TABLES 

### Active Portfolio 

<details>

  <summary>STATUS EFFECTS TABLE Click to expand!</summary>
 
 ## Necessary for portfolio management

  1. Provide at least the fundamental types Issued, Presented SBF, Accr. (Accredited) and Ins. (default) to link to the respective flag
   
</details>

<details>

  <summary>OUTSTANDING STATUS TABLE Click to expand!</summary>
 
 ## Necessary for outstanding management linked to the portfolio

  1. Provide at least the type "Outstanding" linked to the relevant flag
  2. It is advisable to codify all types mirroring the present flags 
  
   
</details>

<details>

  <summary>EFFECT TYPES TABLE Click to expand!</summary>
 
 ## Necessary for portfolio management

  1. Provide at least the type "Bank Receipt"
  2. Link the numbering referred to in the next point
  3. Link an account from the chart of accounts (e.g. Active effects in portfolio) to account for the issuance

   
</details>

<details>

  <summary>EFFECTS NUMBERING Click to expand!</summary>
 
 ## Necessary for portfolio management

  1. Provide the type "Bills numbering"
  2. Configure the details like the other standard numberers
  3. Annual frequency is recommended

   
</details>

<details>

  <summary>PRESENTATION LIST NUMBERING Click to expand!</summary>
 
 ## Necessary for portfolio management

  1. Provide the type "Bills list numbering"
  2. Configure the details like the other standard numberers
  3. Annual frequency is recommended

   
</details>

<details>

  <summary>TYPES OF PRESENTATION LISTS OF EFFECTS TABLE  Click to expand!</summary>
 
 ## Necessary for portfolio management

  1. Provide at least one default type with linked numbering
  2. It is advisable to provide various types depending on the bank of presentation linking the supporting accounts for the presentation and the ordinary current accounts for specific crediting
  

   
</details>

### Supplier Transfers 
<details>

  <summary>SUPPLIER PAYMENT NUMBERING Click to expand!</summary>
 
 ## Necessary for managing payment lists

  1. Provide the type "Bills list numbering"
  2. Configure the details like the other standard numberers
  3. Annual frequency is recommended

   
</details>

<details>

  <summary>PAYMENT TYPES TABLE Click to expand!</summary>
 
 ## Check: already managed in general tables

  1. Verify if there is a suitable type present (e.g. "Bank Transfer") that will be called

   
</details>

### Invoice Advances 

<details>

  <summary>ADVANCE TYPES TABLE  Click to expand!</summary>
 
 ## Necessary for managing advances

  1. Provide a type for each connected bank
  2. Link the numbering referred to in the next point
  
  
</details>

<details>

  <summary>ADVANCE INVOICE LIST NUMBERING Click to expand!</summary>
 
 ## Necessary for managing advance lists

  1. Provide the type "Default"
  2. Configure the details like the other standard numberers
  3. Annual frequency is recommended

   
</details>

### Cashflow (Cashflow)

<details>

  <summary>FLOW TYPES TABLE Click to expand!</summary>
 
 ## Necessary for cashflow management

  1. Provide a type for each financial flow type with the relevant linked flag
  2. It is advisable to enable them all, as only those of interest are selected when launching the calculation, and the choice remains stored
  
  
</details>

<details>

  <summary>FINANCIAL ACCOUNT TYPES TABLE Click to expand!</summary>
 
 ## Necessary for cashflow management

  1. Enter ordinary current accounts
  2. It is not necessary to enter support accounts for SBF if the reading parameter is enabled when launching the calculation
  
  
</details>

<details>

  <summary>DUE DATE TYPES TABLE Click to expand!</summary>
 
 ## Optional for managing off-account due dates in cashflow

  1. Enter types of interest (e.g. Salaries)
  
  
</details>

Check in the various document tables (Orders, DDT, RDA, etc.) which types you want to read in the cashflow calculation.

## SALES TABLES 

### Offers 

<details>

  <summary>PARAMETERS  Click to expand!</summary>

  Define the [parameters](/docs/configurations/parameters/sales/offer-parameters) to be used in offers. 

</details>

### Orders (Ordini)

<details>

  <summary>ORDER TYPES TABLE Click to expand!</summary>

  Insert the [order types](/docs/configurations/tables/sales/sales-order-types) used; the mandatory data are: *Type*, *Description* and *[Numbering](/docs/configurations/tables/fluentis-numerations)*.     
  The criteria for creating various types may differ, for example:      
  - creation of the type ITALY CUSTOMER ORDER, UE CUSTOMER ORDER, EXTRA UE CUSTOMER ORDER.       
  - creation of type based on [Delivery Note Type](/docs/configurations/tables/sales/delivery-notes-type) or [Invoice Type](/docs/configurations/tables/sales/invoices-type) to be created.     
  - creation of type based on the warehouse to be moved

</details>

<details>

  <summary>PARAMETERS Click to expand!</summary>

  Define the [parameters](/docs/configurations/parameters/sales/sales-orders-parameters) to be used in customer orders. 

</details>

### Sales DDT 

<details>

  <summary>DELIVERY NOTE TYPES TABLE  Click to expand!</summary>

  Insert the [delivery note types](/docs/configurations/tables/sales/delivery-notes-type) used; the mandatory data are: *Type*, *Description* and *[Numbering](/docs/configurations/tables/fluentis-numerations)*.     
  The criteria for creating various types may differ, for example:      
  - creation of type ITALY CUSTOMER DDT, UE CUSTOMER DDT, EXTRA UE CUSTOMER DDT.       
  - creation of type based on the [Invoice Type](/docs/configurations/tables/sales/invoices-type) to be created.     
  - creation of type based on the warehouse to be moved
  
</details>

<details>

  <summary>PARAMETERS Click to expand!</summary>

  Define the [parameters](/docs/configurations/parameters/sales/dn-parameters) to be used in customer DDT. 
  
</details>

### Sales Invoices 

<details>

  <summary>INVOICE TYPES TABLE Click to expand!</summary>

  Insert the [invoice types](/docs/configurations/tables/sales/invoices-type) used; the mandatory data are: *Type*, *Description* and *[Numbering](/docs/configurations/tables/fluentis-numerations)*.     
  The criteria for creating various types may differ, for example:      
  - creation of type ITALY CUSTOMER INVOICE, UE CUSTOMER INVOICE, EXTRA UE CUSTOMER INVOICE.     
  - creation of type based on the Nature of the invoice (invoice, credit note, etc.)  
  - creation of type based on the warehouse to be moved.
  
</details>

<details>

  <summary>PARAMETERS Click to expand!</summary>

  Define the [parameters](/docs/configurations/parameters/sales/sales-invoices-parameters) to be used in customer invoices. 

</details>
