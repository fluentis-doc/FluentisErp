---
title: Management Tab
sidebar_position: 2
---

It is necessary to indicate to the procedure the accounting year to be considered for the calculation, then to indicate the record/accrual dates that have to be assigned to the records that have to be created as well as the templates to be used for the adjustment and the integration. The option “Single Record” groups into one record all the adjustments and in another record all the integrations.

Once that all these settings are saved, the calculation button is active. The button fills the section below with the list of the suggested adjustments: within these adjustments are indicated: the operation type, references to the original record, the number of the adjustment days and the editable amount and survey detail account.  In case that the set templates include the CC/PC management and the original movement has the related data to be adjusted/integrated, in the section below the data of the related calculation are present.

The next step is to confirm, line by line, that the calculated import is correct and complete. This happens through the flag “controlled”, an operation that activates the possibility to edit and the related control flags, even of the section below related to CC/PC.  Every line with “controlled” status are subjected to the accounting survey that start once the accounting button has been selected. As the details are defined, the user can create many accountings and re-calculate the list to verify that other operations (typically record integrations of the new period with previous accrual) have not be added or create new adjustments for these. In any case, a tab to restore the previous situation is available.

In case that ledger records edits occurred, the button “Verify Calculation” can be useful. This button can re-calculate, line by line, showing possible difference with what already seen in the grid. There is a button to align the differences; it can delete adjustment/integration lines linked to the no-existing accounting movements. (The accounting of lines that refers to no-existing movements is not possible, the user has to go to the mask and to delete them directly)

A last important note has to be reported in case that the adjustments are already accounted: currently there is not a block to the original movement modification (that leads to the adjustment) for the user. The only block is to the not allowed record deletion. So we recommend the user to be extremely careful  during the modification of records already involved in the adjustment operation at the end of the year.

The last detail to be mention is related to the “Automatic Accounts Closures”: in this procedure it is possible to find an option of automatic giro if the adjustment operations at the end of the re-opening accounts records. Through this option, the application detects , at the date of the re-opening, the adjustment reversal and makes the giro of the integrations at the date of the original  record of the adjustment itself.

RIBBON BAR: the ribbon bar represents the form menu, that is the area on which it is possible to perform actions. The possible features list is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save header, it can be activated once that the data are completed. |
| Calculate | Button to calculate. It fills the section below with the list of the suggested adjustments. |
| Check Adjustement Calculation  | Button to re-calculate, line by line. It displays possible differences with what occurs in the grid. |
| Accounting | Button to account the lines, with the “control” flag active. |






