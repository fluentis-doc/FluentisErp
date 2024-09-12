---
title: Payments Tab
sidebar_position: 4
---

 “Payments” tab is available only if the template has the “Closing mat. Value” flag active.

The “Payment” Tab enables the user to view the opening maturity values in order to go through payments/collections or compensations: typically, all VAT records have the opening maturity value flag and they can even have  (the credit note normally have) closing/maturity value compensation flag; templates of payment/collection always include the maturity value closure without compensation flag, they can possibly have the flag of maturity value opening to manage the advance payment cases.

First it is necessary to explain the situation of the maturity value payments and compensations: the compensation, according to accounting terminology, can be the maturity value compensation (debit/credit) of the same detail account (for instance the invoice with the attached credit note) but even the compensation of customer/vendor (for instance the compensation of the debit towards vendor's detail account with the credit of the customer's detail account that refers to the same register). However, in the application logic, the compensation is strictly linked to the situation of the maturity values of the same detail account. It can be managed through credit/debit maturity values payments that compensate in the accounting).

If in the upper part of the record a “holder” detail account is reported as the search filter in the related initial fields of the payment tab: so, for all VAT records, the application suggests the maturity values of the customer/vendor inserted in the upper part, then compensates the invoice/credit note; in case of payment/collection records, the field is normally empty and the user has to fill the filter according to the  various needs. The field of the detail account “Bank" is particularly important: it is not a filter but it is filled with the payment detail account inserted in the customer/vendor register, holder of the record. Here it is updated and it updates the ledger record in the field that includes the amount type “Tot.Doc./record” (if the accounting parameters, in the list of customers/vendors account list, allow the substitution).

Once that the maturity value (or maturity values) to be paid is found in the first grid, it is possible to select it and to pay it through: this can be performed through a double click in the single line or by using the button “create payments”. In case that the template includes the maturity value compensation, the button “maturity value compensation” is active (the double click has the same function). The last button that can be used in this section is “create extended payments”: an intermediate mask of  payment amount settings with a possible allowance amount and related detail account for the accounting survey (detail: in this mask there is the only point in which it is possible to set the status “forced closed” to a maturity value: the use of this status is not suggested); a similar result can be get by forcing the amount of payment that the ERP reports for every maturity values in the section below, related to the payments. It is not possible to force a payment with an amount superior than the maturity value residue.

In the payment list can be entered the related notes: these notes can be automatically linked, in the template, with the generic description of the ledger record (“Description in Journal and payments” flag).

Finally: a record payment printout (Receipt) is available. Secondly, the payment is managed according to template settings, to the maturity value Historical Exchange rates (in this way, there are no exchange differences in the automatic exchange that has to be manually managed in the accounting: the option makes the management of opening maturity value and ledger balance correspondence easier) or the corresponding euro amount is calculated according to the exchange rates of the record date (in this case, if it is correctly set in the template and in the currencies, the procedure automatically assigns values to the profit/loss detail accounts, currency exchange for currency).

Finally, if only one of the two grids is visible through the use of the “Expand/collapse” button, totalization fields of the selected amounts could be visible: on the base of the inserted payments and of the template settings, the application updates the line with the amount type “Tot.Doc./record” with the total amount of the surveyed payment, while it inserts a line for every payment or it groups debit/credit payments, currency by currency, of every detail account paid/collected.

RIBBON BAR: the ribbon bar represents Form menu, that is the area on which it is possible to perform actions. The possible features list is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the record. |
| New Record | Button to create a new record. |
| Insertion Parameters | It refers to the insertion parameters of the first note. |
| Open Register | Button to recall the register management of the selected detail account or the search of another register . |
| Search Maturity Values | Button to search the maturity values to be paid/collected. |
| Delete Payments | Button to delete the payments previously selected. |
| Create Payments | Button to create the payment of the selected maturity value. |
| Compensation | Button to start the maturity value compensation if it is provided in the Ledger Template. |
| Create Extended Payments | Button to manage the payment/collection with possible allowance amount and related accounting survey detail account. |
| Expand/Collapse | Button to shrink the visualization just to maturity values or payment part and the other way around, that is expand the visualization to both elements. |
| Print | Button to print the selected payment/collection. |



| Function | Meaning |
| --- | --- |
| Document Manager | Button to link to the document management. |






