---
title: Edit – Recalculate Customer Risk
sidebar_position: 1
---

The two masks manage the visualization of total status of risk towards a specific customer: 'Recalculate Customer Risk' is a simple spot request of the current customer situation, while the modification mask of procedure 'Credit Situation' enables the user to record every performed calculation and to view history.

Let's see the viewed fields list in details, that corresponds to the same one located in customer statement mask.

On header there are some calculation parameters: customer code, calculation start date (set automatically from parameters of customer risk module), reference end date (set to the present), number of delay days for bills under usual reserve and bills after collection (set from module parameters), flag of maturity values linked to temporary records. By clicking on the calculation button it will be possible to view the following values:

**Turnover 12M**: it is the turnover (from sales area, sales invoices) about the 12 months previous than the reference date;

**Turnover Year**: it is the turnover (from sales area, sales invoices) from the start of the year;

in section **Status of Opened Maturity Value** it will be possible to view the total credit/debit and the related balance of opened maturity value;

in section **Paym. from Temp. Rec.** it will be possible to view the possible payment amounts inserted into the temporary records;

in section **Status of Ledger Balance** it will be possible to view the total debit/credit and general ledger balance;

**Mat. Value/Ledger Balance**: it proposes again the total debit/credit of maturity value or balance as mentioned before;

**Invoices to be accounted**: it correspond to the invoices amounts (of invoice types linked to credit) that are printed but not yet accounted;

**DN to be invoiced**: it regards the DN amounts (of delivery note type linked to the credit) that have been printed but not yet invoiced;

**Orders to be Executed**: it regards the orders amounts (of order Type linked to the credit) that have been printed, confirmed but not yet executed;

**Bills Issued**: it regards the bills amounts (of bills portfolio module) that have been issued and accounted, but not yet shown;

**Bills presented to discount, to uur, to collection**: it regards the bills amount presented but that have higher due date than the reference date (with days of parameters inserted into the calculation header);

Unpaids **Section**: here it is possible to view the not accounted unpaids, or (if flag is inserted) even the already accounted ones, both as amount and related number;

Starting from the previous values amount it is possible to calculate the 'Customer Risk', that, compared to the granted credit, will be necessary to obtain a credit overdraft.

The **Expired** field shows the amount of opened but already expired maturity values, as a further element of analysis of customer situation.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions about a pre-existing document, rather than to create a new one. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | The button, that regards the modification of an already calculated credit9 enables the user to record the obtained result |
| Calculate | It refers to the procedure to calculate the total situation for customer risk |






