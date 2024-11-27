---
title: Incoming Purchase Documents
sidebar_position: 3
---

### AUTOMATIC DISCHARGE OF PURCHASE INVOICES FROM ES

- **MATCHING OF ELECTRONIC PURCHASE INVOICES TO RECORDS OR DOCUMENTS**
- **AUTOMATIC ACCOUNTING OF ELECTRONIC PURCHASE INVOICES**

In Fluentis, once the Fluentis Business Hub service is configured, it is possible to receive passive invoices from suppliers that transit through the Interchange System.

One way to visualize these documents is through the management of invoices in the **Incoming Purchase** function. The management form is divided into a header section, with filter fields for document searches, and a results grid.

- **ES Status**: the status of the document once acquired in Fluentis:


  - **Unassigned**: the invoice has not yet been matched to a ledger record, an issued invoice from the passive cycle, or a document issued to a professional 
 
 
  - **Received**: the invoice has been matched

- **Type**: the reference code of the document type (purchase invoice)

- **Doc.Def. Date, Doc.Def. Number (Data doc.def., Numero doc.def.):** date and number of the acquired document

- **Supplier:** the issuer of the document

- **ES File Name:** the name of the XML file present in the interchange system and sent by it to the Fluentis Business Hub.

- **Last Event Date:** refers to the last action performed by the operator or the last notification received from the ES during the document management process

In the ribbon menu:

- The button **![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image01.png) Open Document** is enabled only if the selected document is in the **RECEIVED** status and opens the accounting entry/purchase document/invoice to which the XML file is matched

- The button **![](/img/neutral/common/view.png) View** allows you to view the selected XML file by opening the **ES Document Register**, where you can view the actions taken on the document and download attachments:

- The button **![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image03.png) Download Attachment** downloads the selected XML file





### MANUAL IMPORT OF ELECTRONIC INVOICES

For the manual import of electronic invoices, a specific command **![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image04.png)** has been designed, which will automatically open a window to select the file(s) to be imported into the SDI document register.


### MATCHING OF ELECTRONIC PURCHASE INVOICES

After searching for incoming documents using the **![](/img/neutral/common/view.png) View** function or by double-clicking on the file to be managed, it is possible to match the XML file to an accounting entry or a purchase document or again to a compensation entry, by clicking on the corresponding line related to an XML file, entering the file management dialog and using the functions:

- **![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image06.png) Assign to purchases** or

- **![](/img/neutral/common/posting.png) Assign to Postings** or again

- **![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image08.png) Assign to Professionals**

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image09.png)

Clicking on one of the three functions mentioned above will display a search dialog for registered purchase documents in the passive cycle of Fluentis, in the accounting records related to purchases, or in documents related to recipients' compensations.

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image10.png)

By searching through the filter panel presented in the search dialog and selecting an item from the results grid, the XML document is marked with the status **Received**, and the date and time of the matching are indicated next to the Document Received Transition. The document can also be modified back to the **Unassigned** status if necessary.

### AUTOMATIC ACCOUNTING

Fluentis also allows for the automatic creation of the corresponding accounting entry starting from the received purchase invoice. It will be enough to select the desired purchase invoice and then click the **CREATE RECORD** button.

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image11.png)

### SUMMARY OF MAJOR POINTS:

If the supplier indicated in the invoice is not present in the contacts register, a window will appear that allows you to create the corresponding register. The software will automatically fill in the supplier's details, and you will only need to fill in the specific fields.

Subsequently, the values to be used for the entry will be entered, specifying: the reason, the default counter cost/revenue, the VAT rate used, and finally the payment type.

A flag will allow you to save the settings for subsequent entries, without the need to enter them each time.

Automatically, by clicking ‘OK,’ you will be directed to the Ledger Records tab where you can check the correct entry of data and, if desired, integrate the record.

Saving the invoice status from "not examined" will update it to “Received.”

### DETAILS OF AUTOMATIC RECORD CREATION FUNCTION

**RECORD CREATION PARAMETERS**

Within the “Incoming Purchase Documents” form, selecting the 'Record Creation Parameters' button will open this configuration:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image12.png)

Within it, each user can configure the following management options:

A) Proposed registration date 

B) View detail data (Visualizza dati di dettaglio)

With the first option, the user can choose to be assigned the last recorded record date (for the IVA register of the pre-set/selected reason), the current date, or the date of the last event of the file itself (i.e., the date of receipt from the ES).

With the second option, the user sets the view of the management mask of the file itself, where any saved configurations in the supplier's register that issued the file will already be populated. In this form, it will be possible to modify any previously stored options or overwrite what is proposed to adapt it to the current requirement before creating the record. Without this flag, the mask would only open in case Fluentis does not have all the parameters to set the resulting record, typically for a new VAT or payment type used by the supplier that differs from those previously managed by the user.

**OPERATIONAL FLOW**

When the selected file is in the ‘Unassigned’ status, i.e., not linked to an accounting record, you can proceed to its accounting by clicking the ‘Create Record’ button:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image13.png)

Once this button is pressed, Fluentis will analyze the file to identify, through the VAT number of the issuer, the supplier's detail account. Depending on the cases, one of the following messages may appear:

**Case 1**, no supplier is identified

You will be prompted to create a new entity:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image14.png)

Pressing ‘Yes’ will automatically open the new register creation mask, in which the supplier's VAT number will be set by retrieving its data from the community database of Vies: it will be necessary to access the 'Accounting Data' tab to assign a supplier type accounting code to the new register. It is essential to save to proceed with the procedure; if you close without saving, the accounting procedure will be canceled with this message:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image15.png)

**Case 2**, there are multiple supplier-type detail accounts linked to a register with the issuer's VAT number

You will be prompted which detail account to use with this mask:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image16.png)

**Case 3**, the supplier is uniquely identified

If the supplier is already present, or if this document contains a newly coded item from the supplier for the first time, Fluentis will identify the first ‘Item Code Type’ present in the file (there may be several: supplier code, customer code, EAN13, nomenclature, etc.) to ask for confirmation of which item coding will be stored for this entity, for example:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image17.png)

The next phase depends on the user parameter ‘View detailed data’ or whether the file being processed is the first for this entity or if it contains a coding that Fluentis does not know how to manage for this entity. If it is the first invoice received from this supplier and there are no predefined settings in their register, then a mask like this will always open:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image18.png)

In which Fluentis requests to define:

1) which reason to use

2) what the default offset cost is

3) view the list of items present in the invoice, to allow for the assignment of a specific detail account to certain items

4) view the list of VAT rates or exemptions applied in the VAT box of the file

5) view the payment types used in the file

Each of these types of data allows the option to save the selected choice, to reuse it for invoices received subsequently from the same entity.

In case this is not the first file and the user has set the ‘View detailed data’ flag, this same mask will be viewed with any values previously stored in the supplier's register that issued the file for modification before creating the accounting record.

If this is not the first file and the user has not set the ‘View detailed data’ flag, then a configuration mask may open for only the values that Fluentis does not know how to manage concerning the configurations already stored in the supplier's register that issued the file: for example, it is the first time they issue an invoice with payment type MP12 instead of the previous MP05, or a new VAT exemption code.

Now let's see, in the aforementioned mask, what the specific characteristics of the 5 types mentioned above are:

1) template 

   In the reason to be used, the templates that have a document type coded with the 'TD' used by the supplier in the file will be visible. If there are no templates with these characteristics, the dropdown will display all accounting templates (e.g., a specific template was not coded for documents TD24 and the purchase template with TD01 is to be used).

2) Offset Cost/Revenue (defined)

   In this field, the standard cost detail account to be assigned to all item lines for which a specific detail account has not been stored can be defined.

3) Item grid

   In this grid, you can see the codes and descriptions of line items present in the file, to assign specific detail accounts to certain items present in the invoice. If the item is a coded item, Fluentis will store this code to identify it in subsequent documents; if the item is not coded, the line descriptions of the item (the first 200 characters) will be stored.

4) VAT grid 

   Within this grid, we will have the VAT box, with the percentage applied by the supplier or the nature of the exemption used. Fluentis will store the percentage (e.g., 22.00) or the exemption code used by the supplier with the corresponding rate selected by the user.

5) Payment grid 

   The list of payment codes (with any description used in the file) will be presented to assign the corresponding Fluentis type.

We will thus have recorded the various options to use, as in this example:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image19.png)

The final phase will be the creation of the ledger record: once the entered configurations are confirmed, or directly after reading the file if they have already been stored and the user has not set the ‘View detailed data’ flag, the ledger record populated with the data of the file itself will open.

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image20.png)

The record can be further modified at this stage, but these modifications will not affect the configurations already stored in the previous phase.

If the record saving is not completed, Fluentis will cancel the operations performed on the file, which will remain in the ‘Unassigned’ status: any configurations already saved in the process will be retained within the supplier's register.

### SUPPLIER REGISTER: F.E. IMPORT CONFIGURATION

The configurations stored during the management of the various files are kept within the various supplier registers in the ‘F.E. Import Configuration’ tab.

Here is the result of storing in the example used:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image21.png)

In this grid, we essentially find the sections we previously stored.

In the first field, we indicate what we are storing in the row: document type, type of transfer/service, VAT percentage and its nature, payment type. Depending on this row type, the subsequent fields will be activated: in the ‘P.A. Code’, the list of official codes that can be used in the files (from document types to VAT natures to payment types, etc.) will be viewed; in the subsequent columns, the reason, VAT rate, payment type, or Fluentis accounting detail account will be indicated. In the ‘Supplier Value’ field, we will typically have the ‘free’ data that the supplier may include in the file: in particular, the VAT percentage (22.00, 10.00, etc.) but mainly the code or description of the item line.

The 'Offset Cost/Revenue (defined)' (point 2 of the above list) is stored in the standard offset detail account field of the register, here:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image22.png)

The “Supplier Item Code Type", finally, is present in the 'Fiscal Information' tab:

![](/img/it-it/finance-area/sdi-documents/incoming-purchase-documents/image23.png)

It is therefore possible to intervene at these points to review the settings already stored and modify them in view of future accountings.

### CANCELLATION OF AN AUTOMATICALLY CREATED RECORD

Proceed as follows:

- Cancel the automatic link between the ES document and the record, bringing the ES document back to the **unassigned** status (using the appropriate dropdown accessible from the document list mask for incoming ES, as well as from the accounting records list mask)
- Proceed to delete the accounting record normally as if it were entered from the journal procedure.