---
title: Customer Risk Parameters (Parametri Rischio Cliente)
sidebar_position: 6
---

### INTRODUCTION (PREMESSA)

The customer risk module reads customer orders, delivery notes (DDT), invoices, open items, and effects due (essentially everything that occupies credit and creates exposure). 

Open items and effects are read in any case; the documents (purchase orders, delivery notes, invoices) are a choice to be made with a specific flag in the various tables (Customer Order Type, Sales Delivery Note Types, Sales Invoice Types).

The flag to be applied for the reading of the various document types is the flag **Credit**

There is also the flag **Exclude Block (Escludi blocco)**: even if the document generates credit, it will be excluded from the block. (even if it occupies credit, it is never blocked but simply flagged).

### GENERAL LOGIC (LOGICA GENERALE)

Orders are considered if they are printed and confirmed + a flag in the type (not fulfilled or forcibly fulfilled). 
Forcibly fulfilled = the remainder will not be delivered, and the order is considered closed even if it would not be.

Delivery notes must be printed and not invoiced. 
Invoices, whether printed or not, depend on the parameter and must not be accounted (otherwise it is an open item).

In the **parameters** of the Customer Risk module, default items can be preset to be proposed in the procedures of the module.

> **N. days past due for effects presented as good until received (N. giorni oltre la scadenza per effetti presentati al salvo buon fine)**: this field allows you to define how many days to consider the effect presented as good until received, not collected after its due date.  
> **N. days past due for effects presented after collection (N. giorni oltre la scadenza per effetti presentati al dopo incasso)**: this field allows you to define how many days to consider the effect presented after collection, not collected after its due date.  
> **From calculation date (Da data calcolo) (accounting balances, invoices, delivery notes)**: this is the starting date for the calculation. Documents with a date prior to this will not be considered.  
> **View accounted unpaid bills**: setting this flag will also show accounted amounts of insolvents in the module, regardless of their collected status. It has purely informational value.  

**Credit evaluation multiplier**: value used in the form [**Credit Usage (Utilizzo fido)**](/docs/treasury/customer-risk/use-credit) to determine the amount of the *Credit evaluation* field.


#### Calculation Base to Determine Customer Risk (Base di calcolo per determinare il rischio cliente)  
> **Ledger balance**: with this setting, the credit calculation will be based on the customer's accounting balance.  
> **Open maturity values**: with this setting, the credit calculation will be based on the customer's open items.  
> **Consider maturity values from temporary recordings**: if the previous flag is active, the calculation also considers any movements resulting from provisional registrations.  
> **Block physics report**: if the customer credit involves document blocking, this flag blocks the ability to physically print the blocked document. If not set, the document can be printed, but the ‘printed’ flag will not be assigned to the document.  
> **Consider invoices to be printed**: this considers, in the credit calculation, the invoices that have been created but not printed. If not activated, the default logic considers invoices only if printed (with the printed flag active).