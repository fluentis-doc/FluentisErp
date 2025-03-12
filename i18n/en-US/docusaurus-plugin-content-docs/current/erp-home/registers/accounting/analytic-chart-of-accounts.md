---
title: Chart of Accounts (Piano dei conti)
sidebar_position: 1
---
:::tip[Fast Start (FAst Start)]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, please refer to the checklist on the linked page.
:::

### RIBBON BAR:
:::note Ribbon Bar Buttons (Bottoni della Ribbon Bar)

| Function (Funzione) | Meaning (Significato) |
| --- | --- |
| Search (Ricerca) | Executes the search for accounts/subaccounts within the selected group. |
| New Account (Nuovo conto) | Sets the cursor to insert a new subaccount within the detail grid. |
| Move Accounts (Spostamento conti) | Opens a dialog to move an account from one group to another. |
| Open Registries (Apri anagrafiche) | Opens the registry associated with the selected customer/supplier/bank/agent subaccount. |
| New Grouping (Nuovo raggruppamento) | Inserts a new 'root' group into the structure of the chart of accounts, regardless of the selected group. |
| New Group (Nuovo gruppo) | Inserts a group within the selected one. It is not possible to insert groups inside one that already has associated accounts/subaccounts. |
| Delete Account (Cancella conto) | Deletes the selected account. You can also select it and press the DELETE key on the keyboard to delete it. A subaccount cannot be deleted if it has been used in the system. (In this case, set an end date of validity to make it invisible to the user.) |
| Delete Group (Cancella gruppo) | Deletes the selected group. |
| Expand Tree (Esplodi l'albero) | Expands the underlying tree of the selected group. |
| Collapse Tree (Implodi l'albero) | Collapses the underlying tree of the selected group. |
| New Cost Center (Nuovo CdC) | Sets the cursor to insert a new cost center for the selected subaccount. |
| Delete Cost Center (Cancella C.d.C.) | Deletes the selected cost center. |
| New Profit Center (Nuovo CdP) | Sets the cursor to insert a new profit center for the selected subaccount. |
| Delete Profit Center (Cancella C.d.P.) | Deletes the selected profit center. |
| New Automatic Subaccount (Nuova automatica conti) | Sets the cursor to insert a new automatic subaccount for the selected subaccount. |
| Delete Automatic Subaccount (Cancella automatica conti) | Deletes the selected automatic subaccount. |

:::

---

### Connection with Other Tables (Collegamento con altre tabelle)
The coding of the chart of accounts involves the completion of a series of tables:  [Account Types (Tipi conto)](/docs/configurations/tables/finance/account-types),  [Contact Registries (Anagrafiche contatti)](/docs/erp-home/registers/contacts/registers-management), [Expense Item (Voce di spesa)](/docs/configurations/tables/finance/charge-item), Budget Period Types, Cost Centers, Profit Centers, Divisions, Adjustment/Integration Journal Entries, Entries from Budget Diff.,  [Automatic Reasons (Causali automatiche)](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates), Amount Types.

### Inserting the Structure of the Chart of Accounts (Inserimento della struttura del piano dei conti)

The coding of the chart of accounts starts with the insertion of the list of groups in the upper section of the mask:

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image01.png)

Through the grouping/group insertion buttons, you can enter new first-level or lower levels than the selected one, assigning each a unique alphanumeric code, a description, and an account type.

**New Grouping**: only acts to insert a new **level zero** (a group without parent groups above it).

**New group**: acts to insert a child group of the selected group. 

**Structure**: automatically filled by the system to represent a concatenation of the codes of the groups and groupings in which the row is contained;

**Alternative Description (Descr. alternativa)**: allows you to assign an additional description that can be referenced, for example, in the balance printout (customizing it with specific tools). A language translation of the account description could be inserted here.

**Group type**: accommodates the account type of the group. The combo box is linked to the Account Type table. It is recommended to fill out the account type also for groups and groupings just as it is done when inserting the detail subaccounts described below.

### Inserting the Detail of the Chart of Accounts (Inserimento del dettaglio del piano dei conti)

Once the lowest level group has been selected, the grid below will activate with the list of accounts and subaccounts inserted within it.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image03.png)

This **lower grid is populated by directly entering data** into the rows. The last available row for entering new input is always marked with an asterisk symbol in the blue area on the far left.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image04.png)

**WARNING: the structure of the chart of accounts requires that at least one account ("master") be entered without a subaccount for each lowest level group for which we are inserting detail, which serves as the last detail grouping of operational subaccounts. It is reminded that only accounts with subaccounts can be used in accounting entries.**

It is advisable to follow a progressive numeric criterion with uniform characters (e.g., all accounts with 4 characters, all subaccounts with 3).

WARNING: during the insertion of detail subaccounts, an increment counter automatically increments the subaccount by one compared to the last entered for that group; it is discouraged to leave "gaps" in the numbering because these will not be recovered automatically in any case.

Proceed in order by entering the **account type**, then the **account** (without a subaccount if you intend to create a new "master") and then the **subaccount** (if the subaccount is being entered for the first time for that group, manually enter the number also defining the number of characters, e.g., 1 or 01 or 001; in the next entry, the number will be automatically incremented).

**Insertion Date (Data di inserimento)**: is the date of creation of the account/subaccount;

**Date of last change**: is the date of the last modification of the account/subaccount code, automatically updated by the system;

**Opening mat. val.**: a flag that indicates, for accounts linked to customer and supplier registries, whether the opening positions are managed for that account. The flag is picked up, and must be managed, within the registry. It is possible to activate the flag from here for accounts NOT in the registry (costs, revenues, etc.) in order to open positions concurrently with the accounting entry (rare). In this case, the accounting reason used must have the parameter for opening positions active. In this case, the active flag on the account allows, in particular, to operate the control of alignment between the accounting movement and the open position. In any case, the opening of positions on non-registry accounts must be done manually and cannot happen automatically.

**Payment Type/Solution (Tipo / Soluzione di pagamento)**: in conjunction with the previous opening positions flag, in cases where it is used on accounts NOT in the registry (e.g., costs, revenues, assets, etc.), it allows specifying the payment conditions to be used when opening the position.

**Management of Company Cost Centers (Gestione c. aziendali)**: by activating this flag, it will be possible to manage cost centers even on asset accounts (rare); for example, increases for internal work in economies, etc.

**Currency management**: Flag that enables the account for:
- Management in the currency adjustment procedure (Administration > Accounting records > Procedures > Currency adjustment)
- Management of the amount in currency during the opening and reopening of accounts

:::danger[Attention (Attenzione)]
The flag is automatically enabled during the insertion of a new registry and association with the account type for creating the new subaccount in the chart of accounts. It is recommended not to disable it (if a foreign currency is associated in the registry) otherwise the account closure will lose, for that account, the management of the value in currency even if in the closure parameters this currency management is generally enabled. Thus, the ability to disable it is reserved for a specific management of a certain account that, although valued in currency, must then be closed by recalculating everything in euros, without provision for exchange differences.
:::

**End of Validity Date (Data di fine validità)**: serves **to block the use of the subaccount in new registrations** (starting from the entered date), maintaining visibility of previously entered movements;

**Second description**: see Alternative Description above (Descr. alternativa);

**Accruals/Deferrals – Active/Passive – Account/Subaccount/Description (Ratei / Risconti - attivi / passivi - Conto / Sottoconto / Descrizione)**: Fields that allow you to insert, respectively for active and passive accruals and deferrals, a specific subaccount on which they will be accounted, with priority over the generic subaccounts for active and passive accruals and deferrals inserted in the [accounting parameters](/docs/configurations/parameters/finance/accounting-parameters), the adjustments and integration entries related to the cost or revenue subaccount being filled in. It is reminded that for the automatic management of accruals and deferrals, the cost or revenue account subject to adjustments must have a specific account type (e.g., "to adjust") with the service flag active in the [Account Type](/docs/configurations/tables/finance/account-types) table.

**Non Deductible Account/Subaccount/Description (Conto / sottoconto / descrizione Non Deducibile)**: Mainly managed for non-Italian locations where there is a need to account for the non-deductible VAT quota in a separate account.

**Non-deductible percercent**: Mainly managed for non-Italian locations where there is a need to account for the non-deductible VAT quota in a separate account. Field connected to the use of the previous one. It allows the definition of the VAT non-deductibility percentage directly on the accounting account rather than on the VAT code used.

**Expense Items/Description (Voci di spesa / Descrizione)**: combo box linked to the **[Expense Items](/docs/configurations/tables/finance/charge-item)** table; allows the connection to a statistical data useful in management control.

**Variability**: this field, connected to the grids located on the right side of the form, *Cost Center Attribution (Attribuzione Cdc)* and *Cost Center Variability (Variabilità Cdc)* (necessary for the insertion of links between accounting subaccounts and company centers for the purpose of automatically distributing accounting movements across the centers) is **particularly moved when the accounting movement is linked to more than one company center**. Just as the eponymous field present in the Variability Cdc grid accommodates a percentage value that **defines whether the cost is fixed (variability 0%) or a cost** that is completely **variable (variability 100%) or partially variable (e.g., 70%). Please see the image below for correct completion.

NOTE: Do not confuse with the Percentage field (present in the Cost Center Attribution grid) which is used to indicate the percentage of the accounting movement to allocate to that center (e.g. a cost shared between two centers at 50% or 70% and 30%).

The **Variability** field present in the main grid under discussion takes priority over the one present in the *Cost Center Variability* grid. For this reason, if only the field in the main grid is populated, that data will be used for both (or all) the Centers associated with the selected account.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image05.png)

**Do not use in controlling**: the flag, used only if advanced controlling functions are enabled in the company table, allows to exclude (if activated) the accounting movements present for the selected account from the specific controlling processing (such as reversals based on cost drivers, formulas, and specific technical amortizations for controlling). In this way, it will be possible to operate manually through the specific functions of the controlling module.

Example: if you wish to use the specific amortizations defined within the functions of controlling itself instead of starting from the accounting data. Another example: you may want to manually record the cost of the board of auditors by budgeting it manually using the controlling functions to manage budgets and actuals instead of waiting for the recording of the related cost in accounting (typically after the fact and thus not in time).

Note: the accounting movement will still be included in interim account closures (Controlling > Interim Closures).

The **methodology** described above necessitates periodically carrying out **settlements** to square the accounting movements (which flow into the financial statements) with the movements of managerial accounting (specific to controlling). Such settlements will be represented in the specific controlling reporting through adjustments (with positive or negative signs depending on the cases) specific and distinctly indicated that reconcile the totals of financial statements with the totals of managerial accounting (which are the result of movements manually managed, or nonetheless not starting from the accounting data).

The next two fields are functional to this maneuver:

**Balancing timing**: the combo box allows you to choose whether the aforementioned settlement will occur annually, or periodically, or is disabled (choosing none).

**Balancing Types (Tipi di bilanciamento)**: the combo box allows you to choose between two different settlement methodologies:

   - **Readjust managerial**: starts from the accounting movement and reallocates it (by inserting adjustments) using the logic of analytical accounting (that is, attribution to business centers) to manage the difference;

   - **Analitic differences**: starts from managerial accounting (controlling) and realigns it to the accounting data by inserting adjustments with positive or negative signs.

**Variation Percentages/Description (Percentuali di variazione / descrizione)**: the combo box, linked to the [Variation Percentages](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages) table, allows defining percentage values (predefined and categorized within the connected table) to be applied in various managerial accounting processes, such as the preliminary budget from the previous year's actuals, applying increments or decrements.

**Period Distribution/Description (Distribuzione periodi / Descrizione)**: the combo box, linked to the [Period Distribution](/docs/configurations/tables/controlling/managerial-accounting/periods-distribution) table, allows assigning each subaccount a specific distribution logic of the accounting movement over the individual periods during the processing of interim closures.

**Adjustment Groups/Description (Gruppi di conguaglio / Descrizione)**: the combo box is linked to the [Adjustment Groups](/docs/configurations/tables/controlling/analytical-accounting/adjustments-groups) table, within which it is possible to encode groupings of accounts useful for managing specific reporting for controlling. The field has no other operational value and does not generate further automation.

**Extended Description 1/2/3 (Descrizione estesa 1 / 2 / 3)**: additional fields to accommodate alternative descriptions (e.g., in another language). They can be, for instance, subsequently included in the balance printout through customization of it.

**Business Crisis (Crisi d'impresa):** see the specific page related to this functionality. This is the specific module, integrated within Fluentis, for managing the indices to be calculated to comply with regulations on preventing corporate crises. These indices are managed through the CPM module of Fluentis (which allows, more generally, the calculation of performance indicators).

Since the indicators for corporate crises make some considerations and calculations regarding specific accounts or subaccounts, during the configuration of the module for its use, it is necessary to link the appropriate accounts to the various specific categories provided by the combo box, referring to the specific theoretical documentation of this regulation.

### INSERTING THE LINK BETWEEN SUBACCOUNTS - COMPANY CENTERS

The connection is simply made by selecting the reference subaccount and entering the list of cost centers/profit centers in the two specific grids: it is possible to link the valuation on different business divisions, but normally the division is not filled in. There is no check that the sum of the entered percentages equals 100%.

NOTE: Activating the advanced functions for controlling in the [company table](/docs/configurations/tables/general-settings/company) will operate according to the new logic where the use of profit centers is no longer relevant but company centers (in their designation as Business Centers) are used on which negative or positive components will be assigned to then carry out advanced processing such as reversals and comparisons to determine margins, etc.

For this reason, the **Profit Centers** grid (kept to utilize the standard logics) has been moved to the **Other** tab (related to the Cost Center Attribution grid).

It should also be noted that there are additional coding points for Cost/Profit Centers: customer/supplier/agent registries, item registries, warehouses, assets. The priority of valuation is typically defined in the management parameters of the individual module.

### Cost Center Attribution Grid (Griglia Attribuzione CDC)

**N**: Row progressive

**Cdc/Description (Cdc / Descrizione)**: combo box linked to the **Business Centers** table, necessary to recall the desired center;

**Percentage%**: enter here the percentage of allocation of the accounting movement to the center entered in the row. For example, entering the value 100 will allocate the accounting movement 100% to this center, entering 50 will allocate it 50%, and thus the remainder will be allocated (if applicable) to other centers entered in the following rows.

**Division/Description (Divisione / Descrizione)**: the link can be entered while differentiating for each division if necessary.

**Starting validity date**: indicates the date from which the automatic allocation of the movement to the center is active.

**Expiration Date**: indicates the end validity date from which the automatic allocation of the movement to the center will no longer be effective.

**Dimension/Description (Dimensione / Descrizione)**: combo box necessary to assign the corresponding analysis dimension to the business center being inserted (this concept is only introduced and available by activating the advanced functions for controlling from the company table).

**Cost Center Category/Description (Categoria centro di costo / Descrizione)**: the combo box, linked to the **Cost Center Categories** table, allows associating each **Dimension** of controlling analysis with a category that, in turn, is connected to different business centers (as the category is a mandatory field in the coding of each business center). In this way, during the insertion of the accounting movement, it allows the operator the selection of a series of predefined business centers. This can be done alternatively to a rigid definition of the center associated with the account (possible by activating the "Account/Center Constraint" parameter within the dimension).

### Automatic Subaccounts Grid (Griglia Sottoconti automatici)

In this grid, you can enter, for each subaccount that will be referenced in an accounting entry inserted via an accounting reason with a second automatic reason attached, a specific subaccount to be used in relation to the writing of the second automatic reason.

In this way, it is possible to "dynamically" alter the subaccounts used by the second reason, depending on the subaccount that is replaced with the generic account (typically inserted in the template of the main reason) at the moment of the accounting entry creation thanks to the program automations.

It is necessary to insert, in addition to the subaccount code, the amount type and the section debit or credit (see documentation related to managing accounting reasons).

:::note Note

In particular, the logic of operation provides:

- that the subaccount is used in the VAT section of the registration;

- that the registration is based on a reason that provides for an automatic reason;

- under these conditions, the ERP will add, in the automatic registration, the automatic subaccounts that are linked to the subaccounts;

- the valuation of these subaccounts will use the amount type from the 'automatic subaccounts' section but applied to the original VAT line.
:::


**An example of use could be the registration of subaccounts for which they need to be valued in debit/credit order accounts.**

---

### Extra Data: 
please refer to the documentation related to [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

---

### VIDEO TUTORIALS

:::important See Also (Vedi Anche)
[**VIDEO TUTORIALS ON THE CHART OF ACCOUNTS**](/docs/video/finance/intro.md)
:::