---
title: Search and New Actual Budget
sidebar_position: 5
---

## Search<!-- Ricerca -->

The **Actual budget<!-- Budget consuntivo -->** command allows you to search, manage, and print the processed actual budgets<!-- consuntivi di budget -->, to evaluate the performance and variances between forecast and actual: you can create new ones (with the New button located in the ribbon bar, or with the New Actual Budget<!-- Nuovo Budget consuntivo --> command directly in the menu), or modify existing ones.

By entering a **New actual<!-- Nuovo consuntivo -->**, the form opens to enter the actuals<!-- consuntivi --> for the ***various sub-budgets<!-- dei vari sotto-budget -->***, in order to analyze **the trend of variances<!-- l’andamento degli scostamenti -->**.

## How to obtain a variance analysis on actuals<!-- Come ottenere un'analisi scostamenti a consuntivo -->

1. Using the **Budget** combo box, select the forecast budget<!-- Budget previsionale --> to be actualized (to be analyzed in terms of actual variances<!-- scostamenti a consuntivo -->)
2. Select the **actual<!-- consuntivo -->** data for the variance analysis in the **right<!-- destra -->** section of the form header; these can be:
    - A **mid-year closing<!-- chiusura infrannuale -->** previously processed, to be selected with the appropriate combo box;
    - **Data from Controlling**, that is, *management accounting<!-- contabilità gestionale -->*, by activating the appropriate flag and selecting an **Analysis Area<!-- Area -->** (among those previously configured), a **Dimension<!-- Dimensione -->** of company centers (cost centers<!-- centri di costo -->), and a **range of periods** (Year / month).
3. Save the form header with the parameters from the previous points and proceed by selecting the various *sub-budgets<!-- sotto-budget -->* one by one in the upper grid;
4. Press the **Calculate actual<!-- Calcola consuntivo -->** button, which populates the detail data in the lower grid for each of the sub-budgets<!-- sotto-budget --> selected in the upper grid.
 
In the lower grid, depending on the type of sub-budget<!-- sotto-budget --> populated, you will have columns with the total budget data and total actual<!-- consuntivo --> data (those labeled as ***actual<!-- effettivo -->***), to evaluate the variances.

:::note[Note]
If the mid-year closing<!-- chiusura infrannuale --> (or the controlling periods set) go up to 06/30, for example, the first 6 months of the budget will be automatically totaled and evaluated.

The form does not display the detail of the comparison for the single period, but this is present in the underlying processing (object FSBudgetActualObjectValueByPeriod) and is therefore available for dashboards and customized views.

:::

## Print Budget Analysis<!-- Stampa Analisi Budget -->

The ***Budget Analysis<!-- Analisi Budget -->*** print report represents the same data as the actual budgets<!-- consuntivi di budget --> highlighted in this form. Before execution, filters corresponding to the relevant data are available: Budget Type, Period Type, and by Date / Number for both the forecast and the actual<!-- consuntivo -->.