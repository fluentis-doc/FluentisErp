---
title: Maxicanone Accrual Calculation (Calcolo Risconto Maxicanone)
sidebar_position: 1
---

From this form, it is possible to search for already calculated accruals and proceed with the calculation of new annual accruals regarding the maxicanone.

The procedure, similar to the procedures for adjustments in the Accounting module, requires **first** to execute the **calculation** of the accrual from this position, and **then** to proceed with its **accounting** through the appropriate accounting procedure of the module.

Pressing the new button initializes the parameter input form for the calculation.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image01.png)

It is necessary to specify the **Year**, the **Template** to be used for the adjustment entry, the **Date**, and the accounting competence date that will be inserted into the entry.

Despite the entry of the reason, the accounting entry schema will be guided by the logic of the procedure.

After saving, it is possible to press Calculate to obtain the proposal of the values that can be confirmed by checking (check everything to confirm the accruals related to the various existing leases) to then proceed to account for them.

The values proposed by the calculation are editable and can be adjusted if necessary, for example, in the number of calculated competence days or in the resulting values.

![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image02.png)

**Leasing type**, **Contract Date (Data di stipula)**, **Lease Number (Numero Leasing)**, **Description**, and **Expiration Date (Data di estinzione)** are retrieved.

**Total days**: = difference in days between **Contract date** and **Expiration date**.

**Daily cost**: = Total contract value / Total days: (where Total contract value = Maxicanone + Administrative and processing fees + Sum of (Capital quota + Interest quota + Fees for each individual installment)).

**Accrual days**: = number of days between (the most recent of the contract date and the start of the fiscal year) and the registration date set for the maxicanone accrual.

**Accrual cost**: = Daily Cost * Competence Days.

**Accounting Paid (Pagato contab.)**: calculation of how much has been paid in the fiscal year from an accounting perspective (accounted installments + Maxicanone if accounted) 

= Sum of the accounted Maxicanone and installments (capital quota + interest quota + fees) with the Accounting flag active (due to accounting operation or set manually) and the expected due date for the installment, indicated on the detail line of the leasing amortization schedule, being earlier than the registration date of the maxicanone accrual.

It is also verified that the year contained in the dates of the installments and the leasing header (contract date) are compatible, regarding the accounting date of the accrual, with the presence of accounting parameters for the year in question.

**Previous accrual year**: this field displays the value of the Accrual Value field related to the previous year, and therefore the first year in which the leasing contract is loaded into the system will result in zero.

**Accrual value**: in this field, the accrual value to be applied is calculated:

= Accounting Paid + Previous Year Accrual - Competence Cost

**Controlled**: check the flag next to the row to enable the possibility of accounting for the accrual as the automatic calculation is approved or after manually editing the fields.

It is possible to check the box for Check All (above the grid) to mass approve all proposed accruals.

**Accounted**: the flag is activated following the launch of the accounting of the proposed and approved accrual. References to the generated accounting entry are inserted.

The accounting procedure can be executed from this form through the buttons on the ribbon bar or, alternatively, using the procedure accessible from the menu of accounting procedures in the module.

From this position, it is also possible to restore the accounting procedure.

The calculated and accounted Maxicanone accrual as described above can also be managed automatically during the automatic account reopening phase (which can be activated from the **[Automatic Account Closure](/docs/finance-area/ledger-records/records/automatic-account-closing/new-account-closing)**) by activating the flag Journal Entry for adjusting entries.

In this case, the usual reopening entries for maxicanone accruals will be automatically executed, appending them to the other automatic entries for opening balances and journal entries of other accrued and deferred items.
 
![](/img/it-it/finance-area/leasing/procedures/maxifee-accrual-calculation/image03.png)