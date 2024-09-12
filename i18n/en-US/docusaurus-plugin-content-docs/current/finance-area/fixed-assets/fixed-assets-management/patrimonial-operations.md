---
title: Patrimonial Operations
sidebar_position: 2
---

Once having saved header data it will be possible to activate the following tabulators: within the 'Patrimonial Operations' tab there are details of different operations to fixed asset journal. The first line will be related to the initial purchase of fixed asset: operation date, its progressive number and the following amount inserted into the related column (possibly, if there is the quantity management, also the fixed assets quantity related to this total value). On the right of the grid there are customer/vendor detail account field and other references of the operation. In case of a load of an historic fixed asset, the amount of depreciation funds, already calculated, has not to be inserted directly on this section but  it has to be reported on section below with 'accounted' status in order to be recalculated by the ERP.

The central grid shows the list of depreciations calculated for fixed asset: the insertion can be manual or automatic. The manual insertion provides for the indication of reference year, reference progressive line number (but always for not incremental categories, for the others the field is hided because the depreciation will be always linked to the progressive number 1), depreciation type to be applied: at this point, the ERP will consider settings of reference fixed asset category with account and detail account percentage of application and amounts, values that can be force and edit independently. At the end of the grid there is the reference depreciation date, proposed as end date of accounting period and lastly, the amounts of the deductible or not deductible amount of the depreciation. The automatic insertion provides for the definition of the reference year in the upper field of the grid and the use of management button as 'Execute Automatic Depreciation' that will report data of depreciations provided for in the category for all the fixed asset in use.

The depreciation calculation will be reported on 'Already Depreciated' column of the upper grid to indicate a not definitive amount: only thanks to the indication of 'accounted' flag in the various lines the upper amounts will be attributed to the fund column related to the same depreciation typology. The manual insertion of flag DOES NOT perform a ledger record (for which there is the procedure regarding depreciations accounting). Usually it is necessary to use it for the manual initial load of the historic situation, for which the user performs the insertion of the total amount amortized corresponding to the previous year compared to the year previous than the start use of the ERP and not about all the depreciation detail.

During the saving of line with 'accounted' flag, the ERP will ask the user to connect a ledger record, that already exists, message that has usually a negative answer (in case of historical data retrieve). The fiscal depreciation flag provides for the fiscal management of depreciation line: it is proposed according to the same flag of the fixed asset category. In some cases it can be used manually in order to detect the anticipated depreciations used on the ordinary balance sheet as regards fiscal depreciations to be managed only for tax calculation. On the contrary, the fiscal management can be obtained through the valorization of fields with deductible/not deductible amounts of depreciation, valorized automatically according to the deductibility percentage associated to the fixed asset or to its category.

In the last section there is the valorization detail to cost centre/sales job orders of depreciations selected in the second grid.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the fixed asset in management. The list of features is the following:



| Function | Meaning |
| --- | --- |
| New Operation | It activates the cursor in the first grid of patrimonial operations. |
| Delete Operation | It deletes the selected operation on the patrimonial operation grid. |
| New Depreciation | It activates the cursor on the second depreciations grid. |
| Delete Depreciation | It deletes the selected depreciation on the depreciations grid. |
| Execute Automatic Depreciation | It calculates the fixed asset depreciation in use for the year set on field immediately above the depreciations grid. |
| Insert C.C. | It activates the cursor on cost centre grid. |
| Delete C.C. | It deletes the movement of the selected cost centre on grid. |
| Calculate Cost Centres | It performs the calculation of cost centres for value of the selected depreciation line. |
| Insert Job Orders | It activates the cursor on job orders grid. |
| Delete Job Orders | It deletes the job order calculation selected on grid. |
| Calculate Job Orders | It performs the job order calculation for value of the selected depreciation line. |
| Revaluation Details | It opens the revaluation details management. The button is active only if 'revaluations' flag is set for the fixed asset category in use. See application a. |
| Documents | Management of document storage associated to the mask in use. |

Applications:


 1. Revaluation Details: on revaluation details mask it is possible to insert any details of revaluation values (amount origin and revaluation amount, fund and amount of the revalued fund) of fixed asset in use, with particular reference to the revaluation type established on table.






