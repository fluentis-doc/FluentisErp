---
title: Import Accounting Movements
sidebar_position: 2
---

The Excel sheet (template) for importing accounting movements in the Administration module allows for populating both the VAT section and the accounting section of the registrations and should therefore be filled out appropriately depending on whether accounting entries involving VAT or simply general entries are being imported.

**If importing invoice records:**  
1st row = header  
2nd row = journal book + VAT Register  
3rd row (and subsequent rows) = journal book movements  

**General ledger**  
1st row = header  
Other rows = journal book  

### Example

![](/img/it-it/applications/bizlink/import-mov-contabili.png)

**Reg Date / Comp Date:** these are the registration and competency dates of the accounting registration header.

**Reg No.:** Be careful, it must be free in the destination database, otherwise the function will overwrite what it finds without control (it is a SQL update).

**Template:** use a code for a reason that is already present and consistent with the registration (for example, a VAT reason if importing invoice records).

**VAT Register:** use the code of a register that is already present.

**VAT Protocol:** use a free protocol.

**Currency; Currency; Euro:** always complete everything even if it is all in euros and there is no exchange rate. Always fill in the other column with 0.00 (For example, if I fill in the Debit column with 1000.00, in the adjacent Credit column I put 0.00).

**Account / Detail account:** use codes for accounts that are already present.

---
**VAT Data**

Load the **code** of the tax rate that must already be present in the database.

Fill in all the data including taxable VAT and also non-deductible VAT (possibly with a value of 0.00).

---

**Company Center:** Optional, if I intend to also load the link to the cost center (already present).

**Job Number:** Optional, if I intend to also load the link.

---

**In the Parameters tab**, you can set the value 1 on **Recompute**, this way it recalculates the data starting from the journal book and therefore generates the open items from the payment terms data, for example, if they are missing because they have not been imported separately. Otherwise, it does not perform any recalculation, and the items will not be created if they are not imported. (Option recommended for performance reasons and processing times, especially with many rows.)

Be careful: accounts must already exist in the database; otherwise, the error message will not tell me which account is missing but will always refer to the last row of the Excel sheet.