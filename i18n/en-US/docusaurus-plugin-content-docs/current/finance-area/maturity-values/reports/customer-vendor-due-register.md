---
title: Customer / Vendor Due Register
sidebar_position: 1
---

From this form, it is possible to define all preliminary parameters and launch the printing of the customer/supplier due register.

The form is the same as that used for launching other prints based on the processing of open mat. values; however, some fields may not be used or relevant to the specific print in question.

At the top of the form, there are several filters on the source data:

**![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image01.png)**

**Account:** main filter on the customer/supplier detail accounts. If no data is entered, the due register will be processed for all customer and supplier accounts. It is possible to enter only the master account (without detail account) to obtain only customers (or only Italian customers, for example) or only suppliers.

**From / To Due Date:** filter on the due date stored within the mat.value (processed at the opening stage according to payment terms unless manually changed).

**Mat.value Status:** the filter is defaulted to the Open status (which also includes Overdue and Partially Open), it can be modified (to include Closed or Overdue or Partially Open mat. values, etc., in order to extract only a specific type) or left empty to include all mat. values.

**Mat. value Position:** the combo box filter is linked to the mat. value position table (used to assign freely codifiable categories to mat. values).

**Payment Type:** filter on the payment type stored within the mat.value (processed at the opening stage according to payment terms unless manually changed).

**Doc Code:** filter on the code of the document type associated with the mat.value at the opening stage (e.g., Invoice, credit note, fiscal receipt, etc.).

**Currency:** filter on the currency in which the mat.values are denominated (the equivalents in Euro will also be shown in the print).

**Agent:** filter on the agent linked to the mat.value (only on the customer side).

**Bank:** filter on the channeling bank linked to the mat.value at the opening stage (Payment detail account field within the mat.value).

**Project:** (formerly job): filter on the project (job) linked to the mat.value.

**From / To mat. value year; From / To mat. value number:** filter on the year and number of the mat.value (these fields are also present within the mat.values).

**Department:** filter on the division (operational if multiple divisions are present in the database).

### Display Parameters

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image02.png)

**Maturity values open at:** this field, defaulted to today's date when the mask opens, can be modified to obtain the situation of open mat.values (or mat.values with one of the other selectable states in the mat.value Status field) as they were on a specific date.

Example: if a passive invoice dated June 1 resulted in an open mat.value with a due date of July 1, and on June 28 the payment for that mat.value was recorded, if we process the supplier due register with the open mat.values as of date after June 28 (e.g., we request the due register as of June 30), the mat.value will not be visible since it is closed; if we request the due register with a date of July 20, for example, the mat.value will appear visible since it is still open as of that date.

**Maturities value and payments at the dates:** with the flag active, the previous field open mat.values as of will take bill concerning both the opening date of the mat.values and the payment date; with the flag deactivated, the above date will apply only concerning the opening date of the mat.values, and all payments will be considered.

**Synthetic:** the flag, if active, hides additional columns related to payment details from the print; if deactivated, it allows showing all the details.

**With bills that fall due:** since following the accounting of the issuance of outstanding bills (bills of exchange, bank receipts, etc.), a reversal of credit towards the customer and a simultaneous closure of the open mat.value occurs, activating this flag will "adjust" the due register to also account for outstanding bills.

**Currency Convert:** selecting a currency from the combo box will convert the mat.values to the selected currency at the day's exchange rate (displayed in the exchange rate column in the print).

### POSSIBLE GROUPING CRITERIA ENABLED

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image03.png)

Note: Business name = grouping based on the customer or supplier registry.

Bank = grouping based on the channeling bank (see above).

Due date = the grouping will occur by due date, representing all open mat.values in chronological order (based on the filter criteria set above).

**Days:** used only for the due register print and irrelevant for the present print.

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image04.png)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WhWmjPGfF0Y" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>