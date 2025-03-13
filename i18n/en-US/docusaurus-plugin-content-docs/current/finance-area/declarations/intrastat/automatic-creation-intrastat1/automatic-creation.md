---
title: Automatic creation
sidebar_position: 1
---

The 'Automatic creation' button opens a data retrieval wizard from the sales area.

The procedure consists of three tabs:

**[Invoice Filter](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/invoices-filter)**

**[Parameters](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters)**

**[Rollback](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/restore)**

During the **Creation** phase of the intra model, the **Invoices filter** will be used, in which the active invoices to be included in the model are searched, and the **Parameters**, which represents a preview of the lines in order to integrate any missing data.

At the end of the completion, after pressing the creation button, the automatic creation form should be closed and the data will be present in the respective section within the model tabs ready to be grouped and exported or printed.

**If an intra model created with the automatic procedure needs to be deleted, the automatic creation procedure must be reopened and restored using the commands available in the Rollback tab; only then can the model be closed and permanently deleted from the search form for intra models.**

If the command to delete the intra model is used in the above situation (without first performing the restoration), a warning message will appear, and if the warning is ignored, the deletion procedure will still perform the restoration in order to potentially proceed with a new automatic creation with filtering of active invoices. In this sense, what is restored is an internal parameter in the database that indicates to the system that the invoices in question have not already been used in an intra model.

 
:::tip Automatic Distribution of Accessory Costs in Invoice
It is possible to manage an automatic distribution of a final accessory cost (document footer) in the lines of the invoice, such as transportation costs, etc.

It is necessary to use an expense type (expense types table) with the flag ***Intra Stat. Value*** to be inserted in the invoice or in the customer/supplier registry to automate the proposal in the invoice.

During the automatic creation phase, you will notice that the value of each line is increased by a portion of the distributed final cost.
:::