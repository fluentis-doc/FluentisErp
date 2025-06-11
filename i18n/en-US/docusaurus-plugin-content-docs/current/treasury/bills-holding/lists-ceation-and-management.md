---
title: Presentation List Creation and Management
sidebar_position: 6
---

The form is located on the path **Treasury > Bills > Create List** and allows for the creation of a *new* list or the *modification/viewing* of an already existing list.

## How to create a Presentation List

<details>

  <summary>Click for key steps</summary>
 
  1. Retrieve the **Type** (of list); if you have associated Detail accounts / Counterparts, these fields will automatically load as well; otherwise, enter them manually;  
  2. **Save** the header just created;  
  3. Use the **Capture Bills** button (in the ribbon bar) to insert already created Bills into the list;  
  4. Use the **File Creation Ri.Ba.** button (in the ribbon bar) to create the electronic file to be sent to the bank;  
  5. Open the list with the **Documents** button (in the ribbon bar) to access the attached electronic file;  
  6. After opening the electronic file, use **Save attachment** to download a copy to your PC to send to the bank;  
  7. Print the list or activate the **Printed** flag;  
  8. Use **Post and close** if you want to post the list.

</details>

1. *Data entry*:  

> 1.1. Enter the *Type of list* with the combo box **Type**: the program automatically creates the progressive number of the list according to the **numeration** linked to the type for the **year** in question.  
>1.2. The **presentation date** is proposed as today's date and can be changed if necessary.  
>1.3. The **currency** of the list is proposed based on the currency of the active company: if a currency other than the euro is assigned, this requires entering only Bills with the same currency in the list.  
>1.4. The section for **Detail accounts / Counterparts** can be automatically populated based on the settings of the [**list type**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types) selected. If the accounts linked to the list type have not been predefined, enter them manually in the two fields (widgets): 
>> - **Bank current account** (this is the detail account linked to the bank registry where the final credit will occur upon the successful completion of the operation) and      
>> - **Counterpart presented at good outcome / discount / after collection** (transitional presentation account; during the *posting of the list*, the *active portfolio account* will be reversed and the amounts credited to this account, subsequently, during the credit posting, the amounts will be transferred from this account to the *Bank current account*).  
> 1.5. If you have defined a limit value for the ceiling in the bank registry, the granted amount and residual usable will be displayed in the *Bank ceiling situation* section.  

If you have filled in the ceiling value in the *Differentiated* section (instead of *Global*), set the type of list you are creating with the radio buttons in the **Presentation type** section to specifically manage the values of the *Granted* and *Residual* ceiling.

2. **Save** the header of the list just created. Once the list is saved, the various management buttons in the ribbon bar will be activated. 

3. Use the **Capture Bills** button (in the ribbon bar) to insert previously created Bills into the list. In particular, this command opens a search mask for issued Bills that have not yet been presented in the list. WARNING: From this mask, it will only be possible to insert complete Bills with the necessary abi/cab references.

Inserting Bills into the list updates the *Total list* displayed at the bottom of the form: to remove an Bill from the list, simply select it and press the *Del* key on the keyboard, or the ***Delete Bills*** button from the ribbon bar.

4. Use the **Generation of Ri.Ba. file** button to create the electronic file of the list to be sent to the bank. Alternatively, depending on the type of list created, exports for SDD (formerly RID now at the European Sepa level) and LCR (French) are available.

5. Open the document with the **Documents** button (in the ribbon bar) to download the file to your PC to send to the bank.  

6. After opening the document in the document section, use the **Save attachment** button to download a copy to your PC to send to the bank.

7. Once the list is completed, it will be possible to proceed with the **direct printing** of it (or activate the *Printed* flag). 

:::tip[Info]
The **printed list status is necessary to proceed with its posting**, which can be done directly from this mask with the **Post and close** button: it will be necessary to have predefined the ledger template within the parameters of the module.
:::

8. Use the **Post and close** button if you need to post the list.

:::note[Note]
The situation of the bank ceiling proposes the stored data of the sbf ceiling in the bank registry *Current account* and the available balance based on the amount of presented Bills that have not yet been credited.

A series of flags records whether the list has been: 
- printed (this condition is mandatory to proceed with its posting), 
- if a **File** has been **created**, 
- if it has been **Posted** and 
- if it is a **RID** list related to **utilities** or LCR.
:::

### The **Payments** tab 

- is active **only in the case of** list type with the ***Bills to Supplier*** flag

- is dedicated to identifying supplier items to be closed with the transfer of the Bills present in the list itself. 

The total of the **Payments** section must equal the total of the transferred Bills: to achieve this equality, it is allowed to enter a manual difference line, which will be managed as opening an item to the supplier if the ledger template used allows for the opening of such items.

**Specific buttons**:

*New payment*: Activates the cursor in a new payment line.

*Delete payments*: Deletes the selected payments in the grid.

*Payments from items*: Opens the help mask for items, from which to select the supplier items to close.

## SDD Sepa Direct Debit Lists 

The Sepa Direct Debit, which replaces the previous national RID, is a pre-authorized collection tool based on a mandate to debit issued by the Debtor in favor of their Creditor.

It is based on a prior agreement (mandate) between the Debtor and the Creditor that allows the latter to request the activation of an inter-bank procedure to automatically debit the Debtor's account.

:::tip[How to create an SDD list]
After filling in the necessary fields [**in the customer contact**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) as the holder of the SDD and in the table with our company's data, it is necessary to:

- Define a specific type of bill "*SDD*" [**here**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) and associate it with the respective [**Payment Type**](/docs/configurations/tables/general-settings/payment-types)
- Define a specific type of list in the bills portfolio, see the Utilities field [**here**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)
- Use the procedures [**Creating bills from maturity values**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) or [**Creating bills from due dates**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) to generate an bill of type "*SDD*"
- Create a [**new presentation list**](/docs/treasury/bills-holding/lists-ceation-and-management) of type "*SDD*" and insert the "*SDD*" bill into it
- Use the **SDD Export** button in the ribbon bar (enabled by the specific type of list set with the Utilities flag) to generate the specific bank file valid for SDD.
:::