---
title: Create Supplier Payments (Crea pagamenti fornitore)
sidebar_position: 2
---
The form is located in **Treasury > Payments > Create Supplier Payments (Tesoreria > Pagamenti > Crea pagamenti fornitore)** and allows the creation of a new payment slip. The same mask is also used for opening an existing slip for modification or viewing.

From the search form, it is possible to create a new document using the **New Payment** button or open an existing one to view and/or modify it.

## How to Create a Payment Slip

Click for the essential steps:

1. Select the **Payment Type (Tipo di pagamento)** of the slip from the first dropdown field.
2. The following fields are automatically filled:
   - **Year**: proposes the current year of the system.
   - **Presentation list number**: progressive numbering of the slip.
   - **Issue date**: proposes today's date.
3. Fill in the mandatory header fields:
   - **Bank**: enter the sub-account code of the bank registry on which to issue the slip.
   - **Current account**: automatically filled based on the bank registry linked to the sub-account.
   - **Initial note**: free field for any annotations (not used in the standard).
   - **Final notes**: used in accounting to value the description of the bank accounting movement.
4. Set any additional options:
   - **Set this beneficiary currency date**: defines the value date of the beneficiary in the telematic track.
5. Check the status flags of the slip:
   - **Printed**: not automatically managed by the program.
   - **File emitted**: automatically updated after creating the telematic file.
6. Select the items to be paid:
   - Press the **Create Payment from Maturity Values** button to select the accounting items to close.
   - Pay attention to the use of the *viewing receivable items (visualizzazione partite percipienti)* flag: payment management should take place from the receivables module.
   - The flag *Enforce support bank from the vendor registry (Imponi banca d'appoggio dall'anagrafica del fornitore)* allows using the default bank in the vendor.
7. Modify, if necessary, the payment values in the grid.
   - It is possible to enter partial payments or add manual lines.
   - Attention: manual addition can cause discrepancies in the accounting balance if not managed correctly.
8. Check the **Notes** in the grid: these are automatically filled with references to the paid items and will be reported in general accounting.

:::tip WARNING
On the header of the slip, there is a flag **Authorized** to allow the creation of the XML track and perform the payment. The flag stores the user and the date of authorization. It can be activated by default by accessing the form **Vendor Payment Parameters** and activating the flag *Authorized by default*.
:::

9. **Creating file Sepa** to automatically generate a .xml track of the payment list and archive it automatically in the document management system. You can download the file from the document management for subsequent setup on corporate banking systems, instead of having to re-enter the payments manually.

10. Press the **Documents** button in the Document Manager group to access the document management system with the attached .xml. Inside the document management form, press the **Save Attachment** button to download the copy to your local PC.

#### Specific Buttons

> **New Payment**: Manually inserts a supplier payment line.

> **Save**: Saves the header of the slip after entering the payment type and the bank sub-account.

> **Delete Selected Payments**: Deletes supplier payments created manually or from creating payments from items.

> **Create Payment from Maturity Values**: Activatable after saving the header, it acquires data from the items archive.

> **Documents**: Button for linking to document management.

---

### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>