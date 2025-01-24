---
title: Create Reclassification Pattern
sidebar_position: 2
---

:::note Path 
**Controlling > Reclassifications > Reclassification Patterns > Create Reclassification Patterns**

Note:
For everything not detailed in this document about the common functioning of forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).

:::

---

### INSERT NEW PATTERN - HEADER 

Reclassification patterns are common elements across all companies loaded in the same database: the structure of the reclassification will therefore be visible in all companies, while what will be specific in each of these will be the assignment of its own chart of accounts structure (cdc/cdp, etc.) to the various models. In this way, it will also be possible to create a consolidated reclassification for the group.

:::tip Note 
They are common to all companies or to all companies in the same geographical location assigned to the *Reclassification Type* via its *Country* property.
:::

The necessary elements to create a new model are:

- **Reclassification Type**,

- **Pattern Code** (alphanumeric 10 characters),

- **Description** of the same.

- **Sign Reversal**, available only in reclassification types related to *Controlling*, allows the forced reversal +- on all nodes of the model.

- **Absolute Value Index**, available only in reclassification types related to *Controlling*, sets the calculation of percentage indices in absolute value, indeed.

Once these values are assigned, the various buttons for defining the reclassification structure will be activated: with the button **Insert Root Node**, the first levels of the structure will be created, while with the subsequent **Insert Node**, sub-levels will be added to the selected structure.

Each level of the structure, in turn, will be defined through a code (alphanumeric 8 characters) and a description: uniqueness in this particular case is given by the combination of both values, code and description together (this is because in a EU reclassification, for example, there are multiple levels ‘A’ in the various sections of the model, with different descriptions). In the following points, we will detail the *Types of Level* that can be assigned to these codes, bearing in mind that the deletion of the various levels is allowed only if they are not valued in a formula ('children sum' or 'expression').


### UTILITIES IN THE RIBBON BAR


1. The **Search Missing Detail Accounts** form allows searching and printing the sub-accounts not inserted at any point in the reclassification model: in the search filter, the flags *View expired accounts - with end date validity*, the flag *View account not used in cost centers grid*, and the flag *View account not used in account grid* are available, the latter two allowing you to define whether to search in nodes of type *Cost Centers* or *Detail accounts*.
   In particular, if the generic account has been entered, its detail accounts will not be displayed even if they are not specifically inserted in the model itself.
2. The **Search Double Detail Accounts** form allows searching and printing the list of detail accounts that have been entered in multiple points of the model, considering only the account nodes or cost center nodes through the two flags *View account doubled in cost centers grid* and *View account doubled in account grid* present in the filter. In particular, if the generic account and a detail account of it have been entered, it will be displayed as it is considered both in total and as detail.


### HEADER FIELDS 

**Node Type** - Represents the type of row in the reclassification model. The following types are available:

- ***Detail accounts*** is dedicated to the valuation of general accounting data, according to the details of the company's chart of accounts structure.

- ***Cost Centers*** dedicated to the valuation of analytical data. If the model is related to controlling, it will have some specific characteristics available.

- ***Profit Centres*** (present for backward compatibility, only if the company does not have the *Controlling* flag) dedicated to the valuation of accounting data by profit/revenue center.

- ***Children Sum***: it is a node automatically valued with the sum of the nodes present in the first underlying level.

- ***Expression***: in this case, the section for filling in the expression is freely configurable. Parentheses, the management of the 4 main mathematical signs, and the insertion of numbers are allowed. To include a model node in the formula, it is recommended to use the 'Formula' button, which will open a help for selecting model nodes: in this form, the nodes in red identify those not yet saved and therefore not yet usable in a formula.

- ***Job Orders*** (present for backward compatibility, only if the company does not have the *Controlling* flag) dedicated to the valuation of accounting data for job orders, according to job order details.

- **Data Type**, the field is active only in nodes of type *Expression* and has options *Currency* or *Number*: in the first case, the level will display a monetary value with the symbol and corresponding decimals from the company's currency; in the second case, the level will display a generic numerical value rounded to the number of decimals set in the following field.

- **Sing Reversal of Selected Node** allows for reversing negative signs to positive and vice versa: in ***FluentisERP*** reclassifications, any data with a debit balance will be displayed with a positive sign, and credit with a negative sign. Through this flag, therefore, totals can be displayed as positive for levels that by nature have a credit balance (passivity, revenues). Be careful that this setting has a decisive impact on the result of summations and expressions in general. The sign reversal is applied to the level result, not to the details (detail accounts, cdc, cdp, projects) that value it: these will continue to have the balance sign (see below in this document for the sign reversal of specific detail accounts).

- **To Print**: indicates whether the level should be printed or not.

:::tip Note 
The use of this flag clearly depends on how it is managed in visibility within the print reports.
:::

- **Show Details**: enables the possibility to highlight, in comparatives, the internal details of the node (i.e., the list of detail accounts or centers).

- **Currency Management**: the option is valid for nodes of type *Detail account*, indicating to ***FluentisERP*** to value any balances in foreign currency for detail accounts that have the flag *Currency Management* in the chart of accounts (typically all customer/supplier/agent/bank registers). In this case, therefore, in the reclassifications of this model, we could have N rows for each detail account, one for each currency of movement in the half-yearly closure used.

- The **Grouping Nature** allows you to set the types of accounts that can be assigned to this level and is visible only when in a node of type *Detail accounts*: essentially, at the time of inserting the detail account, a filter for account type will be applied already limited to those presenting flags consistent with this setting.

:::tip Examples 
For example, if the nature is ‘Active Patrimonial', it will be possible to insert account types that have this flag in the table: typically assets, customers, and banks. If this setting is modified with already present detail accounts at the level, upon saving the modification, it will be asked whether to delete non-consistent detail accounts.
:::

With the flag **Consider Child c.d.c./c.d.p.** (for models not linked to *Controlling* types), you can insert the cost center X in the level, and ***FluentisERP*** will report in the reclassification all its internal cost centers that have a value. The flag allows avoiding reporting and maintaining all possible detail of the cost centers but only the upper cost center that groups them.

### ACCOUNTS ATTACHMENT GRID 

The **Accounts** grid allows defining the list of accounts and/or detail accounts that will value this level of the model. The insertion of the same account or detail account with the same balance type in the same level is not allowed, whereas it can be inserted at other points in the reclassification without any constraint. The insertion of only the generic account (master) is allowed: the typical case is the generic account that contains the detail accounts of the register, without detailing the list of customers/suppliers in the model, which would create the need for continuous alignment of the various models.

The **balance type** of the single line of account or detail account includes the following possibilities:

**General** (the balance of the detail account will be inserted regardless of its sign; in the case of a generic account, the sum of the balances of the detail accounts belonging to that account will be entered),

**Debit** (the balance of the detail account will be inserted only if it has a debit sign; in the case of a generic account, the sum of the debit balances of the detail accounts belonging to that account will be entered),

**Credit** (the balance of the detail account will be inserted only if it has a credit sign; in the case of a generic account, the sum of the credit balances of the detail accounts belonging to that account will be entered),

**Increment** (for the detail account or account, the value will be calculated as the difference between the half-yearly closure of the reclassification and another reference closure: this type is useful in the case of flow analysis).

The last flag present in the grid is called **Col. rev.**: it means that, on the selected sub-account, the balance sign will be inverted.

:::tip Note 
This can be useful, for example, to deduct from the balance of an account the value of one of its detail accounts: for example, to remove an intercompany customer that has been coded within the standard customer master to manage it in a separate node without duplicating values.
:::

Insertion in this grid can be done using two methods: directly loading in the grid by typing the code or through the account help that allows the selection of a single record, or using the ‘Multiple insertion of detail accounts’ button to have an account help with multi-selection active.

### CORPORATE CENTERS ATTACHMENT GRID

In the cost centers grid, the cost centers that will value the level are loaded. The available fields are as follows:

- **Row Type**: the field is linked to the management of *Cost drivers* in *Controlling* and is therefore in use only in models of types related to managerial accounting of controlling; the possible selection includes:
    - *Source* the analytical lines directly assigned to the center or attributed to the first cycle of drivers
    - *Sold* to other Cost Centers, which will be indicated in the grid
    - *Received* from other Cost Centers, which will be indicated in the grid

- **Account-Detail account-Description**: used to indicate which account (or account-detail account) to filter the analytical or managerial data.

- [**Cost Center**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): the field is optional in models of type related to Controlling, while it is mandatory in other cases. It is the center to be used to filter the data of the analytical or managerial.

- **Column Reversal**: means that, on the selected row, the balance sign will be inverted.

- **Variables**: the field is visible only in models of type related to Controlling, it allows you to define whether to use the 
    - *variable quota* 
    - *fixed quota*
    - *general* (debit or credit), which is the default when not indicated.

**Balance Type**: the balance is always of type *General*, only in models of type related to Controlling we will need to use the balance types 
    - *Opening balance*
    - *Final balance* 
    
for the rows of the detail accounts of initial/final inventories.


### SPECIFICITY OF THE COST CENTER NODE TYPE FOR CONTROLLING MODELS
In models with types related to Controlling, we have specific options available in the Cost Centers nodes. In particular:

- **Percentage Reference**: serves to understand, in comparisons, what is the reference node for calculating a ‘vertical’ percentage in the model.

:::tip Note
For example, we will set it on total revenues to understand how much each cost node contributes, in percentage, to it.
:::

- **Numerator for calculate indices**: in a cost totalization model of the centers, indicates the node that totals the costs to use it as a numerator for calculating the centers' tariffs.

- **Variables**: allows defining whether to use the 
    - *variable quota* 
    - *fixed quota*
    - *general* (debit or credit), which is the default when not indicated.
    
The indication at the node level is applied if not indicated at the individual line level in the grid.

- **Node Index**: not used.

### SPECIFICITY OF THE COST CENTER NODE TYPE FOR PROJECT/JOB ORDER CONSOLIDATION MODELS

- **Numerator for profitability calculation**: indicates the node that totals the project/job order margin.

- **Source Type**: indicates what type of data source will value the node. The following sources are possible:
    - *Accounting*: typically used for the node that totals the direct revenues from job orders, the data comes from accounting into the management.
    - *Manual*: for data coming from extrabudgetary area recordings.
    - *Formula*: for data coming from calculation formulas.
    - *Depreciation*: for data coming from the technical calculation of depreciation in controlling.
    - *Residual appropriations*: for end-of-period adjustments, usually not used.
    - *Reversal at the Rate*: usually not used.
    - *Oddments*: for data coming from the accounting of stocks in controlling.
    - *Materials*: to highlight the consumption of items (materials) in production.
    - *External Workings*: to highlight the costs of external working (from labor account).
    - *Transformation*: to highlight the costs of internal working (from production).
    - *Machine Time*: to show the machine hours used in production.
    - *Manpower Timing*: to show the man hours used in production.
    - *Setup Machine Time*: to show the setup machine hours.
    - *Equipment Man Time*: to show the setup man hours.
    - *Consolidation*: for intercompany consolidation postings, usually not used.