---
title: Adjusting Entry
sidebar_position: 14
---

Within the mid-year closures module it is possible to select the 'Integration Entry' procedure. The mask enables the user to manage apart the integration operations that can be performed as regards the creation of a new mid-year closure.

In order to manage the procedure it is necessary to set: reference closure, reference accrual start date, calendar type (it is recommended to use the solar calendar) and template to be used (that has to have CC/PC flags in order to manage the integration of cost/profit centres).

Starting from the 'Accrual Start Date for Ledger Integration' and through this procedure the system will verify the cost/revenue lines that are in accounting and not inserted into the closure (that refers to records out of the record/accrual date range and set at the moment of retrieve by accounting), in order to create accruals of days within the economic accrual date range. The accrual detail accounts to be used will correspond to those inserted into the chart of accounts in correspondence to the single cost/revenue detail account or to the generic detail account inserted into accounting parameters of the same mid-year closure year. There is also a restore/cancellation button of movements already recorded by this procedure.

This procedure is particular important as regards the start date to be set, because usually it will be set as the same one of last accounts opening date on accounting. For example: if the user is creating the closure of the first quarter of accounting period, the dates range for the economic section will be typically 01/01/year - 03/31/year and if there is the accounts opening of the previous accounting period this means that within this range there will be directly the giro account to cost/revenue of accrued in balance sheet 'year-1' and so the start date for integrations will have to be set as 01/01/year in order to be sure that the software verifies if after 03/31 there are lines with accrual in the previous quarter. If there is not the opening, on the contrary, it will be necessary to set the start date as 01/01/year-1 in order to make sure that the Management Software verifies if in the previous accounting period there are costs/revenues which correspond to the initial quarter of this accounting period. If the user has already measured the period accrued manually in accounting on 12/31/year-1, but there was no closure/reopening, the integration entry could cause a double survey of accrual accrued income. 

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions, linked to the procedure in use. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Make Records | It performs the off-balance survey of integration entry for the selected closure |
| Delete Records | It deletes the off-balance integration records for the selected closure |






