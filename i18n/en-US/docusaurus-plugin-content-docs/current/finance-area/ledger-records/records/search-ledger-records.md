---
title: Search Ledger Records
sidebar_position: 7
---

This form allows you to search for previously entered ledger records and, if necessary, to modify (or view) them by selecting the corresponding row and double-clicking.

#### Specific Buttons

> **Search**: allows you to start searching for entered ledger records according to the set filters.  
> **New**: allows you to enter a new ledger record.  
> **Modify**: allows you to modify a previously entered ledger record.  
> **View**: allows you to view a previously entered ledger record.  
> **Delete**: allows you to delete a previously entered ledger record.  
> **Source Document**: allows you to recall the source document from which the ledger record originated.  
> **Duplicate**: allows you to create a duplicate of the ledger record in order to create a similar one by modifying the appropriate elements, without needing to enter it from scratch.  

### Specific Filters

**Ledger template**: the combo box (as usual in Fluentis) allows you to select multiple reasons at once by holding down the Ctrl key.

**From / To registration date + From / To competence date**: these are the reference dates of the ledger records; note that the filters operate with an AND condition, and thus the search refinement accumulates. In case of an unintentional misalignment between the registration date and the competence date (accounting), to find the desired record it is advisable to alternatively remove the filter for competence or that for registration date.

**Account**: this refers to the sub-account entered in the header of the record (Customer or supplier).

**Account type**: allows you to select one (or more by holding down Ctrl) of the account types (Costs / Revenues / Asset / Liability or account types such as Customers, Suppliers, Banks, and Agents). Additionally, by opening the expander, it is possible to exclude types of account data.

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image01.png)

**Electronic invoicing** In the filter section, there is an expander related to the possible information regarding the status of the electronic invoice, referring to documents that interact with the Exchange System:

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image02.png)

In the ribbon menu, in the section dedicated to electronic invoicing, by using the button **ES Document Register**, you can view the actions performed on the selected document, and with the **Print Report** function, print the associated XML document. With the **Download attachment** or **Download log content** functions, execute the download of the XML file.

The summary results grid displays several columns that show the status and outcome of the documents in relation to their transmission to the ES:

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image06.png)

- **ES status**: contains the description of the status of the document, reporting both the internal management status of Fluentis and the status reported by Fluentis Business Hub and directly acquired from the ES.

- **ES file name**: the name of the file that is created when the document is advanced to the GENERATED status; in the original format or after the application of a digital signature, this file represents the invoice to be sent to the ES.

- **ES Id**: the unique identifier that the ES assigns to the document upon receipt.

- **ES receive date**: the date on which the exchange system received the document sent to it. This information is obtained from the receipt notification that the ES issues upon receipt of the shipment and before proceeding with the formal checks of the file.

- **Closing date**: the date of closure of the management flow (e.g., document Delivered).

- **Last event date**: the date of the last status change that occurred on the file, either manually or due to advancement of processing on the ES.