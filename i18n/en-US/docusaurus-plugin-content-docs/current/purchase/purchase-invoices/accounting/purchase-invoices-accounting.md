---
title: Purchase Invoices Accounting
sidebar_position: 1
---

The procedure opens via the path **Purchases > Purchase Invoices > Procedures > Purchase Invoices Accounting**.

### 1. Accounting

The form presents search filters at the top to locate the list of invoices to be accounted for present in the system.

At the bottom of the form are some management parameters for accounting:

- **Posting date**: this is the registration date to assign to the registration itself, if the flag *Registration date equals last VAT registration date* is not set;
- **Competence date**: this is the competence date to assign to the registration;
- **Recording date equal with last date of VAT book.**: with this flag, the system will identify for each invoice what the last registration date used for the VAT register associated with the invoice type reason is and will use this date to register the selected documents. In the absence of the flag, the *Posting date* field will be activated to manually set the registration date;
- **Accrual date equal to rec. date**: this flag enforces accounting with the competence date equal to the registration date. If the flag is disabled, the competence date field will be activated to manually set this date;
- **Use the exchange from the exchange table**: with this flag, the system is forced to check the exchange rate table to use the rate in effect on the registration/invoice date (or the last one entered previously). If the flag is not set, the exchange rate already present in the invoice header will be used instead;
- **Update exchange on document**: this field is active only if the previous flag is set. Its meaning is to also update the exchange rate present in the invoice header, overriding the previous one.

#### Specific button

> **Invoices Accounting**: allows you to account for the selected invoices in the grid, based on the entered parameters.

### 2. Gifts 

The user has the option to decide which gifts are to be accounted for. To do this, they must specify the reason for accounting gifts and the account for the VAT reversal.

- **Accounting of giveaways**: with this flag, the management of gift accounting is activated, enabling the subsequent fields associated.

If the invoice being accounted for has a gift and:

1. **The management parameter is not set**: the system will ask the user for confirmation with a notice about the lack of setting. In this situation, the invoice will be registered normally without any management of the gift line, which will need to be handled manually in accounting.
   
2. **The gift management parameter has been set**:  
    - 2.1 If no sub-account has been entered in the subsequent fields, the system will append the necessary cost reversal lines to the normal accounting movements, using the same sub-account set for the item.  
    - 2.2 If the flag **Replace to item account** is set, the field to set the gift reversal sub-account will be activated, which will be used instead of the item's sub-account for these additional lines.

- **Account for VAT reversal**: used in cases where the gift item in the invoice does not have the flag **VAT recourse**. This amount will be registered and reversed only if the *VAT reversal account* is entered, otherwise, the operation will need to be handled manually in accounting (there is also a confirmation/message for the user regarding the lack of setting in this field).

#### Specific button

> **Save**: allows you to save the parameters set for the accounting of gifts.

After selecting the invoices (from the *Accounting* tab) and setting the parameters, the invoices can be accounted for with the help of the *Invoices Accounting* button.

### 3. Previous Transactions

The form presents the list of accounting operations performed, in order to visualize them and eventually cancel them through the appropriate buttons.

Cancellation will only be possible if the period can still be modified (journal book printing, VAT register not printed, periodic liquidation not printed, account closure not executed, accounting items closed in a receipt or in a bill).

- **Invoices Accounting**: grid with details of the operations performed. It is populated after the search procedure, and operations can be selected upon which to apply the ribbon functions.
  
The data in the lower grids, **Purchase Invoices** and **Ledger record**, corresponds to the operation selected in the upper grid. A double click in the invoice/registration section will allow viewing the invoice/accounting registration related.

#### Specific buttons

> **Search Accounting**: searches the list of executed accountings.  
> **Accounting Result Preview**: to view the print preview of the accounting.  
> **Restore Accounting**: to delete the selected accounting.  
> **Restore Record**: to delete the entire selected operation, with all its details displayed in the two lower grids.

### 4. Error Messages 

See the page on [**Sales invoice accounting**](/docs/sales/sales-invoices/accounting/sales-invoices-accounting#messaggi-di-errore).