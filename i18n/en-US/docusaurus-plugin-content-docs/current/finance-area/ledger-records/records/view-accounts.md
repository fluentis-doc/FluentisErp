---
title: View Accounts
sidebar_position: 2
---

'View Accounts' mask enables the user to view accounting movements of any account or detail account  of different kinds ( active, passive, costs, profit or register): all the movements of every accounting period are always in line. They can be edited according to the closing of the period, mandatory fiscal reports or account closure operations. It is mandatory to insert an account code or a detail account in the upper part: the following filter fields are not mandatory. They include predefined filter of the current division movements and the definitive records flag.

Data grid enables the user to view movements list (sorted by record date) according to set filters: for instance, if we have filtered for X account 'record date' 01/01/yyyy, in the upper fields of  'Previous Balance'  section, it is possible to see the total debit/credit of the previous records. In the records grid, the 'Progressive'   field displays the updated amount of the same line, then it is updated line by line (IMPORTANT:  this 'progressive' has got a meaning just in case that record date or accrual date are sorted following an ascending order, not in other cases). In the fields at the bottom of the mask we can find 'Sel. Balance' the debit/credit amounts selected in the grid, as 'Current Balance' the debit/credit amount of the grid lines, as 'Total' the debit/credit amount of the previous balance and current balance. Finally,  in the 'Balance' field we can find 'Final Balance', in the debit or credit section (the final balance always corresponds to the progressive one visible in the last line).

Another element that should be considered in the management of the grid is the following: there are two series of visualized detailed accounts, heading detail account ( that is recalled by the holder detail account of the record related to the movement itself) and detail account of detail that is the detail account whose movements are searched. For instance, if we are viewing the movements of a generic account, in the heading detail account we can find the codes of the vendors that sent recorded invoices to that account and in the detail account specific costs.

The possible 'Account View' operations:

- Double click on the viewed line: in this case, if the user has the authorization,  he can edit the record that belongs to the movement.

- 'Edit' button has the same function of the double click described above.

- 'Initial Doc.' button, if active, can open the visualization modality (if the user has the authorization) of the purchasing or selling invoice that, together with the accounting activities has created the selected accounting movement.

- Select 'Details' button (active only in case that one line is selected) to view all ledger record movements within a separated grid. As soon as the pointer will be moved towards an upper record, the grid will be disabled.

Accounts view procedure includes:

RIBBON BAR: the ribbon bar represents the form menu, that is the area on which the user can operate. The list of the possible features list is the following:



| Function | Meaning |
| --- | --- |
| View Accounts | Button to view the ledger records previously inserted. |
| Edit | Button to edit a new ledger record previously inserted. |
| Original Document | Button to recall the original document from which the ledger record starts. |
| Details | Let the user view, within the result grid, the details of the selected ledger record. |

FILTER AREA: the Filter Area contains the list of necessary data types thanks to which it is possible to perform a selection. Typically, filters have always 'AND' condition and it is possible to specify more filter criteria at the same time.

RESULT GRID: Result Grid represents the list of records which correspond to the filter data above mentioned. After having set search filters,  the user, by clicking on [Search] button on the related Ribbon, will obtain the list of the desired records.






