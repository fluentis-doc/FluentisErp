---
title: Search and New Budget
sidebar_position: 4
---

## Search<!-- Ricerca -->

The **Budget** command allows you to search, manage, and print budgets<!-- budget -->: you can create new ones (using the New button in the ribbon bar, or the New Budget command directly in the menu), modify existing ones, or even duplicate a previously entered one. The duplicate function, in particular, will display a management popup where:
-	you can define whether you want to create a **New version** (flag) of the selected budget<!-- budget -->, or create a new budget<!-- budget --> with the assignment of a new number (flag set to false);
-	you must set the **Description** for the copy to be created;
-	you can apply (Flag true) or not (Flag false) the **Variation percentages<!-- Percentuali di variazione -->** assigned to the various accounting detail accounts<!-- sottoconti -->.

The budget<!-- Budget --> search form by default displays only the latest version of each budget<!-- budget --> (with the same *Budget Number<!-- Numero Budget -->*, *Budget Type<!-- Tipo Budget -->*, and *Period Type<!-- Tipo Periodo -->*): by opening the filter section of the form, you can also view previous versions, which remain stored, by activating the **Show all versions<!-- Mostra tutte le versioni -->** flag.


:::note[Note]
The [**Variation percentages<!-- Percentuali di variazione -->**](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages) table, available in the Controlling tables, allows you to define a percentage variation value for the fixed and variable portions of the detail account<!-- sottoconto --> values. Each code can then be assigned to the individual cost/revenue detail account<!-- sottoconto --> within the chart of accounts.
:::

:::tip[Actual]
The following menu commands, for searching and entering a new **Actual Budget<!-- Budget Consuntivo -->**, allow you to create actual analyses to highlight **variance analysis<!-- analisi degli scostamenti -->** compared to the forecast prepared in this form, and thus assess management performance.
:::

## New Budget<!-- Nuovo Budget -->

1. Fill in the mandatory header data such as *Budget Type<!-- Tipo Budget -->*, *Period Type<!-- Tipo periodo -->*, **Description<!-- Descrizione -->**. Modify other data if necessary, such as Date, Year, and the reference dates of the budget<!-- budget --> (**Start Date - End Date<!-- Data Inizio - Data Fine -->**). It is mandatory to set either the year or the date range (in the latter case, Fluentis will fill in the year field from the start date's year).

- **Final<!-- Definitivo -->** flag: makes the budget<!-- budget --> non-editable;
- **Default<!-- Predefinito -->** flag: identifies which budget<!-- budget --> is in use compared to other versions used, for example, only for simulation purposes;
- **Detailed by division<!-- Dettagliato per divisione -->** flag: enables the possibility to associate *sub-budgets<!-- sotto-budget -->* to each specific company division.

2. Fill in the upper grid data by entering the **types of values** that will be used in your Budget<!-- Budget --> (defined below in relation to the *sub-budget<!-- sotto-budget -->* detail data), among those available, from the **Budget object type<!-- Tipo di oggetto di Budget -->** field:
    - Accounting detail accounts<!-- Sottoconti contabili -->
    - Cost / revenue centers<!-- Centri di costo / ricavo -->
    - Reclassification models<!-- Modelli di riclassificazione -->
    - Items<!-- Articoli -->
 
Depending on the data type, the relevant column for setting the data is enabled (in the case of accounting data or reclassification model).
The **Description<!-- Descrizione -->** column, optional, allows you to enter more details about the selected data;

The **Department<!-- Dipartimento -->** column is active only if the budget<!-- budget --> by division definition has been enabled in the header.

3. Manage the lower grids according to the selected data type:

- The grid at the **left** will contain the list with the detail values referring to the selected sub-budget<!-- sotto-budget --> above, so the available fields will depend on the type of sub-budget<!-- sotto-budget --> itself (data type), sharing the *debit<!-- dare -->*, *credit<!-- avere -->*, *fixed amount<!-- fisso -->*, and *variable amount<!-- variabile -->* fields. The percentage allocation of the fixed and variable amounts can be predefined in the chart of accounts, by filling in the *variability<!-- variabilità -->* field at the detail account<!-- sottoconto --> level or at the detail account variability grid for cost center level.

:::note[Example]
If the sub-budget<!-- sotto-budget --> is for detail accounts<!-- sottoconti -->, you will have a list of detail accounts<!-- sottoconti -->; if it is for cost centers<!-- centri di costo -->, you will have the detail account<!-- sottoconto --> and the cost center<!-- centro di costo -->; if it is for revenue centers<!-- centro di ricavo -->, you will have the detail account<!-- sottoconto --> and the revenue center<!-- centro di ricavo -->; if it is for a model, you can select the nodes of the associated model.
:::

Once you start filling in the detail data of a sub-budget<!-- sotto-budget -->, the linked upper row will no longer be editable.

- The grid on the **right** will allow you to allocate data period by period: in the case of manual entry in the left grid, there is currently no automatic allocation or reconciliation check between the right detail section and the left one.

### Automatic sub-budget<!-- sotto-budget --> allocation procedures

Within the budget<!-- budget --> there are some buttons that allow you to automatically allocate the data of the various sub-budgets<!-- sotto-budget -->, retrieving the data from other sections of Fluentis depending on the selected sub-budget<!-- sotto-budget -->.

**BUDGET FOR ACCOUNTING DETAIL ACCOUNTS<!-- BUDGET PER SOTTOCONTI CONTABILI -->**

You can allocate this sub-budget<!-- sotto-budget --> using two buttons: 
-	**Create from ledger records<!-- Crea da registrazioni contabili -->**: displays a popup to filter registration dates, competence, any ledger record<!-- causale contabile --> to exclude (for example, the closing entry for a previous period, to avoid having zero balances), flags to also include balance sheet accounts (the income statement will always be included); apply the variation percentages<!-- percentuali di variazione --> (defined in the 'Variation percentages<!-- Percentuali di variazione -->' table); apply the relative value of the period or (alternatively) use the original economic competences.

:::note[Note]
With these last two options, which are alternatives, Fluentis will allocate the period details (i.e., the grid at the bottom right) by reading the weights assigned to the individual budget<!-- budget --> periods, or by considering the original competence date ranges of the entries (e.g., if cost X has only one competence movement from 01/03 to 31/08, on the right you will find the values from March to August, proportioned to the actual number of days in each month)
:::

- **Create from interim closings<!-- Crea da chiusure infrannuali -->**: displays a popup to filter the interim closing to be used as the data source, applying the same options already seen in the previous case (flag to include balance sheet data, apply variation percentages<!-- percentuali di variazione -->, and apply the relative period values from the period distribution or the original economic competences of the entries).

- **Group detail rows<!-- Raggruppa righe dei dettagli -->**: used when the *Use original economic competences<!-- Usa competenze economiche originali -->* option has been used: in this case, Fluentis will insert a detail row for each economic competence range found, which is convenient for calculation checks but inconvenient for subsequent management of budget<!-- budget --> totals. This button, therefore, allows you to total the values for each detail account<!-- sottoconto -->, grouping the related period data.

**BUDGET FOR COST / REVENUE CENTERS<!-- BUDGET PER CENTRI DI COSTO - RICAVO -->**

For this type, the following buttons are available: (The first two and the last are the same options as in the previous point and do not require further explanation).

-	Create from ledger records<!-- Crea da registrazioni contabili -->

-	Create from interim closings<!-- Crea da chiusure infrannuali -->

-	Create cost centers from accounting accounts<!-- Crea centri di costo dai conti contabili -->: opens a popup to select (multiple selection enabled) the list of *Sub-budget<!-- sotto-budget -->* of type *detail account<!-- Sottoconto -->* to use as data source; the budget<!-- budget --> data of these detail accounts<!-- sottoconti --> are read and the budget<!-- budget --> for cost centers<!-- centri di costo --> is allocated by reading the default settings of the Chart of Accounts (links with centers, etc...) for each detail account<!-- sottoconto -->, recalculating variability if necessary (same reference as the previous type).

-	Create cost centers from management entry history<!-- Crea centri di costo da storico registrazioni gestionali -->: opens a popup (useful only if the controlling module is fully used) to select the *Management entry history<!-- Storico registrazioni gestionali -->* (From year to year and from period to period and the Area) with the possibility to apply (Flag) the variation percentages<!-- percentuali di variazione -->.

-	Group detail rows<!-- Raggruppa righe dei dettagli -->

**BUDGET ON RECLASSIFICATION MODELS<!-- BUDGET SU MODELLI DI RICLASSIFICAZIONE -->**

For this type, the only active button is **Create model values<!-- Crea valori del modello -->**, which opens a popup to select the *sub-budgets<!-- sotto-budget -->* to be used as data sources (the combo box allows multiple selection with Ctrl or Shift keys):

- *Sub-budgets<!-- sotto-budget -->* for *detail accounts<!-- sottoconti -->* will be used to allocate the nodes (rows) of the reclassification model [**set with *detail accounts* type<!-- impostate con tipologia *sottoconti***](/docs/controlling/reclassifications/create-reclassification-model)**]
- *Sub-budgets<!-- sotto-budget -->* for *cost centers<!-- centri di costo -->* will be used to allocate the nodes (rows) of the reclassification model [**set with *cost centers* type<!-- impostate con tipologia *centri di costo***](/docs/controlling/reclassifications/create-reclassification-model)**]