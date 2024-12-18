---
title: Customer / Supplier Aging Report (Scdenziario Clienti / Fornitori)
sidebar_position: 1
---

From this form, it is possible to define all preliminary parameters and launch the printing of the customer/supplier aging report.

The form is the same as that used for launching other prints based on the processing of open items; however, some fields may not be used or relevant to the specific print in question.

At the top of the form, there are several filters on the source data:

**![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image01.png)**

**Account (Conto):** main filter on the customer/supplier sub-accounts. If no data is entered, the aging report will be processed for all customer and supplier accounts. It is possible to enter only the master account (without sub-account) to obtain only customers (or only Italian customers, for example) or only suppliers.

**From / To Due Date (Da / A Data scadenza):** filter on the due date stored within the item (processed at the opening stage according to payment terms unless manually changed).

**Item Status (Stato Partita):** the filter is defaulted to the Open status (which also includes Overdue and Partially Open), it can be modified (to include Closed or Overdue or Partially Open items, etc., in order to extract only a specific type) or left empty to include all items.

**Item Position (Posizione Partita):** the combo box filter is linked to the Item Position table (used to assign freely codifiable categories to items).

**Payment Type (Pag.):** filter on the payment type stored within the item (processed at the opening stage according to payment terms unless manually changed).

**Doc Code (Cod. Doc.):** filter on the code of the document type associated with the item at the opening stage (e.g., Invoice, credit note, fiscal receipt, etc.).

**Currency (Divisa):** filter on the currency in which the items are denominated (the equivalents in Euro will also be shown in the print).

**Agent (Agente):** filter on the agent linked to the item (only on the customer side).

**Bank (Banca):** filter on the channeling bank linked to the item at the opening stage (Payment sub-account field within the item).

**Project (Progetto):** (formerly job): filter on the project (job) linked to the item.

**From / To Item Year; From / To Item Number (Da / A Anno partita; Da / A Nr. Partita):** filter on the year and number of the item (these fields are also present within the items).

**Department (Dipartimento):** filter on the division (operational if multiple divisions are present in the database).

### Display Parameters

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image02.png)

**Open items as of (Partite aperte al):** this field, defaulted to today's date when the mask opens, can be modified to obtain the situation of open items (or items with one of the other selectable states in the Item Status field) as they were on a specific date.

Example: if a passive invoice dated June 1 resulted in an open item with a due date of July 1, and on June 28 the payment for that item was recorded, if we process the supplier aging report with the Open items as of date after June 28 (e.g., we request the aging report as of June 30), the item will not be visible since it is closed; if we request the aging report with a date of July 20, for example, the item will appear visible since it is still open as of that date.

**Items and payments as of dates (Partite e pagamenti alle date):** with the flag active, the previous field Open items as of will take effect concerning both the opening date of the items and the payment date; with the flag deactivated, the above date will apply only concerning the opening date of the items, and all payments will be considered.

**Summary (Sintetica):** the flag, if active, hides additional columns related to payment details from the print; if deactivated, it allows showing all the details.

**With outstanding effects (Con effetti a scadere):** since following the accounting of the issuance of outstanding effects (bills of exchange, bank receipts, etc.), a reversal of credit towards the customer and a simultaneous closure of the open item occurs, activating this flag will "adjust" the aging report to also account for outstanding effects.

**Currency Conversion (Conversione Valuta):** selecting a currency from the combo box will convert the items to the selected currency at the day's exchange rate (displayed in the exchange rate column in the print).

### POSSIBLE GROUPING CRITERIA ENABLED

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image03.png)

Note: Business name = grouping based on the customer or supplier registry.

Bank = grouping based on the channeling bank (see above).

Due date = the grouping will occur by due date, representing all open items in chronological order (based on the filter criteria set above).

**Days (AREA Giorni):** used only for the Aging Report print and irrelevant for the present print.

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image04.png)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WhWmjPGfF0Y" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>