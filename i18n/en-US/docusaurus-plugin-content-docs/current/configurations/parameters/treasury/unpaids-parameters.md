---
title: Parameters Unpaid
sidebar_position: 2
---

The parameters of the **Unpaid** module can be found in **Parameters > Treasury**.

In the default parameters for defaults, you can pre-set the default elements to propose in the module procedures.

#### Recording type    
- **Transitory account + protest costs**: with this setting, the customer invoice will be reopened on a transitory account for the same amount as the original bill and charge the costs to the bank account.   
- **Customer + protest costs**: it is recommended to set the choice to ‘Customer + protest costs' so that the customer invoice can be reopened for the same amount as the original bill and charge the costs to the bank account.  

#### Maturity values management    
- **Re-opening of invoice maturity value**: it is recommended to set the choice to ‘Reopening of the invoice-related item.' With this option, the procedure will open a new item but with the same references to the document number and date of the original invoice. In the case of a summary bill of several documents, the first in the list will be inserted, but the notes of the item will manage the list of all references.  
- **Opening of new maturity value**: the alternative option, opening a new item, will create a new item with the number and document date assigned based on the number and date of the bill that went into default. 

#### Costs

The section must be set if you want to have a default to propose for the creation of the customer invoice for default costs.

- **Invoice type**: allows you to set the type of invoice to be used.  
- **Pay. type**: allows you to set the type of payment to be used.  
- **Units of Measure**: allows you to set the unit of measure for the item line.  
- **Payment solution**: allows you to set the payment solution to generate the related deadline.  

#### Charges recourse   
- **Accounting at cost of reimbursement expenses**: FluentisERP will account for the cost of reclaimed expenses charged to the customer.
- **Invoicing type**: allows you to set the sales turnover or the income counterpart to be associated with the invoice line.  
- **VAT rate**: allows you to set the VAT rate. 

#### Stamps recovery  
- **Invoicing type**: allows you to set the sales turnover or the income counterpart to be associated with the invoice line.  
- **VAT rate**: allows you to set the VAT rate. 

#### Charges recourse  
- **Invoicing type**: allows you to set the sales turnover or the income counterpart to be associated with the invoice line.
- **VAT rate**: allows you to set the VAT rate. 

#### Parameters
- **Ledger Records Template**: it is the cause to be proposed in the default accounting procedures.  
- **Protest expenses account**: it is the account to be used to record the expenses charged by the bank.  
- **Temporary account**: it is the transitory sub-account that would be used for accounting in case the management 'Transitory account + protest costs' has been set. It is still recommended to fill in this field (perhaps with the same account for expenses) as it will be required for the execution of the accounting procedure.  
- **Bank transitory account**: it is the transitory bank account to be used in case the default relates to effects not presented with the procedure (e.g., in the case of using the DocFinance module). 
 
:::danger Attention
By filling in this field, the set account will be used, regardless of the setting of the flags described above in the section *Recording type*, with priority over the normally moved counterpart account (the effects account if the effect is *issued*, the s.b.f account at the header of the list if the effect is *presented*, and the C/C bank account if the effect is *credited*).

**It is therefore advisable not to fill it in unless necessary.**
:::

- **Cost charging account to customer**: it is the income sub-account to be used in the default accounting procedure in case the option to charge costs to the customer has been chosen.  
- **Interest type**: a reference interest rate may be linked to the default. In case of promissory notes, an initial interest calculation can be simulated between the expected due date of the bill and the date of recording the default.  
- **Single mat. value creation**: this flag allows you to open a single item for the default of a bill created from N different items. It is generally not used to reopen the history of items with the original references.

:::danger Attention
Do not set if you manage Agents with accumulation upon payment made or total.
:::

- **Maturity date equal with bill maturity date**: by activating this parameter, the due date of the item reopened for the default is set equal to the due date of the effect, instead of the date of the default.