---
title: Rearrange VAT reference no.
sidebar_position: 10
---

The functionality managed through this form allows for bulk modification of the VAT protocols assigned to accounting records (of VAT type, for example for received or issued invoices) in order to correct any errors or for specific needs.

Initially, the data search possible with this form can also be useful for control purposes, for example checking for missing protocol numbers or discrepancies (regarding for instance sales invoices) between the protocol number and the document number, which obviously represent irregularities from a fiscal point of view.

Upon opening the form, it is necessary to select the VAT register to check and/or modify and the date range of interest (for a general check, it is advisable to start from the beginning of the year). This selection is made at the top of the form.


At this point, it is possible to start the search using the **Search** command present in the ribbon bar.

The data is displayed in the first grid immediately below the filter area.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image02.png)

Since, in order to perform the checks, it might be interesting to sort the data not only by protocol number but also, for example, by document number, and since the document number is itself an alphanumeric string, there is a specific flag in the filter area **Consider document number like number** that allows for correct sorting criteria.

Example:

- with the flag deactivated, sorting by document number will yield 1, 10, 100, 2, 20, 200 .....

- with the flag activated, sorting by document number will yield 1, 2, 3, ... 10 ... 20 ... 100 ... 200

By selecting a row from the results grid (Accounting records), the related details regarding the VAT register and the journal will be displayed in the two **additional grids below** (this data clearly constitutes the details of the accounting record entered by the user or by the automatic invoice accounting procedure).

**POSSIBLE RENUMBERING / REORDERING MODES (POSSIBILI MODALITA' DI RINUMERAZIONE / RIORDINO)**:

- Partial: for example, suppose you need to "shift" all records starting from number 3 forward by one protocol number (in order to create a "gap" in the numbering to insert perhaps a missing entry).


 1. Select the rows interested in renumbering (for example, from the record with protocol number 3 onwards); you can use the Shift key on the keyboard or click & drag with the mouse;
 2. Enter the starting protocol number in the appropriate **Start number** field located at the bottom of the form (for example, 4);
 3. Press the **Automatic numeration** button located in the ribbon bar;
 4. The new protocols will be proposed as seen in the image;
 5. Press **Save** (located in the ribbon bar) to confirm the change.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image03.png)  ![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image04.png)

Alternatively (recommended only for modifications to single rows or a few rows)


 1. Position yourself next to the row corresponding to the record with protocol number 3, in the New VAT Protocol field, and type the new protocol (e.g., 4);
 2. Press **Save** (located in the ribbon bar) to confirm the change.

- Total: if you need to renumber all records, for example because it is misaligned with the document number or due to a lack of consistency between the protocol order and the registration date (for example, because the data-protocol consistency check has not been activated).


 1. Select all the rows from the results obtained through the filter (for example, all records from the beginning of the year to date) using the mouse or with the Ctrl A combination;
 2. Enter the starting protocol number in the appropriate **Start number** field located at the bottom of the form (in this case, 1);
 3. Press the **Automatic numeration** button located in the ribbon bar;
 4. The new protocols will be proposed as seen in the image;
 5. Press **Save** (located in the ribbon bar) to confirm the change.

It is possible to change the sorting criterion used in the renumbering operation by selecting, alternatively, from those proposed at the bottom of the form.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image05.png)

Registration Date / Number: the protocol number will be assigned in relation to the progression of the registration date, and for the same registration date.

Document Date / Number: the protocol number will be assigned in relation to the progression of the registration date, and for the same registration date as the document number.

Type / Date / Document Number: the protocol number will be assigned in relation to the document type (e.g., invoices, then credit notes), for the same document type, based on the progression of the registration date, and for the same registration date as the document number.

The flag **Rewrite descriptions**, if active, during the renumbering phase will update the description of the movement wherever, based on the settings defined in the **[accounting reason (causale contabile)](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, automatic reading of the VAT protocol is expected.