---
title: F24 Management
sidebar_position: 2
---

## Automatic Compilation

The creation of the F24 model involves loading a new model within which the header data is filled based on the references entered in the [**Company**](/docs/configurations/tables/general-settings/company) table.


The VAT period and withholding period (composed of the two fields month/year) are proposed as the current month: they can be changed to call up the reference month (for both the VAT to be paid and the withholding taxes to be paid).

In particular, regarding VAT settlements, the system will search for the period stored in the **[VAT Payments](/docs/finance-area/declarations/declarations/vat-payment)** mask present in general accounting (where the settlement values are automatically stored at the time of its final printing: manual loading of the value is allowed).

You can choose to process only VAT data or only withholding data by clearing the data from the fields (period and reference year) of the data that is not of interest.

Once the header data is stored, the **Propose values** button will be activated, which will fill in the various lines of the first **treasury card**.

Once all **other sections** of the declaration are also filled in **manually**, as needed, set the payer/signer and the file creation path, it will be possible to create the file with the appropriate button that will generate a file with a name structured as 'VAT number of company' + '_' + 'Declaration number' + '_' + 'Declaration date' with F24 extension. If mandatory data is missing, an explanatory error message will be returned, and the file will not be created.

It is possible to cancel the file creation with the appropriate management button.

Through the **Create Electronic File** button, it is possible to create the file that will be sent to the Revenue Agency through the appropriate channels (e.g., Entratel).
The file is automatically archived in Document Management and can be viewed and downloaded locally through the **Documents** dropdown button present in the ribbon bar.

:::note[Note]
For file creation, the presence (you may receive a warning message) of two Bizlink connectors called F24 (Managed by the service with authentication) and F24Errors, of type Folder Output and linked to the partner AgeEnt, AgeEnt flow, Flow Operation, and F24 flow document (F24Errors for the latter) is required.
:::

## Accounting

In the header of the model, it is possible to fill in the fields for any **Bank Expenses** and for the **Payment Bank** account.
At this point, it is possible to press the **Accounting** button to automatically generate the entry that records the bank outflow and the reversal of the accounts (automatically fed) where the debt for withholding taxes to be paid and VAT to be paid has been loaded.

:::tip[Note]
The accounts automatically used to load VAT debt and debt for withholding taxes are set, respectively, in the [**accounting parameters**](/docs/configurations/parameters/finance/accounting-parameters) regarding VAT, and in the [**Withholding tax Types**](/docs/configurations/tables/finance/withholding-tax-types) table for withholding taxes, with default accounts that may have been overwritten during [**payment accounting parameters**](/docs/finance-area/professional-men/accounting/payments-accounting/parameters).
:::

| Function | Extended Description |
| --- | --- |
| Save | Saves the current model. |
| Propose values | Retrieves data from VAT payments and from withholding taxes on compensations paid. |
| New detail | Sets the cursor in the detail input grid. |
| Delete detail | Deletes the selected detail line. |