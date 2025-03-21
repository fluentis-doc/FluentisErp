---
title: Movements Accounting
sidebar_position: 4
---

:::note Note
The **Movements Accounting** form is used in the localizations of Romania and Croatia.
:::

The procedure opens via the menu **Movements Accounting**.     
This form allows for the accounting of warehouse records in the general ledger. The window consists of two tabs, General Ledger Accounting and Accounting Registration, both with a filter area and grid results.

## **Movements Accounting**

After setting all the desired filters, simply click the Search button to view the results, which is the list of Warehouse Records within the results grid. To account for a record, simply select it and click the Create Registration button, and you can register one or more records according to the user's needs and preferences. The Accounting Data field and the Accounting Data flag are equivalent to the inventory entry date and allow for the selection of the desired accounting date.

The results grid consists of the following fields:     
**Warehouse**: the field shows the code of the warehouse where the record was generated;      
**Template**: the field shows the code of the warehouse reason used for the movement and thus included in the header of the record;      
**Date**: the field shows the date of the warehouse record entry;     
**Number**: the field shows the progressive number of the warehouse record;     
**Reference doc.**: the field shows what is present in the *Reference doc.* field in the header of the record;      
**Document date**: the field shows the date of the related document present in the header of the record;      
**Load / Unload **: the field shows the type of record, which can be either load or unload;      
**Warehouse of destination**: the field shows the code of the destination warehouse, if present;      
**Destination Warehouse Model**: the field shows the identification code of the destination warehouse, if present;      
**Destination Warehouse Number**: the field shows the progressive number of the destination warehouse record, if present;      
**Reference Document of Destination Warehouse**: the field shows what is present in the *Reference document* field in the header of the destination warehouse record, if present;      
**Account description**: the field shows the description of the account of the contact depending on whether it is a debit or credit.     

## **Ledger record**

As the second tab, there is the Accounting Registration tab, which can be used to filter, view, and roll back transactions.      
The data in the tables below, **Documents and Accounting Registration / Errors**, correspond to the selected accounting entry in the upper **Accounting** table (after filtering the data).      
Additionally, in these last two tables, there is the possibility to view the corresponding warehouse record or main record by double-clicking the desired row in the corresponding table. The Errors tab shows any errors that occurred during the accounting of the records.     

*Specific buttons*:
> **Search Accounting**: allows searching for accounted warehouse records;     
> **Rollback accounting**: allows reversing the entire operation, that is, in the case of creating multiple accounting entries simultaneously, it deletes all entries;     
> **Rollback Stock Record**: allows undoing the selected warehouse movement within the Documents tab.     

The results grid of the **Documents** contains the following main fields:     
**Warehouse**: the field shows the code of the warehouse where the record was generated;     
**Warehouse Reason**: the field shows the code of the warehouse reason used for the movement and has thus been included in the header of the record;     
**Accounting date**: the field shows the accounting date of the warehouse record;     
**Movement no.**: the field shows the progressive number of the warehouse record;     
**Document**: the field shows what is present in the *Reference doc.* field in the header of the record;     
**Date of document**: the field shows the date of the *Reference doc.* present in the header of the record;     
**Load / Unload**: the field shows the type of movement, which can be either load or unload;     
**Document Number**: the field shows the document number;     
**Account**: the field shows the partner’s account;     
**Detail account**: the field shows the subaccount;     
**Account / Subaccount Description**: the field shows the detailed description of the account / partner name.     

The results grid of the **Ledger record** contains the following main fields:     
**Registration date**: the column shows the date of entry in the main record;     
**Recording number**: the column shows the registration number in the main record;     
**Template**: the column shows the abbreviated name of the model for accounting registration;     
**Template description**: the column shows the full name of the reason for accounting registration;     
**Document Number**: the column shows the document number;     
**Account**: the column shows the account in the main record;     
**Detail account**: the column shows the subaccount in the main record;     
**Description**: the column shows the name of the account in the main record;     
**Account detail**: the column shows the details of the movement;     
**Movement description**: the column shows the description of the modification;     
**User**: the column shows the user who created the registration;     
**Currency amount**: the column shows the amount in currency;     
**Amount debit**: the column shows the debit balance;     
**Opening credit**: the column shows the credit balance.