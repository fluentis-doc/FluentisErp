---
title: Accounting for Sales Invoices (Contabilizzazione fatture di vendita)
sidebar_position: 1
---

The procedure opens through the path **Sales > Sales Invoices > Accounting > Accounting for Sales Invoices**.

An invoice must meet a series of conditions in order to be accounted for: its header must have the *Printed* flag set, it must not be of type *pro forma*, and the invoice type must contain the general reason for accounting.

### Accounting

The form presents at the top the search filters to locate and display, in the grid, the list of invoices to be accounted for present in the system.

At the bottom of the form, there are some parameters for managing the accounting:

**Recording date equal to document date**: this flag enforces the accounting of each individual invoice to their date of issue.

If the flag is disabled, the next field, **Posting date**, is activated, within which it's possible to set a fixed registration date;

**Use the exchange from the exchange table**: with this flag, the system is required to check the exchange rate table to use the one present at the registration/invoice date (or the last one entered previously).

If the flag is not set, the *exchange rate present in the header of the invoice* will be used instead;

**Update exchange on document**: the field is active *only* if the previous flag is set. The meaning is to also update the exchange rate present in the header of the invoice, overwriting the current one;

**VAT competence = document date (Comp. IVA = data documento)**: the flag enforces that the VAT competence of the movements is equal to the invoice date. In the case where one wants to utilize the ability to invoice up to the 15th of the month following the shipping date (deferred invoicing), the flag should be removed so that the VAT competence is taken from the start date indicated in the original document, as required by VAT regulations;

**Use customer branch to assign department**: flag connected to the field *Referene Company branch* present in the customer and supplier registries, where it's possible to associate the customer/supplier to a branch and, through this, to a *division* different from the one in use. This flag triggers a check if there is a reference branch in the customer and, from this link, it checks if there is a division associated with that branch. If positive, it registers the invoice attributing it to that division (even if the invoice is attributed to division X, the accounting registration will be in Y). This option facilitates the drafting of financial statements for divisions in situations where invoicing occurs separately but the results from a budgeting perspective are intended to be aggregated at a main division.

*Specific buttons*: 
> **Search invoice**: to search for invoices; all printed and unaccounted invoices are proposed.  
> **Invoices Accounting**: executes the accounting of the selected invoices according to the defined settings.  

### PARAMETERS

In this form, some general elements of invoice accounting are set.

**Accounting of giveaways**: activating this flag enables the management of gift accounting, activating the subsequent linked fields.  

1. If the invoice being accounted has a gift and the management parameter has not been set, the system will ask the user for confirmation with a warning of the missing setting. In this situation, the invoice will be registered normally without any management of the gift line, which will then need to be manually handled in accounting.

2. If the gift management is activated but no sub-account is entered in the subsequent fields, the system will add the necessary lines for the reversal of revenue at the end of the normal accounting movements, using the same sub-account set for sales items.

3. If the flag **Replace article account (Sostituisci il conto dell'articolo)** is set, the field to set the sub-account for reversing advance payments will be activated, which will be used instead of the article's sub-account in these additional lines.

**Vat code for gifts in vat register**: filling in this field (generally with a VAT code corresponding to the case of "out of VAT scope" or "excluded...") will automatically execute a reversal line of the value of the gift in the VAT register, where there is no VAT reclaim exercised against the customer.

**Account for VAT reversal**: used in the case where the gift article in the invoice does not have the flag **VAT recourse**, with which it indicates whether the VAT applied to the gift article is to be borne (with flag) by the customer or not (without flag). This amount will be recorded and reversed only if the *Reversal VAT account (Conto di storno iva)* is entered; without it, the operation will need to be managed manually in accounting (this field also has a confirmation/warning message for the user regarding the missing setting).

**Group automatic row accounts (Raggruppa conti delle righe automatiche)**: with the flag active, the accounts inserted automatically in the journal section (such as in gift accounting where the customer appears multiple times, once for the total invoice and then the gifts are reversed) will be grouped by sub-account forming a compact registration.

**Detail account of financial discount**: this field is used to record the financial discount associated with the invoice's due date.

*Specific button*: 

> **Save Parameters**: allows you to save the parameters set for gift accounting.

After selecting the invoices (from the *Accounting* tab) and setting the parameters, the invoices can be accounted for with the help of the *Invoices Accounting* button.

### Previous

The form presents the list of accounting operations performed, in order to view and possibly cancel them through the appropriate buttons.

Cancellation will only be possible if the period is still modifiable (journal book print, VAT register not printed, periodic liquidation not printed, accounts closure not executed, accounting items closed in a collection or in a note).

**Invoices Accounting**: grid with details of the executed operations. It is populated after the search procedure and operations can be selected to apply the ribbon functions.

The data in the lower grids, **Invoices** and **Ledger record** correspond to the operation selected in the upper grid. A double click in the invoices/registrations section will allow viewing the related invoice/accounting registration.

*Specific buttons*:
> **Search Accounting**: searches the list of executed accountings.  
> **Accounting Result Preview**: to view the print preview of the accounting.  
> **Restore Accounting**: this button will delete all accounting performed, along with all associated invoices.  
> **Restore Invoice**: the button restores the selected single invoice.  

### Error Messages

These errors can sometimes stem from incorrect data management by the user, meaning essential information is missing; in other cases, they may arise from incorrect configurations or settings at the parameter or database level.

Configuration errors or missing basic data primarily refer to environments where the Fast Start procedure has not been launched.

:::note[Message]
The invoice with number ... type ... year ... of AAA S.p.a. cannot be accounted for because **the counter-account does not exist**.
:::

The accounting counter-account, in the context of a sales or purchase invoice, must be understood as the indication of the account intended to receive the revenue or cost. 
Thus, more generally, the accounting registration of an invoice normally relies on three essential elements that we can review by opening the [**accounting reason**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) with which we are trying to account for this invoice.
To first check what this reason is, we pass through the table of [**invoice types**](/docs/configurations/tables/sales/invoices-type) where the link is defined.
Here are the three elements: the customer or supplier, the VAT, and the cost or revenue; if one of these elements is missing, the registration does not hold.

Within the accounting reason, created or manually modified compared to the standard generated by Fast Start, it might mislead us if at first glance it seems that the revenue account has been defined as a fixed account since there is an account code and sub-account, and therefore it should use it and only replace the generic customer's account with the detail sub-account derived from the invoice's header.

In reality, since the reading criteria of the taxable sub-account is set, the program looks for the data for replacement in any case, first looking at the invoice, and secondly at the customer registry.

**Therefore, to resolve the issue, it is necessary to define the sales revenue data in the invoice, as it could be directly associated with the coded item registry.
Alternatively, we can insert the default account in the customer registry. This way, automatic accounting can function.**

Note: also the reading criteria *Total taxable* in the accounting reason may not work because it would attempt to read the VAT grid of the registration where a mandatory data that is always the counter-account is missing. Thus, there is no method for accounting with a fixed sub-account; the sales and purchase revenue or customer supplier registries must always be managed.

:::note[Message]
The invoice with number ... type ... year ... of AAA S.p.a. cannot be accounted for because **the registration is balanced**.
:::

Beyond the more obvious meaning of the message, namely that it prevents, in relation to the settings of the accounting reason parameters, saving a registration where the total debit does not match the total credit, a possible reason for this situation could still be related to an incorrect setting of the reason itself, for example, the absence in the accounting schema of the line related to VAT, and thus in the presence of an invoice containing VAT and the breakdown performed in the first part of the procedure, it would still be unable to generate an accounting entry (in the part related to the journal book) that could balance, resulting in the error.

Note: the block is subject to parameter but it is strongly discouraged to deactivate it to accept unbalanced entries unless in extremely exceptional cases or temporarily to deliberately check the result (wrong) of the accounting.

:::note[Message]
The invoice with number ... type ... year ... of AAA S.p.a. cannot be accounted for because **in the journal book there are 1 rows with an account without a sub-account**.
:::

This message (less immediate in interpretation) refers to the fact that the software cannot save registrations where the detail sub-account is not defined.

Among the various reasons for why this might happen, obviously related to the fact that the accounting reason schema defines the ledgers (without detail sub-account) even concerning customers and suppliers, it could be that within the [**accounting parameters**](/docs/configurations/parameters/finance/accounting-parameters) the match between the account type (perhaps a new type added) and the reference ledger is missing. This missing parameter prevents the execution of the automation which completes the accounting entry.

:::note[Message]
The invoice with number ... type ... year ... of AAA S.p.a. cannot be accounted for because **the value of the items does not correspond to the accounting movement**.
:::

This message usually corresponds to the lack of indication of the payment terms in the invoice; therefore the item cannot be opened and clearly a difference is created, blocking the software.

The choice to be blocked in accounting is settable in a parameter of the accounting reason.

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/NgroQvVOgD8" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>