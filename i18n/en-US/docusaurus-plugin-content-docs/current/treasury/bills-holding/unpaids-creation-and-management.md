---
title: Unpaid Creation and Management
sidebar_position: 6
---

The form can be found at the path **Treasury > Bills > Create Unpaid** and allows for the creation of a *new* unpaid item.

## How to Create an Unpaid Item

1. After opening the form, although it is possible to fill in the fields manually, **use** the ***Data Acquisition*** command (in the ribbon bar) to recall the Bill that will become unpaid, through the appropriate dialog and search window that opens.

2. From the dialog window that has opened, select the Bill, after possibly using the present filters, and press **Select**. All the details of the unpaid item are automatically filled in, such as amount, debtor, number, Bill type, etc., reading them from the Bill itself.

3. **Add** manually the **Bank Expenses** and other values in the **Debit note** tab in order to proceed subsequently with accounting and recharging the debtor for these amounts as well. Some of these fields can be automated, such as late payment interest and bank fees, by appropriately configuring the profile of the presentation bank and the [**general parameters of the module**](/docs/configurations/parameters/treasury/unpaids-parameters) for unpaid items (field Interest Type).

4. **Save** the created unpaid item.

The **Unpaid management** form presents a fixed header with the main data of the unpaid item and then, in the lower part, is divided into 4 detail tabs plus a fifth for attaching documents:

## 1. Fixed Header 

Contains the general data of the unpaid item, in particular: 

- the field for **Bank Expenses** for further manual modification 
- the **Number** of the unpaid item, which is the same as the number of the original Bill. 
- various **status flags** depending on the operations carried out on the unpaid item, such as accounting, printing, the final collection of the amounts due, etc.

### 1.1 Debit Note 

It is managed concerning: 
- interest calculation with the related **Rate** and **late payment interest** (based on the type of rate entered in the module parameters and the differential of **Days** between the due date and the creation date of the unpaid item).
- **Administrative charges** for recovery (to be filled in manually) that will be recharged with the issuance of the debit note
- **Stamps recovery** (to be filled in manually) that will be recharged with the issuance of the debit note

### 1.2 Presentation 
Displays the details of the presentation list associated with the original Bill.

### 1.3 Unpaid Item Reference 

This tab displays the entries created with the accounting of the unpaid item, along with the associated payments.

### 1.4 Ref. Original Document 

Displays the references of the documents (entries/invoices) from which the created Bills originate.