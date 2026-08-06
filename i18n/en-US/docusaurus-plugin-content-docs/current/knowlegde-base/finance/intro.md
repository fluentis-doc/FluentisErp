---
title: Administration FAQ 
sidebar_position: 1
---


<details>

  <summary>1. Which electronic invoices are inserted into the folder set in the <b>Electronic Document Configuration</b> table?</summary>
  
There are two conditions to meet in the customer registry. 

The first condition is the <b>Document signature</b> flag, which must be active.                 
The second condition is the <b>Signed electronic invoicing</b> flag, which is a 3-state flag:   

- When it is 1 for the customer, a signature is required, regardless of other configuration options, so the file is always exported to the folder defined in electronic document configuration for signing;           

- When it is 0 for the customer, a signature is not required, regardless of other configuration options, so the file is not exported to the electronic document configuration folder, even if the folder is set;      

- When it is Null as above (which is the default setting), the setting in the ‘electronic document configuration’ applies, meaning if there is a path to create the file, it is always created; otherwise, it is not created.

</details>


<details>

  <summary>2. For weights, during the creation of the electronic invoice, Fluentis tells me that they cannot exceed 9,999. How can I remove this block?</summary>
  
This block is related to the rules of Electronic Invoicing, which does not accept weights above 9,999. 
To overcome this problem, it is necessary to scale down to a unit of measure if the threshold of 9,999 is exceeded, in order to use a coherent unit of measure and achieve the desired values.

</details>


<details>

  <summary>3. How can the <b>VAT Group</b> flag be added to an already created <b>Declaration of Intent</b>?</summary>
  
It is necessary to perform the following update, inserting the id of the declaration of intent.

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[ID of the declaration of intent]'

</details>


<details>

  <summary>4. How can I print a trial balance filtering the movements based on economic competence? For example, when setting the requested period, in the printing of the sub-accounts, the fields "from competence date" and "to competence date" do not consider economic competence, but it seems that the competence date is read, which in accounting records is placed next to the registration date.</summary>

I confirm that in the filters, when writing from competence date to competence date, it refers to that of competence (so to speak "accounting") of the header. Normally they coincide, but it can be used (though rarely) to record, for example, adjustment entries as of the balance approval date that refer to 12/31 where at that date maybe the period is already blocked for the final printing of the journal and would not accept the registration date. Regarding the economic competence date, the trial balance printing and more generally the system is not designed to operate that way. The most correct procedure is to calculate an end-of-period (interim closures) closure and launch the related adjustment integration entries. Alternatively, I recommend using the account visualization form where you can add from the object navigator the properties From AccrualDate ToAccrualDate that are the economic competence dates (From To) and use the filter placed on the first row of the detail grid. Alternatively, a customization of the report and of the launch form may be necessary by adding filters and headings, etc.

</details>

<details>

  <summary>5. Why, when comparing an interim closure calculated from 1/1 to 12/31 with the results of the administrative module, do I find entries in controlling that are not calculated in administration?</summary>

The controlling module reasons in a more flexible manner, in some situations, compared to the administrative module. 
In fact, it is able to adjust any cost revenue (with a compatible account type) even for shares of economic competence in the past. For example, if the cost recorded in year X has partial (or total) competence in year X-1, processing the closure of year X will still result in an adjustment (for example, an active entry). 
Special attention should be paid to the **management of adjustments made in the administrative module**. 
**It is recommended to execute the calculation and accounting of adjustments and the closure and reopening of accounts with reopening adjustments through automatic procedures, avoiding manual entries**. 
The automatic procedure imposes, in fact, the reopening entries' date of the adjustments to be the same as the original entry being adjusted and the economic competence of such entry to be the year X-1. This way, it avoids that when processing the period closures of year X, the software calculates additional adjustments as the correct competence result for the balance of year X (or interim period of year X) is already present due to the correct reopening of the previous adjustment.  

</details>

<details>

  <summary>6. Why in the adjustment management screen (accruals and deferrals), even though I am sure that I have entered suitable accounting movements, does it not calculate anything?</summary>

After ensuring that you have effectively entered accounting movements with economic competence dates straddling the accounting exercise and have used cost accounts having the type "to be adjusted" (db Fast Start) or having the Service flag in the *account types* table, if I still do not see any proposed accruals or deferrals, I might have inadvertently activated the *Monthly closure* flag in the general accounting parameters. This flag activates logics for non-Italian foreign localizations.

</details>

<details>

  <summary>7. I have associated a withholding tax type with a customer to generate the electronic invoice complete with the necessary tags, now I want to account for the invoice but I see that the accounting entry is not correct and does not include the withholding tax, why?</summary>

Inside the *Withholding Types* table, open the type associated with the relevant customer and check that the *Party Types* field is set to *Net Parties*.

</details>

<details>

  <summary>8. Fluentis always proposes the last currency used with the selected reason in a new accounting registration, ignoring the default currency of the customer or supplier. Why?</summary>

Check the setting of the general parameter in the PARAM_Parameter table code CA-RegCont-General_PurposeCurrencyByTemplate. If the parameter is set to 1, the last currency used with the reason will be proposed; if set to 0, no currency will be proposed following the basic logic of the company's currency and then reading the customer's or supplier's currency.

</details>

<details>

  <summary>9. I need to create multiple numbering for sales invoices. It is not clear if I need to create as many sales VAT registers for as many numberings or if a single sales register can have multiple numberings.</summary>

The relationship present in the sales accounting cycle is Invoice Type > Numbering > Associated accounting reason > VAT register associated with the reason. In a standard environment, it is noted that there can be multiple types, but if combined with the same reason, which therefore has the same VAT section, the numbering is the same (shared, so FT nr 1 for type A and then for type B will be nr 2). In the case of different invoice types with competing numberings, it is advisable to differentiate the VAT sections and therefore associate them with different reasons; otherwise, VAT sequencing will conflict. This is because normally in the reasons there is an option checked that proposes the VAT protocol equal to the document number (so as not to have to be careful to account for invoices in the order of number). Conversely, it is necessary to deactivate this option.

</details>

<details>

  <summary> 10. How can I manage a simplified VAT-only credit note TD08 for the recovery, for example, of VAT from a bankrupt customer? </summary>

1. In the Administration > **Document Types<!-- Tipi Documento -->** table, check for the presence (and if necessary add) a corresponding type. The Code / Description field can be freely named, for example *Simplified credit note for VAT recovery*, or *VAT-only credit note*, etc.; the **Credit note<!-- Nota di accredito -->** flag must be **active**, and the **Code for electronic invoices<!-- Codice per fatture elettroniche -->** field must show *TD08*
2. In the Sales > **Invoice Types<!-- Tipi Fatture -->** table, check for the presence (and if necessary add) a corresponding type. The Code / Description field can be freely named, for example *Simplified credit note for VAT recovery*, or *VAT-only credit note*, etc.; in the **Invoice Nature<!-- Natura Fattura -->** field, you MUST select the entry ***VAT-only adjustment note<!-- Nota di variazione di sola IVA -->***; the **Document type<!-- Tipo documento -->** field will refer to the type from point 1, and the **Reason<!-- Causale -->** (accounting) field will show the correct reason (to be created or selected within the Administration > General Ledger Templates<!-- Amministrativa > Causali di contabilità generale --> table) so that the accounting entry is appropriate for the situation in question. (for example, it will be a reason that manages credit notes with the corresponding accounting scheme).
3. Create the new document in the Sales > Sales Invoices<!-- Vendita > Fatture di Vendita --> module using the invoice type created in point 2.
    - The particular type set in the Invoice Nature field from point 2 allows you to enter, in the document's Items grid, only *Note* type rows where you can enter a brief description of the adjustment made, for example: "Document issued pursuant to art. 26, paragraph 3 bis, D.P.R. n. 633/1972, solely for the purpose of recovering VAT."
    - By expanding the *Reference Type<!-- Tipo Riferimento -->* section of the document *Header<!-- Testata -->*, you can, in addition to the Reference Type field, also fill in the details of the previous invoice being adjusted.
    - In this particular type of credit note<!-- Nota di accredito -->, the ability to manage values is limited exclusively to the **Summary<!-- Riepilogo -->** section and specifically in the *VAT Summary<!-- Riepilogo IVA -->* grid, where you will directly enter the **Tax<!-- Imposta -->** field (as a negative value) along with the VAT (code) field (e.g., 22%), leaving the taxable amount at zero (since this is a VAT-only credit note<!-- nota di accredito di sola iva -->)
4. Generate the xml file and send the electronic invoice as usual (according to the instructions in the online guide).
5. Post the credit note<!-- Nota di accredito --> as usual. By matching a typical accounting reason for Italian credit notes (for example, present in the Fast Start environments list), the accounting entry will still be executed appropriately, moving only the tax and not the taxable amount in the VAT section, and in the accounting section, reversing from the customer receivable (on the Credit side) the VAT amount that is deducted from the sales VAT account (on the Debit side) as a result of the recovery.

</details>

<details>

  <summary> 11. How can I manage a "Communication" TD29 to report a missed or irregular invoice from a supplier?<!-- 11. Come posso gestire una "Comunicazione" TD29 per comunicare una omessa o irregolare fatturazione da parte del fornitore? --> </summary>

1. In the Administration > **Document Types<!-- Tipi Documento -->** table, check for the presence (and if necessary add) a corresponding type. The Code / Description field can be freely named, for example *Communication for supplier invoicing error*; the **Self-invoice<!-- Autofattura -->** flag must be **active**, and the **Code for electronic invoices<!-- Codice per fatture elettroniche -->** field must show *TD29*
2. In the Sales > **Invoice Types<!-- Tipi Fatture -->** table, check for the presence (and if necessary add) a corresponding type. The Code / Description field can be freely named, for example *Communication for invoicing error*; in the **Invoice Nature<!-- Natura Fattura -->** field, select ***Invoice<!-- Fattura -->***; the **Document type<!-- Tipo documento -->** field will refer to the type from point 1. In the **Reason<!-- Causale -->** (accounting) field, it may not be necessary to link an entry since this is only a communication of a missed supplier invoice, with no VAT relevance.
3. Create the new document in the Sales > Sales Invoices<!-- Vendita > Fatture di Vendita --> module using the invoice type created in point 2.
   - By expanding the *Reference Type<!-- Tipo Riferimento -->* section of the document *Header<!-- Testata -->*, you can, if necessary, in addition to the Reference Type field, also fill in the details of the previous invoice being adjusted.
   - In the Seller field in the document header, enter the Supplier's data, while in the Customer field, enter the master data of your own company specifically created for self-invoices.
   - In the Items section of the document, enter a row with, for example, the description of the goods not invoiced and the related amounts, or if it is a correction of an irregular or incorrect invoice, the value of the adjustment.
4. Create the xml file and send it using the usual procedures.

</details>

<details>
  <summary> 12. How can I unlock a periodic VAT settlement printed as final?<!-- 12. Come posso sbloccare una liquidazione periodica IVA stampata in definitivo? --> </summary>

1. In the Administration > DECLARATIONS > **VAT Payments<!-- Versamenti Iva -->** form, where all periods for which the settlement is final are listed, select the period(s) to unlock and press the ***Delete VAT Settlements<!-- Cancella Liquidazioni IVA -->*** button.
2. Normally, if when the settlement was finalized, the option for automatic transfer entries was enabled, a message will appear confirming the automatic deletion of the transfers. A warning message will also be shown reminding you to manually delete the record (for the corresponding period) present in the **Periodic VAT Declaration<!-- Dichiarazione iva periodica -->** form that was automatically created when the settlement was finalized.
3. As mentioned in the previous point, manually delete the record present in the **Periodic VAT Declaration<!-- Dichiarazione iva periodica -->** form for the period corresponding to the one unlocked. Remember that this table stores data for managing the manual fields of the settlement (credit carried forward, offsetting, etc.)
4. Roll back the page counter and the last print date for the VAT section on which the periodic settlements are printed (generally code RIE in the FastStart database). Access the VAT Registers<!-- Registri IVA --> table, locate the section to be restored (e.g., *RIE*) and manually correct, for the current year in the lower detail grid, the **Last page printed<!-- Ultima pagina stampata -->**, **Last print date<!-- Data ultima stampa -->** fields.
5. If the periodic settlements are printed by appending them to an ordinary VAT section (for example, to sales or purchases), and in all cases where you need to modify VAT entries for which, in addition to the final settlement, the sections have also been printed as final, from the **VAT Registers<!-- Registri IVA -->** table press the **Cancel final prints<!-- Annulla stampe definitive -->** button in the ribbon bar. A popup will appear where you can select and confirm the period to unlock and the VAT section to unlock. In the case of unlocking multiple periods for a given section, it is advisable to proceed consecutively and unlock all intermediate periods, proceeding from the most recent to the oldest. Then proceed to manually restore the data for *last page printed, last print date, and last VAT protocol*.

</details>

<details>

  <summary> 13. How do I proceed to unlock the final print of the General Ledger?<!-- 13. Come procedo per sbloccare la stampa in definitivo del LIbro Giornale? --> </summary>

1. When the final print was created, in the **General Ledger<!-- Libro Giornale -->** print form, we launched the print by activating the *Final<!-- Definitiva -->* flag. At that time, remember, a check was also performed with a warning message if there were accounting entries prior to the selected dates in the print filter that had not yet been printed as final. It was still possible to ignore the warning. The period printed as final was blocked from possible changes to accounting entries.
2. **To unlock** a period printed as final, access the Configuration > Parameters > Administration > **Accounting Parameters<!-- Parametri di contabilità -->** form for the current year or the one to be unlocked and use the **Cancel final prints<!-- Annulla stampe definitive -->** button. A popup will appear where you specify the period (from date to date) to unlock. The unlocking consists, technically, in setting the entries concerned in the period to non-final status (field visible only in the database or by dragging the IsPrintedInJournal property - Printed in general ledger, into a form that points to the FSPosting object, such as the *Accounting Entries<!-- Registrazioni contabili -->* form accessible from the Administration > Entries > Entries<!-- Amministrazione > Registrazioni > Registrazioni --> menu), therefore it is advisable to proceed in an orderly and consecutive manner, avoiding leaving periods not finalized, which will still be reported by the warning mentioned above.
3. After unlocking, you must manually restore the data stored in the Accounting Parameters<!-- Parametri di contabilità --> form during the final print phase:
    - Last general ledger print date: roll it back to the last entry date not unlocked
    - Last page / row: roll it back to the last not unlocked
    - Debit / Credit balance: delete the values, which will then be automatically recreated with the new final print.

</details>

<details>

  <summary> 14. How can I forcibly close an open maturity<!-- maturity -->?<!-- 14. Come posso chiudere forzatamente una maturity aperta? --> </summary>

The status of a maturity<!-- maturity --> (open, closed, partially open) is calculated by the system and cannot be forced by acting directly on the maturity status field, as it would be immediately recalculated.
A maturity<!-- maturity --> is *closed* (and this status is detected) only if there is a payment for that maturity<!-- maturity --> (linked to it and having the same number).

Therefore, the correct way to close a maturity<!-- maturity --> created extra-accounting, or left open because an accounting payment entry did not also generate the payment at the maturity<!-- maturity --> level, is to use the following procedure.

1. Access the Administration > Maturity values > **Payments<!-- Pagamenti -->** form
2. Create a new payment with the **New<!-- Nuovo -->** button
3. Immediately after opening the form with the new payment data, instead of filling it in manually, use the **Create from Maturity values / Payments<!-- Crea da Maturity values / Pagamenti -->** command, which brings up a popup for searching and selecting the open maturity<!-- maturity --> you want to close. The popup contains the usual maturity<!-- Maturity values --> search fields; simply select the maturity<!-- maturity --> to close with the mouse and press the **Select<!-- Seleziona -->** button. The links between maturity<!-- maturity --> and payment will be created automatically and correctly. The status of the maturity<!-- maturity --> will automatically be recalculated as *Closed*.

</details>

<details>

  <summary> 15. How can I restore a bank receipt already presented or credited?<!-- 15. Come posso ripristinare una ricevuta bancaria già presentata o accreditata? --> </summary>

The procedure for issuing a bank receipt and its subsequent posting and presentation for collection involves a series of sequential steps. Therefore, if you try to perform a rollback, for example, of the creation of a bank receipt that has already been presented to the bank or credited, the software will prevent this operation and display a warning message.

All phases of creation and presentation with subsequent crediting, as well as posting operations, can be restored, but you must proceed in the correct logical order, starting from the most recent operations and going back to the earliest steps.

If, therefore, the sequence of operations performed for creation is as follows:

- Posting of the sales invoice with maturity<!-- maturity --> opening
- Automatic creation of the bank receipt from open Maturity values<!-- Maturity values -->
- Posting of the bank receipt issuance (often performed together with the previous step - wizard)
- Creation of the presentation batch and insertion of the effects (bank receipts) in the batch
- Posting of the batch presentation
- Posting of the crediting of bank receipts

The rollback must follow this order

- Restore posting of the crediting
- Restore posting of the batch
- Remove the effect (bank receipt) from the batch (which may not be deletable if it contains other effects as well) by selecting it from within the batch and pressing the DEL key
- Restore posting of the effects (BEFORE THE NEXT STEP)
- Restore the automatic creation of effects from Maturity values<!-- Maturity values -->
 
Remember that the restore procedures are accessible from the same forms where the creation took place, in the appropriate subsequent tab, always present.

</details>

<details>

  <summary> 16. Why, in an Agent's commission, does the Enasarco share charged to the company not correspond to the percentage set for the agent type (e.g., 8.5%)?<!-- 16. Come mai in un compenso Agente la quota Enasarco a carico ditta non corrisponde alla percentuale impostata per la tipologia di agente (esempio 8,5%)? --> </summary>

In some situations, such as entering the first commission for the Agent payee with the Enasarco reference month NOT in the first quarter, a value for the company share contribution higher than the simple application of the percentage due by the principal company may be proposed. This is because, in the detailed settings of the agent category, there is also the minimum contribution parameter, and therefore, if there are no previous commissions that have already covered this minimum value, Fluentis proposes it to cover with the first useful commission.

</details>