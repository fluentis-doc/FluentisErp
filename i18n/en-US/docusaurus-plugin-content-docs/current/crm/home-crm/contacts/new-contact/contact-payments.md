---
title: Contact Payments 
sidebar_position: 16
---

This is one of the tabs of **CRM contacts**.

In this tab, payments to be proposed in the documents related to the contact can be configured.


### Payment Types 

The essential section of the **Payments** tab serves to set the calculation logic for due dates. You select the **Payment Type** and the **Payment Term** (both can be found in *Configuration > Tables > General Settings*).

**Percent Completed**: allows defining the portion (in percentage) of the total payment (or collection) value to be managed with the payment condition (as a combination of payment type and payment solution) set in the line.

In the case of a percentage less than 100, multiple lines must therefore be created with percentages that total 100.

*Example*:<br />
- 50% Cash on invoice and 50% Bank transfer at 30 days.<br />
- 50% Cash on invoice; 25% Bank transfer at 30 days; 25% Bank transfer at 60 days.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Attention (Attenzione)</u>: if the payment solution includes more than one due date, it will be compiled in this way: for example, 50% cash on sight and 50% bank transfer at 30 - 60 days.

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Presentation bank**: represents the reference bank for the payments.  
- For the customer registry:
> - if the payment type is bank receipt, the customer's bank must be indicated;
> - if the payment type is bank transfer, the company's bank in use must be indicated (to have payment references printed for the customer);  

The field is filled via a combo box (**Bank**) linked to the *Supporting Bank* table. Within this table, both the banks of the company and the banks of the counterpart (customer or supplier) can be entered. Additionally, complete rows with IBAN and/or SWIFT code (recommended for the company's banks) as well as rows with only ABI and CAB codes (recommended for the counterpart's banks for which IBAN and SWIFT can be indicated in the fields of the registry grid) can be entered. 

If the row present in the Supporting Bank table is complete with IBAN and/or SWIFT, as well as ABI and CAB, recalling that row via the combo box will populate the data in the registry grid. Otherwise, only ABI and CAB will be displayed, but it will still be possible to add the missing data directly in the grid. This is advisable for counterpart banks to avoid coding too many rows in the Supporting Bank table used solely for a single customer. It is preferable to indicate only the data of the bank branch (ABI and CAB) where different customers might have their bank accounts.

Entry of a bank can also be performed by double-clicking in the abi/cab fields to open the search help among national banking agencies, from which to select the appropriate one and create the code in the registry to be completed with account details, cin, iban, swift.

**Bank description**: field connected to the previous field.

**Bank code**: field NOT used in Italy. For foreign localizations, it can accommodate an alternate banking code versus the ABI CAB system.

### Supporting Bank 

In the grid, the supporting banks of the counterpart can be entered.

This way, it is possible to enter alternative supporting banks (still of the counterpart). Another example could be a customer who pays by bank transfer (and thus the bank of our company is entered in the Payment Type grid) but whose supporting bank is to be entered in case of payment of credit notes.

Entry of a bank can be performed by double-clicking in the abi/cab fields to open the search help among national banking agencies, from which to select the appropriate one and create the code in the registry to be completed with account details, cin, iban, swift.