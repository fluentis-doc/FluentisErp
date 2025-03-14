---
title: Bank Movements
sidebar_position: 1
---


The bank accounts module allows the operator to monitor and reconcile bank transactions in accounting with the bank statement (or transaction list) that can be downloaded as a telematic file from many corporate banking sites. 

The module is located in the treasury area and pulls data from accounting. 


### Importing Transactions (Importazione movimenti)
This form allows you to import bank account transactions from the telematic file (standard ABI) that can be extracted from online banking.

To proceed with the import, you first need to set the bank sub-account for which you want to import the file at the bottom of the form, then by pressing the **New*** button, the telematic file import form will open, allowing you to define the location where the file to be imported is stored. Upon successfully completing the operation, a new import line will appear in the grid: with a double-click on it or through the **Modify*** button, you can view the details of the imported data.

The transactions imported this way will be available for the bank reconciliation procedure or, alternatively, (if the transaction or transactions contained in the file have not yet been accounted for) to proceed with the automatic creation of the accounting entry based on the data from the file.


### Search Form / List of Imported Transactions (Maschera di ricerca / lista movimenti importati)
In the main form where all imported transactions are searched, you can filter via specific flags for only the transactions to reconcile, only the reconciled ones, or both.
In the result grid, there are two flags that identify whether the transaction has already been **Reconciled*** with the previously entered accounting records or if the imported transaction has automatically generated the accounting entry (**Reconciled account***).

Further data from the detailed imported file are provided, among which we highlight the most important: the date, totals and subtotals of the transaction list, the sign (debit/credit), and the number of the transactions contained.

### Transaction Details and Reconciliation Procedures (Dettaglio del movimento e procedure di riconciliazione)
Entering the transaction details via double-click or the **Modify*** button, various transactions contained in the file will be displayed in the result grid with the respective amount, sign, and bank value date. The details of the corresponding accounting registration present or generated in Fluentis are also reported. The flag indicating whether the transaction detail has already been reconciled or not is shown first.

To view the transaction description detail contained in the file, use the + button present to the left of the Reconciled field (in the very first position). 

**POSSIBLE PROCEDURES:**

- **Automatic reconcile***: a popup appears allowing you to choose through flags the automatic criteria for data matching (e.g., same date, same amount, etc.). The search and reconciliation will start with the **Run*** button and can be canceled with the **Cancel*** button. Automatically, the transactions will be updated with the reconciled flag, while those not found can be reconciled manually or, if actually missing, proceed to their automatic creation.

- **Manual reconcile***: By pressing the button, the [***View Accounts***](/docs/finance-area/ledger-records/records/view-accounts) mask will automatically open, and the filters for the sub-account (corresponding to that of our bank) and the dates will be automatically filled to match the transaction to be reconciled. At this point, **you need to press the View Accounts button** and search. Once the corresponding transaction is identified, select the line and press the **Reconcile*** button (also in the ribbon bar). At this point, the transaction is reconciled manually, and the links to the registration and flags are updated.

- **Clean reconcile***: allows you to undo a reconciliation procedure that has already been performed, removing the links to the accounting records.

- **Accounting***: by pressing the button to create the accounting entry automatically, a popup appears where you can select the desired accounting counter. Once you proceed, the accounting registration form opens automatically with all the data that can be retrieved from the imported file pre-set, and you only need to fill in any additional data (such as the items to be closed in the case of collections or payments, etc.) and then save the accounting registration.

:::important[Detail of the Accounting Procedure: Automatic Linking of Open Items]
Depending on the bank that provides the telematic files, there are more or less detailed files.

The logic by which Fluentis manages automatically, in the generated entry (for example, collection or payment), the closure of any open item present in the system is as follows:

- If the imported telematic file contains the field *Remittance creditor reference* (visible in Fluentis by opening the detail of the rows in the file with the + button to the left), the reference code present in this field will be used to search for open items. The data must match the *Reference Number* field present in the open item (the one next to the *Payment Reference Model* field).
- If the first condition is not met, the procedure will read in the telematic file the field *IBAN account creditor* (also visible by opening the detail of the rows as explained in the previous point) and will search if there is an accounting account with a Customer / Supplier record that reports the same IBAN. This IBAN **must** be found in the IBAN field of the **Bank Support Grid (griglia Banca d'appoggio)**, which is located in the lower part of the registry in the payment tab, exclusively designated for the banking details of customers and suppliers, or the "counterparties", and never of our company. It must not be confused with the same field present in the upper grid, i.e., the main grid called *Payment types*.
If the IBAN matches, an open item will be searched for that account with the same amount; if there are multiple with the same amount, the one with the oldest due date will be taken.
- If no item is found that meets the previous criteria, but the customer or supplier account with the corresponding IBAN is still found, Fluentis will only insert the row in accounting without generating the payment automatically.
- If no customer / supplier account is found through the IBAN code, Fluentis will insert only the row related to the bank in the accounting entry, and the entry will need to be completed with the customer / supplier row.
:::

:::danger[Attention (Attenzione)]
The **Ledger template** used to generate the entries for collections and payments automatically as described above **must be modified** compared to the usual settings.
In particular, the row, for example, that related to the bank, which is usually associated with the total document / registration amount type, must be modified. This amount type should be changed to, for example, **Detail Account**, as for the customer / supplier row.

**If this is not done, the procedure will insert the bank row twice, and the entry will not balance automatically.** 
:::