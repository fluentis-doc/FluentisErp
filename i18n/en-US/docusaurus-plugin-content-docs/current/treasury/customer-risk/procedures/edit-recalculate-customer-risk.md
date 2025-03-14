---
title: Modify - Recalculate Customer Risk (Modifica - Ricalcola rischio cliente)
sidebar_position: 1
---

The two forms essentially manage the display of the overall risk status towards a particular customer: the ‘Recalculate Customer Risk (Ricalcola rischio cliente)' is a simple spot request for the current situation of the customer, while the modification mask of the ‘Use Credit (Utilizzo fidi)' procedure allows for storing each calculation made and thus visualizing a historical series.

Let's look in detail at the list of fields displayed, which is essentially the same as that present in the customer exposure form.

At the top are the calculation parameters: the customer code, the start date for calculation (default set by the parameters of the customer risk module), the final reference date (set to today), the number of days of delay for deferred effects and post-collection effects (set by the module parameters, which are referenced), the flag for considering transactions related to provisional registrations. By pressing the calculation button, the following values will appear:

**Turnover 12M**: this is the revenue (from the sales area, sales invoices) for the 12 months preceding the reference date;

**Turnover year**: this is the revenue (from the sales area, sales invoices) from the beginning of the year;

In the section **Status of opened mat. val.**, the total debits/credits and the balance related to open transactions will be visible;

In the section **Payments from Provisional Registrations (Pagam da reg. provv.)**, any payment amounts entered in provisional registrations will be displayed;

In the section **Status of ledger balance**, the total debits/credits and the balance of the general ledger will be visible;

**Mat.value/Ledger balance**: this repeats the total debits/credits calculated from the transactions or the balance as displayed in the previous sections;

**Invoices to be Accounted (Fatture da contabilizzare)**: these are the amounts of invoices (of the Invoice Types linked to the credit) printed but not yet accounted for;

**DDTs to Invoice (Ddt da fatturare)**: these are the amounts of DDTs (of the DDT Types linked to the credit) printed but not yet invoiced;

**Orders to be executed**: these are the amounts of orders (of the Order Types linked to the credit) printed, confirmed but not yet fulfilled;

**Issued bills**: these are the amounts of effects (from the effects portfolio module) issued and accounted for, but not yet presented;

**Effects Presented for Discount-SBF-Collection (Effetti presentati allo sconto-al sbf-all'incasso)**: these are the amounts of effects presented but that have a due date (plus the days from the parameters entered at the top of the calculation) later than the reference date;

**Section of Defaults (Sezione insoluti)**: this displays any unaccounted defaults, or (if the flag is set) also those already accounted for, both as amount and relative number;

From the sum of the previous values, the ‘Customer Risk (Rischio cliente)' is calculated, which compared to the granted credit will show the overrun of the credit.

The **Expired** field displays the amount of open transactions that are already overdue, as an additional element of analysis of the customer's situation.

| Function (Funzione) | Meaning (Significato) |
| --- | --- |
| Save (Salva) | The button, present in the modification of a previously calculated credit, allows to store the obtained result. |
| Calculate (Calcola) | Calls the procedure to calculate the overall risk situation for the customer. |