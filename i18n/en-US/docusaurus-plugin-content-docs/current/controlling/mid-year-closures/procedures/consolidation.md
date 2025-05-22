---
title: Consolidation 
sidebar_position: 1
---

The procedure primarily allows you to link the mid-year closures of various companies present in the database to create a **consolidated group balance sheet** to print or evaluate in a reclassified balance sheet. It will also create a consolidation record in which **the intercompany economic movements**, as well as intercompany receivables and payables, will be eliminated.

In the header of the form, it is possible to filter the date range of closures to consider, but also to optionally set the parent company of interest: in this way, the grid of the form will display the companies that have not set a parent company or those that fall under the selected parent company; for each company, the last account closure created within the set filter range will be displayed (It is possible to select a mid-year closing different from the last proposed one). The flag ‘Sel.' will identify which ones to execute the consolidation operation on, while in the 'Exchange' column, it is possible to set a specific exchange rate to use for converting balances from companies with a currency different from that of the parent company.

Below the grid, some parameters will be entered for use: the description to be attributed to the consolidation, a registration template, the user of the operation (already proposed as the active user), and finally a flag for the conversion of detail account codes to those of the parent company.

Within the company table, line by line, it is possible to associate a register: from this register, the customer/supplier detail accounts of the group will be identified (e.g., in company X, it will be checked if the register linked to company Y is coded as a customer and/or supplier). From the records related to these detail accounts valued in the selected closures, costs/revenues will be entered with an inverse sign in the new registration; for the same detail accounts, the open items will be verified at the time of consolidation, and their balances will also be offset.

:::tip Note
In the chart of accounts of companies that have a parent company in the table, fields are visible to assign the account/detail account codes of the parent company.
:::

## Procedure

:::important[]
Step-by-step activation and execution procedure (let's assume two companies)

- In the table [**company**](/docs/configurations/tables/general-settings/company) of each of the companies in question, fill in the ***Associated Register*** field to link a Contact that distinguishes the company itself in the consolidation; for example, if the company is called Alfa, we link a contact (previously created) in its company table that is named, for example, "Alfa Spa".
- In the chart of accounts of each company, a detail account (through the **accounting data management** of the register) of type customer or supplier of the other company in the group will have been created, and some cross-exchanges will have been recorded, for example, a purchase by company 1 and a sale by company 2 (each from its own perspective).
- Each company runs a mid-year account closure for the same period.
- In the *Consolidation* procedure, I will select the two closures from the two companies for which to generate the adjustment records for consolidation that will neutralize costs and revenues and mutual receivables and payables while aggregating the movements towards the outside.
:::

## Previous

From the previous tab, it is possible to delete the executed consolidation procedures.