---
title: Periodic VAT calculation
sidebar_position: 4
---

From this form, it is possible to manage the tax fulfillment (introduced by art. 21-bis of D.L. 193/2016 starting from the year 2017), which provides for the telematic submission of a communication of the summary data of periodic VAT settlements (monthly or quarterly).

Using the **Search** button present in the ribbon bar, you can view the list of already processed communications. It is possible to modify them (button **Modify**) or delete them (button **Delete**) or simply view them (button **View**).

To insert a new communication, press the **New** button.

**INSERTION PROCEDURE**:

- indicate the **Year** subject of communication and the number of the **Quarter** to be declared. At this point, the program will verify if there is already a declaration for this period, and if not (otherwise a warning is displayed), it will automatically create the name to be assigned to the telematic file and display the tabs related to the three months of the quarter with the corresponding lines according to the ministerial model.

- fill in the other header fields:

  **Fiscal Code**: If the company is a capital company, it will be mandatory to indicate the tax code of the individual who signs the communication and the corresponding **Position code**;

  **Declarant (Dichiarante):** alternatively to filling in the previous field (Tax code), it is possible to select the signing employee from the combo box linked to the Employee table, in which the employee (Administrator, Administrative Manager, etc.) in question must already have been entered, complete with tax code and charge code;

  **Position code**: the combo box is linked to a fixed table with codes defined by the ministerial model;

  **Intermediary fiscal code**: if an authorized intermediary is used for submitting the declaration (Caf, Accountant, etc...), indicate the corresponding tax code here.

  **Date of commitment (Data dell'impegno):** field to indicate the date of the commitment to the telematic presentation by the authorized intermediary;

  **Controlling VAT number (Partita IVA controllante):** (group VAT settlement) If the Communication is submitted by an entity or commercial company that has used the group VAT settlement procedure in the quarter, indicate the VAT number of the controlling entity or company (also in the Communication submitted by this subject for its individual position). The field must also be filled in if the entity or company with monthly periodic settlements has exited the group VAT settlement in the second or third month of the quarter.

  **Group declaration**: check the box if the Communication refers to the group VAT settlement (see ministerial instructions). By activating this flag for companies belonging to the group, some fields such as VAT payable (since it is paid by the parent company) will not be calculated.

NOTE: the communication executed in this mode relies on the prior processing of the (new) group VAT settlement functionality, which calculates the VAT balances of the various companies belonging to the group and transfers them to the parent company.

  **Last month**: In case of the subsequent lack of requirements to use the group VAT settlement procedure, indicate the last month of control (e.g. “02” for the month of February - See ministerial instructions).

  **Signature (Firma):** **MANDATORY** field, which must always be filled in.

  **Signature of the authorized person (Firma dell'incaricato):** to be affixed if the fields related to the authorized intermediary are filled in;

  **Intermediary Commitment**: the combo box is connected to a fixed table and must be filled in; in case of presentation by an intermediary, select whether the model was prepared by the taxpayer or by the intermediary itself; otherwise, leave the option "none".

- press **Save** to save the header data.

- Press **Calculate** quarter to execute the calculation of the data for the three months of the quarter. At this point, the fields will be automatically filled in; however, it is always possible to edit them manually for any corrections. Attention: if Calculate is pressed again, the data calculated by the system will be restored.

- Press the **Export** button to generate and store the telematic file in .xml format in the document management of Fluentis. It will then be possible to select it by pressing the document management button directly from the form in question and proceed to save a copy of the file on your PC for telematic submission or transmission to the authorized intermediary. It is also possible to print a hard copy (or preview) of the data in the ministerial model.

**ATTENTION**:

The correct processing of the data proposed by the calculation procedure, so that they conform to the result of the various **[periodic VAT settlements](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement)**, particularly depends on the correct activation/authorization, for calculation purposes, of the various VAT codes used in accounting records.

To verify the correct setting, open the **[VAT rates / modalities](/docs/configurations/tables/finance/vat-rates)** table and check in particular the column related to the flag in VAT declaration.

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image01.png)

With the flag active, the selected VAT code will be included in the calculation and reported in the tax model, while with the flag deactivated, the values will not be included.

Typically, all ordinary VAT codes should always be included. Exclusion VAT codes (e.g., as per art 15 dpr 633/72) should NOT be included. However, non-taxable codes (e.g., for intra-community transactions or reverse charge) should be included.

**N.B.** According to ministerial instructions, exclusion codes related to "transactions (active) not subject due to lack of territorial prerequisites as per arts. from 7 to 7-septies for which the issuance of the invoice is mandatory based on the provisions contained in art. 21, paragraph 6-bis" MUST be included in the declaration (line VP2).

It is recommended to refer to VAT regulations and ministerial instructions related to the annual VAT declaration (or to one of the other models of VAT data declaration that follow the same "logic") for the correct identification of the treatment of the various cases.

For example, incorrect setting, excluding a non-taxable code, will result in a correspondence between the model and the periodic settlements regarding the tax but will show a difference in values related to taxable amounts (lower in the communication compared to the settlements).

---

**NOTE:**
The calculation of field VP2 (in case you want to make a comparison and reconciliation with VAT settlements and accounting data) considers these types of movements:
Sales VAT Normal Regime
Sales VAT Intra-CEE
Sales VAT Extra-CEE
Sales with suspended VAT
Receipts
Agricultural Regime Sales
Sales VAT with split payment

**This therefore automatically excludes the data of taxable sales (resulting from automatic reclassifications on sales registers) relating to intra-community purchases and under reverse charge.**
This is consistent with ministerial instructions.

---

**TECHNICAL NOTE:**

for XML export, it is necessary:

- that the Windows service on the Artinfo Bizlink connector server be activated

- that the CommunicationIvaTrim connector has been created and configured as shown in the following image

- that the physical output folder (on the server) configured in the connector exists (e.g., "Outgoing")

- that the Document Types table in Fluentis contains the **Other Documents** type configured as shown in the following image.

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image02.png)

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image03.png)

---

### VIDEO TUTORIALS

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>